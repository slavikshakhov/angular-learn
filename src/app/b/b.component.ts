import { Component, OnInit, Input } from '@angular/core';
import { El } from '../types';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
})
export class BComponent implements OnInit {
  x: number = 5;
  @Input() el!: El

  constructor() {}

  ngOnInit(): void {}
}
