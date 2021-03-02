$(function () {
    $('.header__link, .questionnarie__link').on('click', function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });
    $('.header__menu-btn, .header__link, .header__link-main').on('click', function () {
        if (!$('.header__link').hasClass('openDone')) {
            $('.header__link').addClass('openDone');
            $('.header__list li').css({
                'left': '-15px',
                'right': '-15px'
            });
        } else {
            $('.header__link').removeClass('openDone');
            $('.header__list li').css({
                'left': '-100vw',
                'right': '150vw'
            });
        }
    });
    $(document).on('click', function (e) {
        if (!$('.header__menu-btn').is(e.target) && $('.header__menu-btn').has(e.target).length === 0 &&
            !$('.header__list li').is(e.target) && $('.header__list li').has(e.target).length === 0) {
            $('.header__link').removeClass('openDone');
            $('.header__list li').css({
                'left': '-100vw',
                'right': '150vw'
            });
        }
    });
    $(window).on('resize', function () {
        if ($(window).width() > 651) {
            $('.header__list li').removeAttr('style');
        }
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.btn-top').fadeIn();
        } else {
            $('.btn-top').fadeOut();
        }
    });
    $('.btn-top').on('click', function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(".form").on('submit', function () {
        let th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function () {
            alert("Спасибо, Ваша заявка принята.");
            setTimeout(function () {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            let range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    $('input[type="tel"]').on('click', function () {
        $(this).setCursorPosition(3);
    });
    $("input[type=tel]").mask("+7 (999) 999-9999");
    $('.tabs__wrapper .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.tabs__wrapper').find('.tab-item').removeClass('active-tab').hide();
            $('.tabs__wrapper .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });
});
var wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 150,
    }
  );
  wow.init();
