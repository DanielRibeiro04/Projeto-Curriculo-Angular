import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-relogio-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './relogio-footer.html',
  styleUrls: ['./relogio-footer.css'],
})
export class RelogioFooter implements OnInit, OnDestroy {
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  today: Date = new Date();

  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private updateTime(): void {
    const now = new Date();
    this.today = now;
    this.hours = this.fixTime(now.getHours());
    this.minutes = this.fixTime(now.getMinutes());
    this.seconds = this.fixTime(now.getSeconds());
  }

  private fixTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }
}
