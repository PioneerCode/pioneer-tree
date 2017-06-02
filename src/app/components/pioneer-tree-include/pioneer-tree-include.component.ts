import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[pioneerTreeInclude]'
})
export class PioneerTreeInclude {

    @Input('templateId') templateId: string;

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        let template: any = document.querySelector('#' + this.templateId);
        this.element.nativeElement.innerHTML = document.importNode(template.content, true);
    }
}

