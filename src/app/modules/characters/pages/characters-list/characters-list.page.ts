import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/characters-model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.page.html',
  styleUrls: ['./characters-list.page.scss'],
})
export class CharactersListPage implements OnInit {

  public characters: Character[] = [];
  public skeletons: number[] = Array(10);

  public get hasCharacters(): boolean {
    return this.characters.length > 0;
  }

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getCharacters()
      .subscribe((res: Character[]) => {
        this.characters = res;
      }, (error: HttpErrorResponse) => console.log(error));
  }

  public goToDetail(character: Character): void {
    console.log(character);
  }

}
