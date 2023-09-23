import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  ngOnInit(): void {
    const accordionHeader = document.querySelectorAll('.accordion-header');
    accordionHeader.forEach((header: any) => {
      header.addEventListener('click', function () {
        const accordionContent =
          header.parentElement.querySelector('.accordion-content');
        let accordionMaxHeight = accordionContent.style.maxHeight;
        if (accordionMaxHeight == '0px' || accordionMaxHeight.length == 0) {
          accordionContent.style.maxHeight = `${
            accordionContent.scrollHeight + 32
          }px`;
          header.querySelector('.fas').classList.remove('fa-plus');
          header.querySelector('.fas').classList.add('fa-minus');
        } else {
          accordionContent.style.maxHeight = `${0}px`;
          header.querySelector('.fas').classList.add('fa-plus');
          header.querySelector('.fas').classList.remove('fa-minus');
        }
      });
    });
  }
}
