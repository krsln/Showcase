### Usage

> [![](https://img.shields.io/badge/Main-readme-white)](../../readme.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

### Spinner

Component (ql-spinner)  
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
<!--Through service-->
<button class="btn btn-dark m-1" (click)="Spinner(true,'overlay','Default',5000)">Default</button>
<button class="btn btn-dark m-1" (click)="Spinner(true,'overlay','Bootstrap',5000)">Bootstrap</button>
<button class="btn btn-dark m-1" (click)="Spinner(true,'overlay','SvgSnake',5000)">Svg-Snake</button>

<!--[Pattern]="'Default'"-->
<ql-spinner [Pattern]="'Default'" [Label]="'test'"></ql-spinner>
<!--[Pattern]="'Bootstrap'"-->
<ql-spinner [Pattern]="'Bootstrap'" [Label]="'test'"></ql-spinner>
<!--[Pattern]="'SvgSnake'"-->
<ql-spinner [Pattern]="'SvgSnake'" [Label]="'test'"></ql-spinner>
```
```typescript
// constructor(private spinnerService: SpinnerService) { }
Spinner(isOverlay, label, pattern, expired)
{
  const spinnerId = this.spinnerService.Show(isOverlay, expireIn, label, pattern);
}
```   
