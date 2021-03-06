import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { TrackScrollViewComponent } from '@src/app/modules/shared/track-scroll-view/track-scroll-view.component';

@NgModule({
  declarations: [TrackScrollViewComponent],
  imports: [CommonModule, MatRippleModule, MatIconModule, MatButtonModule, ScrollingModule],
  exports: [CommonModule, TrackScrollViewComponent],
})
export class SharedModule {}
