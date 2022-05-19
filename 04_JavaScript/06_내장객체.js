// Object 내장 객체
let btn1 = document.getElementById('btn1')

btn1.addEventListener('click', () => {
    // Object 객체 생성하는 방법
    let obj1 = {};
    let obj2 = new Object();
    let obj3 = {name: '변백현', height: 175};

    console.log(obj1);
    console.log(obj2);

    console.log(obj1 instanceof Object);
    console.log(obj2 instanceof Object);

    // hasOwnProperty() :매개값으로 전달되는 속성을 가지고 있는지 확인하는 메소드로 true나 false를 리턴한다.
    console.log('------------------------------------');
    console.log(obj3.hasOwnProperty('name'));
    console.log(obj3.hasOwnProperty('height'));
    console.log(obj3.hasOwnProperty('weight'));
    
    // propertyIsEnumerable(): for in 문을 통해 속성에 접근 가능 여부를 리턴한다.
    console.log('------------------------------------');
    console.log(obj3.propertyIsEnumerable('name'));

    for (const key in obj3) {
        console.log(`key: ${key}, value: ${obj3[key]}`);
    }

    // 아래구문 실행시 for in문을 통해 접근이 불가능하게 만든다. (enumerable:false)
    Object.defineProperty(obj3, 'name', {enumerable: false});

    console.log('------------------------------------');
    console.log(obj3.propertyIsEnumerable('name'));

    for (const key in obj3) {
        console.log(`key: ${key}, value: ${obj3[key]}`);
    }
});

// Number 객체
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click' , () => {
    let area = document.getElementById('area1');
    let num1 = 3141592;
    let num2 = Number(3.141592);
    let num3 = new Number(3.141592); //new로 감싸면 object 타입

    area.innerHTML += `num1의 값 ${num1}, num1 instanceof Number: ${num1 instanceof Number}, 
                        typeof(num1) : ${typeof(num1)} <br>`;
    area.innerHTML += `num22의 값 ${num2}, num2 instanceof Number: ${num2 instanceof Number}, 
                        typeof(num2) : ${typeof(num2)} <br>`;
    // new 연산자를 사용하면 객체타입을 반환하기 때문에 object 타입이 나온다.                   
    area.innerHTML += `num3의 값 ${num3}, num3 instanceof Number: ${num3 instanceof Number}, 
                        typeof(num3) : ${typeof(num3)} <br><br>`;

    // Number 메소드
    // toExponential() :지수 표기법으로 변경한 문자열을 리턴한다.
    area.innerHTML += `num1.toExponential() : ${num1.toExponential()}, typeof(num1.toExponential()): ${typeof(num1.toExponential())} <br>`;

    // toFixed(): 숫자를 반올림해서 문자열을 리턴한다.
    area.innerHTML += `num2.toFixed(2) : ${num2.toFixed(2)}, typeof(num2.toFixed(2)): ${typeof(num2.toFixed(2))} <br><br>`;

    // toPrecision(): 매개값으로 전달받은 자리수까지 유효하도록 나머지 자리수를 반올림하여 문자열로 리턴한다.
    area.innerHTML += `num3.toPrecision(): ${num3.toPrecision()}, 
                        typeof(num3.toPrecision()): ${typeof(num3.toPrecision())} <br>`;
    area.innerHTML += `num3.toPrecision(4): ${num3.toPrecision(4)}, 
                        typeof(num3.toPrecision(4)): ${typeof(num3.toPrecision(4))} <br>`;
    area.innerHTML += `num3.toPrecision(2): ${num3.toPrecision(2)}, 
                        typeof(num3.toPrecision(2)): ${typeof(num3.toPrecision(2))} <br>`;
    // num1 처럼 큰 값이면 지수표시를 한다.
    area.innerHTML += `num1.toPrecision(1): ${num1.toPrecision(1)}, 
                        typeof(num1.toPrecision(1)): ${typeof(num1.toPrecision(1))} <br>`;

});

//String 객체
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    let area = document.getElementById('area2');
    let str1 = 'javascript';
    let str2 =  new String('javascript');

    console.log(str1);
    console.log(str2);

    // 문자열을 태그로 감싸는 메소드
    area.innerHTML += `기본값: ${str1} <br><br>`; 
    area.innerHTML += `str1.bold(): ${str1.bold()} <br><br>`; 
    area.innerHTML += `str1.italics(): ${str1.italics()} <br><br>`; 
    area.innerHTML += `str1.fontcolor('red'): ${str1.fontcolor('red')} <br><br>`; 
    area.innerHTML += `str1.link(): ${str1.link('http://naver.com')} <br><br>`; 

});

// Date 객체
let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', () => {
    let area = document.getElementById('area3');

    // Date 객체를 생성하는 방법
    // 월은 0부터 시작! 11을 입력하면 december 출력된다.
    let date1 = new Date();
    let date2 = new Date(1636591327960);
    let date3 = new Date('2021/11/11/09:28:00'); // 날짜와 시간정보를 문자열로 전달 가능(형식이 있다.)
    let date4 = new Date(2021, 10, 11, 9, 31, 59); // 정수값으로 전달해주면 알아서 시간으로 찍어준다.

    console.log(date1);

    area.innerHTML = '';
    area.innerHTML += `date1 : ${date1} <br>`;
    area.innerHTML += `date2 : ${date2} <br>`;
    area.innerHTML += `date3 : ${date3} <br>`;
    area.innerHTML += `date4 : ${date4} <br><br>`;

    // Date 객체의 메소드 호출
    area.innerHTML += `${date1.getFullYear()} <br>`; // 현재 년도 출력
    area.innerHTML += `${date1.getMonth() + 1} <br>`; // 월을 나타내는 정수를 반환(월은 0부터 시작)
    area.innerHTML += `${date1.getDate()} <br>`;
    area.innerHTML += `${date1.getDay()} <br>`; // 요일을 나타내는 정수를 반환 0: (일요일)부터 시작, 6: 토요일 )
    area.innerHTML += `${date1.getHours()} <br>`;
    area.innerHTML += `${date1.getMinutes()} <br>`;
    area.innerHTML += `${date1.getSeconds()} <br>`;
    area.innerHTML += `${date1.getMilliseconds()} <br><br>`;

    // 1970년 1월 1일을 기준으로 현재 시간에 대한 밀리세컨드 값을 반환한다.
    area.innerHTML += `${date1.getTime()} <br>`;
    // UTC(표준시)에서 로컬위치의 시간정보를 빼서 차이를 분단위로 출력한다.
    area.innerHTML += `${date1.getTimezoneOffset() / 60} <br>`;

    area.innerHTML += `${date1.toDateString()} <br>`; // 년월일 정보 출력
    area.innerHTML += `${date1.toTimeString()} <br>`; 
    area.innerHTML += `${date1.toUTCString()} <br>`; // 표준시
    area.innerHTML += `${date1.toISOString()} <br>`; 
    area.innerHTML += `${date1.toLocaleString()} <br>`; // 
    area.innerHTML += `${date1.toLocaleDateString()} <br>`; // 
    area.innerHTML += `${date1.toLocaleTimeString()} <br>`; // 
    area.innerHTML += `${date1.toLocaleString('en-US')} <br>`; // 
    area.innerHTML += `${date1.toLocaleDateString('en-US')} <br>`; // 
    area.innerHTML += `${date1.toLocaleTimeString('en-US')} <br>`; // 
});