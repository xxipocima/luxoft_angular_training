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

  private regexStr = /[^0-9]*/g;

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

  @HostListener('keyup')
  onKeyUp(): void {
    this.el.nativeElement.style.borderColor = !this.isValid ? 'red' : 'initial';
    if (this.isValid) {
      this.viewContainerRef.clear()
      this.componentRef = undefined;
    } else {
      if (this.componentRef) {
        return;
      }
      this.contentViewRef = this.popover.createEmbeddedView({});
      const componentFactory = this.resolver.resolveComponentFactory(OnlyEmailComponent);
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
