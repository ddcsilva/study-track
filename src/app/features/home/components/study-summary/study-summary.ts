import { Component, computed, input } from '@angular/core';
import { SummaryCard } from './components/summary-card/summary-card';

@Component({
  selector: 'app-study-summary',
  imports: [SummaryCard],
  templateUrl: './study-summary.html',
  styleUrl: './study-summary.scss',
})
export class StudySummary {
  monthlyGoal = 80;
  sessions = input.required<{ duration: number }[]>();

  totalStudied = computed(() => {
    return this.sessions().reduce((sum, session) => sum + session.duration, 0);
  });

  remainingToGoal = computed(() => {
    return this.monthlyGoal - this.totalStudied();
  });

  goal = computed(() => this.monthlyGoal);
}
