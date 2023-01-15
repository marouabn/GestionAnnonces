import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.page.html',
  styleUrls: ['./detail-categorie.page.scss'],
})
export class DetailCategoriePage implements OnInit {
  @Input() id: string;
  categories;
  currentModal = null;
  //selectedUser;
  constructor(private activatedRoute: ActivatedRoute,
    private categorieServ: CategorieService ,
    private router: Router,
    private modalctrl: ModalController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.categorieServ.getCategorieById(this.id).subscribe(res => {
      this.categories = res;
    });
  };

  async deleteCategorie() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation!',
      message: 'êtes vous sur de supprimer cette categorie!!',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            this.categorieServ.deleteCategorie(this.categories);
            this.modalctrl.dismiss();
          }
        }
      ]
    });

    await alert.present();
  }
  async updateCategorie() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation!',
      message: 'êtes vous sûr de modifier cette categorie!!',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            this.categorieServ.updateCategorie(this.categories);
            this.modalctrl.dismiss();
          }
        }
      ]
    });

    await alert.present();
  };


  dismissModal(){
    this.modalctrl.dismiss({
      'dismissed': true
    });
  };
}


