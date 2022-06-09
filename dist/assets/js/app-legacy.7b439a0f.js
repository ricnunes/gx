(function(){"use strict";var t={7667:function(t,e,i){i(6992),i(8674),i(9601),i(7727);var n=i(8935),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("gxHeader"),i("gxLoader",{directives:[{name:"show",rawName:"v-show",value:!t.isLoaded,expression:"!isLoaded"}]}),t.isLoaded?i("gxContent"):t._e()],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"header-container"},[t._m(0),i("gxCommerceBar",{staticClass:"show-xlg"}),t._m(1),i("gxMenu",{staticClass:"show-xlg"}),t._m(2)],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hamburguer"},[i("span"),i("span"),i("span")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:i(8755)}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search show-xlg"},[i("span")])}],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu"},[i("ul",t._l(t.menus,(function(e){return i("li",{key:e.id},[i("h6",[i("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])])})),0)])},c=[],u={name:"gxHeader",data:function(){return{menus:[{id:0,link:"#banking",name:"Banking"},{id:1,link:"#insurance",name:"Insurance"},{id:2,link:"#gx-tech",name:"GX Tech"}]}}},d=u,h=i(3736),v=(0,h.Z)(d,l,c,!1,null,null,null),m=v.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu"},[i("ul",t._l(t.menus,(function(e){return i("li",{key:e.id},[i("h6",[i("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])])})),0)])},f=[],p={name:"gxMenu",data:function(){return{menus:[{id:0,link:"#about",name:"About"},{id:1,link:"#news",name:"News"},{id:2,link:"#contact",name:"Contact us"}]}}},y=p,x=(0,h.Z)(y,g,f,!1,null,null,null),b=x.exports,w={components:{gxCommerceBar:m,gxMenu:b},name:"gxHeader"},C=w,_=(0,h.Z)(C,r,s,!1,null,null,null),S=_.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gx-loader"},[i("lottie-vue-player",{staticStyle:{width:"110px",height:"100vh"},attrs:{src:t.publicPath+"/static/assets/imgs/lf30_dlviouvg.json",backgroundColor:t.options.backgroundColor,loop:"",autoplay:""}})],1)},P=[],k={name:"gxLoader",data:function(){return{options:{backgroundColor:"#000"},publicPath:"/gx/"}}},A=k,Z=(0,h.Z)(A,T,P,!1,null,null,null),$=Z.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sections"},[i("gxHome"),i("gxSectionTwo"),i("gxIpadsTwo"),i("gxSectionSix"),i("gxSectionSeven"),i("gxSectionHeight"),i("gxFooter")],1)},L=[],E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",[t.hasVideoStopped()?t._e():i("div",[i("div",{staticClass:"gx-logo"},[i("svg",{attrs:{id:"eSGJivPWXx41",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1112 201","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision"}},[i("defs",[i("filter",{attrs:{id:"eSGJivPWXx43-filter",x:"-150%",width:"400%",y:"-150%",height:"400%"}},[i("feComponentTransfer",{attrs:{id:"eSGJivPWXx43-filter-opacity-0",result:"result"}},[i("feFuncA",{attrs:{id:"eSGJivPWXx43-filter-opacity-0-A",type:"table",tableValues:"0 1"}})],1)],1),i("filter",{attrs:{id:"eSGJivPWXx47-filter",x:"-150%",width:"400%",y:"-150%",height:"400%"}},[i("feComponentTransfer",{attrs:{id:"eSGJivPWXx47-filter-opacity-0",result:"result"}},[i("feFuncA",{attrs:{id:"eSGJivPWXx47-filter-opacity-0-A",type:"table",tableValues:"0 1"}})],1)],1)]),i("path",{attrs:{id:"eSGJivPWXx42",d:"M333.884,63.0048c-18.2-19.1151-25.903-27.7195-44.065-46.8476h-49.475c26.444,27.7711,42.378,45.0829,68.822,72.8025c8.244-8.656,16.483-17.3076,24.718-25.9549Z",opacity:"0",fill:"#fff"}}),i("path",{attrs:{id:"eSGJivPWXx43",d:"M659.63,85v-58.77h-19.71v-7.56h47.61v7.56h-19.71v58.77h-8.19Zm36.422,0v-66.33h7.92v26.73l7.2-7.47h17.37l9.36,9.45v37.62h-7.92v-35.64l-4.77-5.13h-11.97l-9.27,9.45v31.32h-7.92Zm56.162-52.2v-10.62h7.92v10.62h-7.92Zm0,52.2v-47.07h7.92v47.07h-7.92Zm22.588,0v-47.07h7.92v8.46l8.19-8.46h17.37l9.36,9.45v37.62h-7.92v-35.64l-4.77-5.13h-11.97l-10.26,10.44v30.33h-7.92Zm57.129,0v-66.33h7.92v36.09h1.98l18.9-16.83h10.44l-20.34,19.08L872.521,85h-9.54l-17.64-22.86-5.49,5.13v17.73h-7.92Zm69.268,0v-66.33h36l13.77,13.95v38.43L937.199,85h-36Zm8.19-7.29h24.12l9.27-9.45v-32.85l-9.27-9.45h-24.12v51.75ZM969.336,85l-9.36-9.45v-10.71l9.36-9.45h23.94v-5.85l-4.86-4.95h-22.32v-6.66h25.74l9.364,9.45v37.62h-7.924v-7.29L985.986,85h-16.65Zm3.51-6.3h11.16l9.27-9.18v-7.92l-20.43.09-4.95,4.86v7.2l4.95,4.95ZM1024.35,85l-8.28-8.19v-32.58h-4.95v-6.3h5.13l1.98-12.06h5.76v12.06h9.99v6.3h-9.99v29.79l4.23,4.41h7.83v6.57h-11.7Zm26.46,0l-9.36-9.45v-10.71l9.36-9.45h23.94v-5.85l-4.86-4.95h-22.32v-6.66h25.74l9.36,9.45v37.62h-7.92v-7.29L1067.46,85h-16.65Zm3.51-6.3h11.16l9.27-9.18v-7.92l-20.43.09-4.95,4.86v7.2l4.95,4.95ZM646.58,183v-66.33h36l13.77,13.95v38.43L682.58,183h-36Zm8.19-7.29h24.12l9.27-9.45v-32.85l-9.27-9.45h-24.12v51.75Zm54.817-44.91v-10.62h7.92v10.62h-7.92Zm0,52.2v-47.07h7.92v47.07h-7.92Zm22.948,0v-40.77h-4.86v-6.3h4.86v-10.98l8.28-8.28h11.7v6.57h-7.83l-4.23,4.41v8.28h10.08v6.3h-10.08v40.77h-7.92Zm27.334,0v-40.77h-4.86v-6.3h4.86v-10.98l8.28-8.28h11.7v6.57h-7.83l-4.23,4.41v8.28h10.08v6.3h-10.08v40.77h-7.92Zm35.344,0l-9.45-9.45v-28.17l9.45-9.45h20.97l9.45,9.45v17.01h-31.95v9.09l4.95,4.95h26.19v6.57h-29.61Zm-1.53-26.91h24.03v-8.91l-4.95-4.95h-14.13l-4.95,4.95v8.91ZM839.314,183v-47.07h7.92v8.46l8.19-8.46h12.06v7.92h-11.7l-8.55,8.82v30.33h-7.92Zm43.965,0l-9.45-9.45v-28.17l9.45-9.45h20.97l9.45,9.45v17.01h-31.95v9.09l4.95,4.95h26.19v6.57h-29.61Zm-1.53-26.91h24.03v-8.91l-4.95-4.95h-14.13l-4.95,4.95v8.91ZM927.38,183v-47.07h7.92v8.46l8.19-8.46h17.37l9.36,9.45v37.62h-7.92v-35.64l-4.77-5.13h-11.97L935.3,152.67v30.33h-7.92Zm65.949,0l-8.28-8.19v-32.58h-4.95v-6.3h5.13l1.98-12.06h5.76v12.06h9.991v6.3h-9.991v29.79l4.23,4.41h7.831v6.57h-11.701Zm21.331,0v-66.33h7.92v66.33h-7.92Zm30.59,16.83l8.46-20.07h-3.33l-19.35-43.83h8.73l15.12,36h2.07l13.95-36h8.64l-26.28,63.9h-8.01Z",opacity:"0",filter:"url(#eSGJivPWXx43-filter)",fill:"#fff"}}),i("path",{attrs:{id:"eSGJivPWXx44",d:"M546.398,10v190.636",opacity:"0",fill:"none",stroke:"#fff","stroke-width":"3"}}),i("path",{attrs:{id:"eSGJivPWXx45",d:"M344.408,73.5283L319.69,99.4702L240.344,182.783h49.436l54.628-57.358l24.705-25.9548l79.346-83.3003h-49.436L344.408,73.5283Z",opacity:"0",fill:"#fff"}}),i("path",{attrs:{id:"eSGJivPWXx46",d:"M356.375,137.198l42.648,45.586h49.437l-67.135-71.296-24.95,25.71Z",opacity:"0",fill:"#fff"}}),i("path",{attrs:{id:"eSGJivPWXx47",d:"M130.386,117.826h53.443v22.683c-22.812,6.441-46.075,9.725-66.684,9.287-28.9436-.682-52.0647-8.192-68.7067-22.477-11.5928-9.944-15.2509-25.658-9.1196-39.1188C45.0893,75.4481,56.2569,65.955,73.3369,59.1797c14.1689-5.629,32.2021-9.1583,53.6361-10.5108c19.712-.9788,39.464.7987,58.685,5.2811l21.021-32.202c-11.576-3.2658-23.364-5.7276-35.28-7.3679-15.471-2.1911-31.118-2.8598-46.719-1.9965-25.2594,1.5972-47.0409,5.9638-64.752,13.074C34.0633,35.6593,15.9915,51.7217,6.24068,73.1167c-6.347262,13.8068-7.90659,29.3363-4.431,44.1293C5.22945,131.932,13.2759,145.13,24.7633,154.897c12.7329,10.822,27.5381,18.935,43.5115,23.843c15.5797,4.737,31.7502,7.252,48.0322,7.47c1.52,0,3.066,0,4.599,0c14.476-.042,28.922-1.335,43.176-3.864c14.821-2.604,29.422-6.329,43.679-11.142l12.366-4.173v-85.5546h-65.963L130.386,117.826Z",opacity:"0",filter:"url(#eSGJivPWXx47-filter)",fill:"#fff"}})])]),i("VideoGb",[i("h6",{staticClass:"skip link link--darkB",on:{click:function(e){return t.skipAnimation()}}},[t._v(" Skip Animation ")])])],1)]),i("div",{staticClass:"gx-section gx-section--one"},[i("div",{staticClass:"content"},[i("h1",{attrs:{id:"gxScrambleOne"}}),i("h4",{attrs:{id:"gxScrambleTwo"}}),i("h5",{attrs:{id:"gxScrambleThree"}},[t._v(" The ontology integrates data from multiple sources into a single ecosystem and provides analytics teams with high quality fuel. The Analytics engine offers insight advantage through early trend detection. The Visualisation layer offers beautifully engineered dashboards with real-time simulation. ")]),i("h5",{attrs:{id:"gxScrambleFour"}},[t._v("Let’s see what this thing can do.")]),i("button",{staticClass:"btn btn--primary btn--primary--darkB",attrs:{id:"gxScrambleFive"},on:{click:function(e){return t.playVideo()}}},[t._v(" Watch the video ")])])])],1)},B=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"VideoBg"},[n("video",{ref:"video",attrs:{autoplay:"",playsinline:""},domProps:{muted:t.muted}},[n("source",{attrs:{src:i(9800)}})]),n("div",{staticClass:"VideoBg__content"},[t._t("default")],2)])},q=[],M={props:{muted:{type:Boolean,default:!0}},data:function(){return{videoRatio:null}},mounted:function(){var t=this;this.setImageUrl(),this.setContainerHeight(),this.videoCanPlay()&&(this.$refs.video.oncanplay=function(){t.$refs.video&&(t.videoRatio=t.$refs.video.videoWidth/t.$refs.video.videoHeight,t.setVideoSize(),t.$refs.video.style.visibility="visible")}),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.setContainerHeight(),this.videoCanPlay()&&this.setVideoSize()},videoCanPlay:function(){return!!this.$refs.video.canPlayType},setImageUrl:function(){this.img&&(this.$el.style.backgroundImage="url(".concat(this.img,")"))},setContainerHeight:function(){this.$el.style.height="".concat(window.innerHeight,"px")},setVideoSize:function(){var t,e,i=this.$el.offsetWidth/this.$el.offsetHeight;i>this.videoRatio?t=this.$el.offsetWidth:e=this.$el.offsetHeight,this.$refs.video.style.width=t?"".concat(t,"px"):"auto",this.$refs.video.style.height=e?"".concat(e,"px"):"auto"}}},H=M,W=(0,h.Z)(H,O,q,!1,null,null,null),X=W.exports,D=i(2932),F=i(7215),G={components:{VideoGb:X},data:function(){return{isVideoPlaying:!0}},methods:{skipAnimation:function(){this.isVideoPlaying=!this.isVideoPlaying},scrambleText:function(){var t=D.p8.timeline({defaults:{duration:1,ease:"none"}});t.to("#gxScrambleOne",{duration:.5,scrambleText:{text:"Your ultimate data platform.",chars:"lowerCase",revealDelay:0,tweenLength:!1}}).to("#gxScrambleTwo",{duration:.5,scrambleText:{text:"AI-driven Smart Data Platform turning data into truth.",chars:"lowerCase",revealDelay:.5,tweenLength:!1}}).to("#gxScrambleThree",{duration:.5,opacity:1}).to("#gxScrambleFour",{duration:.5,opacity:1}).to("#gxScrambleFive",{duration:.5,opacity:1})},allowScroll:function(){document.body.classList.toggle("scrollLocked")},hasVideoStopped:function(){return!this.isVideoPlaying}},mounted:function(){var t=this;D.p8.registerPlugin(F.A),document.body.classList.add("scrollLocked");var e=this.$children[0].$refs.video;e.addEventListener("ended",(function(){t.isVideoPlaying=!t.isVideoPlaying}))},watch:{isVideoPlaying:function(){this.scrambleText(),this.allowScroll()}}},z=G,J=(0,h.Z)(z,E,B,!1,null,null,null),j=J.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gx-section gx-section--two"},[n("h3",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}]}),n("div",{staticClass:"videoAnimation"},[n("img",{attrs:{src:i(3620),alt:""}}),n("video",{ref:"video",staticClass:"videoOne",attrs:{autoplay:"",playsinline:"",muted:"muted"},domProps:{muted:!0}},[n("source",{attrs:{src:i(7767)}})]),n("video",{ref:"video",staticClass:"videoTwo",attrs:{autoplay:"",playsinline:"",muted:"muted"},domProps:{muted:!0}},[n("source",{attrs:{src:i(5297)}})])])])},I=[],R=i(7359),U={data:function(){return{isVisible:!1}},methods:{textAnimation:function(){D.p8.registerPlugin(F.A),D.p8.registerPlugin(R.i);var t=document.getElementsByClassName("gx-section--two")[0],e=t.querySelectorAll("h3")[0],i=t.querySelectorAll(".videoOne")[0],n=t.querySelectorAll(".videoTwo")[0],o=i.duration,a=n.duration,r=D.p8.timeline({defaults:{duration:10},scrollTrigger:{trigger:t,pin:!0,start:"top top",stop:"bottom bottom",scrub:!0,pinSpacing:!0}});r.to(e,{duration:5,scrambleText:{text:"Confidence and sophistication in decision making",chars:"lowerCase",revealDelay:0,tweenLength:!1},opacity:1}).to(i,{duration:1,opacity:1}).to(i,{duration:3*o,currentTime:o,overwite:!0,pause:!0}).to(e,{duration:5,scrambleText:{text:"Internal and external data sources connected.",chars:"lowerCase",revealDelay:0,tweenLength:!1}}).to(n,{duration:1,opacity:1}).to(n,{duration:3*a,currentTime:a,overwite:!0,pause:!0}).to(e,{opacity:0,duration:1})},visibilityChanged:function(t){this.isVisible=t,this.isVisible&&this.textAnimation()}},mounted:function(){}},Q=U,Y=(0,h.Z)(Q,N,I,!1,null,null,null),K=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],staticClass:"gx-section gx-section--three"},[t._m(0),n("div",{staticClass:"ipad"},[n("img",{attrs:{src:i(3620),alt:""}}),n("video",{ref:"video",attrs:{id:"videoOne",autoplay:"",playsinline:"",muted:"muted"},domProps:{muted:!0}},[n("source",{attrs:{src:i(8750)}})]),n("video",{ref:"video",attrs:{id:"videoTwo",autoplay:"",playsinline:"",muted:"muted"},domProps:{muted:!0}},[n("source",{attrs:{src:i(7767)}})]),n("video",{ref:"video",attrs:{id:"videoThree",autoplay:"",playsinline:"",muted:"muted"},domProps:{muted:!0}},[n("source",{attrs:{src:i(455)}})])])])},et=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"left-text"},[i("h3",{attrs:{id:"leftTitle"}}),i("div",{staticClass:"copy",attrs:{id:"leftCopy"}},[i("h5"),i("h5"),i("a",{staticClass:"btn btn--primary btn--primary--darkB",attrs:{href:"#"}},[t._v("Find out how")])])]),i("div",{staticClass:"right-text"},[i("h3",{attrs:{id:"rightTitle"}}),i("div",{staticClass:"copy",attrs:{id:"rightCopy"}},[i("h5"),i("h5"),i("h5"),i("a",{staticClass:"btn btn--primary btn--primary--darkB",attrs:{href:"#"}},[t._v("Find out how")])])])])}],it=i(3414),nt={data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t){this.isVisible=t,this.isVisible&&(console.log("is visible"),this.animations())},toggleVideo:function(t,e){var i=document.getElementById(t);return function(){var t=R.i.getById("ipadsAnimation");t&&(e&&t.direction>0||!e&&t.direction<0?i.play():i.pause())}},animations:function(){D.p8.registerPlugin(R.i,it.z,F.A);var t=document.getElementsByClassName("gx-section--three")[0],e=t.querySelectorAll("#leftTitle"),i=t.querySelectorAll("#leftCopy"),n=t.querySelectorAll("#rightTitle"),o=t.querySelectorAll("#rightCopy"),a=t.querySelectorAll("h5")[0],r=t.querySelectorAll("h5")[1],s=t.querySelectorAll("a")[0],l=t.querySelectorAll("a")[1],c=t.querySelectorAll("h5")[2],u=t.querySelectorAll("h5")[3],d=t.querySelectorAll("h5")[4],h=t.querySelectorAll(".ipad")[0],v=h.querySelectorAll("#videoOne"),m=h.querySelectorAll("#videoTwo"),g=h.querySelectorAll("#videoThree"),f=D.p8.timeline({scrollTrigger:{trigger:t,pin:!0,start:"top top",end:"+=3000",scrub:!0,pinSpacing:!0,id:"ipadsAnimation"}});window.innerWidth>768?f.to(h,{transform:"translateX(30vw)",opacity:1,duration:1}).to(v,{opacity:1,duration:.5}).call(this.toggleVideo("videoOne",!0)).to(e,{opacity:1,duration:.5,scrambleText:{text:"Early Warning Signals and Trend Detections",chars:"lowerCase",revealDelay:0,tweenLength:!1}}).to(i,{opacity:1,duration:1}).to(a,{duration:.5,text:"Analytics delivering signal not noise with sources that work in the future not just the past."}).to(r,{duration:.5,text:"Constantly fine-tuned to find signals relevant in the current moment."}).to(s,{opacity:1,duration:.5}).to(i,{opacity:0,duration:1,delay:3}).to(a,{duration:0,text:""}).to(r,{duration:0,text:""}).to(e,{opacity:0,duration:1}).to(h,{transform:"translateX(-30vw)",duration:1}).to(v,{opacity:0,duration:.5}).call(this.toggleVideo("videoOne",!1)).to(m,{opacity:1,duration:.5}).call(this.toggleVideo("videoTwo",!0)).to(n,{duration:1,scrambleText:{text:"Automated Credit Modelling",chars:"lowerCase",revealDelay:0,tweenLength:!1}}).to(o,{opacity:1,duration:1}).to(c,{duration:.5,text:"Tailored digitalization model to forecast client’s financials."}).to(u,{duration:.5,text:"Peer benchmarking."}).to(d,{duration:.5,text:"Making excel redundant."}).to(l,{opacity:1,duration:.5}).to(o,{opacity:0,duration:1,delay:3}).to(c,{duration:0,text:""}).to(u,{duration:0,text:""}).to(d,{duration:0,text:""}).to(n,{opacity:0,duration:1}).to(h,{transform:"translateX(-30vw)",duration:1}).to(h,{transform:"translateX(30vw)",duration:1}).to(m,{opacity:0,duration:.5}).call(this.toggleVideo("videoTwo",!1)).to(g,{opacity:1,duration:.5}).call(this.toggleVideo("videoThree",!0)).to(e,{opacity:1,duration:.5,scrambleText:{text:"Predictive Analytics with Real Time Simulation",chars:"lowerCase",revealDelay:0,tweenLength:!1}}).to(i,{opacity:1,duration:1}).to(a,{duration:.5,text:" It is constantly fine tuning to find what is relevant in the moment, built for you."}).to(r,{duration:.5,text:"Constantly fine-tuned to find signals relevant in the current moment."}).to(s,{opacity:1,duration:.5}):f.to(h,{transform:"translateX(0)",opacity:1,duration:1}).to(v,{opacity:1,duration:.5}).call(this.toggleVideo("videoOne",!0)).to(e,{opacity:1,duration:.5,scrambleText:{text:"Early Warning Signals and Trend Detections",chars:"lowerCase",revealDelay:0,tweenLength:!1}}).to(i,{opacity:1,duration:1}).to(a,{duration:.5,text:"Analytics delivering signal not noise with sources that work in the future not just the past."}).to(r,{duration:.5,text:"Constantly fine-tuned to find signals relevant in the current moment."}).to(s,{opacity:1,duration:.5}).to(i,{opacity:0,duration:1,delay:3}).to(a,{duration:0,text:""}).to(r,{duration:0,text:""}).to(e,{opacity:0,duration:1}).to(h,{transform:"translateX(0)",duration:1}).to(v,{opacity:0,duration:.5}).call(this.toggleVideo("videoOne",!1)).to(m,{opacity:1,duration:.5}).call(this.toggleVideo("videoTwo",!0)).to(n,{duration:1,scrambleText:{text:"Automated Credit Modelling",chars:"lowerCase",revealDelay:0,tweenLength:!1}}).to(o,{opacity:1,duration:1}).to(c,{duration:.5,text:"Tailored digitalization model to forecast client’s financials."}).to(u,{duration:.5,text:"Peer benchmarking."}).to(d,{duration:.5,text:"Making excel redundant."}).to(l,{opacity:1,duration:.5}).to(o,{opacity:0,duration:1,delay:3}).to(c,{duration:0,text:""}).to(u,{duration:0,text:""}).to(d,{duration:0,text:""}).to(n,{opacity:0,duration:1}).to(h,{transform:"translateX(0)",duration:1}).to(h,{transform:"translateX(0)",duration:1}).to(m,{opacity:0,duration:.5}).call(this.toggleVideo("videoTwo",!1)).to(g,{opacity:1,duration:.5}).call(this.toggleVideo("videoThree",!0)).to(e,{opacity:1,duration:.5,scrambleText:{text:"Predictive Analytics with Real Time Simulation",chars:"lowerCase",revealDelay:0,tweenLength:!1}}).to(i,{opacity:1,duration:1}).to(a,{duration:.5,text:" It is constantly fine tuning to find what is relevant in the moment, built for you."}).to(r,{duration:.5,text:"Constantly fine-tuned to find signals relevant in the current moment."}).to(s,{opacity:1,duration:.5})}}},ot=nt,at=(0,h.Z)(ot,tt,et,!1,null,null,null),rt=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gx-section gx-section--six VideoBg"},[n("video",{ref:"video",staticClass:"animatedVideo",attrs:{playsinline:""},domProps:{muted:t.muted}},[n("source",{attrs:{src:i(6225)}})]),t._m(0)])},lt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"VideoBg__content"},[i("h3",[t._v("Ontology connecting data into a single data ecosystem")]),i("p",[t._v("Making your data more aware and turning it into truth.")]),i("div",{staticClass:"button-container"},[i("a",{staticClass:"btn btn--primary btn--primary--darkB",attrs:{href:"#"}},[t._v("Find out How")])])])}],ct={props:{muted:{type:Boolean,default:!0}},data:function(){return{videoRatio:null,videoDuration:null,isVisible:!1}},mounted:function(){var t=this,e=document.querySelectorAll(".gx-section--six h3")[0],i=this;function n(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}this.setContainerHeight(),this.videoCanPlay()&&(this.$refs.video.oncanplay=function(){t.videoDuration=t.$refs.video.duration,t.$refs.video&&(t.$refs.video.videoWidth,t.$refs.video.videoHeight,t.setVideoSize(),t.$refs.video.style.visibility="visible")}),window.addEventListener("resize",this.resize);var o=!0;function a(){D.ZP.registerPlugin(R.Z);var t=document.querySelectorAll(".gx-section--six h3"),e=document.querySelectorAll(".gx-section--six p"),n=document.querySelectorAll(".gx-section--six .button-container"),o=D.ZP.timeline({defaults:{duration:10},scrollTrigger:{trigger:".gx-section--six",pin:!0,start:"top top",end:"bottom top",scrub:!0}});o.fromTo(t,{duration:1,opacity:0},{duration:1,opacity:1}).to(i.$refs.video,{duration:40,currentTime:10.5,overwrite:!0,pause:!0}).to(t,{duration:1,opacity:0,width:"50%"}).to(t,{duration:1,width:"80%",scrambleText:{text:"",chars:"lowerCase"}}).to(t,{duration:2,opacity:1,delay:1}).to(t,{duration:2,scrambleText:{text:"Pipeline-driven Architecture enabled by human supervised algorithms",chars:"lowerCase",revealDelay:0,tweenLength:!1}}).to(e,{duration:2,opacity:1}).to(n,{delay:2,duration:2,opacity:1}).to({},{duration:5})}window.addEventListener("scroll",(function(){n(e)&&o&&(o=!o,a())}))},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.setContainerHeight(),this.videoCanPlay()&&this.setVideoSize()},videoCanPlay:function(){return!!this.$refs.video.canPlayType},setContainerHeight:function(){this.$el.style.height="".concat(window.innerHeight,"px")},setVideoSize:function(){var t,e,i=this.$el.offsetWidth/this.$el.offsetHeight;i>this.videoRatio?t=this.$el.offsetWidth:e=this.$el.offsetHeight,this.$refs.video.style.width=t?"".concat(t,"px"):"auto",this.$refs.video.style.height=e?"".concat(e,"px"):"auto"},visibilityChanged:function(t){this.isVisible=t,this.videoAnimation()}}},ut=ct,dt=(0,h.Z)(ut,st,lt,!1,null,null,null),ht=dt.exports,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gx-section gx-section--seven"},[i("div",{staticClass:"bg-mobile"}),i("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],staticClass:"title"},[i("h3",[t._v("Disrupting the Financial Services Industry")])]),i("TransitionGroup",{staticClass:"grid-container",attrs:{tag:"div"}},t._l(t.cells,(function(t,e){return i("gxCell",{key:e,attrs:{transition:"fade",symbolBefore:t.symbolBefore,title:t.title,symbolAfter:t.symbolAfter,description:t.description,postTitle:t.postTitle,subTitle:t.subTitle}})})),1)],1)},mt=[],gt=(i(1539),i(4747),i(6977),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"cell"},[i("div",{staticClass:"title"},[i("h1",[i("span",[t._v(t._s(t.subTitle)+" ")]),t._v(t._s(t.symbolBefore)),i("span",{staticClass:"number"},[t._v(t._s(t.title))]),t._v(t._s(t.symbolAfter)),i("span",[t._v(" "+t._s(t.postTitle))])])]),i("div",{staticClass:"content"},[i("p",[t._v(t._s(t.description))])])])}),ft=[],pt={props:{title:{type:String,required:!0},symbolBefore:{type:String},symbolAfter:{type:String},subTitle:{type:String},postTitle:{type:String},description:{type:String,required:!0}},data:function(){return{}}},yt=pt,xt=(0,h.Z)(yt,gt,ft,!1,null,null,null),bt=xt.exports,wt={components:{gxCell:bt},data:function(){return{cells:[{title:"10",symbolBefore:"x",symbolAfter:null,description:"Predictive power in generating risk insights and signals",subTitle:null,postTitle:null},{title:"100",symbolBefore:null,symbolAfter:"%",description:"Data accuracy guaranteed across structured and unstructured sources",subTitle:"Up to",postTitle:null},{title:"90",symbolBefore:null,symbolAfter:"%",description:"Automation in engineering of unstructured data",subTitle:null,postTitle:null},{title:"100",symbolBefore:null,symbolAfter:"%",description:"GX DataFactory with human-in-the-loop engineering data employing reusable tools & repeatable processes",subTitle:null,postTitle:"algorithmic"},{title:"100",symbolBefore:null,symbolAfter:"%",description:"Enterprise data model ontology for internal & external data. All Data in One Model. One Model for All Data.",subTitle:null,postTitle:"connected"},{title:"95",symbolBefore:null,symbolAfter:"%",description:"Accuracy of financial spreading analysis from classifiers",subTitle:null,postTitle:null},{title:"50",symbolBefore:"~ ",symbolAfter:"%",description:"Reduction in data transformation timeline",subTitle:null,postTitle:null},{title:"60",symbolBefore:null,symbolAfter:"%",description:"Data available at sector and sub-segment level for analysis",subTitle:null,postTitle:"more"}],isVisible:!1}},mounted:function(){},methods:{visibilityChanged:function(t){this.isVisible=t;var e=document.getElementsByClassName("cell");this.isVisible&&this.onEnter(e)},onEnter:function(t){var e=this;D.ZP.registerPlugin(R.Z);D.ZP.timeline({defaults:{duration:10},scrollTrigger:{trigger:".gx-section--seven",pin:".bg-mobile",start:"top top",end:"bottom bottom",scrub:!0}});t.forEach((function(t,i){var n={val:0},o=t.querySelectorAll("h1 .number"),a=t.querySelectorAll("p");D.ZP.to(t,{duration:.2,opacity:1,scale:1,delay:.15*i}),D.ZP.to(a,{duration:.3,opacity:1,scale:1,delay:.25*i}),D.ZP.to(n,{val:e.cells[i].title,duration:2,onUpdate:function(){o[0].innerHTML=n.val.toFixed(0)},delay:.15*i})}))}}},Ct=wt,_t=(0,h.Z)(Ct,vt,mt,!1,null,null,null),St=_t.exports,Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gx-section gx-section--eight"},[i("div",{staticClass:"container"},[i("h2",[t._v("Our Thinking")]),i("VueSlickCarousel",t._b({attrs:{arrows:!1,dots:!1}},"VueSlickCarousel",t.settings,!1),[i("BlogPost",{attrs:{tagName:"tag name",date:"4 June 2022",content:"Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. ",link:"#",source:"social-image.jpg"}}),i("BlogPost",{attrs:{tagName:"tag name",date:"4 June 2022",content:"Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. ",link:"#",source:"social-image.jpg"}}),i("BlogPost",{attrs:{tagName:"tag name",date:"4 June 2022",content:"Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. ",link:"#",source:"social-image.jpg"}}),i("BlogPost",{attrs:{tagName:"tag name",date:"4 June 2022",content:"Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. ",link:"#",source:"social-image.jpg"}})],1)],1)])},Pt=[],kt=i(9421),At=i.n(kt),Zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"slide-container"},[i("div",{staticClass:"slide",style:"background-image: url("+t.publicPath+"/static/assets/imgs/"+t.source+")"},[i("div",{staticClass:"header"},[i("h6",{staticClass:"tag"},[t._v(t._s(t.tagName))]),i("h6",{staticClass:"date"},[t._v(t._s(t.date))])]),i("div",{staticClass:"body"},[i("h6",[t._v(t._s(t.content))]),i("a",{staticClass:"link link--darkB",attrs:{href:t.link}},[t._v("Read More")])])])])},$t=[],Vt={props:{tagName:{type:String,required:!0},date:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!0},source:{type:String,required:!0}},data:function(){return{publicPath:"/gx/"}}},Lt=Vt,Et=(0,h.Z)(Lt,Zt,$t,!1,null,null,null),Bt=Et.exports,Ot={components:{VueSlickCarousel:At(),BlogPost:Bt},data:function(){return{settings:{slidesToShow:3,infinite:!1,responsive:[{breakpoint:1441,settings:{slidesToShow:2.3}},{breakpoint:900,settings:{slidesToShow:1.1}}]}}},mounted:function(){},methods:{}},qt=Ot,Mt=(0,h.Z)(qt,Tt,Pt,!1,null,null,null),Ht=Mt.exports,Wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Xt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer-container"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:i(8755)}})]),n("div",{staticClass:"flex-container"},[n("div",{staticClass:"nav-container"},[n("nav",[n("h6",[t._v("Quick Links")]),n("ul",[n("li",[t._v("Page name One")]),n("li",[t._v("Page name Two")]),n("li",[t._v("Page name Three")]),n("li",[t._v("Page name Four")]),n("li",[t._v("Page name Five")]),n("li",[t._v("Page name Six")])])]),n("nav",[n("h6",[t._v("Quick Links")]),n("ul",[n("li",[t._v("Page name One")]),n("li",[t._v("Page name Two")]),n("li",[t._v("Page name Three")]),n("li",[t._v("Page name Four")]),n("li",[t._v("Page name Five")])])]),n("nav",[n("h6",[t._v("Quick Links")]),n("ul",[n("li",[t._v("Page name One")]),n("li",[t._v("Page name Two")]),n("li",[t._v("Page name Three")]),n("li",[t._v("Page name Four")])])])]),n("div",{staticClass:"subs"},[n("h4",[t._v("Sign up to our newsletter")]),n("form",{attrs:{action:""}},[n("div",{staticClass:"input-group"},[n("input",{attrs:{type:"email",placeholder:"Your email address"}}),n("input",{attrs:{type:"submit"}})])])])]),n("hr"),n("div",{staticClass:"copy"},[n("p",[t._v("© 2022 Galytix. All rights reserved.")])])])])}],Dt={name:"gxFooter"},Ft=Dt,Gt=(0,h.Z)(Ft,Wt,Xt,!1,null,null,null),zt=Gt.exports,Jt={components:{gxHome:j,gxSectionTwo:K,gxIpadsTwo:rt,gxSectionSix:ht,gxSectionSeven:St,gxSectionHeight:Ht,gxFooter:zt},mounted:function(){}},jt=Jt,Nt=(0,h.Z)(jt,V,L,!1,null,null,null),It=Nt.exports,Rt={name:"App",components:{gxHeader:S,gxLoader:$,gxContent:It},data:function(){return{isLoaded:!1,publicPath:"/gx/"}},mounted:function(){var t=this;this.axios.get(this.publicPath+"/static/assets/videos/home.mp4").then((function(){document.getElementsByClassName("gx-loader")[0].classList.add("complete"),setTimeout((function(){t.isLoaded=!0}),100)}))}},Ut=Rt,Qt=(0,h.Z)(Ut,o,a,!1,null,null,null),Yt=Qt.exports,Kt=i(6166),te=i.n(Kt),ee=i(6762),ie=i(6713),ne=i(7035),oe=i.n(ne),ae=i(886),re=i.n(ae);n["default"].config.productionTip=!1,n["default"].use(ee.Z,te()),n["default"].use(ie.ZP),n["default"].use(oe(),{vertical:!0,globalSceneOptions:{triggerHook:"onLeave",duration:"100%"},loglevel:2,refreshInterval:100}),n["default"].use(re()),new n["default"]({render:function(t){return t(Yt)}}).$mount("#app")},8755:function(t,e,i){t.exports=i.p+"assets/img/gx-logo-full.905a0d44.svg"},3620:function(t,e,i){t.exports=i.p+"assets/img/gx-tablet.38a2f6f3.svg"},9800:function(t,e,i){t.exports=i.p+"assets/media/home.a0e0f7fd.mp4"},5297:function(t,e,i){t.exports=i.p+"assets/media/section1-2.a23bb655.mp4"},7767:function(t,e,i){t.exports=i.p+"assets/media/section1.ee54fe69.mp4"},8750:function(t,e,i){t.exports=i.p+"assets/media/section2.4552db9f.mp4"},455:function(t,e,i){t.exports=i.p+"assets/media/section4.3bc7d3e4.mp4"},6225:function(t,e,i){t.exports=i.p+"assets/media/section6.8174685d.mp4"}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=t,function(){i.amdO={}}(),function(){var t=[];i.O=function(e,n,o,a){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],a=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(s=!1,a<r&&(r=a));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,o,a]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){i.p="/gx/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,r=n[0],s=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var u=l(i)}for(e&&e(n);c<r.length;c++)a=r[c],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(u)},n=self["webpackChunkvue"]=self["webpackChunkvue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(7667)}));n=i.O(n)})();
//# sourceMappingURL=app-legacy.7b439a0f.js.map