import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: BarChartComponent
  }
]

@NgModule({
  declarations: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ]
})
export class BarChartModule { }
