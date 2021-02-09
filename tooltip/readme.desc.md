# @qrsln/tooltip

![Progress](https://img.shields.io/badge/Progress-✔✔✔✔☐‌‌‌‌‌‌‌-blue)
[![downloads](https://img.shields.io/npm/dm/@qrsln/tooltip.svg)](https://npmcharts.com/compare/@qrsln/tooltip?minimal=true)
[![npm version](https://badge.fury.io/js/%40qrsln%2Ftooltip.svg)](https://badge.fury.io/js/%40qrsln%2Ftooltip)

## Tooltip

For Angular  
[![Progress](https://img.shields.io/badge/Demo-✔✔✔✔☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/Libraries/Tooltip)
[![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../readme.md)
[![](https://img.shields.io/badge/readme‌‌‌‌‌‌‌-white)](Docs/readme.md)
[![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](Docs/usage.md)

#### app.module.ts

```typescript
import {TooltipModule} from '@qrsln/tooltip';

@NgModule({
  imports: [TooltipModule, /*...*/],
})
```  

#### Usage

```html
<div class="col-12 col-lg-6 mb-2">
  <p>[theme]="'silver'" default</p>
  <button qlTooltip="Tooltip on right" placement="right" [duration]="dur" class="btn btn-outline-dark mr-1">
    Right
  </button>
  <button qlTooltip="Tooltip on top" placement="top" [duration]="dur" class="btn btn-outline-dark mr-1">
    Top
  </button>
  <button qlTooltip="Tooltip on bottom" placement="bottom" [duration]="dur" class="btn btn-outline-dark mr-1">
    Bottom
  </button>
  <button qlTooltip="Tooltip on left" placement="left" [duration]="dur" class="btn btn-outline-dark mr-1">
    Left
  </button>
</div>
``` 

#### Screenshots

![](Docs/Screenshots/Tooltip.png "Tooltip")
