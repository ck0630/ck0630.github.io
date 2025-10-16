function floatNavigator(){
	if (document.all){document.all.PsNavigator.style.pixelTop = document.body.scrollTop + document.body.clientHeight - 48;document.all.PsNavigator.style.pixelLeft = document.body.scrollLeft + document.body.clientWidth - 192;}
	else if(document.getElementById){document.getElementById('PsNavigator').style.top = window.pageYOffset + 'px';document.getElementById('PsNavigator').style.left = window.pageXOffset + 'px';}
}
if (document.all){window.onresize = SetResizeLeft;window.onscroll = floatNavigator;}
else setInterval ('floatNavigator()', 100);
function initNavigator(){
if (document.all){document.all.PsNavigator.style.pixelTop = document.body.scrollTop + document.body.clientHeight - 48;document.all.PsNavigator.style.pixelLeft = document.body.scrollLeft + document.body.clientWidth - 192;document.all.PsNavigator.style.visibility = 'visible';}
	else if (document.getElementById){document.getElementById('PsNavigator').style.top = window.pageYOffset + 'px';document.getElementById('PsNavigator').style.left = window.pageYOffset + 'px';document.getElementById('PsNavigator').style.visibility = 'visible';}
}
function SetResizeLeft(){
	if (document.all){document.all.PsNavigator.style.pixelTop = document.body.scrollTop + document.body.clientHeight - 48;document.all.PsNavigator.style.pixelLeft = document.body.scrollLeft + document.body.clientWidth - 192;}
	else if (document.getElementById){document.getElementById('PsNavigator').style.top = window.pageYOffset + 'px';document.getElementById('PsNavigator').style.left = window.pageYOffset + 'px';}
}