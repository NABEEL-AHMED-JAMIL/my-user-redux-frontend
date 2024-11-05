/**
 * Model use to store the data model
 */
export interface ApiResponse {
    status: ApiCode;
    message: any; 
    data: any;
    paging?: any;
}

export interface AuditLog {
    id: any;
    fileInfo: any;
    logsDetail: any;
    dateCreated: any;
    status: any;
}

export interface IFileInfo {
    id?: any;
    requestId?: any;
    folder?: any;
    filename?: any;
    type?: any;
    path?: any;
    segmentPath?: any;
    fileStatus?: any;
    status?: any;
    dateCreated?: any;
}

export interface IStockData {
    dataView: IDataView;
}

export interface IDataView {
    totalColumns: number;
    columns: IColumn[];
    totalRows: number;
    rows: any;
    summary: Summary;
}

export interface IColumn {
    name: string;
    order: number;
}

export interface IRow {
    text: any[];
    vector?: any[];
}

export interface IKV {
    key: any;
    value: any;
}

interface Summary {
    Open: SummaryStats;
    High: SummaryStats;
    Low: SummaryStats;
    Close: SummaryStats;
    Volume: SummaryStats;
    OpenInt: SummaryStats;
}

interface SummaryStats {
    count: number;
    mean: number;
    std: number;
    min: number;
    max: number;
    firstQuartile: number;
    median: number;
    thirdQuartile: number;
}

export enum ApiCode {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export enum FileStatus {
    Pending = 'Pending',
    Queue = 'Queue',
    Running = 'Running',
    Failed = 'Failed',
    Completed = 'Completed'
}

export enum Status {
    Active = 'Active',
    Delete = 'Delete'
}