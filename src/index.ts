import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
