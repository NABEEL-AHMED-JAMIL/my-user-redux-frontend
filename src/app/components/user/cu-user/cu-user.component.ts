import { Component, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { SpinnerService } from '../../../helpers';
// ### Action ###
import { Store } from '@ngrx/store';
import { ActionTypes, AddUserAction, UpdateUserAction } from '../../../store/actions';


@Component({
    selector: 'cu-user',
    templateUrl: './cu-user.component.html',
    styleUrls: ['./cu-user.component.css']
})
export class CuUserComponent implements OnInit {

    @Input()
    public actionType: any; // use for action type either add|edit
    @Output()
    public payload?: IUser; // use for edit payload

    public userForm?: FormGroup;

    constructor(
        private store: Store<any>,
        private drawerRef: NzDrawerRef<void>,
        private formBuilder: FormBuilder,
        private spinnerService: SpinnerService) {
    }

    ngOnInit() {
        if (this.actionType === ActionTypes.ADD_USERS) {
            this.addForm();
        } else if (this.actionType === ActionTypes.UPDATE_USERS) {
            this.editForm();
        }
    }

    public addForm(): any {
        this.spinnerService.show();
        this.userForm = this.formBuilder.group({
            username: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            age: ['', Validators.required],
            salary: ['', Validators.required]
        });
        this.spinnerService.hide();
    }

    public editForm(): void {
        this.spinnerService.show();
        this.userForm = this.formBuilder.group({
            uuid: [this.payload.uuid, Validators.required],
            timestamp: [this.payload.timestamp, Validators.required],
            username: [this.payload.username, Validators.required],
            firstName: [this.payload.firstName, Validators.required],
            lastName: [this.payload.lastName, Validators.required],
            age: [this.payload.age, Validators.required],
            salary: [this.payload.salary, Validators.required]
        });
        debugger
        this.spinnerService.hide();
    }

    public submit(): void {
        this.spinnerService.show();
        if (this.userForm.invalid) {
            this.spinnerService.hide();
            return;
        }
        let payload = {
            ...this.userForm.getRawValue(),
        };
        if (this.actionType === ActionTypes.ADD_USERS) {
            this.store.dispatch(new AddUserAction(payload));
            this.closeDrawer();
        } else if (this.actionType === ActionTypes.UPDATE_USERS) {
            this.store.dispatch(new UpdateUserAction(payload));
            this.closeDrawer();
        }
    }

    public closeDrawer(): void {
        this.drawerRef.close();
    }

}