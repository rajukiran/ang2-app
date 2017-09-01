import { Component, OnInit } from '@angular/core';
import { SuccessReportService } from '../success-report.service';

@Component({
  selector: 'app-successreport',
  templateUrl: './successreport.component.html',
  styleUrls: ['./successreport.component.css'],
  providers: [SuccessReportService]
})
export class SuccessreportComponent implements OnInit {

  constructor(private successReportService: SuccessReportService) { }

  ngOnInit() {
    let result = this.successReportService.testService();
    let firstPromise = Promise.resolve(result);
    // Promise.all(firstPromise)
    //   .then(values => {
    //     console.log(values)
    //   })
  }

  test() {

  }

}
