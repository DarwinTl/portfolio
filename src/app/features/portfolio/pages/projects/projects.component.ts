import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Project } from '../../../data/models/project';
import { projects } from '../../../data/project';

@Component({
  selector: 'app-projects',
  imports: [ButtonModule, RouterLink, CarouselModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects!: Project[];

  ngOnInit(): void {
    this.projects = projects;
  }
}
