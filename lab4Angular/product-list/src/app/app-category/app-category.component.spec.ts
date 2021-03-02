import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCategoryComponent } from './app-category.component';

describe('AppCategoryComponent', () => {
  let component: AppCategoryComponent;
  let fixture: ComponentFixture<AppCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
