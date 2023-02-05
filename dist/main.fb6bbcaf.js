// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/skilldate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.language = exports.frontEnd = exports.etc = exports.all = void 0;
var all = [{
  name: 'HTML5',
  src: './js/images/html.png',
  info01: '웹 사이트의 구조를 구성 및 개발 가능',
  info02: '시멘틱 마크업을 적재적소에 사용 가능'
}, {
  name: 'CSS3',
  src: './js/images/css.png',
  info01: 'HTML과 연동하여 레이아웃 디자인 구현 가능',
  info02: '웹페이지의 다양한 구성을 이해하여 디자인에 맡게 제작하거나 수정할 수 있음'
}, {
  name: 'JavaScript',
  src: './js/images/js.png',
  info01: '함수를 이용한해 화면 구현, JS를 이용한 DOM 조작 가능',
  info02: '콘텐츠에 동적 기능 부여, 멀티미디어 제어, 애니메이션 추가 등 다양한 기능 활용하여 웹 사이트 제작 가능'
}, {
  name: 'jQuery',
  src: './js/images/jquery.png',
  info01: '자바스크립트로 만들어진 함수를 호출, 사용해 기능 구현 가능',
  info02: '라이브러리를 활용하여 다양한 이벤트 제어 가능'
}, {
  name: 'React',
  src: './js/images/react.png',
  info01: '리액트를 활용하여 간단한 SPA 사이트 제작 가능',
  info02: 'Component와 Props, State와 생명주기, 이벤트 처리 사용 가능'
}, {
  name: 'SASS',
  src: './js/images/sass.png',
  info01: 'mixin과 include를 활용하여 작성가능',
  info02: ' '
}, {
  name: 'Node.js',
  src: './js/images/node.png',
  info01: '추가 예정입니다.',
  info02: '추가 예정입니다.'
}, {
  name: 'Git',
  src: './js/images/git.png',
  info01: 'push , pull , commit 을 활용하여 형상관리 가능',
  info02: 'branch를 나누어 통합 작업 가능'
}, {
  name: 'GitHub',
  src: './js/images/github.png',
  info01: 'git을 통한 형상관리와 이를 github에 연결하여 배포 가능',
  info02: ' '
}, {
  name: 'AdobeXd',
  src: './js/images/xd.png',
  info01: 'XD를 활용하여 시안 제작 가능',
  info02: ' '
}];
exports.all = all;
var language = [{
  name: 'HTML5',
  src: './js/images/html.png',
  info01: '웹 사이트의 구조를 구성 및 개발 가능',
  info02: '시멘틱 마크업을 적재적소에 사용 가능'
}, {
  name: 'CSS3',
  src: './js/images/css.png',
  info01: 'HTML과 연동하여 레이아웃 디자인 구현 가능',
  info02: '웹페이지의 다양한 구성을 이해하여 디자인에 맡게 제작하거나 수정할 수 있음'
}, {
  name: 'JavaScript',
  src: './js/images/js.png',
  info01: '함수를 이용한해 화면 구현, JS를 이용한 DOM 조작 가능',
  info02: '콘텐츠에 동적 기능 부여, 멀티미디어 제어, 애니메이션 추가 등 다양한 기능 활용하여 웹 사이트 제작 가능'
}, {
  name: 'jQuery',
  src: './js/images/jquery.png',
  info01: '자바스크립트로 만들어진 함수를 호출, 사용해 기능 구현 가능',
  info02: '라이브러리를 활용하여 다양한 이벤트 제어 가능'
}];
exports.language = language;
var frontEnd = [{
  name: 'React',
  src: './js/images/react.png',
  info01: '리액트를 활용하여 간단한 SPA 사이트 제작 가능',
  info02: 'Component와 Props, State와 생명주기, 이벤트 처리 사용 가능'
}, {
  name: 'SASS',
  src: './js/images/sass.png',
  info01: 'mixin과 include를 활용하여 작성가능',
  info02: ' '
}];
exports.frontEnd = frontEnd;
var etc = [{
  name: 'Node.js',
  src: './js/images/node.png',
  info01: '추가 예정입니다.',
  info02: '추가 예정입니다.'
}, {
  name: 'Git',
  src: './js/images/git.png',
  info01: 'push , pull , commit 을 활용하여 형상관리 가능',
  info02: 'branch를 나누어 통합 작업 가능'
}, {
  name: 'GitHub',
  src: './js/images/github.png',
  info01: 'git을 통한 형상관리와 이를 github에 연결하여 배포 가능',
  info02: ' '
}, {
  name: 'AdobeXd',
  src: './js/images/xd.png',
  info01: 'XD를 활용하여 시안 제작 가능',
  info02: ' '
}];
exports.etc = etc;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _skilldate = require("./skilldate.js");
document.addEventListener("DOMContentLoaded", function () {
  var modeChangeBtn = document.querySelector('.move_icon');
  var modBox = document.querySelector('.change_mode');
  var modeInfo = document.querySelector('.mode_info');
  var state = true;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  }
  modeChangeBtn.addEventListener('click', function () {
    var lineChange = document.querySelectorAll('#line');
    var aChange = document.querySelectorAll('a');
    var menuA = document.querySelectorAll('.follow_menu li a');
    var skillBox = document.querySelectorAll('.skill_box');
    var liChange = document.querySelectorAll('.page_nav > li');
    var contributeSpan = document.querySelectorAll('#contribute > span');
    var bubblesSpan = document.querySelectorAll('#bubbles > span');
    var projectInfo = document.querySelectorAll('#project_info');
    var projectBtn = document.querySelectorAll('.project_btnbox > button');
    var modal_P = document.querySelectorAll('.modal_bg p');
    var modal_A = document.querySelectorAll('.modal_bg a');
    var modal_Ul = document.querySelectorAll('.modal_bg ul');
    var modalH3 = document.querySelectorAll('.modal_main h3');
    var contactLi = document.querySelectorAll('.contact li');
    var pageNav = document.querySelectorAll('.page_nav > li');
    if (!state) {
      this.style.transform = 'translateX(76px)';
      this.style.backgroundColor = '#eee';
      modBox.style.backgroundColor = '#636363';
      modeInfo.innerHTML = '&#127772;';
      document.documentElement.classList.add('dark');
      document.querySelector('#page01').style.backgroundColor = '#202b38';
      document.querySelector('#page02').style.backgroundColor = '#202b38';
      document.querySelector('#page03').style.backgroundColor = '#202b38';
      document.querySelector('#page04').style.backgroundColor = '#202b38';
      document.querySelector('#page05').style.backgroundColor = '#202b38';
      document.querySelector('.main_contents_sonny').style.backgroundColor = '#202b38';
      document.querySelector('.my_info').style.backgroundColor = '#5b5b5b';
      document.querySelector('.my_promise').style.backgroundColor = '#5b5b5b';
      document.querySelector('#skill_root01').style.color = '#fff';
      document.querySelector('#skill_root02').style.color = '#fff';
      document.querySelector('#skill_root03').style.color = '#fff';
      document.querySelector('#skill_root04').style.color = '#fff';
      document.querySelector('.notify').style.color = '#eee';
      for (var i = 0; i < aChange.length; i++) {
        aChange[i].style.color = '#eee';
      }
      for (var _i = 0; _i < menuA.length; _i++) {
        menuA[_i].style.color = '#fff';
      }
      for (var _i2 = 0; _i2 < liChange.length; _i2++) {
        liChange[_i2].style.backgroundColor = 'rgba(0, 113, 227, 0.8)';
      }
      for (var _i3 = 0; _i3 < lineChange.length; _i3++) {
        lineChange[_i3].style.backgroundColor = '#fff';
      }
      for (var _i4 = 0; _i4 < skillBox.length; _i4++) {
        skillBox[_i4].style.backgroundColor = '#5b5b5b';
      }
      for (var _i5 = 0; _i5 < contributeSpan.length; _i5++) {
        contributeSpan[_i5].style.backgroundColor = '#fff';
        contributeSpan[_i5].style.color = 'black';
      }
      for (var _i6 = 0; _i6 < bubblesSpan.length; _i6++) {
        bubblesSpan[_i6].style.color = 'black';
      }
      for (var _i7 = 0; _i7 < projectInfo.length; _i7++) {
        projectInfo[_i7].style.backgroundColor = '#5b5b5b';
        projectInfo[_i7].style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 3px, rgba(0, 0, 0, 0.3) 0px 7px 10px -2px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset';
      }
      for (var _i8 = 0; _i8 < projectBtn.length; _i8++) {
        projectBtn[_i8].style.borderColor = '#fff';
      }
      for (var _i9 = 0; _i9 < modal_P.length; _i9++) {
        modal_P[_i9].style.color = '#334455';
      }
      for (var _i10 = 0; _i10 < modal_Ul.length; _i10++) {
        modal_Ul[_i10].style.color = 'black';
      }
      for (var _i11 = 0; _i11 < modal_A.length; _i11++) {
        modal_A[_i11].style.color = 'cornflowerblue';
      }
      for (var _i12 = 0; _i12 < modalH3.length; _i12++) {
        modalH3[_i12].style.color = 'black';
      }
      for (var _i13 = 0; _i13 < contactLi.length; _i13++) {
        contactLi[_i13].style.color = 'black';
      }
      for (var _i14 = 0; _i14 < pageNav.length; _i14++) {
        pageNav[_i14].addEventListener('mouseenter', function () {
          this.style.backgroundColor = '#fff';
          this.children[0].style.color = 'black';
        });
        pageNav[_i14].addEventListener('mouseleave', function () {
          this.style.backgroundColor = 'rgba(0, 113, 227, 0.8)';
          this.children[0].style.color = '#fff';
        });
      }
      document.querySelector('.btn_txt').classList.add('mode');
      state = true;
    } else {
      this.style.transform = 'translateX(0px)';
      this.style.backgroundColor = '#fff';
      modBox.style.backgroundColor = '#eee';
      modeInfo.innerHTML = '&#127774;';
      document.documentElement.classList.remove('dark');
      document.querySelector('#page01').style.backgroundColor = '#E8EBF3';
      document.querySelector('#page02').style.backgroundColor = '#fff';
      document.querySelector('#page03').style.backgroundColor = '#fff';
      document.querySelector('#page04').style.backgroundColor = '#fff';
      document.querySelector('#page05').style.backgroundColor = '#fff';
      document.querySelector('.main_contents_sonny').style.backgroundColor = '#fff';
      document.querySelector('.my_info').style.backgroundColor = '#eee';
      document.querySelector('.my_promise').style.backgroundColor = '#eee';
      document.querySelector('#skill_root01').style.color = 'black';
      document.querySelector('#skill_root02').style.color = 'black';
      document.querySelector('#skill_root03').style.color = 'black';
      document.querySelector('#skill_root04').style.color = 'black';
      document.querySelector('.modal_main h3').style.color = 'black';
      document.querySelector('.notify').style.color = '#334455';
      for (var _i15 = 0; _i15 < aChange.length; _i15++) {
        aChange[_i15].style.color = 'black';
      }
      for (var _i16 = 0; _i16 < menuA.length; _i16++) {
        menuA[_i16].style.color = '#fff';
      }
      for (var _i17 = 0; _i17 < liChange.length; _i17++) {
        liChange[_i17].style.backgroundColor = '#fff';
      }
      for (var _i18 = 0; _i18 < lineChange.length; _i18++) {
        lineChange[_i18].style.backgroundColor = 'black';
      }
      for (var _i19 = 0; _i19 < skillBox.length; _i19++) {
        skillBox[_i19].style.backgroundColor = '#fff';
      }
      for (var _i20 = 0; _i20 < contributeSpan.length; _i20++) {
        contributeSpan[_i20].style.backgroundColor = '#fff';
        contributeSpan[_i20].style.color = 'black';
      }
      for (var _i21 = 0; _i21 < bubblesSpan.length; _i21++) {
        bubblesSpan[_i21].style.color = 'black';
      }
      for (var _i22 = 0; _i22 < projectInfo.length; _i22++) {
        projectInfo[_i22].style.backgroundColor = '#fff';
        projectInfo[_i22].style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
      }
      for (var _i23 = 0; _i23 < projectBtn.length; _i23++) {
        projectBtn[_i23].style.borderColor = 'rgba(0, 113, 227, 0.8)';
      }
      for (var _i24 = 0; _i24 < modal_P.length; _i24++) {
        modal_P[_i24].style.color = '#334455';
      }
      for (var _i25 = 0; _i25 < modal_Ul.length; _i25++) {
        modal_Ul[_i25].style.color = 'black';
      }
      for (var _i26 = 0; _i26 < modal_A.length; _i26++) {
        modal_A[_i26].style.color = 'cornflowerblue';
      }
      for (var _i27 = 0; _i27 < modalH3.length; _i27++) {
        modalH3[_i27].style.color = 'black';
      }
      for (var _i28 = 0; _i28 < contactLi.length; _i28++) {
        contactLi[_i28].style.color = 'black';
      }
      for (var _i29 = 0; _i29 < pageNav.length; _i29++) {
        pageNav[_i29].addEventListener('mouseenter', function () {
          this.style.backgroundColor = 'rgba(0, 113, 227, 0.8)';
        });
        pageNav[_i29].addEventListener('mouseleave', function () {
          this.style.backgroundColor = '#fff';
          this.children[0].style.color = '#fff';
        });
      }
      document.querySelector('.btn_txt').classList.remove('mode');
      state = false;
    }
  });

  // day night mode hide&show 
  var modeBtnControl = document.querySelector('#main_chk');
  modeBtnControl.addEventListener('click', function () {
    if (state) {
      document.querySelector('.change_mode').style.zIndex = 1;
      state = false;
    } else {
      document.querySelector('.change_mode').style.zIndex = -1;
      state = true;
    }
  });
});
$(function () {
  // page 이동시 menu_follow 하는 이벤트
  var menuBtn = $('.follow_menu li');
  var menuColor = $('.follow_menu li a');
  var page = $('.wrap section');
  $('.follow_menu').css('top', $(window).height() / 2 - $('.follow_menu').height() / 2);
  menuBtn.click(function () {
    var target = $(this);
    var i = target.index();
    var targetPage = page.eq(i);
    var point = targetPage.offset().top;
    $('html, body').stop().animate({
      scrollTop: point
    }, 1000);
  }); //quick_btn click event

  $('section').mousewheel(function (e, delta) {
    if (delta > 0) {
      var prev = $(this).prev().offset().top;
      $('html, body').stop().animate({
        scrollTop: prev
      }, 1000);
    } else if (delta < 0) {
      var next = $(this).next().offset().top;
      $('html, body').stop().animate({
        scrollTop: next
      }, 1000);
    }
  }); // 스크롤 시 한페이지씩 내려가는 이벤트

  $(window).scroll(function () {
    /* 1 page scroll event */
    page.each(function () {
      var pagePoint = $(window).scrollTop();
      var target = $(this);
      var i = target.index();
      if (pagePoint >= target.offset().top) {
        menuColor.removeClass('deco');
        menuColor.eq(i).addClass('deco');
      }
    });

    /* 2 page scroll event */
    if ($(this).scrollTop() == $('#page02').offset().top) {
      setTimeout(function () {
        $('.oner_img_line01').css({
          width: '99%'
        }, 1000);
        $('.oner_img_line02').css({
          height: '99%'
        }, 1000);
        $('.oner_img_line03').css({
          width: '99%'
        }, 1000);
        $('.oner_img_line04').css({
          height: '99%'
        }, 1000);
        setTimeout(function () {
          $('.info_line01').css({
            width: '99%'
          }, 1000);
          $('.info_line02').css({
            height: '99%'
          }, 1000);
          $('.info_line03').css({
            width: '99%'
          }, 1500);
          $('.info_line04').css({
            height: '99%'
          }, 1000);
          setTimeout(function () {
            $('.mypromise_line01').css({
              width: '99%'
            }, 1000);
            $('.mypromise_line02').css({
              height: '99%'
            }, 1000);
            $('.mypromise_line03').css({
              width: '99%'
            }, 1000);
            $('.mypromise_line04').css({
              height: '99%'
            }, 1000);
          }, 500);
        }, 500);
      }, 300);
    } else {
      $('.oner_img_line01').css({
        width: 0,
        height: 1
      });
      $('.oner_img_line03').css({
        width: 0,
        height: 1
      });
      $('.info_line01').css({
        width: 0,
        height: 1
      });
      $('.info_line03').css({
        width: 0,
        height: 1
      });
      $('.mypromise_line01').css({
        width: 0,
        height: 1
      });
      $('.mypromise_line03').css({
        width: 0,
        height: 1
      });
      $('.oner_img_line02').css({
        width: 1,
        height: 0
      });
      $('.oner_img_line04').css({
        width: 1,
        height: 0
      });
      $('.oner_img_line05').css({
        width: 1,
        height: 0
      });
      $('.info_line02').css({
        width: 1,
        height: 0
      });
      $('.info_line04').css({
        width: 1,
        height: 0
      });
      $('.info_line05').css({
        width: 1,
        height: 0
      });
      $('.mypromise_line02').css({
        width: 1,
        height: 0
      });
      $('.mypromise_line04').css({
        width: 1,
        height: 0
      });
    }
  }); // 각 페이지가 화면에 도착했을 때 일어나는 이벤트

  /* 1 page typing event  */
  var typingBool = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liLength = $(".typing-txt>ul>li").length;

  // 타이핑될 텍스트를 가져온다 
  var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
  //liIndex 인덱스로 구분해 한줄씩 가져옴

  typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면 
    typingBool = true;
    var tyInt = setInterval(typing, 100); // 반복동작 
  }

  function typing() {
    $(".typing ul li").removeClass("on");
    $(".typing ul li").eq(liIndex).addClass("on");
    //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복 
      $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
      typingIdx++;
    } else {
      //한문장이끝나면
      if (liIndex < liLength - 1) {
        //다음문장으로  가기위해 인덱스를 1증가
        liIndex++;
        //다음문장을 타이핑하기위한 셋팅
        typingIdx = 0;
        typingBool = false;
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

        //다음문장 타이핑전 1초 쉰다
        clearInterval(tyInt);
        //타이핑종료

        setTimeout(function () {
          //1초후에 다시 타이핑 반복 시작
          tyInt = setInterval(typing, 100);
        }, 1000);
      } else if (liIndex == liLength - 1) {
        //마지막 문장까지 써지면 반복종료
        clearInterval(tyInt);

        //1초후
        setTimeout(function () {
          //사용했던 변수 초기화
          typingBool = false;
          liIndex = 0;
          typingIdx = -0;

          //첫번째 문장으로 셋팅
          typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
          //타이핑 결과 모두 지우기
          $(".typing ul li").html("");
          //반복시작
          tyInt = setInterval(typing, 100);
        }, 1000);
      }
    }
  }
});

