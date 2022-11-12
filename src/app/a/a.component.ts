import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BComponent } from '../b/b.component';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent implements AfterViewInit {
  @ViewChild(BComponent) b!: BComponent; // access b comp by b tag
  // @ViewChild('bRef1') b!: BComponent; // access b comp by ref

  // @ViewChild(BComponent, { read: ElementRef }) b!: ElementRef; // access to <b> as DOM belonging to a (not b's html)
  @ViewChild('header') header!: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    console.log({ bField: this.b.x }); // access b comp fields
    // console.log({ b: this.b });
    console.log({ header: this.header });
    this.header.nativeElement.style.color = 'red';
  }
}

/*
ViewChild accesses first match
use ref if > 1 el but diff behaviour 
*/
