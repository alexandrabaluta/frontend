import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboards.component';
import {AddParkingComponent} from './add-parking/add-parking.component';
import {SeeParkingsComponent} from './see-parkings/see-parkings.component';
const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'add-course', component: AddParkingComponent},
  {path: 'see-grades', component: SeeParkingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardStudentRoutingModule {
}
