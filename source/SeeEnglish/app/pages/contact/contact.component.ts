import {
    Component, AfterViewChecked, AfterViewInit, OnInit, ViewChild, ContentChild, ViewContainerRef, ElementRef
} from '@angular/core';

@Component({
    selector: 'app-contact',
    moduleId: module.id,
    templateUrl: './contact.html',
    styleUrls: ['./contact-common.css']
})
export class ContactComponent implements AfterViewInit{
    @ViewChild('container') panel: ElementRef;

    constructor(){
        console.log('I am contact screen');
    }

    ngAfterViewInit() {
        console.log(this.panel);
    }
}