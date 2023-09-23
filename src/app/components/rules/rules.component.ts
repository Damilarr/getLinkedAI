import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css'],
})
export class RulesComponent {
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
