import { Directive,ElementRef, Renderer2, HostListener,Input   } from '@angular/core';

@Directive({
  selector: '[appCardsAnim]',
})
export class CardsAnimDirective {

  @Input('animacion') animationType: 'left' | 'right' = 'left';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationClass = this.animationType === 'left' ? 'slide-in-left' : 'slide-in-right';
          this.renderer.addClass(this.el.nativeElement, animationClass);
          this.renderer.setStyle(this.el.nativeElement, 'visibility', 'visible');
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.1 });

    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
    observer.observe(this.el.nativeElement);
  }

}
