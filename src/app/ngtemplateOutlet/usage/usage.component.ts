import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mode = 'list';
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    } // ... more items
  ];


  exampleContext = {
    $implicit: 'default context property when none specified',
    aContextProperty: 'a context property'
  };
}
