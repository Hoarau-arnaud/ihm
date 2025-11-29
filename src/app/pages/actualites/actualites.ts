import { Component, HostListener } from '@angular/core';
import { Actualite, ACTUALITES } from '../../models/actualite';
import { MatCard } from "@angular/material/card";
import { DatePipe } from '@angular/common';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-actualites',
  imports: [MatCard, DatePipe, MatIcon],
  templateUrl: './actualites.html',
  styleUrl: './actualites.scss',
})
export class Actualites {

  allActualites: Actualite[] = ACTUALITES;
  displayed: Actualite[] = [];

  pageSize = 5;
  currentIndex = 0;

  constructor() {
    this.loadMore();
  }

  loadMore() {
    const next = this.allActualites.slice(
      this.currentIndex,
      this.currentIndex + this.pageSize
    );

    this.displayed = [...this.displayed, ...next];
    this.currentIndex += this.pageSize;
  }

  @HostListener("window:scroll", [])
  onScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const height = document.body.scrollHeight;

    // Lorsque l’utilisateur est à 100px du bas
    if (scrollPosition >= height - 100) {
      this.loadMore();
    }
  }

  toggleLike(actu: Actualite) {
    actu.liked = !actu.liked;
  }

  openComments(actu: Actualite) {
    console.log("Ouvrir les commentaires de :", actu);
    // Ici tu peux afficher un drawer, un modal, une zone inline, etc.
  }


}
