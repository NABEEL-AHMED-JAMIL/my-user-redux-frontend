import { IAuthorResponse } from '../../models/index';
import { Actions, ActionTypes } from '../actions/author.action';

// user state mean store
export interface AuthorState {
    author: IAuthorResponse,
    authors: IAuthorResponse[]
}

// create the empty state in store
export const initialState: AuthorState  = {
    author: {} as IAuthorResponse,
    authors: []
}

/**
 * @author Nabeel Ahmed
 */
// reducer
export function authorReducer(state = initialState, action: Actions): AuthorState {
    switch (action.type) {
        case ActionTypes.GET_AUTHOR_SUCCESS:
            return {
                ...state,
                author: action.payload
            };
        case ActionTypes.GET_ALL_AUTHORS_SUCCESS:
            return {
                ...state,
                authors: action.payload
            };
        case ActionTypes.CREATE_AUTHOR_SUCCESS:
            return {
                ...state,
                authors: [...state.authors, action.payload]
            };
        case ActionTypes.UPDATE_AUTHOR_SUCCESS:
            const updatedAuthors = state.authors
            .map(author =>
                author.id === action.payload.id ? action.payload : author
            );
            return {
                ...state,
                authors: updatedAuthors
            };
        case ActionTypes.DELETE_AUTHOR_SUCCESS:
            const filteredAuthors = state.authors
            .filter(author =>
                author.id !== action.payload.id
            );
            return {
                ...state,
                authors: filteredAuthors
            };
        default:
            return state;
    }
}