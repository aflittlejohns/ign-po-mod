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
// import { valveProps } from "./process-objects/valve/initialState";
// import { ValveFCCompound } from "./process-objects/valve/ValveFC";
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
        return (
        // <div>This is Valve</div>
        React.createElement(ValveFC_1.ValveFCCompound.Root, { componentProps: this.props, valveProps: this.props.props },
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
const Valve_1 = __webpack_require__(/*! ../../Valve */ "./src/components/Valve.tsx");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/components/process-objects/valve/utils.ts");
const item_1 = __webpack_require__(/*! ./item */ "./src/components/process-objects/valve/item.tsx");
const createContext_1 = __webpack_require__(/*! ../../../utils/createContext */ "./src/utils/createContext.tsx");
console.log(createContext_1.useCreateContext);
const [ValveContextProvider, useValveContext] = (0, createContext_1.useCreateContext)("ValveCompound");
const Root = ({ valveProps, componentProps, children }) => {
    const { props } = componentProps;
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
    const { position, props } = componentProps;
    const inCoord = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : false;
    if (!inCoord) {
        return (React.createElement("div", Object.assign({}, componentProps === null || componentProps === void 0 ? void 0 : componentProps.emit({
            classes: [`hmi-component hmi-component__column `],
        }), { "data-component": Valve_1.COMPONENT_TYPE }),
            React.createElement("div", { className: "hmi-component__row" },
                React.createElement("div", { className: "hmi-component-valve" }, utils_1.itemNames.map(({ value, index, key }) => (console.log("re-rendered ", index),
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
exports.itemNames = Object.keys(types_1.ItemNameEnum).map((key, value) => {
    console.log(`key ${key} value ${value}`);
    return {
        key: (0, uuid_1.v4)(),
        name: key,
        value: key,
        index: value,
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
exports.useCreateContext = useCreateContext;
const React = __webpack_require__(/*! react */ "react");
function useCreateContext(rootComponentName, defaultContext) {
    const Context = React.createContext(defaultContext);
    const Provider = (props) => {
        const { children } = props, context = __rest(props, ["children"]);
        // Only re-memoize when prop values change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = React.useMemo(() => context, Object.values(context));
        return React.createElement(Context.Provider, { value: value }, children);
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext(consumerName) {
        const context = React.useContext(Context);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BLDJJQUEyRjtBQUMzRiwyREFBMkQ7QUFDM0Qsd0RBQXdEO0FBQ3hELDRGQUFzRDtBQUk1Qyx1RkFKRCxhQUFLLFFBSUM7QUFFZiwwQkFBMEI7QUFDMUIsMERBQXFCO0FBRXJCLDhCQUE4QjtBQUM5QixNQUFNLFVBQVUsR0FBeUIsQ0FBRSxJQUFJLGlCQUFTLEVBQUUsQ0FBQyxDQUFDO0FBRTVELGlFQUFpRTtBQUNqRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZ0IsRUFBRSxFQUFFLENBQUMsc0NBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9tYXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbWQ1LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9uaWwuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3NoYTEuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YxLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YxVG9WNi5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92MzUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjYuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjZUb1YxLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y3LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1ZhbHZlLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL1ZhbHZlRkMudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvdmFsdmUvaXRlbS50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS90eXBlcy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL3V0aWxzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvdXRpbHMvY3JlYXRlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy91dGlscy9udW1iZXJVdGlsLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvZXh0ZXJuYWwgdW1kIFwiUGVyc3BlY3RpdmVDbGllbnRcIiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL2V4dGVybmFsIHVtZCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQZXJzcGVjdGl2ZUNsaWVudFwiKSwgcmVxdWlyZShcIlJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiSG1pQ29tcG9uZW50c1wiLCBbXCJQZXJzcGVjdGl2ZUNsaWVudFwiLCBcIlJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhtaUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJQZXJzcGVjdGl2ZUNsaWVudFwiKSwgcmVxdWlyZShcIlJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIbWlDb21wb25lbnRzXCJdID0gZmFjdG9yeShyb290W1wiUGVyc3BlY3RpdmVDbGllbnRcIl0sIHJvb3RbXCJSZWFjdFwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW5kdWN0aXZlYXV0b21hdGlvbl9wZXJzcGVjdGl2ZV9jbGllbnRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSA9PiB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZlcnNpb24gPSBleHBvcnRzLnZhbGlkYXRlID0gZXhwb3J0cy52NyA9IGV4cG9ydHMudjZUb1YxID0gZXhwb3J0cy52NiA9IGV4cG9ydHMudjUgPSBleHBvcnRzLnY0ID0gZXhwb3J0cy52MyA9IGV4cG9ydHMudjFUb1Y2ID0gZXhwb3J0cy52MSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gZXhwb3J0cy5wYXJzZSA9IGV4cG9ydHMuTklMID0gZXhwb3J0cy5NQVggPSB2b2lkIDA7XG52YXIgbWF4X2pzXzEgPSByZXF1aXJlKFwiLi9tYXguanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNQVhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1heF9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgbmlsX2pzXzEgPSByZXF1aXJlKFwiLi9uaWwuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOSUxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5pbF9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBhcnNlX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0cmluZ2lmeVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RyaW5naWZ5X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2MV9qc18xID0gcmVxdWlyZShcIi4vdjEuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjFfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHYxVG9WNl9qc18xID0gcmVxdWlyZShcIi4vdjFUb1Y2LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFUb1Y2XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MVRvVjZfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHYzX2pzXzEgPSByZXF1aXJlKFwiLi92My5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2M19qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjRfanNfMSA9IHJlcXVpcmUoXCIuL3Y0LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY0X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2NV9qc18xID0gcmVxdWlyZShcIi4vdjUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjVfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY2X2pzXzEgPSByZXF1aXJlKFwiLi92Ni5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2Nl9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjZUb1YxX2pzXzEgPSByZXF1aXJlKFwiLi92NlRvVjEuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NlRvVjFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY2VG9WMV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjdfanNfMSA9IHJlcXVpcmUoXCIuL3Y3LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY3X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsaWRhdGVfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHZlcnNpb25fanNfMSA9IHJlcXVpcmUoXCIuL3ZlcnNpb24uanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2ZXJzaW9uX2pzXzEuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gJ2ZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZic7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICAgIGNvbnN0IHdvcmRzID0gdWludDhUb1VpbnQzMihieXRlcyk7XG4gICAgY29uc3QgbWQ1Qnl0ZXMgPSB3b3Jkc1RvTWQ1KHdvcmRzLCBieXRlcy5sZW5ndGggKiA4KTtcbiAgICByZXR1cm4gdWludDMyVG9VaW50OChtZDVCeXRlcyk7XG59XG5mdW5jdGlvbiB1aW50MzJUb1VpbnQ4KGlucHV0KSB7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShpbnB1dC5sZW5ndGggKiA0KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aCAqIDQ7IGkrKykge1xuICAgICAgICBieXRlc1tpXSA9IChpbnB1dFtpID4+IDJdID4+PiAoKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn1cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgICByZXR1cm4gKCgoaW5wdXRMZW5ndGg4ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0ICsgMTtcbn1cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gICAgY29uc3QgeHBhZCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuKSkuZmlsbCgwKTtcbiAgICB4cGFkLnNldCh4KTtcbiAgICB4cGFkW2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICAgIHhwYWRbeHBhZC5sZW5ndGggLSAxXSA9IGxlbjtcbiAgICB4ID0geHBhZDtcbiAgICBsZXQgYSA9IDE3MzI1ODQxOTM7XG4gICAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICAgIGxldCBjID0gLTE3MzI1ODQxOTQ7XG4gICAgbGV0IGQgPSAyNzE3MzM4Nzg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgICAgICBjb25zdCBvbGRhID0gYTtcbiAgICAgICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgICAgIGNvbnN0IG9sZGMgPSBjO1xuICAgICAgICBjb25zdCBvbGRkID0gZDtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgICAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICAgICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgICAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgICB9XG4gICAgcmV0dXJuIFVpbnQzMkFycmF5Lm9mKGEsIGIsIGMsIGQpO1xufVxuZnVuY3Rpb24gdWludDhUb1VpbnQzMihpbnB1dCkge1xuICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheSgpO1xuICAgIH1cbiAgICBjb25zdCBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGlucHV0Lmxlbmd0aCAqIDgpKS5maWxsKDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3V0cHV0W2kgPj4gMl0gfD0gKGlucHV0W2ldICYgMHhmZikgPDwgKChpICUgNCkgKiA4KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICAgIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgICBjb25zdCBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhmZmZmKTtcbn1cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgICByZXR1cm4gKG51bSA8PCBjbnQpIHwgKG51bSA+Pj4gKDMyIC0gY250KSk7XG59XG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICAgIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oKGIgJiBjKSB8ICh+YiAmIGQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKChiICYgZCkgfCAoYyAmIH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1kNTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHsgcmFuZG9tVVVJRCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICAgIGlmICghKDAsIHZhbGlkYXRlX2pzXzEuZGVmYXVsdCkodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgICB9XG4gICAgbGV0IHY7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNCwgKHYgPj4+IDE2KSAmIDB4ZmYsICh2ID4+PiA4KSAmIDB4ZmYsIHYgJiAweGZmLCAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4LCB2ICYgMHhmZiwgKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDgsIHYgJiAweGZmLCAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gOCwgdiAmIDB4ZmYsICgodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDApICYgMHhmZiwgKHYgLyAweDEwMDAwMDAwMCkgJiAweGZmLCAodiA+Pj4gMjQpICYgMHhmZiwgKHYgPj4+IDE2KSAmIDB4ZmYsICh2ID4+PiA4KSAmIDB4ZmYsIHYgJiAweGZmKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5mdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcm5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgICBzd2l0Y2ggKHMpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuICh4ICYgeSkgXiAofnggJiB6KTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuICh4ICYgeSkgXiAoeCAmIHopIF4gKHkgJiB6KTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgICB9XG59XG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgICByZXR1cm4gKHggPDwgbikgfCAoeCA+Pj4gKDMyIC0gbikpO1xufVxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICAgIGNvbnN0IEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gICAgY29uc3QgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcbiAgICBjb25zdCBuZXdCeXRlcyA9IG5ldyBVaW50OEFycmF5KGJ5dGVzLmxlbmd0aCArIDEpO1xuICAgIG5ld0J5dGVzLnNldChieXRlcyk7XG4gICAgbmV3Qnl0ZXNbYnl0ZXMubGVuZ3RoXSA9IDB4ODA7XG4gICAgYnl0ZXMgPSBuZXdCeXRlcztcbiAgICBjb25zdCBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gICAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICAgIGNvbnN0IE0gPSBuZXcgQXJyYXkoTik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICAgICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICAgICAgICBhcnJbal0gPVxuICAgICAgICAgICAgICAgIChieXRlc1tpICogNjQgKyBqICogNF0gPDwgMjQpIHxcbiAgICAgICAgICAgICAgICAgICAgKGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYpIHxcbiAgICAgICAgICAgICAgICAgICAgKGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCkgfFxuICAgICAgICAgICAgICAgICAgICBieXRlc1tpICogNjQgKyBqICogNCArIDNdO1xuICAgICAgICB9XG4gICAgICAgIE1baV0gPSBhcnI7XG4gICAgfVxuICAgIE1bTiAtIDFdWzE0XSA9ICgoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4KSAvIE1hdGgucG93KDIsIDMyKTtcbiAgICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gICAgTVtOIC0gMV1bMTVdID0gKChieXRlcy5sZW5ndGggLSAxKSAqIDgpICYgMHhmZmZmZmZmZjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgICAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICAgICAgICBXW3RdID0gTVtpXVt0XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB0ID0gMTY7IHQgPCA4MDsgKyt0KSB7XG4gICAgICAgICAgICBXW3RdID0gUk9UTChXW3QgLSAzXSBeIFdbdCAtIDhdIF4gV1t0IC0gMTRdIF4gV1t0IC0gMTZdLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYSA9IEhbMF07XG4gICAgICAgIGxldCBiID0gSFsxXTtcbiAgICAgICAgbGV0IGMgPSBIWzJdO1xuICAgICAgICBsZXQgZCA9IEhbM107XG4gICAgICAgIGxldCBlID0gSFs0XTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCA4MDsgKyt0KSB7XG4gICAgICAgICAgICBjb25zdCBzID0gTWF0aC5mbG9vcih0IC8gMjApO1xuICAgICAgICAgICAgY29uc3QgVCA9IChST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSkgPj4+IDA7XG4gICAgICAgICAgICBlID0gZDtcbiAgICAgICAgICAgIGQgPSBjO1xuICAgICAgICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgICAgICAgYiA9IGE7XG4gICAgICAgICAgICBhID0gVDtcbiAgICAgICAgfVxuICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSA+Pj4gMDtcbiAgICAgICAgSFsxXSA9IChIWzFdICsgYikgPj4+IDA7XG4gICAgICAgIEhbMl0gPSAoSFsyXSArIGMpID4+PiAwO1xuICAgICAgICBIWzNdID0gKEhbM10gKyBkKSA+Pj4gMDtcbiAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgPj4+IDA7XG4gICAgfVxuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKEhbMF0gPj4gMjQsIEhbMF0gPj4gMTYsIEhbMF0gPj4gOCwgSFswXSwgSFsxXSA+PiAyNCwgSFsxXSA+PiAxNiwgSFsxXSA+PiA4LCBIWzFdLCBIWzJdID4+IDI0LCBIWzJdID4+IDE2LCBIWzJdID4+IDgsIEhbMl0sIEhbM10gPj4gMjQsIEhbM10gPj4gMTYsIEhbM10gPj4gOCwgSFszXSwgSFs0XSA+PiAyNCwgSFs0XSA+PiAxNiwgSFs0XSA+PiA4LCBIWzRdKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHNoYTE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudW5zYWZlU3RyaW5naWZ5ID0gdm9pZCAwO1xuY29uc3QgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB1bnNhZmVTdHJpbmdpZnk7XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gICAgaWYgKCEoMCwgdmFsaWRhdGVfanNfMS5kZWZhdWx0KSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ2lmeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cGRhdGVWMVN0YXRlID0gdm9pZCAwO1xuY29uc3Qgcm5nX2pzXzEgPSByZXF1aXJlKFwiLi9ybmcuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmNvbnN0IF9zdGF0ZSA9IHt9O1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBsZXQgYnl0ZXM7XG4gICAgY29uc3QgaXNWNiA9IG9wdGlvbnM/Ll92NiA/PyBmYWxzZTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHRpb25zS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9uc0tleXMubGVuZ3RoID09PSAxICYmIG9wdGlvbnNLZXlzWzBdID09PSAnX3Y2Jykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBieXRlcyA9IHYxQnl0ZXMob3B0aW9ucy5yYW5kb20gPz8gb3B0aW9ucy5ybmc/LigpID8/ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpLCBvcHRpb25zLm1zZWNzLCBvcHRpb25zLm5zZWNzLCBvcHRpb25zLmNsb2Nrc2VxLCBvcHRpb25zLm5vZGUsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHJuZHMgPSAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKTtcbiAgICAgICAgdXBkYXRlVjFTdGF0ZShfc3RhdGUsIG5vdywgcm5kcyk7XG4gICAgICAgIGJ5dGVzID0gdjFCeXRlcyhybmRzLCBfc3RhdGUubXNlY3MsIF9zdGF0ZS5uc2VjcywgaXNWNiA/IHVuZGVmaW5lZCA6IF9zdGF0ZS5jbG9ja3NlcSwgaXNWNiA/IHVuZGVmaW5lZCA6IF9zdGF0ZS5ub2RlLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIHJldHVybiBidWYgPz8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZnVuY3Rpb24gdXBkYXRlVjFTdGF0ZShzdGF0ZSwgbm93LCBybmRzKSB7XG4gICAgc3RhdGUubXNlY3MgPz89IC1JbmZpbml0eTtcbiAgICBzdGF0ZS5uc2VjcyA/Pz0gMDtcbiAgICBpZiAobm93ID09PSBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5uc2VjcysrO1xuICAgICAgICBpZiAoc3RhdGUubnNlY3MgPj0gMTAwMDApIHtcbiAgICAgICAgICAgIHN0YXRlLm5vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzdGF0ZS5uc2VjcyA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm93ID4gc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUubnNlY3MgPSAwO1xuICAgIH1cbiAgICBlbHNlIGlmIChub3cgPCBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5ub2RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoIXN0YXRlLm5vZGUpIHtcbiAgICAgICAgc3RhdGUubm9kZSA9IHJuZHMuc2xpY2UoMTAsIDE2KTtcbiAgICAgICAgc3RhdGUubm9kZVswXSB8PSAweDAxO1xuICAgICAgICBzdGF0ZS5jbG9ja3NlcSA9ICgocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV0pICYgMHgzZmZmO1xuICAgIH1cbiAgICBzdGF0ZS5tc2VjcyA9IG5vdztcbiAgICByZXR1cm4gc3RhdGU7XG59XG5leHBvcnRzLnVwZGF0ZVYxU3RhdGUgPSB1cGRhdGVWMVN0YXRlO1xuZnVuY3Rpb24gdjFCeXRlcyhybmRzLCBtc2VjcywgbnNlY3MsIGNsb2Nrc2VxLCBub2RlLCBidWYsIG9mZnNldCA9IDApIHtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBpZiAoIWJ1Zikge1xuICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbXNlY3MgPz89IERhdGUubm93KCk7XG4gICAgbnNlY3MgPz89IDA7XG4gICAgY2xvY2tzZXEgPz89ICgocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV0pICYgMHgzZmZmO1xuICAgIG5vZGUgPz89IHJuZHMuc2xpY2UoMTAsIDE2KTtcbiAgICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcbiAgICBjb25zdCB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRsID4+PiAyNCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodGwgPj4+IDE2KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bCA+Pj4gOCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSB0bCAmIDB4ZmY7XG4gICAgY29uc3QgdG1oID0gKChtc2VjcyAvIDB4MTAwMDAwMDAwKSAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRtaCA+Pj4gOCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSB0bWggJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoKHRtaCA+Pj4gMjQpICYgMHhmKSB8IDB4MTA7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bWggPj4+IDE2KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChjbG9ja3NlcSA+Pj4gOCkgfCAweDgwO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICAgICAgYnVmW29mZnNldCsrXSA9IG5vZGVbbl07XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2MTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiB2MVRvVjYodXVpZCkge1xuICAgIGNvbnN0IHYxQnl0ZXMgPSB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KSh1dWlkKSA6IHV1aWQ7XG4gICAgY29uc3QgdjZCeXRlcyA9IF92MVRvVjYodjFCeXRlcyk7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKHY2Qnl0ZXMpIDogdjZCeXRlcztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHYxVG9WNjtcbmZ1bmN0aW9uIF92MVRvVjYodjFCeXRlcykge1xuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKCgodjFCeXRlc1s2XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzddID4+IDQpICYgMHgwZiksICgodjFCeXRlc1s3XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzRdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1s0XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzVdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1s1XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzBdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1swXSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzFdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1sxXSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzJdICYgMHhmMCkgPj4gNCksIDB4NjAgfCAodjFCeXRlc1syXSAmIDB4MGYpLCB2MUJ5dGVzWzNdLCB2MUJ5dGVzWzhdLCB2MUJ5dGVzWzldLCB2MUJ5dGVzWzEwXSwgdjFCeXRlc1sxMV0sIHYxQnl0ZXNbMTJdLCB2MUJ5dGVzWzEzXSwgdjFCeXRlc1sxNF0sIHYxQnl0ZXNbMTVdKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmNvbnN0IG1kNV9qc18xID0gcmVxdWlyZShcIi4vbWQ1LmpzXCIpO1xuY29uc3QgdjM1X2pzXzEgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG52YXIgdjM1X2pzXzIgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJETlNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLkROUzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlVSTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuVVJMOyB9IH0pO1xuZnVuY3Rpb24gdjModmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gKDAsIHYzNV9qc18xLmRlZmF1bHQpKDB4MzAsIG1kNV9qc18xLmRlZmF1bHQsIHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KTtcbn1cbnYzLkROUyA9IHYzNV9qc18xLkROUztcbnYzLlVSTCA9IHYzNV9qc18xLlVSTDtcbmV4cG9ydHMuZGVmYXVsdCA9IHYzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gZXhwb3J0cy5zdHJpbmdUb0J5dGVzID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICAgIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KHN0ci5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGJ5dGVzW2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn1cbmV4cG9ydHMuc3RyaW5nVG9CeXRlcyA9IHN0cmluZ1RvQnl0ZXM7XG5leHBvcnRzLkROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0cy5VUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmZ1bmN0aW9uIHYzNSh2ZXJzaW9uLCBoYXNoLCB2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIGNvbnN0IHZhbHVlQnl0ZXMgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gc3RyaW5nVG9CeXRlcyh2YWx1ZSkgOiB2YWx1ZTtcbiAgICBjb25zdCBuYW1lc3BhY2VCeXRlcyA9IHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnID8gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkobmFtZXNwYWNlKSA6IG5hbWVzcGFjZTtcbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmFtZXNwYWNlID0gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkobmFtZXNwYWNlKTtcbiAgICB9XG4gICAgaWYgKG5hbWVzcGFjZT8ubGVuZ3RoICE9PSAxNikge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ05hbWVzcGFjZSBtdXN0IGJlIGFycmF5LWxpa2UgKDE2IGl0ZXJhYmxlIGludGVnZXIgdmFsdWVzLCAwLTI1NSknKTtcbiAgICB9XG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZUJ5dGVzLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZUJ5dGVzKTtcbiAgICBieXRlcy5zZXQodmFsdWVCeXRlcywgbmFtZXNwYWNlQnl0ZXMubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2goYnl0ZXMpO1xuICAgIGJ5dGVzWzZdID0gKGJ5dGVzWzZdICYgMHgwZikgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gKGJ5dGVzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHYzNTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbmF0aXZlX2pzXzEgPSByZXF1aXJlKFwiLi9uYXRpdmUuanNcIik7XG5jb25zdCBybmdfanNfMSA9IHJlcXVpcmUoXCIuL3JuZy5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAobmF0aXZlX2pzXzEuZGVmYXVsdC5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZV9qc18xLmRlZmF1bHQucmFuZG9tVVVJRCgpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gPz8gb3B0aW9ucy5ybmc/LigpID8/ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpO1xuICAgIGlmIChybmRzLmxlbmd0aCA8IDE2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZG9tIGJ5dGVzIGxlbmd0aCBtdXN0IGJlID49IDE2Jyk7XG4gICAgfVxuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMTYgPiBidWYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVVVJRCBieXRlIHJhbmdlICR7b2Zmc2V0fToke29mZnNldCArIDE1fSBpcyBvdXQgb2YgYnVmZmVyIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmNvbnN0IHNoYTFfanNfMSA9IHJlcXVpcmUoXCIuL3NoYTEuanNcIik7XG5jb25zdCB2MzVfanNfMSA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbnZhciB2MzVfanNfMiA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkROU1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuRE5TOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVVJMXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5VUkw7IH0gfSk7XG5mdW5jdGlvbiB2NSh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHJldHVybiAoMCwgdjM1X2pzXzEuZGVmYXVsdCkoMHg1MCwgc2hhMV9qc18xLmRlZmF1bHQsIHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KTtcbn1cbnY1LkROUyA9IHYzNV9qc18xLkROUztcbnY1LlVSTCA9IHYzNV9qc18xLlVSTDtcbmV4cG9ydHMuZGVmYXVsdCA9IHY1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmNvbnN0IHYxX2pzXzEgPSByZXF1aXJlKFwiLi92MS5qc1wiKTtcbmNvbnN0IHYxVG9WNl9qc18xID0gcmVxdWlyZShcIi4vdjFUb1Y2LmpzXCIpO1xuZnVuY3Rpb24gdjYob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBvcHRpb25zID8/PSB7fTtcbiAgICBvZmZzZXQgPz89IDA7XG4gICAgbGV0IGJ5dGVzID0gKDAsIHYxX2pzXzEuZGVmYXVsdCkoeyAuLi5vcHRpb25zLCBfdjY6IHRydWUgfSwgbmV3IFVpbnQ4QXJyYXkoMTYpKTtcbiAgICBieXRlcyA9ICgwLCB2MVRvVjZfanNfMS5kZWZhdWx0KShieXRlcyk7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiB2NlRvVjEodXVpZCkge1xuICAgIGNvbnN0IHY2Qnl0ZXMgPSB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KSh1dWlkKSA6IHV1aWQ7XG4gICAgY29uc3QgdjFCeXRlcyA9IF92NlRvVjEodjZCeXRlcyk7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKHYxQnl0ZXMpIDogdjFCeXRlcztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY2VG9WMTtcbmZ1bmN0aW9uIF92NlRvVjEodjZCeXRlcykge1xuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKCgodjZCeXRlc1szXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzRdID4+IDQpICYgMHgwZiksICgodjZCeXRlc1s0XSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzVdICYgMHhmMCkgPj4gNCksICgodjZCeXRlc1s1XSAmIDB4MGYpIDw8IDQpIHwgKHY2Qnl0ZXNbNl0gJiAweDBmKSwgdjZCeXRlc1s3XSwgKCh2NkJ5dGVzWzFdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbMl0gJiAweGYwKSA+PiA0KSwgKCh2NkJ5dGVzWzJdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbM10gJiAweGYwKSA+PiA0KSwgMHgxMCB8ICgodjZCeXRlc1swXSAmIDB4ZjApID4+IDQpLCAoKHY2Qnl0ZXNbMF0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1sxXSAmIDB4ZjApID4+IDQpLCB2NkJ5dGVzWzhdLCB2NkJ5dGVzWzldLCB2NkJ5dGVzWzEwXSwgdjZCeXRlc1sxMV0sIHY2Qnl0ZXNbMTJdLCB2NkJ5dGVzWzEzXSwgdjZCeXRlc1sxNF0sIHY2Qnl0ZXNbMTVdKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cGRhdGVWN1N0YXRlID0gdm9pZCAwO1xuY29uc3Qgcm5nX2pzXzEgPSByZXF1aXJlKFwiLi9ybmcuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmNvbnN0IF9zdGF0ZSA9IHt9O1xuZnVuY3Rpb24gdjcob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBsZXQgYnl0ZXM7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgYnl0ZXMgPSB2N0J5dGVzKG9wdGlvbnMucmFuZG9tID8/IG9wdGlvbnMucm5nPy4oKSA/PyAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKSwgb3B0aW9ucy5tc2Vjcywgb3B0aW9ucy5zZXEsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHJuZHMgPSAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKTtcbiAgICAgICAgdXBkYXRlVjdTdGF0ZShfc3RhdGUsIG5vdywgcm5kcyk7XG4gICAgICAgIGJ5dGVzID0gdjdCeXRlcyhybmRzLCBfc3RhdGUubXNlY3MsIF9zdGF0ZS5zZXEsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZiA/PyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5mdW5jdGlvbiB1cGRhdGVWN1N0YXRlKHN0YXRlLCBub3csIHJuZHMpIHtcbiAgICBzdGF0ZS5tc2VjcyA/Pz0gLUluZmluaXR5O1xuICAgIHN0YXRlLnNlcSA/Pz0gMDtcbiAgICBpZiAobm93ID4gc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUuc2VxID0gKHJuZHNbNl0gPDwgMjMpIHwgKHJuZHNbN10gPDwgMTYpIHwgKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldO1xuICAgICAgICBzdGF0ZS5tc2VjcyA9IG5vdztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0YXRlLnNlcSA9IChzdGF0ZS5zZXEgKyAxKSB8IDA7XG4gICAgICAgIGlmIChzdGF0ZS5zZXEgPT09IDApIHtcbiAgICAgICAgICAgIHN0YXRlLm1zZWNzKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZXhwb3J0cy51cGRhdGVWN1N0YXRlID0gdXBkYXRlVjdTdGF0ZTtcbmZ1bmN0aW9uIHY3Qnl0ZXMocm5kcywgbXNlY3MsIHNlcSwgYnVmLCBvZmZzZXQgPSAwKSB7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgaWYgKCFidWYpIHtcbiAgICAgICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMTYgPiBidWYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVVVJRCBieXRlIHJhbmdlICR7b2Zmc2V0fToke29mZnNldCArIDE1fSBpcyBvdXQgb2YgYnVmZmVyIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1zZWNzID8/PSBEYXRlLm5vdygpO1xuICAgIHNlcSA/Pz0gKChybmRzWzZdICogMHg3ZikgPDwgMjQpIHwgKHJuZHNbN10gPDwgMTYpIHwgKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IG1zZWNzICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gMHg3MCB8ICgoc2VxID4+PiAyOCkgJiAweDBmKTtcbiAgICBidWZbb2Zmc2V0KytdID0gKHNlcSA+Pj4gMjApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gMHg4MCB8ICgoc2VxID4+PiAxNCkgJiAweDNmKTtcbiAgICBidWZbb2Zmc2V0KytdID0gKHNlcSA+Pj4gNikgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoKHNlcSA8PCAyKSAmIDB4ZmYpIHwgKHJuZHNbMTBdICYgMHgwMyk7XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTFdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzEyXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxM107XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTRdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzE1XTtcbiAgICByZXR1cm4gYnVmO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlZ2V4X2pzXzEgPSByZXF1aXJlKFwiLi9yZWdleC5qc1wiKTtcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIHJlZ2V4X2pzXzEuZGVmYXVsdC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICAgIGlmICghKDAsIHZhbGlkYXRlX2pzXzEuZGVmYXVsdCkodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE1KSwgMTYpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdmVyc2lvbjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0dHlwZSBWYWx2ZVByb3BzLFxuXHR0eXBlIFZhbHZlU3RhdHVzXG59IGZyb20gXCIuL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS90eXBlc1wiO1xuXG5cbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0UHJvcGVydHlUcmVlLFxufSBmcm9tICdAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuaW1wb3J0IHR5cGUge1xuXHRDb21wb25lbnRQcm9wc1xuXHQsQ29tcG9uZW50TWV0YVxuXHQsUENvbXBvbmVudFxuXHQsU2l6ZU9iamVjdFxufSBmcm9tICdAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnLy8nQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB7IFZhbHZlRkNDb21wb3VuZCB9IGZyb20gXCIuL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS9WYWx2ZUZDXCI7XG4vLyBpbXBvcnQgeyB2YWx2ZVByb3BzIH0gZnJvbSBcIi4vcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL2luaXRpYWxTdGF0ZVwiO1xuLy8gaW1wb3J0IHsgVmFsdmVGQ0NvbXBvdW5kIH0gZnJvbSBcIi4vcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL1ZhbHZlRkNcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLlZhbHZlXCI7XG5cbi8qKlxuICogVmFsdmUgY29tcG9uZW50IGNsYXNzLlxuICogRXh0ZW5kcyB0aGUgYmFzZSBDb21wb25lbnQgY2xhc3MgZnJvbSBQZXJzcGVjdGl2ZSwgdHlwZWQgd2l0aCBWYWx2ZVByb3BzLlxuICogUHJvdmlkZXMgYSBjdXN0b21pemFibGUgdmFsdmUgd2l0aCBwcm9wZXIgaGFuZGxpbmcgb2YgZGVzaWduZXIvcHJldmlldyBtb2Rlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZhbHZlIGV4dGVuZHMgQ29tcG9uZW50PENvbXBvbmVudFByb3BzPFZhbHZlUHJvcHM+LCBhbnk+IHtcblxuXHQvLyBUaGlzIGlzIGEgbGlmZWN5Y2xlIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3QgbW91bnRlZCB0byB0aGUgRE9NLlxuXHRjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHt9XG5cdHZhbHZlU3RhdHVzOiBWYWx2ZVN0YXR1cyA9IHRoaXMucHJvcHMucHJvcHMuVmFsdmVTdGF0dXMgPz8ge307XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0Ly8gPGRpdj5UaGlzIGlzIFZhbHZlPC9kaXY+XG5cdFx0PFZhbHZlRkNDb21wb3VuZC5Sb290XG5cdFx0Y29tcG9uZW50UHJvcHM9e3RoaXMucHJvcHN9XG5cdFx0dmFsdmVQcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHQgPlxuXHRcdFx0ICA8VmFsdmVGQ0NvbXBvdW5kLlZhbHZlIC8+XG5cdFx0IDwvVmFsdmVGQ0NvbXBvdW5kLlJvb3Q+XG5cdClcbn1cbn1cbi8vIFRoaXMgaXMgdGhlIGFjdHVhbCB0aGluZyB0aGF0IGdldHMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBjb21wb25lbnQgcmVnaXN0cnkuXG5leHBvcnQgY2xhc3MgVmFsdmVNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFZhbHZlO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiA3NSxcblx0XHRcdGhlaWdodDogNzUsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFZhbHZlUHJvcHMge1xuXHRcdGNvbnNvbGUubG9nKFwiVmFsdmVTdGF0dXNcIiwgdHJlZS5yZWFkKFwiVmFsdmVTdGF0dXNcIikpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRWYWx2ZVN0YXR1czoge1xuXHRcdFx0XHRhbGFybTogdHJlZS5yZWFkQm9vbGVhbihcIlZhbHZlU3RhdHVzLkFsYXJtXCIsIGZhbHNlKSxcblx0XHRcdFx0YWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJWYWx2ZVN0YXR1cy5BY3RGQlwiLCBmYWxzZSksXG5cdFx0XHRcdGRlQWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJWYWx2ZVN0YXR1cy5EZUFjdEZCXCIsIGZhbHNlKSxcblx0XHRcdFx0YWN0aXZhdGVkQ29uZmlnOiB0cmVlLnJlYWROdW1iZXIoXCJWYWx2ZVN0YXR1cy5BY3RpdmF0ZWRDb25maWdcIiwgNiksXG5cdFx0XHRcdGRlYWN0aXZhdGVkQ29uZmlnOiB0cmVlLnJlYWROdW1iZXIoXCJWYWx2ZVN0YXR1cy5EZWFjdGl2YXRlZENvbmZpZ1wiLCAwKSxcblx0XHRcdFx0dGFnTmFtZTogdHJlZS5yZWFkU3RyaW5nKFwiVmFsdmVTdGF0dXMuVGFnTmFtZVwiLCBcIlwiKSxcblx0XHRcdFx0bWFudWFsOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMuTWFudWFsXCIsIGZhbHNlKSxcblx0XHRcdFx0bWFza2VkOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMuTWFza2VkXCIsIGZhbHNlKSxcblx0XHRcdFx0Y2hhbmdpbmc6IHRyZWUucmVhZEJvb2xlYW4oXCJWYWx2ZVN0YXR1cy5DaGFuZ2luZ1wiLCBmYWxzZSksXG5cdFx0XHR9LFxuXHRcdH07XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdHlwZSBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHtcblx0VmFsdmVQcm9wcyxcbiB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IENvbXBvbmVudFByb3BzIH0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50J1xuaW1wb3J0IHsgQ09NUE9ORU5UX1RZUEUgfSBmcm9tICcuLi8uLi9WYWx2ZSdcbmltcG9ydCB7IGdldEl0ZW1DbGFzc05hbWUsIGl0ZW1OYW1lcyB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgSXRlbSBmcm9tICcuL2l0ZW0nXG5pbXBvcnQgeyB1c2VDcmVhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3JlYXRlQ29udGV4dCdcbmNvbnNvbGUubG9nKHVzZUNyZWF0ZUNvbnRleHQpO1xuXG4vLyBpbXBvcnQge3ZhbHZlU3RhdHVzfSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxudHlwZSBWYWx2ZUNvbXBvdW5kUHJvcHMgPSB7XG5cdGNvbXBvbmVudFByb3BzOkNvbXBvbmVudFByb3BzPGFueSxhbnk+LFxuXHR2YWx2ZVByb3BzOlZhbHZlUHJvcHMsXG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IFtWYWx2ZUNvbnRleHRQcm92aWRlciwgdXNlVmFsdmVDb250ZXh0XSA9XG5cdHVzZUNyZWF0ZUNvbnRleHQ8VmFsdmVDb21wb3VuZFByb3BzPihcIlZhbHZlQ29tcG91bmRcIik7XG5cbmNvbnN0IFJvb3QgPSAoe3ZhbHZlUHJvcHMsY29tcG9uZW50UHJvcHMsIGNoaWxkcmVufTpWYWx2ZUNvbXBvdW5kUHJvcHMpID0+e1xuXHRjb25zdCB7cHJvcHN9ID0gY29tcG9uZW50UHJvcHM7XG5cdC8qKlxuXHQgKiBIYW5kbGVyIGZvciB0aGUgY29tcG9uZW50J3MgYWN0aW9uIGV2ZW50LlxuXHQgKi9cblx0Y29uc3Qgb25BY3Rpb25QZXJmb3JtZWQgPSAoKSA9PiB7XG5cdFx0Ly8gSWYgdGhlIGRlc2lnbmVyIGlzIGluIFwiZGVzaWduXCIgbW9kZSwgZG9uJ3QgZG8gYW55dGhpbmdcblx0XHRpZiAoIXByb3BzLmV2ZW50c0VuYWJsZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgaXMgZGlzYWJsZWQgaW4gdGhlIGRlc2lnbi1zY29wZVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBjbGlja2VkIVwiKTtcblx0XHRwcm9wcy5jb21wb25lbnRFdmVudHMuZmlyZUNvbXBvbmVudEV2ZW50KFwib25BY3Rpb25QZXJmb3JtZWRcIiwge30pO1xuXHR9O1xuICByZXR1cm4gKFxuXHQ8VmFsdmVDb250ZXh0UHJvdmlkZXJcblx0ey4uLntcblx0XHR2YWx2ZVByb3BzLFxuXHRcdGNvbXBvbmVudFByb3BzLFxuXHRcdG9uQWN0aW9uUGVyZm9ybWVkXG5cdH19XG5cdD5cblx0e2NoaWxkcmVufVxuXHQ8L1ZhbHZlQ29udGV4dFByb3ZpZGVyPlxuICApXG59XG5jb25zdCBWYWx2ZSA9ICgpID0+IHtcbmNvbnN0IHt2YWx2ZVByb3BzLCBjb21wb25lbnRQcm9wc30gPSB1c2VWYWx2ZUNvbnRleHQoXCJWYWx2ZVwiKTtcbmNvbnN0IHtWYWx2ZVN0YXR1c30gPSB2YWx2ZVByb3BzO1xuY29uc3Qge3Bvc2l0aW9uLCBwcm9wc30gPSBjb21wb25lbnRQcm9wcztcbmNvbnN0IGluQ29vcmQgPSBwb3NpdGlvbj8ueCA/PyBmYWxzZTtcbmlmICghaW5Db29yZCl7XG5cdHJldHVybiAoXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHR7Li4uY29tcG9uZW50UHJvcHM/LmVtaXQoe1xuXHRcdFx0XHRcdFx0Y2xhc3NlczogW2BobWktY29tcG9uZW50IGhtaS1jb21wb25lbnRfX2NvbHVtbiBgXSxcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRkYXRhLWNvbXBvbmVudD17Q09NUE9ORU5UX1RZUEV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhtaS1jb21wb25lbnRfX3Jvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJobWktY29tcG9uZW50LXZhbHZlXCI+XG5cdFx0XHRcdFx0XHRcdHtpdGVtTmFtZXMubWFwKFxuXHRcdFx0XHRcdFx0XHRcdCh7IHZhbHVlLCBpbmRleCwga2V5IH0pID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicmUtcmVuZGVyZWQgXCIsIGluZGV4KSxcblx0XHRcdFx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlICsgXCIgXCIgKyBnZXRJdGVtQ2xhc3NOYW1lKGluZGV4LCBWYWx2ZVN0YXR1cylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlQ2xpY2s9e3Byb3BzLm9uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0KVxufSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHR7Li4uY29tcG9uZW50UHJvcHM/LmVtaXQoe1xuXHRcdFx0XHRcdFx0Y2xhc3NlczogW2BobWktY29tcG9uZW50IGhtaS1jb21wb25lbnQtdmFsdmUgYF0sXG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0ZGF0YS1jb21wb25lbnQ9e0NPTVBPTkVOVF9UWVBFfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e2l0ZW1OYW1lcy5tYXAoXG5cdFx0XHRcdFx0XHQoeyB2YWx1ZSwgaW5kZXgsIGtleSB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJyZS1yZW5kZXJlZCBcIiwgaW5kZXgpLFxuXHRcdFx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRcdFx0PEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW1DbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSArIFwiIFwiICsgZ2V0SXRlbUNsYXNzTmFtZShpbmRleCwgVmFsdmVTdGF0dXMpXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVDbGljaz17cHJvcHMub25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cbn1cblxuZXhwb3J0IGNvbnN0IFZhbHZlRkNDb21wb3VuZCA9IHtcblx0Um9vdCxcblx0VmFsdmVcbn1cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCBcIi4vaXRlbS5tb2R1bGUuY3NzXCI7XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuXHRpdGVtQ2xhc3NOYW1lOiBzdHJpbmc7XG5cdGhhbmRsZUNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn1cbi8vIGNvbnN0IGJpdCA9IChuOiBudW1iZXIsIGk6IG51bWJlcik6IG51bWJlciA9PiB7XG4vLyBcdHJldHVybiAobiA+PiBpKSAmIDE7XG4vLyB9O1xuY29uc3QgSXRlbTogUmVhY3QuRkM8SXRlbVByb3BzPiA9ICh7IGl0ZW1DbGFzc05hbWUsIGhhbmRsZUNsaWNrIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2l0ZW1DbGFzc05hbWV9XG5cdG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48L2Rpdj47XG59O1xuSXRlbS5kaXNwbGF5TmFtZSA9IFwiSXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiIsImV4cG9ydCBjb25zdCBWYWx2ZUNsYXNzTmFtZUVudW0gPSB7XG5cdEFsYXJtU3RhdGUgOiBcIkFsYXJtU3RhdGVcIixcblx0QWN0aXZhdGVkIDogXCJBY3RpdmF0ZWRcIixcblx0RGVhY3RpdmF0ZWQgOiBcIkRlYWN0aXZhdGVkXCIsXG5cdE1hbnVhbCA6IFwiTWFudWFsXCIsXG5cdE1hc2tlZCA6IFwiTWFza2VkXCIsXG5cdENoYW5naW5nIDogXCJDaGFuZ2luZ1wiLFxuXHROb0FsYXJtTWFzayA6IFwiTm9BbGFybU1hc2tcIixcbn1cbmV4cG9ydCB0eXBlIFZhbHZlQ2xhc3NOYW1lRW51bSA9IHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW1ba2V5b2YgdHlwZW9mIFZhbHZlQ2xhc3NOYW1lRW51bV1cbmV4cG9ydCBjb25zdCBJdGVtTmFtZUVudW0gPSB7XG5cdFYxYjIgOiBcInYxYjJcIiwgLy8gaW5kZXggMVxuXHRWMWIzIDogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNCA6IFwidjFiNFwiLCAvLyBpbmRleCAzXG5cdFYxYjEgOiBcInYxYjFcIiwgLy8gaW5kZXggMFxuXHRWMmIxIDogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMiA6IFwidjJiMlwiLCAvLyBpbmRleCA1XG5cdFYyYjMgOiBcInYyYjNcIiwgLy8gaW5kZXggNlxuXHRWMmI0IDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjNiMSA6IFwidjNiMVwiLCAvLyBpbmRleCA4XG5cdFYzYjIgOiBcInYzYjJcIiwgLy8gaW5kZXggOVxuXHRWM2IzIDogXCJ2M2IzXCIsIC8vIGluZGV4IDEwXG5cdFYzYjQgOiBcInYzYjRcIiwgLy8gaW5kZXggMTFcblx0VjIgOiBcInYyXCIsIC8vIGluZGV4IDEyXG5cdFYzIDogXCJ2M1wiLCAvLyBpbmRleCAxM1xuXHRWMSA6IFwidjFcIiwgLy8gaW5kZXggMTRcblx0VjJmMSA6IFwidjJmMVwiLCAvLyBpbmRleCAxNVxuXHRWMmYyIDogXCJ2MmYyXCIsIC8vIGluZGV4IDE2XG5cdFYzZjEgOiBcInYzZjFcIiwgLy8gaW5kZXggMTdcblx0VjNmMiA6IFwidjNmMlwiLCAvLyBpbmRleCAxOFxufVxuZXhwb3J0IHR5cGUgSXRlbU5hbWVFbnVtID0gdHlwZW9mIEl0ZW1OYW1lRW51bVtrZXlvZiB0eXBlb2YgSXRlbU5hbWVFbnVtXVxuXG5leHBvcnQgY29uc3QgSXRlbUNsaWNrYWJsZU5hbWVFbnVtID0ge1xuXHRWMWIxIDogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjFiMiA6IFwidjFiMlwiLCAvLyBpbmRleCAxXG5cdFYxYjMgOiBcInYxYjNcIiwgLy8gaW5kZXggMlxuXHRWMWI0IDogXCJ2MWI0XCIsIC8vIGluZGV4IDNcblx0VjJiMSA6IFwidjJiMVwiLCAvLyBpbmRleCA0XG5cdFYyYjIgOiBcInYyYjJcIiwgLy8gaW5kZXggNVxuXHRWMmIzIDogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNCA6IFwidjJiNFwiLCAvLyBpbmRleCA3XG5cdFYzYjEgOiBcInYzYjFcIiwgLy8gaW5kZXggOFxuXHRWM2IyIDogXCJ2M2IyXCIsIC8vIGluZGV4IDlcblx0VjNiMyA6IFwidjNiM1wiLCAvLyBpbmRleCAxMFxuXHRWM2I0IDogXCJ2M2I0XCIsIC8vIGluZGV4IDExXG5cdFYyIDogXCJ2MlwiLCAvLyBpbmRleCAxMlxuXHRWMyA6IFwidjNcIiwgLy8gaW5kZXggMTNcblx0VjEgOiBcInYxXCIsIC8vIGluZGV4IDE0XG59XG5leHBvcnQgdHlwZSBJdGVtQ2xpY2thYmxlTmFtZUVudW0gPSB0eXBlb2YgSXRlbUNsaWNrYWJsZU5hbWVFbnVtW2tleW9mIHR5cGVvZiBJdGVtQ2xpY2thYmxlTmFtZUVudW1dXG5leHBvcnQgY29uc3QgSXRlbVBvc2l0aW9uRW51bSA9IHtcblx0djFiMTpcInYxYjFcIixcblx0djFiMjogXCJ2MWIyXCIsXG5cdHYxYjM6IFwidjFiM1wiLFxuXHR2MWI0OiBcInYxYjRcIixcblx0djJiMTogXCJ2MmIxXCIsXG5cdFYyYjI6IFwidjJiMlwiLFxuXHR2MmIzOiBcInYyYjNcIixcblx0djJiNDogXCJ2MmI0XCIsXG5cdHYzYjE6IFwidjNiMVwiLFxuXHR2M2IyOiBcInYzYjJcIixcblx0djNiMzogXCJ2M2IzXCIsXG5cdHYzYjQ6IFwidjNiNFwiLFxuXHR2MjogXCJ2MlwiLFxuXHR2MzogXCJ2M1wiLFxufVxuZXhwb3J0IHR5cGUgSXRlbVBvc2l0aW9uRW51bSA9IHR5cGVvZiBJdGVtUG9zaXRpb25FbnVtW2tleW9mIHR5cGVvZiBJdGVtUG9zaXRpb25FbnVtXVxuXG5cbmV4cG9ydCB0eXBlIFZhbHZlU3RhdHVzID0ge1xuXHRhbGFybT86IGJvb2xlYW47XG5cdGFjdEZCPzogYm9vbGVhbjtcblx0ZGVBY3RGQj86IGJvb2xlYW47XG5cdGFjdGl2YXRlZENvbmZpZz86IG51bWJlcjtcblx0ZGVhY3RpdmF0ZWRDb25maWc/OiBudW1iZXI7XG5cdHRhZ05hbWU/OiBzdHJpbmc7XG5cdG1hbnVhbD86IGJvb2xlYW47XG5cdG1hc2tlZD86IGJvb2xlYW47XG5cdGNoYW5naW5nPzogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFZhbHZlUHJvcHMgPSB7XG5cdFZhbHZlU3RhdHVzPzogVmFsdmVTdGF0dXM7XG5cdGhhbmRsZUNsaWNrPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgSXRlbURhdGEgPSB7XG5cdGtleTogc3RyaW5nO1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRwcm9wczogVmFsdmVTdGF0dXM7XG59XG4iLCJpbXBvcnQgeyBnZXRCb29sQXRJbmRleCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9udW1iZXJVdGlsXCI7XG5pbXBvcnQgeyBJdGVtTmFtZUVudW0sIHR5cGUgVmFsdmVTdGF0dXMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuLyoqXG4gKiBUaGlzIGlzIGEgdXRpbGl0eSBmdW5jdGlvbiBmb3IgdGhlIGNvbXBvbmVudCBcInByb2Nlc3Mtb2JqZWN0L1ZhbHZlRkNcIlxuICpcbiAqIEBwYXJhbSBpbmRleDogbnVtYmVyIHRoZSBpbmRleCBvZiBhbiBkeW5hbWljIHZpc3VhbCBlbGVtZW50IFwiaXRlbVwiIHdpdGhpbiB0aGUgVmFsdmUgY29tcG9uZW50XG4gKiBAcGFyYW0gdmFsdmVTdGF0dXM/OlZhbHZlU3RhdHVzIHRoZSBzdGF0dXMgcmVwcmVzZW50aW5nIHBoeXNpY2FsIHByb2Nlc3MgdmFsdmVcbiAqIEByZXR1cm5zIGNsYXNzTmFtZTpzdHJpbmcgcmV0dXJucyBhZGRpdGlvbmFsIGNsYXNzbmFtZXMgZm9yIGFuIHZpc3VhbCBlbGVtZW50IG9mIHRoZSB2YWx2ZSBjb21wb25lbnQuXG4gKlxuICogUmV0dXJuZWQgY2xhc3NuYW1lcyBhcmU7XG4gKiBcdGhpZGUgLSB0aGlzIGhpZGVzIHRoZSBpdGVtXG4gKiBcdHNob3cgLVxuICovXG5leHBvcnQgY29uc3QgZ2V0SXRlbUNsYXNzTmFtZSA9IChpbmRleDogbnVtYmVyLCB2YWx2ZVN0YXR1cz86IFZhbHZlU3RhdHVzKTogc3RyaW5nID0+IHtcblx0XHRsZXQgY2xhc3NOYW1lID0gXCJcIjtcblx0XHQvLyBIYW5kbGUgdGhlIGZhY3QgdGhhdCBBY3RpdmF0ZWRDb25maWcgYW5kIERlYWN0aXZhdGVkQ29uZmlnIGFyZSBvcHRpb25hbCBhbmQgbWF5YmUgdW5kZWZpbmVkXG5cdFx0Y29uc3QgQWN0aXZhdGVkQ29uZmlnVmFsdWUgPSB2YWx2ZVN0YXR1cz8uYWN0aXZhdGVkQ29uZmlnID8/IDA7XG5cdFx0Y29uc3QgRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSA9IHZhbHZlU3RhdHVzPy5kZWFjdGl2YXRlZENvbmZpZyA/PyAwO1xuXHRcdGlmIChpbmRleCA8IDEyKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdChnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpICYmIHZhbHZlU3RhdHVzPy5hY3RGQikgfHxcblx0XHRcdFx0KGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSAmJiB2YWx2ZVN0YXR1cz8uZGVBY3RGQilcblx0XHRcdCkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAxNCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTIpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSB8fFxuXHRcdFx0IFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpIHx8XG5cdFx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTUpIHtcblx0XHRcdGlmIChnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTIpIHx8IGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEyKSkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IDE2KSB7XG5cdFx0XHRpZiAoZ2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEyKSB8fCBnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMikpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAxNykge1xuXHRcdFx0aWYgKGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMykgfHwgZ2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTMpKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTgpIHtcblx0XHRcdGlmIChnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTMpIHx8IGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEzKSkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdFx0Ly8gQWRkaXRpb25zIHRvIHRoZSBjbGFzc05hbWVcblxuXHRcdGlmIChjbGFzc05hbWUuaW5jbHVkZXMoXCJzaG93XCIpICYmICFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtXCIpKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4LCBjbGFzc05hbWUpO1xuXHRcdFx0aWYgKHZhbHZlU3RhdHVzPy5hbGFybSkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkFsYXJtU3RhdGVcIiwgXCJcIikgKyBcIiBBbGFybVN0YXRlXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdmVTdGF0dXM/LmNoYW5naW5nKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQ2hhbmdpbmdcIiwgXCJcIikgKyBcIiBDaGFuZ2luZ1wiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHZlU3RhdHVzPy5tYW51YWwpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJNYW51YWxcIiwgXCJcIikgKyBcIiBNYW51YWxcIjtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFza2VkICYmICF2YWx2ZVN0YXR1cy5hbGFybSkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk5vQWxhcm1NYXNrXCIsIFwiXCIpICsgXCIgTm9BbGFybU1hc2tcIjtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFza2VkKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTWFza2VkXCIsIFwiXCIpICsgXCIgTWFza2VkXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdmVTdGF0dXM/LmFjdEZCKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgQWN0aXZhdGVkXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdmVTdGF0dXM/LmRlQWN0RkIpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJEZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIERlYWN0aXZhdGVkXCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzTmFtZTsgLy8gZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbm8gb3RoZXIgY29uZGl0aW9uIGlzIG1ldFxuXHR9XG4vKipcbiAqIEByZXR1cm5zIEFycmF5IG9mIGl0ZW1OYW1lKHMpIGZvciBlYWNoIHZpc3VhbCBlbGVtZW50IG9mIGEgdmFsdmUgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBpdGVtTmFtZXMgPSBPYmplY3Qua2V5cyhJdGVtTmFtZUVudW0pLm1hcCgoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGBrZXkgJHtrZXl9IHZhbHVlICR7dmFsdWV9YClcblx0cmV0dXJuIHtcblx0XHRcdGtleTogdXVpZHY0KCksXG5cdFx0XHRuYW1lOiBrZXksXG5cdFx0XHR2YWx1ZToga2V5LFxuXHRcdFx0aW5kZXg6IHZhbHVlLFxuXHRcdH07XG5cdH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb250ZXh0PENvbnRleHRWYWx1ZVR5cGUgZXh0ZW5kcyBvYmplY3QgfCBudWxsPihcbiAgcm9vdENvbXBvbmVudE5hbWU6IHN0cmluZyxcbiAgZGVmYXVsdENvbnRleHQ/OiBDb250ZXh0VmFsdWVUeXBlXG4pIHtcbiAgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q29udGV4dFZhbHVlVHlwZSB8IHVuZGVmaW5lZD4oXG4gICAgZGVmYXVsdENvbnRleHRcbiAgKTtcblxuICBjb25zdCBQcm92aWRlcjogUmVhY3QuRkM8Q29udGV4dFZhbHVlVHlwZSAmIHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9IChcbiAgICBwcm9wc1xuICApID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5jb250ZXh0IH0gPSBwcm9wcztcbiAgICAvLyBPbmx5IHJlLW1lbW9pemUgd2hlbiBwcm9wIHZhbHVlcyBjaGFuZ2VcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgY29uc3QgdmFsdWUgPSBSZWFjdC51c2VNZW1vKFxuICAgICAgKCkgPT4gY29udGV4dCxcbiAgICAgIE9iamVjdC52YWx1ZXMoY29udGV4dClcbiAgICApIGFzIENvbnRleHRWYWx1ZVR5cGU7XG4gICAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XG4gIH07XG5cbiAgUHJvdmlkZXIuZGlzcGxheU5hbWUgPSByb290Q29tcG9uZW50TmFtZSArIFwiUHJvdmlkZXJcIjtcblxuICBmdW5jdGlvbiB1c2VDb250ZXh0KGNvbnN1bWVyTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgaWYgKGNvbnRleHQpIHJldHVybiBjb250ZXh0O1xuICAgIGlmIChkZWZhdWx0Q29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZGVmYXVsdENvbnRleHQ7XG4gICAgLy8gaWYgYSBkZWZhdWx0Q29udGV4dCB3YXNuJ3Qgc3BlY2lmaWVkLCBpdCdzIGEgcmVxdWlyZWQgY29udGV4dC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgXFxgJHtjb25zdW1lck5hbWV9XFxgIG11c3QgYmUgdXNlZCB3aXRoaW4gXFxgJHtyb290Q29tcG9uZW50TmFtZX1cXGBgXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBbUHJvdmlkZXIsIHVzZUNvbnRleHRdIGFzIGNvbnN0O1xufVxuIiwiLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgbnVtYmVyc1xuICovXG5cbi8qKlxuICogVXNpbmcgdGhlIGJpbmFyeSByZXByZXNlbnRhdGlvbiBvZiBuLCBhbiBJbnRlZ2VyLCByZXR1cm5zIHRoZSBib29sZWFuXG4gKiB2YWx1ZSBhdCBpbmRleCwgaS5cbiAqIEBwYXJhbSBuIGEgbnVtYmVyIGlzIGltcGxpY2l0eSBjb252ZXJ0ZXIgdG8gYSAzMmJpdCBpbnRlZ2VyLCBieSB0aGUgYml0d2lzZSBvcGVyYXRvcnNcbiAqIEBwYXJhbSBpIGlzIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgYml0IHBvc2l0aW9uIHRvIGJlIHRlc3RlZFxuICogQHJldHVybnMgdGhlIGJvb2xlYW4gdmFsdWUgb2YgdGhlIGJpdCBhdCBpbmRleCBpLlxuICovXG5leHBvcnQgY29uc3QgZ2V0Qm9vbEF0SW5kZXggPSAobjogbnVtYmVyLCBpOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuXHRyZXR1cm4gKG4gPj4gaSkgJiAxO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW5kdWN0aXZlYXV0b21hdGlvbl9wZXJzcGVjdGl2ZV9jbGllbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ29tcG9uZW50TWV0YSwgQ29tcG9uZW50UmVnaXN0cnkgfSBmcm9tICdAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuLy9pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbk1ldGEgfSBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uJztcbi8vaW1wb3J0IHsgVmFsdmUsIFZhbHZlTWV0YSB9IGZyb20gXCIuL2NvbXBvbmVudHMvVmFsdmVcIjtcbmltcG9ydCB7IFZhbHZlLCBWYWx2ZU1ldGEgfSBmcm9tICcuL2NvbXBvbmVudHMvVmFsdmUnO1xuXG5cbi8vIEV4cG9ydCBjb21wb25lbnRzIGZvciBleHRlcm5hbCByZWZlcmVuY2VcbmV4cG9ydCB7ICBWYWx2ZSB9O1xuXG4vLyBJbXBvcnQgY29tcG9uZW50IHN0eWxlc1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbi8vIEFycmF5IG9mIGNvbXBvbmVudCBtZXRhZGF0YVxuY29uc3QgY29tcG9uZW50czogQXJyYXk8Q29tcG9uZW50TWV0YT4gPSBbIG5ldyBWYWx2ZU1ldGEoKV07XG5cbi8vIFJlZ2lzdGVyIGVhY2ggY29tcG9uZW50IHdpdGggdGhlIFBlcnNwZWN0aXZlIENvbXBvbmVudFJlZ2lzdHJ5XG5jb21wb25lbnRzLmZvckVhY2goKGM6IENvbXBvbmVudE1ldGEpID0+IENvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyKGMpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==