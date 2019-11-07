import {
  Component,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

import { 
  IIconActionItem,
  IIconActionEvent
} from "./filter-list.model";

@Component({
  selector: "pfm-icon-context-menu",
  templateUrl: "icon-context-menu.html"
})
export class PfmIconContextMenuComponent {
  
  @Input()
  public menuItems: IIconActionItem[];

  @Input()
  public item: any;

  @Output()
  public onItemClick: EventEmitter<IIconActionEvent>;

  onClick(e: any, item: IIconActionItem) {
    this.onItemClick.emit(
      { 
        actionType: item.actionType, 
        actionEvent: this.item}
      );
      e.preventDefault();
  }
  

}
