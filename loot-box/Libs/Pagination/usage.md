### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.desc.md) [![](https://img.shields.io/badge/readme-white)](readme.md)

## Pagination

Component (lb-pagination)  
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
 
```html

<div class="card card-body">
  <h3 class="card-title">Pagination</h3>
  <lb-pagination [Items]="Items" [CurrentPage]="Pager.CurrentPage" [ItemSize]="5" [DisplaySize]="6"
                 (PagedItems)="Pager.Items = $event" #pagination
                 (CurrentPageChanged)="Pager.CurrentPage=$event"></lb-pagination>
  <hr>
  <div ngFor="let item of Pager.Items">
    {{item}}
  </div>
  <hr>
  <lb-pagination [Items]="Items" [CurrentPage]="Pager.CurrentPage" [ItemSize]="5" [DisplaySize]="6"
                 (PagedItems)="Pager.Items = $event"
                 (CurrentPageChanged)="Pager.CurrentPage=$event"></lb-pagination>
</div>
```

```typescript
// Pager = {CurrentPage: 1, Items: []};
// Items: any[];
ngOnInit()
{
  // randomly generated N = 40 length array 0 <= A[N] <= 39
  this.Items = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
}
```   
