### Tooltip | Usage

[![Demo](https://img.shields.io/badge/Demo-blue?style=for-the-badge)](https://krsln.github.io/Showcase/Libraries/Tooltip)
[![](https://img.shields.io/badge/Main-projects-white?style=for-the-badge)](../projects.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (~~ql-tooltip~~)
- [x] Directive (qlTooltip)
- [ ] Service ()

#### app.module.ts

```typescript
import {TooltipModule} from '@qrsln/tooltip';

@NgModule({
  imports: [TooltipModule, /*...*/],
})
```  

#### Usage
```html
<div class="Border Rounded P-4 MY-2">
  <button class="Btn Btn-outline-dark ME-2" qlTooltip="Tooltip on Top" placement="top" [outline]="true" [duration]="500" [rounded]="true" [theme]="'primary'"> Primary </button>
  <button class="Btn Btn-outline-dark ME-2" qlTooltip="Tooltip on Top" placement="top" [outline]="true" [duration]="500" [rounded]="true" [theme]="'secondary'"> Secondary </button>
  <button class="Btn Btn-outline-dark ME-2" qlTooltip="Tooltip on Top" placement="top" [outline]="true" [duration]="500" [rounded]="true" [theme]="'success'"> Success </button>
  <button class="Btn Btn-outline-dark ME-2" qlTooltip="Tooltip on Top" placement="top" [outline]="true" [duration]="500" [rounded]="true" [theme]="'info'"> Info </button>
  <button class="Btn Btn-outline-dark ME-2" qlTooltip="Tooltip on Top" placement="top" [outline]="true" [duration]="500" [rounded]="true" [theme]="'warning'"> Warning </button>
  <button class="Btn Btn-outline-dark ME-2" qlTooltip="Tooltip on Top" placement="top" [outline]="true" [duration]="500" [rounded]="true" [theme]="'danger'"> Danger </button>
  <button class="Btn Btn-outline-dark ME-2" qlTooltip="Tooltip on Top" placement="top" [outline]="true" [duration]="500" [rounded]="true" [theme]="'light'"> Light </button>
  <button class="Btn Btn-outline-dark ME-2" qlTooltip="Tooltip on Top" placement="top" [outline]="true" [duration]="500" [rounded]="true" [theme]="'dark'"> Dark </button>
  <button class="Btn Btn-outline-dark ME-2" qlTooltip="Tooltip on Top" placement="top" [outline]="true" [duration]="500" [rounded]="true" [theme]="'night'"> Night </button>
</div>
``` 
