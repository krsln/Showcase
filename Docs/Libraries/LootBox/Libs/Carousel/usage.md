### Carousel | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-carousel)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {CarouselModule} from '@qrsln/loot-box/Libs/Carousel';

@NgModule({
  imports: [CarouselModule, /*...*/],
})
```  

#### Usage

```html

<ql-carousel [images]="Images" [showInfo]="true"
             [showCaptions]="ShowCaptions"
             [showNavigationArrows]="ShowArrows"
             [showNavigationIndicators]="ShowIndicators"
             [interval]="Interval" [pauseOnHover]="PauseOnHover"></ql-carousel>

<ql-carousel [images]="Images" [showCaptions]="false" [showNavigationIndicators]="false"></ql-carousel>

``` 

```typescript
// Images!: CarouselItem[];

Interval = 3000;
ShowCaptions = true;
ShowArrows = true;
ShowIndicators = true;
PauseOnHover = false;

ngOnInit()
{
  this.Images = [];

  [0, 2, 4, 6, 8, 10, 12].forEach((item, index) => this.Images.push({
    Caption: 'Caption ' + item.toString(),
    Description: 'Description Description ' + item.toString(),
    Src: `https://source.unsplash.com/random/${960 + item}x${400 + item / 2}?sig=${index}`
    // Src: `https://picsum.photos/600/400/?image=${item}`
  } as CarouselItem));
}
```   
