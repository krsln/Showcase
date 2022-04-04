### Avatar | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [x] Component (ql-avatar, NgAvatar, Avatar)
- [x] Component (ql-avatar-group, NgAvatarGroup, AvatarGroup)
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {AvatarModule} from '@qrsln/lootstrap-angular/Libs/Avatar';

@NgModule({
  imports: [AvatarModule, /*...*/],
})
```  

#### Usage

```html

<Avatar [Img]="'https://i.pravatar.cc/500'" [Alt]="'John Doe'"></Avatar>
<!--Letter avatars-->
<Avatar [Letter]="'I'" [BgColor]="'#25C0F4'"></Avatar>
<Avatar [Letter]="'AM'" [BgColor]="'pink'" [Alt]="'AM I?'"></Avatar>
<!--Icon avatars - FA Icons-->
<Avatar [BgColor]="'#25C0F4'"><i class="Fg-light fa-regular fa-credit-card"></i></Avatar>

<!--Badge & Variants: Square, Rounded and Circle-->
<Avatar [Badge]="true" [Variant]="'Rounded'" [Anchor]="'Top'" [Img]="'https://i.pravatar.cc/500'"></Avatar>
<Avatar [Badge]="true" [Variant]="'Square'" [Img]="'https://i.pravatar.cc/510'"></Avatar>
<Avatar [Badge]="true" [Online]="true" [Img]="'https://i.pravatar.cc/520'"></Avatar>

```

```html

<!--Avatar Group-->
<AvatarGroup [ImgList]="Images.slice(0,3)"></AvatarGroup>
<AvatarGroup [ImgList]="Images.slice(0,4)" [Reversed]="true"></AvatarGroup>

<!--Avatar Group - mixed-->
<AvatarGroup [ImgList]="Images"></AvatarGroup>

<!--Avatar Group - More+-->
<AvatarGroup [ImgList]="Images" [More]="true"></AvatarGroup>

```

```typescript

Images = [];

ngOnInit()
{
  this.Images = Array.from({length: 10}, (_, i) => 'https://i.pravatar.cc/' + (400 + (i * 7)));
}

```
