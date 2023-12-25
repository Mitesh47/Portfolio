import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-switcher',
  templateUrl: './color-switcher.component.html',
  styleUrls: ['./color-switcher.component.scss'],
})
export class ColorSwitcherComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggleSwitch() {
    // debugger;
    var i = document.getElementById('style-switcher') as HTMLElement;
    if (i?.style.left == '-170px') {
      i.style.left = '0px';
    } else if (i?.style.left == '') {
      i.style.left = '0px';
    } else {
      i.style.left = '-170px';
    }
  }

  setColor(theme: any) {
    const cssLink = document.getElementById('color-opt') as HTMLLinkElement;
    cssLink.href = 'assets/css/colors/' + theme + '.css';
    this.toggleSwitch();
  }
}
