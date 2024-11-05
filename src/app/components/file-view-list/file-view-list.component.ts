import { Component, OnInit } from '@angular/core';
import { ApiCode, AuditLog, IFileInfo, IKV } from '../../models';
import { AlertService, CommonService } from '../../helpers';
import { FileUploadService, StockDataService } from '../../services';
import { first } from 'rxjs';
import {Location} from '@angular/common';
import { config } from '../../../environments/environment';


@Component({
    selector: 'file-view-list',
    templateUrl: './file-view-list.component.html',
    styleUrls: ['./file-view-list.component.css']
})
export class FileViewListComponent implements OnInit {

    public dateFilter: any;
    public page: number = 1;
    public pageSize: number = 10000;
    // data payload
    public data: IFileInfo[] = [];
    // popup for audit logs
    public isVisible: boolean = false;
    public auditLogs: AuditLog[] = [];
    // popup for file upload
    public isUploadModalVisible = false;
    public selectedFile: File | null = null;
    // file upload url triger on upload
    public uploadUrl = `${config.apiBaseUrl}/action.json/uploadFile`;

    constructor(
        private location: Location,
        private alertService: AlertService,
        public commonService: CommonService,
        private stockDataService: StockDataService,
        private fileUploadService: FileUploadService) {
        this.dateFilter = new Date(); // Sets the current date
    }

    ngOnInit() {
        this.fetchFileListByDate();
    }

    public refreshEvent(): any {
        this.fetchFileListByDate();
    }

    // fetch session statistics
    public fetchFileListByDate(): any {
        let payload: IKV[] = [
            {
                key: 'date',
                value: `${this.dateFilter.getFullYear()}-${String(this.dateFilter.getMonth() + 1).padStart(2, '0')}-${String(this.dateFilter.getDate()).padStart(2, '0')}`
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
        this.stockDataService.fetchFileListByDate(payload).pipe(first())
            .subscribe((response: any) =>
                this.handleApiResponse(response, () => {
                    this.data = response.data?.content;
                })
            );
    }

    public onDateChangeEvent(result: Date): any {
        this.dateFilter = result;
        this.fetchFileListByDate();
    }

    public downloadFileById(fileId: any, filename: any): any {
        let payload: IKV[] = [
            {
                key: 'fileId',
                value: fileId
            }
        ];
        this.fileUploadService.downloadFileById(payload).pipe(first())
            .subscribe((response: any) =>
                this.handleApiResponse(response, () => {
                    this.commonService.downLoadFile(response, filename);
                })
            );
    }

    public deleteFileById(fileId: any): any {
        let payload: IKV[] = [
            {
                key: 'fileId',
                value: fileId
            }
        ];
        this.stockDataService.deleteFileById(payload).pipe(first())
            .subscribe((response: any) =>
                this.handleApiResponse(response, () => {
                    this.fetchFileListByDate();
                })
            );
    }

    public runFileById(fileId: any): any {
        let payload: IKV[] = [
            {
                key: 'fileId',
                value: fileId
            }
        ];
        this.stockDataService.runFileById(payload).pipe(first())
            .subscribe((response: any) =>
                this.handleApiResponse(response, () => {
                    this.fetchFileListByDate();
                })
            );
    }

    public fetchFileAuditLog(fileId: any): any {
        let payload: IKV[] = [
            {
                key: 'fileId',
                value: fileId
            }
        ];
        this.stockDataService.fetchFileAuditLog(payload).pipe(first())
            .subscribe((response: any) =>
                this.handleApiResponse(response, () => {
                    this.isVisible = true;
                    this.auditLogs = response.data;
                })
            );
    }

    public handleAuditLogCancel(): void {
        this.isVisible = false;
        this.auditLogs = [];
    }

    // Method to open the upload modal
    public showUploadModal(): void {
        this.isUploadModalVisible = true;
    }

    public handleChange(info: any): void {
        if (info.file.status === 'uploading') {
            console.log('Uploading file:', info.file.name);
        }
        if (info.file.status === 'done') {
            this.fetchFileListByDate();
            this.alertService.showSuccess(`${info.file.name} file uploaded successfully.`, ApiCode.SUCCESS);
            this.isUploadModalVisible = false; // Close modal after successful upload
        } else if (info.file.status === 'error') {
            this.alertService.showError(`${info.file.name} file upload failed.`, ApiCode.ERROR);
        }
    }

    // Method to handle modal cancel action
    public handleFileUploadCancel(): void {
        this.isUploadModalVisible = false;
        this.selectedFile = null; // Reset the selected file
    }

    private handleApiResponse(response: any, successCallback: Function): void {
        if (response.status === ApiCode.ERROR) {
            this.alertService.showError(response.message, ApiCode.ERROR);
            return;
        }
        successCallback();
    }

    public backClicked(): void {
        this.location.back();
    }


}