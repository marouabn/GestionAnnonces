import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Scategorie } from 'src/app/models/scategorie';
import { AnnonceService } from 'src/app/services/annonce.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { ScategorieService } from 'src/app/services/scategorie.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {
  annonce;
  categories: Categorie[];
  scategories: Scategorie[];
  constructor(private annonceSer: AnnonceService, private router: Router,
     private categorieService: CategorieService, private scategorieServ: ScategorieService) { }

  ngOnInit() {
    this.categorieService.getCategorie().subscribe(
      res => this.categories = res
    );
    this.scategorieServ.getSCategorie().subscribe(
      res => this.scategories = res
    );
  };
  onSubmit(f) {
    console.log(f);
    this.annonceSer.addAnnonce(f);
    this.router.navigateByUrl('/crud-annonce/list-annonce');
  }

}
