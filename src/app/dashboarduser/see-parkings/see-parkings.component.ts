import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {LoginService} from '../../configurations/services/login.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../configurations/services/user.service';
import {MatTableDataSource} from '@angular/material/table';
import {Park} from '../../configurations/classes/park';
@Component({
  selector: 'app-see-grades',
  templateUrl: './see-parkings.component.html',
  styleUrls: ['./see-parkings.component.scss']
})
export class SeeParkingsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumnsQuiz: string[] = ['duration','day','zone','update','delete'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private loginService: LoginService, private router: Router,
              private userService: UserService, public snackBar: MatSnackBar) {
    this.parkings=new Array<Park>();
  }

  userLoggedIn;
  enrolled;
  dataSourceGrades;

  ngOnInit(): void {
    this.userLoggedIn = this.loginService.currentUser();
    this.getParkings();
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
dataSourceQuiz;
parkings;
  getParkings() {
    this.userService.getParkingsforUser().subscribe((data: Park[]) => {
      this.parkings = data;
      console.log(this.parkings[0].day);
      console.log(this.parkings);
      this.parkings.sort(function(obj1, obj2) {
        // Descending: first id less than the previous
        return obj2.id - obj1.id;
      });
      this.dataSourceQuiz = new MatTableDataSource(this.parkings);
      this.dataSourceQuiz.sort = this.sort;
      this.dataSourceQuiz.paginator = this.paginator;
    });
  }


  /*  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceGrades.filter = filterValue.trim().toLowerCase();
    }*/

  editQuiz(park:Park) {
    this.userService.updateParking(park.id, park).subscribe(data => {
      },
    );
  }

  deleteUserForDialog(park: Park) {
    this.userService.deleteQuiz(park.id).subscribe(data => {
      console.log(park.id);
      },
    );
  }
}
