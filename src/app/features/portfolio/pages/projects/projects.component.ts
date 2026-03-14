import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Project } from '../../../data/models/project';
import { projects } from '../../../data/project';
import { ProjectCategory } from '../../../data/models/category';

@Component({
  selector: 'app-projects',
  imports: [ButtonModule, RouterLink, CarouselModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  ProjectCategory = ProjectCategory;
  filteredProjects: Project[] = [];
  selectedCategory: ProjectCategory = ProjectCategory.ALL;

  ngOnInit(): void {
    this.filteredProjects = projects;
  }

  filterProjects(category: ProjectCategory) {
    this.selectedCategory = category;

    if (category === ProjectCategory.ALL) {
      this.filteredProjects = projects;
      return;
    }

    this.filteredProjects = projects.filter(
      (project) => project.category === category,
    );
  }
}
