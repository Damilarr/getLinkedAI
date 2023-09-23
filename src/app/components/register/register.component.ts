import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}
  screenWidth: any;
  btnText: string = '';
  modalIsOpen: boolean = false;
  category: any = [];
  registerForm!: FormGroup;
  ngOnInit(): void {
    this.setText();
    this.http
      .get(`${environment.baseUrl}/hackathon/categories-list`)
      .subscribe((response) => {
        this.category = response;
        console.log(this.category);
      });
    this.registerForm = this.fb.group({
      team_name: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('', [
        Validators.required,
        Validators.email,
      ]),
      phone_number: this.fb.control<string>('09023456789'),
      category: this.fb.control<number>(0, Validators.required),
      group_size: this.fb.control<number>(0, Validators.required),
      privacy_poclicy_accepted: this.fb.control<string>(
        '',
        Validators.required
      ),
      project_topic: this.fb.control<string>('', [Validators.required]),
    });
    // console.log(this.registerForm.value);
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.setText();
  }
  closeModal() {
    this.modalIsOpen = false;
    this.router.navigate(['/home']);
  }
  openModal() {
    this.modalIsOpen = true;
  }
  setText() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 640) {
      this.btnText = 'Submit';
    } else {
      this.btnText = 'Register now';
    }
  }
  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.http
      .post(`${environment.baseUrl}/hackathon/registration`, form.value)
      .subscribe((response: any) => {
        console.log(response);
      });
    setTimeout(() => {
      this.openModal();
    }, 2000);
  }
}
