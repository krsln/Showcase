### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../../readme.desc.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

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
<!--Pattern: Star (Default) ReadOnly ShowValue-->
<lb-rating [ShowValue]="true" Rate="7.8" [MaxItem]="10" [IsReadOnly]="true"
           (rateChanged)="rateChanged($event)"></lb-rating>
<!--Pattern: Star (Default) Fraction Color ShowValue-->
<lb-rating [ShowValue]="true" [Color]="'red'" [Rate]="3.5" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></lb-rating>
<!--Pattern: Star (Default) Fraction Color Tooltip-->
<lb-rating [ShowTooltip]="true" [Color]="'blue'" [MaxItem]="3" [Rate]="2" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></lb-rating>

<!--Pattern: Heart Fraction ShowValue-->
<lb-rating [ShowValue]="true" [Pattern]="'Heart'" [Rate]="3.5" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></lb-rating>
<!--Pattern: Heart Fraction Color-->
<lb-rating [Pattern]="'Heart'" [Color]="'purple'" [Rate]="3.5" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></lb-rating>

<!--[Pattern]="'Text'" Fraction ShowValue-->
<lb-rating [ShowValue]="true" [Pattern]="'Text'" [Rate]="3.5" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></lb-rating>
<!--[Pattern]="'Text'" Fraction Color-->
<lb-rating [Pattern]="'Text'" [Color]="'blue'" [Rate]="3.5" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></lb-rating>

<!--[Pattern]="'Emoji'" ReadOnly-->
<lb-rating [IsReadOnly]="true" [Pattern]="'Emoji'" [Rate]="3" (rateChanged)="rateChanged($event)"></lb-rating>
<!--[Pattern]="'Emoji'" Fraction Tooltip-->
<lb-rating [ShowTooltip]="true" [Pattern]="'Emoji'" [Rate]="3" (rateChanged)="rateChanged($event)"></lb-rating>

``` 
