import {Injectable, InjectionToken} from '@angular/core';

export enum LogLevel{
    DEBUG,
    INFO,
    WARN,
    ERROR
}

@Injectable()
export class LogService {
    
    level: LogLevel = LogLevel.INFO;

    writeLog(obj: any) {
        if (this.level == LogLevel.DEBUG)
        {
            console.log(obj);
        }
    }
}

@Injectable()
export class DebugService extends LogService {
    constructor() {
        super();
        this.level = LogLevel.DEBUG;
    }
}

export var LogServiceProvider =
[{ provide: LogService, useClass: DebugService }]; 