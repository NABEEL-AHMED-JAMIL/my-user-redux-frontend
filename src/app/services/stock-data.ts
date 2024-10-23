import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models';
import { config } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class StockDataService {
    
    constructor(private http: HttpClient) { }
    
}

