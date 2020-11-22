import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { DetailsComponent } from './components/details/details.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import { from } from 'rxjs';
import {CardModule} from 'primeng/card';
import { RouterModule } from '@angular/router';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    DetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'user-input', component: UserInputComponent },
    ]),
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    TabMenuModule,
    DialogModule,
    CardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
