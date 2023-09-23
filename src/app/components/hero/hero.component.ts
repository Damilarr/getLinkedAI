import { Component, Input } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  showTypewriter = true;
  hour: number = 0;
  minute: number = 0;
  sec: number = 0;
  ngOnInit(): void {
    Aos.init({
      duration: 750,
      delay: 150,
    });
    let countDownDate = new Date('Sept 29, 2023 15:37:25').getTime();
    let int = setInterval(() => {
      const now = new Date().getTime();
      const diff = countDownDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.sec = Math.floor((diff % (1000 * 60)) / 1000);
      if (diff < 0) {
        clearInterval(int);
      }
    }, 1000);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      Aos.refresh();
    }, 500);
  }
}
