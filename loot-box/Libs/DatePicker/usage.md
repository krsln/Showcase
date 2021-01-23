### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.desc.md) [![](https://img.shields.io/badge/readme-white)](readme.md)

## DatePicker

~~Component ()~~  
Directive (lbDatePicker)  
~~Service ()~~

#### app.module.ts

```typescript
import {DatePickerModule} from '@qrsln/loot-box/Libs/DatePicker';

@NgModule({
  imports: [DatePickerModule, /*...*/],
})
```  

#### Usage

```html
  <label class="col-6 col-xl-3">
  <input lbDatePicker class="form-control form-control-sm"
         [Options]="{theme:'calendar-primary',autoClose:true,range:true,locale:'ru',formatDate:'D/MM/YYYY', weekDays:'3'}"
         type="text"/>
</label>
<label class="col-6 col-xl-3">
  <input lbDatePicker class="form-control form-control-sm"
         [Options]="{theme:'calendar-secondary',range:true,locale:'tr',formatDate:'D/MM/YYYY', weekDays:'3'}"
         type="text"/>
</label>
<label class="col-6 col-xl-3">
  <input lbDatePicker class="form-control form-control-sm"
         [Options]="{theme:'calendar-success',range:true,locale:'tr',formatDate:'D/MM/YYYY', weekDays:'3'}"
         type="text"/>
</label>
<label class="col-6 col-xl-3">
  <input lbDatePicker class="form-control form-control-sm"
         [Options]="{theme:'calendar-info',range:true,locale:'tr',formatDate:'D/MM/YYYY', weekDays:'3'}"
         type="text"/>
</label>
<label class="col-6 col-xl-3">
  <input lbDatePicker class="form-control form-control-sm"
         [Options]="{theme:'calendar-warning',range:true,locale:'tr',formatDate:'D/MM/YYYY', weekDays:'3'}"
         type="text"/>
</label>
<label class="col-6 col-xl-3">
  <input lbDatePicker class="form-control form-control-sm"
         [Options]="{theme:'calendar-danger',range:true,locale:'tr',formatDate:'D/MM/YYYY', weekDays:'3'}"
         type="text"/>
</label>
```

###### Formats

```
format
'YYYY/MM/D' (default) => 2019/10/24
'D/MM/YYYY' => 24/10/2019

formatDay
'3','short' (default) => Sun Mon Tue Wed Thu Fri Sat
'2','min' => Su Mo Tu We Th Fr Sa
'1','one' => S M T W T F S
```
