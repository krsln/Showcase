### Rating | Usage

[![](https://img.shields.io/badge/Main-readme-white)](../../readme.md)
[![](https://img.shields.io/badge/readme-white)](readme.md)

- [x] Component (ql-rating)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {RatingModule} from '@qrsln/loot-box/Libs/Rating';

@NgModule({
  imports: [RatingModule, /*...*/],
})
```  

#### Usage

```html

<ql-rating [ShowValue]="true" [Rate]="7.8" [MaxItem]="10" [IsReadOnly]="true"
           (rateChanged)="rateChanged($event)"></ql-rating>
``` 

```typescript
rateChanged($event)
{
  console.log($event);
}
``` 
