import { Component } from '@angular/core';
import { Child1 } from './child1/child1';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [Child1, CommonModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {

receiveEmitter(id:number) {
  this.users =this.users.filter(user=>user.id !==id)
};

  users =[ 
  {'id':1,'name':'Anu','place':'calicut',},
  {'id':2,'name':'zubair','place':'malappuram'},
  {'id':3,'name':'maryam','place':'idukki'},
  {'id':4,'name':'shahn','place':'vayanadu'},

];

}
