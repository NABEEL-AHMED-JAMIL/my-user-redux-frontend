import { Component, OnInit } from '@angular/core';
import { AlertService, AppDashboardThemeService, CommonService } from '../../helpers';
import { ApiCode, IFileInfo, IKV, FileStatus, IStockData } from '../../models';
import { StockDataService } from '../../services';
import { first } from 'rxjs';
import { EChartsOption } from 'echarts';

@Component({
    selector: 'stock-data',
    templateUrl: './stock-data.component.html',
    styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {

    public dateFilter: any;
    public page: number = 1;
    public pageSize: number = 10000;
    // data payload
    public fileInfos: IFileInfo[] = [];
    // stock data
    public selectedRow: any;
    public fileInfo: IFileInfo;
    public stockData: IStockData;
    public summarys: any[] = [];
    public selectedOption: any = 'statistics';
    // main dashboard
    public stock_exchange_data: EChartsOption;
    public stock_open_graph: EChartsOption;
    public stock_high_graph: EChartsOption;
    public stock_low_graph: EChartsOption;
    public stock_close_graph: EChartsOption;

    constructor(
        private alertService: AlertService,
        public commonService: CommonService,
        private stockDataService: StockDataService,
        private appDashboardThemeService: AppDashboardThemeService) {
        this.dateFilter = new Date();
    }

    ngOnInit() {
        this.fetchFileListByDateAndFileStatus();
    }

    public refreshEvent(): any {
        this.fetchFileListByDateAndFileStatus();
    }

    public onDateChangeEvent(result: Date): any {
        this.dateFilter = result;
        this.fetchFileListByDateAndFileStatus();
    }

    // fetch session statistics
    public fetchFileListByDateAndFileStatus(): any {
        let payload: IKV[] = [
            {
                key: 'date',
                value: `${this.dateFilter.getFullYear()}-${String(this.dateFilter.getMonth() + 1).padStart(2, '0')}-${String(this.dateFilter.getDate()).padStart(2, '0')}`
            },
            {
                key: 'fileStatus',
                value: FileStatus.Completed
            },
            {
                key: 'page',
                value: this.page
            },
            {
                key: 'pageSize',
                value: this.pageSize
            }
        ];
        this.stockDataService.fetchFileListByDateAndFileStatus(payload).pipe(first())
            .subscribe((response: any) =>
                this.handleApiResponse(response, () => {
                    this.fileInfos = response.data?.content;
                })
            );
    }

    public viewStockStatistics(fileInfo: IFileInfo): void {
        let payload: IKV[] = [
            {
                key: 'fileId',
                value: fileInfo.id
            }
        ];
        this.stockDataService.fetchProcessFileByStatus(payload).pipe(first())
            .subscribe((response: any) =>
                this.handleApiResponse(response, () => {
                    this.stockData = response.data;
                    this.fileInfo = fileInfo;
                    this.summarys = Object.keys(this.stockData.dataView.summary)
                    .map(stat => ({
                        summary: stat,
                        count: this.stockData.dataView.summary[stat].count,
                        std: this.stockData.dataView.summary[stat].std,
                        firstQuartile: this.stockData.dataView.summary[stat].firstQuartile,
                        median: this.stockData.dataView.summary[stat].median,
                        thirdQuartile: this.stockData.dataView.summary[stat].thirdQuartile,
                        max: this.stockData.dataView.summary[stat].max,
                        min: this.stockData.dataView.summary[stat].min,
                        mean: this.stockData.dataView.summary[stat].mean
                    }));
                    // pre process
                    const stockList = this.stockData.dataView.rows.map((payload: any) => payload.text);
                    this.stock_exchange_data = this.appDashboardThemeService.fillCandlestickLargeStockPayload(stockList);
                    this.appDashboardThemeService.initChart('stock_exchange_data', this.stock_exchange_data);
                    // open
                    const openList = stockList.map((payload: any) => [payload[0], payload[1]]);
                    this.stock_open_graph = this.appDashboardThemeService.fillAreaPiecesStockPayload(openList);
                    this.appDashboardThemeService.initChart('stock_open_graph', this.stock_open_graph);
                    // high
                    const highList = stockList.map((payload: any) => [payload[0], payload[2]]);
                    this.stock_high_graph = this.appDashboardThemeService.fillAreaPiecesStockPayload(highList);
                    this.appDashboardThemeService.initChart('stock_high_graph', this.stock_high_graph);
                    // low
                    const lowList = stockList.map((payload: any) => [payload[0], payload[3]]);
                    this.stock_low_graph = this.appDashboardThemeService.fillAreaPiecesStockPayload(lowList);
                    this.appDashboardThemeService.initChart('stock_low_graph', this.stock_low_graph);
                    // close
                    const closeList = stockList.map((payload: any) => [payload[0], payload[4]]);
                    this.stock_close_graph = this.appDashboardThemeService.fillAreaPiecesStockPayload(closeList);
                    this.appDashboardThemeService.initChart('stock_close_graph', this.stock_close_graph);           
                })
            );
    }

    public onActionChange(event: Event): void {
        this.selectedOption = (event.target as HTMLSelectElement).value;
    }

    private handleApiResponse(response: any, successCallback: Function): void {
        if (response.status === ApiCode.ERROR) {
            this.alertService.showError(response.message, ApiCode.ERROR);
            return;
        }
        successCallback();
    }

}