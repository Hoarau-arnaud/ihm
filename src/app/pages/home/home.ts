import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, RouterModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {

pokemonProducts = [
  {
    id: 1,
    name: 'Booster Pokémon',
    price: 5.99,
    image: 'p1.png'
  },
  {
    id: 2,
    name: 'Deck Dresseur Pikachu',
    price: 14.90,
    image: 'p2.png'
  },
  {
    id: 3,
    name: 'Coffret Dracaufeu Premium',
    price: 49.90,
    image: 'p3.png'
  },
  {
    id: 4,
    name: 'Pokémon Snap',
    price: 29.90,
    image: 'p4.jpg'
  },
    {
    id: 5,
    name: 'Pokémon Stadium',
    price: 29.90,
    image: 'p5.png'
  },
    {
    id: 6,
    name: 'Pokémon Go',
    price: 29.90,
    image: 'p6.jpg'
  }
];

pokemonVideos = [
  {
    id: 1,
    title: 'Trailer Pokémon Écarlate & Violet',
    url: 'https://www.youtube.com/embed/BF57dfSYm7A'
  },
  {
    id: 2,
    title: 'Pokémon Snap Gameplay',
    url: 'https://www.youtube.com/embed/lvCMFdPo_4A'
  },
  {
    id: 3,
    title: 'Présentation Dracaufeu',
    url: 'https://www.youtube.com/embed/cDJnv52HHQU'
  },
  {
    id: 4,
    title: 'Présentation Game',
    url: 'https://www.youtube.com/embed/ZHCWuNBZexs'
  }
];


acheter(product: any) {
  console.log("Achat :", product);
  // plus tard → panier, paiement, redirection, etc.
}
addToCart(product: any) {
  console.log("Produit ajouté :", product);
  // plus tard : panier, stock, API, etc.
}


constructor(private sanitizer: DomSanitizer) {}

sanitize(url: string): SafeResourceUrl {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
}
