       var theme_list_open = false;

        $(document).ready(function() {

            function fixHeight() {

                var headerHeight = $("#switcher").height();

                $("#iframe").attr("height", $(window).height() + "px");

            }

            $(window).resize(function() {

                fixHeight();

            }).resize();

            $('.icon-monitor').addClass('active');

            $(".icon-mobile-3").click(function() {
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

            if ($("#cate").val() == "27") {
                if ($("#rid").val() != "629" && $("#rid").val() != "915" && $("#rid").val() != "1559") {
                    $(".icon-mobile-2").click();
                }
            }
            $("#ad-switcher h2 span").click(function() {
                $("#ad-switcher").fadeOut();
            });
            $("#ad-switcher").hover(function() {
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