webpackJsonp([1],{"/wAz":function(t,e){},"0Hw8":function(t,e){},"2W3N":function(t,e){},"991W":function(t,e){},HFBH:function(t,e){},JPWl:function(t,e){},KFAS:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Details"}},[e("router-view")],1)],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},n,!1,function(t){a("sF99")},null,null).exports,r=a("/ocq"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header border_bottom"},[t._m(0),t._v(" "),a("nav",{staticClass:"header-nav"},[a("div",{class:{border_bottom:0==t.index},on:{click:function(e){return t.listSwitching(0)}}},[t._v("正在热映")]),t._v(" "),a("div",{class:{border_bottom:1==t.index},on:{click:function(e){return t.listSwitching(1)}}},[t._v("即将上映")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-top"},[e("span",{staticClass:"header-text"},[this._v("北京")]),this._v(" "),e("input",{staticClass:"header-input",attrs:{type:"text",value:"电影/电视剧/影人"}})])}]};var c=a("VU/8")({name:"HomeHeader",data:function(){return{index:0}},methods:{listSwitching:function(t){this.index=t}}},o,!1,function(t){a("sxGk")},"data-v-03ab7f0a",null).exports,l={name:"HomeList",data:function(){return{list:[],onLine:!0}},mounted:function(){this.offline()},methods:{offline:function(){!1===navigator.onLine?this.onLine=!1:(this.onLine=!0,this.getData())},details:function(t){this.$router.push({path:"/Details",name:"Details",query:{id:t}})},getData:function(){var t=this;this.axios.get('https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=北京&start=0&count=39&client=&udid=""').then(function(e){t.list=e.data.subjects,t.addZero(t.list),t.count(t.list)})},count:function(t){for(var e=0;e<t.length;e++)t[e].collect_count>1e4&&(t[e].collect_count=(t[e].collect_count/1e4).toFixed(2).slice(0,-1)+"万")},addZero:function(t){for(var e=0;e<t.length;e++)1!==t[e].rating.average&&2!==t[e].rating.average&&3!==t[e].rating.average&&4!==t[e].rating.average&&5!==t[e].rating.average&&6!==t[e].rating.average&&7!==t[e].rating.average&&8!==t[e].rating.average&&9!==t[e].rating.average||(t[e].rating.average=t[e].rating.average+".0")}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[1==t.onLine?a("div",{staticClass:"list"},t._l(t.list,function(e,s){return a("div",{key:s,staticClass:"dome border_bottom",on:{click:function(a){return t.details(e.id)}}},[a("img",{staticClass:"list-img",attrs:{src:e.images.large}}),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"list-left"},[a("h1",{staticClass:"list-title"},[t._v(t._s(e.title))]),t._v(" "),a("h2",{staticClass:"average"},[t._v(t._s(0==e.rating.average?"暂无评分":e.rating.average))]),t._v(" "),e.directors[0]?a("div",{staticClass:"director"},[t._v("导演："+t._s(e.directors[0].name))]):t._e(),t._v(" "),0!==e.casts.length?a("div",{staticClass:"performer"},[a("span",[t._v("主演：")]),t._l(e.casts,function(s,n){return a("span",{key:n},[t._v(t._s(s.name)),n+1!=e.casts.length?a("span",[t._v(" / ")]):t._e()])})],2):t._e()]),t._v(" "),a("div",{staticClass:"list-right"},[a("span",{staticClass:"count"},[t._v(t._s(e.collect_count)+"人看过")]),t._v(" "),a("button",{staticClass:"border"},[t._v("购票")])])])])}),0):t._e(),t._v(" "),0==t.onLine?a("div",{staticClass:"onLine"},[a("p",[t._v("网络无连接，请检查网络设置")])]):t._e()])},staticRenderFns:[]};var u=a("VU/8")(l,v,!1,function(t){a("Wr1+")},"data-v-36db9d8e",null).exports,d={name:"FooterNav",props:{activeIndex:Number},data:function(){return{index:1}},methods:{jump:function(t,e,a){this.index=e,this.$router.push({path:t,name:a})}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer border-top"},[a("div",{staticClass:"dome",class:{active:1==t.activeIndex},on:{click:function(e){return t.jump("/",1,"Home")}}},[a("span",[t._v("热映")])]),t._v(" "),a("div",{staticClass:"dome",class:{active:2==t.activeIndex},on:{click:function(e){return t.jump("/Lookup",2,"Lookup")}}},[a("span",[t._v("找片")])]),t._v(" "),a("div",{staticClass:"dome",class:{active:3==t.activeIndex},on:{click:function(e){return t.jump("/My",3,"My")}}},[a("span",[t._v("我的")])])])},staticRenderFns:[]};var h=a("VU/8")(d,_,!1,function(t){a("jSrX")},"data-v-4e78bc31",null).exports,m={name:"Home",components:{HomeHeader:c,HomeList:u,HomeNav:h},data:function(){return{}},watch:{$route:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("home-header"),this._v(" "),e("home-List"),this._v(" "),e("home-nav",{attrs:{activeIndex:1}})],1)},staticRenderFns:[]};var f=a("VU/8")(m,p,!1,function(t){a("2W3N")},"data-v-432eae33",null).exports,g={name:"My",components:{HomeNav:h},data:function(){return{index:0}},methods:{active:function(t){this.index=t},login:function(){this.$router.push({name:"Login",path:"/Login"})}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my"},[a("header",{staticClass:"header",on:{click:t.login}},[a("span",{staticClass:"span iconfont"},[t._v("")]),t._v(" "),a("span",{staticClass:"font"},[t._v("请登录")])]),t._v(" "),a("nav",{staticClass:"nav border_bottom"},[a("span",{class:{border_bottom:0==t.index},on:{click:function(e){return t.active(0)}}},[t._v("讨论")]),t._v(" "),a("span",{class:{border_bottom:1==t.index},on:{click:function(e){return t.active(1)}}},[t._v("想看")]),t._v(" "),a("span",{class:{border_bottom:2==t.index},on:{click:function(e){return t.active(2)}}},[t._v("在看")]),t._v(" "),a("span",{class:{border_bottom:3==t.index},on:{click:function(e){return t.active(3)}}},[t._v("看过")]),t._v(" "),a("span",{class:{border_bottom:4==t.index},on:{click:function(e){return t.active(4)}}},[t._v("影评")]),t._v(" "),a("span",{class:{border_bottom:5==t.index},on:{click:function(e){return t.active(5)}}},[t._v("影人")])]),t._v(" "),a("home-nav",{attrs:{activeIndex:3}})],1)},staticRenderFns:[]};var C=a("VU/8")(g,b,!1,function(t){a("h7yK")},"data-v-7aff93cd",null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header border_bottom"},[e("input",{attrs:{type:"text",value:"电影/电视剧/影人"}}),this._v(" "),e("nav",{staticClass:"border_bottom"},[this._v("\n    电影\n  ")])])}]};var y=a("VU/8")({name:"LookupHeader",data:function(){return{}}},x,!1,function(t){a("uibv")},"data-v-674b2cbe",null).exports,k={name:"Lookup",props:{list:Array},data:function(){return{}},methods:{details:function(t){this.$router.push({path:"/Details",name:"Details",query:{id:t}})}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"List"},t._l(t.list,function(e,s){return a("div",{key:s,staticClass:"dome",on:{click:function(a){return t.details(e.id)}}},[a("img",{staticClass:"img",attrs:{src:e.images.large}}),t._v(" "),a("h1",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),0!==e.rating.average?a("span",{staticClass:"span"},[t._v(t._s(1==e.rating.average.toString().length?e.rating.average+".0":e.rating.average))]):t._e(),t._v(" "),0==e.rating.average?a("span",{staticClass:"span"},[t._v("暂无评分")]):t._e()])}),0)},staticRenderFns:[]};var F={name:"Lookup",components:{CommonNav:h,LookupHeader:y,LookupList:a("VU/8")(k,w,!1,function(t){a("KFAS")},"data-v-08488d17",null).exports},data:function(){return{list:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.axios.get('/api/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=北京&start=0&count=39&client=&udid=""').then(function(e){console.log(e),t.list=e.data.subjects})}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lookup"},[e("lookup-header"),this._v(" "),e("common-nav",{attrs:{activeIndex:2}}),this._v(" "),e("lookup-list",{attrs:{list:this.list}})],1)},staticRenderFns:[]};var H=a("VU/8")(F,$,!1,function(t){a("JPWl")},"data-v-50407566",null).exports,L={name:"Login",data:function(){return{footerShow:!0,number:0}},mounted:function(){this.hide()},methods:{Return:function(){this.$router.push({name:"My",path:"/My"})},hide:function(){this.number=window.document.body.clientHeight,console.log(window.document.body.clientHeight)}}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("span",{staticClass:"iconfont return",on:{click:t.Return}},[t._v("")]),t._v(" "),a("h2",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.number))]),t._v(" "),a("h1",{staticClass:"title"},[t._v("欢迎来到豆瓣")]),t._v(" "),a("input",{staticClass:"text",attrs:{type:"text",placeholder:"手机号"},on:{click:t.hide}}),t._v(" "),a("input",{staticClass:"password",attrs:{type:"text",placeholder:"密码"},on:{click:t.hide}}),t._v(" "),a("button",{staticClass:"btn"},[t._v("登录")]),t._v(" "),t._m(0),t._v(" "),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.footerShow,expression:"footerShow"}]},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),a("span",[t._v("QQ登录")]),t._v(" "),a("span",{staticClass:"center"},[t._v("|")]),t._v(" "),a("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),a("span",[t._v("微信登录")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"register"},[e("span",{staticClass:"one active"},[this._v("注册豆瓣")]),this._v(" "),e("span",{staticClass:"two"},[this._v("|")]),this._v(" "),e("span",{staticClass:"one"},[this._v("忘记密码")])])}]};var E=a("VU/8")(L,R,!1,function(t){a("HFBH")},"data-v-44870505",null).exports,D={props:{list:Object},name:"DetailsHeader",data:function(){return{}},methods:{Return:function(){this.$router.push({name:"Home",path:"/"})}}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"header"},[e("span",{staticClass:"iconfont return",on:{click:this.Return}},[this._v("")])]),this._v(" "),e("div",{staticClass:"imgbox"},[e("img",{attrs:{src:this.list.images.large}})])])},staticRenderFns:[]};var V=a("VU/8")(D,A,!1,function(t){a("qc02")},"data-v-da278648",null).exports,j={props:{list:Object},name:"DetailsContent",data:function(){return{unfold:"展开",Receivetrue:!0}},methods:{hide:function(){this.Receivetrue?(this.unfold="收起",this.Receivetrue=!1):(this.unfold="展开",this.Receivetrue=!0)}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content border_bottom"},[a("div",{staticClass:"content-left"},[a("h1",[t._v(t._s(t.list.title))]),t._v(" "),a("div",{staticClass:"type"},[a("span",[t._v(t._s(t.list.year))]),a("span",[t._v(" / ")]),t._v(" "),t._l(t.list.genres,function(e,s){return a("span",{key:s},[t._v(t._s(e)),s+1!==t.list.genres.length?a("span",[t._v(" / ")]):t._e()])})],2),t._v(" "),a("div",{staticClass:"type"},[a("span",[t._v("原名：")]),a("span",[t._v(t._s(t.list.original_title))])]),t._v(" "),a("div",{staticClass:"type"},[a("span",[t._v("上映时间：")]),a("span",[t._v(t._s(t.list.pubdates[0]))])]),t._v(" "),a("div",{staticClass:"type"},[a("span",[t._v("片长：")]),a("span",[t._v(t._s(t.list.durations[0]))])])]),t._v(" "),a("div",{staticClass:"content-right"},[a("div",{staticClass:"box"},[a("h2",[t._v("豆瓣评分")]),t._v(" "),a("span",{staticClass:"Fraction"},[t._v(t._s(0===t.list.rating.average?"暂无评分":t.list.rating.average)),1===t.list.rating.average||2===t.list.rating.average||3===t.list.rating.average||4===t.list.rating.average||5===t.list.rating.average||6===t.list.rating.average||7===t.list.rating.average||8===t.list.rating.average||9===t.list.rating.average?a("span",{staticClass:"Fraction"},[t._v(".0")]):t._e()]),t._v(" "),a("span",{staticClass:"count"},[t._v(t._s(t.list.ratings_count)+"人")])])])]),t._v(" "),a("div",{staticClass:"footer border_bottom"},[a("h3",[t._v("简介")]),t._v(" "),a("p",{class:{Receive:1==t.Receivetrue,height:1==t.Receivetrue}},[t._v(t._s(t.list.summary))]),t._v(" "),t.list.summary.length>84?a("span",{staticClass:"unfold",staticStyle:{color:"#179717"},on:{click:t.hide}},[t._v(t._s(t.unfold))]):t._e()])])},staticRenderFns:[]};var U=a("VU/8")(j,S,!1,function(t){a("W7g0")},"data-v-675d0eea",null).exports,M={props:{list:Object},name:"Detailscasts",data:function(){return{}},methods:{}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"casts"},[a("h1",[t._v("影人")]),t._v(" "),a("div",{staticClass:"item"},[a("img",{attrs:{src:t.list.directors[0].avatars.large}}),t._v(" "),a("h2",[t._v(t._s(t.list.directors[0].name))]),t._v(" "),a("p",[t._v("导演")])]),t._v(" "),t._l(t.list.casts,function(e,s){return a("div",{key:s,staticClass:"item"},[a("img",{attrs:{src:e.avatars.large}}),t._v(" "),a("h2",[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v("演员")])])})],2)])},staticRenderFns:[]};var N=a("VU/8")(M,W,!1,function(t){a("vDbM")},"data-v-3d713999",null).exports,I={props:{listArr:Array},name:"comment",data:function(){return{}},methods:{}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"center"},t._l(t.listArr,function(e,s){return a("div",{key:s,staticClass:"box"},[a("div",{staticClass:"center-left"},[a("img",{staticClass:"userhead",attrs:{src:e.author.avatar}})]),t._v(" "),a("div",{staticClass:"center-right"},[a("header",[a("span",{staticClass:"title"},[t._v(t._s(e.author.name))]),t._v(" "),a("span",{staticClass:"count"},[t._v(t._s(e.useful_count))]),t._v(" "),a("span",{staticClass:"iconfont Fabulous"},[t._v("")])]),t._v(" "),a("p",[t._v(t._s(e.content))]),t._v(" "),a("span",{staticClass:"font"},[t._v(t._s(new Date(e.created_at).getMonth()+1)+"月"+t._s(new Date(e.created_at).getDate())+"日")])])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header border-top"},[e("span",{staticClass:"header-left"},[this._v("短评")]),this._v(" "),e("button",{staticClass:"header-right border"},[this._v("写短评")])])}]};var P={name:"Details",components:{DetailsHeader:V,DetailsContent:U,DetailsCasts:N,Comment:a("VU/8")(I,q,!1,function(t){a("lP5E")},"data-v-873a37e0",null).exports},data:function(){return{list:{rating:{},pubdates:[],durations:[],summary:"",images:{},directors:[{avatars:""}]},ShortArr:[],FilmArr:[]}},mounted:function(){this.details(this.$route.query.id)},methods:{details:function(t){var e=this;this.axios.get("http://api.douban.com/v2/movie/subject/"+t+"?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=").then(function(t){e.list=t.data}),this.axios.get("http://api.douban.com/v2/movie/subject/"+t+"/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b").then(function(t){e.FilmArr=t.data.reviews}),this.axios.get("http://api.douban.com/v2/movie/subject/"+t+"/comments?apikey=0b2bdeda43b5688921839c8ecb20399b").then(function(t){e.ShortArr=t.data.comments})}}},K={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details"},[a("details-header",{attrs:{list:t.list}}),t._v(" "),a("details-content",{attrs:{list:t.list}}),t._v(" "),a("details-casts",{attrs:{list:t.list}}),t._v(" "),t._m(0),t._v(" "),a("comment",{attrs:{listArr:t.ShortArr}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"nav"},[e("a",{staticClass:"border_bottom"},[this._v("评论")]),this._v(" "),e("a",[this._v("讨论")])])}]};var O=a("VU/8")(P,K,!1,function(t){a("jCaV")},"data-v-7e0a89d8",null).exports;s.a.use(r.a);var B=new r.a({routes:[{path:"/",name:"Home",component:f},{path:"/My",name:"My",component:C},{path:"/Lookup",name:"Lookup",component:H},{path:"/Login",name:"Login",component:E},{path:"/Details",name:"Details",component:O}]}),J=a("mtWM"),T=a.n(J),z=a("v5o6"),G=a.n(z);a("991W"),a("/wAz"),a("0Hw8"),a("sVYa");s.a.prototype.axios=T.a,s.a.config.productionTip=!1,G.a.attach(document.body),new s.a({el:"#app",router:B,components:{App:i},template:"<App/>"})},W7g0:function(t,e){},"Wr1+":function(t,e){},h7yK:function(t,e){},jCaV:function(t,e){},jSrX:function(t,e){},lP5E:function(t,e){},qc02:function(t,e){},sF99:function(t,e){},sxGk:function(t,e){},uibv:function(t,e){},vDbM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.46fb570976e8b909d5c2.js.map