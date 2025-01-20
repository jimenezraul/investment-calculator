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
}
