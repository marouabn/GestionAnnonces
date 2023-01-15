import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Categorie } from 'src/app/models/categorie';
import { Scategorie } from 'src/app/models/scategorie';
import { ScategorieService } from 'src/app/services/scategorie.service';
import { DetailScategoriePage } from '../detail-scategorie/detail-scategorie.page';

@Component({
  selector: 'app-list-scategorie',
  templateUrl: './list-scategorie.page.html',
  styleUrls: ['./list-scategorie.page.scss'],
})
export class ListScategoriePage implements OnInit {

  scategories = [];
  currentModal = null;
  categories: Categorie[];
   constructor(private listSCategorieServ: ScategorieService, private router: Router,
     private modalCtrl: ModalController) { }
   ngOnInit() {
     this.listSCategorieServ.getSCategorie().subscribe(res => {
       console.log(res);
       this.scategories = res;
     });
   };
   async openSCategorie(scategorie: Scategorie) {
     const modal = await this.modalCtrl.create({
       component: DetailScategoriePage,
       componentProps: { id: scategorie.id },
       swipeToClose: true,
     });
     await modal.present();
     this.currentModal = modal;
   }
   goToAdd() {
     this.router.navigateByUrl('/crud-souscategorie/add-scategorie');
   }
 }
