import { Component, EventEmitter, Output } from '@angular/core';
import emailjs from '@emailjs/browser';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm!: FormGroup;
  @Output() close = new EventEmitter<void>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formValues = this.contactForm.value;

    const params = {
      name: formValues.name,
      email: formValues.email,
      message: formValues.message,
    };

    emailjs
      .send('service_ly86kqp', 'template_wa3h0jj', params, '8cSzSFVdRSIRttHS5')
      .then(() => {
        console.log('Correo enviado');
        this.contactForm.reset();
        alert('Correo enviado correctamente');
        this.close.emit();
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Error al enviar', error);
      });
  }
}
