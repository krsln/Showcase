import{a as U,b as H,c as W,d as C,e as V,f as G,g as K}from"./chunk-OOIDCZXN.js";import{Ca as E,F as c,Fa as A,G as m,H as k,Ha as y,Ja as F,Ka as x,La as S,N as L,Na as h,O,P as u,Xa as z,_,a as w,ba as l,ca as M,ja as R,jb as Z,ma as D,mb as b,oa as g,tb as j,ua as r,va as o,vb as B,wa as d,wb as N,zb as P}from"./chunk-YNLF4HBE.js";var ne=()=>["/NgMapper/Overview"],q=()=>({exact:!1}),ae=()=>["/NgMapper/Usage"],Q=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c({type:i,selectors:[["app-mapper-layout"]],decls:18,vars:10,consts:[[1,"Container"],[1,"Row","G-2"],[1,"Col-12","Col-lg-3"],[1,"Card","Card-body"],[1,"Card-title","Border-bottom"],[1,"FW-normal","FST-italic"],["href","https://www.npmjs.com/package/@angular/google-maps","target","_blank",1,"Btn","Btn-link"],["role","group","aria-label","NgMapper",1,"Btn-group"],["type","button",1,"Btn","Btn-outline-primary",3,"routerLink","routerLinkActive","routerLinkActiveOptions"],[1,"Col-12","Col-lg-9"]],template:function(n,s){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),h(5,"Ng - Mapper"),o(),r(6,"p",5),h(7," Powered by: "),d(8,"br"),r(9,"a",6),h(10,"@angular/google-maps"),o()(),r(11,"div",7)(12,"button",8),h(13," Overview "),o(),r(14,"button",8),h(15," Usage "),o()()()(),r(16,"div",9),d(17,"router-outlet"),o()()()),n&2&&(l(12),g("routerLink",z(6,ne))("routerLinkActive","Active")("routerLinkActiveOptions",z(7,q)),l(2),g("routerLink",z(8,ae))("routerLinkActive","Active")("routerLinkActiveOptions",z(9,q)))},dependencies:[j,B,N]});let t=i;return t})();var Y=(()=>{let i=class i{constructor(){this.Package={Host:"https://img.shields.io/",Style:"?style=for-the-badge",Name:"@qrsln/mapper",npm:"https://www.npmjs.com/package/@qrsln/mapper"}}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c({type:i,selectors:[["app-mapper-overview"]],decls:40,vars:22,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title"],[1,"Badge","Bg-info"],["role","alert",1,"Alert","Alert-outline","MY-3"],["target","_blank",3,"href"],["alt","npm",1,"MB-2","ME-2",3,"src"],["alt","npm bundle size",1,"MB-2","ME-2",3,"src"],[1,"MT-5"],[1,"Table-responsive"],[1,"Table","Table-hover"],["scope","col"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"]],template:function(n,s){n&1&&(r(0,"div",0)(1,"h4",1),h(2,"Mapper "),r(3,"span",2),h(4,"Overview"),o()(),r(5,"div",3)(6,"a",4),d(7,"img",5),o(),d(8,"img",6)(9,"hr")(10,"img",5)(11,"img",5)(12,"img",5)(13,"img",5),o(),r(14,"h5",7),h(15,"Properties"),o(),r(16,"div",8)(17,"table",9)(18,"thead")(19,"tr")(20,"th",10),h(21,"Params"),o(),r(22,"th",10),h(23,"Description"),o()()(),r(24,"tbody")(25,"tr")(26,"td")(27,"code"),h(28,"[Options:MapperOption]"),o()(),r(29,"td")(30,"textarea",11),h(31,`export interface MapperOption {
  type: MapperType;
  mapType: MapType;
  center: LatLng;
  infoContent?: string;
  markers: Marker[];
  zoom: Zoom;
  zoomControl?: boolean;
  scrollWheel?: boolean;
  fullscreenControl?: boolean;
  mapTypeControl?: boolean;
  streetViewControl?: boolean;
}
          `),o()()()()()(),r(32,"h5",7),h(33,"***.module.ts"),o(),r(34,"textarea",11),h(35,`import {MapperModule} from '@qrsln/mapper';

@NgModule({
  imports: [MapperModule, /*...*/],
})
  `),o(),r(36,"h5",7),h(37,"index.html"),o(),r(38,"textarea",11),h(39,`<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key="><\/script>
<!--<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"><\/script>-->
  `),o()()),n&2&&(l(6),A("href",s.Package.npm,_),l(),y("src","",s.Package.Host,"npm/v/",s.Package.Name,"",s.Package.Style,"",_),l(),y("src","",s.Package.Host,"bundlephobia/minzip/",s.Package.Name,"",s.Package.Style,"",_),l(2),y("src","",s.Package.Host,"npm/dw/",s.Package.Name,"",s.Package.Style,"",_),l(),y("src","",s.Package.Host,"npm/dm/",s.Package.Name,"",s.Package.Style,"",_),l(),y("src","",s.Package.Host,"npm/dy/",s.Package.Name,"",s.Package.Style,"",_),l(),y("src","",s.Package.Host,"npm/dt/",s.Package.Name,"",s.Package.Style,"",_),l(17),g("Lang","typescript"),l(4),g("Lang","typescript"),l(4),g("Lang","html"))},dependencies:[C]});let t=i;return t})();var J=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=m({type:i}),i.\u0275inj=u({});let t=i;return t})();var re=["gMap"],I=function(t){return t.HYBRID="hybrid",t.ROADMAP="roadmap",t.SATELLITE="satellite",t.TERRAIN="terrain",t}(I||{}),v=function(t){return t[t.Basic=0]="Basic",t[t.RouteMap=1]="RouteMap",t}(v||{}),oe=(()=>{class t{Markers=[];gMap;map;constructor(){}CreateMap(a){let e=w({center:new google.maps.LatLng(41.015137,28.97953),zoom:5,maxZoom:13,minZoom:2,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,streetViewControl:!1},a);this.map=new google.maps.Map(this.gMap.nativeElement,e)}CreateRouteMap(a){this.CreateMap(a);let e=[],n=new google.maps.InfoWindow;this.Markers.forEach((s,p)=>{let T=this.AddMarker({marker:s,label:(p+1).toString()},{});e.push(T.getPosition())}),this.SetPolyline(e),this.SetCleanRoadMap(),this.ExtendBounds()}AddMarker(a,e){let n=new google.maps.Marker({title:a.marker.Title,position:new google.maps.LatLng(a.marker.LatLng.Lat,a.marker.LatLng.Lng),draggable:!1,animation:google.maps.Animation.DROP});a.label&&n.setLabel({color:"white",fontWeight:"bold",text:a.label}),this.map&&n.setMap(this.map);let s=new google.maps.InfoWindow({content:a.marker.Title});if(e.content&&s.setOptions({content:e.content}),n.addListener("click",()=>{s.open(this.map,n),!e.noAnim&&(n.getAnimation()!==null?n.setAnimation(null):n.setAnimation(google.maps.Animation.BOUNCE))}),e.open){let p=n.getPosition();p&&this.map&&this.map.setCenter(p),setTimeout(()=>{s.open(this.map,n)},300)}return n}SetPolyline(a){let e={path:google.maps.SymbolPath.FORWARD_CLOSED_ARROW,scaledSize:new google.maps.Size(40,40),strokeColor:"#ff3333"},n=new google.maps.Polyline({path:a,icons:[{icon:e,repeat:"100px",offset:"100%"}],map:this.map});this.SetPolylineAnimate(n)}SetPolylineAnimate(a){let e=0;window.setInterval(()=>{e=(e+1)%200;let n=a.get("icons");n&&(n[0].offset=e/5+"%"),a.set("icons",n)},20)}ExtendBounds(){let a=new google.maps.LatLngBounds;this.Markers&&this.Markers.forEach(e=>{a.extend(new google.maps.LatLng(e.LatLng.Lat,e.LatLng.Lng))}),setTimeout(()=>{this.map&&this.map.fitBounds(a)},250)}SetCleanRoadMap(){let a=[{featureType:"administrative.province",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels",stylers:[{visibility:"off"}]}];this.map&&this.map.setOptions({styles:a})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=c({type:t,selectors:[["ql-mapper"],["NgMapper"],["Mapper"]],viewQuery:function(e,n){if(e&1&&F(re,7),e&2){let s;x(s=S())&&(n.gMap=s.first)}},inputs:{Markers:"Markers"},decls:2,vars:0,consts:[[1,"Mapper"],["gMap",""]],template:function(e,n){e&1&&d(0,"div",0,1)},styles:["ql-mapper[_ngcontent-%COMP%], NgMapper[_ngcontent-%COMP%], Mapper[_ngcontent-%COMP%]{position:relative;display:block}.Mapper[_ngcontent-%COMP%]{position:relative;display:block;width:100%;height:100%;min-height:300px}"]})}return t})(),$=(()=>{class t{elementRef;viewContainerRef;Options;el;constructor(a,e){this.elementRef=a,this.viewContainerRef=e,this.el=this.elementRef.nativeElement}ngOnInit(){if(!this.Options)return;let a={};this.Options.center&&(a.center=new google.maps.LatLng(this.Options.center.Lat,this.Options.center.Lng)),this.Options.scrollWheel!==void 0&&(a.scrollwheel=this.Options.scrollWheel),this.Options.zoomControl!==void 0&&(a.zoomControl=this.Options.zoomControl),this.Options.mapTypeControl!==void 0&&(a.mapTypeControl=this.Options.mapTypeControl),this.Options.streetViewControl!==void 0&&(a.streetViewControl=this.Options.streetViewControl),this.Options.fullscreenControl!==void 0&&(a.fullscreenControl=this.Options.fullscreenControl),this.Options.mapType&&(a.mapTypeId=this.Options.mapType),this.Options.zoom&&(a.zoom=this.Options.zoom.val||4,a.maxZoom=this.Options.zoom.max||13,a.minZoom=this.Options.zoom.min||2);let e=this.GetComponentRef();e.instance.Markers=this.Options.markers||[],this.Options.type===v.Basic&&(e.instance.CreateMap(a),this.Options.infoContent&&e.instance.AddMarker({marker:{Title:"test",LatLng:this.Options.center}},{content:this.Options.infoContent,open:!0})),this.Options.type===v.RouteMap&&e.instance.CreateRouteMap(a)}GetComponentRef(){let a=this.viewContainerRef.createComponent(oe),e=a.hostView.rootNodes[0];return this.el.appendChild(e),a}static \u0275fac=function(e){return new(e||t)(M(L),M(R))};static \u0275dir=k({type:t,selectors:[["","qlMapper",""],["","Mapper",""]],inputs:{Options:"Options"}})}return t})(),X=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=m({type:t});static \u0275inj=u({imports:[b,J]})}return t})();var he=[{name:"mapsApi",src:"https://maps.googleapis.com/maps/api/js?key="},{name:"rangeSlider",src:"../../../assets/js/ion.rangeSlider.min.js"}],ee=(()=>{let i=class i{constructor(){this.scripts={},he.forEach(e=>{this.scripts[e.name]={loaded:!1,src:e.src}})}load(...e){let n=Promise.resolve();e.forEach(s=>{n=n.then(()=>this.loadScript(s)).then(p=>console.log(p))})}loadScript(e){return new Promise((n,s)=>{if(this.scripts[e].loaded)n({script:e,loaded:!0,status:"Already Loaded"});else if(typeof window<"u"&&typeof document<"u"){let p=document.createElement("script");p.type="text/javascript",p.src=this.scripts[e].src,p.readyState?p.onreadystatechange=()=>{(p.readyState==="loaded"||p.readyState==="complete")&&(p.onreadystatechange=null,this.scripts[e].loaded=!0,n({script:e,loaded:!0,status:"Loaded"}))}:p.onload=()=>{this.scripts[e].loaded=!0,n({script:e,loaded:!0,status:"Loaded"})},p.onerror=T=>n({script:e,loaded:!1,status:"Loaded"}),document.getElementsByTagName("head")[0].appendChild(p)}})}};i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=O({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();function pe(t,i){if(t&1&&(r(0,"ExampleViewer")(1,"div",4),d(2,"div",5),o(),r(3,"Tabs",6)(4,"TabPane",7)(5,"textarea",8),h(6,`      <div class="Border Rounded MT-2 P-2" style="height: 400px;" Mapper [Options]="mapOptionBasic"></div>
        `),o()(),r(7,"TabPane",7)(8,"textarea",8),h(9,`    mapOptionBasic: MapperOption = {
      type: MapperType.Basic,
      mapType: MapType.HYBRID,
      zoomControl: false,
      mapTypeControl: false,
      center: {Lat: 41.015137, Lng: 28.97953},
      infoContent: \`
  <div id="content">
    <div id="siteNotice"></div>
    <h1 id="firstHeading" class="firstHeading">Uluru</h1>
    <div id="bodyContent">
      <p>
        <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of
        the Northern Territory, central Australia. It lies 335km (208mi) south west of the nearest large town,
        Alice Springs; 450km (280mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru -
        Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the
        area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.
      </p>
      <p>
        Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru">
        https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).
      </p>
    </div>
  </div>
      \`,
      zoom: {val: 15, max: 18},
      markers: []
    } as MapperOption;
        `),o()()()()),t&2){let a=E();l(2),g("Options",a.mapOptionBasic),l(),g("Design","Pill"),l(),g("Label","HTML"),l(),g("Lang","html"),l(2),g("Label","TypeScript"),l(),g("Lang","typescript")}}function de(t,i){if(t&1&&(r(0,"ExampleViewer")(1,"div",4),d(2,"div",9),o(),r(3,"Tabs",6)(4,"TabPane",7)(5,"textarea",8),h(6,`      <div Mapper [Options]="mapOptionRouteMap"></div>
        `),o()(),r(7,"TabPane",7)(8,"textarea",8),h(9,`    mapOptionRouteMap: MapperOption = {
      type: MapperType.RouteMap,
      mapType: MapType.ROADMAP,
      zoomControl: false,
      // center: {Lat: 41.015137, Lng: 28.97953},
      // zoom: {val: 10, min: 4, max: 20},
      markers: [
        {Title: '\u0130stanbul', LatLng: {Lat: 41.015137, Lng: 28.979530}},
        {Title: 'Moscow', LatLng: {Lat: 55.751244, Lng: 37.618423}},
        {Title: 'Paris', LatLng: {Lat: 48.864716, Lng: 2.349014}},
      ]
    } as MapperOption;
        `),o()()()()),t&2){let a=E();l(2),g("Options",a.mapOptionRouteMap),l(),g("Design","Pill"),l(),g("Label","HTML"),l(),g("Lang","html"),l(2),g("Label","TypeScript"),l(),g("Lang","typescript")}}var te=(()=>{let i=class i{constructor(e){this.scriptService=e,this.mapOptionRouteMap={type:v.RouteMap,mapType:I.ROADMAP,zoomControl:!1,markers:[{Title:"\u0130stanbul",LatLng:{Lat:41.015137,Lng:28.97953}},{Title:"Moscow",LatLng:{Lat:55.751244,Lng:37.618423}},{Title:"Paris",LatLng:{Lat:48.864716,Lng:2.349014}}]},this.mapOptionBasic={type:v.Basic,mapType:I.HYBRID,zoomControl:!1,mapTypeControl:!1,center:{Lat:41.015137,Lng:28.97953},infoContent:`
<div id="content">
  <div id="siteNotice"></div>
  <h1 id="firstHeading" class="firstHeading">Uluru</h1>
  <div id="bodyContent">
    <p>
      <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of
      the Northern Territory, central Australia. It lies 335km (208mi) south west of the nearest large town,
      Alice Springs; 450km (280mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru -
      Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the
      area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.
    </p>
    <p>
      Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru">
      https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).
    </p>
  </div>
</div>
    `,zoom:{val:15,max:18},markers:[]},this.Ready=!1}ngOnInit(){this.scriptService.loadScript("mapsApi").then(e=>{this.Ready=e,console.log("scriptService",e)}).catch(e=>console.log(e))}};i.\u0275fac=function(n){return new(n||i)(M(ee))},i.\u0275cmp=c({type:i,selectors:[["app-mapper-usage"]],decls:10,vars:2,consts:[[1,"Card","Card-body"],[1,"Card-title","Border-bottom"],[1,"MB-2"],[4,"ngIf"],[1,"Body"],["Mapper","",1,"Border","Rounded","MT-2","P-2",2,"height","400px",3,"Options"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],["Mapper","",3,"Options"]],template:function(n,s){n&1&&(r(0,"div",0)(1,"h5",1),h(2,"Mapper"),o(),d(3,"p"),r(4,"h6",2),h(5,"Basic"),o(),D(6,pe,10,6,"ExampleViewer",3),r(7,"h6",2),h(8,"RouteMap"),o(),D(9,de,10,6,"ExampleViewer",3),o()),n&2&&(l(6),g("ngIf",s.Ready),l(3),g("ngIf",s.Ready))},dependencies:[Z,H,U,G,C,$]});let t=i;return t})();var ce=[{path:"",redirectTo:"Overview",pathMatch:"prefix"},{path:"",children:[{path:"",data:{breadcrumb:"Mapper"},component:Q,children:[{path:"Overview",data:{breadcrumb:"Overview"},component:Y},{path:"Usage",data:{breadcrumb:"Usage"},component:te}]}]}],ie=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=m({type:i}),i.\u0275inj=u({imports:[P.forChild(ce),P]});let t=i;return t})();var $e=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=m({type:i}),i.\u0275inj=u({imports:[b,ie,W,K,V,X]});let t=i;return t})();export{$e as NgMapperModule};
