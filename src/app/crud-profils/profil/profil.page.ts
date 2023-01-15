import { Component, Input, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
//import { Users } from 'src/app/models/users';
import { ProfilService } from 'src/app/services/profil.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  //@Input() id: string;
  users;
  currentModal = null;
  id: string;
  constructor(private activatedRoute: ActivatedRoute,
    private profilServ: ProfilService,
    private router: Router,
    private modalctrl: ModalController,
    public alertController: AlertController, private userServ: UsersService) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (p: ParamMap) => {
        this.id = p.get('id');
        this.userServ.getUsersById(this.id).subscribe(res => {
          this.users= res;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  async updateProfil() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation!',
      message: 'êtes vous sûr de modifier cet utilisateur!!',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            this.profilServ.updateProfil(this.users);
            //this.modalctrl.dismiss(this.id);
          }
        }
      ]
    });
    await alert.present();
  };
  updateUserProfil(users){
    this.profilServ.updateProfil(this.users);
    this.dismissModal();
  }

  dismissModal(){
    this.modalctrl.dismiss({
     dismissed: true
    });
  };
  /* goToUpdate(){
    this.router.navigate(['dashbords','admin-dashbord','crud-profils', 'updateprofil']);
  } */
}
