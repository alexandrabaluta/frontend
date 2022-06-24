import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../configurations/services/user.service';
import {LoginService} from '../../configurations/services/login.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-parking.component.html',
  styleUrls: ['./add-parking.component.scss']
})
export class AddParkingComponent implements OnInit {
  userLoggedIn;
  newCourseId;
  allCourses;
  zone;
  datep;
  durationp;
  picker;

  constructor(private httpClient: HttpClient,
              private studentService: UserService,
              private authService: LoginService) {
  }

  ngOnInit(): void {
    this.userLoggedIn = this.authService.currentUser();
  }



  addNewParking() {
    console.log(this.zone,this.datep, this.durationp);
    this.studentService.addParking(this.zone, this.datep, this.durationp).subscribe((data) => {
    });
  }
}
