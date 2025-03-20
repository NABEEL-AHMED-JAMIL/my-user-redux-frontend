import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { ITokenResponse } from './models';
import { Store } from '@ngrx/store';
import { LogoutAction } from './store/actions/auth.action';

/**
 * @author Nabeel Ahmed
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public currentUser: ITokenResponse | null = null;

  constructor(
    private store: Store<any>,
    private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser
      .subscribe((user: ITokenResponse) => {
        this.currentUser = user;
      });
  }

  ngOnInit(): void {
  }

  public onLogout() {
    this.store.dispatch(new LogoutAction());
  }

}
