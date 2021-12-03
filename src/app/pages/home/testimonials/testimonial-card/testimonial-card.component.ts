import { Component, Input } from '@angular/core';
import { Testimonial } from '../testimonial.model';

@Component({
  selector: 'lbk-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent {
  @Input() testimonial!: Testimonial;
}
