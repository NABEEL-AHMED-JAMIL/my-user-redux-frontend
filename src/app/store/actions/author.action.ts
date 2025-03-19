import { Action } from '@ngrx/store';
import { type } from '../../utils';

export const ActionTypes = {
    // GET AUTHOR
    GET_AUTHOR: type('GET_AUTHOR'),
    GET_AUTHOR_SUCCESS: type('GET_AUTHOR_SUCCESS'),
    GET_AUTHOR_FAILED: type('GET_AUTHOR_FAILED'),
    // GET ALL AUTHORS
    GET_ALL_AUTHORS: type('GET_ALL_AUTHORS'),
    GET_ALL_AUTHORS_SUCCESS: type('GET_ALL_AUTHORS_SUCCESS'),
    GET_ALL_AUTHORS_FAILED: type('GET_ALL_AUTHORS_FAILED'),
    // FETCH PUBLIC AUTHORS
    FETCH_PUBLIC_AUTHORS: type('FETCH_PUBLIC_AUTHORS'),
    FETCH_PUBLIC_AUTHORS_SUCCESS: type('FETCH_PUBLIC_AUTHORS_SUCCESS'),
    FETCH_PUBLIC_AUTHORS_FAILED: type('FETCH_PUBLIC_AUTHORS_FAILED'),
    // CREATE AUTHOR
    CREATE_AUTHOR: type('CREATE_AUTHOR'),
    CREATE_AUTHOR_SUCCESS: type('CREATE_AUTHOR_SUCCESS'),
    CREATE_AUTHOR_FAILED: type('CREATE_AUTHOR_FAILED'),
    // UPDATE AUTHOR
    UPDATE_AUTHOR: type('UPDATE_AUTHOR'),
    UPDATE_AUTHOR_SUCCESS: type('UPDATE_AUTHOR_SUCCESS'),
    UPDATE_AUTHOR_FAILED: type('UPDATE_AUTHOR_FAILED'),
    // DELETE AUTHOR
    DELETE_AUTHOR: type('DELETE_AUTHOR'),
    DELETE_AUTHOR_SUCCESS: type('DELETE_AUTHOR_SUCCESS'),
    DELETE_AUTHOR_FAILED: type('DELETE_AUTHOR_FAILED')
}

// ##### GET_AUTHOR
export class GetAuthorAction implements Action {
    public readonly type = ActionTypes.GET_AUTHOR;
    constructor(public payload: any) {}
}

// ##### GET_AUTHOR_SUCCESS
export class GetAuthorSuccesAction implements Action {
    public readonly type = ActionTypes.GET_AUTHOR_SUCCESS;
    constructor(public payload: any) {}
}

// ##### GET_AUTHOR_FAILED
export class GetAuthorFailedAction implements Action {
    public readonly type = ActionTypes.GET_AUTHOR_FAILED;
    constructor(public payload: any) {}
}

// ##### GET_ALL_AUTHORS
export class GetAllAuthorsAction implements Action {
    public readonly type = ActionTypes.GET_ALL_AUTHORS;
    constructor(public payload: any) {}
}

// ##### GET_ALL_AUTHORS_SUCCESS
export class GetAllAuthorsSuccesAction implements Action {
    public readonly type = ActionTypes.GET_ALL_AUTHORS_SUCCESS;
    constructor(public payload: any) {}
}

// ##### GET_ALL_AUTHORS_FAILED
export class GetAllAuthorsFailedAction implements Action {
    public readonly type = ActionTypes.GET_ALL_AUTHORS_FAILED;
    constructor(public payload: any) {}
}

// ##### FETCH_PUBLIC_AUTHORS
export class FetchPublicAuthorsAction implements Action {
    public readonly type = ActionTypes.FETCH_PUBLIC_AUTHORS;
    constructor(public payload: any) {}
}

// ##### FETCH_PUBLIC_AUTHORS_SUCCESS
export class FetchPublicAuthorsSuccesAction implements Action {
    public readonly type = ActionTypes.FETCH_PUBLIC_AUTHORS_SUCCESS;
    constructor(public payload: any) {}
}

// ##### FETCH_PUBLIC_AUTHORS_FAILED
export class FetchPublicAuthorsFailedAction implements Action {
    public readonly type = ActionTypes.FETCH_PUBLIC_AUTHORS_FAILED;
    constructor(public payload: any) {}
}

// ##### CREATE_AUTHOR
export class CreateAuthorAction implements Action {
    public readonly type = ActionTypes.CREATE_AUTHOR;
    constructor(public payload: any) {}
}

// ##### CREATE_AUTHOR_SUCCESS
export class CreateAuthorActionSucces implements Action {
    public readonly type = ActionTypes.CREATE_AUTHOR_SUCCESS;
    constructor(public payload: any) {}
}

// ##### CREATE_AUTHOR_FAILED
export class CreateAuthorActionFailed implements Action {
    public readonly type = ActionTypes.CREATE_AUTHOR_FAILED;
    constructor(public payload: any) {}
}

// ##### UPDATE_AUTHOR
export class UpdateAuthorAction implements Action {
    public readonly type = ActionTypes.UPDATE_AUTHOR;
    constructor(public payload: any) {}
}

// ##### UPDATE_AUTHOR_SUCCESS
export class UpdateAuthorActionSucces implements Action {
    public readonly type = ActionTypes.UPDATE_AUTHOR_SUCCESS;
    constructor(public payload: any) {}
}

// ##### UPDATE_AUTHOR_FAILED
export class UpdateAuthorActionFailed implements Action {
    public readonly type = ActionTypes.UPDATE_AUTHOR_FAILED;
    constructor(public payload: any) {}
}

// ##### DELETE_AUTHOR
export class DeleteAuthorAction implements Action {
    public readonly type = ActionTypes.DELETE_AUTHOR;
    constructor(public payload: any) {}
}

// ##### DELETE_AUTHOR_SUCCESS
export class DeleteAuthorActionSucces implements Action {
    public readonly type = ActionTypes.DELETE_AUTHOR_SUCCESS;
    constructor(public payload: any) {}
}

// ##### DELETE_AUTHOR_FAILED
export class DeleteAuthorActionFailed implements Action {
    public readonly type = ActionTypes.DELETE_AUTHOR_FAILED;
    constructor(public payload: any) {}
}

export type Actions = GetAuthorAction
    | GetAuthorSuccesAction
    | GetAuthorFailedAction
    | GetAllAuthorsAction
    | GetAllAuthorsSuccesAction
    | GetAllAuthorsFailedAction
    | FetchPublicAuthorsAction
    | FetchPublicAuthorsSuccesAction
    | FetchPublicAuthorsFailedAction
    | CreateAuthorAction
    | CreateAuthorActionSucces
    | CreateAuthorActionFailed
    | UpdateAuthorAction
    | UpdateAuthorActionSucces
    | UpdateAuthorActionFailed
    | DeleteAuthorAction
    | DeleteAuthorActionSucces
    | DeleteAuthorActionFailed;

