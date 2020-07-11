import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTotalComponent } from './show-total/show-total.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RegisterComponent } from './register/register.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { StateComponent } from './state/state.component';
import { StateChartsComponent } from './state-charts/state-charts.component';
import { StateBarChartComponent } from './state-bar-chart/state-bar-chart.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: "home",
    component: ShowTotalComponent
  },

  {
    path: "bar",
    component: BarChartComponent
  },
  {
    path: "pie",
    component: PieChartComponent
  },
  {
    path: "doughnut",
    component: DoughnutChartComponent
  },
  {
    path: "line",
    component: LineChartComponent
  },
  {
    path: "state",
    component: StateComponent
  },
  {
    path: "state/state/:id",
    component: StateBarChartComponent
  },
  {
    path: "",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
