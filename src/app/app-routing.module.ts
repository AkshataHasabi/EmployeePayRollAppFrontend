import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';

/**
 * To handle the navigation from one view to the next, we use the Angular Router
 */
const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"form",component:FormComponent},
  {path:"update/:id",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
