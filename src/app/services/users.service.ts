import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, docData, collection, doc, addDoc, updateDoc } from '@angular/fire/firestore';
//import { deleteApp } from '@firebase/app';
import { deleteDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private firestore: Firestore, private afAuth: AngularFireAuth, public fire: AngularFirestore,) {  }
  getUsers(): Observable<Users[]>{
    const userRef = collection(this.firestore, 'users');
    return collectionData(userRef, { idField: 'id'}) as Observable<Users[]>;
  };
  getUsersById(id): Observable<Users>{
    const userDocRef = doc(this.firestore, `users/${id}`);
    return docData(userDocRef, { idField: 'uid'}) as Observable<Users>;
  };
  getUserById(id): Observable<Users[]>{
    const userDocRef = doc(this.firestore, `users/${id}`);
    return docData(userDocRef, { idField: 'uid'}) as Observable<Users[]>;
  };
 /*  getUserById(id){
      return this.fire.collection('users').doc(id).valueChanges();
  }; */
 /*  addUsers(user: Users) {
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }; */
  addUsers(data) {
    return this.fire.collection('users').doc(data.uid).set(data);
  }
  deleteUser(user: Users) {
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return deleteDoc(userDocRef);
  };
  updateUsers(user: Users) {
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return updateDoc(userDocRef, { nom: user.nom, prenom: user.prenom, avatar: user.avatar, email: user.email,
    adresse: user.adresse, role: user.role, telephone: user.telephone});
  };
}
