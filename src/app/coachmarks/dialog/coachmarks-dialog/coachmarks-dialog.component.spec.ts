import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoachmarksDialogComponent } from './coachmarks-dialog.component';

describe('CoachmarksDialogComponent', () => {
  let component: CoachmarksDialogComponent;
  let fixture: ComponentFixture<CoachmarksDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachmarksDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachmarksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('On load - Without Dependencies', () => {
    it('should have the correct id for the logo span element', () => {
      const logoSpanDe = fixture.debugElement.query(By.css('#coachmark-information-logo'));
      expect(logoSpanDe).toBeTruthy();
    });

    it('should set \'Don\'t show\' checkbox to unchecked.', () => {
      const checkboxDe = fixture.debugElement.query(By.css('#coachmark-do-not-show'));
      const checkboxEl = checkboxDe.nativeElement;
      expect(checkboxEl.checked).toBeFalsy();
    });

    it('should set label to point to checkbox', () => {
      const labelDe = fixture.debugElement.query(By.css('footer > label'));
      
      expect(labelDe.attributes.for).toEqual('coachmark-do-not-show');
    });

    it('should have correct text for label', () => {
      const labelDe = fixture.debugElement.query(By.css('footer > label'));
      const labelEl = labelDe.nativeElement;
      expect(labelEl.textContent).toEqual('Don\'t show me this dialog again.');
    });

    it('should have the message be blank', () => {
      const messageSpanDe = fixture.debugElement.query(By.css('#coachmark-body > span'));
      const messageSpanEl = messageSpanDe.nativeElement;
      expect(messageSpanEl.textContent).toEqual('');
    });
  })
});
