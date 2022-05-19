// 객체 선언
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    let area = document.getElementById('area1');
    let product = { // 리터럴 안에 0개 이상의 속성(key와 값으로 구성) 지정
        // 'pName': '아이폰 12 프로' // 키값은 일반적으로 문자열(네이밍 조건에 만족하면 ' ' 생략 가능) 
        // '0': '배열 흉내',
        0: '배열 흉내',
        pName: '아이폰 12 프로',
        price: 1000000,
        brand: '삼성',
        brand: '애플', // 중복 선언시에 마지막에 선언된 프로퍼티가 덮어쓰게 된다.
        spec: ['OLED', 'IOS15'] // 배열도 넣을 수 있음 
        
    };

    // 속성명을 제시할 때는 공백이나 특수문자가 들어가야 하는 경우 ' ', " " 로 묶어줘야한다. 
    let user = {
        'user name': '이서희',
        'age!!': 20
    }
    console.log(product);

    area.innerHTML += `product : ${product} <br><br>`;

    area.innerHTML += `객체명["속성명"]으로 접근하는 방법 <br>`;
    // area.innerHTML += `product[0] : ${product['0']}`;
    area.innerHTML += `product[0] : ${product[0]} <br>`; // 숫자형태의 문자열일 경우 ' ' 생략 가능
    area.innerHTML += `product['pName'] : ${product['pName']} <br>`
    area.innerHTML += `product['price'] : ${product['price']} <br>`
    area.innerHTML += `product['brand'] : ${product['brand']} <br>`
    area.innerHTML += `product['spec'][0] : ${product['spec'][0]} <br>`
    area.innerHTML += `product['spec'][1] : ${product['spec'][1]} <br>`

    area.innerHTML += `객체명.속성명으로 접근하는 방법 <br>`;
    // 숫자형태로 호출을 할때는 인덱스[] 표시를 반드시 해줘야함
    // area.innerHTML += `product.0 : ${product.0}`; // 에러발생
    area.innerHTML += `product.pName : ${product.pName} <br>`; 
    area.innerHTML += `product.price : ${product.price} <br>`; 
    area.innerHTML += `product.brand : ${product.brand} <br>`; 
    area.innerHTML += `product.spec.0 : ${product.spec[0]} <br>`; 
    area.innerHTML += `product.spec.1 : ${product.spec[1]} <br><br>`; 

    area.innerHTML += '공백이나 특수문자가 속성명에 포함되어 있는 경우 대괄호를 이용해서 값을 가져올 수 있다. <br>';
    // 접근할때도 ' ', " "로 묶어줘야 한다.
    // area.innerHTML += `user.user name : ${user[user name]} <br>`;
    area.innerHTML += `user.user name : ${user["user name"]} <br>`;
    // area.innerHTML += `user.user name : ${user."age!!"} <br>`;
    area.innerHTML += `user.user name : ${user["age!!"]} <br>`;
});

// 객체의 메소드
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    let dog = {
        name: '두부',
        kind: '말티즈',
        eat: function(food) {
            // this를 명시적으로 꼭 써주세요!!!!!
            // 객체 내부에서 속성에 접근하려면  'this.속성명' 을 이용해 직접접근 해야한다.
            // console.log(this.name);
            console.log(this.kind);
            console.log(food);
            console.log(`${this.kind} 종류인 ${this.name}가 ${food}를 먹고 있네요.`);
        }
    };

    dog.eat('닭가슴살');
});

// 객체와 반복문
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    let game = {
        title: '메이플 스토리',
        price: 'FREE',
        supportOS: ['win32', 'win64'],
        service: true
    };

    console.log(game);

    // 속성명을 문자열 형태로 가지고 있기 때문에 [key]에 ' ' 생략가능
    // for in구문을 사용해서 속성의 개수만큼 반복할 수 있다.
    for (const key in game) {
        console.log(game[key]);
        console.log(`key: ${key}, game[key]: ${game[key]}`);
            
        }
    
});

// 객체의 속성 추가 및 삭제
let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', () => {
    // 빈 객체 선언
    // 빈 객체를 먼저 선언하고 속성을 안에 추가해주는것임!
    let student = {};

    // 객체에 속성 추가
    student.name = '이서희';
    student.age = 20;
    student['job'] = '백수';

    // 객체의 메소드 추가
    student.whoAreYou = function() {
        let str = '';

    // 함수내부(메소드)에서 student의 객체 자신에게 접근하기 위해 this 키워드를 사용한다.
    // 자기 자신의 속성만큼 반복을 돈다.
    // 메소드가 아닐 경우(key !== 'whoAreYou') 각 속성들을 문자열로 만들어서 리턴해주자!
    for (const key in this) {
        // if(key !== 'wohAreYou') {
        if(typeof(this[key]) !== 'function') {
            str += `${key}: ${this[key]} `;
        }
    };

    return str;
    };

    console.log(student);
    console.log(student.whoAreYou());
    console.log('job' in student); // job이라는 속성이 student 객체 안에 있니?
    
    delete(student.job); //job 속성 삭제!

    console.log(student);
    console.log(student.whoAreYou());
    console.log('job' in student); // job이라는 속성이 student 객체 안에 있니?
});

