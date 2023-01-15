import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { ScategorieService } from 'src/app/services/scategorie.service';

@Component({
  selector: 'app-add-scategorie',
  templateUrl: './add-scategorie.page.html',
  styleUrls: ['./add-scategorie.page.scss'],
})
export class AddScategoriePage implements OnInit {
  categories: Categorie[];
  scategorie;
  constructor(private scategorieSer: ScategorieService, private router: Router,
    private categorieService: CategorieService) { }
  ngOnInit() {
    this.categorieService.getCategorie().subscribe(
      res => this.categories = res
    );
  };
  onSubmit(f) {
    console.log(f);
    this.scategorieSer.addSCategorie(f);
    this.router.navigateByUrl('/crud-souscategorie/list-scategorie');
  }

}
