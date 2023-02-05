import {all,language,frontEnd,etc} from "./skilldate.js"


document.addEventListener("DOMContentLoaded",()=>{
  const modeChangeBtn = document.querySelector('.move_icon')
  const modBox = document.querySelector('.change_mode')
  const modeInfo = document.querySelector('.mode_info')
  let state = true

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark")
  }


  modeChangeBtn.addEventListener('click',function(){
    let lineChange = document.querySelectorAll('#line')
    let aChange = document.querySelectorAll('a')
    let menuA = document.querySelectorAll('.follow_menu li a')
    let skillBox = document.querySelectorAll('.skill_box')
    let liChange = document.querySelectorAll('.page_nav > li')
    let contributeSpan = document.querySelectorAll('#contribute > span')
    let bubblesSpan = document.querySelectorAll('#bubbles > span')
    let projectInfo = document.querySelectorAll('#project_info')
    let projectBtn = document.querySelectorAll('.project_btnbox > button')
    let modal_P = document.querySelectorAll('.modal_bg p')
    let modal_A = document.querySelectorAll('.modal_bg a')
    let modal_Ul = document.querySelectorAll('.modal_bg ul')
    let modalH3 = document.querySelectorAll('.modal_main h3')
    let contactLi = document.querySelectorAll('.contact li')
    let pageNav = document.querySelectorAll('.page_nav > li')

    if(!state){
      this.style.transform = 'translateX(76px)'
      this.style.backgroundColor ='#eee'
      modBox.style.backgroundColor = '#636363'
      modeInfo.innerHTML = '&#127772;'
      document.documentElement.classList.add('dark')

      document.querySelector('#page01').style.backgroundColor='#202b38'
      document.querySelector('#page02').style.backgroundColor='#202b38'
      document.querySelector('#page03').style.backgroundColor='#202b38'
      document.querySelector('#page04').style.backgroundColor='#202b38'
      document.querySelector('#page05').style.backgroundColor='#202b38'
      document.querySelector('.main_contents_sonny').style.backgroundColor='#202b38'
      document.querySelector('.my_info').style.backgroundColor='#5b5b5b'
      document.querySelector('.my_promise').style.backgroundColor='#5b5b5b'
      document.querySelector('#skill_root01').style.color='#fff'
      document.querySelector('#skill_root02').style.color='#fff'
      document.querySelector('#skill_root03').style.color='#fff'
      document.querySelector('#skill_root04').style.color='#fff'
      document.querySelector('.notify').style.color='#eee'
  
    
      for(let i=0; i<aChange.length; i++){
        aChange[i].style.color='#eee'
      }
      for(let i=0; i<menuA.length; i++){
        menuA[i].style.color='#fff'
      }
      for(let i=0; i<liChange.length; i++){
        liChange[i].style.backgroundColor='rgba(0, 113, 227, 0.8)'
      }
      for(let i=0; i<lineChange.length; i++){
        lineChange[i].style.backgroundColor='#fff'
      }
      for(let i=0; i<skillBox.length; i++){
        skillBox[i].style.backgroundColor='#5b5b5b'
      }
      for(let i=0; i<contributeSpan.length; i++){
        contributeSpan[i].style.backgroundColor='#fff'
        contributeSpan[i].style.color='black'
      }
      for(let i=0; i<bubblesSpan.length; i++){
        bubblesSpan[i].style.color='black'
      }
      for(let i=0; i<projectInfo.length; i++){
        projectInfo[i].style.backgroundColor='#5b5b5b'
        projectInfo[i].style.boxShadow ='rgba(0, 0, 0, 0.4) 0px 2px 3px, rgba(0, 0, 0, 0.3) 0px 7px 10px -2px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset'
      }
      for(let i=0; i<projectBtn.length; i++){
        projectBtn[i].style.borderColor ='#fff'
      }
      for(let i=0; i<modal_P.length; i++){
        modal_P[i].style.color='#334455'
      }
      for(let i=0; i<modal_Ul.length; i++){
        modal_Ul[i].style.color='black'
      }
      for(let i=0; i<modal_A.length; i++){
        modal_A[i].style.color='cornflowerblue'
      }
      for(let i=0; i<modalH3.length; i++){
        modalH3[i].style.color='black'
      }
      for(let i=0; i<contactLi.length; i++){
        contactLi[i].style.color='black'
      }
      for(let i=0; i<pageNav.length; i++){
        pageNav[i].addEventListener('mouseenter',function(){
          this.style.backgroundColor= '#fff'
          this.children[0].style.color='black'
        })
        pageNav[i].addEventListener('mouseleave',function(){
          this.style.backgroundColor= 'rgba(0, 113, 227, 0.8)'
          this.children[0].style.color='#fff'
        })
      }


      document.querySelector('.btn_txt').classList.add('mode')  
      
      state = true
    } else {
      this.style.transform = 'translateX(0px)'
      this.style.backgroundColor ='#fff'
      modBox.style.backgroundColor = '#eee'
      modeInfo.innerHTML = '&#127774;'
      document.documentElement.classList.remove('dark')

      document.querySelector('#page01').style.backgroundColor='#E8EBF3'
      document.querySelector('#page02').style.backgroundColor='#fff'
      document.querySelector('#page03').style.backgroundColor='#fff'
      document.querySelector('#page04').style.backgroundColor='#fff'
      document.querySelector('#page05').style.backgroundColor='#fff'
      document.querySelector('.main_contents_sonny').style.backgroundColor='#fff'
      document.querySelector('.my_info').style.backgroundColor='#eee'
      document.querySelector('.my_promise').style.backgroundColor='#eee'
      document.querySelector('#skill_root01').style.color='black'
      document.querySelector('#skill_root02').style.color='black'
      document.querySelector('#skill_root03').style.color='black'
      document.querySelector('#skill_root04').style.color='black'
      document.querySelector('.modal_main h3').style.color='black'
      document.querySelector('.notify').style.color='#334455'
    

      
      for(let i=0; i<aChange.length; i++){
        aChange[i].style.color='black'
      }
      for(let i=0; i<menuA.length; i++){
        menuA[i].style.color='#fff'
      }
      for(let i=0; i<liChange.length; i++){
        liChange[i].style.backgroundColor='#fff'
      }
      for(let i=0; i<lineChange.length; i++){
        lineChange[i].style.backgroundColor='black'
      }
      for(let i=0; i<skillBox.length; i++){
        skillBox[i].style.backgroundColor='#fff'
      }
      for(let i=0; i<contributeSpan.length; i++){
        contributeSpan[i].style.backgroundColor='#fff'
        contributeSpan[i].style.color='black'
      }
      for(let i=0; i<bubblesSpan.length; i++){
        bubblesSpan[i].style.color='black'
      }
      for(let i=0; i<projectInfo.length; i++){
        projectInfo[i].style.backgroundColor='#fff'
        projectInfo[i].style.boxShadow='rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
      }
      for(let i=0; i<projectBtn.length; i++){
        projectBtn[i].style.borderColor = 'rgba(0, 113, 227, 0.8)';
      }
      for(let i=0; i<modal_P.length; i++){
        modal_P[i].style.color='#334455'
      }
      for(let i=0; i<modal_Ul.length; i++){
        modal_Ul[i].style.color='black'
      }
      for(let i=0; i<modal_A.length; i++){
        modal_A[i].style.color='cornflowerblue'
      }
      for(let i=0; i<modalH3.length; i++){
        modalH3[i].style.color='black'
      }
      for(let i=0; i<contactLi.length; i++){
        contactLi[i].style.color='black'
      }
      for(let i=0; i<pageNav.length; i++){
        pageNav[i].addEventListener('mouseenter',function(){
          this.style.backgroundColor= 'rgba(0, 113, 227, 0.8)'
        })
        pageNav[i].addEventListener('mouseleave',function(){
          this.style.backgroundColor= '#fff'
          this.children[0].style.color='#fff'
        })
      }

      document.querySelector('.btn_txt').classList.remove('mode')
     
      state = false
    }
  })

  // day night mode hide&show 
  let modeBtnControl = document.querySelector('#main_chk')
  modeBtnControl.addEventListener('click',function(){
    if(state) {
      document.querySelector('.change_mode').style.zIndex = 1
      state = false
    }else{
      document.querySelector('.change_mode').style.zIndex = -1
      state = true
    }
  })
})

