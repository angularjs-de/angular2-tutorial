import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[schriftRot]'
})
export class SchriftRotDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        // el.nativeElement.style.color = 'red';
        renderer.setElementStyle(el.nativeElement, 'color', 'red');
    }
}
