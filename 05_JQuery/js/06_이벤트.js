$(document).ready(() => {
    // 이벤트 연결

    // 1) on()와 off()
    // 방법 1
    // $('#area1').on('mouseenter', () => {
    //     $('#area1').css('background', 'lightpink').text('마우스가 올라감');
    // });

    // $('#area1').on('mouseleave', () =>{
    //     $(window.event.target).css('background', 'lightgreen').text('마우스가 내려감');
    // });

    // 방법 2
    // $('#area1').on('mouseenter mouseleave', (event) => {
    //     console.log(event);

    //     if(event.type === 'mouseenter') {
    //         $('#area1').css('background', 'lightpink').text('마우스가 올라감');
    //     } else if(event.type ==='mouseleave') {
    //         $(event.target).css('background', 'lightgreen').text('마우스가 내려감');
    //     }
    // }); 

    // $('#area1').on('click', (event) => {
    //     $(event.target)
    //         .css('background', 'white')
    //         .text('')
    //         // 띄어쓰기로 구분
    //         .off('mouseenter mouseleave')
    //         // .off('mouseleave');
    // });

    // 방법 3
    $('#area1').on({
        mouseenter: () => {
            $('#area1').css('background', 'lightpink').text('마우스가 올라감');
        },
        mouseleave: () => {
            $(window.event.target).css('background', 'lightgreen').text('마우스가 내려감');
        },
        click: (event) => {
            $(event.target).css('background', 'white').text('').off('mouseenter mouseleave')
        }
    });

    // 2) one() 메소드
    $('#area2').one('click', () => {
        alert('처음이자 마지막으로 이벤트 핸들러 실행');
    }).css('cursor', 'pointer');

    // 2.키보드 이벤트
    // 1) keydown(), keypress(), keyup()
    $('#tarea1').on({
        // 키보드가 눌려질 때
        keydown: (event) => {
            console.log(`keydown > event.key : ${event.key}, event.keyCode: ${event.keyCode}`);
        },
        // 글자가 입력될 때(한글, 펑션키, 기능키 사용못함)
        keypress: (event) => {
            console.log(`keypress > event.key : ${event.key}, event.keyCode: ${event.keyCode}`);
        },
        // 키보드가 떼어질때
        keyup: (event) => {
            console.log(`keyup > event.key : ${event.key}, event.keyCode: ${event.keyCode}`);
        }
    }); 

    // 2) 동적으로 글자 수 세기
    $('#tarea2').on('keyup', (event) => {
        let inputValue = $(event.target).val();
        let inputLength = inputValue.length;
        let counter = $('#counter');
        let maxLength = $('#maxLength').text()

        console.log(inputLength);

        counter.text(inputLength);

        // 0보다 작으면 글자색을 빨간색으로 변경해준다.
        if((maxLength - inputLength) < 0) {
            counter.css('color', 'red');

            $(event.target).val(inputValue.substr(0, maxLength));
        } else {
            counter.css('color', 'black');
        }
    }); 

    // 3) 동적으로 아이디조건 확인
    let regExp = /^[a-z][a-z0-9]{3,11}$/;

    $('#userId').keyup((event) => {
        let userId = $(event.target).val();

        if(userId === null || userId === '') {
            $('#idCheck').css({'color': 'white'}).text('');
        }else if(regExp.test(userId)) {
            $('#idCheck').css({'color': 'green', 'font-weight': 'bold'}).text('사용 가능한 아이디 형식입이다.');
        } else {
            $('#idCheck').css({'color': 'red', 'font-weight': 'bold'}).text('사용이 할 수 없는 아이디 형식입이다.');
        }
    });

});