$(function(){
  // page 이동시 menu_follow 하는 이벤트
  let menuBtn = $('.follow_menu li')
  let menuColor = $('.follow_menu li a')
  let page = $('.wrap section')
  $('.follow_menu').css('top', $(window).height()/2 - $('.follow_menu').height()/2);

  menuBtn.click(function(){   
    let target = $(this);
    let i = target.index();

    let targetPage = page.eq(i);
    let point = targetPage.offset().top;
    $('html, body').stop().animate({scrollTop : point},1000)

  })//quick_btn click event


  $('section').mousewheel(function(e, delta){
    if(delta > 0) {
      let prev = $(this).prev().offset().top;
      $('html, body').stop().animate({scrollTop: prev},1000)
    }else if(delta < 0) {
      let next = $(this).next().offset().top;
      $('html, body').stop().animate({scrollTop: next},1000)
    }
  }) // 스크롤 시 한페이지씩 내려가는 이벤트
  

  $(window).scroll(function(){
    /* 1 page scroll event */
    page.each(function(){
      let pagePoint = $(window).scrollTop(); 
      let target =$(this); 
      let i = target.index();
      if(pagePoint >= target.offset().top){
        menuColor.removeClass('deco');
        menuColor.eq(i).addClass('deco');
      }
    })
   

    
    /* 2 page scroll event */    
    if($(this).scrollTop() == $('#page02').offset().top){
      setTimeout(()=>{
        $('.oner_img_line01').css({
          width: '99%'
        },1000)
        $('.oner_img_line02').css({
          height: '99%'
        },1000)
        $('.oner_img_line03').css({
          width: '99%'
        },1000)
        $('.oner_img_line04').css({
          height: '99%'
        },1000)
        setTimeout(() => {
          $('.info_line01').css({
            width: '99%'
          },1000)
          $('.info_line02').css({
            height: '99%'
          },1000)
          $('.info_line03').css({
            width: '99%'
          },1500)
          $('.info_line04').css({
            height: '99%'
          },1000)
            setTimeout(() => {
              $('.mypromise_line01').css({
                width: '99%'
              },1000)
              $('.mypromise_line02').css({
                height: '99%'
              },1000)
              $('.mypromise_line03').css({
                width: '99%'
              },1000)
              $('.mypromise_line04').css({
                height: '99%'
              },1000)
            }, 500)
          }, 500)
      },300)
    
     
    }else {
      $('.oner_img_line01').css({width:0,height:1})
      $('.oner_img_line03').css({width:0,height:1})
      $('.info_line01').css({width:0,height:1})
      $('.info_line03').css({width:0,height:1})
      $('.mypromise_line01').css({width:0,height:1})
      $('.mypromise_line03').css({width:0,height:1})

      $('.oner_img_line02').css({width:1,height:0})
      $('.oner_img_line04').css({width:1,height:0})
      $('.oner_img_line05').css({width:1,height:0})
      $('.info_line02').css({width:1,height:0})
      $('.info_line04').css({width:1,height:0})
      $('.info_line05').css({width:1,height:0})
      $('.mypromise_line02').css({width:1,height:0})
      $('.mypromise_line04').css({width:1,height:0})
    }
  }) // 각 페이지가 화면에 도착했을 때 일어나는 이벤트


  /* 1 page typing event  */
  var typingBool = false; 
  var typingIdx=0; 
  var liIndex = 0;
  var liLength = $(".typing-txt>ul>li").length;
  
  // 타이핑될 텍스트를 가져온다 
  var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
  //liIndex 인덱스로 구분해 한줄씩 가져옴
  
  typingTxt=typingTxt.split(""); // 한글자씩 잘라 배열로만든다
  
  if(typingBool==false){ // 타이핑이 진행되지 않았다면 
      typingBool=true; 
      var tyInt = setInterval(typing,100); // 반복동작 
  } 
       
  function typing(){ 
    $(".typing ul li").removeClass("on");
    $(".typing ul li").eq(liIndex).addClass("on");
    //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.
    
    if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
       $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
       typingIdx++; 
    }else{ //한문장이끝나면
       if(liIndex<liLength-1){
       //다음문장으로  가기위해 인덱스를 1증가
         liIndex++; 
       //다음문장을 타이핑하기위한 셋팅
          typingIdx=0;
          typingBool = false; 
          typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
         
       //다음문장 타이핑전 1초 쉰다
           clearInterval(tyInt);
            //타이핑종료
       
           setTimeout(function(){
             //1초후에 다시 타이핑 반복 시작
             tyInt = setInterval(typing,100);
           },1000);
          } else if(liIndex==liLength-1){
            
           //마지막 문장까지 써지면 반복종료
             clearInterval(tyInt);
            
            //1초후
            setTimeout(function(){
              //사용했던 변수 초기화
              typingBool = false; 
              liIndex=0;
              typingIdx=-0;
              
              //첫번째 문장으로 셋팅
              typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
                  //타이핑 결과 모두 지우기
              $(".typing ul li").html("")
                //반복시작
                tyInt = setInterval(typing,100);
            }, 1000);
          }
      } 
  }  
})


