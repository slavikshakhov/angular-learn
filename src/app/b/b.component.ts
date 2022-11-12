import {
  Component,
  OnInit,
  Input,
  ContentChild,
  AfterViewInit,
  ElementRef,
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

  @ContentChild(CComponent) c!: CComponent;
  @ContentChild(CComponent, { read: ElementRef }) cDom!: CComponent;

  constructor() {}
  ngAfterViewInit(): void {
    console.log({ cCompField: this.c.id, cDOM: this.cDom });
  }

  ngOnInit(): void {}
}
