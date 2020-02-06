## Breadcrumb
Component (lb-breadcrumb)  
Directive ()  
Service ()  

#### Depends Local

#### Depends
**FontAwesome** if u use their icon class  

###### Html
```
<lb-breadcrumb [Home]="breadcrumb.Home" [Items]="breadcrumb.Items" [Chevron]="'fas fa-angle-right'"
             [Label]="breadcrumb.Label"></lb-breadcrumb>
```
###### Ts
```
   breadcrumb: { Home: BreadcrumbItem, Items: BreadcrumbItem[], Label: string };
   this.breadcrumb = {
      Home: {IconClass: 'fas fa-home', Url: '/'} as BreadcrumbItem,
      Label:'Test current page',
      Items: [
        {Label: 'Sports'},
        {Label: 'Football'},
        {Label: 'Countries', Url: '/Piper'},
        {Label: 'Spain'},
        {Label: 'Squad'},
        {Label: 'google', Url: 'https://www.google.com', IconClass: 'fas fa-external-link-alt'}
      ] as BreadcrumbItem[]
    };
```
###### Html Auto
``` 
<main>
  <lb-breadcrumb [Home]="Home" [Items]="Items" [Chevron]="'fas fa-angle-right'"></lb-breadcrumb>
  <router-outlet></router-outlet>
</main> 
```
###### Ts Auto
**app-route**
```
const routes: Routes = [
  {
    data: {breadcrumb: null},
    path: '', component: AppComponent, children: [
      {path: '', redirectTo: '/Home', pathMatch: 'full'},
    ]
  },
  {path: 'Home', component: HomeComponent},
  {path: 'Mapper', data: {breadcrumb: 'Mapper'}, component: MapperComponent},
  {
    path: 'Timeline', data: {breadcrumb: 'Timeline'}, component: TimelineComponent, children: [
      {path: 'Piper', data: {breadcrumb: 'Piper'}, component: PiperComponent},
      {path: 'Notify', data: {breadcrumb: 'path'}, component: NotifyTestComponent, children: []},
    ]
  }
];
```
**AppComponent**
```
export class AppComponent implements OnInit {
  readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  Home: BreadcrumbItem = {IconClass: 'fas fa-home', Url: '/'} as BreadcrumbItem;
  Items: BreadcrumbItem[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.Items = [];
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.Items = this.createBreadcrumbs(this.activatedRoute.root));
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbItem[] = []): BreadcrumbItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    // noinspection LoopStatementThatDoesntLoopJS
    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data[this.ROUTE_DATA_BREADCRUMB];
      if (!!label) {
        breadcrumbs.push({Label: label, Url: url} as BreadcrumbItem);
      }
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

  } 
} 
```
###### Features
 Params | desc  
 --- | ---  
[Chevron] | icon class between nav items  
[Home] | main page url, icon, label     
[Items] | list of others page url, icon, label 

###### app.module.ts
```
import {BreadcrumbModule} from '@qrsln/loot-box/Libs/Breadcrumb';

@NgModule({
  imports: [BreadcrumbModule, ...],

```  
