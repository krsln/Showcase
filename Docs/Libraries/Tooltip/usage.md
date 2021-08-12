### Usage

> [![](https://img.shields.io/badge/Main-projects‌‌‌‌‌‌‌-white)](../projects.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

### Tooltip
~~Component ()~~  
Directive (qlTooltip)  
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