/* page03 skill event  */
const rootAll = document.getElementById('skill_root01')
const rootLang = document.getElementById('skill_root02')
const rootFront = document.getElementById('skill_root03')
const rootEtc = document.getElementById('skill_root04')

for(let i=0; i<all.length; i++){
  let skillBox = document.createElement('div')
  skillBox.setAttribute('class','skill_box')

  let skillIcon = document.createElement('div')
  skillIcon.setAttribute('class','skill_icon')

  let skillImg = document.createElement('img')
  skillImg.setAttribute('src',all[i].src)
  skillImg.setAttribute('alt',all[i].name)

  let skillName = document.createElement('p')
  let skillNameP = document.createTextNode(all[i].name)
  
  let skillExplain = document.createElement('ul')
  skillExplain.setAttribute('class','skill_explain')

  let skillExplainLi01 = document.createElement('li')
  let skillExplainLi01txt = document.createTextNode(all[i].info01)

  let skillExplainLi02 = document.createElement('li')
  let skillExplainLi02txt = document.createTextNode(all[i].info02)
  
  skillBox.appendChild(skillIcon)
  skillBox.appendChild(skillExplain)
  skillIcon.appendChild(skillImg)
  skillIcon.appendChild(skillName)
  skillName.appendChild(skillNameP)
  skillExplain.appendChild(skillExplainLi01)
  skillExplain.appendChild(skillExplainLi02)
  skillExplainLi01.appendChild(skillExplainLi01txt)
  skillExplainLi02.appendChild(skillExplainLi02txt)

  rootAll.appendChild(skillBox)
}


