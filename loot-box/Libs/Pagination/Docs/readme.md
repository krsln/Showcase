### Readme

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../../readme.desc.md)
> [![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](usage.md)

### Pagination

[![Progress](https://img.shields.io/badge/Demo-✔✔☐☐☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/LootBox/Pagination)

#### Dependencies

```
npm install --save @fortawesome/fontawesome-free
``` 

#### Properties

Name | Description
 --- | ---  
Items: any[] | Items that you want to paginate
ItemPerPage:number | The number of items to display on each page. Default is 10
CurrentPage: number | The current (active) page number.
MaxSize:number | Defines the maximum number of page links to display. Default is 6
PageChanged: EventEmitter | Returns the current page
PagedItems: EventEmitter | Returns the current paged Items

#### Screenshots

![](Screenshots/Pagination.png "Pagination")
