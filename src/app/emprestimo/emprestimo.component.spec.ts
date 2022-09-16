import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoComponent } from './emprestimo.component';

describe('EmprestimoComponent', () => {
  let component: EmprestimoComponent;
  let fixture: ComponentFixture<EmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
