import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from "@angular/material";
import { RestangularModule, Restangular } from 'ng2-restangular';
import {Http, Headers, URLSearchParams, HttpModule} from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CategoryPipe } from './category/category.pipe';
import { OrderByPipe } from './category/orderby.pipe';
import { Configuration } from './app.configuration';
import { CurrentUserService } from './core/services/current-user.service';
import { StorageService } from './core/services/storage.service';
// import { Pipe, PipeTransform } from '@angular/core';
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
import { SuccessreportComponent } from './successreport/successreport.component';
import { TReportComponent } from './t-report/t-report.component';
import { CategoryComponent } from './category/category.component';
// import { DataService } from '/app.api';

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
  { path: 's_report',  component: SuccessreportComponent},
  { path: 'category',  component: CategoryComponent},
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
    PdfComponent,
    SuccessreportComponent,
    TReportComponent,
    CategoryComponent,
    CategoryPipe,
    OrderByPipe,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes),BrowserAnimationsModule,MaterialModule,HttpModule, HttpClientModule
  ],
  providers: [ExcelService, Configuration, CurrentUserService, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {

}
