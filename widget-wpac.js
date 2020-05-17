var WPac=WPac||{getCookie:function(e){return(e=(document.cookie.match("(^|; )"+e+"=([^;]*)")||0)[2])&&decodeURIComponent(e)},getSearchPath:function(e){var t=document.createElement("a");return t.href=e,0!=(e=t.pathname+t.search).indexOf("/")?"/"+e:e},getChan:function(e){if(e.chan)return e.chan;if(e.url){var t=document.createElement("a");return t.href=e.url,0!=(e=e.chanFull?t.pathname+t.search:t.pathname).indexOf("/")?"/"+e:e}return t=window.location,e.chanFull?t.pathname+t.search:t.pathname},getUrl:function(e){var t=window.location.href;return decodeURIComponent(e.url||t.substring(0,0<t.indexOf("#")?t.indexOf("#"):t.length))},getLang:function(){var e=navigator;return(e.language||e.systemLanguage||e.userLanguage||"en").substr(0,2).toLowerCase()},params:function(e,t){var n,a=[];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&a.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e+"?"+a.join("&")},rand:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},hashCode:function(e){var t=0;if(0==e.length)return t;for(var n=0;n<e.length;n++)t=(t=(t<<5)-t+e.charCodeAt(n))&t;return t},init:function(e){if(e)if(e.length)for(var t=0;t<e.length;t++)this.load(e[t]);else this.load(e)},load:function(t){var n;t.loaded||(t.loaded=!0,t.host=WPac.protocol+"//"+WPac.cluster[this.rand(0,WPac.cluster.length-1)],WPac.Widget[t.widget].url?(n=this,WPac.Lib.loadJson(t,WPac.Widget[t.widget],function(e){t.lang=t.lang||e.lang||WPac.getLang(),t.data=e,n.boot(t)})):(t.lang_org=t.lang,t.lang=t.lang||WPac.getLang(),this.boot(t)))},boot:function(e){var t,n,a;WPac[e.widget]?WPac[e.widget].main(e):(t=WPac.origin_embed+"/widget",a=(n=WPac.Widget[e.widget]).i18n,WPac.Lib.loadJss(t+"/js/",a&&a[e.lang]||n.js,function(){WPac[e.widget].main(e)}),n.css&&WPac.Lib.loadCsss(t+"/css/",n.css))},Lib:{loadJson:function(e,t,n){var a="wpac_"+Math.abs(WPac.hashCode(JSON.stringify(e)));return window[a]=function(e){return n(e)},e=t.url(e),e+=(-1<e.indexOf("?")?"&":"?")+"callback="+a,this.loadJs(e)},loadJss:function(e,t,n,a){var i=this;if(t.length>(a=a||0))WPac.Lib.loadJs(e+t[a]+".js"+WPac.ver,function(){return i.loadJss(e,t,n,a+1)});else if(n)return n()},loadJs:function(e,t){var n=document.createElement("script");n.type="text/javascript",n.src=e,n.async=!0,t&&(void 0!==n.onload?n.onload=t:n.onreadystatechange=void 0!==n.onreadystatechange?function(){"complete"!=this.readyState&&"loaded"!=this.readyState||t()}:n.onload=function(){var e=n.readyState;e&&!/loaded|complete/.test(e)||t()}),this.appendToRoot(n)},loadCsss:function(e,t){for(var n=0;n<t.length;n++)WPac.Lib.loadCss(e+t[n]+".css"+WPac.ver)},loadCss:function(e){var t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,this.appendToRoot(t)},appendToRoot:function(e){(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}}};(WPac=WPac||{}).protocol="https:",WPac.protocolws="wss:",WPac.host=WPac.host||"https://widgetpack.com",WPac.admin_host=WPac.admin_host||"https://widgetpack.com/admin",WPac.app_host=WPac.app_host||"app.widgetpack.com",WPac.embed_host=WPac.embed_host||"embed.widgetpack.com",WPac.rt_host=WPac.rt_host||"rt3.cackle.me",WPac.origin=WPac.protocol+"//"+WPac.app_host,WPac.origin_embed=WPac.protocol+"//"+WPac.embed_host,WPac.originws=WPac.protocolws+"//"+WPac.app_host,WPac.cluster=[WPac.app_host],WPac.ver="?v=1488759785645",WPac.Widget=WPac.Widget||{Admin:{js:["admin"]},Sign:{js:["sign"]},Setup:{js:["setup"]},Setup2:{js:["setup2"]},SiteNew:{js:["site-new"]},SiteChosen:{js:["site-chosen"]},SiteInstall:{js:["admin/site-install"]},SiteSetting:{js:["site-setting"]},SiteAdmin:{js:["site-admin"]},SiteStopword:{js:["site-stopword"]},SiteBan:{js:["site-ban"]},Rating:{js:["rating"],css:["rating"]},RatingSetting:{js:["admin/rating-setting"],css:["social"]},RatingInstall:{js:["admin/rating-install"]},RatingModeration:{js:["admin/rating-mod"],css:["rating-mod"]},Comment:{url:function(e){var t={id:e.id,chan:WPac.getChan(e),sort:WPac.getCookie("wp-comment-sort")||e.sort||"desc"},n=window.location.hash.match(/wpc-([0-9]+)/);return n&&1<n.length&&(t.commentId=n[1]),WPac.params(e.host+"/widget/comment/bootstrap",t)},js:["comment"],i18n:{br:["comment_br"],de:["comment_de"],es:["comment_es"],fr:["comment_fr"],id:["comment_id"],it:["comment_it"],nl:["comment_nl"],pl:["comment_pl"],pt:["comment_pt"],ru:["comment_ru"],tr:["comment_tr"],uk:["comment_uk"]},css:["comment"]},CommentCount:{js:["comment-count"]},CommentRecent:{url:function(e){return WPac.Widget.recent_url("comment",e)},js:["comment-recent"],css:["recent"]},CommentSetting:{js:["admin/comment-setting"],css:["social"]},CommentInstall:{js:["admin/comment-install"]},CommentModeration:{js:["admin/comment-mod"],css:["comment-mod"]},CommentMiniwidgets:{js:["admin/comment-miniwidgets"]},ReviewSetting:{js:["admin/review-setting"],css:["social"]},ReviewInstall:{js:["admin/review-install"]},ReviewModeration:{js:["admin/review-mod"],css:["review-mod"]},ReviewMiniwidgets:{js:["admin/review-miniwidgets"]},Review:{url:function(e){return WPac.params(e.host+"/widget/review/bootstrap",{id:e.id,chan:WPac.getChan(e),sort:WPac.getCookie("wp-rw-sort")||e.sort||"id",order:WPac.getCookie("wp-rw-order")||e.order||"desc"})},js:["review"],i18n:{fr:["review_fr"],sr:["review_sr"],br:["review_br"],nl:["review_nl"],de:["review_de"],es:["review_es"],pl:["review_pl"],ru:["review_ru"],uk:["review_uk"]},css:["review"]},ReviewCount:{js:["review-count"]},ReviewRecent:{url:function(e){return WPac.Widget.recent_url("review",e)},js:["review-recent"],css:["recent"]},GreviewInstall:{js:["admin/greview-install"],css:["greview-install"]},GreviewModeration:{js:["admin/greview-moderation"],css:["greview-install"]},GreviewSetting:{js:["admin/greview-setting"]},GoogleReview:{url:function(e){return WPac.params(e.host+"/widget/google-review/boot",{site_id:e.id,place_id:e.place_id})},js:["google-review"],css:["google-review"]},FacebookReview:{url:function(e){return WPac.params(e.host+"/widget/fbrev/boot",{site_id:e.id,page_id:e.page_id})},js:["facebook-review"],css:["facebook-review"]},FbrevInstall:{js:["admin/fbrev-install"],css:["fbrev-install"]},ChatInstall:{js:["admin/chat-install"]},ChatDashboard:{js:["admin/chat-dashboard"],css:["chat-dashboard"]},Chat:{js:["chat"],css:["chat"]},SubscriptionPlan:{js:["admin/subscription-plan"]},SubscriptionPayment:{js:["admin/subscription-payment"]},Pricing:{js:["pricing"],css:["pricing"]},recent_url:function(e,t){var n={id:t.id};return t.limit&&(n.size=t.limit),t.chan?n.chan=t.chan:t.url&&(n.chan=WPac.getSearchPath(t.url)),WPac.params(t.host+"/widget/"+e+"/recent",n)}},window.wpac_init&&WPac.init(wpac_init)
