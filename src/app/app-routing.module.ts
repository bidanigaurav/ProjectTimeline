import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineGridComponent } from './timeline-grid/timeline-grid.component';
import { TimelineFormComponent } from './timeline-form/timeline-form.component';

const routes: Routes = [
  {path: '', component: TimelineGridComponent},
  {path: 'new-project', component: TimelineFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
