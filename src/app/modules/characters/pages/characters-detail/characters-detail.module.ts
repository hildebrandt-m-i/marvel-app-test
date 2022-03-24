import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersDetailPageRoutingModule } from './characters-detail-routing.module';

import { CharactersDetailPage } from './characters-detail.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    CharactersDetailPageRoutingModule
  ],
  declarations: [CharactersDetailPage]
})
export class CharactersDetailPageModule {}
