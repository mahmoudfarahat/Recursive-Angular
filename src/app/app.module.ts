import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactorialComponent } from './factorial/factorial.component';
import { FormsModule } from '@angular/forms';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { PersonComponent } from './person-and-list/person/person.component';
import { ListComponent } from './person-and-list/list/list.component';
import { PersonListComponent } from './person-and-list/person-list/person-list.component';
import { PersonDirective } from './person-and-list/person.directive';
import { AppTemplateOutlet } from './person-and-list/AppTemplateOutlet.directive';
import { ListTemplateDirective } from './person-and-list/list-template.directive';
import { NgTemplateComponent } from './ng-template/ng-template.component';

 



@NgModule({
  declarations: [
    AppComponent,
    FactorialComponent,
    TreeNodeComponent,
    PersonComponent,
    ListComponent,
    PersonListComponent,
    PersonDirective,

AppTemplateOutlet,
ListTemplateDirective,
NgTemplateComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
