
window.onscroll=loopScroll
new WOW().init();
showSlides()
hideSlides()
showProducts()
slickInit()
calculatePrices()
addIconSlick()
function showSlides(){
    $('.menu-toggle').click(function(){
        $('.mobile-nav').addClass('active')
    })
    $('.btn-exit').click(function(){
        $(this).parent().removeClass('active')
    })
    $(document).keydown(e=>{
        e.which===27?$('.active').removeClass('active'):""
    })
    $('.btn-search').click(function(){
        $('.search-container').addClass('active')
        $('#search-input').focus()
    })
    $('.btn-login').click(function(){
        $('.login').addClass('active')
    })
    $('.mobi-btn-login').click(function(){
        $('.login').addClass('active')
    })
}

function hideSlides(){
    $('.mobile-nav a').click(function(){
        $('.mobile-nav').removeClass('active')
    })
}

function showProducts(){
    $('.sidebar-products').click(function(){
        $('.sidebar-products-list').toggleClass('active')
        $('.fa-angle-down').toggleClass('fa-angle-up')
    })
}
function loopScroll(){
    var elToShow=document.querySelectorAll('.scroll-to-top')
    var tooltip=document.querySelector('.tooltip')
    var header=document.querySelector('#header')
    elToShow.forEach(el=>{
        if(el.id=='to-top'){
            if(isToTopViewPort(el)){
              tooltip.classList.add('start')
              header.classList.add('start','animate__fadeInDown')
            }
            else{
                tooltip.classList.remove('start')
                header.classList.remove('start','animate__fadeInDown')
            }
        }
    })
}
function isToTopViewPort(el){
    let rect =el.getBoundingClientRect()
    return (
        (rect.top<0)
    )
}

function slickInit(){
    $('.slider-products').each(function(){
        var $ts= $(this).find('.slick-container')
        var $slickActive=$(this).find('.slick-wrapper')
        var slidesPerView=$ts.attr('data-slides-per-view')
        var lgSlidesScroll=parseInt($ts.attr('data-lg-slides-scroll'),10);
        var slidesScroll=parseInt($ts.attr('data-slides-scroll'),10); 
        if(slidesPerView=='responsive'){
            var slidesPerView=parseInt($ts.attr('data-add-slides'),10)
            var lgSildes=parseInt($ts.attr('data-lg-slides'),10)
            var mdSildes=parseInt($ts.attr('data-md-slides'),10)
            var smSildes=parseInt($ts.attr('data-sm-slides'),10)
            var xsSildes=parseInt($ts.attr('data-xs-slides'),10)
        }
        $slickActive.slick({
            arrows:true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            dots:true,
            slidesToShow: slidesPerView,
            slidesToScroll:lgSlidesScroll,
            responsive:[{
                breakpoint:1600,
                settings:{
                    slidesToShow:lgSildes
                    }
                
                },
                {
                    breakpoint:1200,
                    settings:{
                        slidesToShow:mdSildes
                    }
                },
                {
                    breakpoint:992,
                    settings:{
                        slidesToShow:smSildes,
                        slidesToScroll:slidesScroll
                    }
                },
                {
                    breakpoint:768,
                    settings:{
                        slidesToShow:xsSildes,
                        slidesToScroll:slidesScroll

                    }
                }
            ]
        })
    })
}
function calculatePrices() {
    var $productPriceEl=$('.product-price.discount')
    var $productPriceDiscountEl=$('.product-price-discount')
    $('.product-discount-percent').each(function(index) {
        console.log($productPriceEl[index])
        var $discountPer= $(this)[0].innerHTML
        var $productPrice=accounting.unformat($productPriceEl[index].innerHTML)
        var $discountPrice=parseInt($productPrice)*((100+parseInt($discountPer))/100)
        var $netPrice=Math.round(($discountPrice)/100000)*100000
        $productPriceDiscountEl[index].innerHTML=(accounting.formatMoney($netPrice,{symbol:'VND', format:'%v %s',precision:'0'}))
    })
}
function addIconSlick(){
    var iconNext='<i class="fa-solid fa-angle-right"></i>'
    var iconPrev='<i class="fa-solid fa-angle-left"></i>'
    $('.slick-next').append(iconNext)
    // $('.slick-next').addClass('animate__animated animate__fadeInRight')
    $('.slick-prev').append(iconPrev)
    // $('.slick-prev').addClass('animate__animated animate__fadeInLeft')
}
