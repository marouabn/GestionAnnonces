import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private firestore: Firestore) { }

  getProfilById(id): Observable<Users>{
    const userDocRef = doc(this.firestore, `users/${id}`);
    return docData(userDocRef, { idField: 'id'}) as Observable<Users>;
  };
  updateProfil(user: Users) {
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return updateDoc(userDocRef, { nom: user.nom, prenom: user.prenom, avatar: user.avatar, email: user.email,
    adresse: user.adresse, telephone: user.telephone});
  }
}
