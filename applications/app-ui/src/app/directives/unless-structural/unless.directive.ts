import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  @Input() set appUnless(conditional: boolean) {
    if (!conditional) {
      this.viewContainer.createEmbeddedView(this.templateRef); //RENDERS THE TEMPLATE
    } else {
      this.viewContainer.clear();
    }
  }


}
