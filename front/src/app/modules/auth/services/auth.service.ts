import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BACKEND_URl } from '@constants';
import { ISuccessfulLoggin } from '@interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenCookieName = 'access_token';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.checkLoginStatus();
  }

  isUserLogged$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  private setAccessTokenToCookie(token: string): void {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 1 * 60 * 60 * 1000);
    this.isLoggedInSubject.next(true);
    this.cookieService.set(this.tokenCookieName, token, expirationDate);
  }

  private getAccessToken(): string {
    return this.cookieService.get(this.tokenCookieName);
  }

  private isSuccessfulResponse(response: any): response is ISuccessfulLoggin {
    return (
      response && typeof response === 'object' && 'accessToken' in response
    );
  }

  private checkLoginStatus(): void {
    this.isLoggedInSubject.next(this.getAccessToken() !== '');
  }

  signin(email: string, password: string): Observable<boolean> {
    return this.http
      .post<ISuccessfulLoggin>(`${BACKEND_URl}/signin`, {
        email: email,
        password: password,
      })
      .pipe(
        map((response: ISuccessfulLoggin | string) => {
          if (this.isSuccessfulResponse(response)) {
            this.setAccessTokenToCookie(response.accessToken);
            return true;
          }
          return false;
        }),
        catchError((error) => {
          return of(false);
        })
      );
  }

  signup(email: string, password: string): Observable<boolean> {
    return this.http
      .post<ISuccessfulLoggin>(`${BACKEND_URl}/signup`, {
        email: email,
        password: password,
      })
      .pipe(
        map((response: ISuccessfulLoggin | string) => {
          if (this.isSuccessfulResponse(response)) {
            this.setAccessTokenToCookie(response.accessToken);
            return true;
          }
          return false;
        }),
        catchError((error) => {
          return of(false);
        })
      );
  }
  deleteteAccessTokenFromCookie() {
    this.cookieService.delete(this.tokenCookieName);
    this.isLoggedInSubject.next(false);
  }

  signout(): void {
    this.deleteteAccessTokenFromCookie();
  }
}
