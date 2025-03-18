import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

/**
 * @author Nabeel Ahmed
 */
@Injectable({
    providedIn: 'root',
})
export class GraphqlService {

    constructor(private apollo: Apollo) { }

    // Generic method for mutations
    public mutate(mutation: string, variables?: any): Observable<any> {
        return this.apollo.mutate<any>({
            mutation: gql`${mutation}`,
            variables,
        });
    }

    // Generic method for queries
    public query(query: string, variables?: any): Observable<any> {
        return this.apollo.watchQuery<any>({
            query: gql`${query}`,
            variables,
        }).valueChanges;
    }
}
