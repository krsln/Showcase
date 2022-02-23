### TreeView | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-tree-view)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {TreeViewModule} from '@qrsln/loot-box/Libs/TreeView';

@NgModule({
  imports: [TreeViewModule, /*...*/],
})
```  

#### Usage

```html

<div class="Form-check Form-check-inline">
  <input class="Form-check-input" type="checkbox" id="Sort"
         [checked]="Sort" (change)="Sort=!Sort">
  <label class="Form-check-label" for="Sort">Sort</label>
</div>
<div class="Form-check Form-check-inline">
  <input class="Form-check-input" type="checkbox" id="NumberOfChildren"
         [checked]="NumberOfChildren" (change)="NumberOfChildren=!NumberOfChildren">
  <label class="Form-check-label" for="NumberOfChildren">NumberOfChildren</label>
</div>

<div class="Border Rounded P-4 MT-2">
  <div class="Row">
    <div class="Col-12 Col-lg-6">
      <h6>Tree view (Single)</h6>
      <ql-tree-view [SelectionMode]="'Single'" [Items]="Test"
                    [Sort]="Sort" [NumberOfChildren]="NumberOfChildren"
                    (SelectedItems)="SelectedItems($event)"></ql-tree-view>
    </div>
    <div class="Col-12 Col-lg-6">
      <h6>Categories (Multiple)</h6>
      <ql-tree-view [SelectionMode]="'Multiple'" [Items]="Categories"
                    [Sort]="Sort" [NumberOfChildren]="NumberOfChildren"
                    (SelectedItems)="SelectedItems($event)"></ql-tree-view>
    </div>
  </div>
</div>
``` 

```typescript
Test: TreeItem [];
Categories: TreeItem [];

Sort: boolean = false;
NumberOfChildren: boolean = false;

ngOnInit()
{
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

  this.Categories = [];

  const Parents: any[] = [
    {Id: 1, Text: 'Balkans Tours'},
    {Id: 2, Text: 'Spain Tours'},
    {Id: 3, Text: 'Italy Tours'},
  ];

  Parents.forEach(x => this.Categories.push({Id: x.Id, Text: x.Text, Children: []} as unknown as TreeItem));

  for (let i = 10; i <= 30; i++) {
    let parentId = Math.floor(Math.random() * Parents.length) + 1;

    const parent = this.Categories.find(x => x.Id === parentId);
    parent?.Children.push({Id: i, Text: this.Word(4) + ' Tour', ParentId: parentId} as TreeItem);
  }

}

Word(length)
{
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

SelectedItems(results)
{
  console.log('SelectedItems (raw)', results);
  console.log('SelectedItems', results.map(x => x.Id));
}
``` 
