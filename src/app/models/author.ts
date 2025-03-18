import { IBookResponse } from './book';
import {
    IBaseEntityRequest,
    IBaseEntityResponse,
    Role
} from  './base';

export interface IAuthorRequest extends IBaseEntityRequest {
    firstName?: string,
    lastName?: string,
    email?: string,
    username?: string,
    password?: string,
    role?: any
    biography?: string,
    nationality?: string,
    expertise?: string
}

export interface IAuthorResponse extends IBaseEntityResponse {
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string,
    role: Role
    biography: string,
    nationality: string,
    expertise: string,
    books: IBookResponse
}

export interface IAuthorListResponse {
    authors: IAuthorResponse[]
}