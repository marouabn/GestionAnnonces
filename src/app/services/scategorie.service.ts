import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Scategorie } from '../models/scategorie';

@Injectable({
  providedIn: 'root'
})
export class ScategorieService {

  constructor(private firestore: Firestore) { }
  getSCategorie(): Observable<Scategorie[]>{
    const scategorieRef = collection(this.firestore, 'scategorie');
    return collectionData(scategorieRef, { idField: 'id'}) as Observable<Scategorie[]>;
  };
  getSCategorieById(id): Observable<Scategorie[]>{
    const scategorieDocRef = doc(this.firestore, `scategorie/${id}`);
    return docData(scategorieDocRef, { idField: 'id'}) as Observable<Scategorie[]>;
  };
  addSCategorie(scategorie: Scategorie) {
    const scategorieRef = collection(this.firestore, 'scategorie');
    return addDoc(scategorieRef, scategorie);
  };

  deleteSCategorie(scategorie: Scategorie) {
    const scategorieDocRef = doc(this.firestore, `scategorie/${scategorie.id}`);
    return deleteDoc(scategorieDocRef);
  };
  updateSCategorie(scategorie: Scategorie) {
    const scategorieDocRef = doc(this.firestore, `scategorie/${scategorie.id}`);
    return updateDoc(scategorieDocRef, { id: scategorie.id,libelle: scategorie.libelle,
      description: scategorie.description, categorie: scategorie.categorie });
  };
}




