### Piper | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [ ] Component ()
- [ ] Directive ()
- [ ] Service ()
- [x] Pipe (qlTruncate, qlSanitize)

#### app.module.ts

```typescript
import {PiperModule} from '@qrsln/piper';

@NgModule({
  imports: [PiperModule, /*...*/],
})
```  

#### Usage

```html
<!--lbSanitize-->
<span [innerHTML]="description|qlSanitize"></span>
<td *ngIf="i>0" [innerHTML]="entry.attributes[i] | lbSanitize"></td>

<!--lbTruncate-->
{{description|qlTruncate:size}}

* | lbTruncate:40:'...:p'
* | lbTruncate:40
* | lbTruncate
``` 
