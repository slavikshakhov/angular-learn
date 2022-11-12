import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { BComponent } from '../b/b.component';
import { El } from '../types';

const els = [
  { name: 'el1', id: 1 },
  { name: 'el2', id: 2 },
  { name: 'el3', id: 3 },
];

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent implements AfterViewInit {
  els: El[] = els;

  @ViewChildren(BComponent) bs!: QueryList<BComponent>; // access b comp by b tag
  //@ViewChildren(BComponent, { read: ElementRef }) bs!: QueryList<ElementRef>;   // list of b as DOM els (part of a html)
  constructor() {}
  ngAfterViewInit(): void {
    console.log({
      firstChildField: this.bs.first.el,
      lastChildField: this.bs.last.el,
      numOfChildren: this.bs.length,
    });
  }
}

/*
bs.forEach(b => console.log(b))
bs.changes.subscribe(b => console.log(b))  // if QueryLIst changes, delete el or add el...
*/
