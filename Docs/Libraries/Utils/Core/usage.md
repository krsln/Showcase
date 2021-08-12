### Usage

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../../../projects/utils/readme.desc.md)
> [![](https://img.shields.io/badge/readme-white)](../../../../projects/utils/Core/Docs/readme.md)

### Utils - Core

###### Guid

```typescript
import {Guid} from '@qrsln/loot-box/Utils';
``` 

```typescript 
class name{

  guid: Guid = new Guid();

  GuidStringify = () => JSON.stringify(this.guid);

  Guid() {
    this.guid = new Guid();
    console.log(this.guid); // Guid {Value: "00000000-0000-0000-0000-000000000000"}
    console.log(this.guid.ToString()); // 00000000-0000-0000-0000-000000000000
    console.log(this.guid.ToJSON()); // {Value: "00000000-0000-0000-0000-000000000000"}
    console.log(JSON.stringify(this.guid)); // {Value: "00000000-0000-0000-0000-000000000000"}
    console.log('IsEmpty', this.guid.IsEmpty()); // true
  }

  GuidNew() {
    this.guid = Guid.NewGuid();
    console.log(this.guid); // Guid { Value: 'bb90ef83-1a7e-42b1-90ba-39cdebb6366c' }
    console.log(JSON.stringify(this.guid));  // "bb90ef83-1a7e-42b1-90ba-39cdebb6366c"
  }

  GuidCheck() {
    console.log('IsValid', Guid.IsValid(this.guid)); // true
    console.log(Guid.Empty); // 00000000-0000-0000-0000-000000000000
    console.log('IsValid Guid.IsValid(Guid.Empty)', Guid.IsValid(Guid.Empty)); // false
    console.log('Equals this.guid.Equals(this.guid));', this.guid.Equals(this.guid)); // true
    console.log('Equals this.guid.Equals(Guid.NewGuid())', this.guid.Equals(Guid.NewGuid())); // false
  }
}
```

###### StopWatch

```typescript
import {Sleep, StopWatch} from '@qrsln/loot-box/Utils';
``` 

```typescript
(async () => {
  const watcher = StopWatch.StartNew();
  watcher.Stop();
  console.log(watcher.Elapsed);
  console.log("Tasks take " + watcher.ElapsedMilliseconds + " milliseconds");

  const stopWatch = new StopWatch();
  stopWatch.Start();
  await Sleep(10000);
  stopWatch.Stop();
  // Get the elapsed time as a TimeSpan value.
  const ts = stopWatch.Elapsed;
})();
```
