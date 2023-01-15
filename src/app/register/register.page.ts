import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


import { Router } from '@angular/router';
import { Firestore } from '@firebase/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { NOMEM } from 'dns';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  users = {} as Users;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private userServ: UsersService,
    private router: Router,
    public firestore: AngularFirestore,
  ) { }

  ngOnInit() {
  }

  async register(users: Users) {
    // console.log(user);
    if (this.formValidation()) {
      // console.log("ready to submit");
      const loader = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
      loader.present();
      try {
        // register user with email and password
        await this.afAuth.createUserWithEmailAndPassword(users.email, users.password).then(res => {
          res.user.sendEmailVerification();
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
            this.saveDetails(data).then(() => {
              alert('Account Created!');
            },err=>{
                console.log(err);
              });
          };
         //const user= res;
         //const uid = user['uid'];
         //console.log(user);
         //users.id= uid;
       //this.userServ.addUsers(users);
            this.navCtrl.navigateRoot('login');
          })
          .catch();
      } catch (e) {
        this.showToast(e);
      }
      loader.dismiss();
    }
  }
  /* register(users: Users){
    this.afAuth.createUserWithEmailAndPassword(users.email, users.password).then(res => {
      if(res.user.uid){
        const data ={
          email: users.email,
          nom: users.nom,
          prenom: users.prenom,
          password: users.password,
          avatar: users.avatar,
          role: users.role,
          cin: users.cin,
          datenaissance: users.datenaissance,
          telephone: users.telephone,
          uid: res.user.uid
        };
        this.saveDetails(data).then(res => {
         alert('Account Created!');
         this.navCtrl.navigateRoot('login');
        },err=>{
          console.log(err);
        });
      }
    },err=>{
      alert(err.message);

      console.log(err);
    });
  } */
  saveDetails(data) {
    return this.firestore.collection('users').doc(data.uid).set(data);
  }

  formValidation() {
    if (!this.users.email) {
      this.showToast('Enter email');
      return false;
    }

    if (!this.users.password) {
      this.showToast('Enter password');
      return false;
    }

    return true;
  }

  showToast(mesg: string) {
    this.toastCtrl
      .create({
        message: mesg,
        duration: 3000
      })
      .then(toastData => toastData.present());
  }
}

