import { 
  Component 
} from "@angular/core";

import { 
  HttpClient 
} from "@angular/common/http";

import {
  IListColumn, ListColumn, ListColumnType, ListOptions
} from "./widget/list.model";

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  title = 'Dashboard Report List Widget';
  columns: IListColumn[] = [];
  options = new ListOptions();

  constructor(private http: HttpClient) {
    
    this.options.filterBy = [ "name", "type"];
    this.options.sortBy = "name DESC";
    this.options.serviceUrl = "../assets/test-data.json";

    this.columns.push(new ListColumn({ 
        dataField: "name",           
        displayText: "Name",
        enableFiltering: true,
        columnType: ListColumnType.Data
    }));

    this.columns.push(new ListColumn({ 
        dataField: "type",           
        displayText: "Type",
        enableFiltering: true,
        columnType: ListColumnType.Data
    }));
    
    this.columns.push(new ListColumn({ 
        displayText: "Actions",
        enableFiltering: true,
        columnType: ListColumnType.Actions,
        actionMenu: [ {
          tooltip: "add dashboard to favorite",
          actionType: "favorite",
          destination: "",
          iconCss: "fal fa-star"
        },
        {
          tooltip: "view dashboard",
          actionType: "view",
          destination: "",
          iconCss: "fal fa-eye"
        }]
      }));
    }


}