/* page03 skill event  */
var rootAll = document.getElementById('skill_root01');
var rootLang = document.getElementById('skill_root02');
var rootFront = document.getElementById('skill_root03');
var rootEtc = document.getElementById('skill_root04');
for (var i = 0; i < _skilldate.all.length; i++) {
  var skillBox = document.createElement('div');
  skillBox.setAttribute('class', 'skill_box');
  var skillIcon = document.createElement('div');
  skillIcon.setAttribute('class', 'skill_icon');
  var skillImg = document.createElement('img');
  skillImg.setAttribute('src', _skilldate.all[i].src);
  skillImg.setAttribute('alt', _skilldate.all[i].name);
  var skillName = document.createElement('p');
  var skillNameP = document.createTextNode(_skilldate.all[i].name);
  var skillExplain = document.createElement('ul');
  skillExplain.setAttribute('class', 'skill_explain');
  var skillExplainLi01 = document.createElement('li');
  var skillExplainLi01txt = document.createTextNode(_skilldate.all[i].info01);
  var skillExplainLi02 = document.createElement('li');
  var skillExplainLi02txt = document.createTextNode(_skilldate.all[i].info02);
  skillBox.appendChild(skillIcon);
  skillBox.appendChild(skillExplain);
  skillIcon.appendChild(skillImg);
  skillIcon.appendChild(skillName);
  skillName.appendChild(skillNameP);
  skillExplain.appendChild(skillExplainLi01);
  skillExplain.appendChild(skillExplainLi02);
  skillExplainLi01.appendChild(skillExplainLi01txt);
  skillExplainLi02.appendChild(skillExplainLi02txt);
  rootAll.appendChild(skillBox);
}
for (var _i30 = 0; _i30 < _skilldate.language.length; _i30++) {
  var _skillBox = document.createElement('div');
  _skillBox.setAttribute('class', 'skill_box');
  var _skillIcon = document.createElement('div');
  _skillIcon.setAttribute('class', 'skill_icon');
  var _skillImg = document.createElement('img');
  _skillImg.setAttribute('src', _skilldate.language[_i30].src);
  _skillImg.setAttribute('alt', _skilldate.language[_i30].name);
  var _skillName = document.createElement('p');
  var _skillNameP = document.createTextNode(_skilldate.language[_i30].name);
  var _skillExplain = document.createElement('ul');
  _skillExplain.setAttribute('class', 'skill_explain');
  var _skillExplainLi = document.createElement('li');
  var _skillExplainLi01txt = document.createTextNode(_skilldate.language[_i30].info01);
  var _skillExplainLi2 = document.createElement('li');
  var _skillExplainLi02txt = document.createTextNode(_skilldate.language[_i30].info02);
  _skillBox.appendChild(_skillIcon);
  _skillBox.appendChild(_skillExplain);
  _skillIcon.appendChild(_skillImg);
  _skillIcon.appendChild(_skillName);
  _skillName.appendChild(_skillNameP);
  _skillExplain.appendChild(_skillExplainLi);
  _skillExplain.appendChild(_skillExplainLi2);
  _skillExplainLi.appendChild(_skillExplainLi01txt);
  _skillExplainLi2.appendChild(_skillExplainLi02txt);
  rootLang.appendChild(_skillBox);
}
for (var _i31 = 0; _i31 < _skilldate.frontEnd.length; _i31++) {
  var _skillBox2 = document.createElement('div');
  _skillBox2.setAttribute('class', 'skill_box');
  var _skillIcon2 = document.createElement('div');
  _skillIcon2.setAttribute('class', 'skill_icon');
  var _skillImg2 = document.createElement('img');
  _skillImg2.setAttribute('src', _skilldate.frontEnd[_i31].src);
  _skillImg2.setAttribute('alt', _skilldate.frontEnd[_i31].name);
  var _skillName2 = document.createElement('p');
  var _skillNameP2 = document.createTextNode(_skilldate.frontEnd[_i31].name);
  var _skillExplain2 = document.createElement('ul');
  _skillExplain2.setAttribute('class', 'skill_explain');
  var _skillExplainLi3 = document.createElement('li');
  var _skillExplainLi01txt2 = document.createTextNode(_skilldate.frontEnd[_i31].info01);
  var _skillExplainLi4 = document.createElement('li');
  var _skillExplainLi02txt2 = document.createTextNode(_skilldate.frontEnd[_i31].info02);
  _skillBox2.appendChild(_skillIcon2);
  _skillBox2.appendChild(_skillExplain2);
  _skillIcon2.appendChild(_skillImg2);
  _skillIcon2.appendChild(_skillName2);
  _skillName2.appendChild(_skillNameP2);
  _skillExplain2.appendChild(_skillExplainLi3);
  _skillExplain2.appendChild(_skillExplainLi4);
  _skillExplainLi3.appendChild(_skillExplainLi01txt2);
  _skillExplainLi4.appendChild(_skillExplainLi02txt2);
  rootFront.appendChild(_skillBox2);
}
for (var _i32 = 0; _i32 < _skilldate.etc.length; _i32++) {
  var _skillBox3 = document.createElement('div');
  _skillBox3.setAttribute('class', 'skill_box');
  var _skillIcon3 = document.createElement('div');
  _skillIcon3.setAttribute('class', 'skill_icon');
  var _skillImg3 = document.createElement('img');
  _skillImg3.setAttribute('src', _skilldate.etc[_i32].src);
  _skillImg3.setAttribute('alt', _skilldate.etc[_i32].name);
  var _skillName3 = document.createElement('p');
  var _skillNameP3 = document.createTextNode(_skilldate.etc[_i32].name);
  var _skillExplain3 = document.createElement('ul');
  _skillExplain3.setAttribute('class', 'skill_explain');
  var _skillExplainLi5 = document.createElement('li');
  var _skillExplainLi01txt3 = document.createTextNode(_skilldate.etc[_i32].info01);
  var _skillExplainLi6 = document.createElement('li');
  var _skillExplainLi02txt3 = document.createTextNode(_skilldate.etc[_i32].info02);
  _skillBox3.appendChild(_skillIcon3);
  _skillBox3.appendChild(_skillExplain3);
  _skillIcon3.appendChild(_skillImg3);
  _skillIcon3.appendChild(_skillName3);
  _skillName3.appendChild(_skillNameP3);
  _skillExplain3.appendChild(_skillExplainLi5);
  _skillExplain3.appendChild(_skillExplainLi6);
  _skillExplainLi5.appendChild(_skillExplainLi01txt3);
  _skillExplainLi6.appendChild(_skillExplainLi02txt3);
  rootEtc.appendChild(_skillBox3);
}

