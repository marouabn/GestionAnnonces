import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.page.html',
  styleUrls: ['./add-categorie.page.scss'],
})
export class AddCategoriePage implements OnInit {
  constructor(private categorieSer: CategorieService, private router: Router) { }

  ngOnInit() {
  };
  onSubmit(f) {
    console.log(f);
    this.categorieSer.addCategorie(f);
    this.router.navigateByUrl('/crud-categorie/list-categorie');
  }

}
