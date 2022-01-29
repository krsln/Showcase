### Timer | Usage

[![](https://img.shields.io/badge/Main-readme-white)](../../readme.md)
[![](https://img.shields.io/badge/readme-white)](readme.md)

- [x] Component (ql-countdown, ~~ql-countdown-canvas~~, ~~ql-countdown-svg~~)
- [x] Directive (qlTimeAgo, ~~qlCountdown~~)
- [ ] Service ()

#### app.module.ts

```typescript
import {TimerModule} from '@qrsln/loot-box/Libs/Timer';

@NgModule({
  imports: [TimerModule, /*...*/],
})
```  

#### Usage

```html
<!--TimeAgo-->
<span class="badge badge-pill badge-danger ml-2" qlTimeAgo [Locale]="'tr-TR'" [Date]="testDate" [Suffix]="true"></span>

<!--Countdown -->
<!--Type: Text Detailed-->
<ql-countdown [Detailed]="{day:365, hrs:1, min:0, sec:5}"></ql-countdown>
<!--Type: Text Date-->
<ql-countdown [Date]="testDate"></ql-countdown>
<!--Type: Canvas Detailed-->
<ql-countdown [Type]="'Canvas'" [Detailed]="{day:365, hrs:1, min:0, sec:5}"></ql-countdown>
<!--Type: Canvas Date-->
<ql-countdown [Type]="'Canvas'" [Date]="testDate"></ql-countdown>
<!--Type: Svg Detailed-->
<ql-countdown [Type]="'Svg'" [Detailed]="{day:365, hrs:1, min:0, sec:5}"></ql-countdown>
<!--Type: Svg Date-->
<ql-countdown [Type]="'Svg'" [Date]="testDate"></ql-countdown>
``` 

```typescript
// Countdown
testDate = new Date(new Date().getTime() + 270 * 1000);
```   
