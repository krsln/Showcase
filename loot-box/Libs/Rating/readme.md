### Readme

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.desc.md) [![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](usage.md)

### Rating

[![Progress](https://img.shields.io/badge/Demo-✔✔✔✔☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/LootBox/Rating)  
![](https://github.com/krsln/NgLootBox/raw/master/loot-box/Libs/Rating/Screenshots/Rating.png "Rating")

#### Dependencies

```scss
 @import "./../Assets/Styles/variables";
```

```
npm install --save @qrsln/tooltip
import {Guid} from '../../../../Utils/Guid';  
```

###### Themes

star (def) | heart | text | emoji

#### Features

Params | desc
 --- | ---  
[color] | rgb, hex
[max] | number: Items Count
[allowFraction] | true/false Can select half of item
[theme] | star (def) / heart / text / emoji
[showText] | true/false Shows selected count
[showTooltip] | true/false Shows Tooltip
(rateChanged) | event emitter ```(rateChanged)="rateChanged($event)"```

