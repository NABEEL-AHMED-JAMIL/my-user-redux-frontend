import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ActionType, IAuthorResponse, IBookResponse, IStaticTable } from '../../../models';
import { GetAuthorAction } from '../../../store/actions/author.action';
import { selectAuthor } from '../../../store/selectors/author.selector';
import { selectBooks } from '../../../store/selectors/book.selector';
import { GetAllBooksAction } from '../../../store/actions/book.action';

/**
 * @author Nabeel Ahmed
 */
@Component({
    selector: 'list-book',
    templateUrl: './list-book.component.html',
    styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

    public author$: Observable<IAuthorResponse> = this.store.pipe(select(selectAuthor));
    public books$: Observable<IBookResponse[]> = this.store.pipe(select(selectBooks));
    public bookTable: IStaticTable = {
        tableId: 'book_id',
        title: 'Books',
        bordered: true,
        size: 'small',
        headerButton: [
            {
                type: 'plus-circle',
                color: 'red',
                tooltipTitle: 'Add',
                action: ActionType.ADD
            },
            {
                type: 'reload',
                color: 'red',
                tooltipTitle: 'Refresh',
                action: ActionType.RE_FRESH
            }
        ],
        dataColumn: [
            {
                field: 'title',
                header: 'Title',
                type: 'data'
            },
            {
                field: 'isbn',
                header: 'Isbn',
                type: 'data'
            },
            {
                field: 'price',
                header: 'Price',
                type: 'data'
            },
            {
                field: 'publisher',
                header: 'Publisher',
                type: 'data'
            },
            {
                field: 'publication',
                header: 'Publication',
                type: 'date'
            },
            {
                field: 'language',
                header: 'Language',
                type: 'tag'
            },
            {
                field: 'category',
                header: 'Category',
                type: 'tag'
            },
            {
                field: 'format',
                header: 'Format',
                type: 'tag'
            }
        ],
        actionType: [
            {
                type: 'form',
                color: 'green',
                tooltipTitle: 'Edit',
                action: ActionType.EDIT
            },
            {
                type: 'delete',
                color: 'red',
                tooltipTitle: 'Delete',
                action: ActionType.DELETE
            }
        ]
    };

    constructor(private store: Store<any>) {
        // Selecting the author and books from the store
        this.books$.subscribe((books) => {
            this.bookTable.dataSource = books;
        });
    }

    ngOnInit(): void {
        this.getAuthor("67ec07836e5c531665079e56");
        this.getBooks();
    }

    public getAuthor(id: string): void {
        // Dispatch the action to fetch the book
        this.store.dispatch(new GetAuthorAction(id));
    }

    public getBooks(): void {
        this.store.dispatch(new GetAllBooksAction());
    }

    public refresh(): void {
        this.getAuthor("67ec07836e5c531665079e56");
    }

    public buttonActionReciver(payload: any): void {
       
    }

    public tableActionReciver(payload: any): void {
        
    }

    public extraActionReciver(payload: any): void {
       
    }


}