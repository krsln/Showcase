### Skeleton | Usage

[![Demo](https://img.shields.io/badge/Demo-blue?style=for-the-badge)](https://krsln.github.io/Showcase/Libraries/Skeleton)
[![](https://img.shields.io/badge/Main-projects-white?style=for-the-badge)](../projects.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-skeleton, ql-skeleton-header, ql-skeleton-media, ql-skeleton-paragraph, ql-skeleton-square, ql-skeleton-text)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {SkeletonModule} from '@qrsln/skeleton';

@NgModule({
  imports: [SkeletonModule, /*...*/],
})
```  

#### Usage

```html

<div class="Row G-1">

  <ng-container *ngIf="list.length; else elseTemplate">

    <div class="Col-12 Col-lg-4" *ngFor="let item of list">
      <div class="Shadow Border P-2">
        <div class="D-flex Align-items-center">
          <div class="W-20 W-lg-150 ME-1">
            <img class="W-100 Rounded-circle" src="https://source.unsplash.com/random/100x100?image={{item.id}}"
                 alt=""/>
          </div>
          <div class="Flex-fill MX-2">
            <h5 class="M-0 MT-2">{{item.title}}</h5>
            <p>{{item.desc}}</p>
          </div>
        </div>
        <img class="W-100" style="min-height: 160px" src="https://source.unsplash.com/random/430x180?image={{item.id}}"
             alt=""/>
        <p class="MT-2 MB-1">{{item.text}}</p>
      </div>
    </div>

  </ng-container>
  <ng-template #elseTemplate>

    <div class="Col-12 Col-lg-4" *ngFor="let item of [1,2,3]">
      <ql-skeleton ClassName="Shadow Border">
        <div class="D-flex Align-items-center">
          <div class="W-20 W-lg-15 ME-1">
            <ql-skeleton-square [Anim]="'Shine'" [Circle]="true"></ql-skeleton-square>
          </div>
          <div class="Flex-fill MX-2">
            <ql-skeleton-header [Anim]="'Shine'" [Type]="'H6'"></ql-skeleton-header>
            <ql-skeleton-paragraph [Anim]="'Shine'" [Indentation]="false" [Count]="2"></ql-skeleton-paragraph>
          </div>
        </div>
        <ql-skeleton-media [Anim]="'Shine'" [Height]="180"></ql-skeleton-media>
        <ql-skeleton-paragraph ClassName="M-2" [Anim]="'Shine'" [Count]="2"></ql-skeleton-paragraph>
      </ql-skeleton>
    </div>

  </ng-template>

</div>
``` 

```typescript
 list = [];

ngOnInit()
{
  this.list = [];
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      this.list.push({
        id: Math.floor((Math.random() * 100) + 1),
        title: 'Lorem ipsum',
        desc: 'At vero eos et',
        text: 'Neque porro quisquam est qui dolorem ipsum quia...'
      });
    }
  }, 5 * 1000);
}
``` 
