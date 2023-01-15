import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendeur-dashbord',
  templateUrl: './vendeur-dashbord.page.html',
  styleUrls: ['./vendeur-dashbord.page.scss'],
})
export class VendeurDashbordPage implements OnInit {

  constructor(private angAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.angAuth.signOut().then(
      () => {
        localStorage.removeItem('mytoken');
        this.router.navigateByUrl('/');
      }
    );
    }

}
