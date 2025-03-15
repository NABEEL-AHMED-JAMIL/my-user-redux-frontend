import { IAuthorResponse } from './author';
import {
    IBaseEntityRequest,
    IBaseEntityResponse,
    IEnum,
    Category,
    Format,
    Language
} from  './base';

export interface IBookRequest extends IBaseEntityRequest {
    isbn: string,
    title: string,
    price: number,
    publisher: string,
    publication: any,
    language: Language,
    category: Category,
    format: Format,
    description: any,
    coverImg: any,
    bookUrl: any,
    note: any,
}

export interface IBookResponse extends IBaseEntityResponse {
    isbn: string,
    title: string,
    price: number,
    publisher: string,
    publication: any,
    language: IEnum,
    category: IEnum,
    format: IEnum,
    description: any,
    coverImg: any,
    bookUrl: any,
    note: any,
    author: IAuthorResponse
}

export interface IBookListResponse {
    books: IBookResponse[]
}