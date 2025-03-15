import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS} from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';
import { setContext } from '@apollo/client/link/context';


const uri = 'http://localhost:9098/api/v2/graphql';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
    const authLink = setContext(() => {
        const token = localStorage.getItem('jwtToken'); // Fetch the token from storage
        return {
            headers: new HttpHeaders({
                Authorization: token ? `Bearer ${token}` : '',
            }),
        };
    });

    return {
        link: authLink.concat(httpLink.create({ uri })), // Attach authLink to httpLink
        cache: new InMemoryCache(),
    };
}


@NgModule({
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink],
        },
    ],
})
export class GraphQLModule { }