import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AnnonceService } from 'src/app/services/annonce.service';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-acheteur-annonce',
  templateUrl: './acheteur-annonce.page.html',
  styleUrls: ['./acheteur-annonce.page.scss'],
})
export class AcheteurAnnoncePage implements OnInit {
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
  }

}
