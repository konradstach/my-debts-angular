import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import {DebtsListComponent} from './debts/debts-list.component';
import {DebtDetailComponent} from './debts/debt-detail/debt-detail.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'debts', component: DebtsListComponent},
  {path: 'new', component: DebtDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
