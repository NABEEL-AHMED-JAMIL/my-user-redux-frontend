import { IFileInfo, ApiResponse, ApiCode } from '../models';

export const FILE_INFO: IFileInfo[] = [
    {
        id: 12312,
        fileStatus: 1, // from 1 to 5
        filename: '2024-04-21.csv',
        segmentPath: 'C:/stock-price/2024-10-10/2024-09-04.json',
        path: 'C:/stock-price/2024-10-10/2024-04-21.csv',
        type: 'CSV'
    }
];

export const FILE_INFO_API_RESPONSE: ApiResponse = {
    data: FILE_INFO,
    message: 'Data Fetch',
    status: ApiCode.SUCCESS
}