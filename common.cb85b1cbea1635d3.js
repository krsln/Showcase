"use strict";(self.webpackChunkShowcase=self.webpackChunkShowcase||[]).push([[592],{3472:(m,d,r)=>{r.d(d,{U6:()=>n.U});var n=r(8203);r(5676),r(690)},7851:(m,d,r)=>{r.d(d,{O:()=>g});class n{constructor(){this.locale="en"}Date(o,e){return new Date(Date.parse(o))}Format(o,e){const i=this.GetSeparator(e),l=e.split(i),a=[];return l.forEach((c,f)=>{a.push(this.CheckFromDate(o,c))}),a.join(i)}CheckFromDate(o,e){switch(e){case"YYYY":return o.getFullYear().toString();case"YY":return o.getFullYear().toString().substr(1,2);case"MMMM":return o.toLocaleDateString(this.locale,{month:"long"});case"MMM":return o.toLocaleDateString(this.locale,{month:"short"});case"MM":return o.getMonth()+1<10?"0"+(o.getMonth()+1):(o.getMonth()+1).toString();case"M":return o.getMonth().toString();case"DD":return o.getDate()<10?"0"+o.getDate():o.getDate().toString();case"D":return o.getDate().toString();default:return""}}GetSeparator(o){let e="";return o.split("-").length>1?e="-":o.split("/").length>1?e="/":o.split(".").length>1?e=".":o.split(" ").length>1&&(e=" "),e}}class g{constructor(o="en-US"){this.Current=new Date,this.Today=new Date,this.locale="en-US",this.Formatter=new n,this.Year=()=>this.Current.getFullYear(),this.DayOfMonth=()=>this.Current.getDate(),this.Format=(e,i="YYYY/MM/DD")=>this.Formatter.Format(e,i),this.ToDate=(e,i="YYYY/MM/DD")=>this.Formatter.Date(e,i),this.locale=o,this.Formatter.locale=o}Subtract(o,e){if("days"===e&&this.Current.setDate(this.Current.getDate()-o),"months"===e){const i=this.Current.getDate();this.Current.setMonth(this.Current.getMonth()-o),this.Current.getDate()<i&&this.Current.setDate(0)}if("years"===e){const i=this.Current.getMonth();this.Current.setFullYear(this.Current.getFullYear()-o),i<this.Current.getMonth()&&this.Current.setDate(0)}}Add(o,e){if("days"===e&&this.Current.setDate(this.Current.getDate()+o),"months"===e){const i=this.Current.getDate();this.Current.setMonth(this.Current.getMonth()+o),this.Current.getDate()<i&&this.Current.setDate(0)}if("years"===e){const i=this.Current.getMonth();this.Current.setFullYear(this.Current.getFullYear()+o),i<this.Current.getMonth()&&this.Current.setDate(0)}}Month(o="long"){return{Value:this.Current.getMonth(),Text:this.Current.toLocaleDateString(this.locale,{month:o})}}Day(o="long"){return{Value:this.Current.getDay(),Text:this.Current.toLocaleDateString(this.locale,{weekday:o})}}WeekDays(o="short"){const e=new Date,i=e.getDay(),l=0===i?6:i-1,c=new Date(new Date(e).setDate(e.getDate()-l)),f=[];for(let _=0;_<7;_++)f.push(c.toLocaleDateString(this.locale,{weekday:o})),c.setDate(c.getDate()+1);return f}MonthNames(o="long"){const e=new Date(this.Current.getFullYear(),0,1),i=[];for(let l=0;l<12;l++)i.push({Value:e.getMonth(),Text:e.toLocaleDateString(this.locale,{month:o})}),e.setMonth(e.getMonth()+1);return i}MonthlyCalendar(){const o=this.Current.getFullYear(),e=this.Current.getMonth()+1,i=new Date(o,e-1,1),a=new Date(o,e,0).getDate(),_=12===e?1:e+1,v=12===e?o+1:o,p=new Date(1===e?o-1:o,1===e?12:e-1,0),u=new Date(v,_,1),s=new Date(i),h=i.getDay(),b=[];for(let C=0;C<6;C++){const D=[];for(let T=0;T<7;T++){const w=h>0?h-1:6,M=7*C+(T+1)-w;if(T<w&&0===C){const k=new Date(p);k.setDate(k.getDate()-w+(T+1)),D.push({IsPrevMonth:!0,Date:new Date(k),FormattedDate:this.Format(k),DayOfMonth:k.getDate()})}else M<=a?(D.push({IsWeekEnd:-1!==[6,0].indexOf(s.getDay()),Date:new Date(s),FormattedDate:this.Format(s),DayOfMonth:s.getDate()}),s.setDate(s.getDate()+1)):(D.push({IsNextMonth:!0,Date:new Date(u),FormattedDate:this.Format(u),DayOfMonth:u.getDate()}),u.setDate(u.getDate()+1))}b.push(D)}return b}}},8905:(m,d,r)=>{r.d(d,{b:()=>t});var n=r(9808),g=r(1223);let t=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[n.ez]]}),o})()},1433:(m,d,r)=>{r.d(d,{F:()=>v});var n=r(5688),g=r(7445),t=r(1223),o=r(9808);function e(p,u){if(1&p&&(t.TgZ(0,"span")(1,"b"),t._uU(2,"Interval"),t.qZA(),t._uU(3),t.TgZ(4,"b"),t._uU(5,"Captions"),t.qZA(),t._uU(6),t.TgZ(7,"b"),t._uU(8,"Arrows"),t.qZA(),t._uU(9),t.TgZ(10,"b"),t._uU(11,"Indicators"),t.qZA(),t._uU(12),t.TgZ(13,"b"),t._uU(14,"PauseOnHover"),t.qZA(),t._uU(15),t.qZA()),2&p){const s=t.oxw();t.xp6(3),t.hij(": ",s.Interval," "),t.xp6(3),t.hij(": ",s.Captions," "),t.xp6(3),t.hij(": ",s.NavigationArrows," "),t.xp6(3),t.hij(": ",s.NavigationIndicators," "),t.xp6(3),t.hij(": ",s.PauseOnHover," ")}}function i(p,u){if(1&p){const s=t.EpF();t.TgZ(0,"li",9),t.NdJ("click",function(){const C=t.CHM(s).index;return t.oxw(2).currentIndex=C}),t.qZA()}if(2&p){const s=u.index,h=t.oxw(2);t.ekj("Active",s===h.currentIndex),t.uIk("data-target","#"+h.Id)("data-slide-to",s)}}function l(p,u){if(1&p&&(t.TgZ(0,"ol",7),t.YNc(1,i,1,4,"li",8),t.qZA()),2&p){const s=t.oxw();t.xp6(1),t.Q6J("ngForOf",s.Images)}}function a(p,u){if(1&p&&(t.TgZ(0,"div",15)(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA()()),2&p){const s=t.oxw().$implicit;t.xp6(2),t.Oqu(s.Caption),t.xp6(2),t.Oqu(s.Description)}}function c(p,u){if(1&p&&(t.TgZ(0,"div",10)(1,"span",11),t._uU(2),t.qZA(),t.YNc(3,a,5,2,"div",12),t.TgZ(4,"div",13),t._UZ(5,"img",14),t.qZA()()),2&p){const s=u.$implicit,h=u.index,b=t.oxw();t.ekj("Active",h===b.currentIndex),t.xp6(2),t.AsE(" Slide ",h," of ",b.Images.length," "),t.xp6(1),t.Q6J("ngIf",b.Captions),t.xp6(2),t.Q6J("src",s.Src,t.LSH)("alt",s.Alt)}}function f(p,u){if(1&p){const s=t.EpF();t.TgZ(0,"a",16),t.NdJ("click",function(){t.CHM(s);const b=t.oxw();return b.Clear(),b.Prev()}),t._UZ(1,"span",17),t.TgZ(2,"span",11),t._uU(3,"Previous"),t.qZA()()}}function _(p,u){if(1&p){const s=t.EpF();t.TgZ(0,"a",18),t.NdJ("click",function(){t.CHM(s);const b=t.oxw();return b.Clear(),b.Next()}),t._UZ(1,"span",19),t.TgZ(2,"span",11),t._uU(3,"Next"),t.qZA()()}}let v=(()=>{class p{constructor(){this.Id="Carousel".concat("_",n.iy.NewGuid().ToString()),this.Images=[],this.Interval=6e3,this.Captions=!0,this.NavigationArrows=!0,this.NavigationIndicators=!0,this.Dummy=!1,this.PauseOnHover=!1,this.Stats=!1,this.currentIndex=0}ngOnInit(){this.Dummy&&[0,1,2].forEach((s,h)=>this.Images.push({Caption:"Caption "+s.toString(),Description:"Description Description "+s.toString(),Src:`https://source.unsplash.com/random/${960+s}x${400+s/2}?sig=${h}`}))}ngOnChanges(s){(s.Interval||s.Captions||s.NavigationArrows||s.NavigationIndicators)&&(this.intervalSubscription&&this.intervalSubscription.unsubscribe(),this.intervalSubscription=void 0,this.Play())}Clear(){this.intervalSubscription&&this.intervalSubscription.unsubscribe()}Prev(){0===this.currentIndex?this.currentIndex=this.Images.length-1:this.currentIndex--}Next(){this.currentIndex===this.Images.length-1?this.currentIndex=0:this.currentIndex++}Play(){(this.PauseOnHover||!this.intervalSubscription)&&(this.intervalSubscription=(0,g.F)(this.Interval).subscribe(()=>{this.Next()}))}Pause(){this.PauseOnHover&&this.Clear()}ngOnDestroy(){this.Clear()}}return p.\u0275fac=function(s){return new(s||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["ql-carousel"],["NgCarousel"],["Carousel"]],inputs:{Images:"Images",Interval:"Interval",Captions:"Captions",NavigationArrows:"NavigationArrows",NavigationIndicators:"NavigationIndicators",Dummy:"Dummy",PauseOnHover:"PauseOnHover",Stats:"Stats"},features:[t.TTD],decls:7,vars:6,consts:[[1,"Carousel",3,"id","mouseenter","mouseleave"],[4,"ngIf"],["class","Carousel-indicators",4,"ngIf"],[1,"Carousel-inner"],["class","Carousel-item",3,"Active",4,"ngFor","ngForOf"],["role","button","class","Carousel-control-prev",3,"click",4,"ngIf"],["role","button","class","Carousel-control-next",3,"click",4,"ngIf"],[1,"Carousel-indicators"],[3,"Active","click",4,"ngFor","ngForOf"],[3,"click"],[1,"Carousel-item"],[1,"sr-only"],["class","Carousel-caption",4,"ngIf"],[1,"img-wrapper"],[3,"src","alt"],[1,"Carousel-caption"],["role","button",1,"Carousel-control-prev",3,"click"],["aria-hidden","true",1,"Carousel-control-prev-icon"],["role","button",1,"Carousel-control-next",3,"click"],["aria-hidden","true",1,"Carousel-control-next-icon"]],template:function(s,h){1&s&&(t.TgZ(0,"div",0),t.NdJ("mouseenter",function(){return h.Pause()})("mouseleave",function(){return h.Play()}),t.YNc(1,e,16,5,"span",1),t.YNc(2,l,2,1,"ol",2),t.TgZ(3,"div",3),t.YNc(4,c,6,7,"div",4),t.qZA(),t.YNc(5,f,4,0,"a",5),t.YNc(6,_,4,0,"a",6),t.qZA()),2&s&&(t.Q6J("id",h.Id),t.xp6(1),t.Q6J("ngIf",h.Stats),t.xp6(1),t.Q6J("ngIf",h.NavigationIndicators),t.xp6(2),t.Q6J("ngForOf",h.Images),t.xp6(1),t.Q6J("ngIf",h.NavigationArrows),t.xp6(1),t.Q6J("ngIf",h.NavigationArrows))},directives:[o.O5,o.sg],styles:[""],encapsulation:2}),p})()},3462:(m,d,r)=>{r.d(d,{b:()=>t});var n=r(9808),g=r(1223);let t=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[n.ez]]}),o})()},8429:(m,d,r)=>{r.d(d,{P:()=>t});var n=r(9808),g=r(1223);let t=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[n.ez]]}),o})()},433:(m,d,r)=>{r.d(d,{i:()=>o});var n=r(1223);const g=["Tooltip"];let t=(()=>{class e{constructor(){this.Id="Tooltip".concat("_",Math.random().toString(36).substring(2,15),"_",Math.random().toString(36).substring(2,15)),this.content="",this.rounded=!1,this.outline=!1,this.placement="top",this.theme="light"}ngOnInit(){if(this.div){const l=this.div.nativeElement;l.id=this.Id,l.innerHTML=`<span>${this.content}</span>`;const a=this.GetPositions(l),c=`top:${a.top}px; left:${a.left}px;`;l.className="Tooltip".concat(this.theme?` Tooltip-${this.theme}`:"",this.outline?" Tooltip-outline":"",this.rounded?" Tooltip-rounded":"",` Tooltip-${a.arrow}`),l.setAttribute("style",c)}}GetPositions(l){let a=0,c=0,f="";if(this.Element)switch(this.placement){case"right":f="l",a=this.Element.offsetTop+this.Element.offsetHeight/2-16,c=this.Element.offsetLeft+this.Element.offsetWidth+5;break;case"left":f="r",a=this.Element.offsetTop+this.Element.offsetHeight/2-16,c=this.Element.offsetLeft-l.offsetWidth-5;break;case"top":f="b",a=this.Element.offsetTop-l.offsetHeight-5,c=this.Element.offsetLeft+this.Element.offsetWidth/2-l.offsetWidth/2;break;case"bottom":f="t",a=this.Element.offsetTop+this.Element.offsetHeight+5,c=this.Element.offsetLeft+this.Element.offsetWidth/2-l.offsetWidth/2}return{arrow:f,top:a,left:c}}}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["ql-tooltip"]],viewQuery:function(l,a){if(1&l&&n.Gf(g,7),2&l){let c;n.iGM(c=n.CRH())&&(a.div=c.first)}},decls:2,vars:0,consts:[[1,"Tooltip"],["Tooltip",""]],template:function(l,a){1&l&&n._UZ(0,"div",0,1)},styles:['.Tooltip-primary{--ls-tooltip-bg: #4712af;--ls-tooltip-bg-hsl: 260deg,81%,38%;--ls-tooltip-bg-body: #f2edfd;--ls-tooltip-bg-active: #5917de;--ls-tooltip-bg-active-hsl: 260deg,81%,48%;--ls-tooltip-bg-surface: #dfd1fa;--ls-tooltip-bg-lightest: #efe8fd;--ls-tooltip-bg-light: #cebaf8;--ls-tooltip-bg-dark: #773deb;--ls-tooltip-bg-darkest: #4712af;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(260deg, 81%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 260deg,81%,70% }.Tooltip-secondary{--ls-tooltip-bg: #6d767e;--ls-tooltip-bg-hsl: 208deg,7%,46%;--ls-tooltip-bg-body: #f4f5f6;--ls-tooltip-bg-active: #878f97;--ls-tooltip-bg-active-hsl: 208deg,7%,56%;--ls-tooltip-bg-surface: #e4e6e7;--ls-tooltip-bg-lightest: #f1f2f3;--ls-tooltip-bg-light: #d6d9db;--ls-tooltip-bg-dark: #a2a9ae;--ls-tooltip-bg-darkest: #6d767e;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(208deg, 7%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 208deg,7%,70% }.Tooltip-success{--ls-tooltip-bg: #29a847;--ls-tooltip-bg-hsl: 134deg,61%,41%;--ls-tooltip-bg-body: #effbf1;--ls-tooltip-bg-active: #36ce59;--ls-tooltip-bg-active-hsl: 134deg,61%,51%;--ls-tooltip-bg-surface: #d6f5dd;--ls-tooltip-bg-lightest: #eafaee;--ls-tooltip-bg-light: #c1f0cc;--ls-tooltip-bg-dark: #5fd87b;--ls-tooltip-bg-darkest: #29a847;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(134deg, 61%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 134deg,61%,70% }.Tooltip-info{--ls-tooltip-bg: #0367d8;--ls-tooltip-bg-hsl: 212deg,97%,43%;--ls-tooltip-bg-body: #ebf4ff;--ls-tooltip-bg-active: #137ffb;--ls-tooltip-bg-active-hsl: 212deg,97%,53%;--ls-tooltip-bg-surface: #cde4fe;--ls-tooltip-bg-lightest: #e6f1ff;--ls-tooltip-bg-light: #b4d6fe;--ls-tooltip-bg-dark: #459bfc;--ls-tooltip-bg-darkest: #0367d8;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(212deg, 97%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 212deg,97%,70% }.Tooltip-warning{--ls-tooltip-bg: #ffc105;--ls-tooltip-bg-hsl: 45deg,100%,51%;--ls-tooltip-bg-body: #fffaeb;--ls-tooltip-bg-active: #ffcd38;--ls-tooltip-bg-active-hsl: 45deg,100%,61%;--ls-tooltip-bg-surface: #fff2cc;--ls-tooltip-bg-lightest: #fff9e6;--ls-tooltip-bg-light: #ffecb3;--ls-tooltip-bg-dark: #ffda6b;--ls-tooltip-bg-darkest: #ffc105;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(45deg, 100%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 45deg,100%,70% }.Tooltip-danger{--ls-tooltip-bg: #d73c4c;--ls-tooltip-bg-hsl: 354deg,66%,54%;--ls-tooltip-bg-body: #fceeef;--ls-tooltip-bg-active: #e06773;--ls-tooltip-bg-active-hsl: 354deg,66%,64%;--ls-tooltip-bg-surface: #f6d5d8;--ls-tooltip-bg-lightest: #fbeaec;--ls-tooltip-bg-light: #f2c0c5;--ls-tooltip-bg-dark: #e8919a;--ls-tooltip-bg-darkest: #d73c4c;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(354deg, 66%, 70%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 354deg,66%,70% }.Tooltip-light{--ls-tooltip-bg: #f9fafb;--ls-tooltip-bg-hsl: 210deg,20%,98%;--ls-tooltip-bg-body: #d1d9e0;--ls-tooltip-bg-active: #3692fc;--ls-tooltip-bg-active-hsl: 212deg,97%,60%;--ls-tooltip-bg-surface: white;--ls-tooltip-bg-lightest: #f9fafb;--ls-tooltip-bg-light: #f6f7f9;--ls-tooltip-bg-dark: #f0f2f5;--ls-tooltip-bg-darkest: #e0e6eb;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: black;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: black;--ls-tooltip-fg-lightest: black;--ls-tooltip-fg-light: black;--ls-tooltip-fg-dark: black;--ls-tooltip-fg-darkest: black;--ls-tooltip-shadow-color-rgb: 0,0,0;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(210deg, 20%, 90%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 210deg,20%,90% }.Tooltip-dark{--ls-tooltip-bg: #353b41;--ls-tooltip-bg-hsl: 210deg,10%,23%;--ls-tooltip-bg-body: #171a1c;--ls-tooltip-bg-active: #8965cd;--ls-tooltip-bg-active-hsl: 261deg,51%,60%;--ls-tooltip-bg-surface: #454d54;--ls-tooltip-bg-lightest: #5c6670;--ls-tooltip-bg-light: #73808c;--ls-tooltip-bg-dark: #394046;--ls-tooltip-bg-darkest: #22262a;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: white;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: white;--ls-tooltip-fg-lightest: white;--ls-tooltip-fg-light: white;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 255,255,255;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(210deg, 10%, 45%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 210deg,10%,45% }.Tooltip-night{--ls-tooltip-bg: black;--ls-tooltip-bg-hsl: 0deg,0%,0%;--ls-tooltip-bg-body: #0d0d0d;--ls-tooltip-bg-active: #8965cd;--ls-tooltip-bg-active-hsl: 261deg,51%,60%;--ls-tooltip-bg-surface: #333333;--ls-tooltip-bg-lightest: #4d4d4d;--ls-tooltip-bg-light: #666666;--ls-tooltip-bg-dark: #262626;--ls-tooltip-bg-darkest: #1a1a1a;--ls-tooltip-fg-muted: #a7afb9;--ls-tooltip-fg-body: white;--ls-tooltip-fg-active: white;--ls-tooltip-fg-surface: white;--ls-tooltip-fg-lightest: white;--ls-tooltip-fg-light: white;--ls-tooltip-fg-dark: white;--ls-tooltip-fg-darkest: white;--ls-tooltip-shadow-color-rgb: 255,255,255;--ls-border-alpha: 1;--ls-tooltip-border-color: hsla(0deg, 0%, 35%, var(--ls-border-alpha, 1));--ls-tooltip-border-color-hsl: 0deg,0%,35% }.Tooltip{position:absolute;display:flex;z-index:1000;padding:.25rem .5rem;color:var(--ls-tooltip-fg-dark, var(--ls-fg-dark));background-color:var(--ls-tooltip-bg-dark, var(--ls-bg-dark));border:1px solid var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest));box-shadow:0 1px 1px -1px rgba(var(--ls-tooltip-shadow-color-rgb, var(--ls-shadow-color-rgb)),.18),0 2px 2px 0 rgba(var(--ls-tooltip-shadow-color-rgb, var(--ls-shadow-color-rgb)),.12),0 4px 6px 0 rgba(var(--ls-tooltip-shadow-color-rgb, var(--ls-shadow-color-rgb)),.06)}.Tooltip.Tooltip-outline{color:var(--ls-tooltip-fg-lightest, var(--ls-fg-lightest));background-color:var(--ls-tooltip-bg-lightest, var(--ls-bg-lightest));border:1px solid var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest))}.Tooltip:before,.Tooltip:after{content:"";display:block;position:absolute;border-style:solid;width:0;height:0;z-index:1;clear:both;border-width:6px}.Tooltip-rounded{border-radius:var(--ls-border-radius)}.Tooltip-t:after,.Tooltip-b:after{left:calc(50% - 6px)}.Tooltip-t:before,.Tooltip-b:before{left:calc(50% - 6px)}.Tooltip-r:after,.Tooltip-l:after{top:calc(50% - 6px)}.Tooltip-r:before,.Tooltip-l:before{top:calc(50% - 6px)}.Tooltip-t:after{bottom:100%;border-color:transparent transparent var(--ls-tooltip-bg-dark, var(--ls-bg-dark)) transparent}.Tooltip-t:before{bottom:calc(100% + 1px);border-color:transparent transparent var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest)) transparent}.Tooltip-r:after{left:100%;border-color:transparent transparent transparent var(--ls-tooltip-bg-dark, var(--ls-bg-dark))}.Tooltip-r:before{left:calc(100% + 1px);border-color:transparent transparent transparent var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest))}.Tooltip-b:after{top:100%;border-color:var(--ls-tooltip-bg-dark, var(--ls-bg-dark)) transparent transparent transparent}.Tooltip-b:before{top:calc(100% + 1px);border-color:var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest)) transparent transparent transparent}.Tooltip-l:after{right:100%;border-color:transparent var(--ls-tooltip-bg-dark, var(--ls-bg-dark)) transparent transparent}.Tooltip-l:before{right:calc(100% + 1px);border-color:transparent var(--ls-tooltip-bg-darkest, var(--ls-bg-darkest)) transparent transparent}\n'],encapsulation:2}),e})(),o=(()=>{class e{constructor(l,a,c,f){this.elementRef=l,this.componentFactoryResolver=a,this.appRef=c,this.injector=f,this.content="",this.rounded=!1,this.outline=!1,this.placement="top",this.theme="light",this.duration=500,this.tooltips=[],this.el=this.elementRef.nativeElement}onMouseEnter(l){this.content.length>0&&null===this.el.getAttribute("tooltipId")&&this.Show()}onMouseLeave(){const l=this.el.getAttribute("tooltipId");l&&setTimeout(()=>{this.Hide(l)},this.duration)}Show(){const l=this.GetComponentRef();return l.instance.content=this.content,l.instance.rounded=this.rounded,l.instance.outline=this.outline,l.instance.placement=this.placement,l.instance.theme=this.theme||"black",l.instance.Element=this.el,this.el.removeAttribute("tooltipId"),this.el.setAttribute("tooltipId",l.instance.Id),this.tooltips.push({Id:l.instance.Id,Ref:l}),l.instance.Id}Hide(l){const a=this.tooltips.find(c=>c.Id===l);a&&a.Ref&&(a.Ref.destroy(),this.tooltips.splice(this.tooltips.indexOf(a),1),this.el.removeAttribute("tooltipId"))}GetComponentRef(){const a=this.componentFactoryResolver.resolveComponentFactory(t).create(this.injector);return this.appRef.attachView(a.hostView),this.el.parentNode&&this.el.parentNode.insertBefore(a.hostView.rootNodes[0],this.el.nextSibling),a}CLear(){this.tooltips.forEach((l,a)=>this.Hide(l.Id)),this.tooltips=[]}ngOnDestroy(){this.CLear()}}return e.\u0275fac=function(l){return new(l||e)(n.Y36(n.SBq),n.Y36(n._Vd),n.Y36(n.z2F),n.Y36(n.zs3))},e.\u0275dir=n.lG2({type:e,selectors:[["","qlTooltip",""]],hostBindings:function(l,a){1&l&&n.NdJ("mouseenter",function(f){return a.onMouseEnter(f)})("mouseleave",function(){return a.onMouseLeave()})},inputs:{content:["qlTooltip","content"],rounded:"rounded",outline:"outline",placement:"placement",theme:"theme",duration:"duration"}}),e})()},4616:(m,d,r)=>{r.d(d,{z:()=>t});var n=r(9808),g=r(1223);let t=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[n.ez]]}),o})()},9185:(m,d,r)=>{r.d(d,{L:()=>g});var n=r(1223);let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({}),t})()},7445:(m,d,r)=>{r.d(d,{F:()=>t});var n=r(1566),g=r(5963);function t(o=0,e=n.z){return o<0&&(o=0),(0,g.H)(o,o,e)}}}]);