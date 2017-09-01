import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PERSONS, Person } from './model';
import { ExcelService } from './excel.service';
import { Http, URLSearchParams, Response, RequestOptions, Headers } from "@angular/http";
import { SuccessReportService } from '../success-report.service';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
declare let jsPDF;

@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.css'],
  providers: [ExcelService, SuccessReportService]
})

// import '../../assets/js/transfor.js';
export class TransactionReportComponent implements OnInit {
  persons: Person[];
  @ViewChild('test') el: ElementRef;

  constructor(private excelService: ExcelService, private http: Http, private sRS: SuccessReportService) {
    this.excelService = excelService;
    this.persons = PERSONS;
  }

  exportToExcel(event) {
    this.excelService.exportAsExcelFile(PERSONS, 'persons');
  }

  public download() {

    let pdf = new jsPDF();
    let options = {
      pagesplit: true
    };
    pdf.addHTML(this.el.nativeElement, 0, 0, options, () => {
      pdf.save("test.pdf");
    });
  }

  testRequest() {
    console.log("In callback");
    console.log(this.sRS.testRequest());
  }

  ngOnInit() {
    // this.restangular.one('user/test', )
  }
}
