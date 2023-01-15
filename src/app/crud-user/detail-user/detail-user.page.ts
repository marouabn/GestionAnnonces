import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.page.html',
  styleUrls: ['./detail-user.page.scss'],
})
export class DetailUserPage implements OnInit {
  @Input() id: string;
  users;
  currentModal = null;
  constructor(private activatedRoute: ActivatedRoute,
    private userServ: UsersService,
    private router: Router,
    private modalctrl: ModalController,
    public alertController: AlertController) { }

  ngOnInit() {
    /* this.userServ.getUserById(this.id).subscribe(res => {
      this.users = res;
      console.log(this.users);
    }); */
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
  };

  async deleteUser() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation!',
      message: 'êtes vous sur de supprimer cet utilisateur!!',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            this.userServ.deleteUser(this.users);
            //this.modalctrl.dismiss();
            this.router.navigate(['crud-user', 'list-user']);
          }
        }
      ]
    });

    await alert.present();
  };
  async updateUser() {
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
            this.userServ.updateUsers(this.users);
            //this.modalctrl.dismiss();
            this.router.navigate(['crud-user', 'list-user']);
          }
        }
      ]
    });

    await alert.present();
  };


  dismissModal(){
    this.modalctrl.dismiss({
      dismissed: true
    });
  };
}
