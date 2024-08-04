import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports:[NavbarComponent,CarouselComponent]
})
export class SharedModule { }
