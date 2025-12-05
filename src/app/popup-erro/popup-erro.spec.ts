import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupErro } from './popup-erro';

describe('PopupErro', () => {
  let component: PopupErro;
  let fixture: ComponentFixture<PopupErro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupErro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupErro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
