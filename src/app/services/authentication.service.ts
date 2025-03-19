import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

    private currentUserSubject: BehaviorSubject<ITokenResponse>;
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
        return this.apiService.postData(`${config.apiBaseUrl}/auth.json/getToken`, payload)
            .pipe(map(response => {
                if (response.data) {
                    this.storageService.set('current-user', response.data);
                    this.currentUserSubject.next(response.data);
                }
                return response;
            }));
    }

    public forgotPassword(payload: any): Observable<IGQLResponse> {
        return this.apiService.postData(`${config.apiBaseUrl}/auth.json/forgotPassword`, payload);
    }

    public resetPassword(payload: any): Observable<IGQLResponse> {
        return this.apiService.postData(`${config.apiBaseUrl}/auth.json/resetPassword`, payload);
    }

    public logout(): void {
        this.storageService.clear();
        this.currentUserSubject.next(null);
    }
}