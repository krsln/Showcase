### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.desc.md) [![](https://img.shields.io/badge/readme-white)](readme.md)

### Spinner
Component (lb-spinner)  
~~Directive ()~~  
Service (SpinnerService)  
 
#### app.module.ts

```typescript
import {SpinnerModule} from '@qrsln/loot-box/Libs/Spinner';

@NgModule({
  imports: [SpinnerModule, /*...*/],
})
```  

#### Usage
```html
<div>
  <button class="btn btn-outline-dark m-1" (click)="Spinner(true,'overlay','default')">Spinner default</button>
  <button class="btn btn-outline-dark m-1" (click)="Spinner(true,'overlay','bootstrap')">Spinner bootstrap</button>
</div>
<lb-spinner [Message]="'test'" [Theme]="'default'"></lb-spinner>
<lb-spinner [Message]="'test'" [Theme]="'bootstrap'"></lb-spinner>
``` 
```typescript
  //constructor(private spinnerService: SpinnerService, ...) {}

  Spinner(overlay, msg, theme) 
  {
    const spinnerId = this.spinnerService.Show({Theme: theme, Message: msg, Overlay: overlay, ExpireIn: 3000} as SpinnerRequest);
  }
```   
