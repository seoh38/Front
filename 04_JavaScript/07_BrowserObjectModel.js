// window 객체
// 1) window.open()
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    // window.open(); // 새로운 탭(blank 상태)이 열림
    // window.open('http://www.naver.com'); // 새 탭에 네이버가 열림

    // 해당하는 창이 이미 열려있으면 새로운 주소를 입력해도 열린 차을 이용한다.
    // console 창에 window.open('http://www.google.com', 'naver'); 입력 테스트
    // window.open('http://www.naver.com', 'naver'); // 창 이름('naver')

    // 특성의 경우 브라우저마다 다르게 동작하기 때문제 정상적으로 동작하는지는 꼭 확인해야한다.
    window.open('http://www.naver.com', 'naver', 'width=500', 'height=600', 'resizable=no');
});

// 2) window.setTimeout()
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    let timerId = 0;
    let newWindow = window.open();

    newWindow.alert('3초후에 이 페이지는 종료됩니다.'); // 새로운 창을 열면서 alert()가 열린다.

    // newWindow를 열어준 윈도우를 닫아준다.
    // newWindow.opener.close();

    // 일정시간 후에 콜백함수를 한 번 실행
    timerId = window.setTimeout(()=>{
        newWindow.close();
    }, 3000);

    console.log(timerId);

    // 타이머 id를 전달하면 해당 id의 타이머를 취소할 수 있다.
    // clearTimeout(timerId);
});

// 3) window.setInterval()
let timerId = 0; // timerId를 공유해야 하기 때문에 전역변수로 설정
let btnstart = document.getElementById('btnStart');
let btnstop = document.getElementById('btnStop');

btnstart.addEventListener('click', () => {
    let area = document.getElementById('area1');

    // 일정 시간마다 콜백함수를 반복 실행
    // <span> 태그로 아이디를 지정해서 따로 스타일을 지정해줄 수 있다.
    timerId = window.setInterval(() =>{
        let date = new Date();

        area.innerHTML = `<span id='timer'>${date.getHours()} : ${date.getMinutes()} : <span id='second'>${date.getSeconds()}</span></span>`;
    }, 1000);
});

btnstop.addEventListener('click', () => {
    let area = document.getElementById('area1');

    console.log(timerId);

    window.clearInterval(timerId);
    area.innerHTML = '';
});

// BOM
// 1) location 객체
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click',() => {
    let area = document.getElementById('area2');

    area.innerHTML = '<h4>location 객체</h4>';
    
    for (const key in location) {
        area.innerHTML += `<b>key</b> : ${key}<br><b>value</b> : ${location[key]} <br>`;
    }
});

// navigator 객체
let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', () => {
    let area = document.getElementById('area3');

    console.log(navigator);

    area.innerHTML = '<h4>navigator 객체</h4>';

    for (const key in navigator) {
        area.innerHTML += `<b>key</b> : ${key}<br><b>value</b> : ${navigator[key]} <br>`;
    }
});

// screen 객체
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', () => {
    let area = document.getElementById('area4');

    console.log(screen);

    area.innerHTML = '<h4>navigator 객체</h4>';

    for (const key in screen) {
        area.innerHTML += `<b>key</b> : ${key} <br><b>value</b> : ${screen[key]} <br>`;
    }
});