(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f2e08f6","chunk-4ad9fa09","chunk-3c0ce212"],{"1e50":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"main"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",[e("AsideTabs",{attrs:{route:this.activeRoute}})],1),e("main",{staticClass:"main-content col-sm-10"},[e("AllTests")],1)])])])])},i=[],l=e("f170"),r=e("bd4e"),n=e("51f1"),o=e("d4f6"),c={name:"Tests",components:{AsideTabs:r["a"],OuterHeader:l["a"],AllTests:n["default"],TestView:o["default"]},data(){return{activeRoute:"",form:{}}},methods:{setChildRoute(t){this.activeRoute=t}}},d=c,u=(e("8445"),e("2877")),h=Object(u["a"])(d,a,i,!1,null,"16f3e8fa",null);s["default"]=h.exports},"2d8a":function(t,s,e){"use strict";var a=e("4c93"),i=e.n(a);i.a},3354:function(t,s,e){"use strict";var a=e("8ab2"),i=e.n(a);i.a},"4c93":function(t,s,e){},"51f1":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("h5",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"caption"},[t._v("Requests")]),e("div",{staticClass:"wrapper_table"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"back-icon",on:{click:function(s){t.isShow=!t.isShow,t.results=""}}}),t.results?"normal"===t.results?e("table",{staticClass:"table table-bordered ml-5 mt-5"},[t._m(1),t._l(t.isPatients,(function(s,a){return e("tr",[e("td",[t._v(t._s(a+1))]),e("td",[t._v(t._s(s.virintel_id))]),e("td",[t._v(t._s(s.patient_name))]),e("td",[t._v(t._s(s.rbd))]),e("td",[t._v(t._s(s.n))]),e("td",[t._v(t._s(s.result))])])}))],2):"bad"===t.results?e("table",{staticClass:"table table-bordered ml-5 mt-5",attrs:{id:"control"}},[t._m(2),e("tr",{class:{green:t.rbdPos(t.isBadControl),red:!t.rbdPos(t.isBadControl)}},[e("td",{staticClass:"pl-5"},[t._v("RBD Pos > Neg*5")])]),e("tr",{class:{green:t.rbdTresh(t.isBadControl),red:!t.rbdTresh(t.isBadControl)}},[e("td",{staticClass:"pl-5"},[t._v("RBD Threshold > Neg*1.7")])]),e("tr",{class:{green:t.nPos(t.isBadControl),red:!t.nPos(t.isBadControl)}},[e("td",{staticClass:"pl-5"},[t._v("N Pos > Neg*5")])]),e("tr",{class:{green:t.nTresh(t.isBadControl),red:!t.nTresh(t.isBadControl)}},[e("td",{staticClass:"pl-5"},[t._v("N Thresh > Neg*1.7")])])]):t._e():e("table",{staticClass:"table one_table"},[t._m(0),t._l(t.isFiles,(function(s){return e("tr",{staticStyle:{"border-bottom":"0.3px solid #d8d8d8"}},[e("td",{attrs:{"aria-label":"id"}},[t._v(t._s(s.id))]),e("td",{attrs:{"aria-label":"File Name"}},[t._v(t._s(s.file_name))]),"Normal"===s.status?e("td",{attrs:{"aria-label":"Action"}},[e("button",{staticClass:"btn btn-sm  btn-success",on:{click:function(e){return t.getResults(s.id)}}},[t._v("Show")]),e("button",{staticClass:"btn btn-sm ml-3 btn-info",on:{click:function(e){return t.generatePdf(s.id)}}},[t._v("Generate PDF")])]):e("td",{attrs:{"aria-label":"Action"}},[e("button",{staticClass:"btn btn-sm  btn-danger",on:{click:function(e){return t.getBadResults(s.id)}}},[t._v("View control")])]),e("td",{attrs:{"aria-label":"Access"}},[e("span",{class:{accept:"Normal"===s.status,denied:"Bad"===s.status}})])])}))],2)]),t.loading?e("div",{staticClass:"pop-up",class:{hide:t.close}},[e("div",{staticClass:"d-flex flex-column justify-content-center text-center"},[e("h2",[t._v(t._s(t.pdfDownloaded))]),e("div",{staticClass:"form-group text-center"},[e("button",{staticClass:"btn m-3",attrs:{type:"button"},on:{click:function(s){t.close=!t.close}}},[t._v("OK")])])])]):e("Loader")],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",{staticStyle:{"border-bottom":"0.3px solid #d8d8d8"}},[e("th",{staticClass:"th-title",attrs:{scope:"col"}},[t._v("ID")]),e("th",{staticClass:"th-title",attrs:{scope:"col"}},[t._v("Name")]),e("th",{staticClass:"th-title ml-5",attrs:{scope:"col"}},[t._v("Action")]),e("th",{staticClass:"th-title",attrs:{scope:"col"}},[t._v("Status")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("№")]),e("th",{attrs:{scope:"col"}},[t._v("VirintelID")]),e("th",{attrs:{scope:"col"}},[t._v("Full Name")]),e("th",{attrs:{scope:"col"}},[t._v("RBD")]),e("th",{attrs:{scope:"col"}},[t._v("N")]),e("th",{attrs:{scope:"col"}},[t._v("Result")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{staticClass:"text-center"},[t._v("Quality Controls Rules")])])])}],l=e("2f62"),r=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"window"},[e("div",{staticClass:"wrapper"},[e("h2",[t._v("Loading...")]),e("div",{staticClass:"container"},[e("div",{staticClass:"square"}),e("div",{staticClass:"square"}),e("div",{staticClass:"square"}),e("div",{staticClass:"square"}),e("div",{staticClass:"square"})])])])}],o={name:"Loader"},c=o,d=(e("3354"),e("2877")),u=Object(d["a"])(c,r,n,!1,null,"25deb864",null),h=u.exports,v={name:"AllTests",components:{Loader:h},data(){return{isShow:!0,results:"",loader:!1,loading:!0,close:!0}},computed:{...Object(l["b"])(["isFiles","isPatients","isBadControl","pdfDownloaded"])},methods:{async getResults(t){await this.$store.dispatch("showResults",t),this.isShow=!this.isShow,this.results="normal"},async getBadResults(t){await this.$store.dispatch("showBadResults",t),this.isShow=!this.isShow,this.results="bad"},async generatePdf(t){this.loading=!this.loading,await this.$store.dispatch("startGenerate",t),this.loading=!!this.pdfDownloaded,this.close=!this.close},rbdPos:function(t){return Number(t.RBD_Pos)>5*Number(t.RBD_Negative_Control)},rbdTresh:function(t){return Number(t.RBD_Threshold)>1.7*Number(t.RBD_Negative_Control)},nPos:function(t){return Number(t.N_Pos)>5*Number(t.N_Negative_Control)},nTresh:function(t){let s=Number(1.7*t.N_Negative_Control);return Number(t.N_Threshold)>s}},mounted(){this.$store.dispatch("getFileList")}},b=v,f=(e("a3b0"),Object(d["a"])(b,a,i,!1,null,"3031d36f",null));s["default"]=f.exports},8445:function(t,s,e){"use strict";var a=e("e97f"),i=e.n(a);i.a},"8ab2":function(t,s,e){},"8d8d":function(t,s,e){"use strict";var a=e("fb9c"),i=e.n(a);i.a},"93b4":function(t,s,e){},a3b0:function(t,s,e){"use strict";var a=e("93b4"),i=e.n(a);i.a},bd4e:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.uploaded?e("div",{staticClass:"pop-up"},[e("h3",{staticClass:"message mt-3 mb-2"},[t._v(t._s(t.message))]),e("button",{staticClass:"btn mt-5",attrs:{type:"button"},on:{click:function(s){t.uploaded=!t.uploaded}}},[t._v("Close")])]):t._e(),e("nav",[e("ul",{staticClass:"nav-list"},[e("span",{staticClass:"title-menu"},[t._v("MENU")]),e("li",{class:["/assistant/profile"===t.route?t.activeClass:"","nav-item"]},[e("router-link",{staticClass:"nav-link",attrs:{to:"/assistant/profile"}},[e("span",[t._v("My Profile")])])],1),e("li",{class:["/assistant/tests"===t.$route.path||"/assistant/test/id"===t.$route.path?t.activeClass:"","nav-item"]},[e("router-link",{staticClass:"nav-link",attrs:{to:"/assistant/tests"}},[e("span",[t._v("Tests")])])],1),e("li",[e("button",{staticClass:"mt-5 btn btn-primary",on:{click:t.toggleModal}},[t._v("Upload")])])])]),t.showModal?e("div",{staticClass:"pop-up"},[e("span",{attrs:{id:"close"},on:{click:t.toggleModal}},[e("svg",{attrs:{width:"35",height:"35",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.2388 0.148438C5.0005 0.148438 0.73877 4.34345 0.73877 9.50012C0.73877 14.6568 5.00041 18.8518 10.2388 18.8518C15.477 18.8518 19.7388 14.6567 19.7388 9.50012C19.7388 4.34354 15.4771 0.148438 10.2388 0.148438ZM10.2388 16.9813C6.04812 16.9813 2.63883 13.6252 2.63883 9.50003C2.63883 5.37489 6.04821 2.01874 10.2388 2.01874C14.4294 2.01874 17.8387 5.37489 17.8387 9.50003C17.8387 13.6252 14.4294 16.9813 10.2388 16.9813Z"}}),e("path",{attrs:{d:"M13.7608 11.6442L11.5825 9.49991L13.7608 7.35563C14.1318 6.99046 14.1318 6.39826 13.7608 6.03309C13.3899 5.66801 12.7883 5.66801 12.4172 6.03309L10.239 8.17728L8.06081 6.03309C7.68984 5.66801 7.08825 5.66801 6.71719 6.03309C6.34622 6.39826 6.34622 6.99046 6.71719 7.35573L8.89549 9.50001L6.71719 11.6442C6.34622 12.0094 6.34622 12.6016 6.71719 12.9668C6.90277 13.1494 7.14584 13.2407 7.38891 13.2407C7.63197 13.2407 7.87523 13.1493 8.06062 12.9668L10.239 10.8226L12.4173 12.9668C12.6029 13.1494 12.846 13.2407 13.089 13.2407C13.3321 13.2407 13.5754 13.1493 13.7607 12.9668C14.1318 12.6016 14.1318 12.0095 13.7608 11.6442Z"}})])]),e("form",{staticClass:"d-flex flex-column justify-content-center",on:{submit:function(s){return s.preventDefault(),t.submitHandler(s)}}},[t._m(0)])]):t._e()])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"font-weight-bold",attrs:{for:"file"}},[t._v("Excel file input")]),e("br"),e("input",{staticClass:"m-2",attrs:{type:"file",name:"file",id:"file",required:""}}),e("br"),e("button",{staticClass:"btn m-3",attrs:{type:"submit"}},[t._v("Import")])])}],l=e("f9df"),r={name:"AsideTabs",props:["route"],data(){return{activeClass:"active",showModal:!1,message:"",uploaded:!1}},methods:{toggleModal(){this.showModal=!this.showModal},submitHandler(){this.form=new FormData;let t=document.querySelector("#file").files[0];this.form.append("file",t),this.showModal=!1,l["a"].upload(this.form).then(t=>{200===t.status&&(this.message=t.data.message),this.uploaded=!this.uploaded}).catch(t=>{console.log(t)}),this.$store.dispatch("getFileList")}}},n=r,o=(e("8d8d"),e("2877")),c=Object(o["a"])(n,a,i,!1,null,"f7142b2c",null);s["a"]=c.exports},d4f6:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"btn-back"},[e("router-link",{attrs:{to:"/assistant/tests"}},[e("span",{staticClass:"back-icon"}),e("span",{staticClass:"back-ref"})])],1),t._m(0),e("h5",{staticClass:"caption"},[t._v("Commentary")]),t._m(1)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td",{attrs:{"aria-label":"ID",scope:"row"}},[t._v("123456")]),e("td",{attrs:{"aria-label":"Date"}},[t._v("28/07/2020 ")]),e("td",{attrs:{"aria-label":"Name"}},[t._v("John Smith")]),e("td",{attrs:{"aria-label":"Laboratory"}},[t._v("Laboratory DGFHFJ")]),e("td",{attrs:{"aria-label":"Healthcare Provider"}},[t._v("Anjelina Jolie ")]),e("td",{attrs:{"aria-label":"Status"}},[t._v("Done")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",[e("textarea",{attrs:{rows:"10"}}),e("button",{staticClass:"comment-sbmt-btn"},[t._v("Submit")])])}],l={name:"TestView",data(){return{activeRoute:""}},created(){this.activeRoute=this.$route.path,this.$emit("routeFromChild",this.activeRoute)}},r=l,n=(e("2d8a"),e("2877")),o=Object(n["a"])(r,a,i,!1,null,"f1f5267c",null);s["default"]=o.exports},e97f:function(t,s,e){},fb9c:function(t,s,e){}}]);
//# sourceMappingURL=chunk-4f2e08f6.013dcb56.js.map