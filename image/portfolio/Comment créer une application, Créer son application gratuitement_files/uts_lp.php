var uts_ip = '196.185.116.111';
var uts_ref = 'https://fr.appypie.com/?_gl=1%2A1v00ls9%2A_gcl_aw%2AR0NMLjE1OTY4MTAwODAuQ2p3S0NBanc5N1A1QlJCUUVpd0FHZmxWNmZMY0IyeGtTdjdjdjU4SkRvUzNMX2pLS2UyS0JTUGdrOFZPb3l1ZngzNGpKazlSandPbjNCb0NvdGtRQXZEX0J3RQ..';
var uts_protocol = '';
var uts_now = '2020-08-08 17:43:18';
var uts_dnt = '0';
var uts_lc_cookievalue = '';
var uts_lc_uts_id = '';
var uts_lcid = 'LC1596810043.0246554';
var uts_calling_domain = 'www.linkconnector.com';
var lc_mref = 'https%3A%2F%2Ffr.appypie.com%2F%3F_gl%3D1%252A1v00ls9%252A_gcl_aw%252AR0NMLjE1OTY4MTAwODAuQ2p3S0NBanc5N1A1QlJCUUVpd0FHZmxWNmZMY0IyeGtTdjdjdjU4SkRvUzNMX2pLS2UyS0JTUGdrOFZPb3l1ZngzNGpKazlSandPbjNCb0NvdGtRQXZEX0J3RQ..';
var uoffset = -8;
// Dynamic end
var e;
try {
	function ScriptFunction(path){var x=document.createElement("SCRIPT");x.src=path;try{document.body.appendChild(x)}
catch(e){document.head.appendChild(x)}}
function ImgFunction(path){var x=document.createElement("IMG");x.setAttribute("src",path);x.setAttribute("height","1");x.setAttribute("width","1");try{document.body.appendChild(x)}
catch(e){document.head.appendChild(x)}}
function uts_readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}
return null}
function uts_setCookie(cname,cvalue,exdays,domain){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+'='+cvalue+';'+expires+'; path=/; domain=.'+domain+';'}
function uts_getHostName(url){var match=url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);if(match!=null&&match.length>2&&typeof match[2]==='string'&&match[2].length>0){return match[2]}
else{return null}}
function uts_getDomain(url){var hostName=uts_getHostName(url);var domain=hostName;if(hostName!=null){var parts=hostName.split('.').reverse();if(parts!=null&&parts.length>1){domain=parts[1]+'.'+parts[0];if(hostName.toLowerCase().indexOf('.co.uk')!=-1&&parts.length>2){domain=parts[2]+'.'+domain}}}
return domain}
function uts_getQueryStringValue(key){return decodeURIComponent(uts_uri.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(key).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}
function uts_getLSCookie(c_name){return localStorage.getItem(c_name)}
function uts_setLSCookie(c_name,value){return localStorage.setItem(c_name,value)}
if(typeof uts_now==='undefined'){var d=new Date();d=d.getTime()+((d.getTimezoneOffset()+uoffset*60)*60000);d=new Date(d);var uts_now=d.getFullYear()+"-"+("00"+(d.getMonth()+1)).slice(-2)+"-"+("00"+d.getDate()).slice(-2)+" "+("00"+d.getHours()).slice(-2)+":"+("00"+d.getMinutes()).slice(-2)+":"+("00"+d.getSeconds()).slice(-2)}
if(typeof uts_dnt==='undefined'){if(window.doNotTrack==1||navigator.doNotTrack==1||navigator.msDoNotTrack==1){var uts_dnt='1'}else{var uts_dnt='0'}}
if(typeof uts_lc_cookievalue==='undefined'){var uts_lc_cookievalue=''}
if(typeof ic_infinity_cookievalue==='undefined'){var ic_infinity_cookievalue=''}
if(typeof ic_real_cookievalue==='undefined'){var ic_real_cookievalue=''}
var lc_aid='';var uts_cj_guy=!1;var uts_ss_guy=!1;var set_nlt_cookie=!1;var uts_location='lp';var uts_trafficname='usource';var uts_method='lifo';var uts_duration=30;var uts_customerid='141940';var uts_cgid='900507';var uts_nlt_campaignid='';var nlt_name='';if(document.cookie.indexOf('LCUTS_UID_'+uts_cgid)<0){var uid_customerid=uts_customerid;var ca=document.cookie.split(';');if(ca){var uid_url=uts_protocol+'//'+uts_calling_domain+'/tu.php?pid='+uid_customerid+'&nv='+encodeURIComponent(ca);ImgFunction(uid_url)}
var uts_uid_curl=uts_protocol+'//'+uts_calling_domain+'/js/uts_uid.php?cgid='+uts_cgid+'&uts_protocol='+uts_protocol;ImgFunction(uts_uid_curl)}
var uString=new Array();var uCookieVal=new Array();uString.push(uts_trafficname+'=');uCookieVal.push('lc');uString.push('lctid=');uCookieVal.push('lc');if(document.documentURI){var uts_uri=document.documentURI}else{var uts_uri=window.location.href}
var uts_domain=uts_getDomain(uts_uri);if(!uString){var uString=new Array();var uCookieVal=new Array();uString.push(uts_trafficname+'=');uCookieVal.push('lc')}
var uts_cookieval='';for(i=0;i<uString.length;i++){var regex=new RegExp(uString[i]);if(uts_uri.search(regex)>0){if(uString[i]==uts_trafficname+'='){uts_cookieval=uts_uri.substr(uts_uri.search(regex)+uString[i].length,2)}else{uts_cookieval=uCookieVal[i]}
break}}
if(uts_cookieval){var new_promo=!0}
if(!new_promo&&nlt_name>""){var set_nlt_cookie=!0}
uts_cookieval=uts_cookieval.toLowerCase();if(uts_cookieval.search(/[0-9a-z]{2}/)<0){uts_cookieval=""}
var lc_aref="";if(window.document.referrer&&window.document.referrer!=''){lc_aref=window.document.referrer}
else if(document.referrer&&document.referrer!=''){lc_aref=document.referrer}
else if(top.document.referrer&&top.document.referrer!=''){lc_aref=top.document.referrer}
else if(self.document.referrer&&self.document.referrer!=''){lc_aref=self.document.referrer}
var uts_wcookie=!0;if(!uts_cookieval){uts_cookieval=uts_readCookie(uts_trafficname)}
if(!uts_cookieval){uts_cookieval=uts_lc_cookievalue}
var exdate=new Date();var c_lctid='';var ulctid=uts_getQueryStringValue('lctid');if(uts_getQueryStringValue('lc_aid')){var email_url=uts_protocol+'//www.linkconnector.com/traffic/plugins/UTS/uts_email.php?email=ernie.st.gelais@linkconnector.com&source=lc_aid_'+uts_cgid+'&uts_uri='+uts_uri}
if(!lc_val){var lc_val=uts_getQueryStringValue('lctid')}
if(lc_val&&!uts_readCookie('uts_lctid')){exdate.setTime(exdate.getTime()+(uts_duration*24*60*60*1000));document.cookie='uts_lctid='+lc_val+'; expires='+exdate.toUTCString()+'; path=/; domain=.'+uts_domain+';';var c_lctid=lc_val;if(isNaN(lc_val)){var email_url=uts_protocol+'//www.linkconnector.com/traffic/plugins/UTS/uts_email.php?email=ernie.st.gelais@linkconnector.com&source=LCVal'+uts_cgid+'&uts_uri='+uts_uri+'&lc_val='+lc_val}}
if(lc_val!=ulctid&&ulctid>''&&lc_val>''){var email_url=uts_protocol+'//www.linkconnector.com/traffic/plugins/UTS/uts_email.php?email=ernie.st.gelais@linkconnector.com&source=LCValDiff'+uts_cgid+'&uts_uri='+uts_uri+'&lc_val='+lc_val+'&ulctid='+ulctid}
var uts_samedomain=!1;if(uts_getDomain(lc_aref)==uts_domain){uts_samedomain=!0}
var uts_id=uts_getLSCookie('uts_id');if(!uts_id){var uts_id=uts_readCookie('uts_id');var uts_id_loc='dCookie'}else{var uts_id_loc='lsCookie'}
if(!uts_id){var dateTime=Date.now();var uts_id='uts'+Math.floor(dateTime/1000)+'.'+Math.floor((Math.random()*1000)+1)}
var uts_lcid_arr=new Array();if(uts_lcid>''){uts_lcid_arr.push(uts_lcid)}
if(uts_getQueryStringValue('lcid')>''){var uts_nlcid=uts_getQueryStringValue('lcid');uts_nlcid='LC'+uts_nlcid.replace('_3_','.');var email_url='//www.linkconnector.com/traffic/plugins/UTS/uts_email.php?email=ernie.st.gelais@linkconnector.com&source=lp_main_lcid_check_'+uts_cgid+'&uts_lcid='+uts_lcid+'&passed_uts_lcid='+uts_getQueryStringValue('lcid')+'&new_uts_lcid='+uts_nlcid+'&ls_uts_mlcid='+uts_getLSCookie('lcid')+'&dc_uts_mlcid='+uts_readCookie('lcid');if(uts_lcid!=uts_nlcid){var uts_lcid=uts_nlcid;uts_lcid_arr.push(uts_nlcid)}}
var uts_mlcid=uts_getLSCookie('lcid');if(uts_mlcid===null){var uts_mlcid=uts_readCookie('lcid')}
if(uts_mlcid===null){var uts_mlcid=uts_lcid}
if(uts_mlcid.search('LC')==-1){var dateTime=Date.now();var uts_mlcid='LC'+Math.floor(dateTime/1000)+'.'+Math.floor((Math.random()*1000)+1)}
if(uts_mlcid.search('LC')!=-1&&uts_lcid>''){uts_setLSCookie('lcid',uts_mlcid);uts_setCookie('lcid',uts_mlcid,1825,uts_domain)}
if(uts_cookieval&&!uts_samedomain){if(uts_method=='fifo'&&document.cookie.indexOf(uts_trafficname)>=0){uts_wcookie=!1}
if(uts_wcookie){exdate.setTime(exdate.getTime()+(uts_duration*24*60*60*1000));document.cookie=uts_trafficname+'='+uts_cookieval+'; expires='+exdate.toUTCString()+'; path=/; domain=.'+uts_domain+';';var uts_curl=uts_protocol+'//www.linkconnector.com/js/uts_landing.php?source=uts&cgid='+uts_cgid+'&cval='+uts_cookieval+'&cdur='+uts_duration+'&aref='+lc_aref+'&dnt='+uts_dnt+'&uts_id='+uts_id+'&backup_usource='+uts_lc_cookievalue+'&ls_uts_id='+uts_getLSCookie('uts_id')+'&dc_uts_id='+uts_readCookie('uts_id')+'&uts_lcid_arr='+JSON.stringify(uts_lcid_arr);if(c_lctid){uts_curl+='&lctid='+c_lctid}
if(uts_lcid){uts_curl+='&uts_lcid='+uts_lcid}
if(uts_mlcid){uts_curl+='&uts_mlcid='+uts_mlcid}
if(new_promo){ImgFunction(uts_curl)}}}
uts_setLSCookie('uts_id',uts_id);uts_setCookie('uts_id',uts_id,1825,uts_domain);if(uts_cj_guy){var cj_val=uts_getQueryStringValue('cjevent');if(cj_val){exdate.setTime(exdate.getTime()+(uts_duration*24*60*60*1000));document.cookie='uts_cjevent='+cj_val+'; expires='+exdate.toUTCString()+'; path=/; domain=.'+uts_domain+';'}}
if(uts_ss_guy){var ss_val=uts_getQueryStringValue('sscid');if(ss_val){exdate.setTime(exdate.getTime()+(uts_duration*24*60*60*1000));document.cookie='uts_sscid='+ss_val+'; expires='+exdate.toUTCString()+'; path=/; domain=.'+uts_domain+';'}}
if(document.cookie.indexOf('LCUTS_UID_'+uts_cgid)<0){exdate.setTime(exdate.getTime()+(1/24*24*60*60*1000));document.cookie='LCUTS_UID_'+uts_cgid+'='+uts_cgid+'; expires='+exdate.toUTCString()+'; path=/; domain=.'+uts_domain+';'}
var lc_aref;if(window.document.referrer&&window.document.referrer!=''){lc_aref=window.document.referrer}
else if(document.referrer&&document.referrer!=''){lc_aref=document.referrer}
else if(top.document.referrer&&top.document.referrer!=''){lc_aref=top.document.referrer}
else if(self.document.referrer&&self.document.referrer!=''){lc_aref=self.document.referrer}
var uts_cc_curl='//www.linkconnector.com/uts_clickcounts.php?cgid='+uts_cgid+'&mid='+uts_customerid+'&MerchantURL='+lc_mref+'&cid='+uts_nlt_campaignid+'&Mode=js&AffiliateReferer='+escape(lc_aref);if(uts_lcid_arr){uts_cc_curl+='&uts_lcid_arr='+JSON.stringify(uts_lcid_arr)}
if(uts_lcid){uts_cc_curl+='&uts_lcid='+uts_lcid}
if(uts_mlcid){uts_cc_curl+='&uts_mlcid='+uts_mlcid}
if(uts_cgid==900119){uts_samedomain=!1}
if(!uts_samedomain){ScriptFunction(uts_cc_curl)}
} catch (e) {
var email_url = uts_protocol + '//linkconnector.com/traffic/plugins/UTS/uts_email.php?email=ernie.st.gelais@linkconnector.com&source=JSerror' + uts_cgid + '&uts_uri=' + uts_uri + '&error=' + e;
if(e.search('Permission denied')==-1){ImgFunction(email_url);}
}
var email_url = uts_protocol + '//linkconnector.com/traffic/plugins/UTS/uts_email.php?email=ernie.st.gelais@linkconnector.com&source=JS_all_good' + uts_cgid + '&uts_uri=' + uts_uri + '&error=' + e;
//if(!e){ImgFunction(email_url);}