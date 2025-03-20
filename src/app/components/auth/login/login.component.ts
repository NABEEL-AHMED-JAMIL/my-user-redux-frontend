import { Component, OnInit } from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators
} from '@angular/forms';
import {
    Router,
    ActivatedRoute
} from '@angular/router';
import {
    AuthenticationService
} from '../../../services/authentication.service';
import {
    GetTokenAction
} from '../../../store/actions/auth.action';
import { Store } from '@ngrx/store';

/**
 * @author Nabeel Ahmed
 */
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public passwordVisible: boolean = false;
    public loginForm!: UntypedFormGroup;
    public returnUrl: string;

    constructor(
        private store: Store<any>,
        private router: Router,
        private fb: UntypedFormBuilder,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/ql/mybook']);
        }
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['nabeel.amd93', [Validators.required]],
            password: ['B@llistic1', [Validators.required]]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/ql/mybook';
    }

    public onSubmit(): any {
        if (this.loginForm.invalid) {
            return;
        }
        this.store.dispatch(new GetTokenAction(this.loginForm.getRawValue()));
    }

}