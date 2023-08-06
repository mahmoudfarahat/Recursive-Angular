import { Directive, Input } from "@angular/core";

interface ListTemplateContext<T> {
  $implicit: T;
  appList: T;
  index: number;
}
@Directive({
  selector: 'ng-template[appList]',

})
export class ListTemplateDirective<T> {
  @Input('appList') list!: T[]

  
}
