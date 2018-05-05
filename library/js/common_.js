// 便利関数定義

var importJs = function (src) {
    document.write('<script src="' + src + '"><\/script>');
};
var execJs = function (src) {
    var script = document.createElement('script');
    script.innerHTML = src;
    document.body.appendChild(script);
};
var importJsList = function (list) {
    for (var key in list) {
        importJs(list[key]);
    };
};
var inherits = function (childCtor, parentCtor) {
    Object.setPrototypeOf(childCtor.prototype, parentCtor.prototype);
};
var toHms = function (t) {
    var hms = "";
    var h = t / 3600 | 0;
    var m = t % 3600 / 60 | 0;
    var s = t % 60;

    if (h != 0) {
        hms = h + ":" + padZero(m) + ":" + padZero(s);
    } else if (m != 0) {
        hms = m + ":" + padZero(s);
    } else {
        hms = s;
    }

    return hms;

    function padZero(v) {
        if (v < 10) {
            return "0" + v;
        } else {
            return v;
        }
    }
};
var co = function (gfn) {
    return function () {
        var gen = gfn.apply(this, arguments);
        return new Promise(function (ok, ng) {
            function chain(v) {
                var r = gen.next(v);
                Promise.resolve(r.value).then(r.done ? ok : chain).catch(ng)
            }
            chain();
        })
    }
};
var waitForSeconds = function (second) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, second * 1000);
    });
};
importJs('../js/import.js');