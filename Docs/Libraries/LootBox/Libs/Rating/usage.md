### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

### Rating

Component (ql-rating)  
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
<ql-rating [ShowValue]="true" Rate="7.8" [MaxItem]="10" [IsReadOnly]="true"
           (rateChanged)="rateChanged($event)"></ql-rating>
<!--Pattern: Star (Default) Fraction Color ShowValue-->
<ql-rating [ShowValue]="true" [Color]="'red'" [Rate]="3.5" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></ql-rating>
<!--Pattern: Star (Default) Fraction Color Tooltip-->
<ql-rating [ShowTooltip]="true" [Color]="'blue'" [MaxItem]="3" [Rate]="2" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></ql-rating>

<!--Pattern: Heart Fraction ShowValue-->
<ql-rating [ShowValue]="true" [Pattern]="'Heart'" [Rate]="3.5" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></ql-rating>
<!--Pattern: Heart Fraction Color-->
<ql-rating [Pattern]="'Heart'" [Color]="'purple'" [Rate]="3.5" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></ql-rating>

<!--[Pattern]="'Text'" Fraction ShowValue-->
<ql-rating [ShowValue]="true" [Pattern]="'Text'" [Rate]="3.5" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></ql-rating>
<!--[Pattern]="'Text'" Fraction Color-->
<ql-rating [Pattern]="'Text'" [Color]="'blue'" [Rate]="3.5" [Fraction]="true"
           (rateChanged)="rateChanged($event)"></ql-rating>

<!--[Pattern]="'Emoji'" ReadOnly-->
<ql-rating [IsReadOnly]="true" [Pattern]="'Emoji'" [Rate]="3" (rateChanged)="rateChanged($event)"></ql-rating>
<!--[Pattern]="'Emoji'" Fraction Tooltip-->
<ql-rating [ShowTooltip]="true" [Pattern]="'Emoji'" [Rate]="3" (rateChanged)="rateChanged($event)"></ql-rating>

``` 
