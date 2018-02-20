import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChildComponent } from './child';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-inv-dashboard',
  templateUrl: `./dashboard.component.html`,
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public data: any;
  public childNameParam: string;
  public childLastNameParam: string;

  public constructor(public service: DashboardService) {
    this.childNameParam = 'Terry';
    this.childLastNameParam = 'John';
    this.data = service.get();
    console.log(this.data);
  }

  public ngOnInit() {
    // call an API to get name details and assignt the response to data.
   // this.data = { 'fName': 'Samuel', 'lastName': 'Blank' };
  }

  childEventHandler(value: any): void {
    console.log(value);
    this.childNameParam = value;
  }

  public concatName(): String {
    return this.data.fName + ' ' + this.data.LName;
  }
}
