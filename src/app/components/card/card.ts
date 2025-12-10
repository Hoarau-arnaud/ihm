import { Component, Input } from '@angular/core';
import { AttackLine } from '../../models/pokemon';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgStyle],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() name!: string;
  @Input() hp!: number;
  @Input() figure!: string;
  @Input() figureCaption!: string;

  @Input() energyImage!: string;
  @Input() attacks: AttackLine[] = [];
  @Input() description: string = '';
  @Input() insideColor: string = 'yellow'; // couleur par défaut actuelle

  getEnergyArray(count: number) {
    return Array(count).fill(0);
  }
}

