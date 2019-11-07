import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "pfm-accordion",
  templateUrl: "accordion-card.component.html",
  styleUrls: [ "./accordion-card.css"]
})
export class PfmAccordionComponent {

    @Input() title: string;

    @Input() subtitle: string;

    @Input() expand = true;

    @Input() id: string = "accordion-panel";

    public toggle(control) {        
      control.toggle(this.id);
      this.expand = control.isExpanded(this.id);
    }

    public onKeydown(e: KeyboardEvent, control) {
    
      console.log('onKeyDown', e,this.id);
      switch (e.keyCode) {
          case 32:
          case 13:
            this.toggle(control);
            e.preventDefault();
            break;
          default:
              break;
      }
  }
  
}

// export declare enum KeyCode {
//     Tab = 9,
//     Enter = 13,
//     Space = 32,
//     UpArrow = 38,
//     RightArrow = 39,
//     DownArrow = 40,
//     LeftArrow = 37
// }