### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../../readme.desc.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

## PickerDate

~~Component (qlt-picker-date)~~  
Directive (input[qltPickerDate])  
~~Service ()~~

#### app.module.ts

```typescript
import {PickerDateModule} from '@qrsln/loot-box/Libs/PickerDate';

@NgModule({
  imports: [PickerDateModule, /*...*/],
})
```  

#### Usage

```html
<div class="form-group col-md-4">
  <label>
    <strong>[Color]="'primary'"</strong>
    <input qltPickerDate [IsRange]="true" [Color]="'dark'" class="form-control form-control-sm w-100"
           type="text"/>
  </label>
</div>
```

###### Format

```
format 'YYYY/MM/DD' (default) => 2019/10/24
 
```
