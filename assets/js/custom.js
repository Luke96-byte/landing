$(function(){
   //헤더 시계
   function updateClock() {
    const clockElement = document.querySelector('.clock');
    
    const timezoneOffset = parseInt(clockElement.getAttribute('timezone'), 10);
    
    const now = new Date();
    
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000); //
    const localTime = new Date(utc + (3600000 * timezoneOffset));
    
    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    const seconds = localTime.getSeconds().toString().padStart(2, '0');
    
    clockElement.innerHTML = `${hours}<span>:</span>${minutes}<span>:</span>${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();

//스크롤 트리거

//인트로
Intro = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-intro",//기준지점
        start:"-20% 0%", //[트리거시작점 ][윈도우 시작 지점]
        end:"80% 45%",//[트리거끝지점 ][윈도우 끝 지점]
        // markers:true,
        scrub:2,
        duration:2
    }
})



Intro.from(".sc-intro .char",{
    yPercent:150,
    
},'a')
Intro.from(".sc-intro .right .text",{
    yPercent:150,
},'a')

//프로젝트
seoul = gsap.timeline({
    scrollTrigger:{
        trigger:".seoul",//기준지점
        start:"-20% 50%", //[트리거시작점 ][윈도우 시작 지점]
        end:"-60% 0%",//[트리거끝지점 ][윈도우 끝 지점]
        // markers:true,
        scrub:1,
    }
})



seoul.from(".seoul .title",{
    xPercent:-200,
    
},'a')
seoul.from(".seoul .img-area",{
    xPercent:200,
},'a')

//
andar = gsap.timeline({
    scrollTrigger:{
        trigger:".andar",//기준지점
        start:"-50% 50%", //[트리거시작점 ][윈도우 시작 지점]
        end:"0% 60%",//[트리거끝지점 ][윈도우 끝 지점]
        // markers:true,
        scrub:1,
    }
})



andar.from(".andar .title",{
    xPercent:-200,
    
},'b')
andar.from(".andar .img-area",{
    xPercent:200,
},'b')

//
wooah = gsap.timeline({
    scrollTrigger:{
        trigger:".wooah",//기준지점
        start:"-50% 50%", //[트리거시작점 ][윈도우 시작 지점]
        end:"0% 60%",//[트리거끝지점 ][윈도우 끝 지점]
        // markers:true,
        scrub:1,
    }
})



wooah.from(".wooah .title",{
    xPercent:-200,
    
},'c')
wooah.from(".wooah .img-area",{
    xPercent:200,
},'c')

//
mizzi = gsap.timeline({
    scrollTrigger:{
        trigger:".mizzi",//기준지점
        start:"-50% 50%", //[트리거시작점 ][윈도우 시작 지점]
        end:"0% 60%",//[트리거끝지점 ][윈도우 끝 지점]
        // markers:true,
        scrub:1,
    }
})



mizzi.from(".mizzi .title",{
    xPercent:-200,
    
},'d')
mizzi.from(".mizzi .img-area",{
    xPercent:200,
},'d')

//
progetta = gsap.timeline({
    scrollTrigger:{
        trigger:".progetta",//기준지점
        start:"-50% 50%", //[트리거시작점 ][윈도우 시작 지점]
        end:"0% 60%",//[트리거끝지점 ][윈도우 끝 지점]
        // markers:true,
        scrub:1,
    }
})



progetta.from(".progetta .title",{
    xPercent:-200,
    
},'e')
progetta.from(".progetta .img-area",{
    xPercent:200,
},'e')

//
oh = gsap.timeline({
    scrollTrigger:{
        trigger:".oh",//기준지점
        start:"-50% 50%", //[트리거시작점 ][윈도우 시작 지점]
        end:"0% 60%",//[트리거끝지점 ][윈도우 끝 지점]
        // markers:true,
        scrub:1,
    }
})



oh.from(".oh .title",{
    xPercent:-200,
    
},'f')
oh.from(".oh .img-area",{
    xPercent:200,
},'f')
//

nava = gsap.timeline({
    scrollTrigger:{
        trigger:".nava",//기준지점
        start:"-50% 50%", //[트리거시작점 ][윈도우 시작 지점]
        end:"0% 60%",//[트리거끝지점 ][윈도우 끝 지점]
        // markers:true,
        scrub:1,
    }
})



nava.from(".nava .title",{
    xPercent:-200,
    
},'e')
nava.from(".nava .img-area",{
    xPercent:200,
},'e')

//

etc = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-etc",//기준지점
        start:"-10% 60%", //[트리거시작점 ][윈도우 시작 지점]
        end:"0% 30%",//[트리거끝지점 ][윈도우 끝 지점]
        // markers:true,
        scrub:2,
        duration:2
    }
})



etc.from(".sc-etc .right .word .char",{
    yPercent:150,
    
},'a')
etc.from(".sc-etc .left .line .text",{
    yPercent:150,
},'a')


//마우스 커서
$(document).mousemove(function(e){
    xVal = e.clientX
    yVal = e.clientY

    gsap.to('.cursor',{
        x:xVal,
        y:yVal,
        duration: 0.1,
        ease: "power2.out"
    })
})

//

// gsap.to('.cursor span', {
//     x: -100,
//     duration: 5,
//     ease: 'linear',
//     repeat: -1
// });




})
