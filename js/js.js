/**
 * メニューを閉じる
 */
function OnClickMenu() {
    $("#menu_btn_check").click();
}

/**
 * コンテンツをふわっと表示させる
 */
$(function () {
    $(window).on('load scroll', function () {
        var winScroll = $(window).scrollTop();
        var winHeight = $(window).height();
        var scrollPos = winScroll + (winHeight * 0.8);

        $(".message_contents.fade_contents").each(function () {
            if ($(this).offset().top < scrollPos) {
                $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
            }
        });

        $(".news_contents.fade_contents").each(function () {
            if ($(this).offset().top < scrollPos) {
                $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
            }
        });

        $(".profile_contents.fade_contents").each(function () {
            if ($(this).offset().top < scrollPos) {
                $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
            }
        });

        $(".main_client_contents.fade_contents").each(function () {
            if ($(this).offset().top < scrollPos) {
                $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
            }
        });

        $(".development_results_contents.fade_contents").each(function () {
            if ($(this).offset().top < scrollPos) {
                $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
            }
        });

        $(".contact_contents.fade_contents").each(function () {
            if ($(this).offset().top < scrollPos) {
                $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
            }
        });
    });
});

/**
 * backコンテンツの移動
 */
$(function () {
    $(window).on('load scroll', function () {
        var winScroll = $(window).scrollTop();

        var back_img_element = document.querySelector(".back_img_1.back_move");
        back_img_element.style.transform = `translate(0, -${winScroll * 0.1}%)`;

        var back_img_element2 = document.querySelector(".back_img_2.back_move");
        back_img_element2.style.transform = `translate(0, -${winScroll * 0.1}%)`;

        var back_img_element3 = document.querySelector(".back_img_3.back_move");
        back_img_element3.style.transform = `translate(0, -${winScroll * 0.1}%)`;

        var back_img_element4 = document.querySelector(".back_img_4.back_move");
        back_img_element4.style.transform = `translate(0, -${winScroll * 0.1}%)`;

        var back_img_element5 = document.querySelector(".back_img_5_cover.back_move");
        back_img_element5.style.transform = `translate(0, -${winScroll * 0.05}%)`;
    });
})

/**
 * フローティングボタンの設定
 */
beforePos = 0;
$(window).on('load scroll', function () {
    var elemTop = $('#Message').offset().top;
    var scroll = $(window).scrollTop();
    // 表示・非表示設定
    if (scroll == beforePos) {

    } else if (elemTop > scroll) {
        $('.floating-banner').removeClass("show");
    } else {
        $('.floating-banner').addClass("show");
    }

    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
});


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function SetTime() {
    var timeobj = document.getElementsByClassName("time_text");

    var now = new Date()
    var nowyear = now.getFullYear()
    var week = weeks[now.getDay()];
    var month = months[(now.getMonth())];
    var day = ('0' + now.getDate()).slice(-2);
    var nowhour = ('0' + now.getHours()).slice(-2);
    var nowminutes = ('0' + now.getMinutes()).slice(-2);
    var nowseconds = ('0' + now.getSeconds()).slice(-2);

    text = week + " " + day + " " + month + "," + nowyear + " " + nowhour + "：" + nowminutes + "：" + nowseconds;
    timeobj[0].innerHTML = text;
    timeobj[1].innerHTML = text;
}

setInterval(SetTime, 1000);
