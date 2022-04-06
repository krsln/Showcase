### TreeView | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-tree-view, NgTreeView, TreeView)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {TreeViewModule} from '@qrsln/lootstrap-angular/Libs/TreeView';

@NgModule({
  imports: [TreeViewModule, /*...*/],
})
```  

#### Usage

```html

<TreeView [Mode]="'Single'" [Items]="Basic"></TreeView>
<TreeView [Mode]="'Multiple'" [Items]="Basic" (SelectedItems)="SelectedItems($event)"></TreeView>

```

```typescript

Basic: TreeItem [] = [
  {Id: 1, Expanded: false, Content: {Text: 'Applications'}, Children: [{Id: 11, Content: {Text: 'WebStorm'}}]},
  {
    Id: 2, Content: {Text: 'src'}, Children: [
      {
        Id: 21, PId: 2, Content: {Text: 'tree-view'}, Children: [
          {Id: 211, PId: 21, Content: {Text: 'tree-view.component.html'}},
          {Id: 212, PId: 21, Content: {Text: 'tree-view.component.ts'}}
        ]
      },
      {
        Id: 22, PId: 2, Expanded: false, Content: {Text: 'Models'}, Children: [
          {Id: 221, PId: 22, Content: {Text: 'index.ts'}}
        ]
      },
    ]
  }
] as TreeItem[];

SelectedItems(results)
{
  console.log('Selected (raw)', results, 'Ids', results.map(x => x.Id));
}

```
