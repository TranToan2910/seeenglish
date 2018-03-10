import { platformNativeScriptDynamic } from "nativescript-angular/platform";
// import "./bundle-config";

import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
