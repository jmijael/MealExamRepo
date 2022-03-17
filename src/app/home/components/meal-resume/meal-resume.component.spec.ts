import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealResumeComponent } from './meal-resume.component';

describe('MealResumeComponent', () => {
  let component: MealResumeComponent;
  let fixture: ComponentFixture<MealResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
