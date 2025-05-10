(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PerspectiveClient"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define("HmiComponents", ["PerspectiveClient", "React"], factory);
	else if(typeof exports === 'object')
		exports["HmiComponents"] = factory(require("PerspectiveClient"), require("React"));
	else
		root["HmiComponents"] = factory(root["PerspectiveClient"], root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__inductiveautomation_perspective_client__, __WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/cjs-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.version = exports.validate = exports.v7 = exports.v6ToV1 = exports.v6 = exports.v5 = exports.v4 = exports.v3 = exports.v1ToV6 = exports.v1 = exports.stringify = exports.parse = exports.NIL = exports.MAX = void 0;
var max_js_1 = __webpack_require__(/*! ./max.js */ "./node_modules/uuid/dist/cjs-browser/max.js");
Object.defineProperty(exports, "MAX", ({ enumerable: true, get: function () { return max_js_1.default; } }));
var nil_js_1 = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/cjs-browser/nil.js");
Object.defineProperty(exports, "NIL", ({ enumerable: true, get: function () { return nil_js_1.default; } }));
var parse_js_1 = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/cjs-browser/parse.js");
Object.defineProperty(exports, "parse", ({ enumerable: true, get: function () { return parse_js_1.default; } }));
var stringify_js_1 = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/cjs-browser/stringify.js");
Object.defineProperty(exports, "stringify", ({ enumerable: true, get: function () { return stringify_js_1.default; } }));
var v1_js_1 = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/cjs-browser/v1.js");
Object.defineProperty(exports, "v1", ({ enumerable: true, get: function () { return v1_js_1.default; } }));
var v1ToV6_js_1 = __webpack_require__(/*! ./v1ToV6.js */ "./node_modules/uuid/dist/cjs-browser/v1ToV6.js");
Object.defineProperty(exports, "v1ToV6", ({ enumerable: true, get: function () { return v1ToV6_js_1.default; } }));
var v3_js_1 = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/cjs-browser/v3.js");
Object.defineProperty(exports, "v3", ({ enumerable: true, get: function () { return v3_js_1.default; } }));
var v4_js_1 = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/cjs-browser/v4.js");
Object.defineProperty(exports, "v4", ({ enumerable: true, get: function () { return v4_js_1.default; } }));
var v5_js_1 = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/cjs-browser/v5.js");
Object.defineProperty(exports, "v5", ({ enumerable: true, get: function () { return v5_js_1.default; } }));
var v6_js_1 = __webpack_require__(/*! ./v6.js */ "./node_modules/uuid/dist/cjs-browser/v6.js");
Object.defineProperty(exports, "v6", ({ enumerable: true, get: function () { return v6_js_1.default; } }));
var v6ToV1_js_1 = __webpack_require__(/*! ./v6ToV1.js */ "./node_modules/uuid/dist/cjs-browser/v6ToV1.js");
Object.defineProperty(exports, "v6ToV1", ({ enumerable: true, get: function () { return v6ToV1_js_1.default; } }));
var v7_js_1 = __webpack_require__(/*! ./v7.js */ "./node_modules/uuid/dist/cjs-browser/v7.js");
Object.defineProperty(exports, "v7", ({ enumerable: true, get: function () { return v7_js_1.default; } }));
var validate_js_1 = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/cjs-browser/validate.js");
Object.defineProperty(exports, "validate", ({ enumerable: true, get: function () { return validate_js_1.default; } }));
var version_js_1 = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/cjs-browser/version.js");
Object.defineProperty(exports, "version", ({ enumerable: true, get: function () { return version_js_1.default; } }));


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/max.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/max.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = 'ffffffff-ffff-ffff-ffff-ffffffffffff';


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/md5.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function md5(bytes) {
    const words = uint8ToUint32(bytes);
    const md5Bytes = wordsToMd5(words, bytes.length * 8);
    return uint32ToUint8(md5Bytes);
}
function uint32ToUint8(input) {
    const bytes = new Uint8Array(input.length * 4);
    for (let i = 0; i < input.length * 4; i++) {
        bytes[i] = (input[i >> 2] >>> ((i % 4) * 8)) & 0xff;
    }
    return bytes;
}
function getOutputLength(inputLength8) {
    return (((inputLength8 + 64) >>> 9) << 4) + 14 + 1;
}
function wordsToMd5(x, len) {
    const xpad = new Uint32Array(getOutputLength(len)).fill(0);
    xpad.set(x);
    xpad[len >> 5] |= 0x80 << len % 32;
    xpad[xpad.length - 1] = len;
    x = xpad;
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return Uint32Array.of(a, b, c, d);
}
function uint8ToUint32(input) {
    if (input.length === 0) {
        return new Uint32Array();
    }
    const output = new Uint32Array(getOutputLength(input.length * 8)).fill(0);
    for (let i = 0; i < input.length; i++) {
        output[i >> 2] |= (input[i] & 0xff) << ((i % 4) * 8);
    }
    return output;
}
function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
}
function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}
function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports["default"] = md5;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports["default"] = { randomUUID };


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/nil.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = '00000000-0000-0000-0000-000000000000';


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/parse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const validate_js_1 = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/cjs-browser/validate.js");
function parse(uuid) {
    if (!(0, validate_js_1.default)(uuid)) {
        throw TypeError('Invalid UUID');
    }
    let v;
    return Uint8Array.of((v = parseInt(uuid.slice(0, 8), 16)) >>> 24, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff, (v = parseInt(uuid.slice(9, 13), 16)) >>> 8, v & 0xff, (v = parseInt(uuid.slice(14, 18), 16)) >>> 8, v & 0xff, (v = parseInt(uuid.slice(19, 23), 16)) >>> 8, v & 0xff, ((v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000) & 0xff, (v / 0x100000000) & 0xff, (v >>> 24) & 0xff, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff);
}
exports["default"] = parse;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}
exports["default"] = rng;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/sha1.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function f(s, x, y, z) {
    switch (s) {
        case 0:
            return (x & y) ^ (~x & z);
        case 1:
            return x ^ y ^ z;
        case 2:
            return (x & y) ^ (x & z) ^ (y & z);
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return (x << n) | (x >>> (32 - n));
}
function sha1(bytes) {
    const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
    const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
    const newBytes = new Uint8Array(bytes.length + 1);
    newBytes.set(bytes);
    newBytes[bytes.length] = 0x80;
    bytes = newBytes;
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
    for (let i = 0; i < N; ++i) {
        const arr = new Uint32Array(16);
        for (let j = 0; j < 16; ++j) {
            arr[j] =
                (bytes[i * 64 + j * 4] << 24) |
                    (bytes[i * 64 + j * 4 + 1] << 16) |
                    (bytes[i * 64 + j * 4 + 2] << 8) |
                    bytes[i * 64 + j * 4 + 3];
        }
        M[i] = arr;
    }
    M[N - 1][14] = ((bytes.length - 1) * 8) / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = ((bytes.length - 1) * 8) & 0xffffffff;
    for (let i = 0; i < N; ++i) {
        const W = new Uint32Array(80);
        for (let t = 0; t < 16; ++t) {
            W[t] = M[i][t];
        }
        for (let t = 16; t < 80; ++t) {
            W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        }
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for (let t = 0; t < 80; ++t) {
            const s = Math.floor(t / 20);
            const T = (ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t]) >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = (H[0] + a) >>> 0;
        H[1] = (H[1] + b) >>> 0;
        H[2] = (H[2] + c) >>> 0;
        H[3] = (H[3] + d) >>> 0;
        H[4] = (H[4] + e) >>> 0;
    }
    return Uint8Array.of(H[0] >> 24, H[0] >> 16, H[0] >> 8, H[0], H[1] >> 24, H[1] >> 16, H[1] >> 8, H[1], H[2] >> 24, H[2] >> 16, H[2] >> 8, H[2], H[3] >> 24, H[3] >> 16, H[3] >> 8, H[3], H[4] >> 24, H[4] >> 16, H[4] >> 8, H[4]);
}
exports["default"] = sha1;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unsafeStringify = void 0;
const validate_js_1 = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/cjs-browser/validate.js");
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
exports.unsafeStringify = unsafeStringify;
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, validate_js_1.default)(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
exports["default"] = stringify;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/v1.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateV1State = void 0;
const rng_js_1 = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/cjs-browser/rng.js");
const stringify_js_1 = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/cjs-browser/stringify.js");
const _state = {};
function v1(options, buf, offset) {
    let bytes;
    const isV6 = options?._v6 ?? false;
    if (options) {
        const optionsKeys = Object.keys(options);
        if (optionsKeys.length === 1 && optionsKeys[0] === '_v6') {
            options = undefined;
        }
    }
    if (options) {
        bytes = v1Bytes(options.random ?? options.rng?.() ?? (0, rng_js_1.default)(), options.msecs, options.nsecs, options.clockseq, options.node, buf, offset);
    }
    else {
        const now = Date.now();
        const rnds = (0, rng_js_1.default)();
        updateV1State(_state, now, rnds);
        bytes = v1Bytes(rnds, _state.msecs, _state.nsecs, isV6 ? undefined : _state.clockseq, isV6 ? undefined : _state.node, buf, offset);
    }
    return buf ?? (0, stringify_js_1.unsafeStringify)(bytes);
}
function updateV1State(state, now, rnds) {
    state.msecs ??= -Infinity;
    state.nsecs ??= 0;
    if (now === state.msecs) {
        state.nsecs++;
        if (state.nsecs >= 10000) {
            state.node = undefined;
            state.nsecs = 0;
        }
    }
    else if (now > state.msecs) {
        state.nsecs = 0;
    }
    else if (now < state.msecs) {
        state.node = undefined;
    }
    if (!state.node) {
        state.node = rnds.slice(10, 16);
        state.node[0] |= 0x01;
        state.clockseq = ((rnds[8] << 8) | rnds[9]) & 0x3fff;
    }
    state.msecs = now;
    return state;
}
exports.updateV1State = updateV1State;
function v1Bytes(rnds, msecs, nsecs, clockseq, node, buf, offset = 0) {
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    if (!buf) {
        buf = new Uint8Array(16);
        offset = 0;
    }
    else {
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
    }
    msecs ??= Date.now();
    nsecs ??= 0;
    clockseq ??= ((rnds[8] << 8) | rnds[9]) & 0x3fff;
    node ??= rnds.slice(10, 16);
    msecs += 12219292800000;
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    buf[offset++] = (tl >>> 24) & 0xff;
    buf[offset++] = (tl >>> 16) & 0xff;
    buf[offset++] = (tl >>> 8) & 0xff;
    buf[offset++] = tl & 0xff;
    const tmh = ((msecs / 0x100000000) * 10000) & 0xfffffff;
    buf[offset++] = (tmh >>> 8) & 0xff;
    buf[offset++] = tmh & 0xff;
    buf[offset++] = ((tmh >>> 24) & 0xf) | 0x10;
    buf[offset++] = (tmh >>> 16) & 0xff;
    buf[offset++] = (clockseq >>> 8) | 0x80;
    buf[offset++] = clockseq & 0xff;
    for (let n = 0; n < 6; ++n) {
        buf[offset++] = node[n];
    }
    return buf;
}
exports["default"] = v1;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/v1ToV6.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/v1ToV6.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const parse_js_1 = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/cjs-browser/parse.js");
const stringify_js_1 = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/cjs-browser/stringify.js");
function v1ToV6(uuid) {
    const v1Bytes = typeof uuid === 'string' ? (0, parse_js_1.default)(uuid) : uuid;
    const v6Bytes = _v1ToV6(v1Bytes);
    return typeof uuid === 'string' ? (0, stringify_js_1.unsafeStringify)(v6Bytes) : v6Bytes;
}
exports["default"] = v1ToV6;
function _v1ToV6(v1Bytes) {
    return Uint8Array.of(((v1Bytes[6] & 0x0f) << 4) | ((v1Bytes[7] >> 4) & 0x0f), ((v1Bytes[7] & 0x0f) << 4) | ((v1Bytes[4] & 0xf0) >> 4), ((v1Bytes[4] & 0x0f) << 4) | ((v1Bytes[5] & 0xf0) >> 4), ((v1Bytes[5] & 0x0f) << 4) | ((v1Bytes[0] & 0xf0) >> 4), ((v1Bytes[0] & 0x0f) << 4) | ((v1Bytes[1] & 0xf0) >> 4), ((v1Bytes[1] & 0x0f) << 4) | ((v1Bytes[2] & 0xf0) >> 4), 0x60 | (v1Bytes[2] & 0x0f), v1Bytes[3], v1Bytes[8], v1Bytes[9], v1Bytes[10], v1Bytes[11], v1Bytes[12], v1Bytes[13], v1Bytes[14], v1Bytes[15]);
}


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/v3.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.URL = exports.DNS = void 0;
const md5_js_1 = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/cjs-browser/md5.js");
const v35_js_1 = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/cjs-browser/v35.js");
var v35_js_2 = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/cjs-browser/v35.js");
Object.defineProperty(exports, "DNS", ({ enumerable: true, get: function () { return v35_js_2.DNS; } }));
Object.defineProperty(exports, "URL", ({ enumerable: true, get: function () { return v35_js_2.URL; } }));
function v3(value, namespace, buf, offset) {
    return (0, v35_js_1.default)(0x30, md5_js_1.default, value, namespace, buf, offset);
}
v3.DNS = v35_js_1.DNS;
v3.URL = v35_js_1.URL;
exports["default"] = v3;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/v35.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.URL = exports.DNS = exports.stringToBytes = void 0;
const parse_js_1 = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/cjs-browser/parse.js");
const stringify_js_1 = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/cjs-browser/stringify.js");
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str));
    const bytes = new Uint8Array(str.length);
    for (let i = 0; i < str.length; ++i) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes;
}
exports.stringToBytes = stringToBytes;
exports.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(version, hash, value, namespace, buf, offset) {
    const valueBytes = typeof value === 'string' ? stringToBytes(value) : value;
    const namespaceBytes = typeof namespace === 'string' ? (0, parse_js_1.default)(namespace) : namespace;
    if (typeof namespace === 'string') {
        namespace = (0, parse_js_1.default)(namespace);
    }
    if (namespace?.length !== 16) {
        throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    }
    let bytes = new Uint8Array(16 + valueBytes.length);
    bytes.set(namespaceBytes);
    bytes.set(valueBytes, namespaceBytes.length);
    bytes = hash(bytes);
    bytes[6] = (bytes[6] & 0x0f) | version;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
        }
        return buf;
    }
    return (0, stringify_js_1.unsafeStringify)(bytes);
}
exports["default"] = v35;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const native_js_1 = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/cjs-browser/native.js");
const rng_js_1 = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/cjs-browser/rng.js");
const stringify_js_1 = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/cjs-browser/stringify.js");
function v4(options, buf, offset) {
    if (native_js_1.default.randomUUID && !buf && !options) {
        return native_js_1.default.randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, rng_js_1.default)();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, stringify_js_1.unsafeStringify)(rnds);
}
exports["default"] = v4;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/v5.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.URL = exports.DNS = void 0;
const sha1_js_1 = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/cjs-browser/sha1.js");
const v35_js_1 = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/cjs-browser/v35.js");
var v35_js_2 = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/cjs-browser/v35.js");
Object.defineProperty(exports, "DNS", ({ enumerable: true, get: function () { return v35_js_2.DNS; } }));
Object.defineProperty(exports, "URL", ({ enumerable: true, get: function () { return v35_js_2.URL; } }));
function v5(value, namespace, buf, offset) {
    return (0, v35_js_1.default)(0x50, sha1_js_1.default, value, namespace, buf, offset);
}
v5.DNS = v35_js_1.DNS;
v5.URL = v35_js_1.URL;
exports["default"] = v5;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/v6.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/v6.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const stringify_js_1 = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/cjs-browser/stringify.js");
const v1_js_1 = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/cjs-browser/v1.js");
const v1ToV6_js_1 = __webpack_require__(/*! ./v1ToV6.js */ "./node_modules/uuid/dist/cjs-browser/v1ToV6.js");
function v6(options, buf, offset) {
    options ??= {};
    offset ??= 0;
    let bytes = (0, v1_js_1.default)({ ...options, _v6: true }, new Uint8Array(16));
    bytes = (0, v1ToV6_js_1.default)(bytes);
    if (buf) {
        for (let i = 0; i < 16; i++) {
            buf[offset + i] = bytes[i];
        }
        return buf;
    }
    return (0, stringify_js_1.unsafeStringify)(bytes);
}
exports["default"] = v6;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/v6ToV1.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/v6ToV1.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const parse_js_1 = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/cjs-browser/parse.js");
const stringify_js_1 = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/cjs-browser/stringify.js");
function v6ToV1(uuid) {
    const v6Bytes = typeof uuid === 'string' ? (0, parse_js_1.default)(uuid) : uuid;
    const v1Bytes = _v6ToV1(v6Bytes);
    return typeof uuid === 'string' ? (0, stringify_js_1.unsafeStringify)(v1Bytes) : v1Bytes;
}
exports["default"] = v6ToV1;
function _v6ToV1(v6Bytes) {
    return Uint8Array.of(((v6Bytes[3] & 0x0f) << 4) | ((v6Bytes[4] >> 4) & 0x0f), ((v6Bytes[4] & 0x0f) << 4) | ((v6Bytes[5] & 0xf0) >> 4), ((v6Bytes[5] & 0x0f) << 4) | (v6Bytes[6] & 0x0f), v6Bytes[7], ((v6Bytes[1] & 0x0f) << 4) | ((v6Bytes[2] & 0xf0) >> 4), ((v6Bytes[2] & 0x0f) << 4) | ((v6Bytes[3] & 0xf0) >> 4), 0x10 | ((v6Bytes[0] & 0xf0) >> 4), ((v6Bytes[0] & 0x0f) << 4) | ((v6Bytes[1] & 0xf0) >> 4), v6Bytes[8], v6Bytes[9], v6Bytes[10], v6Bytes[11], v6Bytes[12], v6Bytes[13], v6Bytes[14], v6Bytes[15]);
}


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/v7.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/v7.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateV7State = void 0;
const rng_js_1 = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/cjs-browser/rng.js");
const stringify_js_1 = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/cjs-browser/stringify.js");
const _state = {};
function v7(options, buf, offset) {
    let bytes;
    if (options) {
        bytes = v7Bytes(options.random ?? options.rng?.() ?? (0, rng_js_1.default)(), options.msecs, options.seq, buf, offset);
    }
    else {
        const now = Date.now();
        const rnds = (0, rng_js_1.default)();
        updateV7State(_state, now, rnds);
        bytes = v7Bytes(rnds, _state.msecs, _state.seq, buf, offset);
    }
    return buf ?? (0, stringify_js_1.unsafeStringify)(bytes);
}
function updateV7State(state, now, rnds) {
    state.msecs ??= -Infinity;
    state.seq ??= 0;
    if (now > state.msecs) {
        state.seq = (rnds[6] << 23) | (rnds[7] << 16) | (rnds[8] << 8) | rnds[9];
        state.msecs = now;
    }
    else {
        state.seq = (state.seq + 1) | 0;
        if (state.seq === 0) {
            state.msecs++;
        }
    }
    return state;
}
exports.updateV7State = updateV7State;
function v7Bytes(rnds, msecs, seq, buf, offset = 0) {
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    if (!buf) {
        buf = new Uint8Array(16);
        offset = 0;
    }
    else {
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
    }
    msecs ??= Date.now();
    seq ??= ((rnds[6] * 0x7f) << 24) | (rnds[7] << 16) | (rnds[8] << 8) | rnds[9];
    buf[offset++] = (msecs / 0x10000000000) & 0xff;
    buf[offset++] = (msecs / 0x100000000) & 0xff;
    buf[offset++] = (msecs / 0x1000000) & 0xff;
    buf[offset++] = (msecs / 0x10000) & 0xff;
    buf[offset++] = (msecs / 0x100) & 0xff;
    buf[offset++] = msecs & 0xff;
    buf[offset++] = 0x70 | ((seq >>> 28) & 0x0f);
    buf[offset++] = (seq >>> 20) & 0xff;
    buf[offset++] = 0x80 | ((seq >>> 14) & 0x3f);
    buf[offset++] = (seq >>> 6) & 0xff;
    buf[offset++] = ((seq << 2) & 0xff) | (rnds[10] & 0x03);
    buf[offset++] = rnds[11];
    buf[offset++] = rnds[12];
    buf[offset++] = rnds[13];
    buf[offset++] = rnds[14];
    buf[offset++] = rnds[15];
    return buf;
}
exports["default"] = v7;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const regex_js_1 = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/cjs-browser/regex.js");
function validate(uuid) {
    return typeof uuid === 'string' && regex_js_1.default.test(uuid);
}
exports["default"] = validate;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/version.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const validate_js_1 = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/cjs-browser/validate.js");
function version(uuid) {
    if (!(0, validate_js_1.default)(uuid)) {
        throw TypeError('Invalid UUID');
    }
    return parseInt(uuid.slice(14, 15), 16);
}
exports["default"] = version;


