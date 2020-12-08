import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  // external template
  // templateUrl: './header.component.html',

  // inline template
  template: '<h2>Inline template demo</h2><p>Inline paragraph</p>',

  // external css
  // styleUrls: ['./header.component.css']

  // inline css
  styles: ['h2 { color: red; }']
})
export class HeaderComponent { }