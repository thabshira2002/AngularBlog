import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  // selectedColor='yellow'

  @HostBinding('style.backgroundColor') bgColor:string = 'yellow';
  @HostBinding('class.active') isActive: boolean = false;


  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'red';
    this.isActive = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'yellow';
    this.isActive = false;

  }

}
