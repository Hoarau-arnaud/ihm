import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  animations: [

    trigger('headerAppear', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-15px)' }),
        animate('450ms cubic-bezier(0.16, 1, 0.3, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ]),

    trigger('menuSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      transition(':leave', [
        animate('200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        )
      ])
    ])
  ]
})
export class HeaderComponent {

  isMobile = false;
  mobileMenuOpen = false;

  ngOnInit() {
    this.updateMobile();
    window.addEventListener('resize', () => this.updateMobile());
  }

  updateMobile() {
    this.isMobile = window.innerWidth <= 900;
    if (!this.isMobile) {
      this.mobileMenuOpen = false;
    }
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }
}
