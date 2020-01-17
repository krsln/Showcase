# Tooltip (✓✓✓✓)

## Depends
scss @import "./../../../variables";

## Usage
Directive (lbTooltip)  

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
## TODOs
issue ` btn-group   display: inline-flex;`

## Notes
https://stackblitz.com/edit/angular-tooltip-directive  

###### Themes  
white | black | silver | red   

## Screenshots
![](Screenshots/Tooltip.png)  

