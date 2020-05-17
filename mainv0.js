function haveCookie() {
    return _$_[0] in document
}

function setCookie(_, t, e) {
    if (!haveCookie()) return !1;
    var a = new Date;
    return a.setDate(a.getDate() + e), e = escape(t) + ("0" == e ? _$_[1] : _$_[2] + a.toUTCString()) + _$_[3], document.cookie = _ + _$_[4] + e, getCookie(_) === t
}

function testcookie() {
    return !!setCookie(_$_[5], _$_[6])
}

function getCookie(_) {
    if (!havecookie()) return _$_[1];
    var t, e, a, s = document.cookie.split(_$_[7]);
    for (t = 0; t < s.length; t++)
        if (e = s[t].substr(0, s[t].indexOf(_$_[4])), a = s[t].substr(s[t].indexOf(_$_[4]) + 1), (e = e.replace(/^\s+|\s+$/g, _$_[1])) == _) return unescape(a);
    return _$_[1]
}

function delCookie(_) {
    setCookie(_, _$_[1], -1)
}

function checkLocal() {
    return _$_[8] != typeof localStorage
}

function setLocal(_, t) {
    return !!checkLocal() && (localStorage.setItem(_, t), !0)
}

function getLocal(_) {
    return checkLocal() && (_ = localStorage.getItem(_)) ? _ : _$_[1]
}

function delLocal(_) {
    localStorage.removeItem(_)
}

function setCookieLocal(_, t) {
    return checkLocal() ? setLocal(_, t) : !!testCookie() && setCookie(_, t)
}

function getCookieLocal(_) {
    return checkLocal() ? getLocal(_) : testCookie() ? getCookie(_) : _$_[1]
}

function delCookieLocal(_) {
    return checkLocal() ? delLocal(_) : testCookie() ? delCookie(_) : _$_[1]
}

function cmnu(_, i) {
    var r = _$_[21] + i + _$_[22];
    $(_$_[35], _).each(function () {
        var _ = $(this).text(),
            t = _.substr(0, 1),
            e = _.substr(1),
            a = $(this).find(_$_[23]).length ? _$_[24] + $(this).find(_$_[23]).attr(_$_[25]) + _$_[26] : _$_[1],
            s = $(this).find(_$_[28]).attr(_$_[27]);
        r = _$_[29] == t || _$_[30] == t ? r + (_$_[31] + s + _$_[22] + a + e + _$_[32]) : r + (_$_[33] + s + _$_[22] + a + _ + _$_[34] + i + _$_[22])
    }), r += _$_[36], $(_).html(r), $(_$_[37], _).each(function () {
        var _ = $(this);
        "0" == _.html().replace(rgx[0], _$_[1]).length && _.remove()
    }), $(_$_[35], _).each(function () {
        var _ =
            $(this);
        "0" == _.html().replace(rgx[0], _$_[1]).length && _.remove()
    })
}

