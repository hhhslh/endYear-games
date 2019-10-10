$(function() {
    $('#fullpage').fullpage({
        verticalCentered: true, //设置section中的内容是否垂直居中  
        resize: true, //字体是否随着窗口缩放而缩放  
        scrollingSpeed: '700', //滚动的毫秒数  
        easing: 'easeInOutBounce', //滑动动画
        // navigation:true,                                     //导航圆点  

        onLeave: function(index, nextIndex, direction) {
            // console.log(index)
            // if(index == 2){
            //     $('.pageTwo').css('display','none')
            // }else 
            // index 是离开的“页面”的序号 nextIndex是滚动到的“页面”的序号，从1开始计算 direction 判断往上滚动还是往下滚动，值是 up 或 down
            if (index == 2) {
                $('.pageThree').css('display', 'none')
            } else if (index == 3) {
                $('.pageFour').css('display', 'none')
            } else if (index == 4) {
                $('.pageFive').css('display', 'none')
            } else if (index == 5) {
                $('.pageSix').css('display', 'none')
            } else if (index == 6) {
                $('.pageSeven').css('display', 'none')
            } else if (index == 7) {
                $('.pageLast').css('display', 'none')
                    // $('.pageEight').css('display', 'none')
            } else if (index == 8) {
                $('.pageNine').css('display', 'none')
            } else if (index == 9) {
                $('.pageTen').css('display', 'none')
            } else if (index == 10) {
                $('.pageEleven').css('display', 'none')
            } else if (index == 11) {
                $('.pageLast').css('display', 'none')
            }
        },
        afterLoad: function(anchorLink, index) {
            //  if(index == 2){
            //     // $('.pageTwo').css('display','block')
            //     $(".light").addClass('animated fadeInDown')
            //     $(".listOne,.listTwo,.listThree,.listFour,.listFive").addClass('animated fadeInUp')
            // }else

            //滚动到某一屏后的回调 anchorLink 是锚链接的名称 index是section的索引，从1开始计算
            if (index == 2) {
                $('.pageThree').css('display', 'block')
                $(".pageThree .cardBottom .img1").addClass('animated fadeInUp')
                $(".pageThree .cardBottom .img2").addClass('animated fadeInUp')
                $(".pageThree .cardBottom .img3").addClass('animated fadeInUp')
                $('.pageThree .fly .img1').css('animation-delay', '10s')
                $(".listOne,.listTwo,.listThree,.listFour,.listFive,.listSix,.listSeven").addClass('animated fadeInUp')

                var danmuBox = $("#danmuBox")
                var speed = -400

                var timer = setInterval(function() {
                    speed++
                    if (speed >= 700) {
                        clearInterval(timer)
                    }
                    danmuBox.css('left', speed + 'px')
                }, 10)

            } else if (index == 3) {
                $('.pageFour').css('display', 'block')
                $(".pageFour .cardBottom .img1").addClass('animated fadeInUp')
                $(".pageFour .cardBottom .img2").addClass('animated fadeInUp')
                $(".pageFour .cardBottom .img3").addClass('animated fadeInUp')
                $('.pageFour .fly .img1').css('animation-delay', '10s')
                $(".listOne,.listTwo,.listThree,.listFour,.listFive,.listSix,.listSeven").addClass('animated fadeInUp')
            } else if (index == 4) {
                $('.pageFive').css('display', 'block')
                $(".pageFive .cardBottom .img1").addClass('animated fadeInUp')
                $(".pageFive .cardBottom .img2").addClass('animated fadeInUp')
                $(".pageFive .cardBottom .img3").addClass('animated fadeInUp')
                $('.pageFive .fly .img1').css('animation-delay', '10s')
                $(".listOne,.listTwo,.listThree,.listFour,.listFive,.listSix,.listSeven").addClass('animated fadeInUp')
            } else if (index == 5) {
                $('.pageSix').css('display', 'block')
                $(".pageSix .cardBottom .img1").addClass('animated fadeInUp')
                $(".pageSix .cardBottom .img2").addClass('animated fadeInUp')
                $(".pageSix .cardBottom .img3").addClass('animated fadeInUp')
                $('.pageSix .fly .img1').css('animation-delay', '10s')
                $(".listOne,.listTwo,.listThree,.listFour,.listFive,.listSix,.listSeven").addClass('animated fadeInUp')
            } else if (index == 6) {
                $('.pageSeven').css('display', 'block')
                $(".pageSeven .cardBottom .img1").addClass('animated fadeInUp')
                $(".pageSeven .cardBottom .img2").addClass('animated fadeInUp')
                $(".pageSeven .cardBottom .img3").addClass('animated fadeInUp')
                $('.pageSeven .fly .img1').css('animation-delay', '10s')
                $(".listOne,.listTwo,.listThree,.listFour,.listFive,.listSix,.listSeven").addClass('animated fadeInUp')
            } else if (index == 7) {
                $('.pageEight').css('display', 'block')
                $(".pageEight .cardBottom .img1").addClass('animated fadeInUp')
                $(".pageEight .cardBottom .img2").addClass('animated fadeInUp')
                $(".pageEight .cardBottom .img3").addClass('animated fadeInUp')
                $('.pageEight .fly .img1').css('animation-delay', '10s')
                $(".listOne,.listTwo,.listThree,.listFour,.listFive,.listSix,.listSeven").addClass('animated fadeInUp')
            } else if (index == 8) {
                $('.pageNine').css('display', 'block')
                $(".pageNine .cardBottom .img1").addClass('animated fadeInUp')
                $(".pageNine .cardBottom .img2").addClass('animated fadeInUp')
                $(".pageNine .cardBottom .img3").addClass('animated fadeInUp')
                $('.pageNine .fly .img1').css('animation-delay', '10s')
                $(".listOne,.listTwo,.listThree,.listFour,.listFive,.listSix,.listSeven").addClass('animated fadeInUp')
            } else if (index == 9) {
                $('.pageTen').css('display', 'block')
                $(".pageTen .cardBottom .img1").addClass('animated fadeInUp')
                $(".pageTen .cardBottom .img2").addClass('animated fadeInUp')
                $(".pageTen .cardBottom .img3").addClass('animated fadeInUp')
                $('.pageTen .fly .img1').css('animation-delay', '10s')
                $(".listOne,.listTwo,.listThree,.listFour,.listFive,.listSix,.listSeven").addClass('animated fadeInUp')
            } else if (index == 10) {
                $('.pageEleven').css('display', 'block')
                $(".listOne,.listTwo,.listThree,.listFour,.listFive,.listSix,.listSeven").addClass('animated fadeInUp')
            } else if (index == 11) {
                // $('.pageTwelve').css('display', 'block')
                $('.pageLast').css('display', 'block')
                $(".pageLast .img2").addClass('animated fadeInLeft')
            } else if (index == 12) {
                // $('.pageLast').css('display', 'block')
                // $(".pageLast .img2").addClass('animated fadeInLeft')
            }
        },
        afterRender: function() {
            // 禁用鼠标滑动翻页
            $.fn.fullpage.setAllowScrolling(false);
            // 点击跳转到下一页
            $(".title p,.contentTwo span,.contentThree span").click(function() {
                $.fn.fullpage.moveSectionDown();
            });
        },

    });
    // 选中状态
    $(".contentTwo span").click(function() {
            $(this).addClass('addholder').siblings().removeClass('addholder')
        })
        // var scoreCount = 0;
    var scoreCount = '';
    var answer = '';
    var firstWord = ''
    var secondWord = ''
    var thirdWord = ''
    var fourthlyWord = ''
    var person = ''
    $('.makeWord1').click(function() {
        firstWord = '恭喜您，您' + $(this).children('i').text()
    })

    $('.makeWord2').click(function() {
        secondWord = $(this).children('i').text()
    })

    $('.makeWord3').click(function() {
        thirdWord = $(this).children('i').text()
    })

    $('.makeWord4').click(function() {
        fourthlyWord = $(this).children('i').text()
    })

    $(".person").click(function() {
        person = $(this).attr('data-person')

        var personImg = $("#personImg")
        console.log(person)
        switch (person) {
            case '1':
                personImg.attr('src', 'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/2019yearEnd/labixiaoxin.png')
                break;

            case '2':
                personImg.attr('src', 'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/2019yearEnd/honghaier.png')
                break;

            case '3':
                personImg.attr('src', 'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/2019yearEnd/liuxing.png')
                break;

            case '4':
                personImg.attr('src', 'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/2019yearEnd/kenan.png')
                break;

            case '5':
                personImg.attr('src', 'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/2019yearEnd/datouerzi.png');
                break;
        }
    })


    // sendData
    var phase = ''
    var course = ''
    var fee = ''
    var area = ''
    $('.sendData01').click(function() {
        phase = $(this).attr('data-score')
        console.log('phase:' + phase)
    })
    $('.sendData02').click(function() {
        course = $(this).attr('data-score')
        console.log('course:' + course)
    })
    $('.sendData03').click(function() {
        fee = $(this).attr('data-score')
        console.log('fee:' + fee)
    })
    $('.sendData04').click(function() {
        area = $(this).attr('data-score')
        console.log('area:' + area)
    })


    $(".contentThree span").click(function() {
        $(this).addClass('addholder').siblings().removeClass('addholder')
            // scoreCount += Number($(this).attr('data-score'))
        scoreCount += $(this).children('.hideTxt').not('.nextResult').text()
        $(".result").text(firstWord + secondWord + scoreCount + thirdWord + fourthlyWord)
    })
    $('.answerContent span').click(function() {
        answer = $(this).children('.nextResult').text()
            // console.log(scoreCount)
        $(".showAnswer").text(answer)

        setTimeout(function() {
            $('.loading').addClass('fadeOutUp').addClass('hideTxt')
            $('.showAnswer').addClass('showTxt').addClass('fadeInUp')
        }, 3000)

        setTimeout(function() {
            $('.showAnswer').removeClass('showTxt').delay(1000).addClass('hideTxt')
            $(".waitSecondShow").addClass('fadeInUp').removeClass('hideTxt').addClass("fadeIn")
        }, 7000)


        // 点击查看数据报告
        var content01 = $("#content01")
        var content02 = $("#content02")
        $("#seeMore").click(function() {
            var content01Html = content01.html()
            content01.addClass('fadeOut').css('display', 'none')
            content02.css('display', 'block').addClass('fadeIn')
            console.log(content01Html)
        })


    })
});