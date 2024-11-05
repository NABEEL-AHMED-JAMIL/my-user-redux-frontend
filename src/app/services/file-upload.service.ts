import { Injectable } from '@angular/core';
import { ApiService } from '.';
import { config } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IKV } from '../models';


@Injectable({
    providedIn: 'root'
})
export class FileUploadService {
    
    constructor(private apiService: ApiService) { }

    public downloadFileById(payload: IKV[]): Observable<any> {
        return this.apiService.getDownload(`${config.apiBaseUrl}/action.json/downloadFileById`, this.apiService.getHttpParams(payload));
    }

    public uploadFile(payload: FormData): Observable<any> {
        return this.apiService.postData(`${config.apiBaseUrl}/action.json/uploadFile`, payload);
    }

    
}

