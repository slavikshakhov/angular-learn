import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

import {
  Firestore,
  collectionData,
  docData,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../product/product/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsFirestoreService {
  private productsCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.productsCollection = collection(this.firestore, 'products');
  }

  getAll() {
    return collectionData(this.productsCollection, {
      idField: 'id',
    }) as Observable<Product[]>;
  }

  get(id: string) {
    const productDocumentReference = doc(this.firestore, `product/${id}`);
    return docData(productDocumentReference, { idField: 'id' });
  }

  create(product: Product) {
    return addDoc(this.productsCollection, product);
  }

  update(product: Product) {
    const productDocumentReference = doc(
      this.firestore,
      `product/${product.id}`
    );
    return updateDoc(productDocumentReference, { ...product });
  }

  delete(id: string) {
    const productDocumentReference = doc(this.firestore, `product/${id}`);
    return deleteDoc(productDocumentReference);
  }
}
