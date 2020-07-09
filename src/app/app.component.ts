import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  intervalFaired(index: number) {
    switch (index%2) {
      case 1:
        this.oddNumbers.push(index);
        break;
      default:
        this.evenNumbers.push(index);
    }
  }
}
