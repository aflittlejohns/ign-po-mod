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
exports.useValveReducer = useValveReducer;
exports.ParameterReducer = ParameterReducer;
exports.paramItemsReducer = paramItemsReducer;
exports.useValveMpCommandReducer = useValveMpCommandReducer;
const use_immer_1 = __webpack_require__(/*! use-immer */ "./node_modules/use-immer/dist/use-immer.js");
const initialState_1 = __webpack_require__(/*! ./initialState */ "./src/api/initialState.ts");
function valveReducer(draft, action) {
    switch (action.type) {
        case "UPDATE_ACT_CONFIG":
            draft.activatedConfig = action.value;
            return draft;
        case "UPDATE_DEACT_CONFIG":
            draft.deactivatedConfig = action.value;
            return draft;
        case "UPDATE_ACT_FB":
            draft.actFB = !draft.actFB;
            return draft;
        case "UPDATE_DE_ACT_FB":
            draft.deActFB = !draft.deActFB;
            return draft;
        case "UPDATE_USL":
            draft.usl = !draft.usl;
            return draft;
        case "UPDATE_LSL":
            draft.lsl = !draft.lsl;
            return draft;
        case "UPDATE_MANUAL":
            draft.manual = !draft.manual;
            return draft;
        case "UPDATE_ALARM":
            draft.alarm = !draft.alarm;
            return draft;
        case "UPDATE_MASKED":
            draft.masked = !draft.masked;
            return draft;
        case "UPDATE_CHANGING":
            draft.changing = !draft.changing;
            return draft;
        case "UPDATE_LOCATE":
            draft.locate = !draft.locate;
            return draft;
        default: // #TODO Add more reducer case statements
            return draft;
    }
}
function useValveReducer() {
    const [state, dispatch] = (0, use_immer_1.useImmerReducer)(valveReducer, initialState_1.valveStatus);
    function updateActConfig(value) {
        dispatch({ type: "UPDATE_ACT_CONFIG", value });
    }
    function updateDeActConfig(value) {
        dispatch({ type: "UPDATE_DEACT_CONFIG", value });
    }
    function updateUsl() {
        dispatch({ type: "UPDATE_USL" });
    }
    function updateLsl() {
        dispatch({ type: "UPDATE_LSL" });
    }
    function updateAlarm() {
        dispatch({ type: "UPDATE_ALARM" });
    }
    function updateActFB() {
        dispatch({ type: "UPDATE_ACT_FB" });
    }
    function updateDeActFB() {
        dispatch({ type: "UPDATE_DE_ACT_FB" });
    }
    function updateManual() {
        dispatch({ type: "UPDATE_MANUAL" });
    }
    function updateMasked() {
        dispatch({ type: "UPDATE_MASKED" });
    }
    function updateChanging() {
        dispatch({ type: "UPDATE_CHANGING" });
    }
    function updateLocate() {
        dispatch({ type: "UPDATE_LOCATE" });
    }
    const useEditValveReducer = {
        state,
        reducer: {
            updateActConfig,
            updateDeActConfig,
            updateAlarm,
            updateActFB,
            updateDeActFB,
            updateUsl,
            updateLsl,
            updateManual,
            updateMasked,
            updateChanging,
            updateLocate,
        },
    };
    return useEditValveReducer;
}
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
exports.pumpItemList = exports.ItemPositionEnum = exports.valveMpItemClickableNameEnum = exports.ItemClickableNameEnum = exports.valveMpItemNameEnum = exports.ItemNameEnum = exports.ValveClassNameEnum = void 0;
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
exports.ItemNameEnum = {
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
    V2f1: "v2f1", // index 15
    V2f2: "v2f2", // index 16
    V3f1: "v3f1", // index 17
    V3f2: "v3f2", // index 18
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
exports.valveMpItemClickableNameEnum = {
    V1b1: "v1b1", // index 0
    V1b2: "v1b2", // index 1
    V1b3: "v1b3", // index 2
    V1b4: "v1b4", // index 3
    V2b1: "v2b1", // index 4
    V2b2: "v2b2", // index 5
    V2b3: "v2b3", // index 6
    V2b4: "v2b4", // index 7
    V2: "v2", // index 8
    V1: "v1", // index 9
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


/***/ }),

/***/ "./src/api/utils.ts":
/*!**************************!*\
  !*** ./src/api/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPumpStatusClassNames = exports.getPumpItemClassName = exports.pumpItemNames = exports.getItemIdPositionClassName = exports.valveMpItemNames = exports.itemNames = exports.getValveMpItemClassName = exports.getItemClassName = void 0;
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
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 12) ||
            (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 12)) {
            className = "show";
        }
        else {
            className = "hide";
        }
    }
    else if (index === 16) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 12) ||
            (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 12)) {
            className = "show";
        }
        else {
            className = "hide";
        }
    }
    else if (index === 17) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 13) ||
            (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 13)) {
            className = "show";
        }
        else {
            className = "hide";
        }
    }
    else if (index === 18) {
        if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 13) ||
            (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 13)) {
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
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.locate) {
            className = className.replace("circle", "") + " circle";
        }
    }
    return className; // default return value if no other condition is met
};
exports.getItemClassName = getItemClassName;
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
        // console.log(
        // 	`index ${index} deact config ${DeactivatedConfigValue} bit is ${getBoolAtIndex(
        // 		DeactivatedConfigValue,
        // 		10
        // 	)}`
        // );
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
                className =
                    className.replace("large", "") + " large";
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
/**
 * @returns Array of itemName(s) for each visual element of a valve component
 */
