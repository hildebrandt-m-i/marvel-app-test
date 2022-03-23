import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MAIN_ROUTES } from './constants/main-routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: MAIN_ROUTES.CHARACTERS_LIST,
    pathMatch: 'full'
  },
  {
    path: MAIN_ROUTES.CHARACTERS_LIST,
    loadChildren: () => import('./modules/characters/pages/characters-list/characters-list.module').then( m => m.CharactersListPageModule)
  },
  {
    path: MAIN_ROUTES.CHARACTERS_DETAIL,
    loadChildren: () => import('./modules/characters/pages/characters-detail/characters-detail.module').then( m => m.CharactersDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
