### Timeline | Usage

[![](https://img.shields.io/badge/Main-readme-white)](../../readme.md)
[![](https://img.shields.io/badge/readme-white)](readme.md)

- [x] Component (ql-timeline, _ql-timeline-card_)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {TimelineModule} from '@qrsln/loot-box/Libs/Timeline';

@NgModule({
  imports: [TimelineModule, /*...*/],
})
```  

#### Usage

```html

<ql-timeline [Header]="Header" [Description]="Description" [Right]="true" [Layout]="'Side'"
             [Animation]="'shake'" [Steps]="steps"></ql-timeline>
<ql-timeline [Header]="Header" [Description]="Description" [Layout]="'Default'" [Steps]="steps"
             [Animation]="'shake'"></ql-timeline>
<ql-timeline [Header]="Header" [Description]="Description" [Layout]="'Snake'" [Steps]="steps"
             [Animation]="'shake'"></ql-timeline>
<ql-timeline [Header]="Header" [Description]="Description" [Layout]="'Branch'" [Steps]="steps"
             [Animation]="'shake'"></ql-timeline>
``` 

```typescript
Header = 'Timeline';
Description = 'Showcase of my latest works, projects and developments.';
steps: TimelineStep[];

ngOnInit()
{
  this.steps = [
    {
      Card: {
        Title: 'Beginning',
        Content: 'Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        Subtitle: '11 hours ago via Twitter'
      },
      Badge: {
        FaClass: 'far fa-flag',
        // BgColor: 'red',
      } as TimelineBadge
    } as TimelineStep,
    {
      // Right: true,
      Card: {
        Title: 'Second Item',
        Content: 'Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      Badge: {
        FaClass: 'fas fa-gift',
        // BgColor: 'blue',
      } as TimelineBadge
    } as TimelineStep,
    {
      // Right: false,
      Card: {
        Title: 'Last Item',
        Image: 'https://via.placeholder.com/600x200.png',
        Subtitle: '11 hours ago via Twitter',
        Content: 'Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      Badge: {
        FaClass: 'far fa-paper-plane',
        // BgColor: 'red',
      } as TimelineBadge
    } as TimelineStep,
  ];
}
```   
