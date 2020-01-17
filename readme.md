# LootBox
![version](https://img.shields.io/badge/Version-0.20.116-green.svg)
 
[Demos](https://krsln.github.io/NgLootBox)
___ 
 *Perfect* | *Done* | *Almost* | *Works* | *Basic*
  --- | --- | --- | --- | ---  
 `✓✓✓✓✓` | `✓✓✓✓` | `✓✓✓` | `✓✓`   | `✓`  
___
 Libraries | Status  
 --- | ---  
 *[Piper](#piper)* | ``  
 *[Mapper](#mapper)* | `✓✓✓` 

 LootBox | Status 
 --- | ---  
 *[Breadcrumb](#breadcrumb)* | `✓✓✓`  
 *[Carousel](#carousel)* | ``  
 *[Notify](#notify)* | `✓✓✓✓`  
 *[Sliders](#sliders)* | `✓`  
 *[Rating](#rating)* | `✓✓✓✓`  
 *[Tooltip](#tooltip)* | `✓✓✓✓`  
 *[Timeline](#timeline)* | `✓✓✓✓`  
 *[Timers](#timers)* | `✓✓✓✓`  

*[ColorPicker](#colorpicker)* | *[DatePicker](#datepicker)* | *[PaxPicker](#paxpicker)*
--- | ---  | ---  
`✓`  | `✓✓✓`  | `✓✓✓`  

___
#### Todo
Particle   
Charts  
LightBox  
Waves effect  
Text Distortion Effects using Blotter.js  
Animate On Scroll    https://michalsnik.github.io/aos/   
___
# Details
 
#### ColorPicker 
Usage:  
![](LootBox/ColorPicker/Screenshots/ColorPicker.png "ColorPicker")

*[top↑](#lootbox)*
#### DatePicker
Needs: `npm install --save moment`  
Usage: Directive (lbDatePicker)  
![](LootBox/DatePicker/Screenshots/Datepicker_Colors.png "Datepicker Theme")

[top↑](#lootbox)
#### PaxPicker
Usage: Directive (lbPaxPicker)  
![](LootBox/PaxPicker/Screenshots/PaxPicker.png "PaxPicker") 

*[top↑](#lootbox)*
___
#### Sliders
Usage:  
![](LootBox/Sliders/Screenshots/RangeSlider.png "RangeSlider")

*[top↑](#lootbox)*
#### Rating
(✓✓✓✓)  
Usage: Component (lb-rating)  
![](LootBox/Rating/Screenshots/Rating.png "Rating")

*[top↑](#lootbox)*
#### Tooltip
(✓✓✓✓)  
Usage: Directive (lbTooltip)  
![](LootBox/Tooltip/Screenshots/Tooltip.png "Tooltip")

*[top↑](#lootbox)*
#### Timers
(✓✓✓✓)  
Usage: Directive (lbTimeAgo)  
Usage: Component (lb-countdown)  
![](LootBox/Timers/Screenshots/Timer.png "TimeAgo & Countdown") 

*[top↑](#lootbox)*
#### Notify
(✓✓✓✓)  
Needs:  
`npm install bootstrap @fortawesome/fontawesome-free`  
inLayout: `<lb-notify></lb-notify>`  

Usage: Service (NotifyService)  
Usage: Component (lb-notify)  
![](LootBox/Notify/Screenshots/Notify.png "Notify") 
 
*[top↑](#lootbox)*
#### Breadcrumb   
(✓✓✓)  
inLayout: 
```
<lb-breadcrumb [Home]="Home" [Items]="Items" [Chevron]="'fas fa-angle-right'"></lb-breadcrumb>
```  
 
Usage: Component (lb-breadcrumb)  
![](LootBox/Breadcrumb/Screenshots/Breadcrumb_2020-01-14.png "Breadcrumb") 

*[top↑](#lootbox)*
#### Carousel 
Usage: Component (lb-carousel)  
![](LootBox/Carousel/Screenshots/Carousel_2020-01-17.png "Carousel") 

*[top↑](#lootbox)*
___ 
#### Timeline
(✓✓✓✓)  
Usage: Component (lb-timeline)  
![](LootBox/Timeline/Screenshots/Timeline_Default_2020-01-10.png "Default") 

*[top↑](#lootbox)*
___ 

#### Mapper
Needs:  
`npm install @angular/google-maps`
```
index.html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```  

Usage: Directive (lbMapper)  
![](Mapper/Screenshots/Mapper_RouteMap.png "RouteMap")

*[top↑](#lootbox)*
#### Piper
        {{description|lbTruncate:size}}
        <span [innerHTML]="description|lbSanitize"></span>
![](Piper/Screenshots/Piper.png "Piper") 

*[top↑](#lootbox)*
