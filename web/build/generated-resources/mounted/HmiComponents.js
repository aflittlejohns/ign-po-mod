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
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/immer/dist/cjs/immer.cjs.development.js":
/*!**************************************************************!*\
  !*** ./node_modules/immer/dist/cjs/immer.cjs.development.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/immer.ts
var immer_exports = {};
__export(immer_exports, {
  Immer: () => Immer2,
  applyPatches: () => applyPatches,
  castDraft: () => castDraft,
  castImmutable: () => castImmutable,
  createDraft: () => createDraft,
  current: () => current,
  enableMapSet: () => enableMapSet,
  enablePatches: () => enablePatches,
  finishDraft: () => finishDraft,
  freeze: () => freeze,
  immerable: () => DRAFTABLE,
  isDraft: () => isDraft,
  isDraftable: () => isDraftable,
  nothing: () => NOTHING,
  original: () => original,
  produce: () => produce,
  produceWithPatches: () => produceWithPatches,
  setAutoFreeze: () => setAutoFreeze,
  setUseStrictShallowCopy: () => setUseStrictShallowCopy
});
module.exports = __toCommonJS(immer_exports);

// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  true ? [
  // All error codes, starting by 0:
  function(plugin) {
    return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
  },
  function(thing) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
  },
  "This object has been frozen and should not be mutated",
  function(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(thing) {
    return `'current' expects a draft, got: ${thing}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(thing) {
    return `'original' expects a draft, got: ${thing}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : 0;
function die(error, ...args) {
  if (true) {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!isDraft(value))
    die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0 /* Object */) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */)
    thing.set(propOrOldValue, value);
  else if (t === 3 /* Set */) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
    state.revoke_();
  else
    state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if ( true && childValue === targetObject)
    die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if ( true && isNaN(parseInt(prop)))
    die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if ( true && prop !== "length" && isNaN(parseInt(prop)))
    die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (true) {
    errors.push(
      'Sets cannot have "replace" patches.',
      function(op) {
        return "Unsupported patch operation: " + op;
      },
      function(path) {
        return "Cannot apply patch, path doesn't resolve: " + path;
      },
      "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
    );
  }
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(
          state,
          basePath,
          patches,
          inversePatches
        );
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(
          state,
          basePath,
          patches,
          inversePatches
        );
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let { base_, assigned_ } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const { base_, copy_ } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE)
        return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? { op, path } : { op, path, value });
      inversePatches.push(
        op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
      );
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let { base_, copy_ } = state;
    let i = 0;
    base_.forEach((value) => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach((value) => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach((patch) => {
      const { path, op } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor"))
          die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype")
          die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object")
          die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj))
      return obj;
    if (Array.isArray(obj))
      return obj.map(deepClonePatchValue);
    if (isMap(obj))
      return new Map(
        Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
      );
    if (isSet(obj))
      return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj)
      cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE))
      cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else
      return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=immer.cjs.development.js.map

/***/ }),

/***/ "./node_modules/immer/dist/cjs/index.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/cjs/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (false) {} else {
  module.exports = __webpack_require__(/*! ./immer.cjs.development.js */ "./node_modules/immer/dist/cjs/immer.cjs.development.js")
}

/***/ }),

/***/ "./node_modules/use-immer/dist/use-immer.js":
/*!**************************************************!*\
  !*** ./node_modules/use-immer/dist/use-immer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var e=__webpack_require__(/*! immer */ "./node_modules/immer/dist/cjs/index.js"),r=__webpack_require__(/*! react */ "react");exports.useImmer=function(u){var n=r.useState(function(){return e.freeze("function"==typeof u?u():u,!0)}),t=n[1];return[n[0],r.useCallback(function(r){t("function"==typeof r?e.produce(r):e.freeze(r))},[])]},exports.useImmerReducer=function(u,n,t){var o=r.useMemo(function(){return e.produce(u)},[u]);return r.useReducer(o,n,t)};
//# sourceMappingURL=use-immer.js.map


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = 'ffffffff-ffff-ffff-ffff-ffffffffffff';


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/md5.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports["default"] = { randomUUID };


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/nil.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = '00000000-0000-0000-0000-000000000000';


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/parse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;


/***/ }),

/***/ "./node_modules/uuid/dist/cjs-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/cjs-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

/***/ "./src/api/hooks.ts":
/*!**************************!*\
  !*** ./src/api/hooks.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParameterReducer = ParameterReducer;
exports.paramItemsReducer = paramItemsReducer;
exports.useValveMpCommandReducer = useValveMpCommandReducer;
const use_immer_1 = __webpack_require__(/*! use-immer */ "./node_modules/use-immer/dist/use-immer.js");
const initialState_1 = __webpack_require__(/*! ./initialState */ "./src/api/initialState.ts");
/**
 *  Update a parameter item in a list of parameter items
 */
function ParameterReducer(draft, action) {
    switch (action.type) {
        case "UPDATE_VALUE":
            draft[action.index].input.value = action.value;
            return draft;
        default: // #TODO Add more reducer case statements
            return draft;
    }
}
function paramItemsReducer() {
    const [state, dispatch] = (0, use_immer_1.useImmerReducer)(ParameterReducer, initialState_1.parameterInitialState);
    function updateValue(index, value) {
        dispatch({ type: "UPDATE_VALUE", index: index, value: value });
    }
    // Add more dispatch functions here
    const useParameterReducer = {
        state,
        reducer: {
            updateValue,
        },
    };
    return useParameterReducer;
}
function valveMpReducer(draft, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    switch (action.type) {
        case "UPDATE_AUTO_MANUAL":
            if ((_a = draft.command) === null || _a === void 0 ? void 0 : _a.main) {
                if (action.mode === "auto") {
                    draft.command.main.autoManual = false;
                    console.log(`In Auto`);
                }
                else if (action.mode === "manual") {
                    draft.command.main.autoManual = true;
                    console.log(`In Manual`);
                    return draft;
                }
            }
            return draft;
        case "UPDATE_MAIN_MAN_ON":
            if ((_b = draft.command) === null || _b === void 0 ? void 0 : _b.main) {
                draft.command.main.activation = true;
            }
            return draft;
        case "UPDATE_MAIN_MAN_OFF":
            if ((_c = draft.command) === null || _c === void 0 ? void 0 : _c.main) {
                draft.command.main.activation = false;
            }
            return draft;
        case "UPDATE_USL_MAN_ON":
            if ((_d = draft.command) === null || _d === void 0 ? void 0 : _d.upperSeat) {
                draft.command.upperSeat.activation = true;
            }
            return draft;
        case "UPDATE_USL_MAN_OFF":
            if ((_e = draft.command) === null || _e === void 0 ? void 0 : _e.upperSeat) {
                draft.command.upperSeat.activation = false;
            }
            return draft;
        case "UPDATE_LSL_MAN_ON":
            if ((_f = draft.command) === null || _f === void 0 ? void 0 : _f.lowerSeat) {
                draft.command.lowerSeat.activation = true;
            }
            return draft;
        case "UPDATE_LSL_MAN_OFF":
            if ((_g = draft.command) === null || _g === void 0 ? void 0 : _g.lowerSeat) {
                draft.command.lowerSeat.activation = false;
            }
            return draft;
        case "UPDATE_MAIN_AVAIL":
            if ((_h = draft.command) === null || _h === void 0 ? void 0 : _h.available) {
                if (action.value)
                    draft.command.available.main = action.value;
            }
            return draft;
        default: // #TODO Add more reducer case statements
            return draft;
    }
}
function useValveMpCommandReducer() {
    const [state, dispatch] = (0, use_immer_1.useImmerReducer)(valveMpReducer, initialState_1.initialControlState);
    function updateMainAvailable(value) {
        dispatch({ type: "UPDATE_MAIN_AVAIL", value });
    }
    function updateUpperSeatAvailable(value) {
        dispatch({ type: "UPDATE_UPPERSEAT_AVAIL", value });
    }
    function updateLowerSeatAvailable(value) {
        dispatch({ type: "UPDATE_LOWERSEAT_AVAIL", value });
    }
    function updateAutoManSelection(mode) {
        dispatch({ type: "UPDATE_AUTO_MANUAL", mode });
    }
    function updateMainManualOn() {
        dispatch({ type: "UPDATE_MAIN_MAN_ON" });
    }
    function updateMainManualOff() {
        dispatch({ type: "UPDATE_MAIN_MAN_OFF" });
    }
    function updateUslManualOn() {
        dispatch({ type: "UPDATE_USL_MAN_ON" });
    }
    function updateUslManualOff() {
        dispatch({ type: "UPDATE_USL_MAN_OFF" });
    }
    function updateLslManualOn() {
        dispatch({ type: "UPDATE_LSL_MAN_ON" });
    }
    function updateLslManualOff() {
        dispatch({ type: "UPDATE_LSL_MAN_OFF" });
    }
    const useCommandsValveMpReducer = {
        state,
        reducer: {
            updateAutoManSelection,
            updateMainAvailable,
            updateUpperSeatAvailable,
            updateLowerSeatAvailable,
            updateMainManualOn,
            updateMainManualOff,
            updateUslManualOn,
            updateUslManualOff,
            updateLslManualOn,
            updateLslManualOff,
        },
    };
    return useCommandsValveMpReducer;
}


/***/ }),

/***/ "./src/api/initialState.ts":
/*!*********************************!*\
  !*** ./src/api/initialState.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * The purpose of initialStates.ts is to provide initial state for component props
 */
// initialState.ts
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initialControlState = exports.initialOffOnState = exports.initialAutoManState = exports.parameterInitialState = exports.pumpInitialProps = exports.pumpInitialStatus = exports.valveProps = exports.processObjectProps = exports.valveStatus = void 0;
exports.valveStatus = {
    alarm: false,
    actFB: false,
    deActFB: true,
    activatedConfig: 7,
    deactivatedConfig: 5,
    itemName: "VXXX",
    manual: false,
    masked: false,
    changing: false,
    locate: false,
};
exports.processObjectProps = {
    status: exports.valveStatus,
};
exports.valveProps = {
    processObject: exports.processObjectProps,
    handleClick: () => {
        console.log("Valve clicked");
    },
    labelPosition: "left",
    showLabel: false,
};
exports.pumpInitialStatus = {
    alarm: false,
    actFB: false,
    deActFB: false,
    configuration: 7,
    itemName: "itemName",
    manual: false,
    masked: false,
    changing: false,
    locate: false,
};
exports.pumpInitialProps = {
    status: exports.pumpInitialStatus,
};
exports.parameterInitialState = [
    {
        label: {
            text: "label",
            className: "",
            tooltipText: "",
            tooltipPosition: "",
            tooltipClassName: "",
            tooltipId: "",
        },
        input: {
            type: "text",
            inputmode: "numeric",
            placeholder: "Enter a number",
            editable: true,
            pattern: "^[0-9]*[.,]?[0-9]*$",
            min: 0,
            max: 100,
            decimalPlaces: 2,
            eu: "\u00B5C",
            value: 0,
        },
    },
];
exports.initialAutoManState = {
    auto: true,
    manual: false,
};
exports.initialOffOnState = {
    off: false,
    on: false,
};
exports.initialControlState = {
    command: {
        available: {
            main: false,
            upperSeat: false,
            lowerSeat: false
        },
        main: {
            label: "Main",
            autoManual: false,
            activation: false,
        },
        upperSeat: {
            label: "Upper Seat",
            activation: false,
        },
        lowerSeat: {
            label: "Lower Seat",
            activation: false,
        }
    }
};


/***/ }),

/***/ "./src/api/types.ts":
/*!**************************!*\
  !*** ./src/api/types.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hxItemNameEnum = exports.pumpItemList = exports.valveMpItemNameEnum = exports.ValveClassNameEnum = void 0;
exports.ValveClassNameEnum = {
    AlarmState: "AlarmState",
    Activated: "Activated",
    Deactivated: "Deactivated",
    Manual: "Manual",
    Masked: "Masked",
    Changing: "Changing",
    NoAlarmMask: "NoAlarmMask",
    Locate: "Locate",
};
exports.valveMpItemNameEnum = {
    V1b1: "v1b1", // index 0
    V1b2: "v1b2", // index 1
    V1b3: "v1b3", // index 2
    V1b4: "v1b4", // index 3
    V2b1: "v2b1", // index 4
    V2b2: "v2b2", // index 5
    V2b3: "v2b3", // index 6
    V2b4: "v2b4", // index 7
    V2: "v2", // index 8
    v1: "v1", // index 9
    usl: "usl", // index 10 upper-seat-lift
    lsl: "lsl", // index 11 lower-seat-lift
    locate: "locate", // index 12 locate animation
};
const ValveStateEnum = {
    alarm: "alarm",
    manual: "manual",
    masked: "masked",
};
const itemIdPositions = [
    "right",
    "left",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
];
const pumpTypes = [
    "centrifugal",
    "diaphragm",
    "gear",
    "liquid-ring",
    "positive-displacement",
    "positive-screw",
    "progressive-cavity",
];
exports.pumpItemList = [
    "symbol-1",
    "symbol-2",
    "locate",
];
exports.hxItemNameEnum = {
    b1: "base-1", // index 0
    b2: "base-2", // index 1
    b3: "base-3", // index 2
    b4: "base-4", // index 3
    V2b1: "v2b1", // index 4
    V2b2: "v2b2", // index 5
    V2b3: "v2b3", // index 6
    V2b4: "v2b4", // index 7
    V2: "v2", // index 8
    v1: "v1", // index 9
    usl: "usl", // index 10 upper-seat-lift
    lsl: "lsl", // index 11 lower-seat-lift
    locate: "locate", // index 12 locate animation
};


/***/ }),

/***/ "./src/api/utils.ts":
/*!**************************!*\
  !*** ./src/api/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPumpStatusClassNames = exports.getPumpItemClassName = exports.pumpItemNames = exports.getItemIdPositionClassName = exports.valveMpItemNames = exports.getClassNameWithStatus = exports.getValveMpItemClassName = void 0;
const numberUtil_1 = __webpack_require__(/*! ../utils/numberUtil */ "./src/utils/numberUtil.ts");
const types_1 = __webpack_require__(/*! ../api/types */ "./src/api/types.ts");
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
const getValveMpItemClassName = (index, valveStatus) => {
    var _a, _b;
    let className = "";
    // Handle the fact that ActivatedConfig and DeactivatedConfig are optional and maybe undefined
    const ActivatedConfigValue = (_a = valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.activatedConfig) !== null && _a !== void 0 ? _a : 0;
    const DeactivatedConfigValue = (_b = valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.deactivatedConfig) !== null && _b !== void 0 ? _b : 0;
    // console.log(valveStatus);
    if (index < 8) {
        if (((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, index) && (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.actFB)) ||
            ((0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, index) && (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.deActFB))) {
            className = "show item";
        }
        else {
            className = "hide item";
        }
    }
    else if (index === 9) {
        className = "show";
    }
    else if (index === 8) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, index) ||
            (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, index)) {
            className = "show";
        }
        else {
            className = "hide";
        }
    }
    else if (index === 10) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 10) ||
            (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 10)) {
            className = "show item";
            if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.usl) {
                className = className.replace("activated", "") + " activated";
            }
            else {
                className = className.replace("deactivated", "") + " deactivated";
            }
        }
        else {
            className = "hide item";
        }
    }
    else if (index === 11) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 11) ||
            (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 11)) {
            className = "show item";
            if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.lsl) {
                className = className.replace("activated", "") + " activated";
            }
            else {
                className = className.replace("deactivated", "") + " deactivated";
            }
        }
        else {
            className = "hide item";
        }
    }
    else if (index === 12) {
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.locate) {
            className = className.replace("small", "") + " small";
            if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 8) ||
                (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 8)) {
                className = className.replace("large", "") + " large";
            }
        }
        else {
            className = className.replace("hide item", "") + " hide item";
        }
    }
    // Additions to the className
    if (className.includes("show") && !className.includes("item")) {
        // console.log("index", index, className);
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.alarm) {
            className = className.replace("alarm", "") + " alarm";
        }
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.changing) {
            className = className.replace("changing", "") + " changing";
        }
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.manual) {
            className = className.replace("manual", "") + " manual";
        }
        if ((valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.masked) && !valveStatus.alarm) {
            className = className.replace("no-alarm-mask", "") + " no-alarm-mask";
        }
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.masked) {
            className = className.replace("masked", "") + " masked";
        }
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.actFB) {
            className = className.replace("activated", "") + " activated";
        }
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.deActFB) {
            className = className.replace("deactivated", "") + " deactivated";
        }
    }
    // console.log("index", index, className);
    return className; // default return value if no other condition is met
};
exports.getValveMpItemClassName = getValveMpItemClassName;
const getClassNameWithStatus = (index, status, elementVariants, baseClassName, baseElements, baseConfig, dynamicItems, dynamicConfig) => {
    var _a;
    let className = "";
    let additionalClass = "";
    if (elementVariants && ((_a = elementVariants[index]) === null || _a === void 0 ? void 0 : _a.statusKey) && status) {
        const statusKeyObj = elementVariants[index].statusKey;
        // Get keys from statusKeyObj that are also in status
        const matchingKeys = Object.keys(statusKeyObj).filter((key) => key in status);
        for (const key of matchingKeys) {
            // Now you can safely access both statusKeyObj[key] and status[key]
            const keyStatusValue = statusKeyObj[key];
            const statusValue = status[key];
            if (statusValue) {
                additionalClass += ` ${(keyStatusValue === null || keyStatusValue === void 0 ? void 0 : keyStatusValue.trueString) ? keyStatusValue.trueString : ""}`;
            }
            else {
                additionalClass += ` ${(keyStatusValue === null || keyStatusValue === void 0 ? void 0 : keyStatusValue.falseString) ? keyStatusValue.falseString : ""}`;
            }
        }
    }
    // Base Elements
    if (baseElements && baseConfig) {
        if (index < baseElements) {
            let itemString = index > 0 ? "item" : `${baseClassName}`;
            if ((0, numberUtil_1.getBoolAtIndex)(baseConfig, index)) {
                className = `show ${itemString} ${additionalClass}`;
            }
            else {
                className = `hide ${itemString}`;
            }
        }
        // Dynamic Items
        if (dynamicItems && dynamicConfig) {
            let dynamIndex = index - baseElements;
            if (index >= baseElements && index < baseElements + dynamicItems) {
                if ((0, numberUtil_1.getBoolAtIndex)(dynamicConfig, dynamIndex)) {
                    className = `show item`;
                }
                else {
                    className = `hide item`;
                }
            }
        }
    }
    return className;
};
exports.getClassNameWithStatus = getClassNameWithStatus;
/**
 * @returns Array of itemName(s) for each visual element of a valve component
 */
// export const itemNames = Object.entries(ItemNameEnum).map((key, index) => {
// 	return {
// 		key: uuidv4(),
// 		name: key,
// 		value: key[1],
// 		index: index,
// 	};
// });
exports.valveMpItemNames = Object.entries(types_1.valveMpItemNameEnum).map((key, index) => {
    // console.log(`In build ItemNames name ${key} index ${index}`);
    return {
        key: (0, uuid_1.v4)(),
        name: key,
        value: key[1],
        index: index,
    };
});
const getItemIdPositionClassName = (className, itemIdPosition) => {
    // Check className includes 'itemId popover', if not return className and warn
    if (!className.includes("itemId popover")) {
        console.warn("Function getItemIdPositionClassName called when 'itemId popover' not in given className");
        return className;
    }
    // Over write given className
    className = "itemId popover";
    switch (itemIdPosition) {
        case "left":
            className = className.replace("position-left", "") + " position-left";
            break;
        case "right":
            className = className.replace("position-right", "") + " position-right";
            break;
        case "top-left":
            className =
                className.replace("position-top-left", "") + " position-top-left";
            break;
        case "top-right":
            className =
                className.replace("position-top-right", "") + " position-top-right";
            break;
        case "bottom-left":
            className =
                className.replace("position-bottom-left", "") + " position-bottom-left";
            break;
        case "bottom-right":
            className =
                className.replace("position-bottom-right", "") +
                    " position-bottom-right";
            break;
        default:
            break;
    }
    return className;
};
exports.getItemIdPositionClassName = getItemIdPositionClassName;
exports.pumpItemNames = types_1.pumpItemList.map((key, index) => {
    // console.log(`In build ItemNames name ${key} index ${index}`);
    return {
        key: (0, uuid_1.v4)(),
        name: key,
        index: index,
    };
});
const getPumpConfiguration = (pumpType) => {
    switch (pumpType) {
        case "centrifugal":
            return 1;
        case "diaphragm":
            return 1;
        case "positive-displacement":
            return 1;
        case "progressive-cavity":
            return 1;
        case "gear":
            return 3;
        case "liquid-ring":
            return 3;
        case "positive-screw":
            return 3;
        default:
            throw Error(`In getPumpConfiguration() pump type: ${pumpType} not found`);
    }
};
const getPumpItemClassName = (index, pumpType, status) => {
    const configuration = getPumpConfiguration(pumpType);
    let className = "";
    // Handle the fact that ActivatedConfig and DeactivatedConfig are optional and maybe undefined
    if (index < 2) {
        if ((0, numberUtil_1.getBoolAtIndex)(configuration, index)) {
            className = `show item ${pumpType}`;
        }
        else {
            className = "hide item";
        }
    }
    return className;
};
exports.getPumpItemClassName = getPumpItemClassName;
const getPumpStatusClassNames = (className, status) => {
    // Additions to the className
    // console.log(`status: ${JSON.stringify(status,null, 2)}`);
    if (className.includes("show") && !className.includes("item")) {
        if (status === null || status === void 0 ? void 0 : status.alarm) {
            className = className.replace("alarm", "") + " alarm";
        }
        if (status === null || status === void 0 ? void 0 : status.changing) {
            className = className.replace("changing", "") + " changing";
        }
        if (status === null || status === void 0 ? void 0 : status.manual) {
            className = className.replace("manual", "") + " manual";
        }
        if ((status === null || status === void 0 ? void 0 : status.masked) && !status.alarm) {
            className = className.replace("no-alarm-mask", "") + " no-alarm-mask";
        }
        if (status === null || status === void 0 ? void 0 : status.masked) {
            className = className.replace("masked", "") + " masked";
        }
        if (status === null || status === void 0 ? void 0 : status.actFB) {
            className = className.replace("activated", "") + " activated";
        }
        if (status === null || status === void 0 ? void 0 : status.deActFB) {
            className = className.replace("deactivated", "") + " deactivated";
        }
    }
    return className;
};
exports.getPumpStatusClassNames = getPumpStatusClassNames;


/***/ }),

/***/ "./src/ar-types/processObjects/heatExchangers/hx-types.ts":
/*!****************************************************************!*\
  !*** ./src/ar-types/processObjects/heatExchangers/hx-types.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * HMI Component - Heat Exchanger types defs
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HxItemList = exports.HxModes = exports.HX_COMPONENT_TYPE = void 0;
exports.HX_COMPONENT_TYPE = "hmi.process_objects.HeatExchanger";
const HeatExchangerTypes = [
    "plate",
    "tubular",
];
var HxModes;
(function (HxModes) {
    HxModes["alarm"] = "alarm";
    HxModes["heating"] = "heating";
    HxModes["cooling"] = "cooling";
})(HxModes || (exports.HxModes = HxModes = {}));
;
exports.HxItemList = [
    "item-1",
    "item-2",
    "item-3",
    "item-4",
    "item-5",
    "item-6",
    "item-7",
    "base-1",
    "locate",
];


/***/ }),

/***/ "./src/ar-utils/processObjects/heatExchangers/hx-utils.ts":
/*!****************************************************************!*\
  !*** ./src/ar-utils/processObjects/heatExchangers/hx-utils.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildComponentElements = exports.getHxModeClassNames = exports.getHxItemClassName = exports.hxItemNames = void 0;
/**
 * HMI Component - Heat Exchanger - Plate Utility functions
 */
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/cjs-browser/index.js");
const hx_types_1 = __webpack_require__(/*! ../../../ar-types/processObjects/heatExchangers/hx-types */ "./src/ar-types/processObjects/heatExchangers/hx-types.ts");
const numberUtil_1 = __webpack_require__(/*! ../../../utils/numberUtil */ "./src/utils/numberUtil.ts");
exports.hxItemNames = hx_types_1.HxItemList.map((key, index) => {
    // console.log(`In build ItemNames name ${key} index ${index}`);
    return {
        key: (0, uuid_1.v4)(),
        name: key,
        index: index,
    };
});
const getHxConfiguration = (type) => {
    switch (type) {
        case "plate":
            return 1;
        case "tubelar":
            return 1;
        default:
            throw Error(`In getPumpConfiguration() pump type: ${type} not found`);
    }
};
const getHxItemClassName = (index, type, mode) => {
    const configuration = getHxConfiguration(type);
    let className = "";
    // Handle the fact that ActivatedConfig and DeactivatedConfig are optional and maybe undefined
    if (index < 2) {
        if ((0, numberUtil_1.getBoolAtIndex)(configuration, index)) {
            className = `show item ${type}`;
        }
        else {
            className = "hide item";
        }
    }
    return className;
};
exports.getHxItemClassName = getHxItemClassName;
const getHxModeClassNames = (className, mode) => {
    // Additions to the className
    if (className.includes("show") && !className.includes("item")) {
        switch (mode) {
            case "alarm":
                className = className.replace("AlarmState", "") + " AlarmState";
                break;
            case "heating":
                className = className.replace("heating", "") + " heating";
                break;
            case "cooling":
                className = className.replace("cooling", "") + " cooling";
                break;
            default:
                break;
        }
    }
    return className;
};
exports.getHxModeClassNames = getHxModeClassNames;
const buildComponentElements = (baseElements, dynamicElements) => {
    let value = [];
    for (let i = 0; i < baseElements + dynamicElements; i++) {
        let item = {
            key: (0, uuid_1.v4)(),
            name: i < baseElements ? `base-${i + 1}` : `dynamic-${i + (1 - dynamicElements)}`,
            index: i
        };
        value.push(item);
    }
    let item = {
        key: (0, uuid_1.v4)(),
        name: "locate",
        index: baseElements + dynamicElements
    };
    // locate always last element
    value.push(item);
    return value;
};
exports.buildComponentElements = buildComponentElements;


/***/ }),

/***/ "./src/components/CommandValveMp.tsx":
/*!*******************************************!*\
  !*** ./src/components/CommandValveMp.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommandValveMpMeta = exports.CommandValveMp = exports.COMPONENT_TYPE = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const React = __webpack_require__(/*! react */ "react");
// import { initialControlState } from "../api/initialState";
const react_1 = __webpack_require__(/*! react */ "react");
const hooks_1 = __webpack_require__(/*! ../api/hooks */ "./src/api/hooks.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
exports.COMPONENT_TYPE = constants_1.COMMAND_VALVE_MP_COMPONENT_TYPE;
// const areEqual = (
// 	prevProps: ComponentProps<CommandValveMpProps>,
// 	nextProps: ComponentProps<CommandValveMpProps>
// ) => {
// 	// return true if props are equal, false if re-render is needed
// 	return prevProps.props === nextProps.props;
// };
/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.

 */
const CommandValveMp = (props) => {
    var _a;
    const { state, reducer } = (0, hooks_1.useValveMpCommandReducer)();
    const { emit } = props;
    (0, react_1.useEffect)(() => {
        // Subscribe to changes on the "command" property
        const unsubscribe = props.store.props.subscribe((tree) => {
            var _a, _b, _c, _d;
            // This function is called whenever "command" changes
            const command = tree.read("command");
            const { main, upperSeat, lowerSeat, available } = command;
            // You can update local state or perform other actions here
            // Update available state if needed
            if (((_a = state.command) === null || _a === void 0 ? void 0 : _a.available) && available) {
                if (available.main !== state.command.available.main) {
                    reducer.updateMainAvailable(available.main ? true : false);
                }
                if (available.upperSeat !== state.command.available.upperSeat) {
                    reducer.updateUpperSeatAvailable(available.upperSeat ? true : false);
                }
                if (available.lowerSeat !== state.command.available.lowerSeat) {
                    reducer.updateLowerSeatAvailable(available.lowerSeat ? true : false);
                }
            }
            if (((_b = state.command) === null || _b === void 0 ? void 0 : _b.main) && main) {
                if (main.autoManual !== state.command.main.autoManual) {
                    reducer.updateAutoManSelection(!main.autoManual ? "auto" : "manual");
                }
                if (main.activation !== state.command.main.activation) {
                    if (!main.activation) {
                        reducer.updateMainManualOff();
                    }
                    else if (main.activation) {
                        reducer.updateMainManualOn();
                    }
                }
            }
            // Update lowerSeat state if needed
            if (((_c = state.command) === null || _c === void 0 ? void 0 : _c.lowerSeat) && lowerSeat) {
                if (lowerSeat.activation !== state.command.lowerSeat.activation) {
                    if (!lowerSeat.activation) {
                        reducer.updateLslManualOff();
                    }
                    else if (lowerSeat.activation) {
                        reducer.updateLslManualOn();
                    }
                }
            }
            // Update upperSeat state if needed
            if (((_d = state.command) === null || _d === void 0 ? void 0 : _d.upperSeat) && upperSeat) {
                if (upperSeat.activation !== state.command.upperSeat.activation) {
                    if (!upperSeat.activation) {
                        reducer.updateUslManualOff();
                    }
                    else if (upperSeat.activation) {
                        reducer.updateUslManualOn();
                    }
                }
            }
        });
        // Cleanup subscription on unmount
        return () => {
            if (typeof unsubscribe === "function") {
                unsubscribe();
            }
        };
    }, [props.store.props]);
    const { main, upperSeat, lowerSeat, available } = (_a = state.command) !== null && _a !== void 0 ? _a : {};
    // const isInterlocked = (interlocks: boolean[]): boolean => {
    // 	return interlocks.includes(true, 0);
    // };
    console.log(`Command Props: ${JSON.stringify(state.command, null, 2)}`);
    console.log(`Main Avail: ${JSON.stringify(available === null || available === void 0 ? void 0 : available.main, null, 2)}`);
    console.log(`Command Props: ${JSON.stringify(available === null || available === void 0 ? void 0 : available.upperSeat, null, 2)}`);
    console.log(`Command Props: ${JSON.stringify(available === null || available === void 0 ? void 0 : available.lowerSeat, null, 2)}`);
    const handleMainAutoManualSelection = (mode) => {
        var _a, _b;
        reducer.updateAutoManSelection(mode);
        if (mode === "auto") {
            (_a = props.store.props) === null || _a === void 0 ? void 0 : _a.write("command.main.autoManual", false); // false = auto
        }
        else if (mode === "manual") {
            (_b = props.store.props) === null || _b === void 0 ? void 0 : _b.write("command.main.autoManual", true); // true = manual
        }
    };
    const handleMainManualOn = () => {
        var _a;
        reducer.updateMainManualOn();
        (_a = props.store.props) === null || _a === void 0 ? void 0 : _a.write("command.main.activation", true);
    };
    const handleMainManualOff = () => {
        var _a;
        reducer.updateMainManualOff();
        (_a = props.store.props) === null || _a === void 0 ? void 0 : _a.write("command.main.activation", false);
    };
    const handleUslManualOn = () => {
        var _a;
        reducer.updateUslManualOn();
        (_a = props.store.props) === null || _a === void 0 ? void 0 : _a.write("command.upperSeat.activation", true);
    };
    const handleUslManualOff = () => {
        var _a;
        reducer.updateUslManualOff();
        (_a = props.store.props) === null || _a === void 0 ? void 0 : _a.write("command.upperSeat.activation", false);
    };
    const handleLslManualOn = () => {
        var _a;
        reducer.updateLslManualOn();
        (_a = props.store.props) === null || _a === void 0 ? void 0 : _a.write("command.lowerSeat.activation", true);
    };
    const handleLslManualOff = () => {
        var _a;
        reducer.updateLslManualOff();
        (_a = props.store.props) === null || _a === void 0 ? void 0 : _a.write("command.lowerSeat.activation", false);
    };
    const componentClassName = "command-valve-mp";
    return (React.createElement("div", Object.assign({}, emit({
        classes: [`${constants_1.IA_SYMBOL_COMPONENT_COLUMN}`],
    }), { "data-component": exports.COMPONENT_TYPE }),
        React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_ROW}` },
            React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_WRAPPER}` },
                React.createElement("div", { className: `${constants_1.HMI_COMPONENT_CLASS} ${componentClassName}` },
                    React.createElement("label", { className: "main-label" }, main === null || main === void 0 ? void 0 : main.label),
                    React.createElement("div", { role: "group", className: "button-group outlined main-auto-manual" },
                        React.createElement("button", { className: `button outlined ${!(main === null || main === void 0 ? void 0 : main.autoManual) ? "selected" : ""}`, disabled: !(available === null || available === void 0 ? void 0 : available.main), onClick: () => handleMainAutoManualSelection("auto") }, "Auto "),
                        React.createElement("button", { className: `button outlined ${(main === null || main === void 0 ? void 0 : main.autoManual) ? "selected" : ""}`, disabled: !(available === null || available === void 0 ? void 0 : available.main), onClick: () => handleMainAutoManualSelection("manual") }, "Manual")),
                    React.createElement("div", { role: "group", className: "button-group outlined main-on-off" },
                        React.createElement("button", { className: `button outlined ${(main === null || main === void 0 ? void 0 : main.activation) ? "selected" : ""}`, disabled: !(available === null || available === void 0 ? void 0 : available.main) || !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleMainManualOn }, "On "),
                        React.createElement("button", { className: `button outlined ${!(main === null || main === void 0 ? void 0 : main.activation) ? "selected" : ""}`, disabled: !(available === null || available === void 0 ? void 0 : available.main) || !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleMainManualOff }, "Off")),
                    React.createElement("label", { className: "upper-seat-label" }, upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.label),
                    React.createElement("div", { role: "group", className: "button-group outlined upper-seat-on-off" },
                        React.createElement("button", { className: `button outlined ${(upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.activation) ? "selected" : ""}`, disabled: !(available === null || available === void 0 ? void 0 : available.upperSeat) ||
                                !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleUslManualOn }, "On "),
                        React.createElement("button", { className: `button outlined ${!(upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.activation) ? "selected" : ""}`, disabled: !(available === null || available === void 0 ? void 0 : available.upperSeat) ||
                                !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleUslManualOff }, "Off")),
                    React.createElement("label", { className: "lower-seat-label" }, lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.label),
                    React.createElement("div", { role: "group", className: "button-group outlined lower-seat-on-off" },
                        React.createElement("button", { className: `button outlined ${(lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.activation) ? "selected" : ""}`, disabled: !(available === null || available === void 0 ? void 0 : available.lowerSeat) ||
                                !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleLslManualOn }, "On "),
                        React.createElement("button", { className: `button outlined ${!(lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.activation) ? "selected" : ""}`, disabled: !(available === null || available === void 0 ? void 0 : available.lowerSeat) ||
                                !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleLslManualOff, value: "true" }, "Off")))))));
};
exports.CommandValveMp = CommandValveMp;
// This is the actual thing that gets registered with the component registry.
class CommandValveMpMeta {
    getComponentType() {
        return exports.COMPONENT_TYPE;
    }
    /**
     * @returns The React component class.
     */
    getViewComponent() {
        return exports.CommandValveMp;
    }
    getDefaultSize() {
        return {
            width: 280,
            height: 140,
        };
    }
    // Invoked when an update to the PropertyTree has occurred,
    // effectively mapping the valveStatus of the tree to component props.
    getPropsReducer(tree) {
        return {
            command: {
                available: {
                    main: tree.readBoolean("command.available.main"),
                    upperSeat: tree.readBoolean("command.available.upperSeat"),
                    lowerSeat: tree.readBoolean("command.available.lowerSeat"),
                },
                main: {
                    label: tree.readString("commands.main.label", ""),
                    autoManual: tree.readBoolean("command.main.autoManual", false),
                    activation: tree.readBoolean("command.main.activation", false),
                },
                upperSeat: {
                    label: tree.readString("commands.upperSeat.label", ""),
                    activation: tree.readBoolean("command.upperSeat.activation", false),
                },
                lowerSeat: {
                    label: tree.readString("commands.lowerSeat.label", ""),
                    activation: tree.readBoolean("command.lowerSeat.activation", false),
                },
            },
        };
    }
}
exports.CommandValveMpMeta = CommandValveMpMeta;
/**
 *
getPropsReducer(tree: PropertyTree): MyPropType {
    return {
        // will give the property tree as a plain js object, instead of an instance of PropertyTree
        // this would let you read the value of the tree via `this.props.props.json`.  Same result occurs if
        // calling tree.read(), without passing a path parameter.
       json: tree.toPlainObject()


       // If you had to write to the tree's 'data' node, passing in a callback function instead of the actual
       // PropertyTree will simplify unit testability of your component outside of perspective's environment.
       // You would call this via this.props.props.writeData(someNewData)
       writeData: (newJson) -> tree.write("data", newJson)
    }
}
 */


/***/ }),

/***/ "./src/components/HeatExchanger.tsx":
/*!******************************************!*\
  !*** ./src/components/HeatExchanger.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeatExchangerMeta = exports.HeatExchanger = exports.COMPONENT_TYPE = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const React = __webpack_require__(/*! react */ "react");
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
const HeatExchangerCompound_1 = __webpack_require__(/*! ./process-objects/heat-exchangers/HeatExchangerCompound */ "./src/components/process-objects/heat-exchangers/HeatExchangerCompound.tsx");
exports.COMPONENT_TYPE = "hmi.process_objects.HeatExchanger";
/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
class HeatExchanger extends perspective_client_1.Component {
    constructor(props) {
        super(props);
        this.type = this.props.props.type;
        this.itemName = this.props.props.itemName;
        this.mode = this.props.props.mode;
        this.locate = this.props.props.locate;
        this.showLabel = this.props.props.showLabel || false;
        this.labelPosition = this.props.props.labelPosition || "left";
        /**
         * Handler for the component's action event.
         */
        this.onActionPerformed = () => {
            // If the designer is in "design" mode, don't do anything
            if (!this.props.eventsEnabled) {
                console.log("Valve is disabled in the design-scope");
                return;
            }
            console.log("Valve clicked!");
            this.props.componentEvents.fireComponentEvent("onActionPerformed", {});
        };
        this.valveRef = React.createRef();
    }
    // This is a lifecycle method that is called when the component is first mounted to the DOM.
    componentDidMount() {
        // No need to initialize valveRef here
    }
    render() {
        return (
        // <div>This is Valve</div>
        React.createElement(HeatExchangerCompound_1.HeatExchangerCompound.Root, { componentProps: this.props, itemProps: this.props.props, onActionPerformed: this.onActionPerformed },
            React.createElement(HeatExchangerCompound_1.HeatExchangerCompound.plate, null),
            React.createElement(HeatExchangerCompound_1.HeatExchangerCompound.popover, { anchorEl: this.valveRef.current })));
    }
}
exports.HeatExchanger = HeatExchanger;
// This is the actual thing that gets registered with the component registry.
class HeatExchangerMeta {
    getComponentType() {
        return exports.COMPONENT_TYPE;
    }
    /**
     * @returns The React component class.
     */
    getViewComponent() {
        return HeatExchanger;
    }
    getDefaultSize() {
        return {
            width: 40,
            height: 70,
        };
    }
    // Invoked when an update to the PropertyTree has occurred,
    // effectively mapping the valveStatus of the tree to component props.
    getPropsReducer(tree) {
        return {
            type: tree.readString("type", "plate"),
            mode: tree.readString("mode", "heating"),
            itemName: tree.readString("itemName", ""),
            locate: tree.readBoolean("locate", false),
            showLabel: tree.readBoolean("showLabel", false),
            labelPosition: tree.readString("labelPosition", "top-left"),
        };
    }
}
exports.HeatExchangerMeta = HeatExchangerMeta;


/***/ }),

