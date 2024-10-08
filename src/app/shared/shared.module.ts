import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ListadoPrestacionesComponent } from './listado-prestaciones/listado-prestaciones.component';
import { CardsAnimDirective } from './directives/cards-anim.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    CarouselComponent,
    ListadoPrestacionesComponent,
    CardsAnimDirective
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports:[NavbarComponent,CarouselComponent,ListadoPrestacionesComponent]
})
export class SharedModule { }
