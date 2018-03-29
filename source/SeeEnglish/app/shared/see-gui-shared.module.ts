import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SideDrawerPageTemplateComponent } from './side-drawer-page-template/side-drawer-page-template.component';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// pro ui module
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

@NgModule({
    imports: [],
    declarations: [
        SideDrawerPageTemplateComponent
    ],
    exports: [
        SideDrawerPageTemplateComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SeeGuiSharedModule {
}