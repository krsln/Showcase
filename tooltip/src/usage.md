### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../readme.desc.md) [![](https://img.shields.io/badge/readme-white)](readme.md)

### Tooltip
~~Component ()~~  
Directive (lbTooltip)  
~~Service ()~~

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
