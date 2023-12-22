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
        ' It is a fully responsive web app which allows users to create a comment and reply to comments of any other users',
      imgs: [
        'assets/images/threads1.png',
        'assets/images/threads2.png',
        'assets/images/threads3.png',
      ],
      Technologies: ['Angular', 'NextJS', 'Tailwind CSS', 'MongoDB'],
      ghLink: 'https://github.com/Mitesh47/Portfolio',
    },
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
      ghLink: 'https://github.com/Mitesh47/Portfolio',
    },
  ];

  openImageInNewTab(imageSrc: string): void {
    window.open(imageSrc, '_blank');
  }
}
