import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ChildComponent} from './child.component';


@NgModule({
    declarations: [
        ChildComponent
        ],
        imports: [
            BrowserModule,
            FormsModule
        ],
        exports: [ ChildComponent],
        providers: []
})
export class ChildModule {

}
