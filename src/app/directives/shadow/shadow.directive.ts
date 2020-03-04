import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private elem: ElementRef, private render: Renderer2) {
  	this.render.setStyle(this.elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
  }

}
