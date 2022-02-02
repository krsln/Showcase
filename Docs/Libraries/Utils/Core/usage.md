### Core | Usage

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

###### Guid

```typescript 
import {Guid} from '@qrsln/Utils/Core';

  guid: Guid = new Guid();
 
  GuidStringify = () => JSON.stringify(this.guid);

  Guid(): void {
    this.guid = new Guid();
    console.log(this.guid); // Guid {Value: "00000000-0000-0000-0000-000000000000"}
    console.log(this.guid.ToString()); // 00000000-0000-0000-0000-000000000000
    console.log(this.guid.ToJSON()); // {Value: "00000000-0000-0000-0000-000000000000"}
    console.log(JSON.stringify(this.guid)); // {Value: "00000000-0000-0000-0000-000000000000"}
    console.log('IsEmpty', this.guid.IsEmpty()); // true
  }

  GuidNew(): void {
    this.guid = Guid.NewGuid();
    console.log(this.guid); // Guid { Value: 'bb90ef83-1a7e-42b1-90ba-39cdebb6366c' }
    console.log(JSON.stringify(this.guid));  // "bb90ef83-1a7e-42b1-90ba-39cdebb6366c"
  }

  GuidCheck(): void {
    console.log('IsValid', Guid.IsValid(this.guid)); // true
    console.log(Guid.Empty); // 00000000-0000-0000-0000-000000000000
    console.log('IsValid Guid.IsValid(Guid.Empty)', Guid.IsValid(Guid.Empty)); // false
    console.log('Equals this.guid.Equals(this.guid));', this.guid.Equals(this.guid)); // true
    console.log('Equals this.guid.Equals(Guid.NewGuid())', this.guid.Equals(Guid.NewGuid())); // false
  }

```

###### StopWatch

```typescript
import {Sleep, StopWatch} from '@qrsln/Utils/Core';

stopWatch = new StopWatch();

StopWatchStart()
{
  this.stopWatch.Start();
  // await Sleep(10000);
}

StopWatchStop()
{
  this.stopWatch.Stop();
}
```
