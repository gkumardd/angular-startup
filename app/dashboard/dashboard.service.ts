import { Injectable } from "@angular/core";


@Injectable()
export class DashboardService {

    get(): any {
        return {
            'fName': 'samule d',
            'lName': 'terry l'
        };
    }
}