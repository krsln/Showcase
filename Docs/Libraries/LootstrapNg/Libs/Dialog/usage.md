### Dialog | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-dialog, NgDialog, Dialog)
- [ ] Directive ()
- [x] Service (DialogService)

#### app.module.ts

```typescript
import {DialogModule} from '@qrsln/lootstrap-angular/Libs/Dialog';

@NgModule({
  imports: [DialogModule, /*...*/],
})
```  

#### Usage

```html

<NgDialog [Content]="{Title: 'Product in the cart', InnerHtml: cartHtml}"
          [Footer]="{Prompt: false, Redirect: {Href:'', Label:'Go to cart'}}"></NgDialog>

```

```html

<button class="Btn Btn-outline-primary" (click)="Prompt()">Prompt</button>
<button class="Btn Btn-outline-primary" (click)="Prompt(true)">Prompt Forced</button>
<button class="Btn Btn-outline-primary ME-1" (click)="GoToCart()">GoToCart</button>

```

```typescript

cartHtml = `
<div class="Row">
    <div class="Col-3">
      <p class="Text-center MT-3"><i class="fa-solid fa-cart-shopping fa-4x fa-spin"></i></p>
    </div>
    <div class="Col-9">
      <p>Do you need more time to make a purchase decision?</p>
      <p>No pressure, your product will be waiting for you in the cart.</p>
    </div>
  </div>
`;

// constructor(private dialogService: DialogService) { }

Prompt(Forced)
{
  this.dialogService.Prompt({Title: 'Prompt Title', InnerHtml: 'Prompt Body'}, Forced).then(res => {
    console.log('dialogService.Prompt', res);
  });
}

GoToCart()
{
  const href = '/Lootstrap/Components/Dialogs';
  this.dialogService.Redirect({Title: 'Product in the cart', InnerHtml: this.cartHtml}, href, 'Go to cart', false)
    .subscribe((res: DialogResponse) => console.log('Redirect', res));
}

```
