### Breadcrumb | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-breadcrumb, Breadcrumb)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {BreadcrumbModule} from '@qrsln/lootstrap-angular/Libs/Breadcrumb';

@NgModule({
  imports: [BreadcrumbModule, /*...*/],
})
```  

#### Usage

```html

<div class="Border Rounded P-4 MT-2">
  <Breadcrumb [Root]="Root" [Items]="Items"></Breadcrumb>
  <Breadcrumb [Root]="Root" [Items]="Items" [Chevron]="'Large'"></Breadcrumb>
  <Breadcrumb [Root]="Root" [Items]="Items" [Chevron]="'VerticalBar'"></Breadcrumb>
</div>

<h5>Letter Chevron</h5>
<div class="Border Rounded P-4 MT-2">
  <Breadcrumb [Root]="Root" [Items]="Items" [Letter]="'/'"></Breadcrumb>
  <Breadcrumb [Root]="Root" [Items]="Items" [Letter]="'~'"></Breadcrumb>
</div>

```

```typescript
Root = {FaIcon: 'fa-solid fa-house-chimney', Href: '/'} as BreadcrumbItem;
Items = [
  {Label: 'Avatar', Href: '/LootStrapNg'},
  {Label: 'Google', Href: 'https://www.google.com', External: true, FaIcon: 'fa-solid fa-arrow-up-right-from-square'},
  {Label: 'Breadcrumb'},
] as BreadcrumbItem[];
```

#### Usage for Layouts

```typescript
// **...RoutingModule**
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', data: {breadcrumb: 'LootstrapNg'}, component: LootstrapNgMainComponent, children: [
          {path: 'Avatar', data: {breadcrumb: 'Avatar'}, component: NgAvatarComponent},
          {path: 'Breadcrumb', data: {breadcrumb: 'Breadcrumb'}, component: NgBreadcrumbComponent},
          {path: 'Card', data: {breadcrumb: 'Card'}, component: NgCardComponent},
          {path: 'Carousel', data: {breadcrumb: 'Carousel'}, component: NgCarouselComponent},
          {path: 'Pagination', data: {breadcrumb: 'Pagination'}, component: NgPaginationComponent},
          {path: 'Rating', data: {breadcrumb: 'Rating'}, component: NgRatingComponent},
          {path: 'Tabs', data: {breadcrumb: 'Tabs'}, component: NgTabsComponent},
          {path: 'Time', data: {breadcrumb: 'Time'}, component: NgTimeComponent},
          {path: 'Timeline', data: {breadcrumb: 'Timeline'}, component: NgTimelineComponent},
        ]
      }
    ]
  }];
```

```html
<!--layout.component-->
<div class="Container">
  <Breadcrumb [Root]="Root" [Autoload]="true" [Chevron]="'Large'"></Breadcrumb>
</div>
```

```typescript
// **LayoutComponent**
export class LayoutComponent implements OnInit {
  Root: BreadcrumbItem = {FaIcon: 'fas fa-home', Href: '/'} as BreadcrumbItem;
} 
```
