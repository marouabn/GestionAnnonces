import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acheteur-dashbord',
  templateUrl: './acheteur-dashbord.page.html',
  styleUrls: ['./acheteur-dashbord.page.scss'],
})
export class AcheteurDashbordPage implements OnInit {

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
