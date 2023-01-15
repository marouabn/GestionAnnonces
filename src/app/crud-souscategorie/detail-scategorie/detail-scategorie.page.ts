import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { ScategorieService } from 'src/app/services/scategorie.service';

@Component({
  selector: 'app-detail-scategorie',
  templateUrl: './detail-scategorie.page.html',
  styleUrls: ['./detail-scategorie.page.scss'],
})
export class DetailScategoriePage implements OnInit {

  @Input() id: string;
  scategories;
  currentModal = null;
  categories: Categorie[];
  categorie;
  annonces;
  //selectedUser;
  constructor(private activatedRoute: ActivatedRoute,
    private scategorieServ: ScategorieService ,
    private router: Router,
    private modalctrl: ModalController,
    public alertController: AlertController, private serviceCat: CategorieService) { }

  ngOnInit() {
    this.scategorieServ.getSCategorieById(this.id).subscribe(res => {
      this.scategories = res;
    });
    this.serviceCat.getCategorie().subscribe(
      res => this.categories = res
    );
  };

  async deleteSCategorie() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation!',
      message: 'êtes vous sur de supprimer cette sous categorie!!',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            this.scategorieServ.deleteSCategorie(this.scategories);
            this.modalctrl.dismiss();
          }
        }
      ]
    });

    await alert.present();
  };
  async updateSCategorie() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation!',
      message: 'êtes vous sûr de modifier cette sous categorie!!',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            this.scategorieServ.updateSCategorie(this.scategories);
            this.modalctrl.dismiss();
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


