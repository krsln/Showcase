___
 Status | . | Status | .| Status | .| Status | .  | Status | .  
 --- | --- | --- | --- | --- | --- | --- | ---  | ---   | ---  
 *Perfect* | `✓✓✓✓✓` |  *Done* | `✓✓✓✓` | *Almost*  | `✓✓✓`    | *Works* | `✓✓`   |*Basic*   | `✓`  
___
 Pickers |  .  
 --- | ---  
 *ColorPicker* | `✓`  
 *DatePicker* | `✓✓✓`  
 *PaxPicker* | `✓✓`  

 Others |  .  
 --- | ---  
 *Sliders* | `✓`  
 *Mapper* | `✓✓✓`  
 *Timers* | `✓✓✓✓`  
 *Rating* | `✓✓✓✓`  
 *Notify* | `✓✓✓✓`  
 *Tooltip* | `✓✓✓✓`  
   
#### Todo
Particle   
Charts  
LightBox  

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

#### Mapper
Needs:  
`npm install @angular/google-maps`
```
index.html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```  

Usage: Directive (lbMapper)  
![](Screenshots/RouteMap.png "RouteMap")

#### Sliders
Usage:  
![](Screenshots/RangeSlider.png "RangeSlider")

#### Rating (✓✓✓✓)
Usage: Component (lb-rating)  
![](Screenshots/Rating.png "Rating")

#### Tooltip (✓✓✓✓)
Usage: Directive (lbTooltip)  
![](Screenshots/Tooltip.png "Tooltip")

#### Timers (✓✓✓✓)
Usage: Directive (lbTimeAgo)  
Usage: Component (lb-countdown)  
![](Screenshots/Timer.png "TimeAgo & Countdown") 

#### Notify (✓✓✓✓)
Needs:  
`npm install bootstrap @fortawesome/fontawesome-free`
inLayout: `<lb-notify></lb-notify>`  

Usage: Service (NotifyService)  
Usage: Component (lb-notify)  
![](Screenshots/Notify.png "Notify") 
 