function lpost(_) {
    var t, e = _.find(_$_[38]),
        a = e.html(),
        s = [];
    t = [], s = _$_[39];
    var i = _.find(_$_[40]),
        r = _.find(_$_[41]),
        n = _.find(_$_[42]);
    t = _.find(_$_[43]).width();
    var o = $(_$_[45]).attr(_$_[44]);
    _ = (l = _.find(_$_[46])).text();
    var l = l.find(_$_[28]).attr(_$_[27]),
        d = 300 < t ? _$_[47] : _$_[48];
    if (r.attr(_$_[49], function (_, t) {
            return t.replace(_$_[51], _$_[52]).replace(_$_[50], d)
        }), i.length && (rgx[6].test(a) || rgx[8].test(a) ? (s = rgx[6].exec(rgx[6]), t = rgx[8].exec(a), s = null !== s ? s[5] : t[3], t = _$_[53] + s + _$_[52], s = _$_[54]) : t = rgx[5].test(a) ?
            (t = rgx[5].exec(a))[4].replace(rgx[7], _$_[55] + d + _$_[55]) : _$_[56], i.attr(_$_[49], _$_[56] === t ? _$_[57] : t)), -1 != r.attr(_$_[49]).indexOf(_$_[58]) && (r.append(_$_[59]), r.parent(_$_[61]).addClass(_$_[60])), rgx[9].test(a) ? s = _$_[54] : rgx[10].test(a) ? s = _$_[62] : rgx[11].test(a) ? s = _$_[63] : rgx[12].test(a) && (s = rgx[12].exec(a).index <= 5 ? _$_[64] : _$_[39]), n.prepend(_$_[65] + s + _$_[26]), rgx[29].test(a) && !hrev) {
        for (i = [], n = 0, s = (i = a.match(rgx[29])).length, t = 0; t < s; t++) n += parseInt(i[t].replace(rgx[29], _$_[66]).replace(/"/g, _$_[1]).replace(/'/g,
            _$_[1]));
        i = n / s, r.append(_$_[67] + rgx[1] + _$_[68] + i.toFixed(1) + _$_[69]), r.find(_$_[72]).css(_$_[70], 10 * i.toFixed(1) + _$_[71])
    }(a = a.replace(rgx[15], _$_[1]).replace(rgx[16], _$_[1]).replace(/"/g, _$_[73])).length > sumLength && (a = a.substring(0, sumLength) + _$_[74] + l + _$_[75] + o + _$_[76] + _ + _$_[22] + o + _$_[77]), e.html(a), r.attr(_$_[78], _$_[79] + (-1 != r.attr(_$_[49]).indexOf(_$_[80]) ? _$_[81] + r.attr(_$_[49]) + _$_[82] : _$_[57]) + _$_[83])
}

function ajaxsrc(a) {
    ! function (_) {
        var c = {
                blogURL: _$_[1],
                srcBlank: _$_[56],
                findText: _$_[84],
                NotfindText: _$_[85],
                Showthumb: !0,
                LoadingText: _$_[86],
                viewMoreText: vmtx,
                scrthumbSize: 50,
                MaxPost: 10,
                summaryLength: 100
            },
            t = (c = _.extend({}, c, a), _(_$_[87])),
            e = t.find(_$_[88]);
        t.append(_$_[89] + rgx[1] + _$_[90]);
        var h = _(_$_[91]);
        t.on(_$_[92], function () {
            var d = e.val();
            return h.show().html(_$_[93] + c.LoadingText + _$_[94]), _.get((_$_[1] === c.blogURL ? window.location.protocol + _$_[95] + window.location.host : c.blogURL) + _$_[96] + d + _$_[97] +
                c.MaxPost,
                function (_) {
                    var t, e, a, s, $, i, r = _.feed.entry;
                    if (void 0 !== r) {
                        i = _$_[98] + c.findText + _$_[99] + d + _$_[100], i += _$_[101] + rgx[1] + _$_[102];
                        for (var n = 0, o = r.length; n < o; n++) {
                            var l = new RegExp(d, _$_[103]);
                            for (a = r[n].title.$t.replace(l, _$_[104] + d + _$_[105]), t = r[n].link.length, e = 0; e < t; e++) _$_[106] == r[n].link[e].rel && (s = r[n].link[e].href);
                            for (e = 0; e < t; e++) _$_[107] == r[n].link[e].rel && ($ = r[n].link[e].type), $ = _$_[39];
                            t = _$_[108] in r[n] ? r[n].content.$t : _$_[109] in r[n] ? r[n].summary.$t : _$_[1], _$_[110] in r[n] ? (e = r[n].media$thumbnail.url.replace(rgx[7],
                                    _$_[111] + c.scrthumbSize + _$_[112]), -1 != r[n].media$thumbnail.url.indexOf(_$_[58]) && (e = r[n].media$thumbnail.url.replace(_$_[113], _$_[114]), $ = _$_[54])) : rgx[6].test(t) || rgx[8].test(t) ? ($ = rgx[6].exec(rgx[6]), e = rgx[8].exec(t), e = _$_[53] + (null !== $ ? $[5] : e[3]) + _$_[52], $ = _$_[54]) : e = rgx[5].test(t) ? (e = rgx[5].exec(t))[4].replace(rgx[7], _$_[111] + c.scrthumbSize + _$_[112]) : c.srcBlank, rgx[9].test(t) ? $ = _$_[54] : rgx[10].test(t) ? $ = _$_[62] : rgx[11].test(t) ? $ = _$_[63] : rgx[12].test(t) && ($ = rgx[12].exec(t).index <= 5 ? _$_[64] : _$_[39]),
                                (t = t.replace(rgx[15], _$_[1]).replace(/"/g, _$_[73]).replace(rgx[16], _$_[1])).length > c.summaryLength && (t = t.substring(0, c.summaryLength) + _$_[115]), t = t.replace(l, _$_[104] + d + _$_[105]), i += _$_[116] + rgx[30] + _$_[117] + (_$_[56] === e ? _$_[57] : _$_[118] + e + _$_[119]) + _$_[120] + s + _$_[121] + $ + _$_[122] + rgx[32] + _$_[123] + s + _$_[22] + a + _$_[77] + (0 < c.summaryLength ? _$_[124] + t + _$_[125] : _$_[1]) + _$_[94]
                        }
                        i += _$_[94] + (_.feed.openSearch$totalResults.$t > _.feed.openSearch$itemsPerPage.$t ? _$_[126] + d + _$_[22] + c.viewMoreText + _$_[99] + d + _$_[127] :
                            _$_[1]), h.html(i)
                    } else h.html(_$_[128] + c.NotfindText + _$_[129])
                }, _$_[130]), !1
        }), t.on(_$_[9], _$_[131], function () {
            return h.fadeOut(), !1
        })
    }(jQuery)
}

function vmode(_) {
    function t() {
        return s.removeClass(_$_[132]).addClass(_$_[139]), $.removeClass(_$_[18]), i.addClass(_$_[18]), setCookieLocal(a.clist, null, 1E4), delCookieLocal(a.cgrid), !1
    }
    var e, a, s, $, i;
    e = jQuery, a = {
        viewdefault: _$_[132],
        clist: _$_[133],
        cgrid: _$_[134]
    }, a = e.extend({}, a, _), s = e(_$_[136]).find(_$_[135]), $ = e(_$_[137]), i = e(_$_[138]), e = function () {
        return s.addClass(_$_[132]).removeClass(_$_[139]), $.addClass(_$_[18]), i.removeClass(_$_[18]), setCookieLocal(a.cgrid, null, 1E4), delCookieLocal(a.clist),
            !1
    }, getCookieLocal(a.clist) && _$_[132] != a.viewdefault ? (t(), delCookieLocal(a.clist)) : getCookieLocal(a.cgrid) && _$_[132] != a.viewdefault ? (e(), delCookieLocal(a.cgrid)) : getCookieLocal(a.clist) ? (t(), delCookieLocal(a.clist)) : getCookieLocal(a.cgrid) ? (e(), delCookieLocal(a.cgrid)) : _$_[132] != a.viewdefault ? (t(), delCookieLocal(a.clist)) : (e(), delCookieLocal(a.cgrid)), $.click(e), i.click(t)
}

function cdate() {
    $(_$_[146]).each(function () {
        var _ = $(this).attr(_$_[44]),
            t = mName;
        if (_$_[1] != _) var e = (a = _.substring(0, 10)).substring(0, 4),
            a = (_ = a.substring(5, 7), a.substring(8, 10)),
            s = t[parseInt(_, 10) - 1];
        $(this).parents(_$_[145]).find(_$_[144]).html(_$_[140] + a + _$_[141] + s + _$_[142] + e + _$_[143])
    })
}

function lMore(_) {
    var t, e;
    t = jQuery, e = {
        olderPostsLink: _$_[1],
        loadMoreDiv: null,
        thumbnailSize: 400,
        summaryLength: 100,
        postContainerSelector: _$_[154],
        MoreText: lmtx,
        viewdefault: _$_[132],
        clist: _$_[133],
        cgrid: _$_[155],
        loading: !1
    }, e = t.extend({}, e, _), t(window), t(document)
}

function pageNavi(_) {
    ! function (s) {
        function t(_) {
            (function (_) {
                var t = "";
                for (number = parseInt(l.numshowpage / 2), number == l.numshowpage - number && (l.numshowpage = 2 * number + 1), start = n - number, start < 1 && (start = 1), maxlen = parseInt(_ / l.postperpage) + 1, maxlen - 1 == _ / l.postperpage && --maxlen, akhir = start + l.numshowpage - 1, akhir > maxlen && (akhir = maxlen), _ = parseInt(n) - 1, 1 < n && (t = 2 == n ? "page" == r ? t + '<span class="showpage"><a href="">' + l.previous + "</a></span>" : t + '<span class="showpageNum"><a href="/search/label/' + o + "?&max-results=" +
                        l.postperpage + '">' + l.previous + "</a></span>" : "page" == r ? t + '<span class="showpageNum"><a class="xpagex" href="#" alt="' + _ + '">' + l.previous + "</a></span>" : t + '<span class="showpageNum"><a class="xlabelx" href="#" alt="' + _ + '">' + l.previous + "</a></span>"), 1 < start && (t = "page" == r ? t + '<span class="showpageNum"><a href="">1</a></span>' : t + '<span class="showpageNum"><a href="/search/label/' + o + "?&max-results=" + l.postperpage + '">1</a></span>'), 2 < start && (t += '<span class="dotxpage"> ...  </span>'), _ = start; _ <= akhir; _++) t =
                    n == _ ? t + '<span class="showpagePoint">' + _ + "</span>" : 1 == _ ? "page" == r ? t + '<span class="showpageNum"><a href="">1</a></span>' : t + '<span class="showpageNum"><a href="/search/label/' + o + "?&max-results=" + l.postperpage + '">1</a></span>' : "page" == r ? t + '<span class="showpageNum"><a href="#" class="xpagex" alt="' + _ + '">' + _ + "</a></span>" : t + '<span class="showpageNum"><a href="#" class="xlabelx" alt="' + _ + '">' + _ + "</a></span>";
                akhir < maxlen - 1 && (t += '<span class="dotxpage"> ... </span>'), akhir < maxlen && (t = "page" == r ? t + '<span class="showpageNum"><a href="#" class="xpagex" alt="' +
                    maxlen + '">' + maxlen + "</a></span>" : t + '<span class="showpageNum"><a href="#" class="xlabelx" alt="' + maxlen + '">' + maxlen + "</a></span>"), _ = parseInt(n) + 1, n < maxlen && (t = "page" == r ? t + '<span class="showpageNum"><a href="#" class="xpagex" alt="' + _ + '">' + l.next + "</a></span>" : t + '<span class="showpageNum"><a href="#" class="xlabelx" alt="' + _ + '">' + l.next + "</a></span>"), _ = document.getElementsByName("pageArea");
                for (var e = document.getElementById("blog-pagerindex"), a = 0; a < _.length; a++) _[a].innerHTML = t;
                _ && 0 < _.length && (t =
                    ""), e && (e.innerHTML = t), s(".blog-pagerindex").css("display", "table"), s(l.container).removeClass("load-next"), s(".blog-pagerindex a.xpagex, .blog-pagerindex a.xlabelx").click(function () {
                    s(l.container).addClass("load-next"), s(".hfeed .loader").show();
                    var _ = s(this).attr("alt");
                    return jsonstart = (_ - 1) * l.postperpage, $ = _, "page" == r ? s.get(d + "/feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script", h, "jsonp") : s.get(d + "/feeds/posts/summary/-/" + o + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script",
                        h, "jsonp"), !1
                })
            })(_ = parseInt(_.feed.openSearch$totalResults.$t, 10))
        }

        function a() {
            var _ = c; - 1 != _.indexOf("/search/label/") && (o = -1 != _.indexOf("?updated-max") ? _.substring(_.indexOf("/search/label/") + 14, _.indexOf("?updated-max")) : -1 != _.indexOf("?max") ? _.substring(_.indexOf("/search/label/") + 14, _.indexOf("?max")) : -1 != _.indexOf("?&max") ? _.substring(_.indexOf("/search/label/") + 14, _.indexOf("?&max")) : _.substr(_.lastIndexOf("/"))), -1 == _.indexOf("?q=") && -1 == _.indexOf(".html") && (-1 == _.indexOf("/search/label/") ?
                (r = "page", -1 != _.indexOf("max-results=") && -1 != _.indexOf("#PageNo=") ? l.postperpage = _.substring(_.indexOf("max-results=") + 12, _.indexOf("#PageNo=")) : -1 != _.indexOf("max-results=") ? l.postperpage = _.substring(_.indexOf("max-results=") + 12) : l.postperpage = l.postperpage, n = -1 != c.indexOf("#PageNo=") ? c.substring(c.indexOf("#PageNo=") + 8, c.length) : 1, s.get(d + "/feeds/posts/summary?max-results=1&alt=json-in-script", t, "jsonp")) : (r = "label", -1 != _.indexOf("max-results=") && -1 != _.indexOf("#PageNo=") ? l.postperpage = _.substring(_.indexOf("max-results=") +
                    12, _.indexOf("#PageNo=")) : -1 != _.indexOf("max-results=") ? l.postperpage = _.substring(_.indexOf("max-results=") + 12) : l.postperpage = l.postperpage, n = -1 != c.indexOf("#PageNo=") ? c.substring(c.indexOf("#PageNo=") + 8, c.length) : 1, s.get(d + "/feeds/posts/summary/-/" + o + "?max-results=1&alt=json-in-script", t, "jsonp")))
        }
        var $, i, r, n, o, l = {
                postperpage: Npage,
                numshowpage: 3,
                previous: "&#171;",
                loadAjax: pajax,
                viewdefault: "list",
                container: ".hfeed-inner",
                clist: "hlist",
                cgrid: "hgrip",
                next: "&#187;"
            },
            d = (l = s.extend({}, l, _), window.location.protocol +
                "//" + window.location.host),
            c = location.href.replace(rgx[17], "");
        a();
        var h = function (_) {
            _ = (i = _.feed.entry[0]).published.$t.substring(0, 19) + i.published.$t.substring(23, 29), _ = encodeURIComponent(_);
            var t = "page" == r ? d + "/search?updated-max=" + _ + "&max-results=" + l.postperpage + "#PageNo=" + $ : d + "/search/label/" + o + "?updated-max=" + _ + "&max-results=" + l.postperpage + "#PageNo=" + $;
            if (l.loadAjax) {
                var e = rgx[14];
                s.get(t, function () {}, "html").done(function (_) {
                    (_ = s("<div></div>").append(_.replace(e, "")).find(l.container).children(".post-outer")).find(".index-post").each(function () {
                            lpost(s(this))
                        }),
                        s(l.container).html(_), cdate(), vmode({
                            viewdefault: l.viewdefault,
                            clist: l.clist,
                            cgrid: l.cgrid
                        }), s(".blog-posts .loader").hide(), _.addClass(rgx[31]), c = t, a(), s("html, body").scrollTop(s("#main").offset().top - 50), window.disqus_shortname && s.getScript("https://" + window.disqus_shortname + ".disqus.com/blogger_index.js")
                })
            } else location.href = t
        }
    }(jQuery)
}

function chside(_) {
    _.parents(_$_[206]).length && sSide && (_ = $(_$_[207]).height() + $(_$_[208]).height() + $(_$_[209]).height() + 30, $(_$_[210]).css({
        height: _
    }))
}

function thewid(_, t) {
    var e, a = _.attr(_$_[211]),
        s = _.attr(_$_[212]),
        $ = void 0 !== _.attr(_$_[213]) ? _.attr(_$_[213]) : _$_[1],
        i = void 0 !== _.attr(_$_[214]) ? _.attr(_$_[214]) : _$_[1],
        r = /slider/.test(s);
    e = /gallery2/.test(s), /featured/.test(s);
    var n = /featured1/.test(s),
        o = /newsticker/.test(s),
        l = /carousel/.test(s),
        d = /timeline/.test(s),
        c = /(?=.*column2)(?=.*animated).*/.test(s),
        h = /(?=.*fbig1)(?=.*animated).*/.test(s);
    o ? t.find(_$_[216]).prepend(_$_[215]) : /(simple)/.test(s) ? t.append(_$_[1]) : -1 === a.indexOf(_$_[217]) && t.find(_$_[216]).wrapInner(_$_[223] +
            $ + _$_[219] + (_$_[220] === a ? _$_[1] : _$_[221] + a) + _$_[222] + Npage + _$_[224]).append(_$_[218] + $ + _$_[219] + (_$_[220] === a ? _$_[1] : _$_[221] + a) + _$_[222] + Npage + _$_[22] + mtx + _$_[77]), e = h ? mx.fb1a : c ? mx.cl2a : /(?=.*column1)(?=.*animated).*/.test(s) ? mx.cl1a : /fbig1/.test(s) ? mx.fb1 : /fbig2/.test(s) ? mx.fb2 : /gallery1/.test(s) ? mx.gl1 : e ? mx.gl2 : r ? mx.sl : /column1/.test(s) ? mx.cl1 : /column2/.test(s) ? mx.cl2 : /carousel1/.test(s) ? mx.cr1 : /carousel2/.test(s) ? mx.cr2 : /video/.test(s) ? mx.vi : o ? mx.nw : n ? mx.fd1 : /featured4/.test(s) ? mx.fd4 : /list/.test(s) ?
        mx.li : /gallery3/.test(s) ? mx.gl3 : d ? mx.li : /featured2/.test(s) ? mx.fd2 : /featured3/.test(s) ? mx.fd3 : /hot/.test(s) ? mx.ht : /ftpost/.test(s) ? mx.feat : /rcpost/.test(s) ? mx.rcpt : /rdpost/.test(s) ? mx.rdpt : 5, classname = r ? _$_[225] + s : /column/.test(s) ? _$_[226] + s : /fbig/.test(s) ? _$_[227] + s : /gallery/.test(s) ? _$_[228] + s : /featured/.test(s) ? _$_[229] + s : l ? _$_[230] + s : s, -1 != i.indexOf(_$_[231]) && t.children(_$_[216]).css({
            "background-color": i
        }), t.addClass(classname.replace(/animated/, _$_[1])).append(l ? _$_[232] : _$_[1]), _.RCWid({
            blogURL: $,
            maxPosts: e,
            maxPostsPerTag: /(hot|featured1|ftpost)/.test(s) && -1 !== a.indexOf(_$_[217]) ? 2 : -1 !== a.indexOf(_$_[217]) ? 5 : e,
            ShowTags: !!/(hot|featured|newsticker)/.test(s),
            tags: /(recent|random)/.test(a) ? null : a.split(_$_[217]),
            postType: r ? _$_[233] : l ? _$_[234] : o ? _$_[235] : /(featured1|featured2|featured3)/.test(s) ? _$_[236] : /featured4/.test(s) ? _$_[237] : _$_[1],
            ShowComment: !0,
            ShowImage: !0,
            auto: !!/autoplay/.test(s),
            review: !hrev,
            color: -1 != i.indexOf(_$_[231]) ? i : _$_[1],
            ShowPage: !!/pagenumber/.test(s),
            hoverEffect: !!/(gallery|list|newsticker)/.test(s),
            random: _$_[238] === a,
            effect: !!/fade/.test(s) && _$_[239],
            ShowDesc: !!/(featured|list|timeline|slider|newsticker|blogpost|halfpost|bigpost)/.test(s),
            wrapNum: /(featured1|featured4)/.test(s) ? 4 : (/featured2/.test(s), 5),
            summary: r || o || /(blogpost|halfpost|bigpost)/.test(s) ? 200 : d ? 85 : 150,
            ShowAuthor: hauthor,
            fbig: !!/(fbig|column2|gallery1|gallery2|hot)/.test(s),
            animated: !!/animated/.test(s),
            startFirst: !(!c && !h),
            slideSpeed: SSpeed
        }), _.removeAttr(_$_[240])
}

function discall(t, _, e) {
    _.addClass(e), t.html(rgx[33]), postscribe(_$_[241], _$_[242] + dsqsn + _$_[243] + mx.dsq + _$_[244], {
        done: function () {
            var _ = $(_$_[241]).html().replace(rgx[13], _$_[1]);
            t.html(_), $(_$_[247]).each(function () {
                $(this).find(_$_[246]).wrapAll(_$_[245])
            }), $(_$_[241]).html(_$_[1])
        }
    })
}

function flicall(t, _, e) {
    _.addClass(e), t.html(rgx[33]), postscribe(_$_[248], _$_[249] + mx.fl + _$_[250] + dO + _$_[251], {
        done: function () {
            var _ = $(_$_[248]).html().replace(rgx[14], _$_[1]);
            t.html(_$_[252] + _ + _$_[94]), $(_$_[248]).html(_$_[1])
        }
    })
}

function crcom(_, t, e) {
    _.html(rgx[33]), t.addClass(e), _.RCom()
}

function fbsdk() {
    var _, t, e, a;
    _ = document, t = _$_[261], e = _$_[262], a = _.getElementsByTagName(t)[0], _.getElementById(e) || ((_ = _.createElement(t)).id = e, _.src = _$_[263] + fblang + _$_[264], a.parentNode.insertBefore(_, a)), window.fbAsyncInit = function () {
        FB.init({
            appId: fbid,
            status: !0,
            xfbml: !0,
            cookie: !1,
            version: _$_[265]
        }), FB.Event.subscribe(_$_[266], function (_) {
            $.event.trigger({
                type: _$_[267],
                url: _
            })
        }), FB.Event.subscribe(_$_[268], function (_) {
            $.event.trigger({
                type: _$_[267],
                url: _
            })
        }), FB.Event.subscribe(_$_[269], function () {
            chside($(_$_[270])),
                $(_$_[270]).addClass(_$_[271])
        })
    }
}

function crfbox(_, t) {
    var e = _.replace(rgx[28], _$_[1]);
    t.addClass(_$_[272]), t.html(_$_[273] + e + _$_[274])
}

function ldwid(_, t, e, a) {
    _.length ? thewid(_, t) : rgx[23].test(a) ? discall(e, t, a) : rgx[24].test(a) ? flicall(e, t, a) : rgx[25].test(a) ? crcom(e, t, a) : rgx[27].test(a) ? crfbox(a, e) : /complex/g.test(a) && complx(a, t, e), t.addClass(_$_[275])
}

function stickside(_, t, e) {
    var a = _.children(_$_[296]),
        s = _.offset().top,
        $ = _.height() - a.height() + s,
        i = a.height() + _$_[297],
        r = t;
    _.children(_$_[298]).length && (s += r = _.children(_$_[298]).outerHeight(!0) + 15), e < s ? a.removeClass(_$_[300]).css({
        position: _$_[299],
        top: r
    }) : $ < e ? a.removeClass(_$_[300]).css({
        position: _$_[299],
        bottom: _$_[301],
        top: _$_[302]
    }) : a.addClass(_$_[300]).css({
        top: t,
        height: i
    })
}
jQuery.easing.jswing = jQuery.easing.swing,
    function (s) {
        s.fn.myTab = function (a) {
            return a = jQuery.extend({
                active: 1,
                showSpeed: 400
            }, a), this.each(function () {
                var _ = s(this),
                    t = _.children("[data-tab]"),
                    e = a.active - 1;
                _.addClass("simpleTab").prepend('<div class="tab-wrapper"></div>'), t.addClass("tab-content").each(function () {
                    s(this).hide(), _.find(".tab-wrapper").append('<div><span class="btn">' + s(this).data("tab") + "</span></div>")
                }).eq(e).show(), _.find(".tab-wrapper span").on("click", function () {
                    var _ = s(this).parent().index();
                    return s(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab"), s(this).addClass("activeTab"), t.eq(_).is(":hidden") && t.hide().eq(_).fadeIn(a.showSpeed), !1
                }).eq(e).addClass("activeTab")
            })
        }
    }(jQuery),
    function (i) {
        i.fn.hoverTimeout = function (e, a, s, $) {
            return this.each(function () {
                var _ = null,
                    t = i(this);
                t.hover(function () {
                    clearTimeout(_), _ = setTimeout(function () {
                        a.call(t)
                    }, e)
                }, function () {
                    clearTimeout(_), _ = setTimeout(function () {
                        $.call(t)
                    }, s)
                })
            })
        }
    }(jQuery),
    function ($) {
        var i = {
            customClass: "simply-scroll",
            frameRate: 30,
            speed: 1,
            orientation: "horizontal",
            auto: !0,
            autoMode: "loop",
            manualMode: "end",
            direction: "forwards",
            pauseOnHover: !0,
            pauseOnTouch: !0,
            pauseButton: !($.fn.simplyScroll = function (_) {
                return this.each(function () {
                    new $.simplyScroll(this, _)
                })
            }),
            startOnLoad: !1
        };
        $.simplyScroll = function (_, t) {
            var e = this;
            this.o = $.extend({}, i, t || {}), this.isAuto = !1 !== this.o.auto && null !== this.o.autoMode.match(/^loop$/), this.isRTL = (this.isHorizontal = null !== this.o.orientation.match(/^horizontal$/) && this.o.orientation == i.orientation) &&
                "rtl" == $("html").attr("dir"), this.isForwards = !this.isAuto || this.isAuto && null !== this.o.direction.match(/^forwards$/) && this.o.direction == i.direction && !this.isRTL, this.isLoop = this.isAuto && "loop" == this.o.autoMode || !this.isAuto && "loop" == this.o.manualMode, this.events = (this.supportsTouch = "createTouch" in document) ? {
                    start: "touchstart MozTouchDown",
                    move: "touchmove MozTouchMove",
                    end: "touchend touchcancel MozTouchRelease"
                } : {
                    start: "mouseenter",
                    end: "mouseleave"
                }, this.$list = $(_);
            var a = this.$list.children();
            if (this.$list.addClass("simply-scroll-list").wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="' +
                    this.o.customClass + ' simply-scroll-container"></div>'), this.isAuto ? this.o.pauseButton && (this.$list.parent().parent().prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>'), this.o.pauseOnHover = !1) : this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>'), 1 < a.length) {
                var s = 0;
                (this.isHorizontal ? (a.each(function () {
                    s += $(this).outerWidth(!0)
                }), a.eq(0).outerWidth(!0) * a.length !== s) : (a.each(function () {
                        s += $(this).outerHeight(!0)
                    }),
                    a.eq(0).outerHeight(!0) * a.length !== s)) && (this.$list = this.$list.wrap("<div></div>").parent().addClass("simply-scroll-list"), this.isHorizontal ? this.$list.children().css({
                    "float": "left",
                    width: s + "px"
                }) : this.$list.children().css({
                    height: s + "px"
                }))
            }
            this.o.startOnLoad ? $(void 0).load(function () {
                e.init()
            }) : this.init()
        }, $.simplyScroll.fn = $.simplyScroll.prototype = {}, $.simplyScroll.fn.extend = $.simplyScroll.extend = $.extend, $.simplyScroll.fn.extend({
            init: function () {
                this.$items = this.$list.children(), this.$clip = this.$list.parent(),
                    this.$container = this.$clip.parent(), this.$btnForward = $(".simply-scroll-forward", this.$container), this.isHorizontal ? (this.itemMax = this.$items.eq(0).outerWidth(!0), this.clipMax = this.$clip.width(), this.dimension = "width", this.moveBackClass = "simply-scroll-btn-left", this.moveForwardClass = "simply-scroll-btn-right", this.scrollPos = "Left") : (this.itemMax = this.$items.eq(0).outerHeight(!0), this.clipMax = this.$clip.height(), this.dimension = "height", this.moveBackClass = "simply-scroll-btn-up", this.moveForwardClass =
                        "simply-scroll-btn-down", this.scrollPos = "Top"), this.posMin = 0, this.posMax = this.$items.length * this.itemMax;
                var _ = Math.ceil(this.clipMax / this.itemMax);
                if (this.isAuto && "loop" == this.o.autoMode && (this.$list.css(this.dimension, this.posMax + this.itemMax * _ + "px"), this.posMax += this.clipMax - this.o.speed, this.isForwards ? (this.$items.slice(0, _).clone(!0).appendTo(this.$list), this.resetPosition = 0) : (this.$items.slice(-_).clone(!0).prependTo(this.$list), this.resetPosition = this.$items.length * this.itemMax, this.isRTL &&
                        (this.$clip[0].dir = "ltr", this.$items.css("float", "none")))), this.resetPos(), this.interval = null, this.intervalDelay = Math.floor(1E3 / this.o.frameRate), this.isAuto || "end" != this.o.manualMode)
                    for (; 0 != this.itemMax % this.o.speed;)
                        if (0 == --this.o.speed) {
                            this.o.speed = 1;
                            break
                        }(c = this). trigger = null, this.funcMoveForward = function (_) {
                        void 0 !== _ && _.preventDefault(), c.trigger = c.isAuto || "end" != c.o.manualMode ? null : this, c.isAuto ? c.isForwards ? c.moveForward() : c.moveBack() : c.moveForward()
                    }, this.funcMovePause = function () {
                        c.movePause()
                    },
                    this.funcMoveStop = function () {
                        c.moveStop()
                    }, this.funcMoveResume = function () {
                        c.moveResume()
                    }, this.isAuto && (this.paused = !1, this.supportsTouch && this.$items.find("a").length && (this.supportsTouch = !1), this.o.pauseOnHover && !this.supportsTouch && this.$clip.bind(this.events.start, this.funcMovePause).bind(this.events.end, this.funcMoveResume), this.funcMoveForward())
            },
            moveForward: function () {
                var _ = this;
                this.movement = "forward", null !== this.trigger && this.$btnBack.removeClass("disabled"), _.interval = setInterval(function () {
                    _.$clip[0]["scroll" +
                        _.scrollPos
                    ] < _.posMax - _.clipMax ? _.$clip[0]["scroll" + _.scrollPos] += _.o.speed : _.isLoop ? _.resetPos() : _.moveStop(_.movement)
                }, _.intervalDelay)
            },
            movePause: function () {
                clearInterval(this.interval)
            },
            moveStop: function (_) {
                this.movePause(), null !== this.trigger && (void 0 !== _ && $(this.trigger).addClass("disabled"), this.trigger = null), this.isAuto && "bounce" == this.o.autoMode && ("forward" == _ ? this.moveBack() : this.moveForward())
            },
            moveResume: function () {
                "forward" == this.movement ? this.moveForward() : this.moveBack()
            },
            resetPos: function () {
                this.$clip[0]["scroll" +
                    this.scrollPos
                ] = this.resetPosition
            }
        })
    }(jQuery);
var _$_ = ["cookie", "", ";expires=", ";path=/", "=", "test", "ok", ";", "", "click", "", '<input class="emoKey" type="hidden" size="', '" value=" ', '" />', "select", "cursor", "pointer", "", "active", "", "", '<ul class="hide ', '">', "i", '<i class="', "class", '"></i>', "href", "a", "_", "-", '<a href="', "</a>", '</ul><a href="', '</a><ul class="hide ', "li", "</ul>", "ul", ".summary-content", "file-text-o", ".noimage", ".thumb-img", ".post-type", ".thumb-area", "title", ".jmptext", ".h2", "s400", "s300", "data-img", "s72-c", "/default.jpg", "/mqdefault.jpg",
        "https://img.youtube.com/vi/", "video-camera", "/", "no_image", "rgba(0, 0, 0, 0.15)", "img.youtube.com", '<span class="youtubeplay"><i class="fa fa-play-circle-o"></i></span>', "hyoutube", ".latest-img", "music", "camera-retro", "quote-left", '<i class="fa fa-', "$1", '<div class="review-place ', '"><span class="review-value">', '</span><div class="slice"><div class="bar"></div></div></div>', "width", "%", ".bar", "&quot;", '...<a href="', '" class="rmtext" title="', " ", "</a>", "style", "background:", "https", 'url("', '")',
        " no-repeat center center;background-size: cover", "", "", "", "#ajax-search-form", ":text", '<div class="src-result ', ' hide" id="search-result"></div>', "#search-result", "submit", '<div class="loader">', "</div>", "//", "/feeds/posts/default?alt=json-in-script&q=", "&max-results=", '<div class="src-header">', " &quot;", "&quot;</div>", '<a class="src-close ', '" href="/">&times;</a><div class="src-area">', "ig", "<span class='src-mark'>", "</span>", "alternate", "enclosure", "content", "summary", "media$thumbnail", "/s",
        "-c/", "default", "mqdefault", "...", '<div class="src-item"><div class="src-img-outer ', ' go-left"><a class="src-img show" " ', "url('", "')", ' no-repeat center center;background-size: cover" href="', '" ><div class="post-type absolute"><i class="fa fa- ', '"></i></div></a></div><a class="', ' src-title" href="#', '<p class="src-summary" >', "</p>", '<div class="src-morepost"><a class="show btn" title="more" href="/search?q=', "&quot;</a></div>", '<a class="close" href="/">&times;</a><strong>', "</strong>", "jsonp",
        ".src-close", "grid", "vlist", "vgrip", ".post-outer", ".blog-posts.hfeed", "#view .grid", "#view .list", "list", "<b>", "</b><div><span>", "</span><small>", "</small></div>", ".postdate", ".index-post", ".published", "div", "<div></div>", "a.blog-pager-older-link", "", "https://", ".disqus.com/blogger_index.js", "html", ".hfeed-inner", "vgrid", "item", '<a class="loadpost show" href="javascript:;">', '<div class="loader hide"></div>', '<div class="rct-loadmore no-decor" ></div>', ".blog-pagerindex", "«", "hlist", "hgrip",
        "&#187;", "page", '<span class="showpage"><a href="">', "</a></span>", '<span class="showpageNum"><a rel="noindex" href="/search/label/', "?&max-results=", '<span class="showpageNum"><a class="xpagex" href="#" alt="', '<span class="showpageNum"><a class="xlabelx" href="#" alt="', '<span class="showpageNum"><a href="">1</a></span>', '">1</a></span>', '<span class="dotxpage"> ... </span>', '<span class="showpagePoint">', '<span class="showpageNum"><a href="#" class="xpagex" alt="', '<span class="showpageNum"><a rel="noindex" href="#" class="xlabelx" alt="',
        "pageArea", "blog-pagerindex", "display", "block", "load-next", ".hfeed .loader", "alt", "/feeds/posts/summary?start-index=", "&max-results=1&alt=json-in-script", "/feeds/posts/summary/-/", "?start-index=", ".blog-pagerindex a.xpagex, .blog-pagerindex a.xlabelx", "/search/label/", "?updated-max", "?max", "?&max", "?q=", ".html", "max-results=", "#PageNo=", "/feeds/posts/summary?max-results=1&alt=json-in-script", "label", "?max-results=1&alt=json-in-script", "/search?updated-max=", "?updated-max=", ".blog-posts .loader", "#main",
        "html, body", ".sidebar-right", "#sidebar-top", "#sidebartabs", "#sidebar-bottom", ".sidebar-right .wrap-inner", "data-label", "data-type", "data-url", "data-color", " ", "h2", ",", '<a class="morepost btn" href="', "/search", "recent", "/label/", "?max-results=", '<a href="', '"></a>', "slider ", "column ", "fbig ", "gallery ", "featured ", "carousel ", "#", '<div class="owl-controls"><div class="owl-nav"></div></div>', "s", "c", "n", "fs", "f3", "random", "fade", "data-label data-url data-type data-color", "#drcmt", '<script async="async" src="https://',
        ".disqus.com/recent_comments_widget.js?num_items=", '&avatar_size=32&excerpt_length=100&hide_mods=0" ></script>', '<div class="disqus-summary" />', ".dsq-widget-user,.dsq-widget-comment,.dsq-widget-meta", ".dsq-widget-item", "", "", "", "", "", "{", "}", '<div class="recent-tab">', '<div data-tab="', "snsib-widget", ".recent-tab", "complex ", ".tab-content", "script", "facebook-jssdk", "https://connect.facebook.net/", "/sdk.js", "v5.0", "edge.create", "unlock_content", "message.send", "xfbml.render", ".FBbox", "load-done",
        "FBbox", '<div id="FBbox"><div class="fb-page" data-href="', '" data-width="550"></div></div>', "widget-loaded", "dhref-done", "", "/w400/", "", "", "", "", "", "", "", "", "", "", "", "", "", '<span class="hide">Facebook</span>', "", "", ".dhref", ".wrap-inner", "px", ".innerwrap", "absolute", "side-fixed", "0", "auto", "sub-menu", "sub-sub-menu", ".submenu", "thumb-outer", "animated zoomIn", "heading-text", '<div class="loader"></div>', ".varsumlength", ".varfixMenu", ".varmonthName", "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec",
        ".varstickySide", ".varsliderspeed", ".varnavipostpage", ".varmaxcommentdepth", ".vardateformat", "YYYY/MM/DD", ".varrcadminBlog", "y", ".varhideauthor", ".varhideLatest", ".varcseID", ".varhideEmo", ".varhomelist", ".varfeatpost", ".varhomePageNavi", ".varfbappsid", "160447341157187", ".varfblang", "en_US", ".vardajaxPageNavi", ".varsrctext", "Type and hit enter to search...", ".varntext", "Previous Article", ".varptext", "Next Article", ".varmtext", "", ".varlmtext", "", ".varvmtext", "", ".varreltext", "RELATED CONTENT", ".varrectext",
        "Recent Post", ".varrecotext", "Recommended For You", ".vartwitterauthor", "A_A_Z_S", ".vardisqusshortname", "", ".varshowrelated", ".varshowrecommended", ".varrelstyle", "carousel", ".varhexcerpt", ".varhreview", ".vartopbreakline", ".varbottombreakline", ".varautoplay", ".vartopbreaklineload", ".varbottombreaklineload", "", ".varrecentpost", ".varrandompost", ".varfeaturedpost", ".varrecentcomment", ".varfbig1", ".varfbig2", ".varfbig1animated", ".vargallery1", ".vargallery2", ".vargallery3", ".varcolumn1", ".varcolumn2", ".varcolumn1animated",
        ".varcolumn2animated", ".varnewsticker", ".varslider", ".varcarousel1", ".varcarousel2", ".varrelated", ".varvideo", ".varfeatured1", ".varfeatured2", ".varfeatured3", ".varfeatured4", ".varlist", ".varhot", ".vardisquscomment", "", ".vartimeline", "scorpiology", "", ".home-area #Blog1,.home-area .posts-title", "", ".item-topmeta", ".post-body", 'if (this.value==""){this.value="', '";}', 'if (this.value=="', '"){this.value="";}', ".errorsrc input,.search-form input", "text/javascript", "https", "https:", "https:", "//www.google.com/cse/cse.js?cx=",
        "", "#body-area", "custom-cse-snsib", "searchresults-only0", ".comments-tabs", ".canUrl", ".bposId", ".pstUrl", "<div data-tab='Google'><div class='tab-blogger'></div></div>", "<div data-tab='Disqus'><div class='tab-disqus' id='disqus_thread'></div></div>", "<div data-tab='Facebook'><div class='tab-facebook'><div class='fb-comments' data-numposts='5' data-width='100%' data-href='", "'></div></div></div>", "", "show", ".menu", ".", '<div class="sub-icon"><span class="sub-button ', ' btn"><i class="fa fa-caret-down"></i></span></div>',
        "submenu", "ul.", ' btn"><i class="fa fa-caret-right"></i></span></div>', "subsubmenu", "<span class='menu-desc'>", ".menu li a", "<span class='soc-desc'>", "<span class='soc-count'>", ".social-desc", "have-desc", ".menu-desc", ".main-menu li", ".sc-move", "padding-left", ".main-menu a", "a.home-icon", "left", '.main-menu a[href="#"]', "easeOutQuad", "nohover", ".home-icon", ".main-menu > li", ":not(:animated)", "easeInExpo", ".menu li", "", "", "", '<div class="emoWrap hide">', "", "iframe#comment-editor", " <amp-img width='36' height='36' layout='responsive' '' src='",
        "' alt='", "'/>", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "data-tab", ".widget", "#sidebar-tabs1", ".labels-wrap", ".plabelsbtn", ".comments", "home-area", "#container", "index-area", "index", "#snsib", ".searchQuered", "archive", "ablist", "abgrip", "<div ", ".HTML", '"', '" ', "f2", "slide-width=630", ' class="widget-area mywidget hide"></div><div class="handle mywidget hide"></div>', '<div class="wid-pagenumber"></div>', '<a class="wid-pagenum btn" alt="1">«</a>',
        '<a class="wid-pagenum btn" alt="', '">«</a>', '<a class="wid-pagenum btn" alt="1">1</a>', "<span> ... </span>", "<span ", ";border-color:", ';background-image:initial" ', 'class="actual">', '">&#187;</a>', ".wid-pagenumber", '<div class="handle"></div><div class="handle2 json-process"><div class="loader"></div></div>', ".widget-area", ".handle2", "data-tag", "/feeds/posts/default?start-index=", "&orderby=published&alt=json-in-script", "/feeds/posts/default/-/", ".wid-pagenum", "replies", "text/html", 'class="review-place absolute"><span class="review-value">',
        '</span><div class="slice"><div "width:', '%" class="bar"></div></div></div>', ".blogspot", "com", ".blogspot.com", ".blog-posts", ".items:gt(", ")", ".handle", "hide", ".handle,.loader,.handle2", ".readmorebut", "noborder", "snsib", "owl-carousel", "fadeOut", "zoomIn", ".owl-nav", ".items", "<div class='wrapitem'></div>", "<div class='feat-wrapitem'></div>", '<div class="feat-wrapinner"></div>', ".feat-wrapitem:first-child", ".feat-wrapinner", "<div class='fbig-widget-area'></div>", "gallery", " hovergallery", "show botwid",
        ".hover-info", ".hoveffect", ".thumb-outer", ".rcthumb", "s150", "s600", "mega-menu", "feed-proc", "zoomIn animated", ".fbig-widget-area .items", "<div class='animated-item'></div>", ".animated-item", '<div class="animated-area"></div>', "mouseleave touchend", "start", "mouseenter touchstart", "stop", ".owl-carousel", "score", "d", ' class="', "first-item ", 'items"><div class="items-inner">', 'class="rcptime">', 'class="postdate absolute"><b>', "</small></div></div>", '<div class="table-cell thumb-outer', " hoveffect", '"><div class="mythumb thumb-area',
        " first-image", '"><div class="post-type absolute"><i class="fa fa-', '"></i></div><a class="rcthumb show" title="', '" href="', '" data-img="', '"', "ytimg.googleusercontent.com", "</a></div></div>", '"border-', "right", "-color:", 'class="', "first-area ", 'content-area table-cell">', '"color:', 'class="ct-before"><i class="fa fa-circle"></i></div>', "<p ", '"', "background-", "color:", 'class="heading-text"><a ', 'class="hoveffect"', ' href="', '</a></p><div class="metainfo">', '<div class="hide">', "</div> ", '<span class="wid-date"><i class="fa fa-calendar"></i> ',
        "DD", "MM", "YYYY", '<span class="widcomments"><i class="fa fa-comments-o"></i> <a href="', '"></a>', '<div class="psummary hide">', '<a class="readmorebut" href="', '#more" title="', '">More</a>', '<span class="rcptags absolute"><a ', 'class="btn" title="', "</div></div>", 'a[class="item-tag"]:lt(', '<h4><span class="title-wrap">', '</span></h4><div class="owl-nav"></div>', "/feeds/posts/summary?max-results=0&orderby=published&alt=json-in-script", "/feeds/posts/default?max-results=", "&orderby=published&start-index=",
        "&alt=json-in-script", "/feeds/comments/default?alt=json-in-script&orderby=published", '<div class="rcomment-area">', '<div class="rcomment-item', " rcadmin", " rcguest", '<amp-img class="rcomment-img" alt="', '" title="', '" href="', '" src="', '"/>', '<div class="rcomment-info"><a href="#', '</a><a class="rcomment-title" href=" ', '</a><div class="rcomment-meta"><div class="com-date"><b>', '</small></div></div><div class="com-time">', "</div></div></div>", '<div class="rcomment-summary">', '<div class="clear"></div></div>',
        " <amp-img layout='responsive' alt='emo' src='", "' class='emo' alt='", ".rcomment-summary", "<span></span>", "Anonymous", "", "g", '<div class="shrt shrt-$1" $2 $3>', ".post-body,.cm_body p,.HTML .widget-content", "icon", '<i class="fa shrt-icon ', "fa-", "Tab", "Dont Have any text content", ".shrt-content", "shrt-tabhtml", ".shrt-tab,.shrt-vtab", "", "", "", '<div class="acrd-content">', "My accordion", ".shrt-item", "current", ".acrd-toggle", "showed", ".acrd-content", ".shrt-accordion", "fast", ".acrd-content:visible", "h3.acrd-toggle",
        ".shrt-accordion .acrd-toggle", "src", "color", "featured", "height", "visual", "comments", "user", "playlist", '<div class="inlinestyle frame-shrt-soundcloud', " pfeatured", '"><amp-iframe width="', "320", '" height="', "130", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" scrolling="no" src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/', "tracks", "users", "xxxxxxx", "&amp;color=", "ff5500", "&amp;auto_play=", "false",
        "&amp;hide_related=false&amp;show_comments=", "&amp;show_user=", "true", "&amp;show_reposts=false&amp;visual=", '"><div overflow="true"/></amp-iframe></div>', ".shrt-soundcloud", "highlight", "background", "info", "logo", '<div class="inlinestyle frame-shrt-dailymotion', '"><amp-iframe width="', "270", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" src="https://www.dailymotion.com/embed/video/', "x12k542", "?logo=", "1", "&info=",
        "&highlight=", "29b7ff", "&foreground=", "ffffff", "&background=", "000000", '" allowfullscreen><div overflow="true"/></amp-iframe></div>', ".shrt-dailymotion", "control", "related", '<div class="inlinestyle frame-shrt-youtube', "370", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" src="https://www.youtube.com/embed/', "9ua_4ajpP58", "?list=", "&amp;rel=", "&amp;controls=", "&amp;showinfo=", '" allowfullscreen><div overflow="true"/></amp-iframe></div>',
        ".shrt-youtube", '<div class="inlinestyle frame-shrt-map', '" src="https://www.google.com/maps/embed?pb=', '"></amp-iframe></div>', ".shrt-map", "shrt-message", ".shrt-alert, .shrt-warning, .shrt-update, .shrt-success, .shrt-info, .shrt-error", '<div class="headline">', '<div class="message-wrapper">', ".shrt-message", "url", "rel", 'href="', '"', '<a class="shrtImgUrl ', ' rel="', '<amp-img layout="responsive" class="shrtImg', '" width="', "", '"/>', ".shrt-img", "glpost", "br", ".shrt-pgallery,.shrt-bgallery", "type",
        '<pre data-codetype="', "HTML", "Add some code here", "</pre>", ".shrt-code", "pre", '<span class="line-number"></span>', '<span class="cl"></span>', "span", "<span>", "#contact", ".shrt-contact", '" class="jdshrt-tooltip">', "Insert Link Title", "Insert Tooltip Text", "</span></a>", ".shrt-tooltip", '<div class="shrt-slide-item"><div class="shrt-inner"><a class="shrt-owl-img" "background: url(', ') no-repeat center center;background-size: cover;" href="', '"></a><div class="shrt-summary">', '<h3><a href="', "</a></h3>",
        "<p>", "shrt-inhtml", ".shrt-pslide", '<div class="shrt-carousel-item"><div class="shrt-inner"><a class="shrt-owl-img" "background: url(', ".shrt-pcarousel", "top", "review-value", '<div class="rev-item"><div class="rev-desc">', "", '</span></div><div class="rev-value-outer"><div class="rev-value" data-value="', '" "width:', '%"></div></div></div>', '<div class="rev-summary"><div class="rev-desc-place table-cell"><h4>', "", "</h4><span>", "", '</span></div><div class="rev-overall table-cell"><div class="overall-inner"><div class="c100"><div class="rev-score"></div><div class="slice"><div class="fill"></div><div class="bar"></div></div></div><span>',
        "", "</span></div></div></div>", '<div class="top-revscrore"><div class="c100"><div class="rev-score"></div><div class="slice"><div class="fill"></div><div class="bar"></div></div></div><span>', "</span></div>", ".rev-value", "data-value", ".rev-score", "p", ".c100", "rotate(", "deg)", ".c100 .bar", ".shrt-review", ".widget-content", 'data-url="', 'data-color="', '<div class="snsib-widget" data-label="', '" data-type="', ">", '<div class="snsib-widget" data-label="random" data-type="simple rcpost">', '<div class="snsib-widget" data-label="random" data-type="simple rdpost">',
        '" data-type="simple ftpost">', ".snsib-widget", ".post-body strike", ".post-title", ".post-body h2 strike", ".post-body h3 strike", ".post-subtitle", "id", ".post", "#post-url", "unlocked", "unlocked-", "</locktag>", "<locktag>", '<div class="locked-content"><div class="inner"><i class="color fa fa-lock"></i><div class="locked-content-actions"><div class="locked-content-action"><div class="fb-like" data-href="', '" data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div></div></div></div></div>',
        "", ".item-post .post-body", "", "", "", "", "", "", ".item-area", ".cm_form", '<a href="#origin_cform" onclick="Reset_Comment_Form()">', "#r_f_c", "#comment-editor", "&parentID=", "#%7B", ".profile-sec .widget", ' hover" href="', '<a class="fa fa-', ".fa", "<div class='authoriconBox'></div>", ".profile-sec .widget-content", ".item-topmeta .fn", "All About Zodiac Signs", ".authoriconBox", ".authorProfile p", ".authorSocial", '<span class="', " hover", "fa fa-", '"></span>', ".authorSocial a", ".adsinside", "left-post", "body", "right-post",
        "left-side", "right-side", "full-post", "hide-adstitle", '<div class="adsinside-it ads-outer"></div>', ".adsinside-it", ".adsbelow", '<div class="adstitle', "", '"><div class="adspltop"></div>', "", ".adspltop", "", "", "", "", ".adsendpost", '<div class="adsbottom', "", '<div class="adsplbottom"></div></div>', ".bottom-infoitem", ".adsplbottom", "", '<input type="hidden" class="snsib-page"></input><input type="hidden" class="snsib-per-page"></input>', '<div class="page-place no-decor"></div>', "[lnt]", "[fnt]", '</div><div class="page-item">',
        '<div class="page-item">', ".page-place", ".snsib-page", ".snsib-per-page", '<a class="previous_link btn"><i class="fa fa-chevron-left"></i></a>', '<a class="page_link btn" data-title="', '" ","href"," longdesc="', '<a class="next_link btn"><i class="fa fa-chevron-right"></i></a>', "active_page", ".page_link:first", "none", ".active_page", ".page_link[longdesc=", "]", ".page_link", ".previous_link", ".next_link", "data-title", ".all_link", '@<a href="#c', ".cm_wrap .cm_body p", "#comment-form_", "#rc", "parentId", "data-level",
        "#c", ":first", ":first .cm_reply", '<div class="cm_wrap" id="c', '" data-level="', " .cm_child:first", "/s55-c/", ".cm-img", '<div class="nw_com"></div>', ".nw_com", ".comments-tabs .tab-wrapper div", ".comments-tabs .tab-wrapper", "table", "pfeatured", ".tr-caption", '<span class="pcaption absolute">', ".pfeatured", ".post-body img", ".post-featured", '<div class="slide-pfeatured"></div>', ".slide-pfeatured", ".glpost", ".separator", ".post-featured a", ".post-featured > a", ".post-featured img", "/s600/", '<div class="hide url-post"><input aria-label="Post Url" class="url-post-input" type="text" value="" ',
        '" /></div>', ".url-post", ".showlink", "hover", ".item-share a", ".item-snippet", ".body-area", "", "show-popup", "", "", "", "", "", "", '<a rel="noindex" class="menu-morepost', " random", '" href="/search', '"></a>', "mcarousel", '<div class="normal-tab">', ".normal-tab", '<a rel="noindex" class="menu-morepost" href="/search/label/', "mtab", "mbig", "menulinks", ".links-submenu .widget", ".links-submenu", '<div class="links-content"><h2>', '</h2><div class="widget-content">', ".links-content", "gridpost", '<a rel="noindex" class="grid-h2" href="/search',
        '<a rel="noindex" class="morepost btn" href="/search', "li.submenu", ".menu-search", ".mobile-search", ".social-icon", ".mobile-icons", ":hidden", ".mobile-menu .sub-icon", '<a class="blog-pager-older-link-item go-right oldernewerright" title="Next Article - [title] - posted on [date]" href="[url]"><span>', "</span><div>[title]</div></a>", '<a class="blog-pager-newer-link-item go-left oldernewerleft" title="Previous Article - [title] - posted on [date]" href="[url]"><span>', '<amp-img layout="responsive" alt="blog-pager" src="',
        "a.blog-pager-older-link-item", "a.blog-pager-newer-link-item", "data-trans", "#body-area *", "span.trans", "scroll", ".header-wrap", "scrolled", ".container", "scroll-up", "fixmenu-work", ".scorpiology", "15px", ".sidebar-left", "stickyside-work", ".widget-loaded", "#facebook-jssdk", "item-area", ".tab-disqus", "disqus-loaded", ".disqus.com/embed.js", "data-timestamp", "", "", "", "", ":", "a.icons-facebook", "a.dhref-done", "item-page-loaded", ".pager-isi", "/feeds/posts/default?alt=json-in-script&published-min=", "&max-results=0&callback=?",
        "/feeds/posts/default?alt=json-in-script&start-index=", "&max-results=3&callback=?", "/feeds/posts/default?alt=json-in-script&start-index=2&max-results=1&callback=?", ".populars-img", ".img-change", 'background:url("', '") no-repeat center center;background-size: cover', "img-change", "showup", ".gotop", ".item-tag", ".reco-place", '<div class="reco-place blog-posts"><h4>', '</h4><div class="reco-inner"></div><span class="btn reco-close"><svg height="28" viewBox="0 3 24 24" width="28"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" fill="#fff"></path></svg></span></div>',
        ".reco-inner", "showIt", "reco-click", ".reco-close", ".itemtags", ".footer-area", "related-work", "#related_posts", "related-work rel-", "fbig", "data-count", "data-number", ".tagscount", "[id=", "string", "transitioning", "1s ease-in-out", "a[href*=\\#]:not([href=\\#])", "transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", "resize", "small-wid", ".HTML > .widget-content", "small-post", ".tab-blogger #blogger_cm", "#blogger_cm", ".tab-blogger", "#Blog1", "#gPlusComment > div", ".main-wrapper", ".sidebar-right .innerwrap",
        ".sidebartabs", "min-height", "-webkit-transform", "-o-transform", "-ms-transform", "-moz-transform", "transform", "translate3d(1px,1px,1px)", "", "", "ontouchstart", "touch", "Safari", "CriOS", "standalone", " translateZ(0)", "onorientationchange", "orientationchange", "click touchstart", "mousedown", "touchmove", "mousemove", "touchend", "mouseup", "0s", ".mobile-menu .tab-wrapper a,.sub-button,.sub-button .fa", "ms", "translate(", "px,0)", "", "", "#scorpiology", "", ".index-post-outer"
    ],
    rgx = [/\s|&nbsp;/g, _$_[299], _$_[303], _$_[304],
        _$_[305], /(<|\[)amp-img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?(>|\])/i, /(youtu.be\/|youtube.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/i, /\/s\d+(\-c)?\//i, /\[youtube +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?\]/i, /vimeo.com\/|dailymotion.com\/|youtube.com\/|youtu.be\/|\[dailymotion|\[youtube/i, /soundcloud.com\/|\[soundcloud/i, /\[gallery\]|\[pgallery|\[bgallery/i, /<blockquote>/i, /<(?:script|style)\b[^<]*(?:(?!<\/(?:script|style)>)<[^<]*)*<\/(?:script|style)>/gi, /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        /<\S[^>]*>/g, /\[\S[^\]]*\]/g, /(:?\?|&)m=(1|0)/g, /[^[\]]+(?=])/g, /recentpost/g, /randompost/g, /featuredpost/g, /featuredpost\//g, /disquscomment/g, /pn/g, /recentcomment/g, /pL/g, /FBbox/g, /FBbox\//g, /\[item *review-fe=("[^"]+") *\]/g, _$_[306], _$_[307], _$_[308], _$_[309], /(tooltip|dailymotion|youtube|soundcloud|code|accordion|content|item|alert|success|warning|update|error|info|tab|vtab|pgallery|bgallery|amp-img|contact|2column|3column|4column|pslide|pcarousel|map|review)/
    ],
    sumLength = $(_$_[310]).length ? $(_$_[310]).attr(_$_[44]) :
    200,
    fixM = !$(_$_[311]).length || _$_[235] != $(_$_[311]).attr(_$_[44]),
    mName = $(_$_[312]).length ? $(_$_[312]).attr(_$_[44]).split(_$_[217]) : _$_[313].split(_$_[76]),
    sSide = !$(_$_[314]).length || _$_[235] != $(_$_[314]).attr(_$_[44]),
    SSpeed = $(_$_[315]).length ? $(_$_[315]).attr(_$_[44]) : 5E3,
    Npage = $(_$_[316]).length ? $(_$_[316]).attr(_$_[44]) : 10,
    fC = $(_$_[317]).length ? $(_$_[317]).attr(_$_[44]) : 2,
    dformat = $(_$_[318]).length && _$_[235] != $(_$_[318]).attr(_$_[44]) ? $(_$_[318]).attr(_$_[44]) : _$_[319],
    admBlog = !$(_$_[320]).length ||
    _$_[321] != $(_$_[320]).attr(_$_[44]),
    hauthor = !$(_$_[322]).length || _$_[321] != $(_$_[322]).attr(_$_[44]),
    hLast = !(!$(_$_[323]).length || _$_[321] != $(_$_[323]).attr(_$_[44])),
    gCSE = !(!$(_$_[324]).length || _$_[235] == $(_$_[324]).attr(_$_[44])),
    cseID = $(_$_[324]).length && _$_[235] != $(_$_[324]).attr(_$_[44]) ? $(_$_[324]).attr(_$_[44]) : _$_[1],
    hlist = !(!$(_$_[326]).length || _$_[321] != $(_$_[326]).attr(_$_[44])),
    fpost = !$(_$_[327]).length || _$_[235] != $(_$_[327]).attr(_$_[44]),
    hpagenav = !$(_$_[328]).length || _$_[235] != $(_$_[328]).attr(_$_[44]),
    fbid = $(_$_[329]).length ? $(_$_[329]).attr(_$_[44]) : _$_[330],
    fblang = $(_$_[331]).length ? $(_$_[331]).attr(_$_[44]) : _$_[332],
    pajax = !$(_$_[333]).length || _$_[321] != $(_$_[333]).attr(_$_[44]),
    stx = $(_$_[334]).length && _$_[235] != $(_$_[334]).attr(_$_[44]) ? $(_$_[334]).attr(_$_[44]) : _$_[335],
    ntx = $(_$_[336]).length && _$_[235] != $(_$_[336]).attr(_$_[44]) ? $(_$_[336]).attr(_$_[44]) : _$_[337],
    ptx = $(_$_[338]).length && _$_[235] != $(_$_[338]).attr(_$_[44]) ? $(_$_[338]).attr(_$_[44]) : _$_[339],
    mtx = $(_$_[340]).length && _$_[235] !=
    $(_$_[340]).attr(_$_[44]) ? $(_$_[340]).attr(_$_[44]) : _$_[341],
    lmtx = $(_$_[342]).length && _$_[235] != $(_$_[342]).attr(_$_[44]) ? $(_$_[342]).attr(_$_[44]) : _$_[343],
    vmtx = $(_$_[344]).length && _$_[235] != $(_$_[344]).attr(_$_[44]) ? $(_$_[344]).attr(_$_[44]) : _$_[345],
    reltx = $(_$_[346]).length && _$_[235] != $(_$_[346]).attr(_$_[44]) ? $(_$_[346]).attr(_$_[44]) : _$_[347],
    rectx = $(_$_[348]).length && _$_[235] != $(_$_[348]).attr(_$_[44]) ? $(_$_[348]).attr(_$_[44]) : _$_[349],
    recotx = $(_$_[350]).length && _$_[235] != $(_$_[350]).attr(_$_[44]) ?
    $(_$_[350]).attr(_$_[44]) : _$_[351],
    twau = $(_$_[352]).length && _$_[235] != $(_$_[352]).attr(_$_[44]) ? $(_$_[352]).attr(_$_[44]) : _$_[353],
    dsqsn = $(_$_[354]).length && _$_[235] != $(_$_[354]).attr(_$_[44]) ? $(_$_[354]).attr(_$_[44]) : _$_[1],
    dO = $(_$_[355]).length && _$_[235] != $(_$_[355]).attr(_$_[44]) ? $(_$_[355]).attr(_$_[44]) : _$_[1],
    shrel = !$(_$_[356]).length || _$_[235] != $(_$_[356]).attr(_$_[44]),
    shreco = !(!$(_$_[357]).length || _$_[321] != $(_$_[357]).attr(_$_[44])),
    relst = $(_$_[358]).length ? $(_$_[358]).attr(_$_[44]) : _$_[359],
    hecpt = !(!$(_$_[360]).length || _$_[321] != $(_$_[360]).attr(_$_[44])),
    hrev = !(!$(_$_[361]).length || _$_[321] != $(_$_[361]).attr(_$_[44])),
    tbline = !(!$(_$_[362]).length || _$_[321] != $(_$_[362]).attr(_$_[44])),
    bbline = !(!$(_$_[363]).length || _$_[321] != $(_$_[363]).attr(_$_[44])),
    aplay = !(!$(_$_[364]).length || _$_[321] != $(_$_[364]).attr(_$_[44])),
    blinest = $(_$_[365]).length ? $(_$_[365]).attr(_$_[44]) : _$_[220],
    btlinest = $(_$_[366]).length ? $(_$_[366]).attr(_$_[44]) : _$_[220],
    dajaxsrc = !(!$(_$_[367]).length || _$_[321] != $(_$_[367]).attr(_$_[44])),
    mx = {
        rcpt: $(_$_[368]).length ? $(_$_[368]).attr(_$_[44]) : 4,
        rdpt: $(_$_[369]).length ? $(_$_[369]).attr(_$_[44]) : 4,
        feat: $(_$_[370]).length ? $(_$_[370]).attr(_$_[44]) : 4,
        com: $(_$_[371]).length ? $(_$_[371]).attr(_$_[44]) : 5,
        fb1: $(_$_[372]).length ? $(_$_[372]).attr(_$_[44]) : 5,
        fb2: $(_$_[373]).length ? $(_$_[373]).attr(_$_[44]) : 5,
        fb1a: $(_$_[374]).length ? $(_$_[374]).attr(_$_[44]) : 8,
        gl1: $(_$_[375]).length ? $(_$_[375]).attr(_$_[44]) : 10,
        gl2: $(_$_[376]).length ? $(_$_[376]).attr(_$_[44]) : 7,
        gl3: $(_$_[377]).length ? $(_$_[377]).attr(_$_[44]) : 6,
        cl1: $(_$_[378]).length ? $(_$_[378]).attr(_$_[44]) : 5,
        cl2: $(_$_[379]).length ? $(_$_[379]).attr(_$_[44]) : 5,
        cl1a: $(_$_[380]).length ? $(_$_[380]).attr(_$_[44]) : 9,
        cl2a: $(_$_[381]).length ? $(_$_[381]).attr(_$_[44]) : 8,
        nw: $(_$_[382]).length ? $(_$_[382]).attr(_$_[44]) : 9,
        sl: $(_$_[383]).length ? $(_$_[383]).attr(_$_[44]) : 5,
        cr1: $(_$_[384]).length ? $(_$_[384]).attr(_$_[44]) : 9,
        cr2: $(_$_[385]).length ? $(_$_[385]).attr(_$_[44]) : 9,
        rl: $(_$_[386]).length ? $(_$_[386]).attr(_$_[44]) : 9,
        vi: $(_$_[387]).length ? $(_$_[387]).attr(_$_[44]) : 6,
        fd1: $(_$_[388]).length ? $(_$_[388]).attr(_$_[44]) : 8,
        fd2: $(_$_[389]).length ? $(_$_[389]).attr(_$_[44]) : 10,
        fd3: $(_$_[390]).length ? $(_$_[390]).attr(_$_[44]) : 10,
        fd4: $(_$_[391]).length ? $(_$_[391]).attr(_$_[44]) : 7,
        lt: $(_$_[392]).length ? $(_$_[392]).attr(_$_[44]) : 6,
        ht: $(_$_[393]).length ? $(_$_[393]).attr(_$_[44]) : 4,
        dsq: $(_$_[394]).length ? $(_$_[394]).attr(_$_[44]) : 4,
        fl: $(_$_[395]).length ? $(_$_[395]).attr(_$_[44]) : 8,
        li: $(_$_[396]).length ? $(_$_[396]).attr(_$_[44]) : 5
    };
navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i) && (document.getElementById(_$_[397]).className = document.getElementById(_$_[397]).className + _$_[398]), hLast && $(_$_[399]).hide(), hecpt && $(_$_[400]).hide(), $(_$_[402]).before($(_$_[401])), $(_$_[407]).attr({
    onblur: _$_[403] + stx + _$_[404],
    onfocus: _$_[405] + stx + _$_[406],
    fe: stx
});
var csystext = $(_$_[417]).text(),
    cnurl = $(_$_[418]).attr(_$_[44]),
    bpstid = $(_$_[419]).attr(_$_[44]),
    psturl = $(_$_[420]).attr(_$_[44]),
    bcom = _$_[421],
    dcom = _$_[422],
    fcom = _$_[423] + cnurl + _$_[424],
    scom = _$_[425] + bpstid + _$_[424];
if ($(_$_[417]).html(csystext.replace(/\[googlep\]/g, bcom).replace(/\[disqus\]/g, dcom).replace(/\[facebook\]/g, fcom)), $(_$_[427]).each(function () {
        cmnu(this, rgx[2]), $(this).addClass(_$_[426])
    }), $(_$_[428] + rgx[2]).each(function () {
        cmnu(this, rgx[3])
    }), $(_$_[432] + rgx[2]).parent(_$_[35]).addClass(_$_[431]).append(_$_[429] + rgx[1] + _$_[430]), $(_$_[432] + rgx[3]).parent(_$_[35]).addClass(_$_[434]).append(_$_[429] + rgx[1] + _$_[433]), $(_$_[436]).each(function () {
        $(this).html($(this).html().replace(/\[/g, _$_[435]).replace(/\]/g,
            _$_[105]))
    }), $(_$_[439]).each(function () {
        $(this).html($(this).html().replace(/\[/g, _$_[438]).replace(/\]/g, _$_[105]).replace(/\{/g, _$_[437]).replace(/\}/g, _$_[105]))
    }), $(_$_[441]).parents(_$_[35]).addClass(_$_[440]), 0 < $(_$_[442]).length) {
    var slide_nav = $(_$_[443]),
        current_pos = 0,
        current_menu_width = 0;
    $(_$_[445]).each(function () {
        var _ = $(this);
        if (_.attr(_$_[27]) == window.location.href && _.parents(rgx[4]).length) {
            var t = parseInt(_.parents(rgx[4]).css(_$_[444]));
            current_pos = _.parents(rgx[4]).position().left +
                t, current_menu_width = _.parents(rgx[4]).width()
        }
        slide_nav.css({
            width: current_menu_width,
            left: current_pos
        })
    }), 0 == current_pos && (current_pos = $(_$_[446]).position().left, slide_nav.css(_$_[447], current_pos)), $(_$_[448]).click(function () {
        var _ = parseInt($(this).parent().css(_$_[444]));
        current_pos = $(this).parent().position().left + _, current_menu_width = $(this).parent().width()
    }), $(window).resize(function () {
        $(_$_[445]).each(function () {
            var _ = $(this);
            if (_.attr(_$_[27]) == window.location.href && _.parents(rgx[4]).length) {
                var t =
                    parseInt(_.parents(rgx[4]).css(_$_[444]));
                current_pos = _.parents(rgx[4]).position().left + t, current_menu_width = _.parents(rgx[4]).width()
            }
            slide_nav.css({
                width: current_menu_width,
                left: current_pos
            })
        }), 0 == current_pos && (current_pos = $(_$_[446]).position().left, slide_nav.css(_$_[447], current_pos))
    }), $(_$_[452]).hover(function () {
        var _ = parseInt($(this).css(_$_[444]));
        slide_nav.animate({
            width: $(this).width(),
            left: $(this).position().left + _
        }, {
            queue: !1,
            easing: _$_[449],
            duration: 250
        }), $(_$_[451]).addClass(_$_[450])
    }, {
        queue: !1,
        easing: _$_[449],
        duration: 250
    }), $(_$_[451]).removeClass(_$_[450])
}
$(_$_[455]).hoverTimeout(100, function () {
    $(this).children(_$_[37]).filter(_$_[453]).slideDown()
}, 300, function () {
    $(this).children(_$_[37]).slideUp(500, _$_[454])
}), $(_$_[145]).each(function () {
    lpost($(this))
});
var sfArr = function (_) {
        var t, e, a = _.length;
        if (0 === a) return !1;
        for (; --a;) t = Math.floor(Math.random() * (a + 1)), e = _[a], _[a] = _[t], _[t] = e;
        return _
    },
    gRdm = function (_, t) {
        return Math.floor(Math.random() * (t - _ + 1)) + _
    };
gCSE || dajaxsrc || ajaxsrc(), $(_$_[504]).find(_$_[503]).each(function () {
        title = $(this).find(_$_[216]).text(), $(this).attr(_$_[502], title)
    }), $(_$_[504]).myTab({
        active: 1
    }), $(_$_[506]).click(function () {
        var _ = $(this);
        return _.hasClass(_$_[18]) ? ($(_$_[505]).fadeOut(), _.removeClass(_$_[18])) : (_.addClass(_$_[18]), $(_$_[505]).fadeIn()), !1
    }), cdate(),
    function (_) {
        if (_(_$_[509]).hasClass(_$_[508]) && !hpagenav) hlist ? (lMore({
            viewdefault: _$_[139]
        }), vmode({
            viewdefault: _$_[139]
        })) : (lMore(), vmode());
        else if (_(_$_[509]).hasClass(_$_[508]) &&
            hpagenav) {
            var t = _(_$_[154]).children(_$_[135]).length;
            hlist ? (pageNavi({
                postperpage: t,
                viewdefault: _$_[139],
                clist: _$_[133],
                cgrid: _$_[134]
            }), vmode({
                viewdefault: _$_[139],
                clist: _$_[133],
                cgrid: _$_[134]
            })) : (pageNavi({
                viewdefault: _$_[132],
                postperpage: t,
                clist: _$_[133],
                cgrid: _$_[134]
            }), vmode({
                viewdefault: _$_[132],
                clist: _$_[133],
                cgrid: _$_[134]
            }))
        }
        _(_$_[509]).hasClass(_$_[510]) && _(_$_[512]).hasClass(_$_[511]) && (pageNavi({
            viewdefault: _$_[139],
            clist: _$_[162],
            cgrid: _$_[163]
        }), vmode({
            viewdefault: _$_[139],
            clist: _$_[162],
            cgrid: _$_[163]
        })), (_(_$_[513]).length || _(_$_[512]).hasClass(_$_[514])) && (lMore({
            viewdefault: _$_[139],
            clist: _$_[515],
            cgrid: _$_[516]
        }), vmode({
            viewdefault: _$_[139],
            clist: _$_[515],
            cgrid: _$_[516]
        }))
    }(jQuery),
    function (A) {
        A.RCWid = function (_, e) {
            var j = this;
            j.$el = A(_), j.init = function () {
                j.options = A.extend({}, A.RCWid.defaultOptions, e), j.$el.html(_$_[517] + (_$_[1] != j.options.color && /hot/.test(j.$el.parents(_$_[518]).attr(_$_[25])) ? _$_[519] + j.options.color + _$_[520] : _$_[1]) + (_$_[521] === j.options.postType ? _$_[522] :
                    _$_[1]) + _$_[523] + (j.options.ShowPage ? _$_[524] : _$_[1]) + rgx[33]);
                var f, v, x, b, w, y, C, k = 0,
                    t = null,
                    T = location.href.replace(rgx[17], _$_[1]),
                    S = document.location.hostname.split(_$_[428]),
                    L = j.options.maxPostsPerTag,
                    P = 3,
                    I = 1,
                    N = _$_[1] === j.options.blogURL ? window.location.protocol + _$_[95] + window.location.host : j.options.blogURL,
                    O = function (_) {
                        for (j.options.ShowPage && function (_) {
                                for (html = _$_[1], number = parseInt(P / 2), number == P - number && (P = 2 * number + 1), start = I - number, start < 1 && (start = 1), maximal = parseInt(_ / L) + 1, maximal - 1 ==
                                    _ / L && --maximal, akhir = start + P - 1, akhir > maximal && (akhir = maximal), _ = parseInt(I) - 1, 1 < I && (html = 2 == I ? html + _$_[525] : html + (_$_[526] + _ + _$_[527])), 1 < start && (html += _$_[528]), 2 < start && (html += _$_[529]), _ = start; _ <= akhir; _++) html = I == _ ? html + (_$_[530] + (_$_[1] === j.options.color ? _$_[1] : _$_[519] + j.options.color + _$_[531] + j.options.color + _$_[532]) + _$_[533] + _ + _$_[105]) : 1 == _ ? html + _$_[528] : html + (_$_[526] + _ + _$_[22] + _ + _$_[77]);
                                akhir < maximal - 1 && (html += _$_[529]), akhir < maximal && (html += _$_[526] + maximal + _$_[22] + maximal + _$_[77]),
                                    _ = parseInt(I) + 1, I < maximal && (html += _$_[526] + _ + _$_[534]), j.$el.find(_$_[535]).html(html), j.$el.find(_$_[543]).click(function () {
                                        var _ = Number(A(this).attr(_$_[184]));
                                        j.$el.find(_$_[537]).after(_$_[536]), j.$el.find(_$_[538]).html(j.$el.find(_$_[537]).html()), j.$el.find(_$_[537]).html(_$_[1]);
                                        var t = _ * L - (L - 1),
                                            e = j.$el.find(_$_[535]).attr(_$_[539]);
                                        null == e ? A.get(N + _$_[540] + t + _$_[97] + L + _$_[541], O, _$_[130]) : A.get(N + _$_[542] + e + _$_[188] + t + _$_[97] + L + _$_[541], O, _$_[130]), I = _
                                    })
                            }(e = parseInt(_.feed.openSearch$totalResults.$t,
                                10)), k++, v = _.feed.link.length, e = 0; e < v; e++)
                            if (_$_[106] == _.feed.link[e].rel) {
                                f = _.feed.link[e].href;
                                break
                            } if (entry = !0 === j.options.random ? sfArr(_.feed.entry) : _.feed.entry, void 0 !== entry)
                            for (var t = entry.length, e = 0; e < t; e++) {
                                var a, s, $, i, r, n, o, l, d, c = entry[e].link.length;
                                $ = [], s = [];
                                var h, p, m, u, g = _$_[1];
                                for (h = 0; h < c; h++)
                                    if (_$_[106] == entry[e].link[h].rel) {
                                        a = entry[e].link[h].href;
                                        break
                                    } for (h = 0; h < c; h++)
                                    if (_$_[544] == entry[e].link[h].rel && _$_[545] == entry[e].link[h].type) {
                                        i = Number(entry[e].link[h].title.split(_$_[76])[0]);
                                        break
                                    } for (h = 0; h < c; h++) {
                                    if (_$_[107] == entry[e].link[h].rel) {
                                        u = entry[e].link[h].type;
                                        break
                                    }
                                    u = _$_[39]
                                }
                                if (m = _$_[236] === j.options.postType && f !== window.location.protocol + _$_[95] + window.location.host + _$_[55] ? f.substr(f.lastIndexOf(_$_[55]) + 1) : void 0 !== entry[e].category ? entry[e].category[0].term : _$_[1], h = j.options.fbig && entry[e] === entry[0], p = entry[e] !== entry[0], c = _$_[108] in entry[e] ? entry[e].content.$t : _$_[109] in entry[e] ? entry[e].summary.$t : _$_[1], _$_[110] in entry[e] ? ($ = entry[e].media$thumbnail.url, -1 != entry[e].media$thumbnail.url.indexOf(_$_[58]) &&
                                        ($ = entry[e].media$thumbnail.url.replace(_$_[113], _$_[114]), u = _$_[54])) : rgx[6].test(c) || rgx[8].test(c) ? ($ = rgx[6].exec(rgx[6]), s = rgx[8].exec(c), $ = _$_[53] + (null != $ ? $[5] : s[3]) + _$_[52], u = _$_[54]) : $ = rgx[5].test(c) ? (s = rgx[5].exec(c))[4] : _$_[56], rgx[9].test(c) ? u = _$_[54] : rgx[10].test(c) ? u = _$_[62] : rgx[11].test(c) ? u = _$_[63] : rgx[12].test(c) && (u = rgx[12].exec(c).index <= 5 ? _$_[64] : _$_[39]), rgx[29].test(c) && j.options.review) {
                                    for (g = [], s = 0, n = (g = c.match(rgx[29])).length, o = 0; o < n; o++) s += parseInt(g[o].replace(rgx[29], _$_[66]).replace(/"/g,
                                        _$_[1]).replace(/'/g, _$_[1]));
                                    g = s / n, g = _$_[517] + (_$_[1] === j.options.color ? _$_[1] : _$_[519] + j.options.color + _$_[520]) + _$_[546] + g.toFixed(1) + _$_[547] + 10 * g.toFixed(1) + _$_[548]
                                }(c = c.replace(rgx[15], _$_[1]).replace(rgx[16], _$_[1]).replace(/"/g, _$_[73])).length > j.options.summary && (c = c.substring(0, j.options.summary) + _$_[115]), s = entry[e].title.$t.replace(/"/g, _$_[73]), r = entry[e].published.$t.substring(0, 10), n = entry[e].published.$t.match(/\d+/g), n = new Date(n[0], n[1] - 1, n[2], n[3], n[4], n[5]), dyn = r.substring(0,
                                    4), o = Number(r.substring(0, 2)).toLocaleString() + Number(r.substring(2, 4)).toLocaleString(), l = r.substring(5, 7), d = r.substring(8, 10), r = entry[e].author[0].name.$t, -1 < window.location.href.indexOf(_$_[549]) && _$_[550] != S[S.length - 1] && (T = _$_[151] + S[0] + _$_[551] + document.location.pathname), j.$el.parents(_$_[552]).length ? T.toLowerCase() != a.toLowerCase() && M(a, s, $, c, o, d, l, i, r, h, p, m, u, g, n, dyn) : M(a, s, $, c, o, d, l, i, r, h, p, m, u, g, n, dyn)
                            }
                        if (k >= j.options.tags.length) {
                            if (0 < j.options.maxPosts && A(_$_[553] + (j.options.maxPosts -
                                    1) + _$_[554], j.$el.find(_$_[555])).remove(), j.$el.find(_$_[537]).html(j.$el.find(_$_[555]).html()).removeClass(_$_[556]), j.$el.find(_$_[557]).remove(), e = j.$el.find(_$_[558]), a = j.$el.parents(_$_[518]).attr(_$_[25]), i = A(_$_[45]).attr(_$_[44]), e.attr(_$_[44], i + _$_[76] + e.attr(_$_[44])).text(i), /(newsticker|timeline|video|gallery|featured|hot|slider)/.test(a) && j.$el.addClass(_$_[559]), /(video|featured|hot|slider)/.test(a) && j.$el.addClass(_$_[560]), a = j.$el.find(_$_[537]), _$_[233] === j.options.postType) a.owlCarousel({
                                nav: !0,
                                autoplay: j.options.auto,
                                navText: [_$_[1], _$_[1]],
                                autoplayTimeout: j.options.slideSpeed,
                                loop: !0,
                                bColor: _$_[1] !== j.options.color ? j.options.color : _$_[1],
                                responsiveClass: !0,
                                autoplayHoverPause: !0,
                                animateOut: _$_[239] === j.options.effect && _$_[562],
                                animateIn: _$_[239] === j.options.effect && _$_[563],
                                smartSpeed: 500,
                                items: 1,
                                responsiveRefreshRate: 500
                            }).addClass(_$_[561]);
                            else if (_$_[234] === j.options.postType) a.owlCarousel({
                                autoplay: j.options.auto,
                                margin: 0,
                                loop: !0,
                                autoplayTimeout: j.options.slideSpeed,
                                bColor: _$_[1] !==
                                    j.options.color ? j.options.color : _$_[1],
                                nav: !0,
                                autoplayHoverPause: !0,
                                navText: [_$_[1], _$_[1]],
                                responsiveBaseElement: j.$el,
                                navContainer: j.$el.parents(_$_[503]).find(_$_[564]),
                                responsive: {
                                    0: {
                                        items: 1
                                    },
                                    401: {
                                        items: 2
                                    },
                                    660: {
                                        items: 3
                                    },
                                    1E3: {
                                        items: 4
                                    }
                                }
                            }).addClass(_$_[561]);
                            else if (_$_[235] === j.options.postType) a.simplyScroll();
                            else if (_$_[236] === j.options.postType) {
                                for (i = a.children(_$_[565]), e = 0; e < i.length; e += j.options.wrapNum) i.slice(e, e + j.options.wrapNum).wrapAll(_$_[566]);
                                a.owlCarousel({
                                    nav: !0,
                                    autoplay: j.options.auto,
                                    navText: [_$_[1], _$_[1]],
                                    autoplayTimeout: j.options.slideSpeed,
                                    loop: !0,
                                    responsiveClass: !0,
                                    autoplayHoverPause: !0,
                                    bColor: _$_[1] !== j.options.color ? j.options.color : _$_[1],
                                    animateOut: _$_[239] === j.options.effect && _$_[562],
                                    animateIn: _$_[239] === j.options.effect && _$_[563],
                                    smartSpeed: 500,
                                    items: 1,
                                    responsiveRefreshRate: 500
                                }).addClass(_$_[561])
                            } else if (_$_[237] === j.options.postType) {
                                for (i = a.children(_$_[565]), e = 0; e < i.length; e += j.options.wrapNum) i.slice(e, e + j.options.wrapNum).wrapAll(_$_[567]);
                                a.find(_$_[569]).wrapInner(_$_[568]),
                                    a.find(_$_[570]).owlCarousel({
                                        nav: !0,
                                        autoplay: j.options.auto,
                                        navText: [_$_[1], _$_[1]],
                                        autoplayTimeout: j.options.slideSpeed,
                                        loop: !0,
                                        navigationText: !1,
                                        bColor: _$_[1] !== j.options.color ? j.options.color : _$_[1],
                                        responsiveClass: !0,
                                        autoplayHoverPause: !0,
                                        animateOut: _$_[239] === j.options.effect && _$_[562],
                                        animateIn: _$_[239] === j.options.effect && _$_[563],
                                        smartSpeed: 500,
                                        items: 1,
                                        responsiveRefreshRate: 500
                                    }).addClass(_$_[561])
                            }
                            if (j.options.fbig)
                                for (i = a.children(_$_[565]), e = 0; e < i.length; e += i.length) i.slice(1, e + i.length).wrapAll(_$_[571]);
                            if (j.options.hoverEffect && j.$el.find(_$_[576]).hover(function () {
                                    var _, t = A(this),
                                        e = t.parents(_$_[565]).html(),
                                        a = t.height(),
                                        s = t.offset(),
                                        $ = A(document.body).width(),
                                        i = A(this).parents(_$_[503]).hasClass(_$_[572]) ? _$_[573] : _$_[1];
                                    $ < 320 + (_ = _ + t.width() - 320) ? _ = $ - 330 : _ < 10 && (_ = 10), A(_$_[575]).css({
                                        top: _$_[235] === j.options.postType ? s.top + a : s.top - 350,
                                        left: _
                                    }).addClass(_$_[574] + i).html(e)
                                }, function () {
                                    var _ = A(this).parents(_$_[503]).hasClass(_$_[572]) ? _$_[573] : _$_[1];
                                    A(_$_[575]).removeClass(_$_[574] + _).html(_$_[1])
                                }),
                                j.$el.find(_$_[577]).each(function () {
                                    b = A(this), x = b.find(_$_[578]), w = x.attr(_$_[49]), y = b.width(), C = y <= 180 ? _$_[579] : y <= 500 ? _$_[47] : _$_[580], (/(list|gallery|newsticker|blogpost|halfpost|complex)/.test(b.parents(_$_[518]).attr(_$_[25])) || b.parents(_$_[305]).hasClass(_$_[581])) && (C = _$_[47]), x.attr(_$_[78], _$_[79] + (-1 != w.indexOf(_$_[80]) ? _$_[81] + w.replace(rgx[7], _$_[55] + C + _$_[55]) + _$_[82] : _$_[57]) + _$_[83]), x.removeAttr(_$_[49])
                                }), j.$el.parents(_$_[518]).addClass(_$_[583]).removeClass(_$_[582]), j.options.animated)
                                if (j.options.startFirst) {
                                    for (i =
                                        a.find(_$_[584]), e = 0; e < i.length; e += i.length) i.slice(e, e + i.length).wrapAll(_$_[585]);
                                    (e = j.$el.find(_$_[586])).wrap(_$_[587]), e.simpleSpy().on(_$_[590], function () {
                                        jQuery(this).trigger(_$_[591])
                                    }).on(_$_[588], function () {
                                        jQuery(this).trigger(_$_[589])
                                    })
                                } else {
                                    for (i = a.children(_$_[565]), e = 0; e < i.length; e += i.length + 1) i.slice(e, e + i.length + 1).wrapAll(_$_[585]);
                                    (e = j.$el.find(_$_[586])).wrap(_$_[587]), e.simpleSpy({
                                        limit: 5
                                    }).on(_$_[590], function () {
                                        jQuery(this).trigger(_$_[591])
                                    }).on(_$_[588], function () {
                                        jQuery(this).trigger(_$_[589])
                                    })
                                } chside(j.$el),
                                _$_[1] !== j.options.color && j.$el.parents(_$_[518]).find(_$_[592]).length && j.$el.parents(_$_[518]).find(_$_[564]).children().css({
                                    "background-color": j.options.color
                                })
                        }
                    },
                    M = function (_, t, e, a, s, $, i, r, n, o, l, d, c, h, p, m) {
                        for (var u = A(_$_[565], j.$el.find(_$_[555])), g = 0, f = u.length; g < f; g++) {
                            var v = A(_$_[28], u.eq(g)),
                                x = R(v);
                            if (v.attr(_$_[27]) == _) {
                                for (t = ++x, (_ = v).attr(_$_[593], t), j.options.relevantTip && _.attr(_$_[44], j.options.relevantTip.replace(_$_[594], t)), j.options.postScoreClass && _.attr(_$_[25], j.options.postScoreClass +
                                        t), _ = g - 1; 0 <= _; _--)
                                    if (t = A(_$_[28], u.eq(_)), R(t) > x) return void(1 < g - _ && u.eq(_).after(u.eq(g)));
                                return void(0 < g && u.eq(0).before(u.eq(g)))
                            }
                        }
                        j.$el.find(_$_[555]).append(_$_[517] + (_$_[521] === j.options.postType ? _$_[522] : _$_[1]) + _$_[595] + (o ? _$_[596] : _$_[1]) + _$_[597] + (_$_[235] === j.options.postType ? _$_[517] + (_$_[1] != j.options.color ? _$_[519] + j.options.color + _$_[520] : _$_[1]) + _$_[598] + p.toLocaleTimeString().replace(/:\d+ /, _$_[76]) + _$_[94] : _$_[1]) + (o || /(n|c)/.test(j.options.postType) ? _$_[517] + (_$_[1] === j.options.color ?
                            _$_[1] : _$_[519] + j.options.color + _$_[520]) + _$_[599] + $ + _$_[141] + mName[parseInt(i, 10) - 1] + _$_[142] + m + _$_[600] : _$_[1]) + (j.options.ShowImage ? _$_[601] + (j.$el.parents(_$_[503]).hasClass(_$_[572]) ? _$_[602] : _$_[1]) + _$_[603] + (o ? _$_[604] : _$_[1]) + _$_[605] + c + _$_[606] + t + _$_[607] + _ + _$_[608] + e + _$_[609] + (-1 != e.indexOf(_$_[58]) || -1 != e.indexOf(_$_[610]) ? _$_[59] : _$_[1]) + (j.options.review ? h : _$_[1]) + _$_[611] : _$_[1]) + _$_[517] + (/timeline/.test(j.$el.parents(_$_[503]).attr(_$_[25])) && _$_[1] !== j.options.color ? _$_[612] + (ts_isRTL() ?
                            _$_[613] : _$_[447]) + _$_[614] + j.options.color + _$_[520] : _$_[1]) + _$_[615] + (o ? _$_[616] : _$_[1]) + _$_[617] + (/timeline/.test(j.$el.parents(_$_[503]).attr(_$_[25])) ? _$_[517] + (_$_[1] === j.options.color ? _$_[1] : _$_[618] + j.options.color + _$_[520]) + _$_[619] : _$_[1]) + _$_[620] + (/(featured4|slider1|newsticker)/.test(j.$el.parents(_$_[503]).attr(_$_[25])) && _$_[1] !== j.options.color ? _$_[621] + (/newsticker/.test(j.$el.parents(_$_[503]).attr(_$_[25])) ? _$_[1] : _$_[622]) + _$_[623] + j.options.color + _$_[520] : _$_[1]) + _$_[624] + (_$_[235] ===
                            j.options.postType || j.$el.parents(_$_[503]).hasClass(_$_[139]) ? _$_[625] : _$_[1]) + _$_[626] + _ + _$_[22] + t + _$_[627] + (j.options.ShowAuthor ? _$_[628] + n + _$_[629] : _$_[1]) + _$_[630] + dformat.replace(_$_[633], s).replace(_$_[632], Number(i).toLocaleString()).replace(_$_[631], Number($).toLocaleString()) + _$_[105] + (0 < r ? _$_[634] + _ + _$_[635] + r.toLocaleString() + _$_[167] : _$_[1]) + _$_[94] + (l && !j.options.ShowDesc ? _$_[1] : _$_[636] + a + (o ? _$_[637] + _ + _$_[638] + t + _$_[639] : _$_[1]) + _$_[94]) + _$_[94] + (j.options.ShowTags ? _$_[640] + (_$_[1] ===
                            j.options.color ? _$_[1] : _$_[519] + j.options.color + _$_[520]) + _$_[641] + d + _$_[607] + j.options.blogURL + _$_[190] + d + _$_[222] + Npage + _$_[22] + d + _$_[167] : _$_[1]) + _$_[642])
                    },
                    R = function (_) {
                        return 0 < (_ = parseInt(_.attr(_$_[593]))) ? _ : 1
                    };
                ! function () {
                    var _ = (t = j.$el).parents(_$_[552]);
                    if (j.options.tags || (j.options.tags = [], A(_$_[643] + j.options.maxTags + _$_[554]).each(function () {
                            var _ = A.trim(A(this).text().replace(/\n/g, _$_[1])); - 1 == A.inArray(_, j.options.tags) && (j.options.tags[j.options.tags.length] = _)
                        }), _.length || (j.options.tags = [])), 0 !== j.options.tags.length || j.options.recentTitle)
                        if (_.length && A(_$_[644] + (0 === j.options.tags.length ? j.options.recentTitle : j.options.relatedTitle ? j.options.relatedTitle : _$_[1]) + _$_[645]).prependTo(t), 0 === j.options.tags.length) j.options.random ? A.get(N + _$_[646], function (_) {
                            var t = j.options.maxrandom > _.feed.openSearch$totalResults.$t ? _.feed.openSearch$totalResults.$t : j.options.maxrandom;
                            _ = j.options.maxPosts > _.feed.openSearch$totalResults.$t ? 1 : gRdm(1, t - j.options.maxPosts), A.get(N + _$_[647] + j.options.maxPosts +
                                _$_[648] + _ + _$_[649], O, _$_[130])
                        }, _$_[130]) : A.get(N + _$_[647] + j.options.maxPostsPerTag + _$_[541], O, _$_[130]);
                        else
                            for (_ = 0; _ < j.options.tags.length; _++) A.get(N + _$_[542] + j.options.tags[_] + _$_[222] + j.options.maxPostsPerTag + _$_[541], O, _$_[130]), j.options.ShowPage && j.$el.find(_$_[535]).attr(_$_[539], j.options.tags[0])
                }()
            }, j.init()
        }, A.RCWid.defaultOptions = {
            blogURL: _$_[1],
            maxPosts: 5,
            maxTags: 4,
            maxPostsPerTag: 6,
            tags: null,
            ShowComment: !0,
            ShowImage: !0,
            ShowTags: !1,
            ShowAuthor: !1,
            ShowDesc: !1,
            maxrandom: 20,
            hoverEffect: !1,
            random: !0,
            fbig: !1,
            startFirst: !1,
            animated: !1,
            ShowPage: !0,
            auto: !1,
            effect: !1,
            review: !1,
            wrapNum: 4,
            summary: 120,
            color: _$_[1],
            relatedTitle: reltx,
            recentTitle: rectx,
            postScoreClass: _$_[1],
            relevantTip: _$_[1],
            slideSpeed: 5E3,
            postType: _$_[1]
        }, A.fn.RCWid = function (_) {
            return this.each(function () {
                new A.RCWid(this, _)
            })
        }
    }(jQuery),
    function (v) {
        v.RCom = function (_, t) {
            var f = this;
            f.$el = v(_), f.init = function () {
                f.options = v.extend({}, v.RCom.defaultOptions, t), v.get((_$_[1] === f.options.blogURL ? window.location.protocol + _$_[95] + window.location.host :
                    f.options.blogURL) + _$_[650], function (_) {
                    var t = _$_[1],
                        e = _$_[1];
                    _ = (n = _.feed).author[0].name ? n.author[0].name.$t : f.options.anon;
                    var a = n.author[0].gd$image.src.replace(rgx[7], _$_[111] + f.options.avatarSize + _$_[112]);
                    if (n.entry && 0 !== n.entry.length) {
                        t += _$_[651];
                        for (var s, $, i, r, n, o = 0, l = 0, d = (n = n.entry).length; l < d; ++l) {
                            i = (s = n[l]).published.$t.substring(0, 10);
                            var c = s.author[0].name ? s.author[0].name.$t : f.options.anon,
                                h = !!s.author[0].uri && s.author[0].uri.$t,
                                p = s.author[0].gd$image.src.replace(rgx[7], _$_[111] + f.options.avatarSize +
                                    _$_[112]),
                                m = (m = s.content ? s.content.$t : s.summary.$t).replace(/<br *\/?>|[\s]+/gi, _$_[76]).replace(/<.*?>|[<>]/g, _$_[1]).replace(rgx[16], _$_[1]),
                                u = (m = _$_[1] !== m && m.length > f.options.characters ? m.substring(0, f.options.characters) + _$_[115] : m, !1),
                                g = c === _ || p === a;
                            if (!g || f.options.showAdmin) {
                                for ($ = 0, r = s.link.length; $ < r; ++$) e = s.link[$], _$_[106] == e.rel && (u = e.href);
                                e = u.lastIndexOf(_$_[55]) + 1, $ = u.lastIndexOf(_$_[428]), e = u.split(_$_[30]).join(_$_[76]).substring(e, $) + _$_[115], r = s.published.$t.match(/\d+/g), r = new Date(r[0],
                                    r[1] - 1, r[2], r[3], r[4], r[5]), s = i.substring(0, 4), $ = i.substring(5, 7), i = i.substring(8, 10), o < f.options.numComments && (o++, t += _$_[652] + (g ? _$_[653] : _$_[654]) + _$_[22], t += f.options.Showimage ? _$_[655] + h + _$_[656] + c + _$_[657] + c + _$_[658] + p + _$_[659] : _$_[1], t += _$_[660] + h + _$_[22] + c + _$_[661] + u + _$_[22] + e + _$_[662] + i + _$_[141] + mName[parseInt($, 10) - 1] + _$_[142] + s + _$_[663] + r.toLocaleTimeString().replace(/:\d+ /, _$_[76]) + _$_[664], t += _$_[665] + m + _$_[94], t += _$_[666])
                            }
                        }
                        f.$el.html(t + _$_[94]), f.options.fs && (t = function (_, t, e) {
                            v(_$_[669]).each(function () {
                                v(this).html(v(this).html().replace(_,
                                    _$_[667] + t + _$_[668] + e + _$_[464]))
                            })
                        })(/\scheer/gi, _$_[dM]), chside(f.$el)
                    } else f.$el.html(_$_[670])
                }, _$_[130])
            }, f.init()
        }, v.RCom.defaultOptions = {
            blogURL: _$_[1],
            numComments: mx.com,
            characters: 100,
            avatarSize: 40,
            showAdmin: admBlog,
            anon: _$_[671],
            Showimage: !0,
            defaultAvatar: _$_[672]
        }, v.fn.RCom = function (_) {
            return this.each(function () {
                new v.RCom(this, _)
            })
        }
    }(jQuery), $(_$_[675]).each(function () {
        var _ = rgx[34],
            t = new RegExp(/\[/.source + _.source + /(.*?)(\/?)\]/.source, _$_[673]),
            e = (_ = new RegExp(/\[\//.source + _.source +
                /\]/.source, _$_[673]), $(this).html());
        t.test(e) && (e = e.replace(t, _$_[674]).replace(_, _$_[94]), $(this).html(e))
    }), $(_$_[683]).each(function () {
        $(this).find(_$_[681]).each(function () {
            var _ = $(this).attr(_$_[44]),
                t = $(this).attr(_$_[676]),
                e = _$_[677] + (null == t || _$_[1] == t ? _$_[1] : _$_[678] + t) + _$_[26],
                a = $(this).html();
            $(this).html(null == a || _$_[1] == a ? _$_[680] : a).attr({
                "data-tab": (null == t || _$_[1] == t ? _$_[1] : e) + (null == _ || _$_[1] == _ ? _$_[679] : _),
                title: _$_[1]
            })
        }), $(this).parents(_$_[518]).addClass(_$_[682])
    }), $(_$_[683]).myTab(),
    $(_$_[694]).each(function () {
        var s = _$_[1];
        $(this).find(_$_[689]).each(function () {
            var _ = $(this).attr(_$_[44]),
                t = $(this).attr(_$_[676]),
                e = _$_[677] + (null == t || _$_[1] == t ? _$_[1] : _$_[678] + t) + _$_[26],
                a = $(this).html();
            s += _$_[684] + (null == t || _$_[1] == t ? _$_[1] : e) + (null == _ || _$_[685] == _ ? _$_[1] : _) + _$_[686] + (_$_[687] + (null == a || _$_[1] == a ? _$_[688] : a) + _$_[94])
        }), $(this).html(s), $(this).children(_$_[691]).first().addClass(_$_[690]), $(this).children(_$_[693]).first().addClass(_$_[692])
    }), $(_$_[698]).click(function () {
        $(this).next(_$_[693]).addClass(_$_[692]).slideToggle(_$_[695]).siblings(_$_[696]).removeClass(_$_[692]).slideUp(_$_[695]),
            $(this).toggleClass(_$_[690]), $(this).siblings(_$_[697]).removeClass(_$_[690])
    }), $(_$_[726]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[302]),
            e = _.attr(_$_[699]),
            a = _.attr(_$_[700]),
            s = _.attr(_$_[70]),
            i = _.attr(_$_[701]),
            r = _.attr(_$_[702]),
            n = _.attr(_$_[703]),
            o = _.attr(_$_[704]),
            l = _.attr(_$_[705]),
            d = _.attr(_$_[706]);
        _.replaceWith(_$_[707] + (null == i || _$_[1] == i || _$_[301] == i ? _$_[1] : _$_[708]) + _$_[709] + (null == s || _$_[1] == s ? _$_[710] : s) + _$_[711] + (null == r || _$_[1] == r ? _$_[712] : r) + _$_[713] + (null == d || _$_[1] == d ? _$_[714] :
            1 == d ? _$_[715] : d) + _$_[55] + (null == e || _$_[1] == e ? _$_[716] : e) + _$_[717] + (null == a || _$_[1] == a ? _$_[718] : a) + _$_[719] + (null == t || _$_[1] == t ? _$_[720] : t) + _$_[721] + (null == o || _$_[1] == o ? _$_[720] : o) + _$_[722] + (null == l || _$_[1] == l ? _$_[723] : l) + _$_[724] + (null == n || _$_[1] == n ? _$_[720] : n) + _$_[725])
    }), $(_$_[746]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[727]),
            e = _.attr(_$_[728]),
            a = _.attr(_$_[700]),
            s = _.attr(_$_[699]),
            i = _.attr(_$_[70]),
            r = _.attr(_$_[701]),
            n = _.attr(_$_[702]),
            o = _.attr(_$_[729]),
            l = _.attr(_$_[730]);
        _.replaceWith(_$_[731] +
            (null == r || _$_[1] == r || _$_[301] == r ? _$_[1] : _$_[708]) + _$_[732] + (null == i || _$_[1] == i ? _$_[710] : i) + _$_[711] + (null == n || _$_[1] == n ? _$_[733] : n) + _$_[734] + (null == s || _$_[1] == s ? _$_[735] : s) + _$_[736] + (null == l || _$_[1] == l ? _$_[737] : l) + _$_[738] + (null == o || _$_[1] == o ? _$_[737] : o) + _$_[739] + (null == t || _$_[1] == t ? _$_[740] : t) + _$_[741] + (null == a || _$_[1] == a ? _$_[742] : a) + _$_[743] + (null == e || _$_[1] == e ? _$_[744] : e) + _$_[745])
    }), $(_$_[758]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[699]),
            e = _.attr(_$_[70]),
            a = _.attr(_$_[702]),
            s = _.attr(_$_[729]),
            i = _.attr(_$_[701]),
            r = _.attr(_$_[747]),
            n = _.attr(_$_[706]),
            o = _.attr(_$_[748]);
        _.replaceWith(_$_[749] + (null == i || _$_[1] == i || _$_[301] == i ? _$_[1] : _$_[708]) + _$_[709] + (null == e || _$_[1] == e ? _$_[710] : e) + _$_[711] + (null == a || _$_[1] == a ? _$_[750] : a) + _$_[751] + (null == t || _$_[1] == t ? _$_[752] : t) + _$_[753] + (null == n || _$_[1] == n ? _$_[1] : n) + _$_[754] + (null == o || _$_[1] == o ? _$_[301] : o) + _$_[755] + (null == r || _$_[1] == r ? _$_[737] : r) + _$_[756] + (null == s || _$_[1] == s ? _$_[737] : s) + _$_[757])
    }), $(_$_[762]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[699]),
            e = _.attr(_$_[70]),
            a = _.attr(_$_[701]),
            s = _.attr(_$_[702]);
        _.replaceWith(_$_[759] + (null == a || _$_[1] == a || _$_[301] == a ? _$_[1] : _$_[708]) + _$_[709] + (null == e || _$_[1] == e ? _$_[710] : e) + _$_[711] + (null == s || _$_[1] == s ? _$_[750] : s) + _$_[760] + (null == t || _$_[1] == t ? _$_[1] : t) + _$_[761])
    }), $(_$_[764]).addClass(_$_[763]), $(_$_[767]).each(function () {
        var _ = $(this).attr(_$_[44]),
            t = $(this).attr(_$_[676]),
            e = _$_[677] + (null == t || _$_[1] == t ? _$_[1] : _$_[678] + t) + _$_[26],
            a = $(this).html();
        null == _ && (_ = _$_[1]), _$_[1] != _ && (_ = _$_[765] + (null == t ||
            _$_[1] == t ? _$_[1] : e) + _ + _$_[94]), $(this).html(_$_[766] + _ + (null == a ? _$_[1] : a) + _$_[94])
    }), $(_$_[778]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[699]),
            e = _.attr(_$_[768]),
            a = _.attr(_$_[769]),
            s = _.attr(_$_[701]),
            i = _$_[770] + e + _$_[771],
            r = _.attr(_$_[70]),
            n = _.attr(_$_[702]);
        _.replaceWith((null == e || _$_[1] == e ? _$_[1] : _$_[772] + (null == s || _$_[1] == s || _$_[301] == s ? _$_[1] : _$_[708]) + _$_[520] + (null == e || _$_[1] == e ? _$_[1] : i) + _$_[773] + (null == a || _$_[1] == a ? _$_[1] : a) + _$_[22]) + _$_[774] + (null == s || _$_[1] == s || _$_[301] == s ? _$_[1] : _$_[708]) +
            _$_[775] + (null == r || _$_[1] == r ? _$_[1] : r) + _$_[711] + (null == n || _$_[1] == n ? _$_[1] : n) + _$_[658] + (null == t || _$_[1] == t ? _$_[776] : t) + _$_[777] + (null == e || _$_[1] == e ? _$_[1] : _$_[77]))
    }), $(_$_[781]).each(function () {
        $(this).children(_$_[780]).remove()
    }).addClass(_$_[779]), $(_$_[787]).each(function () {
        var _ = $(this).attr(_$_[782]),
            t = $(this).html();
        _ = _$_[783] + (null == _ || _$_[1] == _ ? _$_[784] : _) + _$_[22] + (null == t || _$_[1] == t ? _$_[785] : t) + _$_[786], $(this).replaceWith(_)
    });
