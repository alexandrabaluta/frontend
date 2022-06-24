import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from 'src/app/configurations/services/login.service';
import {Router} from '@angular/router';
import {CookieService} from '../configurations/services/cookie.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  user;
  hide = true;
  constructor(
      private loginService: LoginService,
      private cookieService: CookieService,
      private router: Router,
      public snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {

  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    this.loginService.login(this.username, this.password).subscribe((data) => {
          this.user = data.body;
          console.log(this.user);
          this.cookieService.setCookie('currentUser', JSON.stringify(this.user), 1);
          if (this.user.role === 'USER') {
            this.router.navigateByUrl('/dashboardstudent');
            this.openSnackBar('Welcome' + ' ' + this.user.username + '!', 'SUCCESS');
          } else if (this.user.role === 'ADMIN') {
            this.router.navigateByUrl('/dashboardteacher');
            this.openSnackBar('Welcome' + ' ' + this.user.username + '!', 'SUCCESS');
          }
        },
        error1 => {
          this.openSnackBar('Username or password incorrect! Please try again!', 'ERROR');
        }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  @Input() error: string | null;
}
