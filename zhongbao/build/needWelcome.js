/**
 * Created by admin on 2015/9/16.
 */

$(document).ready(function(){

    var parentHeight =  $(".superiority_items").height();
    var selfHeight = $(".bigCircle").height();

    $(".bigCircle").css("top",parentHeight/2-selfHeight/2);


})
