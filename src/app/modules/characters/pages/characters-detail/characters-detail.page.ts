import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MAIN_ROUTES } from 'src/app/constants/main-routes';
import { Character } from '../../models/characters-model';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.page.html',
  styleUrls: ['./characters-detail.page.scss'],
})
export class CharactersDetailPage implements OnInit {

  public readonly backUrl: string = MAIN_ROUTES.CHARACTERS_LIST;
  public character: Character;

  constructor(
    private route: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.character = this.route.getCurrentNavigation().extras?.state?.character ?? null;
    if (!this.character) {
      this.navCtrl.navigateRoot([MAIN_ROUTES.CHARACTERS_LIST]);
    }
  }

}
