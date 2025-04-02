import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAuthorResponse } from '../../../models';
import { GetAllAuthorsAction } from '../../../store/actions/author.action';
import { selectAuthors } from '../../../store/selectors/author.selector';

/**
 * @author Nabeel Ahmed
 */
@Component({
    selector: 'list-author',
    templateUrl: './list-author.component.html',
    styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {

    public authors$: Observable<IAuthorResponse[]> = this.store.pipe(select(selectAuthors));

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.getAuthors();
    }

    public getAuthors(): void {
        this.store.dispatch(new GetAllAuthorsAction());
    }

}