import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../product/interfaces/product.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() product$: Observable<Product[]>;
  @Output() productEmitter = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  selectProduct(product: Product) {
    this.productEmitter.emit(product);
  }
}
