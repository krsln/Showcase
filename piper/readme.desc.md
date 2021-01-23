# @qrsln/piper

![Progress](https://img.shields.io/badge/Progress-☐☐☐☐☐‌‌‌‌‌‌‌-blue)
[![downloads](https://img.shields.io/npm/dm/@qrsln/piper.svg)](https://npmcharts.com/compare/@qrsln/piper?minimal=true)
[![npm version](https://badge.fury.io/js/%40qrsln%2Fpiper.svg)](https://badge.fury.io/js/%40qrsln%2Fpiper)

## Piper
For Angular  
[![Progress](https://img.shields.io/badge/Demo-☐☐☐☐☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/Piper)
[![](https://img.shields.io/badge/readme‌‌‌‌‌‌‌-white)](src/readme.md)
[![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](src/usage.md)  
![](https://github.com/krsln/NgLootBox/raw/master/piper/Screenshots/Piper.png "Piper")  
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
