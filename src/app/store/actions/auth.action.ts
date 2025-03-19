import { Action } from '@ngrx/store';
import { type } from '../../utils';

export const ActionTypes = {
    // TOKEN ACTION
    GET_TOEKN: type('GET_TOEKN'),
    GET_TOEKN_SUCCESS: type('GET_TOEKN_SUCCESS'),
    GET_TOEKN_FAILED: type('GET_TOEKN_FAILED'),
    // FORGOT PASSWORD ACTION
    FORGOT_PASSWORD: type('FORGOT_PASSWORD'),
    FORGOT_PASSWORD_SUCCESS: type('FORGOT_PASSWORD_SUCCESS'),
    FORGOT_PASSWORD_FAILED: type('FORGOT_PASSWORD_FAILED'),
    // RESETE PASSWORD ACTION
    RESETE_PASSWORD: type('RESETE_PASSWORD'),
    RESETE_PASSWORD_SUCCESS: type('RESETE_PASSWORD_SUCCESS'),
    RESETE_PASSWORD_FAILED: type('RESETE_PASSWORD_FAILED'),
    // LOGOUT ACTION
    LOGOUT: type('LOGOUT'),
    LOGOUT_SUCCESS: type('LOGOUT_SUCCESS'),
    LOGOUT_FAILED: type('LOGOUT_FAILED')
}

// ##### GET_TOEKN
export class GetTokenAction implements Action {
    public readonly type = ActionTypes.GET_TOEKN;
    constructor(public payload: any) {}
}

// ##### GET_TOEKN_SUCCESS
export class GetTokenSuccesAction implements Action {
    public readonly type = ActionTypes.GET_TOEKN_SUCCESS;
    constructor(public payload: any) {}
}

// ##### GET_TOEKN_FAILED
export class GetTokenFailedAction implements Action {
    public readonly type = ActionTypes.GET_TOEKN_FAILED;
    constructor(public payload: any) {}
}

// ##### FORGOT_PASSWORD
export class ForgotPasswordAction implements Action {
    public readonly type = ActionTypes.FORGOT_PASSWORD;
    constructor(public payload: any) {}
}

// ##### FORGOT_PASSWORD_SUCCESS
export class ForgotPasswordSuccesAction implements Action {
    public readonly type = ActionTypes.FORGOT_PASSWORD_SUCCESS;
    constructor(public payload: any) {}
}

// ##### FORGOT_PASSWORD_FAILED
export class ForgotPasswordFailedAction implements Action {
    public readonly type = ActionTypes.FORGOT_PASSWORD_FAILED;
    constructor(public payload: any) {}
}

// ##### RESETE_PASSWORD
export class ResetPasswordAction implements Action {
    public readonly type = ActionTypes.RESETE_PASSWORD;
    constructor(public payload: any) {}
}

// ##### RESETE_PASSWORD_SUCCESS
export class ResetPasswordSuccesAction implements Action {
    public readonly type = ActionTypes.RESETE_PASSWORD_SUCCESS;
    constructor(public payload: any) {}
}

// ##### RESETE_PASSWORD_FAILED
export class ResetPasswordFailedAction implements Action {
    public readonly type = ActionTypes.RESETE_PASSWORD_FAILED;
    constructor(public payload: any) {}
}

// ##### LOGOUT
export class LogoutAction implements Action {
    public readonly type = ActionTypes.LOGOUT;
    constructor(public payload: any) {}
}

// ##### LOGOUT_SUCCESS
export class LogoutSuccesAction implements Action {
    public readonly type = ActionTypes.LOGOUT_SUCCESS;
    constructor(public payload: any) {}
}

// ##### LOGOUT_FAILED
export class LogoutFailedAction implements Action {
    public readonly type = ActionTypes.LOGOUT_FAILED;
    constructor(public payload: any) {}
}

export type Actions = GetTokenAction
    | GetTokenSuccesAction
    | GetTokenFailedAction 
    | ForgotPasswordAction
    | ForgotPasswordSuccesAction
    | ForgotPasswordFailedAction
    | ResetPasswordAction
    | ResetPasswordSuccesAction
    | ResetPasswordFailedAction
    | LogoutAction
    | LogoutSuccesAction
    | LogoutFailedAction;