import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  mainItems: MenuItem[] = [];
  socialItems: MenuItem[] = [];

  ngOnInit(): void {
    this.mainItems = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      {
        label: 'Proyectos',
        icon: 'pi pi-folder-open',
        routerLink: '/projects',
      },
      { label: 'Mi perfil', icon: 'pi pi-user', routerLink: '/profile' },
    ];

    this.socialItems = [
      { icon: 'pi pi-github', routerLink: '/' },
      {
        icon: 'pi pi-linkedin',
        routerLink: '/projects',
      },
    ];
  }
}
