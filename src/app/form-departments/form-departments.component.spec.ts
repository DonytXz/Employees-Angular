import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDepartmentsComponent } from './form-departments.component';

describe('FormDepartmentsComponent', () => {
  let component: FormDepartmentsComponent;
  let fixture: ComponentFixture<FormDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
