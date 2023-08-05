import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { PersonDirective } from '../person.directive';
import { AppTemplateOutlet } from '../AppTemplateOutlet.directive';



interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() person!: Person;

  // @ContentChild('#personRef', { read: TemplateRef })
  // personTemplateRef?: TemplateRef<unknown>;


  @ContentChild(PersonDirective,  { read: TemplateRef })

    personTemplateRef?: TemplateRef<unknown>;
}
