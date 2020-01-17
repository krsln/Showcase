# DatePicker
## Depends
Needs: `npm install --save moment`  
scss @import "./../../../variables";  
import {AnimOverlay} from '../../../../Animations/index';  


## Usage
Usage: Directive (lbDatePicker)  
###### Html
```
<label>
    <input type="text" class="form-control" id="DepartureDateTime" [formControlName]="'DepartureDateTime'"
           lbDatePicker [Options]="{range:true,locale:'tr',format:'YYYY/MM/D'}" autocomplete="off">
</label> 
```
###### Ts
```

``` 

## Formats
#####format
'YYYY/MM/D' (default) => 2019/10/24

'D/MM/YYYY' => 24/10/2019


#####formatDay 
'3','short' (default) => Sun Mon Tue Wed Thu Fri Sat

'2','min' => Su Mo Tu We Th Fr Sa

'1','one' => S M T W T F S

## Notes
https://www.codehim.com/demo/javascript-datepicker-lightpick/

https://inventi.studio/en/blog/why-you-shouldnt-use-moment-js

https://www.npmjs.com/package/dayjs

https://date-fns.org/

## TODOs

DONE! styles ... scss 

DONE! date range

DONE! on range, mouse over show future selected days

Done! diff colors 

Done! autoClose
 
 minDate, maxDate
 
 minDays, maxDays
 
 repick
 
 secondField
 
 numberOfMonths
 
 inline
 
 footer
 

```
calendar-primary, calendar-secondary, calendar-success, 
calendar-info, calendar-warning, calendar-danger
```

## Screenshots
![](Screenshots/Datepicker_Colors.png)
![](Screenshots/Datepicker_dow.png)
