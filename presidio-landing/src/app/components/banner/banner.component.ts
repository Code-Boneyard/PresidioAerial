import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'presidio-banner',
  templateUrl: './banner.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
