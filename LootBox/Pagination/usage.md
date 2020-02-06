## Pagination
Component (lb-pagination)  
Directive ()  
Service ()  

#### Depends Local

#### Depends
FontAwesome  
 ```
 <i class="fas fa-angle-double-left"></i>
 <i class="fas fa-angle-left"></i>
 <i class="fas fa-angle-right"></i>
 <i class="fas fa-angle-double-right"></i>
 ```
###### Html
```
  <div class="card card-body">
    <h3 class="card-title">Pagination</h3>
    <lb-pagination [Items]="Items" [CurrentPage]="Pager.CurrentPage" [ItemSize]="5" [DisplaySize]="6"
                   (PagedItems)="Pager.Items = $event" #pagination
                   (CurrentPageChanged)="Pager.CurrentPage=$event"></lb-pagination>
    <hr>
    <div *ngFor="let item of Pager.Items">
      {{item}}
    </div>
    <hr>
    <lb-pagination [Items]="Items" [CurrentPage]="Pager.CurrentPage" [ItemSize]="5" [DisplaySize]="6"
                   (PagedItems)="Pager.Items = $event"
                   (CurrentPageChanged)="Pager.CurrentPage=$event"></lb-pagination>
  </div>
```
###### Ts
```
  Pager = {CurrentPage: 1, Items: []};
  Items: any[]; 

  ngOnInit() {
    // randomly generated N = 40 length array 0 <= A[N] <= 39
    this.Items = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
  }
```  
###### app.module.ts
```
import {PaginationModule} from '@qrsln/loot-box/Libs/Pagination';

@NgModule({
  imports: [PaginationModule, ...],

```  
