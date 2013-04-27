(function (global, undef) {
    //load pagesList
    //convert pagesList to a data structure (separate by \n then replace \s+ with _
    //create divs
    //create iframes
    //run loadPages
    var body = null;
    var pages = null;
    var pageCount = 0;

    function handlePage(event) {
        var id = pages[pageCount];
        var elm = $("<div data-role='page' id='" + id + "'></div>");
        var hash = global.location.hash;
        pageCount += 1;
        if (pageCount < pages.length) {
            elm.html(new Markdown.Converter().makeHtml(event.data)).appendTo(body);
        }
        if (!hash && pageCount === 1 || hash === "#" + id) {
            $(elm).trigger('pagecreate');
        }

    }

    function loadPages() {
        global.addEventListener("message", handlePage, false);
//        $.each(pages, function (i, pageName) {
//            $("<iframe src='content/%s.md'></iframe>".replace(/%s/g, pageName))
//                .appendTo(body).get(0).contentWindow.postMessage(null, "*");
//        });
        $("iframe").each(function () {
            this.contentWindow.postMessage(null, "*");
        });
    }

    function loadPagesList() {
        var pageList = document.getElementById("pagesList");
        body = document.getElementsByTagName("body")[0];
        global.addEventListener("message", function handlePagesList(event) {
            if (!pages) {
                pages = $.map(event.data.replace(/^\s+|\s+$/g, "").split(/\n/), function (pageName) {
                    return pageName ? pageName.replace(/\s+/g, "_") : undef;
                });
                $(pageList).remove();
                setTimeout(loadPages, 100);
            }
        }, false);
        pageList.contentWindow.postMessage(null, "*");
    }

    global.onload = loadPagesList;
}(this));