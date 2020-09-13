import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'presidio-projects',
  templateUrl: './project-feed.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectFeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
