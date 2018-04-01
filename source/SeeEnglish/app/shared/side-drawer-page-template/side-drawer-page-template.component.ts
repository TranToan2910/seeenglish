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
    OnInit,
    NgZone,
    OnDestroy
} from '@angular/core';

import {
    RadSideDrawerComponent, SideDrawerType
} from 'nativescript-ui-sidedrawer/angular';
import {
    PushTransition, SlideInOnTopTransition
  } from 'nativescript-ui-sidedrawer';
  
import {
    ActivatedRoute
} from '@angular/router';
import {RouterExtensions} from 'nativescript-angular/router';
import {
    Page
} from 'ui/page';
import {isAndroid, isIOS } from 'platform';
import {ActionItem} from 'ui/action-bar';

import {LogService} from '../common-service/debugg-log.service';

/**
 * class to define side item of side drawer page
 */
export class SideItem {
    name: string;
    commands: Array<string>;
    // childItem: Array<SideItem>
}

const SEE_SIDE_MENU: SideItem[] = [
    {
        name: 'Toeic-Test',
        commands: ['/toeic-test']
    },
    {
        name: 'Quiz',
        commands: ['/quiz']
    },
    {
        name: 'Information',
        commands: ['/info']
    },
    {
        name: 'Contact',
        commands: ['/contact']
    }
];

const USER_INFO_COMMAND = ['./user-info'];

@Component({
    selector: 'app-side-drawer-page-template',
    moduleId: module.id,
    templateUrl: './side-drawer-page-template.html',
    styleUrls: ['./side-drawer-page-template-common.css', './side-drawer-page-template.css']
})
export class SideDrawerPageTemplateComponent implements AfterContentInit, AfterViewInit, OnDestroy{
    /**
    * On tap of any side-drawer item, hiding content if this flag is true.
    */
    isContentVisible: boolean = true;
    
    /**
     * get child side drawer angular component
     */
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    
    /**
     * the native script element under side drawer angular component
     */
    private drawer: SideDrawerType;
    
    /**
     * For android using SlideOnTop transition and for iOS, push transition.
     */
    drawerTransition: any;

    /**
     * List of item to display on side drawer menu
     */
    sideItems: Array<SideItem>;
    
    userInfocommands: Array<String>;

    userInfo = 'John smith';
    
    constructor(
        private routerExtensions: RouterExtensions,
        private activatedRoute: ActivatedRoute,
        private page: Page,
        private ngzone: NgZone,
        private logService: LogService
    ) {
        this.logService.writeLog('load side drawer template component');
        this.setActionBarIcon(this.page);
        this.setDrawerTransition();
        this.sideItems = SEE_SIDE_MENU;
        this.userInfocommands = USER_INFO_COMMAND;
    }

    /**
     * get the component after view init
     */
    public ngAfterViewInit(): void {
        this.logService.writeLog('on after view init');
        this.drawer = this.drawerComponent.sideDrawer;
    }

    /**
     * after init content
     */
    public ngAfterContentInit(): void {
        this.logService.writeLog('finished loaded content');
        if (this.drawerComponent !== null && this.drawerComponent !== undefined) {
            this.logService.writeLog('found it');
        } else {
            this.logService.writeLog('not found')
        }
    }
    
    /**
     * look like it require to stop the event added when navigate
     */
    public ngOnDestroy():void {
        this.drawer.off('drawerClosed');
    }
    
    /**
     * set the action bar icon/ button
     * @param page 
     */
    private setActionBarIcon(page: Page): any {
        if (isAndroid) {
            this.page.actionBar.navigationButton = this.getNavigationButton();
        }
        if (isIOS) {
            this.page.actionBar.actionItems.addItem(this.getNavigationButton());
        }
    }

    /**
     * create the icon/button
     */
    private getNavigationButton(): ActionItem {
        let navActionItem = new ActionItem();
        navActionItem.icon = 'res://ic_menu_white';
        if (navActionItem.ios) {
            navActionItem.ios.position = 'left';
        }
        navActionItem.on('tap', this.toggleDrawer.bind(this));
        return navActionItem;
    }

    /**
     * toggle side drawer state
     */
    private toggleDrawer() {
        this.drawer.toggleDrawerState();
    }

    /**
     * transition effect
     */
    private setDrawerTransition() {
        if (isAndroid) {
            this.drawerTransition = new SlideInOnTopTransition();
            this.logService.writeLog('android');
        }
        if (isIOS) {
            this.drawerTransition = new PushTransition();
            this.logService.writeLog('ios');
        }
    }

    /**
     * navigate after click to side drawer item
     */
    public navigateTo(routeCommands: any[]): void {
        this.drawer.closeDrawer();
        
        // routing belong to native script
        let currentUrl = this.routerExtensions.router.routerState.snapshot.url;
        let newUrlTree = this.routerExtensions.router.createUrlTree(routeCommands);
        let newUrl = this.routerExtensions.router.serializeUrl(newUrlTree);
        
        if (currentUrl != newUrl) {
            this.isContentVisible = false; // hide content while loading

            this.drawer.on('drawerClosed', ()=> { // event catch javascript style, seem using plain native script
                this.ngzone.run(()=>{
                    // dummy load time
                    setTimeout(() => {
                    this.routerExtensions.navigate(routeCommands, {
                        clearHistory: true,
                        animated: false
                    });
                    this.isContentVisible = true;
                    this.drawer.off('drawerClosed');
                    }, 2000);
                })
            })
        }
    }
}