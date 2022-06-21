import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

//https://stackblitz.com/edit/display-image-from-api?file=src%2Fapp%2Fconfig.service.ts
//https://stackoverflow.com/questions/55057774/how-to-get-image-and-show-in-my-page-angular-6

@Component({
  selector: 'hello',
  //template: `Hello {{name}}!`,
  templateUrl: './hello.html',
})
export class HelloComponent implements OnInit {
  @Input()
  public name: string = 'World';

  private httpClient: HttpClient;
  private _sanitizer: DomSanitizer;

  image: any;
  imageObject: any;
  thumbnail: any;
  thumbnail2: any;
  imageTypeShow = false;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.httpClient = http;
    this._sanitizer = sanitizer;
  }

  ngOnInit(): void {
    // option 1: load from url (blob)
    this.getImage().subscribe(
      (data: any) => {
        //this.createImageFromBlob(data);
        this.test(data);
      },
      (error) => {
        console.log(error);
      }
    );

    // option 2: load from config (base64)
    // this.getImage2().subscribe(
    //   (data: any) => {
    //     let objectURL = 'data:image/jpeg;base64,' + data.gif;
    //     this.thumbnail2 = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    //     console.log('option2', this.thumbnail2);
    //   },
    //   (error) => {}
    // );
  }

  getImage(): Observable<Blob> {
    // return this.httpClient.get('/assets/accessterminationsummary.gif', {
    //   responseType: 'blob',
    // });
    //return this.httpClient.get('/assets/accessterminationsummary.GIF');
    return this.httpClient.get('/assets/accessterminationsummary.GIF', {
      responseType: 'blob',
    });
  }

  getImage2() {
    return this.httpClient.get('/assets/config.json');
  }

  createImageFromBlob(image: any) {
    let reader = new FileReader();

    console.log(image);

    reader.addEventListener(
      'load',
      () => {
        // this.thumbnail = reader.result.toString();
        // console.log(this.thumbnail);

        let objectURL =
          'data:image/jpeg;base64,aHR0cHM6Ly9zdGFja2JsaXR6LmNvbS9maWxlcy9hbmd1bGFyLWZpbHRlci1saXN0LWRlbW8vZ2l0aHViL3ZqYW5vcmFzL2FuZ3VsYXItZmlsdGVyLWxpc3QtZGVtby9tYXN0ZXIvc3JjL2Fzc2V0cy9BY2Nlc3MgVGVybWluYXRpb24gU3VtbWFyeS5HSUY=';

        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        console.log(this.thumbnail);
        // let img = reader.result;
        // console.log(img.toString());
        // this.thumbnail = this._sanitizer.bypassSecurityTrustUrl(img.toString());
        // console.log('option1', this.thumbnail);
        this.imageTypeShow = true;
      },
      false
    );

    if (image) {
      if (image.type !== 'application/pdf') reader.readAsDataURL(image);
    }
  }

  test(image: any) {
    var reader: FileReader = new FileReader();
    let r = this;
    reader.onloadend = function (fileLoadedEvent: any) {
      var imgSrcData = fileLoadedEvent.target.result;
      console.log('test', imgSrcData);
      r.thumbnail = r._sanitizer.bypassSecurityTrustUrl(imgSrcData);
      r.imageTypeShow = true;
    };

    reader.readAsDataURL(image);
  }
}
