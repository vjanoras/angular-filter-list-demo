import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  selected = false;

  innerhtml = `<ol>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
          </ol>`;


  moreInfoContent = [
    {
      "title": "Purpose",
      "content": `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non orci vehicula, rutrum eros sit amet, aliquet odio. Nulla congue nisl eu elit molestie sagittis.</p>`
    },
    {
      "title": "Key Features",
      "content": `<ol>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
          </ol>`
    },
    {
      "title": "Key Features",
      "content": `<ol>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
            <li>Vestibulum scelerisque sagittis</li>
          </ol>`
    }
  ];

  showNotFound = false;

  errorHandler(event) {
    console.log(event);
    //event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
    this.showNotFound = true;
  }

  onFocus(event) {
    console.log(event);
  }

}
