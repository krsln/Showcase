# @qrsln/mapper

![Progress](https://img.shields.io/badge/Progress-✔✔✔☐☐‌‌‌‌‌‌‌-blue)
[![downloads](https://img.shields.io/npm/dm/@qrsln/mapper.svg)](https://npmcharts.com/compare/@qrsln/mapper?minimal=true)
[![npm version](https://badge.fury.io/js/%40qrsln%2Fmapper.svg)](https://badge.fury.io/js/%40qrsln%2Fmapper)

## Mapper

For Angular  
[![Progress](https://img.shields.io/badge/Demo-✔✔✔☐☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/Libraries/Mapper)
[![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../readme.md)
[![](https://img.shields.io/badge/readme‌‌‌‌‌‌‌-white)](Docs/readme.md)
[![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](Docs/usage.md)

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
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key="></script>
<!--In Components -->
<!--Basic -->
<div qlMapper [Options]="mapOption2"></div>
<!--RouteMap -->
<div qlMapper [Options]="mapOption1"></div>
```

```typescript
mapOption2: MapperOption = {
  type: MapperType.Basic,
  mapType: MapType.HYBRID,
  center: {Lat: 41.015137, Lng: 28.97953},
  infoContent: '<div id="content">...</div>',
  zoom: {val: 17, max: 20},
  markers: []
} as MapperOption;

mapOption1: MapperOption = {
  type: MapperType.RouteMap,
  mapType: MapType.ROADMAP,
  markers: [
    {Title: 'İstanbul', LatLng: {Lat: 41.015137, Lng: 28.979530}},
    {Title: 'Moscow', LatLng: {Lat: 55.751244, Lng: 37.618423}},
    {Title: 'Paris', LatLng: {Lat: 48.864716, Lng: 2.349014}},
  ]
} as MapperOption;
```

### Screenshots

Mapper Basic  
![](Docs/Screenshots/Mapper_Basic.png "Mapper Basic")  
Mapper RouteMap
![](Docs/Screenshots/Mapper_RouteMap.png "Mapper RouteMap")  
