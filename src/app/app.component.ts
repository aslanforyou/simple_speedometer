import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  speed = 0;
  angle = -120;
  threshold = 'low_speed';

  constructor() {
  }

  ngOnInit(): void {
    this.startMeter();
  }

  getThreshold(): string {
    if (this.speed <= 60) {
      return 'low_speed';
    }
    if (this.speed > 120) {
      return 'high_speed';
    }
    return 'mid_speed';
  }

  getNewSpeed(): void {
    this.speed = Math.round(Math.random() * 180);
    this.angle = Math.round((this.speed - 90) * 120/90);
    this.threshold = this.getThreshold();
  }

  startMeter(): void {
    setInterval(() => {this.getNewSpeed()}, 4000);
  }
}
