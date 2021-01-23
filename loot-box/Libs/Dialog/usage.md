### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.desc.md) [![](https://img.shields.io/badge/readme-white)](readme.md)

### Dialog

Component (lb-dialog)  
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

<button class="btn btn-outline-primary mr-1" (click)="Dialog()">Service Dialog Prompt</button>
<button class="btn btn-outline-primary mr-1" (click)="GoToCart()">Service GoToCart</button>
<!--or-->
<button class="btn btn-outline-primary mr-1" (click)="dialog.Show()">Dialog Prompt</button>
<lb-dialog [Content]="{Title: 'Title', Body: 'Body', Footer: {Prompt: true}}" #dialog
           (Response)="onDialogResponse($event)"></lb-dialog>

```  

```typescript
// constructor(private dialogService: DialogService) { }
Dialog()
{
  this.dialogService.Prompt('Prompt Title', 'Prompt Body').then(res => {
    console.log('dialogService.Prompt', res);
  });
}

GoToCart()
{
  const body = `<div class="row">
      <div class="col-3">
        <p></p>
        <p class="text-center"><i class="fas fa-4x fa-shopping-cart fa-spin"></i></p>
      </div>
      <div class="col-9">
        <p>Do you need more time to make a purchase decision?</p>
        <p>No pressure, your product will be waiting for you in the cart.</p>
      </div>
    </div>`;
  this.dialogService.Show({
    Title: 'Product in the cart',
    Body: body,
    Footer: {Redirect: {Text: 'Go to cart', Url: '/Sale/Cart'}}
  }).then();
}
```  

#### Usage Dynamic

```html

<button class="btn btn-outline-primary mr-1" (click)="dialogDynamic.Show()">Dialog Dynamic</button>

<lb-dialog [IsDynamic]="true" #dialogDynamic>
  <h5 class="dialog-title">Modal title</h5>
  <div class="dialog-body">
    <p>...</p>
  </div>
  <div class="dialog-footer">
    <button type="button" class="btn btn-outline-secondary" aria-label="Close" (click)="dialogDynamic.Hide()">Close
    </button>
    <button type="button" class="btn btn-primary">Save changes TODO</button>
  </div>
</lb-dialog>
``` 
