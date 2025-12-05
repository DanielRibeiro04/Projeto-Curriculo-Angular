import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaBloqueio } from './tela-bloqueio';

describe('TelaBloqueio', () => {
  let component: TelaBloqueio;
  let fixture: ComponentFixture<TelaBloqueio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaBloqueio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaBloqueio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
