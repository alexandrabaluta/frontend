import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginService} from './login.service';
import {Park} from "../classes/park";
import {User} from "../classes/userclass";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private  loginService: LoginService) {
  }

  getStudentCourses() {
    let student = this.loginService.currentUser();
    let url = 'http://localhost:8108/students/get/courses?userId=' + student.id;
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${student.accessToken}`
    );
    return this.http.get<any>(
      url,
      {headers}
    );
  }

  addParking(zone, day, duration) {
    let user = this.loginService.currentUser();
    let url = 'http://localhost:8080/users/add/parking?userId=' + user.id;
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${user.accessToken}`
    );
    return this.http.post<any>(
      url,
      {zone, day, duration},
      {headers}
    );
  }

  addStudentEntryForQuiz(quizId, score) {
    let user = this.loginService.currentUser();
    let url = 'http://localhost:8108/students/add/quiz/participant?userId=' + user.id + '&quizId=' + quizId + '&score=' + score;
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${user.accessToken}`
    );
    return this.http.post<any>(
      url,
      {},
      {headers}
    );
  }

  addStudentAnswerForQuiz(answerId, text, quizId) {
    let user = this.loginService.currentUser();
    let url = 'http://localhost:8108/students/add/student/answer?userId=' + user.id + '&answerId=' + answerId + '&quizId=' + quizId;
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${user.accessToken}`
    );
    return this.http.post<any>(
      url,
      {text},
      {observe: 'response', headers}
    );
  }

  getParkingsforUser() {
    let user = this.loginService.currentUser();
    let url = 'http://localhost:8080/users/get/parkings/by/user?userId=' + user.id;
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${user.accessToken}`
    );
    return this.http.get<any>(
      url,
      {headers}
    );
  }
  public updateParking(id: number, park: Park) {
    let teacher = this.loginService.currentUser();
    let url = 'http://localhost:8080/users/update/parking?userId=' + teacher.id;
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${teacher.accessToken}`
    );
    return this.http.post<any>(
      url, park,
      {observe: 'response', headers}
    );
  }

  deleteQuiz(id) {
    let teacher = this.loginService.currentUser();
    let url = 'http://localhost:8080/users/delete/parking/' + id;
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${teacher.accessToken}`
    );
    return this.http.delete<any>(
      url,
      {headers}
    );
  }

  deleteUser(idUser) {
    let teacher = this.loginService.currentUser();
    let url = 'http://localhost:8080/admin/delete/user/' + idUser;
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${teacher.accessToken}`
    );
    return this.http.delete<any>(
      url,
      {headers}
    );
  }

  public updateUser(id: number, user: User) {
    let teacher = this.loginService.currentUser();
    let url = 'http://localhost:8080/admin/update/user?userId=' + user.idUser;
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${teacher.accessToken}`
    );
    return this.http.post<any>(
      url, user,
      {observe: 'response', headers}
    );
  }

  getUsers() {
    let user = this.loginService.currentUser();
    let url = 'http://localhost:8080/admin/users/get';
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${user.accessToken}`
    );
    return this.http.get<any>(
      url,
      {headers}
    );
  }

  getParkedCarsNr() {
    let user = this.loginService.currentUser();
    let url = 'http://localhost:8080/admin/get/parked/number';
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${user.accessToken}`
    );
    return this.http.get<any>(
      url,
      {headers}
    );
  }

  getParkedCars() {
    let user = this.loginService.currentUser();
    let url = 'http://localhost:8080/admin/get/parked';
    var headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${user.accessToken}`
    );
    return this.http.get<any>(
      url,
      {headers}
    );
  }


}
