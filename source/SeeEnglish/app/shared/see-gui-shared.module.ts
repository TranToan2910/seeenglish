import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// pro ui module
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { SideDrawerPageTemplateComponent } from './side-drawer-page-template/side-drawer-page-template.component';
import {TestComponent} from './test-component/test.component';
import { LogServiceProvider} from './common-service/debugg-log.service';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        TestComponent,
        SideDrawerPageTemplateComponent
    ],
    exports: [
        TestComponent,
        SideDrawerPageTemplateComponent
    ],
    providers: [
        LogServiceProvider
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SeeGuiSharedModule {
}