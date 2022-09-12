import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {
  ListColumn,
  ListOptions,
  ListColumnType,
  IIconActionEvent,
} from './list.model';

@Component({
  selector: 'list-widget',
  templateUrl: 'list-widget.component.html',
  styleUrls: ['list-widget.css'],
})
export class ListWidgetComponent implements OnInit {
  @Input()
  public options: ListOptions = new ListOptions();

  @Input() columns: ListColumn[] = new Array<ListColumn>();

  public datasourceValue: any = [];

  get datasource(): any[] {
    return this.datasourceValue;
  }
  set datasource(d: any[]) {
    this.datasourceValue = d;
    this.processDataSource();
    this.datasourceChange.emit(this.datasourceValue);
  }

  @Output()
  public datasourceChange: EventEmitter<any[]> = new EventEmitter<Array<any>>();

  @Output()
  public onItemDataBound: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public onActionClick: EventEmitter<IIconActionEvent> = new EventEmitter<IIconActionEvent>();

  public filteredDatasource: any = [];

  public filteredList: any;

  public selectedRow: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.bind();

    // var jsonObj = {
    //   ErrorPage: {
    //     PASS: 2,
    //   },
    //   Automated: {
    //     PASS: 17,
    //     FAIL: 31,
    //   },
    //   'HomePage(Landing page)': {
    //     PASS: 1,
    //     FAIL: 6,
    //   },
    // };

    // var arr = [];

    // Object.keys(jsonObj).map((item) => {
    //   console.log(item);
    //   arr.push({
    //     category: item,
    //     ...jsonObj[item],
    //   });
    // });

    // console.log(arr);

    this.http.get('../assets/sr.json').subscribe(
      (response: any) => {
        var arr = [];
        Object.keys(response.sectionStatus).map((section) => {
          //console.log(section);

          var sectionHeader = response.sectionStatus[section];

          if (sectionHeader.showOnStatusPage == true) {
            //console.log(section);

            Object.keys(sectionHeader.groups).map((group) => {
              var sectionGroup = sectionHeader.groups[group];

              //console.log(sectionGroup);

              Object.keys(sectionGroup.sections).map((item) => {
                var sectionGroupItem = sectionGroup.sections[item];
                console.log(sectionGroupItem);

                arr.push({
                  section: sectionHeader.displayValue,
                  sectionGroup: sectionGroup.displayValue,
                  ...sectionGroupItem,
                });
              });
            });
          }
        });

        console.log(arr);

        //this.flattenJson(response.sectionStatus);
      },
      (rejectResponse) => {
        console.log(
          'Error while getting datasource for list widget',
          rejectResponse
        );
      }
    );
  }

  getTree(array, root) {
    var o = {};
    array.forEach(function (a) {
      o[a.DescId] = Object.assign({}, a, o[a.DescId]);
      o[a.ParentId] = o[a.ParentId] || {};
      o[a.ParentId].children = o[a.ParentId].children || [];
      o[a.ParentId].children.push(o[a.DescId]);
    });
    return o[root].children;
  }

  getLeafes(tree) {
    var result = [];
    tree.forEach(
      (function iter(temp) {
        return function ({ DescId, Desc, Type, children }) {
          var t = temp.concat({ DescId, Desc, Type });
          if (!children) {
            result.push(t);
            return;
          }
          children.forEach(iter(t));
        };
      })([])
    );
    return result;
  }

  bind() {
    if (this.options.serviceUrl) {
      this.http.get(this.options.serviceUrl).subscribe(
        (response: any) => {
          this.datasource = response;
        },
        (rejectResponse) => {
          console.log(
            'Error while getting datasource for list widget',
            rejectResponse
          );
        }
      );
    }
  }

  applyFilter(event: any) {
    if (!this.options || !this.options.filterBy.length) return;
    let keyword = event.target.value;

    if (keyword.trim()) {
      let tempData = JSON.parse(JSON.stringify(this.datasource));

      this.filteredDatasource = tempData.filter((item) => {
        return this.options.filterBy.some((keyName) => {
          return new RegExp(keyword.trim().toLowerCase(), 'gi').test(
            item[keyName]
          );
        });
      });

      console.log(
        keyword,
        this.filteredDatasource.length,
        this.datasource.length
      );
    } else {
      this.filteredDatasource = JSON.parse(JSON.stringify(this.datasource));
    }
  }
  processDataSource() {
    if (this.datasource && Array.isArray(this.datasource)) {
      let actionColumns = this.columns.filter((c) => c.isActionColumn());
      this.datasource.forEach((row) => {
        if (actionColumns && actionColumns.length > 0) {
          row.actionMenu = this.cloneObject(actionColumns[0].actionMenu);
          this.onItemDataBound.emit(row);
        }
      });

      this.filteredDatasource = JSON.parse(JSON.stringify(this.datasource));
    }
  }

  onActionItemClick(row, type) {
    this.onActionClick.emit({
      actionType: type,
      actionEvent: row,
    });

    console.log(this.filteredDatasource.indexOf(row), type);
  }

  private cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  onRowClick(row) {
    this.selectedRow = row;
    // console.log(row, 'row selected');
  }

  onRowKeydown(index: number, e: KeyboardEvent) {
    var key = e.which || e.keyCode;
    console.log(index, key);
    if ((!e.shiftKey && key === 32) || key == 13) {
      console.log(key, index);
      this.selectedRow = index;
      e.preventDefault();
    }
  }

  onActionKeyDown(e: KeyboardEvent, row, type) {
    var key = e.which || e.keyCode;
    console.log(row, key);
    if ((!e.shiftKey && key === 32) || key == 13) {
      console.log(row, type);
      e.preventDefault();
    }
  }
}
