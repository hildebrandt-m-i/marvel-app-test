import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { MOCK_DATA_CHARACTERS } from 'src/app/constants/mock-data';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { CharactersDetailPage } from './characters-detail.page';

describe('CharactersDetailPage', () => {
  let component: CharactersDetailPage;
  let fixture: ComponentFixture<CharactersDetailPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersDetailPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, PipesModule, TranslateTestingModule.withTranslations({})]
    }).compileComponents();

    router = TestBed.inject(Router);
    spyOn(router, 'getCurrentNavigation').and.returnValue({ extras: { state: { character: MOCK_DATA_CHARACTERS[0] } } } as any );

    fixture = TestBed.createComponent(CharactersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
