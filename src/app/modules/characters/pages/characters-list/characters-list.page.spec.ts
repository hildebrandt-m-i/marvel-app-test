import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MOCK_DATA_CHARACTERS } from 'src/app/constants/mock-data';
import { ComponentsModule } from '../../components/components.module';
import { CharactersService } from '../../services/characters.service';

import { CharactersListPage } from './characters-list.page';

describe('CharactersListPage', () => {
  let component: CharactersListPage;
  let fixture: ComponentFixture<CharactersListPage>;
  let mockCharactersService: CharactersService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersListPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
        ComponentsModule,
        TranslateTestingModule.withTranslations({})
      ],
      providers: [CharactersService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    mockCharactersService = TestBed.inject(CharactersService);
    spyOn(mockCharactersService, 'getCharacters').and.returnValue(of(MOCK_DATA_CHARACTERS));

    fixture = TestBed.createComponent(CharactersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
