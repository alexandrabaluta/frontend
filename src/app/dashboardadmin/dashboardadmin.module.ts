import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardadminComponent} from './dashboardadmin';
import {DashboardteacherRoutingModule} from './dashboard-admin.routing';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [DashboardadminComponent],
  imports: [
    CommonModule, DashboardteacherRoutingModule, MaterialModule, FormsModule, AngularEditorModule, FileUploadModule
  ]
})

export class DashboardadminModule {
}
