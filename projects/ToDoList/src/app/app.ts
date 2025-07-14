import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

slice() {
  this.listedItems.slice
}

  protected title = 'ToDoList';

  addThings = '';
  
listedItems: { things: string; isComplete: boolean }[] = [];

  clickme(){
      this.listedItems.push({ things: this.addThings, isComplete: false });
      this.addThings = '';

  }

  enter(intex:any){
    this.listedItems[intex].isComplete=true;

    console.log(this.listedItems)
    
  }

  
}
