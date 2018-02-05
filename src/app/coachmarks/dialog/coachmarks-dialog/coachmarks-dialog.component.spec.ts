import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoachmarksDialogComponent } from './coachmarks-dialog.component';
import { CoachmarksDirection } from '../core/coachmarks-direction.enum';

describe('CoachmarksDialogComponent', () => {
  let component: CoachmarksDialogComponent;
  let fixture: ComponentFixture<CoachmarksDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoachmarksDialogComponent]
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
  });

  describe('On load - With dependencies', () => {
    it('Should set the message span element to the message passed into the component', () => {
      const message = 'This is a message';
      const messageSpanDe = fixture.debugElement.query(By.css('#coachmark-body > span'));
      const messageSpanEl = messageSpanDe.nativeElement;

      component.message = message;
      fixture.detectChanges();

      expect(messageSpanEl.textContent).toBe(message);
    });

    it('should set the button text to \'Done\' if hasNext input is false', () => {
      const hasNext = false;
      const buttonDe = fixture.debugElement.query(By.css('#coachmark-body > button'));
      const buttonEl = buttonDe.nativeElement;

      component.hasNext = hasNext;
      fixture.detectChanges();

      expect(buttonEl.textContent).toBe('Done');
    });
  });

  describe('Class Settings', () => {
    it(`should set no class to the main section of the componenet
      when the coachmark direction is not specified`, () => {
        const coachmarkSectionDe = fixture.debugElement.query(By.css('section'));
        expect(coachmarkSectionDe.classes['right-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['left-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['top-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['bottom-position']).toBeFalsy();
      });

    it(`should set the \'right-position\' class to the section
      element when the coachmark direction is specfied on the right`, () => {
        component.direction = CoachmarksDirection.Right;
        component.ngOnInit();
        fixture.detectChanges();

        const coachmarkSectionDe = fixture.debugElement.query(By.css('section'));


        expect(coachmarkSectionDe.classes['right-position']).toBeTruthy();
        expect(coachmarkSectionDe.classes['left-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['top-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['bottom-position']).toBeFalsy();
      });

    it(`should set the \'left-position\' class to the section
      element when the coachmark direction is specfied on the left`, () => {
        component.direction = CoachmarksDirection.Left;
        component.ngOnInit();

        const coachmarkSectionDe = fixture.debugElement.query(By.css('section'));

        expect(coachmarkSectionDe.classes['right-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['left-position']).toBeTruthy();
        expect(coachmarkSectionDe.classes['top-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['bottom-position']).toBeFalsy();
      });

    it(`should set the \'top-position\' class to the section
      element when the coachmark direction is specfied on the top`, () => {
        component.direction = CoachmarksDirection.Top;
        component.ngOnInit();

        const coachmarkSectionDe = fixture.debugElement.query(By.css('section'));

        expect(coachmarkSectionDe.classes['right-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['left-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['top-position']).toBeTruthy();
        expect(coachmarkSectionDe.classes['bottom-position']).toBeFalsy();
      });

    it(`should set the \'bottom-position\' class to the section
      element when the coachmark direction is specfied on the bottom`, () => {
        component.direction = CoachmarksDirection.Bottom;
        component.ngOnInit();

        const coachmarkSectionDe = fixture.debugElement.query(By.css('section'));

        expect(coachmarkSectionDe.classes['right-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['left-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['top-position']).toBeFalsy();
        expect(coachmarkSectionDe.classes['bottom-position']).toBeTruthy();
      });
  });
  /*
  describe('Absolute Positioning - Left and Top', () => {
    it('should set the position currectly when showing it on the right and target is actually shorter')
  });
  */
});
