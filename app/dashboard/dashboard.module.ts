import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

import { ChildComponent, ChildModule } from './child';
import { DashboardService } from './dashboard.service';
@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ChildModule
    ],
    exports: [ DashboardComponent],
    providers: [DashboardService]
})

export class DashboardModule {

}
