import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css'
})
export class Child2 {
@Output() notify = new EventEmitter <string>()

clickHere() {
this.notify.emit('hloo from child2')
}

}
