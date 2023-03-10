import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pwd',
  templateUrl: './pwd.page.html',
  styleUrls: ['./pwd.page.scss'],
})
export class PwdPage implements OnInit {
  constructor(private angFireAuth : AngularFireAuth, private router: Router, 
    private alerCtrl : AlertController) { }

  ngOnInit() {
  }

  async resetPwd(f) {
    //console.log(this.angFireAuth.signInWithEmailAndPassword(f['email'], f['password']));
    this.angFireAuth.sendPasswordResetEmail(f['email']).
    then(
      async () => {
          const alert = await this.alerCtrl.create({
          message : 'Check yout email to reset password',
          buttons : [{text : 'ok', role: 'cancel', handler :
        () => {
          this.router.navigateByUrl('login');
        }}]
        });
        await alert.present();
      },
      async error => {
        const errorAlert = await this.alerCtrl.create({
          message : error.message,
          buttons : [{text : 'ok', role: 'cancel'}]
        });
        await errorAlert.present();
      }
      );
    }

}

