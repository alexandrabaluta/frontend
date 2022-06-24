import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardadminComponent} from "./dashboardadmin";



const routes: Routes = [
  {path: '', component: DashboardadminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardteacherRoutingModule {

}
