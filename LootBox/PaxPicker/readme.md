# PaxPicker ✓✓✓

## Depends
**BrowserAnimationsModule** for animations  
import {fadeInOut} from '../../../../Animations/index';  
CommonModule, ReactiveFormsModule  

## Usage
Directive (lbPaxPicker)  

###### Html
```
<span lbPaxPicker [PaxList]="PaxList" (ChangeEvent)="PaxChanged($event)">Passengers</span>
```
###### Ts
```
PaxList = [
    {Code: 'adult', Label: 'Yetişkin', SubLabel: '', Min: 1, Max: 9, Value: 1},
    {Code: 'young', Label: 'Genç', SubLabel: '12-17', Min: 0, Max: 7, Value: 0},
    {Code: 'child', Label: 'Çocuk', SubLabel: '2-11', Min: 0, Max: 7, Value: 0},
    {Code: 'infant-1', Label: 'Koltukta Bebek', SubLabel: '2 yaş altı', Min: 0, Max: 7, Value: 0},
    {Code: 'infant-2', Label: 'Kucakta Bebek', SubLabel: '2 yaş altı', Min: 0, Max: 7, Value: 0},
];
```  

## TODOs
DONE! styles ... scss 

warnings

## Screenshots
![](Screenshots/PaxPicker.png) 
