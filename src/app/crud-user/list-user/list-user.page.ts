import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  tabUtilisateurs = [];
  constructor(private listUtilisateurServ: UsersService, private router: Router) { }

  ngOnInit() {
    this.tabUtilisateurs= this.listUtilisateurServ.getAllUtilisateur();
  };
  goToAdd() {
    this.router.navigateByUrl('/crud-user/add-user');
  }

}
