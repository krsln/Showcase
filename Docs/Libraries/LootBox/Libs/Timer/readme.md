### Readme

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.md)
> [![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](usage.md)

### Timer

[![Progress](https://img.shields.io/badge/Demo-✔✔✔✔☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/LootBox/Timers)

#### Dependencies

```scss
@import "~@qrsln/lootstrap/scss/lootstrap";   
```

```
npm install --save @qrsln/lootstrap
```

###### Themes
**_Countdown_**: text | svg | canvas

#### Properties
_TimeAgo Directive_

Name | Description
 --- | ---  
@Input() Date: Date | -
@Input() Locale: string | Not working yet
@Input() Suffix: boolean | ago/later suffixes

_Countdown_

Name | Description
--- | ---  
@Input() Type: string | Text (default) Canvas Svg
@Input() Classes: string | Css classes
@Input() Date: Date | -
@Input() Detailed: { day: number, hrs: number, min: number, sec: number }] | -

#### Issues
Mobile browser: canvas size

#### Screenshots
TimeAgo  
![](../../../../Images/Screenshots/Timer_TimeAgo_2021-08-12.png "TimeAgo")  
Countdown-Text    
![](../../../../Images/Screenshots/Timer_Countdown-Text_2021-08-12.png "Countdown-Text")  
Countdown-Svg  
![](../../../../Images/Screenshots/Timer_Countdown-Svg_2021-08-12.png "Countdown-Svg")  
Countdown-Svg-new  
![](../../../../Images/Screenshots/Timer_Countdown-SvgNew_2021-08-12.png "Countdown-Svg-new")  
Countdown-Canvas  
![](../../../../Images/Screenshots/Timer_Countdown-Canvas_2021-08-12.png "Countdown-Canvas")  
