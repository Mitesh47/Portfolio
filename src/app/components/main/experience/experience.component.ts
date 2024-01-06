import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Experience: any[] = [
    {
      Tab: 'Oragnization',
      CompanyName: 'Responscity Systems Private Limited',
      Title: 'Fullstack developer',
      Date: 'March 2022 - Present',
      Description: [
        '▹ Developing single page application (SPA) using Angular, Responsive and user-friendly web design using HTML5, CSS3, Bootstrap, Material UI, and Web APIs integration.',
        '▹ Fixing bugs in existing software and improved functionality.',
        '▹ Implementation of API integration with backend technologies.',
        '▹ Working with team members, Designing and developing the complete software architecture. ',
        '▹ Working with database and creating Store Procedure, Views and Table Design in MSSQL.',
      ],
    },
    {
      Tab: 'Freelancer',
      CompanyName: 'Freelancer',
      Title: 'Independent',
      Date: 'July 2023 - Present',
      Description: [
        '▹ Implementing continuous improvements, working on frontend and backend.',
        '▹ Creating platforms with Angular, NodeJS, ExpressJS, MongoDB programmed with functional, reactive, and object-oriented programming paradigms.',
        '▹ Automation of processes with data structures.',
        '▹ Design layout with SASS, Bootstrap, Angular Material, etc.',
      ],
    },
  ];

  active = 0;
}
