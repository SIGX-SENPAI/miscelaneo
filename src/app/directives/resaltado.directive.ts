import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('Directiva llamada');
  }

  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {
    this.Resaltar(this.nuevoColor || 'yellow');
  }
  @HostListener('mouseleave') mouseSalio() {
    this.Resaltar( null );
  }
  private Resaltar( color: string = 'yellow') {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
