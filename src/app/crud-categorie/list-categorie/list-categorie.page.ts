import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { DetailCategoriePage } from '../detail-categorie/detail-categorie.page';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.page.html',
  styleUrls: ['./list-categorie.page.scss'],
})
export class ListCategoriePage implements OnInit {
  categories = [];
  currentModal = null;
   constructor(private listCategorieServ: CategorieService, private router: Router,
     private modalCtrl: ModalController) { }
   ngOnInit() {
     this.listCategorieServ.getCategorie().subscribe(res => {
       console.log(res);
       this.categories = res;
     });
   };
   async openCategorie(categorie: Categorie) {
     const modal = await this.modalCtrl.create({
       component: DetailCategoriePage,
       componentProps: { id: categorie.id },
       swipeToClose: true,
     });
     await modal.present();
     this.currentModal = modal;
   }
   goToAdd() {
     this.router.navigateByUrl('/crud-categorie/add-categorie');
   }
 }
