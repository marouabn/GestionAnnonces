import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  constructor(private userServ: UsersService, private router: Router, private afAuth: AngularFireAuth,
    public firestore: AngularFirestore,) { }

  ngOnInit() {
  };
  /* onSubmit(f) {
    console.log(f);
    this.userServ.addUsers(f);
    this.router.navigateByUrl('/crud-user/list-user');
  } */
  onSubmit(users: Users) {
    //console.log(f);
    this.afAuth.createUserWithEmailAndPassword(users.email, users.password).then(res => {
      if(res.user.uid){
        const data ={
          email: users.email,
          nom: users.nom,
          prenom: users.prenom,
          password: users.password,
          avatar: users.avatar,
          role: users.role,
          telephone: users.telephone,
          adresse: users.adresse,
          uid: res.user.uid
        };
        //this.saveDetails(data);
        this.userServ.addUsers(data);
      }
    });
    this.router.navigateByUrl('/crud-user/list-user');
  }
  saveDetails(data) {
    return this.firestore.collection('users').doc(data.uid).set(data);
  }
}
