import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, of, from, interval, BehaviorSubject } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './observables.html',
  styleUrl: './observables.css'
})
export class ObservablesComponent implements OnInit {
  customLogs: string[] = [];
  isCustomRunning = false;

  ofNumbers: number[] = [];
  fromFrameworks: string[] = [];
  transformedNumbers: number[] = [];

  timer$: Observable<number> = interval(1000).pipe(take(60));

  private messageSubject = new BehaviorSubject<string>('Welcome to RxJS!');
  currentMessage$ = this.messageSubject.asObservable();
  newMessage = '';

  ngOnInit(): void {
    this.runOfOperator();
    this.runFromOperator();
    this.runPipedOperators();
  }

  startCustomObservable(): void {
    this.customLogs = [];
    this.isCustomRunning = true;

    const myObservable = new Observable<string>((observer) => {
      this.customLogs.push('Observable execution started');

      observer.next('Data Packet 1 emitted');

      setTimeout(() => {
        observer.next('Data Packet 2 emitted (after 1s)');
      }, 1000);

      setTimeout(() => {
        observer.next('Data Packet 3 emitted (after 2s)');
        observer.complete();
      }, 2000);
    });

    myObservable.subscribe({
      next: (value) => {
        this.customLogs.push(value);
      },
      complete: () => {
        this.customLogs.push('Observable completed successfully!');
        this.isCustomRunning = false;
      },
      error: (err) => {
        this.customLogs.push(`Error: ${err}`);
        this.isCustomRunning = false;
      }
    });
  }

  runOfOperator(): void {
    of(10, 20, 30, 40, 50).subscribe((val) => {
      this.ofNumbers.push(val);
    });
  }

  runFromOperator(): void {
    const list = ['Angular', 'React', 'Vue', 'TypeScript'];
    from(list).subscribe((val) => {
      this.fromFrameworks.push(val);
    });
  }

  runPipedOperators(): void {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    from(numbers)
      .pipe(
        filter((n) => n % 2 === 0),
        map((n) => n * 10)
      )
      .subscribe((val) => {
        this.transformedNumbers.push(val);
      });
  }

  updateSubject(): void {
    if (this.newMessage.trim()) {
      this.messageSubject.next(this.newMessage.trim());
      this.newMessage = '';
    }
  }
}
