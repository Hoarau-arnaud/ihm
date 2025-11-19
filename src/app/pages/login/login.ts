import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  error = signal('');

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const ok = this.auth.login(this.email(), this.password());
    if (ok) {
      this.router.navigate(['/profile']);
    } else {
      this.error.set('Identifiants incorrects');
    }
  }
}
