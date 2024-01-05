import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
  @ViewChild('imgContainer') imgContainer!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  debug() {
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer?.nativeElement.scrollHeight,
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
        '▹ It is a fully responsive web app which allows users to create a comment and reply to comments of any other users.<br> ▹ Used Angular, Tailwind css, Nest Js and MongoDB to get the user details and real time comments.<br> ▹ It has a nested comments features in it.',
      imgs: [
        'assets/images/threads1.png',
        'assets/images/threads2.png',
        'assets/images/threads3.png',
      ],
      Technologies: ['Angular', 'NextJS', 'Tailwind CSS', 'MongoDB'],
      ghLink: 'https://github.com/Mitesh47/threads-frontend',
    },
    {
      Title: 'Cric-Score',
      Description:
        '▹ Web app which shows cricket score with scorecard, commentary, and partnership between two batsman.<br> ▹ Includes standalone components and inlie styles and template. <br> ▹ Used Angular Material for the designing and custom services for scoring random runs. ',
      imgs: [
        'assets/images/threads1.png',
        'assets/images/threads2.png',
        'assets/images/threads3.png',
      ],
      Technologies: ['Angular', 'Angular Material', 'Bootstrap 5', 'SCSS'],
      ghLink: 'https://github.com/Mitesh47/Cric-Score',
    },
    {
      Title: 'Real-time Chat App (WebApp)',
      Description:
        '▹ Chat App is a web application that helps you to communicate with any user in the app. <br> ▹ Once the user is logged in he/she will be available in the chat list.  <br> ▹ WebApp is developed using Angular, NestJS  and Mysql for database. <br> ▹ Used Firebase JWT token for authorization of user. ',
      imgs: [
        'assets/images/threads1.png',
        'assets/images/threads2.png',
        'assets/images/threads3.png',
      ],
      Technologies: ['Angular', 'Angular Material', 'NestJS', 'MySQL'],
      ghLink: 'https://github.com/Mitesh47/nest-update-profile',
    },
    {
      Title: 'Mat Table Crud',
      Description:
        '▹ Chat App is a web application that helps you to communicate with any user in the app. <br> ▹ Once the user is logged in he/she will be available in the chat list.  <br> ▹ WebApp is developed using Angular, NestJS  and Mysql for database. <br> ▹ Used Firebase JWT token for authorization of user. ',
      imgs: [
        'assets/images/threads1.png',
        'assets/images/threads2.png',
        'assets/images/threads3.png',
      ],
      Technologies: ['Angular', 'Angular Material', 'NestJS', 'MySQL'],
      ghLink: 'https://github.com/Mitesh47/nest-update-profile',
    },
  ];

  openImageInNewTab(imageSrc: string): void {
    window.open(imageSrc, '_blank');
  }
}
