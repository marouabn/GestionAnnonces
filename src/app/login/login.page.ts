import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
//import { doc } from '@firebase/firestore';
//import * as firebase from 'firebase/app';
import { AlertController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';
//import { Auth } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  tabUtilisateurs = [];
  users = {} as Users;
  subscription: any;
  role: string;
  user= {} as Users;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private platform: Platform,
    private router: Router,
    private alerCtrl: AlertController,
    private firestore: Firestore,
    private sevUser: UsersService
  ) { }

  ngOnInit() {
    /* firebase.auth().onAuthStateChanged(user => {
      if(user){
      firebase.firestore().doc(`/Users/${user.uid}`).get().then(usersSnapshot => {
      this.role= usersSnapshot.data().role;
      });
      }
      }); */
  }
  async login(users: Users) {
    this.afAuth.signInWithEmailAndPassword(users.email, users.password).
    then(
      (reponse) => {
        //console.log(reponse.user);
        localStorage.setItem('mytoken', reponse.user.refreshToken);
      const uid = reponse.user.uid;
      this.sevUser.getUsersById(uid).subscribe(res => {
        this.user = res;
      });
          if(this.user.role == 'admin'){
            this.router.navigateByUrl('dashbords/admin-dashbord/'+uid);
        }else if(this.user.role == 'acheteur'){
          this.router.navigateByUrl('dashbords/acheteur-dashbord/'+uid);
        }else if(this.user.role == 'vendeur'){
          this.router.navigateByUrl('dashbords/vendeur-dashbord/'+uid);
        }
      },
      async error => {
        const alert = await this.alerCtrl.create({
          message : error.message,
          buttons : [{text : 'ok', role: 'cancel'}]
        });
        await alert.present();
      }
      );
    }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      navigator['app'].exitApp();
    });
  }
  /* async login(users: Users) {
    // console.log(user);
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      const loader = await this.loadingCtrl.create({
        message: "Please wait..."
      });
      loader.present();

      try {
        // login user with email and password
        await this.afAuth.signInWithEmailAndPassword(users.email, users.password)
          .then(data => {
            //console.log(data);
            // redirect to home page
            if(users.role =='admin'){
            this.navCtrl.navigateRoot('home');
          }
          })
          .catch();
      } catch (e) {
        this.showToast(e);
      }
      // dismis loader
      loader.dismiss();
    }
  } */

  formValidation() {
    if (!this.users.email) {
      // show toast message
      this.showToast('Enter email');
      return false;
    }

    if (!this.users.password) {
      // show toast message
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

  goToResetPwd() {
    this.router.navigateByUrl('/pwd');
  }


}
