import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IGQLResponse, ITokenResponse } from '../models';
import { config } from '../../environments/environment';
import { ApiService } from './api.service';
import { StorageService } from '../helpers';

/**
 * @author Nabeel Ahmed
 */
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public currentUserSubject: BehaviorSubject<ITokenResponse>;
    public currentUser: Observable<ITokenResponse>;

    constructor(private apiService: ApiService,
        private storageService: StorageService) {
        this.currentUserSubject = new BehaviorSubject<ITokenResponse>(this.storageService.get('current-user'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): ITokenResponse {
        return this.currentUserSubject.value;
    }

    public getToken(payload: any): Observable<IGQLResponse> {
        return this.apiService.postData(`${config.apiBaseUrl}/auth/getToken`, payload);
    }

    public forgotPassword(payload: any): Observable<IGQLResponse> {
        return this.apiService.postData(`${config.apiBaseUrl}/auth/forgotPassword?username=${payload['username']}`);
    }

    public resetPassword(payload: any): Observable<IGQLResponse> {
        return this.apiService.postData(`${config.apiBaseUrl}/auth/resetPassword`, payload);
    }

    public logout(): any {
        this.storageService.clear();
        this.currentUserSubject.next(null);
    }
}