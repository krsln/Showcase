&rightarrow; &rightarrow; 
[Demo](https://krsln.github.io/NgLootBox)
&leftarrow;  &leftarrow;  
___ 
 *Perfect* | *Done* | *Almost* | *Works* | *Basic*
  --- | --- | --- | --- | ---  
 `✓✓✓✓✓` | `✓✓✓✓` | `✓✓✓` | `✓✓`   | `✓`  
___
 *[ColorPicker](#colorpicker)* | *[DatePicker](#datepicker)* | *[PaxPicker](#paxpicker)*
  --- | ---  | ---  
 `✓`  | `✓✓✓`  | `✓✓✓`  

 Libraries | Status  
 --- | ---  
 *[Piper](#piper)* | ``  
 *[Mapper](#mapper)* | `✓✓✓` 
  
 LootBox | Status 
 --- | ---  
 *[Breadcrumb](#breadcrumb)* | `✓✓✓`  
 *[Notify](#notify)* | `✓✓✓✓`  
 *[Sliders](#sliders)* | `✓`  
 *[Rating](#rating)* | `✓✓✓✓`  
 *[Tooltip](#tooltip)* | `✓✓✓✓`  
 *[Timeline](#timeline)* | `✓✓✓✓`  
 *[Timers](#timers)* | `✓✓✓✓`  
___
#### Todo
Particle   
Charts  
LightBox  
Waves effect  
Text Distortion Effects using Blotter.js  

# Details
 
#### ColorPicker 
Usage:  
![](Screenshots/ColorPicker.png "ColorPicker")

#### DatePicker
Needs: `npm install --save moment`  
Usage: Directive (lbDatePicker)  
![](Screenshots/Datepicker_Colors.png "Datepicker Theme")

#### PaxPicker
Usage: Directive (lbPaxPicker)  
![](Screenshots/PaxPicker.png "PaxPicker") 
___

#### Sliders
Usage:  
![](Screenshots/RangeSlider.png "RangeSlider")

#### Rating
(✓✓✓✓)  
Usage: Component (lb-rating)  
![](Screenshots/Rating.png "Rating")

#### Tooltip
(✓✓✓✓)  
Usage: Directive (lbTooltip)  
![](Screenshots/Tooltip.png "Tooltip")

#### Timers
(✓✓✓✓)  
Usage: Directive (lbTimeAgo)  
Usage: Component (lb-countdown)  
![](Screenshots/Timer.png "TimeAgo & Countdown") 

#### Notify
(✓✓✓✓)  
Needs:  
`npm install bootstrap @fortawesome/fontawesome-free`  
inLayout: `<lb-notify></lb-notify>`  

Usage: Service (NotifyService)  
Usage: Component (lb-notify)  
![](Screenshots/Notify.png "Notify") 
 
#### Breadcrumb   
(✓✓✓)  
inLayout: 
```
<lb-breadcrumb [Home]="Home" [Items]="Items" [Chevron]="'fas fa-angle-right'"></lb-breadcrumb>
```  
 
Usage: Component (lb-breadcrumb)  
![](Screenshots/Breadcrumb_2020-01-14.png "Breadcrumb") 

___ 
#### Timeline
(✓✓✓✓)  
Usage: Component (lb-timeline)  
![](Screenshots/Timeline_Default_2020-01-10.png "Default") 

___ 

#### Mapper
Needs:  
`npm install @angular/google-maps`
```
index.html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```  

Usage: Directive (lbMapper)  
![](Screenshots/Mapper_RouteMap.png "RouteMap")

#### Piper
        {{description|lbTruncate:size}}
        <span [innerHTML]="description|lbSanitize"></span>
![](Screenshots/Piper.png "Piper") 
