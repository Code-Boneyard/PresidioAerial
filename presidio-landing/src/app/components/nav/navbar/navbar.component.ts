import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'presidio-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