/***/ "./src/components/ParameterList.tsx":
/*!******************************************!*\
  !*** ./src/components/ParameterList.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParameterListComponentMeta = exports.ParameterListComponent = exports.COMPONENT_TYPE = void 0;
const React = __webpack_require__(/*! react */ "react");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
const initParameters = [
    {
        label: {
            text: "text",
        },
        input: {
            value: null,
            placeholder: "Enter a Number",
        },
    },
];
exports.COMPONENT_TYPE = constants_1.PARAMETER_LIST_COMPONENT_TYPE;
const ParameterListComponent = (props) => {
    const transformedProps = React.useMemo(() => {
        const { parameters } = props.props || initParameters;
        return parameters;
    }, [props.props.parameters]);
    const { emit } = props;
    const componentClassName = "parameter-list";
    return (React.createElement("div", Object.assign({}, emit({
        classes: [`${constants_1.IA_SYMBOL_COMPONENT_COLUMN}`],
    }), { "data-component": exports.COMPONENT_TYPE }),
        React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_ROW}` },
            React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_WRAPPER}` },
                React.createElement("div", { className: `${constants_1.HMI_COMPONENT_CLASS} ${componentClassName}` }, transformedProps.map((param, index) => {
                    const { label, input } = param;
                    return (React.createElement("label", { key: `${label.text}-parameter${index}`, className: "field small" },
                        React.createElement("span", { className: "label" }, label.text),
                        React.createElement("span", { className: "eu" }, input.eu),
                        React.createElement("input", { type: "text", id: `${label.text}-parameter${index}`, inputMode: input.inputmode, pattern: input.pattern || "[0-9]*", placeholder: input.placeholder, disabled: !input.editable, min: input.min, max: input.max, value: input.value, onChange: (e) => {
                                props.store.props.write(`parameters[${index}].input.value`, e.currentTarget.value);
                                // updateValue(parseFloat(parseFloat(e.target.value).toFixed(2)), index);
                            } })));
                }))))));
};
exports.ParameterListComponent = ParameterListComponent;
class ParameterListComponentMeta {
    getComponentType() {
        return exports.COMPONENT_TYPE;
    }
    getDefaultSize() {
        return {
            width: 240,
            height: 240,
        };
    }
    getPropsReducer(tree) {
        return {
            parameters: tree.read("parameters", [
                {
                    label: {
                        text: "label",
                        className: "",
                        tooltipText: "",
                        tooltipPosition: "",
                        tooltipClassName: "",
                        tooltipId: "",
                    },
                    input: {
                        type: "text",
                        inputmode: "numeric",
                        placeholder: "Enter a number",
                        editable: true,
                        pattern: "^[0-9]*[.,]?[0-9]*$",
                        min: 0,
                        max: 100,
                        decimalPlaces: 2,
                        eu: "\u00B5C",
                        value: 0,
                    },
                },
            ]),
        };
    }
    getViewComponent() {
        return exports.ParameterListComponent;
    }
}
exports.ParameterListComponentMeta = ParameterListComponentMeta;


/***/ }),

/***/ "./src/components/Pump.tsx":
/*!*********************************!*\
  !*** ./src/components/Pump.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PumpMeta = exports.Pump = exports.COMPONENT_TYPE = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const React = __webpack_require__(/*! react */ "react");
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
const PumpCompound_1 = __webpack_require__(/*! ../components/process-objects/pumps/PumpCompound */ "./src/components/process-objects/pumps/PumpCompound.tsx");
const initialState_1 = __webpack_require__(/*! ../api/initialState */ "./src/api/initialState.ts");
exports.COMPONENT_TYPE = "hmi.process_objects.Pump";
/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
class Pump extends perspective_client_1.Component {
    constructor(props) {
        var _a;
        super(props);
        this.processObject = ((_a = this.props.props.processObject) === null || _a === void 0 ? void 0 : _a.status) || initialState_1.pumpInitialStatus;
        this.status = this.processObject;
        this.showLabel = this.props.props.showLabel || false;
        this.labelPosition = this.props.props.labelPosition || "left";
        /**
         * Handler for the component's action event.
         */
        this.onActionPerformed = () => {
            // If the designer is in "design" mode, don't do anything
            if (!this.props.eventsEnabled) {
                console.log("Valve is disabled in the design-scope");
                return;
            }
            console.log("Valve clicked!");
            this.props.componentEvents.fireComponentEvent("onActionPerformed", {});
        };
        this.valveRef = React.createRef();
    }
    // This is a lifecycle method that is called when the component is first mounted to the DOM.
    componentDidMount() {
        // No need to initialize valveRef here
    }
    render() {
        return (
        // <div>This is Valve</div>
        React.createElement(PumpCompound_1.PumpCompound.Root, { componentProps: this.props, pumpProps: this.props.props, onActionPerformed: this.onActionPerformed },
            React.createElement(PumpCompound_1.PumpCompound.pump, null),
            React.createElement(PumpCompound_1.PumpCompound.popover, { anchorEl: this.valveRef.current })));
    }
}
exports.Pump = Pump;
// This is the actual thing that gets registered with the component registry.
class PumpMeta {
    getComponentType() {
        return exports.COMPONENT_TYPE;
    }
    /**
     * @returns The React component class.
     */
    getViewComponent() {
        return Pump;
    }
    getDefaultSize() {
        return {
            width: 36,
            height: 36,
        };
    }
    // Invoked when an update to the PropertyTree has occurred,
    // effectively mapping the valveStatus of the tree to component props.
    getPropsReducer(tree) {
        return {
            pumpType: tree.readString("pumpType", "centrifugal"),
            processObject: {
                status: {
                    alarm: tree.readBoolean("processObject.status.alarm", false),
                    actFB: tree.readBoolean("processObject.status.actFB", false),
                    deActFB: tree.readBoolean("processObject.status.deActFB", false),
                    itemName: tree.readString("processObject.status.itemName", ""),
                    manual: tree.readBoolean("processObject.status.manual", false),
                    masked: tree.readBoolean("processObject.status.masked", false),
                    changing: tree.readBoolean("processObject.status.changing", false),
                    locate: tree.readBoolean("processObject.status.locate", false),
                },
            },
            showLabel: tree.readBoolean("showLabel", false),
            labelPosition: tree.readString("labelPosition", "top-left"),
        };
    }
}
exports.PumpMeta = PumpMeta;


/***/ }),

/***/ "./src/components/StatusValveMp.tsx":
/*!******************************************!*\
  !*** ./src/components/StatusValveMp.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusValveMpMeta = exports.StatusValveMp = exports.COMPONENT_TYPE = void 0;
const React = __webpack_require__(/*! react */ "react");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
exports.COMPONENT_TYPE = constants_1.STATUS_COMPONENT_TYPE;
const StatusValveMp = (props) => {
    const { emit } = props;
    const { statusItems } = props.props;
    const componentClassName = "status";
    return (React.createElement("div", Object.assign({}, emit({
        classes: [`${constants_1.IA_SYMBOL_COMPONENT_COLUMN}`],
    }), { "data-component": exports.COMPONENT_TYPE }),
        React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_ROW}` },
            React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_WRAPPER}` },
                React.createElement("div", { className: `${constants_1.HMI_COMPONENT_CLASS} ${componentClassName}` },
                    React.createElement("ul", { className: "list bordered dense" }, statusItems.map((item, index) => {
                        return (React.createElement("li", { key: index },
                            React.createElement("label", { className: "checkbox" },
                                React.createElement("div", { className: "text" },
                                    React.createElement("p", { className: "x-small" }, item.label)),
                                React.createElement("div", { className: "end" },
                                    React.createElement("input", { name: "checkbox", id: `checkbox-${index}`, type: "checkbox", checked: item.status, readOnly: true })))));
                    })))))));
};
exports.StatusValveMp = StatusValveMp;
// This is the actual thing that gets registered with the component registry.
class StatusValveMpMeta {
    getComponentType() {
        return exports.COMPONENT_TYPE;
    }
    /**
     * @returns The React component class.
     */
    getViewComponent() {
        return exports.StatusValveMp;
    }
    getDefaultSize() {
        return {
            width: 240,
            height: 32,
        };
    }
    // Invoked when an update to the PropertyTree has occurred,
    // effectively mapping the valveStatus of the tree to component props.
    getPropsReducer(tree) {
        console.log(`status ${tree.read(`status`)}`);
        return {
            statusItems: tree.read("status", [
                {
                    label: `label text`,
                    status: false,
                },
            ]),
        };
    }
}
exports.StatusValveMpMeta = StatusValveMpMeta;


/***/ }),

/***/ "./src/components/Valve.tsx":
/*!**********************************!*\
  !*** ./src/components/Valve.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValveMeta = exports.Valve = exports.COMPONENT_TYPE = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const React = __webpack_require__(/*! react */ "react");
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
const ValveMp_1 = __webpack_require__(/*! ./process-objects/valve-mp/ValveMp */ "./src/components/process-objects/valve-mp/ValveMp.tsx");
const initialState_1 = __webpack_require__(/*! ../api/initialState */ "./src/api/initialState.ts");
// import { valveProps } from "./process-objects/valve/initialState";
// import { ValveFCCompound } from "./process-objects/valve/ValveFC";
exports.COMPONENT_TYPE = "hmi.process_objects.Valve_mp";
/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
class Valve extends perspective_client_1.Component {
    constructor(props) {
        super(props);
        this.processObject = this.props.props.processObject || initialState_1.processObjectProps;
        this.status = this.processObject.status;
        this.showLabel = this.props.props.showLabel || false;
        this.labelPosition = this.props.props.labelPosition || "left";
        /**
         * Handler for the component's action event.
         */
        this.onActionPerformed = () => {
            // If the designer is in "design" mode, don't do anything
            if (!this.props.eventsEnabled) {
                console.log("Valve is disabled in the design-scope");
                return;
            }
            console.log("Valve clicked!");
            this.props.componentEvents.fireComponentEvent("onActionPerformed", {});
        };
        this.valveRef = React.createRef();
    }
    // This is a lifecycle method that is called when the component is first mounted to the DOM.
    componentDidMount() {
        // No need to initialize valveRef here
    }
    render() {
        return (
        // <div>This is Valve</div>
        React.createElement(ValveMp_1.ValveMpCompound.Root, { componentProps: this.props, valveProps: this.props.props, onActionPerformed: this.onActionPerformed },
            React.createElement(ValveMp_1.ValveMpCompound.valve, null),
            React.createElement(ValveMp_1.ValveMpCompound.popover, { anchorEl: this.valveRef.current })));
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
            width: 20,
            height: 40,
        };
    }
    // Invoked when an update to the PropertyTree has occurred,
    // effectively mapping the valveStatus of the tree to component props.
    getPropsReducer(tree) {
        console.log(`itemName: ${tree.readString("processObject.status.itemName")} showLabel ${tree.readBoolean("showLabel")}`);
        return {
            processObject: {
                status: {
                    alarm: tree.readBoolean("processObject.status.alarm", false),
                    actFB: tree.readBoolean("processObject.status.actFB", false),
                    deActFB: tree.readBoolean("processObject.status.deActFB", false),
                    activatedConfig: tree.readNumber("processObject.status.activatedConfig", 511),
                    deactivatedConfig: tree.readNumber("processObject.status.deactivatedConfig", 4095),
                    itemName: tree.readString("processObject.status.itemName", ""),
                    manual: tree.readBoolean("processObject.status.manual", false),
                    masked: tree.readBoolean("processObject.status.masked", false),
                    changing: tree.readBoolean("processObject.status.changing", false),
                    locate: tree.readBoolean("processObject.status.locate", false),
                    usl: tree.readBoolean("processObject.status.usl", false),
                    lsl: tree.readBoolean("processObject.status.lsl", false),
                },
            },
            showLabel: tree.readBoolean("showLabel", false),
            labelPosition: tree.readString("labelPosition", "top-left"),
        };
    }
}
exports.ValveMeta = ValveMeta;


/***/ }),

/***/ "./src/components/process-objects/heat-exchangers/HeatExchangerCompound.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/process-objects/heat-exchangers/HeatExchangerCompound.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeatExchangerCompound = exports.useHxContext = exports.HxContextProvider = exports.COMPONENT_TYPE = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const React = __webpack_require__(/*! react */ "react");
const createContext_1 = __webpack_require__(/*! ../../../utils/createContext */ "./src/utils/createContext.tsx");
const item_1 = __webpack_require__(/*! ../valve/item */ "./src/components/process-objects/valve/item.tsx");
const utils_1 = __webpack_require__(/*! ../../../api/utils */ "./src/api/utils.ts");
const hx_utils_1 = __webpack_require__(/*! ../../../ar-utils/processObjects/heatExchangers/hx-utils */ "./src/ar-utils/processObjects/heatExchangers/hx-utils.ts");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
const getPlateColor = (mode) => {
    console.log(`mode: ${mode}`);
    switch (mode) {
        case "alarm":
            return "var(--_error)";
        case "heating":
            return "var(--_heating)";
        case "cooling":
            return "var(--_cooling)";
        default:
            return "lime";
    }
};
const getBaseItemCount = (type) => {
    switch (type) {
        case "plate":
            return 18;
        case "tubular":
            return 15;
        default:
            return 0;
    }
};
exports.COMPONENT_TYPE = constants_1.HX_COMPONENT_TYPE;
_a = (0, createContext_1.useCreateContext)("HxCompound"), exports.HxContextProvider = _a[0], exports.useHxContext = _a[1];
const Root = ({ componentProps, itemProps, onActionPerformed, children, }) => {
    return (React.createElement(exports.HxContextProvider, { itemProps,
        componentProps,
        onActionPerformed }, children));
};
const plate = () => {
    const { itemProps, onActionPerformed, componentProps } = (0, exports.useHxContext)("Plate");
    const elRef = React.useRef(null);
    const { emit } = componentProps;
    const { type, locate, mode } = itemProps;
    // Component Constants
    const BASE_ITEM_COUNT = getBaseItemCount(type !== null && type !== void 0 ? type : 0);
    const BASE_ITEM_CONFIG = 524287;
    const DYNAMIC_ITEM_COUNT = 0; // Enable display of base Items
    const DYNAMIC_ITEM_CONFIG = 0;
    let componentItemNames = (0, hx_utils_1.buildComponentElements)(BASE_ITEM_COUNT, DYNAMIC_ITEM_COUNT);
    if (!locate) {
        console.log(`locate is: ${locate}`);
        componentItemNames = componentItemNames.slice(0, -1);
    }
    console.log(`componentItemNames: ${JSON.stringify(componentItemNames, null, 2)}`);
    const componentClassName = `heat-exchanger ${type !== null && type !== void 0 ? type : ""}`;
    return (React.createElement("div", Object.assign({ ref: elRef }, emit({
        classes: [`${constants_1.IA_SYMBOL_COMPONENT_COLUMN}`],
    }), { "data-component": exports.COMPONENT_TYPE, onClick: onActionPerformed }),
        React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_ROW}` },
            React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_WRAPPER}` },
                React.createElement("div", { className: `${constants_1.HMI_COMPONENT_CLASS} ${componentClassName}`, style: { "--hmi-plate-color": getPlateColor(mode !== null && mode !== void 0 ? mode : "") } }, componentItemNames.map(({ name, index, key }) => (React.createElement(item_1.default, { itemClassName: name +
                        " " +
                        (0, utils_1.getClassNameWithStatus)(index, //index
                        undefined, // status
                        constants_1.hxElements, //elementVariants
                        "", //baseClassName
                        BASE_ITEM_COUNT, // baseElements
                        BASE_ITEM_CONFIG, //baseConfig
                        DYNAMIC_ITEM_COUNT, //dynamicItems
                        DYNAMIC_ITEM_CONFIG //dynamicConfig
                        ), key: key }))))))));
};
const popover = ({ anchorEl }) => {
    const { itemProps, componentProps } = (0, exports.useHxContext)("Popover");
    const { showLabel, labelPosition, itemName } = itemProps;
    if (!showLabel)
        return null;
    const { position } = componentProps;
    let className = "itemId popover position-left";
    if (labelPosition) {
        className = (0, utils_1.getItemIdPositionClassName)(className, labelPosition);
    }
    return (React.createElement("div", { className: className, style: {
            top: position.y,
            left: position.x,
        } },
        React.createElement("div", { style: { padding: 8 } }, itemName)));
};
exports.HeatExchangerCompound = {
    Root,
    plate,
    popover,
};


/***/ }),

/***/ "./src/components/process-objects/pumps/PumpCompound.tsx":
/*!***************************************************************!*\
  !*** ./src/components/process-objects/pumps/PumpCompound.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PumpCompound = exports.usePumpContext = exports.PumpContextProvider = exports.COMPONENT_TYPE = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const React = __webpack_require__(/*! react */ "react");
const createContext_1 = __webpack_require__(/*! ../../../utils/createContext */ "./src/utils/createContext.tsx");
const item_1 = __webpack_require__(/*! ../valve/item */ "./src/components/process-objects/valve/item.tsx");
const utils_1 = __webpack_require__(/*! ../../../api/utils */ "./src/api/utils.ts");
const initialState_1 = __webpack_require__(/*! ../../../api/initialState */ "./src/api/initialState.ts");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
exports.COMPONENT_TYPE = constants_1.PUMP_COMPONENT_TYPE;
_a = (0, createContext_1.useCreateContext)("PumpCompound"), exports.PumpContextProvider = _a[0], exports.usePumpContext = _a[1];
const Root = ({ componentProps, pumpProps, onActionPerformed, children, }) => {
    return (React.createElement(exports.PumpContextProvider, { pumpProps,
        componentProps,
        onActionPerformed }, children));
};
const pump = () => {
    const { pumpProps, onActionPerformed, componentProps } = (0, exports.usePumpContext)("Valve");
    const elRef = React.useRef(null);
    const { emit } = componentProps;
    const { processObject, pumpType } = pumpProps;
    const { status } = processObject || initialState_1.pumpInitialProps;
    // if not locate, trim last item from valveMpItemNames
    const componentItemNames = React.useMemo(() => {
        if (!(status === null || status === void 0 ? void 0 : status.locate)) {
            return utils_1.pumpItemNames.slice(0, -1);
        }
        return utils_1.pumpItemNames;
    }, [status === null || status === void 0 ? void 0 : status.locate]);
    const componentClassName = "pump";
    return (React.createElement("div", Object.assign({ ref: elRef }, emit({
        classes: [`${constants_1.IA_SYMBOL_COMPONENT_COLUMN}`],
    }), { "data-component": exports.COMPONENT_TYPE, onClick: onActionPerformed }),
        React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_ROW}` },
            React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_WRAPPER}` },
                React.createElement("div", { className: `${constants_1.HMI_COMPONENT_CLASS} ${componentClassName}` },
                    React.createElement(item_1.default, { itemClassName: `${(0, utils_1.getPumpStatusClassNames)("base-1 show", status)}` }),
                    React.createElement(item_1.default, { itemClassName: "base-2 show item" }),
                    React.createElement(item_1.default, { itemClassName: "base-3 show item" }),
                    componentItemNames.map(({ name, index, key }) => (React.createElement(item_1.default, { itemClassName: name +
                            " " +
                            (0, utils_1.getPumpItemClassName)(index, pumpType || "centrifugal", status), key: key }))))))));
};
const popover = ({ anchorEl }) => {
    const { pumpProps, componentProps } = (0, exports.usePumpContext)("Popover");
    const { showLabel, labelPosition, processObject } = pumpProps;
    const { status } = processObject || {};
    if (!showLabel)
        return null;
    const { position } = componentProps;
    let className = "itemId popover position-left";
    if (labelPosition) {
        className = (0, utils_1.getItemIdPositionClassName)(className, labelPosition);
    }
    return (React.createElement("div", { className: className, style: {
            top: position.y,
            left: position.x,
        } },
        React.createElement("div", { style: { padding: 8 } }, status === null || status === void 0 ? void 0 : status.itemName)));
};
exports.PumpCompound = {
    Root,
    pump,
    popover,
};


/***/ }),

/***/ "./src/components/process-objects/valve-mp/ValveMp.tsx":
/*!*************************************************************!*\
  !*** ./src/components/process-objects/valve-mp/ValveMp.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValveMpCompound = exports.useValveContext = exports.ValveContextProvider = void 0;
const React = __webpack_require__(/*! react */ "react");
// import { useValveReducer } from "../../../api/hooks";
const utils_1 = __webpack_require__(/*! ../../../api/utils */ "./src/api/utils.ts");
const item_1 = __webpack_require__(/*! ../valve/item */ "./src/components/process-objects/valve/item.tsx");
const createContext_1 = __webpack_require__(/*! ../../../utils/createContext */ "./src/utils/createContext.tsx");
const initialState_1 = __webpack_require__(/*! ../../../api/initialState */ "./src/api/initialState.ts");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
// import './valve-mp.module.css'
// import {valveStatus} from '../../api/initialState'
const COMPONENT_TYPE = constants_1.VALVE_COMPONENT_TYPE;
// import {valveStatus} from './initialState'
_a = (0, createContext_1.useCreateContext)("ValveMpCompound"), exports.ValveContextProvider = _a[0], exports.useValveContext = _a[1];
const Root = ({ componentProps, valveProps, onActionPerformed, children, }) => {
    return (React.createElement(exports.ValveContextProvider, { valveProps,
        componentProps,
        onActionPerformed }, children));
};
const valve = () => {
    const { valveProps, onActionPerformed, componentProps } = (0, exports.useValveContext)("Valve");
    const valveRef = React.useRef(null);
    const { emit } = componentProps;
    const { processObject } = valveProps;
    const { status } = processObject || initialState_1.processObjectProps;
    // const inCoord = position?.x ?? false;
    // if not locate, trim last item from valveMpItemNames
    let componentItemNames = utils_1.valveMpItemNames;
    if (!(status === null || status === void 0 ? void 0 : status.locate)) {
        componentItemNames = componentItemNames.slice(0, -1);
    }
    const componentClassName = "valve__mp";
    // if (!inCoord) {
    return (React.createElement("div", Object.assign({ ref: valveRef }, emit({
        classes: [`${constants_1.IA_SYMBOL_COMPONENT_COLUMN}`],
    }), { "data-component": COMPONENT_TYPE, onClick: onActionPerformed }),
        React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_ROW}` },
            React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_WRAPPER}` },
                React.createElement("div", { className: `${constants_1.HMI_COMPONENT_CLASS} ${componentClassName}` }, componentItemNames.map(({ value, index, key }) => (
                // console.log(
                // 	`re-rendered ,key ${key} value ${value} index ${index}`
                // ),
                React.createElement(item_1.default, { itemClassName: value + " " + (0, utils_1.getValveMpItemClassName)(index, status), key: key }))))))));
};
const popover = ({ anchorEl }) => {
    const { valveProps, componentProps } = (0, exports.useValveContext)("Popover");
    const { showLabel, labelPosition, processObject } = valveProps;
    const { status } = processObject || initialState_1.processObjectProps;
    if (!showLabel)
        return null;
    const { position } = componentProps;
    let className = "itemId popover position-left";
    if (labelPosition) {
        className = (0, utils_1.getItemIdPositionClassName)(className, labelPosition);
    }
    return (React.createElement("div", { className: className, style: {
            top: position.y,
            left: position.x,
        } },
        React.createElement("div", { style: { padding: 8 } }, status === null || status === void 0 ? void 0 : status.itemName)));
};
exports.ValveMpCompound = {
    Root,
    valve,
    popover,
};


/***/ }),

/***/ "./src/components/process-objects/valve/item.tsx":
/*!*******************************************************!*\
  !*** ./src/components/process-objects/valve/item.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hxElements = exports.HX_COMPONENT_TYPE = exports.COMMAND_VALVE_MP_COMPONENT_TYPE = exports.PARAMETER_LIST_COMPONENT_TYPE = exports.STATUS_COMPONENT_TYPE = exports.PUMP_COMPONENT_TYPE = exports.VALVE_COMPONENT_TYPE = exports.HMI_COMPONENT_CLASS = exports.IA_SYMBOL_COMPONENT_WRAPPER = exports.IA_SYMBOL_COMPONENT_ROW = exports.IA_SYMBOL_COMPONENT_COLUMN = void 0;
const hx_types_1 = __webpack_require__(/*! ./ar-types/processObjects/heatExchangers/hx-types */ "./src/ar-types/processObjects/heatExchangers/hx-types.ts");
const hx_utils_1 = __webpack_require__(/*! ./ar-utils/processObjects/heatExchangers/hx-utils */ "./src/ar-utils/processObjects/heatExchangers/hx-utils.ts");
/**
 * HMI Component Module Constants
 */
exports.IA_SYMBOL_COMPONENT_COLUMN = "ia_symbolComponent ia_symbolComponent__column";
exports.IA_SYMBOL_COMPONENT_ROW = "ia_symbolComponent__row";
exports.IA_SYMBOL_COMPONENT_WRAPPER = "ia_symbolComponent__wrapper";
exports.HMI_COMPONENT_CLASS = "hmi-component";
exports.VALVE_COMPONENT_TYPE = "hmi.process_objects.Valve";
exports.PUMP_COMPONENT_TYPE = "hmi.process_objects.Pump";
exports.STATUS_COMPONENT_TYPE = "hmi.display.StatusValveMp";
exports.PARAMETER_LIST_COMPONENT_TYPE = "hmi.input.ParameterList";
exports.COMMAND_VALVE_MP_COMPONENT_TYPE = "hmi.input.CommandValveMp";
exports.HX_COMPONENT_TYPE = "hmi.process_objects.HeatExchanger";
// Component Element Construction
exports.hxElements = [
    { baseClass: (0, hx_utils_1.getHxModeClassNames)("plate", hx_types_1.HxModes.heating) },
    { statusKey: { actFB: { trueString: "activated" } } },
    { statusKey: { deActFB: { trueString: "deactivated" } } },
    { statusKey: { alarm: { trueString: "alarm" } } },
];


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/utils/createContext.tsx":
/*!*************************************!*\
  !*** ./src/utils/createContext.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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

"use strict";

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
    return Boolean((n >> i) & 1);
};
exports.getBoolAtIndex = getBoolAtIndex;


/***/ }),

