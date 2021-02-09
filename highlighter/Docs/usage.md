> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../readme.desc.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

### Highlighter

Component (~~ql-highlighter~~)  
Directive (qlHighlighter)  
~~Service ()~~

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
