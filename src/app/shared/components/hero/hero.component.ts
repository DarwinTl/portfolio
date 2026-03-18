import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Dialog, DialogModule } from 'primeng/dialog';
import { Card } from 'primeng/card';
import { ContactComponent } from '../../../features/portfolio/components/contact/contact.component';

@Component({
  selector: 'app-hero',
  imports: [ButtonModule, RouterLink, Dialog, ContactComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  openCV() {
    window.open('/CVDarwinTocas.pdf', '_blank');
  }
}
