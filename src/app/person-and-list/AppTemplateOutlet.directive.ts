import {
  Directive,
  EmbeddedViewRef,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngTemplateOutlet]',
})
export class AppTemplateOutlet<T> implements OnChanges {

  private _viewRef: EmbeddedViewRef<T> | null = null;

  @Input() public ngTemplateOutletContext: T | null = null;

  @Input() public ngTemplateOutlet: TemplateRef<T> | null = null;

  @Input() public ngTemplateOutletInjector: Injector | null = null;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges) {

    if (changes['ngTemplateOutlet'] || changes['ngTemplateOutletInjector']) {
      const viewContainerRef = this._viewContainerRef;
      console.log(1)
      if (this._viewRef) {
        console.log(2)
        viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));

      }

      if (this.ngTemplateOutlet) {
        console.log(3)
         const {
          ngTemplateOutlet: template,
          ngTemplateOutletContext: context,
          ngTemplateOutletInjector: injector,
        } = this;
        // this._viewRef = viewContainerRef.createEmbeddedView(
        //   template,
        //   context,
        //   injector ? { injector } : undefined
        // ) as EmbeddedViewRef<T> | null;


      } else {
        console.log(4)
        this._viewRef = null;
      }
    } else if (

      this._viewRef &&
      changes['ngTemplateOutletContext'] &&
      this.ngTemplateOutletContext
    ) {
      console.log(5)
      this._viewRef.context = this.ngTemplateOutletContext;
    }
  }
}
