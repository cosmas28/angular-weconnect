import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListComponent } from './business-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BusinessListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'business-list', component: BusinessListComponent }
    ])
  ]
})
export class BusinessListModule { }
