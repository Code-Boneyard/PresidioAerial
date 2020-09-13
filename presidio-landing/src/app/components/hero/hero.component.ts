import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'presidio-hero',
  templateUrl: './hero.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
