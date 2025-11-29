import { Injectable, signal } from '@angular/core';
import { User } from '../models/user';
import { USERS } from '../data/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<User | null>(null);

  login(email: string, password: string): boolean {
    const user = USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      this.currentUser.set(user);
      return true;
    }

    return false;
  }

  logout() {
    this.currentUser.set(null);
  }
}
