### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../../readme.desc.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

### Spinner

Component (lb-spinner)  
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
<lb-spinner [Pattern]="'Default'" [Label]="'test'"></lb-spinner>
<!--[Pattern]="'Bootstrap'"-->
<lb-spinner [Pattern]="'Bootstrap'" [Label]="'test'"></lb-spinner>
<!--[Pattern]="'SvgSnake'"-->
<lb-spinner [Pattern]="'SvgSnake'" [Label]="'test'"></lb-spinner>
```
```typescript
// constructor(private spinnerService: SpinnerService) { }
Spinner(isOverlay, label, pattern, expired)
{
  const spinnerId = this.spinnerService.Show(isOverlay, expireIn, label, pattern);
}
```   
