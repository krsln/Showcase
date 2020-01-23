# Spinner

## Depends 
import {Guid} from '../../../../Utils/Guid';  


## Usage
Component (lb-spinner)  
Service (SpinnerService)  

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
  Spinner(overlay: boolean, msg: string, theme: string) {
    const spinnerId = this.spinnerService.Show({Theme: theme, Message: msg, Overlay: overlay, ExpireIn: 3000} as SpinnerRequest);
  }
``` 

## Notes
 
## Screenshots 
![](Screenshots/Spinner_2020-01-23.png "Spinner")

