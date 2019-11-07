export class ListOptions {
  filterBy: string[] = [];
}

export interface IIconActionItem {
  tooltip: string;
  iconCss: string; 
  actionType: string;
  destination?: string;
}

export interface IIconActionEvent {
  actionType: string;
  actionEvent: any;
}

export interface IListColumn {
  dataField?: string;
  displayText: string;
  enableFiltering: boolean;
  columnType:ListColumnType;
  actionMenu?: IIconActionItem[];

  //isActionColumn() : boolean;
}
export class ListColumn implements IListColumn
{
    dataField: string;
    displayText: string;
    enableFiltering: boolean;
    columnType:ListColumnType;
    actionMenu?: IIconActionItem[];

  constructor(options?: IListColumn) {
    if (options) {
      this.dataField = options.dataField;
      this.displayText = options.displayText;
      this.enableFiltering = options.enableFiltering;
      this.columnType = options.columnType;
      this.actionMenu = options.actionMenu;
    }
  }

    isActionColumn(): boolean {
        return this.columnType && this.columnType == ListColumnType.Actions;
    }
    
    isLinkColumn(): boolean {
        return this.columnType && this.columnType == ListColumnType.Link;
    }

    isDataColumn(): boolean {
        return this.columnType && this.columnType == ListColumnType.Data;
    }

}

export enum ListColumnType {
  Data = 1,
  Link = 2,
  Actions = 3
}