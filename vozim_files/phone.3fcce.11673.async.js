 function getDomain(){ if(document.domain.length){ var parts = document.domain.replace(/^(www\.)/,"").split('.'); while(parts.length > 100){ var subdomain = parts.shift(); } var domain = parts.join('.'); return domain.replace(/(^\.*)|(\.*$)/g, ""); } return ''; } function getCid() { result = ""; if ( 'undefined' != typeof(ga) ) { if ('undefined' != typeof(tracker)) { ga(function(tracker) {result = tracker.get('clientId');}); } if ( ("undefined" == typeof(result) || "" == result) && "function" == typeof(ga.getAll) ) { if(ga.getAll().length > 0){ result = ga.getAll()[0].get("clientId"); }else{ result = ""; } } } return result; } function hasTelLinks(){ var elements = getTelLinks(); if (elements.length == 0) return false; return true; } function getTelLinks(){ var selectors = 'a[href^="tel:"], a[href^="callto:"], a[href^="Tel:"], a[href^="TEl:"], a[href^="TEL:"]'; return document.querySelectorAll(selectors); } var cheat_sheet_text = ""; function _getQuerystring(string, key, default_) { if ( default_==null ) { default_=""; } var search = unescape(string); if ( search == "" ) { return default_; } search = search.substr(1); search = search.replace("?","&"); search = search.replace("?","&"); search = search.replace("#","&"); search = search.replace("/",""); var params = search.split("&"); for (var i = 0; i < params.length; i++) { var pairs = params[i].split("="); if(pairs[0] == key) { return pairs[1]; } } return default_; } function _getCookie(name) { var cookie = " " + document.cookie; var search = " " + name + "="; var setStr = null; var offset = 0; var end = 0; if (cookie.length > 0) { offset = cookie.indexOf(search); if (offset != -1) { offset += search.length; end = cookie.indexOf(";", offset); if (end == -1) { end = cookie.length; } setStr = unescape(cookie.substring(offset, end)); } } return(setStr); } var ct_getCookie = _getCookie; function CallTracking(){ this.startCall = function(call){}; this.startCallAdditionalScript = function(call){}; this.endCall = function(call){}; this.endCallAdditionalScript = function(call){}; var _startCallEvents = []; var _endCallEvents = []; this.on = function(eventName, callback){ if(eventName == "startCall"){ _startCallEvents.push(callback); }else if(eventName == "endCall"){ _endCallEvents.push(callback); } }; this._notifyStartCall = function(call){ for (eventIndex in _startCallEvents) { if(_startCallEvents.hasOwnProperty(eventIndex) && typeof _startCallEvents[eventIndex] === "function") { _startCallEvents[eventIndex](call); } } }; this._notifyEndCall = function(call){ for(eventIndex in _endCallEvents){ if(_endCallEvents.hasOwnProperty(eventIndex) && typeof _endCallEvents[eventIndex] === "function") { _endCallEvents[eventIndex](call); } } }; this._startSettingForms = function(){ callTracking._initFormsHashes([]); replaces_setup = _getQuerystring(location.href, "replaces_setup","-"); if ( "-" == replaces_setup ) { replaces_setup = ct_getCookie("replaces_setup"); } if ( parseInt(replaces_setup) ) { let ct_ft_setup = document.createElement("script"); ct_ft_setup.type = "text/javascript"; let prot = (document.location.protocol === "https:" ? "https:" : "http:"); ct_ft_setup.src = prot+"//calltracking.ru/dynamic/init_replaces_setup.js?pr="+11673; let s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ct_ft_setup, s); let today = new Date(); let milisecs = Date.parse(today+""); let sevenmonth = new Date(milisecs+1000*60*60*24*12*1); _setCookie( "replaces_setup", 1 , sevenmonth, "/" ); } }; this._MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}; this._initFormsHashes = function (form){ let self = this; let forms = document.querySelectorAll("form:not([fthash])"); for(let i = 0; i < forms.length; i++){ hashStr = "_"; let allElForm = forms[i].querySelectorAll("*"); for(let j = 0; j < allElForm.length; j++){ if(allElForm[j].hasAttribute("name")){ hashStr += allElForm[j].tagName; if (allElForm[j].hasAttribute("type")) { hashStr += "_"+allElForm[j].getAttribute("type"); } hashStr += "_"+allElForm[j].getAttribute("name"); } forms[i].setAttribute("fthash", self._MD5(hashStr)); if(true === form.includes(forms[i].getAttribute("fthash"))) forms[i].setAttribute("project","yes"); else forms[i].setAttribute("project","no"); } } let ctElements = document.querySelectorAll(".button[type='button'], .button[href^='#'], .button[data-target^='#'], .button[data-src^='#'], .border-btn[type='button'], .border-btn[href^='#'], .border-btn[data-target^='#'], .border-btn[data-src^='#'], .btn[type='button'], .btn[href^='#'], .btn[data-target^='#'], .btn[data-src^='#'], .t-btn[type='button'], .t-btn[href^='#'], .t-btn[data-target^='#'], .t-btn[data-src^='#'], button[type='button']:not(.ct-btn), input[type='button']:not(.ct-btn), [href^='#'], [data-target^='#'], [data-src^='#'], button:not(.ct-btn-close, .ct-btn, .ct-close-window-setup, .ct-open-window-setup)"); for(let i = 0; i < ctElements.length; i++){ let elementTag = ctElements[i].tagName.toLowerCase(); let classListEl = ctElements[i].classList; classListEl = classListEl.value.replace(/ct_project|ct_setup|ct_project_yes/g, ""); let ctAttributes = ctElements[i].attributes; let hash = elementTag+classListEl.trim(); for(let j = 0; j < ctAttributes.length; j++){ if(ctAttributes[j].name !== "class" && ctAttributes[j].name !== "fthash" && ctAttributes[j].name !== "project") hash += ctAttributes[j].name+ctAttributes[j].textContent; } ctElements[i].setAttribute("fthash",self._MD5(hash)); if(true === form.includes(ctElements[i].getAttribute("fthash"))) ctElements[i].setAttribute("project","yes"); else ctElements[i].setAttribute("project","no"); } }; }; callTracking = new CallTracking(); var ct_project_settings = { coockieLifeTime : new Date(new Date().getTime()+1000*60*60*24*210) }; var umtz_data = false; var additionMetrics = null; var match = false; var new_z = ""; var force_ct_source_detection = true; var ct_dynamic_started = false; var et_started = false; var cht_started = false; var win_chr; var charmap = unescape("%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409%u2039%u040A%u040C%u040B%u040F%u0452%u2018%u2019%u201C%u201D%u2022%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F%u00A0%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB%u00AC%u00AD%u00AE%u0407%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457"); var ct_blockUser = 0; function code2char(code) { if (code >= 0xC0 && code <= 0xFF) { return String.fromCharCode(code - 0xC0 + 0x0410); } if (code >= 0x80 && code <= 0xBF) { win_chr++; return charmap.charAt(code - 0x80); } return String.fromCharCode(code); } function winToUnicode(str) { win_chr = 0; str = unescape(str); var res = ""; for(var i = 0; i < str.length; i++) { res = res + code2char(str.charCodeAt(i)); } return res; } function utf8_decode(str) { var string = ""; var i = 0; var c = c1 = c2 = 0; str = unescape(str); while ( i < str.length ) { c = str.charCodeAt(i); if (c < 128) { string += String.fromCharCode(c); i++; } else if((c > 191) && (c < 224)) { c2 = str.charCodeAt(i+1); string += String.fromCharCode(((c & 31) << 6) | (c2 & 63)); i += 2; } else { c2 = str.charCodeAt(i+1); c3 = str.charCodeAt(i+2); string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)); i += 3; } } return string; } function convertEncoding(str) { var result = winToUnicode(str); if ( 0 < win_chr ) { result = utf8_decode(str); } return result; } function _uGC(l,n,s) { if (!l || l=="" || !n || n=="" || !s || s=="") { return "-"; } if (n == "__utmz" || n == "__imz" || n == "ct_yclid" || n == "__utmz=" || n == "__imz=" || n == "ct_yclid=") { if (l==document.cookie) { l = convertEncoding(l); } } var i,i2,i3,c="-"; i=l.indexOf(n); i=l.indexOf(n); i3=n.indexOf("=")+1; if (i > -1) { i2=l.indexOf(s,i); if (i2 < 0) { i2=l.length; } c=l.substring((i+i3),i2); } return c; } function ct_cc(){ if(typeof punycode == "undefined"){ _deleteCookie("ct_bounce_static_prev_z", "/", getDomain()); _deleteCookie("ct_bounce_static", "/", getDomain()); _deleteCookie("__utmz", "/", getDomain()); _deleteCookie("__imz", "/", getDomain()); _deleteCookie("__fmz", "/", getDomain()); _deleteCookie("ct_yclid", "/", getDomain()); }else{ _deleteCookie("ct_bounce_static_prev_z", "/", punycode.ToASCII(getDomain())); _deleteCookie("ct_bounce_static", "/", punycode.ToASCII(getDomain())); _deleteCookie("__utmz", "/", punycode.ToASCII(getDomain())); _deleteCookie("__imz", "/", punycode.ToASCII(getDomain())); _deleteCookie("__fmz", "/", getDomain()); _deleteCookie("ct_yclid", "/", punycode.ToASCII(getDomain())); } console.log("ct cookies cleared"); }; function _setCookie (name, value, expires, path, domain, secure, dont_escape) { value = encodeURIComponent(value); value = ((dont_escape) ? value : escape(value));document.cookie = name + "=" + value + ((expires) ? "; expires=" + expires : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : ""); } function _deleteCookie(name, path, domain) { _setCookie(name, null, new Date(0), path, domain); } function AdditionalMetrics(){ var self = this; this.cookieMetrics = ['_ym_uid']; this.urlMetrics = []; this.saveUrlMetricsToCookie = function(){ var metrics = {}; for(var i = 0 ; i < this.urlMetrics.length; i++){ var metric = _getQuerystring(location.href, this.urlMetrics[i]); metrics[this.urlMetrics[i]] = metric; } _setCookie('ct_url_metrics', JSON.stringify(metrics), ct_project_settings.coockieLifeTime, '/', getDomain(), '', 1); }; this.getMetricsKeyValue = function(){ var metrics = []; for(var i = 0 ; i < this.cookieMetrics.length; i++){ metrics.push(this.cookieMetrics[i]+'='+ct_getCookie(this.cookieMetrics[i])); } var urlMetrics = JSON.parse(ct_getCookie('ct_url_metrics')); for(var metricKey in urlMetrics){ if(urlMetrics.hasOwnProperty(metricKey)){ metrics.push(metricKey+'='+urlMetrics[metricKey]); } } return metrics; }; this.getMetricsKeyValueAsString = function(){ return this.getMetricsKeyValue().join('&'); }; this.prevAdditionalMetricString = ''; var changeDetectingInterval = null; this.onMetricChanged = function(callback){ changeDetectingInterval = setInterval(function(){ if(unescape(self.prevAdditionalMetricString) != self.getMetricsKeyValueAsString()){ callback(); } }, 500); } }; additionMetrics = new AdditionalMetrics(); String.prototype.replaceAll = function(search, replace){ if ( "function" == typeof(this.split) ) { return this.split(search).join(replace); } return ""; };String.prototype.translit = (function(){ var L = { 'А':'A','а':'a','Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g', 'Д':'D','д':'d','Е':'E','е':'e','Ё':'Yo','ё':'yo','Ж':'Zh','ж':'zh', 'З':'Z','з':'z','И':'I','и':'i','Й':'Y','й':'y','К':'K','к':'k', 'Л':'L','л':'l','М':'M','м':'m','Н':'N','н':'n','О':'O','о':'o', 'П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t', 'У':'U','у':'u','Ф':'F','ф':'f','Х':'Kh','х':'kh','Ц':'Ts','ц':'ts', 'Ч':'Ch','ч':'ch','Ш':'Sh','ш':'sh','Щ':'Sch','щ':'sch','Ъ':'','ъ':'', 'Ы':'Y','ы':'y','Ь':"",'ь':"",'Э':'E','э':'e','Ю':'Yu','ю':'yu', 'Я':'Ya','я':'ya' }, r = '', k; for (k in L) r += k; r = new RegExp('[' + r + ']', 'g'); k = function(a){ return a in L ? L[a] : ''; }; return function(){ if ( "function" == typeof(this.replace) ) { return this.replace(r, k); } else { return ""; } }; })(); function replace_phone(el_id, html_text) { var hide_num=0; var el = null;if ( hide_num ) { } if ( "@" == el_id[0] ) { rdst = el_id.substring(1); clearrdst = rdst.replace(/ /g, ""); clearrdst = clearrdst.replace(/\+/g, ""); clearrdst = clearrdst.replace(/\-/g, ""); clearrdst = clearrdst.replace(/\(/g, ""); clearrdst = clearrdst.replace(/\)/g, ""); clearrdst = clearrdst.replace(/\,/g, ""); clearrdst = clearrdst.replace(/\–/g, ""); clearrdst = clearrdst.replace(/\W/g, ""); clearrdst = clearrdst.translit(); class_name = "ct_lr_"+clearrdst; jQuery("body *:contains('"+rdst+"')").add('body').contents().each(function(){ if ( this.nodeType == Node.TEXT_NODE && -1 != jQuery(this).text().indexOf(rdst) ) { jQuery(this).parent().addClass(class_name); } }); jQuery('.'+class_name).attr('prev_num'+clearrdst, rdst); jQuery('.'+class_name).each(function(){ prev_num = jQuery(this).attr('prev_num'+clearrdst); if(!jQuery(this).is('script')){ var ct_lazy = jQuery(this).html(); ct_lazy = ct_lazy.split(prev_num).join(html_text); if ( -1 == ct_lazy.indexOf("$") ) { if ( hide_num ) { if ( !(typeof jQuery(this).attr('prev_text') !== typeof undefined && jQuery(this).attr('prev_text') !== false) ){ jQuery(this).attr('prev_text', jQuery(this).text()); jQuery(this).addClass('ct_hid'); } jQuery(this).click(function(e) { if (hasTelLinks()){ if (jQuery(this).attr('href') !== undefined && jQuery(this).attr('href').indexOf('X') !== -1){ e.preventDefault(); } else { var elParents = jQuery(this).parents(); for (var pi = 0; pi < elParents.length; pi++){ if (elParents.attr('href') === undefined){ continue; } if (elParents.attr('href').indexOf('X') !== -1){ e.preventDefault(); break; } } } } ct_dynamic_script(sorce_id); }); } jQuery(this).html(ct_lazy); if ( hide_num && !(typeof jQuery(this).attr('prev_text') !== typeof undefined && jQuery(this).attr('prev_text') !== false) ){ jQuery(this).attr('prev_num'+clearrdst, html_text); } else if ( !hide_num ){ jQuery(this).attr('prev_num'+clearrdst, html_text); } } } }); } else if ( "." == el_id[0] ) { jQuery(el_id).html(html_text); } else { jQuery(el_id).html(html_text); }}ct_geoCity = "defined";ct_userIP = "defined"; ct_static_user_id = ""; function initStaticUserID(pr_id) { var ct_sui = ct_getCookie("ct_static_user_id"); if (ct_sui != null){ ct_static_user_id = ct_sui; } else { var ct_sus = document.createElement('script'); ct_sus.type = 'text/javascript'; var prot = (document.location.protocol === 'https:' ? 'https:' : 'http:'); ct_sus.src = prot+'//calltracking.ru/dynamic/init_static_user_id.js?pr='+pr_id; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct_sus, s); } } var ctcid = ''; var roistat_visit = ''; var ct_ym_uid = ''; function isGaLoaded(num_tries) { cheat_sheet_text += "CT work started. Waiting for source definition.\n"; roistat_visit = ct_getCookie("roistat_visit"); if ( 'undefined' != typeof(ym) ) { ym(52989643, 'getClientID', function(clientID) { ct_ym_uid = clientID; }); } if ( 'undefined' != typeof(yaCounter52989643) && null != yaCounter52989643 && 'function' == typeof(yaCounter52989643.getClientID) ) { ct_ym_uid = yaCounter52989643.getClientID(); } if ( 'undefined' != typeof(ga) ) { if ('undefined' != typeof(tracker)) { ga(function(tracker) {ctcid = tracker.get('clientId');}); } if ( ("undefined" == typeof(ctcid) || "" == ctcid) && "function" == typeof(ga.getAll) ) { if(ga.getAll().length > 0){ ctcid = ga.getAll()[0].get("clientId"); }else{ ctcid = ""; } } } if ( typeof(ct_geoCity) == "undefined" || typeof(jQuery) == "undefined" || typeof(ct_static_user_id) == "undefined" || ct_static_user_id == "" || ct_static_user_id == null|| typeof(ct_ym_uid) == "undefined" || ct_ym_uid == "" || ct_ym_uid == null ) { if ( 1000 > num_tries ) { setTimeout("isGaLoaded(" + (num_tries+1) + ");", 50); } } else { umtz_data = { ct_source: "", ct_medium: "", ct_term: "", ct_campaign: "", ct_content: "", ct_gclid: "", ct_yclid: "", ct_referrer: "", ct_landing: "" }; umtz_data.ct_source = convertEncoding(_getQuerystring(location.href, "utm_source","-")); umtz_data.ct_medium = convertEncoding(_getQuerystring(location.href, "utm_medium","-")); umtz_data.ct_campaign = convertEncoding(_getQuerystring(location.href, "utm_campaign","-")); umtz_data.ct_term = convertEncoding(_getQuerystring(location.href, "utm_term","-")); umtz_data.ct_content = convertEncoding(_getQuerystring(location.href, "utm_content","-")); umtz_data.ct_gclid = _getQuerystring(location.href, "gclid","-"); umtz_data.ct_referrer = convertEncoding(_getQuerystring(location.href, "utm_referrer",document.referrer)); umtz_data.ct_landing = escape(escape(convertEncoding(location.href))); if ("" == umtz_data.ct_referrer) { umtz_data.ct_referrer = location.href; } var parser = document.createElement("a"); parser.href = umtz_data.ct_referrer; if ( "undefined" != typeof(parser.hostname) && "" != parser.hostname ) { umtz_data.ct_referrer = "http://"+parser.hostname+"/"; } var first_z = _uGC(document.cookie, "__fmz=", ";"); var z = _uGC(document.cookie, "__imz=", ";"); if ( first_z == "-" ) { first_z = z; } if ( "" == umtz_data.ct_term || "-" == umtz_data.ct_term ) { if ( -1 != umtz_data.ct_referrer.indexOf("mail.ru") && "-" != _getQuerystring(umtz_data.ct_referrer, "q","-") ) { var term = convertEncoding(_getQuerystring(umtz_data.ct_referrer, "q","-")); } if ( -1 != umtz_data.ct_referrer.indexOf("google") ) { var term = convertEncoding(_getQuerystring(umtz_data.ct_referrer, "q","-")); } if ( -1 != umtz_data.ct_referrer.indexOf("yandex") ) { var term = convertEncoding(_getQuerystring(umtz_data.ct_referrer, "text","-")); } umtz_data.ct_term = term; }var roistat_mark = convertEncoding(_getQuerystring(location.href, "roistat","")); if(roistat_mark !== ''){ let roistat_source_name = roistat_mark.match(/(direct\w\_[a-z]+|yandex\w\_[a-z]+|google\w\_[a-z]+|merchant\w\_[a-z]+|vk\w\_[a-z]+|facebook\w\_[a-z]+|mytarget\w\_[a-z]+|seo_yandex\w\_|seo_google\w\_)/gmi) ? roistat_mark.match(/(direct\w\_[a-z]+|yandex\w\_[a-z]+|google\w\_[a-z]+|merchant\w\_[a-z]+|vk\w\_[a-z]+|facebook\w\_[a-z]+|mytarget\w\_[a-z]+|seo_yandex\w\_|seo_google\w\_)/gmi)[0] : null; let source_id = roistat_mark.match(/(\d[0-9]+)/gmi) ? roistat_mark.match(/(\d[0-9]+)/gmi)[0] : null; let keywordPosition = roistat_mark.match(/([a-zA-Zа-яА-Я\s]+)/gmi) ? roistat_mark.search(roistat_mark.match(/([a-zA-Zа-яА-Я\s]+)/gmi)[2]) : null; let keyword = roistat_mark.substring(keywordPosition); if(typeof roistat_source_name !== undefined || roistat_source_name !== '' || roistat_source_name !== null || -1 != roistat_source_name.indexOf('seo_yandex') || -1 != roistat_source_name.indexOf('seo_google')){ keywordPosition = roistat_mark.match(/([a-zA-Zа-яА-Я\s]+)/gmi) ? roistat_mark.search(roistat_mark.match(/([a-zA-Zа-яА-Я\s]+)/gmi)[3]) : null; keyword = roistat_mark.substring(keywordPosition); } if(roistat_source_name !== null && typeof roistat_source_name !== undefined){ if ( -1 != roistat_source_name.indexOf('direct') ) { umtz_data.ct_term = convertEncoding(_getQuerystring(location.href, "utm_source","-")); umtz_data.ct_source = 'yandex'; umtz_data.ct_medium = 'cpc'; if(roistat_mark.split('_')[3] === undefined){ umtz_data.ct_term = keyword; }else{ umtz_data.ct_term = roistat_mark.split('_')[3]; } } if ( -1 != roistat_source_name.indexOf('yamarket') ) { umtz_data.ct_source = 'market.yandex.ru'; umtz_data.ct_medium = 'cpc'; umtz_data.ct_term = keyword; } if ( -1 != roistat_source_name.indexOf('direct') ) { umtz_data.ct_source = 'yandex'; umtz_data.ct_medium = 'cpc'; umtz_data.ct_term = keyword; } if ( -1 != roistat_source_name.indexOf('google') ) { umtz_data.ct_source = 'google'; umtz_data.ct_medium = 'cpc'; umtz_data.ct_term = keyword; } if ( -1 != roistat_source_name.indexOf('merchant') ) { umtz_data.ct_source = 'google_merchant'; umtz_data.ct_medium = 'cpc'; umtz_data.ct_term = keyword; } if ( -1 != roistat_source_name.indexOf('facebook') ) { umtz_data.ct_source = 'facebook'; umtz_data.ct_medium = 'social'; umtz_data.ct_term = keyword; } if ( -1 != roistat_source_name.indexOf('vk') ) { umtz_data.ct_source = 'vk'; umtz_data.ct_medium = 'social'; umtz_data.ct_term = keyword; } if ( -1 != roistat_source_name.indexOf('mytarget') ) { umtz_data.ct_source = 'mytarget'; umtz_data.ct_medium = 'organic'; umtz_data.ct_term = keyword; } if ( -1 != roistat_source_name.indexOf('seo_yandex') ) { umtz_data.ct_source = 'yandex'; umtz_data.ct_medium = 'organic'; umtz_data.ct_term = keyword; } if ( -1 != roistat_source_name.indexOf('seo_google') ) { umtz_data.ct_source = 'google'; umtz_data.ct_medium = 'organic'; umtz_data.ct_term = keyword; } } } if ( "-" != umtz_data.ct_source || "-" != umtz_data.ct_medium || "-" != umtz_data.ct_campaign ) { var ct_content_array = umtz_data.ct_content.split("|"); var ct_content_ = ct_content_array.join("ctpipe"); var new_z = "utmcsr="+umtz_data.ct_source+"|ctd|utmccn="+umtz_data.ct_campaign+"|ctd|utmcmd="+umtz_data.ct_medium+"|ctd|utmctr="+umtz_data.ct_term+"|ctd|utmcct="+ct_content_+"|ctd|utmgclid="+umtz_data.ct_gclid; } else if ( z != "" && z != "-" ) { var new_z = ""; } if ( "" != umtz_data.ct_referrer && -1 == umtz_data.ct_referrer.split("/")[2].indexOf(getDomain()) && "-" == umtz_data.ct_source && "-" == umtz_data.ct_medium && "-" == umtz_data.ct_campaign ) { var referrer = umtz_data.ct_referrer.match(/^(https?\:)\/\/(www.)?(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/i); if ( null==referrer ) { var new_z = "utmcsr="+umtz_data.ct_referrer+"|ctd|utmccn=(referral)|ctd|utmcmd=referral|ctd|utmctr=-|ctd|utmcct=-"; } else { var new_z = "utmcsr="+referrer[3]+"|ctd|utmccn=(referral)|ctd|utmcmd=referral|ctd|utmctr=-|ctd|utmcct=-"; } if ( -1 != umtz_data.ct_referrer.indexOf("mail.ru") && "-" != _getQuerystring(umtz_data.ct_referrer, "q","-") ) { var new_z = "utmcsr=mail.ru|ctd|utmccn=(not set)|ctd|utmcmd=organic|ctd|utmctr="+term+"|ctd|utmcct=-"; } if ( -1 != umtz_data.ct_referrer.indexOf("google") ) { var new_z = "utmcsr=google|ctd|utmccn=(not set)|ctd|utmcmd=organic|ctd|utmctr="+term+"|ctd|utmcct=-"; } if ( -1 != umtz_data.ct_referrer.indexOf("google") && -1 != umtz_data.ct_referrer.indexOf("plus") ) { var new_z = "utmcsr=plus.google|ctd|utmccn=(referral)|ctd|utmcmd=referral|ctd|utmctr=-|ctd|utmcct=-"; } if ( -1 != umtz_data.ct_referrer.indexOf("zen.yandex") ) { var new_z = "utmcsr=zen.yandex.ru|ctd|utmccn=(not set)|ctd|utmcmd=referral|ctd|utmctr="+term+"|ctd|utmcct=-"; } else if ( -1 != umtz_data.ct_referrer.indexOf("market.yandex") ) { var new_z = "utmcsr=market.yandex.ru|ctd|utmccn=(not set)|ctd|utmcmd=organic|ctd|utmctr="+term+"|ctd|utmcct=-"; } else if( -1 != umtz_data.ct_referrer.indexOf("maps.yandex") ) { var new_z = "utmcsr=maps.yandex.ru|ctd|utmccn=(not set)|ctd|utmcmd=organic|ctd|utmctr="+term+"|ctd|utmcct=-"; } else if ( -1 != umtz_data.ct_referrer.indexOf("yandex") ) { var new_z = "utmcsr=yandex|ctd|utmccn=(not set)|ctd|utmcmd=organic|ctd|utmctr="+term+"|ctd|utmcct=-"; } } else if( ( "" == z || z == "-" ) && ( "" == umtz_data.ct_referrer || -1 != umtz_data.ct_referrer.split("/")[2].indexOf(getDomain()) ) && "-" == umtz_data.ct_source && "-" == umtz_data.ct_medium && "-" == umtz_data.ct_campaign ) { var new_z = "utmcsr=(direct)|ctd|utmccn=(not set)|ctd|utmcmd=(none)|ctd|utmctr=-|ctd|utmcct=-"; } if ( new_z != "" && new_z != "-" ) { new_z += "|ctd|referrer="+umtz_data.ct_referrer+"|ctd|landing="+umtz_data.ct_landing; if ( first_z == "-" ) { first_z = new_z; } var milisecs = new Date().getTime(); var sevenmonth = new Date(milisecs+1000*60*60*24*210); _setCookie("__imz", new_z , sevenmonth,"/",getDomain(),"", 1); additionMetrics.saveUrlMetricsToCookie(); } cheat_sheet_text += "visitor source defined from "+num_tries+" iteration\n"; ct_core(); if (typeof(ctCallBack) != "undefined") { ctCallBack(); } } } function ct_dynamic_script(source_id, pr_id) { if ( ct_dynamic_started ) { return false; } if (_uGC(document.cookie,"__imz=",";") == "-"){var z = unescape(_uGC(document.cookie, "__utmz=", ";")); } else {var z = unescape(_uGC(document.cookie, "__imz=", ";")); }z = encodeURIComponent(z); var v = _uGC(document.cookie, "__utmv=", ";"); var a = _uGC(document.cookie, "__utma=", ";"); var y = _uGC(document.cookie, "ct_yclid=", ";"); var u = _uGC(document.cookie, "ct_u_3fcce=", ";"); var uv = _uGC(document.cookie, "ct_v_3fcce=", ";"); var experimental = _uGC(document.cookie, "experimental=", ";"); var ban_dynamics = _uGC(document.cookie, "ban_dynamics=", ";"); var is_user_call = _uGC(document.cookie, "is_user_call=", ";"); var resolution = "na"; if ( self.screen ) { resolution = screen.width+"x"+screen.height; } if ( ban_dynamics == 1 ) { return; } var ip = ""; cook = "__utma="+a+"; __utmz="+z+'; ct_u_3fcce='+u+'; __utmv='+v+'; ct_v_3fcce='+uv+'; ct_yclid='+y+'; is_user_call='+is_user_call; cook = cook.replace(/ctpipe/g, "|"); var ct = document.createElement('script'); ct.type = 'text/javascript'; var prot = (document.location.protocol === 'https:' ? 'https:' : 'http:'); if ( experimental == 1 ) { additionMetrics.prevAdditionalMetricString = escape(additionMetrics.getMetricsKeyValueAsString()); ct.src = prot+'//metal.calltracking.ru/dynamic/dynamic7_experimental.js?pr=11673&ctcid='+ctcid+'&bs='+source_id+'&client_url='+escape(window.location.href)+'&client_cook='+cook+'&referer='+escape(document.referrer)+'&additionMetrics='+additionMetrics.prevAdditionalMetricString+'&nc='+Math.floor(new Date().getTime()/3000); if ( typeof(ct_static_user_id) != "undefined" && ct_static_user_id != "" && ct_static_user_id != null ) { ct.src += "&static_uid="+ct_static_user_id; } } else { if(pr_id){ prid = pr_id; }else{ prid = 11673; } additionMetrics.prevAdditionalMetricString = escape(additionMetrics.getMetricsKeyValueAsString()); ct.src = prot+'//metal.calltracking.ru/dynamic/dynamic7.js?pr='+prid+'&ctcid='+ctcid+'&bs='+source_id+'&client_url='+escape(window.location.href)+'&client_cook='+cook+'&referer='+escape(document.referrer)+'&res='+resolution+'&additionMetrics='+additionMetrics.prevAdditionalMetricString+'&nc='+Math.floor(new Date().getTime()/3000); if ( typeof(ct_static_user_id) != "undefined" && ct_static_user_id != "" && ct_static_user_id != null ) { ct.src += "&static_uid="+ct_static_user_id; } } var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct, s); ct_dynamic_started = true; } umtz_data = false; var sorce_id; function ct_core() { var tmp = ""; if(typeof(umtz_data) != "undefined" && typeof(umtz_data.ct_content) != "undefined"){ tmp = umtz_data.ct_content; } umtz_data = { ct_source: "", ct_medium: "", ct_term: "", ct_campaign: "", ct_gclid: "", ct_yclid: "", ct_content: tmp, ct_referrer: "", ct_landing: "" }; var z = _uGC(document.cookie, "__utmz=", ";"); if ( _uGC(document.cookie, "__imz=", ";") != "-" ){ var z = _uGC(document.cookie, "__imz=", ";"); } z = unescape(z); umtz_data.ct_source = convertEncoding(_uGC(z, "utmcsr=", "|ctd|")); umtz_data.ct_medium = convertEncoding(_uGC(z, "utmcmd=", "|ctd|")); umtz_data.ct_term = convertEncoding(_uGC(z, "utmctr=", "|ctd|")); umtz_data.ct_content = convertEncoding(_uGC(z, "utmcct=", "|ctd|")); umtz_data.ct_content = umtz_data.ct_content.replace(/ctpipe/g, "|"); umtz_data.ct_term_pad = (" "+umtz_data.ct_term+" "); umtz_data.ct_campaign = _uGC(z, "utmccn=", "|ctd|"); umtz_data.ct_gclid = _uGC(z, "utmgclid=", "|ctd|"); umtz_data.ct_referrer = convertEncoding(_getQuerystring(location.search, "utm_referrer",document.referrer)); umtz_data.ct_landing = _uGC(z, "landing=", "|ctd|"); if ("" == umtz_data.ct_referrer) { umtz_data.ct_referrer = location.href; } var parser = document.createElement("a"); parser.href = umtz_data.ct_referrer; if ( "undefined" != typeof(parser.hostname) && "" != parser.hostname ) { umtz_data.ct_referrer = "http://"+parser.hostname+"/"; } if ( "" == umtz_data.ct_content || "-" == umtz_data.ct_content ) { if ( "-" != _uGC(z, "utmcntnt=", "|ctd|") ) { umtz_data.ct_content = _uGC(z, "utmcntnt=", "|ctd|"); } if ( "-" != _uGC(z, "utmcct=", "|ctd|") ) { umtz_data.ct_content = _uGC(z, "utmcct=", "|ctd|"); umtz_data.ct_content = umtz_data.ct_content.replace(/ctpipe/g, "|"); } } umtz_data.ct_yclid = _getQuerystring(location.search, "yclid","-"); if ( "-" == umtz_data.ct_yclid) { var ct_yclid = ct_getCookie("ct_yclid"); if (ct_yclid != null){ umtz_data.ct_yclid = ct_yclid; } } else { var today = new Date(); var milisecs = Date.parse(today+""); var sevenmonth = new Date(milisecs+1000*60*60*24*30*7); _setCookie("ct_yclid", umtz_data.ct_yclid , sevenmonth,"/",getDomain()); } match = false; match_static = false; sorce_id = 0; code = "495"; tel = ""; if (!match && ((('yandex' == umtz_data.ct_source) && ('cpc' == umtz_data.ct_medium)))) { match_dynamic = true; ct_dynamic_script(168939); match = true; match_static = true; code = "499"; tel = "558-52-08"; sorce_id = 168939; } var abort_replacement = false; var ignore_el_with_classes = []; if (match_static && "undefined" == typeof(match_dynamic) && hasTelLinks() && !isNaN(tel.replace(/\s|-/g, '')) && !abort_replacement){ var elements = getTelLinks(); var regExp = /\d+/g; var regExpAdd = /,\d+/g; var telNum = tel.match(regExp).join(''); for (var i = 0; i < elements.length; i++){ var link = elements[i]; var innerPhone = '1'; var linkPhone = '2'; var foundInner = false; var foundLink = false; var foundHidden = false; var linkPathname = link.pathname; var hiddenPhone = ''; var addNumber = ''; if (ignore_el_with_classes.includes(link.className)) { continue; } if (link.innerText.match(regExp) !== null){ innerPhone = link.innerText.match(regExp).join('').slice(-telNum.length); foundInner = true; } else if (link.innerHTML.match(regExp) !== null){ innerPhone = link.innerHTML.match(regExp).join('').slice(-telNum.length); foundInner = true; } if (linkPathname == ''){ linkPathname = link.href.replace(link.protocol, ''); } if (linkPathname.match(regExp) !== null){ linkPhone = linkPathname.match(regExp).join().slice(-telNum.length); foundLink = true; } if (link.innerText.indexOf('X') !== -1){ if (link.classList.contains('ct_hid') || (link.childElementCount == 1 && link.firstChild.classList.contains('ct_hid'))){ hiddenPhone = link.innerText.replace(/\s|-|\(|\)|/g, ''); } else if (link.childElementCount > 1){ for (var c = 0; c < link.children.length; c++){ if (link.childNodes[c].classList.contains('ch_hid')){ hiddenPhone = link.innerText.replace(/\s|-|\(|\)|/g, ''); break; } } } foundHidden = true; } if (foundHidden){ link.setAttribute('href', 'tel:' + hiddenPhone, ''); } else if (foundInner && foundLink){ if (link.href.match(regExpAdd) !== null){ addNumber = link.href.match(regExpAdd).join('').slice(1); } if (innerPhone == linkPhone && innerPhone == telNum){ link.setAttribute('href', 'tel:' + '+7' + code + tel.replace(/\s|-/g, '')); } else if (link.href != 'tel:' && (innerPhone != linkPhone || linkPhone != telNum)){ if (link.innerText.indexOf('+7') == -1 && link.innerText.indexOf('7') != 0 && link.innerText.indexOf('8') != 0 && link.innerText.indexOf('+8') != 0 && innerPhone.length == telNum.length){ link.setAttribute('href', 'tel:' + '+7' + link.innerText.replace(/\s|-|\(|\)|\D/g, '')); } else if (link.innerText.indexOf('+7') == 0){ link.setAttribute('href', 'tel:+' + link.innerText.replace(/\s|-|\(|\)|\D/g, '')); } else if (link.innerText.replace(/\s|-|\(|\)|\D/g, '').indexOf('8800') == 0){ link.setAttribute('href', 'tel:' + link.innerText.replace(/\s|-|\(|\)|\D/g, '')); } else if (link.innerText.indexOf('8') == 0){ link.setAttribute('href', 'tel:' + link.innerText.replace(/\s|-|\(|\)|\D/g, '')); } else{ link.setAttribute('href', 'tel:' + '+7' + code + tel.replace(/\s|-/g, '')); } } } else if (link.protocol == 'tel:'){ link.setAttribute('href', 'tel:' + '+7' + code + tel.replace(/\s|-/g, '')); } if (addNumber != ''){ link.href += ',' + addNumber; } } } } ct_geoCity = "defined"; initStaticUserID(11673); ct_userIP = "defined"; isGaLoaded(1);callTracking._startSettingForms();