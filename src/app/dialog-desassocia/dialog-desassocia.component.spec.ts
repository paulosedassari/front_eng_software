import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDesassociaComponent } from './dialog-desassocia.component';

describe('DialogDesassociaComponent', () => {
  let component: DialogDesassociaComponent;
  let fixture: ComponentFixture<DialogDesassociaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDesassociaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDesassociaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
