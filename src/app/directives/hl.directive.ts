import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHl]',
})
export class HlDirective {
  isHl: boolean = false;
  constructor() {
    console.log('directive created');
  }
  @HostBinding('class.highlighted') get cssClasses() {
    return this.isHl;
  }

  // @HostBinding('class.highlighted') isHightlighted: boolean = true;
  // @HostBinding('className') get cssClasses() {
  //   return 'highlight';
  // }

  // @HostBinding('style.border') get cssStyles() {
  //   return '3px solid red';
  // }
  @HostListener('mouseover', ['$event']) mouseOver(e: MouseEvent) {
    console.log(e);
    this.isHl = true;
  }
  // @HostListener('mouseleave') mouseLeave() {
  //   this.isHl = false;
  // }
  
  @HostListener('mouseleave', ['$event']) mouseLeave(e: any) {   
    this.isHl = false;
  }
}
