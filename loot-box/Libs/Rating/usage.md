### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.desc.md) [![](https://img.shields.io/badge/readme-white)](readme.md)

### Rating
Component (lb-rating)  
~~Directive ()~~  
~~Service ()~~ 
  
#### app.module.ts

```typescript
import {RatingModule} from '@qrsln/loot-box/Libs/Rating';

@NgModule({
  imports: [RatingModule, /*...*/],
})
```  

#### Usage
```html
<div class="row">
 <lb-rating class="col-4" rate="7.8" [max]="10" [showText]="true" [readOnly]="true" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-4" [color]="'red'" [rate]="3.5" [showText]="true" [allowFraction]="true" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-4" [theme]="'heart'" [rate]="3.5" [showText]="true" [allowFraction]="true" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-6" [theme]="'text'" [rate]="3" [showText]="true" [allowFraction]="true" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-6" [color]="'purple'" [theme]="'text'" [rate]="3" [showText]="true" [allowFraction]="true" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-6" [theme]="'emoji'" [rate]="3" [showText]="false" [allowFraction]="false" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-6" [color]="'blue'" [rate]="3.5" [showText]="false" [allowFraction]="true" (rateChanged)="rateChanged($event)"></hell-rating>
</div>
``` 
