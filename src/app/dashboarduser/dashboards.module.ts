import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboards.component';
import {FormsModule} from '@angular/forms';
import {DashboardStudentRoutingModule} from './dashboards.routing';
import {MaterialModule} from '../material/material.module';
import {AddParkingComponent} from './add-parking/add-parking.component';
import {SeeParkingsComponent} from './see-parkings/see-parkings.component';
@NgModule({
  declarations: [DashboardComponent, AddParkingComponent, SeeParkingsComponent],
  imports: [
    CommonModule, DashboardStudentRoutingModule, FormsModule, MaterialModule
  ]
})
export class DashboardsModule {
}
