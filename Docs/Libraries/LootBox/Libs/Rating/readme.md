### Rating | Readme

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/usage-orange?style=for-the-badge)](usage.md)
[![](https://img.shields.io/badge/Demo-blue?style=for-the-badge)](https://krsln.github.io/Showcase/LootBox/Rating)

#### Dependencies

```shell
npm install --save @qrsln/lootstrap
npm install --save @qrsln/tooltip
```

#### Patterns
Star | Heart | Text | Emoji

#### Properties

| Name                          | Description                                                     |
|-------------------------------|-----------------------------------------------------------------|
| @Input() IsReadOnly: boolean  | Read Only :)                                                    |
| @Input() ShowTooltip: boolean | Show Tooltip                                                    |
| @Input() ShowValue: boolean   | Show rating Value                                               |
| @Input() Fraction: boolean    | allows to click half of unit of rate                            |
| @Input() Pattern: string      | Set the Pattern                                                 |
| @Input() BgColor: string      | Dynamic color (rgb, hex)                                        |
| @Input() Color: string        | Dynamic color (rgb, hex)                                        |
| @Input() MaxItem: number      | Max rating items                                                |
| @Input() Rate: number         | Current rating                                                  |
| @Output() rateChanged         | Event Emitter<number> ```(rateChanged)="rateChanged($event)"``` |

#### Screenshots
Default & Heart  
![](../../../../Images/LootBox/Rating_Star_2022-01-27.png "Rating_Star")
![](../../../../Images/LootBox/Rating_Heart_2022-01-27.png "Rating_Heart")
Text & Emoji  
![](../../../../Images/LootBox/Rating_Text_2022-01-27.png "Rating_Text")
![](../../../../Images/LootBox/Rating_Emoji_2022-01-27.png "Rating_Emoji")
