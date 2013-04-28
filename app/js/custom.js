(function (global) {
    var pages = [];
    var pageCount = 0;
    global.onload = function() {
        var body = $("body");
        $("div[data-role='page']").each(function (e) {
            pages.push(this.id);
            $("<iframe src='content/" + this.id + ".md'></iframe>").appendTo(body);
        });

        global.addEventListener("message", function(e) {
            var id = pages[pageCount];
            var elm = document.getElementById(id);
            var hash = global.location.hash;
            elm.innerHTML = new Markdown.Converter().makeHtml(e.data);
            if (!hash && pageCount === 0 || hash === "#" + id) {
                    $(elm).trigger('pagecreate');
            }
            pageCount += 1;
        }, false);
        setTimeout(function () {
            $("iframe").each(function () {
                this.contentWindow.postMessage(null, "*");
            });
        }, 100);
    };
}(this));