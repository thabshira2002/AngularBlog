import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [CommonModule],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css'
})
export class Attribute {
  isOne=true;
  textColor='yellow';
}
