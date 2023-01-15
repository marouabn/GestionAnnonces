import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { ProfilPage} from '../../crud-profils/profil/profil.page';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.page.html',
  styleUrls: ['./admin-dashbord.page.scss'],
})
export class AdminDashbordPage implements OnInit {
  currentModal = null;
  constructor(private router: Router, private angAuth: AngularFireAuth, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  goToUsers(){
    this.router.navigate(['crud-user', 'list-user']);
  }
  logout() {
    this.angAuth.signOut().then(
      () => {
        localStorage.removeItem('mytoken');
        this.router.navigateByUrl('/');
      }
    );
    }
    /* async openUser(utilisateur: Users) {
      const modal = await this.modalCtrl.create({
        component: ProfilPage,
        componentProps: { id: utilisateur.id },
        swipeToClose: true,
      });
      await modal.present();
      this.currentModal = modal;
    } */
    goToProfiol(){
      //const uid = user['uid'];
          //this.router.navigateByUrl('dashbords/admin-dashbord/'+uid);
      //this.router.navigate(['crud-profil', 'profil']);
    }
    /* async goToProfiol(utilisateur) {
      const modal = await this.modalCtrl.create({
        component: ProfilPage,
        componentProps: { id: utilisateur.id },
        swipeToClose: true,
      });
      await modal.present();
      this.currentModal = modal;
    } */
}
