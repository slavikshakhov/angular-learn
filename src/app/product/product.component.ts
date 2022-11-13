import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, Observable, Subject, takeUntil, tap } from 'rxjs';
import { ProductsFirestoreService } from '../core/products-firestore.service';
import { FormComponent } from './components/form/form.component';
import { Product } from './product/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  allProduct$: Observable<Product[]>;
  selectedProduct?: Product;
  destroyed$ = new Subject<void>();

  constructor(
    private readonly productService: ProductsFirestoreService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.allProduct$ = this.productService.getAll();
  }
  addProduct() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {},
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((product) => this.productService.create(product)),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  updateProduct() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { ...this.selectedProduct },
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((product) => this.productService.update(product)),
        tap((product) => this.selectProduct(product)),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct() {
    this.productService.delete(this.selectedProduct!.id);
    this.selectedProduct = undefined;
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
