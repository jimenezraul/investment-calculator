import { Component, computed, input } from '@angular/core';

import { InvestmentServices } from './investment-result.services';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private investmentServices: InvestmentServices) { }

  results = computed(() => this.investmentServices.resultData());
}
