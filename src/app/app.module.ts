import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        InvestmentResultsComponent,
        UserInputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
