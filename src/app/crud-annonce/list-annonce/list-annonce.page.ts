import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Annonce } from 'src/app/models/annonce';
import { Categorie } from 'src/app/models/categorie';
import { AnnonceService } from 'src/app/services/annonce.service';
import { DetailAnnoncePage } from '../detail-annonce/detail-annonce.page';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.page.html',
  styleUrls: ['./list-annonce.page.scss'],
})
export class ListAnnoncePage implements OnInit {

  annonces = [];
 currentModal = null;
 categories: Categorie[];
  nom: string;

  constructor(private listAnnonceServ: AnnonceService, private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.listAnnonceServ.getAnnonce().subscribe(res => {
      console.log(res);
      this.annonces = res;
    });
  };
  async openAnnonce(annonce: Annonce) {
    const modal = await this.modalCtrl.create({
      component: DetailAnnoncePage,
      componentProps: { id: annonce.id },
      swipeToClose: true,
    });
    await modal.present();
    this.currentModal = modal;
  }
  goToAdd() {
    this.router.navigateByUrl('/crud-annonce/add-annonce');
  }
}

