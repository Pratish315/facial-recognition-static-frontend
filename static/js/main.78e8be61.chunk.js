(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},771:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n(10),i=n.n(s),c=n(26),r=n.n(c),l=(n(218),n(206)),o=n(207),b=n(213),d=n(212),u=(n(219),n(220),function(e){var t=e.imagePrediction,n=e.box;return Object(a.jsx)("div",{className:"center ma",children:Object(a.jsxs)("div",{className:"absolute mt2",children:[Object(a.jsx)("img",{id:"inputImage",width:"500px",height:"auto",src:t,alt:""}),Object(a.jsx)("div",{className:"bounding-box",style:{top:n.topRow,bottom:n.bottomRow,left:n.leftCol,right:n.rightCol}})]})})}),h=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(a.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return t("SignIn")},children:" Sign Out"})}):Object(a.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(a.jsx)("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return t("SignIn")},children:" Sign In"}),Object(a.jsx)("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return t("Register")},children:" Register"})]})},m=n(208),j=n.n(m),p=(n(221),n.p+"static/media/brain.5b26a287.png"),g=function(){return Object(a.jsx)("div",{className:"ma4 mt0",children:Object(a.jsx)(j.a,{className:"Tilt br shadow-2",options:{max:55},style:{height:150,width:150},children:Object(a.jsxs)("div",{className:"Tilt-inner pa3",children:[" ",Object(a.jsx)("img",{style:{paddingTop:"5px"},alt:"brai_ logo",src:p})," "]})})})},x=(n(222),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"f3",children:"This Convolutional Neural Network will detect faces in your pictures. Try it out!"}),Object(a.jsx)("div",{className:"center",children:Object(a.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(a.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),Object(a.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:" Detect "})]})})]})}),f=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"white f3",children:"Pratish, your current rank is..."}),Object(a.jsx)("div",{className:"white f1",children:"#1"})]})},O=(n(223),n(209)),w=n.n(O),v=n(117),N=n.n(v),y=function(e){var t=e.onRouteChange;return Object(a.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:function(){return t("Home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(a.jsx)("div",{className:"lh-copy mt3",children:Object(a.jsx)("p",{onClick:function(){return t("Register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})},C=function(e){var t=e.onRouteChange;return Object(a.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:function(){return t("Home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})},k=(n(488),{particles:{number:{value:100,density:{enable:!0,value_area:800}}}}),S=new N.a.App({apiKey:"1671dc52247642daa536e4c5ec8a28a2"}),I=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),S.models.initModel({id:N.a.FACE_DETECT_MODEL}).then((function(t){return t.predict(e.state.input)})).then((function(t){e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(t){return e.setState({box:{}})}))},e.onRouteChange=function(t){"SignIn"===t||"Register"===t?e.setState({isSignedIn:!1}):"Home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"SignIn",isSignedIn:!1},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(w.a,{className:"particles",params:k}),Object(a.jsx)(h,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"Home"===this.state.route?Object(a.jsxs)("div",{children:[Object(a.jsx)(g,{}),Object(a.jsx)(f,{}),Object(a.jsx)(x,{onButtonSubmit:this.onButtonSubmit,onInputChange:this.onInputChange}),Object(a.jsx)(u,{box:this.state.box,imagePrediction:this.state.imageUrl})]}):"SignIn"===this.state.route?Object(a.jsx)(y,{onRouteChange:this.onRouteChange}):Object(a.jsx)(C,{onRouteChange:this.onRouteChange})]})}}]),n}(s.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,772)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root")),R()}},[[771,1,2]]]);
//# sourceMappingURL=main.78e8be61.chunk.js.map