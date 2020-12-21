> [Main](../../readme.md) / [Readme](readme.md) ~ **Usage**

## Piper
Pipe ( | lbTruncate)  
Pipe ( | lbSanitize)  

#### Depends Local

#### Depends
 
#### SanitizePipe
> lbSanitize
```
<span [innerHTML]="description|lbSanitize"></span>

<td *ngIf="i>0" [innerHTML]="entry.attributes[i] | lbSanitize"></td>
```
#### TruncatePipe
> lbTruncate
```
{{description|lbTruncate:size}}

* | lbTruncate:40:'...:p'
* | lbTruncate:40
* | lbTruncate
```

###### app.module.ts
```
import {PiperModule} from '@qrsln/piper';

@NgModule({
  imports: [PiperModule, ...],

```  
