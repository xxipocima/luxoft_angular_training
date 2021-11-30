import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {OnlyNumberComponent} from "./only-number.component";
import {OnlyNumberDirective} from "./only-number.directive";
import {OnlyEmailDirective} from "./only-email.directive";
import {OnlyEmailComponent} from "./only-email.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    OnlyEmailDirective,
    OnlyEmailComponent,
    OnlyNumberComponent,
    OnlyNumberDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
