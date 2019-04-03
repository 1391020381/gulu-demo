(function(window){var svgSprite='<svg><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M742.840994 72.157413c12.789281 12.780071 12.868075 33.425274 0.188288 46.108131L349.823875 511.471974l394.251226 394.261459c12.682857 12.678764 12.603039 33.32806-0.188288 46.108131-12.780071 12.789281-33.422204 12.873192-46.111201 0.190335L283.696806 537.952068c-1.245364-0.932232-2.457981-1.928932-3.590781-3.061732-12.780071-12.791327-12.868075-33.431414-0.183172-46.11734L696.727747 71.968102C709.407534 59.285245 730.061946 59.366086 742.840994 72.157413z"  ></path></symbol><symbol id="i-thumbs-up" viewBox="0 0 1024 1024"><path d="M955.1 471.896c0-53.496-42.36-97.02-95.496-99.516l-0.18-0.24h-272.4s36.12-114.396 39.228-129.144c20.736-82.188-15.324-196.44-109.884-209.16-5.328-0.72-10.776-0.996-16.284-0.996-52.08 0-98.496 30.012-119.904 73.872-1.8 4.152-114.168 356.604-114.168 356.604H95.936a26.964 26.964 0 0 0-27.036 26.904v474.048a26.964 26.964 0 0 0 27.036 26.892h685.8c42.576-4.356 77.112-35.76 86.94-76.272 1.056-4.344 0.168-0.708 0.168-0.708 17.928-90.636 84.72-433.368 86.256-442.284z m-697.2 448.944c0 13.176-4.056 17.232-17.304 17.232H139.616c-13.248 0-17.316-4.056-17.316-17.232V533.648c0-13.188 4.068-17.232 17.316-17.232h100.98c13.248 0 17.316 4.044 17.316 17.232V920.84z m559.44-20.088A47.028 47.028 0 0 1 771.2 938.24l-441.288-0.168c-13.26 0-17.328-4.056-17.328-17.232V492.86c9.48-29.676 109.284-342.648 110.568-346.992a79.2 79.2 0 0 1 76.92-60.384c5.112 0 10.164 0.264 14.952 1.416 49.104 11.784 71.4 94.86 59.688 141.684-4.56 21.792-60.672 196.728-60.672 196.728l56.004-0.072h288.18c24.408 1.74 43.668 21.936 43.668 46.656-1.608 7.872-83.952 425.844-84.564 428.856z"  ></path></symbol><symbol id="i-down" viewBox="0 0 1024 1024"><path d="M958.225971 302.831097a27.799136 27.799136 0 0 1-8.1711 19.718087l-418.337807 418.337807c-10.894118 10.894118-28.54308 10.894118-39.437198 0L73.942059 322.549184c-10.894118-10.894118-10.894118-28.54308 0-39.437198s28.54308-10.894118 39.437198 0l398.618696 398.618697 398.618697-398.618697c10.894118-10.894118 28.54308-10.894118 39.437197 0a27.795043 27.795043 0 0 1 8.172124 19.719111z"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M548.40888889 661.27644445L697.68533333 512c14.56355555-14.56355555 36.40888889-14.56355555 50.97244445 0 14.56355555 14.56355555 14.56355555 36.40888889 0 50.97244445L570.25422222 741.376c-29.12711111 29.12711111-72.81777778 29.12711111-101.94488889 0L289.90577778 562.97244445c-14.56355555-14.56355555-14.56355555-36.40888889 0-50.97244445 14.56355555-14.56355555 36.40888889-14.56355555 50.97244444 0l138.35377778 138.35377778V111.50222222c0-21.84533333 14.56355555-36.40888889 36.40888889-36.40888889s36.40888889 14.56355555 36.40888889 36.40888889v549.77422223zM876.08888889 621.22666667c0-21.84533333 14.56355555-36.40888889 36.40888889-36.40888889s36.40888889 14.56355555 36.40888889 36.40888889v182.04444444c0 61.89511111-47.33155555 109.22666667-109.22666667 109.22666667H184.32c-61.89511111 0-109.22666667-47.33155555-109.22666667-109.22666667V621.22666667c0-21.84533333 14.56355555-36.40888889 36.40888889-36.40888889s36.40888889 14.56355555 36.40888889 36.40888889v182.04444444c0 21.84533333 14.56355555 36.40888889 36.40888889 36.40888889h655.36c21.84533333 0 36.40888889-14.56355555 36.40888889-36.40888889V621.22666667z"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M554.66666656 992H469.33333344c-26.66666625 0-53.33333344-21.33333375-58.66666688-48l-10.66666687-69.33333375c-21.33333375-5.33333344-42.66666656-16.00000031-63.99999938-26.66666625l-58.66666687 42.66666656c-21.33333375 16.00000031-58.66666688 16.00000031-74.66666719-5.33333344l-58.66666594-58.66666687c-21.33333375-21.33333375-21.33333375-53.33333344-5.33333344-74.66666625l37.33333313-53.33333344c-10.66666687-21.33333375-21.33333375-42.66666656-26.66666625-64.00000031l-69.33333375-10.66666594c-26.66666625-16.00000031-48-37.33333312-48-69.33333375V469.33333344c0-26.66666625 21.33333375-53.33333344 48-58.66666688l64.00000031-10.66666687c5.33333344-21.33333375 16.00000031-42.66666656 26.66666625-63.99999938l-37.33333312-53.33333344c-16.00000031-26.66666625-10.66666687-58.66666688 5.33333343-80.00000062l58.66666688-58.66666594c21.33333375-21.33333375 53.33333344-21.33333375 74.66666625-5.33333344l53.33333344 37.33333313c26.66666625-10.66666687 48-21.33333375 74.66666625-26.66666625L410.66666656 80c5.33333344-26.66666625 26.66666625-48 58.66666688-48h85.33333312c26.66666625 0 53.33333344 21.33333375 58.66666688 48l10.66666687 64.00000031c21.33333375 5.33333344 48 16.00000031 69.33333282 26.66666625l53.33333343-37.33333312c21.33333375-16.00000031 53.33333344-16.00000031 74.66666719 5.33333343l58.66666594 58.66666688c21.33333375 21.33333375 21.33333375 53.33333344 5.33333344 74.66666625l-37.33333313 53.33333344c10.66666687 21.33333375 21.33333375 42.66666656 26.66666625 64.00000031l69.33333375 10.66666594-5.33333344 37.33333406 5.33333344-26.66666719c26.66666625 5.33333344 48 31.99999969 48 58.66666688v85.33333312c0 26.66666625-21.33333375 53.33333344-48 58.66666688l-69.33333375 10.66666687c-5.33333344 21.33333375-16.00000031 42.66666656-26.66666625 63.99999938l37.33333313 53.33333343c16.00000031 21.33333375 16.00000031 53.33333344-5.33333344 74.66666719l-58.66666594 58.66666594c-21.33333375 21.33333375-53.33333344 21.33333375-74.66666719 5.33333344l-53.33333343-37.33333313c-21.33333375 10.66666687-42.66666656 21.33333375-63.99999938 26.66666719L618.66666688 938.66666656c-10.66666687 31.99999969-37.33333312 53.33333344-64.00000032 53.33333344z m-223.99999969-208.00000031l26.66666626 16.00000031c16.00000031 10.66666687 37.33333312 16.00000031 53.33333343 21.33333375l37.33333313 10.66666594 16.00000031 101.33333343c0 5.33333344 0 5.33333344 5.33333344 5.33333344h85.33333312c5.33333344 0 5.33333344 0 5.33333344-5.33333344l16.00000031-101.33333343 31.99999969-10.66666594c21.33333375-5.33333344 37.33333312-16.00000031 58.66666687-21.33333375l26.66666625-16.00000031 106.66666688 74.66666719-21.33333375-21.33333375 58.66666688-58.66666688v-5.3333325L778.66666625 693.33333312l16.00000031-26.66666624c10.66666687-21.33333375 16.00000031-37.33333312 21.33333375-58.66666688l10.66666594-31.99999969 101.33333344-16.00000031c10.66666687 0 10.66666687-5.33333344 10.66666687-5.33333344V469.33333344c0-5.33333344 0-5.33333344-5.33333344-5.33333344L831.99999969 447.99999969l-10.66666594-31.99999969c-5.33333344-21.33333375-16.00000031-37.33333312-21.33333375-58.66666687l-16.00000031-26.66666625L842.66666656 245.33333375v-5.33333344l-58.66666687-58.66666687H778.66666625l-79.99999969 58.66666687-26.66666625-16.00000031c-21.33333375-10.66666687-37.33333312-16.00000031-58.66666687-21.33333375l-37.33333313-10.66666594-16.00000031-101.33333343c0-5.33333344-5.33333344-5.33333344-5.33333344-5.33333344H469.33333344c-5.33333344 0-5.33333344 0-5.33333344 5.33333344L442.66666625 192.00000031l-26.66666625 10.66666594c-21.33333375 5.33333344-37.33333312 16.00000031-53.33333344 21.33333375l-31.99999969 16.00000031L245.33333375 181.33333344h-5.33333344L181.33333344 240.00000031V245.33333375l58.66666687 85.33333312-16.00000031 31.99999969c-10.66666687 16.00000031-21.33333375 37.33333312-26.66666625 53.33333344l-5.33333344 31.99999969-101.33333344 16.00000031c-5.33333344 0-5.33333344 5.33333344-5.33333343 5.33333344v85.33333312c0 5.33333344 0 5.33333344 5.33333343 5.33333344l101.33333344 21.33333375 10.66666594 31.99999969c5.33333344 21.33333375 16.00000031 37.33333312 21.33333375 53.33333343l16.00000031 31.99999969L181.33333344 778.66666625v5.33333344l58.66666687 58.66666687H245.33333375l85.33333312-58.66666687z"  ></path><path d="M512 672.00000031c-90.66666656 0-160.00000031-69.33333375-160.00000031-160.00000031s69.33333375-160.00000031 160.00000031-160.00000031 160.00000031 69.33333375 160.00000031 160.00000031-69.33333375 160.00000031-160.00000031 160.00000031z m0-266.66666718c-58.66666688 0-106.66666688 48-106.66666688 106.66666687s48 106.66666688 106.66666688 106.66666688 106.66666688-48 106.66666688-106.66666688-48-106.66666688-106.66666688-106.66666687z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M249.35424 11.556409c-14.552178 14.5408-14.640924 38.03136-0.213902 52.461795l447.379911 447.381049L247.950222 959.980658c-14.430436 14.427022-14.339413 37.919858 0.213902 52.461795 14.5408 14.55104 38.026809 14.646613 52.464072 0.216178l471.131022-471.131022c1.416533-1.060409 2.79552-2.194773 4.084622-3.483876 14.5408-14.553316 14.640924-38.037049 0.208213-52.470897L301.820587 11.341369c-14.427022-14.430436-37.926684-14.338276-52.466347 0.216178z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)