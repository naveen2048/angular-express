import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[courier-host]',
})
export class CourierDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}