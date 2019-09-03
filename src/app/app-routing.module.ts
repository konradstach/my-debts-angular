import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import {DebtsListComponent} from './debts/debts-list.component';
import {DebtAddComponent} from './debts/debt-add/debt-add.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'debts', component: DebtsListComponent},
  {path: 'new', component: DebtAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
