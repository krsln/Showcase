### Timer | Readme

[![](https://img.shields.io/badge/Main-readme-white)](../../readme.md)
[![](https://img.shields.io/badge/usage-orange)](usage.md)
[![Progress](https://img.shields.io/badge/Demo-blue)](https://krsln.github.io/Showcase/LootBox/Timer)

#### Dependencies

```shell
npm install --save @qrsln/lootstrap
```

###### Themes
**_Countdown_**: text | svg | canvas

#### Properties
_TimeAgo Directive_

| Name                     | Description        |
|--------------------------|--------------------|
| @Input() Date: Date      | -                  |
| @Input() Locale: string  | Not working yet    |
| @Input() Suffix: boolean | ago/later suffixes |

_Countdown_

| Name                                                                       | Description               |
|----------------------------------------------------------------------------|---------------------------|
| @Input() Type: string                                                      | Text (default) Canvas Svg |
| @Input() Classes: string                                                   | Css classes               |
| @Input() Date: Date                                                        | -                         |
| @Input() Detailed: { day: number, hrs: number, min: number, sec: number }] | -                         |
 
#### Screenshots
TimeAgo  
![](../../../../Images/LootBox/Timer_TimeAgo_2022-01-27.png "TimeAgo")  
Countdown-Text    
![](../../../../Images/LootBox/Timer_Countdown_Text_2022-01-27.png "Countdown-Text")  
Countdown-Svg  
![](../../../../Images/LootBox/Timer_Countdown_Svg_2022-01-27.png "Countdown-Svg")  
Countdown-Svg-new  
![](../../../../Images/LootBox/Timer_Countdown_Svg-new_2022-01-27.png "Countdown-Svg-new")  
Countdown-Canvas  
![](../../../../Images/LootBox/Timer_Countdown_Canvas_2022-01-27.png "Countdown-Canvas")  
