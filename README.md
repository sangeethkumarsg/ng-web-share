# ng-web-share

Lightweight Angular wrapper on Web Share API to share PWA apps, Text, URL and files.

## Why ng-navigator-share?
This library will save you from checking and writing all the cases for [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share), if ```Navigator.share()``` API is available in your browser or not. So instead of writing all that, you can use this wrapper.

### Share files
This library also supports sharing files using [Web Share](https://web.dev/web-share/). The file should be a javascript object. Here is a [list of file types](https://docs.google.com/document/d/1tKPkHA5nnJtmh2TgqWmGSREUzXgMUFDL6yMdVZHqUsg/edit) that are supported. Also file sharing is not supported in all browsers.

## Installation
You can use either the npm command-line tool to install packages.

#### NPM
```  
npm install --save ng-web-share
```

## Usage
Follow below steps to add multi level list in your project

#### 1. Import ```WebShareService``` in your component class

You need to import the ```WebShareService``` in your component class, where you want to use it. Then use the ```this.webshareService.share()``` method, which will return Promise as shown below.

```typescript        
import { Component } from '@angular/core';

import { WebShareServices } from 'ng-web-share';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    webshareService: WebShareServices
  ) {
    
  }
  title = 'app';
  share() {
    
    if (!this.webshareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }

    this.webshareService.share({
      title: 'My Awesome app',
      text: 'hey check out my Share button',
      url: 'https://developers.google.com/web'
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}
```  
#### 2. In your Markup
```html        
<u>
  <strong (click)='share()'>share</strong>
</u>
```

#### To share file
For sharing file, you have to pass javascript file objects. You can pass array of files.

First check if sharing of the file is supported by passing the file objects in an array.

```typescript
    //file Array is an array wich contains javascript file objects.
    if(!this.webShareService.canShareFile(this.fileArray)){
      alert(`This service/api is not supported in your Browser`);
      return;
    }
```

To share files:

```typescript
    //file Array is an array wich contains javascript file objects.
    this.webShareService.share({
        title: 'My Awesome app',
        text: "hey check out my Share button",
        url: 'https://web.dev/web-share',
        files: this.fileArray
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
```