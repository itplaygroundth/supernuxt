(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{120:function(t,e,n){var content=n(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("e9488242",content,!0,{sourceMap:!1})},16:function(t,e,n){var content=n(26);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("8c724af4",content,!0,{sourceMap:!1})},239:function(t,e,n){"use strict";n(120)},240:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,".organism-stage-picture[data-v-6716743e]{position:relative;}.organism-stage-picture[data-v-6716743e]:first-child{margin-top:0}.layouts-lost-container[data-v-6716743e]{position:absolute;bottom:0;width:100%;padding:calc(60 / 16 * 1em) 0 calc(20 / 16 * 1em);margin:0;color:#fff;text-align:center;background:#000;background:linear-gradient(0deg,rgba(0,0,0,.6),transparent 50%)}.headline[data-v-6716743e]{flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 12/12 - (15px - 15px * 12/12));max-width:calc(99.9% * 12/12 - (15px - 15px * 12/12));width:calc(99.9% * 12/12 - (15px - 15px * 12/12));margin:0}.headline[data-v-6716743e]:nth-child(1n){margin-right:15px;margin-left:0}.headline[data-v-6716743e]:last-child{margin-right:0}.headline[data-v-6716743e]:nth-child(12n){margin-right:0;margin-left:auto}",""]),o.locals={},t.exports=o},25:function(t,e,n){"use strict";n(16)},26:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,'*[data-v-514cb2af]{margin:0}[data-debug][data-v-514cb2af]{position:relative;}[data-debug] pre[data-v-514cb2af]{position:absolute;top:0;right:0;bottom:0;left:0;z-index:10000;margin:0;font-family:monospace;font-weight:400;}[data-debug] pre[data-v-514cb2af]:before{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-514cb2af]:after{position:absolute;right:0;bottom:0;z-index:10000;padding:5px;font-size:13px;color:#fff;letter-spacing:.1em;content:"H" attr(data-debug-context-level);background:#333}',""]),o.locals={},t.exports=o},299:function(t,e,n){"use strict";n.r(e);var o=n(33),r=n(15),l=n(36),c=n(18),d={components:{LayoutLostContainer:r.a,SpeedkitPicture:o.a,BaseContentHeadline:l.a,BaseContentContainer:c.a},props:{picture:{type:Object,required:!1,default:()=>({sources:[{src:"/img/sample-a-16-9.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]})},headline:{type:String,default:"Stage Picture"}}},f=(n(239),n(7)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("base-content-container",{staticClass:"organism-stage-picture"},[e("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1)),t._v(" "),e("layout-lost-container",[e("base-content-headline",{staticClass:"headline"},[t._v("\n      "+t._s(t.headline)+"\n    ")])],1)],1)}),[],!1,null,"6716743e",null);e.default=component.exports},36:function(t,e,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{tag:{type:String,default:null},font:{type:[Object,Array],default:()=>[]}},data:()=>({debug:!1}),computed:{contextLevel(){return t=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(t,6));var t}},mounted(){this.debug="debug-headline"in this.$route.query}},r=(n(25),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e(t.tag||`h${t.contextLevel}`,t._g(t._b({directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],tag:"component",attrs:{"data-debug":t.debug}},"component",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t.debug?e("pre",{attrs:{"data-debug-context-level":t.contextLevel}}):t._e()],2)}),[],!1,null,"514cb2af",null);e.a=component.exports}}]);