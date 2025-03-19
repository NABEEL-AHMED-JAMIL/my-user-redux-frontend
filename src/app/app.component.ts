import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { ITokenResponse } from './models';


/**
 * @author Nabeel Ahmed
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public currentUser: ITokenResponse;

  constructor(
    private authenticationService: AuthenticationService) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit(): void {
  }

}