for(let i=0; i<language.length; i++){
  let skillBox = document.createElement('div')
  skillBox.setAttribute('class','skill_box')

  let skillIcon = document.createElement('div')
  skillIcon.setAttribute('class','skill_icon')
 
  let skillImg = document.createElement('img')
  skillImg.setAttribute('src',language[i].src)
  skillImg.setAttribute('alt',language[i].name)

  let skillName = document.createElement('p')
  let skillNameP = document.createTextNode(language[i].name)
  
  let skillExplain = document.createElement('ul')
  skillExplain.setAttribute('class','skill_explain')

  let skillExplainLi01 = document.createElement('li')
  let skillExplainLi01txt = document.createTextNode(language[i].info01)
 
  let skillExplainLi02 = document.createElement('li')
  let skillExplainLi02txt = document.createTextNode(language[i].info02)
  
  skillBox.appendChild(skillIcon)
  skillBox.appendChild(skillExplain)
  skillIcon.appendChild(skillImg)
  skillIcon.appendChild(skillName)
  skillName.appendChild(skillNameP)
  skillExplain.appendChild(skillExplainLi01)
  skillExplain.appendChild(skillExplainLi02)
  skillExplainLi01.appendChild(skillExplainLi01txt)
  skillExplainLi02.appendChild(skillExplainLi02txt)

  rootLang.appendChild(skillBox)
}



