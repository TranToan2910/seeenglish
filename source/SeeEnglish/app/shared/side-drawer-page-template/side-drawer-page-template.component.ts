import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ViewChildren,
    ContentChild,
    ContentChildren,
    ElementRef,
    ViewContainerRef,
    TemplateRef,
    ComponentRef,
    AfterContentInit,
    AfterViewInit,
    OnInit
} from '@angular/core';

export class SideItem {
    name: string;
    commands: Array<string>;
}

@Component({
    selector: 'app-side-drawer-page-template',
    moduleId: module.id,
    templateUrl: './side-drawer-page-template.html',
    styleUrls: ['./side-drawer-page-template-common.css', './side-drawer-page-template.css']
})
export class SideDrawerPageTemplateComponent implements AfterContentInit{
    /**
     * For android using SlideOnTop transition and for iOS, push transition.
     */
    drawerTransition: any;

    sideItems: any;
    
    constructor() {
        console.log('load side drawer template component')
    }

    public ngAfterContentInit(): void {
        console.log('Im finished loaded');
    }
}