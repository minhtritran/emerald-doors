///////////////////////////////////////////////////////////////////
//MISC
///////////////////////////////////////////////////////////////////

//This is for google-analytics
var _gaq = _gaq || [];
 _gaq.push(['_setAccount', 'UA-22691468-1']);
 _gaq.push(['_trackPageview']);

 (function() {
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
 })();


 
 
 
 
 
///////////////////////////////////////////////////////////////////
//JQUERY
///////////////////////////////////////////////////////////////////

//This makes the left menu stay fixed on screen when scrolling down
/*
$(window).scroll(function () {
    if (! isScrolledIntoView($('.navbar')))
    {
        $('.leftcontainer').css({ position: 'fixed', display: 'block'});
    }
    else
    {
        $('.leftcontainer').css({ position: 'relative' });
    }
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
}
*/