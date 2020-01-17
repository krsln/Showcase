# Piper 

## Depends

## Usage 
Pipe ( | lbTruncate)  
Pipe ( | lbSanitize)  

#### SanitizePipe
> lbSanitize
```
<td *ngIf="i>0" [innerHTML]="entry.attributes[i] | lbSanitize"></td>
```
#### TruncatePipe
> lbTruncate
```
* | lbTruncate:40:'...:p'
* | lbTruncate:40
* | lbTruncate
```
![](Screenshots/Piper.png "Piper") 
