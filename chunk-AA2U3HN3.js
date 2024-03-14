import{a as V,c as D,d as I,g as F,h as A,i as U,k as _}from"./chunk-RKBGAR5L.js";import{a as $,b as B,c as R,d as b,e as z,f as j,g as W}from"./chunk-M5XYSWNL.js";import{F as u,Fa as M,G as f,Ha as h,Na as n,Oa as L,P as y,Ra as S,Sa as C,Ta as N,Wa as g,_ as d,ba as a,hb as T,lb as x,ma as w,oa as o,sb as O,ua as e,ub as H,va as i,vb as P,wa as m,yb as k}from"./chunk-7VR4C4KM.js";var K=()=>["/NgHighlighter/Overview"],G=()=>({exact:!1}),Q=()=>["/NgHighlighter/Usage"],q=(()=>{let r=class r{};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=u({type:r,selectors:[["app-highlighter-layout"]],decls:18,vars:10,consts:[[1,"Container"],[1,"Row","G-2"],[1,"Col-12","Col-lg-3"],[1,"Card","Card-body"],[1,"Card-title","Border-bottom"],[1,"FW-normal","FST-italic"],["href","https://highlightjs.org/",1,"Btn","Btn-link","MS-1"],["role","group","aria-label","Highlighter",1,"Btn-group"],["type","button",1,"Btn","Btn-outline-primary",3,"routerLink","routerLinkActive","routerLinkActiveOptions"],[1,"Col-12","Col-lg-9"]],template:function(s,t){s&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),n(5,"Ng - Highlighter"),i(),e(6,"p",5),n(7," Powered by: "),m(8,"br"),e(9,"a",6),n(10,"highlight.js"),i()(),e(11,"div",7)(12,"button",8),n(13," Overview "),i(),e(14,"button",8),n(15," Usage "),i()()()(),e(16,"div",9),m(17,"router-outlet"),i()()()),s&2&&(a(12),o("routerLink",g(6,K))("routerLinkActive","Active")("routerLinkActiveOptions",g(7,G)),a(2),o("routerLink",g(8,Q))("routerLinkActive","Active")("routerLinkActiveOptions",g(9,G)))},dependencies:[O,H,P]});let l=r;return l})();var J=(()=>{let r=class r{constructor(){this.Package={Host:"https://img.shields.io/",Style:"?style=for-the-badge",Name:"@qrsln/highlighter",npm:"https://www.npmjs.com/package/@qrsln/highlighter"}}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=u({type:r,selectors:[["app-highlighter-overview"]],decls:75,vars:20,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title"],[1,"Badge","Bg-info"],["role","alert",1,"Alert","Alert-outline","MY-3"],["target","_blank",3,"href"],["alt","npm",1,"MB-2","ME-2",3,"src"],["alt","npm bundle size",1,"MB-2","ME-2",3,"src"],[1,"MT-5"],[1,"Table-responsive"],[1,"Table","Table-hover"],["scope","col"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"]],template:function(s,t){s&1&&(e(0,"div",0)(1,"h4",1),n(2,"Highlighter "),e(3,"span",2),n(4,"Overview"),i()(),e(5,"div",3)(6,"a",4),m(7,"img",5),i(),m(8,"img",6)(9,"hr")(10,"img",5)(11,"img",5)(12,"img",5)(13,"img",5),i(),e(14,"h5",7),n(15,"Properties"),i(),e(16,"div",8)(17,"table",9)(18,"thead")(19,"tr")(20,"th",10),n(21,"Params"),i(),e(22,"th",10),n(23,"Description"),i()()(),e(24,"tbody")(25,"tr")(26,"td")(27,"code"),n(28,"[Theme]"),i()(),e(29,"td")(30,"code"),n(31,"highlight.js"),i(),n(32," themes. Default value: "),e(33,"code"),n(34,"'stackoverflow-dark'"),i()()(),e(35,"tr")(36,"td")(37,"code"),n(38,"[Code]"),i()(),e(39,"td"),n(40,"If "),e(41,"code"),n(42,"code"),i(),n(43," not set, then it will look "),e(44,"code"),n(45,"innerHTML"),i(),n(46," automatically."),i()(),e(47,"tr")(48,"td")(49,"code"),n(50,"[LineNumbers]"),i()(),e(51,"td"),n(52,"Line Numbers. Default value: "),e(53,"code"),n(54,"false"),i()()(),e(55,"tr")(56,"td")(57,"code"),n(58,"[Lang]"),i()(),e(59,"td"),n(60,"Default value: "),e(61,"code"),n(62,"`html`"),i()()(),e(63,"tr")(64,"td")(65,"code"),n(66,"[Options]"),i()(),e(67,"td")(68,"code"),n(69,"highlight.js"),i(),n(70," Options."),i()()()()(),e(71,"h5",7),n(72,"***.module.ts"),i(),e(73,"textarea",11),n(74,`import {HighlighterModule} from '@qrsln/highlighter';

@NgModule({
  imports: [HighlighterModule, /*...*/],
})
  `),i()()),s&2&&(a(6),M("href",t.Package.npm,d),a(),h("src","",t.Package.Host,"npm/v/",t.Package.Name,"",t.Package.Style,"",d),a(),h("src","",t.Package.Host,"bundlephobia/minzip/",t.Package.Name,"",t.Package.Style,"",d),a(2),h("src","",t.Package.Host,"npm/dw/",t.Package.Name,"",t.Package.Style,"",d),a(),h("src","",t.Package.Host,"npm/dm/",t.Package.Name,"",t.Package.Style,"",d),a(),h("src","",t.Package.Host,"npm/dy/",t.Package.Name,"",t.Package.Style,"",d),a(),h("src","",t.Package.Host,"npm/dt/",t.Package.Name,"",t.Package.Style,"",d),a(60),o("Lang","typescript"))},dependencies:[b]});let l=r;return l})();function te(l,r){if(l&1&&(e(0,"option",19),n(1),i()),l&2){let E=r.$implicit;o("ngValue",E.Value),a(),L(E.Name)}}var Y=(()=>{let r=class r{constructor(){this.selectedTheme="stackoverflow-dark",this.lineNumbers=!1,this.themes=[],this.CODES={Typescript:`
class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax
`,CSharp:`
using System.IO.Compression;

#pragma warning disable 414, 3021

namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Span<int> numbers = stackalloc int[length];
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}
  `,CSS:`
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
  `,Markdown:`
# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing \`i can write code\`, and \`more\` wipee!
  `,JavaScript:`
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;
  `,JSON:`
[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]
    `,Less:`
@import "fruits";

@rhythm: 1.5em;

@media screen and (min-resolution: 2dppx) {
    body {font-size: 125%}
}

section > .foo + #bar:hover [href*="less"] {
    margin:     @rhythm 0 0 @rhythm;
    padding:    calc(5% + 20px);
    background: #f00ba7 url(http://placehold.alpha-centauri/42.png) no-repeat;
    background-image: linear-gradient(-135deg, wheat, fuchsia) !important ;
    background-blend-mode: multiply;
}

@font-face {
    font-family: /* ? */ 'Omega';
    src: url('../fonts/omega-webfont.woff?v=2.0.2');
}

.icon-baz::before {
    display:     inline-block;
    font-family: "Omega", Alpha, sans-serif;
    content:     "\\f085";
    color:       rgba(98, 76 /* or 54 */, 231, .75);
}
    `,PHP:`
require_once 'Zend/Uri/Http.php';

namespace Location\\Web;

interface Factory
{
    static function _factory();
}

abstract class URI extends BaseURI implements Factory
{
    abstract function test();

    public static $st1 = 1;
    const ME = "Yo";
    var $list = NULL;
    private $var;

    /**
     * Returns a URI
     *
     * @return URI
     */
    static public function _factory($stats = array(), $uri = 'http')
    {
        echo __METHOD__;
        $uri = explode(':', $uri, 0b10);
        $schemeSpecific = isset($uri[1]) ? $uri[1] : '';
        $desc = 'Multi
line description';

        // Security check
        if (!ctype_alnum($scheme)) {
            throw new Zend_Uri_Exception('Illegal scheme');
        }

        $this->var = 0 - self::$st;
        $this->list = list(Array("1"=> 2, 2=>self::ME, 3 => \\Location\\Web\\URI::class));

        return [
            'uri'   => $uri,
            'value' => null,
        ];
    }
}

echo URI::ME . URI::$st1;

__halt_compiler () ; datahere
datahere
datahere */
datahere
    `,Python:`
@requires_authorization(roles=["ADMIN"])
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
    `,SCSS:`
@import "compass/reset";

// variables
$colorGreen: #008000;
$colorGreenDark: darken($colorGreen, 10);

@mixin container {
    max-width: 980px;
}

// mixins with parameters
@mixin button($color:green) {
    @if ($color == green) {
        background-color: #008000;
    }
    @else if ($color == red) {
        background-color: #B22222;
    }
}

button {
    @include button(red);
}

div,
.navbar,
#header,
input[type="input"] {
    font-family: "Helvetica Neue", Arial, sans-serif;
    width: auto;
    margin: 0 auto;
    display: block;
}

.row-12 > [class*="spans"] {
    border-left: 1px solid #B5C583;
}

// nested definitions
ul {
    width: 100%;
    padding: {
        left: 5px; right: 5px;
    }
  li {
      float: left; margin-right: 10px;
      .home {
          background: url('https://placehold.it/20') scroll no-repeat 0 0;
    }
  }
}

.banner {
    @extend .container;
}

a {
  color: $colorGreen;
  }
    `},this.Sample=`
<div Highlighter [theme]="selectedTheme" [lang]="'typescript'"  [lineNumbers]="lineNumbers" [innerHtml]="CODES.Typescript"></div>

<textarea Highlighter [theme]="selectedTheme" [lang]="'csharp'" [lineNumbers]="lineNumbers" [code]="CODES.Typescript"></textarea>
<textarea Highlighter [theme]="selectedTheme" [lang]="'typescript'" [lineNumbers]="lineNumbers">
class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax
</textarea>
  `}ngOnInit(){this.SetThemes()}SetThemes(){this.themes=[{Name:"Default",Value:"default"},{Name:"Androidstudio",Value:"androidstudio"},{Name:"Atom One Dark Reasonable",Value:"atom-one-dark-reasonable"},{Name:"Atom One Dark",Value:"atom-one-dark "},{Name:"Atom One Light",Value:"atom-one-light "},{Name:"Codepen Embed",Value:"codepen-embed"},{Name:"Darcula",Value:"darcula"},{Name:"Dark",Value:"dark "},{Name:"Dracula",Value:"dracula"},{Name:"GitHub Dark",Value:"github-dark "},{Name:"GitHub",Value:"github"},{Name:"Googlecode",Value:"googlecode"},{Name:"Idea",Value:"idea"},{Name:"Mono Blue",Value:"mono-blue"},{Name:"Nord",Value:"nord"},{Name:"Obsidian",Value:"obsidian"},{Name:"Ocean",Value:"ocean "},{Name:"Rainbow",Value:"rainbow"},{Name:"Stackoverflow Dark",Value:"stackoverflow-dark"},{Name:"Stackoverflow Light",Value:"stackoverflow-light"},{Name:"Vs",Value:"vs"},{Name:"Vs 2015",Value:"vs2015"},{Name:"Xcode",Value:"xcode"},{Name:"Xt 256",Value:"xt256 "}]}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=u({type:r,selectors:[["app-highlighter-usage"]],decls:62,vars:49,consts:[[1,"Card","Card-body",2,"margin-bottom","25rem"],[1,"Card-title"],[1,"Badge","Bg-info"],[1,"Row"],[1,"Col-12","Col-lg-8"],[1,"Form-select",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"Col-12","Col-lg-4"],[1,"Form-switch","Form-check"],["type","checkbox","id","lineNumbers",1,"Form-check-input",3,"ngModel","ngModelChange"],["for","lineNumbers",1,"Form-check-label"],[1,"MT-5"],[1,"Body"],["Highlighter","",3,"Theme","Lang","LineNumbers","Code"],[3,"Design"],[3,"Label"],["Highlighter","",1,"MT-2","MB-3",3,"Lang","Code"],["Highlighter","",1,"MT-2","MB-3",3,"Lang"],[1,"Border","Rounded","P-4","MY-2"],[3,"ngValue"]],template:function(s,t){s&1&&(e(0,"div",0)(1,"h4",1),n(2,"Highlighter "),e(3,"span",2),n(4,"Usage"),i()(),m(5,"p"),e(6,"div",3)(7,"div",4)(8,"select",5),N("ngModelChange",function(p){return C(t.selectedTheme,p)||(t.selectedTheme=p),p}),w(9,te,2,2,"option",6),i()(),e(10,"div",7)(11,"div",8)(12,"input",9),N("ngModelChange",function(p){return C(t.lineNumbers,p)||(t.lineNumbers=p),p}),i(),e(13,"label",10),n(14,"Line Numbers"),i()()()(),e(15,"h5",11),n(16,"TypeScript"),i(),e(17,"ExampleViewer")(18,"div",12),m(19,"div",13),i(),e(20,"Tabs",14)(21,"TabPane",15),m(22,"textarea",16),i(),e(23,"TabPane",15)(24,"textarea",17),n(25,`  selectedTheme = 'stackoverflow-dark';
  lineNumbers = false;
  themes: { Name: string, Value: string }[] = [];

  CODES = {
    Typescript: \`
class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax
\`,
          // ...
  };

        `),i()()()(),e(26,"h5",11),n(27,"C#"),i(),e(28,"div",18),m(29,"div",13),i(),e(30,"h5",11),n(31,"CSS"),i(),e(32,"div",18),m(33,"div",13),i(),e(34,"h5",11),n(35,"Markdown"),i(),e(36,"div",18),m(37,"div",13),i(),e(38,"h5",11),n(39,"JavaScript"),i(),e(40,"div",18),m(41,"textarea",13),i(),e(42,"h5",11),n(43,"JSON"),i(),e(44,"div",18),m(45,"textarea",13),i(),e(46,"h5",11),n(47,"Less"),i(),e(48,"div",18),m(49,"textarea",13),i(),e(50,"h5",11),n(51,"PHP"),i(),e(52,"div",18),m(53,"textarea",13),i(),e(54,"h5",11),n(55,"Python"),i(),e(56,"div",18),m(57,"textarea",13),i(),e(58,"h5",11),n(59,"SCSS"),i(),e(60,"div",18),m(61,"textarea",13),i()()),s&2&&(a(8),S("ngModel",t.selectedTheme),a(),o("ngForOf",t.themes),a(3),S("ngModel",t.lineNumbers),a(7),o("Theme",t.selectedTheme)("Lang","typescript")("LineNumbers",t.lineNumbers)("Code",t.CODES.Typescript),a(),o("Design","Pill"),a(),o("Label","HTML"),a(),o("Lang","html")("Code",t.Sample),a(),o("Label","TypeScript"),a(),o("Lang","typescript"),a(5),o("Theme",t.selectedTheme)("Lang","csharp")("LineNumbers",t.lineNumbers)("Code",t.CODES.CSharp),a(4),o("Theme",t.selectedTheme)("Lang","css")("LineNumbers",t.lineNumbers)("Code",t.CODES.CSS),a(4),o("Theme",t.selectedTheme)("Lang","markdown")("LineNumbers",t.lineNumbers)("Code",t.CODES.Markdown),a(4),o("Theme",t.selectedTheme)("Lang","javascript")("LineNumbers",t.lineNumbers)("Code",t.CODES.JavaScript),a(4),o("Theme",t.selectedTheme)("Lang","json")("LineNumbers",t.lineNumbers)("Code",t.CODES.JSON),a(4),o("Theme",t.selectedTheme)("Lang","less")("LineNumbers",t.lineNumbers)("Code",t.CODES.Less),a(4),o("Theme",t.selectedTheme)("Lang","php")("LineNumbers",t.lineNumbers)("Code",t.CODES.PHP),a(4),o("Theme",t.selectedTheme)("Lang","python")("LineNumbers",t.lineNumbers)("Code",t.CODES.Python),a(4),o("Theme",t.selectedTheme)("Lang","scss")("LineNumbers",t.lineNumbers)("Code",t.CODES.SCSS))},dependencies:[T,b,A,U,V,F,D,I,j,B,$]});let l=r;return l})();var ie=[{path:"",redirectTo:"Overview",pathMatch:"prefix"},{path:"",children:[{path:"",data:{breadcrumb:"NgHighlighter"},component:q,children:[{path:"Overview",data:{breadcrumb:"Overview"},component:J},{path:"Usage",data:{breadcrumb:"Overview"},component:Y}]}]}],X=(()=>{let r=class r{};r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=f({type:r}),r.\u0275inj=y({imports:[k.forChild(ie),k]});let l=r;return l})();var Te=(()=>{let r=class r{};r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=f({type:r}),r.\u0275inj=y({imports:[x,X,z,_,W,R]});let l=r;return l})();export{Te as NgHighlighterModule};
