### Animations | Usage

[![](https://img.shields.io/badge/Main-readme-white)](../readme.md)
[![](https://img.shields.io/badge/readme-white)](readme.md)

- [ ] Component ()
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
//...
```  

#### Usage

```html

shakeState = 'start'; // start end
<div [@Shake]="shakeState"></div>
<div [@ShakeAuto]></div>

<div [@FadeInOut]></div>
<div [@FlyInOut]="'in'"></div>
<div [@Overlay]="'enter'"></div>
<div [@ShrinkOut]="'in'"></div>

```

```typescript
import {FlyInOut, FadeInOut, Overlay, ShakeAuto, Shake, ShrinkOut} from '@qrsln/utils/Animations';

 @Component({
  //...
  animations: [ShrinkOut, ShakeAuto, Shake, FlyInOut, FadeInOut, Overlay],
})
```
 
