import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Annonce } from '../models/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {


  constructor(private firestore: Firestore) { }
  getAnnonce(): Observable<Annonce[]>{
    const annonceRef = collection(this.firestore, 'annonce');
    return collectionData(annonceRef, { idField: 'id'}) as Observable<Annonce[]>;
  };
  getAnnonceById(id): Observable<Annonce[]>{
    const userDocRef = doc(this.firestore, `annonce/${id}`);
    return docData(userDocRef, { idField: 'id'}) as Observable<Annonce[]>;
  };
  addAnnonce(annonce: Annonce) {
    const userRef = collection(this.firestore, 'annonce');
    return addDoc(userRef, annonce);
  };
  deleteUser(annonce: Annonce) {
    const userDocRef = doc(this.firestore, `annonce/${annonce.id}`);
    return deleteDoc(userDocRef);
  };
  updateAnnonce(annonce: Annonce) {
    const userDocRef = doc(this.firestore, `annonce/${annonce.id}`);
    return updateDoc(userDocRef, { titre: annonce.titre, prix: annonce.prix, avatar: annonce.avatar,
       description: annonce.description, datecreation: annonce.datecreation, dateupdate: annonce.dateupdate,
       contact: annonce.contact, categorie: annonce.categorie, scategorie: annonce.scategorie });
  };
}


