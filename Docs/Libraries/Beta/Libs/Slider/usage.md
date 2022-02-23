### Usage

> [![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
> [![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

## Sliders

Component (qlt-slider, qlt-slider-range)  
~~Directive ()~~  
~~Service ()~~

#### app.module.ts

```typescript
import {SliderModule} from '@qrsln/loot-box/Libs/Slider';

@NgModule({
  imports: [SliderModule, /*...*/],
})
```  

#### Usage

```html

<qlt-slider-range [min]="0" [max]="100" [start]="22" [end]="66"></qlt-slider-range>
``` 
