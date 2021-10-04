import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-metric',
  templateUrl: './card-metric.component.html',
  styleUrls: ['./card-metric.component.scss']
})
export class CardMetricComponent implements OnInit {
  @Input() title?: string;
  @Input() value?: string|number;

  constructor() { }

  ngOnInit(): void {
  }

}
