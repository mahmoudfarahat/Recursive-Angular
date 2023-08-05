import { Directive, TemplateRef } from '@angular/core';

interface PersonContext {
  $implicit: string;
  age: number;
}

@Directive({
  selector: 'ng-template[person]',
  exportAs: 'personExportAsRef', // named this way for better clarity

})
export class PersonDirective {

  constructor(public template: TemplateRef<PersonContext>){}

  static ngTemplateContextGuard(dir: PersonDirective,ctx: unknown): ctx is PersonContext {
    return true;
  }
}
