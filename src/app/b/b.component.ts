import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ElementRef,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { CComponent } from '../c/c.component';
import { El } from '../types';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
})
export class BComponent implements OnInit, AfterViewInit {
  x: number = 5;
  @Input() el!: El;

  @ContentChildren(CComponent) cs!: QueryList<CComponent>;
  @ContentChildren(CComponent, { read: ElementRef })
  csDom!: QueryList<ElementRef>;

  constructor() {}
  ngAfterViewInit(): void {
    console.log({
      cs: this.cs,
      csDOM: this.csDom,
      firstCCompField: this.cs.first.id,
      firstCDom: this.csDom.first.nativeElement, // <app-c>
      // also: last, length
    });
  }

  ngOnInit(): void {}
}
