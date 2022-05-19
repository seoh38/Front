// 이벤트 모델의 종류
// 1) 고전 이벤트 모델
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

// 이벤트 속성에 직접 이벤트 핸들러를 준다.
btn1.onclick = () => {
    alert('btn1이 클릭되었습니다.');
};

btn2.onclick = () => {
    alert('btn2이 클릭되면서 btn1의 이벤트를 제거하였습니다.');

    // btn1의 이벤트 제거
    btn1.onclick = null;
};

// 2) 인라인 이벤트 모델
function test1() {

    alert(' 안녕?????');
}; 

//3) 표준 이벤트 모델
// 이벤트 여러개 걸어보기 (click, mouseEnter, mouseOut)
let btn3 = document.getElementById('btn3');

// clickEventHandler()를 넣어주면 함수 호출임 (이벤트 호출이 아님)
// return 값이 없는 결과값을 넘겨주는 거라서 undefined가 나옴
// 매개값이 없기 때문에 페이지를 열자마자 alert()구문이 먼저 실행된다. 
btn3.addEventListener('click', clickEventHandler());

// 콜백함수를 전달하려면 함수에 대한 정보를 전달해줘야한다.
// 함수의 이름만 전달해주면 된다!!!!!!!!(함수명 : 함수에 대한 정보)
// btn3.addEventListener('click', clickEventHandler);

btn3.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red'; 

    console.log(event);
});

btn3.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'orange';

    console.log(event);
});

function clickEventHandler() {
    alert('표준 이벤트 모델');
};

// 이벤트가 발생한 해당 요소 객체에 접근하는 방법
// 1) 고전 이벤트 방식
let btn4 = document.getElementById('btn4'); 

// btn4.onclick = function(event) {
//     console.log(event.target); // 세 가지 다 똑같은게 출력됨
//     console.log(window.event.target); 
//     // this는 객체를 자신을 가리킨다.
//     // 콜백함수로 지정해 놓은 경우에는 this로 객체에 접근이 가능하다.
//     console.log(this);
// };

btn4.onclick = (event) =>{
    console.log(event.target); // 세 가지 다 똑같은게 출력됨
    console.log(window.event.target); 

    // 애로우 로 바꾸면 this는 현재 작성해놓은 객체가 나온다.(window가 나옴)
    // 일반 function과 애로우 function에서 this의 사용법이좀 다름
    console.log(this);
};

// 2) 인라인 방식
function test2(event) {
    console.log(event);     // 매개값으로는 이벤트 객체를 가져올 수 없다.
    console.log(window.event.target); 
    console.log(this);      // window 객체를 가리킨다.
};

// 3) 표준 이벤트 방식
let btn5 = document.getElementById('btn5'); 

// 고정 이벤트 방식과 크게 다르지 않다.
// btn5.addEventListener('click', function(event) {
//     console.log(event.target);     
//     console.log(window.event.target); 
//     console.log(this); 
// });

btn5.addEventListener('click', (event) => {
    console.log(event.target);     
    console.log(window.event.target); 
    console.log(this); // window 가 나온다.(애로우 function일 경우)
});

// 태그별 기본적으로 가지고 있는 이벤트 제거
// 1) 기본 이벤트 제거 1(인라인으로 제거)
function test3() {
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;

    console.log(pass1);
    console.log(pass2);

    if(pass1 !== pass2) {
        alert('비밀번호가 일치하지 않습니다.');

        return false;
    }
};

// 2) 기본 이벤트 제거 2
let submit = document.getElementById('submit');

// submit.onclick = () => {
//     alert('아이디를 정상적으로 입력해주세요.');

//     return false;
// };

submit.addEventListener('click', (event) => {
    let userId = document.getElementById('userId').value;
    let regExp = /^[a-zA-Z0-9]{5,12}$/; // ????

    console.log(userId);

    // 영문자, 숫자로만 총 5~ 12자 사이로 입력해주세요.
    if(!regExp.test(userId)) {
        alert('아이디를 정상적으로 입력해주세요.');
        
        event.preventDefault();
    }
});