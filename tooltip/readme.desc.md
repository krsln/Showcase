# @qrsln/tooltip

![Progress](https://img.shields.io/badge/Progress-✔✔✔✔☐‌‌‌‌‌‌‌-blue)
[![downloads](https://img.shields.io/npm/dm/@qrsln/tooltip.svg)](https://npmcharts.com/compare/@qrsln/tooltip?minimal=true)
[![npm version](https://badge.fury.io/js/%40qrsln%2Ftooltip.svg)](https://badge.fury.io/js/%40qrsln%2Ftooltip)

## Tooltip

For Angular  
[![Progress](https://img.shields.io/badge/Demo-✔✔✔✔☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/Tooltip)
[![](https://img.shields.io/badge/readme‌‌‌‌‌‌‌-white)](src/readme.md)
[![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](src/usage.md)

![](https://github.com/krsln/NgLootBox/raw/master/tooltip/Screenshots/Tooltip.png "Tooltip")

#### app.module.ts

```typescript
import {TooltipModule} from '@qrsln/tooltip';

@NgModule({
  imports: [TooltipModule, /*...*/],
})
```  

#### Usage

```html

<div>
  <button type="button" class="btn btn-outline-dark"
          lbTooltip="Tooltip on right" [placement]="'right'" [duration]="500" [theme]="'silver'">Right
  </button>
  <button type="button" class="btn btn-outline-dark"
          lbTooltip="Tooltip on top" [placement]="'top'" [duration]="500" [theme]="'white'">Top
  </button>
  <button type="button" class="btn btn-outline-dark"
          lbTooltip="Tooltip on bottom" [placement]="'bottom'" [duration]="500" [theme]="'black'">Bottom
  </button>
  <button type="button" class="btn btn-outline-dark"
          lbTooltip="Tooltip on left" [placement]="'left'" [duration]="500" [theme]="'red'">Left
  </button>
</div>
``` 
 
