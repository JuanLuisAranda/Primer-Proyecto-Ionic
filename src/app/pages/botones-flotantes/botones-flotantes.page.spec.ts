import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesFlotantesPage } from './botones-flotantes.page';

describe('BotonesFlotantesPage', () => {
  let component: BotonesFlotantesPage;
  let fixture: ComponentFixture<BotonesFlotantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesFlotantesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesFlotantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
