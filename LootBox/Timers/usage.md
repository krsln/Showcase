## Timers
Component (lb-countdown)  
Directive (lbTimeAgo)  
Service ()  

#### Depends Local

#### Depends

###### Themes
**_Countdown_**: text | svg | canvas

###### Html
```
TimeAgo
<div lbTimeAgo [locale]="'tr-TR'" [date]="testDate"></div>

Countdown 
'text'
<lb-countdown class="col-5" [config]="{ lDate:{day:365,hrs:1, min:0, sec:5} }"></hell-countdown>
<lb-countdown class="col-3" [config]="{ until:testDate }"></hell-countdown>
'svg'
<lb-countdown class="col-5" [theme]="'svg'" [config]="{ lDate:{day:365,hrs:1, min:0, sec:5} }"></hell-countdown>
<lb-countdown class="col-3" [theme]="'svg'" [config]="{ until:testDate }"></hell-countdown>
'canvas'
<lb-countdown class="col-5" [theme]="'canvas'" [config]="{ lDate:{day:365,hrs:1, min:0, sec:5} }"></hell-countdown>
<lb-countdown class="col-3" [theme]="'canvas'" [config]="{ until:testDate }"></hell-countdown>
```
###### Ts
```
Countdown
testDate = new Date(new Date().getTime() + 270 * 1000);
```  
###### app.module.ts
```
import {TimersModule} from '@qrsln/loot-box/Libs/Timers';

@NgModule({
  imports: [TimersModule, ...],

```  
