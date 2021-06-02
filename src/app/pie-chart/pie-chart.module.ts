import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



const routes: Routes = [
  {
    path: '',
    component: PieChartComponent
  }
]

@NgModule({
  declarations: [
    PieChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ]
})
export class PieChartModule { }
