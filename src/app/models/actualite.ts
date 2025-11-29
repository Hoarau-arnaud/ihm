export interface Actualite {
  id: number;
  auteur: string;
  avatar: string;
  date: string;
  contenu: string;
  image?: string;
  liked?: boolean;
}

export const ACTUALITES: Actualite[] = [
  {
    id: 1,
    auteur: "Arnaud",
    avatar: "avatar_arnaud.png",
    date: "2025-01-12",
    contenu: "Nouvelle fonctionnalité mise en ligne aujourd’hui sur la plateforme !",
    liked: true
  },
  {
    id: 2,
    auteur: "Marie",
    avatar: "avatar_marie.png",
    date: "2025-01-10",
    contenu: "Réunion d'équipe aujourd’hui : beaucoup de nouveautés à venir !",
    liked: true
  },
  {
    id: 3,
    auteur: "Lucas",
    avatar: "avatar_lucas.png",
    date: "2025-01-09",
    contenu: "Un petit aperçu de notre nouveau design 🖌️",
  },

  {
    id: 4,
    auteur: "Sophie",
    avatar: "avatar_sophie.png",
    date: "2025-01-08",
    contenu: "Je travaille sur une nouvelle charte graphique. Hâte de vous montrer ça ! 🎨",
  },

  {
    id: 5,
    auteur: "Karim",
    avatar: "avatar_karim.png",
    date: "2025-01-08",
    contenu: "Optimisation du backend en cours : performances x2 sur les API 📈",
    liked: true
  },

  {
    id: 6,
    auteur: "Arnaud",
    avatar: "avatar_arnaud.png",
    date: "2025-01-07",
    contenu: "Mise à jour du système d’authentification : plus sécurisé et plus rapide.",
  },
  {
    id: 7,
    auteur: "Marie",
    avatar: "avatar_marie.png",
    date: "2025-01-06",
    contenu: "Merci pour vos retours sur la dernière version. Continuez à nous envoyer vos idées ! 😊",
    liked: true
  },
  {
    id: 8,
    auteur: "Lucas",
    avatar: "avatar_lucas.png",
    date: "2025-01-05",
    contenu: "Je prépare un prototype de la prochaine interface mobile 📱",
    image: "assets/post4.jpg"
  },
  {
    id: 9,
    auteur: "Sophie",
    avatar: "avatar_sophie.png",
    date: "2025-01-04",
    contenu: "Nouveau jeu de couleurs disponible dans le styleguide 🎨🌈",
    liked: true
  },
  {
    id: 10,
    auteur: "Karim",
    avatar: "avatar_karim.png",
    date: "2025-01-03",
    contenu: "Déploiement effectué ce matin. Tout fonctionne parfaitement ! 🚀"
  },
  {
    id: 11,
    auteur: "Karim",
    avatar: "avatar_karim.png",
    date: "2025-01-08",
    contenu: "Optimisation du backend en cours : performances x2 sur les API 📈"
  },

  {
    id: 12,
    auteur: "Arnaud",
    avatar: "avatar_arnaud.png",
    date: "2025-01-07",
    contenu: "Mise à jour du système d’authentification : plus sécurisé et plus rapide.",
    liked: true
  },
  {
    id: 13,
    auteur: "Marie",
    avatar: "avatar_marie.png",
    date: "2025-01-06",
    contenu: "Merci pour vos retours sur la dernière version. Continuez à nous envoyer vos idées ! 😊"
  },
  {
    id: 14,
    auteur: "Lucas",
    avatar: "avatar_lucas.png",
    date: "2025-01-05",
    contenu: "Je prépare un prototype de la prochaine interface mobile 📱",
    image: "assets/post4.jpg"
  },
  {
    id: 15,
    auteur: "Sophie",
    avatar: "avatar_sophie.png",
    date: "2025-01-04",
    contenu: "Nouveau jeu de couleurs disponible dans le styleguide 🎨🌈",
  },
  {
    id: 16,
    auteur: "Karim",
    avatar: "avatar_karim.png",
    date: "2025-01-03",
    contenu: "Déploiement effectué ce matin. Tout fonctionne parfaitement ! 🚀"
  }
];
