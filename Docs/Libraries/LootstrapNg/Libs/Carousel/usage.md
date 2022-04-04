### Carousel | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-carousel, NgCarousel, Carousel)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {CarouselModule} from '@qrsln/lootstrap-angular/Libs/Carousel';

@NgModule({
  imports: [CarouselModule, /*...*/],
})
```  

#### Usage

```html

<Carousel [Images]="Images" [Stats]="true"
          [Captions]="Captions" [NavigationArrows]="Arrows" [NavigationIndicators]="Indicators"
          [Interval]="Interval" [PauseOnHover]="PauseOnHover"></Carousel>

<!-- With dummy images for the test purpose -->
<Carousel [Dummy]="true" [Captions]="false" [NavigationIndicators]="false"></Carousel>

```

```typescript

Images = [];

Interval = 3000;
Captions = true;
Arrows = true;
Indicators = true;
PauseOnHover = false;

ngOnInit()
{
  this.Images = [];

  [0, 2, 4, 6, 8, 10].forEach((item, index) => this.Images.push({
    Caption: 'Caption ' + item.toString(),
    Description: 'Description Description ' + item.toString(),
    Src: `https://source.unsplash.com/random/${960 + item}x${400 + item / 2}?sig=${index}`
    // Src: `https://picsum.photos/600/400/?image=${item}`
  } as CarouselItem));
}

```
