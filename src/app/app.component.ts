import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecursionAngular';

  constructor(private vref:ViewContainerRef) {
  }

  
  ngAfterViewInit() {
    this.vref.createEmbeddedView(this.sayHelloTemplate);
  }


  @ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate!:TemplateRef<any>;
}