for(let i=0; i<frontEnd.length; i++){
  let skillBox = document.createElement('div')
  skillBox.setAttribute('class','skill_box')

  let skillIcon = document.createElement('div')
  skillIcon.setAttribute('class','skill_icon')

  let skillImg = document.createElement('img')
  skillImg.setAttribute('src',frontEnd[i].src)
  skillImg.setAttribute('alt',frontEnd[i].name)

  let skillName = document.createElement('p')
  let skillNameP = document.createTextNode(frontEnd[i].name)
 
  let skillExplain = document.createElement('ul')
  skillExplain.setAttribute('class','skill_explain')

  let skillExplainLi01 = document.createElement('li')
  let skillExplainLi01txt = document.createTextNode(frontEnd[i].info01)

  let skillExplainLi02 = document.createElement('li')
  let skillExplainLi02txt = document.createTextNode(frontEnd[i].info02)

  skillBox.appendChild(skillIcon)
  skillBox.appendChild(skillExplain)
  skillIcon.appendChild(skillImg)
  skillIcon.appendChild(skillName)
  skillName.appendChild(skillNameP)
  skillExplain.appendChild(skillExplainLi01)
  skillExplain.appendChild(skillExplainLi02)
  skillExplainLi01.appendChild(skillExplainLi01txt)
  skillExplainLi02.appendChild(skillExplainLi02txt)

  rootFront.appendChild(skillBox)
}


for(let i=0; i<etc.length; i++){
  let skillBox = document.createElement('div')
  skillBox.setAttribute('class','skill_box')

  let skillIcon = document.createElement('div')
  skillIcon.setAttribute('class','skill_icon')

  let skillImg = document.createElement('img')
  skillImg.setAttribute('src',etc[i].src)
  skillImg.setAttribute('alt',etc[i].name)
  

  let skillName = document.createElement('p')
  let skillNameP = document.createTextNode(etc[i].name)
 
  let skillExplain = document.createElement('ul')
  skillExplain.setAttribute('class','skill_explain')

  let skillExplainLi01 = document.createElement('li')
  let skillExplainLi01txt = document.createTextNode(etc[i].info01)
  
  let skillExplainLi02 = document.createElement('li')
  let skillExplainLi02txt = document.createTextNode(etc[i].info02)
  
  skillBox.appendChild(skillIcon)
  skillBox.appendChild(skillExplain)
  skillIcon.appendChild(skillImg)
  skillIcon.appendChild(skillName)
  skillName.appendChild(skillNameP)
  skillExplain.appendChild(skillExplainLi01)
  skillExplain.appendChild(skillExplainLi02)
  skillExplainLi01.appendChild(skillExplainLi01txt)
  skillExplainLi02.appendChild(skillExplainLi02txt)

  rootEtc.appendChild(skillBox)
}


