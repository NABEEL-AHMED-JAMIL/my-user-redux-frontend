import { Action } from '@ngrx/store';
import { type } from '../../utils';

/**
 * @author Nabeel Ahmed
 */
export const ActionTypes = {
    // TOKEN ACTION
    GET_TOKEN: type('GET_TOKEN'),
    // FORGOT PASSWORD ACTION
    FORGOT_PASSWORD: type('FORGOT_PASSWORD'),
    // RESETE PASSWORD ACTION
    RESET_PASSWORD: type('RESET_PASSWORD'),
    // LOGOUT ACTION
    LOGOUT: type('LOGOUT')
}

// ##### GET_TOKEN #####
export class GetTokenAction implements Action {
    public readonly type = ActionTypes.GET_TOKEN;
    constructor(public payload: any) {}
}

// ##### FORGOT_PASSWORD #####
export class ForgotPasswordAction implements Action {
    public readonly type = ActionTypes.FORGOT_PASSWORD;
    constructor(public payload: any) {}
}

// ##### RESET_PASSWORD #####
export class ResetPasswordAction implements Action {
    public readonly type = ActionTypes.RESET_PASSWORD;
    constructor(public payload: any) {}
}

// ##### LOGOUT #####
export class LogoutAction implements Action {
    public readonly type = ActionTypes.LOGOUT;
    constructor() {}
}

export type Actions = GetTokenAction
    | ForgotPasswordAction
    | ResetPasswordAction
    | LogoutAction;