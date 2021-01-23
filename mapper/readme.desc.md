# @qrsln/mapper

![Progress](https://img.shields.io/badge/Progress-✔✔✔☐☐‌‌‌‌‌‌‌-blue)
[![downloads](https://img.shields.io/npm/dm/@qrsln/mapper.svg)](https://npmcharts.com/compare/@qrsln/mapper?minimal=true)
[![npm version](https://badge.fury.io/js/%40qrsln%2Fmapper.svg)](https://badge.fury.io/js/%40qrsln%2Fmapper)

## Mapper

For Angular  
[![Progress](https://img.shields.io/badge/Demo-✔✔✔☐☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/Mapper)
[![](https://img.shields.io/badge/readme‌‌‌‌‌‌‌-white)](src/readme.md)
[![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](src/usage.md)

![](https://github.com/krsln/NgLootBox/raw/master/mapper/Screenshots/Mapper_Basic.png "Breadcrumb")
![](https://github.com/krsln/NgLootBox/raw/master/mapper/Screenshots/Mapper_RouteMap.png "RouteMap")

#### Dependencies

```
npm install @angular/google-maps 
```

#### app.module.ts

```typescript
import {MapperModule} from '@qrsln/mapper';

@NgModule({
  imports: [MapperModule, /*...*/],
})
```  

#### Usage

```html
<!--index.html-->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
<!--In Components -->
<!--Basic -->
<div lbMapper [Options]="mapOption2"></div>
<!--RouteMap -->
<div lbMapper [Options]="mapOption1"></div>
```

```typescript
mapOption2: MapperOption = {
  type: MapperType.Basic,
  mapType: MapType.HYBRID,
  center: {Lat: 41.015137, Lng: 28.97953},
  infoContent: '<div id="content">...</div>',
  zoom: {val: 17, max: 20},
  markers: []
};

mapOption1: MapperOption = {
  type: MapperType.RouteMap,
  mapType: MapType.ROADMAP,
  markers: [
    {Title: 'İstanbul', LatLng: {Lat: 41.015137, Lng: 28.979530}},
    {Title: 'Moscow', LatLng: {Lat: 55.751244, Lng: 37.618423}},
    {Title: 'Paris', LatLng: {Lat: 48.864716, Lng: 2.349014}},
  ]
};
```
