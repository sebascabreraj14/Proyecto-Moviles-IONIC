import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReprisePage } from './reprise.page';

describe('ReprisePage', () => {
  let component: ReprisePage;
  let fixture: ComponentFixture<ReprisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
