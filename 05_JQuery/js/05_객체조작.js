$(document).ready(() => {
    // 1. Content 관련 메소드
    // 1) html() 메소드

    //content 영역의 태그와 텍스트를 모두 가져온다.
    console.log(`$('#content1').html(): ${$('#content1').html()}`); 
    
    // content1의 텍스트와 태그들을 content1에 추가해준다.
    $('#content2').html($('#content1').html());
    
    // content2의 자식인 'a'태그에 href를 추가해준다.
    $('#content2').children('a').attr('href', 'https://www.naver.com');
    
    // 맨 위에있는 컨텐츠 요소만을 가지고 온다.
    console.log(`$('.content').html(): ${$('.content').html()}`); 

    // 콜백함수를 사용해서 원래 있던 내용들을 가지고 올 수도 있고,
    $('.content').html((index, content) => {
        console.log(index);
        console.log(content);
        
        // return을 사용해서 내용을 변경해 줄 수도 있다.
        return `<h1>인덱스 ${index}, 내용 : ${content} </h1>`
    });

    // 2) text() 메소드
    console.log(`$('#content3').text(): ${$('#content3').text()}`);

    // 컨텐츠가 모두 문자열로 입력된다.(herf또한 문자열로 인식)
    $('#content4').text($('#content3').text());

    // $('#content4').text('<b>안녕</b>');

    console.log(`$('.content2').text(): ${$('.content2').text()}`)

    $('.content2').text((index, content) => {
        console.log(index, content);

        // 태그도 모두 문자열로 인식하여 출력한다.
        return `<h1>인덱스 ${index}, 내용 : ${content} </h1>`;
    });

    // 2. 요소 생성 및 제거
    //  1) 요소 생성
    //  문자열로 요소를 생성하는 방법
    let p1 = '<p>문자열로 요소를 생성</p>';

    // 자바스크립트 DOM 메소드로 생성하는 방법
    let p2 = document.createElement('p');
    let textNode = document.createTextNode('DOM 메소드로 요소를 생성');

    p2.appendChild(textNode);

    // jQuery로 요소를 생성하는 방법 1
    let p3 = $('<p>').text('jQuery로 요소를 생성 1');
    
    // jQuery로 요소를 생성하는 방법 2
    let p4 = $('<p>jQuery로 요소를 생성2</p>')

    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(p4);

    $('#area1').append(p1, p2, p3, p4);

    // 2-1) 요소 추가 1
    // $(A).append(B) : A 요소의 자식 요소로 B 요소를 뒷부분에 추가한다.
    $('#add1').append('<span>B</span>');
    
    // $(A).prepend(B) : A 요소의 자식 요소로 B 요소를 앞부분에 추가한다.
    $('#add2').prepend('<span>B</span>');

    // $(A).after(B) : A 요소의 형제 요소로 B 요소가 뒤에 추가된다.
    $('#add3').after('<span>B</span>');
    
    // $(A).before(B) : A 요소의 형제 요소로 B 요소가 앞에 추가된다.
    $('#add4').before('<span>B</span>');

    // 2-2) 요소 추가 2
    // $(A).appendTo(B) : A 요소를 B 요소의 자식 요소로 뒷부분에 추가한다. 
    $('<span>B</span>').appendTo('#add5');
    
    // $(A).prependTo(B) : A 요소를 B 요소의 자식 요소로 앞부분에 추가한다. 
    $('<span>B</span>').prependTo('#add6');
    
    // $(A).insertAfter(B) : A 요소를 B 요소의 형제 요소로 뒷부분에 추가한다. 
    $('<span>B</span>').insertAfter('#add7');
    
    // $(A).insertBefore(B) : A 요소를 B 요소의 형제 요소로 앞부분에 추가한다. 
    $('<span>B</span>').insertBefore('#add8');


    // 3. 요소 복제 메소드
    $('#item1').hover(
        // () => {
        //     // 선택된 요소에 클래스 속성값을 추가하는 메소드
        //     $('#item1').addClass('bg-hotpink');
        // }, 
        // () => {
        //     // 선택된 요소에 클래스 속성값을 제거하는 메소드
        //     $('#item1').removeClass('bg-hotpink');
        // });

        // 하나의 콜백 함수로 동일하게 호출된다.
        (event) => {
            console.log(event);
            // 선택된 요소에 클래스 속성값을 추가/ 제거하는 메소드
            // toggleClass() : 선택된 요소에 클래스가 존재하지 않으면 추가, 존재한다면 제거해준다. 

            // 제이쿼리에서 사용하는 메소드를 사용해 주기 위해서 $() 로 감싸준다.
            $(event.target).toggleClass('bg-hotpink');
        });

        // 이벤트가 발생했을때 콜백함수 내에서도 $( )가 사용이 가능하다.
        // 본인이 본인을 조회해서 사용 할 수있다. $('#item1').hover(() => {$('#item1') ..... }); 
        // window.$ 했을때 $가  window(최상위에 있음)내에 있기 때문에 $('#item1') 불러오는게 가능
        // event.target는 그냥 DOM객체이다. 그래서 제이쿼리 $()로 감싸서 제이쿼리에서 제공하는 메소드를 쓸 수 있게 해준다.

        // 버튼 클릭시 요소를 복제
        $('#btn1').click(() => {
            // 이벤트까지 복제하려면 매개값으로 true를 전달한다. (생략 시 false)
            let copyItem = $('#item1').clone(true);

            $('#clone-result').append(copyItem);

            // $('#item1') 요소의 위치가 이동된다. clone-result쪽으로!
            // $('#clone-result').append($('#item1'));
        });

    // 4. 요소 제거 메소드
    $('#item2').hover(() => {
        $('#item2').toggleClass('bg-hotpink');
    });

    // empty 테스트
    // 요소.empty() :  선택된 요소의 자식 요소들을 제거한다.
    $('#empty').click(() => {
        $('#item2').empty();
        
        // $('#remove-test').empty();
    });

    // remove 테스트
    // 요소.remove() : 선택된 요소를 제거후에 제거된 요소를 리턴해준다.
    //                 단, 리턴되는 요소의 이벤트도 삭제된다.
    $('#remove').click(() => {
        let el = $('#item2').remove();

        console.log(el);

        // 삭제되면서 return 된 요소를 '#remove-result' 에 넣어줌(이벤트 삭제됨)
        $('#remove-result').append(el);
    });

    // detach 테스트
    // 요소.detach(): 선택된 요소를 제거 후 제거된 요소를 리턴해준다.
    //                단, 리턴되는 요소의 이벤트는 삭제하지 않는다.
    $('#detach').click(() => {
        let el = $('#item2').detach();

        console.log(el);

        // 삭제되면서 return 된 요소를 '#remove-result' 에 넣어줌(이벤트 삭제 안됨)
        $('#remove-result').append(el);
    });

    // 5. 추가적인 메솓,
    // 1) each 메소드
    // 객체 배열 생성
    let output = '';
    let arr = [
        {name: '네이버', link: 'https://www.naver.com' },
        {name: '구글', link: 'https://www.google.com'},
        {name: 'w3schools', link: 'https://www.w3schools.com' }
    ];

    // $.each(arr, (index, item) => {
    //     console.log(`index: ${index}, item.name: ${item.name}, item.link: ${item.link}`);

    //     output += `<h4><a href =${item.link}>${item.name}</a></h4>`

    // });

    // $('#each-test').append(output);

    $(arr).each((index, item) => {
        console.log(`index: ${index}, item.name: ${item.name}, item.link: ${item.link}`);

        output += `<h4><a href =${item.link}>${item.name}</a></h4>`

    });

    $('#each-test').html(output);
    // $('#each-test').append(output);

    $('#each-test>h4').each((index, item) => {
        console.log(index, item);

        $(item).addClass('bg-hotpink');
    });

    // 자바 스크립트에서도 동일한 기능을 하는 메소드가 추가되었다.
    // 반복하면서 객체를 가져오는것..?
    arr.forEach(function(item, index, origin) {
        console.log(item, index, origin);
    });

    // 2) extend() 메소드
    let user1 = {
        name: '이서희',
        age: 27
    };

    console.log(user1);

    $.extend(user1, {job: '학생'});

    console.log(user1);

    let user2 = {
        name: '도경수', // 동일한 이름의 객체가 있으면 나중에 저장된 걸로 덮어씌워진다.
        hobby: ['음악듣기', '영화감상', '운동']
    };

    let result = $.extend(user1, user2);

    console.log(user1);
    console.log(user2);
    console.log(result);

    //3) noConflict() 메소드
    // $('#ncTest').css('color', 'green');
    // 위에서 하는 작업과 동일!
    let jq = $.noConflict();

    jq('#ncTest').css('color', 'orange');







});