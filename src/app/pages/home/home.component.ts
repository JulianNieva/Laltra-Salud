import { Component,HostListener} from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private viewScroll:ViewportScroller)
  {}

  scrollToElement(id:string)
  {
    this.viewScroll.scrollToAnchor(id)
  }
}
