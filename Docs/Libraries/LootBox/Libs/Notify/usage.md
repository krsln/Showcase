### Notify | Usage

[![](https://img.shields.io/badge/Main-readme-white)](../../readme.md)
[![](https://img.shields.io/badge/readme-white)](readme.md)

- [x] Component (ql-notify)
- [ ] Directive ()
- [x] Service (NotifyService)

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
<!--Layouts Component-->
<ql-notify></ql-notify>
<main>
  <router-outlet></router-outlet>
</main>
````

```typescript
// constructor( private notifyService: NotifyService ) {}

ngOnInit()
{
  this.notifyService.None('My test message', 5000, NotifyPosition.TopCenter);
  this.notifyService.Success('My test message', 4000, NotifyPosition.TopCenter);
  this.notifyService.Error('My test message', 5000, NotifyPosition.TopCenter);
  this.notifyService.Info('My test message', 8000, NotifyPosition.TopCenter);
  this.notifyService.Warning('My test message', 5000, NotifyPosition.TopCenter);
}
```   
