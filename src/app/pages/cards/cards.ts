import { Component } from '@angular/core';
import { POKEMONS, Pokemon } from '../../models/pokemon';
import { Deck, DECKS } from '../../models/deck';
import { Card } from '../../components/card/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [Card, FormsModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  activeTab: 'cards' | 'decks' | 'create' = 'cards';
  sortBy: 'none' | 'hp' | 'name' = 'none';
  sortOrder: 'asc' | 'desc' = 'asc';
  searchQuery: string = '';
  filterType: string = 'all';

  // --- FILTRE & TRI pour l’onglet DECKS ---
  searchQueryDeck: string = '';
  filterTypeDeck: string = 'all';
  sortByDeck: 'none' | 'hp' | 'name' = 'none';
  sortOrderDeck: 'asc' | 'desc' = 'asc';




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

  newCard = { ...POKEMONS[1], attacks: POKEMONS[1].attacks.map(a => ({ ...a })) };

  addAttack() {
    this.newCard.attacks.push({ name: 'Nouvelle attaque', energyCount: 1 });
  }

  saveNewCard() {
    // Ajouter la carte à la liste principale
    POKEMONS.push({ ...this.newCard });

    // Reset pour la prochaine
    this.newCard = {
      id: Date.now(),
      name: 'Nouveau Pokémon',
      hp: 50,
      figure: 'default.png',
      figureCaption: 'Votre Pokémon',
      attacks: [
        { name: 'Attaque 1', energyCount: 1 }
      ],
      energyImage: 'w.png',
      description: 'Description du Pokémon.'
    };

    alert("Carte ajoutée !");
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      // result = base64
      this.newCard.figure = reader.result as string;
    };

    reader.readAsDataURL(file); // convertit en base64
  }

  get sortedPokemons() {
    let list = this.pokemons;

    // 🔍 Filtre recherche
    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q));
    }

    // 🎯 Filtre type
    if (this.filterType !== 'all') {
      list = list.filter(p => p.energyImage === this.filterType);
    }

    // ❌ Aucun tri
    if (this.sortBy === 'none') {
      return list;
    }

    // 🔄 Tri
    const sorted = [...list].sort((a, b) => {
      let comp = 0;

      if (this.sortBy === 'hp') {
        comp = a.hp - b.hp;
      }

      if (this.sortBy === 'name') {
        comp = a.name.localeCompare(b.name);
      }

      return this.sortOrder === 'asc' ? comp : -comp;
    });

    return sorted;
  }

get filteredDeckPokemons() {
  const deck = this.selectedDeck;
  if (!deck) return [];

  let list = deck.pokemons;

  // 🔍 Recherche
  if (this.searchQueryDeck.trim() !== '') {
    const q = this.searchQueryDeck.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q));
  }

  // 🎯 Filtre par type
  if (this.filterTypeDeck !== 'all') {
    list = list.filter(p => p.energyImage === this.filterTypeDeck);
  }

  // ❌ Pas de tri
  if (this.sortByDeck === 'none') {
    return list;
  }

  // 🔄 Tri
  const sorted = [...list].sort((a, b) => {
    let comp = 0;

    if (this.sortByDeck === 'hp') {
      comp = a.hp - b.hp;
    }

    if (this.sortByDeck === 'name') {
      comp = a.name.localeCompare(b.name);
    }

    return this.sortOrderDeck === 'asc' ? comp : -comp;
  });

  return sorted;
}



  energyTypes = [
    { label: "Air", value: "air.jpg" },
    { label: "Eau", value: "water.png" },
    { label: "Feu", value: "feu.png" },
    // tu peux en ajouter ici
  ];

  energyColorMap: Record<string, string> = {
    'water.png': '#6ec3ff',
    'air.jpg': '#d6f0ff',
    'feu.png': '#ffb497',
    'plante.png': '#c8ffb0',
  };




}
