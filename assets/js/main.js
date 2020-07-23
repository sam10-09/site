window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
$(function() {
    $(".slider, .our-happy__slider").slick({});
    $(".review-slider, .blogs-slider").slick({
        arrows: false,
        dots: true
    })
});