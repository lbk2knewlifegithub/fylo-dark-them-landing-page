import { Component, Input } from '@angular/core';
import { Feature } from '../features.model';

@Component({
  selector: 'lbk-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class FeatureCardComponent {
  @Input() feature!: Feature;
}
