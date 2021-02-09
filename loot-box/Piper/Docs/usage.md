### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.desc.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

### Piper

Pipe ( | lbTruncate)  
Pipe ( | lbSanitize)

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
<span [innerHTML]="description|lbSanitize"></span>
<td *ngIf="i>0" [innerHTML]="entry.attributes[i] | lbSanitize"></td>

<!--lbTruncate-->
{{description|lbTruncate:size}}

* | lbTruncate:40:'...:p'
* | lbTruncate:40
* | lbTruncate
``` 
