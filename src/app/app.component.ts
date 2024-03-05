import { Component, OnInit } from '@angular/core';
import { CuUserComponent } from './components/index';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { ActionTypes, FetchUsersAction } from './store/actions/user.action';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<any>,
    private drawerService: NzDrawerService) {
  }

  ngOnInit(): void {
  }

  public addUser(): void {
    this.openCuUser(ActionTypes.ADD_USERS, null);
  }

  public refresh(): void {
    this.store.dispatch(new FetchUsersAction());
  }

  public openCuUser(actionType: any, payload: any): void {
    if (actionType === ActionTypes.ADD_USERS) {
      this.drawerService.create({
        nzSize: 'default',
        nzTitle: 'Add User',
        nzFooter: 'Press Save To Perform Action',
        nzPlacement: 'right',
        nzMaskClosable: false,
        nzContent: CuUserComponent,
        nzContentParams: {
          actionType: actionType,
          payload: payload,
        }
      });
    }
  }

}
