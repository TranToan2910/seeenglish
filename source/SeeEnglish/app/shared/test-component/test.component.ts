import {Component, AfterContentInit } from '@angular/core';

@Component({
    selector: 'app-test',
    moduleId: module.id,
    templateUrl: './test.component.html'
})
export class TestComponent {
    constructor() {
        console.log('test component');
    }

    ngAfterContentInit(): void {
        console.log('test finished loaded');
    }
}