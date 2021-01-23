### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.desc.md) [![](https://img.shields.io/badge/readme-white)](readme.md)

### Carousel

Component (lb-carousel, lb-carousel-tiny)  
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

<lb-carousel-tiny [Views]="Views" [Items]="1"
                  [StartIndex]="0" [Gutter]="10"
                  [Autoplay]="false" [ArrowKey]="false" [MouseDrag]="true" [AutoWidth]="false"
                  [Center]="true" [LazyLoad]="true" [Indicators]="true" [Loop]="true"
                  [Controls]="true" [Caption]="true"
></lb-carousel-tiny>
``` 

```typescript
// Views: CarouselView[];
ngOnInit()
{
  this.Views = [];
  [0, 1, 2, 3, 4, 5, 6].forEach((item, i) => this.Views.push({
    Caption: 'Caption_' + item.toString(),
    Description: 'Description_Description_' + item.toString(),
    ImgSrc: `https://picsum.photos/600/400/?image=${item}`
  } as CarouselView));
}
```   
