import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'productReviewCard';
  productName = 'Apple';
  productPrise = 32;
  imageUrl = 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg';
  isFlipped = false
  count=0
  clickHere(){
   this.count++
  }

  textYourComment = ''
  
}
