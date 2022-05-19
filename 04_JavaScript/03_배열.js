// 배열 테스트
function test1() {      // 여러개의 타입을 가져올 수 있다.
    let area = document.getElementById('area1');
    let arr = [
        '이서희',       // 문자
        20,             // 숫자
        true,           // 논리값   
        [1,2,3,4],      // 배열
        function() {    // 함수
            return 1;
        },
        {}              // 객체
    ]; 

    // {
    //     name : '이서희' // 객체를 리터럴 형태로 만드는것
    // };

    console.log(arr);

    area.innerHTML = arr;
}

// 배열 선언 및 초기화 테스트
function test2() {
    // 크기를 지정하고 선언
    let arr1 = new Array();

    // 크기를 지정하고 선언
    let arr2 = new Array(3);
    
    let arr3 =  new Array('빨강', '주황', '노랑', '초록');
    let arr4 = ['java', 'oracle', 'HTML5', 'CSS', 'Java Script'];

    let area = document.getElementById('area2');

    arr1[0] = '귤';
    arr1[1] = '샤인머스캣';
    arr1[2] = '딸기';

    area.innerHTML = `arr1 에 값 대입 : [${arr1}]<br> arr1.lenght : ${arr1.length}`;
    
    area.innerHTML += `<br><br>`;
    
    // 자바스크립트에서는  크기가 지정된 배열에 새로운 값을 추가해도 새로운 인덱스가 생성된다.
    arr2[0] = '자돋차';
    arr2[1] = '비행기';
    arr2[2] = '기차';
    arr2[3] = '크루즈';
    
    area.innerHTML += `arr2 에 값 대입 : [${arr2}]<br> arr2.lenght : ${arr2.length}`;
    area.innerHTML += `<br><br>`;

    area.innerHTML += `arr3 에 값 대입 : [${arr3}]<br> arr3.lenght : ${arr3.length}`;
    area.innerHTML += `<br><br>`;

    area.innerHTML += `arr4 에 값 대입 : [${arr4}]<br> arr4.lenght : ${arr4.length}`;
    area.innerHTML += `<br><br>`;

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
}

// 배열 메소드 테스트
// 1) indexOf()
function test3() {
    let arr = ['귤', '샤인머스캣', '복숭아', '딸기', '망고'];
    let area =  document.getElementById('area3');

    area.innerHTML = `arr : [${arr}] <br><br>`;
    area.innerHTML += ` 복숭아가 있는 배열의 인덱스 : ${arr.indexOf('복숭아')} <br>`;
    area.innerHTML += ` 망고가 있는 배열의 인덱스 : ${arr.indexOf('망고')} <br>`;
    area.innerHTML += ` 수박이 있는 배열의 인덱스 : ${arr.indexOf('수박')} <br>`;
}

// 2) concat()
function test4() {
    let arr1 = ['귤', '샤인머스캣', '복숭아', '딸기', '망고'];
    let arr2 = ['메론', '골드키위', '두리안', '망고스틴', '용과', '리치'];
    let area = document.getElementById('area4');

    area.innerHTML = `arr1 : [${arr1}] <br>`;
    area.innerHTML += `arr2 : [${arr2}] <br><br>`;
    
    area.innerHTML += `arr1을 기준으로 배열을 결합 : [${arr1.concat(arr2)}] <br><br>`;
    area.innerHTML += `arr1 : [${arr1}] <br> `; // 원본 배열에는 영향을 미치지 않는다.
    
    area.innerHTML += `arr2을 기준으로 배열을 결합 : [${arr2.concat(arr1)}] <br><br>`;
    area.innerHTML += `arr2 : [${arr2}] <br> `; // 원본 배열에는 영향을 미치지 않는다.
}

// 3) join()
function test5() {
    let arr = ['강남', '역삼', '선릉', '삼성']; 
    let area =  document.getElementById('area5');

    area.innerHTML += `arr : [${arr}] <br><br>`;
    area.innerHTML += `arr의 자료형 : [${typeof(arr)}] <br><br>`;
    area.innerHTML += `arr.join() : [${arr.join('!')}] <br><br>`; // 사이에 넣어주는 구분값으로 사용 가능하다.
    area.innerHTML += `arr의 자료형 : [${typeof(arr.join())}] <br><br>`;
}

// 4)reverse()
function test6() {
    let arr = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // es6부터 추가된 메소드 Array.of()
    
    let area = document.getElementById('area6');
    
    area.innerHTML += `arr : [${arr}] <br><br>`;
    area.innerHTML += `arr.reverse() : [${arr.reverse()}] <br><br>`; // 원본배열에 영향을 미치는 메소드이다.
    area.innerHTML += `arr : [${arr}] <br><br>`;
}

