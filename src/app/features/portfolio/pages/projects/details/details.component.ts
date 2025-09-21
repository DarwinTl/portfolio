import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { Project } from '../../../../data/models/project';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { projects } from '../../../../data/project';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { GalleriaModule } from 'primeng/galleria';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-details',
  imports: [
    CarouselModule,
    ButtonModule,
    RouterLink,
    RippleModule,
    TagModule,
    GalleriaModule,
    TooltipModule,
    CommonModule,
    TabViewModule,
    AccordionModule,
    CardModule,
    ChipModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  project!: Project;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        const found = projects.find((p) => p.id === +id);
        if (found) {
          this.project = found;
        } else {
          // Manejar caso donde no se encontró el proyecto
        }
      }
    });
  }
}
