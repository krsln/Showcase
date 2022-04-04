### Pagination | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-pagination, NgPagination, Pagination)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {PaginationModule} from '@qrsln/lootstrap-angular/Libs/Pagination';

@NgModule({
  imports: [PaginationModule, /*...*/],
})
```  

#### Usage

```html

<Pagination [Items]="Items" [CurrentPage]="Pager.CurrentPage" [ItemPerPage]="4" [MaxSize]="7"
            (PagedItems)="Pager.Items = $event" (PageChanged)="Pager.CurrentPage=$event"></Pagination>

<div class="Row">
  <div class="Col-12 Col-lg-3" ngFor="let item of Pager.Items">
    <div class="Card Card-body">
      <h5 class="Card-title">Id: {/{item.Id}/}</h5>
      <p class="Card-text">{/{item.Name}/}</p>
    </div>
  </div>
</div>

<Pagination [Shape]="'Srq'" [Items]="Items" [CurrentPage]="Pager.CurrentPage" [ItemPerPage]="4" [MaxSize]="7"
            (PagedItems)="Pager.Items = $event" (PageChanged)="Pager.CurrentPage=$event"></Pagination>
```

```html

<!--With custom (Fa) icons-->
<Pagination [Items]="Items" [CurrentPage]="Pager.CurrentPage" [ItemPerPage]="4" [MaxSize]="7"
            (PagedItems)="Pager.Items = $event" (PageChanged)="Pager.CurrentPage=$event">

  <div class="P-icon-start"><i class="fa-solid fa-angles-left"></i></div>
  <div class="P-icon-left"><i class="fa-solid fa-angle-left"></i></div>
  <div class="P-icon-right"><i class="fa-solid fa-angle-right"></i></div>
  <div class="P-icon-end"><i class="fa-solid fa-angles-right"></i></div>

</Pagination>

```

```typescript

// Items: { Id: number, Name: string }[] = [];
// Pager: { CurrentPage: number, Items: { Id: number, Name: string }[] } = {CurrentPage: 1, Items: []};

ngOnInit()
{
  // randomly generated N = 40 length array 0 <= A[N] <= 39
  this.Items = Array.from({length: 140}, () => {
    const num = Math.floor(Math.random() * 40);
    return {Id: num, Name: `Name ${num}`};
  });
}

```
