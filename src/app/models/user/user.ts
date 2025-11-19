export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string; // stocké en clair ici juste pour les tests
}
