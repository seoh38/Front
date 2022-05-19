// 텍스트 노드가 있는 요소노드 생성
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    // element(요소) 생성(태그 하나가 노드를 의미한다.)
    let title = document.createElement('h3');

    // 텍스트 노드 생성
    let textNode = document.createTextNode('안녕?');
    
    // 텍스트 노드를 자식요소로 추가하기
    title.appendChild(textNode);

    // 둘다써도 상관 없음!!

    document.getElementById('area1').appendChild(title);

    // document.getElementById('area1').innerHTML = '<h3>안녕?</h3>';
});

// 텍스트 노드가 없는 요소 노드 생성
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    // element 생성
    let img = document.createElement('img');

    // 속성 지정
    img.src = '../resources/image/flower2.PNG';
    img.setAttribute('width', '150px');
    img.setAttribute('height', '100px');
    img.setAttribute('myAttr', 'P123');

    // 두개 다 써도 상관없음~
    document.getElementById('area2').appendChild(img);

    document.getElementById('area2').innerHTML += 
        '<img src ="../resources/image/flower1.PNG" width = "150px" height "100px" myAttr = "P123">';    
});

// Node 객체 삭제
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', (event) => {
    // area1의 부모노드까지 전부 삭제된다(트리구조라서!)
    // 1) document 직접 불러와서 지우기!
    document.getElementById('area1').remove();

    // 2) body 태그 자손 태그 제거(removeChild : 지우려는 객체를 불러와줘야 한다.)
    document.body.removeChild(document.getElementById('area2'));

    // 3) 제거할 객체를 기준으로 그 상위 객체로 가서 해당 객체를 삭제!
    event.target.parentNode.removeChild(document.getElementById('area3'));
});