/* page04 event  */

/* 버튼 슬라이드 */
var slider = document.querySelector('.project_slider'); // 움직일 주체
var projectBox = document.querySelectorAll('.project_container'); // 내용물
var projectBtn = document.querySelector('.project_btnbox');
var containerWidth = projectBox[0].clientWidth + 340;
var sliderWidth = containerWidth * projectBox.length;
slider.style.width = "".concat(sliderWidth, "px");
var currentIndex = 0;
var translate = 0;
function moveSlide(e) {
  if (e.target.className === 'page04_next') {
    if (currentIndex !== projectBox.length - 1) {
      translate -= containerWidth;
      slider.style.transform = "translateX(".concat(translate, "px)");
      $('.page04_prev').fadeIn(1000);
      currentIndex += 1;
    }
  } else if (e.target.className === 'page04_prev') {
    if (currentIndex !== 0) {
      translate += containerWidth;
      slider.style.transform = "translateX(".concat(translate, "px)");
      currentIndex -= 1;
    }
    if (currentIndex == 0) {
      $('.page04_next').fadeIn(1000);
      $('.page04_prev').fadeOut(1000);
    }
  }
}
projectBtn.addEventListener('click', moveSlide);

/* page04 scroll 이벤트 */

/* contribute 제어 */
var planning1 = $('.project01_info > #contribute > #planning > span');
var design1 = $('.project01_info > #contribute > #design > span');
var dev1 = $('.project01_info > #contribute > #dev > span');
var planning2 = $('.project02_info > #contribute > #planning > span');
var design2 = $('.project02_info > #contribute > #design > span');
var dev2 = $('.project02_info > #contribute > #dev > span');
var planning4 = $('.no_project04 > .project02_info > #contribute > #planning > span');
var design4 = $('.no_project04 > .project02_info > #contribute > #design > span');
var dev4 = $('.no_project04 > .project02_info > #contribute > #dev > span');
/* 말풍선 제어 */
var bubbleP1 = $('.project01_info > #bubbles > span:nth-child(1)');
var bubbleP2 = $('.project02_info >#bubbles > span:nth-child(1)');
var bubbleD1 = $('.project01_info >#bubbles > span:nth-child(2)');
var bubbleD2 = $('.project02_info >#bubbles > span:nth-child(2)');
var bubbleDev1 = $('.project01_info >#bubbles > span:nth-child(3)');
var bubbleDev2 = $('.project02_info >#bubbles > span:nth-child(3)');

