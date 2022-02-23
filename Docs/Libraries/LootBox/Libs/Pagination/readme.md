### Pagination | Readme

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/usage-orange?style=for-the-badge)](usage.md)
[![](https://img.shields.io/badge/Demo-blue?style=for-the-badge)](https://krsln.github.io/Showcase/LootBox/Pagination)

#### Dependencies

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

![](../../../../Images/LootBox/Pagination_2022-01-27.png "Pagination")
