import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersListPageRoutingModule } from './characters-list-routing.module';

import { CharactersListPage } from './characters-list.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CharactersListPageRoutingModule
  ],
  declarations: [CharactersListPage]
})
export class CharactersListPageModule {}
