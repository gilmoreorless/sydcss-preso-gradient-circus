!function e(t,n,s){function i(a,o){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!o&&l)return l(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return i(n?n:e)},c,c.exports,e,t,n,s)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<s.length;a++)i(s[a]);return i}({1:[function(){!function(){var e=Math.PI,t=1e-5,n=e/180,s=document.createElement("div");document.head.appendChild(s);var i=self.ConicGradient=function(e){i.all.push(this),e=e||{},this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.repeating=!!e.repeating,this.size=e.size||Math.max(innerWidth,innerHeight),this.canvas.width=this.canvas.height=this.size;var t=e.stops;this.stops=(t||"").split(/\s*,(?![^(]*\))\s*/);for(var n=0;n<this.stops.length;n++){var s=this.stops[n]=new i.ColorStop(this,this.stops[n]);s.next&&(this.stops.splice(n+1,0,s.next),n++)}if(void 0===this.stops[0].pos)this.stops[0].pos=0;else if(this.stops[0].pos>0){var r=this.stops[0].clone();r.pos=0,this.stops.unshift(r)}if(void 0===this.stops[this.stops.length-1].pos)this.stops[this.stops.length-1].pos=1;else if(!this.repeating&&this.stops[this.stops.length-1].pos<1){var a=this.stops[this.stops.length-1].clone();a.pos=1,this.stops.push(a)}if(this.stops.forEach(function(e,t){if(void 0===e.pos){for(var n=t+1;this[n];n++)if(void 0!==this[n].pos){e.pos=this[t-1].pos+(this[n].pos-this[t-1].pos)/(n-t+1);break}}else t>0&&(e.pos=Math.max(e.pos,this[t-1].pos))},this.stops),this.repeating)for(var t=this.stops.slice(),o=t[t.length-1],l=o.pos-t[0].pos,n=0;this.stops[this.stops.length-1].pos<1&&1e4>n;n++)for(var c=0;c<t.length;c++){var p=t[c].clone();p.pos+=(n+1)*l,this.stops.push(p)}this.paint()};i.all=[],i.prototype={toString:function(){return"url('"+this.dataURL+"')"},get dataURL(){return"data:image/svg+xml,"+this.svg},get blobURL(){return URL.createObjectURL(new Blob([this.svg],{type:"image/svg+xml"}))},get svg(){return'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none"><svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"><image width="100" height="100%" xlink:href="'+this.png+'" /></svg></svg>'},get png(){return this.canvas.toDataURL()},get r(){return Math.sqrt(2)*this.size/2},paint:function(){var e,s,i,r=this.context,a=this.r,o=this.size/2,l=0,c=this.stops[l];r.translate(this.size/2,this.size/2),r.rotate(-90*n),r.translate(-this.size/2,-this.size/2);for(var p=0;360>p;p+=.5){if(p/360+t>=c.pos){do e=c,l++,c=this.stops[l];while(c&&c!=e&&c.pos===e.pos);if(!c)break;var u=e.color+""==c.color+""&&e!=c;s=e.color.map(function(e,t){return c.color[t]-e})}i=(p/360-e.pos)/(c.pos-e.pos);var d=u?c.color:s.map(function(t,n){var s=t*i+e.color[n];return 3>n?255&s:s});r.fillStyle="rgba("+d.join(",")+")",r.beginPath(),r.moveTo(o,o);var f=Math.min(360*n,p*n);if(u){var h=360*(c.pos-e.pos);p+=h-.5}else var h=.5;var g=f+h*n;g=Math.min(360*n,g);var m=g-f;r.arc(o,o,a,m>=2*n?f:f-.02,g),r.closePath(),r.fill()}}},i.ColorStop=function(e,t){if(this.gradient=e,t){var n=t.match(/^(.+?)(?:\s+([\d.]+)(%|deg|turn)?)?(?:\s+([\d.]+)(%|deg|turn)?)?\s*$/);if(this.color=i.ColorStop.colorToRGBA(n[1]),n[2]){var s=n[3];"%"==s||"0"===n[2]&&!s?this.pos=n[2]/100:"turn"==s?this.pos=+n[2]:"deg"==s&&(this.pos=n[2]/360)}n[4]&&(this.next=new i.ColorStop(e,n[1]+" "+n[4]+n[5]))}},i.ColorStop.prototype={clone:function(){var e=new i.ColorStop(this.gradient);return e.color=this.color,e.pos=this.pos,e},toString:function(){return"rgba("+this.color.join(", ")+") "+100*this.pos+"%"}},i.ColorStop.colorToRGBA=function(e){if(!Array.isArray(e)){s.style.color=e;var t=getComputedStyle(s).color.match(/rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)/);return t&&(t.shift(),t=t.map(function(e){return+e}),t[3]=isNaN(t[3])?1:t[3]),t||[0,0,0,0]}return e}}(),self.StyleFix&&!function(){var e=document.createElement("p");e.style.backgroundImage="conic-gradient(white, black)",e.style.backgroundImage=PrefixFree.prefix+"conic-gradient(white, black)",e.style.backgroundImage||StyleFix.register(function(e){return e.indexOf("conic-gradient")>-1&&(e=e.replace(/(?:repeating-)?conic-gradient\(((?:\([^()]+\)|[^;()}])+?)\)/g,function(e,t){return new ConicGradient({stops:t,repeating:e.indexOf("repeating-")>-1})})),e})}()},{}],2:[function(){!function(){function e(e,t){return[].slice.call((t||document).querySelectorAll(e))}if(window.addEventListener){var t=window.StyleFix={link:function(e){try{if("stylesheet"!==e.rel||e.hasAttribute("data-noprefix"))return}catch(n){return}var s,i=e.href||e.getAttribute("data-href"),r=i.replace(/[^\/]+$/,""),a=(/^[a-z]{3,10}:/.exec(r)||[""])[0],o=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(r)||[""])[0],l=/^([^?]*)\??/.exec(i)[1],c=e.parentNode,p=new XMLHttpRequest;p.onreadystatechange=function(){4===p.readyState&&s()},s=function(){var n=p.responseText;if(n&&e.parentNode&&(!p.status||400>p.status||600<p.status)){if(n=t.fix(n,!0,e),r)var n=n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,n){return/^([a-z]{3,10}:|#)/i.test(n)?e:/^\/\//.test(n)?'url("'+a+n+'")':/^\//.test(n)?'url("'+o+n+'")':/^\?/.test(n)?'url("'+l+n+'")':'url("'+r+n+'")'}),s=r.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1"),n=n.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+s,"gi"),"$1");s=document.createElement("style"),s.textContent=n,s.media=e.media,s.disabled=e.disabled,s.setAttribute("data-href",e.getAttribute("href")),c.insertBefore(s,e),c.removeChild(e),s.media=e.media}};try{p.open("GET",i),p.send(null)}catch(u){"undefined"!=typeof XDomainRequest&&(p=new XDomainRequest,p.onerror=p.onprogress=function(){},p.onload=s,p.open("GET",i),p.send(null))}e.setAttribute("data-inprogress","")},styleElement:function(e){if(!e.hasAttribute("data-noprefix")){var n=e.disabled;e.textContent=t.fix(e.textContent,!0,e),e.disabled=n}},styleAttribute:function(e){var n=e.getAttribute("style"),n=t.fix(n,!1,e);e.setAttribute("style",n)},process:function(){e('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link),e("style").forEach(StyleFix.styleElement),e("[style]").forEach(StyleFix.styleAttribute)},register:function(e,n){(t.fixers=t.fixers||[]).splice(void 0===n?t.fixers.length:n,0,e)},fix:function(e,n,s){for(var i=0;i<t.fixers.length;i++)e=t.fixers[i](e,n,s)||e;return e},camelCase:function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}).replace("-","")},deCamelCase:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};!function(){setTimeout(function(){e('link[rel="stylesheet"]').forEach(StyleFix.link)},10),document.addEventListener("DOMContentLoaded",StyleFix.process,!1)}()}}(),function(e){function t(e,t,s,i,r){return e=n[e],e.length&&(e=RegExp(t+"("+e.join("|")+")"+s,"gi"),r=r.replace(e,i)),r}if(window.StyleFix&&window.getComputedStyle){var n=window.PrefixFree={prefixCSS:function(e,s){var i=n.prefix;if(-1<n.functions.indexOf("linear-gradient")&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi,function(e,t,n,s){return t+(n||"")+"linear-gradient("+(90-s)+"deg"})),e=t("functions","(\\s|:|,)","\\s*\\(","$1"+i+"$2(",e),e=t("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+i+"$2$3",e),e=t("properties","(^|\\{|\\s|;)","\\s*:","$1"+i+"$2:",e),n.properties.length){var r=RegExp("\\b("+n.properties.join("|")+")(?!:)","gi");e=t("valueProperties","\\b",":(.+?);",function(e){return e.replace(r,i+"$1")},e)}return s&&(e=t("selectors","","\\b",n.prefixSelector,e),e=t("atrules","@","\\b","@"+i+"$1",e)),e=e.replace(RegExp("-"+i,"g"),"-"),e=e.replace(/-\*-(?=[a-z]+)/gi,n.prefix)},property:function(e){return(0<=n.properties.indexOf(e)?n.prefix:"")+e},value:function(e,s){return e=t("functions","(^|\\s|,)","\\s*\\(","$1"+n.prefix+"$2(",e),e=t("keywords","(^|\\s)","(\\s|$)","$1"+n.prefix+"$2$3",e),0<=n.valueProperties.indexOf(s)&&(e=t("properties","(^|\\s|,)","($|\\s|,)","$1"+n.prefix+"$2$3",e)),e},prefixSelector:function(e){return e.replace(/^:{1,2}/,function(e){return e+n.prefix})},prefixProperty:function(e,t){var s=n.prefix+e;return t?StyleFix.camelCase(s):s}};!function(){var e={},t=[],s=getComputedStyle(document.documentElement,null),i=document.createElement("div").style,r=function(n){if("-"===n.charAt(0)){t.push(n),n=n.split("-");var s=n[1];for(e[s]=++e[s]||1;3<n.length;)n.pop(),s=n.join("-"),StyleFix.camelCase(s)in i&&-1===t.indexOf(s)&&t.push(s)}};if(0<s.length)for(var a=0;a<s.length;a++)r(s[a]);else for(var o in s)r(StyleFix.deCamelCase(o));var l,c,a=0;for(c in e)s=e[c],s>a&&(l=c,a=s);for(n.prefix="-"+l+"-",n.Prefix=StyleFix.camelCase(n.prefix),n.properties=[],a=0;a<t.length;a++)o=t[a],0===o.indexOf(n.prefix)&&(l=o.slice(n.prefix.length),StyleFix.camelCase(l)in i||n.properties.push(l));!("Ms"!=n.Prefix||"transform"in i||"MsTransform"in i)&&"msTransform"in i&&n.properties.push("transform","transform-origin"),n.properties.sort()}(),function(){function e(e,t){return r[t]="",r[t]=e,!!r[t]}var t={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};t["repeating-linear-gradient"]=t["repeating-radial-gradient"]=t["radial-gradient"]=t["linear-gradient"];var s={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","max-content":"width","min-content":"width","fit-content":"width","fill-available":"width"};n.functions=[],n.keywords=[];var i,r=document.createElement("div").style;for(i in t){var a=t[i],o=a.property,a=i+"("+a.params+")";!e(a,o)&&e(n.prefix+a,o)&&n.functions.push(i)}for(var l in s)o=s[l],!e(l,o)&&e(n.prefix+l,o)&&n.keywords.push(l)}(),function(){function t(e){return a.textContent=e+"{}",!!a.sheet.cssRules.length}var s={":read-only":null,":read-write":null,":any-link":null,"::selection":null},i={keyframes:"name",viewport:null,document:'regexp(".")'};n.selectors=[],n.atrules=[];var r,a=e.appendChild(document.createElement("style"));for(r in s){var o=r+(s[r]?"("+s[r]+")":"");!t(o)&&t(n.prefixSelector(o))&&n.selectors.push(r)}for(var l in i)o=l+" "+(i[l]||""),!t("@"+o)&&t("@"+n.prefix+o)&&n.atrules.push(l);e.removeChild(a)}(),n.valueProperties=["transition","transition-property"],e.className+=" "+n.prefix,StyleFix.register(n.prefixCSS)}}(document.documentElement)},{}],3:[function(e,t){self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var s={};for(var i in e)e.hasOwnProperty(i)&&(s[i]=t.util.clone(e[i]));return s;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var s=t.util.clone(t.languages[e]);for(var i in n)s[i]=n[i];return s},insertBefore:function(e,n,s,i){i=i||t.languages;var r=i[e];if(2==arguments.length){s=arguments[1];for(var a in s)s.hasOwnProperty(a)&&(r[a]=s[a]);return r}var o={};for(var l in r)if(r.hasOwnProperty(l)){if(l==n)for(var a in s)s.hasOwnProperty(a)&&(o[a]=s[a]);o[l]=r[l]}return t.languages.DFS(t.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=o)}),i[e]=o},DFS:function(e,n,s){for(var i in e)e.hasOwnProperty(i)&&(n.call(e,i,e[i],s||i),"Object"===t.util.type(e[i])?t.languages.DFS(e[i],n):"Array"===t.util.type(e[i])&&t.languages.DFS(e[i],n,i))}},highlightAll:function(e,n){for(var s,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;s=i[r++];)t.highlightElement(s,e===!0,n)},highlightElement:function(s,i,r){for(var a,o,l=s;l&&!e.test(l.className);)l=l.parentNode;if(l&&(a=(l.className.match(e)||[,""])[1],o=t.languages[a]),o){s.className=s.className.replace(e,"").replace(/\s+/g," ")+" language-"+a,l=s.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+a);var c=s.textContent;if(c){c=c.replace(/^(?:\r?\n|\r)/,"");var p={element:s,language:a,grammar:o,code:c};if(t.hooks.run("before-highlight",p),i&&self.Worker){var u=new Worker(t.filename);u.onmessage=function(e){p.highlightedCode=n.stringify(JSON.parse(e.data),a),t.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,r&&r.call(p.element),t.hooks.run("after-highlight",p)},u.postMessage(JSON.stringify({language:p.language,code:p.code}))}else p.highlightedCode=t.highlight(p.code,p.grammar,p.language),t.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,r&&r.call(s),t.hooks.run("after-highlight",p)}}},highlight:function(e,s,i){var r=t.tokenize(e,s);return n.stringify(t.util.encode(r),i)},tokenize:function(e,n){var s=t.Token,i=[e],r=n.rest;if(r){for(var a in r)n[a]=r[a];delete n.rest}e:for(var a in n)if(n.hasOwnProperty(a)&&n[a]){var o=n[a];o="Array"===t.util.type(o)?o:[o];for(var l=0;l<o.length;++l){var c=o[l],p=c.inside,u=!!c.lookbehind,d=0,f=c.alias;c=c.pattern||c;for(var h=0;h<i.length;h++){var g=i[h];if(i.length>e.length)break e;if(!(g instanceof s)){c.lastIndex=0;var m=c.exec(g);if(m){u&&(d=m[1].length);var v=m.index-1+d,m=m[0].slice(d),y=m.length,b=v+y,x=g.slice(0,v+1),w=g.slice(b+1),k=[h,1];x&&k.push(x);var E=new s(a,p?t.tokenize(m,p):m,f);k.push(E),w&&k.push(w),Array.prototype.splice.apply(i,k)}}}}}return i},hooks:{all:{},add:function(e,n){var s=t.hooks.all;s[e]=s[e]||[],s[e].push(n)},run:function(e,n){var s=t.hooks.all[e];if(s&&s.length)for(var i,r=0;i=s[r++];)i(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,s,i){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,s,e)}).join("");var r={type:e.type,content:n.stringify(e.content,s,i),tag:"span",classes:["token",e.type],attributes:{},language:s,parent:i};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var a="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,a)}t.hooks.run("wrap",r);var o="";for(var l in r.attributes)o+=l+'="'+(r.attributes[l]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+o+">"+r.content+"</"+r.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),s=n.language,i=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(i,t.languages[s])))),self.close()},!1),self.Prism):self.Prism;var s=document.getElementsByTagName("script");return s=s[s.length-1],s&&(t.filename=s.src,document.addEventListener&&!s.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:n.languages.markup.tag.inside},rest:n.languages.css},alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:n.languages.markup.tag.inside},rest:n.languages.javascript},alias:"language-javascript"}}),function(){self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var s=t.getAttribute("data-src"),i=(s.match(/\.(\w+)$/)||[,""])[1],r=e[i]||i,a=document.createElement("code");a.className="language-"+r,t.textContent="",a.textContent="Loading…",t.appendChild(a);var o=new XMLHttpRequest;o.open("GET",s,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(a.textContent=o.responseText,n.highlightElement(a)):a.textContent=o.status>=400?"✖ Error "+o.status+" while fetching file: "+o.statusText:"✖ Error: File does not exist or is empty")},o.send(null)})},self.Prism.fileHighlight())}()},{}],4:[function(e,t){t.exports=function(){return function(e){function t(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var s=document.createElement("div");return s.className=n,s.classList.add("bespoke-backdrop"),e.parent.appendChild(s),s}}function n(t){if(t){var n=r.indexOf(t),a=e.slide();s(t,"active"),s(t,"inactive"),s(t,"before"),s(t,"after"),n!==a?(i(t,"inactive"),i(t,a>n?"before":"after")):i(t,"active")}}function s(e,t){e.classList.remove("bespoke-backdrop-"+t)}function i(e,t){e.classList.add("bespoke-backdrop-"+t)}var r;r=e.slides.map(t),e.on("activate",function(){r.forEach(n)})}}},{}],5:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},s=function(s,i){var r=e.slides[e.slide()],a=i-e.slide(),o=a>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,s)),s!==r&&["inactive",o,o+"-"+Math.abs(a)].map(t.bind(null,s))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(i){e.slides.map(s),t(i.slide,"active"),n(i.slide,"inactive")})}}},{}],6:[function(e,t){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),s=parseInt(t,10);t&&(s?n(s-1):e.slides.forEach(function(e,s){e.getAttribute("data-bespoke-hash")===t&&n(s)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],7:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],8:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,s=t.slides[0],i=s.offsetHeight,r=s.offsetWidth,a="zoom"===e||"zoom"in n.style&&"transform"!==e,o=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},l=a?t.slides:t.slides.map(o),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,s){return s+e in n.style?s+e:t},e.toLowerCase())}("Transform"),p=a?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},u=function(){var e=n.offsetWidth/r,t=n.offsetHeight/i;l.forEach(p.bind(null,Math.min(e,t)))};window.addEventListener("resize",u),u()}}},{}],9:[function(e,t){t.exports=function(){return function(e){var t=function(t,n){var s=n.slide.getAttribute("data-bespoke-state");s&&s.split(" ").forEach(function(n){e.parent.classList[t](n)})};e.on("activate",t.bind(null,"add")),e.on("deactivate",t.bind(null,"remove"))}}},{}],10:[function(e,t){t.exports=function(e){return function(t){var n,s,i="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+i],s=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),s=e.touches[0]["page"+i]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(s)>50&&t[s>0?"prev":"next"]()})}}},{}],11:[function(e,t){var n=function(e,t){var n=1===e.nodeType?e:document.querySelector(e),s=[].filter.call(n.children,function(e){return"SCRIPT"!==e.nodeName}),i=s[0],r={},a=function(e,t){s[e]&&(p("deactivate",u(i,t)),i=s[e],p("activate",u(i,t)))},o=function(e,t){return arguments.length?(p("slide",u(s[e],t))&&a(e,t),void 0):s.indexOf(i)},l=function(e,t){var n=s.indexOf(i)+e;p(e>0?"next":"prev",u(i,t))&&a(n,t)},c=function(e,t){return(r[e]||(r[e]=[])).push(t),function(){r[e]=r[e].filter(function(e){return e!==t})}},p=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},u=function(e,t){return t=t||{},t.index=s.indexOf(e),t.slide=e,t},d={on:c,fire:p,slide:o,next:l.bind(null,1),prev:l.bind(null,-1),parent:n,slides:s};return(t||[]).forEach(function(e){e(d)}),a(0),d};t.exports={from:n}},{}],12:[function(e,t){function n(e){if(p._showcase&&e.keyCode>=49&&e.keyCode<=52&&!e.altKey&&!e.shiftKey&&!e.ctrlKey&&!e.metaKey){var t={49:"MODE_COMBINED",50:"MODE_3D",51:"MODE_3D_EXPANDED",52:"MODE_EXPLODED"};p._showcase.setMode(t[e.keyCode])}}function s(e){return e.trim()}function i(e){for(var t=[],n=/[,\(\)]/,s=0,i="";e.length;){var r=n.exec(e);if(!r)break;var a=r[0],o=!1;switch(a){case",":s||(t.push(i.trim()),i="",o=!0);break;case"(":s++;break;case")":s--}var l=r.index+1;i+=e.slice(0,o?l-1:l),e=e.slice(l)}return(i.length||e.length)&&t.push((i+e).trim()),t}function r(e){for(var t=[],n=e.backgroundColor,r=e.backgroundImage,a=e.backgroundPosition,o=e.backgroundRepeat,l=e.backgroundSize,c=i(r),p=a.split(",").map(s),u=l.split(",").map(s),d=o.split(",").map(s),f=0,h=c.length;h>f;f++){var g=f%p.length,m=f%u.length,v=f%d.length;t.push({image:c[f],position:p[g],size:u[m],repeat:d[v]})}return n&&"rgba(0, 0, 0, 0)"!==n&&"transparent"!==n&&t.push({color:n}),t}function a(){this.container.style.width=this.dims.width,this.container.style.height=this.dims.height;for(var e=this.images.length;e--;){var t=this.images[e],n=document.createElement("div");n.className="bgimage-showcase-layer",n.style.width=this.dims.width,n.style.height=this.dims.height,t.color?n.style.backgroundColor=t.color:(n.style.backgroundImage=t.image,n.style.backgroundPosition=t.position,n.style.backgroundSize=t.size,n.style.backgroundRepeat=t.repeat),this.container.appendChild(n),this.layers.push(n)}}function o(){var e=l.layouts[this.mode];e&&(this.container.className="bgimage-showcase-container bgimage-showcase-timing-"+this.timing+" bgimage-showcase-mode-"+this.mode,e.call(this))}function l(e,t){this.options=t||{},this.source=e,this.mode=this.options.startMode||l.modes.MODE_COMBINED,this.padding=this.options.padding||u,this.timing=this.options.timing||"fast",this.container=null,this.layers=[],this._style="",this.dims={},this.images=[],this.setup(),this.refresh()}function c(e){return function(){var t=parseFloat(this.dims.height)||0,n=function(t){return u*e*t+"px"},s=this.layers.length;this.container.style.height=this.padding*s*e/2+t+"px";for(var i=s,r="rotateX(50deg) rotateZ(-45deg) scale(0.8)";i--;)this.layers[i].style.transform="translateY("+n.call(this,s-i-1)+") "+r}}var p=t.exports={_active:!1,_inspected:null,_showcase:null};p.start=function(){p._active||(document.addEventListener("keypress",n,!1),p._active=!0)},p.stop=function(){p._active=!1,p._inspected=null,p._showcase&&p._showcase.destroy(),p._showcase=null,document.removeEventListener("keypress",n,!1)},p.inspect=function(e,t){p.start(),p._inspected=e,p._showcase&&p._showcase.destroy(),p._showcase=new l(e,t)};var u=20;l.modes={MODE_COMBINED:"combined",MODE_EXPLODED:"exploded",MODE_3D:"3d",MODE_3D_EXPANDED:"3d-expanded"},l.prototype.setMode=function(e){l.modes.hasOwnProperty(e)&&(e=l.modes[e]),this.mode=e,this.refresh()},l.prototype.setup=function(){if(this.container)return!1;var e=this.options.container;return this.container=document.createElement("div"),this.container.className="bgimage-showcase-container bgimage-showcase-timing-"+this.timing,this.container.style.left=this.source.offsetLeft-this.padding+"px",this.container.style.top=this.source.offsetTop-this.padding+"px",this.container.style.padding=this.padding+"px",(e||document.body).appendChild(this.container),e&&e.classList.add("bgimage-showcase-active"),!0},l.prototype.refresh=function(){var e=getComputedStyle(this.source);e.background!==this._style&&(this._style=e.background,this.dims={width:e.width,height:e.height},this.images=r(e),this.clean(),a.call(this)),o.call(this)},l.prototype.clean=function(){this.layers=[],this.container.innerHTML=""},l.prototype.destroy=function(){this.clean(),this.container.parentNode.removeChild(this.container),this.options.container&&this.options.container.classList.remove("bgimage-showcase-active")},l.layouts={},l.layouts[l.modes.MODE_COMBINED]=function(){this.container.style.height=this.dims.height,this.layers.forEach(function(e){e.style.transform="translate(0)"})},l.layouts[l.modes.MODE_EXPLODED]=function(){var e=parseFloat(this.dims.height)||0,t=function(t){return(e+this.padding)*t+"px"},n=this.layers.length;this.container.style.height=t.call(this,n);for(var s=n;s--;)this.layers[s].style.transform="translateY("+t.call(this,n-s-1)+")"},l.layouts[l.modes.MODE_3D]=c(2),l.layouts[l.modes.MODE_3D_EXPANDED]=c(5)},{}],13:[function(e,t){function n(e,t,n){return(t-e)*n+e}function s(e){var t,n;for(n=1;n<arguments.length;n++)t=arguments[n],t&&Object.keys(t).forEach(function(n){e[n]=t[n]});return e}function i(e,t){return function(n){var i=s({},t,n);r(e,i)}}function r(e,t){var s,i,r,a,o,l=getComputedStyle(e),c=e.width=parseInt(l.width,10)||100,p=e.height=parseInt(l.height,10)||50,u=e.getContext("2d"),d=t.defs.from,f=t.defs.to,h="alpha"===t.type?1:0,g=function(e){return(1-e)*p};if("alpha"!==t.type){for(u.fillStyle=t.colour.bg,u.beginPath(),u.moveTo(0,p),s=0;c>=s;s++)r=s/c,a=n(d[h],f[h],r),o=n(d[1],f[1],r),i=t.isPremul?a+(1-o):a*o+(1-o),u.lineTo(s,g(i));u.lineTo(c,p),u.fill()}if(u.fillStyle=t.colour.source,u.beginPath(),u.moveTo(0,p),u.lineTo(0,g(d[h])),u.lineTo(c,g(f[h])),u.lineTo(c,p),u.fill(),"alpha"!==t.type){for(u.strokeStyle=t.colour.sourcePost,u.beginPath(),u.moveTo(0,p),s=0;c>=s;s++)r=s/c,a=n(d[h],f[h],r),o=n(d[1],f[1],r),i=t.isPremul?a:a*o,u.lineTo(s,g(i));u.lineTo(c,p),u.stroke()}var m=c/2;if(t.showDetails){u.clearRect(m+1,0,m,p),a=n(d[h],f[h],.5),o=n(d[1],f[1],.5),u.save();var v=function(e){var t=g(e.value)+.5,n=t,s=30,i=10;0>n-i/2&&(n+=i),u.strokeStyle=u.fillStyle=e.colour,u.font=i+"px sans-serif",u.beginPath(),u.moveTo(m,t),u.lineTo(m+s,n),u.stroke();var r=e.name+" = "+Math.round(1e3*e.value)/1e3;u.fillText(r,m+s+3,n+i/2-2)};v({value:a,colour:t.colour.source,name:t.type.toUpperCase()}),"alpha"!==t.type&&(i=t.isPremul?a+(1-o):a*o+(1-o),v({value:i,colour:t.colour.source,name:"SRC + BG"}),t.isPremul||v({value:a*o,colour:t.colour.sourcePost,name:t.type.toUpperCase()+" * ALPHA"})),u.restore()}t.showMarker&&(u.strokeStyle="hsl(240, 100%, 50%)",u.beginPath(),u.moveTo(m+.5,0),u.lineTo(m+.5,p),u.stroke())}function a(e){o.call(document.querySelectorAll(e),function(e){var t=[];o.call(e.querySelectorAll("canvas"),function(e){var n=e.getAttribute("data-defs");if(n){var s=n.split("-"),a=r.defs[s[0]];if(a){var o="pre"===s[0].substr(0,3),l=r.colours[s[1]],c=i(e,{type:s[1],colour:l,isPremul:o,defs:a});t.push(c),c(),e.addEventListener("click",function(){t.forEach(function(e){t.isAlt?e():e({showMarker:!0,showDetails:!0})}),t.isAlt=!t.isAlt},!1)}}})})}r.defs={post:{from:[1,.5],to:[0,0]},pre:{from:[.5,.5],to:[0,0]},post2:{from:[1,1],to:[0,.2]},pre2:{from:[1,1],to:[0,.2]},post3:{from:[0,1],to:[1,.2]},pre3:{from:[0,1],to:[.2,.2]}},r.colours={red:{source:"hsl(0, 100%, 50%)",bg:"hsl(0, 100%, 80%)",sourcePost:"hsl(0, 80%, 20%)"},blue:{source:"hsl(240, 90%, 70%)",bg:"hsl(240, 90%, 80%)",sourcePost:"hsl(240, 60%, 20%)"},alpha:{source:"#666"}};var o=Array.prototype.forEach;t.exports=a},{}],14:[function(e){function t(e){var t,s={source:[255,0,0,.6],dest:[255,255,255,1],output:[,,,1]};if(e=+e||0){if(e>=1)for(t=0;3>t;t++)s.source[t]*=s.source[3];if(e>=2)for(t=0;4>t;t++)s.dest[t]*=1-s.source[3]}for(t=0;3>t;t++)s.output[t]=s.source[t]+s.dest[t];var i=["red","green","blue","alpha"];n.call(document.querySelectorAll(".demo-blend-basic tr"),function(e){var t=e.className.replace("channel-",""),r=i.indexOf(t);-1!==r&&n.call(e.children,function(e){var n=e.getAttribute("data-type");if(n){var i=e.querySelector("code"),a=e.querySelector(".channel-fill"),o=s[n][r];if(i&&(i.textContent=o),a){var l="alpha"===t?o:o/255;a.style.height=100*l+"%"}}})})}var n=Array.prototype.forEach;n.call(document.querySelectorAll("[data-code-colour]"),function(e){var t=e.textContent.trim(),n=document.createElement("span");n.className="code-colour-preview",n.style.backgroundColor=t,e.insertBefore(n,e.firstChild)}),t();var s=e("./blending-graph");s(".demo-blend-gradient");var i=e("./generate-logo"),r=document.querySelector(".demo-logo .showcase-target");r.classList.contains("redacted")||i(r);var a=e("bespoke"),o=e("bespoke-classes"),l=e("bespoke-state"),c=e("bespoke-keys"),p=e("bespoke-touch"),u=e("bespoke-backdrop"),d=e("bespoke-scale"),f=e("bespoke-hash"),h=e("./plugin-linked-steps"),g=e("./bgimage-showcase"),m=function(){return function(e){var t=e.slides.map(function(e){var t=e.hasAttribute("data-bgimage-showcase");if(t){var n=e.querySelector(".showcase-target");if(n)return n}});e.on("activate",function(e){var n=t[e.index];n&&g.inspect(n,{container:n.parentNode,padding:40,startMode:n.getAttribute("data-showcase-start-mode"),timing:n.getAttribute("data-showcase-timing")})}),e.on("deactivate",function(e){var n=t[e.index];n&&g.stop()})}},v=a.from("article",[o(),l(),c(),p(),h(),m(),u(),d(),f()]);
e("./../../bower_components/prism/prism.js"),e("./../../bower_components/prefixfree/prefixfree.min.js"),e("./../../bower_components/conic-gradient/conic-gradient.js"),v.on("linked-step-change",function(e){t(e.step)}),document.addEventListener("keyup",function(e){if(80===e.keyCode){var t=v.slide(),n=v.slides[t],s=n.querySelector("video");if(s){var i=s.paused;s[i?"play":"pause"]()}}},!1);var y={},b={};v.on("activate",function(e){var t=e.slide.querySelector("video[data-autoplay-slide]");t&&(t.play(),y[e.index]=t);var n=e.slide.querySelector("img[data-swap-src]");if(n){n.swapSrc1=n.src,n.swapSrc2=n.getAttribute("data-swap-src");var s=1e3*(parseInt(n.getAttribute("data-swap-time"),10)||1),i=setInterval(function(){n.src=n.src===n.swapSrc1?n.swapSrc2:n.swapSrc1},s);b[e.index]={img:n,timer:i}}}),v.on("deactivate",function(e){if(y[e.index]&&(y[e.index].pause(),delete y[e.index]),b[e.index]){clearInterval(b[e.index].timer);var t=b[e.index].img;t.src=t.swapSrc1,delete b[e.index]}})},{"./../../bower_components/conic-gradient/conic-gradient.js":1,"./../../bower_components/prefixfree/prefixfree.min.js":2,"./../../bower_components/prism/prism.js":3,"./bgimage-showcase":12,"./blending-graph":13,"./generate-logo":15,"./plugin-linked-steps":16,bespoke:11,"bespoke-backdrop":4,"bespoke-classes":5,"bespoke-hash":6,"bespoke-keys":7,"bespoke-scale":8,"bespoke-state":9,"bespoke-touch":10}],15:[function(e,t){t.exports=function(e){function t(e,t,n){var s=0,i="50%",r=e[0]||1,a=e[1]||1;if(t===n)return{angle:0,stops:["fill"]};var o=t+n;if(o%2)return s=3===o?1===t?90:270:5===o?t>2?0:180:4===t?90:270,{angle:s,stops:[i]};var l=t>2?r:-r,c=1===t||4===t?a:-a,p=Math.atan2(c,l);s=p/Math.PI*180;var u=Math.abs(r*Math.sin(p))+Math.abs(a*Math.cos(p));i=Math.floor(u/2);var d=[i];return d.feather=!0,{angle:s,stops:d}}function n(e){return"number"!=typeof e||0===e?e:e+"px"}function s(e){return e.map(n).join(" ")}var i,r=["#FFF","#D9542B"],a=[30,7],o=[5,16],l=t(a,1,3),c=t(a,2,4);i=l.stops[0];var p=[i-1,i+1];p.feather=!0;var u=t(o,1,3),d=t(o,2,4);i=u.stops[0];var f=[i-1,i+1];f.feather=!0;var h=[9,24],g=t(h,1,3),m=t(h,2,4),v=[2,49],y=[9,9],b=[6.5,8.9];b.feather=!0;var x=[18,18],w=["99%"],k=[12,12],E=["99%"],S=[8,17],C=[15,16],z=t([7,4],1,3),A=t([6,3],4,2),O=t([7,12],1,3);i=t([17,27],1,3);var M=[O.stops[0],i.stops[0]];M.feather=!0;var P=t([7,4],2,4),D=t([6,3],3,1),L=t([6,11],2,4);i=t([16,27],2,4);var N=[L.stops[0],i.stops[0]];N.feather=!0;var _=[16,18],j=[4.5,7.5];j.feather=!0;var T=[16,13],$=[16,10],F=t($,2,4),q=t($,1,3),I=[11,14],R=t(I,1,3),B=t(I,2,4),W=[{size:a,pos:[71,3],angle:l.angle,stops:p,invert:!0},{size:o,pos:[68,8],angle:u.angle,stops:f,invert:!0},{size:a,pos:[100,3],angle:c.angle,stops:p,invert:!0},{size:o,pos:[128,8],angle:d.angle,stops:f,invert:!0},{col:1,size:[9,24],pos:[101,0],angle:m.angle,stops:m.stops},{size:[17,24],pos:[92,0],angle:g.angle,stops:g.stops,invert:!0},{col:1,size:[89,26],pos:[56,33],angle:90,stops:[11,78]},{type:"radial",size:x,pos:[48,37],stops:w},{size:v,pos:[58,21]},{type:"radial",size:y,pos:[58,13],at:"right bottom",stops:b,invert:!0},{type:"radial",size:y,pos:[58,68],at:"right top",stops:b,invert:!0},{type:"radial",size:x,pos:[135,37],stops:w},{size:v,pos:[141,21]},{type:"radial",size:y,pos:[134,13],at:"left bottom",stops:b,invert:!0},{type:"radial",size:y,pos:[134,68],at:"left top",stops:b,invert:!0},{col:1,type:"radial",size:k,pos:[75,40],stops:E},{col:1,type:"radial",size:k,pos:[114,40],stops:E},{size:[67,44],pos:[67,24]},{col:1,size:T,pos:[56,131],angle:F.angle,stops:F.stops,invert:!0},{type:"radial",size:_,pos:[56,126],stops:j,invert:!0},{size:S,pos:[72,95],angle:z.angle,stops:z.stops,invert:!0},{col:1,size:C,pos:[65,111],angle:O.angle,stops:M},{size:C,pos:[65,111],angle:A.angle,stops:A.stops,invert:!0},{col:1,size:T,pos:[129,131],angle:q.angle,stops:q.stops,invert:!0},{type:"radial",size:_,pos:[129,126],stops:j,invert:!0},{size:S,pos:[121,95],angle:P.angle,stops:P.stops,invert:!0},{col:1,size:C,pos:[121,111],angle:L.angle,stops:N},{size:C,pos:[121,111],angle:D.angle,stops:D.stops,invert:!0},{col:1,size:[37,29],pos:[82,139],angle:90,stops:[2,12,25,35]},{col:1,size:[7,9],pos:[97,170],angle:90},{size:[37,103],pos:[82,75],angle:180,stops:[2.5,20.5,61.5,65.5,92.5,96.5]},{size:[21,8],pos:[90,85]},{size:I,pos:[82,186],angle:R.angle,stops:R.stops},{size:I,pos:[108,186],angle:B.angle,stops:B.stops}],X=[],H=[],G=[];W.forEach(function(e){var t=r[e.col||0];if(Object.keys(e).length){X.push(s(e.size||["100%","100%"])),H.push(s(e.pos||[0,0]));var i=(e.type||"linear")+"-gradient",a=[];if("radial-gradient"===i){var o="farthest-side";e.at&&(o+=" at "+e.at),a.push(o)}else a.push((void 0===e.angle?180:e.angle)+"deg");var l=!e.invert,c=e.stops||["fill"],p=!!c.feather;c.forEach(function(e){if("fill"===e)return a.push(t+" 0%",t+" 100%"),void 0;var s=l?[t,"transparent"]:["transparent",t],i=n(e),r=p?n(e+1):i;a.push(s[0]+" "+i,s[1]+" "+r),l=!l}),G.push(i+"("+a.join(", ")+")")}}),e.style.backgroundSize=X.join(", "),e.style.backgroundPosition=H.join(", "),e.style.backgroundColor=r[1],e.style.backgroundImage=G.join(", ")}},{}],16:[function(e,t){t.exports=function(){return function(e){var t,n,s=e.slides.map(function(e){var t=[],n=[].slice.call(e.querySelectorAll("[data-linked-step]"),0);return n.forEach(function(e){var n=e.getAttribute("data-linked-step");if(n){n=parseInt(n,10)||0;var s=t[n];s||(s=t[n]={stepNum:n,parts:[]}),s.parts.push(e)}}),t.length?(t=t.filter(function(e){return e}),t[0].stepNum>0&&t.unshift({stepNum:0,parts:[]}),t):t}),i=function(){var e=t+1;return o(1)?(a(t,n+1),!1):(s[e]&&a(e,0),void 0)},r=function(){var e=t-1;return o(-1)?(a(t,n-1),!1):(s[e]&&a(e,s[e].length-1),void 0)},a=function(i,r){t=i,n=r,s.forEach(function(e,t){e.forEach(function(e,n){e.parts.forEach(function(e){e.classList.add("linked-step"),i>t||t===i&&r>=n?(e.classList.add("linked-step-active"),e.classList.remove("linked-step-inactive")):(e.classList.add("linked-step-inactive"),e.classList.remove("linked-step-active")),t===i&&n===r?e.classList.add("linked-step-current"):e.classList.remove("linked-step-current")})})}),e.fire("linked-step-change",{slide:i,step:r})},o=function(e){return void 0!==s[t][n+e]};e.on("next",i),e.on("prev",r),e.on("slide",function(e){a(e.index,0)}),a(0,0)}}},{}]},{},[14]);