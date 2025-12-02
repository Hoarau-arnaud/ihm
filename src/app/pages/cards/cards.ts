import { Component } from '@angular/core';
import { POKEMONS, Pokemon } from '../../models/pokemon';
import { Deck, DECKS } from '../../models/deck';
import { Card } from '../../components/card/card';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [Card, FormsModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  activeTab: 'cards' | 'decks' = 'cards';

  pokemons = POKEMONS;
  decks: Deck[] = [...DECKS];

  // Sélection du deck
  selectedDeckId = this.decks[0]?.id ?? 0;

  get selectedDeck(): Deck | undefined {
    return this.decks.find(d => d.id === this.selectedDeckId);
  }

  // --- CREATION ---
  newDeckName = '';
  showCreateModal = false;

  openCreateModal() {
    this.newDeckName = '';
    this.showCreateModal = true;
  }

  createDeck() {
    if (!this.newDeckName.trim()) return;

    const newDeck: Deck = {
      id: Date.now(), // identifiant unique
      name: this.newDeckName,
      pokemons: []
    };

    this.decks.push(newDeck);
    this.selectedDeckId = newDeck.id;
    this.showCreateModal = false;
  }

  // --- RENOMMAGE ---
  showRenameModal = false;

  renameDeckName = '';

  openRenameModal(deck: Deck) {
    this.renameDeckName = deck.name;
    this.selectedDeckId = deck.id;
    this.showRenameModal = true;
  }

  renameDeck() {
    const deck = this.selectedDeck;
    if (!deck || !this.renameDeckName.trim()) return;

    deck.name = this.renameDeckName;
    this.showRenameModal = false;
  }

  // --- SUPPRESSION ---
  deleteDeck(deckId: number) {
    const index = this.decks.findIndex(d => d.id === deckId);
    if (index > -1) {
      this.decks.splice(index, 1);
    }

    if (this.decks.length > 0) {
      this.selectedDeckId = this.decks[0].id;
    }
  }

  // --- AJOUT DE POKEMON ---
  addPokemonToDeck(p: Pokemon) {
    const deck = this.selectedDeck;
    if (!deck) return;

    // empêcher doublons
    if (deck.pokemons.some(x => x.id === p.id)) return;

    deck.pokemons.push(p);
  }

  removePokemonFromDeck(pokemonId: number) {
    const deck = this.selectedDeck;
    if (!deck) return;

    deck.pokemons = deck.pokemons.filter(p => p.id !== pokemonId);
  }
}
