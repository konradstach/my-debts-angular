import {Component, OnInit} from '@angular/core';
import {IDebt} from './debt';
import {DebtService} from './debt.service';
import {faCheck, faEdit, faPlus, faThumbsDown, faThumbsUp, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'md-debts-list',
  templateUrl: './debts-list.component.html',
  styleUrls: ['./debts-list.component.css']
})
export class DebtsListComponent implements OnInit {

  debts: IDebt[];
  deleteIcon = faTrash;
  editIcon = faEdit;
  thumbsUpIcon = faThumbsUp;
  thumbsDownIcon = faThumbsDown;
  addIcon = faPlus;
  confirmIcon = faCheck;

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

  onDeleteClick(rowNumber: number): void {
    console.log(rowNumber);
    this.debts.splice(rowNumber, 1);
  }

}
