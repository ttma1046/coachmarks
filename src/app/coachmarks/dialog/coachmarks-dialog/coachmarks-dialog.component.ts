import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { CoachmarksDirection } from '../core/coachmarks-direction.enum';

@Component({
  selector: 'app-coachmarks-dialog',
  templateUrl: './coachmarks-dialog.component.html',
  styleUrls: ['./coachmarks-dialog.component.scss']
})
export class CoachmarksDialogComponent implements OnInit {
  @Input() message: string;
  @Input() hasNext: boolean;
  @Input() direction: CoachmarksDirection;
  @ViewChild('coachmarkContent') private coachmarkContentElement: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.setDirectionClass();
  }

  fireCoachmarkClose() {

  }

  getButtonText(): string {
    return this.hasNext ? 'Next' : 'Done';
    // return '';
  }

  private setDirectionClass() {
    if (this.direction) {
      let positionClass = 'right-position';
      switch (this.direction) {
        case CoachmarksDirection.Left:
          positionClass = 'left-position';
          break;
        case CoachmarksDirection.Top:
          positionClass = 'top-position';
          break;
        case CoachmarksDirection.Bottom:
          positionClass = 'bottom-position';
          break;
        default:
          break;
      }

      this.renderer.addClass(this.coachmarkContentElement.nativeElement, positionClass);
    }
  }
}
