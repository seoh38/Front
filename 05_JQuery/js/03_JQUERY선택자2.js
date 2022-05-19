$(document).ready(() => {
 // 1. 자손 선택자('>')와 후손 선택자(' ')
    //  1) 자손선택자 :  부모>자손
    $('div>h3').css('color', 'orange');
    $('div>li').css('color', 'orange'); // li는 ul의 후손선택자이다.
    $('div>ul h3').css('color', 'green')

    //  2) 후손 선택자 : 부모 후손
    $('div h3').css('backgroundColor', 'skyblue');  // 모든 'h3'가 선택
    $('div .test').css('backgroundColor', 'tomato'); 
    
// 2. 기본 속성 선택자
    // $('input[class]').css('background-color', 'lavender');

    // .val(); 메소드를 사용해서 값을 넣어준다.
    // $('input[type=text]').val('Change Value');
    
    // ~= : 속성이 여러개일때 공백을 포함하는 속성을 찾을때! 
    // $('input[class~=test]').val('12355458');

    // ^= : 지정한 문자로 시작하는 속성값을 가지는 속성을 찾을때
    // $('input[type^=ra]').prop('checked', 'true');

    // $= : 지정된 문자로 끝나는 속성을 찾을때!
    // $('input[type$=box]').prop('checked', 'true');

    // *= : 지정된 문자로 포함이 되는 속성을 찾을때!
    // $('input[class*=st2]').css('width', '100px').css('height', '100px');

// 3. 입력 양식 선택자
    // input 타입이 text인 것들 모두 변경!
    // $(':text').css('background-color', 'pink');

    // 객체{...} 형태로 옵션을 넘겨줄 수도 있다.
    // css의 매개값으로 객체형태로 width와 height를 넘겨준다.(여러개도 전달 가능!)
    // $(':button').val('왕버튼').css({width: '200px', height: '200px'});
    // $(':checkbox').prop('checked', true).css({width:' 50px', height: '50px'});
    // $(':file').css('background-color', 'yellow');

    
    // $(':image').mouseenter((event) => {
    //     console.log(event); // 이벤트가 발생한 돔객체
        
    //     // $() 제이쿼리로 감싸주어야지 제이쿼리에서 제공하는 메소드를 사용가능하다,
    //     $(event.target).attr('src', '../resources/image/flower2.PNG');
    // });

    // $(':image').mouseout((event) => {
    //     console.log(event);

    //     $(event.target).attr('src', '../resources/image/flower1.PNG');
    // });

    // hover() : mouseenter() + mouseout()
    // $(':image').hover(
    //     (event) => {
    //         $(event.target).attr('src', '../resources/image/flower2.PNG');
    //     },
    //     (event) => {
    //         $(event.target).attr('src', '../resources/image/flower1.PNG');
    //     }
    // );

// 4. checkbox 상태에 대한 선택자
    // input 태그중에 체크가 된 객체 선택
    $('input:checked').css({width: '50px', height: '50px'});
    $('input:checkbox').change((event) => {
        let target = $(event.target);

        console.log(event.target);
        console.log(target);

        if(target.prop('checked')) {
            $(target).css({width: '50px', height: '50px'});
        }else {
            $(target).css({width: '15px', height: '15px'});
        }

    });
// 5. select, option 태그의 상태에 대한 선택자
    $('#national').change(() => {
        // select 태그의 option 태그 중 선택된 객체를 선택 -> value 값을 가져온다.
        let value =  $('#national>option:selected').val();

        // id가 result인 요소에 값을 value로 변경
        $('#result').val(value);
    });   
    
// 6. input 산태에 대한 선택자    
    // enabled : 활성화된 객체
    // $('input:enabled').css('background-color', 'tomato');
    $('input:disabled').css('backgroundColor', 'orange');

// 7. attr()와 prop()
    let cb1 = $('#cb1');    
    let cb2 = $('#cb2');    

    // 속성값을 직접 가지고 온다! 값이 없으면 undefind
    console.log(`cb1.attr('checked') : ${cb1.attr('checked')}`);
    console.log(`cb2.attr('checked') : ${cb2.attr('checked')}`);

    // 실제로 값이 존재하면 true 없으면 false 리턴해준다.
    console.log(`cb1.prop('checked') : ${cb1.prop('checked')}`);
    console.log(`cb2.prop('checked') : ${cb2.prop('checked')}`);

    // cb2.attr('checked', 'checked'); // 속성의 값을 직접 명시
    // cb2.prop('checked', true); // true나 false로 속성을 지정




















});