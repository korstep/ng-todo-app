import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BACKEND_URl } from '@constants';
import { Observable, tap } from 'rxjs';
import { ISuccessfulLoggin } from '@interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenCookieName = 'access_token';
  private isUserLoggedIn: boolean = false;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  signin(email: string, password: string) {}

  signup(email: string, password: string) {}

  signout() {}
}
