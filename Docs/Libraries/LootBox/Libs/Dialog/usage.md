### Dialog | Usage

[![](https://img.shields.io/badge/Main-readme-white)](../../readme.md)
[![](https://img.shields.io/badge/readme-white)](readme.md)

- [x] Component (~~ql-dialog~~)
- [ ] Directive ()
- [x] Service (DialogService)

#### app.module.ts

```typescript
import {DialogModule} from '@qrsln/loot-box/Libs/Dialog';

@NgModule({
  imports: [DialogModule, /*...*/],
})
```  

#### Usage

```html

<div class="Border Rounded P-4 MY-2">
  <ql-dialog [Title]="'Title'" [Content]="'Content'" [Footer]="{Prompt:true}"></ql-dialog>
</div>

<h5>From DialogService</h5>
<div class="Border Rounded P-4 MY-2">
  <button class="Btn Btn-outline-primary ME-1" (click)="Prompt()">Prompt</button>
  <button class="Btn Btn-outline-primary ME-1" (click)="Prompt(true)">Prompt Forced</button>
  <button class="Btn Btn-outline-primary ME-1" (click)="GoToCart()">GoToCart</button>
</div>

```  

```typescript
// constructor(private dialogService: DialogService) {}

Prompt(isForced = false)
{
  this.dialogService.Prompt('Prompt Title', 'Prompt Body', isForced).then(res => {
    console.log('dialogService.Prompt', res);
  });
}

GoToCart()
{
  const content = `<div class="row">
      <div class="col-3">
        <p></p>
        <p class="text-center"><i class="fa-solid fa-cart-shopping fa-4x fa-spin"></i></p>
      </div>
      <div class="col-9">
        <p>Do you need more time to make a purchase decision?</p>
        <p>No pressure, your product will be waiting for you in the cart.</p>
      </div>
    </div>`;
  const url = '/Beta/PickerPax';
  this.dialogService.Redirect('Product in the cart', content, url, 'Go to cart').then();
}
```  