/* page04 event  */

  /* 버튼 슬라이드 */
  const slider = document.querySelector('.project_slider') // 움직일 주체
  const projectBox = document.querySelectorAll('.project_container') // 내용물
  const projectBtn = document.querySelector('.project_btnbox')


  const containerWidth = projectBox[0].clientWidth + 340
  const sliderWidth = containerWidth * projectBox.length
  slider.style.width = `${sliderWidth}px`

  let currentIndex = 0
  let translate = 0

  function moveSlide(e) {
    if(e.target.className === 'page04_next') {
      if(currentIndex !== projectBox.length -1){
        translate -= containerWidth
        slider.style.transform =`translateX(${translate}px)`
        $('.page04_prev').fadeIn(1000)
        currentIndex += 1
      }
    }else if(e.target.className === 'page04_prev') {
      if(currentIndex !== 0) {
        translate += containerWidth
        slider.style.transform = `translateX(${translate}px)`
        currentIndex -= 1
      }
      if(currentIndex == 0){
        $('.page04_next').fadeIn(1000)
        $('.page04_prev').fadeOut(1000)
      }
    }
  }

  projectBtn.addEventListener('click',moveSlide)
  


/* page04 scroll 이벤트 */

/* contribute 제어 */
const planning1 = $('.project01_info > #contribute > #planning > span')
const design1 = $('.project01_info > #contribute > #design > span')
const dev1 = $('.project01_info > #contribute > #dev > span')
const planning2 = $('.project02_info > #contribute > #planning > span')
const design2 = $('.project02_info > #contribute > #design > span')
const dev2 = $('.project02_info > #contribute > #dev > span')
const planning4 = $('.no_project04 > .project02_info > #contribute > #planning > span')
const design4 = $('.no_project04 > .project02_info > #contribute > #design > span')
const dev4 = $('.no_project04 > .project02_info > #contribute > #dev > span')
/* 말풍선 제어 */
const bubbleP1 = $('.project01_info > #bubbles > span:nth-child(1)')
const bubbleP2 = $('.project02_info >#bubbles > span:nth-child(1)')
const bubbleD1 = $('.project01_info >#bubbles > span:nth-child(2)')
const bubbleD2 = $('.project02_info >#bubbles > span:nth-child(2)')
const bubbleDev1 = $('.project01_info >#bubbles > span:nth-child(3)')
const bubbleDev2 = $('.project02_info >#bubbles > span:nth-child(3)')

/* project 기여도 마우스 이벤트 */
const firstSpan = (callback) =>{
  setInterval(() => {
    planning1.css({'height' : '100%'})
    planning2.css({'height' : '50%'})
    planning4.css({'height': '100%'})
    callback()
    setTimeout(() => {
      bubbleP1.css({'opacity':'1','scale':'1'})
      bubbleP2.css({'opacity':'1','scale':'1'})
    }, 1200)
  }, 1600)
}

const secondSpan = (callback)=>{
  setTimeout(() => {
    design1.css({'height' : '100%'})
    design2.css({'height' : '50%'})
    design4.css({'height' : '100%'})
    callback()
    setTimeout(() => {
      bubbleD1.css({'opacity':'1','scale':'1'})
      bubbleD2.css({'opacity':'1','scale':'1'})
    }, 1200)
  }, 1500)
}

const thirdSpan = (callback)=>{
  setTimeout(() => {
    dev1.css({'height' : '100%'})
    dev2.css({'height' : '100%'})
    dev4.css({'height' : '100%'})
    callback()
    setTimeout(() => {
      bubbleDev1.css({'opacity':'1','scale':'1'})
      bubbleDev2.css({'opacity':'1','scale':'1'})
    }, 1200)
  }, 1500)
}