/***/ }),

/***/ "./src/components/Valve.tsx":
/*!**********************************!*\
  !*** ./src/components/Valve.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValveMeta = exports.Valve = exports.COMPONENT_TYPE = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const React = __webpack_require__(/*! react */ "react");
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
const ValveFC_1 = __webpack_require__(/*! ./process-objects/valve/ValveFC */ "./src/components/process-objects/valve/ValveFC.tsx");
exports.COMPONENT_TYPE = "hmi.process_objects.Valve";
/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
class Valve extends perspective_client_1.Component {
    constructor() {
        var _a;
        super(...arguments);
        this.valveStatus = (_a = this.props.props.ValveStatus) !== null && _a !== void 0 ? _a : {};
    }
    // This is a lifecycle method that is called when the component is first mounted to the DOM.
    componentDidMount() { }
    render() {
        return (React.createElement(ValveFC_1.ValveFCCompound.Root, { componentProps: this.props, valveProps: this.props.props },
            React.createElement(ValveFC_1.ValveFCCompound.Valve, null)));
    }
}
exports.Valve = Valve;
// This is the actual thing that gets registered with the component registry.
class ValveMeta {
    getComponentType() {
        return exports.COMPONENT_TYPE;
    }
    /**
     * @returns The React component class.
     */
    getViewComponent() {
        return Valve;
    }
    getDefaultSize() {
        return {
            width: 75,
            height: 75,
        };
    }
    // Invoked when an update to the PropertyTree has occurred,
    // effectively mapping the valveStatus of the tree to component props.
    getPropsReducer(tree) {
        console.log("ValveStatus", tree.read("ValveStatus"));
        return {
            ValveStatus: {
                alarm: tree.readBoolean("ValveStatus.Alarm", false),
                actFB: tree.readBoolean("ValveStatus.ActFB", false),
                deActFB: tree.readBoolean("ValveStatus.DeActFB", false),
                activatedConfig: tree.readNumber("ValveStatus.ActivatedConfig", 6),
                deactivatedConfig: tree.readNumber("ValveStatus.DeactivatedConfig", 0),
                tagName: tree.readString("ValveStatus.TagName", ""),
                manual: tree.readBoolean("ValveStatus.Manual", false),
                masked: tree.readBoolean("ValveStatus.Masked", false),
                changing: tree.readBoolean("ValveStatus.Changing", false),
            },
        };
    }
}
exports.ValveMeta = ValveMeta;