// 5) sort()
function test7() {
    let arr1 = [10, 543, 34, 450, 123, 885];
    let arr2 = ['Cherry','Apple', 'Banana'];
    
    let area = document.getElementById('area7');
    
    area.innerHTML += `arr1 : [${arr1}] <br>`;
    area.innerHTML += `arr2 : [${arr2}] <br><br>`;
    area.innerHTML += `arr1.sort() : [${arr1.sort}] <br>`; // 원본배열에 영향을 미치는 메소드이다.
    area.innerHTML += `arr2.sort() : [${arr2.sort}] <br><br>`; // 원본배열에 영향을 미치는 메소드이다.
    area.innerHTML += `arr1 : [${arr1}] <br>`;
    area.innerHTML += `arr1 : [${2}] <br><br>`;
    
    //sort() 메소드에 함수를 매개값으로 전달해서 정렬기준을 변경할 수 있다.
    arr1.sort(function(left, right) {
        return left - right; // 오름차순
    });

    area.innerHTML += ` arr1 오름차순으로 정렬 : [${arr1}] <br>`;
    
    arr1.sort((left, right) => right - left); // 내림차순
    
    area.innerHTML += ` arr1 내림차순으로 정렬 : [${arr1}] <br>`;

    area.innerHTML += ` arr2 내림차순으로 정렬(arr2.sort().reverse())) : [${arr2.sort().reverse()}] <br>`;
}

// 6) push(), pop()
function test8() {
    let arr = ['엔시티', '엑소', '잇지', '아이유', '스테이씨'];
    let area = document.getElementById('area8');

    area.innerHTML += `arr : [${arr}] <br><br>`;
    arr.push('레드벨벳'); // push 후 요소의 개수를 리턴한다. 
    area.innerHTML += `arr에 push() 후 : [${arr}] <br><br>`;
    arr.push('도경수(D.O)');
    area.innerHTML += `arr에 push() 후 : [${arr}] <br><br>`;

    area.innerHTML += `arr.pop() : ${arr.pop()} <br><br>`;
    area.innerHTML += `arr에 pop() 후 : [${arr}] <br><br>`;
    area.innerHTML += `arr.pop() : ${arr.pop()} <br><br>`;
    area.innerHTML += `arr에 pop() 후 : [${arr}] <br><br>`;
}

// 7) shift(), unsfift()
function test9() {
    let arr = ['엔시티', '엑소', '잇지', '아이유', '스테이씨'];
    let area = document.getElementById('area9');

    area.innerHTML = `arr : [${arr}] <br><br>`;
    arr.unsfift('레드벨벳'); // unshift 후 요소의 개수를 리턴한다. 
    area.innerHTML += `arr에 unsfift() 후 : [${arr}] <br><br>`;
    arr.unsfift('도경수(D.O)');
    area.innerHTML += `arr에 unsfift() 후 : [${arr}] <br><br>`;

    area.innerHTML += `arr.shift() : ${arr.shift()} <br><br>`
    area.innerHTML += `arr에 shift() 후 : [${arr}] <br><br>`;
    area.innerHTML += `arr.shift() : ${arr.shift()} <br><br>`
    area.innerHTML += `arr에 shift() 후 : [${arr}] <br><br>`;
}

// 8) slice(), splice()
function test10() {
    let arr = ['Java', 'Oracle', 'HTML5', 'CSS', 'JavaScript'];
    let area = document.getElementById('area10');

    area.innerHTML += `arr : [${arr}] <br><br>`;
    area.innerHTML += `arr.slice() : [${arr.slice(2, 4)}] <br><br>`; // 4번은 미포함!
    area.innerHTML += `arr : [${arr}] <br><br>`; // 원본배열에는 영향을 미치지 않는다.

    // .splice(start, 제거할 요소의 수, [추가할 요소])
    // area.innerHTML += `arr.splice(2, 2) : [${arr.splice(2, 2)}] <br><br>`;
    // area.innerHTML += `arr.splice(2, 2, [추가값]) : [${arr.splice(2, 2, 'spring')}] <br><br>`;
    area.innerHTML += `arr.splice(2, 0, [추가값]) : [${arr.splice(2, 0, 'spring')}] <br><br>`;
    area.innerHTML += `arr : [${arr}] <br><br>`; //원본배열에 영향을 미치는 메소드이다.
}

























