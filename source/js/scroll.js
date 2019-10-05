$(function(){
    var SPACING = 20;
    var $toc = $('._toc');
    var $ava = $('#avator');
    
    if($toc.length){
        var minScrollTop = $toc.offset().top - SPACING;
        var tocState = {
            start: {
                'position':'absolute',
                'top':minScrollTop
            },
            process: {
                'position':'fixed',
                'top':SPACING
            }
        }
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();

            if(scrollTop < minScrollTop){
                $toc.css(tocState.start);
            }
            else{
                $toc.css(tocState.process);
            }
        })
    }

    if($ava.length) {
        let minScrollTop = $ava.offset().top - 30;
        let avaState = {
            start: {
                'position':'absolute',
                'top':minScrollTop
            },
            process: {
                'position':'fixed',
                'top':SPACING
            }            
        }
        $(window).scroll(function(){
            let scrollTop = $(window).scrollTop();
            if(scrollTop < minScrollTop) {
                $ava.css(avaState.start);
            }
            else {
                $ava.css(avaState.process);
            }

        })
    }
});
$(window).resize(function(){
    var $toc = $('._toc');
    var minwidth = 1480;
    var $avator = $('#avator');
    var $postswrapper = $('.posts-wrapper');
    if($(window).width()<1480){
        $toc.css("display","none");
    }
    else {
        $toc.css("display","block");
    }
    if($(window).width()<950){
        $avator.css("display","none");
        $postswrapper.css("width","100%");
    }
    else {
        $avator.css("display","block");
        $postswrapper.css("width","73%");

    }
});
$(function(){
    var $toc = $('._toc');
    var minwidth = 1480;
    var $avator = $('#avator');
    var $postswrapper = $('.posts-wrapper');
    if($(window).width<1480){
        $toc.css("display","none");
    }
    if($(window).width()<950){
        $avator.css("display","none");
        $postswrapper.css("width","100%");
    }
});
$(function(){
    var HEADERFIX = 30;
    var $toclink = $('.toc-link'),
    $headerlink = $('.headerlink');
    $(window).scroll(function(){
        var headerlinkTop = $.map($headerlink,function(link){
            return $(link).offset().top;
        });
        var scrollTop = $(window).scrollTop();
        for(var i=0;i<$toclink.length;i++){
            var isLast = i+1 === $toclink.length,
            currentTop = headerlinkTop[i] - HEADERFIX,
            nextTop = isLast ? Infinity : headerlinkTop[i+1]- HEADERFIX;
            if(currentTop < scrollTop && scrollTop <= nextTop){
                $($toclink[i]).addClass('active');
            }
            else{
                $($toclink[i]).removeClass('active');
            }
        }
    });
});
