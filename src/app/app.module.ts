import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BidiModule } from '@angular/cdk/bidi';
import { NgxEchartsModule } from 'ngx-echarts';
// module
import { IconsProviderModule } from './icons-provider.module';
import { HttpClientModule } from '@angular/common/http';
import {
  NgZorroAntdModule,
  AppDashboardThemeService
} from './helpers';
// compoent
import {
  DashboardComponent,
  StockDataComponent,
  FaceidComponent,
  FileViewListComponent
} from './components/index';

// load tham on APP_INITIALIZER
export function loadThemeFactory(appDashboardThemeService: AppDashboardThemeService) {
  return () => appDashboardThemeService.loadTheme();
}

export const APP_COMPONENT = [
  SpinnerComponent,
  DashboardComponent,
  StockDataComponent,
  FaceidComponent,
  FileViewListComponent
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
    NgZorroAntdModule,
    // Other modules
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadThemeFactory,
      deps: [AppDashboardThemeService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
