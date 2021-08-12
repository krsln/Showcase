### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../../../projects/utils/readme.desc.md)
> [![](https://img.shields.io/badge/readme-white)](../../../../projects/utils/Services/Docs/readme.md)

### Utils - Services
 
###### WebStorage

```typescript
import {WebStorage} from './Utils/WebStorage';

@NgModule({
  providers: [WebStorage]
})
``` 

```typescript
    // constructor(private webStorage: WebStorage){}
    webStorage.Set(StorageType.Local, 'Auth', response.Customer, 60);
    this.Customer = webStorage.Get(StorageType.Local, 'Auth');
```
