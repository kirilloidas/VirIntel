(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a49234b8","chunk-1b3b1e72"],{1842:function(t,s,a){},"4ee4":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",[a("ul",{staticClass:"nav-list"},[a("span",{staticClass:"title-menu"},[t._v("MENU")]),a("li",{class:["/doctor/profile"===t.route?t.activeClass:"","nav-item"]},[a("router-link",{staticClass:"nav-link",attrs:{to:"/doctor/profile"}},[a("span",[t._v("My Profile")])])],1),a("li",{class:["/doctor/patients"===t.route||"/doctor/patient/view"===t.route?t.activeClass:"","nav-item"]},[a("router-link",{staticClass:"nav-link",attrs:{to:"/doctor/patients"}},[a("span",[t._v("My Patients")])])],1),a("li",{class:["/doctor/tests"===t.route||"/doctor/test/id"===t.route?t.activeClass:"","nav-item"]},[a("router-link",{staticClass:"nav-link",attrs:{to:"/doctor/tests"}},[a("span",[t._v("Tests")])])],1)])])},l=[],i={name:"AsideTabs",props:["route"],data(){return{activeClass:"active"}}},r=i,o=(a("7731"),a("2877")),c=Object(o["a"])(r,e,l,!1,null,"c9d3e564",null);s["default"]=c.exports},6814:function(t,s,a){"use strict";var e=a("1842"),l=a.n(e);l.a},"73c2":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"main"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("AsideTabs",{attrs:{route:this.activeRoute}}),a("main",{staticClass:"main-content col-sm-10"},[a("form",[t._m(0),t._m(1),t._m(2),t._m(3),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"sex"}},[t._v("Sex")]),a("div",{staticClass:"col-sm-10"},[a("select",{staticClass:"form-control select-sex",attrs:{id:"sex"}},t._l(t.genders,(function(s){return a("option",t._b({staticClass:"option"},"option",t.gender,!1),[t._v(t._s(s))])})),0)])]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"password-field"}},[t._v("Password")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{id:"password-field",type:"password",name:"password",placeholder:"Password",value:"qwerty",required:""}}),a("span",{staticClass:"field-icon toggle-password",class:{"fa fa-eye fa-eye-slash":!t.slash,"fa fa-fw fa-eye":t.slash},on:{click:[function(s){t.slash=!t.slash},t.togglePassword]}})])]),a("input",{staticClass:"handle-btn-sbm",attrs:{type:"submit",value:"Save Changes"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.submit()}}})])])],1)])])])},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h5",[t._v("Personal information")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"first_name"}},[t._v("First Name")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{type:"text",id:"first_name",placeholder:"First name",value:"First name",required:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"last_name"}},[t._v("Last Name")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{type:"text",id:"last_name",placeholder:"Last name",value:"Last name",required:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"date_birth"}},[t._v("Date of Birth")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{type:"date",id:"date_birth",min:"1900-01-01",max:"2000-12-31",placeholder:"Date of birth",value:"1900-01-01",required:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h5",[t._v("Contact information")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"tel"}},[t._v("Work Number")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{type:"text",id:"tel",placeholder:"Phone Number",value:"+380934686862",required:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"state"}},[t._v("State")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{type:"text",id:"state",placeholder:"Work Address",value:"California",required:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"city"}},[t._v("City")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{type:"text",id:"city",placeholder:"City",value:"Los Angeles",required:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"street"}},[t._v("Street")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{type:"text",id:"street",placeholder:"State",value:"E 1st St",required:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"zip"}},[t._v("Zip")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{type:"text",id:"zip",placeholder:"Zip",value:"90012",required:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h5",[t._v("Additional information")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"specialisation"}},[t._v("Specialisation")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{type:"text",id:"specialisation",placeholder:"Specialisation",value:"Specialisation",required:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"assistant"}},[t._v("Assistant")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{type:"text",id:"assistant",placeholder:"Assistant",value:"Assistant",required:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h5",[t._v("Account information")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"email"}},[t._v("Email")]),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control input-field",attrs:{type:"email",id:"email",placeholder:"Email",value:"johnsmith@gmail.com",required:""}})])])}],i=a("f170"),r=a("4ee4"),o={name:"DoctorProfile",components:{OuterHeader:i["a"],AsideTabs:r["default"]},data(){return{slash:!1,activeRoute:"",name:"",lastName:"",date:"",email:"",gender:"",genders:["Male","Female"]}},methods:{togglePassword(){const t=document.getElementById("password-field");"password"===t.getAttribute("type")?t.setAttribute("type","text"):t.setAttribute("type","password")}},created(){this.activeRoute=this.$route.path}},c=o,n=(a("6814"),a("2877")),u=Object(n["a"])(c,e,l,!1,null,"5cb2af76",null);s["default"]=u.exports},7731:function(t,s,a){"use strict";var e=a("e12b"),l=a.n(e);l.a},e12b:function(t,s,a){}}]);
//# sourceMappingURL=chunk-a49234b8.832e24f6.js.map