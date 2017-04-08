/**
 * Created by weiqiangliang on 8/4/17.
 */
import {Directive, Input, ElementRef, HostListener} from '@angular/core';
@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
  @Input('myHighlight') highlightColor: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') mouseEnter() {
    this.hightlight(this.highlightColor );
  }

  @HostListener('mouseleave') mouseLeave() {
    this.hightlight(null);
  }

  private hightlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
