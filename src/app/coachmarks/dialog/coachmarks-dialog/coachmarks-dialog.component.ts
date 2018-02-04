import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coachmarks-dialog',
  templateUrl: './coachmarks-dialog.component.html',
  styleUrls: ['./coachmarks-dialog.component.scss']
})
export class CoachmarksDialogComponent implements OnInit {
  @Input() message: string;
  @Input() hasNext: boolean;

  constructor() { }

  ngOnInit() {
  }

  fireCoachmarkClose() {

  }

  getButtonText() {
    return this.hasNext ? 'Next' : 'Done';
  }
}
