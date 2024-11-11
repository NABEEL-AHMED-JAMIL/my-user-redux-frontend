import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// compoent
import {
  DashboardComponent,
  StockDataComponent,
  FaceidComponent,
  FileViewListComponent,
  ChatBootComponent
} from './components/index';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'stock-data',
    component: StockDataComponent
  },
  {
    path: 'faceid',
    component: FaceidComponent
  },
  {
    path: 'ask-me',
    component: ChatBootComponent
  },
  {
    path: 'file/view/list',
    component: FileViewListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
