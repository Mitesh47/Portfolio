import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          stagger(50, [
            animate(
              '250ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class BasicInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.typedInit();
  }

  typedInit() {
    const options = {
      strings: ['Angular Developer', 'NodeJs Developer/NestJs Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      smartBackspace: true,
      loop: true,
    };
    const typed = new Typed('.typed-element', options);
  }
}