// 객체배열
    let btn5 = document.getElementById('btn5');

    btn5.addEventListener('click', () => {
        let area = document.getElementById('area2');

        // 배열을 사용하지 않았을 경우
        let student1 = {name: '이서희', java: 80, oracle: 90};
        let student2 = {name: '도경수', java: 100, oracle: 100};
        let student3 = {name: '정재현', java: 90, oracle: 70};
        let student4 = {name: '이제노', java: 50, oracle: 80};
        let student5 = {name: '이민형', java: 70, oracle: 95};

        // 코드가 늘어나면 용량도 차지하고 가독성도 떨어진다.
        // 추가나 삭제를 할 때도 귀찮음(비효율적)
        // console.log(student1);
        // console.log(student2);
        // console.log(student3);
        // console.log(student4);
        // console.log(student5);

        // 배열 선언 및 초기화
        let students = [
            {name: '이서희', java: 80, oracle: 90},
            {name: '도경수', java: 100, oracle: 100}
        ];

        // 배열에 요소를 추가
        students.push({name: '정재현', java: 90, oracle: 70});
        students.push(student4); // 변수 객체를 넘겨줌
        students.push(student5);

        // 배열에 담겨있는 모든 객체에 메소드를 추가
        // 객체별로 getSum, getAvg 라는 메소드를 가진다.
        for (let i = 0; i < students.length; i++) {
            students[i].getSum = function() {
                return this.java + this.oracle; // 객체의 속성을 가지고 올거임
            };
            
            students[i].getAvg = function() {
                return this.getSum() / 2;
            };
            
        }

        console.log(students);

        // 모든 학생의 정보가 담긴 배열을 출력(이름, 총점, 평균)
        // 반복할때마다 저장되어 있는 객체안의 속성들을 하나씩 반복해준다.
        // with는 잘 안씀
        for (const index in students) {
            with(students[index])
        
            area.innerHTML += `이름 : ${name}, 총점: ${getSum()}, 평균: ${getAvg()} <br><br>`;
            // with를 안쓰면 sudents 배열에 index 번째의  속성을 가지고 와주는것을 하나씩 다 입력해준다.
            // area.innerHTML += `이름 : ${students[index].name}, 총점: ${students[index].getSum()}, 평균: ${students[index].getAvg()} <br><br>`;
        }
    });

// 생성자 함수
    function Student(name, java, oracle) {
        // 속성 정의
        this.name = name;
        this.java = java;
        this.oracle = oracle;

        // // 메소드 정의
        // this.getSum = function() {
        //     return this.java + this.oracle;
        // };

        // this.getAvg = function() {
        //     return this.getSum() / 2;
        // };
    }

    // 자바스크립트는 prototype기반의 객체지향언어이다.
    // 모든 객체들은 프로토타입을 참조하고 있다!! 상속을 구현해준다.
    // 프로토타입은 객체들의 메소드나 속성을 상속구조로 만들기 위해서 사용한다.
    // 중복되는 메소드나 함수들을 프로토타입 객체로 가질수 있게 공통으로 사용할 수 있게 해준다.

    // Student 함수에서 정의할 프로토타입
    Student.prototype.getSum = function() {
        return this.java + this.oracle;
    };
    Student.prototype.getAvg = function() {
        return this.getSum() / 2;
    };

    let btn6 = document.getElementById('btn6');

    btn6.addEventListener('click', () => {
        let area = document.getElementById('area3');
        let student = new Student('이서희', 80, 80);
        let students = [];

        students.push(student);
        students.push(new Student('정재현', 100, 100));
        students.push(new Student('순두부', 90, 90));
        students.push(new Student('이민형', 50, 50));

        // 어떤 생성자 함수로 만들어 졌는지??
        // 생성자 함수로 만들어진 객체의 경우 해당 객체가 어떤 생성자 함수로 생성되었는지 instanceof 연산자로 검사할 수 있다.
        console.log(student instanceof Student);
        console.log(students instanceof Student);

        // 모든 학생의 정보가 단긴 배열 출력
        for (const index in students) {
        area.innerHTML += `이름: ${students[index].name}, 총점:${students[index].getSum()}, 평균: ${students[index].getAvg()} <br><br>`;
                
        }
    });

// 캡슐화    
function IdolGroup(n, m) {
    let name = n;
    let members = m;

    // 지역변수를 메소드에서 참조하게끔!!
    // 지역변수는 객체가 소멸할 때 같이 소멸된다.
    this.getGroupName = function() {
        return name;
    }

    this.getMembers = function() {
        return members;
    }

    this.getMemberCount = function() {
        return members.length;
    }

    this.setGroupName = function(n) {
        name = n;
    }

    this.setMembers = function(m) {
        members = m;
    }
}

let btn7 = document.getElementById('btn7');

btn7.addEventListener('click', () => {
    // 생성자 함수를 이용하여 객체 생성
    let exo = new IdolGroup('엑소', ['경수','준면','백현','세훈','종인','민석']);
    let area = document.getElementById('area4');

    console.log(exo); // 메소드만 보임
    console.log(exo.name, exo.members); // 외부에서 객체 속성에 직접접근할 수 없음(undifined)
    console.log(exo.getGroupName(), exo.getMembers(), exo.getMemberCount());

    exo.setGroupName('레드벨벳');
    exo.setMembers(['아이린','웬디','조이','슬기','예리']);

    area.innerHTML += `그룹명: ${exo.getGroupName()}, 멤버수: ${exo.getMemberCount()} <br><br>`;
});









































