/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function(){  
  // Logic..
  searchInputEl.focus(); // input요소를 focus하겠다. focus 강제적용해주는 명령어
  // search라는 클래스를 가진 div요소를 클릭하면 함수가 실행되는데 
  // 그 함수 내용이 인풋요소에 포커스 하라는 뜻
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function(){       // searchInputEl 부분에 포커스가 되면 두번째 인수로 작용하는 함수가 실행이 될거다.
  searchEl.classList.add( 'focused');                     // 특정 요소에 클래스 정보를 가지고있는 객체에서 어떤 클래스 내용을 추가(add) 하겠다.
  searchInputEl.setAttribute('placeholder', '통합검색')   // searchInputEl부분에 html의 속성을 지정할 때 쓰는 메소드
}); 

// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
// 포커스가 안 되어 있는 상태일때 포커스 클래스를 지우기 위한 구문
searchInputEl.addEventListener('blur', function(){        // blur - 포커스가 해제되었을때를 의미 
  searchEl.classList.remove( 'focused');                  // add <-> remove
  searchInputEl.setAttribute('placeholder', '')
})




/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()

