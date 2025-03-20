import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../helpers';
import {
    UntypedFormBuilder,
    UntypedFormControl,
    UntypedFormGroup,
    Validators
} from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { Store } from '@ngrx/store';
import { ERROR } from '../../../models';
import { ResetPasswordAction } from '../../../store/actions/auth.action';


/**
 * @author Nabeel Ahmed
 */
@Component({
    selector: 'reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

    public username: any;
    public resetPassForm: UntypedFormGroup;

    constructor(
        private store: Store<any>,
        private router: Router,
        private fb: UntypedFormBuilder,
        private alertService: AlertService,
        private activatedRoute: ActivatedRoute) {
        this.activatedRoute.queryParamMap
            .subscribe(params => {
                try {
                    if (!params?.get('token')) {
                        // redirect to forgot password with message token not there
                        this.alertService.showError('Invlaid url\n please enter username again.', ERROR);
                        this.router.navigate(['/auth/forgotpass']);
                    }
                    let tokenPayload: any = jwtDecode(params?.get('token'), { header: false });
                    this.username = tokenPayload.sub;
                } catch (exception) {
                    this.alertService.showError('Invlaid token\n please enter email again.', ERROR);
                    this.router.navigate(['/auth/forgotpass']);
                }
            });
    }

    ngOnInit() {
        console.log( this.username);
        // if the token is not valid show the message and aslo hide redirect to reset password
        this.resetPassForm = this.fb.group({
            username: [this.username, Validators.required],
            newPassword: ['', [Validators.required]],
            confirm: ['', [this.confirmValidator]],
        });
        this.resetPassForm.controls['username'].disable();
    }

    public validateConfirmPassword(): void {
        setTimeout(() => this.resetPassForm.controls['confirm'].updateValueAndValidity());
    }

    public confirmValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { error: true, required: true };
        } else if (control.value !== this.resetPassForm.controls['newPassword'].value) {
            return { confirm: true, error: true };
        }
        return {};
    };

    public onSubmit(): any {
        // stop here if form is invalid
        if (this.resetPassForm.invalid) {
            Object.values(this.resetPassForm.controls)
                .forEach(control => {
                    if (control.invalid) {
                        control.markAsDirty();
                        control.updateValueAndValidity({ onlySelf: true });
                    }
                });
            return;
        }
        let payload = {
            username: this.resetPassForm.controls['username'].value,
            newPassword: this.resetPassForm.controls['newPassword'].value
        };
        this.store.dispatch(new ResetPasswordAction(payload));
    }


}