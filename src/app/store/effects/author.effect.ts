import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
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
    ActionTypes,
    GetAuthorSuccesAction,
    GetAuthorFailedAction,
    GetAllAuthorsSuccesAction,
    GetAllAuthorsFailedAction,
    FetchPublicAuthorsSuccesAction,
    FetchPublicAuthorsFailedAction,
    CreateAuthorSuccesAction,
    CreateAuthorFailedAction,
    UpdateAuthorSuccesAction,
    UpdateAuthorFailedAction,
    DeleteAuthorSuccesAction,
    DeleteAuthorFailedAction
} from "../actions/author.action";
import {
    AlertService,
    SpinnerService
} from "../../helpers";
import {
    ERROR,
    IGQLResponse,
    SUCCESS
} from "../../models";
import {
    AuthorService
} from '../../services/author.service';

@Injectable()
export class AuthorEffects {

    constructor(
        private actions: Actions,
        private alertService: AlertService,
        public spinnerService: SpinnerService,
        private authorService: AuthorService) {
    }

    /** getAuthor */
    private getAuthor: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.GET_AUTHOR),
            tap(() => this.spinnerService.show()),
            switchMap(({ payload }) =>
                from(this.authorService.getAuthor(payload)).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.GET_AUTHOR);
                            return new GetAuthorSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.GET_AUTHOR);
                            return new GetAuthorFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.GET_AUTHOR);
                        return of(new GetAuthorFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

    /** getAllAuthors */
    private getAllAuthors: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.GET_ALL_AUTHORS),
            tap(() => this.spinnerService.show()),
            switchMap(() =>
                from(this.authorService.getAllAuthors()).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.GET_ALL_AUTHORS);
                            return new GetAllAuthorsSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.GET_ALL_AUTHORS);
                            return new GetAllAuthorsFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.GET_ALL_AUTHORS);
                        return of(new GetAllAuthorsFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

    /** fetchPublicAuthors */
    private fetchPublicAuthors: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.FETCH_PUBLIC_AUTHORS),
            tap(() => this.spinnerService.show()),
            switchMap(() =>
                from(this.authorService.fetchPublicAuthors()).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.FETCH_PUBLIC_AUTHORS);
                            return new FetchPublicAuthorsSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.FETCH_PUBLIC_AUTHORS);
                            return new FetchPublicAuthorsFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.FETCH_PUBLIC_AUTHORS);
                        return of(new FetchPublicAuthorsFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

    /** updateAuthor */
    private createAuthor: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.CREATE_AUTHOR),
            tap(() => this.spinnerService.show()),
            switchMap(({ payload }) =>
                from(this.authorService.createAuthor(payload)).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.CREATE_AUTHOR);
                            return new CreateAuthorSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.CREATE_AUTHOR);
                            return new CreateAuthorFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.CREATE_AUTHOR);
                        return of(new CreateAuthorFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

    /** updateAuthor */
    private updateAuthor: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.UPDATE_AUTHOR),
            tap(() => this.spinnerService.show()),
            switchMap(({ payload }) =>
                from(this.authorService.updateAuthor(payload)).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.UPDATE_AUTHOR);
                            return new UpdateAuthorSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.UPDATE_AUTHOR);
                            return new UpdateAuthorFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.UPDATE_AUTHOR);
                        return of(new UpdateAuthorFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

    /** deleteAuthor */
    private deleteAuthor: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.DELETE_AUTHOR),
            tap(() => this.spinnerService.show()),
            switchMap(({ payload }) =>
                from(this.authorService.deleteAuthor(payload)).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.DELETE_AUTHOR);
                            return new DeleteAuthorSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.DELETE_AUTHOR);
                            return new DeleteAuthorFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.DELETE_AUTHOR);
                        return of(new DeleteAuthorFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

}
