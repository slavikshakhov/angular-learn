import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],
})
export class CComponent implements OnInit {
  @Input() id!: number;

  constructor() {}

  ngOnInit(): void {}
}
