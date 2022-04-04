### Tabs | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-tabs, NgTabs, Tabs)
- [x] Component (ql-tab-pane, NgTabPane, TabPane)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {TabsModule} from '@qrsln/lootstrap-angular/Libs/Tabs';

@NgModule({
  imports: [TabsModule, /*...*/],
})
```  

#### Usage

```html

<Tabs [Vertical]="true" [Design]="'Pill'">
  <TabPane [Label]="'Home'">
    ...
</Tabs>

```

```html

<Tabs>
  <TabPane [Label]="'Home'" [Anim]="'ZoomIn'">
    <p><strong>Home</strong> {/{LoremIpsum}/}</p>
  </TabPane>
  <TabPane [Label]="'Profile'" [Anim]="'BounceIn'">
    <p><strong>Profile</strong> {/{LoremIpsum}/}</p>
  </TabPane>
  <TabPane [Label]="'Contact'" [Active]="true">
    <p><strong>Contact</strong> {/{LoremIpsum}/}</p>
  </TabPane>
  <TabPane [Label]="'Disabled'" [Disabled]="true">
    <p><strong>Disabled</strong> {/{LoremIpsum}/}</p>
  </TabPane>
</Tabs>

```

```typescript

LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

```
