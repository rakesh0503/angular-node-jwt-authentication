/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { NewArrivalComponent } from './app/components/new-arrival/new-arrival.component';
import { bootstrapApplication } from '@angular/platform-browser';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {})
  .catch((err) => console.error(err));
// bootstrapApplication(NewArrivalComponent).catch((err) => console.error(err));
