import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models';
import { config } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    constructor(private http: HttpClient) { }

    public fetchAllUser(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${config.apiBaseUrl}/user.json/fetchAllUser`);
    }

    public fetchById(payload: any): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${config.apiBaseUrl}/user.json/fetchById`, payload);
    }

    public addUser(payload: any): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${config.apiBaseUrl}/user.json/addUser`, payload);
    }

    public updateUser(payload: any): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${config.apiBaseUrl}/user.json/updateUser`, payload);
    }

    public deleteUser(payload: any): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${config.apiBaseUrl}/user.json/deleteUser`, payload);
    }
    
}

