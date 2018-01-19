import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [ DashboardComponent],
    providers: []
})

export class DashboardModule {

}
