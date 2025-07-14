import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css'
})
export class Child1 {
  @Input()DataFromParent:{id:number;name:string; place:string;};

  @Output()delete = new EventEmitter<any>();

DeleteMe() {
  this.delete.emit(this.DataFromParent.id);
}


}
