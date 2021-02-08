### Readme

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../../readme.desc.md)
> [![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](usage.md)

### Timer

[![Progress](https://img.shields.io/badge/Demo-✔✔✔✔☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/LootBox/Timers)  

#### Dependencies
```
npm install --save 
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
@Input() Date: Date | -
@Input() Detailed: { day: number, hrs: number, min: number, sec: number }] | -

#### Screenshots
TimeAgo  
![](Screenshots/TimeAgo.png "TimeAgo")  
Countdown-Text    
![](Screenshots/Countdown-Text.png "Countdown-Text")  
Countdown-Svg  
![](Screenshots/Countdown-Svg.png "Countdown-Svg")  
Countdown-Canvas  
![](Screenshots/Countdown-Canvas.png "Countdown-Canvas")  
