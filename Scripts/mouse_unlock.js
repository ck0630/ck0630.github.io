//=============enable right click=================
function removeContextMenuOnAll(tagName) { 
  var elements = document.getElementsByTagName(tagName); 
    for (var i = 0; i < elements.length; i++) { 
      enableRightClick(elements[i]); 
    } 
} 

function enableRightClickLight(el) { 
  el || (el = document); 
  el.addEventListener("contextmenu", bringBackDefault, true); 
} 

function enableRightClick(el) { 
  el || (el = document); 
  el.addEventListener("contextmenu", bringBackDefault, true); 
  el.addEventListener("dragstart", bringBackDefault, true); 
  el.addEventListener("selectstart", bringBackDefault, true); 
  el.addEventListener("click", bringBackDefault, true); 
  el.addEventListener("mousedown", bringBackDefault, true); 
  el.addEventListener("mouseup", bringBackDefault, true); 
} 

function restoreRightClick(el) { 
  el || (el = document); 
  el.removeEventListener("contextmenu", bringBackDefault, true); 
  el.removeEventListener("dragstart", bringBackDefault, true); 
  el.removeEventListener("selectstart", bringBackDefault, true); 
  el.removeEventListener("click", bringBackDefault, true); 
  el.removeEventListener("mousedown", bringBackDefault, true); 
  el.removeEventListener("mouseup", bringBackDefault, true); 
} 

function bringBackDefault(event) {
  event.returnValue = true; 
  (typeof event.stopPropagation === 'function') && 
  event.stopPropagation(); 
  (typeof event.cancelBubble === 'function') && 
  event.cancelBubble(); 
} 

function enableContextMenu(aggressive = false) { 
  void(document.ondragstart=null); 
  void(document.onselectstart=null); 
  void(document.onclick=null); 
  void(document.onmousedown=null); 
  void(document.onmouseup=null); 
  void(document.body.oncontextmenu=null); 
  enableRightClickLight(document); 
  if (aggressive) { 
    enableRightClick(document); 
    removeContextMenuOnAll("body"); 
    removeContextMenuOnAll("img"); 
    removeContextMenuOnAll("td"); 
    } 
} 

enableContextMenu();

//==============enable css==============================

function css_chg1() {
  var style=document.createElement('style');
  //style.innerHTML='* {user-select: text !important;} ::selection {background-color:blue!important;color:white!important}';
  style.innerHTML='body * {user-select:text!important;}';
  document.head.appendChild(style);
}

function css_chg2() {
  var style=document.createElement('style');
  style.innerHTML='body * :not(input):not(textarea){user-select:text!important;-webkit-touch-callout:none!important;-webkit-user-select:text!important;-moz-user-select:text!important;-khtml-user-select:text!important;-ms-user-select:text!important}';
  document.head.appendChild(style);
}

css_chg1();
css_chg2();


//===========enable select text================================

function ele_chg1() 
{
  document.onselectstart = null;
  document.onmousedown = null;
  document.body.style.userSelect = "auto";
  let style = document.createElement('style');
  style.innerHTML = '* { user-select: text !important; }';
  document.head.appendChild(style);
}

ele_chg1();

//============enable copy paste=============================

function ele_cpy1()
{
  allowCopyAndPaste = function(e)
  {
    e.stopImmediatePropagation();
    return true;
  };
  document.addEventListener('copy', allowCopyAndPaste, true);
  document.addEventListener('paste', allowCopyAndPaste, true);
  document.addEventListener('onpaste', allowCopyAndPaste, true);
}

ele_cpy1();