import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-profile',
  imports: [MatCardModule, MatListModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfileComponent {
  constructor(public auth: AuthService) {}
}
