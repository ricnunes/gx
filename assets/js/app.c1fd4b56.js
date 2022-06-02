(function(){"use strict";var e={6802:function(e,t,i){var s=i(8935),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("gxHeader"),i("gxLoader",{directives:[{name:"show",rawName:"v-show",value:!e.isLoaded,expression:"!isLoaded"}]}),e.isLoaded?i("gxContent"):e._e(),i("gxFooter")],1)},a=[],l=i(6166),o=i.n(l),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",[e._m(0),i("gxCommerceBar"),e._m(1),i("gxMenu"),e._m(2)],1)},d=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hamburguer"},[i("span"),i("span"),i("span")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:i(8755)}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"search"},[i("span")])}],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menu"},[i("ul",e._l(e.menus,(function(t){return i("li",{key:t.id},[i("a",{attrs:{href:t.link}},[e._v(e._s(t.name))])])})),0)])},u=[],h={name:"gxHeader",data(){return{menus:[{id:0,link:"#banking",name:"Banking"},{id:1,link:"#insurance",name:"Insurance"},{id:2,link:"#gx-tech",name:"GX Tech"}]}}},v=h,m=i(3736),g=(0,m.Z)(v,c,u,!1,null,null,null),f=g.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menu"},[i("ul",e._l(e.menus,(function(t){return i("li",{key:t.id},[i("a",{attrs:{href:t.link}},[e._v(e._s(t.name))])])})),0)])},y=[],b={name:"gxMenu",data(){return{menus:[{id:0,link:"#about",name:"About"},{id:1,link:"#news",name:"News"},{id:2,link:"#contact",name:"Contact us"}]}}},x=b,_=(0,m.Z)(x,p,y,!1,null,null,null),C=_.exports,w={components:{gxCommerceBar:f,gxMenu:C},name:"gxHeader"},S=w,P=(0,m.Z)(S,r,d,!1,null,null,null),k=P.exports,T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"gx-loader"},[i("lottie-vue-player",{staticStyle:{width:"110px",height:"100vh"},attrs:{src:e.publicPath+"/static/assets/imgs/lf30_dlviouvg.json",backgroundColor:e.options.backgroundColor,loop:"",autoplay:""}})],1)},$=[],V={name:"gxLoader",data(){return{options:{backgroundColor:"#000"},publicPath:"/gx/"}}},Z=V,L=(0,m.Z)(Z,T,$,!1,null,null,null),A=L.exports,E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sections"},[i("gxHome"),i("gxSectionTwo"),i("gxSectionThree"),i("gxSectionFour"),i("gxSectionFive"),i("gxSectionSix"),i("gxSectionSeven"),i("gxSectionHeight")],1)},B=[],F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("transition",[e.hasVideoStopped()?e._e():i("div",[i("div",{staticClass:"gx-logo"},[i("svg",{attrs:{id:"eSGJivPWXx41",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1112 201","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision"}},[i("defs",[i("filter",{attrs:{id:"eSGJivPWXx43-filter",x:"-150%",width:"400%",y:"-150%",height:"400%"}},[i("feComponentTransfer",{attrs:{id:"eSGJivPWXx43-filter-opacity-0",result:"result"}},[i("feFuncA",{attrs:{id:"eSGJivPWXx43-filter-opacity-0-A",type:"table",tableValues:"0 1"}})],1)],1),i("filter",{attrs:{id:"eSGJivPWXx47-filter",x:"-150%",width:"400%",y:"-150%",height:"400%"}},[i("feComponentTransfer",{attrs:{id:"eSGJivPWXx47-filter-opacity-0",result:"result"}},[i("feFuncA",{attrs:{id:"eSGJivPWXx47-filter-opacity-0-A",type:"table",tableValues:"0 1"}})],1)],1)]),i("path",{attrs:{id:"eSGJivPWXx42",d:"M333.884,63.0048c-18.2-19.1151-25.903-27.7195-44.065-46.8476h-49.475c26.444,27.7711,42.378,45.0829,68.822,72.8025c8.244-8.656,16.483-17.3076,24.718-25.9549Z",opacity:"0",fill:"#fff"}}),i("path",{attrs:{id:"eSGJivPWXx43",d:"M659.63,85v-58.77h-19.71v-7.56h47.61v7.56h-19.71v58.77h-8.19Zm36.422,0v-66.33h7.92v26.73l7.2-7.47h17.37l9.36,9.45v37.62h-7.92v-35.64l-4.77-5.13h-11.97l-9.27,9.45v31.32h-7.92Zm56.162-52.2v-10.62h7.92v10.62h-7.92Zm0,52.2v-47.07h7.92v47.07h-7.92Zm22.588,0v-47.07h7.92v8.46l8.19-8.46h17.37l9.36,9.45v37.62h-7.92v-35.64l-4.77-5.13h-11.97l-10.26,10.44v30.33h-7.92Zm57.129,0v-66.33h7.92v36.09h1.98l18.9-16.83h10.44l-20.34,19.08L872.521,85h-9.54l-17.64-22.86-5.49,5.13v17.73h-7.92Zm69.268,0v-66.33h36l13.77,13.95v38.43L937.199,85h-36Zm8.19-7.29h24.12l9.27-9.45v-32.85l-9.27-9.45h-24.12v51.75ZM969.336,85l-9.36-9.45v-10.71l9.36-9.45h23.94v-5.85l-4.86-4.95h-22.32v-6.66h25.74l9.364,9.45v37.62h-7.924v-7.29L985.986,85h-16.65Zm3.51-6.3h11.16l9.27-9.18v-7.92l-20.43.09-4.95,4.86v7.2l4.95,4.95ZM1024.35,85l-8.28-8.19v-32.58h-4.95v-6.3h5.13l1.98-12.06h5.76v12.06h9.99v6.3h-9.99v29.79l4.23,4.41h7.83v6.57h-11.7Zm26.46,0l-9.36-9.45v-10.71l9.36-9.45h23.94v-5.85l-4.86-4.95h-22.32v-6.66h25.74l9.36,9.45v37.62h-7.92v-7.29L1067.46,85h-16.65Zm3.51-6.3h11.16l9.27-9.18v-7.92l-20.43.09-4.95,4.86v7.2l4.95,4.95ZM646.58,183v-66.33h36l13.77,13.95v38.43L682.58,183h-36Zm8.19-7.29h24.12l9.27-9.45v-32.85l-9.27-9.45h-24.12v51.75Zm54.817-44.91v-10.62h7.92v10.62h-7.92Zm0,52.2v-47.07h7.92v47.07h-7.92Zm22.948,0v-40.77h-4.86v-6.3h4.86v-10.98l8.28-8.28h11.7v6.57h-7.83l-4.23,4.41v8.28h10.08v6.3h-10.08v40.77h-7.92Zm27.334,0v-40.77h-4.86v-6.3h4.86v-10.98l8.28-8.28h11.7v6.57h-7.83l-4.23,4.41v8.28h10.08v6.3h-10.08v40.77h-7.92Zm35.344,0l-9.45-9.45v-28.17l9.45-9.45h20.97l9.45,9.45v17.01h-31.95v9.09l4.95,4.95h26.19v6.57h-29.61Zm-1.53-26.91h24.03v-8.91l-4.95-4.95h-14.13l-4.95,4.95v8.91ZM839.314,183v-47.07h7.92v8.46l8.19-8.46h12.06v7.92h-11.7l-8.55,8.82v30.33h-7.92Zm43.965,0l-9.45-9.45v-28.17l9.45-9.45h20.97l9.45,9.45v17.01h-31.95v9.09l4.95,4.95h26.19v6.57h-29.61Zm-1.53-26.91h24.03v-8.91l-4.95-4.95h-14.13l-4.95,4.95v8.91ZM927.38,183v-47.07h7.92v8.46l8.19-8.46h17.37l9.36,9.45v37.62h-7.92v-35.64l-4.77-5.13h-11.97L935.3,152.67v30.33h-7.92Zm65.949,0l-8.28-8.19v-32.58h-4.95v-6.3h5.13l1.98-12.06h5.76v12.06h9.991v6.3h-9.991v29.79l4.23,4.41h7.831v6.57h-11.701Zm21.331,0v-66.33h7.92v66.33h-7.92Zm30.59,16.83l8.46-20.07h-3.33l-19.35-43.83h8.73l15.12,36h2.07l13.95-36h8.64l-26.28,63.9h-8.01Z",opacity:"0",filter:"url(#eSGJivPWXx43-filter)",fill:"#fff"}}),i("path",{attrs:{id:"eSGJivPWXx44",d:"M546.398,10v190.636",opacity:"0",fill:"none",stroke:"#fff","stroke-width":"3"}}),i("path",{attrs:{id:"eSGJivPWXx45",d:"M344.408,73.5283L319.69,99.4702L240.344,182.783h49.436l54.628-57.358l24.705-25.9548l79.346-83.3003h-49.436L344.408,73.5283Z",opacity:"0",fill:"#fff"}}),i("path",{attrs:{id:"eSGJivPWXx46",d:"M356.375,137.198l42.648,45.586h49.437l-67.135-71.296-24.95,25.71Z",opacity:"0",fill:"#fff"}}),i("path",{attrs:{id:"eSGJivPWXx47",d:"M130.386,117.826h53.443v22.683c-22.812,6.441-46.075,9.725-66.684,9.287-28.9436-.682-52.0647-8.192-68.7067-22.477-11.5928-9.944-15.2509-25.658-9.1196-39.1188C45.0893,75.4481,56.2569,65.955,73.3369,59.1797c14.1689-5.629,32.2021-9.1583,53.6361-10.5108c19.712-.9788,39.464.7987,58.685,5.2811l21.021-32.202c-11.576-3.2658-23.364-5.7276-35.28-7.3679-15.471-2.1911-31.118-2.8598-46.719-1.9965-25.2594,1.5972-47.0409,5.9638-64.752,13.074C34.0633,35.6593,15.9915,51.7217,6.24068,73.1167c-6.347262,13.8068-7.90659,29.3363-4.431,44.1293C5.22945,131.932,13.2759,145.13,24.7633,154.897c12.7329,10.822,27.5381,18.935,43.5115,23.843c15.5797,4.737,31.7502,7.252,48.0322,7.47c1.52,0,3.066,0,4.599,0c14.476-.042,28.922-1.335,43.176-3.864c14.821-2.604,29.422-6.329,43.679-11.142l12.366-4.173v-85.5546h-65.963L130.386,117.826Z",opacity:"0",filter:"url(#eSGJivPWXx47-filter)",fill:"#fff"}})])]),i("VideoGb",[i("h6",{staticClass:"skip link link--darkB",on:{click:function(t){return e.skipAnimation()}}},[e._v(" Skip Animation ")])])],1)]),i("div",{staticClass:"gx-section gx-section--one"},[i("div",{staticClass:"content"},[i("h1",{attrs:{id:"gxScrambleOne"}}),i("h4",{attrs:{id:"gxScrambleTwo"}}),i("h5",{attrs:{id:"gxScrambleThree"}},[e._v(" The ontology integrates data from multiple sources into a single ecosystem and provides analytics teams with high quality fuel. The Analytics engine offers insight advantage through early trend detection. The Visualisation layer offers beautifully engineered dashboards with real-time simulation. ")]),i("h5",{attrs:{id:"gxScrambleFour"}},[e._v("Let’s see what this thing can do.")]),i("button",{staticClass:"btn btn--primary btn--primary--darkB",attrs:{id:"gxScrambleFive"},on:{click:function(t){return e.playVideo()}}},[e._v(" Watch the video ")])])])],1)},M=[],O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"VideoBg"},[s("video",{ref:"video",attrs:{autoplay:"",playsinline:""},domProps:{muted:e.muted}},[s("source",{attrs:{src:i(9800)}})]),s("div",{staticClass:"VideoBg__content"},[e._t("default")],2)])},H=[],W={props:{muted:{type:Boolean,default:!0}},data(){return{videoRatio:null}},mounted(){this.setImageUrl(),this.setContainerHeight(),this.videoCanPlay()&&(this.$refs.video.oncanplay=()=>{this.$refs.video&&(this.videoRatio=this.$refs.video.videoWidth/this.$refs.video.videoHeight,this.setVideoSize(),this.$refs.video.style.visibility="visible")}),window.addEventListener("resize",this.resize)},beforeDestroy(){window.removeEventListener("resize",this.resize)},methods:{resize(){this.setContainerHeight(),this.videoCanPlay()&&this.setVideoSize()},videoCanPlay(){return!!this.$refs.video.canPlayType},setImageUrl(){this.img&&(this.$el.style.backgroundImage=`url(${this.img})`)},setContainerHeight(){this.$el.style.height=`${window.innerHeight}px`},setVideoSize(){var e,t,i=this.$el.offsetWidth/this.$el.offsetHeight;i>this.videoRatio?e=this.$el.offsetWidth:t=this.$el.offsetHeight,this.$refs.video.style.width=e?`${e}px`:"auto",this.$refs.video.style.height=t?`${t}px`:"auto"}}},G=W,D=(0,m.Z)(G,O,H,!1,null,null,null),J=D.exports,z=i(2932),N=i(6603),X={components:{VideoGb:J},data(){return{isVideoPlaying:!0}},methods:{skipAnimation(){this.isVideoPlaying=!this.isVideoPlaying},scrambleText(){let e=z.p8.timeline({defaults:{duration:1,ease:"none"}});e.to("#gxScrambleOne",{duration:.5,scrambleText:{text:"Your ultimate data platform.",chars:"lowerCase",revealDelay:0,tweenLength:!1}}).to("#gxScrambleTwo",{duration:.5,scrambleText:{text:"AI-driven Smart Data Platform turning data into truth.",chars:"lowerCase",revealDelay:.5,tweenLength:!1}}).to("#gxScrambleThree",{duration:.5,opacity:1}).to("#gxScrambleFour",{duration:.5,opacity:1}).to("#gxScrambleFive",{duration:.5,opacity:1})},allowScroll(){document.body.classList.toggle("scrollLocked")},hasVideoStopped(){return!this.isVideoPlaying}},mounted(){z.p8.registerPlugin(N.A),document.body.classList.add("scrollLocked");let e,t=this.$children[0].$refs.video;function i(){document.querySelectorAll("video").forEach((e=>{e.classList.contains("animatedVideo")||(s(e)?e.play():e.pause())}))}function s(e){let t=e.getBoundingClientRect();return t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)}t.addEventListener("ended",(()=>{this.isVideoPlaying=!this.isVideoPlaying})),window.addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout(i,100)})),window.addEventListener("resize",i),window.addEventListener("DOMContentLoaded",i)},watch:{isVideoPlaying(){this.scrambleText(),this.allowScroll()}}},j=X,I=(0,m.Z)(j,F,M,!1,null,null,null),q=I.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"gx-section gx-section--two"},[s("h3",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}]}),s("transition",{attrs:{name:"slide-out"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isFirstVideoplaying(),expression:"isFirstVideoplaying()"}],staticClass:"videoAnimation"},[s("img",{attrs:{src:i(3620),alt:""}}),s("video",{ref:"video",attrs:{autoplay:"",playsinline:"",muted:"muted"},domProps:{muted:!0}},[s("source",{attrs:{src:i(7767)}})])])]),s("transition",{attrs:{name:"slide-in"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isFirstVideoplaying(),expression:"!isFirstVideoplaying()"}],staticClass:"videoAnimation"},[s("img",{attrs:{src:i(3620),alt:""}}),s("video",{ref:"video",attrs:{autoplay:"",playsinline:"",muted:"muted"},domProps:{muted:!0}},[s("source",{attrs:{src:i(5297)}})])])])],1)},U=[],Q={data(){return{hasFirstVideoStopped:!1,isVisible:!1}},methods:{isFirstVideoplaying(){return this.hasFirstVideoStopped?(this.textAnimation("Internal and external data sources connected.",".gx-section--two h3"),!1):(this.textAnimation("Confidence and sophistication in decision making.",".gx-section--two h3"),!0)},textAnimation(e,t){z.p8.registerPlugin(N.A);let i=z.p8.timeline({defaults:{duration:2,ease:"none"}});i.to(t,{duration:1,scrambleText:{text:e,chars:"lowerCase",revealDelay:0,tweenLength:!1}})},visibilityChanged(e){this.isVisible=e,this.isVisible?this.textAnimation("Confidence and sophistication in decision making.",".gx-section--two h3"):(this.textAnimation("",".gx-section--two h3"),this.hasFirstVideoStopped&&(this.hasFirstVideoStopped=!1))}},mounted(){const e=document.querySelectorAll(".gx-section--two video");e[0].addEventListener("ended",(()=>{this.hasFirstVideoStopped=!0}))}},Y=Q,K=(0,m.Z)(Y,R,U,!1,null,null,null),ee=K.exports,te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"gx-section gx-section--three"},[s("div",{staticClass:"videoContainer",class:{isVisible:e.isVisible}},[s("div",{staticClass:"content",class:{isVisible:e.isVisible}},[s("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}],staticClass:"container"},[s("h3",[e._v("Early Warning Signals and Trend Detections")]),s("h5",[e._v(" Analytics delivering signal not noise with sources that work in the future not just the past. ")]),s("h5",[e._v(" Constantly fine-tuned to find signals relevant in the current moment. ")]),s("a",{staticClass:"btn btn--primary btn--primary--darkB",attrs:{href:"#"}},[e._v("Find out how")])])]),s("div",{staticClass:"videoAnimation"},[s("img",{attrs:{src:i(3620),alt:""}}),s("video",{ref:"video",attrs:{autoplay:"",playsinline:"",muted:"muted"},domProps:{muted:!0}},[s("source",{attrs:{src:i(8750)}})])])])])},ie=[],se={data(){return{isVisible:!1}},methods:{visibilityChanged(e){this.isVisible=e}}},ne=se,ae=(0,m.Z)(ne,te,ie,!1,null,null,null),le=ae.exports,oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"gx-section gx-section--four"},[s("div",{staticClass:"videoContainer",class:{isVisible:e.isVisible}},[s("div",{staticClass:"content",class:{isVisible:e.isVisible}},[s("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}],staticClass:"container"},[s("h3",[e._v("Automated Credit Modelling")]),s("h5",[e._v("Tailored digitalization model to forecast client’s financials.")]),s("h5",[e._v("Peer benchmarking.")]),s("h5",[e._v("Making excel redundant.")]),s("a",{staticClass:"btn btn--primary btn--primary--darkB",attrs:{href:"#"}},[e._v("Find out how")])])]),s("div",{staticClass:"videoAnimation"},[s("img",{attrs:{src:i(3620),alt:""}}),s("video",{ref:"video",attrs:{autoplay:"",playsinline:"",muted:"muted"},domProps:{muted:!0}},[s("source",{attrs:{src:i(455)}})])])])])},re=[],de={data(){return{isVisible:!1}},methods:{visibilityChanged(e){this.isVisible=e}}},ce=de,ue=(0,m.Z)(ce,oe,re,!1,null,null,null),he=ue.exports,ve=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"gx-section gx-section--five"},[s("div",{staticClass:"videoContainer",class:{isVisible:e.isVisible}},[s("div",{staticClass:"content",class:{isVisible:e.isVisible}},[s("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}],staticClass:"container"},[s("h3",[e._v("Predictive Analytics with Real Time Simulation")]),s("h5",[e._v(" It is constantly fine tuning to find what is relevant in the moment, built for you. ")]),s("h5",[e._v(" Constantly fine-tuned to find signals relevant in the current moment. ")]),s("a",{staticClass:"btn btn--primary btn--primary--darkB",attrs:{href:"#"}},[e._v("Find out how")])])]),s("div",{staticClass:"videoAnimation"},[s("img",{attrs:{src:i(3620),alt:""}}),s("video",{ref:"video",attrs:{autoplay:"",playsinline:"",muted:"muted"},domProps:{muted:!0}},[s("source",{attrs:{src:i(7767)}})])])])])},me=[],ge={data(){return{isVisible:!1}},methods:{visibilityChanged(e){this.isVisible=e}}},fe=ge,pe=(0,m.Z)(fe,ve,me,!1,null,null,null),ye=pe.exports,be=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"gx-section gx-section--six VideoBg"},[s("video",{ref:"video",staticClass:"animatedVideo",attrs:{playsinline:""},domProps:{muted:e.muted}},[s("source",{attrs:{src:i(6225)}})]),e._m(0)])},xe=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"VideoBg__content"},[i("h3",[e._v("Ontology connecting data into a single data ecosystem")])])}],_e={props:{muted:{type:Boolean,default:!0}},data(){return{videoRatio:null,videoDuration:null}},mounted(){this.setImageUrl(),this.setContainerHeight(),this.videoCanPlay()&&(this.$refs.video.oncanplay=()=>{this.videoDuration=this.$refs.video.duration,this.$refs.video&&(this.videoRatio=this.$refs.video.videoWidth/this.$refs.video.videoHeight,this.setVideoSize(),this.$refs.video.style.visibility="visible")}),window.addEventListener("resize",this.resize);const e=this.$scrollmagic.scene({triggerElement:".gx-section--six",offset:0}).setPin(".gx-section--six").setTween(this.$refs.video,{currentTime:this.videoDuration?this.videoDuration:"10.04",overwrite:!0,pause:!0}).addIndicators({name:"video"});this.$scrollmagic.addScene(e)},beforeDestroy(){window.removeEventListener("resize",this.resize)},methods:{resize(){this.setContainerHeight(),this.videoCanPlay()&&this.setVideoSize()},videoCanPlay(){return!!this.$refs.video.canPlayType},setImageUrl(){this.img&&(this.$el.style.backgroundImage=`url(${this.img})`)},setContainerHeight(){this.$el.style.height=`${window.innerHeight}px`},setVideoSize(){var e,t,i=this.$el.offsetWidth/this.$el.offsetHeight;i>this.videoRatio?e=this.$el.offsetWidth:t=this.$el.offsetHeight,this.$refs.video.style.width=e?`${e}px`:"auto",this.$refs.video.style.height=t?`${t}px`:"auto"}}},Ce=_e,we=(0,m.Z)(Ce,be,xe,!1,null,null,null),Se=we.exports,Pe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"gx-section gx-section--seven"},[i("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}],staticClass:"title"},[i("h3",[e._v("Disrupting the Financial Services Industry")])]),i("TransitionGroup",{staticClass:"grid-container",attrs:{tag:"div"}},e._l(e.cells,(function(e,t){return i("gxCell",{key:t,attrs:{transition:"fade",symbolBefore:e.symbolBefore,title:e.title,symbolAfter:e.symbolAfter,description:e.description,postTitle:e.postTitle,subTitle:e.subTitle}})})),1)],1)},ke=[],Te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"cell"},[i("div",{staticClass:"title"},[i("h1",[i("span",[e._v(e._s(e.subTitle)+" ")]),e._v(e._s(e.symbolBefore)),i("span",{staticClass:"number"},[e._v(e._s(e.title))]),e._v(e._s(e.symbolAfter)),i("span",[e._v(" "+e._s(e.postTitle))])])]),i("div",{staticClass:"content"},[i("p",[e._v(e._s(e.description))])])])},$e=[],Ve={props:{title:{type:String,required:!0},symbolBefore:{type:String},symbolAfter:{type:String},subTitle:{type:String},postTitle:{type:String},description:{type:String,required:!0}},data(){return{}}},Ze=Ve,Le=(0,m.Z)(Ze,Te,$e,!1,null,null,null),Ae=Le.exports,Ee={components:{gxCell:Ae},data(){return{cells:[{title:"10",symbolBefore:"x",symbolAfter:null,description:"Predictive power in generating risk insights and signals",subTitle:null,postTitle:null},{title:"100",symbolBefore:null,symbolAfter:"%",description:"Data accuracy guaranteed across structured and unstructured sources",subTitle:"Up to",postTitle:null},{title:"90",symbolBefore:null,symbolAfter:"%",description:"Automation in engineering of unstructured data",subTitle:null,postTitle:null},{title:"100",symbolBefore:null,symbolAfter:"%",description:"GX DataFactory with human-in-the-loop engineering data employing reusable tools & repeatable processes",subTitle:null,postTitle:"algorithmic"},{title:"100",symbolBefore:null,symbolAfter:"%",description:"Enterprise data model ontology for internal & external data. All Data in One Model. One Model for All Data.",subTitle:null,postTitle:"connected"},{title:"95",symbolBefore:null,symbolAfter:"%",description:"Accuracy of financial spreading analysis from classifiers",subTitle:null,postTitle:null},{title:"50",symbolBefore:"~ ",symbolAfter:"%",description:"Reduction in data transformation timeline",subTitle:null,postTitle:null},{title:"60",symbolBefore:null,symbolAfter:"%",description:"Data available at sector and sub-segment level for analysis",subTitle:null,postTitle:"more"}],isVisible:!1}},mounted(){},methods:{visibilityChanged(e){this.isVisible=e;const t=document.getElementsByClassName("cell");this.isVisible&&this.onEnter(t)},onEnter(e){e.forEach(((e,t)=>{let i={val:0},s=e.querySelectorAll("h1 .number"),n=e.querySelectorAll("p");z.ZP.to(e,{duration:.2,opacity:1,scale:1,delay:.15*t}),z.ZP.to(n,{duration:.3,opacity:1,scale:1,delay:.25*t}),z.ZP.to(i,{val:this.cells[t].title,duration:2,onUpdate:function(){s[0].innerHTML=i.val.toFixed(0)},delay:.15*t})}))}}},Be=Ee,Fe=(0,m.Z)(Be,Pe,ke,!1,null,null,null),Me=Fe.exports,Oe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"gx-section gx-section--height"},[i("div",{staticClass:"container"},[i("h2",[e._v("Our Thinking")]),i("VueSlickCarousel",e._b({attrs:{arrows:!1,dots:!1}},"VueSlickCarousel",e.settings,!1),[i("BlogPost",{attrs:{tagName:"tag name",date:"4 June 2022",content:"Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. ",link:"#",source:"social-image.jpg"}}),i("BlogPost",{attrs:{tagName:"tag name",date:"4 June 2022",content:"Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. ",link:"#",source:"social-image.jpg"}}),i("BlogPost",{attrs:{tagName:"tag name",date:"4 June 2022",content:"Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. ",link:"#",source:"social-image.jpg"}}),i("BlogPost",{attrs:{tagName:"tag name",date:"4 June 2022",content:"Lorem ipsum dolor sit amet, cu integre instructior mea, pertinacia scripserit duo ea. ",link:"#",source:"social-image.jpg"}})],1)],1)])},He=[],We=i(9421),Ge=i.n(We),De=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"slide-container"},[i("div",{staticClass:"slide"},[i("div",{staticClass:"header"},[i("h6",{staticClass:"tag"},[e._v(e._s(e.tagName))]),i("h6",{staticClass:"date"},[e._v(e._s(e.date))])]),i("div",{staticClass:"body"},[i("h6",[e._v(e._s(e.content))]),i("a",{staticClass:"link link--darkB",attrs:{href:e.link}},[e._v("Read More")])])]),i("div",{staticClass:"image"},[i("img",{attrs:{src:e.publicPath+"/static/assets/imgs/"+e.source,alt:""}})])])},Je=[],ze={props:{tagName:{type:String,required:!0},date:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!0},source:{type:String,required:!0}},data(){return{publicPath:"/gx/"}}},Ne=ze,Xe=(0,m.Z)(Ne,De,Je,!1,null,null,null),je=Xe.exports,Ie={components:{VueSlickCarousel:Ge(),BlogPost:je},data(){return{settings:{slidesToShow:2.5,infinite:!1,responsive:[{breakpoint:900,settings:{slidesToShow:1}}]}}},mounted(){},methods:{}},qe=Ie,Re=(0,m.Z)(qe,Oe,He,!1,null,null,null),Ue=Re.exports,Qe={components:{gxHome:q,gxSectionTwo:ee,gxSectionThree:le,gxSectionFour:he,gxSectionFive:ye,gxSectionSix:Se,gxSectionSeven:Me,gxSectionHeight:Ue},mounted(){}},Ye=Qe,Ke=(0,m.Z)(Ye,E,B,!1,null,null,null),et=Ke.exports,tt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},it=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",[s("div",{staticClass:"footer-container"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:i(8755)}})]),s("div",{staticClass:"flex-container"},[s("div",{staticClass:"nav-container"},[s("nav",[s("h6",[e._v("Quick Links")]),s("ul",[s("li",[e._v("Page name One")]),s("li",[e._v("Page name Two")]),s("li",[e._v("Page name Three")]),s("li",[e._v("Page name Four")]),s("li",[e._v("Page name Five")]),s("li",[e._v("Page name Six")])])]),s("nav",[s("h6",[e._v("Quick Links")]),s("ul",[s("li",[e._v("Page name One")]),s("li",[e._v("Page name Two")]),s("li",[e._v("Page name Three")]),s("li",[e._v("Page name Four")]),s("li",[e._v("Page name Five")])])]),s("nav",[s("h6",[e._v("Quick Links")]),s("ul",[s("li",[e._v("Page name One")]),s("li",[e._v("Page name Two")]),s("li",[e._v("Page name Three")]),s("li",[e._v("Page name Four")])])])]),s("div",{staticClass:"subs"},[s("h4",[e._v("Sign up to our newsletter")])])]),s("hr"),s("div",{staticClass:"copy"},[s("p",[e._v("© 2022 Galytix. All rights reserved.")])])])])}],st={name:"gxFooter"},nt=st,at=(0,m.Z)(nt,tt,it,!1,null,null,null),lt=at.exports,ot={name:"App",components:{gxHeader:k,gxLoader:A,gxContent:et,gxFooter:lt},data(){return{isLoaded:!1,publicPath:"/gx/"}},mounted(){this.axios.get(this.publicPath+"/static/assets/videos/home.mp4").then((()=>{document.getElementsByClassName("gx-loader")[0].classList.add("complete"),setTimeout((()=>{this.isLoaded=!0}),100)})),o()({method:"get",url:"/static/assets/videos/home.mp4",onDownloadProgress:function(e){let t=Math.round(100*e.loaded/e.total);100==t&&(this.isLoaded=!0)}})}},rt=ot,dt=(0,m.Z)(rt,n,a,!1,null,null,null),ct=dt.exports,ut=i(9483),ht=i(6713),vt=i(7035),mt=i.n(vt),gt=i(886),ft=i.n(gt);s["default"].config.productionTip=!1,s["default"].use(ut.Z,o()),s["default"].use(ht.ZP),s["default"].use(mt(),{vertical:!0,globalSceneOptions:{triggerHook:"onLeave",duration:"100%"},loglevel:2,refreshInterval:5}),s["default"].use(ft()),new s["default"]({render:e=>e(ct)}).$mount("#app")},8755:function(e,t,i){e.exports=i.p+"assets/img/gx-logo-full.905a0d44.svg"},3620:function(e,t,i){e.exports=i.p+"assets/img/gx-tablet.38a2f6f3.svg"},9800:function(e,t,i){e.exports=i.p+"assets/media/home.a0e0f7fd.mp4"},5297:function(e,t,i){e.exports=i.p+"assets/media/section1-2.f0bfea79.mp4"},7767:function(e,t,i){e.exports=i.p+"assets/media/section1.b04ab2e5.mp4"},8750:function(e,t,i){e.exports=i.p+"assets/media/section2.4552db9f.mp4"},455:function(e,t,i){e.exports=i.p+"assets/media/section4.3bc7d3e4.mp4"},6225:function(e,t,i){e.exports=i.p+"assets/media/section6.300f8ee1.mp4"}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var a=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=e,function(){i.amdO={}}(),function(){var e=[];i.O=function(t,s,n,a){if(!s){var l=1/0;for(c=0;c<e.length;c++){s=e[c][0],n=e[c][1],a=e[c][2];for(var o=!0,r=0;r<s.length;r++)(!1&a||l>=a)&&Object.keys(i.O).every((function(e){return i.O[e](s[r])}))?s.splice(r--,1):(o=!1,a<l&&(l=a));if(o){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[s,n,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/gx/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,a,l=s[0],o=s[1],r=s[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(r)var c=r(i)}for(t&&t(s);d<l.length;d++)a=l[d],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},s=self["webpackChunkvue"]=self["webpackChunkvue"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(6802)}));s=i.O(s)})();
//# sourceMappingURL=app.c1fd4b56.js.map