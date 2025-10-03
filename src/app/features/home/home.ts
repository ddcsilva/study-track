import { Component, signal } from '@angular/core';
import { StudySummary } from './components/study-summary/study-summary';
@Component({
  selector: 'app-home',
  imports: [StudySummary],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  sessions = signal([{ duration: 10 }, { duration: 15 }, { duration: 20 }]);
}
