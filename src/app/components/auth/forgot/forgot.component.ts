import {
    Component,
    OnInit
} from '@angular/core';
import {
    UntypedFormGroup,
    UntypedFormBuilder,
    Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { ForgotPasswordAction } from '../../../store/actions/auth.action';

/**
 * @author Nabeel Ahmed
 */
@Component({
    selector: 'forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

    public forgotForm!: UntypedFormGroup;

    constructor(
        private store: Store<any>,
        private fb: UntypedFormBuilder) { }

    ngOnInit() {
        this.forgotForm = this.fb.group({
            username: ['', Validators.required],
        });
    }

    public onSubmit(): any {
        if (this.forgotForm.invalid) {
            return;
        }
        this.store.dispatch(new ForgotPasswordAction(this.forgotForm.getRawValue()));
    }

}