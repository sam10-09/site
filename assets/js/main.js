let myBar = document.getElementById("myBar");
if(myBar) {
    window.onscroll = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        myBar.style.width = scrolled + "%";
    }
}

$(function() {
    $(".slider, .our-happy__slider, .masonry-el__slideshow").slick({});
    $(".review__slider, .blogs-slider, .masonry-el__slider").slick({
        arrows: false,
        dots: true
    })
});