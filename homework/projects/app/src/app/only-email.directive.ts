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
import {OnlyEmailComponent} from "./only-email.component";

@Directive({
  selector: 'input[appOnlyEmail]'
})
export class OnlyEmailDirective {

  private regexStr = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/g;

  @Input('appOnlyEmail') color: string;
  @Input('appOnlyEmail') popover: TemplateRef<any>;
  @Input() title: string;
  componentRef: ComponentRef<OnlyEmailComponent>;
  contentViewRef: EmbeddedViewRef<OnlyEmailComponent>;
  private isValid = true;

  constructor(
    private el: ElementRef,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(this.regexStr, '');
    if ( initalValue !== this.el.nativeElement.value) {
      if (this.componentRef) {
        return;
      }
      this.el.nativeElement.style.borderColor = !this.isValid ? this.color : 'initial';
        this.contentViewRef = this.popover.createEmbeddedView({});
        const componentFactory = this.resolver.resolveComponentFactory(OnlyEmailComponent);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory, 0, this.injector, [this.contentViewRef.rootNodes]);
        this.componentRef.instance.title = this.title;
      event.stopPropagation();
    } else {
      this.viewContainerRef.clear()
      this.componentRef = undefined;
    }
  }
}
