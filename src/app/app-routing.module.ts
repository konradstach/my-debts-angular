import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import {DebtsListComponent} from './debts/debts-list.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'debts', component: DebtsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
