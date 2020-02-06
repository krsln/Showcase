> [Main](../../../readme.md) / [Readme](readme.md) ~ **Usage**

## Rating
Component (lb-rating)  
Directive ()  
Service () 

#### Depends Local
TooltipModule  
scss @import "./../../../../Styles/variables"; 
import {Guid} from '../../../../Utils/Guid';  

#### Depends

###### Themes
star (def) | heart | text | emoji  

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
###### Ts
```

```

#### Features
 Params | desc  
 --- | ---  
[color] | rgb, hex
[max] | number: Items Count
[allowFraction] | true/false Can select half of item
[theme] | star (def) / heart / text / emoji
[showText] | true/false Shows selected count
[showTooltip] | true/false Shows Tooltip
(rateChanged) | event emitter ```(rateChanged)="rateChanged($event)"```

###### app.module.ts
```
import {RatingModule} from '@qrsln/loot-box/Libs/Rating';

@NgModule({
  imports: [RatingModule, ...],

```  
