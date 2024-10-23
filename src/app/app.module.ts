import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BidiModule } from '@angular/cdk/bidi';
// module
import { IconsProviderModule } from './icons-provider.module';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from './helpers';


export const APP_COMPONENT = [
  SpinnerComponent
];

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
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NgZorroAntdModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
