### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

## PickerColor

Component (~~qlt-picker-color, qlt-color-slider, qlt-color-palette~~)  
Directive (input[qltPickerColor])  
~~Service ()~~

#### app.module.ts

```typescript
import {PickerColorModule} from '@qrsln/loot-box/Libs/PickerColor';

@NgModule({
  imports: [PickerColorModule, /*...*/],
})
```  

#### Usage

```html
 <div class="row">
  <div class="col-12 col-lg-8 mb-2">
    <strong>Directive col-lg-8</strong>
    <input qltPickerColor class="form-control form-control-sm w-100" type="text"/>
  </div>
  <div class="col-12 col-lg-4 mb-2">
    <strong>Directive col-lg-4</strong>
    <input qltPickerColor class="form-control form-control-sm w-100" type="text"/>
  </div>
</div>
```  
