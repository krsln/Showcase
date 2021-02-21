### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../../readme.desc.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

### Notify

Component (ql-notify)  
~~Directive ()~~  
Service (NotifyService)

#### app.module.ts

```typescript
import {NotifyModule} from '@qrsln/loot-box/Libs/Notify';

@NgModule({
  imports: [NotifyModule, /*...*/],
})
```  

#### Usage

Layout Component

````angular2html
<!--Layout Component-->
<app-header></app-header>
<ql-notify></ql-notify>
<main>
  <router-outlet></router-outlet>
</main>
<app-footer></app-footer>
````

```typescript
// constructor( private notifyService: NotifyService ) {}

ngOnInit()
{
  this.notifyService.None('My test message', 5000, NotifyPosition.TopRight);
  this.notifyService.Success('My test message', 4000, NotifyPosition.TopRight);
  this.notifyService.Error('My test message', 5000, NotifyPosition.TopRight);
  this.notifyService.Info('My test message', 8000, NotifyPosition.TopRight);
  this.notifyService.Warning('My test message', 5000, NotifyPosition.TopRight);
}
```   
