import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelogioFooter } from './relogio-footer';

describe('RelogioFooter', () => {
  let component: RelogioFooter;
  let fixture: ComponentFixture<RelogioFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelogioFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelogioFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
