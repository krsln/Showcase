### Usage

> [![](https://img.shields.io/badge/Main-readme-white)](../../readme.md)
> [![](https://img.shields.io/badge/readme-white)](readme.md)

## TreeView

Component (ql-tree-view)  
~~Directive ()~~  
~~Service ()~~

#### app.module.ts

```typescript
import {TreeViewModule} from '@qrsln/loot-box/Libs/TreeView';

@NgModule({
  imports: [TreeViewModule, /*...*/],
})
```  

#### Usage

```html
<ql-tree-view [SelectionMode]="'Single'" [Items]="Test"
              (SelectedItems)="SelectedItems($event)"></ql-tree-view>
``` 

```typescript
 this.Test = [
  {
    Id: 1,
    Text: 'root1',
    FaIcon: 'far fa-folder',
    Children: [
      {Id: 11, ParentId: 1, Text: 'child1', FaIcon: 'far fa-file-alt',},
      {Id: 12, ParentId: 1, Text: 'child2', FaIcon: 'far fa-file-alt',}
    ]
  } as TreeItem,
  {
    Id: 2,
    Text: 'root2',
    FaIcon: 'far fa-folder',
    Children: [
      {Id: 21, ParentId: 2, Text: 'child2.1', FaIcon: 'far fa-file-alt', Children: []},
      {
        Id: 22, ParentId: 2, Text: 'child2.2', FaIcon: 'far fa-file-alt', Expanded: false, Children: [
          {
            Id: 221, ParentId: 22, Text: 'grandchild2.2.1', FaIcon: 'fas fa-pencil-alt', Children: [
              {Id: 2211, ParentId: 221, Text: 'too far 1', FaIcon: 'far fa-check-square',},
              {Id: 2212, ParentId: 221, Text: 'too far 2', FaIcon: 'far fa-check-square',}
            ]
          },
          {Id: 222, ParentId: 22, Text: 'grandchild2.2.2', FaIcon: 'fas fa-pencil-alt'}
        ]
      }
    ]
  } as TreeItem,
];
``` 
