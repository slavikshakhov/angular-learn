import { AfterViewInit, Component } from '@angular/core';
import { BComponent } from '../b/b.component';
import { El } from '../types';

const els = [
  { name: 'el1', id: 1, color: 'blue' },
  { name: 'el2', id: 2, color: 'red' },
  { name: 'el3', id: 3 },
];

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent implements AfterViewInit {
  els: El[] = els;

  constructor() {}
  ngAfterViewInit(): void {}
}
