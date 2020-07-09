import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() private intervalFaired: EventEmitter<number> = new EventEmitter();
  private nextIndex: number = 1;
  private inerval = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  onStart() {
    this.inerval = setInterval(() => {
      this.intervalFaired.emit(this.nextIndex++);
    },3333);
  }

  onPause(){
    clearInterval(this.inerval);
  }
}
