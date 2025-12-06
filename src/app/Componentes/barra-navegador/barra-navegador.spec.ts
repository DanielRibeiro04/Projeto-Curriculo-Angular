import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegador } from './barra-navegador';

describe('BarraNavegador', () => {
  let component: BarraNavegador;
  let fixture: ComponentFixture<BarraNavegador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraNavegador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraNavegador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
