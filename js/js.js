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