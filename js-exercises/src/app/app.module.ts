import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './car.component.ts/cars.component';
import { AnimalsComponent } from './animal.component.ts/animals.component';
import { BirdService } from './bird.component.ts/bird.service';
import { BirdComponent } from './bird.component.ts/bird.component';
import { BankAccountComponent } from './bankaccount.component.ts/bankaccount.component';
import { UtilityToolComponent } from './utilitytool.component.ts/utilitytool.component';
import { RectangleComponent } from './rectangle.component.ts/rectangle.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AnimalsComponent,
    BirdComponent,
    BankAccountComponent,
    UtilityToolComponent,
    RectangleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BirdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
