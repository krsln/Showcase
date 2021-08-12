### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

## PickerPax

~~Component (qlt-picker-pax, qlt-plus-minus)~~  
Directive (lbPaxPicker)  
~~Service ()~~

#### app.module.ts

```typescript
import {PickerPaxModule} from '@qrsln/loot-box/Libs/PickerPax';

@NgModule({
  imports: [PickerPaxModule, /*...*/],
})
```  

#### Usage

```html

<div class="row">
  <div class="col-12 col-lg-9 mb-2">
    <strong>Directive col-lg-9</strong>
    <div qltPickerPax [PaxList]="PaxList" [Label]="'Passengers'" (OnChanged)="PaxChanged($event)"></div>
  </div>
  <div class="col-12 col-lg-3 mb-2">
    <strong>Directive col-lg-3</strong>
    <div qltPickerPax [PaxList]="PaxList" [Label]="'Yolcu'" (OnChanged)="PaxChanged($event)"></div>
  </div>
</div>
``` 

```typescript
// PaxList: PaxListItem[] =
PaxList = [
  {Label: 'Adult', SubLabel: '', Min: 1, Max: 9, Pax: {Code: 'adult', Value: 1}},
  {Label: 'Young', SubLabel: '12-17', Min: 0, Max: 7, Pax: {Code: 'young', Value: 0}},
  {Label: 'Child', SubLabel: '2-11', Min: 0, Max: 7, Pax: {Code: 'child', Value: 0}},
  {Label: 'Infant with a Seat', SubLabel: '2- minus', Min: 0, Max: 7, Pax: {Code: 'infant-1', Value: 0}},
  {Label: 'Infants without a seat', SubLabel: '2+ plus', Min: 0, Max: 7, Pax: {Code: 'infant-2', Value: 0}},
];

PaxChanged($event)
{
  // Updating the list
  this.PaxList.forEach((cur, i) => {
    const val = $event.find(x => x.Code === cur.Pax.Code);
    if (val) {
      cur.Pax.Value = val.Value;
    }
  });

  console.log($event.filter(x => x.Code !== 'Total' && x.Value > 0));
}
```  
 