for (var e = document.getElementsByTagName(_$_[788]), t = e.length, n = 0; n < t; n++) {
    e[n].innerHTML = _$_[789] + e[n].innerHTML + _$_[790];
    for (var r = e[n].innerHTML.split(/\n/).length, i = 0; i < r; i++) {
        var s = e[n].getElementsByTagName(_$_[791])[0];
        s.innerHTML += _$_[792] + (i + 1) + _$_[105]
    }
}
$(_$_[794]).each(function () {
    $(this).html($(_$_[793]).html())
}), $(_$_[799]).each(function () {
    var _ = $(this).attr(_$_[768]),
        t = $(this).attr(_$_[44]),
        e = $(this).html();
    _ = _$_[223] + (null == _ || _$_[1] == _ ? _$_[231] : _) + _$_[795] + (null == t || _$_[1] == t ? _$_[796] : t) + _$_[792] + (null == e || _$_[1] == e ? _$_[797] : e) + _$_[798], $(this).replaceWith(_)
}), $(_$_[807]).each(function () {
    var s = _$_[1];
    $(this).find(_$_[689]).each(function () {
        var _ = $(this).attr(_$_[44]),
            t = $(this).attr(_$_[768]),
            e = $(this).attr(_$_[699]),
            a = $(this).html();
        s += _$_[800] +
            e + _$_[801] + (null == t || _$_[1] == t ? e : t) + _$_[802] + (null == _ || _$_[1] == _ ? _$_[1] : _$_[803] + (null == t || _$_[1] == t ? e : t) + _$_[22] + _ + _$_[804]) + (_$_[1] == a ? _$_[1] : _$_[805] + a + _$_[125]) + _$_[664]
    }), $(this).html(s).parents(_$_[518]).addClass(_$_[806]), $(this).owlCarousel({
        nav: !0,
        autoplay: !0,
        navText: [_$_[1], _$_[1]],
        autoplayTimeout: 5E3,
        loop: !0,
        responsiveClass: !0,
        animateOut: _$_[562],
        animateIn: _$_[563],
        autoplayHoverPause: !0,
        smartSpeed: 500,
        items: 1,
        responsiveRefreshRate: 500
    }).addClass(_$_[561])
}), $(_$_[809]).each(function () {
    var s =
        _$_[1],
        _ = $(this);
    _.find(_$_[689]).each(function () {
        var _ = $(this).attr(_$_[44]),
            t = $(this).attr(_$_[768]),
            e = $(this).attr(_$_[699]),
            a = $(this).html();
        s += _$_[808] + e + _$_[801] + (null == t || _$_[1] == t ? e : t) + _$_[802] + (null == _ || _$_[1] == _ ? _$_[1] : _$_[803] + (null == t || _$_[1] == t ? e : t) + _$_[22] + _ + _$_[804]) + (_$_[1] == a ? _$_[1] : _$_[805] + a + _$_[125]) + _$_[664]
    }), _.html(s), _.owlCarousel({
        autoplay: !0,
        margin: 2,
        loop: !0,
        autoplayTimeout: 5E3,
        nav: !0,
        autoplayHoverPause: !0,
        responsiveBaseElement: _,
        navText: [_$_[1], _$_[1]],
        responsive: {
            0: {
                items: 1
            },
            401: {
                items: 2
            },
            660: {
                items: 3
            },
            1E3: {
                items: 4
            }
        }
    }).addClass(_$_[561])
}), $(_$_[834]).each(function () {
    var _ = $(this),
        s = _.attr(_$_[810]);
    _.html(_.html().replace(/&nbsp;/g, _$_[1])), _.find(_$_[689]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[811]),
            e = (t = Number(null == t || _$_[1] == t ? 0 : t), _.html());
        _.replaceWith(_$_[812] + (null == e || _$_[1] == e ? _$_[813] : e) + _$_[792] + t + _$_[814] + t + _$_[815] + 10 * t + _$_[816])
    }), _.find(_$_[681]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[44]),
            e = _.attr(_$_[199]),
            a = _.html();
        t = _$_[817] + (null == t ||
            _$_[1] == t ? _$_[818] : t) + _$_[819] + (null == a || _$_[1] == a ? _$_[820] : a) + _$_[821] + (null == e || _$_[1] == e ? _$_[822] : e) + _$_[823], null != s && _$_[737] == s && $(_$_[402]).prepend(_$_[824] + (null == e || _$_[1] == e ? _$_[822] : e) + _$_[825]), _.replaceWith(t)
    });
    var t = _.find(_$_[826]),
        e = t.length,
        a = 0;
    t.each(function () {
        a += parseInt($(this).attr(_$_[827]))
    }), e = 10 * (t = (a / e).toFixed(1)) / 100 * 360, $(_$_[828]).html(t), $(_$_[830]).addClass(_$_[829] + 10 * t), $(_$_[833]).css({
        "-webkit-transform": _$_[831] + e + _$_[832],
        "-moz-transform": _$_[831] + e + _$_[832],
        "-ms-transform": _$_[831] + e + _$_[832],
        "-o-transform": _$_[831] + e + _$_[832],
        transform: _$_[831] + e + _$_[832]
    }), _.children(_$_[780]).remove()
}), $(_$_[518]).each(function () {
    var _, t, e, a = $(this),
        s = a.children(_$_[835]),
        i = s.text(),
        r = rgx[33] + _$_[94];
    rgx[18].test(i) ? (i = (_ = i.match(rgx[18]))[0].replace(/(\r\n|\n|\r)/gm, _$_[1]), e = _[1], _ = -1 != (t = void 0 !== _[2] ? _[2] : _$_[1]).indexOf(_$_[80]) ? _$_[836] + t + _$_[771] : _$_[1], t = -1 != t.indexOf(_$_[231]) ? _$_[837] + t + _$_[771] : _$_[1], s.html(_$_[838] + i + _$_[839] + e + _$_[520] + t + _$_[76] + _ +
        _$_[840] + r), a.addClass(_$_[582])) : rgx[19].test(i) ? (a.addClass(_$_[582]), s.html(_$_[841] + r)) : rgx[20].test(i) ? (a.addClass(_$_[582]), s.html(_$_[842] + r)) : rgx[21].test(i) && (a.addClass(_$_[582]), a = -1 != i.indexOf(_$_[55]) ? i.replace(rgx[22], _$_[1]).replace(/(\r\n|\n|\r)/gm, _$_[1]) : _$_[1], s.html(_$_[838] + a + _$_[843] + r))
});
var title1, title2, title3, winHe = $(window).height();
if ($(_$_[518]).each(function () {
        var _ = $(this),
            t = _.children(_$_[835]),
            e = _.find(_$_[844]),
            a = t.text(),
            s = .1 * _.height() - winHe + _.offset().top,
            i = $(document).scrollTop();
        _.hasClass(_$_[275]) || s < i && ldwid(e, _, t, a)
    }), $(_$_[845]).length && (title1 = $(_$_[846]), title2 = $(_$_[847]), title3 = $(_$_[848]), title1.text().replace(/(\r\n|\n|\r)/gm, _$_[1]) == title2.text().replace(/(\r\n|\n|\r)/gm, _$_[1]) && (title1.html(title2.html()), title2.parent().remove()), title3.length && ($(_$_[849]).html(title3.html()), title3.parent().remove())),
    $(_$_[860]).each(function () {
        var a = [],
            s = $(this).html(),
            i = $(_$_[851]).attr(_$_[850]),
            _ = $(_$_[852]).attr(_$_[108]),
            t = /\[lock\]/g,
            e = /\[\/lock\]/g;
        t.test(s) && e.test(s) && (_$_[853] == getCookieLocal(_$_[854] + i) ? (s = s.replace(t, _$_[1]).replace(e, _$_[1]), $(this).html(s)) : ($(this).html($(this).html().replace(t, _$_[856]).replace(e, _$_[855])), $(this).find(_$_[859]).each(function () {
            a.push($(this).html()), $(this).replaceWith(_$_[857] + _ + _$_[858])
        }), $(document).on(_$_[267], function (_) {
            if (_$_[8] != typeof _) {
                var t = window.location.href;
                if ((_ = _.url) && (-1 != _.indexOf(t) || -1 != t.indexOf(_))) {
                    s = $(_$_[860]).html();
                    var e = 0;
                    $(_$_[861]).each(function () {
                        _$_[8] != typeof a[e] && $(this).replaceWith(a[e]), e++
                    }), setCookieLocal(_$_[854] + i, _$_[853])
                }
            }
        })))
    }), $(_$_[862]).length && (window.twttr = function (_, t, e) {
        var a, s = _.getElementsByTagName(t)[0];
        return _.getElementById(e) ? void 0 : ((_ = _.createElement(t)).id = e, _.src = _$_[864], s.parentNode.insertBefore(_, s), window.twttr || (a = {
            _e: [],
            ready: function (_) {
                a._e.push(_)
            }
        }))
    }(document, _$_[261], _$_[863]), twttr.ready(function (_) {
        _.events.bind(_$_[865],
            function (_) {
                $.event.trigger({
                    type: _$_[267],
                    url: _.target.baseURI
                })
            })
    })), ($(_$_[270]).length || $(_$_[866]).length) && fbsdk(), $(_$_[867]).length) {
    var Display_Reply_Form = function (_) {
            par_id = $(_).attr(_$_[850]), par_id = Valid_Par_Id(par_id), html = $(Cur_Cform_Hdr).html(), _$_[868] == Cur_Cform_Hdr ? (reset_html = _$_[869] + Msgs.addComment + _$_[77], $(Cur_Cform_Hdr).html(reset_html)) : $(Cur_Cform_Hdr).html(_$_[1]), Cur_Cform_Hdr = _$_[870] + par_id, $(Cur_Cform_Hdr).html(html), $(_$_[871]).attr(_$_[699], Cform_Ins_ParID(par_id))
        },
        Reset_Comment_Form = function () {
            html = $(Cur_Cform_Hdr).html(), $(Cur_Cform_Hdr).html(_$_[1]), Cur_Cform_Hdr = _$_[868], $(Cur_Cform_Hdr).html(html), $(_$_[871]).attr(_$_[699], Cur_Cform_Url)
        },
        Cform_Ins_ParID = function (_) {
            return _ = _$_[872] + _ + _$_[873], n_cform_url = Cur_Cform_Url.replace(/#%7B/, _), n_cform_url
        },
        Valid_Par_Id = function (_) {
            return -1 != (r = _.indexOf(_$_[234])) && (_ = _.substring(r + 1)), _
        };
    0 < $(_$_[874]).length && $(_$_[512]).hasClass(_$_[156]) && ($(_$_[879]).each(function () {
        var _ = $(this).html().replace(/\{/g, _$_[876]).replace(/#/g,
            _$_[875]).replace(/\}/g, _$_[224]);
        $(this).html(_), _ = $(this).children(_$_[877]);
        for (var t = 0; t < _.length; t += _.length + 1) _.slice(t, t + _.length + 1).wrapAll(_$_[878])
    }), $(_$_[874]).each(function () {
        var _ = /(\r\n|\n|\r)/gm,
            t = $(_$_[880]).length ? $(_$_[880]).text().replace(_, _$_[1]) : _$_[881],
            e = (_ = (e = $(this)).children(_$_[216]).html().replace(_, _$_[1]), e.find(_$_[882]).html());
        t === _ && (_$_[1] === $(_$_[883]).html() && $(_$_[883]).html(desnya), $(_$_[884]).html(e), $(_$_[889]).each(function () {
            var _ = $(this).attr(_$_[25]);
            $(this).wrap(_$_[885] + _.replace(_$_[887], _$_[1]).replace(_$_[886], _$_[1]) + _$_[888])
        }))
    }));
    var $postbody = $(_$_[402]).html(),
        $adsisi = $(_$_[890]),
        myrgx = /\[(full-post|left-post|right-post|left-side|right-side|hideadstitle)\]/g;
    if (/\[left-post\]/.test($postbody) ? $(_$_[892]).addClass(_$_[891]) : /\[right-post\]/.test($postbody) ? $(_$_[892]).addClass(_$_[893]) : /\[left-side\]/.test($postbody) ? $(_$_[892]).addClass(_$_[894]) : /\[right-side\]/.test($postbody) ? $(_$_[892]).addClass(_$_[895]) : /\[full-post\]/.test($postbody) &&
        $(_$_[892]).addClass(_$_[896]), /\[hideadstitle\]/.test($postbody) && $(_$_[892]).addClass(_$_[897]), myrgx.test($postbody) && $(_$_[402]).html($postbody.replace(myrgx, _$_[1])), $postbody = $(_$_[402]).html(), /\[ads-post\]/.test($postbody) && ($(_$_[402]).html($postbody.replace(/\[ads-post\]/, _$_[898])), $(_$_[899]).html($adsisi.detach())), $postbody = $(_$_[402]).html(), $(_$_[900]).length && !/\[hidetitleads\]/.test($postbody) && ($(_$_[402]).before(_$_[901] + (tbline ? _$_[902] : _$_[1]) + _$_[903] + (tbline ? _$_[904] : _$_[1]) +
            _$_[642]), $(_$_[905]).html($(_$_[900]).detach()), !hecpt && $(_$_[400]).length && ($(_$_[907]).prepend(_$_[906] + $(_$_[400]).html() + _$_[94]), $(_$_[400]).remove()), $(_$_[908]).length)) {
        var len = $(_$_[909]).length ? 3 : 8;
        $(_$_[908]).RCWid({
            maxPosts: len,
            maxPostsPerTag: 9,
            ShowImage: !1,
            ShowComment: !0,
            random: _$_[238] === blinest,
            tags: /(recent|random)/.test(blinest) ? [] : null,
            ShowAuthor: !1
        })
    }
    if ($(_$_[910]).length && !/\[hidebottomads\]/.test($postbody) && ($(_$_[914]).before(_$_[911] + (bbline ? _$_[902] : _$_[1]) + _$_[22] + (bbline ?
            _$_[912] : _$_[1]) + _$_[913]), $(_$_[915]).html($(_$_[910]).detach()), $(_$_[916]).length && $(_$_[916]).RCWid({
            maxPosts: 5,
            maxPostsPerTag: 9,
            ShowImage: !0,
            ShowComment: !0,
            random: _$_[238] === btlinest,
            tags: /(recent|random)/.test(btlinest) ? [] : null,
            ShowAuthor: !1
        })), /\[(hidetitleads|hideendads)\]/.test($postbody) && $(_$_[402]).html($postbody.replace(/\[(hidetitleads|hideendads)\]/g, _$_[1])), $postbody = $(_$_[402]).html(), /\[next\]/.test($postbody)) {
        $(_$_[851]).prepend(_$_[917]), $(_$_[914]).before(_$_[918]), $(_$_[402]).prepend(_$_[920]).append(_$_[919]);
        var pbodyhtml = $(_$_[402]).html();
        $(_$_[402]).html(pbodyhtml.replace(/\[fnt\]/g, _$_[922]).replace(/\[next\]/g, _$_[921]).replace(/\[lnt\]/g, _$_[94]));
        var show_per_page = 1,
            $this = $(_$_[851]);
        contentnya = $this.find(_$_[402]), number_of_items = contentnya.children().length, number_of_pages = Math.ceil(number_of_items / show_per_page), pageplace = $this.find(_$_[923]), curpagenya = $this.find(_$_[924]), perpagenya = $this.find(_$_[925]), curpagenya.val(0), perpagenya.val(show_per_page);
        for (var navigation_html = _$_[926], current_link =
                0; number_of_pages > current_link;) navigation_html += _$_[927] + current_link + _$_[928] + current_link + _$_[22] + (current_link + 1) + _$_[77], current_link++;
        navigation_html += _$_[929], pageplace.html(navigation_html), pageplace.find(_$_[931]).addClass(_$_[930]), contentnya.children().css(_$_[180], _$_[932]), contentnya.children().slice(0, show_per_page).css(_$_[180], _$_[181]);
        var go_to_page = function (_) {
            var t = parseInt(perpagenya.val());
            start_from = _ * t, end_on = start_from + t, contentnya.children().css(_$_[180], _$_[932]).slice(start_from,
                end_on).css(_$_[180], _$_[181]), $this.find(_$_[934] + _ + _$_[935]).addClass(_$_[930]).siblings(_$_[933]).removeClass(_$_[930]), curpagenya.val(_), $(_$_[205]).animate({
                scrollTop: $(_$_[402]).offset().top - 80
            }, 1E3)
        };
        $this.find(_$_[937]).on(_$_[9], function () {
            var _ = $this.find(_$_[933]);
            return new_page = parseInt(curpagenya.val()) - 1, 1 == _.prev(_$_[936]).length && go_to_page(new_page), !1
        }), $this.find(_$_[938]).on(_$_[9], function () {
            var _ = $this.find(_$_[933]);
            return new_page = parseInt(curpagenya.val()) + 1, 1 == _.next(_$_[936]).length &&
                go_to_page(new_page), !1
        }), $this.find(_$_[936]).on(_$_[9], function () {
            var _ = $(this).attr(_$_[939]);
            return go_to_page(_), !1
        }), $this.find(_$_[940]).on(_$_[9], function () {
            return $(this).attr(_$_[939]), contentnya.children().css(_$_[180], _$_[181]), pageplace.hide(), $(_$_[205]).animate({
                scrollTop: $(_$_[402]).offset().top - 80
            }, 1E3), !1
        })
    }
    $(_$_[954]).each(function () {
            var _ = $(this).attr(_$_[699]);
            $(this).attr(_$_[699], _.replace(/\/s[0-9]+(\-c)?\//, _$_[953])).addClass(_$_[426])
        }), $(_$_[507]).append(_$_[955]), $(_$_[956]).append($(_$_[417])),
        $(_$_[417]).myTab(), 1 == $(_$_[957]).length && $(_$_[958]).hide(), $(_$_[964]).each(function () {
            var _ = $(this),
                t = _.attr(_$_[44]),
                e = _.parent(_$_[28]),
                a = _.parents(_$_[959]);
            null == t && _$_[1] == t || !/\{featured\}/.exec(t) || (_.attr(_$_[44], t.replace(/\{featured\}/, _$_[1])), e.length ? e.addClass(_$_[960]) : _.addClass(_$_[960]), a.length && (a.addClass(_$_[556]), _ = a.find(_$_[961]).text(), a.find(_$_[963]).append(_$_[962] + _ + _$_[105])))
        });
    var txtnyaaa = $(_$_[402]).html(),
        imgjd = [],
        pfeat = (imgjd = /<amp-img\s+[^>]*src="([^"]*)"[^>]*>/.exec(txtnyaaa),
            $(_$_[963]));
    if (pfeat.length) $(_$_[963]).each(function () {
        $(_$_[965]).append($(this))
    }), 1 < pfeat.length && ($(_$_[965]).wrapInner(_$_[966]), $(_$_[967]).owlCarousel({
        nav: !0,
        navText: [_$_[1], _$_[1]],
        loop: !0,
        responsiveClass: !0,
        autoplayHoverPause: !0,
        smartSpeed: 500,
        items: 1,
        responsiveRefreshRate: 500
    }).addClass(_$_[561]));
    else if (null != imgjd && imgjd.index <= 480 && fpost) {
        var img = $(_$_[964]).first(),
            par = img.parent(_$_[28]),
            pars = img.parents(_$_[959]),
            gpars = img.parents(_$_[968]),
            pars2 = img.parents(_$_[969]);
        if (!gpars.length) {
            if ($(_$_[965]).append(par.length ?
                    par : img), pars2.addClass(_$_[556]), pars.length) {
                var text = pars.find(_$_[961]).text();
                $(_$_[970]).append(_$_[962] + text + _$_[105]), pars.addClass(_$_[556])
            }
            $(_$_[971]).length && $(_$_[971]).removeAttr(_$_[78])
        }
    }
    var link = $(_$_[852]).attr(_$_[108]);
    $(_$_[401]).after(_$_[974] + link + _$_[975]), $(_$_[977]).click(function () {
        var _ = $(this);
        return _.hasClass(_$_[18]) ? ($(_$_[976]).hide(), _.removeClass(_$_[18])) : (_.addClass(_$_[18]), $(_$_[976]).show().children().focus().select()), !1
    }), $(_$_[979]).addClass(_$_[978])
}
$(_$_[980]).each(function () {
    $(this).html($(this).html().replace(rgx[16], _$_[1]))
});
var $outer = $(_$_[981]),
    $contact = $(_$_[982]);
$(_$_[984]).click(function () {
    return $contact.hasClass(_$_[583]) || ($contact.addClass(_$_[583]), $outer.addClass(_$_[983])), !1
}), $(_$_[985]).click(function () {
    return $contact.removeClass(_$_[583]), $outer.removeClass(_$_[983]), !1
}), $(document).on(_$_[9], function (_) {
    $(_.target).is(_$_[986]) || ($contact.removeClass(_$_[583]), $outer.removeClass(_$_[983]))
}), $(_$_[988]).each(function () {
    var _ = $(this);
    _.parents(_$_[503]), _ = _.html(), $(_$_[987]).append(_)
}), $(_$_[1009]).one(_$_[590], function () {
    var _ = $(this),
        e =
        _.find(_$_[35]),
        t = e.text();
    if (/grid/g.test(t)) t = t.replace(/grid\//g, _$_[1]), _.addClass(_$_[581]), e.RCWid({
        maxPosts: 4,
        random: _$_[238] === t,
        review: !hrev,
        ShowTags: !!/(recent|random)/.test(t),
        tags: /(recent|random)/.test(t) ? null : t.split(_$_[217])
    }).addClass(_$_[989]), e.append(_$_[990] + (_$_[238] === t ? _$_[991] : _$_[1]) + _$_[992] + (_$_[220] === t ? _$_[1] : _$_[221] + t) + _$_[222] + Npage + _$_[993]).addClass(_$_[132]);
    else if (/mcarousel/g.test(t)) {
        var a = _.parents(_$_[987]);
        t = t.replace(/mcarousel\//g, _$_[1]), _.addClass(_$_[581]),
            e.RCWid({
                maxPosts: 9,
                random: _$_[238] === t,
                review: !hrev,
                auto: aplay,
                postType: a.length ? _$_[1] : _$_[234],
                ShowTags: !!/(recent|random)/.test(t),
                tags: /(recent|random)/.test(t) ? null : t.split(_$_[217])
            }).addClass(_$_[989]), e.append(_$_[990] + (_$_[238] === t ? _$_[991] : _$_[1]) + _$_[992] + (_$_[220] === t ? _$_[1] : _$_[221] + t) + _$_[222] + Npage + _$_[993]).addClass(_$_[994])
    } else if (/mtab/g.test(t)) {
        a = (t = t.replace(/mtab\//g, _$_[1])).split(_$_[217]), t = _$_[995];
        for (var s = 0; s < a.length; s++) t += _$_[256] + a[s] + _$_[22] + a[s] + _$_[94];
        e.html(t +
            _$_[94]), e.find(_$_[996]).myTab(), _.addClass(_$_[581]), e.find(_$_[260]).each(function () {
            var _ = $(this).text();
            $(this).RCWid({
                maxPosts: 4,
                review: !hrev,
                tags: _.split(_$_[217])
            }).addClass(_$_[989]), $(this).append(_$_[997] + _ + _$_[222] + Npage + _$_[993])
        }), e.addClass(_$_[998])
    } else /mbig/g.test(t) ? (t = t.replace(/mbig\//g, _$_[1]), _.addClass(_$_[581]), e.RCWid({
        maxPosts: 7,
        random: _$_[238] === t,
        maxPostsPerTag: /(recent|random)/.test(t) || 1 == t.split(_$_[217]).length ? 7 : 4,
        tags: /(recent|random)/.test(t) ? null : t.split(_$_[217]),
        fbig: !0,
        review: !hrev,
        summary: 100
    }), e.append(_$_[990] + (_$_[238] === t ? _$_[991] : _$_[1]) + _$_[992] + (_$_[220] === t ? _$_[1] : _$_[221] + t) + _$_[222] + Npage + _$_[993]).addClass(_$_[999])) : /links/g.test(t) && (_.addClass(_$_[581]), e.html(_$_[1]), e.addClass(_$_[1E3]), _ = $(_$_[1001]), $(_$_[1002]).hide(), _.each(function () {
        var _ = $(this).children(_$_[216]).html(),
            t = $(this).children(_$_[835]).html();
        e.append(_$_[1003] + _ + _$_[1004] + t + _$_[642])
    }), e.find(_$_[835]).each(function () {
        if (texnya = $(this).text(), /gridpost/g.test(texnya)) {
            var _ =
                $(this).parents(_$_[987]),
                t = texnya.replace(/gridpost\//g, _$_[1]).replace(/(\r\n|\n|\r)/gm, _$_[1]);
            $(this).RCWid({
                maxPosts: 4,
                random: _$_[238] === t,
                ShowTags: !!/(recent|random)/.test(t),
                review: !hrev,
                postType: _.length ? _$_[1] : _$_[234],
                tags: /(recent|random)/.test(t) ? null : t.split(_$_[217])
            }).addClass(_$_[989]), (_ = $(this).parent(_$_[1005])).addClass(_$_[1006]), _$_[238] !== t && (_.find(_$_[216]).wrapInner(_$_[1007] + (_$_[220] === t ? _$_[1] : _$_[221] + t) + _$_[222] + Npage + _$_[224]), _.find(_$_[216]).append(_$_[1008] + (_$_[220] ===
                t ? _$_[1] : _$_[221] + t) + _$_[222] + Npage + _$_[22] + mtx + _$_[77]))
        }
    }))
}), $(_$_[1011]).html($(_$_[1010]).html()), $(_$_[1013]).html($(_$_[1012]).html()), $(_$_[1015]).click(function () {
    var _ = $(this).parent(_$_[35]).children(_$_[37]);
    return _.is(_$_[1014]) ? (_.slideDown(), $(this).addClass(_$_[18])) : (_.slideUp(), $(this).removeClass(_$_[18])), !1
}), $(_$_[987]).css({
    "max-height": $(window).height() - 140
});
var maxSummaryLength = sumLength,
    olderLink = _$_[1016] + ptx + _$_[1017],
    newerLink = _$_[1018] + ntx + _$_[1017],
    defaultImage = _$_[776],
    getThumb = function (_, t) {
        var e, a = t;
        e = _.content.$t;
        try {
            a = _.media$thumbnail.url
        } catch (_$0) {
            a = rgx[6].test(e) || rgx[8].test(e) ? (a = rgx[6].exec(rgx[6]), e = rgx[8].exec(e), _$_[53] + (null != a ? a[5] : e[3]) + _$_[51]) : rgx[5].test(e) ? (e = rgx[5].exec(e))[4] : t
        }
        return a
    },
    setLink = function (_, t, e, a) {
        var s = a.published.$t.match(/\d+/g);
        s = new Date(s[0], s[1] - 1, s[2], s[3], s[4], s[5]), e = getThumb(a, e);
        var i = $(_).attr(_$_[27]);
        if ((n = (n = _$_[108] in a ? a.content.$t : _$_[109] in a ? a.summary.$t : _$_[1]).replace(rgx[15], _$_[1]).replace(rgx[16], _$_[1]).replace(/"/g, _$_[73])).length > maxSummaryLength) var r = (n = n.substring(0, maxSummaryLength)).lastIndexOf(_$_[76]),
            n = n.substring(0, r) + _$_[115];
        t = t.replace(/\[title\]/g, a.title.$t).replace(/\[date\]/g, s.toLocaleDateString().replace(/\[datetime\]/g, s.toLocaleString().replace(/\[summary\]/g, n)).replace(/\[thumburl\]/g, e)).replace(/\[url\]/g, i), s = _$_[1], _$_[1] != e && (s = _$_[1019] + e + _$_[22]), t =
            t.replace(/\[amp-img\]/g, s), $(_).replaceWith(t)
    },
    setOlderLink = function (_) {
        setLink(_$_[1020], olderLink, defaultImage, _)
    },
    setNewerLink = function (_) {
        setLink(_$_[1021], newerLink, defaultImage, _)
    };
$(_$_[1024]).each(function () {
    var _ = $(this).attr(_$_[44]),
        t = $(this).attr(_$_[1022]);
    $(_$_[1023]).replaceText(_, t)
});
var target, scroll, lastScrollTop = 0;
$(window).on(_$_[1025], function () {
    var _ = $(this).scrollTop();
    fixM && (_ >= $(_$_[1026]).height() + 60 ? ($(_$_[1028]).addClass(_$_[1027]), lastScrollTop < _ ? $(_$_[1026]).hasClass(_$_[1029]) && $(_$_[1026]).removeClass(_$_[1029]) : $(_$_[1026]).addClass(_$_[1029]), lastScrollTop = _) : $(_$_[1028]).removeClass(_$_[1027]), $(_$_[1031]).hasClass(_$_[1030]) || $(_$_[1031]).addClass(_$_[1030])), sSide && 960 < $(this).width() && (1 < $(_$_[206]).width() && stickside($(_$_[206]), _$_[1032], _), 1 < $(_$_[1033]).width() && stickside($(_$_[1033]),
        _$_[1032], _), $(_$_[1031]).hasClass(_$_[1034]) || $(_$_[1031]).addClass(_$_[1034]));
    var t, e, a, s, i, r, n, o, l, d = $(_$_[518]).length;
    if ($(_$_[1035]).length < d) {
        var c = 1 <= _;
        $(_$_[518]).each(function () {
            if (!$(this).hasClass(_$_[275])) {
                var _ = $(this),
                    t = _.children(_$_[835]),
                    e = _.find(_$_[844]),
                    a = t.text();
                c && ldwid(e, _, t, a)
            }
        })
    }
    if ($(_$_[1036]).length || fbsdk(), $(_$_[354]).length && $(_$_[509]).hasClass(_$_[1037]) && $(_$_[1038]).length && !$(_$_[354]).hasClass(_$_[1039]) && ((l = (o = document).createElement(_$_[261])).src = _$_[95] +
            dsqsn + _$_[1040], l.setAttribute(_$_[1041], +new Date), (o.head || o.body).appendChild(l), $(_$_[354]).addClass(_$_[1039])), $(_$_[1042]).length && $(_$_[1043]).length && !$(_$_[1042]).hasClass(_$_[1044])) {
        var h = $(_$_[1042]).attr(_$_[44]);
        t = window.SPOTIM = {}, e = document, a = _$_[1045], n = (s = e.getElementsByTagName(_$_[261]))[s.length - 1].parentNode, t.spotId = h, i = t.parentElement = n, (r = e.createElement(_$_[261])).type = _$_[408], r.async = !0, r.src = (_$_[410] === e.location.protocol ? _$_[409] : _$_[80]) + _$_[1046] + a, (i || e.body || e.head).appendChild(r),
            $(_$_[1042]).addClass(_$_[1044])
    }
    $(_$_[1047]).length && !$(_$_[1048]).length && socialct($(_$_[851])), (d = $(_$_[146]).attr(_$_[44])) && _$_[1] != d && $(_$_[512]).hasClass(_$_[156]) && !$(_$_[1050]).hasClass(_$_[1049]) && ($(_$_[1050]).addClass(_$_[1049]), $.getJSON(_$_[1051] + encodeURIComponent(d) + _$_[1052], function (_) {
        1 < (_ = parseInt(_.feed.openSearch$totalResults.$t)) ? $.getJSON(_$_[1053] + (_ - 1) + _$_[1054], function (_) {
            setNewerLink(_.feed.entry[0]), 1 < parseInt(_.feed.openSearch$totalResults.$t) - parseInt(_.feed.openSearch$startIndex.$t) &&
                setOlderLink(_.feed.entry[2])
        }) : $.getJSON(_$_[1055], function (_) {
            setOlderLink(_.feed.entry[0])
        })
    })), $(_$_[1056]).length && !$(_$_[1057]).length && $(_$_[1056]).each(function () {
        $(this).attr(_$_[78], _$_[1058] + $(this).attr(_$_[49]) + _$_[1059]), $(this).removeAttr(_$_[49]), $(this).addClass(_$_[1060])
    }), 250 <= _ ? $(_$_[1062]).addClass(_$_[1061]) : $(_$_[1062]).removeClass(_$_[1061]), shreco && $(_$_[1063]).length && $(_$_[512]).hasClass(_$_[156]) && ($(_$_[1064]).length || ($(_$_[981]).append(_$_[1065] + recotx + _$_[1066]), $(_$_[1067]).RCWid({
        maxPosts: 2,
        maxPostsPerTag: 4,
        ShowComment: !0,
        ShowImage: !0,
        ShowDesc: !1,
        summary: 100,
        ShowAuthor: hauthor
    }), $(_$_[1070]).on(_$_[9], function () {
        return $(_$_[1064]).hasClass(_$_[1068]) ? $(_$_[1064]).removeClass(_$_[1068]).addClass(_$_[1069]) : $(_$_[1064]).addClass(_$_[1068]), !1
    })), _ > $(_$_[1071]).offset().top - 400 && _ < $(_$_[1072]).offset().top - $(_$_[1072]).height() && 960 < $(this).width() ? $(_$_[1064]).addClass(_$_[1068]) : $(_$_[1064]).removeClass(_$_[1068])), shrel && 1 < _ && !$(_$_[1074]).hasClass(_$_[1073]) && $(_$_[1074]).RCWid({
        maxPosts: _$_[359] ===
            relst ? mx.rl : _$_[1076] === relst ? mx.fb1 : 6,
        maxPostsPerTag: 6,
        auto: aplay,
        postType: _$_[359] === relst ? _$_[234] : _$_[1],
        ShowDesc: _$_[1076] === relst
    }).addClass(_$_[1075] + relst)
}), $(_$_[1063]).each(function () {
    var e, a = 1,
        s = $(this);
    e = $(this).text().replace(/(\r\n|\n|\r)/gm, _$_[1]), $(_$_[1079]).each(function () {
        var _, t = $(this);
        _ = t.attr(_$_[44]).replace(/(\r\n|\n|\r)/gm, _$_[1]), a = t.attr(_$_[1077]), e !== _ || s.attr(_$_[1078]) || s.attr(_$_[1078], a)
    })
}), $(_$_[1084]).on(_$_[9], function (_) {
    location.pathname.replace(/^\//, _$_[1]) ==
        this.pathname.replace(/^\//, _$_[1]) && location.hostname == this.hostname && (target = (target = $(this.hash)).length ? target : $(_$_[1080] + this.hash.slice(1) + _$_[935])).length && (_$_[1081] == typeof document.body.style.transitionProperty ? (_.preventDefault(), (_ = $(document).height() - $(window).height()) < (scroll = target.offset().top) && (scroll = _), $(_$_[153]).css({
            "margin-top": $(window).scrollTop() - scroll + _$_[297],
            transition: _$_[1083]
        }).data(_$_[1082], !0)) : $(_$_[205]).animate({
            scrollTop: scroll
        }, 1E3))
}), $(_$_[153]).on(_$_[1085],
    function (_) {
        _.target == _.currentTarget && !0 === $(this).data(_$_[1082]) && ($(this).removeAttr(_$_[78]).data(_$_[1082], !1), $(_$_[205]).scrollTop(scroll))
    }), $(window).on(_$_[1086], function () {
    $(_$_[1088]).each(function () {
        $(this).width() < 680 ? $(this).addClass(_$_[1087]) : $(this).removeClass(_$_[1087])
    }), (r = (t = $(_$_[154])).width()) < 680 ? t.addClass(_$_[1089]) : t.removeClass(_$_[1089]), $(_$_[1090]).length || $(_$_[1092]).append($(_$_[1091])), $(_$_[1093]).length && (r = $(_$_[1094]).width(), $(_$_[1095]).css({
        width: r
    }));
    var _ = $(window).width(),
        t = $(_$_[1096]).height(),
        e = $(_$_[1097]).height(),
        a = $(_$_[207]).height(),
        s = $(_$_[1098]).height(),
        i = $(_$_[209]).height(),
        r = $(_$_[1033]).width();
    960 < _ ? (t < (_ = e + a + s + i) ? $(_$_[1096]).css(_$_[1099], _ + _$_[297]) : $(_$_[1096]).css(_$_[1099], _$_[301]), r < 100 && $(_$_[1033]).addClass(_$_[556])) : ($(_$_[1096]).css(_$_[1099], _$_[301]), 100 < r && $(_$_[1033]).removeClass(_$_[556]))
}).trigger(_$_[1086]);
var Bamboo = function (t, _) {
    function e(_) {
        for (i in this.options = {
                menu: !0,
                breakpoint: 1E3,
                menuWidth: 300,
                headerHeight: 50,
                snapThreshold: null,
                resize: null
            }, _) this.options[i] = _[i];
        this.resizeSite(), $(t).on(c, this.resizeSite.bind(this)), n.on(h, this._move.bind(this)), r.on(p, this._end.bind(this))
    }
    $(_$_[1106]);
    var a, s, r = $(_$_[981]),
        n = r.parent().children(_$_[1107]),
        o = (s = !1, _$_[1108] in t || t.DocumentTouch && _ instanceof DocumentTouch ? (s = !0, $(_$_[153]).addClass(_$_[1109])) : $(_$_[153]).addClass(_$_[16]), s),
        l = (a = 0, navigator.userAgent.match(/(iPhone|iPod)/i) &&
            -1 != navigator.userAgent.indexOf(_$_[1110]) && -1 == navigator.userAgent.indexOf(_$_[1111]) && (a = 60), _$_[1112] in t.navigator && t.navigator.standalone && (a = 0), a),
        c = _$_[1114] in t ? _$_[1115] : _$_[1086],
        p = o ? _$_[1120] : _$_[1121];
    return e.prototype = {
        info: {},
        x: 0,
        dx: 0,
        ox: null,
        tgt: null,
        desktop: !1,
        dimensions: function () {
            return [this.info.docWidth, this.info.docHeight]
        },
        offset: function () {
            return l
        },
        resizeSite: function () {
            this.info.docHeight = $(t).height(), this.info.docWidth = $(t).width(), this.layout(), this.snapThreshold = null ===
                this.options.snapThreshold ? Math.round(.25 * this.info.docWidth) : /%/.test(this.options.snapThreshold) ? Math.round(this.info.docWidth * this.options.snapThreshold.replace(_$_[71], _$_[1]) / 100) : this.options.snapThreshold, this.options.resize && this.options.resize()
        },
        layout: function () {
            this.desktop = !(this.info.docWidth < this.options.breakpoint)
        },
        _move: function (_) {
            if (this.initiated && !this.desktop && this.options.menu) {
                var t = o ? _.originalEvent.touches[0] : _;
                this.stepsX += Math.abs(t.pageX - this.pointX), this.stepsY += Math.abs(t.pageY -
                    this.pointY), this.stepsX < 10 && this.stepsY < 10 || (!this.directionLocked && this.stepsY > this.stepsX ? this.initiated = !1 : (_.preventDefault(), this.directionLocked = !0, this.ox && (_ = parseInt(t.pageX) - this.ox, this.dx = _ - this.x, this.x = _, this._moveContainer(_))))
            }
        },
        _end: function (_) {
            this.initiated && !this.desktop && this.options.menu && (_ = parseInt((o ? _.originalEvent.changedTouches[0] : _).pageX) - parseInt(this.ox), this.dx <= 0 && !this.tgt.is(_$_[1123]) ? this._animateTo(_, 0) : this._animateTo(_, this.options.menuWidth), 0 === this.dx &&
                0 === _ && this.tgt.is(_$_[1106]) && this._animateTo(this.options.menuWidth, this.options.menuWidth), this.ox = null, this.dx = 0, this.initiated = !1)
        },
        _animateTo: function (_, t) {
            n.css({
                "transition-duration": Math.floor(100 * _ / this.snapThreshold) + _$_[1124],
                transform: _$_[1125] + t + _$_[1126] + d
            }), this._toggleCover(t)
        },
        _moveContainer: function (_) {
            n.css({
                transform: _$_[1125] + _ + _$_[1126] + d
            })
        },
        _toggleCover: function (_) {
            _ > this.options.menuWidth - 50 ? (r.addClass(_$_[1127]), $(_$_[1129]).addClass(_$_[1128])) : (r.removeClass(_$_[1127]),
                $(_$_[1129]).removeClass(_$_[1128]))
        }
    }, e
}
