import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../helpers';
import { ActionTypes, DeleteUserAction, FetchUsersAction } from '../../../store/actions';
import { IUser } from '../../../models/index';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { CuUserComponent } from '../cu-user/cu-user.component';


@Component({
    selector: 'list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

    // use in html
    public DELETE_USERS = ActionTypes.DELETE_USERS;
    public UPDATE_USERS = ActionTypes.UPDATE_USERS;

    public dataUsers: IUser[] = [];

    constructor(
        private store: Store<any>,
        public alertService: AlertService,
        private modalService: NzModalService,
        private drawerService: NzDrawerService) {
        this.store.dispatch(new FetchUsersAction());
        this.store.select('users')
            .subscribe(store => {
                this.dataUsers = store.users;
            }, error => {
                this.alertService.showError(error.error.message, ActionTypes.USERS_FETCHED_FAILED);
            });
    }

    ngOnInit(): void {
    }

    public actionEvent(actionType: any, payload: any) {
        if (actionType === ActionTypes.DELETE_USERS) {
            // show the pop-up
            this.modalService.confirm({
                nzOkText: 'Ok',
                nzCancelText: 'Cancel',
                nzTitle: 'Do you want to delete?',
                nzContent: 'Press \'Ok\' may effect the business source.',
                nzOnOk: () => {
                    this.store.dispatch(new DeleteUserAction(payload));
                }
            });
        } else if (actionType === ActionTypes.UPDATE_USERS) {
            // dispatch
            this.drawerService.create({
                nzSize: 'default',
                nzTitle: 'Edit User',
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