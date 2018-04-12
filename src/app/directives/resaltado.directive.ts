import { Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    console.log("directiva llamada")
    el.nativeElement.style.backgroundColor="yellow"
  }
  @Input("appResaltado")color:string;
  @HostListener('mouseenter') mouseEntro(){
    this.el.nativeElement.style.backgroundColor="lightblue"
  }
  @HostListener('mouseleave') mouseSalio(){
    this.el.nativeElement.style.backgroundColor=this.color;
  }
}
 