/* project 기여도 마우스 이벤트 */
var firstSpan = function firstSpan(callback) {
  setInterval(function () {
    planning1.css({
      'height': '100%'
    });
    planning2.css({
      'height': '50%'
    });
    planning4.css({
      'height': '100%'
    });
    callback();
    setTimeout(function () {
      bubbleP1.css({
        'opacity': '1',
        'scale': '1'
      });
      bubbleP2.css({
        'opacity': '1',
        'scale': '1'
      });
    }, 1200);
  }, 1600);
};
var secondSpan = function secondSpan(callback) {
  setTimeout(function () {
    design1.css({
      'height': '100%'
    });
    design2.css({
      'height': '50%'
    });
    design4.css({
      'height': '100%'
    });
    callback();
    setTimeout(function () {
      bubbleD1.css({
        'opacity': '1',
        'scale': '1'
      });
      bubbleD2.css({
        'opacity': '1',
        'scale': '1'
      });
    }, 1200);
  }, 1500);
};
var thirdSpan = function thirdSpan(callback) {
  setTimeout(function () {
    dev1.css({
      'height': '100%'
    });
    dev2.css({
      'height': '100%'
    });
    dev4.css({
      'height': '100%'
    });
    callback();
    setTimeout(function () {
      bubbleDev1.css({
        'opacity': '1',
        'scale': '1'
      });
      bubbleDev2.css({
        'opacity': '1',
        'scale': '1'
      });
    }, 1200);
  }, 1500);
};
$(window).scroll(function () {
  if ($(this).scrollTop() == $('#page04').offset().top) {
    $('.project01').css({
      left: 0
    });
    $('.project01_info').css({
      right: 10
    });
    $('.page04_next').fadeIn(1000);
    setTimeout(function () {
      $('.project02').css({
        left: 0
      });
      $('.project02_info').css({
        right: 10
      });
    }, 300);
    firstSpan(function () {
      secondSpan(function () {
        thirdSpan(function () {});
      });
    });
  } else {
    $('.project01').css({
      left: -610
    });
    $('.project01_info').css({
      right: -540
    });
    $('.project02').css({
      left: -610
    });
    $('.project02_info').css({
      right: -540
    });
    $('.page04_next').fadeOut();
    /* project 기여도 리셋 이벤트 */
    planning1.css({
      'height': '0%'
    });
    design1.css({
      'height': '0%'
    });
    dev1.css({
      'height': '0%'
    });
    planning2.css({
      'height': '0%'
    });
    design2.css({
      'height': '0%'
    });
    dev2.css({
      'height': '0%'
    });
    /* project 기여도 말풍선 리셋이벤트 */
    bubbleP1.css({
      'opacity': '0',
      'scale': '0'
    });
    bubbleP2.css({
      'opacity': '0',
      'scale': '0'
    });
    bubbleD1.css({
      'opacity': '0',
      'scale': '0'
    });
    bubbleD2.css({
      'opacity': '0',
      'scale': '0'
    });
    bubbleDev1.css({
      'opacity': '0',
      'scale': '0'
    });
    bubbleDev2.css({
      'opacity': '0',
      'scale': '0'
    });
  }
});

