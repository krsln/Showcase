# Carousel

## Depends
npm install tiny-slider  
https://github.com/ganlanyuan/tiny-slider

## Usage 
Component (lb-carousel) 

###### Html
```
<lb-carousel [Views]="Views" [Items]="1"
             [StartIndex]="0" [Gutter]="10"
             [Autoplay]="false" [ArrowKey]="false" [MouseDrag]="true" [AutoWidth]="false"
             [Center]="true" [LazyLoad]="true" [Indicators]="true" [Loop]="true"
             [Controls]="true" [Caption]="true"
></lb-carousel>
```
###### Ts
```
  Views: CarouselView[];
  ngOnInit() { 
    this.Views = [];
    [0, 1, 2, 3, 4, 5, 6].forEach((item, i) => this.Views.push({
      Caption: 'Caption_' + item.toString(),
      Description: 'Description_Description_' + item.toString(),
      ImgSrc: `https://picsum.photos/600/400/?image=${item}`
    } as CarouselView));
  }
```
 
## Notes
https://github.com/ganlanyuan/tiny-slider   
 
## TODOs

## Screenshots
![](Screenshots/Carousel_2020-01-17.png)

