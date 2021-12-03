import { Component } from '@angular/core';
import { Testimonial } from './testimonial.model';

@Component({
  selector: 'lbk-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      src: 'assets/images/profile-1.jpg',
      name: 'Satish Patel',
      position: 'Founder & CEO, Huddle',
      comment:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    },
    {
      src: 'assets/images/profile-2.jpg',
      name: 'Bruce Mckenzie',
      position: 'Founder & CEO, Huddle',
      comment:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    },
    {
      src: 'assets/images/profile-3.jpg',
      name: 'Iva Boyd',
      position: 'Founder & CEO, Huddle',
      comment:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    },
  ];
}
