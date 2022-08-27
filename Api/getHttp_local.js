var getHttp_local_process = false;

function url_localize(url) {
    var result = url;
    if (getHttp_local_process)
        result = url.replace("viewa.tldc.com.tw", "127.0.0.1/viewa");
    return result;
}

function getHttp(fromUrl, data, succeed) {
    var url = 'http://127.0.0.1/viewa/Api/getHttp.aspx/?url=' + encodeURIComponent(fromUrl);
    url = url_localize(url);
    if (fromUrl.indexOf("&callback=?") == -1) url += '&callback=?';
    if ($.isFunction(data)) {
        succeed = data;
        data = undefined;
    }
    $.getJSON(url, data, function (result) {
        var html = result.json[0];
        succeed(html);
    });
}

function getHttpCookie(fromUrl, cookie_uri, cookie_id, cookie_value, data, succeed) {
    var url = 'http://127.0.0.1/viewa/Api/getHttp.aspx/?url=' + encodeURIComponent(fromUrl)
        + "&cookie_uri=" + encodeURIComponent(cookie_uri)
        + "&cookie_id=" + encodeURIComponent(cookie_id)
        + "&cookie_value=" + encodeURIComponent(cookie_value);
    url = url_localize(url);
    if (fromUrl.indexOf("&callback=?") == -1) url += '&callback=?';
    if ($.isFunction(data)) {
        succeed = data;
        data = undefined;
    }
    $.getJSON(url, data, function (result) {
        var html = result.json[0];
        succeed(html);
    });
}

function getHttpSync(fromUrl) {
    var result = '';
    var url = 'http://127.0.0.1/viewa/Api/getHttpSync.aspx/?url=' + encodeURIComponent(fromUrl);
    url = url_localize(url);
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);
    if (request.status == 200) {
        result = request.responseText;
    }
    return result;
}

function getHttpSyncCookie(fromUrl, cookie_uri, cookie_id, cookie_value) {
    var result = '';
    var url = 'http://127.0.0.1/viewa/Api/getHttpSync.aspx/?url=' + encodeURIComponent(fromUrl)
        + "&cookie_uri=" + encodeURIComponent(cookie_uri)
        + "&cookie_id=" + encodeURIComponent(cookie_id)
        + "&cookie_value=" + encodeURIComponent(cookie_value);
    url = url_localize(url);
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);
    if (request.status == 200) {
        result = request.responseText;
    }
    return result;
}

//============ cache =================

function getHttpCache(fromUrl, data, succeed, sec) {
    var url = 'http://127.0.0.1/viewa/Api/getHttp.aspx/?url=' + encodeURIComponent(fromUrl);
    url = url_localize(url);
    if (fromUrl.indexOf("&callback=?") == -1) url += '&callback=?';
    if ($.isFunction(data)) {
        sec = succeed;
        succeed = data;
        data = undefined;
    }
    url += '&sec=' + sec;
    $.getJSON(url, data, function (result) {
        var html = result.json[0];
        succeed(html);
    });
}

function getHttpCookieCache(fromUrl, cookie_uri, cookie_id, cookie_value, data, succeed, sec) {
    var url = 'http://127.0.0.1/viewa/Api/getHttp.aspx/?url=' + encodeURIComponent(fromUrl)
        + "&cookie_uri=" + encodeURIComponent(cookie_uri)
        + "&cookie_id=" + encodeURIComponent(cookie_id)
        + "&cookie_value=" + encodeURIComponent(cookie_value);
    url = url_localize(url);
    if (fromUrl.indexOf("&callback=?") == -1) url += '&callback=?';
    if ($.isFunction(data)) {
        sec = succeed;
        succeed = data;
        data = undefined;
    }
    url += '&sec=' + sec;
    $.getJSON(url, data, function (result) {
        var html = result.json[0];
        succeed(html);
    });
}

function getHttpSyncCache(fromUrl, sec) {
    var result = '';
    var url = 'http://127.0.0.1/viewa/Api/getHttpSync.aspx/?url=' + encodeURIComponent(fromUrl) + '&sec=' + sec;
    url = url_localize(url);
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);
    if (request.status == 200) {
        result = request.responseText;
    }
    return result;
}

function getHttpSyncCookieCache(fromUrl, cookie_uri, cookie_id, cookie_value, sec) {
    var result = '';
    var url = 'http://127.0.0.1/viewa/Api/getHttpSync.aspx/?url=' + encodeURIComponent(fromUrl)
        + "&cookie_uri=" + encodeURIComponent(cookie_uri)
        + "&cookie_id=" + encodeURIComponent(cookie_id)
        + "&cookie_value=" + encodeURIComponent(cookie_value)
        + "&sec=" + sec;
    url = url_localize(url);
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);
    if (request.status == 200) {
        result = request.responseText;
    }
    return result;
}

//========= chromium + cache ====================

function getHttpChromiumCache(fromUrl, data, succeed, sec_cache,
    is_convert_utf8) {
    var url = 'http://127.0.0.1/viewa/Api/getHttpChromium.aspx/?url=' + encodeURIComponent(fromUrl);
    url = url_localize(url);
    if (fromUrl.indexOf("&callback=?") == -1) url += '&callback=?';
    if ($.isFunction(data)) {
        is_convert_utf8 = sec_cache;
        sec_cache = succeed;
        succeed = data;
        data = undefined;
    }

    url += '&sec_cache=' + sec_cache +
           '&is_convert_utf8=' + is_convert_utf8;

    $.getJSON(url, data, function (result) {
        var html = result.json[0];
        succeed(html);
    });
}

function getHttpChromiumSyncCache(fromUrl, sec, sleep, is_convert_utf8) {
    var result = '';
    var url = 'http://127.0.0.1/viewa/Api/getHttpChromiumSync.aspx/?url=' + encodeURIComponent(fromUrl) + '&sec=' + sec + '&sleep=' + sleep + '&is_convert_utf8=' + is_convert_utf8;
    url = url_localize(url);
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);
    if (request.status == 200) {
        result = request.responseText;
    }
    return result;
}




