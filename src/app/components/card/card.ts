import { Component, Input } from '@angular/core';
import { AttackLine } from '../../models/pokemon';

@Component({
  selector: 'app-card',
  imports: [],
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

  getEnergyArray(count: number) {
    return Array(count).fill(0);
  }
}

