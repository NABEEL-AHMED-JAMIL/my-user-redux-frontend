import { NgModule, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BidiModule } from '@angular/cdk/bidi';
// applo
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';  
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';
import { setContext } from '@apollo/client/link/context';
// ng and other import module
import { IconsProviderModule } from './icons-provider.module';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from './helpers';
// NgRx Modules
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { config } from '../environments/environment';
// compoenet
import {
  ForgotComponent,
  LoginComponent,
  ResetComponent,
  CuAuthorComponent,
  ListAuthorComponent,
  CuBookComponent,
  ListBookComponent
} from './components/index';

// appllo config
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  let currentUser: any = sessionStorage.getItem('current-user');
  const authLink = setContext(() => {
    return {
      headers: new HttpHeaders({
        Authorization: currentUser ? `Bearer ${currentUser.token}` : '',
      }),
    };
  });
  return {
    link: authLink.concat(
      httpLink.create({
        uri: config.graphQLUrl
    })),
    cache: new InMemoryCache(),
  };
};

export const APP_COMPONENT = [
  SpinnerComponent,
  ForgotComponent,
  LoginComponent,
  ResetComponent,
  CuAuthorComponent,
  ListAuthorComponent,
  CuBookComponent,
  ListBookComponent
];

/**
 * @author Nabeel Ahmed
 */
@NgModule({
  declarations: [
    AppComponent,
    ...APP_COMPONENT,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BidiModule,
    ApolloModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NgZorroAntdModule,
    // devtools
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
