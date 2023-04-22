import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNegaExclusaoComponent } from './dialog-nega-exclusao.component';

describe('DialogNegaExclusaoComponent', () => {
  let component: DialogNegaExclusaoComponent;
  let fixture: ComponentFixture<DialogNegaExclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNegaExclusaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNegaExclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
