### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../../readme.desc.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

### Dialog

~~Component (qlt-dialog)~~  
~~Directive ()~~  
Service (DialogService)

#### app.module.ts

```typescript
import {DialogModule} from '@qrsln/loot-box/Libs/Dialog';

@NgModule({
  imports: [DialogModule, /*...*/],
})
```  

#### Usage

```html

<div class="row">
  <div class="col-12 col-lg-6 mb-2">
    <button class="btn btn-outline-primary mr-1" (click)="Prompt()">Service Dialog Prompt</button>
    <button class="btn btn-outline-primary mr-1" (click)="GoToCart()">Service GoToCart</button>
  </div>
  <div class="col-12 col-lg-6 mb-2">
    <ql-dialog [Title]="'Title'" [Content]="'Content'" [Footer]="{Prompt:true}"></ql-dialog>
  </div>
</div>
```  

```typescript
// constructor(private dialogService: DialogService) {}

Prompt(isForced)
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
        <p class="text-center"><i class="fas fa-4x fa-shopping-cart fa-spin"></i></p>
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
