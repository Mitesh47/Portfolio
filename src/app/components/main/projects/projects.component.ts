import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface Projects {
  Title: string;
  Description: string;
  imgs: string[];
  ghLink?: string;
  Technologies: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
  };

  @ViewChild('imgContainer') imgContainer!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  debug() {
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  Title = 'My projects';
  Label = 'Featured Project';
  ProjectList: Projects[] = [
    {
      Title: 'Threads App',
      Description:
        ' It is a fully responsive web app which allows users to create a comment and reply to comments of any other users',
      imgs: [
        'assets/images/threads1.png',
        'assets/images/threads2.png',
        'assets/images/threads3.png',
      ],
      Technologies: ['Angular', 'NextJS', 'Tailwind CSS', 'MongoDB'],
    },
    {
      Title: 'Tu super plan',
      Description:
        "Health plan quote that has a search engine with which advanced queries are made. Plans are displayed based on the user's age, monthly income, and location. It has <span class='underline'>online chat</span, <span class='underline'>contact form</span>, <span class='underline'>notification system by whatsapp and mail</span>, <span class='underline'>auth</span>, and <span class='underline'>internet information management through the role of administrator.</span>",
      imgs: [
        'assets/images/tusuperplan/tusuperplan1.png',
        'assets/images/tusuperplan/tusuperplan2.png',
        'assets/images/tusuperplan/tusuperplan3.png',
        'assets/images/tusuperplan/tusuperplan4.png',
        'assets/images/tusuperplan/tusuperplan5.png',
      ],
      Technologies: ['Laravel', 'Angular', 'SASS', 'Angular Material', 'RxJS'],
    },
  ];
}
