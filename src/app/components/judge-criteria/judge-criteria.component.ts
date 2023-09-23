import { Component } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-judge-criteria',
  templateUrl: './judge-criteria.component.html',
  styleUrls: ['./judge-criteria.component.css'],
})
export class JudgeCriteriaComponent {
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
