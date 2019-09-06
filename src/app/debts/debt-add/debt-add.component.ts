import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {numericValueValidator} from '../../validators/numeric-value-validator';

@Component({
  selector: 'md-debt-add',
  templateUrl: './debt-add.component.html',
  styleUrls: ['./debt-add.component.css']
})
export class DebtAddComponent {

  form: FormGroup;
  debtors = ['', 'Kamil', 'Alan', 'Robert'];

  debtor = new FormControl('', Validators.required);
  value = new FormControl('', numericValueValidator);
  description = new FormControl('');
  date = new FormControl('');
  meToPay = new FormControl('', Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      debtor: this.debtor,
      value: this.value,
      description: this.description,
      date: this.date,
      meToPay: this.meToPay
    });
  }

  onSubmit() {
    console.log('Form submitted!');
  }

  revert() {
    this.form.reset();
  }

}
