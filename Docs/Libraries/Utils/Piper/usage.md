### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../../../projects/utils/readme.desc.md)
> [![](https://img.shields.io/badge/readme-white)](../../../../projects/utils/Piper/Docs/readme.md)

### Piper

Pipe ( | qlTruncate)  
Pipe ( | qlSanitize)

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
