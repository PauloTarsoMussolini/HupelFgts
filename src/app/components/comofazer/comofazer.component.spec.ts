import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComofazerComponent } from './comofazer.component';

describe('ComofazerComponent', () => {
  let component: ComofazerComponent;
  let fixture: ComponentFixture<ComofazerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComofazerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComofazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
