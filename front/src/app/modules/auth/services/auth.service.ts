import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BACKEND_URl } from '@constants';
import { Observable, catchError, map, of } from 'rxjs';
import { ISuccessfulLoggin } from '@interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenCookieName = 'access_token';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  isUserLogged(): boolean {
    return this.getAccessToken() !== '';
  }

  private setAccessTokenToCookie(token: string): void {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 1 * 60 * 60 * 1000);
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
          return of(error);
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
          return of(error);
        })
      );
  }

  signout(): void {
    this.cookieService.delete(this.tokenCookieName);
  }
}
