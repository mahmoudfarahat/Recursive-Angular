import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { ListTemplateDirective } from '../list-template.directive';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ListComponent<TItem extends object> implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() list!: TItem[];

  @ContentChild(ListTemplateDirective, { read: TemplateRef })
  listTemplateRef!: TemplateRef<unknown>;
}
