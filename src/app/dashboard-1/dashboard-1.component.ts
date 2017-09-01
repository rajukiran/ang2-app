import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
// import {MdCardModule} from '@angular/material';

@Component({
  selector: 'app-dashboard-1',
  templateUrl: './dashboard-1.component.html',
  styleUrls: ['./dashboard-1.component.css'],
  providers: [TestService]
})
export class Dashboard1Component implements OnInit {

  title: String;

  constructor(private testService: TestService) { }

  ngOnInit() {
    // console.log("In dashboard-1");

    this.title = this.testService.testMethod();

  }

}
