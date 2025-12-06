import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialChrome } from './tela-inicial-chrome';

describe('TelaInicialChrome', () => {
  let component: TelaInicialChrome;
  let fixture: ComponentFixture<TelaInicialChrome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaInicialChrome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicialChrome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
