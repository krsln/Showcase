# Rating (✓✓✓✓)

## Depends
TooltipModule  
scss @import "./../../../variables";  

## Usage
Usage: Component (lb-rating)  

###### Html
```
<div class="row">
 <lb-rating class="col-4" rate="7.8" [max]="10" [showText]="true" [readOnly]="true" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-4" [color]="'red'" [rate]="3.5" [showText]="true" [allowFraction]="true" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-4" [theme]="'heart'" [rate]="3.5" [showText]="true" [allowFraction]="true" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-6" [theme]="'text'" [rate]="3" [showText]="true" [allowFraction]="true" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-6" [color]="'purple'" [theme]="'text'" [rate]="3" [showText]="true" [allowFraction]="true" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-6" [theme]="'emoji'" [rate]="3" [showText]="false" [allowFraction]="false" (rateChanged)="rateChanged($event)"></hell-rating>
 <lb-rating class="col-6" [color]="'blue'" [rate]="3.5" [showText]="false" [allowFraction]="true" (rateChanged)="rateChanged($event)"></hell-rating>
</div>
``` 

###### Themes
```
[theme]="'star'" default
[theme]="'heart'"
[theme]="'text'"
[theme]="'emoji'"
``` 
  
## Notes
https://www.c-sharpcorner.com/article/star-rating-in-angular-5/

TODO: on hover show status text not number  
fixed! TODO: on edge browser heart.svg issue  
TODO: using whatsApp emoji cuz issue  
TODO: asset folder doesnt copy on library for now img to css base64  

## Features
Dynamic Color  
`[color]="'#28a745'" [color]="'blue'"`  
Dynamic Items Count  
`[max]="8" ` 
Can select half of item  
`[allowFraction]="true"`   
Theme (star is default)  
`[theme]="'heart'"`  
Shows selected count  
`[showText]="false"`  
Shows Tooltip  
`[showTooltip]="true"`  
rateChanged event  
`(rateChanged)="rateChanged($event)"`

## Screenshots
![](Screenshots/Rating.png)

