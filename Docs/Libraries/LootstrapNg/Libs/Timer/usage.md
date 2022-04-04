### Timer | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-countdown, NgCountdown, Countdown)
- [x] Component (ql-chronometer, NgChronometer, NgStopwatch, Chronometer, Stopwatch)
- [x] Directive ([qlTimer], [Timer])
- [ ] Service ()

#### app.module.ts

```typescript
import {TimerModule} from '@qrsln/lootstrap-angular/Libs/Timer';

@NgModule({
  imports: [TimerModule, /*...*/],
})
```  

#### Usage

```html

<!--Countdown-->
<Countdown [Date]="countdown[0]"></Countdown>
<Countdown ClassName="Fg-yellow" [Date]="countdown[1]"></Countdown>
<Countdown ClassName="Fg-green" [Date]="countdown[2]"></Countdown>

```

```html

<!--Stopwatch / Chronometer-->
<Stopwatch></Stopwatch>
<Chronometer ClassName="Fg-orange"></Chronometer>

```

```typescript

Now = Date.now();
countdown = [
  new Date(new Date().getTime() + this.minuteInMs * 45),  // 45min later
  new Date(new Date().getTime() + this.hourInMs),         // 1H later
  new Date(new Date().getTime() + this.hourInMs * 24),    // 24H later
];

```
