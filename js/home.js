$(document).ready(function ()
{
  var bodyH = $('body').height();
  var winH = $(window).height();
  if (bodyH > 800)
  {
    $('.body-content').css('height', winH - 410);
  } else
  {
    $('.body-content').css('height', winH);
  }
  $('#countDown').countdown({ until: new Date(2014, 3 - 1, 31),
    layout: '{dn} {dl}, {hn} {hl}, {mn} {ml}, and {sn} {sl}'
  });
});

$(window).resize(function () {
  var bodyH = $('body').height();
  var winH = $(window).height();
  if (bodyH > 800)
  {
    $('.body-content').css('height', winH - 410);
  } else
  {
    $('.body-content').css('height', winH);
  }
});

$('#genInfo').mouseenter(function () {
  $.ajax({
    url: 'gen_info_menu.html',
    dataType: 'html',
    cache: true,
    success: function (data) {
      $('#genInfoContent').html(data);
    }
  });
});

$('#workShops').mouseenter(function () {
  $.ajax({
    url: 'workshops_menu.html',
    dataType: 'html',
    cache: true,
    success: function (data) {
      $('#workShopsContent').html(data);
    }
  });
});

$('#volunteer').mouseenter(function () {
  $.ajax({
    url: 'volunteer_menu.html',
    dataType: 'html',
    cache: true,
    success: function (data) {
      $('#volunteerContent').html(data);
    }
  });
});

$('#tickets').mouseenter(function () {
  $.ajax({
    url: 'tickets_menu.html',
    dataType: 'html',
    cache: true,
    success: function (data) {
      $('#ticketsContent').html(data);
    }
  });
});

$('#footerInfo1').mouseenter(function ()
{
  $('#footerInfo1Con').css('display', 'none');
  $(this).append('<div id="footerInfo1Exp"></div>')
  $.ajax(
  {
    url: 'footer1.html',
    dataType: 'html',
    cache: true,
    success: function (data)
    {
      $('#footerInfo1Exp').html(data);
    }
  });
});

$('#footerInfo1').mouseleave(function ()
{
  $('#footerInfo1Exp').remove();
  $('#footerInfo1Con').css('display', 'block');
});

$('#footerInfo2').mouseenter(function ()
{
  $('#footerInfo2Con').css('display', 'none');
  $(this).append('<div id="footerInfo2Exp"></div>')
  $.ajax(
  {
    url: 'footer2.html',
    dataType: 'html',
    cache: true,
    success: function (data)
    {
      $('#footerInfo2Exp').html(data);
    }
  });
});

$('#footerInfo2').mouseleave(function ()
{
  $('#footerInfo2Exp').remove();
  $('#footerInfo2Con').css('display', 'block');
});

$('#footerInfo3').mouseenter(function ()
{
  $('#footerInfo3Con').css('display', 'none');
  $(this).append('<div id="footerInfo3Exp"></div>')
  $.ajax(
  {
    url: 'footer3.html',
    dataType: 'html',
    cache: true,
    success: function (data)
    {
      $('#footerInfo3Exp').html(data);
    }
  });
});

$('#footerInfo3').mouseleave(function ()
{
  $('#footerInfo3Exp').remove();
  $('#footerInfo3Con').css('display', 'block');
});

$('#footerInfo4').mouseenter(function ()
{
  $('#footerInfo4Con').css('display', 'none');
  $(this).append('<div id="footerInfo4Exp"></div>')
  $.ajax(
  {
    url: 'footer4.html',
    dataType: 'html',
    cache: true,
    success: function (data)
    {
      $('#footerInfo4Exp').html(data);
    }
  });
});

$('#footerInfo4').mouseleave(function ()
{
  $('#footerInfo4Exp').remove();
  $('#footerInfo4Con').css('display', 'block');
});

$('.footer-info').mouseenter(function ()
{
  $(this).addClass('footer-info-hover');
  $(this).addClass('pulsor');
});

$('.footer-info').mouseleave(function ()
{
  $(this).removeClass('footer-info-hover');
});

$('.last-col .footer-info').mouseenter(function ()
{
  $(this).addClass('footer-info-hover-last');
});

$('.last-col .footer-info').mouseleave(function ()
{
  $(this).removeClass('footer-info-hover-last');
});