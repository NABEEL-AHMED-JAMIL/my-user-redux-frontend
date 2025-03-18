import { Injectable } from '@angular/core';
import { GraphqlService } from './graphql.service';
import {
  IBookRequest,
  IBookResponse,
  IBookListResponse
} from '../models';
import { Observable } from 'rxjs';

/**
 * @author Nabeel Ahmed
 */
@Injectable({
  providedIn: 'root',
})
export class BookService {

  /**
  * Get book
  */
  private GET_BOOK: string = `
    query GetBook($id: ID!) {
      getBook(id: $id) {
          message
          status
          data {
              ... on BookResponse {
                  id
                  isbn
                  title
                  price
                  publisher
                  publication
                  description
                  coverImg
                  bookUrl
                  note
                  createdAt
                  updatedAt
                  language {
                      code
                      name
                      value
                  }
                  category {
                      code
                      name
                      value
                  }
                  format {
                      code
                      name
                      value
                  }
                  author {
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
                  }
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
  * Get all books
  */
  private GET_ALL_BOOKS: string = `
    query GetAllBooks {
      getAllBooks {
          message
          status
          data {
              ... on BookListResponse {
                  books {
                      id
                      isbn
                      title
                      price
                      publisher
                      publication
                      description
                      coverImg
                      bookUrl
                      note
                      createdAt
                      updatedAt
                      language {
                          code
                          name
                          value
                      }
                      category {
                          code
                          name
                          value
                      }
                      format {
                          code
                          name
                          value
                      }
                      author {
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
                      }
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
  * Fetch public books
  */
  private FETCH_PUBLIC_BOOKS: string = `
    query FetchPublicBooks {
      fetchPublicBooks {
        message
        status
        data {
          ... on BookListResponse {
              books {
                  id
                  isbn
                  title
                  price
                  publisher
                  publication
                  description
                  coverImg
                  bookUrl
                  note
                  createdAt
                  updatedAt
                  language {
                    code
                    name
                    value
                  }
                  category {
                    code
                    name
                    value
                  }
                  format {
                    code
                    name
                    value
                  }
                  author {
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
  * Create book 
  */
  private CREATE_BOOK: string = `
    mutation CreateBook($payload: BookRequest!) {
      createBook(payload: $payload) {
        message
        status
        data {
          ... on BookResponse {
            id
            isbn
            title
            price
            publisher
            publication
            description
            coverImg
            bookUrl
            note
            createdAt
            updatedAt
            language {
              code
              name
              value
            }
            category {
              code
              name
              value
            }
            format {
              code
              name
              value
            }
            author {
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
  * Update book 
  */
  private UPDATE_BOOK: string = `
    mutation UpdateBook($payload: BookRequest!) {
      updateBook(payload: $payload) {
        message
        status
        data {
          ... on BookResponse {
            id
            isbn
            title
            price
            publisher
            publication
            description
            coverImg
            bookUrl
            note
            createdAt
            updatedAt
            language {
              code
              name
              value
            }
            category {
              code
              name
              value
            }
            format {
              code
              name
              value
            }
            author {
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
  private DELETE_BOOK: string = `
    mutation deleteBook($id: ID!) {
      deleteBook(id: $id) {
        message
        status
      }
    }`;

  constructor(private graphqlService: GraphqlService) { }

  /**
   * Method use to fetch the book by id
   * "67d411a4a7d71343e38177d8" test id 
   * Test case status = pass
   */
  public getBook(id: String): Observable<IBookResponse> {
    return this.graphqlService.query(this.GET_BOOK, { id });
  }

  /**
   * Method use to fetch the books
   * Test case status = pass
   */
  public getAllBooks(): Observable<IBookListResponse> {
    return this.graphqlService.query(this.GET_ALL_BOOKS);
  }

  /**
   * Method use to fetch the public authors
   * Test case status = pass
   */
  public fetchPublicBooks(): Observable<IBookListResponse> {
    return this.graphqlService.query(this.FETCH_PUBLIC_BOOKS);
  }

  /**
   * Method use to create a book
   * Test case status = pending
   */
  public createBook(payload: IBookRequest): Observable<IBookResponse> {
    return this.graphqlService.mutate(this.CREATE_BOOK, payload);
  }

  /**
   * Method use to update a book
   * Test case satus = pending
  */
  public updateBook(payload: IBookRequest): Observable<IBookResponse> {
    return this.graphqlService.mutate(this.UPDATE_BOOK, payload);
  }

  /**
 * Method use to delete book
 * Test case status = pass
 */
  public deleteBook(id: String): Observable<IBookResponse> {
    return this.graphqlService.mutate(this.DELETE_BOOK, { id });
  }


}
