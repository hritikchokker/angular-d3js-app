import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterChartComponent } from './scatter-chart.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ScatterChartComponent
  }
]

@NgModule({
  declarations: [
    ScatterChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ScatterChartModule { }
