### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../../readme.desc.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

### Timer

Component (lb-countdown)  
Directive (lbTimeAgo)  
~~Service ()~~

#### app.module.ts

```typescript
import {TimerModule} from '@qrsln/loot-box/Libs/Timers';

@NgModule({
  imports: [TimerModule, /*...*/],
})
```  

#### Usage

```html
<!--TimeAgo-->
<span class="badge badge-pill badge-danger ml-2" lbTimeAgo [Locale]="'tr-TR'" [Date]="testDate" [Suffix]="true"></span>

<!--Countdown -->
<!--Type: Text Detailed-->
<lb-countdown [Detailed]="{day:365, hrs:1, min:0, sec:5}"></lb-countdown>
<!--Type: Text Date-->
<lb-countdown [Date]="testDate"></lb-countdown>
<!--Type: Canvas Detailed-->
<lb-countdown [Type]="'Canvas'" [Detailed]="{day:365, hrs:1, min:0, sec:5}"></lb-countdown>
<!--Type: Canvas Date-->
<lb-countdown [Type]="'Canvas'" [Date]="testDate"></lb-countdown>
<!--Type: Svg Detailed-->
<lb-countdown [Type]="'Svg'" [Detailed]="{day:365, hrs:1, min:0, sec:5}"></lb-countdown>
<!--Type: Svg Date-->
<lb-countdown [Type]="'Svg'" [Date]="testDate"></lb-countdown>
``` 

```typescript
// Countdown
testDate = new Date(new Date().getTime() + 270 * 1000);
```   
