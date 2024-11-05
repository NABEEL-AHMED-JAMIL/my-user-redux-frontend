import { Component, OnInit } from '@angular/core';
import {
    IKV,
    ApiCode,
    Dictionary
} from '../../models';
import {
    AlertService,
    CommonService,
    AppDashboardThemeService
} from '../../helpers';
import { StockDataService } from '../../services';
import { first } from 'rxjs';
import { EChartsOption } from 'echarts';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public today_count_by_type: EChartsOption;
    public current_month_daily_count: EChartsOption;
    public current_month_daily_count_by_type: EChartsOption;
    public current_month_daily_count_by_file_status: EChartsOption;

    constructor(private alertService: AlertService,
        public commonService: CommonService,
        private appDashboardThemeService: AppDashboardThemeService,
        private stockDataService: StockDataService) {
    }

    ngOnInit() {
        this.fetchFileCount();
    }

    // fetch session statistics
    public fetchFileCount(): any {
        this.stockDataService.fetchFileCount().pipe(first())
            .subscribe((response: any) =>
                this.handleApiResponse(response, () => {
                    this.todayCountByType(response.data);
                    this.currentMonthDailyCount(response.data);
                    this.currentMonthDailyCountByType(response.data);
                    this.currentMonthDailyCountByFileStatus(response.data);
                })
            );
    }

    private handleApiResponse(response: any, successCallback: Function): void {
        if (response.status === ApiCode.ERROR) {
            this.alertService.showError(response.message, ApiCode.ERROR);
            return;
        }
        successCallback();
    }

    private todayCountByType(data: any): void {
        let todayCountByType: IKV[] = data['today_count_by_type']
            .map((item: any) => {
                return {
                    name: item.fileType,
                    value: item.totalCount,
                }
            });
        this.today_count_by_type = this.appDashboardThemeService.fillPieChartPayload('File Type Statistics', todayCountByType);
        this.appDashboardThemeService.initChart('today_count_by_type', this.today_count_by_type);
    }

    private currentMonthDailyCount(data: any): void {
        let currentMonthDailyCount: IKV[] = data['current_month_daily_count']
            .map((item: any) => {
                return {
                    name: item.date,
                    value: item.totalCount,
                }
            });
        this.current_month_daily_count = this.appDashboardThemeService.fillPieChartPayload('Daily File Summary', currentMonthDailyCount);
        this.appDashboardThemeService.initChart('current_month_daily_count', this.current_month_daily_count);
    }

    private currentMonthDailyCountByType(data: any): void {
        let currentMonthDailyCountByType: Dictionary = new Dictionary();
        for (let dt of data['current_month_daily_count_by_type']) {
            let newkey = dt.date;
            let newValue: IKV = {
                key: dt.fileType,
                value: dt.totalCount
            }
            if (currentMonthDailyCountByType.has(dt.date)) {
                // Get the existing array and push the new value
                currentMonthDailyCountByType.get(newkey).push(newValue);
            } else {
                currentMonthDailyCountByType.set(newkey, [newValue]);
            }
        }
        // defalt data for tree
        const polylineEdgeData: any = {
            name: this.currentMonth(),
            children: []
        };
        for (const key in currentMonthDailyCountByType.getItems()) {
            if (currentMonthDailyCountByType.has(key)) {
                const values = currentMonthDailyCountByType.get(key);
                const dailyData = {
                    name: new Date(key).getDate(),
                    children: values.map((node) => ({
                        name: node.key,
                        value: `${node.value}`
                    }))
                };
                polylineEdgeData.children.push(dailyData);
            }
        }
        this.current_month_daily_count_by_type = this.appDashboardThemeService.fillTreePolylineEdgePayload("Daily File Type Summary", polylineEdgeData);
        this.appDashboardThemeService.initChart('current_month_daily_count_by_type', this.current_month_daily_count_by_type);
    }

    private currentMonthDailyCountByFileStatus(data: any): void {
        const daysInMonth = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
        const statuses = ['Pending', 'Queue', 'Running', 'Failed', 'Completed'];
        const currentMonthDailyCountByFileStatus = statuses.map(status => ({
            data: Array.from({ length:31 }, () => '-'),
            type: 'bar',
            stack: 'Pending',
            name: status
        }));
        // Fill the 'data' array based on the currentMonthDailyCountByFileStatus
        data['current_month_daily_count_by_file_status'].forEach((item: any) => {
            const date = new Date(item.date);
            // day of the month (1-31) to index (0-30)
            const dayIndex = date.getDate() - 1;
            const statusIndex = statuses.indexOf(item.fileStatus);
            if (statusIndex !== -1) {
                // Update the corresponding index with totalCount
                currentMonthDailyCountByFileStatus[statusIndex].data[dayIndex] = item.totalCount; 
            }
        });
        this.current_month_daily_count_by_file_status = this.appDashboardThemeService.fillBarStackPayload(daysInMonth, currentMonthDailyCountByFileStatus);
        this.appDashboardThemeService.initChart('current_month_daily_count_by_file_status', this.current_month_daily_count_by_file_status);
    }

    private currentMonth(): any {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        return `${year}-${month}`;
    }

}