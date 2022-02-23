## Pagination | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-pagination)
- [ ] Directive ()
- [ ] Service ()

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
<div class="Border Rounded P-4 MY-2">
  <ql-pagination [Items]="Items" [CurrentPage]="Pager.CurrentPage" [ItemPerPage]="5" [MaxSize]="7"
                 (PagedItems)="Pager.Items = $event"
                 (PageChanged)="Pager.CurrentPage=$event"></ql-pagination>
  <div class="Bg-light MX-5 PX-2" ngFor="let item of Pager.Items">
    <strong>Id:</strong> {{item.Id}}
    <strong>Name:</strong>{{item.Name}}
  </div>
  <ql-pagination [Items]="Items" [CurrentPage]="Pager.CurrentPage" [ItemPerPage]="5" [MaxSize]="7"
                 (PagedItems)="Pager.Items = $event"
                 (PageChanged)="Pager.CurrentPage=$event"></ql-pagination>
</div>
```

