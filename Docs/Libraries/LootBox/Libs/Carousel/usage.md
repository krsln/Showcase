### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

### Carousel

Component (qlt-carousel)  
~~Directive ()~~  
~~Service ()~~

#### app.module.ts

```typescript
import {CarouselModule} from '@qrsln/loot-box/Libs/Carousel';

@NgModule({
  imports: [CarouselModule, /*...*/],
})
```  

#### Usage

```html

<div class="row">
  <div class="col-12 col-lg-8 mb-2">
    <ql-carousel [images]="Images" [showInfo]="true"
                 [showCaptions]="ShowCaptions"
                 [showNavigationArrows]="ShowArrows"
                 [showNavigationIndicators]="ShowIndicators"
                 [interval]="Interval" [pauseOnHover]="PauseOnHover"></ql-carousel>
  </div>
  <div class="col-12 col-lg-4 mb-2">
    <ql-carousel [images]="Images"></ql-carousel>
  </div>
</div>

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

  [0, 1, 2, 3, 4, 5, 6].forEach((item, i) => this.Images.push({
    Caption: 'Caption ' + item.toString(),
    Description: 'Description Description ' + item.toString(),
    Src: `https://source.unsplash.com/random/962x400?image=${item}`
    // Src: `https://picsum.photos/600/400/?image=${item}`
  } as CarouselItem));
}
```   
