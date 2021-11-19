import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.page.html',
  styleUrls: ['./detail-user.page.scss'],
})
export class DetailUserPage implements OnInit {
  selectedUser;
  constructor(private activatedRoute: ActivatedRoute,
    private userServ: UsersService,
    private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      console.log(p.get('id'));
      this.selectedUser = this.userServ.getUtilisateurById(p.get('id'));
    });
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
            this.userServ.deleteUserById(this.selectedUser);
            this.router.navigateByUrl('/crud-user/list-user');
          }
        }
      ]
    });

    await alert.present();
  }

}
