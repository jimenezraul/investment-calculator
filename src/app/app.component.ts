import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import type { InputModel } from './user-input/input-model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { ResultModel } from './investment-results/insvestment-result-model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  resultsData = signal<ResultModel[] | undefined>(undefined)

  calculateInvestmentResults(data: InputModel) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } = data

    const annualData: ResultModel[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData.set(annualData)
  }

}
