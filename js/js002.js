var theme_list_open = false;
$(document).ready(function() {
    // 固定高度
    function fixHeight() {

        var headerHeight = $("#switcher").height(); // 獲取高度值

        $("#iframe").attr("height", $(window).height() + "px");

    }
    // 当浏览器窗口的尺寸改变,resize 被發送到window元素
    $(window).resize(function() {

        fixHeight();

    }).resize();
    // 將active的類屬性添加到圖形監視器
    $('.icon-monitor').addClass('active');
    // 綁定click事件
    $(".icon-mobile-3").click(function() {
        // 刪除.添加類
        $('#iframe-wrap').removeClass().addClass('mobile-width-3');
        $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
        $(this).addClass('active');
        $("body").css("background-color", "#000000")
        return false;
    });

    $(".icon-mobile-2").click(function() {
        $('#iframe-wrap').removeClass().addClass('mobile-width-2');
        $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
        $(this).addClass('active');
        $("body").css("background-color", "#000000")
        return false;
    });

    $(".icon-mobile-1").click(function() {
        $('#iframe-wrap').removeClass().addClass('mobile-width');
        $('.icon-tablet,.icon-mobile,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
        $(this).addClass('active');
        $("body").css("background-color", "#000000")
        return false;
    });

    $(".icon-tablet").click(function() {
        $('#iframe-wrap').removeClass().addClass('tablet-width');
        $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
        $(this).addClass('active');
        $("body").css("background-color", "#000000")
        return false;
    });

    $(".icon-monitor").click(function() {
        $('#iframe-wrap').removeClass().addClass('full-width');
        $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
        $(this).addClass('active');
        $("body").css("background-color", "#ffffff")
        return false;
    });

    // html id——cate/rid 
    // 設置cate/rid的值
    if ($("#cate").val() == "27") {
        if ($("#rid").val() != "629" && $("#rid").val() != "915" && $("#rid").val() != "1559") {
            $(".icon-mobile-2").click(); // 綁定
        }
    }
    $("#ad-switcher h2 span").click(function() {
        $("#ad-switcher").fadeOut(); //使用淡出效果来隐藏被選元素：
    });
    $("#ad-switcher").hover(function() { //hover 选择器用于选择鼠标指针浮动在上面的元素
        $("#ad-switcher").css("opacity", "1");
    }, function() {
        $("#ad-switcher").css("opacity", ".7");
    });
});

function Responsive($a) {
    if ($a == true) $("#Device").css("opacity", "100");
    if ($a == false) $("#Device").css("opacity", "0");
    $('#iframe-wrap').removeClass().addClass('full-width');
    $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
    $(this).addClass('active');
    return false;
};
$(document).ready(function() {
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "0",
            "bdSize": "16"
        },
        "share": {}
    };
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89343201.js?cdnversion=' + ~(-new Date() / 36e5)]
});