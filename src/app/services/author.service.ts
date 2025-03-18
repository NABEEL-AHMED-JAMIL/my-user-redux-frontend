import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphqlService } from './graphql.service';
import {
  IAuthorRequest,
  IAuthorResponse,
  IAuthorListResponse
} from '../models';

/**
 * @author Nabeel Ahmed
 */
@Injectable({
  providedIn: 'root',
})
export class AuthorService {

  /**
   * Get author
   */
  private GET_AUTHOR: string = `
    query GetAuthor($id: ID!) {
      getAuthor(id: $id) {
          message
          status
          data {
              ... on AuthorResponse {
                  id
                  firstName
                  lastName
                  email
                  role
                  username
                  biography
                  nationality
                  expertise
                  image
                  createdAt
                  updatedAt
                  status {
                      code
                      name
                      value
                  }
              }
          }
      }
  }`;

  /**
  * Get all authors
  */
  private GET_ALL_AUTHORS: string = `
    query GetAllAuthors {
      getAllAuthors {
          message
          status
          data {
              ... on AuthorListResponse {
                  authors {
                      id
                      firstName
                      lastName
                      email
                      role
                      username
                      biography
                      nationality
                      expertise
                      image
                      createdAt
                      updatedAt
                      status {
                          code
                          name
                          value
                      }
                  }
              }
          }
      }
    }`;

  /**
  * Fetch public authors
  */
  private FETCH_PUBLIC_AUTHORS: string = `
    query FetchPublicAuthors {
      fetchPublicAuthors {
          message
          status
          data {
              ... on AuthorListResponse {
                  authors {
                      id
                      firstName
                      lastName
                      email
                      role
                      username
                      biography
                      nationality
                      expertise
                      image
                      createdAt
                      updatedAt
                      status {
                          code
                          name
                          value
                      }
                  }
              }
          }
      }
    }`;

  /**
  * Create author 
  */
  private CREATE_AUTHOR: string = `
    mutation CreateAuthor($payload: AuthorRequest!) {
      createAuthor(payload: $payload) {
        message
        status
        data {
          ... on AuthorResponse {
            id
            firstName
            lastName
            email
            role
            username
            biography
            nationality
            expertise
            image
            createdAt
            updatedAt
            status {
                code
                name
                value
            }
          }
        }
      }
    }`;

  /**
  * Update author 
  */
  private UPDATE_AUTHOR: string = `
    mutation UpdateAuthor($payload: AuthorRequest!) {
      updateAuthor(payload: $payload) {
        message
        status
        data {
          ... on AuthorResponse {
            id
            firstName
            lastName
            email
            role
            username
            biography
            nationality
            expertise
            image
            createdAt
            updatedAt
            status {
              code
              name
              value
            }
          }
        }
      }
    }`;

  /**
  * Delete author
  */
  private DELETE_AUTHOR: string = `
    mutation deleteAuthor($id: ID!) {
      deleteAuthor(id: $id) {
          message
          status
      }
    }`;


  constructor(private graphqlService: GraphqlService) { }

  /**
   * Method use to fetch the author by id
   * "67d1f12f3bc5ed1178c3ce1c" test id 
   * Test case status = pass
   */
  public getAuthor(id: String): Observable<IAuthorResponse> {
    return this.graphqlService.query(this.GET_AUTHOR, { id });
  }

  /**
   * Method use to fetch the authors
   * Test case status = pass
   */
  public getAllAuthors(): Observable<IAuthorListResponse> {
    return this.graphqlService.query(this.GET_ALL_AUTHORS);
  }

  /**
   * Method use to fetch the public authors
   * Test case status = pass
   */
  public fetchPublicAuthors(): Observable<IAuthorListResponse> {
    return this.graphqlService.query(this.FETCH_PUBLIC_AUTHORS);
  }

  /**
   * Method use to create a author
   * Test case status = pending
   */
  public createAuthor(payload: IAuthorRequest): Observable<IAuthorResponse> {
    return this.graphqlService.mutate(this.CREATE_AUTHOR, { payload });
  }

  /**
   * Method use to update a author
   * Test case satus = pending
   */
  public bookAuthor(payload: IAuthorRequest): Observable<IAuthorResponse> {
    return this.graphqlService.mutate(this.UPDATE_AUTHOR, { payload });
  }

  /**
  * Method use to delete the author by id
  * Test case status = pass
  */
  public deleteAuthor(id: String): Observable<IAuthorListResponse> {
    return this.graphqlService.mutate(this.DELETE_AUTHOR, { id });
  }

}
