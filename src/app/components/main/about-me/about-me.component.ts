import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  paragraph: string[] = [
    'Over the past year, I have immersed myself in the dynamic realm of web development, focusing primarily on Angular, NodeJS/NestJS, and MSSQL/NoSQL databases. Working extensively with Angular, I honed my skills in building robust and responsive single-page applications. Navigating through the intricacies of Angular components, services, and directives, I gained a comprehensive understanding of front-end development, ensuring seamless user experiences and intuitive interfaces.',
    'In parallel, my journey with NodeJS empowered me to master server-side scripting, enabling the creation of scalable and efficient backend solutions. Leveraging the event-driven architecture of NodeJS, I contributed to the development of high-performance applications, optimizing server-client communication and enhancing overall system responsiveness.',
    'On the database front, I delved into the complexities of MSSQL and NoSQL databases, adapting my skills to meet the diverse needs of data storage and retrieval. Working with MSSQL, I became adept at designing relational database schemas, optimizing queries, and ensuring data integrity.',
  ];
}
