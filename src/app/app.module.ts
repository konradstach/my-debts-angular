import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DebtsListComponent} from './debts/debts-list.component';
import {WelcomeComponent} from './home/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DebtDetailComponent} from './debts/debt-detail/debt-detail.component';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DebtsListComponent,
    WelcomeComponent,
    DebtDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