// 새로고침되어도 나타나게하기
$(window).scrollTop(function () {
  if ($(this).scrollTop() == $('#page04').offset().top) {
    $('.project01').css({
      left: 0
    });
    $('.project01_info').css({
      right: 10
    });
    $('.page04_next').fadeIn(1000);
    setTimeout(function () {
      $('.project02').css({
        left: 0
      });
      $('.project02_info').css({
        right: 10
      });
    }, 300);

    /* project 기여도 마우스 이벤트 */
    firstSpan(function () {
      secondSpan(function () {
        thirdSpan(function () {});
      });
    });
  } else {
    $('.project01').css({
      left: -610
    });
    $('.project01_info').css({
      right: -540
    });
    $('.project02').css({
      left: -610
    });
    $('.project02_info').css({
      right: -540
    });
    $('.page04_next').fadeOut();

    /* project 기여도 마우스 이벤트 */
    planning1.css({
      'height': '0%'
    });
    design1.css({
      'height': '0%'
    });
    dev1.css({
      'height': '0%'
    });
    planning2.css({
      'height': '0%'
    });
    design2.css({
      'height': '0%'
    });
    dev2.css({
      'height': '0%'
    });
    /* project 기여도 말풍선 리셋이벤트 */
    bubbleP1.css({
      'opacity': '0',
      'scale': '0'
    });
    bubbleP2.css({
      'opacity': '0',
      'scale': '0'
    });
    bubbleD1.css({
      'opacity': '0',
      'scale': '0'
    });
    bubbleD2.css({
      'opacity': '0',
      'scale': '0'
    });
    bubbleDev1.css({
      'opacity': '0',
      'scale': '0'
    });
    bubbleDev2.css({
      'opacity': '0',
      'scale': '0'
    });
  }
});