/***/ "@inductiveautomation/perspective-client":
/*!************************************!*\
  !*** external "PerspectiveClient" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__inductiveautomation_perspective_client__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusValveMp = exports.CommandValveMp = exports.ParameterListComponent = exports.HeatExchanger = exports.Pump = exports.Valve = void 0;
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
//import { Button, ButtonMeta } from './components/Button';
//import { Valve, ValveMeta } from "./components/Valve";
const Valve_1 = __webpack_require__(/*! ./components/Valve */ "./src/components/Valve.tsx");
Object.defineProperty(exports, "Valve", ({ enumerable: true, get: function () { return Valve_1.Valve; } }));
const Pump_1 = __webpack_require__(/*! ./components/Pump */ "./src/components/Pump.tsx");
Object.defineProperty(exports, "Pump", ({ enumerable: true, get: function () { return Pump_1.Pump; } }));
const HeatExchanger_1 = __webpack_require__(/*! ./components/HeatExchanger */ "./src/components/HeatExchanger.tsx");
Object.defineProperty(exports, "HeatExchanger", ({ enumerable: true, get: function () { return HeatExchanger_1.HeatExchanger; } }));
const ParameterList_1 = __webpack_require__(/*! ./components/ParameterList */ "./src/components/ParameterList.tsx");
Object.defineProperty(exports, "ParameterListComponent", ({ enumerable: true, get: function () { return ParameterList_1.ParameterListComponent; } }));
const CommandValveMp_1 = __webpack_require__(/*! ./components/CommandValveMp */ "./src/components/CommandValveMp.tsx");
Object.defineProperty(exports, "CommandValveMp", ({ enumerable: true, get: function () { return CommandValveMp_1.CommandValveMp; } }));
const StatusValveMp_1 = __webpack_require__(/*! ./components/StatusValveMp */ "./src/components/StatusValveMp.tsx");
Object.defineProperty(exports, "StatusValveMp", ({ enumerable: true, get: function () { return StatusValveMp_1.StatusValveMp; } }));
// Import component styles
__webpack_require__(/*! ./index.css */ "./src/index.css");
// Array of component metadata
const components = [
    new Valve_1.ValveMeta(),
    new Pump_1.PumpMeta(),
    new HeatExchanger_1.HeatExchangerMeta(),
    new ParameterList_1.ParameterListComponentMeta(),
    new CommandValveMp_1.CommandValveMpMeta(),
    new StatusValveMp_1.StatusValveMpMeta(),
];
// Register each component with the Perspective ComponentRegistry
components.forEach((c) => perspective_client_1.ComponentRegistry.register(c));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG1pQ29tcG9uZW50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFxQztBQUNsRDtBQUNBO0FBQ0EsOEJBQThCLE9BQU8sa0ZBQWtGLE9BQU87QUFDOUgsR0FBRztBQUNIO0FBQ0EsaUtBQWlLLE1BQU07QUFDdkssR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFFO0FBQ047QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQztBQUNBO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXLElBQUksaUJBQWlCO0FBQ3JFO0FBQ0EsdUJBQXVCLG1CQUFtQixvQkFBb0IsMkRBQTJELElBQUk7QUFDN0g7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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UyxFQUFFO0lBQ2YsSUFBSSxlQUFRLEVBQUU7SUFDZCxJQUFJLGlDQUFpQixFQUFFO0lBQ3ZCLElBQUksMENBQTBCLEVBQUU7SUFDaEMsSUFBSSxtQ0FBa0IsRUFBRTtJQUN4QixJQUFJLGlDQUFpQixFQUFFO0NBRXZCLENBQUM7QUFFRixpRUFBaUU7QUFDakUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQWdCLEVBQUUsRUFBRSxDQUFDLHNDQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9pbW1lci9kaXN0L2Nqcy9pbW1lci5janMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9pbW1lci9kaXN0L2Nqcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3VzZS1pbW1lci9kaXN0L3VzZS1pbW1lci5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9tYXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbWQ1LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9uaWwuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3NoYTEuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YxLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YxVG9WNi5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92MzUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjYuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjZUb1YxLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y3LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9hcGkvaG9va3MudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9hcGkvaW5pdGlhbFN0YXRlLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXBpL3R5cGVzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXBpL3V0aWxzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXItdHlwZXMvcHJvY2Vzc09iamVjdHMvaGVhdEV4Y2hhbmdlcnMvaHgtdHlwZXMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9hci11dGlscy9wcm9jZXNzT2JqZWN0cy9oZWF0RXhjaGFuZ2Vycy9oeC11dGlscy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvQ29tbWFuZFZhbHZlTXAudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9IZWF0RXhjaGFuZ2VyLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvUGFyYW1ldGVyTGlzdC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1B1bXAudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9TdGF0dXNWYWx2ZU1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvVmFsdmUudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvaGVhdC1leGNoYW5nZXJzL0hlYXRFeGNoYW5nZXJDb21wb3VuZC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL3Byb2Nlc3Mtb2JqZWN0cy9wdW1wcy9QdW1wQ29tcG91bmQudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvdmFsdmUtbXAvVmFsdmVNcC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS9pdGVtLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL3V0aWxzL2NyZWF0ZUNvbnRleHQudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvdXRpbHMvbnVtYmVyVXRpbC50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL2V4dGVybmFsIHVtZCBcIlBlcnNwZWN0aXZlQ2xpZW50XCIiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy9leHRlcm5hbCB1bWQgXCJSZWFjdFwiIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiUGVyc3BlY3RpdmVDbGllbnRcIiksIHJlcXVpcmUoXCJSZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkhtaUNvbXBvbmVudHNcIiwgW1wiUGVyc3BlY3RpdmVDbGllbnRcIiwgXCJSZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIbWlDb21wb25lbnRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUGVyc3BlY3RpdmVDbGllbnRcIiksIHJlcXVpcmUoXCJSZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSG1pQ29tcG9uZW50c1wiXSA9IGZhY3Rvcnkocm9vdFtcIlBlcnNwZWN0aXZlQ2xpZW50XCJdLCByb290W1wiUmVhY3RcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2luZHVjdGl2ZWF1dG9tYXRpb25fcGVyc3BlY3RpdmVfY2xpZW50X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykgPT4ge1xucmV0dXJuICIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2ltbWVyLnRzXG52YXIgaW1tZXJfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoaW1tZXJfZXhwb3J0cywge1xuICBJbW1lcjogKCkgPT4gSW1tZXIyLFxuICBhcHBseVBhdGNoZXM6ICgpID0+IGFwcGx5UGF0Y2hlcyxcbiAgY2FzdERyYWZ0OiAoKSA9PiBjYXN0RHJhZnQsXG4gIGNhc3RJbW11dGFibGU6ICgpID0+IGNhc3RJbW11dGFibGUsXG4gIGNyZWF0ZURyYWZ0OiAoKSA9PiBjcmVhdGVEcmFmdCxcbiAgY3VycmVudDogKCkgPT4gY3VycmVudCxcbiAgZW5hYmxlTWFwU2V0OiAoKSA9PiBlbmFibGVNYXBTZXQsXG4gIGVuYWJsZVBhdGNoZXM6ICgpID0+IGVuYWJsZVBhdGNoZXMsXG4gIGZpbmlzaERyYWZ0OiAoKSA9PiBmaW5pc2hEcmFmdCxcbiAgZnJlZXplOiAoKSA9PiBmcmVlemUsXG4gIGltbWVyYWJsZTogKCkgPT4gRFJBRlRBQkxFLFxuICBpc0RyYWZ0OiAoKSA9PiBpc0RyYWZ0LFxuICBpc0RyYWZ0YWJsZTogKCkgPT4gaXNEcmFmdGFibGUsXG4gIG5vdGhpbmc6ICgpID0+IE5PVEhJTkcsXG4gIG9yaWdpbmFsOiAoKSA9PiBvcmlnaW5hbCxcbiAgcHJvZHVjZTogKCkgPT4gcHJvZHVjZSxcbiAgcHJvZHVjZVdpdGhQYXRjaGVzOiAoKSA9PiBwcm9kdWNlV2l0aFBhdGNoZXMsXG4gIHNldEF1dG9GcmVlemU6ICgpID0+IHNldEF1dG9GcmVlemUsXG4gIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5OiAoKSA9PiBzZXRVc2VTdHJpY3RTaGFsbG93Q29weVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhpbW1lcl9leHBvcnRzKTtcblxuLy8gc3JjL3V0aWxzL2Vudi50c1xudmFyIE5PVEhJTkcgPSBTeW1ib2wuZm9yKFwiaW1tZXItbm90aGluZ1wiKTtcbnZhciBEUkFGVEFCTEUgPSBTeW1ib2wuZm9yKFwiaW1tZXItZHJhZnRhYmxlXCIpO1xudmFyIERSQUZUX1NUQVRFID0gU3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpO1xuXG4vLyBzcmMvdXRpbHMvZXJyb3JzLnRzXG52YXIgZXJyb3JzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gW1xuICAvLyBBbGwgZXJyb3IgY29kZXMsIHN0YXJ0aW5nIGJ5IDA6XG4gIGZ1bmN0aW9uKHBsdWdpbikge1xuICAgIHJldHVybiBgVGhlIHBsdWdpbiBmb3IgJyR7cGx1Z2lufScgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIFxcYGVuYWJsZSR7cGx1Z2lufSgpXFxgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uYDtcbiAgfSxcbiAgZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gYHByb2R1Y2UgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoaW5ncyB0aGF0IGFyZSBkcmFmdGFibGU6IHBsYWluIG9iamVjdHMsIGFycmF5cywgTWFwLCBTZXQgb3IgY2xhc3NlcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCAnW2ltbWVyYWJsZV06IHRydWUnLiBHb3QgJyR7dGhpbmd9J2A7XG4gIH0sXG4gIFwiVGhpcyBvYmplY3QgaGFzIGJlZW4gZnJvemVuIGFuZCBzaG91bGQgbm90IGJlIG11dGF0ZWRcIixcbiAgZnVuY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiBcIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIgKyBkYXRhO1xuICB9LFxuICBcIkFuIGltbWVyIHByb2R1Y2VyIHJldHVybmVkIGEgbmV3IHZhbHVlICphbmQqIG1vZGlmaWVkIGl0cyBkcmFmdC4gRWl0aGVyIHJldHVybiBhIG5ldyB2YWx1ZSAqb3IqIG1vZGlmeSB0aGUgZHJhZnQuXCIsXG4gIFwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsXG4gIFwiVGhlIGZpcnN0IG9yIHNlY29uZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uXCIsXG4gIFwiVGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIsXG4gIFwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLFxuICBcIkZpcnN0IGFyZ3VtZW50IHRvIGBmaW5pc2hEcmFmdGAgbXVzdCBiZSBhIGRyYWZ0IHJldHVybmVkIGJ5IGBjcmVhdGVEcmFmdGBcIixcbiAgZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gYCdjdXJyZW50JyBleHBlY3RzIGEgZHJhZnQsIGdvdDogJHt0aGluZ31gO1xuICB9LFxuICBcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsXG4gIFwiT2JqZWN0LnNldFByb3RvdHlwZU9mKCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIixcbiAgXCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIixcbiAgXCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsXG4gIGZ1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIGAnb3JpZ2luYWwnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiAke3RoaW5nfWA7XG4gIH1cbiAgLy8gTm90ZTogaWYgbW9yZSBlcnJvcnMgYXJlIGFkZGVkLCB0aGUgZXJyb3JPZmZzZXQgaW4gUGF0Y2hlcy50cyBzaG91bGQgYmUgaW5jcmVhc2VkXG4gIC8vIFNlZSBQYXRjaGVzLnRzIGZvciBhZGRpdGlvbmFsIGVycm9yc1xuXSA6IFtdO1xuZnVuY3Rpb24gZGllKGVycm9yLCAuLi5hcmdzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBjb25zdCBlID0gZXJyb3JzW2Vycm9yXTtcbiAgICBjb25zdCBtc2cgPSB0eXBlb2YgZSA9PT0gXCJmdW5jdGlvblwiID8gZS5hcHBseShudWxsLCBhcmdzKSA6IGU7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbSW1tZXJdICR7bXNnfWApO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgW0ltbWVyXSBtaW5pZmllZCBlcnJvciBucjogJHtlcnJvcn0uIEZ1bGwgZXJyb3IgYXQ6IGh0dHBzOi8vYml0Lmx5LzNjWEVLV2ZgXG4gICk7XG59XG5cbi8vIHNyYy91dGlscy9jb21tb24udHNcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbmZ1bmN0aW9uIGlzRHJhZnQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgISF2YWx1ZVtEUkFGVF9TVEFURV07XG59XG5mdW5jdGlvbiBpc0RyYWZ0YWJsZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKVxuICAgIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpIHx8ICEhdmFsdWVbRFJBRlRBQkxFXSB8fCAhIXZhbHVlLmNvbnN0cnVjdG9yPy5bRFJBRlRBQkxFXSB8fCBpc01hcCh2YWx1ZSkgfHwgaXNTZXQodmFsdWUpO1xufVxudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCk7XG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcHJvdG8gPSBnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IEN0b3IgPSBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgaWYgKEN0b3IgPT09IE9iamVjdClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09IFwiZnVuY3Rpb25cIiAmJiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKEN0b3IpID09PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuZnVuY3Rpb24gb3JpZ2luYWwodmFsdWUpIHtcbiAgaWYgKCFpc0RyYWZ0KHZhbHVlKSlcbiAgICBkaWUoMTUsIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlW0RSQUZUX1NUQVRFXS5iYXNlXztcbn1cbmZ1bmN0aW9uIGVhY2gob2JqLCBpdGVyKSB7XG4gIGlmIChnZXRBcmNodHlwZShvYmopID09PSAwIC8qIE9iamVjdCAqLykge1xuICAgIFJlZmxlY3Qub3duS2V5cyhvYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaXRlcihrZXksIG9ialtrZXldLCBvYmopO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iai5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IGl0ZXIoaW5kZXgsIGVudHJ5LCBvYmopKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0QXJjaHR5cGUodGhpbmcpIHtcbiAgY29uc3Qgc3RhdGUgPSB0aGluZ1tEUkFGVF9TVEFURV07XG4gIHJldHVybiBzdGF0ZSA/IHN0YXRlLnR5cGVfIDogQXJyYXkuaXNBcnJheSh0aGluZykgPyAxIC8qIEFycmF5ICovIDogaXNNYXAodGhpbmcpID8gMiAvKiBNYXAgKi8gOiBpc1NldCh0aGluZykgPyAzIC8qIFNldCAqLyA6IDAgLyogT2JqZWN0ICovO1xufVxuZnVuY3Rpb24gaGFzKHRoaW5nLCBwcm9wKSB7XG4gIHJldHVybiBnZXRBcmNodHlwZSh0aGluZykgPT09IDIgLyogTWFwICovID8gdGhpbmcuaGFzKHByb3ApIDogT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaW5nLCBwcm9wKTtcbn1cbmZ1bmN0aW9uIGdldCh0aGluZywgcHJvcCkge1xuICByZXR1cm4gZ2V0QXJjaHR5cGUodGhpbmcpID09PSAyIC8qIE1hcCAqLyA/IHRoaW5nLmdldChwcm9wKSA6IHRoaW5nW3Byb3BdO1xufVxuZnVuY3Rpb24gc2V0KHRoaW5nLCBwcm9wT3JPbGRWYWx1ZSwgdmFsdWUpIHtcbiAgY29uc3QgdCA9IGdldEFyY2h0eXBlKHRoaW5nKTtcbiAgaWYgKHQgPT09IDIgLyogTWFwICovKVxuICAgIHRoaW5nLnNldChwcm9wT3JPbGRWYWx1ZSwgdmFsdWUpO1xuICBlbHNlIGlmICh0ID09PSAzIC8qIFNldCAqLykge1xuICAgIHRoaW5nLmFkZCh2YWx1ZSk7XG4gIH0gZWxzZVxuICAgIHRoaW5nW3Byb3BPck9sZFZhbHVlXSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5mdW5jdGlvbiBpc01hcCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIE1hcDtcbn1cbmZ1bmN0aW9uIGlzU2V0KHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgU2V0O1xufVxuZnVuY3Rpb24gbGF0ZXN0KHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5jb3B5XyB8fCBzdGF0ZS5iYXNlXztcbn1cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KGJhc2UsIHN0cmljdCkge1xuICBpZiAoaXNNYXAoYmFzZSkpIHtcbiAgICByZXR1cm4gbmV3IE1hcChiYXNlKTtcbiAgfVxuICBpZiAoaXNTZXQoYmFzZSkpIHtcbiAgICByZXR1cm4gbmV3IFNldChiYXNlKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShiYXNlKSlcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYmFzZSk7XG4gIGNvbnN0IGlzUGxhaW4gPSBpc1BsYWluT2JqZWN0KGJhc2UpO1xuICBpZiAoc3RyaWN0ID09PSB0cnVlIHx8IHN0cmljdCA9PT0gXCJjbGFzc19vbmx5XCIgJiYgIWlzUGxhaW4pIHtcbiAgICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGJhc2UpO1xuICAgIGRlbGV0ZSBkZXNjcmlwdG9yc1tEUkFGVF9TVEFURV07XG4gICAgbGV0IGtleXMgPSBSZWZsZWN0Lm93bktleXMoZGVzY3JpcHRvcnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGNvbnN0IGRlc2MgPSBkZXNjcmlwdG9yc1trZXldO1xuICAgICAgaWYgKGRlc2Mud3JpdGFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpXG4gICAgICAgIGRlc2NyaXB0b3JzW2tleV0gPSB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIC8vIGNvdWxkIGxpdmUgd2l0aCAhIWRlc2Muc2V0IGFzIHdlbGwgaGVyZS4uLlxuICAgICAgICAgIGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcbiAgICAgICAgICB2YWx1ZTogYmFzZVtrZXldXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKGdldFByb3RvdHlwZU9mKGJhc2UpLCBkZXNjcmlwdG9ycyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihiYXNlKTtcbiAgICBpZiAocHJvdG8gIT09IG51bGwgJiYgaXNQbGFpbikge1xuICAgICAgcmV0dXJuIHsgLi4uYmFzZSB9O1xuICAgIH1cbiAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKHByb3RvKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIGJhc2UpO1xuICB9XG59XG5mdW5jdGlvbiBmcmVlemUob2JqLCBkZWVwID0gZmFsc2UpIHtcbiAgaWYgKGlzRnJvemVuKG9iaikgfHwgaXNEcmFmdChvYmopIHx8ICFpc0RyYWZ0YWJsZShvYmopKVxuICAgIHJldHVybiBvYmo7XG4gIGlmIChnZXRBcmNodHlwZShvYmopID4gMSkge1xuICAgIG9iai5zZXQgPSBvYmouYWRkID0gb2JqLmNsZWFyID0gb2JqLmRlbGV0ZSA9IGRvbnRNdXRhdGVGcm96ZW5Db2xsZWN0aW9ucztcbiAgfVxuICBPYmplY3QuZnJlZXplKG9iaik7XG4gIGlmIChkZWVwKVxuICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiBmcmVlemUodmFsdWUsIHRydWUpKTtcbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIGRvbnRNdXRhdGVGcm96ZW5Db2xsZWN0aW9ucygpIHtcbiAgZGllKDIpO1xufVxuZnVuY3Rpb24gaXNGcm96ZW4ob2JqKSB7XG4gIHJldHVybiBPYmplY3QuaXNGcm96ZW4ob2JqKTtcbn1cblxuLy8gc3JjL3V0aWxzL3BsdWdpbnMudHNcbnZhciBwbHVnaW5zID0ge307XG5mdW5jdGlvbiBnZXRQbHVnaW4ocGx1Z2luS2V5KSB7XG4gIGNvbnN0IHBsdWdpbiA9IHBsdWdpbnNbcGx1Z2luS2V5XTtcbiAgaWYgKCFwbHVnaW4pIHtcbiAgICBkaWUoMCwgcGx1Z2luS2V5KTtcbiAgfVxuICByZXR1cm4gcGx1Z2luO1xufVxuZnVuY3Rpb24gbG9hZFBsdWdpbihwbHVnaW5LZXksIGltcGxlbWVudGF0aW9uKSB7XG4gIGlmICghcGx1Z2luc1twbHVnaW5LZXldKVxuICAgIHBsdWdpbnNbcGx1Z2luS2V5XSA9IGltcGxlbWVudGF0aW9uO1xufVxuXG4vLyBzcmMvY29yZS9zY29wZS50c1xudmFyIGN1cnJlbnRTY29wZTtcbmZ1bmN0aW9uIGdldEN1cnJlbnRTY29wZSgpIHtcbiAgcmV0dXJuIGN1cnJlbnRTY29wZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNjb3BlKHBhcmVudF8sIGltbWVyXykge1xuICByZXR1cm4ge1xuICAgIGRyYWZ0c186IFtdLFxuICAgIHBhcmVudF8sXG4gICAgaW1tZXJfLFxuICAgIC8vIFdoZW5ldmVyIHRoZSBtb2RpZmllZCBkcmFmdCBjb250YWlucyBhIGRyYWZ0IGZyb20gYW5vdGhlciBzY29wZSwgd2VcbiAgICAvLyBuZWVkIHRvIHByZXZlbnQgYXV0by1mcmVlemluZyBzbyB0aGUgdW5vd25lZCBkcmFmdCBjYW4gYmUgZmluYWxpemVkLlxuICAgIGNhbkF1dG9GcmVlemVfOiB0cnVlLFxuICAgIHVuZmluYWxpemVkRHJhZnRzXzogMFxuICB9O1xufVxuZnVuY3Rpb24gdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpIHtcbiAgaWYgKHBhdGNoTGlzdGVuZXIpIHtcbiAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpO1xuICAgIHNjb3BlLnBhdGNoZXNfID0gW107XG4gICAgc2NvcGUuaW52ZXJzZVBhdGNoZXNfID0gW107XG4gICAgc2NvcGUucGF0Y2hMaXN0ZW5lcl8gPSBwYXRjaExpc3RlbmVyO1xuICB9XG59XG5mdW5jdGlvbiByZXZva2VTY29wZShzY29wZSkge1xuICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgc2NvcGUuZHJhZnRzXy5mb3JFYWNoKHJldm9rZURyYWZ0KTtcbiAgc2NvcGUuZHJhZnRzXyA9IG51bGw7XG59XG5mdW5jdGlvbiBsZWF2ZVNjb3BlKHNjb3BlKSB7XG4gIGlmIChzY29wZSA9PT0gY3VycmVudFNjb3BlKSB7XG4gICAgY3VycmVudFNjb3BlID0gc2NvcGUucGFyZW50XztcbiAgfVxufVxuZnVuY3Rpb24gZW50ZXJTY29wZShpbW1lcjIpIHtcbiAgcmV0dXJuIGN1cnJlbnRTY29wZSA9IGNyZWF0ZVNjb3BlKGN1cnJlbnRTY29wZSwgaW1tZXIyKTtcbn1cbmZ1bmN0aW9uIHJldm9rZURyYWZ0KGRyYWZ0KSB7XG4gIGNvbnN0IHN0YXRlID0gZHJhZnRbRFJBRlRfU1RBVEVdO1xuICBpZiAoc3RhdGUudHlwZV8gPT09IDAgLyogT2JqZWN0ICovIHx8IHN0YXRlLnR5cGVfID09PSAxIC8qIEFycmF5ICovKVxuICAgIHN0YXRlLnJldm9rZV8oKTtcbiAgZWxzZVxuICAgIHN0YXRlLnJldm9rZWRfID0gdHJ1ZTtcbn1cblxuLy8gc3JjL2NvcmUvZmluYWxpemUudHNcbmZ1bmN0aW9uIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSkge1xuICBzY29wZS51bmZpbmFsaXplZERyYWZ0c18gPSBzY29wZS5kcmFmdHNfLmxlbmd0aDtcbiAgY29uc3QgYmFzZURyYWZ0ID0gc2NvcGUuZHJhZnRzX1swXTtcbiAgY29uc3QgaXNSZXBsYWNlZCA9IHJlc3VsdCAhPT0gdm9pZCAwICYmIHJlc3VsdCAhPT0gYmFzZURyYWZ0O1xuICBpZiAoaXNSZXBsYWNlZCkge1xuICAgIGlmIChiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLm1vZGlmaWVkXykge1xuICAgICAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuICAgICAgZGllKDQpO1xuICAgIH1cbiAgICBpZiAoaXNEcmFmdGFibGUocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIHJlc3VsdCk7XG4gICAgICBpZiAoIXNjb3BlLnBhcmVudF8pXG4gICAgICAgIG1heWJlRnJlZXplKHNjb3BlLCByZXN1bHQpO1xuICAgIH1cbiAgICBpZiAoc2NvcGUucGF0Y2hlc18pIHtcbiAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKFxuICAgICAgICBiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLmJhc2VfLFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIHNjb3BlLnBhdGNoZXNfLFxuICAgICAgICBzY29wZS5pbnZlcnNlUGF0Y2hlc19cbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGZpbmFsaXplKHNjb3BlLCBiYXNlRHJhZnQsIFtdKTtcbiAgfVxuICByZXZva2VTY29wZShzY29wZSk7XG4gIGlmIChzY29wZS5wYXRjaGVzXykge1xuICAgIHNjb3BlLnBhdGNoTGlzdGVuZXJfKHNjb3BlLnBhdGNoZXNfLCBzY29wZS5pbnZlcnNlUGF0Y2hlc18pO1xuICB9XG4gIHJldHVybiByZXN1bHQgIT09IE5PVEhJTkcgPyByZXN1bHQgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBmaW5hbGl6ZShyb290U2NvcGUsIHZhbHVlLCBwYXRoKSB7XG4gIGlmIChpc0Zyb3plbih2YWx1ZSkpXG4gICAgcmV0dXJuIHZhbHVlO1xuICBjb25zdCBzdGF0ZSA9IHZhbHVlW0RSQUZUX1NUQVRFXTtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIGVhY2goXG4gICAgICB2YWx1ZSxcbiAgICAgIChrZXksIGNoaWxkVmFsdWUpID0+IGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBzdGF0ZSwgdmFsdWUsIGtleSwgY2hpbGRWYWx1ZSwgcGF0aClcbiAgICApO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoc3RhdGUuc2NvcGVfICE9PSByb290U2NvcGUpXG4gICAgcmV0dXJuIHZhbHVlO1xuICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgc3RhdGUuYmFzZV8sIHRydWUpO1xuICAgIHJldHVybiBzdGF0ZS5iYXNlXztcbiAgfVxuICBpZiAoIXN0YXRlLmZpbmFsaXplZF8pIHtcbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gdHJ1ZTtcbiAgICBzdGF0ZS5zY29wZV8udW5maW5hbGl6ZWREcmFmdHNfLS07XG4gICAgY29uc3QgcmVzdWx0ID0gc3RhdGUuY29weV87XG4gICAgbGV0IHJlc3VsdEVhY2ggPSByZXN1bHQ7XG4gICAgbGV0IGlzU2V0MiA9IGZhbHNlO1xuICAgIGlmIChzdGF0ZS50eXBlXyA9PT0gMyAvKiBTZXQgKi8pIHtcbiAgICAgIHJlc3VsdEVhY2ggPSBuZXcgU2V0KHJlc3VsdCk7XG4gICAgICByZXN1bHQuY2xlYXIoKTtcbiAgICAgIGlzU2V0MiA9IHRydWU7XG4gICAgfVxuICAgIGVhY2goXG4gICAgICByZXN1bHRFYWNoLFxuICAgICAgKGtleSwgY2hpbGRWYWx1ZSkgPT4gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCByZXN1bHQsIGtleSwgY2hpbGRWYWx1ZSwgcGF0aCwgaXNTZXQyKVxuICAgICk7XG4gICAgbWF5YmVGcmVlemUocm9vdFNjb3BlLCByZXN1bHQsIGZhbHNlKTtcbiAgICBpZiAocGF0aCAmJiByb290U2NvcGUucGF0Y2hlc18pIHtcbiAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVQYXRjaGVzXyhcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHBhdGgsXG4gICAgICAgIHJvb3RTY29wZS5wYXRjaGVzXyxcbiAgICAgICAgcm9vdFNjb3BlLmludmVyc2VQYXRjaGVzX1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlLmNvcHlfO1xufVxuZnVuY3Rpb24gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHBhcmVudFN0YXRlLCB0YXJnZXRPYmplY3QsIHByb3AsIGNoaWxkVmFsdWUsIHJvb3RQYXRoLCB0YXJnZXRJc1NldCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGNoaWxkVmFsdWUgPT09IHRhcmdldE9iamVjdClcbiAgICBkaWUoNSk7XG4gIGlmIChpc0RyYWZ0KGNoaWxkVmFsdWUpKSB7XG4gICAgY29uc3QgcGF0aCA9IHJvb3RQYXRoICYmIHBhcmVudFN0YXRlICYmIHBhcmVudFN0YXRlLnR5cGVfICE9PSAzIC8qIFNldCAqLyAmJiAvLyBTZXQgb2JqZWN0cyBhcmUgYXRvbWljIHNpbmNlIHRoZXkgaGF2ZSBubyBrZXlzLlxuICAgICFoYXMocGFyZW50U3RhdGUuYXNzaWduZWRfLCBwcm9wKSA/IHJvb3RQYXRoLmNvbmNhdChwcm9wKSA6IHZvaWQgMDtcbiAgICBjb25zdCByZXMgPSBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUsIHBhdGgpO1xuICAgIHNldCh0YXJnZXRPYmplY3QsIHByb3AsIHJlcyk7XG4gICAgaWYgKGlzRHJhZnQocmVzKSkge1xuICAgICAgcm9vdFNjb3BlLmNhbkF1dG9GcmVlemVfID0gZmFsc2U7XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAodGFyZ2V0SXNTZXQpIHtcbiAgICB0YXJnZXRPYmplY3QuYWRkKGNoaWxkVmFsdWUpO1xuICB9XG4gIGlmIChpc0RyYWZ0YWJsZShjaGlsZFZhbHVlKSAmJiAhaXNGcm96ZW4oY2hpbGRWYWx1ZSkpIHtcbiAgICBpZiAoIXJvb3RTY29wZS5pbW1lcl8uYXV0b0ZyZWV6ZV8gJiYgcm9vdFNjb3BlLnVuZmluYWxpemVkRHJhZnRzXyA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmluYWxpemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlKTtcbiAgICBpZiAoKCFwYXJlbnRTdGF0ZSB8fCAhcGFyZW50U3RhdGUuc2NvcGVfLnBhcmVudF8pICYmIHR5cGVvZiBwcm9wICE9PSBcInN5bWJvbFwiICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0YXJnZXRPYmplY3QsIHByb3ApKVxuICAgICAgbWF5YmVGcmVlemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlKTtcbiAgfVxufVxuZnVuY3Rpb24gbWF5YmVGcmVlemUoc2NvcGUsIHZhbHVlLCBkZWVwID0gZmFsc2UpIHtcbiAgaWYgKCFzY29wZS5wYXJlbnRfICYmIHNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiBzY29wZS5jYW5BdXRvRnJlZXplXykge1xuICAgIGZyZWV6ZSh2YWx1ZSwgZGVlcCk7XG4gIH1cbn1cblxuLy8gc3JjL2NvcmUvcHJveHkudHNcbmZ1bmN0aW9uIGNyZWF0ZVByb3h5UHJveHkoYmFzZSwgcGFyZW50KSB7XG4gIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGJhc2UpO1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICB0eXBlXzogaXNBcnJheSA/IDEgLyogQXJyYXkgKi8gOiAwIC8qIE9iamVjdCAqLyxcbiAgICAvLyBUcmFjayB3aGljaCBwcm9kdWNlIGNhbGwgdGhpcyBpcyBhc3NvY2lhdGVkIHdpdGguXG4gICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgLy8gVHJ1ZSBmb3IgYm90aCBzaGFsbG93IGFuZCBkZWVwIGNoYW5nZXMuXG4gICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAvLyBVc2VkIGR1cmluZyBmaW5hbGl6YXRpb24uXG4gICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgLy8gVHJhY2sgd2hpY2ggcHJvcGVydGllcyBoYXZlIGJlZW4gYXNzaWduZWQgKHRydWUpIG9yIGRlbGV0ZWQgKGZhbHNlKS5cbiAgICBhc3NpZ25lZF86IHt9LFxuICAgIC8vIFRoZSBwYXJlbnQgZHJhZnQgc3RhdGUuXG4gICAgcGFyZW50XzogcGFyZW50LFxuICAgIC8vIFRoZSBiYXNlIHN0YXRlLlxuICAgIGJhc2VfOiBiYXNlLFxuICAgIC8vIFRoZSBiYXNlIHByb3h5LlxuICAgIGRyYWZ0XzogbnVsbCxcbiAgICAvLyBzZXQgYmVsb3dcbiAgICAvLyBUaGUgYmFzZSBjb3B5IHdpdGggYW55IHVwZGF0ZWQgdmFsdWVzLlxuICAgIGNvcHlfOiBudWxsLFxuICAgIC8vIENhbGxlZCBieSB0aGUgYHByb2R1Y2VgIGZ1bmN0aW9uLlxuICAgIHJldm9rZV86IG51bGwsXG4gICAgaXNNYW51YWxfOiBmYWxzZVxuICB9O1xuICBsZXQgdGFyZ2V0ID0gc3RhdGU7XG4gIGxldCB0cmFwcyA9IG9iamVjdFRyYXBzO1xuICBpZiAoaXNBcnJheSkge1xuICAgIHRhcmdldCA9IFtzdGF0ZV07XG4gICAgdHJhcHMgPSBhcnJheVRyYXBzO1xuICB9XG4gIGNvbnN0IHsgcmV2b2tlLCBwcm94eSB9ID0gUHJveHkucmV2b2NhYmxlKHRhcmdldCwgdHJhcHMpO1xuICBzdGF0ZS5kcmFmdF8gPSBwcm94eTtcbiAgc3RhdGUucmV2b2tlXyA9IHJldm9rZTtcbiAgcmV0dXJuIHByb3h5O1xufVxudmFyIG9iamVjdFRyYXBzID0ge1xuICBnZXQoc3RhdGUsIHByb3ApIHtcbiAgICBpZiAocHJvcCA9PT0gRFJBRlRfU1RBVEUpXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgY29uc3Qgc291cmNlID0gbGF0ZXN0KHN0YXRlKTtcbiAgICBpZiAoIWhhcyhzb3VyY2UsIHByb3ApKSB7XG4gICAgICByZXR1cm4gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGUsIHNvdXJjZSwgcHJvcCk7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gc291cmNlW3Byb3BdO1xuICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBwZWVrKHN0YXRlLmJhc2VfLCBwcm9wKSkge1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfW3Byb3BdID0gY3JlYXRlUHJveHkodmFsdWUsIHN0YXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBoYXMoc3RhdGUsIHByb3ApIHtcbiAgICByZXR1cm4gcHJvcCBpbiBsYXRlc3Qoc3RhdGUpO1xuICB9LFxuICBvd25LZXlzKHN0YXRlKSB7XG4gICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyhsYXRlc3Qoc3RhdGUpKTtcbiAgfSxcbiAgc2V0KHN0YXRlLCBwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IGRlc2MgPSBnZXREZXNjcmlwdG9yRnJvbVByb3RvKGxhdGVzdChzdGF0ZSksIHByb3ApO1xuICAgIGlmIChkZXNjPy5zZXQpIHtcbiAgICAgIGRlc2Muc2V0LmNhbGwoc3RhdGUuZHJhZnRfLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQyID0gcGVlayhsYXRlc3Qoc3RhdGUpLCBwcm9wKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnQyPy5bRFJBRlRfU1RBVEVdO1xuICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUuYmFzZV8gPT09IHZhbHVlKSB7XG4gICAgICAgIHN0YXRlLmNvcHlfW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpcyh2YWx1ZSwgY3VycmVudDIpICYmICh2YWx1ZSAhPT0gdm9pZCAwIHx8IGhhcyhzdGF0ZS5iYXNlXywgcHJvcCkpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIHByZXBhcmVDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmNvcHlfW3Byb3BdID09PSB2YWx1ZSAmJiAvLyBzcGVjaWFsIGNhc2U6IGhhbmRsZSBuZXcgcHJvcHMgd2l0aCB2YWx1ZSAndW5kZWZpbmVkJ1xuICAgICh2YWx1ZSAhPT0gdm9pZCAwIHx8IHByb3AgaW4gc3RhdGUuY29weV8pIHx8IC8vIHNwZWNpYWwgY2FzZTogTmFOXG4gICAgTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNOYU4oc3RhdGUuY29weV9bcHJvcF0pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgc3RhdGUuY29weV9bcHJvcF0gPSB2YWx1ZTtcbiAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eShzdGF0ZSwgcHJvcCkge1xuICAgIGlmIChwZWVrKHN0YXRlLmJhc2VfLCBwcm9wKSAhPT0gdm9pZCAwIHx8IHByb3AgaW4gc3RhdGUuYmFzZV8pIHtcbiAgICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IGZhbHNlO1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgc3RhdGUuYXNzaWduZWRfW3Byb3BdO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY29weV8pIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZS5jb3B5X1twcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIC8vIE5vdGU6IFdlIG5ldmVyIGNvZXJjZSBgZGVzYy52YWx1ZWAgaW50byBhbiBJbW1lciBkcmFmdCwgYmVjYXVzZSB3ZSBjYW4ndCBtYWtlXG4gIC8vIHRoZSBzYW1lIGd1YXJhbnRlZSBpbiBFUzUgbW9kZS5cbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHN0YXRlLCBwcm9wKSB7XG4gICAgY29uc3Qgb3duZXIgPSBsYXRlc3Qoc3RhdGUpO1xuICAgIGNvbnN0IGRlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvd25lciwgcHJvcCk7XG4gICAgaWYgKCFkZXNjKVxuICAgICAgcmV0dXJuIGRlc2M7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiBzdGF0ZS50eXBlXyAhPT0gMSAvKiBBcnJheSAqLyB8fCBwcm9wICE9PSBcImxlbmd0aFwiLFxuICAgICAgZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgdmFsdWU6IG93bmVyW3Byb3BdXG4gICAgfTtcbiAgfSxcbiAgZGVmaW5lUHJvcGVydHkoKSB7XG4gICAgZGllKDExKTtcbiAgfSxcbiAgZ2V0UHJvdG90eXBlT2Yoc3RhdGUpIHtcbiAgICByZXR1cm4gZ2V0UHJvdG90eXBlT2Yoc3RhdGUuYmFzZV8pO1xuICB9LFxuICBzZXRQcm90b3R5cGVPZigpIHtcbiAgICBkaWUoMTIpO1xuICB9XG59O1xudmFyIGFycmF5VHJhcHMgPSB7fTtcbmVhY2gob2JqZWN0VHJhcHMsIChrZXksIGZuKSA9PiB7XG4gIGFycmF5VHJhcHNba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgIGFyZ3VtZW50c1swXSA9IGFyZ3VtZW50c1swXVswXTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0pO1xuYXJyYXlUcmFwcy5kZWxldGVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHN0YXRlLCBwcm9wKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNOYU4ocGFyc2VJbnQocHJvcCkpKVxuICAgIGRpZSgxMyk7XG4gIHJldHVybiBhcnJheVRyYXBzLnNldC5jYWxsKHRoaXMsIHN0YXRlLCBwcm9wLCB2b2lkIDApO1xufTtcbmFycmF5VHJhcHMuc2V0ID0gZnVuY3Rpb24oc3RhdGUsIHByb3AsIHZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJvcCAhPT0gXCJsZW5ndGhcIiAmJiBpc05hTihwYXJzZUludChwcm9wKSkpXG4gICAgZGllKDE0KTtcbiAgcmV0dXJuIG9iamVjdFRyYXBzLnNldC5jYWxsKHRoaXMsIHN0YXRlWzBdLCBwcm9wLCB2YWx1ZSwgc3RhdGVbMF0pO1xufTtcbmZ1bmN0aW9uIHBlZWsoZHJhZnQsIHByb3ApIHtcbiAgY29uc3Qgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG4gIGNvbnN0IHNvdXJjZSA9IHN0YXRlID8gbGF0ZXN0KHN0YXRlKSA6IGRyYWZ0O1xuICByZXR1cm4gc291cmNlW3Byb3BdO1xufVxuZnVuY3Rpb24gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGUsIHNvdXJjZSwgcHJvcCkge1xuICBjb25zdCBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApO1xuICByZXR1cm4gZGVzYyA/IGB2YWx1ZWAgaW4gZGVzYyA/IGRlc2MudmFsdWUgOiAoXG4gICAgLy8gVGhpcyBpcyBhIHZlcnkgc3BlY2lhbCBjYXNlLCBpZiB0aGUgcHJvcCBpcyBhIGdldHRlciBkZWZpbmVkIGJ5IHRoZVxuICAgIC8vIHByb3RvdHlwZSwgd2Ugc2hvdWxkIGludm9rZSBpdCB3aXRoIHRoZSBkcmFmdCBhcyBjb250ZXh0IVxuICAgIGRlc2MuZ2V0Py5jYWxsKHN0YXRlLmRyYWZ0XylcbiAgKSA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGdldERlc2NyaXB0b3JGcm9tUHJvdG8oc291cmNlLCBwcm9wKSB7XG4gIGlmICghKHByb3AgaW4gc291cmNlKSlcbiAgICByZXR1cm4gdm9pZCAwO1xuICBsZXQgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihzb3VyY2UpO1xuICB3aGlsZSAocHJvdG8pIHtcbiAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgcHJvcCk7XG4gICAgaWYgKGRlc2MpXG4gICAgICByZXR1cm4gZGVzYztcbiAgICBwcm90byA9IGdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufVxuZnVuY3Rpb24gbWFya0NoYW5nZWQoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICBzdGF0ZS5tb2RpZmllZF8gPSB0cnVlO1xuICAgIGlmIChzdGF0ZS5wYXJlbnRfKSB7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZS5wYXJlbnRfKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHByZXBhcmVDb3B5KHN0YXRlKSB7XG4gIGlmICghc3RhdGUuY29weV8pIHtcbiAgICBzdGF0ZS5jb3B5XyA9IHNoYWxsb3dDb3B5KFxuICAgICAgc3RhdGUuYmFzZV8sXG4gICAgICBzdGF0ZS5zY29wZV8uaW1tZXJfLnVzZVN0cmljdFNoYWxsb3dDb3B5X1xuICAgICk7XG4gIH1cbn1cblxuLy8gc3JjL2NvcmUvaW1tZXJDbGFzcy50c1xudmFyIEltbWVyMiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5hdXRvRnJlZXplXyA9IHRydWU7XG4gICAgdGhpcy51c2VTdHJpY3RTaGFsbG93Q29weV8gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgYHByb2R1Y2VgIGZ1bmN0aW9uIHRha2VzIGEgdmFsdWUgYW5kIGEgXCJyZWNpcGUgZnVuY3Rpb25cIiAod2hvc2VcbiAgICAgKiByZXR1cm4gdmFsdWUgb2Z0ZW4gZGVwZW5kcyBvbiB0aGUgYmFzZSBzdGF0ZSkuIFRoZSByZWNpcGUgZnVuY3Rpb24gaXNcbiAgICAgKiBmcmVlIHRvIG11dGF0ZSBpdHMgZmlyc3QgYXJndW1lbnQgaG93ZXZlciBpdCB3YW50cy4gQWxsIG11dGF0aW9ucyBhcmVcbiAgICAgKiBvbmx5IGV2ZXIgYXBwbGllZCB0byBhIF9fY29weV9fIG9mIHRoZSBiYXNlIHN0YXRlLlxuICAgICAqXG4gICAgICogUGFzcyBvbmx5IGEgZnVuY3Rpb24gdG8gY3JlYXRlIGEgXCJjdXJyaWVkIHByb2R1Y2VyXCIgd2hpY2ggcmVsaWV2ZXMgeW91XG4gICAgICogZnJvbSBwYXNzaW5nIHRoZSByZWNpcGUgZnVuY3Rpb24gZXZlcnkgdGltZS5cbiAgICAgKlxuICAgICAqIE9ubHkgcGxhaW4gb2JqZWN0cyBhbmQgYXJyYXlzIGFyZSBtYWRlIG11dGFibGUuIEFsbCBvdGhlciBvYmplY3RzIGFyZVxuICAgICAqIGNvbnNpZGVyZWQgdW5jb3B5YWJsZS5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRoaXMgZnVuY3Rpb24gaXMgX19ib3VuZF9fIHRvIGl0cyBgSW1tZXJgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGJhc2UgLSB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlY2lwZSAtIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSBwcm94eSBvZiB0aGUgYmFzZSBzdGF0ZSBhcyBmaXJzdCBhcmd1bWVudCBhbmQgd2hpY2ggY2FuIGJlIGZyZWVseSBtb2RpZmllZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHBhdGNoTGlzdGVuZXIgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggYWxsIHRoZSBwYXRjaGVzIHByb2R1Y2VkIGhlcmVcbiAgICAgKiBAcmV0dXJucyB7YW55fSBhIG5ldyBzdGF0ZSwgb3IgdGhlIGluaXRpYWwgc3RhdGUgaWYgbm90aGluZyB3YXMgbW9kaWZpZWRcbiAgICAgKi9cbiAgICB0aGlzLnByb2R1Y2UgPSAoYmFzZSwgcmVjaXBlLCBwYXRjaExpc3RlbmVyKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgcmVjaXBlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdEJhc2UgPSByZWNpcGU7XG4gICAgICAgIHJlY2lwZSA9IGJhc2U7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY3VycmllZFByb2R1Y2UoYmFzZTIgPSBkZWZhdWx0QmFzZSwgLi4uYXJncykge1xuICAgICAgICAgIHJldHVybiBzZWxmLnByb2R1Y2UoYmFzZTIsIChkcmFmdCkgPT4gcmVjaXBlLmNhbGwodGhpcywgZHJhZnQsIC4uLmFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVjaXBlICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGRpZSg2KTtcbiAgICAgIGlmIChwYXRjaExpc3RlbmVyICE9PSB2b2lkIDAgJiYgdHlwZW9mIHBhdGNoTGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZGllKDcpO1xuICAgICAgbGV0IHJlc3VsdDtcbiAgICAgIGlmIChpc0RyYWZ0YWJsZShiYXNlKSkge1xuICAgICAgICBjb25zdCBzY29wZSA9IGVudGVyU2NvcGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHByb3h5ID0gY3JlYXRlUHJveHkoYmFzZSwgdm9pZCAwKTtcbiAgICAgICAgbGV0IGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSByZWNpcGUocHJveHkpO1xuICAgICAgICAgIGhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGhhc0Vycm9yKVxuICAgICAgICAgICAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGxlYXZlU2NvcGUoc2NvcGUpO1xuICAgICAgICB9XG4gICAgICAgIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSk7XG4gICAgICB9IGVsc2UgaWYgKCFiYXNlIHx8IHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlY2lwZShiYXNlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKVxuICAgICAgICAgIHJlc3VsdCA9IGJhc2U7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IE5PVEhJTkcpXG4gICAgICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICBpZiAodGhpcy5hdXRvRnJlZXplXylcbiAgICAgICAgICBmcmVlemUocmVzdWx0LCB0cnVlKTtcbiAgICAgICAgaWYgKHBhdGNoTGlzdGVuZXIpIHtcbiAgICAgICAgICBjb25zdCBwID0gW107XG4gICAgICAgICAgY29uc3QgaXAgPSBbXTtcbiAgICAgICAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhiYXNlLCByZXN1bHQsIHAsIGlwKTtcbiAgICAgICAgICBwYXRjaExpc3RlbmVyKHAsIGlwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSBlbHNlXG4gICAgICAgIGRpZSgxLCBiYXNlKTtcbiAgICB9O1xuICAgIHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzID0gKGJhc2UsIHJlY2lwZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIChzdGF0ZSwgLi4uYXJncykgPT4gdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMoc3RhdGUsIChkcmFmdCkgPT4gYmFzZShkcmFmdCwgLi4uYXJncykpO1xuICAgICAgfVxuICAgICAgbGV0IHBhdGNoZXMsIGludmVyc2VQYXRjaGVzO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wcm9kdWNlKGJhc2UsIHJlY2lwZSwgKHAsIGlwKSA9PiB7XG4gICAgICAgIHBhdGNoZXMgPSBwO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcyA9IGlwO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gW3Jlc3VsdCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXNdO1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjb25maWc/LmF1dG9GcmVlemUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgdGhpcy5zZXRBdXRvRnJlZXplKGNvbmZpZy5hdXRvRnJlZXplKTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZz8udXNlU3RyaWN0U2hhbGxvd0NvcHkgPT09IFwiYm9vbGVhblwiKVxuICAgICAgdGhpcy5zZXRVc2VTdHJpY3RTaGFsbG93Q29weShjb25maWcudXNlU3RyaWN0U2hhbGxvd0NvcHkpO1xuICB9XG4gIGNyZWF0ZURyYWZ0KGJhc2UpIHtcbiAgICBpZiAoIWlzRHJhZnRhYmxlKGJhc2UpKVxuICAgICAgZGllKDgpO1xuICAgIGlmIChpc0RyYWZ0KGJhc2UpKVxuICAgICAgYmFzZSA9IGN1cnJlbnQoYmFzZSk7XG4gICAgY29uc3Qgc2NvcGUgPSBlbnRlclNjb3BlKHRoaXMpO1xuICAgIGNvbnN0IHByb3h5ID0gY3JlYXRlUHJveHkoYmFzZSwgdm9pZCAwKTtcbiAgICBwcm94eVtEUkFGVF9TVEFURV0uaXNNYW51YWxfID0gdHJ1ZTtcbiAgICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH1cbiAgZmluaXNoRHJhZnQoZHJhZnQsIHBhdGNoTGlzdGVuZXIpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGRyYWZ0ICYmIGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgICBpZiAoIXN0YXRlIHx8ICFzdGF0ZS5pc01hbnVhbF8pXG4gICAgICBkaWUoOSk7XG4gICAgY29uc3QgeyBzY29wZV86IHNjb3BlIH0gPSBzdGF0ZTtcbiAgICB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcik7XG4gICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQodm9pZCAwLCBzY29wZSk7XG4gIH1cbiAgLyoqXG4gICAqIFBhc3MgdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IGZyZWV6ZSBhbGwgY29waWVzIGNyZWF0ZWQgYnkgSW1tZXIuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGF1dG8tZnJlZXppbmcgaXMgZW5hYmxlZC5cbiAgICovXG4gIHNldEF1dG9GcmVlemUodmFsdWUpIHtcbiAgICB0aGlzLmF1dG9GcmVlemVfID0gdmFsdWU7XG4gIH1cbiAgLyoqXG4gICAqIFBhc3MgdHJ1ZSB0byBlbmFibGUgc3RyaWN0IHNoYWxsb3cgY29weS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgaW1tZXIgZG9lcyBub3QgY29weSB0aGUgb2JqZWN0IGRlc2NyaXB0b3JzIHN1Y2ggYXMgZ2V0dGVyLCBzZXR0ZXIgYW5kIG5vbi1lbnVtcmFibGUgcHJvcGVydGllcy5cbiAgICovXG4gIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5KHZhbHVlKSB7XG4gICAgdGhpcy51c2VTdHJpY3RTaGFsbG93Q29weV8gPSB2YWx1ZTtcbiAgfVxuICBhcHBseVBhdGNoZXMoYmFzZSwgcGF0Y2hlcykge1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IHBhdGNoZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IHBhdGNoID0gcGF0Y2hlc1tpXTtcbiAgICAgIGlmIChwYXRjaC5wYXRoLmxlbmd0aCA9PT0gMCAmJiBwYXRjaC5vcCA9PT0gXCJyZXBsYWNlXCIpIHtcbiAgICAgICAgYmFzZSA9IHBhdGNoLnZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgcGF0Y2hlcyA9IHBhdGNoZXMuc2xpY2UoaSArIDEpO1xuICAgIH1cbiAgICBjb25zdCBhcHBseVBhdGNoZXNJbXBsID0gZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5hcHBseVBhdGNoZXNfO1xuICAgIGlmIChpc0RyYWZ0KGJhc2UpKSB7XG4gICAgICByZXR1cm4gYXBwbHlQYXRjaGVzSW1wbChiYXNlLCBwYXRjaGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjZShcbiAgICAgIGJhc2UsXG4gICAgICAoZHJhZnQpID0+IGFwcGx5UGF0Y2hlc0ltcGwoZHJhZnQsIHBhdGNoZXMpXG4gICAgKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVByb3h5KHZhbHVlLCBwYXJlbnQpIHtcbiAgY29uc3QgZHJhZnQgPSBpc01hcCh2YWx1ZSkgPyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlNYXBfKHZhbHVlLCBwYXJlbnQpIDogaXNTZXQodmFsdWUpID8gZ2V0UGx1Z2luKFwiTWFwU2V0XCIpLnByb3h5U2V0Xyh2YWx1ZSwgcGFyZW50KSA6IGNyZWF0ZVByb3h5UHJveHkodmFsdWUsIHBhcmVudCk7XG4gIGNvbnN0IHNjb3BlID0gcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpO1xuICBzY29wZS5kcmFmdHNfLnB1c2goZHJhZnQpO1xuICByZXR1cm4gZHJhZnQ7XG59XG5cbi8vIHNyYy9jb3JlL2N1cnJlbnQudHNcbmZ1bmN0aW9uIGN1cnJlbnQodmFsdWUpIHtcbiAgaWYgKCFpc0RyYWZ0KHZhbHVlKSlcbiAgICBkaWUoMTAsIHZhbHVlKTtcbiAgcmV0dXJuIGN1cnJlbnRJbXBsKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGN1cnJlbnRJbXBsKHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdGFibGUodmFsdWUpIHx8IGlzRnJvemVuKHZhbHVlKSlcbiAgICByZXR1cm4gdmFsdWU7XG4gIGNvbnN0IHN0YXRlID0gdmFsdWVbRFJBRlRfU1RBVEVdO1xuICBsZXQgY29weTtcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pXG4gICAgICByZXR1cm4gc3RhdGUuYmFzZV87XG4gICAgc3RhdGUuZmluYWxpemVkXyA9IHRydWU7XG4gICAgY29weSA9IHNoYWxsb3dDb3B5KHZhbHVlLCBzdGF0ZS5zY29wZV8uaW1tZXJfLnVzZVN0cmljdFNoYWxsb3dDb3B5Xyk7XG4gIH0gZWxzZSB7XG4gICAgY29weSA9IHNoYWxsb3dDb3B5KHZhbHVlLCB0cnVlKTtcbiAgfVxuICBlYWNoKGNvcHksIChrZXksIGNoaWxkVmFsdWUpID0+IHtcbiAgICBzZXQoY29weSwga2V5LCBjdXJyZW50SW1wbChjaGlsZFZhbHVlKSk7XG4gIH0pO1xuICBpZiAoc3RhdGUpIHtcbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGNvcHk7XG59XG5cbi8vIHNyYy9wbHVnaW5zL3BhdGNoZXMudHNcbmZ1bmN0aW9uIGVuYWJsZVBhdGNoZXMoKSB7XG4gIGNvbnN0IGVycm9yT2Zmc2V0ID0gMTY7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBlcnJvcnMucHVzaChcbiAgICAgICdTZXRzIGNhbm5vdCBoYXZlIFwicmVwbGFjZVwiIHBhdGNoZXMuJyxcbiAgICAgIGZ1bmN0aW9uKG9wKSB7XG4gICAgICAgIHJldHVybiBcIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIgKyBvcDtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCBhcHBseSBwYXRjaCwgcGF0aCBkb2Vzbid0IHJlc29sdmU6IFwiICsgcGF0aDtcbiAgICAgIH0sXG4gICAgICBcIlBhdGNoaW5nIHJlc2VydmVkIGF0dHJpYnV0ZXMgbGlrZSBfX3Byb3RvX18sIHByb3RvdHlwZSBhbmQgY29uc3RydWN0b3IgaXMgbm90IGFsbG93ZWRcIlxuICAgICk7XG4gIH1cbiAgY29uc3QgUkVQTEFDRSA9IFwicmVwbGFjZVwiO1xuICBjb25zdCBBREQgPSBcImFkZFwiO1xuICBjb25zdCBSRU1PVkUgPSBcInJlbW92ZVwiO1xuICBmdW5jdGlvbiBnZW5lcmF0ZVBhdGNoZXNfKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBzd2l0Y2ggKHN0YXRlLnR5cGVfKSB7XG4gICAgICBjYXNlIDAgLyogT2JqZWN0ICovOlxuICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlUGF0Y2hlc0Zyb21Bc3NpZ25lZChcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICBwYXRjaGVzLFxuICAgICAgICAgIGludmVyc2VQYXRjaGVzXG4gICAgICAgICk7XG4gICAgICBjYXNlIDEgLyogQXJyYXkgKi86XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUFycmF5UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKTtcbiAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVNldFBhdGNoZXMoXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgICAgcGF0Y2hlcyxcbiAgICAgICAgICBpbnZlcnNlUGF0Y2hlc1xuICAgICAgICApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZUFycmF5UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgbGV0IHsgYmFzZV8sIGFzc2lnbmVkXyB9ID0gc3RhdGU7XG4gICAgbGV0IGNvcHlfID0gc3RhdGUuY29weV87XG4gICAgaWYgKGNvcHlfLmxlbmd0aCA8IGJhc2VfLmxlbmd0aCkge1xuICAgICAgO1xuICAgICAgW2Jhc2VfLCBjb3B5X10gPSBbY29weV8sIGJhc2VfXTtcbiAgICAgIFtwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc10gPSBbaW52ZXJzZVBhdGNoZXMsIHBhdGNoZXNdO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2VfLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXNzaWduZWRfW2ldICYmIGNvcHlfW2ldICE9PSBiYXNlX1tpXSkge1xuICAgICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICAvLyBOZWVkIHRvIG1heWJlIGNsb25lIGl0LCBhcyBpdCBjYW4gaW4gZmFjdCBiZSB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgICAvLyBkdWUgdG8gdGhlIGJhc2UvY29weSBpbnZlcnNpb24gYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9baV0pXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVQTEFDRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChiYXNlX1tpXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBiYXNlXy5sZW5ndGg7IGkgPCBjb3B5Xy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgb3A6IEFERCxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgLy8gTmVlZCB0byBtYXliZSBjbG9uZSBpdCwgYXMgaXQgY2FuIGluIGZhY3QgYmUgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgIC8vIGR1ZSB0byB0aGUgYmFzZS9jb3B5IGludmVyc2lvbiBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvblxuICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9baV0pXG4gICAgICB9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IGNvcHlfLmxlbmd0aCAtIDE7IGJhc2VfLmxlbmd0aCA8PSBpOyAtLWkpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICBwYXRoXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBjb25zdCB7IGJhc2VfLCBjb3B5XyB9ID0gc3RhdGU7XG4gICAgZWFjaChzdGF0ZS5hc3NpZ25lZF8sIChrZXksIGFzc2lnbmVkVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdWYWx1ZSA9IGdldChiYXNlXywga2V5KTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0KGNvcHlfLCBrZXkpO1xuICAgICAgY29uc3Qgb3AgPSAhYXNzaWduZWRWYWx1ZSA/IFJFTU9WRSA6IGhhcyhiYXNlXywga2V5KSA/IFJFUExBQ0UgOiBBREQ7XG4gICAgICBpZiAob3JpZ1ZhbHVlID09PSB2YWx1ZSAmJiBvcCA9PT0gUkVQTEFDRSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChrZXkpO1xuICAgICAgcGF0Y2hlcy5wdXNoKG9wID09PSBSRU1PVkUgPyB7IG9wLCBwYXRoIH0gOiB7IG9wLCBwYXRoLCB2YWx1ZSB9KTtcbiAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goXG4gICAgICAgIG9wID09PSBBREQgPyB7IG9wOiBSRU1PVkUsIHBhdGggfSA6IG9wID09PSBSRU1PVkUgPyB7IG9wOiBBREQsIHBhdGgsIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvcmlnVmFsdWUpIH0gOiB7IG9wOiBSRVBMQUNFLCBwYXRoLCB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob3JpZ1ZhbHVlKSB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlU2V0UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgbGV0IHsgYmFzZV8sIGNvcHlfIH0gPSBzdGF0ZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgYmFzZV8uZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGlmICghY29weV8uaGFzKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFTU9WRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy51bnNoaWZ0KHtcbiAgICAgICAgICBvcDogQURELFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfSk7XG4gICAgaSA9IDA7XG4gICAgY29weV8uZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGlmICghYmFzZV8uaGFzKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IEFERCxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy51bnNoaWZ0KHtcbiAgICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKGJhc2VWYWx1ZSwgcmVwbGFjZW1lbnQsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgcGF0aDogW10sXG4gICAgICB2YWx1ZTogcmVwbGFjZW1lbnQgPT09IE5PVEhJTkcgPyB2b2lkIDAgOiByZXBsYWNlbWVudFxuICAgIH0pO1xuICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICBwYXRoOiBbXSxcbiAgICAgIHZhbHVlOiBiYXNlVmFsdWVcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhcHBseVBhdGNoZXNfKGRyYWZ0LCBwYXRjaGVzKSB7XG4gICAgcGF0Y2hlcy5mb3JFYWNoKChwYXRjaCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoLCBvcCB9ID0gcGF0Y2g7XG4gICAgICBsZXQgYmFzZSA9IGRyYWZ0O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjb25zdCBwYXJlbnRUeXBlID0gZ2V0QXJjaHR5cGUoYmFzZSk7XG4gICAgICAgIGxldCBwID0gcGF0aFtpXTtcbiAgICAgICAgaWYgKHR5cGVvZiBwICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBwICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgcCA9IFwiXCIgKyBwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgocGFyZW50VHlwZSA9PT0gMCAvKiBPYmplY3QgKi8gfHwgcGFyZW50VHlwZSA9PT0gMSAvKiBBcnJheSAqLykgJiYgKHAgPT09IFwiX19wcm90b19fXCIgfHwgcCA9PT0gXCJjb25zdHJ1Y3RvclwiKSlcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIgJiYgcCA9PT0gXCJwcm90b3R5cGVcIilcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAzKTtcbiAgICAgICAgYmFzZSA9IGdldChiYXNlLCBwKTtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDIsIHBhdGguam9pbihcIi9cIikpO1xuICAgICAgfVxuICAgICAgY29uc3QgdHlwZSA9IGdldEFyY2h0eXBlKGJhc2UpO1xuICAgICAgY29uc3QgdmFsdWUgPSBkZWVwQ2xvbmVQYXRjaFZhbHVlKHBhdGNoLnZhbHVlKTtcbiAgICAgIGNvbnN0IGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgIHN3aXRjaCAob3ApIHtcbiAgICAgICAgY2FzZSBSRVBMQUNFOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgICAgICAgZGllKGVycm9yT2Zmc2V0KTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQUREOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxIC8qIEFycmF5ICovOlxuICAgICAgICAgICAgICByZXR1cm4ga2V5ID09PSBcIi1cIiA/IGJhc2UucHVzaCh2YWx1ZSkgOiBiYXNlLnNwbGljZShrZXksIDAsIHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmFkZCh2YWx1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIFJFTU9WRTpcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMSAvKiBBcnJheSAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc3BsaWNlKGtleSwgMSk7XG4gICAgICAgICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmRlbGV0ZShwYXRjaC52YWx1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlIGJhc2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMSwgb3ApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkcmFmdDtcbiAgfVxuICBmdW5jdGlvbiBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9iaikge1xuICAgIGlmICghaXNEcmFmdGFibGUob2JqKSlcbiAgICAgIHJldHVybiBvYmo7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSlcbiAgICAgIHJldHVybiBvYmoubWFwKGRlZXBDbG9uZVBhdGNoVmFsdWUpO1xuICAgIGlmIChpc01hcChvYmopKVxuICAgICAgcmV0dXJuIG5ldyBNYXAoXG4gICAgICAgIEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSkubWFwKChbaywgdl0pID0+IFtrLCBkZWVwQ2xvbmVQYXRjaFZhbHVlKHYpXSlcbiAgICAgICk7XG4gICAgaWYgKGlzU2V0KG9iaikpXG4gICAgICByZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKG9iaikubWFwKGRlZXBDbG9uZVBhdGNoVmFsdWUpKTtcbiAgICBjb25zdCBjbG9uZWQgPSBPYmplY3QuY3JlYXRlKGdldFByb3RvdHlwZU9mKG9iaikpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iailcbiAgICAgIGNsb25lZFtrZXldID0gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmpba2V5XSk7XG4gICAgaWYgKGhhcyhvYmosIERSQUZUQUJMRSkpXG4gICAgICBjbG9uZWRbRFJBRlRBQkxFXSA9IG9ialtEUkFGVEFCTEVdO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbiAgZnVuY3Rpb24gY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob2JqKSB7XG4gICAgaWYgKGlzRHJhZnQob2JqKSkge1xuICAgICAgcmV0dXJuIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKTtcbiAgICB9IGVsc2VcbiAgICAgIHJldHVybiBvYmo7XG4gIH1cbiAgbG9hZFBsdWdpbihcIlBhdGNoZXNcIiwge1xuICAgIGFwcGx5UGF0Y2hlc18sXG4gICAgZ2VuZXJhdGVQYXRjaGVzXyxcbiAgICBnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc19cbiAgfSk7XG59XG5cbi8vIHNyYy9wbHVnaW5zL21hcHNldC50c1xuZnVuY3Rpb24gZW5hYmxlTWFwU2V0KCkge1xuICBjbGFzcyBEcmFmdE1hcCBleHRlbmRzIE1hcCB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzW0RSQUZUX1NUQVRFXSA9IHtcbiAgICAgICAgdHlwZV86IDIgLyogTWFwICovLFxuICAgICAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgICAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgICAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAgICAgY29weV86IHZvaWQgMCxcbiAgICAgICAgYXNzaWduZWRfOiB2b2lkIDAsXG4gICAgICAgIGJhc2VfOiB0YXJnZXQsXG4gICAgICAgIGRyYWZ0XzogdGhpcyxcbiAgICAgICAgaXNNYW51YWxfOiBmYWxzZSxcbiAgICAgICAgcmV2b2tlZF86IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLnNpemU7XG4gICAgfVxuICAgIGhhcyhrZXkpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLmhhcyhrZXkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAoIWxhdGVzdChzdGF0ZSkuaGFzKGtleSkgfHwgbGF0ZXN0KHN0YXRlKS5nZXQoa2V5KSAhPT0gdmFsdWUpIHtcbiAgICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCB0cnVlKTtcbiAgICAgICAgc3RhdGUuY29weV8uc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgaWYgKHN0YXRlLmJhc2VfLmhhcyhrZXkpKSB7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5jb3B5Xy5kZWxldGUoa2V5KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKGxhdGVzdChzdGF0ZSkuc2l6ZSkge1xuICAgICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgICAgZWFjaChzdGF0ZS5iYXNlXywgKGtleSkgPT4ge1xuICAgICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3JFYWNoKGNiLCB0aGlzQXJnKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgbGF0ZXN0KHN0YXRlKS5mb3JFYWNoKChfdmFsdWUsIGtleSwgX21hcCkgPT4ge1xuICAgICAgICBjYi5jYWxsKHRoaXNBcmcsIHRoaXMuZ2V0KGtleSksIGtleSwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSk7XG4gICAgICBpZiAoc3RhdGUuZmluYWxpemVkXyB8fCAhaXNEcmFmdGFibGUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGUuYmFzZV8uZ2V0KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgZHJhZnQgPSBjcmVhdGVQcm94eSh2YWx1ZSwgc3RhdGUpO1xuICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgc3RhdGUuY29weV8uc2V0KGtleSwgZHJhZnQpO1xuICAgICAgcmV0dXJuIGRyYWZ0O1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkua2V5cygpO1xuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXMua2V5cygpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHRoaXMudmFsdWVzKCksXG4gICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCByID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChyLmRvbmUpXG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KHIudmFsdWUpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgZW50cmllcygpIHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpcy5rZXlzKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4gdGhpcy5lbnRyaWVzKCksXG4gICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCByID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChyLmRvbmUpXG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KHIudmFsdWUpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBbci52YWx1ZSwgdmFsdWVdXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgWyhEUkFGVF9TVEFURSwgU3ltYm9sLml0ZXJhdG9yKV0oKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHByb3h5TWFwXyh0YXJnZXQsIHBhcmVudCkge1xuICAgIHJldHVybiBuZXcgRHJhZnRNYXAodGFyZ2V0LCBwYXJlbnQpO1xuICB9XG4gIGZ1bmN0aW9uIHByZXBhcmVNYXBDb3B5KHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgc3RhdGUuYXNzaWduZWRfID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgIHN0YXRlLmNvcHlfID0gbmV3IE1hcChzdGF0ZS5iYXNlXyk7XG4gICAgfVxuICB9XG4gIGNsYXNzIERyYWZ0U2V0IGV4dGVuZHMgU2V0IHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuICAgICAgICB0eXBlXzogMyAvKiBTZXQgKi8sXG4gICAgICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAgICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgICAgICBjb3B5Xzogdm9pZCAwLFxuICAgICAgICBiYXNlXzogdGFyZ2V0LFxuICAgICAgICBkcmFmdF86IHRoaXMsXG4gICAgICAgIGRyYWZ0c186IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksXG4gICAgICAgIHJldm9rZWRfOiBmYWxzZSxcbiAgICAgICAgaXNNYW51YWxfOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5zaXplO1xuICAgIH1cbiAgICBoYXModmFsdWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgICByZXR1cm4gc3RhdGUuYmFzZV8uaGFzKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5jb3B5Xy5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChzdGF0ZS5kcmFmdHNfLmhhcyh2YWx1ZSkgJiYgc3RhdGUuY29weV8uaGFzKHN0YXRlLmRyYWZ0c18uZ2V0KHZhbHVlKSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhZGQodmFsdWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmFkZCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVsZXRlKHZhbHVlKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5Xy5kZWxldGUodmFsdWUpIHx8IChzdGF0ZS5kcmFmdHNfLmhhcyh2YWx1ZSkgPyBzdGF0ZS5jb3B5Xy5kZWxldGUoc3RhdGUuZHJhZnRzXy5nZXQodmFsdWUpKSA6IChcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgZmFsc2VcbiAgICAgICkpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKGxhdGVzdChzdGF0ZSkuc2l6ZSkge1xuICAgICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuY29weV8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWVzKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8udmFsdWVzKCk7XG4gICAgfVxuICAgIGVudHJpZXMoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5Xy5lbnRyaWVzKCk7XG4gICAgfVxuICAgIGtleXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9XG4gICAgWyhEUkFGVF9TVEFURSwgU3ltYm9sLml0ZXJhdG9yKV0oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9XG4gICAgZm9yRWFjaChjYiwgdGhpc0FyZykge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLnZhbHVlcygpO1xuICAgICAgbGV0IHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgY2IuY2FsbCh0aGlzQXJnLCByZXN1bHQudmFsdWUsIHJlc3VsdC52YWx1ZSwgdGhpcyk7XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHJveHlTZXRfKHRhcmdldCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFmdFNldCh0YXJnZXQsIHBhcmVudCk7XG4gIH1cbiAgZnVuY3Rpb24gcHJlcGFyZVNldENvcHkoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICBzdGF0ZS5jb3B5XyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgICBzdGF0ZS5iYXNlXy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoaXNEcmFmdGFibGUodmFsdWUpKSB7XG4gICAgICAgICAgY29uc3QgZHJhZnQgPSBjcmVhdGVQcm94eSh2YWx1ZSwgc3RhdGUpO1xuICAgICAgICAgIHN0YXRlLmRyYWZ0c18uc2V0KHZhbHVlLCBkcmFmdCk7XG4gICAgICAgICAgc3RhdGUuY29weV8uYWRkKGRyYWZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYXNzZXJ0VW5yZXZva2VkKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLnJldm9rZWRfKVxuICAgICAgZGllKDMsIEpTT04uc3RyaW5naWZ5KGxhdGVzdChzdGF0ZSkpKTtcbiAgfVxuICBsb2FkUGx1Z2luKFwiTWFwU2V0XCIsIHsgcHJveHlNYXBfLCBwcm94eVNldF8gfSk7XG59XG5cbi8vIHNyYy9pbW1lci50c1xudmFyIGltbWVyID0gbmV3IEltbWVyMigpO1xudmFyIHByb2R1Y2UgPSBpbW1lci5wcm9kdWNlO1xudmFyIHByb2R1Y2VXaXRoUGF0Y2hlcyA9IGltbWVyLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKFxuICBpbW1lclxuKTtcbnZhciBzZXRBdXRvRnJlZXplID0gaW1tZXIuc2V0QXV0b0ZyZWV6ZS5iaW5kKGltbWVyKTtcbnZhciBzZXRVc2VTdHJpY3RTaGFsbG93Q29weSA9IGltbWVyLnNldFVzZVN0cmljdFNoYWxsb3dDb3B5LmJpbmQoaW1tZXIpO1xudmFyIGFwcGx5UGF0Y2hlcyA9IGltbWVyLmFwcGx5UGF0Y2hlcy5iaW5kKGltbWVyKTtcbnZhciBjcmVhdGVEcmFmdCA9IGltbWVyLmNyZWF0ZURyYWZ0LmJpbmQoaW1tZXIpO1xudmFyIGZpbmlzaERyYWZ0ID0gaW1tZXIuZmluaXNoRHJhZnQuYmluZChpbW1lcik7XG5mdW5jdGlvbiBjYXN0RHJhZnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY2FzdEltbXV0YWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgSW1tZXIsXG4gIGFwcGx5UGF0Y2hlcyxcbiAgY2FzdERyYWZ0LFxuICBjYXN0SW1tdXRhYmxlLFxuICBjcmVhdGVEcmFmdCxcbiAgY3VycmVudCxcbiAgZW5hYmxlTWFwU2V0LFxuICBlbmFibGVQYXRjaGVzLFxuICBmaW5pc2hEcmFmdCxcbiAgZnJlZXplLFxuICBpbW1lcmFibGUsXG4gIGlzRHJhZnQsXG4gIGlzRHJhZnRhYmxlLFxuICBub3RoaW5nLFxuICBvcmlnaW5hbCxcbiAgcHJvZHVjZSxcbiAgcHJvZHVjZVdpdGhQYXRjaGVzLFxuICBzZXRBdXRvRnJlZXplLFxuICBzZXRVc2VTdHJpY3RTaGFsbG93Q29weVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbW1lci5janMuZGV2ZWxvcG1lbnQuanMubWFwIiwiXG4ndXNlIHN0cmljdCdcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ltbWVyLmNqcy5wcm9kdWN0aW9uLmpzJylcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbW1lci5janMuZGV2ZWxvcG1lbnQuanMnKVxufSIsInZhciBlPXJlcXVpcmUoXCJpbW1lclwiKSxyPXJlcXVpcmUoXCJyZWFjdFwiKTtleHBvcnRzLnVzZUltbWVyPWZ1bmN0aW9uKHUpe3ZhciBuPXIudXNlU3RhdGUoZnVuY3Rpb24oKXtyZXR1cm4gZS5mcmVlemUoXCJmdW5jdGlvblwiPT10eXBlb2YgdT91KCk6dSwhMCl9KSx0PW5bMV07cmV0dXJuW25bMF0sci51c2VDYWxsYmFjayhmdW5jdGlvbihyKXt0KFwiZnVuY3Rpb25cIj09dHlwZW9mIHI/ZS5wcm9kdWNlKHIpOmUuZnJlZXplKHIpKX0sW10pXX0sZXhwb3J0cy51c2VJbW1lclJlZHVjZXI9ZnVuY3Rpb24odSxuLHQpe3ZhciBvPXIudXNlTWVtbyhmdW5jdGlvbigpe3JldHVybiBlLnByb2R1Y2UodSl9LFt1XSk7cmV0dXJuIHIudXNlUmVkdWNlcihvLG4sdCl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWltbWVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZlcnNpb24gPSBleHBvcnRzLnZhbGlkYXRlID0gZXhwb3J0cy52NyA9IGV4cG9ydHMudjZUb1YxID0gZXhwb3J0cy52NiA9IGV4cG9ydHMudjUgPSBleHBvcnRzLnY0ID0gZXhwb3J0cy52MyA9IGV4cG9ydHMudjFUb1Y2ID0gZXhwb3J0cy52MSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gZXhwb3J0cy5wYXJzZSA9IGV4cG9ydHMuTklMID0gZXhwb3J0cy5NQVggPSB2b2lkIDA7XG52YXIgbWF4X2pzXzEgPSByZXF1aXJlKFwiLi9tYXguanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNQVhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1heF9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgbmlsX2pzXzEgPSByZXF1aXJlKFwiLi9uaWwuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOSUxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5pbF9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBhcnNlX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0cmluZ2lmeVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RyaW5naWZ5X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2MV9qc18xID0gcmVxdWlyZShcIi4vdjEuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjFfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHYxVG9WNl9qc18xID0gcmVxdWlyZShcIi4vdjFUb1Y2LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFUb1Y2XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MVRvVjZfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHYzX2pzXzEgPSByZXF1aXJlKFwiLi92My5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2M19qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjRfanNfMSA9IHJlcXVpcmUoXCIuL3Y0LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY0X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2NV9qc18xID0gcmVxdWlyZShcIi4vdjUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjVfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY2X2pzXzEgPSByZXF1aXJlKFwiLi92Ni5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2Nl9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjZUb1YxX2pzXzEgPSByZXF1aXJlKFwiLi92NlRvVjEuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NlRvVjFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY2VG9WMV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjdfanNfMSA9IHJlcXVpcmUoXCIuL3Y3LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY3X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsaWRhdGVfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHZlcnNpb25fanNfMSA9IHJlcXVpcmUoXCIuL3ZlcnNpb24uanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2ZXJzaW9uX2pzXzEuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gJ2ZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZic7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICAgIGNvbnN0IHdvcmRzID0gdWludDhUb1VpbnQzMihieXRlcyk7XG4gICAgY29uc3QgbWQ1Qnl0ZXMgPSB3b3Jkc1RvTWQ1KHdvcmRzLCBieXRlcy5sZW5ndGggKiA4KTtcbiAgICByZXR1cm4gdWludDMyVG9VaW50OChtZDVCeXRlcyk7XG59XG5mdW5jdGlvbiB1aW50MzJUb1VpbnQ4KGlucHV0KSB7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShpbnB1dC5sZW5ndGggKiA0KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aCAqIDQ7IGkrKykge1xuICAgICAgICBieXRlc1tpXSA9IChpbnB1dFtpID4+IDJdID4+PiAoKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn1cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgICByZXR1cm4gKCgoaW5wdXRMZW5ndGg4ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0ICsgMTtcbn1cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gICAgY29uc3QgeHBhZCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuKSkuZmlsbCgwKTtcbiAgICB4cGFkLnNldCh4KTtcbiAgICB4cGFkW2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICAgIHhwYWRbeHBhZC5sZW5ndGggLSAxXSA9IGxlbjtcbiAgICB4ID0geHBhZDtcbiAgICBsZXQgYSA9IDE3MzI1ODQxOTM7XG4gICAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICAgIGxldCBjID0gLTE3MzI1ODQxOTQ7XG4gICAgbGV0IGQgPSAyNzE3MzM4Nzg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgICAgICBjb25zdCBvbGRhID0gYTtcbiAgICAgICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgICAgIGNvbnN0IG9sZGMgPSBjO1xuICAgICAgICBjb25zdCBvbGRkID0gZDtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgICAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICAgICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgICAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgICB9XG4gICAgcmV0dXJuIFVpbnQzMkFycmF5Lm9mKGEsIGIsIGMsIGQpO1xufVxuZnVuY3Rpb24gdWludDhUb1VpbnQzMihpbnB1dCkge1xuICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheSgpO1xuICAgIH1cbiAgICBjb25zdCBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGlucHV0Lmxlbmd0aCAqIDgpKS5maWxsKDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3V0cHV0W2kgPj4gMl0gfD0gKGlucHV0W2ldICYgMHhmZikgPDwgKChpICUgNCkgKiA4KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICAgIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgICBjb25zdCBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhmZmZmKTtcbn1cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgICByZXR1cm4gKG51bSA8PCBjbnQpIHwgKG51bSA+Pj4gKDMyIC0gY250KSk7XG59XG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICAgIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oKGIgJiBjKSB8ICh+YiAmIGQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKChiICYgZCkgfCAoYyAmIH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1kNTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHsgcmFuZG9tVVVJRCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICAgIGlmICghKDAsIHZhbGlkYXRlX2pzXzEuZGVmYXVsdCkodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgICB9XG4gICAgbGV0IHY7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNCwgKHYgPj4+IDE2KSAmIDB4ZmYsICh2ID4+PiA4KSAmIDB4ZmYsIHYgJiAweGZmLCAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4LCB2ICYgMHhmZiwgKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDgsIHYgJiAweGZmLCAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gOCwgdiAmIDB4ZmYsICgodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDApICYgMHhmZiwgKHYgLyAweDEwMDAwMDAwMCkgJiAweGZmLCAodiA+Pj4gMjQpICYgMHhmZiwgKHYgPj4+IDE2KSAmIDB4ZmYsICh2ID4+PiA4KSAmIDB4ZmYsIHYgJiAweGZmKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5mdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcm5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgICBzd2l0Y2ggKHMpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuICh4ICYgeSkgXiAofnggJiB6KTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuICh4ICYgeSkgXiAoeCAmIHopIF4gKHkgJiB6KTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgICB9XG59XG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgICByZXR1cm4gKHggPDwgbikgfCAoeCA+Pj4gKDMyIC0gbikpO1xufVxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICAgIGNvbnN0IEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gICAgY29uc3QgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcbiAgICBjb25zdCBuZXdCeXRlcyA9IG5ldyBVaW50OEFycmF5KGJ5dGVzLmxlbmd0aCArIDEpO1xuICAgIG5ld0J5dGVzLnNldChieXRlcyk7XG4gICAgbmV3Qnl0ZXNbYnl0ZXMubGVuZ3RoXSA9IDB4ODA7XG4gICAgYnl0ZXMgPSBuZXdCeXRlcztcbiAgICBjb25zdCBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gICAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICAgIGNvbnN0IE0gPSBuZXcgQXJyYXkoTik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICAgICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICAgICAgICBhcnJbal0gPVxuICAgICAgICAgICAgICAgIChieXRlc1tpICogNjQgKyBqICogNF0gPDwgMjQpIHxcbiAgICAgICAgICAgICAgICAgICAgKGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYpIHxcbiAgICAgICAgICAgICAgICAgICAgKGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCkgfFxuICAgICAgICAgICAgICAgICAgICBieXRlc1tpICogNjQgKyBqICogNCArIDNdO1xuICAgICAgICB9XG4gICAgICAgIE1baV0gPSBhcnI7XG4gICAgfVxuICAgIE1bTiAtIDFdWzE0XSA9ICgoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4KSAvIE1hdGgucG93KDIsIDMyKTtcbiAgICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gICAgTVtOIC0gMV1bMTVdID0gKChieXRlcy5sZW5ndGggLSAxKSAqIDgpICYgMHhmZmZmZmZmZjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgICAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICAgICAgICBXW3RdID0gTVtpXVt0XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB0ID0gMTY7IHQgPCA4MDsgKyt0KSB7XG4gICAgICAgICAgICBXW3RdID0gUk9UTChXW3QgLSAzXSBeIFdbdCAtIDhdIF4gV1t0IC0gMTRdIF4gV1t0IC0gMTZdLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYSA9IEhbMF07XG4gICAgICAgIGxldCBiID0gSFsxXTtcbiAgICAgICAgbGV0IGMgPSBIWzJdO1xuICAgICAgICBsZXQgZCA9IEhbM107XG4gICAgICAgIGxldCBlID0gSFs0XTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCA4MDsgKyt0KSB7XG4gICAgICAgICAgICBjb25zdCBzID0gTWF0aC5mbG9vcih0IC8gMjApO1xuICAgICAgICAgICAgY29uc3QgVCA9IChST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSkgPj4+IDA7XG4gICAgICAgICAgICBlID0gZDtcbiAgICAgICAgICAgIGQgPSBjO1xuICAgICAgICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgICAgICAgYiA9IGE7XG4gICAgICAgICAgICBhID0gVDtcbiAgICAgICAgfVxuICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSA+Pj4gMDtcbiAgICAgICAgSFsxXSA9IChIWzFdICsgYikgPj4+IDA7XG4gICAgICAgIEhbMl0gPSAoSFsyXSArIGMpID4+PiAwO1xuICAgICAgICBIWzNdID0gKEhbM10gKyBkKSA+Pj4gMDtcbiAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgPj4+IDA7XG4gICAgfVxuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKEhbMF0gPj4gMjQsIEhbMF0gPj4gMTYsIEhbMF0gPj4gOCwgSFswXSwgSFsxXSA+PiAyNCwgSFsxXSA+PiAxNiwgSFsxXSA+PiA4LCBIWzFdLCBIWzJdID4+IDI0LCBIWzJdID4+IDE2LCBIWzJdID4+IDgsIEhbMl0sIEhbM10gPj4gMjQsIEhbM10gPj4gMTYsIEhbM10gPj4gOCwgSFszXSwgSFs0XSA+PiAyNCwgSFs0XSA+PiAxNiwgSFs0XSA+PiA4LCBIWzRdKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHNoYTE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudW5zYWZlU3RyaW5naWZ5ID0gdm9pZCAwO1xuY29uc3QgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB1bnNhZmVTdHJpbmdpZnk7XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gICAgaWYgKCEoMCwgdmFsaWRhdGVfanNfMS5kZWZhdWx0KSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ2lmeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cGRhdGVWMVN0YXRlID0gdm9pZCAwO1xuY29uc3Qgcm5nX2pzXzEgPSByZXF1aXJlKFwiLi9ybmcuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmNvbnN0IF9zdGF0ZSA9IHt9O1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBsZXQgYnl0ZXM7XG4gICAgY29uc3QgaXNWNiA9IG9wdGlvbnM/Ll92NiA/PyBmYWxzZTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHRpb25zS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9uc0tleXMubGVuZ3RoID09PSAxICYmIG9wdGlvbnNLZXlzWzBdID09PSAnX3Y2Jykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBieXRlcyA9IHYxQnl0ZXMob3B0aW9ucy5yYW5kb20gPz8gb3B0aW9ucy5ybmc/LigpID8/ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpLCBvcHRpb25zLm1zZWNzLCBvcHRpb25zLm5zZWNzLCBvcHRpb25zLmNsb2Nrc2VxLCBvcHRpb25zLm5vZGUsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHJuZHMgPSAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKTtcbiAgICAgICAgdXBkYXRlVjFTdGF0ZShfc3RhdGUsIG5vdywgcm5kcyk7XG4gICAgICAgIGJ5dGVzID0gdjFCeXRlcyhybmRzLCBfc3RhdGUubXNlY3MsIF9zdGF0ZS5uc2VjcywgaXNWNiA/IHVuZGVmaW5lZCA6IF9zdGF0ZS5jbG9ja3NlcSwgaXNWNiA/IHVuZGVmaW5lZCA6IF9zdGF0ZS5ub2RlLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIHJldHVybiBidWYgPz8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZnVuY3Rpb24gdXBkYXRlVjFTdGF0ZShzdGF0ZSwgbm93LCBybmRzKSB7XG4gICAgc3RhdGUubXNlY3MgPz89IC1JbmZpbml0eTtcbiAgICBzdGF0ZS5uc2VjcyA/Pz0gMDtcbiAgICBpZiAobm93ID09PSBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5uc2VjcysrO1xuICAgICAgICBpZiAoc3RhdGUubnNlY3MgPj0gMTAwMDApIHtcbiAgICAgICAgICAgIHN0YXRlLm5vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzdGF0ZS5uc2VjcyA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm93ID4gc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUubnNlY3MgPSAwO1xuICAgIH1cbiAgICBlbHNlIGlmIChub3cgPCBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5ub2RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoIXN0YXRlLm5vZGUpIHtcbiAgICAgICAgc3RhdGUubm9kZSA9IHJuZHMuc2xpY2UoMTAsIDE2KTtcbiAgICAgICAgc3RhdGUubm9kZVswXSB8PSAweDAxO1xuICAgICAgICBzdGF0ZS5jbG9ja3NlcSA9ICgocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV0pICYgMHgzZmZmO1xuICAgIH1cbiAgICBzdGF0ZS5tc2VjcyA9IG5vdztcbiAgICByZXR1cm4gc3RhdGU7XG59XG5leHBvcnRzLnVwZGF0ZVYxU3RhdGUgPSB1cGRhdGVWMVN0YXRlO1xuZnVuY3Rpb24gdjFCeXRlcyhybmRzLCBtc2VjcywgbnNlY3MsIGNsb2Nrc2VxLCBub2RlLCBidWYsIG9mZnNldCA9IDApIHtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBpZiAoIWJ1Zikge1xuICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbXNlY3MgPz89IERhdGUubm93KCk7XG4gICAgbnNlY3MgPz89IDA7XG4gICAgY2xvY2tzZXEgPz89ICgocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV0pICYgMHgzZmZmO1xuICAgIG5vZGUgPz89IHJuZHMuc2xpY2UoMTAsIDE2KTtcbiAgICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcbiAgICBjb25zdCB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRsID4+PiAyNCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodGwgPj4+IDE2KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bCA+Pj4gOCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSB0bCAmIDB4ZmY7XG4gICAgY29uc3QgdG1oID0gKChtc2VjcyAvIDB4MTAwMDAwMDAwKSAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRtaCA+Pj4gOCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSB0bWggJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoKHRtaCA+Pj4gMjQpICYgMHhmKSB8IDB4MTA7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bWggPj4+IDE2KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChjbG9ja3NlcSA+Pj4gOCkgfCAweDgwO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICAgICAgYnVmW29mZnNldCsrXSA9IG5vZGVbbl07XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2MTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiB2MVRvVjYodXVpZCkge1xuICAgIGNvbnN0IHYxQnl0ZXMgPSB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KSh1dWlkKSA6IHV1aWQ7XG4gICAgY29uc3QgdjZCeXRlcyA9IF92MVRvVjYodjFCeXRlcyk7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKHY2Qnl0ZXMpIDogdjZCeXRlcztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHYxVG9WNjtcbmZ1bmN0aW9uIF92MVRvVjYodjFCeXRlcykge1xuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKCgodjFCeXRlc1s2XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzddID4+IDQpICYgMHgwZiksICgodjFCeXRlc1s3XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzRdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1s0XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzVdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1s1XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzBdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1swXSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzFdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1sxXSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzJdICYgMHhmMCkgPj4gNCksIDB4NjAgfCAodjFCeXRlc1syXSAmIDB4MGYpLCB2MUJ5dGVzWzNdLCB2MUJ5dGVzWzhdLCB2MUJ5dGVzWzldLCB2MUJ5dGVzWzEwXSwgdjFCeXRlc1sxMV0sIHYxQnl0ZXNbMTJdLCB2MUJ5dGVzWzEzXSwgdjFCeXRlc1sxNF0sIHYxQnl0ZXNbMTVdKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmNvbnN0IG1kNV9qc18xID0gcmVxdWlyZShcIi4vbWQ1LmpzXCIpO1xuY29uc3QgdjM1X2pzXzEgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG52YXIgdjM1X2pzXzIgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJETlNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLkROUzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlVSTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuVVJMOyB9IH0pO1xuZnVuY3Rpb24gdjModmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gKDAsIHYzNV9qc18xLmRlZmF1bHQpKDB4MzAsIG1kNV9qc18xLmRlZmF1bHQsIHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KTtcbn1cbnYzLkROUyA9IHYzNV9qc18xLkROUztcbnYzLlVSTCA9IHYzNV9qc18xLlVSTDtcbmV4cG9ydHMuZGVmYXVsdCA9IHYzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gZXhwb3J0cy5zdHJpbmdUb0J5dGVzID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICAgIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KHN0ci5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGJ5dGVzW2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn1cbmV4cG9ydHMuc3RyaW5nVG9CeXRlcyA9IHN0cmluZ1RvQnl0ZXM7XG5leHBvcnRzLkROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0cy5VUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmZ1bmN0aW9uIHYzNSh2ZXJzaW9uLCBoYXNoLCB2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIGNvbnN0IHZhbHVlQnl0ZXMgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gc3RyaW5nVG9CeXRlcyh2YWx1ZSkgOiB2YWx1ZTtcbiAgICBjb25zdCBuYW1lc3BhY2VCeXRlcyA9IHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnID8gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkobmFtZXNwYWNlKSA6IG5hbWVzcGFjZTtcbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmFtZXNwYWNlID0gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkobmFtZXNwYWNlKTtcbiAgICB9XG4gICAgaWYgKG5hbWVzcGFjZT8ubGVuZ3RoICE9PSAxNikge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ05hbWVzcGFjZSBtdXN0IGJlIGFycmF5LWxpa2UgKDE2IGl0ZXJhYmxlIGludGVnZXIgdmFsdWVzLCAwLTI1NSknKTtcbiAgICB9XG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZUJ5dGVzLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZUJ5dGVzKTtcbiAgICBieXRlcy5zZXQodmFsdWVCeXRlcywgbmFtZXNwYWNlQnl0ZXMubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2goYnl0ZXMpO1xuICAgIGJ5dGVzWzZdID0gKGJ5dGVzWzZdICYgMHgwZikgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gKGJ5dGVzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHYzNTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbmF0aXZlX2pzXzEgPSByZXF1aXJlKFwiLi9uYXRpdmUuanNcIik7XG5jb25zdCBybmdfanNfMSA9IHJlcXVpcmUoXCIuL3JuZy5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAobmF0aXZlX2pzXzEuZGVmYXVsdC5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZV9qc18xLmRlZmF1bHQucmFuZG9tVVVJRCgpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gPz8gb3B0aW9ucy5ybmc/LigpID8/ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpO1xuICAgIGlmIChybmRzLmxlbmd0aCA8IDE2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZG9tIGJ5dGVzIGxlbmd0aCBtdXN0IGJlID49IDE2Jyk7XG4gICAgfVxuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMTYgPiBidWYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVVVJRCBieXRlIHJhbmdlICR7b2Zmc2V0fToke29mZnNldCArIDE1fSBpcyBvdXQgb2YgYnVmZmVyIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmNvbnN0IHNoYTFfanNfMSA9IHJlcXVpcmUoXCIuL3NoYTEuanNcIik7XG5jb25zdCB2MzVfanNfMSA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbnZhciB2MzVfanNfMiA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkROU1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuRE5TOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVVJMXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5VUkw7IH0gfSk7XG5mdW5jdGlvbiB2NSh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHJldHVybiAoMCwgdjM1X2pzXzEuZGVmYXVsdCkoMHg1MCwgc2hhMV9qc18xLmRlZmF1bHQsIHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KTtcbn1cbnY1LkROUyA9IHYzNV9qc18xLkROUztcbnY1LlVSTCA9IHYzNV9qc18xLlVSTDtcbmV4cG9ydHMuZGVmYXVsdCA9IHY1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmNvbnN0IHYxX2pzXzEgPSByZXF1aXJlKFwiLi92MS5qc1wiKTtcbmNvbnN0IHYxVG9WNl9qc18xID0gcmVxdWlyZShcIi4vdjFUb1Y2LmpzXCIpO1xuZnVuY3Rpb24gdjYob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBvcHRpb25zID8/PSB7fTtcbiAgICBvZmZzZXQgPz89IDA7XG4gICAgbGV0IGJ5dGVzID0gKDAsIHYxX2pzXzEuZGVmYXVsdCkoeyAuLi5vcHRpb25zLCBfdjY6IHRydWUgfSwgbmV3IFVpbnQ4QXJyYXkoMTYpKTtcbiAgICBieXRlcyA9ICgwLCB2MVRvVjZfanNfMS5kZWZhdWx0KShieXRlcyk7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiB2NlRvVjEodXVpZCkge1xuICAgIGNvbnN0IHY2Qnl0ZXMgPSB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KSh1dWlkKSA6IHV1aWQ7XG4gICAgY29uc3QgdjFCeXRlcyA9IF92NlRvVjEodjZCeXRlcyk7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKHYxQnl0ZXMpIDogdjFCeXRlcztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY2VG9WMTtcbmZ1bmN0aW9uIF92NlRvVjEodjZCeXRlcykge1xuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKCgodjZCeXRlc1szXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzRdID4+IDQpICYgMHgwZiksICgodjZCeXRlc1s0XSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzVdICYgMHhmMCkgPj4gNCksICgodjZCeXRlc1s1XSAmIDB4MGYpIDw8IDQpIHwgKHY2Qnl0ZXNbNl0gJiAweDBmKSwgdjZCeXRlc1s3XSwgKCh2NkJ5dGVzWzFdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbMl0gJiAweGYwKSA+PiA0KSwgKCh2NkJ5dGVzWzJdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbM10gJiAweGYwKSA+PiA0KSwgMHgxMCB8ICgodjZCeXRlc1swXSAmIDB4ZjApID4+IDQpLCAoKHY2Qnl0ZXNbMF0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1sxXSAmIDB4ZjApID4+IDQpLCB2NkJ5dGVzWzhdLCB2NkJ5dGVzWzldLCB2NkJ5dGVzWzEwXSwgdjZCeXRlc1sxMV0sIHY2Qnl0ZXNbMTJdLCB2NkJ5dGVzWzEzXSwgdjZCeXRlc1sxNF0sIHY2Qnl0ZXNbMTVdKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cGRhdGVWN1N0YXRlID0gdm9pZCAwO1xuY29uc3Qgcm5nX2pzXzEgPSByZXF1aXJlKFwiLi9ybmcuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmNvbnN0IF9zdGF0ZSA9IHt9O1xuZnVuY3Rpb24gdjcob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBsZXQgYnl0ZXM7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgYnl0ZXMgPSB2N0J5dGVzKG9wdGlvbnMucmFuZG9tID8/IG9wdGlvbnMucm5nPy4oKSA/PyAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKSwgb3B0aW9ucy5tc2Vjcywgb3B0aW9ucy5zZXEsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHJuZHMgPSAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKTtcbiAgICAgICAgdXBkYXRlVjdTdGF0ZShfc3RhdGUsIG5vdywgcm5kcyk7XG4gICAgICAgIGJ5dGVzID0gdjdCeXRlcyhybmRzLCBfc3RhdGUubXNlY3MsIF9zdGF0ZS5zZXEsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZiA/PyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5mdW5jdGlvbiB1cGRhdGVWN1N0YXRlKHN0YXRlLCBub3csIHJuZHMpIHtcbiAgICBzdGF0ZS5tc2VjcyA/Pz0gLUluZmluaXR5O1xuICAgIHN0YXRlLnNlcSA/Pz0gMDtcbiAgICBpZiAobm93ID4gc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUuc2VxID0gKHJuZHNbNl0gPDwgMjMpIHwgKHJuZHNbN10gPDwgMTYpIHwgKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldO1xuICAgICAgICBzdGF0ZS5tc2VjcyA9IG5vdztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0YXRlLnNlcSA9IChzdGF0ZS5zZXEgKyAxKSB8IDA7XG4gICAgICAgIGlmIChzdGF0ZS5zZXEgPT09IDApIHtcbiAgICAgICAgICAgIHN0YXRlLm1zZWNzKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZXhwb3J0cy51cGRhdGVWN1N0YXRlID0gdXBkYXRlVjdTdGF0ZTtcbmZ1bmN0aW9uIHY3Qnl0ZXMocm5kcywgbXNlY3MsIHNlcSwgYnVmLCBvZmZzZXQgPSAwKSB7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgaWYgKCFidWYpIHtcbiAgICAgICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMTYgPiBidWYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVVVJRCBieXRlIHJhbmdlICR7b2Zmc2V0fToke29mZnNldCArIDE1fSBpcyBvdXQgb2YgYnVmZmVyIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1zZWNzID8/PSBEYXRlLm5vdygpO1xuICAgIHNlcSA/Pz0gKChybmRzWzZdICogMHg3ZikgPDwgMjQpIHwgKHJuZHNbN10gPDwgMTYpIHwgKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IG1zZWNzICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gMHg3MCB8ICgoc2VxID4+PiAyOCkgJiAweDBmKTtcbiAgICBidWZbb2Zmc2V0KytdID0gKHNlcSA+Pj4gMjApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gMHg4MCB8ICgoc2VxID4+PiAxNCkgJiAweDNmKTtcbiAgICBidWZbb2Zmc2V0KytdID0gKHNlcSA+Pj4gNikgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoKHNlcSA8PCAyKSAmIDB4ZmYpIHwgKHJuZHNbMTBdICYgMHgwMyk7XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTFdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzEyXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxM107XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTRdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzE1XTtcbiAgICByZXR1cm4gYnVmO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlZ2V4X2pzXzEgPSByZXF1aXJlKFwiLi9yZWdleC5qc1wiKTtcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIHJlZ2V4X2pzXzEuZGVmYXVsdC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICAgIGlmICghKDAsIHZhbGlkYXRlX2pzXzEuZGVmYXVsdCkodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE1KSwgMTYpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdmVyc2lvbjtcbiIsImltcG9ydCB7IHVzZUltbWVyUmVkdWNlciB9IGZyb20gXCJ1c2UtaW1tZXJcIjtcblxuaW1wb3J0IHtcblx0aW5pdGlhbENvbnRyb2xTdGF0ZSxcblx0cGFyYW1ldGVySW5pdGlhbFN0YXRlLFxufSBmcm9tIFwiLi9pbml0aWFsU3RhdGVcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tbWFuZFZhbHZlTXBQcm9wcyxcblx0UGFyYW1ldGVyQWN0aW9uLFxuXHRQYXJhbUl0ZW0sXG5cdFVzZVBhcmFtZXRlclJlZHVjZXIsXG5cdFVzZVZhbHZlTXBDb21tYW5kUmVkdWNlcixcblx0VmFsdmVNcENvbW1hbmRBY3Rpb24sXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cblxuLyoqXG4gKiAgVXBkYXRlIGEgcGFyYW1ldGVyIGl0ZW0gaW4gYSBsaXN0IG9mIHBhcmFtZXRlciBpdGVtc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBQYXJhbWV0ZXJSZWR1Y2VyKFxuXHRkcmFmdDogUGFyYW1JdGVtW10sXG5cdGFjdGlvbjogUGFyYW1ldGVyQWN0aW9uXG4pOiBQYXJhbUl0ZW1bXSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFwiVVBEQVRFX1ZBTFVFXCI6XG5cdFx0XHRkcmFmdFthY3Rpb24uaW5kZXhdLmlucHV0LnZhbHVlID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGRlZmF1bHQ6IC8vICNUT0RPIEFkZCBtb3JlIHJlZHVjZXIgY2FzZSBzdGF0ZW1lbnRzXG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtSXRlbXNSZWR1Y2VyKCk6IFVzZVBhcmFtZXRlclJlZHVjZXIge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUltbWVyUmVkdWNlcihcblx0XHRQYXJhbWV0ZXJSZWR1Y2VyLFxuXHRcdHBhcmFtZXRlckluaXRpYWxTdGF0ZVxuXHQpO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX1ZBTFVFXCIsIGluZGV4OiBpbmRleCwgdmFsdWU6IHZhbHVlIH0pO1xuXHR9XG5cdC8vIEFkZCBtb3JlIGRpc3BhdGNoIGZ1bmN0aW9ucyBoZXJlXG5cdGNvbnN0IHVzZVBhcmFtZXRlclJlZHVjZXIgPSB7XG5cdFx0c3RhdGUsXG5cdFx0cmVkdWNlcjoge1xuXHRcdFx0dXBkYXRlVmFsdWUsXG5cdFx0fSxcblx0fTtcblx0cmV0dXJuIHVzZVBhcmFtZXRlclJlZHVjZXI7XG59XG5mdW5jdGlvbiB2YWx2ZU1wUmVkdWNlcihcblx0ZHJhZnQ6IENvbW1hbmRWYWx2ZU1wUHJvcHMsXG5cdGFjdGlvbjogVmFsdmVNcENvbW1hbmRBY3Rpb25cbik6IENvbW1hbmRWYWx2ZU1wUHJvcHMge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBcIlVQREFURV9BVVRPX01BTlVBTFwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/Lm1haW4pIHtcblx0XHRcdFx0aWYgKGFjdGlvbi5tb2RlID09PSBcImF1dG9cIikge1xuXHRcdFx0XHRcdGRyYWZ0LmNvbW1hbmQubWFpbi5hdXRvTWFudWFsID0gZmFsc2U7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEluIEF1dG9gKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGFjdGlvbi5tb2RlID09PSBcIm1hbnVhbFwiKSB7XG5cdFx0XHRcdFx0ZHJhZnQuY29tbWFuZC5tYWluLmF1dG9NYW51YWwgPSB0cnVlO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBJbiBNYW51YWxgKTtcblx0XHRcdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX01BSU5fTUFOX09OXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8ubWFpbikge1xuXHRcdFx0XHRkcmFmdC5jb21tYW5kLm1haW4uYWN0aXZhdGlvbiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9NQUlOX01BTl9PRkZcIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy5tYWluKSB7XG5cdFx0XHRcdGRyYWZ0LmNvbW1hbmQubWFpbi5hY3RpdmF0aW9uID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9VU0xfTUFOX09OXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8udXBwZXJTZWF0KSB7XG5cdFx0XHRcdGRyYWZ0LmNvbW1hbmQudXBwZXJTZWF0LmFjdGl2YXRpb24gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfVVNMX01BTl9PRkZcIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy51cHBlclNlYXQpIHtcblx0XHRcdFx0ZHJhZnQuY29tbWFuZC51cHBlclNlYXQuYWN0aXZhdGlvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfTFNMX01BTl9PTlwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/Lmxvd2VyU2VhdCkge1xuXHRcdFx0XHRkcmFmdC5jb21tYW5kLmxvd2VyU2VhdC5hY3RpdmF0aW9uID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0xTTF9NQU5fT0ZGXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8ubG93ZXJTZWF0KSB7XG5cdFx0XHRcdGRyYWZ0LmNvbW1hbmQubG93ZXJTZWF0LmFjdGl2YXRpb24gPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX01BSU5fQVZBSUxcIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy5hdmFpbGFibGUpIHtcblx0XHRcdFx0aWYoYWN0aW9uLnZhbHVlKVxuXHRcdFx0XHRkcmFmdC5jb21tYW5kLmF2YWlsYWJsZS5tYWluID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXG5cdFx0ZGVmYXVsdDogLy8gI1RPRE8gQWRkIG1vcmUgcmVkdWNlciBjYXNlIHN0YXRlbWVudHNcblx0XHRcdHJldHVybiBkcmFmdDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyKCk6IFVzZVZhbHZlTXBDb21tYW5kUmVkdWNlciB7XG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlSW1tZXJSZWR1Y2VyKFxuXHRcdHZhbHZlTXBSZWR1Y2VyLFxuXHRcdGluaXRpYWxDb250cm9sU3RhdGVcblx0KTtcblxuXHRmdW5jdGlvbiB1cGRhdGVNYWluQXZhaWxhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9NQUlOX0FWQUlMXCIsIHZhbHVlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVwcGVyU2VhdEF2YWlsYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfVVBQRVJTRUFUX0FWQUlMXCIsIHZhbHVlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUxvd2VyU2VhdEF2YWlsYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTE9XRVJTRUFUX0FWQUlMXCIsIHZhbHVlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUF1dG9NYW5TZWxlY3Rpb24obW9kZTogXCJhdXRvXCIgfCBcIm1hbnVhbFwiKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9BVVRPX01BTlVBTFwiLCBtb2RlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZU1haW5NYW51YWxPbigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09OXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTWFpbk1hbnVhbE9mZigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09GRlwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVzbE1hbnVhbE9uKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfVVNMX01BTl9PTlwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVzbE1hbnVhbE9mZigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX1VTTF9NQU5fT0ZGXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTHNsTWFudWFsT24oKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9MU0xfTUFOX09OXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTHNsTWFudWFsT2ZmKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTFNMX01BTl9PRkZcIiB9KTtcblx0fVxuXG5cdGNvbnN0IHVzZUNvbW1hbmRzVmFsdmVNcFJlZHVjZXIgPSB7XG5cdFx0c3RhdGUsXG5cdFx0cmVkdWNlcjoge1xuXHRcdFx0dXBkYXRlQXV0b01hblNlbGVjdGlvbixcblx0XHRcdHVwZGF0ZU1haW5BdmFpbGFibGUsXG5cdFx0XHR1cGRhdGVVcHBlclNlYXRBdmFpbGFibGUsXG5cdFx0XHR1cGRhdGVMb3dlclNlYXRBdmFpbGFibGUsXG5cdFx0XHR1cGRhdGVNYWluTWFudWFsT24sXG5cdFx0XHR1cGRhdGVNYWluTWFudWFsT2ZmLFxuXHRcdFx0dXBkYXRlVXNsTWFudWFsT24sXG5cdFx0XHR1cGRhdGVVc2xNYW51YWxPZmYsXG5cdFx0XHR1cGRhdGVMc2xNYW51YWxPbixcblx0XHRcdHVwZGF0ZUxzbE1hbnVhbE9mZixcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiB1c2VDb21tYW5kc1ZhbHZlTXBSZWR1Y2VyO1xufVxuIiwiLyoqXG4gKiBUaGUgcHVycG9zZSBvZiBpbml0aWFsU3RhdGVzLnRzIGlzIHRvIHByb3ZpZGUgaW5pdGlhbCBzdGF0ZSBmb3IgY29tcG9uZW50IHByb3BzXG4gKi9cbi8vIGluaXRpYWxTdGF0ZS50c1xuXG5cbmltcG9ydCB7IENvbW1hbmRWYWx2ZU1wUHJvcHMsIFBhcmFtSXRlbSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCB2YWx2ZVN0YXR1cyA9IHtcblx0YWxhcm06IGZhbHNlLFxuXHRhY3RGQjogZmFsc2UsXG5cdGRlQWN0RkI6IHRydWUsXG5cdGFjdGl2YXRlZENvbmZpZzogNyxcblx0ZGVhY3RpdmF0ZWRDb25maWc6IDUsXG5cdGl0ZW1OYW1lOiBcIlZYWFhcIixcblx0bWFudWFsOiBmYWxzZSxcblx0bWFza2VkOiBmYWxzZSxcblx0Y2hhbmdpbmc6IGZhbHNlLFxuXHRsb2NhdGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NPYmplY3RQcm9wcyA9IHtcblx0c3RhdHVzOiB2YWx2ZVN0YXR1cyxcbn07XG5leHBvcnQgY29uc3QgdmFsdmVQcm9wcyA9IHtcblx0cHJvY2Vzc09iamVjdDogcHJvY2Vzc09iamVjdFByb3BzLFxuXHRoYW5kbGVDbGljazogKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgY2xpY2tlZFwiKTtcblx0fSxcblx0bGFiZWxQb3NpdGlvbjogXCJsZWZ0XCIsXG5cdHNob3dMYWJlbDogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IHB1bXBJbml0aWFsU3RhdHVzID0ge1xuXHRhbGFybTogZmFsc2UsXG5cdGFjdEZCOiBmYWxzZSxcblx0ZGVBY3RGQjogZmFsc2UsXG5cdGNvbmZpZ3VyYXRpb246IDcsXG5cdGl0ZW1OYW1lOiBcIml0ZW1OYW1lXCIsXG5cdG1hbnVhbDogZmFsc2UsXG5cdG1hc2tlZDogZmFsc2UsXG5cdGNoYW5naW5nOiBmYWxzZSxcblx0bG9jYXRlOiBmYWxzZSxcbn1cblxuZXhwb3J0IGNvbnN0IHB1bXBJbml0aWFsUHJvcHMgPSB7XG5cdHN0YXR1czogcHVtcEluaXRpYWxTdGF0dXMsXG59XG5leHBvcnQgY29uc3QgcGFyYW1ldGVySW5pdGlhbFN0YXRlID0gW1xuXHR7XG5cdFx0bGFiZWw6IHtcblx0XHRcdHRleHQ6IFwibGFiZWxcIixcblx0XHRcdGNsYXNzTmFtZTogXCJcIixcblx0XHRcdHRvb2x0aXBUZXh0OiBcIlwiLFxuXHRcdFx0dG9vbHRpcFBvc2l0aW9uOiBcIlwiLFxuXHRcdFx0dG9vbHRpcENsYXNzTmFtZTogXCJcIixcblx0XHRcdHRvb2x0aXBJZDogXCJcIixcblx0XHR9LFxuXHRcdGlucHV0OiB7XG5cdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdGlucHV0bW9kZTogXCJudW1lcmljXCIsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCJFbnRlciBhIG51bWJlclwiLFxuXHRcdFx0ZWRpdGFibGU6IHRydWUsXG5cdFx0XHRwYXR0ZXJuOiBcIl5bMC05XSpbLixdP1swLTldKiRcIixcblx0XHRcdG1pbjogMCxcblx0XHRcdG1heDogMTAwLFxuXHRcdFx0ZGVjaW1hbFBsYWNlczogMixcblx0XHRcdGV1OiBcIlxcdTAwQjVDXCIsXG5cdFx0XHR2YWx1ZTogMCxcblx0XHR9LFxuXHR9IGFzIFBhcmFtSXRlbSxcbl07XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsQXV0b01hblN0YXRlID0ge1xuXHRhdXRvOiB0cnVlLFxuXHRtYW51YWw6IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBpbml0aWFsT2ZmT25TdGF0ZSA9IHtcblx0b2ZmOiBmYWxzZSxcblx0b246IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBpbml0aWFsQ29udHJvbFN0YXRlID0ge1xuXHRjb21tYW5kOiB7XG5cdFx0YXZhaWxhYmxlOiB7XG5cdFx0XHRtYWluOiBmYWxzZSxcblx0XHRcdHVwcGVyU2VhdDogZmFsc2UsXG5cdFx0XHRsb3dlclNlYXQ6IGZhbHNlXG5cdFx0fSxcblx0XHRtYWluOiB7XG5cdFx0XHRsYWJlbDogXCJNYWluXCIsXG5cdFx0XHRhdXRvTWFudWFsOiBmYWxzZSxcblx0XHRcdGFjdGl2YXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0dXBwZXJTZWF0OiB7XG5cdFx0XHRsYWJlbDogXCJVcHBlciBTZWF0XCIsXG5cdFx0XHRhY3RpdmF0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdGxvd2VyU2VhdDoge1xuXHRcdFx0bGFiZWw6IFwiTG93ZXIgU2VhdFwiLFxuXHRcdFx0YWN0aXZhdGlvbjogZmFsc2UsXG5cdFx0fVxuXHR9XG59IGFzIENvbW1hbmRWYWx2ZU1wUHJvcHM7XG4iLCJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRQcm9wcyB9IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcblxuXG5leHBvcnQgdHlwZSBFbGVtZW50UmVmID0gUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcbmV4cG9ydCB0eXBlIFZhbHZlU3RhdGUgPSB7XG5cdGFsYXJtPzogYm9vbGVhbjtcblx0YWN0RkI6IGJvb2xlYW47XG5cdGRlQWN0RkI6IGJvb2xlYW47XG5cdHVzbD86IGJvb2xlYW47XG5cdGxzbD86IGJvb2xlYW47XG5cdGFjdGl2YXRlZENvbmZpZzogbnVtYmVyO1xuXHRkZWFjdGl2YXRlZENvbmZpZzogbnVtYmVyO1xuXHRpdGVtTmFtZTogc3RyaW5nO1xuXHRtYW51YWw6IGJvb2xlYW47XG5cdG1hc2tlZDogYm9vbGVhbjtcblx0Y2hhbmdpbmc6IGJvb2xlYW47XG5cdGxvY2F0ZTogYm9vbGVhbjtcbn07XG5leHBvcnQgdHlwZSBTdGF0dXNMaWtlID0ge1xuXHRjb25maWd1cmF0aW9uPzpudW1iZXJcbiAgICBhY3RpdmF0ZWRDb25maWc/OiBudW1iZXI7XG4gICAgZGVhY3RpdmF0ZWRDb25maWc/OiBudW1iZXI7XG4gICAgYWN0RkI/OiBib29sZWFuO1xuICAgIGRlQWN0RkI/OiBib29sZWFuO1xuICAgIHVzbD86IGJvb2xlYW47XG4gICAgbHNsPzogYm9vbGVhbjtcbiAgICBsb2NhdGU/OiBib29sZWFuO1xuICAgIGFsYXJtPzogYm9vbGVhbjtcbiAgICBjaGFuZ2luZz86IGJvb2xlYW47XG4gICAgbWFudWFsPzogYm9vbGVhbjtcbiAgICBtYXNrZWQ/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgVmFsdmVDb21wb3VuZENvbnRleHRUeXBlID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHR2YWx2ZVByb3BzOiBWYWx2ZVByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5leHBvcnQgdHlwZSBWYWx2ZUNvbXBvdW5kUm9vdFByb3BzID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHR2YWx2ZVByb3BzOiBWYWx2ZVByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCB0eXBlIFB1bXBTdGF0ZSA9IHtcblx0YWxhcm06IGJvb2xlYW47XG5cdGFjdEZCOiBib29sZWFuO1xuXHRkZUFjdEZCOiBib29sZWFuO1xuXHRpdGVtTmFtZTogc3RyaW5nO1xuXHRtYW51YWw6IGJvb2xlYW47XG5cdG1hc2tlZDogYm9vbGVhbjtcblx0Y2hhbmdpbmc6IGJvb2xlYW47XG5cdGxvY2F0ZTogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIFB1bXBDb21wb3VuZENvbnRleHRUeXBlID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHRwdW1wUHJvcHM6IFB1bXBQcm9wcztcblx0b25BY3Rpb25QZXJmb3JtZWQ6ICgpID0+IHZvaWQ7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuZXhwb3J0IHR5cGUgUHVtcENvbXBvdW5kUm9vdFByb3BzID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHRwdW1wUHJvcHM6IFB1bXBQcm9wcztcblx0b25BY3Rpb25QZXJmb3JtZWQ6ICgpID0+IHZvaWQ7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuLyoqXG4gKiBEZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBQYXJhbWV0ZXJBY3Rpb24gdHlwZVxuICogQFVzZWFnZSB1c2VQYXJhbWV0ZXJSZWR1Y2VyXG4gKi9cbmV4cG9ydCB0eXBlIFBhcmFtZXRlckFjdGlvbiA9IHtcblx0dHlwZTogXCJVUERBVEVfVkFMVUVcIjtcblx0dmFsdWU6IG51bWJlcjtcblx0aW5kZXg6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFBhcmFtZXRlclJlZHVjZXIgPSAoXG5cdHN0YXRlOiBQYXJhbUl0ZW0gfCBQYXJhbUl0ZW1bXSxcblx0YWN0aW9uOiBQYXJhbWV0ZXJBY3Rpb25cbikgPT4gVmFsdmVTdGF0ZTtcblxuZXhwb3J0IHR5cGUgVXNlUGFyYW1ldGVyUmVkdWNlciA9IHtcblx0c3RhdGU6IFBhcmFtSXRlbVtdO1xuXHRyZWR1Y2VyOiB7XG5cdFx0dXBkYXRlVmFsdWU6ICh2YWx1ZTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuXHRcdC8vYWRkIG1vcmUgaGFuZGxlcnMgYXMgbmVlZGVkXG5cdH07XG59O1xuZXhwb3J0IHR5cGUgUGFyYW1MYWJlbCA9IHtcblx0dGV4dDogc3RyaW5nO1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG5cdHRvb2x0aXBUZXh0Pzogc3RyaW5nO1xuXHR0b29sdGlwUG9zaXRpb24/OiBzdHJpbmc7XG5cdHRvb2x0aXBDbGFzc05hbWU/OiBzdHJpbmc7XG5cdHRvb2x0aXBJZD86IHN0cmluZztcbn07XG5leHBvcnQgdHlwZSBQYXJhbUlucHV0ID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGlucHV0bW9kZTpcblx0XHR8IFwibm9uZVwiXG5cdFx0fCBcInRleHRcIlxuXHRcdHwgXCJ0ZWxcIlxuXHRcdHwgXCJ1cmxcIlxuXHRcdHwgXCJlbWFpbFwiXG5cdFx0fCBcIm51bWVyaWNcIlxuXHRcdHwgXCJkZWNpbWFsXCJcblx0XHR8IFwic2VhcmNoXCJcblx0XHR8IHVuZGVmaW5lZDtcblx0cGxhY2Vob2xkZXI6IHN0cmluZztcblx0ZWRpdGFibGU6IGJvb2xlYW47XG5cdHBhdHRlcm46IHN0cmluZztcblx0bWluOiBudW1iZXI7XG5cdG1heDogbnVtYmVyO1xuXHRkZWNpbWFsUGxhY2VzOiBudW1iZXI7XG5cdC8vIHBhdHRlcm46IFwiXlswLTldKlsuLF0/WzAtOV0qJFwiIGZvciBkZWNpbWFsIG51bWJlcnNcblx0Ly8gcGF0dGVybjogXCJeWzAtOV0qJFwiIGZvciBpbnRlZ2Vyc1xuXHRldTogc3RyaW5nO1xuXHR2YWx1ZTogbnVtYmVyO1xufTtcbi8vIHR5cGUgUGFyYW1zSGVhZGVyID0ge1xuLy8gXHRsYWJlbDogc3RyaW5nXG4vLyB9XG5leHBvcnQgdHlwZSBQYXJhbUl0ZW0gPSB7XG5cdGxhYmVsOiBQYXJhbUxhYmVsO1xuXHRpbnB1dDogUGFyYW1JbnB1dDtcbn07XG5leHBvcnQgdHlwZSBQYXJhbWV0ZXJzTGlzdFN0YXRlID0ge1xuXHRwYXJhbWV0ZXJzOiBQYXJhbUl0ZW1bXTtcbn07XG5cbmV4cG9ydCBjb25zdCBWYWx2ZUNsYXNzTmFtZUVudW0gPSB7XG5cdEFsYXJtU3RhdGU6IFwiQWxhcm1TdGF0ZVwiLFxuXHRBY3RpdmF0ZWQ6IFwiQWN0aXZhdGVkXCIsXG5cdERlYWN0aXZhdGVkOiBcIkRlYWN0aXZhdGVkXCIsXG5cdE1hbnVhbDogXCJNYW51YWxcIixcblx0TWFza2VkOiBcIk1hc2tlZFwiLFxuXHRDaGFuZ2luZzogXCJDaGFuZ2luZ1wiLFxuXHROb0FsYXJtTWFzazogXCJOb0FsYXJtTWFza1wiLFxuXHRMb2NhdGU6IFwiTG9jYXRlXCIsXG59O1xuZXhwb3J0IHR5cGUgVmFsdmVDbGFzc05hbWVFbnVtID1cblx0KHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW0pW2tleW9mIHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW1dO1xuXG5leHBvcnQgY29uc3QgdmFsdmVNcEl0ZW1OYW1lRW51bSA9IHtcblx0VjFiMTogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjFiMjogXCJ2MWIyXCIsIC8vIGluZGV4IDFcblx0VjFiMzogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNDogXCJ2MWI0XCIsIC8vIGluZGV4IDNcblx0VjJiMTogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMjogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMzogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjI6IFwidjJcIiwgLy8gaW5kZXggOFxuXHR2MTogXCJ2MVwiLCAvLyBpbmRleCA5XG5cdHVzbDogXCJ1c2xcIiwgLy8gaW5kZXggMTAgdXBwZXItc2VhdC1saWZ0XG5cdGxzbDogXCJsc2xcIiwgLy8gaW5kZXggMTEgbG93ZXItc2VhdC1saWZ0XG5cdGxvY2F0ZTogXCJsb2NhdGVcIiwgLy8gaW5kZXggMTIgbG9jYXRlIGFuaW1hdGlvblxufTtcbmV4cG9ydCB0eXBlIHZhbHZlTXBJdGVtTmFtZUVudW0gPVxuXHQodHlwZW9mIHZhbHZlTXBJdGVtTmFtZUVudW0pW2tleW9mIHR5cGVvZiB2YWx2ZU1wSXRlbU5hbWVFbnVtXTtcblxuXG5cbmNvbnN0IFZhbHZlU3RhdGVFbnVtID0ge1xuXHRhbGFybTogXCJhbGFybVwiLFxuXHRtYW51YWw6IFwibWFudWFsXCIsXG5cdG1hc2tlZDogXCJtYXNrZWRcIixcbn07XG5leHBvcnQgdHlwZSBWYWx2ZVN0YXRlRW51bSA9XG5cdCh0eXBlb2YgVmFsdmVTdGF0ZUVudW0pW2tleW9mIHR5cGVvZiBWYWx2ZVN0YXRlRW51bV07XG5cbmNvbnN0IGl0ZW1JZFBvc2l0aW9ucyA9IFtcblx0XCJyaWdodFwiLFxuXHRcImxlZnRcIixcblx0XCJ0b3AtbGVmdFwiLFxuXHRcInRvcC1yaWdodFwiLFxuXHRcImJvdHRvbS1sZWZ0XCIsXG5cdFwiYm90dG9tLXJpZ2h0XCIsXG5dO1xuXG5leHBvcnQgdHlwZSBJdGVtSWRQb3NpdGlvblR5cGUgPSAodHlwZW9mIGl0ZW1JZFBvc2l0aW9ucylbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIFByb2Nlc3NPYmplY3QgPSB7XG5cdHN0YXR1czogVmFsdmVTdGF0ZTtcbn07XG5leHBvcnQgdHlwZSBQdW1wID0ge1xuXHRzdGF0dXM6IFB1bXBTdGF0ZTtcbn07XG5leHBvcnQgdHlwZSBWYWx2ZVByb3BzID0ge1xuXHRwcm9jZXNzT2JqZWN0PzogUHJvY2Vzc09iamVjdDtcblx0bGFiZWxQb3NpdGlvbj86IEl0ZW1JZFBvc2l0aW9uVHlwZTtcblx0c2hvd0xhYmVsPzogYm9vbGVhbjtcblx0aGFuZGxlQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbmNvbnN0IHB1bXBUeXBlcz0gW1xuXHRcImNlbnRyaWZ1Z2FsXCIsXG5cdFwiZGlhcGhyYWdtXCIsXG5cdFwiZ2VhclwiLFxuXHRcImxpcXVpZC1yaW5nXCIsXG5cdFwicG9zaXRpdmUtZGlzcGxhY2VtZW50XCIsXG5cdFwicG9zaXRpdmUtc2NyZXdcIixcblx0XCJwcm9ncmVzc2l2ZS1jYXZpdHlcIixcbl1cbmV4cG9ydCB0eXBlIFB1bXBUeXBlID0gKHR5cGVvZiBwdW1wVHlwZXMpW251bWJlcl07XG5leHBvcnQgdHlwZSBQdW1wUHJvcHMgPSB7XG5cdHB1bXBUeXBlPzogUHVtcFR5cGU7XG5cdHByb2Nlc3NPYmplY3Q/OiBQdW1wO1xuXHRsYWJlbFBvc2l0aW9uPzogSXRlbUlkUG9zaXRpb25UeXBlO1xuXHRzaG93TGFiZWw/OiBib29sZWFuO1xuXHRoYW5kbGVDbGljaz86ICgpID0+IHZvaWQ7XG59O1xuZXhwb3J0IGNvbnN0IHB1bXBJdGVtTGlzdCA9IFtcblx0XCJzeW1ib2wtMVwiLFxuXHRcInN5bWJvbC0yXCIsXG4gXHRcImxvY2F0ZVwiLFxuXVxuZXhwb3J0IHR5cGUgUHVtcEl0ZW1MaXN0ID0gKHR5cGVvZiBwdW1wSXRlbUxpc3QpW251bWJlcl07XG5cbmV4cG9ydCB0eXBlIEl0ZW1EYXRhID0ge1xuXHRrZXk6IHN0cmluZztcblx0dmFsdWU6IHN0cmluZztcblx0cHJvcHM6IFZhbHZlU3RhdGU7XG59O1xuXG5leHBvcnQgdHlwZSBpdGVtTmFtZVByb3BzID0ge1xuXHRrZXk6IHN0cmluZztcblx0bmFtZTogW3N0cmluZywgc3RyaW5nXTtcblx0dmFsdWU6IHN0cmluZztcblx0aW5kZXg6IG51bWJlcjtcbn07XG5leHBvcnQgdHlwZSBDb21tYW5kVmFsdmVNcFByb3BzID0ge1xuXHRjb21tYW5kPzoge1xuXHRcdGF2YWlsYWJsZT86IHtcblx0XHRcdG1haW46IGJvb2xlYW47XG5cdFx0XHR1cHBlclNlYXQ/OiBib29sZWFuO1xuXHRcdFx0bG93ZXJTZWF0PzogYm9vbGVhbjtcblx0XHR9O1xuXHRcdG1haW4/OiB7XG5cdFx0XHRsYWJlbDogc3RyaW5nO1xuXHRcdFx0YXV0b01hbnVhbDogYm9vbGVhbjtcblx0XHRcdGFjdGl2YXRpb246IGJvb2xlYW47XG5cdFx0fTtcblx0XHR1cHBlclNlYXQ/OiB7XG5cdFx0XHRsYWJlbDogc3RyaW5nO1xuXHRcdFx0YWN0aXZhdGlvbjogYm9vbGVhbjtcblx0XHR9O1xuXHRcdGxvd2VyU2VhdD86IHtcblx0XHRcdGxhYmVsOiBzdHJpbmc7XG5cdFx0XHRhY3RpdmF0aW9uOiBib29sZWFuO1xuXHRcdH07XG5cdH07XG59O1xuXG5leHBvcnQgdHlwZSBDb21tYW5kc1ZhbHZlTXBDb21wb3VuZENvbnRleHRUeXBlID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHR1c2VSZWR1Y2VyOiBVc2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXI7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuZXhwb3J0IHR5cGUgQ29tbWFuZHNWYWx2ZU1wQ29tcG91bmRSb290UHJvcHMgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdGNvbW1hbmQ6IENvbW1hbmRWYWx2ZU1wUHJvcHM7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuLyoqXG4gKiBEZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBWYWx2ZUFjdGlvbiB0eXBlXG4gKiBAVXNlYWdlIHVzZVZhbHZlUmVkdWNlclxuICovXG5leHBvcnQgdHlwZSBWYWx2ZU1wQ29tbWFuZEFjdGlvbiA9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9BVVRPX01BTlVBTFwiOyBtb2RlOiBcImF1dG9cIiB8IFwibWFudWFsXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTUFJTl9BVkFJTFwiOyB2YWx1ZTogYm9vbGVhbiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9VUFBFUlNFQVRfQVZBSUxcIjsgdmFsdWU6IGJvb2xlYW4gfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTE9XRVJTRUFUX0FWQUlMXCI7IHZhbHVlOiBib29sZWFuIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09OXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTUFJTl9NQU5fT0ZGXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfVVNMX01BTl9PTlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX1VTTF9NQU5fT0ZGXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTFNMX01BTl9PTlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0xTTF9NQU5fT0ZGXCIgfTtcbmV4cG9ydCB0eXBlIFZhbHZlTXBDb21tYW5kUmVkdWNlciA9IChcblx0c3RhdGU6IENvbW1hbmRWYWx2ZU1wUHJvcHMsXG5cdGFjdGlvbjogVmFsdmVNcENvbW1hbmRBY3Rpb25cbikgPT4gVmFsdmVTdGF0ZTtcblxuZXhwb3J0IHR5cGUgVXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyID0ge1xuXHRzdGF0ZTogQ29tbWFuZFZhbHZlTXBQcm9wcztcblx0cmVkdWNlcjoge1xuXHRcdHVwZGF0ZUF1dG9NYW5TZWxlY3Rpb246IChtb2RlOiBcImF1dG9cIiB8IFwibWFudWFsXCIpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTWFpbkF2YWlsYWJsZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZVVwcGVyU2VhdEF2YWlsYWJsZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxvd2VyU2VhdEF2YWlsYWJsZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZU1haW5NYW51YWxPbjogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVNYWluTWFudWFsT2ZmOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZVVzbE1hbnVhbE9uOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZVVzbE1hbnVhbE9mZjogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVMc2xNYW51YWxPbjogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVMc2xNYW51YWxPZmY6ICgpID0+IHZvaWQ7XG5cdFx0Ly9hZGQgbW9yZSBoYW5kbGVycyBhcyBuZWVkZWRcblx0fTtcbn07XG5leHBvcnQgY29uc3QgaHhJdGVtTmFtZUVudW0gPSB7XG5cdGIxOiBcImJhc2UtMVwiLCAvLyBpbmRleCAwXG5cdGIyOiBcImJhc2UtMlwiLCAvLyBpbmRleCAxXG5cdGIzOiBcImJhc2UtM1wiLCAvLyBpbmRleCAyXG5cdGI0OiBcImJhc2UtNFwiLCAvLyBpbmRleCAzXG5cdFYyYjE6IFwidjJiMVwiLCAvLyBpbmRleCA0XG5cdFYyYjI6IFwidjJiMlwiLCAvLyBpbmRleCA1XG5cdFYyYjM6IFwidjJiM1wiLCAvLyBpbmRleCA2XG5cdFYyYjQ6IFwidjJiNFwiLCAvLyBpbmRleCA3XG5cdFYyOiBcInYyXCIsIC8vIGluZGV4IDhcblx0djE6IFwidjFcIiwgLy8gaW5kZXggOVxuXHR1c2w6IFwidXNsXCIsIC8vIGluZGV4IDEwIHVwcGVyLXNlYXQtbGlmdFxuXHRsc2w6IFwibHNsXCIsIC8vIGluZGV4IDExIGxvd2VyLXNlYXQtbGlmdFxuXHRsb2NhdGU6IFwibG9jYXRlXCIsIC8vIGluZGV4IDEyIGxvY2F0ZSBhbmltYXRpb25cbn07XG5leHBvcnQgdHlwZSBIeEl0ZW1OYW1lRW51bSA9XG5cdCh0eXBlb2YgaHhJdGVtTmFtZUVudW0pW2tleW9mIHR5cGVvZiBoeEl0ZW1OYW1lRW51bV07XG4iLCJpbXBvcnQgeyBnZXRCb29sQXRJbmRleCB9IGZyb20gXCIuLi91dGlscy9udW1iZXJVdGlsXCI7XG5pbXBvcnQge1xuXHRJdGVtSWRQb3NpdGlvblR5cGUsXG5cdC8vIEl0ZW1OYW1lRW51bSxcblx0cHVtcEl0ZW1MaXN0LFxuXHR2YWx2ZU1wSXRlbU5hbWVFbnVtLFxuXHR0eXBlIFB1bXBTdGF0ZSxcblx0dHlwZSBQdW1wVHlwZSxcblx0dHlwZSBTdGF0dXNMaWtlLFxuXHR0eXBlIFZhbHZlU3RhdGUsXG59IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG4vKipcbiAqIFRoaXMgaXMgYSB1dGlsaXR5IGZ1bmN0aW9uIGZvciB0aGUgY29tcG9uZW50IFwicHJvY2Vzcy1vYmplY3QvVmFsdmVGQ1wiXG4gKlxuICogQHBhcmFtIGluZGV4OiBudW1iZXIgdGhlIGluZGV4IG9mIGFuIGR5bmFtaWMgdmlzdWFsIGVsZW1lbnQgXCJpdGVtXCIgd2l0aGluIHRoZSBWYWx2ZSBjb21wb25lbnRcbiAqIEBwYXJhbSB2YWx2ZVN0YXR1cz86VmFsdmVTdGF0dXMgdGhlIHN0YXR1cyByZXByZXNlbnRpbmcgcGh5c2ljYWwgcHJvY2VzcyB2YWx2ZVxuICogQHJldHVybnMgY2xhc3NOYW1lOnN0cmluZyByZXR1cm5zIGFkZGl0aW9uYWwgY2xhc3NuYW1lcyBmb3IgYW4gdmlzdWFsIGVsZW1lbnQgb2YgdGhlIHZhbHZlIGNvbXBvbmVudC5cbiAqXG4gKiBSZXR1cm5lZCBjbGFzc25hbWVzIGFyZTtcbiAqIFx0aGlkZSAtIHRoaXMgaGlkZXMgdGhlIGl0ZW1cbiAqIFx0c2hvdyAtXG4gKi9cblxuZXhwb3J0IGNvbnN0IGdldFZhbHZlTXBJdGVtQ2xhc3NOYW1lID0gKFxuXHRpbmRleDogbnVtYmVyLFxuXHR2YWx2ZVN0YXR1cz86IFZhbHZlU3RhdGVcbik6IHN0cmluZyA9PiB7XG5cdGxldCBjbGFzc05hbWUgPSBcIlwiO1xuXHQvLyBIYW5kbGUgdGhlIGZhY3QgdGhhdCBBY3RpdmF0ZWRDb25maWcgYW5kIERlYWN0aXZhdGVkQ29uZmlnIGFyZSBvcHRpb25hbCBhbmQgbWF5YmUgdW5kZWZpbmVkXG5cdGNvbnN0IEFjdGl2YXRlZENvbmZpZ1ZhbHVlID0gdmFsdmVTdGF0dXM/LmFjdGl2YXRlZENvbmZpZyA/PyAwO1xuXHRjb25zdCBEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlID0gdmFsdmVTdGF0dXM/LmRlYWN0aXZhdGVkQ29uZmlnID8/IDA7XG5cdC8vIGNvbnNvbGUubG9nKHZhbHZlU3RhdHVzKTtcblxuXHRpZiAoaW5kZXggPCA4KSB7XG5cdFx0aWYgKFxuXHRcdFx0KGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgJiYgdmFsdmVTdGF0dXM/LmFjdEZCKSB8fFxuXHRcdFx0KGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSAmJiB2YWx2ZVN0YXR1cz8uZGVBY3RGQilcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvdyBpdGVtXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZSBpdGVtXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSA5KSB7XG5cdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDgpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleClcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDEwKSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEwKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTApXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdFx0aWYgKHZhbHZlU3RhdHVzPy51c2wpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBhY3RpdmF0ZWRcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiZGVhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBkZWFjdGl2YXRlZFwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTEpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTEpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMSlcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvdyBpdGVtXCI7XG5cdFx0XHRpZiAodmFsdmVTdGF0dXM/LmxzbCkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGFjdGl2YXRlZFwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJkZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGRlYWN0aXZhdGVkXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZSBpdGVtXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMikge1xuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubG9jYXRlKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcInNtYWxsXCIsIFwiXCIpICsgXCIgc21hbGxcIjtcblx0XHRcdGlmIChcblx0XHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDgpIHx8XG5cdFx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDgpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJsYXJnZVwiLCBcIlwiKSArIFwiIGxhcmdlXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiaGlkZSBpdGVtXCIsIFwiXCIpICsgXCIgaGlkZSBpdGVtXCI7XG5cdFx0fVxuXHR9XG5cdC8vIEFkZGl0aW9ucyB0byB0aGUgY2xhc3NOYW1lXG5cblx0aWYgKGNsYXNzTmFtZS5pbmNsdWRlcyhcInNob3dcIikgJiYgIWNsYXNzTmFtZS5pbmNsdWRlcyhcIml0ZW1cIikpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4LCBjbGFzc05hbWUpO1xuXHRcdGlmICh2YWx2ZVN0YXR1cz8uYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiYWxhcm1cIiwgXCJcIikgKyBcIiBhbGFybVwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/LmNoYW5naW5nKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImNoYW5naW5nXCIsIFwiXCIpICsgXCIgY2hhbmdpbmdcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYW51YWwpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibWFudWFsXCIsIFwiXCIpICsgXCIgbWFudWFsXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFza2VkICYmICF2YWx2ZVN0YXR1cy5hbGFybSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJuby1hbGFybS1tYXNrXCIsIFwiXCIpICsgXCIgbm8tYWxhcm0tbWFza1wiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJtYXNrZWRcIiwgXCJcIikgKyBcIiBtYXNrZWRcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5hY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBhY3RpdmF0ZWRcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5kZUFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgZGVhY3RpdmF0ZWRcIjtcblx0XHR9XG5cdH1cblx0Ly8gY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCwgY2xhc3NOYW1lKTtcblxuXHRyZXR1cm4gY2xhc3NOYW1lOyAvLyBkZWZhdWx0IHJldHVybiB2YWx1ZSBpZiBubyBvdGhlciBjb25kaXRpb24gaXMgbWV0XG59O1xuLyoqXG4gKiBGdW5jdGlvbiBnZXRDbGFzc05hbWVXaXRoU3RhdHVzLlxuICogVGhpcyBpcyBhIHV0aWxpdHkgZnVuY3Rpb24gd2hpY2ggZ2VuZXJhdGVzIGNzcyBjbGFzc05hbWVzIGZvciBlYWNoXG4gKiBlbGVtZW50IGluIGEgaG1pLWNvbXBvbmVudCBzeW1ib2wuXG4gKiBJbiB0aGUgRE9NIHRyZWUgYmFzZSBlbGVtZW50cyB3aWxsIGhhdmUgYSBjbGFzcyBzdWNoIGFzIFwiYmFzZS0xIHRvIG5cIlxuICogd2l0aCBkeW5hbWljSXRlbXMgaGF2aW5nIGEgY2xhc3Mgc3VjaCBhcyBcImR5bmFtaWMtMSB0byBuXCJcbiAqIEBwYXJhbSBpbmRleDogbnVtYmVyIDogQXJyYXkgaW5kZXggc3RhcnRpbmcgYXQgemVyb1xuICogQHBhcmFtIHN0YXR1czogUyA6IEEgU3RhdHVzTGlrZSBvYmplY3RcbiAqIEBwYXJhbSB0eXBlOiBzdHJpbmc6XG4gKiBAcGFyYW0gYmFzZUVsZW1lbnRzOiBudW1iZXIgOlxuICogQHBhcmFtIGJhc2VDb25maWc6IG51bWJlciA6XG4gKiBAcGFyYW0gZHluYW1pY0l0ZW1zOiBudW1iZXIgOlxuICogQHBhcmFtIGR5bmFtaWNDb25maWc6IG51bWJlciA6XG4gKmVsZW1lbnRWYXJpYW50cyA9IFtcbiBcdHtcbiBcdHN0YXR1c0tleTogc3RyaW5nLFxuIFx0YWRkaXRpb25hbENsYXNzOiBzdHJpbmdcblx0fVxuIF1cbiAqL1xuZXhwb3J0IHR5cGUgRWxlbWVudFZhcmlhbnQgPSB7XG5cdHN0YXR1c0tleT86IEhtaVN0YXR1cztcblx0YWRkaXRpb25hbENsYXNzPzogc3RyaW5nO1xuXHRiYXNlQ2xhc3M/OiBzdHJpbmc7XG59O1xuZXhwb3J0IHR5cGUgRWxlbWVudFZhcmlhbnRMaXN0ID0gRWxlbWVudFZhcmlhbnRbXTtcbmV4cG9ydCB0eXBlIGJvb2xTdHJpbmcgPSB7XG5cdHRydWVTdHJpbmc/OiBzdHJpbmc7XG5cdGZhbHNlU3RyaW5nPzogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgSG1pU3RhdHVzID0ge1xuXHRhbGFybT86IGJvb2xTdHJpbmc7XG5cdGFjdEZCPzogYm9vbFN0cmluZztcblx0ZGVBY3RGQj86IGJvb2xTdHJpbmc7XG5cdG1hbnVhbD86IGJvb2xTdHJpbmc7XG5cdG1hc2tlZD86IGJvb2xTdHJpbmc7XG5cdGNoYW5naW5nPzogYm9vbFN0cmluZztcblx0bG9jYXRlPzogYm9vbFN0cmluZztcblx0YWN0aXZhdGVkPzogYm9vbFN0cmluZztcblx0dXNsPzogYm9vbFN0cmluZztcblx0bHNsPzogYm9vbFN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGdldENsYXNzTmFtZVdpdGhTdGF0dXMgPSA8UyBleHRlbmRzIFN0YXR1c0xpa2U+KFxuXHRpbmRleDogbnVtYmVyLFxuXHRzdGF0dXM/OiBTLFxuXHRlbGVtZW50VmFyaWFudHM/OiBFbGVtZW50VmFyaWFudExpc3QsXG5cdGJhc2VDbGFzc05hbWU/OiBzdHJpbmcsXG5cdGJhc2VFbGVtZW50cz86IG51bWJlcixcblx0YmFzZUNvbmZpZz86IG51bWJlcixcblx0ZHluYW1pY0l0ZW1zPzogbnVtYmVyLFxuXHRkeW5hbWljQ29uZmlnPzogbnVtYmVyXG4pOiBzdHJpbmcgPT4ge1xuXHRsZXQgY2xhc3NOYW1lID0gXCJcIjtcblx0bGV0IGFkZGl0aW9uYWxDbGFzcyA9IFwiXCI7XG5cblxuaWYgKGVsZW1lbnRWYXJpYW50cyAmJiBlbGVtZW50VmFyaWFudHNbaW5kZXhdPy5zdGF0dXNLZXkgJiYgc3RhdHVzKSB7XG4gIGNvbnN0IHN0YXR1c0tleU9iaiA9IGVsZW1lbnRWYXJpYW50c1tpbmRleF0uc3RhdHVzS2V5O1xuICAvLyBHZXQga2V5cyBmcm9tIHN0YXR1c0tleU9iaiB0aGF0IGFyZSBhbHNvIGluIHN0YXR1c1xuICBjb25zdCBtYXRjaGluZ0tleXMgPSBPYmplY3Qua2V5cyhzdGF0dXNLZXlPYmopLmZpbHRlcihcbiAgICAoa2V5KSA9PiBrZXkgaW4gc3RhdHVzXG4gICkgYXMgKGtleW9mIHR5cGVvZiBzdGF0dXNLZXlPYmogJiBrZXlvZiB0eXBlb2Ygc3RhdHVzKVtdO1xuXG4gIGZvciAoY29uc3Qga2V5IG9mIG1hdGNoaW5nS2V5cykge1xuICAgIC8vIE5vdyB5b3UgY2FuIHNhZmVseSBhY2Nlc3MgYm90aCBzdGF0dXNLZXlPYmpba2V5XSBhbmQgc3RhdHVzW2tleV1cbiAgICBjb25zdCBrZXlTdGF0dXNWYWx1ZSA9IHN0YXR1c0tleU9ialtrZXldO1xuICAgIGNvbnN0IHN0YXR1c1ZhbHVlID0gc3RhdHVzW2tleV07XG4gICAgaWYgKHN0YXR1c1ZhbHVlKXtcblx0XHRhZGRpdGlvbmFsQ2xhc3MgKz0gYCAke2tleVN0YXR1c1ZhbHVlPy50cnVlU3RyaW5nID8ga2V5U3RhdHVzVmFsdWUudHJ1ZVN0cmluZyA6IFwiXCJ9YFxuXHR9ZWxzZXtcblx0XHRhZGRpdGlvbmFsQ2xhc3MgKz0gYCAke2tleVN0YXR1c1ZhbHVlPy5mYWxzZVN0cmluZyA/IGtleVN0YXR1c1ZhbHVlLmZhbHNlU3RyaW5nIDogXCJcIn1gXG5cdH1cbiAgfVxufVxuXHQvLyBCYXNlIEVsZW1lbnRzXG5cdGlmIChiYXNlRWxlbWVudHMgJiYgYmFzZUNvbmZpZykge1xuXHRcdGlmIChpbmRleCA8IGJhc2VFbGVtZW50cykge1xuXHRcdFx0bGV0IGl0ZW1TdHJpbmcgPSBpbmRleCA+IDAgPyBcIml0ZW1cIiA6YCR7YmFzZUNsYXNzTmFtZX1gO1xuXHRcdFx0aWYgKGdldEJvb2xBdEluZGV4KGJhc2VDb25maWcsIGluZGV4KSkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBgc2hvdyAke2l0ZW1TdHJpbmd9ICR7YWRkaXRpb25hbENsYXNzfWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBgaGlkZSAke2l0ZW1TdHJpbmd9YDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRHluYW1pYyBJdGVtc1xuXHRcdGlmIChkeW5hbWljSXRlbXMgJiYgZHluYW1pY0NvbmZpZykge1xuXHRcdFx0bGV0IGR5bmFtSW5kZXggPSBpbmRleCAtIGJhc2VFbGVtZW50cztcblx0XHRcdGlmIChpbmRleCA+PSBiYXNlRWxlbWVudHMgJiYgaW5kZXggPCBiYXNlRWxlbWVudHMgKyBkeW5hbWljSXRlbXMpIHtcblx0XHRcdFx0aWYgKGdldEJvb2xBdEluZGV4KGR5bmFtaWNDb25maWcsIGR5bmFtSW5kZXgpKSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gYHNob3cgaXRlbWA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gYGhpZGUgaXRlbWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGNsYXNzTmFtZVxufTtcbi8qKlxuICogQHJldHVybnMgQXJyYXkgb2YgaXRlbU5hbWUocykgZm9yIGVhY2ggdmlzdWFsIGVsZW1lbnQgb2YgYSB2YWx2ZSBjb21wb25lbnRcbiAqL1xuLy8gZXhwb3J0IGNvbnN0IGl0ZW1OYW1lcyA9IE9iamVjdC5lbnRyaWVzKEl0ZW1OYW1lRW51bSkubWFwKChrZXksIGluZGV4KSA9PiB7XG4vLyBcdHJldHVybiB7XG4vLyBcdFx0a2V5OiB1dWlkdjQoKSxcbi8vIFx0XHRuYW1lOiBrZXksXG4vLyBcdFx0dmFsdWU6IGtleVsxXSxcbi8vIFx0XHRpbmRleDogaW5kZXgsXG4vLyBcdH07XG4vLyB9KTtcbmV4cG9ydCBjb25zdCB2YWx2ZU1wSXRlbU5hbWVzID0gT2JqZWN0LmVudHJpZXModmFsdmVNcEl0ZW1OYW1lRW51bSkubWFwKFxuXHQoa2V5LCBpbmRleCkgPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKGBJbiBidWlsZCBJdGVtTmFtZXMgbmFtZSAke2tleX0gaW5kZXggJHtpbmRleH1gKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0a2V5OiB1dWlkdjQoKSxcblx0XHRcdG5hbWU6IGtleSxcblx0XHRcdHZhbHVlOiBrZXlbMV0sXG5cdFx0XHRpbmRleDogaW5kZXgsXG5cdFx0fTtcblx0fVxuKTtcblxuXG5cbmV4cG9ydCBjb25zdCBnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZSA9IChcblx0Y2xhc3NOYW1lOiBzdHJpbmcsXG5cdGl0ZW1JZFBvc2l0aW9uOiBJdGVtSWRQb3NpdGlvblR5cGVcbik6IEl0ZW1JZFBvc2l0aW9uVHlwZSA9PiB7XG5cdC8vIENoZWNrIGNsYXNzTmFtZSBpbmNsdWRlcyAnaXRlbUlkIHBvcG92ZXInLCBpZiBub3QgcmV0dXJuIGNsYXNzTmFtZSBhbmQgd2FyblxuXHRpZiAoIWNsYXNzTmFtZS5pbmNsdWRlcyhcIml0ZW1JZCBwb3BvdmVyXCIpKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJGdW5jdGlvbiBnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZSBjYWxsZWQgd2hlbiAnaXRlbUlkIHBvcG92ZXInIG5vdCBpbiBnaXZlbiBjbGFzc05hbWVcIlxuXHRcdCk7XG5cdFx0cmV0dXJuIGNsYXNzTmFtZTtcblx0fVxuXHQvLyBPdmVyIHdyaXRlIGdpdmVuIGNsYXNzTmFtZVxuXHRjbGFzc05hbWUgPSBcIml0ZW1JZCBwb3BvdmVyXCI7XG5cdHN3aXRjaCAoaXRlbUlkUG9zaXRpb24pIHtcblx0XHRjYXNlIFwibGVmdFwiOlxuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi1sZWZ0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tbGVmdFwiO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcInJpZ2h0XCI6XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLXJpZ2h0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tcmlnaHRcIjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJ0b3AtbGVmdFwiOlxuXHRcdFx0Y2xhc3NOYW1lID1cblx0XHRcdFx0Y2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi10b3AtbGVmdFwiLCBcIlwiKSArIFwiIHBvc2l0aW9uLXRvcC1sZWZ0XCI7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwidG9wLXJpZ2h0XCI6XG5cdFx0XHRjbGFzc05hbWUgPVxuXHRcdFx0XHRjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLXRvcC1yaWdodFwiLCBcIlwiKSArIFwiIHBvc2l0aW9uLXRvcC1yaWdodFwiO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImJvdHRvbS1sZWZ0XCI6XG5cdFx0XHRjbGFzc05hbWUgPVxuXHRcdFx0XHRjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLWJvdHRvbS1sZWZ0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tYm90dG9tLWxlZnRcIjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJib3R0b20tcmlnaHRcIjpcblx0XHRcdGNsYXNzTmFtZSA9XG5cdFx0XHRcdGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tYm90dG9tLXJpZ2h0XCIsIFwiXCIpICtcblx0XHRcdFx0XCIgcG9zaXRpb24tYm90dG9tLXJpZ2h0XCI7XG5cdFx0XHRicmVhaztcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBjbGFzc05hbWU7XG59O1xuXG5leHBvcnQgY29uc3QgcHVtcEl0ZW1OYW1lcyA9IHB1bXBJdGVtTGlzdC5tYXAoKGtleSwgaW5kZXgpID0+IHtcblx0Ly8gY29uc29sZS5sb2coYEluIGJ1aWxkIEl0ZW1OYW1lcyBuYW1lICR7a2V5fSBpbmRleCAke2luZGV4fWApO1xuXHRyZXR1cm4ge1xuXHRcdGtleTogdXVpZHY0KCksXG5cdFx0bmFtZToga2V5LFxuXHRcdGluZGV4OiBpbmRleCxcblx0fTtcbn0pO1xuY29uc3QgZ2V0UHVtcENvbmZpZ3VyYXRpb24gPSAocHVtcFR5cGU6IFB1bXBUeXBlKTogbnVtYmVyID0+IHtcblx0c3dpdGNoIChwdW1wVHlwZSkge1xuXHRcdGNhc2UgXCJjZW50cmlmdWdhbFwiOlxuXHRcdFx0cmV0dXJuIDE7XG5cdFx0Y2FzZSBcImRpYXBocmFnbVwiOlxuXHRcdFx0cmV0dXJuIDE7XG5cdFx0Y2FzZSBcInBvc2l0aXZlLWRpc3BsYWNlbWVudFwiOlxuXHRcdFx0cmV0dXJuIDE7XG5cdFx0Y2FzZSBcInByb2dyZXNzaXZlLWNhdml0eVwiOlxuXHRcdFx0cmV0dXJuIDE7XG5cdFx0Y2FzZSBcImdlYXJcIjpcblx0XHRcdHJldHVybiAzO1xuXHRcdGNhc2UgXCJsaXF1aWQtcmluZ1wiOlxuXHRcdFx0cmV0dXJuIDM7XG5cdFx0Y2FzZSBcInBvc2l0aXZlLXNjcmV3XCI6XG5cdFx0XHRyZXR1cm4gMztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgRXJyb3IoYEluIGdldFB1bXBDb25maWd1cmF0aW9uKCkgcHVtcCB0eXBlOiAke3B1bXBUeXBlfSBub3QgZm91bmRgKTtcblx0fVxufTtcbmV4cG9ydCBjb25zdCBnZXRQdW1wSXRlbUNsYXNzTmFtZSA9IChcblx0aW5kZXg6IG51bWJlcixcblx0cHVtcFR5cGU6IFB1bXBUeXBlLFxuXHRzdGF0dXM/OiBQdW1wU3RhdGVcbik6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBnZXRQdW1wQ29uZmlndXJhdGlvbihwdW1wVHlwZSk7XG5cdGxldCBjbGFzc05hbWUgPSBcIlwiO1xuXHQvLyBIYW5kbGUgdGhlIGZhY3QgdGhhdCBBY3RpdmF0ZWRDb25maWcgYW5kIERlYWN0aXZhdGVkQ29uZmlnIGFyZSBvcHRpb25hbCBhbmQgbWF5YmUgdW5kZWZpbmVkXG5cdGlmIChpbmRleCA8IDIpIHtcblx0XHRpZiAoZ2V0Qm9vbEF0SW5kZXgoY29uZmlndXJhdGlvbiwgaW5kZXgpKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBgc2hvdyBpdGVtICR7cHVtcFR5cGV9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNsYXNzTmFtZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQdW1wU3RhdHVzQ2xhc3NOYW1lcyA9IChcblx0Y2xhc3NOYW1lOiBzdHJpbmcsXG5cdHN0YXR1czogUHVtcFN0YXRlXG4pID0+IHtcblx0Ly8gQWRkaXRpb25zIHRvIHRoZSBjbGFzc05hbWVcblx0Ly8gY29uc29sZS5sb2coYHN0YXR1czogJHtKU09OLnN0cmluZ2lmeShzdGF0dXMsbnVsbCwgMil9YCk7XG5cblx0aWYgKGNsYXNzTmFtZS5pbmNsdWRlcyhcInNob3dcIikgJiYgIWNsYXNzTmFtZS5pbmNsdWRlcyhcIml0ZW1cIikpIHtcblx0XHRpZiAoc3RhdHVzPy5hbGFybSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJhbGFybVwiLCBcIlwiKSArIFwiIGFsYXJtXCI7XG5cdFx0fVxuXHRcdGlmIChzdGF0dXM/LmNoYW5naW5nKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImNoYW5naW5nXCIsIFwiXCIpICsgXCIgY2hhbmdpbmdcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8ubWFudWFsKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIm1hbnVhbFwiLCBcIlwiKSArIFwiIG1hbnVhbFwiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5tYXNrZWQgJiYgIXN0YXR1cy5hbGFybSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJuby1hbGFybS1tYXNrXCIsIFwiXCIpICsgXCIgbm8tYWxhcm0tbWFza1wiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5tYXNrZWQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibWFza2VkXCIsIFwiXCIpICsgXCIgbWFza2VkXCI7XG5cdFx0fVxuXHRcdGlmIChzdGF0dXM/LmFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGFjdGl2YXRlZFwiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5kZUFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgZGVhY3RpdmF0ZWRcIjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNsYXNzTmFtZTtcbn07XG4iLCIvKipcbiAqIEhNSSBDb21wb25lbnQgLSBIZWF0IEV4Y2hhbmdlciB0eXBlcyBkZWZzXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRQcm9wcyB9IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEl0ZW1JZFBvc2l0aW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9hcGkvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEhYX0NPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLkhlYXRFeGNoYW5nZXJcIjtcblxuY29uc3QgSGVhdEV4Y2hhbmdlclR5cGVzID0gW1xuXHRcInBsYXRlXCIsXG5cdFwidHVidWxhclwiLFxuXTtcbmV4cG9ydCB0eXBlIEhlYXRFeGNoYW5nZXJUeXBlcyA9ICh0eXBlb2YgSGVhdEV4Y2hhbmdlclR5cGVzKVtudW1iZXJdO1xuZXhwb3J0IGVudW0gSHhNb2RlcyB7XG5cdGFsYXJtID0gXCJhbGFybVwiLFxuXHRoZWF0aW5nID0gXCJoZWF0aW5nXCIsXG5cdGNvb2xpbmcgPSBcImNvb2xpbmdcIixcbn07XG5cblxuZXhwb3J0IHR5cGUgSHhQcm9wcyA9IHtcblx0dHlwZT86IEhlYXRFeGNoYW5nZXJUeXBlcztcblx0aXRlbU5hbWU/OiBzdHJpbmc7XG5cdG1vZGU/OiBIeE1vZGVzW2tleW9mIEh4TW9kZXNdO1xuXHRsb2NhdGU/OiBib29sZWFuO1xuXHRzaG93TGFiZWw/OiBib29sZWFuO1xuXHRsYWJlbFBvc2l0aW9uPzogSXRlbUlkUG9zaXRpb25UeXBlXG59XG5cbmV4cG9ydCBjb25zdCBIeEl0ZW1MaXN0ID0gW1xuXHRcIml0ZW0tMVwiLFxuXHRcIml0ZW0tMlwiLFxuXHRcIml0ZW0tM1wiLFxuXHRcIml0ZW0tNFwiLFxuXHRcIml0ZW0tNVwiLFxuXHRcIml0ZW0tNlwiLFxuXHRcIml0ZW0tN1wiLFxuXHRcImJhc2UtMVwiLFxuXHRcImxvY2F0ZVwiLFxuXVxuZXhwb3J0IHR5cGUgSHhJdGVtcyA9ICh0eXBlb2YgSHhJdGVtTGlzdClbbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgSHhDb21wb3VuZENvbnRleHRUeXBlID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHRpdGVtUHJvcHM6IEh4UHJvcHM7XG5cdG9uQWN0aW9uUGVyZm9ybWVkOiAoKSA9PiB2b2lkO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcbiIsIi8qKlxuICogSE1JIENvbXBvbmVudCAtIEhlYXQgRXhjaGFuZ2VyIC0gUGxhdGUgVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuaW1wb3J0IHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IEh4SXRlbUxpc3QsIHR5cGUgSGVhdEV4Y2hhbmdlclR5cGVzLCB0eXBlIEh4TW9kZXMgfSBmcm9tICcuLi8uLi8uLi9hci10eXBlcy9wcm9jZXNzT2JqZWN0cy9oZWF0RXhjaGFuZ2Vycy9oeC10eXBlcydcbmltcG9ydCB7IGdldEJvb2xBdEluZGV4IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbnVtYmVyVXRpbCc7XG5leHBvcnQgY29uc3QgaHhJdGVtTmFtZXMgPSBIeEl0ZW1MaXN0Lm1hcChcblx0KGtleSwgaW5kZXgpID0+IHtcblx0XHQvLyBjb25zb2xlLmxvZyhgSW4gYnVpbGQgSXRlbU5hbWVzIG5hbWUgJHtrZXl9IGluZGV4ICR7aW5kZXh9YCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGtleTogdXVpZHY0KCksXG5cdFx0XHRuYW1lOiBrZXksXG5cdFx0XHRpbmRleDogaW5kZXgsXG5cdFx0fTtcblx0fVxuKTtcblxuY29uc3QgZ2V0SHhDb25maWd1cmF0aW9uID0gKHR5cGU6IEhlYXRFeGNoYW5nZXJUeXBlcyk6bnVtYmVyID0+e1xuXHRzd2l0Y2ggKHR5cGUpe1xuXHRcdGNhc2UgXCJwbGF0ZVwiOlxuXHRcdFx0cmV0dXJuIDFcblx0XHRjYXNlIFwidHViZWxhclwiOlxuXHRcdFx0cmV0dXJuIDFcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgRXJyb3IoYEluIGdldFB1bXBDb25maWd1cmF0aW9uKCkgcHVtcCB0eXBlOiAke3R5cGV9IG5vdCBmb3VuZGApXG5cdH1cbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0SHhJdGVtQ2xhc3NOYW1lID0gKFxuXHRpbmRleDogbnVtYmVyLFxuXHR0eXBlOiBIZWF0RXhjaGFuZ2VyVHlwZXMsXG5cdG1vZGU/OiBIeE1vZGVzW2tleW9mIEh4TW9kZXNdLFxuXHQpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBjb25maWd1cmF0aW9uID0gZ2V0SHhDb25maWd1cmF0aW9uKHR5cGUpXG5cdGxldCBjbGFzc05hbWUgPSBcIlwiO1xuXHQvLyBIYW5kbGUgdGhlIGZhY3QgdGhhdCBBY3RpdmF0ZWRDb25maWcgYW5kIERlYWN0aXZhdGVkQ29uZmlnIGFyZSBvcHRpb25hbCBhbmQgbWF5YmUgdW5kZWZpbmVkXG5cdGlmIChpbmRleCA8IDIpIHtcblx0XHRpZiAoZ2V0Qm9vbEF0SW5kZXgoY29uZmlndXJhdGlvbiwgaW5kZXgpKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBgc2hvdyBpdGVtICR7dHlwZX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2xhc3NOYW1lO1xufVxuZXhwb3J0IGNvbnN0IGdldEh4TW9kZUNsYXNzTmFtZXMgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIG1vZGU6IEh4TW9kZXNba2V5b2YgSHhNb2Rlc10pPT57XG5cdC8vIEFkZGl0aW9ucyB0byB0aGUgY2xhc3NOYW1lXG5cblx0aWYgKGNsYXNzTmFtZS5pbmNsdWRlcyhcInNob3dcIikgJiYgIWNsYXNzTmFtZS5pbmNsdWRlcyhcIml0ZW1cIikpIHtcblxuXHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0Y2FzZSBcImFsYXJtXCI6XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWxhcm1TdGF0ZVwiLCBcIlwiKSArIFwiIEFsYXJtU3RhdGVcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiaGVhdGluZ1wiOlxuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImhlYXRpbmdcIiwgXCJcIikgKyBcIiBoZWF0aW5nXCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNvb2xpbmdcIjpcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJjb29saW5nXCIsIFwiXCIpICsgXCIgY29vbGluZ1wiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0cmV0dXJuIGNsYXNzTmFtZTtcbn07XG5cbmV4cG9ydCBjb25zdCBidWlsZENvbXBvbmVudEVsZW1lbnRzID0gKFxuXHRiYXNlRWxlbWVudHM6IG51bWJlcixcblx0ZHluYW1pY0VsZW1lbnRzOiBudW1iZXJcbikgPT4ge1xuXHRsZXQgdmFsdWU9W107XG5cdGZvciAobGV0IGk9MDsgaTwgYmFzZUVsZW1lbnRzK2R5bmFtaWNFbGVtZW50czsgaSsrKXtcblx0XHRsZXQgaXRlbSA9IHtcblx0XHRcdGtleTogdXVpZHY0KCksXG5cdFx0XHRuYW1lOiBpIDwgYmFzZUVsZW1lbnRzID8gYGJhc2UtJHtpKzF9YCA6IGBkeW5hbWljLSR7aSsoMS1keW5hbWljRWxlbWVudHMpfWAsXG5cdFx0XHRpbmRleDogaVxuXHRcdH07XG5cdFx0dmFsdWUucHVzaChpdGVtKTtcblx0fVxuXHRsZXQgaXRlbSA9IHtcblx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdG5hbWU6IFwibG9jYXRlXCIsXG5cdFx0aW5kZXg6IGJhc2VFbGVtZW50cytkeW5hbWljRWxlbWVudHNcblx0fTtcblx0Ly8gbG9jYXRlIGFsd2F5cyBsYXN0IGVsZW1lbnRcblx0dmFsdWUucHVzaChpdGVtKVxuXHRyZXR1cm4gdmFsdWVcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdHlwZSBDb21tYW5kVmFsdmVNcFByb3BzIH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuLy8gaW1wb3J0IHsgSWNvbkF1dG8sIEljb25IYW5kQ2xpY2sgfSBmcm9tICcuLi91dGlscy9pY29ucyc7XG5pbXBvcnQgeyBQcm9wZXJ0eVRyZWUgfSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbXBvbmVudFByb3BzLFxuXHRDb21wb25lbnRNZXRhLFxuXHRQQ29tcG9uZW50LFxuXHRTaXplT2JqZWN0LFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7IC8vJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG4vLyBpbXBvcnQgeyBpbml0aWFsQ29udHJvbFN0YXRlIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyIH0gZnJvbSBcIi4uL2FwaS9ob29rc1wiO1xuaW1wb3J0IHtcblx0SE1JX0NPTVBPTkVOVF9DTEFTUyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU4sXG5cdElBX1NZTUJPTF9DT01QT05FTlRfUk9XLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVIsXG5cdENPTU1BTkRfVkFMVkVfTVBfQ09NUE9ORU5UX1RZUEUsXG59IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gQ09NTUFORF9WQUxWRV9NUF9DT01QT05FTlRfVFlQRTtcblxuLy8gY29uc3QgYXJlRXF1YWwgPSAoXG4vLyBcdHByZXZQcm9wczogQ29tcG9uZW50UHJvcHM8Q29tbWFuZFZhbHZlTXBQcm9wcz4sXG4vLyBcdG5leHRQcm9wczogQ29tcG9uZW50UHJvcHM8Q29tbWFuZFZhbHZlTXBQcm9wcz5cbi8vICkgPT4ge1xuLy8gXHQvLyByZXR1cm4gdHJ1ZSBpZiBwcm9wcyBhcmUgZXF1YWwsIGZhbHNlIGlmIHJlLXJlbmRlciBpcyBuZWVkZWRcbi8vIFx0cmV0dXJuIHByZXZQcm9wcy5wcm9wcyA9PT0gbmV4dFByb3BzLnByb3BzO1xuLy8gfTtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuXG4gKi9cbmV4cG9ydCBjb25zdCBDb21tYW5kVmFsdmVNcCA9XG5cdChwcm9wczogQ29tcG9uZW50UHJvcHM8Q29tbWFuZFZhbHZlTXBQcm9wcz4pID0+IHtcblx0XHRjb25zdCB7IHN0YXRlLCByZWR1Y2VyIH0gPSB1c2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIoKTtcblx0XHRjb25zdCB7IGVtaXQgfSA9IHByb3BzO1xuXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRcdC8vIFN1YnNjcmliZSB0byBjaGFuZ2VzIG9uIHRoZSBcImNvbW1hbmRcIiBwcm9wZXJ0eVxuXHRcdFx0Y29uc3QgdW5zdWJzY3JpYmUgPSBwcm9wcy5zdG9yZS5wcm9wcy5zdWJzY3JpYmUoKHRyZWU6IFByb3BlcnR5VHJlZSkgPT4ge1xuXHRcdFx0XHQvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuZXZlciBcImNvbW1hbmRcIiBjaGFuZ2VzXG5cdFx0XHRcdGNvbnN0IGNvbW1hbmQgPSB0cmVlLnJlYWQoXCJjb21tYW5kXCIpO1xuXHRcdFx0XHRjb25zdCB7IG1haW4sIHVwcGVyU2VhdCwgbG93ZXJTZWF0ICwgYXZhaWxhYmxlfSA9IGNvbW1hbmQ7XG5cdFx0XHRcdC8vIFlvdSBjYW4gdXBkYXRlIGxvY2FsIHN0YXRlIG9yIHBlcmZvcm0gb3RoZXIgYWN0aW9ucyBoZXJlXG5cdFx0XHRcdC8vIFVwZGF0ZSBhdmFpbGFibGUgc3RhdGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmIChzdGF0ZS5jb21tYW5kPy5hdmFpbGFibGUgJiYgYXZhaWxhYmxlKSB7XG5cdFx0XHRcdFx0aWYgKGF2YWlsYWJsZS5tYWluICE9PSBzdGF0ZS5jb21tYW5kLmF2YWlsYWJsZS5tYWluKSB7XG5cdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZU1haW5BdmFpbGFibGUoXG5cdFx0XHRcdFx0XHRcdGF2YWlsYWJsZS5tYWluID8gdHJ1ZSA6IGZhbHNlXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYXZhaWxhYmxlLnVwcGVyU2VhdCAhPT0gc3RhdGUuY29tbWFuZC5hdmFpbGFibGUudXBwZXJTZWF0KSB7XG5cdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZVVwcGVyU2VhdEF2YWlsYWJsZShcblx0XHRcdFx0XHRcdFx0YXZhaWxhYmxlLnVwcGVyU2VhdCA/IHRydWUgOiBmYWxzZVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGF2YWlsYWJsZS5sb3dlclNlYXQgIT09IHN0YXRlLmNvbW1hbmQuYXZhaWxhYmxlLmxvd2VyU2VhdCkge1xuXHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVMb3dlclNlYXRBdmFpbGFibGUoXG5cdFx0XHRcdFx0XHRcdGF2YWlsYWJsZS5sb3dlclNlYXQgPyB0cnVlIDogZmFsc2Vcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXG5cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RhdGUuY29tbWFuZD8ubWFpbiAmJiBtYWluKSB7XG5cdFx0XHRcdFx0aWYgKG1haW4uYXV0b01hbnVhbCAhPT0gc3RhdGUuY29tbWFuZC5tYWluLmF1dG9NYW51YWwpIHtcblx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlQXV0b01hblNlbGVjdGlvbihcblx0XHRcdFx0XHRcdFx0IW1haW4uYXV0b01hbnVhbCA/IFwiYXV0b1wiIDogXCJtYW51YWxcIlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG1haW4uYWN0aXZhdGlvbiAhPT0gc3RhdGUuY29tbWFuZC5tYWluLmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdGlmICghbWFpbi5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlTWFpbk1hbnVhbE9mZigpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChtYWluLmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVNYWluTWFudWFsT24oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBVcGRhdGUgbG93ZXJTZWF0IHN0YXRlIGlmIG5lZWRlZFxuXHRcdFx0XHRpZiAoc3RhdGUuY29tbWFuZD8ubG93ZXJTZWF0ICYmIGxvd2VyU2VhdCkge1xuXHRcdFx0XHRcdGlmIChsb3dlclNlYXQuYWN0aXZhdGlvbiAhPT0gc3RhdGUuY29tbWFuZC5sb3dlclNlYXQuYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0aWYgKCFsb3dlclNlYXQuYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZUxzbE1hbnVhbE9mZigpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChsb3dlclNlYXQuYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZUxzbE1hbnVhbE9uKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFVwZGF0ZSB1cHBlclNlYXQgc3RhdGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmIChzdGF0ZS5jb21tYW5kPy51cHBlclNlYXQgJiYgdXBwZXJTZWF0KSB7XG5cdFx0XHRcdFx0aWYgKHVwcGVyU2VhdC5hY3RpdmF0aW9uICE9PSBzdGF0ZS5jb21tYW5kLnVwcGVyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXVwcGVyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlVXNsTWFudWFsT2ZmKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHVwcGVyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlVXNsTWFudWFsT24oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRpZiAodHlwZW9mIHVuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHR1bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH0sIFtwcm9wcy5zdG9yZS5wcm9wc10pO1xuXHRcdGNvbnN0IHsgbWFpbiwgdXBwZXJTZWF0LCBsb3dlclNlYXQsIGF2YWlsYWJsZSB9ID0gc3RhdGUuY29tbWFuZCA/PyB7fTtcblxuXHRcdC8vIGNvbnN0IGlzSW50ZXJsb2NrZWQgPSAoaW50ZXJsb2NrczogYm9vbGVhbltdKTogYm9vbGVhbiA9PiB7XG5cdFx0XHQvLyBcdHJldHVybiBpbnRlcmxvY2tzLmluY2x1ZGVzKHRydWUsIDApO1xuXHRcdFx0Ly8gfTtcblx0XHRjb25zb2xlLmxvZyhgQ29tbWFuZCBQcm9wczogJHtKU09OLnN0cmluZ2lmeShzdGF0ZS5jb21tYW5kLG51bGwsMil9YClcblx0XHRjb25zb2xlLmxvZyhgTWFpbiBBdmFpbDogJHtKU09OLnN0cmluZ2lmeShhdmFpbGFibGU/Lm1haW4sbnVsbCwyKX1gKVxuXHRcdGNvbnNvbGUubG9nKGBDb21tYW5kIFByb3BzOiAke0pTT04uc3RyaW5naWZ5KGF2YWlsYWJsZT8udXBwZXJTZWF0LG51bGwsMil9YClcblx0XHRjb25zb2xlLmxvZyhgQ29tbWFuZCBQcm9wczogJHtKU09OLnN0cmluZ2lmeShhdmFpbGFibGU/Lmxvd2VyU2VhdCxudWxsLDIpfWApXG5cblx0XHRjb25zdCBoYW5kbGVNYWluQXV0b01hbnVhbFNlbGVjdGlvbiA9IChtb2RlOiBcImF1dG9cIiB8IFwibWFudWFsXCIpOiB2b2lkID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlQXV0b01hblNlbGVjdGlvbihtb2RlKTtcblx0XHRcdGlmIChtb2RlID09PSBcImF1dG9cIikge1xuXHRcdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLm1haW4uYXV0b01hbnVhbFwiLCBmYWxzZSk7IC8vIGZhbHNlID0gYXV0b1xuXHRcdFx0fSBlbHNlIGlmIChtb2RlID09PSBcIm1hbnVhbFwiKSB7XG5cdFx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQubWFpbi5hdXRvTWFudWFsXCIsIHRydWUpOyAvLyB0cnVlID0gbWFudWFsXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGhhbmRsZU1haW5NYW51YWxPbiA9ICgpID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlTWFpbk1hbnVhbE9uKCk7XG5cdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLm1haW4uYWN0aXZhdGlvblwiLCB0cnVlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGhhbmRsZU1haW5NYW51YWxPZmYgPSAoKSA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZU1haW5NYW51YWxPZmYoKTtcblx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQubWFpbi5hY3RpdmF0aW9uXCIsIGZhbHNlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGhhbmRsZVVzbE1hbnVhbE9uID0gKCkgPT4ge1xuXHRcdFx0cmVkdWNlci51cGRhdGVVc2xNYW51YWxPbigpO1xuXHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC51cHBlclNlYXQuYWN0aXZhdGlvblwiLCB0cnVlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGhhbmRsZVVzbE1hbnVhbE9mZiA9ICgpID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlVXNsTWFudWFsT2ZmKCk7XG5cdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLnVwcGVyU2VhdC5hY3RpdmF0aW9uXCIsIGZhbHNlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGhhbmRsZUxzbE1hbnVhbE9uID0gKCkgPT4ge1xuXHRcdFx0cmVkdWNlci51cGRhdGVMc2xNYW51YWxPbigpO1xuXHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC5sb3dlclNlYXQuYWN0aXZhdGlvblwiLCB0cnVlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGhhbmRsZUxzbE1hbnVhbE9mZiA9ICgpID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlTHNsTWFudWFsT2ZmKCk7XG5cdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLmxvd2VyU2VhdC5hY3RpdmF0aW9uXCIsIGZhbHNlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGNvbXBvbmVudENsYXNzTmFtZSA9IFwiY29tbWFuZC12YWx2ZS1tcFwiO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHsuLi5lbWl0KHtcblx0XHRcdFx0XHRjbGFzc2VzOiBbYCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU59YF0sXG5cdFx0XHRcdH0pfVxuXHRcdFx0XHRkYXRhLWNvbXBvbmVudD17Q09NUE9ORU5UX1RZUEV9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1JPV31gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSfWB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0hNSV9DT01QT05FTlRfQ0xBU1N9ICR7Y29tcG9uZW50Q2xhc3NOYW1lfWB9PlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwibWFpbi1sYWJlbFwiPnttYWluPy5sYWJlbH08L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0cm9sZT1cImdyb3VwXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgb3V0bGluZWQgbWFpbi1hdXRvLW1hbnVhbFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IW1haW4/LmF1dG9NYW51YWwgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXshYXZhaWxhYmxlPy5tYWlufVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlTWFpbkF1dG9NYW51YWxTZWxlY3Rpb24oXCJhdXRvXCIpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdEF1dG8gey8qIDxJY29uQXV0byAvPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFpbj8uYXV0b01hbnVhbCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFhdmFpbGFibGU/Lm1haW59XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVNYWluQXV0b01hbnVhbFNlbGVjdGlvbihcIm1hbnVhbFwiKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRNYW51YWxcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8SWNvbkhhbmRDbGljayAvPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgcm9sZT1cImdyb3VwXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIG91dGxpbmVkIG1haW4tb24tb2ZmXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1haW4/LmFjdGl2YXRpb24gPyBcInNlbGVjdGVkXCIgOiBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IWF2YWlsYWJsZT8ubWFpbiB8fCAhbWFpbj8uYXV0b01hbnVhbFxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTWFpbk1hbnVhbE9ufVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdE9uIHsvKiA8SWNvbkF1dG8gLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFtYWluPy5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFhdmFpbGFibGU/Lm1haW4gfHwgIW1haW4/LmF1dG9NYW51YWxcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU1haW5NYW51YWxPZmZ9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0T2ZmXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPEljb25IYW5kQ2xpY2sgLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwidXBwZXItc2VhdC1sYWJlbFwiPnt1cHBlclNlYXQ/LmxhYmVsfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRyb2xlPVwiZ3JvdXBcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBvdXRsaW5lZCB1cHBlci1zZWF0LW9uLW9mZlwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXBwZXJTZWF0Py5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFhdmFpbGFibGU/LnVwcGVyU2VhdCB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQhbWFpbj8uYXV0b01hbnVhbFxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlVXNsTWFudWFsT259XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0T24gey8qIDxJY29uQXV0byAvPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IXVwcGVyU2VhdD8uYWN0aXZhdGlvbiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQhYXZhaWxhYmxlPy51cHBlclNlYXQgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0IW1haW4/LmF1dG9NYW51YWxcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVVzbE1hbnVhbE9mZn1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRPZmZcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8SWNvbkhhbmRDbGljayAvPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJsb3dlci1zZWF0LWxhYmVsXCI+e2xvd2VyU2VhdD8ubGFiZWx9PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdHJvbGU9XCJncm91cFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIG91dGxpbmVkIGxvd2VyLXNlYXQtb24tb2ZmXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsb3dlclNlYXQ/LmFjdGl2YXRpb24gPyBcInNlbGVjdGVkXCIgOiBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IWF2YWlsYWJsZT8ubG93ZXJTZWF0IHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFtYWluPy5hdXRvTWFudWFsXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVMc2xNYW51YWxPbn1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRPbiB7LyogPEljb25BdXRvIC8+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQhbG93ZXJTZWF0Py5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFhdmFpbGFibGU/Lmxvd2VyU2VhdCB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQhbWFpbj8uYXV0b01hbnVhbFxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTHNsTWFudWFsT2ZmfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e1widHJ1ZVwifVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdE9mZlxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxJY29uSGFuZENsaWNrIC8+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIENvbW1hbmRWYWx2ZU1wTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBDb21tYW5kVmFsdmVNcDtcblx0fVxuXG5cdGdldERlZmF1bHRTaXplKCk6IFNpemVPYmplY3Qge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMjgwLFxuXHRcdFx0aGVpZ2h0OiAxNDAsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IENvbW1hbmRWYWx2ZU1wUHJvcHMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb21tYW5kOiB7XG5cdFx0XHRcdGF2YWlsYWJsZToge1xuXHRcdFx0XHRcdG1haW46IHRyZWUucmVhZEJvb2xlYW4oXCJjb21tYW5kLmF2YWlsYWJsZS5tYWluXCIsKSxcblx0XHRcdFx0XHR1cHBlclNlYXQ6IHRyZWUucmVhZEJvb2xlYW4oXCJjb21tYW5kLmF2YWlsYWJsZS51cHBlclNlYXRcIiksXG5cdFx0XHRcdFx0bG93ZXJTZWF0OiB0cmVlLnJlYWRCb29sZWFuKFwiY29tbWFuZC5hdmFpbGFibGUubG93ZXJTZWF0XCIpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtYWluOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHRyZWUucmVhZFN0cmluZyhcImNvbW1hbmRzLm1haW4ubGFiZWxcIiwgXCJcIiksXG5cdFx0XHRcdFx0YXV0b01hbnVhbDogdHJlZS5yZWFkQm9vbGVhbihcImNvbW1hbmQubWFpbi5hdXRvTWFudWFsXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRhY3RpdmF0aW9uOiB0cmVlLnJlYWRCb29sZWFuKFwiY29tbWFuZC5tYWluLmFjdGl2YXRpb25cIiwgZmFsc2UpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cHBlclNlYXQ6IHtcblx0XHRcdFx0XHRsYWJlbDogdHJlZS5yZWFkU3RyaW5nKFwiY29tbWFuZHMudXBwZXJTZWF0LmxhYmVsXCIsIFwiXCIpLFxuXHRcdFx0XHRcdGFjdGl2YXRpb246IHRyZWUucmVhZEJvb2xlYW4oXCJjb21tYW5kLnVwcGVyU2VhdC5hY3RpdmF0aW9uXCIsIGZhbHNlKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0bG93ZXJTZWF0OiB7XG5cdFx0XHRcdFx0bGFiZWw6IHRyZWUucmVhZFN0cmluZyhcImNvbW1hbmRzLmxvd2VyU2VhdC5sYWJlbFwiLCBcIlwiKSxcblx0XHRcdFx0XHRhY3RpdmF0aW9uOiB0cmVlLnJlYWRCb29sZWFuKFwiY29tbWFuZC5sb3dlclNlYXQuYWN0aXZhdGlvblwiLCBmYWxzZSksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cdH1cbn1cblxuLyoqXG4gKlxuZ2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IE15UHJvcFR5cGUge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIHdpbGwgZ2l2ZSB0aGUgcHJvcGVydHkgdHJlZSBhcyBhIHBsYWluIGpzIG9iamVjdCwgaW5zdGVhZCBvZiBhbiBpbnN0YW5jZSBvZiBQcm9wZXJ0eVRyZWVcbiAgICAgICAgLy8gdGhpcyB3b3VsZCBsZXQgeW91IHJlYWQgdGhlIHZhbHVlIG9mIHRoZSB0cmVlIHZpYSBgdGhpcy5wcm9wcy5wcm9wcy5qc29uYC4gIFNhbWUgcmVzdWx0IG9jY3VycyBpZlxuICAgICAgICAvLyBjYWxsaW5nIHRyZWUucmVhZCgpLCB3aXRob3V0IHBhc3NpbmcgYSBwYXRoIHBhcmFtZXRlci5cbiAgICAgICBqc29uOiB0cmVlLnRvUGxhaW5PYmplY3QoKVxuXG5cbiAgICAgICAvLyBJZiB5b3UgaGFkIHRvIHdyaXRlIHRvIHRoZSB0cmVlJ3MgJ2RhdGEnIG5vZGUsIHBhc3NpbmcgaW4gYSBjYWxsYmFjayBmdW5jdGlvbiBpbnN0ZWFkIG9mIHRoZSBhY3R1YWxcbiAgICAgICAvLyBQcm9wZXJ0eVRyZWUgd2lsbCBzaW1wbGlmeSB1bml0IHRlc3RhYmlsaXR5IG9mIHlvdXIgY29tcG9uZW50IG91dHNpZGUgb2YgcGVyc3BlY3RpdmUncyBlbnZpcm9ubWVudC5cbiAgICAgICAvLyBZb3Ugd291bGQgY2FsbCB0aGlzIHZpYSB0aGlzLnByb3BzLnByb3BzLndyaXRlRGF0YShzb21lTmV3RGF0YSlcbiAgICAgICB3cml0ZURhdGE6IChuZXdKc29uKSAtPiB0cmVlLndyaXRlKFwiZGF0YVwiLCBuZXdKc29uKVxuICAgIH1cbn1cbiAqL1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJdGVtSWRQb3NpdGlvblR5cGV9IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRQcm9wZXJ0eVRyZWUsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjsgLy8nQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB0eXBlIHsgSHhQcm9wcyB9IGZyb20gXCIuLi9hci10eXBlcy9wcm9jZXNzT2JqZWN0cy9oZWF0RXhjaGFuZ2Vycy9oeC10eXBlc1wiO1xuaW1wb3J0IHsgSGVhdEV4Y2hhbmdlckNvbXBvdW5kIH0gZnJvbSBcIi4vcHJvY2Vzcy1vYmplY3RzL2hlYXQtZXhjaGFuZ2Vycy9IZWF0RXhjaGFuZ2VyQ29tcG91bmRcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLkhlYXRFeGNoYW5nZXJcIjtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuICovXG5leHBvcnQgY2xhc3MgSGVhdEV4Y2hhbmdlciBleHRlbmRzIENvbXBvbmVudDxDb21wb25lbnRQcm9wczxIeFByb3BzPiwgYW55PiB7XG5cdHZhbHZlUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzOiBDb21wb25lbnRQcm9wczxIeFByb3BzPikge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnZhbHZlUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuXHR9XG5cblx0Ly8gVGhpcyBpcyBhIGxpZmVjeWNsZSBtZXRob2QgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IG1vdW50ZWQgdG8gdGhlIERPTS5cblx0Y29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG5cdFx0Ly8gTm8gbmVlZCB0byBpbml0aWFsaXplIHZhbHZlUmVmIGhlcmVcblx0fVxuXHR0eXBlID0gdGhpcy5wcm9wcy5wcm9wcy50eXBlO1xuXHRpdGVtTmFtZSA9IHRoaXMucHJvcHMucHJvcHMuaXRlbU5hbWU7XG5cdG1vZGUgPSB0aGlzLnByb3BzLnByb3BzLm1vZGU7XG5cdGxvY2F0ZSA9IHRoaXMucHJvcHMucHJvcHMubG9jYXRlO1xuXHRzaG93TGFiZWw6IGJvb2xlYW4gPSB0aGlzLnByb3BzLnByb3BzLnNob3dMYWJlbCB8fCBmYWxzZTtcblx0bGFiZWxQb3NpdGlvbjogSXRlbUlkUG9zaXRpb25UeXBlID0gdGhpcy5wcm9wcy5wcm9wcy5sYWJlbFBvc2l0aW9uIHx8IFwibGVmdFwiO1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVyIGZvciB0aGUgY29tcG9uZW50J3MgYWN0aW9uIGV2ZW50LlxuXHQgKi9cblx0b25BY3Rpb25QZXJmb3JtZWQgPSAoKSA9PiB7XG5cdFx0Ly8gSWYgdGhlIGRlc2lnbmVyIGlzIGluIFwiZGVzaWduXCIgbW9kZSwgZG9uJ3QgZG8gYW55dGhpbmdcblx0XHRpZiAoIXRoaXMucHJvcHMuZXZlbnRzRW5hYmxlZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBpcyBkaXNhYmxlZCBpbiB0aGUgZGVzaWduLXNjb3BlXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGNsaWNrZWQhXCIpO1xuXHRcdHRoaXMucHJvcHMuY29tcG9uZW50RXZlbnRzLmZpcmVDb21wb25lbnRFdmVudChcIm9uQWN0aW9uUGVyZm9ybWVkXCIsIHt9KTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdC8vIDxkaXY+VGhpcyBpcyBWYWx2ZTwvZGl2PlxuXHRcdFx0PEhlYXRFeGNoYW5nZXJDb21wb3VuZC5Sb290XG5cdFx0XHRcdGNvbXBvbmVudFByb3BzPXt0aGlzLnByb3BzfVxuXHRcdFx0XHRpdGVtUHJvcHM9e3RoaXMucHJvcHMucHJvcHN9XG5cdFx0XHRcdG9uQWN0aW9uUGVyZm9ybWVkPXt0aGlzLm9uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0PlxuXHRcdFx0XHQ8SGVhdEV4Y2hhbmdlckNvbXBvdW5kLnBsYXRlIC8+XG5cdFx0XHRcdDxIZWF0RXhjaGFuZ2VyQ29tcG91bmQucG9wb3ZlciBhbmNob3JFbD17dGhpcy52YWx2ZVJlZi5jdXJyZW50fSAvPlxuXHRcdFx0PC9IZWF0RXhjaGFuZ2VyQ29tcG91bmQuUm9vdD5cblx0XHQpO1xuXHR9XG59XG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIEhlYXRFeGNoYW5nZXJNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIEhlYXRFeGNoYW5nZXI7XG5cdH1cblxuXHRnZXREZWZhdWx0U2l6ZSgpOiBTaXplT2JqZWN0IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IDQwLFxuXHRcdFx0aGVpZ2h0OiA3MCxcblx0XHR9O1xuXHR9XG5cblx0Ly8gSW52b2tlZCB3aGVuIGFuIHVwZGF0ZSB0byB0aGUgUHJvcGVydHlUcmVlIGhhcyBvY2N1cnJlZCxcblx0Ly8gZWZmZWN0aXZlbHkgbWFwcGluZyB0aGUgdmFsdmVTdGF0dXMgb2YgdGhlIHRyZWUgdG8gY29tcG9uZW50IHByb3BzLlxuXHRnZXRQcm9wc1JlZHVjZXIodHJlZTogUHJvcGVydHlUcmVlKTogSHhQcm9wcyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IHRyZWUucmVhZFN0cmluZyhcInR5cGVcIiwgXCJwbGF0ZVwiKSxcblx0XHRcdG1vZGU6IHRyZWUucmVhZFN0cmluZyhcIm1vZGVcIiwgXCJoZWF0aW5nXCIpLFxuXHRcdFx0aXRlbU5hbWU6IHRyZWUucmVhZFN0cmluZyhcIml0ZW1OYW1lXCIsIFwiXCIpLFxuXHRcdFx0bG9jYXRlOiB0cmVlLnJlYWRCb29sZWFuKFwibG9jYXRlXCIsIGZhbHNlKSxcblx0XHRcdHNob3dMYWJlbDogdHJlZS5yZWFkQm9vbGVhbihcInNob3dMYWJlbFwiLCBmYWxzZSksXG5cdFx0XHRsYWJlbFBvc2l0aW9uOiB0cmVlLnJlYWRTdHJpbmcoXCJsYWJlbFBvc2l0aW9uXCIsIFwidG9wLWxlZnRcIiksXG5cdFx0fTtcblx0fVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eVRyZWUgfSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbXBvbmVudFByb3BzLFxuXHRDb21wb25lbnRNZXRhLFxuXHRQQ29tcG9uZW50LFxuXHRTaXplT2JqZWN0LFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7XG5cbi8vIGltcG9ydCB7IHVzZUNyZWF0ZUNvbnRleHQgfSBmcm9tIFwic3JjL3V0aWxzL2NyZWF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IFBhcmFtZXRlcnNMaXN0U3RhdGUsIFBhcmFtSXRlbSB9IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcbmltcG9ydCB7XG5cdFBBUkFNRVRFUl9MSVNUX0NPTVBPTkVOVF9UWVBFLFxuXHRITUlfQ09NUE9ORU5UX0NMQVNTLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTixcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1csXG5cdElBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUixcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG50eXBlIFBhcmFtZXRlcnNMaXN0Q29tcG9uZW50UHJvcHMgPSB7XG5cdHBhcmFtZXRlcnM6IFBhcmFtSXRlbVtdO1xufTtcbmNvbnN0IGluaXRQYXJhbWV0ZXJzID0gW1xuXHR7XG5cdFx0bGFiZWw6IHtcblx0XHRcdHRleHQ6IFwidGV4dFwiLFxuXHRcdH0sXG5cdFx0aW5wdXQ6IHtcblx0XHRcdHZhbHVlOiBudWxsLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgYSBOdW1iZXJcIixcblx0XHR9LFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gUEFSQU1FVEVSX0xJU1RfQ09NUE9ORU5UX1RZUEU7XG5cbmV4cG9ydCBjb25zdCBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50ID0gKFxuXHRwcm9wczogQ29tcG9uZW50UHJvcHM8UGFyYW1ldGVyc0xpc3RDb21wb25lbnRQcm9wcz5cbikgPT4ge1xuXHRjb25zdCB0cmFuc2Zvcm1lZFByb3BzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG5cdFx0Y29uc3QgeyBwYXJhbWV0ZXJzIH0gPSBwcm9wcy5wcm9wcyB8fCBpbml0UGFyYW1ldGVycztcblx0XHRyZXR1cm4gcGFyYW1ldGVycztcblx0fSwgW3Byb3BzLnByb3BzLnBhcmFtZXRlcnNdKTtcblx0Y29uc3QgeyBlbWl0IH0gPSBwcm9wcztcblx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gXCJwYXJhbWV0ZXItbGlzdFwiO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRjbGFzc2VzOiBbYCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU59YF0sXG5cdFx0XHR9KX1cblx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1d9YH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVJ9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0hNSV9DT01QT05FTlRfQ0xBU1N9ICR7Y29tcG9uZW50Q2xhc3NOYW1lfWB9PlxuXHRcdFx0XHRcdFx0e3RyYW5zZm9ybWVkUHJvcHMubWFwKChwYXJhbTogUGFyYW1JdGVtLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHsgbGFiZWwsIGlucHV0IH0gPSBwYXJhbTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YCR7bGFiZWwudGV4dH0tcGFyYW1ldGVyJHtpbmRleH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmllbGQgc21hbGxcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsLnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZXVcIj57aW5wdXQuZXV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2Ake2xhYmVsLnRleHR9LXBhcmFtZXRlciR7aW5kZXh9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRNb2RlPXtpbnB1dC5pbnB1dG1vZGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm49e2lucHV0LnBhdHRlcm4gfHwgXCJbMC05XSpcIn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2lucHV0LnBsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWlucHV0LmVkaXRhYmxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49e2lucHV0Lm1pbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4PXtpbnB1dC5tYXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dC52YWx1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuc3RvcmUucHJvcHMud3JpdGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgcGFyYW1ldGVyc1ske2luZGV4fV0uaW5wdXQudmFsdWVgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5jdXJyZW50VGFyZ2V0LnZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB1cGRhdGVWYWx1ZShwYXJzZUZsb2F0KHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpLnRvRml4ZWQoMikpLCBpbmRleCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50TWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAyNDAsXG5cdFx0XHRoZWlnaHQ6IDI0MCxcblx0XHR9O1xuXHR9XG5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFBhcmFtZXRlcnNMaXN0U3RhdGUge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYXJhbWV0ZXJzOiB0cmVlLnJlYWQoXCJwYXJhbWV0ZXJzXCIsIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiB7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImxhYmVsXCIsXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwiXCIsXG5cdFx0XHRcdFx0XHR0b29sdGlwVGV4dDogXCJcIixcblx0XHRcdFx0XHRcdHRvb2x0aXBQb3NpdGlvbjogXCJcIixcblx0XHRcdFx0XHRcdHRvb2x0aXBDbGFzc05hbWU6IFwiXCIsXG5cdFx0XHRcdFx0XHR0b29sdGlwSWQ6IFwiXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRpbnB1dDoge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRpbnB1dG1vZGU6IFwibnVtZXJpY1wiLFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgYSBudW1iZXJcIixcblx0XHRcdFx0XHRcdGVkaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGF0dGVybjogXCJeWzAtOV0qWy4sXT9bMC05XSokXCIsXG5cdFx0XHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdFx0XHRtYXg6IDEwMCxcblx0XHRcdFx0XHRcdGRlY2ltYWxQbGFjZXM6IDIsXG5cdFx0XHRcdFx0XHRldTogXCJcXHUwMEI1Q1wiLFxuXHRcdFx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdF0pLFxuXHRcdH07XG5cdH1cblxuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50IGFzIFBDb21wb25lbnQ7XG5cdH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0SXRlbUlkUG9zaXRpb25UeXBlLFxuXHR0eXBlIFB1bXBQcm9wcyxcblx0dHlwZSBQdW1wU3RhdGUsXG59IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRQcm9wZXJ0eVRyZWUsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjsgLy8nQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB7IFB1bXBDb21wb3VuZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2Nlc3Mtb2JqZWN0cy9wdW1wcy9QdW1wQ29tcG91bmRcIjtcbmltcG9ydCB7IHB1bXBJbml0aWFsU3RhdHVzIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLlB1bXBcIjtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuICovXG5leHBvcnQgY2xhc3MgUHVtcCBleHRlbmRzIENvbXBvbmVudDxDb21wb25lbnRQcm9wczxQdW1wUHJvcHM+LCBhbnk+IHtcblx0dmFsdmVSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG5cblx0Y29uc3RydWN0b3IocHJvcHM6IENvbXBvbmVudFByb3BzPFB1bXBQcm9wcz4pIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy52YWx2ZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblx0fVxuXG5cdC8vIFRoaXMgaXMgYSBsaWZlY3ljbGUgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBtb3VudGVkIHRvIHRoZSBET00uXG5cdGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuXHRcdC8vIE5vIG5lZWQgdG8gaW5pdGlhbGl6ZSB2YWx2ZVJlZiBoZXJlXG5cdH1cblx0cHJvY2Vzc09iamVjdDogUHVtcFN0YXRlID1cblx0XHR0aGlzLnByb3BzLnByb3BzLnByb2Nlc3NPYmplY3Q/LnN0YXR1cyB8fCBwdW1wSW5pdGlhbFN0YXR1cztcblx0c3RhdHVzOiBQdW1wU3RhdGUgPSB0aGlzLnByb2Nlc3NPYmplY3Q7XG5cdHNob3dMYWJlbDogYm9vbGVhbiA9IHRoaXMucHJvcHMucHJvcHMuc2hvd0xhYmVsIHx8IGZhbHNlO1xuXHRsYWJlbFBvc2l0aW9uOiBJdGVtSWRQb3NpdGlvblR5cGUgPSB0aGlzLnByb3BzLnByb3BzLmxhYmVsUG9zaXRpb24gfHwgXCJsZWZ0XCI7XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSBjb21wb25lbnQncyBhY3Rpb24gZXZlbnQuXG5cdCAqL1xuXHRvbkFjdGlvblBlcmZvcm1lZCA9ICgpID0+IHtcblx0XHQvLyBJZiB0aGUgZGVzaWduZXIgaXMgaW4gXCJkZXNpZ25cIiBtb2RlLCBkb24ndCBkbyBhbnl0aGluZ1xuXHRcdGlmICghdGhpcy5wcm9wcy5ldmVudHNFbmFibGVkKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGlzIGRpc2FibGVkIGluIHRoZSBkZXNpZ24tc2NvcGVcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgY2xpY2tlZCFcIik7XG5cdFx0dGhpcy5wcm9wcy5jb21wb25lbnRFdmVudHMuZmlyZUNvbXBvbmVudEV2ZW50KFwib25BY3Rpb25QZXJmb3JtZWRcIiwge30pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0Ly8gPGRpdj5UaGlzIGlzIFZhbHZlPC9kaXY+XG5cdFx0XHQ8UHVtcENvbXBvdW5kLlJvb3Rcblx0XHRcdFx0Y29tcG9uZW50UHJvcHM9e3RoaXMucHJvcHN9XG5cdFx0XHRcdHB1bXBQcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQ9e3RoaXMub25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxQdW1wQ29tcG91bmQucHVtcCAvPlxuXHRcdFx0XHQ8UHVtcENvbXBvdW5kLnBvcG92ZXIgYW5jaG9yRWw9e3RoaXMudmFsdmVSZWYuY3VycmVudH0gLz5cblx0XHRcdDwvUHVtcENvbXBvdW5kLlJvb3Q+XG5cdFx0KTtcblx0fVxufVxuLy8gVGhpcyBpcyB0aGUgYWN0dWFsIHRoaW5nIHRoYXQgZ2V0cyByZWdpc3RlcmVkIHdpdGggdGhlIGNvbXBvbmVudCByZWdpc3RyeS5cbmV4cG9ydCBjbGFzcyBQdW1wTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBQdW1wO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAzNixcblx0XHRcdGhlaWdodDogMzYsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFB1bXBQcm9wcyB7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0cHVtcFR5cGU6IHRyZWUucmVhZFN0cmluZyhcInB1bXBUeXBlXCIsIFwiY2VudHJpZnVnYWxcIiksXG5cdFx0XHRwcm9jZXNzT2JqZWN0OiB7XG5cdFx0XHRcdHN0YXR1czoge1xuXHRcdFx0XHRcdGFsYXJtOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuYWxhcm1cIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGFjdEZCOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuYWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGRlQWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5kZUFjdEZCXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRpdGVtTmFtZTogdHJlZS5yZWFkU3RyaW5nKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuaXRlbU5hbWVcIiwgXCJcIiksXG5cdFx0XHRcdFx0bWFudWFsOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubWFudWFsXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRtYXNrZWQ6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5tYXNrZWRcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGNoYW5naW5nOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuY2hhbmdpbmdcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGxvY2F0ZTogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmxvY2F0ZVwiLCBmYWxzZSksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hvd0xhYmVsOiB0cmVlLnJlYWRCb29sZWFuKFwic2hvd0xhYmVsXCIsIGZhbHNlKSxcblx0XHRcdGxhYmVsUG9zaXRpb246IHRyZWUucmVhZFN0cmluZyhcImxhYmVsUG9zaXRpb25cIiwgXCJ0b3AtbGVmdFwiKSxcblx0XHR9O1xuXHR9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgU3RhdHVzUHJvcHMgfSBmcm9tIFwiLi4vYXItdHlwZXMvc3RhdHVzXCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbXBvbmVudFByb3BzLFxuXHRDb21wb25lbnRNZXRhLFxuXHRQQ29tcG9uZW50LFxuXHRTaXplT2JqZWN0LFxuXHRQcm9wZXJ0eVRyZWUsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjsgLy8nQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB7XG5cdEhNSV9DT01QT05FTlRfQ0xBU1MsXG5cdElBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1JPVyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSLFxuXHRTVEFUVVNfQ09NUE9ORU5UX1RZUEUsXG59IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gU1RBVFVTX0NPTVBPTkVOVF9UWVBFO1xuXG5leHBvcnQgY29uc3QgU3RhdHVzVmFsdmVNcCA9IChwcm9wczogQ29tcG9uZW50UHJvcHM8U3RhdHVzUHJvcHM+KSA9PiB7XG5cdGNvbnN0IHsgZW1pdCB9ID0gcHJvcHM7XG5cdGNvbnN0IHsgc3RhdHVzSXRlbXMgfSA9IHByb3BzLnByb3BzO1xuXHRjb25zdCBjb21wb25lbnRDbGFzc05hbWUgPSBcInN0YXR1c1wiO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRjbGFzc2VzOiBbYCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU59YF0sXG5cdFx0XHR9KX1cblx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1d9YH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVJ9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0hNSV9DT01QT05FTlRfQ0xBU1N9ICR7Y29tcG9uZW50Q2xhc3NOYW1lfWB9PlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImxpc3QgYm9yZGVyZWQgZGVuc2VcIj5cblx0XHRcdFx0XHRcdFx0e3N0YXR1c0l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIngtc21hbGxcIj57aXRlbS5sYWJlbH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlbmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17YGNoZWNrYm94LSR7aW5kZXh9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17aXRlbS5zdGF0dXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlYWRPbmx5PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbi8vIFRoaXMgaXMgdGhlIGFjdHVhbCB0aGluZyB0aGF0IGdldHMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBjb21wb25lbnQgcmVnaXN0cnkuXG5leHBvcnQgY2xhc3MgU3RhdHVzVmFsdmVNcE1ldGEgaW1wbGVtZW50cyBDb21wb25lbnRNZXRhIHtcblx0Z2V0Q29tcG9uZW50VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBDT01QT05FTlRfVFlQRTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyBUaGUgUmVhY3QgY29tcG9uZW50IGNsYXNzLlxuXHQgKi9cblx0Z2V0Vmlld0NvbXBvbmVudCgpOiBQQ29tcG9uZW50IHtcblx0XHRyZXR1cm4gU3RhdHVzVmFsdmVNcCBhcyB1bmtub3duIGFzIFBDb21wb25lbnQ7XG5cdH1cblxuXHRnZXREZWZhdWx0U2l6ZSgpOiBTaXplT2JqZWN0IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IDI0MCxcblx0XHRcdGhlaWdodDogMzIsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFN0YXR1c1Byb3BzIHtcblx0XHRjb25zb2xlLmxvZyhgc3RhdHVzICR7dHJlZS5yZWFkKGBzdGF0dXNgKX1gKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0dXNJdGVtczogdHJlZS5yZWFkKFwic3RhdHVzXCIsIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiBgbGFiZWwgdGV4dGAsXG5cdFx0XHRcdFx0c3RhdHVzOiBmYWxzZSxcblx0XHRcdFx0fSxcblx0XHRcdF0pLFxuXHRcdH07XG5cdH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0SXRlbUlkUG9zaXRpb25UeXBlLFxuXHRQcm9jZXNzT2JqZWN0LFxuXHR0eXBlIFZhbHZlUHJvcHMsXG5cdHR5cGUgVmFsdmVTdGF0ZSxcbn0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdFByb3BlcnR5VHJlZSxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiO1xuaW1wb3J0IHR5cGUge1xuXHRDb21wb25lbnRQcm9wcyxcblx0Q29tcG9uZW50TWV0YSxcblx0UENvbXBvbmVudCxcblx0U2l6ZU9iamVjdCxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiOyAvLydAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuaW1wb3J0IHsgVmFsdmVNcENvbXBvdW5kIH0gZnJvbSBcIi4vcHJvY2Vzcy1vYmplY3RzL3ZhbHZlLW1wL1ZhbHZlTXBcIjtcbmltcG9ydCB7IHByb2Nlc3NPYmplY3RQcm9wcyB9IGZyb20gXCIuLi9hcGkvaW5pdGlhbFN0YXRlXCI7XG4vLyBpbXBvcnQgeyB2YWx2ZVByb3BzIH0gZnJvbSBcIi4vcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL2luaXRpYWxTdGF0ZVwiO1xuLy8gaW1wb3J0IHsgVmFsdmVGQ0NvbXBvdW5kIH0gZnJvbSBcIi4vcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL1ZhbHZlRkNcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLlZhbHZlX21wXCI7XG5cbi8qKlxuICogVmFsdmUgY29tcG9uZW50IGNsYXNzLlxuICogRXh0ZW5kcyB0aGUgYmFzZSBDb21wb25lbnQgY2xhc3MgZnJvbSBQZXJzcGVjdGl2ZSwgdHlwZWQgd2l0aCBWYWx2ZVByb3BzLlxuICogUHJvdmlkZXMgYSBjdXN0b21pemFibGUgdmFsdmUgd2l0aCBwcm9wZXIgaGFuZGxpbmcgb2YgZGVzaWduZXIvcHJldmlldyBtb2Rlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZhbHZlIGV4dGVuZHMgQ29tcG9uZW50PENvbXBvbmVudFByb3BzPFZhbHZlUHJvcHM+LCBhbnk+IHtcblx0dmFsdmVSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG5cblx0Y29uc3RydWN0b3IocHJvcHM6IENvbXBvbmVudFByb3BzPFZhbHZlUHJvcHM+KSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMudmFsdmVSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XG5cdH1cblxuXHQvLyBUaGlzIGlzIGEgbGlmZWN5Y2xlIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3QgbW91bnRlZCB0byB0aGUgRE9NLlxuXHRjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcblx0XHQvLyBObyBuZWVkIHRvIGluaXRpYWxpemUgdmFsdmVSZWYgaGVyZVxuXHR9XG5cdHByb2Nlc3NPYmplY3Q6IFByb2Nlc3NPYmplY3QgPVxuXHRcdHRoaXMucHJvcHMucHJvcHMucHJvY2Vzc09iamVjdCB8fCBwcm9jZXNzT2JqZWN0UHJvcHM7XG5cdHN0YXR1czogVmFsdmVTdGF0ZSA9IHRoaXMucHJvY2Vzc09iamVjdC5zdGF0dXM7XG5cdHNob3dMYWJlbDogYm9vbGVhbiA9IHRoaXMucHJvcHMucHJvcHMuc2hvd0xhYmVsIHx8IGZhbHNlO1xuXHRsYWJlbFBvc2l0aW9uOiBJdGVtSWRQb3NpdGlvblR5cGUgPSB0aGlzLnByb3BzLnByb3BzLmxhYmVsUG9zaXRpb24gfHwgXCJsZWZ0XCI7XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSBjb21wb25lbnQncyBhY3Rpb24gZXZlbnQuXG5cdCAqL1xuXHRvbkFjdGlvblBlcmZvcm1lZCA9ICgpID0+IHtcblx0XHQvLyBJZiB0aGUgZGVzaWduZXIgaXMgaW4gXCJkZXNpZ25cIiBtb2RlLCBkb24ndCBkbyBhbnl0aGluZ1xuXHRcdGlmICghdGhpcy5wcm9wcy5ldmVudHNFbmFibGVkKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGlzIGRpc2FibGVkIGluIHRoZSBkZXNpZ24tc2NvcGVcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgY2xpY2tlZCFcIik7XG5cdFx0dGhpcy5wcm9wcy5jb21wb25lbnRFdmVudHMuZmlyZUNvbXBvbmVudEV2ZW50KFwib25BY3Rpb25QZXJmb3JtZWRcIiwge30pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0Ly8gPGRpdj5UaGlzIGlzIFZhbHZlPC9kaXY+XG5cdFx0XHQ8VmFsdmVNcENvbXBvdW5kLlJvb3Rcblx0XHRcdFx0Y29tcG9uZW50UHJvcHM9e3RoaXMucHJvcHN9XG5cdFx0XHRcdHZhbHZlUHJvcHM9e3RoaXMucHJvcHMucHJvcHN9XG5cdFx0XHRcdG9uQWN0aW9uUGVyZm9ybWVkPXt0aGlzLm9uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VmFsdmVNcENvbXBvdW5kLnZhbHZlIC8+XG5cdFx0XHRcdDxWYWx2ZU1wQ29tcG91bmQucG9wb3ZlciBhbmNob3JFbD17dGhpcy52YWx2ZVJlZi5jdXJyZW50fSAvPlxuXHRcdFx0PC9WYWx2ZU1wQ29tcG91bmQuUm9vdD5cblx0XHQpO1xuXHR9XG59XG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIFZhbHZlTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBWYWx2ZTtcblx0fVxuXG5cdGdldERlZmF1bHRTaXplKCk6IFNpemVPYmplY3Qge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMjAsXG5cdFx0XHRoZWlnaHQ6IDQwLFxuXHRcdH07XG5cdH1cblxuXHQvLyBJbnZva2VkIHdoZW4gYW4gdXBkYXRlIHRvIHRoZSBQcm9wZXJ0eVRyZWUgaGFzIG9jY3VycmVkLFxuXHQvLyBlZmZlY3RpdmVseSBtYXBwaW5nIHRoZSB2YWx2ZVN0YXR1cyBvZiB0aGUgdHJlZSB0byBjb21wb25lbnQgcHJvcHMuXG5cdGdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBWYWx2ZVByb3BzIHtcblx0XHRjb25zb2xlLmxvZyhcblx0XHRcdGBpdGVtTmFtZTogJHt0cmVlLnJlYWRTdHJpbmcoXG5cdFx0XHRcdFwicHJvY2Vzc09iamVjdC5zdGF0dXMuaXRlbU5hbWVcIlxuXHRcdFx0KX0gc2hvd0xhYmVsICR7dHJlZS5yZWFkQm9vbGVhbihcInNob3dMYWJlbFwiKX1gXG5cdFx0KTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRwcm9jZXNzT2JqZWN0OiB7XG5cdFx0XHRcdHN0YXR1czoge1xuXHRcdFx0XHRcdGFsYXJtOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuYWxhcm1cIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGFjdEZCOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuYWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGRlQWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5kZUFjdEZCXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRhY3RpdmF0ZWRDb25maWc6IHRyZWUucmVhZE51bWJlcihcblx0XHRcdFx0XHRcdFwicHJvY2Vzc09iamVjdC5zdGF0dXMuYWN0aXZhdGVkQ29uZmlnXCIsXG5cdFx0XHRcdFx0XHQ1MTFcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdGRlYWN0aXZhdGVkQ29uZmlnOiB0cmVlLnJlYWROdW1iZXIoXG5cdFx0XHRcdFx0XHRcInByb2Nlc3NPYmplY3Quc3RhdHVzLmRlYWN0aXZhdGVkQ29uZmlnXCIsXG5cdFx0XHRcdFx0XHQ0MDk1XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRpdGVtTmFtZTogdHJlZS5yZWFkU3RyaW5nKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuaXRlbU5hbWVcIiwgXCJcIiksXG5cdFx0XHRcdFx0bWFudWFsOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubWFudWFsXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRtYXNrZWQ6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5tYXNrZWRcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGNoYW5naW5nOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuY2hhbmdpbmdcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGxvY2F0ZTogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmxvY2F0ZVwiLCBmYWxzZSksXG5cdFx0XHRcdFx0dXNsOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMudXNsXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRsc2w6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5sc2xcIiwgZmFsc2UpLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNob3dMYWJlbDogdHJlZS5yZWFkQm9vbGVhbihcInNob3dMYWJlbFwiLCBmYWxzZSksXG5cdFx0XHRsYWJlbFBvc2l0aW9uOiB0cmVlLnJlYWRTdHJpbmcoXCJsYWJlbFBvc2l0aW9uXCIsIFwidG9wLWxlZnRcIiksXG5cdFx0fTtcblx0fVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHR5cGUgRWxlbWVudFJlZiB9IGZyb20gXCIuLi8uLi8uLi9hcGkvdHlwZXNcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY3JlYXRlQ29udGV4dFwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uL3ZhbHZlL2l0ZW1cIjtcbmltcG9ydCB7XG5cdGdldENsYXNzTmFtZVdpdGhTdGF0dXMsXG5cdGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lLFxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL3V0aWxzXCI7XG5pbXBvcnQge1xuXHRidWlsZENvbXBvbmVudEVsZW1lbnRzLFxuXHQvLyBnZXRIeEl0ZW1DbGFzc05hbWUsXG5cdC8vIGdldEh4TW9kZUNsYXNzTmFtZXMsXG5cdC8vICBoeEl0ZW1OYW1lc1xufSBmcm9tIFwiLi4vLi4vLi4vYXItdXRpbHMvcHJvY2Vzc09iamVjdHMvaGVhdEV4Y2hhbmdlcnMvaHgtdXRpbHNcIjtcbmltcG9ydCB7XG5cdHR5cGUgSGVhdEV4Y2hhbmdlclR5cGVzLFxuXHQvLyBIeE1vZGVzLFxuXHR0eXBlIEh4Q29tcG91bmRDb250ZXh0VHlwZSxcblx0dHlwZSBIeE1vZGVzLFxufSBmcm9tIFwiLi4vLi4vLi4vYXItdHlwZXMvcHJvY2Vzc09iamVjdHMvaGVhdEV4Y2hhbmdlcnMvaHgtdHlwZXNcIjtcbmltcG9ydCB7XG5cdEhNSV9DT01QT05FTlRfQ0xBU1MsXG5cdEhYX0NPTVBPTkVOVF9UWVBFLFxuXHRoeEVsZW1lbnRzLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTixcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1csXG5cdElBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUixcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBnZXRQbGF0ZUNvbG9yID0gKG1vZGU6IEh4TW9kZXNba2V5b2YgSHhNb2Rlc10pID0+IHtcblx0Y29uc29sZS5sb2coYG1vZGU6ICR7bW9kZX1gKTtcblxuXHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRjYXNlIFwiYWxhcm1cIjpcblx0XHRcdHJldHVybiBcInZhcigtLV9lcnJvcilcIjtcblx0XHRjYXNlIFwiaGVhdGluZ1wiOlxuXHRcdFx0cmV0dXJuIFwidmFyKC0tX2hlYXRpbmcpXCI7XG5cdFx0Y2FzZSBcImNvb2xpbmdcIjpcblx0XHRcdHJldHVybiBcInZhcigtLV9jb29saW5nKVwiO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gXCJsaW1lXCI7XG5cdH1cbn07XG5jb25zdCBnZXRCYXNlSXRlbUNvdW50ID0gKHR5cGU6IEhlYXRFeGNoYW5nZXJUeXBlc1trZXlvZiBIZWF0RXhjaGFuZ2VyVHlwZXNdKSA9PiB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSBcInBsYXRlXCI6XG5cdFx0XHRyZXR1cm4gMTg7XG5cdFx0Y2FzZSBcInR1YnVsYXJcIjpcblx0XHRcdHJldHVybiAxNTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIDA7XG5cdH1cbn1cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9IEhYX0NPTVBPTkVOVF9UWVBFO1xuXG5leHBvcnQgY29uc3QgW0h4Q29udGV4dFByb3ZpZGVyLCB1c2VIeENvbnRleHRdID1cblx0dXNlQ3JlYXRlQ29udGV4dDxIeENvbXBvdW5kQ29udGV4dFR5cGU+KFwiSHhDb21wb3VuZFwiKTtcblxuY29uc3QgUm9vdCA9ICh7XG5cdGNvbXBvbmVudFByb3BzLFxuXHRpdGVtUHJvcHMsXG5cdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRjaGlsZHJlbixcbn06IEh4Q29tcG91bmRDb250ZXh0VHlwZSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxIeENvbnRleHRQcm92aWRlclxuXHRcdFx0ey4uLntcblx0XHRcdFx0aXRlbVByb3BzLFxuXHRcdFx0XHRjb21wb25lbnRQcm9wcyxcblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0h4Q29udGV4dFByb3ZpZGVyPlxuXHQpO1xufTtcbmNvbnN0IHBsYXRlID0gKCkgPT4ge1xuXHRjb25zdCB7IGl0ZW1Qcm9wcywgb25BY3Rpb25QZXJmb3JtZWQsIGNvbXBvbmVudFByb3BzIH0gPVxuXHRcdHVzZUh4Q29udGV4dChcIlBsYXRlXCIpO1xuXHRjb25zdCBlbFJlZjogRWxlbWVudFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cdGNvbnN0IHsgZW1pdCB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGNvbnN0IHtcblx0XHR0eXBlLFxuXHRcdGxvY2F0ZSxcblx0XHRtb2RlXG5cdH0gPSBpdGVtUHJvcHM7XG5cblx0Ly8gQ29tcG9uZW50IENvbnN0YW50c1xuXHRjb25zdCBCQVNFX0lURU1fQ09VTlQgPSBnZXRCYXNlSXRlbUNvdW50KHR5cGUgPz8gMCk7XG5cdGNvbnN0IEJBU0VfSVRFTV9DT05GSUcgPSA1MjQyODc7XG5cdGNvbnN0IERZTkFNSUNfSVRFTV9DT1VOVCA9IDA7IC8vIEVuYWJsZSBkaXNwbGF5IG9mIGJhc2UgSXRlbXNcblx0Y29uc3QgRFlOQU1JQ19JVEVNX0NPTkZJRyA9IDA7XG5cblx0bGV0IGNvbXBvbmVudEl0ZW1OYW1lcyA9IGJ1aWxkQ29tcG9uZW50RWxlbWVudHMoXG5cdFx0QkFTRV9JVEVNX0NPVU5ULFxuXHRcdERZTkFNSUNfSVRFTV9DT1VOVFxuXHQpO1xuXG5cdGlmICghbG9jYXRlKSB7XG5cdFx0Y29uc29sZS5sb2coYGxvY2F0ZSBpczogJHtsb2NhdGV9YCk7XG5cblx0XHRjb21wb25lbnRJdGVtTmFtZXMgPSBjb21wb25lbnRJdGVtTmFtZXMuc2xpY2UoMCwgLTEpO1xuXHR9XG5cdGNvbnNvbGUubG9nKFxuXHRcdGBjb21wb25lbnRJdGVtTmFtZXM6ICR7SlNPTi5zdHJpbmdpZnkoY29tcG9uZW50SXRlbU5hbWVzLCBudWxsLCAyKX1gXG5cdCk7XG5cdGNvbnN0IGNvbXBvbmVudENsYXNzTmFtZSA9IGBoZWF0LWV4Y2hhbmdlciAke3R5cGUgPz8gXCJcIn1gO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdHJlZj17ZWxSZWZ9XG5cdFx0XHR7Li4uZW1pdCh7XG5cdFx0XHRcdGNsYXNzZXM6IFtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTn1gXSxcblx0XHRcdH0pfVxuXHRcdFx0ZGF0YS1jb21wb25lbnQ9e0NPTVBPTkVOVF9UWVBFfVxuXHRcdFx0b25DbGljaz17b25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfUk9XfWB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSfWB9PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7SE1JX0NPTVBPTkVOVF9DTEFTU30gJHtjb21wb25lbnRDbGFzc05hbWV9YH1cblx0XHRcdFx0XHRcdHN0eWxlPXt7IFwiLS1obWktcGxhdGUtY29sb3JcIjogZ2V0UGxhdGVDb2xvcihtb2RlID8/IFwiXCIpIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc31cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7LyogPEl0ZW0gaXRlbUNsYXNzTmFtZT17YCR7Z2V0SHhNb2RlQ2xhc3NOYW1lcyhcImJhc2UtMSBzaG93XCIsIEh4TW9kZXMuaGVhdGluZyApfWB9Lz4gKi99XG5cblx0XHRcdFx0XHRcdHtjb21wb25lbnRJdGVtTmFtZXMubWFwKCh7IG5hbWUsIGluZGV4LCBrZXkgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8SXRlbVxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1DbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcIiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRnZXRDbGFzc05hbWVXaXRoU3RhdHVzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleCwgLy9pbmRleFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmRlZmluZWQsIC8vIHN0YXR1c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoeEVsZW1lbnRzLCAvL2VsZW1lbnRWYXJpYW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcIlwiLCAvL2Jhc2VDbGFzc05hbWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0QkFTRV9JVEVNX0NPVU5ULCAvLyBiYXNlRWxlbWVudHNcblx0XHRcdFx0XHRcdFx0XHRcdFx0QkFTRV9JVEVNX0NPTkZJRywgLy9iYXNlQ29uZmlnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdERZTkFNSUNfSVRFTV9DT1VOVCwgLy9keW5hbWljSXRlbXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0RFlOQU1JQ19JVEVNX0NPTkZJRyAvL2R5bmFtaWNDb25maWdcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IHBvcG92ZXIgPSAoeyBhbmNob3JFbCB9OiB7IGFuY2hvckVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgfSkgPT4ge1xuXHRjb25zdCB7IGl0ZW1Qcm9wcywgY29tcG9uZW50UHJvcHMgfSA9IHVzZUh4Q29udGV4dChcIlBvcG92ZXJcIik7XG5cdGNvbnN0IHsgc2hvd0xhYmVsLCBsYWJlbFBvc2l0aW9uLCBpdGVtTmFtZSB9ID0gaXRlbVByb3BzO1xuXG5cdGlmICghc2hvd0xhYmVsKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgeyBwb3NpdGlvbiB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGxldCBjbGFzc05hbWUgPSBcIml0ZW1JZCBwb3BvdmVyIHBvc2l0aW9uLWxlZnRcIjtcblx0aWYgKGxhYmVsUG9zaXRpb24pIHtcblx0XHRjbGFzc05hbWUgPSBnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZShjbGFzc05hbWUsIGxhYmVsUG9zaXRpb24pO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHR0b3A6IHBvc2l0aW9uLnksXG5cdFx0XHRcdGxlZnQ6IHBvc2l0aW9uLngsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT57aXRlbU5hbWV9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgSGVhdEV4Y2hhbmdlckNvbXBvdW5kID0ge1xuXHRSb290LFxuXHRwbGF0ZSxcblx0cG9wb3Zlcixcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcblx0dHlwZSBFbGVtZW50UmVmLFxuXHR0eXBlIFB1bXBDb21wb3VuZENvbnRleHRUeXBlLFxuXHR0eXBlIFB1bXBDb21wb3VuZFJvb3RQcm9wcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vdmFsdmUvaXRlbVwiO1xuaW1wb3J0IHtcblx0Z2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUsXG5cdGdldFB1bXBJdGVtQ2xhc3NOYW1lLFxuXHRnZXRQdW1wU3RhdHVzQ2xhc3NOYW1lcyxcblx0cHVtcEl0ZW1OYW1lcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS91dGlsc1wiO1xuaW1wb3J0IHsgcHVtcEluaXRpYWxQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9hcGkvaW5pdGlhbFN0YXRlXCI7XG5pbXBvcnQge1xuXHRITUlfQ09NUE9ORU5UX0NMQVNTLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTixcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1csXG5cdElBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUixcblx0UFVNUF9DT01QT05FTlRfVFlQRSxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBQVU1QX0NPTVBPTkVOVF9UWVBFO1xuXG5leHBvcnQgY29uc3QgW1B1bXBDb250ZXh0UHJvdmlkZXIsIHVzZVB1bXBDb250ZXh0XSA9XG5cdHVzZUNyZWF0ZUNvbnRleHQ8UHVtcENvbXBvdW5kQ29udGV4dFR5cGU+KFwiUHVtcENvbXBvdW5kXCIpO1xuXG5jb25zdCBSb290ID0gKHtcblx0Y29tcG9uZW50UHJvcHMsXG5cdHB1bXBQcm9wcyxcblx0b25BY3Rpb25QZXJmb3JtZWQsXG5cdGNoaWxkcmVuLFxufTogUHVtcENvbXBvdW5kUm9vdFByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFB1bXBDb250ZXh0UHJvdmlkZXJcblx0XHRcdHsuLi57XG5cdFx0XHRcdHB1bXBQcm9wcyxcblx0XHRcdFx0Y29tcG9uZW50UHJvcHMsXG5cdFx0XHRcdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9QdW1wQ29udGV4dFByb3ZpZGVyPlxuXHQpO1xufTtcbmNvbnN0IHB1bXAgPSAoKSA9PiB7XG5cdGNvbnN0IHsgcHVtcFByb3BzLCBvbkFjdGlvblBlcmZvcm1lZCwgY29tcG9uZW50UHJvcHMgfSA9XG5cdFx0dXNlUHVtcENvbnRleHQoXCJWYWx2ZVwiKTtcblx0Y29uc3QgZWxSZWY6IEVsZW1lbnRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCB7IGVtaXQgfSA9IGNvbXBvbmVudFByb3BzO1xuXHRjb25zdCB7IHByb2Nlc3NPYmplY3QsIHB1bXBUeXBlIH0gPSBwdW1wUHJvcHM7XG5cdGNvbnN0IHsgc3RhdHVzIH0gPSBwcm9jZXNzT2JqZWN0IHx8IHB1bXBJbml0aWFsUHJvcHM7XG5cblx0Ly8gaWYgbm90IGxvY2F0ZSwgdHJpbSBsYXN0IGl0ZW0gZnJvbSB2YWx2ZU1wSXRlbU5hbWVzXG5cdGNvbnN0IGNvbXBvbmVudEl0ZW1OYW1lcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuXHRcdGlmICghc3RhdHVzPy5sb2NhdGUpIHtcblx0XHRcdHJldHVybiBwdW1wSXRlbU5hbWVzLnNsaWNlKDAsIC0xKTtcblx0XHR9XG5cdFx0cmV0dXJuIHB1bXBJdGVtTmFtZXM7XG5cdH0sIFtzdGF0dXM/LmxvY2F0ZV0pO1xuXG5cdGNvbnN0IGNvbXBvbmVudENsYXNzTmFtZSA9IFwicHVtcFwiO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0cmVmPXtlbFJlZn1cblx0XHRcdHsuLi5lbWl0KHtcblx0XHRcdFx0Y2xhc3NlczogW2Ake0lBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OfWBdLFxuXHRcdFx0fSl9XG5cdFx0XHRkYXRhLWNvbXBvbmVudD17Q09NUE9ORU5UX1RZUEV9XG5cdFx0XHRvbkNsaWNrPXtvbkFjdGlvblBlcmZvcm1lZH1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1d9YH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVJ9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0hNSV9DT01QT05FTlRfQ0xBU1N9ICR7Y29tcG9uZW50Q2xhc3NOYW1lfWB9PlxuXHRcdFx0XHRcdFx0PEl0ZW1cblx0XHRcdFx0XHRcdFx0aXRlbUNsYXNzTmFtZT17YCR7Z2V0UHVtcFN0YXR1c0NsYXNzTmFtZXMoXG5cdFx0XHRcdFx0XHRcdFx0XCJiYXNlLTEgc2hvd1wiLFxuXHRcdFx0XHRcdFx0XHRcdHN0YXR1c1xuXHRcdFx0XHRcdFx0XHQpfWB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PEl0ZW0gaXRlbUNsYXNzTmFtZT17XCJiYXNlLTIgc2hvdyBpdGVtXCJ9IC8+XG5cdFx0XHRcdFx0XHQ8SXRlbSBpdGVtQ2xhc3NOYW1lPXtcImJhc2UtMyBzaG93IGl0ZW1cIn0gLz5cblxuXHRcdFx0XHRcdFx0e2NvbXBvbmVudEl0ZW1OYW1lcy5tYXAoKHsgbmFtZSwgaW5kZXgsIGtleSB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0aXRlbUNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lICtcblx0XHRcdFx0XHRcdFx0XHRcdFwiIFwiICtcblx0XHRcdFx0XHRcdFx0XHRcdGdldFB1bXBJdGVtQ2xhc3NOYW1lKGluZGV4LCBwdW1wVHlwZSB8fCBcImNlbnRyaWZ1Z2FsXCIsIHN0YXR1cylcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IHBvcG92ZXIgPSAoeyBhbmNob3JFbCB9OiB7IGFuY2hvckVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgfSkgPT4ge1xuXHRjb25zdCB7IHB1bXBQcm9wcywgY29tcG9uZW50UHJvcHMgfSA9IHVzZVB1bXBDb250ZXh0KFwiUG9wb3ZlclwiKTtcblx0Y29uc3QgeyBzaG93TGFiZWwsIGxhYmVsUG9zaXRpb24sIHByb2Nlc3NPYmplY3QgfSA9IHB1bXBQcm9wcztcblx0Y29uc3QgeyBzdGF0dXMgfSA9IHByb2Nlc3NPYmplY3QgfHwge307XG5cdGlmICghc2hvd0xhYmVsKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgeyBwb3NpdGlvbiB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGxldCBjbGFzc05hbWUgPSBcIml0ZW1JZCBwb3BvdmVyIHBvc2l0aW9uLWxlZnRcIjtcblx0aWYgKGxhYmVsUG9zaXRpb24pIHtcblx0XHRjbGFzc05hbWUgPSBnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZShjbGFzc05hbWUsIGxhYmVsUG9zaXRpb24pO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHR0b3A6IHBvc2l0aW9uLnksXG5cdFx0XHRcdGxlZnQ6IHBvc2l0aW9uLngsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT57c3RhdHVzPy5pdGVtTmFtZX08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBQdW1wQ29tcG91bmQgPSB7XG5cdFJvb3QsXG5cdHB1bXAsXG5cdHBvcG92ZXIsXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7XG5cdFZhbHZlQ29tcG91bmRDb250ZXh0VHlwZSxcblx0VmFsdmVDb21wb3VuZFJvb3RQcm9wcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS90eXBlc1wiO1xuLy8gaW1wb3J0IHsgdXNlVmFsdmVSZWR1Y2VyIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9ob29rc1wiO1xuaW1wb3J0IHtcblx0Z2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUsXG5cdGdldFZhbHZlTXBJdGVtQ2xhc3NOYW1lLFxuXHR2YWx2ZU1wSXRlbU5hbWVzLFxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL3V0aWxzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vdmFsdmUvaXRlbVwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyBwcm9jZXNzT2JqZWN0UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2luaXRpYWxTdGF0ZVwiO1xuaW1wb3J0IHtcblx0SE1JX0NPTVBPTkVOVF9DTEFTUyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU4sXG5cdElBX1NZTUJPTF9DT01QT05FTlRfUk9XLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVIsXG5cdFZBTFZFX0NPTVBPTkVOVF9UWVBFLFxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbi8vIGltcG9ydCAnLi92YWx2ZS1tcC5tb2R1bGUuY3NzJ1xuLy8gaW1wb3J0IHt2YWx2ZVN0YXR1c30gZnJvbSAnLi4vLi4vYXBpL2luaXRpYWxTdGF0ZSdcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gVkFMVkVfQ09NUE9ORU5UX1RZUEU7XG5cbi8vIGltcG9ydCB7dmFsdmVTdGF0dXN9IGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5leHBvcnQgY29uc3QgW1ZhbHZlQ29udGV4dFByb3ZpZGVyLCB1c2VWYWx2ZUNvbnRleHRdID1cblx0dXNlQ3JlYXRlQ29udGV4dDxWYWx2ZUNvbXBvdW5kQ29udGV4dFR5cGU+KFwiVmFsdmVNcENvbXBvdW5kXCIpO1xuXG5jb25zdCBSb290ID0gKHtcblx0Y29tcG9uZW50UHJvcHMsXG5cdHZhbHZlUHJvcHMsXG5cdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRjaGlsZHJlbixcbn06IFZhbHZlQ29tcG91bmRSb290UHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8VmFsdmVDb250ZXh0UHJvdmlkZXJcblx0XHRcdHsuLi57XG5cdFx0XHRcdHZhbHZlUHJvcHMsXG5cdFx0XHRcdGNvbXBvbmVudFByb3BzLFxuXHRcdFx0XHRvbkFjdGlvblBlcmZvcm1lZCxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvVmFsdmVDb250ZXh0UHJvdmlkZXI+XG5cdCk7XG59O1xuY29uc3QgdmFsdmUgPSAoKSA9PiB7XG5cdGNvbnN0IHsgdmFsdmVQcm9wcywgb25BY3Rpb25QZXJmb3JtZWQsIGNvbXBvbmVudFByb3BzIH0gPVxuXHRcdHVzZVZhbHZlQ29udGV4dChcIlZhbHZlXCIpO1xuXHRjb25zdCB2YWx2ZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cdGNvbnN0IHsgZW1pdCB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGNvbnN0IHsgcHJvY2Vzc09iamVjdCB9ID0gdmFsdmVQcm9wcztcblx0Y29uc3QgeyBzdGF0dXMgfSA9IHByb2Nlc3NPYmplY3QgfHwgcHJvY2Vzc09iamVjdFByb3BzO1xuXHQvLyBjb25zdCBpbkNvb3JkID0gcG9zaXRpb24/LnggPz8gZmFsc2U7XG5cdC8vIGlmIG5vdCBsb2NhdGUsIHRyaW0gbGFzdCBpdGVtIGZyb20gdmFsdmVNcEl0ZW1OYW1lc1xuXHRsZXQgY29tcG9uZW50SXRlbU5hbWVzID0gdmFsdmVNcEl0ZW1OYW1lcztcblx0aWYgKCFzdGF0dXM/LmxvY2F0ZSkge1xuXHRcdGNvbXBvbmVudEl0ZW1OYW1lcyA9IGNvbXBvbmVudEl0ZW1OYW1lcy5zbGljZSgwLCAtMSk7XG5cdH1cblx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gXCJ2YWx2ZV9fbXBcIjtcblx0Ly8gaWYgKCFpbkNvb3JkKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0cmVmPXt2YWx2ZVJlZn1cblx0XHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRcdGNsYXNzZXM6IFtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTn1gXSxcblx0XHRcdFx0fSl9XG5cdFx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHRcdFx0b25DbGljaz17b25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1JPV31gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSfWB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0hNSV9DT01QT05FTlRfQ0xBU1N9ICR7Y29tcG9uZW50Q2xhc3NOYW1lfWB9PlxuXHRcdFx0XHRcdFx0XHR7Y29tcG9uZW50SXRlbU5hbWVzLm1hcCgoeyB2YWx1ZSwgaW5kZXgsIGtleSB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRgcmUtcmVuZGVyZWQgLGtleSAke2tleX0gdmFsdWUgJHt2YWx1ZX0gaW5kZXggJHtpbmRleH1gXG5cdFx0XHRcdFx0XHRcdFx0Ly8gKSxcblx0XHRcdFx0XHRcdFx0XHQ8SXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbUNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlICsgXCIgXCIgKyBnZXRWYWx2ZU1wSXRlbUNsYXNzTmFtZShpbmRleCwgc3RhdHVzKVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG4gfTtcblxuY29uc3QgcG9wb3ZlciA9ICh7IGFuY2hvckVsIH06IHsgYW5jaG9yRWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCB9KSA9PiB7XG5cdGNvbnN0IHsgdmFsdmVQcm9wcywgY29tcG9uZW50UHJvcHMgfSA9IHVzZVZhbHZlQ29udGV4dChcIlBvcG92ZXJcIik7XG5cdGNvbnN0IHsgc2hvd0xhYmVsLCBsYWJlbFBvc2l0aW9uLCBwcm9jZXNzT2JqZWN0IH0gPSB2YWx2ZVByb3BzO1xuXHRjb25zdCB7IHN0YXR1cyB9ID0gcHJvY2Vzc09iamVjdCB8fCBwcm9jZXNzT2JqZWN0UHJvcHM7XG5cdGlmICghc2hvd0xhYmVsKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgeyBwb3NpdGlvbiB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGxldCBjbGFzc05hbWUgPSBcIml0ZW1JZCBwb3BvdmVyIHBvc2l0aW9uLWxlZnRcIjtcblx0aWYgKGxhYmVsUG9zaXRpb24pIHtcblx0XHRjbGFzc05hbWUgPSBnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZShjbGFzc05hbWUsIGxhYmVsUG9zaXRpb24pO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHR0b3A6IHBvc2l0aW9uLnksXG5cdFx0XHRcdGxlZnQ6IHBvc2l0aW9uLngsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT57c3RhdHVzPy5pdGVtTmFtZX08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBWYWx2ZU1wQ29tcG91bmQgPSB7XG5cdFJvb3QsXG5cdHZhbHZlLFxuXHRwb3BvdmVyLFxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQgXCIuL2l0ZW0ubW9kdWxlLmNzc1wiO1xuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcblx0aXRlbUNsYXNzTmFtZTogc3RyaW5nO1xuXHRoYW5kbGVDbGljaz86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG59XG4vLyBjb25zdCBiaXQgPSAobjogbnVtYmVyLCBpOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuLy8gXHRyZXR1cm4gKG4gPj4gaSkgJiAxO1xuLy8gfTtcbmNvbnN0IEl0ZW06IFJlYWN0LkZDPEl0ZW1Qcm9wcz4gPSAoeyBpdGVtQ2xhc3NOYW1lLCBoYW5kbGVDbGljayB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpdGVtQ2xhc3NOYW1lfVxuXHRvbkNsaWNrPXtoYW5kbGVDbGlja30+PC9kaXY+O1xufTtcbkl0ZW0uZGlzcGxheU5hbWUgPSBcIkl0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCJpbXBvcnQgdHlwZSB7IEVsZW1lbnRWYXJpYW50TGlzdCB9IGZyb20gXCIuL2FwaS91dGlsc1wiO1xuaW1wb3J0IHsgSHhNb2RlcyB9IGZyb20gXCIuL2FyLXR5cGVzL3Byb2Nlc3NPYmplY3RzL2hlYXRFeGNoYW5nZXJzL2h4LXR5cGVzXCI7XG5pbXBvcnQgeyBnZXRIeE1vZGVDbGFzc05hbWVzIH0gZnJvbSBcIi4vYXItdXRpbHMvcHJvY2Vzc09iamVjdHMvaGVhdEV4Y2hhbmdlcnMvaHgtdXRpbHNcIjtcblxuLyoqXG4gKiBITUkgQ29tcG9uZW50IE1vZHVsZSBDb25zdGFudHNcbiAqL1xuZXhwb3J0IGNvbnN0IElBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OID1cblx0XCJpYV9zeW1ib2xDb21wb25lbnQgaWFfc3ltYm9sQ29tcG9uZW50X19jb2x1bW5cIjtcbmV4cG9ydCBjb25zdCBJQV9TWU1CT0xfQ09NUE9ORU5UX1JPVyA9IFwiaWFfc3ltYm9sQ29tcG9uZW50X19yb3dcIjtcbmV4cG9ydCBjb25zdCBJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVIgPSBcImlhX3N5bWJvbENvbXBvbmVudF9fd3JhcHBlclwiO1xuZXhwb3J0IGNvbnN0IEhNSV9DT01QT05FTlRfQ0xBU1MgPSBcImhtaS1jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IFZBTFZFX0NPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLlZhbHZlXCI7XG5leHBvcnQgY29uc3QgUFVNUF9DT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5QdW1wXCI7XG5leHBvcnQgY29uc3QgU1RBVFVTX0NPTVBPTkVOVF9UWVBFID0gXCJobWkuZGlzcGxheS5TdGF0dXNWYWx2ZU1wXCI7XG5leHBvcnQgY29uc3QgUEFSQU1FVEVSX0xJU1RfQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5pbnB1dC5QYXJhbWV0ZXJMaXN0XCI7XG5leHBvcnQgY29uc3QgQ09NTUFORF9WQUxWRV9NUF9DT01QT05FTlRfVFlQRSA9IFwiaG1pLmlucHV0LkNvbW1hbmRWYWx2ZU1wXCI7XG5leHBvcnQgY29uc3QgSFhfQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5wcm9jZXNzX29iamVjdHMuSGVhdEV4Y2hhbmdlclwiO1xuXG5cbi8vIENvbXBvbmVudCBFbGVtZW50IENvbnN0cnVjdGlvblxuXG5leHBvcnQgY29uc3QgaHhFbGVtZW50czogRWxlbWVudFZhcmlhbnRMaXN0ID0gW1xueyBiYXNlQ2xhc3M6IGdldEh4TW9kZUNsYXNzTmFtZXMoXCJwbGF0ZVwiLEh4TW9kZXMuaGVhdGluZykgfSxcbnsgc3RhdHVzS2V5OiB7YWN0RkI6IHt0cnVlU3RyaW5nOlwiYWN0aXZhdGVkXCJ9fSB9LFxueyBzdGF0dXNLZXk6IHtkZUFjdEZCOiB7dHJ1ZVN0cmluZzpcImRlYWN0aXZhdGVkXCJ9fSB9LFxueyBzdGF0dXNLZXk6IHthbGFybToge3RydWVTdHJpbmc6XCJhbGFybVwifX0gfSxcbl1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29udGV4dDxDb250ZXh0VmFsdWVUeXBlIGV4dGVuZHMgb2JqZWN0IHwgbnVsbD4oXG4gIHJvb3RDb21wb25lbnROYW1lOiBzdHJpbmcsXG4gIGRlZmF1bHRDb250ZXh0PzogQ29udGV4dFZhbHVlVHlwZVxuKSB7XG4gIGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENvbnRleHRWYWx1ZVR5cGUgfCB1bmRlZmluZWQ+KFxuICAgIGRlZmF1bHRDb250ZXh0XG4gICk7XG5cbiAgY29uc3QgUHJvdmlkZXI6IFJlYWN0LkZDPENvbnRleHRWYWx1ZVR5cGUgJiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoXG4gICAgcHJvcHNcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgLi4uY29udGV4dCB9ID0gcHJvcHM7XG4gICAgLy8gT25seSByZS1tZW1vaXplIHdoZW4gcHJvcCB2YWx1ZXMgY2hhbmdlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIGNvbnN0IHZhbHVlID0gUmVhY3QudXNlTWVtbyhcbiAgICAgICgpID0+IGNvbnRleHQsXG4gICAgICBPYmplY3QudmFsdWVzKGNvbnRleHQpXG4gICAgKSBhcyBDb250ZXh0VmFsdWVUeXBlO1xuICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xuICB9O1xuXG4gIFByb3ZpZGVyLmRpc3BsYXlOYW1lID0gcm9vdENvbXBvbmVudE5hbWUgKyBcIlByb3ZpZGVyXCI7XG5cbiAgZnVuY3Rpb24gdXNlQ29udGV4dChjb25zdW1lck5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpO1xuICAgIGlmIChjb250ZXh0KSByZXR1cm4gY29udGV4dDtcbiAgICBpZiAoZGVmYXVsdENvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGRlZmF1bHRDb250ZXh0O1xuICAgIC8vIGlmIGEgZGVmYXVsdENvbnRleHQgd2Fzbid0IHNwZWNpZmllZCwgaXQncyBhIHJlcXVpcmVkIGNvbnRleHQuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFxcYCR7Y29uc3VtZXJOYW1lfVxcYCBtdXN0IGJlIHVzZWQgd2l0aGluIFxcYCR7cm9vdENvbXBvbmVudE5hbWV9XFxgYFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gW1Byb3ZpZGVyLCB1c2VDb250ZXh0XSBhcyBjb25zdDtcbn1cbiIsIi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnMgZm9yIG51bWJlcnNcbiAqL1xuXG4vKipcbiAqIFVzaW5nIHRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgbiwgYW4gSW50ZWdlciwgcmV0dXJucyB0aGUgYm9vbGVhblxuICogdmFsdWUgYXQgaW5kZXgsIGkuXG4gKiBAcGFyYW0gbiBhIG51bWJlciBpcyBpbXBsaWNpdHkgY29udmVydGVyIHRvIGEgMzJiaXQgaW50ZWdlciwgYnkgdGhlIGJpdHdpc2Ugb3BlcmF0b3JzXG4gKiBAcGFyYW0gaSBpcyBhIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGJpdCBwb3NpdGlvbiB0byBiZSB0ZXN0ZWRcbiAqIEByZXR1cm5zIHRoZSBib29sZWFuIHZhbHVlIG9mIHRoZSBiaXQgYXQgaW5kZXggaS5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEJvb2xBdEluZGV4ID0gKG46IG51bWJlciwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBCb29sZWFuKChuID4+IGkpICYgMSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pbmR1Y3RpdmVhdXRvbWF0aW9uX3BlcnNwZWN0aXZlX2NsaWVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDb21wb25lbnRNZXRhLCBDb21wb25lbnRSZWdpc3RyeSB9IGZyb20gJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG4vL2ltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9CdXR0b24nO1xuLy9pbXBvcnQgeyBWYWx2ZSwgVmFsdmVNZXRhIH0gZnJvbSBcIi4vY29tcG9uZW50cy9WYWx2ZVwiO1xuaW1wb3J0IHsgVmFsdmUsIFZhbHZlTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9WYWx2ZSc7XG5pbXBvcnQgeyBQdW1wLCBQdW1wTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9QdW1wJztcbmltcG9ydCB7IEhlYXRFeGNoYW5nZXIsIEhlYXRFeGNoYW5nZXJNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlYXRFeGNoYW5nZXInO1xuaW1wb3J0IHsgUGFyYW1ldGVyTGlzdENvbXBvbmVudCwgUGFyYW1ldGVyTGlzdENvbXBvbmVudE1ldGF9IGZyb20gJy4vY29tcG9uZW50cy9QYXJhbWV0ZXJMaXN0J1xuaW1wb3J0IHsgQ29tbWFuZFZhbHZlTXAsIENvbW1hbmRWYWx2ZU1wTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9Db21tYW5kVmFsdmVNcCc7XG5pbXBvcnQgeyBTdGF0dXNWYWx2ZU1wLCBTdGF0dXNWYWx2ZU1wTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9TdGF0dXNWYWx2ZU1wJztcblxuLy8gRXhwb3J0IGNvbXBvbmVudHMgZm9yIGV4dGVybmFsIHJlZmVyZW5jZVxuZXhwb3J0IHtcblx0VmFsdmUgLFxuXHRQdW1wICxcblx0SGVhdEV4Y2hhbmdlciAsXG5cdFBhcmFtZXRlckxpc3RDb21wb25lbnQsXG5cdENvbW1hbmRWYWx2ZU1wLFxuXHRTdGF0dXNWYWx2ZU1wXG5cdH07XG5cbi8vIEltcG9ydCBjb21wb25lbnQgc3R5bGVzXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLy8gQXJyYXkgb2YgY29tcG9uZW50IG1ldGFkYXRhXG5jb25zdCBjb21wb25lbnRzOiBBcnJheTxDb21wb25lbnRNZXRhPiA9IFtcblx0bmV3IFZhbHZlTWV0YSgpLFxuXHRuZXcgUHVtcE1ldGEoKSxcblx0bmV3IEhlYXRFeGNoYW5nZXJNZXRhKCksXG5cdG5ldyBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50TWV0YSgpLFxuXHRuZXcgQ29tbWFuZFZhbHZlTXBNZXRhKCksXG5cdG5ldyBTdGF0dXNWYWx2ZU1wTWV0YSgpLFxuXG5dO1xuXG4vLyBSZWdpc3RlciBlYWNoIGNvbXBvbmVudCB3aXRoIHRoZSBQZXJzcGVjdGl2ZSBDb21wb25lbnRSZWdpc3RyeVxuY29tcG9uZW50cy5mb3JFYWNoKChjOiBDb21wb25lbnRNZXRhKSA9PiBDb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlcihjKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=