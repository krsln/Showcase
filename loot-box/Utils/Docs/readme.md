### Readme

> [![](https://img.shields.io/badge/Main-readme‌‌‌‌‌‌‌-white)](../../readme.desc.md)
> [![](https://img.shields.io/badge/usage‌‌‌‌‌‌‌-orange)](usage.md)

### Utils

[![Progress](https://img.shields.io/badge/Demo-☐☐☐☐☐‌‌‌‌‌‌‌-blue)](https://krsln.github.io/NgLootBox/LootBox/Utils)

###### Guid

```typescript
    let e = new Guid();
e = Guid.NewGuid(); 
```

###### StopWatch

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

###### WebStorage

```typescript
    // constructor(private webStorage: WebStorage){}
webStorage.Set(StorageType.Local, 'Auth', response.Customer, 60);
this.Customer = webStorage.Get(StorageType.Local, 'Auth');
```
