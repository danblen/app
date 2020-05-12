(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5da028d5"],{"0093":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.shelfTitleVisible,expression:"shelfTitleVisible"}],staticClass:"shelf-title",class:{"hide-shadow":t.ifHideShadow}},[i("div",{staticClass:"shelf-title-text-wrapper"},[i("span",{staticClass:"shelf-title-text"},[t._v(t._s(t.title))]),i("span",{directives:[{name:"show",rawName:"v-show",value:t.isEditMode,expression:"isEditMode"}],staticClass:"shelf-title-sub-text"},[t._v(t._s(t.selectedText))])]),t.showClear?i("div",{staticClass:"shelf-title-btn-wrapper shelf-title-left"},[i("span",{staticClass:"shelf-title-btn-text",on:{click:t.clearCanche}},[t._v(t._s(t.$t("shelf.clearCache")))])]):t._e(),t.showEdit?i("div",{staticClass:"shelf-title-btn-wrapper shelf-title-right"},[i("span",{staticClass:"shelf-title-btn-text",on:{click:t.onEditClick}},[t._v(t._s(t.isEditMode?t.$t("shelf.cancel"):t.$t("shelf.edit")))])]):t._e(),t.showBack?i("div",{staticClass:"shelf-title-btn-wrapper shelf-title-left"},[i("span",{staticClass:"icon-back",on:{click:t.back}})]):t._e(),t.showChangeGroup?i("div",{staticClass:"shelf-title-btn-wrapper",class:{"shelf-title-left":t.changeGroupLeft,"shelf-title-right":t.changeGroupRight},on:{click:t.changeGroup}},[i("span",{staticClass:"shelf-title-btn-text"},[t._v(t._s(t.$t("shelf.editGroup")))])]):t._e()])])},s=[],r=(i("6d57"),i("f548"),i("ac0d")),o=i("5657"),a=i("101f"),c={mixins:[r["c"]],props:{title:String},watch:{offsetY:function(t){this.ifHideShadow=!(t>0)}},data:function(){return{ifHideShadow:!0}},computed:{emptyCategory:function(){return!this.shelfCategory||!this.shelfCategory.itemList||0===this.shelfCategory.itemList.length},showEdit:function(){return 1===this.currentType||!this.emptyCategory},showClear:function(){return 1===this.currentType},showBack:function(){return 2===this.currentType&&!this.isEditMode},showChangeGroup:function(){return 2===this.currentType&&(this.isEditMode||this.emptyCategory)},changeGroupLeft:function(){return!this.emptyCategory},changeGroupRight:function(){return this.emptyCategory},selectedText:function(){var t=this.shelfSelected?this.shelfSelected.length:0;return t<=0?this.$t("shelf.selectBook"):1===t?this.$t("shelf.haveSelectedBook").replace("$1",t):this.$t("shelf.haveSelectedBooks").replace("$1",t)},popupCancelBtn:function(){var t=this;return this.createPopupBtn(this.$t("shelf.cancel"),(function(){t.hidePopup()}))}},methods:{changeGroupName:function(){this.hidePopup(),this.dialog({showNewGroup:!0,groupName:this.shelfCategory.title}).show()},onComplete:function(){var t=this;this.hidePopup(),this.setShelfList(this.shelfList.filter((function(e){return e.id!==t.shelfCategory.id}))).then((function(){Object(o["l"])(t.shelfList),t.$router.go(-1),t.setIsEditMode(!1)}))},deleteGroup:function(){this.emptyCategory?this.onComplete():(this.setShelfSelected(this.shelfCategory.itemList),this.moveOutOfGroup(this.onComplete))},showDeleteGroup:function(){var t=this;this.hidePopup(),setTimeout((function(){t.popupMenu=t.popup({title:t.$t("shelf.deleteGroupTitle"),btn:[t.createPopupBtn(t.$t("shelf.confirm"),(function(){t.deleteGroup()}),"danger"),t.popupCancelBtn]}).show()}),200)},hidePopup:function(){this.popupMenu.hide()},createPopupBtn:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";return{text:t,type:i,click:e}},changeGroup:function(){var t=this;this.popupMenu=this.popup({btn:[this.createPopupBtn(this.$t("shelf.editGroupName"),(function(){t.changeGroupName()})),this.createPopupBtn(this.$t("shelf.deleteGroup"),(function(){t.showDeleteGroup()}),"danger"),this.popupCancelBtn]}).show()},back:function(){this.$router.go(-1),this.setIsEditMode(!1)},onEditClick:function(){this.isEditMode||(this.setShelfSelected([]),this.shelfList.forEach((function(t){t.selected=!1,t.itemList&&t.itemList.forEach((function(t){t.selected=!1}))}))),this.setIsEditMode(!this.isEditMode)},clearCanche:function(){Object(o["a"])(),Object(a["a"])(),this.setShelfList([]),this.setShelfSelected([]),this.getShelfList(),this.simpleToast(this.$t("shelf.clearCacheSuccess"))}}},l=c,h=(i("8f99"),i("4023")),u=Object(h["a"])(l,n,s,!1,null,"ee28ad0c",null);e["a"]=u.exports},"06a2":function(t,e,i){"use strict";var n=i("fc81")(!0);i("492d")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=n(e,i),this._i+=t.length,{value:t,done:!1})}))},"0a6d":function(t,e,i){},3596:function(t,e,i){},"432c":function(t,e,i){"use strict";var n=i("f4b8"),s=i.n(n);s.a},"460b":function(t,e,i){},"5b7d":function(t,e,i){},6701:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",class:{"no-scroll":t.ifNoScroll},on:{"&scroll":function(e){return t.handleScroll(e)}}},[t._t("default")],2)},s=[],r=(i("163d"),i("fa7d")),o={props:{top:{type:Number,default:0},bottom:{type:Number,default:0},ifNoScroll:{type:Boolean,default:!1}},methods:{handleScroll:function(t){var e=t.target.scrollTop||window.pageYOffset||document.body.scrollTop;this.$emit("onScroll",e)},scrollTo:function(t,e){this.$refs.scrollWrapper.scrollTo(t,e)},refresh:function(){this.$refs.scrollWrapper&&(this.$refs.scrollWrapper.style.height=window.innerHeight-Object(r["b"])(this.top)-Object(r["b"])(this.bottom)+"px",this.$refs.scrollWrapper.addEventListener("scroll",this.handleScroll))}},mounted:function(){this.refresh()}},a=o,c=(i("9248"),i("4023")),l=Object(c["a"])(a,n,s,!1,null,"55713509",null);e["a"]=l.exports},"708b":function(t,e,i){},"70fc":function(t,e,i){},"7cad":function(t,e,i){},"7e69":function(t,e,i){"use strict";var n=i("5b7d"),s=i.n(n);s.a},"80a7":function(t,e,i){"use strict";var n=i("460b"),s=i.n(n);s.a},"895e":function(t,e,i){"use strict";var n=i("0a6d"),s=i.n(n);s.a},"8d2e":function(t,e,i){"use strict";var n=i("3596"),s=i.n(n);s.a},"8f99":function(t,e,i){"use strict";var n=i("708b"),s=i.n(n);s.a},9248:function(t,e,i){"use strict";var n=i("70fc"),s=i.n(n);s.a},b1a9:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shelf-list",style:{top:t.shelfListTop}},[i("transition-group",{attrs:{name:"list",tag:"div",id:"shelf-list"}},t._l(t.data,(function(e){return i("div",{key:e.id,staticClass:"shelf-list-item-wrapper"},[i("shelf-item",{style:{height:t.itemHeight},attrs:{data:e}}),i("div",{staticClass:"shelf-list-title-wrapper"},[i("span",{staticClass:"shelf-list-title title-small"},[t._v(t._s(e.title))])])],1)})),0)],1)},s=[],r=(i("163d"),i("ac0d")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shelf-item",class:{"shelf-item-shadow":1===t.data.type||2===t.data.type},on:{click:t.onItemClick}},[i(t.item,{tag:"component",staticClass:"shelf-item-comp",class:{"is-edit":t.isEditMode&&2===t.data.type},attrs:{data:t.data}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditMode&&1===t.data.type,expression:"isEditMode && data.type === 1"}],staticClass:"icon-selected",class:{"is-selected":t.data.selected}})],1)},a=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shelf-item-book"},[i("img",{staticClass:"shelf-item-book-cover",attrs:{src:t.data.cover}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.data.private,expression:"data.private"}],staticClass:"private-wrapper"}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.data.private,expression:"data.private"}],staticClass:"private-icon-wrapper"},[i("span",{staticClass:"icon-private"})])])},l=[],h={props:{data:Object}},u=h,f=(i("432c"),i("4023")),d=Object(f["a"])(u,c,l,!1,null,"63859262",null),p=d.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shelf-item-category"},[t.data.itemList.length>0?i("div",{staticClass:"shelf-item-category-list"},t._l(t.data.itemList,(function(t,e){return i("div",{key:e,staticClass:"shelf-item-category-item"},[i("img",{staticClass:"shelf-item-category-img",attrs:{src:t.cover}})])})),0):i("div",{staticClass:"shelf-item-category-bg"},[i("span",{staticClass:"icon-book2"})])])},m=[],w={props:{data:Object}},y=w,g=(i("cd6d"),Object(f["a"])(y,v,m,!1,null,"7d89aad0",null)),b=g.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shelf-item-add"},[i("span",{staticClass:"icon-add"})])}],k={},S=k,_=(i("8d2e"),Object(f["a"])(S,x,C,!1,null,"77ef006c",null)),$=_.exports,E=i("da6f"),L={mixins:[r["c"]],props:{data:Object},computed:{item:function(){return 1===this.data.type?this.book:2===this.data.type?this.category:this.add}},data:function(){return{book:p,category:b,add:$}},methods:{onItemClick:function(){var t=this;this.isEditMode?(this.data.selected=!this.data.selected,this.data.selected?this.shelfSelected.pushWithoutDuplicate(this.data):this.setShelfSelected(this.shelfSelected.filter((function(e){return e.id!==t.data.id})))):1===this.data.type?this.showBookDetail(this.data):2===this.data.type?this.$router.push({path:"/store/category",query:{title:this.data.title}}):Object(E["i"])(this)}}},P=L,O=(i("7e69"),Object(f["a"])(P,o,a,!1,null,"506d7741",null)),T=O.exports,j=i("fa7d"),G={mixins:[r["c"]],components:{ShelfItem:T},props:{top:{type:Number,default:94},data:Array},computed:{itemHeight:function(){return(window.innerWidth-Object(j["b"])(120))/3/250*350+"px"},shelfListTop:function(){return Object(j["a"])(this.top)+"rem"}}},B=G,N=(i("895e"),Object(f["a"])(B,n,s,!1,null,"8b74899a",null));e["a"]=N.exports},b449:function(t,e,i){var n=function(t){"use strict";var e,i=Object.prototype,n=i.hasOwnProperty,s="function"===typeof Symbol?Symbol:{},r=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",a=s.toStringTag||"@@toStringTag";function c(t,e,i,n){var s=e&&e.prototype instanceof v?e:v,r=Object.create(s.prototype),o=new L(n||[]);return r._invoke=S(t,i,o),r}function l(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var h="suspendedStart",u="suspendedYield",f="executing",d="completed",p={};function v(){}function m(){}function w(){}var y={};y[r]=function(){return this};var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==i&&n.call(b,r)&&(y=b);var x=w.prototype=v.prototype=Object.create(y);function C(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t,e){function i(s,r,o,a){var c=l(t[s],t,r);if("throw"!==c.type){var h=c.arg,u=h.value;return u&&"object"===typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){i("next",t,o,a)}),(function(t){i("throw",t,o,a)})):e.resolve(u).then((function(t){h.value=t,o(h)}),(function(t){return i("throw",t,o,a)}))}a(c.arg)}var s;function r(t,n){function r(){return new e((function(e,s){i(t,n,e,s)}))}return s=s?s.then(r,r):r()}this._invoke=r}function S(t,e,i){var n=h;return function(s,r){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===s)throw r;return O()}i.method=s,i.arg=r;while(1){var o=i.delegate;if(o){var a=_(o,i);if(a){if(a===p)continue;return a}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===h)throw n=d,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=f;var c=l(t,e,i);if("normal"===c.type){if(n=i.done?d:u,c.arg===p)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(n=d,i.method="throw",i.arg=c.arg)}}}function _(t,i){var n=t.iterator[i.method];if(n===e){if(i.delegate=null,"throw"===i.method){if(t.iterator["return"]&&(i.method="return",i.arg=e,_(t,i),"throw"===i.method))return p;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var s=l(n,t.iterator,i.arg);if("throw"===s.type)return i.method="throw",i.arg=s.arg,i.delegate=null,p;var r=s.arg;return r?r.done?(i[t.resultName]=r.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,p):r:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,p)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function P(t){if(t){var i=t[r];if(i)return i.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var s=-1,o=function i(){while(++s<t.length)if(n.call(t,s))return i.value=t[s],i.done=!1,i;return i.value=e,i.done=!0,i};return o.next=o}}return{next:O}}function O(){return{value:e,done:!0}}return m.prototype=x.constructor=w,w.constructor=m,w[a]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},C(k.prototype),k.prototype[o]=function(){return this},t.AsyncIterator=k,t.async=function(e,i,n,s,r){void 0===r&&(r=Promise);var o=new k(c(e,i,n,s),r);return t.isGeneratorFunction(i)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},C(x),x[a]="Generator",x[r]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function s(n,s){return a.type="throw",a.arg=t,i.next=n,s&&(i.method="next",i.arg=e),!!s}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return s("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return s(o.catchLoc,!0);if(this.prev<o.finallyLoc)return s(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return s(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return s(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var r=s;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),E(i),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var s=n.arg;E(i)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:P(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(s){Function("r","regeneratorRuntime = r")(n)}},c447:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditMode,expression:"isEditMode"}],staticClass:"shelf-footer"},t._l(t.tabs,(function(e){return i("div",{key:e.index,staticClass:"shelf-footer-tab-wrapper",on:{click:function(i){return t.onTabClick(e)}}},[i("div",{staticClass:"shelf-footer-tab",class:{"is-selected":t.isSelected}},[1!==e.index||t.isPrivate?t._e():i("div",{staticClass:"icon-private tab-icon"}),1===e.index&&t.isPrivate?i("div",{staticClass:"icon-private-see tab-icon"}):t._e(),2!==e.index||t.isDownload?t._e():i("div",{staticClass:"icon-download tab-icon"}),2===e.index&&t.isDownload?i("div",{staticClass:"icon-download-remove tab-icon"}):t._e(),3===e.index?i("div",{staticClass:"icon-move tab-icon"}):t._e(),4===e.index?i("div",{staticClass:"icon-shelf tab-icon"}):t._e(),i("div",{staticClass:"tab-text",class:{"remove-text":4===e.index}},[t._v(t._s(t.label(e)))])])])})),0)},s=[];i("6d57"),i("06a2"),i("f548"),i("b449");function r(t,e,i,n,s,r,o){try{var a=t[r](o),c=a.value}catch(l){return void i(l)}a.done?e(c):Promise.resolve(c).then(n,s)}function o(t){return function(){var e=this,i=arguments;return new Promise((function(n,s){var o=t.apply(e,i);function a(t){r(o,n,s,a,c,"next",t)}function c(t){r(o,n,s,a,c,"throw",t)}a(void 0)}))}}var a=i("ac0d"),c=i("5657"),l=i("73f5"),h=i("101f"),u={mixins:[a["c"]],computed:{isSelected:function(){return this.shelfSelected&&this.shelfSelected.length>0},tabs:function(){return[{label:this.$t("shelf.private"),label2:this.$t("shelf.noPrivate"),index:1},{label:this.$t("shelf.download"),label2:this.$t("shelf.delete"),index:2},{label:this.$t("shelf.move"),index:3},{label:this.$t("shelf.remove"),index:4}]},isPrivate:function(){return!!this.isSelected&&this.shelfSelected.every((function(t){return t.private}))},isDownload:function(){return!!this.isSelected&&this.shelfSelected.every((function(t){return t.cache}))}},data:function(){return{popupMenu:null}},methods:{downloadSelectedBooks:function(){var t=o(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<this.shelfSelected.length)){t.next=7;break}return t.next=4,this.downloadBook(this.shelfSelected[e]).then((function(t){t.cache=!0}));case 4:e++,t.next=1;break;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),downloadBook:function(t){var e=this,i="",n=this.toast({text:i});return n.continueShow(),new Promise((function(s,r){Object(l["b"])(t,(function(t){n.remove(),s(t)}),r,(function(s){var r=Math.floor(s.loaded/s.total*100)+"%";i=e.$t("shelf.progressDownload").replace("$1","".concat(t.fileName,".epub(").concat(r,")")),n.updateText(i)}))}))},removeSelectedBook:function(){var t=this;Promise.all(this.shelfSelected.map((function(e){return t.removeBook(e)}))).then((function(e){e.map((function(t){t.cache=!1})),Object(c["l"])(t.shelfList),t.simpleToast(t.$t("shelf.removeDownloadSuccess"))}))},removeBook:function(t){return new Promise((function(e,i){Object(c["k"])("".concat(t.categoryText,"/").concat(t.fileName,"-info")),Object(h["c"])("".concat(t.fileName)),e(t)}))},hidePopup:function(){this.popupMenu.hide()},onComplete:function(){this.hidePopup(),this.setIsEditMode(!1),Object(c["l"])(this.shelfList)},setPrivate:function(){var t;t=!this.isPrivate,this.shelfSelected.forEach((function(e){e.private=t})),this.onComplete(),t?this.simpleToast(this.$t("shelf.setPrivateSuccess")):this.simpleToast(this.$t("shelf.closePrivateSuccess"))},showPrivate:function(){var t=this;this.popupMenu=this.popup({title:this.isPrivate?this.$t("shelf.closePrivateTitle"):this.$t("shelf.setPrivateTitle"),btn:[{text:this.isPrivate?this.$t("shelf.close"):this.$t("shelf.open"),click:function(){t.setPrivate()}},{text:this.$t("shelf.cancel"),click:function(){t.hidePopup()}}]}).show()},setDownload:function(){var t=o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.onComplete(),!this.isDownload){t.next=5;break}this.removeSelectedBook(),t.next=9;break;case 5:return t.next=7,this.downloadSelectedBooks();case 7:Object(c["l"])(this.shelfList),this.simpleToast(this.$t("shelf.setDownloadSuccess"));case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),showDownload:function(){var t=this;this.popupMenu=this.popup({title:this.isDownload?this.$t("shelf.removeDownloadTitle"):this.$t("shelf.setDownloadTitle"),btn:[{text:this.isDownload?this.$t("shelf.delete"):this.$t("shelf.open"),click:function(){t.setDownload()}},{text:this.$t("shelf.cancel"),click:function(){t.hidePopup()}}]}).show()},removeSelected:function(){var t=this;this.shelfSelected.forEach((function(e){t.setShelfList(t.shelfList.filter((function(t){return t!==e})))})),this.setShelfSelected([]),this.onComplete()},showRemove:function(){var t,e=this;t=1===this.shelfSelected.length?this.$t("shelf.removeBookTitle").replace("$1","《".concat(this.shelfSelected[0].title,"》")):this.$t("shelf.removeBookTitle").replace("$1",this.$t("shelf.selectedBooks")),this.popupMenu=this.popup({title:t,btn:[{text:this.$t("shelf.removeBook"),type:"danger",click:function(){e.removeSelected()}},{text:this.$t("shelf.cancel"),click:function(){e.hidePopup()}}]}).show()},onTabClick:function(t){if(this.isSelected)switch(t.index){case 1:this.showPrivate();break;case 2:this.showDownload();break;case 3:this.dialog().show();break;case 4:this.showRemove();break;default:break}},label:function(t){switch(t.index){case 1:return this.isPrivate?t.label2:t.label;case 2:return this.isDownload?t.label2:t.label;default:return t.label}}}},f=u,d=(i("80a7"),i("4023")),p=Object(d["a"])(f,n,s,!1,null,"15888bc7",null);e["a"]=p.exports},cd6d:function(t,e,i){"use strict";var n=i("7cad"),s=i.n(n);s.a},f4b8:function(t,e,i){}}]);
//# sourceMappingURL=chunk-5da028d5.504cfc7f.js.map