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
    var _a, _b, _c, _d, _e, _f, _g;
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
        default: // #TODO Add more reducer case statements
            return draft;
    }
}
function useValveMpCommandReducer() {
    const [state, dispatch] = (0, use_immer_1.useImmerReducer)(valveMpReducer, initialState_1.initialControlState);
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
        interlocks: {
            main: [],
            upperSeat: [],
            lowerSeat: []
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
// export const ItemNameEnum = {
// 	V1b1: "v1b1", // index 0
// 	V1b2: "v1b2", // index 1
// 	V1b3: "v1b3", // index 2
// 	V1b4: "v1b4", // index 3
// 	V2b1: "v2b1", // index 4
// 	V2b2: "v2b2", // index 5
// 	V2b3: "v2b3", // index 6
// 	V2b4: "v2b4", // index 7
// 	V3b1: "v3b1", // index 8
// 	V3b2: "v3b2", // index 9
// 	V3b3: "v3b3", // index 10
// 	V3b4: "v3b4", // index 11
// 	V2: "v2", // index 12
// 	V3: "v3", // index 13
// 	V1: "v1", // index 14
// 	V2f1: "v2f1", // index 15
// 	V2f2: "v2f2", // index 16
// 	V3f1: "v3f1", // index 17
// 	V3f2: "v3f2", // index 18
// };
// export type ItemNameEnum = (typeof ItemNameEnum)[keyof typeof ItemNameEnum];
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
    "positive-displacment",
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
const getClassNameWithStatus = (index, status, elementVariants, baseElements, baseConfig, dynamicItems, dynamicConfig) => {
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
            let itemString = index > 0 ? "" : "item";
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
        case "positive-displacment":
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
    "tubelar",
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
        index: baseElements + dynamicElements + 1
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
const areEqual = (prevProps, nextProps) => {
    // return true if props are equal, false if re-render is needed
    return prevProps.props === nextProps.props;
};
/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.

 */
exports.CommandValveMp = React.memo((props) => {
    const { state, reducer } = (0, hooks_1.useValveMpCommandReducer)();
    const { emit } = props;
    (0, react_1.useEffect)(() => {
        // Subscribe to changes on the "command" property
        const unsubscribe = props.store.props.subscribe((tree) => {
            var _a, _b, _c;
            // This function is called whenever "command" changes
            const command = tree.read("command");
            const { main, upperSeat, lowerSeat } = command;
            // You can update local state or perform other actions here
            // Update main state if needed
            if (((_a = state.command) === null || _a === void 0 ? void 0 : _a.main) && main) {
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
            if (((_b = state.command) === null || _b === void 0 ? void 0 : _b.lowerSeat) && lowerSeat) {
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
            if (((_c = state.command) === null || _c === void 0 ? void 0 : _c.upperSeat) && upperSeat) {
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
    const { main, upperSeat, lowerSeat, interlocks } = state.command || {};
    const isInterlocked = (interlocks) => {
        return interlocks.includes(true, 0);
    };
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
    const componentClassName = "command-valve-mp hmi-command-valve-mp__grid";
    return (React.createElement("div", Object.assign({}, emit({
        classes: [`${constants_1.IA_SYMBOL_COMPONENT_COLUMN}`],
    }), { "data-component": exports.COMPONENT_TYPE }),
        React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_ROW}` },
            React.createElement("div", { className: `${constants_1.IA_SYMBOL_COMPONENT_WRAPPER}` },
                React.createElement("div", { className: `${constants_1.HMI_COMPONENT_CLASS}-${componentClassName}` },
                    React.createElement("label", { className: "main-label" }, main === null || main === void 0 ? void 0 : main.label),
                    React.createElement("div", { role: "group", className: "button-group outlined main-auto-manual" },
                        React.createElement("button", { className: `button outlined ${!(main === null || main === void 0 ? void 0 : main.autoManual) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []), onClick: () => handleMainAutoManualSelection("auto") }, "Auto "),
                        React.createElement("button", { className: `button outlined ${(main === null || main === void 0 ? void 0 : main.autoManual) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []), onClick: () => handleMainAutoManualSelection("manual") }, "Manual")),
                    React.createElement("div", { role: "group", className: "button-group outlined main-on-off" },
                        React.createElement("button", { className: `button outlined ${(main === null || main === void 0 ? void 0 : main.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []) || !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleMainManualOn }, "On "),
                        React.createElement("button", { className: `button outlined ${!(main === null || main === void 0 ? void 0 : main.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []) || !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleMainManualOff }, "Off")),
                    React.createElement("label", { className: "upper-seat-label" }, upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.label),
                    React.createElement("div", { role: "group", className: "button-group outlined upper-seat-on-off" },
                        React.createElement("button", { className: `button outlined ${(upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.upperSeat) || []) ||
                                !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleUslManualOn }, "On "),
                        React.createElement("button", { className: `button outlined ${!(upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.upperSeat) || []) ||
                                !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleUslManualOff }, "Off")),
                    React.createElement("label", { className: "lower-seat-label" }, lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.label),
                    React.createElement("div", { role: "group", className: "button-group outlined lower-seat-on-off" },
                        React.createElement("button", { className: `button outlined ${(lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.lowerSeat) || []) ||
                                !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleLslManualOn }, "On "),
                        React.createElement("button", { className: `button outlined ${!(lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.lowerSeat) || []) ||
                                !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleLslManualOff, value: "true" }, "Off")))))));
}, areEqual);
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
                interlocks: {
                    main: tree.readArray("command.interlocks.main"),
                    upperSeat: tree.readArray("command.interlocks.upperSeat"),
                    lowerSeat: tree.readArray("command.interlocks.lowerSeat"),
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
            width: 36,
            height: 60,
        };
    }
    // Invoked when an update to the PropertyTree has occurred,
    // effectively mapping the valveStatus of the tree to component props.
    getPropsReducer(tree) {
        return {
            type: tree.readString("pumpType", "plate"),
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
const initialState_1 = __webpack_require__(/*! ../api/initialState */ "./src/api/initialState.ts");
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
                        React.createElement("input", { type: "text", id: `${label.text}-parameter${index}`, inputMode: input.inputmode, pattern: input.pattern || "[0-9]*", placeholder: input.placeholder, disabled: !input.editable, value: input.value, onChange: (e) => {
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
            parameters: tree.read("parameters", initialState_1.parameterInitialState),
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
                    configuration: tree.readNumber("processObject.status.configuration", 7),
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
const hx_types_1 = __webpack_require__(/*! ../../../ar-types/processObjects/heatExchangers/hx-types */ "./src/ar-types/processObjects/heatExchangers/hx-types.ts");
exports.COMPONENT_TYPE = hx_types_1.HX_COMPONENT_TYPE;
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
    // if not locate, trim last item from valveMpItemNames
    // let componentItemNames = hxItemNames;
    let componentItemNames = (0, hx_utils_1.buildComponentElements)(3, 0);
    if (!locate) {
        componentItemNames = componentItemNames.slice(0, -1);
    }
    const isCoordChild = componentProps.store.isCoordContainerChild;
    console.log(`isCoordChild ${isCoordChild}`);
    const flexRowWrapper = !isCoordChild ? "hmi-component__row" : "display-none";
    const flexColWrapper = !isCoordChild ? "hmi-component__column" : "display-none";
    const componentClassName = "hmi-component hmi-component-plate-hx";
    const emitClassNames = !isCoordChild ? `hmi-component ${flexColWrapper} ` : "hmi-component hmi-component-plate-hx";
    return (React.createElement("div", Object.assign({ ref: elRef }, emit({
        classes: [`${emitClassNames}`],
    }), { "data-component": exports.COMPONENT_TYPE, onClick: onActionPerformed }),
        React.createElement("div", { className: `${flexRowWrapper}` },
            React.createElement("div", { className: `${componentClassName}` },
                React.createElement(item_1.default, { itemClassName: `${(0, hx_utils_1.getHxModeClassNames)("base-1 show", hx_types_1.HxModes.heating)}` }),
                React.createElement(item_1.default, { itemClassName: "base-2 show item" }),
                React.createElement(item_1.default, { itemClassName: "base-3 show item" }),
                componentItemNames.map(({ name, index, key }) => (React.createElement(item_1.default, { itemClassName: name +
                        " " +
                        (0, hx_utils_1.getHxItemClassName)(index, type || "plate", mode || hx_types_1.HxModes.heating), key: key })))))));
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
                            (0, utils_1.getPumpItemClassName)(index, pumpType || "centrifugal", status), key: key })))),
                React.createElement(item_1.default, { itemClassName: `locate ${status.locate ? "show item" : "hide item"}` })))));
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
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COMMAND_VALVE_MP_COMPONENT_TYPE = exports.PARAMETER_LIST_COMPONENT_TYPE = exports.STATUS_COMPONENT_TYPE = exports.PUMP_COMPONENT_TYPE = exports.VALVE_COMPONENT_TYPE = exports.HMI_COMPONENT_CLASS = exports.IA_SYMBOL_COMPONENT_WRAPPER = exports.IA_SYMBOL_COMPONENT_ROW = exports.IA_SYMBOL_COMPONENT_COLUMN = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG1pQ29tcG9uZW50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFxQztBQUNsRDtBQUNBO0FBQ0EsOEJBQThCLE9BQU8sa0ZBQWtGLE9BQU87QUFDOUgsR0FBRztBQUNIO0FBQ0EsaUtBQWlLLE1BQU07QUFDdkssR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFFO0FBQ047QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQztBQUNBO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXLElBQUksaUJBQWlCO0FBQ3JFO0FBQ0EsdUJBQXVCLG1CQUFtQixvQkFBb0IsMkRBQTJELElBQUk7QUFDN0g7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsMklBQTJGO0FBQzNGLDJEQUEyRDtBQUMzRCx3REFBd0Q7QUFDeEQsNEZBQXNEO0FBU3JELHVGQVRRLGFBQUssUUFTUjtBQVJOLHlGQUFtRDtBQVNsRCxzRkFUUSxXQUFJLFFBU1I7QUFSTCxvSEFBOEU7QUFTN0UsK0ZBVFEsNkJBQWEsUUFTUjtBQVJkLG9IQUE4RjtBQVM3Rix3R0FUUSxzQ0FBc0IsUUFTUjtBQVJ2Qix1SEFBaUY7QUFTaEYsZ0dBVFEsK0JBQWMsUUFTUjtBQVJmLG9IQUE4RTtBQVM3RSwrRkFUUSw2QkFBYSxRQVNSO0FBR2QsMEJBQTBCO0FBQzFCLDBEQUFxQjtBQUVyQiw4QkFBOEI7QUFDOUIsTUFBTSxVQUFVLEdBQXlCO0lBQ3hDLElBQUksaUJBQVMsRUFBRTtJQUNmLElBQUksZUFBUSxFQUFFO0lBQ2QsSUFBSSxpQ0FBaUIsRUFBRTtJQUN2QixJQUFJLDBDQUEwQixFQUFFO0lBQ2hDLElBQUksbUNBQWtCLEVBQUU7SUFDeEIsSUFBSSxpQ0FBaUIsRUFBRTtDQUV2QixDQUFDO0FBRUYsaUVBQWlFO0FBQ2pFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFnQixFQUFFLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0htaUNvbXBvbmVudHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9janMvaW1tZXIuY2pzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91c2UtaW1tZXIvZGlzdC91c2UtaW1tZXIuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbWF4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92MVRvVjYuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y1LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y2LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y2VG9WMS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92Ny5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXBpL2hvb2tzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXBpL2luaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS90eXBlcy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS91dGlscy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FyLXR5cGVzL3Byb2Nlc3NPYmplY3RzL2hlYXRFeGNoYW5nZXJzL2h4LXR5cGVzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXItdXRpbHMvcHJvY2Vzc09iamVjdHMvaGVhdEV4Y2hhbmdlcnMvaHgtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL0NvbW1hbmRWYWx2ZU1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvSGVhdEV4Y2hhbmdlci50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1BhcmFtZXRlckxpc3QudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9QdW1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvU3RhdHVzVmFsdmVNcC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1ZhbHZlLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL2hlYXQtZXhjaGFuZ2Vycy9IZWF0RXhjaGFuZ2VyQ29tcG91bmQudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvcHVtcHMvUHVtcENvbXBvdW5kLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3ZhbHZlLW1wL1ZhbHZlTXAudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvdmFsdmUvaXRlbS50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy91dGlscy9jcmVhdGVDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL3V0aWxzL251bWJlclV0aWwudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy9leHRlcm5hbCB1bWQgXCJQZXJzcGVjdGl2ZUNsaWVudFwiIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvZXh0ZXJuYWwgdW1kIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlBlcnNwZWN0aXZlQ2xpZW50XCIpLCByZXF1aXJlKFwiUmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJIbWlDb21wb25lbnRzXCIsIFtcIlBlcnNwZWN0aXZlQ2xpZW50XCIsIFwiUmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSG1pQ29tcG9uZW50c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcIlBlcnNwZWN0aXZlQ2xpZW50XCIpLCByZXF1aXJlKFwiUmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhtaUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJQZXJzcGVjdGl2ZUNsaWVudFwiXSwgcm9vdFtcIlJlYWN0XCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pbmR1Y3RpdmVhdXRvbWF0aW9uX3BlcnNwZWN0aXZlX2NsaWVudF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbW1lci50c1xudmFyIGltbWVyX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KGltbWVyX2V4cG9ydHMsIHtcbiAgSW1tZXI6ICgpID0+IEltbWVyMixcbiAgYXBwbHlQYXRjaGVzOiAoKSA9PiBhcHBseVBhdGNoZXMsXG4gIGNhc3REcmFmdDogKCkgPT4gY2FzdERyYWZ0LFxuICBjYXN0SW1tdXRhYmxlOiAoKSA9PiBjYXN0SW1tdXRhYmxlLFxuICBjcmVhdGVEcmFmdDogKCkgPT4gY3JlYXRlRHJhZnQsXG4gIGN1cnJlbnQ6ICgpID0+IGN1cnJlbnQsXG4gIGVuYWJsZU1hcFNldDogKCkgPT4gZW5hYmxlTWFwU2V0LFxuICBlbmFibGVQYXRjaGVzOiAoKSA9PiBlbmFibGVQYXRjaGVzLFxuICBmaW5pc2hEcmFmdDogKCkgPT4gZmluaXNoRHJhZnQsXG4gIGZyZWV6ZTogKCkgPT4gZnJlZXplLFxuICBpbW1lcmFibGU6ICgpID0+IERSQUZUQUJMRSxcbiAgaXNEcmFmdDogKCkgPT4gaXNEcmFmdCxcbiAgaXNEcmFmdGFibGU6ICgpID0+IGlzRHJhZnRhYmxlLFxuICBub3RoaW5nOiAoKSA9PiBOT1RISU5HLFxuICBvcmlnaW5hbDogKCkgPT4gb3JpZ2luYWwsXG4gIHByb2R1Y2U6ICgpID0+IHByb2R1Y2UsXG4gIHByb2R1Y2VXaXRoUGF0Y2hlczogKCkgPT4gcHJvZHVjZVdpdGhQYXRjaGVzLFxuICBzZXRBdXRvRnJlZXplOiAoKSA9PiBzZXRBdXRvRnJlZXplLFxuICBzZXRVc2VTdHJpY3RTaGFsbG93Q29weTogKCkgPT4gc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHlcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoaW1tZXJfZXhwb3J0cyk7XG5cbi8vIHNyYy91dGlscy9lbnYudHNcbnZhciBOT1RISU5HID0gU3ltYm9sLmZvcihcImltbWVyLW5vdGhpbmdcIik7XG52YXIgRFJBRlRBQkxFID0gU3ltYm9sLmZvcihcImltbWVyLWRyYWZ0YWJsZVwiKTtcbnZhciBEUkFGVF9TVEFURSA9IFN5bWJvbC5mb3IoXCJpbW1lci1zdGF0ZVwiKTtcblxuLy8gc3JjL3V0aWxzL2Vycm9ycy50c1xudmFyIGVycm9ycyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFtcbiAgLy8gQWxsIGVycm9yIGNvZGVzLCBzdGFydGluZyBieSAwOlxuICBmdW5jdGlvbihwbHVnaW4pIHtcbiAgICByZXR1cm4gYFRoZSBwbHVnaW4gZm9yICcke3BsdWdpbn0nIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBcXGBlbmFibGUke3BsdWdpbn0oKVxcYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLmA7XG4gIH0sXG4gIGZ1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIGBwcm9kdWNlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGluZ3MgdGhhdCBhcmUgZHJhZnRhYmxlOiBwbGFpbiBvYmplY3RzLCBhcnJheXMsIE1hcCwgU2V0IG9yIGNsYXNzZXMgdGhhdCBhcmUgbWFya2VkIHdpdGggJ1tpbW1lcmFibGVdOiB0cnVlJy4gR290ICcke3RoaW5nfSdgO1xuICB9LFxuICBcIlRoaXMgb2JqZWN0IGhhcyBiZWVuIGZyb3plbiBhbmQgc2hvdWxkIG5vdCBiZSBtdXRhdGVkXCIsXG4gIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgdXNlIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkLiBEaWQgeW91IHBhc3MgYW4gb2JqZWN0IGZyb20gaW5zaWRlIGFuIGltbWVyIGZ1bmN0aW9uIHRvIGFuIGFzeW5jIHByb2Nlc3M/IFwiICsgZGF0YTtcbiAgfSxcbiAgXCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiLFxuICBcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLFxuICBcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLFxuICBcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiLFxuICBcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIixcbiAgXCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsXG4gIGZ1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIGAnY3VycmVudCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6ICR7dGhpbmd9YDtcbiAgfSxcbiAgXCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuICBcIk9iamVjdC5zZXRQcm90b3R5cGVPZigpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsXG4gIFwiSW1tZXIgb25seSBzdXBwb3J0cyBkZWxldGluZyBhcnJheSBpbmRpY2VzXCIsXG4gIFwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLFxuICBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBgJ29yaWdpbmFsJyBleHBlY3RzIGEgZHJhZnQsIGdvdDogJHt0aGluZ31gO1xuICB9XG4gIC8vIE5vdGU6IGlmIG1vcmUgZXJyb3JzIGFyZSBhZGRlZCwgdGhlIGVycm9yT2Zmc2V0IGluIFBhdGNoZXMudHMgc2hvdWxkIGJlIGluY3JlYXNlZFxuICAvLyBTZWUgUGF0Y2hlcy50cyBmb3IgYWRkaXRpb25hbCBlcnJvcnNcbl0gOiBbXTtcbmZ1bmN0aW9uIGRpZShlcnJvciwgLi4uYXJncykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc3QgZSA9IGVycm9yc1tlcnJvcl07XG4gICAgY29uc3QgbXNnID0gdHlwZW9mIGUgPT09IFwiZnVuY3Rpb25cIiA/IGUuYXBwbHkobnVsbCwgYXJncykgOiBlO1xuICAgIHRocm93IG5ldyBFcnJvcihgW0ltbWVyXSAke21zZ31gKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFtJbW1lcl0gbWluaWZpZWQgZXJyb3IgbnI6ICR7ZXJyb3J9LiBGdWxsIGVycm9yIGF0OiBodHRwczovL2JpdC5seS8zY1hFS1dmYFxuICApO1xufVxuXG4vLyBzcmMvdXRpbHMvY29tbW9uLnRzXG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5mdW5jdGlvbiBpc0RyYWZ0KHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmICEhdmFsdWVbRFJBRlRfU1RBVEVdO1xufVxuZnVuY3Rpb24gaXNEcmFmdGFibGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSB8fCAhIXZhbHVlW0RSQUZUQUJMRV0gfHwgISF2YWx1ZS5jb25zdHJ1Y3Rvcj8uW0RSQUZUQUJMRV0gfHwgaXNNYXAodmFsdWUpIHx8IGlzU2V0KHZhbHVlKTtcbn1cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci50b1N0cmluZygpO1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIilcbiAgICByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0gZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBDdG9yID0gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIGlmIChDdG9yID09PSBPYmplY3QpXG4gICAgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSBcImZ1bmN0aW9uXCIgJiYgRnVuY3Rpb24udG9TdHJpbmcuY2FsbChDdG9yKSA9PT0gb2JqZWN0Q3RvclN0cmluZztcbn1cbmZ1bmN0aW9uIG9yaWdpbmFsKHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdCh2YWx1ZSkpXG4gICAgZGllKDE1LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZVtEUkFGVF9TVEFURV0uYmFzZV87XG59XG5mdW5jdGlvbiBlYWNoKG9iaiwgaXRlcikge1xuICBpZiAoZ2V0QXJjaHR5cGUob2JqKSA9PT0gMCAvKiBPYmplY3QgKi8pIHtcbiAgICBSZWZsZWN0Lm93bktleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGl0ZXIoa2V5LCBvYmpba2V5XSwgb2JqKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmouZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiBpdGVyKGluZGV4LCBlbnRyeSwgb2JqKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEFyY2h0eXBlKHRoaW5nKSB7XG4gIGNvbnN0IHN0YXRlID0gdGhpbmdbRFJBRlRfU1RBVEVdO1xuICByZXR1cm4gc3RhdGUgPyBzdGF0ZS50eXBlXyA6IEFycmF5LmlzQXJyYXkodGhpbmcpID8gMSAvKiBBcnJheSAqLyA6IGlzTWFwKHRoaW5nKSA/IDIgLyogTWFwICovIDogaXNTZXQodGhpbmcpID8gMyAvKiBTZXQgKi8gOiAwIC8qIE9iamVjdCAqLztcbn1cbmZ1bmN0aW9uIGhhcyh0aGluZywgcHJvcCkge1xuICByZXR1cm4gZ2V0QXJjaHR5cGUodGhpbmcpID09PSAyIC8qIE1hcCAqLyA/IHRoaW5nLmhhcyhwcm9wKSA6IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGluZywgcHJvcCk7XG59XG5mdW5jdGlvbiBnZXQodGhpbmcsIHByb3ApIHtcbiAgcmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gMiAvKiBNYXAgKi8gPyB0aGluZy5nZXQocHJvcCkgOiB0aGluZ1twcm9wXTtcbn1cbmZ1bmN0aW9uIHNldCh0aGluZywgcHJvcE9yT2xkVmFsdWUsIHZhbHVlKSB7XG4gIGNvbnN0IHQgPSBnZXRBcmNodHlwZSh0aGluZyk7XG4gIGlmICh0ID09PSAyIC8qIE1hcCAqLylcbiAgICB0aGluZy5zZXQocHJvcE9yT2xkVmFsdWUsIHZhbHVlKTtcbiAgZWxzZSBpZiAodCA9PT0gMyAvKiBTZXQgKi8pIHtcbiAgICB0aGluZy5hZGQodmFsdWUpO1xuICB9IGVsc2VcbiAgICB0aGluZ1twcm9wT3JPbGRWYWx1ZV0gPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuZnVuY3Rpb24gaXNNYXAodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBNYXA7XG59XG5mdW5jdGlvbiBpc1NldCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIFNldDtcbn1cbmZ1bmN0aW9uIGxhdGVzdChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUuY29weV8gfHwgc3RhdGUuYmFzZV87XG59XG5mdW5jdGlvbiBzaGFsbG93Q29weShiYXNlLCBzdHJpY3QpIHtcbiAgaWYgKGlzTWFwKGJhc2UpKSB7XG4gICAgcmV0dXJuIG5ldyBNYXAoYmFzZSk7XG4gIH1cbiAgaWYgKGlzU2V0KGJhc2UpKSB7XG4gICAgcmV0dXJuIG5ldyBTZXQoYmFzZSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZSkpXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJhc2UpO1xuICBjb25zdCBpc1BsYWluID0gaXNQbGFpbk9iamVjdChiYXNlKTtcbiAgaWYgKHN0cmljdCA9PT0gdHJ1ZSB8fCBzdHJpY3QgPT09IFwiY2xhc3Nfb25seVwiICYmICFpc1BsYWluKSB7XG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhiYXNlKTtcbiAgICBkZWxldGUgZGVzY3JpcHRvcnNbRFJBRlRfU1RBVEVdO1xuICAgIGxldCBrZXlzID0gUmVmbGVjdC5vd25LZXlzKGRlc2NyaXB0b3JzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBjb25zdCBkZXNjID0gZGVzY3JpcHRvcnNba2V5XTtcbiAgICAgIGlmIChkZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgICAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgZGVzYy5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KVxuICAgICAgICBkZXNjcmlwdG9yc1trZXldID0ge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAvLyBjb3VsZCBsaXZlIHdpdGggISFkZXNjLnNldCBhcyB3ZWxsIGhlcmUuLi5cbiAgICAgICAgICBlbnVtZXJhYmxlOiBkZXNjLmVudW1lcmFibGUsXG4gICAgICAgICAgdmFsdWU6IGJhc2Vba2V5XVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShnZXRQcm90b3R5cGVPZihiYXNlKSwgZGVzY3JpcHRvcnMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHByb3RvID0gZ2V0UHJvdG90eXBlT2YoYmFzZSk7XG4gICAgaWYgKHByb3RvICE9PSBudWxsICYmIGlzUGxhaW4pIHtcbiAgICAgIHJldHVybiB7IC4uLmJhc2UgfTtcbiAgICB9XG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShwcm90byk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ob2JqLCBiYXNlKTtcbiAgfVxufVxuZnVuY3Rpb24gZnJlZXplKG9iaiwgZGVlcCA9IGZhbHNlKSB7XG4gIGlmIChpc0Zyb3plbihvYmopIHx8IGlzRHJhZnQob2JqKSB8fCAhaXNEcmFmdGFibGUob2JqKSlcbiAgICByZXR1cm4gb2JqO1xuICBpZiAoZ2V0QXJjaHR5cGUob2JqKSA+IDEpIHtcbiAgICBvYmouc2V0ID0gb2JqLmFkZCA9IG9iai5jbGVhciA9IG9iai5kZWxldGUgPSBkb250TXV0YXRlRnJvemVuQ29sbGVjdGlvbnM7XG4gIH1cbiAgT2JqZWN0LmZyZWV6ZShvYmopO1xuICBpZiAoZGVlcClcbiAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4gZnJlZXplKHZhbHVlLCB0cnVlKSk7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBkb250TXV0YXRlRnJvemVuQ29sbGVjdGlvbnMoKSB7XG4gIGRpZSgyKTtcbn1cbmZ1bmN0aW9uIGlzRnJvemVuKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmlzRnJvemVuKG9iaik7XG59XG5cbi8vIHNyYy91dGlscy9wbHVnaW5zLnRzXG52YXIgcGx1Z2lucyA9IHt9O1xuZnVuY3Rpb24gZ2V0UGx1Z2luKHBsdWdpbktleSkge1xuICBjb25zdCBwbHVnaW4gPSBwbHVnaW5zW3BsdWdpbktleV07XG4gIGlmICghcGx1Z2luKSB7XG4gICAgZGllKDAsIHBsdWdpbktleSk7XG4gIH1cbiAgcmV0dXJuIHBsdWdpbjtcbn1cbmZ1bmN0aW9uIGxvYWRQbHVnaW4ocGx1Z2luS2V5LCBpbXBsZW1lbnRhdGlvbikge1xuICBpZiAoIXBsdWdpbnNbcGx1Z2luS2V5XSlcbiAgICBwbHVnaW5zW3BsdWdpbktleV0gPSBpbXBsZW1lbnRhdGlvbjtcbn1cblxuLy8gc3JjL2NvcmUvc2NvcGUudHNcbnZhciBjdXJyZW50U2NvcGU7XG5mdW5jdGlvbiBnZXRDdXJyZW50U2NvcGUoKSB7XG4gIHJldHVybiBjdXJyZW50U2NvcGU7XG59XG5mdW5jdGlvbiBjcmVhdGVTY29wZShwYXJlbnRfLCBpbW1lcl8pIHtcbiAgcmV0dXJuIHtcbiAgICBkcmFmdHNfOiBbXSxcbiAgICBwYXJlbnRfLFxuICAgIGltbWVyXyxcbiAgICAvLyBXaGVuZXZlciB0aGUgbW9kaWZpZWQgZHJhZnQgY29udGFpbnMgYSBkcmFmdCBmcm9tIGFub3RoZXIgc2NvcGUsIHdlXG4gICAgLy8gbmVlZCB0byBwcmV2ZW50IGF1dG8tZnJlZXppbmcgc28gdGhlIHVub3duZWQgZHJhZnQgY2FuIGJlIGZpbmFsaXplZC5cbiAgICBjYW5BdXRvRnJlZXplXzogdHJ1ZSxcbiAgICB1bmZpbmFsaXplZERyYWZ0c186IDBcbiAgfTtcbn1cbmZ1bmN0aW9uIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKSB7XG4gIGlmIChwYXRjaExpc3RlbmVyKSB7XG4gICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKTtcbiAgICBzY29wZS5wYXRjaGVzXyA9IFtdO1xuICAgIHNjb3BlLmludmVyc2VQYXRjaGVzXyA9IFtdO1xuICAgIHNjb3BlLnBhdGNoTGlzdGVuZXJfID0gcGF0Y2hMaXN0ZW5lcjtcbiAgfVxufVxuZnVuY3Rpb24gcmV2b2tlU2NvcGUoc2NvcGUpIHtcbiAgbGVhdmVTY29wZShzY29wZSk7XG4gIHNjb3BlLmRyYWZ0c18uZm9yRWFjaChyZXZva2VEcmFmdCk7XG4gIHNjb3BlLmRyYWZ0c18gPSBudWxsO1xufVxuZnVuY3Rpb24gbGVhdmVTY29wZShzY29wZSkge1xuICBpZiAoc2NvcGUgPT09IGN1cnJlbnRTY29wZSkge1xuICAgIGN1cnJlbnRTY29wZSA9IHNjb3BlLnBhcmVudF87XG4gIH1cbn1cbmZ1bmN0aW9uIGVudGVyU2NvcGUoaW1tZXIyKSB7XG4gIHJldHVybiBjdXJyZW50U2NvcGUgPSBjcmVhdGVTY29wZShjdXJyZW50U2NvcGUsIGltbWVyMik7XG59XG5mdW5jdGlvbiByZXZva2VEcmFmdChkcmFmdCkge1xuICBjb25zdCBzdGF0ZSA9IGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgaWYgKHN0YXRlLnR5cGVfID09PSAwIC8qIE9iamVjdCAqLyB8fCBzdGF0ZS50eXBlXyA9PT0gMSAvKiBBcnJheSAqLylcbiAgICBzdGF0ZS5yZXZva2VfKCk7XG4gIGVsc2VcbiAgICBzdGF0ZS5yZXZva2VkXyA9IHRydWU7XG59XG5cbi8vIHNyYy9jb3JlL2ZpbmFsaXplLnRzXG5mdW5jdGlvbiBwcm9jZXNzUmVzdWx0KHJlc3VsdCwgc2NvcGUpIHtcbiAgc2NvcGUudW5maW5hbGl6ZWREcmFmdHNfID0gc2NvcGUuZHJhZnRzXy5sZW5ndGg7XG4gIGNvbnN0IGJhc2VEcmFmdCA9IHNjb3BlLmRyYWZ0c19bMF07XG4gIGNvbnN0IGlzUmVwbGFjZWQgPSByZXN1bHQgIT09IHZvaWQgMCAmJiByZXN1bHQgIT09IGJhc2VEcmFmdDtcbiAgaWYgKGlzUmVwbGFjZWQpIHtcbiAgICBpZiAoYmFzZURyYWZ0W0RSQUZUX1NUQVRFXS5tb2RpZmllZF8pIHtcbiAgICAgIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgICAgIGRpZSg0KTtcbiAgICB9XG4gICAgaWYgKGlzRHJhZnRhYmxlKHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdCA9IGZpbmFsaXplKHNjb3BlLCByZXN1bHQpO1xuICAgICAgaWYgKCFzY29wZS5wYXJlbnRfKVxuICAgICAgICBtYXliZUZyZWV6ZShzY29wZSwgcmVzdWx0KTtcbiAgICB9XG4gICAgaWYgKHNjb3BlLnBhdGNoZXNfKSB7XG4gICAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhcbiAgICAgICAgYmFzZURyYWZ0W0RSQUZUX1NUQVRFXS5iYXNlXyxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBzY29wZS5wYXRjaGVzXyxcbiAgICAgICAgc2NvcGUuaW52ZXJzZVBhdGNoZXNfXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgYmFzZURyYWZ0LCBbXSk7XG4gIH1cbiAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuICBpZiAoc2NvcGUucGF0Y2hlc18pIHtcbiAgICBzY29wZS5wYXRjaExpc3RlbmVyXyhzY29wZS5wYXRjaGVzXywgc2NvcGUuaW52ZXJzZVBhdGNoZXNfKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0ICE9PSBOT1RISU5HID8gcmVzdWx0IDogdm9pZCAwO1xufVxuZnVuY3Rpb24gZmluYWxpemUocm9vdFNjb3BlLCB2YWx1ZSwgcGF0aCkge1xuICBpZiAoaXNGcm96ZW4odmFsdWUpKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgY29uc3Qgc3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV07XG4gIGlmICghc3RhdGUpIHtcbiAgICBlYWNoKFxuICAgICAgdmFsdWUsXG4gICAgICAoa2V5LCBjaGlsZFZhbHVlKSA9PiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgc3RhdGUsIHZhbHVlLCBrZXksIGNoaWxkVmFsdWUsIHBhdGgpXG4gICAgKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHN0YXRlLnNjb3BlXyAhPT0gcm9vdFNjb3BlKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIHN0YXRlLmJhc2VfLCB0cnVlKTtcbiAgICByZXR1cm4gc3RhdGUuYmFzZV87XG4gIH1cbiAgaWYgKCFzdGF0ZS5maW5hbGl6ZWRfKSB7XG4gICAgc3RhdGUuZmluYWxpemVkXyA9IHRydWU7XG4gICAgc3RhdGUuc2NvcGVfLnVuZmluYWxpemVkRHJhZnRzXy0tO1xuICAgIGNvbnN0IHJlc3VsdCA9IHN0YXRlLmNvcHlfO1xuICAgIGxldCByZXN1bHRFYWNoID0gcmVzdWx0O1xuICAgIGxldCBpc1NldDIgPSBmYWxzZTtcbiAgICBpZiAoc3RhdGUudHlwZV8gPT09IDMgLyogU2V0ICovKSB7XG4gICAgICByZXN1bHRFYWNoID0gbmV3IFNldChyZXN1bHQpO1xuICAgICAgcmVzdWx0LmNsZWFyKCk7XG4gICAgICBpc1NldDIgPSB0cnVlO1xuICAgIH1cbiAgICBlYWNoKFxuICAgICAgcmVzdWx0RWFjaCxcbiAgICAgIChrZXksIGNoaWxkVmFsdWUpID0+IGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBzdGF0ZSwgcmVzdWx0LCBrZXksIGNoaWxkVmFsdWUsIHBhdGgsIGlzU2V0MilcbiAgICApO1xuICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgcmVzdWx0LCBmYWxzZSk7XG4gICAgaWYgKHBhdGggJiYgcm9vdFNjb3BlLnBhdGNoZXNfKSB7XG4gICAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUGF0Y2hlc18oXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwYXRoLFxuICAgICAgICByb290U2NvcGUucGF0Y2hlc18sXG4gICAgICAgIHJvb3RTY29wZS5pbnZlcnNlUGF0Y2hlc19cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZS5jb3B5Xztcbn1cbmZ1bmN0aW9uIGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBwYXJlbnRTdGF0ZSwgdGFyZ2V0T2JqZWN0LCBwcm9wLCBjaGlsZFZhbHVlLCByb290UGF0aCwgdGFyZ2V0SXNTZXQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBjaGlsZFZhbHVlID09PSB0YXJnZXRPYmplY3QpXG4gICAgZGllKDUpO1xuICBpZiAoaXNEcmFmdChjaGlsZFZhbHVlKSkge1xuICAgIGNvbnN0IHBhdGggPSByb290UGF0aCAmJiBwYXJlbnRTdGF0ZSAmJiBwYXJlbnRTdGF0ZS50eXBlXyAhPT0gMyAvKiBTZXQgKi8gJiYgLy8gU2V0IG9iamVjdHMgYXJlIGF0b21pYyBzaW5jZSB0aGV5IGhhdmUgbm8ga2V5cy5cbiAgICAhaGFzKHBhcmVudFN0YXRlLmFzc2lnbmVkXywgcHJvcCkgPyByb290UGF0aC5jb25jYXQocHJvcCkgOiB2b2lkIDA7XG4gICAgY29uc3QgcmVzID0gZmluYWxpemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlLCBwYXRoKTtcbiAgICBzZXQodGFyZ2V0T2JqZWN0LCBwcm9wLCByZXMpO1xuICAgIGlmIChpc0RyYWZ0KHJlcykpIHtcbiAgICAgIHJvb3RTY29wZS5jYW5BdXRvRnJlZXplXyA9IGZhbHNlO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKHRhcmdldElzU2V0KSB7XG4gICAgdGFyZ2V0T2JqZWN0LmFkZChjaGlsZFZhbHVlKTtcbiAgfVxuICBpZiAoaXNEcmFmdGFibGUoY2hpbGRWYWx1ZSkgJiYgIWlzRnJvemVuKGNoaWxkVmFsdWUpKSB7XG4gICAgaWYgKCFyb290U2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHJvb3RTY29wZS51bmZpbmFsaXplZERyYWZ0c18gPCAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZpbmFsaXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSk7XG4gICAgaWYgKCghcGFyZW50U3RhdGUgfHwgIXBhcmVudFN0YXRlLnNjb3BlXy5wYXJlbnRfKSAmJiB0eXBlb2YgcHJvcCAhPT0gXCJzeW1ib2xcIiAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0T2JqZWN0LCBwcm9wKSlcbiAgICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1heWJlRnJlZXplKHNjb3BlLCB2YWx1ZSwgZGVlcCA9IGZhbHNlKSB7XG4gIGlmICghc2NvcGUucGFyZW50XyAmJiBzY29wZS5pbW1lcl8uYXV0b0ZyZWV6ZV8gJiYgc2NvcGUuY2FuQXV0b0ZyZWV6ZV8pIHtcbiAgICBmcmVlemUodmFsdWUsIGRlZXApO1xuICB9XG59XG5cbi8vIHNyYy9jb3JlL3Byb3h5LnRzXG5mdW5jdGlvbiBjcmVhdGVQcm94eVByb3h5KGJhc2UsIHBhcmVudCkge1xuICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShiYXNlKTtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgdHlwZV86IGlzQXJyYXkgPyAxIC8qIEFycmF5ICovIDogMCAvKiBPYmplY3QgKi8sXG4gICAgLy8gVHJhY2sgd2hpY2ggcHJvZHVjZSBjYWxsIHRoaXMgaXMgYXNzb2NpYXRlZCB3aXRoLlxuICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgIC8vIFRydWUgZm9yIGJvdGggc2hhbGxvdyBhbmQgZGVlcCBjaGFuZ2VzLlxuICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgLy8gVXNlZCBkdXJpbmcgZmluYWxpemF0aW9uLlxuICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgIC8vIFRyYWNrIHdoaWNoIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGFzc2lnbmVkICh0cnVlKSBvciBkZWxldGVkIChmYWxzZSkuXG4gICAgYXNzaWduZWRfOiB7fSxcbiAgICAvLyBUaGUgcGFyZW50IGRyYWZ0IHN0YXRlLlxuICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAvLyBUaGUgYmFzZSBzdGF0ZS5cbiAgICBiYXNlXzogYmFzZSxcbiAgICAvLyBUaGUgYmFzZSBwcm94eS5cbiAgICBkcmFmdF86IG51bGwsXG4gICAgLy8gc2V0IGJlbG93XG4gICAgLy8gVGhlIGJhc2UgY29weSB3aXRoIGFueSB1cGRhdGVkIHZhbHVlcy5cbiAgICBjb3B5XzogbnVsbCxcbiAgICAvLyBDYWxsZWQgYnkgdGhlIGBwcm9kdWNlYCBmdW5jdGlvbi5cbiAgICByZXZva2VfOiBudWxsLFxuICAgIGlzTWFudWFsXzogZmFsc2VcbiAgfTtcbiAgbGV0IHRhcmdldCA9IHN0YXRlO1xuICBsZXQgdHJhcHMgPSBvYmplY3RUcmFwcztcbiAgaWYgKGlzQXJyYXkpIHtcbiAgICB0YXJnZXQgPSBbc3RhdGVdO1xuICAgIHRyYXBzID0gYXJyYXlUcmFwcztcbiAgfVxuICBjb25zdCB7IHJldm9rZSwgcHJveHkgfSA9IFByb3h5LnJldm9jYWJsZSh0YXJnZXQsIHRyYXBzKTtcbiAgc3RhdGUuZHJhZnRfID0gcHJveHk7XG4gIHN0YXRlLnJldm9rZV8gPSByZXZva2U7XG4gIHJldHVybiBwcm94eTtcbn1cbnZhciBvYmplY3RUcmFwcyA9IHtcbiAgZ2V0KHN0YXRlLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09IERSQUZUX1NUQVRFKVxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGNvbnN0IHNvdXJjZSA9IGxhdGVzdChzdGF0ZSk7XG4gICAgaWYgKCFoYXMoc291cmNlLCBwcm9wKSkge1xuICAgICAgcmV0dXJuIHJlYWRQcm9wRnJvbVByb3RvKHN0YXRlLCBzb3VyY2UsIHByb3ApO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHNvdXJjZVtwcm9wXTtcbiAgICBpZiAoc3RhdGUuZmluYWxpemVkXyB8fCAhaXNEcmFmdGFibGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gcGVlayhzdGF0ZS5iYXNlXywgcHJvcCkpIHtcbiAgICAgIHByZXBhcmVDb3B5KHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5X1twcm9wXSA9IGNyZWF0ZVByb3h5KHZhbHVlLCBzdGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgaGFzKHN0YXRlLCBwcm9wKSB7XG4gICAgcmV0dXJuIHByb3AgaW4gbGF0ZXN0KHN0YXRlKTtcbiAgfSxcbiAgb3duS2V5cyhzdGF0ZSkge1xuICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMobGF0ZXN0KHN0YXRlKSk7XG4gIH0sXG4gIHNldChzdGF0ZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhsYXRlc3Qoc3RhdGUpLCBwcm9wKTtcbiAgICBpZiAoZGVzYz8uc2V0KSB7XG4gICAgICBkZXNjLnNldC5jYWxsKHN0YXRlLmRyYWZ0XywgdmFsdWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG4gICAgICBjb25zdCBjdXJyZW50MiA9IHBlZWsobGF0ZXN0KHN0YXRlKSwgcHJvcCk7XG4gICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBjdXJyZW50Mj8uW0RSQUZUX1NUQVRFXTtcbiAgICAgIGlmIChjdXJyZW50U3RhdGUgJiYgY3VycmVudFN0YXRlLmJhc2VfID09PSB2YWx1ZSkge1xuICAgICAgICBzdGF0ZS5jb3B5X1twcm9wXSA9IHZhbHVlO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXModmFsdWUsIGN1cnJlbnQyKSAmJiAodmFsdWUgIT09IHZvaWQgMCB8fCBoYXMoc3RhdGUuYmFzZV8sIHByb3ApKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5jb3B5X1twcm9wXSA9PT0gdmFsdWUgJiYgLy8gc3BlY2lhbCBjYXNlOiBoYW5kbGUgbmV3IHByb3BzIHdpdGggdmFsdWUgJ3VuZGVmaW5lZCdcbiAgICAodmFsdWUgIT09IHZvaWQgMCB8fCBwcm9wIGluIHN0YXRlLmNvcHlfKSB8fCAvLyBzcGVjaWFsIGNhc2U6IE5hTlxuICAgIE51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzTmFOKHN0YXRlLmNvcHlfW3Byb3BdKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHN0YXRlLmNvcHlfW3Byb3BdID0gdmFsdWU7XG4gICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHkoc3RhdGUsIHByb3ApIHtcbiAgICBpZiAocGVlayhzdGF0ZS5iYXNlXywgcHJvcCkgIT09IHZvaWQgMCB8fCBwcm9wIGluIHN0YXRlLmJhc2VfKSB7XG4gICAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSBmYWxzZTtcbiAgICAgIHByZXBhcmVDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHN0YXRlLmFzc2lnbmVkX1twcm9wXTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmNvcHlfKSB7XG4gICAgICBkZWxldGUgc3RhdGUuY29weV9bcHJvcF07XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICAvLyBOb3RlOiBXZSBuZXZlciBjb2VyY2UgYGRlc2MudmFsdWVgIGludG8gYW4gSW1tZXIgZHJhZnQsIGJlY2F1c2Ugd2UgY2FuJ3QgbWFrZVxuICAvLyB0aGUgc2FtZSBndWFyYW50ZWUgaW4gRVM1IG1vZGUuXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzdGF0ZSwgcHJvcCkge1xuICAgIGNvbnN0IG93bmVyID0gbGF0ZXN0KHN0YXRlKTtcbiAgICBjb25zdCBkZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob3duZXIsIHByb3ApO1xuICAgIGlmICghZGVzYylcbiAgICAgIHJldHVybiBkZXNjO1xuICAgIHJldHVybiB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogc3RhdGUudHlwZV8gIT09IDEgLyogQXJyYXkgKi8gfHwgcHJvcCAhPT0gXCJsZW5ndGhcIixcbiAgICAgIGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcbiAgICAgIHZhbHVlOiBvd25lcltwcm9wXVxuICAgIH07XG4gIH0sXG4gIGRlZmluZVByb3BlcnR5KCkge1xuICAgIGRpZSgxMSk7XG4gIH0sXG4gIGdldFByb3RvdHlwZU9mKHN0YXRlKSB7XG4gICAgcmV0dXJuIGdldFByb3RvdHlwZU9mKHN0YXRlLmJhc2VfKTtcbiAgfSxcbiAgc2V0UHJvdG90eXBlT2YoKSB7XG4gICAgZGllKDEyKTtcbiAgfVxufTtcbnZhciBhcnJheVRyYXBzID0ge307XG5lYWNoKG9iamVjdFRyYXBzLCAoa2V5LCBmbikgPT4ge1xuICBhcnJheVRyYXBzW2tleV0gPSBmdW5jdGlvbigpIHtcbiAgICBhcmd1bWVudHNbMF0gPSBhcmd1bWVudHNbMF1bMF07XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KTtcbmFycmF5VHJhcHMuZGVsZXRlUHJvcGVydHkgPSBmdW5jdGlvbihzdGF0ZSwgcHJvcCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzTmFOKHBhcnNlSW50KHByb3ApKSlcbiAgICBkaWUoMTMpO1xuICByZXR1cm4gYXJyYXlUcmFwcy5zZXQuY2FsbCh0aGlzLCBzdGF0ZSwgcHJvcCwgdm9pZCAwKTtcbn07XG5hcnJheVRyYXBzLnNldCA9IGZ1bmN0aW9uKHN0YXRlLCBwcm9wLCB2YWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHByb3AgIT09IFwibGVuZ3RoXCIgJiYgaXNOYU4ocGFyc2VJbnQocHJvcCkpKVxuICAgIGRpZSgxNCk7XG4gIHJldHVybiBvYmplY3RUcmFwcy5zZXQuY2FsbCh0aGlzLCBzdGF0ZVswXSwgcHJvcCwgdmFsdWUsIHN0YXRlWzBdKTtcbn07XG5mdW5jdGlvbiBwZWVrKGRyYWZ0LCBwcm9wKSB7XG4gIGNvbnN0IHN0YXRlID0gZHJhZnRbRFJBRlRfU1RBVEVdO1xuICBjb25zdCBzb3VyY2UgPSBzdGF0ZSA/IGxhdGVzdChzdGF0ZSkgOiBkcmFmdDtcbiAgcmV0dXJuIHNvdXJjZVtwcm9wXTtcbn1cbmZ1bmN0aW9uIHJlYWRQcm9wRnJvbVByb3RvKHN0YXRlLCBzb3VyY2UsIHByb3ApIHtcbiAgY29uc3QgZGVzYyA9IGdldERlc2NyaXB0b3JGcm9tUHJvdG8oc291cmNlLCBwcm9wKTtcbiAgcmV0dXJuIGRlc2MgPyBgdmFsdWVgIGluIGRlc2MgPyBkZXNjLnZhbHVlIDogKFxuICAgIC8vIFRoaXMgaXMgYSB2ZXJ5IHNwZWNpYWwgY2FzZSwgaWYgdGhlIHByb3AgaXMgYSBnZXR0ZXIgZGVmaW5lZCBieSB0aGVcbiAgICAvLyBwcm90b3R5cGUsIHdlIHNob3VsZCBpbnZva2UgaXQgd2l0aCB0aGUgZHJhZnQgYXMgY29udGV4dCFcbiAgICBkZXNjLmdldD8uY2FsbChzdGF0ZS5kcmFmdF8pXG4gICkgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBnZXREZXNjcmlwdG9yRnJvbVByb3RvKHNvdXJjZSwgcHJvcCkge1xuICBpZiAoIShwcm9wIGluIHNvdXJjZSkpXG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgbGV0IHByb3RvID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlKTtcbiAgd2hpbGUgKHByb3RvKSB7XG4gICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIHByb3ApO1xuICAgIGlmIChkZXNjKVxuICAgICAgcmV0dXJuIGRlc2M7XG4gICAgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cbiAgcmV0dXJuIHZvaWQgMDtcbn1cbmZ1bmN0aW9uIG1hcmtDaGFuZ2VkKHN0YXRlKSB7XG4gIGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG4gICAgc3RhdGUubW9kaWZpZWRfID0gdHJ1ZTtcbiAgICBpZiAoc3RhdGUucGFyZW50Xykge1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUucGFyZW50Xyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwcmVwYXJlQ29weShzdGF0ZSkge1xuICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgc3RhdGUuY29weV8gPSBzaGFsbG93Q29weShcbiAgICAgIHN0YXRlLmJhc2VfLFxuICAgICAgc3RhdGUuc2NvcGVfLmltbWVyXy51c2VTdHJpY3RTaGFsbG93Q29weV9cbiAgICApO1xuICB9XG59XG5cbi8vIHNyYy9jb3JlL2ltbWVyQ2xhc3MudHNcbnZhciBJbW1lcjIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuYXV0b0ZyZWV6ZV8gPSB0cnVlO1xuICAgIHRoaXMudXNlU3RyaWN0U2hhbGxvd0NvcHlfID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhlIGBwcm9kdWNlYCBmdW5jdGlvbiB0YWtlcyBhIHZhbHVlIGFuZCBhIFwicmVjaXBlIGZ1bmN0aW9uXCIgKHdob3NlXG4gICAgICogcmV0dXJuIHZhbHVlIG9mdGVuIGRlcGVuZHMgb24gdGhlIGJhc2Ugc3RhdGUpLiBUaGUgcmVjaXBlIGZ1bmN0aW9uIGlzXG4gICAgICogZnJlZSB0byBtdXRhdGUgaXRzIGZpcnN0IGFyZ3VtZW50IGhvd2V2ZXIgaXQgd2FudHMuIEFsbCBtdXRhdGlvbnMgYXJlXG4gICAgICogb25seSBldmVyIGFwcGxpZWQgdG8gYSBfX2NvcHlfXyBvZiB0aGUgYmFzZSBzdGF0ZS5cbiAgICAgKlxuICAgICAqIFBhc3Mgb25seSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFwiY3VycmllZCBwcm9kdWNlclwiIHdoaWNoIHJlbGlldmVzIHlvdVxuICAgICAqIGZyb20gcGFzc2luZyB0aGUgcmVjaXBlIGZ1bmN0aW9uIGV2ZXJ5IHRpbWUuXG4gICAgICpcbiAgICAgKiBPbmx5IHBsYWluIG9iamVjdHMgYW5kIGFycmF5cyBhcmUgbWFkZSBtdXRhYmxlLiBBbGwgb3RoZXIgb2JqZWN0cyBhcmVcbiAgICAgKiBjb25zaWRlcmVkIHVuY29weWFibGUuXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIGZ1bmN0aW9uIGlzIF9fYm91bmRfXyB0byBpdHMgYEltbWVyYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBiYXNlIC0gdGhlIGluaXRpYWwgc3RhdGVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWNpcGUgLSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgcHJveHkgb2YgdGhlIGJhc2Ugc3RhdGUgYXMgZmlyc3QgYXJndW1lbnQgYW5kIHdoaWNoIGNhbiBiZSBmcmVlbHkgbW9kaWZpZWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXRjaExpc3RlbmVyIC0gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIGFsbCB0aGUgcGF0Y2hlcyBwcm9kdWNlZCBoZXJlXG4gICAgICogQHJldHVybnMge2FueX0gYSBuZXcgc3RhdGUsIG9yIHRoZSBpbml0aWFsIHN0YXRlIGlmIG5vdGhpbmcgd2FzIG1vZGlmaWVkXG4gICAgICovXG4gICAgdGhpcy5wcm9kdWNlID0gKGJhc2UsIHJlY2lwZSwgcGF0Y2hMaXN0ZW5lcikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHJlY2lwZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRCYXNlID0gcmVjaXBlO1xuICAgICAgICByZWNpcGUgPSBiYXNlO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWRQcm9kdWNlKGJhc2UyID0gZGVmYXVsdEJhc2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5wcm9kdWNlKGJhc2UyLCAoZHJhZnQpID0+IHJlY2lwZS5jYWxsKHRoaXMsIGRyYWZ0LCAuLi5hcmdzKSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlY2lwZSAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBkaWUoNik7XG4gICAgICBpZiAocGF0Y2hMaXN0ZW5lciAhPT0gdm9pZCAwICYmIHR5cGVvZiBwYXRjaExpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGRpZSg3KTtcbiAgICAgIGxldCByZXN1bHQ7XG4gICAgICBpZiAoaXNEcmFmdGFibGUoYmFzZSkpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBlbnRlclNjb3BlKHRoaXMpO1xuICAgICAgICBjb25zdCBwcm94eSA9IGNyZWF0ZVByb3h5KGJhc2UsIHZvaWQgMCk7XG4gICAgICAgIGxldCBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVjaXBlKHByb3h5KTtcbiAgICAgICAgICBoYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChoYXNFcnJvcilcbiAgICAgICAgICAgIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHJlc3VsdCwgc2NvcGUpO1xuICAgICAgfSBlbHNlIGlmICghYmFzZSB8fCB0eXBlb2YgYmFzZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXN1bHQgPSByZWNpcGUoYmFzZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMClcbiAgICAgICAgICByZXN1bHQgPSBiYXNlO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBOT1RISU5HKVxuICAgICAgICAgIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0ZyZWV6ZV8pXG4gICAgICAgICAgZnJlZXplKHJlc3VsdCwgdHJ1ZSk7XG4gICAgICAgIGlmIChwYXRjaExpc3RlbmVyKSB7XG4gICAgICAgICAgY29uc3QgcCA9IFtdO1xuICAgICAgICAgIGNvbnN0IGlwID0gW107XG4gICAgICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oYmFzZSwgcmVzdWx0LCBwLCBpcCk7XG4gICAgICAgICAgcGF0Y2hMaXN0ZW5lcihwLCBpcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gZWxzZVxuICAgICAgICBkaWUoMSwgYmFzZSk7XG4gICAgfTtcbiAgICB0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyA9IChiYXNlLCByZWNpcGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiAoc3RhdGUsIC4uLmFyZ3MpID0+IHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzKHN0YXRlLCAoZHJhZnQpID0+IGJhc2UoZHJhZnQsIC4uLmFyZ3MpKTtcbiAgICAgIH1cbiAgICAgIGxldCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvZHVjZShiYXNlLCByZWNpcGUsIChwLCBpcCkgPT4ge1xuICAgICAgICBwYXRjaGVzID0gcDtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMgPSBpcDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtyZXN1bHQsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzXTtcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgY29uZmlnPy5hdXRvRnJlZXplID09PSBcImJvb2xlYW5cIilcbiAgICAgIHRoaXMuc2V0QXV0b0ZyZWV6ZShjb25maWcuYXV0b0ZyZWV6ZSk7XG4gICAgaWYgKHR5cGVvZiBjb25maWc/LnVzZVN0cmljdFNoYWxsb3dDb3B5ID09PSBcImJvb2xlYW5cIilcbiAgICAgIHRoaXMuc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkoY29uZmlnLnVzZVN0cmljdFNoYWxsb3dDb3B5KTtcbiAgfVxuICBjcmVhdGVEcmFmdChiYXNlKSB7XG4gICAgaWYgKCFpc0RyYWZ0YWJsZShiYXNlKSlcbiAgICAgIGRpZSg4KTtcbiAgICBpZiAoaXNEcmFmdChiYXNlKSlcbiAgICAgIGJhc2UgPSBjdXJyZW50KGJhc2UpO1xuICAgIGNvbnN0IHNjb3BlID0gZW50ZXJTY29wZSh0aGlzKTtcbiAgICBjb25zdCBwcm94eSA9IGNyZWF0ZVByb3h5KGJhc2UsIHZvaWQgMCk7XG4gICAgcHJveHlbRFJBRlRfU1RBVEVdLmlzTWFudWFsXyA9IHRydWU7XG4gICAgbGVhdmVTY29wZShzY29wZSk7XG4gICAgcmV0dXJuIHByb3h5O1xuICB9XG4gIGZpbmlzaERyYWZ0KGRyYWZ0LCBwYXRjaExpc3RlbmVyKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBkcmFmdCAmJiBkcmFmdFtEUkFGVF9TVEFURV07XG4gICAgaWYgKCFzdGF0ZSB8fCAhc3RhdGUuaXNNYW51YWxfKVxuICAgICAgZGllKDkpO1xuICAgIGNvbnN0IHsgc2NvcGVfOiBzY29wZSB9ID0gc3RhdGU7XG4gICAgdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpO1xuICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHZvaWQgMCwgc2NvcGUpO1xuICB9XG4gIC8qKlxuICAgKiBQYXNzIHRydWUgdG8gYXV0b21hdGljYWxseSBmcmVlemUgYWxsIGNvcGllcyBjcmVhdGVkIGJ5IEltbWVyLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBhdXRvLWZyZWV6aW5nIGlzIGVuYWJsZWQuXG4gICAqL1xuICBzZXRBdXRvRnJlZXplKHZhbHVlKSB7XG4gICAgdGhpcy5hdXRvRnJlZXplXyA9IHZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBQYXNzIHRydWUgdG8gZW5hYmxlIHN0cmljdCBzaGFsbG93IGNvcHkuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGltbWVyIGRvZXMgbm90IGNvcHkgdGhlIG9iamVjdCBkZXNjcmlwdG9ycyBzdWNoIGFzIGdldHRlciwgc2V0dGVyIGFuZCBub24tZW51bXJhYmxlIHByb3BlcnRpZXMuXG4gICAqL1xuICBzZXRVc2VTdHJpY3RTaGFsbG93Q29weSh2YWx1ZSkge1xuICAgIHRoaXMudXNlU3RyaWN0U2hhbGxvd0NvcHlfID0gdmFsdWU7XG4gIH1cbiAgYXBwbHlQYXRjaGVzKGJhc2UsIHBhdGNoZXMpIHtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSBwYXRjaGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBwYXRjaCA9IHBhdGNoZXNbaV07XG4gICAgICBpZiAocGF0Y2gucGF0aC5sZW5ndGggPT09IDAgJiYgcGF0Y2gub3AgPT09IFwicmVwbGFjZVwiKSB7XG4gICAgICAgIGJhc2UgPSBwYXRjaC52YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIHBhdGNoZXMgPSBwYXRjaGVzLnNsaWNlKGkgKyAxKTtcbiAgICB9XG4gICAgY29uc3QgYXBwbHlQYXRjaGVzSW1wbCA9IGdldFBsdWdpbihcIlBhdGNoZXNcIikuYXBwbHlQYXRjaGVzXztcbiAgICBpZiAoaXNEcmFmdChiYXNlKSkge1xuICAgICAgcmV0dXJuIGFwcGx5UGF0Y2hlc0ltcGwoYmFzZSwgcGF0Y2hlcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb2R1Y2UoXG4gICAgICBiYXNlLFxuICAgICAgKGRyYWZ0KSA9PiBhcHBseVBhdGNoZXNJbXBsKGRyYWZ0LCBwYXRjaGVzKVxuICAgICk7XG4gIH1cbn07XG5mdW5jdGlvbiBjcmVhdGVQcm94eSh2YWx1ZSwgcGFyZW50KSB7XG4gIGNvbnN0IGRyYWZ0ID0gaXNNYXAodmFsdWUpID8gZ2V0UGx1Z2luKFwiTWFwU2V0XCIpLnByb3h5TWFwXyh2YWx1ZSwgcGFyZW50KSA6IGlzU2V0KHZhbHVlKSA/IGdldFBsdWdpbihcIk1hcFNldFwiKS5wcm94eVNldF8odmFsdWUsIHBhcmVudCkgOiBjcmVhdGVQcm94eVByb3h5KHZhbHVlLCBwYXJlbnQpO1xuICBjb25zdCBzY29wZSA9IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKTtcbiAgc2NvcGUuZHJhZnRzXy5wdXNoKGRyYWZ0KTtcbiAgcmV0dXJuIGRyYWZ0O1xufVxuXG4vLyBzcmMvY29yZS9jdXJyZW50LnRzXG5mdW5jdGlvbiBjdXJyZW50KHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdCh2YWx1ZSkpXG4gICAgZGllKDEwLCB2YWx1ZSk7XG4gIHJldHVybiBjdXJyZW50SW1wbCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBjdXJyZW50SW1wbCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnRhYmxlKHZhbHVlKSB8fCBpc0Zyb3plbih2YWx1ZSkpXG4gICAgcmV0dXJuIHZhbHVlO1xuICBjb25zdCBzdGF0ZSA9IHZhbHVlW0RSQUZUX1NUQVRFXTtcbiAgbGV0IGNvcHk7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICghc3RhdGUubW9kaWZpZWRfKVxuICAgICAgcmV0dXJuIHN0YXRlLmJhc2VfO1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSB0cnVlO1xuICAgIGNvcHkgPSBzaGFsbG93Q29weSh2YWx1ZSwgc3RhdGUuc2NvcGVfLmltbWVyXy51c2VTdHJpY3RTaGFsbG93Q29weV8pO1xuICB9IGVsc2Uge1xuICAgIGNvcHkgPSBzaGFsbG93Q29weSh2YWx1ZSwgdHJ1ZSk7XG4gIH1cbiAgZWFjaChjb3B5LCAoa2V5LCBjaGlsZFZhbHVlKSA9PiB7XG4gICAgc2V0KGNvcHksIGtleSwgY3VycmVudEltcGwoY2hpbGRWYWx1ZSkpO1xuICB9KTtcbiAgaWYgKHN0YXRlKSB7XG4gICAgc3RhdGUuZmluYWxpemVkXyA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBjb3B5O1xufVxuXG4vLyBzcmMvcGx1Z2lucy9wYXRjaGVzLnRzXG5mdW5jdGlvbiBlbmFibGVQYXRjaGVzKCkge1xuICBjb25zdCBlcnJvck9mZnNldCA9IDE2O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZXJyb3JzLnB1c2goXG4gICAgICAnU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsXG4gICAgICBmdW5jdGlvbihvcCkge1xuICAgICAgICByZXR1cm4gXCJVbnN1cHBvcnRlZCBwYXRjaCBvcGVyYXRpb246IFwiICsgb3A7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIiArIHBhdGg7XG4gICAgICB9LFxuICAgICAgXCJQYXRjaGluZyByZXNlcnZlZCBhdHRyaWJ1dGVzIGxpa2UgX19wcm90b19fLCBwcm90b3R5cGUgYW5kIGNvbnN0cnVjdG9yIGlzIG5vdCBhbGxvd2VkXCJcbiAgICApO1xuICB9XG4gIGNvbnN0IFJFUExBQ0UgPSBcInJlcGxhY2VcIjtcbiAgY29uc3QgQUREID0gXCJhZGRcIjtcbiAgY29uc3QgUkVNT1ZFID0gXCJyZW1vdmVcIjtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYXRjaGVzXyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgc3dpdGNoIChzdGF0ZS50eXBlXykge1xuICAgICAgY2FzZSAwIC8qIE9iamVjdCAqLzpcbiAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgICAgcGF0Y2hlcyxcbiAgICAgICAgICBpbnZlcnNlUGF0Y2hlc1xuICAgICAgICApO1xuICAgICAgY2FzZSAxIC8qIEFycmF5ICovOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcyk7XG4gICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVTZXRQYXRjaGVzKFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGJhc2VQYXRoLFxuICAgICAgICAgIHBhdGNoZXMsXG4gICAgICAgICAgaW52ZXJzZVBhdGNoZXNcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIGxldCB7IGJhc2VfLCBhc3NpZ25lZF8gfSA9IHN0YXRlO1xuICAgIGxldCBjb3B5XyA9IHN0YXRlLmNvcHlfO1xuICAgIGlmIChjb3B5Xy5sZW5ndGggPCBiYXNlXy5sZW5ndGgpIHtcbiAgICAgIDtcbiAgICAgIFtiYXNlXywgY29weV9dID0gW2NvcHlfLCBiYXNlX107XG4gICAgICBbcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXNdID0gW2ludmVyc2VQYXRjaGVzLCBwYXRjaGVzXTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXNlXy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFzc2lnbmVkX1tpXSAmJiBjb3B5X1tpXSAhPT0gYmFzZV9baV0pIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgLy8gTmVlZCB0byBtYXliZSBjbG9uZSBpdCwgYXMgaXQgY2FuIGluIGZhY3QgYmUgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgICAgLy8gZHVlIHRvIHRoZSBiYXNlL2NvcHkgaW52ZXJzaW9uIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uXG4gICAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGNvcHlfW2ldKVxuICAgICAgICB9KTtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoYmFzZV9baV0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gYmFzZV8ubGVuZ3RoOyBpIDwgY29weV8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgIG9wOiBBREQsXG4gICAgICAgIHBhdGgsXG4gICAgICAgIC8vIE5lZWQgdG8gbWF5YmUgY2xvbmUgaXQsIGFzIGl0IGNhbiBpbiBmYWN0IGJlIHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAvLyBkdWUgdG8gdGhlIGJhc2UvY29weSBpbnZlcnNpb24gYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGNvcHlfW2ldKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBjb3B5Xy5sZW5ndGggLSAxOyBiYXNlXy5sZW5ndGggPD0gaTsgLS1pKSB7XG4gICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgb3A6IFJFTU9WRSxcbiAgICAgICAgcGF0aFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGF0Y2hlc0Zyb21Bc3NpZ25lZChzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgY29uc3QgeyBiYXNlXywgY29weV8gfSA9IHN0YXRlO1xuICAgIGVhY2goc3RhdGUuYXNzaWduZWRfLCAoa2V5LCBhc3NpZ25lZFZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnVmFsdWUgPSBnZXQoYmFzZV8sIGtleSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldChjb3B5Xywga2V5KTtcbiAgICAgIGNvbnN0IG9wID0gIWFzc2lnbmVkVmFsdWUgPyBSRU1PVkUgOiBoYXMoYmFzZV8sIGtleSkgPyBSRVBMQUNFIDogQUREO1xuICAgICAgaWYgKG9yaWdWYWx1ZSA9PT0gdmFsdWUgJiYgb3AgPT09IFJFUExBQ0UpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoa2V5KTtcbiAgICAgIHBhdGNoZXMucHVzaChvcCA9PT0gUkVNT1ZFID8geyBvcCwgcGF0aCB9IDogeyBvcCwgcGF0aCwgdmFsdWUgfSk7XG4gICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKFxuICAgICAgICBvcCA9PT0gQUREID8geyBvcDogUkVNT1ZFLCBwYXRoIH0gOiBvcCA9PT0gUkVNT1ZFID8geyBvcDogQURELCBwYXRoLCB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob3JpZ1ZhbHVlKSB9IDogeyBvcDogUkVQTEFDRSwgcGF0aCwgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9yaWdWYWx1ZSkgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZVNldFBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIGxldCB7IGJhc2VfLCBjb3B5XyB9ID0gc3RhdGU7XG4gICAgbGV0IGkgPSAwO1xuICAgIGJhc2VfLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoIWNvcHlfLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMudW5zaGlmdCh7XG4gICAgICAgICAgb3A6IEFERCxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuICAgIGkgPSAwO1xuICAgIGNvcHlfLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoIWJhc2VfLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBBREQsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMudW5zaGlmdCh7XG4gICAgICAgICAgb3A6IFJFTU9WRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhiYXNlVmFsdWUsIHJlcGxhY2VtZW50LCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICBvcDogUkVQTEFDRSxcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgdmFsdWU6IHJlcGxhY2VtZW50ID09PSBOT1RISU5HID8gdm9pZCAwIDogcmVwbGFjZW1lbnRcbiAgICB9KTtcbiAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgcGF0aDogW10sXG4gICAgICB2YWx1ZTogYmFzZVZhbHVlXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYXBwbHlQYXRjaGVzXyhkcmFmdCwgcGF0Y2hlcykge1xuICAgIHBhdGNoZXMuZm9yRWFjaCgocGF0Y2gpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aCwgb3AgfSA9IHBhdGNoO1xuICAgICAgbGV0IGJhc2UgPSBkcmFmdDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGFyZW50VHlwZSA9IGdldEFyY2h0eXBlKGJhc2UpO1xuICAgICAgICBsZXQgcCA9IHBhdGhbaV07XG4gICAgICAgIGlmICh0eXBlb2YgcCAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHAgPSBcIlwiICsgcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHBhcmVudFR5cGUgPT09IDAgLyogT2JqZWN0ICovIHx8IHBhcmVudFR5cGUgPT09IDEgLyogQXJyYXkgKi8pICYmIChwID09PSBcIl9fcHJvdG9fX1wiIHx8IHAgPT09IFwiY29uc3RydWN0b3JcIikpXG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMyk7XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHAgPT09IFwicHJvdG90eXBlXCIpXG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMyk7XG4gICAgICAgIGJhc2UgPSBnZXQoYmFzZSwgcCk7XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAyLCBwYXRoLmpvaW4oXCIvXCIpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHR5cGUgPSBnZXRBcmNodHlwZShiYXNlKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGVlcENsb25lUGF0Y2hWYWx1ZShwYXRjaC52YWx1ZSk7XG4gICAgICBjb25zdCBrZXkgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgICBzd2l0Y2ggKG9wKSB7XG4gICAgICAgIGNhc2UgUkVQTEFDRTpcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgICAgICAgIGRpZShlcnJvck9mZnNldCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIEFERDpcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMSAvKiBBcnJheSAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gXCItXCIgPyBiYXNlLnB1c2godmFsdWUpIDogYmFzZS5zcGxpY2Uoa2V5LCAwLCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5hZGQodmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Vba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBSRU1PVkU6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDEgLyogQXJyYXkgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLnNwbGljZShrZXksIDEpO1xuICAgICAgICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5kZWxldGUocGF0Y2gudmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZSBiYXNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDEsIG9wKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZHJhZnQ7XG4gIH1cbiAgZnVuY3Rpb24gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmopIHtcbiAgICBpZiAoIWlzRHJhZnRhYmxlKG9iaikpXG4gICAgICByZXR1cm4gb2JqO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpXG4gICAgICByZXR1cm4gb2JqLm1hcChkZWVwQ2xvbmVQYXRjaFZhbHVlKTtcbiAgICBpZiAoaXNNYXAob2JqKSlcbiAgICAgIHJldHVybiBuZXcgTWFwKFxuICAgICAgICBBcnJheS5mcm9tKG9iai5lbnRyaWVzKCkpLm1hcCgoW2ssIHZdKSA9PiBbaywgZGVlcENsb25lUGF0Y2hWYWx1ZSh2KV0pXG4gICAgICApO1xuICAgIGlmIChpc1NldChvYmopKVxuICAgICAgcmV0dXJuIG5ldyBTZXQoQXJyYXkuZnJvbShvYmopLm1hcChkZWVwQ2xvbmVQYXRjaFZhbHVlKSk7XG4gICAgY29uc3QgY2xvbmVkID0gT2JqZWN0LmNyZWF0ZShnZXRQcm90b3R5cGVPZihvYmopKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopXG4gICAgICBjbG9uZWRba2V5XSA9IGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqW2tleV0pO1xuICAgIGlmIChoYXMob2JqLCBEUkFGVEFCTEUpKVxuICAgICAgY2xvbmVkW0RSQUZUQUJMRV0gPSBvYmpbRFJBRlRBQkxFXTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG4gIGZ1bmN0aW9uIGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9iaikge1xuICAgIGlmIChpc0RyYWZ0KG9iaikpIHtcbiAgICAgIHJldHVybiBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9iaik7XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gb2JqO1xuICB9XG4gIGxvYWRQbHVnaW4oXCJQYXRjaGVzXCIsIHtcbiAgICBhcHBseVBhdGNoZXNfLFxuICAgIGdlbmVyYXRlUGF0Y2hlc18sXG4gICAgZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfXG4gIH0pO1xufVxuXG4vLyBzcmMvcGx1Z2lucy9tYXBzZXQudHNcbmZ1bmN0aW9uIGVuYWJsZU1hcFNldCgpIHtcbiAgY2xhc3MgRHJhZnRNYXAgZXh0ZW5kcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpc1tEUkFGVF9TVEFURV0gPSB7XG4gICAgICAgIHR5cGVfOiAyIC8qIE1hcCAqLyxcbiAgICAgICAgcGFyZW50XzogcGFyZW50LFxuICAgICAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAgICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAgICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgICAgIGNvcHlfOiB2b2lkIDAsXG4gICAgICAgIGFzc2lnbmVkXzogdm9pZCAwLFxuICAgICAgICBiYXNlXzogdGFyZ2V0LFxuICAgICAgICBkcmFmdF86IHRoaXMsXG4gICAgICAgIGlzTWFudWFsXzogZmFsc2UsXG4gICAgICAgIHJldm9rZWRfOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5zaXplO1xuICAgIH1cbiAgICBoYXMoa2V5KSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5oYXMoa2V5KTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKCFsYXRlc3Qoc3RhdGUpLmhhcyhrZXkpIHx8IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSkgIT09IHZhbHVlKSB7XG4gICAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgdHJ1ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlbGV0ZShrZXkpIHtcbiAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgIGlmIChzdGF0ZS5iYXNlXy5oYXMoa2V5KSkge1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgc3RhdGUuY29weV8uZGVsZXRlKGtleSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmIChsYXRlc3Qoc3RhdGUpLnNpemUpIHtcbiAgICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICAgIGVhY2goc3RhdGUuYmFzZV8sIChrZXkpID0+IHtcbiAgICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3RhdGUuY29weV8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yRWFjaChjYiwgdGhpc0FyZykge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGxhdGVzdChzdGF0ZSkuZm9yRWFjaCgoX3ZhbHVlLCBrZXksIF9tYXApID0+IHtcbiAgICAgICAgY2IuY2FsbCh0aGlzQXJnLCB0aGlzLmdldChrZXkpLCBrZXksIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgY29uc3QgdmFsdWUgPSBsYXRlc3Qoc3RhdGUpLmdldChrZXkpO1xuICAgICAgaWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgIT09IHN0YXRlLmJhc2VfLmdldChrZXkpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRyYWZ0ID0gY3JlYXRlUHJveHkodmFsdWUsIHN0YXRlKTtcbiAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgIHN0YXRlLmNvcHlfLnNldChrZXksIGRyYWZ0KTtcbiAgICAgIHJldHVybiBkcmFmdDtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLmtleXMoKTtcbiAgICB9XG4gICAgdmFsdWVzKCkge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLmtleXMoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB0aGlzLnZhbHVlcygpLFxuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoci5kb25lKVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldChyLnZhbHVlKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGVudHJpZXMoKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXMua2V5cygpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHRoaXMuZW50cmllcygpLFxuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoci5kb25lKVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldChyLnZhbHVlKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogW3IudmFsdWUsIHZhbHVlXVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIFsoRFJBRlRfU1RBVEUsIFN5bWJvbC5pdGVyYXRvcildKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwcm94eU1hcF8odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWZ0TWFwKHRhcmdldCwgcGFyZW50KTtcbiAgfVxuICBmdW5jdGlvbiBwcmVwYXJlTWFwQ29weShzdGF0ZSkge1xuICAgIGlmICghc3RhdGUuY29weV8pIHtcbiAgICAgIHN0YXRlLmFzc2lnbmVkXyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICBzdGF0ZS5jb3B5XyA9IG5ldyBNYXAoc3RhdGUuYmFzZV8pO1xuICAgIH1cbiAgfVxuICBjbGFzcyBEcmFmdFNldCBleHRlbmRzIFNldCB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzW0RSQUZUX1NUQVRFXSA9IHtcbiAgICAgICAgdHlwZV86IDMgLyogU2V0ICovLFxuICAgICAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgICAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgICAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAgICAgY29weV86IHZvaWQgMCxcbiAgICAgICAgYmFzZV86IHRhcmdldCxcbiAgICAgICAgZHJhZnRfOiB0aGlzLFxuICAgICAgICBkcmFmdHNfOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuICAgICAgICByZXZva2VkXzogZmFsc2UsXG4gICAgICAgIGlzTWFudWFsXzogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZTtcbiAgICB9XG4gICAgaGFzKHZhbHVlKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmICghc3RhdGUuY29weV8pIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmJhc2VfLmhhcyh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUuY29weV8uaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpICYmIHN0YXRlLmNvcHlfLmhhcyhzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYWRkKHZhbHVlKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlbGV0ZSh2YWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8uZGVsZXRlKHZhbHVlKSB8fCAoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpID8gc3RhdGUuY29weV8uZGVsZXRlKHN0YXRlLmRyYWZ0c18uZ2V0KHZhbHVlKSkgOiAoXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGZhbHNlXG4gICAgICApKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmIChsYXRlc3Qoc3RhdGUpLnNpemUpIHtcbiAgICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlcygpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLnZhbHVlcygpO1xuICAgIH1cbiAgICBlbnRyaWVzKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8uZW50cmllcygpO1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfVxuICAgIFsoRFJBRlRfU1RBVEUsIFN5bWJvbC5pdGVyYXRvcildKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfVxuICAgIGZvckVhY2goY2IsIHRoaXNBcmcpIHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpcy52YWx1ZXMoKTtcbiAgICAgIGxldCByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIGNiLmNhbGwodGhpc0FyZywgcmVzdWx0LnZhbHVlLCByZXN1bHQudmFsdWUsIHRoaXMpO1xuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHByb3h5U2V0Xyh0YXJnZXQsIHBhcmVudCkge1xuICAgIHJldHVybiBuZXcgRHJhZnRTZXQodGFyZ2V0LCBwYXJlbnQpO1xuICB9XG4gIGZ1bmN0aW9uIHByZXBhcmVTZXRDb3B5KHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgc3RhdGUuY29weV8gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgc3RhdGUuYmFzZV8uZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKGlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgICAgIGNvbnN0IGRyYWZ0ID0gY3JlYXRlUHJveHkodmFsdWUsIHN0YXRlKTtcbiAgICAgICAgICBzdGF0ZS5kcmFmdHNfLnNldCh2YWx1ZSwgZHJhZnQpO1xuICAgICAgICAgIHN0YXRlLmNvcHlfLmFkZChkcmFmdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUuY29weV8uYWRkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5yZXZva2VkXylcbiAgICAgIGRpZSgzLCBKU09OLnN0cmluZ2lmeShsYXRlc3Qoc3RhdGUpKSk7XG4gIH1cbiAgbG9hZFBsdWdpbihcIk1hcFNldFwiLCB7IHByb3h5TWFwXywgcHJveHlTZXRfIH0pO1xufVxuXG4vLyBzcmMvaW1tZXIudHNcbnZhciBpbW1lciA9IG5ldyBJbW1lcjIoKTtcbnZhciBwcm9kdWNlID0gaW1tZXIucHJvZHVjZTtcbnZhciBwcm9kdWNlV2l0aFBhdGNoZXMgPSBpbW1lci5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZChcbiAgaW1tZXJcbik7XG52YXIgc2V0QXV0b0ZyZWV6ZSA9IGltbWVyLnNldEF1dG9GcmVlemUuYmluZChpbW1lcik7XG52YXIgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkgPSBpbW1lci5zZXRVc2VTdHJpY3RTaGFsbG93Q29weS5iaW5kKGltbWVyKTtcbnZhciBhcHBseVBhdGNoZXMgPSBpbW1lci5hcHBseVBhdGNoZXMuYmluZChpbW1lcik7XG52YXIgY3JlYXRlRHJhZnQgPSBpbW1lci5jcmVhdGVEcmFmdC5iaW5kKGltbWVyKTtcbnZhciBmaW5pc2hEcmFmdCA9IGltbWVyLmZpbmlzaERyYWZ0LmJpbmQoaW1tZXIpO1xuZnVuY3Rpb24gY2FzdERyYWZ0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNhc3RJbW11dGFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gIEltbWVyLFxuICBhcHBseVBhdGNoZXMsXG4gIGNhc3REcmFmdCxcbiAgY2FzdEltbXV0YWJsZSxcbiAgY3JlYXRlRHJhZnQsXG4gIGN1cnJlbnQsXG4gIGVuYWJsZU1hcFNldCxcbiAgZW5hYmxlUGF0Y2hlcyxcbiAgZmluaXNoRHJhZnQsXG4gIGZyZWV6ZSxcbiAgaW1tZXJhYmxlLFxuICBpc0RyYWZ0LFxuICBpc0RyYWZ0YWJsZSxcbiAgbm90aGluZyxcbiAgb3JpZ2luYWwsXG4gIHByb2R1Y2UsXG4gIHByb2R1Y2VXaXRoUGF0Y2hlcyxcbiAgc2V0QXV0b0ZyZWV6ZSxcbiAgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHlcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1tZXIuY2pzLmRldmVsb3BtZW50LmpzLm1hcCIsIlxuJ3VzZSBzdHJpY3QnXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbW1lci5janMucHJvZHVjdGlvbi5qcycpXG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW1tZXIuY2pzLmRldmVsb3BtZW50LmpzJylcbn0iLCJ2YXIgZT1yZXF1aXJlKFwiaW1tZXJcIikscj1yZXF1aXJlKFwicmVhY3RcIik7ZXhwb3J0cy51c2VJbW1lcj1mdW5jdGlvbih1KXt2YXIgbj1yLnVzZVN0YXRlKGZ1bmN0aW9uKCl7cmV0dXJuIGUuZnJlZXplKFwiZnVuY3Rpb25cIj09dHlwZW9mIHU/dSgpOnUsITApfSksdD1uWzFdO3JldHVybltuWzBdLHIudXNlQ2FsbGJhY2soZnVuY3Rpb24ocil7dChcImZ1bmN0aW9uXCI9PXR5cGVvZiByP2UucHJvZHVjZShyKTplLmZyZWV6ZShyKSl9LFtdKV19LGV4cG9ydHMudXNlSW1tZXJSZWR1Y2VyPWZ1bmN0aW9uKHUsbix0KXt2YXIgbz1yLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gZS5wcm9kdWNlKHUpfSxbdV0pO3JldHVybiByLnVzZVJlZHVjZXIobyxuLHQpfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbW1lci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy52ZXJzaW9uID0gZXhwb3J0cy52YWxpZGF0ZSA9IGV4cG9ydHMudjcgPSBleHBvcnRzLnY2VG9WMSA9IGV4cG9ydHMudjYgPSBleHBvcnRzLnY1ID0gZXhwb3J0cy52NCA9IGV4cG9ydHMudjMgPSBleHBvcnRzLnYxVG9WNiA9IGV4cG9ydHMudjEgPSBleHBvcnRzLnN0cmluZ2lmeSA9IGV4cG9ydHMucGFyc2UgPSBleHBvcnRzLk5JTCA9IGV4cG9ydHMuTUFYID0gdm9pZCAwO1xudmFyIG1heF9qc18xID0gcmVxdWlyZShcIi4vbWF4LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTUFYXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXhfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIG5pbF9qc18xID0gcmVxdWlyZShcIi4vbmlsLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTklMXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuaWxfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwYXJzZV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHJpbmdpZnlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0cmluZ2lmeV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjFfanNfMSA9IHJlcXVpcmUoXCIuL3YxLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYxX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2MVRvVjZfanNfMSA9IHJlcXVpcmUoXCIuL3YxVG9WNi5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxVG9WNlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjFUb1Y2X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2M19qc18xID0gcmVxdWlyZShcIi4vdjMuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2M1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjNfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY0X2pzXzEgPSByZXF1aXJlKFwiLi92NC5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2NF9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjVfanNfMSA9IHJlcXVpcmUoXCIuL3Y1LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY1X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2Nl9qc18xID0gcmVxdWlyZShcIi4vdjYuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjZfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY2VG9WMV9qc18xID0gcmVxdWlyZShcIi4vdjZUb1YxLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjZUb1YxXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2NlRvVjFfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY3X2pzXzEgPSByZXF1aXJlKFwiLi92Ny5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY3XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2N19qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFsaWRhdGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbGlkYXRlX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2ZXJzaW9uX2pzXzEgPSByZXF1aXJlKFwiLi92ZXJzaW9uLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmVyc2lvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmVyc2lvbl9qc18xLmRlZmF1bHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9ICdmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgICBjb25zdCB3b3JkcyA9IHVpbnQ4VG9VaW50MzIoYnl0ZXMpO1xuICAgIGNvbnN0IG1kNUJ5dGVzID0gd29yZHNUb01kNSh3b3JkcywgYnl0ZXMubGVuZ3RoICogOCk7XG4gICAgcmV0dXJuIHVpbnQzMlRvVWludDgobWQ1Qnl0ZXMpO1xufVxuZnVuY3Rpb24gdWludDMyVG9VaW50OChpbnB1dCkge1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoaW5wdXQubGVuZ3RoICogNCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGggKiA0OyBpKyspIHtcbiAgICAgICAgYnl0ZXNbaV0gPSAoaW5wdXRbaSA+PiAyXSA+Pj4gKChpICUgNCkgKiA4KSkgJiAweGZmO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXM7XG59XG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gICAgcmV0dXJuICgoKGlucHV0TGVuZ3RoOCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNCArIDE7XG59XG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAgIGNvbnN0IHhwYWQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbikpLmZpbGwoMCk7XG4gICAgeHBhZC5zZXQoeCk7XG4gICAgeHBhZFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgICB4cGFkW3hwYWQubGVuZ3RoIC0gMV0gPSBsZW47XG4gICAgeCA9IHhwYWQ7XG4gICAgbGV0IGEgPSAxNzMyNTg0MTkzO1xuICAgIGxldCBiID0gLTI3MTczMzg3OTtcbiAgICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICAgIGxldCBkID0gMjcxNzMzODc4O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICAgICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgICAgIGNvbnN0IG9sZGIgPSBiO1xuICAgICAgICBjb25zdCBvbGRjID0gYztcbiAgICAgICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICAgICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgICAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICAgICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gICAgfVxuICAgIHJldHVybiBVaW50MzJBcnJheS5vZihhLCBiLCBjLCBkKTtcbn1cbmZ1bmN0aW9uIHVpbnQ4VG9VaW50MzIoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkoKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChpbnB1dC5sZW5ndGggKiA4KSkuZmlsbCgwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG91dHB1dFtpID4+IDJdIHw9IChpbnB1dFtpXSAmIDB4ZmYpIDw8ICgoaSAlIDQpICogOCk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgICBjb25zdCBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gICAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gICAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4ZmZmZik7XG59XG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gICAgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpO1xufVxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKChiICYgYykgfCAofmIgJiBkKSwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbigoYiAmIGQpIHwgKGMgJiB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtZDU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnRzLmRlZmF1bHQgPSB7IHJhbmRvbVVVSUQgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgICBpZiAoISgwLCB2YWxpZGF0ZV9qc18xLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gICAgfVxuICAgIGxldCB2O1xuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKCh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQsICh2ID4+PiAxNikgJiAweGZmLCAodiA+Pj4gOCkgJiAweGZmLCB2ICYgMHhmZiwgKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gOCwgdiAmIDB4ZmYsICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4LCB2ICYgMHhmZiwgKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDgsIHYgJiAweGZmLCAoKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwKSAmIDB4ZmYsICh2IC8gMHgxMDAwMDAwMDApICYgMHhmZiwgKHYgPj4+IDI0KSAmIDB4ZmYsICh2ID4+PiAxNikgJiAweGZmLCAodiA+Pj4gOCkgJiAweGZmLCB2ICYgMHhmZik7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBwYXJzZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJyB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHJuZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gICAgc3dpdGNoIChzKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAoeCAmIHkpIF4gKH54ICYgeik7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiAoeCAmIHkpIF4gKHggJiB6KSBeICh5ICYgeik7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gICAgfVxufVxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gICAgcmV0dXJuICh4IDw8IG4pIHwgKHggPj4+ICgzMiAtIG4pKTtcbn1cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICAgIGNvbnN0IEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG4gICAgY29uc3QgbmV3Qnl0ZXMgPSBuZXcgVWludDhBcnJheShieXRlcy5sZW5ndGggKyAxKTtcbiAgICBuZXdCeXRlcy5zZXQoYnl0ZXMpO1xuICAgIG5ld0J5dGVzW2J5dGVzLmxlbmd0aF0gPSAweDgwO1xuICAgIGJ5dGVzID0gbmV3Qnl0ZXM7XG4gICAgY29uc3QgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICAgIGNvbnN0IE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgICAgICAgYXJyW2pdID1cbiAgICAgICAgICAgICAgICAoYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0KSB8XG4gICAgICAgICAgICAgICAgICAgIChieXRlc1tpICogNjQgKyBqICogNCArIDFdIDw8IDE2KSB8XG4gICAgICAgICAgICAgICAgICAgIChieXRlc1tpICogNjQgKyBqICogNCArIDJdIDw8IDgpIHxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICAgICAgfVxuICAgICAgICBNW2ldID0gYXJyO1xuICAgIH1cbiAgICBNW04gLSAxXVsxNF0gPSAoKGJ5dGVzLmxlbmd0aCAtIDEpICogOCkgLyBNYXRoLnBvdygyLCAzMik7XG4gICAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICAgIE1bTiAtIDFdWzE1XSA9ICgoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4KSAmIDB4ZmZmZmZmZmY7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICAgICAgY29uc3QgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGEgPSBIWzBdO1xuICAgICAgICBsZXQgYiA9IEhbMV07XG4gICAgICAgIGxldCBjID0gSFsyXTtcbiAgICAgICAgbGV0IGQgPSBIWzNdO1xuICAgICAgICBsZXQgZSA9IEhbNF07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgICAgICAgIGNvbnN0IFQgPSAoUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbdF0pID4+PiAwO1xuICAgICAgICAgICAgZSA9IGQ7XG4gICAgICAgICAgICBkID0gYztcbiAgICAgICAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgICAgICAgIGIgPSBhO1xuICAgICAgICAgICAgYSA9IFQ7XG4gICAgICAgIH1cbiAgICAgICAgSFswXSA9IChIWzBdICsgYSkgPj4+IDA7XG4gICAgICAgIEhbMV0gPSAoSFsxXSArIGIpID4+PiAwO1xuICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSA+Pj4gMDtcbiAgICAgICAgSFszXSA9IChIWzNdICsgZCkgPj4+IDA7XG4gICAgICAgIEhbNF0gPSAoSFs0XSArIGUpID4+PiAwO1xuICAgIH1cbiAgICByZXR1cm4gVWludDhBcnJheS5vZihIWzBdID4+IDI0LCBIWzBdID4+IDE2LCBIWzBdID4+IDgsIEhbMF0sIEhbMV0gPj4gMjQsIEhbMV0gPj4gMTYsIEhbMV0gPj4gOCwgSFsxXSwgSFsyXSA+PiAyNCwgSFsyXSA+PiAxNiwgSFsyXSA+PiA4LCBIWzJdLCBIWzNdID4+IDI0LCBIWzNdID4+IDE2LCBIWzNdID4+IDgsIEhbM10sIEhbNF0gPj4gMjQsIEhbNF0gPj4gMTYsIEhbNF0gPj4gOCwgSFs0XSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBzaGExO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHZvaWQgMDtcbmNvbnN0IHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5mdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmV4cG9ydHMudW5zYWZlU3RyaW5naWZ5ID0gdW5zYWZlU3RyaW5naWZ5O1xuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghKDAsIHZhbGlkYXRlX2pzXzEuZGVmYXVsdCkodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBzdHJpbmdpZnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXBkYXRlVjFTdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IHJuZ19qc18xID0gcmVxdWlyZShcIi4vcm5nLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5jb25zdCBfc3RhdGUgPSB7fTtcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgbGV0IGJ5dGVzO1xuICAgIGNvbnN0IGlzVjYgPSBvcHRpb25zPy5fdjYgPz8gZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uc0tleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnNLZXlzLmxlbmd0aCA9PT0gMSAmJiBvcHRpb25zS2V5c1swXSA9PT0gJ192NicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgYnl0ZXMgPSB2MUJ5dGVzKG9wdGlvbnMucmFuZG9tID8/IG9wdGlvbnMucm5nPy4oKSA/PyAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKSwgb3B0aW9ucy5tc2Vjcywgb3B0aW9ucy5uc2Vjcywgb3B0aW9ucy5jbG9ja3NlcSwgb3B0aW9ucy5ub2RlLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBybmRzID0gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCk7XG4gICAgICAgIHVwZGF0ZVYxU3RhdGUoX3N0YXRlLCBub3csIHJuZHMpO1xuICAgICAgICBieXRlcyA9IHYxQnl0ZXMocm5kcywgX3N0YXRlLm1zZWNzLCBfc3RhdGUubnNlY3MsIGlzVjYgPyB1bmRlZmluZWQgOiBfc3RhdGUuY2xvY2tzZXEsIGlzVjYgPyB1bmRlZmluZWQgOiBfc3RhdGUubm9kZSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmID8/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVYxU3RhdGUoc3RhdGUsIG5vdywgcm5kcykge1xuICAgIHN0YXRlLm1zZWNzID8/PSAtSW5maW5pdHk7XG4gICAgc3RhdGUubnNlY3MgPz89IDA7XG4gICAgaWYgKG5vdyA9PT0gc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUubnNlY3MrKztcbiAgICAgICAgaWYgKHN0YXRlLm5zZWNzID49IDEwMDAwKSB7XG4gICAgICAgICAgICBzdGF0ZS5ub2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgc3RhdGUubnNlY3MgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vdyA+IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLm5zZWNzID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAobm93IDwgc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUubm9kZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKCFzdGF0ZS5ub2RlKSB7XG4gICAgICAgIHN0YXRlLm5vZGUgPSBybmRzLnNsaWNlKDEwLCAxNik7XG4gICAgICAgIHN0YXRlLm5vZGVbMF0gfD0gMHgwMTtcbiAgICAgICAgc3RhdGUuY2xvY2tzZXEgPSAoKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldKSAmIDB4M2ZmZjtcbiAgICB9XG4gICAgc3RhdGUubXNlY3MgPSBub3c7XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZXhwb3J0cy51cGRhdGVWMVN0YXRlID0gdXBkYXRlVjFTdGF0ZTtcbmZ1bmN0aW9uIHYxQnl0ZXMocm5kcywgbXNlY3MsIG5zZWNzLCBjbG9ja3NlcSwgbm9kZSwgYnVmLCBvZmZzZXQgPSAwKSB7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgaWYgKCFidWYpIHtcbiAgICAgICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMTYgPiBidWYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVVVJRCBieXRlIHJhbmdlICR7b2Zmc2V0fToke29mZnNldCArIDE1fSBpcyBvdXQgb2YgYnVmZmVyIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1zZWNzID8/PSBEYXRlLm5vdygpO1xuICAgIG5zZWNzID8/PSAwO1xuICAgIGNsb2Nrc2VxID8/PSAoKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldKSAmIDB4M2ZmZjtcbiAgICBub2RlID8/PSBybmRzLnNsaWNlKDEwLCAxNik7XG4gICAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG4gICAgY29uc3QgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bCA+Pj4gMjQpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRsID4+PiAxNikgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodGwgPj4+IDgpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gdGwgJiAweGZmO1xuICAgIGNvbnN0IHRtaCA9ICgobXNlY3MgLyAweDEwMDAwMDAwMCkgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bWggPj4+IDgpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gdG1oICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKCh0bWggPj4+IDI0KSAmIDB4ZikgfCAweDEwO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodG1oID4+PiAxNikgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoY2xvY2tzZXEgPj4+IDgpIHwgMHg4MDtcbiAgICBidWZbb2Zmc2V0KytdID0gY2xvY2tzZXEgJiAweGZmO1xuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQrK10gPSBub2RlW25dO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gdjFUb1Y2KHV1aWQpIHtcbiAgICBjb25zdCB2MUJ5dGVzID0gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkodXVpZCkgOiB1dWlkO1xuICAgIGNvbnN0IHY2Qnl0ZXMgPSBfdjFUb1Y2KHYxQnl0ZXMpO1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KSh2NkJ5dGVzKSA6IHY2Qnl0ZXM7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2MVRvVjY7XG5mdW5jdGlvbiBfdjFUb1Y2KHYxQnl0ZXMpIHtcbiAgICByZXR1cm4gVWludDhBcnJheS5vZigoKHYxQnl0ZXNbNl0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1s3XSA+PiA0KSAmIDB4MGYpLCAoKHYxQnl0ZXNbN10gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1s0XSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbNF0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1s1XSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbNV0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1swXSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbMF0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1sxXSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbMV0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1syXSAmIDB4ZjApID4+IDQpLCAweDYwIHwgKHYxQnl0ZXNbMl0gJiAweDBmKSwgdjFCeXRlc1szXSwgdjFCeXRlc1s4XSwgdjFCeXRlc1s5XSwgdjFCeXRlc1sxMF0sIHYxQnl0ZXNbMTFdLCB2MUJ5dGVzWzEyXSwgdjFCeXRlc1sxM10sIHYxQnl0ZXNbMTRdLCB2MUJ5dGVzWzE1XSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSB2b2lkIDA7XG5jb25zdCBtZDVfanNfMSA9IHJlcXVpcmUoXCIuL21kNS5qc1wiKTtcbmNvbnN0IHYzNV9qc18xID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xudmFyIHYzNV9qc18yID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRE5TXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5ETlM7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVUkxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLlVSTDsgfSB9KTtcbmZ1bmN0aW9uIHYzKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgcmV0dXJuICgwLCB2MzVfanNfMS5kZWZhdWx0KSgweDMwLCBtZDVfanNfMS5kZWZhdWx0LCB2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCk7XG59XG52My5ETlMgPSB2MzVfanNfMS5ETlM7XG52My5VUkwgPSB2MzVfanNfMS5VUkw7XG5leHBvcnRzLmRlZmF1bHQgPSB2MztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IGV4cG9ydHMuc3RyaW5nVG9CeXRlcyA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShzdHIubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgICAgICBieXRlc1tpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXM7XG59XG5leHBvcnRzLnN0cmluZ1RvQnl0ZXMgPSBzdHJpbmdUb0J5dGVzO1xuZXhwb3J0cy5ETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydHMuVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5mdW5jdGlvbiB2MzUodmVyc2lvbiwgaGFzaCwgdmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICBjb25zdCB2YWx1ZUJ5dGVzID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHN0cmluZ1RvQnl0ZXModmFsdWUpIDogdmFsdWU7XG4gICAgY29uc3QgbmFtZXNwYWNlQnl0ZXMgPSB0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJyA/ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKG5hbWVzcGFjZSkgOiBuYW1lc3BhY2U7XG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hbWVzcGFjZSA9ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuICAgIGlmIChuYW1lc3BhY2U/Lmxlbmd0aCAhPT0gMTYpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfVxuICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KDE2ICsgdmFsdWVCeXRlcy5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2VCeXRlcyk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlQnl0ZXMsIG5hbWVzcGFjZUJ5dGVzLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IChieXRlc1s2XSAmIDB4MGYpIHwgdmVyc2lvbjtcbiAgICBieXRlc1s4XSA9IChieXRlc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2MzU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG5hdGl2ZV9qc18xID0gcmVxdWlyZShcIi4vbmF0aXZlLmpzXCIpO1xuY29uc3Qgcm5nX2pzXzEgPSByZXF1aXJlKFwiLi9ybmcuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZV9qc18xLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVfanNfMS5kZWZhdWx0LnJhbmRvbVVVSUQoKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tID8/IG9wdGlvbnMucm5nPy4oKSA/PyAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKTtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDE2ID4gYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFVVSUQgYnl0ZSByYW5nZSAke29mZnNldH06JHtvZmZzZXQgKyAxNX0gaXMgb3V0IG9mIGJ1ZmZlciBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKHJuZHMpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSB2b2lkIDA7XG5jb25zdCBzaGExX2pzXzEgPSByZXF1aXJlKFwiLi9zaGExLmpzXCIpO1xuY29uc3QgdjM1X2pzXzEgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG52YXIgdjM1X2pzXzIgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJETlNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLkROUzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlVSTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuVVJMOyB9IH0pO1xuZnVuY3Rpb24gdjUodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gKDAsIHYzNV9qc18xLmRlZmF1bHQpKDB4NTAsIHNoYTFfanNfMS5kZWZhdWx0LCB2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCk7XG59XG52NS5ETlMgPSB2MzVfanNfMS5ETlM7XG52NS5VUkwgPSB2MzVfanNfMS5VUkw7XG5leHBvcnRzLmRlZmF1bHQgPSB2NTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5jb25zdCB2MV9qc18xID0gcmVxdWlyZShcIi4vdjEuanNcIik7XG5jb25zdCB2MVRvVjZfanNfMSA9IHJlcXVpcmUoXCIuL3YxVG9WNi5qc1wiKTtcbmZ1bmN0aW9uIHY2KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgb3B0aW9ucyA/Pz0ge307XG4gICAgb2Zmc2V0ID8/PSAwO1xuICAgIGxldCBieXRlcyA9ICgwLCB2MV9qc18xLmRlZmF1bHQpKHsgLi4ub3B0aW9ucywgX3Y2OiB0cnVlIH0sIG5ldyBVaW50OEFycmF5KDE2KSk7XG4gICAgYnl0ZXMgPSAoMCwgdjFUb1Y2X2pzXzEuZGVmYXVsdCkoYnl0ZXMpO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjY7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gdjZUb1YxKHV1aWQpIHtcbiAgICBjb25zdCB2NkJ5dGVzID0gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkodXVpZCkgOiB1dWlkO1xuICAgIGNvbnN0IHYxQnl0ZXMgPSBfdjZUb1YxKHY2Qnl0ZXMpO1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KSh2MUJ5dGVzKSA6IHYxQnl0ZXM7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NlRvVjE7XG5mdW5jdGlvbiBfdjZUb1YxKHY2Qnl0ZXMpIHtcbiAgICByZXR1cm4gVWludDhBcnJheS5vZigoKHY2Qnl0ZXNbM10gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1s0XSA+PiA0KSAmIDB4MGYpLCAoKHY2Qnl0ZXNbNF0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1s1XSAmIDB4ZjApID4+IDQpLCAoKHY2Qnl0ZXNbNV0gJiAweDBmKSA8PCA0KSB8ICh2NkJ5dGVzWzZdICYgMHgwZiksIHY2Qnl0ZXNbN10sICgodjZCeXRlc1sxXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzJdICYgMHhmMCkgPj4gNCksICgodjZCeXRlc1syXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzNdICYgMHhmMCkgPj4gNCksIDB4MTAgfCAoKHY2Qnl0ZXNbMF0gJiAweGYwKSA+PiA0KSwgKCh2NkJ5dGVzWzBdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbMV0gJiAweGYwKSA+PiA0KSwgdjZCeXRlc1s4XSwgdjZCeXRlc1s5XSwgdjZCeXRlc1sxMF0sIHY2Qnl0ZXNbMTFdLCB2NkJ5dGVzWzEyXSwgdjZCeXRlc1sxM10sIHY2Qnl0ZXNbMTRdLCB2NkJ5dGVzWzE1XSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXBkYXRlVjdTdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IHJuZ19qc18xID0gcmVxdWlyZShcIi4vcm5nLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5jb25zdCBfc3RhdGUgPSB7fTtcbmZ1bmN0aW9uIHY3KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgbGV0IGJ5dGVzO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGJ5dGVzID0gdjdCeXRlcyhvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCksIG9wdGlvbnMubXNlY3MsIG9wdGlvbnMuc2VxLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBybmRzID0gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCk7XG4gICAgICAgIHVwZGF0ZVY3U3RhdGUoX3N0YXRlLCBub3csIHJuZHMpO1xuICAgICAgICBieXRlcyA9IHY3Qnl0ZXMocm5kcywgX3N0YXRlLm1zZWNzLCBfc3RhdGUuc2VxLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIHJldHVybiBidWYgPz8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZnVuY3Rpb24gdXBkYXRlVjdTdGF0ZShzdGF0ZSwgbm93LCBybmRzKSB7XG4gICAgc3RhdGUubXNlY3MgPz89IC1JbmZpbml0eTtcbiAgICBzdGF0ZS5zZXEgPz89IDA7XG4gICAgaWYgKG5vdyA+IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLnNlcSA9IChybmRzWzZdIDw8IDIzKSB8IChybmRzWzddIDw8IDE2KSB8IChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XTtcbiAgICAgICAgc3RhdGUubXNlY3MgPSBub3c7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdGF0ZS5zZXEgPSAoc3RhdGUuc2VxICsgMSkgfCAwO1xuICAgICAgICBpZiAoc3RhdGUuc2VxID09PSAwKSB7XG4gICAgICAgICAgICBzdGF0ZS5tc2VjcysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydHMudXBkYXRlVjdTdGF0ZSA9IHVwZGF0ZVY3U3RhdGU7XG5mdW5jdGlvbiB2N0J5dGVzKHJuZHMsIG1zZWNzLCBzZXEsIGJ1Ziwgb2Zmc2V0ID0gMCkge1xuICAgIGlmIChybmRzLmxlbmd0aCA8IDE2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZG9tIGJ5dGVzIGxlbmd0aCBtdXN0IGJlID49IDE2Jyk7XG4gICAgfVxuICAgIGlmICghYnVmKSB7XG4gICAgICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDE2ID4gYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFVVSUQgYnl0ZSByYW5nZSAke29mZnNldH06JHtvZmZzZXQgKyAxNX0gaXMgb3V0IG9mIGJ1ZmZlciBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtc2VjcyA/Pz0gRGF0ZS5ub3coKTtcbiAgICBzZXEgPz89ICgocm5kc1s2XSAqIDB4N2YpIDw8IDI0KSB8IChybmRzWzddIDw8IDE2KSB8IChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XTtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBtc2VjcyAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IDB4NzAgfCAoKHNlcSA+Pj4gMjgpICYgMHgwZik7XG4gICAgYnVmW29mZnNldCsrXSA9IChzZXEgPj4+IDIwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IDB4ODAgfCAoKHNlcSA+Pj4gMTQpICYgMHgzZik7XG4gICAgYnVmW29mZnNldCsrXSA9IChzZXEgPj4+IDYpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKChzZXEgPDwgMikgJiAweGZmKSB8IChybmRzWzEwXSAmIDB4MDMpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzExXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxMl07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTNdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzE0XTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxNV07XG4gICAgcmV0dXJuIGJ1Zjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWdleF9qc18xID0gcmVxdWlyZShcIi4vcmVnZXguanNcIik7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiByZWdleF9qc18xLmRlZmF1bHQudGVzdCh1dWlkKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgICBpZiAoISgwLCB2YWxpZGF0ZV9qc18xLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHZlcnNpb247XG4iLCJpbXBvcnQgeyB1c2VJbW1lclJlZHVjZXIgfSBmcm9tIFwidXNlLWltbWVyXCI7XG5cbmltcG9ydCB7XG5cdGluaXRpYWxDb250cm9sU3RhdGUsXG5cdHBhcmFtZXRlckluaXRpYWxTdGF0ZSxcbn0gZnJvbSBcIi4vaW5pdGlhbFN0YXRlXCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbW1hbmRWYWx2ZU1wUHJvcHMsXG5cdFBhcmFtZXRlckFjdGlvbixcblx0UGFyYW1JdGVtLFxuXHRVc2VQYXJhbWV0ZXJSZWR1Y2VyLFxuXHRVc2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIsXG5cdFZhbHZlTXBDb21tYW5kQWN0aW9uLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5cbi8qKlxuICogIFVwZGF0ZSBhIHBhcmFtZXRlciBpdGVtIGluIGEgbGlzdCBvZiBwYXJhbWV0ZXIgaXRlbXNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gUGFyYW1ldGVyUmVkdWNlcihcblx0ZHJhZnQ6IFBhcmFtSXRlbVtdLFxuXHRhY3Rpb246IFBhcmFtZXRlckFjdGlvblxuKTogUGFyYW1JdGVtW10ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBcIlVQREFURV9WQUxVRVwiOlxuXHRcdFx0ZHJhZnRbYWN0aW9uLmluZGV4XS5pbnB1dC52YWx1ZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRkZWZhdWx0OiAvLyAjVE9ETyBBZGQgbW9yZSByZWR1Y2VyIGNhc2Ugc3RhdGVtZW50c1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbUl0ZW1zUmVkdWNlcigpOiBVc2VQYXJhbWV0ZXJSZWR1Y2VyIHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VJbW1lclJlZHVjZXIoXG5cdFx0UGFyYW1ldGVyUmVkdWNlcixcblx0XHRwYXJhbWV0ZXJJbml0aWFsU3RhdGVcblx0KTtcblxuXHRmdW5jdGlvbiB1cGRhdGVWYWx1ZShpbmRleDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9WQUxVRVwiLCBpbmRleDogaW5kZXgsIHZhbHVlOiB2YWx1ZSB9KTtcblx0fVxuXHQvLyBBZGQgbW9yZSBkaXNwYXRjaCBmdW5jdGlvbnMgaGVyZVxuXHRjb25zdCB1c2VQYXJhbWV0ZXJSZWR1Y2VyID0ge1xuXHRcdHN0YXRlLFxuXHRcdHJlZHVjZXI6IHtcblx0XHRcdHVwZGF0ZVZhbHVlLFxuXHRcdH0sXG5cdH07XG5cdHJldHVybiB1c2VQYXJhbWV0ZXJSZWR1Y2VyO1xufVxuZnVuY3Rpb24gdmFsdmVNcFJlZHVjZXIoXG5cdGRyYWZ0OiBDb21tYW5kVmFsdmVNcFByb3BzLFxuXHRhY3Rpb246IFZhbHZlTXBDb21tYW5kQWN0aW9uXG4pOiBDb21tYW5kVmFsdmVNcFByb3BzIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgXCJVUERBVEVfQVVUT19NQU5VQUxcIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy5tYWluKSB7XG5cdFx0XHRcdGlmIChhY3Rpb24ubW9kZSA9PT0gXCJhdXRvXCIpIHtcblx0XHRcdFx0XHRkcmFmdC5jb21tYW5kLm1haW4uYXV0b01hbnVhbCA9IGZhbHNlO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBJbiBBdXRvYCk7XG5cblx0XHRcdFx0fSBlbHNlIGlmIChhY3Rpb24ubW9kZSA9PT0gXCJtYW51YWxcIikge1xuXHRcdFx0XHRcdGRyYWZ0LmNvbW1hbmQubWFpbi5hdXRvTWFudWFsID0gdHJ1ZTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW4gTWFudWFsYCk7XG5cdFx0XHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9NQUlOX01BTl9PTlwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/Lm1haW4pIHtcblx0XHRcdFx0ZHJhZnQuY29tbWFuZC5tYWluLmFjdGl2YXRpb24gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfTUFJTl9NQU5fT0ZGXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8ubWFpbikge1xuXHRcdFx0XHRkcmFmdC5jb21tYW5kLm1haW4uYWN0aXZhdGlvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfVVNMX01BTl9PTlwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/LnVwcGVyU2VhdCkge1xuXHRcdFx0XHRkcmFmdC5jb21tYW5kLnVwcGVyU2VhdC5hY3RpdmF0aW9uID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX1VTTF9NQU5fT0ZGXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8udXBwZXJTZWF0KSB7XG5cdFx0XHRcdGRyYWZ0LmNvbW1hbmQudXBwZXJTZWF0LmFjdGl2YXRpb24gPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0xTTF9NQU5fT05cIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy5sb3dlclNlYXQpIHtcblx0XHRcdFx0ZHJhZnQuY29tbWFuZC5sb3dlclNlYXQuYWN0aXZhdGlvbiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9MU0xfTUFOX09GRlwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/Lmxvd2VyU2VhdCkge1xuXHRcdFx0XHRkcmFmdC5jb21tYW5kLmxvd2VyU2VhdC5hY3RpdmF0aW9uID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cblx0XHRkZWZhdWx0OiAvLyAjVE9ETyBBZGQgbW9yZSByZWR1Y2VyIGNhc2Ugc3RhdGVtZW50c1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIoKTogVXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyIHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VJbW1lclJlZHVjZXIoXG5cdFx0dmFsdmVNcFJlZHVjZXIsXG5cdFx0aW5pdGlhbENvbnRyb2xTdGF0ZVxuXHQpO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUF1dG9NYW5TZWxlY3Rpb24obW9kZTogXCJhdXRvXCIgfCBcIm1hbnVhbFwiKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9BVVRPX01BTlVBTFwiLCBtb2RlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZU1haW5NYW51YWxPbigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09OXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTWFpbk1hbnVhbE9mZigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09GRlwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVzbE1hbnVhbE9uKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfVVNMX01BTl9PTlwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVzbE1hbnVhbE9mZigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX1VTTF9NQU5fT0ZGXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTHNsTWFudWFsT24oKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9MU0xfTUFOX09OXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTHNsTWFudWFsT2ZmKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTFNMX01BTl9PRkZcIiB9KTtcblx0fVxuXG5cdGNvbnN0IHVzZUNvbW1hbmRzVmFsdmVNcFJlZHVjZXIgPSB7XG5cdFx0c3RhdGUsXG5cdFx0cmVkdWNlcjoge1xuXHRcdFx0dXBkYXRlQXV0b01hblNlbGVjdGlvbixcblx0XHRcdHVwZGF0ZU1haW5NYW51YWxPbixcblx0XHRcdHVwZGF0ZU1haW5NYW51YWxPZmYsXG5cdFx0XHR1cGRhdGVVc2xNYW51YWxPbixcblx0XHRcdHVwZGF0ZVVzbE1hbnVhbE9mZixcblx0XHRcdHVwZGF0ZUxzbE1hbnVhbE9uLFxuXHRcdFx0dXBkYXRlTHNsTWFudWFsT2ZmLFxuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHVzZUNvbW1hbmRzVmFsdmVNcFJlZHVjZXI7XG59XG4iLCIvKipcbiAqIFRoZSBwdXJwb3NlIG9mIGluaXRpYWxTdGF0ZXMudHMgaXMgdG8gcHJvdmlkZSBpbml0aWFsIHN0YXRlIGZvciBjb21wb25lbnQgcHJvcHNcbiAqL1xuLy8gaW5pdGlhbFN0YXRlLnRzXG5cblxuaW1wb3J0IHsgQ29tbWFuZFZhbHZlTXBQcm9wcywgUGFyYW1JdGVtIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHZhbHZlU3RhdHVzID0ge1xuXHRhbGFybTogZmFsc2UsXG5cdGFjdEZCOiBmYWxzZSxcblx0ZGVBY3RGQjogdHJ1ZSxcblx0YWN0aXZhdGVkQ29uZmlnOiA3LFxuXHRkZWFjdGl2YXRlZENvbmZpZzogNSxcblx0aXRlbU5hbWU6IFwiVlhYWFwiLFxuXHRtYW51YWw6IGZhbHNlLFxuXHRtYXNrZWQ6IGZhbHNlLFxuXHRjaGFuZ2luZzogZmFsc2UsXG5cdGxvY2F0ZTogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgcHJvY2Vzc09iamVjdFByb3BzID0ge1xuXHRzdGF0dXM6IHZhbHZlU3RhdHVzLFxufTtcbmV4cG9ydCBjb25zdCB2YWx2ZVByb3BzID0ge1xuXHRwcm9jZXNzT2JqZWN0OiBwcm9jZXNzT2JqZWN0UHJvcHMsXG5cdGhhbmRsZUNsaWNrOiAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBjbGlja2VkXCIpO1xuXHR9LFxuXHRsYWJlbFBvc2l0aW9uOiBcImxlZnRcIixcblx0c2hvd0xhYmVsOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgcHVtcEluaXRpYWxTdGF0dXMgPSB7XG5cdGFsYXJtOiBmYWxzZSxcblx0YWN0RkI6IGZhbHNlLFxuXHRkZUFjdEZCOiBmYWxzZSxcblx0Y29uZmlndXJhdGlvbjogNyxcblx0aXRlbU5hbWU6IFwiaXRlbU5hbWVcIixcblx0bWFudWFsOiBmYWxzZSxcblx0bWFza2VkOiBmYWxzZSxcblx0Y2hhbmdpbmc6IGZhbHNlLFxuXHRsb2NhdGU6IGZhbHNlLFxufVxuXG5leHBvcnQgY29uc3QgcHVtcEluaXRpYWxQcm9wcyA9IHtcblx0c3RhdHVzOiBwdW1wSW5pdGlhbFN0YXR1cyxcbn1cbmV4cG9ydCBjb25zdCBwYXJhbWV0ZXJJbml0aWFsU3RhdGUgPSBbXG5cdHtcblx0XHRsYWJlbDoge1xuXHRcdFx0dGV4dDogXCJsYWJlbFwiLFxuXHRcdFx0Y2xhc3NOYW1lOiBcIlwiLFxuXHRcdFx0dG9vbHRpcFRleHQ6IFwiXCIsXG5cdFx0XHR0b29sdGlwUG9zaXRpb246IFwiXCIsXG5cdFx0XHR0b29sdGlwQ2xhc3NOYW1lOiBcIlwiLFxuXHRcdFx0dG9vbHRpcElkOiBcIlwiLFxuXHRcdH0sXG5cdFx0aW5wdXQ6IHtcblx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0aW5wdXRtb2RlOiBcIm51bWVyaWNcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkVudGVyIGEgbnVtYmVyXCIsXG5cdFx0XHRlZGl0YWJsZTogdHJ1ZSxcblx0XHRcdHBhdHRlcm46IFwiXlswLTldKlsuLF0/WzAtOV0qJFwiLFxuXHRcdFx0bWluOiAwLFxuXHRcdFx0bWF4OiAxMDAsXG5cdFx0XHRkZWNpbWFsUGxhY2VzOiAyLFxuXHRcdFx0ZXU6IFwiXFx1MDBCNUNcIixcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0sXG5cdH0gYXMgUGFyYW1JdGVtLFxuXTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxBdXRvTWFuU3RhdGUgPSB7XG5cdGF1dG86IHRydWUsXG5cdG1hbnVhbDogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IGluaXRpYWxPZmZPblN0YXRlID0ge1xuXHRvZmY6IGZhbHNlLFxuXHRvbjogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IGluaXRpYWxDb250cm9sU3RhdGUgPSB7XG5cdGNvbW1hbmQ6IHtcblx0XHRpbnRlcmxvY2tzOiB7XG5cdFx0XHRtYWluOiBbXSxcblx0XHRcdHVwcGVyU2VhdDogW10sXG5cdFx0XHRsb3dlclNlYXQ6IFtdXG5cdFx0fSxcblx0XHRtYWluOiB7XG5cdFx0XHRsYWJlbDogXCJNYWluXCIsXG5cdFx0XHRhdXRvTWFudWFsOiBmYWxzZSxcblx0XHRcdGFjdGl2YXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0dXBwZXJTZWF0OiB7XG5cdFx0XHRsYWJlbDogXCJVcHBlciBTZWF0XCIsXG5cdFx0XHRhY3RpdmF0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdGxvd2VyU2VhdDoge1xuXHRcdFx0bGFiZWw6IFwiTG93ZXIgU2VhdFwiLFxuXHRcdFx0YWN0aXZhdGlvbjogZmFsc2UsXG5cdFx0fVxuXHR9XG59IGFzIENvbW1hbmRWYWx2ZU1wUHJvcHM7XG4iLCJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRQcm9wcyB9IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcblxuXG5leHBvcnQgdHlwZSBFbGVtZW50UmVmID0gUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcbmV4cG9ydCB0eXBlIFZhbHZlU3RhdGUgPSB7XG5cdGFsYXJtPzogYm9vbGVhbjtcblx0YWN0RkI6IGJvb2xlYW47XG5cdGRlQWN0RkI6IGJvb2xlYW47XG5cdHVzbD86IGJvb2xlYW47XG5cdGxzbD86IGJvb2xlYW47XG5cdGFjdGl2YXRlZENvbmZpZzogbnVtYmVyO1xuXHRkZWFjdGl2YXRlZENvbmZpZzogbnVtYmVyO1xuXHRpdGVtTmFtZTogc3RyaW5nO1xuXHRtYW51YWw6IGJvb2xlYW47XG5cdG1hc2tlZDogYm9vbGVhbjtcblx0Y2hhbmdpbmc6IGJvb2xlYW47XG5cdGxvY2F0ZTogYm9vbGVhbjtcbn07XG5leHBvcnQgdHlwZSBTdGF0dXNMaWtlID0ge1xuXHRjb25maWd1cmF0aW9uPzpudW1iZXJcbiAgICBhY3RpdmF0ZWRDb25maWc/OiBudW1iZXI7XG4gICAgZGVhY3RpdmF0ZWRDb25maWc/OiBudW1iZXI7XG4gICAgYWN0RkI/OiBib29sZWFuO1xuICAgIGRlQWN0RkI/OiBib29sZWFuO1xuICAgIHVzbD86IGJvb2xlYW47XG4gICAgbHNsPzogYm9vbGVhbjtcbiAgICBsb2NhdGU/OiBib29sZWFuO1xuICAgIGFsYXJtPzogYm9vbGVhbjtcbiAgICBjaGFuZ2luZz86IGJvb2xlYW47XG4gICAgbWFudWFsPzogYm9vbGVhbjtcbiAgICBtYXNrZWQ/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgVmFsdmVDb21wb3VuZENvbnRleHRUeXBlID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHR2YWx2ZVByb3BzOiBWYWx2ZVByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5leHBvcnQgdHlwZSBWYWx2ZUNvbXBvdW5kUm9vdFByb3BzID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHR2YWx2ZVByb3BzOiBWYWx2ZVByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCB0eXBlIFB1bXBTdGF0ZSA9IHtcblx0YWxhcm06IGJvb2xlYW47XG5cdGFjdEZCOiBib29sZWFuO1xuXHRkZUFjdEZCOiBib29sZWFuO1xuXHRjb25maWd1cmF0aW9uOiBudW1iZXI7XG5cdGl0ZW1OYW1lOiBzdHJpbmc7XG5cdG1hbnVhbDogYm9vbGVhbjtcblx0bWFza2VkOiBib29sZWFuO1xuXHRjaGFuZ2luZzogYm9vbGVhbjtcblx0bG9jYXRlOiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgUHVtcENvbXBvdW5kQ29udGV4dFR5cGUgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdHB1bXBQcm9wczogUHVtcFByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5leHBvcnQgdHlwZSBQdW1wQ29tcG91bmRSb290UHJvcHMgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdHB1bXBQcm9wczogUHVtcFByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG4vKipcbiAqIERlZmluZSB0aGUgc2hhcGUgb2YgdGhlIFBhcmFtZXRlckFjdGlvbiB0eXBlXG4gKiBAVXNlYWdlIHVzZVBhcmFtZXRlclJlZHVjZXJcbiAqL1xuZXhwb3J0IHR5cGUgUGFyYW1ldGVyQWN0aW9uID0ge1xuXHR0eXBlOiBcIlVQREFURV9WQUxVRVwiO1xuXHR2YWx1ZTogbnVtYmVyO1xuXHRpbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUGFyYW1ldGVyUmVkdWNlciA9IChcblx0c3RhdGU6IFBhcmFtSXRlbSB8IFBhcmFtSXRlbVtdLFxuXHRhY3Rpb246IFBhcmFtZXRlckFjdGlvblxuKSA9PiBWYWx2ZVN0YXRlO1xuXG5leHBvcnQgdHlwZSBVc2VQYXJhbWV0ZXJSZWR1Y2VyID0ge1xuXHRzdGF0ZTogUGFyYW1JdGVtW107XG5cdHJlZHVjZXI6IHtcblx0XHR1cGRhdGVWYWx1ZTogKHZhbHVlOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG5cdFx0Ly9hZGQgbW9yZSBoYW5kbGVycyBhcyBuZWVkZWRcblx0fTtcbn07XG5leHBvcnQgdHlwZSBQYXJhbUxhYmVsID0ge1xuXHR0ZXh0OiBzdHJpbmc7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblx0dG9vbHRpcFRleHQ/OiBzdHJpbmc7XG5cdHRvb2x0aXBQb3NpdGlvbj86IHN0cmluZztcblx0dG9vbHRpcENsYXNzTmFtZT86IHN0cmluZztcblx0dG9vbHRpcElkPzogc3RyaW5nO1xufTtcbmV4cG9ydCB0eXBlIFBhcmFtSW5wdXQgPSB7XG5cdHR5cGU6IHN0cmluZztcblx0aW5wdXRtb2RlOlxuXHRcdHwgXCJub25lXCJcblx0XHR8IFwidGV4dFwiXG5cdFx0fCBcInRlbFwiXG5cdFx0fCBcInVybFwiXG5cdFx0fCBcImVtYWlsXCJcblx0XHR8IFwibnVtZXJpY1wiXG5cdFx0fCBcImRlY2ltYWxcIlxuXHRcdHwgXCJzZWFyY2hcIlxuXHRcdHwgdW5kZWZpbmVkO1xuXHRwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHRlZGl0YWJsZTogYm9vbGVhbjtcblx0cGF0dGVybjogc3RyaW5nO1xuXHRtaW46IG51bWJlcjtcblx0bWF4OiBudW1iZXI7XG5cdGRlY2ltYWxQbGFjZXM6IG51bWJlcjtcblx0Ly8gcGF0dGVybjogXCJeWzAtOV0qWy4sXT9bMC05XSokXCIgZm9yIGRlY2ltYWwgbnVtYmVyc1xuXHQvLyBwYXR0ZXJuOiBcIl5bMC05XSokXCIgZm9yIGludGVnZXJzXG5cdGV1OiBzdHJpbmc7XG5cdHZhbHVlOiBudW1iZXI7XG59O1xuLy8gdHlwZSBQYXJhbXNIZWFkZXIgPSB7XG4vLyBcdGxhYmVsOiBzdHJpbmdcbi8vIH1cbmV4cG9ydCB0eXBlIFBhcmFtSXRlbSA9IHtcblx0bGFiZWw6IFBhcmFtTGFiZWw7XG5cdGlucHV0OiBQYXJhbUlucHV0O1xufTtcbmV4cG9ydCB0eXBlIFBhcmFtZXRlcnNMaXN0U3RhdGUgPSB7XG5cdHBhcmFtZXRlcnM6IFBhcmFtSXRlbVtdO1xufTtcbi8qKlxuICogRGVmaW5lIHRoZSBzaGFwZSBvZiB0aGUgVmFsdmVBY3Rpb24gdHlwZVxuICogQFVzZWFnZSB1c2VWYWx2ZVJlZHVjZXJcbiAqL1xuZXhwb3J0IHR5cGUgVmFsdmVBY3Rpb24gPVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQUNUX0NPTkZJR1wiOyB2YWx1ZTogbnVtYmVyIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0RFQUNUX0NPTkZJR1wiOyB2YWx1ZTogbnVtYmVyIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0FDVF9GQlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0RFX0FDVF9GQlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX1VTTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0xTTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX01BTlVBTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0FMQVJNXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTUFTS0VEXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQ0hBTkdJTkdcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9MT0NBVEVcIiB9O1xuXG5leHBvcnQgdHlwZSBWYWx2ZVJlZHVjZXIgPSAoXG5cdHN0YXRlOiBWYWx2ZVN0YXRlLFxuXHRhY3Rpb246IFZhbHZlQWN0aW9uXG4pID0+IFZhbHZlU3RhdGU7XG5cbmV4cG9ydCB0eXBlIFVzZVZhbHZlUmVkdWNlciA9IHtcblx0c3RhdGU6IFZhbHZlU3RhdGU7XG5cdHJlZHVjZXI6IHtcblx0XHR1cGRhdGVBY3RDb25maWc6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZURlQWN0Q29uZmlnOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZDtcblx0XHR1cGRhdGVBbGFybTogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVBY3RGQjogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVEZUFjdEZCOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZVVzbDogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVMc2w6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTWFudWFsOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZU1hc2tlZDogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVDaGFuZ2luZzogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVMb2NhdGU6ICgpID0+IHZvaWQ7XG5cblx0XHQvL2FkZCBtb3JlIGhhbmRsZXJzIGFzIG5lZWRlZFxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IFZhbHZlQ2xhc3NOYW1lRW51bSA9IHtcblx0QWxhcm1TdGF0ZTogXCJBbGFybVN0YXRlXCIsXG5cdEFjdGl2YXRlZDogXCJBY3RpdmF0ZWRcIixcblx0RGVhY3RpdmF0ZWQ6IFwiRGVhY3RpdmF0ZWRcIixcblx0TWFudWFsOiBcIk1hbnVhbFwiLFxuXHRNYXNrZWQ6IFwiTWFza2VkXCIsXG5cdENoYW5naW5nOiBcIkNoYW5naW5nXCIsXG5cdE5vQWxhcm1NYXNrOiBcIk5vQWxhcm1NYXNrXCIsXG5cdExvY2F0ZTogXCJMb2NhdGVcIixcbn07XG5leHBvcnQgdHlwZSBWYWx2ZUNsYXNzTmFtZUVudW0gPVxuXHQodHlwZW9mIFZhbHZlQ2xhc3NOYW1lRW51bSlba2V5b2YgdHlwZW9mIFZhbHZlQ2xhc3NOYW1lRW51bV07XG4vLyBleHBvcnQgY29uc3QgSXRlbU5hbWVFbnVtID0ge1xuLy8gXHRWMWIxOiBcInYxYjFcIiwgLy8gaW5kZXggMFxuLy8gXHRWMWIyOiBcInYxYjJcIiwgLy8gaW5kZXggMVxuLy8gXHRWMWIzOiBcInYxYjNcIiwgLy8gaW5kZXggMlxuLy8gXHRWMWI0OiBcInYxYjRcIiwgLy8gaW5kZXggM1xuLy8gXHRWMmIxOiBcInYyYjFcIiwgLy8gaW5kZXggNFxuLy8gXHRWMmIyOiBcInYyYjJcIiwgLy8gaW5kZXggNVxuLy8gXHRWMmIzOiBcInYyYjNcIiwgLy8gaW5kZXggNlxuLy8gXHRWMmI0OiBcInYyYjRcIiwgLy8gaW5kZXggN1xuLy8gXHRWM2IxOiBcInYzYjFcIiwgLy8gaW5kZXggOFxuLy8gXHRWM2IyOiBcInYzYjJcIiwgLy8gaW5kZXggOVxuLy8gXHRWM2IzOiBcInYzYjNcIiwgLy8gaW5kZXggMTBcbi8vIFx0VjNiNDogXCJ2M2I0XCIsIC8vIGluZGV4IDExXG4vLyBcdFYyOiBcInYyXCIsIC8vIGluZGV4IDEyXG4vLyBcdFYzOiBcInYzXCIsIC8vIGluZGV4IDEzXG4vLyBcdFYxOiBcInYxXCIsIC8vIGluZGV4IDE0XG4vLyBcdFYyZjE6IFwidjJmMVwiLCAvLyBpbmRleCAxNVxuLy8gXHRWMmYyOiBcInYyZjJcIiwgLy8gaW5kZXggMTZcbi8vIFx0VjNmMTogXCJ2M2YxXCIsIC8vIGluZGV4IDE3XG4vLyBcdFYzZjI6IFwidjNmMlwiLCAvLyBpbmRleCAxOFxuLy8gfTtcbi8vIGV4cG9ydCB0eXBlIEl0ZW1OYW1lRW51bSA9ICh0eXBlb2YgSXRlbU5hbWVFbnVtKVtrZXlvZiB0eXBlb2YgSXRlbU5hbWVFbnVtXTtcbmV4cG9ydCBjb25zdCB2YWx2ZU1wSXRlbU5hbWVFbnVtID0ge1xuXHRWMWIxOiBcInYxYjFcIiwgLy8gaW5kZXggMFxuXHRWMWIyOiBcInYxYjJcIiwgLy8gaW5kZXggMVxuXHRWMWIzOiBcInYxYjNcIiwgLy8gaW5kZXggMlxuXHRWMWI0OiBcInYxYjRcIiwgLy8gaW5kZXggM1xuXHRWMmIxOiBcInYyYjFcIiwgLy8gaW5kZXggNFxuXHRWMmIyOiBcInYyYjJcIiwgLy8gaW5kZXggNVxuXHRWMmIzOiBcInYyYjNcIiwgLy8gaW5kZXggNlxuXHRWMmI0OiBcInYyYjRcIiwgLy8gaW5kZXggN1xuXHRWMjogXCJ2MlwiLCAvLyBpbmRleCA4XG5cdHYxOiBcInYxXCIsIC8vIGluZGV4IDlcblx0dXNsOiBcInVzbFwiLCAvLyBpbmRleCAxMCB1cHBlci1zZWF0LWxpZnRcblx0bHNsOiBcImxzbFwiLCAvLyBpbmRleCAxMSBsb3dlci1zZWF0LWxpZnRcblx0bG9jYXRlOiBcImxvY2F0ZVwiLCAvLyBpbmRleCAxMiBsb2NhdGUgYW5pbWF0aW9uXG59O1xuZXhwb3J0IHR5cGUgdmFsdmVNcEl0ZW1OYW1lRW51bSA9XG5cdCh0eXBlb2YgdmFsdmVNcEl0ZW1OYW1lRW51bSlba2V5b2YgdHlwZW9mIHZhbHZlTXBJdGVtTmFtZUVudW1dO1xuXG5cblxuY29uc3QgVmFsdmVTdGF0ZUVudW0gPSB7XG5cdGFsYXJtOiBcImFsYXJtXCIsXG5cdG1hbnVhbDogXCJtYW51YWxcIixcblx0bWFza2VkOiBcIm1hc2tlZFwiLFxufTtcbmV4cG9ydCB0eXBlIFZhbHZlU3RhdGVFbnVtID1cblx0KHR5cGVvZiBWYWx2ZVN0YXRlRW51bSlba2V5b2YgdHlwZW9mIFZhbHZlU3RhdGVFbnVtXTtcblxuY29uc3QgaXRlbUlkUG9zaXRpb25zID0gW1xuXHRcInJpZ2h0XCIsXG5cdFwibGVmdFwiLFxuXHRcInRvcC1sZWZ0XCIsXG5cdFwidG9wLXJpZ2h0XCIsXG5cdFwiYm90dG9tLWxlZnRcIixcblx0XCJib3R0b20tcmlnaHRcIixcbl07XG5cbmV4cG9ydCB0eXBlIEl0ZW1JZFBvc2l0aW9uVHlwZSA9ICh0eXBlb2YgaXRlbUlkUG9zaXRpb25zKVtudW1iZXJdO1xuZXhwb3J0IHR5cGUgUHJvY2Vzc09iamVjdCA9IHtcblx0c3RhdHVzOiBWYWx2ZVN0YXRlO1xufTtcbmV4cG9ydCB0eXBlIFB1bXAgPSB7XG5cdHN0YXR1czogUHVtcFN0YXRlO1xufTtcbmV4cG9ydCB0eXBlIFZhbHZlUHJvcHMgPSB7XG5cdHByb2Nlc3NPYmplY3Q/OiBQcm9jZXNzT2JqZWN0O1xuXHRsYWJlbFBvc2l0aW9uPzogSXRlbUlkUG9zaXRpb25UeXBlO1xuXHRzaG93TGFiZWw/OiBib29sZWFuO1xuXHRoYW5kbGVDbGljaz86ICgpID0+IHZvaWQ7XG59O1xuY29uc3QgcHVtcFR5cGVzPSBbXG5cdFwiY2VudHJpZnVnYWxcIixcblx0XCJkaWFwaHJhZ21cIixcblx0XCJnZWFyXCIsXG5cdFwibGlxdWlkLXJpbmdcIixcblx0XCJwb3NpdGl2ZS1kaXNwbGFjbWVudFwiLFxuXHRcInBvc2l0aXZlLXNjcmV3XCIsXG5cdFwicHJvZ3Jlc3NpdmUtY2F2aXR5XCIsXG5dXG5leHBvcnQgdHlwZSBQdW1wVHlwZSA9ICh0eXBlb2YgcHVtcFR5cGVzKVtudW1iZXJdO1xuZXhwb3J0IHR5cGUgUHVtcFByb3BzID0ge1xuXHRwdW1wVHlwZT86IFB1bXBUeXBlO1xuXHRwcm9jZXNzT2JqZWN0PzogUHVtcDtcblx0bGFiZWxQb3NpdGlvbj86IEl0ZW1JZFBvc2l0aW9uVHlwZTtcblx0c2hvd0xhYmVsPzogYm9vbGVhbjtcblx0aGFuZGxlQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBwdW1wSXRlbUxpc3QgPSBbXG5cdFwic3ltYm9sLTFcIixcblx0XCJzeW1ib2wtMlwiLFxuIFx0XCJsb2NhdGVcIixcbl1cbmV4cG9ydCB0eXBlIFB1bXBJdGVtTGlzdCA9ICh0eXBlb2YgcHVtcEl0ZW1MaXN0KVtudW1iZXJdO1xuXG5leHBvcnQgdHlwZSBJdGVtRGF0YSA9IHtcblx0a2V5OiBzdHJpbmc7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdHByb3BzOiBWYWx2ZVN0YXRlO1xufTtcblxuZXhwb3J0IHR5cGUgaXRlbU5hbWVQcm9wcyA9IHtcblx0a2V5OiBzdHJpbmc7XG5cdG5hbWU6IFtzdHJpbmcsIHN0cmluZ107XG5cdHZhbHVlOiBzdHJpbmc7XG5cdGluZGV4OiBudW1iZXI7XG59O1xuZXhwb3J0IHR5cGUgQ29tbWFuZFZhbHZlTXBQcm9wcyA9IHtcblx0Y29tbWFuZD86IHtcblx0XHRpbnRlcmxvY2tzPzoge1xuXHRcdFx0bWFpbjogYm9vbGVhbltdO1xuXHRcdFx0dXBwZXJTZWF0OiBib29sZWFuW107XG5cdFx0XHRsb3dlclNlYXQ6IGJvb2xlYW5bXTtcblx0XHR9O1xuXHRcdG1haW4/OiB7XG5cdFx0XHRsYWJlbDogc3RyaW5nO1xuXHRcdFx0YXV0b01hbnVhbDogYm9vbGVhbjtcblx0XHRcdGFjdGl2YXRpb246IGJvb2xlYW47XG5cdFx0fTtcblx0XHR1cHBlclNlYXQ/OiB7XG5cdFx0XHRsYWJlbDogc3RyaW5nO1xuXHRcdFx0YWN0aXZhdGlvbjogYm9vbGVhbjtcblx0XHR9O1xuXHRcdGxvd2VyU2VhdD86IHtcblx0XHRcdGxhYmVsOiBzdHJpbmc7XG5cdFx0XHRhY3RpdmF0aW9uOiBib29sZWFuO1xuXHRcdH07XG5cdH07XG59O1xuXG5leHBvcnQgdHlwZSBDb21tYW5kc1ZhbHZlTXBDb21wb3VuZENvbnRleHRUeXBlID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHR1c2VSZWR1Y2VyOiBVc2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXI7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuZXhwb3J0IHR5cGUgQ29tbWFuZHNWYWx2ZU1wQ29tcG91bmRSb290UHJvcHMgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdGNvbW1hbmQ6IENvbW1hbmRWYWx2ZU1wUHJvcHM7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuLyoqXG4gKiBEZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBWYWx2ZUFjdGlvbiB0eXBlXG4gKiBAVXNlYWdlIHVzZVZhbHZlUmVkdWNlclxuICovXG5leHBvcnQgdHlwZSBWYWx2ZU1wQ29tbWFuZEFjdGlvbiA9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9BVVRPX01BTlVBTFwiOyBtb2RlOiBcImF1dG9cIiB8IFwibWFudWFsXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTUFJTl9NQU5fT05cIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9NQUlOX01BTl9PRkZcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9VU0xfTUFOX09OXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfVVNMX01BTl9PRkZcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9MU0xfTUFOX09OXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTFNMX01BTl9PRkZcIiB9O1xuZXhwb3J0IHR5cGUgVmFsdmVNcENvbW1hbmRSZWR1Y2VyID0gKFxuXHRzdGF0ZTogQ29tbWFuZFZhbHZlTXBQcm9wcyxcblx0YWN0aW9uOiBWYWx2ZU1wQ29tbWFuZEFjdGlvblxuKSA9PiBWYWx2ZVN0YXRlO1xuXG5leHBvcnQgdHlwZSBVc2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIgPSB7XG5cdHN0YXRlOiBDb21tYW5kVmFsdmVNcFByb3BzO1xuXHRyZWR1Y2VyOiB7XG5cdFx0dXBkYXRlQXV0b01hblNlbGVjdGlvbjogKG1vZGU6IFwiYXV0b1wiIHwgXCJtYW51YWxcIikgPT4gdm9pZDtcblx0XHR1cGRhdGVNYWluTWFudWFsT246ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTWFpbk1hbnVhbE9mZjogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVVc2xNYW51YWxPbjogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVVc2xNYW51YWxPZmY6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTHNsTWFudWFsT246ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTHNsTWFudWFsT2ZmOiAoKSA9PiB2b2lkO1xuXHRcdC8vYWRkIG1vcmUgaGFuZGxlcnMgYXMgbmVlZGVkXG5cdH07XG59O1xuZXhwb3J0IGNvbnN0IGh4SXRlbU5hbWVFbnVtID0ge1xuXHRiMTogXCJiYXNlLTFcIiwgLy8gaW5kZXggMFxuXHRiMjogXCJiYXNlLTJcIiwgLy8gaW5kZXggMVxuXHRiMzogXCJiYXNlLTNcIiwgLy8gaW5kZXggMlxuXHRiNDogXCJiYXNlLTRcIiwgLy8gaW5kZXggM1xuXHRWMmIxOiBcInYyYjFcIiwgLy8gaW5kZXggNFxuXHRWMmIyOiBcInYyYjJcIiwgLy8gaW5kZXggNVxuXHRWMmIzOiBcInYyYjNcIiwgLy8gaW5kZXggNlxuXHRWMmI0OiBcInYyYjRcIiwgLy8gaW5kZXggN1xuXHRWMjogXCJ2MlwiLCAvLyBpbmRleCA4XG5cdHYxOiBcInYxXCIsIC8vIGluZGV4IDlcblx0dXNsOiBcInVzbFwiLCAvLyBpbmRleCAxMCB1cHBlci1zZWF0LWxpZnRcblx0bHNsOiBcImxzbFwiLCAvLyBpbmRleCAxMSBsb3dlci1zZWF0LWxpZnRcblx0bG9jYXRlOiBcImxvY2F0ZVwiLCAvLyBpbmRleCAxMiBsb2NhdGUgYW5pbWF0aW9uXG59O1xuZXhwb3J0IHR5cGUgSHhJdGVtTmFtZUVudW0gPVxuXHQodHlwZW9mIGh4SXRlbU5hbWVFbnVtKVtrZXlvZiB0eXBlb2YgaHhJdGVtTmFtZUVudW1dO1xuIiwiaW1wb3J0IHsgZ2V0Qm9vbEF0SW5kZXggfSBmcm9tIFwiLi4vdXRpbHMvbnVtYmVyVXRpbFwiO1xuaW1wb3J0IHtcblx0SXRlbUlkUG9zaXRpb25UeXBlLFxuXHQvLyBJdGVtTmFtZUVudW0sXG5cdHB1bXBJdGVtTGlzdCxcblx0dmFsdmVNcEl0ZW1OYW1lRW51bSxcblx0dHlwZSBQdW1wU3RhdGUsXG5cdHR5cGUgUHVtcFR5cGUsXG5cdHR5cGUgU3RhdHVzTGlrZSxcblx0dHlwZSBWYWx2ZVN0YXRlLFxufSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuLyoqXG4gKiBUaGlzIGlzIGEgdXRpbGl0eSBmdW5jdGlvbiBmb3IgdGhlIGNvbXBvbmVudCBcInByb2Nlc3Mtb2JqZWN0L1ZhbHZlRkNcIlxuICpcbiAqIEBwYXJhbSBpbmRleDogbnVtYmVyIHRoZSBpbmRleCBvZiBhbiBkeW5hbWljIHZpc3VhbCBlbGVtZW50IFwiaXRlbVwiIHdpdGhpbiB0aGUgVmFsdmUgY29tcG9uZW50XG4gKiBAcGFyYW0gdmFsdmVTdGF0dXM/OlZhbHZlU3RhdHVzIHRoZSBzdGF0dXMgcmVwcmVzZW50aW5nIHBoeXNpY2FsIHByb2Nlc3MgdmFsdmVcbiAqIEByZXR1cm5zIGNsYXNzTmFtZTpzdHJpbmcgcmV0dXJucyBhZGRpdGlvbmFsIGNsYXNzbmFtZXMgZm9yIGFuIHZpc3VhbCBlbGVtZW50IG9mIHRoZSB2YWx2ZSBjb21wb25lbnQuXG4gKlxuICogUmV0dXJuZWQgY2xhc3NuYW1lcyBhcmU7XG4gKiBcdGhpZGUgLSB0aGlzIGhpZGVzIHRoZSBpdGVtXG4gKiBcdHNob3cgLVxuICovXG5cbmV4cG9ydCBjb25zdCBnZXRWYWx2ZU1wSXRlbUNsYXNzTmFtZSA9IChcblx0aW5kZXg6IG51bWJlcixcblx0dmFsdmVTdGF0dXM/OiBWYWx2ZVN0YXRlXG4pOiBzdHJpbmcgPT4ge1xuXHRsZXQgY2xhc3NOYW1lID0gXCJcIjtcblx0Ly8gSGFuZGxlIHRoZSBmYWN0IHRoYXQgQWN0aXZhdGVkQ29uZmlnIGFuZCBEZWFjdGl2YXRlZENvbmZpZyBhcmUgb3B0aW9uYWwgYW5kIG1heWJlIHVuZGVmaW5lZFxuXHRjb25zdCBBY3RpdmF0ZWRDb25maWdWYWx1ZSA9IHZhbHZlU3RhdHVzPy5hY3RpdmF0ZWRDb25maWcgPz8gMDtcblx0Y29uc3QgRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSA9IHZhbHZlU3RhdHVzPy5kZWFjdGl2YXRlZENvbmZpZyA/PyAwO1xuXHQvLyBjb25zb2xlLmxvZyh2YWx2ZVN0YXR1cyk7XG5cblx0aWYgKGluZGV4IDwgOCkge1xuXHRcdGlmIChcblx0XHRcdChnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpICYmIHZhbHZlU3RhdHVzPy5hY3RGQikgfHxcblx0XHRcdChnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgJiYgdmFsdmVTdGF0dXM/LmRlQWN0RkIpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gOSkge1xuXHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHR9IGVsc2UgaWYgKGluZGV4ID09PSA4KSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMCkge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMCkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEwKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93IGl0ZW1cIjtcblx0XHRcdGlmICh2YWx2ZVN0YXR1cz8udXNsKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgYWN0aXZhdGVkXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgZGVhY3RpdmF0ZWRcIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDExKSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDExKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTEpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdFx0aWYgKHZhbHZlU3RhdHVzPy5sc2wpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBhY3RpdmF0ZWRcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiZGVhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBkZWFjdGl2YXRlZFwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTIpIHtcblx0XHRpZiAodmFsdmVTdGF0dXM/LmxvY2F0ZSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJzbWFsbFwiLCBcIlwiKSArIFwiIHNtYWxsXCI7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCA4KSB8fFxuXHRcdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCA4KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibGFyZ2VcIiwgXCJcIikgKyBcIiBsYXJnZVwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImhpZGUgaXRlbVwiLCBcIlwiKSArIFwiIGhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fVxuXHQvLyBBZGRpdGlvbnMgdG8gdGhlIGNsYXNzTmFtZVxuXG5cdGlmIChjbGFzc05hbWUuaW5jbHVkZXMoXCJzaG93XCIpICYmICFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtXCIpKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCwgY2xhc3NOYW1lKTtcblx0XHRpZiAodmFsdmVTdGF0dXM/LmFsYXJtKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImFsYXJtXCIsIFwiXCIpICsgXCIgYWxhcm1cIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5jaGFuZ2luZykge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJjaGFuZ2luZ1wiLCBcIlwiKSArIFwiIGNoYW5naW5nXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFudWFsKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIm1hbnVhbFwiLCBcIlwiKSArIFwiIG1hbnVhbFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCAmJiAhdmFsdmVTdGF0dXMuYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibm8tYWxhcm0tbWFza1wiLCBcIlwiKSArIFwiIG5vLWFsYXJtLW1hc2tcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYXNrZWQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibWFza2VkXCIsIFwiXCIpICsgXCIgbWFza2VkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uYWN0RkIpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uZGVBY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJkZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGRlYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHR9XG5cdC8vIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgsIGNsYXNzTmFtZSk7XG5cblx0cmV0dXJuIGNsYXNzTmFtZTsgLy8gZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbm8gb3RoZXIgY29uZGl0aW9uIGlzIG1ldFxufTtcbi8qKlxuICogRnVuY3Rpb24gZ2V0Q2xhc3NOYW1lV2l0aFN0YXR1cy5cbiAqIFRoaXMgaXMgYSB1dGlsaXR5IGZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyBjc3MgY2xhc3NOYW1lcyBmb3IgZWFjaFxuICogZWxlbWVudCBpbiBhIGhtaS1jb21wb25lbnQgc3ltYm9sLlxuICogSW4gdGhlIERPTSB0cmVlIGJhc2UgZWxlbWVudHMgd2lsbCBoYXZlIGEgY2xhc3Mgc3VjaCBhcyBcImJhc2UtMSB0byBuXCJcbiAqIHdpdGggZHluYW1pY0l0ZW1zIGhhdmluZyBhIGNsYXNzIHN1Y2ggYXMgXCJkeW5hbWljLTEgdG8gblwiXG4gKiBAcGFyYW0gaW5kZXg6IG51bWJlciA6IEFycmF5IGluZGV4IHN0YXJ0aW5nIGF0IHplcm9cbiAqIEBwYXJhbSBzdGF0dXM6IFMgOiBBIFN0YXR1c0xpa2Ugb2JqZWN0XG4gKiBAcGFyYW0gdHlwZTogc3RyaW5nOlxuICogQHBhcmFtIGJhc2VFbGVtZW50czogbnVtYmVyIDpcbiAqIEBwYXJhbSBiYXNlQ29uZmlnOiBudW1iZXIgOlxuICogQHBhcmFtIGR5bmFtaWNJdGVtczogbnVtYmVyIDpcbiAqIEBwYXJhbSBkeW5hbWljQ29uZmlnOiBudW1iZXIgOlxuICplbGVtZW50VmFyaWFudHMgPSBbXG4gXHR7XG4gXHRzdGF0dXNLZXk6IHN0cmluZyxcbiBcdGFkZGl0aW9uYWxDbGFzczogc3RyaW5nXG5cdH1cbiBdXG4gKi9cbnR5cGUgRWxlbWVudFZhcmlhbnQgPSB7XG5cdHN0YXR1c0tleT86IEhtaVN0YXR1cztcblx0YWRkaXRpb25hbENsYXNzPzogc3RyaW5nO1xufTtcbnR5cGUgRWxlbWVudFZhcmlhbnRMaXN0ID0gRWxlbWVudFZhcmlhbnRbXTtcbnR5cGUgYm9vbFN0cmluZyA9IHtcblx0dHJ1ZVN0cmluZzogc3RyaW5nO1xuXHRmYWxzZVN0cmluZzogc3RyaW5nO1xufVxudHlwZSBIbWlTdGF0dXMgPSB7XG5cdGFsYXJtPzogYm9vbFN0cmluZztcblx0YWN0RkI/OiBib29sU3RyaW5nO1xuXHRkZUFjdEZCPzogYm9vbFN0cmluZztcblx0bWFudWFsPzogYm9vbFN0cmluZztcblx0bWFza2VkPzogYm9vbFN0cmluZztcblx0Y2hhbmdpbmc/OiBib29sU3RyaW5nO1xuXHRsb2NhdGU/OiBib29sU3RyaW5nO1xuXHRhY3RpdmF0ZWQ/OiBib29sU3RyaW5nO1xuXHR1c2w/OiBib29sU3RyaW5nO1xuXHRsc2w/OiBib29sU3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2xhc3NOYW1lV2l0aFN0YXR1cyA9IDxTIGV4dGVuZHMgU3RhdHVzTGlrZT4oXG5cdGluZGV4OiBudW1iZXIsXG5cdHN0YXR1cz86IFMsXG5cdGVsZW1lbnRWYXJpYW50cz86IEVsZW1lbnRWYXJpYW50TGlzdCxcblx0YmFzZUVsZW1lbnRzPzogbnVtYmVyLFxuXHRiYXNlQ29uZmlnPzogbnVtYmVyLFxuXHRkeW5hbWljSXRlbXM/OiBudW1iZXIsXG5cdGR5bmFtaWNDb25maWc/OiBudW1iZXJcbik6IHN0cmluZyA9PiB7XG5cdGxldCBjbGFzc05hbWUgPSBcIlwiO1xuXHRsZXQgYWRkaXRpb25hbENsYXNzID0gXCJcIjtcblxuXG5pZiAoZWxlbWVudFZhcmlhbnRzICYmIGVsZW1lbnRWYXJpYW50c1tpbmRleF0/LnN0YXR1c0tleSAmJiBzdGF0dXMpIHtcbiAgY29uc3Qgc3RhdHVzS2V5T2JqID0gZWxlbWVudFZhcmlhbnRzW2luZGV4XS5zdGF0dXNLZXk7XG4gIC8vIEdldCBrZXlzIGZyb20gc3RhdHVzS2V5T2JqIHRoYXQgYXJlIGFsc28gaW4gc3RhdHVzXG4gIGNvbnN0IG1hdGNoaW5nS2V5cyA9IE9iamVjdC5rZXlzKHN0YXR1c0tleU9iaikuZmlsdGVyKFxuICAgIChrZXkpID0+IGtleSBpbiBzdGF0dXNcbiAgKSBhcyAoa2V5b2YgdHlwZW9mIHN0YXR1c0tleU9iaiAmIGtleW9mIHR5cGVvZiBzdGF0dXMpW107XG5cbiAgZm9yIChjb25zdCBrZXkgb2YgbWF0Y2hpbmdLZXlzKSB7XG4gICAgLy8gTm93IHlvdSBjYW4gc2FmZWx5IGFjY2VzcyBib3RoIHN0YXR1c0tleU9ialtrZXldIGFuZCBzdGF0dXNba2V5XVxuICAgIGNvbnN0IGtleVN0YXR1c1ZhbHVlID0gc3RhdHVzS2V5T2JqW2tleV07XG4gICAgY29uc3Qgc3RhdHVzVmFsdWUgPSBzdGF0dXNba2V5XTtcbiAgICBpZiAoc3RhdHVzVmFsdWUpe1xuXHRcdGFkZGl0aW9uYWxDbGFzcyArPSBgICR7a2V5U3RhdHVzVmFsdWU/LnRydWVTdHJpbmcgPyBrZXlTdGF0dXNWYWx1ZS50cnVlU3RyaW5nIDogXCJcIn1gXG5cdH1lbHNle1xuXHRcdGFkZGl0aW9uYWxDbGFzcyArPSBgICR7a2V5U3RhdHVzVmFsdWU/LmZhbHNlU3RyaW5nID8ga2V5U3RhdHVzVmFsdWUuZmFsc2VTdHJpbmcgOiBcIlwifWBcblx0fVxuICB9XG59XG5cdC8vIEJhc2UgRWxlbWVudHNcblx0aWYgKGJhc2VFbGVtZW50cyAmJiBiYXNlQ29uZmlnKSB7XG5cdFx0aWYgKGluZGV4IDwgYmFzZUVsZW1lbnRzKSB7XG5cdFx0XHRsZXQgaXRlbVN0cmluZyA9IGluZGV4ID4gMCA/IFwiXCIgOiBcIml0ZW1cIjtcblx0XHRcdGlmIChnZXRCb29sQXRJbmRleChiYXNlQ29uZmlnLCBpbmRleCkpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gYHNob3cgJHtpdGVtU3RyaW5nfSAke2FkZGl0aW9uYWxDbGFzc31gO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gYGhpZGUgJHtpdGVtU3RyaW5nfWA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIER5bmFtaWMgSXRlbXNcblx0XHRpZiAoZHluYW1pY0l0ZW1zICYmIGR5bmFtaWNDb25maWcpIHtcblx0XHRcdGxldCBkeW5hbUluZGV4ID0gaW5kZXggLSBiYXNlRWxlbWVudHM7XG5cdFx0XHRpZiAoaW5kZXggPj0gYmFzZUVsZW1lbnRzICYmIGluZGV4IDwgYmFzZUVsZW1lbnRzICsgZHluYW1pY0l0ZW1zKSB7XG5cdFx0XHRcdGlmIChnZXRCb29sQXRJbmRleChkeW5hbWljQ29uZmlnLCBkeW5hbUluZGV4KSkge1xuXHRcdFx0XHRcdGNsYXNzTmFtZSA9IGBzaG93IGl0ZW1gO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzTmFtZSA9IGBoaWRlIGl0ZW1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjbGFzc05hbWVcbn07XG4vKipcbiAqIEByZXR1cm5zIEFycmF5IG9mIGl0ZW1OYW1lKHMpIGZvciBlYWNoIHZpc3VhbCBlbGVtZW50IG9mIGEgdmFsdmUgY29tcG9uZW50XG4gKi9cbi8vIGV4cG9ydCBjb25zdCBpdGVtTmFtZXMgPSBPYmplY3QuZW50cmllcyhJdGVtTmFtZUVudW0pLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuLy8gXHRyZXR1cm4ge1xuLy8gXHRcdGtleTogdXVpZHY0KCksXG4vLyBcdFx0bmFtZToga2V5LFxuLy8gXHRcdHZhbHVlOiBrZXlbMV0sXG4vLyBcdFx0aW5kZXg6IGluZGV4LFxuLy8gXHR9O1xuLy8gfSk7XG5leHBvcnQgY29uc3QgdmFsdmVNcEl0ZW1OYW1lcyA9IE9iamVjdC5lbnRyaWVzKHZhbHZlTXBJdGVtTmFtZUVudW0pLm1hcChcblx0KGtleSwgaW5kZXgpID0+IHtcblx0XHQvLyBjb25zb2xlLmxvZyhgSW4gYnVpbGQgSXRlbU5hbWVzIG5hbWUgJHtrZXl9IGluZGV4ICR7aW5kZXh9YCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGtleTogdXVpZHY0KCksXG5cdFx0XHRuYW1lOiBrZXksXG5cdFx0XHR2YWx1ZToga2V5WzFdLFxuXHRcdFx0aW5kZXg6IGluZGV4LFxuXHRcdH07XG5cdH1cbik7XG5cblxuXG5leHBvcnQgY29uc3QgZ2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUgPSAoXG5cdGNsYXNzTmFtZTogc3RyaW5nLFxuXHRpdGVtSWRQb3NpdGlvbjogSXRlbUlkUG9zaXRpb25UeXBlXG4pOiBJdGVtSWRQb3NpdGlvblR5cGUgPT4ge1xuXHQvLyBDaGVjayBjbGFzc05hbWUgaW5jbHVkZXMgJ2l0ZW1JZCBwb3BvdmVyJywgaWYgbm90IHJldHVybiBjbGFzc05hbWUgYW5kIHdhcm5cblx0aWYgKCFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtSWQgcG9wb3ZlclwiKSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiRnVuY3Rpb24gZ2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUgY2FsbGVkIHdoZW4gJ2l0ZW1JZCBwb3BvdmVyJyBub3QgaW4gZ2l2ZW4gY2xhc3NOYW1lXCJcblx0XHQpO1xuXHRcdHJldHVybiBjbGFzc05hbWU7XG5cdH1cblx0Ly8gT3ZlciB3cml0ZSBnaXZlbiBjbGFzc05hbWVcblx0Y2xhc3NOYW1lID0gXCJpdGVtSWQgcG9wb3ZlclwiO1xuXHRzd2l0Y2ggKGl0ZW1JZFBvc2l0aW9uKSB7XG5cdFx0Y2FzZSBcImxlZnRcIjpcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tbGVmdFwiLCBcIlwiKSArIFwiIHBvc2l0aW9uLWxlZnRcIjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJyaWdodFwiOlxuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi1yaWdodFwiLCBcIlwiKSArIFwiIHBvc2l0aW9uLXJpZ2h0XCI7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwidG9wLWxlZnRcIjpcblx0XHRcdGNsYXNzTmFtZSA9XG5cdFx0XHRcdGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tdG9wLWxlZnRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi10b3AtbGVmdFwiO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcInRvcC1yaWdodFwiOlxuXHRcdFx0Y2xhc3NOYW1lID1cblx0XHRcdFx0Y2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi10b3AtcmlnaHRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi10b3AtcmlnaHRcIjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJib3R0b20tbGVmdFwiOlxuXHRcdFx0Y2xhc3NOYW1lID1cblx0XHRcdFx0Y2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi1ib3R0b20tbGVmdFwiLCBcIlwiKSArIFwiIHBvc2l0aW9uLWJvdHRvbS1sZWZ0XCI7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiYm90dG9tLXJpZ2h0XCI6XG5cdFx0XHRjbGFzc05hbWUgPVxuXHRcdFx0XHRjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLWJvdHRvbS1yaWdodFwiLCBcIlwiKSArXG5cdFx0XHRcdFwiIHBvc2l0aW9uLWJvdHRvbS1yaWdodFwiO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3NOYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1bXBJdGVtTmFtZXMgPSBwdW1wSXRlbUxpc3QubWFwKChrZXksIGluZGV4KSA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKGBJbiBidWlsZCBJdGVtTmFtZXMgbmFtZSAke2tleX0gaW5kZXggJHtpbmRleH1gKTtcblx0cmV0dXJuIHtcblx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdG5hbWU6IGtleSxcblx0XHRpbmRleDogaW5kZXgsXG5cdH07XG59KTtcbmNvbnN0IGdldFB1bXBDb25maWd1cmF0aW9uID0gKHB1bXBUeXBlOiBQdW1wVHlwZSk6IG51bWJlciA9PiB7XG5cdHN3aXRjaCAocHVtcFR5cGUpIHtcblx0XHRjYXNlIFwiY2VudHJpZnVnYWxcIjpcblx0XHRcdHJldHVybiAxO1xuXHRcdGNhc2UgXCJkaWFwaHJhZ21cIjpcblx0XHRcdHJldHVybiAxO1xuXHRcdGNhc2UgXCJwb3NpdGl2ZS1kaXNwbGFjbWVudFwiOlxuXHRcdFx0cmV0dXJuIDE7XG5cdFx0Y2FzZSBcInByb2dyZXNzaXZlLWNhdml0eVwiOlxuXHRcdFx0cmV0dXJuIDE7XG5cdFx0Y2FzZSBcImdlYXJcIjpcblx0XHRcdHJldHVybiAzO1xuXHRcdGNhc2UgXCJsaXF1aWQtcmluZ1wiOlxuXHRcdFx0cmV0dXJuIDM7XG5cdFx0Y2FzZSBcInBvc2l0aXZlLXNjcmV3XCI6XG5cdFx0XHRyZXR1cm4gMztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgRXJyb3IoYEluIGdldFB1bXBDb25maWd1cmF0aW9uKCkgcHVtcCB0eXBlOiAke3B1bXBUeXBlfSBub3QgZm91bmRgKTtcblx0fVxufTtcbmV4cG9ydCBjb25zdCBnZXRQdW1wSXRlbUNsYXNzTmFtZSA9IChcblx0aW5kZXg6IG51bWJlcixcblx0cHVtcFR5cGU6IFB1bXBUeXBlLFxuXHRzdGF0dXM/OiBQdW1wU3RhdGVcbik6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBnZXRQdW1wQ29uZmlndXJhdGlvbihwdW1wVHlwZSk7XG5cdGxldCBjbGFzc05hbWUgPSBcIlwiO1xuXHQvLyBIYW5kbGUgdGhlIGZhY3QgdGhhdCBBY3RpdmF0ZWRDb25maWcgYW5kIERlYWN0aXZhdGVkQ29uZmlnIGFyZSBvcHRpb25hbCBhbmQgbWF5YmUgdW5kZWZpbmVkXG5cdGlmIChpbmRleCA8IDIpIHtcblx0XHRpZiAoZ2V0Qm9vbEF0SW5kZXgoY29uZmlndXJhdGlvbiwgaW5kZXgpKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBgc2hvdyBpdGVtICR7cHVtcFR5cGV9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNsYXNzTmFtZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQdW1wU3RhdHVzQ2xhc3NOYW1lcyA9IChcblx0Y2xhc3NOYW1lOiBzdHJpbmcsXG5cdHN0YXR1czogUHVtcFN0YXRlXG4pID0+IHtcblx0Ly8gQWRkaXRpb25zIHRvIHRoZSBjbGFzc05hbWVcblx0Ly8gY29uc29sZS5sb2coYHN0YXR1czogJHtKU09OLnN0cmluZ2lmeShzdGF0dXMsbnVsbCwgMil9YCk7XG5cblx0aWYgKGNsYXNzTmFtZS5pbmNsdWRlcyhcInNob3dcIikgJiYgIWNsYXNzTmFtZS5pbmNsdWRlcyhcIml0ZW1cIikpIHtcblx0XHRpZiAoc3RhdHVzPy5hbGFybSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJhbGFybVwiLCBcIlwiKSArIFwiIGFsYXJtXCI7XG5cdFx0fVxuXHRcdGlmIChzdGF0dXM/LmNoYW5naW5nKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImNoYW5naW5nXCIsIFwiXCIpICsgXCIgY2hhbmdpbmdcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8ubWFudWFsKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIm1hbnVhbFwiLCBcIlwiKSArIFwiIG1hbnVhbFwiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5tYXNrZWQgJiYgIXN0YXR1cy5hbGFybSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJuby1hbGFybS1tYXNrXCIsIFwiXCIpICsgXCIgbm8tYWxhcm0tbWFza1wiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5tYXNrZWQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibWFza2VkXCIsIFwiXCIpICsgXCIgbWFza2VkXCI7XG5cdFx0fVxuXHRcdGlmIChzdGF0dXM/LmFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGFjdGl2YXRlZFwiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5kZUFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgZGVhY3RpdmF0ZWRcIjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNsYXNzTmFtZTtcbn07XG4iLCIvKipcbiAqIEhNSSBDb21wb25lbnQgLSBIZWF0IEV4Y2hhbmdlciB0eXBlcyBkZWZzXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRQcm9wcyB9IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEl0ZW1JZFBvc2l0aW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9hcGkvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEhYX0NPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLkhlYXRFeGNoYW5nZXJcIjtcblxuY29uc3QgSGVhdEV4Y2hhbmdlclR5cGVzID0gW1xuXHRcInBsYXRlXCIsXG5cdFwidHViZWxhclwiLFxuXTtcbmV4cG9ydCB0eXBlIEhlYXRFeGNoYW5nZXJUeXBlcyA9ICh0eXBlb2YgSGVhdEV4Y2hhbmdlclR5cGVzKVtudW1iZXJdO1xuZXhwb3J0IGVudW0gSHhNb2RlcyB7XG5cdGFsYXJtID0gXCJhbGFybVwiLFxuXHRoZWF0aW5nID0gXCJoZWF0aW5nXCIsXG5cdGNvb2xpbmcgPSBcImNvb2xpbmdcIixcbn07XG5cblxuZXhwb3J0IHR5cGUgSHhQcm9wcyA9IHtcblx0dHlwZT86IEhlYXRFeGNoYW5nZXJUeXBlcztcblx0aXRlbU5hbWU/OiBzdHJpbmc7XG5cdG1vZGU/OiBIeE1vZGVzW2tleW9mIEh4TW9kZXNdO1xuXHRsb2NhdGU/OiBib29sZWFuO1xuXHRzaG93TGFiZWw/OiBib29sZWFuO1xuXHRsYWJlbFBvc2l0aW9uPzogSXRlbUlkUG9zaXRpb25UeXBlXG59XG5cbmV4cG9ydCBjb25zdCBIeEl0ZW1MaXN0ID0gW1xuXHRcIml0ZW0tMVwiLFxuXHRcIml0ZW0tMlwiLFxuXHRcIml0ZW0tM1wiLFxuXHRcIml0ZW0tNFwiLFxuXHRcIml0ZW0tNVwiLFxuXHRcIml0ZW0tNlwiLFxuXHRcIml0ZW0tN1wiLFxuXHRcImJhc2UtMVwiLFxuXHRcImxvY2F0ZVwiLFxuXVxuZXhwb3J0IHR5cGUgSHhJdGVtcyA9ICh0eXBlb2YgSHhJdGVtTGlzdClbbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgSHhDb21wb3VuZENvbnRleHRUeXBlID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHRpdGVtUHJvcHM6IEh4UHJvcHM7XG5cdG9uQWN0aW9uUGVyZm9ybWVkOiAoKSA9PiB2b2lkO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcbiIsIi8qKlxuICogSE1JIENvbXBvbmVudCAtIEhlYXQgRXhjaGFuZ2VyIC0gUGxhdGUgVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuaW1wb3J0IHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IEh4SXRlbUxpc3QsIHR5cGUgSGVhdEV4Y2hhbmdlclR5cGVzLCB0eXBlIEh4TW9kZXMgfSBmcm9tICcuLi8uLi8uLi9hci10eXBlcy9wcm9jZXNzT2JqZWN0cy9oZWF0RXhjaGFuZ2Vycy9oeC10eXBlcydcbmltcG9ydCB7IGdldEJvb2xBdEluZGV4IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbnVtYmVyVXRpbCc7XG5leHBvcnQgY29uc3QgaHhJdGVtTmFtZXMgPSBIeEl0ZW1MaXN0Lm1hcChcblx0KGtleSwgaW5kZXgpID0+IHtcblx0XHQvLyBjb25zb2xlLmxvZyhgSW4gYnVpbGQgSXRlbU5hbWVzIG5hbWUgJHtrZXl9IGluZGV4ICR7aW5kZXh9YCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGtleTogdXVpZHY0KCksXG5cdFx0XHRuYW1lOiBrZXksXG5cdFx0XHRpbmRleDogaW5kZXgsXG5cdFx0fTtcblx0fVxuKTtcblxuY29uc3QgZ2V0SHhDb25maWd1cmF0aW9uID0gKHR5cGU6IEhlYXRFeGNoYW5nZXJUeXBlcyk6bnVtYmVyID0+e1xuXHRzd2l0Y2ggKHR5cGUpe1xuXHRcdGNhc2UgXCJwbGF0ZVwiOlxuXHRcdFx0cmV0dXJuIDFcblx0XHRjYXNlIFwidHViZWxhclwiOlxuXHRcdFx0cmV0dXJuIDFcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgRXJyb3IoYEluIGdldFB1bXBDb25maWd1cmF0aW9uKCkgcHVtcCB0eXBlOiAke3R5cGV9IG5vdCBmb3VuZGApXG5cdH1cbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0SHhJdGVtQ2xhc3NOYW1lID0gKFxuXHRpbmRleDogbnVtYmVyLFxuXHR0eXBlOiBIZWF0RXhjaGFuZ2VyVHlwZXMsXG5cdG1vZGU/OiBIeE1vZGVzW2tleW9mIEh4TW9kZXNdLFxuXHQpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBjb25maWd1cmF0aW9uID0gZ2V0SHhDb25maWd1cmF0aW9uKHR5cGUpXG5cdGxldCBjbGFzc05hbWUgPSBcIlwiO1xuXHQvLyBIYW5kbGUgdGhlIGZhY3QgdGhhdCBBY3RpdmF0ZWRDb25maWcgYW5kIERlYWN0aXZhdGVkQ29uZmlnIGFyZSBvcHRpb25hbCBhbmQgbWF5YmUgdW5kZWZpbmVkXG5cdGlmIChpbmRleCA8IDIpIHtcblx0XHRpZiAoZ2V0Qm9vbEF0SW5kZXgoY29uZmlndXJhdGlvbiwgaW5kZXgpKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBgc2hvdyBpdGVtICR7dHlwZX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2xhc3NOYW1lO1xufVxuZXhwb3J0IGNvbnN0IGdldEh4TW9kZUNsYXNzTmFtZXMgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIG1vZGU6IEh4TW9kZXNba2V5b2YgSHhNb2Rlc10pPT57XG5cdC8vIEFkZGl0aW9ucyB0byB0aGUgY2xhc3NOYW1lXG5cblx0aWYgKGNsYXNzTmFtZS5pbmNsdWRlcyhcInNob3dcIikgJiYgIWNsYXNzTmFtZS5pbmNsdWRlcyhcIml0ZW1cIikpIHtcblxuXHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0Y2FzZSBcImFsYXJtXCI6XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWxhcm1TdGF0ZVwiLCBcIlwiKSArIFwiIEFsYXJtU3RhdGVcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiaGVhdGluZ1wiOlxuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImhlYXRpbmdcIiwgXCJcIikgKyBcIiBoZWF0aW5nXCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNvb2xpbmdcIjpcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJjb29saW5nXCIsIFwiXCIpICsgXCIgY29vbGluZ1wiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0cmV0dXJuIGNsYXNzTmFtZTtcbn07XG5cbmV4cG9ydCBjb25zdCBidWlsZENvbXBvbmVudEVsZW1lbnRzID0gKFxuXHRiYXNlRWxlbWVudHM6IG51bWJlcixcblx0ZHluYW1pY0VsZW1lbnRzOiBudW1iZXJcbikgPT4ge1xuXHRsZXQgdmFsdWU9W107XG5cdGZvciAobGV0IGk9MDsgaTwgYmFzZUVsZW1lbnRzK2R5bmFtaWNFbGVtZW50czsgaSsrKXtcblx0XHRsZXQgaXRlbSA9IHtcblx0XHRcdGtleTogdXVpZHY0KCksXG5cdFx0XHRuYW1lOiBpIDwgYmFzZUVsZW1lbnRzID8gYGJhc2UtJHtpKzF9YCA6IGBkeW5hbWljLSR7aSsoMS1keW5hbWljRWxlbWVudHMpfWAsXG5cdFx0XHRpbmRleDogaVxuXHRcdH07XG5cdFx0dmFsdWUucHVzaChpdGVtKTtcblx0fVxuXHRsZXQgaXRlbSA9IHtcblx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdG5hbWU6IFwibG9jYXRlXCIsXG5cdFx0aW5kZXg6IGJhc2VFbGVtZW50cytkeW5hbWljRWxlbWVudHMrMVxuXHR9O1xuXHQvLyBsb2NhdGUgYWx3YXlzIGxhc3QgZWxlbWVudFxuXHR2YWx1ZS5wdXNoKGl0ZW0pXG5cdHJldHVybiB2YWx1ZVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0eXBlIENvbW1hbmRWYWx2ZU1wUHJvcHMgfSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG4vLyBpbXBvcnQgeyBJY29uQXV0bywgSWNvbkhhbmRDbGljayB9IGZyb20gJy4uL3V0aWxzL2ljb25zJztcbmltcG9ydCB7IFByb3BlcnR5VHJlZSB9IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjsgLy8nQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50Jztcbi8vIGltcG9ydCB7IGluaXRpYWxDb250cm9sU3RhdGUgfSBmcm9tIFwiLi4vYXBpL2luaXRpYWxTdGF0ZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIgfSBmcm9tIFwiLi4vYXBpL2hvb2tzXCI7XG5pbXBvcnQge1xuXHRITUlfQ09NUE9ORU5UX0NMQVNTLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTixcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1csXG5cdElBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUixcblx0Q09NTUFORF9WQUxWRV9NUF9DT01QT05FTlRfVFlQRSxcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBDT01NQU5EX1ZBTFZFX01QX0NPTVBPTkVOVF9UWVBFO1xuXG5jb25zdCBhcmVFcXVhbCA9IChcblx0cHJldlByb3BzOiBDb21wb25lbnRQcm9wczxDb21tYW5kVmFsdmVNcFByb3BzPixcblx0bmV4dFByb3BzOiBDb21wb25lbnRQcm9wczxDb21tYW5kVmFsdmVNcFByb3BzPlxuKSA9PiB7XG5cdC8vIHJldHVybiB0cnVlIGlmIHByb3BzIGFyZSBlcXVhbCwgZmFsc2UgaWYgcmUtcmVuZGVyIGlzIG5lZWRlZFxuXHRyZXR1cm4gcHJldlByb3BzLnByb3BzID09PSBuZXh0UHJvcHMucHJvcHM7XG59O1xuXG4vKipcbiAqIFZhbHZlIGNvbXBvbmVudCBjbGFzcy5cbiAqIEV4dGVuZHMgdGhlIGJhc2UgQ29tcG9uZW50IGNsYXNzIGZyb20gUGVyc3BlY3RpdmUsIHR5cGVkIHdpdGggVmFsdmVQcm9wcy5cbiAqIFByb3ZpZGVzIGEgY3VzdG9taXphYmxlIHZhbHZlIHdpdGggcHJvcGVyIGhhbmRsaW5nIG9mIGRlc2lnbmVyL3ByZXZpZXcgbW9kZXMuXG5cbiAqL1xuZXhwb3J0IGNvbnN0IENvbW1hbmRWYWx2ZU1wID0gUmVhY3QubWVtbyhcblx0KHByb3BzOiBDb21wb25lbnRQcm9wczxDb21tYW5kVmFsdmVNcFByb3BzPikgPT4ge1xuXHRcdGNvbnN0IHsgc3RhdGUsIHJlZHVjZXIgfSA9IHVzZVZhbHZlTXBDb21tYW5kUmVkdWNlcigpO1xuXHRcdGNvbnN0IHsgZW1pdCB9ID0gcHJvcHM7XG5cblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdFx0Ly8gU3Vic2NyaWJlIHRvIGNoYW5nZXMgb24gdGhlIFwiY29tbWFuZFwiIHByb3BlcnR5XG5cdFx0XHRjb25zdCB1bnN1YnNjcmliZSA9IHByb3BzLnN0b3JlLnByb3BzLnN1YnNjcmliZSgodHJlZTogUHJvcGVydHlUcmVlKSA9PiB7XG5cdFx0XHRcdC8vIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW5ldmVyIFwiY29tbWFuZFwiIGNoYW5nZXNcblx0XHRcdFx0Y29uc3QgY29tbWFuZCA9IHRyZWUucmVhZChcImNvbW1hbmRcIik7XG5cdFx0XHRcdGNvbnN0IHsgbWFpbiwgdXBwZXJTZWF0LCBsb3dlclNlYXQgfSA9IGNvbW1hbmQ7XG5cdFx0XHRcdC8vIFlvdSBjYW4gdXBkYXRlIGxvY2FsIHN0YXRlIG9yIHBlcmZvcm0gb3RoZXIgYWN0aW9ucyBoZXJlXG5cdFx0XHRcdC8vIFVwZGF0ZSBtYWluIHN0YXRlIGlmIG5lZWRlZFxuXHRcdFx0XHRpZiAoc3RhdGUuY29tbWFuZD8ubWFpbiAmJiBtYWluKSB7XG5cdFx0XHRcdFx0aWYgKG1haW4uYXV0b01hbnVhbCAhPT0gc3RhdGUuY29tbWFuZC5tYWluLmF1dG9NYW51YWwpIHtcblx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlQXV0b01hblNlbGVjdGlvbihcblx0XHRcdFx0XHRcdFx0IW1haW4uYXV0b01hbnVhbCA/IFwiYXV0b1wiIDogXCJtYW51YWxcIlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG1haW4uYWN0aXZhdGlvbiAhPT0gc3RhdGUuY29tbWFuZC5tYWluLmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdGlmICghbWFpbi5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlTWFpbk1hbnVhbE9mZigpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChtYWluLmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVNYWluTWFudWFsT24oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBVcGRhdGUgbG93ZXJTZWF0IHN0YXRlIGlmIG5lZWRlZFxuXHRcdFx0XHRpZiAoc3RhdGUuY29tbWFuZD8ubG93ZXJTZWF0ICYmIGxvd2VyU2VhdCkge1xuXHRcdFx0XHRcdGlmIChsb3dlclNlYXQuYWN0aXZhdGlvbiAhPT0gc3RhdGUuY29tbWFuZC5sb3dlclNlYXQuYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0aWYgKCFsb3dlclNlYXQuYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZUxzbE1hbnVhbE9mZigpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChsb3dlclNlYXQuYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZUxzbE1hbnVhbE9uKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFVwZGF0ZSB1cHBlclNlYXQgc3RhdGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmIChzdGF0ZS5jb21tYW5kPy51cHBlclNlYXQgJiYgdXBwZXJTZWF0KSB7XG5cdFx0XHRcdFx0aWYgKHVwcGVyU2VhdC5hY3RpdmF0aW9uICE9PSBzdGF0ZS5jb21tYW5kLnVwcGVyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXVwcGVyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlVXNsTWFudWFsT2ZmKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHVwcGVyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlVXNsTWFudWFsT24oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRpZiAodHlwZW9mIHVuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHR1bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH0sIFtwcm9wcy5zdG9yZS5wcm9wc10pO1xuXG5cdFx0Y29uc3QgeyBtYWluLCB1cHBlclNlYXQsIGxvd2VyU2VhdCwgaW50ZXJsb2NrcyB9ID0gc3RhdGUuY29tbWFuZCB8fCB7fTtcblxuXHRcdGNvbnN0IGlzSW50ZXJsb2NrZWQgPSAoaW50ZXJsb2NrczogYm9vbGVhbltdKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRyZXR1cm4gaW50ZXJsb2Nrcy5pbmNsdWRlcyh0cnVlLCAwKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgaGFuZGxlTWFpbkF1dG9NYW51YWxTZWxlY3Rpb24gPSAobW9kZTogXCJhdXRvXCIgfCBcIm1hbnVhbFwiKTogdm9pZCA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZUF1dG9NYW5TZWxlY3Rpb24obW9kZSk7XG5cdFx0XHRpZiAobW9kZSA9PT0gXCJhdXRvXCIpIHtcblx0XHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC5tYWluLmF1dG9NYW51YWxcIiwgZmFsc2UpOyAvLyBmYWxzZSA9IGF1dG9cblx0XHRcdH0gZWxzZSBpZiAobW9kZSA9PT0gXCJtYW51YWxcIikge1xuXHRcdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLm1haW4uYXV0b01hbnVhbFwiLCB0cnVlKTsgLy8gdHJ1ZSA9IG1hbnVhbFxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBoYW5kbGVNYWluTWFudWFsT24gPSAoKSA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZU1haW5NYW51YWxPbigpO1xuXHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC5tYWluLmFjdGl2YXRpb25cIiwgdHJ1ZSk7XG5cdFx0fTtcblx0XHRjb25zdCBoYW5kbGVNYWluTWFudWFsT2ZmID0gKCkgPT4ge1xuXHRcdFx0cmVkdWNlci51cGRhdGVNYWluTWFudWFsT2ZmKCk7XG5cdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLm1haW4uYWN0aXZhdGlvblwiLCBmYWxzZSk7XG5cdFx0fTtcblx0XHRjb25zdCBoYW5kbGVVc2xNYW51YWxPbiA9ICgpID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlVXNsTWFudWFsT24oKTtcblx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQudXBwZXJTZWF0LmFjdGl2YXRpb25cIiwgdHJ1ZSk7XG5cdFx0fTtcblx0XHRjb25zdCBoYW5kbGVVc2xNYW51YWxPZmYgPSAoKSA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZVVzbE1hbnVhbE9mZigpO1xuXHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC51cHBlclNlYXQuYWN0aXZhdGlvblwiLCBmYWxzZSk7XG5cdFx0fTtcblx0XHRjb25zdCBoYW5kbGVMc2xNYW51YWxPbiA9ICgpID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlTHNsTWFudWFsT24oKTtcblx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQubG93ZXJTZWF0LmFjdGl2YXRpb25cIiwgdHJ1ZSk7XG5cdFx0fTtcblx0XHRjb25zdCBoYW5kbGVMc2xNYW51YWxPZmYgPSAoKSA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZUxzbE1hbnVhbE9mZigpO1xuXHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC5sb3dlclNlYXQuYWN0aXZhdGlvblwiLCBmYWxzZSk7XG5cdFx0fTtcblx0XHRjb25zdCBjb21wb25lbnRDbGFzc05hbWUgPSBcImNvbW1hbmQtdmFsdmUtbXAgaG1pLWNvbW1hbmQtdmFsdmUtbXBfX2dyaWRcIjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHR7Li4uZW1pdCh7XG5cdFx0XHRcdFx0Y2xhc3NlczogW2Ake0lBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OfWBdLFxuXHRcdFx0XHR9KX1cblx0XHRcdFx0ZGF0YS1jb21wb25lbnQ9e0NPTVBPTkVOVF9UWVBFfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1d9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUn1gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtITUlfQ09NUE9ORU5UX0NMQVNTfS0ke2NvbXBvbmVudENsYXNzTmFtZX1gfT5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cIm1haW4tbGFiZWxcIj57bWFpbj8ubGFiZWx9PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdHJvbGU9XCJncm91cFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIG91dGxpbmVkIG1haW4tYXV0by1tYW51YWxcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFtYWluPy5hdXRvTWFudWFsID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17aXNJbnRlcmxvY2tlZChpbnRlcmxvY2tzPy5tYWluIHx8IFtdKX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZU1haW5BdXRvTWFudWFsU2VsZWN0aW9uKFwiYXV0b1wiKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRBdXRvIHsvKiA8SWNvbkF1dG8gLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1haW4/LmF1dG9NYW51YWwgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc0ludGVybG9ja2VkKGludGVybG9ja3M/Lm1haW4gfHwgW10pfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlTWFpbkF1dG9NYW51YWxTZWxlY3Rpb24oXCJtYW51YWxcIil9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0TWFudWFsXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPEljb25IYW5kQ2xpY2sgLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHJvbGU9XCJncm91cFwiIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBvdXRsaW5lZCBtYWluLW9uLW9mZlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYWluPy5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzSW50ZXJsb2NrZWQoaW50ZXJsb2Nrcz8ubWFpbiB8fCBbXSkgfHwgIW1haW4/LmF1dG9NYW51YWxcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU1haW5NYW51YWxPbn1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRPbiB7LyogPEljb25BdXRvIC8+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQhbWFpbj8uYWN0aXZhdGlvbiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0ludGVybG9ja2VkKGludGVybG9ja3M/Lm1haW4gfHwgW10pIHx8ICFtYWluPy5hdXRvTWFudWFsXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVNYWluTWFudWFsT2ZmfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdE9mZlxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxJY29uSGFuZENsaWNrIC8+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInVwcGVyLXNlYXQtbGFiZWxcIj57dXBwZXJTZWF0Py5sYWJlbH08L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0cm9sZT1cImdyb3VwXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgb3V0bGluZWQgdXBwZXItc2VhdC1vbi1vZmZcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVwcGVyU2VhdD8uYWN0aXZhdGlvbiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0ludGVybG9ja2VkKGludGVybG9ja3M/LnVwcGVyU2VhdCB8fCBbXSkgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0IW1haW4/LmF1dG9NYW51YWxcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVVzbE1hbnVhbE9ufVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdE9uIHsvKiA8SWNvbkF1dG8gLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCF1cHBlclNlYXQ/LmFjdGl2YXRpb24gPyBcInNlbGVjdGVkXCIgOiBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNJbnRlcmxvY2tlZChpbnRlcmxvY2tzPy51cHBlclNlYXQgfHwgW10pIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFtYWluPy5hdXRvTWFudWFsXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVVc2xNYW51YWxPZmZ9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0T2ZmXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPEljb25IYW5kQ2xpY2sgLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwibG93ZXItc2VhdC1sYWJlbFwiPntsb3dlclNlYXQ/LmxhYmVsfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRyb2xlPVwiZ3JvdXBcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBvdXRsaW5lZCBsb3dlci1zZWF0LW9uLW9mZlwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bG93ZXJTZWF0Py5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzSW50ZXJsb2NrZWQoaW50ZXJsb2Nrcz8ubG93ZXJTZWF0IHx8IFtdKSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQhbWFpbj8uYXV0b01hbnVhbFxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTHNsTWFudWFsT259XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0T24gey8qIDxJY29uQXV0byAvPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IWxvd2VyU2VhdD8uYWN0aXZhdGlvbiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0ludGVybG9ja2VkKGludGVybG9ja3M/Lmxvd2VyU2VhdCB8fCBbXSkgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0IW1haW4/LmF1dG9NYW51YWxcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUxzbE1hbnVhbE9mZn1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtcInRydWVcIn1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRPZmZcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8SWNvbkhhbmRDbGljayAvPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRhcmVFcXVhbFxuKTtcblxuLy8gVGhpcyBpcyB0aGUgYWN0dWFsIHRoaW5nIHRoYXQgZ2V0cyByZWdpc3RlcmVkIHdpdGggdGhlIGNvbXBvbmVudCByZWdpc3RyeS5cbmV4cG9ydCBjbGFzcyBDb21tYW5kVmFsdmVNcE1ldGEgaW1wbGVtZW50cyBDb21wb25lbnRNZXRhIHtcblx0Z2V0Q29tcG9uZW50VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBDT01QT05FTlRfVFlQRTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyBUaGUgUmVhY3QgY29tcG9uZW50IGNsYXNzLlxuXHQgKi9cblx0Z2V0Vmlld0NvbXBvbmVudCgpOiBQQ29tcG9uZW50IHtcblx0XHRyZXR1cm4gQ29tbWFuZFZhbHZlTXA7XG5cdH1cblxuXHRnZXREZWZhdWx0U2l6ZSgpOiBTaXplT2JqZWN0IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IDI4MCxcblx0XHRcdGhlaWdodDogMTQwLFxuXHRcdH07XG5cdH1cblxuXHQvLyBJbnZva2VkIHdoZW4gYW4gdXBkYXRlIHRvIHRoZSBQcm9wZXJ0eVRyZWUgaGFzIG9jY3VycmVkLFxuXHQvLyBlZmZlY3RpdmVseSBtYXBwaW5nIHRoZSB2YWx2ZVN0YXR1cyBvZiB0aGUgdHJlZSB0byBjb21wb25lbnQgcHJvcHMuXG5cdGdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBDb21tYW5kVmFsdmVNcFByb3BzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29tbWFuZDoge1xuXHRcdFx0XHRpbnRlcmxvY2tzOiB7XG5cdFx0XHRcdFx0bWFpbjogdHJlZS5yZWFkQXJyYXkoXCJjb21tYW5kLmludGVybG9ja3MubWFpblwiKSxcblx0XHRcdFx0XHR1cHBlclNlYXQ6IHRyZWUucmVhZEFycmF5KFwiY29tbWFuZC5pbnRlcmxvY2tzLnVwcGVyU2VhdFwiKSxcblx0XHRcdFx0XHRsb3dlclNlYXQ6IHRyZWUucmVhZEFycmF5KFwiY29tbWFuZC5pbnRlcmxvY2tzLmxvd2VyU2VhdFwiKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0bWFpbjoge1xuXHRcdFx0XHRcdGxhYmVsOiB0cmVlLnJlYWRTdHJpbmcoXCJjb21tYW5kcy5tYWluLmxhYmVsXCIsIFwiXCIpLFxuXHRcdFx0XHRcdGF1dG9NYW51YWw6IHRyZWUucmVhZEJvb2xlYW4oXCJjb21tYW5kLm1haW4uYXV0b01hbnVhbFwiLCBmYWxzZSksXG5cdFx0XHRcdFx0YWN0aXZhdGlvbjogdHJlZS5yZWFkQm9vbGVhbihcImNvbW1hbmQubWFpbi5hY3RpdmF0aW9uXCIsIGZhbHNlKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0dXBwZXJTZWF0OiB7XG5cdFx0XHRcdFx0bGFiZWw6IHRyZWUucmVhZFN0cmluZyhcImNvbW1hbmRzLnVwcGVyU2VhdC5sYWJlbFwiLCBcIlwiKSxcblx0XHRcdFx0XHRhY3RpdmF0aW9uOiB0cmVlLnJlYWRCb29sZWFuKFwiY29tbWFuZC51cHBlclNlYXQuYWN0aXZhdGlvblwiLCBmYWxzZSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxvd2VyU2VhdDoge1xuXHRcdFx0XHRcdGxhYmVsOiB0cmVlLnJlYWRTdHJpbmcoXCJjb21tYW5kcy5sb3dlclNlYXQubGFiZWxcIiwgXCJcIiksXG5cdFx0XHRcdFx0YWN0aXZhdGlvbjogdHJlZS5yZWFkQm9vbGVhbihcImNvbW1hbmQubG93ZXJTZWF0LmFjdGl2YXRpb25cIiwgZmFsc2UpLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9O1xuXHR9XG59XG5cbi8qKlxuICpcbmdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBNeVByb3BUeXBlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyB3aWxsIGdpdmUgdGhlIHByb3BlcnR5IHRyZWUgYXMgYSBwbGFpbiBqcyBvYmplY3QsIGluc3RlYWQgb2YgYW4gaW5zdGFuY2Ugb2YgUHJvcGVydHlUcmVlXG4gICAgICAgIC8vIHRoaXMgd291bGQgbGV0IHlvdSByZWFkIHRoZSB2YWx1ZSBvZiB0aGUgdHJlZSB2aWEgYHRoaXMucHJvcHMucHJvcHMuanNvbmAuICBTYW1lIHJlc3VsdCBvY2N1cnMgaWZcbiAgICAgICAgLy8gY2FsbGluZyB0cmVlLnJlYWQoKSwgd2l0aG91dCBwYXNzaW5nIGEgcGF0aCBwYXJhbWV0ZXIuXG4gICAgICAganNvbjogdHJlZS50b1BsYWluT2JqZWN0KClcblxuXG4gICAgICAgLy8gSWYgeW91IGhhZCB0byB3cml0ZSB0byB0aGUgdHJlZSdzICdkYXRhJyBub2RlLCBwYXNzaW5nIGluIGEgY2FsbGJhY2sgZnVuY3Rpb24gaW5zdGVhZCBvZiB0aGUgYWN0dWFsXG4gICAgICAgLy8gUHJvcGVydHlUcmVlIHdpbGwgc2ltcGxpZnkgdW5pdCB0ZXN0YWJpbGl0eSBvZiB5b3VyIGNvbXBvbmVudCBvdXRzaWRlIG9mIHBlcnNwZWN0aXZlJ3MgZW52aXJvbm1lbnQuXG4gICAgICAgLy8gWW91IHdvdWxkIGNhbGwgdGhpcyB2aWEgdGhpcy5wcm9wcy5wcm9wcy53cml0ZURhdGEoc29tZU5ld0RhdGEpXG4gICAgICAgd3JpdGVEYXRhOiAobmV3SnNvbikgLT4gdHJlZS53cml0ZShcImRhdGFcIiwgbmV3SnNvbilcbiAgICB9XG59XG4gKi9cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSXRlbUlkUG9zaXRpb25UeXBlfSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5cbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0UHJvcGVydHlUcmVlLFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbXBvbmVudFByb3BzLFxuXHRDb21wb25lbnRNZXRhLFxuXHRQQ29tcG9uZW50LFxuXHRTaXplT2JqZWN0LFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7IC8vJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG5pbXBvcnQgdHlwZSB7IEh4UHJvcHMgfSBmcm9tIFwiLi4vYXItdHlwZXMvcHJvY2Vzc09iamVjdHMvaGVhdEV4Y2hhbmdlcnMvaHgtdHlwZXNcIjtcbmltcG9ydCB7IEhlYXRFeGNoYW5nZXJDb21wb3VuZCB9IGZyb20gXCIuL3Byb2Nlc3Mtb2JqZWN0cy9oZWF0LWV4Y2hhbmdlcnMvSGVhdEV4Y2hhbmdlckNvbXBvdW5kXCI7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5IZWF0RXhjaGFuZ2VyXCI7XG5cbi8qKlxuICogVmFsdmUgY29tcG9uZW50IGNsYXNzLlxuICogRXh0ZW5kcyB0aGUgYmFzZSBDb21wb25lbnQgY2xhc3MgZnJvbSBQZXJzcGVjdGl2ZSwgdHlwZWQgd2l0aCBWYWx2ZVByb3BzLlxuICogUHJvdmlkZXMgYSBjdXN0b21pemFibGUgdmFsdmUgd2l0aCBwcm9wZXIgaGFuZGxpbmcgb2YgZGVzaWduZXIvcHJldmlldyBtb2Rlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEhlYXRFeGNoYW5nZXIgZXh0ZW5kcyBDb21wb25lbnQ8Q29tcG9uZW50UHJvcHM8SHhQcm9wcz4sIGFueT4ge1xuXHR2YWx2ZVJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wczogQ29tcG9uZW50UHJvcHM8SHhQcm9wcz4pIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy52YWx2ZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblx0fVxuXG5cdC8vIFRoaXMgaXMgYSBsaWZlY3ljbGUgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBtb3VudGVkIHRvIHRoZSBET00uXG5cdGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuXHRcdC8vIE5vIG5lZWQgdG8gaW5pdGlhbGl6ZSB2YWx2ZVJlZiBoZXJlXG5cdH1cblx0dHlwZSA9IHRoaXMucHJvcHMucHJvcHMudHlwZTtcblx0aXRlbU5hbWUgPSB0aGlzLnByb3BzLnByb3BzLml0ZW1OYW1lO1xuXHRtb2RlID0gdGhpcy5wcm9wcy5wcm9wcy5tb2RlO1xuXHRsb2NhdGUgPSB0aGlzLnByb3BzLnByb3BzLmxvY2F0ZTtcblx0c2hvd0xhYmVsOiBib29sZWFuID0gdGhpcy5wcm9wcy5wcm9wcy5zaG93TGFiZWwgfHwgZmFsc2U7XG5cdGxhYmVsUG9zaXRpb246IEl0ZW1JZFBvc2l0aW9uVHlwZSA9IHRoaXMucHJvcHMucHJvcHMubGFiZWxQb3NpdGlvbiB8fCBcImxlZnRcIjtcblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIGNvbXBvbmVudCdzIGFjdGlvbiBldmVudC5cblx0ICovXG5cdG9uQWN0aW9uUGVyZm9ybWVkID0gKCkgPT4ge1xuXHRcdC8vIElmIHRoZSBkZXNpZ25lciBpcyBpbiBcImRlc2lnblwiIG1vZGUsIGRvbid0IGRvIGFueXRoaW5nXG5cdFx0aWYgKCF0aGlzLnByb3BzLmV2ZW50c0VuYWJsZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgaXMgZGlzYWJsZWQgaW4gdGhlIGRlc2lnbi1zY29wZVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBjbGlja2VkIVwiKTtcblx0XHR0aGlzLnByb3BzLmNvbXBvbmVudEV2ZW50cy5maXJlQ29tcG9uZW50RXZlbnQoXCJvbkFjdGlvblBlcmZvcm1lZFwiLCB7fSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQvLyA8ZGl2PlRoaXMgaXMgVmFsdmU8L2Rpdj5cblx0XHRcdDxIZWF0RXhjaGFuZ2VyQ29tcG91bmQuUm9vdFxuXHRcdFx0XHRjb21wb25lbnRQcm9wcz17dGhpcy5wcm9wc31cblx0XHRcdFx0aXRlbVByb3BzPXt0aGlzLnByb3BzLnByb3BzfVxuXHRcdFx0XHRvbkFjdGlvblBlcmZvcm1lZD17dGhpcy5vbkFjdGlvblBlcmZvcm1lZH1cblx0XHRcdD5cblx0XHRcdFx0PEhlYXRFeGNoYW5nZXJDb21wb3VuZC5wbGF0ZSAvPlxuXHRcdFx0XHQ8SGVhdEV4Y2hhbmdlckNvbXBvdW5kLnBvcG92ZXIgYW5jaG9yRWw9e3RoaXMudmFsdmVSZWYuY3VycmVudH0gLz5cblx0XHRcdDwvSGVhdEV4Y2hhbmdlckNvbXBvdW5kLlJvb3Q+XG5cdFx0KTtcblx0fVxufVxuLy8gVGhpcyBpcyB0aGUgYWN0dWFsIHRoaW5nIHRoYXQgZ2V0cyByZWdpc3RlcmVkIHdpdGggdGhlIGNvbXBvbmVudCByZWdpc3RyeS5cbmV4cG9ydCBjbGFzcyBIZWF0RXhjaGFuZ2VyTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBIZWF0RXhjaGFuZ2VyO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAzNixcblx0XHRcdGhlaWdodDogNjAsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IEh4UHJvcHMge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiB0cmVlLnJlYWRTdHJpbmcoXCJwdW1wVHlwZVwiLCBcInBsYXRlXCIpLFxuXHRcdFx0bW9kZTogdHJlZS5yZWFkU3RyaW5nKFwibW9kZVwiLCBcImhlYXRpbmdcIiksXG5cdFx0XHRpdGVtTmFtZTogdHJlZS5yZWFkU3RyaW5nKFwiaXRlbU5hbWVcIiwgXCJcIiksXG5cdFx0XHRsb2NhdGU6IHRyZWUucmVhZEJvb2xlYW4oXCJsb2NhdGVcIiwgZmFsc2UpLFxuXHRcdFx0c2hvd0xhYmVsOiB0cmVlLnJlYWRCb29sZWFuKFwic2hvd0xhYmVsXCIsIGZhbHNlKSxcblx0XHRcdGxhYmVsUG9zaXRpb246IHRyZWUucmVhZFN0cmluZyhcImxhYmVsUG9zaXRpb25cIiwgXCJ0b3AtbGVmdFwiKSxcblx0XHR9O1xuXHR9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb3BlcnR5VHJlZSB9IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcblxuLy8gaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCJzcmMvdXRpbHMvY3JlYXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgUGFyYW1ldGVyc0xpc3RTdGF0ZSwgUGFyYW1JdGVtIH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgcGFyYW1ldGVySW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcbmltcG9ydCB7XG5cdFBBUkFNRVRFUl9MSVNUX0NPTVBPTkVOVF9UWVBFLFxuXHRITUlfQ09NUE9ORU5UX0NMQVNTLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTixcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1csXG5cdElBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUixcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG50eXBlIFBhcmFtZXRlcnNMaXN0Q29tcG9uZW50UHJvcHMgPSB7XG5cdHBhcmFtZXRlcnM6IFBhcmFtSXRlbVtdO1xufTtcbmNvbnN0IGluaXRQYXJhbWV0ZXJzID0gW1xuXHR7XG5cdFx0bGFiZWw6IHtcblx0XHRcdHRleHQ6IFwidGV4dFwiLFxuXHRcdH0sXG5cdFx0aW5wdXQ6IHtcblx0XHRcdHZhbHVlOiBudWxsLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgYSBOdW1iZXJcIixcblx0XHR9LFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gUEFSQU1FVEVSX0xJU1RfQ09NUE9ORU5UX1RZUEU7XG5cbmV4cG9ydCBjb25zdCBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50ID0gKFxuXHRwcm9wczogQ29tcG9uZW50UHJvcHM8UGFyYW1ldGVyc0xpc3RDb21wb25lbnRQcm9wcz5cbikgPT4ge1xuXHRjb25zdCB0cmFuc2Zvcm1lZFByb3BzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG5cdFx0Y29uc3QgeyBwYXJhbWV0ZXJzIH0gPSBwcm9wcy5wcm9wcyB8fCBpbml0UGFyYW1ldGVycztcblx0XHRyZXR1cm4gcGFyYW1ldGVycztcblx0fSwgW3Byb3BzLnByb3BzLnBhcmFtZXRlcnNdKTtcblx0Y29uc3QgeyBlbWl0IH0gPSBwcm9wcztcblx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gXCJwYXJhbWV0ZXItbGlzdFwiO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRjbGFzc2VzOiBbYCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU59YF0sXG5cdFx0XHR9KX1cblx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1d9YH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVJ9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0hNSV9DT01QT05FTlRfQ0xBU1N9ICR7Y29tcG9uZW50Q2xhc3NOYW1lfWB9PlxuXHRcdFx0XHRcdFx0e3RyYW5zZm9ybWVkUHJvcHMubWFwKChwYXJhbTogUGFyYW1JdGVtLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHsgbGFiZWwsIGlucHV0IH0gPSBwYXJhbTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YCR7bGFiZWwudGV4dH0tcGFyYW1ldGVyJHtpbmRleH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmllbGQgc21hbGxcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsLnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZXVcIj57aW5wdXQuZXV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2Ake2xhYmVsLnRleHR9LXBhcmFtZXRlciR7aW5kZXh9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRNb2RlPXtpbnB1dC5pbnB1dG1vZGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm49e2lucHV0LnBhdHRlcm4gfHwgXCJbMC05XSpcIn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2lucHV0LnBsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWlucHV0LmVkaXRhYmxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXQudmFsdWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLnN0b3JlLnByb3BzLndyaXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YHBhcmFtZXRlcnNbJHtpbmRleH1dLmlucHV0LnZhbHVlYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuY3VycmVudFRhcmdldC52YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gdXBkYXRlVmFsdWUocGFyc2VGbG9hdChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKS50b0ZpeGVkKDIpKSwgaW5kZXgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyTGlzdENvbXBvbmVudE1ldGEgaW1wbGVtZW50cyBDb21wb25lbnRNZXRhIHtcblx0Z2V0Q29tcG9uZW50VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBDT01QT05FTlRfVFlQRTtcblx0fVxuXG5cdGdldERlZmF1bHRTaXplKCk6IFNpemVPYmplY3Qge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMjQwLFxuXHRcdFx0aGVpZ2h0OiAyNDAsXG5cdFx0fTtcblx0fVxuXG5cdGdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBQYXJhbWV0ZXJzTGlzdFN0YXRlIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cGFyYW1ldGVyczogdHJlZS5yZWFkKFwicGFyYW1ldGVyc1wiLCBwYXJhbWV0ZXJJbml0aWFsU3RhdGUpLFxuXHRcdH07XG5cdH1cblxuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50IGFzIFBDb21wb25lbnQ7XG5cdH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0SXRlbUlkUG9zaXRpb25UeXBlLFxuXHR0eXBlIFB1bXBQcm9wcyxcblx0dHlwZSBQdW1wU3RhdGUsXG59IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRQcm9wZXJ0eVRyZWUsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjsgLy8nQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB7IFB1bXBDb21wb3VuZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2Nlc3Mtb2JqZWN0cy9wdW1wcy9QdW1wQ29tcG91bmRcIjtcbmltcG9ydCB7IHB1bXBJbml0aWFsU3RhdHVzIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLlB1bXBcIjtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuICovXG5leHBvcnQgY2xhc3MgUHVtcCBleHRlbmRzIENvbXBvbmVudDxDb21wb25lbnRQcm9wczxQdW1wUHJvcHM+LCBhbnk+IHtcblx0dmFsdmVSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG5cblx0Y29uc3RydWN0b3IocHJvcHM6IENvbXBvbmVudFByb3BzPFB1bXBQcm9wcz4pIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy52YWx2ZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblx0fVxuXG5cdC8vIFRoaXMgaXMgYSBsaWZlY3ljbGUgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBtb3VudGVkIHRvIHRoZSBET00uXG5cdGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuXHRcdC8vIE5vIG5lZWQgdG8gaW5pdGlhbGl6ZSB2YWx2ZVJlZiBoZXJlXG5cdH1cblx0cHJvY2Vzc09iamVjdDogUHVtcFN0YXRlID1cblx0XHR0aGlzLnByb3BzLnByb3BzLnByb2Nlc3NPYmplY3Q/LnN0YXR1cyB8fCBwdW1wSW5pdGlhbFN0YXR1cztcblx0c3RhdHVzOiBQdW1wU3RhdGUgPSB0aGlzLnByb2Nlc3NPYmplY3Q7XG5cdHNob3dMYWJlbDogYm9vbGVhbiA9IHRoaXMucHJvcHMucHJvcHMuc2hvd0xhYmVsIHx8IGZhbHNlO1xuXHRsYWJlbFBvc2l0aW9uOiBJdGVtSWRQb3NpdGlvblR5cGUgPSB0aGlzLnByb3BzLnByb3BzLmxhYmVsUG9zaXRpb24gfHwgXCJsZWZ0XCI7XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSBjb21wb25lbnQncyBhY3Rpb24gZXZlbnQuXG5cdCAqL1xuXHRvbkFjdGlvblBlcmZvcm1lZCA9ICgpID0+IHtcblx0XHQvLyBJZiB0aGUgZGVzaWduZXIgaXMgaW4gXCJkZXNpZ25cIiBtb2RlLCBkb24ndCBkbyBhbnl0aGluZ1xuXHRcdGlmICghdGhpcy5wcm9wcy5ldmVudHNFbmFibGVkKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGlzIGRpc2FibGVkIGluIHRoZSBkZXNpZ24tc2NvcGVcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgY2xpY2tlZCFcIik7XG5cdFx0dGhpcy5wcm9wcy5jb21wb25lbnRFdmVudHMuZmlyZUNvbXBvbmVudEV2ZW50KFwib25BY3Rpb25QZXJmb3JtZWRcIiwge30pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0Ly8gPGRpdj5UaGlzIGlzIFZhbHZlPC9kaXY+XG5cdFx0XHQ8UHVtcENvbXBvdW5kLlJvb3Rcblx0XHRcdFx0Y29tcG9uZW50UHJvcHM9e3RoaXMucHJvcHN9XG5cdFx0XHRcdHB1bXBQcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQ9e3RoaXMub25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxQdW1wQ29tcG91bmQucHVtcCAvPlxuXHRcdFx0XHQ8UHVtcENvbXBvdW5kLnBvcG92ZXIgYW5jaG9yRWw9e3RoaXMudmFsdmVSZWYuY3VycmVudH0gLz5cblx0XHRcdDwvUHVtcENvbXBvdW5kLlJvb3Q+XG5cdFx0KTtcblx0fVxufVxuLy8gVGhpcyBpcyB0aGUgYWN0dWFsIHRoaW5nIHRoYXQgZ2V0cyByZWdpc3RlcmVkIHdpdGggdGhlIGNvbXBvbmVudCByZWdpc3RyeS5cbmV4cG9ydCBjbGFzcyBQdW1wTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBQdW1wO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAzNixcblx0XHRcdGhlaWdodDogMzYsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFB1bXBQcm9wcyB7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0cHVtcFR5cGU6IHRyZWUucmVhZFN0cmluZyhcInB1bXBUeXBlXCIsIFwiY2VudHJpZnVnYWxcIiksXG5cdFx0XHRwcm9jZXNzT2JqZWN0OiB7XG5cdFx0XHRcdHN0YXR1czoge1xuXHRcdFx0XHRcdGFsYXJtOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuYWxhcm1cIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGFjdEZCOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuYWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGRlQWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5kZUFjdEZCXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRjb25maWd1cmF0aW9uOiB0cmVlLnJlYWROdW1iZXIoXG5cdFx0XHRcdFx0XHRcInByb2Nlc3NPYmplY3Quc3RhdHVzLmNvbmZpZ3VyYXRpb25cIixcblx0XHRcdFx0XHRcdDdcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdGl0ZW1OYW1lOiB0cmVlLnJlYWRTdHJpbmcoXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5pdGVtTmFtZVwiLCBcIlwiKSxcblx0XHRcdFx0XHRtYW51YWw6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5tYW51YWxcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdG1hc2tlZDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLm1hc2tlZFwiLCBmYWxzZSksXG5cdFx0XHRcdFx0Y2hhbmdpbmc6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5jaGFuZ2luZ1wiLCBmYWxzZSksXG5cdFx0XHRcdFx0bG9jYXRlOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubG9jYXRlXCIsIGZhbHNlKSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzaG93TGFiZWw6IHRyZWUucmVhZEJvb2xlYW4oXCJzaG93TGFiZWxcIiwgZmFsc2UpLFxuXHRcdFx0bGFiZWxQb3NpdGlvbjogdHJlZS5yZWFkU3RyaW5nKFwibGFiZWxQb3NpdGlvblwiLCBcInRvcC1sZWZ0XCIpLFxuXHRcdH07XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBTdGF0dXNQcm9wcyB9IGZyb20gXCIuLi9hci10eXBlcy9zdGF0dXNcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG5cdFByb3BlcnR5VHJlZSxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiOyAvLydAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuaW1wb3J0IHtcblx0SE1JX0NPTVBPTkVOVF9DTEFTUyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU4sXG5cdElBX1NZTUJPTF9DT01QT05FTlRfUk9XLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVIsXG5cdFNUQVRVU19DT01QT05FTlRfVFlQRSxcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBTVEFUVVNfQ09NUE9ORU5UX1RZUEU7XG5cbmV4cG9ydCBjb25zdCBTdGF0dXNWYWx2ZU1wID0gKHByb3BzOiBDb21wb25lbnRQcm9wczxTdGF0dXNQcm9wcz4pID0+IHtcblx0Y29uc3QgeyBlbWl0IH0gPSBwcm9wcztcblx0Y29uc3QgeyBzdGF0dXNJdGVtcyB9ID0gcHJvcHMucHJvcHM7XG5cdGNvbnN0IGNvbXBvbmVudENsYXNzTmFtZSA9IFwic3RhdHVzXCI7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHR7Li4uZW1pdCh7XG5cdFx0XHRcdGNsYXNzZXM6IFtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTn1gXSxcblx0XHRcdH0pfVxuXHRcdFx0ZGF0YS1jb21wb25lbnQ9e0NPTVBPTkVOVF9UWVBFfVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1JPV31gfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUn1gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SE1JX0NPTVBPTkVOVF9DTEFTU30gJHtjb21wb25lbnRDbGFzc05hbWV9YH0+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdCBib3JkZXJlZCBkZW5zZVwiPlxuXHRcdFx0XHRcdFx0XHR7c3RhdHVzSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieC1zbWFsbFwiPntpdGVtLmxhYmVsfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVuZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgY2hlY2tib3gtJHtpbmRleH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtpdGVtLnN0YXR1c31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVhZE9ubHk9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuLy8gVGhpcyBpcyB0aGUgYWN0dWFsIHRoaW5nIHRoYXQgZ2V0cyByZWdpc3RlcmVkIHdpdGggdGhlIGNvbXBvbmVudCByZWdpc3RyeS5cbmV4cG9ydCBjbGFzcyBTdGF0dXNWYWx2ZU1wTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBTdGF0dXNWYWx2ZU1wIGFzIHVua25vd24gYXMgUENvbXBvbmVudDtcblx0fVxuXG5cdGdldERlZmF1bHRTaXplKCk6IFNpemVPYmplY3Qge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMjQwLFxuXHRcdFx0aGVpZ2h0OiAzMixcblx0XHR9O1xuXHR9XG5cblx0Ly8gSW52b2tlZCB3aGVuIGFuIHVwZGF0ZSB0byB0aGUgUHJvcGVydHlUcmVlIGhhcyBvY2N1cnJlZCxcblx0Ly8gZWZmZWN0aXZlbHkgbWFwcGluZyB0aGUgdmFsdmVTdGF0dXMgb2YgdGhlIHRyZWUgdG8gY29tcG9uZW50IHByb3BzLlxuXHRnZXRQcm9wc1JlZHVjZXIodHJlZTogUHJvcGVydHlUcmVlKTogU3RhdHVzUHJvcHMge1xuXHRcdGNvbnNvbGUubG9nKGBzdGF0dXMgJHt0cmVlLnJlYWQoYHN0YXR1c2ApfWApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXR1c0l0ZW1zOiB0cmVlLnJlYWQoXCJzdGF0dXNcIiwgW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6IGBsYWJlbCB0ZXh0YCxcblx0XHRcdFx0XHRzdGF0dXM6IGZhbHNlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSksXG5cdFx0fTtcblx0fVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRJdGVtSWRQb3NpdGlvblR5cGUsXG5cdFByb2Nlc3NPYmplY3QsXG5cdHR5cGUgVmFsdmVQcm9wcyxcblx0dHlwZSBWYWx2ZVN0YXRlLFxufSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5cbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0UHJvcGVydHlUcmVlLFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbXBvbmVudFByb3BzLFxuXHRDb21wb25lbnRNZXRhLFxuXHRQQ29tcG9uZW50LFxuXHRTaXplT2JqZWN0LFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7IC8vJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG5pbXBvcnQgeyBWYWx2ZU1wQ29tcG91bmQgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUtbXAvVmFsdmVNcFwiO1xuaW1wb3J0IHsgcHJvY2Vzc09iamVjdFByb3BzIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcbi8vIGltcG9ydCB7IHZhbHZlUHJvcHMgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUvaW5pdGlhbFN0YXRlXCI7XG4vLyBpbXBvcnQgeyBWYWx2ZUZDQ29tcG91bmQgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUvVmFsdmVGQ1wiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5wcm9jZXNzX29iamVjdHMuVmFsdmVfbXBcIjtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuICovXG5leHBvcnQgY2xhc3MgVmFsdmUgZXh0ZW5kcyBDb21wb25lbnQ8Q29tcG9uZW50UHJvcHM8VmFsdmVQcm9wcz4sIGFueT4ge1xuXHR2YWx2ZVJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wczogQ29tcG9uZW50UHJvcHM8VmFsdmVQcm9wcz4pIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy52YWx2ZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblx0fVxuXG5cdC8vIFRoaXMgaXMgYSBsaWZlY3ljbGUgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBtb3VudGVkIHRvIHRoZSBET00uXG5cdGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuXHRcdC8vIE5vIG5lZWQgdG8gaW5pdGlhbGl6ZSB2YWx2ZVJlZiBoZXJlXG5cdH1cblx0cHJvY2Vzc09iamVjdDogUHJvY2Vzc09iamVjdCA9XG5cdFx0dGhpcy5wcm9wcy5wcm9wcy5wcm9jZXNzT2JqZWN0IHx8IHByb2Nlc3NPYmplY3RQcm9wcztcblx0c3RhdHVzOiBWYWx2ZVN0YXRlID0gdGhpcy5wcm9jZXNzT2JqZWN0LnN0YXR1cztcblx0c2hvd0xhYmVsOiBib29sZWFuID0gdGhpcy5wcm9wcy5wcm9wcy5zaG93TGFiZWwgfHwgZmFsc2U7XG5cdGxhYmVsUG9zaXRpb246IEl0ZW1JZFBvc2l0aW9uVHlwZSA9IHRoaXMucHJvcHMucHJvcHMubGFiZWxQb3NpdGlvbiB8fCBcImxlZnRcIjtcblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIGNvbXBvbmVudCdzIGFjdGlvbiBldmVudC5cblx0ICovXG5cdG9uQWN0aW9uUGVyZm9ybWVkID0gKCkgPT4ge1xuXHRcdC8vIElmIHRoZSBkZXNpZ25lciBpcyBpbiBcImRlc2lnblwiIG1vZGUsIGRvbid0IGRvIGFueXRoaW5nXG5cdFx0aWYgKCF0aGlzLnByb3BzLmV2ZW50c0VuYWJsZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgaXMgZGlzYWJsZWQgaW4gdGhlIGRlc2lnbi1zY29wZVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBjbGlja2VkIVwiKTtcblx0XHR0aGlzLnByb3BzLmNvbXBvbmVudEV2ZW50cy5maXJlQ29tcG9uZW50RXZlbnQoXCJvbkFjdGlvblBlcmZvcm1lZFwiLCB7fSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQvLyA8ZGl2PlRoaXMgaXMgVmFsdmU8L2Rpdj5cblx0XHRcdDxWYWx2ZU1wQ29tcG91bmQuUm9vdFxuXHRcdFx0XHRjb21wb25lbnRQcm9wcz17dGhpcy5wcm9wc31cblx0XHRcdFx0dmFsdmVQcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQ9e3RoaXMub25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxWYWx2ZU1wQ29tcG91bmQudmFsdmUgLz5cblx0XHRcdFx0PFZhbHZlTXBDb21wb3VuZC5wb3BvdmVyIGFuY2hvckVsPXt0aGlzLnZhbHZlUmVmLmN1cnJlbnR9IC8+XG5cdFx0XHQ8L1ZhbHZlTXBDb21wb3VuZC5Sb290PlxuXHRcdCk7XG5cdH1cbn1cbi8vIFRoaXMgaXMgdGhlIGFjdHVhbCB0aGluZyB0aGF0IGdldHMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBjb21wb25lbnQgcmVnaXN0cnkuXG5leHBvcnQgY2xhc3MgVmFsdmVNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFZhbHZlO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAyMCxcblx0XHRcdGhlaWdodDogNDAsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFZhbHZlUHJvcHMge1xuXHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0YGl0ZW1OYW1lOiAke3RyZWUucmVhZFN0cmluZyhcblx0XHRcdFx0XCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5pdGVtTmFtZVwiXG5cdFx0XHQpfSBzaG93TGFiZWwgJHt0cmVlLnJlYWRCb29sZWFuKFwic2hvd0xhYmVsXCIpfWBcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb2Nlc3NPYmplY3Q6IHtcblx0XHRcdFx0c3RhdHVzOiB7XG5cdFx0XHRcdFx0YWxhcm06IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hbGFybVwiLCBmYWxzZSksXG5cdFx0XHRcdFx0YWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hY3RGQlwiLCBmYWxzZSksXG5cdFx0XHRcdFx0ZGVBY3RGQjogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmRlQWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGFjdGl2YXRlZENvbmZpZzogdHJlZS5yZWFkTnVtYmVyKFxuXHRcdFx0XHRcdFx0XCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hY3RpdmF0ZWRDb25maWdcIixcblx0XHRcdFx0XHRcdDUxMVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0ZGVhY3RpdmF0ZWRDb25maWc6IHRyZWUucmVhZE51bWJlcihcblx0XHRcdFx0XHRcdFwicHJvY2Vzc09iamVjdC5zdGF0dXMuZGVhY3RpdmF0ZWRDb25maWdcIixcblx0XHRcdFx0XHRcdDQwOTVcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdGl0ZW1OYW1lOiB0cmVlLnJlYWRTdHJpbmcoXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5pdGVtTmFtZVwiLCBcIlwiKSxcblx0XHRcdFx0XHRtYW51YWw6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5tYW51YWxcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdG1hc2tlZDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLm1hc2tlZFwiLCBmYWxzZSksXG5cdFx0XHRcdFx0Y2hhbmdpbmc6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5jaGFuZ2luZ1wiLCBmYWxzZSksXG5cdFx0XHRcdFx0bG9jYXRlOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubG9jYXRlXCIsIGZhbHNlKSxcblx0XHRcdFx0XHR1c2w6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy51c2xcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGxzbDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmxzbFwiLCBmYWxzZSksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hvd0xhYmVsOiB0cmVlLnJlYWRCb29sZWFuKFwic2hvd0xhYmVsXCIsIGZhbHNlKSxcblx0XHRcdGxhYmVsUG9zaXRpb246IHRyZWUucmVhZFN0cmluZyhcImxhYmVsUG9zaXRpb25cIiwgXCJ0b3AtbGVmdFwiKSxcblx0XHR9O1xuXHR9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcblx0dHlwZSBFbGVtZW50UmVmLFxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NyZWF0ZUNvbnRleHRcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi92YWx2ZS9pdGVtXCI7XG5pbXBvcnQge1xuXHRnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZSxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS91dGlsc1wiO1xuaW1wb3J0IHsgYnVpbGRDb21wb25lbnRFbGVtZW50cywgZ2V0SHhJdGVtQ2xhc3NOYW1lLCBnZXRIeE1vZGVDbGFzc05hbWVzLFxuXHQvLyAgaHhJdGVtTmFtZXNcblx0fSBmcm9tIFwiLi4vLi4vLi4vYXItdXRpbHMvcHJvY2Vzc09iamVjdHMvaGVhdEV4Y2hhbmdlcnMvaHgtdXRpbHNcIjtcbmltcG9ydCB7IEhYX0NPTVBPTkVOVF9UWVBFLCBIeE1vZGVzLCB0eXBlIEh4Q29tcG91bmRDb250ZXh0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9hci10eXBlcy9wcm9jZXNzT2JqZWN0cy9oZWF0RXhjaGFuZ2Vycy9oeC10eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBIWF9DT01QT05FTlRfVFlQRTtcblxuZXhwb3J0IGNvbnN0IFtIeENvbnRleHRQcm92aWRlciwgdXNlSHhDb250ZXh0XSA9XG5cdHVzZUNyZWF0ZUNvbnRleHQ8SHhDb21wb3VuZENvbnRleHRUeXBlPihcIkh4Q29tcG91bmRcIik7XG5cbmNvbnN0IFJvb3QgPSAoe1xuXHRjb21wb25lbnRQcm9wcyxcblx0aXRlbVByb3BzLFxuXHRvbkFjdGlvblBlcmZvcm1lZCxcblx0Y2hpbGRyZW4sXG59OiBIeENvbXBvdW5kQ29udGV4dFR5cGUpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8SHhDb250ZXh0UHJvdmlkZXJcblx0XHRcdHsuLi57XG5cdFx0XHRcdGl0ZW1Qcm9wcyxcblx0XHRcdFx0Y29tcG9uZW50UHJvcHMsXG5cdFx0XHRcdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9IeENvbnRleHRQcm92aWRlcj5cblx0KTtcbn07XG5jb25zdCBwbGF0ZSA9ICgpID0+IHtcblx0Y29uc3QgeyBpdGVtUHJvcHMsIG9uQWN0aW9uUGVyZm9ybWVkLCBjb21wb25lbnRQcm9wcyB9ID1cblx0XHR1c2VIeENvbnRleHQoXCJQbGF0ZVwiKTtcblx0Y29uc3QgZWxSZWY6IEVsZW1lbnRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCB7IGVtaXQgfSA9IGNvbXBvbmVudFByb3BzO1xuXHRjb25zdCB7IHR5cGUsbG9jYXRlLCBtb2RlIH0gPSBpdGVtUHJvcHM7XG5cblxuXHQvLyBpZiBub3QgbG9jYXRlLCB0cmltIGxhc3QgaXRlbSBmcm9tIHZhbHZlTXBJdGVtTmFtZXNcblx0Ly8gbGV0IGNvbXBvbmVudEl0ZW1OYW1lcyA9IGh4SXRlbU5hbWVzO1xuXHRsZXQgY29tcG9uZW50SXRlbU5hbWVzID0gYnVpbGRDb21wb25lbnRFbGVtZW50cygzLCAwKTtcblx0aWYgKCFsb2NhdGUpIHtcblx0XHRjb21wb25lbnRJdGVtTmFtZXMgPSBjb21wb25lbnRJdGVtTmFtZXMuc2xpY2UoMCwgLTEpO1xuXHR9XG5cdGNvbnN0IGlzQ29vcmRDaGlsZDpib29sZWFuID0gY29tcG9uZW50UHJvcHMuc3RvcmUuaXNDb29yZENvbnRhaW5lckNoaWxkO1xuXHRjb25zb2xlLmxvZyhgaXNDb29yZENoaWxkICR7aXNDb29yZENoaWxkfWApO1xuXG5cdGNvbnN0IGZsZXhSb3dXcmFwcGVyID0gIWlzQ29vcmRDaGlsZCA/IFwiaG1pLWNvbXBvbmVudF9fcm93XCIgOiBcImRpc3BsYXktbm9uZVwiO1xuXHRjb25zdCBmbGV4Q29sV3JhcHBlciA9ICFpc0Nvb3JkQ2hpbGQgPyBcImhtaS1jb21wb25lbnRfX2NvbHVtblwiIDogXCJkaXNwbGF5LW5vbmVcIjtcblx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gXCJobWktY29tcG9uZW50IGhtaS1jb21wb25lbnQtcGxhdGUtaHhcIjtcblx0Y29uc3QgZW1pdENsYXNzTmFtZXMgPSAhaXNDb29yZENoaWxkID8gYGhtaS1jb21wb25lbnQgJHtmbGV4Q29sV3JhcHBlcn0gYCA6IFwiaG1pLWNvbXBvbmVudCBobWktY29tcG9uZW50LXBsYXRlLWh4XCI7XG5cdHJldHVybiAoXG5cblx0XHQ8ZGl2XG5cdFx0XHRcdHJlZj17ZWxSZWZ9XG5cdFx0XHRcdHsuLi5lbWl0KHtcblx0XHRcdFx0XHRjbGFzc2VzOiBbYCR7ZW1pdENsYXNzTmFtZXN9YF0sXG5cdFx0XHRcdH0pfVxuXHRcdFx0XHRkYXRhLWNvbXBvbmVudD17Q09NUE9ORU5UX1RZUEV9XG5cdFx0XHRcdG9uQ2xpY2s9e29uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7ZmxleFJvd1dyYXBwZXJ9YH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtjb21wb25lbnRDbGFzc05hbWV9YH0+XG5cdFx0XHQ8SXRlbSBpdGVtQ2xhc3NOYW1lPXtgJHtnZXRIeE1vZGVDbGFzc05hbWVzKFwiYmFzZS0xIHNob3dcIiwgSHhNb2Rlcy5oZWF0aW5nICl9YH0vPlxuXHRcdFx0ey8qIDxJdGVtIGl0ZW1DbGFzc05hbWU9e2Ake2dldFB1bXBTdGF0dXNDbGFzc05hbWVzKFwiYmFzZS0yIHNob3cgaXRlbVwiLHN0YXR1cyl9YH0vPiAqL31cblx0XHRcdHsvKiA8SXRlbSBpdGVtQ2xhc3NOYW1lPXtgJHtnZXRQdW1wU3RhdHVzQ2xhc3NOYW1lcyhcImJhc2UtMyBzaG93IGl0ZW1cIixzdGF0dXMpfWB9Lz4gKi99XG5cdFx0XHQ8SXRlbSBpdGVtQ2xhc3NOYW1lPXtcImJhc2UtMiBzaG93IGl0ZW1cIn0vPlxuXHRcdFx0PEl0ZW0gaXRlbUNsYXNzTmFtZT17XCJiYXNlLTMgc2hvdyBpdGVtXCJ9Lz5cblxuXHRcdFx0XHR7Y29tcG9uZW50SXRlbU5hbWVzLm1hcCgoeyBuYW1lLCBpbmRleCwga2V5IH0pID0+IChcblx0XHRcdFx0XHQ8SXRlbVxuXHRcdFx0XHRcdGl0ZW1DbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0bmFtZSArXG5cdFx0XHRcdFx0XHRcIiBcIiArXG5cdFx0XHRcdFx0XHRnZXRIeEl0ZW1DbGFzc05hbWUoXG5cdFx0XHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdFx0XHR0eXBlIHx8IFwicGxhdGVcIixcblx0XHRcdFx0XHRcdFx0bW9kZSB8fCBIeE1vZGVzLmhlYXRpbmcsXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCBwb3BvdmVyID0gKHsgYW5jaG9yRWwgfTogeyBhbmNob3JFbDogSFRNTERpdkVsZW1lbnQgfCBudWxsIH0pID0+IHtcblx0Y29uc3QgeyBpdGVtUHJvcHMsIGNvbXBvbmVudFByb3BzIH0gPSB1c2VIeENvbnRleHQoXCJQb3BvdmVyXCIpO1xuXHRjb25zdCB7IHNob3dMYWJlbCwgbGFiZWxQb3NpdGlvbiwgaXRlbU5hbWV9ID0gaXRlbVByb3BzO1xuXG5cdGlmICghc2hvd0xhYmVsKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgeyBwb3NpdGlvbiB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGxldCBjbGFzc05hbWUgPSBcIml0ZW1JZCBwb3BvdmVyIHBvc2l0aW9uLWxlZnRcIjtcblx0aWYgKGxhYmVsUG9zaXRpb24pIHtcblx0XHRjbGFzc05hbWUgPSBnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZShjbGFzc05hbWUsIGxhYmVsUG9zaXRpb24pO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHR0b3A6IHBvc2l0aW9uLnksXG5cdFx0XHRcdGxlZnQ6IHBvc2l0aW9uLngsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT57aXRlbU5hbWV9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgSGVhdEV4Y2hhbmdlckNvbXBvdW5kID0ge1xuXHRSb290LFxuXHRwbGF0ZSxcblx0cG9wb3Zlcixcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcblx0dHlwZSBFbGVtZW50UmVmLFxuXHR0eXBlIFB1bXBDb21wb3VuZENvbnRleHRUeXBlLFxuXHR0eXBlIFB1bXBDb21wb3VuZFJvb3RQcm9wcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vdmFsdmUvaXRlbVwiO1xuaW1wb3J0IHtcblx0Z2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUsXG5cdGdldFB1bXBJdGVtQ2xhc3NOYW1lLFxuXHRnZXRQdW1wU3RhdHVzQ2xhc3NOYW1lcyxcblx0cHVtcEl0ZW1OYW1lcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS91dGlsc1wiO1xuaW1wb3J0IHsgcHVtcEluaXRpYWxQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9hcGkvaW5pdGlhbFN0YXRlXCI7XG5pbXBvcnQge1xuXHRITUlfQ09NUE9ORU5UX0NMQVNTLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTixcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1csXG5cdElBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUixcblx0UFVNUF9DT01QT05FTlRfVFlQRSxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBQVU1QX0NPTVBPTkVOVF9UWVBFO1xuXG5leHBvcnQgY29uc3QgW1B1bXBDb250ZXh0UHJvdmlkZXIsIHVzZVB1bXBDb250ZXh0XSA9XG5cdHVzZUNyZWF0ZUNvbnRleHQ8UHVtcENvbXBvdW5kQ29udGV4dFR5cGU+KFwiUHVtcENvbXBvdW5kXCIpO1xuXG5jb25zdCBSb290ID0gKHtcblx0Y29tcG9uZW50UHJvcHMsXG5cdHB1bXBQcm9wcyxcblx0b25BY3Rpb25QZXJmb3JtZWQsXG5cdGNoaWxkcmVuLFxufTogUHVtcENvbXBvdW5kUm9vdFByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFB1bXBDb250ZXh0UHJvdmlkZXJcblx0XHRcdHsuLi57XG5cdFx0XHRcdHB1bXBQcm9wcyxcblx0XHRcdFx0Y29tcG9uZW50UHJvcHMsXG5cdFx0XHRcdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9QdW1wQ29udGV4dFByb3ZpZGVyPlxuXHQpO1xufTtcbmNvbnN0IHB1bXAgPSAoKSA9PiB7XG5cdGNvbnN0IHsgcHVtcFByb3BzLCBvbkFjdGlvblBlcmZvcm1lZCwgY29tcG9uZW50UHJvcHMgfSA9XG5cdFx0dXNlUHVtcENvbnRleHQoXCJWYWx2ZVwiKTtcblx0Y29uc3QgZWxSZWY6IEVsZW1lbnRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCB7IGVtaXQgfSA9IGNvbXBvbmVudFByb3BzO1xuXHRjb25zdCB7IHByb2Nlc3NPYmplY3QsIHB1bXBUeXBlIH0gPSBwdW1wUHJvcHM7XG5cdGNvbnN0IHsgc3RhdHVzIH0gPSBwcm9jZXNzT2JqZWN0IHx8IHB1bXBJbml0aWFsUHJvcHM7XG5cblx0Ly8gaWYgbm90IGxvY2F0ZSwgdHJpbSBsYXN0IGl0ZW0gZnJvbSB2YWx2ZU1wSXRlbU5hbWVzXG5cdGNvbnN0IGNvbXBvbmVudEl0ZW1OYW1lcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuXHRcdGlmICghc3RhdHVzPy5sb2NhdGUpIHtcblx0XHRcdHJldHVybiBwdW1wSXRlbU5hbWVzLnNsaWNlKDAsIC0xKTtcblx0XHR9XG5cdFx0cmV0dXJuIHB1bXBJdGVtTmFtZXM7XG5cdH0sIFtzdGF0dXM/LmxvY2F0ZV0pO1xuXG5cdGNvbnN0IGNvbXBvbmVudENsYXNzTmFtZSA9IFwicHVtcFwiO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0cmVmPXtlbFJlZn1cblx0XHRcdHsuLi5lbWl0KHtcblx0XHRcdFx0Y2xhc3NlczogW2Ake0lBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OfWBdLFxuXHRcdFx0fSl9XG5cdFx0XHRkYXRhLWNvbXBvbmVudD17Q09NUE9ORU5UX1RZUEV9XG5cdFx0XHRvbkNsaWNrPXtvbkFjdGlvblBlcmZvcm1lZH1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1d9YH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVJ9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0hNSV9DT01QT05FTlRfQ0xBU1N9ICR7Y29tcG9uZW50Q2xhc3NOYW1lfWB9PlxuXHRcdFx0XHRcdFx0PEl0ZW1cblx0XHRcdFx0XHRcdFx0aXRlbUNsYXNzTmFtZT17YCR7Z2V0UHVtcFN0YXR1c0NsYXNzTmFtZXMoXG5cdFx0XHRcdFx0XHRcdFx0XCJiYXNlLTEgc2hvd1wiLFxuXHRcdFx0XHRcdFx0XHRcdHN0YXR1c1xuXHRcdFx0XHRcdFx0XHQpfWB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0ey8qIDxJdGVtIGl0ZW1DbGFzc05hbWU9e2Ake2dldFB1bXBTdGF0dXNDbGFzc05hbWVzKFwiYmFzZS0yIHNob3cgaXRlbVwiLHN0YXR1cyl9YH0vPiAqL31cblx0XHRcdFx0XHRcdHsvKiA8SXRlbSBpdGVtQ2xhc3NOYW1lPXtgJHtnZXRQdW1wU3RhdHVzQ2xhc3NOYW1lcyhcImJhc2UtMyBzaG93IGl0ZW1cIixzdGF0dXMpfWB9Lz4gKi99XG5cdFx0XHRcdFx0XHQ8SXRlbSBpdGVtQ2xhc3NOYW1lPXtcImJhc2UtMiBzaG93IGl0ZW1cIn0gLz5cblx0XHRcdFx0XHRcdDxJdGVtIGl0ZW1DbGFzc05hbWU9e1wiYmFzZS0zIHNob3cgaXRlbVwifSAvPlxuXG5cdFx0XHRcdFx0XHR7Y29tcG9uZW50SXRlbU5hbWVzLm1hcCgoeyBuYW1lLCBpbmRleCwga2V5IH0pID0+IChcblx0XHRcdFx0XHRcdFx0PEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XCIgXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0Z2V0UHVtcEl0ZW1DbGFzc05hbWUoaW5kZXgsIHB1bXBUeXBlIHx8IFwiY2VudHJpZnVnYWxcIiwgc3RhdHVzKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXtgbG9jYXRlICR7XG5cdFx0XHRcdFx0XHRcdHN0YXR1cy5sb2NhdGUgPyBcInNob3cgaXRlbVwiIDogXCJoaWRlIGl0ZW1cIlxuXHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IHBvcG92ZXIgPSAoeyBhbmNob3JFbCB9OiB7IGFuY2hvckVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgfSkgPT4ge1xuXHRjb25zdCB7IHB1bXBQcm9wcywgY29tcG9uZW50UHJvcHMgfSA9IHVzZVB1bXBDb250ZXh0KFwiUG9wb3ZlclwiKTtcblx0Y29uc3QgeyBzaG93TGFiZWwsIGxhYmVsUG9zaXRpb24sIHByb2Nlc3NPYmplY3QgfSA9IHB1bXBQcm9wcztcblx0Y29uc3QgeyBzdGF0dXMgfSA9IHByb2Nlc3NPYmplY3QgfHwge307XG5cdGlmICghc2hvd0xhYmVsKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgeyBwb3NpdGlvbiB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGxldCBjbGFzc05hbWUgPSBcIml0ZW1JZCBwb3BvdmVyIHBvc2l0aW9uLWxlZnRcIjtcblx0aWYgKGxhYmVsUG9zaXRpb24pIHtcblx0XHRjbGFzc05hbWUgPSBnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZShjbGFzc05hbWUsIGxhYmVsUG9zaXRpb24pO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHR0b3A6IHBvc2l0aW9uLnksXG5cdFx0XHRcdGxlZnQ6IHBvc2l0aW9uLngsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT57c3RhdHVzPy5pdGVtTmFtZX08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBQdW1wQ29tcG91bmQgPSB7XG5cdFJvb3QsXG5cdHB1bXAsXG5cdHBvcG92ZXIsXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7XG5cdFZhbHZlQ29tcG91bmRDb250ZXh0VHlwZSxcblx0VmFsdmVDb21wb3VuZFJvb3RQcm9wcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS90eXBlc1wiO1xuLy8gaW1wb3J0IHsgdXNlVmFsdmVSZWR1Y2VyIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9ob29rc1wiO1xuaW1wb3J0IHtcblx0Z2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUsXG5cdGdldFZhbHZlTXBJdGVtQ2xhc3NOYW1lLFxuXHR2YWx2ZU1wSXRlbU5hbWVzLFxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL3V0aWxzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vdmFsdmUvaXRlbVwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyBwcm9jZXNzT2JqZWN0UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2luaXRpYWxTdGF0ZVwiO1xuaW1wb3J0IHtcblx0SE1JX0NPTVBPTkVOVF9DTEFTUyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU4sXG5cdElBX1NZTUJPTF9DT01QT05FTlRfUk9XLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVIsXG5cdFZBTFZFX0NPTVBPTkVOVF9UWVBFLFxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbi8vIGltcG9ydCAnLi92YWx2ZS1tcC5tb2R1bGUuY3NzJ1xuLy8gaW1wb3J0IHt2YWx2ZVN0YXR1c30gZnJvbSAnLi4vLi4vYXBpL2luaXRpYWxTdGF0ZSdcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gVkFMVkVfQ09NUE9ORU5UX1RZUEU7XG5cbi8vIGltcG9ydCB7dmFsdmVTdGF0dXN9IGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5leHBvcnQgY29uc3QgW1ZhbHZlQ29udGV4dFByb3ZpZGVyLCB1c2VWYWx2ZUNvbnRleHRdID1cblx0dXNlQ3JlYXRlQ29udGV4dDxWYWx2ZUNvbXBvdW5kQ29udGV4dFR5cGU+KFwiVmFsdmVNcENvbXBvdW5kXCIpO1xuXG5jb25zdCBSb290ID0gKHtcblx0Y29tcG9uZW50UHJvcHMsXG5cdHZhbHZlUHJvcHMsXG5cdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRjaGlsZHJlbixcbn06IFZhbHZlQ29tcG91bmRSb290UHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8VmFsdmVDb250ZXh0UHJvdmlkZXJcblx0XHRcdHsuLi57XG5cdFx0XHRcdHZhbHZlUHJvcHMsXG5cdFx0XHRcdGNvbXBvbmVudFByb3BzLFxuXHRcdFx0XHRvbkFjdGlvblBlcmZvcm1lZCxcblx0XHRcdFx0Ly8gdXNlVmFsdmVSZWR1Y2VyLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9WYWx2ZUNvbnRleHRQcm92aWRlcj5cblx0KTtcbn07XG5jb25zdCB2YWx2ZSA9ICgpID0+IHtcblx0Y29uc3QgeyB2YWx2ZVByb3BzLCBvbkFjdGlvblBlcmZvcm1lZCwgY29tcG9uZW50UHJvcHMgfSA9XG5cdFx0dXNlVmFsdmVDb250ZXh0KFwiVmFsdmVcIik7XG5cdGNvbnN0IHZhbHZlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblx0Y29uc3QgeyBlbWl0IH0gPSBjb21wb25lbnRQcm9wcztcblx0Y29uc3QgeyBwcm9jZXNzT2JqZWN0IH0gPSB2YWx2ZVByb3BzO1xuXHRjb25zdCB7IHN0YXR1cyB9ID0gcHJvY2Vzc09iamVjdCB8fCBwcm9jZXNzT2JqZWN0UHJvcHM7XG5cdC8vIGNvbnN0IGluQ29vcmQgPSBwb3NpdGlvbj8ueCA/PyBmYWxzZTtcblx0Ly8gaWYgbm90IGxvY2F0ZSwgdHJpbSBsYXN0IGl0ZW0gZnJvbSB2YWx2ZU1wSXRlbU5hbWVzXG5cdGxldCBjb21wb25lbnRJdGVtTmFtZXMgPSB2YWx2ZU1wSXRlbU5hbWVzO1xuXHRpZiAoIXN0YXR1cz8ubG9jYXRlKSB7XG5cdFx0Y29tcG9uZW50SXRlbU5hbWVzID0gY29tcG9uZW50SXRlbU5hbWVzLnNsaWNlKDAsIC0xKTtcblx0fVxuXHRjb25zdCBjb21wb25lbnRDbGFzc05hbWUgPSBcInZhbHZlX19tcFwiO1xuXHQvLyBpZiAoIWluQ29vcmQpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRyZWY9e3ZhbHZlUmVmfVxuXHRcdFx0XHR7Li4uZW1pdCh7XG5cdFx0XHRcdFx0Y2xhc3NlczogW2Ake0lBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OfWBdLFxuXHRcdFx0XHR9KX1cblx0XHRcdFx0ZGF0YS1jb21wb25lbnQ9e0NPTVBPTkVOVF9UWVBFfVxuXHRcdFx0XHRvbkNsaWNrPXtvbkFjdGlvblBlcmZvcm1lZH1cblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfUk9XfWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVJ9YH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SE1JX0NPTVBPTkVOVF9DTEFTU30gJHtjb21wb25lbnRDbGFzc05hbWV9YH0+XG5cdFx0XHRcdFx0XHRcdHtjb21wb25lbnRJdGVtTmFtZXMubWFwKCh7IHZhbHVlLCBpbmRleCwga2V5IH0pID0+IChcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRcdFx0XHQvLyBcdGByZS1yZW5kZXJlZCAsa2V5ICR7a2V5fSB2YWx1ZSAke3ZhbHVlfSBpbmRleCAke2luZGV4fWBcblx0XHRcdFx0XHRcdFx0XHQvLyApLFxuXHRcdFx0XHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgKyBcIiBcIiArIGdldFZhbHZlTXBJdGVtQ2xhc3NOYW1lKGluZGV4LCBzdGF0dXMpXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cbiB9O1xuXG5jb25zdCBwb3BvdmVyID0gKHsgYW5jaG9yRWwgfTogeyBhbmNob3JFbDogSFRNTERpdkVsZW1lbnQgfCBudWxsIH0pID0+IHtcblx0Y29uc3QgeyB2YWx2ZVByb3BzLCBjb21wb25lbnRQcm9wcyB9ID0gdXNlVmFsdmVDb250ZXh0KFwiUG9wb3ZlclwiKTtcblx0Y29uc3QgeyBzaG93TGFiZWwsIGxhYmVsUG9zaXRpb24sIHByb2Nlc3NPYmplY3QgfSA9IHZhbHZlUHJvcHM7XG5cdGNvbnN0IHsgc3RhdHVzIH0gPSBwcm9jZXNzT2JqZWN0IHx8IHByb2Nlc3NPYmplY3RQcm9wcztcblx0aWYgKCFzaG93TGFiZWwpIHJldHVybiBudWxsO1xuXHRjb25zdCB7IHBvc2l0aW9uIH0gPSBjb21wb25lbnRQcm9wcztcblx0bGV0IGNsYXNzTmFtZSA9IFwiaXRlbUlkIHBvcG92ZXIgcG9zaXRpb24tbGVmdFwiO1xuXHRpZiAobGFiZWxQb3NpdGlvbikge1xuXHRcdGNsYXNzTmFtZSA9IGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lKGNsYXNzTmFtZSwgbGFiZWxQb3NpdGlvbik7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdHRvcDogcG9zaXRpb24ueSxcblx0XHRcdFx0bGVmdDogcG9zaXRpb24ueCxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PntzdGF0dXM/Lml0ZW1OYW1lfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IFZhbHZlTXBDb21wb3VuZCA9IHtcblx0Um9vdCxcblx0dmFsdmUsXG5cdHBvcG92ZXIsXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCBcIi4vaXRlbS5tb2R1bGUuY3NzXCI7XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuXHRpdGVtQ2xhc3NOYW1lOiBzdHJpbmc7XG5cdGhhbmRsZUNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn1cbi8vIGNvbnN0IGJpdCA9IChuOiBudW1iZXIsIGk6IG51bWJlcik6IG51bWJlciA9PiB7XG4vLyBcdHJldHVybiAobiA+PiBpKSAmIDE7XG4vLyB9O1xuY29uc3QgSXRlbTogUmVhY3QuRkM8SXRlbVByb3BzPiA9ICh7IGl0ZW1DbGFzc05hbWUsIGhhbmRsZUNsaWNrIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2l0ZW1DbGFzc05hbWV9XG5cdG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48L2Rpdj47XG59O1xuSXRlbS5kaXNwbGF5TmFtZSA9IFwiSXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiIsIi8qKlxuICogSE1JIENvbXBvbmVudCBNb2R1bGUgQ29uc3RhbnRzXG4gKi9cbmV4cG9ydCBjb25zdCBJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTiA9XG5cdFwiaWFfc3ltYm9sQ29tcG9uZW50IGlhX3N5bWJvbENvbXBvbmVudF9fY29sdW1uXCI7XG5leHBvcnQgY29uc3QgSUFfU1lNQk9MX0NPTVBPTkVOVF9ST1cgPSBcImlhX3N5bWJvbENvbXBvbmVudF9fcm93XCI7XG5leHBvcnQgY29uc3QgSUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSID0gXCJpYV9zeW1ib2xDb21wb25lbnRfX3dyYXBwZXJcIjtcbmV4cG9ydCBjb25zdCBITUlfQ09NUE9ORU5UX0NMQVNTID0gXCJobWktY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCBWQUxWRV9DT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5WYWx2ZVwiO1xuZXhwb3J0IGNvbnN0IFBVTVBfQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5wcm9jZXNzX29iamVjdHMuUHVtcFwiO1xuZXhwb3J0IGNvbnN0IFNUQVRVU19DT01QT05FTlRfVFlQRSA9IFwiaG1pLmRpc3BsYXkuU3RhdHVzVmFsdmVNcFwiO1xuZXhwb3J0IGNvbnN0IFBBUkFNRVRFUl9MSVNUX0NPTVBPTkVOVF9UWVBFID0gXCJobWkuaW5wdXQuUGFyYW1ldGVyTGlzdFwiO1xuZXhwb3J0IGNvbnN0IENPTU1BTkRfVkFMVkVfTVBfQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5pbnB1dC5Db21tYW5kVmFsdmVNcFwiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb250ZXh0PENvbnRleHRWYWx1ZVR5cGUgZXh0ZW5kcyBvYmplY3QgfCBudWxsPihcbiAgcm9vdENvbXBvbmVudE5hbWU6IHN0cmluZyxcbiAgZGVmYXVsdENvbnRleHQ/OiBDb250ZXh0VmFsdWVUeXBlXG4pIHtcbiAgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q29udGV4dFZhbHVlVHlwZSB8IHVuZGVmaW5lZD4oXG4gICAgZGVmYXVsdENvbnRleHRcbiAgKTtcblxuICBjb25zdCBQcm92aWRlcjogUmVhY3QuRkM8Q29udGV4dFZhbHVlVHlwZSAmIHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9IChcbiAgICBwcm9wc1xuICApID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5jb250ZXh0IH0gPSBwcm9wcztcbiAgICAvLyBPbmx5IHJlLW1lbW9pemUgd2hlbiBwcm9wIHZhbHVlcyBjaGFuZ2VcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgY29uc3QgdmFsdWUgPSBSZWFjdC51c2VNZW1vKFxuICAgICAgKCkgPT4gY29udGV4dCxcbiAgICAgIE9iamVjdC52YWx1ZXMoY29udGV4dClcbiAgICApIGFzIENvbnRleHRWYWx1ZVR5cGU7XG4gICAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XG4gIH07XG5cbiAgUHJvdmlkZXIuZGlzcGxheU5hbWUgPSByb290Q29tcG9uZW50TmFtZSArIFwiUHJvdmlkZXJcIjtcblxuICBmdW5jdGlvbiB1c2VDb250ZXh0KGNvbnN1bWVyTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgaWYgKGNvbnRleHQpIHJldHVybiBjb250ZXh0O1xuICAgIGlmIChkZWZhdWx0Q29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZGVmYXVsdENvbnRleHQ7XG4gICAgLy8gaWYgYSBkZWZhdWx0Q29udGV4dCB3YXNuJ3Qgc3BlY2lmaWVkLCBpdCdzIGEgcmVxdWlyZWQgY29udGV4dC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgXFxgJHtjb25zdW1lck5hbWV9XFxgIG11c3QgYmUgdXNlZCB3aXRoaW4gXFxgJHtyb290Q29tcG9uZW50TmFtZX1cXGBgXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBbUHJvdmlkZXIsIHVzZUNvbnRleHRdIGFzIGNvbnN0O1xufVxuIiwiLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgbnVtYmVyc1xuICovXG5cbi8qKlxuICogVXNpbmcgdGhlIGJpbmFyeSByZXByZXNlbnRhdGlvbiBvZiBuLCBhbiBJbnRlZ2VyLCByZXR1cm5zIHRoZSBib29sZWFuXG4gKiB2YWx1ZSBhdCBpbmRleCwgaS5cbiAqIEBwYXJhbSBuIGEgbnVtYmVyIGlzIGltcGxpY2l0eSBjb252ZXJ0ZXIgdG8gYSAzMmJpdCBpbnRlZ2VyLCBieSB0aGUgYml0d2lzZSBvcGVyYXRvcnNcbiAqIEBwYXJhbSBpIGlzIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgYml0IHBvc2l0aW9uIHRvIGJlIHRlc3RlZFxuICogQHJldHVybnMgdGhlIGJvb2xlYW4gdmFsdWUgb2YgdGhlIGJpdCBhdCBpbmRleCBpLlxuICovXG5leHBvcnQgY29uc3QgZ2V0Qm9vbEF0SW5kZXggPSAobjogbnVtYmVyLCBpOiBudW1iZXIpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIEJvb2xlYW4oKG4gPj4gaSkgJiAxKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2luZHVjdGl2ZWF1dG9tYXRpb25fcGVyc3BlY3RpdmVfY2xpZW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENvbXBvbmVudE1ldGEsIENvbXBvbmVudFJlZ2lzdHJ5IH0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50Jztcbi8vaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25NZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL0J1dHRvbic7XG4vL2ltcG9ydCB7IFZhbHZlLCBWYWx2ZU1ldGEgfSBmcm9tIFwiLi9jb21wb25lbnRzL1ZhbHZlXCI7XG5pbXBvcnQgeyBWYWx2ZSwgVmFsdmVNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL1ZhbHZlJztcbmltcG9ydCB7IFB1bXAsIFB1bXBNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL1B1bXAnO1xuaW1wb3J0IHsgSGVhdEV4Y2hhbmdlciwgSGVhdEV4Y2hhbmdlck1ldGEgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhdEV4Y2hhbmdlcic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50LCBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50TWV0YX0gZnJvbSAnLi9jb21wb25lbnRzL1BhcmFtZXRlckxpc3QnXG5pbXBvcnQgeyBDb21tYW5kVmFsdmVNcCwgQ29tbWFuZFZhbHZlTXBNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL0NvbW1hbmRWYWx2ZU1wJztcbmltcG9ydCB7IFN0YXR1c1ZhbHZlTXAsIFN0YXR1c1ZhbHZlTXBNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL1N0YXR1c1ZhbHZlTXAnO1xuXG4vLyBFeHBvcnQgY29tcG9uZW50cyBmb3IgZXh0ZXJuYWwgcmVmZXJlbmNlXG5leHBvcnQge1xuXHRWYWx2ZSAsXG5cdFB1bXAgLFxuXHRIZWF0RXhjaGFuZ2VyICxcblx0UGFyYW1ldGVyTGlzdENvbXBvbmVudCxcblx0Q29tbWFuZFZhbHZlTXAsXG5cdFN0YXR1c1ZhbHZlTXBcblx0fTtcblxuLy8gSW1wb3J0IGNvbXBvbmVudCBzdHlsZXNcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG4vLyBBcnJheSBvZiBjb21wb25lbnQgbWV0YWRhdGFcbmNvbnN0IGNvbXBvbmVudHM6IEFycmF5PENvbXBvbmVudE1ldGE+ID0gW1xuXHRuZXcgVmFsdmVNZXRhKCksXG5cdG5ldyBQdW1wTWV0YSgpLFxuXHRuZXcgSGVhdEV4Y2hhbmdlck1ldGEoKSxcblx0bmV3IFBhcmFtZXRlckxpc3RDb21wb25lbnRNZXRhKCksXG5cdG5ldyBDb21tYW5kVmFsdmVNcE1ldGEoKSxcblx0bmV3IFN0YXR1c1ZhbHZlTXBNZXRhKCksXG5cbl07XG5cbi8vIFJlZ2lzdGVyIGVhY2ggY29tcG9uZW50IHdpdGggdGhlIFBlcnNwZWN0aXZlIENvbXBvbmVudFJlZ2lzdHJ5XG5jb21wb25lbnRzLmZvckVhY2goKGM6IENvbXBvbmVudE1ldGEpID0+IENvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyKGMpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==