$(document).ready(() => {
    // 1. Filtering 메소드
    //  - Filtering 방법으로는 선택자와 함수를 제공한다.

    //  * 필터링 관련 선택자
    //     선택자:first       - 첫 번째 위치한 요소를 선택
    //     선택자:last        - 마지막에 위치한 요소를 선택 
    //     선택자:odd         - 홀수 번째에 위치한 요소를 선택
    //     선택자:even        - 짝수 번째에 위치한 요소를 선택
    //     선택자:eq(인덱스)  - 인덱스에 해당하는 요소를 선택
    //     선택자:not(인자)   - 인자 값과 일치하지 않는 요소를 선택

    // 둘 다 선택된 요소들 중 첫번째 요소를 가져와서 스타일 변경
    // $('h4').first().css('font-size', '20pt');
    $('h4:first').css('font-size', '20pt');
    
    // 둘다 선택된 요소들 중 마지막 요소를 가져와서 스타일 변경
    // $('h4').last().css('font-size', '20pt');
    $('h4:last').css('font-size', '20pt');
    
    //선택된 요소들 중 홀수 인덱스에 요소를 가져와서 스타일 변경
    // $('.test').filter(':odd').css({backgroundColor: 'green', color: 'white'});
    $('.test:odd').css({backgroundColor: 'green', color: 'white'});
    
    //선택된 요소들 중 짝수 인덱스에 요소를 가져와서 스타일 변경
    $('.test').filter(':even').css({backgroundColor: 'tomato', color: 'white'});
    // $('.test:even').css({backgroundColor: 'tomato', color: 'white'});
    
    $('.test').filter((index) => {
        // 리턴 결과가 true인 요소만 걸러낸다.
        // 콜백함수를 사용해서 조건을 걸어줄 수도 있다
        if(index === 0){
            return false;

        }
        return index % 3 === 0;

    }) .css({backgroundColor: 'skyblue', color: 'white'});
    
    // 선택된 요소들 중 인덱스에 해당하는 요소를 가져와서 스타일을 변경
    // $('h4').eq(4).text('eq()에 의해서 선택되었습니다.');
    $('h4:eq(4)').text('eq()에 의해서 선택되었습니다.');

    // .not() : 인자값과 일치하지 않는 요소를 가져와서 스타일 변경
    // $('h4').not('.test').css({backgroundColor: 'pink', color: 'white'});
    $('h4:not(.test)').css({backgroundColor: 'pink', color: 'white'});

    $('h4').filter('.test').text('배고파 디지겠다 진짜.....');

    // 2. Ancestors 메소드
    // 선택된 요소의 바로 상위에 있는 부모 요소
    console.log($('span').parent()); 
    // 선택된 요소의 모든 조상 요소
    console.log($('span').parents()); 

    // span 태그의 부모 요소에 스타일 설정
    // $('span').parent().css({color:'red', border: '2px solid red'}); // p 태그의 스타일 변경

    // li 태그의 모든 상위 요소의 스타일 설정
    // $('li').parents().css('color', 'green');

    // li 태그의 상위 요소 중 div 만 선택해서 스타일 설정
    // $('li').parents('div').css('border', '2px dashed orange'); 

    // span 태그부터 div 태그 이전까지 상위요소 스타일 설정
    // $('span').parentsUntil('div').css('background-color', 'lightpink');

    // 3. Descendants 메소드
    // 선택된 요소의 바로 하위 자손
    // $('.wrap').children().children()을 하면 하위자손의 하위자손 가지고 올수 있음
    console.log($('.wrap').children());
    // 선택된 요소의 조건에 만족하는 하위 자손을 가지고 올 수 있다.
    console.log($('.wrap').find('span'));

    // 클래스명이 .wrap인 태그의 자손의 스타일 변경
    $('.wrap').children().css({color:'red', border: '2px solid'});
    
    // 클래스명이 .wrap인 태그의 자손의 자손들의 스타일 변경
    $('.wrap').children().children().css({color:'blue', border: '2px solid'});
    
    // 클래스명이 .wrap인 태그의 자손의 자손들 중 ul 태그의 스타일 변경
    $('.wrap').children().children('ul').css({color:'yellow', border: '2px solid'});

    // 클래스명이 .wrap인 태그의 자손의 자손의 자손들 중 li 태그의 스타일 변경
    $('.wrap').children().children().children('li').css({color:'pink', border: '2px solid'});

    // 클래스명이 .wrap인 태그의 모든 후손들 중에서 span 태그의 스타일 변경
    $('.wrap').find('span').css({color: 'purple', border: '2px solid'});


    // 4. Sideways 메소드
    console.log($('.wrap1>h2').siblings());

    // h2 태그의 모든 형제들의 스타일 변경
    $('.wrap1>h2').siblings().css({color: 'purple', border: '2px solid'});
    
    //h2 태그의 형제 요소들 중 p 태그에 스타일 적용
    $('.wrap1>h2').siblings('p').css({color: 'green', border: '2px solid'});
    
    // h2 태그의 바로 다음에 있는 형제 요소에 스타일 적용
    $('.wrap1>h2').next().css({color: 'pink', border: '2px solid'});
    
    // h2 태그의 다음에 오는 모든 형제 요소에 스타일 적용
    $('.wrap1>h2').nextAll().css({backgroundColor: 'orange'});
    
    // h2 태그부터 p 태그 이전에 모든 형제 요소에 스타일 적용
    $('.wrap1>h2').nextUntil('p').css('font-size', '3em');
    $('.wrap1>h2').nextUntil('p').css('border', 'dashed');

    // h2 태그 바로 이전의 형제 요소에 스타일 변경
    $('.wrap1>h2').prev().css('backgroundColor', 'lavender');
    
    // h2 태그의 이전에 있는 모든 형제 요소에 스타일 적용
    $('.wrap1>h2').prevAll().css('backgroundColor', 'lightpink');
    
    // h2 태그 이전부터 p 태그 이후까지의 모든 형제 요소에 스타일 적용
    $('.wrap1>h2').prevUntil('p').css('border', 'dotted');

    // 5. 요소가 있는지 찾는 메소드
    console.log(`$('.wrap1>span').nextAll().is('h4') :${$('.wrap1>span').nextAll().is('h4')}`);
    console.log(`$('.wrap1>span').is('.class1') :${$('.wrap1>span').is('.class1')}`);

});