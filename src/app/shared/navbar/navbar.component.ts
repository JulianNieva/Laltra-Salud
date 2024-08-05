import { Component,EventEmitter,Output,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() scrollToElement:EventEmitter<any> = new EventEmitter<any>();

  scroll(id:string)
  {
    this.scrollToElement.emit(id);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const arrow = <HTMLAnchorElement>document.getElementById("boton-up");
    if (window.scrollY > 300) { // Cambia 300 por la posición en la que deseo mostrar la flecha
      arrow.style.display = "block"
    } else {
      arrow.style.display = "none"
    }
  }

  goTop(){
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
