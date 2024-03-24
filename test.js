var a0 = Object.defineProperty;
var l0 = (e,t,n)=>t in e ? a0(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var T = (e,t,n)=>(l0(e, typeof t != "symbol" ? t + "" : t, n),
n);
import {M as iu} from "./constants.f18ceb82.js";
function u0(e, t) {
    return t.forEach(function(n) {
        n && typeof n != "string" && !Array.isArray(n) && Object.keys(n).forEach(function(r) {
            if (r !== "default" && !(r in e)) {
                var o = Object.getOwnPropertyDescriptor(n, r);
                Object.defineProperty(e, r, o.get ? o : {
                    enumerable: !0,
                    get: function() {
                        return n[r]
                    }
                })
            }
        })
    }),
    Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
const c0 = function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o=>{
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
        o.crossorigin === "use-credentials" ? i.credentials = "include" : o.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
};
c0();
function bm(e) {
    if (e.__esModule)
        return e;
    var t = Object.defineProperty({}, "__esModule", {
        value: !0
    });
    return Object.keys(e).forEach(function(n) {
        var r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, r.get ? r : {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    }),
    t
}
var C = {
    exports: {}
}
  , le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms = Symbol.for("react.element")
  , d0 = Symbol.for("react.portal")
  , p0 = Symbol.for("react.fragment")
  , f0 = Symbol.for("react.strict_mode")
  , h0 = Symbol.for("react.profiler")
  , m0 = Symbol.for("react.provider")
  , g0 = Symbol.for("react.context")
  , v0 = Symbol.for("react.forward_ref")
  , y0 = Symbol.for("react.suspense")
  , x0 = Symbol.for("react.memo")
  , C0 = Symbol.for("react.lazy")
  , qp = Symbol.iterator;
function w0(e) {
    return e === null || typeof e != "object" ? null : (e = qp && e[qp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Sm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Em = Object.assign
  , Pm = {};
function Wo(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Pm,
    this.updater = n || Sm
}
Wo.prototype.isReactComponent = {};
Wo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Wo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Im() {}
Im.prototype = Wo.prototype;
function ed(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Pm,
    this.updater = n || Sm
}
var td = ed.prototype = new Im;
td.constructor = ed;
Em(td, Wo.prototype);
td.isPureReactComponent = !0;
var Jp = Array.isArray
  , km = Object.prototype.hasOwnProperty
  , nd = {
    current: null
}
  , Rm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Tm(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            km.call(t, r) && !Rm.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: ms,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: nd.current
    }
}
function A0(e, t) {
    return {
        $$typeof: ms,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function rd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ms
}
function b0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Zp = /\/+/g;
function su(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? b0("" + e.key) : t.toString(36)
}
function na(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ms:
            case d0:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + su(s, 0) : r,
        Jp(o) ? (n = "",
        e != null && (n = e.replace(Zp, "$&/") + "/"),
        na(o, t, n, "", function(u) {
            return u
        })) : o != null && (rd(o) && (o = A0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Zp, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Jp(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + su(i, a);
            s += na(i, t, n, l, o)
        }
    else if (l = w0(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = r + su(i, a++),
            s += na(i, t, n, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Rs(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return na(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function S0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var wt = {
    current: null
}
  , ra = {
    transition: null
}
  , E0 = {
    ReactCurrentDispatcher: wt,
    ReactCurrentBatchConfig: ra,
    ReactCurrentOwner: nd
};
le.Children = {
    map: Rs,
    forEach: function(e, t, n) {
        Rs(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Rs(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Rs(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!rd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
le.Component = Wo;
le.Fragment = p0;
le.Profiler = h0;
le.PureComponent = ed;
le.StrictMode = f0;
le.Suspense = y0;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E0;
le.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Em({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = nd.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            km.call(t, l) && !Rm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: ms,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
le.createContext = function(e) {
    return e = {
        $$typeof: g0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: m0,
        _context: e
    },
    e.Consumer = e
}
;
le.createElement = Tm;
le.createFactory = function(e) {
    var t = Tm.bind(null, e);
    return t.type = e,
    t
}
;
le.createRef = function() {
    return {
        current: null
    }
}
;
le.forwardRef = function(e) {
    return {
        $$typeof: v0,
        render: e
    }
}
;
le.isValidElement = rd;
le.lazy = function(e) {
    return {
        $$typeof: C0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: S0
    }
}
;
le.memo = function(e, t) {
    return {
        $$typeof: x0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
le.startTransition = function(e) {
    var t = ra.transition;
    ra.transition = {};
    try {
        e()
    } finally {
        ra.transition = t
    }
}
;
le.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
le.useCallback = function(e, t) {
    return wt.current.useCallback(e, t)
}
;
le.useContext = function(e) {
    return wt.current.useContext(e)
}
;
le.useDebugValue = function() {}
;
le.useDeferredValue = function(e) {
    return wt.current.useDeferredValue(e)
}
;
le.useEffect = function(e, t) {
    return wt.current.useEffect(e, t)
}
;
le.useId = function() {
    return wt.current.useId()
}
;
le.useImperativeHandle = function(e, t, n) {
    return wt.current.useImperativeHandle(e, t, n)
}
;
le.useInsertionEffect = function(e, t) {
    return wt.current.useInsertionEffect(e, t)
}
;
le.useLayoutEffect = function(e, t) {
    return wt.current.useLayoutEffect(e, t)
}
;
le.useMemo = function(e, t) {
    return wt.current.useMemo(e, t)
}
;
le.useReducer = function(e, t, n) {
    return wt.current.useReducer(e, t, n)
}
;
le.useRef = function(e) {
    return wt.current.useRef(e)
}
;
le.useState = function(e) {
    return wt.current.useState(e)
}
;
le.useSyncExternalStore = function(e, t, n) {
    return wt.current.useSyncExternalStore(e, t, n)
}
;
le.useTransition = function() {
    return wt.current.useTransition()
}
;
le.version = "18.2.0";
C.exports = le;
var bn = C.exports
  , ju = u0({
    __proto__: null,
    default: bn
}, [C.exports])
  , ef = {}
  , gs = {
    exports: {}
}
  , Ut = {}
  , Nm = {
    exports: {}
}
  , Lm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, $) {
        var B = N.length;
        N.push($);
        e: for (; 0 < B; ) {
            var Q = B - 1 >>> 1
              , X = N[Q];
            if (0 < o(X, $))
                N[Q] = $,
                N[B] = X,
                B = Q;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var $ = N[0]
          , B = N.pop();
        if (B !== $) {
            N[0] = B;
            e: for (var Q = 0, X = N.length, ce = X >>> 1; Q < ce; ) {
                var J = 2 * (Q + 1) - 1
                  , te = N[J]
                  , H = J + 1
                  , oe = N[H];
                if (0 > o(te, B))
                    H < X && 0 > o(oe, te) ? (N[Q] = oe,
                    N[H] = B,
                    Q = H) : (N[Q] = te,
                    N[J] = B,
                    Q = J);
                else if (H < X && 0 > o(oe, B))
                    N[Q] = oe,
                    N[H] = B,
                    Q = H;
                else
                    break e
            }
        }
        return $
    }
    function o(N, $) {
        var B = N.sortIndex - $.sortIndex;
        return B !== 0 ? B : N.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , f = null
      , p = 3
      , v = !1
      , x = !1
      , g = !1
      , P = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(N) {
        for (var $ = n(u); $ !== null; ) {
            if ($.callback === null)
                r(u);
            else if ($.startTime <= N)
                r(u),
                $.sortIndex = $.expirationTime,
                t(l, $);
            else
                break;
            $ = n(u)
        }
    }
    function y(N) {
        if (g = !1,
        d(N),
        !x)
            if (n(l) !== null)
                x = !0,
                V(A);
            else {
                var $ = n(u);
                $ !== null && K(y, $.startTime - N)
            }
    }
    function A(N, $) {
        x = !1,
        g && (g = !1,
        m(I),
        I = -1),
        v = !0;
        var B = p;
        try {
            for (d($),
            f = n(l); f !== null && (!(f.expirationTime > $) || N && !O()); ) {
                var Q = f.callback;
                if (typeof Q == "function") {
                    f.callback = null,
                    p = f.priorityLevel;
                    var X = Q(f.expirationTime <= $);
                    $ = e.unstable_now(),
                    typeof X == "function" ? f.callback = X : f === n(l) && r(l),
                    d($)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var ce = !0;
            else {
                var J = n(u);
                J !== null && K(y, J.startTime - $),
                ce = !1
            }
            return ce
        } finally {
            f = null,
            p = B,
            v = !1
        }
    }
    var E = !1
      , S = null
      , I = -1
      , R = 5
      , k = -1;
    function O() {
        return !(e.unstable_now() - k < R)
    }
    function W() {
        if (S !== null) {
            var N = e.unstable_now();
            k = N;
            var $ = !0;
            try {
                $ = S(!0, N)
            } finally {
                $ ? U() : (E = !1,
                S = null)
            }
        } else
            E = !1
    }
    var U;
    if (typeof h == "function")
        U = function() {
            h(W)
        }
        ;
    else if (typeof MessageChannel != "undefined") {
        var D = new MessageChannel
          , F = D.port2;
        D.port1.onmessage = W,
        U = function() {
            F.postMessage(null)
        }
    } else
        U = function() {
            P(W, 0)
        }
        ;
    function V(N) {
        S = N,
        E || (E = !0,
        U())
    }
    function K(N, $) {
        I = P(function() {
            N(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || v || (x = !0,
        V(A))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(N) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var $ = 3;
            break;
        default:
            $ = p
        }
        var B = p;
        p = $;
        try {
            return N()
        } finally {
            p = B
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, $) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var B = p;
        p = N;
        try {
            return $()
        } finally {
            p = B
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, $, B) {
        var Q = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay,
        B = typeof B == "number" && 0 < B ? Q + B : Q) : B = Q,
        N) {
        case 1:
            var X = -1;
            break;
        case 2:
            X = 250;
            break;
        case 5:
            X = 1073741823;
            break;
        case 4:
            X = 1e4;
            break;
        default:
            X = 5e3
        }
        return X = B + X,
        N = {
            id: c++,
            callback: $,
            priorityLevel: N,
            startTime: B,
            expirationTime: X,
            sortIndex: -1
        },
        B > Q ? (N.sortIndex = B,
        t(u, N),
        n(l) === null && N === n(u) && (g ? (m(I),
        I = -1) : g = !0,
        K(y, B - Q))) : (N.sortIndex = X,
        t(l, N),
        x || v || (x = !0,
        V(A))),
        N
    }
    ,
    e.unstable_shouldYield = O,
    e.unstable_wrapCallback = function(N) {
        var $ = p;
        return function() {
            var B = p;
            p = $;
            try {
                return N.apply(this, arguments)
            } finally {
                p = B
            }
        }
    }
}
)(Lm);
Nm.exports = Lm;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Om = C.exports
  , $t = Nm.exports;
function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Mm = new Set
  , Hi = {};
function Kr(e, t) {
    No(e, t),
    No(e + "Capture", t)
}
function No(e, t) {
    for (Hi[e] = t,
    e = 0; e < t.length; e++)
        Mm.add(t[e])
}
var $n = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined")
  , Hu = Object.prototype.hasOwnProperty
  , P0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , tf = {}
  , nf = {};
function I0(e) {
    return Hu.call(nf, e) ? !0 : Hu.call(tf, e) ? !1 : P0.test(e) ? nf[e] = !0 : (tf[e] = !0,
    !1)
}
function k0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function R0(e, t, n, r) {
    if (t === null || typeof t == "undefined" || k0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function At(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var st = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    st[e] = new At(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    st[t] = new At(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    st[e] = new At(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    st[e] = new At(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    st[e] = new At(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    st[e] = new At(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    st[e] = new At(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    st[e] = new At(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    st[e] = new At(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var od = /[\-:]([a-z])/g;
function id(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(od, id);
    st[t] = new At(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(od, id);
    st[t] = new At(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(od, id);
    st[t] = new At(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    st[e] = new At(e,1,!1,e.toLowerCase(),null,!1,!1)
});
st.xlinkHref = new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    st[e] = new At(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function sd(e, t, n, r) {
    var o = st.hasOwnProperty(t) ? st[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (R0(t, n, o, r) && (n = null),
    r || o === null ? I0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Qn = Om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ts = Symbol.for("react.element")
  , io = Symbol.for("react.portal")
  , so = Symbol.for("react.fragment")
  , ad = Symbol.for("react.strict_mode")
  , Wu = Symbol.for("react.profiler")
  , Bm = Symbol.for("react.provider")
  , Fm = Symbol.for("react.context")
  , ld = Symbol.for("react.forward_ref")
  , Qu = Symbol.for("react.suspense")
  , Gu = Symbol.for("react.suspense_list")
  , ud = Symbol.for("react.memo")
  , Zn = Symbol.for("react.lazy")
  , _m = Symbol.for("react.offscreen")
  , rf = Symbol.iterator;
function oi(e) {
    return e === null || typeof e != "object" ? null : (e = rf && e[rf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var $e = Object.assign, au;
function wi(e) {
    if (au === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            au = t && t[1] || ""
        }
    return `
` + au + e
}
var lu = !1;
function uu(e, t) {
    if (!e || lu)
        return "";
    lu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        lu = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? wi(e) : ""
}
function T0(e) {
    switch (e.tag) {
    case 5:
        return wi(e.type);
    case 16:
        return wi("Lazy");
    case 13:
        return wi("Suspense");
    case 19:
        return wi("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = uu(e.type, !1),
        e;
    case 11:
        return e = uu(e.type.render, !1),
        e;
    case 1:
        return e = uu(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ku(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case so:
        return "Fragment";
    case io:
        return "Portal";
    case Wu:
        return "Profiler";
    case ad:
        return "StrictMode";
    case Qu:
        return "Suspense";
    case Gu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Fm:
            return (e.displayName || "Context") + ".Consumer";
        case Bm:
            return (e._context.displayName || "Context") + ".Provider";
        case ld:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ud:
            return t = e.displayName || null,
            t !== null ? t : Ku(e.type) || "Memo";
        case Zn:
            t = e._payload,
            e = e._init;
            try {
                return Ku(e(t))
            } catch {}
        }
    return null
}
function N0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Ku(t);
    case 8:
        return t === ad ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function gr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Dm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function L0(e) {
    var t = Dm(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n != "undefined" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ns(e) {
    e._valueTracker || (e._valueTracker = L0(e))
}
function zm(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Dm(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ca(e) {
    if (e = e || (typeof document != "undefined" ? document : void 0),
    typeof e == "undefined")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Xu(e, t) {
    var n = t.checked;
    return $e({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : e._wrapperState.initialChecked
    })
}
function of(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = gr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function $m(e, t) {
    t = t.checked,
    t != null && sd(e, "checked", t, !1)
}
function Yu(e, t) {
    $m(e, t);
    var n = gr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? qu(e, t.type, n) : t.hasOwnProperty("defaultValue") && qu(e, t.type, gr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function sf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function qu(e, t, n) {
    (t !== "number" || Ca(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ai = Array.isArray;
function wo(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + gr(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Ju(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(_(91));
    return $e({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function af(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(_(92));
            if (Ai(n)) {
                if (1 < n.length)
                    throw Error(_(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: gr(n)
    }
}
function Vm(e, t) {
    var n = gr(t.value)
      , r = gr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function lf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Um(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Zu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Um(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ls, jm = function(e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ls = Ls || document.createElement("div"),
        Ls.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ls.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Wi(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ki = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , O0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ki).forEach(function(e) {
    O0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ki[t] = ki[e]
    })
});
function Hm(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ki.hasOwnProperty(e) && ki[e] ? ("" + t).trim() : t + "px"
}
function Wm(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Hm(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var M0 = $e({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ec(e, t) {
    if (t) {
        if (M0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(_(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(_(62))
    }
}
function tc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var nc = null;
function cd(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var rc = null
  , Ao = null
  , bo = null;
function uf(e) {
    if (e = xs(e)) {
        if (typeof rc != "function")
            throw Error(_(280));
        var t = e.stateNode;
        t && (t = nl(t),
        rc(e.stateNode, e.type, t))
    }
}
function Qm(e) {
    Ao ? bo ? bo.push(e) : bo = [e] : Ao = e
}
function Gm() {
    if (Ao) {
        var e = Ao
          , t = bo;
        if (bo = Ao = null,
        uf(e),
        t)
            for (e = 0; e < t.length; e++)
                uf(t[e])
    }
}
function Km(e, t) {
    return e(t)
}
function Xm() {}
var cu = !1;
function Ym(e, t, n) {
    if (cu)
        return e(t, n);
    cu = !0;
    try {
        return Km(e, t, n)
    } finally {
        cu = !1,
        (Ao !== null || bo !== null) && (Xm(),
        Gm())
    }
}
function Qi(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = nl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(_(231, t, typeof n));
    return n
}
var oc = !1;
if ($n)
    try {
        var ii = {};
        Object.defineProperty(ii, "passive", {
            get: function() {
                oc = !0
            }
        }),
        window.addEventListener("test", ii, ii),
        window.removeEventListener("test", ii, ii)
    } catch {
        oc = !1
    }
function B0(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Ri = !1
  , wa = null
  , Aa = !1
  , ic = null
  , F0 = {
    onError: function(e) {
        Ri = !0,
        wa = e
    }
};
function _0(e, t, n, r, o, i, s, a, l) {
    Ri = !1,
    wa = null,
    B0.apply(F0, arguments)
}
function D0(e, t, n, r, o, i, s, a, l) {
    if (_0.apply(this, arguments),
    Ri) {
        if (Ri) {
            var u = wa;
            Ri = !1,
            wa = null
        } else
            throw Error(_(198));
        Aa || (Aa = !0,
        ic = u)
    }
}
function Xr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            (t.flags & 4098) !== 0 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function qm(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function cf(e) {
    if (Xr(e) !== e)
        throw Error(_(188))
}
function z0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Xr(e),
        t === null)
            throw Error(_(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return cf(o),
                    e;
                if (i === r)
                    return cf(o),
                    t;
                i = i.sibling
            }
            throw Error(_(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(_(189))
            }
        }
        if (n.alternate !== r)
            throw Error(_(190))
    }
    if (n.tag !== 3)
        throw Error(_(188));
    return n.stateNode.current === n ? e : t
}
function Jm(e) {
    return e = z0(e),
    e !== null ? Zm(e) : null
}
function Zm(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Zm(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var eg = $t.unstable_scheduleCallback
  , df = $t.unstable_cancelCallback
  , $0 = $t.unstable_shouldYield
  , V0 = $t.unstable_requestPaint
  , He = $t.unstable_now
  , U0 = $t.unstable_getCurrentPriorityLevel
  , dd = $t.unstable_ImmediatePriority
  , tg = $t.unstable_UserBlockingPriority
  , ba = $t.unstable_NormalPriority
  , j0 = $t.unstable_LowPriority
  , ng = $t.unstable_IdlePriority
  , Ja = null
  , En = null;
function H0(e) {
    if (En && typeof En.onCommitFiberRoot == "function")
        try {
            En.onCommitFiberRoot(Ja, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var pn = Math.clz32 ? Math.clz32 : G0
  , W0 = Math.log
  , Q0 = Math.LN2;
function G0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (W0(e) / Q0 | 0) | 0
}
var Os = 64
  , Ms = 4194304;
function bi(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Sa(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = bi(a) : (i &= s,
        i !== 0 && (r = bi(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = bi(s) : i !== 0 && (r = bi(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if ((r & 4) !== 0 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - pn(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function K0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function X0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - pn(i)
          , a = 1 << s
          , l = o[s];
        l === -1 ? ((a & n) === 0 || (a & r) !== 0) && (o[s] = K0(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function sc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function rg() {
    var e = Os;
    return Os <<= 1,
    (Os & 4194240) === 0 && (Os = 64),
    e
}
function du(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function vs(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - pn(t),
    e[t] = n
}
function Y0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - pn(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function pd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - pn(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var Ce = 0;
function og(e) {
    return e &= -e,
    1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
}
var ig, fd, sg, ag, lg, ac = !1, Bs = [], lr = null, ur = null, cr = null, Gi = new Map, Ki = new Map, tr = [], q0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function pf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        lr = null;
        break;
    case "dragenter":
    case "dragleave":
        ur = null;
        break;
    case "mouseover":
    case "mouseout":
        cr = null;
        break;
    case "pointerover":
    case "pointerout":
        Gi.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Ki.delete(t.pointerId)
    }
}
function si(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = xs(t),
    t !== null && fd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function J0(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return lr = si(lr, e, t, n, r, o),
        !0;
    case "dragenter":
        return ur = si(ur, e, t, n, r, o),
        !0;
    case "mouseover":
        return cr = si(cr, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Gi.set(i, si(Gi.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Ki.set(i, si(Ki.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function ug(e) {
    var t = Or(e.target);
    if (t !== null) {
        var n = Xr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = qm(n),
                t !== null) {
                    e.blockedOn = t,
                    lg(e.priority, function() {
                        sg(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function oa(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = lc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            nc = r,
            n.target.dispatchEvent(r),
            nc = null
        } else
            return t = xs(n),
            t !== null && fd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function ff(e, t, n) {
    oa(e) && n.delete(t)
}
function Z0() {
    ac = !1,
    lr !== null && oa(lr) && (lr = null),
    ur !== null && oa(ur) && (ur = null),
    cr !== null && oa(cr) && (cr = null),
    Gi.forEach(ff),
    Ki.forEach(ff)
}
function ai(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ac || (ac = !0,
    $t.unstable_scheduleCallback($t.unstable_NormalPriority, Z0)))
}
function Xi(e) {
    function t(o) {
        return ai(o, e)
    }
    if (0 < Bs.length) {
        ai(Bs[0], e);
        for (var n = 1; n < Bs.length; n++) {
            var r = Bs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lr !== null && ai(lr, e),
    ur !== null && ai(ur, e),
    cr !== null && ai(cr, e),
    Gi.forEach(t),
    Ki.forEach(t),
    n = 0; n < tr.length; n++)
        r = tr[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < tr.length && (n = tr[0],
    n.blockedOn === null); )
        ug(n),
        n.blockedOn === null && tr.shift()
}
var So = Qn.ReactCurrentBatchConfig
  , Ea = !0;
function e1(e, t, n, r) {
    var o = Ce
      , i = So.transition;
    So.transition = null;
    try {
        Ce = 1,
        hd(e, t, n, r)
    } finally {
        Ce = o,
        So.transition = i
    }
}
function t1(e, t, n, r) {
    var o = Ce
      , i = So.transition;
    So.transition = null;
    try {
        Ce = 4,
        hd(e, t, n, r)
    } finally {
        Ce = o,
        So.transition = i
    }
}
function hd(e, t, n, r) {
    if (Ea) {
        var o = lc(e, t, n, r);
        if (o === null)
            wu(e, t, r, Pa, n),
            pf(e, r);
        else if (J0(o, e, t, n, r))
            r.stopPropagation();
        else if (pf(e, r),
        t & 4 && -1 < q0.indexOf(e)) {
            for (; o !== null; ) {
                var i = xs(o);
                if (i !== null && ig(i),
                i = lc(e, t, n, r),
                i === null && wu(e, t, r, Pa, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            wu(e, t, r, null, n)
    }
}
var Pa = null;
function lc(e, t, n, r) {
    if (Pa = null,
    e = cd(r),
    e = Or(e),
    e !== null)
        if (t = Xr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = qm(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Pa = e,
    null
}
function cg(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (U0()) {
        case dd:
            return 1;
        case tg:
            return 4;
        case ba:
        case j0:
            return 16;
        case ng:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var rr = null
  , md = null
  , ia = null;
function dg() {
    if (ia)
        return ia;
    var e, t = md, n = t.length, r, o = "value"in rr ? rr.value : rr.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return ia = o.slice(e, 1 < r ? 1 - r : void 0)
}
function sa(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Fs() {
    return !0
}
function hf() {
    return !1
}
function jt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Fs : hf,
        this.isPropagationStopped = hf,
        this
    }
    return $e(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Fs)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Fs)
        },
        persist: function() {},
        isPersistent: Fs
    }),
    t
}
var Qo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, gd = jt(Qo), ys = $e({}, Qo, {
    view: 0,
    detail: 0
}), n1 = jt(ys), pu, fu, li, Za = $e({}, ys, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vd,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== li && (li && e.type === "mousemove" ? (pu = e.screenX - li.screenX,
        fu = e.screenY - li.screenY) : fu = pu = 0,
        li = e),
        pu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : fu
    }
}), mf = jt(Za), r1 = $e({}, Za, {
    dataTransfer: 0
}), o1 = jt(r1), i1 = $e({}, ys, {
    relatedTarget: 0
}), hu = jt(i1), s1 = $e({}, Qo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), a1 = jt(s1), l1 = $e({}, Qo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), u1 = jt(l1), c1 = $e({}, Qo, {
    data: 0
}), gf = jt(c1), d1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, p1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, f1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function h1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = f1[e]) ? !!t[e] : !1
}
function vd() {
    return h1
}
var m1 = $e({}, ys, {
    key: function(e) {
        if (e.key) {
            var t = d1[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = sa(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? p1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vd,
    charCode: function(e) {
        return e.type === "keypress" ? sa(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? sa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , g1 = jt(m1)
  , v1 = $e({}, Za, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , vf = jt(v1)
  , y1 = $e({}, ys, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vd
})
  , x1 = jt(y1)
  , C1 = $e({}, Qo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , w1 = jt(C1)
  , A1 = $e({}, Za, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , b1 = jt(A1)
  , S1 = [9, 13, 27, 32]
  , yd = $n && "CompositionEvent"in window
  , Ti = null;
$n && "documentMode"in document && (Ti = document.documentMode);
var E1 = $n && "TextEvent"in window && !Ti
  , pg = $n && (!yd || Ti && 8 < Ti && 11 >= Ti)
  , yf = String.fromCharCode(32)
  , xf = !1;
function fg(e, t) {
    switch (e) {
    case "keyup":
        return S1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function hg(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ao = !1;
function P1(e, t) {
    switch (e) {
    case "compositionend":
        return hg(t);
    case "keypress":
        return t.which !== 32 ? null : (xf = !0,
        yf);
    case "textInput":
        return e = t.data,
        e === yf && xf ? null : e;
    default:
        return null
    }
}
function I1(e, t) {
    if (ao)
        return e === "compositionend" || !yd && fg(e, t) ? (e = dg(),
        ia = md = rr = null,
        ao = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return pg && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var k1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Cf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!k1[e.type] : t === "textarea"
}
function mg(e, t, n, r) {
    Qm(r),
    t = Ia(t, "onChange"),
    0 < t.length && (n = new gd("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Ni = null
  , Yi = null;
function R1(e) {
    Pg(e, 0)
}
function el(e) {
    var t = co(e);
    if (zm(t))
        return e
}
function T1(e, t) {
    if (e === "change")
        return t
}
var gg = !1;
if ($n) {
    var mu;
    if ($n) {
        var gu = "oninput"in document;
        if (!gu) {
            var wf = document.createElement("div");
            wf.setAttribute("oninput", "return;"),
            gu = typeof wf.oninput == "function"
        }
        mu = gu
    } else
        mu = !1;
    gg = mu && (!document.documentMode || 9 < document.documentMode)
}
function Af() {
    Ni && (Ni.detachEvent("onpropertychange", vg),
    Yi = Ni = null)
}
function vg(e) {
    if (e.propertyName === "value" && el(Yi)) {
        var t = [];
        mg(t, Yi, e, cd(e)),
        Ym(R1, t)
    }
}
function N1(e, t, n) {
    e === "focusin" ? (Af(),
    Ni = t,
    Yi = n,
    Ni.attachEvent("onpropertychange", vg)) : e === "focusout" && Af()
}
function L1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return el(Yi)
}
function O1(e, t) {
    if (e === "click")
        return el(t)
}
function M1(e, t) {
    if (e === "input" || e === "change")
        return el(t)
}
function B1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var hn = typeof Object.is == "function" ? Object.is : B1;
function qi(e, t) {
    if (hn(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Hu.call(t, o) || !hn(e[o], t[o]))
            return !1
    }
    return !0
}
function bf(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Sf(e, t) {
    var n = bf(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = bf(n)
    }
}
function yg(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yg(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function xg() {
    for (var e = window, t = Ca(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ca(e.document)
    }
    return t
}
function xd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function F1(e) {
    var t = xg()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && yg(n.ownerDocument.documentElement, n)) {
        if (r !== null && xd(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Sf(n, i);
                var s = Sf(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var _1 = $n && "documentMode"in document && 11 >= document.documentMode
  , lo = null
  , uc = null
  , Li = null
  , cc = !1;
function Ef(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cc || lo == null || lo !== Ca(r) || (r = lo,
    "selectionStart"in r && xd(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Li && qi(Li, r) || (Li = r,
    r = Ia(uc, "onSelect"),
    0 < r.length && (t = new gd("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = lo)))
}
function _s(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var uo = {
    animationend: _s("Animation", "AnimationEnd"),
    animationiteration: _s("Animation", "AnimationIteration"),
    animationstart: _s("Animation", "AnimationStart"),
    transitionend: _s("Transition", "TransitionEnd")
}
  , vu = {}
  , Cg = {};
$n && (Cg = document.createElement("div").style,
"AnimationEvent"in window || (delete uo.animationend.animation,
delete uo.animationiteration.animation,
delete uo.animationstart.animation),
"TransitionEvent"in window || delete uo.transitionend.transition);
function tl(e) {
    if (vu[e])
        return vu[e];
    if (!uo[e])
        return e;
    var t = uo[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Cg)
            return vu[e] = t[n];
    return e
}
var wg = tl("animationend")
  , Ag = tl("animationiteration")
  , bg = tl("animationstart")
  , Sg = tl("transitionend")
  , Eg = new Map
  , Pf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Cr(e, t) {
    Eg.set(e, t),
    Kr(t, [e])
}
for (var yu = 0; yu < Pf.length; yu++) {
    var xu = Pf[yu]
      , D1 = xu.toLowerCase()
      , z1 = xu[0].toUpperCase() + xu.slice(1);
    Cr(D1, "on" + z1)
}
Cr(wg, "onAnimationEnd");
Cr(Ag, "onAnimationIteration");
Cr(bg, "onAnimationStart");
Cr("dblclick", "onDoubleClick");
Cr("focusin", "onFocus");
Cr("focusout", "onBlur");
Cr(Sg, "onTransitionEnd");
No("onMouseEnter", ["mouseout", "mouseover"]);
No("onMouseLeave", ["mouseout", "mouseover"]);
No("onPointerEnter", ["pointerout", "pointerover"]);
No("onPointerLeave", ["pointerout", "pointerover"]);
Kr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Si = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , $1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));
function If(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    D0(r, t, void 0, e),
    e.currentTarget = null
}
function Pg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    If(o, a, u),
                    i = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    If(o, a, u),
                    i = l
                }
        }
    }
    if (Aa)
        throw e = ic,
        Aa = !1,
        ic = null,
        e
}
function Ne(e, t) {
    var n = t[mc];
    n === void 0 && (n = t[mc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ig(t, e, 2, !1),
    n.add(r))
}
function Cu(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Ig(n, e, r, t)
}
var Ds = "_reactListening" + Math.random().toString(36).slice(2);
function Ji(e) {
    if (!e[Ds]) {
        e[Ds] = !0,
        Mm.forEach(function(n) {
            n !== "selectionchange" && ($1.has(n) || Cu(n, !1, e),
            Cu(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ds] || (t[Ds] = !0,
        Cu("selectionchange", !1, t))
    }
}
function Ig(e, t, n, r) {
    switch (cg(t)) {
    case 1:
        var o = e1;
        break;
    case 4:
        o = t1;
        break;
    default:
        o = hd
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !oc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function wu(e, t, n, r, o) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = Or(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = i = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Ym(function() {
        var u = i
          , c = cd(n)
          , f = [];
        e: {
            var p = Eg.get(e);
            if (p !== void 0) {
                var v = gd
                  , x = e;
                switch (e) {
                case "keypress":
                    if (sa(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = g1;
                    break;
                case "focusin":
                    x = "focus",
                    v = hu;
                    break;
                case "focusout":
                    x = "blur",
                    v = hu;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = hu;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = mf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = o1;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = x1;
                    break;
                case wg:
                case Ag:
                case bg:
                    v = a1;
                    break;
                case Sg:
                    v = w1;
                    break;
                case "scroll":
                    v = n1;
                    break;
                case "wheel":
                    v = b1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = u1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = vf
                }
                var g = (t & 4) !== 0
                  , P = !g && e === "scroll"
                  , m = g ? p !== null ? p + "Capture" : null : p;
                g = [];
                for (var h = u, d; h !== null; ) {
                    d = h;
                    var y = d.stateNode;
                    if (d.tag === 5 && y !== null && (d = y,
                    m !== null && (y = Qi(h, m),
                    y != null && g.push(Zi(h, y, d)))),
                    P)
                        break;
                    h = h.return
                }
                0 < g.length && (p = new v(p,x,null,n,c),
                f.push({
                    event: p,
                    listeners: g
                }))
            }
        }
        if ((t & 7) === 0) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                p && n !== nc && (x = n.relatedTarget || n.fromElement) && (Or(x) || x[Vn]))
                    break e;
                if ((v || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window,
                v ? (x = n.relatedTarget || n.toElement,
                v = u,
                x = x ? Or(x) : null,
                x !== null && (P = Xr(x),
                x !== P || x.tag !== 5 && x.tag !== 6) && (x = null)) : (v = null,
                x = u),
                v !== x)) {
                    if (g = mf,
                    y = "onMouseLeave",
                    m = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = vf,
                    y = "onPointerLeave",
                    m = "onPointerEnter",
                    h = "pointer"),
                    P = v == null ? p : co(v),
                    d = x == null ? p : co(x),
                    p = new g(y,h + "leave",v,n,c),
                    p.target = P,
                    p.relatedTarget = d,
                    y = null,
                    Or(c) === u && (g = new g(m,h + "enter",x,n,c),
                    g.target = d,
                    g.relatedTarget = P,
                    y = g),
                    P = y,
                    v && x)
                        t: {
                            for (g = v,
                            m = x,
                            h = 0,
                            d = g; d; d = qr(d))
                                h++;
                            for (d = 0,
                            y = m; y; y = qr(y))
                                d++;
                            for (; 0 < h - d; )
                                g = qr(g),
                                h--;
                            for (; 0 < d - h; )
                                m = qr(m),
                                d--;
                            for (; h--; ) {
                                if (g === m || m !== null && g === m.alternate)
                                    break t;
                                g = qr(g),
                                m = qr(m)
                            }
                            g = null
                        }
                    else
                        g = null;
                    v !== null && kf(f, p, v, g, !1),
                    x !== null && P !== null && kf(f, P, x, g, !0)
                }
            }
            e: {
                if (p = u ? co(u) : window,
                v = p.nodeName && p.nodeName.toLowerCase(),
                v === "select" || v === "input" && p.type === "file")
                    var A = T1;
                else if (Cf(p))
                    if (gg)
                        A = M1;
                    else {
                        A = L1;
                        var E = N1
                    }
                else
                    (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (A = O1);
                if (A && (A = A(e, u))) {
                    mg(f, A, n, c);
                    break e
                }
                E && E(e, p, u),
                e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && qu(p, "number", p.value)
            }
            switch (E = u ? co(u) : window,
            e) {
            case "focusin":
                (Cf(E) || E.contentEditable === "true") && (lo = E,
                uc = u,
                Li = null);
                break;
            case "focusout":
                Li = uc = lo = null;
                break;
            case "mousedown":
                cc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                cc = !1,
                Ef(f, n, c);
                break;
            case "selectionchange":
                if (_1)
                    break;
            case "keydown":
            case "keyup":
                Ef(f, n, c)
            }
            var S;
            if (yd)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var I = "onCompositionStart";
                        break e;
                    case "compositionend":
                        I = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        I = "onCompositionUpdate";
                        break e
                    }
                    I = void 0
                }
            else
                ao ? fg(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
            I && (pg && n.locale !== "ko" && (ao || I !== "onCompositionStart" ? I === "onCompositionEnd" && ao && (S = dg()) : (rr = c,
            md = "value"in rr ? rr.value : rr.textContent,
            ao = !0)),
            E = Ia(u, I),
            0 < E.length && (I = new gf(I,e,null,n,c),
            f.push({
                event: I,
                listeners: E
            }),
            S ? I.data = S : (S = hg(n),
            S !== null && (I.data = S)))),
            (S = E1 ? P1(e, n) : I1(e, n)) && (u = Ia(u, "onBeforeInput"),
            0 < u.length && (c = new gf("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = S))
        }
        Pg(f, t)
    })
}
function Zi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ia(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Qi(e, n),
        i != null && r.unshift(Zi(e, i, o)),
        i = Qi(e, t),
        i != null && r.push(Zi(e, i, o))),
        e = e.return
    }
    return r
}
function qr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function kf(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (l = Qi(n, i),
        l != null && s.unshift(Zi(n, l, a))) : o || (l = Qi(n, i),
        l != null && s.push(Zi(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var V1 = /\r\n?/g
  , U1 = /\u0000|\uFFFD/g;
function Rf(e) {
    return (typeof e == "string" ? e : "" + e).replace(V1, `
`).replace(U1, "")
}
function zs(e, t, n) {
    if (t = Rf(t),
    Rf(e) !== t && n)
        throw Error(_(425))
}
function ka() {}
var dc = null
  , pc = null;
function fc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var hc = typeof setTimeout == "function" ? setTimeout : void 0
  , j1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Tf = typeof Promise == "function" ? Promise : void 0
  , H1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tf != "undefined" ? function(e) {
    return Tf.resolve(null).then(e).catch(W1)
}
: hc;
function W1(e) {
    setTimeout(function() {
        throw e
    })
}
function Au(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Xi(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Xi(t)
}
function dr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Nf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Go = Math.random().toString(36).slice(2)
  , wn = "__reactFiber$" + Go
  , es = "__reactProps$" + Go
  , Vn = "__reactContainer$" + Go
  , mc = "__reactEvents$" + Go
  , Q1 = "__reactListeners$" + Go
  , G1 = "__reactHandles$" + Go;
function Or(e) {
    var t = e[wn];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Vn] || n[wn]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Nf(e); e !== null; ) {
                    if (n = e[wn])
                        return n;
                    e = Nf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function xs(e) {
    return e = e[wn] || e[Vn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function co(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(_(33))
}
function nl(e) {
    return e[es] || null
}
var gc = []
  , po = -1;
function wr(e) {
    return {
        current: e
    }
}
function Le(e) {
    0 > po || (e.current = gc[po],
    gc[po] = null,
    po--)
}
function Re(e, t) {
    po++,
    gc[po] = e.current,
    e.current = t
}
var vr = {}
  , mt = wr(vr)
  , It = wr(!1)
  , Vr = vr;
function Lo(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return vr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function kt(e) {
    return e = e.childContextTypes,
    e != null
}
function Ra() {
    Le(It),
    Le(mt)
}
function Lf(e, t, n) {
    if (mt.current !== vr)
        throw Error(_(168));
    Re(mt, t),
    Re(It, n)
}
function kg(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(_(108, N0(e) || "Unknown", o));
    return $e({}, n, r)
}
function Ta(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vr,
    Vr = mt.current,
    Re(mt, e),
    Re(It, It.current),
    !0
}
function Of(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(_(169));
    n ? (e = kg(e, t, Vr),
    r.__reactInternalMemoizedMergedChildContext = e,
    Le(It),
    Le(mt),
    Re(mt, e)) : Le(It),
    Re(It, n)
}
var Bn = null
  , rl = !1
  , bu = !1;
function Rg(e) {
    Bn === null ? Bn = [e] : Bn.push(e)
}
function K1(e) {
    rl = !0,
    Rg(e)
}
function Ar() {
    if (!bu && Bn !== null) {
        bu = !0;
        var e = 0
          , t = Ce;
        try {
            var n = Bn;
            for (Ce = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Bn = null,
            rl = !1
        } catch (o) {
            throw Bn !== null && (Bn = Bn.slice(e + 1)),
            eg(dd, Ar),
            o
        } finally {
            Ce = t,
            bu = !1
        }
    }
    return null
}
var fo = []
  , ho = 0
  , Na = null
  , La = 0
  , Gt = []
  , Kt = 0
  , Ur = null
  , Fn = 1
  , _n = "";
function Ir(e, t) {
    fo[ho++] = La,
    fo[ho++] = Na,
    Na = e,
    La = t
}
function Tg(e, t, n) {
    Gt[Kt++] = Fn,
    Gt[Kt++] = _n,
    Gt[Kt++] = Ur,
    Ur = e;
    var r = Fn;
    e = _n;
    var o = 32 - pn(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - pn(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        Fn = 1 << 32 - pn(t) + o | n << o | r,
        _n = i + e
    } else
        Fn = 1 << i | n << o | r,
        _n = e
}
function Cd(e) {
    e.return !== null && (Ir(e, 1),
    Tg(e, 1, 0))
}
function wd(e) {
    for (; e === Na; )
        Na = fo[--ho],
        fo[ho] = null,
        La = fo[--ho],
        fo[ho] = null;
    for (; e === Ur; )
        Ur = Gt[--Kt],
        Gt[Kt] = null,
        _n = Gt[--Kt],
        Gt[Kt] = null,
        Fn = Gt[--Kt],
        Gt[Kt] = null
}
var Dt = null
  , _t = null
  , Fe = !1
  , cn = null;
function Ng(e, t) {
    var n = Xt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Mf(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Dt = e,
        _t = dr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Dt = e,
        _t = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Ur !== null ? {
            id: Fn,
            overflow: _n
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Xt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Dt = e,
        _t = null,
        !0) : !1;
    default:
        return !1
    }
}
function vc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function yc(e) {
    if (Fe) {
        var t = _t;
        if (t) {
            var n = t;
            if (!Mf(e, t)) {
                if (vc(e))
                    throw Error(_(418));
                t = dr(n.nextSibling);
                var r = Dt;
                t && Mf(e, t) ? Ng(r, n) : (e.flags = e.flags & -4097 | 2,
                Fe = !1,
                Dt = e)
            }
        } else {
            if (vc(e))
                throw Error(_(418));
            e.flags = e.flags & -4097 | 2,
            Fe = !1,
            Dt = e
        }
    }
}
function Bf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Dt = e
}
function $s(e) {
    if (e !== Dt)
        return !1;
    if (!Fe)
        return Bf(e),
        Fe = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !fc(e.type, e.memoizedProps)),
    t && (t = _t)) {
        if (vc(e))
            throw Lg(),
            Error(_(418));
        for (; t; )
            Ng(e, t),
            t = dr(t.nextSibling)
    }
    if (Bf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(_(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            _t = dr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            _t = null
        }
    } else
        _t = Dt ? dr(e.stateNode.nextSibling) : null;
    return !0
}
function Lg() {
    for (var e = _t; e; )
        e = dr(e.nextSibling)
}
function Oo() {
    _t = Dt = null,
    Fe = !1
}
function Ad(e) {
    cn === null ? cn = [e] : cn.push(e)
}
var X1 = Qn.ReactCurrentBatchConfig;
function ln(e, t) {
    if (e && e.defaultProps) {
        t = $e({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Oa = wr(null)
  , Ma = null
  , mo = null
  , bd = null;
function Sd() {
    bd = mo = Ma = null
}
function Ed(e) {
    var t = Oa.current;
    Le(Oa),
    e._currentValue = t
}
function xc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Eo(e, t) {
    Ma = e,
    bd = mo = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Pt = !0),
    e.firstContext = null)
}
function Zt(e) {
    var t = e._currentValue;
    if (bd !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        mo === null) {
            if (Ma === null)
                throw Error(_(308));
            mo = e,
            Ma.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            mo = mo.next = e;
    return t
}
var Mr = null;
function Pd(e) {
    Mr === null ? Mr = [e] : Mr.push(e)
}
function Og(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Pd(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Un(e, r)
}
function Un(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var er = !1;
function Id(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Mg(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Dn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function pr(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    (fe & 2) !== 0) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Un(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Pd(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Un(e, n)
}
function aa(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        pd(e, n)
    }
}
function Ff(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ba(e, t, n, r) {
    var o = e.updateQueue;
    er = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        s === null ? i = u : s.next = u,
        s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var f = o.baseState;
        s = 0,
        c = u = l = null,
        a = i;
        do {
            var p = a.lane
              , v = a.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                      , g = a;
                    switch (p = t,
                    v = n,
                    g.tag) {
                    case 1:
                        if (x = g.payload,
                        typeof x == "function") {
                            f = x.call(v, f, p);
                            break e
                        }
                        f = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = g.payload,
                        p = typeof x == "function" ? x.call(v, f, p) : x,
                        p == null)
                            break e;
                        f = $e({}, f, p);
                        break e;
                    case 2:
                        er = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                p = o.effects,
                p === null ? o.effects = [a] : p.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: p,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = v,
                l = f) : c = c.next = v,
                s |= p;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                p = a,
                a = p.next,
                p.next = null,
                o.lastBaseUpdate = p,
                o.shared.pending = null
            }
        } while (1);
        if (c === null && (l = f),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Hr |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function _f(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(_(191, o));
                o.call(r)
            }
        }
}
var Bg = new Om.Component().refs;
function Cc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : $e({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ol = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Xr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ct()
          , o = hr(e)
          , i = Dn(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = pr(e, i, o),
        t !== null && (fn(t, e, o, r),
        aa(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ct()
          , o = hr(e)
          , i = Dn(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = pr(e, i, o),
        t !== null && (fn(t, e, o, r),
        aa(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ct()
          , r = hr(e)
          , o = Dn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = pr(e, o, r),
        t !== null && (fn(t, e, r, n),
        aa(t, e, r))
    }
};
function Df(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !qi(n, r) || !qi(o, i) : !0
}
function Fg(e, t, n) {
    var r = !1
      , o = vr
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Zt(i) : (o = kt(t) ? Vr : mt.current,
    r = t.contextTypes,
    i = (r = r != null) ? Lo(e, o) : vr),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ol,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function zf(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ol.enqueueReplaceState(t, t.state, null)
}
function wc(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = Bg,
    Id(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Zt(i) : (i = kt(t) ? Vr : mt.current,
    o.context = Lo(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Cc(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && ol.enqueueReplaceState(o, o.state, null),
    Ba(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function ui(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(_(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(_(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = o.refs;
                a === Bg && (a = o.refs = {}),
                s === null ? delete a[i] : a[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(_(284));
        if (!n._owner)
            throw Error(_(290, e))
    }
    return e
}
function Vs(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function $f(e) {
    var t = e._init;
    return t(e._payload)
}
function _g(e) {
    function t(m, h) {
        if (e) {
            var d = m.deletions;
            d === null ? (m.deletions = [h],
            m.flags |= 16) : d.push(h)
        }
    }
    function n(m, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(m, h),
            h = h.sibling;
        return null
    }
    function r(m, h) {
        for (m = new Map; h !== null; )
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
            h = h.sibling;
        return m
    }
    function o(m, h) {
        return m = mr(m, h),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, h, d) {
        return m.index = d,
        e ? (d = m.alternate,
        d !== null ? (d = d.index,
        d < h ? (m.flags |= 2,
        h) : d) : (m.flags |= 2,
        h)) : (m.flags |= 1048576,
        h)
    }
    function s(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, h, d, y) {
        return h === null || h.tag !== 6 ? (h = Tu(d, m.mode, y),
        h.return = m,
        h) : (h = o(h, d),
        h.return = m,
        h)
    }
    function l(m, h, d, y) {
        var A = d.type;
        return A === so ? c(m, h, d.props.children, y, d.key) : h !== null && (h.elementType === A || typeof A == "object" && A !== null && A.$$typeof === Zn && $f(A) === h.type) ? (y = o(h, d.props),
        y.ref = ui(m, h, d),
        y.return = m,
        y) : (y = fa(d.type, d.key, d.props, null, m.mode, y),
        y.ref = ui(m, h, d),
        y.return = m,
        y)
    }
    function u(m, h, d, y) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== d.containerInfo || h.stateNode.implementation !== d.implementation ? (h = Nu(d, m.mode, y),
        h.return = m,
        h) : (h = o(h, d.children || []),
        h.return = m,
        h)
    }
    function c(m, h, d, y, A) {
        return h === null || h.tag !== 7 ? (h = zr(d, m.mode, y, A),
        h.return = m,
        h) : (h = o(h, d),
        h.return = m,
        h)
    }
    function f(m, h, d) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Tu("" + h, m.mode, d),
            h.return = m,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Ts:
                return d = fa(h.type, h.key, h.props, null, m.mode, d),
                d.ref = ui(m, null, h),
                d.return = m,
                d;
            case io:
                return h = Nu(h, m.mode, d),
                h.return = m,
                h;
            case Zn:
                var y = h._init;
                return f(m, y(h._payload), d)
            }
            if (Ai(h) || oi(h))
                return h = zr(h, m.mode, d, null),
                h.return = m,
                h;
            Vs(m, h)
        }
        return null
    }
    function p(m, h, d, y) {
        var A = h !== null ? h.key : null;
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return A !== null ? null : a(m, h, "" + d, y);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case Ts:
                return d.key === A ? l(m, h, d, y) : null;
            case io:
                return d.key === A ? u(m, h, d, y) : null;
            case Zn:
                return A = d._init,
                p(m, h, A(d._payload), y)
            }
            if (Ai(d) || oi(d))
                return A !== null ? null : c(m, h, d, y, null);
            Vs(m, d)
        }
        return null
    }
    function v(m, h, d, y, A) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return m = m.get(d) || null,
            a(h, m, "" + y, A);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Ts:
                return m = m.get(y.key === null ? d : y.key) || null,
                l(h, m, y, A);
            case io:
                return m = m.get(y.key === null ? d : y.key) || null,
                u(h, m, y, A);
            case Zn:
                var E = y._init;
                return v(m, h, d, E(y._payload), A)
            }
            if (Ai(y) || oi(y))
                return m = m.get(d) || null,
                c(h, m, y, A, null);
            Vs(h, y)
        }
        return null
    }
    function x(m, h, d, y) {
        for (var A = null, E = null, S = h, I = h = 0, R = null; S !== null && I < d.length; I++) {
            S.index > I ? (R = S,
            S = null) : R = S.sibling;
            var k = p(m, S, d[I], y);
            if (k === null) {
                S === null && (S = R);
                break
            }
            e && S && k.alternate === null && t(m, S),
            h = i(k, h, I),
            E === null ? A = k : E.sibling = k,
            E = k,
            S = R
        }
        if (I === d.length)
            return n(m, S),
            Fe && Ir(m, I),
            A;
        if (S === null) {
            for (; I < d.length; I++)
                S = f(m, d[I], y),
                S !== null && (h = i(S, h, I),
                E === null ? A = S : E.sibling = S,
                E = S);
            return Fe && Ir(m, I),
            A
        }
        for (S = r(m, S); I < d.length; I++)
            R = v(S, m, I, d[I], y),
            R !== null && (e && R.alternate !== null && S.delete(R.key === null ? I : R.key),
            h = i(R, h, I),
            E === null ? A = R : E.sibling = R,
            E = R);
        return e && S.forEach(function(O) {
            return t(m, O)
        }),
        Fe && Ir(m, I),
        A
    }
    function g(m, h, d, y) {
        var A = oi(d);
        if (typeof A != "function")
            throw Error(_(150));
        if (d = A.call(d),
        d == null)
            throw Error(_(151));
        for (var E = A = null, S = h, I = h = 0, R = null, k = d.next(); S !== null && !k.done; I++,
        k = d.next()) {
            S.index > I ? (R = S,
            S = null) : R = S.sibling;
            var O = p(m, S, k.value, y);
            if (O === null) {
                S === null && (S = R);
                break
            }
            e && S && O.alternate === null && t(m, S),
            h = i(O, h, I),
            E === null ? A = O : E.sibling = O,
            E = O,
            S = R
        }
        if (k.done)
            return n(m, S),
            Fe && Ir(m, I),
            A;
        if (S === null) {
            for (; !k.done; I++,
            k = d.next())
                k = f(m, k.value, y),
                k !== null && (h = i(k, h, I),
                E === null ? A = k : E.sibling = k,
                E = k);
            return Fe && Ir(m, I),
            A
        }
        for (S = r(m, S); !k.done; I++,
        k = d.next())
            k = v(S, m, I, k.value, y),
            k !== null && (e && k.alternate !== null && S.delete(k.key === null ? I : k.key),
            h = i(k, h, I),
            E === null ? A = k : E.sibling = k,
            E = k);
        return e && S.forEach(function(W) {
            return t(m, W)
        }),
        Fe && Ir(m, I),
        A
    }
    function P(m, h, d, y) {
        if (typeof d == "object" && d !== null && d.type === so && d.key === null && (d = d.props.children),
        typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case Ts:
                e: {
                    for (var A = d.key, E = h; E !== null; ) {
                        if (E.key === A) {
                            if (A = d.type,
                            A === so) {
                                if (E.tag === 7) {
                                    n(m, E.sibling),
                                    h = o(E, d.props.children),
                                    h.return = m,
                                    m = h;
                                    break e
                                }
                            } else if (E.elementType === A || typeof A == "object" && A !== null && A.$$typeof === Zn && $f(A) === E.type) {
                                n(m, E.sibling),
                                h = o(E, d.props),
                                h.ref = ui(m, E, d),
                                h.return = m,
                                m = h;
                                break e
                            }
                            n(m, E);
                            break
                        } else
                            t(m, E);
                        E = E.sibling
                    }
                    d.type === so ? (h = zr(d.props.children, m.mode, y, d.key),
                    h.return = m,
                    m = h) : (y = fa(d.type, d.key, d.props, null, m.mode, y),
                    y.ref = ui(m, h, d),
                    y.return = m,
                    m = y)
                }
                return s(m);
            case io:
                e: {
                    for (E = d.key; h !== null; ) {
                        if (h.key === E)
                            if (h.tag === 4 && h.stateNode.containerInfo === d.containerInfo && h.stateNode.implementation === d.implementation) {
                                n(m, h.sibling),
                                h = o(h, d.children || []),
                                h.return = m,
                                m = h;
                                break e
                            } else {
                                n(m, h);
                                break
                            }
                        else
                            t(m, h);
                        h = h.sibling
                    }
                    h = Nu(d, m.mode, y),
                    h.return = m,
                    m = h
                }
                return s(m);
            case Zn:
                return E = d._init,
                P(m, h, E(d._payload), y)
            }
            if (Ai(d))
                return x(m, h, d, y);
            if (oi(d))
                return g(m, h, d, y);
            Vs(m, d)
        }
        return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d,
        h !== null && h.tag === 6 ? (n(m, h.sibling),
        h = o(h, d),
        h.return = m,
        m = h) : (n(m, h),
        h = Tu(d, m.mode, y),
        h.return = m,
        m = h),
        s(m)) : n(m, h)
    }
    return P
}
var Mo = _g(!0)
  , Dg = _g(!1)
  , Cs = {}
  , Pn = wr(Cs)
  , ts = wr(Cs)
  , ns = wr(Cs);
function Br(e) {
    if (e === Cs)
        throw Error(_(174));
    return e
}
function kd(e, t) {
    switch (Re(ns, t),
    Re(ts, e),
    Re(Pn, Cs),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Zu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Zu(t, e)
    }
    Le(Pn),
    Re(Pn, t)
}
function Bo() {
    Le(Pn),
    Le(ts),
    Le(ns)
}
function zg(e) {
    Br(ns.current);
    var t = Br(Pn.current)
      , n = Zu(t, e.type);
    t !== n && (Re(ts, e),
    Re(Pn, n))
}
function Rd(e) {
    ts.current === e && (Le(Pn),
    Le(ts))
}
var De = wr(0);
function Fa(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 128) !== 0)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Su = [];
function Td() {
    for (var e = 0; e < Su.length; e++)
        Su[e]._workInProgressVersionPrimary = null;
    Su.length = 0
}
var la = Qn.ReactCurrentDispatcher
  , Eu = Qn.ReactCurrentBatchConfig
  , jr = 0
  , ze = null
  , Ye = null
  , Ze = null
  , _a = !1
  , Oi = !1
  , rs = 0
  , Y1 = 0;
function ct() {
    throw Error(_(321))
}
function Nd(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!hn(e[n], t[n]))
            return !1;
    return !0
}
function Ld(e, t, n, r, o, i) {
    if (jr = i,
    ze = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    la.current = e === null || e.memoizedState === null ? ex : tx,
    e = n(r, o),
    Oi) {
        i = 0;
        do {
            if (Oi = !1,
            rs = 0,
            25 <= i)
                throw Error(_(301));
            i += 1,
            Ze = Ye = null,
            t.updateQueue = null,
            la.current = nx,
            e = n(r, o)
        } while (Oi)
    }
    if (la.current = Da,
    t = Ye !== null && Ye.next !== null,
    jr = 0,
    Ze = Ye = ze = null,
    _a = !1,
    t)
        throw Error(_(300));
    return e
}
function Od() {
    var e = rs !== 0;
    return rs = 0,
    e
}
function yn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ze === null ? ze.memoizedState = Ze = e : Ze = Ze.next = e,
    Ze
}
function en() {
    if (Ye === null) {
        var e = ze.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ye.next;
    var t = Ze === null ? ze.memoizedState : Ze.next;
    if (t !== null)
        Ze = t,
        Ye = e;
    else {
        if (e === null)
            throw Error(_(310));
        Ye = e,
        e = {
            memoizedState: Ye.memoizedState,
            baseState: Ye.baseState,
            baseQueue: Ye.baseQueue,
            queue: Ye.queue,
            next: null
        },
        Ze === null ? ze.memoizedState = Ze = e : Ze = Ze.next = e
    }
    return Ze
}
function os(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Pu(e) {
    var t = en()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = Ye
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , u = i;
        do {
            var c = u.lane;
            if ((jr & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                s = r) : l = l.next = f,
                ze.lanes |= c,
                Hr |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a,
        hn(r, t.memoizedState) || (Pt = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ze.lanes |= i,
            Hr |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Iu(e) {
    var t = en()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        hn(i, t.memoizedState) || (Pt = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function $g() {}
function Vg(e, t) {
    var n = ze
      , r = en()
      , o = t()
      , i = !hn(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Pt = !0),
    r = r.queue,
    Md(Hg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Ze !== null && Ze.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        is(9, jg.bind(null, n, r, o, t), void 0, null),
        et === null)
            throw Error(_(349));
        (jr & 30) !== 0 || Ug(n, t, o)
    }
    return o
}
function Ug(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ze.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ze.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function jg(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Wg(t) && Qg(e)
}
function Hg(e, t, n) {
    return n(function() {
        Wg(t) && Qg(e)
    })
}
function Wg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !hn(e, n)
    } catch {
        return !0
    }
}
function Qg(e) {
    var t = Un(e, 1);
    t !== null && fn(t, e, 1, -1)
}
function Vf(e) {
    var t = yn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: os,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Z1.bind(null, ze, e),
    [t.memoizedState, e]
}
function is(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ze.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ze.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Gg() {
    return en().memoizedState
}
function ua(e, t, n, r) {
    var o = yn();
    ze.flags |= e,
    o.memoizedState = is(1 | t, n, void 0, r === void 0 ? null : r)
}
function il(e, t, n, r) {
    var o = en();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ye !== null) {
        var s = Ye.memoizedState;
        if (i = s.destroy,
        r !== null && Nd(r, s.deps)) {
            o.memoizedState = is(t, n, i, r);
            return
        }
    }
    ze.flags |= e,
    o.memoizedState = is(1 | t, n, i, r)
}
function Uf(e, t) {
    return ua(8390656, 8, e, t)
}
function Md(e, t) {
    return il(2048, 8, e, t)
}
function Kg(e, t) {
    return il(4, 2, e, t)
}
function Xg(e, t) {
    return il(4, 4, e, t)
}
function Yg(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function qg(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    il(4, 4, Yg.bind(null, t, e), n)
}
function Bd() {}
function Jg(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nd(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Zg(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nd(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function ev(e, t, n) {
    return (jr & 21) === 0 ? (e.baseState && (e.baseState = !1,
    Pt = !0),
    e.memoizedState = n) : (hn(n, t) || (n = rg(),
    ze.lanes |= n,
    Hr |= n,
    e.baseState = !0),
    t)
}
function q1(e, t) {
    var n = Ce;
    Ce = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Eu.transition;
    Eu.transition = {};
    try {
        e(!1),
        t()
    } finally {
        Ce = n,
        Eu.transition = r
    }
}
function tv() {
    return en().memoizedState
}
function J1(e, t, n) {
    var r = hr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    nv(e))
        rv(t, n);
    else if (n = Og(e, t, n, r),
    n !== null) {
        var o = Ct();
        fn(n, e, r, o),
        ov(n, t, r)
    }
}
function Z1(e, t, n) {
    var r = hr(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (nv(e))
        rv(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , a = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                hn(a, s)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    Pd(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Og(e, t, o, r),
        n !== null && (o = Ct(),
        fn(n, e, r, o),
        ov(n, t, r))
    }
}
function nv(e) {
    var t = e.alternate;
    return e === ze || t !== null && t === ze
}
function rv(e, t) {
    Oi = _a = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function ov(e, t, n) {
    if ((n & 4194240) !== 0) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        pd(e, n)
    }
}
var Da = {
    readContext: Zt,
    useCallback: ct,
    useContext: ct,
    useEffect: ct,
    useImperativeHandle: ct,
    useInsertionEffect: ct,
    useLayoutEffect: ct,
    useMemo: ct,
    useReducer: ct,
    useRef: ct,
    useState: ct,
    useDebugValue: ct,
    useDeferredValue: ct,
    useTransition: ct,
    useMutableSource: ct,
    useSyncExternalStore: ct,
    useId: ct,
    unstable_isNewReconciler: !1
}
  , ex = {
    readContext: Zt,
    useCallback: function(e, t) {
        return yn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Zt,
    useEffect: Uf,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ua(4194308, 4, Yg.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ua(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ua(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = yn();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = yn();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = J1.bind(null, ze, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = yn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Vf,
    useDebugValue: Bd,
    useDeferredValue: function(e) {
        return yn().memoizedState = e
    },
    useTransition: function() {
        var e = Vf(!1)
          , t = e[0];
        return e = q1.bind(null, e[1]),
        yn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ze
          , o = yn();
        if (Fe) {
            if (n === void 0)
                throw Error(_(407));
            n = n()
        } else {
            if (n = t(),
            et === null)
                throw Error(_(349));
            (jr & 30) !== 0 || Ug(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        Uf(Hg.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        is(9, jg.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = yn()
          , t = et.identifierPrefix;
        if (Fe) {
            var n = _n
              , r = Fn;
            n = (r & ~(1 << 32 - pn(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = rs++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Y1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , tx = {
    readContext: Zt,
    useCallback: Jg,
    useContext: Zt,
    useEffect: Md,
    useImperativeHandle: qg,
    useInsertionEffect: Kg,
    useLayoutEffect: Xg,
    useMemo: Zg,
    useReducer: Pu,
    useRef: Gg,
    useState: function() {
        return Pu(os)
    },
    useDebugValue: Bd,
    useDeferredValue: function(e) {
        var t = en();
        return ev(t, Ye.memoizedState, e)
    },
    useTransition: function() {
        var e = Pu(os)[0]
          , t = en().memoizedState;
        return [e, t]
    },
    useMutableSource: $g,
    useSyncExternalStore: Vg,
    useId: tv,
    unstable_isNewReconciler: !1
}
  , nx = {
    readContext: Zt,
    useCallback: Jg,
    useContext: Zt,
    useEffect: Md,
    useImperativeHandle: qg,
    useInsertionEffect: Kg,
    useLayoutEffect: Xg,
    useMemo: Zg,
    useReducer: Iu,
    useRef: Gg,
    useState: function() {
        return Iu(os)
    },
    useDebugValue: Bd,
    useDeferredValue: function(e) {
        var t = en();
        return Ye === null ? t.memoizedState = e : ev(t, Ye.memoizedState, e)
    },
    useTransition: function() {
        var e = Iu(os)[0]
          , t = en().memoizedState;
        return [e, t]
    },
    useMutableSource: $g,
    useSyncExternalStore: Vg,
    useId: tv,
    unstable_isNewReconciler: !1
};
function Fo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += T0(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function ku(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n != null ? n : null,
        digest: t != null ? t : null
    }
}
function Ac(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var rx = typeof WeakMap == "function" ? WeakMap : Map;
function iv(e, t, n) {
    n = Dn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        $a || ($a = !0,
        Lc = r),
        Ac(e, t)
    }
    ,
    n
}
function sv(e, t, n) {
    n = Dn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Ac(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Ac(e, t),
        typeof r != "function" && (fr === null ? fr = new Set([this]) : fr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function jf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new rx;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = vx.bind(null, e, t, n),
    t.then(e, e))
}
function Hf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Wf(e, t, n, r, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dn(-1, 1),
    t.tag = 2,
    pr(n, t, 1))),
    n.lanes |= 1),
    e) : (e.flags |= 65536,
    e.lanes = o,
    e)
}
var ox = Qn.ReactCurrentOwner
  , Pt = !1;
function xt(e, t, n, r) {
    t.child = e === null ? Dg(t, null, n, r) : Mo(t, e.child, n, r)
}
function Qf(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Eo(t, o),
    r = Ld(e, t, n, r, i, o),
    n = Od(),
    e !== null && !Pt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    jn(e, t, o)) : (Fe && n && Cd(t),
    t.flags |= 1,
    xt(e, t, r, o),
    t.child)
}
function Gf(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !jd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        av(e, t, i, r, o)) : (e = fa(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    (e.lanes & o) === 0) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : qi,
        n(s, r) && e.ref === t.ref)
            return jn(e, t, o)
    }
    return t.flags |= 1,
    e = mr(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function av(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (qi(i, r) && e.ref === t.ref)
            if (Pt = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                (e.flags & 131072) !== 0 && (Pt = !0);
            else
                return t.lanes = e.lanes,
                jn(e, t, o)
    }
    return bc(e, t, n, r, o)
}
function lv(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if ((t.mode & 1) === 0)
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Re(vo, Bt),
            Bt |= n;
        else {
            if ((n & 1073741824) === 0)
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                Re(vo, Bt),
                Bt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            Re(vo, Bt),
            Bt |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        Re(vo, Bt),
        Bt |= r;
    return xt(e, t, o, n),
    t.child
}
function uv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function bc(e, t, n, r, o) {
    var i = kt(n) ? Vr : mt.current;
    return i = Lo(t, i),
    Eo(t, o),
    n = Ld(e, t, n, r, i, o),
    r = Od(),
    e !== null && !Pt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    jn(e, t, o)) : (Fe && r && Cd(t),
    t.flags |= 1,
    xt(e, t, n, o),
    t.child)
}
function Kf(e, t, n, r, o) {
    if (kt(n)) {
        var i = !0;
        Ta(t)
    } else
        i = !1;
    if (Eo(t, o),
    t.stateNode === null)
        ca(e, t),
        Fg(t, n, r),
        wc(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Zt(u) : (u = kt(n) ? Vr : mt.current,
        u = Lo(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && zf(t, s, r, u),
        er = !1;
        var p = t.memoizedState;
        s.state = p,
        Ba(t, r, s, o),
        l = t.memoizedState,
        a !== r || p !== l || It.current || er ? (typeof c == "function" && (Cc(t, n, c, r),
        l = t.memoizedState),
        (a = er || Df(t, n, a, r, p, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = u,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Mg(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : ln(t.type, a),
        s.props = u,
        f = t.pendingProps,
        p = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Zt(l) : (l = kt(n) ? Vr : mt.current,
        l = Lo(t, l));
        var v = n.getDerivedStateFromProps;
        (c = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || p !== l) && zf(t, s, r, l),
        er = !1,
        p = t.memoizedState,
        s.state = p,
        Ba(t, r, s, o);
        var x = t.memoizedState;
        a !== f || p !== x || It.current || er ? (typeof v == "function" && (Cc(t, n, v, r),
        x = t.memoizedState),
        (u = er || Df(t, n, u, r, p, x, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        s.props = r,
        s.state = x,
        s.context = l,
        r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Sc(e, t, n, r, i, o)
}
function Sc(e, t, n, r, o, i) {
    uv(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && Of(t, n, !1),
        jn(e, t, i);
    r = t.stateNode,
    ox.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Mo(t, e.child, null, i),
    t.child = Mo(t, null, a, i)) : xt(e, t, a, i),
    t.memoizedState = r.state,
    o && Of(t, n, !0),
    t.child
}
function cv(e) {
    var t = e.stateNode;
    t.pendingContext ? Lf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lf(e, t.context, !1),
    kd(e, t.containerInfo)
}
function Xf(e, t, n, r, o) {
    return Oo(),
    Ad(o),
    t.flags |= 256,
    xt(e, t, n, r),
    t.child
}
var Ec = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Pc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function dv(e, t, n) {
    var r = t.pendingProps, o = De.current, i = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    Re(De, o & 1),
    e === null)
        return yc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        (r & 1) === 0 && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = ll(s, r, 0, null),
        e = zr(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Pc(n),
        t.memoizedState = Ec,
        e) : Fd(t, s));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return ix(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return (s & 1) === 0 && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = mr(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? i = mr(a, i) : (i = zr(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? Pc(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Ec,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = mr(i, {
        mode: "visible",
        children: r.children
    }),
    (t.mode & 1) === 0 && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Fd(e, t) {
    return t = ll({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Us(e, t, n, r) {
    return r !== null && Ad(r),
    Mo(t, e.child, null, n),
    e = Fd(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function ix(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ku(Error(_(422))),
        Us(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = ll({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = zr(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        (t.mode & 1) !== 0 && Mo(t, e.child, null, s),
        t.child.memoizedState = Pc(s),
        t.memoizedState = Ec,
        i);
    if ((t.mode & 1) === 0)
        return Us(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(_(419)),
        r = ku(i, r, void 0),
        Us(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    Pt || a) {
        if (r = et,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = (o & (r.suspendedLanes | s)) !== 0 ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Un(e, o),
            fn(r, e, o, -1))
        }
        return Ud(),
        r = ku(Error(_(421))),
        Us(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = yx.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    _t = dr(o.nextSibling),
    Dt = t,
    Fe = !0,
    cn = null,
    e !== null && (Gt[Kt++] = Fn,
    Gt[Kt++] = _n,
    Gt[Kt++] = Ur,
    Fn = e.id,
    _n = e.overflow,
    Ur = t),
    t = Fd(t, r.children),
    t.flags |= 4096,
    t)
}
function Yf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    xc(e.return, t, n)
}
function Ru(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function pv(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (xt(e, t, r.children, n),
    r = De.current,
    (r & 2) !== 0)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Yf(e, n, t);
                else if (e.tag === 19)
                    Yf(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (Re(De, r),
    (t.mode & 1) === 0)
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Fa(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Ru(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Fa(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Ru(t, !0, n, null, i);
            break;
        case "together":
            Ru(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ca(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function jn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Hr |= t.lanes,
    (n & t.childLanes) === 0)
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(_(153));
    if (t.child !== null) {
        for (e = t.child,
        n = mr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = mr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function sx(e, t, n) {
    switch (t.tag) {
    case 3:
        cv(t),
        Oo();
        break;
    case 5:
        zg(t);
        break;
    case 1:
        kt(t.type) && Ta(t);
        break;
    case 4:
        kd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        Re(Oa, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (Re(De, De.current & 1),
            t.flags |= 128,
            null) : (n & t.child.childLanes) !== 0 ? dv(e, t, n) : (Re(De, De.current & 1),
            e = jn(e, t, n),
            e !== null ? e.sibling : null);
        Re(De, De.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        (e.flags & 128) !== 0) {
            if (r)
                return pv(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        Re(De, De.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        lv(e, t, n)
    }
    return jn(e, t, n)
}
var fv, Ic, hv, mv;
fv = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ic = function() {}
;
hv = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Br(Pn.current);
        var i = null;
        switch (n) {
        case "input":
            o = Xu(e, o),
            r = Xu(e, r),
            i = [];
            break;
        case "select":
            o = $e({}, o, {
                value: void 0
            }),
            r = $e({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Ju(e, o),
            r = Ju(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ka)
        }
        ec(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Hi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Hi.hasOwnProperty(u) ? (l != null && u === "onScroll" && Ne("scroll", e),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
mv = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function ci(e, t) {
    if (!Fe)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function dt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function ax(e, t, n) {
    var r = t.pendingProps;
    switch (wd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return dt(t),
        null;
    case 1:
        return kt(t.type) && Ra(),
        dt(t),
        null;
    case 3:
        return r = t.stateNode,
        Bo(),
        Le(It),
        Le(mt),
        Td(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && ($s(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
        cn !== null && (Bc(cn),
        cn = null))),
        Ic(e, t),
        dt(t),
        null;
    case 5:
        Rd(t);
        var o = Br(ns.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            hv(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(_(166));
                return dt(t),
                null
            }
            if (e = Br(Pn.current),
            $s(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[wn] = t,
                r[es] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    Ne("cancel", r),
                    Ne("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Ne("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Si.length; o++)
                        Ne(Si[o], r);
                    break;
                case "source":
                    Ne("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    Ne("error", r),
                    Ne("load", r);
                    break;
                case "details":
                    Ne("toggle", r);
                    break;
                case "input":
                    of(r, i),
                    Ne("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    Ne("invalid", r);
                    break;
                case "textarea":
                    af(r, i),
                    Ne("invalid", r)
                }
                ec(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var a = i[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && zs(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && zs(r.textContent, a, e),
                        o = ["children", "" + a]) : Hi.hasOwnProperty(s) && a != null && s === "onScroll" && Ne("scroll", r)
                    }
                switch (n) {
                case "input":
                    Ns(r),
                    sf(r, i, !0);
                    break;
                case "textarea":
                    Ns(r),
                    lf(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = ka)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Um(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[wn] = t,
                e[es] = r,
                fv(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = tc(n, r),
                    n) {
                    case "dialog":
                        Ne("cancel", e),
                        Ne("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Ne("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Si.length; o++)
                            Ne(Si[o], e);
                        o = r;
                        break;
                    case "source":
                        Ne("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Ne("error", e),
                        Ne("load", e),
                        o = r;
                        break;
                    case "details":
                        Ne("toggle", e),
                        o = r;
                        break;
                    case "input":
                        of(e, r),
                        o = Xu(e, r),
                        Ne("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = $e({}, r, {
                            value: void 0
                        }),
                        Ne("invalid", e);
                        break;
                    case "textarea":
                        af(e, r),
                        o = Ju(e, r),
                        Ne("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    ec(n, o),
                    a = o;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? Wm(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && jm(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Wi(e, l) : typeof l == "number" && Wi(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Hi.hasOwnProperty(i) ? l != null && i === "onScroll" && Ne("scroll", e) : l != null && sd(e, i, l, s))
                        }
                    switch (n) {
                    case "input":
                        Ns(e),
                        sf(e, r, !1);
                        break;
                    case "textarea":
                        Ns(e),
                        lf(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + gr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? wo(e, !!r.multiple, i, !1) : r.defaultValue != null && wo(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = ka)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return dt(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            mv(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(_(166));
            if (n = Br(ns.current),
            Br(Pn.current),
            $s(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[wn] = t,
                (i = r.nodeValue !== n) && (e = Dt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        zs(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && zs(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[wn] = t,
                t.stateNode = r
        }
        return dt(t),
        null;
    case 13:
        if (Le(De),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Fe && _t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                Lg(),
                Oo(),
                t.flags |= 98560,
                i = !1;
            else if (i = $s(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(_(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(_(317));
                    i[wn] = t
                } else
                    Oo(),
                    (t.flags & 128) === 0 && (t.memoizedState = null),
                    t.flags |= 4;
                dt(t),
                i = !1
            } else
                cn !== null && (Bc(cn),
                cn = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        (t.mode & 1) !== 0 && (e === null || (De.current & 1) !== 0 ? qe === 0 && (qe = 3) : Ud())),
        t.updateQueue !== null && (t.flags |= 4),
        dt(t),
        null);
    case 4:
        return Bo(),
        Ic(e, t),
        e === null && Ji(t.stateNode.containerInfo),
        dt(t),
        null;
    case 10:
        return Ed(t.type._context),
        dt(t),
        null;
    case 17:
        return kt(t.type) && Ra(),
        dt(t),
        null;
    case 19:
        if (Le(De),
        i = t.memoizedState,
        i === null)
            return dt(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                ci(i, !1);
            else {
                if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
                    for (e = t.child; e !== null; ) {
                        if (s = Fa(e),
                        s !== null) {
                            for (t.flags |= 128,
                            ci(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return Re(De, De.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && He() > _o && (t.flags |= 128,
                r = !0,
                ci(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Fa(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    ci(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !Fe)
                        return dt(t),
                        null
                } else
                    2 * He() - i.renderingStartTime > _o && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    ci(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = He(),
        t.sibling = null,
        n = De.current,
        Re(De, r ? n & 1 | 2 : n & 1),
        t) : (dt(t),
        null);
    case 22:
    case 23:
        return Vd(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0 ? (Bt & 1073741824) !== 0 && (dt(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : dt(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(_(156, t.tag))
}
function lx(e, t) {
    switch (wd(t),
    t.tag) {
    case 1:
        return kt(t.type) && Ra(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Bo(),
        Le(It),
        Le(mt),
        Td(),
        e = t.flags,
        (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Rd(t),
        null;
    case 13:
        if (Le(De),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(_(340));
            Oo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Le(De),
        null;
    case 4:
        return Bo(),
        null;
    case 10:
        return Ed(t.type._context),
        null;
    case 22:
    case 23:
        return Vd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var js = !1
  , ft = !1
  , ux = typeof WeakSet == "function" ? WeakSet : Set
  , G = null;
function go(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                je(e, t, r)
            }
        else
            n.current = null
}
function kc(e, t, n) {
    try {
        n()
    } catch (r) {
        je(e, t, r)
    }
}
var qf = !1;
function cx(e, t) {
    if (dc = Ea,
    e = xg(),
    xd(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , p = null;
                    t: for (; ; ) {
                        for (var v; f !== n || o !== 0 && f.nodeType !== 3 || (a = s + o),
                        f !== i || r !== 0 && f.nodeType !== 3 || (l = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (v = f.firstChild) !== null; )
                            p = f,
                            f = v;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (p === n && ++u === o && (a = s),
                            p === i && ++c === r && (l = s),
                            (v = f.nextSibling) !== null)
                                break;
                            f = p,
                            p = f.parentNode
                        }
                        f = v
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (pc = {
        focusedElem: e,
        selectionRange: n
    },
    Ea = !1,
    G = t; G !== null; )
        if (t = G,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            G = e;
        else
            for (; G !== null; ) {
                t = G;
                try {
                    var x = t.alternate;
                    if ((t.flags & 1024) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var g = x.memoizedProps
                                  , P = x.memoizedState
                                  , m = t.stateNode
                                  , h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ln(t.type, g), P);
                                m.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var d = t.stateNode.containerInfo;
                            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(_(163))
                        }
                } catch (y) {
                    je(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    G = e;
                    break
                }
                G = t.return
            }
    return x = qf,
    qf = !1,
    x
}
function Mi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && kc(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function sl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Rc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function gv(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    gv(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[wn],
    delete t[es],
    delete t[mc],
    delete t[Q1],
    delete t[G1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function vv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Jf(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || vv(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Tc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ka));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Tc(e, t, n),
        e = e.sibling; e !== null; )
            Tc(e, t, n),
            e = e.sibling
}
function Nc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Nc(e, t, n),
        e = e.sibling; e !== null; )
            Nc(e, t, n),
            e = e.sibling
}
var rt = null
  , un = !1;
function Xn(e, t, n) {
    for (n = n.child; n !== null; )
        yv(e, t, n),
        n = n.sibling
}
function yv(e, t, n) {
    if (En && typeof En.onCommitFiberUnmount == "function")
        try {
            En.onCommitFiberUnmount(Ja, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ft || go(n, t);
    case 6:
        var r = rt
          , o = un;
        rt = null,
        Xn(e, t, n),
        rt = r,
        un = o,
        rt !== null && (un ? (e = rt,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : rt.removeChild(n.stateNode));
        break;
    case 18:
        rt !== null && (un ? (e = rt,
        n = n.stateNode,
        e.nodeType === 8 ? Au(e.parentNode, n) : e.nodeType === 1 && Au(e, n),
        Xi(e)) : Au(rt, n.stateNode));
        break;
    case 4:
        r = rt,
        o = un,
        rt = n.stateNode.containerInfo,
        un = !0,
        Xn(e, t, n),
        rt = r,
        un = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ft && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && kc(n, t, s),
                o = o.next
            } while (o !== r)
        }
        Xn(e, t, n);
        break;
    case 1:
        if (!ft && (go(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                je(n, t, a)
            }
        Xn(e, t, n);
        break;
    case 21:
        Xn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ft = (r = ft) || n.memoizedState !== null,
        Xn(e, t, n),
        ft = r) : Xn(e, t, n);
        break;
    default:
        Xn(e, t, n)
    }
}
function Zf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ux),
        t.forEach(function(r) {
            var o = xx.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function an(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        rt = a.stateNode,
                        un = !1;
                        break e;
                    case 3:
                        rt = a.stateNode.containerInfo,
                        un = !0;
                        break e;
                    case 4:
                        rt = a.stateNode.containerInfo,
                        un = !0;
                        break e
                    }
                    a = a.return
                }
                if (rt === null)
                    throw Error(_(160));
                yv(i, s, o),
                rt = null,
                un = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                je(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            xv(t, e),
            t = t.sibling
}
function xv(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (an(t, e),
        vn(e),
        r & 4) {
            try {
                Mi(3, e, e.return),
                sl(3, e)
            } catch (g) {
                je(e, e.return, g)
            }
            try {
                Mi(5, e, e.return)
            } catch (g) {
                je(e, e.return, g)
            }
        }
        break;
    case 1:
        an(t, e),
        vn(e),
        r & 512 && n !== null && go(n, n.return);
        break;
    case 5:
        if (an(t, e),
        vn(e),
        r & 512 && n !== null && go(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Wi(o, "")
            } catch (g) {
                je(e, e.return, g)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && $m(o, i),
                    tc(a, s);
                    var u = tc(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s]
                          , f = l[s + 1];
                        c === "style" ? Wm(o, f) : c === "dangerouslySetInnerHTML" ? jm(o, f) : c === "children" ? Wi(o, f) : sd(o, c, f, u)
                    }
                    switch (a) {
                    case "input":
                        Yu(o, i);
                        break;
                    case "textarea":
                        Vm(o, i);
                        break;
                    case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var v = i.value;
                        v != null ? wo(o, !!i.multiple, v, !1) : p !== !!i.multiple && (i.defaultValue != null ? wo(o, !!i.multiple, i.defaultValue, !0) : wo(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[es] = i
                } catch (g) {
                    je(e, e.return, g)
                }
        }
        break;
    case 6:
        if (an(t, e),
        vn(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(_(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (g) {
                je(e, e.return, g)
            }
        }
        break;
    case 3:
        if (an(t, e),
        vn(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Xi(t.containerInfo)
            } catch (g) {
                je(e, e.return, g)
            }
        break;
    case 4:
        an(t, e),
        vn(e);
        break;
    case 13:
        an(t, e),
        vn(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (zd = He())),
        r & 4 && Zf(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ft = (u = ft) || c,
        an(t, e),
        ft = u) : an(t, e),
        vn(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
                for (G = e,
                c = e.child; c !== null; ) {
                    for (f = G = c; G !== null; ) {
                        switch (p = G,
                        v = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Mi(4, p, p.return);
                            break;
                        case 1:
                            go(p, p.return);
                            var x = p.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (g) {
                                    je(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            go(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                th(f);
                                continue
                            }
                        }
                        v !== null ? (v.return = p,
                        G = v) : th(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            o = f.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Hm("display", s))
                        } catch (g) {
                            je(e, e.return, g)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (g) {
                            je(e, e.return, g)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        an(t, e),
        vn(e),
        r & 4 && Zf(e);
        break;
    case 21:
        break;
    default:
        an(t, e),
        vn(e)
    }
}
function vn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (vv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(_(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Wi(o, ""),
                r.flags &= -33);
                var i = Jf(e);
                Nc(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = Jf(e);
                Tc(e, a, s);
                break;
            default:
                throw Error(_(161))
            }
        } catch (l) {
            je(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function dx(e, t, n) {
    G = e,
    Cv(e)
}
function Cv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; G !== null; ) {
        var o = G
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || js;
            if (!s) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || ft;
                a = js;
                var u = ft;
                if (js = s,
                (ft = l) && !u)
                    for (G = o; G !== null; )
                        s = G,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? nh(o) : l !== null ? (l.return = s,
                        G = l) : nh(o);
                for (; i !== null; )
                    G = i,
                    Cv(i),
                    i = i.sibling;
                G = o,
                js = a,
                ft = u
            }
            eh(e)
        } else
            (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o,
            G = i) : eh(e)
    }
}
function eh(e) {
    for (; G !== null; ) {
        var t = G;
        if ((t.flags & 8772) !== 0) {
            var n = t.alternate;
            try {
                if ((t.flags & 8772) !== 0)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ft || sl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ft)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ln(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && _f(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            _f(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Xi(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(_(163))
                    }
                ft || t.flags & 512 && Rc(t)
            } catch (p) {
                je(t, t.return, p)
            }
        }
        if (t === e) {
            G = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            G = n;
            break
        }
        G = t.return
    }
}
function th(e) {
    for (; G !== null; ) {
        var t = G;
        if (t === e) {
            G = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            G = n;
            break
        }
        G = t.return
    }
}
function nh(e) {
    for (; G !== null; ) {
        var t = G;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    sl(4, t)
                } catch (l) {
                    je(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        je(t, o, l)
                    }
                }
                var i = t.return;
                try {
                    Rc(t)
                } catch (l) {
                    je(t, i, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Rc(t)
                } catch (l) {
                    je(t, s, l)
                }
            }
        } catch (l) {
            je(t, t.return, l)
        }
        if (t === e) {
            G = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            G = a;
            break
        }
        G = t.return
    }
}
var px = Math.ceil
  , za = Qn.ReactCurrentDispatcher
  , _d = Qn.ReactCurrentOwner
  , Yt = Qn.ReactCurrentBatchConfig
  , fe = 0
  , et = null
  , Ge = null
  , it = 0
  , Bt = 0
  , vo = wr(0)
  , qe = 0
  , ss = null
  , Hr = 0
  , al = 0
  , Dd = 0
  , Bi = null
  , Et = null
  , zd = 0
  , _o = 1 / 0
  , Ln = null
  , $a = !1
  , Lc = null
  , fr = null
  , Hs = !1
  , or = null
  , Va = 0
  , Fi = 0
  , Oc = null
  , da = -1
  , pa = 0;
function Ct() {
    return (fe & 6) !== 0 ? He() : da !== -1 ? da : da = He()
}
function hr(e) {
    return (e.mode & 1) === 0 ? 1 : (fe & 2) !== 0 && it !== 0 ? it & -it : X1.transition !== null ? (pa === 0 && (pa = rg()),
    pa) : (e = Ce,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : cg(e.type)),
    e)
}
function fn(e, t, n, r) {
    if (50 < Fi)
        throw Fi = 0,
        Oc = null,
        Error(_(185));
    vs(e, n, r),
    ((fe & 2) === 0 || e !== et) && (e === et && ((fe & 2) === 0 && (al |= n),
    qe === 4 && nr(e, it)),
    Rt(e, r),
    n === 1 && fe === 0 && (t.mode & 1) === 0 && (_o = He() + 500,
    rl && Ar()))
}
function Rt(e, t) {
    var n = e.callbackNode;
    X0(e, t);
    var r = Sa(e, e === et ? it : 0);
    if (r === 0)
        n !== null && df(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && df(n),
        t === 1)
            e.tag === 0 ? K1(rh.bind(null, e)) : Rg(rh.bind(null, e)),
            H1(function() {
                (fe & 6) === 0 && Ar()
            }),
            n = null;
        else {
            switch (og(r)) {
            case 1:
                n = dd;
                break;
            case 4:
                n = tg;
                break;
            case 16:
                n = ba;
                break;
            case 536870912:
                n = ng;
                break;
            default:
                n = ba
            }
            n = kv(n, wv.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function wv(e, t) {
    if (da = -1,
    pa = 0,
    (fe & 6) !== 0)
        throw Error(_(327));
    var n = e.callbackNode;
    if (Po() && e.callbackNode !== n)
        return null;
    var r = Sa(e, e === et ? it : 0);
    if (r === 0)
        return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
        t = Ua(e, r);
    else {
        t = r;
        var o = fe;
        fe |= 2;
        var i = bv();
        (et !== e || it !== t) && (Ln = null,
        _o = He() + 500,
        Dr(e, t));
        do
            try {
                mx();
                break
            } catch (a) {
                Av(e, a)
            }
        while (1);
        Sd(),
        za.current = i,
        fe = o,
        Ge !== null ? t = 0 : (et = null,
        it = 0,
        t = qe)
    }
    if (t !== 0) {
        if (t === 2 && (o = sc(e),
        o !== 0 && (r = o,
        t = Mc(e, o))),
        t === 1)
            throw n = ss,
            Dr(e, 0),
            nr(e, r),
            Rt(e, He()),
            n;
        if (t === 6)
            nr(e, r);
        else {
            if (o = e.current.alternate,
            (r & 30) === 0 && !fx(o) && (t = Ua(e, r),
            t === 2 && (i = sc(e),
            i !== 0 && (r = i,
            t = Mc(e, i))),
            t === 1))
                throw n = ss,
                Dr(e, 0),
                nr(e, r),
                Rt(e, He()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(_(345));
            case 2:
                kr(e, Et, Ln);
                break;
            case 3:
                if (nr(e, r),
                (r & 130023424) === r && (t = zd + 500 - He(),
                10 < t)) {
                    if (Sa(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ct(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = hc(kr.bind(null, e, Et, Ln), t);
                    break
                }
                kr(e, Et, Ln);
                break;
            case 4:
                if (nr(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - pn(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = He() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * px(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = hc(kr.bind(null, e, Et, Ln), r);
                    break
                }
                kr(e, Et, Ln);
                break;
            case 5:
                kr(e, Et, Ln);
                break;
            default:
                throw Error(_(329))
            }
        }
    }
    return Rt(e, He()),
    e.callbackNode === n ? wv.bind(null, e) : null
}
function Mc(e, t) {
    var n = Bi;
    return e.current.memoizedState.isDehydrated && (Dr(e, t).flags |= 256),
    e = Ua(e, t),
    e !== 2 && (t = Et,
    Et = n,
    t !== null && Bc(t)),
    e
}
function Bc(e) {
    Et === null ? Et = e : Et.push.apply(Et, e)
}
function fx(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!hn(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function nr(e, t) {
    for (t &= ~Dd,
    t &= ~al,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - pn(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function rh(e) {
    if ((fe & 6) !== 0)
        throw Error(_(327));
    Po();
    var t = Sa(e, 0);
    if ((t & 1) === 0)
        return Rt(e, He()),
        null;
    var n = Ua(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = sc(e);
        r !== 0 && (t = r,
        n = Mc(e, r))
    }
    if (n === 1)
        throw n = ss,
        Dr(e, 0),
        nr(e, t),
        Rt(e, He()),
        n;
    if (n === 6)
        throw Error(_(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    kr(e, Et, Ln),
    Rt(e, He()),
    null
}
function $d(e, t) {
    var n = fe;
    fe |= 1;
    try {
        return e(t)
    } finally {
        fe = n,
        fe === 0 && (_o = He() + 500,
        rl && Ar())
    }
}
function Wr(e) {
    or !== null && or.tag === 0 && (fe & 6) === 0 && Po();
    var t = fe;
    fe |= 1;
    var n = Yt.transition
      , r = Ce;
    try {
        if (Yt.transition = null,
        Ce = 1,
        e)
            return e()
    } finally {
        Ce = r,
        Yt.transition = n,
        fe = t,
        (fe & 6) === 0 && Ar()
    }
}
function Vd() {
    Bt = vo.current,
    Le(vo)
}
function Dr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    j1(n)),
    Ge !== null)
        for (n = Ge.return; n !== null; ) {
            var r = n;
            switch (wd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ra();
                break;
            case 3:
                Bo(),
                Le(It),
                Le(mt),
                Td();
                break;
            case 5:
                Rd(r);
                break;
            case 4:
                Bo();
                break;
            case 13:
                Le(De);
                break;
            case 19:
                Le(De);
                break;
            case 10:
                Ed(r.type._context);
                break;
            case 22:
            case 23:
                Vd()
            }
            n = n.return
        }
    if (et = e,
    Ge = e = mr(e.current, null),
    it = Bt = t,
    qe = 0,
    ss = null,
    Dd = al = Hr = 0,
    Et = Bi = null,
    Mr !== null) {
        for (t = 0; t < Mr.length; t++)
            if (n = Mr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Mr = null
    }
    return e
}
function Av(e, t) {
    do {
        var n = Ge;
        try {
            if (Sd(),
            la.current = Da,
            _a) {
                for (var r = ze.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                _a = !1
            }
            if (jr = 0,
            Ze = Ye = ze = null,
            Oi = !1,
            rs = 0,
            _d.current = null,
            n === null || n.return === null) {
                qe = 1,
                ss = t,
                Ge = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = it,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , f = c.tag;
                    if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue,
                        c.memoizedState = p.memoizedState,
                        c.lanes = p.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var v = Hf(s);
                    if (v !== null) {
                        v.flags &= -257,
                        Wf(v, s, a, i, t),
                        v.mode & 1 && jf(i, u, t),
                        t = v,
                        l = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var g = new Set;
                            g.add(l),
                            t.updateQueue = g
                        } else
                            x.add(l);
                        break e
                    } else {
                        if ((t & 1) === 0) {
                            jf(i, u, t),
                            Ud();
                            break e
                        }
                        l = Error(_(426))
                    }
                } else if (Fe && a.mode & 1) {
                    var P = Hf(s);
                    if (P !== null) {
                        (P.flags & 65536) === 0 && (P.flags |= 256),
                        Wf(P, s, a, i, t),
                        Ad(Fo(l, a));
                        break e
                    }
                }
                i = l = Fo(l, a),
                qe !== 4 && (qe = 2),
                Bi === null ? Bi = [i] : Bi.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = iv(i, l, t);
                        Ff(i, m);
                        break e;
                    case 1:
                        a = l;
                        var h = i.type
                          , d = i.stateNode;
                        if ((i.flags & 128) === 0 && (typeof h.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (fr === null || !fr.has(d)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var y = sv(i, a, t);
                            Ff(i, y);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Ev(n)
        } catch (A) {
            t = A,
            Ge === n && n !== null && (Ge = n = n.return);
            continue
        }
        break
    } while (1)
}
function bv() {
    var e = za.current;
    return za.current = Da,
    e === null ? Da : e
}
function Ud() {
    (qe === 0 || qe === 3 || qe === 2) && (qe = 4),
    et === null || (Hr & 268435455) === 0 && (al & 268435455) === 0 || nr(et, it)
}
function Ua(e, t) {
    var n = fe;
    fe |= 2;
    var r = bv();
    (et !== e || it !== t) && (Ln = null,
    Dr(e, t));
    do
        try {
            hx();
            break
        } catch (o) {
            Av(e, o)
        }
    while (1);
    if (Sd(),
    fe = n,
    za.current = r,
    Ge !== null)
        throw Error(_(261));
    return et = null,
    it = 0,
    qe
}
function hx() {
    for (; Ge !== null; )
        Sv(Ge)
}
function mx() {
    for (; Ge !== null && !$0(); )
        Sv(Ge)
}
function Sv(e) {
    var t = Iv(e.alternate, e, Bt);
    e.memoizedProps = e.pendingProps,
    t === null ? Ev(e) : Ge = t,
    _d.current = null
}
function Ev(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        (t.flags & 32768) === 0) {
            if (n = ax(n, t, Bt),
            n !== null) {
                Ge = n;
                return
            }
        } else {
            if (n = lx(n, t),
            n !== null) {
                n.flags &= 32767,
                Ge = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                qe = 6,
                Ge = null;
                return
            }
        }
        if (t = t.sibling,
        t !== null) {
            Ge = t;
            return
        }
        Ge = t = e
    } while (t !== null);
    qe === 0 && (qe = 5)
}
function kr(e, t, n) {
    var r = Ce
      , o = Yt.transition;
    try {
        Yt.transition = null,
        Ce = 1,
        gx(e, t, n, r)
    } finally {
        Yt.transition = o,
        Ce = r
    }
    return null
}
function gx(e, t, n, r) {
    do
        Po();
    while (or !== null);
    if ((fe & 6) !== 0)
        throw Error(_(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(_(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Y0(e, i),
    e === et && (Ge = et = null,
    it = 0),
    (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Hs || (Hs = !0,
    kv(ba, function() {
        return Po(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    (n.subtreeFlags & 15990) !== 0 || i) {
        i = Yt.transition,
        Yt.transition = null;
        var s = Ce;
        Ce = 1;
        var a = fe;
        fe |= 4,
        _d.current = null,
        cx(e, n),
        xv(n, e),
        F1(pc),
        Ea = !!dc,
        pc = dc = null,
        e.current = n,
        dx(n),
        V0(),
        fe = a,
        Ce = s,
        Yt.transition = i
    } else
        e.current = n;
    if (Hs && (Hs = !1,
    or = e,
    Va = o),
    i = e.pendingLanes,
    i === 0 && (fr = null),
    H0(n.stateNode),
    Rt(e, He()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if ($a)
        throw $a = !1,
        e = Lc,
        Lc = null,
        e;
    return (Va & 1) !== 0 && e.tag !== 0 && Po(),
    i = e.pendingLanes,
    (i & 1) !== 0 ? e === Oc ? Fi++ : (Fi = 0,
    Oc = e) : Fi = 0,
    Ar(),
    null
}
function Po() {
    if (or !== null) {
        var e = og(Va)
          , t = Yt.transition
          , n = Ce;
        try {
            if (Yt.transition = null,
            Ce = 16 > e ? 16 : e,
            or === null)
                var r = !1;
            else {
                if (e = or,
                or = null,
                Va = 0,
                (fe & 6) !== 0)
                    throw Error(_(331));
                var o = fe;
                for (fe |= 4,
                G = e.current; G !== null; ) {
                    var i = G
                      , s = i.child;
                    if ((G.flags & 16) !== 0) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (G = u; G !== null; ) {
                                    var c = G;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Mi(8, c, i)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        G = f;
                                    else
                                        for (; G !== null; ) {
                                            c = G;
                                            var p = c.sibling
                                              , v = c.return;
                                            if (gv(c),
                                            c === u) {
                                                G = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = v,
                                                G = p;
                                                break
                                            }
                                            G = v
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var g = x.child;
                                if (g !== null) {
                                    x.child = null;
                                    do {
                                        var P = g.sibling;
                                        g.sibling = null,
                                        g = P
                                    } while (g !== null)
                                }
                            }
                            G = i
                        }
                    }
                    if ((i.subtreeFlags & 2064) !== 0 && s !== null)
                        s.return = i,
                        G = s;
                    else
                        e: for (; G !== null; ) {
                            if (i = G,
                            (i.flags & 2048) !== 0)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Mi(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                G = m;
                                break e
                            }
                            G = i.return
                        }
                }
                var h = e.current;
                for (G = h; G !== null; ) {
                    s = G;
                    var d = s.child;
                    if ((s.subtreeFlags & 2064) !== 0 && d !== null)
                        d.return = s,
                        G = d;
                    else
                        e: for (s = h; G !== null; ) {
                            if (a = G,
                            (a.flags & 2048) !== 0)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        sl(9, a)
                                    }
                                } catch (A) {
                                    je(a, a.return, A)
                                }
                            if (a === s) {
                                G = null;
                                break e
                            }
                            var y = a.sibling;
                            if (y !== null) {
                                y.return = a.return,
                                G = y;
                                break e
                            }
                            G = a.return
                        }
                }
                if (fe = o,
                Ar(),
                En && typeof En.onPostCommitFiberRoot == "function")
                    try {
                        En.onPostCommitFiberRoot(Ja, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Ce = n,
            Yt.transition = t
        }
    }
    return !1
}
function oh(e, t, n) {
    t = Fo(n, t),
    t = iv(e, t, 1),
    e = pr(e, t, 1),
    t = Ct(),
    e !== null && (vs(e, 1, t),
    Rt(e, t))
}
function je(e, t, n) {
    if (e.tag === 3)
        oh(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                oh(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fr === null || !fr.has(r))) {
                    e = Fo(n, e),
                    e = sv(t, e, 1),
                    t = pr(t, e, 1),
                    e = Ct(),
                    t !== null && (vs(t, 1, e),
                    Rt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function vx(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ct(),
    e.pingedLanes |= e.suspendedLanes & n,
    et === e && (it & n) === n && (qe === 4 || qe === 3 && (it & 130023424) === it && 500 > He() - zd ? Dr(e, 0) : Dd |= n),
    Rt(e, t)
}
function Pv(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Ms,
    Ms <<= 1,
    (Ms & 130023424) === 0 && (Ms = 4194304)));
    var n = Ct();
    e = Un(e, t),
    e !== null && (vs(e, t, n),
    Rt(e, n))
}
function yx(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Pv(e, n)
}
function xx(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(_(314))
    }
    r !== null && r.delete(t),
    Pv(e, n)
}
var Iv;
Iv = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || It.current)
            Pt = !0;
        else {
            if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
                return Pt = !1,
                sx(e, t, n);
            Pt = (e.flags & 131072) !== 0
        }
    else
        Pt = !1,
        Fe && (t.flags & 1048576) !== 0 && Tg(t, La, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ca(e, t),
        e = t.pendingProps;
        var o = Lo(t, mt.current);
        Eo(t, n),
        o = Ld(null, t, r, e, o, n);
        var i = Od();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        kt(r) ? (i = !0,
        Ta(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Id(t),
        o.updater = ol,
        t.stateNode = o,
        o._reactInternals = t,
        wc(t, r, e, n),
        t = Sc(null, t, r, !0, i, n)) : (t.tag = 0,
        Fe && i && Cd(t),
        xt(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ca(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = wx(r),
            e = ln(r, e),
            o) {
            case 0:
                t = bc(null, t, r, e, n);
                break e;
            case 1:
                t = Kf(null, t, r, e, n);
                break e;
            case 11:
                t = Qf(null, t, r, e, n);
                break e;
            case 14:
                t = Gf(null, t, r, ln(r.type, e), n);
                break e
            }
            throw Error(_(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ln(r, o),
        bc(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ln(r, o),
        Kf(e, t, r, o, n);
    case 3:
        e: {
            if (cv(t),
            e === null)
                throw Error(_(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Mg(e, t),
            Ba(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Fo(Error(_(423)), t),
                    t = Xf(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Fo(Error(_(424)), t),
                    t = Xf(e, t, r, n, o);
                    break e
                } else
                    for (_t = dr(t.stateNode.containerInfo.firstChild),
                    Dt = t,
                    Fe = !0,
                    cn = null,
                    n = Dg(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Oo(),
                r === o) {
                    t = jn(e, t, n);
                    break e
                }
                xt(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return zg(t),
        e === null && yc(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        fc(r, o) ? s = null : i !== null && fc(r, i) && (t.flags |= 32),
        uv(e, t),
        xt(e, t, s, n),
        t.child;
    case 6:
        return e === null && yc(t),
        null;
    case 13:
        return dv(e, t, n);
    case 4:
        return kd(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Mo(t, null, r, n) : xt(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ln(r, o),
        Qf(e, t, r, o, n);
    case 7:
        return xt(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return xt(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return xt(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            Re(Oa, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (hn(i.value, s)) {
                    if (i.children === o.children && !It.current) {
                        t = jn(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            s = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = Dn(-1, n & -n),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    xc(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(_(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            xc(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            xt(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Eo(t, n),
        o = Zt(o),
        r = r(o),
        t.flags |= 1,
        xt(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = ln(r, t.pendingProps),
        o = ln(r.type, o),
        Gf(e, t, r, o, n);
    case 15:
        return av(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ln(r, o),
        ca(e, t),
        t.tag = 1,
        kt(r) ? (e = !0,
        Ta(t)) : e = !1,
        Eo(t, n),
        Fg(t, r, o),
        wc(t, r, o, n),
        Sc(null, t, r, !0, e, n);
    case 19:
        return pv(e, t, n);
    case 22:
        return lv(e, t, n)
    }
    throw Error(_(156, t.tag))
}
;
function kv(e, t) {
    return eg(e, t)
}
function Cx(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Xt(e, t, n, r) {
    return new Cx(e,t,n,r)
}
function jd(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function wx(e) {
    if (typeof e == "function")
        return jd(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === ld)
            return 11;
        if (e === ud)
            return 14
    }
    return 2
}
function mr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Xt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function fa(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        jd(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case so:
            return zr(n.children, o, i, t);
        case ad:
            s = 8,
            o |= 8;
            break;
        case Wu:
            return e = Xt(12, n, t, o | 2),
            e.elementType = Wu,
            e.lanes = i,
            e;
        case Qu:
            return e = Xt(13, n, t, o),
            e.elementType = Qu,
            e.lanes = i,
            e;
        case Gu:
            return e = Xt(19, n, t, o),
            e.elementType = Gu,
            e.lanes = i,
            e;
        case _m:
            return ll(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Bm:
                    s = 10;
                    break e;
                case Fm:
                    s = 9;
                    break e;
                case ld:
                    s = 11;
                    break e;
                case ud:
                    s = 14;
                    break e;
                case Zn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(_(130, e == null ? e : typeof e, ""))
        }
    return t = Xt(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function zr(e, t, n, r) {
    return e = Xt(7, e, r, t),
    e.lanes = n,
    e
}
function ll(e, t, n, r) {
    return e = Xt(22, e, r, t),
    e.elementType = _m,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Tu(e, t, n) {
    return e = Xt(6, e, null, t),
    e.lanes = n,
    e
}
function Nu(e, t, n) {
    return t = Xt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Ax(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = du(0),
    this.expirationTimes = du(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = du(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Hd(e, t, n, r, o, i, s, a, l) {
    return e = new Ax(e,t,n,a,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Xt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Id(i),
    e
}
function bx(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: io,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Rv(e) {
    if (!e)
        return vr;
    e = e._reactInternals;
    e: {
        if (Xr(e) !== e || e.tag !== 1)
            throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (kt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(_(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (kt(n))
            return kg(e, n, t)
    }
    return t
}
function Tv(e, t, n, r, o, i, s, a, l) {
    return e = Hd(n, r, !0, e, o, i, s, a, l),
    e.context = Rv(null),
    n = e.current,
    r = Ct(),
    o = hr(n),
    i = Dn(r, o),
    i.callback = t != null ? t : null,
    pr(n, i, o),
    e.current.lanes = o,
    vs(e, o, r),
    Rt(e, r),
    e
}
function ul(e, t, n, r) {
    var o = t.current
      , i = Ct()
      , s = hr(o);
    return n = Rv(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Dn(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = pr(o, t, s),
    e !== null && (fn(e, o, s, i),
    aa(e, o, s)),
    s
}
function ja(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function ih(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Wd(e, t) {
    ih(e, t),
    (e = e.alternate) && ih(e, t)
}
function Sx() {
    return null
}
var Nv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Qd(e) {
    this._internalRoot = e
}
cl.prototype.render = Qd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(_(409));
    ul(e, t, null, null)
}
;
cl.prototype.unmount = Qd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Wr(function() {
            ul(null, e, null, null)
        }),
        t[Vn] = null
    }
}
;
function cl(e) {
    this._internalRoot = e
}
cl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ag();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < tr.length && t !== 0 && t < tr[n].priority; n++)
            ;
        tr.splice(n, 0, e),
        n === 0 && ug(e)
    }
}
;
function Gd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function dl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function sh() {}
function Ex(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = ja(s);
                i.call(u)
            }
        }
        var s = Tv(t, r, e, 0, null, !1, !1, "", sh);
        return e._reactRootContainer = s,
        e[Vn] = s.current,
        Ji(e.nodeType === 8 ? e.parentNode : e),
        Wr(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = ja(l);
            a.call(u)
        }
    }
    var l = Hd(e, 0, !1, null, null, !1, !1, "", sh);
    return e._reactRootContainer = l,
    e[Vn] = l.current,
    Ji(e.nodeType === 8 ? e.parentNode : e),
    Wr(function() {
        ul(t, l, n, r)
    }),
    l
}
function pl(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = ja(s);
                a.call(l)
            }
        }
        ul(t, s, e, o)
    } else
        s = Ex(n, t, e, o, r);
    return ja(s)
}
ig = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = bi(t.pendingLanes);
            n !== 0 && (pd(t, n | 1),
            Rt(t, He()),
            (fe & 6) === 0 && (_o = He() + 500,
            Ar()))
        }
        break;
    case 13:
        Wr(function() {
            var r = Un(e, 1);
            if (r !== null) {
                var o = Ct();
                fn(r, e, 1, o)
            }
        }),
        Wd(e, 1)
    }
}
;
fd = function(e) {
    if (e.tag === 13) {
        var t = Un(e, 134217728);
        if (t !== null) {
            var n = Ct();
            fn(t, e, 134217728, n)
        }
        Wd(e, 134217728)
    }
}
;
sg = function(e) {
    if (e.tag === 13) {
        var t = hr(e)
          , n = Un(e, t);
        if (n !== null) {
            var r = Ct();
            fn(n, e, t, r)
        }
        Wd(e, t)
    }
}
;
ag = function() {
    return Ce
}
;
lg = function(e, t) {
    var n = Ce;
    try {
        return Ce = e,
        t()
    } finally {
        Ce = n
    }
}
;
rc = function(e, t, n) {
    switch (t) {
    case "input":
        if (Yu(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = nl(r);
                    if (!o)
                        throw Error(_(90));
                    zm(r),
                    Yu(r, o)
                }
            }
        }
        break;
    case "textarea":
        Vm(e, n);
        break;
    case "select":
        t = n.value,
        t != null && wo(e, !!n.multiple, t, !1)
    }
}
;
Km = $d;
Xm = Wr;
var Px = {
    usingClientEntryPoint: !1,
    Events: [xs, co, nl, Qm, Gm, $d]
}
  , di = {
    findFiberByHostInstance: Or,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , Ix = {
    bundleType: di.bundleType,
    version: di.version,
    rendererPackageName: di.rendererPackageName,
    rendererConfig: di.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Jm(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: di.findFiberByHostInstance || Sx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ws.isDisabled && Ws.supportsFiber)
        try {
            Ja = Ws.inject(Ix),
            En = Ws
        } catch {}
}
Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Px;
Ut.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gd(t))
        throw Error(_(200));
    return bx(e, t, null, n)
}
;
Ut.createRoot = function(e, t) {
    if (!Gd(e))
        throw Error(_(299));
    var n = !1
      , r = ""
      , o = Nv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Hd(e, 1, !1, null, null, n, !1, r, o),
    e[Vn] = t.current,
    Ji(e.nodeType === 8 ? e.parentNode : e),
    new Qd(t)
}
;
Ut.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","),
        Error(_(268, e)));
    return e = Jm(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ut.flushSync = function(e) {
    return Wr(e)
}
;
Ut.hydrate = function(e, t, n) {
    if (!dl(t))
        throw Error(_(200));
    return pl(null, e, t, !0, n)
}
;
Ut.hydrateRoot = function(e, t, n) {
    if (!Gd(e))
        throw Error(_(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = Nv;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Tv(t, null, e, 1, n != null ? n : null, o, !1, i, s),
    e[Vn] = t.current,
    Ji(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new cl(t)
}
;
Ut.render = function(e, t, n) {
    if (!dl(t))
        throw Error(_(200));
    return pl(null, e, t, !1, n)
}
;
Ut.unmountComponentAtNode = function(e) {
    if (!dl(e))
        throw Error(_(40));
    return e._reactRootContainer ? (Wr(function() {
        pl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Vn] = null
        })
    }),
    !0) : !1
}
;
Ut.unstable_batchedUpdates = $d;
Ut.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!dl(n))
        throw Error(_(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(_(38));
    return pl(e, t, n, !1, r)
}
;
Ut.version = "18.2.0-next-9e3b772b8-20220608";
function Lv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)
        } catch (e) {
            console.error(e)
        }
}
Lv(),
gs.exports = Ut;
var Qs = gs.exports
  , ah = gs.exports;
ef.createRoot = ah.createRoot,
ef.hydrateRoot = ah.hydrateRoot;
function q(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++)
        o = r[i],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function w() {
    return w = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    w.apply(this, arguments)
}
function Ov(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = Ov(e[t])) && (r && (r += " "),
                r += n);
        else
            for (t in e)
                e[t] && (r && (r += " "),
                r += t);
    return r
}
function ee() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = Ov(e)) && (r && (r += " "),
        r += t);
    return r
}
function Nr(e) {
    return e !== null && typeof e == "object" && e.constructor === Object
}
function Mv(e) {
    if (!Nr(e))
        return e;
    const t = {};
    return Object.keys(e).forEach(n=>{
        t[n] = Mv(e[n])
    }
    ),
    t
}
function qt(e, t, n={
    clone: !0
}) {
    const r = n.clone ? w({}, e) : e;
    return Nr(e) && Nr(t) && Object.keys(t).forEach(o=>{
        o !== "__proto__" && (Nr(t[o]) && o in e && Nr(e[o]) ? r[o] = qt(e[o], t[o], n) : n.clone ? r[o] = Nr(t[o]) ? Mv(t[o]) : t[o] : r[o] = t[o])
    }
    ),
    r
}
function yr(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let n = 1; n < arguments.length; n += 1)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified MUI error #" + e + "; visit " + t + " for the full message."
}
var Ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd = Symbol.for("react.element"), Xd = Symbol.for("react.portal"), fl = Symbol.for("react.fragment"), hl = Symbol.for("react.strict_mode"), ml = Symbol.for("react.profiler"), gl = Symbol.for("react.provider"), vl = Symbol.for("react.context"), kx = Symbol.for("react.server_context"), yl = Symbol.for("react.forward_ref"), xl = Symbol.for("react.suspense"), Cl = Symbol.for("react.suspense_list"), wl = Symbol.for("react.memo"), Al = Symbol.for("react.lazy"), Rx = Symbol.for("react.offscreen"), Bv;
Bv = Symbol.for("react.module.reference");
function rn(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case Kd:
            switch (e = e.type,
            e) {
            case fl:
            case ml:
            case hl:
            case xl:
            case Cl:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case kx:
                case vl:
                case yl:
                case Al:
                case wl:
                case gl:
                    return e;
                default:
                    return t
                }
            }
        case Xd:
            return t
        }
    }
}
Ee.ContextConsumer = vl;
Ee.ContextProvider = gl;
Ee.Element = Kd;
Ee.ForwardRef = yl;
Ee.Fragment = fl;
Ee.Lazy = Al;
Ee.Memo = wl;
Ee.Portal = Xd;
Ee.Profiler = ml;
Ee.StrictMode = hl;
Ee.Suspense = xl;
Ee.SuspenseList = Cl;
Ee.isAsyncMode = function() {
    return !1
}
;
Ee.isConcurrentMode = function() {
    return !1
}
;
Ee.isContextConsumer = function(e) {
    return rn(e) === vl
}
;
Ee.isContextProvider = function(e) {
    return rn(e) === gl
}
;
Ee.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Kd
}
;
Ee.isForwardRef = function(e) {
    return rn(e) === yl
}
;
Ee.isFragment = function(e) {
    return rn(e) === fl
}
;
Ee.isLazy = function(e) {
    return rn(e) === Al
}
;
Ee.isMemo = function(e) {
    return rn(e) === wl
}
;
Ee.isPortal = function(e) {
    return rn(e) === Xd
}
;
Ee.isProfiler = function(e) {
    return rn(e) === ml
}
;
Ee.isStrictMode = function(e) {
    return rn(e) === hl
}
;
Ee.isSuspense = function(e) {
    return rn(e) === xl
}
;
Ee.isSuspenseList = function(e) {
    return rn(e) === Cl
}
;
Ee.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === fl || e === ml || e === hl || e === xl || e === Cl || e === Rx || typeof e == "object" && e !== null && (e.$$typeof === Al || e.$$typeof === wl || e.$$typeof === gl || e.$$typeof === vl || e.$$typeof === yl || e.$$typeof === Bv || e.getModuleId !== void 0)
}
;
Ee.typeOf = rn;
function ne(e) {
    if (typeof e != "string")
        throw new Error(yr(7));
    return e.charAt(0).toUpperCase() + e.slice(1)
}
function Fc(...e) {
    return e.reduce((t,n)=>n == null ? t : function(...o) {
        t.apply(this, o),
        n.apply(this, o)
    }
    , ()=>{}
    )
}
function Yd(e, t=166) {
    let n;
    function r(...o) {
        const i = ()=>{
            e.apply(this, o)
        }
        ;
        clearTimeout(n),
        n = setTimeout(i, t)
    }
    return r.clear = ()=>{
        clearTimeout(n)
    }
    ,
    r
}
function Tx(e, t) {
    return ()=>null
}
function ha(e, t) {
    return C.exports.isValidElement(e) && t.indexOf(e.type.muiName) !== -1
}
function ht(e) {
    return e && e.ownerDocument || document
}
function xr(e) {
    return ht(e).defaultView || window
}
function Nx(e, t) {
    return ()=>null
}
function Ha(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t)
}
const Lx = typeof window != "undefined" ? C.exports.useLayoutEffect : C.exports.useEffect;
var Hn = Lx;
let lh = 0;
function Ox(e) {
    const [t,n] = C.exports.useState(e)
      , r = e || t;
    return C.exports.useEffect(()=>{
        t == null && (lh += 1,
        n(`mui-${lh}`))
    }
    , [t]),
    r
}
const uh = ju["useId"];
function qd(e) {
    if (uh !== void 0) {
        const t = uh();
        return e != null ? e : t
    }
    return Ox(e)
}
function Mx(e, t, n, r, o) {
    return null
}
function as({controlled: e, default: t, name: n, state: r="value"}) {
    const {current: o} = C.exports.useRef(e !== void 0)
      , [i,s] = C.exports.useState(t)
      , a = o ? e : i
      , l = C.exports.useCallback(u=>{
        o || s(u)
    }
    , []);
    return [a, l]
}
function ir(e) {
    const t = C.exports.useRef(e);
    return Hn(()=>{
        t.current = e
    }
    ),
    C.exports.useCallback((...n)=>(0,
    t.current)(...n), [])
}
function Je(...e) {
    return C.exports.useMemo(()=>e.every(t=>t == null) ? null : t=>{
        e.forEach(n=>{
            Ha(n, t)
        }
        )
    }
    , e)
}
let bl = !0, _c = !1, ch;
const Bx = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0
};
function Fx(e) {
    const {type: t, tagName: n} = e;
    return !!(n === "INPUT" && Bx[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable)
}
function _x(e) {
    e.metaKey || e.altKey || e.ctrlKey || (bl = !0)
}
function Lu() {
    bl = !1
}
function Dx() {
    this.visibilityState === "hidden" && _c && (bl = !0)
}
function zx(e) {
    e.addEventListener("keydown", _x, !0),
    e.addEventListener("mousedown", Lu, !0),
    e.addEventListener("pointerdown", Lu, !0),
    e.addEventListener("touchstart", Lu, !0),
    e.addEventListener("visibilitychange", Dx, !0)
}
function $x(e) {
    const {target: t} = e;
    try {
        return t.matches(":focus-visible")
    } catch {}
    return bl || Fx(t)
}
function Jd() {
    const e = C.exports.useCallback(o=>{
        o != null && zx(o.ownerDocument)
    }
    , [])
      , t = C.exports.useRef(!1);
    function n() {
        return t.current ? (_c = !0,
        window.clearTimeout(ch),
        ch = window.setTimeout(()=>{
            _c = !1
        }
        , 100),
        t.current = !1,
        !0) : !1
    }
    function r(o) {
        return $x(o) ? (t.current = !0,
        !0) : !1
    }
    return {
        isFocusVisibleRef: t,
        onFocus: r,
        onBlur: n,
        ref: e
    }
}
function Fv(e) {
    const t = e.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t)
}
function Zd(e, t) {
    const n = w({}, t);
    return Object.keys(e).forEach(r=>{
        if (r.toString().match(/^(components|slots)$/))
            n[r] = w({}, e[r], n[r]);
        else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
            const o = e[r] || {}
              , i = t[r];
            n[r] = {},
            !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = w({}, i),
            Object.keys(o).forEach(s=>{
                n[r][s] = Zd(o[s], i[s])
            }
            ))
        } else
            n[r] === void 0 && (n[r] = e[r])
    }
    ),
    n
}
function we(e, t, n=void 0) {
    const r = {};
    return Object.keys(e).forEach(o=>{
        r[o] = e[o].reduce((i,s)=>{
            if (s) {
                const a = t(s);
                a !== "" && i.push(a),
                n && n[s] && i.push(n[s])
            }
            return i
        }
        , []).join(" ")
    }
    ),
    r
}
const dh = e=>e
  , Vx = ()=>{
    let e = dh;
    return {
        configure(t) {
            e = t
        },
        generate(t) {
            return e(t)
        },
        reset() {
            e = dh
        }
    }
}
  , Ux = Vx();
var _v = Ux;
const jx = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    readOnly: "readOnly",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    required: "required",
    selected: "selected"
};
function ve(e, t, n="Mui") {
    const r = jx[t];
    return r ? `${n}-${r}` : `${_v.generate(e)}-${t}`
}
function ye(e, t, n="Mui") {
    const r = {};
    return t.forEach(o=>{
        r[o] = ve(e, o, n)
    }
    ),
    r
}
function Wa(e) {
    return typeof e == "string"
}
function Ei(e, t, n) {
    return e === void 0 || Wa(e) ? t : w({}, t, {
        ownerState: w({}, t.ownerState, n)
    })
}
var Sl = {
    exports: {}
}
  , El = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hx = C.exports
  , Wx = Symbol.for("react.element")
  , Qx = Symbol.for("react.fragment")
  , Gx = Object.prototype.hasOwnProperty
  , Kx = Hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Xx = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Dv(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Gx.call(t, r) && !Xx.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Wx,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Kx.current
    }
}
El.Fragment = Qx;
El.jsx = Dv;
El.jsxs = Dv;
Sl.exports = El;
const b = Sl.exports.jsx
  , j = Sl.exports.jsxs
  , mn = Sl.exports.Fragment;
var Yx = Object.freeze(Object.defineProperty({
    __proto__: null,
    jsx: b,
    jsxs: j,
    Fragment: mn
}, Symbol.toStringTag, {
    value: "Module"
}));
const qx = {
    disableDefaultClasses: !1
}
  , Jx = C.exports.createContext(qx);
function zv(e) {
    const {disableDefaultClasses: t} = C.exports.useContext(Jx);
    return n=>t ? "" : e(n)
}
function Zx(e, t=[]) {
    if (e === void 0)
        return {};
    const n = {};
    return Object.keys(e).filter(r=>r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach(r=>{
        n[r] = e[r]
    }
    ),
    n
}
function Dc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function ph(e) {
    if (e === void 0)
        return {};
    const t = {};
    return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach(n=>{
        t[n] = e[n]
    }
    ),
    t
}
function eC(e) {
    const {getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: o, className: i} = e;
    if (!t) {
        const v = ee(o == null ? void 0 : o.className, r == null ? void 0 : r.className, i, n == null ? void 0 : n.className)
          , x = w({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style)
          , g = w({}, n, o, r);
        return v.length > 0 && (g.className = v),
        Object.keys(x).length > 0 && (g.style = x),
        {
            props: g,
            internalRef: void 0
        }
    }
    const s = Zx(w({}, o, r))
      , a = ph(r)
      , l = ph(o)
      , u = t(s)
      , c = ee(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className)
      , f = w({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style)
      , p = w({}, u, n, l, a);
    return c.length > 0 && (p.className = c),
    Object.keys(f).length > 0 && (p.style = f),
    {
        props: p,
        internalRef: u.ref
    }
}
const tC = ["elementType", "externalSlotProps", "ownerState"];
function zc(e) {
    var t;
    const {elementType: n, externalSlotProps: r, ownerState: o} = e
      , i = q(e, tC)
      , s = Dc(r, o)
      , {props: a, internalRef: l} = eC(w({}, i, {
        externalSlotProps: s
    }))
      , u = Je(l, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
    return Ei(n, w({}, a, {
        ref: u
    }), o)
}
const nC = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function rC(e) {
    const t = parseInt(e.getAttribute("tabindex") || "", 10);
    return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t
}
function oC(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
        return !1;
    const t = r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let n = t(`[name="${e.name}"]:checked`);
    return n || (n = t(`[name="${e.name}"]`)),
    n !== e
}
function iC(e) {
    return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || oC(e))
}
function sC(e) {
    const t = []
      , n = [];
    return Array.from(e.querySelectorAll(nC)).forEach((r,o)=>{
        const i = rC(r);
        i === -1 || !iC(r) || (i === 0 ? t.push(r) : n.push({
            documentOrder: o,
            tabIndex: i,
            node: r
        }))
    }
    ),
    n.sort((r,o)=>r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map(r=>r.node).concat(t)
}
function aC() {
    return !0
}
function lC(e) {
    const {children: t, disableAutoFocus: n=!1, disableEnforceFocus: r=!1, disableRestoreFocus: o=!1, getTabbable: i=sC, isEnabled: s=aC, open: a} = e
      , l = C.exports.useRef(!1)
      , u = C.exports.useRef(null)
      , c = C.exports.useRef(null)
      , f = C.exports.useRef(null)
      , p = C.exports.useRef(null)
      , v = C.exports.useRef(!1)
      , x = C.exports.useRef(null)
      , g = Je(t.ref, x)
      , P = C.exports.useRef(null);
    C.exports.useEffect(()=>{
        !a || !x.current || (v.current = !n)
    }
    , [n, a]),
    C.exports.useEffect(()=>{
        if (!a || !x.current)
            return;
        const d = ht(x.current);
        return x.current.contains(d.activeElement) || (x.current.hasAttribute("tabIndex") || x.current.setAttribute("tabIndex", "-1"),
        v.current && x.current.focus()),
        ()=>{
            o || (f.current && f.current.focus && (l.current = !0,
            f.current.focus()),
            f.current = null)
        }
    }
    , [a]),
    C.exports.useEffect(()=>{
        if (!a || !x.current)
            return;
        const d = ht(x.current)
          , y = S=>{
            const {current: I} = x;
            if (I !== null) {
                if (!d.hasFocus() || r || !s() || l.current) {
                    l.current = !1;
                    return
                }
                if (!I.contains(d.activeElement)) {
                    if (S && p.current !== S.target || d.activeElement !== p.current)
                        p.current = null;
                    else if (p.current !== null)
                        return;
                    if (!v.current)
                        return;
                    let O = [];
                    if ((d.activeElement === u.current || d.activeElement === c.current) && (O = i(x.current)),
                    O.length > 0) {
                        var R, k;
                        const W = Boolean(((R = P.current) == null ? void 0 : R.shiftKey) && ((k = P.current) == null ? void 0 : k.key) === "Tab")
                          , U = O[0]
                          , D = O[O.length - 1];
                        typeof U != "string" && typeof D != "string" && (W ? D.focus() : U.focus())
                    } else
                        I.focus()
                }
            }
        }
          , A = S=>{
            P.current = S,
            !(r || !s() || S.key !== "Tab") && d.activeElement === x.current && S.shiftKey && (l.current = !0,
            c.current && c.current.focus())
        }
        ;
        d.addEventListener("focusin", y),
        d.addEventListener("keydown", A, !0);
        const E = setInterval(()=>{
            d.activeElement && d.activeElement.tagName === "BODY" && y(null)
        }
        , 50);
        return ()=>{
            clearInterval(E),
            d.removeEventListener("focusin", y),
            d.removeEventListener("keydown", A, !0)
        }
    }
    , [n, r, o, s, a, i]);
    const m = d=>{
        f.current === null && (f.current = d.relatedTarget),
        v.current = !0,
        p.current = d.target;
        const y = t.props.onFocus;
        y && y(d)
    }
      , h = d=>{
        f.current === null && (f.current = d.relatedTarget),
        v.current = !0
    }
    ;
    return j(C.exports.Fragment, {
        children: [b("div", {
            tabIndex: a ? 0 : -1,
            onFocus: h,
            ref: u,
            "data-testid": "sentinelStart"
        }), C.exports.cloneElement(t, {
            ref: g,
            onFocus: m
        }), b("div", {
            tabIndex: a ? 0 : -1,
            onFocus: h,
            ref: c,
            "data-testid": "sentinelEnd"
        })]
    })
}
var Tt = "top"
  , tn = "bottom"
  , nn = "right"
  , Nt = "left"
  , ep = "auto"
  , ws = [Tt, tn, nn, Nt]
  , Do = "start"
  , ls = "end"
  , uC = "clippingParents"
  , $v = "viewport"
  , pi = "popper"
  , cC = "reference"
  , fh = ws.reduce(function(e, t) {
    return e.concat([t + "-" + Do, t + "-" + ls])
}, [])
  , Vv = [].concat(ws, [ep]).reduce(function(e, t) {
    return e.concat([t, t + "-" + Do, t + "-" + ls])
}, [])
  , dC = "beforeRead"
  , pC = "read"
  , fC = "afterRead"
  , hC = "beforeMain"
  , mC = "main"
  , gC = "afterMain"
  , vC = "beforeWrite"
  , yC = "write"
  , xC = "afterWrite"
  , CC = [dC, pC, fC, hC, mC, gC, vC, yC, xC];
function Nn(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}
function on(e) {
    if (e == null)
        return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}
function Qr(e) {
    var t = on(e).Element;
    return e instanceof t || e instanceof Element
}
function Jt(e) {
    var t = on(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}
function tp(e) {
    if (typeof ShadowRoot == "undefined")
        return !1;
    var t = on(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}
function wC(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var r = t.styles[n] || {}
          , o = t.attributes[n] || {}
          , i = t.elements[n];
        !Jt(i) || !Nn(i) || (Object.assign(i.style, r),
        Object.keys(o).forEach(function(s) {
            var a = o[s];
            a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a)
        }))
    })
}
function AC(e) {
    var t = e.state
      , n = {
        popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper),
    t.styles = n,
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function() {
        Object.keys(t.elements).forEach(function(r) {
            var o = t.elements[r]
              , i = t.attributes[r] || {}
              , s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r])
              , a = s.reduce(function(l, u) {
                return l[u] = "",
                l
            }, {});
            !Jt(o) || !Nn(o) || (Object.assign(o.style, a),
            Object.keys(i).forEach(function(l) {
                o.removeAttribute(l)
            }))
        })
    }
}
var bC = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: wC,
    effect: AC,
    requires: ["computeStyles"]
};
function In(e) {
    return e.split("-")[0]
}
var $r = Math.max
  , Qa = Math.min
  , zo = Math.round;
function $c() {
    var e = navigator.userAgentData;
    return e != null && e.brands ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}
function Uv() {
    return !/^((?!chrome|android).)*safari/i.test($c())
}
function $o(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    var r = e.getBoundingClientRect()
      , o = 1
      , i = 1;
    t && Jt(e) && (o = e.offsetWidth > 0 && zo(r.width) / e.offsetWidth || 1,
    i = e.offsetHeight > 0 && zo(r.height) / e.offsetHeight || 1);
    var s = Qr(e) ? on(e) : window
      , a = s.visualViewport
      , l = !Uv() && n
      , u = (r.left + (l && a ? a.offsetLeft : 0)) / o
      , c = (r.top + (l && a ? a.offsetTop : 0)) / i
      , f = r.width / o
      , p = r.height / i;
    return {
        width: f,
        height: p,
        top: c,
        right: u + f,
        bottom: c + p,
        left: u,
        x: u,
        y: c
    }
}
function np(e) {
    var t = $o(e)
      , n = e.offsetWidth
      , r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: r
    }
}
function jv(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t))
        return !0;
    if (n && tp(n)) {
        var r = t;
        do {
            if (r && e.isSameNode(r))
                return !0;
            r = r.parentNode || r.host
        } while (r)
    }
    return !1
}
function Wn(e) {
    return on(e).getComputedStyle(e)
}
function SC(e) {
    return ["table", "td", "th"].indexOf(Nn(e)) >= 0
}
function br(e) {
    return ((Qr(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function Pl(e) {
    return Nn(e) === "html" ? e : e.assignedSlot || e.parentNode || (tp(e) ? e.host : null) || br(e)
}
function hh(e) {
    return !Jt(e) || Wn(e).position === "fixed" ? null : e.offsetParent
}
function EC(e) {
    var t = /firefox/i.test($c())
      , n = /Trident/i.test($c());
    if (n && Jt(e)) {
        var r = Wn(e);
        if (r.position === "fixed")
            return null
    }
    var o = Pl(e);
    for (tp(o) && (o = o.host); Jt(o) && ["html", "body"].indexOf(Nn(o)) < 0; ) {
        var i = Wn(o);
        if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
            return o;
        o = o.parentNode
    }
    return null
}
function As(e) {
    for (var t = on(e), n = hh(e); n && SC(n) && Wn(n).position === "static"; )
        n = hh(n);
    return n && (Nn(n) === "html" || Nn(n) === "body" && Wn(n).position === "static") ? t : n || EC(e) || t
}
function rp(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}
function _i(e, t, n) {
    return $r(e, Qa(t, n))
}
function PC(e, t, n) {
    var r = _i(e, t, n);
    return r > n ? n : r
}
function Hv() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}
function Wv(e) {
    return Object.assign({}, Hv(), e)
}
function Qv(e, t) {
    return t.reduce(function(n, r) {
        return n[r] = e,
        n
    }, {})
}
var IC = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
        placement: n.placement
    })) : t,
    Wv(typeof t != "number" ? t : Qv(t, ws))
};
function kC(e) {
    var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = In(n.placement), l = rp(a), u = [Nt, nn].indexOf(a) >= 0, c = u ? "height" : "width";
    if (!(!i || !s)) {
        var f = IC(o.padding, n)
          , p = np(i)
          , v = l === "y" ? Tt : Nt
          , x = l === "y" ? tn : nn
          , g = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c]
          , P = s[l] - n.rects.reference[l]
          , m = As(i)
          , h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0
          , d = g / 2 - P / 2
          , y = f[v]
          , A = h - p[c] - f[x]
          , E = h / 2 - p[c] / 2 + d
          , S = _i(y, E, A)
          , I = l;
        n.modifiersData[r] = (t = {},
        t[I] = S,
        t.centerOffset = S - E,
        t)
    }
}
function RC(e) {
    var t = e.state
      , n = e.options
      , r = n.element
      , o = r === void 0 ? "[data-popper-arrow]" : r;
    o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o),
    !o) || !jv(t.elements.popper, o) || (t.elements.arrow = o))
}
var TC = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: kC,
    effect: RC,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};
function Vo(e) {
    return e.split("-")[1]
}
var NC = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};
function LC(e) {
    var t = e.x
      , n = e.y
      , r = window
      , o = r.devicePixelRatio || 1;
    return {
        x: zo(t * o) / o || 0,
        y: zo(n * o) / o || 0
    }
}
function mh(e) {
    var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = s.x, v = p === void 0 ? 0 : p, x = s.y, g = x === void 0 ? 0 : x, P = typeof c == "function" ? c({
        x: v,
        y: g
    }) : {
        x: v,
        y: g
    };
    v = P.x,
    g = P.y;
    var m = s.hasOwnProperty("x")
      , h = s.hasOwnProperty("y")
      , d = Nt
      , y = Tt
      , A = window;
    if (u) {
        var E = As(n)
          , S = "clientHeight"
          , I = "clientWidth";
        if (E === on(n) && (E = br(n),
        Wn(E).position !== "static" && a === "absolute" && (S = "scrollHeight",
        I = "scrollWidth")),
        E = E,
        o === Tt || (o === Nt || o === nn) && i === ls) {
            y = tn;
            var R = f && E === A && A.visualViewport ? A.visualViewport.height : E[S];
            g -= R - r.height,
            g *= l ? 1 : -1
        }
        if (o === Nt || (o === Tt || o === tn) && i === ls) {
            d = nn;
            var k = f && E === A && A.visualViewport ? A.visualViewport.width : E[I];
            v -= k - r.width,
            v *= l ? 1 : -1
        }
    }
    var O = Object.assign({
        position: a
    }, u && NC)
      , W = c === !0 ? LC({
        x: v,
        y: g
    }) : {
        x: v,
        y: g
    };
    if (v = W.x,
    g = W.y,
    l) {
        var U;
        return Object.assign({}, O, (U = {},
        U[y] = h ? "0" : "",
        U[d] = m ? "0" : "",
        U.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)",
        U))
    }
    return Object.assign({}, O, (t = {},
    t[y] = h ? g + "px" : "",
    t[d] = m ? v + "px" : "",
    t.transform = "",
    t))
}
function OC(e) {
    var t = e.state
      , n = e.options
      , r = n.gpuAcceleration
      , o = r === void 0 ? !0 : r
      , i = n.adaptive
      , s = i === void 0 ? !0 : i
      , a = n.roundOffsets
      , l = a === void 0 ? !0 : a
      , u = {
        placement: In(t.placement),
        variation: Vo(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: o,
        isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, mh(Object.assign({}, u, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: s,
        roundOffsets: l
    })))),
    t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, mh(Object.assign({}, u, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
    })))),
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
var MC = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: OC,
    data: {}
}
  , Gs = {
    passive: !0
};
function BC(e) {
    var t = e.state
      , n = e.instance
      , r = e.options
      , o = r.scroll
      , i = o === void 0 ? !0 : o
      , s = r.resize
      , a = s === void 0 ? !0 : s
      , l = on(t.elements.popper)
      , u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && u.forEach(function(c) {
        c.addEventListener("scroll", n.update, Gs)
    }),
    a && l.addEventListener("resize", n.update, Gs),
    function() {
        i && u.forEach(function(c) {
            c.removeEventListener("scroll", n.update, Gs)
        }),
        a && l.removeEventListener("resize", n.update, Gs)
    }
}
var FC = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: BC,
    data: {}
}
  , _C = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function ma(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return _C[t]
    })
}
var DC = {
    start: "end",
    end: "start"
};
function gh(e) {
    return e.replace(/start|end/g, function(t) {
        return DC[t]
    })
}
function op(e) {
    var t = on(e)
      , n = t.pageXOffset
      , r = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: r
    }
}
function ip(e) {
    return $o(br(e)).left + op(e).scrollLeft
}
function zC(e, t) {
    var n = on(e)
      , r = br(e)
      , o = n.visualViewport
      , i = r.clientWidth
      , s = r.clientHeight
      , a = 0
      , l = 0;
    if (o) {
        i = o.width,
        s = o.height;
        var u = Uv();
        (u || !u && t === "fixed") && (a = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: a + ip(e),
        y: l
    }
}
function $C(e) {
    var t, n = br(e), r = op(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = $r(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = $r(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + ip(e), l = -r.scrollTop;
    return Wn(o || n).direction === "rtl" && (a += $r(n.clientWidth, o ? o.clientWidth : 0) - i),
    {
        width: i,
        height: s,
        x: a,
        y: l
    }
}
function sp(e) {
    var t = Wn(e)
      , n = t.overflow
      , r = t.overflowX
      , o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r)
}
function Gv(e) {
    return ["html", "body", "#document"].indexOf(Nn(e)) >= 0 ? e.ownerDocument.body : Jt(e) && sp(e) ? e : Gv(Pl(e))
}
function Di(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = Gv(e)
      , o = r === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , i = on(r)
      , s = o ? [i].concat(i.visualViewport || [], sp(r) ? r : []) : r
      , a = t.concat(s);
    return o ? a : a.concat(Di(Pl(s)))
}
function Vc(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}
function VC(e, t) {
    var n = $o(e, !1, t === "fixed");
    return n.top = n.top + e.clientTop,
    n.left = n.left + e.clientLeft,
    n.bottom = n.top + e.clientHeight,
    n.right = n.left + e.clientWidth,
    n.width = e.clientWidth,
    n.height = e.clientHeight,
    n.x = n.left,
    n.y = n.top,
    n
}
function vh(e, t, n) {
    return t === $v ? Vc(zC(e, n)) : Qr(t) ? VC(t, n) : Vc($C(br(e)))
}
function UC(e) {
    var t = Di(Pl(e))
      , n = ["absolute", "fixed"].indexOf(Wn(e).position) >= 0
      , r = n && Jt(e) ? As(e) : e;
    return Qr(r) ? t.filter(function(o) {
        return Qr(o) && jv(o, r) && Nn(o) !== "body"
    }) : []
}
function jC(e, t, n, r) {
    var o = t === "clippingParents" ? UC(e) : [].concat(t)
      , i = [].concat(o, [n])
      , s = i[0]
      , a = i.reduce(function(l, u) {
        var c = vh(e, u, r);
        return l.top = $r(c.top, l.top),
        l.right = Qa(c.right, l.right),
        l.bottom = Qa(c.bottom, l.bottom),
        l.left = $r(c.left, l.left),
        l
    }, vh(e, s, r));
    return a.width = a.right - a.left,
    a.height = a.bottom - a.top,
    a.x = a.left,
    a.y = a.top,
    a
}
function Kv(e) {
    var t = e.reference, n = e.element, r = e.placement, o = r ? In(r) : null, i = r ? Vo(r) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
    switch (o) {
    case Tt:
        l = {
            x: s,
            y: t.y - n.height
        };
        break;
    case tn:
        l = {
            x: s,
            y: t.y + t.height
        };
        break;
    case nn:
        l = {
            x: t.x + t.width,
            y: a
        };
        break;
    case Nt:
        l = {
            x: t.x - n.width,
            y: a
        };
        break;
    default:
        l = {
            x: t.x,
            y: t.y
        }
    }
    var u = o ? rp(o) : null;
    if (u != null) {
        var c = u === "y" ? "height" : "width";
        switch (i) {
        case Do:
            l[u] = l[u] - (t[c] / 2 - n[c] / 2);
            break;
        case ls:
            l[u] = l[u] + (t[c] / 2 - n[c] / 2);
            break
        }
    }
    return l
}
function us(e, t) {
    t === void 0 && (t = {});
    var n = t
      , r = n.placement
      , o = r === void 0 ? e.placement : r
      , i = n.strategy
      , s = i === void 0 ? e.strategy : i
      , a = n.boundary
      , l = a === void 0 ? uC : a
      , u = n.rootBoundary
      , c = u === void 0 ? $v : u
      , f = n.elementContext
      , p = f === void 0 ? pi : f
      , v = n.altBoundary
      , x = v === void 0 ? !1 : v
      , g = n.padding
      , P = g === void 0 ? 0 : g
      , m = Wv(typeof P != "number" ? P : Qv(P, ws))
      , h = p === pi ? cC : pi
      , d = e.rects.popper
      , y = e.elements[x ? h : p]
      , A = jC(Qr(y) ? y : y.contextElement || br(e.elements.popper), l, c, s)
      , E = $o(e.elements.reference)
      , S = Kv({
        reference: E,
        element: d,
        strategy: "absolute",
        placement: o
    })
      , I = Vc(Object.assign({}, d, S))
      , R = p === pi ? I : E
      , k = {
        top: A.top - R.top + m.top,
        bottom: R.bottom - A.bottom + m.bottom,
        left: A.left - R.left + m.left,
        right: R.right - A.right + m.right
    }
      , O = e.modifiersData.offset;
    if (p === pi && O) {
        var W = O[o];
        Object.keys(k).forEach(function(U) {
            var D = [nn, tn].indexOf(U) >= 0 ? 1 : -1
              , F = [Tt, tn].indexOf(U) >= 0 ? "y" : "x";
            k[U] += W[F] * D
        })
    }
    return k
}
function HC(e, t) {
    t === void 0 && (t = {});
    var n = t
      , r = n.placement
      , o = n.boundary
      , i = n.rootBoundary
      , s = n.padding
      , a = n.flipVariations
      , l = n.allowedAutoPlacements
      , u = l === void 0 ? Vv : l
      , c = Vo(r)
      , f = c ? a ? fh : fh.filter(function(x) {
        return Vo(x) === c
    }) : ws
      , p = f.filter(function(x) {
        return u.indexOf(x) >= 0
    });
    p.length === 0 && (p = f);
    var v = p.reduce(function(x, g) {
        return x[g] = us(e, {
            placement: g,
            boundary: o,
            rootBoundary: i,
            padding: s
        })[In(g)],
        x
    }, {});
    return Object.keys(v).sort(function(x, g) {
        return v[x] - v[g]
    })
}
function WC(e) {
    if (In(e) === ep)
        return [];
    var t = ma(e);
    return [gh(e), t, gh(t)]
}
function QC(e) {
    var t = e.state
      , n = e.options
      , r = e.name;
    if (!t.modifiersData[r]._skip) {
        for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, c = n.boundary, f = n.rootBoundary, p = n.altBoundary, v = n.flipVariations, x = v === void 0 ? !0 : v, g = n.allowedAutoPlacements, P = t.options.placement, m = In(P), h = m === P, d = l || (h || !x ? [ma(P)] : WC(P)), y = [P].concat(d).reduce(function(J, te) {
            return J.concat(In(te) === ep ? HC(t, {
                placement: te,
                boundary: c,
                rootBoundary: f,
                padding: u,
                flipVariations: x,
                allowedAutoPlacements: g
            }) : te)
        }, []), A = t.rects.reference, E = t.rects.popper, S = new Map, I = !0, R = y[0], k = 0; k < y.length; k++) {
            var O = y[k]
              , W = In(O)
              , U = Vo(O) === Do
              , D = [Tt, tn].indexOf(W) >= 0
              , F = D ? "width" : "height"
              , V = us(t, {
                placement: O,
                boundary: c,
                rootBoundary: f,
                altBoundary: p,
                padding: u
            })
              , K = D ? U ? nn : Nt : U ? tn : Tt;
            A[F] > E[F] && (K = ma(K));
            var N = ma(K)
              , $ = [];
            if (i && $.push(V[W] <= 0),
            a && $.push(V[K] <= 0, V[N] <= 0),
            $.every(function(J) {
                return J
            })) {
                R = O,
                I = !1;
                break
            }
            S.set(O, $)
        }
        if (I)
            for (var B = x ? 3 : 1, Q = function(te) {
                var H = y.find(function(oe) {
                    var ie = S.get(oe);
                    if (ie)
                        return ie.slice(0, te).every(function(re) {
                            return re
                        })
                });
                if (H)
                    return R = H,
                    "break"
            }, X = B; X > 0; X--) {
                var ce = Q(X);
                if (ce === "break")
                    break
            }
        t.placement !== R && (t.modifiersData[r]._skip = !0,
        t.placement = R,
        t.reset = !0)
    }
}
var GC = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: QC,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};
function yh(e, t, n) {
    return n === void 0 && (n = {
        x: 0,
        y: 0
    }),
    {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
    }
}
function xh(e) {
    return [Tt, nn, tn, Nt].some(function(t) {
        return e[t] >= 0
    })
}
function KC(e) {
    var t = e.state
      , n = e.name
      , r = t.rects.reference
      , o = t.rects.popper
      , i = t.modifiersData.preventOverflow
      , s = us(t, {
        elementContext: "reference"
    })
      , a = us(t, {
        altBoundary: !0
    })
      , l = yh(s, r)
      , u = yh(a, o, i)
      , c = xh(l)
      , f = xh(u);
    t.modifiersData[n] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: u,
        isReferenceHidden: c,
        hasPopperEscaped: f
    },
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": f
    })
}
var XC = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: KC
};
function YC(e, t, n) {
    var r = In(e)
      , o = [Nt, Tt].indexOf(r) >= 0 ? -1 : 1
      , i = typeof n == "function" ? n(Object.assign({}, t, {
        placement: e
    })) : n
      , s = i[0]
      , a = i[1];
    return s = s || 0,
    a = (a || 0) * o,
    [Nt, nn].indexOf(r) >= 0 ? {
        x: a,
        y: s
    } : {
        x: s,
        y: a
    }
}
function qC(e) {
    var t = e.state
      , n = e.options
      , r = e.name
      , o = n.offset
      , i = o === void 0 ? [0, 0] : o
      , s = Vv.reduce(function(c, f) {
        return c[f] = YC(f, t.rects, i),
        c
    }, {})
      , a = s[t.placement]
      , l = a.x
      , u = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l,
    t.modifiersData.popperOffsets.y += u),
    t.modifiersData[r] = s
}
var JC = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: qC
};
function ZC(e) {
    var t = e.state
      , n = e.name;
    t.modifiersData[n] = Kv({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
var ew = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: ZC,
    data: {}
};
function tw(e) {
    return e === "x" ? "y" : "x"
}
function nw(e) {
    var t = e.state
      , n = e.options
      , r = e.name
      , o = n.mainAxis
      , i = o === void 0 ? !0 : o
      , s = n.altAxis
      , a = s === void 0 ? !1 : s
      , l = n.boundary
      , u = n.rootBoundary
      , c = n.altBoundary
      , f = n.padding
      , p = n.tether
      , v = p === void 0 ? !0 : p
      , x = n.tetherOffset
      , g = x === void 0 ? 0 : x
      , P = us(t, {
        boundary: l,
        rootBoundary: u,
        padding: f,
        altBoundary: c
    })
      , m = In(t.placement)
      , h = Vo(t.placement)
      , d = !h
      , y = rp(m)
      , A = tw(y)
      , E = t.modifiersData.popperOffsets
      , S = t.rects.reference
      , I = t.rects.popper
      , R = typeof g == "function" ? g(Object.assign({}, t.rects, {
        placement: t.placement
    })) : g
      , k = typeof R == "number" ? {
        mainAxis: R,
        altAxis: R
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, R)
      , O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
      , W = {
        x: 0,
        y: 0
    };
    if (!!E) {
        if (i) {
            var U, D = y === "y" ? Tt : Nt, F = y === "y" ? tn : nn, V = y === "y" ? "height" : "width", K = E[y], N = K + P[D], $ = K - P[F], B = v ? -I[V] / 2 : 0, Q = h === Do ? S[V] : I[V], X = h === Do ? -I[V] : -S[V], ce = t.elements.arrow, J = v && ce ? np(ce) : {
                width: 0,
                height: 0
            }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Hv(), H = te[D], oe = te[F], ie = _i(0, S[V], J[V]), re = d ? S[V] / 2 - B - ie - H - k.mainAxis : Q - ie - H - k.mainAxis, Pe = d ? -S[V] / 2 + B + ie + oe + k.mainAxis : X + ie + oe + k.mainAxis, Z = t.elements.arrow && As(t.elements.arrow), Te = Z ? y === "y" ? Z.clientTop || 0 : Z.clientLeft || 0 : 0, nt = (U = O == null ? void 0 : O[y]) != null ? U : 0, bt = K + re - nt - Te, Ke = K + Pe - nt, Wt = _i(v ? Qa(N, bt) : N, K, v ? $r($, Ke) : $);
            E[y] = Wt,
            W[y] = Wt - K
        }
        if (a) {
            var he, gn = y === "x" ? Tt : Nt, at = y === "x" ? tn : nn, We = E[A], Se = A === "y" ? "height" : "width", gt = We + P[gn], lt = We - P[at], Xe = [Tt, Nt].indexOf(m) !== -1, _e = (he = O == null ? void 0 : O[A]) != null ? he : 0, St = Xe ? gt : We - S[Se] - I[Se] - _e + k.altAxis, vt = Xe ? We + S[Se] + I[Se] - _e - k.altAxis : lt, de = v && Xe ? PC(St, We, vt) : _i(v ? St : gt, We, v ? vt : lt);
            E[A] = de,
            W[A] = de - We
        }
        t.modifiersData[r] = W
    }
}
var rw = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: nw,
    requiresIfExists: ["offset"]
};
function ow(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}
function iw(e) {
    return e === on(e) || !Jt(e) ? op(e) : ow(e)
}
function sw(e) {
    var t = e.getBoundingClientRect()
      , n = zo(t.width) / e.offsetWidth || 1
      , r = zo(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1
}
function aw(e, t, n) {
    n === void 0 && (n = !1);
    var r = Jt(t)
      , o = Jt(t) && sw(t)
      , i = br(t)
      , s = $o(e, o, n)
      , a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , l = {
        x: 0,
        y: 0
    };
    return (r || !r && !n) && ((Nn(t) !== "body" || sp(i)) && (a = iw(t)),
    Jt(t) ? (l = $o(t, !0),
    l.x += t.clientLeft,
    l.y += t.clientTop) : i && (l.x = ip(i))),
    {
        x: s.left + a.scrollLeft - l.x,
        y: s.top + a.scrollTop - l.y,
        width: s.width,
        height: s.height
    }
}
function lw(e) {
    var t = new Map
      , n = new Set
      , r = [];
    e.forEach(function(i) {
        t.set(i.name, i)
    });
    function o(i) {
        n.add(i.name);
        var s = [].concat(i.requires || [], i.requiresIfExists || []);
        s.forEach(function(a) {
            if (!n.has(a)) {
                var l = t.get(a);
                l && o(l)
            }
        }),
        r.push(i)
    }
    return e.forEach(function(i) {
        n.has(i.name) || o(i)
    }),
    r
}
function uw(e) {
    var t = lw(e);
    return CC.reduce(function(n, r) {
        return n.concat(t.filter(function(o) {
            return o.phase === r
        }))
    }, [])
}
function cw(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0,
                n(e())
            })
        }
        )),
        t
    }
}
function dw(e) {
    var t = e.reduce(function(n, r) {
        var o = n[r.name];
        return n[r.name] = o ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data)
        }) : r,
        n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}
var Ch = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function wh() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return !t.some(function(r) {
        return !(r && typeof r.getBoundingClientRect == "function")
    })
}
function pw(e) {
    e === void 0 && (e = {});
    var t = e
      , n = t.defaultModifiers
      , r = n === void 0 ? [] : n
      , o = t.defaultOptions
      , i = o === void 0 ? Ch : o;
    return function(a, l, u) {
        u === void 0 && (u = i);
        var c = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Ch, i),
            modifiersData: {},
            elements: {
                reference: a,
                popper: l
            },
            attributes: {},
            styles: {}
        }
          , f = []
          , p = !1
          , v = {
            state: c,
            setOptions: function(m) {
                var h = typeof m == "function" ? m(c.options) : m;
                g(),
                c.options = Object.assign({}, i, c.options, h),
                c.scrollParents = {
                    reference: Qr(a) ? Di(a) : a.contextElement ? Di(a.contextElement) : [],
                    popper: Di(l)
                };
                var d = uw(dw([].concat(r, c.options.modifiers)));
                return c.orderedModifiers = d.filter(function(y) {
                    return y.enabled
                }),
                x(),
                v.update()
            },
            forceUpdate: function() {
                if (!p) {
                    var m = c.elements
                      , h = m.reference
                      , d = m.popper;
                    if (!!wh(h, d)) {
                        c.rects = {
                            reference: aw(h, As(d), c.options.strategy === "fixed"),
                            popper: np(d)
                        },
                        c.reset = !1,
                        c.placement = c.options.placement,
                        c.orderedModifiers.forEach(function(k) {
                            return c.modifiersData[k.name] = Object.assign({}, k.data)
                        });
                        for (var y = 0; y < c.orderedModifiers.length; y++) {
                            if (c.reset === !0) {
                                c.reset = !1,
                                y = -1;
                                continue
                            }
                            var A = c.orderedModifiers[y]
                              , E = A.fn
                              , S = A.options
                              , I = S === void 0 ? {} : S
                              , R = A.name;
                            typeof E == "function" && (c = E({
                                state: c,
                                options: I,
                                name: R,
                                instance: v
                            }) || c)
                        }
                    }
                }
            },
            update: cw(function() {
                return new Promise(function(P) {
                    v.forceUpdate(),
                    P(c)
                }
                )
            }),
            destroy: function() {
                g(),
                p = !0
            }
        };
        if (!wh(a, l))
            return v;
        v.setOptions(u).then(function(P) {
            !p && u.onFirstUpdate && u.onFirstUpdate(P)
        });
        function x() {
            c.orderedModifiers.forEach(function(P) {
                var m = P.name
                  , h = P.options
                  , d = h === void 0 ? {} : h
                  , y = P.effect;
                if (typeof y == "function") {
                    var A = y({
                        state: c,
                        name: m,
                        instance: v,
                        options: d
                    })
                      , E = function() {};
                    f.push(A || E)
                }
            })
        }
        function g() {
            f.forEach(function(P) {
                return P()
            }),
            f = []
        }
        return v
    }
}
var fw = [FC, ew, MC, bC, JC, GC, rw, TC, XC]
  , hw = pw({
    defaultModifiers: fw
});
function mw(e) {
    return typeof e == "function" ? e() : e
}
const gw = C.exports.forwardRef(function(t, n) {
    const {children: r, container: o, disablePortal: i=!1} = t
      , [s,a] = C.exports.useState(null)
      , l = Je(C.exports.isValidElement(r) ? r.ref : null, n);
    if (Hn(()=>{
        i || a(mw(o) || document.body)
    }
    , [o, i]),
    Hn(()=>{
        if (s && !i)
            return Ha(n, s),
            ()=>{
                Ha(n, null)
            }
    }
    , [n, s, i]),
    i) {
        if (C.exports.isValidElement(r)) {
            const u = {
                ref: l
            };
            return C.exports.cloneElement(r, u)
        }
        return b(C.exports.Fragment, {
            children: r
        })
    }
    return b(C.exports.Fragment, {
        children: s && gs.exports.createPortal(r, s)
    })
});
var Xv = gw;
function vw(e) {
    return ve("MuiPopper", e)
}
ye("MuiPopper", ["root"]);
const yw = ["anchorEl", "children", "component", "direction", "disablePortal", "modifiers", "open", "ownerState", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps"]
  , xw = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Cw(e, t) {
    if (t === "ltr")
        return e;
    switch (e) {
    case "bottom-end":
        return "bottom-start";
    case "bottom-start":
        return "bottom-end";
    case "top-end":
        return "top-start";
    case "top-start":
        return "top-end";
    default:
        return e
    }
}
function Uc(e) {
    return typeof e == "function" ? e() : e
}
function ww(e) {
    return e.nodeType !== void 0
}
const Aw = ()=>we({
    root: ["root"]
}, zv(vw))
  , bw = {}
  , Sw = C.exports.forwardRef(function(t, n) {
    var r;
    const {anchorEl: o, children: i, component: s, direction: a, disablePortal: l, modifiers: u, open: c, ownerState: f, placement: p, popperOptions: v, popperRef: x, slotProps: g={}, slots: P={}, TransitionProps: m} = t
      , h = q(t, yw)
      , d = C.exports.useRef(null)
      , y = Je(d, n)
      , A = C.exports.useRef(null)
      , E = Je(A, x)
      , S = C.exports.useRef(E);
    Hn(()=>{
        S.current = E
    }
    , [E]),
    C.exports.useImperativeHandle(x, ()=>A.current, []);
    const I = Cw(p, a)
      , [R,k] = C.exports.useState(I)
      , [O,W] = C.exports.useState(Uc(o));
    C.exports.useEffect(()=>{
        A.current && A.current.forceUpdate()
    }
    ),
    C.exports.useEffect(()=>{
        o && W(Uc(o))
    }
    , [o]),
    Hn(()=>{
        if (!O || !c)
            return;
        const K = B=>{
            k(B.placement)
        }
        ;
        let N = [{
            name: "preventOverflow",
            options: {
                altBoundary: l
            }
        }, {
            name: "flip",
            options: {
                altBoundary: l
            }
        }, {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({state: B})=>{
                K(B)
            }
        }];
        u != null && (N = N.concat(u)),
        v && v.modifiers != null && (N = N.concat(v.modifiers));
        const $ = hw(O, d.current, w({
            placement: I
        }, v, {
            modifiers: N
        }));
        return S.current($),
        ()=>{
            $.destroy(),
            S.current(null)
        }
    }
    , [O, l, u, c, v, I]);
    const U = {
        placement: R
    };
    m !== null && (U.TransitionProps = m);
    const D = Aw()
      , F = (r = s != null ? s : P.root) != null ? r : "div"
      , V = zc({
        elementType: F,
        externalSlotProps: g.root,
        externalForwardedProps: h,
        additionalProps: {
            role: "tooltip",
            ref: y
        },
        ownerState: w({}, t, f),
        className: D.root
    });
    return b(F, w({}, V, {
        children: typeof i == "function" ? i(U) : i
    }))
})
  , Ew = C.exports.forwardRef(function(t, n) {
    const {anchorEl: r, children: o, container: i, direction: s="ltr", disablePortal: a=!1, keepMounted: l=!1, modifiers: u, open: c, placement: f="bottom", popperOptions: p=bw, popperRef: v, style: x, transition: g=!1, slotProps: P={}, slots: m={}} = t
      , h = q(t, xw)
      , [d,y] = C.exports.useState(!0)
      , A = ()=>{
        y(!1)
    }
      , E = ()=>{
        y(!0)
    }
    ;
    if (!l && !c && (!g || d))
        return null;
    let S;
    if (i)
        S = i;
    else if (r) {
        const k = Uc(r);
        S = k && ww(k) ? ht(k).body : ht(null).body
    }
    const I = !c && l && (!g || d) ? "none" : void 0
      , R = g ? {
        in: c,
        onEnter: A,
        onExited: E
    } : void 0;
    return b(Xv, {
        disablePortal: a,
        container: S,
        children: b(Sw, w({
            anchorEl: r,
            direction: s,
            disablePortal: a,
            modifiers: u,
            ref: n,
            open: g ? !d : c,
            placement: f,
            popperOptions: p,
            popperRef: v,
            slotProps: P,
            slots: m
        }, h, {
            style: w({
                position: "fixed",
                top: 0,
                left: 0,
                display: I
            }, x),
            TransitionProps: R,
            children: o
        }))
    })
});
var Pw = Ew;
function Iw(e) {
    const t = ht(e);
    return t.body === e ? xr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
}
function zi(e, t) {
    t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
}
function Ah(e) {
    return parseInt(xr(e).getComputedStyle(e).paddingRight, 10) || 0
}
function kw(e) {
    const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1
      , r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
    return n || r
}
function bh(e, t, n, r, o) {
    const i = [t, n, ...r];
    [].forEach.call(e.children, s=>{
        const a = i.indexOf(s) === -1
          , l = !kw(s);
        a && l && zi(s, o)
    }
    )
}
function Ou(e, t) {
    let n = -1;
    return e.some((r,o)=>t(r) ? (n = o,
    !0) : !1),
    n
}
function Rw(e, t) {
    const n = []
      , r = e.container;
    if (!t.disableScrollLock) {
        if (Iw(r)) {
            const s = Fv(ht(r));
            n.push({
                value: r.style.paddingRight,
                property: "padding-right",
                el: r
            }),
            r.style.paddingRight = `${Ah(r) + s}px`;
            const a = ht(r).querySelectorAll(".mui-fixed");
            [].forEach.call(a, l=>{
                n.push({
                    value: l.style.paddingRight,
                    property: "padding-right",
                    el: l
                }),
                l.style.paddingRight = `${Ah(l) + s}px`
            }
            )
        }
        let i;
        if (r.parentNode instanceof DocumentFragment)
            i = ht(r).body;
        else {
            const s = r.parentElement
              , a = xr(r);
            i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : r
        }
        n.push({
            value: i.style.overflow,
            property: "overflow",
            el: i
        }, {
            value: i.style.overflowX,
            property: "overflow-x",
            el: i
        }, {
            value: i.style.overflowY,
            property: "overflow-y",
            el: i
        }),
        i.style.overflow = "hidden"
    }
    return ()=>{
        n.forEach(({value: i, el: s, property: a})=>{
            i ? s.style.setProperty(a, i) : s.style.removeProperty(a)
        }
        )
    }
}
function Tw(e) {
    const t = [];
    return [].forEach.call(e.children, n=>{
        n.getAttribute("aria-hidden") === "true" && t.push(n)
    }
    ),
    t
}
class Nw {
    constructor() {
        this.containers = void 0,
        this.modals = void 0,
        this.modals = [],
        this.containers = []
    }
    add(t, n) {
        let r = this.modals.indexOf(t);
        if (r !== -1)
            return r;
        r = this.modals.length,
        this.modals.push(t),
        t.modalRef && zi(t.modalRef, !1);
        const o = Tw(n);
        bh(n, t.mount, t.modalRef, o, !0);
        const i = Ou(this.containers, s=>s.container === n);
        return i !== -1 ? (this.containers[i].modals.push(t),
        r) : (this.containers.push({
            modals: [t],
            container: n,
            restore: null,
            hiddenSiblings: o
        }),
        r)
    }
    mount(t, n) {
        const r = Ou(this.containers, i=>i.modals.indexOf(t) !== -1)
          , o = this.containers[r];
        o.restore || (o.restore = Rw(o, n))
    }
    remove(t, n=!0) {
        const r = this.modals.indexOf(t);
        if (r === -1)
            return r;
        const o = Ou(this.containers, s=>s.modals.indexOf(t) !== -1)
          , i = this.containers[o];
        if (i.modals.splice(i.modals.indexOf(t), 1),
        this.modals.splice(r, 1),
        i.modals.length === 0)
            i.restore && i.restore(),
            t.modalRef && zi(t.modalRef, n),
            bh(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
            this.containers.splice(o, 1);
        else {
            const s = i.modals[i.modals.length - 1];
            s.modalRef && zi(s.modalRef, !1)
        }
        return r
    }
    isTopModal(t) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === t
    }
}
function Lw(e) {
    return ve("MuiModal", e)
}
ye("MuiModal", ["root", "hidden", "backdrop"]);
const Ow = ["children", "closeAfterTransition", "component", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"]
  , Mw = e=>{
    const {open: t, exited: n} = e;
    return we({
        root: ["root", !t && n && "hidden"],
        backdrop: ["backdrop"]
    }, zv(Lw))
}
;
function Bw(e) {
    return typeof e == "function" ? e() : e
}
function Fw(e) {
    return e ? e.props.hasOwnProperty("in") : !1
}
const _w = new Nw
  , Dw = C.exports.forwardRef(function(t, n) {
    var r, o;
    const {children: i, closeAfterTransition: s=!1, component: a, container: l, disableAutoFocus: u=!1, disableEnforceFocus: c=!1, disableEscapeKeyDown: f=!1, disablePortal: p=!1, disableRestoreFocus: v=!1, disableScrollLock: x=!1, hideBackdrop: g=!1, keepMounted: P=!1, manager: m=_w, onBackdropClick: h, onClose: d, onKeyDown: y, open: A, onTransitionEnter: E, onTransitionExited: S, slotProps: I={}, slots: R={}} = t
      , k = q(t, Ow)
      , [O,W] = C.exports.useState(!A)
      , U = C.exports.useRef({})
      , D = C.exports.useRef(null)
      , F = C.exports.useRef(null)
      , V = Je(F, n)
      , K = Fw(i)
      , N = (r = t["aria-hidden"]) != null ? r : !0
      , $ = ()=>ht(D.current)
      , B = ()=>(U.current.modalRef = F.current,
    U.current.mountNode = D.current,
    U.current)
      , Q = ()=>{
        m.mount(B(), {
            disableScrollLock: x
        }),
        F.current && (F.current.scrollTop = 0)
    }
      , X = ir(()=>{
        const he = Bw(l) || $().body;
        m.add(B(), he),
        F.current && Q()
    }
    )
      , ce = C.exports.useCallback(()=>m.isTopModal(B()), [m])
      , J = ir(he=>{
        D.current = he,
        !(!he || !F.current) && (A && ce() ? Q() : zi(F.current, N))
    }
    )
      , te = C.exports.useCallback(()=>{
        m.remove(B(), N)
    }
    , [m, N]);
    C.exports.useEffect(()=>()=>{
        te()
    }
    , [te]),
    C.exports.useEffect(()=>{
        A ? X() : (!K || !s) && te()
    }
    , [A, te, K, s, X]);
    const H = w({}, t, {
        closeAfterTransition: s,
        disableAutoFocus: u,
        disableEnforceFocus: c,
        disableEscapeKeyDown: f,
        disablePortal: p,
        disableRestoreFocus: v,
        disableScrollLock: x,
        exited: O,
        hideBackdrop: g,
        keepMounted: P
    })
      , oe = Mw(H)
      , ie = ()=>{
        W(!1),
        E && E()
    }
      , re = ()=>{
        W(!0),
        S && S(),
        s && te()
    }
      , Pe = he=>{
        he.target === he.currentTarget && (h && h(he),
        d && d(he, "backdropClick"))
    }
      , Z = he=>{
        y && y(he),
        !(he.key !== "Escape" || !ce()) && (f || (he.stopPropagation(),
        d && d(he, "escapeKeyDown")))
    }
      , Te = {};
    i.props.tabIndex === void 0 && (Te.tabIndex = "-1"),
    K && (Te.onEnter = Fc(ie, i.props.onEnter),
    Te.onExited = Fc(re, i.props.onExited));
    const nt = (o = a != null ? a : R.root) != null ? o : "div"
      , bt = zc({
        elementType: nt,
        externalSlotProps: I.root,
        externalForwardedProps: k,
        additionalProps: {
            ref: V,
            role: "presentation",
            onKeyDown: Z
        },
        className: oe.root,
        ownerState: H
    })
      , Ke = R.backdrop
      , Wt = zc({
        elementType: Ke,
        externalSlotProps: I.backdrop,
        additionalProps: {
            "aria-hidden": !0,
            onClick: Pe,
            open: A
        },
        className: oe.backdrop,
        ownerState: H
    });
    return !P && !A && (!K || O) ? null : b(Xv, {
        ref: J,
        container: l,
        disablePortal: p,
        children: j(nt, w({}, bt, {
            children: [!g && Ke ? b(Ke, w({}, Wt)) : null, b(lC, {
                disableEnforceFocus: c,
                disableAutoFocus: u,
                disableRestoreFocus: v,
                isEnabled: ce,
                open: A,
                children: C.exports.cloneElement(i, Te)
            })]
        }))
    })
});
var zw = Dw;
const $w = ["onChange", "maxRows", "minRows", "style", "value"];
function Ks(e) {
    return parseInt(e, 10) || 0
}
const Vw = {
    shadow: {
        visibility: "hidden",
        position: "absolute",
        overflow: "hidden",
        height: 0,
        top: 0,
        left: 0,
        transform: "translateZ(0)"
    }
};
function Sh(e) {
    return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow
}
const Uw = C.exports.forwardRef(function(t, n) {
    const {onChange: r, maxRows: o, minRows: i=1, style: s, value: a} = t
      , l = q(t, $w)
      , {current: u} = C.exports.useRef(a != null)
      , c = C.exports.useRef(null)
      , f = Je(n, c)
      , p = C.exports.useRef(null)
      , v = C.exports.useRef(0)
      , [x,g] = C.exports.useState({
        outerHeightStyle: 0
    })
      , P = C.exports.useCallback(()=>{
        const A = c.current
          , S = xr(A).getComputedStyle(A);
        if (S.width === "0px")
            return {
                outerHeightStyle: 0
            };
        const I = p.current;
        I.style.width = S.width,
        I.value = A.value || t.placeholder || "x",
        I.value.slice(-1) === `
` && (I.value += " ");
        const R = S.boxSizing
          , k = Ks(S.paddingBottom) + Ks(S.paddingTop)
          , O = Ks(S.borderBottomWidth) + Ks(S.borderTopWidth)
          , W = I.scrollHeight;
        I.value = "x";
        const U = I.scrollHeight;
        let D = W;
        i && (D = Math.max(Number(i) * U, D)),
        o && (D = Math.min(Number(o) * U, D)),
        D = Math.max(D, U);
        const F = D + (R === "border-box" ? k + O : 0)
          , V = Math.abs(D - W) <= 1;
        return {
            outerHeightStyle: F,
            overflow: V
        }
    }
    , [o, i, t.placeholder])
      , m = (A,E)=>{
        const {outerHeightStyle: S, overflow: I} = E;
        return v.current < 20 && (S > 0 && Math.abs((A.outerHeightStyle || 0) - S) > 1 || A.overflow !== I) ? (v.current += 1,
        {
            overflow: I,
            outerHeightStyle: S
        }) : A
    }
      , h = C.exports.useCallback(()=>{
        const A = P();
        Sh(A) || g(E=>m(E, A))
    }
    , [P])
      , d = ()=>{
        const A = P();
        Sh(A) || gs.exports.flushSync(()=>{
            g(E=>m(E, A))
        }
        )
    }
    ;
    C.exports.useEffect(()=>{
        const A = Yd(()=>{
            v.current = 0,
            c.current && d()
        }
        );
        let E;
        const S = c.current
          , I = xr(S);
        return I.addEventListener("resize", A),
        typeof ResizeObserver != "undefined" && (E = new ResizeObserver(A),
        E.observe(S)),
        ()=>{
            A.clear(),
            I.removeEventListener("resize", A),
            E && E.disconnect()
        }
    }
    ),
    Hn(()=>{
        h()
    }
    ),
    C.exports.useEffect(()=>{
        v.current = 0
    }
    , [a]);
    const y = A=>{
        v.current = 0,
        u || h(),
        r && r(A)
    }
    ;
    return j(C.exports.Fragment, {
        children: [b("textarea", w({
            value: a,
            onChange: y,
            ref: f,
            rows: i,
            style: w({
                height: x.outerHeightStyle,
                overflow: x.overflow ? "hidden" : void 0
            }, s)
        }, l)), b("textarea", {
            "aria-hidden": !0,
            className: t.className,
            readOnly: !0,
            ref: p,
            tabIndex: -1,
            style: w({}, Vw.shadow, s, {
                padding: 0
            })
        })]
    })
});
var jw = Uw;
function Yv(e) {
    var t = Object.create(null);
    return function(n) {
        return t[n] === void 0 && (t[n] = e(n)),
        t[n]
    }
}
var Hw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
  , Ww = Yv(function(e) {
    return Hw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
});
function Qw(e) {
    if (e.sheet)
        return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t]
}
function Gw(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
}
var Kw = function() {
    function e(n) {
        var r = this;
        this._insertTag = function(o) {
            var i;
            r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling,
            r.container.insertBefore(o, i),
            r.tags.push(o)
        }
        ,
        this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy,
        this.tags = [],
        this.ctr = 0,
        this.nonce = n.nonce,
        this.key = n.key,
        this.container = n.container,
        this.prepend = n.prepend,
        this.insertionPoint = n.insertionPoint,
        this.before = null
    }
    var t = e.prototype;
    return t.hydrate = function(r) {
        r.forEach(this._insertTag)
    }
    ,
    t.insert = function(r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Gw(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
            var i = Qw(o);
            try {
                i.insertRule(r, i.cssRules.length)
            } catch {}
        } else
            o.appendChild(document.createTextNode(r));
        this.ctr++
    }
    ,
    t.flush = function() {
        this.tags.forEach(function(r) {
            return r.parentNode && r.parentNode.removeChild(r)
        }),
        this.tags = [],
        this.ctr = 0
    }
    ,
    e
}()
  , pt = "-ms-"
  , Ga = "-moz-"
  , me = "-webkit-"
  , qv = "comm"
  , ap = "rule"
  , lp = "decl"
  , Xw = "@import"
  , Jv = "@keyframes"
  , Yw = Math.abs
  , Il = String.fromCharCode
  , qw = Object.assign;
function Jw(e, t) {
    return ot(e, 0) ^ 45 ? (((t << 2 ^ ot(e, 0)) << 2 ^ ot(e, 1)) << 2 ^ ot(e, 2)) << 2 ^ ot(e, 3) : 0
}
function Zv(e) {
    return e.trim()
}
function Zw(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}
function ge(e, t, n) {
    return e.replace(t, n)
}
function jc(e, t) {
    return e.indexOf(t)
}
function ot(e, t) {
    return e.charCodeAt(t) | 0
}
function cs(e, t, n) {
    return e.slice(t, n)
}
function xn(e) {
    return e.length
}
function up(e) {
    return e.length
}
function Xs(e, t) {
    return t.push(e),
    e
}
function eA(e, t) {
    return e.map(t).join("")
}
var kl = 1
  , Uo = 1
  , ey = 0
  , Lt = 0
  , Qe = 0
  , Ko = "";
function Rl(e, t, n, r, o, i, s) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: i,
        line: kl,
        column: Uo,
        length: s,
        return: ""
    }
}
function fi(e, t) {
    return qw(Rl("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t)
}
function tA() {
    return Qe
}
function nA() {
    return Qe = Lt > 0 ? ot(Ko, --Lt) : 0,
    Uo--,
    Qe === 10 && (Uo = 1,
    kl--),
    Qe
}
function zt() {
    return Qe = Lt < ey ? ot(Ko, Lt++) : 0,
    Uo++,
    Qe === 10 && (Uo = 1,
    kl++),
    Qe
}
function kn() {
    return ot(Ko, Lt)
}
function ga() {
    return Lt
}
function bs(e, t) {
    return cs(Ko, e, t)
}
function ds(e) {
    switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
        return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
        return 4;
    case 58:
        return 3;
    case 34:
    case 39:
    case 40:
    case 91:
        return 2;
    case 41:
    case 93:
        return 1
    }
    return 0
}
function ty(e) {
    return kl = Uo = 1,
    ey = xn(Ko = e),
    Lt = 0,
    []
}
function ny(e) {
    return Ko = "",
    e
}
function va(e) {
    return Zv(bs(Lt - 1, Hc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function rA(e) {
    for (; (Qe = kn()) && Qe < 33; )
        zt();
    return ds(e) > 2 || ds(Qe) > 3 ? "" : " "
}
function oA(e, t) {
    for (; --t && zt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
        ;
    return bs(e, ga() + (t < 6 && kn() == 32 && zt() == 32))
}
function Hc(e) {
    for (; zt(); )
        switch (Qe) {
        case e:
            return Lt;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Hc(Qe);
            break;
        case 40:
            e === 41 && Hc(e);
            break;
        case 92:
            zt();
            break
        }
    return Lt
}
function iA(e, t) {
    for (; zt() && e + Qe !== 47 + 10; )
        if (e + Qe === 42 + 42 && kn() === 47)
            break;
    return "/*" + bs(t, Lt - 1) + "*" + Il(e === 47 ? e : zt())
}
function sA(e) {
    for (; !ds(kn()); )
        zt();
    return bs(e, Lt)
}
function aA(e) {
    return ny(ya("", null, null, null, [""], e = ty(e), 0, [0], e))
}
function ya(e, t, n, r, o, i, s, a, l) {
    for (var u = 0, c = 0, f = s, p = 0, v = 0, x = 0, g = 1, P = 1, m = 1, h = 0, d = "", y = o, A = i, E = r, S = d; P; )
        switch (x = h,
        h = zt()) {
        case 40:
            if (x != 108 && ot(S, f - 1) == 58) {
                jc(S += ge(va(h), "&", "&\f"), "&\f") != -1 && (m = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            S += va(h);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            S += rA(x);
            break;
        case 92:
            S += oA(ga() - 1, 7);
            continue;
        case 47:
            switch (kn()) {
            case 42:
            case 47:
                Xs(lA(iA(zt(), ga()), t, n), l);
                break;
            default:
                S += "/"
            }
            break;
        case 123 * g:
            a[u++] = xn(S) * m;
        case 125 * g:
        case 59:
        case 0:
            switch (h) {
            case 0:
            case 125:
                P = 0;
            case 59 + c:
                v > 0 && xn(S) - f && Xs(v > 32 ? Ph(S + ";", r, n, f - 1) : Ph(ge(S, " ", "") + ";", r, n, f - 2), l);
                break;
            case 59:
                S += ";";
            default:
                if (Xs(E = Eh(S, t, n, u, c, o, a, d, y = [], A = [], f), i),
                h === 123)
                    if (c === 0)
                        ya(S, t, E, E, y, i, f, a, A);
                    else
                        switch (p === 99 && ot(S, 3) === 110 ? 100 : p) {
                        case 100:
                        case 109:
                        case 115:
                            ya(e, E, E, r && Xs(Eh(e, E, E, 0, 0, o, a, d, o, y = [], f), A), o, A, f, a, r ? y : A);
                            break;
                        default:
                            ya(S, E, E, E, [""], A, 0, a, A)
                        }
            }
            u = c = v = 0,
            g = m = 1,
            d = S = "",
            f = s;
            break;
        case 58:
            f = 1 + xn(S),
            v = x;
        default:
            if (g < 1) {
                if (h == 123)
                    --g;
                else if (h == 125 && g++ == 0 && nA() == 125)
                    continue
            }
            switch (S += Il(h),
            h * g) {
            case 38:
                m = c > 0 ? 1 : (S += "\f",
                -1);
                break;
            case 44:
                a[u++] = (xn(S) - 1) * m,
                m = 1;
                break;
            case 64:
                kn() === 45 && (S += va(zt())),
                p = kn(),
                c = f = xn(d = S += sA(ga())),
                h++;
                break;
            case 45:
                x === 45 && xn(S) == 2 && (g = 0)
            }
        }
    return i
}
function Eh(e, t, n, r, o, i, s, a, l, u, c) {
    for (var f = o - 1, p = o === 0 ? i : [""], v = up(p), x = 0, g = 0, P = 0; x < r; ++x)
        for (var m = 0, h = cs(e, f + 1, f = Yw(g = s[x])), d = e; m < v; ++m)
            (d = Zv(g > 0 ? p[m] + " " + h : ge(h, /&\f/g, p[m]))) && (l[P++] = d);
    return Rl(e, t, n, o === 0 ? ap : a, l, u, c)
}
function lA(e, t, n) {
    return Rl(e, t, n, qv, Il(tA()), cs(e, 2, -2), 0)
}
function Ph(e, t, n, r) {
    return Rl(e, t, n, lp, cs(e, 0, r), cs(e, r + 1, -1), r)
}
function Io(e, t) {
    for (var n = "", r = up(e), o = 0; o < r; o++)
        n += t(e[o], o, e, t) || "";
    return n
}
function uA(e, t, n, r) {
    switch (e.type) {
    case Xw:
    case lp:
        return e.return = e.return || e.value;
    case qv:
        return "";
    case Jv:
        return e.return = e.value + "{" + Io(e.children, r) + "}";
    case ap:
        e.value = e.props.join(",")
    }
    return xn(n = Io(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}
function cA(e) {
    var t = up(e);
    return function(n, r, o, i) {
        for (var s = "", a = 0; a < t; a++)
            s += e[a](n, r, o, i) || "";
        return s
    }
}
function dA(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
var pA = function(t, n, r) {
    for (var o = 0, i = 0; o = i,
    i = kn(),
    o === 38 && i === 12 && (n[r] = 1),
    !ds(i); )
        zt();
    return bs(t, Lt)
}
  , fA = function(t, n) {
    var r = -1
      , o = 44;
    do
        switch (ds(o)) {
        case 0:
            o === 38 && kn() === 12 && (n[r] = 1),
            t[r] += pA(Lt - 1, n, r);
            break;
        case 2:
            t[r] += va(o);
            break;
        case 4:
            if (o === 44) {
                t[++r] = kn() === 58 ? "&\f" : "",
                n[r] = t[r].length;
                break
            }
        default:
            t[r] += Il(o)
        }
    while (o = zt());
    return t
}
  , hA = function(t, n) {
    return ny(fA(ty(t), n))
}
  , Ih = new WeakMap
  , mA = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
        for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
            if (r = r.parent,
            !r)
                return;
        if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ih.get(r)) && !o) {
            Ih.set(t, !0);
            for (var i = [], s = hA(n, i), a = r.props, l = 0, u = 0; l < s.length; l++)
                for (var c = 0; c < a.length; c++,
                u++)
                    t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l]
        }
    }
}
  , gA = function(t) {
    if (t.type === "decl") {
        var n = t.value;
        n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "",
        t.value = "")
    }
};
function ry(e, t) {
    switch (Jw(e, t)) {
    case 5103:
        return me + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
        return me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
        return me + e + Ga + e + pt + e + e;
    case 6828:
    case 4268:
        return me + e + pt + e + e;
    case 6165:
        return me + e + pt + "flex-" + e + e;
    case 5187:
        return me + e + ge(e, /(\w+).+(:[^]+)/, me + "box-$1$2" + pt + "flex-$1$2") + e;
    case 5443:
        return me + e + pt + "flex-item-" + ge(e, /flex-|-self/, "") + e;
    case 4675:
        return me + e + pt + "flex-line-pack" + ge(e, /align-content|flex-|-self/, "") + e;
    case 5548:
        return me + e + pt + ge(e, "shrink", "negative") + e;
    case 5292:
        return me + e + pt + ge(e, "basis", "preferred-size") + e;
    case 6060:
        return me + "box-" + ge(e, "-grow", "") + me + e + pt + ge(e, "grow", "positive") + e;
    case 4554:
        return me + ge(e, /([^-])(transform)/g, "$1" + me + "$2") + e;
    case 6187:
        return ge(ge(ge(e, /(zoom-|grab)/, me + "$1"), /(image-set)/, me + "$1"), e, "") + e;
    case 5495:
    case 3959:
        return ge(e, /(image-set\([^]*)/, me + "$1$`$1");
    case 4968:
        return ge(ge(e, /(.+:)(flex-)?(.*)/, me + "box-pack:$3" + pt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + me + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
        return ge(e, /(.+)-inline(.+)/, me + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
        if (xn(e) - 1 - t > 6)
            switch (ot(e, t + 1)) {
            case 109:
                if (ot(e, t + 4) !== 45)
                    break;
            case 102:
                return ge(e, /(.+:)(.+)-([^]+)/, "$1" + me + "$2-$3$1" + Ga + (ot(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
            case 115:
                return ~jc(e, "stretch") ? ry(ge(e, "stretch", "fill-available"), t) + e : e
            }
        break;
    case 4949:
        if (ot(e, t + 1) !== 115)
            break;
    case 6444:
        switch (ot(e, xn(e) - 3 - (~jc(e, "!important") && 10))) {
        case 107:
            return ge(e, ":", ":" + me) + e;
        case 101:
            return ge(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + me + (ot(e, 14) === 45 ? "inline-" : "") + "box$3$1" + me + "$2$3$1" + pt + "$2box$3") + e
        }
        break;
    case 5936:
        switch (ot(e, t + 11)) {
        case 114:
            return me + e + pt + ge(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
            return me + e + pt + ge(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
            return me + e + pt + ge(e, /[svh]\w+-[tblr]{2}/, "lr") + e
        }
        return me + e + pt + e + e
    }
    return e
}
var vA = function(t, n, r, o) {
    if (t.length > -1 && !t.return)
        switch (t.type) {
        case lp:
            t.return = ry(t.value, t.length);
            break;
        case Jv:
            return Io([fi(t, {
                value: ge(t.value, "@", "@" + me)
            })], o);
        case ap:
            if (t.length)
                return eA(t.props, function(i) {
                    switch (Zw(i, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        return Io([fi(t, {
                            props: [ge(i, /:(read-\w+)/, ":" + Ga + "$1")]
                        })], o);
                    case "::placeholder":
                        return Io([fi(t, {
                            props: [ge(i, /:(plac\w+)/, ":" + me + "input-$1")]
                        }), fi(t, {
                            props: [ge(i, /:(plac\w+)/, ":" + Ga + "$1")]
                        }), fi(t, {
                            props: [ge(i, /:(plac\w+)/, pt + "input-$1")]
                        })], o)
                    }
                    return ""
                })
        }
}
  , yA = [vA]
  , xA = function(t) {
    var n = t.key;
    if (n === "css") {
        var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(r, function(g) {
            var P = g.getAttribute("data-emotion");
            P.indexOf(" ") !== -1 && (document.head.appendChild(g),
            g.setAttribute("data-s", ""))
        })
    }
    var o = t.stylisPlugins || yA, i = {}, s, a = [];
    s = t.container || document.head,
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(g) {
        for (var P = g.getAttribute("data-emotion").split(" "), m = 1; m < P.length; m++)
            i[P[m]] = !0;
        a.push(g)
    });
    var l, u = [mA, gA];
    {
        var c, f = [uA, dA(function(g) {
            c.insert(g)
        })], p = cA(u.concat(o, f)), v = function(P) {
            return Io(aA(P), p)
        };
        l = function(P, m, h, d) {
            c = h,
            v(P ? P + "{" + m.styles + "}" : m.styles),
            d && (x.inserted[m.name] = !0)
        }
    }
    var x = {
        key: n,
        sheet: new Kw({
            key: n,
            container: s,
            nonce: t.nonce,
            speedy: t.speedy,
            prepend: t.prepend,
            insertionPoint: t.insertionPoint
        }),
        nonce: t.nonce,
        inserted: i,
        registered: {},
        insert: l
    };
    return x.sheet.hydrate(a),
    x
}
  , oy = {
    exports: {}
}
  , Ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt = typeof Symbol == "function" && Symbol.for
  , cp = tt ? Symbol.for("react.element") : 60103
  , dp = tt ? Symbol.for("react.portal") : 60106
  , Tl = tt ? Symbol.for("react.fragment") : 60107
  , Nl = tt ? Symbol.for("react.strict_mode") : 60108
  , Ll = tt ? Symbol.for("react.profiler") : 60114
  , Ol = tt ? Symbol.for("react.provider") : 60109
  , Ml = tt ? Symbol.for("react.context") : 60110
  , pp = tt ? Symbol.for("react.async_mode") : 60111
  , Bl = tt ? Symbol.for("react.concurrent_mode") : 60111
  , Fl = tt ? Symbol.for("react.forward_ref") : 60112
  , _l = tt ? Symbol.for("react.suspense") : 60113
  , CA = tt ? Symbol.for("react.suspense_list") : 60120
  , Dl = tt ? Symbol.for("react.memo") : 60115
  , zl = tt ? Symbol.for("react.lazy") : 60116
  , wA = tt ? Symbol.for("react.block") : 60121
  , AA = tt ? Symbol.for("react.fundamental") : 60117
  , bA = tt ? Symbol.for("react.responder") : 60118
  , SA = tt ? Symbol.for("react.scope") : 60119;
function Ht(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case cp:
            switch (e = e.type,
            e) {
            case pp:
            case Bl:
            case Tl:
            case Ll:
            case Nl:
            case _l:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case Ml:
                case Fl:
                case zl:
                case Dl:
                case Ol:
                    return e;
                default:
                    return t
                }
            }
        case dp:
            return t
        }
    }
}
function iy(e) {
    return Ht(e) === Bl
}
Ae.AsyncMode = pp;
Ae.ConcurrentMode = Bl;
Ae.ContextConsumer = Ml;
Ae.ContextProvider = Ol;
Ae.Element = cp;
Ae.ForwardRef = Fl;
Ae.Fragment = Tl;
Ae.Lazy = zl;
Ae.Memo = Dl;
Ae.Portal = dp;
Ae.Profiler = Ll;
Ae.StrictMode = Nl;
Ae.Suspense = _l;
Ae.isAsyncMode = function(e) {
    return iy(e) || Ht(e) === pp
}
;
Ae.isConcurrentMode = iy;
Ae.isContextConsumer = function(e) {
    return Ht(e) === Ml
}
;
Ae.isContextProvider = function(e) {
    return Ht(e) === Ol
}
;
Ae.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === cp
}
;
Ae.isForwardRef = function(e) {
    return Ht(e) === Fl
}
;
Ae.isFragment = function(e) {
    return Ht(e) === Tl
}
;
Ae.isLazy = function(e) {
    return Ht(e) === zl
}
;
Ae.isMemo = function(e) {
    return Ht(e) === Dl
}
;
Ae.isPortal = function(e) {
    return Ht(e) === dp
}
;
Ae.isProfiler = function(e) {
    return Ht(e) === Ll
}
;
Ae.isStrictMode = function(e) {
    return Ht(e) === Nl
}
;
Ae.isSuspense = function(e) {
    return Ht(e) === _l
}
;
Ae.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Tl || e === Bl || e === Ll || e === Nl || e === _l || e === CA || typeof e == "object" && e !== null && (e.$$typeof === zl || e.$$typeof === Dl || e.$$typeof === Ol || e.$$typeof === Ml || e.$$typeof === Fl || e.$$typeof === AA || e.$$typeof === bA || e.$$typeof === SA || e.$$typeof === wA)
}
;
Ae.typeOf = Ht;
oy.exports = Ae;
var sy = oy.exports
  , EA = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , PA = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , ay = {};
ay[sy.ForwardRef] = EA;
ay[sy.Memo] = PA;
var IA = !0;
function kA(e, t, n) {
    var r = "";
    return n.split(" ").forEach(function(o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " "
    }),
    r
}
var ly = function(t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || IA === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles)
}
  , uy = function(t, n, r) {
    ly(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
        var i = n;
        do
            t.insert(n === i ? "." + o : "", i, t.sheet, !0),
            i = i.next;
        while (i !== void 0)
    }
};
function RA(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r,
    o -= 4)
        n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24,
        n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16),
        n ^= n >>> 24,
        t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
    case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
        t ^= e.charCodeAt(r) & 255,
        t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13,
    t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16),
    ((t ^ t >>> 15) >>> 0).toString(36)
}
var TA = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}
  , NA = /[A-Z]|^ms/g
  , LA = /_EMO_([^_]+?)_([^]*?)_EMO_/g
  , cy = function(t) {
    return t.charCodeAt(1) === 45
}
  , kh = function(t) {
    return t != null && typeof t != "boolean"
}
  , Mu = Yv(function(e) {
    return cy(e) ? e : e.replace(NA, "-$&").toLowerCase()
})
  , Rh = function(t, n) {
    switch (t) {
    case "animation":
    case "animationName":
        if (typeof n == "string")
            return n.replace(LA, function(r, o, i) {
                return Cn = {
                    name: o,
                    styles: i,
                    next: Cn
                },
                o
            })
    }
    return TA[t] !== 1 && !cy(t) && typeof n == "number" && n !== 0 ? n + "px" : n
};
function ps(e, t, n) {
    if (n == null)
        return "";
    if (n.__emotion_styles !== void 0)
        return n;
    switch (typeof n) {
    case "boolean":
        return "";
    case "object":
        {
            if (n.anim === 1)
                return Cn = {
                    name: n.name,
                    styles: n.styles,
                    next: Cn
                },
                n.name;
            if (n.styles !== void 0) {
                var r = n.next;
                if (r !== void 0)
                    for (; r !== void 0; )
                        Cn = {
                            name: r.name,
                            styles: r.styles,
                            next: Cn
                        },
                        r = r.next;
                var o = n.styles + ";";
                return o
            }
            return OA(e, t, n)
        }
    case "function":
        {
            if (e !== void 0) {
                var i = Cn
                  , s = n(e);
                return Cn = i,
                ps(e, t, s)
            }
            break
        }
    }
    if (t == null)
        return n;
    var a = t[n];
    return a !== void 0 ? a : n
}
function OA(e, t, n) {
    var r = "";
    if (Array.isArray(n))
        for (var o = 0; o < n.length; o++)
            r += ps(e, t, n[o]) + ";";
    else
        for (var i in n) {
            var s = n[i];
            if (typeof s != "object")
                t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : kh(s) && (r += Mu(i) + ":" + Rh(i, s) + ";");
            else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
                for (var a = 0; a < s.length; a++)
                    kh(s[a]) && (r += Mu(i) + ":" + Rh(i, s[a]) + ";");
            else {
                var l = ps(e, t, s);
                switch (i) {
                case "animation":
                case "animationName":
                    {
                        r += Mu(i) + ":" + l + ";";
                        break
                    }
                default:
                    r += i + "{" + l + "}"
                }
            }
        }
    return r
}
var Th = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Cn, fp = function(t, n, r) {
    if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
        return t[0];
    var o = !0
      , i = "";
    Cn = void 0;
    var s = t[0];
    s == null || s.raw === void 0 ? (o = !1,
    i += ps(r, n, s)) : i += s[0];
    for (var a = 1; a < t.length; a++)
        i += ps(r, n, t[a]),
        o && (i += s[a]);
    Th.lastIndex = 0;
    for (var l = "", u; (u = Th.exec(i)) !== null; )
        l += "-" + u[1];
    var c = RA(i) + l;
    return {
        name: c,
        styles: i,
        next: Cn
    }
}, MA = function(t) {
    return t()
}, dy = ju["useInsertionEffect"] ? ju["useInsertionEffect"] : !1, BA = dy || MA, Nh = dy || C.exports.useLayoutEffect, py = C.exports.createContext(typeof HTMLElement != "undefined" ? xA({
    key: "css"
}) : null);
py.Provider;
var fy = function(t) {
    return C.exports.forwardRef(function(n, r) {
        var o = C.exports.useContext(py);
        return t(n, o, r)
    })
}
  , hy = C.exports.createContext({})
  , FA = fy(function(e, t) {
    var n = e.styles
      , r = fp([n], void 0, C.exports.useContext(hy))
      , o = C.exports.useRef();
    return Nh(function() {
        var i = t.key + "-global"
          , s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy
        })
          , a = !1
          , l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
        return t.sheet.tags.length && (s.before = t.sheet.tags[0]),
        l !== null && (a = !0,
        l.setAttribute("data-emotion", i),
        s.hydrate([l])),
        o.current = [s, a],
        function() {
            s.flush()
        }
    }, [t]),
    Nh(function() {
        var i = o.current
          , s = i[0]
          , a = i[1];
        if (a) {
            i[1] = !1;
            return
        }
        if (r.next !== void 0 && uy(t, r.next, !0),
        s.tags.length) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            s.before = l,
            s.flush()
        }
        t.insert("", r, s, !1)
    }, [t, r.name]),
    null
});
function _A() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return fp(t)
}
var hp = function() {
    var t = _A.apply(void 0, arguments)
      , n = "animation-" + t.name;
    return {
        name: n,
        styles: "@keyframes " + n + "{" + t.styles + "}",
        anim: 1,
        toString: function() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
        }
    }
}
  , DA = Ww
  , zA = function(t) {
    return t !== "theme"
}
  , Lh = function(t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? DA : zA
}
  , Oh = function(t, n, r) {
    var o;
    if (n) {
        var i = n.shouldForwardProp;
        o = t.__emotion_forwardProp && i ? function(s) {
            return t.__emotion_forwardProp(s) && i(s)
        }
        : i
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp),
    o
}
  , $A = function(t) {
    var n = t.cache
      , r = t.serialized
      , o = t.isStringTag;
    return ly(n, r, o),
    BA(function() {
        return uy(n, r, o)
    }),
    null
}
  , VA = function e(t, n) {
    var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
    n !== void 0 && (i = n.label,
    s = n.target);
    var a = Oh(t, n, r)
      , l = a || Lh(o)
      , u = !l("as");
    return function() {
        var c = arguments
          , f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
        if (i !== void 0 && f.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
            f.push.apply(f, c);
        else {
            f.push(c[0][0]);
            for (var p = c.length, v = 1; v < p; v++)
                f.push(c[v], c[0][v])
        }
        var x = fy(function(g, P, m) {
            var h = u && g.as || o
              , d = ""
              , y = []
              , A = g;
            if (g.theme == null) {
                A = {};
                for (var E in g)
                    A[E] = g[E];
                A.theme = C.exports.useContext(hy)
            }
            typeof g.className == "string" ? d = kA(P.registered, y, g.className) : g.className != null && (d = g.className + " ");
            var S = fp(f.concat(y), P.registered, A);
            d += P.key + "-" + S.name,
            s !== void 0 && (d += " " + s);
            var I = u && a === void 0 ? Lh(h) : l
              , R = {};
            for (var k in g)
                u && k === "as" || I(k) && (R[k] = g[k]);
            return R.className = d,
            R.ref = m,
            C.exports.createElement(C.exports.Fragment, null, C.exports.createElement($A, {
                cache: P,
                serialized: S,
                isStringTag: typeof h == "string"
            }), C.exports.createElement(h, R))
        });
        return x.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")",
        x.defaultProps = t.defaultProps,
        x.__emotion_real = x,
        x.__emotion_base = o,
        x.__emotion_styles = f,
        x.__emotion_forwardProp = a,
        Object.defineProperty(x, "toString", {
            value: function() {
                return "." + s
            }
        }),
        x.withComponent = function(g, P) {
            return e(g, w({}, n, P, {
                shouldForwardProp: Oh(x, P, !0)
            })).apply(void 0, f)
        }
        ,
        x
    }
}
  , UA = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]
  , Wc = VA.bind();
UA.forEach(function(e) {
    Wc[e] = Wc(e)
});
var jA = Wc;
function HA(e) {
    return e == null || Object.keys(e).length === 0
}
function WA(e) {
    const {styles: t, defaultTheme: n={}} = e;
    return b(FA, {
        styles: typeof t == "function" ? o=>t(HA(o) ? n : o) : t
    })
}
/**
 * @mui/styled-engine v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function QA(e, t) {
    return jA(e, t)
}
const GA = (e,t)=>{
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
}
;
function $i(e, t) {
    return t ? qt(e, t, {
        clone: !1
    }) : e
}
const mp = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
}
  , Mh = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: e=>`@media (min-width:${mp[e]}px)`
};
function Vt(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
        const i = r.breakpoints || Mh;
        return t.reduce((s,a,l)=>(s[i.up(i.keys[l])] = n(t[l]),
        s), {})
    }
    if (typeof t == "object") {
        const i = r.breakpoints || Mh;
        return Object.keys(t).reduce((s,a)=>{
            if (Object.keys(i.values || mp).indexOf(a) !== -1) {
                const l = i.up(a);
                s[l] = n(t[a], a)
            } else {
                const l = a;
                s[l] = t[l]
            }
            return s
        }
        , {})
    }
    return n(t)
}
function KA(e={}) {
    var t;
    return ((t = e.keys) == null ? void 0 : t.reduce((r,o)=>{
        const i = e.up(o);
        return r[i] = {},
        r
    }
    , {})) || {}
}
function XA(e, t) {
    return e.reduce((n,r)=>{
        const o = n[r];
        return (!o || Object.keys(o).length === 0) && delete n[r],
        n
    }
    , t)
}
function YA(e, t) {
    if (typeof e != "object")
        return {};
    const n = {}
      , r = Object.keys(t);
    return Array.isArray(e) ? r.forEach((o,i)=>{
        i < e.length && (n[o] = !0)
    }
    ) : r.forEach(o=>{
        e[o] != null && (n[o] = !0)
    }
    ),
    n
}
function $l({values: e, breakpoints: t, base: n}) {
    const r = n || YA(e, t)
      , o = Object.keys(r);
    if (o.length === 0)
        return e;
    let i;
    return o.reduce((s,a,l)=>(Array.isArray(e) ? (s[a] = e[l] != null ? e[l] : e[i],
    i = l) : typeof e == "object" ? (s[a] = e[a] != null ? e[a] : e[i],
    i = a) : s[a] = e,
    s), {})
}
function Vl(e, t, n=!0) {
    if (!t || typeof t != "string")
        return null;
    if (e && e.vars && n) {
        const r = `vars.${t}`.split(".").reduce((o,i)=>o && o[i] ? o[i] : null, e);
        if (r != null)
            return r
    }
    return t.split(".").reduce((r,o)=>r && r[o] != null ? r[o] : null, e)
}
function Ka(e, t, n, r=n) {
    let o;
    return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Vl(e, n) || r,
    t && (o = t(o, r, e)),
    o
}
function xe(e) {
    const {prop: t, cssProperty: n=e.prop, themeKey: r, transform: o} = e
      , i = s=>{
        if (s[t] == null)
            return null;
        const a = s[t]
          , l = s.theme
          , u = Vl(l, r) || {};
        return Vt(s, a, f=>{
            let p = Ka(u, o, f);
            return f === p && typeof f == "string" && (p = Ka(u, o, `${t}${f === "default" ? "" : ne(f)}`, f)),
            n === !1 ? p : {
                [n]: p
            }
        }
        )
    }
    ;
    return i.propTypes = {},
    i.filterProps = [t],
    i
}
function Ul(...e) {
    const t = e.reduce((r,o)=>(o.filterProps.forEach(i=>{
        r[i] = o
    }
    ),
    r), {})
      , n = r=>Object.keys(r).reduce((o,i)=>t[i] ? $i(o, t[i](r)) : o, {});
    return n.propTypes = {},
    n.filterProps = e.reduce((r,o)=>r.concat(o.filterProps), []),
    n
}
function qA(e) {
    const t = {};
    return n=>(t[n] === void 0 && (t[n] = e(n)),
    t[n])
}
const JA = {
    m: "margin",
    p: "padding"
}
  , ZA = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
}
  , Bh = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
}
  , eb = qA(e=>{
    if (e.length > 2)
        if (Bh[e])
            e = Bh[e];
        else
            return [e];
    const [t,n] = e.split("")
      , r = JA[t]
      , o = ZA[n] || "";
    return Array.isArray(o) ? o.map(i=>r + i) : [r + o]
}
)
  , gp = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]
  , vp = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...gp, ...vp];
function Ss(e, t, n, r) {
    var o;
    const i = (o = Vl(e, t, !1)) != null ? o : n;
    return typeof i == "number" ? s=>typeof s == "string" ? s : i * s : Array.isArray(i) ? s=>typeof s == "string" ? s : i[s] : typeof i == "function" ? i : ()=>{}
}
function my(e) {
    return Ss(e, "spacing", 8)
}
function Es(e, t) {
    if (typeof t == "string" || t == null)
        return t;
    const n = Math.abs(t)
      , r = e(n);
    return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`
}
function tb(e, t) {
    return n=>e.reduce((r,o)=>(r[o] = Es(t, n),
    r), {})
}
function nb(e, t, n, r) {
    if (t.indexOf(n) === -1)
        return null;
    const o = eb(n)
      , i = tb(o, r)
      , s = e[n];
    return Vt(e, s, i)
}
function gy(e, t) {
    const n = my(e.theme);
    return Object.keys(e).map(r=>nb(e, t, r, n)).reduce($i, {})
}
function Ve(e) {
    return gy(e, gp)
}
Ve.propTypes = {};
Ve.filterProps = gp;
function Ue(e) {
    return gy(e, vp)
}
Ue.propTypes = {};
Ue.filterProps = vp;
function An(e) {
    return typeof e != "number" ? e : `${e}px solid`
}
const rb = xe({
    prop: "border",
    themeKey: "borders",
    transform: An
})
  , ob = xe({
    prop: "borderTop",
    themeKey: "borders",
    transform: An
})
  , ib = xe({
    prop: "borderRight",
    themeKey: "borders",
    transform: An
})
  , sb = xe({
    prop: "borderBottom",
    themeKey: "borders",
    transform: An
})
  , ab = xe({
    prop: "borderLeft",
    themeKey: "borders",
    transform: An
})
  , lb = xe({
    prop: "borderColor",
    themeKey: "palette"
})
  , ub = xe({
    prop: "borderTopColor",
    themeKey: "palette"
})
  , cb = xe({
    prop: "borderRightColor",
    themeKey: "palette"
})
  , db = xe({
    prop: "borderBottomColor",
    themeKey: "palette"
})
  , pb = xe({
    prop: "borderLeftColor",
    themeKey: "palette"
})
  , jl = e=>{
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
        const t = Ss(e.theme, "shape.borderRadius", 4)
          , n = r=>({
            borderRadius: Es(t, r)
        });
        return Vt(e, e.borderRadius, n)
    }
    return null
}
;
jl.propTypes = {};
jl.filterProps = ["borderRadius"];
Ul(rb, ob, ib, sb, ab, lb, ub, cb, db, pb, jl);
const Hl = e=>{
    if (e.gap !== void 0 && e.gap !== null) {
        const t = Ss(e.theme, "spacing", 8)
          , n = r=>({
            gap: Es(t, r)
        });
        return Vt(e, e.gap, n)
    }
    return null
}
;
Hl.propTypes = {};
Hl.filterProps = ["gap"];
const Wl = e=>{
    if (e.columnGap !== void 0 && e.columnGap !== null) {
        const t = Ss(e.theme, "spacing", 8)
          , n = r=>({
            columnGap: Es(t, r)
        });
        return Vt(e, e.columnGap, n)
    }
    return null
}
;
Wl.propTypes = {};
Wl.filterProps = ["columnGap"];
const Ql = e=>{
    if (e.rowGap !== void 0 && e.rowGap !== null) {
        const t = Ss(e.theme, "spacing", 8)
          , n = r=>({
            rowGap: Es(t, r)
        });
        return Vt(e, e.rowGap, n)
    }
    return null
}
;
Ql.propTypes = {};
Ql.filterProps = ["rowGap"];
const fb = xe({
    prop: "gridColumn"
})
  , hb = xe({
    prop: "gridRow"
})
  , mb = xe({
    prop: "gridAutoFlow"
})
  , gb = xe({
    prop: "gridAutoColumns"
})
  , vb = xe({
    prop: "gridAutoRows"
})
  , yb = xe({
    prop: "gridTemplateColumns"
})
  , xb = xe({
    prop: "gridTemplateRows"
})
  , Cb = xe({
    prop: "gridTemplateAreas"
})
  , wb = xe({
    prop: "gridArea"
});
Ul(Hl, Wl, Ql, fb, hb, mb, gb, vb, yb, xb, Cb, wb);
function ko(e, t) {
    return t === "grey" ? t : e
}
const Ab = xe({
    prop: "color",
    themeKey: "palette",
    transform: ko
})
  , bb = xe({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: ko
})
  , Sb = xe({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: ko
});
Ul(Ab, bb, Sb);
function Ft(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e
}
const Eb = xe({
    prop: "width",
    transform: Ft
})
  , yp = e=>{
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
        const t = n=>{
            var r, o, i;
            return {
                maxWidth: ((r = e.theme) == null || (o = r.breakpoints) == null || (i = o.values) == null ? void 0 : i[n]) || mp[n] || Ft(n)
            }
        }
        ;
        return Vt(e, e.maxWidth, t)
    }
    return null
}
;
yp.filterProps = ["maxWidth"];
const Pb = xe({
    prop: "minWidth",
    transform: Ft
})
  , Ib = xe({
    prop: "height",
    transform: Ft
})
  , kb = xe({
    prop: "maxHeight",
    transform: Ft
})
  , Rb = xe({
    prop: "minHeight",
    transform: Ft
});
xe({
    prop: "size",
    cssProperty: "width",
    transform: Ft
});
xe({
    prop: "size",
    cssProperty: "height",
    transform: Ft
});
const Tb = xe({
    prop: "boxSizing"
});
Ul(Eb, yp, Pb, Ib, kb, Rb, Tb);
const Bu = e=>t=>{
    if (t[e] !== void 0 && t[e] !== null) {
        const n = r=>{
            var o, i;
            let s = (o = t.theme.typography) == null ? void 0 : o[`${e}${t[e] === "default" || t[e] === e ? "" : ne((i = t[e]) == null ? void 0 : i.toString())}`];
            if (!s) {
                var a, l;
                s = (a = t.theme.typography) == null || (l = a[r]) == null ? void 0 : l[e]
            }
            return s || (s = r),
            {
                [e]: s
            }
        }
        ;
        return Vt(t, t[e], n)
    }
    return null
}
  , Nb = {
    border: {
        themeKey: "borders",
        transform: An
    },
    borderTop: {
        themeKey: "borders",
        transform: An
    },
    borderRight: {
        themeKey: "borders",
        transform: An
    },
    borderBottom: {
        themeKey: "borders",
        transform: An
    },
    borderLeft: {
        themeKey: "borders",
        transform: An
    },
    borderColor: {
        themeKey: "palette"
    },
    borderTopColor: {
        themeKey: "palette"
    },
    borderRightColor: {
        themeKey: "palette"
    },
    borderBottomColor: {
        themeKey: "palette"
    },
    borderLeftColor: {
        themeKey: "palette"
    },
    borderRadius: {
        themeKey: "shape.borderRadius",
        style: jl
    },
    color: {
        themeKey: "palette",
        transform: ko
    },
    bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: ko
    },
    backgroundColor: {
        themeKey: "palette",
        transform: ko
    },
    p: {
        style: Ue
    },
    pt: {
        style: Ue
    },
    pr: {
        style: Ue
    },
    pb: {
        style: Ue
    },
    pl: {
        style: Ue
    },
    px: {
        style: Ue
    },
    py: {
        style: Ue
    },
    padding: {
        style: Ue
    },
    paddingTop: {
        style: Ue
    },
    paddingRight: {
        style: Ue
    },
    paddingBottom: {
        style: Ue
    },
    paddingLeft: {
        style: Ue
    },
    paddingX: {
        style: Ue
    },
    paddingY: {
        style: Ue
    },
    paddingInline: {
        style: Ue
    },
    paddingInlineStart: {
        style: Ue
    },
    paddingInlineEnd: {
        style: Ue
    },
    paddingBlock: {
        style: Ue
    },
    paddingBlockStart: {
        style: Ue
    },
    paddingBlockEnd: {
        style: Ue
    },
    m: {
        style: Ve
    },
    mt: {
        style: Ve
    },
    mr: {
        style: Ve
    },
    mb: {
        style: Ve
    },
    ml: {
        style: Ve
    },
    mx: {
        style: Ve
    },
    my: {
        style: Ve
    },
    margin: {
        style: Ve
    },
    marginTop: {
        style: Ve
    },
    marginRight: {
        style: Ve
    },
    marginBottom: {
        style: Ve
    },
    marginLeft: {
        style: Ve
    },
    marginX: {
        style: Ve
    },
    marginY: {
        style: Ve
    },
    marginInline: {
        style: Ve
    },
    marginInlineStart: {
        style: Ve
    },
    marginInlineEnd: {
        style: Ve
    },
    marginBlock: {
        style: Ve
    },
    marginBlockStart: {
        style: Ve
    },
    marginBlockEnd: {
        style: Ve
    },
    displayPrint: {
        cssProperty: !1,
        transform: e=>({
            "@media print": {
                display: e
            }
        })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
        style: Hl
    },
    rowGap: {
        style: Ql
    },
    columnGap: {
        style: Wl
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
        themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
        themeKey: "shadows"
    },
    width: {
        transform: Ft
    },
    maxWidth: {
        style: yp
    },
    minWidth: {
        transform: Ft
    },
    height: {
        transform: Ft
    },
    maxHeight: {
        transform: Ft
    },
    minHeight: {
        transform: Ft
    },
    boxSizing: {},
    fontFamily: {
        themeKey: "typography",
        style: Bu("fontFamily")
    },
    fontSize: {
        themeKey: "typography",
        style: Bu("fontSize")
    },
    fontStyle: {
        themeKey: "typography"
    },
    fontWeight: {
        themeKey: "typography",
        style: Bu("fontWeight")
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
        cssProperty: !1,
        themeKey: "typography"
    }
};
var Gl = Nb;
function Lb(...e) {
    const t = e.reduce((r,o)=>r.concat(Object.keys(o)), [])
      , n = new Set(t);
    return e.every(r=>n.size === Object.keys(r).length)
}
function Ob(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Mb() {
    function e(n, r, o, i) {
        const s = {
            [n]: r,
            theme: o
        }
          , a = i[n];
        if (!a)
            return {
                [n]: r
            };
        const {cssProperty: l=n, themeKey: u, transform: c, style: f} = a;
        if (r == null)
            return null;
        const p = Vl(o, u) || {};
        return f ? f(s) : Vt(s, r, x=>{
            let g = Ka(p, c, x);
            return x === g && typeof x == "string" && (g = Ka(p, c, `${n}${x === "default" ? "" : ne(x)}`, x)),
            l === !1 ? g : {
                [l]: g
            }
        }
        )
    }
    function t(n) {
        var r;
        const {sx: o, theme: i={}} = n || {};
        if (!o)
            return null;
        const s = (r = i.unstable_sxConfig) != null ? r : Gl;
        function a(l) {
            let u = l;
            if (typeof l == "function")
                u = l(i);
            else if (typeof l != "object")
                return l;
            if (!u)
                return null;
            const c = KA(i.breakpoints)
              , f = Object.keys(c);
            let p = c;
            return Object.keys(u).forEach(v=>{
                const x = Ob(u[v], i);
                if (x != null)
                    if (typeof x == "object")
                        if (s[v])
                            p = $i(p, e(v, x, i, s));
                        else {
                            const g = Vt({
                                theme: i
                            }, x, P=>({
                                [v]: P
                            }));
                            Lb(g, x) ? p[v] = t({
                                sx: x,
                                theme: i
                            }) : p = $i(p, g)
                        }
                    else
                        p = $i(p, e(v, x, i, s))
            }
            ),
            XA(f, p)
        }
        return Array.isArray(o) ? o.map(a) : a(o)
    }
    return t
}
const vy = Mb();
vy.filterProps = ["sx"];
var xp = vy;
const Bb = ["sx"]
  , Fb = e=>{
    var t, n;
    const r = {
        systemProps: {},
        otherProps: {}
    }
      , o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Gl;
    return Object.keys(e).forEach(i=>{
        o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i]
    }
    ),
    r
}
;
function yy(e) {
    const {sx: t} = e
      , n = q(e, Bb)
      , {systemProps: r, otherProps: o} = Fb(n);
    let i;
    return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s)=>{
        const a = t(...s);
        return Nr(a) ? w({}, r, a) : r
    }
    : i = w({}, r, t),
    w({}, o, {
        sx: i
    })
}
const _b = ["values", "unit", "step"]
  , Db = e=>{
    const t = Object.keys(e).map(n=>({
        key: n,
        val: e[n]
    })) || [];
    return t.sort((n,r)=>n.val - r.val),
    t.reduce((n,r)=>w({}, n, {
        [r.key]: r.val
    }), {})
}
;
function zb(e) {
    const {values: t={
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
    }, unit: n="px", step: r=5} = e
      , o = q(e, _b)
      , i = Db(t)
      , s = Object.keys(i);
    function a(p) {
        return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`
    }
    function l(p) {
        return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`
    }
    function u(p, v) {
        const x = s.indexOf(v);
        return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(x !== -1 && typeof t[s[x]] == "number" ? t[s[x]] : v) - r / 100}${n})`
    }
    function c(p) {
        return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : a(p)
    }
    function f(p) {
        const v = s.indexOf(p);
        return v === 0 ? a(s[1]) : v === s.length - 1 ? l(s[v]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and")
    }
    return w({
        keys: s,
        values: i,
        up: a,
        down: l,
        between: u,
        only: c,
        not: f,
        unit: n
    }, o)
}
const $b = {
    borderRadius: 4
};
var Vb = $b;
function Ub(e=8) {
    if (e.mui)
        return e;
    const t = my({
        spacing: e
    })
      , n = (...r)=>(r.length === 0 ? [1] : r).map(i=>{
        const s = t(i);
        return typeof s == "number" ? `${s}px` : s
    }
    ).join(" ");
    return n.mui = !0,
    n
}
const jb = ["breakpoints", "palette", "spacing", "shape"];
function Cp(e={}, ...t) {
    const {breakpoints: n={}, palette: r={}, spacing: o, shape: i={}} = e
      , s = q(e, jb)
      , a = zb(n)
      , l = Ub(o);
    let u = qt({
        breakpoints: a,
        direction: "ltr",
        components: {},
        palette: w({
            mode: "light"
        }, r),
        spacing: l,
        shape: w({}, Vb, i)
    }, s);
    return u = t.reduce((c,f)=>qt(c, f), u),
    u.unstable_sxConfig = w({}, Gl, s == null ? void 0 : s.unstable_sxConfig),
    u.unstable_sx = function(f) {
        return xp({
            sx: f,
            theme: this
        })
    }
    ,
    u
}
const Hb = C.exports.createContext(null);
var Wb = Hb;
function Qb() {
    return C.exports.useContext(Wb)
}
function Gb(e) {
    return Object.keys(e).length === 0
}
function xy(e=null) {
    const t = Qb();
    return !t || Gb(t) ? e : t
}
const Kb = Cp();
function Cy(e=Kb) {
    return xy(e)
}
const Xb = ["variant"];
function Fh(e) {
    return e.length === 0
}
function wy(e) {
    const {variant: t} = e
      , n = q(e, Xb);
    let r = t || "";
    return Object.keys(n).sort().forEach(o=>{
        o === "color" ? r += Fh(r) ? e[o] : ne(e[o]) : r += `${Fh(r) ? o : ne(o)}${ne(e[o].toString())}`
    }
    ),
    r
}
const Yb = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"]
  , qb = ["theme"]
  , Jb = ["theme"];
function hi(e) {
    return Object.keys(e).length === 0
}
function Zb(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96
}
const eS = (e,t)=>t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null
  , tS = (e,t)=>{
    let n = [];
    t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
    const r = {};
    return n.forEach(o=>{
        const i = wy(o.props);
        r[i] = o.style
    }
    ),
    r
}
  , nS = (e,t,n,r)=>{
    var o, i;
    const {ownerState: s={}} = e
      , a = []
      , l = n == null || (o = n.components) == null || (i = o[r]) == null ? void 0 : i.variants;
    return l && l.forEach(u=>{
        let c = !0;
        Object.keys(u.props).forEach(f=>{
            s[f] !== u.props[f] && e[f] !== u.props[f] && (c = !1)
        }
        ),
        c && a.push(t[wy(u.props)])
    }
    ),
    a
}
;
function Vi(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}
const rS = Cp();
function oS(e={}) {
    const {defaultTheme: t=rS, rootShouldForwardProp: n=Vi, slotShouldForwardProp: r=Vi} = e
      , o = i=>{
        const s = hi(i.theme) ? t : i.theme;
        return xp(w({}, i, {
            theme: s
        }))
    }
    ;
    return o.__mui_systemSx = !0,
    (i,s={})=>{
        GA(i, d=>d.filter(y=>!(y != null && y.__mui_systemSx)));
        const {name: a, slot: l, skipVariantsResolver: u, skipSx: c, overridesResolver: f} = s
          , p = q(s, Yb)
          , v = u !== void 0 ? u : l && l !== "Root" || !1
          , x = c || !1;
        let g, P = Vi;
        l === "Root" ? P = n : l ? P = r : Zb(i) && (P = void 0);
        const m = QA(i, w({
            shouldForwardProp: P,
            label: g
        }, p))
          , h = (d,...y)=>{
            const A = y ? y.map(R=>typeof R == "function" && R.__emotion_real !== R ? k=>{
                let {theme: O} = k
                  , W = q(k, qb);
                return R(w({
                    theme: hi(O) ? t : O
                }, W))
            }
            : R) : [];
            let E = d;
            a && f && A.push(R=>{
                const k = hi(R.theme) ? t : R.theme
                  , O = eS(a, k);
                if (O) {
                    const W = {};
                    return Object.entries(O).forEach(([U,D])=>{
                        W[U] = typeof D == "function" ? D(w({}, R, {
                            theme: k
                        })) : D
                    }
                    ),
                    f(R, W)
                }
                return null
            }
            ),
            a && !v && A.push(R=>{
                const k = hi(R.theme) ? t : R.theme;
                return nS(R, tS(a, k), k, a)
            }
            ),
            x || A.push(o);
            const S = A.length - y.length;
            if (Array.isArray(d) && S > 0) {
                const R = new Array(S).fill("");
                E = [...d, ...R],
                E.raw = [...d.raw, ...R]
            } else
                typeof d == "function" && d.__emotion_real !== d && (E = R=>{
                    let {theme: k} = R
                      , O = q(R, Jb);
                    return d(w({
                        theme: hi(k) ? t : k
                    }, O))
                }
                );
            return m(E, ...A)
        }
        ;
        return m.withConfig && (h.withConfig = m.withConfig),
        h
    }
}
function iS(e) {
    const {theme: t, name: n, props: r} = e;
    return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Zd(t.components[n].defaultProps, r)
}
function sS({props: e, name: t, defaultTheme: n}) {
    const r = Cy(n);
    return iS({
        theme: r,
        name: t,
        props: e
    })
}
function wp(e, t=0, n=1) {
    return Math.min(Math.max(t, e), n)
}
function aS(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`,"g");
    let n = e.match(t);
    return n && n[0].length === 1 && (n = n.map(r=>r + r)),
    n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r,o)=>o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : ""
}
function Gr(e) {
    if (e.type)
        return e;
    if (e.charAt(0) === "#")
        return Gr(aS(e));
    const t = e.indexOf("(")
      , n = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
        throw new Error(yr(9, e));
    let r = e.substring(t + 1, e.length - 1), o;
    if (n === "color") {
        if (r = r.split(" "),
        o = r.shift(),
        r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
        ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
            throw new Error(yr(10, o))
    } else
        r = r.split(",");
    return r = r.map(i=>parseFloat(i)),
    {
        type: n,
        values: r,
        colorSpace: o
    }
}
function Kl(e) {
    const {type: t, colorSpace: n} = e;
    let {values: r} = e;
    return t.indexOf("rgb") !== -1 ? r = r.map((o,i)=>i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`,
    r[2] = `${r[2]}%`),
    t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`,
    `${t}(${r})`
}
function lS(e) {
    e = Gr(e);
    const {values: t} = e
      , n = t[0]
      , r = t[1] / 100
      , o = t[2] / 100
      , i = r * Math.min(o, 1 - o)
      , s = (u,c=(u + n / 30) % 12)=>o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
    return e.type === "hsla" && (a += "a",
    l.push(t[3])),
    Kl({
        type: a,
        values: l
    })
}
function _h(e) {
    e = Gr(e);
    let t = e.type === "hsl" || e.type === "hsla" ? Gr(lS(e)).values : e.values;
    return t = t.map(n=>(e.type !== "color" && (n /= 255),
    n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4)),
    Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
}
function uS(e, t) {
    const n = _h(e)
      , r = _h(t);
    return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
}
function Sn(e, t) {
    return e = Gr(e),
    t = wp(t),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t,
    Kl(e)
}
function cS(e, t) {
    if (e = Gr(e),
    t = wp(t),
    e.type.indexOf("hsl") !== -1)
        e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
        for (let n = 0; n < 3; n += 1)
            e.values[n] *= 1 - t;
    return Kl(e)
}
function dS(e, t) {
    if (e = Gr(e),
    t = wp(t),
    e.type.indexOf("hsl") !== -1)
        e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") !== -1)
        for (let n = 0; n < 3; n += 1)
            e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.indexOf("color") !== -1)
        for (let n = 0; n < 3; n += 1)
            e.values[n] += (1 - e.values[n]) * t;
    return Kl(e)
}
function pS(e, t) {
    return w({
        toolbar: {
            minHeight: 56,
            [e.up("xs")]: {
                "@media (orientation: landscape)": {
                    minHeight: 48
                }
            },
            [e.up("sm")]: {
                minHeight: 64
            }
        }
    }, t)
}
const fS = {
    black: "#000",
    white: "#fff"
};
var fs = fS;
const hS = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
};
var mS = hS;
const gS = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
};
var Jr = gS;
const vS = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
};
var Zr = vS;
const yS = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
};
var mi = yS;
const xS = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
};
var eo = xS;
const CS = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
};
var to = CS;
const wS = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
};
var no = wS;
const AS = ["mode", "contrastThreshold", "tonalOffset"]
  , Dh = {
    text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
        paper: fs.white,
        default: fs.white
    },
    action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: .04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: .08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: .38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: .12,
        activatedOpacity: .12
    }
}
  , Fu = {
    text: {
        primary: fs.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
        paper: "#121212",
        default: "#121212"
    },
    action: {
        active: fs.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: .08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: .16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: .38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: .12,
        activatedOpacity: .24
    }
};
function zh(e, t, n, r) {
    const o = r.light || r
      , i = r.dark || r * 1.5;
    e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = dS(e.main, o) : t === "dark" && (e.dark = cS(e.main, i)))
}
function bS(e="light") {
    return e === "dark" ? {
        main: eo[200],
        light: eo[50],
        dark: eo[400]
    } : {
        main: eo[700],
        light: eo[400],
        dark: eo[800]
    }
}
function SS(e="light") {
    return e === "dark" ? {
        main: Jr[200],
        light: Jr[50],
        dark: Jr[400]
    } : {
        main: Jr[500],
        light: Jr[300],
        dark: Jr[700]
    }
}
function ES(e="light") {
    return e === "dark" ? {
        main: Zr[500],
        light: Zr[300],
        dark: Zr[700]
    } : {
        main: Zr[700],
        light: Zr[400],
        dark: Zr[800]
    }
}
function PS(e="light") {
    return e === "dark" ? {
        main: to[400],
        light: to[300],
        dark: to[700]
    } : {
        main: to[700],
        light: to[500],
        dark: to[900]
    }
}
function IS(e="light") {
    return e === "dark" ? {
        main: no[400],
        light: no[300],
        dark: no[700]
    } : {
        main: no[800],
        light: no[500],
        dark: no[900]
    }
}
function kS(e="light") {
    return e === "dark" ? {
        main: mi[400],
        light: mi[300],
        dark: mi[700]
    } : {
        main: "#ed6c02",
        light: mi[500],
        dark: mi[900]
    }
}
function RS(e) {
    const {mode: t="light", contrastThreshold: n=3, tonalOffset: r=.2} = e
      , o = q(e, AS)
      , i = e.primary || bS(t)
      , s = e.secondary || SS(t)
      , a = e.error || ES(t)
      , l = e.info || PS(t)
      , u = e.success || IS(t)
      , c = e.warning || kS(t);
    function f(g) {
        return uS(g, Fu.text.primary) >= n ? Fu.text.primary : Dh.text.primary
    }
    const p = ({color: g, name: P, mainShade: m=500, lightShade: h=300, darkShade: d=700})=>{
        if (g = w({}, g),
        !g.main && g[m] && (g.main = g[m]),
        !g.hasOwnProperty("main"))
            throw new Error(yr(11, P ? ` (${P})` : "", m));
        if (typeof g.main != "string")
            throw new Error(yr(12, P ? ` (${P})` : "", JSON.stringify(g.main)));
        return zh(g, "light", h, r),
        zh(g, "dark", d, r),
        g.contrastText || (g.contrastText = f(g.main)),
        g
    }
      , v = {
        dark: Fu,
        light: Dh
    };
    return qt(w({
        common: w({}, fs),
        mode: t,
        primary: p({
            color: i,
            name: "primary"
        }),
        secondary: p({
            color: s,
            name: "secondary",
            mainShade: "A400",
            lightShade: "A200",
            darkShade: "A700"
        }),
        error: p({
            color: a,
            name: "error"
        }),
        warning: p({
            color: c,
            name: "warning"
        }),
        info: p({
            color: l,
            name: "info"
        }),
        success: p({
            color: u,
            name: "success"
        }),
        grey: mS,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: p,
        tonalOffset: r
    }, v[t]), o)
}
const TS = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function NS(e) {
    return Math.round(e * 1e5) / 1e5
}
const $h = {
    textTransform: "uppercase"
}
  , Vh = '"Roboto", "Helvetica", "Arial", sans-serif';
function LS(e, t) {
    const n = typeof t == "function" ? t(e) : t
      , {fontFamily: r=Vh, fontSize: o=14, fontWeightLight: i=300, fontWeightRegular: s=400, fontWeightMedium: a=500, fontWeightBold: l=700, htmlFontSize: u=16, allVariants: c, pxToRem: f} = n
      , p = q(n, TS)
      , v = o / 14
      , x = f || (m=>`${m / u * v}rem`)
      , g = (m,h,d,y,A)=>w({
        fontFamily: r,
        fontWeight: m,
        fontSize: x(h),
        lineHeight: d
    }, r === Vh ? {
        letterSpacing: `${NS(y / h)}em`
    } : {}, A, c)
      , P = {
        h1: g(i, 96, 1.167, -1.5),
        h2: g(i, 60, 1.2, -.5),
        h3: g(s, 48, 1.167, 0),
        h4: g(s, 34, 1.235, .25),
        h5: g(s, 24, 1.334, 0),
        h6: g(a, 20, 1.6, .15),
        subtitle1: g(s, 16, 1.75, .15),
        subtitle2: g(a, 14, 1.57, .1),
        body1: g(s, 16, 1.5, .15),
        body2: g(s, 14, 1.43, .15),
        button: g(a, 14, 1.75, .4, $h),
        caption: g(s, 12, 1.66, .4),
        overline: g(s, 12, 2.66, 1, $h),
        inherit: {
            fontFamily: "inherit",
            fontWeight: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit"
        }
    };
    return qt(w({
        htmlFontSize: u,
        pxToRem: x,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l
    }, P), p, {
        clone: !1
    })
}
const OS = .2
  , MS = .14
  , BS = .12;
function Oe(...e) {
    return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${OS})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${MS})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${BS})`].join(",")
}
const FS = ["none", Oe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Oe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Oe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Oe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Oe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Oe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Oe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Oe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Oe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Oe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Oe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Oe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Oe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Oe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Oe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Oe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Oe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Oe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Oe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Oe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Oe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Oe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Oe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Oe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var _S = FS;
const DS = ["duration", "easing", "delay"]
  , zS = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}
  , Ay = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
};
function Uh(e) {
    return `${Math.round(e)}ms`
}
function $S(e) {
    if (!e)
        return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** .25 + t / 5) * 10)
}
function VS(e) {
    const t = w({}, zS, e.easing)
      , n = w({}, Ay, e.duration);
    return w({
        getAutoHeightDuration: $S,
        create: (o=["all"],i={})=>{
            const {duration: s=n.standard, easing: a=t.easeInOut, delay: l=0} = i;
            return q(i, DS),
            (Array.isArray(o) ? o : [o]).map(u=>`${u} ${typeof s == "string" ? s : Uh(s)} ${a} ${typeof l == "string" ? l : Uh(l)}`).join(",")
        }
    }, e, {
        easing: t,
        duration: n
    })
}
const US = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
};
var jS = US;
const HS = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function WS(e={}, ...t) {
    const {mixins: n={}, palette: r={}, transitions: o={}, typography: i={}} = e
      , s = q(e, HS);
    if (e.vars)
        throw new Error(yr(18));
    const a = RS(r)
      , l = Cp(e);
    let u = qt(l, {
        mixins: pS(l.breakpoints, n),
        palette: a,
        shadows: _S.slice(),
        typography: LS(a, i),
        transitions: VS(o),
        zIndex: w({}, jS)
    });
    return u = qt(u, s),
    u = t.reduce((c,f)=>qt(c, f), u),
    u.unstable_sxConfig = w({}, Gl, s == null ? void 0 : s.unstable_sxConfig),
    u.unstable_sx = function(f) {
        return xp({
            sx: f,
            theme: this
        })
    }
    ,
    u
}
const QS = WS();
var Xl = QS;
const Gn = e=>Vi(e) && e !== "classes"
  , GS = Vi
  , KS = oS({
    defaultTheme: Xl,
    rootShouldForwardProp: Gn
});
var Y = KS;
function be({props: e, name: t}) {
    return sS({
        props: e,
        name: t,
        defaultTheme: Xl
    })
}
function Qc(e, t) {
    return Qc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
        return r.__proto__ = o,
        r
    }
    ,
    Qc(e, t)
}
function by(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    Qc(e, t)
}
var jh = {
    disabled: !1
}
  , Xa = bn.createContext(null)
  , XS = function(t) {
    return t.scrollTop
}
  , Pi = "unmounted"
  , Rr = "exited"
  , Tr = "entering"
  , oo = "entered"
  , Gc = "exiting"
  , Kn = function(e) {
    by(t, e);
    function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var s = o, a = s && !s.isMounting ? r.enter : r.appear, l;
        return i.appearStatus = null,
        r.in ? a ? (l = Rr,
        i.appearStatus = Tr) : l = oo : r.unmountOnExit || r.mountOnEnter ? l = Pi : l = Rr,
        i.state = {
            status: l
        },
        i.nextCallback = null,
        i
    }
    t.getDerivedStateFromProps = function(o, i) {
        var s = o.in;
        return s && i.status === Pi ? {
            status: Rr
        } : null
    }
    ;
    var n = t.prototype;
    return n.componentDidMount = function() {
        this.updateStatus(!0, this.appearStatus)
    }
    ,
    n.componentDidUpdate = function(o) {
        var i = null;
        if (o !== this.props) {
            var s = this.state.status;
            this.props.in ? s !== Tr && s !== oo && (i = Tr) : (s === Tr || s === oo) && (i = Gc)
        }
        this.updateStatus(!1, i)
    }
    ,
    n.componentWillUnmount = function() {
        this.cancelNextCallback()
    }
    ,
    n.getTimeouts = function() {
        var o = this.props.timeout, i, s, a;
        return i = s = a = o,
        o != null && typeof o != "number" && (i = o.exit,
        s = o.enter,
        a = o.appear !== void 0 ? o.appear : s),
        {
            exit: i,
            enter: s,
            appear: a
        }
    }
    ,
    n.updateStatus = function(o, i) {
        if (o === void 0 && (o = !1),
        i !== null)
            if (this.cancelNextCallback(),
            i === Tr) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var s = this.props.nodeRef ? this.props.nodeRef.current : Qs.findDOMNode(this);
                    s && XS(s)
                }
                this.performEnter(o)
            } else
                this.performExit();
        else
            this.props.unmountOnExit && this.state.status === Rr && this.setState({
                status: Pi
            })
    }
    ,
    n.performEnter = function(o) {
        var i = this
          , s = this.props.enter
          , a = this.context ? this.context.isMounting : o
          , l = this.props.nodeRef ? [a] : [Qs.findDOMNode(this), a]
          , u = l[0]
          , c = l[1]
          , f = this.getTimeouts()
          , p = a ? f.appear : f.enter;
        if (!o && !s || jh.disabled) {
            this.safeSetState({
                status: oo
            }, function() {
                i.props.onEntered(u)
            });
            return
        }
        this.props.onEnter(u, c),
        this.safeSetState({
            status: Tr
        }, function() {
            i.props.onEntering(u, c),
            i.onTransitionEnd(p, function() {
                i.safeSetState({
                    status: oo
                }, function() {
                    i.props.onEntered(u, c)
                })
            })
        })
    }
    ,
    n.performExit = function() {
        var o = this
          , i = this.props.exit
          , s = this.getTimeouts()
          , a = this.props.nodeRef ? void 0 : Qs.findDOMNode(this);
        if (!i || jh.disabled) {
            this.safeSetState({
                status: Rr
            }, function() {
                o.props.onExited(a)
            });
            return
        }
        this.props.onExit(a),
        this.safeSetState({
            status: Gc
        }, function() {
            o.props.onExiting(a),
            o.onTransitionEnd(s.exit, function() {
                o.safeSetState({
                    status: Rr
                }, function() {
                    o.props.onExited(a)
                })
            })
        })
    }
    ,
    n.cancelNextCallback = function() {
        this.nextCallback !== null && (this.nextCallback.cancel(),
        this.nextCallback = null)
    }
    ,
    n.safeSetState = function(o, i) {
        i = this.setNextCallback(i),
        this.setState(o, i)
    }
    ,
    n.setNextCallback = function(o) {
        var i = this
          , s = !0;
        return this.nextCallback = function(a) {
            s && (s = !1,
            i.nextCallback = null,
            o(a))
        }
        ,
        this.nextCallback.cancel = function() {
            s = !1
        }
        ,
        this.nextCallback
    }
    ,
    n.onTransitionEnd = function(o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef ? this.props.nodeRef.current : Qs.findDOMNode(this)
          , a = o == null && !this.props.addEndListener;
        if (!s || a) {
            setTimeout(this.nextCallback, 0);
            return
        }
        if (this.props.addEndListener) {
            var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback]
              , u = l[0]
              , c = l[1];
            this.props.addEndListener(u, c)
        }
        o != null && setTimeout(this.nextCallback, o)
    }
    ,
    n.render = function() {
        var o = this.state.status;
        if (o === Pi)
            return null;
        var i = this.props
          , s = i.children;
        i.in,
        i.mountOnEnter,
        i.unmountOnExit,
        i.appear,
        i.enter,
        i.exit,
        i.timeout,
        i.addEndListener,
        i.onEnter,
        i.onEntering,
        i.onEntered,
        i.onExit,
        i.onExiting,
        i.onExited,
        i.nodeRef;
        var a = q(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return bn.createElement(Xa.Provider, {
            value: null
        }, typeof s == "function" ? s(o, a) : bn.cloneElement(bn.Children.only(s), a))
    }
    ,
    t
}(bn.Component);
Kn.contextType = Xa;
Kn.propTypes = {};
function ro() {}
Kn.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: ro,
    onEntering: ro,
    onEntered: ro,
    onExit: ro,
    onExiting: ro,
    onExited: ro
};
Kn.UNMOUNTED = Pi;
Kn.EXITED = Rr;
Kn.ENTERING = Tr;
Kn.ENTERED = oo;
Kn.EXITING = Gc;
var Ap = Kn;
function YS(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function bp(e, t) {
    var n = function(i) {
        return t && C.exports.isValidElement(i) ? t(i) : i
    }
      , r = Object.create(null);
    return e && C.exports.Children.map(e, function(o) {
        return o
    }).forEach(function(o) {
        r[o.key] = n(o)
    }),
    r
}
function qS(e, t) {
    e = e || {},
    t = t || {};
    function n(c) {
        return c in t ? t[c] : e[c]
    }
    var r = Object.create(null)
      , o = [];
    for (var i in e)
        i in t ? o.length && (r[i] = o,
        o = []) : o.push(i);
    var s, a = {};
    for (var l in t) {
        if (r[l])
            for (s = 0; s < r[l].length; s++) {
                var u = r[l][s];
                a[r[l][s]] = n(u)
            }
        a[l] = n(l)
    }
    for (s = 0; s < o.length; s++)
        a[o[s]] = n(o[s]);
    return a
}
function Fr(e, t, n) {
    return n[t] != null ? n[t] : e.props[t]
}
function JS(e, t) {
    return bp(e.children, function(n) {
        return C.exports.cloneElement(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: Fr(n, "appear", e),
            enter: Fr(n, "enter", e),
            exit: Fr(n, "exit", e)
        })
    })
}
function ZS(e, t, n) {
    var r = bp(e.children)
      , o = qS(t, r);
    return Object.keys(o).forEach(function(i) {
        var s = o[i];
        if (!!C.exports.isValidElement(s)) {
            var a = i in t
              , l = i in r
              , u = t[i]
              , c = C.exports.isValidElement(u) && !u.props.in;
            l && (!a || c) ? o[i] = C.exports.cloneElement(s, {
                onExited: n.bind(null, s),
                in: !0,
                exit: Fr(s, "exit", e),
                enter: Fr(s, "enter", e)
            }) : !l && a && !c ? o[i] = C.exports.cloneElement(s, {
                in: !1
            }) : l && a && C.exports.isValidElement(u) && (o[i] = C.exports.cloneElement(s, {
                onExited: n.bind(null, s),
                in: u.props.in,
                exit: Fr(s, "exit", e),
                enter: Fr(s, "enter", e)
            }))
        }
    }),
    o
}
var eE = Object.values || function(e) {
    return Object.keys(e).map(function(t) {
        return e[t]
    })
}
  , tE = {
    component: "div",
    childFactory: function(t) {
        return t
    }
}
  , Sp = function(e) {
    by(t, e);
    function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var s = i.handleExited.bind(YS(i));
        return i.state = {
            contextValue: {
                isMounting: !0
            },
            handleExited: s,
            firstRender: !0
        },
        i
    }
    var n = t.prototype;
    return n.componentDidMount = function() {
        this.mounted = !0,
        this.setState({
            contextValue: {
                isMounting: !1
            }
        })
    }
    ,
    n.componentWillUnmount = function() {
        this.mounted = !1
    }
    ,
    t.getDerivedStateFromProps = function(o, i) {
        var s = i.children
          , a = i.handleExited
          , l = i.firstRender;
        return {
            children: l ? JS(o, a) : ZS(o, s, a),
            firstRender: !1
        }
    }
    ,
    n.handleExited = function(o, i) {
        var s = bp(this.props.children);
        o.key in s || (o.props.onExited && o.props.onExited(i),
        this.mounted && this.setState(function(a) {
            var l = w({}, a.children);
            return delete l[o.key],
            {
                children: l
            }
        }))
    }
    ,
    n.render = function() {
        var o = this.props
          , i = o.component
          , s = o.childFactory
          , a = q(o, ["component", "childFactory"])
          , l = this.state.contextValue
          , u = eE(this.state.children).map(s);
        return delete a.appear,
        delete a.enter,
        delete a.exit,
        i === null ? bn.createElement(Xa.Provider, {
            value: l
        }, u) : bn.createElement(Xa.Provider, {
            value: l
        }, bn.createElement(i, a, u))
    }
    ,
    t
}(bn.Component);
Sp.propTypes = {};
Sp.defaultProps = tE;
var nE = Sp;
function rE(e) {
    const {className: t, classes: n, pulsate: r=!1, rippleX: o, rippleY: i, rippleSize: s, in: a, onExited: l, timeout: u} = e
      , [c,f] = C.exports.useState(!1)
      , p = ee(t, n.ripple, n.rippleVisible, r && n.ripplePulsate)
      , v = {
        width: s,
        height: s,
        top: -(s / 2) + i,
        left: -(s / 2) + o
    }
      , x = ee(n.child, c && n.childLeaving, r && n.childPulsate);
    return !a && !c && f(!0),
    C.exports.useEffect(()=>{
        if (!a && l != null) {
            const g = setTimeout(l, u);
            return ()=>{
                clearTimeout(g)
            }
        }
    }
    , [l, a, u]),
    b("span", {
        className: p,
        style: v,
        children: b("span", {
            className: x
        })
    })
}
const oE = ye("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
var Qt = oE;
const iE = ["center", "classes", "className"];
let Yl = e=>e, Hh, Wh, Qh, Gh;
const Kc = 550
  , sE = 80
  , aE = hp(Hh || (Hh = Yl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`))
  , lE = hp(Wh || (Wh = Yl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`))
  , uE = hp(Qh || (Qh = Yl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`))
  , cE = Y("span", {
    name: "MuiTouchRipple",
    slot: "Root"
})({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
})
  , dE = Y(rE, {
    name: "MuiTouchRipple",
    slot: "Ripple"
})(Gh || (Gh = Yl`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Qt.rippleVisible, aE, Kc, ({theme: e})=>e.transitions.easing.easeInOut, Qt.ripplePulsate, ({theme: e})=>e.transitions.duration.shorter, Qt.child, Qt.childLeaving, lE, Kc, ({theme: e})=>e.transitions.easing.easeInOut, Qt.childPulsate, uE, ({theme: e})=>e.transitions.easing.easeInOut)
  , pE = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiTouchRipple"
    })
      , {center: o=!1, classes: i={}, className: s} = r
      , a = q(r, iE)
      , [l,u] = C.exports.useState([])
      , c = C.exports.useRef(0)
      , f = C.exports.useRef(null);
    C.exports.useEffect(()=>{
        f.current && (f.current(),
        f.current = null)
    }
    , [l]);
    const p = C.exports.useRef(!1)
      , v = C.exports.useRef(null)
      , x = C.exports.useRef(null)
      , g = C.exports.useRef(null);
    C.exports.useEffect(()=>()=>{
        clearTimeout(v.current)
    }
    , []);
    const P = C.exports.useCallback(y=>{
        const {pulsate: A, rippleX: E, rippleY: S, rippleSize: I, cb: R} = y;
        u(k=>[...k, b(dE, {
            classes: {
                ripple: ee(i.ripple, Qt.ripple),
                rippleVisible: ee(i.rippleVisible, Qt.rippleVisible),
                ripplePulsate: ee(i.ripplePulsate, Qt.ripplePulsate),
                child: ee(i.child, Qt.child),
                childLeaving: ee(i.childLeaving, Qt.childLeaving),
                childPulsate: ee(i.childPulsate, Qt.childPulsate)
            },
            timeout: Kc,
            pulsate: A,
            rippleX: E,
            rippleY: S,
            rippleSize: I
        }, c.current)]),
        c.current += 1,
        f.current = R
    }
    , [i])
      , m = C.exports.useCallback((y={},A={},E=()=>{}
    )=>{
        const {pulsate: S=!1, center: I=o || A.pulsate, fakeElement: R=!1} = A;
        if ((y == null ? void 0 : y.type) === "mousedown" && p.current) {
            p.current = !1;
            return
        }
        (y == null ? void 0 : y.type) === "touchstart" && (p.current = !0);
        const k = R ? null : g.current
          , O = k ? k.getBoundingClientRect() : {
            width: 0,
            height: 0,
            left: 0,
            top: 0
        };
        let W, U, D;
        if (I || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches)
            W = Math.round(O.width / 2),
            U = Math.round(O.height / 2);
        else {
            const {clientX: F, clientY: V} = y.touches && y.touches.length > 0 ? y.touches[0] : y;
            W = Math.round(F - O.left),
            U = Math.round(V - O.top)
        }
        if (I)
            D = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3),
            D % 2 === 0 && (D += 1);
        else {
            const F = Math.max(Math.abs((k ? k.clientWidth : 0) - W), W) * 2 + 2
              , V = Math.max(Math.abs((k ? k.clientHeight : 0) - U), U) * 2 + 2;
            D = Math.sqrt(F ** 2 + V ** 2)
        }
        y != null && y.touches ? x.current === null && (x.current = ()=>{
            P({
                pulsate: S,
                rippleX: W,
                rippleY: U,
                rippleSize: D,
                cb: E
            })
        }
        ,
        v.current = setTimeout(()=>{
            x.current && (x.current(),
            x.current = null)
        }
        , sE)) : P({
            pulsate: S,
            rippleX: W,
            rippleY: U,
            rippleSize: D,
            cb: E
        })
    }
    , [o, P])
      , h = C.exports.useCallback(()=>{
        m({}, {
            pulsate: !0
        })
    }
    , [m])
      , d = C.exports.useCallback((y,A)=>{
        if (clearTimeout(v.current),
        (y == null ? void 0 : y.type) === "touchend" && x.current) {
            x.current(),
            x.current = null,
            v.current = setTimeout(()=>{
                d(y, A)
            }
            );
            return
        }
        x.current = null,
        u(E=>E.length > 0 ? E.slice(1) : E),
        f.current = A
    }
    , []);
    return C.exports.useImperativeHandle(n, ()=>({
        pulsate: h,
        start: m,
        stop: d
    }), [h, m, d]),
    b(cE, w({
        className: ee(Qt.root, i.root, s),
        ref: g
    }, a, {
        children: b(nE, {
            component: null,
            exit: !0,
            children: l
        })
    }))
});
var fE = pE;
function hE(e) {
    return ve("MuiButtonBase", e)
}
const mE = ye("MuiButtonBase", ["root", "disabled", "focusVisible"]);
var gE = mE;
const vE = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"]
  , yE = e=>{
    const {disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o} = e
      , s = we({
        root: ["root", t && "disabled", n && "focusVisible"]
    }, hE, o);
    return n && r && (s.root += ` ${r}`),
    s
}
  , xE = Y("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e,t)=>t.root
})({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
        borderStyle: "none"
    },
    [`&.${gE.disabled}`]: {
        pointerEvents: "none",
        cursor: "default"
    },
    "@media print": {
        colorAdjust: "exact"
    }
})
  , CE = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiButtonBase"
    })
      , {action: o, centerRipple: i=!1, children: s, className: a, component: l="button", disabled: u=!1, disableRipple: c=!1, disableTouchRipple: f=!1, focusRipple: p=!1, LinkComponent: v="a", onBlur: x, onClick: g, onContextMenu: P, onDragLeave: m, onFocus: h, onFocusVisible: d, onKeyDown: y, onKeyUp: A, onMouseDown: E, onMouseLeave: S, onMouseUp: I, onTouchEnd: R, onTouchMove: k, onTouchStart: O, tabIndex: W=0, TouchRippleProps: U, touchRippleRef: D, type: F} = r
      , V = q(r, vE)
      , K = C.exports.useRef(null)
      , N = C.exports.useRef(null)
      , $ = Je(N, D)
      , {isFocusVisibleRef: B, onFocus: Q, onBlur: X, ref: ce} = Jd()
      , [J,te] = C.exports.useState(!1);
    u && J && te(!1),
    C.exports.useImperativeHandle(o, ()=>({
        focusVisible: ()=>{
            te(!0),
            K.current.focus()
        }
    }), []);
    const [H,oe] = C.exports.useState(!1);
    C.exports.useEffect(()=>{
        oe(!0)
    }
    , []);
    const ie = H && !c && !u;
    C.exports.useEffect(()=>{
        J && p && !c && H && N.current.pulsate()
    }
    , [c, p, J, H]);
    function re(M, ue, Ie=f) {
        return ir(ut=>(ue && ue(ut),
        !Ie && N.current && N.current[M](ut),
        !0))
    }
    const Pe = re("start", E)
      , Z = re("stop", P)
      , Te = re("stop", m)
      , nt = re("stop", I)
      , bt = re("stop", M=>{
        J && M.preventDefault(),
        S && S(M)
    }
    )
      , Ke = re("start", O)
      , Wt = re("stop", R)
      , he = re("stop", k)
      , gn = re("stop", M=>{
        X(M),
        B.current === !1 && te(!1),
        x && x(M)
    }
    , !1)
      , at = ir(M=>{
        K.current || (K.current = M.currentTarget),
        Q(M),
        B.current === !0 && (te(!0),
        d && d(M)),
        h && h(M)
    }
    )
      , We = ()=>{
        const M = K.current;
        return l && l !== "button" && !(M.tagName === "A" && M.href)
    }
      , Se = C.exports.useRef(!1)
      , gt = ir(M=>{
        p && !Se.current && J && N.current && M.key === " " && (Se.current = !0,
        N.current.stop(M, ()=>{
            N.current.start(M)
        }
        )),
        M.target === M.currentTarget && We() && M.key === " " && M.preventDefault(),
        y && y(M),
        M.target === M.currentTarget && We() && M.key === "Enter" && !u && (M.preventDefault(),
        g && g(M))
    }
    )
      , lt = ir(M=>{
        p && M.key === " " && N.current && J && !M.defaultPrevented && (Se.current = !1,
        N.current.stop(M, ()=>{
            N.current.pulsate(M)
        }
        )),
        A && A(M),
        g && M.target === M.currentTarget && We() && M.key === " " && !M.defaultPrevented && g(M)
    }
    );
    let Xe = l;
    Xe === "button" && (V.href || V.to) && (Xe = v);
    const _e = {};
    Xe === "button" ? (_e.type = F === void 0 ? "button" : F,
    _e.disabled = u) : (!V.href && !V.to && (_e.role = "button"),
    u && (_e["aria-disabled"] = u));
    const St = Je(n, ce, K)
      , vt = w({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: f,
        focusRipple: p,
        tabIndex: W,
        focusVisible: J
    })
      , de = yE(vt);
    return j(xE, w({
        as: Xe,
        className: ee(de.root, a),
        ownerState: vt,
        onBlur: gn,
        onClick: g,
        onContextMenu: Z,
        onFocus: at,
        onKeyDown: gt,
        onKeyUp: lt,
        onMouseDown: Pe,
        onMouseLeave: bt,
        onMouseUp: nt,
        onDragLeave: Te,
        onTouchEnd: Wt,
        onTouchMove: he,
        onTouchStart: Ke,
        ref: St,
        tabIndex: u ? -1 : W,
        type: F
    }, _e, V, {
        children: [s, ie ? b(fE, w({
            ref: $,
            center: i
        }, U)) : null]
    }))
});
var Ep = CE;
function wE(e) {
    return ve("MuiIconButton", e)
}
const AE = ye("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]);
var bE = AE;
const SE = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"]
  , EE = e=>{
    const {classes: t, disabled: n, color: r, edge: o, size: i} = e
      , s = {
        root: ["root", n && "disabled", r !== "default" && `color${ne(r)}`, o && `edge${ne(o)}`, `size${ne(i)}`]
    };
    return we(s, wE, t)
}
  , PE = Y(Ep, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.root, n.color !== "default" && t[`color${ne(n.color)}`], n.edge && t[`edge${ne(n.edge)}`], t[`size${ne(n.size)}`]]
    }
})(({theme: e, ownerState: t})=>w({
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: e.typography.pxToRem(24),
    padding: 8,
    borderRadius: "50%",
    overflow: "visible",
    color: (e.vars || e).palette.action.active,
    transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest
    })
}, !t.disableRipple && {
    "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Sn(e.palette.action.active, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
            backgroundColor: "transparent"
        }
    }
}, t.edge === "start" && {
    marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
    marginRight: t.size === "small" ? -3 : -12
}), ({theme: e, ownerState: t})=>{
    var n;
    const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
    return w({}, t.color === "inherit" && {
        color: "inherit"
    }, t.color !== "inherit" && t.color !== "default" && w({
        color: r == null ? void 0 : r.main
    }, !t.disableRipple && {
        "&:hover": w({}, r && {
            backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Sn(r.main, e.palette.action.hoverOpacity)
        }, {
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        })
    }), t.size === "small" && {
        padding: 5,
        fontSize: e.typography.pxToRem(18)
    }, t.size === "large" && {
        padding: 12,
        fontSize: e.typography.pxToRem(28)
    }, {
        [`&.${bE.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled
        }
    })
}
)
  , IE = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiIconButton"
    })
      , {edge: o=!1, children: i, className: s, color: a="default", disabled: l=!1, disableFocusRipple: u=!1, size: c="medium"} = r
      , f = q(r, SE)
      , p = w({}, r, {
        edge: o,
        color: a,
        disabled: l,
        disableFocusRipple: u,
        size: c
    })
      , v = EE(p);
    return b(PE, w({
        className: ee(v.root, s),
        centerRipple: !0,
        focusRipple: !u,
        disabled: l,
        ref: n,
        ownerState: p
    }, f, {
        children: i
    }))
});
var dn = IE
  , Pp = {}
  , Xo = {
    exports: {}
};
(function(e) {
    function t(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    e.exports = t,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
)(Xo);
var Yo = {};
function kE(e) {
    return ve("MuiSvgIcon", e)
}
ye("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const RE = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"]
  , TE = e=>{
    const {color: t, fontSize: n, classes: r} = e
      , o = {
        root: ["root", t !== "inherit" && `color${ne(t)}`, `fontSize${ne(n)}`]
    };
    return we(o, kE, r)
}
  , NE = Y("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.root, n.color !== "inherit" && t[`color${ne(n.color)}`], t[`fontSize${ne(n.fontSize)}`]]
    }
})(({theme: e, ownerState: t})=>{
    var n, r, o, i, s, a, l, u, c, f, p, v, x, g, P, m, h;
    return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fill: "currentColor",
        flexShrink: 0,
        transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
            duration: (o = e.transitions) == null || (i = o.duration) == null ? void 0 : i.shorter
        }),
        fontSize: {
            inherit: "inherit",
            small: ((s = e.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem",
            medium: ((l = e.typography) == null || (u = l.pxToRem) == null ? void 0 : u.call(l, 24)) || "1.5rem",
            large: ((c = e.typography) == null || (f = c.pxToRem) == null ? void 0 : f.call(c, 35)) || "2.1875rem"
        }[t.fontSize],
        color: (p = (v = (e.vars || e).palette) == null || (x = v[t.color]) == null ? void 0 : x.main) != null ? p : {
            action: (g = (e.vars || e).palette) == null || (P = g.action) == null ? void 0 : P.active,
            disabled: (m = (e.vars || e).palette) == null || (h = m.action) == null ? void 0 : h.disabled,
            inherit: void 0
        }[t.color]
    }
}
)
  , Sy = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiSvgIcon"
    })
      , {children: o, className: i, color: s="inherit", component: a="svg", fontSize: l="medium", htmlColor: u, inheritViewBox: c=!1, titleAccess: f, viewBox: p="0 0 24 24"} = r
      , v = q(r, RE)
      , x = w({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: p
    })
      , g = {};
    c || (g.viewBox = p);
    const P = TE(x);
    return j(NE, w({
        as: a,
        className: ee(P.root, i),
        focusable: "false",
        color: u,
        "aria-hidden": f ? void 0 : !0,
        role: f ? "img" : void 0,
        ref: n
    }, g, v, {
        ownerState: x,
        children: [o, f ? b("title", {
            children: f
        }) : null]
    }))
});
Sy.muiName = "SvgIcon";
var Kh = Sy;
function Ey(e, t) {
    function n(r, o) {
        return b(Kh, w({
            "data-testid": `${t}Icon`,
            ref: o
        }, r, {
            children: e
        }))
    }
    return n.muiName = Kh.muiName,
    C.exports.memo(C.exports.forwardRef(n))
}
const LE = {
    configure: e=>{
        _v.configure(e)
    }
};
var OE = Object.freeze(Object.defineProperty({
    __proto__: null,
    unstable_ClassNameGenerator: LE,
    capitalize: ne,
    createChainedFunction: Fc,
    createSvgIcon: Ey,
    debounce: Yd,
    deprecatedPropType: Tx,
    isMuiElement: ha,
    ownerDocument: ht,
    ownerWindow: xr,
    requirePropFactory: Nx,
    setRef: Ha,
    unstable_useEnhancedEffect: Hn,
    unstable_useId: qd,
    unsupportedProp: Mx,
    useControlled: as,
    useEventCallback: ir,
    useForkRef: Je,
    useIsFocusVisible: Jd
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ME = bm(OE);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.createSvgIcon
        }
    });
    var t = ME
}
)(Yo);
var Ps = bm(Yx)
  , BE = Xo.exports;
Object.defineProperty(Pp, "__esModule", {
    value: !0
});
var Xc = Pp.default = void 0
  , FE = BE(Yo)
  , _E = Ps
  , DE = (0,
FE.default)((0,
_E.jsx)("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
Xc = Pp.default = DE;
var Ip = {}
  , zE = Xo.exports;
Object.defineProperty(Ip, "__esModule", {
    value: !0
});
var Py = Ip.default = void 0
  , $E = zE(Yo)
  , VE = Ps
  , UE = (0,
$E.default)((0,
VE.jsx)("path", {
    d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), "ChevronLeft");
Py = Ip.default = UE;
var kp = {}
  , jE = Xo.exports;
Object.defineProperty(kp, "__esModule", {
    value: !0
});
var Iy = kp.default = void 0
  , HE = jE(Yo)
  , WE = Ps
  , QE = (0,
HE.default)((0,
WE.jsx)("path", {
    d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "ChevronRight");
Iy = kp.default = QE;
var Rp = {}
  , GE = Xo.exports;
Object.defineProperty(Rp, "__esModule", {
    value: !0
});
var ky = Rp.default = void 0
  , KE = GE(Yo)
  , XE = Ps
  , YE = (0,
KE.default)((0,
XE.jsx)("path", {
    d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), "InfoOutlined");
ky = Rp.default = YE;
function qo() {
    return Cy(Xl)
}
const qE = e=>{
    let t;
    return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2,
    (t / 100).toFixed(2)
}
;
var Xh = qE;
const JE = ["components", "componentsProps", "slots", "slotProps"]
  , ZE = Y(Pw, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e,t)=>t.root
})({})
  , eP = C.exports.forwardRef(function(t, n) {
    var r;
    const o = xy()
      , i = be({
        props: t,
        name: "MuiPopper"
    })
      , {components: s, componentsProps: a, slots: l, slotProps: u} = i
      , c = q(i, JE)
      , f = (r = l == null ? void 0 : l.root) != null ? r : s == null ? void 0 : s.Root;
    return b(ZE, w({
        direction: o == null ? void 0 : o.direction,
        slots: {
            root: f
        },
        slotProps: u != null ? u : a
    }, c, {
        ref: n
    }))
});
var Tp = eP;
var tP = "/assets/iab_logo.e99eb7a1.png";
const Ry = e=>e.scrollTop;
function jo(e, t) {
    var n, r;
    const {timeout: o, easing: i, style: s={}} = e;
    return {
        duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
        easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
        delay: s.transitionDelay
    }
}
const nP = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Yc(e) {
    return `scale(${e}, ${e ** 2})`
}
const rP = {
    entering: {
        opacity: 1,
        transform: Yc(1)
    },
    entered: {
        opacity: 1,
        transform: "none"
    }
}
  , _u = typeof navigator != "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent)
  , Ty = C.exports.forwardRef(function(t, n) {
    const {addEndListener: r, appear: o=!0, children: i, easing: s, in: a, onEnter: l, onEntered: u, onEntering: c, onExit: f, onExited: p, onExiting: v, style: x, timeout: g="auto", TransitionComponent: P=Ap} = t
      , m = q(t, nP)
      , h = C.exports.useRef()
      , d = C.exports.useRef()
      , y = qo()
      , A = C.exports.useRef(null)
      , E = Je(A, i.ref, n)
      , S = F=>V=>{
        if (F) {
            const K = A.current;
            V === void 0 ? F(K) : F(K, V)
        }
    }
      , I = S(c)
      , R = S((F,V)=>{
        Ry(F);
        const {duration: K, delay: N, easing: $} = jo({
            style: x,
            timeout: g,
            easing: s
        }, {
            mode: "enter"
        });
        let B;
        g === "auto" ? (B = y.transitions.getAutoHeightDuration(F.clientHeight),
        d.current = B) : B = K,
        F.style.transition = [y.transitions.create("opacity", {
            duration: B,
            delay: N
        }), y.transitions.create("transform", {
            duration: _u ? B : B * .666,
            delay: N,
            easing: $
        })].join(","),
        l && l(F, V)
    }
    )
      , k = S(u)
      , O = S(v)
      , W = S(F=>{
        const {duration: V, delay: K, easing: N} = jo({
            style: x,
            timeout: g,
            easing: s
        }, {
            mode: "exit"
        });
        let $;
        g === "auto" ? ($ = y.transitions.getAutoHeightDuration(F.clientHeight),
        d.current = $) : $ = V,
        F.style.transition = [y.transitions.create("opacity", {
            duration: $,
            delay: K
        }), y.transitions.create("transform", {
            duration: _u ? $ : $ * .666,
            delay: _u ? K : K || $ * .333,
            easing: N
        })].join(","),
        F.style.opacity = 0,
        F.style.transform = Yc(.75),
        f && f(F)
    }
    )
      , U = S(p)
      , D = F=>{
        g === "auto" && (h.current = setTimeout(F, d.current || 0)),
        r && r(A.current, F)
    }
    ;
    return C.exports.useEffect(()=>()=>{
        clearTimeout(h.current)
    }
    , []),
    b(P, w({
        appear: o,
        in: a,
        nodeRef: A,
        onEnter: R,
        onEntered: k,
        onEntering: I,
        onExit: W,
        onExited: U,
        onExiting: O,
        addEndListener: D,
        timeout: g === "auto" ? null : g
    }, m, {
        children: (F,V)=>C.exports.cloneElement(i, w({
            style: w({
                opacity: 0,
                transform: Yc(.75),
                visibility: F === "exited" && !a ? "hidden" : void 0
            }, rP[F], x, i.props.style),
            ref: E
        }, V))
    }))
});
Ty.muiSupportAuto = !0;
var qc = Ty;
function oP(e) {
    return ve("MuiTooltip", e)
}
const iP = ye("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
var sr = iP;
const sP = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function aP(e) {
    return Math.round(e * 1e5) / 1e5
}
const lP = e=>{
    const {classes: t, disableInteractive: n, arrow: r, touch: o, placement: i} = e
      , s = {
        popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
        tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${ne(i.split("-")[0])}`],
        arrow: ["arrow"]
    };
    return we(s, oP, t)
}
  , uP = Y(Tp, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose]
    }
})(({theme: e, ownerState: t, open: n})=>w({
    zIndex: (e.vars || e).zIndex.tooltip,
    pointerEvents: "none"
}, !t.disableInteractive && {
    pointerEvents: "auto"
}, !n && {
    pointerEvents: "none"
}, t.arrow && {
    [`&[data-popper-placement*="bottom"] .${sr.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
            transformOrigin: "0 100%"
        }
    },
    [`&[data-popper-placement*="top"] .${sr.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
            transformOrigin: "100% 0"
        }
    },
    [`&[data-popper-placement*="right"] .${sr.arrow}`]: w({}, t.isRtl ? {
        right: 0,
        marginRight: "-0.71em"
    } : {
        left: 0,
        marginLeft: "-0.71em"
    }, {
        height: "1em",
        width: "0.71em",
        "&::before": {
            transformOrigin: "100% 100%"
        }
    }),
    [`&[data-popper-placement*="left"] .${sr.arrow}`]: w({}, t.isRtl ? {
        left: 0,
        marginLeft: "-0.71em"
    } : {
        right: 0,
        marginRight: "-0.71em"
    }, {
        height: "1em",
        width: "0.71em",
        "&::before": {
            transformOrigin: "0 0"
        }
    })
}))
  , cP = Y("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ne(n.placement.split("-")[0])}`]]
    }
})(({theme: e, ownerState: t})=>w({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Sn(e.palette.grey[700], .92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium
}, t.arrow && {
    position: "relative",
    margin: 0
}, t.touch && {
    padding: "8px 16px",
    fontSize: e.typography.pxToRem(14),
    lineHeight: `${aP(16 / 14)}em`,
    fontWeight: e.typography.fontWeightRegular
}, {
    [`.${sr.popper}[data-popper-placement*="left"] &`]: w({
        transformOrigin: "right center"
    }, t.isRtl ? w({
        marginLeft: "14px"
    }, t.touch && {
        marginLeft: "24px"
    }) : w({
        marginRight: "14px"
    }, t.touch && {
        marginRight: "24px"
    })),
    [`.${sr.popper}[data-popper-placement*="right"] &`]: w({
        transformOrigin: "left center"
    }, t.isRtl ? w({
        marginRight: "14px"
    }, t.touch && {
        marginRight: "24px"
    }) : w({
        marginLeft: "14px"
    }, t.touch && {
        marginLeft: "24px"
    })),
    [`.${sr.popper}[data-popper-placement*="top"] &`]: w({
        transformOrigin: "center bottom",
        marginBottom: "14px"
    }, t.touch && {
        marginBottom: "24px"
    }),
    [`.${sr.popper}[data-popper-placement*="bottom"] &`]: w({
        transformOrigin: "center top",
        marginTop: "14px"
    }, t.touch && {
        marginTop: "24px"
    })
}))
  , dP = Y("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e,t)=>t.arrow
})(({theme: e})=>({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : Sn(e.palette.grey[700], .9),
    "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        transform: "rotate(45deg)"
    }
}));
let Ys = !1
  , Du = null
  , gi = {
    x: 0,
    y: 0
};
function qs(e, t) {
    return n=>{
        t && t(n),
        e(n)
    }
}
const pP = C.exports.forwardRef(function(t, n) {
    var r, o, i, s, a, l, u, c, f, p, v, x, g, P, m, h, d, y, A;
    const E = be({
        props: t,
        name: "MuiTooltip"
    })
      , {arrow: S=!1, children: I, components: R={}, componentsProps: k={}, describeChild: O=!1, disableFocusListener: W=!1, disableHoverListener: U=!1, disableInteractive: D=!1, disableTouchListener: F=!1, enterDelay: V=100, enterNextDelay: K=0, enterTouchDelay: N=700, followCursor: $=!1, id: B, leaveDelay: Q=0, leaveTouchDelay: X=1500, onClose: ce, onOpen: J, open: te, placement: H="bottom", PopperComponent: oe, PopperProps: ie={}, slotProps: re={}, slots: Pe={}, title: Z, TransitionComponent: Te=qc, TransitionProps: nt} = E
      , bt = q(E, sP)
      , Ke = qo()
      , Wt = Ke.direction === "rtl"
      , [he,gn] = C.exports.useState()
      , [at,We] = C.exports.useState(null)
      , Se = C.exports.useRef(!1)
      , gt = D || $
      , lt = C.exports.useRef()
      , Xe = C.exports.useRef()
      , _e = C.exports.useRef()
      , St = C.exports.useRef()
      , [vt,de] = as({
        controlled: te,
        default: !1,
        name: "Tooltip",
        state: "open"
    });
    let M = vt;
    const ue = qd(B)
      , Ie = C.exports.useRef()
      , ut = C.exports.useCallback(()=>{
        Ie.current !== void 0 && (document.body.style.WebkitUserSelect = Ie.current,
        Ie.current = void 0),
        clearTimeout(St.current)
    }
    , []);
    C.exports.useEffect(()=>()=>{
        clearTimeout(lt.current),
        clearTimeout(Xe.current),
        clearTimeout(_e.current),
        ut()
    }
    , [ut]);
    const Yr = ae=>{
        clearTimeout(Du),
        Ys = !0,
        de(!0),
        J && !M && J(ae)
    }
      , ks = ir(ae=>{
        clearTimeout(Du),
        Du = setTimeout(()=>{
            Ys = !1
        }
        , 800 + Q),
        de(!1),
        ce && M && ce(ae),
        clearTimeout(lt.current),
        lt.current = setTimeout(()=>{
            Se.current = !1
        }
        , Ke.transitions.duration.shortest)
    }
    )
      , tu = ae=>{
        Se.current && ae.type !== "touchstart" || (he && he.removeAttribute("title"),
        clearTimeout(Xe.current),
        clearTimeout(_e.current),
        V || Ys && K ? Xe.current = setTimeout(()=>{
            Yr(ae)
        }
        , Ys ? K : V) : Yr(ae))
    }
      , zp = ae=>{
        clearTimeout(Xe.current),
        clearTimeout(_e.current),
        _e.current = setTimeout(()=>{
            ks(ae)
        }
        , Q)
    }
      , {isFocusVisibleRef: $p, onBlur: Xy, onFocus: Yy, ref: qy} = Jd()
      , [,Vp] = C.exports.useState(!1)
      , Up = ae=>{
        Xy(ae),
        $p.current === !1 && (Vp(!1),
        zp(ae))
    }
      , jp = ae=>{
        he || gn(ae.currentTarget),
        Yy(ae),
        $p.current === !0 && (Vp(!0),
        tu(ae))
    }
      , Hp = ae=>{
        Se.current = !0;
        const Ot = I.props;
        Ot.onTouchStart && Ot.onTouchStart(ae)
    }
      , Wp = tu
      , Qp = zp
      , Jy = ae=>{
        Hp(ae),
        clearTimeout(_e.current),
        clearTimeout(lt.current),
        ut(),
        Ie.current = document.body.style.WebkitUserSelect,
        document.body.style.WebkitUserSelect = "none",
        St.current = setTimeout(()=>{
            document.body.style.WebkitUserSelect = Ie.current,
            tu(ae)
        }
        , N)
    }
      , Zy = ae=>{
        I.props.onTouchEnd && I.props.onTouchEnd(ae),
        ut(),
        clearTimeout(_e.current),
        _e.current = setTimeout(()=>{
            ks(ae)
        }
        , X)
    }
    ;
    C.exports.useEffect(()=>{
        if (!M)
            return;
        function ae(Ot) {
            (Ot.key === "Escape" || Ot.key === "Esc") && ks(Ot)
        }
        return document.addEventListener("keydown", ae),
        ()=>{
            document.removeEventListener("keydown", ae)
        }
    }
    , [ks, M]);
    const e0 = Je(I.ref, qy, gn, n);
    !Z && Z !== 0 && (M = !1);
    const nu = C.exports.useRef()
      , t0 = ae=>{
        const Ot = I.props;
        Ot.onMouseMove && Ot.onMouseMove(ae),
        gi = {
            x: ae.clientX,
            y: ae.clientY
        },
        nu.current && nu.current.update()
    }
      , ti = {}
      , ru = typeof Z == "string";
    O ? (ti.title = !M && ru && !U ? Z : null,
    ti["aria-describedby"] = M ? ue : null) : (ti["aria-label"] = ru ? Z : null,
    ti["aria-labelledby"] = M && !ru ? ue : null);
    const sn = w({}, ti, bt, I.props, {
        className: ee(bt.className, I.props.className),
        onTouchStart: Hp,
        ref: e0
    }, $ ? {
        onMouseMove: t0
    } : {})
      , ni = {};
    F || (sn.onTouchStart = Jy,
    sn.onTouchEnd = Zy),
    U || (sn.onMouseOver = qs(Wp, sn.onMouseOver),
    sn.onMouseLeave = qs(Qp, sn.onMouseLeave),
    gt || (ni.onMouseOver = Wp,
    ni.onMouseLeave = Qp)),
    W || (sn.onFocus = qs(jp, sn.onFocus),
    sn.onBlur = qs(Up, sn.onBlur),
    gt || (ni.onFocus = jp,
    ni.onBlur = Up));
    const n0 = C.exports.useMemo(()=>{
        var ae;
        let Ot = [{
            name: "arrow",
            enabled: Boolean(at),
            options: {
                element: at,
                padding: 4
            }
        }];
        return (ae = ie.popperOptions) != null && ae.modifiers && (Ot = Ot.concat(ie.popperOptions.modifiers)),
        w({}, ie.popperOptions, {
            modifiers: Ot
        })
    }
    , [at, ie])
      , ri = w({}, E, {
        isRtl: Wt,
        arrow: S,
        disableInteractive: gt,
        placement: H,
        PopperComponentProp: oe,
        touch: Se.current
    })
      , ou = lP(ri)
      , Gp = (r = (o = Pe.popper) != null ? o : R.Popper) != null ? r : uP
      , Kp = (i = (s = (a = Pe.transition) != null ? a : R.Transition) != null ? s : Te) != null ? i : qc
      , Xp = (l = (u = Pe.tooltip) != null ? u : R.Tooltip) != null ? l : cP
      , Yp = (c = (f = Pe.arrow) != null ? f : R.Arrow) != null ? c : dP
      , r0 = Ei(Gp, w({}, ie, (p = re.popper) != null ? p : k.popper, {
        className: ee(ou.popper, ie == null ? void 0 : ie.className, (v = (x = re.popper) != null ? x : k.popper) == null ? void 0 : v.className)
    }), ri)
      , o0 = Ei(Kp, w({}, nt, (g = re.transition) != null ? g : k.transition), ri)
      , i0 = Ei(Xp, w({}, (P = re.tooltip) != null ? P : k.tooltip, {
        className: ee(ou.tooltip, (m = (h = re.tooltip) != null ? h : k.tooltip) == null ? void 0 : m.className)
    }), ri)
      , s0 = Ei(Yp, w({}, (d = re.arrow) != null ? d : k.arrow, {
        className: ee(ou.arrow, (y = (A = re.arrow) != null ? A : k.arrow) == null ? void 0 : y.className)
    }), ri);
    return j(C.exports.Fragment, {
        children: [C.exports.cloneElement(I, sn), b(Gp, w({
            as: oe != null ? oe : Tp,
            placement: H,
            anchorEl: $ ? {
                getBoundingClientRect: ()=>({
                    top: gi.y,
                    left: gi.x,
                    right: gi.x,
                    bottom: gi.y,
                    width: 0,
                    height: 0
                })
            } : he,
            popperRef: nu,
            open: he ? M : !1,
            id: ue,
            transition: !0
        }, ni, r0, {
            popperOptions: n0,
            children: ({TransitionProps: ae})=>b(Kp, w({
                timeout: Ke.transitions.duration.shorter
            }, ae, o0, {
                children: j(Xp, w({}, i0, {
                    children: [Z, S ? b(Yp, w({}, s0, {
                        ref: We
                    })) : null]
                }))
            }))
        }))]
    })
});
var yo = pP;
function Yh({data: e, found: t}) {
    const [n,r] = C.exports.useState(!0)
      , [o,i] = C.exports.useState(null)
      , s = p=>{
        i(o ? null : p.currentTarget)
    }
      , a = Boolean(o)
      , l = a ? "simple-popper" : void 0
      , u = ()=>{
        chrome.runtime.sendMessage({
            type: iu.REMOVE
        })
    }
      , c = ()=>{
        document.getElementById("App").style.width = "40px",
        document.getElementById("App").style.height = "80px",
        document.getElementById("App-footer").style.display = "none",
        document.getElementById("App-Content").style.display = "none",
        chrome.runtime.sendMessage({
            type: iu.MINIMIZE
        }),
        r(!1)
    }
    ;
    return b("div", {
        className: n ? "header" : "onlyButton",
        children: n ? j(mn, {
            children: [b("div", {
                className: "logo",
                children: b("img", {
                    src: chrome.runtime.getURL(tP),
                    alt: "",
                    className: "logo-img"
                })
            }), j("div", {
                className: "title",
                children: [" ", e.title, " "]
            }), j("div", {
                className: "actions",
                children: [b(dn, {
                    "aria-label": "info",
                    size: "small",
                    onClick: s,
                    children: b(ky, {
                        className: "icon-button-window"
                    })
                }), b(Tp, {
                    id: l,
                    open: a,
                    anchorEl: o,
                    children: b("div", {
                        className: "poper",
                        children: b("p", {
                            children: "The IAB Europe CMP Validator (Validator) is a tool that helps Consent Management Providers (CMPs) and publishers check their compliance with the IAB Europe Transparency & Consent Framework (TCF) Technical Specifications and Policy. It can also be used by Vendors to check the compliance of their publisher-partners, and by end-users who want to verify their preferences with respect to the processing of their personal data were saved faithfully."
                        })
                    })
                }), b(yo, {
                    title: "Close CMP validator",
                    children: b(dn, {
                        "aria-label": "close",
                        size: "small",
                        onClick: u,
                        children: b(Xc, {
                            className: "icon-button-window"
                        })
                    })
                }), t && b(yo, {
                    title: "Collapse CMP validator",
                    children: b(dn, {
                        "aria-label": "minimize",
                        size: "small",
                        onClick: c,
                        children: b(Iy, {
                            className: "minimize-icon-button-window"
                        })
                    })
                })]
            })]
        }) : j(mn, {
            children: [b(yo, {
                title: "Expand CMP validator",
                children: b(dn, {
                    "aria-label": "maximize",
                    size: "small",
                    onClick: ()=>{
                        document.getElementById("App").style.width = "600px",
                        document.getElementById("App").style.height = "100%",
                        document.getElementById("App-footer").style.display = "flex",
                        document.getElementById("App-Content").style.display = "block",
                        chrome.runtime.sendMessage({
                            type: iu.RESTART
                        }),
                        r(!0)
                    }
                    ,
                    children: b(Py, {
                        className: "minimize-icon-button-window"
                    })
                })
            }), b(yo, {
                title: "Close CMP validator",
                children: b(dn, {
                    "aria-label": "close",
                    size: "small",
                    onClick: u,
                    children: b(Xc, {
                        className: "icon-button-window"
                    })
                })
            })]
        })
    })
}
function fP(e) {
    return ve("MuiCollapse", e)
}
ye("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const hP = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"]
  , mP = e=>{
    const {orientation: t, classes: n} = e
      , r = {
        root: ["root", `${t}`],
        entered: ["entered"],
        hidden: ["hidden"],
        wrapper: ["wrapper", `${t}`],
        wrapperInner: ["wrapperInner", `${t}`]
    };
    return we(r, fP, n)
}
  , gP = Y("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.root, t[n.orientation], n.state === "entered" && t.entered, n.state === "exited" && !n.in && n.collapsedSize === "0px" && t.hidden]
    }
})(({theme: e, ownerState: t})=>w({
    height: 0,
    overflow: "hidden",
    transition: e.transitions.create("height")
}, t.orientation === "horizontal" && {
    height: "auto",
    width: 0,
    transition: e.transitions.create("width")
}, t.state === "entered" && w({
    height: "auto",
    overflow: "visible"
}, t.orientation === "horizontal" && {
    width: "auto"
}), t.state === "exited" && !t.in && t.collapsedSize === "0px" && {
    visibility: "hidden"
}))
  , vP = Y("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (e,t)=>t.wrapper
})(({ownerState: e})=>w({
    display: "flex",
    width: "100%"
}, e.orientation === "horizontal" && {
    width: "auto",
    height: "100%"
}))
  , yP = Y("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (e,t)=>t.wrapperInner
})(({ownerState: e})=>w({
    width: "100%"
}, e.orientation === "horizontal" && {
    width: "auto",
    height: "100%"
}))
  , Ny = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiCollapse"
    })
      , {addEndListener: o, children: i, className: s, collapsedSize: a="0px", component: l, easing: u, in: c, onEnter: f, onEntered: p, onEntering: v, onExit: x, onExited: g, onExiting: P, orientation: m="vertical", style: h, timeout: d=Ay.standard, TransitionComponent: y=Ap} = r
      , A = q(r, hP)
      , E = w({}, r, {
        orientation: m,
        collapsedSize: a
    })
      , S = mP(E)
      , I = qo()
      , R = C.exports.useRef()
      , k = C.exports.useRef(null)
      , O = C.exports.useRef()
      , W = typeof a == "number" ? `${a}px` : a
      , U = m === "horizontal"
      , D = U ? "width" : "height";
    C.exports.useEffect(()=>()=>{
        clearTimeout(R.current)
    }
    , []);
    const F = C.exports.useRef(null)
      , V = Je(n, F)
      , K = H=>oe=>{
        if (H) {
            const ie = F.current;
            oe === void 0 ? H(ie) : H(ie, oe)
        }
    }
      , N = ()=>k.current ? k.current[U ? "clientWidth" : "clientHeight"] : 0
      , $ = K((H,oe)=>{
        k.current && U && (k.current.style.position = "absolute"),
        H.style[D] = W,
        f && f(H, oe)
    }
    )
      , B = K((H,oe)=>{
        const ie = N();
        k.current && U && (k.current.style.position = "");
        const {duration: re, easing: Pe} = jo({
            style: h,
            timeout: d,
            easing: u
        }, {
            mode: "enter"
        });
        if (d === "auto") {
            const Z = I.transitions.getAutoHeightDuration(ie);
            H.style.transitionDuration = `${Z}ms`,
            O.current = Z
        } else
            H.style.transitionDuration = typeof re == "string" ? re : `${re}ms`;
        H.style[D] = `${ie}px`,
        H.style.transitionTimingFunction = Pe,
        v && v(H, oe)
    }
    )
      , Q = K((H,oe)=>{
        H.style[D] = "auto",
        p && p(H, oe)
    }
    )
      , X = K(H=>{
        H.style[D] = `${N()}px`,
        x && x(H)
    }
    )
      , ce = K(g)
      , J = K(H=>{
        const oe = N()
          , {duration: ie, easing: re} = jo({
            style: h,
            timeout: d,
            easing: u
        }, {
            mode: "exit"
        });
        if (d === "auto") {
            const Pe = I.transitions.getAutoHeightDuration(oe);
            H.style.transitionDuration = `${Pe}ms`,
            O.current = Pe
        } else
            H.style.transitionDuration = typeof ie == "string" ? ie : `${ie}ms`;
        H.style[D] = W,
        H.style.transitionTimingFunction = re,
        P && P(H)
    }
    );
    return b(y, w({
        in: c,
        onEnter: $,
        onEntered: Q,
        onEntering: B,
        onExit: X,
        onExited: ce,
        onExiting: J,
        addEndListener: H=>{
            d === "auto" && (R.current = setTimeout(H, O.current || 0)),
            o && o(F.current, H)
        }
        ,
        nodeRef: F,
        timeout: d === "auto" ? null : d
    }, A, {
        children: (H,oe)=>b(gP, w({
            as: l,
            className: ee(S.root, s, {
                entered: S.entered,
                exited: !c && W === "0px" && S.hidden
            }[H]),
            style: w({
                [U ? "minWidth" : "minHeight"]: W
            }, h),
            ownerState: w({}, E, {
                state: H
            }),
            ref: V
        }, oe, {
            children: b(vP, {
                ownerState: w({}, E, {
                    state: H
                }),
                className: S.wrapper,
                ref: k,
                children: b(yP, {
                    ownerState: w({}, E, {
                        state: H
                    }),
                    className: S.wrapperInner,
                    children: i
                })
            })
        }))
    }))
});
Ny.muiSupportAuto = !0;
var xP = Ny;
function CP(e) {
    return ve("MuiPaper", e)
}
ye("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const wP = ["className", "component", "elevation", "square", "variant"]
  , AP = e=>{
    const {square: t, elevation: n, variant: r, classes: o} = e
      , i = {
        root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
    };
    return we(i, CP, o)
}
  , bP = Y("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]]
    }
})(({theme: e, ownerState: t})=>{
    var n;
    return w({
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow")
    }, !t.square && {
        borderRadius: e.shape.borderRadius
    }, t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`
    }, t.variant === "elevation" && w({
        boxShadow: (e.vars || e).shadows[t.elevation]
    }, !e.vars && e.palette.mode === "dark" && {
        backgroundImage: `linear-gradient(${Sn("#fff", Xh(t.elevation))}, ${Sn("#fff", Xh(t.elevation))})`
    }, e.vars && {
        backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
    }))
}
)
  , SP = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiPaper"
    })
      , {className: o, component: i="div", elevation: s=1, square: a=!1, variant: l="elevation"} = r
      , u = q(r, wP)
      , c = w({}, r, {
        component: i,
        elevation: s,
        square: a,
        variant: l
    })
      , f = AP(c);
    return b(bP, w({
        as: i,
        ownerState: c,
        className: ee(f.root, o),
        ref: n
    }, u))
});
var Np = SP;
const EP = C.exports.createContext({});
var Ly = EP;
function PP(e) {
    return ve("MuiAccordion", e)
}
const IP = ye("MuiAccordion", ["root", "rounded", "expanded", "disabled", "gutters", "region"]);
var Js = IP;
const kP = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]
  , RP = e=>{
    const {classes: t, square: n, expanded: r, disabled: o, disableGutters: i} = e;
    return we({
        root: ["root", !n && "rounded", r && "expanded", o && "disabled", !i && "gutters"],
        region: ["region"]
    }, PP, t)
}
  , TP = Y(Np, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [{
            [`& .${Js.region}`]: t.region
        }, t.root, !n.square && t.rounded, !n.disableGutters && t.gutters]
    }
})(({theme: e})=>{
    const t = {
        duration: e.transitions.duration.shortest
    };
    return {
        position: "relative",
        transition: e.transitions.create(["margin"], t),
        overflowAnchor: "none",
        "&:before": {
            position: "absolute",
            left: 0,
            top: -1,
            right: 0,
            height: 1,
            content: '""',
            opacity: 1,
            backgroundColor: (e.vars || e).palette.divider,
            transition: e.transitions.create(["opacity", "background-color"], t)
        },
        "&:first-of-type": {
            "&:before": {
                display: "none"
            }
        },
        [`&.${Js.expanded}`]: {
            "&:before": {
                opacity: 0
            },
            "&:first-of-type": {
                marginTop: 0
            },
            "&:last-of-type": {
                marginBottom: 0
            },
            "& + &": {
                "&:before": {
                    display: "none"
                }
            }
        },
        [`&.${Js.disabled}`]: {
            backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
    }
}
, ({theme: e, ownerState: t})=>w({}, !t.square && {
    borderRadius: 0,
    "&:first-of-type": {
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius
    },
    "&:last-of-type": {
        borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
        borderBottomRightRadius: (e.vars || e).shape.borderRadius,
        "@supports (-ms-ime-align: auto)": {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
        }
    }
}, !t.disableGutters && {
    [`&.${Js.expanded}`]: {
        margin: "16px 0"
    }
}))
  , NP = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiAccordion"
    })
      , {children: o, className: i, defaultExpanded: s=!1, disabled: a=!1, disableGutters: l=!1, expanded: u, onChange: c, square: f=!1, TransitionComponent: p=xP, TransitionProps: v} = r
      , x = q(r, kP)
      , [g,P] = as({
        controlled: u,
        default: s,
        name: "Accordion",
        state: "expanded"
    })
      , m = C.exports.useCallback(S=>{
        P(!g),
        c && c(S, !g)
    }
    , [g, c, P])
      , [h,...d] = C.exports.Children.toArray(o)
      , y = C.exports.useMemo(()=>({
        expanded: g,
        disabled: a,
        disableGutters: l,
        toggle: m
    }), [g, a, l, m])
      , A = w({}, r, {
        square: f,
        disabled: a,
        disableGutters: l,
        expanded: g
    })
      , E = RP(A);
    return j(TP, w({
        className: ee(E.root, i),
        ref: n,
        ownerState: A,
        square: f
    }, x, {
        children: [b(Ly.Provider, {
            value: y,
            children: h
        }), b(p, w({
            in: g,
            timeout: "auto"
        }, v, {
            children: b("div", {
                "aria-labelledby": h.props.id,
                id: h.props["aria-controls"],
                role: "region",
                className: E.region,
                children: d
            })
        }))]
    }))
});
var LP = NP;
function OP(e) {
    return ve("MuiAccordionSummary", e)
}
const MP = ye("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]);
var xo = MP;
const BP = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"]
  , FP = e=>{
    const {classes: t, expanded: n, disabled: r, disableGutters: o} = e;
    return we({
        root: ["root", n && "expanded", r && "disabled", !o && "gutters"],
        focusVisible: ["focusVisible"],
        content: ["content", n && "expanded", !o && "contentGutters"],
        expandIconWrapper: ["expandIconWrapper", n && "expanded"]
    }, OP, t)
}
  , _P = Y(Ep, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (e,t)=>t.root
})(({theme: e, ownerState: t})=>{
    const n = {
        duration: e.transitions.duration.shortest
    };
    return w({
        display: "flex",
        minHeight: 48,
        padding: e.spacing(0, 2),
        transition: e.transitions.create(["min-height", "background-color"], n),
        [`&.${xo.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus
        },
        [`&.${xo.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity
        },
        [`&:hover:not(.${xo.disabled})`]: {
            cursor: "pointer"
        }
    }, !t.disableGutters && {
        [`&.${xo.expanded}`]: {
            minHeight: 64
        }
    })
}
)
  , DP = Y("div", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (e,t)=>t.content
})(({theme: e, ownerState: t})=>w({
    display: "flex",
    flexGrow: 1,
    margin: "12px 0"
}, !t.disableGutters && {
    transition: e.transitions.create(["margin"], {
        duration: e.transitions.duration.shortest
    }),
    [`&.${xo.expanded}`]: {
        margin: "20px 0"
    }
}))
  , zP = Y("div", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (e,t)=>t.expandIconWrapper
})(({theme: e})=>({
    display: "flex",
    color: (e.vars || e).palette.action.active,
    transform: "rotate(0deg)",
    transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shortest
    }),
    [`&.${xo.expanded}`]: {
        transform: "rotate(180deg)"
    }
}))
  , $P = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiAccordionSummary"
    })
      , {children: o, className: i, expandIcon: s, focusVisibleClassName: a, onClick: l} = r
      , u = q(r, BP)
      , {disabled: c=!1, disableGutters: f, expanded: p, toggle: v} = C.exports.useContext(Ly)
      , x = m=>{
        v && v(m),
        l && l(m)
    }
      , g = w({}, r, {
        expanded: p,
        disabled: c,
        disableGutters: f
    })
      , P = FP(g);
    return j(_P, w({
        focusRipple: !1,
        disableRipple: !0,
        disabled: c,
        component: "div",
        "aria-expanded": p,
        className: ee(P.root, i),
        focusVisibleClassName: ee(P.focusVisible, a),
        onClick: x,
        ref: n,
        ownerState: g
    }, u, {
        children: [b(DP, {
            className: P.content,
            ownerState: g,
            children: o
        }), s && b(zP, {
            className: P.expandIconWrapper,
            ownerState: g,
            children: s
        })]
    }))
});
var VP = $P;
function UP(e) {
    return ve("MuiAccordionDetails", e)
}
ye("MuiAccordionDetails", ["root"]);
const jP = ["className"]
  , HP = e=>{
    const {classes: t} = e;
    return we({
        root: ["root"]
    }, UP, t)
}
  , WP = Y("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e,t)=>t.root
})(({theme: e})=>({
    padding: e.spacing(1, 2, 2)
}))
  , QP = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiAccordionDetails"
    })
      , {className: o} = r
      , i = q(r, jP)
      , s = r
      , a = HP(s);
    return b(WP, w({
        className: ee(a.root, o),
        ref: n,
        ownerState: s
    }, i))
});
var qh = QP;
function GP(e) {
    return ve("MuiTypography", e)
}
ye("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const KP = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]
  , XP = e=>{
    const {align: t, gutterBottom: n, noWrap: r, paragraph: o, variant: i, classes: s} = e
      , a = {
        root: ["root", i, e.align !== "inherit" && `align${ne(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
    };
    return we(a, GP, s)
}
  , YP = Y("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ne(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph]
    }
})(({theme: e, ownerState: t})=>w({
    margin: 0
}, t.variant && e.typography[t.variant], t.align !== "inherit" && {
    textAlign: t.align
}, t.noWrap && {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
}, t.gutterBottom && {
    marginBottom: "0.35em"
}, t.paragraph && {
    marginBottom: 16
}))
  , Jh = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p"
}
  , qP = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main"
}
  , JP = e=>qP[e] || e
  , ZP = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiTypography"
    })
      , o = JP(r.color)
      , i = yy(w({}, r, {
        color: o
    }))
      , {align: s="inherit", className: a, component: l, gutterBottom: u=!1, noWrap: c=!1, paragraph: f=!1, variant: p="body1", variantMapping: v=Jh} = i
      , x = q(i, KP)
      , g = w({}, i, {
        align: s,
        color: o,
        className: a,
        component: l,
        gutterBottom: u,
        noWrap: c,
        paragraph: f,
        variant: p,
        variantMapping: v
    })
      , P = l || (f ? "p" : v[p] || Jh[p]) || "span"
      , m = XP(g);
    return b(YP, w({
        as: P,
        ref: n,
        ownerState: g,
        className: ee(m.root, a)
    }, x))
});
var eI = ZP
  , Lp = {}
  , tI = Xo.exports;
Object.defineProperty(Lp, "__esModule", {
    value: !0
});
var Oy = Lp.default = void 0
  , nI = tI(Yo)
  , rI = Ps
  , oI = (0,
nI.default)((0,
rI.jsx)("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");
Oy = Lp.default = oI;
function iI(e) {
    return ve("MuiButton", e)
}
const sI = ye("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
var Zs = sI;
const aI = C.exports.createContext({});
var lI = aI;
const uI = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]
  , cI = e=>{
    const {color: t, disableElevation: n, fullWidth: r, size: o, variant: i, classes: s} = e
      , a = {
        root: ["root", i, `${i}${ne(t)}`, `size${ne(o)}`, `${i}Size${ne(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${ne(o)}`],
        endIcon: ["endIcon", `iconSize${ne(o)}`]
    }
      , l = we(a, iI, s);
    return w({}, s, l)
}
  , My = e=>w({}, e.size === "small" && {
    "& > *:nth-of-type(1)": {
        fontSize: 18
    }
}, e.size === "medium" && {
    "& > *:nth-of-type(1)": {
        fontSize: 20
    }
}, e.size === "large" && {
    "& > *:nth-of-type(1)": {
        fontSize: 22
    }
})
  , dI = Y(Ep, {
    shouldForwardProp: e=>Gn(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.root, t[n.variant], t[`${n.variant}${ne(n.color)}`], t[`size${ne(n.size)}`], t[`${n.variant}Size${ne(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth]
    }
})(({theme: e, ownerState: t})=>{
    var n, r;
    return w({}, e.typography.button, {
        minWidth: 64,
        padding: "6px 16px",
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
            duration: e.transitions.duration.short
        }),
        "&:hover": w({
            textDecoration: "none",
            backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Sn(e.palette.text.primary, e.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }, t.variant === "text" && t.color !== "inherit" && {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Sn(e.palette[t.color].main, e.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }, t.variant === "outlined" && t.color !== "inherit" && {
            border: `1px solid ${(e.vars || e).palette[t.color].main}`,
            backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Sn(e.palette[t.color].main, e.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }, t.variant === "contained" && {
            backgroundColor: (e.vars || e).palette.grey.A100,
            boxShadow: (e.vars || e).shadows[4],
            "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300]
            }
        }, t.variant === "contained" && t.color !== "inherit" && {
            backgroundColor: (e.vars || e).palette[t.color].dark,
            "@media (hover: none)": {
                backgroundColor: (e.vars || e).palette[t.color].main
            }
        }),
        "&:active": w({}, t.variant === "contained" && {
            boxShadow: (e.vars || e).shadows[8]
        }),
        [`&.${Zs.focusVisible}`]: w({}, t.variant === "contained" && {
            boxShadow: (e.vars || e).shadows[6]
        }),
        [`&.${Zs.disabled}`]: w({
            color: (e.vars || e).palette.action.disabled
        }, t.variant === "outlined" && {
            border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }, t.variant === "contained" && {
            color: (e.vars || e).palette.action.disabled,
            boxShadow: (e.vars || e).shadows[0],
            backgroundColor: (e.vars || e).palette.action.disabledBackground
        })
    }, t.variant === "text" && {
        padding: "6px 8px"
    }, t.variant === "text" && t.color !== "inherit" && {
        color: (e.vars || e).palette[t.color].main
    }, t.variant === "outlined" && {
        padding: "5px 15px",
        border: "1px solid currentColor"
    }, t.variant === "outlined" && t.color !== "inherit" && {
        color: (e.vars || e).palette[t.color].main,
        border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Sn(e.palette[t.color].main, .5)}`
    }, t.variant === "contained" && {
        color: e.vars ? e.vars.palette.text.primary : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
        backgroundColor: (e.vars || e).palette.grey[300],
        boxShadow: (e.vars || e).shadows[2]
    }, t.variant === "contained" && t.color !== "inherit" && {
        color: (e.vars || e).palette[t.color].contrastText,
        backgroundColor: (e.vars || e).palette[t.color].main
    }, t.color === "inherit" && {
        color: "inherit",
        borderColor: "currentColor"
    }, t.size === "small" && t.variant === "text" && {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
    }, t.size === "large" && t.variant === "text" && {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
    }, t.size === "small" && t.variant === "outlined" && {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
    }, t.size === "large" && t.variant === "outlined" && {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
    }, t.size === "small" && t.variant === "contained" && {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
    }, t.size === "large" && t.variant === "contained" && {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
    }, t.fullWidth && {
        width: "100%"
    })
}
, ({ownerState: e})=>e.disableElevation && {
    boxShadow: "none",
    "&:hover": {
        boxShadow: "none"
    },
    [`&.${Zs.focusVisible}`]: {
        boxShadow: "none"
    },
    "&:active": {
        boxShadow: "none"
    },
    [`&.${Zs.disabled}`]: {
        boxShadow: "none"
    }
})
  , pI = Y("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.startIcon, t[`iconSize${ne(n.size)}`]]
    }
})(({ownerState: e})=>w({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4
}, e.size === "small" && {
    marginLeft: -2
}, My(e)))
  , fI = Y("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.endIcon, t[`iconSize${ne(n.size)}`]]
    }
})(({ownerState: e})=>w({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8
}, e.size === "small" && {
    marginRight: -2
}, My(e)))
  , hI = C.exports.forwardRef(function(t, n) {
    const r = C.exports.useContext(lI)
      , o = Zd(r, t)
      , i = be({
        props: o,
        name: "MuiButton"
    })
      , {children: s, color: a="primary", component: l="button", className: u, disabled: c=!1, disableElevation: f=!1, disableFocusRipple: p=!1, endIcon: v, focusVisibleClassName: x, fullWidth: g=!1, size: P="medium", startIcon: m, type: h, variant: d="text"} = i
      , y = q(i, uI)
      , A = w({}, i, {
        color: a,
        component: l,
        disabled: c,
        disableElevation: f,
        disableFocusRipple: p,
        fullWidth: g,
        size: P,
        type: h,
        variant: d
    })
      , E = cI(A)
      , S = m && b(pI, {
        className: E.startIcon,
        ownerState: A,
        children: m
    })
      , I = v && b(fI, {
        className: E.endIcon,
        ownerState: A,
        children: v
    });
    return j(dI, w({
        ownerState: A,
        className: ee(r.className, E.root, u),
        component: l,
        disabled: c,
        focusRipple: !p,
        focusVisibleClassName: ee(E.focusVisible, x),
        ref: n,
        type: h
    }, y, {
        classes: E,
        children: [S, s, I]
    }))
});
var mI = hI;
function gI({data: e, showAddInformation: t}) {
    return j("div", {
        className: "content-information-page",
        id: "content-information-page",
        children: [b("div", {
            className: "information-window-title",
            children: j("span", {
                children: [e.title, ": ", e.questionText]
            })
        }), e.manualSteps && b("div", {
            children: b("span", {
                className: "information-window-subtitle",
                children: "Manual steps required for this check"
            })
        }), b("div", {
            dangerouslySetInnerHTML: {
                __html: e.manualSteps
            },
            className: "content-question-information-window"
        }), b("div", {
            children: b("span", {
                className: "information-window-subtitle",
                children: "Policy Reference (TCF V2)"
            })
        }), b("div", {
            dangerouslySetInnerHTML: {
                __html: e.policyReference
            },
            className: "content-question-information-window"
        }), b("div", {
            className: "buttons-information-page",
            children: b(mI, {
                variant: "outlined",
                color: "secondary",
                onClick: ()=>t({}),
                className: "button-ok",
                children: "OK"
            })
        })]
    })
}
const vI = {
    header: {
        title: "CMP Validator 2.2"
    },
    footer: {
        title: "IAB Europe 2023"
    }
}
  , yI = {
    summary: {
        header: "Summary",
        checks: {
            cmpFound: "CMP Found",
            cmpId: "CMP Id",
            cmpVersion: "CMP Version",
            tcfApiVersion: "TCF API Version",
            tcfPolicyVersion: "TCF Policy Version",
            gdprApplies: "GDPR Applies"
        }
    },
    sections: [{
        headerTitle: "Technical Compliance Checks",
        subsections: !1,
        sectionId: "technicalComplianceCheck",
        checks: [{
            number: 1,
            id: "technicalComplianceCheck_1",
            text: "Are consent signals in the TC String created after affirmative action by the user",
            tooltip: "",
            additionalInformation: {
                manualSteps: "For this check to pass, there must be either a) no TC String or b) all purpose and vendor consent signals must be set to 'no'.",
                policyReference: "<p>Chapter II: Policies for CMPs; 5(3).</p><p>A CMP must only generate a positive consent Signal on the basis of a clear affirmative action taken by a user that unambiguously signifies that user\u2019s agreement on the basis of appropriate information in accordance with the law.</p>"
            },
            automated: !1,
            response: null
        }, {
            number: 2,
            id: "technicalComplianceCheck_2",
            text: "If a 'Reject All' option is provided in the user interface, when the user clicks on it, are all consent signals for purposes and vendors set to 'off'?",
            tooltip: "",
            additionalInformation: {
                manualSteps: "This check fails if there are any positive purpose or vendor consent signals after the user clicks 'Rejects All'.",
                policyReference: "<p>Chapter II: Policies for CMPs; 5(3).</p><p>A CMP must only generate a positive consent Signal on the basis of a clear affirmative action taken by a user that unambiguously signifies that user\u2019s agreement on the basis of appropriate information in accordance with the law.</p>"
            },
            automated: !1,
            response: null
        }, {
            number: 3,
            id: "technicalComplianceCheck_3",
            text: "Does the API return an updated TC string after a change of users\u2019 choices made in the CMP UI?",
            tooltip: "",
            additionalInformation: {
                manualSteps: "This check fails if the purpose and vendor consent or LI signals do not map the disclosures provided and choices made in the CMP UI.",
                policyReference: "<p>Chapter II: Policies for CMPs; 5(3).</p><p>A CMP must only generate a positive consent Signal on the basis of a clear affirmative action taken by a user that unambiguously signifies that user\u2019s agreement on the basis of appropriate information in accordance with the law.</p><p>Chapter II: Policies for CMPs; 5(4).</p><p>A CMP must only generate a positive legitimate interest Signal on the basis of the provision of transparency by the CMP about processing on the basis of a legitimate interest and must always generate a negative legitimate interest Signal if the user has indicated an objection to such processing on the basis of a legitimate interest.</p><p>Chapter II: Policies for CMPs; 5(5).</p><p>A CMP must only generate a positive opt-in Signal for Special Features on the basis of a clear affirmative action taken by a user that unambiguously signifies that user\u2019s agreement on the basis of appropriate information.</p>"
            },
            automated: !1,
            response: null
        }, {
            number: 4,
            id: "technicalComplianceCheck_4",
            text: "Did all CMP API required commands return a correct response?",
            tooltip: "",
            additionalInformation: {
                manualSteps: "This check fails if any of the following mandatory CMP API commands do not return an expected response: ping, addEventListener, removeEventListener.",
                policyReference: "<p>CMP API v2.2 technical specification.</p><p>All CMPs must support the three required API commands: 'ping', 'addEventListener', and 'removeEventListener'.</p>"
            },
            automated: !0
        }, {
            number: 5,
            id: "technicalComplianceCheck_5",
            text: "Is the CMP registered?",
            tooltip: "",
            additionalInformation: {
                manualSteps: "<p>CMP is registered as a participant of a Transparency and Consent Framework and included in the CMP list.</p>",
                policyReference: "<p>Chapter II: Policies for CMPs; 2(1). Applying and registering.</p><p>CMPs must apply to IAB Europe for participation in the Framework. IAB Europe shall take reasonable steps to vet and approve a CMP\u2019s application according to procedures adopted, and updated from time to time, by the MO.</p>"
            },
            automated: !0
        }, {
            number: 6,
            id: "technicalComplianceCheck_6",
            text: "Is the GVL version format correct?",
            tooltip: "",
            additionalInformation: {
                manualSteps: "<p>This check fails if the GVL version number is 0 or a number higher than the latest version of the GVL.</p>",
                policyReference: "<p>Chapter II: Policies for CMPs; 4(3).</p><p>A CMP must disclose Vendors\u2019 GVL information, including Legal Bases, as declared, and update Vendors\u2019 GVL information, including Legal Bases status in the Framework, wherever stored, according to the Specifications, without extension, modification, or supplementation, except as expressly allowed for in the Specifications.</p>"
            },
            automated: !0
        }, {
            number: 7,
            id: "technicalComplianceCheck_7",
            text: "Is the current or penultimate version of the GVL being used?",
            tooltip: "",
            additionalInformation: {
                manualSteps: "<p>This checks fails if the version of the GVL being used is not the current or last version of the GVL (the last version of the GVL is acceptable as the GVL may be cached for up to one week meaning that the cached version could be 1 version out-of-date).</p>",
                policyReference: "<p>Chapter II: Policies for CMPs; 4(3).</p><p>A CMP must disclose Vendors\u2019 GVL information, including Legal Bases, as declared, and update Vendors\u2019 GVL information, including Legal Bases status in the Framework, wherever stored, according to the Specifications, without extension, modification, or supplementation, except as expressly allowed for in the Specifications.</p>"
            },
            automated: !0
        }, {
            number: 8,
            id: "technicalComplianceCheck_8",
            text: "Is the max vendor id less than or equal to the highest id in the GVL?",
            tooltip: "",
            additionalInformation: {
                manualSteps: "<p>This check fails if the max vendor id for consent or legitimate interest is not less than or equal to the highest vendor id in the GVL being used by the CMP.</p>",
                policyReference: "<p>Chapter II: Policies for CMPs; 4(1).</p><p>In addition to implementing the Framework according to the Specifications, a CMP must support the full Specifications, unless the Specifications expressly state that a feature is optional, in which case a CMP may choose to implement the optional feature but need not to do so.</p>"
            },
            automated: !0
        }, {
            number: 9,
            id: "technicalComplianceCheck_9",
            text: "Are purposes 1, 3, 4, 5, and 6 set to 'no' for legitimate interest?",
            tooltip: "",
            additionalInformation: {
                manualSteps: "<p>Vendors cannot base processing for Purposes 1, 3, 4, 5, and 6 on Legitimate Interest.</p>",
                policyReference: "<p>Chapter II: Policies for CMPs; 5(6).</p><p>A CMP will establish Legal Bases only in accordance with the declarations made by Vendors in the GVL and using the definitions of the Purposes and/or their translations found in the GVL, without extension, modification, or supplementation, except as expressly allowed for in the Policies.</p>"
            },
            automated: !0
        }, {
            number: 10,
            id: "technicalComplianceCheck_10",
            text: "Do the Created and LastUpdated fields have the same value?",
            tooltip: "",
            additionalInformation: {
                manualSteps: "<p>As a result of the limited relevance of the Created field for publishers and their CMPs to remind users of their choices, the Created and LastUpdated fields have been updated to have the same value.</p>",
                policyReference: "<p>Chapter II: Policies for CMPs; 4(1).</p><p>In addition to implementing the Framework according to the Specifications, a CMP must support the full Specifications, unless the Specifications expressly state that a feature is optional, in which case a CMP may choose to implement the optional feature but need not to do so.</p>"
            },
            automated: !0
        }, {
            number: 11,
            id: "technicalComplianceCheck_11",
            text: "Are the Created and LastUpdated timestamps imprecise?",
            tooltip: "",
            additionalInformation: {
                manualSteps: "<p>This check fails if the Created and LastUpdated timestamps do not have hours, minutes and seconds properly zeroed out.</p>",
                policyReference: "<p>Chapter II: Policies for CMPs; 4(1).</p><p>In addition to implementing the Framework according to the Specifications, a CMP must support the full Specifications, unless the Specifications expressly state that a feature is optional, in which case a CMP may choose to implement the optional feature but need not to do so.</p>"
            },
            automated: !0
        }, {
            number: 12,
            id: "technicalComplianceCheck_12",
            text: "Are all vendor signals for deleted vendors set to 0?",
            tooltip: "",
            additionalInformation: {
                manualSteps: "<p>This check fails if there are any positive vendor consent or LI signals for vendors that are marked as deleted in the version of the GVL being used.</p>",
                policyReference: "<p>Chapter II: Policies for CMPs; 5(6)</p><p>A CMP will establish Legal Bases only in accordance with the declarations made by Vendors in the GVL and using the definitions of the Purposes and/or their translations found in the GVL, without extension, modification, or supplementation, except as expressly allowed for in the Policies.</p>"
            },
            automated: !0
        }]
    }, {
        headerTitle: "Policy Compliance Checks",
        subsections: !1,
        sectionId: "policyComplianceCheck",
        checks: [{
            number: 1,
            id: "policyComplianceCheck_1",
            text: "Is the UI prominently displayed, covering most of the website content?",
            tooltip: "This check fails if a TC String is created with purpose or vendor consent signals set to 'yes' before affirmative action by the user.",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(a).</p><p>When providing transparency about Purposes, Features and Vendors in connection with requesting a user\u2019s consent for the same, the Framework UI\u2019s must be displayed prominently and separately from other information, such as the general terms and conditions or the privacy policy, in a modal or banner that covers all or substantially all of the content of the website or app.</p>"
            }
        }, {
            number: 2,
            id: "policyComplianceCheck_2",
            text: "Is the UI displayed separately from other information such as terms and conditions or the privacy policy?",
            tooltip: null,
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(a).</p><p>When providing transparency about Purposes, Features, and Vendors in connection with requesting a user\u2019s consent for the same, the Framework UI\u2019s must be displayed prominently and separately from other information, such as the general terms and conditions or the privacy policy, in a modal or banner that covers all or substantially all of the content of the website or app.</p>"
            }
        }, {
            number: 3,
            id: "policyComplianceCheck_3",
            text: "Does the 1st layer of the UI provide information about the storage and access of information from the user\u2019s device by third-party vendors?",
            tooltip: null,
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(b)(I).</p><p>Information about the fact that information is stored on and/or accessed from the user\u2019s device (e.g. use of cookies, device identifiers, or other device data);</p><p>Appendix B, Policy C(b)(III).</p><p>Must include information about the fact that third party Vendors will be storing and/or accessing information from the user\u2019s device and processing their personal data, the number of third party Vendors (which may also include Vendors not participating in the Framework), and a link to the list of named third parties.</p>"
            }
        }, {
            number: 4,
            id: "policyComplianceCheck_4",
            text: "Does the 1st layer of the UI provide information about the processing of personal data by third party Vendors?",
            tooltip: null,
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(b)(II).</p><p>Must include information about the fact that personal data is processed, and the nature of the personal data processed (e.g. unique identifiers, browsing data);</p><p>Appendix B, Policy C(b)(III).</p><p>Must include information about the fact that third party Vendors will be storing and/or accessing information from the user\u2019s device and processing their personal data, the number of third party Vendors (which may also include Vendors not participating in the Framework), and a link to the list of named third parties.</p>"
            }
        }, {
            number: 5,
            id: "policyComplianceCheck_5",
            text: "Does the 1st layer of the UI provide an example of personal data processed?",
            tooltip: null,
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(b)(II).</p><p>Must include information about the fact that personal data is processed, and the nature of the personal data processed (e.g. unique identifiers, browsing data);</p>"
            }
        }, {
            number: 6,
            id: "policyComplianceCheck_6",
            text: "Is there a direct link to the list of third parties in the 1st layer of the UI?",
            tooltip: null,
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(b)(III).</p><p>Must include information about the fact that third party Vendors will be storing and/or accessing information from the user\u2019s device and processing their personal data, the number of third party Vendors (which may also include Vendors not participating in the Framework), and a link to the list of named third parties.</p>"
            }
        }, {
            number: 7,
            id: "policyComplianceCheck_7",
            text: "Does the 1st layer of the UI provide information about the Purposes and/or Stacks and Special Features used by third parties?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(b)(IV).</p><p>Must include the list of the distinct and separate Purposes for which the Vendors are processing data, using at least the standardised names and/or Stack names as defined in Appendix A.</p><p>Appendix B, Policy C(b)(V).</p><p>Must include information about the Special Features used by the Vendors when processing data.</p>"
            }
        }, {
            number: 8,
            id: "policyComplianceCheck_8",
            text: "Does the 1st layer of the UI provide information about the scope of the consent choice, i.e. service-specific consent or group-specific consent?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(b)(VII).</p><p>Must include information about the scope of the consent choice, i.e. service-specific consent, or group-specific consent. If group-specific consent, a link with information about the group.</p>"
            }
        }, {
            number: 9,
            id: "policyComplianceCheck_9",
            text: "Does the 1st layer of the UI inform the user that they can withdraw their consent at any time and how to do so?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(b)(VIII).</p><p>Must include information about the fact that the user can withdraw their consent at any time, and how to resurface the Framework UI in order to do so.</p>"
            }
        }, {
            number: 10,
            id: "policyComplianceCheck_10",
            text: "Are there calls to action in the 1st layer for users to express consent (e.g. \u201Caccept\u201D) and customise their choices (e.g. \u2019manage options\u2019)?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(b)(II).</p><p>Must include information about the fact that personal data is processed, and the nature of the personal data processed (e.g. unique identifiers, browsing data).</p><p>Appendix B, Policy C(b)(X).</p><p>Must include a call to action for the user to express their consent (for example \u201CAccept\u201D, \u201COkay\u201D, \u201CApprove\u201D, etc.).</p><p>Appendix B, Policy C(b)(XI).</p><p>Must include a call to action for the user to customise their choices (for example \u201CAdvanced Settings\u201D, \u201CCustomise Choices\u201D, etc.).</p>"
            }
        }, {
            number: 11,
            id: "policyComplianceCheck_12",
            text: "Do the two primary calls to action on the 1st layer have matching text treatment and, for each, a minimum contrast ratio of 5:1?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(g).</p><p>Calls to action in a Framework UI must not be invisible, illegible, or appear disabled. While calls to action do not need to be identical, to ensure they are clearly visible, they must have matching text treatment (font, font size, font style), and, for the text of each, a minimum contrast ratio of 5 to 1. To the extent that an Initial Layer has more than two calls to action, this policy only applies to the two primary calls to action.</p>"
            }
        }, {
            number: 12,
            id: "policyComplianceCheck_13",
            text: "Does the 1st layer of the UI show the number of the third party Vendors?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B: Policy C(b)(III).</p><p>Must include information about the fact that third party Vendors will be storing and/or accessing information from the user\u2019s device and processing their personal data, the number of third party Vendors (which may also include Vendors not participating in the Framework), and a link to the list of named third parties.</p>"
            }
        }, {
            number: 13,
            id: "policyComplianceCheck_14",
            text: "If the 1st layer of the UI provides information about the Purposes and Special Features used by Vendors using modified Stack descriptions, is the UseNonStandardTexts flag set to 1?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Chapter IV: Policy for Publishers; 21(6).</p><p>A Publisher must not modify, or instruct its CMP to modify, Stack descriptions and/or their translations unless (a) the Publisher has registered a private CMP with the Framework, or its commercial CMP is using a CMP ID assigned to the Publisher for use with a private CMP; (b) the modified Stack descriptions cover the substance of standard Stack descriptions, such as accurately and fully covering all Purposes that form part of the Stack; (c) Vendors are alerted to the fact of a Publisher using custom Stack descriptions through the appropriate Signal in accordance with the Specification.</p>"
            }
        }, {
            number: 14,
            id: "policyComplianceCheck_15",
            text: "Does the UI show Purposes and Features with their standard names or Stacks?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy B(b).</p><p>When providing transparency about Purposes, and Features, the Framework UI must do so only on the basis of the standard Purpose, Special Purpose, Feature, and Special Feature names and definitions of Appendix A as they are published on the Global Vendor List or using Stacks in accordance with the Policies and Specifications. UIs must make available the standard user-friendly text, and where applicable the standard illustrations for each Purpose, Special Purpose, Feature, Special Feature, and Category of data of Appendix A</p><p>Appendix B, Policy B(c).</p><p>Where the Framework UI uses a language other than English, the Framework UI must do so only on the basis of official translations of the standard Purpose, Special Purpose, Feature, Special Feature, and Category of data names and definitions of Appendix A as they are published on the Global Vendor List.</p><p>Appendix B, Policy C(b)(IV).</p><p>Must include the list of the distinct and separate Purposes for which the Vendors are processing data, using at least the standardised names and/or Stack names as defined in Appendix A.</p><p>Appendix B, Policy C(c)(II).</p><p>Review the list of Purposes, Special Purposes, Features, and Special Features including their standard name, their full standard user-friendly text and where applicable their illustrations, as defined in Appendix A, the number of Vendors seeking consent for each of the Purposes (which may also include Vendors not participating in the Framework), and have  a way to see those Vendors.</p>"
            }
        }, {
            number: 15,
            id: "policyComplianceCheck_16",
            text: "Can users review the standard user-friendly texts and illustrations?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy B(b).</p><p>When providing transparency about Purposes, and Features, the Framework UI must do so only on the basis of the standard Purpose, Special Purpose, Feature, Special Feature names and definitions of Appendix A as they are published on the Global Vendor List or using Stacks in accordance with the Policies and Specifications. UIs must make available the standard user-friendly text, and where applicable the standard illustrations for each of Purpose, Special Purpose, Feature, Special Feature, and Category of data of Appendix A.</p>"
            }
        }, {
            number: 16,
            id: "policyComplianceCheck_17",
            text: "If the UI includes non-TCF Vendors, are they presented separately?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy B(e).</p><p>For the avoidance of doubt, Framework UIs may be used to also provide transparency, and request consent, for purposes and/or vendors, that are not covered by the Framework. However, users must not be misled to believe that any non-Framework purpose and/or vendor are part of the Framework or subject to its Policies. If the Framework UI includes non- Framework purposes and/or vendors the Framework UI must make it possible for users to distinguish between Vendors registered with the Framework, and Purposes defined by the Framework, and those who are not.</p><p>Appendix B, Policy C(e).</p><p>If a UI displays Vendors who are not registered with IAB Europe for participation in the Framework, the UI must make it possible for users to distinguish between Vendors registered with the Framework, and those who are not. The UI must not mislead others as to the Framework participation of any of the Vendors who are not registered with the MO.</p>"
            }
        }, {
            number: 17,
            id: "policyComplianceCheck_18",
            text: "Does the UI provide information about third party Vendors processing personal data based on legitimate interest (if any)?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(b)(IX).</p><p>Should include information about the fact that some Vendors (if any) are not requesting consent, but processing the user\u2019s data on the basis of their legitimate interest; the fact that the user has a right to object to such processing; and a link to the relevant layer of the Framework UI dealing with processing on the basis of legitimate interests where more information can be found.</p><p>Appendix B, Policy D(a).</p><p>When providing transparency about Purposes, Special Purposes, Features, Special Features, and Vendors in connection with a legitimate interest for the same, transparency must be provided at least through an easily accessible link to the relevant layer of the Framework UI dealing with processing on the basis of legitimate interests.</p><p>Appendix B, Policy D(b).</p><p>When providing transparency about Purposes, Special Purposes, Features, Special Features, and Vendors in connection with both requesting a user\u2019s consent for the same and a legitimate interest, Policy C(a) applies, and the easily accessible link to the relevant layer of the Framework UI dealing with processing on the basis of legitimate interests required under Policy D(a) must be included in the Initial Layer of the Framework UI presented in line with Policy C(a).</p>"
            }
        }, {
            number: 18,
            id: "policyComplianceCheck_19",
            text: "Does the UI advise the user of their right to object to their personal data being processed on the basis of legitimate interest (if any)?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(b)(IX).</p><p>Should include information about the fact that some Vendors (if any) are not requesting consent, but processing the user\u2019s data on the basis of their legitimate interest; the fact that the user has a right to object to such processing; and a link to the relevant layer of the Framework UI dealing with processing on the basis of legitimate interests where more information can be found.</p>"
            }
        }, {
            number: 19,
            id: "policyComplianceCheck_20",
            text: "Is the user able to review the list of Vendors, their Purposes, Special Purposes, Features, Special Features, associated Legal Bases, and a link to their privacy policy, as well as make granular choices per Purpose and per Vendor (when applicable)?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(c)(I).</p><p>Review:</p><ul><li>the list of named Vendors and a link to each Vendor\u2019s privacy policy,</li><li>their Purposes, Special Purposes, associated Legal Bases, and corresponding retention period,</li><li>their Features and Special Features, and</li><li>the categories of data collected and processed;</li></ul><p>Appendix B, Policy C(c)(II).</p><p>Review the list of Purposes, Special Purposes, Features, and Special Features including their standard name, their full standard user-friendly text, and where applicable their illustrations as defined in Appendix A, the number of Vendors seeking consent for each of the Purposes (which may also include Vendors not participating in the Framework), and have  a way to see those Vendors;</p><p>Appendix B, Policy C(c)(III).</p><p>Make granular and specific consent choices with respect to each Vendor, and, separately, each Purpose for which the Publisher chooses to obtain consent on behalf of or more Vendors.</p><p>Appendix B, Policy C(h).</p><p>By way of derogation from Appendix B, Policies C(c)(iii) and (iv) and C(d), a Publisher shall not be required to allow a user to make granular and specific consent or opt-in choices if the Publisher implements a way for the user to access its content without consenting through other means, for example by offering paid access that does not require consenting to any Purposes. For the avoidance of doubt, all other Policies remain applicable.</p>"
            }
        }, {
            number: 20,
            id: "policyComplianceCheck_21",
            text: "Does the 2nd layer allow users to make granular and specific opt-in choices with respect to each Special Feature (when applicable)?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(c)(IV).</p><p>Make granular and specific opt-in choices with respect to each Special Feature for which the Publisher chooses to obtain opt-ins on behalf of one or more Vendors.</p>"
            }
        }, {
            number: 21,
            id: "policyComplianceCheck_22",
            text: "Are user choices set to 'off' by default?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(d).</p><p>When a user accesses a layer, which will be a secondary layer when using a layered approach, allowing them to make granular and specific consent choices with respect to each Purpose, under Policy C(c)(III), and/or to make granular and specific opt-in choices with respect to each Special Feature under Policy C(c)(IV) the default choice must be \u201Cno consent\u201D, \u201Cno opt in\u201D or \u201Coff\u201D.</p>"
            }
        }, {
            number: 22,
            id: "policyComplianceCheck_23",
            text: "If legitimate interest is used by any Vendors as a legal basis, does the information in the 2nd layer specify the nature of processed information and its scope?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy D(c)(I).</p><p>See information about the fact that personal data is processed, and the nature of the personal data processed (e.g. unique identifiers, browsing data).</p><p>Appendix B, Policy D(c)(II).</p><p>See information about the scope of the legitimate interest processing and scope of any objection to such processing, i.e. service-specific scope, or group-specific scope. If group-specific scope, a link with information about the group.</p>"
            }
        }, {
            number: 23,
            id: "policyComplianceCheck_24",
            text: "If legitimate interest is used by any Vendors as a legal basis, does the 2nd layer allow users to object to the processing of their personal data, per Purpose and per Vendor?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy D(c)(III).</p><p>Access controls within the Framework UI to object to processing of their personal data on the basis of a legitimate interest.</p><p>Appendix B, Policy D(c)(V).</p><p>Exercise their right to object with respect to processing under a legitimate interest for each Vendor, and, separately, each Purpose for which the Publisher chooses to help establish Vendors transparency.</p>"
            }
        }, {
            number: 24,
            id: "policyComplianceCheck_25",
            text: "Does the 2nd UI layer provide information about Vendors' maximum device storage duration including whether such duration may be refreshed and, where applicable, additional purpose-specific storage?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(c)(VII).</p><p>Where applicable, review Vendors\u2019 maximum device storage duration and whether Vendors refresh such duration (by stating, for example, that \u201Cduration may expire [n] months/days from your last interaction with the property\u201D, where [n] represents the maximum duration for which the Vendor considers the user consent as valid) as well as, where available, review any additional purpose specific storage and access information provided by a Vendor in accordance with the Specifications.</p>"
            }
        }, {
            number: 25,
            id: "policyComplianceCheck_26",
            text: "Does the secondary layer show the number of Vendors seeking consent or relying on legitimate interest for each Purpose?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B: Policy C(c)(II).</p><p>Review the list of Purposes, Special Purposes, Features, and Special Features including their standard name and their full standard user-friendly text, as defined in Appendix A, the number of Vendors seeking consent for each of the Purposes (which may also include Vendors not participating in the Framework), and have a way to see those Vendors.</p><p>Appendix B: Policy D(c)(IV).</p><p>Review the list of Purposes and Special Purposes including their standard name, their full standard user-friendly text and where applicable their illustrations, as defined in Appendix A, the number of Vendors processing their data for each of the Purposes on the basis of legitimate interest (which may also include Vendors not participating in the Framework), and have a way to see those Vendors.</p>"
            }
        }, {
            number: 26,
            id: "policyComplianceCheck_27",
            text: "Does the secondary layer allow users to access Vendors\u2019 information about their legitimate interest at stake, where applicable?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B: Policy D(c)(VI)</p><p>Review:</p><ul><li>the list of named Vendors, and a link to each Vendor\u2019s privacy policy,</li><li>their Purposes, Special, Purposes, associated Legal Bases (and a link to each Vendor's explanation of its legitimate interest(s) at stake) and corresponding retention period,</li><li>their Features, Special Features and</li><li>the categories of data collected and processed</li></ul>"
            }
        }, {
            number: 27,
            id: "policyComplianceCheck_28",
            text: "Does the secondary layer provide information about Vendors' retention periods?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B: Policy C(c)(I)</p></p><p>Review:</p><ul><li>the list of named Vendors and a link to each Vendor\u2019s privacy policy,</li><li>their Purposes, Special Purposes, associated Legal Bases and corresponding retention period,</li><li>their Features and Special Features, and</li><li>the categories of data collected and processed</li></ul><p>Appendix B: Policy D(c)(VI)</p><p>Review:</p><ul><li>the list of named Vendors and a link to each Vendor\u2019s privacy policy,</li><li>their Purposes, Special, Purposes, associated Legal Bases (and a link to each  Vendor\u2019s explanation of its legitimate interest(s) at stake) and corresponding retention period,</li><li>their Features, Special Features, and</li><li>the categories of data collected and processed</li></ul>"
            }
        }, {
            number: 28,
            id: "policyComplianceCheck_29",
            text: "Does the secondary layer disclose the categories of data collected and/or already held by Vendors?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B, Policy C(c)(I)</p><p>Review:</p><ul><li>the list of named Vendors and a link to each Vendor\u2019s privacy policy,</li><li>their Purposes, Special Purposes, associated Legal Bases and corresponding retention period,</li><li>their Features and Special Features, and</li><li>the categories of data collected and processed</li></ul><p>Appendix B: Policy C(c)(VI)</p><p>Review:</p><ul><li>the list of named Vendors and a link to each Vendor\u2019s privacy policy,</li><li>their Purposes, Special, Purposes, associated Legal Bases (and a link to each  Vendor\u2019s explanation of its legitimate interest(s) at stake) and corresponding retention period,</li><li>their Features, Special Features and</li><li>the categories of data collected and processed</li></ul>"
            }
        }, {
            number: 29,
            id: "policyComplianceCheck_30",
            text: "If the secondary layer of the UI provides modified or additional illustrations about the Purposes and Special Purposes used by Vendors, is the UseNonStandardTexts flag set to 1?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Chapter IV: Policy for Publishers; 21(7).</p><p>A publisher must not modify or supplement, or instruct its CMP to modify or supplement, standard illustrations and/or their translations unless: (a) the Publisher follows any guidance that may be disseminated or updated by the MO so that the modified or additional illustrations provide accurate examples of data processing operations performed by Vendors under the Purposes; (b) the Publisher can modify only one of the two standard illustrations presented for each Purpose. Modifying the standard illustrations for Special Purposes and Purpose 1 (store and/or access information on a device) is not permitted; (c) Vendors are alerted to the fact of a Publisher using custom illustrations through the appropriate Signal in accordance with the Specification.</p>"
            }
        }, {
            number: 30,
            id: "policyComplianceCheck_31",
            text: "Is the user able to resurface the CMP UI easily?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B: Policy (C)(f).</p><p>A user must be able to resurface the Framework UI from an easily accessible link or call to action, such as a floating icon or a footer link available on each webpage of the Publisher\u2019s website, or from the top-level settings of the Publisher\u2019s app as to allow them to withdraw their consent as easily as it was to give it.</p>"
            }
        }, {
            number: 31,
            id: "policyComplianceCheck_32",
            text: "Is the user able to withdraw their consent as easily as they were able to give consent?",
            tooltip: "",
            automated: !1,
            additionalInformation: {
                manualSteps: "",
                policyReference: "<p>Appendix B: Policy (C)(f)</p><p>If a call to action for the user to express their consent for all Purposes and Vendors was provided in the Initial Layer of the Framework UIs used to request the user\u2019s consent (for example \u201CConsent to all\u201D), an equivalent call to action for the user to withdraw their consent for all Purposes and Vendors must be provided in the Framework UI that the user resurfaces (for example \u201CWithdraw consent to all\u201D).</p>"
            }
        }]
    }, {
        headerTitle: "CMP and TCF API check",
        subsections: !0,
        sectionId: "cmpTcfApiCheck",
        subsectionsList: [{
            number: 1,
            headerTitle: "CMP Information",
            checks: [{
                number: 1,
                id: "cmpTcfApiCheck_cmpInformation_cmpId",
                text: "CMP id:",
                automated: !0
            }, {
                number: 2,
                id: "cmpTcfApiCheck_cmpInformation_cmpIsCommercial",
                text: "CMP is commercial:",
                automated: !0
            }]
        }, {
            number: 2,
            headerTitle: "CMP API",
            checks: [{
                number: 1,
                id: "cmpTcfApiCheck_cmpApi_tcfVersion",
                text: "TCF Version:",
                automated: !0
            }, {
                number: 2,
                id: "cmpTcfApiCheck_cmpApi_tcfApiFound",
                text: "__tcfapi found:",
                automated: !0
            }, {
                number: 3,
                id: "cmpTcfApiCheck_cmpApi_tcfApiLocatorFound",
                text: "__tcfapiLocator found:",
                automated: !0
            }, {
                number: 4,
                id: "cmpTcfApiCheck_cmpApi_pingResponse",
                text: "ping response:",
                automated: !0
            }, {
                number: 5,
                id: "cmpTcfApiCheck_cmpApi_getTCDataResponse",
                text: "getTCData response:",
                automated: !0
            }, {
                number: 6,
                id: "cmpTcfApiCheck_cmpApi_addEventListenerResponse",
                text: "addEventListener response:",
                automated: !0
            }, {
                number: 7,
                id: "cmpTcfApiCheck_cmpApi_removeEventListenerResponse",
                text: "removeEventListener response:",
                automated: !0
            }, {
                number: 8,
                id: "cmpTcfApiCheck_cmpApi_getInAppTCDataResponse",
                text: "getInAppTCData response (optional):",
                automated: !0
            }, {
                number: 9,
                id: "cmpTcfApiCheck_cmpApi_getVendorListResponse",
                text: "getVendorList response (optional):",
                automated: !0
            }]
        }, {
            number: 3,
            headerTitle: "CMP API Ping",
            checks: [{
                number: 1,
                id: "cmpTcfApiCheck_cmpApiPing_cmpLoaded",
                text: "cmpLoaded:",
                automated: !0
            }, {
                number: 2,
                id: "cmpTcfApiCheck_cmpApiPing_gdprApplies",
                text: "gdprApplies:",
                automated: !0
            }, {
                number: 3,
                id: "cmpTcfApiCheck_cmpApiPing_cmpStatus",
                text: "CMP status:",
                automated: !0
            }, {
                number: 4,
                id: "cmpTcfApiCheck_cmpApiPing_displayStatus",
                text: "Display status:",
                automated: !0
            }]
        }]
    }, {
        headerTitle: "TC String Check",
        subsections: !0,
        sectionId: "tcStringCheck",
        subsectionsList: [{
            number: 1,
            headerTitle: "TC String - default (via CMP API)",
            checks: [{
                number: 1,
                id: "tcStringCheck_viaCmpApi_tcString",
                text: "",
                automated: !0
            }]
        }, {
            number: 2,
            headerTitle: "TC String - manual (paste a TC String below)",
            checks: [{
                number: 1,
                id: "tcStringCheck_viaManualPaste",
                text: "",
                automated: !0
            }]
        }]
    }, {
        headerTitle: "Purposes (Consent)",
        subsections: !1,
        sectionId: "purposeConsents",
        checks: []
    }, {
        headerTitle: "Purposes (Legitimate Interest)",
        subsections: !1,
        sectionId: "purposeLegitimateInterests",
        checks: []
    }, {
        headerTitle: "Special Features",
        subsections: !1,
        sectionId: "specialFeatures",
        checks: []
    }, {
        headerTitle: "Vendors (Consent)",
        subsections: !1,
        sectionId: "vendorConsents",
        checks: []
    }, {
        headerTitle: "Vendors (Legitimate Interest)",
        subsections: !1,
        sectionId: "vendorLegitimateInterests",
        checks: []
    }]
};
var Lr = {
    staticContent: vI,
    validatorContent: yI
};
class Sr extends Error {
    constructor(t) {
        super(t),
        this.name = "DecodingError"
    }
}
class zn extends Error {
    constructor(t) {
        super(t),
        this.name = "EncodingError"
    }
}
class vi extends Error {
    constructor(t) {
        super(t),
        this.name = "GVLError"
    }
}
class On extends Error {
    constructor(t, n, r="") {
        super(`invalid value ${n} passed for ${t} ${r}`),
        this.name = "TCModelError"
    }
}
class _r {
    static encode(t) {
        if (!/^[0-1]+$/.test(t))
            throw new zn("Invalid bitField");
        const n = t.length % this.LCM;
        t += n ? "0".repeat(this.LCM - n) : "";
        let r = "";
        for (let o = 0; o < t.length; o += this.BASIS)
            r += this.DICT[parseInt(t.substr(o, this.BASIS), 2)];
        return r
    }
    static decode(t) {
        if (!/^[A-Za-z0-9\-_]+$/.test(t))
            throw new Sr("Invalidly encoded Base64URL string");
        let n = "";
        for (let r = 0; r < t.length; r++) {
            const o = this.REVERSE_DICT.get(t[r]).toString(2);
            n += "0".repeat(this.BASIS - o.length) + o
        }
        return n
    }
}
T(_r, "DICT", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),
T(_r, "REVERSE_DICT", new Map([["A", 0], ["B", 1], ["C", 2], ["D", 3], ["E", 4], ["F", 5], ["G", 6], ["H", 7], ["I", 8], ["J", 9], ["K", 10], ["L", 11], ["M", 12], ["N", 13], ["O", 14], ["P", 15], ["Q", 16], ["R", 17], ["S", 18], ["T", 19], ["U", 20], ["V", 21], ["W", 22], ["X", 23], ["Y", 24], ["Z", 25], ["a", 26], ["b", 27], ["c", 28], ["d", 29], ["e", 30], ["f", 31], ["g", 32], ["h", 33], ["i", 34], ["j", 35], ["k", 36], ["l", 37], ["m", 38], ["n", 39], ["o", 40], ["p", 41], ["q", 42], ["r", 43], ["s", 44], ["t", 45], ["u", 46], ["v", 47], ["w", 48], ["x", 49], ["y", 50], ["z", 51], ["0", 52], ["1", 53], ["2", 54], ["3", 55], ["4", 56], ["5", 57], ["6", 58], ["7", 59], ["8", 60], ["9", 61], ["-", 62], ["_", 63]])),
T(_r, "BASIS", 6),
T(_r, "LCM", 24);
const Mn = class {
    has(t) {
        return Mn.langSet.has(t)
    }
    parseLanguage(t) {
        t = t.toUpperCase();
        const n = t.split("-")[0];
        if (t.length >= 2 && n.length == 2) {
            if (Mn.langSet.has(t))
                return t;
            if (Mn.langSet.has(n))
                return n;
            const r = n + "-" + n;
            if (Mn.langSet.has(r))
                return r;
            for (const o of Mn.langSet)
                if (o.indexOf(t) !== -1 || o.indexOf(n) !== -1)
                    return o
        }
        throw new Error(`unsupported language ${t}`)
    }
    forEach(t) {
        Mn.langSet.forEach(t)
    }
    get size() {
        return Mn.langSet.size
    }
}
;
let xa = Mn;
T(xa, "langSet", new Set(["AR", "BG", "BS", "CA", "CS", "DA", "DE", "EL", "EN", "ES", "ET", "EU", "FI", "FR", "GL", "HR", "HU", "IT", "JA", "LT", "LV", "MT", "NL", "NO", "PL", "PT-BR", "PT-PT", "RO", "RU", "SK", "SL", "SR-LATN", "SR-CYRL", "SV", "TR", "ZH"]));
class L {
}
T(L, "cmpId", "cmpId"),
T(L, "cmpVersion", "cmpVersion"),
T(L, "consentLanguage", "consentLanguage"),
T(L, "consentScreen", "consentScreen"),
T(L, "created", "created"),
T(L, "supportOOB", "supportOOB"),
T(L, "isServiceSpecific", "isServiceSpecific"),
T(L, "lastUpdated", "lastUpdated"),
T(L, "numCustomPurposes", "numCustomPurposes"),
T(L, "policyVersion", "policyVersion"),
T(L, "publisherCountryCode", "publisherCountryCode"),
T(L, "publisherCustomConsents", "publisherCustomConsents"),
T(L, "publisherCustomLegitimateInterests", "publisherCustomLegitimateInterests"),
T(L, "publisherLegitimateInterests", "publisherLegitimateInterests"),
T(L, "publisherConsents", "publisherConsents"),
T(L, "publisherRestrictions", "publisherRestrictions"),
T(L, "purposeConsents", "purposeConsents"),
T(L, "purposeLegitimateInterests", "purposeLegitimateInterests"),
T(L, "purposeOneTreatment", "purposeOneTreatment"),
T(L, "specialFeatureOptins", "specialFeatureOptins"),
T(L, "useNonStandardTexts", "useNonStandardTexts"),
T(L, "vendorConsents", "vendorConsents"),
T(L, "vendorLegitimateInterests", "vendorLegitimateInterests"),
T(L, "vendorListVersion", "vendorListVersion"),
T(L, "vendorsAllowed", "vendorsAllowed"),
T(L, "vendorsDisclosed", "vendorsDisclosed"),
T(L, "version", "version");
class Is {
    clone() {
        const t = new this.constructor;
        return Object.keys(this).forEach(r=>{
            const o = this.deepClone(this[r]);
            o !== void 0 && (t[r] = o)
        }
        ),
        t
    }
    deepClone(t) {
        const n = typeof t;
        if (n === "number" || n === "string" || n === "boolean")
            return t;
        if (t !== null && n === "object") {
            if (typeof t.clone == "function")
                return t.clone();
            if (t instanceof Date)
                return new Date(t.getTime());
            if (t[Symbol.iterator] !== void 0) {
                const r = [];
                for (const o of t)
                    r.push(this.deepClone(o));
                return t instanceof Array ? r : new t.constructor(r)
            } else {
                const r = {};
                for (const o in t)
                    t.hasOwnProperty(o) && (r[o] = this.deepClone(t[o]));
                return r
            }
        }
    }
}
var Rn;
(function(e) {
    e[e.NOT_ALLOWED = 0] = "NOT_ALLOWED",
    e[e.REQUIRE_CONSENT = 1] = "REQUIRE_CONSENT",
    e[e.REQUIRE_LI = 2] = "REQUIRE_LI"
}
)(Rn || (Rn = {}));
const qa = class extends Is {
    constructor(n, r) {
        super();
        T(this, "purposeId_");
        T(this, "restrictionType");
        n !== void 0 && (this.purposeId = n),
        r !== void 0 && (this.restrictionType = r)
    }
    static unHash(n) {
        const r = n.split(this.hashSeparator)
          , o = new qa;
        if (r.length !== 2)
            throw new On("hash",n);
        return o.purposeId = parseInt(r[0], 10),
        o.restrictionType = parseInt(r[1], 10),
        o
    }
    get hash() {
        if (!this.isValid())
            throw new Error("cannot hash invalid PurposeRestriction");
        return `${this.purposeId}${qa.hashSeparator}${this.restrictionType}`
    }
    get purposeId() {
        return this.purposeId_
    }
    set purposeId(n) {
        this.purposeId_ = n
    }
    isValid() {
        return Number.isInteger(this.purposeId) && this.purposeId > 0 && (this.restrictionType === Rn.NOT_ALLOWED || this.restrictionType === Rn.REQUIRE_CONSENT || this.restrictionType === Rn.REQUIRE_LI)
    }
    isSameAs(n) {
        return this.purposeId === n.purposeId && this.restrictionType === n.restrictionType
    }
}
;
let ar = qa;
T(ar, "hashSeparator", "-");
class By extends Is {
    constructor() {
        super(...arguments);
        T(this, "bitLength", 0);
        T(this, "map", new Map);
        T(this, "gvl_")
    }
    has(n) {
        return this.map.has(n)
    }
    isOkToHave(n, r, o) {
        var s;
        let i = !0;
        if ((s = this.gvl) != null && s.vendors) {
            const a = this.gvl.vendors[o];
            if (a)
                if (n === Rn.NOT_ALLOWED)
                    i = a.legIntPurposes.includes(r) || a.purposes.includes(r);
                else if (a.flexiblePurposes.length)
                    switch (n) {
                    case Rn.REQUIRE_CONSENT:
                        i = a.flexiblePurposes.includes(r) && a.legIntPurposes.includes(r);
                        break;
                    case Rn.REQUIRE_LI:
                        i = a.flexiblePurposes.includes(r) && a.purposes.includes(r);
                        break
                    }
                else
                    i = !1;
            else
                i = !1
        }
        return i
    }
    add(n, r) {
        if (this.isOkToHave(r.restrictionType, r.purposeId, n)) {
            const o = r.hash;
            this.has(o) || (this.map.set(o, new Set),
            this.bitLength = 0),
            this.map.get(o).add(n)
        }
    }
    restrictPurposeToLegalBasis(n) {
        const r = Array.from(this.gvl.vendorIds)
          , o = n.hash
          , i = r[r.length - 1]
          , s = [...Array(i).keys()].map(a=>a + 1);
        if (!this.has(o))
            this.map.set(o, new Set(s)),
            this.bitLength = 0;
        else
            for (let a = 1; a <= i; a++)
                this.map.get(o).add(a)
    }
    getVendors(n) {
        let r = [];
        if (n) {
            const o = n.hash;
            this.has(o) && (r = Array.from(this.map.get(o)))
        } else {
            const o = new Set;
            this.map.forEach(i=>{
                i.forEach(s=>{
                    o.add(s)
                }
                )
            }
            ),
            r = Array.from(o)
        }
        return r.sort((o,i)=>o - i)
    }
    getRestrictionType(n, r) {
        let o;
        return this.getRestrictions(n).forEach(i=>{
            i.purposeId === r && (o === void 0 || o > i.restrictionType) && (o = i.restrictionType)
        }
        ),
        o
    }
    vendorHasRestriction(n, r) {
        let o = !1;
        const i = this.getRestrictions(n);
        for (let s = 0; s < i.length && !o; s++)
            o = r.isSameAs(i[s]);
        return o
    }
    getMaxVendorId() {
        let n = 0;
        return this.map.forEach(r=>{
            n = Math.max(Array.from(r)[r.size - 1], n)
        }
        ),
        n
    }
    getRestrictions(n) {
        const r = [];
        return this.map.forEach((o,i)=>{
            n ? o.has(n) && r.push(ar.unHash(i)) : r.push(ar.unHash(i))
        }
        ),
        r
    }
    getPurposes() {
        const n = new Set;
        return this.map.forEach((r,o)=>{
            n.add(ar.unHash(o).purposeId)
        }
        ),
        Array.from(n)
    }
    remove(n, r) {
        const o = r.hash
          , i = this.map.get(o);
        i && (i.delete(n),
        i.size == 0 && (this.map.delete(o),
        this.bitLength = 0))
    }
    set gvl(n) {
        this.gvl_ || (this.gvl_ = n,
        this.map.forEach((r,o)=>{
            const i = ar.unHash(o);
            Array.from(r).forEach(a=>{
                this.isOkToHave(i.restrictionType, i.purposeId, a) || r.delete(a)
            }
            )
        }
        ))
    }
    get gvl() {
        return this.gvl_
    }
    isEmpty() {
        return this.map.size === 0
    }
    get numRestrictions() {
        return this.map.size
    }
}
var Zh;
(function(e) {
    e.COOKIE = "cookie",
    e.WEB = "web",
    e.APP = "app"
}
)(Zh || (Zh = {}));
var Me;
(function(e) {
    e.CORE = "core",
    e.VENDORS_DISCLOSED = "vendorsDisclosed",
    e.VENDORS_ALLOWED = "vendorsAllowed",
    e.PUBLISHER_TC = "publisherTC"
}
)(Me || (Me = {}));
class Ya {
}
T(Ya, "ID_TO_KEY", [Me.CORE, Me.VENDORS_DISCLOSED, Me.VENDORS_ALLOWED, Me.PUBLISHER_TC]),
T(Ya, "KEY_TO_ID", {
    [Me.CORE]: 0,
    [Me.VENDORS_DISCLOSED]: 1,
    [Me.VENDORS_ALLOWED]: 2,
    [Me.PUBLISHER_TC]: 3
});
class Mt extends Is {
    constructor() {
        super(...arguments);
        T(this, "bitLength", 0);
        T(this, "maxId_", 0);
        T(this, "set_", new Set)
    }
    *[Symbol.iterator]() {
        for (let n = 1; n <= this.maxId; n++)
            yield[n, this.has(n)]
    }
    values() {
        return this.set_.values()
    }
    get maxId() {
        return this.maxId_
    }
    has(n) {
        return this.set_.has(n)
    }
    unset(n) {
        Array.isArray(n) ? n.forEach(r=>this.unset(r)) : typeof n == "object" ? this.unset(Object.keys(n).map(r=>Number(r))) : (this.set_.delete(Number(n)),
        this.bitLength = 0,
        n === this.maxId && (this.maxId_ = 0,
        this.set_.forEach(r=>{
            this.maxId_ = Math.max(this.maxId, r)
        }
        )))
    }
    isIntMap(n) {
        let r = typeof n == "object";
        return r = r && Object.keys(n).every(o=>{
            let i = Number.isInteger(parseInt(o, 10));
            return i = i && this.isValidNumber(n[o].id),
            i = i && n[o].name !== void 0,
            i
        }
        ),
        r
    }
    isValidNumber(n) {
        return parseInt(n, 10) > 0
    }
    isSet(n) {
        let r = !1;
        return n instanceof Set && (r = Array.from(n).every(this.isValidNumber)),
        r
    }
    set(n) {
        if (Array.isArray(n))
            n.forEach(r=>this.set(r));
        else if (this.isSet(n))
            this.set(Array.from(n));
        else if (this.isIntMap(n))
            this.set(Object.keys(n).map(r=>Number(r)));
        else if (this.isValidNumber(n))
            this.set_.add(n),
            this.maxId_ = Math.max(this.maxId, n),
            this.bitLength = 0;
        else
            throw new On("set()",n,"must be positive integer array, positive integer, Set<number>, or IntMap")
    }
    empty() {
        this.set_ = new Set
    }
    forEach(n) {
        for (let r = 1; r <= this.maxId; r++)
            n(this.has(r), r)
    }
    get size() {
        return this.set_.size
    }
    setAll(n) {
        this.set(n)
    }
}
var r2, o2, i2, s2, a2, l2, u2, c2, d2, p2, f2, h2, m2, g2, v2, y2, x2, C2;
class z {
}
r2 = L.cmpId,
o2 = L.cmpVersion,
i2 = L.consentLanguage,
s2 = L.consentScreen,
a2 = L.created,
l2 = L.isServiceSpecific,
u2 = L.lastUpdated,
c2 = L.policyVersion,
d2 = L.publisherCountryCode,
p2 = L.publisherLegitimateInterests,
f2 = L.publisherConsents,
h2 = L.purposeConsents,
m2 = L.purposeLegitimateInterests,
g2 = L.purposeOneTreatment,
v2 = L.specialFeatureOptins,
y2 = L.useNonStandardTexts,
x2 = L.vendorListVersion,
C2 = L.version,
T(z, r2, 12),
T(z, o2, 12),
T(z, i2, 12),
T(z, s2, 6),
T(z, a2, 36),
T(z, l2, 1),
T(z, u2, 36),
T(z, c2, 6),
T(z, d2, 12),
T(z, p2, 24),
T(z, f2, 24),
T(z, h2, 24),
T(z, m2, 24),
T(z, g2, 1),
T(z, v2, 12),
T(z, y2, 1),
T(z, x2, 12),
T(z, C2, 6),
T(z, "anyBoolean", 1),
T(z, "encodingType", 1),
T(z, "maxId", 16),
T(z, "numCustomPurposes", 6),
T(z, "numEntries", 12),
T(z, "numRestrictions", 12),
T(z, "purposeId", 6),
T(z, "restrictionType", 2),
T(z, "segmentType", 3),
T(z, "singleOrRange", 1),
T(z, "vendorId", 16);
class Tn {
    static encode(t) {
        return String(Number(t))
    }
    static decode(t) {
        return t === "1"
    }
}
class se {
    static encode(t, n) {
        let r;
        if (typeof t == "string" && (t = parseInt(t, 10)),
        r = t.toString(2),
        r.length > n || t < 0)
            throw new zn(`${t} too large to encode into ${n}`);
        return r.length < n && (r = "0".repeat(n - r.length) + r),
        r
    }
    static decode(t, n) {
        if (n !== t.length)
            throw new Sr("invalid bit length");
        return parseInt(t, 2)
    }
}
class em {
    static encode(t, n) {
        return se.encode(Math.round(t.getTime() / 100), n)
    }
    static decode(t, n) {
        if (n !== t.length)
            throw new Sr("invalid bit length");
        const r = new Date;
        return r.setTime(se.decode(t, n) * 100),
        r
    }
}
class Jn {
    static encode(t, n) {
        let r = "";
        for (let o = 1; o <= n; o++)
            r += Tn.encode(t.has(o));
        return r
    }
    static decode(t, n) {
        if (t.length !== n)
            throw new Sr("bitfield encoding length mismatch");
        const r = new Mt;
        for (let o = 1; o <= n; o++)
            Tn.decode(t[o - 1]) && r.set(o);
        return r.bitLength = t.length,
        r
    }
}
class tm {
    static encode(t, n) {
        t = t.toUpperCase();
        const r = 65
          , o = t.charCodeAt(0) - r
          , i = t.charCodeAt(1) - r;
        if (o < 0 || o > 25 || i < 0 || i > 25)
            throw new zn(`invalid language code: ${t}`);
        if (n % 2 === 1)
            throw new zn(`numBits must be even, ${n} is not valid`);
        n = n / 2;
        const s = se.encode(o, n)
          , a = se.encode(i, n);
        return s + a
    }
    static decode(t, n) {
        let r;
        if (n === t.length && !(t.length % 2)) {
            const i = t.length / 2
              , s = se.decode(t.slice(0, i), i) + 65
              , a = se.decode(t.slice(i), i) + 65;
            r = String.fromCharCode(s) + String.fromCharCode(a)
        } else
            throw new Sr("invalid bit length for language");
        return r
    }
}
class xI {
    static encode(t) {
        let n = se.encode(t.numRestrictions, z.numRestrictions);
        if (!t.isEmpty()) {
            const r = (o,i)=>{
                for (let s = o + 1; s <= i; s++)
                    if (t.gvl.vendorIds.has(s))
                        return s;
                return o
            }
            ;
            t.getRestrictions().forEach(o=>{
                n += se.encode(o.purposeId, z.purposeId),
                n += se.encode(o.restrictionType, z.restrictionType);
                const i = t.getVendors(o)
                  , s = i.length;
                let a = 0
                  , l = 0
                  , u = "";
                for (let c = 0; c < s; c++) {
                    const f = i[c];
                    if (l === 0 && (a++,
                    l = f),
                    c === s - 1 || i[c + 1] > r(f, i[s - 1])) {
                        const p = f !== l;
                        u += Tn.encode(p),
                        u += se.encode(l, z.vendorId),
                        p && (u += se.encode(f, z.vendorId)),
                        l = 0
                    }
                }
                n += se.encode(a, z.numEntries),
                n += u
            }
            )
        }
        return n
    }
    static decode(t) {
        let n = 0;
        const r = new By
          , o = se.decode(t.substr(n, z.numRestrictions), z.numRestrictions);
        n += z.numRestrictions;
        for (let i = 0; i < o; i++) {
            const s = se.decode(t.substr(n, z.purposeId), z.purposeId);
            n += z.purposeId;
            const a = se.decode(t.substr(n, z.restrictionType), z.restrictionType);
            n += z.restrictionType;
            const l = new ar(s,a)
              , u = se.decode(t.substr(n, z.numEntries), z.numEntries);
            n += z.numEntries;
            for (let c = 0; c < u; c++) {
                const f = Tn.decode(t.substr(n, z.anyBoolean));
                n += z.anyBoolean;
                const p = se.decode(t.substr(n, z.vendorId), z.vendorId);
                if (n += z.vendorId,
                f) {
                    const v = se.decode(t.substr(n, z.vendorId), z.vendorId);
                    if (n += z.vendorId,
                    v < p)
                        throw new Sr(`Invalid RangeEntry: endVendorId ${v} is less than ${p}`);
                    for (let x = p; x <= v; x++)
                        r.add(x, l)
                } else
                    r.add(p, l)
            }
        }
        return r.bitLength = n,
        r
    }
}
var Ui;
(function(e) {
    e[e.FIELD = 0] = "FIELD",
    e[e.RANGE = 1] = "RANGE"
}
)(Ui || (Ui = {}));
class Ii {
    static encode(t) {
        const n = [];
        let r = [], o = se.encode(t.maxId, z.maxId), i = "", s;
        const a = z.maxId + z.encodingType
          , l = a + t.maxId
          , u = z.vendorId * 2 + z.singleOrRange + z.numEntries;
        let c = a + z.numEntries;
        return t.forEach((f,p)=>{
            i += Tn.encode(f),
            s = t.maxId > u && c < l,
            s && f && (t.has(p + 1) ? r.length === 0 && (r.push(p),
            c += z.singleOrRange,
            c += z.vendorId) : (r.push(p),
            c += z.vendorId,
            n.push(r),
            r = []))
        }
        ),
        s ? (o += String(Ui.RANGE),
        o += this.buildRangeEncoding(n)) : (o += String(Ui.FIELD),
        o += i),
        o
    }
    static decode(t, n) {
        let r, o = 0;
        const i = se.decode(t.substr(o, z.maxId), z.maxId);
        o += z.maxId;
        const s = se.decode(t.charAt(o), z.encodingType);
        if (o += z.encodingType,
        s === Ui.RANGE) {
            if (r = new Mt,
            n === 1) {
                if (t.substr(o, 1) === "1")
                    throw new Sr("Unable to decode default consent=1");
                o++
            }
            const a = se.decode(t.substr(o, z.numEntries), z.numEntries);
            o += z.numEntries;
            for (let l = 0; l < a; l++) {
                const u = Tn.decode(t.charAt(o));
                o += z.singleOrRange;
                const c = se.decode(t.substr(o, z.vendorId), z.vendorId);
                if (o += z.vendorId,
                u) {
                    const f = se.decode(t.substr(o, z.vendorId), z.vendorId);
                    o += z.vendorId;
                    for (let p = c; p <= f; p++)
                        r.set(p)
                } else
                    r.set(c)
            }
        } else {
            const a = t.substr(o, i);
            o += i,
            r = Jn.decode(a, i)
        }
        return r.bitLength = o,
        r
    }
    static buildRangeEncoding(t) {
        const n = t.length;
        let r = se.encode(n, z.numEntries);
        return t.forEach(o=>{
            const i = o.length === 1;
            r += Tn.encode(!i),
            r += se.encode(o[0], z.vendorId),
            i || (r += se.encode(o[1], z.vendorId))
        }
        ),
        r
    }
}
function nm() {
    return {
        [L.version]: se,
        [L.created]: em,
        [L.lastUpdated]: em,
        [L.cmpId]: se,
        [L.cmpVersion]: se,
        [L.consentScreen]: se,
        [L.consentLanguage]: tm,
        [L.vendorListVersion]: se,
        [L.policyVersion]: se,
        [L.isServiceSpecific]: Tn,
        [L.useNonStandardTexts]: Tn,
        [L.specialFeatureOptins]: Jn,
        [L.purposeConsents]: Jn,
        [L.purposeLegitimateInterests]: Jn,
        [L.purposeOneTreatment]: Tn,
        [L.publisherCountryCode]: tm,
        [L.vendorConsents]: Ii,
        [L.vendorLegitimateInterests]: Ii,
        [L.publisherRestrictions]: xI,
        segmentType: se,
        [L.vendorsDisclosed]: Ii,
        [L.vendorsAllowed]: Ii,
        [L.publisherConsents]: Jn,
        [L.publisherLegitimateInterests]: Jn,
        [L.numCustomPurposes]: se,
        [L.publisherCustomConsents]: Jn,
        [L.publisherCustomLegitimateInterests]: Jn
    }
}
class CI {
    constructor() {
        T(this, 1, {
            [Me.CORE]: [L.version, L.created, L.lastUpdated, L.cmpId, L.cmpVersion, L.consentScreen, L.consentLanguage, L.vendorListVersion, L.purposeConsents, L.vendorConsents]
        });
        T(this, 2, {
            [Me.CORE]: [L.version, L.created, L.lastUpdated, L.cmpId, L.cmpVersion, L.consentScreen, L.consentLanguage, L.vendorListVersion, L.policyVersion, L.isServiceSpecific, L.useNonStandardTexts, L.specialFeatureOptins, L.purposeConsents, L.purposeLegitimateInterests, L.purposeOneTreatment, L.publisherCountryCode, L.vendorConsents, L.vendorLegitimateInterests, L.publisherRestrictions],
            [Me.PUBLISHER_TC]: [L.publisherConsents, L.publisherLegitimateInterests, L.numCustomPurposes, L.publisherCustomConsents, L.publisherCustomLegitimateInterests],
            [Me.VENDORS_ALLOWED]: [L.vendorsAllowed],
            [Me.VENDORS_DISCLOSED]: [L.vendorsDisclosed]
        })
    }
}
class wI {
    constructor(t, n) {
        T(this, 1, [Me.CORE]);
        T(this, 2, [Me.CORE]);
        if (t.version === 2)
            if (t.isServiceSpecific)
                this[2].push(Me.PUBLISHER_TC);
            else {
                const r = !!(n && n.isForVendors);
                (!r || t[L.supportOOB] === !0) && this[2].push(Me.VENDORS_DISCLOSED),
                r && (t[L.supportOOB] && t[L.vendorsAllowed].size > 0 && this[2].push(Me.VENDORS_ALLOWED),
                this[2].push(Me.PUBLISHER_TC))
            }
    }
}
class Jc {
    static encode(t, n) {
        let r;
        try {
            r = this.fieldSequence[String(t.version)][n]
        } catch {
            throw new zn(`Unable to encode version: ${t.version}, segment: ${n}`)
        }
        let o = "";
        n !== Me.CORE && (o = se.encode(Ya.KEY_TO_ID[n], z.segmentType));
        const i = nm();
        return r.forEach(s=>{
            const a = t[s]
              , l = i[s];
            let u = z[s];
            u === void 0 && this.isPublisherCustom(s) && (u = Number(t[L.numCustomPurposes]));
            try {
                o += l.encode(a, u)
            } catch (c) {
                throw new zn(`Error encoding ${n}->${s}: ${c.message}`)
            }
        }
        ),
        _r.encode(o)
    }
    static decode(t, n, r) {
        const o = _r.decode(t);
        let i = 0;
        r === Me.CORE && (n.version = se.decode(o.substr(i, z[L.version]), z[L.version])),
        r !== Me.CORE && (i += z.segmentType);
        const s = this.fieldSequence[String(n.version)][r]
          , a = nm();
        return s.forEach(l=>{
            const u = a[l];
            let c = z[l];
            if (c === void 0 && this.isPublisherCustom(l) && (c = Number(n[L.numCustomPurposes])),
            c !== 0) {
                const f = o.substr(i, c);
                if (u === Ii ? n[l] = u.decode(f, n.version) : n[l] = u.decode(f, c),
                Number.isInteger(c))
                    i += c;
                else if (Number.isInteger(n[l].bitLength))
                    i += n[l].bitLength;
                else
                    throw new Sr(l)
            }
        }
        ),
        n
    }
    static isPublisherCustom(t) {
        return t.indexOf("publisherCustom") === 0
    }
}
T(Jc, "fieldSequence", new CI);
class Fy {
    static process(t, n) {
        const r = t.gvl;
        if (!r)
            throw new zn("Unable to encode TCModel without a GVL");
        if (!r.isReady)
            throw new zn("Unable to encode TCModel tcModel.gvl.readyPromise is not resolved");
        t = t.clone(),
        t.consentLanguage = r.language.slice(0, 2).toUpperCase(),
        (n == null ? void 0 : n.version) > 0 && (n == null ? void 0 : n.version) <= this.processor.length ? t.version = n.version : t.version = this.processor.length;
        const o = t.version - 1;
        if (!this.processor[o])
            throw new zn(`Invalid version: ${t.version}`);
        return this.processor[o](t, r)
    }
}
T(Fy, "processor", [t=>t, (t,n)=>{
    t.publisherRestrictions.gvl = n,
    t.purposeLegitimateInterests.unset([1, 3, 4, 5, 6]);
    const r = new Map;
    return r.set("legIntPurposes", t.vendorLegitimateInterests),
    r.set("purposes", t.vendorConsents),
    r.forEach((o,i)=>{
        o.forEach((s,a)=>{
            if (s) {
                const l = n.vendors[a];
                if (!l || l.deletedDate)
                    o.unset(a);
                else if (l[i].length === 0 && !(i === "legIntPurposes" && l.purposes.length === 0 && l.legIntPurposes.length === 0 && l.specialPurposes.length > 0))
                    if (t.isServiceSpecific)
                        if (l.flexiblePurposes.length === 0)
                            o.unset(a);
                        else {
                            const u = t.publisherRestrictions.getRestrictions(a);
                            let c = !1;
                            for (let f = 0, p = u.length; f < p && !c; f++)
                                c = u[f].restrictionType === Rn.REQUIRE_CONSENT && i === "purposes" || u[f].restrictionType === Rn.REQUIRE_LI && i === "legIntPurposes";
                            c || o.unset(a)
                        }
                    else
                        o.unset(a)
            }
        }
        )
    }
    ),
    t.vendorsDisclosed.set(n.vendors),
    t
}
]);
class AI {
    static absCall(t, n, r, o) {
        return new Promise((i,s)=>{
            const a = new XMLHttpRequest
              , l = ()=>{
                if (a.readyState == XMLHttpRequest.DONE)
                    if (a.status >= 200 && a.status < 300) {
                        let p = a.response;
                        if (typeof p == "string")
                            try {
                                p = JSON.parse(p)
                            } catch {}
                        i(p)
                    } else
                        s(new Error(`HTTP Status: ${a.status} response type: ${a.responseType}`))
            }
              , u = ()=>{
                s(new Error("error"))
            }
              , c = ()=>{
                s(new Error("aborted"))
            }
              , f = ()=>{
                s(new Error("Timeout " + o + "ms " + t))
            }
            ;
            a.withCredentials = r,
            a.addEventListener("load", l),
            a.addEventListener("error", u),
            a.addEventListener("abort", c),
            n === null ? a.open("GET", t, !0) : a.open("POST", t, !0),
            a.responseType = "json",
            a.timeout = o,
            a.ontimeout = f,
            a.send(n)
        }
        )
    }
    static post(t, n, r=!1, o=0) {
        return this.absCall(t, JSON.stringify(n), r, o)
    }
    static fetch(t, n=!1, r=0) {
        return this.absCall(t, null, n, r)
    }
}
const pe = class extends Is {
    constructor(n) {
        super();
        T(this, "readyPromise");
        T(this, "gvlSpecificationVersion");
        T(this, "vendorListVersion");
        T(this, "tcfPolicyVersion");
        T(this, "lastUpdated");
        T(this, "purposes");
        T(this, "specialPurposes");
        T(this, "features");
        T(this, "specialFeatures");
        T(this, "isReady_", !1);
        T(this, "vendors_");
        T(this, "vendorIds");
        T(this, "fullVendorList");
        T(this, "byPurposeVendorMap");
        T(this, "bySpecialPurposeVendorMap");
        T(this, "byFeatureVendorMap");
        T(this, "bySpecialFeatureVendorMap");
        T(this, "stacks");
        T(this, "dataCategories");
        T(this, "lang_");
        T(this, "cacheLang_");
        T(this, "isLatest", !1);
        let r = pe.baseUrl;
        if (this.lang_ = pe.DEFAULT_LANGUAGE,
        this.cacheLang_ = pe.DEFAULT_LANGUAGE,
        this.isVendorList(n))
            this.populate(n),
            this.readyPromise = Promise.resolve();
        else {
            if (!r)
                throw new vi("must specify GVL.baseUrl before loading GVL json");
            if (n > 0) {
                const o = n;
                pe.CACHE.has(o) ? (this.populate(pe.CACHE.get(o)),
                this.readyPromise = Promise.resolve()) : (r += pe.versionedFilename.replace("[VERSION]", String(o)),
                this.readyPromise = this.fetchJson(r))
            } else
                pe.CACHE.has(pe.LATEST_CACHE_KEY) ? (this.populate(pe.CACHE.get(pe.LATEST_CACHE_KEY)),
                this.readyPromise = Promise.resolve()) : (this.isLatest = !0,
                this.readyPromise = this.fetchJson(r + pe.latestFilename))
        }
    }
    static set baseUrl(n) {
        if (/^https?:\/\/vendorlist\.consensu\.org\//.test(n))
            throw new vi("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");
        n.length > 0 && n[n.length - 1] !== "/" && (n += "/"),
        this.baseUrl_ = n
    }
    static get baseUrl() {
        return this.baseUrl_
    }
    static emptyLanguageCache(n) {
        let r = !1;
        return n == null && pe.LANGUAGE_CACHE.size > 0 ? (pe.LANGUAGE_CACHE = new Map,
        r = !0) : typeof n == "string" && this.consentLanguages.has(n.toUpperCase()) && (pe.LANGUAGE_CACHE.delete(n.toUpperCase()),
        r = !0),
        r
    }
    static emptyCache(n) {
        let r = !1;
        return Number.isInteger(n) && n >= 0 ? (pe.CACHE.delete(n),
        r = !0) : n === void 0 && (pe.CACHE = new Map,
        r = !0),
        r
    }
    cacheLanguage() {
        pe.LANGUAGE_CACHE.has(this.cacheLang_) || pe.LANGUAGE_CACHE.set(this.cacheLang_, {
            purposes: this.purposes,
            specialPurposes: this.specialPurposes,
            features: this.features,
            specialFeatures: this.specialFeatures,
            stacks: this.stacks,
            dataCategories: this.dataCategories
        })
    }
    async fetchJson(n) {
        try {
            this.populate(await AI.fetch(n))
        } catch (r) {
            throw new vi(r.message)
        }
    }
    getJson() {
        return JSON.parse(JSON.stringify({
            gvlSpecificationVersion: this.gvlSpecificationVersion,
            vendorListVersion: this.vendorListVersion,
            tcfPolicyVersion: this.tcfPolicyVersion,
            lastUpdated: this.lastUpdated,
            purposes: this.purposes,
            specialPurposes: this.specialPurposes,
            features: this.features,
            specialFeatures: this.specialFeatures,
            stacks: this.stacks,
            dataCategories: this.dataCategories,
            vendors: this.fullVendorList
        }))
    }
    async changeLanguage(n) {
        let r = n;
        try {
            r = pe.consentLanguages.parseLanguage(n)
        } catch (i) {
            throw new vi("Error during parsing the language: " + i.message)
        }
        const o = n.toUpperCase();
        if (!(r.toLowerCase() === pe.DEFAULT_LANGUAGE.toLowerCase() && !pe.LANGUAGE_CACHE.has(o)) && r !== this.lang_)
            if (this.lang_ = r,
            pe.LANGUAGE_CACHE.has(o)) {
                const i = pe.LANGUAGE_CACHE.get(o);
                for (const s in i)
                    i.hasOwnProperty(s) && (this[s] = i[s])
            } else {
                const i = pe.baseUrl + pe.languageFilename.replace("[LANG]", this.lang_.toLowerCase());
                try {
                    await this.fetchJson(i),
                    this.cacheLang_ = o,
                    this.cacheLanguage()
                } catch (s) {
                    throw new vi("unable to load language: " + s.message)
                }
            }
    }
    get language() {
        return this.lang_
    }
    isVendorList(n) {
        return n !== void 0 && n.vendors !== void 0
    }
    populate(n) {
        this.purposes = n.purposes,
        this.specialPurposes = n.specialPurposes,
        this.features = n.features,
        this.specialFeatures = n.specialFeatures,
        this.stacks = n.stacks,
        this.dataCategories = n.dataCategories,
        this.isVendorList(n) && (this.gvlSpecificationVersion = n.gvlSpecificationVersion,
        this.tcfPolicyVersion = n.tcfPolicyVersion,
        this.vendorListVersion = n.vendorListVersion,
        this.lastUpdated = n.lastUpdated,
        typeof this.lastUpdated == "string" && (this.lastUpdated = new Date(this.lastUpdated)),
        this.vendors_ = n.vendors,
        this.fullVendorList = n.vendors,
        this.mapVendors(),
        this.isReady_ = !0,
        this.isLatest && pe.CACHE.set(pe.LATEST_CACHE_KEY, this.getJson()),
        pe.CACHE.has(this.vendorListVersion) || pe.CACHE.set(this.vendorListVersion, this.getJson())),
        this.cacheLanguage()
    }
    mapVendors(n) {
        this.byPurposeVendorMap = {},
        this.bySpecialPurposeVendorMap = {},
        this.byFeatureVendorMap = {},
        this.bySpecialFeatureVendorMap = {},
        Object.keys(this.purposes).forEach(r=>{
            this.byPurposeVendorMap[r] = {
                legInt: new Set,
                consent: new Set,
                flexible: new Set
            }
        }
        ),
        Object.keys(this.specialPurposes).forEach(r=>{
            this.bySpecialPurposeVendorMap[r] = new Set
        }
        ),
        Object.keys(this.features).forEach(r=>{
            this.byFeatureVendorMap[r] = new Set
        }
        ),
        Object.keys(this.specialFeatures).forEach(r=>{
            this.bySpecialFeatureVendorMap[r] = new Set
        }
        ),
        Array.isArray(n) || (n = Object.keys(this.fullVendorList).map(r=>+r)),
        this.vendorIds = new Set(n),
        this.vendors_ = n.reduce((r,o)=>{
            const i = this.vendors_[String(o)];
            return i && i.deletedDate === void 0 && (i.purposes.forEach(s=>{
                this.byPurposeVendorMap[String(s)].consent.add(o)
            }
            ),
            i.specialPurposes.forEach(s=>{
                this.bySpecialPurposeVendorMap[String(s)].add(o)
            }
            ),
            i.legIntPurposes.forEach(s=>{
                this.byPurposeVendorMap[String(s)].legInt.add(o)
            }
            ),
            i.flexiblePurposes && i.flexiblePurposes.forEach(s=>{
                this.byPurposeVendorMap[String(s)].flexible.add(o)
            }
            ),
            i.features.forEach(s=>{
                this.byFeatureVendorMap[String(s)].add(o)
            }
            ),
            i.specialFeatures.forEach(s=>{
                this.bySpecialFeatureVendorMap[String(s)].add(o)
            }
            ),
            r[o] = i),
            r
        }
        , {})
    }
    getFilteredVendors(n, r, o, i) {
        const s = n.charAt(0).toUpperCase() + n.slice(1);
        let a;
        const l = {};
        return n === "purpose" && o ? a = this["by" + s + "VendorMap"][String(r)][o] : a = this["by" + (i ? "Special" : "") + s + "VendorMap"][String(r)],
        a.forEach(u=>{
            l[String(u)] = this.vendors[String(u)]
        }
        ),
        l
    }
    getVendorsWithConsentPurpose(n) {
        return this.getFilteredVendors("purpose", n, "consent")
    }
    getVendorsWithLegIntPurpose(n) {
        return this.getFilteredVendors("purpose", n, "legInt")
    }
    getVendorsWithFlexiblePurpose(n) {
        return this.getFilteredVendors("purpose", n, "flexible")
    }
    getVendorsWithSpecialPurpose(n) {
        return this.getFilteredVendors("purpose", n, void 0, !0)
    }
    getVendorsWithFeature(n) {
        return this.getFilteredVendors("feature", n)
    }
    getVendorsWithSpecialFeature(n) {
        return this.getFilteredVendors("feature", n, void 0, !0)
    }
    get vendors() {
        return this.vendors_
    }
    narrowVendorsTo(n) {
        this.mapVendors(n)
    }
    get isReady() {
        return this.isReady_
    }
    clone() {
        const n = new pe(this.getJson());
        return this.lang_ !== pe.DEFAULT_LANGUAGE && n.changeLanguage(this.lang_),
        n
    }
    static isInstanceOf(n) {
        return typeof n == "object" && typeof n.narrowVendorsTo == "function"
    }
}
;
let yt = pe;
T(yt, "LANGUAGE_CACHE", new Map),
T(yt, "CACHE", new Map),
T(yt, "LATEST_CACHE_KEY", 0),
T(yt, "DEFAULT_LANGUAGE", "EN"),
T(yt, "consentLanguages", new xa),
T(yt, "baseUrl_"),
T(yt, "latestFilename", "vendor-list.json"),
T(yt, "versionedFilename", "archives/vendor-list-v[VERSION].json"),
T(yt, "languageFilename", "purposes-[LANG].json");
class _y extends Is {
    constructor(n) {
        super();
        T(this, "isServiceSpecific_", !1);
        T(this, "supportOOB_", !0);
        T(this, "useNonStandardTexts_", !1);
        T(this, "purposeOneTreatment_", !1);
        T(this, "publisherCountryCode_", "AA");
        T(this, "version_", 2);
        T(this, "consentScreen_", 0);
        T(this, "policyVersion_", 4);
        T(this, "consentLanguage_", "EN");
        T(this, "cmpId_", 0);
        T(this, "cmpVersion_", 0);
        T(this, "vendorListVersion_", 0);
        T(this, "numCustomPurposes_", 0);
        T(this, "gvl_");
        T(this, "created");
        T(this, "lastUpdated");
        T(this, "specialFeatureOptins", new Mt);
        T(this, "purposeConsents", new Mt);
        T(this, "purposeLegitimateInterests", new Mt);
        T(this, "publisherConsents", new Mt);
        T(this, "publisherLegitimateInterests", new Mt);
        T(this, "publisherCustomConsents", new Mt);
        T(this, "publisherCustomLegitimateInterests", new Mt);
        T(this, "customPurposes");
        T(this, "vendorConsents", new Mt);
        T(this, "vendorLegitimateInterests", new Mt);
        T(this, "vendorsDisclosed", new Mt);
        T(this, "vendorsAllowed", new Mt);
        T(this, "publisherRestrictions", new By);
        n && (this.gvl = n),
        this.updated()
    }
    set gvl(n) {
        yt.isInstanceOf(n) || (n = new yt(n)),
        this.gvl_ = n,
        this.publisherRestrictions.gvl = n
    }
    get gvl() {
        return this.gvl_
    }
    set cmpId(n) {
        if (n = Number(n),
        Number.isInteger(n) && n > 1)
            this.cmpId_ = n;
        else
            throw new On("cmpId",n)
    }
    get cmpId() {
        return this.cmpId_
    }
    set cmpVersion(n) {
        if (n = Number(n),
        Number.isInteger(n) && n > -1)
            this.cmpVersion_ = n;
        else
            throw new On("cmpVersion",n)
    }
    get cmpVersion() {
        return this.cmpVersion_
    }
    set consentScreen(n) {
        if (n = Number(n),
        Number.isInteger(n) && n > -1)
            this.consentScreen_ = n;
        else
            throw new On("consentScreen",n)
    }
    get consentScreen() {
        return this.consentScreen_
    }
    set consentLanguage(n) {
        this.consentLanguage_ = n
    }
    get consentLanguage() {
        return this.consentLanguage_
    }
    set publisherCountryCode(n) {
        if (/^([A-z]){2}$/.test(n))
            this.publisherCountryCode_ = n.toUpperCase();
        else
            throw new On("publisherCountryCode",n)
    }
    get publisherCountryCode() {
        return this.publisherCountryCode_
    }
    set vendorListVersion(n) {
        if (n = Number(n) >> 0,
        n < 0)
            throw new On("vendorListVersion",n);
        this.vendorListVersion_ = n
    }
    get vendorListVersion() {
        return this.gvl ? this.gvl.vendorListVersion : this.vendorListVersion_
    }
    set policyVersion(n) {
        if (this.policyVersion_ = parseInt(n, 10),
        this.policyVersion_ < 0)
            throw new On("policyVersion",n)
    }
    get policyVersion() {
        return this.gvl ? this.gvl.tcfPolicyVersion : this.policyVersion_
    }
    set version(n) {
        this.version_ = parseInt(n, 10)
    }
    get version() {
        return this.version_
    }
    set isServiceSpecific(n) {
        this.isServiceSpecific_ = n
    }
    get isServiceSpecific() {
        return this.isServiceSpecific_
    }
    set useNonStandardTexts(n) {
        this.useNonStandardTexts_ = n
    }
    get useNonStandardTexts() {
        return this.useNonStandardTexts_
    }
    set supportOOB(n) {
        this.supportOOB_ = n
    }
    get supportOOB() {
        return this.supportOOB_
    }
    set purposeOneTreatment(n) {
        this.purposeOneTreatment_ = n
    }
    get purposeOneTreatment() {
        return this.purposeOneTreatment_
    }
    setAllVendorConsents() {
        this.vendorConsents.set(this.gvl.vendors)
    }
    unsetAllVendorConsents() {
        this.vendorConsents.empty()
    }
    setAllVendorsDisclosed() {
        this.vendorsDisclosed.set(this.gvl.vendors)
    }
    unsetAllVendorsDisclosed() {
        this.vendorsDisclosed.empty()
    }
    setAllVendorsAllowed() {
        this.vendorsAllowed.set(this.gvl.vendors)
    }
    unsetAllVendorsAllowed() {
        this.vendorsAllowed.empty()
    }
    setAllVendorLegitimateInterests() {
        this.vendorLegitimateInterests.set(this.gvl.vendors)
    }
    unsetAllVendorLegitimateInterests() {
        this.vendorLegitimateInterests.empty()
    }
    setAllPurposeConsents() {
        this.purposeConsents.set(this.gvl.purposes)
    }
    unsetAllPurposeConsents() {
        this.purposeConsents.empty()
    }
    setAllPurposeLegitimateInterests() {
        this.purposeLegitimateInterests.set(this.gvl.purposes)
    }
    unsetAllPurposeLegitimateInterests() {
        this.purposeLegitimateInterests.empty()
    }
    setAllSpecialFeatureOptins() {
        this.specialFeatureOptins.set(this.gvl.specialFeatures)
    }
    unsetAllSpecialFeatureOptins() {
        this.specialFeatureOptins.empty()
    }
    setAll() {
        this.setAllVendorConsents(),
        this.setAllPurposeLegitimateInterests(),
        this.setAllSpecialFeatureOptins(),
        this.setAllPurposeConsents(),
        this.setAllVendorLegitimateInterests()
    }
    unsetAll() {
        this.unsetAllVendorConsents(),
        this.unsetAllPurposeLegitimateInterests(),
        this.unsetAllSpecialFeatureOptins(),
        this.unsetAllPurposeConsents(),
        this.unsetAllVendorLegitimateInterests()
    }
    get numCustomPurposes() {
        let n = this.numCustomPurposes_;
        if (typeof this.customPurposes == "object") {
            const r = Object.keys(this.customPurposes).sort((o,i)=>Number(o) - Number(i));
            n = parseInt(r.pop(), 10)
        }
        return n
    }
    set numCustomPurposes(n) {
        if (this.numCustomPurposes_ = parseInt(n, 10),
        this.numCustomPurposes_ < 0)
            throw new On("numCustomPurposes",n)
    }
    updated() {
        const n = new Date
          , r = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()));
        this.created = r,
        this.lastUpdated = r
    }
}
T(_y, "consentLanguages", yt.consentLanguages);
class Zc {
    static encode(t, n) {
        let r = "", o;
        return t = Fy.process(t, n),
        Array.isArray(n == null ? void 0 : n.segments) ? o = n.segments : o = new wI(t,n)["" + t.version],
        o.forEach((i,s)=>{
            let a = "";
            s < o.length - 1 && (a = "."),
            r += Jc.encode(t, i) + a
        }
        ),
        r
    }
    static decode(t, n) {
        const r = t.split(".")
          , o = r.length;
        n || (n = new _y);
        for (let i = 0; i < o; i++) {
            const s = r[i]
              , l = _r.decode(s.charAt(0)).substr(0, z.segmentType)
              , u = Ya.ID_TO_KEY[se.decode(l, z.segmentType).toString()];
            Jc.decode(s, n, u)
        }
        return n
    }
}
const Co = {
    TECHNICAL_COMPLIANCE_CHECK: "technicalComplianceCheck",
    POLICE_COMPLIANCE_CHECK: "policyComplianceCheck",
    CMP_TCF_API_CHECK: "cmpTcfApiCheck"
}
  , Op = e=>{
    const t = {}
      , {vendorList: n, cmpList: r, pingData: o, structure: i, tcData: s} = e;
    if (o)
        t.cmpId = o.cmpId,
        t.cmpVersion = o.cmpVersion,
        t.tcfApiVersion = o.apiVersion,
        t.tcfPolicyVersion = o.tcfPolicyVersion,
        t.gdprApplies = o.gdprApplies;
    else if (s) {
        t.cmpId = s.cmpId,
        t.cmpVersion = s.cmpVersion ? s.cmpVersion : null,
        t.tcfPolicyVersion = s.tcfPolicyVersion ? s.tcfPolicyVersion : null,
        t.gdprApplies = s.gdprApplies ? s.gdprApplies : null;
        const a = s.tcString ? s.tcString : ""
          , l = a ? Zc.decode(a) : void 0;
        l && (t.tcfApiVersion = l.version_ ? l.version_ : null)
    }
    if (r && t.cmpId && (t.cmpFound = r.cmps[t.cmpId] ? r.cmps[t.cmpId].name : "NOT FOUND"),
    i && s && e.technicalComplianceCheck) {
        const a = i.find(v=>v.sectionId === Co.TECHNICAL_COMPLIANCE_CHECK)
          , l = RI(a, e.technicalComplianceCheck);
        t.technicalComplianceCheck = {
            ...l,
            textGiven: a.headerTitle + " passed: " + l.passed + " failed: " + l.fails + " to do: " + l.to_do
        };
        const u = i.find(v=>v.sectionId === Co.POLICE_COMPLIANCE_CHECK)
          , c = TI(u);
        t.policeComplianceCheck = {
            ...c,
            textGiven: u.headerTitle + " passed: " + c.passed + " failed: " + c.fails + " to do: " + c.to_do
        };
        const f = s.purpose;
        if (f) {
            const v = kI(f, n);
            "" + v.objected;
            let x = ""
              , g = "";
            v.consentAll ? x = "The user " + v.consentAll + " for all purposes" : x = "Number of purposes the user has expressed consent for: " + v.consentGiven,
            v.rejectAll ? g = "The user " + v.rejectAll + " to the use of legitimate interest for all purposes!" : g = "Number of purposes the user objected to the use of legitimate interest: " + v.objectedLegitimateInterest,
            t.purposes = {
                ...v,
                textConsent: x,
                textLegitimedInterest: g
            }
        }
        const p = II(s.specialFeatureOptins);
        if (p.consentAll) {
            const v = "The user " + p.consentAll + " special features!";
            t.specialFeatures = {
                ...p,
                textConsent: v
            }
        } else {
            const v = "Number of special features the user has expressed consent for: " + p.consentGiven;
            t.specialFeatures = {
                ...p,
                textGiven: v
            }
        }
        if (s.tcString) {
            const v = Zc.decode(s.tcString)
              , x = {
                consentGiven: v.vendorConsents.size,
                legitimated: v.vendorLegitimateInterests.size
            };
            if (n) {
                const g = new yt(n);
                let P = 0
                  , m = 0;
                for (const [h,d] of Object.entries(g.vendors))
                    !d.deletedDate && d.legIntPurposes.length > 0 && P++,
                    !d.deletedDate && d.specialPurposes.length > 0 && d.purposes.length === 0 && d.legIntPurposes.length === 0 && d.flexiblePurposes.length === 0 && m++;
                x.objected = P + m - x.legitimated
            }
            t.vendors = {
                ...x,
                textConsent: "Number of vendors the user has expressed consent for: " + x.consentGiven,
                textLegitimedInterest: "Number of vendors the user agreed to the use of legitimate interest: " + x.legitimated
            }
        }
    }
    return t
}
  , bI = (e,t,n,r,o,i)=>{
    var E, S;
    const s = t != null && t.tcString ? t.tcString : ""
      , a = s ? Zc.decode(s) : void 0;
    let l = null
      , u = null;
    if (a && a.created && a.lastUpdated) {
        const I = new Date(a.created)
          , R = new Date(a.lastUpdated);
        l = I.getTime() === R.getTime(),
        u = I.getSeconds() === 0 && R.getSeconds() === 0
    }
    const c = !!(o.pingResponse && o.addEventListenerResponse && o.removeEventListenerResponse);
    let f = null;
    const p = e != null && e.cmpId ? e.cmpId : void 0
      , v = t != null && t.cmpId ? t.cmpId : void 0;
    let x = p || v;
    x && (f = !!n.cmps[x]);
    let g = -1;
    a ? g = a.vendorListVersion_ : e && e.gvlVersion && (g = e.gvlVersion);
    let P = null;
    typeof g == "number" && g >= 0 && (P = g > 0 && g <= r.vendorListVersion);
    let m = null;
    g >= 0 && (m = g >= r.vendorListVersion - 1);
    let h = null;
    const d = Object.keys(r.vendors).map(I=>parseInt(I));
    a && (h = a.vendorConsents.maxId <= d[d.length - 1] && a.vendorLegitimateInterests.maxId <= d[d.length - 1]);
    let y = null;
    t && t.tcString && t.purpose && t.purpose.legitimateInterests && (y = !t.purpose.legitimateInterests[1] && !t.purpose.legitimateInterests[3] && !t.purpose.legitimateInterests[4] && !t.purpose.legitimateInterests[5] && !t.purpose.legitimateInterests[6]);
    let A = null;
    if (t && t.tcString) {
        const I = SI(i, r)
          , R = (E = t == null ? void 0 : t.vendor) != null && E.consents ? t.vendor.consents : {}
          , k = (S = t == null ? void 0 : t.vendor) != null && S.legitimateInterests ? t.vendor.legitimateInterests : {};
        A = I.map(O=>(R[O] === void 0 || R[O] === !1) && (k[O] === void 0 || k[O] === !1)).every(O=>O === !0)
    }
    return {
        technicalComplianceCheck_4: c,
        technicalComplianceCheck_5: f,
        technicalComplianceCheck_6: P,
        technicalComplianceCheck_7: m,
        technicalComplianceCheck_8: h,
        technicalComplianceCheck_9: y,
        technicalComplianceCheck_10: l,
        technicalComplianceCheck_11: u,
        technicalComplianceCheck_12: A
    }
}
  , SI = (e,t)=>e.vendorListVersion !== t.vendorListVersion ? rm(e) : rm(t)
  , rm = e=>{
    const t = []
      , n = Object.keys(e.vendors);
    for (let r = 1; r <= n[n.length - 1]; r++)
        (!e.vendors[r] || e.vendors[r].deletedDate) && t.push(r);
    return t
}
  , EI = (e,t,n,r)=>{
    const o = e != null && e.cmpId ? e.cmpId : void 0
      , i = t != null && t.cmpId ? t.cmpId : void 0;
    let s = o || i;
    s || (s = -1);
    const a = e != null && e.tcfPolicyVersion ? e.tcfPolicyVersion : null
      , l = t != null && t.tcfPolicyVersion ? t.tcfPolicyVersion : null
      , u = a || l
      , c = {
        cmpId: s,
        cmpIsCommercial: n.cmps[s] ? n.cmps[s].isCommercial : !1,
        cmpApiTcfVersion: u
    }
      , f = {
        tcfApiFound: r.tcfApi,
        tcfApiLocatorFound: r.tcfApiLocator,
        pingResponse: r.pingResponse,
        addEventListenerResponse: r.addEventListenerResponse,
        removeEventListenerResponse: r.removeEventListenerResponse,
        getInAppTCDataResponse: r.getInAppTcDataResponse,
        getVendorListResponse: r.getVendorListResponse
    }
      , p = {
        cmpLoaded: e != null && e.cmpLoaded ? e.cmpLoaded : null,
        gdprApplies: e != null && e.gdprApplies ? e.gdprApplies : null,
        cmpStatus: e != null && e.cmpStatus ? e.cmpStatus : null,
        displayStatus: e != null && e.displayStatus ? e.displayStatus : null
    };
    return {
        cmpInformation: c,
        cmpApi: f,
        cmpApiPing: p
    }
}
  , om = e=>({
    viaCmpApi: {
        tcString: e,
        byteSize: new Blob([e]).size
    }
})
  , PI = (e,t)=>e && t ? {
    comparison: e === t,
    byteSize: new Blob([t]).size
} : null
  , II = e=>{
    let t = null
      , n = 0
      , r = !0;
    if (e && Object.keys(e).length === 0)
        return t = "rejected consent for any",
        {
            consentGiven: n,
            consentAll: t
        };
    for (let o in e)
        e[o];
    for (let o in e)
        e[o] ? n += 1 : r = !1;
    return r && (n < 2 ? t = null : t = "expressed consent for all"),
    {
        consentGiven: n,
        consentAll: t
    }
}
  , kI = (e,t)=>{
    const n = [1, 3, 4, 5, 6]
      , r = e.consents
      , o = e.legitimateInterests;
    let i = null
      , s = null
      , a = 0
      , l = 0
      , u = !0
      , c = !0;
    for (let p in r)
        r[p] ? a += 1 : u = !1;
    for (let p = 1; p <= t.purposes.length; p++)
        n.includes(p) === !1 && (o[p] || (l += 1,
        c = !1));
    return u && (a < t.purposes.length ? i = null : i = "has expressed consent"),
    r && Object.keys(r).length === 0 && (i = "rejected consent"),
    c && (s = "did not object"),
    o && Object.keys(o).length === 0 && (s = "objected"),
    {
        consentGiven: a,
        objectedLegitimateInterest: l,
        consentAll: i,
        rejectAll: s
    }
}
  , RI = (e,t)=>{
    let n = 0
      , r = 0
      , o = 0;
    return e.checks.forEach(i=>{
        if (i.automated) {
            const s = t[i.id];
            s == null && (o += 1),
            s === !0 && (r += 1),
            s === !1 && (n += 1)
        } else
            i.response == null && (o += 1),
            i.response === !0 && (r += 1),
            i.response === !1 && (n += 1)
    }
    ),
    {
        fails: n,
        passed: r,
        to_do: o
    }
}
  , TI = e=>{
    let t = 0
      , n = 0
      , r = 0;
    return e.checks.forEach(i=>{
        i.response == null && (r += 1),
        i.response === !0 && (n += 1),
        i.response === !1 && (t += 1)
    }
    ),
    {
        fails: t,
        passed: n,
        to_do: r
    }
}
  , Ro = e=>{
    switch (e) {
    case !0:
        return "Passed";
    case !1:
        return "Failed";
    case null:
        return "Incomplete";
    case void 0:
        return "Incomplete";
    default:
        return "Incomplete"
    }
}
  , NI = (e,t)=>{
    let n = !0
      , r = !1;
    const o = [];
    return e.checks.forEach(i=>{
        const s = i.text.replace(/, /g, "-");
        let a;
        i.automated ? (a = typeof t[i.id] == "boolean" ? Ro(t[i.id]) : "Automatic check was not executed",
        t[i.id] === !1 && n && (n = !1),
        t[i.id] == null && !r && (r = !0)) : (a = typeof i.response == "boolean" ? Ro(i.response) : "Manual check was not executed",
        i.response === !1 && n && (n = !1),
        i.response == null && !r && (r = !0));
        const l = {
            number: i.number,
            text: s,
            response: a
        };
        o.push(l)
    }
    ),
    r ? [...[{
        text: ""
    }, {
        text: e.headerTitle.toUpperCase(),
        response: "Incomplete"
    }, {
        text: ""
    }], ...o] : [...[{
        text: ""
    }, {
        text: e.headerTitle.toUpperCase(),
        response: Ro(n)
    }, {
        text: ""
    }], ...o]
}
  , LI = e=>{
    let t = !0
      , n = !1;
    const r = [];
    return e.checks.forEach(o=>{
        const i = o.text.replace(/, /g, "-");
        let s = null
          , a = null
          , l = typeof o.response == "boolean" ? Ro(o.response) : "Manual check was not executed";
        if (o.response === !1 && t && (t = !1),
        o.response == null && !n && (n = !0),
        i.length > 180) {
            a = i.slice(0, 95),
            s = i.slice(95);
            const u = {
                number: o.number,
                text: a,
                response: l
            }
              , c = {
                number: "",
                text: s,
                response: ""
            };
            r.push(u),
            r.push(c)
        } else {
            a = i;
            const u = {
                number: o.number,
                text: a,
                response: l
            };
            r.push(u)
        }
    }
    ),
    n ? [...[{
        text: ""
    }, {
        text: e.headerTitle.toUpperCase(),
        response: "Incomplete"
    }, {
        text: ""
    }], ...r] : [...[{
        text: ""
    }, {
        text: e.headerTitle.toUpperCase(),
        response: Ro(t)
    }, {
        text: ""
    }], ...r]
}
  , OI = (e,t)=>{
    const n = [{
        text: ""
    }, {
        text: e.headerTitle.toUpperCase()
    }, {
        text: ""
    }];
    return e.subsectionsList.forEach(r=>{
        const o = {
            text: r.headerTitle
        };
        n.push(o),
        n.push({
            text: ""
        }),
        r.checks.forEach(i=>{
            const s = i.id.split("_")
              , a = t[s[1]][s[2]]
              , l = typeof a == "boolean" ? a.toString() : a;
            if (i.id !== "cmpTcfApiCheck_cmpApi_getTCDataResponse" && i.id !== "cmpTcfApiCheck_cmpApi_tcfVersion") {
                const u = {
                    number: "",
                    text: i.text,
                    response: l
                };
                n.push(u)
            }
        }
        )
    }
    ),
    n
}
  , MI = e=>{
    const t = Op(e)
      , n = Lr.validatorContent.summary.checks
      , r = [{
        text: "SUMMARY"
    }, {
        text: ""
    }];
    return Object.keys(n).forEach(o=>{
        if (typeof t[o] !== Object) {
            const i = {
                number: "",
                text: n[o] + ": " + t[o],
                response: ""
            };
            r.push(i)
        }
    }
    ),
    Object.values(t).forEach(o=>{
        if (typeof o == "object") {
            if (o.textGiven) {
                const i = {
                    number: "",
                    text: o.textGiven,
                    response: ""
                };
                r.push(i)
            }
            if (o.textConsent) {
                const i = {
                    number: "",
                    text: o.textConsent,
                    response: ""
                };
                r.push(i)
            }
            if (o.textLegitimedInterest) {
                const i = {
                    number: "",
                    text: o.textLegitimedInterest,
                    response: ""
                };
                r.push(i)
            }
        }
    }
    ),
    r
}
  , BI = (e,t)=>{
    var f;
    const n = [{
        text: ""
    }, {
        text: "TC String check"
    }, {
        text: ""
    }];
    n.push({
        text: "TC String (via CMP API)"
    });
    let r = "Gdpr applies: false"
      , o = "0";
    (f = e.viaCmpApi) != null && f.tcString && (r = e.viaCmpApi.tcString,
    o = e.viaCmpApi.byteSize);
    const i = {
        text: r
    }
      , s = {
        text: o + " bytes"
    };
    n.push(i),
    n.push(s);
    let a = "0"
      , l = "TC String manual check";
    t ? a = t.byteSize + " bytes" : a = "0 bytes";
    const u = {
        number: "",
        text: l,
        response: Ro(t == null ? void 0 : t.comparison)
    }
      , c = {
        number: "",
        text: a,
        response: ""
    };
    return n.push({
        text: " "
    }),
    n.push(u),
    n.push(c),
    n
}
  , FI = function(e) {
    const t = encodeURI(e)
      , n = document.createElement("a");
    n.setAttribute("href", t),
    n.setAttribute("download", "complianceResult.csv"),
    n.click()
}
  , _I = function(e) {
    const n = [["Id", "Compliance Check Name", "Result"]].concat(e.map(o=>[o.number, o.text, o.response]));
    let r = "data:text/csv;charset=utf-8,";
    return n.forEach(o=>{
        r += o.map(s=>s && s.length > 0 ? '"' + s + '"' : s).join(",") + `\r
`
    }
    ),
    r
}
  , DI = async e=>{
    const t = MI(e)
      , n = e.structure.find(f=>f.sectionId === Co.TECHNICAL_COMPLIANCE_CHECK)
      , r = NI(n, e.technicalComplianceCheck)
      , o = e.structure.find(f=>f.sectionId === Co.POLICE_COMPLIANCE_CHECK)
      , i = LI(o)
      , s = e.structure.find(f=>f.sectionId === Co.CMP_TCF_API_CHECK)
      , a = e[Co.CMP_TCF_API_CHECK]
      , l = OI(s, a)
      , u = BI(e.tcStringCheck, e.manualCheckTcString)
      , c = _I([...t, ...r, ...i, ...l, ...u]);
    FI(c)
}
  , zI = ()=>{
    const e = [];
    return Lr.validatorContent.sections.forEach(n=>{
        var o;
        const r = n;
        (o = n.checks) == null || o.forEach(i=>{
            i.response = null
        }
        ),
        e.push(r)
    }
    ),
    {
        structure: e
    }
}
  , Be = {
    setResponse: "setResponse",
    setCmpList: "setCmpList",
    setVendorList: "setVendorList",
    setPing: "setPing",
    setTcData: "setTcData",
    setCmpCommands: "setCmpCommands",
    updateSummary: "updateSummary",
    setManualTcStringCheck: "setManualTcStringCheck",
    setVendorListByGvlVersion: "setVendorListByGvlVersion"
}
  , $I = (e,t)=>{
    switch (t.type) {
    case Be.updateSummary:
        return Yn(e);
    case Be.setPing:
        return Yn({
            ...e,
            pingData: t.payload
        });
    case Be.setTcData:
        return Yn({
            ...e,
            tcData: t.payload
        });
    case Be.setCmpList:
        return Yn({
            ...e,
            cmpList: {
                ...t.payload
            }
        });
    case Be.setVendorList:
        return Yn({
            ...e,
            vendorList: {
                ...t.payload
            }
        });
    case Be.setVendorListByGvlVersion:
        return Yn({
            ...e,
            vendorListByGvlVersion: {
                ...t.payload
            }
        });
    case Be.setCmpCommands:
        return e.cmpCommands || (e.cmpCommands = {}),
        e.cmpCommands = Object.assign(e.cmpCommands, t.payload),
        Yn(e);
    case Be.setManualTcStringCheck:
        return Yn({
            ...e,
            manualCheckTcString: {
                ...t.payload
            }
        });
    default:
        return e
    }
}
  , Yn = e=>{
    if (!e.tcData || !e.cmpList || !e.vendorList || !e.cmpCommands || !e.vendorListByGvlVersion)
        return e;
    const t = bI(e.pingData, e.tcData, e.cmpList, e.vendorList, e.cmpCommands, e.vendorListByGvlVersion)
      , n = EI(e.pingData, e.tcData, e.cmpList, e.cmpCommands)
      , r = e.tcData ? om(e.tcData.tcString) : {};
    e.tcData && om(e.tcData.tcString);
    const o = Op(e);
    return {
        ...e,
        technicalComplianceCheck: t,
        cmpTcfApiCheck: n,
        tcStringCheck: r,
        summaryValues: o
    }
}
  , Jo = C.exports.createContext()
  , VI = zI()
  , im = ({children: e})=>{
    const [t,n] = C.exports.useReducer($I, VI);
    return b(Jo.Provider, {
        value: [t, n],
        children: e
    })
}
  , UI = C.exports.createContext();
var sm = UI;
function jI(e) {
    return ve("MuiGrid", e)
}
const HI = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  , WI = ["column-reverse", "column", "row-reverse", "row"]
  , QI = ["nowrap", "wrap-reverse", "wrap"]
  , yi = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  , hs = ye("MuiGrid", ["root", "container", "item", "zeroMinWidth", ...HI.map(e=>`spacing-xs-${e}`), ...WI.map(e=>`direction-xs-${e}`), ...QI.map(e=>`wrap-xs-${e}`), ...yi.map(e=>`grid-xs-${e}`), ...yi.map(e=>`grid-sm-${e}`), ...yi.map(e=>`grid-md-${e}`), ...yi.map(e=>`grid-lg-${e}`), ...yi.map(e=>`grid-xl-${e}`)])
  , GI = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function To(e) {
    const t = parseFloat(e);
    return `${t}${String(e).replace(String(t), "") || "px"}`
}
function KI({theme: e, ownerState: t}) {
    let n;
    return e.breakpoints.keys.reduce((r,o)=>{
        let i = {};
        if (t[o] && (n = t[o]),
        !n)
            return r;
        if (n === !0)
            i = {
                flexBasis: 0,
                flexGrow: 1,
                maxWidth: "100%"
            };
        else if (n === "auto")
            i = {
                flexBasis: "auto",
                flexGrow: 0,
                flexShrink: 0,
                maxWidth: "none",
                width: "auto"
            };
        else {
            const s = $l({
                values: t.columns,
                breakpoints: e.breakpoints.values
            })
              , a = typeof s == "object" ? s[o] : s;
            if (a == null)
                return r;
            const l = `${Math.round(n / a * 1e8) / 1e6}%`;
            let u = {};
            if (t.container && t.item && t.columnSpacing !== 0) {
                const c = e.spacing(t.columnSpacing);
                if (c !== "0px") {
                    const f = `calc(${l} + ${To(c)})`;
                    u = {
                        flexBasis: f,
                        maxWidth: f
                    }
                }
            }
            i = w({
                flexBasis: l,
                flexGrow: 0,
                maxWidth: l
            }, u)
        }
        return e.breakpoints.values[o] === 0 ? Object.assign(r, i) : r[e.breakpoints.up(o)] = i,
        r
    }
    , {})
}
function XI({theme: e, ownerState: t}) {
    const n = $l({
        values: t.direction,
        breakpoints: e.breakpoints.values
    });
    return Vt({
        theme: e
    }, n, r=>{
        const o = {
            flexDirection: r
        };
        return r.indexOf("column") === 0 && (o[`& > .${hs.item}`] = {
            maxWidth: "none"
        }),
        o
    }
    )
}
function Dy({breakpoints: e, values: t}) {
    let n = "";
    Object.keys(t).forEach(o=>{
        n === "" && t[o] !== 0 && (n = o)
    }
    );
    const r = Object.keys(e).sort((o,i)=>e[o] - e[i]);
    return r.slice(0, r.indexOf(n))
}
function YI({theme: e, ownerState: t}) {
    const {container: n, rowSpacing: r} = t;
    let o = {};
    if (n && r !== 0) {
        const i = $l({
            values: r,
            breakpoints: e.breakpoints.values
        });
        let s;
        typeof i == "object" && (s = Dy({
            breakpoints: e.breakpoints.values,
            values: i
        })),
        o = Vt({
            theme: e
        }, i, (a,l)=>{
            var u;
            const c = e.spacing(a);
            return c !== "0px" ? {
                marginTop: `-${To(c)}`,
                [`& > .${hs.item}`]: {
                    paddingTop: To(c)
                }
            } : (u = s) != null && u.includes(l) ? {} : {
                marginTop: 0,
                [`& > .${hs.item}`]: {
                    paddingTop: 0
                }
            }
        }
        )
    }
    return o
}
function qI({theme: e, ownerState: t}) {
    const {container: n, columnSpacing: r} = t;
    let o = {};
    if (n && r !== 0) {
        const i = $l({
            values: r,
            breakpoints: e.breakpoints.values
        });
        let s;
        typeof i == "object" && (s = Dy({
            breakpoints: e.breakpoints.values,
            values: i
        })),
        o = Vt({
            theme: e
        }, i, (a,l)=>{
            var u;
            const c = e.spacing(a);
            return c !== "0px" ? {
                width: `calc(100% + ${To(c)})`,
                marginLeft: `-${To(c)}`,
                [`& > .${hs.item}`]: {
                    paddingLeft: To(c)
                }
            } : (u = s) != null && u.includes(l) ? {} : {
                width: "100%",
                marginLeft: 0,
                [`& > .${hs.item}`]: {
                    paddingLeft: 0
                }
            }
        }
        )
    }
    return o
}
function JI(e, t, n={}) {
    if (!e || e <= 0)
        return [];
    if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
        return [n[`spacing-xs-${String(e)}`]];
    const r = [];
    return t.forEach(o=>{
        const i = e[o];
        Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`])
    }
    ),
    r
}
const ZI = Y("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e
          , {container: r, direction: o, item: i, spacing: s, wrap: a, zeroMinWidth: l, breakpoints: u} = n;
        let c = [];
        r && (c = JI(s, u, t));
        const f = [];
        return u.forEach(p=>{
            const v = n[p];
            v && f.push(t[`grid-${p}-${String(v)}`])
        }
        ),
        [t.root, r && t.container, i && t.item, l && t.zeroMinWidth, ...c, o !== "row" && t[`direction-xs-${String(o)}`], a !== "wrap" && t[`wrap-xs-${String(a)}`], ...f]
    }
})(({ownerState: e})=>w({
    boxSizing: "border-box"
}, e.container && {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
}, e.item && {
    margin: 0
}, e.zeroMinWidth && {
    minWidth: 0
}, e.wrap !== "wrap" && {
    flexWrap: e.wrap
}), XI, YI, qI, KI);
function ek(e, t) {
    if (!e || e <= 0)
        return [];
    if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
        return [`spacing-xs-${String(e)}`];
    const n = [];
    return t.forEach(r=>{
        const o = e[r];
        if (Number(o) > 0) {
            const i = `spacing-${r}-${String(o)}`;
            n.push(i)
        }
    }
    ),
    n
}
const tk = e=>{
    const {classes: t, container: n, direction: r, item: o, spacing: i, wrap: s, zeroMinWidth: a, breakpoints: l} = e;
    let u = [];
    n && (u = ek(i, l));
    const c = [];
    l.forEach(p=>{
        const v = e[p];
        v && c.push(`grid-${p}-${String(v)}`)
    }
    );
    const f = {
        root: ["root", n && "container", o && "item", a && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, s !== "wrap" && `wrap-xs-${String(s)}`, ...c]
    };
    return we(f, jI, t)
}
  , nk = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiGrid"
    })
      , {breakpoints: o} = qo()
      , i = yy(r)
      , {className: s, columns: a, columnSpacing: l, component: u="div", container: c=!1, direction: f="row", item: p=!1, rowSpacing: v, spacing: x=0, wrap: g="wrap", zeroMinWidth: P=!1} = i
      , m = q(i, GI)
      , h = v || x
      , d = l || x
      , y = C.exports.useContext(sm)
      , A = c ? a || 12 : y
      , E = {}
      , S = w({}, m);
    o.keys.forEach(k=>{
        m[k] != null && (E[k] = m[k],
        delete S[k])
    }
    );
    const I = w({}, i, {
        columns: A,
        container: c,
        direction: f,
        item: p,
        rowSpacing: h,
        columnSpacing: d,
        wrap: g,
        zeroMinWidth: P,
        spacing: x
    }, E, {
        breakpoints: o.keys
    })
      , R = tk(I);
    return b(sm.Provider, {
        value: A,
        children: b(ZI, w({
            ownerState: I,
            className: ee(R.root, s),
            as: u,
            ref: n
        }, S))
    })
});
var ke = nk;
function rk({data: e}) {
    var i, s, a;
    const [t,n] = C.exports.useContext(Jo)
      , [r,o] = C.exports.useState(!1);
    return C.exports.useEffect(()=>{
        const l = Op(t);
        o(l)
    }
    , [t.summaryValues]),
    j("div", {
        className: "summary",
        children: [b("span", {
            className: "titles",
            children: e.header
        }), (r == null ? void 0 : r.cmpId) && j(ke, {
            container: !0,
            spacing: 1,
            className: "summary-content",
            children: [Object.keys(e.checks).map(l=>b(ke, {
                div: !0,
                xs: 6,
                md: 6,
                children: typeof r[l] !== Object && j("div", {
                    children: [j("span", {
                        className: "summary-label",
                        children: [" ", e.checks[l]]
                    }), ":", j("span", {
                        className: r[l] == !1 ? "content-values-error" : "content-values",
                        children: [" ", typeof r[l] == "boolean" ? r[l].toString() : r[l]]
                    })]
                })
            })), b(ke, {
                div: !0,
                xs: 12,
                children: b("br", {})
            }), (r == null ? void 0 : r.technicalComplianceCheck) && b(ke, {
                div: !0,
                xs: 12,
                children: j("div", {
                    children: [b("span", {
                        className: "summary-label",
                        children: "Technical Compliance Checks passed: "
                    }), b("span", {
                        className: "content-values",
                        children: " " + r.technicalComplianceCheck.passed
                    }), ",", b("span", {
                        className: "summary-label",
                        children: " failed: "
                    }), j("span", {
                        className: "content-values",
                        children: [" ", " " + r.technicalComplianceCheck.fails]
                    }), ",", b("span", {
                        className: "summary-label",
                        children: " to do: "
                    }), b("span", {
                        className: "content-values",
                        children: " " + r.technicalComplianceCheck.to_do
                    })]
                })
            }), (r == null ? void 0 : r.policeComplianceCheck) && b(ke, {
                div: !0,
                xs: 12,
                children: j("div", {
                    children: [b("span", {
                        className: "summary-label",
                        children: "Policy Compliance Checks passed:"
                    }), b("span", {
                        className: "content-values",
                        children: " " + r.policeComplianceCheck.passed
                    }), ",", b("span", {
                        className: "summary-label",
                        children: " failed:"
                    }), j("span", {
                        className: "content-values",
                        children: [" ", " " + r.policeComplianceCheck.fails]
                    }), ",", b("span", {
                        className: "summary-label",
                        children: " to do: "
                    }), b("span", {
                        className: "content-values",
                        children: " " + r.policeComplianceCheck.to_do
                    })]
                })
            }), (r == null ? void 0 : r.purposes) && j(mn, {
                children: [b(ke, {
                    div: !0,
                    xs: 12,
                    children: (i = r == null ? void 0 : r.purposes) != null && i.consentAll ? b("div", {
                        children: j("span", {
                            className: "summary-label",
                            children: ["The user ", b("b", {
                                children: " " + r.purposes.consentAll
                            }), "  for all purposes!"]
                        })
                    }) : j("div", {
                        children: [b("span", {
                            className: "summary-label",
                            children: "Number of purposes the user has expressed consent for:"
                        }), b("span", {
                            className: "content-values",
                            children: " " + r.purposes.consentGiven
                        })]
                    })
                }), b(ke, {
                    div: !0,
                    xs: 12,
                    children: (s = r == null ? void 0 : r.purposes) != null && s.rejectAll ? b("div", {
                        children: j("span", {
                            className: "summary-label",
                            children: ["The user ", b("b", {
                                children: " " + r.purposes.rejectAll
                            }), " to the use of legitimate interest for all purposes!"]
                        })
                    }) : j("div", {
                        children: [b("span", {
                            className: "summary-label",
                            children: "Number of purposes the user objected to the use of legitimate interest:"
                        }), b("span", {
                            className: "content-values",
                            children: " " + r.purposes.objectedLegitimateInterest
                        })]
                    })
                })]
            }), (r == null ? void 0 : r.specialFeatures) && b(ke, {
                div: !0,
                xs: 12,
                children: (a = r == null ? void 0 : r.specialFeatures) != null && a.consentAll ? b("div", {
                    children: j("span", {
                        className: "summary-label",
                        children: ["The user ", b("b", {
                            children: " " + r.specialFeatures.consentAll
                        }), " special features!"]
                    })
                }) : j("div", {
                    children: [b("span", {
                        className: "summary-label",
                        children: "Number of special features the user has expressed consent for:"
                    }), b("span", {
                        className: "content-values",
                        children: " " + r.specialFeatures.consentGiven
                    })]
                })
            }), (r == null ? void 0 : r.vendors) && j(mn, {
                children: [b(ke, {
                    div: !0,
                    xs: 12,
                    children: j("div", {
                        children: [b("span", {
                            className: "summary-label",
                            children: "Number of vendors the user has expressed consent for:"
                        }), b("span", {
                            className: "content-values",
                            children: " " + r.vendors.consentGiven
                        })]
                    })
                }), b(ke, {
                    div: !0,
                    xs: 12,
                    children: j("div", {
                        children: [b("span", {
                            className: "summary-label",
                            children: "Number of vendors the user agreed to the use of legitimate interest:"
                        }), b("span", {
                            className: "content-values",
                            children: " " + r.vendors.legitimated
                        })]
                    })
                })]
            })]
        })]
    })
}
const ok = async e=>{
    await fetch("https://vendor-list.consensu.org/v3/vendor-list.json").then(t=>t.json()).then(t=>{
        e({
            type: Be.setVendorList,
            payload: t
        })
    }
    ).catch(t=>t)
}
  , ik = async e=>{
    await fetch("https://cmp-list.consensu.org/v2/cmp-list.json").then(t=>t.json()).then(t=>{
        e({
            type: Be.setCmpList,
            payload: t
        })
    }
    ).catch(t=>t)
}
  , sk = async e=>{
    const t = await ak();
    await fetch(`https://vendor-list.consensu.org/v3/archives/vendor-list-v${t}.json`).then(n=>n.json()).then(n=>{
        e({
            type: Be.setVendorListByGvlVersion,
            payload: n
        })
    }
    ).catch(n=>n)
}
  , ak = async()=>new Promise(e=>{
    window.__tcfapi || e(-1),
    window.__tcfapi("ping", 2, t=>{
        e(t.gvlVersion)
    }
    )
}
)
  , am = e=>e.replace(/(?:^\w|[A-Z]|\b\w)/g, function(n, r) {
    return r === 0 ? n.toLowerCase() : n.toUpperCase()
}).replace(/\s+/g, "")
  , ea = e=>{
    var t = /[A-Z]{1}/.exec(e);
    let n = 0;
    t && (n = t.index);
    let r = e.substring(0, n)
      , o = e.substring(n);
    return {
        firstWord: r,
        secondWord: o
    }
}
;
var zu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAHKCAMAAABCPQOHAAAAnFBMVEUAAAABgwEBkgEBmQEBnwEBoAEBnwEBogEBowEBpAEBowEBpAEBpAEBpQEBpAEBpQEBpQEBpQEBpQEBpgEBpQEBpQEBpgEBpQEBpgEBpgEBpgEBpQEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgEBpgGsoH9MAAAAM3RSTlMABAYKDhIWGiAlKS0xNz1ES1FYXmRrcXd8gYaLkJWaoKerr7a8wsjM0NXb3+To7PH1+fy8be7+AAAOQUlEQVR4Ae3Bh3rqSroE0JJENtFkMGAbMCZKqN7/3ea7Z+bOnLCDQ//QDbUWJEjNZzeGkBB1MjqxL0MC1MvpxKkKCdCYbmQNSHiiGd3I25DwJC90pAcJT2FNR8aQ8JTf6cgcEp7qno4sI0hw6kc68pZAgtNM6ciuCAlOO6MjxwokON2cjqR1SHAGdOXcggRnQme6kNBEczozgoQmfqYzc0hokiWdWUaQwBTWdGaTQAJT2tCZfRkSmPKWzpxqkMBU93Tm3IQE5uFIZ/JHSGAaJ7ozhASmldKdGSQw7YzuvEaQsHTOdOctgYSlm9OdXQkSll5Od041SFgGdOjchIRlRJceIWGZ0KURJCxPdGkBCcuMLq1iSEiiOV3aFiAhiRZ06ViBhCR6pktpHRKS+IUu5W1ISOIlnepDQpIs6dQTJCTJik69RpCAJCs6tUkgAUnWdOpQhgQkWdOptA4JSGFNp/I2JCCFNd0aQAJSeKNbM0hACm90axlBwlF4o1vbAiQchTe6daxAwlF4o1tZAxKOwpqOPULCkazp2AgSjmRNxxaQcCQrOraOIcFIVnRsX4QEI1nRsbQGCUa8pGN5GxKM+JWuDSDBiF7o2hwSjOiZrq1iSCiiBV3bFSHBmNO1UxUSjBldy1uQYEzpXB8SjAmde4IEY0jnlhEkFH06ty1AQtGjc6cqJBSPOV3LW5BQtM90rg8JRetM52aQUDQzOreKIYFopHRuV4QEonaic2kNEojKgc7lbUggynu6N4QEorilewtIIApvdO8tgYQhWdG9QxkShuiV7mV1SBiiBQ08QgIxo4EJJBBjGlhGkDD0aWBXhIThMad7aQ0ShvaZ7uVtSBgaGQ2MIGF4ONHACyQMlQMNvCeQIJR2NHCqQIJQ2NBA3oIEIV7RQh8ShOiZFhaQMDzRwlsMCcKQFg5lSBC6tHBuQILQPtNCDxKERkYLc0gQaidaeIshISjvaeFYhoSgsKGFcxMSgnhJE31IEBY0MYcEYUwTbzEkBD2aOJYhIWjntHBuQkLQyGiiDwlB5UgTC0gIijua2CSQACRrmjhVICF4pom8BQnBhDZGkBD0aeMVEoJ2ThO7AiQA9ZQm0hokAOUDbTxCAlB4p40nSACiFW2sI0gA5rRxKEECMKCNcwMSgE5OG31IAOoZbSwgASgfaOM9gfiv8E4baRXiv2hJIx1IAJ5oZAoJQJ9G1hHEf62cNo4liP9qKW3kTYj/ijsaGUL8F69o5BUSgDmN7AoQ//VpJHuA+K+V00gX4r9aSiNziP+KOxrZJBDvxSsaOVUg/pvRShvivz6tTCH+a55pZB1DvFc50cixDPFe8k4jeQviveiVVsYQ/41pZRVBvPdIK4cSxHv1jEbyJsR7pT2tDCHei1a0soT474lW9kWI97q0cm5AvNfIaGUA8V7pQCuvEO/Fa1rZFyHem9HKuQHxXo9mhhDvNc60soR4r3SglUMR4rtoRSt5E+K9J5oZQrz3SDPLCOK7h4xWDiWI74o7WsmbEN9FS5oZQbw3pplVBPFdO6eVYwniu8qJVvIWxHfJhmYmEO/NaeYtgviuRzOnCsR39YxmOhDfFfc0M4N4b0kz7wnEdyOayWoQ37VymulBfFc+0swzxHfxmmZ2BYjvpjRzbkB816GdAcR3lRPNLCG+izc0cyxBfDejnRbEd4+0M4X4rprSzCaGeC55p5msBvHdnHZ6EN91aecF4rtaSjP7IsRzyTvN5E2I72a0M4b47pF21hHEc9WUZtIKxHPxhnYeIb57op0FxHcd2tkVIJ6rpDSTNyCei95oZwTx3YR21hHEc62cZtIKxHOlA+10Ib5b0s4zxHcD2tkXIZ6rn2kmb0I8l+xoZwLx3YJ2NjHEc13aSasQz1VS2ulBPBetaecV4rsx7RxLEM81c9ppQzxX3NPODOK7Z9rZJRDPdWknb0A8V01pZwzxXPxGO28RxHMT2smqEM81c9rpQzxX2NPOEuK7Be0cS7hxUZwUisVSuVKpVmsP9Uaj2Wy12u1O5/Gx2+v1+/3BcDQajSfT6dO4CB91aKiDoLQeu91er98fDIej0XgynU6fZvP5YvH8/PK6XK5W6/XbZvO+3e33h8PxlGbZOecnnPoRvFM+0c4CYSkvaWvTgG9WtLMvIDT9jLYWZXilTzt5E+GpbWgrHUTwRy2jnSlCFE9y2npvwBfxO+1sE4SpuaetfFaAHya0c64jVIUFjR0f4YNmTjsjBKyb0tiygqtL9rTzFiFk1Q2Npf0IVzannayGsMVTWlvXcFVtGuojeO0jjWWjGNdTPNLOCjegtKS1TR1X80I7aQW3IBrmNHYeRbiOLg11cSOaB1rb1HAN5RPtvOJmlFa0lg0iXN6Kdo4l3I5onNPauoJL69NQBzeldaS1tIfLqma0s8CNKa9p7qWIC4rWtHMo4tZEU5rbN3E5Qxpq4wY9prSWjyNcSC2jnTluUm1Hc+sKLiLa0M6+gNtUeKW5tINLGNFQCzdrlNPcUwxzD2fameGGtU4091aBsfiddvYJblnlneZOHdga007exG1LXmjvKYah+pl2nnDzxrS3LsFMvKWdXYLb10lp7tCAlQnt5E3cg4c9zZ37sFHPaWeK+1Bc0d4igYH4nXa2Ce5ENKO9TQXujWknb+B+DHKaOzbhWv1MOxPck3ZKc+ce3IrfaWeb4K487GlvGsGlEe3kDdyZ0hvtLQtw5+FMO1PcneSF9rZVuBJtaGeX4A5NaO/UgCND2smbuEu9nOayRzhRO9POE+5UO6W5fAgHojfa2SW4V/Uj7c0ifNuAdvIm7ldlS3vLAr6pktHODPesuKa9TQnfs6KdfYK7Fj/T3q6K7+jRUAt3LnqivWMdX1c+0c4MMqK9tIUve6GdfQGCXk5z50d8UYeGWhAAnYzm8h6+pHiknQXkD82U9gb4igXtHIuQf6sfaW+Mz2vRUAfy/yp72pvis5I97bxA/qe8pb15hM+Z0s6pBPmT4ob2niN8Rj2nnS7kLwpr2nuJ8XHRhnaWkL9JVrT3EuPDBrSTliF/F7/Q3kuMD6pktNOH/FO0oL3XGB+zpJ015EeiOe29xviIR9rJqpAfm9Hea4zfKx5pZwj5mSfae47wW3Pa2USQn5rS3iLCbzRp5/wA+YUp7c3wa/GOdsaQX5rQ3hS/NKadbQz5tTHtjfEL1Yxm8ibkd8a0N8TPrWhnDvm9Ce318DNd2jkUIB8wobm8gx8rHmmnA/mQKc1lLfzQnHZeIB/0RHNpHT/QpJ20DPmoGc0dq/iHeEs7PcjHzWhuX8LfDWlnDfmEaEFzmwR/VcloJqtCPiN6obllhL9Y0s4Q8jnxkubm+LMO7bzHkE9K1jQ3xP8kB5rJG5BPK7zRXBf/NaWdJ8gXFN9p7dzEf9TONLNPIF9R2tHaqYp/W9NOG/I1lQOtbYv4P13aeYF81cOJ1lYRgOKRZtIy5MuaGa3NAMxopw/5hvaZ1vqo5zTzFkG+o0treWtDM3kd8j0DWstpZwr5rgnDtU8g37ZgsNqQ74tXDNQzxIXCO4N0KkGcKO8Zoh7EkdqJ4VlDnGlmDM25BnGnkzMwE4hLQ4Zln0CcmjMobYhb8YoBeYG4VtwyGGkZ4lzlyFAMIAYaGcPwHkEsPDIIeQNiY8QQzCBWnum/YxFiJdnQe12InfKRnltBLDXO9Nq5BjHVpdfGEGNTemyXQIxFS/qrDTFX3NFXr5ALeEjpp6wCuYQO/TSEXMaEPtrGkMuIVvRQC3IpxT298wy5nHpGz6RlyAV16ZkB5KLm9Mp7BLmoZEOfNCEXVjnRHwvIxbVz+uJUglzehL7oQ64gWtEP7xHkGkoHeqEBuY5mTg8sINcy4vWlJci1RCte3QByPaUjr2wbQa6olfO6mpCrGvOqniHXFa15RWkZcmXlE69nCLm6Dq9mG0Oub8ZraUE8kGx5HS8QL9TPvIasAvHDgNcwgvhiycvbJxBflI68uA7EH21e2grikzkvK69BfJLseFFPEL80cl7QsQjxzIQX1IP4Jt7wYjYRxDu1jJfShHhowAt5hvgoWvEi0jLES5WUlzCEeKrPC9jFEF+taK8N8VYlpbUVxGM9GstrEJ+taGsG8VolpaVTEeK3Hi31Ib5b0c42hviumtFMG+K/Ia0sIQGINrRxrkFC8HCmiSdIGMa0cCpCwhBvaaAPCUUzp3PvESQYczrXgoSjeKRjr5CQPNKtcxUSlBWdeoKEpZLRoVMREpghHRpAQhNv6cwuhgSnSWc6kAAt6MgKEqLSiU7kdUiQ+nRiDglTtKEDaRkSqEbO7xtBgjXntx0SSLCKJ35XFxKwHr9pAwlZtOH3NCFBa/BbXiGBW/AbzlVI4Mopv24GCd6QX5aWIMGLd/yqIeQGtPlF+wRyC5b8mi7kJtTO/IpNBLkNT/yKFuRGFE/8vCXkZgz4aXkNcjPiHT9rDrkhHX5SWoLckjU/ZwS5KfWcn3FIILdlwc/oQW5MOePHbSPIrZnw49qQm1M48aPWkBs04Ec1IDco3vNjXiA36ZEfktcgt2nDj5hBblSLH5CWILdqyd8bQ25Wnb91TCC365m/04fcsGrOX9vFkFs25691IDetnPFX3iA3bspfaUJuXDHlzy0hN2/Mn6tDbl7hxJ95htyBIX/iXIXcgeTIH5tB7sKQP5SVIXchOfJHJpA7MeAPnIqQO5Ec+E9DyN3o8x8OCeRuxAf+XQ9yR/r8m20EuSPxgX/VgdyVPv/iDXJfkiP/rAW5MwP+yQpyb5Ij/6cBuTtD/tcr5P4UTvyPvA65QyP+xzPkHhVT/iGvQu7ShH+YQ+5TKSPJrAy5UzOSfILcq0pOpiXI3VqQY8j9quWnIuSOvQ4h9+whgXzZvwDF9Kv9nmPaiwAAAABJRU5ErkJggg=="
  , $u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAH+BAMAAAAYJqs9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURQAAAOkBAOoBAOsBAOsBAOsBAO1FvfMAAAAFdFJOUwAkWJLLwFWycAAADatJREFUeNrtXcuWozYUBGHv6TbsyelmT5JhjzNhbwz6/1/JmcljuqfdNpLuUzf6AFsqquqWLiCK4pPx9PRUF1bH8++z/z6+/mYQhPLln9X/g8EvxtZ/erf8b2PtLF3+0d8Yf5hZv5v9zbEasQLnPxtbZ3v93vtf7fLfihGU99fv/TVzAHr/aORthY33phFwfs/IuBj03jYClfe2ERj97pElAgfvbSMwhwCQoQoq720j0PtABDLLA8572wi0wQBklglnH4GAaQVktjc8RgGQUX9gjAMgmx5R6WPHYDIF5ReK23gA8ogDYzwAeRRDnzIyKIYuCQB/tuyBeZSCYyIA6o2wTQRAvRH2qQBoN8IxGQDlRjinA6A7EUIAoNoIPcTQZgNP0ABosYHy+eXLz08AwgCgwQaeX/58P+ffIAGQbgM/Pf34prULBIBsG3j+8nmIgwJArg3cvPg/Jj2DIdAJXf7dSdeAAEi0gQfL936CiMJibeDh8r/NuYcDQFpv4GUPbdO3w+8VJcj594k7uSEitDfg9ko7uSUmsxa+7J5xalNUZC10+0vbBpiExIjgNWy+IywCi6LL//d0W5+VCF7CZjsFPiMoPRC6MfxylcAAcAbCU/DVguoKygiEr3GOBW0CXCJwY+S1qnwWIjjFXKq/90zgAHCI4CWhZvdevQjKMaVkw2uAWgSR619h7w3wicBFFrLp3x9ovWoRnGIn+d8cHQIFFsHV/+MURwQEOunrf9u/QrBBoo1xOcJwdEZA4Cx7/e8pevAqRVDOYJV61igCN8NdHhQKnAWv/0NUwygEuPcJHKw+MQoBaiJOm/CNmNJjIDAIXf8tbpYYAKAl4pOHJsC+MySkJOITynVB8cFO4Pp/bAMhbZUwDJyw5oRSCSZx679jzb0GH0y+TPeKM4YNXIWt/64tlbN0H3TIhckJ90GHLslKtA+6GX8yJwQEoHwQQKE76NiI9UEIh9pjSI1QHyxHqkvRyPRBgPXvDSWNRB+ESGm7t+fgCKTnwVdaIoIjkLovbqit6FWWD57oL8KrpFIIElA3BtMB6g+6mWUCwAhsrAEoioLAm+MzYwCIq0MlMAI1XwCIVCAwAgtfAYz1YOAGScdVAOM3pI67FDpm/wFukAxMFFy5M1jsRKBMKCmGgm4LJpYokvigAmQoDqvGjWcXAHgkXBj8J7kfBRoHavIKBPCkDmQcuFL/KUg7DjIOdMTCg7kxdSKnQCNHANDFcKA0QLj7cnClYKXUHNydWcBSMNH9GeSzmg6sFGxkdIN9QAduX3SmMhzgR7TA5vUgEDsvUACwRriQxC6EJ9TAjLCmgBnhGUVHQIFGrABAjbBDxxjpfQ2o63NF33dhvbGDvEfpRQsA8hJdcQ0A8YUlh0gBuG035ts6eJ06OAPAfXm7x5okmAEgv76PdbeCKmqLsYEBywDwTy9oMCgwKhEA1j37Vo0A4GxgQ+k20BzfATPfCaECUh3g0sBSoFclADjPmsC77nTH+UE+vAhXASkPdKzgKABWAWmP9OyhKKBRAGDOPUEKgPpY3wqEAnAVkP5MW4j0NvVKBQDrXhoFUGC9cq9GAAXWuRNqBCBKBFwHuzvTAhAkAsYjvUfLApAiAt5j/RvTAhAhAu5PezjTAhAgAgFfNhktC4BbBDK+btSYFgCrCBYZ62cTgZyv/LU8AAj6xN3MsX5JHzmsOAAQ9ZnL3mYEgL5nri8CMIpA3JduR5sRgCsMbIW80RiNACxhQObnziujEYAhDEj92ntpNAKQ+2AnFgCaMLDIXT9JGNhqwQBQ+OAgef0EPngtZI+D0QhA5oNn6etH9sG1kD96uw6I74PXQsNoDDsgsg9OOtaPti9eCy0DyQc7NQDglMKl0DMwbhZutSIAMO6TTIWmcTDsgEilsFMGQGXYATFKoSoHxCiFQ6FvtIYdELwUdhoBACyFi8r1w1VChQ5YKDwXAnzMph1Q72vh8jqDSh2wN+6AcDlwMk4ApQ5YGXdAXWeDiQ7BOh0Qbht01kkAuMPhdK6/tL4J6I0TALAXNtgmgNIiCNoP11gFQe+IKNwJwt4TU2iDwHdF1dkg9PNB2mwQ/ra4MhuEfzBCVz8E4RFBXQ0RjIejNHVEUJ6NWowTQJMNIj0nPhkngB4bRHtxVIsNoj0ivRgngJYdEeK7Qip2RJhvi6nYEaEeHlDbJoCKKIB7esRqnADyowD6MUrSowD6wQmbcQJIjwIExwmKjgIkZ6fUtgkgOgrQHJ5zNU4AwRqgOj1pMk4AsXGYigBi4zDdkcKLcQIIjcOUZ0p3tgkgUwOkh4pvxgkgcUtIfKr8YpwA3hsngDgN0B+oLmxLyPBxFUv3AuRr4EC/flkaYPmuSG2bAP9/WEaQBngIIEgDXJ/XkqIBoCeCNrUaACLA0CrNQkAEWCOeLh2yIkDE46UiNOCgCBDzUxIAAHoquIv6rSEbAlzj7GTJiwDhfsLfGy0hCRBBAXYNtKAECKfAkhcBwrcV3BpogAkQvrFkvkc2AxMgnAK8GjiAEyBYVLzPSozgBAi3VU4NVPAECKfAJTMCBFOAUQMOgwDhP8vXGOtRCBD8u1NmBAj+YbamQItEgGBv0Z2Cu/TqwrQhatAIEBowmcLgjEaA0ITJsyE6IBIgFF2WMDgiEiDUYDnCYIVKgECH5QiDPSoBQilAHwYdLgFC/4C+ELbIBAikGHkhLLEJEEiBTWcN7ODKDHUhnNEJEFhnLhprYAeIMnEhHAkIEKizWl8NHECddlBXA1fY/1nU1cAB9o82bTVwl2v1MgshSA2coM1m0lUDN/ByQ9ca7ckIEAa2qhq4Icit01QDzwiGe9FUA2uEv1sV1cAFhXA0aXgkJUAQBQY1FrjgFJ1FTQ2scSBftVjgFUt0BCZwpGiERNsugQnM9AQI+FN8EwDZBgRfp1aOCUBY4IpoPLUGC4wQaivFBCC2ATGdGyfFBCAscMKU3qrAAmvUf67FW+CCy71BvAVGXqKDBBNoOUJQIPirdAvssNEXboHxnVvHbwI9TwgK/PuLaAtc8QmId3fgyBWCAi1IsgWm3b88INssgQUuFBqcBFtgTTGFq1wLTJ2aI9AZ6u2QZHWOFDzDux2yEl0FlCjkeENQkA5RolDLXQMDpoHigjNzCAoiotAQUJNZEUIU6rlDUJANwkehUkIN3K9F+K7QgT8EhdggfFdolFADA2xQYAjYSC8GtAu2Mmrg/oIE7YKzkBq4ezaLOAUstHxcxSmgI74esABI2AcGpjJQF6zk1MDdE5qIASfu0cyknlPKssB9pgS5Iz6IqoE7bXATpQD4BkVPiHkpzQL32eAgSAEYbeqHNgjXF0zfCGLcqWnJZOfkWeCuaYFFr6NAC9xlg3IUgHOztiL623QFYD20NNOUgVakBe6Z2UWKArCe3CxJrMcJtcAdNrgKUQDe26wVRRkYpVrgDhvsRCgA85X+Fr8MHMVa4A4bvEhQAO6RBj12F8YJtsDHNrgKUAD2S2wz8i58lGyBj69QjWwyzBb4eIbJ+jvItsCHNjiwKwD/TeYKsw4mK4DiaKsRsQ4mK4DiOIcDYg3qZYeAxzTdmBVAc6ZNi7YfrKSHgMdptUODVkQIeGyDaVVoVmCBD5g6YVFLjAU+uFIXTgXQnW/Z4pAwNQbSHXNcotShUokF3g0sKSw8qAgBj2yQMQaSfvppRKChIgXcoWuHwCopnYBdlXBAKC1SOgG7pjvBq0paCLhfsy7QPygtBj/y7AXcVaTF4AfB/QoMqMQQcFez0QBoCgH3ytYKSyiZIeBeJYw146OqEHDPtniKIMsXUEtAAEqFCvgkDNWAhiJbAZ9ctg4OS7Ex+G7t7hgsYGNa/83aNTBYwMIFwC0KDAwWMLABUAFNptWpgJvanegtYGEEoAIBINECukISBSZyC+BUwI25T+QWsLAC8IECE7kFdIUoCsQAoK0VcvfyRQDgNCvgAwUiADhqVsAHCkQEoV61An6mwEBsARd+AN5fwY7YAjoBALi0hshBuQJ+CjLEFnARAUA5p1yRWbsC3vlgeHeu1K+AtzS+JICnVgFvRRBOyWMGCvhxHTdaDxSjgKIomthgPmveB7wdr98IEHFbJA8FfBvPX75GTCglB25FBuOQiwJixzEbBUDspAwqIKUfmIUCUqrgkAUACRaQxfoTquA1CwAq6wpIiAF1FgAcjSsgAYApDwBa4wqID4JrHuuPD4IX6wB0mQAwm94IJQCw5AKA7RiYAEBhHICrdQCmXNZf2o6B0QCshXEALtYB6ArbJrgVxgFYrAMwWAegzgiA2XQRjATgkhMAo+0iGNUTzKkIRgGwZAVAa7sIRt0YqbMC4GC7CMbcHb7kBYCzXQQj9sN5FcGIzcA1NwBGq+3Q2CRU5wbA0XQRDA8Cl+wAcKaLYHAZyE8BgS2RJUMAeuMKCCoDOSogaDuUowKCXLDLEoDRtgJCumJTngBUdvcBgS2Ba5HpGE22g8OTwJbr+vfuh6ZsAdipgTpfAFq7KTBAA13GAOzRwDXn9e/pi2VNgB1ZKG8C7LDBLnMAnHECPGyMddkD4MxmgD0U2GoDADiL28CdheBqYv1vDyU0KIDiTmtsKKyM5ub6z4WdcWtP9Ieh9RflaHv9NxAwtv6iKF/frf/Xwt44/aiGX7vC4ihf/vxe/b/+UtgdT09Gws9fpyhuHKI/xBIAAAAASUVORK5CYII="
  , lm = "/assets/alert-icon.12566fdf.png"
  , lk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAeUExURQAAAACmDwCoEQCpEQCpEf///8Lrx4XXjkXBUgCpElIb2HoAAAAFdFJOUwAhV4zMtvKvAwAADoVJREFUeNrlnTt+28oOxknLTTrm0bhjbDfqGNuNOsZ24wXQThbA37leAAsvwPcmnfg4lLDbW0RWZFsPEoMZADPoc47x6Q/gG4jiRBFHfDw9u7y6vYNV3N7eXF6cfoyCiPj08hZ2xO3laeJ58ld3cCC6G19FiM+uYGDcXPinwafB2a80+OrXh38Ho6PzBoOjK0DGTRp0+l5IYJa+egli4/QBAG7U9oIzIIoLnYPvDsii0zcU43Mgjesk3I9fIwTnYCGu9cy+GViJVslE/AzW4luw+Ospg3gGVqMVPg2O7sBydGmg5a+iETjJX7AC5+AorgPPX6gCM3AYbeD5y1Mgdpy/NEPgPn9hCjDkL6oKpsASTeD5i1HgHNhChB/4AozxPRj/L/ZcMAHmyHw//8veD8Ts+QN0nIZoBgKiDXQACBgFn0FIMDXCIxATaagNkLURTkFQNME2QLZGeATCIg3RATC6gSmIC6dtYAICIwtzArLMwimIjCboAnBYBDILwGERTEFsNEEXgKMikFsAjopgCqLDehEcgfCwfSaYSRfA8pngC4gPqwfjGBREEm4HtN4HJ6AisnA7oOU+eAxKIg/RAzrwgyegJupgR6DNUTjVJEAT4CHA9pFgqkuAJnAA6BGYaROgDdIE2zPEM30CtIEDQIvATKMAbeAAUCIw0ylAGzgAdAhMtQrQBGoCqe3gVK8ATeAA0CBwolkAgtVQDKojCRsACgTudAvQBfNdwK7Iw3TBZH54AuojC9UEkZihGDyIJNwZaD4J73wQoAu6BZq1wakfAjRBngMpzoQnvghQh9wCDdrgBLyJLOQWiG6DMXgUSYgHYdND8cwnAdqATQDWCpz4JUAdrglAWoEJeBZZuCYAZQVi8C6SsCtgbA1M/ROgCbwCxtXAsY8C5GFXwKga8LICxtTAsZ8C5GFXwIga8LQChtfAxFcBsjBPwuPPxHe+CtAFXgFDa+DEXwHqsCtgYA0cgceRhmsDh5vBmc8CtAHbwKFmcOK3AFnIQ3DYILzzW4Au6CE4ZBAe+y5AHuYuZPhWBLyPwFvAoSbwwX8B5np98PKXdTcs2gf/tyjuf1t2wxPZ+RfFvWU3LNgHL4qiKIrih103LLgFlH8EKJ5sNgHBLaBf5V882GwCE/kAUCCQKXQBawAoEJgrbAF/ASBAoNV3ENgAgAIBfQeBTQAIEEi17QJeAUCAQK5tF/AaAHMEGmXrwDcAmCPQKbNBbwEoCtMzUaLKBr0DwPxEkKk6Cb0HwBiBWpMN2gKAMQKtJhu0DQBjBBTZoK0AGCOQ6rFB2wEwRSBX0wN3AGCKQK2mB+4CwBCBVksP3AmAKQJaeuBuAAwRSHX0wD0AGCKQ6+iB+wAwQ6BW0QMXe/M3QqBV0QOr/QIUlF3wSB8ARfGTsAtOFAJg9E1hJv8rgYMAFMUj/r8+l78PrA4LYIBAI34fOAAAEwQ68fvAaogABggkwofAIABMEEiFG+FqmAB4BHLZRnggAAYI1LKHQDVUADQCjeghMBgAPAKd6CFQDRcAjUAieAiMAACPQCp4CFRjBMAikMs9CYwCAI3AXO4QqMYJgPy2vBG7DhoJAPaBiVbsOqgaKwASAalTcFmMDtx6NBG6DnoeLwBuN5bJnIIIAJCTMJc5BREAINvgXOQUxACArIFG5BREAYCbA63EsyAOAFwT6CROQRwAyEGYyDsLIgFAdsFUng14dipAJs4GoAHAnQhzcTYADYCZEZjqBwAnQCPNBuABwE2BVpgNMAAA96xEJ2wbYACA0UYg9gAA5LMiiSgfZAAA9ldEqSQfZAIAdjOeSfJBJgBgH5jLBfkgEwDQj0zOBX01bgIA+md0tRwjaAQA+oeUjRwj+MzQAl+s4J12AEwfFSNP5n+/lADwxwpSG8FlWRT/jP1HLB1gZQWpjWBZFEXxn3H/5l+OEfBiBSdWutnTeNEYAICMXIAl5nPpuQCAjNwJP2NaMxsAkFM74SWmN/MBAHNqJ/yMmc58AEBN7ISXmPHMCAA0xAI8YwwaIwDQ0B4FlphDKicA0NIeBZ4xawpOAKCjFQCzp2AFADrSs1CP2VSxAgBAehbCvO+HFwCAhFAA1Pt+mAGAhPAwWCL+Rm4AIKUToMf8kSYA/KYRYGITgEMImADwg+SvzsgE6DGcsgMAGdlpuER0Kn4AIKcSoMesLPkBgJxqHVAiltYCAIA5kQALzNZaAAAwJ9qHVIjvLSQAADWNAAvMFxcSAICaZh9SIb66EgEANCQCLDCflwgAiASoEB+YDACgodiILTCfWCUCAGgpBHhGfGQLGQCQCLDEfGZCACAR4BnxoUkBAFrzneiwhzueZAIAnbkAwx7ueJAJAIEAQ5/ueRIJAIEAQ5/ueRAJgLkAwx/vepIIAEDkCIDNM5EJAD9BlgBjnu97pAAAhAkw5vGue4kAmAow6kj3aAzAPQgToEf8+SYAPEoToET8/bIAMBOgR7QwYQCYCVAiXIwwAIwEQCx1fksDwEgAxFbvhzQATAQw2eqJAcBEgMpt/nYAMBBg4QUABgL86wUABgJUXgBgIIAfAAB6IbL0AwD8RmjhBwB4AXovANBCgDUAtAjwaFGAmYImaA8Ak+8GSx8AMBHg2QcATARw1wSerAqAf0TGVQ08WMzf6Bmh3gMAzB6SKvUDAI3Jg5K9fgAMnxQt1QMAtdHD0r16AEyfFi+1AwBzsx9M9NoBMP7FSKkcAMgNfzTVKwfA/FdjpW4AIDP94WSvGwCCX46WqgGA1PjH071qACh+PV5qBgAS8xco2EPgtwMBKF6hYQuBHw7yJ3mHSK8YgI7kNTqlWgCgJXmRUq8WAKo3SZVaAYCG5mVqvVYAoCZ6nV6pFACYE71QsVcKAORUr9QsdQJA907RXicAkJG9VrdUCQCkZC9W7lUC8OeODRCHgDMAgPDl6guNAHSUr9evFALQUl6w0OsDYHXBAtWLhSt1AKyu2KB6tfRCHQCrS1bIXi5eaQNgdc0O2RsFF9oAWF20RPdSTQoEfjrMf3XVFt1rVSkQcJn/y7WzIAgBpwAA+YWLxgjcO82/o79y0xSBR6cCtPSXri40AbC+dJXyko1KEQDra3cpr1lZKAJgffEy6UU7lR4A1ldvk941tdADwPryddrbxio1ALz4IOIL9xZqAHixAdRXLlZaAGjXAtBeurlQAsDaBpDfO1vpAGBtA8hvHl7oAGBtA+jvnq5UALC2AfS3bi5UAPB3CtLfu1ppAAD+5k9+9fBCAwDthgBTbgQ4AGg2BCC/f30hH4CNKUg+B0cjwAHAxhSkv3t4JAIsAKzPgjbm4EgEnlgE2JiCNi5gH4HAA0v+3Wb+9GNgDAI8ADSvBDgBPgR4AFh9NW5vDAxHgAeAV0PAxhgYjAATAK+GgJUxMBQBJgBeDwEbY2AgAlwAvB4CVsbAMAS4AGjeCPABeBDgAuDVScDGUmgoAlwAbKyD7I2BAQiwAfBmCFhYCg1DgA0AeJs/+VJoEAJ8ALTvBDjhQIAPgPqdAMd2/kdLmQC8McL2uuB+BH6DnB5oqwvuQ+AHX/7ve6CtLrjvvYOMALRbBDhxjQAnAPUWAY7BMQKMAGzpgfa64C4EOAHY1gOtdcFdCHACsK0H2uuC2xFgBaDdKsCJUwRYAai3CjABhwiwAvDuLGxxL7gLAVYA3u4Dbe4FdyDAC0C3PX87e8HtCPAC0OwQ4BhcIcALwFYbZNUKvUOAF4DtNsiqFXqDADMAsCt/e1boDQLMALQ7BfjgBgFuAOY7BZiAEwSYAdhhgyxbIYBlKQSAXTbIdhN4ecPCPTcAu1uAzfMQrPejj9wA1HsEsNoE/vTBB+7897QAy00AYFEKyH9fC7DcBADgF3/++1qAXScgJOZ7BTjyX4B0rwCR/wLsz9/mTkBGNAcEOPZdgPyAAEeBtwCbi0ER0R3K37IbZo/6oAATvwXIDgoQ+y1AclAA625YsA8OYBDmAwTwehCmAwTweRB2Q/L3eRDWgwTweBBmgwTwtwaGVYDHNVAPFGASeAX4awaTgQL4uhVphubvqxnMBwsQB14BntbA8ArwtAbyEQLEgVeAlzUwpgK89ELZKAHiwCvAwxoYVwEe1kA2UgDfzsTd2Px9OxPXowXwbDeajhbAr+8H2vH5+2WHc4QAXlmBBCGAT1agweTvkxXIUAL4YwU6XP7+WIEaKYA3ViBFCuBLG2yw+fvSBjO0AH60wQ6fvx9tsDYQwAs3mBgI4EMbbEzy96ENZkYC6D8Ut2b56z8U54YCaJ+EnWn+2idhbSyA8kmYRGEjYA6A8jNhSiCAZjPUUOSvGQESABQjQAOAYj+cEQmg1Q+3VPlrRYAMAKUI0AGgFAFCAFQiQAmASgRIAVCIAC0ACu1gSiyANjvYUOevDQFyAJQhQA+AstVQYkEATauh2kb+UaxmQdxZAUDRdwR5ZCmUuKHWVv5aDHFmTQAdo7Cxl7+OUZhYFCD6Ij//75HVmIXbAZUcCVLLAkjvg43t/IX7wS6xLoBsM5BFDmIacgHILgIXBSC6CLLIUUxDLgC5ReCqAMQWQRY5jGnIBSDzTNC6zV/emSB1LIC0g/H3yHlMA24A4mahywkosg2kEUuIcQPfIqb4EmwDFOUGWr78RTRCnga4boTsCnRpxBrsjTCLmONzoANAyCj4HgmIc778ryMRwXYqaKIoaAXE5M9kiFo5+UcxgwJtEgWtgKz83VdBG4mLWeD5O/UD11EUtAJC83d2LvgWRUErIDh/F/sB7vM/tyEQN/4dt8LrSEF8DrT8NxqBpTJo00hLnAeL/0t8Ip8G3ddIVcTEEFwnkbaghEDbx7+KM6r8LyKlEV9RpH+TRHrjyFiCmzTSHWYSqE/fTAIv0o+iKIrPEBOhu0gij+LTSAxuvka+RXw2WIMbvz78DQ1Orw7WQndz6mn2axEub3clf3vpefLr+Hh6dnl1uxaiu725vDj9yPKn/B+Nha/gptsT0QAAAABJRU5ErkJggg=="
  , uk = "/assets/checkGrey.e42a5595.png"
  , ck = "/assets/declineGrey.2dd3d986.png"
  , dk = "/assets/manual-decline.7ed9e976.png"
  , um = "/assets/information.06792e84.png";
function pk({data: e, showAddInformation: t, sectionId: n}) {
    const [r,o] = C.exports.useContext(Jo)
      , {headerTitle: i} = e
      , s = r.technicalComplianceCheck && r.tcData
      , a = {
        ACCEPT: "accept_",
        DENY: "deny_"
    }
      , l = {
        PURPOSES: "purpose",
        LEGITIMATEINTEREST: "legitimateInterests"
    }
      , u = [1, 3, 4, 5, 6]
      , c = "not applicable"
      , f = d=>{
        document.getElementById("warning_" + d).style.display = "none"
    }
      , p = d=>{
        document.getElementById("warning_" + d).style.display = "inline-grid"
    }
      , v = d=>{
        document.getElementById("accept_" + d).classList.remove("button-inactive"),
        document.getElementById("accept_" + d).classList.add("button-active"),
        f(d),
        document.getElementById("deny_" + d).classList.contains("button-active") && (document.getElementById("deny_" + d).classList.add("button-inactive"),
        document.getElementById("deny_" + d).classList.remove("button-active"))
    }
      , x = d=>{
        document.getElementById("deny_" + d).classList.remove("button-inactive"),
        document.getElementById("deny_" + d).classList.add("button-active"),
        f(d),
        document.getElementById("accept_" + d).classList.contains("button-active") && (document.getElementById("accept_" + d).classList.remove("button-active"),
        document.getElementById("accept_" + d).classList.add("button-inactive"))
    }
      , g = d=>{
        document.getElementById("deny_" + d).classList.contains("button-active") && (document.getElementById("deny_" + d).classList.add("button-inactive"),
        document.getElementById("deny_" + d).classList.remove("button-active")),
        document.getElementById("accept_" + d).classList.contains("button-active") && (document.getElementById("accept_" + d).classList.remove("button-active"),
        document.getElementById("accept_" + d).classList.add("button-inactive")),
        p(d)
    }
      , P = (d,y)=>{
        const A = am(y.split("_")[0])
          , E = r.structure.find(k=>k.sectionId === A)
          , S = E.checks.find(k=>k.id === y)
          , I = {
            ...S
        }
          , R = E.checks.findIndex(k=>k.id === y);
        d === a.ACCEPT && ((S.response === null || S.response === !1) && (I.response = !0,
        v(y)),
        S.response === !0 && (I.response = null,
        g(y)),
        E.checks.splice(R, 1, I),
        o({
            type: Be.updateSummary,
            payload: r
        })),
        d === a.DENY && ((S.response == null || S.response === !0) && (I.response = !1,
        x(y)),
        S.response === !1 && (I.response = null,
        g(y)),
        E.checks.splice(R, 1, I),
        o({
            type: Be.updateSummary,
            payload: r
        }))
    }
      , m = d=>{
        const y = d.additionalInformation && (d.additionalInformation.manualSteps && d.additionalInformation.manualSteps.length > 0 || d.additionalInformation.policyReference && d.additionalInformation.policyReference.length > 0);
        return d.automated ? j("div", {
            className: "content-question",
            children: [b(ke, {
                div: !0,
                xs: 1,
                className: "icon-manual-check",
                children: b("div", {
                    children: j("span", {
                        children: [d.number, " "]
                    })
                })
            }), b(ke, {
                div: !0,
                xs: 8,
                children: b("div", {
                    children: j("span", {
                        children: [d.text, " "]
                    })
                })
            }), b(ke, {
                div: !0,
                xs: 1,
                className: "icon-align-rigth",
                children: y ? b(dn, {
                    "aria-label": "close",
                    onClick: ()=>t({
                        title: i,
                        questionText: d.text,
                        ...d.additionalInformation
                    }),
                    className: "fileComplaintBtn",
                    children: b("img", {
                        src: um,
                        className: "icon-btn"
                    })
                }) : null
            }), b(ke, {
                div: !0,
                xs: 2,
                className: "icon-align-rigth",
                children: r.technicalComplianceCheck[d.id] === null ? b("img", {
                    src: lm,
                    className: "icon-btn"
                }) : r.technicalComplianceCheck[d.id] ? b("img", {
                    src: zu,
                    className: "icon-btn"
                }) : b("img", {
                    src: $u,
                    className: "icon-btn"
                })
            })]
        }) : j("div", {
            className: "content-question",
            children: [b(ke, {
                div: !0,
                xs: 1,
                className: "icon-manual-check",
                children: b("div", {
                    children: b("span", {
                        children: d.number
                    })
                })
            }), b(ke, {
                div: !0,
                xs: 8,
                children: b("div", {
                    children: j("span", {
                        children: [d.text, " "]
                    })
                })
            }), b(ke, {
                div: !0,
                xs: 1,
                className: "icon-align-rigth",
                children: y ? b(dn, {
                    "aria-label": "close",
                    onClick: ()=>t({
                        title: i,
                        questionText: d.text,
                        ...d.additionalInformation
                    }),
                    className: "fileComplaintBtn",
                    children: b("img", {
                        src: um,
                        className: "icon-btn"
                    })
                }) : null
            }), j(ke, {
                div: !0,
                xs: 2,
                className: "icon-manual-check",
                children: [b(dn, {
                    "aria-label": "close",
                    onClick: ()=>{
                        P(a.DENY, d.id)
                    }
                    ,
                    id: "deny_" + d.id,
                    className: "button-inactive",
                    children: b("img", {
                        src: dk,
                        className: "icon-btn"
                    })
                }), b(dn, {
                    "aria-label": "close",
                    onClick: ()=>{
                        P(a.ACCEPT, d.id)
                    }
                    ,
                    id: "accept_" + d.id,
                    className: "button-inactive",
                    children: b("img", {
                        src: lk,
                        className: "icon-btn"
                    })
                }), b("img", {
                    src: lm,
                    className: "icon-btn",
                    id: "warning_" + d.id
                })]
            })]
        })
    }
      , h = ()=>{
        const d = ea(n).firstWord === "special" ? "specialFeatures" : ea(n).firstWord
          , y = ea(n).secondWord.toLowerCase() === "features" ? "specialFeatureOptins" : am(ea(n).secondWord)
          , A = !!r.tcData.tcString;
        let E, S, I = !1;
        if (A) {
            const R = d === "specialFeatures" ? r.vendorList[d] : r.vendorList[d + "s"]
              , k = d === "specialFeatures" ? r.tcData[y] : r.tcData[d];
            S = d === "specialFeatures" ? k : {
                ...k[y]
            },
            E = R ? Object.values(R) : null,
            d == l.PURPOSES && y == l.LEGITIMATEINTEREST && (I = !0)
        }
        return b(mn, {
            children: E ? E.map(R=>j("div", {
                className: "content-question",
                children: [b(ke, {
                    div: !0,
                    xs: 1,
                    className: "icon-manual-check",
                    children: b("div", {
                        children: j("span", {
                            children: [R.id, " "]
                        })
                    })
                }), b(ke, {
                    div: !0,
                    xs: 9,
                    children: b("div", {
                        children: j("span", {
                            children: [R.name, " "]
                        })
                    })
                }), b(ke, {
                    div: !0,
                    xs: 2,
                    className: "icon-align-rigth",
                    children: I ? S[R.id] ? u.includes(R.id) ? b("img", {
                        src: uk,
                        className: "icon-btn"
                    }) : b("img", {
                        src: zu,
                        className: "icon-btn"
                    }) : u.includes(R.id) ? b("img", {
                        src: ck,
                        className: "icon-btn"
                    }) : b("img", {
                        src: $u,
                        className: "icon-btn"
                    }) : S[R.id] ? b("img", {
                        src: zu,
                        className: "icon-btn"
                    }) : b("img", {
                        src: $u,
                        className: "icon-btn"
                    })
                })]
            })) : j("div", {
                className: "content-question",
                children: [b(ke, {
                    div: !0,
                    xs: 1,
                    className: "icon-manual-check"
                }), b(ke, {
                    div: !0,
                    xs: 9,
                    children: j("span", {
                        className: "not-applies",
                        children: [" ", c, " "]
                    })
                }), b(ke, {
                    div: !0,
                    xs: 2,
                    className: "icon-align-rigth"
                })]
            })
        })
    }
    ;
    return s && b("div", {
        className: "content-list",
        children: b(ke, {
            container: !0,
            spacing: 2,
            className: "summary-content",
            children: e.checks[1] ? e.checks.map(d=>m(d)) : h()
        })
    })
}
function Zo({props: e, states: t, muiFormControl: n}) {
    return t.reduce((r,o)=>(r[o] = e[o],
    n && typeof e[o] == "undefined" && (r[o] = n[o]),
    r), {})
}
const fk = C.exports.createContext(void 0);
var Mp = fk;
function ei() {
    return C.exports.useContext(Mp)
}
function hk(e) {
    return b(WA, w({}, e, {
        defaultTheme: Xl
    }))
}
function cm(e) {
    return e != null && !(Array.isArray(e) && e.length === 0)
}
function Bp(e, t=!1) {
    return e && (cm(e.value) && e.value !== "" || t && cm(e.defaultValue) && e.defaultValue !== "")
}
function mk(e) {
    return e.startAdornment
}
function gk(e) {
    return ve("MuiInputBase", e)
}
const vk = ye("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Ho = vk;
const yk = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"]
  , ql = (e,t)=>{
    const {ownerState: n} = e;
    return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ne(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel]
}
  , Jl = (e,t)=>{
    const {ownerState: n} = e;
    return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel]
}
  , xk = e=>{
    const {classes: t, color: n, disabled: r, error: o, endAdornment: i, focused: s, formControl: a, fullWidth: l, hiddenLabel: u, multiline: c, readOnly: f, size: p, startAdornment: v, type: x} = e
      , g = {
        root: ["root", `color${ne(n)}`, r && "disabled", o && "error", l && "fullWidth", s && "focused", a && "formControl", p === "small" && "sizeSmall", c && "multiline", v && "adornedStart", i && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
        input: ["input", r && "disabled", x === "search" && "inputTypeSearch", c && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", v && "inputAdornedStart", i && "inputAdornedEnd", f && "readOnly"]
    };
    return we(g, gk, t)
}
  , Zl = Y("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: ql
})(({theme: e, ownerState: t})=>w({}, e.typography.body1, {
    color: (e.vars || e).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${Ho.disabled}`]: {
        color: (e.vars || e).palette.text.disabled,
        cursor: "default"
    }
}, t.multiline && w({
    padding: "4px 0 5px"
}, t.size === "small" && {
    paddingTop: 1
}), t.fullWidth && {
    width: "100%"
}))
  , eu = Y("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Jl
})(({theme: e, ownerState: t})=>{
    const n = e.palette.mode === "light"
      , r = w({
        color: "currentColor"
    }, e.vars ? {
        opacity: e.vars.opacity.inputPlaceholder
    } : {
        opacity: n ? .42 : .5
    }, {
        transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter
        })
    })
      , o = {
        opacity: "0 !important"
    }
      , i = e.vars ? {
        opacity: e.vars.opacity.inputPlaceholder
    } : {
        opacity: n ? .42 : .5
    };
    return w({
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": {
            outline: 0
        },
        "&:invalid": {
            boxShadow: "none"
        },
        "&::-webkit-search-decoration": {
            WebkitAppearance: "none"
        },
        [`label[data-shrink=false] + .${Ho.formControl} &`]: {
            "&::-webkit-input-placeholder": o,
            "&::-moz-placeholder": o,
            "&:-ms-input-placeholder": o,
            "&::-ms-input-placeholder": o,
            "&:focus::-webkit-input-placeholder": i,
            "&:focus::-moz-placeholder": i,
            "&:focus:-ms-input-placeholder": i,
            "&:focus::-ms-input-placeholder": i
        },
        [`&.${Ho.disabled}`]: {
            opacity: 1,
            WebkitTextFillColor: (e.vars || e).palette.text.disabled
        },
        "&:-webkit-autofill": {
            animationDuration: "5000s",
            animationName: "mui-auto-fill"
        }
    }, t.size === "small" && {
        paddingTop: 1
    }, t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
    }, t.type === "search" && {
        MozAppearance: "textfield"
    })
}
)
  , Ck = b(hk, {
    styles: {
        "@keyframes mui-auto-fill": {
            from: {
                display: "block"
            }
        },
        "@keyframes mui-auto-fill-cancel": {
            from: {
                display: "block"
            }
        }
    }
})
  , wk = C.exports.forwardRef(function(t, n) {
    var r;
    const o = be({
        props: t,
        name: "MuiInputBase"
    })
      , {"aria-describedby": i, autoComplete: s, autoFocus: a, className: l, components: u={}, componentsProps: c={}, defaultValue: f, disabled: p, disableInjectingGlobalStyles: v, endAdornment: x, fullWidth: g=!1, id: P, inputComponent: m="input", inputProps: h={}, inputRef: d, maxRows: y, minRows: A, multiline: E=!1, name: S, onBlur: I, onChange: R, onClick: k, onFocus: O, onKeyDown: W, onKeyUp: U, placeholder: D, readOnly: F, renderSuffix: V, rows: K, slotProps: N={}, slots: $={}, startAdornment: B, type: Q="text", value: X} = o
      , ce = q(o, yk)
      , J = h.value != null ? h.value : X
      , {current: te} = C.exports.useRef(J != null)
      , H = C.exports.useRef()
      , oe = C.exports.useCallback(de=>{}
    , [])
      , ie = Je(H, d, h.ref, oe)
      , [re,Pe] = C.exports.useState(!1)
      , Z = ei()
      , Te = Zo({
        props: o,
        muiFormControl: Z,
        states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
    });
    Te.focused = Z ? Z.focused : re,
    C.exports.useEffect(()=>{
        !Z && p && re && (Pe(!1),
        I && I())
    }
    , [Z, p, re, I]);
    const nt = Z && Z.onFilled
      , bt = Z && Z.onEmpty
      , Ke = C.exports.useCallback(de=>{
        Bp(de) ? nt && nt() : bt && bt()
    }
    , [nt, bt]);
    Hn(()=>{
        te && Ke({
            value: J
        })
    }
    , [J, Ke, te]);
    const Wt = de=>{
        if (Te.disabled) {
            de.stopPropagation();
            return
        }
        O && O(de),
        h.onFocus && h.onFocus(de),
        Z && Z.onFocus ? Z.onFocus(de) : Pe(!0)
    }
      , he = de=>{
        I && I(de),
        h.onBlur && h.onBlur(de),
        Z && Z.onBlur ? Z.onBlur(de) : Pe(!1)
    }
      , gn = (de,...M)=>{
        if (!te) {
            const ue = de.target || H.current;
            if (ue == null)
                throw new Error(yr(1));
            Ke({
                value: ue.value
            })
        }
        h.onChange && h.onChange(de, ...M),
        R && R(de, ...M)
    }
    ;
    C.exports.useEffect(()=>{
        Ke(H.current)
    }
    , []);
    const at = de=>{
        H.current && de.currentTarget === de.target && H.current.focus(),
        k && k(de)
    }
    ;
    let We = m
      , Se = h;
    E && We === "input" && (K ? Se = w({
        type: void 0,
        minRows: K,
        maxRows: K
    }, Se) : Se = w({
        type: void 0,
        maxRows: y,
        minRows: A
    }, Se),
    We = jw);
    const gt = de=>{
        Ke(de.animationName === "mui-auto-fill-cancel" ? H.current : {
            value: "x"
        })
    }
    ;
    C.exports.useEffect(()=>{
        Z && Z.setAdornedStart(Boolean(B))
    }
    , [Z, B]);
    const lt = w({}, o, {
        color: Te.color || "primary",
        disabled: Te.disabled,
        endAdornment: x,
        error: Te.error,
        focused: Te.focused,
        formControl: Z,
        fullWidth: g,
        hiddenLabel: Te.hiddenLabel,
        multiline: E,
        size: Te.size,
        startAdornment: B,
        type: Q
    })
      , Xe = xk(lt)
      , _e = $.root || u.Root || Zl
      , St = N.root || c.root || {}
      , vt = $.input || u.Input || eu;
    return Se = w({}, Se, (r = N.input) != null ? r : c.input),
    j(C.exports.Fragment, {
        children: [!v && Ck, j(_e, w({}, St, !Wa(_e) && {
            ownerState: w({}, lt, St.ownerState)
        }, {
            ref: n,
            onClick: at
        }, ce, {
            className: ee(Xe.root, St.className, l, F && "MuiInputBase-readOnly"),
            children: [B, b(Mp.Provider, {
                value: null,
                children: b(vt, w({
                    ownerState: lt,
                    "aria-invalid": Te.error,
                    "aria-describedby": i,
                    autoComplete: s,
                    autoFocus: a,
                    defaultValue: f,
                    disabled: Te.disabled,
                    id: P,
                    onAnimationStart: gt,
                    name: S,
                    placeholder: D,
                    readOnly: F,
                    required: Te.required,
                    rows: K,
                    value: J,
                    onKeyDown: W,
                    onKeyUp: U,
                    type: Q
                }, Se, !Wa(vt) && {
                    as: We,
                    ownerState: w({}, lt, Se.ownerState)
                }, {
                    ref: ie,
                    className: ee(Xe.input, Se.className, F && "MuiInputBase-readOnly"),
                    onBlur: he,
                    onChange: gn,
                    onFocus: Wt
                }))
            }), x, V ? V(w({}, Te, {
                startAdornment: B
            })) : null]
        }))]
    })
});
var Fp = wk;
function Ak(e) {
    return ve("MuiInput", e)
}
const bk = w({}, Ho, ye("MuiInput", ["root", "underline", "input"]));
var xi = bk;
const Sk = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"]
  , Ek = e=>{
    const {classes: t, disableUnderline: n} = e
      , o = we({
        root: ["root", !n && "underline"],
        input: ["input"]
    }, Ak, t);
    return w({}, t, o)
}
  , Pk = Y(Zl, {
    shouldForwardProp: e=>Gn(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [...ql(e, t), !n.disableUnderline && t.underline]
    }
})(({theme: e, ownerState: t})=>{
    let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
    return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
    w({
        position: "relative"
    }, t.formControl && {
        "label + &": {
            marginTop: 16
        }
    }, !t.disableUnderline && {
        "&:after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut
            }),
            pointerEvents: "none"
        },
        [`&.${xi.focused}:after`]: {
            transform: "scaleX(1) translateX(0)"
        },
        [`&.${xi.error}`]: {
            "&:before, &:after": {
                borderBottomColor: (e.vars || e).palette.error.main
            }
        },
        "&:before": {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
                duration: e.transitions.duration.shorter
            }),
            pointerEvents: "none"
        },
        [`&:hover:not(.${xi.disabled}, .${xi.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": {
                borderBottom: `1px solid ${r}`
            }
        },
        [`&.${xi.disabled}:before`]: {
            borderBottomStyle: "dotted"
        }
    })
}
)
  , Ik = Y(eu, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: Jl
})({})
  , zy = C.exports.forwardRef(function(t, n) {
    var r, o, i, s;
    const a = be({
        props: t,
        name: "MuiInput"
    })
      , {disableUnderline: l, components: u={}, componentsProps: c, fullWidth: f=!1, inputComponent: p="input", multiline: v=!1, slotProps: x, slots: g={}, type: P="text"} = a
      , m = q(a, Sk)
      , h = Ek(a)
      , y = {
        root: {
            ownerState: {
                disableUnderline: l
            }
        }
    }
      , A = (x != null ? x : c) ? qt(x != null ? x : c, y) : y
      , E = (r = (o = g.root) != null ? o : u.Root) != null ? r : Pk
      , S = (i = (s = g.input) != null ? s : u.Input) != null ? i : Ik;
    return b(Fp, w({
        slots: {
            root: E,
            input: S
        },
        slotProps: A,
        fullWidth: f,
        inputComponent: p,
        multiline: v,
        ref: n,
        type: P
    }, m, {
        classes: h
    }))
});
zy.muiName = "Input";
var $y = zy;
function kk(e) {
    return ve("MuiFilledInput", e)
}
const Rk = w({}, Ho, ye("MuiFilledInput", ["root", "underline", "input"]));
var Er = Rk;
const Tk = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"]
  , Nk = e=>{
    const {classes: t, disableUnderline: n} = e
      , o = we({
        root: ["root", !n && "underline"],
        input: ["input"]
    }, kk, t);
    return w({}, t, o)
}
  , Lk = Y(Zl, {
    shouldForwardProp: e=>Gn(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [...ql(e, t), !n.disableUnderline && t.underline]
    }
})(({theme: e, ownerState: t})=>{
    var n;
    const r = e.palette.mode === "light"
      , o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)"
      , i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)"
      , s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)"
      , a = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return w({
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
        }),
        "&:hover": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
            "@media (hover: none)": {
                backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
            }
        },
        [`&.${Er.focused}`]: {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
        },
        [`&.${Er.disabled}`]: {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a
        }
    }, !t.disableUnderline && {
        "&:after": {
            borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut
            }),
            pointerEvents: "none"
        },
        [`&.${Er.focused}:after`]: {
            transform: "scaleX(1) translateX(0)"
        },
        [`&.${Er.error}`]: {
            "&:before, &:after": {
                borderBottomColor: (e.vars || e).palette.error.main
            }
        },
        "&:before": {
            borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
                duration: e.transitions.duration.shorter
            }),
            pointerEvents: "none"
        },
        [`&:hover:not(.${Er.disabled}, .${Er.error}):before`]: {
            borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Er.disabled}:before`]: {
            borderBottomStyle: "dotted"
        }
    }, t.startAdornment && {
        paddingLeft: 12
    }, t.endAdornment && {
        paddingRight: 12
    }, t.multiline && w({
        padding: "25px 12px 8px"
    }, t.size === "small" && {
        paddingTop: 21,
        paddingBottom: 4
    }, t.hiddenLabel && {
        paddingTop: 16,
        paddingBottom: 17
    }))
}
)
  , Ok = Y(eu, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: Jl
})(({theme: e, ownerState: t})=>w({
    paddingTop: 25,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12
}, !e.vars && {
    "&:-webkit-autofill": {
        WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
        caretColor: e.palette.mode === "light" ? null : "#fff",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
    }
}, e.vars && {
    "&:-webkit-autofill": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
        "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff"
        }
    }
}, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
}, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
}, t.multiline && {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
}, t.startAdornment && {
    paddingLeft: 0
}, t.endAdornment && {
    paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
}))
  , Vy = C.exports.forwardRef(function(t, n) {
    var r, o, i, s;
    const a = be({
        props: t,
        name: "MuiFilledInput"
    })
      , {components: l={}, componentsProps: u, fullWidth: c=!1, inputComponent: f="input", multiline: p=!1, slotProps: v, slots: x={}, type: g="text"} = a
      , P = q(a, Tk)
      , m = w({}, a, {
        fullWidth: c,
        inputComponent: f,
        multiline: p,
        type: g
    })
      , h = Nk(a)
      , d = {
        root: {
            ownerState: m
        },
        input: {
            ownerState: m
        }
    }
      , y = (v != null ? v : u) ? qt(v != null ? v : u, d) : d
      , A = (r = (o = x.root) != null ? o : l.Root) != null ? r : Lk
      , E = (i = (s = x.input) != null ? s : l.Input) != null ? i : Ok;
    return b(Fp, w({
        slots: {
            root: A,
            input: E
        },
        componentsProps: y,
        fullWidth: c,
        inputComponent: f,
        multiline: p,
        ref: n,
        type: g
    }, P, {
        classes: h
    }))
});
Vy.muiName = "Input";
var Uy = Vy, dm;
const Mk = ["children", "classes", "className", "label", "notched"]
  , Bk = Y("fieldset")({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%"
})
  , Fk = Y("legend")(({ownerState: e, theme: t})=>w({
    float: "unset",
    width: "auto",
    overflow: "hidden"
}, !e.withLabel && {
    padding: 0,
    lineHeight: "11px",
    transition: t.transitions.create("width", {
        duration: 150,
        easing: t.transitions.easing.easeOut
    })
}, e.withLabel && w({
    display: "block",
    padding: 0,
    height: 11,
    fontSize: "0.75em",
    visibility: "hidden",
    maxWidth: .01,
    transition: t.transitions.create("max-width", {
        duration: 50,
        easing: t.transitions.easing.easeOut
    }),
    whiteSpace: "nowrap",
    "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
    }
}, e.notched && {
    maxWidth: "100%",
    transition: t.transitions.create("max-width", {
        duration: 100,
        easing: t.transitions.easing.easeOut,
        delay: 50
    })
})));
function _k(e) {
    const {className: t, label: n, notched: r} = e
      , o = q(e, Mk)
      , i = n != null && n !== ""
      , s = w({}, e, {
        notched: r,
        withLabel: i
    });
    return b(Bk, w({
        "aria-hidden": !0,
        className: t,
        ownerState: s
    }, o, {
        children: b(Fk, {
            ownerState: s,
            children: i ? b("span", {
                children: n
            }) : dm || (dm = b("span", {
                className: "notranslate",
                children: "\u200B"
            }))
        })
    }))
}
function Dk(e) {
    return ve("MuiOutlinedInput", e)
}
const zk = w({}, Ho, ye("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
var qn = zk;
const $k = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"]
  , Vk = e=>{
    const {classes: t} = e
      , r = we({
        root: ["root"],
        notchedOutline: ["notchedOutline"],
        input: ["input"]
    }, Dk, t);
    return w({}, t, r)
}
  , Uk = Y(Zl, {
    shouldForwardProp: e=>Gn(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: ql
})(({theme: e, ownerState: t})=>{
    const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return w({
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${qn.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.text.primary
        },
        "@media (hover: none)": {
            [`&:hover .${qn.notchedOutline}`]: {
                borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
            }
        },
        [`&.${qn.focused} .${qn.notchedOutline}`]: {
            borderColor: (e.vars || e).palette[t.color].main,
            borderWidth: 2
        },
        [`&.${qn.error} .${qn.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.error.main
        },
        [`&.${qn.disabled} .${qn.notchedOutline}`]: {
            borderColor: (e.vars || e).palette.action.disabled
        }
    }, t.startAdornment && {
        paddingLeft: 14
    }, t.endAdornment && {
        paddingRight: 14
    }, t.multiline && w({
        padding: "16.5px 14px"
    }, t.size === "small" && {
        padding: "8.5px 14px"
    }))
}
)
  , jk = Y(_k, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e,t)=>t.notchedOutline
})(({theme: e})=>{
    const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
    }
}
)
  , Hk = Y(eu, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Jl
})(({theme: e, ownerState: t})=>w({
    padding: "16.5px 14px"
}, !e.vars && {
    "&:-webkit-autofill": {
        WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
        caretColor: e.palette.mode === "light" ? null : "#fff",
        borderRadius: "inherit"
    }
}, e.vars && {
    "&:-webkit-autofill": {
        borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
        "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff"
        }
    }
}, t.size === "small" && {
    padding: "8.5px 14px"
}, t.multiline && {
    padding: 0
}, t.startAdornment && {
    paddingLeft: 0
}, t.endAdornment && {
    paddingRight: 0
}))
  , jy = C.exports.forwardRef(function(t, n) {
    var r, o, i, s, a;
    const l = be({
        props: t,
        name: "MuiOutlinedInput"
    })
      , {components: u={}, fullWidth: c=!1, inputComponent: f="input", label: p, multiline: v=!1, notched: x, slots: g={}, type: P="text"} = l
      , m = q(l, $k)
      , h = Vk(l)
      , d = ei()
      , y = Zo({
        props: l,
        muiFormControl: d,
        states: ["required"]
    })
      , A = w({}, l, {
        color: y.color || "primary",
        disabled: y.disabled,
        error: y.error,
        focused: y.focused,
        formControl: d,
        fullWidth: c,
        hiddenLabel: y.hiddenLabel,
        multiline: v,
        size: y.size,
        type: P
    })
      , E = (r = (o = g.root) != null ? o : u.Root) != null ? r : Uk
      , S = (i = (s = g.input) != null ? s : u.Input) != null ? i : Hk;
    return b(Fp, w({
        slots: {
            root: E,
            input: S
        },
        renderSuffix: I=>b(jk, {
            ownerState: A,
            className: h.notchedOutline,
            label: p != null && p !== "" && y.required ? a || (a = j(C.exports.Fragment, {
                children: [p, "\u2009", "*"]
            })) : p,
            notched: typeof x != "undefined" ? x : Boolean(I.startAdornment || I.filled || I.focused)
        }),
        fullWidth: c,
        inputComponent: f,
        multiline: v,
        ref: n,
        type: P
    }, m, {
        classes: w({}, h, {
            notchedOutline: null
        })
    }))
});
jy.muiName = "Input";
var Hy = jy;
function Wk(e) {
    return ve("MuiFormLabel", e)
}
const Qk = ye("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
var ji = Qk;
const Gk = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]
  , Kk = e=>{
    const {classes: t, color: n, focused: r, disabled: o, error: i, filled: s, required: a} = e
      , l = {
        root: ["root", `color${ne(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", a && "required"],
        asterisk: ["asterisk", i && "error"]
    };
    return we(l, Wk, t)
}
  , Xk = Y("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ownerState: e},t)=>w({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({theme: e, ownerState: t})=>w({
    color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    [`&.${ji.focused}`]: {
        color: (e.vars || e).palette[t.color].main
    },
    [`&.${ji.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
    },
    [`&.${ji.error}`]: {
        color: (e.vars || e).palette.error.main
    }
}))
  , Yk = Y("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e,t)=>t.asterisk
})(({theme: e})=>({
    [`&.${ji.error}`]: {
        color: (e.vars || e).palette.error.main
    }
}))
  , qk = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiFormLabel"
    })
      , {children: o, className: i, component: s="label"} = r
      , a = q(r, Gk)
      , l = ei()
      , u = Zo({
        props: r,
        muiFormControl: l,
        states: ["color", "required", "focused", "disabled", "error", "filled"]
    })
      , c = w({}, r, {
        color: u.color || "primary",
        component: s,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required
    })
      , f = Kk(c);
    return j(Xk, w({
        as: s,
        ownerState: c,
        className: ee(f.root, i),
        ref: n
    }, a, {
        children: [o, u.required && j(Yk, {
            ownerState: c,
            "aria-hidden": !0,
            className: f.asterisk,
            children: ["\u2009", "*"]
        })]
    }))
});
var Jk = qk;
function Zk(e) {
    return ve("MuiInputLabel", e)
}
ye("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const eR = ["disableAnimation", "margin", "shrink", "variant", "className"]
  , tR = e=>{
    const {classes: t, formControl: n, size: r, shrink: o, disableAnimation: i, variant: s, required: a} = e
      , u = we({
        root: ["root", n && "formControl", !i && "animated", o && "shrink", r === "small" && "sizeSmall", s],
        asterisk: [a && "asterisk"]
    }, Zk, t);
    return w({}, t, u)
}
  , nR = Y(Jk, {
    shouldForwardProp: e=>Gn(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [{
            [`& .${ji.asterisk}`]: t.asterisk
        }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, t[n.variant]]
    }
})(({theme: e, ownerState: t})=>w({
    display: "block",
    transformOrigin: "top left",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%"
}, t.formControl && {
    position: "absolute",
    left: 0,
    top: 0,
    transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
    transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
    transform: "translate(0, -1.5px) scale(0.75)",
    transformOrigin: "top left",
    maxWidth: "133%"
}, !t.disableAnimation && {
    transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
    })
}, t.variant === "filled" && w({
    zIndex: 1,
    pointerEvents: "none",
    transform: "translate(12px, 16px) scale(1)",
    maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
    transform: "translate(12px, 13px) scale(1)"
}, t.shrink && w({
    userSelect: "none",
    pointerEvents: "auto",
    transform: "translate(12px, 7px) scale(0.75)",
    maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
    transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && w({
    zIndex: 1,
    pointerEvents: "none",
    transform: "translate(14px, 16px) scale(1)",
    maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
    transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
    userSelect: "none",
    pointerEvents: "auto",
    maxWidth: "calc(133% - 32px)",
    transform: "translate(14px, -9px) scale(0.75)"
})))
  , rR = C.exports.forwardRef(function(t, n) {
    const r = be({
        name: "MuiInputLabel",
        props: t
    })
      , {disableAnimation: o=!1, shrink: i, className: s} = r
      , a = q(r, eR)
      , l = ei();
    let u = i;
    typeof u == "undefined" && l && (u = l.filled || l.focused || l.adornedStart);
    const c = Zo({
        props: r,
        muiFormControl: l,
        states: ["size", "variant", "required"]
    })
      , f = w({}, r, {
        disableAnimation: o,
        formControl: l,
        shrink: u,
        size: c.size,
        variant: c.variant,
        required: c.required
    })
      , p = tR(f);
    return b(nR, w({
        "data-shrink": u,
        ownerState: f,
        ref: n,
        className: ee(p.root, s)
    }, a, {
        classes: p
    }))
});
var oR = rR;
function iR(e) {
    return ve("MuiFormControl", e)
}
ye("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const sR = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"]
  , aR = e=>{
    const {classes: t, margin: n, fullWidth: r} = e
      , o = {
        root: ["root", n !== "none" && `margin${ne(n)}`, r && "fullWidth"]
    };
    return we(o, iR, t)
}
  , lR = Y("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ownerState: e},t)=>w({}, t.root, t[`margin${ne(e.margin)}`], e.fullWidth && t.fullWidth)
})(({ownerState: e})=>w({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top"
}, e.margin === "normal" && {
    marginTop: 16,
    marginBottom: 8
}, e.margin === "dense" && {
    marginTop: 8,
    marginBottom: 4
}, e.fullWidth && {
    width: "100%"
}))
  , uR = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiFormControl"
    })
      , {children: o, className: i, color: s="primary", component: a="div", disabled: l=!1, error: u=!1, focused: c, fullWidth: f=!1, hiddenLabel: p=!1, margin: v="none", required: x=!1, size: g="medium", variant: P="outlined"} = r
      , m = q(r, sR)
      , h = w({}, r, {
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: f,
        hiddenLabel: p,
        margin: v,
        required: x,
        size: g,
        variant: P
    })
      , d = aR(h)
      , [y,A] = C.exports.useState(()=>{
        let U = !1;
        return o && C.exports.Children.forEach(o, D=>{
            if (!ha(D, ["Input", "Select"]))
                return;
            const F = ha(D, ["Select"]) ? D.props.input : D;
            F && mk(F.props) && (U = !0)
        }
        ),
        U
    }
    )
      , [E,S] = C.exports.useState(()=>{
        let U = !1;
        return o && C.exports.Children.forEach(o, D=>{
            !ha(D, ["Input", "Select"]) || Bp(D.props, !0) && (U = !0)
        }
        ),
        U
    }
    )
      , [I,R] = C.exports.useState(!1);
    l && I && R(!1);
    const k = c !== void 0 && !l ? c : I;
    let O;
    const W = C.exports.useMemo(()=>({
        adornedStart: y,
        setAdornedStart: A,
        color: s,
        disabled: l,
        error: u,
        filled: E,
        focused: k,
        fullWidth: f,
        hiddenLabel: p,
        size: g,
        onBlur: ()=>{
            R(!1)
        }
        ,
        onEmpty: ()=>{
            S(!1)
        }
        ,
        onFilled: ()=>{
            S(!0)
        }
        ,
        onFocus: ()=>{
            R(!0)
        }
        ,
        registerEffect: O,
        required: x,
        variant: P
    }), [y, s, l, u, E, k, f, p, O, x, g, P]);
    return b(Mp.Provider, {
        value: W,
        children: b(lR, w({
            as: a,
            ownerState: h,
            className: ee(d.root, i),
            ref: n
        }, m, {
            children: o
        }))
    })
});
var cR = uR;
function dR(e) {
    return ve("MuiFormHelperText", e)
}
const pR = ye("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var pm = pR, fm;
const fR = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]
  , hR = e=>{
    const {classes: t, contained: n, size: r, disabled: o, error: i, filled: s, focused: a, required: l} = e
      , u = {
        root: ["root", o && "disabled", i && "error", r && `size${ne(r)}`, n && "contained", a && "focused", s && "filled", l && "required"]
    };
    return we(u, dR, t)
}
  , mR = Y("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.root, n.size && t[`size${ne(n.size)}`], n.contained && t.contained, n.filled && t.filled]
    }
})(({theme: e, ownerState: t})=>w({
    color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
    textAlign: "left",
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    [`&.${pm.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
    },
    [`&.${pm.error}`]: {
        color: (e.vars || e).palette.error.main
    }
}, t.size === "small" && {
    marginTop: 4
}, t.contained && {
    marginLeft: 14,
    marginRight: 14
}))
  , gR = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiFormHelperText"
    })
      , {children: o, className: i, component: s="p"} = r
      , a = q(r, fR)
      , l = ei()
      , u = Zo({
        props: r,
        muiFormControl: l,
        states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
    })
      , c = w({}, r, {
        component: s,
        contained: u.variant === "filled" || u.variant === "outlined",
        variant: u.variant,
        size: u.size,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required
    })
      , f = hR(c);
    return b(mR, w({
        as: s,
        ownerState: c,
        className: ee(f.root, i),
        ref: n
    }, a, {
        children: o === " " ? fm || (fm = b("span", {
            className: "notranslate",
            children: "\u200B"
        })) : o
    }))
});
var vR = gR;
const yR = C.exports.createContext({});
var xR = yR;
function CR(e) {
    return ve("MuiList", e)
}
ye("MuiList", ["root", "padding", "dense", "subheader"]);
const wR = ["children", "className", "component", "dense", "disablePadding", "subheader"]
  , AR = e=>{
    const {classes: t, disablePadding: n, dense: r, subheader: o} = e;
    return we({
        root: ["root", !n && "padding", r && "dense", o && "subheader"]
    }, CR, t)
}
  , bR = Y("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader]
    }
})(({ownerState: e})=>w({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative"
}, !e.disablePadding && {
    paddingTop: 8,
    paddingBottom: 8
}, e.subheader && {
    paddingTop: 0
}))
  , SR = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiList"
    })
      , {children: o, className: i, component: s="ul", dense: a=!1, disablePadding: l=!1, subheader: u} = r
      , c = q(r, wR)
      , f = C.exports.useMemo(()=>({
        dense: a
    }), [a])
      , p = w({}, r, {
        component: s,
        dense: a,
        disablePadding: l
    })
      , v = AR(p);
    return b(xR.Provider, {
        value: f,
        children: j(bR, w({
            as: s,
            className: ee(v.root, i),
            ref: n,
            ownerState: p
        }, c, {
            children: [u, o]
        }))
    })
});
var ER = SR;
const PR = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Vu(e, t, n) {
    return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild
}
function hm(e, t, n) {
    return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild
}
function Wy(e, t) {
    if (t === void 0)
        return !0;
    let n = e.innerText;
    return n === void 0 && (n = e.textContent),
    n = n.trim().toLowerCase(),
    n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0
}
function Ci(e, t, n, r, o, i) {
    let s = !1
      , a = o(e, t, t ? n : !1);
    for (; a; ) {
        if (a === e.firstChild) {
            if (s)
                return !1;
            s = !0
        }
        const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
        if (!a.hasAttribute("tabindex") || !Wy(a, i) || l)
            a = o(e, a, n);
        else
            return a.focus(),
            !0
    }
    return !1
}
const IR = C.exports.forwardRef(function(t, n) {
    const {actions: r, autoFocus: o=!1, autoFocusItem: i=!1, children: s, className: a, disabledItemsFocusable: l=!1, disableListWrap: u=!1, onKeyDown: c, variant: f="selectedMenu"} = t
      , p = q(t, PR)
      , v = C.exports.useRef(null)
      , x = C.exports.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null
    });
    Hn(()=>{
        o && v.current.focus()
    }
    , [o]),
    C.exports.useImperativeHandle(r, ()=>({
        adjustStyleForScrollbar: (d,y)=>{
            const A = !v.current.style.width;
            if (d.clientHeight < v.current.clientHeight && A) {
                const E = `${Fv(ht(d))}px`;
                v.current.style[y.direction === "rtl" ? "paddingLeft" : "paddingRight"] = E,
                v.current.style.width = `calc(100% + ${E})`
            }
            return v.current
        }
    }), []);
    const g = d=>{
        const y = v.current
          , A = d.key
          , E = ht(y).activeElement;
        if (A === "ArrowDown")
            d.preventDefault(),
            Ci(y, E, u, l, Vu);
        else if (A === "ArrowUp")
            d.preventDefault(),
            Ci(y, E, u, l, hm);
        else if (A === "Home")
            d.preventDefault(),
            Ci(y, null, u, l, Vu);
        else if (A === "End")
            d.preventDefault(),
            Ci(y, null, u, l, hm);
        else if (A.length === 1) {
            const S = x.current
              , I = A.toLowerCase()
              , R = performance.now();
            S.keys.length > 0 && (R - S.lastTime > 500 ? (S.keys = [],
            S.repeating = !0,
            S.previousKeyMatched = !0) : S.repeating && I !== S.keys[0] && (S.repeating = !1)),
            S.lastTime = R,
            S.keys.push(I);
            const k = E && !S.repeating && Wy(E, S);
            S.previousKeyMatched && (k || Ci(y, E, !1, l, Vu, S)) ? d.preventDefault() : S.previousKeyMatched = !1
        }
        c && c(d)
    }
      , P = Je(v, n);
    let m = -1;
    C.exports.Children.forEach(s, (d,y)=>{
        !C.exports.isValidElement(d) || (d.props.disabled || (f === "selectedMenu" && d.props.selected || m === -1) && (m = y),
        m === y && (d.props.disabled || d.props.muiSkipListHighlight || d.type.muiSkipListHighlight) && (m += 1,
        m >= s.length && (m = -1)))
    }
    );
    const h = C.exports.Children.map(s, (d,y)=>{
        if (y === m) {
            const A = {};
            return i && (A.autoFocus = !0),
            d.props.tabIndex === void 0 && f === "selectedMenu" && (A.tabIndex = 0),
            C.exports.cloneElement(d, A)
        }
        return d
    }
    );
    return b(ER, w({
        role: "menu",
        ref: P,
        className: a,
        onKeyDown: g,
        tabIndex: o ? 0 : -1
    }, p, {
        children: h
    }))
});
var kR = IR;
const RR = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]
  , TR = {
    entering: {
        opacity: 1
    },
    entered: {
        opacity: 1
    }
}
  , NR = C.exports.forwardRef(function(t, n) {
    const r = qo()
      , o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen
    }
      , {addEndListener: i, appear: s=!0, children: a, easing: l, in: u, onEnter: c, onEntered: f, onEntering: p, onExit: v, onExited: x, onExiting: g, style: P, timeout: m=o, TransitionComponent: h=Ap} = t
      , d = q(t, RR)
      , y = C.exports.useRef(null)
      , A = Je(y, a.ref, n)
      , E = D=>F=>{
        if (D) {
            const V = y.current;
            F === void 0 ? D(V) : D(V, F)
        }
    }
      , S = E(p)
      , I = E((D,F)=>{
        Ry(D);
        const V = jo({
            style: P,
            timeout: m,
            easing: l
        }, {
            mode: "enter"
        });
        D.style.webkitTransition = r.transitions.create("opacity", V),
        D.style.transition = r.transitions.create("opacity", V),
        c && c(D, F)
    }
    )
      , R = E(f)
      , k = E(g)
      , O = E(D=>{
        const F = jo({
            style: P,
            timeout: m,
            easing: l
        }, {
            mode: "exit"
        });
        D.style.webkitTransition = r.transitions.create("opacity", F),
        D.style.transition = r.transitions.create("opacity", F),
        v && v(D)
    }
    )
      , W = E(x);
    return b(h, w({
        appear: s,
        in: u,
        nodeRef: y,
        onEnter: I,
        onEntered: R,
        onEntering: S,
        onExit: O,
        onExited: W,
        onExiting: k,
        addEndListener: D=>{
            i && i(y.current, D)
        }
        ,
        timeout: m
    }, d, {
        children: (D,F)=>C.exports.cloneElement(a, w({
            style: w({
                opacity: 0,
                visibility: D === "exited" && !u ? "hidden" : void 0
            }, TR[D], P, a.props.style),
            ref: A
        }, F))
    }))
});
var LR = NR;
function OR(e) {
    return ve("MuiBackdrop", e)
}
ye("MuiBackdrop", ["root", "invisible"]);
const MR = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"]
  , BR = e=>{
    const {classes: t, invisible: n} = e;
    return we({
        root: ["root", n && "invisible"]
    }, OR, t)
}
  , FR = Y("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.root, n.invisible && t.invisible]
    }
})(({ownerState: e})=>w({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent"
}, e.invisible && {
    backgroundColor: "transparent"
}))
  , _R = C.exports.forwardRef(function(t, n) {
    var r, o, i;
    const s = be({
        props: t,
        name: "MuiBackdrop"
    })
      , {children: a, className: l, component: u="div", components: c={}, componentsProps: f={}, invisible: p=!1, open: v, slotProps: x={}, slots: g={}, TransitionComponent: P=LR, transitionDuration: m} = s
      , h = q(s, MR)
      , d = w({}, s, {
        component: u,
        invisible: p
    })
      , y = BR(d)
      , A = (r = x.root) != null ? r : f.root;
    return b(P, w({
        in: v,
        timeout: m
    }, h, {
        children: b(FR, w({
            "aria-hidden": !0
        }, A, {
            as: (o = (i = g.root) != null ? i : c.Root) != null ? o : u,
            className: ee(y.root, l, A == null ? void 0 : A.className),
            ownerState: w({}, d, A == null ? void 0 : A.ownerState),
            classes: y,
            ref: n,
            children: a
        }))
    }))
});
var DR = _R;
const zR = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "slotProps", "slots", "theme"]
  , $R = Y("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.root, !n.open && n.exited && t.hidden]
    }
})(({theme: e, ownerState: t})=>w({
    position: "fixed",
    zIndex: (e.vars || e).zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0
}, !t.open && t.exited && {
    visibility: "hidden"
}))
  , VR = Y(DR, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e,t)=>t.backdrop
})({
    zIndex: -1
})
  , UR = C.exports.forwardRef(function(t, n) {
    var r, o, i, s, a, l;
    const u = be({
        name: "MuiModal",
        props: t
    })
      , {BackdropComponent: c=VR, BackdropProps: f, classes: p, className: v, closeAfterTransition: x=!1, children: g, component: P, components: m={}, componentsProps: h={}, disableAutoFocus: d=!1, disableEnforceFocus: y=!1, disableEscapeKeyDown: A=!1, disablePortal: E=!1, disableRestoreFocus: S=!1, disableScrollLock: I=!1, hideBackdrop: R=!1, keepMounted: k=!1, slotProps: O, slots: W, theme: U} = u
      , D = q(u, zR)
      , [F,V] = C.exports.useState(!0)
      , K = {
        closeAfterTransition: x,
        disableAutoFocus: d,
        disableEnforceFocus: y,
        disableEscapeKeyDown: A,
        disablePortal: E,
        disableRestoreFocus: S,
        disableScrollLock: I,
        hideBackdrop: R,
        keepMounted: k
    }
      , N = w({}, u, K, {
        exited: F
    })
      , $ = (r = (o = W == null ? void 0 : W.root) != null ? o : m.Root) != null ? r : $R
      , B = (i = (s = W == null ? void 0 : W.backdrop) != null ? s : m.Backdrop) != null ? i : c
      , Q = (a = O == null ? void 0 : O.root) != null ? a : h.root
      , X = (l = O == null ? void 0 : O.backdrop) != null ? l : h.backdrop;
    return b(zw, w({
        slots: {
            root: $,
            backdrop: B
        },
        slotProps: {
            root: ()=>w({}, Dc(Q, N), !Wa($) && {
                as: P,
                theme: U
            }, {
                className: ee(v, Q == null ? void 0 : Q.className, p == null ? void 0 : p.root, !N.open && N.exited && (p == null ? void 0 : p.hidden))
            }),
            backdrop: ()=>w({}, f, Dc(X, N), {
                className: ee(X == null ? void 0 : X.className, p == null ? void 0 : p.backdrop)
            })
        },
        onTransitionEnter: ()=>V(!1),
        onTransitionExited: ()=>V(!0),
        ref: n
    }, D, K, {
        children: g
    }))
});
var jR = UR;
function HR(e) {
    return ve("MuiPopover", e)
}
ye("MuiPopover", ["root", "paper"]);
const WR = ["onEntering"]
  , QR = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
function mm(e, t) {
    let n = 0;
    return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height),
    n
}
function gm(e, t) {
    let n = 0;
    return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width),
    n
}
function vm(e) {
    return [e.horizontal, e.vertical].map(t=>typeof t == "number" ? `${t}px` : t).join(" ")
}
function Uu(e) {
    return typeof e == "function" ? e() : e
}
const GR = e=>{
    const {classes: t} = e;
    return we({
        root: ["root"],
        paper: ["paper"]
    }, HR, t)
}
  , KR = Y(jR, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e,t)=>t.root
})({})
  , XR = Y(Np, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e,t)=>t.paper
})({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0
})
  , YR = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiPopover"
    })
      , {action: o, anchorEl: i, anchorOrigin: s={
        vertical: "top",
        horizontal: "left"
    }, anchorPosition: a, anchorReference: l="anchorEl", children: u, className: c, container: f, elevation: p=8, marginThreshold: v=16, open: x, PaperProps: g={}, transformOrigin: P={
        vertical: "top",
        horizontal: "left"
    }, TransitionComponent: m=qc, transitionDuration: h="auto", TransitionProps: {onEntering: d}={}} = r
      , y = q(r.TransitionProps, WR)
      , A = q(r, QR)
      , E = C.exports.useRef()
      , S = Je(E, g.ref)
      , I = w({}, r, {
        anchorOrigin: s,
        anchorReference: l,
        elevation: p,
        marginThreshold: v,
        PaperProps: g,
        transformOrigin: P,
        TransitionComponent: m,
        transitionDuration: h,
        TransitionProps: y
    })
      , R = GR(I)
      , k = C.exports.useCallback(()=>{
        if (l === "anchorPosition")
            return a;
        const B = Uu(i)
          , X = (B && B.nodeType === 1 ? B : ht(E.current).body).getBoundingClientRect();
        return {
            top: X.top + mm(X, s.vertical),
            left: X.left + gm(X, s.horizontal)
        }
    }
    , [i, s.horizontal, s.vertical, a, l])
      , O = C.exports.useCallback(B=>({
        vertical: mm(B, P.vertical),
        horizontal: gm(B, P.horizontal)
    }), [P.horizontal, P.vertical])
      , W = C.exports.useCallback(B=>{
        const Q = {
            width: B.offsetWidth,
            height: B.offsetHeight
        }
          , X = O(Q);
        if (l === "none")
            return {
                top: null,
                left: null,
                transformOrigin: vm(X)
            };
        const ce = k();
        let J = ce.top - X.vertical
          , te = ce.left - X.horizontal;
        const H = J + Q.height
          , oe = te + Q.width
          , ie = xr(Uu(i))
          , re = ie.innerHeight - v
          , Pe = ie.innerWidth - v;
        if (J < v) {
            const Z = J - v;
            J -= Z,
            X.vertical += Z
        } else if (H > re) {
            const Z = H - re;
            J -= Z,
            X.vertical += Z
        }
        if (te < v) {
            const Z = te - v;
            te -= Z,
            X.horizontal += Z
        } else if (oe > Pe) {
            const Z = oe - Pe;
            te -= Z,
            X.horizontal += Z
        }
        return {
            top: `${Math.round(J)}px`,
            left: `${Math.round(te)}px`,
            transformOrigin: vm(X)
        }
    }
    , [i, l, k, O, v])
      , [U,D] = C.exports.useState(x)
      , F = C.exports.useCallback(()=>{
        const B = E.current;
        if (!B)
            return;
        const Q = W(B);
        Q.top !== null && (B.style.top = Q.top),
        Q.left !== null && (B.style.left = Q.left),
        B.style.transformOrigin = Q.transformOrigin,
        D(!0)
    }
    , [W])
      , V = (B,Q)=>{
        d && d(B, Q),
        F()
    }
      , K = ()=>{
        D(!1)
    }
    ;
    C.exports.useEffect(()=>{
        x && F()
    }
    ),
    C.exports.useImperativeHandle(o, ()=>x ? {
        updatePosition: ()=>{
            F()
        }
    } : null, [x, F]),
    C.exports.useEffect(()=>{
        if (!x)
            return;
        const B = Yd(()=>{
            F()
        }
        )
          , Q = xr(i);
        return Q.addEventListener("resize", B),
        ()=>{
            B.clear(),
            Q.removeEventListener("resize", B)
        }
    }
    , [i, x, F]);
    let N = h;
    h === "auto" && !m.muiSupportAuto && (N = void 0);
    const $ = f || (i ? ht(Uu(i)).body : void 0);
    return b(KR, w({
        BackdropProps: {
            invisible: !0
        },
        className: ee(R.root, c),
        container: $,
        open: x,
        ref: n,
        ownerState: I
    }, A, {
        children: b(m, w({
            appear: !0,
            in: x,
            onEntering: V,
            onExited: K,
            timeout: N
        }, y, {
            children: b(XR, w({
                elevation: p
            }, g, {
                ref: S,
                className: ee(R.paper, g.className)
            }, U ? void 0 : {
                style: w({}, g.style, {
                    opacity: 0
                })
            }, {
                ownerState: I,
                children: u
            }))
        }))
    }))
});
var qR = YR;
function JR(e) {
    return ve("MuiMenu", e)
}
ye("MuiMenu", ["root", "paper", "list"]);
const ZR = ["onEntering"]
  , eT = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"]
  , tT = {
    vertical: "top",
    horizontal: "right"
}
  , nT = {
    vertical: "top",
    horizontal: "left"
}
  , rT = e=>{
    const {classes: t} = e;
    return we({
        root: ["root"],
        paper: ["paper"],
        list: ["list"]
    }, JR, t)
}
  , oT = Y(qR, {
    shouldForwardProp: e=>Gn(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e,t)=>t.root
})({})
  , iT = Y(Np, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e,t)=>t.paper
})({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
})
  , sT = Y(kR, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e,t)=>t.list
})({
    outline: 0
})
  , aT = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiMenu"
    })
      , {autoFocus: o=!0, children: i, disableAutoFocusItem: s=!1, MenuListProps: a={}, onClose: l, open: u, PaperProps: c={}, PopoverClasses: f, transitionDuration: p="auto", TransitionProps: {onEntering: v}={}, variant: x="selectedMenu"} = r
      , g = q(r.TransitionProps, ZR)
      , P = q(r, eT)
      , m = qo()
      , h = m.direction === "rtl"
      , d = w({}, r, {
        autoFocus: o,
        disableAutoFocusItem: s,
        MenuListProps: a,
        onEntering: v,
        PaperProps: c,
        transitionDuration: p,
        TransitionProps: g,
        variant: x
    })
      , y = rT(d)
      , A = o && !s && u
      , E = C.exports.useRef(null)
      , S = (k,O)=>{
        E.current && E.current.adjustStyleForScrollbar(k, m),
        v && v(k, O)
    }
      , I = k=>{
        k.key === "Tab" && (k.preventDefault(),
        l && l(k, "tabKeyDown"))
    }
    ;
    let R = -1;
    return C.exports.Children.map(i, (k,O)=>{
        !C.exports.isValidElement(k) || k.props.disabled || (x === "selectedMenu" && k.props.selected || R === -1) && (R = O)
    }
    ),
    b(oT, w({
        onClose: l,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: h ? "right" : "left"
        },
        transformOrigin: h ? tT : nT,
        PaperProps: w({
            as: iT
        }, c, {
            classes: w({}, c.classes, {
                root: y.paper
            })
        }),
        className: y.root,
        open: u,
        ref: n,
        transitionDuration: p,
        TransitionProps: w({
            onEntering: S
        }, g),
        ownerState: d
    }, P, {
        classes: f,
        children: b(sT, w({
            onKeyDown: I,
            actions: E,
            autoFocus: o && (R === -1 || s),
            autoFocusItem: A,
            variant: x
        }, a, {
            className: ee(y.list, a.className),
            children: i
        }))
    }))
});
var lT = aT;
function uT(e) {
    return ve("MuiNativeSelect", e)
}
const cT = ye("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]);
var _p = cT;
const dT = ["className", "disabled", "IconComponent", "inputRef", "variant"]
  , pT = e=>{
    const {classes: t, variant: n, disabled: r, multiple: o, open: i} = e
      , s = {
        select: ["select", n, r && "disabled", o && "multiple"],
        icon: ["icon", `icon${ne(n)}`, i && "iconOpen", r && "disabled"]
    };
    return we(s, uT, t)
}
  , Qy = ({ownerState: e, theme: t})=>w({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": w({}, t.vars ? {
        backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
    } : {
        backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
    }, {
        borderRadius: 0
    }),
    "&::-ms-expand": {
        display: "none"
    },
    [`&.${_p.disabled}`]: {
        cursor: "default"
    },
    "&[multiple]": {
        height: "auto"
    },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
        backgroundColor: (t.vars || t).palette.background.paper
    },
    "&&&": {
        paddingRight: 24,
        minWidth: 16
    }
}, e.variant === "filled" && {
    "&&&": {
        paddingRight: 32
    }
}, e.variant === "outlined" && {
    borderRadius: (t.vars || t).shape.borderRadius,
    "&:focus": {
        borderRadius: (t.vars || t).shape.borderRadius
    },
    "&&&": {
        paddingRight: 32
    }
})
  , fT = Y("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: Gn,
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.select, t[n.variant], {
            [`&.${_p.multiple}`]: t.multiple
        }]
    }
})(Qy)
  , Gy = ({ownerState: e, theme: t})=>w({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (t.vars || t).palette.action.active,
    [`&.${_p.disabled}`]: {
        color: (t.vars || t).palette.action.disabled
    }
}, e.open && {
    transform: "rotate(180deg)"
}, e.variant === "filled" && {
    right: 7
}, e.variant === "outlined" && {
    right: 7
})
  , hT = Y("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.icon, n.variant && t[`icon${ne(n.variant)}`], n.open && t.iconOpen]
    }
})(Gy)
  , mT = C.exports.forwardRef(function(t, n) {
    const {className: r, disabled: o, IconComponent: i, inputRef: s, variant: a="standard"} = t
      , l = q(t, dT)
      , u = w({}, t, {
        disabled: o,
        variant: a
    })
      , c = pT(u);
    return j(C.exports.Fragment, {
        children: [b(fT, w({
            ownerState: u,
            className: ee(c.select, r),
            disabled: o,
            ref: s || n
        }, l)), t.multiple ? null : b(hT, {
            as: i,
            ownerState: u,
            className: c.icon
        })]
    })
});
var gT = mT;
function vT(e) {
    return ve("MuiSelect", e)
}
const yT = ye("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]);
var ta = yT, ym;
const xT = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]
  , CT = Y("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [{
            [`&.${ta.select}`]: t.select
        }, {
            [`&.${ta.select}`]: t[n.variant]
        }, {
            [`&.${ta.multiple}`]: t.multiple
        }]
    }
})(Qy, {
    [`&.${ta.select}`]: {
        height: "auto",
        minHeight: "1.4375em",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
    }
})
  , wT = Y("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e,t)=>{
        const {ownerState: n} = e;
        return [t.icon, n.variant && t[`icon${ne(n.variant)}`], n.open && t.iconOpen]
    }
})(Gy)
  , AT = Y("input", {
    shouldForwardProp: e=>GS(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e,t)=>t.nativeInput
})({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box"
});
function xm(e, t) {
    return typeof t == "object" && t !== null ? e === t : String(e) === String(t)
}
function bT(e) {
    return e == null || typeof e == "string" && !e.trim()
}
const ST = e=>{
    const {classes: t, variant: n, disabled: r, multiple: o, open: i} = e
      , s = {
        select: ["select", n, r && "disabled", o && "multiple"],
        icon: ["icon", `icon${ne(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"]
    };
    return we(s, vT, t)
}
  , ET = C.exports.forwardRef(function(t, n) {
    const {"aria-describedby": r, "aria-label": o, autoFocus: i, autoWidth: s, children: a, className: l, defaultOpen: u, defaultValue: c, disabled: f, displayEmpty: p, IconComponent: v, inputRef: x, labelId: g, MenuProps: P={}, multiple: m, name: h, onBlur: d, onChange: y, onClose: A, onFocus: E, onOpen: S, open: I, readOnly: R, renderValue: k, SelectDisplayProps: O={}, tabIndex: W, value: U, variant: D="standard"} = t
      , F = q(t, xT)
      , [V,K] = as({
        controlled: U,
        default: c,
        name: "Select"
    })
      , [N,$] = as({
        controlled: I,
        default: u,
        name: "Select"
    })
      , B = C.exports.useRef(null)
      , Q = C.exports.useRef(null)
      , [X,ce] = C.exports.useState(null)
      , {current: J} = C.exports.useRef(I != null)
      , [te,H] = C.exports.useState()
      , oe = Je(n, x)
      , ie = C.exports.useCallback(M=>{
        Q.current = M,
        M && ce(M)
    }
    , [])
      , re = X == null ? void 0 : X.parentNode;
    C.exports.useImperativeHandle(oe, ()=>({
        focus: ()=>{
            Q.current.focus()
        }
        ,
        node: B.current,
        value: V
    }), [V]),
    C.exports.useEffect(()=>{
        u && N && X && !J && (H(s ? null : re.clientWidth),
        Q.current.focus())
    }
    , [X, s]),
    C.exports.useEffect(()=>{
        i && Q.current.focus()
    }
    , [i]),
    C.exports.useEffect(()=>{
        if (!g)
            return;
        const M = ht(Q.current).getElementById(g);
        if (M) {
            const ue = ()=>{
                getSelection().isCollapsed && Q.current.focus()
            }
            ;
            return M.addEventListener("click", ue),
            ()=>{
                M.removeEventListener("click", ue)
            }
        }
    }
    , [g]);
    const Pe = (M,ue)=>{
        M ? S && S(ue) : A && A(ue),
        J || (H(s ? null : re.clientWidth),
        $(M))
    }
      , Z = M=>{
        M.button === 0 && (M.preventDefault(),
        Q.current.focus(),
        Pe(!0, M))
    }
      , Te = M=>{
        Pe(!1, M)
    }
      , nt = C.exports.Children.toArray(a)
      , bt = M=>{
        const ue = nt.map(ut=>ut.props.value).indexOf(M.target.value);
        if (ue === -1)
            return;
        const Ie = nt[ue];
        K(Ie.props.value),
        y && y(M, Ie)
    }
      , Ke = M=>ue=>{
        let Ie;
        if (!!ue.currentTarget.hasAttribute("tabindex")) {
            if (m) {
                Ie = Array.isArray(V) ? V.slice() : [];
                const ut = V.indexOf(M.props.value);
                ut === -1 ? Ie.push(M.props.value) : Ie.splice(ut, 1)
            } else
                Ie = M.props.value;
            if (M.props.onClick && M.props.onClick(ue),
            V !== Ie && (K(Ie),
            y)) {
                const ut = ue.nativeEvent || ue
                  , Yr = new ut.constructor(ut.type,ut);
                Object.defineProperty(Yr, "target", {
                    writable: !0,
                    value: {
                        value: Ie,
                        name: h
                    }
                }),
                y(Yr, M)
            }
            m || Pe(!1, ue)
        }
    }
      , Wt = M=>{
        R || [" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(M.key) !== -1 && (M.preventDefault(),
        Pe(!0, M))
    }
      , he = X !== null && N
      , gn = M=>{
        !he && d && (Object.defineProperty(M, "target", {
            writable: !0,
            value: {
                value: V,
                name: h
            }
        }),
        d(M))
    }
    ;
    delete F["aria-invalid"];
    let at, We;
    const Se = [];
    let gt = !1;
    (Bp({
        value: V
    }) || p) && (k ? at = k(V) : gt = !0);
    const lt = nt.map(M=>{
        if (!C.exports.isValidElement(M))
            return null;
        let ue;
        if (m) {
            if (!Array.isArray(V))
                throw new Error(yr(2));
            ue = V.some(Ie=>xm(Ie, M.props.value)),
            ue && gt && Se.push(M.props.children)
        } else
            ue = xm(V, M.props.value),
            ue && gt && (We = M.props.children);
        return C.exports.cloneElement(M, {
            "aria-selected": ue ? "true" : "false",
            onClick: Ke(M),
            onKeyUp: Ie=>{
                Ie.key === " " && Ie.preventDefault(),
                M.props.onKeyUp && M.props.onKeyUp(Ie)
            }
            ,
            role: "option",
            selected: ue,
            value: void 0,
            "data-value": M.props.value
        })
    }
    );
    gt && (m ? Se.length === 0 ? at = null : at = Se.reduce((M,ue,Ie)=>(M.push(ue),
    Ie < Se.length - 1 && M.push(", "),
    M), []) : at = We);
    let Xe = te;
    !s && J && X && (Xe = re.clientWidth);
    let _e;
    typeof W != "undefined" ? _e = W : _e = f ? null : 0;
    const St = O.id || (h ? `mui-component-select-${h}` : void 0)
      , vt = w({}, t, {
        variant: D,
        value: V,
        open: he
    })
      , de = ST(vt);
    return j(C.exports.Fragment, {
        children: [b(CT, w({
            ref: ie,
            tabIndex: _e,
            role: "button",
            "aria-disabled": f ? "true" : void 0,
            "aria-expanded": he ? "true" : "false",
            "aria-haspopup": "listbox",
            "aria-label": o,
            "aria-labelledby": [g, St].filter(Boolean).join(" ") || void 0,
            "aria-describedby": r,
            onKeyDown: Wt,
            onMouseDown: f || R ? null : Z,
            onBlur: gn,
            onFocus: E
        }, O, {
            ownerState: vt,
            className: ee(O.className, de.select, l),
            id: St,
            children: bT(at) ? ym || (ym = b("span", {
                className: "notranslate",
                children: "\u200B"
            })) : at
        })), b(AT, w({
            value: Array.isArray(V) ? V.join(",") : V,
            name: h,
            ref: B,
            "aria-hidden": !0,
            onChange: bt,
            tabIndex: -1,
            disabled: f,
            className: de.nativeInput,
            autoFocus: i,
            ownerState: vt
        }, F)), b(wT, {
            as: v,
            className: de.icon,
            ownerState: vt
        }), b(lT, w({
            id: `menu-${h || ""}`,
            anchorEl: re,
            open: he,
            onClose: Te,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
            },
            transformOrigin: {
                vertical: "top",
                horizontal: "center"
            }
        }, P, {
            MenuListProps: w({
                "aria-labelledby": g,
                role: "listbox",
                disableListWrap: !0
            }, P.MenuListProps),
            PaperProps: w({}, P.PaperProps, {
                style: w({
                    minWidth: Xe
                }, P.PaperProps != null ? P.PaperProps.style : null)
            }),
            children: lt
        }))]
    })
});
var PT = ET, IT = Ey(b("path", {
    d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Cm, wm;
const kT = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]
  , RT = e=>{
    const {classes: t} = e;
    return t
}
  , Dp = {
    name: "MuiSelect",
    overridesResolver: (e,t)=>t.root,
    shouldForwardProp: e=>Gn(e) && e !== "variant",
    slot: "Root"
}
  , TT = Y($y, Dp)("")
  , NT = Y(Hy, Dp)("")
  , LT = Y(Uy, Dp)("")
  , Ky = C.exports.forwardRef(function(t, n) {
    const r = be({
        name: "MuiSelect",
        props: t
    })
      , {autoWidth: o=!1, children: i, classes: s={}, className: a, defaultOpen: l=!1, displayEmpty: u=!1, IconComponent: c=IT, id: f, input: p, inputProps: v, label: x, labelId: g, MenuProps: P, multiple: m=!1, native: h=!1, onClose: d, onOpen: y, open: A, renderValue: E, SelectDisplayProps: S, variant: I="outlined"} = r
      , R = q(r, kT)
      , k = h ? gT : PT
      , O = ei()
      , U = Zo({
        props: r,
        muiFormControl: O,
        states: ["variant"]
    }).variant || I
      , D = p || {
        standard: Cm || (Cm = b(TT, {})),
        outlined: b(NT, {
            label: x
        }),
        filled: wm || (wm = b(LT, {}))
    }[U]
      , F = w({}, r, {
        variant: U,
        classes: s
    })
      , V = RT(F)
      , K = Je(n, D.ref);
    return b(C.exports.Fragment, {
        children: C.exports.cloneElement(D, w({
            inputComponent: k,
            inputProps: w({
                children: i,
                IconComponent: c,
                variant: U,
                type: void 0,
                multiple: m
            }, h ? {
                id: f
            } : {
                autoWidth: o,
                defaultOpen: l,
                displayEmpty: u,
                labelId: g,
                MenuProps: P,
                onClose: d,
                onOpen: y,
                open: A,
                renderValue: E,
                SelectDisplayProps: w({
                    id: f
                }, S)
            }, v, {
                classes: v ? qt(V, v.classes) : V
            }, p ? p.props.inputProps : {})
        }, m && h && U === "outlined" ? {
            notched: !0
        } : {}, {
            ref: K,
            className: ee(D.props.className, a)
        }, !p && {
            variant: U
        }, R))
    })
});
Ky.muiName = "Select";
var OT = Ky;
function MT(e) {
    return ve("MuiTextField", e)
}
ye("MuiTextField", ["root"]);
const BT = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"]
  , FT = {
    standard: $y,
    filled: Uy,
    outlined: Hy
}
  , _T = e=>{
    const {classes: t} = e;
    return we({
        root: ["root"]
    }, MT, t)
}
  , DT = Y(cR, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e,t)=>t.root
})({})
  , zT = C.exports.forwardRef(function(t, n) {
    const r = be({
        props: t,
        name: "MuiTextField"
    })
      , {autoComplete: o, autoFocus: i=!1, children: s, className: a, color: l="primary", defaultValue: u, disabled: c=!1, error: f=!1, FormHelperTextProps: p, fullWidth: v=!1, helperText: x, id: g, InputLabelProps: P, inputProps: m, InputProps: h, inputRef: d, label: y, maxRows: A, minRows: E, multiline: S=!1, name: I, onBlur: R, onChange: k, onFocus: O, placeholder: W, required: U=!1, rows: D, select: F=!1, SelectProps: V, type: K, value: N, variant: $="outlined"} = r
      , B = q(r, BT)
      , Q = w({}, r, {
        autoFocus: i,
        color: l,
        disabled: c,
        error: f,
        fullWidth: v,
        multiline: S,
        required: U,
        select: F,
        variant: $
    })
      , X = _T(Q)
      , ce = {};
    $ === "outlined" && (P && typeof P.shrink != "undefined" && (ce.notched = P.shrink),
    ce.label = y),
    F && ((!V || !V.native) && (ce.id = void 0),
    ce["aria-describedby"] = void 0);
    const J = qd(g)
      , te = x && J ? `${J}-helper-text` : void 0
      , H = y && J ? `${J}-label` : void 0
      , oe = FT[$]
      , ie = b(oe, w({
        "aria-describedby": te,
        autoComplete: o,
        autoFocus: i,
        defaultValue: u,
        fullWidth: v,
        multiline: S,
        name: I,
        rows: D,
        maxRows: A,
        minRows: E,
        type: K,
        value: N,
        id: J,
        inputRef: d,
        onBlur: R,
        onChange: k,
        onFocus: O,
        placeholder: W,
        inputProps: m
    }, ce, h));
    return j(DT, w({
        className: ee(X.root, a),
        disabled: c,
        error: f,
        fullWidth: v,
        ref: n,
        required: U,
        color: l,
        variant: $,
        ownerState: Q
    }, B, {
        children: [y != null && y !== "" && b(oR, w({
            htmlFor: J,
            id: H
        }, P, {
            children: y
        })), F ? b(OT, w({
            "aria-describedby": te,
            id: J,
            labelId: H,
            value: N,
            input: ie
        }, V, {
            children: s
        })) : ie, x && b(vR, w({
            id: te
        }, p, {
            children: x
        }))]
    }))
});
var $T = zT;
const VT = "viaManualPaste"
  , UT = "viaCmpApi"
  , jT = "success"
  , HT = "error";
function WT({data: e, sectionId: t}) {
    var g;
    const [n,r] = C.exports.useContext(Jo)
      , [o,i] = C.exports.useState("")
      , [s,a] = C.exports.useState(0)
      , [l,u] = C.exports.useState("")
      , c = n[t]
      , f = (g = n.pingData) == null ? void 0 : g.gdprApplies
      , p = "not applicable"
      , v = ()=>{
        var h;
        const P = (h = n.tcData) == null ? void 0 : h.tcString
          , m = PI(P, o);
        r({
            type: Be.setManualTcStringCheck,
            payload: {
                ...m
            }
        }),
        o.length > 1 ? m && (m.comparison ? u(jT) : u(HT),
        a(m.byteSize)) : (u(""),
        a(0))
    }
      , x = (P,m)=>c && j("div", {
        className: "paragraphs-content",
        children: [b("span", {
            className: "paragraphs-titles",
            children: m
        }), f === !1 && t !== "cmpTcfApiCheck" ? b("ul", {
            children: j("span", {
                className: "not-applies-tc-string",
                children: [p, " "]
            })
        }) : b("ul", {
            children: P.map(h=>{
                const d = h.id.split("_");
                if (d[1] == UT) {
                    const y = c[d[1]][d[2]];
                    return f === !1 ? j("span", {
                        className: "not-applies-tc-string",
                        children: [p, " "]
                    }) : y && j(mn, {
                        children: [b("li", {
                            children: j("span", {
                                className: "content-values",
                                children: [" ", typeof y == "boolean" ? y.toString() : y]
                            })
                        }), j("li", {
                            children: [j("span", {
                                className: "bytes-value",
                                children: [" ", c[d[1]].byteSize, " "]
                            }), b("span", {
                                className: "bytes-value",
                                children: " bytes "
                            })]
                        })]
                    })
                }
                if (d[1] == VT)
                    return f === !1 ? j("span", {
                        className: "not-applies-tc-string",
                        children: [p, " "]
                    }) : j(mn, {
                        children: [b("li", {
                            children: b($T, {
                                id: "outlined-multiline-static",
                                multiline: !0,
                                rows: 4,
                                focused: !0,
                                fullWidth: !0,
                                color: l,
                                onBlur: v,
                                value: o,
                                onChange: y=>{
                                    i(y.target.value)
                                }
                            })
                        }), b("li", {
                            children: b("span", {
                                className: "bytes-value",
                                children: s + " bytes"
                            })
                        })]
                    });
                if (d[1] && d[2]) {
                    const y = c[d[1]][d[2]];
                    return y && j("li", {
                        children: [h.text, " ", j("span", {
                            className: "content-values",
                            children: [" ", typeof y == "boolean" ? y.toString() : y, " "]
                        })]
                    })
                }
            }
            )
        })]
    });
    return b("div", {
        className: "paragrahps",
        children: b(ke, {
            container: !0,
            spacing: 2,
            className: "content-group",
            children: e.map(P=>x(P.checks, P.headerTitle))
        })
    })
}
const QT = e=>{
    const t = typeof window.__tcfapi == "function";
    e({
        type: Be.setCmpCommands,
        payload: {
            tcfApi: t,
            tcfApiLocator: t
        }
    })
}
  , GT = e=>{
    window.__tcfapi("ping", 2, t=>{
        e({
            type: Be.setCmpCommands,
            payload: {
                pingResponse: !!t
            }
        }),
        t && typeof t == "object" && typeof t.cmpLoaded == "boolean" && typeof t.cmpStatus == "string" && typeof t.tcfPolicyVersion == "number" && e({
            type: Be.setPing,
            payload: t
        })
    }
    )
}
  , KT = e=>{
    window.__tcfapi("addEventListener", 2, (t,n)=>{
        e({
            type: Be.setCmpCommands,
            payload: {
                addEventListenerResponse: n
            }
        }),
        n && t && typeof t == "object" && typeof t.tcString == "string" && typeof t.isServiceSpecific == "boolean" && typeof t.tcfPolicyVersion == "number" && e({
            type: Be.setTcData,
            payload: t
        })
    }
    )
}
  , XT = e=>{
    window.__tcfapi("addEventListener", 2, (t,n)=>{
        n && t.listenerId ? window.__tcfapi("removeEventListener", 2, (r,o)=>{
            e({
                type: Be.setCmpCommands,
                payload: {
                    removeEventListenerResponse: r || r === void 0 && o
                }
            })
        }
        , t.listenerId) : e({
            type: Be.setCmpCommands,
            payload: {
                addEventListenerResponse: n
            }
        })
    }
    )
}
  , YT = e=>{
    window.__tcfapi("getTCData", 2, (t,n)=>{
        e({
            type: Be.setCmpCommands,
            payload: {
                getTcDataResponse: n
            }
        })
    }
    )
}
  , qT = e=>{
    window.__tcfapi("getInAppTCData", 2, (t,n)=>{
        e({
            type: Be.setCmpCommands,
            payload: {
                getInAppTcDataResponse: n
            }
        })
    }
    )
}
  , JT = e=>{
    window.__tcfapi("getVendorList", 2, (t,n)=>{
        e({
            type: Be.setCmpCommands,
            payload: {
                getVendorListResponse: n
            }
        })
    }
    )
}
  , Pr = {
    tcfApi: QT,
    ping: GT,
    addEventListener: KT,
    removeEventListener: XT,
    getTcData: YT,
    getInAppTCData: qT,
    getVendorList: JT
};
function ZT({data: e}) {
    const [t,n] = C.exports.useState(!1)
      , [r,o] = C.exports.useState({})
      , [i,s] = C.exports.useContext(Jo);
    C.exports.useEffect(async()=>{
        await ok(s),
        await ik(s),
        await sk(s),
        Pr.tcfApi(s),
        Pr.ping(s),
        Pr.addEventListener(s),
        Pr.removeEventListener(s),
        Pr.getTcData(s),
        Pr.getInAppTCData(s),
        Pr.getVendorList(s)
    }
    , []);
    const a = l=>{
        const u = l && (l.manualSteps && l.manualSteps.length > 0 || l.policyReference && l.policyReference.length > 0);
        n(!t),
        o(l),
        u ? (document.getElementById("content-information-page").style.display = "block",
        document.getElementById("App-Content").style.zIndex = "999",
        document.getElementById("content-information-page").style.zIndex = "9999999999") : (document.getElementById("content-information-page").style.display = "none",
        document.getElementById("content-information-page").style.zIndex = "999",
        document.getElementById("App-Content").style.zIndex = "9999999999")
    }
    ;
    return j(mn, {
        children: [j("div", {
            className: "content",
            id: "App-Content",
            children: [b(rk, {
                data: e.summary
            }), b("div", {
                className: "content-collapse",
                id: "content-collapse",
                children: i.structure.map((l,u)=>b(mn, {
                    children: !l.pingData && j(LP, {
                        className: "treeView",
                        TransitionProps: {
                            timeout: 50
                        },
                        children: [b(VP, {
                            className: "collapse-title",
                            expandIcon: b(Oy, {}),
                            id: u,
                            children: j(eI, {
                                className: "treeItem",
                                children: [" ", l.headerTitle, " "]
                            })
                        }), l.subsections ? b(qh, {
                            children: b(WT, {
                                data: l.subsectionsList,
                                sectionId: l.sectionId
                            })
                        }) : b(qh, {
                            children: b(pk, {
                                data: l,
                                showAddInformation: a,
                                sectionId: l.sectionId
                            })
                        })]
                    })
                }))
            })]
        }), b(gI, {
            data: r,
            showAddInformation: a
        })]
    })
}
var e2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb4AAAIACAMAAADKe/lDAAAApVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU/knhAAAANnRSTlMAAwUICw4TFxsfJCgsMDQ2Oj9ERktQVFlfZG1yeH+Di5GXn6Spq7O4vsPK0NXZ3ePo6+/z9/upkoJMAAAN5ElEQVR42u3da1uiTByA8RHNA2pqeSxNLbOVzLN8/4/2XLv7bG2bEoMMMwP3/bq24rciyJ9BiNMVO6OZt94ffdLRcb/2ZqN2UUSpOvJwM0LRG7mSdk5vwXYzqEUnJ6HXW7HFDGvZDYtX99haJr4Ca6H2mw+85ZnZYfj9HrTEm565/fjuKLS+ZiMZ3KoaqNfcsYmMbnsdoNfYs4EMb1c/f6a+ZfMY36ZyRu/qjY1jwxlg4TTfM5vGip5O6g3YMJbUO3XCx0GnNYefJ07/ntgs1jT9er7ORrGnY5XjljQdvbh8Tm3Vy6/8mW/MJrGq0Se93IYtYlWrT3wtNohlXbPvTM3ek/EI21r8pZfnuNO2Dg7n7Db315l7L+DL9uPODemoMwm6et754BsGHKFWBOnKDZg8ugt14NlgI2os4ITu4eOrpme/yGMTam15Vmby8UWPZ79oxhbU2vkrCdMwfE9sQfgIPvjgg4/gI/jggw8+go/ggw8++Ag+gg8+go/ggw8++Ag+gg8++OAj+Ag++OCDj+CDDz74CD6CDz744CP4CD744IOP4CP44IMPPoIPPvjgI/gIPvjgg4/gI/jggw8+go/ggw8++Ag++OCDj+Aj+OCDDz6Cj+CDDz74CD6CDz744CP44IMPPoKP4IMPPvgIPoIPPvjgI/gIPvjYgvARfPDBBx/BR/DBBx98BB/BBx988BF8BB98BB/BBx988BF8BB988MFH8BF88MEHn2ROwaYc+N7LtSave9+u9t6kBd/PekvfzpZd+Ipz397mxYzzVVa+zb1VMs1XslvP99+KWeZ78W1vnmG+vm9/vczyOesU8K2crPJ1/TTUzirfUyr4HrPKt04F3yqjfFep0POP+WzyVdLB55ezyefCZzNfMSV8hYweumxTobfO6pHncyr4Zlnl66eCr5dVvkIa9p6bfFb5xH0K+O6ye8XB8azX85zs8gnX9t3nRvHldsOHJep2+23qGR9Vcl9t3nOqHnUxf1DQGdr6Atzeq5/WtWBMt9Cf2ye4fe4XEtg2lgzJF92aTbnFhLYLt6hYHXzwEXwEH3zwwUfwEXzwwQcfwUfwwQcffAQffPDBR/ARfPDBBx/BR/DBBx98BB/BBx988BF88MEHH8FH8MEHH3wEH8EHH3zwEXwEH3zwwUfwwQcffAQfwQcffPARfAQffPDBR/ARfPDBBx/BBx988BF8BB985vDl8jaVg++j5tjbWfbo2p03bsL3s+7S0idHv3bUb5yZ4XzFucXPbX++Ur15zsuMTeCrvPk2tywr3j6jsz/6zgC+ot16vr9U/ATwztmf3DSA78W3vbnaDXR1OHfs5Ojn6/v219Nz7DIV2vmcVQr43tSeA16f/qlHVz9fx09DbR3HnmOhn+8pFXyPit/9Tu2iXvMG8K1TwbdSfO5Q3X75keuy0M93lQo9/5hX7ffv2dVrWRjAV0kHn6/61F1cTY9//3cZ54UJfC58Yas97f+c702rEp+sqeQrpoSvkMSlh8LtcDKd3LfyUh+MKj102aZCb639mq4mvnkq+GZZ5eungq+XVb5CGvaem3xW+cQwBXz3IrN8zqv1ep6TXT7h2r773Loiw3zi2m6/TV1kmk+4Nu8/X0147ekdFMwPd7buOIeOyDyfEFeDuX2Cu/mgIAR8vytV6zZVLQmD4hYVq4MPPoKP4IMPPvgIPoIPPoKP4CP44CP4CD744IOP4CP44IMPPoKP4IOP4CP4CD74CD6CDz744CP4CD744IOP4CP44CP4CL50V6g2qnn47LS7834+d+O46DvwWVf749lOb034LOv+0wOSBvBZ1VB+qXP4jOnuC8EIPmsanDAYw2dJ/eMphGkOPhvqHk8rPObgs+CM4Xj2MVcOfKZ3czi/8vk8D5/ZtfZBK9f/KMBnco198JMHFlfwmVv920dZeEX4TK0W4llOyxJ8ZuZuwjy55a0Mn4lV1uGevLNy4TOv8ir0U6qr8JlW6U3iqWV1+MyqKPUEw10TPpO68uSePLdvwWdQ+RfJJwce2vCZ5DeX9evAZ1DOTNLv2DONr1S7VlG9krPAL/co6zcwiO9q8KLu2bWHxbBsvt9U9s+6N4XPUf7k6MO0aDzgRPaPGpnBl8hz2zct4/3Gsn/T2AS+662fRIeu8X4j2b9pop/PTUbP94+3xvsNZf+m9wEmXXzOq59UW/MPYO5l/6Y/A0y6+O795LLgDHZwlPyb/h9g0sRX2CbId6yZ79eX9XspaOTr+0k2seAEvifr92sATRPfPFG+tQ0foHUOEd4TNPHtEuXzXRv82rJ+bV18pWT1/LYZQLePgRPvN3u5v8rTxVdLmK9vhN7NwX8OXHSguZPdqejhq2eRr/nzxfUS6NeQ8xto4qskzNcxQO969+0dC0LUpU6oxpr4codk+Qw48Xsfpg64Y+Hnl20k/qypriPPH4nq7fRfua1uQtyx8Ouz4LUFfPeJ8un/1OwTymsp8I0l9OSuP9LFV0p076n9mt8/w9TLwA/Ry6Fnd9vaPrKeJKi30K33ZZh6VQn88mXIuc+CNr7iOjG9g+4Dl+JXjnXg50Ahp68nGi/XthLbfd7p1juFsakGfkuY+etNUeewhPRH7BF70Kx3ZhT+5B0nH9+0+P4y2I3eUaV2Etf8Drpfe4Vz50i7RqRve9frCs2DguWZ+qOWuma9gPsY9q2I3/hL7/fngHrHdOvTjUK7/exG9zGnE3Rhcx/46wXfAPH/sLX2Iflquz9QUb9bd4R2vefgPXvghaygGyD+jFpzi4rKj3a/u4MheAj1/LcPBXzq+/7+hX/vGPrHb/rdwTR8ej9Z+mbJ48np60Twqe8hjk8VxqeuM8CnvtB3Lgzl/plPK3zCpyiJS2LBS1b/cwPE7NO1S/jUdCc39BD6n5p/PhuCT0mSM+/BY+B/3QDx76QTfCqS/jg+eMnq9/8MX+ac4FNQR/5iypMT4r/D4suUGnzxdxvlUuZzoN+vGyC8rzNq8MVeax/pA/bAJcd/3gDxemJCDb64a0bT+3PH3rluvFPzafDF3HX0m6eCB3hPHtzAF2+1S0YIPOlVaOCLtepll5+DB3jhU1zl0vHHZQk+bYVfmfpsbxX4NCWzMvXZVi58Wiou/ThaV+HTkOzK1Oenp2vw2avn+9tr+BKuEOcNp7smfIkmvSj8NwPGN/AlmBP3KlGHNnyJlYv/Zo1DB76k9B79+Ase4IUvvqa+io59+JJo7KsJviR6UKR3x84zgYaK9O45dEkgVesLjThxSKCBIr0xp+0J1Fe0OkboxbfhuyBVa5tMBXzq6yjSe8rBp74bRetCPUssqQBf1Fp7NXpzmQUx4ItYQ5Fe8GLX8MVTXdGTKBYFAZ/yaorWY/OuBHzKcxWt5fUqOyUPX4QqitaSXXKPQwLFMEx9esK6JOBTXizD1KfmqysCPuUVFT22dR3lMWfwSRbjOO7n2eqqgE95hYUavW205e7hkyqv6Ok9u2sBn3q9FzV6+6aAT3nfrG0cfSY38prb8IUvp2jl+0P0Z7PCF8e2umwetyPgU5+ip2aFm4aH78JUDVMPBHzq0zpMDd+FqRqmHgr41HenSG8k4FOf7mFq+C5J+zA1fBfU1T5MDV/02orGcZ9y8KnPhGFq+KJmxDA1fBFTNUz9Iy/gU54hw9TwRcqUYWr4omTMMDV8EVI2TF0S8ClP1TD1qizgU15pqUivIuBTnqph6o0r4FOeWcPU8EmmaDRiVxfwJZCaXWfUYWr4JN/5lFwj2rcEfEnUNWuYGj65VCyQe8EwNXxyKbiB9tgV8CX0gYthw9TwSdU3bJgavpi2ip5havikiv1Sw1DAl1iuacPU8MkU91D1WMCXYDHfRTsR8CVYLt4Jl0cBX5LVjRumhk+iWB+tEcswNXwSxfksxblSPfi+5sQ4mhvTMDV84WuaN0wNX/jiu409tmFq+MIX26pz8Q1Twxe6fFz388U4TA1f6G4MHKaGL3Qxrb+zrgj4NBTPfG68w9Twhe0qlhHBiGsbw3dpbROHqeELWxzLPu4bAj49xTAdH/8wNXwhKxk5TA1fyHpGDlPDF7KLp+OVDFPDF7JL72c/9gV82qqYOUwNX7gunY6/E/Bp7MnMYWr4wnXZdPyDgE9nVUOHqeEL1UULxk8EfHq75AlhjwI+vV0yHT/Lwae5a1OHqeELU/Tp+Je8gE93kR9t+kOTHnx/5URbdnw7vXUEfNqLMh2/ntzkNP7K8H0kPR2/Gjdzen9l+KK+9b091PX/yvBFeutbPtSM+J3hkz/rex1VTfmdz/PNOOs7edPX0DXodz4/2+Flje/ZNrvgNZsbGePbfLvPdI37nQMOlleVTOkFj7kszXm/+7ugucb9uHNjQa3rWO5B7lpnF/sSNLpaji/fvuOz53c1c3cZ+WMq/Pzj7NKbWV9MPr87m+enpN2F480b++zUPS5ExwvwoiHL4pdzhKqwoJafni5Z7bth9Pnd2XKb9PDtL9jo7weex8VdWdjTOEUvv3n0zfB7Bd3jy6AkrMo9psivcQnfYT4oCut6ThHfNPJWqD52C8LGail6+W1E9npM0cvPzR5faZcevtsMvvwG6eHrZZAvRUcv3SzyXb2lha+VRT7hblPCV8okn2jsU6G3FBmtmYrDz4es8on62n69QzmzfKK0sJ5vLDKc82D5x2dvBZHp6laPTuxqIuv17D0D3DYEOV1L3wI9F7zfl75GnnVvgqtBDrj3ip3RzFvvrVA87rzJbTbx/gNSLqxf6tC26QAAAABJRU5ErkJggg=="
  , t2 = "/assets/download.1a5b9dbf.png";
function Am({data: e, found: t}) {
    const [n,r] = C.exports.useContext(Jo);
    return j("div", {
        className: "footer",
        id: "App-footer",
        children: [t && j(mn, {
            children: [n && b(yo, {
                title: "Download report (CSV)",
                children: b(dn, {
                    "aria-label": "info",
                    size: "small",
                    onClick: ()=>{
                        DI(n)
                    }
                    ,
                    className: "downloadBtn",
                    children: b("img", {
                        src: t2,
                        className: "icon-footer"
                    })
                })
            }), b(yo, {
                title: "File a complaint",
                children: b(dn, {
                    "aria-label": "close",
                    size: "small",
                    onClick: ()=>{
                        window.open("https://iabeurope.eu/tcf-non-compliance-submission-form/", "_blank")
                    }
                    ,
                    className: "fileComplaintBtn",
                    children: b("img", {
                        src: e2,
                        className: "icon-footer"
                    })
                })
            })]
        }), b("div", {
            className: "footer-info",
            children: b("span", {
                children: e.title
            })
        })]
    })
}
const n2 = ()=>{
    let e = window, t;
    const n = {};
    for (; e; ) {
        try {
            if (e.frames.__tcfapiLocator) {
                t = e;
                break
            }
        } catch {}
        if (e === window.top)
            break;
        e = e.parent
    }
    window.__tcfapi = function(o, i, s, a) {
        if (!t)
            s({
                msg: "CMP not found"
            }, !1);
        else {
            const l = Math.random() + ""
              , u = {
                __tcfapiCall: {
                    command: o,
                    parameter: a,
                    version: i,
                    callId: l
                }
            };
            n[l] = s,
            t.postMessage(u, "*")
        }
    }
    ;
    function r(o) {
        let i = {};
        try {
            i = typeof o.data == "string" ? JSON.parse(o.data) : o.data
        } catch {}
        const s = i.__tcfapiReturn;
        s && typeof n[s.callId] == "function" && (n[s.callId](s.returnValue, s.success),
        s && s.returnValue && !s.returnValue.listenerId && (n[s.callId] = null))
    }
    window.addEventListener("message", r, !1)
}
;
function b2({found: e}) {
    return e ? (n2(),
    b("div", {
        className: "App",
        id: "App",
        children: j(im, {
            children: [b(Yh, {
                data: Lr.staticContent.header,
                found: e
            }), b(ZT, {
                data: Lr.validatorContent
            }), b(Am, {
                data: Lr.staticContent.footer,
                found: e
            })]
        })
    })) : b("div", {
        className: "App",
        id: "App",
        children: j(im, {
            children: [b(Yh, {
                data: Lr.staticContent.header,
                found: e
            }), j("div", {
                className: "not-found-msg",
                id: "not-found-msg",
                children: [b("h3", {
                    children: "No CMP API found on this webpage."
                }), b("h3", {
                    children: "CMP validator cannot operate."
                })]
            }), b(Am, {
                data: Lr.staticContent.footer,
                found: e
            })]
        })
    })
}
export {b2 as A, bn as R, ef as c, b as j};
