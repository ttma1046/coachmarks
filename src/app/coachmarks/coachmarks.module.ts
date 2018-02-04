import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CoachmarksDialogComponent } from './dialog/coachmarks-dialog/coachmarks-dialog.component';
import { CoachmarksOverlayComponent } from './overlay/coachmarks-overlay/coachmarks-overlay.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoachmarksDialogComponent, CoachmarksOverlayComponent],
  exports: [
      CoachmarksDialogComponent,
      CoachmarksOverlayComponent
  ]
})
export class CoachmarksModule { }