/***/ }),

/***/ "./src/components/process-objects/valve/ValveFC.tsx":
/*!**********************************************************!*\
  !*** ./src/components/process-objects/valve/ValveFC.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValveFCCompound = void 0;
const React = __webpack_require__(/*! react */ "react");
const createContext_1 = __webpack_require__(/*! ../../../utils/createContext */ "./src/utils/createContext.tsx");
const Valve_1 = __webpack_require__(/*! ../../Valve */ "./src/components/Valve.tsx");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/components/process-objects/valve/utils.ts");
const item_1 = __webpack_require__(/*! ./item */ "./src/components/process-objects/valve/item.tsx");
const [ValveContextProvider, useValveContext] = (0, createContext_1.createContext)("ValveCompound");
const Root = ({ valveProps, componentProps, children }) => {
    const { props } = componentProps !== null && componentProps !== void 0 ? componentProps : {};
    /**
     * Handler for the component's action event.
     */
    const onActionPerformed = () => {
        // If the designer is in "design" mode, don't do anything
        if (!props.eventsEnabled) {
            console.log("Valve is disabled in the design-scope");
            return;
        }
        console.log("Valve clicked!");
        props.componentEvents.fireComponentEvent("onActionPerformed", {});
    };
    return (React.createElement(ValveContextProvider, { valveProps,
        componentProps,
        onActionPerformed }, children));
};
const Valve = () => {
    var _a;
    const { valveProps, componentProps } = useValveContext("Valve");
    const { ValveStatus } = valveProps;
    const { position, props } = componentProps !== null && componentProps !== void 0 ? componentProps : {};
    const inCoord = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : false;
    if (!inCoord) {
        return (React.createElement("div", Object.assign({}, componentProps === null || componentProps === void 0 ? void 0 : componentProps.emit({
            classes: [`hmi-component hmi-component__column `],
        }), { "data-component": Valve_1.COMPONENT_TYPE }),
            React.createElement("div", { className: "hmi-component__row" },
                React.createElement("div", { className: "hmi-component-valve" }, utils_1.itemNames.map(({ value, index, key }) => (
                //console.log("re-rendered ", index),
                (React.createElement(item_1.default, { itemClassName: value + " " + (0, utils_1.getItemClassName)(index, ValveStatus), handleClick: props.onActionPerformed, key: key }))))))));
    }
    else {
        return (React.createElement("div", Object.assign({}, componentProps === null || componentProps === void 0 ? void 0 : componentProps.emit({
            classes: [`hmi-component hmi-component-valve `],
        }), { "data-component": Valve_1.COMPONENT_TYPE }), utils_1.itemNames.map(({ value, index, key }) => (
        //console.log("re-rendered ", index),
        (React.createElement(item_1.default, { itemClassName: value + " " + (0, utils_1.getItemClassName)(index, ValveStatus), handleClick: props.onActionPerformed, key: key }))))));
    }
};
exports.ValveFCCompound = {
    Root,
    Valve
};


/***/ }),

/***/ "./src/components/process-objects/valve/item.tsx":
/*!*******************************************************!*\
  !*** ./src/components/process-objects/valve/item.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "react");
// const bit = (n: number, i: number): number => {
// 	return (n >> i) & 1;
// };
const Item = ({ itemClassName, handleClick }) => {
    return React.createElement("div", { className: itemClassName, onClick: handleClick });
};
Item.displayName = "Item";
exports["default"] = Item;


/***/ }),

/***/ "./src/components/process-objects/valve/types.ts":
/*!*******************************************************!*\
  !*** ./src/components/process-objects/valve/types.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemPositionEnum = exports.ItemClickableNameEnum = exports.ItemNameEnum = exports.ValveClassNameEnum = void 0;
exports.ValveClassNameEnum = {
    AlarmState: "AlarmState",
    Activated: "Activated",
    Deactivated: "Deactivated",
    Manual: "Manual",
    Masked: "Masked",
    Changing: "Changing",
    NoAlarmMask: "NoAlarmMask",
};
exports.ItemNameEnum = {
    V1b2: "v1b2", // index 1
    V1b3: "v1b3", // index 2
    V1b4: "v1b4", // index 3
    V1b1: "v1b1", // index 0
    V2b1: "v2b1", // index 4
    V2b2: "v2b2", // index 5
    V2b3: "v2b3", // index 6
    V2b4: "v2b4", // index 7
    V3b1: "v3b1", // index 8
    V3b2: "v3b2", // index 9
    V3b3: "v3b3", // index 10
    V3b4: "v3b4", // index 11
    V2: "v2", // index 12
    V3: "v3", // index 13
    V1: "v1", // index 14
    V2f1: "v2f1", // index 15
    V2f2: "v2f2", // index 16
    V3f1: "v3f1", // index 17
    V3f2: "v3f2", // index 18
};
exports.ItemClickableNameEnum = {
    V1b1: "v1b1", // index 0
    V1b2: "v1b2", // index 1
    V1b3: "v1b3", // index 2
    V1b4: "v1b4", // index 3
    V2b1: "v2b1", // index 4
    V2b2: "v2b2", // index 5
    V2b3: "v2b3", // index 6
    V2b4: "v2b4", // index 7
    V3b1: "v3b1", // index 8
    V3b2: "v3b2", // index 9
    V3b3: "v3b3", // index 10
    V3b4: "v3b4", // index 11
    V2: "v2", // index 12
    V3: "v3", // index 13
    V1: "v1", // index 14
};
exports.ItemPositionEnum = {
    v1b1: "v1b1",
    v1b2: "v1b2",
    v1b3: "v1b3",
    v1b4: "v1b4",
    v2b1: "v2b1",
    V2b2: "v2b2",
    v2b3: "v2b3",
    v2b4: "v2b4",
    v3b1: "v3b1",
    v3b2: "v3b2",
    v3b3: "v3b3",
    v3b4: "v3b4",
    v2: "v2",
    v3: "v3",
};


/***/ }),

/***/ "./src/components/process-objects/valve/utils.ts":
/*!*******************************************************!*\
  !*** ./src/components/process-objects/valve/utils.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.itemNames = exports.getItemClassName = void 0;
const numberUtil_1 = __webpack_require__(/*! ../../../utils/numberUtil */ "./src/utils/numberUtil.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/components/process-objects/valve/types.ts");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/cjs-browser/index.js");
/**
 * This is a utility function for the component "process-object/ValveFC"
 *
 * @param index: number the index of an dynamic visual element "item" within the Valve component
 * @param valveStatus?:ValveStatus the status representing physical process valve
 * @returns className:string returns additional classnames for an visual element of the valve component.
 *
 * Returned classnames are;
 * 	hide - this hides the item
 * 	show -
 */
const getItemClassName = (index, valveStatus) => {
    var _a, _b;
    let className = "";
    // Handle the fact that ActivatedConfig and DeactivatedConfig are optional and maybe undefined
    const ActivatedConfigValue = (_a = valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.activatedConfig) !== null && _a !== void 0 ? _a : 0;
    const DeactivatedConfigValue = (_b = valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.deactivatedConfig) !== null && _b !== void 0 ? _b : 0;
    if (index < 12) {
        if (((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, index) && (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.actFB)) ||
            ((0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, index) && (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.deActFB))) {
            className = "show item";
        }
        else {
            className = "hide item";
        }
    }
    else if (index === 14) {
        className = "show";
    }
    else if (index === 12) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, index) ||
            (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, index)) {
            className = "show";
        }
        else {
            className = "hide";
        }
    }
    else if (index === 13) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, index) ||
            (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, index)) {
            className = "show";
        }
        else {
            className = "hide";
        }
    }
    else if (index === 15) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 12) || (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 12)) {
            className = "show";
        }
        else {
            className = "hide";
        }
    }
    else if (index === 16) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 12) || (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 12)) {
            className = "show";
        }
        else {
            className = "hide";
        }
    }
    else if (index === 17) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 13) || (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 13)) {
            className = "show";
        }
        else {
            className = "hide";
        }
    }
    else if (index === 18) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 13) || (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 13)) {
            className = "show";
        }
        else {
            className = "hide";
        }
    }
    else {
        className = "hide";
    }
    // Additions to the className
    if (className.includes("show") && !className.includes("item")) {
        console.log("index", index, className);
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.alarm) {
            className = className.replace("AlarmState", "") + " AlarmState";
        }
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.changing) {
            className = className.replace("Changing", "") + " Changing";
        }
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.manual) {
            className = className.replace("Manual", "") + " Manual";
        }
        if ((valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.masked) && !valveStatus.alarm) {
            className = className.replace("NoAlarmMask", "") + " NoAlarmMask";
        }
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.masked) {
            className = className.replace("Masked", "") + " Masked";
        }
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.actFB) {
            className = className.replace("Activated", "") + " Activated";
        }
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.deActFB) {
            className = className.replace("Deactivated", "") + " Deactivated";
        }
    }
    return className; // default return value if no other condition is met
};
exports.getItemClassName = getItemClassName;
/**
 * @returns Array of itemName(s) for each visual element of a valve component
 */
exports.itemNames = Object.keys(types_1.ItemNameEnum).map((itemName) => {
    return {
        key: (0, uuid_1.v4)(),
        name: itemName,
        value: types_1.ItemNameEnum,
        index: Object.keys(types_1.ItemNameEnum).indexOf(itemName),
    };
});


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/utils/createContext.tsx":
/*!*************************************!*\
  !*** ./src/utils/createContext.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createContext = createContext;
const react_1 = __webpack_require__(/*! react */ "react");
function createContext(rootComponentName, defaultContext) {
    const Context = react_1.default.createContext(defaultContext);
    const Provider = (props) => {
        const { children } = props, context = __rest(props, ["children"]);
        // Only re-memoize when prop values change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = react_1.default.useMemo(() => context, Object.values(context));
        return react_1.default.createElement(Context.Provider, { value: value }, children);
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext(consumerName) {
        const context = react_1.default.useContext(Context);
        if (context)
            return context;
        if (defaultContext !== undefined)
            return defaultContext;
        // if a defaultContext wasn't specified, it's a required context.
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext];
}


/***/ }),

/***/ "./src/utils/numberUtil.ts":
/*!*********************************!*\
  !*** ./src/utils/numberUtil.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * Utility functions for numbers
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getBoolAtIndex = void 0;
/**
 * Using the binary representation of n, an Integer, returns the boolean
 * value at index, i.
 * @param n a number is implicity converter to a 32bit integer, by the bitwise operators
 * @param i is a number representing the bit position to be tested
 * @returns the boolean value of the bit at index i.
 */
