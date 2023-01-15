import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ProfilService } from 'src/app/services/profil.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.page.html',
  styleUrls: ['./updateprofil.page.scss'],
})
export class UpdateprofilPage implements OnInit {
id: string;
users;
  constructor(private activatedRoute: ActivatedRoute,
    private profilServ: ProfilService,
    private router: Router,
    private modalctrl: ModalController,
    public alertController: AlertController, private userServ: UsersService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (p: ParamMap) => {
        console.log(p);
        this.id = p.get('id');
        console.log(this.id);
        this.userServ.getUsersById(this.id).subscribe(res => {
          this.users= res;
          //console.log(this.users);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateProfil(users){
    this.profilServ.updateProfil(users);
  }

}
