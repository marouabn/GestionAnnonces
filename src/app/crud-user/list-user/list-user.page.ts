import { Component, OnInit, Pipe } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetailUserPage } from '../detail-user/detail-user.page';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})

export class ListUserPage implements OnInit {
  @Pipe({name: 'searchTerm'})
  users = [];
 currentModal = null;
 searchTerm: string;
  constructor(private listUserServ: UsersService, private router: Router,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.listUserServ.getUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  };
  async openUser(utilisateur: Users) {
    const modal = await this.modalCtrl.create({
      component: DetailUserPage,
      componentProps: { id: utilisateur.uid },
      swipeToClose: true,
    });
    await modal.present();
    this.currentModal = modal;
  }
  goToAdd() {
    this.router.navigateByUrl('/crud-user/add-user');
  }
}
