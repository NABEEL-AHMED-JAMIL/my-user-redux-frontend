import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpParams
} from '@angular/common/http';
import {
    Observable,
    throwError
} from 'rxjs';
import {
    map,
    tap,
    catchError
} from 'rxjs/operators';
import {
    AlertService,
    SpinnerService
} from '../helpers';
import { ERROR, IGQLResponse } from '../models';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient,
        private alertService: AlertService,
        private spinnerService: SpinnerService) {
    }

    // GET request with error handling and tap
    public getData(apiUrl: any, params?: HttpParams): Observable<IGQLResponse> {
        this.spinnerService.show();
        const options = {
            params: params || new HttpParams()
        };
        return this.http.get(apiUrl, options).pipe(
            map(reponse => reponse),
            tap(response => {
                console.log('Data fetched successfully:', response);
                this.spinnerService.hide();
            }),
            catchError(this.handleError.bind(this)));
    }

    // POST request with error handling and tap
    public postData(apiUrl: any, payload: any, params?: HttpParams): Observable<IGQLResponse> {
        this.spinnerService.show();
        const options = {
            params: params || new HttpParams()
        };
        return this.http.post(apiUrl, payload, options).pipe(
            map(reponse => reponse),
            tap(response => {
                console.log('Data posted successfully:', response);
                this.spinnerService.hide();
            }),
            catchError(this.handleError.bind(this)));
    }
    
    // Method to handle errors
    private handleError(error: HttpErrorResponse): void {
        console.error('Error occurred:', error); // Log the error to the console
        this.spinnerService.hide();  // Hide spinner on error
        let errorMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message || 'Internal Server Error'}`;
        }
        this.alertService.showError(errorMessage, ERROR);
    }

}