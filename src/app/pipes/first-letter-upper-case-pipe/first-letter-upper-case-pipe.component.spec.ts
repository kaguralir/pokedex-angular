import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLetterUpperCasePipeComponent } from './first-letter-upper-case-pipe.component';

describe('FirstLetterUpperCasePipeComponent', () => {
  let component: FirstLetterUpperCasePipeComponent;
  let fixture: ComponentFixture<FirstLetterUpperCasePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLetterUpperCasePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLetterUpperCasePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
