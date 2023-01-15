import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Categorie } from 'src/app/models/categorie';
import { Scategorie } from 'src/app/models/scategorie';
import { AnnonceService } from 'src/app/services/annonce.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { ScategorieService } from 'src/app/services/scategorie.service';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.page.html',
  styleUrls: ['./detail-annonce.page.scss'],
})
export class DetailAnnoncePage implements OnInit {

  @Input() id: string;
  annonces;
  currentModal = null;
  categories: Categorie[];
  scategories: Scategorie[];
  scategorie;
  categorie;
  annonce;
  //selectedUser;
  constructor(private activatedRoute: ActivatedRoute,
    private uannonceServ: AnnonceService ,
    private router: Router,
    private modalctrl: ModalController,
    public alertController: AlertController, private serviceCat: CategorieService,
    private scategorieServ: ScategorieService) { }

  ngOnInit() {
    this.uannonceServ.getAnnonceById(this.id).subscribe(res => {
      this.annonces = res;
    });
    this.serviceCat.getCategorie().subscribe(
      res => this.categories = res
    );
    this.scategorieServ.getSCategorie().subscribe(
      res => this.scategories = res
    );
  };

  async deleteAnnonce() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation!',
      message: 'êtes vous sur de supprimer cette annonce!!',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            this.uannonceServ.deleteUser(this.annonces);
            this.modalctrl.dismiss();
          }
        }
      ]
    });

    await alert.present();
  };
  async updateAnnonce() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation!',
      message: 'êtes vous sûr de modifier cette annonce!!',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            this.uannonceServ.updateAnnonce(this.annonces);
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

