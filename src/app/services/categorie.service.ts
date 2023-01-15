import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  constructor(private firestore: Firestore) { }
  getCategorie(): Observable<Categorie[]>{
    const categorieRef = collection(this.firestore, 'categorie');
    return collectionData(categorieRef, { idField: 'id'}) as Observable<Categorie[]>;
  };
  getCategorieById(id): Observable<Categorie>{
    const categorieDocRef = doc(this.firestore, `categorie/${id}`);
    return docData(categorieDocRef, { idField: 'id'}) as Observable<Categorie>;
  };
  addCategorie(categorie: Categorie) {
    const categorieRef = collection(this.firestore, 'categorie');
    return addDoc(categorieRef, categorie);
  };

  deleteCategorie(categorie: Categorie) {
    const categorieDocRef = doc(this.firestore, `categorie/${categorie.id}`);
    return deleteDoc(categorieDocRef);
  };
  updateCategorie(categorie: Categorie) {
    const userDocRef = doc(this.firestore, `categorie/${categorie.id}`);
    return updateDoc(userDocRef, { id: categorie.id, nom: categorie.nom, avatar: categorie.avatar,
      datecreationCat: categorie.datecreationCat, dateupdateCat: categorie.dateupdateCat,
      description: categorie.description});
  };
}



