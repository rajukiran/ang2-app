import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PERSONS, Person } from './model';
import { ExcelService } from './excel.service';
declare let jsPDF;

@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.css'],
  providers: [ExcelService]
})

// import '../../assets/js/transfor.js';
export class TransactionReportComponent implements OnInit {
  persons: Person[];
  @ViewChild('test') el: ElementRef;

  constructor(private excelService: ExcelService) {
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

  ngOnInit() {
  }
}
