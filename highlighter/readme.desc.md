# @qrsln/highlighter

![Progress](https://img.shields.io/badge/Progress-✔✔✔✔☐‌‌‌‌‌‌‌-blue)
[![downloads](https://img.shields.io/npm/dm/@qrsln/highlighter.svg)](https://npmcharts.com/compare/@qrsln/highlighter?minimal=true)
[![npm version](https://badge.fury.io/js/%40qrsln%2Fhighlighter.svg)](https://badge.fury.io/js/%40qrsln%2Fhighlighter)

## Highlighter

For Angular  
[![Progress](https://img.shields.io/badge/Demo-✔✔✔✔☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/Libraries/Highlighter)
[![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../readme.md)
[![](https://img.shields.io/badge/readme‌‌‌‌‌‌‌-white)](Docs/readme.md)
[![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](Docs/usage.md)

#### Dependencies

```shell
 npm install highlight.js 
```

#### Features

Params | desc
 --- | ---  
[theme] | _highlight.js theme_ classes [default: 'default']
[code] | code here or innerHTML [if code not set it will look innerHTML]
[lineNumbers] | Line Numbers [default: false]
[lang] | code language here [no need]
[options] | _highlight.js options_


#### app.module.ts

```typescript
import {HighlighterModule} from '@qrsln/highlighter';

@NgModule({
  imports: [HighlighterModule, /*...*/],
})
```

#### Usage

```html
<!--in tags-->
<div class="card card-body mb-2">
    <label for="C#">C#</label>
    <textarea id="C#" qlHighlighter [theme]="'vs2015'" [lineNumbers]="true">
using System.IO.Compression;

#pragma warning disable 414, 3021

namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Span<int> numbers = stackalloc int[length];
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}
    </textarea>
</div>
<!--or-->
<div class="card card-body mb-2">
  <label for="TypeScript">TypeScript</label>
  <textarea id="TypeScript" qlHighlighter [theme]="'default'" [code]="sample" [lineNumbers]="true"></textarea>
</div>
```
```typescript
sample = `
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

### Screenshots
Highlighter VS 2015  
![](Docs/Screenshots/Highlighter-1.png "Highlighter VS 2015")  
Highlighter Default  
![](Docs/Screenshots/Highlighter-2.png "Highlighter Default")  
