# Timers (✓✓✓✓)

## Depends 
**TimeAgo**: none  
**Countdown**: none  

## Usage
Directive (lbTimeAgo)  
Component (lb-countdown)  

###### Html
```
TimeAgo
<div lbTimeAgo [locale]="'tr-TR'" [date]="testDate"></div>

Countdown 
[theme]="'text|svg|canvas'" [Options]="{...}"

Countdown 'text'
<lb-countdown class="col-5" [config]="{ lDate:{day:365,hrs:1, min:0, sec:5} }"></hell-countdown>
<lb-countdown class="col-3" [config]="{ until:testDate }"></hell-countdown>

Countdown 'svg'
<lb-countdown class="col-5" [theme]="'svg'" [config]="{ lDate:{day:365,hrs:1, min:0, sec:5} }"></hell-countdown>
<lb-countdown class="col-3" [theme]="'svg'" [config]="{ until:testDate }"></hell-countdown>

Countdown 'canvas'
<lb-countdown class="col-5" [theme]="'canvas'" [config]="{ lDate:{day:365,hrs:1, min:0, sec:5} }"></hell-countdown>
<lb-countdown class="col-3" [theme]="'canvas'" [config]="{ until:testDate }"></hell-countdown>
```
###### Ts
```
Countdown
testDate = new Date(new Date().getTime() + 270 * 1000);

```

## Notes
``` 
const dTime = new Date().getTime();
check(new Date()); // "now"
check(dTime + 50 * 1000); // "49s later"
check(dTime - 60 * 1000); // "1m"
check(dTime - 2 * 60 * 60 * 1000); // "2H"
check(dTime - 24 * 60 * 60 * 1000); // "Jul 30"
check(dTime - 100 * 24 * 60 * 60 * 1000); // "30 Jun 2018"
```

https://www.jqueryscript.net/demo/Slick-Circular-jQuery-Countdown-Plugin-Classy-Countdown/

TODO: locale

IE & Edge browser svg  dominant-baseline="central" doesnt work >> no support yet

# Screenshots 
![](Screenshots/Timer.png) 
