(function(e){function t(t){for(var s,o,a=t[0],i=t[1],u=t[2],b=0,f=[];b<a.length;b++)o=a[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},c={app:0},r=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"50c6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23");function c(e,t,n,c,r,o){Object(s["y"])("router-link");var a=Object(s["y"])("router-view");return Object(s["s"])(),Object(s["e"])(s["a"],null,[Object(s["d"])("",!0),Object(s["i"])(a)],64)}var r={data:function(){return{loop:null}},mounted:function(){var e=this,t=300;this.loop=window.setInterval((function(){e.$store.dispatch("tick")}),t)},unmounted:function(){window.clearInverval(this.loop)}},o=(n("d548"),n("6b0d")),a=n.n(o);const i=a()(r,[["render",c]]);var u=i,l=n("6c02"),b=(n("d3b7"),n("ddb0"),n("b0c0"),n("ac1f"),n("5319"),n("a4d3"),n("e01a"),{class:"py-3"}),f={class:"text--center mb-4"},m=Object(s["f"])("h1",null,"You just woke up",-1),d={class:"stackable row my-4"},p={class:"text--center"},v={class:"align-items--center justify-content--center"},O=Object(s["f"])("h2",null,"Souls",-1),j=Object(s["h"])(" Each extraction gets you "),g=Object(s["h"])(" souls "),h=Object(s["f"])("p",null,[Object(s["h"])(" You "),Object(s["f"])("i",null,"need"),Object(s["h"])(" more. ")],-1),y={key:0,class:"text--center"},w={class:"align-items--center justify-content--center"},k=Object(s["f"])("h2",null,"Minions",-1),$=["disabled"],x=Object(s["h"])(" They improve souls extraction by "),C={key:1,class:"text--center"},T={class:"align-items--center justify-content--center"},M=Object(s["f"])("h2",null,"Occultists",-1),S=["disabled"],P={key:0},I=Object(s["h"])(" They harvest "),N=Object(s["h"])(" souls/s "),_={class:"stackable row"},z={key:0},D=Object(s["f"])("h2",null,"Upgrades",-1),E={key:0},U={style:{"min-width":"100px"}},A=Object(s["h"])(" souls "),F=["disabled","onClick"],B={key:1},H={style:{position:"fixed",bottom:"1em",right:"1em"}};function J(e,t,n,c,r,o){var a=Object(s["y"])("fire"),i=Object(s["y"])("number-badge");return Object(s["s"])(),Object(s["e"])("div",b,[Object(s["f"])("div",f,[m,Object(s["i"])(a)]),Object(s["f"])("div",d,[Object(s["f"])("section",p,[Object(s["f"])("header",v,[O,Object(s["i"])(i,{class:"ml-4",value:parseInt(e.$store.state.current.souls)},null,8,["value"])]),Object(s["f"])("button",{onClick:t[0]||(t[0]=Object(s["E"])((function(t){e.$store.commit("increment",{name:"clicks",value:1}),e.$store.commit("increment",{name:"souls",value:e.$store.getters["values"]["souls.perClick"]})}),["prevent"]))}," Extract souls from living creatures "),Object(s["f"])("p",null,[j,Object(s["i"])(i,{value:parseInt(e.$store.getters["values"]["souls.perClick"])},{default:Object(s["D"])((function(){return[g]})),_:1},8,["value"])]),h]),e.$store.getters["values"]["minions.enabled"]?(Object(s["s"])(),Object(s["e"])("section",y,[Object(s["f"])("header",w,[k,Object(s["i"])(i,{class:"ml-4",value:e.$store.state.current.minions},null,8,["value"])]),Object(s["f"])("button",{disabled:e.$store.state.current.souls<e.$store.getters.values["minions.cost"],onClick:t[1]||(t[1]=Object(s["E"])((function(t){return e.$store.commit("purchase",{name:"minions",value:1,cost:e.$store.getters.values["minions.cost"]})}),["prevent"]))}," Subjugate 1 minion for "+Object(s["A"])(r.formatNumber(e.$store.getters.values["minions.cost"],e.$store.state.settings.notation))+" souls. ",9,$),Object(s["f"])("p",null,[x,Object(s["i"])(i,{type:"bonus",value:parseInt(e.$store.getters["values"]["minions.power"]*e.$store.state.current.minions)},null,8,["value"])])])):Object(s["d"])("",!0),e.$store.getters["values"]["occultists.enabled"]?(Object(s["s"])(),Object(s["e"])("section",C,[Object(s["f"])("header",T,[M,Object(s["i"])(i,{class:"ml-4",value:e.$store.state.current.occultists},null,8,["value"])]),Object(s["f"])("button",{disabled:e.$store.state.current.minions<e.$store.getters.values["occultists.cost"],onClick:t[2]||(t[2]=Object(s["E"])((function(t){return e.$store.commit("recruitOccultist",{value:1,cost:e.$store.getters.values["occultists.cost"]})}),["prevent"]))}," Sacrifice "+Object(s["A"])(r.formatNumber(e.$store.getters.values["occultists.cost"],e.$store.state.settings.notation))+" minions to recruit 1 occultist. ",9,S),e.$store.getters["values"]["souls.perTick"]>0?(Object(s["s"])(),Object(s["e"])("p",P,[I,Object(s["i"])(i,{value:parseInt(e.$store.getters["values"]["souls.perTick"])},{default:Object(s["D"])((function(){return[N]})),_:1},8,["value"])])):Object(s["d"])("",!0)])):Object(s["d"])("",!0)]),Object(s["f"])("div",_,[e.$store.getters["values"]["upgrades.enabled"]?(Object(s["s"])(),Object(s["e"])("section",z,[D,e.$store.getters["values"]["upgrades.available"].length>0?(Object(s["s"])(),Object(s["e"])("table",E,[Object(s["f"])("tbody",null,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["w"])(e.$store.getters["values"]["upgrades.available"],(function(t){return Object(s["s"])(),Object(s["e"])("tr",{key:t.key},[Object(s["f"])("td",null,[Object(s["f"])("strong",null,Object(s["A"])(t.name),1)]),Object(s["f"])("td",null,Object(s["A"])(t.description.replace("${value}",r.formatNumber(t.valueFormatter?t.valueFormatter(t.value):t.value,e.$store.state.settings.notation))),1),Object(s["f"])("td",U,[Object(s["i"])(i,{value:t.cost,type:"cost"},{default:Object(s["D"])((function(){return[A]})),_:2},1032,["value"])]),Object(s["f"])("td",null,[Object(s["f"])("button",{disabled:e.$store.state.current.souls<t.cost,onClick:Object(s["E"])((function(n){return e.$store.commit("purchaseUpgrade",{id:t.id,cost:t.cost})}),["prevent"])}," Purchase ",8,F)])])})),128))])])):(Object(s["s"])(),Object(s["e"])("p",B,"No available upgrades. Try getting more souls."))])):Object(s["d"])("",!0)]),Object(s["f"])("div",H,[Object(s["f"])("button",{onClick:t[3]||(t[3]=Object(s["E"])((function(t){return e.$store.commit("reset")}),["prevent"]))}," Reset ")])])}function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"standard",n=new Intl.NumberFormat("en-US",{notation:t});return n.format(e)}var R={version:"1.1",id:"fire",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"125px",height:"189.864px",viewBox:"0 0 125 189.864","enable-background":"new 0 0 125 189.864","xml:space":"preserve"},W=Object(s["g"])('<path class="flame-main" d="M76.553,186.09c0,0-10.178-2.976-15.325-8.226s-9.278-16.82-9.278-16.82s-0.241-6.647-4.136-18.465\n      c0,0,3.357,4.969,5.103,9.938c0,0-5.305-21.086,1.712-30.418c7.017-9.333,0.571-35.654-2.25-37.534c0,0,13.07,5.64,19.875,47.54\n      c6.806,41.899,16.831,45.301,6.088,53.985"></path><path class="flame-main one" d="M61.693,122.257c4.117-15.4,12.097-14.487-11.589-60.872c0,0,32.016,10.223,52.601,63.123\n      c20.585,52.899-19.848,61.045-19.643,61.582c0.206,0.537-19.401-0.269-14.835-18.532S57.576,137.656,61.693,122.257z"></path><path class="flame-main two" d="M81.657,79.192c0,0,11.549,24.845,3.626,40.02c-7.924,15.175-21.126,41.899-0.425,64.998\n      C84.858,184.21,125.705,150.905,81.657,79.192z"></path><path class="flame-main three" d="M99.92,101.754c0,0-23.208,47.027-12.043,80.072c0,0,32.741-16.073,20.108-45.79\n      C95.354,106.319,99.92,114.108,99.92,101.754z"></path><path class="flame-main four" d="M103.143,105.917c0,0,8.927,30.753-1.043,46.868c-9.969,16.115-14.799,29.041-14.799,29.041\n      S134.387,164.603,103.143,105.917z"></path><path class="flame-main five" d="M62.049,104.171c0,0-15.645,67.588,10.529,77.655C98.753,191.894,69.033,130.761,62.049,104.171z"></path><path class="flame" d="M101.011,112.926c0,0,8.973,10.519,4.556,16.543C99.37,129.735,106.752,117.406,101.011,112.926z"></path><path class="flame one" d="M55.592,126.854c0,0-3.819,13.29,2.699,16.945C64.038,141.48,55.907,132.263,55.592,126.854z"></path><path class="flame two" d="M54.918,104.595c0,0-3.959,6.109-1.24,8.949C56.93,113.256,52.228,107.329,54.918,104.595z"></path>',9),q=[W];function G(e,t){return Object(s["s"])(),Object(s["e"])("svg",R,q)}const K={},L=a()(K,[["render",G]]);var Q=L;function V(e,t,n,c,r,o){return Object(s["s"])(),Object(s["e"])("span",{class:Object(s["o"])(["number-badge",n.type])},[Object(s["h"])(Object(s["A"])(r.formatNumber(n.value||0,e.$store.state.settings.notation)),1),Object(s["x"])(e.$slots,"default")],2)}var X={props:{value:{},type:{default:"value"}},data:function(){return{formatNumber:Y}}};const Z=a()(X,[["render",V]]);var ee=Z,te={components:{Fire:Q,NumberBadge:ee},data:function(){return{formatNumber:Y}}};const ne=a()(te,[["render",J]]);var se=ne,ce=[{path:"/",name:"Home",component:se}],re=Object(l["a"])({history:Object(l["b"])(),routes:ce}),oe=re,ae=n("3835"),ie=n("5530"),ue=(n("159b"),n("4de4"),n("2ca0"),n("99af"),n("4fad"),n("5502")),le=n("bfa9"),be=n("c707"),fe=n.n(be);function me(e,t,n){return e+t}function de(e,t,n){var s=e;return n.forEach((function(e){s=e.modifier(s,e.value,t)})),s}function pe(e,t){return e.filter((function(e){return e.id.startsWith(t)}))}var ve={clicks:0,souls:0,minions:0,occultists:0,upgrades:[]},Oe={"minions.baseCost":15,"minions.basePower":1,"occultists.baseCost":10,"occultists.basePower":1,"tick.duration":1e3},je=fe()([{id:"minions.power.1",name:"Fangs",description:"Increase minion bonus to souls extraction by ${value}",modifier:me,cost:50,value:1},{id:"minions.power.2",name:"Horns",description:"Increase minion bonus to souls extraction by ${value}",modifier:me,cost:75,value:2},{id:"clicks.lifetime.1",name:"Disturbing presence",description:"Increase souls extraction based on manual soul extractions during this lifetime",modifier:function(e,t,n){return n.lifetime.clicks>0?e+Math.log(n.lifetime.clicks):e},cost:250,value:null}],["cost"]);function ge(e,t){return 1+de(0,e,pe(t,"clicks.lifetime."))+e.current.minions*he(e,t)}function he(e,t){return de(Oe["minions.basePower"],e,pe(t,"minions.power."))}var ye={"souls.perClick":function(e,t){return ge(e,t)},"souls.perTick":function(e,t){var n=de(e.current.occultists,e,pe(t,"noop."));return ge(e,t)*n},"minions.enabled":function(e){return e.total.souls>=Oe["minions.baseCost"]},"minions.power":function(e,t){return he(e,t)},"minions.cost":function(e){return(e.lifetime.minions+1)*Oe["minions.baseCost"]},"occultists.enabled":function(e){return e.total.minions>=Oe["occultists.baseCost"]},"occultists.cost":function(e){return(e.lifetime.occultists+1)*Oe["occultists.baseCost"]},"upgrades.enabled":function(e){return e.total.souls>=je[0].cost},"upgrades.available":function(e){return je.filter((function(t){return e.current.upgrades.indexOf(t.id)<0&&e.total.souls>=t.cost}))}};function we(e,t){var n=t.name,s=t.value;e.current[n]+=s,e.lifetime[n]+=s,e.total[n]+=s}var ke=Object(ue["a"])({state:{time:{gameStart:(new Date).getTime(),lifetimeStart:(new Date).getTime(),lastTick:(new Date).getTime()},current:Object(ie["a"])({},ve),lifetime:Object(ie["a"])({},ve),total:Object(ie["a"])({},ve),settings:{notation:"standard"}},mutations:{increment:function(e,t){var n=t.name,s=t.value;we(e,{name:n,value:s})},lastTick:function(e,t){e.time.lastTick=t},reset:function(e){e.current=Object(ie["a"])({},ve),e.lifetime=Object(ie["a"])({},ve),e.total=Object(ie["a"])({},ve)},purchase:function(e,t){var n=t.name,s=t.value,c=t.cost,r=e.current.souls;r<s*c?console.warn("Cannot purchase ".concat(s," ").concat(n," for ").concat(c,": only ").concat(r," available")):(e.current.souls-=s*c,we(e,{name:n,value:s}))},purchaseUpgrade:function(e,t){var n=t.id,s=t.cost,c=e.current.souls;c<s?console.warn("Cannot purchase upgrade ".concat(n," for ").concat(s,": only ").concat(c," available")):(e.current.souls-=s,e.current.upgrades.push(n))},recruitOccultist:function(e,t){var n=t.value,s=t.cost,c=e.current.minions;c<s?console.warn("Cannot recruit occultists for ".concat(s,": only ").concat(c," available")):(e.current.minions-=s,we(e,{name:"occultists",value:n}))}},getters:{activeUpgrades:function(e,t){t.id,t.cost;return je.filter((function(t){return e.current.upgrades.indexOf(t.id)>-1}))},values:function(e,t){for(var n={},s=0,c=Object.entries(ye);s<c.length;s++){var r=Object(ae["a"])(c[s],2),o=r[0],a=r[1];n[o]=a(e,t.activeUpgrades)}return n}},actions:{tick:function(e){var t=e.state,n=e.commit,s=e.getters,c=(new Date).getTime(),r=c-t.time.lastTick,o=r/Oe["tick.duration"];if(o>0&&s.values["souls.perTick"]>0){var a=s.values["souls.perTick"]*o;n("increment",{name:"souls",value:a})}n("lastTick",c)}},plugins:[new le["a"]({reducer:function(e){return{current:e.current,lifetime:e.lifetime,total:e.total,settings:e.total,time:e.time}}}).plugin]});Object(s["c"])(u).use(ke).use(oe).mount("#app")},d548:function(e,t,n){"use strict";n("50c6")}});
//# sourceMappingURL=app.534cf722.js.map