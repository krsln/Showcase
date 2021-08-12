### Usage

> [![](https://img.shields.io/badge/readme-white)](readme.md)

### Mapper

~~Component (ql-mapper)~~  
Directive (qlMapper)  
~~Service ()~~

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
<!--<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>-->

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
