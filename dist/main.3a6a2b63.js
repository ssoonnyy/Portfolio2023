parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZIri":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.language=exports.frontEnd=exports.etc=exports.all=void 0;var n=[{name:"HTML5",src:"./js/images/html.png",info01:"웹 사이트의 구조를 구성 및 개발 가능",info02:"시멘틱 마크업을 적재적소에 사용 가능"},{name:"CSS3",src:"./js/images/css.png",info01:"HTML과 연동하여 레이아웃 디자인 구현 가능",info02:"웹페이지의 다양한 구성을 이해하여 디자인에 맡게 제작하거나 수정할 수 있음"},{name:"JavaScript",src:"./js/images/js.png",info01:"함수를 이용한해 화면 구현, JS를 이용한 DOM 조작 가능",info02:"콘텐츠에 동적 기능 부여, 멀티미디어 제어, 애니메이션 추가 등 다양한 기능 활용하여 웹 사이트 제작 가능"},{name:"jQuery",src:"./js/images/jquery.png",info01:"자바스크립트로 만들어진 함수를 호출, 사용해 기능 구현 가능",info02:"라이브러리를 활용하여 다양한 이벤트 제어 가능"},{name:"React",src:"./js/images/react.png",info01:"tyled 컴포넌트 적용 가능",info02:"추가 예정입니다."},{name:"SASS",src:"./js/images/sass.png",info01:"mixin과 include를 활용하여 작성가능",info02:"추가 예정입니다."},{name:"Node.js",src:"./js/images/node.png",info01:"추가 예정입니다.",info02:"추가 예정입니다."},{name:"Git",src:"./js/images/git.png",info01:"push , pull , commit 을 활용하여 형상관리 가능",info02:"branch를 나누어 통합 작업 가능"},{name:"GitHub",src:"./js/images/github.png",info01:"git을 통한 형상관리와 이를 github에 연결하여 배포 가능",info02:"추가 예정입니다."},{name:"AdobeXd",src:"./js/images/xd.png",info01:"XD를 활용하여 시안 제작 가능",info02:"추가 예정입니다."}];exports.all=n;var s=[{name:"HTML5",src:"./js/images/html.png",info01:"웹 사이트의 구조를 구성 및 개발 가능",info02:"시멘틱 마크업을 적재적소에 사용 가능"},{name:"CSS3",src:"./js/images/css.png",info01:"HTML과 연동하여 레이아웃 디자인 구현 가능",info02:"웹페이지의 다양한 구성을 이해하여 디자인에 맡게 제작하거나 수정할 수 있음"},{name:"JavaScript",src:"./js/images/js.png",info01:"함수를 이용한해 화면 구현, JS를 이용한 DOM 조작 가능",info02:"콘텐츠에 동적 기능 부여, 멀티미디어 제어, 애니메이션 추가 등 다양한 기능 활용하여 웹 사이트 제작 가능"},{name:"jQuery",src:"./js/images/jquery.png",info01:"자바스크립트로 만들어진 함수를 호출, 사용해 기능 구현 가능",info02:"라이브러리를 활용하여 다양한 이벤트 제어 가능"}];exports.language=s;var i=[{name:"React",src:"./js/images/react.png",info01:"tyled 컴포넌트 적용 가능",info02:"추가 예정입니다."},{name:"SASS",src:"./js/images/sass.png",info01:"mixin과 include를 활용하여 작성가능",info02:"추가 예정입니다."}];exports.frontEnd=i;var e=[{name:"Node.js",src:"./js/images/node.png",info01:"추가 예정입니다.",info02:"추가 예정입니다."},{name:"Git",src:"./js/images/git.png",info01:"push , pull , commit 을 활용하여 형상관리 가능",info02:"branch를 나누어 통합 작업 가능"},{name:"GitHub",src:"./js/images/github.png",info01:"git을 통한 형상관리와 이를 github에 연결하여 배포 가능",info02:"추가 예정입니다."},{name:"AdobeXd",src:"./js/images/xd.png",info01:"XD를 활용하여 시안 제작 가능",info02:"추가 예정입니다."}];exports.etc=e;
},{}],"d6sW":[function(require,module,exports) {
"use strict";var e=require("./skilldate.js");document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".move_icon"),t=document.querySelector(".change_mode"),o=document.querySelector(".mode_info"),l=!0;window.matchMedia("(prefers-color-scheme: dark)").matches&&document.documentElement.classList.add("dark"),e.addEventListener("click",function(){var e=document.querySelectorAll("#line"),n=document.querySelectorAll("a"),c=document.querySelectorAll(".follow_menu li a"),r=document.querySelectorAll(".skill_box"),s=document.querySelectorAll(".page_nav > li"),i=document.querySelectorAll("#contribute > span"),a=document.querySelectorAll("#bubbles > span"),d=document.querySelectorAll("#project_info"),u=document.querySelectorAll(".project_btnbox > button"),p=document.querySelectorAll(".modal_bg p"),m=document.querySelectorAll(".modal_bg a"),h=document.querySelectorAll(".modal_bg ul"),f=document.querySelectorAll(".modal_main h3"),g=document.querySelectorAll(".contact li");if(l){this.style.transform="translateX(0px)",this.style.backgroundColor="#fff",t.style.backgroundColor="#eee",o.innerHTML="&#127774;",document.documentElement.classList.remove("dark"),document.querySelector("#page01").style.backgroundColor="#E8EBF3",document.querySelector("#page02").style.backgroundColor="#fff",document.querySelector("#page03").style.backgroundColor="#fff",document.querySelector("#page04").style.backgroundColor="#fff",document.querySelector("#page05").style.backgroundColor="#fff",document.querySelector(".test").style.backgroundColor="#fff",document.querySelector(".my_info").style.backgroundColor="#eee",document.querySelector(".my_promise").style.backgroundColor="#eee",document.querySelector("#skill_root01").style.color="black",document.querySelector("#skill_root02").style.color="black",document.querySelector("#skill_root03").style.color="black",document.querySelector("#skill_root04").style.color="black",document.querySelector(".modal_main h3").style.color="black",document.querySelector(".notify").style.color="#334455";for(var y=0;y<n.length;y++)n[y].style.color="black";for(var b=0;b<c.length;b++)c[b].style.color="#fff";for(var _=0;_<s.length;_++)s[_].style.backgroundColor="#fff";for(var v=0;v<e.length;v++)e[v].style.backgroundColor="black";for(var $=0;$<r.length;$++)r[$].style.backgroundColor="#fff";for(var k=0;k<i.length;k++)i[k].style.backgroundColor="#fff",i[k].style.color="black";for(var C=0;C<a.length;C++)a[C].style.color="black";for(var x=0;x<d.length;x++)d[x].style.backgroundColor="#fff",d[x].style.boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px";for(var q=0;q<u.length;q++)u[q].style.borderColor="rgba(0, 113, 227, 0.8)";for(var S=0;S<p.length;S++)p[S].style.color="#334455";for(var E=0;E<h.length;E++)h[E].style.color="black";for(var w=0;w<m.length;w++)m[w].style.color="cornflowerblue";for(var j=0;j<f.length;j++)f[j].style.color="black";for(var A=0;A<g.length;A++)g[A].style.color="black";document.querySelector(".btn_txt").classList.remove("mode"),l=!1}else{this.style.transform="translateX(76px)",this.style.backgroundColor="#eee",t.style.backgroundColor="#636363",o.innerHTML="&#127772;",document.documentElement.classList.add("dark"),document.querySelector("#page01").style.backgroundColor="#202b38",document.querySelector("#page02").style.backgroundColor="#202b38",document.querySelector("#page03").style.backgroundColor="#202b38",document.querySelector("#page04").style.backgroundColor="#202b38",document.querySelector("#page05").style.backgroundColor="#202b38",document.querySelector(".test").style.backgroundColor="#202b38",document.querySelector(".my_info").style.backgroundColor="#5b5b5b",document.querySelector(".my_promise").style.backgroundColor="#5b5b5b",document.querySelector("#skill_root01").style.color="#fff",document.querySelector("#skill_root02").style.color="#fff",document.querySelector("#skill_root03").style.color="#fff",document.querySelector("#skill_root04").style.color="#fff",document.querySelector(".notify").style.color="#eee";for(var T=0;T<n.length;T++)n[T].style.color="#eee";for(var L=0;L<c.length;L++)c[L].style.color="#fff";for(var I=0;I<s.length;I++)s[I].style.backgroundColor="rgba(0, 113, 227, 0.8)";for(var N=0;N<e.length;N++)e[N].style.backgroundColor="#fff";for(var M=0;M<r.length;M++)r[M].style.backgroundColor="#5b5b5b";for(var O=0;O<i.length;O++)i[O].style.backgroundColor="#fff",i[O].style.color="black";for(var B=0;B<a.length;B++)a[B].style.color="black";for(var X=0;X<d.length;X++)d[X].style.backgroundColor="#5b5b5b",d[X].style.boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 3px, rgba(0, 0, 0, 0.3) 0px 7px 10px -2px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset";for(var z=0;z<u.length;z++)u[z].style.borderColor="#fff";for(var D=0;D<p.length;D++)p[D].style.color="#334455";for(var H=0;H<h.length;H++)h[H].style.color="black";for(var F=0;F<m.length;F++)m[F].style.color="cornflowerblue";for(var W=0;W<f.length;W++)f[W].style.color="black";for(var G=0;G<g.length;G++)g[G].style.color="black";document.querySelector(".btn_txt").classList.add("mode"),l=!0}}),document.querySelector("#main_chk").addEventListener("click",function(){l?(document.querySelector(".change_mode").style.zIndex=1,l=!1):(document.querySelector(".change_mode").style.zIndex=-1,l=!0)})}),$(function(){var e=$(".follow_menu li"),t=$(".follow_menu li a"),o=$(".wrap section");$(".follow_menu").css("top",$(window).height()/2-$(".follow_menu").height()/2),e.click(function(){var e=$(this).index(),t=o.eq(e).offset().top;$("html, body").stop().animate({scrollTop:t},1e3)}),$("section").mousewheel(function(e,t){if(t>0){var o=$(this).prev().offset().top;$("html, body").stop().animate({scrollTop:o},1e3)}else if(t<0){var l=$(this).next().offset().top;$("html, body").stop().animate({scrollTop:l},1e3)}}),$(window).scroll(function(){o.each(function(){var e=$(window).scrollTop(),o=$(this),l=o.index();e>=o.offset().top&&(t.removeClass("deco"),t.eq(l).addClass("deco"))}),$(this).scrollTop()==$("#page02").offset().top?setTimeout(function(){$(".oner_img_line01").css({width:"99%"},1e3),$(".oner_img_line02").css({height:"99%"},1e3),$(".oner_img_line03").css({width:"99%"},1e3),$(".oner_img_line04").css({height:"99%"},1e3),setTimeout(function(){$(".info_line01").css({width:"99%"},1e3),$(".info_line02").css({height:"99%"},1e3),$(".info_line03").css({width:"99%"},1500),$(".info_line04").css({height:"99%"},1e3),setTimeout(function(){$(".mypromise_line01").css({width:"99%"},1e3),$(".mypromise_line02").css({height:"99%"},1e3),$(".mypromise_line03").css({width:"99%"},1e3),$(".mypromise_line04").css({height:"99%"},1e3)},500)},500)},1e3):($(".oner_img_line01").css({width:0,height:1}),$(".oner_img_line03").css({width:0,height:1}),$(".info_line01").css({width:0,height:1}),$(".info_line03").css({width:0,height:1}),$(".mypromise_line01").css({width:0,height:1}),$(".mypromise_line03").css({width:0,height:1}),$(".oner_img_line02").css({width:1,height:0}),$(".oner_img_line04").css({width:1,height:0}),$(".oner_img_line05").css({width:1,height:0}),$(".info_line02").css({width:1,height:0}),$(".info_line04").css({width:1,height:0}),$(".info_line05").css({width:1,height:0}),$(".mypromise_line02").css({width:1,height:0}),$(".mypromise_line04").css({width:1,height:0}))});var l=!1,n=0,c=0,r=$(".typing-txt>ul>li").length,s=$(".typing-txt>ul>li").eq(c).text();if(s=s.split(""),0==l){l=!0;var i=setInterval(function e(){$(".typing ul li").removeClass("on");$(".typing ul li").eq(c).addClass("on");n<s.length?($(".typing ul li").eq(c).append(s[n]),n++):c<r-1?(c++,n=0,l=!1,s=$(".typing-txt>ul>li").eq(c).text(),clearInterval(i),setTimeout(function(){i=setInterval(e,100)},1e3)):c==r-1&&(clearInterval(i),setTimeout(function(){l=!1,c=0,n=-0,s=$(".typing-txt>ul>li").eq(c).text(),$(".typing ul li").html(""),i=setInterval(e,100)},1e3))},100)}});for(var t=document.getElementById("skill_root01"),o=document.getElementById("skill_root02"),l=document.getElementById("skill_root03"),n=document.getElementById("skill_root04"),c=0;c<e.all.length;c++){var r=document.createElement("div");r.setAttribute("class","skill_box");var s=document.createElement("div");s.setAttribute("class","skill_icon");var i=document.createElement("img");i.setAttribute("src",e.all[c].src),i.setAttribute("alt",e.all[c].name);var a=document.createElement("p"),d=document.createTextNode(e.all[c].name),u=document.createElement("ul");u.setAttribute("class","skill_explain");var p=document.createElement("li"),m=document.createTextNode(e.all[c].info01),h=document.createElement("li"),f=document.createTextNode(e.all[c].info02);r.appendChild(s),r.appendChild(u),s.appendChild(i),s.appendChild(a),a.appendChild(d),u.appendChild(p),u.appendChild(h),p.appendChild(m),h.appendChild(f),t.appendChild(r)}for(var g=0;g<e.language.length;g++){var y=document.createElement("div");y.setAttribute("class","skill_box");var b=document.createElement("div");b.setAttribute("class","skill_icon");var _=document.createElement("img");_.setAttribute("src",e.language[g].src),_.setAttribute("alt",e.language[g].name);var v=document.createElement("p"),k=document.createTextNode(e.language[g].name),C=document.createElement("ul");C.setAttribute("class","skill_explain");var x=document.createElement("li"),q=document.createTextNode(e.language[g].info01),S=document.createElement("li"),E=document.createTextNode(e.language[g].info02);y.appendChild(b),y.appendChild(C),b.appendChild(_),b.appendChild(v),v.appendChild(k),C.appendChild(x),C.appendChild(S),x.appendChild(q),S.appendChild(E),o.appendChild(y)}for(var w=0;w<e.frontEnd.length;w++){var j=document.createElement("div");j.setAttribute("class","skill_box");var A=document.createElement("div");A.setAttribute("class","skill_icon");var T=document.createElement("img");T.setAttribute("src",e.frontEnd[w].src),T.setAttribute("alt",e.frontEnd[w].name);var L=document.createElement("p"),I=document.createTextNode(e.frontEnd[w].name),N=document.createElement("ul");N.setAttribute("class","skill_explain");var M=document.createElement("li"),O=document.createTextNode(e.frontEnd[w].info01),B=document.createElement("li"),X=document.createTextNode(e.frontEnd[w].info02);j.appendChild(A),j.appendChild(N),A.appendChild(T),A.appendChild(L),L.appendChild(I),N.appendChild(M),N.appendChild(B),M.appendChild(O),B.appendChild(X),l.appendChild(j)}for(var z=0;z<e.etc.length;z++){var D=document.createElement("div");D.setAttribute("class","skill_box");var H=document.createElement("div");H.setAttribute("class","skill_icon");var F=document.createElement("img");F.setAttribute("src",e.etc[z].src),F.setAttribute("alt",e.etc[z].name);var W=document.createElement("p"),G=document.createTextNode(e.etc[z].name),J=document.createElement("ul");J.setAttribute("class","skill_explain");var K=document.createElement("li"),P=document.createTextNode(e.etc[z].info01),Q=document.createElement("li"),R=document.createTextNode(e.etc[z].info02);D.appendChild(H),D.appendChild(J),H.appendChild(F),H.appendChild(W),W.appendChild(G),J.appendChild(K),J.appendChild(Q),K.appendChild(P),Q.appendChild(R),n.appendChild(D)}document.addEventListener("DOMContentLoaded",function(){});var U=document.querySelector(".project_slider"),V=document.querySelectorAll(".project_container"),Y=document.querySelector(".project_btnbox"),Z=V[0].clientWidth+340,ee=Z*V.length;U.style.width="".concat(ee,"px");var te=0,oe=0;function le(e){"page04_next"===e.target.className?te!==V.length-1&&(oe-=Z,U.style.transform="translateX(".concat(oe,"px)"),$(".page04_prev").fadeIn(1e3),te+=1):"page04_prev"===e.target.className&&(0!==te&&(oe+=Z,U.style.transform="translateX(".concat(oe,"px)"),te-=1),0==te&&($(".page04_next").fadeIn(1e3),$(".page04_prev").fadeOut(1e3)))}Y.addEventListener("click",le);var ne=$(".project01_info > #contribute > #planning > span"),ce=$(".project01_info > #contribute > #design > span"),re=$(".project01_info > #contribute > #dev > span"),se=$(".project02_info > #contribute > #planning > span"),ie=$(".project02_info > #contribute > #design > span"),ae=$(".project02_info > #contribute > #dev > span"),de=$(".project01_info > #bubbles > span:nth-child(1)"),ue=$(".project02_info >#bubbles > span:nth-child(1)"),pe=$(".project01_info >#bubbles > span:nth-child(2)"),me=$(".project02_info >#bubbles > span:nth-child(2)"),he=$(".project01_info >#bubbles > span:nth-child(3)"),fe=$(".project02_info >#bubbles > span:nth-child(3)"),ge=function(e){setInterval(function(){ne.css({height:"100%"}),se.css({height:"50%"}),e(),setTimeout(function(){de.css({opacity:"1",scale:"1"}),ue.css({opacity:"1",scale:"1"})},1200)},1600)},ye=function(e){setTimeout(function(){ce.css({height:"100%"}),ie.css({height:"50%"}),e(),setTimeout(function(){pe.css({opacity:"1",scale:"1"}),me.css({opacity:"1",scale:"1"})},1200)},1500)},be=function(e){setTimeout(function(){re.css({height:"100%"}),ae.css({height:"100%"}),e(),setTimeout(function(){he.css({opacity:"1",scale:"1"}),fe.css({opacity:"1",scale:"1"})},1200)},1500)};$(window).scroll(function(){$(this).scrollTop()==$("#page04").offset().top?($(".project01").css({left:0}),$(".project01_info").css({right:10}),$(".page04_next").fadeIn(1e3),setTimeout(function(){$(".project02").css({left:0}),$(".project02_info").css({right:10})},300),ge(function(){ye(function(){be(function(){})})})):($(".project01").css({left:-610}),$(".project01_info").css({right:-540}),$(".project02").css({left:-610}),$(".project02_info").css({right:-540}),$(".page04_next").fadeOut(),ne.css({height:"0%"}),ce.css({height:"0%"}),re.css({height:"0%"}),se.css({height:"0%"}),ie.css({height:"0%"}),ae.css({height:"0%"}),de.css({opacity:"0",scale:"0"}),ue.css({opacity:"0",scale:"0"}),pe.css({opacity:"0",scale:"0"}),me.css({opacity:"0",scale:"0"}),he.css({opacity:"0",scale:"0"}),fe.css({opacity:"0",scale:"0"}))}),$(window).scrollTop(function(){$(this).scrollTop()==$("#page04").offset().top?($(".project01").css({left:0}),$(".project01_info").css({right:10}),$(".page04_next").fadeIn(1e3),setTimeout(function(){$(".project02").css({left:0}),$(".project02_info").css({right:10})},300),ge(function(){ye(function(){be(function(){})})})):($(".project01").css({left:-610}),$(".project01_info").css({right:-540}),$(".project02").css({left:-610}),$(".project02_info").css({right:-540}),$(".page04_next").fadeOut(),ne.css({height:"0%"}),ce.css({height:"0%"}),re.css({height:"0%"}),se.css({height:"0%"}),ie.css({height:"0%"}),ae.css({height:"0%"}),de.css({opacity:"0",scale:"0"}),ue.css({opacity:"0",scale:"0"}),pe.css({opacity:"0",scale:"0"}),me.css({opacity:"0",scale:"0"}),he.css({opacity:"0",scale:"0"}),fe.css({opacity:"0",scale:"0"}))}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".project01> .page_nav .modal"),t=document.querySelector(".project02> .page_nav .modal"),o=document.querySelectorAll(".modal_off"),l=document.querySelector(".modal_project01"),n=document.querySelector(".modal_project02");e.addEventListener("click",function(){l.style.scale="1",window.onkeyup=function(e){27==e.keyCode&&(l.style.scale="0")}}),t.addEventListener("click",function(){n.style.scale="1",window.onkeyup=function(e){27==e.keyCode&&(n.style.scale="0")}});for(var c=0;c<o.length;c++)o[c].addEventListener("click",function(){l.style.scale="0",n.style.scale="0"});for(var r=document.querySelectorAll("#mobile_open"),s=0;s<r.length;s++)r[s].addEventListener("click",function(){window.open("https://ssoonnyy.github.io/project01_Naagym/mobile_ver/index.html","_blank","menubar=no, resizable=yes, toolbar=no, location=no, status=no, width=390,height=844,top=150,left=750")})});
},{"./skilldate.js":"ZIri"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.3a6a2b63.js.map