### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.desc.md) [![](https://img.shields.io/badge/readme-white)](readme.md)

## PaxPicker

~~Component ()~~  
Directive (lbPaxPicker)  
~~Service ()~~

#### app.module.ts

```typescript
import {PaxPickerModule} from '@qrsln/loot-box/Libs/PaxPicker';

@NgModule({
  imports: [PaxPickerModule, /*...*/],
})
```  

#### Usage

```html
<span lbPaxPicker [PaxList]="PaxList" (ChangeEvent)="PaxChanged($event)">Passengers</span>
``` 
```typescript
PaxList = [
    {Code: 'adult', Label: 'Yetişkin', SubLabel: '', Min: 1, Max: 9, Value: 1},
    {Code: 'young', Label: 'Genç', SubLabel: '12-17', Min: 0, Max: 7, Value: 0},
    {Code: 'child', Label: 'Çocuk', SubLabel: '2-11', Min: 0, Max: 7, Value: 0},
    {Code: 'infant-1', Label: 'Koltukta Bebek', SubLabel: '2 yaş altı', Min: 0, Max: 7, Value: 0},
    {Code: 'infant-2', Label: 'Kucakta Bebek', SubLabel: '2 yaş altı', Min: 0, Max: 7, Value: 0},
];
```  
 
