import { Component, EventEmitter} from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
    selector: 'app-dashboard-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent {

    @Input() childFirstName: string;
    @Input() childLastName: string;
    @Output() outValue = new EventEmitter<string>();

    constructor() {
    }

    onChanged(): void {
        console.log(this.childFirstName);
        this.outValue.emit(this.childFirstName);
    }
}
