# Breadcrumb ✓✓✓

## Depends
 
## Usage
Component (lb-breadcrumb)

###### Html
```
<lb-breadcrumb [Home]="breadcrumb.Home" [Items]="breadcrumb.Items" [Chevron]="'fas fa-angle-right'" [Label]="'Test current page'"></lb-breadcrumb>
or root
<main>
  <lb-breadcrumb [Home]="Home" [Items]="Items" [Chevron]="'fas fa-angle-right'"></lb-breadcrumb>
  <router-outlet></router-outlet>
</main> 
```
###### Ts
```
   breadcrumb: { Home: BreadcrumbItem, Items: BreadcrumbItem[] };
   this.breadcrumb = {
      Home: {IconClass: 'fas fa-home', Url: '/'} as BreadcrumbItem,
      Items: [
        {Label: 'Sports'},
        {Label: 'Football'},
        {Label: 'Countries', Url: '/Piper'},
        {Label: 'Spain'},
        {Label: 'Squad'},
        {Label: 'google', Url: 'https://www.google.com', IconClass: 'fas fa-external-link-alt'}
      ] as BreadcrumbItem[]
    };

or root Auto

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
app-route 
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
 
## Notes
https://primefaces.org/primeng/#/breadcrumb  

[Chevron] icon class between nav items  
[Home] main page url, icon, label     
[Items] list of others page url, icon, label   

## TODOs
Lazy-Loading routes cause problems

## Screenshots
![](Screenshots/Breadcrumb_2020-01-14.png)
