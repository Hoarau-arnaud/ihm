export interface AttackLine {
  name: string;
  energyCount: number;
}

export interface Pokemon {
  id: number;
  name: string;
  hp: number;
  figure: string;
  figureCaption: string;
  attacks: AttackLine[];
  energyImage: string;
  description: string;
}

export const POKEMONS: Pokemon[] = [
  {
    id: 1,
    name: 'Kyogre',
    hp: 160,
    figure: 'kyogre.png',
    figureCaption: 'N°382 — Kyogre',

    attacks: [
      { name: 'Onde Originelle', energyCount: 2 },
      { name: 'Pluie Torrentielle', energyCount: 4 }
    ],

    energyImage: 'air.jpg',
    description: 'Une créature légendaire capable d’élargir les océans.'
  },
  {
    id: 2,
    name: 'Magicarpe',
    hp: 30,
    figure: 'magicarpe.png',
    figureCaption: 'N°129 — Magicarpe',

    attacks: [
      { name: 'Trempette', energyCount: 1 },
    ],

    energyImage: 'water.png',
    description: 'Un Pokémon faible qui bondit désespérément pour se défendre. Devient très menaçant une fois sa forme évolué atteinte.'
  },
    {
    id: 3,
    name: 'Lugia',
    hp: 140,
    figure: 'lugia.png',
    figureCaption: 'N°249 — Lugia',

    attacks: [
      { name: 'Aéroblast', energyCount: 2 },
      { name: 'Onde Psy', energyCount: 6 }
    ],

    energyImage: 'air.jpg',
    description: 'Gardien des océans, il préfère rester caché au fond de l’eau.'
  },

  {
    id: 4,
    name: 'Articodin',
    hp: 120,
    figure: 'artigodin.jpg',
    figureCaption: 'N°144 — Articodin',

    attacks: [
      { name: 'Vent Glacial', energyCount: 2 },
      { name: 'Piqué Glacé', energyCount: 3 }
    ],

    energyImage: 'water.png',
    description: 'Un oiseau légendaire capable de geler l’air en battant des ailes. '
  },
    {
    id: 5,
    name: 'Leviator',
    hp: 130,
    figure: 'leviator.png',
    figureCaption: 'N°130 — Léviator',

    attacks: [
      { name: 'Ultralaser', energyCount: 1 },
      { name: 'Laser Glace', energyCount: 2 },
    ],

    energyImage: 'water.png',
    description: 'Un Pokémon féroce au tempérament violent.'
  },
  {
    id: 6,
    name: 'Dracaufeu',
    hp: 150,
    figure: 'draco.png',
    figureCaption: 'N°006 — Dracaufeu',

    attacks: [
      { name: 'Lance-Flammes', energyCount: 2 },
      { name: 'Déflagration', energyCount: 4 }
    ],

    energyImage: 'feu.png',
    description: 'Il crache un feu si chaud qu’il peut faire fondre des rochers.'
  },



  {
    id: 7,
    name: 'Magicarpe',
    hp: 30,
    figure: 'magicarpe.png',
    figureCaption: 'N°129 — Magicarpe',

    attacks: [
      { name: 'Trempette', energyCount: 1 },
    ],

    energyImage: 'water.png',
    description: 'Un Pokémon faible qui bondit désespérément pour se défendre. Devient très menaçant une fois sa forme évolué atteinte.'
  },

  {
    id: 8,
    name: 'Leviator',
    hp: 130,
    figure: 'leviator.png',
    figureCaption: 'N°130 — Léviator',

    attacks: [
      { name: 'Ultralaser', energyCount: 1 },
      { name: 'Laser Glace', energyCount: 2 },
    ],

    energyImage: 'water.png',
    description: 'Un Pokémon féroce au tempérament violent.'
  },

  {
    id: 9,
    name: 'Articodin',
    hp: 120,
    figure: 'artigodin.jpg',
    figureCaption: 'N°144 — Articodin',

    attacks: [
      { name: 'Vent Glacial', energyCount: 2 },
      { name: 'Piqué Glacé', energyCount: 3 }
    ],

    energyImage: 'water.png',
    description: 'Un oiseau légendaire capable de geler l’air en battant des ailes. '
  },

  {
    id: 10,
    name: 'Dracaufeu',
    hp: 150,
    figure: 'draco.png',
    figureCaption: 'N°006 — Dracaufeu',

    attacks: [
      { name: 'Lance-Flammes', energyCount: 2 },
      { name: 'Déflagration', energyCount: 3 }
    ],

    energyImage: 'feu.png',
    description: 'Il crache un feu si chaud qu’il peut faire fondre des rochers.'
  },

  {
    id: 11,
    name: 'Lugia',
    hp: 140,
    figure: 'lugia.png',
    figureCaption: 'N°249 — Lugia',

    attacks: [
      { name: 'Aéroblast', energyCount: 2 },
      { name: 'Onde Psy', energyCount: 3 }
    ],

    energyImage: 'air.jpg',
    description: 'Gardien des océans, il préfère rester caché au fond de l’eau.'
  },

  {
    id: 12,
    name: 'Kyogre',
    hp: 160,
    figure: 'kyogre.png',
    figureCaption: 'N°382 — Kyogre',

    attacks: [
      { name: 'Onde Originelle', energyCount: 3 },
      { name: 'Pluie Torrentielle', energyCount: 2 }
    ],

    energyImage: 'air.jpg',
    description: 'Une créature légendaire capable d’élargir les océans.'
  },
  {
    id: 13,
    name: 'Magicarpe',
    hp: 30,
    figure: 'magicarpe.png',
    figureCaption: 'N°129 — Magicarpe',

    attacks: [
      { name: 'Trempette', energyCount: 1 },
    ],

    energyImage: 'water.png',
    description: 'Un Pokémon faible qui bondit désespérément pour se défendre. Devient très menaçant une fois sa forme évolué atteinte.'
  },

  {
    id: 14,
    name: 'Leviator',
    hp: 130,
    figure: 'leviator.png',
    figureCaption: 'N°130 — Léviator',

    attacks: [
      { name: 'Ultralaser', energyCount: 1 },
      { name: 'Laser Glace', energyCount: 2 },
    ],

    energyImage: 'water.png',
    description: 'Un Pokémon féroce au tempérament violent.'
  },

  {
    id: 15,
    name: 'Articodin',
    hp: 120,
    figure: 'artigodin.jpg',
    figureCaption: 'N°144 — Articodin',

    attacks: [
      { name: 'Vent Glacial', energyCount: 2 },
      { name: 'Piqué Glacé', energyCount: 3 }
    ],

    energyImage: 'water.png',
    description: 'Un oiseau légendaire capable de geler l’air en battant des ailes. '
  },

  {
    id: 16,
    name: 'Dracaufeu',
    hp: 150,
    figure: 'draco.png',
    figureCaption: 'N°006 — Dracaufeu',

    attacks: [
      { name: 'Lance-Flammes', energyCount: 2 },
      { name: 'Déflagration', energyCount: 3 }
    ],

    energyImage: 'feu.png',
    description: 'Il crache un feu si chaud qu’il peut faire fondre des rochers.'
  },

  {
    id: 17,
    name: 'Lugia',
    hp: 140,
    figure: 'lugia.png',
    figureCaption: 'N°249 — Lugia',

    attacks: [
      { name: 'Aéroblast', energyCount: 2 },
      { name: 'Onde Psy', energyCount: 3 }
    ],

    energyImage: 'air.jpg',
    description: 'Gardien des océans, il préfère rester caché au fond de l’eau.'
  },

  {
    id: 18,
    name: 'Kyogre',
    hp: 160,
    figure: 'kyogre.png',
    figureCaption: 'N°382 — Kyogre',

    attacks: [
      { name: 'Onde Originelle', energyCount: 3 },
      { name: 'Pluie Torrentielle', energyCount: 2 }
    ],

    energyImage: 'air.jpg',
    description: 'Une créature légendaire capable d’élargir les océans.'
  },
];

