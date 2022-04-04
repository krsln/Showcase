### Timeline | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-timeline, NgTimeline, Timeline)
- [x] Component (ql-timeline-item, NgTimelineItem, TimelineItem)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {TimelineModule} from '@qrsln/lootstrap-angular/Libs/Timeline';

@NgModule({
  imports: [TimelineModule, /*...*/],
})
```  

#### Usage

```html

<!--Animations-->
<Timeline [Anim]="'Shake'"></Timeline>
<Timeline [Anim]="'Wobble'"></Timeline>
<Timeline [Anim]="'Jello'"></Timeline>
<Timeline [Anim]="'Rubber-band'"></Timeline>

```

```html

<Timeline [Anim]="'Shake'">
  <div class="Timeline-header">
    <h2>Timeline</h2>
    <p>Description</p>
  </div>
  <TimelineItem>
    <div class="Timeline-badge">
      <Avatar [BgColor]="'red'" [qlTooltip]="'Avatar'"><i class="Fg-light fa-regular fa-paper-plane"></i></Avatar>
    </div>
    <Card [Orientation]="'Horizontal'" [Caret]="'left'">
      <h5 class="Border-bottom">Title</h5>
      <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
    </Card>
  </TimelineItem>
  <TimelineItem>
    <div class="Timeline-badge">
      <Avatar [BgColor]="'blue'"><i class="Fg-light fa-solid fa-gift"></i></Avatar>
    </div>
    <Card [Orientation]="'Horizontal'" [Caret]="'left'">
      <h5 class="Border-bottom">Title</h5>
      <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
    </Card>
  </TimelineItem>
</Timeline>

```

```html

<!--Centered-->
<Timeline [Layout]="'Centered'" [Anim]="'Shake'">
  <TimelineItem>
    <div class="Timeline-badge">
      <Avatar [BgColor]="'red'" [qlTooltip]="'Avatar'"><i class="Fg-light fa-regular fa-paper-plane"></i></Avatar>
    </div>
    <Card [Caret]="'right'">
      <h5 class="Border-bottom">Title</h5>
      <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
    </Card>
  </TimelineItem>
  <TimelineItem [Inverted]="true">
    <div class="Timeline-badge">
      <Avatar [BgColor]="'blue'"><i class="Fg-light fa-solid fa-gift"></i></Avatar>
    </div>
    <Card [Caret]="'left'">
      <div class="Card-media">
        <Carousel [Dummy]="true" [Captions]="false" [NavigationIndicators]="false"></Carousel>
      </div>
      <h5 class="Border-bottom">Title</h5>
      <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
    </Card>
  </TimelineItem>
</Timeline>

```

```html

<!--Connected-->
<Timeline [Layout]="'Connected'" [Anim]="'Shake'">
  <TimelineItem>
    <div class="Timeline-badge">
      <Avatar [BgColor]="'red'" [qlTooltip]="'Avatar'"><i class="Fg-light fa-regular fa-paper-plane"></i></Avatar>
    </div>
    <Card [Caret]="'left'">
      <h5 class="Border-bottom">Title</h5>
      <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
    </Card>
  </TimelineItem>
  <TimelineItem [Inverted]="true">
    <div class="Timeline-badge">
      <Avatar [BgColor]="'blue'"><i class="Fg-light fa-solid fa-gift"></i></Avatar>
    </div>
    <Card [Caret]="'right'">
      <h5 class="Border-bottom">Title</h5>
      <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
    </Card>
  </TimelineItem>
  <TimelineItem>
    <div class="Timeline-badge">
      <Avatar [BgColor]="'orange'" [qlTooltip]="'Avatar'"><i class="Fg-light fa-solid fa-pizza-slice"></i></Avatar>
    </div>
    <Card [Caret]="'left'">
      <h5 class="Border-bottom">Title</h5>
      <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
    </Card>
  </TimelineItem>
</Timeline>

```
 
