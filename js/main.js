'use strict'

/** 애니메이션 나타고 사라지고 */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top')

// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)  
/*  window - 프로젝트가 출력되는 화면 자체를 의미 
    화면이 스크롤되면 익명의 함수를 실행하겠다. */   // lodash cdn 라이브러리를 이용해 _.throttle를 사용해 부하를 제어해줌 
window.addEventListener('scroll', _.throttle(function() {   // _.throttle(함수, 시간) 괄호 안의 함수가 몇초(시간)에 한 번 실행되게 설정
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500 ){       // scrollY - 화면이 스크롤 될 때 마다 윈도우라는 객체부분에 있는 스크롤y라는 속성부분의 값이 그때그때 갱신됨 */
    // Badge 요소 숨기기
    gsap.to(badgeEl, .6, {          // gsap.to(요소, 지속시간, 옵션);  // badgeEl.style.display = 'none';
      opacity: 0,                   // 보이지만 않을뿐 클릭이 되기 때문에
      display: 'none'                // display로 진짜 사라지게 만들어 줌
    })
    // 상단으로 스크롤 버튼 보이기!
    gsap.to('#to-top', .2, {
    x: 0
    })
  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 상단으로 스크롤 버튼 숨기기!
    gsap.to('#to-top', .2, {
      x: 100
    })
  }
}, 300))
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

/** opacity 속성처럼 값을 숫자로 입력하는 속성들은,
 * 전환 효과(transition 속성이나 gsap 라이브러리 등)를 통해
 * 요소의 전/후 상태를 중간 숫자으 ㅣ값으로 자연스럽게 만들어 줄 수 있지만,
 * display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에,
 * 자연스러운 전환 효과를 적용할 수 없다. */


/* 순서대로 나타나는 기능 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in')  // fade-in요소 4개가 실행(.7)/ 순차실행((index+1))
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {                  // fadeEl라는 요소부분에 애니메이션을 1초동안 실행할 건데 몇초 뒤에 실행할 것인지
    delay: (index + 1) *.7,             // delay(지연시간)을 사용해 표시 /{.7만 사용할 경우 한번에 나타남} {(index + 1)를 사용하면 순차적으로 나타남 }
    opacity: 1
  });                                   // gsap.to(요소, 지속시간, 옵션);
});



/* SWIPER */
/*** 슬라이드 요소 관리*/
// new Swiper(선택자, {옵션})
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})

/* PROMOTION SWIPER */
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' = 수평슬라이드, but 이미 direction의 기본값으로 지정되어 있다
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,    // 반복 재생 여부
  autoplay: {    // 자동 재생 여부
    delay: 5000  // 5초마다 슬라이드 바뀜
  },
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});


/* AWARDS SWIPER */
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})


/** Promotion 슬라이드 토글 기능*/
const promotionEl = document.querySelector('.promotion')                // 슬라이드 영역 요소 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')  // 슬라이드 영역를 토글하는 버튼 검색!
let isHidePromotion = false       // 슬라이드 영역 숨김 여부 기본값!
promotionToggleBtn.addEventListener('click', function () {    // 토글 버튼을 클릭하면,
  isHidePromotion = !isHidePromotion    // 슬라이드 영역 숨김 여부를 반댓값으로 할당!   /* ! = ! 뒤에 붙어있는 값이 반대가 되게 만듦 */ isHidePromotion값이 false이면 !를 통해서 반대 값인 true가 isHidePromotion에 들어간다 (반대로 true일 경우 false이 할당) 즉, 어떤 특정 변수의 값을 지속적으로 반대값으로 전환시켜주는 코드
    if (isHidePromotion) {                // 요소를 숨겨야 하면,
      promotionEl.classList.add('hide')
    } else {                               // 요소가 보여야 하면,
      promotionEl.classList.remove('hide')
    }
})


/**
 * 부유하는 요소 관리
 */
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  // gasp.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {   // 옵션
      delay: random(0, delay),  // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
      y: size,                  // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
      repeat: -1,               // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
      yoyo: true,               // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Power1.easeInOut    // Easing 함수 적용.
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({                    // 감시할 장면(Scene)을 추가
      triggerElement: spyEl,    // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8           // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

