import { Injectable, signal } from "@angular/core";
import { InputModel } from "../user-input/input-model";
import { ResultModel } from "./insvestment-result-model";

@Injectable({ providedIn: 'root' })
export class InvestmentServices {
    resultData = signal<ResultModel[] | undefined>(undefined);

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

        this.resultData.set(annualData);
    }
}