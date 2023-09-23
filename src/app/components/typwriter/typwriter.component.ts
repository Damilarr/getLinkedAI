import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typwriter',
  templateUrl: './typwriter.component.html',
  styleUrls: ['./typwriter.component.css'],
})
export class TypwriterComponent {
  @Input() textToShow!: string;
  currentText = '';
  interval: any;

  constructor() {}

  ngOnInit() {}

  getRandomInt(max: any) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }

  ngOnChanges() {
    this.currentText = '';
    if (this.textToShow) {
      this.interval = setInterval(() => {
        this.currentText += this.textToShow.charAt(this.currentText.length);
        if (this.currentText.length === this.textToShow.length) {
          setTimeout(() => (this.currentText = ''), 150 * this.getRandomInt(4));
        }
      }, 200);
    }
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
