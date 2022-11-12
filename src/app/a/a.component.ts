import { AfterViewInit, Component } from '@angular/core';
import { BComponent } from '../b/b.component';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent implements AfterViewInit {
  
  constructor() {}
  ngAfterViewInit(): void {
   
  }
}

