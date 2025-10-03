import { Component, computed, input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';

type CardType = 'goal' | 'done' | 'remaining';

@Component({
  selector: 'app-summary-card',
  imports: [MatCard, MatCardHeader, MatCardSubtitle, MatCardContent],
  templateUrl: './summary-card.html',
  styleUrl: './summary-card.scss',
})
export class SummaryCard {
  type = input.required<CardType>();
  label = input.required<string>();
  duration = input.required<number>();
}
