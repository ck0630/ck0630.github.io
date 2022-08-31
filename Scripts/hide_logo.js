//if (is_chrome_android) {
//  $("div[style*='display:block !important']").hide();
//}
//$("div:contains('condemn war.')").hide();

function hide_it() {
  $("div[style*='display:block !important']").hide();
}

function check_taiwan() {
  var apiKey = '41b35af8793c40819cf4cf013b54802c';
  var url = 'https://ipgeoloc' + 'ation.abstra' + 'ctapi.com/v1/?api_key=' + apiKey + '&fields=country';
  $.getJSON(url, function(data) {
    if (data.country=='Taiwan') {
       document.cookie = "is_taiwan=true; max-age=2147483647; path=/;";
       hide_it();
    }
  });   
}

if (getCookie("is_taiwan")=="true") {
  hide_it();
} else {
  check_taiwan();
}
