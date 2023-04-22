import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNegaEmprestComponent } from './dialog-nega-emprest.component';

describe('DialogNegaEmprestComponent', () => {
  let component: DialogNegaEmprestComponent;
  let fixture: ComponentFixture<DialogNegaEmprestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNegaEmprestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNegaEmprestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
