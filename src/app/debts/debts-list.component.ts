import {Component, OnInit} from '@angular/core';
import {IDebt} from './debt';
import {DebtService} from './debt.service';

@Component({
  selector: 'app-debts-list',
  templateUrl: './debts-list.component.html',
  styleUrls: ['./debts-list.component.css']
})
export class DebtsListComponent implements OnInit {

  pageTitle: string = 'Debt list';
  debts: IDebt[];

  constructor(private debtService: DebtService) {
  }

  ngOnInit(): void {
    this.debtService.getDebts().subscribe(
      debts => {
        this.debts = debts;
        console.log(debts);
      }
    );
  }

}
