import { Component } from '@angular/core';

@Component ({
    selector: 'app-toeic-test',
    moduleId: module.id,
    templateUrl: './toec-test.html',
    styleUrls: ['./toec-test-common.css']
})
export class ToeicTestComponent {
    isLoading: boolean;
    
    constructor() {

    }
}