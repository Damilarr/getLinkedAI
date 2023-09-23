import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeCriteriaComponent } from './judge-criteria.component';

describe('JudgeCriteriaComponent', () => {
  let component: JudgeCriteriaComponent;
  let fixture: ComponentFixture<JudgeCriteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JudgeCriteriaComponent]
    });
    fixture = TestBed.createComponent(JudgeCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
