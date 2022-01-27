### Readme

> [![](https://img.shields.io/badge/Main-readme-white)](../../readme.md)
> [![](https://img.shields.io/badge/usage-orange)](usage.md)

### Pagination

[![Progress](https://img.shields.io/badge/Demo-✔✔☐☐☐-blue)](https://krsln.github.io/NgLootBox/LootBox/Pagination)

#### Dependencies
@import "~@qrsln/lootstrap/scss/lootstrap";

```shell
npm install --save @qrsln/lootstrap
npm install @fortawesome/fontawesome-free 
``` 

#### Properties

| Name                      | Description                                                       |
|---------------------------|-------------------------------------------------------------------|
| Items: any[]              | Items that you want to paginate                                   |
| ItemPerPage:number        | The number of items to display on each page. Default is 10        |
| CurrentPage: number       | The current (active) page number.                                 |
| MaxSize:number            | Defines the maximum number of page links to display. Default is 7 |
| PageChanged: EventEmitter | Returns the current page                                          |
| PagedItems: EventEmitter  | Returns the current paged Items                                   |

#### Screenshots

![](../../../../Images/LootBox/Pagination_2022-01-27.png "Carousel")
