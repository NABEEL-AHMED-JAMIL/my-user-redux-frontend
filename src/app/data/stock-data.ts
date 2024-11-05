import { IStockData, ApiResponse, ApiCode } from '../models';

export const USERS: IStockData = {
    dataView: {
        totalColumns: 7,
        columns: [
            {
                name: "Date",
                order: 0
            },
            {
                name: "Open",
                order: 1
            },
            {
                name: "High",
                order: 2
            },
            {
                name: "Low",
                order: 3
            },
            {
                name: "Close",
                order: 4
            },
            {
                name: "Volume",
                order: 5
            },
            {
                name: "OpenInt",
                order: 6
            }
        ],
        totalRows: 1000,
        rows: [
            {
                text: [
                    "2023-10-12",
                    "24.83",
                    "25.285",
                    "24.123",
                    "24.532",
                    "24540",
                    "9109"
                ]
            },
            {
                text: [
                    "2023-10-12",
                    "24.538",
                    "25.051",
                    "24.287",
                    "24.909",
                    "49058",
                    "4795"
                ]
            }
        ]
    }
}

export const STOCK_API_RESPONSE: ApiResponse = {
    data: USERS,
    message: 'Data Fetch',
    status: ApiCode.SUCCESS
}