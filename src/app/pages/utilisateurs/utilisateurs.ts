import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UTILISATEURS } from '../../models/utilisateur';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  templateUrl: './utilisateurs.html',
  styleUrls: ['./utilisateurs.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
  ],
})
export class Utilisateurs {

  displayedColumns: string[] = ['avatar', 'nom', 'email', 'role', 'etat', 'actions'];
  dataSource = new MatTableDataSource(UTILISATEURS);
  searchText: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // 🔍 Filtre sur toutes les colonnes
    this.dataSource.filterPredicate = (data, filter) => {
      const str = filter.trim().toLowerCase();
      return Object.values(data).join(' ').toLowerCase().includes(str);
    };
  }

  appliquerFiltre() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

  changerEtat(utilisateur: any, etat: boolean) {
    utilisateur.actif = etat;
  }

  modifierUtilisateur(u: any) {
    console.log("Modifier", u);
  }

  supprimerUtilisateur(u: any) {
    console.log("Supprimer", u);
  }

  getBadgeClass(role: string): string {
  switch (role.toLowerCase()) {
    case 'admin': return 'badge badge-admin';
    case 'éditeur': return 'badge badge-editeur';
    case 'étudiant': return 'badge badge-etudiant';
    default: return 'badge';
  }
}

}
