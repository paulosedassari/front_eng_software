import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSairComponent } from './dialog-sair.component';

describe('DialogSairComponent', () => {
  let component: DialogSairComponent;
  let fixture: ComponentFixture<DialogSairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
