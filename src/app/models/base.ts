/**
 * Model use to store the data model
 */
export interface IDataModel {
    uuid: string;
    timestamp?: number
}

export interface ApiResponse {
    status: ApiCode;	    
    message: any;	    
    data: any;
    paging?: any;
}

export enum ApiCode {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}