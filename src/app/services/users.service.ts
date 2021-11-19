import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  listUsers: User[]= [
    {
      id: 1,
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/220px-Emma_Watson_2013.jpg',
      cin: '07485307',
      nom: 'Gharbi',
      prenom: 'Faouzia',
      email: 'faouzia.gharbi@gmail.com',
      datenaissance: '1997-02-27',
      telephone: '21367963',
      role:'admin',
      adresse: 'Ariana',
      codepostale: '2022',
  },
  {
    id: 2,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Natalie_Portman_Cannes_2015_5.jpg/220px-Natalie_Portman_Cannes_2015_5.jpg',
    cin: '07413607',
    nom: 'Madouini',
    prenom: 'Nawress',
    email: 'nawress.madouini@gmail.com',
    datenaissance: '1998-02-12',
    telephone: '55554123',
    role:'vendeur',
    adresse: 'Ariana',
    codepostale: '2022'
},
{
  id: 3,
  avatar: 'https://fr.web.img4.acsta.net/c_310_420/pictures/17/10/13/15/26/0350483.jpg',
  cin: '10237480',
  nom: 'Tayachi',
  prenom: 'Marwen',
  email: 'marwen.tayechi@gmail.com',
  datenaissance: '1996-05-27',
  telephone: '22113344',
  role:'acheteur',
  adresse: 'Bizert',
  codepostale: '2013'
},
  ];

  constructor() { }

  getAllUtilisateur(){
    return this.listUsers;
  };
  getUtilisateurById(id){
    return this.listUsers.find((c) => c.id == id);
  };
  deleteUserById(c) {
    let i = this.listUsers.indexOf(c);
    this.listUsers.splice(i, 1);
  };
  addUser(newUser) {
      newUser.id = this.listUsers[this.listUsers.length - 1].id + 1;
      this.listUsers.push(newUser);
    }
}
