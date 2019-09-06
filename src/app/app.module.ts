import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DebtsListComponent} from './debts/debts-list.component';
import {WelcomeComponent} from './home/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CurrencyPipe} from '@angular/common';
import {DebtAddComponent} from './debts/debt-add/debt-add.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataService} from './debts/data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DebtsListComponent,
    WelcomeComponent,
    DebtAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    MatDatepickerModule,
    MatNativeDateModule

  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule {
}
