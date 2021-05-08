import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {FileUploadComponent} from './file-upload/file-upload.component'
import {DraggbleRowComponent} from './draggble-row/draggble-row.component'


const routes: Routes = [
  {
    path:'', component:DraggbleRowComponent
  },
  {
    path:'FileUpload', component:FileUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
