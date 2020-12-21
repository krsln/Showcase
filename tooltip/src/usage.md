> [Main](../../readme.md) / [Readme](readme.md) ~ **Usage**

## Tooltip
Component ()  
Directive (lbTooltip)  
Service ()  

#### Depends Local
scss @import "./../../../variables";  
// import {Guid} from '../../../../Utils/Guid'; 
 
#### Depends

###### Themes  
white | black | silver | red   

###### Html
```
<div>
      <button type="button" class="btn btn-outline-dark"
              lbTooltip="Tooltip on right" [placement]="'right'" [duration]="500" [theme]="'silver'">Right
      </button>
      <button type="button" class="btn btn-outline-dark"
              lbTooltip="Tooltip on top" [placement]="'top'" [duration]="500" [theme]="'white'">Top
      </button>
      <button type="button" class="btn btn-outline-dark"
              lbTooltip="Tooltip on bottom" [placement]="'bottom'" [duration]="500" [theme]="'black'">Bottom
      </button>
      <button type="button" class="btn btn-outline-dark"
              lbTooltip="Tooltip on left" [placement]="'left'" [duration]="500" [theme]="'red'">Left
      </button>
</div>
```
###### Ts
```

```  
###### app.module.ts
```
import {TooltipModule} from '@qrsln/loot-box/Libs/Tooltip';

@NgModule({
  imports: [TooltipModule, ...],

```  
