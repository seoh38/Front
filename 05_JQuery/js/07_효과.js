$(document).ready(() => {
    // 효과
    // 1. show()와 hide()
    // 초단위(1500 = 1.5초)
    $('#show').on('click', () => {
        $('#imgFlower').show(1500, 'linear');
    });

    // 사라지면서 차지한 공간까지 사라진다.
    $('#hide').on('click', () => {
        $('#imgFlower').hide(1500, 'swing');
    });

    $('#toggle').on('click', () => {
        // 토글 없이 효과를 구현하는 방법
        // display 속성이 none인지 none이 아닌지!! 
        if($('#imgFlower').css('display') === 'none') {
            $('#imgFlower').show(1500, 'linear');
        }else {
            $('#imgFlower').hide(1500, 'swing');
        }
        // $('#imgFlower').toggle(1500);

    });

    // 2. slideDown()와 slideUp()
    $('.menu').on('click', (event) => {
        // let content = $(event.target).next();

        // if(content.css('display') === 'none') {
        //     content.slideDown(1000, 'swing');
        // } else {
        //     content.slideUp(1000, 'swing');
            
        // }

        // slideToggle()를 사용하여 slideDown(), slideUp을 실행
        // $(event.target).next().slideToggle(500, 'swing');

        // 하나의 컨텐츠만 slideDown 되도록 수정
        $('.contents').slideUp(500, 'swing');
        $(event.target).next().slideDown(500, 'swing');
    });

    // 3. fadeIn()와 fadeOut()
    $('#fadeIn').on('click', () => {
        $('#imgRiver').fadeIn(1000, 'linear');
    });

    $('#fadeOut').on('click', () => {
        $('#imgRiver').fadeOut(1000, 'swing');
    });

    $('#fadeToggle').on('click', () => {
        $('#imgRiver').fadeToggle(1000, 'swing');
    });

    $('#imgRiver').hover(
        (event) => {
            if(event.type === 'mouseenter') {
                $(event.target).fadeTo(500, 0.5);
            } else if (event.type === 'mouseleave'){
                $(event.target).fadeTo(500, 1);
            }
        }
    );







});