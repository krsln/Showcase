### Notify | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

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

Show()
{
  const notifyItem = {
    Theme: NotifyTheme.None, IconSize: NotifyIconSize.Large, Anim: NotifyAnim.Grow,
    Message: '', Title: '', ExpireIn: 4000,
    Icon: true, Countdown: true, Dismissible: true,
    ProgressBar: true, Titled: false, Outlined: false, Gradient: false,
  } as NotifyItem;
  
  // Show ==> Customize Notifications
  this.notifyService.Show(+this.Style, notifyItem, +this.Position);
}


Defaults()
{
  this.notifyService.None('My None message', 5000, NotifyPosition.TopCenter);
  this.notifyService.Success('My Success message', 4000, NotifyPosition.TopCenter);
  this.notifyService.Error('My Error message', 5000, NotifyPosition.TopCenter);
  this.notifyService.Info('My Info message', 8000, NotifyPosition.TopCenter);
  this.notifyService.Warning('My Warning message', 5000, NotifyPosition.TopCenter);
}
```   
