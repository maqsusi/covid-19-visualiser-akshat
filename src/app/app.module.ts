import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowTotalComponent } from './show-total/show-total.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { StateComponent } from './state/state.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StateChartsComponent } from './state-charts/state-charts.component';
import { StateBarChartComponent } from './state-bar-chart/state-bar-chart.component';
import { StatePieChartComponent } from './state-pie-chart/state-pie-chart.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTotalComponent,
    BarChartComponent,
    PieChartComponent,
    RegisterComponent,
    DoughnutChartComponent,
    LineChartComponent,
    StateComponent,
    StateChartsComponent,
    StateBarChartComponent,
    StatePieChartComponent,
    RegComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
