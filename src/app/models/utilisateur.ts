export interface Utilisateur {
  id: number;
  nom: string;
  email: string;
  avatar: string;
  role: string;
  actif: boolean;
}

export const UTILISATEURS: Utilisateur[] = [
  { id: 1,  nom: "Arnaud Dupont",      email: "arnaud@example.com",    avatar: "avatar_arnaud.png", role: "Admin",     actif: true },
  { id: 2,  nom: "Marie Claire",       email: "marie@example.com",     avatar: "avatar_marie.png",  role: "Éditeur",   actif: false },
  { id: 3,  nom: "Lucas Martin",       email: "lucas@example.com",     avatar: "avatar_lucas.png",  role: "Étudiant",  actif: true },
  { id: 4,  nom: "Karim Belloumi",     email: "karim@example.com",     avatar: "avatar_karim.png",  role: "Admin",     actif: true },
  { id: 5,  nom: "Sophie Durand",      email: "sophie@example.com",    avatar: "avatar_sophie.png", role: "Éditeur",   actif: false },

  /* Nouveaux, mélange d’avatars */
  { id: 6,  nom: "Nicolas Petit",      email: "nicolas@example.com",   avatar: "avatar_lucas.png",  role: "Étudiant",  actif: true },
  { id: 7,  nom: "Laura Bernard",      email: "laura@example.com",     avatar: "avatar_sophie.png", role: "Éditeur",   actif: true },
  { id: 8,  nom: "Hugo Fernandes",     email: "hugo@example.com",      avatar: "avatar_karim.png",  role: "Étudiant",  actif: false },
  { id: 9,  nom: "Inès Morel",         email: "ines@example.com",      avatar: "avatar_marie.png",  role: "Étudiant",actif: true },
  { id: 10, nom: "Thomas Robert",      email: "thomas@example.com",    avatar: "avatar_arnaud.png", role: "Éditeur",   actif: false },
  { id: 11, nom: "Elena Rossi",        email: "elena@example.com",     avatar: "avatar_sophie.png", role: "Étudiant",  actif: true },
  { id: 12, nom: "Yanis Haddad",       email: "yanis@example.com",     avatar: "avatar_karim.png",  role: "Éditeur",actif: true },
];

