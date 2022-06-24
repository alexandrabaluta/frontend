import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from '../configurations/services/login.service';
import {Router} from '@angular/router';
import {UserService} from "../configurations/services/user.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Park} from "../configurations/classes/park";
import {User} from "../configurations/classes/userclass";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-dashboardteacher',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.scss']
})
export class DashboardadminComponent implements OnInit {
  userLoggedIn;
  courses;
  retrievedImage;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumnsQuiz: string[] = ['username','fullname','licenseplate', 'update','delete'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private loginService: LoginService, private router: Router,
              private userService: UserService) {
    this.users=new Array<User>()
  }

  ngOnInit(): void {
    this.userLoggedIn = this.loginService.currentUser();
    this.getUsers();
    this.getParkedCars();
    this.getParkedCarsNr();
  }

  getImage() {
    this.retrievedImage = 'assets/profilepic.png';

  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
users;
  dataSourceQuiz;
  getUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
      this.users.sort(function(obj1, obj2) {
        // Descending: first id less than the previous
        return obj2.id - obj1.id;
      });
      this.dataSourceQuiz = new MatTableDataSource(this.users);
      this.dataSourceQuiz.sort = this.sort;
      this.dataSourceQuiz.paginator = this.paginator;
    });
  }

  editQuiz(user:User) {
    this.userService.updateUser(user.idUser, user).subscribe(data => {
      },
    );
  }

  deleteUserForDialog(user: User) {
    this.userService.deleteUser(user.idUser).subscribe(data => {
        console.log(user.idUser);
      },
    );this.getUsers();
  }
nr;
  getParkedCarsNr() {
    this.userService.getParkedCarsNr().subscribe((data) => {
      this.nr = data;
      console.log(this.nr);
    });
  }
parkedcars;
  getParkedCars() {
    this.userService.getParkedCars().subscribe((data) => {
      this.parkedcars = data;
      console.log(this.parkedcars);
    });
  }
}
