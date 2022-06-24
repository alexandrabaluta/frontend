import {Component, OnInit} from '@angular/core';
import {LoginService} from '../configurations/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardComponent implements OnInit {
  userLoggedIn;
  retrievedImage;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.userLoggedIn = this.loginService.currentUser();
  }

  getImage() {
    this.retrievedImage = 'assets/profilepic.png';

  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
}