// 모달창 제어

document.addEventListener("DOMContentLoaded", function () {
  var modal01Open = document.querySelector('.no_project01 > .project01> .page_nav .modal');
  var modal02Open = document.querySelector('.no_project02 > .project02> .page_nav .modal');
  var modalOff = document.querySelectorAll('.modal_off');
  var modal01 = document.querySelector('.modal_project01');
  var modal02 = document.querySelector('.modal_project02');
  modal01Open.addEventListener('click', function () {
    modal01.style.scale = '1';
    window.onkeyup = function (event) {
      if (event.keyCode == 27) {
        modal01.style.scale = '0';
      }
    };
  });
  modal02Open.addEventListener('click', function () {
    modal02.style.scale = '1';
    window.onkeyup = function (event) {
      if (event.keyCode == 27) {
        modal02.style.scale = '0';
      }
    };
  });
  for (var _i33 = 0; _i33 < modalOff.length; _i33++) {
    modalOff[_i33].addEventListener('click', function () {
      modal01.style.scale = '0';
      modal02.style.scale = '0';
    });
  }

  // project01. 나아짐 모바일 open
  var mobilebtn = document.querySelectorAll('#mobile_open');
  for (var _i34 = 0; _i34 < mobilebtn.length; _i34++) {
    mobilebtn[_i34].addEventListener("click", function () {
      window.open('https://ssoonnyy.github.io/project01_Naagym/mobile_ver/index.html', '_blank', 'menubar=no, resizable=yes, toolbar=no, location=no, status=no, width=390,height=844,top=150,left=750');
    });
  }
});
},{"./skilldate.js":"js/skilldate.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53934" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map