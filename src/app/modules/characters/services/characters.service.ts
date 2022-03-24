import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Character, CharactersResponse } from '../models/characters-model';

const { baseUrl, characters } = environment.endpoints;

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor( private http: HttpClient) { }

  public getCharacters(): Observable<Character[]> {
    return this.http.get<CharactersResponse>(`${baseUrl}${characters}`).pipe(map((res: CharactersResponse) => res?.data?.results));
  }
}
