### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.desc.md) [![](https://img.shields.io/badge/readme-white)](readme.md)

### Timers

Component (lb-countdown)  
Directive (lbTimeAgo)  
~~Service ()~~

#### app.module.ts

```typescript
import {TimersModule} from '@qrsln/loot-box/Libs/Timers';

@NgModule({
  imports: [TimersModule, /*...*/],
})
```  

#### Usage

```html
<!--TimeAgo-->
<div lbTimeAgo [locale]="'tr-TR'" [date]="testDate"></div>

<!--Countdown -->
<!--'text'-->
<lb-countdown class="col-5" [config]="{ lDate:{day:365,hrs:1, min:0, sec:5} }"></hell-countdown>
<lb-countdown class="col-3" [config]="{ until:testDate }"></hell-countdown>
<!--'svg'-->
<lb-countdown class="col-5" [theme]="'svg'" [config]="{ lDate:{day:365,hrs:1, min:0, sec:5} }"></hell-countdown>
<lb-countdown class="col-3" [theme]="'svg'" [config]="{ until:testDate }"></hell-countdown>
<!--'canvas'-->
<lb-countdown class="col-5" [theme]="'canvas'"
            [config]="{ lDate:{day:365,hrs:1, min:0, sec:5} }"></hell-countdown>
<lb-countdown class="col-3" [theme]="'canvas'" [config]="{ until:testDate }"></hell-countdown>
``` 

```typescript
// Countdown
testDate = new Date(new Date().getTime() + 270 * 1000);
```   
