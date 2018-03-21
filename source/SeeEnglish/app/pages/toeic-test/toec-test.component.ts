import { Component, AfterViewInit, ViewChild, ElementRef, ViewContainerRef, ComponentRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { RadSideDrawerComponent} from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component ({
    selector: 'app-toeic-test',
    moduleId: module.id,
    templateUrl: './toec-test.html',
    styleUrls: ['./toec-test-common.css']
})
export class ToeicTestComponent implements AfterViewInit {
    
    /**
     * angular component
     */
    @ViewChild(RadSideDrawerComponent)
    drawerComponent: RadSideDrawerComponent;

    /**
     * inside native script element
     */
    drawer: RadSideDrawer;

    isLoading: boolean;
    
    constructor(private router: Router) {

    }

    openDrawer() {
        console.log('open side drawer');
        // this.router.navigate(['./quiz']);
        this.drawer.showDrawer();
    }

    ngAfterViewInit () {
        this.drawer = this.drawerComponent.sideDrawer;
    }
}