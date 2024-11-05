import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IKV } from '../models';
import { config } from '../../environments/environment';
import { ApiService } from '.';


@Injectable({
    providedIn: 'root'
})
export class StockDataService {
    
    constructor(private apiService: ApiService) { }

    public fetchFileCount(): Observable<ApiResponse> {
        return this.apiService.getData(`${config.apiBaseUrl}/batch-process.json/fetchFileCount`);
    }

    public fetchFileListByDate(payload: IKV[]): Observable<ApiResponse> {
        return this.apiService.getData(`${config.apiBaseUrl}/batch-process.json/fetchFileListByDate`, this.apiService.getHttpParams(payload));
    }

    public fetchFileAuditLog(payload: IKV[]): Observable<ApiResponse> {
        return this.apiService.getData(`${config.apiBaseUrl}/batch-process.json/fetchFileAuditLog`, this.apiService.getHttpParams(payload));
    }

    public deleteFileById(payload: IKV[]): Observable<ApiResponse> {
        return this.apiService.deleteData(`${config.apiBaseUrl}/batch-process.json/deleteFileById`, null ,this.apiService.getHttpParams(payload));
    }

    public runFileById(payload: IKV[]): Observable<ApiResponse> {
        return this.apiService.getData(`${config.apiBaseUrl}/batch-process.json/runFileById`, this.apiService.getHttpParams(payload));
    }

    public fetchFileListByDateAndFileStatus(payload: IKV[]): Observable<ApiResponse> {
        return this.apiService.getData(`${config.apiBaseUrl}/stock-dashboard.json/fetchFileListByDateAndFileStatus`, this.apiService.getHttpParams(payload));
    }

    public fetchProcessFileByStatus(payload: IKV[]): Observable<ApiResponse> {
        return this.apiService.getData(`${config.apiBaseUrl}/stock-dashboard.json/fetchProcessFileByStatus`, this.apiService.getHttpParams(payload));
    }
    
    
}

