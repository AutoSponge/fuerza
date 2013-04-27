(function (global) {
    //Take the content of the last script tag and message the src file's contents to global
    var scripts = document.getElementsByTagName("script");
    var script = scripts[ scripts.length - 1 ].innerHTML;
    global.addEventListener("message", function(e) {
        e.source.postMessage(scripts[ scripts.length - 1 ].innerHTML, "*");
    }, false);
}(this));