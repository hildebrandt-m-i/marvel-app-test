import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { CharCardListComponent } from './char-card-list.component';

describe('CharCardListComponent', () => {
  let component: CharCardListComponent;
  let fixture: ComponentFixture<CharCardListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharCardListComponent ],
      imports: [IonicModule.forRoot(), PipesModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CharCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
