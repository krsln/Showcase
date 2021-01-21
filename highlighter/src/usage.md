> [Main](../../readme.md) / [Readme](readme.md) ~ **Usage**

## Highlighter
Component (lb-highlighter)  
Directive (lbHighlighter)  
Service ()  

#### Depends

###### Html
```
      <div class="card card-body mb-2">
        <label for="TypeScript">TypeScript</label>
        <textarea id="TypeScript" lbHighlighter [theme]="'default'" [lineNumbers]="true">

class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}  
        </textarea>
      </div>
      or
      <div class="card card-body mb-2">
        <label for="TypeScript">TypeScript</label>
        <textarea id="TypeScript" lbHighlighter [theme]="'default'" [code]="TS_Sample" [lineNumbers]="true"></textarea>
      </div>
```

###### Ts
```
TS_Sample = `
class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax
  `;
```  

#### Features
Params | desc
 --- | ---  
[theme] | _highlight.js theme_ classes [default: 'default']
[code] | code here or innerHTML [if code not set it will look innerHTML]
[lineNumbers] | Line Numbers [default: false]
[lang] | code language here [no need]
[options] | _highlight.js options_

###### app.module.ts
```
import {HighlighterModule} from '@qrsln/highlighter';

@NgModule({
  imports: [HighlighterModule, ...],

```  
