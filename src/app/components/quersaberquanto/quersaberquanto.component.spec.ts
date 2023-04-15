import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuersaberquantoComponent } from './quersaberquanto.component';

describe('QuersaberquantoComponent', () => {
  let component: QuersaberquantoComponent;
  let fixture: ComponentFixture<QuersaberquantoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuersaberquantoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuersaberquantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
