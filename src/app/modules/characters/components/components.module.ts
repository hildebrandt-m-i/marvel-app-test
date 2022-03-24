import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharCardListComponent } from './char-card-list/char-card-list.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [CharCardListComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [CharCardListComponent]
})
export class ComponentsModule { }
