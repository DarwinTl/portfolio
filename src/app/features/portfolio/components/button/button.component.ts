import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeroComponent } from "../../../../shared/components/hero/hero.component";
@Component({
  selector: 'app-button',
  imports: [ButtonModule, RouterLink, HeroComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
