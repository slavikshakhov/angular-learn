import { Component } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  DocumentData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learn-angular';
  products: Observable<Product[]>;
  constructor(firestore: Firestore) {
    const col = collection(firestore, 'products');
    this.products = collectionData(col) as Observable<Product[]>;
    this.products.subscribe((products) => console.log({ products }));
  }
}
