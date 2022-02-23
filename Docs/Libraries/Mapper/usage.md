### Mapper | Usage

[![Demo](https://img.shields.io/badge/Demo-blue?style=for-the-badge)](https://krsln.github.io/Showcase/Libraries/Mapper)
[![](https://img.shields.io/badge/Main-projects-white?style=for-the-badge)](../projects.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (~~ql-mapper~~)
- [x] Directive (qlMapper)
- [ ] Service ()

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
<div qlMapper [Options]="mapOptionBasic"></div>
<div qlMapper [Options]="mapOptionRouteMap"></div>
```

```typescript
 mapOptionRouteMap: MapperOption = {
  type: MapperType.RouteMap,
  mapType: MapType.ROADMAP,
  zoomControl: false,
  // center: {Lat: 41.015137, Lng: 28.97953},
  // zoom: {val: 10, min: 4, max: 20},
  markers: [
    {Title: 'İstanbul', LatLng: {Lat: 41.015137, Lng: 28.979530}},
    {Title: 'Moscow', LatLng: {Lat: 55.751244, Lng: 37.618423}},
    {Title: 'Paris', LatLng: {Lat: 48.864716, Lng: 2.349014}},
  ]
} as MapperOption;

mapOptionBasic: MapperOption = {
  type: MapperType.Basic,
  mapType: MapType.HYBRID,
  zoomControl: false,
  mapTypeControl: false,
  center: {Lat: 41.015137, Lng: 28.97953},
  infoContent: `
<div id="content">
  <div id="siteNotice"></div>
  <h1 id="firstHeading" class="firstHeading">Uluru</h1>
  <div id="bodyContent">
    <p>
      <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of
      the Northern Territory, central Australia. It lies 335km (208mi) south west of the nearest large town,
      Alice Springs; 450km (280mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru -
      Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the
      area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.
    </p>
    <p>
      Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru">
      https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).
    </p>
  </div>
</div>
    `,
  zoom: {val: 15, max: 18},
  markers: []
} as MapperOption;
```

