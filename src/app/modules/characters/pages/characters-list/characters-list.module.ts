import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersListPageRoutingModule } from './characters-list-routing.module';

import { CharactersListPage } from './characters-list.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TranslateModule,
    CharactersListPageRoutingModule
  ],
  declarations: [CharactersListPage]
})
export class CharactersListPageModule {}
