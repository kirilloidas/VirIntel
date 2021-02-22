(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5165adf2"],{"73cf":function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("main",{staticClass:"main"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row  selected-main"},[s.form?t("section",{staticClass:"main-content"},[t("h1",[s._v("Welcome!")]),t("span",{staticClass:"signup"},[s._v("Sign up")]),t("form",{staticClass:"login-form",on:{submit:function(e){return e.preventDefault(),s.submitHandler(e)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.user.name,expression:"user.name",modifiers:{trim:!0}}],staticClass:"form-control input-field",attrs:{type:"text",placeholder:"Full name",minlength:"2",maxlength:"255",required:""},domProps:{value:s.user.name},on:{input:[function(e){e.target.composing||s.$set(s.user,"name",e.target.value.trim())},s.testName],blur:function(e){return s.$forceUpdate()}}}),s.nameChecked?s._e():t("span",{staticClass:"d-block pl-3 check-pass invalid"},[s._v("Enter your first and last name separated by space. Capitalized words. Not numbers")])])]),t("div",{staticClass:"row form-group"},[t("div",{staticClass:"col"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.user.email,expression:"user.email",modifiers:{trim:!0}}],staticClass:"form-control input-field",attrs:{type:"email",name:"email",placeholder:"Email",minlength:"5",maxlength:"255",required:""},domProps:{value:s.user.email},on:{input:function(e){e.target.composing||s.$set(s.user,"email",e.target.value.trim())},blur:function(e){return s.$forceUpdate()}}})])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control input-field",attrs:{type:"password",id:"password-field1",placeholder:"Password"},domProps:{value:s.user.password},on:{input:[function(e){e.target.composing||s.$set(s.user,"password",e.target.value)},s.testPass1]}}),s.passChecked?s._e():t("span",{staticClass:"d-block pl-3 check-pass invalid"},[s._v("Password must contain at least one special character, one capital letter and be at least 8 characters long")]),t("span",{staticClass:"field-icon toggle-password",class:{"fa fa-eye fa-eye-slash":!s.slash,"fa fa-fw fa-eye":s.slash},on:{click:[function(e){s.slash=!s.slash},s.togglePassword]}})])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control input-field",attrs:{type:"password",id:"password-field2",placeholder:"Password confirmation"},domProps:{value:s.user.password_confirmation},on:{blur:s.touchHandler,input:[function(e){e.target.composing||s.$set(s.user,"password_confirmation",e.target.value)},s.touchHandler]}}),t("span",{staticClass:"field-icon toggle-password",class:{"fa fa-eye fa-eye-slash":!s.slash,"fa fa-fw fa-eye":s.slash},on:{click:[function(e){s.slash=!s.slash},s.togglePassword]}}),t("span",{directives:[{name:"show",rawName:"v-show",value:!s.passwordConfirmed,expression:"!passwordConfirmed"}],staticClass:"invalid"},[s._v("Passwords must match")])])]),t("input",{staticClass:"handle-btn-sbm",attrs:{type:"submit",value:"Register"}})]),t("span",[s._v("Have an account?")]),t("router-link",{staticClass:"already-have-acc",attrs:{to:"/login"}},[s._v(" Sign in")])],1):t("div",{staticClass:"container mt-5"},[t("div",{attrs:{id:"thankyou"}},[s._v("Thank you, "),t("p",{staticClass:"userName"},[s._v(s._s(s.user.name)+"!")])]),t("router-link",{staticClass:"already-have-acc",attrs:{to:"/login"}},[s._v(" Sign in")])],1)])])])])},r=[],i=t("f9df"),o={name:"Register",data(){return{user:{name:"",email:"",password:"",password_confirmation:""},form:!0,passwordConfirmed:!0,passChecked:!0,nameChecked:!0,slash:!1}},methods:{togglePassword(){const s=document.getElementById("password-field1"),e=document.getElementById("password-field2");"password"===s.getAttribute("type")?s.setAttribute("type","text"):s.setAttribute("type","password"),"password"===e.getAttribute("type")?e.setAttribute("type","text"):e.setAttribute("type","password")},submitHandler(){this.touchHandler(),this.testPass1(),this.testName(),this.passwordConfirmed&&this.passChecked&&this.nameChecked&&i["a"].register(this.user).then(()=>{this.form=!1}).catch(s=>{422===s.response.status&&(this.errors=s.response.data.errors)})},touchHandler(){this.user.password===this.user.password_confirmation?this.passwordConfirmed=!0:this.passwordConfirmed=!1},testPass1(){const s=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*,./?<>])(?=.{12,255})");return this.passChecked=s.test(this.user.password),this.passChecked},testName(){const s=new RegExp("^([a-zA-Z]{1,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\\s?([a-zA-Z]{1,})?)");return this.nameChecked=s.test(this.user.name),this.nameChecked}}},n=o,l=(t("f992"),t("2877")),d=Object(l["a"])(n,a,r,!1,null,"38a63438",null);e["default"]=d.exports},da9e:function(s,e,t){},f992:function(s,e,t){"use strict";var a=t("da9e"),r=t.n(a);r.a}}]);
//# sourceMappingURL=chunk-5165adf2.0e43b333.js.map