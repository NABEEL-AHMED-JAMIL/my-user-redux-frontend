import { Injectable } from "@angular/core";
import { UserService } from '../../services/user.service';
import { Actions, createEffect, ofType,  } from '@ngrx/effects';
import { Observable, catchError, from, map, of, switchMap, tap } from "rxjs";
import { Action } from "@ngrx/store";
import { ActionTypes, FetchUserActionSuccess, 
    FetchUserActionFailed, AddUserActionSucces, 
    AddUserActionFailed, UpdateUserActionSucces, 
    UpdateUserActionFailed, DeleteUserActionSucces, 
    DeleteUserActionFailed } from "../actions";
import { AlertService, SpinnerService } from "../../helpers";
import { ApiCode, ApiResponse } from "../../models";


@Injectable()
export class UserEffects {

    constructor(
        private actions: Actions,
        private userService: UserService,
        public spinnerService: SpinnerService,
        private alertService: AlertService) {
    }

    /** fetchAllUser */
    private fetchAllUser: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(ActionTypes.FETCH_USERS),
        tap(() => this.spinnerService.show()),
        switchMap(() => {
            return from(this.userService.fetchAllUser()).pipe(
                map((res: any) => {
                    return new FetchUserActionSuccess(res.data);
                }),
                catchError((err: any) => {
                    this.alertService.showError(err?.error.message, ActionTypes.FETCH_USERS);
                    return of(new FetchUserActionFailed(err?.error.message));
                })
            );
        }),
        tap(() => this.spinnerService.hide())
    ));

    /** addUser */
    private addUser: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(ActionTypes.ADD_USERS),
        tap(() => this.spinnerService.show()),
        switchMap(({payload}) => {
            return from(this.userService.addUser(payload)).pipe(
                map((res: ApiResponse) => {
                    if (res.status === ApiCode.SUCCESS) {
                        this.alertService.showSuccess(res.message, ActionTypes.ADD_USERS);
                        return new AddUserActionSucces(res.data);
                    } else if (res.status === ApiCode.ERROR) {
                        this.alertService.showSuccess(res.message, ActionTypes.ADD_USERS);
                        return new AddUserActionFailed(res.message);
                    }
                }),
                catchError((err: any) => {
                    this.alertService.showError(err?.error.message, ActionTypes.ADD_USERS);
                    return of(new AddUserActionFailed(err?.error.message));
                })
            );
        }),
        tap(() => this.spinnerService.hide())
    ));

    private updateUser: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(ActionTypes.UPDATE_USERS),
        tap(() => this.spinnerService.show()),
        switchMap(({payload}) => {
            return from(this.userService.updateUser(payload)).pipe(
                map((res: ApiResponse) => {
                    if (res.status === ApiCode.SUCCESS) {
                        this.alertService.showSuccess(res.message, ActionTypes.ADD_USERS);
                        return new UpdateUserActionSucces(res.data);
                    } else if (res.status === ApiCode.ERROR) {
                        this.alertService.showSuccess(res.message, ActionTypes.ADD_USERS);
                        return new UpdateUserActionFailed(res.message);
                    }
                }),
                catchError((err: any) => {
                    this.alertService.showError(err?.error.message, ActionTypes.UPDATE_USERS);
                    return of(new UpdateUserActionFailed(err?.error.message));
                })
            );
        }),
        tap(() => this.spinnerService.hide())
    ));

    private deleteUser: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(ActionTypes.DELETE_USERS),
        tap(() => this.spinnerService.show()),
        switchMap(({payload}) => {
            return from(this.userService.deleteUser(payload)).pipe(
                map((res: ApiResponse) => {
                    if (res.status === ApiCode.SUCCESS) {
                        this.alertService.showSuccess(res.message, ActionTypes.DELETE_USERS);
                        return new DeleteUserActionSucces(res.data);
                    } else if (res.status === ApiCode.ERROR) {
                        this.alertService.showSuccess(res.message, ActionTypes.DELETE_USERS);
                        return new DeleteUserActionFailed(res.message);
                    }
                }),
                catchError((err: any) => {
                    this.alertService.showError(err?.error.message, ActionTypes.DELETE_USERS);
                    return of(new DeleteUserActionFailed(err?.error.message));
                })
            );
        }),
        tap(() => this.spinnerService.hide())
    ));

}
