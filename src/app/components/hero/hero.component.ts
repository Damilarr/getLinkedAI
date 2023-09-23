import { Component, Input } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  showTypewriter = true;
  ngOnInit(): void {
    Aos.init({
      duration: 750,
      delay: 150,
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      Aos.refresh();
    }, 500);
  }
}
