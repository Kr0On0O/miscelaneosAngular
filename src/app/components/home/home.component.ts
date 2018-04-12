import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <hr>
    <app-css></app-css>
    <app-clases></app-clases>
    <app-ng-switch></app-ng-switch>
    <p [appResaltado]="'orange'">Hola mundo</p>
  `,
  styles:[]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("OnInit")
  }
    ngOnChanges(){
      console.log("OnChnages")
    }
    ngDoCheck(){
      console.log("DoCheck")
    }
    ngAfterContentInit(){
      console.log("AfterContentInit")
    }
    ngAfterContentChecked(){
      console.log("AfterContentChecked")
    }
    ngAfterViewInit(){
      console.log("AfterViewInit")
    }
    ngAfterViewChecked(){
      console.log("AfterViewChecked")
    }
    ngOnDestroy(){
      console.log("OnDestroy")
    }

}
