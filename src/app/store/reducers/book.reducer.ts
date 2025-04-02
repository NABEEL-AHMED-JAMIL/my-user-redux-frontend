import { IBookListResponse, IBookResponse } from '../../models/index';
import { Actions, ActionTypes } from '../actions/book.action';


// user state mean store
export interface BookState {
    book: IBookResponse,
    books: IBookResponse[]
}

// create the empty state in store
export const initialState: BookState  = {
    book: {} as IBookResponse,
    books: []
}

/**
 * @author Nabeel Ahmed
 */
// reducer
export function bookReducer(state = initialState, action: Actions): BookState {
    switch (action.type) {
        case ActionTypes.GET_BOOK_SUCCESS:
            return {
                ...state,
                book: action.payload
            };
        case ActionTypes.GET_ALL_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload
            };
        case ActionTypes.CREATE_BOOK_SUCCESS:
            return {
                ...state,
                books: [...state.books, action.payload]
            };
        case ActionTypes.UPDATE_BOOK_SUCCESS:
            const updatedBooks = state.books.map(book =>
                book.id === action.payload.id ? action.payload : book
            );
            return {
                ...state,
                books: updatedBooks
            };
        case ActionTypes.DELETE_BOOK_SUCCESS:
            const filteredBooks = state.books.filter(book =>
                book.id !== action.payload.id
            );
            return {
                ...state,
                books: filteredBooks
            };
        default:
            return state;
    }
}