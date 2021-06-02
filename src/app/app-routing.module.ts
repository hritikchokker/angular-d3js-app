import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'bar',
    loadChildren: () => import('./bar-chart/bar-chart.module').then(m => m.BarChartModule)
  },
  {
    path: 'pie',
    loadChildren: () => import('./pie-chart/pie-chart.module').then(m => m.PieChartModule)
  },
  {
    path: 'scatter',
    loadChildren: () => import('./scatter-chart/scatter-chart.module').then(m => m.ScatterChartModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
