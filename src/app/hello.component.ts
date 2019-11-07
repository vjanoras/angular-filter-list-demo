import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `Hello {{name}}!`
})
export class HelloComponent {
  @Input()
  public name: string = "World";
}