const getBoolAtIndex = (n, i) => {
    return (n >> i) & 1;
};
exports.getBoolAtIndex = getBoolAtIndex;


/***/ }),

/***/ "@inductiveautomation/perspective-client":
/*!************************************!*\
  !*** external "PerspectiveClient" ***!
  \************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__inductiveautomation_perspective_client__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Valve = void 0;
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
//import { Button, ButtonMeta } from './components/Button';
//import { Valve, ValveMeta } from "./components/Valve";
const Valve_1 = __webpack_require__(/*! ./components/Valve */ "./src/components/Valve.tsx");
Object.defineProperty(exports, "Valve", ({ enumerable: true, get: function () { return Valve_1.Valve; } }));
// Import component styles
__webpack_require__(/*! ./index.css */ "./src/index.css");
// Array of component metadata
const components = [new Valve_1.ValveMeta()];
// Register each component with the Perspective ComponentRegistry
components.forEach((c) => perspective_client_1.ComponentRegistry.register(c));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BLDJJQUEyRjtBQUMzRiwyREFBMkQ7QUFDM0Qsd0RBQXdEO0FBQ3hELDRGQUFzRDtBQUk1Qyx1RkFKRCxhQUFLLFFBSUM7QUFFZiwwQkFBMEI7QUFDMUIsMERBQXFCO0FBRXJCLDhCQUE4QjtBQUM5QixNQUFNLFVBQVUsR0FBeUIsQ0FBRSxJQUFJLGlCQUFTLEVBQUUsQ0FBQyxDQUFDO0FBRTVELGlFQUFpRTtBQUNqRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZ0IsRUFBRSxFQUFFLENBQUMsc0NBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9tYXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbWQ1LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9uaWwuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3NoYTEuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YxLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YxVG9WNi5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92MzUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjYuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjZUb1YxLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y3LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1ZhbHZlLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL1ZhbHZlRkMudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvdmFsdmUvaXRlbS50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS90eXBlcy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL3V0aWxzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvaW5kZXguY3NzPzZlOWUiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy91dGlscy9jcmVhdGVDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL3V0aWxzL251bWJlclV0aWwudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy9leHRlcm5hbCB1bWQgXCJQZXJzcGVjdGl2ZUNsaWVudFwiIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvZXh0ZXJuYWwgdW1kIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlBlcnNwZWN0aXZlQ2xpZW50XCIpLCByZXF1aXJlKFwiUmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJIbWlDb21wb25lbnRzXCIsIFtcIlBlcnNwZWN0aXZlQ2xpZW50XCIsIFwiUmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSG1pQ29tcG9uZW50c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcIlBlcnNwZWN0aXZlQ2xpZW50XCIpLCByZXF1aXJlKFwiUmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhtaUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJQZXJzcGVjdGl2ZUNsaWVudFwiXSwgcm9vdFtcIlJlYWN0XCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pbmR1Y3RpdmVhdXRvbWF0aW9uX3BlcnNwZWN0aXZlX2NsaWVudF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudmVyc2lvbiA9IGV4cG9ydHMudmFsaWRhdGUgPSBleHBvcnRzLnY3ID0gZXhwb3J0cy52NlRvVjEgPSBleHBvcnRzLnY2ID0gZXhwb3J0cy52NSA9IGV4cG9ydHMudjQgPSBleHBvcnRzLnYzID0gZXhwb3J0cy52MVRvVjYgPSBleHBvcnRzLnYxID0gZXhwb3J0cy5zdHJpbmdpZnkgPSBleHBvcnRzLnBhcnNlID0gZXhwb3J0cy5OSUwgPSBleHBvcnRzLk1BWCA9IHZvaWQgMDtcbnZhciBtYXhfanNfMSA9IHJlcXVpcmUoXCIuL21heC5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1BWFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF4X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBuaWxfanNfMSA9IHJlcXVpcmUoXCIuL25pbC5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5JTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmlsX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGFyc2VfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3RyaW5naWZ5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdHJpbmdpZnlfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHYxX2pzXzEgPSByZXF1aXJlKFwiLi92MS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjFUb1Y2X2pzXzEgPSByZXF1aXJlKFwiLi92MVRvVjYuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVRvVjZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYxVG9WNl9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjNfanNfMSA9IHJlcXVpcmUoXCIuL3YzLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2NF9qc18xID0gcmVxdWlyZShcIi4vdjQuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjRfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY1X2pzXzEgPSByZXF1aXJlKFwiLi92NS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY1XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2NV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjZfanNfMSA9IHJlcXVpcmUoXCIuL3Y2LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY2X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2NlRvVjFfanNfMSA9IHJlcXVpcmUoXCIuL3Y2VG9WMS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2VG9WMVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjZUb1YxX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2N19qc18xID0gcmVxdWlyZShcIi4vdjcuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2N1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjdfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZhbGlkYXRlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2YWxpZGF0ZV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdmVyc2lvbl9qc18xID0gcmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZlcnNpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZlcnNpb25fanNfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSAnZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gICAgY29uc3Qgd29yZHMgPSB1aW50OFRvVWludDMyKGJ5dGVzKTtcbiAgICBjb25zdCBtZDVCeXRlcyA9IHdvcmRzVG9NZDUod29yZHMsIGJ5dGVzLmxlbmd0aCAqIDgpO1xuICAgIHJldHVybiB1aW50MzJUb1VpbnQ4KG1kNUJ5dGVzKTtcbn1cbmZ1bmN0aW9uIHVpbnQzMlRvVWludDgoaW5wdXQpIHtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGlucHV0Lmxlbmd0aCAqIDQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoICogNDsgaSsrKSB7XG4gICAgICAgIGJ5dGVzW2ldID0gKGlucHV0W2kgPj4gMl0gPj4+ICgoaSAlIDQpICogOCkpICYgMHhmZjtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufVxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICAgIHJldHVybiAoKChpbnB1dExlbmd0aDggKyA2NCkgPj4+IDkpIDw8IDQpICsgMTQgKyAxO1xufVxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgICBjb25zdCB4cGFkID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW4pKS5maWxsKDApO1xuICAgIHhwYWQuc2V0KHgpO1xuICAgIHhwYWRbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gICAgeHBhZFt4cGFkLmxlbmd0aCAtIDFdID0gbGVuO1xuICAgIHggPSB4cGFkO1xuICAgIGxldCBhID0gMTczMjU4NDE5MztcbiAgICBsZXQgYiA9IC0yNzE3MzM4Nzk7XG4gICAgbGV0IGMgPSAtMTczMjU4NDE5NDtcbiAgICBsZXQgZCA9IDI3MTczMzg3ODtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgICAgIGNvbnN0IG9sZGEgPSBhO1xuICAgICAgICBjb25zdCBvbGRiID0gYjtcbiAgICAgICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgICAgIGNvbnN0IG9sZGQgPSBkO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgICAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICAgICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICAgIH1cbiAgICByZXR1cm4gVWludDMyQXJyYXkub2YoYSwgYiwgYywgZCk7XG59XG5mdW5jdGlvbiB1aW50OFRvVWludDMyKGlucHV0KSB7XG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KCk7XG4gICAgfVxuICAgIGNvbnN0IG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgoaW5wdXQubGVuZ3RoICogOCkpLmZpbGwoMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBvdXRwdXRbaSA+PiAyXSB8PSAoaW5wdXRbaV0gJiAweGZmKSA8PCAoKGkgJSA0KSAqIDgpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gICAgY29uc3QgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICAgIGNvbnN0IG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAgIHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweGZmZmYpO1xufVxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICAgIHJldHVybiAobnVtIDw8IGNudCkgfCAobnVtID4+PiAoMzIgLSBjbnQpKTtcbn1cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbigoYiAmIGMpIHwgKH5iICYgZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oKGIgJiBkKSB8IChjICYgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWQ1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0cy5kZWZhdWx0ID0geyByYW5kb21VVUlEIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gICAgaWYgKCEoMCwgdmFsaWRhdGVfanNfMS5kZWZhdWx0KSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICAgIH1cbiAgICBsZXQgdjtcbiAgICByZXR1cm4gVWludDhBcnJheS5vZigodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0LCAodiA+Pj4gMTYpICYgMHhmZiwgKHYgPj4+IDgpICYgMHhmZiwgdiAmIDB4ZmYsICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDgsIHYgJiAweGZmLCAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gOCwgdiAmIDB4ZmYsICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4LCB2ICYgMHhmZiwgKCh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCkgJiAweGZmLCAodiAvIDB4MTAwMDAwMDAwKSAmIDB4ZmYsICh2ID4+PiAyNCkgJiAweGZmLCAodiA+Pj4gMTYpICYgMHhmZiwgKHYgPj4+IDgpICYgMHhmZiwgdiAmIDB4ZmYpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcGFyc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBybmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICAgIHN3aXRjaCAocykge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gKHggJiB5KSBeICh+eCAmIHopO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4geCBeIHkgXiB6O1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gKHggJiB5KSBeICh4ICYgeikgXiAoeSAmIHopO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4geCBeIHkgXiB6O1xuICAgIH1cbn1cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICAgIHJldHVybiAoeCA8PCBuKSB8ICh4ID4+PiAoMzIgLSBuKSk7XG59XG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gICAgY29uc3QgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuICAgIGNvbnN0IG5ld0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMubGVuZ3RoICsgMSk7XG4gICAgbmV3Qnl0ZXMuc2V0KGJ5dGVzKTtcbiAgICBuZXdCeXRlc1tieXRlcy5sZW5ndGhdID0gMHg4MDtcbiAgICBieXRlcyA9IG5ld0J5dGVzO1xuICAgIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgICBjb25zdCBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gICAgY29uc3QgTSA9IG5ldyBBcnJheShOKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgICAgICBjb25zdCBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgICAgICAgIGFycltqXSA9XG4gICAgICAgICAgICAgICAgKGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCkgfFxuICAgICAgICAgICAgICAgICAgICAoYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNikgfFxuICAgICAgICAgICAgICAgICAgICAoYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4KSB8XG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgICAgIH1cbiAgICAgICAgTVtpXSA9IGFycjtcbiAgICB9XG4gICAgTVtOIC0gMV1bMTRdID0gKChieXRlcy5sZW5ndGggLSAxKSAqIDgpIC8gTWF0aC5wb3coMiwgMzIpO1xuICAgIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgICBNW04gLSAxXVsxNV0gPSAoKGJ5dGVzLmxlbmd0aCAtIDEpICogOCkgJiAweGZmZmZmZmZmO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgICAgIGNvbnN0IFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgICAgICAgIFdbdF0gPSBNW2ldW3RdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHQgPSAxNjsgdCA8IDgwOyArK3QpIHtcbiAgICAgICAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhID0gSFswXTtcbiAgICAgICAgbGV0IGIgPSBIWzFdO1xuICAgICAgICBsZXQgYyA9IEhbMl07XG4gICAgICAgIGxldCBkID0gSFszXTtcbiAgICAgICAgbGV0IGUgPSBIWzRdO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDgwOyArK3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKHQgLyAyMCk7XG4gICAgICAgICAgICBjb25zdCBUID0gKFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW3RdKSA+Pj4gMDtcbiAgICAgICAgICAgIGUgPSBkO1xuICAgICAgICAgICAgZCA9IGM7XG4gICAgICAgICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICAgICAgICBiID0gYTtcbiAgICAgICAgICAgIGEgPSBUO1xuICAgICAgICB9XG4gICAgICAgIEhbMF0gPSAoSFswXSArIGEpID4+PiAwO1xuICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSA+Pj4gMDtcbiAgICAgICAgSFsyXSA9IChIWzJdICsgYykgPj4+IDA7XG4gICAgICAgIEhbM10gPSAoSFszXSArIGQpID4+PiAwO1xuICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSA+Pj4gMDtcbiAgICB9XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoSFswXSA+PiAyNCwgSFswXSA+PiAxNiwgSFswXSA+PiA4LCBIWzBdLCBIWzFdID4+IDI0LCBIWzFdID4+IDE2LCBIWzFdID4+IDgsIEhbMV0sIEhbMl0gPj4gMjQsIEhbMl0gPj4gMTYsIEhbMl0gPj4gOCwgSFsyXSwgSFszXSA+PiAyNCwgSFszXSA+PiAxNiwgSFszXSA+PiA4LCBIWzNdLCBIWzRdID4+IDI0LCBIWzRdID4+IDE2LCBIWzRdID4+IDgsIEhbNF0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gc2hhMTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB2b2lkIDA7XG5jb25zdCB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoISgwLCB2YWxpZGF0ZV9qc18xLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5naWZ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZVYxU3RhdGUgPSB2b2lkIDA7XG5jb25zdCBybmdfanNfMSA9IHJlcXVpcmUoXCIuL3JuZy5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgX3N0YXRlID0ge307XG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGxldCBieXRlcztcbiAgICBjb25zdCBpc1Y2ID0gb3B0aW9ucz8uX3Y2ID8/IGZhbHNlO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zS2V5cy5sZW5ndGggPT09IDEgJiYgb3B0aW9uc0tleXNbMF0gPT09ICdfdjYnKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGJ5dGVzID0gdjFCeXRlcyhvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCksIG9wdGlvbnMubXNlY3MsIG9wdGlvbnMubnNlY3MsIG9wdGlvbnMuY2xvY2tzZXEsIG9wdGlvbnMubm9kZSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kcyA9ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpO1xuICAgICAgICB1cGRhdGVWMVN0YXRlKF9zdGF0ZSwgbm93LCBybmRzKTtcbiAgICAgICAgYnl0ZXMgPSB2MUJ5dGVzKHJuZHMsIF9zdGF0ZS5tc2VjcywgX3N0YXRlLm5zZWNzLCBpc1Y2ID8gdW5kZWZpbmVkIDogX3N0YXRlLmNsb2Nrc2VxLCBpc1Y2ID8gdW5kZWZpbmVkIDogX3N0YXRlLm5vZGUsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZiA/PyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5mdW5jdGlvbiB1cGRhdGVWMVN0YXRlKHN0YXRlLCBub3csIHJuZHMpIHtcbiAgICBzdGF0ZS5tc2VjcyA/Pz0gLUluZmluaXR5O1xuICAgIHN0YXRlLm5zZWNzID8/PSAwO1xuICAgIGlmIChub3cgPT09IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLm5zZWNzKys7XG4gICAgICAgIGlmIChzdGF0ZS5uc2VjcyA+PSAxMDAwMCkge1xuICAgICAgICAgICAgc3RhdGUubm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN0YXRlLm5zZWNzID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChub3cgPiBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5uc2VjcyA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vdyA8IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLm5vZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICghc3RhdGUubm9kZSkge1xuICAgICAgICBzdGF0ZS5ub2RlID0gcm5kcy5zbGljZSgxMCwgMTYpO1xuICAgICAgICBzdGF0ZS5ub2RlWzBdIHw9IDB4MDE7XG4gICAgICAgIHN0YXRlLmNsb2Nrc2VxID0gKChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XSkgJiAweDNmZmY7XG4gICAgfVxuICAgIHN0YXRlLm1zZWNzID0gbm93O1xuICAgIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydHMudXBkYXRlVjFTdGF0ZSA9IHVwZGF0ZVYxU3RhdGU7XG5mdW5jdGlvbiB2MUJ5dGVzKHJuZHMsIG1zZWNzLCBuc2VjcywgY2xvY2tzZXEsIG5vZGUsIGJ1Ziwgb2Zmc2V0ID0gMCkge1xuICAgIGlmIChybmRzLmxlbmd0aCA8IDE2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZG9tIGJ5dGVzIGxlbmd0aCBtdXN0IGJlID49IDE2Jyk7XG4gICAgfVxuICAgIGlmICghYnVmKSB7XG4gICAgICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDE2ID4gYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFVVSUQgYnl0ZSByYW5nZSAke29mZnNldH06JHtvZmZzZXQgKyAxNX0gaXMgb3V0IG9mIGJ1ZmZlciBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtc2VjcyA/Pz0gRGF0ZS5ub3coKTtcbiAgICBuc2VjcyA/Pz0gMDtcbiAgICBjbG9ja3NlcSA/Pz0gKChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XSkgJiAweDNmZmY7XG4gICAgbm9kZSA/Pz0gcm5kcy5zbGljZSgxMCwgMTYpO1xuICAgIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuICAgIGNvbnN0IHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodGwgPj4+IDI0KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bCA+Pj4gMTYpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRsID4+PiA4KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IHRsICYgMHhmZjtcbiAgICBjb25zdCB0bWggPSAoKG1zZWNzIC8gMHgxMDAwMDAwMDApICogMTAwMDApICYgMHhmZmZmZmZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodG1oID4+PiA4KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IHRtaCAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICgodG1oID4+PiAyNCkgJiAweGYpIHwgMHgxMDtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRtaCA+Pj4gMTYpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKGNsb2Nrc2VxID4+PiA4KSB8IDB4ODA7XG4gICAgYnVmW29mZnNldCsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcbiAgICBmb3IgKGxldCBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgICAgICBidWZbb2Zmc2V0KytdID0gbm9kZVtuXTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHYxO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHYxVG9WNih1dWlkKSB7XG4gICAgY29uc3QgdjFCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgICBjb25zdCB2NkJ5dGVzID0gX3YxVG9WNih2MUJ5dGVzKTtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkodjZCeXRlcykgOiB2NkJ5dGVzO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjFUb1Y2O1xuZnVuY3Rpb24gX3YxVG9WNih2MUJ5dGVzKSB7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKCh2MUJ5dGVzWzZdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbN10gPj4gNCkgJiAweDBmKSwgKCh2MUJ5dGVzWzddICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbNF0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzRdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbNV0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzVdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMF0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzBdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMV0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzFdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMl0gJiAweGYwKSA+PiA0KSwgMHg2MCB8ICh2MUJ5dGVzWzJdICYgMHgwZiksIHYxQnl0ZXNbM10sIHYxQnl0ZXNbOF0sIHYxQnl0ZXNbOV0sIHYxQnl0ZXNbMTBdLCB2MUJ5dGVzWzExXSwgdjFCeXRlc1sxMl0sIHYxQnl0ZXNbMTNdLCB2MUJ5dGVzWzE0XSwgdjFCeXRlc1sxNV0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuY29uc3QgbWQ1X2pzXzEgPSByZXF1aXJlKFwiLi9tZDUuanNcIik7XG5jb25zdCB2MzVfanNfMSA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbnZhciB2MzVfanNfMiA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkROU1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuRE5TOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVVJMXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5VUkw7IH0gfSk7XG5mdW5jdGlvbiB2Myh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHJldHVybiAoMCwgdjM1X2pzXzEuZGVmYXVsdCkoMHgzMCwgbWQ1X2pzXzEuZGVmYXVsdCwgdmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpO1xufVxudjMuRE5TID0gdjM1X2pzXzEuRE5TO1xudjMuVVJMID0gdjM1X2pzXzEuVVJMO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSBleHBvcnRzLnN0cmluZ1RvQnl0ZXMgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gICAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc3RyLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgYnl0ZXNbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufVxuZXhwb3J0cy5zdHJpbmdUb0J5dGVzID0gc3RyaW5nVG9CeXRlcztcbmV4cG9ydHMuRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLlVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZnVuY3Rpb24gdjM1KHZlcnNpb24sIGhhc2gsIHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgY29uc3QgdmFsdWVCeXRlcyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzdHJpbmdUb0J5dGVzKHZhbHVlKSA6IHZhbHVlO1xuICAgIGNvbnN0IG5hbWVzcGFjZUJ5dGVzID0gdHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycgPyAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KShuYW1lc3BhY2UpIDogbmFtZXNwYWNlO1xuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lc3BhY2UgPSAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KShuYW1lc3BhY2UpO1xuICAgIH1cbiAgICBpZiAobmFtZXNwYWNlPy5sZW5ndGggIT09IDE2KSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH1cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlQnl0ZXMubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQobmFtZXNwYWNlQnl0ZXMpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZUJ5dGVzLCBuYW1lc3BhY2VCeXRlcy5sZW5ndGgpO1xuICAgIGJ5dGVzID0gaGFzaChieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSAoYnl0ZXNbNl0gJiAweDBmKSB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSAoYnl0ZXNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBuYXRpdmVfanNfMSA9IHJlcXVpcmUoXCIuL25hdGl2ZS5qc1wiKTtcbmNvbnN0IHJuZ19qc18xID0gcmVxdWlyZShcIi4vcm5nLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGlmIChuYXRpdmVfanNfMS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlX2pzXzEuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCk7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShybmRzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuY29uc3Qgc2hhMV9qc18xID0gcmVxdWlyZShcIi4vc2hhMS5qc1wiKTtcbmNvbnN0IHYzNV9qc18xID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xudmFyIHYzNV9qc18yID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRE5TXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5ETlM7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVUkxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLlVSTDsgfSB9KTtcbmZ1bmN0aW9uIHY1KHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgcmV0dXJuICgwLCB2MzVfanNfMS5kZWZhdWx0KSgweDUwLCBzaGExX2pzXzEuZGVmYXVsdCwgdmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpO1xufVxudjUuRE5TID0gdjM1X2pzXzEuRE5TO1xudjUuVVJMID0gdjM1X2pzXzEuVVJMO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgdjFfanNfMSA9IHJlcXVpcmUoXCIuL3YxLmpzXCIpO1xuY29uc3QgdjFUb1Y2X2pzXzEgPSByZXF1aXJlKFwiLi92MVRvVjYuanNcIik7XG5mdW5jdGlvbiB2NihvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIG9wdGlvbnMgPz89IHt9O1xuICAgIG9mZnNldCA/Pz0gMDtcbiAgICBsZXQgYnl0ZXMgPSAoMCwgdjFfanNfMS5kZWZhdWx0KSh7IC4uLm9wdGlvbnMsIF92NjogdHJ1ZSB9LCBuZXcgVWludDhBcnJheSgxNikpO1xuICAgIGJ5dGVzID0gKDAsIHYxVG9WNl9qc18xLmRlZmF1bHQpKGJ5dGVzKTtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY2O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHY2VG9WMSh1dWlkKSB7XG4gICAgY29uc3QgdjZCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgICBjb25zdCB2MUJ5dGVzID0gX3Y2VG9WMSh2NkJ5dGVzKTtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkodjFCeXRlcykgOiB2MUJ5dGVzO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjZUb1YxO1xuZnVuY3Rpb24gX3Y2VG9WMSh2NkJ5dGVzKSB7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKCh2NkJ5dGVzWzNdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbNF0gPj4gNCkgJiAweDBmKSwgKCh2NkJ5dGVzWzRdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbNV0gJiAweGYwKSA+PiA0KSwgKCh2NkJ5dGVzWzVdICYgMHgwZikgPDwgNCkgfCAodjZCeXRlc1s2XSAmIDB4MGYpLCB2NkJ5dGVzWzddLCAoKHY2Qnl0ZXNbMV0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1syXSAmIDB4ZjApID4+IDQpLCAoKHY2Qnl0ZXNbMl0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1szXSAmIDB4ZjApID4+IDQpLCAweDEwIHwgKCh2NkJ5dGVzWzBdICYgMHhmMCkgPj4gNCksICgodjZCeXRlc1swXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzFdICYgMHhmMCkgPj4gNCksIHY2Qnl0ZXNbOF0sIHY2Qnl0ZXNbOV0sIHY2Qnl0ZXNbMTBdLCB2NkJ5dGVzWzExXSwgdjZCeXRlc1sxMl0sIHY2Qnl0ZXNbMTNdLCB2NkJ5dGVzWzE0XSwgdjZCeXRlc1sxNV0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZVY3U3RhdGUgPSB2b2lkIDA7XG5jb25zdCBybmdfanNfMSA9IHJlcXVpcmUoXCIuL3JuZy5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgX3N0YXRlID0ge307XG5mdW5jdGlvbiB2NyhvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGxldCBieXRlcztcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBieXRlcyA9IHY3Qnl0ZXMob3B0aW9ucy5yYW5kb20gPz8gb3B0aW9ucy5ybmc/LigpID8/ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpLCBvcHRpb25zLm1zZWNzLCBvcHRpb25zLnNlcSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kcyA9ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpO1xuICAgICAgICB1cGRhdGVWN1N0YXRlKF9zdGF0ZSwgbm93LCBybmRzKTtcbiAgICAgICAgYnl0ZXMgPSB2N0J5dGVzKHJuZHMsIF9zdGF0ZS5tc2VjcywgX3N0YXRlLnNlcSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmID8/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVY3U3RhdGUoc3RhdGUsIG5vdywgcm5kcykge1xuICAgIHN0YXRlLm1zZWNzID8/PSAtSW5maW5pdHk7XG4gICAgc3RhdGUuc2VxID8/PSAwO1xuICAgIGlmIChub3cgPiBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5zZXEgPSAocm5kc1s2XSA8PCAyMykgfCAocm5kc1s3XSA8PCAxNikgfCAocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV07XG4gICAgICAgIHN0YXRlLm1zZWNzID0gbm93O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUuc2VxID0gKHN0YXRlLnNlcSArIDEpIHwgMDtcbiAgICAgICAgaWYgKHN0YXRlLnNlcSA9PT0gMCkge1xuICAgICAgICAgICAgc3RhdGUubXNlY3MrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5leHBvcnRzLnVwZGF0ZVY3U3RhdGUgPSB1cGRhdGVWN1N0YXRlO1xuZnVuY3Rpb24gdjdCeXRlcyhybmRzLCBtc2Vjcywgc2VxLCBidWYsIG9mZnNldCA9IDApIHtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBpZiAoIWJ1Zikge1xuICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbXNlY3MgPz89IERhdGUubm93KCk7XG4gICAgc2VxID8/PSAoKHJuZHNbNl0gKiAweDdmKSA8PCAyNCkgfCAocm5kc1s3XSA8PCAxNikgfCAocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV07XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gbXNlY3MgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAweDcwIHwgKChzZXEgPj4+IDI4KSAmIDB4MGYpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoc2VxID4+PiAyMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAweDgwIHwgKChzZXEgPj4+IDE0KSAmIDB4M2YpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoc2VxID4+PiA2KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICgoc2VxIDw8IDIpICYgMHhmZikgfCAocm5kc1sxMF0gJiAweDAzKTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxMV07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTJdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzEzXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxNF07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTVdO1xuICAgIHJldHVybiBidWY7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVnZXhfanNfMSA9IHJlcXVpcmUoXCIuL3JlZ2V4LmpzXCIpO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgcmVnZXhfanNfMS5kZWZhdWx0LnRlc3QodXVpZCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuZnVuY3Rpb24gdmVyc2lvbih1dWlkKSB7XG4gICAgaWYgKCEoMCwgdmFsaWRhdGVfanNfMS5kZWZhdWx0KSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTUpLCAxNik7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2ZXJzaW9uO1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHR0eXBlIFZhbHZlUHJvcHMsXG5cdHR5cGUgVmFsdmVTdGF0dXNcbn0gZnJvbSBcIi4vcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL3R5cGVzXCI7XG5cblxuaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRQcm9wZXJ0eVRyZWUsXG59IGZyb20gJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG5pbXBvcnQgdHlwZSB7XG5cdENvbXBvbmVudFByb3BzXG5cdCxDb21wb25lbnRNZXRhXG5cdCxQQ29tcG9uZW50XG5cdCxTaXplT2JqZWN0XG59IGZyb20gJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCcvLydAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuaW1wb3J0IHsgVmFsdmVGQ0NvbXBvdW5kIH0gZnJvbSBcIi4vcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL1ZhbHZlRkNcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLlZhbHZlXCI7XG5cbi8qKlxuICogVmFsdmUgY29tcG9uZW50IGNsYXNzLlxuICogRXh0ZW5kcyB0aGUgYmFzZSBDb21wb25lbnQgY2xhc3MgZnJvbSBQZXJzcGVjdGl2ZSwgdHlwZWQgd2l0aCBWYWx2ZVByb3BzLlxuICogUHJvdmlkZXMgYSBjdXN0b21pemFibGUgdmFsdmUgd2l0aCBwcm9wZXIgaGFuZGxpbmcgb2YgZGVzaWduZXIvcHJldmlldyBtb2Rlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZhbHZlIGV4dGVuZHMgQ29tcG9uZW50PENvbXBvbmVudFByb3BzPFZhbHZlUHJvcHM+LCBhbnk+IHtcblxuXHQvLyBUaGlzIGlzIGEgbGlmZWN5Y2xlIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3QgbW91bnRlZCB0byB0aGUgRE9NLlxuXHRjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHt9XG5cdHZhbHZlU3RhdHVzOiBWYWx2ZVN0YXR1cyA9IHRoaXMucHJvcHMucHJvcHMuVmFsdmVTdGF0dXMgPz8ge307XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdDxWYWx2ZUZDQ29tcG91bmQuUm9vdFxuXHRcdGNvbXBvbmVudFByb3BzPXt0aGlzLnByb3BzfVxuXHRcdHZhbHZlUHJvcHM9e3RoaXMucHJvcHMucHJvcHN9XG5cdFx0PlxuXHRcdFx0PFZhbHZlRkNDb21wb3VuZC5WYWx2ZSAvPlxuXHRcdDwvVmFsdmVGQ0NvbXBvdW5kLlJvb3Q+XG5cdClcbn1cbn1cbi8vIFRoaXMgaXMgdGhlIGFjdHVhbCB0aGluZyB0aGF0IGdldHMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBjb21wb25lbnQgcmVnaXN0cnkuXG5leHBvcnQgY2xhc3MgVmFsdmVNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFZhbHZlO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiA3NSxcblx0XHRcdGhlaWdodDogNzUsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFZhbHZlUHJvcHMge1xuXHRcdGNvbnNvbGUubG9nKFwiVmFsdmVTdGF0dXNcIiwgdHJlZS5yZWFkKFwiVmFsdmVTdGF0dXNcIikpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRWYWx2ZVN0YXR1czoge1xuXHRcdFx0XHRhbGFybTogdHJlZS5yZWFkQm9vbGVhbihcIlZhbHZlU3RhdHVzLkFsYXJtXCIsIGZhbHNlKSxcblx0XHRcdFx0YWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJWYWx2ZVN0YXR1cy5BY3RGQlwiLCBmYWxzZSksXG5cdFx0XHRcdGRlQWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJWYWx2ZVN0YXR1cy5EZUFjdEZCXCIsIGZhbHNlKSxcblx0XHRcdFx0YWN0aXZhdGVkQ29uZmlnOiB0cmVlLnJlYWROdW1iZXIoXCJWYWx2ZVN0YXR1cy5BY3RpdmF0ZWRDb25maWdcIiwgNiksXG5cdFx0XHRcdGRlYWN0aXZhdGVkQ29uZmlnOiB0cmVlLnJlYWROdW1iZXIoXCJWYWx2ZVN0YXR1cy5EZWFjdGl2YXRlZENvbmZpZ1wiLCAwKSxcblx0XHRcdFx0dGFnTmFtZTogdHJlZS5yZWFkU3RyaW5nKFwiVmFsdmVTdGF0dXMuVGFnTmFtZVwiLCBcIlwiKSxcblx0XHRcdFx0bWFudWFsOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMuTWFudWFsXCIsIGZhbHNlKSxcblx0XHRcdFx0bWFza2VkOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMuTWFza2VkXCIsIGZhbHNlKSxcblx0XHRcdFx0Y2hhbmdpbmc6IHRyZWUucmVhZEJvb2xlYW4oXCJWYWx2ZVN0YXR1cy5DaGFuZ2luZ1wiLCBmYWxzZSksXG5cdFx0XHR9LFxuXHRcdH07XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdHlwZSBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHtcblx0VmFsdmVQcm9wcyxcbiB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENvbXBvbmVudFByb3BzIH0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50J1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZUNvbnRleHQnXG5pbXBvcnQgeyBDT01QT05FTlRfVFlQRSB9IGZyb20gJy4uLy4uL1ZhbHZlJ1xuaW1wb3J0IHsgZ2V0SXRlbUNsYXNzTmFtZSwgaXRlbU5hbWVzIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSdcblxudHlwZSBWYWx2ZUNvbXBvdW5kUHJvcHMgPSB7XG5cdGNvbXBvbmVudFByb3BzPzpDb21wb25lbnRQcm9wczxhbnksYW55Pixcblx0dmFsdmVQcm9wczpWYWx2ZVByb3BzLFxuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5jb25zdCBbVmFsdmVDb250ZXh0UHJvdmlkZXIsIHVzZVZhbHZlQ29udGV4dF0gPVxuXHRjcmVhdGVDb250ZXh0PFZhbHZlQ29tcG91bmRQcm9wcz4oXCJWYWx2ZUNvbXBvdW5kXCIpO1xuXG5jb25zdCBSb290ID0gKHt2YWx2ZVByb3BzLCBjb21wb25lbnRQcm9wcywgY2hpbGRyZW59OlZhbHZlQ29tcG91bmRQcm9wcykgPT57XG5cdGNvbnN0IHtwcm9wc30gPSBjb21wb25lbnRQcm9wcyA/PyB7fTtcblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSBjb21wb25lbnQncyBhY3Rpb24gZXZlbnQuXG5cdCAqL1xuXHRjb25zdCBvbkFjdGlvblBlcmZvcm1lZCA9ICgpID0+IHtcblx0XHQvLyBJZiB0aGUgZGVzaWduZXIgaXMgaW4gXCJkZXNpZ25cIiBtb2RlLCBkb24ndCBkbyBhbnl0aGluZ1xuXHRcdGlmICghcHJvcHMuZXZlbnRzRW5hYmxlZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBpcyBkaXNhYmxlZCBpbiB0aGUgZGVzaWduLXNjb3BlXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGNsaWNrZWQhXCIpO1xuXHRcdHByb3BzLmNvbXBvbmVudEV2ZW50cy5maXJlQ29tcG9uZW50RXZlbnQoXCJvbkFjdGlvblBlcmZvcm1lZFwiLCB7fSk7XG5cdH07XG4gIHJldHVybiAoXG5cdDxWYWx2ZUNvbnRleHRQcm92aWRlclxuXHR7Li4ue1xuXHRcdHZhbHZlUHJvcHMsXG5cdFx0Y29tcG9uZW50UHJvcHMsXG5cdFx0b25BY3Rpb25QZXJmb3JtZWRcblx0fX1cblx0PlxuXHR7Y2hpbGRyZW59XG5cdDwvVmFsdmVDb250ZXh0UHJvdmlkZXI+XG4gIClcbn1cbmNvbnN0IFZhbHZlID0gKCkgPT4ge1xuY29uc3Qge3ZhbHZlUHJvcHMsIGNvbXBvbmVudFByb3BzfSA9IHVzZVZhbHZlQ29udGV4dChcIlZhbHZlXCIpO1xuY29uc3Qge1ZhbHZlU3RhdHVzfSA9IHZhbHZlUHJvcHM7XG5jb25zdCB7cG9zaXRpb24sIHByb3BzfSA9IGNvbXBvbmVudFByb3BzID8/IHt9O1xuY29uc3QgaW5Db29yZCA9IHBvc2l0aW9uPy54ID8/IGZhbHNlO1xuaWYgKCFpbkNvb3JkKXtcblx0cmV0dXJuIChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdHsuLi5jb21wb25lbnRQcm9wcz8uZW1pdCh7XG5cdFx0XHRcdFx0XHRjbGFzc2VzOiBbYGhtaS1jb21wb25lbnQgaG1pLWNvbXBvbmVudF9fY29sdW1uIGBdLFxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG1pLWNvbXBvbmVudF9fcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhtaS1jb21wb25lbnQtdmFsdmVcIj5cblx0XHRcdFx0XHRcdFx0e2l0ZW1OYW1lcy5tYXAoXG5cdFx0XHRcdFx0XHRcdFx0KHsgdmFsdWUsIGluZGV4LCBrZXkgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlLXJlbmRlcmVkIFwiLCBpbmRleCksXG5cdFx0XHRcdFx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbUNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSArIFwiIFwiICsgZ2V0SXRlbUNsYXNzTmFtZShpbmRleCwgVmFsdmVTdGF0dXMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrPXtwcm9wcy5vbkFjdGlvblBlcmZvcm1lZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdClcbn0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0ey4uLmNvbXBvbmVudFByb3BzPy5lbWl0KHtcblx0XHRcdFx0XHRcdGNsYXNzZXM6IFtgaG1pLWNvbXBvbmVudCBobWktY29tcG9uZW50LXZhbHZlIGBdLFxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtpdGVtTmFtZXMubWFwKFxuXHRcdFx0XHRcdFx0KHsgdmFsdWUsIGluZGV4LCBrZXkgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwicmUtcmVuZGVyZWQgXCIsIGluZGV4KSxcblx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgKyBcIiBcIiArIGdldEl0ZW1DbGFzc05hbWUoaW5kZXgsIFZhbHZlU3RhdHVzKVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlQ2xpY2s9e3Byb3BzLm9uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG59XG5cbmV4cG9ydCBjb25zdCBWYWx2ZUZDQ29tcG91bmQgPSB7XG5cdFJvb3QsXG5cdFZhbHZlXG59XG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQgXCIuL2l0ZW0ubW9kdWxlLmNzc1wiO1xuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcblx0aXRlbUNsYXNzTmFtZTogc3RyaW5nO1xuXHRoYW5kbGVDbGljaz86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG59XG4vLyBjb25zdCBiaXQgPSAobjogbnVtYmVyLCBpOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuLy8gXHRyZXR1cm4gKG4gPj4gaSkgJiAxO1xuLy8gfTtcbmNvbnN0IEl0ZW06IFJlYWN0LkZDPEl0ZW1Qcm9wcz4gPSAoeyBpdGVtQ2xhc3NOYW1lLCBoYW5kbGVDbGljayB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpdGVtQ2xhc3NOYW1lfVxuXHRvbkNsaWNrPXtoYW5kbGVDbGlja30+PC9kaXY+O1xufTtcbkl0ZW0uZGlzcGxheU5hbWUgPSBcIkl0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCJleHBvcnQgY29uc3QgVmFsdmVDbGFzc05hbWVFbnVtID0ge1xuXHRBbGFybVN0YXRlIDogXCJBbGFybVN0YXRlXCIsXG5cdEFjdGl2YXRlZCA6IFwiQWN0aXZhdGVkXCIsXG5cdERlYWN0aXZhdGVkIDogXCJEZWFjdGl2YXRlZFwiLFxuXHRNYW51YWwgOiBcIk1hbnVhbFwiLFxuXHRNYXNrZWQgOiBcIk1hc2tlZFwiLFxuXHRDaGFuZ2luZyA6IFwiQ2hhbmdpbmdcIixcblx0Tm9BbGFybU1hc2sgOiBcIk5vQWxhcm1NYXNrXCIsXG59XG5leHBvcnQgdHlwZSBWYWx2ZUNsYXNzTmFtZUVudW0gPSB0eXBlb2YgVmFsdmVDbGFzc05hbWVFbnVtW2tleW9mIHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW1dXG5leHBvcnQgY29uc3QgSXRlbU5hbWVFbnVtID0ge1xuXHRWMWIyIDogXCJ2MWIyXCIsIC8vIGluZGV4IDFcblx0VjFiMyA6IFwidjFiM1wiLCAvLyBpbmRleCAyXG5cdFYxYjQgOiBcInYxYjRcIiwgLy8gaW5kZXggM1xuXHRWMWIxIDogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjJiMSA6IFwidjJiMVwiLCAvLyBpbmRleCA0XG5cdFYyYjIgOiBcInYyYjJcIiwgLy8gaW5kZXggNVxuXHRWMmIzIDogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNCA6IFwidjJiNFwiLCAvLyBpbmRleCA3XG5cdFYzYjEgOiBcInYzYjFcIiwgLy8gaW5kZXggOFxuXHRWM2IyIDogXCJ2M2IyXCIsIC8vIGluZGV4IDlcblx0VjNiMyA6IFwidjNiM1wiLCAvLyBpbmRleCAxMFxuXHRWM2I0IDogXCJ2M2I0XCIsIC8vIGluZGV4IDExXG5cdFYyIDogXCJ2MlwiLCAvLyBpbmRleCAxMlxuXHRWMyA6IFwidjNcIiwgLy8gaW5kZXggMTNcblx0VjEgOiBcInYxXCIsIC8vIGluZGV4IDE0XG5cdFYyZjEgOiBcInYyZjFcIiwgLy8gaW5kZXggMTVcblx0VjJmMiA6IFwidjJmMlwiLCAvLyBpbmRleCAxNlxuXHRWM2YxIDogXCJ2M2YxXCIsIC8vIGluZGV4IDE3XG5cdFYzZjIgOiBcInYzZjJcIiwgLy8gaW5kZXggMThcbn1cbmV4cG9ydCB0eXBlIEl0ZW1OYW1lRW51bSA9IHR5cGVvZiBJdGVtTmFtZUVudW1ba2V5b2YgdHlwZW9mIEl0ZW1OYW1lRW51bV1cblxuZXhwb3J0IGNvbnN0IEl0ZW1DbGlja2FibGVOYW1lRW51bSA9IHtcblx0VjFiMSA6IFwidjFiMVwiLCAvLyBpbmRleCAwXG5cdFYxYjIgOiBcInYxYjJcIiwgLy8gaW5kZXggMVxuXHRWMWIzIDogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNCA6IFwidjFiNFwiLCAvLyBpbmRleCAzXG5cdFYyYjEgOiBcInYyYjFcIiwgLy8gaW5kZXggNFxuXHRWMmIyIDogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMyA6IFwidjJiM1wiLCAvLyBpbmRleCA2XG5cdFYyYjQgOiBcInYyYjRcIiwgLy8gaW5kZXggN1xuXHRWM2IxIDogXCJ2M2IxXCIsIC8vIGluZGV4IDhcblx0VjNiMiA6IFwidjNiMlwiLCAvLyBpbmRleCA5XG5cdFYzYjMgOiBcInYzYjNcIiwgLy8gaW5kZXggMTBcblx0VjNiNCA6IFwidjNiNFwiLCAvLyBpbmRleCAxMVxuXHRWMiA6IFwidjJcIiwgLy8gaW5kZXggMTJcblx0VjMgOiBcInYzXCIsIC8vIGluZGV4IDEzXG5cdFYxIDogXCJ2MVwiLCAvLyBpbmRleCAxNFxufVxuZXhwb3J0IHR5cGUgSXRlbUNsaWNrYWJsZU5hbWVFbnVtID0gdHlwZW9mIEl0ZW1DbGlja2FibGVOYW1lRW51bVtrZXlvZiB0eXBlb2YgSXRlbUNsaWNrYWJsZU5hbWVFbnVtXVxuZXhwb3J0IGNvbnN0IEl0ZW1Qb3NpdGlvbkVudW0gPSB7XG5cdHYxYjE6XCJ2MWIxXCIsXG5cdHYxYjI6IFwidjFiMlwiLFxuXHR2MWIzOiBcInYxYjNcIixcblx0djFiNDogXCJ2MWI0XCIsXG5cdHYyYjE6IFwidjJiMVwiLFxuXHRWMmIyOiBcInYyYjJcIixcblx0djJiMzogXCJ2MmIzXCIsXG5cdHYyYjQ6IFwidjJiNFwiLFxuXHR2M2IxOiBcInYzYjFcIixcblx0djNiMjogXCJ2M2IyXCIsXG5cdHYzYjM6IFwidjNiM1wiLFxuXHR2M2I0OiBcInYzYjRcIixcblx0djI6IFwidjJcIixcblx0djM6IFwidjNcIixcbn1cbmV4cG9ydCB0eXBlIEl0ZW1Qb3NpdGlvbkVudW0gPSB0eXBlb2YgSXRlbVBvc2l0aW9uRW51bVtrZXlvZiB0eXBlb2YgSXRlbVBvc2l0aW9uRW51bV1cblxuXG5leHBvcnQgdHlwZSBWYWx2ZVN0YXR1cyA9IHtcblx0YWxhcm0/OiBib29sZWFuO1xuXHRhY3RGQj86IGJvb2xlYW47XG5cdGRlQWN0RkI/OiBib29sZWFuO1xuXHRhY3RpdmF0ZWRDb25maWc/OiBudW1iZXI7XG5cdGRlYWN0aXZhdGVkQ29uZmlnPzogbnVtYmVyO1xuXHR0YWdOYW1lPzogc3RyaW5nO1xuXHRtYW51YWw/OiBib29sZWFuO1xuXHRtYXNrZWQ/OiBib29sZWFuO1xuXHRjaGFuZ2luZz86IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBWYWx2ZVByb3BzID0ge1xuXHRWYWx2ZVN0YXR1cz86IFZhbHZlU3RhdHVzO1xuXHRoYW5kbGVDbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIEl0ZW1EYXRhID0ge1xuXHRrZXk6IHN0cmluZztcblx0dmFsdWU6IHN0cmluZztcblx0cHJvcHM6IFZhbHZlU3RhdHVzO1xufVxuIiwiaW1wb3J0IHsgZ2V0Qm9vbEF0SW5kZXggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbnVtYmVyVXRpbFwiO1xuaW1wb3J0IHsgSXRlbU5hbWVFbnVtLCB0eXBlIFZhbHZlU3RhdHVzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7djQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcbi8qKlxuICogVGhpcyBpcyBhIHV0aWxpdHkgZnVuY3Rpb24gZm9yIHRoZSBjb21wb25lbnQgXCJwcm9jZXNzLW9iamVjdC9WYWx2ZUZDXCJcbiAqXG4gKiBAcGFyYW0gaW5kZXg6IG51bWJlciB0aGUgaW5kZXggb2YgYW4gZHluYW1pYyB2aXN1YWwgZWxlbWVudCBcIml0ZW1cIiB3aXRoaW4gdGhlIFZhbHZlIGNvbXBvbmVudFxuICogQHBhcmFtIHZhbHZlU3RhdHVzPzpWYWx2ZVN0YXR1cyB0aGUgc3RhdHVzIHJlcHJlc2VudGluZyBwaHlzaWNhbCBwcm9jZXNzIHZhbHZlXG4gKiBAcmV0dXJucyBjbGFzc05hbWU6c3RyaW5nIHJldHVybnMgYWRkaXRpb25hbCBjbGFzc25hbWVzIGZvciBhbiB2aXN1YWwgZWxlbWVudCBvZiB0aGUgdmFsdmUgY29tcG9uZW50LlxuICpcbiAqIFJldHVybmVkIGNsYXNzbmFtZXMgYXJlO1xuICogXHRoaWRlIC0gdGhpcyBoaWRlcyB0aGUgaXRlbVxuICogXHRzaG93IC1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1DbGFzc05hbWUgPSAoaW5kZXg6IG51bWJlciwgdmFsdmVTdGF0dXM/OiBWYWx2ZVN0YXR1cyk6IHN0cmluZyA9PiB7XG5cdFx0bGV0IGNsYXNzTmFtZSA9IFwiXCI7XG5cdFx0Ly8gSGFuZGxlIHRoZSBmYWN0IHRoYXQgQWN0aXZhdGVkQ29uZmlnIGFuZCBEZWFjdGl2YXRlZENvbmZpZyBhcmUgb3B0aW9uYWwgYW5kIG1heWJlIHVuZGVmaW5lZFxuXHRcdGNvbnN0IEFjdGl2YXRlZENvbmZpZ1ZhbHVlID0gdmFsdmVTdGF0dXM/LmFjdGl2YXRlZENvbmZpZyA/PyAwO1xuXHRcdGNvbnN0IERlYWN0aXZhdGVkQ29uZmlnVmFsdWUgPSB2YWx2ZVN0YXR1cz8uZGVhY3RpdmF0ZWRDb25maWcgPz8gMDtcblx0XHRpZiAoaW5kZXggPCAxMikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQoZ2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSAmJiB2YWx2ZVN0YXR1cz8uYWN0RkIpIHx8XG5cdFx0XHRcdChnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgJiYgdmFsdmVTdGF0dXM/LmRlQWN0RkIpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93IGl0ZW1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZSBpdGVtXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IDEyKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgfHxcblx0XHRcdCBcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSB8fFxuXHRcdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleClcblx0XHRcdCkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IDE1KSB7XG5cdFx0XHRpZiAoZ2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEyKSB8fCBnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMikpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAxNikge1xuXHRcdFx0aWYgKGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMikgfHwgZ2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTIpKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTcpIHtcblx0XHRcdGlmIChnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTMpIHx8IGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEzKSkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IDE4KSB7XG5cdFx0XHRpZiAoZ2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEzKSB8fCBnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMykpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHRcdC8vIEFkZGl0aW9ucyB0byB0aGUgY2xhc3NOYW1lXG5cblx0XHRpZiAoY2xhc3NOYW1lLmluY2x1ZGVzKFwic2hvd1wiKSAmJiAhY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXRlbVwiKSkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCwgY2xhc3NOYW1lKTtcblx0XHRcdGlmICh2YWx2ZVN0YXR1cz8uYWxhcm0pIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJBbGFybVN0YXRlXCIsIFwiXCIpICsgXCIgQWxhcm1TdGF0ZVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHZlU3RhdHVzPy5jaGFuZ2luZykge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkNoYW5naW5nXCIsIFwiXCIpICsgXCIgQ2hhbmdpbmdcIjtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFudWFsKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTWFudWFsXCIsIFwiXCIpICsgXCIgTWFudWFsXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCAmJiAhdmFsdmVTdGF0dXMuYWxhcm0pIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJOb0FsYXJtTWFza1wiLCBcIlwiKSArIFwiIE5vQWxhcm1NYXNrXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk1hc2tlZFwiLCBcIlwiKSArIFwiIE1hc2tlZFwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHZlU3RhdHVzPy5hY3RGQikge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIEFjdGl2YXRlZFwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHZlU3RhdHVzPy5kZUFjdEZCKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiRGVhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBEZWFjdGl2YXRlZFwiO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc05hbWU7IC8vIGRlZmF1bHQgcmV0dXJuIHZhbHVlIGlmIG5vIG90aGVyIGNvbmRpdGlvbiBpcyBtZXRcblx0fVxuLyoqXG4gKiBAcmV0dXJucyBBcnJheSBvZiBpdGVtTmFtZShzKSBmb3IgZWFjaCB2aXN1YWwgZWxlbWVudCBvZiBhIHZhbHZlIGNvbXBvbmVudFxuICovXG5leHBvcnQgY29uc3QgaXRlbU5hbWVzID0gT2JqZWN0LmtleXMoSXRlbU5hbWVFbnVtKS5tYXAoKGl0ZW1OYW1lKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGtleTogdXVpZHY0KCksXG5cdFx0XHRuYW1lOiBpdGVtTmFtZSxcblx0XHRcdHZhbHVlOiBJdGVtTmFtZUVudW0sXG5cdFx0XHRpbmRleDogT2JqZWN0LmtleXMoSXRlbU5hbWVFbnVtKS5pbmRleE9mKGl0ZW1OYW1lKSxcblx0XHR9O1xuXHR9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQ8Q29udGV4dFZhbHVlVHlwZSBleHRlbmRzIG9iamVjdCB8IG51bGw+KFxuICByb290Q29tcG9uZW50TmFtZTogc3RyaW5nLFxuICBkZWZhdWx0Q29udGV4dD86IENvbnRleHRWYWx1ZVR5cGVcbikge1xuICBjb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDb250ZXh0VmFsdWVUeXBlIHwgdW5kZWZpbmVkPihcbiAgICBkZWZhdWx0Q29udGV4dFxuICApO1xuXG4gIGNvbnN0IFByb3ZpZGVyOiBSZWFjdC5GQzxDb250ZXh0VmFsdWVUeXBlICYgeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKFxuICAgIHByb3BzXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLmNvbnRleHQgfSA9IHByb3BzO1xuICAgIC8vIE9ubHkgcmUtbWVtb2l6ZSB3aGVuIHByb3AgdmFsdWVzIGNoYW5nZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBjb25zdCB2YWx1ZSA9IFJlYWN0LnVzZU1lbW8oXG4gICAgICAoKSA9PiBjb250ZXh0LFxuICAgICAgT2JqZWN0LnZhbHVlcyhjb250ZXh0KVxuICAgICkgYXMgQ29udGV4dFZhbHVlVHlwZTtcbiAgICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcbiAgfTtcblxuICBQcm92aWRlci5kaXNwbGF5TmFtZSA9IHJvb3RDb21wb25lbnROYW1lICsgXCJQcm92aWRlclwiO1xuXG4gIGZ1bmN0aW9uIHVzZUNvbnRleHQoY29uc3VtZXJOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KTtcbiAgICBpZiAoY29udGV4dCkgcmV0dXJuIGNvbnRleHQ7XG4gICAgaWYgKGRlZmF1bHRDb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiBkZWZhdWx0Q29udGV4dDtcbiAgICAvLyBpZiBhIGRlZmF1bHRDb250ZXh0IHdhc24ndCBzcGVjaWZpZWQsIGl0J3MgYSByZXF1aXJlZCBjb250ZXh0LlxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBcXGAke2NvbnN1bWVyTmFtZX1cXGAgbXVzdCBiZSB1c2VkIHdpdGhpbiBcXGAke3Jvb3RDb21wb25lbnROYW1lfVxcYGBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIFtQcm92aWRlciwgdXNlQ29udGV4dF0gYXMgY29uc3Q7XG59XG4iLCIvKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBudW1iZXJzXG4gKi9cblxuLyoqXG4gKiBVc2luZyB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uIG9mIG4sIGFuIEludGVnZXIsIHJldHVybnMgdGhlIGJvb2xlYW5cbiAqIHZhbHVlIGF0IGluZGV4LCBpLlxuICogQHBhcmFtIG4gYSBudW1iZXIgaXMgaW1wbGljaXR5IGNvbnZlcnRlciB0byBhIDMyYml0IGludGVnZXIsIGJ5IHRoZSBiaXR3aXNlIG9wZXJhdG9yc1xuICogQHBhcmFtIGkgaXMgYSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBiaXQgcG9zaXRpb24gdG8gYmUgdGVzdGVkXG4gKiBAcmV0dXJucyB0aGUgYm9vbGVhbiB2YWx1ZSBvZiB0aGUgYml0IGF0IGluZGV4IGkuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRCb29sQXRJbmRleCA9IChuOiBudW1iZXIsIGk6IG51bWJlcik6IG51bWJlciA9PiB7XG5cdHJldHVybiAobiA+PiBpKSAmIDE7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pbmR1Y3RpdmVhdXRvbWF0aW9uX3BlcnNwZWN0aXZlX2NsaWVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDb21wb25lbnRNZXRhLCBDb21wb25lbnRSZWdpc3RyeSB9IGZyb20gJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG4vL2ltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9CdXR0b24nO1xuLy9pbXBvcnQgeyBWYWx2ZSwgVmFsdmVNZXRhIH0gZnJvbSBcIi4vY29tcG9uZW50cy9WYWx2ZVwiO1xuaW1wb3J0IHsgVmFsdmUsIFZhbHZlTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9WYWx2ZSc7XG5cblxuLy8gRXhwb3J0IGNvbXBvbmVudHMgZm9yIGV4dGVybmFsIHJlZmVyZW5jZVxuZXhwb3J0IHsgIFZhbHZlIH07XG5cbi8vIEltcG9ydCBjb21wb25lbnQgc3R5bGVzXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLy8gQXJyYXkgb2YgY29tcG9uZW50IG1ldGFkYXRhXG5jb25zdCBjb21wb25lbnRzOiBBcnJheTxDb21wb25lbnRNZXRhPiA9IFsgbmV3IFZhbHZlTWV0YSgpXTtcblxuLy8gUmVnaXN0ZXIgZWFjaCBjb21wb25lbnQgd2l0aCB0aGUgUGVyc3BlY3RpdmUgQ29tcG9uZW50UmVnaXN0cnlcbmNvbXBvbmVudHMuZm9yRWFjaCgoYzogQ29tcG9uZW50TWV0YSkgPT4gQ29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXIoYykpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9