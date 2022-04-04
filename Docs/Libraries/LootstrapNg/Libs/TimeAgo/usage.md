### TimeAgo | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [ ] Component ()
- [x] Directive ([qlTimeAgo], [TimeAgo])
- [x] Pipe (TimeAgo)
- [ ] Service ()

#### app.module.ts

```typescript
import {TimeAgoModule} from '@qrsln/lootstrap-angular/Libs/TimeAgo';

@NgModule({
  imports: [TimeAgoModule, /*...*/],
})
```  

#### Usage

```html

<!--TimeAgo - Directive-->
<div ngFor="let date of dates; let index=index;">
  <span class="Badge Bg-success" TimeAgo [Date]="date" [Live]="index==0" [Locale]="'en'"></span>
</div>
```

```html

<!--TimeAgo - Pipe-->
<span class="Badge Bg-info ME-2">{/{dates[0] | TimeAgo:true:''}/}</span>
<span class="Badge Bg-info ME-2">{/{dates[0] | TimeAgo:true:'tr'}/}</span>
<span class="Badge Bg-danger ME-2" ngFor="let date of dates; let index=index;">{/{date | TimeAgo}/}</span>

```

```typescript

dates = [
  new Date(),
  new Date(new Date().getTime() - this.minuteInMs * 45),  // 45min ago
  new Date(new Date().getTime() - this.hourInMs),         // 1H ago
  new Date(new Date().getTime() - this.hourInMs * 24),    // 24H ago
  new Date(new Date().getTime() - this.dayInMs * 21),     // 3W ago
  new Date(new Date().getTime() - this.monthInMs * 6),    // 6M ago
  new Date(new Date().getTime() - this.yearInMs * 2),     // 2Y ago
  new Date(new Date().getTime() + this.hourInMs * 8),     // 8H later
];

```
