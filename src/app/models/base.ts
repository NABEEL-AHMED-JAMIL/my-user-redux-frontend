/**
 * Model use to store the data model
 */
export interface ApiResponse {
    status: ApiCode,
    message: any,    
    data: any,
    paging?: any
}

export interface IStockData {
    dataView: IDataView
}

export interface IDataView {
    totalColumns: number,
    columns: IColumn[],
    totalRows: number,
    rows: any
}

export interface IColumn {
    name: string,
    order: number
}

export interface IRow {
    text: any[],
    vector?: any[]
}

export enum ApiCode {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}