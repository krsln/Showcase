### Highlighter | Usage

[![Demo](https://img.shields.io/badge/Demo-blue?style=for-the-badge)](https://krsln.github.io/Showcase/Libraries/Highlighter)
[![](https://img.shields.io/badge/Main-projects-white?style=for-the-badge)](../projects.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (~~ql-highlighter~~)
- [x] Directive (qlHighlighter)
- [ ] Service ()

#### app.module.ts

```typescript
import {HighlighterModule} from '@qrsln/highlighter';

@NgModule({
  imports: [HighlighterModule, /*...*/],
})
```

#### Usage

```html
<!--using div [code]="CODES.Typescript" or [innerHtml]="CODES.Typescript"-->
<div qlHighlighter [theme]="selectedTheme" [lang]="'typescript'" [lineNumbers]="lineNumbers"
     [innerHtml]="CODES.Typescript"></div>
<!--using textarea [code]="CODES.Typescript" or [innerHtml]="CODES.Typescript"-->
<textarea qlHighlighter [theme]="selectedTheme" [lang]="'csharp'" [lineNumbers]="lineNumbers"
          [code]="CODES.Typescript"></textarea>
<!--using textarea innerHTML-->
<textarea qlHighlighter [theme]="selectedTheme" [lang]="'typescript'" [lineNumbers]="lineNumbers">
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
</textarea>
```

```typescript
selectedTheme = 'stackoverflow-dark';
lineNumbers = false;

CODES = {
  Typescript: `
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
`,
};
```   
