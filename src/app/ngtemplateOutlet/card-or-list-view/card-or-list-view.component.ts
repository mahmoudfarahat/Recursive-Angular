import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { CardItemDirective } from '../directives/card-item.directive';
import { ListItemDirective } from '../directives/list-item.directive';

@Component({
  selector: 'card-or-list-view',
  templateUrl: './card-or-list-view.component.html',
  styleUrls: ['./card-or-list-view.component.css']
})
export class CardOrListViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() items: {
    header: string,
    content: string
  }[] = [];

  @Input() mode: string = 'card';


  @ContentChild(CardItemDirective, {read: TemplateRef}) cardItemTemplate: any;
  @ContentChild(ListItemDirective, {read: TemplateRef}) listItemTemplate: any;
}
