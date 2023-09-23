import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypwriterComponent } from './typwriter.component';

describe('TypwriterComponent', () => {
  let component: TypwriterComponent;
  let fixture: ComponentFixture<TypwriterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypwriterComponent]
    });
    fixture = TestBed.createComponent(TypwriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
