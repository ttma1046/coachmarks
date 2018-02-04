import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachmarksOverlayComponent } from './coachmarks-overlay.component';

xdescribe('CoachmarksOverlayComponent', () => {
  let component: CoachmarksOverlayComponent;
  let fixture: ComponentFixture<CoachmarksOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachmarksOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachmarksOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
