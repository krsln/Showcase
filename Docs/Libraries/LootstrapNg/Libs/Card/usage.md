### Card | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-card, NgCard, Card)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {CardModule} from '@qrsln/lootstrap-angular/Libs/Card';

@NgModule({
  imports: [CardModule, /*...*/],
})
```  

#### Usage

```html

<Card>
  <div class="Card-media">
    <Carousel [Dummy]="true" [Captions]="false" [NavigationIndicators]="false"></Carousel>
  </div>
  <h5 class="Border-bottom">Title</h5>
  <p>
    Some quick example text to build on the card title and make up the bulk of the card's content.
    <span class="Badge Bg-light Fg-dark">2021-07-21 - 2021-07-30</span>
  </p>
  <div class="D-flex Align-items-center">
    <em>556.50$</em>
    <button class="Btn Btn-outline-dark MS-auto">More...</button>
  </div>
</Card>

```

```html

<Card [Orientation]="'Horizontal'">
  <div class="Card-media">
    <Carousel [Dummy]="true" [Captions]="false" [NavigationIndicators]="false"></Carousel>
  </div>
  <h5 class="Border-bottom">Title</h5>
  <p>
    Some quick example text to build on the card title and make up the bulk of the card's content.
    <span class="Badge Bg-light Fg-dark">2021-07-21 - 2021-07-30</span>
  </p>
  <div class="D-flex Align-items-center">
    <em>556.50$</em>
    <button class="Btn Btn-outline-dark MS-auto">More...</button>
  </div>
  <div class="Close">
    <button class="Btn-close F-purple"></button>
  </div>
</Card>

```
