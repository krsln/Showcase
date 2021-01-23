# @qrsln/highlighter

![Progress](https://img.shields.io/badge/Progress-✔✔✔✔☐‌‌‌‌‌‌‌-blue)
[![downloads](https://img.shields.io/npm/dm/@qrsln/highlighter.svg)](https://npmcharts.com/compare/@qrsln/highlighter?minimal=true)
[![npm version](https://badge.fury.io/js/%40qrsln%2Fhighlighter.svg)](https://badge.fury.io/js/%40qrsln%2Fhighlighter)

## Highlighter

For Angular  
[![Progress](https://img.shields.io/badge/Demo-✔✔✔✔☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/Highlighter)
[![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../readme.md)
[![](https://img.shields.io/badge/readme‌‌‌‌‌‌‌-white)](src/readme.md)
[![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](src/usage.md)

![](https://github.com/krsln/NgLootBox/raw/master/highlighter/Screenshots/Highlighter_1.png)
![](https://github.com/krsln/NgLootBox/raw/master/highlighter/Screenshots/Highlighter_2.png)

### Html

```html

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
<!--OR-->
<div class="card card-body mb-2">
  <label for="TypeScript">TypeScript</label>
  <textarea id="TypeScript" lbHighlighter [theme]="'default'" [code]="TS_Sample" [lineNumbers]="true"></textarea>
</div>
```

### Ts

```typescript
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
 
