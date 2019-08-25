import {Component} from '@angular/core';
import {fadeAnimation} from './route-animations';


@Component({
  selector: 'app-root',
  animations: [fadeAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle = 'My debts app';

}
