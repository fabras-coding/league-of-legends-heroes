import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //<-- Ng modules lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Sempre que importar alguma biblioteca através de metadado,
    // nao se pode esquecer de adicionar no array de imports
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