$(window).scroll(function(){

  if($(this).scrollTop() == $('#page04').offset().top) {
    $('.project01').css({left:0})
    $('.project01_info').css({right:10})
    $('.page04_next').fadeIn(1000)

    setTimeout(() => {
      $('.project02').css({left:0})
      $('.project02_info').css({right:10})
    }, 300)

    firstSpan(function(){
      secondSpan(function(){
        thirdSpan(function(){
        })
      })
    })
  }else {
    $('.project01').css({left:-610})
    $('.project01_info').css({right:-540})

    $('.project02').css({left:-610})
    $('.project02_info').css({right:-540})

    $('.page04_next').fadeOut()
    /* project 기여도 리셋 이벤트 */
    planning1.css({'height' : '0%'})
    design1.css({'height' : '0%'})
    dev1.css({'height' : '0%'})
    planning2.css({'height' : '0%'})
    design2.css({'height' : '0%'})
    dev2.css({'height' : '0%'})
    /* project 기여도 말풍선 리셋이벤트 */
    bubbleP1.css({'opacity':'0','scale':'0'})
    bubbleP2.css({'opacity':'0','scale':'0'})
    bubbleD1.css({'opacity':'0','scale':'0'})
    bubbleD2.css({'opacity':'0','scale':'0'})
    bubbleDev1.css({'opacity':'0','scale':'0'})
    bubbleDev2.css({'opacity':'0','scale':'0'})
  }
})

// 새로고침되어도 나타나게하기
$(window).scrollTop(function(){
  if($(this).scrollTop() == $('#page04').offset().top) {
    $('.project01').css({left:0})
    $('.project01_info').css({right:10})
    $('.page04_next').fadeIn(1000)

    setTimeout(() => {
      $('.project02').css({left:0})
      $('.project02_info').css({right:10})
    }, 300)

    /* project 기여도 마우스 이벤트 */
    firstSpan(function(){
      secondSpan(function(){
        thirdSpan(function(){
        })
      })
    })

  }else {
    $('.project01').css({left:-610})
    $('.project01_info').css({right:-540})

    $('.project02').css({left:-610})
    $('.project02_info').css({right:-540})

    $('.page04_next').fadeOut()

    /* project 기여도 마우스 이벤트 */ 
    planning1.css({'height' : '0%'})
    design1.css({'height' : '0%'})
    dev1.css({'height' : '0%'})
    planning2.css({'height' : '0%'})
    design2.css({'height' : '0%'})
    dev2.css({'height' : '0%'})
    /* project 기여도 말풍선 리셋이벤트 */
    bubbleP1.css({'opacity':'0','scale':'0'})
    bubbleP2.css({'opacity':'0','scale':'0'})
    bubbleD1.css({'opacity':'0','scale':'0'})
    bubbleD2.css({'opacity':'0','scale':'0'})
    bubbleDev1.css({'opacity':'0','scale':'0'})
    bubbleDev2.css({'opacity':'0','scale':'0'})
  }
})


// 모달창 제어

document.addEventListener("DOMContentLoaded",()=>{

  const modal01Open = document.querySelector('.no_project01 > .project01> .page_nav .modal')
  const modal02Open = document.querySelector('.no_project02 > .project02> .page_nav .modal')
  const modalOff = document.querySelectorAll('.modal_off')
  const modal01 = document.querySelector('.modal_project01')
  const modal02 = document.querySelector('.modal_project02')


  modal01Open.addEventListener('click',()=>{
    modal01.style.scale='1'
    
    window.onkeyup = function(event){
      if(event.keyCode == 27){
        modal01.style.scale='0'
      }
    }
  })
  modal02Open.addEventListener('click',()=>{
    modal02.style.scale='1'

    window.onkeyup = function(event){
      if(event.keyCode == 27){
        modal02.style.scale='0'
      }
    }
  })


  for(let i=0; i<modalOff.length; i++){
    modalOff[i].addEventListener('click',()=>{
      modal01.style.scale='0'
      modal02.style.scale='0'
    })
  }


  // project01. 나아짐 모바일 open
    const mobilebtn = document.querySelectorAll('#mobile_open')
  
    for(let i=0; i<mobilebtn.length; i++){
      mobilebtn[i].addEventListener("click",function(){
        window.open('https://ssoonnyy.github.io/project01_Naagym/mobile_ver/index.html','_blank','menubar=no, resizable=yes, toolbar=no, location=no, status=no, width=390,height=844,top=150,left=750')
     })
    }

})



