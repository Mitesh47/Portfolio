import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Title = 'Skills';

  SkillsList: any[] = [
    {
      name: 'Angular',
      icon: '../../../../assets/skill-icons/angular.png',
      percentage: '90%',
    },
    {
      name: 'Typescript',
      icon: '../../../../assets/skill-icons/typescript.png',
      percentage: '80%',
    },
    {
      name: 'Javascript',
      icon: '../../../../assets/skill-icons/javascript.png',
      percentage: '75%',
    },
    {
      name: 'NodeJS',
      icon: '../../../../assets/skill-icons/node.png',
      percentage: '75%',
    },
    {
      name: 'NestJS',
      icon: '../../../../assets/skill-icons/nest.png',
      percentage: '75%',
    },
    {
      name: 'MongoDB',
      icon: '../../../../assets/skill-icons/mongodb.png',
      percentage: '70%',
    },
    {
      name: 'MySQL',
      icon: '../../../../assets/skill-icons/mysql.png',
      percentage: '75%',
    },
    {
      name: 'HTML',
      icon: '../../../../assets/skill-icons/html.png',
      percentage: '90%',
    },
    {
      name: 'SCSS',
      icon: '../../../../assets/skill-icons/scss.png',
      percentage: '80%',
    },
    {
      name: 'CSS',
      icon: '../../../../assets/skill-icons/css.png',
      percentage: '80%',
    },
    {
      name: 'GIT',
      icon: '../../../../assets/skill-icons/git.png',
      percentage: '80%',
    },
    {
      name: 'Firebase',
      icon: '../../../../assets/skill-icons/firebase.png',
      percentage: '65%',
    },
  ];
}
