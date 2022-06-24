import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../configurations/services/login.service';
import {CookieService} from '../configurations/services/cookie.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

class Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username;
  fullname;
  lastName;
  password;
  role;
  user;
 licenseplate: string;


  constructor(private loginService: LoginService,
              private cookieService: CookieService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    fullname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    licenseplate: new FormControl('', [Validators.required]),
    role: new FormControl(''),
  });


  submit() {
    console.log(this.username, this.fullname, this.plate, this.password, this.role);
    this.loginService.register(this.username, this.fullname, this.licenseplate, this.password, this.role.toUpperCase()).subscribe((data) => {
      this.user = data.body;
      this.cookieService.setCookie('currentUser', JSON.stringify(this.user), 1);
      //if (this.user.role === "USER")
      this.router.navigateByUrl('/login');
    });
  }

  @Input() error: string | null;
  plate: any;
}
