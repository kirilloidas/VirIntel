(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c95e2e8"],{"74ce":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),e("table",{staticClass:"table"},[t._m(1),e("tbody",t._l(t.fileListUser,(function(s){return e("tr",{staticStyle:{"border-bottom":"0.3px solid #d8d8d8"}},[e("td",{attrs:{"aria-label":"FileName"}},[t._v(t._s(s.pdf_file_name))]),e("td",{attrs:{"aria-label":"Status"}},[e("span",{staticClass:"green red"},[t._v(t._s(s.result))])]),e("td",{attrs:{"aria-label":"Action"}},[e("button",{staticClass:"btn btn-info",on:{click:function(e){return t.downloadPdf(s.id)}}},[t._v("Download PDF")])])])})),0)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"my-tests-title--wrapper"},[e("span",{staticClass:"caption"},[t._v("My Tests")]),e("button",{staticClass:"handle-btn-order"},[t._v("Order a test")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{staticClass:"th-title",attrs:{scope:"col"}},[t._v("FileName")]),e("th",{staticClass:"th-title",attrs:{scope:"col"}},[t._v("Status")]),e("th",{staticClass:"th-title",attrs:{scope:"col"}},[t._v("Action")])])])}],n=e("2f62"),l={name:"AllTests",computed:{...Object(n["b"])(["fileListUser","isUser","pdfDownload"])},methods:{async downloadPdf(t){await this.$store.dispatch("pdfLink",t),window.open(this.pdfDownload.data,"_blank")}},mounted(){this.$store.dispatch("authUser"),this.$store.dispatch("getFilesPatient",this.isUser.id)}},c=l,r=(e("f16c"),e("2877")),o=Object(r["a"])(c,a,i,!1,null,"1724c5ca",null);s["default"]=o.exports},"9a6d":function(t,s,e){},f16c:function(t,s,e){"use strict";var a=e("9a6d"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-3c95e2e8.0a670269.js.map