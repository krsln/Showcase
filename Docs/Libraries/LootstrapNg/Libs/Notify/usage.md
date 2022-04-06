### Notify | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-notify, NgNotify, Notify)
- [ ] Directive ()
- [x] Service (NotifyService)

#### app.module.ts

```typescript
import {NotifyModule} from '@qrsln/lootstrap-angular/Libs/Notify';

@NgModule({
  imports: [NotifyModule, /*...*/],
})
```  

#### Usage

```html

<button class="Btn Btn-sm Btn-primary" (click)="Show(Type,Position,SetItem(Theme))">Show</button>

```

```typescript

// constructor(private notifyService: NotifyService) {}

Show = (Type: NotifyType, Position: NotifyPosition, Item: NotifyItem) => this.notifyService.Show(Type, Position, Item);

// SetItem(theme: NotifyTheme = this.Theme, withFaIcons: boolean = false): NotifyItem {
SetItem(theme, withFaIcons)
{
  return {
    Content: this.Content, Theme: +theme, Anim: +this.Anim,
    Icon: this.ShowIcon ? withFaIcons ? this.SetIcon(this.FaTest(theme)) : this.SetIcon('') : undefined,
    Countdown: {ExpireIn: this.ExpireIn, Timer: this.Timer, ProgressBar: this.ProgressBar},
    ShowTitle: this.Titled, Outlined: this.Outlined, Gradient: this.Gradient, Dismissible: this.Dismissible
  };
}

```

> Themes (defaults)

```html

<button class="Btn Btn-light" (click)="None({Title: null, Message: 'My None message'})">None</button>
<button class="Btn Btn-success" (click)="Success({Title: null, Message: 'My Success message'})">Success</button>
<button class="Btn Btn-error" (click)="Error({Title: null, Message: 'My Error message'})">Error</button>
<button class="Btn Btn-info" (click)="Info({Title: null, Message: 'My Info message'})">Info</button>
<button class="Btn Btn-warning" (click)="Warning({Title: null, Message: 'My Warning message'})">Warning</button>

```

```typescript

None = (Content: NotifyContent) => this.notifyService.None(Content);
Success = (Content: NotifyContent) => this.notifyService.Success(Content);
Error = (Content: NotifyContent) => this.notifyService.Error(Content);
Info = (Content: NotifyContent) => this.notifyService.Info(Content);
Warning = (Content: NotifyContent) => this.notifyService.Warning(Content);

```

> Customized with Fa Icons

```html

<button class="Btn Btn-sm Btn-danger"
        (click)="Iconic(0,1,2,Content,SetIcon('<i class=\'fa-brands fa-youtube\'></i>'))">
  Youtube-ish
</button>

```

```typescript

Content: NotifyContent = {Title: 'Title', Message: 'My message default'};

Iconic = (Type: NotifyType, Position: NotifyPosition,
          Theme: NotifyTheme, Content: NotifyContent, Icon: NotifyIcon, ExpireIn: number = 4000) => this.notifyService.Iconic(Type, Position, Theme, Content, Icon, ExpireIn);

SetIcon(innerHtml)
{
  return {Size: +this.IconSize, InnerHtml: innerHtml};
}

```
