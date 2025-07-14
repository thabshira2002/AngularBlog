import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  imports: [CommonModule],
  templateUrl: './structural.html',
  styleUrl: './structural.css'
})
export class Structural {
protected title = 'directives';
  Admin = false;


  log = false;
  clickMe(){
 this.log = !this.log
  }

  list = ['item1','item2','item3','item4']

  name = [{name:"jhone",age:21},{name:"subair",age:11},{name:"anu",age:14}] 
  
  
  selectedColor = 'red';

  userRole = '';


}

  