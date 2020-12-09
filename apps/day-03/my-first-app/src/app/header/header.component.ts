import { Component } from '@angular/core';

@Component({
  selector: 'app-header',

  // external template
  templateUrl: './header.component.html',

  // external styles
  styleUrls: ['./header.component.css']

  // inline template
  // template string / literal - ES6 (2015)
  // template: `
  //   <h2>Inline template demo</h2>
  //   <p>Inline paragraph</p>
  // `,

  // string concatenation - ES5 and earlier
  // '<h2>Inline template demo</h2>' +
  // '<p>Inline paragraph</p>',

  // inline styles
  // styles: [
  //   `h2 { 
  //     color: red; 
  //   }`
  // ]
})
export class HeaderComponent { }
