var ShrinkToViewport = function(el, options) {
    var win    = window,
        cnt    = options.container || el.parentNode,
        offset = options.offset || 0;

    function updateSize() {
        var height = parseInt(el.style.maxHeight),
            bottom = Math.min(
                win.innerHeight + win.pageYOffset,
                cnt.offsetTop + cnt.clientHeight
            ),
            newHeight = bottom - el.offsetTop - offset;

        if (win.pageYOffset > el.offsetTop) {
            newHeight -= (win.pageYOffset - el.offsetTop);
        }

        if (height !== newHeight) {
            el.style.maxHeight = newHeight + 'px';
        }
    }
    updateSize();

    win.addEventListener('scroll', updateSize);
    win.addEventListener('resize', updateSize);
    win.addEventListener('orientationchange', updateSize);

    return {
        update: function() {
            updateSize();
        }
    };
};
