import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user;
  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  public currentUser() {
    if (!this.user) {
      this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
    }
    return this.user;
  }

  public setUser(newUserData) {
    if (!newUserData) {
      this.cookieService.setCookie(
        'currentUser',
        JSON.stringify(newUserData),
        1
      );
    }
  }

  /**
   * Performs the auth
   * @param username
   * @param password password of user
   */
  login(username: string, password: string) {
    let url = 'http://localhost:8080/api/auth';
    return this.http.post<any>(
      url,
      {username, password},
      {observe: 'response'}
    );
  }

  register(username: string, fullname: string,  licenseplate: string, passwordHash: string, role: string) {
    let url = 'http://localhost:8080/api/public/register';
    return this.http.post<any>(
      url,
      {username, fullname, passwordHash, licenseplate, role},
      {observe: 'response'}
    );
  }

  /**
   * Logout the user
   */
  logout() {
    // remove user from local storage to log user out
    this.cookieService.deleteCookie('currentUser');
    this.user = null;
  }

}
