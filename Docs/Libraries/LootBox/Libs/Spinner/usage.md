### Spinner | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-spinner)
- [ ] Directive ()
- [x] Service (SpinnerService)

#### app.module.ts

```typescript
import {SpinnerModule} from '@qrsln/loot-box/Libs/Spinner';

@NgModule({
  imports: [SpinnerModule, /*...*/],
})
```  

#### Usage

```html
<!--Through service-->
<button class="Btn Btn-dark M-1" (click)="Spinner(true,'overlay','Vortex',5000)">Vortex</button>
<button class="Btn Btn-dark M-1" (click)="Spinner(true,'overlay','Chase',5000)">Chase</button>
<button class="Btn Btn-dark M-1" (click)="Spinner(true,'overlay','Circling',5000)">Circling</button>
<button class="Btn Btn-dark M-1" (click)="Spinner(true,'overlay','Grow',5000)">Grow</button>
<button class="Btn Btn-dark M-1" (click)="Spinner(true,'overlay','Border',5000)">Border</button>
<button class="Btn Btn-dark M-1" (click)="Spinner(true,'overlay','Svg-1',5000)">Svg-1</button>
<button class="Btn Btn-dark M-1" (click)="Spinner(true,'overlay','Svg-2',5000)">Svg-2</button>

<ql-spinner [Pattern]="'Vortex'" [Label]="'Loading...'"></ql-spinner>
<ql-spinner [Pattern]="'Chase'" [Label]="'Loading...'"></ql-spinner>
<ql-spinner [Pattern]="'Circling'" [Label]="'Loading...'"></ql-spinner>
<ql-spinner [Pattern]="'Grow'" [Label]="'Loading...'"></ql-spinner>
<ql-spinner [Pattern]="'Border'" [Label]="'Loading...'"></ql-spinner>
<ql-spinner [Pattern]="'Svg-1'" [Label]="'Loading...'"></ql-spinner>
<ql-spinner [Pattern]="'Svg-2'" [Label]="'Loading...'"></ql-spinner>

```

```typescript
// constructor(private spinnerService: SpinnerService) { }
Spinner(isOverlay, label, pattern, expireIn)
{
  const spinnerId = this.spinnerService.Show(isOverlay, expireIn, label, pattern);
}

```   
