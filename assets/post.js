$(document).ready(function(){
    $('pre').addClass('prettyprint linenums');

    $.getScript('/assets/prettify/prettify.js',function(){
        prettyPrint();
    });
})