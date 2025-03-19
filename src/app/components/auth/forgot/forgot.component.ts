import {
    Component, 
    OnInit 
} from '@angular/core';
import {
    UntypedFormGroup,
    UntypedFormBuilder,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../../helpers';
import { AuthenticationService } from '../../../services/authentication.service';


@Component({
    selector: 'forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

    public forgotForm!: UntypedFormGroup;

    constructor(
        private router: Router,
        private fb: UntypedFormBuilder,
        private alertService: AlertService,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.forgotForm = this.fb.group({
            email: ['', Validators.required],
        });
    }

    public onSubmit(): any {
        
    }

}