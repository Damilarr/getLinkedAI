import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      first_name: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('', [
        Validators.required,
        Validators.email,
      ]),
      phone: this.fb.control<string>('09023456789'),
      message: this.fb.control<string>('', [Validators.required]),
    });
    console.log(this.contactForm.value);
  }
  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.http
      .post<any>(`${environment.baseUrl}/hackathon/contact-form`, form.value)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
