import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmprestComponent } from './dialog-emprest.component';

describe('DialogEmprestComponent', () => {
  let component: DialogEmprestComponent;
  let fixture: ComponentFixture<DialogEmprestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEmprestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEmprestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
