import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from "@angular/material";

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import "hammerjs";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import { Dashboard1Component } from './dashboard-1/dashboard-1.component';
import { Dashboard2Component } from './dashboard-2/dashboard-2.component';
import { MainComponent } from './main/main.component';
import { DashtimeComponent } from './dashtime/dashtime.component';
import { DashgrowthComponent } from './dashgrowth/dashgrowth.component';
import { DashprofileComponent } from './dashprofile/dashprofile.component';
import { DashgraphComponent } from './dashgraph/dashgraph.component';
import { DashnewsComponent } from './dashnews/dashnews.component';
import { DashwallettransaComponent } from './dashwallettransa/dashwallettransa.component';
import { ExcelService } from './transaction-report/excel.service';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: '', redirectTo: '/main_dash', pathMatch: 'full' },
  { path: 'sidenav',  component: SidenavComponent},
  { path: 'header',  component: HeaderComponent},
  { path: 'footer',  component: FooterComponent},
  { path: 'transaction_rp',  component: TransactionReportComponent},
  { path: 'dashboard_1',  component: Dashboard1Component},
  { path: 'dashboard_2',  component: Dashboard2Component},
  { path: 'main_dash',  component: MainComponent},
  { path: 'dashtime',  component: DashtimeComponent},
  { path: 'dashgrowth',  component: DashgrowthComponent},
  { path: 'dashprofile',  component: DashprofileComponent},
  { path: 'dashgraph',  component: DashgraphComponent},
  { path: 'dashnews',  component: DashnewsComponent},
  { path: 'dashwallettransa',  component: DashwallettransaComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    TransactionReportComponent,
    Dashboard1Component,
    Dashboard2Component,
    MainComponent,
    DashtimeComponent,
    DashgrowthComponent,
    DashprofileComponent,
    DashgraphComponent,
    DashnewsComponent,
    DashwallettransaComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),BrowserAnimationsModule,MaterialModule,
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
