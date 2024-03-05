import { Action } from '@ngrx/store';
import { type } from '../../utils';
import { IUser } from '../../models';

/**
 * Action type for user
 * Need Effect 
 * FETCH_USERS => dispatch yes
 * ADD_USERS => dispatch no
 * UPDATE_USERS => dispatch no
 * DELETE_USERS => dispatch no
 */
export const ActionTypes = {
    FETCH_USER: type('FETCH_USER'),
    // action users
    FETCH_USERS: type('FETCH_USERS'),
    USERS_FETCHED_SUCCESS: type('USERS_FETCHED_SUCCESS'),
    USERS_FETCHED_FAILED: type('USERS_FETCHED_FAILED'),
    // action add
    ADD_USERS: type('ADD_USERS'),
    ADD_USERS_SUCCESS: type('ADD_USERS_SUCCESS'),
    ADD_USERS_FAILED: type('ADD_USERS_FAILED'),
    // action update
    UPDATE_USERS: type('UPDATE_USERS'),
    UPDATE_USERS_SUCCESS: type('UPDATE_USERS_SUCCESS'),
    UPDATE_USERS_FAILED: type('UPDATE_USERS_FAILED'),
    // action delete
    DELETE_USERS: type('DELETE_USERS'),
    DELETE_USERS_SUCCESS: type('DELETE_USERS_SUCCESS'),
    DELETE_USERS_FAILED: type('DELETE_USERS_FAILED'),
}

// # FETCH
export class FetchUsersAction implements Action {
    public readonly type = ActionTypes.FETCH_USERS;
    constructor(public payload: any = null) {}
}

export class FetchUserActionSuccess implements Action {
    public readonly type = ActionTypes.USERS_FETCHED_SUCCESS;
    constructor(public payload: IUser[]) { }
}

export class FetchUserActionFailed implements Action {
    public readonly type = ActionTypes.USERS_FETCHED_FAILED;
    constructor(public payload: string) { }
}

// # ADD
export class AddUserAction implements Action {
    public readonly type = ActionTypes.ADD_USERS;
    constructor(public payload: IUser) {}
}

export class AddUserActionSucces implements Action {
    public readonly type = ActionTypes.ADD_USERS_SUCCESS;
    constructor(public payload: IUser) {}
}

export class AddUserActionFailed implements Action {
    public readonly type = ActionTypes.ADD_USERS_FAILED;
    constructor(public payload: string) { }
}

// # UPDATE
export class UpdateUserAction implements Action {
    public readonly type = ActionTypes.UPDATE_USERS;
    constructor(public payload: IUser) {}
}

export class UpdateUserActionSucces implements Action {
    public readonly type = ActionTypes.UPDATE_USERS_SUCCESS;
    constructor(public payload: IUser) {}
}

export class UpdateUserActionFailed implements Action {
    public readonly type = ActionTypes.UPDATE_USERS_FAILED;
    constructor(public payload: string) { }
}

// # Delete
export class DeleteUserAction implements Action {
    public readonly type = ActionTypes.DELETE_USERS;
    constructor(public payload: IUser) {}
}

export class DeleteUserActionSucces implements Action {
    public readonly type = ActionTypes.DELETE_USERS_SUCCESS;
    constructor(public payload: IUser) {}
}

export class DeleteUserActionFailed implements Action {
    public readonly type = ActionTypes.DELETE_USERS_FAILED;
    constructor(public payload: string) { }
}

export type Actions = FetchUsersAction
    | FetchUserActionSuccess
    | FetchUserActionFailed 
    | AddUserAction
    | AddUserActionSucces
    | AddUserActionFailed
    | UpdateUserAction
    | UpdateUserActionSucces
    | UpdateUserActionFailed
    | DeleteUserAction
    | DeleteUserActionSucces
    | DeleteUserActionFailed;