import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inv-dashboard',
  templateUrl: `./dashboard.component.html`,
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public data = null;

  public constructor() {
  }

  public ngOnInit() {
    // call an API to get name details and assignt the response to data.
    this.data = { 'firstName': 'Samuel', 'lastName': 'Blank' };

  }

  public concatName(): String {
    return this.data.firstName + ' '  + this.data.lastName;
  }
}
