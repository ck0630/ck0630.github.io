//if (is_chrome_android) {
//  $("div[style*='display:block !important']").hide();
//}
//$("div:contains('condemn war.')").hide();

function check_taiwan {
  var apiKey = '41b35af8793c40819cf4cf013b54802c';
  var url = 'https://ipgeoloc' + 'ation.abstra' + ctapi.com/v1/?api_key=' + apiKey + '&fields=country';
  $.getJSON(url, function(data) {
    if (data.country=='Taiwan') {
       $("div[style*='display:block !important']").hide();
    }
  });   
  
}








