### Usage

> [![](https://img.shields.io/badge/Main-readme-white)](../../readme.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

## Pagination

Component (ql-pagination)  
~~Directive ()~~  
~~Service ()~~

#### app.module.ts

```typescript
import {PaginationModule} from '@qrsln/loot-box/Libs/Pagination';

@NgModule({
  imports: [PaginationModule, /*...*/],
})
```  

#### Usage

```typescript
// Pager: { CurrentPage: number, Items: { Id: number, Name: string }[] } = {CurrentPage: 1, Items: []};
// Items: { Id: number, Name: string }[] = [];

ngOnInit()
{
  // randomly generated N = 40 length array 0 <= A[N] <= 39
  this.Items = Array.from({length: 140}, () => {
    const num = Math.floor(Math.random() * 40);
    return {Id: num, Name: `Name ${num}`};
  });
}
```   

```html

<div class="card card-body">
  <h3 class="card-title">Pagination</h3>
  <ql-pagination [Items]="Items" [CurrentPage]="Pager.CurrentPage" [ItemPerPage]="5" [MaxSize]="6"
                 (PagedItems)="Pager.Items = $event"
                 (PageChanged)="Pager.CurrentPage=$event"></ql-pagination>
  <hr>
  <div ngFor="let item of Pager.Items">
    <strong>Id:</strong> {{item.Id}}
    <strong>Name:</strong>{{item.Name}}
  </div>
  <hr>
  <ql-pagination [Items]="Items" [CurrentPage]="Pager.CurrentPage" [ItemPerPage]="5" [MaxSize]="6"
                 (PagedItems)="Pager.Items = $event"
                 (PageChanged)="Pager.CurrentPage=$event"></ql-pagination>
</div>
```

