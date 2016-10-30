// 两张扑克牌，数字相同消掉

$(function(){
    //实现随机洗牌
    neusoft.matchingGame.deck.sort(shuffle);
    //alert(neusoft.matchingGame.deck);
    var $card=$(".card");
    for(var i= 0;i<11;i++)
    {
        $card.clone().appendTo($("#cards"));
    }
    //对每张牌进行设置
    $(".card").each(function(index)
    {
        //调整坐标
        $(this).css({
            "left":(neusoft.matchingGame.cardWidth+20)*(index%4)+"px",
            "top":(neusoft.matchingGame.cardHeight+20)*Math.floor(index/4)+"px"
        });
        //吐出一个牌号
        var pattern=neusoft.matchingGame.deck.pop();
        //暂存牌号
        $(this).data("pattern",pattern);
        //把其翻牌后的对应牌面附加上去
        $(this).find(".back").addClass(pattern);
        //点击牌的功能函数挂接
        $(this).click(selectCard);
    });
});


