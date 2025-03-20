import { Injectable } from "@angular/core";
import { AuthenticationService } from '../../services/authentication.service';
import {
    Actions,
    createEffect,
    ofType
} from '@ngrx/effects';
import {
    from,
    map,
    of,
    tap,
    Observable,
    catchError,
    switchMap,
    finalize
} from "rxjs";
import {
    ActionTypes
} from "../actions/auth.action";
import {
    AlertService,
    SpinnerService,
    StorageService
} from "../../helpers";
import {
    ERROR,
    IGQLResponse,
    SUCCESS
} from "../../models";
import { Router } from "@angular/router";

/**
 * @author Nabeel Ahmed
 */
@Injectable()
export class AuthEffects {

    constructor(
        private router: Router,
        private actions: Actions,
        private alertService: AlertService,
        public spinnerService: SpinnerService,
        private storageService: StorageService,
        private authenticationService: AuthenticationService) {
    }

    /** getToken */
    private getToken: Observable<void> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.GET_TOKEN),
            tap(() => this.spinnerService.show()),
            switchMap(({ payload }) =>
                from(this.authenticationService.getToken(payload)).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.storageService.set('current-user', res.data);
                            this.authenticationService.currentUserSubject.next(res.data);
                            this.alertService.showSuccess(res.message, ActionTypes.GET_TOKEN);
                            this.router.navigate(['ql/mybook']);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.GET_TOKEN);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.GET_TOKEN);
                        return of(null);
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        ),
        {
            dispatch: false
        }
    );

    /** forgotPassword */
    private forgotPassword: Observable<void> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.FORGOT_PASSWORD),
            tap(() => this.spinnerService.show()),
            switchMap(({ payload }) =>
                from(this.authenticationService.forgotPassword(payload)).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.FORGOT_PASSWORD);
                            this.router.navigate(['/auth/login']);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.FORGOT_PASSWORD);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.FORGOT_PASSWORD);
                        return of(null);
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        ),
        {
            dispatch: false
        }
    );

    /** resetPassword */
    private resetPassword: Observable<void> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.RESET_PASSWORD),
            tap(() => this.spinnerService.show()),
            switchMap(({ payload }) =>
                from(this.authenticationService.resetPassword(payload)).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.RESET_PASSWORD);
                            this.router.navigate(['/auth/login']);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.RESET_PASSWORD);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.RESET_PASSWORD);
                        return of(null);
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        ),
        {
            dispatch: false
        }
    );

    /** logout */
    private logout: Observable<void> = createEffect(
        () =>
            this.actions.pipe(ofType(ActionTypes.LOGOUT),
                tap(() => this.spinnerService.show()),
                tap(() => {
                    this.authenticationService.logout();
                    this.spinnerService.hide();
                    this.router.navigate(['/auth/login'])
                    .then(() => {
                        window.location.reload();
                    });
                })
            ),
        {
            dispatch: false
        }
    );
}
