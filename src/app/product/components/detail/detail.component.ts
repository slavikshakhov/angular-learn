import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product/interfaces/product.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() product: Product;
  @Output() updateProduct = new EventEmitter<void>();
  @Output() deleteProduct = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  update() {
    this.updateProduct.emit();
  }

  delete() {
    this.deleteProduct.emit();
  }
}
