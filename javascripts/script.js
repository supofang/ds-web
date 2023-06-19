$(document).ready(function () {
  $('.js-fancybox').fancybox({
    maxWidth: 1024,
    maxHeight: 728,
    padding: 0,
    margin: 0,
    fitToView: false,
    width: '75%',
    height: '60%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none',
  });

  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true
  });

  $('.carousel').flickity({
    // options
    cellAlign: 'left',
    // contain: true
    imagesLoaded: true,
    prevNextButtons: false,
    // pageDots: false
  });

  /*SROLL*/
  $('.arrow').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      "scrollTop": $(".step").offset().top
    })
  });

  /*TAB*/
  $('.js-tab').find('.js-tabs li:eq(0)').addClass('current');
  $('.js-tabs li').on('click', function (g) {
    var tab = $(this).closest('.js-tab')
      , index = $(this).closest('li').index();

    tab.find('.js-tabs > li').removeClass('current');
    $(this).closest('li').addClass('current');

    tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item').not('.js-tabs-item:eq(' + index + ')').hide().fadeOut();
    tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item:eq(' + index + ')').fadeIn();

    g.preventDefault();
  });

  var playpause = $('.sound');
  var myVideo = $('#audio');
  myVideo[0].play();
  $(playpause).on("click", function () {
    $(this).toggleClass('sound-mute');
    playPause();
  });
  function playPause() {
    if (myVideo[0].paused) {
      myVideo[0].play();
    }
    else {
      myVideo[0].pause();
    }
  }

  /*AUDIOS*/
  $('.btn-audio').on('click', function (e) {
    e.preventDefault();
    var myAudio = $(this).next();
    playpause.addClass('sound-mute');
    myVideo[0].pause();
    myAudio[0].play();
  })

  var audios = $('.audios').find('audio');
  // 暂停函数
  function pauseAll() {
    var self = this;
    [].forEach.call(audios, function (i) {
      // 将audios中其他的audio全部暂停
      i !== self && i.pause();
      i.currentTime = 0;
    })
  }
  // 给play事件绑定暂停函数
  [].forEach.call(audios, function (i) {
    i.addEventListener("play", pauseAll.bind(i));
  })
})