exports.itemNames = Object.entries(types_1.ItemNameEnum).map((key, index) => {
    // console.log(`In build ItemNames name ${key} index ${index}`);
    return {
        key: (0, uuid_1.v4)(),
        name: key,
        value: key[1],
        index: index,
    };
});
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
exports.getHxModeClassNames = exports.getHxItemClassName = exports.hxItemNames = void 0;
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
exports.COMPONENT_TYPE = "hmi.input.CommandValveMp";
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
    // const tree = props.store.props
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
            console.log("command changed:", command);
        });
        // Cleanup subscription on unmount
        return () => {
            if (typeof unsubscribe === "function") {
                unsubscribe();
            }
        };
    }, [props.store.props]);
    console.log(`props.store.addressPath ${props.store.addressPath}`);
    console.log(`props.store.isDirty ${props.store.props.isDirty()}`);
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
    return (React.createElement("div", { className: "hmi-component-command-valve-mp hmi-component-command-valve-mp__grid" },
        React.createElement("label", { className: "main-label" }, main === null || main === void 0 ? void 0 : main.label),
        React.createElement("div", { role: "group", className: "button-group outlined main-auto-manual" },
            React.createElement("button", { className: `button outlined ${!(main === null || main === void 0 ? void 0 : main.autoManual) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []), onClick: () => handleMainAutoManualSelection("auto") }, "Auto "),
            React.createElement("button", { className: `button outlined ${(main === null || main === void 0 ? void 0 : main.autoManual) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []), onClick: () => handleMainAutoManualSelection("manual") }, "Manual")),
        React.createElement("div", { role: "group", className: "button-group outlined main-on-off" },
            React.createElement("button", { className: `button outlined ${(main === null || main === void 0 ? void 0 : main.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []) || !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleMainManualOn }, "On "),
            React.createElement("button", { className: `button outlined ${!(main === null || main === void 0 ? void 0 : main.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []) || !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleMainManualOff }, "Off")),
        React.createElement("label", { className: "upper-seat-label" }, upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.label),
        React.createElement("div", { role: "group", className: "button-group outlined upper-seat-on-off" },
            React.createElement("button", { className: `button outlined ${(upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.upperSeat) || []) || !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleUslManualOn }, "On "),
            React.createElement("button", { className: `button outlined ${!(upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.upperSeat) || []) || !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleUslManualOff }, "Off")),
        React.createElement("label", { className: "lower-seat-label" }, lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.label),
        React.createElement("div", { role: "group", className: "button-group outlined lower-seat-on-off" },
            React.createElement("button", { className: `button outlined ${(lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.lowerSeat) || []) || !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleLslManualOn }, "On "),
            React.createElement("button", { className: `button outlined ${!(lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.activation) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.lowerSeat) || []) || !(main === null || main === void 0 ? void 0 : main.autoManual), onClick: handleLslManualOff, value: "true" }, "Off"))));
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
            height: 24,
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
_a = (0, createContext_1.useCreateContext)("PumpCompound"), exports.HxContextProvider = _a[0], exports.useHxContext = _a[1];
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
    let componentItemNames = hx_utils_1.hxItemNames;
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
                        (0, hx_utils_1.getHxItemClassName)(index, type || "plate", mode || hx_types_1.HxModes.heating), key: key })))),
            React.createElement(item_1.default, { itemClassName: `locate ${locate ? "show item" : "hide item"}` }))));
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
const hooks_1 = __webpack_require__(/*! ../../../api/hooks */ "./src/api/hooks.ts");
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
        onActionPerformed,
        useValveReducer: hooks_1.useValveReducer }, children));
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
    // 	} else {
    // 		return (
    // 			<div
    // 				ref={valveRef}
    // 				{...emit({
    // 					classes: [`hmi-component valve__mp `],
    // 				})}
    // 				data-component={COMPONENT_TYPE}
    // 				onClick={onActionPerformed}
    // 			>
    // 				{componentItemNames.map(({ value, index, key }) => (
    // 					// console.log(
    // 					// 	`re-rendered ,key ${key} value ${value} index ${index}`
    // 					// ),
    // 					<Item
    // 						itemClassName={value + " " + getValveMpItemClassName(index, status)}
    // 						key={key}
    // 					/>
    // 				))}
    // 			</div>
    // 		);
    // 	}
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
exports.PARAMETER_LIST_COMPONENT_TYPE = exports.STATUS_COMPONENT_TYPE = exports.PUMP_COMPONENT_TYPE = exports.VALVE_COMPONENT_TYPE = exports.HMI_COMPONENT_CLASS = exports.IA_SYMBOL_COMPONENT_WRAPPER = exports.IA_SYMBOL_COMPONENT_ROW = exports.IA_SYMBOL_COMPONENT_COLUMN = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG1pQ29tcG9uZW50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFxQztBQUNsRDtBQUNBO0FBQ0EsOEJBQThCLE9BQU8sa0ZBQWtGLE9BQU87QUFDOUgsR0FBRztBQUNIO0FBQ0EsaUtBQWlLLE1BQU07QUFDdkssR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFFO0FBQ047QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQztBQUNBO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXLElBQUksaUJBQWlCO0FBQ3JFO0FBQ0EsdUJBQXVCLG1CQUFtQixvQkFBb0IsMkRBQTJELElBQUk7QUFDN0g7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0htaUNvbXBvbmVudHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9janMvaW1tZXIuY2pzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91c2UtaW1tZXIvZGlzdC91c2UtaW1tZXIuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbWF4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92MVRvVjYuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y1LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y2LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y2VG9WMS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92Ny5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXBpL2hvb2tzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXBpL2luaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS90eXBlcy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS91dGlscy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FyLXR5cGVzL3Byb2Nlc3NPYmplY3RzL2hlYXRFeGNoYW5nZXJzL2h4LXR5cGVzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXItdXRpbHMvcHJvY2Vzc09iamVjdHMvaGVhdEV4Y2hhbmdlcnMvaHgtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL0NvbW1hbmRWYWx2ZU1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvSGVhdEV4Y2hhbmdlci50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1BhcmFtZXRlckxpc3QudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9QdW1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvU3RhdHVzVmFsdmVNcC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1ZhbHZlLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL2hlYXQtZXhjaGFuZ2Vycy9IZWF0RXhjaGFuZ2VyQ29tcG91bmQudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvcHVtcHMvUHVtcENvbXBvdW5kLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3ZhbHZlLW1wL1ZhbHZlTXAudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvdmFsdmUvaXRlbS50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9pbmRleC5jc3M/NmU5ZSIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL3V0aWxzL2NyZWF0ZUNvbnRleHQudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvdXRpbHMvbnVtYmVyVXRpbC50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL2V4dGVybmFsIHVtZCBcIlBlcnNwZWN0aXZlQ2xpZW50XCIiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy9leHRlcm5hbCB1bWQgXCJSZWFjdFwiIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiUGVyc3BlY3RpdmVDbGllbnRcIiksIHJlcXVpcmUoXCJSZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkhtaUNvbXBvbmVudHNcIiwgW1wiUGVyc3BlY3RpdmVDbGllbnRcIiwgXCJSZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIbWlDb21wb25lbnRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUGVyc3BlY3RpdmVDbGllbnRcIiksIHJlcXVpcmUoXCJSZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSG1pQ29tcG9uZW50c1wiXSA9IGZhY3Rvcnkocm9vdFtcIlBlcnNwZWN0aXZlQ2xpZW50XCJdLCByb290W1wiUmVhY3RcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2luZHVjdGl2ZWF1dG9tYXRpb25fcGVyc3BlY3RpdmVfY2xpZW50X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykgPT4ge1xucmV0dXJuICIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2ltbWVyLnRzXG52YXIgaW1tZXJfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoaW1tZXJfZXhwb3J0cywge1xuICBJbW1lcjogKCkgPT4gSW1tZXIyLFxuICBhcHBseVBhdGNoZXM6ICgpID0+IGFwcGx5UGF0Y2hlcyxcbiAgY2FzdERyYWZ0OiAoKSA9PiBjYXN0RHJhZnQsXG4gIGNhc3RJbW11dGFibGU6ICgpID0+IGNhc3RJbW11dGFibGUsXG4gIGNyZWF0ZURyYWZ0OiAoKSA9PiBjcmVhdGVEcmFmdCxcbiAgY3VycmVudDogKCkgPT4gY3VycmVudCxcbiAgZW5hYmxlTWFwU2V0OiAoKSA9PiBlbmFibGVNYXBTZXQsXG4gIGVuYWJsZVBhdGNoZXM6ICgpID0+IGVuYWJsZVBhdGNoZXMsXG4gIGZpbmlzaERyYWZ0OiAoKSA9PiBmaW5pc2hEcmFmdCxcbiAgZnJlZXplOiAoKSA9PiBmcmVlemUsXG4gIGltbWVyYWJsZTogKCkgPT4gRFJBRlRBQkxFLFxuICBpc0RyYWZ0OiAoKSA9PiBpc0RyYWZ0LFxuICBpc0RyYWZ0YWJsZTogKCkgPT4gaXNEcmFmdGFibGUsXG4gIG5vdGhpbmc6ICgpID0+IE5PVEhJTkcsXG4gIG9yaWdpbmFsOiAoKSA9PiBvcmlnaW5hbCxcbiAgcHJvZHVjZTogKCkgPT4gcHJvZHVjZSxcbiAgcHJvZHVjZVdpdGhQYXRjaGVzOiAoKSA9PiBwcm9kdWNlV2l0aFBhdGNoZXMsXG4gIHNldEF1dG9GcmVlemU6ICgpID0+IHNldEF1dG9GcmVlemUsXG4gIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5OiAoKSA9PiBzZXRVc2VTdHJpY3RTaGFsbG93Q29weVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhpbW1lcl9leHBvcnRzKTtcblxuLy8gc3JjL3V0aWxzL2Vudi50c1xudmFyIE5PVEhJTkcgPSBTeW1ib2wuZm9yKFwiaW1tZXItbm90aGluZ1wiKTtcbnZhciBEUkFGVEFCTEUgPSBTeW1ib2wuZm9yKFwiaW1tZXItZHJhZnRhYmxlXCIpO1xudmFyIERSQUZUX1NUQVRFID0gU3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpO1xuXG4vLyBzcmMvdXRpbHMvZXJyb3JzLnRzXG52YXIgZXJyb3JzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gW1xuICAvLyBBbGwgZXJyb3IgY29kZXMsIHN0YXJ0aW5nIGJ5IDA6XG4gIGZ1bmN0aW9uKHBsdWdpbikge1xuICAgIHJldHVybiBgVGhlIHBsdWdpbiBmb3IgJyR7cGx1Z2lufScgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIFxcYGVuYWJsZSR7cGx1Z2lufSgpXFxgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uYDtcbiAgfSxcbiAgZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gYHByb2R1Y2UgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoaW5ncyB0aGF0IGFyZSBkcmFmdGFibGU6IHBsYWluIG9iamVjdHMsIGFycmF5cywgTWFwLCBTZXQgb3IgY2xhc3NlcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCAnW2ltbWVyYWJsZV06IHRydWUnLiBHb3QgJyR7dGhpbmd9J2A7XG4gIH0sXG4gIFwiVGhpcyBvYmplY3QgaGFzIGJlZW4gZnJvemVuIGFuZCBzaG91bGQgbm90IGJlIG11dGF0ZWRcIixcbiAgZnVuY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiBcIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIgKyBkYXRhO1xuICB9LFxuICBcIkFuIGltbWVyIHByb2R1Y2VyIHJldHVybmVkIGEgbmV3IHZhbHVlICphbmQqIG1vZGlmaWVkIGl0cyBkcmFmdC4gRWl0aGVyIHJldHVybiBhIG5ldyB2YWx1ZSAqb3IqIG1vZGlmeSB0aGUgZHJhZnQuXCIsXG4gIFwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsXG4gIFwiVGhlIGZpcnN0IG9yIHNlY29uZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uXCIsXG4gIFwiVGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIsXG4gIFwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLFxuICBcIkZpcnN0IGFyZ3VtZW50IHRvIGBmaW5pc2hEcmFmdGAgbXVzdCBiZSBhIGRyYWZ0IHJldHVybmVkIGJ5IGBjcmVhdGVEcmFmdGBcIixcbiAgZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gYCdjdXJyZW50JyBleHBlY3RzIGEgZHJhZnQsIGdvdDogJHt0aGluZ31gO1xuICB9LFxuICBcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsXG4gIFwiT2JqZWN0LnNldFByb3RvdHlwZU9mKCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIixcbiAgXCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIixcbiAgXCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsXG4gIGZ1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIGAnb3JpZ2luYWwnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiAke3RoaW5nfWA7XG4gIH1cbiAgLy8gTm90ZTogaWYgbW9yZSBlcnJvcnMgYXJlIGFkZGVkLCB0aGUgZXJyb3JPZmZzZXQgaW4gUGF0Y2hlcy50cyBzaG91bGQgYmUgaW5jcmVhc2VkXG4gIC8vIFNlZSBQYXRjaGVzLnRzIGZvciBhZGRpdGlvbmFsIGVycm9yc1xuXSA6IFtdO1xuZnVuY3Rpb24gZGllKGVycm9yLCAuLi5hcmdzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBjb25zdCBlID0gZXJyb3JzW2Vycm9yXTtcbiAgICBjb25zdCBtc2cgPSB0eXBlb2YgZSA9PT0gXCJmdW5jdGlvblwiID8gZS5hcHBseShudWxsLCBhcmdzKSA6IGU7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbSW1tZXJdICR7bXNnfWApO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgW0ltbWVyXSBtaW5pZmllZCBlcnJvciBucjogJHtlcnJvcn0uIEZ1bGwgZXJyb3IgYXQ6IGh0dHBzOi8vYml0Lmx5LzNjWEVLV2ZgXG4gICk7XG59XG5cbi8vIHNyYy91dGlscy9jb21tb24udHNcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbmZ1bmN0aW9uIGlzRHJhZnQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgISF2YWx1ZVtEUkFGVF9TVEFURV07XG59XG5mdW5jdGlvbiBpc0RyYWZ0YWJsZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKVxuICAgIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpIHx8ICEhdmFsdWVbRFJBRlRBQkxFXSB8fCAhIXZhbHVlLmNvbnN0cnVjdG9yPy5bRFJBRlRBQkxFXSB8fCBpc01hcCh2YWx1ZSkgfHwgaXNTZXQodmFsdWUpO1xufVxudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCk7XG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcHJvdG8gPSBnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IEN0b3IgPSBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgaWYgKEN0b3IgPT09IE9iamVjdClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09IFwiZnVuY3Rpb25cIiAmJiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKEN0b3IpID09PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuZnVuY3Rpb24gb3JpZ2luYWwodmFsdWUpIHtcbiAgaWYgKCFpc0RyYWZ0KHZhbHVlKSlcbiAgICBkaWUoMTUsIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlW0RSQUZUX1NUQVRFXS5iYXNlXztcbn1cbmZ1bmN0aW9uIGVhY2gob2JqLCBpdGVyKSB7XG4gIGlmIChnZXRBcmNodHlwZShvYmopID09PSAwIC8qIE9iamVjdCAqLykge1xuICAgIFJlZmxlY3Qub3duS2V5cyhvYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaXRlcihrZXksIG9ialtrZXldLCBvYmopO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iai5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IGl0ZXIoaW5kZXgsIGVudHJ5LCBvYmopKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0QXJjaHR5cGUodGhpbmcpIHtcbiAgY29uc3Qgc3RhdGUgPSB0aGluZ1tEUkFGVF9TVEFURV07XG4gIHJldHVybiBzdGF0ZSA/IHN0YXRlLnR5cGVfIDogQXJyYXkuaXNBcnJheSh0aGluZykgPyAxIC8qIEFycmF5ICovIDogaXNNYXAodGhpbmcpID8gMiAvKiBNYXAgKi8gOiBpc1NldCh0aGluZykgPyAzIC8qIFNldCAqLyA6IDAgLyogT2JqZWN0ICovO1xufVxuZnVuY3Rpb24gaGFzKHRoaW5nLCBwcm9wKSB7XG4gIHJldHVybiBnZXRBcmNodHlwZSh0aGluZykgPT09IDIgLyogTWFwICovID8gdGhpbmcuaGFzKHByb3ApIDogT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaW5nLCBwcm9wKTtcbn1cbmZ1bmN0aW9uIGdldCh0aGluZywgcHJvcCkge1xuICByZXR1cm4gZ2V0QXJjaHR5cGUodGhpbmcpID09PSAyIC8qIE1hcCAqLyA/IHRoaW5nLmdldChwcm9wKSA6IHRoaW5nW3Byb3BdO1xufVxuZnVuY3Rpb24gc2V0KHRoaW5nLCBwcm9wT3JPbGRWYWx1ZSwgdmFsdWUpIHtcbiAgY29uc3QgdCA9IGdldEFyY2h0eXBlKHRoaW5nKTtcbiAgaWYgKHQgPT09IDIgLyogTWFwICovKVxuICAgIHRoaW5nLnNldChwcm9wT3JPbGRWYWx1ZSwgdmFsdWUpO1xuICBlbHNlIGlmICh0ID09PSAzIC8qIFNldCAqLykge1xuICAgIHRoaW5nLmFkZCh2YWx1ZSk7XG4gIH0gZWxzZVxuICAgIHRoaW5nW3Byb3BPck9sZFZhbHVlXSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5mdW5jdGlvbiBpc01hcCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIE1hcDtcbn1cbmZ1bmN0aW9uIGlzU2V0KHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgU2V0O1xufVxuZnVuY3Rpb24gbGF0ZXN0KHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5jb3B5XyB8fCBzdGF0ZS5iYXNlXztcbn1cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KGJhc2UsIHN0cmljdCkge1xuICBpZiAoaXNNYXAoYmFzZSkpIHtcbiAgICByZXR1cm4gbmV3IE1hcChiYXNlKTtcbiAgfVxuICBpZiAoaXNTZXQoYmFzZSkpIHtcbiAgICByZXR1cm4gbmV3IFNldChiYXNlKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShiYXNlKSlcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYmFzZSk7XG4gIGNvbnN0IGlzUGxhaW4gPSBpc1BsYWluT2JqZWN0KGJhc2UpO1xuICBpZiAoc3RyaWN0ID09PSB0cnVlIHx8IHN0cmljdCA9PT0gXCJjbGFzc19vbmx5XCIgJiYgIWlzUGxhaW4pIHtcbiAgICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGJhc2UpO1xuICAgIGRlbGV0ZSBkZXNjcmlwdG9yc1tEUkFGVF9TVEFURV07XG4gICAgbGV0IGtleXMgPSBSZWZsZWN0Lm93bktleXMoZGVzY3JpcHRvcnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGNvbnN0IGRlc2MgPSBkZXNjcmlwdG9yc1trZXldO1xuICAgICAgaWYgKGRlc2Mud3JpdGFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpXG4gICAgICAgIGRlc2NyaXB0b3JzW2tleV0gPSB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIC8vIGNvdWxkIGxpdmUgd2l0aCAhIWRlc2Muc2V0IGFzIHdlbGwgaGVyZS4uLlxuICAgICAgICAgIGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcbiAgICAgICAgICB2YWx1ZTogYmFzZVtrZXldXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKGdldFByb3RvdHlwZU9mKGJhc2UpLCBkZXNjcmlwdG9ycyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihiYXNlKTtcbiAgICBpZiAocHJvdG8gIT09IG51bGwgJiYgaXNQbGFpbikge1xuICAgICAgcmV0dXJuIHsgLi4uYmFzZSB9O1xuICAgIH1cbiAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKHByb3RvKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIGJhc2UpO1xuICB9XG59XG5mdW5jdGlvbiBmcmVlemUob2JqLCBkZWVwID0gZmFsc2UpIHtcbiAgaWYgKGlzRnJvemVuKG9iaikgfHwgaXNEcmFmdChvYmopIHx8ICFpc0RyYWZ0YWJsZShvYmopKVxuICAgIHJldHVybiBvYmo7XG4gIGlmIChnZXRBcmNodHlwZShvYmopID4gMSkge1xuICAgIG9iai5zZXQgPSBvYmouYWRkID0gb2JqLmNsZWFyID0gb2JqLmRlbGV0ZSA9IGRvbnRNdXRhdGVGcm96ZW5Db2xsZWN0aW9ucztcbiAgfVxuICBPYmplY3QuZnJlZXplKG9iaik7XG4gIGlmIChkZWVwKVxuICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiBmcmVlemUodmFsdWUsIHRydWUpKTtcbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIGRvbnRNdXRhdGVGcm96ZW5Db2xsZWN0aW9ucygpIHtcbiAgZGllKDIpO1xufVxuZnVuY3Rpb24gaXNGcm96ZW4ob2JqKSB7XG4gIHJldHVybiBPYmplY3QuaXNGcm96ZW4ob2JqKTtcbn1cblxuLy8gc3JjL3V0aWxzL3BsdWdpbnMudHNcbnZhciBwbHVnaW5zID0ge307XG5mdW5jdGlvbiBnZXRQbHVnaW4ocGx1Z2luS2V5KSB7XG4gIGNvbnN0IHBsdWdpbiA9IHBsdWdpbnNbcGx1Z2luS2V5XTtcbiAgaWYgKCFwbHVnaW4pIHtcbiAgICBkaWUoMCwgcGx1Z2luS2V5KTtcbiAgfVxuICByZXR1cm4gcGx1Z2luO1xufVxuZnVuY3Rpb24gbG9hZFBsdWdpbihwbHVnaW5LZXksIGltcGxlbWVudGF0aW9uKSB7XG4gIGlmICghcGx1Z2luc1twbHVnaW5LZXldKVxuICAgIHBsdWdpbnNbcGx1Z2luS2V5XSA9IGltcGxlbWVudGF0aW9uO1xufVxuXG4vLyBzcmMvY29yZS9zY29wZS50c1xudmFyIGN1cnJlbnRTY29wZTtcbmZ1bmN0aW9uIGdldEN1cnJlbnRTY29wZSgpIHtcbiAgcmV0dXJuIGN1cnJlbnRTY29wZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNjb3BlKHBhcmVudF8sIGltbWVyXykge1xuICByZXR1cm4ge1xuICAgIGRyYWZ0c186IFtdLFxuICAgIHBhcmVudF8sXG4gICAgaW1tZXJfLFxuICAgIC8vIFdoZW5ldmVyIHRoZSBtb2RpZmllZCBkcmFmdCBjb250YWlucyBhIGRyYWZ0IGZyb20gYW5vdGhlciBzY29wZSwgd2VcbiAgICAvLyBuZWVkIHRvIHByZXZlbnQgYXV0by1mcmVlemluZyBzbyB0aGUgdW5vd25lZCBkcmFmdCBjYW4gYmUgZmluYWxpemVkLlxuICAgIGNhbkF1dG9GcmVlemVfOiB0cnVlLFxuICAgIHVuZmluYWxpemVkRHJhZnRzXzogMFxuICB9O1xufVxuZnVuY3Rpb24gdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpIHtcbiAgaWYgKHBhdGNoTGlzdGVuZXIpIHtcbiAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpO1xuICAgIHNjb3BlLnBhdGNoZXNfID0gW107XG4gICAgc2NvcGUuaW52ZXJzZVBhdGNoZXNfID0gW107XG4gICAgc2NvcGUucGF0Y2hMaXN0ZW5lcl8gPSBwYXRjaExpc3RlbmVyO1xuICB9XG59XG5mdW5jdGlvbiByZXZva2VTY29wZShzY29wZSkge1xuICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgc2NvcGUuZHJhZnRzXy5mb3JFYWNoKHJldm9rZURyYWZ0KTtcbiAgc2NvcGUuZHJhZnRzXyA9IG51bGw7XG59XG5mdW5jdGlvbiBsZWF2ZVNjb3BlKHNjb3BlKSB7XG4gIGlmIChzY29wZSA9PT0gY3VycmVudFNjb3BlKSB7XG4gICAgY3VycmVudFNjb3BlID0gc2NvcGUucGFyZW50XztcbiAgfVxufVxuZnVuY3Rpb24gZW50ZXJTY29wZShpbW1lcjIpIHtcbiAgcmV0dXJuIGN1cnJlbnRTY29wZSA9IGNyZWF0ZVNjb3BlKGN1cnJlbnRTY29wZSwgaW1tZXIyKTtcbn1cbmZ1bmN0aW9uIHJldm9rZURyYWZ0KGRyYWZ0KSB7XG4gIGNvbnN0IHN0YXRlID0gZHJhZnRbRFJBRlRfU1RBVEVdO1xuICBpZiAoc3RhdGUudHlwZV8gPT09IDAgLyogT2JqZWN0ICovIHx8IHN0YXRlLnR5cGVfID09PSAxIC8qIEFycmF5ICovKVxuICAgIHN0YXRlLnJldm9rZV8oKTtcbiAgZWxzZVxuICAgIHN0YXRlLnJldm9rZWRfID0gdHJ1ZTtcbn1cblxuLy8gc3JjL2NvcmUvZmluYWxpemUudHNcbmZ1bmN0aW9uIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSkge1xuICBzY29wZS51bmZpbmFsaXplZERyYWZ0c18gPSBzY29wZS5kcmFmdHNfLmxlbmd0aDtcbiAgY29uc3QgYmFzZURyYWZ0ID0gc2NvcGUuZHJhZnRzX1swXTtcbiAgY29uc3QgaXNSZXBsYWNlZCA9IHJlc3VsdCAhPT0gdm9pZCAwICYmIHJlc3VsdCAhPT0gYmFzZURyYWZ0O1xuICBpZiAoaXNSZXBsYWNlZCkge1xuICAgIGlmIChiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLm1vZGlmaWVkXykge1xuICAgICAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuICAgICAgZGllKDQpO1xuICAgIH1cbiAgICBpZiAoaXNEcmFmdGFibGUocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIHJlc3VsdCk7XG4gICAgICBpZiAoIXNjb3BlLnBhcmVudF8pXG4gICAgICAgIG1heWJlRnJlZXplKHNjb3BlLCByZXN1bHQpO1xuICAgIH1cbiAgICBpZiAoc2NvcGUucGF0Y2hlc18pIHtcbiAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKFxuICAgICAgICBiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLmJhc2VfLFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIHNjb3BlLnBhdGNoZXNfLFxuICAgICAgICBzY29wZS5pbnZlcnNlUGF0Y2hlc19cbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGZpbmFsaXplKHNjb3BlLCBiYXNlRHJhZnQsIFtdKTtcbiAgfVxuICByZXZva2VTY29wZShzY29wZSk7XG4gIGlmIChzY29wZS5wYXRjaGVzXykge1xuICAgIHNjb3BlLnBhdGNoTGlzdGVuZXJfKHNjb3BlLnBhdGNoZXNfLCBzY29wZS5pbnZlcnNlUGF0Y2hlc18pO1xuICB9XG4gIHJldHVybiByZXN1bHQgIT09IE5PVEhJTkcgPyByZXN1bHQgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBmaW5hbGl6ZShyb290U2NvcGUsIHZhbHVlLCBwYXRoKSB7XG4gIGlmIChpc0Zyb3plbih2YWx1ZSkpXG4gICAgcmV0dXJuIHZhbHVlO1xuICBjb25zdCBzdGF0ZSA9IHZhbHVlW0RSQUZUX1NUQVRFXTtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIGVhY2goXG4gICAgICB2YWx1ZSxcbiAgICAgIChrZXksIGNoaWxkVmFsdWUpID0+IGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBzdGF0ZSwgdmFsdWUsIGtleSwgY2hpbGRWYWx1ZSwgcGF0aClcbiAgICApO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoc3RhdGUuc2NvcGVfICE9PSByb290U2NvcGUpXG4gICAgcmV0dXJuIHZhbHVlO1xuICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgc3RhdGUuYmFzZV8sIHRydWUpO1xuICAgIHJldHVybiBzdGF0ZS5iYXNlXztcbiAgfVxuICBpZiAoIXN0YXRlLmZpbmFsaXplZF8pIHtcbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gdHJ1ZTtcbiAgICBzdGF0ZS5zY29wZV8udW5maW5hbGl6ZWREcmFmdHNfLS07XG4gICAgY29uc3QgcmVzdWx0ID0gc3RhdGUuY29weV87XG4gICAgbGV0IHJlc3VsdEVhY2ggPSByZXN1bHQ7XG4gICAgbGV0IGlzU2V0MiA9IGZhbHNlO1xuICAgIGlmIChzdGF0ZS50eXBlXyA9PT0gMyAvKiBTZXQgKi8pIHtcbiAgICAgIHJlc3VsdEVhY2ggPSBuZXcgU2V0KHJlc3VsdCk7XG4gICAgICByZXN1bHQuY2xlYXIoKTtcbiAgICAgIGlzU2V0MiA9IHRydWU7XG4gICAgfVxuICAgIGVhY2goXG4gICAgICByZXN1bHRFYWNoLFxuICAgICAgKGtleSwgY2hpbGRWYWx1ZSkgPT4gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCByZXN1bHQsIGtleSwgY2hpbGRWYWx1ZSwgcGF0aCwgaXNTZXQyKVxuICAgICk7XG4gICAgbWF5YmVGcmVlemUocm9vdFNjb3BlLCByZXN1bHQsIGZhbHNlKTtcbiAgICBpZiAocGF0aCAmJiByb290U2NvcGUucGF0Y2hlc18pIHtcbiAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVQYXRjaGVzXyhcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHBhdGgsXG4gICAgICAgIHJvb3RTY29wZS5wYXRjaGVzXyxcbiAgICAgICAgcm9vdFNjb3BlLmludmVyc2VQYXRjaGVzX1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlLmNvcHlfO1xufVxuZnVuY3Rpb24gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHBhcmVudFN0YXRlLCB0YXJnZXRPYmplY3QsIHByb3AsIGNoaWxkVmFsdWUsIHJvb3RQYXRoLCB0YXJnZXRJc1NldCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGNoaWxkVmFsdWUgPT09IHRhcmdldE9iamVjdClcbiAgICBkaWUoNSk7XG4gIGlmIChpc0RyYWZ0KGNoaWxkVmFsdWUpKSB7XG4gICAgY29uc3QgcGF0aCA9IHJvb3RQYXRoICYmIHBhcmVudFN0YXRlICYmIHBhcmVudFN0YXRlLnR5cGVfICE9PSAzIC8qIFNldCAqLyAmJiAvLyBTZXQgb2JqZWN0cyBhcmUgYXRvbWljIHNpbmNlIHRoZXkgaGF2ZSBubyBrZXlzLlxuICAgICFoYXMocGFyZW50U3RhdGUuYXNzaWduZWRfLCBwcm9wKSA/IHJvb3RQYXRoLmNvbmNhdChwcm9wKSA6IHZvaWQgMDtcbiAgICBjb25zdCByZXMgPSBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUsIHBhdGgpO1xuICAgIHNldCh0YXJnZXRPYmplY3QsIHByb3AsIHJlcyk7XG4gICAgaWYgKGlzRHJhZnQocmVzKSkge1xuICAgICAgcm9vdFNjb3BlLmNhbkF1dG9GcmVlemVfID0gZmFsc2U7XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAodGFyZ2V0SXNTZXQpIHtcbiAgICB0YXJnZXRPYmplY3QuYWRkKGNoaWxkVmFsdWUpO1xuICB9XG4gIGlmIChpc0RyYWZ0YWJsZShjaGlsZFZhbHVlKSAmJiAhaXNGcm96ZW4oY2hpbGRWYWx1ZSkpIHtcbiAgICBpZiAoIXJvb3RTY29wZS5pbW1lcl8uYXV0b0ZyZWV6ZV8gJiYgcm9vdFNjb3BlLnVuZmluYWxpemVkRHJhZnRzXyA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmluYWxpemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlKTtcbiAgICBpZiAoKCFwYXJlbnRTdGF0ZSB8fCAhcGFyZW50U3RhdGUuc2NvcGVfLnBhcmVudF8pICYmIHR5cGVvZiBwcm9wICE9PSBcInN5bWJvbFwiICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0YXJnZXRPYmplY3QsIHByb3ApKVxuICAgICAgbWF5YmVGcmVlemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlKTtcbiAgfVxufVxuZnVuY3Rpb24gbWF5YmVGcmVlemUoc2NvcGUsIHZhbHVlLCBkZWVwID0gZmFsc2UpIHtcbiAgaWYgKCFzY29wZS5wYXJlbnRfICYmIHNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiBzY29wZS5jYW5BdXRvRnJlZXplXykge1xuICAgIGZyZWV6ZSh2YWx1ZSwgZGVlcCk7XG4gIH1cbn1cblxuLy8gc3JjL2NvcmUvcHJveHkudHNcbmZ1bmN0aW9uIGNyZWF0ZVByb3h5UHJveHkoYmFzZSwgcGFyZW50KSB7XG4gIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGJhc2UpO1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICB0eXBlXzogaXNBcnJheSA/IDEgLyogQXJyYXkgKi8gOiAwIC8qIE9iamVjdCAqLyxcbiAgICAvLyBUcmFjayB3aGljaCBwcm9kdWNlIGNhbGwgdGhpcyBpcyBhc3NvY2lhdGVkIHdpdGguXG4gICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgLy8gVHJ1ZSBmb3IgYm90aCBzaGFsbG93IGFuZCBkZWVwIGNoYW5nZXMuXG4gICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAvLyBVc2VkIGR1cmluZyBmaW5hbGl6YXRpb24uXG4gICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgLy8gVHJhY2sgd2hpY2ggcHJvcGVydGllcyBoYXZlIGJlZW4gYXNzaWduZWQgKHRydWUpIG9yIGRlbGV0ZWQgKGZhbHNlKS5cbiAgICBhc3NpZ25lZF86IHt9LFxuICAgIC8vIFRoZSBwYXJlbnQgZHJhZnQgc3RhdGUuXG4gICAgcGFyZW50XzogcGFyZW50LFxuICAgIC8vIFRoZSBiYXNlIHN0YXRlLlxuICAgIGJhc2VfOiBiYXNlLFxuICAgIC8vIFRoZSBiYXNlIHByb3h5LlxuICAgIGRyYWZ0XzogbnVsbCxcbiAgICAvLyBzZXQgYmVsb3dcbiAgICAvLyBUaGUgYmFzZSBjb3B5IHdpdGggYW55IHVwZGF0ZWQgdmFsdWVzLlxuICAgIGNvcHlfOiBudWxsLFxuICAgIC8vIENhbGxlZCBieSB0aGUgYHByb2R1Y2VgIGZ1bmN0aW9uLlxuICAgIHJldm9rZV86IG51bGwsXG4gICAgaXNNYW51YWxfOiBmYWxzZVxuICB9O1xuICBsZXQgdGFyZ2V0ID0gc3RhdGU7XG4gIGxldCB0cmFwcyA9IG9iamVjdFRyYXBzO1xuICBpZiAoaXNBcnJheSkge1xuICAgIHRhcmdldCA9IFtzdGF0ZV07XG4gICAgdHJhcHMgPSBhcnJheVRyYXBzO1xuICB9XG4gIGNvbnN0IHsgcmV2b2tlLCBwcm94eSB9ID0gUHJveHkucmV2b2NhYmxlKHRhcmdldCwgdHJhcHMpO1xuICBzdGF0ZS5kcmFmdF8gPSBwcm94eTtcbiAgc3RhdGUucmV2b2tlXyA9IHJldm9rZTtcbiAgcmV0dXJuIHByb3h5O1xufVxudmFyIG9iamVjdFRyYXBzID0ge1xuICBnZXQoc3RhdGUsIHByb3ApIHtcbiAgICBpZiAocHJvcCA9PT0gRFJBRlRfU1RBVEUpXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgY29uc3Qgc291cmNlID0gbGF0ZXN0KHN0YXRlKTtcbiAgICBpZiAoIWhhcyhzb3VyY2UsIHByb3ApKSB7XG4gICAgICByZXR1cm4gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGUsIHNvdXJjZSwgcHJvcCk7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gc291cmNlW3Byb3BdO1xuICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBwZWVrKHN0YXRlLmJhc2VfLCBwcm9wKSkge1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfW3Byb3BdID0gY3JlYXRlUHJveHkodmFsdWUsIHN0YXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBoYXMoc3RhdGUsIHByb3ApIHtcbiAgICByZXR1cm4gcHJvcCBpbiBsYXRlc3Qoc3RhdGUpO1xuICB9LFxuICBvd25LZXlzKHN0YXRlKSB7XG4gICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyhsYXRlc3Qoc3RhdGUpKTtcbiAgfSxcbiAgc2V0KHN0YXRlLCBwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IGRlc2MgPSBnZXREZXNjcmlwdG9yRnJvbVByb3RvKGxhdGVzdChzdGF0ZSksIHByb3ApO1xuICAgIGlmIChkZXNjPy5zZXQpIHtcbiAgICAgIGRlc2Muc2V0LmNhbGwoc3RhdGUuZHJhZnRfLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQyID0gcGVlayhsYXRlc3Qoc3RhdGUpLCBwcm9wKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnQyPy5bRFJBRlRfU1RBVEVdO1xuICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUuYmFzZV8gPT09IHZhbHVlKSB7XG4gICAgICAgIHN0YXRlLmNvcHlfW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpcyh2YWx1ZSwgY3VycmVudDIpICYmICh2YWx1ZSAhPT0gdm9pZCAwIHx8IGhhcyhzdGF0ZS5iYXNlXywgcHJvcCkpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIHByZXBhcmVDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmNvcHlfW3Byb3BdID09PSB2YWx1ZSAmJiAvLyBzcGVjaWFsIGNhc2U6IGhhbmRsZSBuZXcgcHJvcHMgd2l0aCB2YWx1ZSAndW5kZWZpbmVkJ1xuICAgICh2YWx1ZSAhPT0gdm9pZCAwIHx8IHByb3AgaW4gc3RhdGUuY29weV8pIHx8IC8vIHNwZWNpYWwgY2FzZTogTmFOXG4gICAgTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNOYU4oc3RhdGUuY29weV9bcHJvcF0pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgc3RhdGUuY29weV9bcHJvcF0gPSB2YWx1ZTtcbiAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eShzdGF0ZSwgcHJvcCkge1xuICAgIGlmIChwZWVrKHN0YXRlLmJhc2VfLCBwcm9wKSAhPT0gdm9pZCAwIHx8IHByb3AgaW4gc3RhdGUuYmFzZV8pIHtcbiAgICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IGZhbHNlO1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgc3RhdGUuYXNzaWduZWRfW3Byb3BdO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY29weV8pIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZS5jb3B5X1twcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIC8vIE5vdGU6IFdlIG5ldmVyIGNvZXJjZSBgZGVzYy52YWx1ZWAgaW50byBhbiBJbW1lciBkcmFmdCwgYmVjYXVzZSB3ZSBjYW4ndCBtYWtlXG4gIC8vIHRoZSBzYW1lIGd1YXJhbnRlZSBpbiBFUzUgbW9kZS5cbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHN0YXRlLCBwcm9wKSB7XG4gICAgY29uc3Qgb3duZXIgPSBsYXRlc3Qoc3RhdGUpO1xuICAgIGNvbnN0IGRlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvd25lciwgcHJvcCk7XG4gICAgaWYgKCFkZXNjKVxuICAgICAgcmV0dXJuIGRlc2M7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiBzdGF0ZS50eXBlXyAhPT0gMSAvKiBBcnJheSAqLyB8fCBwcm9wICE9PSBcImxlbmd0aFwiLFxuICAgICAgZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgdmFsdWU6IG93bmVyW3Byb3BdXG4gICAgfTtcbiAgfSxcbiAgZGVmaW5lUHJvcGVydHkoKSB7XG4gICAgZGllKDExKTtcbiAgfSxcbiAgZ2V0UHJvdG90eXBlT2Yoc3RhdGUpIHtcbiAgICByZXR1cm4gZ2V0UHJvdG90eXBlT2Yoc3RhdGUuYmFzZV8pO1xuICB9LFxuICBzZXRQcm90b3R5cGVPZigpIHtcbiAgICBkaWUoMTIpO1xuICB9XG59O1xudmFyIGFycmF5VHJhcHMgPSB7fTtcbmVhY2gob2JqZWN0VHJhcHMsIChrZXksIGZuKSA9PiB7XG4gIGFycmF5VHJhcHNba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgIGFyZ3VtZW50c1swXSA9IGFyZ3VtZW50c1swXVswXTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0pO1xuYXJyYXlUcmFwcy5kZWxldGVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHN0YXRlLCBwcm9wKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNOYU4ocGFyc2VJbnQocHJvcCkpKVxuICAgIGRpZSgxMyk7XG4gIHJldHVybiBhcnJheVRyYXBzLnNldC5jYWxsKHRoaXMsIHN0YXRlLCBwcm9wLCB2b2lkIDApO1xufTtcbmFycmF5VHJhcHMuc2V0ID0gZnVuY3Rpb24oc3RhdGUsIHByb3AsIHZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJvcCAhPT0gXCJsZW5ndGhcIiAmJiBpc05hTihwYXJzZUludChwcm9wKSkpXG4gICAgZGllKDE0KTtcbiAgcmV0dXJuIG9iamVjdFRyYXBzLnNldC5jYWxsKHRoaXMsIHN0YXRlWzBdLCBwcm9wLCB2YWx1ZSwgc3RhdGVbMF0pO1xufTtcbmZ1bmN0aW9uIHBlZWsoZHJhZnQsIHByb3ApIHtcbiAgY29uc3Qgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG4gIGNvbnN0IHNvdXJjZSA9IHN0YXRlID8gbGF0ZXN0KHN0YXRlKSA6IGRyYWZ0O1xuICByZXR1cm4gc291cmNlW3Byb3BdO1xufVxuZnVuY3Rpb24gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGUsIHNvdXJjZSwgcHJvcCkge1xuICBjb25zdCBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApO1xuICByZXR1cm4gZGVzYyA/IGB2YWx1ZWAgaW4gZGVzYyA/IGRlc2MudmFsdWUgOiAoXG4gICAgLy8gVGhpcyBpcyBhIHZlcnkgc3BlY2lhbCBjYXNlLCBpZiB0aGUgcHJvcCBpcyBhIGdldHRlciBkZWZpbmVkIGJ5IHRoZVxuICAgIC8vIHByb3RvdHlwZSwgd2Ugc2hvdWxkIGludm9rZSBpdCB3aXRoIHRoZSBkcmFmdCBhcyBjb250ZXh0IVxuICAgIGRlc2MuZ2V0Py5jYWxsKHN0YXRlLmRyYWZ0XylcbiAgKSA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGdldERlc2NyaXB0b3JGcm9tUHJvdG8oc291cmNlLCBwcm9wKSB7XG4gIGlmICghKHByb3AgaW4gc291cmNlKSlcbiAgICByZXR1cm4gdm9pZCAwO1xuICBsZXQgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihzb3VyY2UpO1xuICB3aGlsZSAocHJvdG8pIHtcbiAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgcHJvcCk7XG4gICAgaWYgKGRlc2MpXG4gICAgICByZXR1cm4gZGVzYztcbiAgICBwcm90byA9IGdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufVxuZnVuY3Rpb24gbWFya0NoYW5nZWQoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICBzdGF0ZS5tb2RpZmllZF8gPSB0cnVlO1xuICAgIGlmIChzdGF0ZS5wYXJlbnRfKSB7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZS5wYXJlbnRfKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHByZXBhcmVDb3B5KHN0YXRlKSB7XG4gIGlmICghc3RhdGUuY29weV8pIHtcbiAgICBzdGF0ZS5jb3B5XyA9IHNoYWxsb3dDb3B5KFxuICAgICAgc3RhdGUuYmFzZV8sXG4gICAgICBzdGF0ZS5zY29wZV8uaW1tZXJfLnVzZVN0cmljdFNoYWxsb3dDb3B5X1xuICAgICk7XG4gIH1cbn1cblxuLy8gc3JjL2NvcmUvaW1tZXJDbGFzcy50c1xudmFyIEltbWVyMiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5hdXRvRnJlZXplXyA9IHRydWU7XG4gICAgdGhpcy51c2VTdHJpY3RTaGFsbG93Q29weV8gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgYHByb2R1Y2VgIGZ1bmN0aW9uIHRha2VzIGEgdmFsdWUgYW5kIGEgXCJyZWNpcGUgZnVuY3Rpb25cIiAod2hvc2VcbiAgICAgKiByZXR1cm4gdmFsdWUgb2Z0ZW4gZGVwZW5kcyBvbiB0aGUgYmFzZSBzdGF0ZSkuIFRoZSByZWNpcGUgZnVuY3Rpb24gaXNcbiAgICAgKiBmcmVlIHRvIG11dGF0ZSBpdHMgZmlyc3QgYXJndW1lbnQgaG93ZXZlciBpdCB3YW50cy4gQWxsIG11dGF0aW9ucyBhcmVcbiAgICAgKiBvbmx5IGV2ZXIgYXBwbGllZCB0byBhIF9fY29weV9fIG9mIHRoZSBiYXNlIHN0YXRlLlxuICAgICAqXG4gICAgICogUGFzcyBvbmx5IGEgZnVuY3Rpb24gdG8gY3JlYXRlIGEgXCJjdXJyaWVkIHByb2R1Y2VyXCIgd2hpY2ggcmVsaWV2ZXMgeW91XG4gICAgICogZnJvbSBwYXNzaW5nIHRoZSByZWNpcGUgZnVuY3Rpb24gZXZlcnkgdGltZS5cbiAgICAgKlxuICAgICAqIE9ubHkgcGxhaW4gb2JqZWN0cyBhbmQgYXJyYXlzIGFyZSBtYWRlIG11dGFibGUuIEFsbCBvdGhlciBvYmplY3RzIGFyZVxuICAgICAqIGNvbnNpZGVyZWQgdW5jb3B5YWJsZS5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRoaXMgZnVuY3Rpb24gaXMgX19ib3VuZF9fIHRvIGl0cyBgSW1tZXJgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGJhc2UgLSB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlY2lwZSAtIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSBwcm94eSBvZiB0aGUgYmFzZSBzdGF0ZSBhcyBmaXJzdCBhcmd1bWVudCBhbmQgd2hpY2ggY2FuIGJlIGZyZWVseSBtb2RpZmllZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHBhdGNoTGlzdGVuZXIgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggYWxsIHRoZSBwYXRjaGVzIHByb2R1Y2VkIGhlcmVcbiAgICAgKiBAcmV0dXJucyB7YW55fSBhIG5ldyBzdGF0ZSwgb3IgdGhlIGluaXRpYWwgc3RhdGUgaWYgbm90aGluZyB3YXMgbW9kaWZpZWRcbiAgICAgKi9cbiAgICB0aGlzLnByb2R1Y2UgPSAoYmFzZSwgcmVjaXBlLCBwYXRjaExpc3RlbmVyKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgcmVjaXBlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdEJhc2UgPSByZWNpcGU7XG4gICAgICAgIHJlY2lwZSA9IGJhc2U7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY3VycmllZFByb2R1Y2UoYmFzZTIgPSBkZWZhdWx0QmFzZSwgLi4uYXJncykge1xuICAgICAgICAgIHJldHVybiBzZWxmLnByb2R1Y2UoYmFzZTIsIChkcmFmdCkgPT4gcmVjaXBlLmNhbGwodGhpcywgZHJhZnQsIC4uLmFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVjaXBlICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGRpZSg2KTtcbiAgICAgIGlmIChwYXRjaExpc3RlbmVyICE9PSB2b2lkIDAgJiYgdHlwZW9mIHBhdGNoTGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZGllKDcpO1xuICAgICAgbGV0IHJlc3VsdDtcbiAgICAgIGlmIChpc0RyYWZ0YWJsZShiYXNlKSkge1xuICAgICAgICBjb25zdCBzY29wZSA9IGVudGVyU2NvcGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHByb3h5ID0gY3JlYXRlUHJveHkoYmFzZSwgdm9pZCAwKTtcbiAgICAgICAgbGV0IGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSByZWNpcGUocHJveHkpO1xuICAgICAgICAgIGhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGhhc0Vycm9yKVxuICAgICAgICAgICAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGxlYXZlU2NvcGUoc2NvcGUpO1xuICAgICAgICB9XG4gICAgICAgIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSk7XG4gICAgICB9IGVsc2UgaWYgKCFiYXNlIHx8IHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlY2lwZShiYXNlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKVxuICAgICAgICAgIHJlc3VsdCA9IGJhc2U7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IE5PVEhJTkcpXG4gICAgICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICBpZiAodGhpcy5hdXRvRnJlZXplXylcbiAgICAgICAgICBmcmVlemUocmVzdWx0LCB0cnVlKTtcbiAgICAgICAgaWYgKHBhdGNoTGlzdGVuZXIpIHtcbiAgICAgICAgICBjb25zdCBwID0gW107XG4gICAgICAgICAgY29uc3QgaXAgPSBbXTtcbiAgICAgICAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhiYXNlLCByZXN1bHQsIHAsIGlwKTtcbiAgICAgICAgICBwYXRjaExpc3RlbmVyKHAsIGlwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSBlbHNlXG4gICAgICAgIGRpZSgxLCBiYXNlKTtcbiAgICB9O1xuICAgIHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzID0gKGJhc2UsIHJlY2lwZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIChzdGF0ZSwgLi4uYXJncykgPT4gdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMoc3RhdGUsIChkcmFmdCkgPT4gYmFzZShkcmFmdCwgLi4uYXJncykpO1xuICAgICAgfVxuICAgICAgbGV0IHBhdGNoZXMsIGludmVyc2VQYXRjaGVzO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wcm9kdWNlKGJhc2UsIHJlY2lwZSwgKHAsIGlwKSA9PiB7XG4gICAgICAgIHBhdGNoZXMgPSBwO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcyA9IGlwO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gW3Jlc3VsdCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXNdO1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjb25maWc/LmF1dG9GcmVlemUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgdGhpcy5zZXRBdXRvRnJlZXplKGNvbmZpZy5hdXRvRnJlZXplKTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZz8udXNlU3RyaWN0U2hhbGxvd0NvcHkgPT09IFwiYm9vbGVhblwiKVxuICAgICAgdGhpcy5zZXRVc2VTdHJpY3RTaGFsbG93Q29weShjb25maWcudXNlU3RyaWN0U2hhbGxvd0NvcHkpO1xuICB9XG4gIGNyZWF0ZURyYWZ0KGJhc2UpIHtcbiAgICBpZiAoIWlzRHJhZnRhYmxlKGJhc2UpKVxuICAgICAgZGllKDgpO1xuICAgIGlmIChpc0RyYWZ0KGJhc2UpKVxuICAgICAgYmFzZSA9IGN1cnJlbnQoYmFzZSk7XG4gICAgY29uc3Qgc2NvcGUgPSBlbnRlclNjb3BlKHRoaXMpO1xuICAgIGNvbnN0IHByb3h5ID0gY3JlYXRlUHJveHkoYmFzZSwgdm9pZCAwKTtcbiAgICBwcm94eVtEUkFGVF9TVEFURV0uaXNNYW51YWxfID0gdHJ1ZTtcbiAgICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH1cbiAgZmluaXNoRHJhZnQoZHJhZnQsIHBhdGNoTGlzdGVuZXIpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGRyYWZ0ICYmIGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgICBpZiAoIXN0YXRlIHx8ICFzdGF0ZS5pc01hbnVhbF8pXG4gICAgICBkaWUoOSk7XG4gICAgY29uc3QgeyBzY29wZV86IHNjb3BlIH0gPSBzdGF0ZTtcbiAgICB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcik7XG4gICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQodm9pZCAwLCBzY29wZSk7XG4gIH1cbiAgLyoqXG4gICAqIFBhc3MgdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IGZyZWV6ZSBhbGwgY29waWVzIGNyZWF0ZWQgYnkgSW1tZXIuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGF1dG8tZnJlZXppbmcgaXMgZW5hYmxlZC5cbiAgICovXG4gIHNldEF1dG9GcmVlemUodmFsdWUpIHtcbiAgICB0aGlzLmF1dG9GcmVlemVfID0gdmFsdWU7XG4gIH1cbiAgLyoqXG4gICAqIFBhc3MgdHJ1ZSB0byBlbmFibGUgc3RyaWN0IHNoYWxsb3cgY29weS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgaW1tZXIgZG9lcyBub3QgY29weSB0aGUgb2JqZWN0IGRlc2NyaXB0b3JzIHN1Y2ggYXMgZ2V0dGVyLCBzZXR0ZXIgYW5kIG5vbi1lbnVtcmFibGUgcHJvcGVydGllcy5cbiAgICovXG4gIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5KHZhbHVlKSB7XG4gICAgdGhpcy51c2VTdHJpY3RTaGFsbG93Q29weV8gPSB2YWx1ZTtcbiAgfVxuICBhcHBseVBhdGNoZXMoYmFzZSwgcGF0Y2hlcykge1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IHBhdGNoZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IHBhdGNoID0gcGF0Y2hlc1tpXTtcbiAgICAgIGlmIChwYXRjaC5wYXRoLmxlbmd0aCA9PT0gMCAmJiBwYXRjaC5vcCA9PT0gXCJyZXBsYWNlXCIpIHtcbiAgICAgICAgYmFzZSA9IHBhdGNoLnZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgcGF0Y2hlcyA9IHBhdGNoZXMuc2xpY2UoaSArIDEpO1xuICAgIH1cbiAgICBjb25zdCBhcHBseVBhdGNoZXNJbXBsID0gZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5hcHBseVBhdGNoZXNfO1xuICAgIGlmIChpc0RyYWZ0KGJhc2UpKSB7XG4gICAgICByZXR1cm4gYXBwbHlQYXRjaGVzSW1wbChiYXNlLCBwYXRjaGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjZShcbiAgICAgIGJhc2UsXG4gICAgICAoZHJhZnQpID0+IGFwcGx5UGF0Y2hlc0ltcGwoZHJhZnQsIHBhdGNoZXMpXG4gICAgKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVByb3h5KHZhbHVlLCBwYXJlbnQpIHtcbiAgY29uc3QgZHJhZnQgPSBpc01hcCh2YWx1ZSkgPyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlNYXBfKHZhbHVlLCBwYXJlbnQpIDogaXNTZXQodmFsdWUpID8gZ2V0UGx1Z2luKFwiTWFwU2V0XCIpLnByb3h5U2V0Xyh2YWx1ZSwgcGFyZW50KSA6IGNyZWF0ZVByb3h5UHJveHkodmFsdWUsIHBhcmVudCk7XG4gIGNvbnN0IHNjb3BlID0gcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpO1xuICBzY29wZS5kcmFmdHNfLnB1c2goZHJhZnQpO1xuICByZXR1cm4gZHJhZnQ7XG59XG5cbi8vIHNyYy9jb3JlL2N1cnJlbnQudHNcbmZ1bmN0aW9uIGN1cnJlbnQodmFsdWUpIHtcbiAgaWYgKCFpc0RyYWZ0KHZhbHVlKSlcbiAgICBkaWUoMTAsIHZhbHVlKTtcbiAgcmV0dXJuIGN1cnJlbnRJbXBsKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGN1cnJlbnRJbXBsKHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdGFibGUodmFsdWUpIHx8IGlzRnJvemVuKHZhbHVlKSlcbiAgICByZXR1cm4gdmFsdWU7XG4gIGNvbnN0IHN0YXRlID0gdmFsdWVbRFJBRlRfU1RBVEVdO1xuICBsZXQgY29weTtcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pXG4gICAgICByZXR1cm4gc3RhdGUuYmFzZV87XG4gICAgc3RhdGUuZmluYWxpemVkXyA9IHRydWU7XG4gICAgY29weSA9IHNoYWxsb3dDb3B5KHZhbHVlLCBzdGF0ZS5zY29wZV8uaW1tZXJfLnVzZVN0cmljdFNoYWxsb3dDb3B5Xyk7XG4gIH0gZWxzZSB7XG4gICAgY29weSA9IHNoYWxsb3dDb3B5KHZhbHVlLCB0cnVlKTtcbiAgfVxuICBlYWNoKGNvcHksIChrZXksIGNoaWxkVmFsdWUpID0+IHtcbiAgICBzZXQoY29weSwga2V5LCBjdXJyZW50SW1wbChjaGlsZFZhbHVlKSk7XG4gIH0pO1xuICBpZiAoc3RhdGUpIHtcbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGNvcHk7XG59XG5cbi8vIHNyYy9wbHVnaW5zL3BhdGNoZXMudHNcbmZ1bmN0aW9uIGVuYWJsZVBhdGNoZXMoKSB7XG4gIGNvbnN0IGVycm9yT2Zmc2V0ID0gMTY7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBlcnJvcnMucHVzaChcbiAgICAgICdTZXRzIGNhbm5vdCBoYXZlIFwicmVwbGFjZVwiIHBhdGNoZXMuJyxcbiAgICAgIGZ1bmN0aW9uKG9wKSB7XG4gICAgICAgIHJldHVybiBcIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIgKyBvcDtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCBhcHBseSBwYXRjaCwgcGF0aCBkb2Vzbid0IHJlc29sdmU6IFwiICsgcGF0aDtcbiAgICAgIH0sXG4gICAgICBcIlBhdGNoaW5nIHJlc2VydmVkIGF0dHJpYnV0ZXMgbGlrZSBfX3Byb3RvX18sIHByb3RvdHlwZSBhbmQgY29uc3RydWN0b3IgaXMgbm90IGFsbG93ZWRcIlxuICAgICk7XG4gIH1cbiAgY29uc3QgUkVQTEFDRSA9IFwicmVwbGFjZVwiO1xuICBjb25zdCBBREQgPSBcImFkZFwiO1xuICBjb25zdCBSRU1PVkUgPSBcInJlbW92ZVwiO1xuICBmdW5jdGlvbiBnZW5lcmF0ZVBhdGNoZXNfKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBzd2l0Y2ggKHN0YXRlLnR5cGVfKSB7XG4gICAgICBjYXNlIDAgLyogT2JqZWN0ICovOlxuICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlUGF0Y2hlc0Zyb21Bc3NpZ25lZChcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICBwYXRjaGVzLFxuICAgICAgICAgIGludmVyc2VQYXRjaGVzXG4gICAgICAgICk7XG4gICAgICBjYXNlIDEgLyogQXJyYXkgKi86XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUFycmF5UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKTtcbiAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVNldFBhdGNoZXMoXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgICAgcGF0Y2hlcyxcbiAgICAgICAgICBpbnZlcnNlUGF0Y2hlc1xuICAgICAgICApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZUFycmF5UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgbGV0IHsgYmFzZV8sIGFzc2lnbmVkXyB9ID0gc3RhdGU7XG4gICAgbGV0IGNvcHlfID0gc3RhdGUuY29weV87XG4gICAgaWYgKGNvcHlfLmxlbmd0aCA8IGJhc2VfLmxlbmd0aCkge1xuICAgICAgO1xuICAgICAgW2Jhc2VfLCBjb3B5X10gPSBbY29weV8sIGJhc2VfXTtcbiAgICAgIFtwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc10gPSBbaW52ZXJzZVBhdGNoZXMsIHBhdGNoZXNdO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2VfLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXNzaWduZWRfW2ldICYmIGNvcHlfW2ldICE9PSBiYXNlX1tpXSkge1xuICAgICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICAvLyBOZWVkIHRvIG1heWJlIGNsb25lIGl0LCBhcyBpdCBjYW4gaW4gZmFjdCBiZSB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgICAvLyBkdWUgdG8gdGhlIGJhc2UvY29weSBpbnZlcnNpb24gYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9baV0pXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVQTEFDRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChiYXNlX1tpXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBiYXNlXy5sZW5ndGg7IGkgPCBjb3B5Xy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgb3A6IEFERCxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgLy8gTmVlZCB0byBtYXliZSBjbG9uZSBpdCwgYXMgaXQgY2FuIGluIGZhY3QgYmUgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgIC8vIGR1ZSB0byB0aGUgYmFzZS9jb3B5IGludmVyc2lvbiBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvblxuICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9baV0pXG4gICAgICB9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IGNvcHlfLmxlbmd0aCAtIDE7IGJhc2VfLmxlbmd0aCA8PSBpOyAtLWkpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICBwYXRoXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBjb25zdCB7IGJhc2VfLCBjb3B5XyB9ID0gc3RhdGU7XG4gICAgZWFjaChzdGF0ZS5hc3NpZ25lZF8sIChrZXksIGFzc2lnbmVkVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdWYWx1ZSA9IGdldChiYXNlXywga2V5KTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0KGNvcHlfLCBrZXkpO1xuICAgICAgY29uc3Qgb3AgPSAhYXNzaWduZWRWYWx1ZSA/IFJFTU9WRSA6IGhhcyhiYXNlXywga2V5KSA/IFJFUExBQ0UgOiBBREQ7XG4gICAgICBpZiAob3JpZ1ZhbHVlID09PSB2YWx1ZSAmJiBvcCA9PT0gUkVQTEFDRSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChrZXkpO1xuICAgICAgcGF0Y2hlcy5wdXNoKG9wID09PSBSRU1PVkUgPyB7IG9wLCBwYXRoIH0gOiB7IG9wLCBwYXRoLCB2YWx1ZSB9KTtcbiAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goXG4gICAgICAgIG9wID09PSBBREQgPyB7IG9wOiBSRU1PVkUsIHBhdGggfSA6IG9wID09PSBSRU1PVkUgPyB7IG9wOiBBREQsIHBhdGgsIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvcmlnVmFsdWUpIH0gOiB7IG9wOiBSRVBMQUNFLCBwYXRoLCB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob3JpZ1ZhbHVlKSB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlU2V0UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgbGV0IHsgYmFzZV8sIGNvcHlfIH0gPSBzdGF0ZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgYmFzZV8uZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGlmICghY29weV8uaGFzKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFTU9WRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy51bnNoaWZ0KHtcbiAgICAgICAgICBvcDogQURELFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfSk7XG4gICAgaSA9IDA7XG4gICAgY29weV8uZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGlmICghYmFzZV8uaGFzKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IEFERCxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy51bnNoaWZ0KHtcbiAgICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKGJhc2VWYWx1ZSwgcmVwbGFjZW1lbnQsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgcGF0aDogW10sXG4gICAgICB2YWx1ZTogcmVwbGFjZW1lbnQgPT09IE5PVEhJTkcgPyB2b2lkIDAgOiByZXBsYWNlbWVudFxuICAgIH0pO1xuICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICBwYXRoOiBbXSxcbiAgICAgIHZhbHVlOiBiYXNlVmFsdWVcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhcHBseVBhdGNoZXNfKGRyYWZ0LCBwYXRjaGVzKSB7XG4gICAgcGF0Y2hlcy5mb3JFYWNoKChwYXRjaCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoLCBvcCB9ID0gcGF0Y2g7XG4gICAgICBsZXQgYmFzZSA9IGRyYWZ0O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjb25zdCBwYXJlbnRUeXBlID0gZ2V0QXJjaHR5cGUoYmFzZSk7XG4gICAgICAgIGxldCBwID0gcGF0aFtpXTtcbiAgICAgICAgaWYgKHR5cGVvZiBwICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBwICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgcCA9IFwiXCIgKyBwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgocGFyZW50VHlwZSA9PT0gMCAvKiBPYmplY3QgKi8gfHwgcGFyZW50VHlwZSA9PT0gMSAvKiBBcnJheSAqLykgJiYgKHAgPT09IFwiX19wcm90b19fXCIgfHwgcCA9PT0gXCJjb25zdHJ1Y3RvclwiKSlcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIgJiYgcCA9PT0gXCJwcm90b3R5cGVcIilcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAzKTtcbiAgICAgICAgYmFzZSA9IGdldChiYXNlLCBwKTtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDIsIHBhdGguam9pbihcIi9cIikpO1xuICAgICAgfVxuICAgICAgY29uc3QgdHlwZSA9IGdldEFyY2h0eXBlKGJhc2UpO1xuICAgICAgY29uc3QgdmFsdWUgPSBkZWVwQ2xvbmVQYXRjaFZhbHVlKHBhdGNoLnZhbHVlKTtcbiAgICAgIGNvbnN0IGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgIHN3aXRjaCAob3ApIHtcbiAgICAgICAgY2FzZSBSRVBMQUNFOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgICAgICAgZGllKGVycm9yT2Zmc2V0KTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQUREOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxIC8qIEFycmF5ICovOlxuICAgICAgICAgICAgICByZXR1cm4ga2V5ID09PSBcIi1cIiA/IGJhc2UucHVzaCh2YWx1ZSkgOiBiYXNlLnNwbGljZShrZXksIDAsIHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmFkZCh2YWx1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIFJFTU9WRTpcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMSAvKiBBcnJheSAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc3BsaWNlKGtleSwgMSk7XG4gICAgICAgICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmRlbGV0ZShwYXRjaC52YWx1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlIGJhc2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMSwgb3ApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkcmFmdDtcbiAgfVxuICBmdW5jdGlvbiBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9iaikge1xuICAgIGlmICghaXNEcmFmdGFibGUob2JqKSlcbiAgICAgIHJldHVybiBvYmo7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSlcbiAgICAgIHJldHVybiBvYmoubWFwKGRlZXBDbG9uZVBhdGNoVmFsdWUpO1xuICAgIGlmIChpc01hcChvYmopKVxuICAgICAgcmV0dXJuIG5ldyBNYXAoXG4gICAgICAgIEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSkubWFwKChbaywgdl0pID0+IFtrLCBkZWVwQ2xvbmVQYXRjaFZhbHVlKHYpXSlcbiAgICAgICk7XG4gICAgaWYgKGlzU2V0KG9iaikpXG4gICAgICByZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKG9iaikubWFwKGRlZXBDbG9uZVBhdGNoVmFsdWUpKTtcbiAgICBjb25zdCBjbG9uZWQgPSBPYmplY3QuY3JlYXRlKGdldFByb3RvdHlwZU9mKG9iaikpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iailcbiAgICAgIGNsb25lZFtrZXldID0gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmpba2V5XSk7XG4gICAgaWYgKGhhcyhvYmosIERSQUZUQUJMRSkpXG4gICAgICBjbG9uZWRbRFJBRlRBQkxFXSA9IG9ialtEUkFGVEFCTEVdO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbiAgZnVuY3Rpb24gY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob2JqKSB7XG4gICAgaWYgKGlzRHJhZnQob2JqKSkge1xuICAgICAgcmV0dXJuIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKTtcbiAgICB9IGVsc2VcbiAgICAgIHJldHVybiBvYmo7XG4gIH1cbiAgbG9hZFBsdWdpbihcIlBhdGNoZXNcIiwge1xuICAgIGFwcGx5UGF0Y2hlc18sXG4gICAgZ2VuZXJhdGVQYXRjaGVzXyxcbiAgICBnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc19cbiAgfSk7XG59XG5cbi8vIHNyYy9wbHVnaW5zL21hcHNldC50c1xuZnVuY3Rpb24gZW5hYmxlTWFwU2V0KCkge1xuICBjbGFzcyBEcmFmdE1hcCBleHRlbmRzIE1hcCB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzW0RSQUZUX1NUQVRFXSA9IHtcbiAgICAgICAgdHlwZV86IDIgLyogTWFwICovLFxuICAgICAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgICAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgICAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAgICAgY29weV86IHZvaWQgMCxcbiAgICAgICAgYXNzaWduZWRfOiB2b2lkIDAsXG4gICAgICAgIGJhc2VfOiB0YXJnZXQsXG4gICAgICAgIGRyYWZ0XzogdGhpcyxcbiAgICAgICAgaXNNYW51YWxfOiBmYWxzZSxcbiAgICAgICAgcmV2b2tlZF86IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLnNpemU7XG4gICAgfVxuICAgIGhhcyhrZXkpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLmhhcyhrZXkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAoIWxhdGVzdChzdGF0ZSkuaGFzKGtleSkgfHwgbGF0ZXN0KHN0YXRlKS5nZXQoa2V5KSAhPT0gdmFsdWUpIHtcbiAgICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCB0cnVlKTtcbiAgICAgICAgc3RhdGUuY29weV8uc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgaWYgKHN0YXRlLmJhc2VfLmhhcyhrZXkpKSB7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5jb3B5Xy5kZWxldGUoa2V5KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKGxhdGVzdChzdGF0ZSkuc2l6ZSkge1xuICAgICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgICAgZWFjaChzdGF0ZS5iYXNlXywgKGtleSkgPT4ge1xuICAgICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3JFYWNoKGNiLCB0aGlzQXJnKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgbGF0ZXN0KHN0YXRlKS5mb3JFYWNoKChfdmFsdWUsIGtleSwgX21hcCkgPT4ge1xuICAgICAgICBjYi5jYWxsKHRoaXNBcmcsIHRoaXMuZ2V0KGtleSksIGtleSwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSk7XG4gICAgICBpZiAoc3RhdGUuZmluYWxpemVkXyB8fCAhaXNEcmFmdGFibGUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGUuYmFzZV8uZ2V0KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgZHJhZnQgPSBjcmVhdGVQcm94eSh2YWx1ZSwgc3RhdGUpO1xuICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgc3RhdGUuY29weV8uc2V0KGtleSwgZHJhZnQpO1xuICAgICAgcmV0dXJuIGRyYWZ0O1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkua2V5cygpO1xuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXMua2V5cygpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHRoaXMudmFsdWVzKCksXG4gICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCByID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChyLmRvbmUpXG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KHIudmFsdWUpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgZW50cmllcygpIHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpcy5rZXlzKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4gdGhpcy5lbnRyaWVzKCksXG4gICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCByID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChyLmRvbmUpXG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KHIudmFsdWUpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBbci52YWx1ZSwgdmFsdWVdXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgWyhEUkFGVF9TVEFURSwgU3ltYm9sLml0ZXJhdG9yKV0oKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHByb3h5TWFwXyh0YXJnZXQsIHBhcmVudCkge1xuICAgIHJldHVybiBuZXcgRHJhZnRNYXAodGFyZ2V0LCBwYXJlbnQpO1xuICB9XG4gIGZ1bmN0aW9uIHByZXBhcmVNYXBDb3B5KHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgc3RhdGUuYXNzaWduZWRfID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgIHN0YXRlLmNvcHlfID0gbmV3IE1hcChzdGF0ZS5iYXNlXyk7XG4gICAgfVxuICB9XG4gIGNsYXNzIERyYWZ0U2V0IGV4dGVuZHMgU2V0IHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuICAgICAgICB0eXBlXzogMyAvKiBTZXQgKi8sXG4gICAgICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAgICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgICAgICBjb3B5Xzogdm9pZCAwLFxuICAgICAgICBiYXNlXzogdGFyZ2V0LFxuICAgICAgICBkcmFmdF86IHRoaXMsXG4gICAgICAgIGRyYWZ0c186IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksXG4gICAgICAgIHJldm9rZWRfOiBmYWxzZSxcbiAgICAgICAgaXNNYW51YWxfOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5zaXplO1xuICAgIH1cbiAgICBoYXModmFsdWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgICByZXR1cm4gc3RhdGUuYmFzZV8uaGFzKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5jb3B5Xy5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChzdGF0ZS5kcmFmdHNfLmhhcyh2YWx1ZSkgJiYgc3RhdGUuY29weV8uaGFzKHN0YXRlLmRyYWZ0c18uZ2V0KHZhbHVlKSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhZGQodmFsdWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmFkZCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVsZXRlKHZhbHVlKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5Xy5kZWxldGUodmFsdWUpIHx8IChzdGF0ZS5kcmFmdHNfLmhhcyh2YWx1ZSkgPyBzdGF0ZS5jb3B5Xy5kZWxldGUoc3RhdGUuZHJhZnRzXy5nZXQodmFsdWUpKSA6IChcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgZmFsc2VcbiAgICAgICkpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKGxhdGVzdChzdGF0ZSkuc2l6ZSkge1xuICAgICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuY29weV8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWVzKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8udmFsdWVzKCk7XG4gICAgfVxuICAgIGVudHJpZXMoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5Xy5lbnRyaWVzKCk7XG4gICAgfVxuICAgIGtleXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9XG4gICAgWyhEUkFGVF9TVEFURSwgU3ltYm9sLml0ZXJhdG9yKV0oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9XG4gICAgZm9yRWFjaChjYiwgdGhpc0FyZykge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLnZhbHVlcygpO1xuICAgICAgbGV0IHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgY2IuY2FsbCh0aGlzQXJnLCByZXN1bHQudmFsdWUsIHJlc3VsdC52YWx1ZSwgdGhpcyk7XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHJveHlTZXRfKHRhcmdldCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFmdFNldCh0YXJnZXQsIHBhcmVudCk7XG4gIH1cbiAgZnVuY3Rpb24gcHJlcGFyZVNldENvcHkoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICBzdGF0ZS5jb3B5XyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgICBzdGF0ZS5iYXNlXy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoaXNEcmFmdGFibGUodmFsdWUpKSB7XG4gICAgICAgICAgY29uc3QgZHJhZnQgPSBjcmVhdGVQcm94eSh2YWx1ZSwgc3RhdGUpO1xuICAgICAgICAgIHN0YXRlLmRyYWZ0c18uc2V0KHZhbHVlLCBkcmFmdCk7XG4gICAgICAgICAgc3RhdGUuY29weV8uYWRkKGRyYWZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYXNzZXJ0VW5yZXZva2VkKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLnJldm9rZWRfKVxuICAgICAgZGllKDMsIEpTT04uc3RyaW5naWZ5KGxhdGVzdChzdGF0ZSkpKTtcbiAgfVxuICBsb2FkUGx1Z2luKFwiTWFwU2V0XCIsIHsgcHJveHlNYXBfLCBwcm94eVNldF8gfSk7XG59XG5cbi8vIHNyYy9pbW1lci50c1xudmFyIGltbWVyID0gbmV3IEltbWVyMigpO1xudmFyIHByb2R1Y2UgPSBpbW1lci5wcm9kdWNlO1xudmFyIHByb2R1Y2VXaXRoUGF0Y2hlcyA9IGltbWVyLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKFxuICBpbW1lclxuKTtcbnZhciBzZXRBdXRvRnJlZXplID0gaW1tZXIuc2V0QXV0b0ZyZWV6ZS5iaW5kKGltbWVyKTtcbnZhciBzZXRVc2VTdHJpY3RTaGFsbG93Q29weSA9IGltbWVyLnNldFVzZVN0cmljdFNoYWxsb3dDb3B5LmJpbmQoaW1tZXIpO1xudmFyIGFwcGx5UGF0Y2hlcyA9IGltbWVyLmFwcGx5UGF0Y2hlcy5iaW5kKGltbWVyKTtcbnZhciBjcmVhdGVEcmFmdCA9IGltbWVyLmNyZWF0ZURyYWZ0LmJpbmQoaW1tZXIpO1xudmFyIGZpbmlzaERyYWZ0ID0gaW1tZXIuZmluaXNoRHJhZnQuYmluZChpbW1lcik7XG5mdW5jdGlvbiBjYXN0RHJhZnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY2FzdEltbXV0YWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgSW1tZXIsXG4gIGFwcGx5UGF0Y2hlcyxcbiAgY2FzdERyYWZ0LFxuICBjYXN0SW1tdXRhYmxlLFxuICBjcmVhdGVEcmFmdCxcbiAgY3VycmVudCxcbiAgZW5hYmxlTWFwU2V0LFxuICBlbmFibGVQYXRjaGVzLFxuICBmaW5pc2hEcmFmdCxcbiAgZnJlZXplLFxuICBpbW1lcmFibGUsXG4gIGlzRHJhZnQsXG4gIGlzRHJhZnRhYmxlLFxuICBub3RoaW5nLFxuICBvcmlnaW5hbCxcbiAgcHJvZHVjZSxcbiAgcHJvZHVjZVdpdGhQYXRjaGVzLFxuICBzZXRBdXRvRnJlZXplLFxuICBzZXRVc2VTdHJpY3RTaGFsbG93Q29weVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbW1lci5janMuZGV2ZWxvcG1lbnQuanMubWFwIiwiXG4ndXNlIHN0cmljdCdcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ltbWVyLmNqcy5wcm9kdWN0aW9uLmpzJylcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbW1lci5janMuZGV2ZWxvcG1lbnQuanMnKVxufSIsInZhciBlPXJlcXVpcmUoXCJpbW1lclwiKSxyPXJlcXVpcmUoXCJyZWFjdFwiKTtleHBvcnRzLnVzZUltbWVyPWZ1bmN0aW9uKHUpe3ZhciBuPXIudXNlU3RhdGUoZnVuY3Rpb24oKXtyZXR1cm4gZS5mcmVlemUoXCJmdW5jdGlvblwiPT10eXBlb2YgdT91KCk6dSwhMCl9KSx0PW5bMV07cmV0dXJuW25bMF0sci51c2VDYWxsYmFjayhmdW5jdGlvbihyKXt0KFwiZnVuY3Rpb25cIj09dHlwZW9mIHI/ZS5wcm9kdWNlKHIpOmUuZnJlZXplKHIpKX0sW10pXX0sZXhwb3J0cy51c2VJbW1lclJlZHVjZXI9ZnVuY3Rpb24odSxuLHQpe3ZhciBvPXIudXNlTWVtbyhmdW5jdGlvbigpe3JldHVybiBlLnByb2R1Y2UodSl9LFt1XSk7cmV0dXJuIHIudXNlUmVkdWNlcihvLG4sdCl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWltbWVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZlcnNpb24gPSBleHBvcnRzLnZhbGlkYXRlID0gZXhwb3J0cy52NyA9IGV4cG9ydHMudjZUb1YxID0gZXhwb3J0cy52NiA9IGV4cG9ydHMudjUgPSBleHBvcnRzLnY0ID0gZXhwb3J0cy52MyA9IGV4cG9ydHMudjFUb1Y2ID0gZXhwb3J0cy52MSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gZXhwb3J0cy5wYXJzZSA9IGV4cG9ydHMuTklMID0gZXhwb3J0cy5NQVggPSB2b2lkIDA7XG52YXIgbWF4X2pzXzEgPSByZXF1aXJlKFwiLi9tYXguanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNQVhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1heF9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgbmlsX2pzXzEgPSByZXF1aXJlKFwiLi9uaWwuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOSUxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5pbF9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBhcnNlX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0cmluZ2lmeVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RyaW5naWZ5X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2MV9qc18xID0gcmVxdWlyZShcIi4vdjEuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjFfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHYxVG9WNl9qc18xID0gcmVxdWlyZShcIi4vdjFUb1Y2LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFUb1Y2XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MVRvVjZfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHYzX2pzXzEgPSByZXF1aXJlKFwiLi92My5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2M19qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjRfanNfMSA9IHJlcXVpcmUoXCIuL3Y0LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY0X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2NV9qc18xID0gcmVxdWlyZShcIi4vdjUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjVfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY2X2pzXzEgPSByZXF1aXJlKFwiLi92Ni5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2Nl9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjZUb1YxX2pzXzEgPSByZXF1aXJlKFwiLi92NlRvVjEuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NlRvVjFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY2VG9WMV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjdfanNfMSA9IHJlcXVpcmUoXCIuL3Y3LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY3X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsaWRhdGVfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHZlcnNpb25fanNfMSA9IHJlcXVpcmUoXCIuL3ZlcnNpb24uanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2ZXJzaW9uX2pzXzEuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gJ2ZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZic7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICAgIGNvbnN0IHdvcmRzID0gdWludDhUb1VpbnQzMihieXRlcyk7XG4gICAgY29uc3QgbWQ1Qnl0ZXMgPSB3b3Jkc1RvTWQ1KHdvcmRzLCBieXRlcy5sZW5ndGggKiA4KTtcbiAgICByZXR1cm4gdWludDMyVG9VaW50OChtZDVCeXRlcyk7XG59XG5mdW5jdGlvbiB1aW50MzJUb1VpbnQ4KGlucHV0KSB7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShpbnB1dC5sZW5ndGggKiA0KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aCAqIDQ7IGkrKykge1xuICAgICAgICBieXRlc1tpXSA9IChpbnB1dFtpID4+IDJdID4+PiAoKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn1cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgICByZXR1cm4gKCgoaW5wdXRMZW5ndGg4ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0ICsgMTtcbn1cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gICAgY29uc3QgeHBhZCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuKSkuZmlsbCgwKTtcbiAgICB4cGFkLnNldCh4KTtcbiAgICB4cGFkW2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICAgIHhwYWRbeHBhZC5sZW5ndGggLSAxXSA9IGxlbjtcbiAgICB4ID0geHBhZDtcbiAgICBsZXQgYSA9IDE3MzI1ODQxOTM7XG4gICAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICAgIGxldCBjID0gLTE3MzI1ODQxOTQ7XG4gICAgbGV0IGQgPSAyNzE3MzM4Nzg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgICAgICBjb25zdCBvbGRhID0gYTtcbiAgICAgICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgICAgIGNvbnN0IG9sZGMgPSBjO1xuICAgICAgICBjb25zdCBvbGRkID0gZDtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgICAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICAgICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgICAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgICB9XG4gICAgcmV0dXJuIFVpbnQzMkFycmF5Lm9mKGEsIGIsIGMsIGQpO1xufVxuZnVuY3Rpb24gdWludDhUb1VpbnQzMihpbnB1dCkge1xuICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheSgpO1xuICAgIH1cbiAgICBjb25zdCBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGlucHV0Lmxlbmd0aCAqIDgpKS5maWxsKDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3V0cHV0W2kgPj4gMl0gfD0gKGlucHV0W2ldICYgMHhmZikgPDwgKChpICUgNCkgKiA4KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICAgIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgICBjb25zdCBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhmZmZmKTtcbn1cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgICByZXR1cm4gKG51bSA8PCBjbnQpIHwgKG51bSA+Pj4gKDMyIC0gY250KSk7XG59XG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICAgIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oKGIgJiBjKSB8ICh+YiAmIGQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKChiICYgZCkgfCAoYyAmIH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1kNTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHsgcmFuZG9tVVVJRCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICAgIGlmICghKDAsIHZhbGlkYXRlX2pzXzEuZGVmYXVsdCkodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgICB9XG4gICAgbGV0IHY7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNCwgKHYgPj4+IDE2KSAmIDB4ZmYsICh2ID4+PiA4KSAmIDB4ZmYsIHYgJiAweGZmLCAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4LCB2ICYgMHhmZiwgKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDgsIHYgJiAweGZmLCAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gOCwgdiAmIDB4ZmYsICgodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDApICYgMHhmZiwgKHYgLyAweDEwMDAwMDAwMCkgJiAweGZmLCAodiA+Pj4gMjQpICYgMHhmZiwgKHYgPj4+IDE2KSAmIDB4ZmYsICh2ID4+PiA4KSAmIDB4ZmYsIHYgJiAweGZmKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5mdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcm5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgICBzd2l0Y2ggKHMpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuICh4ICYgeSkgXiAofnggJiB6KTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuICh4ICYgeSkgXiAoeCAmIHopIF4gKHkgJiB6KTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgICB9XG59XG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgICByZXR1cm4gKHggPDwgbikgfCAoeCA+Pj4gKDMyIC0gbikpO1xufVxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICAgIGNvbnN0IEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gICAgY29uc3QgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcbiAgICBjb25zdCBuZXdCeXRlcyA9IG5ldyBVaW50OEFycmF5KGJ5dGVzLmxlbmd0aCArIDEpO1xuICAgIG5ld0J5dGVzLnNldChieXRlcyk7XG4gICAgbmV3Qnl0ZXNbYnl0ZXMubGVuZ3RoXSA9IDB4ODA7XG4gICAgYnl0ZXMgPSBuZXdCeXRlcztcbiAgICBjb25zdCBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gICAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICAgIGNvbnN0IE0gPSBuZXcgQXJyYXkoTik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICAgICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICAgICAgICBhcnJbal0gPVxuICAgICAgICAgICAgICAgIChieXRlc1tpICogNjQgKyBqICogNF0gPDwgMjQpIHxcbiAgICAgICAgICAgICAgICAgICAgKGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYpIHxcbiAgICAgICAgICAgICAgICAgICAgKGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCkgfFxuICAgICAgICAgICAgICAgICAgICBieXRlc1tpICogNjQgKyBqICogNCArIDNdO1xuICAgICAgICB9XG4gICAgICAgIE1baV0gPSBhcnI7XG4gICAgfVxuICAgIE1bTiAtIDFdWzE0XSA9ICgoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4KSAvIE1hdGgucG93KDIsIDMyKTtcbiAgICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gICAgTVtOIC0gMV1bMTVdID0gKChieXRlcy5sZW5ndGggLSAxKSAqIDgpICYgMHhmZmZmZmZmZjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgICAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICAgICAgICBXW3RdID0gTVtpXVt0XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB0ID0gMTY7IHQgPCA4MDsgKyt0KSB7XG4gICAgICAgICAgICBXW3RdID0gUk9UTChXW3QgLSAzXSBeIFdbdCAtIDhdIF4gV1t0IC0gMTRdIF4gV1t0IC0gMTZdLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYSA9IEhbMF07XG4gICAgICAgIGxldCBiID0gSFsxXTtcbiAgICAgICAgbGV0IGMgPSBIWzJdO1xuICAgICAgICBsZXQgZCA9IEhbM107XG4gICAgICAgIGxldCBlID0gSFs0XTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCA4MDsgKyt0KSB7XG4gICAgICAgICAgICBjb25zdCBzID0gTWF0aC5mbG9vcih0IC8gMjApO1xuICAgICAgICAgICAgY29uc3QgVCA9IChST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSkgPj4+IDA7XG4gICAgICAgICAgICBlID0gZDtcbiAgICAgICAgICAgIGQgPSBjO1xuICAgICAgICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgICAgICAgYiA9IGE7XG4gICAgICAgICAgICBhID0gVDtcbiAgICAgICAgfVxuICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSA+Pj4gMDtcbiAgICAgICAgSFsxXSA9IChIWzFdICsgYikgPj4+IDA7XG4gICAgICAgIEhbMl0gPSAoSFsyXSArIGMpID4+PiAwO1xuICAgICAgICBIWzNdID0gKEhbM10gKyBkKSA+Pj4gMDtcbiAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgPj4+IDA7XG4gICAgfVxuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKEhbMF0gPj4gMjQsIEhbMF0gPj4gMTYsIEhbMF0gPj4gOCwgSFswXSwgSFsxXSA+PiAyNCwgSFsxXSA+PiAxNiwgSFsxXSA+PiA4LCBIWzFdLCBIWzJdID4+IDI0LCBIWzJdID4+IDE2LCBIWzJdID4+IDgsIEhbMl0sIEhbM10gPj4gMjQsIEhbM10gPj4gMTYsIEhbM10gPj4gOCwgSFszXSwgSFs0XSA+PiAyNCwgSFs0XSA+PiAxNiwgSFs0XSA+PiA4LCBIWzRdKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHNoYTE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudW5zYWZlU3RyaW5naWZ5ID0gdm9pZCAwO1xuY29uc3QgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB1bnNhZmVTdHJpbmdpZnk7XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gICAgaWYgKCEoMCwgdmFsaWRhdGVfanNfMS5kZWZhdWx0KSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ2lmeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cGRhdGVWMVN0YXRlID0gdm9pZCAwO1xuY29uc3Qgcm5nX2pzXzEgPSByZXF1aXJlKFwiLi9ybmcuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmNvbnN0IF9zdGF0ZSA9IHt9O1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBsZXQgYnl0ZXM7XG4gICAgY29uc3QgaXNWNiA9IG9wdGlvbnM/Ll92NiA/PyBmYWxzZTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHRpb25zS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9uc0tleXMubGVuZ3RoID09PSAxICYmIG9wdGlvbnNLZXlzWzBdID09PSAnX3Y2Jykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBieXRlcyA9IHYxQnl0ZXMob3B0aW9ucy5yYW5kb20gPz8gb3B0aW9ucy5ybmc/LigpID8/ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpLCBvcHRpb25zLm1zZWNzLCBvcHRpb25zLm5zZWNzLCBvcHRpb25zLmNsb2Nrc2VxLCBvcHRpb25zLm5vZGUsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHJuZHMgPSAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKTtcbiAgICAgICAgdXBkYXRlVjFTdGF0ZShfc3RhdGUsIG5vdywgcm5kcyk7XG4gICAgICAgIGJ5dGVzID0gdjFCeXRlcyhybmRzLCBfc3RhdGUubXNlY3MsIF9zdGF0ZS5uc2VjcywgaXNWNiA/IHVuZGVmaW5lZCA6IF9zdGF0ZS5jbG9ja3NlcSwgaXNWNiA/IHVuZGVmaW5lZCA6IF9zdGF0ZS5ub2RlLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIHJldHVybiBidWYgPz8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZnVuY3Rpb24gdXBkYXRlVjFTdGF0ZShzdGF0ZSwgbm93LCBybmRzKSB7XG4gICAgc3RhdGUubXNlY3MgPz89IC1JbmZpbml0eTtcbiAgICBzdGF0ZS5uc2VjcyA/Pz0gMDtcbiAgICBpZiAobm93ID09PSBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5uc2VjcysrO1xuICAgICAgICBpZiAoc3RhdGUubnNlY3MgPj0gMTAwMDApIHtcbiAgICAgICAgICAgIHN0YXRlLm5vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzdGF0ZS5uc2VjcyA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm93ID4gc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUubnNlY3MgPSAwO1xuICAgIH1cbiAgICBlbHNlIGlmIChub3cgPCBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5ub2RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoIXN0YXRlLm5vZGUpIHtcbiAgICAgICAgc3RhdGUubm9kZSA9IHJuZHMuc2xpY2UoMTAsIDE2KTtcbiAgICAgICAgc3RhdGUubm9kZVswXSB8PSAweDAxO1xuICAgICAgICBzdGF0ZS5jbG9ja3NlcSA9ICgocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV0pICYgMHgzZmZmO1xuICAgIH1cbiAgICBzdGF0ZS5tc2VjcyA9IG5vdztcbiAgICByZXR1cm4gc3RhdGU7XG59XG5leHBvcnRzLnVwZGF0ZVYxU3RhdGUgPSB1cGRhdGVWMVN0YXRlO1xuZnVuY3Rpb24gdjFCeXRlcyhybmRzLCBtc2VjcywgbnNlY3MsIGNsb2Nrc2VxLCBub2RlLCBidWYsIG9mZnNldCA9IDApIHtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBpZiAoIWJ1Zikge1xuICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbXNlY3MgPz89IERhdGUubm93KCk7XG4gICAgbnNlY3MgPz89IDA7XG4gICAgY2xvY2tzZXEgPz89ICgocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV0pICYgMHgzZmZmO1xuICAgIG5vZGUgPz89IHJuZHMuc2xpY2UoMTAsIDE2KTtcbiAgICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcbiAgICBjb25zdCB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRsID4+PiAyNCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodGwgPj4+IDE2KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bCA+Pj4gOCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSB0bCAmIDB4ZmY7XG4gICAgY29uc3QgdG1oID0gKChtc2VjcyAvIDB4MTAwMDAwMDAwKSAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRtaCA+Pj4gOCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSB0bWggJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoKHRtaCA+Pj4gMjQpICYgMHhmKSB8IDB4MTA7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bWggPj4+IDE2KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChjbG9ja3NlcSA+Pj4gOCkgfCAweDgwO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICAgICAgYnVmW29mZnNldCsrXSA9IG5vZGVbbl07XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2MTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiB2MVRvVjYodXVpZCkge1xuICAgIGNvbnN0IHYxQnl0ZXMgPSB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KSh1dWlkKSA6IHV1aWQ7XG4gICAgY29uc3QgdjZCeXRlcyA9IF92MVRvVjYodjFCeXRlcyk7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKHY2Qnl0ZXMpIDogdjZCeXRlcztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHYxVG9WNjtcbmZ1bmN0aW9uIF92MVRvVjYodjFCeXRlcykge1xuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKCgodjFCeXRlc1s2XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzddID4+IDQpICYgMHgwZiksICgodjFCeXRlc1s3XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzRdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1s0XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzVdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1s1XSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzBdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1swXSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzFdICYgMHhmMCkgPj4gNCksICgodjFCeXRlc1sxXSAmIDB4MGYpIDw8IDQpIHwgKCh2MUJ5dGVzWzJdICYgMHhmMCkgPj4gNCksIDB4NjAgfCAodjFCeXRlc1syXSAmIDB4MGYpLCB2MUJ5dGVzWzNdLCB2MUJ5dGVzWzhdLCB2MUJ5dGVzWzldLCB2MUJ5dGVzWzEwXSwgdjFCeXRlc1sxMV0sIHYxQnl0ZXNbMTJdLCB2MUJ5dGVzWzEzXSwgdjFCeXRlc1sxNF0sIHYxQnl0ZXNbMTVdKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmNvbnN0IG1kNV9qc18xID0gcmVxdWlyZShcIi4vbWQ1LmpzXCIpO1xuY29uc3QgdjM1X2pzXzEgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG52YXIgdjM1X2pzXzIgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJETlNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLkROUzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlVSTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuVVJMOyB9IH0pO1xuZnVuY3Rpb24gdjModmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gKDAsIHYzNV9qc18xLmRlZmF1bHQpKDB4MzAsIG1kNV9qc18xLmRlZmF1bHQsIHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KTtcbn1cbnYzLkROUyA9IHYzNV9qc18xLkROUztcbnYzLlVSTCA9IHYzNV9qc18xLlVSTDtcbmV4cG9ydHMuZGVmYXVsdCA9IHYzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gZXhwb3J0cy5zdHJpbmdUb0J5dGVzID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICAgIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KHN0ci5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGJ5dGVzW2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn1cbmV4cG9ydHMuc3RyaW5nVG9CeXRlcyA9IHN0cmluZ1RvQnl0ZXM7XG5leHBvcnRzLkROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0cy5VUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmZ1bmN0aW9uIHYzNSh2ZXJzaW9uLCBoYXNoLCB2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIGNvbnN0IHZhbHVlQnl0ZXMgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gc3RyaW5nVG9CeXRlcyh2YWx1ZSkgOiB2YWx1ZTtcbiAgICBjb25zdCBuYW1lc3BhY2VCeXRlcyA9IHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnID8gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkobmFtZXNwYWNlKSA6IG5hbWVzcGFjZTtcbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmFtZXNwYWNlID0gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkobmFtZXNwYWNlKTtcbiAgICB9XG4gICAgaWYgKG5hbWVzcGFjZT8ubGVuZ3RoICE9PSAxNikge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ05hbWVzcGFjZSBtdXN0IGJlIGFycmF5LWxpa2UgKDE2IGl0ZXJhYmxlIGludGVnZXIgdmFsdWVzLCAwLTI1NSknKTtcbiAgICB9XG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZUJ5dGVzLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZUJ5dGVzKTtcbiAgICBieXRlcy5zZXQodmFsdWVCeXRlcywgbmFtZXNwYWNlQnl0ZXMubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2goYnl0ZXMpO1xuICAgIGJ5dGVzWzZdID0gKGJ5dGVzWzZdICYgMHgwZikgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gKGJ5dGVzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHYzNTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbmF0aXZlX2pzXzEgPSByZXF1aXJlKFwiLi9uYXRpdmUuanNcIik7XG5jb25zdCBybmdfanNfMSA9IHJlcXVpcmUoXCIuL3JuZy5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAobmF0aXZlX2pzXzEuZGVmYXVsdC5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZV9qc18xLmRlZmF1bHQucmFuZG9tVVVJRCgpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gPz8gb3B0aW9ucy5ybmc/LigpID8/ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpO1xuICAgIGlmIChybmRzLmxlbmd0aCA8IDE2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZG9tIGJ5dGVzIGxlbmd0aCBtdXN0IGJlID49IDE2Jyk7XG4gICAgfVxuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMTYgPiBidWYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVVVJRCBieXRlIHJhbmdlICR7b2Zmc2V0fToke29mZnNldCArIDE1fSBpcyBvdXQgb2YgYnVmZmVyIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmNvbnN0IHNoYTFfanNfMSA9IHJlcXVpcmUoXCIuL3NoYTEuanNcIik7XG5jb25zdCB2MzVfanNfMSA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbnZhciB2MzVfanNfMiA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkROU1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuRE5TOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVVJMXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5VUkw7IH0gfSk7XG5mdW5jdGlvbiB2NSh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHJldHVybiAoMCwgdjM1X2pzXzEuZGVmYXVsdCkoMHg1MCwgc2hhMV9qc18xLmRlZmF1bHQsIHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KTtcbn1cbnY1LkROUyA9IHYzNV9qc18xLkROUztcbnY1LlVSTCA9IHYzNV9qc18xLlVSTDtcbmV4cG9ydHMuZGVmYXVsdCA9IHY1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmNvbnN0IHYxX2pzXzEgPSByZXF1aXJlKFwiLi92MS5qc1wiKTtcbmNvbnN0IHYxVG9WNl9qc18xID0gcmVxdWlyZShcIi4vdjFUb1Y2LmpzXCIpO1xuZnVuY3Rpb24gdjYob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBvcHRpb25zID8/PSB7fTtcbiAgICBvZmZzZXQgPz89IDA7XG4gICAgbGV0IGJ5dGVzID0gKDAsIHYxX2pzXzEuZGVmYXVsdCkoeyAuLi5vcHRpb25zLCBfdjY6IHRydWUgfSwgbmV3IFVpbnQ4QXJyYXkoMTYpKTtcbiAgICBieXRlcyA9ICgwLCB2MVRvVjZfanNfMS5kZWZhdWx0KShieXRlcyk7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGFyc2VfanNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiB2NlRvVjEodXVpZCkge1xuICAgIGNvbnN0IHY2Qnl0ZXMgPSB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KSh1dWlkKSA6IHV1aWQ7XG4gICAgY29uc3QgdjFCeXRlcyA9IF92NlRvVjEodjZCeXRlcyk7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKHYxQnl0ZXMpIDogdjFCeXRlcztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY2VG9WMTtcbmZ1bmN0aW9uIF92NlRvVjEodjZCeXRlcykge1xuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKCgodjZCeXRlc1szXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzRdID4+IDQpICYgMHgwZiksICgodjZCeXRlc1s0XSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzVdICYgMHhmMCkgPj4gNCksICgodjZCeXRlc1s1XSAmIDB4MGYpIDw8IDQpIHwgKHY2Qnl0ZXNbNl0gJiAweDBmKSwgdjZCeXRlc1s3XSwgKCh2NkJ5dGVzWzFdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbMl0gJiAweGYwKSA+PiA0KSwgKCh2NkJ5dGVzWzJdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbM10gJiAweGYwKSA+PiA0KSwgMHgxMCB8ICgodjZCeXRlc1swXSAmIDB4ZjApID4+IDQpLCAoKHY2Qnl0ZXNbMF0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1sxXSAmIDB4ZjApID4+IDQpLCB2NkJ5dGVzWzhdLCB2NkJ5dGVzWzldLCB2NkJ5dGVzWzEwXSwgdjZCeXRlc1sxMV0sIHY2Qnl0ZXNbMTJdLCB2NkJ5dGVzWzEzXSwgdjZCeXRlc1sxNF0sIHY2Qnl0ZXNbMTVdKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cGRhdGVWN1N0YXRlID0gdm9pZCAwO1xuY29uc3Qgcm5nX2pzXzEgPSByZXF1aXJlKFwiLi9ybmcuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmNvbnN0IF9zdGF0ZSA9IHt9O1xuZnVuY3Rpb24gdjcob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBsZXQgYnl0ZXM7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgYnl0ZXMgPSB2N0J5dGVzKG9wdGlvbnMucmFuZG9tID8/IG9wdGlvbnMucm5nPy4oKSA/PyAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKSwgb3B0aW9ucy5tc2Vjcywgb3B0aW9ucy5zZXEsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHJuZHMgPSAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKTtcbiAgICAgICAgdXBkYXRlVjdTdGF0ZShfc3RhdGUsIG5vdywgcm5kcyk7XG4gICAgICAgIGJ5dGVzID0gdjdCeXRlcyhybmRzLCBfc3RhdGUubXNlY3MsIF9zdGF0ZS5zZXEsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZiA/PyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5mdW5jdGlvbiB1cGRhdGVWN1N0YXRlKHN0YXRlLCBub3csIHJuZHMpIHtcbiAgICBzdGF0ZS5tc2VjcyA/Pz0gLUluZmluaXR5O1xuICAgIHN0YXRlLnNlcSA/Pz0gMDtcbiAgICBpZiAobm93ID4gc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUuc2VxID0gKHJuZHNbNl0gPDwgMjMpIHwgKHJuZHNbN10gPDwgMTYpIHwgKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldO1xuICAgICAgICBzdGF0ZS5tc2VjcyA9IG5vdztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0YXRlLnNlcSA9IChzdGF0ZS5zZXEgKyAxKSB8IDA7XG4gICAgICAgIGlmIChzdGF0ZS5zZXEgPT09IDApIHtcbiAgICAgICAgICAgIHN0YXRlLm1zZWNzKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZXhwb3J0cy51cGRhdGVWN1N0YXRlID0gdXBkYXRlVjdTdGF0ZTtcbmZ1bmN0aW9uIHY3Qnl0ZXMocm5kcywgbXNlY3MsIHNlcSwgYnVmLCBvZmZzZXQgPSAwKSB7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgaWYgKCFidWYpIHtcbiAgICAgICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMTYgPiBidWYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVVVJRCBieXRlIHJhbmdlICR7b2Zmc2V0fToke29mZnNldCArIDE1fSBpcyBvdXQgb2YgYnVmZmVyIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1zZWNzID8/PSBEYXRlLm5vdygpO1xuICAgIHNlcSA/Pz0gKChybmRzWzZdICogMHg3ZikgPDwgMjQpIHwgKHJuZHNbN10gPDwgMTYpIHwgKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IG1zZWNzICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gMHg3MCB8ICgoc2VxID4+PiAyOCkgJiAweDBmKTtcbiAgICBidWZbb2Zmc2V0KytdID0gKHNlcSA+Pj4gMjApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gMHg4MCB8ICgoc2VxID4+PiAxNCkgJiAweDNmKTtcbiAgICBidWZbb2Zmc2V0KytdID0gKHNlcSA+Pj4gNikgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoKHNlcSA8PCAyKSAmIDB4ZmYpIHwgKHJuZHNbMTBdICYgMHgwMyk7XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTFdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzEyXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxM107XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTRdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzE1XTtcbiAgICByZXR1cm4gYnVmO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlZ2V4X2pzXzEgPSByZXF1aXJlKFwiLi9yZWdleC5qc1wiKTtcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIHJlZ2V4X2pzXzEuZGVmYXVsdC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICAgIGlmICghKDAsIHZhbGlkYXRlX2pzXzEuZGVmYXVsdCkodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE1KSwgMTYpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdmVyc2lvbjtcbiIsImltcG9ydCB7IHVzZUltbWVyUmVkdWNlciB9IGZyb20gXCJ1c2UtaW1tZXJcIjtcblxuaW1wb3J0IHtcblx0aW5pdGlhbENvbnRyb2xTdGF0ZSxcblx0Ly8gaW5pdGlhbENvbnRyb2xTdGF0ZSxcblx0cGFyYW1ldGVySW5pdGlhbFN0YXRlLFxuXHR2YWx2ZVN0YXR1cyxcbn0gZnJvbSBcIi4vaW5pdGlhbFN0YXRlXCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbW1hbmRWYWx2ZU1wUHJvcHMsXG5cdFBhcmFtZXRlckFjdGlvbixcblx0UGFyYW1JdGVtLFxuXHRVc2VQYXJhbWV0ZXJSZWR1Y2VyLFxuXHRVc2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIsXG5cdFVzZVZhbHZlUmVkdWNlcixcblx0VmFsdmVBY3Rpb24sXG5cdFZhbHZlTXBDb21tYW5kQWN0aW9uLFxuXHRWYWx2ZVN0YXRlLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5mdW5jdGlvbiB2YWx2ZVJlZHVjZXIoZHJhZnQ6IFZhbHZlU3RhdGUsIGFjdGlvbjogVmFsdmVBY3Rpb24pOiBWYWx2ZVN0YXRlIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgXCJVUERBVEVfQUNUX0NPTkZJR1wiOlxuXHRcdFx0ZHJhZnQuYWN0aXZhdGVkQ29uZmlnID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfREVBQ1RfQ09ORklHXCI6XG5cdFx0XHRkcmFmdC5kZWFjdGl2YXRlZENvbmZpZyA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0FDVF9GQlwiOlxuXHRcdFx0ZHJhZnQuYWN0RkIgPSAhZHJhZnQuYWN0RkI7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9ERV9BQ1RfRkJcIjpcblx0XHRcdGRyYWZ0LmRlQWN0RkIgPSAhZHJhZnQuZGVBY3RGQjtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX1VTTFwiOlxuXHRcdFx0ZHJhZnQudXNsID0gIWRyYWZ0LnVzbDtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0xTTFwiOlxuXHRcdFx0ZHJhZnQubHNsID0gIWRyYWZ0LmxzbDtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX01BTlVBTFwiOlxuXHRcdFx0ZHJhZnQubWFudWFsID0gIWRyYWZ0Lm1hbnVhbDtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0FMQVJNXCI6XG5cdFx0XHRkcmFmdC5hbGFybSA9ICFkcmFmdC5hbGFybTtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX01BU0tFRFwiOlxuXHRcdFx0ZHJhZnQubWFza2VkID0gIWRyYWZ0Lm1hc2tlZDtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0NIQU5HSU5HXCI6XG5cdFx0XHRkcmFmdC5jaGFuZ2luZyA9ICFkcmFmdC5jaGFuZ2luZztcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0xPQ0FURVwiOlxuXHRcdFx0ZHJhZnQubG9jYXRlID0gIWRyYWZ0LmxvY2F0ZTtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRkZWZhdWx0OiAvLyAjVE9ETyBBZGQgbW9yZSByZWR1Y2VyIGNhc2Ugc3RhdGVtZW50c1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWYWx2ZVJlZHVjZXIoKTogVXNlVmFsdmVSZWR1Y2VyIHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VJbW1lclJlZHVjZXIodmFsdmVSZWR1Y2VyLCB2YWx2ZVN0YXR1cyk7XG5cblx0ZnVuY3Rpb24gdXBkYXRlQWN0Q29uZmlnKHZhbHVlOiBudW1iZXIpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0FDVF9DT05GSUdcIiwgdmFsdWUgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlRGVBY3RDb25maWcodmFsdWU6IG51bWJlcikge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfREVBQ1RfQ09ORklHXCIsIHZhbHVlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVzbCgpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX1VTTFwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUxzbCgpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0xTTFwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUFsYXJtKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfQUxBUk1cIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVBY3RGQigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0FDVF9GQlwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZURlQWN0RkIoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9ERV9BQ1RfRkJcIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVNYW51YWwoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9NQU5VQUxcIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVNYXNrZWQoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9NQVNLRURcIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVDaGFuZ2luZygpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0NIQU5HSU5HXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTG9jYXRlKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTE9DQVRFXCIgfSk7XG5cdH1cblxuXHRjb25zdCB1c2VFZGl0VmFsdmVSZWR1Y2VyID0ge1xuXHRcdHN0YXRlLFxuXHRcdHJlZHVjZXI6IHtcblx0XHRcdHVwZGF0ZUFjdENvbmZpZyxcblx0XHRcdHVwZGF0ZURlQWN0Q29uZmlnLFxuXHRcdFx0dXBkYXRlQWxhcm0sXG5cdFx0XHR1cGRhdGVBY3RGQixcblx0XHRcdHVwZGF0ZURlQWN0RkIsXG5cdFx0XHR1cGRhdGVVc2wsXG5cdFx0XHR1cGRhdGVMc2wsXG5cdFx0XHR1cGRhdGVNYW51YWwsXG5cdFx0XHR1cGRhdGVNYXNrZWQsXG5cdFx0XHR1cGRhdGVDaGFuZ2luZyxcblx0XHRcdHVwZGF0ZUxvY2F0ZSxcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiB1c2VFZGl0VmFsdmVSZWR1Y2VyO1xufVxuLyoqXG4gKiAgVXBkYXRlIGEgcGFyYW1ldGVyIGl0ZW0gaW4gYSBsaXN0IG9mIHBhcmFtZXRlciBpdGVtc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBQYXJhbWV0ZXJSZWR1Y2VyKFxuXHRkcmFmdDogUGFyYW1JdGVtW10sXG5cdGFjdGlvbjogUGFyYW1ldGVyQWN0aW9uXG4pOiBQYXJhbUl0ZW1bXSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFwiVVBEQVRFX1ZBTFVFXCI6XG5cdFx0XHRkcmFmdFthY3Rpb24uaW5kZXhdLmlucHV0LnZhbHVlID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGRlZmF1bHQ6IC8vICNUT0RPIEFkZCBtb3JlIHJlZHVjZXIgY2FzZSBzdGF0ZW1lbnRzXG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtSXRlbXNSZWR1Y2VyKCk6IFVzZVBhcmFtZXRlclJlZHVjZXIge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUltbWVyUmVkdWNlcihcblx0XHRQYXJhbWV0ZXJSZWR1Y2VyLFxuXHRcdHBhcmFtZXRlckluaXRpYWxTdGF0ZVxuXHQpO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX1ZBTFVFXCIsIGluZGV4OiBpbmRleCwgdmFsdWU6IHZhbHVlIH0pO1xuXHR9XG5cdC8vIEFkZCBtb3JlIGRpc3BhdGNoIGZ1bmN0aW9ucyBoZXJlXG5cdGNvbnN0IHVzZVBhcmFtZXRlclJlZHVjZXIgPSB7XG5cdFx0c3RhdGUsXG5cdFx0cmVkdWNlcjoge1xuXHRcdFx0dXBkYXRlVmFsdWUsXG5cdFx0fSxcblx0fTtcblx0cmV0dXJuIHVzZVBhcmFtZXRlclJlZHVjZXI7XG59XG5mdW5jdGlvbiB2YWx2ZU1wUmVkdWNlcihcblx0ZHJhZnQ6IENvbW1hbmRWYWx2ZU1wUHJvcHMsXG5cdGFjdGlvbjogVmFsdmVNcENvbW1hbmRBY3Rpb25cbik6IENvbW1hbmRWYWx2ZU1wUHJvcHMge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBcIlVQREFURV9BVVRPX01BTlVBTFwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/Lm1haW4pIHtcblx0XHRcdFx0aWYgKGFjdGlvbi5tb2RlID09PSBcImF1dG9cIikge1xuXHRcdFx0XHRcdGRyYWZ0LmNvbW1hbmQubWFpbi5hdXRvTWFudWFsID0gZmFsc2U7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEluIEF1dG9gKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGFjdGlvbi5tb2RlID09PSBcIm1hbnVhbFwiKSB7XG5cdFx0XHRcdFx0ZHJhZnQuY29tbWFuZC5tYWluLmF1dG9NYW51YWwgPSB0cnVlO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBJbiBNYW51YWxgKTtcblx0XHRcdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX01BSU5fTUFOX09OXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8ubWFpbikge1xuXHRcdFx0XHRkcmFmdC5jb21tYW5kLm1haW4uYWN0aXZhdGlvbiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9NQUlOX01BTl9PRkZcIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy5tYWluKSB7XG5cdFx0XHRcdGRyYWZ0LmNvbW1hbmQubWFpbi5hY3RpdmF0aW9uID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9VU0xfTUFOX09OXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8udXBwZXJTZWF0KSB7XG5cdFx0XHRcdGRyYWZ0LmNvbW1hbmQudXBwZXJTZWF0LmFjdGl2YXRpb24gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfVVNMX01BTl9PRkZcIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy51cHBlclNlYXQpIHtcblx0XHRcdFx0ZHJhZnQuY29tbWFuZC51cHBlclNlYXQuYWN0aXZhdGlvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfTFNMX01BTl9PTlwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/Lmxvd2VyU2VhdCkge1xuXHRcdFx0XHRkcmFmdC5jb21tYW5kLmxvd2VyU2VhdC5hY3RpdmF0aW9uID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0xTTF9NQU5fT0ZGXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8ubG93ZXJTZWF0KSB7XG5cdFx0XHRcdGRyYWZ0LmNvbW1hbmQubG93ZXJTZWF0LmFjdGl2YXRpb24gPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblxuXHRcdGRlZmF1bHQ6IC8vICNUT0RPIEFkZCBtb3JlIHJlZHVjZXIgY2FzZSBzdGF0ZW1lbnRzXG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZhbHZlTXBDb21tYW5kUmVkdWNlcigpOiBVc2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUltbWVyUmVkdWNlcihcblx0XHR2YWx2ZU1wUmVkdWNlcixcblx0XHRpbml0aWFsQ29udHJvbFN0YXRlXG5cdCk7XG5cblx0ZnVuY3Rpb24gdXBkYXRlQXV0b01hblNlbGVjdGlvbihtb2RlOiBcImF1dG9cIiB8IFwibWFudWFsXCIpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0FVVE9fTUFOVUFMXCIsIG1vZGUgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTWFpbk1hbnVhbE9uKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTUFJTl9NQU5fT05cIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVNYWluTWFudWFsT2ZmKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTUFJTl9NQU5fT0ZGXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlVXNsTWFudWFsT24oKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9VU0xfTUFOX09OXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlVXNsTWFudWFsT2ZmKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfVVNMX01BTl9PRkZcIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVMc2xNYW51YWxPbigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0xTTF9NQU5fT05cIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVMc2xNYW51YWxPZmYoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9MU0xfTUFOX09GRlwiIH0pO1xuXHR9XG5cblx0Y29uc3QgdXNlQ29tbWFuZHNWYWx2ZU1wUmVkdWNlciA9IHtcblx0XHRzdGF0ZSxcblx0XHRyZWR1Y2VyOiB7XG5cdFx0XHR1cGRhdGVBdXRvTWFuU2VsZWN0aW9uLFxuXHRcdFx0dXBkYXRlTWFpbk1hbnVhbE9uLFxuXHRcdFx0dXBkYXRlTWFpbk1hbnVhbE9mZixcblx0XHRcdHVwZGF0ZVVzbE1hbnVhbE9uLFxuXHRcdFx0dXBkYXRlVXNsTWFudWFsT2ZmLFxuXHRcdFx0dXBkYXRlTHNsTWFudWFsT24sXG5cdFx0XHR1cGRhdGVMc2xNYW51YWxPZmYsXG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4gdXNlQ29tbWFuZHNWYWx2ZU1wUmVkdWNlcjtcbn1cbiIsIi8qKlxuICogVGhlIHB1cnBvc2Ugb2YgaW5pdGlhbFN0YXRlcy50cyBpcyB0byBwcm92aWRlIGluaXRpYWwgc3RhdGUgZm9yIGNvbXBvbmVudCBwcm9wc1xuICovXG4vLyBpbml0aWFsU3RhdGUudHNcblxuXG5pbXBvcnQgeyBDb21tYW5kVmFsdmVNcFByb3BzLCBQYXJhbUl0ZW0gfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgdmFsdmVTdGF0dXMgPSB7XG5cdGFsYXJtOiBmYWxzZSxcblx0YWN0RkI6IGZhbHNlLFxuXHRkZUFjdEZCOiB0cnVlLFxuXHRhY3RpdmF0ZWRDb25maWc6IDcsXG5cdGRlYWN0aXZhdGVkQ29uZmlnOiA1LFxuXHRpdGVtTmFtZTogXCJWWFhYXCIsXG5cdG1hbnVhbDogZmFsc2UsXG5cdG1hc2tlZDogZmFsc2UsXG5cdGNoYW5naW5nOiBmYWxzZSxcblx0bG9jYXRlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9jZXNzT2JqZWN0UHJvcHMgPSB7XG5cdHN0YXR1czogdmFsdmVTdGF0dXMsXG59O1xuZXhwb3J0IGNvbnN0IHZhbHZlUHJvcHMgPSB7XG5cdHByb2Nlc3NPYmplY3Q6IHByb2Nlc3NPYmplY3RQcm9wcyxcblx0aGFuZGxlQ2xpY2s6ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGNsaWNrZWRcIik7XG5cdH0sXG5cdGxhYmVsUG9zaXRpb246IFwibGVmdFwiLFxuXHRzaG93TGFiZWw6IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBwdW1wSW5pdGlhbFN0YXR1cyA9IHtcblx0YWxhcm06IGZhbHNlLFxuXHRhY3RGQjogZmFsc2UsXG5cdGRlQWN0RkI6IGZhbHNlLFxuXHRjb25maWd1cmF0aW9uOiA3LFxuXHRpdGVtTmFtZTogXCJpdGVtTmFtZVwiLFxuXHRtYW51YWw6IGZhbHNlLFxuXHRtYXNrZWQ6IGZhbHNlLFxuXHRjaGFuZ2luZzogZmFsc2UsXG5cdGxvY2F0ZTogZmFsc2UsXG59XG5cbmV4cG9ydCBjb25zdCBwdW1wSW5pdGlhbFByb3BzID0ge1xuXHRzdGF0dXM6IHB1bXBJbml0aWFsU3RhdHVzLFxufVxuZXhwb3J0IGNvbnN0IHBhcmFtZXRlckluaXRpYWxTdGF0ZSA9IFtcblx0e1xuXHRcdGxhYmVsOiB7XG5cdFx0XHR0ZXh0OiBcImxhYmVsXCIsXG5cdFx0XHRjbGFzc05hbWU6IFwiXCIsXG5cdFx0XHR0b29sdGlwVGV4dDogXCJcIixcblx0XHRcdHRvb2x0aXBQb3NpdGlvbjogXCJcIixcblx0XHRcdHRvb2x0aXBDbGFzc05hbWU6IFwiXCIsXG5cdFx0XHR0b29sdGlwSWQ6IFwiXCIsXG5cdFx0fSxcblx0XHRpbnB1dDoge1xuXHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRpbnB1dG1vZGU6IFwibnVtZXJpY1wiLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgYSBudW1iZXJcIixcblx0XHRcdGVkaXRhYmxlOiB0cnVlLFxuXHRcdFx0cGF0dGVybjogXCJeWzAtOV0qWy4sXT9bMC05XSokXCIsXG5cdFx0XHRtaW46IDAsXG5cdFx0XHRtYXg6IDEwMCxcblx0XHRcdGRlY2ltYWxQbGFjZXM6IDIsXG5cdFx0XHRldTogXCJcXHUwMEI1Q1wiLFxuXHRcdFx0dmFsdWU6IDAsXG5cdFx0fSxcblx0fSBhcyBQYXJhbUl0ZW0sXG5dO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbEF1dG9NYW5TdGF0ZSA9IHtcblx0YXV0bzogdHJ1ZSxcblx0bWFudWFsOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgaW5pdGlhbE9mZk9uU3RhdGUgPSB7XG5cdG9mZjogZmFsc2UsXG5cdG9uOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgaW5pdGlhbENvbnRyb2xTdGF0ZSA9IHtcblx0Y29tbWFuZDoge1xuXHRcdGludGVybG9ja3M6IHtcblx0XHRcdG1haW46IFtdLFxuXHRcdFx0dXBwZXJTZWF0OiBbXSxcblx0XHRcdGxvd2VyU2VhdDogW11cblx0XHR9LFxuXHRcdG1haW46IHtcblx0XHRcdGxhYmVsOiBcIk1haW5cIixcblx0XHRcdGF1dG9NYW51YWw6IGZhbHNlLFxuXHRcdFx0YWN0aXZhdGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHR1cHBlclNlYXQ6IHtcblx0XHRcdGxhYmVsOiBcIlVwcGVyIFNlYXRcIixcblx0XHRcdGFjdGl2YXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0bG93ZXJTZWF0OiB7XG5cdFx0XHRsYWJlbDogXCJMb3dlciBTZWF0XCIsXG5cdFx0XHRhY3RpdmF0aW9uOiBmYWxzZSxcblx0XHR9XG5cdH1cbn0gYXMgQ29tbWFuZFZhbHZlTXBQcm9wcztcbiIsImltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENvbXBvbmVudFByb3BzIH0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiO1xuXG5cbmV4cG9ydCB0eXBlIEVsZW1lbnRSZWYgPSBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuZXhwb3J0IHR5cGUgVmFsdmVTdGF0ZSA9IHtcblx0YWxhcm06IGJvb2xlYW47XG5cdGFjdEZCOiBib29sZWFuO1xuXHRkZUFjdEZCOiBib29sZWFuO1xuXHR1c2w/OiBib29sZWFuO1xuXHRsc2w/OiBib29sZWFuO1xuXHRhY3RpdmF0ZWRDb25maWc6IG51bWJlcjtcblx0ZGVhY3RpdmF0ZWRDb25maWc6IG51bWJlcjtcblx0aXRlbU5hbWU6IHN0cmluZztcblx0bWFudWFsOiBib29sZWFuO1xuXHRtYXNrZWQ6IGJvb2xlYW47XG5cdGNoYW5naW5nOiBib29sZWFuO1xuXHRsb2NhdGU6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBWYWx2ZUNvbXBvdW5kQ29udGV4dFR5cGUgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdHZhbHZlUHJvcHM6IFZhbHZlUHJvcHM7XG5cdG9uQWN0aW9uUGVyZm9ybWVkOiAoKSA9PiB2b2lkO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcbmV4cG9ydCB0eXBlIFZhbHZlQ29tcG91bmRSb290UHJvcHMgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdHZhbHZlUHJvcHM6IFZhbHZlUHJvcHM7XG5cdG9uQWN0aW9uUGVyZm9ybWVkOiAoKSA9PiB2b2lkO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IHR5cGUgUHVtcFN0YXRlID0ge1xuXHRhbGFybTogYm9vbGVhbjtcblx0YWN0RkI6IGJvb2xlYW47XG5cdGRlQWN0RkI6IGJvb2xlYW47XG5cdGNvbmZpZ3VyYXRpb246IG51bWJlcjtcblx0aXRlbU5hbWU6IHN0cmluZztcblx0bWFudWFsOiBib29sZWFuO1xuXHRtYXNrZWQ6IGJvb2xlYW47XG5cdGNoYW5naW5nOiBib29sZWFuO1xuXHRsb2NhdGU6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBQdW1wQ29tcG91bmRDb250ZXh0VHlwZSA9IHtcblx0Y29tcG9uZW50UHJvcHM6IENvbXBvbmVudFByb3BzPGFueSwgYW55Pjtcblx0cHVtcFByb3BzOiBQdW1wUHJvcHM7XG5cdG9uQWN0aW9uUGVyZm9ybWVkOiAoKSA9PiB2b2lkO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcbmV4cG9ydCB0eXBlIFB1bXBDb21wb3VuZFJvb3RQcm9wcyA9IHtcblx0Y29tcG9uZW50UHJvcHM6IENvbXBvbmVudFByb3BzPGFueSwgYW55Pjtcblx0cHVtcFByb3BzOiBQdW1wUHJvcHM7XG5cdG9uQWN0aW9uUGVyZm9ybWVkOiAoKSA9PiB2b2lkO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcbi8qKlxuICogRGVmaW5lIHRoZSBzaGFwZSBvZiB0aGUgUGFyYW1ldGVyQWN0aW9uIHR5cGVcbiAqIEBVc2VhZ2UgdXNlUGFyYW1ldGVyUmVkdWNlclxuICovXG5leHBvcnQgdHlwZSBQYXJhbWV0ZXJBY3Rpb24gPSB7XG5cdHR5cGU6IFwiVVBEQVRFX1ZBTFVFXCI7XG5cdHZhbHVlOiBudW1iZXI7XG5cdGluZGV4OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBQYXJhbWV0ZXJSZWR1Y2VyID0gKFxuXHRzdGF0ZTogUGFyYW1JdGVtIHwgUGFyYW1JdGVtW10sXG5cdGFjdGlvbjogUGFyYW1ldGVyQWN0aW9uXG4pID0+IFZhbHZlU3RhdGU7XG5cbmV4cG9ydCB0eXBlIFVzZVBhcmFtZXRlclJlZHVjZXIgPSB7XG5cdHN0YXRlOiBQYXJhbUl0ZW1bXTtcblx0cmVkdWNlcjoge1xuXHRcdHVwZGF0ZVZhbHVlOiAodmFsdWU6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcblx0XHQvL2FkZCBtb3JlIGhhbmRsZXJzIGFzIG5lZWRlZFxuXHR9O1xufTtcbmV4cG9ydCB0eXBlIFBhcmFtTGFiZWwgPSB7XG5cdHRleHQ6IHN0cmluZztcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xuXHR0b29sdGlwVGV4dD86IHN0cmluZztcblx0dG9vbHRpcFBvc2l0aW9uPzogc3RyaW5nO1xuXHR0b29sdGlwQ2xhc3NOYW1lPzogc3RyaW5nO1xuXHR0b29sdGlwSWQ/OiBzdHJpbmc7XG59O1xuZXhwb3J0IHR5cGUgUGFyYW1JbnB1dCA9IHtcblx0dHlwZTogc3RyaW5nO1xuXHRpbnB1dG1vZGU6XG5cdFx0fCBcIm5vbmVcIlxuXHRcdHwgXCJ0ZXh0XCJcblx0XHR8IFwidGVsXCJcblx0XHR8IFwidXJsXCJcblx0XHR8IFwiZW1haWxcIlxuXHRcdHwgXCJudW1lcmljXCJcblx0XHR8IFwiZGVjaW1hbFwiXG5cdFx0fCBcInNlYXJjaFwiXG5cdFx0fCB1bmRlZmluZWQ7XG5cdHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdGVkaXRhYmxlOiBib29sZWFuO1xuXHRwYXR0ZXJuOiBzdHJpbmc7XG5cdG1pbjogbnVtYmVyO1xuXHRtYXg6IG51bWJlcjtcblx0ZGVjaW1hbFBsYWNlczogbnVtYmVyO1xuXHQvLyBwYXR0ZXJuOiBcIl5bMC05XSpbLixdP1swLTldKiRcIiBmb3IgZGVjaW1hbCBudW1iZXJzXG5cdC8vIHBhdHRlcm46IFwiXlswLTldKiRcIiBmb3IgaW50ZWdlcnNcblx0ZXU6IHN0cmluZztcblx0dmFsdWU6IG51bWJlcjtcbn07XG4vLyB0eXBlIFBhcmFtc0hlYWRlciA9IHtcbi8vIFx0bGFiZWw6IHN0cmluZ1xuLy8gfVxuZXhwb3J0IHR5cGUgUGFyYW1JdGVtID0ge1xuXHRsYWJlbDogUGFyYW1MYWJlbDtcblx0aW5wdXQ6IFBhcmFtSW5wdXQ7XG59O1xuZXhwb3J0IHR5cGUgUGFyYW1ldGVyc0xpc3RTdGF0ZSA9IHtcblx0cGFyYW1ldGVyczogUGFyYW1JdGVtW107XG59O1xuLyoqXG4gKiBEZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBWYWx2ZUFjdGlvbiB0eXBlXG4gKiBAVXNlYWdlIHVzZVZhbHZlUmVkdWNlclxuICovXG5leHBvcnQgdHlwZSBWYWx2ZUFjdGlvbiA9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9BQ1RfQ09ORklHXCI7IHZhbHVlOiBudW1iZXIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfREVBQ1RfQ09ORklHXCI7IHZhbHVlOiBudW1iZXIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQUNUX0ZCXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfREVfQUNUX0ZCXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfVVNMXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTFNMXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTUFOVUFMXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQUxBUk1cIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9NQVNLRURcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9DSEFOR0lOR1wiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0xPQ0FURVwiIH07XG5cbmV4cG9ydCB0eXBlIFZhbHZlUmVkdWNlciA9IChcblx0c3RhdGU6IFZhbHZlU3RhdGUsXG5cdGFjdGlvbjogVmFsdmVBY3Rpb25cbikgPT4gVmFsdmVTdGF0ZTtcblxuZXhwb3J0IHR5cGUgVXNlVmFsdmVSZWR1Y2VyID0ge1xuXHRzdGF0ZTogVmFsdmVTdGF0ZTtcblx0cmVkdWNlcjoge1xuXHRcdHVwZGF0ZUFjdENvbmZpZzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG5cdFx0dXBkYXRlRGVBY3RDb25maWc6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUFsYXJtOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUFjdEZCOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZURlQWN0RkI6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlVXNsOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxzbDogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVNYW51YWw6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTWFza2VkOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUNoYW5naW5nOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxvY2F0ZTogKCkgPT4gdm9pZDtcblxuXHRcdC8vYWRkIG1vcmUgaGFuZGxlcnMgYXMgbmVlZGVkXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgVmFsdmVDbGFzc05hbWVFbnVtID0ge1xuXHRBbGFybVN0YXRlOiBcIkFsYXJtU3RhdGVcIixcblx0QWN0aXZhdGVkOiBcIkFjdGl2YXRlZFwiLFxuXHREZWFjdGl2YXRlZDogXCJEZWFjdGl2YXRlZFwiLFxuXHRNYW51YWw6IFwiTWFudWFsXCIsXG5cdE1hc2tlZDogXCJNYXNrZWRcIixcblx0Q2hhbmdpbmc6IFwiQ2hhbmdpbmdcIixcblx0Tm9BbGFybU1hc2s6IFwiTm9BbGFybU1hc2tcIixcblx0TG9jYXRlOiBcIkxvY2F0ZVwiLFxufTtcbmV4cG9ydCB0eXBlIFZhbHZlQ2xhc3NOYW1lRW51bSA9XG5cdCh0eXBlb2YgVmFsdmVDbGFzc05hbWVFbnVtKVtrZXlvZiB0eXBlb2YgVmFsdmVDbGFzc05hbWVFbnVtXTtcbmV4cG9ydCBjb25zdCBJdGVtTmFtZUVudW0gPSB7XG5cdFYxYjE6IFwidjFiMVwiLCAvLyBpbmRleCAwXG5cdFYxYjI6IFwidjFiMlwiLCAvLyBpbmRleCAxXG5cdFYxYjM6IFwidjFiM1wiLCAvLyBpbmRleCAyXG5cdFYxYjQ6IFwidjFiNFwiLCAvLyBpbmRleCAzXG5cdFYyYjE6IFwidjJiMVwiLCAvLyBpbmRleCA0XG5cdFYyYjI6IFwidjJiMlwiLCAvLyBpbmRleCA1XG5cdFYyYjM6IFwidjJiM1wiLCAvLyBpbmRleCA2XG5cdFYyYjQ6IFwidjJiNFwiLCAvLyBpbmRleCA3XG5cdFYzYjE6IFwidjNiMVwiLCAvLyBpbmRleCA4XG5cdFYzYjI6IFwidjNiMlwiLCAvLyBpbmRleCA5XG5cdFYzYjM6IFwidjNiM1wiLCAvLyBpbmRleCAxMFxuXHRWM2I0OiBcInYzYjRcIiwgLy8gaW5kZXggMTFcblx0VjI6IFwidjJcIiwgLy8gaW5kZXggMTJcblx0VjM6IFwidjNcIiwgLy8gaW5kZXggMTNcblx0VjE6IFwidjFcIiwgLy8gaW5kZXggMTRcblx0VjJmMTogXCJ2MmYxXCIsIC8vIGluZGV4IDE1XG5cdFYyZjI6IFwidjJmMlwiLCAvLyBpbmRleCAxNlxuXHRWM2YxOiBcInYzZjFcIiwgLy8gaW5kZXggMTdcblx0VjNmMjogXCJ2M2YyXCIsIC8vIGluZGV4IDE4XG59O1xuZXhwb3J0IHR5cGUgSXRlbU5hbWVFbnVtID0gKHR5cGVvZiBJdGVtTmFtZUVudW0pW2tleW9mIHR5cGVvZiBJdGVtTmFtZUVudW1dO1xuZXhwb3J0IGNvbnN0IHZhbHZlTXBJdGVtTmFtZUVudW0gPSB7XG5cdFYxYjE6IFwidjFiMVwiLCAvLyBpbmRleCAwXG5cdFYxYjI6IFwidjFiMlwiLCAvLyBpbmRleCAxXG5cdFYxYjM6IFwidjFiM1wiLCAvLyBpbmRleCAyXG5cdFYxYjQ6IFwidjFiNFwiLCAvLyBpbmRleCAzXG5cdFYyYjE6IFwidjJiMVwiLCAvLyBpbmRleCA0XG5cdFYyYjI6IFwidjJiMlwiLCAvLyBpbmRleCA1XG5cdFYyYjM6IFwidjJiM1wiLCAvLyBpbmRleCA2XG5cdFYyYjQ6IFwidjJiNFwiLCAvLyBpbmRleCA3XG5cdFYyOiBcInYyXCIsIC8vIGluZGV4IDhcblx0djE6IFwidjFcIiwgLy8gaW5kZXggOVxuXHR1c2w6IFwidXNsXCIsIC8vIGluZGV4IDEwIHVwcGVyLXNlYXQtbGlmdFxuXHRsc2w6IFwibHNsXCIsIC8vIGluZGV4IDExIGxvd2VyLXNlYXQtbGlmdFxuXHRsb2NhdGU6IFwibG9jYXRlXCIsIC8vIGluZGV4IDEyIGxvY2F0ZSBhbmltYXRpb25cbn07XG5leHBvcnQgdHlwZSB2YWx2ZU1wSXRlbU5hbWVFbnVtID1cblx0KHR5cGVvZiB2YWx2ZU1wSXRlbU5hbWVFbnVtKVtrZXlvZiB0eXBlb2YgdmFsdmVNcEl0ZW1OYW1lRW51bV07XG5cblxuZXhwb3J0IGNvbnN0IEl0ZW1DbGlja2FibGVOYW1lRW51bSA9IHtcblx0VjFiMTogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjFiMjogXCJ2MWIyXCIsIC8vIGluZGV4IDFcblx0VjFiMzogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNDogXCJ2MWI0XCIsIC8vIGluZGV4IDNcblx0VjJiMTogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMjogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMzogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjNiMTogXCJ2M2IxXCIsIC8vIGluZGV4IDhcblx0VjNiMjogXCJ2M2IyXCIsIC8vIGluZGV4IDlcblx0VjNiMzogXCJ2M2IzXCIsIC8vIGluZGV4IDEwXG5cdFYzYjQ6IFwidjNiNFwiLCAvLyBpbmRleCAxMVxuXHRWMjogXCJ2MlwiLCAvLyBpbmRleCAxMlxuXHRWMzogXCJ2M1wiLCAvLyBpbmRleCAxM1xuXHRWMTogXCJ2MVwiLCAvLyBpbmRleCAxNFxufTtcbmV4cG9ydCB0eXBlIEl0ZW1DbGlja2FibGVOYW1lRW51bSA9XG5cdCh0eXBlb2YgSXRlbUNsaWNrYWJsZU5hbWVFbnVtKVtrZXlvZiB0eXBlb2YgSXRlbUNsaWNrYWJsZU5hbWVFbnVtXTtcbmV4cG9ydCBjb25zdCB2YWx2ZU1wSXRlbUNsaWNrYWJsZU5hbWVFbnVtID0ge1xuXHRWMWIxOiBcInYxYjFcIiwgLy8gaW5kZXggMFxuXHRWMWIyOiBcInYxYjJcIiwgLy8gaW5kZXggMVxuXHRWMWIzOiBcInYxYjNcIiwgLy8gaW5kZXggMlxuXHRWMWI0OiBcInYxYjRcIiwgLy8gaW5kZXggM1xuXHRWMmIxOiBcInYyYjFcIiwgLy8gaW5kZXggNFxuXHRWMmIyOiBcInYyYjJcIiwgLy8gaW5kZXggNVxuXHRWMmIzOiBcInYyYjNcIiwgLy8gaW5kZXggNlxuXHRWMmI0OiBcInYyYjRcIiwgLy8gaW5kZXggN1xuXHRWMjogXCJ2MlwiLCAvLyBpbmRleCA4XG5cdFYxOiBcInYxXCIsIC8vIGluZGV4IDlcbn07XG5leHBvcnQgdHlwZSB2YWx2ZU1wSXRlbUNsaWNrYWJsZU5hbWVFbnVtID1cblx0KHR5cGVvZiB2YWx2ZU1wSXRlbUNsaWNrYWJsZU5hbWVFbnVtKVtrZXlvZiB0eXBlb2YgdmFsdmVNcEl0ZW1DbGlja2FibGVOYW1lRW51bV07XG5cbmV4cG9ydCBjb25zdCBJdGVtUG9zaXRpb25FbnVtID0ge1xuXHR2MWIxOiBcInYxYjFcIixcblx0djFiMjogXCJ2MWIyXCIsXG5cdHYxYjM6IFwidjFiM1wiLFxuXHR2MWI0OiBcInYxYjRcIixcblx0djJiMTogXCJ2MmIxXCIsXG5cdFYyYjI6IFwidjJiMlwiLFxuXHR2MmIzOiBcInYyYjNcIixcblx0djJiNDogXCJ2MmI0XCIsXG5cdHYzYjE6IFwidjNiMVwiLFxuXHR2M2IyOiBcInYzYjJcIixcblx0djNiMzogXCJ2M2IzXCIsXG5cdHYzYjQ6IFwidjNiNFwiLFxuXHR2MjogXCJ2MlwiLFxuXHR2MzogXCJ2M1wiLFxufTtcbmV4cG9ydCB0eXBlIEl0ZW1Qb3NpdGlvbkVudW0gPVxuXHQodHlwZW9mIEl0ZW1Qb3NpdGlvbkVudW0pW2tleW9mIHR5cGVvZiBJdGVtUG9zaXRpb25FbnVtXTtcblxuY29uc3QgVmFsdmVTdGF0ZUVudW0gPSB7XG5cdGFsYXJtOiBcImFsYXJtXCIsXG5cdG1hbnVhbDogXCJtYW51YWxcIixcblx0bWFza2VkOiBcIm1hc2tlZFwiLFxufTtcbmV4cG9ydCB0eXBlIFZhbHZlU3RhdGVFbnVtID1cblx0KHR5cGVvZiBWYWx2ZVN0YXRlRW51bSlba2V5b2YgdHlwZW9mIFZhbHZlU3RhdGVFbnVtXTtcblxuY29uc3QgaXRlbUlkUG9zaXRpb25zID0gW1xuXHRcInJpZ2h0XCIsXG5cdFwibGVmdFwiLFxuXHRcInRvcC1sZWZ0XCIsXG5cdFwidG9wLXJpZ2h0XCIsXG5cdFwiYm90dG9tLWxlZnRcIixcblx0XCJib3R0b20tcmlnaHRcIixcbl07XG5cbmV4cG9ydCB0eXBlIEl0ZW1JZFBvc2l0aW9uVHlwZSA9ICh0eXBlb2YgaXRlbUlkUG9zaXRpb25zKVtudW1iZXJdO1xuZXhwb3J0IHR5cGUgUHJvY2Vzc09iamVjdCA9IHtcblx0c3RhdHVzOiBWYWx2ZVN0YXRlO1xufTtcbmV4cG9ydCB0eXBlIFB1bXAgPSB7XG5cdHN0YXR1czogUHVtcFN0YXRlO1xufTtcbmV4cG9ydCB0eXBlIFZhbHZlUHJvcHMgPSB7XG5cdHByb2Nlc3NPYmplY3Q/OiBQcm9jZXNzT2JqZWN0O1xuXHRsYWJlbFBvc2l0aW9uPzogSXRlbUlkUG9zaXRpb25UeXBlO1xuXHRzaG93TGFiZWw/OiBib29sZWFuO1xuXHRoYW5kbGVDbGljaz86ICgpID0+IHZvaWQ7XG59O1xuY29uc3QgcHVtcFR5cGVzPSBbXG5cdFwiY2VudHJpZnVnYWxcIixcblx0XCJkaWFwaHJhZ21cIixcblx0XCJnZWFyXCIsXG5cdFwibGlxdWlkLXJpbmdcIixcblx0XCJwb3NpdGl2ZS1kaXNwbGFjbWVudFwiLFxuXHRcInBvc2l0aXZlLXNjcmV3XCIsXG5cdFwicHJvZ3Jlc3NpdmUtY2F2aXR5XCIsXG5dXG5leHBvcnQgdHlwZSBQdW1wVHlwZSA9ICh0eXBlb2YgcHVtcFR5cGVzKVtudW1iZXJdO1xuZXhwb3J0IHR5cGUgUHVtcFByb3BzID0ge1xuXHRwdW1wVHlwZT86IFB1bXBUeXBlO1xuXHRwcm9jZXNzT2JqZWN0PzogUHVtcDtcblx0bGFiZWxQb3NpdGlvbj86IEl0ZW1JZFBvc2l0aW9uVHlwZTtcblx0c2hvd0xhYmVsPzogYm9vbGVhbjtcblx0aGFuZGxlQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBwdW1wSXRlbUxpc3QgPSBbXG5cdFwic3ltYm9sLTFcIixcblx0XCJzeW1ib2wtMlwiLFxuIFx0XCJsb2NhdGVcIixcbl1cbmV4cG9ydCB0eXBlIFB1bXBJdGVtTGlzdCA9ICh0eXBlb2YgcHVtcEl0ZW1MaXN0KVtudW1iZXJdO1xuXG5leHBvcnQgdHlwZSBJdGVtRGF0YSA9IHtcblx0a2V5OiBzdHJpbmc7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdHByb3BzOiBWYWx2ZVN0YXRlO1xufTtcbi8qKlxuICogZHJhZ2dhYmxlIGNvbXBvbmVudCB0eXBlc1xuICovXG4vLyBleHBvcnQgdHlwZSBEcmFnZ2FibGVJdGVtID0ge1xuLy8gXHRpZDogVW5pcXVlSWRlbnRpZmllcjtcbi8vIFx0bGVmdDogbnVtYmVyO1xuLy8gXHR0b3A6IG51bWJlcjtcbi8vIH1cblxuLy8gZXhwb3J0IHR5cGUgRHJhZ2dhYmxlUHJvcHMgPSB7XG4vLyBcdGlkOiBVbmlxdWVJZGVudGlmaWVyLFxuLy8gXHRvbkNsb3NlOiAoaWQ6IFVuaXF1ZUlkZW50aWZpZXIpPT4gdm9pZCxcbi8vIFx0ZWxlbWVudD86IGtleW9mIEhUTUxFbGVtZW50LFxuLy8gXHRsZWZ0OiBudW1iZXI7XG4vLyBcdHRvcCA6IG51bWJlcjtcbi8vIFx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbi8vIFx0Y2xhc3NOYW1lOiBzdHJpbmc7XG4vLyB9XG5leHBvcnQgdHlwZSBpdGVtTmFtZVByb3BzID0ge1xuXHRrZXk6IHN0cmluZztcblx0bmFtZTogW3N0cmluZywgc3RyaW5nXTtcblx0dmFsdWU6IHN0cmluZztcblx0aW5kZXg6IG51bWJlcjtcbn07XG5leHBvcnQgdHlwZSBDb21tYW5kVmFsdmVNcFByb3BzID0ge1xuXHRjb21tYW5kPzoge1xuXHRcdGludGVybG9ja3M/OiB7XG5cdFx0XHRtYWluOiBib29sZWFuW107XG5cdFx0XHR1cHBlclNlYXQ6IGJvb2xlYW5bXTtcblx0XHRcdGxvd2VyU2VhdDogYm9vbGVhbltdO1xuXHRcdH07XG5cdFx0bWFpbj86IHtcblx0XHRcdGxhYmVsOiBzdHJpbmc7XG5cdFx0XHRhdXRvTWFudWFsOiBib29sZWFuO1xuXHRcdFx0YWN0aXZhdGlvbjogYm9vbGVhbjtcblx0XHR9O1xuXHRcdHVwcGVyU2VhdD86IHtcblx0XHRcdGxhYmVsOiBzdHJpbmc7XG5cdFx0XHRhY3RpdmF0aW9uOiBib29sZWFuO1xuXHRcdH07XG5cdFx0bG93ZXJTZWF0Pzoge1xuXHRcdFx0bGFiZWw6IHN0cmluZztcblx0XHRcdGFjdGl2YXRpb246IGJvb2xlYW47XG5cdFx0fTtcblx0fTtcbn07XG5cbmV4cG9ydCB0eXBlIENvbW1hbmRzVmFsdmVNcENvbXBvdW5kQ29udGV4dFR5cGUgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdHVzZVJlZHVjZXI6IFVzZVZhbHZlTXBDb21tYW5kUmVkdWNlcjtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5leHBvcnQgdHlwZSBDb21tYW5kc1ZhbHZlTXBDb21wb3VuZFJvb3RQcm9wcyA9IHtcblx0Y29tcG9uZW50UHJvcHM6IENvbXBvbmVudFByb3BzPGFueSwgYW55Pjtcblx0Y29tbWFuZDogQ29tbWFuZFZhbHZlTXBQcm9wcztcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG4vKipcbiAqIERlZmluZSB0aGUgc2hhcGUgb2YgdGhlIFZhbHZlQWN0aW9uIHR5cGVcbiAqIEBVc2VhZ2UgdXNlVmFsdmVSZWR1Y2VyXG4gKi9cbmV4cG9ydCB0eXBlIFZhbHZlTXBDb21tYW5kQWN0aW9uID1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0FVVE9fTUFOVUFMXCI7IG1vZGU6IFwiYXV0b1wiIHwgXCJtYW51YWxcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9NQUlOX01BTl9PTlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09GRlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX1VTTF9NQU5fT05cIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9VU0xfTUFOX09GRlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0xTTF9NQU5fT05cIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9MU0xfTUFOX09GRlwiIH07XG5leHBvcnQgdHlwZSBWYWx2ZU1wQ29tbWFuZFJlZHVjZXIgPSAoXG5cdHN0YXRlOiBDb21tYW5kVmFsdmVNcFByb3BzLFxuXHRhY3Rpb246IFZhbHZlTXBDb21tYW5kQWN0aW9uXG4pID0+IFZhbHZlU3RhdGU7XG5cbmV4cG9ydCB0eXBlIFVzZVZhbHZlTXBDb21tYW5kUmVkdWNlciA9IHtcblx0c3RhdGU6IENvbW1hbmRWYWx2ZU1wUHJvcHM7XG5cdHJlZHVjZXI6IHtcblx0XHR1cGRhdGVBdXRvTWFuU2VsZWN0aW9uOiAobW9kZTogXCJhdXRvXCIgfCBcIm1hbnVhbFwiKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZU1haW5NYW51YWxPbjogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVNYWluTWFudWFsT2ZmOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZVVzbE1hbnVhbE9uOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZVVzbE1hbnVhbE9mZjogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVMc2xNYW51YWxPbjogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVMc2xNYW51YWxPZmY6ICgpID0+IHZvaWQ7XG5cdFx0Ly9hZGQgbW9yZSBoYW5kbGVycyBhcyBuZWVkZWRcblx0fTtcbn07XG4iLCJpbXBvcnQgeyBnZXRCb29sQXRJbmRleCB9IGZyb20gXCIuLi91dGlscy9udW1iZXJVdGlsXCI7XG5pbXBvcnQge1xuXHRJdGVtSWRQb3NpdGlvblR5cGUsXG5cdEl0ZW1OYW1lRW51bSxcblx0cHVtcEl0ZW1MaXN0LFxuXHR2YWx2ZU1wSXRlbU5hbWVFbnVtLFxuXHR0eXBlIFB1bXBTdGF0ZSxcblx0dHlwZSBQdW1wVHlwZSxcblx0dHlwZSBWYWx2ZVN0YXRlLFxufSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuLyoqXG4gKiBUaGlzIGlzIGEgdXRpbGl0eSBmdW5jdGlvbiBmb3IgdGhlIGNvbXBvbmVudCBcInByb2Nlc3Mtb2JqZWN0L1ZhbHZlRkNcIlxuICpcbiAqIEBwYXJhbSBpbmRleDogbnVtYmVyIHRoZSBpbmRleCBvZiBhbiBkeW5hbWljIHZpc3VhbCBlbGVtZW50IFwiaXRlbVwiIHdpdGhpbiB0aGUgVmFsdmUgY29tcG9uZW50XG4gKiBAcGFyYW0gdmFsdmVTdGF0dXM/OlZhbHZlU3RhdHVzIHRoZSBzdGF0dXMgcmVwcmVzZW50aW5nIHBoeXNpY2FsIHByb2Nlc3MgdmFsdmVcbiAqIEByZXR1cm5zIGNsYXNzTmFtZTpzdHJpbmcgcmV0dXJucyBhZGRpdGlvbmFsIGNsYXNzbmFtZXMgZm9yIGFuIHZpc3VhbCBlbGVtZW50IG9mIHRoZSB2YWx2ZSBjb21wb25lbnQuXG4gKlxuICogUmV0dXJuZWQgY2xhc3NuYW1lcyBhcmU7XG4gKiBcdGhpZGUgLSB0aGlzIGhpZGVzIHRoZSBpdGVtXG4gKiBcdHNob3cgLVxuICovXG5leHBvcnQgY29uc3QgZ2V0SXRlbUNsYXNzTmFtZSA9IChcblx0aW5kZXg6IG51bWJlcixcblx0dmFsdmVTdGF0dXM/OiBWYWx2ZVN0YXRlXG4pOiBzdHJpbmcgPT4ge1xuXHRsZXQgY2xhc3NOYW1lID0gXCJcIjtcblx0Ly8gSGFuZGxlIHRoZSBmYWN0IHRoYXQgQWN0aXZhdGVkQ29uZmlnIGFuZCBEZWFjdGl2YXRlZENvbmZpZyBhcmUgb3B0aW9uYWwgYW5kIG1heWJlIHVuZGVmaW5lZFxuXHRjb25zdCBBY3RpdmF0ZWRDb25maWdWYWx1ZSA9IHZhbHZlU3RhdHVzPy5hY3RpdmF0ZWRDb25maWcgPz8gMDtcblx0Y29uc3QgRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSA9IHZhbHZlU3RhdHVzPy5kZWFjdGl2YXRlZENvbmZpZyA/PyAwO1xuXHRpZiAoaW5kZXggPCAxMikge1xuXHRcdGlmIChcblx0XHRcdChnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpICYmIHZhbHZlU3RhdHVzPy5hY3RGQikgfHxcblx0XHRcdChnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgJiYgdmFsdmVTdGF0dXM/LmRlQWN0RkIpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTQpIHtcblx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTIpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleClcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDEzKSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxNSkge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMikgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEyKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTYpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTIpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMilcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDE3KSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEzKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTMpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxOCkge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMykgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEzKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0fVxuXHQvLyBBZGRpdGlvbnMgdG8gdGhlIGNsYXNzTmFtZVxuXG5cdGlmIChjbGFzc05hbWUuaW5jbHVkZXMoXCJzaG93XCIpICYmICFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtXCIpKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCwgY2xhc3NOYW1lKTtcblx0XHRpZiAodmFsdmVTdGF0dXM/LmFsYXJtKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImFsYXJtXCIsIFwiXCIpICsgXCIgYWxhcm1cIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5jaGFuZ2luZykge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJjaGFuZ2luZ1wiLCBcIlwiKSArIFwiIGNoYW5naW5nXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFudWFsKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIm1hbnVhbFwiLCBcIlwiKSArIFwiIG1hbnVhbFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCAmJiAhdmFsdmVTdGF0dXMuYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibm8tYWxhcm0tbWFza1wiLCBcIlwiKSArIFwiIG5vLWFsYXJtLW1hc2tcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYXNrZWQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibWFza2VkXCIsIFwiXCIpICsgXCIgbWFza2VkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uYWN0RkIpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uZGVBY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJkZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGRlYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubG9jYXRlKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImNpcmNsZVwiLCBcIlwiKSArIFwiIGNpcmNsZVwiO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjbGFzc05hbWU7IC8vIGRlZmF1bHQgcmV0dXJuIHZhbHVlIGlmIG5vIG90aGVyIGNvbmRpdGlvbiBpcyBtZXRcbn07XG5leHBvcnQgY29uc3QgZ2V0VmFsdmVNcEl0ZW1DbGFzc05hbWUgPSAoXG5cdGluZGV4OiBudW1iZXIsXG5cdHZhbHZlU3RhdHVzPzogVmFsdmVTdGF0ZVxuKTogc3RyaW5nID0+IHtcblx0bGV0IGNsYXNzTmFtZSA9IFwiXCI7XG5cdC8vIEhhbmRsZSB0aGUgZmFjdCB0aGF0IEFjdGl2YXRlZENvbmZpZyBhbmQgRGVhY3RpdmF0ZWRDb25maWcgYXJlIG9wdGlvbmFsIGFuZCBtYXliZSB1bmRlZmluZWRcblx0Y29uc3QgQWN0aXZhdGVkQ29uZmlnVmFsdWUgPSB2YWx2ZVN0YXR1cz8uYWN0aXZhdGVkQ29uZmlnID8/IDA7XG5cdGNvbnN0IERlYWN0aXZhdGVkQ29uZmlnVmFsdWUgPSB2YWx2ZVN0YXR1cz8uZGVhY3RpdmF0ZWRDb25maWcgPz8gMDtcblx0Ly8gY29uc29sZS5sb2codmFsdmVTdGF0dXMpO1xuXG5cdGlmIChpbmRleCA8IDgpIHtcblx0XHRpZiAoXG5cdFx0XHQoZ2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSAmJiB2YWx2ZVN0YXR1cz8uYWN0RkIpIHx8XG5cdFx0XHQoZ2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpICYmIHZhbHZlU3RhdHVzPy5kZUFjdEZCKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93IGl0ZW1cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDkpIHtcblx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0fSBlbHNlIGlmIChpbmRleCA9PT0gOCkge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTApIHtcblx0XHQvLyBjb25zb2xlLmxvZyhcblx0XHQvLyBcdGBpbmRleCAke2luZGV4fSBkZWFjdCBjb25maWcgJHtEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlfSBiaXQgaXMgJHtnZXRCb29sQXRJbmRleChcblx0XHQvLyBcdFx0RGVhY3RpdmF0ZWRDb25maWdWYWx1ZSxcblx0XHQvLyBcdFx0MTBcblx0XHQvLyBcdCl9YFxuXHRcdC8vICk7XG5cblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTApIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMClcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvdyBpdGVtXCI7XG5cdFx0XHRpZiAodmFsdmVTdGF0dXM/LnVzbCkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGFjdGl2YXRlZFwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJkZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGRlYWN0aXZhdGVkXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZSBpdGVtXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMSkge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMSkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDExKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93IGl0ZW1cIjtcblx0XHRcdGlmICh2YWx2ZVN0YXR1cz8ubHNsKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgYWN0aXZhdGVkXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgZGVhY3RpdmF0ZWRcIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDEyKSB7XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5sb2NhdGUpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwic21hbGxcIiwgXCJcIikgKyBcIiBzbWFsbFwiO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgOCkgfHxcblx0XHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgOClcblx0XHRcdCkge1xuXHRcdFx0XHRjbGFzc05hbWUgPVxuXHRcdFx0XHRcdGNsYXNzTmFtZS5yZXBsYWNlKFwibGFyZ2VcIiwgXCJcIikgKyBcIiBsYXJnZVwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImhpZGUgaXRlbVwiLCBcIlwiKSArIFwiIGhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fVxuXHQvLyBBZGRpdGlvbnMgdG8gdGhlIGNsYXNzTmFtZVxuXG5cdGlmIChjbGFzc05hbWUuaW5jbHVkZXMoXCJzaG93XCIpICYmICFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtXCIpKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCwgY2xhc3NOYW1lKTtcblx0XHRpZiAodmFsdmVTdGF0dXM/LmFsYXJtKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImFsYXJtXCIsIFwiXCIpICsgXCIgYWxhcm1cIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5jaGFuZ2luZykge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJjaGFuZ2luZ1wiLCBcIlwiKSArIFwiIGNoYW5naW5nXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFudWFsKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIm1hbnVhbFwiLCBcIlwiKSArIFwiIG1hbnVhbFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCAmJiAhdmFsdmVTdGF0dXMuYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibm8tYWxhcm0tbWFza1wiLCBcIlwiKSArIFwiIG5vLWFsYXJtLW1hc2tcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYXNrZWQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibWFza2VkXCIsIFwiXCIpICsgXCIgbWFza2VkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uYWN0RkIpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uZGVBY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJkZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGRlYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHR9XG5cdC8vIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgsIGNsYXNzTmFtZSk7XG5cblx0cmV0dXJuIGNsYXNzTmFtZTsgLy8gZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbm8gb3RoZXIgY29uZGl0aW9uIGlzIG1ldFxufTtcbi8qKlxuICogQHJldHVybnMgQXJyYXkgb2YgaXRlbU5hbWUocykgZm9yIGVhY2ggdmlzdWFsIGVsZW1lbnQgb2YgYSB2YWx2ZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGl0ZW1OYW1lcyA9IE9iamVjdC5lbnRyaWVzKEl0ZW1OYW1lRW51bSkubWFwKChrZXksIGluZGV4KSA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKGBJbiBidWlsZCBJdGVtTmFtZXMgbmFtZSAke2tleX0gaW5kZXggJHtpbmRleH1gKTtcblx0cmV0dXJuIHtcblx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdG5hbWU6IGtleSxcblx0XHR2YWx1ZToga2V5WzFdLFxuXHRcdGluZGV4OiBpbmRleCxcblx0fTtcbn0pO1xuZXhwb3J0IGNvbnN0IHZhbHZlTXBJdGVtTmFtZXMgPSBPYmplY3QuZW50cmllcyh2YWx2ZU1wSXRlbU5hbWVFbnVtKS5tYXAoXG5cdChrZXksIGluZGV4KSA9PiB7XG5cdFx0Ly8gY29uc29sZS5sb2coYEluIGJ1aWxkIEl0ZW1OYW1lcyBuYW1lICR7a2V5fSBpbmRleCAke2luZGV4fWApO1xuXHRcdHJldHVybiB7XG5cdFx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdFx0bmFtZToga2V5LFxuXHRcdFx0dmFsdWU6IGtleVsxXSxcblx0XHRcdGluZGV4OiBpbmRleCxcblx0XHR9O1xuXHR9XG4pO1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lID0gKFxuXHRjbGFzc05hbWU6IHN0cmluZyxcblx0aXRlbUlkUG9zaXRpb246IEl0ZW1JZFBvc2l0aW9uVHlwZVxuKTogSXRlbUlkUG9zaXRpb25UeXBlID0+IHtcblx0Ly8gQ2hlY2sgY2xhc3NOYW1lIGluY2x1ZGVzICdpdGVtSWQgcG9wb3ZlcicsIGlmIG5vdCByZXR1cm4gY2xhc3NOYW1lIGFuZCB3YXJuXG5cdGlmICghY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXRlbUlkIHBvcG92ZXJcIikpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIkZ1bmN0aW9uIGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lIGNhbGxlZCB3aGVuICdpdGVtSWQgcG9wb3Zlcicgbm90IGluIGdpdmVuIGNsYXNzTmFtZVwiXG5cdFx0KTtcblx0XHRyZXR1cm4gY2xhc3NOYW1lO1xuXHR9XG5cdC8vIE92ZXIgd3JpdGUgZ2l2ZW4gY2xhc3NOYW1lXG5cdGNsYXNzTmFtZSA9IFwiaXRlbUlkIHBvcG92ZXJcIjtcblx0c3dpdGNoIChpdGVtSWRQb3NpdGlvbikge1xuXHRcdGNhc2UgXCJsZWZ0XCI6XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLWxlZnRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi1sZWZ0XCI7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tcmlnaHRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi1yaWdodFwiO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcInRvcC1sZWZ0XCI6XG5cdFx0XHRjbGFzc05hbWUgPVxuXHRcdFx0XHRjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLXRvcC1sZWZ0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tdG9wLWxlZnRcIjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJ0b3AtcmlnaHRcIjpcblx0XHRcdGNsYXNzTmFtZSA9XG5cdFx0XHRcdGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tdG9wLXJpZ2h0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tdG9wLXJpZ2h0XCI7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiYm90dG9tLWxlZnRcIjpcblx0XHRcdGNsYXNzTmFtZSA9XG5cdFx0XHRcdGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tYm90dG9tLWxlZnRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi1ib3R0b20tbGVmdFwiO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImJvdHRvbS1yaWdodFwiOlxuXHRcdFx0Y2xhc3NOYW1lID1cblx0XHRcdFx0Y2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi1ib3R0b20tcmlnaHRcIiwgXCJcIikgK1xuXHRcdFx0XHRcIiBwb3NpdGlvbi1ib3R0b20tcmlnaHRcIjtcblx0XHRcdGJyZWFrO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzTmFtZTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHB1bXBJdGVtTmFtZXMgPSBwdW1wSXRlbUxpc3QubWFwKFxuXHQoa2V5LCBpbmRleCkgPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKGBJbiBidWlsZCBJdGVtTmFtZXMgbmFtZSAke2tleX0gaW5kZXggJHtpbmRleH1gKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0a2V5OiB1dWlkdjQoKSxcblx0XHRcdG5hbWU6IGtleSxcblx0XHRcdGluZGV4OiBpbmRleCxcblx0XHR9O1xuXHR9XG4pO1xuY29uc3QgZ2V0UHVtcENvbmZpZ3VyYXRpb24gPSAocHVtcFR5cGU6IFB1bXBUeXBlKTpudW1iZXIgPT57XG5cdHN3aXRjaCAocHVtcFR5cGUpe1xuXHRcdGNhc2UgXCJjZW50cmlmdWdhbFwiOlxuXHRcdFx0cmV0dXJuIDFcblx0XHRjYXNlIFwiZGlhcGhyYWdtXCI6XG5cdFx0XHRyZXR1cm4gMVxuXHRcdGNhc2UgXCJwb3NpdGl2ZS1kaXNwbGFjbWVudFwiOlxuXHRcdFx0cmV0dXJuIDFcblx0XHRjYXNlIFwicHJvZ3Jlc3NpdmUtY2F2aXR5XCI6XG5cdFx0XHRyZXR1cm4gMVxuXHRcdGNhc2UgXCJnZWFyXCI6XG5cdFx0XHRyZXR1cm4gM1xuXHRcdGNhc2UgXCJsaXF1aWQtcmluZ1wiOlxuXHRcdFx0cmV0dXJuIDNcblx0XHRjYXNlIFwicG9zaXRpdmUtc2NyZXdcIjpcblx0XHRcdHJldHVybiAzXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IEVycm9yKGBJbiBnZXRQdW1wQ29uZmlndXJhdGlvbigpIHB1bXAgdHlwZTogJHtwdW1wVHlwZX0gbm90IGZvdW5kYClcblx0fVxuXG5cbn1cbmV4cG9ydCBjb25zdCBnZXRQdW1wSXRlbUNsYXNzTmFtZSA9IChcblx0aW5kZXg6IG51bWJlcixcblx0cHVtcFR5cGU6IFB1bXBUeXBlLFxuXHRzdGF0dXM/OiBQdW1wU3RhdGUsXG5cdCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBnZXRQdW1wQ29uZmlndXJhdGlvbihwdW1wVHlwZSlcblx0bGV0IGNsYXNzTmFtZSA9IFwiXCI7XG5cdC8vIEhhbmRsZSB0aGUgZmFjdCB0aGF0IEFjdGl2YXRlZENvbmZpZyBhbmQgRGVhY3RpdmF0ZWRDb25maWcgYXJlIG9wdGlvbmFsIGFuZCBtYXliZSB1bmRlZmluZWRcblx0aWYgKGluZGV4IDwgMikge1xuXHRcdGlmIChnZXRCb29sQXRJbmRleChjb25maWd1cmF0aW9uLCBpbmRleCkpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGBzaG93IGl0ZW0gJHtwdW1wVHlwZX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2xhc3NOYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFB1bXBTdGF0dXNDbGFzc05hbWVzID0gKGNsYXNzTmFtZTogc3RyaW5nLCBzdGF0dXM6IFB1bXBTdGF0ZSkgPT4ge1xuXHQvLyBBZGRpdGlvbnMgdG8gdGhlIGNsYXNzTmFtZVxuXHQvLyBjb25zb2xlLmxvZyhgc3RhdHVzOiAke0pTT04uc3RyaW5naWZ5KHN0YXR1cyxudWxsLCAyKX1gKTtcblxuXG5cdGlmIChjbGFzc05hbWUuaW5jbHVkZXMoXCJzaG93XCIpICYmICFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtXCIpKSB7XG5cdFx0aWYgKHN0YXR1cz8uYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiYWxhcm1cIiwgXCJcIikgKyBcIiBhbGFybVwiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5jaGFuZ2luZykge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJjaGFuZ2luZ1wiLCBcIlwiKSArIFwiIGNoYW5naW5nXCI7XG5cdFx0fVxuXHRcdGlmIChzdGF0dXM/Lm1hbnVhbCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJtYW51YWxcIiwgXCJcIikgKyBcIiBtYW51YWxcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8ubWFza2VkICYmICFzdGF0dXMuYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibm8tYWxhcm0tbWFza1wiLCBcIlwiKSArIFwiIG5vLWFsYXJtLW1hc2tcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8ubWFza2VkKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIm1hc2tlZFwiLCBcIlwiKSArIFwiIG1hc2tlZFwiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5hY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBhY3RpdmF0ZWRcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8uZGVBY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJkZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGRlYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjbGFzc05hbWU7XG59XG4iLCIvKipcbiAqIEhNSSBDb21wb25lbnQgLSBIZWF0IEV4Y2hhbmdlciB0eXBlcyBkZWZzXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRQcm9wcyB9IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEl0ZW1JZFBvc2l0aW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9hcGkvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEhYX0NPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLkhlYXRFeGNoYW5nZXJcIjtcblxuY29uc3QgSGVhdEV4Y2hhbmdlclR5cGVzID0gW1xuXHRcInBsYXRlXCIsXG5cdFwidHViZWxhclwiLFxuXTtcbmV4cG9ydCB0eXBlIEhlYXRFeGNoYW5nZXJUeXBlcyA9ICh0eXBlb2YgSGVhdEV4Y2hhbmdlclR5cGVzKVtudW1iZXJdO1xuZXhwb3J0IGVudW0gSHhNb2RlcyB7XG5cdGFsYXJtID0gXCJhbGFybVwiLFxuXHRoZWF0aW5nID0gXCJoZWF0aW5nXCIsXG5cdGNvb2xpbmcgPSBcImNvb2xpbmdcIixcbn07XG5cblxuZXhwb3J0IHR5cGUgSHhQcm9wcyA9IHtcblx0dHlwZT86IEhlYXRFeGNoYW5nZXJUeXBlcztcblx0aXRlbU5hbWU/OiBzdHJpbmc7XG5cdG1vZGU/OiBIeE1vZGVzW2tleW9mIEh4TW9kZXNdO1xuXHRsb2NhdGU/OiBib29sZWFuO1xuXHRzaG93TGFiZWw/OiBib29sZWFuO1xuXHRsYWJlbFBvc2l0aW9uPzogSXRlbUlkUG9zaXRpb25UeXBlXG59XG5cbmV4cG9ydCBjb25zdCBIeEl0ZW1MaXN0ID0gW1xuXHRcIml0ZW0tMVwiLFxuXHRcIml0ZW0tMlwiLFxuXHRcIml0ZW0tM1wiLFxuXHRcIml0ZW0tNFwiLFxuXHRcIml0ZW0tNVwiLFxuXHRcIml0ZW0tNlwiLFxuXHRcIml0ZW0tN1wiLFxuXHRcImJhc2UtMVwiLFxuXHRcImxvY2F0ZVwiLFxuXVxuZXhwb3J0IHR5cGUgSHhJdGVtcyA9ICh0eXBlb2YgSHhJdGVtTGlzdClbbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgSHhDb21wb3VuZENvbnRleHRUeXBlID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHRpdGVtUHJvcHM6IEh4UHJvcHM7XG5cdG9uQWN0aW9uUGVyZm9ybWVkOiAoKSA9PiB2b2lkO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcbiIsIi8qKlxuICogSE1JIENvbXBvbmVudCAtIEhlYXQgRXhjaGFuZ2VyIC0gUGxhdGUgVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuaW1wb3J0IHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IEh4SXRlbUxpc3QsIHR5cGUgSGVhdEV4Y2hhbmdlclR5cGVzLCB0eXBlIEh4TW9kZXMgfSBmcm9tICcuLi8uLi8uLi9hci10eXBlcy9wcm9jZXNzT2JqZWN0cy9oZWF0RXhjaGFuZ2Vycy9oeC10eXBlcydcbmltcG9ydCB7IGdldEJvb2xBdEluZGV4IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbnVtYmVyVXRpbCc7XG5leHBvcnQgY29uc3QgaHhJdGVtTmFtZXMgPSBIeEl0ZW1MaXN0Lm1hcChcblx0KGtleSwgaW5kZXgpID0+IHtcblx0XHQvLyBjb25zb2xlLmxvZyhgSW4gYnVpbGQgSXRlbU5hbWVzIG5hbWUgJHtrZXl9IGluZGV4ICR7aW5kZXh9YCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGtleTogdXVpZHY0KCksXG5cdFx0XHRuYW1lOiBrZXksXG5cdFx0XHRpbmRleDogaW5kZXgsXG5cdFx0fTtcblx0fVxuKTtcblxuY29uc3QgZ2V0SHhDb25maWd1cmF0aW9uID0gKHR5cGU6IEhlYXRFeGNoYW5nZXJUeXBlcyk6bnVtYmVyID0+e1xuXHRzd2l0Y2ggKHR5cGUpe1xuXHRcdGNhc2UgXCJwbGF0ZVwiOlxuXHRcdFx0cmV0dXJuIDFcblx0XHRjYXNlIFwidHViZWxhclwiOlxuXHRcdFx0cmV0dXJuIDFcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgRXJyb3IoYEluIGdldFB1bXBDb25maWd1cmF0aW9uKCkgcHVtcCB0eXBlOiAke3R5cGV9IG5vdCBmb3VuZGApXG5cdH1cbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0SHhJdGVtQ2xhc3NOYW1lID0gKFxuXHRpbmRleDogbnVtYmVyLFxuXHR0eXBlOiBIZWF0RXhjaGFuZ2VyVHlwZXMsXG5cdG1vZGU/OiBIeE1vZGVzW2tleW9mIEh4TW9kZXNdLFxuXHQpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBjb25maWd1cmF0aW9uID0gZ2V0SHhDb25maWd1cmF0aW9uKHR5cGUpXG5cdGxldCBjbGFzc05hbWUgPSBcIlwiO1xuXHQvLyBIYW5kbGUgdGhlIGZhY3QgdGhhdCBBY3RpdmF0ZWRDb25maWcgYW5kIERlYWN0aXZhdGVkQ29uZmlnIGFyZSBvcHRpb25hbCBhbmQgbWF5YmUgdW5kZWZpbmVkXG5cdGlmIChpbmRleCA8IDIpIHtcblx0XHRpZiAoZ2V0Qm9vbEF0SW5kZXgoY29uZmlndXJhdGlvbiwgaW5kZXgpKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBgc2hvdyBpdGVtICR7dHlwZX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2xhc3NOYW1lO1xufVxuZXhwb3J0IGNvbnN0IGdldEh4TW9kZUNsYXNzTmFtZXMgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIG1vZGU6IEh4TW9kZXNba2V5b2YgSHhNb2Rlc10pPT57XG5cdC8vIEFkZGl0aW9ucyB0byB0aGUgY2xhc3NOYW1lXG5cblx0aWYgKGNsYXNzTmFtZS5pbmNsdWRlcyhcInNob3dcIikgJiYgIWNsYXNzTmFtZS5pbmNsdWRlcyhcIml0ZW1cIikpIHtcblxuXHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0Y2FzZSBcImFsYXJtXCI6XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWxhcm1TdGF0ZVwiLCBcIlwiKSArIFwiIEFsYXJtU3RhdGVcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiaGVhdGluZ1wiOlxuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImhlYXRpbmdcIiwgXCJcIikgKyBcIiBoZWF0aW5nXCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNvb2xpbmdcIjpcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJjb29saW5nXCIsIFwiXCIpICsgXCIgY29vbGluZ1wiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0cmV0dXJuIGNsYXNzTmFtZTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHR5cGUgQ29tbWFuZFZhbHZlTXBQcm9wcyB9IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcbi8vIGltcG9ydCB7IEljb25BdXRvLCBJY29uSGFuZENsaWNrIH0gZnJvbSAnLi4vdXRpbHMvaWNvbnMnO1xuaW1wb3J0IHsgUHJvcGVydHlUcmVlIH0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiO1xuaW1wb3J0IHR5cGUge1xuXHRDb21wb25lbnRQcm9wcyxcblx0Q29tcG9uZW50TWV0YSxcblx0UENvbXBvbmVudCxcblx0U2l6ZU9iamVjdCxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiOyAvLydAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuLy8gaW1wb3J0IHsgaW5pdGlhbENvbnRyb2xTdGF0ZSB9IGZyb20gXCIuLi9hcGkvaW5pdGlhbFN0YXRlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVZhbHZlTXBDb21tYW5kUmVkdWNlciB9IGZyb20gXCIuLi9hcGkvaG9va3NcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gXCJobWkuaW5wdXQuQ29tbWFuZFZhbHZlTXBcIjtcblxuY29uc3QgYXJlRXF1YWwgPSAoXG5cdHByZXZQcm9wczogQ29tcG9uZW50UHJvcHM8Q29tbWFuZFZhbHZlTXBQcm9wcz4sXG5cdG5leHRQcm9wczogQ29tcG9uZW50UHJvcHM8Q29tbWFuZFZhbHZlTXBQcm9wcz5cbikgPT4ge1xuXHQvLyByZXR1cm4gdHJ1ZSBpZiBwcm9wcyBhcmUgZXF1YWwsIGZhbHNlIGlmIHJlLXJlbmRlciBpcyBuZWVkZWRcblx0cmV0dXJuIHByZXZQcm9wcy5wcm9wcyA9PT0gbmV4dFByb3BzLnByb3BzO1xufTtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuXG4gKi9cbmV4cG9ydCBjb25zdCBDb21tYW5kVmFsdmVNcCA9IFJlYWN0Lm1lbW8oXG5cdChwcm9wczogQ29tcG9uZW50UHJvcHM8Q29tbWFuZFZhbHZlTXBQcm9wcz4pID0+IHtcblx0XHRjb25zdCB7IHN0YXRlLCByZWR1Y2VyIH0gPSB1c2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIoKTtcblx0XHQvLyBjb25zdCB0cmVlID0gcHJvcHMuc3RvcmUucHJvcHNcblxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0XHQvLyBTdWJzY3JpYmUgdG8gY2hhbmdlcyBvbiB0aGUgXCJjb21tYW5kXCIgcHJvcGVydHlcblx0XHRcdGNvbnN0IHVuc3Vic2NyaWJlID0gcHJvcHMuc3RvcmUucHJvcHMuc3Vic2NyaWJlKCh0cmVlOiBQcm9wZXJ0eVRyZWUpID0+IHtcblx0XHRcdFx0Ly8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbmV2ZXIgXCJjb21tYW5kXCIgY2hhbmdlc1xuXHRcdFx0XHRjb25zdCBjb21tYW5kID0gdHJlZS5yZWFkKFwiY29tbWFuZFwiKTtcblx0XHRcdFx0Y29uc3QgeyBtYWluLCB1cHBlclNlYXQsIGxvd2VyU2VhdCB9ID0gY29tbWFuZDtcblx0XHRcdFx0Ly8gWW91IGNhbiB1cGRhdGUgbG9jYWwgc3RhdGUgb3IgcGVyZm9ybSBvdGhlciBhY3Rpb25zIGhlcmVcblx0XHRcdFx0Ly8gVXBkYXRlIG1haW4gc3RhdGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmIChzdGF0ZS5jb21tYW5kPy5tYWluICYmIG1haW4pIHtcblx0XHRcdFx0XHRpZiAobWFpbi5hdXRvTWFudWFsICE9PSBzdGF0ZS5jb21tYW5kLm1haW4uYXV0b01hbnVhbCkge1xuXHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVBdXRvTWFuU2VsZWN0aW9uKCFtYWluLmF1dG9NYW51YWwgPyBcImF1dG9cIiA6IFwibWFudWFsXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobWFpbi5hY3RpdmF0aW9uICE9PSBzdGF0ZS5jb21tYW5kLm1haW4uYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0aWYgKCFtYWluLmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVNYWluTWFudWFsT2ZmKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG1haW4uYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZU1haW5NYW51YWxPbigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFVwZGF0ZSBsb3dlclNlYXQgc3RhdGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmIChzdGF0ZS5jb21tYW5kPy5sb3dlclNlYXQgJiYgbG93ZXJTZWF0KSB7XG5cdFx0XHRcdFx0aWYgKGxvd2VyU2VhdC5hY3RpdmF0aW9uICE9PSBzdGF0ZS5jb21tYW5kLmxvd2VyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWxvd2VyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlTHNsTWFudWFsT2ZmKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGxvd2VyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlTHNsTWFudWFsT24oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gVXBkYXRlIHVwcGVyU2VhdCBzdGF0ZSBpZiBuZWVkZWRcblx0XHRcdFx0aWYgKHN0YXRlLmNvbW1hbmQ/LnVwcGVyU2VhdCAmJiB1cHBlclNlYXQpIHtcblx0XHRcdFx0XHRpZiAodXBwZXJTZWF0LmFjdGl2YXRpb24gIT09IHN0YXRlLmNvbW1hbmQudXBwZXJTZWF0LmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdGlmICghdXBwZXJTZWF0LmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVVc2xNYW51YWxPZmYoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodXBwZXJTZWF0LmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVVc2xNYW51YWxPbigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImNvbW1hbmQgY2hhbmdlZDpcIiwgY29tbWFuZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0aWYgKHR5cGVvZiB1bnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0dW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9LCBbcHJvcHMuc3RvcmUucHJvcHNdKTtcblxuXHRcdGNvbnNvbGUubG9nKGBwcm9wcy5zdG9yZS5hZGRyZXNzUGF0aCAke3Byb3BzLnN0b3JlLmFkZHJlc3NQYXRofWApO1xuXHRcdGNvbnNvbGUubG9nKGBwcm9wcy5zdG9yZS5pc0RpcnR5ICR7cHJvcHMuc3RvcmUucHJvcHMuaXNEaXJ0eSgpfWApO1xuXG5cdFx0Y29uc3QgeyBtYWluLCB1cHBlclNlYXQsIGxvd2VyU2VhdCwgaW50ZXJsb2NrcyB9ID0gc3RhdGUuY29tbWFuZCB8fCB7fTtcblxuXHRcdGNvbnN0IGlzSW50ZXJsb2NrZWQgPSAoaW50ZXJsb2NrczogYm9vbGVhbltdKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRyZXR1cm4gaW50ZXJsb2Nrcy5pbmNsdWRlcyh0cnVlLCAwKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgaGFuZGxlTWFpbkF1dG9NYW51YWxTZWxlY3Rpb24gPSAobW9kZTogXCJhdXRvXCIgfCBcIm1hbnVhbFwiKTogdm9pZCA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZUF1dG9NYW5TZWxlY3Rpb24obW9kZSk7XG5cdFx0XHRpZiAobW9kZSA9PT0gXCJhdXRvXCIpIHtcblx0XHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC5tYWluLmF1dG9NYW51YWxcIiwgZmFsc2UpOyAvLyBmYWxzZSA9IGF1dG9cblx0XHRcdH0gZWxzZSBpZiAobW9kZSA9PT0gXCJtYW51YWxcIikge1xuXHRcdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLm1haW4uYXV0b01hbnVhbFwiLCB0cnVlKTsgLy8gdHJ1ZSA9IG1hbnVhbFxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBoYW5kbGVNYWluTWFudWFsT24gPSAoKSA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZU1haW5NYW51YWxPbigpO1xuXHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC5tYWluLmFjdGl2YXRpb25cIiwgdHJ1ZSk7XG5cdFx0fTtcblx0XHRjb25zdCBoYW5kbGVNYWluTWFudWFsT2ZmID0gKCkgPT4ge1xuXHRcdFx0cmVkdWNlci51cGRhdGVNYWluTWFudWFsT2ZmKCk7XG5cdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLm1haW4uYWN0aXZhdGlvblwiLCBmYWxzZSk7XG5cdFx0fTtcblx0XHRjb25zdCBoYW5kbGVVc2xNYW51YWxPbiA9ICgpID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlVXNsTWFudWFsT24oKTtcblx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQudXBwZXJTZWF0LmFjdGl2YXRpb25cIiwgdHJ1ZSk7XG5cdFx0fTtcblx0XHRjb25zdCBoYW5kbGVVc2xNYW51YWxPZmYgPSAoKSA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZVVzbE1hbnVhbE9mZigpO1xuXHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC51cHBlclNlYXQuYWN0aXZhdGlvblwiLCBmYWxzZSk7XG5cdFx0fTtcblx0XHRjb25zdCBoYW5kbGVMc2xNYW51YWxPbiA9ICgpID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlTHNsTWFudWFsT24oKTtcblx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQubG93ZXJTZWF0LmFjdGl2YXRpb25cIiwgdHJ1ZSk7XG5cdFx0fTtcblx0XHRjb25zdCBoYW5kbGVMc2xNYW51YWxPZmYgPSAoKSA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZUxzbE1hbnVhbE9mZigpO1xuXHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC5sb3dlclNlYXQuYWN0aXZhdGlvblwiLCBmYWxzZSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhtaS1jb21wb25lbnQtY29tbWFuZC12YWx2ZS1tcCBobWktY29tcG9uZW50LWNvbW1hbmQtdmFsdmUtbXBfX2dyaWRcIj5cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cIm1haW4tbGFiZWxcIj57bWFpbj8ubGFiZWx9PC9sYWJlbD5cblx0XHRcdFx0PGRpdiByb2xlPVwiZ3JvdXBcIiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgb3V0bGluZWQgbWFpbi1hdXRvLW1hbnVhbFwiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAkeyFtYWluPy5hdXRvTWFudWFsID8gXCJzZWxlY3RlZFwiIDogXCJcIn1gfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2lzSW50ZXJsb2NrZWQoaW50ZXJsb2Nrcz8ubWFpbiB8fCBbXSl9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVNYWluQXV0b01hbnVhbFNlbGVjdGlvbihcImF1dG9cIil9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0QXV0byB7LyogPEljb25BdXRvIC8+ICovfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke21haW4/LmF1dG9NYW51YWwgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17aXNJbnRlcmxvY2tlZChpbnRlcmxvY2tzPy5tYWluIHx8IFtdKX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZU1haW5BdXRvTWFudWFsU2VsZWN0aW9uKFwibWFudWFsXCIpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdE1hbnVhbFxuXHRcdFx0XHRcdFx0ey8qIDxJY29uSGFuZENsaWNrIC8+ICovfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiByb2xlPVwiZ3JvdXBcIiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgb3V0bGluZWQgbWFpbi1vbi1vZmZcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHttYWluPy5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIn1gfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRpc0ludGVybG9ja2VkKGludGVybG9ja3M/Lm1haW4gfHwgW10pIHx8ICFtYWluPy5hdXRvTWFudWFsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVNYWluTWFudWFsT259XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0T24gey8qIDxJY29uQXV0byAvPiAqL31cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHshbWFpbj8uYWN0aXZhdGlvbiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdFx0aXNJbnRlcmxvY2tlZChpbnRlcmxvY2tzPy5tYWluIHx8IFtdKSB8fCAhbWFpbj8uYXV0b01hbnVhbFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTWFpbk1hbnVhbE9mZn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRPZmZcblx0XHRcdFx0XHRcdHsvKiA8SWNvbkhhbmRDbGljayAvPiAqL31cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJ1cHBlci1zZWF0LWxhYmVsXCI+e3VwcGVyU2VhdD8ubGFiZWx9PC9sYWJlbD5cblx0XHRcdFx0PGRpdiByb2xlPVwiZ3JvdXBcIiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgb3V0bGluZWQgdXBwZXItc2VhdC1vbi1vZmZcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0dXBwZXJTZWF0Py5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdGlzSW50ZXJsb2NrZWQoaW50ZXJsb2Nrcz8udXBwZXJTZWF0IHx8IFtdKSB8fCAhbWFpbj8uYXV0b01hbnVhbFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlVXNsTWFudWFsT259XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0T24gey8qIDxJY29uQXV0byAvPiAqL31cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0IXVwcGVyU2VhdD8uYWN0aXZhdGlvbiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcblx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRpc0ludGVybG9ja2VkKGludGVybG9ja3M/LnVwcGVyU2VhdCB8fCBbXSkgfHwgIW1haW4/LmF1dG9NYW51YWxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVVzbE1hbnVhbE9mZn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRPZmZcblx0XHRcdFx0XHRcdHsvKiA8SWNvbkhhbmRDbGljayAvPiAqL31cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJsb3dlci1zZWF0LWxhYmVsXCI+e2xvd2VyU2VhdD8ubGFiZWx9PC9sYWJlbD5cblx0XHRcdFx0PGRpdiByb2xlPVwiZ3JvdXBcIiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgb3V0bGluZWQgbG93ZXItc2VhdC1vbi1vZmZcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0bG93ZXJTZWF0Py5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdGlzSW50ZXJsb2NrZWQoaW50ZXJsb2Nrcz8ubG93ZXJTZWF0IHx8IFtdKSB8fCAhbWFpbj8uYXV0b01hbnVhbFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTHNsTWFudWFsT259XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0T24gey8qIDxJY29uQXV0byAvPiAqL31cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0IWxvd2VyU2VhdD8uYWN0aXZhdGlvbiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcblx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRpc0ludGVybG9ja2VkKGludGVybG9ja3M/Lmxvd2VyU2VhdCB8fCBbXSkgfHwgIW1haW4/LmF1dG9NYW51YWxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUxzbE1hbnVhbE9mZn1cblx0XHRcdFx0XHRcdHZhbHVlPXtcInRydWVcIn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRPZmZcblx0XHRcdFx0XHRcdHsvKiA8SWNvbkhhbmRDbGljayAvPiAqL31cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRhcmVFcXVhbFxuKTtcblxuLy8gVGhpcyBpcyB0aGUgYWN0dWFsIHRoaW5nIHRoYXQgZ2V0cyByZWdpc3RlcmVkIHdpdGggdGhlIGNvbXBvbmVudCByZWdpc3RyeS5cbmV4cG9ydCBjbGFzcyBDb21tYW5kVmFsdmVNcE1ldGEgaW1wbGVtZW50cyBDb21wb25lbnRNZXRhIHtcblx0Z2V0Q29tcG9uZW50VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBDT01QT05FTlRfVFlQRTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyBUaGUgUmVhY3QgY29tcG9uZW50IGNsYXNzLlxuXHQgKi9cblx0Z2V0Vmlld0NvbXBvbmVudCgpOiBQQ29tcG9uZW50IHtcblx0XHRyZXR1cm4gQ29tbWFuZFZhbHZlTXA7XG5cdH1cblxuXHRnZXREZWZhdWx0U2l6ZSgpOiBTaXplT2JqZWN0IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IDI4MCxcblx0XHRcdGhlaWdodDoxNDAsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IENvbW1hbmRWYWx2ZU1wUHJvcHMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb21tYW5kOiB7XG5cdFx0XHRcdGludGVybG9ja3M6IHtcblx0XHRcdFx0XHRtYWluOiB0cmVlLnJlYWRBcnJheShcImNvbW1hbmQuaW50ZXJsb2Nrcy5tYWluXCIpLFxuXHRcdFx0XHRcdHVwcGVyU2VhdDogdHJlZS5yZWFkQXJyYXkoXCJjb21tYW5kLmludGVybG9ja3MudXBwZXJTZWF0XCIpLFxuXHRcdFx0XHRcdGxvd2VyU2VhdDogdHJlZS5yZWFkQXJyYXkoXCJjb21tYW5kLmludGVybG9ja3MubG93ZXJTZWF0XCIpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtYWluOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHRyZWUucmVhZFN0cmluZyhcImNvbW1hbmRzLm1haW4ubGFiZWxcIiwgXCJcIiksXG5cdFx0XHRcdFx0YXV0b01hbnVhbDogdHJlZS5yZWFkQm9vbGVhbihcImNvbW1hbmQubWFpbi5hdXRvTWFudWFsXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRhY3RpdmF0aW9uOiB0cmVlLnJlYWRCb29sZWFuKFwiY29tbWFuZC5tYWluLmFjdGl2YXRpb25cIiwgZmFsc2UpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cHBlclNlYXQ6IHtcblx0XHRcdFx0XHRsYWJlbDogdHJlZS5yZWFkU3RyaW5nKFwiY29tbWFuZHMudXBwZXJTZWF0LmxhYmVsXCIsIFwiXCIpLFxuXHRcdFx0XHRcdGFjdGl2YXRpb246IHRyZWUucmVhZEJvb2xlYW4oXCJjb21tYW5kLnVwcGVyU2VhdC5hY3RpdmF0aW9uXCIsIGZhbHNlKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0bG93ZXJTZWF0OiB7XG5cdFx0XHRcdFx0bGFiZWw6IHRyZWUucmVhZFN0cmluZyhcImNvbW1hbmRzLmxvd2VyU2VhdC5sYWJlbFwiLCBcIlwiKSxcblx0XHRcdFx0XHRhY3RpdmF0aW9uOiB0cmVlLnJlYWRCb29sZWFuKFwiY29tbWFuZC5sb3dlclNlYXQuYWN0aXZhdGlvblwiLCBmYWxzZSksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cdH1cbn1cblxuLyoqXG4gKlxuZ2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IE15UHJvcFR5cGUge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIHdpbGwgZ2l2ZSB0aGUgcHJvcGVydHkgdHJlZSBhcyBhIHBsYWluIGpzIG9iamVjdCwgaW5zdGVhZCBvZiBhbiBpbnN0YW5jZSBvZiBQcm9wZXJ0eVRyZWVcbiAgICAgICAgLy8gdGhpcyB3b3VsZCBsZXQgeW91IHJlYWQgdGhlIHZhbHVlIG9mIHRoZSB0cmVlIHZpYSBgdGhpcy5wcm9wcy5wcm9wcy5qc29uYC4gIFNhbWUgcmVzdWx0IG9jY3VycyBpZlxuICAgICAgICAvLyBjYWxsaW5nIHRyZWUucmVhZCgpLCB3aXRob3V0IHBhc3NpbmcgYSBwYXRoIHBhcmFtZXRlci5cbiAgICAgICBqc29uOiB0cmVlLnRvUGxhaW5PYmplY3QoKVxuXG5cbiAgICAgICAvLyBJZiB5b3UgaGFkIHRvIHdyaXRlIHRvIHRoZSB0cmVlJ3MgJ2RhdGEnIG5vZGUsIHBhc3NpbmcgaW4gYSBjYWxsYmFjayBmdW5jdGlvbiBpbnN0ZWFkIG9mIHRoZSBhY3R1YWxcbiAgICAgICAvLyBQcm9wZXJ0eVRyZWUgd2lsbCBzaW1wbGlmeSB1bml0IHRlc3RhYmlsaXR5IG9mIHlvdXIgY29tcG9uZW50IG91dHNpZGUgb2YgcGVyc3BlY3RpdmUncyBlbnZpcm9ubWVudC5cbiAgICAgICAvLyBZb3Ugd291bGQgY2FsbCB0aGlzIHZpYSB0aGlzLnByb3BzLnByb3BzLndyaXRlRGF0YShzb21lTmV3RGF0YSlcbiAgICAgICB3cml0ZURhdGE6IChuZXdKc29uKSAtPiB0cmVlLndyaXRlKFwiZGF0YVwiLCBuZXdKc29uKVxuICAgIH1cbn1cbiAqL1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJdGVtSWRQb3NpdGlvblR5cGV9IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRQcm9wZXJ0eVRyZWUsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjsgLy8nQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB0eXBlIHsgSHhQcm9wcyB9IGZyb20gXCIuLi9hci10eXBlcy9wcm9jZXNzT2JqZWN0cy9oZWF0RXhjaGFuZ2Vycy9oeC10eXBlc1wiO1xuaW1wb3J0IHsgSGVhdEV4Y2hhbmdlckNvbXBvdW5kIH0gZnJvbSBcIi4vcHJvY2Vzcy1vYmplY3RzL2hlYXQtZXhjaGFuZ2Vycy9IZWF0RXhjaGFuZ2VyQ29tcG91bmRcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLkhlYXRFeGNoYW5nZXJcIjtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuICovXG5leHBvcnQgY2xhc3MgSGVhdEV4Y2hhbmdlciBleHRlbmRzIENvbXBvbmVudDxDb21wb25lbnRQcm9wczxIeFByb3BzPiwgYW55PiB7XG5cdHZhbHZlUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzOiBDb21wb25lbnRQcm9wczxIeFByb3BzPikge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnZhbHZlUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuXHR9XG5cblx0Ly8gVGhpcyBpcyBhIGxpZmVjeWNsZSBtZXRob2QgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IG1vdW50ZWQgdG8gdGhlIERPTS5cblx0Y29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG5cdFx0Ly8gTm8gbmVlZCB0byBpbml0aWFsaXplIHZhbHZlUmVmIGhlcmVcblx0fVxuXHR0eXBlID0gdGhpcy5wcm9wcy5wcm9wcy50eXBlO1xuXHRpdGVtTmFtZSA9IHRoaXMucHJvcHMucHJvcHMuaXRlbU5hbWU7XG5cdG1vZGUgPSB0aGlzLnByb3BzLnByb3BzLm1vZGU7XG5cdGxvY2F0ZSA9IHRoaXMucHJvcHMucHJvcHMubG9jYXRlO1xuXHRzaG93TGFiZWw6IGJvb2xlYW4gPSB0aGlzLnByb3BzLnByb3BzLnNob3dMYWJlbCB8fCBmYWxzZTtcblx0bGFiZWxQb3NpdGlvbjogSXRlbUlkUG9zaXRpb25UeXBlID0gdGhpcy5wcm9wcy5wcm9wcy5sYWJlbFBvc2l0aW9uIHx8IFwibGVmdFwiO1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVyIGZvciB0aGUgY29tcG9uZW50J3MgYWN0aW9uIGV2ZW50LlxuXHQgKi9cblx0b25BY3Rpb25QZXJmb3JtZWQgPSAoKSA9PiB7XG5cdFx0Ly8gSWYgdGhlIGRlc2lnbmVyIGlzIGluIFwiZGVzaWduXCIgbW9kZSwgZG9uJ3QgZG8gYW55dGhpbmdcblx0XHRpZiAoIXRoaXMucHJvcHMuZXZlbnRzRW5hYmxlZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBpcyBkaXNhYmxlZCBpbiB0aGUgZGVzaWduLXNjb3BlXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGNsaWNrZWQhXCIpO1xuXHRcdHRoaXMucHJvcHMuY29tcG9uZW50RXZlbnRzLmZpcmVDb21wb25lbnRFdmVudChcIm9uQWN0aW9uUGVyZm9ybWVkXCIsIHt9KTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdC8vIDxkaXY+VGhpcyBpcyBWYWx2ZTwvZGl2PlxuXHRcdFx0PEhlYXRFeGNoYW5nZXJDb21wb3VuZC5Sb290XG5cdFx0XHRcdGNvbXBvbmVudFByb3BzPXt0aGlzLnByb3BzfVxuXHRcdFx0XHRpdGVtUHJvcHM9e3RoaXMucHJvcHMucHJvcHN9XG5cdFx0XHRcdG9uQWN0aW9uUGVyZm9ybWVkPXt0aGlzLm9uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0PlxuXHRcdFx0XHQ8SGVhdEV4Y2hhbmdlckNvbXBvdW5kLnBsYXRlIC8+XG5cdFx0XHRcdDxIZWF0RXhjaGFuZ2VyQ29tcG91bmQucG9wb3ZlciBhbmNob3JFbD17dGhpcy52YWx2ZVJlZi5jdXJyZW50fSAvPlxuXHRcdFx0PC9IZWF0RXhjaGFuZ2VyQ29tcG91bmQuUm9vdD5cblx0XHQpO1xuXHR9XG59XG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIEhlYXRFeGNoYW5nZXJNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIEhlYXRFeGNoYW5nZXI7XG5cdH1cblxuXHRnZXREZWZhdWx0U2l6ZSgpOiBTaXplT2JqZWN0IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IDM2LFxuXHRcdFx0aGVpZ2h0OiA2MCxcblx0XHR9O1xuXHR9XG5cblx0Ly8gSW52b2tlZCB3aGVuIGFuIHVwZGF0ZSB0byB0aGUgUHJvcGVydHlUcmVlIGhhcyBvY2N1cnJlZCxcblx0Ly8gZWZmZWN0aXZlbHkgbWFwcGluZyB0aGUgdmFsdmVTdGF0dXMgb2YgdGhlIHRyZWUgdG8gY29tcG9uZW50IHByb3BzLlxuXHRnZXRQcm9wc1JlZHVjZXIodHJlZTogUHJvcGVydHlUcmVlKTogSHhQcm9wcyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IHRyZWUucmVhZFN0cmluZyhcInB1bXBUeXBlXCIsIFwicGxhdGVcIiksXG5cdFx0XHRtb2RlOiB0cmVlLnJlYWRTdHJpbmcoXCJtb2RlXCIsIFwiaGVhdGluZ1wiKSxcblx0XHRcdGl0ZW1OYW1lOiB0cmVlLnJlYWRTdHJpbmcoXCJpdGVtTmFtZVwiLCBcIlwiKSxcblx0XHRcdGxvY2F0ZTogdHJlZS5yZWFkQm9vbGVhbihcImxvY2F0ZVwiLCBmYWxzZSksXG5cdFx0XHRzaG93TGFiZWw6IHRyZWUucmVhZEJvb2xlYW4oXCJzaG93TGFiZWxcIiwgZmFsc2UpLFxuXHRcdFx0bGFiZWxQb3NpdGlvbjogdHJlZS5yZWFkU3RyaW5nKFwibGFiZWxQb3NpdGlvblwiLCBcInRvcC1sZWZ0XCIpLFxuXHRcdH07XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvcGVydHlUcmVlIH0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiO1xuaW1wb3J0IHR5cGUge1xuXHRDb21wb25lbnRQcm9wcyxcblx0Q29tcG9uZW50TWV0YSxcblx0UENvbXBvbmVudCxcblx0U2l6ZU9iamVjdCxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiO1xuXG4vLyBpbXBvcnQgeyB1c2VDcmVhdGVDb250ZXh0IH0gZnJvbSBcInNyYy91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyBQYXJhbWV0ZXJzTGlzdFN0YXRlLCBQYXJhbUl0ZW0gfSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJJbml0aWFsU3RhdGUgfSBmcm9tIFwiLi4vYXBpL2luaXRpYWxTdGF0ZVwiO1xuaW1wb3J0IHtcblx0UEFSQU1FVEVSX0xJU1RfQ09NUE9ORU5UX1RZUEUsXG5cdEhNSV9DT01QT05FTlRfQ0xBU1MsXG5cdElBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1JPVyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbnR5cGUgUGFyYW1ldGVyc0xpc3RDb21wb25lbnRQcm9wcyA9IHtcblx0cGFyYW1ldGVyczogUGFyYW1JdGVtW107XG59O1xuY29uc3QgaW5pdFBhcmFtZXRlcnMgPSBbXG5cdHtcblx0XHRsYWJlbDoge1xuXHRcdFx0dGV4dDogXCJ0ZXh0XCIsXG5cdFx0fSxcblx0XHRpbnB1dDoge1xuXHRcdFx0dmFsdWU6IG51bGwsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCJFbnRlciBhIE51bWJlclwiLFxuXHRcdH0sXG5cdH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBQQVJBTUVURVJfTElTVF9DT01QT05FTlRfVFlQRTtcblxuZXhwb3J0IGNvbnN0IFBhcmFtZXRlckxpc3RDb21wb25lbnQgPSAoXG5cdHByb3BzOiBDb21wb25lbnRQcm9wczxQYXJhbWV0ZXJzTGlzdENvbXBvbmVudFByb3BzPlxuKSA9PiB7XG5cdGNvbnN0IHRyYW5zZm9ybWVkUHJvcHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcblx0XHRjb25zdCB7IHBhcmFtZXRlcnMgfSA9IHByb3BzLnByb3BzIHx8IGluaXRQYXJhbWV0ZXJzO1xuXHRcdHJldHVybiBwYXJhbWV0ZXJzO1xuXHR9LCBbcHJvcHMucHJvcHMucGFyYW1ldGVyc10pO1xuXHRjb25zdCB7IGVtaXQgfSA9IHByb3BzO1xuXHRjb25zdCBjb21wb25lbnRDbGFzc05hbWUgPSBcInBhcmFtZXRlci1saXN0XCI7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHR7Li4uZW1pdCh7XG5cdFx0XHRcdGNsYXNzZXM6IFtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTn1gXSxcblx0XHRcdH0pfVxuXHRcdFx0ZGF0YS1jb21wb25lbnQ9e0NPTVBPTkVOVF9UWVBFfVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1JPV31gfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUn1gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SE1JX0NPTVBPTkVOVF9DTEFTU30gJHtjb21wb25lbnRDbGFzc05hbWV9YH0+XG5cdFx0XHRcdFx0XHR7dHJhbnNmb3JtZWRQcm9wcy5tYXAoKHBhcmFtOiBQYXJhbUl0ZW0sIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgeyBsYWJlbCwgaW5wdXQgfSA9IHBhcmFtO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbFxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgJHtsYWJlbC50ZXh0fS1wYXJhbWV0ZXIke2luZGV4fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWVsZCBzbWFsbFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWwudGV4dH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJldVwiPntpbnB1dC5ldX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17YCR7bGFiZWwudGV4dH0tcGFyYW1ldGVyJHtpbmRleH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dE1vZGU9e2lucHV0LmlucHV0bW9kZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybj17aW5wdXQucGF0dGVybiB8fCBcIlswLTldKlwifVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17aW5wdXQucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXshaW5wdXQuZWRpdGFibGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dC52YWx1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuc3RvcmUucHJvcHMud3JpdGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgcGFyYW1ldGVyc1ske2luZGV4fV0uaW5wdXQudmFsdWVgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5jdXJyZW50VGFyZ2V0LnZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB1cGRhdGVWYWx1ZShwYXJzZUZsb2F0KHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpLnRvRml4ZWQoMikpLCBpbmRleCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50TWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAyNDAsXG5cdFx0XHRoZWlnaHQ6IDI0MCxcblx0XHR9O1xuXHR9XG5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFBhcmFtZXRlcnNMaXN0U3RhdGUge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYXJhbWV0ZXJzOiB0cmVlLnJlYWQoXCJwYXJhbWV0ZXJzXCIsIHBhcmFtZXRlckluaXRpYWxTdGF0ZSksXG5cdFx0fTtcblx0fVxuXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFBhcmFtZXRlckxpc3RDb21wb25lbnQgYXMgUENvbXBvbmVudDtcblx0fVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRJdGVtSWRQb3NpdGlvblR5cGUsXG5cdHR5cGUgUHVtcFByb3BzLFxuXHR0eXBlIFB1bXBTdGF0ZSxcbn0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdFByb3BlcnR5VHJlZSxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiO1xuaW1wb3J0IHR5cGUge1xuXHRDb21wb25lbnRQcm9wcyxcblx0Q29tcG9uZW50TWV0YSxcblx0UENvbXBvbmVudCxcblx0U2l6ZU9iamVjdCxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiOyAvLydAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuaW1wb3J0IHsgUHVtcENvbXBvdW5kIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3B1bXBzL1B1bXBDb21wb3VuZFwiO1xuaW1wb3J0IHsgcHVtcEluaXRpYWxTdGF0dXMgfSBmcm9tIFwiLi4vYXBpL2luaXRpYWxTdGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5wcm9jZXNzX29iamVjdHMuUHVtcFwiO1xuXG4vKipcbiAqIFZhbHZlIGNvbXBvbmVudCBjbGFzcy5cbiAqIEV4dGVuZHMgdGhlIGJhc2UgQ29tcG9uZW50IGNsYXNzIGZyb20gUGVyc3BlY3RpdmUsIHR5cGVkIHdpdGggVmFsdmVQcm9wcy5cbiAqIFByb3ZpZGVzIGEgY3VzdG9taXphYmxlIHZhbHZlIHdpdGggcHJvcGVyIGhhbmRsaW5nIG9mIGRlc2lnbmVyL3ByZXZpZXcgbW9kZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQdW1wIGV4dGVuZHMgQ29tcG9uZW50PENvbXBvbmVudFByb3BzPFB1bXBQcm9wcz4sIGFueT4ge1xuXHR2YWx2ZVJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wczogQ29tcG9uZW50UHJvcHM8UHVtcFByb3BzPikge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnZhbHZlUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuXHR9XG5cblx0Ly8gVGhpcyBpcyBhIGxpZmVjeWNsZSBtZXRob2QgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IG1vdW50ZWQgdG8gdGhlIERPTS5cblx0Y29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG5cdFx0Ly8gTm8gbmVlZCB0byBpbml0aWFsaXplIHZhbHZlUmVmIGhlcmVcblx0fVxuXHRwcm9jZXNzT2JqZWN0OiBQdW1wU3RhdGUgPVxuXHRcdHRoaXMucHJvcHMucHJvcHMucHJvY2Vzc09iamVjdD8uc3RhdHVzIHx8IHB1bXBJbml0aWFsU3RhdHVzO1xuXHRzdGF0dXM6IFB1bXBTdGF0ZSA9IHRoaXMucHJvY2Vzc09iamVjdDtcblx0c2hvd0xhYmVsOiBib29sZWFuID0gdGhpcy5wcm9wcy5wcm9wcy5zaG93TGFiZWwgfHwgZmFsc2U7XG5cdGxhYmVsUG9zaXRpb246IEl0ZW1JZFBvc2l0aW9uVHlwZSA9IHRoaXMucHJvcHMucHJvcHMubGFiZWxQb3NpdGlvbiB8fCBcImxlZnRcIjtcblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIGNvbXBvbmVudCdzIGFjdGlvbiBldmVudC5cblx0ICovXG5cdG9uQWN0aW9uUGVyZm9ybWVkID0gKCkgPT4ge1xuXHRcdC8vIElmIHRoZSBkZXNpZ25lciBpcyBpbiBcImRlc2lnblwiIG1vZGUsIGRvbid0IGRvIGFueXRoaW5nXG5cdFx0aWYgKCF0aGlzLnByb3BzLmV2ZW50c0VuYWJsZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgaXMgZGlzYWJsZWQgaW4gdGhlIGRlc2lnbi1zY29wZVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBjbGlja2VkIVwiKTtcblx0XHR0aGlzLnByb3BzLmNvbXBvbmVudEV2ZW50cy5maXJlQ29tcG9uZW50RXZlbnQoXCJvbkFjdGlvblBlcmZvcm1lZFwiLCB7fSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQvLyA8ZGl2PlRoaXMgaXMgVmFsdmU8L2Rpdj5cblx0XHRcdDxQdW1wQ29tcG91bmQuUm9vdFxuXHRcdFx0XHRjb21wb25lbnRQcm9wcz17dGhpcy5wcm9wc31cblx0XHRcdFx0cHVtcFByb3BzPXt0aGlzLnByb3BzLnByb3BzfVxuXHRcdFx0XHRvbkFjdGlvblBlcmZvcm1lZD17dGhpcy5vbkFjdGlvblBlcmZvcm1lZH1cblx0XHRcdD5cblx0XHRcdFx0PFB1bXBDb21wb3VuZC5wdW1wIC8+XG5cdFx0XHRcdDxQdW1wQ29tcG91bmQucG9wb3ZlciBhbmNob3JFbD17dGhpcy52YWx2ZVJlZi5jdXJyZW50fSAvPlxuXHRcdFx0PC9QdW1wQ29tcG91bmQuUm9vdD5cblx0XHQpO1xuXHR9XG59XG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIFB1bXBNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFB1bXA7XG5cdH1cblxuXHRnZXREZWZhdWx0U2l6ZSgpOiBTaXplT2JqZWN0IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IDM2LFxuXHRcdFx0aGVpZ2h0OiAzNixcblx0XHR9O1xuXHR9XG5cblx0Ly8gSW52b2tlZCB3aGVuIGFuIHVwZGF0ZSB0byB0aGUgUHJvcGVydHlUcmVlIGhhcyBvY2N1cnJlZCxcblx0Ly8gZWZmZWN0aXZlbHkgbWFwcGluZyB0aGUgdmFsdmVTdGF0dXMgb2YgdGhlIHRyZWUgdG8gY29tcG9uZW50IHByb3BzLlxuXHRnZXRQcm9wc1JlZHVjZXIodHJlZTogUHJvcGVydHlUcmVlKTogUHVtcFByb3BzIHtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRwdW1wVHlwZTogdHJlZS5yZWFkU3RyaW5nKFwicHVtcFR5cGVcIiwgXCJjZW50cmlmdWdhbFwiKSxcblx0XHRcdHByb2Nlc3NPYmplY3Q6IHtcblx0XHRcdFx0c3RhdHVzOiB7XG5cdFx0XHRcdFx0YWxhcm06IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hbGFybVwiLCBmYWxzZSksXG5cdFx0XHRcdFx0YWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hY3RGQlwiLCBmYWxzZSksXG5cdFx0XHRcdFx0ZGVBY3RGQjogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmRlQWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGNvbmZpZ3VyYXRpb246IHRyZWUucmVhZE51bWJlcihcblx0XHRcdFx0XHRcdFwicHJvY2Vzc09iamVjdC5zdGF0dXMuY29uZmlndXJhdGlvblwiLFxuXHRcdFx0XHRcdFx0N1xuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0aXRlbU5hbWU6IHRyZWUucmVhZFN0cmluZyhcInByb2Nlc3NPYmplY3Quc3RhdHVzLml0ZW1OYW1lXCIsIFwiXCIpLFxuXHRcdFx0XHRcdG1hbnVhbDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLm1hbnVhbFwiLCBmYWxzZSksXG5cdFx0XHRcdFx0bWFza2VkOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubWFza2VkXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRjaGFuZ2luZzogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmNoYW5naW5nXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRsb2NhdGU6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5sb2NhdGVcIiwgZmFsc2UpLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNob3dMYWJlbDogdHJlZS5yZWFkQm9vbGVhbihcInNob3dMYWJlbFwiLCBmYWxzZSksXG5cdFx0XHRsYWJlbFBvc2l0aW9uOiB0cmVlLnJlYWRTdHJpbmcoXCJsYWJlbFBvc2l0aW9uXCIsIFwidG9wLWxlZnRcIiksXG5cdFx0fTtcblx0fVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IFN0YXR1c1Byb3BzIH0gZnJvbSBcIi4uL2FyLXR5cGVzL3N0YXR1c1wiO1xuaW1wb3J0IHR5cGUge1xuXHRDb21wb25lbnRQcm9wcyxcblx0Q29tcG9uZW50TWV0YSxcblx0UENvbXBvbmVudCxcblx0U2l6ZU9iamVjdCxcblx0UHJvcGVydHlUcmVlLFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7IC8vJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG5pbXBvcnQge1xuXHRITUlfQ09NUE9ORU5UX0NMQVNTLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTixcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1csXG5cdElBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUixcblx0U1RBVFVTX0NPTVBPTkVOVF9UWVBFLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9IFNUQVRVU19DT01QT05FTlRfVFlQRTtcblxuZXhwb3J0IGNvbnN0IFN0YXR1c1ZhbHZlTXAgPSAocHJvcHM6IENvbXBvbmVudFByb3BzPFN0YXR1c1Byb3BzPikgPT4ge1xuXHRjb25zdCB7IGVtaXQgfSA9IHByb3BzO1xuXHRjb25zdCB7IHN0YXR1c0l0ZW1zIH0gPSBwcm9wcy5wcm9wcztcblx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gXCJzdGF0dXNcIjtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdHsuLi5lbWl0KHtcblx0XHRcdFx0Y2xhc3NlczogW2Ake0lBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OfWBdLFxuXHRcdFx0fSl9XG5cdFx0XHRkYXRhLWNvbXBvbmVudD17Q09NUE9ORU5UX1RZUEV9XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfUk9XfWB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSfWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtITUlfQ09NUE9ORU5UX0NMQVNTfSAke2NvbXBvbmVudENsYXNzTmFtZX1gfT5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJsaXN0IGJvcmRlcmVkIGRlbnNlXCI+XG5cdFx0XHRcdFx0XHRcdHtzdGF0dXNJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4LXNtYWxsXCI+e2l0ZW0ubGFiZWx9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2BjaGVja2JveC0ke2luZGV4fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2l0ZW0uc3RhdHVzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWFkT25seT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIFN0YXR1c1ZhbHZlTXBNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFN0YXR1c1ZhbHZlTXAgYXMgdW5rbm93biBhcyBQQ29tcG9uZW50O1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAyNDAsXG5cdFx0XHRoZWlnaHQ6IDI0LFxuXHRcdH07XG5cdH1cblxuXHQvLyBJbnZva2VkIHdoZW4gYW4gdXBkYXRlIHRvIHRoZSBQcm9wZXJ0eVRyZWUgaGFzIG9jY3VycmVkLFxuXHQvLyBlZmZlY3RpdmVseSBtYXBwaW5nIHRoZSB2YWx2ZVN0YXR1cyBvZiB0aGUgdHJlZSB0byBjb21wb25lbnQgcHJvcHMuXG5cdGdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBTdGF0dXNQcm9wcyB7XG5cdFx0Y29uc29sZS5sb2coYHN0YXR1cyAke3RyZWUucmVhZChgc3RhdHVzYCl9YCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzSXRlbXM6IHRyZWUucmVhZChcInN0YXR1c1wiLCBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogYGxhYmVsIHRleHRgLFxuXHRcdFx0XHRcdHN0YXR1czogZmFsc2UsXG5cdFx0XHRcdH0sXG5cdFx0XHRdKSxcblx0XHR9O1xuXHR9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdEl0ZW1JZFBvc2l0aW9uVHlwZSxcblx0UHJvY2Vzc09iamVjdCxcblx0dHlwZSBWYWx2ZVByb3BzLFxuXHR0eXBlIFZhbHZlU3RhdGUsXG59IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRQcm9wZXJ0eVRyZWUsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjsgLy8nQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB7IFZhbHZlTXBDb21wb3VuZCB9IGZyb20gXCIuL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS1tcC9WYWx2ZU1wXCI7XG5pbXBvcnQgeyBwcm9jZXNzT2JqZWN0UHJvcHMgfSBmcm9tIFwiLi4vYXBpL2luaXRpYWxTdGF0ZVwiO1xuLy8gaW1wb3J0IHsgdmFsdmVQcm9wcyB9IGZyb20gXCIuL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS9pbml0aWFsU3RhdGVcIjtcbi8vIGltcG9ydCB7IFZhbHZlRkNDb21wb3VuZCB9IGZyb20gXCIuL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS9WYWx2ZUZDXCI7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5WYWx2ZV9tcFwiO1xuXG4vKipcbiAqIFZhbHZlIGNvbXBvbmVudCBjbGFzcy5cbiAqIEV4dGVuZHMgdGhlIGJhc2UgQ29tcG9uZW50IGNsYXNzIGZyb20gUGVyc3BlY3RpdmUsIHR5cGVkIHdpdGggVmFsdmVQcm9wcy5cbiAqIFByb3ZpZGVzIGEgY3VzdG9taXphYmxlIHZhbHZlIHdpdGggcHJvcGVyIGhhbmRsaW5nIG9mIGRlc2lnbmVyL3ByZXZpZXcgbW9kZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWx2ZSBleHRlbmRzIENvbXBvbmVudDxDb21wb25lbnRQcm9wczxWYWx2ZVByb3BzPiwgYW55PiB7XG5cdHZhbHZlUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzOiBDb21wb25lbnRQcm9wczxWYWx2ZVByb3BzPikge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnZhbHZlUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuXHR9XG5cblx0Ly8gVGhpcyBpcyBhIGxpZmVjeWNsZSBtZXRob2QgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IG1vdW50ZWQgdG8gdGhlIERPTS5cblx0Y29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG5cdFx0Ly8gTm8gbmVlZCB0byBpbml0aWFsaXplIHZhbHZlUmVmIGhlcmVcblx0fVxuXHRwcm9jZXNzT2JqZWN0OiBQcm9jZXNzT2JqZWN0ID1cblx0XHR0aGlzLnByb3BzLnByb3BzLnByb2Nlc3NPYmplY3QgfHwgcHJvY2Vzc09iamVjdFByb3BzO1xuXHRzdGF0dXM6IFZhbHZlU3RhdGUgPSB0aGlzLnByb2Nlc3NPYmplY3Quc3RhdHVzO1xuXHRzaG93TGFiZWw6IGJvb2xlYW4gPSB0aGlzLnByb3BzLnByb3BzLnNob3dMYWJlbCB8fCBmYWxzZTtcblx0bGFiZWxQb3NpdGlvbjogSXRlbUlkUG9zaXRpb25UeXBlID0gdGhpcy5wcm9wcy5wcm9wcy5sYWJlbFBvc2l0aW9uIHx8IFwibGVmdFwiO1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVyIGZvciB0aGUgY29tcG9uZW50J3MgYWN0aW9uIGV2ZW50LlxuXHQgKi9cblx0b25BY3Rpb25QZXJmb3JtZWQgPSAoKSA9PiB7XG5cdFx0Ly8gSWYgdGhlIGRlc2lnbmVyIGlzIGluIFwiZGVzaWduXCIgbW9kZSwgZG9uJ3QgZG8gYW55dGhpbmdcblx0XHRpZiAoIXRoaXMucHJvcHMuZXZlbnRzRW5hYmxlZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBpcyBkaXNhYmxlZCBpbiB0aGUgZGVzaWduLXNjb3BlXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGNsaWNrZWQhXCIpO1xuXHRcdHRoaXMucHJvcHMuY29tcG9uZW50RXZlbnRzLmZpcmVDb21wb25lbnRFdmVudChcIm9uQWN0aW9uUGVyZm9ybWVkXCIsIHt9KTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdC8vIDxkaXY+VGhpcyBpcyBWYWx2ZTwvZGl2PlxuXHRcdFx0PFZhbHZlTXBDb21wb3VuZC5Sb290XG5cdFx0XHRcdGNvbXBvbmVudFByb3BzPXt0aGlzLnByb3BzfVxuXHRcdFx0XHR2YWx2ZVByb3BzPXt0aGlzLnByb3BzLnByb3BzfVxuXHRcdFx0XHRvbkFjdGlvblBlcmZvcm1lZD17dGhpcy5vbkFjdGlvblBlcmZvcm1lZH1cblx0XHRcdD5cblx0XHRcdFx0PFZhbHZlTXBDb21wb3VuZC52YWx2ZSAvPlxuXHRcdFx0XHQ8VmFsdmVNcENvbXBvdW5kLnBvcG92ZXIgYW5jaG9yRWw9e3RoaXMudmFsdmVSZWYuY3VycmVudH0gLz5cblx0XHRcdDwvVmFsdmVNcENvbXBvdW5kLlJvb3Q+XG5cdFx0KTtcblx0fVxufVxuLy8gVGhpcyBpcyB0aGUgYWN0dWFsIHRoaW5nIHRoYXQgZ2V0cyByZWdpc3RlcmVkIHdpdGggdGhlIGNvbXBvbmVudCByZWdpc3RyeS5cbmV4cG9ydCBjbGFzcyBWYWx2ZU1ldGEgaW1wbGVtZW50cyBDb21wb25lbnRNZXRhIHtcblx0Z2V0Q29tcG9uZW50VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBDT01QT05FTlRfVFlQRTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyBUaGUgUmVhY3QgY29tcG9uZW50IGNsYXNzLlxuXHQgKi9cblx0Z2V0Vmlld0NvbXBvbmVudCgpOiBQQ29tcG9uZW50IHtcblx0XHRyZXR1cm4gVmFsdmU7XG5cdH1cblxuXHRnZXREZWZhdWx0U2l6ZSgpOiBTaXplT2JqZWN0IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IDIwLFxuXHRcdFx0aGVpZ2h0OiA0MCxcblx0XHR9O1xuXHR9XG5cblx0Ly8gSW52b2tlZCB3aGVuIGFuIHVwZGF0ZSB0byB0aGUgUHJvcGVydHlUcmVlIGhhcyBvY2N1cnJlZCxcblx0Ly8gZWZmZWN0aXZlbHkgbWFwcGluZyB0aGUgdmFsdmVTdGF0dXMgb2YgdGhlIHRyZWUgdG8gY29tcG9uZW50IHByb3BzLlxuXHRnZXRQcm9wc1JlZHVjZXIodHJlZTogUHJvcGVydHlUcmVlKTogVmFsdmVQcm9wcyB7XG5cdFx0Y29uc29sZS5sb2coXG5cdFx0XHRgaXRlbU5hbWU6ICR7dHJlZS5yZWFkU3RyaW5nKFxuXHRcdFx0XHRcInByb2Nlc3NPYmplY3Quc3RhdHVzLml0ZW1OYW1lXCJcblx0XHRcdCl9IHNob3dMYWJlbCAke3RyZWUucmVhZEJvb2xlYW4oXCJzaG93TGFiZWxcIil9YFxuXHRcdCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvY2Vzc09iamVjdDoge1xuXHRcdFx0XHRzdGF0dXM6IHtcblx0XHRcdFx0XHRhbGFybTogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmFsYXJtXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRhY3RGQjogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmFjdEZCXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRkZUFjdEZCOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuZGVBY3RGQlwiLCBmYWxzZSksXG5cdFx0XHRcdFx0YWN0aXZhdGVkQ29uZmlnOiB0cmVlLnJlYWROdW1iZXIoXG5cdFx0XHRcdFx0XHRcInByb2Nlc3NPYmplY3Quc3RhdHVzLmFjdGl2YXRlZENvbmZpZ1wiLFxuXHRcdFx0XHRcdFx0NTExXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRkZWFjdGl2YXRlZENvbmZpZzogdHJlZS5yZWFkTnVtYmVyKFxuXHRcdFx0XHRcdFx0XCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5kZWFjdGl2YXRlZENvbmZpZ1wiLFxuXHRcdFx0XHRcdFx0NDA5NVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0aXRlbU5hbWU6IHRyZWUucmVhZFN0cmluZyhcInByb2Nlc3NPYmplY3Quc3RhdHVzLml0ZW1OYW1lXCIsIFwiXCIpLFxuXHRcdFx0XHRcdG1hbnVhbDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLm1hbnVhbFwiLCBmYWxzZSksXG5cdFx0XHRcdFx0bWFza2VkOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubWFza2VkXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRjaGFuZ2luZzogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmNoYW5naW5nXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRsb2NhdGU6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5sb2NhdGVcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdHVzbDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLnVzbFwiLCBmYWxzZSksXG5cdFx0XHRcdFx0bHNsOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubHNsXCIsIGZhbHNlKSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzaG93TGFiZWw6IHRyZWUucmVhZEJvb2xlYW4oXCJzaG93TGFiZWxcIiwgZmFsc2UpLFxuXHRcdFx0bGFiZWxQb3NpdGlvbjogdHJlZS5yZWFkU3RyaW5nKFwibGFiZWxQb3NpdGlvblwiLCBcInRvcC1sZWZ0XCIpLFxuXHRcdH07XG5cdH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuXHR0eXBlIEVsZW1lbnRSZWYsXG59IGZyb20gXCIuLi8uLi8uLi9hcGkvdHlwZXNcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY3JlYXRlQ29udGV4dFwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uL3ZhbHZlL2l0ZW1cIjtcbmltcG9ydCB7XG5cdGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lLFxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXRIeEl0ZW1DbGFzc05hbWUsIGdldEh4TW9kZUNsYXNzTmFtZXMsIGh4SXRlbU5hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2FyLXV0aWxzL3Byb2Nlc3NPYmplY3RzL2hlYXRFeGNoYW5nZXJzL2h4LXV0aWxzXCI7XG5pbXBvcnQgeyBIWF9DT01QT05FTlRfVFlQRSwgSHhNb2RlcywgdHlwZSBIeENvbXBvdW5kQ29udGV4dFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vYXItdHlwZXMvcHJvY2Vzc09iamVjdHMvaGVhdEV4Y2hhbmdlcnMvaHgtdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gSFhfQ09NUE9ORU5UX1RZUEU7XG5cbmV4cG9ydCBjb25zdCBbSHhDb250ZXh0UHJvdmlkZXIsIHVzZUh4Q29udGV4dF0gPVxuXHR1c2VDcmVhdGVDb250ZXh0PEh4Q29tcG91bmRDb250ZXh0VHlwZT4oXCJQdW1wQ29tcG91bmRcIik7XG5cbmNvbnN0IFJvb3QgPSAoe1xuXHRjb21wb25lbnRQcm9wcyxcblx0aXRlbVByb3BzLFxuXHRvbkFjdGlvblBlcmZvcm1lZCxcblx0Y2hpbGRyZW4sXG59OiBIeENvbXBvdW5kQ29udGV4dFR5cGUpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8SHhDb250ZXh0UHJvdmlkZXJcblx0XHRcdHsuLi57XG5cdFx0XHRcdGl0ZW1Qcm9wcyxcblx0XHRcdFx0Y29tcG9uZW50UHJvcHMsXG5cdFx0XHRcdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9IeENvbnRleHRQcm92aWRlcj5cblx0KTtcbn07XG5jb25zdCBwbGF0ZSA9ICgpID0+IHtcblx0Y29uc3QgeyBpdGVtUHJvcHMsIG9uQWN0aW9uUGVyZm9ybWVkLCBjb21wb25lbnRQcm9wcyB9ID1cblx0XHR1c2VIeENvbnRleHQoXCJQbGF0ZVwiKTtcblx0Y29uc3QgZWxSZWY6IEVsZW1lbnRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCB7IGVtaXQgfSA9IGNvbXBvbmVudFByb3BzO1xuXHRjb25zdCB7IHR5cGUsbG9jYXRlLCBtb2RlIH0gPSBpdGVtUHJvcHM7XG5cblxuXHQvLyBpZiBub3QgbG9jYXRlLCB0cmltIGxhc3QgaXRlbSBmcm9tIHZhbHZlTXBJdGVtTmFtZXNcblx0bGV0IGNvbXBvbmVudEl0ZW1OYW1lcyA9IGh4SXRlbU5hbWVzO1xuXHRpZiAoIWxvY2F0ZSkge1xuXHRcdGNvbXBvbmVudEl0ZW1OYW1lcyA9IGNvbXBvbmVudEl0ZW1OYW1lcy5zbGljZSgwLCAtMSk7XG5cdH1cblx0Y29uc3QgaXNDb29yZENoaWxkOmJvb2xlYW4gPSBjb21wb25lbnRQcm9wcy5zdG9yZS5pc0Nvb3JkQ29udGFpbmVyQ2hpbGQ7XG5cdGNvbnNvbGUubG9nKGBpc0Nvb3JkQ2hpbGQgJHtpc0Nvb3JkQ2hpbGR9YCk7XG5cblx0Y29uc3QgZmxleFJvd1dyYXBwZXIgPSAhaXNDb29yZENoaWxkID8gXCJobWktY29tcG9uZW50X19yb3dcIiA6IFwiZGlzcGxheS1ub25lXCI7XG5cdGNvbnN0IGZsZXhDb2xXcmFwcGVyID0gIWlzQ29vcmRDaGlsZCA/IFwiaG1pLWNvbXBvbmVudF9fY29sdW1uXCIgOiBcImRpc3BsYXktbm9uZVwiO1xuXHRjb25zdCBjb21wb25lbnRDbGFzc05hbWUgPSBcImhtaS1jb21wb25lbnQgaG1pLWNvbXBvbmVudC1wbGF0ZS1oeFwiO1xuXHRjb25zdCBlbWl0Q2xhc3NOYW1lcyA9ICFpc0Nvb3JkQ2hpbGQgPyBgaG1pLWNvbXBvbmVudCAke2ZsZXhDb2xXcmFwcGVyfSBgIDogXCJobWktY29tcG9uZW50IGhtaS1jb21wb25lbnQtcGxhdGUtaHhcIjtcblx0cmV0dXJuIChcblxuXHRcdDxkaXZcblx0XHRcdFx0cmVmPXtlbFJlZn1cblx0XHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRcdGNsYXNzZXM6IFtgJHtlbWl0Q2xhc3NOYW1lc31gXSxcblx0XHRcdFx0fSl9XG5cdFx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHRcdFx0b25DbGljaz17b25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtmbGV4Um93V3JhcHBlcn1gfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake2NvbXBvbmVudENsYXNzTmFtZX1gfT5cblx0XHRcdDxJdGVtIGl0ZW1DbGFzc05hbWU9e2Ake2dldEh4TW9kZUNsYXNzTmFtZXMoXCJiYXNlLTEgc2hvd1wiLCBIeE1vZGVzLmhlYXRpbmcgKX1gfS8+XG5cdFx0XHR7LyogPEl0ZW0gaXRlbUNsYXNzTmFtZT17YCR7Z2V0UHVtcFN0YXR1c0NsYXNzTmFtZXMoXCJiYXNlLTIgc2hvdyBpdGVtXCIsc3RhdHVzKX1gfS8+ICovfVxuXHRcdFx0ey8qIDxJdGVtIGl0ZW1DbGFzc05hbWU9e2Ake2dldFB1bXBTdGF0dXNDbGFzc05hbWVzKFwiYmFzZS0zIHNob3cgaXRlbVwiLHN0YXR1cyl9YH0vPiAqL31cblx0XHRcdDxJdGVtIGl0ZW1DbGFzc05hbWU9e1wiYmFzZS0yIHNob3cgaXRlbVwifS8+XG5cdFx0XHQ8SXRlbSBpdGVtQ2xhc3NOYW1lPXtcImJhc2UtMyBzaG93IGl0ZW1cIn0vPlxuXG5cdFx0XHRcdHtjb21wb25lbnRJdGVtTmFtZXMubWFwKCh7IG5hbWUsIGluZGV4LCBrZXkgfSkgPT4gKFxuXHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0aXRlbUNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRuYW1lICtcblx0XHRcdFx0XHRcdFwiIFwiICtcblx0XHRcdFx0XHRcdGdldEh4SXRlbUNsYXNzTmFtZShcblx0XHRcdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0XHRcdHR5cGUgfHwgXCJwbGF0ZVwiLFxuXHRcdFx0XHRcdFx0XHRtb2RlIHx8IEh4TW9kZXMuaGVhdGluZyxcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEl0ZW0gaXRlbUNsYXNzTmFtZT17YGxvY2F0ZSAke2xvY2F0ZSA/IFwic2hvdyBpdGVtXCIgOiBcImhpZGUgaXRlbVwifWB9Lz5cblx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IHBvcG92ZXIgPSAoeyBhbmNob3JFbCB9OiB7IGFuY2hvckVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgfSkgPT4ge1xuXHRjb25zdCB7IGl0ZW1Qcm9wcywgY29tcG9uZW50UHJvcHMgfSA9IHVzZUh4Q29udGV4dChcIlBvcG92ZXJcIik7XG5cdGNvbnN0IHsgc2hvd0xhYmVsLCBsYWJlbFBvc2l0aW9uLCBpdGVtTmFtZX0gPSBpdGVtUHJvcHM7XG5cblx0aWYgKCFzaG93TGFiZWwpIHJldHVybiBudWxsO1xuXHRjb25zdCB7IHBvc2l0aW9uIH0gPSBjb21wb25lbnRQcm9wcztcblx0bGV0IGNsYXNzTmFtZSA9IFwiaXRlbUlkIHBvcG92ZXIgcG9zaXRpb24tbGVmdFwiO1xuXHRpZiAobGFiZWxQb3NpdGlvbikge1xuXHRcdGNsYXNzTmFtZSA9IGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lKGNsYXNzTmFtZSwgbGFiZWxQb3NpdGlvbik7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdHRvcDogcG9zaXRpb24ueSxcblx0XHRcdFx0bGVmdDogcG9zaXRpb24ueCxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PntpdGVtTmFtZX08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBIZWF0RXhjaGFuZ2VyQ29tcG91bmQgPSB7XG5cdFJvb3QsXG5cdHBsYXRlLFxuXHRwb3BvdmVyLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuXHR0eXBlIEVsZW1lbnRSZWYsXG5cdHR5cGUgUHVtcENvbXBvdW5kQ29udGV4dFR5cGUsXG5cdHR5cGUgUHVtcENvbXBvdW5kUm9vdFByb3BzLFxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NyZWF0ZUNvbnRleHRcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi92YWx2ZS9pdGVtXCI7XG5pbXBvcnQge1xuXHRnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZSxcblx0Z2V0UHVtcEl0ZW1DbGFzc05hbWUsXG5cdGdldFB1bXBTdGF0dXNDbGFzc05hbWVzLFxuXHRwdW1wSXRlbU5hbWVzLFxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL3V0aWxzXCI7XG5pbXBvcnQgeyBwdW1wSW5pdGlhbFByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9pbml0aWFsU3RhdGVcIjtcbmltcG9ydCB7XG5cdEhNSV9DT01QT05FTlRfQ0xBU1MsXG5cdElBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1JPVyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSLFxuXHRQVU1QX0NPTVBPTkVOVF9UWVBFLFxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9IFBVTVBfQ09NUE9ORU5UX1RZUEU7XG5cbmV4cG9ydCBjb25zdCBbUHVtcENvbnRleHRQcm92aWRlciwgdXNlUHVtcENvbnRleHRdID1cblx0dXNlQ3JlYXRlQ29udGV4dDxQdW1wQ29tcG91bmRDb250ZXh0VHlwZT4oXCJQdW1wQ29tcG91bmRcIik7XG5cbmNvbnN0IFJvb3QgPSAoe1xuXHRjb21wb25lbnRQcm9wcyxcblx0cHVtcFByb3BzLFxuXHRvbkFjdGlvblBlcmZvcm1lZCxcblx0Y2hpbGRyZW4sXG59OiBQdW1wQ29tcG91bmRSb290UHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8UHVtcENvbnRleHRQcm92aWRlclxuXHRcdFx0ey4uLntcblx0XHRcdFx0cHVtcFByb3BzLFxuXHRcdFx0XHRjb21wb25lbnRQcm9wcyxcblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L1B1bXBDb250ZXh0UHJvdmlkZXI+XG5cdCk7XG59O1xuY29uc3QgcHVtcCA9ICgpID0+IHtcblx0Y29uc3QgeyBwdW1wUHJvcHMsIG9uQWN0aW9uUGVyZm9ybWVkLCBjb21wb25lbnRQcm9wcyB9ID1cblx0XHR1c2VQdW1wQ29udGV4dChcIlZhbHZlXCIpO1xuXHRjb25zdCBlbFJlZjogRWxlbWVudFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cdGNvbnN0IHsgZW1pdCB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGNvbnN0IHsgcHJvY2Vzc09iamVjdCwgcHVtcFR5cGUgfSA9IHB1bXBQcm9wcztcblx0Y29uc3QgeyBzdGF0dXMgfSA9IHByb2Nlc3NPYmplY3QgfHwgcHVtcEluaXRpYWxQcm9wcztcblxuXHQvLyBpZiBub3QgbG9jYXRlLCB0cmltIGxhc3QgaXRlbSBmcm9tIHZhbHZlTXBJdGVtTmFtZXNcblx0Y29uc3QgY29tcG9uZW50SXRlbU5hbWVzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG5cdFx0aWYgKCFzdGF0dXM/LmxvY2F0ZSkge1xuXHRcdFx0cmV0dXJuIHB1bXBJdGVtTmFtZXMuc2xpY2UoMCwgLTEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcHVtcEl0ZW1OYW1lcztcblx0fSwgW3N0YXR1cz8ubG9jYXRlXSk7XG5cblx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gXCJwdW1wXCI7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRyZWY9e2VsUmVmfVxuXHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRjbGFzc2VzOiBbYCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU59YF0sXG5cdFx0XHR9KX1cblx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHRcdG9uQ2xpY2s9e29uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1JPV31gfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUn1gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SE1JX0NPTVBPTkVOVF9DTEFTU30gJHtjb21wb25lbnRDbGFzc05hbWV9YH0+XG5cdFx0XHRcdFx0XHQ8SXRlbVxuXHRcdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXtgJHtnZXRQdW1wU3RhdHVzQ2xhc3NOYW1lcyhcblx0XHRcdFx0XHRcdFx0XHRcImJhc2UtMSBzaG93XCIsXG5cdFx0XHRcdFx0XHRcdFx0c3RhdHVzXG5cdFx0XHRcdFx0XHRcdCl9YH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7LyogPEl0ZW0gaXRlbUNsYXNzTmFtZT17YCR7Z2V0UHVtcFN0YXR1c0NsYXNzTmFtZXMoXCJiYXNlLTIgc2hvdyBpdGVtXCIsc3RhdHVzKX1gfS8+ICovfVxuXHRcdFx0XHRcdFx0ey8qIDxJdGVtIGl0ZW1DbGFzc05hbWU9e2Ake2dldFB1bXBTdGF0dXNDbGFzc05hbWVzKFwiYmFzZS0zIHNob3cgaXRlbVwiLHN0YXR1cyl9YH0vPiAqL31cblx0XHRcdFx0XHRcdDxJdGVtIGl0ZW1DbGFzc05hbWU9e1wiYmFzZS0yIHNob3cgaXRlbVwifSAvPlxuXHRcdFx0XHRcdFx0PEl0ZW0gaXRlbUNsYXNzTmFtZT17XCJiYXNlLTMgc2hvdyBpdGVtXCJ9IC8+XG5cblx0XHRcdFx0XHRcdHtjb21wb25lbnRJdGVtTmFtZXMubWFwKCh7IG5hbWUsIGluZGV4LCBrZXkgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8SXRlbVxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1DbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcIiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRnZXRQdW1wSXRlbUNsYXNzTmFtZShpbmRleCwgcHVtcFR5cGUgfHwgXCJjZW50cmlmdWdhbFwiLCBzdGF0dXMpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEl0ZW1cblx0XHRcdFx0XHRcdGl0ZW1DbGFzc05hbWU9e2Bsb2NhdGUgJHtcblx0XHRcdFx0XHRcdFx0c3RhdHVzLmxvY2F0ZSA/IFwic2hvdyBpdGVtXCIgOiBcImhpZGUgaXRlbVwiXG5cdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgcG9wb3ZlciA9ICh7IGFuY2hvckVsIH06IHsgYW5jaG9yRWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCB9KSA9PiB7XG5cdGNvbnN0IHsgcHVtcFByb3BzLCBjb21wb25lbnRQcm9wcyB9ID0gdXNlUHVtcENvbnRleHQoXCJQb3BvdmVyXCIpO1xuXHRjb25zdCB7IHNob3dMYWJlbCwgbGFiZWxQb3NpdGlvbiwgcHJvY2Vzc09iamVjdCB9ID0gcHVtcFByb3BzO1xuXHRjb25zdCB7IHN0YXR1cyB9ID0gcHJvY2Vzc09iamVjdCB8fCB7fTtcblx0aWYgKCFzaG93TGFiZWwpIHJldHVybiBudWxsO1xuXHRjb25zdCB7IHBvc2l0aW9uIH0gPSBjb21wb25lbnRQcm9wcztcblx0bGV0IGNsYXNzTmFtZSA9IFwiaXRlbUlkIHBvcG92ZXIgcG9zaXRpb24tbGVmdFwiO1xuXHRpZiAobGFiZWxQb3NpdGlvbikge1xuXHRcdGNsYXNzTmFtZSA9IGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lKGNsYXNzTmFtZSwgbGFiZWxQb3NpdGlvbik7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdHRvcDogcG9zaXRpb24ueSxcblx0XHRcdFx0bGVmdDogcG9zaXRpb24ueCxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PntzdGF0dXM/Lml0ZW1OYW1lfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IFB1bXBDb21wb3VuZCA9IHtcblx0Um9vdCxcblx0cHVtcCxcblx0cG9wb3Zlcixcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHtcblx0VmFsdmVDb21wb3VuZENvbnRleHRUeXBlLFxuXHRWYWx2ZUNvbXBvdW5kUm9vdFByb3BzLFxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VWYWx2ZVJlZHVjZXIgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2hvb2tzXCI7XG5pbXBvcnQge1xuXHRnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZSxcblx0Z2V0VmFsdmVNcEl0ZW1DbGFzc05hbWUsXG5cdHZhbHZlTXBJdGVtTmFtZXMsXG59IGZyb20gXCIuLi8uLi8uLi9hcGkvdXRpbHNcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi92YWx2ZS9pdGVtXCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NyZWF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHByb2Nlc3NPYmplY3RQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9hcGkvaW5pdGlhbFN0YXRlXCI7XG5pbXBvcnQge1xuXHRITUlfQ09NUE9ORU5UX0NMQVNTLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTixcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1csXG5cdElBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUixcblx0VkFMVkVfQ09NUE9ORU5UX1RZUEUsXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuLy8gaW1wb3J0ICcuL3ZhbHZlLW1wLm1vZHVsZS5jc3MnXG4vLyBpbXBvcnQge3ZhbHZlU3RhdHVzfSBmcm9tICcuLi8uLi9hcGkvaW5pdGlhbFN0YXRlJ1xuY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBWQUxWRV9DT01QT05FTlRfVFlQRTtcblxuLy8gaW1wb3J0IHt2YWx2ZVN0YXR1c30gZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmV4cG9ydCBjb25zdCBbVmFsdmVDb250ZXh0UHJvdmlkZXIsIHVzZVZhbHZlQ29udGV4dF0gPVxuXHR1c2VDcmVhdGVDb250ZXh0PFZhbHZlQ29tcG91bmRDb250ZXh0VHlwZT4oXCJWYWx2ZU1wQ29tcG91bmRcIik7XG5cbmNvbnN0IFJvb3QgPSAoe1xuXHRjb21wb25lbnRQcm9wcyxcblx0dmFsdmVQcm9wcyxcblx0b25BY3Rpb25QZXJmb3JtZWQsXG5cdGNoaWxkcmVuLFxufTogVmFsdmVDb21wb3VuZFJvb3RQcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxWYWx2ZUNvbnRleHRQcm92aWRlclxuXHRcdFx0ey4uLntcblx0XHRcdFx0dmFsdmVQcm9wcyxcblx0XHRcdFx0Y29tcG9uZW50UHJvcHMsXG5cdFx0XHRcdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRcdFx0XHR1c2VWYWx2ZVJlZHVjZXIsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L1ZhbHZlQ29udGV4dFByb3ZpZGVyPlxuXHQpO1xufTtcbmNvbnN0IHZhbHZlID0gKCkgPT4ge1xuXHRjb25zdCB7IHZhbHZlUHJvcHMsIG9uQWN0aW9uUGVyZm9ybWVkLCBjb21wb25lbnRQcm9wcyB9ID1cblx0XHR1c2VWYWx2ZUNvbnRleHQoXCJWYWx2ZVwiKTtcblx0Y29uc3QgdmFsdmVSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCB7IGVtaXQgfSA9IGNvbXBvbmVudFByb3BzO1xuXHRjb25zdCB7IHByb2Nlc3NPYmplY3QgfSA9IHZhbHZlUHJvcHM7XG5cdGNvbnN0IHsgc3RhdHVzIH0gPSBwcm9jZXNzT2JqZWN0IHx8IHByb2Nlc3NPYmplY3RQcm9wcztcblx0Ly8gY29uc3QgaW5Db29yZCA9IHBvc2l0aW9uPy54ID8/IGZhbHNlO1xuXHQvLyBpZiBub3QgbG9jYXRlLCB0cmltIGxhc3QgaXRlbSBmcm9tIHZhbHZlTXBJdGVtTmFtZXNcblx0bGV0IGNvbXBvbmVudEl0ZW1OYW1lcyA9IHZhbHZlTXBJdGVtTmFtZXM7XG5cdGlmICghc3RhdHVzPy5sb2NhdGUpIHtcblx0XHRjb21wb25lbnRJdGVtTmFtZXMgPSBjb21wb25lbnRJdGVtTmFtZXMuc2xpY2UoMCwgLTEpO1xuXHR9XG5cdGNvbnN0IGNvbXBvbmVudENsYXNzTmFtZSA9IFwidmFsdmVfX21wXCI7XG5cdC8vIGlmICghaW5Db29yZCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHJlZj17dmFsdmVSZWZ9XG5cdFx0XHRcdHsuLi5lbWl0KHtcblx0XHRcdFx0XHRjbGFzc2VzOiBbYCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU59YF0sXG5cdFx0XHRcdH0pfVxuXHRcdFx0XHRkYXRhLWNvbXBvbmVudD17Q09NUE9ORU5UX1RZUEV9XG5cdFx0XHRcdG9uQ2xpY2s9e29uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1d9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUn1gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtITUlfQ09NUE9ORU5UX0NMQVNTfSAke2NvbXBvbmVudENsYXNzTmFtZX1gfT5cblx0XHRcdFx0XHRcdFx0e2NvbXBvbmVudEl0ZW1OYW1lcy5tYXAoKHsgdmFsdWUsIGluZGV4LCBrZXkgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKFxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0YHJlLXJlbmRlcmVkICxrZXkgJHtrZXl9IHZhbHVlICR7dmFsdWV9IGluZGV4ICR7aW5kZXh9YFxuXHRcdFx0XHRcdFx0XHRcdC8vICksXG5cdFx0XHRcdFx0XHRcdFx0PEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW1DbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSArIFwiIFwiICsgZ2V0VmFsdmVNcEl0ZW1DbGFzc05hbWUoaW5kZXgsIHN0YXR1cylcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRyZXR1cm4gKFxuLy8gXHRcdFx0PGRpdlxuLy8gXHRcdFx0XHRyZWY9e3ZhbHZlUmVmfVxuLy8gXHRcdFx0XHR7Li4uZW1pdCh7XG4vLyBcdFx0XHRcdFx0Y2xhc3NlczogW2BobWktY29tcG9uZW50IHZhbHZlX19tcCBgXSxcbi8vIFx0XHRcdFx0fSl9XG4vLyBcdFx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cbi8vIFx0XHRcdFx0b25DbGljaz17b25BY3Rpb25QZXJmb3JtZWR9XG4vLyBcdFx0XHQ+XG4vLyBcdFx0XHRcdHtjb21wb25lbnRJdGVtTmFtZXMubWFwKCh7IHZhbHVlLCBpbmRleCwga2V5IH0pID0+IChcbi8vIFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcbi8vIFx0XHRcdFx0XHQvLyBcdGByZS1yZW5kZXJlZCAsa2V5ICR7a2V5fSB2YWx1ZSAke3ZhbHVlfSBpbmRleCAke2luZGV4fWBcbi8vIFx0XHRcdFx0XHQvLyApLFxuLy8gXHRcdFx0XHRcdDxJdGVtXG4vLyBcdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXt2YWx1ZSArIFwiIFwiICsgZ2V0VmFsdmVNcEl0ZW1DbGFzc05hbWUoaW5kZXgsIHN0YXR1cyl9XG4vLyBcdFx0XHRcdFx0XHRrZXk9e2tleX1cbi8vIFx0XHRcdFx0XHQvPlxuLy8gXHRcdFx0XHQpKX1cbi8vIFx0XHRcdDwvZGl2PlxuLy8gXHRcdCk7XG4vLyBcdH1cbiB9O1xuXG5jb25zdCBwb3BvdmVyID0gKHsgYW5jaG9yRWwgfTogeyBhbmNob3JFbDogSFRNTERpdkVsZW1lbnQgfCBudWxsIH0pID0+IHtcblx0Y29uc3QgeyB2YWx2ZVByb3BzLCBjb21wb25lbnRQcm9wcyB9ID0gdXNlVmFsdmVDb250ZXh0KFwiUG9wb3ZlclwiKTtcblx0Y29uc3QgeyBzaG93TGFiZWwsIGxhYmVsUG9zaXRpb24sIHByb2Nlc3NPYmplY3QgfSA9IHZhbHZlUHJvcHM7XG5cdGNvbnN0IHsgc3RhdHVzIH0gPSBwcm9jZXNzT2JqZWN0IHx8IHByb2Nlc3NPYmplY3RQcm9wcztcblx0aWYgKCFzaG93TGFiZWwpIHJldHVybiBudWxsO1xuXHRjb25zdCB7IHBvc2l0aW9uIH0gPSBjb21wb25lbnRQcm9wcztcblx0bGV0IGNsYXNzTmFtZSA9IFwiaXRlbUlkIHBvcG92ZXIgcG9zaXRpb24tbGVmdFwiO1xuXHRpZiAobGFiZWxQb3NpdGlvbikge1xuXHRcdGNsYXNzTmFtZSA9IGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lKGNsYXNzTmFtZSwgbGFiZWxQb3NpdGlvbik7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdHRvcDogcG9zaXRpb24ueSxcblx0XHRcdFx0bGVmdDogcG9zaXRpb24ueCxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PntzdGF0dXM/Lml0ZW1OYW1lfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IFZhbHZlTXBDb21wb3VuZCA9IHtcblx0Um9vdCxcblx0dmFsdmUsXG5cdHBvcG92ZXIsXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCBcIi4vaXRlbS5tb2R1bGUuY3NzXCI7XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuXHRpdGVtQ2xhc3NOYW1lOiBzdHJpbmc7XG5cdGhhbmRsZUNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn1cbi8vIGNvbnN0IGJpdCA9IChuOiBudW1iZXIsIGk6IG51bWJlcik6IG51bWJlciA9PiB7XG4vLyBcdHJldHVybiAobiA+PiBpKSAmIDE7XG4vLyB9O1xuY29uc3QgSXRlbTogUmVhY3QuRkM8SXRlbVByb3BzPiA9ICh7IGl0ZW1DbGFzc05hbWUsIGhhbmRsZUNsaWNrIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2l0ZW1DbGFzc05hbWV9XG5cdG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48L2Rpdj47XG59O1xuSXRlbS5kaXNwbGF5TmFtZSA9IFwiSXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiIsIiAvKipcbiAgKiBITUkgQ29tcG9uZW50IE1vZHVsZSBDb25zdGFudHNcbiAgKi9cblx0ZXhwb3J0IGNvbnN0IElBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OID0gXCJpYV9zeW1ib2xDb21wb25lbnQgaWFfc3ltYm9sQ29tcG9uZW50X19jb2x1bW5cIjtcblx0ZXhwb3J0IGNvbnN0IElBX1NZTUJPTF9DT01QT05FTlRfUk9XID0gXCJpYV9zeW1ib2xDb21wb25lbnRfX3Jvd1wiO1xuXHRleHBvcnQgY29uc3QgSUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSID0gXCJpYV9zeW1ib2xDb21wb25lbnRfX3dyYXBwZXJcIjtcblx0ZXhwb3J0IGNvbnN0IEhNSV9DT01QT05FTlRfQ0xBU1MgPSBcImhtaS1jb21wb25lbnRcIlxuXG5cdGV4cG9ydCBjb25zdCBWQUxWRV9DT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5WYWx2ZVwiO1xuXHRleHBvcnQgY29uc3QgUFVNUF9DT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5QdW1wXCI7XG5cdGV4cG9ydCBjb25zdCBTVEFUVVNfQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5kaXNwbGF5LlN0YXR1c1ZhbHZlTXBcIjtcblx0ZXhwb3J0IGNvbnN0IFBBUkFNRVRFUl9MSVNUX0NPTVBPTkVOVF9UWVBFID0gXCJobWkuaW5wdXQuUGFyYW1ldGVyTGlzdFwiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb250ZXh0PENvbnRleHRWYWx1ZVR5cGUgZXh0ZW5kcyBvYmplY3QgfCBudWxsPihcbiAgcm9vdENvbXBvbmVudE5hbWU6IHN0cmluZyxcbiAgZGVmYXVsdENvbnRleHQ/OiBDb250ZXh0VmFsdWVUeXBlXG4pIHtcbiAgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q29udGV4dFZhbHVlVHlwZSB8IHVuZGVmaW5lZD4oXG4gICAgZGVmYXVsdENvbnRleHRcbiAgKTtcblxuICBjb25zdCBQcm92aWRlcjogUmVhY3QuRkM8Q29udGV4dFZhbHVlVHlwZSAmIHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9IChcbiAgICBwcm9wc1xuICApID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5jb250ZXh0IH0gPSBwcm9wcztcbiAgICAvLyBPbmx5IHJlLW1lbW9pemUgd2hlbiBwcm9wIHZhbHVlcyBjaGFuZ2VcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgY29uc3QgdmFsdWUgPSBSZWFjdC51c2VNZW1vKFxuICAgICAgKCkgPT4gY29udGV4dCxcbiAgICAgIE9iamVjdC52YWx1ZXMoY29udGV4dClcbiAgICApIGFzIENvbnRleHRWYWx1ZVR5cGU7XG4gICAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XG4gIH07XG5cbiAgUHJvdmlkZXIuZGlzcGxheU5hbWUgPSByb290Q29tcG9uZW50TmFtZSArIFwiUHJvdmlkZXJcIjtcblxuICBmdW5jdGlvbiB1c2VDb250ZXh0KGNvbnN1bWVyTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgaWYgKGNvbnRleHQpIHJldHVybiBjb250ZXh0O1xuICAgIGlmIChkZWZhdWx0Q29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZGVmYXVsdENvbnRleHQ7XG4gICAgLy8gaWYgYSBkZWZhdWx0Q29udGV4dCB3YXNuJ3Qgc3BlY2lmaWVkLCBpdCdzIGEgcmVxdWlyZWQgY29udGV4dC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgXFxgJHtjb25zdW1lck5hbWV9XFxgIG11c3QgYmUgdXNlZCB3aXRoaW4gXFxgJHtyb290Q29tcG9uZW50TmFtZX1cXGBgXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBbUHJvdmlkZXIsIHVzZUNvbnRleHRdIGFzIGNvbnN0O1xufVxuIiwiLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgbnVtYmVyc1xuICovXG5cbi8qKlxuICogVXNpbmcgdGhlIGJpbmFyeSByZXByZXNlbnRhdGlvbiBvZiBuLCBhbiBJbnRlZ2VyLCByZXR1cm5zIHRoZSBib29sZWFuXG4gKiB2YWx1ZSBhdCBpbmRleCwgaS5cbiAqIEBwYXJhbSBuIGEgbnVtYmVyIGlzIGltcGxpY2l0eSBjb252ZXJ0ZXIgdG8gYSAzMmJpdCBpbnRlZ2VyLCBieSB0aGUgYml0d2lzZSBvcGVyYXRvcnNcbiAqIEBwYXJhbSBpIGlzIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgYml0IHBvc2l0aW9uIHRvIGJlIHRlc3RlZFxuICogQHJldHVybnMgdGhlIGJvb2xlYW4gdmFsdWUgb2YgdGhlIGJpdCBhdCBpbmRleCBpLlxuICovXG5leHBvcnQgY29uc3QgZ2V0Qm9vbEF0SW5kZXggPSAobjogbnVtYmVyLCBpOiBudW1iZXIpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIEJvb2xlYW4oKG4gPj4gaSkgJiAxKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2luZHVjdGl2ZWF1dG9tYXRpb25fcGVyc3BlY3RpdmVfY2xpZW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENvbXBvbmVudE1ldGEsIENvbXBvbmVudFJlZ2lzdHJ5IH0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50Jztcbi8vaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25NZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL0J1dHRvbic7XG4vL2ltcG9ydCB7IFZhbHZlLCBWYWx2ZU1ldGEgfSBmcm9tIFwiLi9jb21wb25lbnRzL1ZhbHZlXCI7XG5pbXBvcnQgeyBWYWx2ZSwgVmFsdmVNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL1ZhbHZlJztcbmltcG9ydCB7IFB1bXAsIFB1bXBNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL1B1bXAnO1xuaW1wb3J0IHsgSGVhdEV4Y2hhbmdlciwgSGVhdEV4Y2hhbmdlck1ldGEgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhdEV4Y2hhbmdlcic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50LCBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50TWV0YX0gZnJvbSAnLi9jb21wb25lbnRzL1BhcmFtZXRlckxpc3QnXG5pbXBvcnQgeyBDb21tYW5kVmFsdmVNcCwgQ29tbWFuZFZhbHZlTXBNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL0NvbW1hbmRWYWx2ZU1wJztcbmltcG9ydCB7IFN0YXR1c1ZhbHZlTXAsIFN0YXR1c1ZhbHZlTXBNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL1N0YXR1c1ZhbHZlTXAnO1xuXG4vLyBFeHBvcnQgY29tcG9uZW50cyBmb3IgZXh0ZXJuYWwgcmVmZXJlbmNlXG5leHBvcnQge1xuXHRWYWx2ZSAsXG5cdFB1bXAgLFxuXHRIZWF0RXhjaGFuZ2VyICxcblx0UGFyYW1ldGVyTGlzdENvbXBvbmVudCxcblx0Q29tbWFuZFZhbHZlTXAsXG5cdFN0YXR1c1ZhbHZlTXBcblx0fTtcblxuLy8gSW1wb3J0IGNvbXBvbmVudCBzdHlsZXNcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG4vLyBBcnJheSBvZiBjb21wb25lbnQgbWV0YWRhdGFcbmNvbnN0IGNvbXBvbmVudHM6IEFycmF5PENvbXBvbmVudE1ldGE+ID0gW1xuXHRuZXcgVmFsdmVNZXRhKCksXG5cdG5ldyBQdW1wTWV0YSgpLFxuXHRuZXcgSGVhdEV4Y2hhbmdlck1ldGEoKSxcblx0bmV3IFBhcmFtZXRlckxpc3RDb21wb25lbnRNZXRhKCksXG5cdG5ldyBDb21tYW5kVmFsdmVNcE1ldGEoKSxcblx0bmV3IFN0YXR1c1ZhbHZlTXBNZXRhKCksXG5cbl07XG5cbi8vIFJlZ2lzdGVyIGVhY2ggY29tcG9uZW50IHdpdGggdGhlIFBlcnNwZWN0aXZlIENvbXBvbmVudFJlZ2lzdHJ5XG5jb21wb25lbnRzLmZvckVhY2goKGM6IENvbXBvbmVudE1ldGEpID0+IENvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyKGMpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==