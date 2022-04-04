### Spinner | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-spinner, NgSpinner, Spinner)
- [ ] Directive ()
- [x] Service (SpinnerService)

#### app.module.ts

```typescript
import {SpinnerModule} from '@qrsln/lootstrap-angular/Libs/Spinner';

@NgModule({
  imports: [SpinnerModule, /*...*/],
})
```  

#### Usage

```html

<button class="Btn Btn-primary" (click)="Spinner(Patterns.Vortex,Overlay,Color,ExpireIn,Label)">Vortex</button>
<button class="Btn Btn-primary" (click)="Spinner(Patterns.VortexSqr,Overlay,Color,ExpireIn,Label)">Square</button>
<button class="Btn Btn-primary" (click)="Spinner(Patterns.Grow,Overlay,Color,ExpireIn,Label)">Grow</button>
<button class="Btn Btn-primary" (click)="Spinner(Patterns.Border,Overlay,Color,ExpireIn,Label)">Border</button>

```

```typescript

Colors = SpinnerColor;
Patterns = SpinnerPattern;

// constructor(private spinnerService: SpinnerService) { }

// Spinner(pattern: SpinnerPattern, Overlay: boolean, Color: SpinnerColor, expireIn: number, label: string): void {
Spinner(pattern, Overlay, Color, expireIn, label)
{
  this.SpinnerId = this.spinnerService.Show(pattern, Overlay, Color, expireIn, label);
  // setTimeout(() => this.spinnerService.Hide(this.SpinnerId), 5000);
}

```
