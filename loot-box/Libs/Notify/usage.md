> [Main](../../../readme.md) / [Readme](readme.md) ~ **Usage**

## Notify
Component (lb-notify)  
Directive ()  
Service (NotifyService)  

#### Depends Local
inLayout: `<lb-notify></lb-notify>`  
```
scss  
@import "../../../../Assets/Styles/theme";  
@import "../../../../Assets/Styles/variables";   
@import "../../../../Assets/Styles/positioning";  
  
// import {Guid} from '../../../../Utils/Guid';  
// import {AnimOverlay, flyInOut, shrinkOut} from '../../../../Animations/index';  
```

#### Depends
`npm install bootstrap @fortawesome/fontawesome-free`  

```
alert, toast | "bootstrap": "^4.4.1",  
all | "@fortawesome/fontawesome-free": "^5.11.2"  
```

###### Html
_lb-notify Has to be placed in layout_
````
<app-header></app-header>
<lb-notify></lb-notify>
<main>
  <router-outlet></router-outlet>
</main>
<app-footer></app-footer>
````
###### Ts
```
constructor( private notifyService: NotifyService ) {}

ngOnInit() {
    this.notifyService.None('My test message', 5000, NotifyPosition.TopRight);
    this.notifyService.Success('My test message', 4000, NotifyPosition.TopRight);
    this.notifyService.Error('My test message', 5000, NotifyPosition.TopRight);
    this.notifyService.Info('My test message', 8000, NotifyPosition.TopRight);
    this.notifyService.Warning('My test message', 5000, NotifyPosition.TopRight);
}
```  
###### app.module.ts
```
import {NotifyModule} from '@qrsln/loot-box/Libs/Notify';

@NgModule({
  imports: [NotifyModule, ...],

```  
