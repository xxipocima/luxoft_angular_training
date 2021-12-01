import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Injector,
  Input,
  TemplateRef, ViewContainerRef
} from '@angular/core';
import {OnlyNumberComponent} from "./only-number.component";

@Directive({
  selector: 'input[appOnlyNumber]'
})
export class OnlyNumberDirective {

  @Input('appOnlyNumber') color: string;
  @Input('appOnlyNumber') popover: TemplateRef<any>;
  @Input() title: string;
  componentRef: ComponentRef<OnlyNumberComponent>;
  contentViewRef: EmbeddedViewRef<OnlyNumberComponent>;
  private isValid = true;

  constructor(
    private el: ElementRef,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  @HostListener('keyup')
  onKeyUp(): void {
    this.el.nativeElement.style.borderColor = !this.isValid ? this.color : 'initial';
    if (this.isValid) {
      this.viewContainerRef.clear()
      this.componentRef = undefined;
    } else {
      if (this.componentRef) {
        return;
      }
      this.contentViewRef = this.popover.createEmbeddedView({});
      const componentFactory = this.resolver.resolveComponentFactory(OnlyNumberComponent);
      this.componentRef = this.viewContainerRef.createComponent(componentFactory, 0, this.injector, [this.contentViewRef.rootNodes]);
      this.componentRef.instance.title = this.title;
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: any): void {
    if (event.keyCode !== 8){
      thid.isValid = !!Number(event.key);
      is(!this.isValid){
        event.preventDefault();
      }
    }
  }
}
