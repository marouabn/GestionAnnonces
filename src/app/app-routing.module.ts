import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //...canActivate(redirectUnauthorizedToLogin),
   //canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    //...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashbords/admin-dashbord/:id/crud-user/list-user',
    loadChildren: () => import('./crud-user/list-user/list-user.module').then( m => m.ListUserPageModule),
    //...canActivate(redirectUnauthorizedToLogin),
    canLoad: [AuthGuard]
  },
  {
    path: 'crud-user/add-user',
    loadChildren: () => import('./crud-user/add-user/add-user.module').then( m => m.AddUserPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crud-user/list-user/crud-user/detail-user/:id',
    loadChildren: () => import('./crud-user/detail-user/detail-user.module').then( m => m.DetailUserPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'pwd',
    loadChildren: () => import('./pwd/pwd.module').then( m => m.PwdPageModule)
  },
  {
    path: 'dashbords/admin-dashbord/:id/crud-profils/profil',
    loadChildren: () => import('./crud-profils/profil/profil.module').then( m => m.ProfilPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'dashbords/admin-dashbord/:id/crud-profils/profil',
    loadChildren: () => import('./crud-profils/profil/profil.module').then( m => m.ProfilPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'dashbords/vendeur-dashbord/:id/crud-annonce/list-annonce',
    loadChildren: () => import('./crud-annonce/list-annonce/list-annonce.module').then( m => m.ListAnnoncePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'dashbords/acheteur-dashbord/:id/crud-profils/profil',
    loadChildren: () => import('./crud-profils/profil/profil.module').then( m => m.ProfilPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'dashbords/acheteur-dashbord/:id/crud-annonce/add-annonce',
    loadChildren: () => import('./crud-annonce/add-annonce/add-annonce.module').then( m => m.AddAnnoncePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'dashbords/acheteur-dashbord/:id/crud-annonce/list-annonce',
    loadChildren: () => import('./crud-annonce/list-annonce/list-annonce.module').then( m => m.ListAnnoncePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crud-annonce/add-annonce',
    loadChildren: () => import('./crud-annonce/add-annonce/add-annonce.module').then( m => m.AddAnnoncePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crud-annonce/list-annonce',
    loadChildren: () => import('./crud-annonce/list-annonce/list-annonce.module').then( m => m.ListAnnoncePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crud-categorie/add-categorie',
    loadChildren: () => import('./crud-categorie/add-categorie/add-categorie.module').then( m => m.AddCategoriePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crud-categorie/list-categorie',
    loadChildren: () => import('./crud-categorie/list-categorie/list-categorie.module').then( m => m.ListCategoriePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crud-souscategorie/add-scategorie',
    loadChildren: () => import('./crud-souscategorie/add-scategorie/add-scategorie.module').then( m => m.AddScategoriePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crud-souscategorie/list-scategorie',
    loadChildren: () => import('./crud-souscategorie/list-scategorie/list-scategorie.module').then( m => m.ListScategoriePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crud-annonce/detail-annonce',
    loadChildren: () => import('./crud-annonce/detail-annonce/detail-annonce.module').then( m => m.DetailAnnoncePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crud-categorie/detail-categorie',
    loadChildren: () => import('./crud-categorie/detail-categorie/detail-categorie.module').then( m => m.DetailCategoriePageModule)
  },
  {
    path: 'crud-souscategorie/detail-scategorie',
    loadChildren: () => import('./crud-souscategorie/detail-scategorie/detail-scategorie.module').then( m => m.DetailScategoriePageModule)
  },
  {
    path: 'dashbords/admin-dashbord/:id',
    loadChildren: () => import('./dashbords/admin-dashbord/admin-dashbord.module').then( m => m.AdminDashbordPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'dashbords/acheteur-dashbord/:id',
    loadChildren: () => import('./dashbords/acheteur-dashbord/acheteur-dashbord.module').then( m => m.AcheteurDashbordPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'dashbords/vendeur-dashbord/:id',
    loadChildren: () => import('./dashbords/vendeur-dashbord/vendeur-dashbord.module').then( m => m.VendeurDashbordPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'dashbords/admin-dashbord/crud-profils/updateprofil',
    loadChildren: () => import('./crud-profils/updateprofil/updateprofil.module').then( m => m.UpdateprofilPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crud-annonce/acheteur-annonce',
    loadChildren: () => import('./crud-annonce/acheteur-annonce/acheteur-annonce.module').then( m => m.AcheteurAnnoncePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'bi',
    loadChildren: () => import('./bi/bi.module').then( m => m.BiPageModule),
    canLoad: [AuthGuard]},
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
