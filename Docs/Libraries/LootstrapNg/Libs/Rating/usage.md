### Rating | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-rating, NgRating, Rating)
- [x] Component (ql-rating-item, NgRatingItem, RatingItem)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {RatingModule} from '@qrsln/lootstrap-angular/Libs/Rating';

@NgModule({
  imports: [RatingModule, /*...*/],
})
```  

#### Usage

```html

<!--Basic usage-->

<Rating [Pattern]="'base'" [Fraction]="true" [ShowValue]="true" [Rate]="3.5" (RateChanged)="rateChanged($event)">
  <RatingItem *ngFor="let _ of [1,2,3,4]"></RatingItem>
</Rating>

```

```html

<!--With FA Icons-->

<Rating [Fraction]="true" [Rate]="2.5" style="--ls-rating-bg: darkred">
  <RatingItem *ngFor="let _ of [1,2,3,4,5]"><i class="fa-solid fa-heart"></i></RatingItem>
</Rating>
<br>
<!-- Shadow -->
<Rating [Fraction]="true" [Shadow]="true" [Rate]="2.5" style="--ls-rating-bg: #1D9559">
  <RatingItem *ngFor="let _ of [1,2,3,4,5]"><i class="fa-solid fa-tree"></i></RatingItem>
</Rating>
<br>
<!-- Spin -->
<Rating [Fraction]="true" [Rate]="2.5" style="--ls-rating-bg: orange">
  <RatingItem *ngFor="let _ of [1,2,3,4,5]"><i class="fa-solid fa-star fa-spin"></i></RatingItem>
</Rating>

<!--Emoji-->
<Rating [Fraction]="true" [Rate]="2.5"
        [Icons]="['fa-solid fa-face-frown', 'fa-solid fa-face-frown-open', 'fa-solid fa-face-meh', 'fa-solid fa-face-smile', 'fa-solid fa-face-grin']"></Rating>

<Rating [Fraction]="true" [Rate]="2.5" [Icons]="regular"></Rating>

```

```typescript

regular = ['fa-regular fa-face-frown', 'fa-regular fa-face-frown-open', 'fa-regular fa-face-meh', 'fa-regular fa-face-smile', 'fa-regular fa-face-grin',];

rateChanged($event)
{
  console.log($event);
}

```
