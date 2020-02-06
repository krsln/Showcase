> [Main](../../../readme.md) / [Readme](readme.md) ~ **Usage**

## Spinner
Component (lb-spinner)  
Directive ()  
Service (SpinnerService)  

#### Depends Local
// import {Guid} from '../../../../Utils/Guid';  

## Depends

###### Html
```
<div>
  <button class="btn btn-outline-dark m-1" (click)="Spinner(true,'overlay','default')">Spinner default</button>
  <button class="btn btn-outline-dark m-1" (click)="Spinner(true,'overlay','bootstrap')">Spinner bootstrap</button>
</div>
<lb-spinner [Message]="'test'" [Theme]="'default'"></lb-spinner>
<lb-spinner [Message]="'test'" [Theme]="'bootstrap'"></lb-spinner>
```
###### Ts
```
  constructor(private spinnerService: SpinnerService, ...) {
  }

  Spinner(overlay: boolean, msg: string, theme: string) {
    const spinnerId = this.spinnerService.Show({Theme: theme, Message: msg, Overlay: overlay, ExpireIn: 3000} as SpinnerRequest);
  }
```  
###### app.module.ts
```
import {SpinnerModule} from '@qrsln/loot-box/Libs/Spinner';

@NgModule({
  imports: [SpinnerModule, ...],

```  
