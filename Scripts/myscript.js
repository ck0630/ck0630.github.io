is_ipad = detect_ipad();
is_iphone = /iphone/.test(navigator.userAgent.toLowerCase());
is_safari8 = is_iphone && get_browser_version() >= 8;
is_safari9 = is_iphone && get_browser_version() >= 9; //so check 順序 9 8 7 ...
is_chrome = /chrome/.test(navigator.userAgent.toLowerCase());
is_android = /android/.test(navigator.userAgent.toLowerCase());
is_chrome_android = is_chrome & is_android;
is_safari = (navigator.userAgent.toLowerCase().indexOf('safari') > -1) &&
            (navigator.userAgent.toLowerCase().indexOf('chrome') < 0);

function jump1(url) {
    if (typeof post_map == "function") post_map();
    location.href = url;
}

function jump(url) {
    //if (is_ipad) { this.frames["ivid"].location.href = url; } ==> chrome ver 35.0 以後不能用
    if (is_ipad) {
        //alert(navigator.userAgent.toLowerCase());
        //if (is_chrome && !is_chrome_android) { this.frames["ivid"].src = url; }
        //desk and mobile chrome is same from 20140824
        if (is_chrome) { top.frames["ivid"].src = url; }
        else { top.frames["ivid"].location.href = url; }
    }
    else {
        //location.href = url;
        if (is_iphone) location.href = url;
        else window.open(url, "video");
    }

    // check in frame ?
    //if (window.self != window.top) {
    //    window.top.location = window.self.location;
    //}
}

function detect_ipad() {
    //alert(window.innerWidth + ' ' + window.innerHeight);
    //return (navigator.userAgent.match(/iPad/i) != null);
    //return (window.innerWidth > window.innerHeight);
    //return (navigator.userAgent.match(/iPad/i) != null) && (window.innerWidth < window.innerHeight);
    //return ($(window).innerWidth() >= 1024 && $(window).innerHeight() >= 400);
    if (top.innerWidth != undefined) {
        return top.innerWidth >= 1024 && top.innerHeight >= 400;
    } else {
        return top.documentElement.clientWidth >= 1024 && top.documentElement.clientHeight >= 400;
    }
}

function show_return() {
    if (is_ipad) {
        document.getElementById("div_ivid").disabled = false;
        document.getElementById("div_ivid").style.visibility = "visible";
        document.getElementById("div_ivid").style.width = ($(window).innerWidth() - 320 - 30) + "px";
        document.getElementById("div_list").style.width = "320px";
        document.getElementById("div_list").style.height = "100%";
        $(".comment").css("font-size", "x-large");
    } else {
        document.getElementById("div_ivid").disabled = true;
        document.getElementById("div_ivid").style.visibility = "hidden";
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function bindEvent(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else {
        element.attachEvent('on' + type, handler);
    }
}

function get_browser_version() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) { return 'Opera ' + tem[1]; }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
    return M[1];
}

function onImageReady(selector, handler) { //onImageReady("#photos img:first");
    var list;

    // If given a string, use it as a selector; else use what we're given
    list = typeof selector === 'string' ? $(selector) : selector;
    var total = list.length;
    // Hook up each image individually
    list.each(function (index, element) {
        if (element.complete) {
            // Already loaded, fire the handler (asynchronously)
            setTimeout(function () {
                fireHandler.call(element);
            }, 0); // Won't really be 0, but close
        }
        else {
            // Hook up the handler
            $(element).bind('load', fireHandler);
        }
    });

    function fireHandler(event) {
        // Unbind us if we were bound
        $(this).unbind('load', fireHandler);
        total--;
        // Call the handler
        if (total == 0)
            handler.call(this);
    }
}

function video_init() {
    $("video").each(function () {
        $(this).bind("play", function () {
            var this0 = this;
            $("video").each(function () {
                if (this != this0) this.pause();
            });
        });
    });
}

function stop_all_video(except_current) {
    $("video").each(function () {
        if (this != except_current) this.pause();
    });
}

function goBack() {
    //alert('goback');
    history.go(-1);
    //location.href = $.cookie("home_url");
}


