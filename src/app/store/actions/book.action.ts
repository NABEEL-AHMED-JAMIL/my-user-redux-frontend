import { Action } from '@ngrx/store';
import { type } from '../../utils';

export const ActionTypes = {
    // GET BOOK
    GET_BOOK: type('GET_BOOK'),
    GET_BOOK_SUCCESS: type('GET_BOOK_SUCCESS'),
    GET_BOOK_FAILED: type('GET_BOOK_FAILED'),
    // GET ALL BOOKS
    GET_ALL_BOOKS: type('GET_ALL_BOOKS'),
    GET_ALL_BOOKS_SUCCESS: type('GET_ALL_BOOKS_SUCCESS'),
    GET_ALL_BOOKS_FAILED: type('GET_ALL_BOOKS_FAILED'),
    // FETCH PUBLIC BOOKS
    FETCH_PUBLIC_BOOKS: type('FETCH_PUBLIC_BOOKS'),
    FETCH_PUBLIC_BOOKS_SUCCESS: type('FETCH_PUBLIC_BOOKS_SUCCESS'),
    FETCH_PUBLIC_BOOKS_FAILED: type('FETCH_PUBLIC_BOOKS_FAILED'),
    // CREATE BOOK
    CREATE_BOOK: type('CREATE_BOOK'),
    CREATE_BOOK_SUCCESS: type('CREATE_BOOK_SUCCESS'),
    CREATE_BOOK_FAILED: type('CREATE_BOOK_FAILED'),
    // UPDATE BOOK:
    UPDATE_BOOK: type('UPDATE_BOOK'),
    UPDATE_BOOK_SUCCESS: type('UPDATE_BOOK_SUCCESS'),
    UPDATE_BOOK_FAILED: type('UPDATE_BOOK_FAILED'),
    // DELETE BOOK:
    DELETE_BOOK: type('DELETE_BOOK'),
    DELETE_BOOK_SUCCESS: type('DELETE_BOOK_SUCCESS'),
    DELETE_BOOK_FAILED: type('DELETE_BOOK_FAILED')
}

// ##### GET_BOOK
export class GetBookAction implements Action {
    public readonly type = ActionTypes.GET_BOOK;
    constructor(public payload: any) {}
}

// ##### GET_BOOK_SUCCESS
export class GetBookSuccesAction implements Action {
    public readonly type = ActionTypes.GET_BOOK_SUCCESS;
    constructor(public payload: any) {}
}

// ##### GET_BOOK_FAILED
export class GetBookFailedAction implements Action {
    public readonly type = ActionTypes.GET_BOOK_FAILED;
    constructor(public payload: any) {}
}

// ##### GET_ALL_BOOKS
export class GetAllBooksAction implements Action {
    public readonly type = ActionTypes.GET_ALL_BOOKS;
    constructor(public payload: any) {}
}

// ##### GET_ALL_BOOKS_SUCCESS
export class GetAllBooksSuccesAction implements Action {
    public readonly type = ActionTypes.GET_ALL_BOOKS_SUCCESS;
    constructor(public payload: any) {}
}

// ##### GET_ALL_BOOKS_FAILED
export class GGetAllBooksFailedAction implements Action {
    public readonly type = ActionTypes.GET_ALL_BOOKS_FAILED;
    constructor(public payload: any) {}
}

// ##### FETCH_PUBLIC_BOOKS
export class FetchPublicBooksAction implements Action {
    public readonly type = ActionTypes.FETCH_PUBLIC_BOOKS;
    constructor(public payload: any) {}
}

// ##### FETCH_PUBLIC_BOOKS_SUCCESS
export class FetchPublicSuccesAction implements Action {
    public readonly type = ActionTypes.FETCH_PUBLIC_BOOKS_SUCCESS;
    constructor(public payload: any) {}
}

// ##### FETCH_PUBLIC_BOOKS_FAILED
export class FetchPublicFailedAction implements Action {
    public readonly type = ActionTypes.FETCH_PUBLIC_BOOKS_FAILED;
    constructor(public payload: any) {}
}

// ##### CREATE_BOOK
export class CreateBookAction implements Action {
    public readonly type = ActionTypes.CREATE_BOOK;
    constructor(public payload: any) {}
}

// ##### CREATE_BOOK_SUCCESS
export class CreateBookSuccesAction implements Action {
    public readonly type = ActionTypes.CREATE_BOOK_SUCCESS;
    constructor(public payload: any) {}
}

// ##### CREATE_BOOK_FAILED
export class CreateBookFailedAction implements Action {
    public readonly type = ActionTypes.CREATE_BOOK_FAILED;
    constructor(public payload: any) {}
}

// ##### UPDATE_BOOK
export class UpdateBookAction implements Action {
    public readonly type = ActionTypes.UPDATE_BOOK;
    constructor(public payload: any) {}
}

// ##### UPDATE_BOOK_SUCCESS
export class UpdateBookSuccesAction implements Action {
    public readonly type = ActionTypes.UPDATE_BOOK_SUCCESS;
    constructor(public payload: any) {}
}

// ##### UPDATE_BOOK_FAILED
export class UpdateBookFailedAction implements Action {
    public readonly type = ActionTypes.UPDATE_BOOK_FAILED;
    constructor(public payload: any) {}
}

 // ##### DELETE_BOOK
export class DeleteBookAction implements Action {
    public readonly type = ActionTypes.DELETE_BOOK;
    constructor(public payload: any) {}
}

// ##### DELETE_BOOK_SUCCESS
export class DeleteBookSuccesAction implements Action {
    public readonly type = ActionTypes.DELETE_BOOK_SUCCESS;
    constructor(public payload: any) {}
}

// ##### DELETE_BOOK_FAILED
export class DeleteBookFailedAction implements Action {
    public readonly type = ActionTypes.DELETE_BOOK_FAILED;
    constructor(public payload: any) {}
}

export type Actions = GetBookAction
    | GetBookSuccesAction
    | GetBookFailedAction
    | GetAllBooksAction
    | GetAllBooksSuccesAction
    | GGetAllBooksFailedAction
    | FetchPublicBooksAction
    | FetchPublicSuccesAction
    | FetchPublicFailedAction
    | CreateBookAction
    | CreateBookSuccesAction
    | CreateBookFailedAction
    | UpdateBookAction
    | UpdateBookSuccesAction
    | UpdateBookFailedAction
    | DeleteBookAction
    | DeleteBookSuccesAction
    | DeleteBookFailedAction;

