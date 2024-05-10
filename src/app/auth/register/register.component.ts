import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary form-related modules
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup; // Declare registrationForm property

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize registrationForm in ngOnInit
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.authService.register(this.registrationForm.value)
        .subscribe(
          (response: any) => {
            console.log('Registration successful:', response);
            // Redirect the user or show a success message
          },
          (error: any) => {
            console.error('Registration failed:', error);
            // Handle registration error, show error message, etc.
          }
        );
    }
  }


}
