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
    GetBookSuccesAction,
    GetBookFailedAction,
    GetAllBooksSuccesAction,
    GGetAllBooksFailedAction,
    FetchPublicSuccesAction,
    FetchPublicFailedAction,
    CreateBookSuccesAction,
    CreateBookFailedAction,
    UpdateBookSuccesAction,
    UpdateBookFailedAction,
    DeleteBookSuccesAction,
    DeleteBookFailedAction
} from "../actions/book.action";
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
    BookService
} from "../../services/book.service";

@Injectable()
export class BookEffects {

    constructor(
        private actions: Actions,
        private alertService: AlertService,
        public spinnerService: SpinnerService,
        private bookService: BookService) {
    }

    /** getBook */
    private getBook: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.GET_BOOK),
            tap(() => this.spinnerService.show()),
            switchMap(({ payload }) =>
                from(this.bookService.getBook(payload)).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.GET_BOOK);
                            return new GetBookSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.GET_BOOK);
                            return new GetBookFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.GET_BOOK);
                        return of(new GetBookFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

    /** getAllBooks */
    private getAllBooks: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.GET_ALL_BOOKS),
            tap(() => this.spinnerService.show()),
            switchMap(() =>
                from(this.bookService.getAllBooks()).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.GET_ALL_BOOKS);
                            return new GetAllBooksSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.GET_ALL_BOOKS);
                            return new GGetAllBooksFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.GET_ALL_BOOKS);
                        return of(new GGetAllBooksFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

    /** fetchPublicBooks */
    private fetchPublicBooks: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.FETCH_PUBLIC_BOOKS),
            tap(() => this.spinnerService.show()),
            switchMap(() =>
                from(this.bookService.fetchPublicBooks()).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.FETCH_PUBLIC_BOOKS);
                            return new FetchPublicSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.FETCH_PUBLIC_BOOKS);
                            return new FetchPublicFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.FETCH_PUBLIC_BOOKS);
                        return of(new FetchPublicFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

    /** createBook */
    private createBook: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.UPDATE_BOOK),
            tap(() => this.spinnerService.show()),
            switchMap(({ payload }) =>
                from(this.bookService.createBook(payload)).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.CREATE_BOOK);
                            return new CreateBookSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.CREATE_BOOK);
                            return new CreateBookFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.CREATE_BOOK);
                        return of(new CreateBookFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

    /** updateBook */
    private updateBook: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.UPDATE_BOOK),
            tap(() => this.spinnerService.show()),
            switchMap(({ payload }) =>
                from(this.bookService.updateBook(payload)).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.UPDATE_BOOK);
                            return new UpdateBookSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.UPDATE_BOOK);
                            return new UpdateBookFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.UPDATE_BOOK);
                        return of(new UpdateBookFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

    /** deleteBook */
    private deleteBook: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ActionTypes.DELETE_BOOK),
            tap(() => this.spinnerService.show()),
            switchMap(({ payload }) =>
                from(this.bookService.deleteBook(payload)).pipe(
                    map((res: IGQLResponse) => {
                        if (res.status === SUCCESS) {
                            this.alertService.showSuccess(res.message, ActionTypes.DELETE_BOOK);
                            return new DeleteBookSuccesAction(res.data);
                        } else if (res.status === ERROR) {
                            this.alertService.showError(res.message, ActionTypes.DELETE_BOOK);
                            return new DeleteBookFailedAction(res.message);
                        }
                    }),
                    catchError((err: any) => {
                        this.alertService.showError(err?.error.message, ActionTypes.DELETE_BOOK);
                        return of(new DeleteBookFailedAction(err?.error.message));
                    }),
                    finalize(() => this.spinnerService.hide())
                )
            )
        )
    );

}
