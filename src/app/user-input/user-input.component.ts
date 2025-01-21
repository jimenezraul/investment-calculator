import { Component, output, signal } from '@angular/core';
import type { InputModel } from './input-model'
import { InvestmentServices } from '../investment-results/investment-result.services';

const initialValues: InputModel = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 5,
  duration: 10,
};

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(private investmentServices: InvestmentServices) { }

  initialInvestment = signal(initialValues.initialInvestment);
  annualInvestment = signal(initialValues.annualInvestment);
  expectedReturn = signal(initialValues.expectedReturn);
  duration = signal(initialValues.duration);

  onSubmit() {
    this.investmentServices.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    })

    // Reset values
    this.initialInvestment.set(initialValues.initialInvestment)
    this.annualInvestment.set(initialValues.annualInvestment)
    this.expectedReturn.set(initialValues.expectedReturn)
    this.duration.set(initialValues.duration)
  }
}
