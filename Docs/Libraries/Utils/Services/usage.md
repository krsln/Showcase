### Services | Usage

[![](https://img.shields.io/badge/Main-readme-white?style=for-the-badge)](../readme.md)
[![](https://img.shields.io/badge/readme-white?style=for-the-badge)](readme.md)

- [ ] Component ()
- [ ] Directive ()
- [ ] Service ()

#### app.module.ts

```typescript
import {WebStorage, DomService} from '@qrsln/Utils/Services';

@NgModule({
  providers: [WebStorage, DomService, /*...*/]
})

```  

#### Usage

###### WebStorage

````html
<div class="Form W-50">
  <input type="text" class="Form-input" [(ngModel)]="resultStorage" readonly disabled>
  <label class="Form-label"></label>
</div>

<div class="Row">
  <div class="Col-12 Col-lg-12">
    <div class="Btn-group Btn-group-sm MB-2 ME-2" role="group">
      <button class="Btn Btn-sm Btn-outline-primary" (click)="Store('local')">add to local</button>
      <button class="Btn Btn-sm Btn-outline-primary" (click)="Store('local',true)">Remove</button>
      <button class="Btn Btn-sm Btn-outline-primary" (click)="Check('local')">Check</button>
    </div>
    <div class="Btn-group Btn-group-sm MB-2 ME-2" role="group">
      <button class="Btn Btn-sm Btn-outline-secondary" (click)="Store('session')">add to session</button>
      <button class="Btn Btn-sm Btn-outline-secondary" (click)="Store('session',true)">Remove</button>
      <button class="Btn Btn-sm Btn-outline-secondary" (click)="Check('session')">Check</button>
    </div>
    <div class="Btn-group Btn-group-sm MB-2 ME-2" role="group">
      <button class="Btn Btn-sm Btn-outline-success" (click)="Store('cookie')">add to cookie</button>
      <button class="Btn Btn-sm Btn-outline-success" (click)="Store('cookie',true)">Remove</button>
      <button class="Btn Btn-sm Btn-outline-success" (click)="Check('cookie')">Check</button>
    </div>
  </div>
</div>
````
```typescript
import {StorageType, WebStorageService} from '@qrsln/utils/Services';

export class TestComponent implements OnInit {

  resultStorage: string | undefined;

  constructor(private webStorage: WebStorageService) {
  }

  Store(where: string, remove: boolean = false): void {
    if (remove) {
      this.resultStorage = 'removed';
    }

    if (where === 'local') {
      if (remove) {
        this.webStorage.Remove(StorageType.Local, 'TestLocal');
      } else {
        this.resultStorage = JSON.stringify(this.webStorage.Set(StorageType.Local, 'TestLocal', 'Test Local Value'));
      }
    } else if (where === 'session') {
      if (remove) {
        this.webStorage.Remove(StorageType.Session, 'TestSession');
      } else {
        this.resultStorage = JSON.stringify(this.webStorage.Set(StorageType.Session, 'TestSession', 'Test Session Value'));
      }
    } else if (where === 'cookie') {
      if (remove) {
        this.webStorage.Remove(StorageType.Cookie, 'TestCookie');
      } else {
        this.resultStorage = JSON.stringify(this.webStorage.Set(StorageType.Cookie, 'TestCookie', 'Test Cookie Value'));
      }
    }
    console.log(this.resultStorage);
  }

  Check(where: string): void {
    if (where === 'local') {
      this.resultStorage = JSON.stringify(this.webStorage.Get(StorageType.Local, 'TestLocal'));
    } else if (where === 'session') {
      this.resultStorage = JSON.stringify(this.webStorage.Get(StorageType.Session, 'TestSession'));
    } else if (where === 'cookie') {
      this.resultStorage = JSON.stringify(this.webStorage.Get(StorageType.Cookie, 'TestCookie'));
    }
    console.log(this.resultStorage);
  }

}

```

###### DomService

`````typescript
import {DomService} from '@qrsln/utils/Services';
import {TetsComponent} from './';

@Directive({
  selector: 'input[appTest]',
  providers: [DomService]
})
export class TestDirective implements OnDestroy {

  private readonly el!: HTMLInputElement;
  private componentRef!: ComponentRef<TetsComponent>;

  constructor(private elementRef: ElementRef, private domService: DomService) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('click', ['$event']) OnClicked($event: any): void {
    if (!this.componentRef) {
      this.Show(this.el.value);
    } else {
      this.componentRef.instance.Show($event);
    }
  }

  OnChange(value: string): boolean {
    const event = new Event('input');
    this.el.value = value;
    return this.el.dispatchEvent(event);
  }

  Show(initialValue?: string): string {
    this.componentRef = this.domService.Append(TetsComponent, this.el, true);

    this.componentRef.instance.OnChanged.subscribe((value: string) => this.OnChange(value));
    // this.componentRef.instance.OnClosed.subscribe(id => this.domService.Remove(this.componentRef));

    this.componentRef.instance.initialValue = initialValue;

    return this.componentRef.instance.Id;
  }

  ngOnDestroy(): void {
    this.domService.Remove(this.componentRef);
  }
}

`````
 
