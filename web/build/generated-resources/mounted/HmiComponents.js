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
exports.pumpItemList = exports.ItemPositionEnum = exports.valveMpItemClickableNameEnum = exports.ItemClickableNameEnum = exports.valveMpItemNameEnum = exports.ItemNameEnum = exports.ValveClassNameEnum = exports.PUMP_COMPONENT_TYPE = exports.VALVE_COMPONENT_TYPE = void 0;
exports.VALVE_COMPONENT_TYPE = "hmi.process_objects.Valve";
exports.PUMP_COMPONENT_TYPE = "hmi.process_objects.Pump";
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
                className = className.replace("Activated", "") + " Activated";
            }
            else {
                className = className.replace("Deactivated", "") + " Deactivated";
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
                className = className.replace("Activated", "") + " Activated";
            }
            else {
                className = className.replace("Deactivated", "") + " Deactivated";
            }
        }
        else {
            className = "hide item";
        }
    }
    else if (index === 12) {
        if (valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.locate) {
            className = className.replace("show item", "") + " show item";
            if ((0, numberUtil_1.getBoolAtIndex)(ActivatedConfigValue, 8) ||
                (0, numberUtil_1.getBoolAtIndex)(DeactivatedConfigValue, 8)) {
                className =
                    className.replace("show large item", "") + " show large item";
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
const getPumpItemClassName = (index, status, pumpType) => {
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
    // Additions to the className
    if (className.includes("show") && !className.includes("item")) {
        console.log("index", index, className);
        if (status === null || status === void 0 ? void 0 : status.alarm) {
            className = className.replace("AlarmState", "") + " AlarmState";
        }
        if (status === null || status === void 0 ? void 0 : status.changing) {
            className = className.replace("Changing", "") + " Changing";
        }
        if (status === null || status === void 0 ? void 0 : status.manual) {
            className = className.replace("Manual", "") + " Manual";
        }
        if ((status === null || status === void 0 ? void 0 : status.masked) && !status.alarm) {
            className = className.replace("NoAlarmMask", "") + " NoAlarmMask";
        }
        if (status === null || status === void 0 ? void 0 : status.masked) {
            className = className.replace("Masked", "") + " Masked";
        }
        if (status === null || status === void 0 ? void 0 : status.actFB) {
            className = className.replace("Activated", "") + " Activated";
        }
        if (status === null || status === void 0 ? void 0 : status.deActFB) {
            className = className.replace("Deactivated", "") + " Deactivated";
        }
    }
    return className;
};
exports.getPumpItemClassName = getPumpItemClassName;
const getPumpStatusClassNames = (className, status) => {
    // Additions to the className
    console.log(`status: ${JSON.stringify(status, null, 2)}`);
    if (className.includes("show") && !className.includes("item")) {
        if (status === null || status === void 0 ? void 0 : status.alarm) {
            className = className.replace("AlarmState", "") + " AlarmState";
        }
        if (status === null || status === void 0 ? void 0 : status.changing) {
            className = className.replace("Changing", "") + " Changing";
        }
        if (status === null || status === void 0 ? void 0 : status.manual) {
            className = className.replace("Manual", "") + " Manual";
        }
        if ((status === null || status === void 0 ? void 0 : status.masked) && !status.alarm) {
            className = className.replace("NoAlarmMask", "") + " NoAlarmMask";
        }
        if (status === null || status === void 0 ? void 0 : status.masked) {
            className = className.replace("Masked", "") + " Masked";
        }
        if (status === null || status === void 0 ? void 0 : status.actFB) {
            className = className.replace("Activated", "") + " Activated";
        }
        if (status === null || status === void 0 ? void 0 : status.deActFB) {
            className = className.replace("Deactivated", "") + " Deactivated";
        }
    }
    return className;
};
exports.getPumpStatusClassNames = getPumpStatusClassNames;


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
const initParameters = [{
        label: {
            text: "text"
        },
        input: {
            value: null,
            placeholder: "Enter a Number"
        }
    }];
// const [EditParamInputContextProvider, useEditParamInputContext] =
// useCreateContext<EditParamInputContextType>("EditParamInputContext");
exports.COMPONENT_TYPE = "hmi.input.ParameterList";
const ParameterListComponent = (props) => {
    const transformedProps = React.useMemo(() => {
        const { parameters } = props.props || initParameters;
        return parameters;
    }, [props.props.parameters]);
    return (React.createElement("div", { className: "display-flex-column" }, transformedProps.map((param, index) => {
        const { label, input } = param;
        console.log(input.value);
        return (React.createElement("label", { key: `${label.text}-parameter${index}`, className: "field small" },
            React.createElement("span", { className: "label" }, label.text),
            React.createElement("span", { className: "eu" }, input.eu),
            React.createElement("input", { type: "text", id: `${label.text}-parameter${index}`, inputMode: input.inputmode, pattern: input.pattern || "[0-9]*", placeholder: input.placeholder, disabled: !input.editable, value: input.value, onChange: (e) => {
                    // console.log(`On change event ${e.currentTarget.value}`);
                    props.store.props.write(`parameters[${index}].input.value`, e.currentTarget.value);
                    // updateValue(parseFloat(parseFloat(e.target.value).toFixed(2)), index);
                } })));
    })));
};
exports.ParameterListComponent = ParameterListComponent;
class ParameterListComponentMeta {
    getComponentType() {
        return exports.COMPONENT_TYPE;
    }
    getDefaultSize() {
        return {
            width: 120,
            height: 240,
        };
    }
    getPropsReducer(tree) {
        return {
            parameters: tree.read('parameters', initialState_1.parameterInitialState)
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
            width: 24,
            height: 48,
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
exports.COMPONENT_TYPE = "hmi.display.StatusValveMp";
const StatusValveMp = (props) => {
    // const useProps = React.useMemo(() => {
    // 	const useStatusProps = props.props || {}
    // 	return useStatusProps
    // }
    // , [props.props])
    const { statusItems } = props.props;
    return (React.createElement("div", { className: "hmi-component-status-valve-mp hmi-component-status-valve-mp__grid" },
        React.createElement("ul", { className: "list bordered dense" }, statusItems.map((item, index) => {
            return (React.createElement("li", { key: index },
                React.createElement("label", { className: "checkbox" },
                    React.createElement("div", { className: "text" },
                        React.createElement("p", { className: "x-small" }, item.label)),
                    React.createElement("div", { className: "end" },
                        React.createElement("input", { name: "checkbox", id: `checkbox-${index}`, type: "checkbox", checked: item.status, readOnly: true })))));
        }))));
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
            width: 24,
            height: 48,
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
            width: 24,
            height: 48,
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
const types_1 = __webpack_require__(/*! ../../../api/types */ "./src/api/types.ts");
const createContext_1 = __webpack_require__(/*! ../../../utils/createContext */ "./src/utils/createContext.tsx");
const item_1 = __webpack_require__(/*! ../valve/item */ "./src/components/process-objects/valve/item.tsx");
const utils_1 = __webpack_require__(/*! ../../../api/utils */ "./src/api/utils.ts");
const initialState_1 = __webpack_require__(/*! ../../../api/initialState */ "./src/api/initialState.ts");
exports.COMPONENT_TYPE = types_1.PUMP_COMPONENT_TYPE;
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
    let componentItemNames = utils_1.pumpItemNames;
    if (!(status === null || status === void 0 ? void 0 : status.locate)) {
        componentItemNames = componentItemNames.slice(0, -1);
    }
    return (React.createElement("div", { className: "hmi-component pump" },
        React.createElement("div", Object.assign({ ref: elRef }, emit({
            classes: [`hmi-component hmi-component-pump `],
        }), { "data-component": exports.COMPONENT_TYPE, onClick: onActionPerformed }),
            React.createElement(item_1.default, { itemClassName: `${(0, utils_1.getPumpStatusClassNames)("base-1 show", status)}` }),
            React.createElement(item_1.default, { itemClassName: "base-2 show item" }),
            React.createElement(item_1.default, { itemClassName: "base-3 show item" }),
            componentItemNames.map(({ name, index, key }) => (React.createElement(item_1.default, { itemClassName: name +
                    " " +
                    (0, utils_1.getPumpItemClassName)(index, status, pumpType || "centrifugal"), key: key })))),
        React.createElement(item_1.default, { itemClassName: `locate ${status.locate ? "show item" : "hide item"}` })));
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
const types_1 = __webpack_require__(/*! ../../../api/types */ "./src/api/types.ts");
const initialState_1 = __webpack_require__(/*! ../../../api/initialState */ "./src/api/initialState.ts");
// import './valve-mp.module.css'
// import {valveStatus} from '../../api/initialState'
const COMPONENT_TYPE = types_1.VALVE_COMPONENT_TYPE;
// import {valveStatus} from './initialState'
_a = (0, createContext_1.useCreateContext)("ValveMpCompound"), exports.ValveContextProvider = _a[0], exports.useValveContext = _a[1];
const Root = ({ componentProps, valveProps, onActionPerformed, children, }) => {
    return (React.createElement(exports.ValveContextProvider, { valveProps,
        componentProps,
        onActionPerformed,
        useValveReducer: hooks_1.useValveReducer }, children));
};
const valve = () => {
    var _a;
    const { valveProps, onActionPerformed, componentProps } = (0, exports.useValveContext)("Valve");
    const valveRef = React.useRef(null);
    const { position, emit } = componentProps;
    const { processObject } = valveProps;
    const { status } = processObject || initialState_1.processObjectProps;
    const inCoord = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : false;
    // if not locate, trim last item from valveMpItemNames
    let componentItemNames = utils_1.valveMpItemNames;
    if (!(status === null || status === void 0 ? void 0 : status.locate)) {
        componentItemNames = componentItemNames.slice(0, -1);
    }
    if (!inCoord) {
        return (React.createElement("div", Object.assign({ ref: valveRef }, emit({
            classes: [`hmi-component hmi-component__column `],
        }), { "data-component": COMPONENT_TYPE, onClick: onActionPerformed }),
            React.createElement("div", { className: "hmi-component__row" },
                React.createElement("div", { className: "hmi-component-valve__mp" }, componentItemNames.map(({ value, index, key }) => (
                // console.log(
                // 	`re-rendered ,key ${key} value ${value} index ${index}`
                // ),
                (React.createElement(item_1.default, { itemClassName: value + " " + (0, utils_1.getValveMpItemClassName)(index, status), key: key }))))))));
    }
    else {
        return (React.createElement("div", Object.assign({ ref: valveRef }, emit({
            classes: [`hmi-component hmi-component-valve__mp `],
        }), { "data-component": COMPONENT_TYPE, onClick: onActionPerformed }), componentItemNames.map(({ value, index, key }) => (
        // console.log(
        // 	`re-rendered ,key ${key} value ${value} index ${index}`
        // ),
        (React.createElement(item_1.default, { itemClassName: value + " " + (0, utils_1.getValveMpItemClassName)(index, status), key: key }))))));
    }
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
exports.StatusValveMp = exports.CommandValveMp = exports.ParameterListComponent = exports.Pump = exports.Valve = void 0;
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
//import { Button, ButtonMeta } from './components/Button';
//import { Valve, ValveMeta } from "./components/Valve";
const Valve_1 = __webpack_require__(/*! ./components/Valve */ "./src/components/Valve.tsx");
Object.defineProperty(exports, "Valve", ({ enumerable: true, get: function () { return Valve_1.Valve; } }));
const Pump_1 = __webpack_require__(/*! ./components/Pump */ "./src/components/Pump.tsx");
Object.defineProperty(exports, "Pump", ({ enumerable: true, get: function () { return Pump_1.Pump; } }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG1pQ29tcG9uZW50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFxQztBQUNsRDtBQUNBO0FBQ0EsOEJBQThCLE9BQU8sa0ZBQWtGLE9BQU87QUFDOUgsR0FBRztBQUNIO0FBQ0EsaUtBQWlLLE1BQU07QUFDdkssR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFFO0FBQ047QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQztBQUNBO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXLElBQUksaUJBQWlCO0FBQ3JFO0FBQ0EsdUJBQXVCLG1CQUFtQixvQkFBb0IsMkRBQTJELElBQUk7QUFDN0g7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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YUFBSyxRQVFSO0FBUE4seUZBQW1EO0FBUWxELHNGQVJRLFdBQUksUUFRUjtBQVBMLG9IQUE4RjtBQVE3Rix3R0FSUSxzQ0FBc0IsUUFRUjtBQVB2Qix1SEFBaUY7QUFRaEYsZ0dBUlEsK0JBQWMsUUFRUjtBQVBmLG9IQUE4RTtBQVE3RSwrRkFSUSw2QkFBYSxRQVFSO0FBR2QsMEJBQTBCO0FBQzFCLDBEQUFxQjtBQUVyQiw4QkFBOEI7QUFDOUIsTUFBTSxVQUFVLEdBQXlCO0lBQ3hDLElBQUksaUJBQVMsRUFBRTtJQUNmLElBQUksZUFBUSxFQUFFO0lBQ2QsSUFBSSwwQ0FBMEIsRUFBRTtJQUNoQyxJQUFJLG1DQUFrQixFQUFFO0lBQ3hCLElBQUksaUNBQWlCLEVBQUU7Q0FFdkIsQ0FBQztBQUVGLGlFQUFpRTtBQUNqRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZ0IsRUFBRSxFQUFFLENBQUMsc0NBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvY2pzL2ltbWVyLmNqcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvY2pzL2luZGV4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXNlLWltbWVyL2Rpc3QvdXNlLWltbWVyLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL21heC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9tZDUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9wYXJzZS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjFUb1Y2LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YzLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92NS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92Ni5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92NlRvVjEuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjcuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS9ob29rcy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS9pbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9hcGkvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9hcGkvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL0NvbW1hbmRWYWx2ZU1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvUGFyYW1ldGVyTGlzdC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1B1bXAudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9TdGF0dXNWYWx2ZU1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvVmFsdmUudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvcHVtcHMvUHVtcENvbXBvdW5kLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3ZhbHZlLW1wL1ZhbHZlTXAudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvdmFsdmUvaXRlbS50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy91dGlscy9jcmVhdGVDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL3V0aWxzL251bWJlclV0aWwudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy9leHRlcm5hbCB1bWQgXCJQZXJzcGVjdGl2ZUNsaWVudFwiIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvZXh0ZXJuYWwgdW1kIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlBlcnNwZWN0aXZlQ2xpZW50XCIpLCByZXF1aXJlKFwiUmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJIbWlDb21wb25lbnRzXCIsIFtcIlBlcnNwZWN0aXZlQ2xpZW50XCIsIFwiUmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSG1pQ29tcG9uZW50c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcIlBlcnNwZWN0aXZlQ2xpZW50XCIpLCByZXF1aXJlKFwiUmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhtaUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJQZXJzcGVjdGl2ZUNsaWVudFwiXSwgcm9vdFtcIlJlYWN0XCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pbmR1Y3RpdmVhdXRvbWF0aW9uX3BlcnNwZWN0aXZlX2NsaWVudF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbW1lci50c1xudmFyIGltbWVyX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KGltbWVyX2V4cG9ydHMsIHtcbiAgSW1tZXI6ICgpID0+IEltbWVyMixcbiAgYXBwbHlQYXRjaGVzOiAoKSA9PiBhcHBseVBhdGNoZXMsXG4gIGNhc3REcmFmdDogKCkgPT4gY2FzdERyYWZ0LFxuICBjYXN0SW1tdXRhYmxlOiAoKSA9PiBjYXN0SW1tdXRhYmxlLFxuICBjcmVhdGVEcmFmdDogKCkgPT4gY3JlYXRlRHJhZnQsXG4gIGN1cnJlbnQ6ICgpID0+IGN1cnJlbnQsXG4gIGVuYWJsZU1hcFNldDogKCkgPT4gZW5hYmxlTWFwU2V0LFxuICBlbmFibGVQYXRjaGVzOiAoKSA9PiBlbmFibGVQYXRjaGVzLFxuICBmaW5pc2hEcmFmdDogKCkgPT4gZmluaXNoRHJhZnQsXG4gIGZyZWV6ZTogKCkgPT4gZnJlZXplLFxuICBpbW1lcmFibGU6ICgpID0+IERSQUZUQUJMRSxcbiAgaXNEcmFmdDogKCkgPT4gaXNEcmFmdCxcbiAgaXNEcmFmdGFibGU6ICgpID0+IGlzRHJhZnRhYmxlLFxuICBub3RoaW5nOiAoKSA9PiBOT1RISU5HLFxuICBvcmlnaW5hbDogKCkgPT4gb3JpZ2luYWwsXG4gIHByb2R1Y2U6ICgpID0+IHByb2R1Y2UsXG4gIHByb2R1Y2VXaXRoUGF0Y2hlczogKCkgPT4gcHJvZHVjZVdpdGhQYXRjaGVzLFxuICBzZXRBdXRvRnJlZXplOiAoKSA9PiBzZXRBdXRvRnJlZXplLFxuICBzZXRVc2VTdHJpY3RTaGFsbG93Q29weTogKCkgPT4gc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHlcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoaW1tZXJfZXhwb3J0cyk7XG5cbi8vIHNyYy91dGlscy9lbnYudHNcbnZhciBOT1RISU5HID0gU3ltYm9sLmZvcihcImltbWVyLW5vdGhpbmdcIik7XG52YXIgRFJBRlRBQkxFID0gU3ltYm9sLmZvcihcImltbWVyLWRyYWZ0YWJsZVwiKTtcbnZhciBEUkFGVF9TVEFURSA9IFN5bWJvbC5mb3IoXCJpbW1lci1zdGF0ZVwiKTtcblxuLy8gc3JjL3V0aWxzL2Vycm9ycy50c1xudmFyIGVycm9ycyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFtcbiAgLy8gQWxsIGVycm9yIGNvZGVzLCBzdGFydGluZyBieSAwOlxuICBmdW5jdGlvbihwbHVnaW4pIHtcbiAgICByZXR1cm4gYFRoZSBwbHVnaW4gZm9yICcke3BsdWdpbn0nIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBcXGBlbmFibGUke3BsdWdpbn0oKVxcYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLmA7XG4gIH0sXG4gIGZ1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIGBwcm9kdWNlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGluZ3MgdGhhdCBhcmUgZHJhZnRhYmxlOiBwbGFpbiBvYmplY3RzLCBhcnJheXMsIE1hcCwgU2V0IG9yIGNsYXNzZXMgdGhhdCBhcmUgbWFya2VkIHdpdGggJ1tpbW1lcmFibGVdOiB0cnVlJy4gR290ICcke3RoaW5nfSdgO1xuICB9LFxuICBcIlRoaXMgb2JqZWN0IGhhcyBiZWVuIGZyb3plbiBhbmQgc2hvdWxkIG5vdCBiZSBtdXRhdGVkXCIsXG4gIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgdXNlIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkLiBEaWQgeW91IHBhc3MgYW4gb2JqZWN0IGZyb20gaW5zaWRlIGFuIGltbWVyIGZ1bmN0aW9uIHRvIGFuIGFzeW5jIHByb2Nlc3M/IFwiICsgZGF0YTtcbiAgfSxcbiAgXCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiLFxuICBcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLFxuICBcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLFxuICBcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiLFxuICBcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIixcbiAgXCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsXG4gIGZ1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIGAnY3VycmVudCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6ICR7dGhpbmd9YDtcbiAgfSxcbiAgXCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuICBcIk9iamVjdC5zZXRQcm90b3R5cGVPZigpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsXG4gIFwiSW1tZXIgb25seSBzdXBwb3J0cyBkZWxldGluZyBhcnJheSBpbmRpY2VzXCIsXG4gIFwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLFxuICBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBgJ29yaWdpbmFsJyBleHBlY3RzIGEgZHJhZnQsIGdvdDogJHt0aGluZ31gO1xuICB9XG4gIC8vIE5vdGU6IGlmIG1vcmUgZXJyb3JzIGFyZSBhZGRlZCwgdGhlIGVycm9yT2Zmc2V0IGluIFBhdGNoZXMudHMgc2hvdWxkIGJlIGluY3JlYXNlZFxuICAvLyBTZWUgUGF0Y2hlcy50cyBmb3IgYWRkaXRpb25hbCBlcnJvcnNcbl0gOiBbXTtcbmZ1bmN0aW9uIGRpZShlcnJvciwgLi4uYXJncykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc3QgZSA9IGVycm9yc1tlcnJvcl07XG4gICAgY29uc3QgbXNnID0gdHlwZW9mIGUgPT09IFwiZnVuY3Rpb25cIiA/IGUuYXBwbHkobnVsbCwgYXJncykgOiBlO1xuICAgIHRocm93IG5ldyBFcnJvcihgW0ltbWVyXSAke21zZ31gKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFtJbW1lcl0gbWluaWZpZWQgZXJyb3IgbnI6ICR7ZXJyb3J9LiBGdWxsIGVycm9yIGF0OiBodHRwczovL2JpdC5seS8zY1hFS1dmYFxuICApO1xufVxuXG4vLyBzcmMvdXRpbHMvY29tbW9uLnRzXG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5mdW5jdGlvbiBpc0RyYWZ0KHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmICEhdmFsdWVbRFJBRlRfU1RBVEVdO1xufVxuZnVuY3Rpb24gaXNEcmFmdGFibGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSB8fCAhIXZhbHVlW0RSQUZUQUJMRV0gfHwgISF2YWx1ZS5jb25zdHJ1Y3Rvcj8uW0RSQUZUQUJMRV0gfHwgaXNNYXAodmFsdWUpIHx8IGlzU2V0KHZhbHVlKTtcbn1cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci50b1N0cmluZygpO1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIilcbiAgICByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0gZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBDdG9yID0gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIGlmIChDdG9yID09PSBPYmplY3QpXG4gICAgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSBcImZ1bmN0aW9uXCIgJiYgRnVuY3Rpb24udG9TdHJpbmcuY2FsbChDdG9yKSA9PT0gb2JqZWN0Q3RvclN0cmluZztcbn1cbmZ1bmN0aW9uIG9yaWdpbmFsKHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdCh2YWx1ZSkpXG4gICAgZGllKDE1LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZVtEUkFGVF9TVEFURV0uYmFzZV87XG59XG5mdW5jdGlvbiBlYWNoKG9iaiwgaXRlcikge1xuICBpZiAoZ2V0QXJjaHR5cGUob2JqKSA9PT0gMCAvKiBPYmplY3QgKi8pIHtcbiAgICBSZWZsZWN0Lm93bktleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGl0ZXIoa2V5LCBvYmpba2V5XSwgb2JqKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmouZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiBpdGVyKGluZGV4LCBlbnRyeSwgb2JqKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEFyY2h0eXBlKHRoaW5nKSB7XG4gIGNvbnN0IHN0YXRlID0gdGhpbmdbRFJBRlRfU1RBVEVdO1xuICByZXR1cm4gc3RhdGUgPyBzdGF0ZS50eXBlXyA6IEFycmF5LmlzQXJyYXkodGhpbmcpID8gMSAvKiBBcnJheSAqLyA6IGlzTWFwKHRoaW5nKSA/IDIgLyogTWFwICovIDogaXNTZXQodGhpbmcpID8gMyAvKiBTZXQgKi8gOiAwIC8qIE9iamVjdCAqLztcbn1cbmZ1bmN0aW9uIGhhcyh0aGluZywgcHJvcCkge1xuICByZXR1cm4gZ2V0QXJjaHR5cGUodGhpbmcpID09PSAyIC8qIE1hcCAqLyA/IHRoaW5nLmhhcyhwcm9wKSA6IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGluZywgcHJvcCk7XG59XG5mdW5jdGlvbiBnZXQodGhpbmcsIHByb3ApIHtcbiAgcmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gMiAvKiBNYXAgKi8gPyB0aGluZy5nZXQocHJvcCkgOiB0aGluZ1twcm9wXTtcbn1cbmZ1bmN0aW9uIHNldCh0aGluZywgcHJvcE9yT2xkVmFsdWUsIHZhbHVlKSB7XG4gIGNvbnN0IHQgPSBnZXRBcmNodHlwZSh0aGluZyk7XG4gIGlmICh0ID09PSAyIC8qIE1hcCAqLylcbiAgICB0aGluZy5zZXQocHJvcE9yT2xkVmFsdWUsIHZhbHVlKTtcbiAgZWxzZSBpZiAodCA9PT0gMyAvKiBTZXQgKi8pIHtcbiAgICB0aGluZy5hZGQodmFsdWUpO1xuICB9IGVsc2VcbiAgICB0aGluZ1twcm9wT3JPbGRWYWx1ZV0gPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuZnVuY3Rpb24gaXNNYXAodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBNYXA7XG59XG5mdW5jdGlvbiBpc1NldCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIFNldDtcbn1cbmZ1bmN0aW9uIGxhdGVzdChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUuY29weV8gfHwgc3RhdGUuYmFzZV87XG59XG5mdW5jdGlvbiBzaGFsbG93Q29weShiYXNlLCBzdHJpY3QpIHtcbiAgaWYgKGlzTWFwKGJhc2UpKSB7XG4gICAgcmV0dXJuIG5ldyBNYXAoYmFzZSk7XG4gIH1cbiAgaWYgKGlzU2V0KGJhc2UpKSB7XG4gICAgcmV0dXJuIG5ldyBTZXQoYmFzZSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZSkpXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJhc2UpO1xuICBjb25zdCBpc1BsYWluID0gaXNQbGFpbk9iamVjdChiYXNlKTtcbiAgaWYgKHN0cmljdCA9PT0gdHJ1ZSB8fCBzdHJpY3QgPT09IFwiY2xhc3Nfb25seVwiICYmICFpc1BsYWluKSB7XG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhiYXNlKTtcbiAgICBkZWxldGUgZGVzY3JpcHRvcnNbRFJBRlRfU1RBVEVdO1xuICAgIGxldCBrZXlzID0gUmVmbGVjdC5vd25LZXlzKGRlc2NyaXB0b3JzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBjb25zdCBkZXNjID0gZGVzY3JpcHRvcnNba2V5XTtcbiAgICAgIGlmIChkZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgICAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgZGVzYy5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KVxuICAgICAgICBkZXNjcmlwdG9yc1trZXldID0ge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAvLyBjb3VsZCBsaXZlIHdpdGggISFkZXNjLnNldCBhcyB3ZWxsIGhlcmUuLi5cbiAgICAgICAgICBlbnVtZXJhYmxlOiBkZXNjLmVudW1lcmFibGUsXG4gICAgICAgICAgdmFsdWU6IGJhc2Vba2V5XVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShnZXRQcm90b3R5cGVPZihiYXNlKSwgZGVzY3JpcHRvcnMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHByb3RvID0gZ2V0UHJvdG90eXBlT2YoYmFzZSk7XG4gICAgaWYgKHByb3RvICE9PSBudWxsICYmIGlzUGxhaW4pIHtcbiAgICAgIHJldHVybiB7IC4uLmJhc2UgfTtcbiAgICB9XG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShwcm90byk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ob2JqLCBiYXNlKTtcbiAgfVxufVxuZnVuY3Rpb24gZnJlZXplKG9iaiwgZGVlcCA9IGZhbHNlKSB7XG4gIGlmIChpc0Zyb3plbihvYmopIHx8IGlzRHJhZnQob2JqKSB8fCAhaXNEcmFmdGFibGUob2JqKSlcbiAgICByZXR1cm4gb2JqO1xuICBpZiAoZ2V0QXJjaHR5cGUob2JqKSA+IDEpIHtcbiAgICBvYmouc2V0ID0gb2JqLmFkZCA9IG9iai5jbGVhciA9IG9iai5kZWxldGUgPSBkb250TXV0YXRlRnJvemVuQ29sbGVjdGlvbnM7XG4gIH1cbiAgT2JqZWN0LmZyZWV6ZShvYmopO1xuICBpZiAoZGVlcClcbiAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4gZnJlZXplKHZhbHVlLCB0cnVlKSk7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBkb250TXV0YXRlRnJvemVuQ29sbGVjdGlvbnMoKSB7XG4gIGRpZSgyKTtcbn1cbmZ1bmN0aW9uIGlzRnJvemVuKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmlzRnJvemVuKG9iaik7XG59XG5cbi8vIHNyYy91dGlscy9wbHVnaW5zLnRzXG52YXIgcGx1Z2lucyA9IHt9O1xuZnVuY3Rpb24gZ2V0UGx1Z2luKHBsdWdpbktleSkge1xuICBjb25zdCBwbHVnaW4gPSBwbHVnaW5zW3BsdWdpbktleV07XG4gIGlmICghcGx1Z2luKSB7XG4gICAgZGllKDAsIHBsdWdpbktleSk7XG4gIH1cbiAgcmV0dXJuIHBsdWdpbjtcbn1cbmZ1bmN0aW9uIGxvYWRQbHVnaW4ocGx1Z2luS2V5LCBpbXBsZW1lbnRhdGlvbikge1xuICBpZiAoIXBsdWdpbnNbcGx1Z2luS2V5XSlcbiAgICBwbHVnaW5zW3BsdWdpbktleV0gPSBpbXBsZW1lbnRhdGlvbjtcbn1cblxuLy8gc3JjL2NvcmUvc2NvcGUudHNcbnZhciBjdXJyZW50U2NvcGU7XG5mdW5jdGlvbiBnZXRDdXJyZW50U2NvcGUoKSB7XG4gIHJldHVybiBjdXJyZW50U2NvcGU7XG59XG5mdW5jdGlvbiBjcmVhdGVTY29wZShwYXJlbnRfLCBpbW1lcl8pIHtcbiAgcmV0dXJuIHtcbiAgICBkcmFmdHNfOiBbXSxcbiAgICBwYXJlbnRfLFxuICAgIGltbWVyXyxcbiAgICAvLyBXaGVuZXZlciB0aGUgbW9kaWZpZWQgZHJhZnQgY29udGFpbnMgYSBkcmFmdCBmcm9tIGFub3RoZXIgc2NvcGUsIHdlXG4gICAgLy8gbmVlZCB0byBwcmV2ZW50IGF1dG8tZnJlZXppbmcgc28gdGhlIHVub3duZWQgZHJhZnQgY2FuIGJlIGZpbmFsaXplZC5cbiAgICBjYW5BdXRvRnJlZXplXzogdHJ1ZSxcbiAgICB1bmZpbmFsaXplZERyYWZ0c186IDBcbiAgfTtcbn1cbmZ1bmN0aW9uIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKSB7XG4gIGlmIChwYXRjaExpc3RlbmVyKSB7XG4gICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKTtcbiAgICBzY29wZS5wYXRjaGVzXyA9IFtdO1xuICAgIHNjb3BlLmludmVyc2VQYXRjaGVzXyA9IFtdO1xuICAgIHNjb3BlLnBhdGNoTGlzdGVuZXJfID0gcGF0Y2hMaXN0ZW5lcjtcbiAgfVxufVxuZnVuY3Rpb24gcmV2b2tlU2NvcGUoc2NvcGUpIHtcbiAgbGVhdmVTY29wZShzY29wZSk7XG4gIHNjb3BlLmRyYWZ0c18uZm9yRWFjaChyZXZva2VEcmFmdCk7XG4gIHNjb3BlLmRyYWZ0c18gPSBudWxsO1xufVxuZnVuY3Rpb24gbGVhdmVTY29wZShzY29wZSkge1xuICBpZiAoc2NvcGUgPT09IGN1cnJlbnRTY29wZSkge1xuICAgIGN1cnJlbnRTY29wZSA9IHNjb3BlLnBhcmVudF87XG4gIH1cbn1cbmZ1bmN0aW9uIGVudGVyU2NvcGUoaW1tZXIyKSB7XG4gIHJldHVybiBjdXJyZW50U2NvcGUgPSBjcmVhdGVTY29wZShjdXJyZW50U2NvcGUsIGltbWVyMik7XG59XG5mdW5jdGlvbiByZXZva2VEcmFmdChkcmFmdCkge1xuICBjb25zdCBzdGF0ZSA9IGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgaWYgKHN0YXRlLnR5cGVfID09PSAwIC8qIE9iamVjdCAqLyB8fCBzdGF0ZS50eXBlXyA9PT0gMSAvKiBBcnJheSAqLylcbiAgICBzdGF0ZS5yZXZva2VfKCk7XG4gIGVsc2VcbiAgICBzdGF0ZS5yZXZva2VkXyA9IHRydWU7XG59XG5cbi8vIHNyYy9jb3JlL2ZpbmFsaXplLnRzXG5mdW5jdGlvbiBwcm9jZXNzUmVzdWx0KHJlc3VsdCwgc2NvcGUpIHtcbiAgc2NvcGUudW5maW5hbGl6ZWREcmFmdHNfID0gc2NvcGUuZHJhZnRzXy5sZW5ndGg7XG4gIGNvbnN0IGJhc2VEcmFmdCA9IHNjb3BlLmRyYWZ0c19bMF07XG4gIGNvbnN0IGlzUmVwbGFjZWQgPSByZXN1bHQgIT09IHZvaWQgMCAmJiByZXN1bHQgIT09IGJhc2VEcmFmdDtcbiAgaWYgKGlzUmVwbGFjZWQpIHtcbiAgICBpZiAoYmFzZURyYWZ0W0RSQUZUX1NUQVRFXS5tb2RpZmllZF8pIHtcbiAgICAgIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgICAgIGRpZSg0KTtcbiAgICB9XG4gICAgaWYgKGlzRHJhZnRhYmxlKHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdCA9IGZpbmFsaXplKHNjb3BlLCByZXN1bHQpO1xuICAgICAgaWYgKCFzY29wZS5wYXJlbnRfKVxuICAgICAgICBtYXliZUZyZWV6ZShzY29wZSwgcmVzdWx0KTtcbiAgICB9XG4gICAgaWYgKHNjb3BlLnBhdGNoZXNfKSB7XG4gICAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhcbiAgICAgICAgYmFzZURyYWZ0W0RSQUZUX1NUQVRFXS5iYXNlXyxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBzY29wZS5wYXRjaGVzXyxcbiAgICAgICAgc2NvcGUuaW52ZXJzZVBhdGNoZXNfXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgYmFzZURyYWZ0LCBbXSk7XG4gIH1cbiAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuICBpZiAoc2NvcGUucGF0Y2hlc18pIHtcbiAgICBzY29wZS5wYXRjaExpc3RlbmVyXyhzY29wZS5wYXRjaGVzXywgc2NvcGUuaW52ZXJzZVBhdGNoZXNfKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0ICE9PSBOT1RISU5HID8gcmVzdWx0IDogdm9pZCAwO1xufVxuZnVuY3Rpb24gZmluYWxpemUocm9vdFNjb3BlLCB2YWx1ZSwgcGF0aCkge1xuICBpZiAoaXNGcm96ZW4odmFsdWUpKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgY29uc3Qgc3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV07XG4gIGlmICghc3RhdGUpIHtcbiAgICBlYWNoKFxuICAgICAgdmFsdWUsXG4gICAgICAoa2V5LCBjaGlsZFZhbHVlKSA9PiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgc3RhdGUsIHZhbHVlLCBrZXksIGNoaWxkVmFsdWUsIHBhdGgpXG4gICAgKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHN0YXRlLnNjb3BlXyAhPT0gcm9vdFNjb3BlKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIHN0YXRlLmJhc2VfLCB0cnVlKTtcbiAgICByZXR1cm4gc3RhdGUuYmFzZV87XG4gIH1cbiAgaWYgKCFzdGF0ZS5maW5hbGl6ZWRfKSB7XG4gICAgc3RhdGUuZmluYWxpemVkXyA9IHRydWU7XG4gICAgc3RhdGUuc2NvcGVfLnVuZmluYWxpemVkRHJhZnRzXy0tO1xuICAgIGNvbnN0IHJlc3VsdCA9IHN0YXRlLmNvcHlfO1xuICAgIGxldCByZXN1bHRFYWNoID0gcmVzdWx0O1xuICAgIGxldCBpc1NldDIgPSBmYWxzZTtcbiAgICBpZiAoc3RhdGUudHlwZV8gPT09IDMgLyogU2V0ICovKSB7XG4gICAgICByZXN1bHRFYWNoID0gbmV3IFNldChyZXN1bHQpO1xuICAgICAgcmVzdWx0LmNsZWFyKCk7XG4gICAgICBpc1NldDIgPSB0cnVlO1xuICAgIH1cbiAgICBlYWNoKFxuICAgICAgcmVzdWx0RWFjaCxcbiAgICAgIChrZXksIGNoaWxkVmFsdWUpID0+IGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBzdGF0ZSwgcmVzdWx0LCBrZXksIGNoaWxkVmFsdWUsIHBhdGgsIGlzU2V0MilcbiAgICApO1xuICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgcmVzdWx0LCBmYWxzZSk7XG4gICAgaWYgKHBhdGggJiYgcm9vdFNjb3BlLnBhdGNoZXNfKSB7XG4gICAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUGF0Y2hlc18oXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwYXRoLFxuICAgICAgICByb290U2NvcGUucGF0Y2hlc18sXG4gICAgICAgIHJvb3RTY29wZS5pbnZlcnNlUGF0Y2hlc19cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZS5jb3B5Xztcbn1cbmZ1bmN0aW9uIGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBwYXJlbnRTdGF0ZSwgdGFyZ2V0T2JqZWN0LCBwcm9wLCBjaGlsZFZhbHVlLCByb290UGF0aCwgdGFyZ2V0SXNTZXQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBjaGlsZFZhbHVlID09PSB0YXJnZXRPYmplY3QpXG4gICAgZGllKDUpO1xuICBpZiAoaXNEcmFmdChjaGlsZFZhbHVlKSkge1xuICAgIGNvbnN0IHBhdGggPSByb290UGF0aCAmJiBwYXJlbnRTdGF0ZSAmJiBwYXJlbnRTdGF0ZS50eXBlXyAhPT0gMyAvKiBTZXQgKi8gJiYgLy8gU2V0IG9iamVjdHMgYXJlIGF0b21pYyBzaW5jZSB0aGV5IGhhdmUgbm8ga2V5cy5cbiAgICAhaGFzKHBhcmVudFN0YXRlLmFzc2lnbmVkXywgcHJvcCkgPyByb290UGF0aC5jb25jYXQocHJvcCkgOiB2b2lkIDA7XG4gICAgY29uc3QgcmVzID0gZmluYWxpemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlLCBwYXRoKTtcbiAgICBzZXQodGFyZ2V0T2JqZWN0LCBwcm9wLCByZXMpO1xuICAgIGlmIChpc0RyYWZ0KHJlcykpIHtcbiAgICAgIHJvb3RTY29wZS5jYW5BdXRvRnJlZXplXyA9IGZhbHNlO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKHRhcmdldElzU2V0KSB7XG4gICAgdGFyZ2V0T2JqZWN0LmFkZChjaGlsZFZhbHVlKTtcbiAgfVxuICBpZiAoaXNEcmFmdGFibGUoY2hpbGRWYWx1ZSkgJiYgIWlzRnJvemVuKGNoaWxkVmFsdWUpKSB7XG4gICAgaWYgKCFyb290U2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHJvb3RTY29wZS51bmZpbmFsaXplZERyYWZ0c18gPCAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZpbmFsaXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSk7XG4gICAgaWYgKCghcGFyZW50U3RhdGUgfHwgIXBhcmVudFN0YXRlLnNjb3BlXy5wYXJlbnRfKSAmJiB0eXBlb2YgcHJvcCAhPT0gXCJzeW1ib2xcIiAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0T2JqZWN0LCBwcm9wKSlcbiAgICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1heWJlRnJlZXplKHNjb3BlLCB2YWx1ZSwgZGVlcCA9IGZhbHNlKSB7XG4gIGlmICghc2NvcGUucGFyZW50XyAmJiBzY29wZS5pbW1lcl8uYXV0b0ZyZWV6ZV8gJiYgc2NvcGUuY2FuQXV0b0ZyZWV6ZV8pIHtcbiAgICBmcmVlemUodmFsdWUsIGRlZXApO1xuICB9XG59XG5cbi8vIHNyYy9jb3JlL3Byb3h5LnRzXG5mdW5jdGlvbiBjcmVhdGVQcm94eVByb3h5KGJhc2UsIHBhcmVudCkge1xuICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShiYXNlKTtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgdHlwZV86IGlzQXJyYXkgPyAxIC8qIEFycmF5ICovIDogMCAvKiBPYmplY3QgKi8sXG4gICAgLy8gVHJhY2sgd2hpY2ggcHJvZHVjZSBjYWxsIHRoaXMgaXMgYXNzb2NpYXRlZCB3aXRoLlxuICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgIC8vIFRydWUgZm9yIGJvdGggc2hhbGxvdyBhbmQgZGVlcCBjaGFuZ2VzLlxuICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgLy8gVXNlZCBkdXJpbmcgZmluYWxpemF0aW9uLlxuICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgIC8vIFRyYWNrIHdoaWNoIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGFzc2lnbmVkICh0cnVlKSBvciBkZWxldGVkIChmYWxzZSkuXG4gICAgYXNzaWduZWRfOiB7fSxcbiAgICAvLyBUaGUgcGFyZW50IGRyYWZ0IHN0YXRlLlxuICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAvLyBUaGUgYmFzZSBzdGF0ZS5cbiAgICBiYXNlXzogYmFzZSxcbiAgICAvLyBUaGUgYmFzZSBwcm94eS5cbiAgICBkcmFmdF86IG51bGwsXG4gICAgLy8gc2V0IGJlbG93XG4gICAgLy8gVGhlIGJhc2UgY29weSB3aXRoIGFueSB1cGRhdGVkIHZhbHVlcy5cbiAgICBjb3B5XzogbnVsbCxcbiAgICAvLyBDYWxsZWQgYnkgdGhlIGBwcm9kdWNlYCBmdW5jdGlvbi5cbiAgICByZXZva2VfOiBudWxsLFxuICAgIGlzTWFudWFsXzogZmFsc2VcbiAgfTtcbiAgbGV0IHRhcmdldCA9IHN0YXRlO1xuICBsZXQgdHJhcHMgPSBvYmplY3RUcmFwcztcbiAgaWYgKGlzQXJyYXkpIHtcbiAgICB0YXJnZXQgPSBbc3RhdGVdO1xuICAgIHRyYXBzID0gYXJyYXlUcmFwcztcbiAgfVxuICBjb25zdCB7IHJldm9rZSwgcHJveHkgfSA9IFByb3h5LnJldm9jYWJsZSh0YXJnZXQsIHRyYXBzKTtcbiAgc3RhdGUuZHJhZnRfID0gcHJveHk7XG4gIHN0YXRlLnJldm9rZV8gPSByZXZva2U7XG4gIHJldHVybiBwcm94eTtcbn1cbnZhciBvYmplY3RUcmFwcyA9IHtcbiAgZ2V0KHN0YXRlLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09IERSQUZUX1NUQVRFKVxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGNvbnN0IHNvdXJjZSA9IGxhdGVzdChzdGF0ZSk7XG4gICAgaWYgKCFoYXMoc291cmNlLCBwcm9wKSkge1xuICAgICAgcmV0dXJuIHJlYWRQcm9wRnJvbVByb3RvKHN0YXRlLCBzb3VyY2UsIHByb3ApO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHNvdXJjZVtwcm9wXTtcbiAgICBpZiAoc3RhdGUuZmluYWxpemVkXyB8fCAhaXNEcmFmdGFibGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gcGVlayhzdGF0ZS5iYXNlXywgcHJvcCkpIHtcbiAgICAgIHByZXBhcmVDb3B5KHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5X1twcm9wXSA9IGNyZWF0ZVByb3h5KHZhbHVlLCBzdGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgaGFzKHN0YXRlLCBwcm9wKSB7XG4gICAgcmV0dXJuIHByb3AgaW4gbGF0ZXN0KHN0YXRlKTtcbiAgfSxcbiAgb3duS2V5cyhzdGF0ZSkge1xuICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMobGF0ZXN0KHN0YXRlKSk7XG4gIH0sXG4gIHNldChzdGF0ZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhsYXRlc3Qoc3RhdGUpLCBwcm9wKTtcbiAgICBpZiAoZGVzYz8uc2V0KSB7XG4gICAgICBkZXNjLnNldC5jYWxsKHN0YXRlLmRyYWZ0XywgdmFsdWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG4gICAgICBjb25zdCBjdXJyZW50MiA9IHBlZWsobGF0ZXN0KHN0YXRlKSwgcHJvcCk7XG4gICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBjdXJyZW50Mj8uW0RSQUZUX1NUQVRFXTtcbiAgICAgIGlmIChjdXJyZW50U3RhdGUgJiYgY3VycmVudFN0YXRlLmJhc2VfID09PSB2YWx1ZSkge1xuICAgICAgICBzdGF0ZS5jb3B5X1twcm9wXSA9IHZhbHVlO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXModmFsdWUsIGN1cnJlbnQyKSAmJiAodmFsdWUgIT09IHZvaWQgMCB8fCBoYXMoc3RhdGUuYmFzZV8sIHByb3ApKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5jb3B5X1twcm9wXSA9PT0gdmFsdWUgJiYgLy8gc3BlY2lhbCBjYXNlOiBoYW5kbGUgbmV3IHByb3BzIHdpdGggdmFsdWUgJ3VuZGVmaW5lZCdcbiAgICAodmFsdWUgIT09IHZvaWQgMCB8fCBwcm9wIGluIHN0YXRlLmNvcHlfKSB8fCAvLyBzcGVjaWFsIGNhc2U6IE5hTlxuICAgIE51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzTmFOKHN0YXRlLmNvcHlfW3Byb3BdKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHN0YXRlLmNvcHlfW3Byb3BdID0gdmFsdWU7XG4gICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHkoc3RhdGUsIHByb3ApIHtcbiAgICBpZiAocGVlayhzdGF0ZS5iYXNlXywgcHJvcCkgIT09IHZvaWQgMCB8fCBwcm9wIGluIHN0YXRlLmJhc2VfKSB7XG4gICAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSBmYWxzZTtcbiAgICAgIHByZXBhcmVDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHN0YXRlLmFzc2lnbmVkX1twcm9wXTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmNvcHlfKSB7XG4gICAgICBkZWxldGUgc3RhdGUuY29weV9bcHJvcF07XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICAvLyBOb3RlOiBXZSBuZXZlciBjb2VyY2UgYGRlc2MudmFsdWVgIGludG8gYW4gSW1tZXIgZHJhZnQsIGJlY2F1c2Ugd2UgY2FuJ3QgbWFrZVxuICAvLyB0aGUgc2FtZSBndWFyYW50ZWUgaW4gRVM1IG1vZGUuXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzdGF0ZSwgcHJvcCkge1xuICAgIGNvbnN0IG93bmVyID0gbGF0ZXN0KHN0YXRlKTtcbiAgICBjb25zdCBkZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob3duZXIsIHByb3ApO1xuICAgIGlmICghZGVzYylcbiAgICAgIHJldHVybiBkZXNjO1xuICAgIHJldHVybiB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogc3RhdGUudHlwZV8gIT09IDEgLyogQXJyYXkgKi8gfHwgcHJvcCAhPT0gXCJsZW5ndGhcIixcbiAgICAgIGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcbiAgICAgIHZhbHVlOiBvd25lcltwcm9wXVxuICAgIH07XG4gIH0sXG4gIGRlZmluZVByb3BlcnR5KCkge1xuICAgIGRpZSgxMSk7XG4gIH0sXG4gIGdldFByb3RvdHlwZU9mKHN0YXRlKSB7XG4gICAgcmV0dXJuIGdldFByb3RvdHlwZU9mKHN0YXRlLmJhc2VfKTtcbiAgfSxcbiAgc2V0UHJvdG90eXBlT2YoKSB7XG4gICAgZGllKDEyKTtcbiAgfVxufTtcbnZhciBhcnJheVRyYXBzID0ge307XG5lYWNoKG9iamVjdFRyYXBzLCAoa2V5LCBmbikgPT4ge1xuICBhcnJheVRyYXBzW2tleV0gPSBmdW5jdGlvbigpIHtcbiAgICBhcmd1bWVudHNbMF0gPSBhcmd1bWVudHNbMF1bMF07XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KTtcbmFycmF5VHJhcHMuZGVsZXRlUHJvcGVydHkgPSBmdW5jdGlvbihzdGF0ZSwgcHJvcCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzTmFOKHBhcnNlSW50KHByb3ApKSlcbiAgICBkaWUoMTMpO1xuICByZXR1cm4gYXJyYXlUcmFwcy5zZXQuY2FsbCh0aGlzLCBzdGF0ZSwgcHJvcCwgdm9pZCAwKTtcbn07XG5hcnJheVRyYXBzLnNldCA9IGZ1bmN0aW9uKHN0YXRlLCBwcm9wLCB2YWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHByb3AgIT09IFwibGVuZ3RoXCIgJiYgaXNOYU4ocGFyc2VJbnQocHJvcCkpKVxuICAgIGRpZSgxNCk7XG4gIHJldHVybiBvYmplY3RUcmFwcy5zZXQuY2FsbCh0aGlzLCBzdGF0ZVswXSwgcHJvcCwgdmFsdWUsIHN0YXRlWzBdKTtcbn07XG5mdW5jdGlvbiBwZWVrKGRyYWZ0LCBwcm9wKSB7XG4gIGNvbnN0IHN0YXRlID0gZHJhZnRbRFJBRlRfU1RBVEVdO1xuICBjb25zdCBzb3VyY2UgPSBzdGF0ZSA/IGxhdGVzdChzdGF0ZSkgOiBkcmFmdDtcbiAgcmV0dXJuIHNvdXJjZVtwcm9wXTtcbn1cbmZ1bmN0aW9uIHJlYWRQcm9wRnJvbVByb3RvKHN0YXRlLCBzb3VyY2UsIHByb3ApIHtcbiAgY29uc3QgZGVzYyA9IGdldERlc2NyaXB0b3JGcm9tUHJvdG8oc291cmNlLCBwcm9wKTtcbiAgcmV0dXJuIGRlc2MgPyBgdmFsdWVgIGluIGRlc2MgPyBkZXNjLnZhbHVlIDogKFxuICAgIC8vIFRoaXMgaXMgYSB2ZXJ5IHNwZWNpYWwgY2FzZSwgaWYgdGhlIHByb3AgaXMgYSBnZXR0ZXIgZGVmaW5lZCBieSB0aGVcbiAgICAvLyBwcm90b3R5cGUsIHdlIHNob3VsZCBpbnZva2UgaXQgd2l0aCB0aGUgZHJhZnQgYXMgY29udGV4dCFcbiAgICBkZXNjLmdldD8uY2FsbChzdGF0ZS5kcmFmdF8pXG4gICkgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBnZXREZXNjcmlwdG9yRnJvbVByb3RvKHNvdXJjZSwgcHJvcCkge1xuICBpZiAoIShwcm9wIGluIHNvdXJjZSkpXG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgbGV0IHByb3RvID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlKTtcbiAgd2hpbGUgKHByb3RvKSB7XG4gICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIHByb3ApO1xuICAgIGlmIChkZXNjKVxuICAgICAgcmV0dXJuIGRlc2M7XG4gICAgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cbiAgcmV0dXJuIHZvaWQgMDtcbn1cbmZ1bmN0aW9uIG1hcmtDaGFuZ2VkKHN0YXRlKSB7XG4gIGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG4gICAgc3RhdGUubW9kaWZpZWRfID0gdHJ1ZTtcbiAgICBpZiAoc3RhdGUucGFyZW50Xykge1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUucGFyZW50Xyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwcmVwYXJlQ29weShzdGF0ZSkge1xuICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgc3RhdGUuY29weV8gPSBzaGFsbG93Q29weShcbiAgICAgIHN0YXRlLmJhc2VfLFxuICAgICAgc3RhdGUuc2NvcGVfLmltbWVyXy51c2VTdHJpY3RTaGFsbG93Q29weV9cbiAgICApO1xuICB9XG59XG5cbi8vIHNyYy9jb3JlL2ltbWVyQ2xhc3MudHNcbnZhciBJbW1lcjIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuYXV0b0ZyZWV6ZV8gPSB0cnVlO1xuICAgIHRoaXMudXNlU3RyaWN0U2hhbGxvd0NvcHlfID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhlIGBwcm9kdWNlYCBmdW5jdGlvbiB0YWtlcyBhIHZhbHVlIGFuZCBhIFwicmVjaXBlIGZ1bmN0aW9uXCIgKHdob3NlXG4gICAgICogcmV0dXJuIHZhbHVlIG9mdGVuIGRlcGVuZHMgb24gdGhlIGJhc2Ugc3RhdGUpLiBUaGUgcmVjaXBlIGZ1bmN0aW9uIGlzXG4gICAgICogZnJlZSB0byBtdXRhdGUgaXRzIGZpcnN0IGFyZ3VtZW50IGhvd2V2ZXIgaXQgd2FudHMuIEFsbCBtdXRhdGlvbnMgYXJlXG4gICAgICogb25seSBldmVyIGFwcGxpZWQgdG8gYSBfX2NvcHlfXyBvZiB0aGUgYmFzZSBzdGF0ZS5cbiAgICAgKlxuICAgICAqIFBhc3Mgb25seSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFwiY3VycmllZCBwcm9kdWNlclwiIHdoaWNoIHJlbGlldmVzIHlvdVxuICAgICAqIGZyb20gcGFzc2luZyB0aGUgcmVjaXBlIGZ1bmN0aW9uIGV2ZXJ5IHRpbWUuXG4gICAgICpcbiAgICAgKiBPbmx5IHBsYWluIG9iamVjdHMgYW5kIGFycmF5cyBhcmUgbWFkZSBtdXRhYmxlLiBBbGwgb3RoZXIgb2JqZWN0cyBhcmVcbiAgICAgKiBjb25zaWRlcmVkIHVuY29weWFibGUuXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIGZ1bmN0aW9uIGlzIF9fYm91bmRfXyB0byBpdHMgYEltbWVyYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBiYXNlIC0gdGhlIGluaXRpYWwgc3RhdGVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWNpcGUgLSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgcHJveHkgb2YgdGhlIGJhc2Ugc3RhdGUgYXMgZmlyc3QgYXJndW1lbnQgYW5kIHdoaWNoIGNhbiBiZSBmcmVlbHkgbW9kaWZpZWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXRjaExpc3RlbmVyIC0gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIGFsbCB0aGUgcGF0Y2hlcyBwcm9kdWNlZCBoZXJlXG4gICAgICogQHJldHVybnMge2FueX0gYSBuZXcgc3RhdGUsIG9yIHRoZSBpbml0aWFsIHN0YXRlIGlmIG5vdGhpbmcgd2FzIG1vZGlmaWVkXG4gICAgICovXG4gICAgdGhpcy5wcm9kdWNlID0gKGJhc2UsIHJlY2lwZSwgcGF0Y2hMaXN0ZW5lcikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHJlY2lwZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRCYXNlID0gcmVjaXBlO1xuICAgICAgICByZWNpcGUgPSBiYXNlO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWRQcm9kdWNlKGJhc2UyID0gZGVmYXVsdEJhc2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5wcm9kdWNlKGJhc2UyLCAoZHJhZnQpID0+IHJlY2lwZS5jYWxsKHRoaXMsIGRyYWZ0LCAuLi5hcmdzKSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlY2lwZSAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBkaWUoNik7XG4gICAgICBpZiAocGF0Y2hMaXN0ZW5lciAhPT0gdm9pZCAwICYmIHR5cGVvZiBwYXRjaExpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGRpZSg3KTtcbiAgICAgIGxldCByZXN1bHQ7XG4gICAgICBpZiAoaXNEcmFmdGFibGUoYmFzZSkpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBlbnRlclNjb3BlKHRoaXMpO1xuICAgICAgICBjb25zdCBwcm94eSA9IGNyZWF0ZVByb3h5KGJhc2UsIHZvaWQgMCk7XG4gICAgICAgIGxldCBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVjaXBlKHByb3h5KTtcbiAgICAgICAgICBoYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChoYXNFcnJvcilcbiAgICAgICAgICAgIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHJlc3VsdCwgc2NvcGUpO1xuICAgICAgfSBlbHNlIGlmICghYmFzZSB8fCB0eXBlb2YgYmFzZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXN1bHQgPSByZWNpcGUoYmFzZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMClcbiAgICAgICAgICByZXN1bHQgPSBiYXNlO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBOT1RISU5HKVxuICAgICAgICAgIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0ZyZWV6ZV8pXG4gICAgICAgICAgZnJlZXplKHJlc3VsdCwgdHJ1ZSk7XG4gICAgICAgIGlmIChwYXRjaExpc3RlbmVyKSB7XG4gICAgICAgICAgY29uc3QgcCA9IFtdO1xuICAgICAgICAgIGNvbnN0IGlwID0gW107XG4gICAgICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oYmFzZSwgcmVzdWx0LCBwLCBpcCk7XG4gICAgICAgICAgcGF0Y2hMaXN0ZW5lcihwLCBpcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gZWxzZVxuICAgICAgICBkaWUoMSwgYmFzZSk7XG4gICAgfTtcbiAgICB0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyA9IChiYXNlLCByZWNpcGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiAoc3RhdGUsIC4uLmFyZ3MpID0+IHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzKHN0YXRlLCAoZHJhZnQpID0+IGJhc2UoZHJhZnQsIC4uLmFyZ3MpKTtcbiAgICAgIH1cbiAgICAgIGxldCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvZHVjZShiYXNlLCByZWNpcGUsIChwLCBpcCkgPT4ge1xuICAgICAgICBwYXRjaGVzID0gcDtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMgPSBpcDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtyZXN1bHQsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzXTtcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgY29uZmlnPy5hdXRvRnJlZXplID09PSBcImJvb2xlYW5cIilcbiAgICAgIHRoaXMuc2V0QXV0b0ZyZWV6ZShjb25maWcuYXV0b0ZyZWV6ZSk7XG4gICAgaWYgKHR5cGVvZiBjb25maWc/LnVzZVN0cmljdFNoYWxsb3dDb3B5ID09PSBcImJvb2xlYW5cIilcbiAgICAgIHRoaXMuc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkoY29uZmlnLnVzZVN0cmljdFNoYWxsb3dDb3B5KTtcbiAgfVxuICBjcmVhdGVEcmFmdChiYXNlKSB7XG4gICAgaWYgKCFpc0RyYWZ0YWJsZShiYXNlKSlcbiAgICAgIGRpZSg4KTtcbiAgICBpZiAoaXNEcmFmdChiYXNlKSlcbiAgICAgIGJhc2UgPSBjdXJyZW50KGJhc2UpO1xuICAgIGNvbnN0IHNjb3BlID0gZW50ZXJTY29wZSh0aGlzKTtcbiAgICBjb25zdCBwcm94eSA9IGNyZWF0ZVByb3h5KGJhc2UsIHZvaWQgMCk7XG4gICAgcHJveHlbRFJBRlRfU1RBVEVdLmlzTWFudWFsXyA9IHRydWU7XG4gICAgbGVhdmVTY29wZShzY29wZSk7XG4gICAgcmV0dXJuIHByb3h5O1xuICB9XG4gIGZpbmlzaERyYWZ0KGRyYWZ0LCBwYXRjaExpc3RlbmVyKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBkcmFmdCAmJiBkcmFmdFtEUkFGVF9TVEFURV07XG4gICAgaWYgKCFzdGF0ZSB8fCAhc3RhdGUuaXNNYW51YWxfKVxuICAgICAgZGllKDkpO1xuICAgIGNvbnN0IHsgc2NvcGVfOiBzY29wZSB9ID0gc3RhdGU7XG4gICAgdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpO1xuICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHZvaWQgMCwgc2NvcGUpO1xuICB9XG4gIC8qKlxuICAgKiBQYXNzIHRydWUgdG8gYXV0b21hdGljYWxseSBmcmVlemUgYWxsIGNvcGllcyBjcmVhdGVkIGJ5IEltbWVyLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBhdXRvLWZyZWV6aW5nIGlzIGVuYWJsZWQuXG4gICAqL1xuICBzZXRBdXRvRnJlZXplKHZhbHVlKSB7XG4gICAgdGhpcy5hdXRvRnJlZXplXyA9IHZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBQYXNzIHRydWUgdG8gZW5hYmxlIHN0cmljdCBzaGFsbG93IGNvcHkuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGltbWVyIGRvZXMgbm90IGNvcHkgdGhlIG9iamVjdCBkZXNjcmlwdG9ycyBzdWNoIGFzIGdldHRlciwgc2V0dGVyIGFuZCBub24tZW51bXJhYmxlIHByb3BlcnRpZXMuXG4gICAqL1xuICBzZXRVc2VTdHJpY3RTaGFsbG93Q29weSh2YWx1ZSkge1xuICAgIHRoaXMudXNlU3RyaWN0U2hhbGxvd0NvcHlfID0gdmFsdWU7XG4gIH1cbiAgYXBwbHlQYXRjaGVzKGJhc2UsIHBhdGNoZXMpIHtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSBwYXRjaGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBwYXRjaCA9IHBhdGNoZXNbaV07XG4gICAgICBpZiAocGF0Y2gucGF0aC5sZW5ndGggPT09IDAgJiYgcGF0Y2gub3AgPT09IFwicmVwbGFjZVwiKSB7XG4gICAgICAgIGJhc2UgPSBwYXRjaC52YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIHBhdGNoZXMgPSBwYXRjaGVzLnNsaWNlKGkgKyAxKTtcbiAgICB9XG4gICAgY29uc3QgYXBwbHlQYXRjaGVzSW1wbCA9IGdldFBsdWdpbihcIlBhdGNoZXNcIikuYXBwbHlQYXRjaGVzXztcbiAgICBpZiAoaXNEcmFmdChiYXNlKSkge1xuICAgICAgcmV0dXJuIGFwcGx5UGF0Y2hlc0ltcGwoYmFzZSwgcGF0Y2hlcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb2R1Y2UoXG4gICAgICBiYXNlLFxuICAgICAgKGRyYWZ0KSA9PiBhcHBseVBhdGNoZXNJbXBsKGRyYWZ0LCBwYXRjaGVzKVxuICAgICk7XG4gIH1cbn07XG5mdW5jdGlvbiBjcmVhdGVQcm94eSh2YWx1ZSwgcGFyZW50KSB7XG4gIGNvbnN0IGRyYWZ0ID0gaXNNYXAodmFsdWUpID8gZ2V0UGx1Z2luKFwiTWFwU2V0XCIpLnByb3h5TWFwXyh2YWx1ZSwgcGFyZW50KSA6IGlzU2V0KHZhbHVlKSA/IGdldFBsdWdpbihcIk1hcFNldFwiKS5wcm94eVNldF8odmFsdWUsIHBhcmVudCkgOiBjcmVhdGVQcm94eVByb3h5KHZhbHVlLCBwYXJlbnQpO1xuICBjb25zdCBzY29wZSA9IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKTtcbiAgc2NvcGUuZHJhZnRzXy5wdXNoKGRyYWZ0KTtcbiAgcmV0dXJuIGRyYWZ0O1xufVxuXG4vLyBzcmMvY29yZS9jdXJyZW50LnRzXG5mdW5jdGlvbiBjdXJyZW50KHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdCh2YWx1ZSkpXG4gICAgZGllKDEwLCB2YWx1ZSk7XG4gIHJldHVybiBjdXJyZW50SW1wbCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBjdXJyZW50SW1wbCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnRhYmxlKHZhbHVlKSB8fCBpc0Zyb3plbih2YWx1ZSkpXG4gICAgcmV0dXJuIHZhbHVlO1xuICBjb25zdCBzdGF0ZSA9IHZhbHVlW0RSQUZUX1NUQVRFXTtcbiAgbGV0IGNvcHk7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICghc3RhdGUubW9kaWZpZWRfKVxuICAgICAgcmV0dXJuIHN0YXRlLmJhc2VfO1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSB0cnVlO1xuICAgIGNvcHkgPSBzaGFsbG93Q29weSh2YWx1ZSwgc3RhdGUuc2NvcGVfLmltbWVyXy51c2VTdHJpY3RTaGFsbG93Q29weV8pO1xuICB9IGVsc2Uge1xuICAgIGNvcHkgPSBzaGFsbG93Q29weSh2YWx1ZSwgdHJ1ZSk7XG4gIH1cbiAgZWFjaChjb3B5LCAoa2V5LCBjaGlsZFZhbHVlKSA9PiB7XG4gICAgc2V0KGNvcHksIGtleSwgY3VycmVudEltcGwoY2hpbGRWYWx1ZSkpO1xuICB9KTtcbiAgaWYgKHN0YXRlKSB7XG4gICAgc3RhdGUuZmluYWxpemVkXyA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBjb3B5O1xufVxuXG4vLyBzcmMvcGx1Z2lucy9wYXRjaGVzLnRzXG5mdW5jdGlvbiBlbmFibGVQYXRjaGVzKCkge1xuICBjb25zdCBlcnJvck9mZnNldCA9IDE2O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZXJyb3JzLnB1c2goXG4gICAgICAnU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsXG4gICAgICBmdW5jdGlvbihvcCkge1xuICAgICAgICByZXR1cm4gXCJVbnN1cHBvcnRlZCBwYXRjaCBvcGVyYXRpb246IFwiICsgb3A7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIiArIHBhdGg7XG4gICAgICB9LFxuICAgICAgXCJQYXRjaGluZyByZXNlcnZlZCBhdHRyaWJ1dGVzIGxpa2UgX19wcm90b19fLCBwcm90b3R5cGUgYW5kIGNvbnN0cnVjdG9yIGlzIG5vdCBhbGxvd2VkXCJcbiAgICApO1xuICB9XG4gIGNvbnN0IFJFUExBQ0UgPSBcInJlcGxhY2VcIjtcbiAgY29uc3QgQUREID0gXCJhZGRcIjtcbiAgY29uc3QgUkVNT1ZFID0gXCJyZW1vdmVcIjtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYXRjaGVzXyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgc3dpdGNoIChzdGF0ZS50eXBlXykge1xuICAgICAgY2FzZSAwIC8qIE9iamVjdCAqLzpcbiAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgICAgcGF0Y2hlcyxcbiAgICAgICAgICBpbnZlcnNlUGF0Y2hlc1xuICAgICAgICApO1xuICAgICAgY2FzZSAxIC8qIEFycmF5ICovOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcyk7XG4gICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVTZXRQYXRjaGVzKFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGJhc2VQYXRoLFxuICAgICAgICAgIHBhdGNoZXMsXG4gICAgICAgICAgaW52ZXJzZVBhdGNoZXNcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIGxldCB7IGJhc2VfLCBhc3NpZ25lZF8gfSA9IHN0YXRlO1xuICAgIGxldCBjb3B5XyA9IHN0YXRlLmNvcHlfO1xuICAgIGlmIChjb3B5Xy5sZW5ndGggPCBiYXNlXy5sZW5ndGgpIHtcbiAgICAgIDtcbiAgICAgIFtiYXNlXywgY29weV9dID0gW2NvcHlfLCBiYXNlX107XG4gICAgICBbcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXNdID0gW2ludmVyc2VQYXRjaGVzLCBwYXRjaGVzXTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXNlXy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFzc2lnbmVkX1tpXSAmJiBjb3B5X1tpXSAhPT0gYmFzZV9baV0pIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgLy8gTmVlZCB0byBtYXliZSBjbG9uZSBpdCwgYXMgaXQgY2FuIGluIGZhY3QgYmUgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgICAgLy8gZHVlIHRvIHRoZSBiYXNlL2NvcHkgaW52ZXJzaW9uIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uXG4gICAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGNvcHlfW2ldKVxuICAgICAgICB9KTtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoYmFzZV9baV0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gYmFzZV8ubGVuZ3RoOyBpIDwgY29weV8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgIG9wOiBBREQsXG4gICAgICAgIHBhdGgsXG4gICAgICAgIC8vIE5lZWQgdG8gbWF5YmUgY2xvbmUgaXQsIGFzIGl0IGNhbiBpbiBmYWN0IGJlIHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAvLyBkdWUgdG8gdGhlIGJhc2UvY29weSBpbnZlcnNpb24gYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGNvcHlfW2ldKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBjb3B5Xy5sZW5ndGggLSAxOyBiYXNlXy5sZW5ndGggPD0gaTsgLS1pKSB7XG4gICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgb3A6IFJFTU9WRSxcbiAgICAgICAgcGF0aFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGF0Y2hlc0Zyb21Bc3NpZ25lZChzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgY29uc3QgeyBiYXNlXywgY29weV8gfSA9IHN0YXRlO1xuICAgIGVhY2goc3RhdGUuYXNzaWduZWRfLCAoa2V5LCBhc3NpZ25lZFZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnVmFsdWUgPSBnZXQoYmFzZV8sIGtleSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldChjb3B5Xywga2V5KTtcbiAgICAgIGNvbnN0IG9wID0gIWFzc2lnbmVkVmFsdWUgPyBSRU1PVkUgOiBoYXMoYmFzZV8sIGtleSkgPyBSRVBMQUNFIDogQUREO1xuICAgICAgaWYgKG9yaWdWYWx1ZSA9PT0gdmFsdWUgJiYgb3AgPT09IFJFUExBQ0UpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoa2V5KTtcbiAgICAgIHBhdGNoZXMucHVzaChvcCA9PT0gUkVNT1ZFID8geyBvcCwgcGF0aCB9IDogeyBvcCwgcGF0aCwgdmFsdWUgfSk7XG4gICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKFxuICAgICAgICBvcCA9PT0gQUREID8geyBvcDogUkVNT1ZFLCBwYXRoIH0gOiBvcCA9PT0gUkVNT1ZFID8geyBvcDogQURELCBwYXRoLCB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob3JpZ1ZhbHVlKSB9IDogeyBvcDogUkVQTEFDRSwgcGF0aCwgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9yaWdWYWx1ZSkgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZVNldFBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIGxldCB7IGJhc2VfLCBjb3B5XyB9ID0gc3RhdGU7XG4gICAgbGV0IGkgPSAwO1xuICAgIGJhc2VfLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoIWNvcHlfLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMudW5zaGlmdCh7XG4gICAgICAgICAgb3A6IEFERCxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuICAgIGkgPSAwO1xuICAgIGNvcHlfLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoIWJhc2VfLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBBREQsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMudW5zaGlmdCh7XG4gICAgICAgICAgb3A6IFJFTU9WRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhiYXNlVmFsdWUsIHJlcGxhY2VtZW50LCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICBvcDogUkVQTEFDRSxcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgdmFsdWU6IHJlcGxhY2VtZW50ID09PSBOT1RISU5HID8gdm9pZCAwIDogcmVwbGFjZW1lbnRcbiAgICB9KTtcbiAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgcGF0aDogW10sXG4gICAgICB2YWx1ZTogYmFzZVZhbHVlXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYXBwbHlQYXRjaGVzXyhkcmFmdCwgcGF0Y2hlcykge1xuICAgIHBhdGNoZXMuZm9yRWFjaCgocGF0Y2gpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aCwgb3AgfSA9IHBhdGNoO1xuICAgICAgbGV0IGJhc2UgPSBkcmFmdDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGFyZW50VHlwZSA9IGdldEFyY2h0eXBlKGJhc2UpO1xuICAgICAgICBsZXQgcCA9IHBhdGhbaV07XG4gICAgICAgIGlmICh0eXBlb2YgcCAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHAgPSBcIlwiICsgcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHBhcmVudFR5cGUgPT09IDAgLyogT2JqZWN0ICovIHx8IHBhcmVudFR5cGUgPT09IDEgLyogQXJyYXkgKi8pICYmIChwID09PSBcIl9fcHJvdG9fX1wiIHx8IHAgPT09IFwiY29uc3RydWN0b3JcIikpXG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMyk7XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHAgPT09IFwicHJvdG90eXBlXCIpXG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMyk7XG4gICAgICAgIGJhc2UgPSBnZXQoYmFzZSwgcCk7XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAyLCBwYXRoLmpvaW4oXCIvXCIpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHR5cGUgPSBnZXRBcmNodHlwZShiYXNlKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGVlcENsb25lUGF0Y2hWYWx1ZShwYXRjaC52YWx1ZSk7XG4gICAgICBjb25zdCBrZXkgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgICBzd2l0Y2ggKG9wKSB7XG4gICAgICAgIGNhc2UgUkVQTEFDRTpcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgICAgICAgIGRpZShlcnJvck9mZnNldCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIEFERDpcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMSAvKiBBcnJheSAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gXCItXCIgPyBiYXNlLnB1c2godmFsdWUpIDogYmFzZS5zcGxpY2Uoa2V5LCAwLCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5hZGQodmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Vba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBSRU1PVkU6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDEgLyogQXJyYXkgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLnNwbGljZShrZXksIDEpO1xuICAgICAgICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5kZWxldGUocGF0Y2gudmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZSBiYXNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDEsIG9wKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZHJhZnQ7XG4gIH1cbiAgZnVuY3Rpb24gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmopIHtcbiAgICBpZiAoIWlzRHJhZnRhYmxlKG9iaikpXG4gICAgICByZXR1cm4gb2JqO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpXG4gICAgICByZXR1cm4gb2JqLm1hcChkZWVwQ2xvbmVQYXRjaFZhbHVlKTtcbiAgICBpZiAoaXNNYXAob2JqKSlcbiAgICAgIHJldHVybiBuZXcgTWFwKFxuICAgICAgICBBcnJheS5mcm9tKG9iai5lbnRyaWVzKCkpLm1hcCgoW2ssIHZdKSA9PiBbaywgZGVlcENsb25lUGF0Y2hWYWx1ZSh2KV0pXG4gICAgICApO1xuICAgIGlmIChpc1NldChvYmopKVxuICAgICAgcmV0dXJuIG5ldyBTZXQoQXJyYXkuZnJvbShvYmopLm1hcChkZWVwQ2xvbmVQYXRjaFZhbHVlKSk7XG4gICAgY29uc3QgY2xvbmVkID0gT2JqZWN0LmNyZWF0ZShnZXRQcm90b3R5cGVPZihvYmopKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopXG4gICAgICBjbG9uZWRba2V5XSA9IGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqW2tleV0pO1xuICAgIGlmIChoYXMob2JqLCBEUkFGVEFCTEUpKVxuICAgICAgY2xvbmVkW0RSQUZUQUJMRV0gPSBvYmpbRFJBRlRBQkxFXTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG4gIGZ1bmN0aW9uIGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9iaikge1xuICAgIGlmIChpc0RyYWZ0KG9iaikpIHtcbiAgICAgIHJldHVybiBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9iaik7XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gb2JqO1xuICB9XG4gIGxvYWRQbHVnaW4oXCJQYXRjaGVzXCIsIHtcbiAgICBhcHBseVBhdGNoZXNfLFxuICAgIGdlbmVyYXRlUGF0Y2hlc18sXG4gICAgZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfXG4gIH0pO1xufVxuXG4vLyBzcmMvcGx1Z2lucy9tYXBzZXQudHNcbmZ1bmN0aW9uIGVuYWJsZU1hcFNldCgpIHtcbiAgY2xhc3MgRHJhZnRNYXAgZXh0ZW5kcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpc1tEUkFGVF9TVEFURV0gPSB7XG4gICAgICAgIHR5cGVfOiAyIC8qIE1hcCAqLyxcbiAgICAgICAgcGFyZW50XzogcGFyZW50LFxuICAgICAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAgICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAgICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgICAgIGNvcHlfOiB2b2lkIDAsXG4gICAgICAgIGFzc2lnbmVkXzogdm9pZCAwLFxuICAgICAgICBiYXNlXzogdGFyZ2V0LFxuICAgICAgICBkcmFmdF86IHRoaXMsXG4gICAgICAgIGlzTWFudWFsXzogZmFsc2UsXG4gICAgICAgIHJldm9rZWRfOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5zaXplO1xuICAgIH1cbiAgICBoYXMoa2V5KSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5oYXMoa2V5KTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKCFsYXRlc3Qoc3RhdGUpLmhhcyhrZXkpIHx8IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSkgIT09IHZhbHVlKSB7XG4gICAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgdHJ1ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlbGV0ZShrZXkpIHtcbiAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgIGlmIChzdGF0ZS5iYXNlXy5oYXMoa2V5KSkge1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgc3RhdGUuY29weV8uZGVsZXRlKGtleSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmIChsYXRlc3Qoc3RhdGUpLnNpemUpIHtcbiAgICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICAgIGVhY2goc3RhdGUuYmFzZV8sIChrZXkpID0+IHtcbiAgICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3RhdGUuY29weV8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yRWFjaChjYiwgdGhpc0FyZykge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGxhdGVzdChzdGF0ZSkuZm9yRWFjaCgoX3ZhbHVlLCBrZXksIF9tYXApID0+IHtcbiAgICAgICAgY2IuY2FsbCh0aGlzQXJnLCB0aGlzLmdldChrZXkpLCBrZXksIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgY29uc3QgdmFsdWUgPSBsYXRlc3Qoc3RhdGUpLmdldChrZXkpO1xuICAgICAgaWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgIT09IHN0YXRlLmJhc2VfLmdldChrZXkpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRyYWZ0ID0gY3JlYXRlUHJveHkodmFsdWUsIHN0YXRlKTtcbiAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgIHN0YXRlLmNvcHlfLnNldChrZXksIGRyYWZ0KTtcbiAgICAgIHJldHVybiBkcmFmdDtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLmtleXMoKTtcbiAgICB9XG4gICAgdmFsdWVzKCkge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLmtleXMoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB0aGlzLnZhbHVlcygpLFxuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoci5kb25lKVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldChyLnZhbHVlKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGVudHJpZXMoKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXMua2V5cygpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHRoaXMuZW50cmllcygpLFxuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoci5kb25lKVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldChyLnZhbHVlKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogW3IudmFsdWUsIHZhbHVlXVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIFsoRFJBRlRfU1RBVEUsIFN5bWJvbC5pdGVyYXRvcildKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwcm94eU1hcF8odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWZ0TWFwKHRhcmdldCwgcGFyZW50KTtcbiAgfVxuICBmdW5jdGlvbiBwcmVwYXJlTWFwQ29weShzdGF0ZSkge1xuICAgIGlmICghc3RhdGUuY29weV8pIHtcbiAgICAgIHN0YXRlLmFzc2lnbmVkXyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICBzdGF0ZS5jb3B5XyA9IG5ldyBNYXAoc3RhdGUuYmFzZV8pO1xuICAgIH1cbiAgfVxuICBjbGFzcyBEcmFmdFNldCBleHRlbmRzIFNldCB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzW0RSQUZUX1NUQVRFXSA9IHtcbiAgICAgICAgdHlwZV86IDMgLyogU2V0ICovLFxuICAgICAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgICAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgICAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAgICAgY29weV86IHZvaWQgMCxcbiAgICAgICAgYmFzZV86IHRhcmdldCxcbiAgICAgICAgZHJhZnRfOiB0aGlzLFxuICAgICAgICBkcmFmdHNfOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuICAgICAgICByZXZva2VkXzogZmFsc2UsXG4gICAgICAgIGlzTWFudWFsXzogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZTtcbiAgICB9XG4gICAgaGFzKHZhbHVlKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmICghc3RhdGUuY29weV8pIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmJhc2VfLmhhcyh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUuY29weV8uaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpICYmIHN0YXRlLmNvcHlfLmhhcyhzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYWRkKHZhbHVlKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlbGV0ZSh2YWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8uZGVsZXRlKHZhbHVlKSB8fCAoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpID8gc3RhdGUuY29weV8uZGVsZXRlKHN0YXRlLmRyYWZ0c18uZ2V0KHZhbHVlKSkgOiAoXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGZhbHNlXG4gICAgICApKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmIChsYXRlc3Qoc3RhdGUpLnNpemUpIHtcbiAgICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlcygpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLnZhbHVlcygpO1xuICAgIH1cbiAgICBlbnRyaWVzKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8uZW50cmllcygpO1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfVxuICAgIFsoRFJBRlRfU1RBVEUsIFN5bWJvbC5pdGVyYXRvcildKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfVxuICAgIGZvckVhY2goY2IsIHRoaXNBcmcpIHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpcy52YWx1ZXMoKTtcbiAgICAgIGxldCByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIGNiLmNhbGwodGhpc0FyZywgcmVzdWx0LnZhbHVlLCByZXN1bHQudmFsdWUsIHRoaXMpO1xuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHByb3h5U2V0Xyh0YXJnZXQsIHBhcmVudCkge1xuICAgIHJldHVybiBuZXcgRHJhZnRTZXQodGFyZ2V0LCBwYXJlbnQpO1xuICB9XG4gIGZ1bmN0aW9uIHByZXBhcmVTZXRDb3B5KHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgc3RhdGUuY29weV8gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgc3RhdGUuYmFzZV8uZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKGlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgICAgIGNvbnN0IGRyYWZ0ID0gY3JlYXRlUHJveHkodmFsdWUsIHN0YXRlKTtcbiAgICAgICAgICBzdGF0ZS5kcmFmdHNfLnNldCh2YWx1ZSwgZHJhZnQpO1xuICAgICAgICAgIHN0YXRlLmNvcHlfLmFkZChkcmFmdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUuY29weV8uYWRkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5yZXZva2VkXylcbiAgICAgIGRpZSgzLCBKU09OLnN0cmluZ2lmeShsYXRlc3Qoc3RhdGUpKSk7XG4gIH1cbiAgbG9hZFBsdWdpbihcIk1hcFNldFwiLCB7IHByb3h5TWFwXywgcHJveHlTZXRfIH0pO1xufVxuXG4vLyBzcmMvaW1tZXIudHNcbnZhciBpbW1lciA9IG5ldyBJbW1lcjIoKTtcbnZhciBwcm9kdWNlID0gaW1tZXIucHJvZHVjZTtcbnZhciBwcm9kdWNlV2l0aFBhdGNoZXMgPSBpbW1lci5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZChcbiAgaW1tZXJcbik7XG52YXIgc2V0QXV0b0ZyZWV6ZSA9IGltbWVyLnNldEF1dG9GcmVlemUuYmluZChpbW1lcik7XG52YXIgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkgPSBpbW1lci5zZXRVc2VTdHJpY3RTaGFsbG93Q29weS5iaW5kKGltbWVyKTtcbnZhciBhcHBseVBhdGNoZXMgPSBpbW1lci5hcHBseVBhdGNoZXMuYmluZChpbW1lcik7XG52YXIgY3JlYXRlRHJhZnQgPSBpbW1lci5jcmVhdGVEcmFmdC5iaW5kKGltbWVyKTtcbnZhciBmaW5pc2hEcmFmdCA9IGltbWVyLmZpbmlzaERyYWZ0LmJpbmQoaW1tZXIpO1xuZnVuY3Rpb24gY2FzdERyYWZ0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNhc3RJbW11dGFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gIEltbWVyLFxuICBhcHBseVBhdGNoZXMsXG4gIGNhc3REcmFmdCxcbiAgY2FzdEltbXV0YWJsZSxcbiAgY3JlYXRlRHJhZnQsXG4gIGN1cnJlbnQsXG4gIGVuYWJsZU1hcFNldCxcbiAgZW5hYmxlUGF0Y2hlcyxcbiAgZmluaXNoRHJhZnQsXG4gIGZyZWV6ZSxcbiAgaW1tZXJhYmxlLFxuICBpc0RyYWZ0LFxuICBpc0RyYWZ0YWJsZSxcbiAgbm90aGluZyxcbiAgb3JpZ2luYWwsXG4gIHByb2R1Y2UsXG4gIHByb2R1Y2VXaXRoUGF0Y2hlcyxcbiAgc2V0QXV0b0ZyZWV6ZSxcbiAgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHlcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1tZXIuY2pzLmRldmVsb3BtZW50LmpzLm1hcCIsIlxuJ3VzZSBzdHJpY3QnXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbW1lci5janMucHJvZHVjdGlvbi5qcycpXG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW1tZXIuY2pzLmRldmVsb3BtZW50LmpzJylcbn0iLCJ2YXIgZT1yZXF1aXJlKFwiaW1tZXJcIikscj1yZXF1aXJlKFwicmVhY3RcIik7ZXhwb3J0cy51c2VJbW1lcj1mdW5jdGlvbih1KXt2YXIgbj1yLnVzZVN0YXRlKGZ1bmN0aW9uKCl7cmV0dXJuIGUuZnJlZXplKFwiZnVuY3Rpb25cIj09dHlwZW9mIHU/dSgpOnUsITApfSksdD1uWzFdO3JldHVybltuWzBdLHIudXNlQ2FsbGJhY2soZnVuY3Rpb24ocil7dChcImZ1bmN0aW9uXCI9PXR5cGVvZiByP2UucHJvZHVjZShyKTplLmZyZWV6ZShyKSl9LFtdKV19LGV4cG9ydHMudXNlSW1tZXJSZWR1Y2VyPWZ1bmN0aW9uKHUsbix0KXt2YXIgbz1yLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gZS5wcm9kdWNlKHUpfSxbdV0pO3JldHVybiByLnVzZVJlZHVjZXIobyxuLHQpfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbW1lci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy52ZXJzaW9uID0gZXhwb3J0cy52YWxpZGF0ZSA9IGV4cG9ydHMudjcgPSBleHBvcnRzLnY2VG9WMSA9IGV4cG9ydHMudjYgPSBleHBvcnRzLnY1ID0gZXhwb3J0cy52NCA9IGV4cG9ydHMudjMgPSBleHBvcnRzLnYxVG9WNiA9IGV4cG9ydHMudjEgPSBleHBvcnRzLnN0cmluZ2lmeSA9IGV4cG9ydHMucGFyc2UgPSBleHBvcnRzLk5JTCA9IGV4cG9ydHMuTUFYID0gdm9pZCAwO1xudmFyIG1heF9qc18xID0gcmVxdWlyZShcIi4vbWF4LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTUFYXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXhfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIG5pbF9qc18xID0gcmVxdWlyZShcIi4vbmlsLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTklMXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuaWxfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwYXJzZV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHJpbmdpZnlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0cmluZ2lmeV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjFfanNfMSA9IHJlcXVpcmUoXCIuL3YxLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYxX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2MVRvVjZfanNfMSA9IHJlcXVpcmUoXCIuL3YxVG9WNi5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxVG9WNlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjFUb1Y2X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2M19qc18xID0gcmVxdWlyZShcIi4vdjMuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2M1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjNfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY0X2pzXzEgPSByZXF1aXJlKFwiLi92NC5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2NF9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjVfanNfMSA9IHJlcXVpcmUoXCIuL3Y1LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY1X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2Nl9qc18xID0gcmVxdWlyZShcIi4vdjYuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjZfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY2VG9WMV9qc18xID0gcmVxdWlyZShcIi4vdjZUb1YxLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjZUb1YxXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2NlRvVjFfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY3X2pzXzEgPSByZXF1aXJlKFwiLi92Ny5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY3XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2N19qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFsaWRhdGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbGlkYXRlX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2ZXJzaW9uX2pzXzEgPSByZXF1aXJlKFwiLi92ZXJzaW9uLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmVyc2lvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmVyc2lvbl9qc18xLmRlZmF1bHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9ICdmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgICBjb25zdCB3b3JkcyA9IHVpbnQ4VG9VaW50MzIoYnl0ZXMpO1xuICAgIGNvbnN0IG1kNUJ5dGVzID0gd29yZHNUb01kNSh3b3JkcywgYnl0ZXMubGVuZ3RoICogOCk7XG4gICAgcmV0dXJuIHVpbnQzMlRvVWludDgobWQ1Qnl0ZXMpO1xufVxuZnVuY3Rpb24gdWludDMyVG9VaW50OChpbnB1dCkge1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoaW5wdXQubGVuZ3RoICogNCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGggKiA0OyBpKyspIHtcbiAgICAgICAgYnl0ZXNbaV0gPSAoaW5wdXRbaSA+PiAyXSA+Pj4gKChpICUgNCkgKiA4KSkgJiAweGZmO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXM7XG59XG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gICAgcmV0dXJuICgoKGlucHV0TGVuZ3RoOCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNCArIDE7XG59XG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAgIGNvbnN0IHhwYWQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbikpLmZpbGwoMCk7XG4gICAgeHBhZC5zZXQoeCk7XG4gICAgeHBhZFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgICB4cGFkW3hwYWQubGVuZ3RoIC0gMV0gPSBsZW47XG4gICAgeCA9IHhwYWQ7XG4gICAgbGV0IGEgPSAxNzMyNTg0MTkzO1xuICAgIGxldCBiID0gLTI3MTczMzg3OTtcbiAgICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICAgIGxldCBkID0gMjcxNzMzODc4O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICAgICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgICAgIGNvbnN0IG9sZGIgPSBiO1xuICAgICAgICBjb25zdCBvbGRjID0gYztcbiAgICAgICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICAgICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgICAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICAgICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gICAgfVxuICAgIHJldHVybiBVaW50MzJBcnJheS5vZihhLCBiLCBjLCBkKTtcbn1cbmZ1bmN0aW9uIHVpbnQ4VG9VaW50MzIoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkoKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChpbnB1dC5sZW5ndGggKiA4KSkuZmlsbCgwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG91dHB1dFtpID4+IDJdIHw9IChpbnB1dFtpXSAmIDB4ZmYpIDw8ICgoaSAlIDQpICogOCk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgICBjb25zdCBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gICAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gICAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4ZmZmZik7XG59XG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gICAgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpO1xufVxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKChiICYgYykgfCAofmIgJiBkKSwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbigoYiAmIGQpIHwgKGMgJiB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtZDU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnRzLmRlZmF1bHQgPSB7IHJhbmRvbVVVSUQgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgICBpZiAoISgwLCB2YWxpZGF0ZV9qc18xLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gICAgfVxuICAgIGxldCB2O1xuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKCh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQsICh2ID4+PiAxNikgJiAweGZmLCAodiA+Pj4gOCkgJiAweGZmLCB2ICYgMHhmZiwgKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gOCwgdiAmIDB4ZmYsICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4LCB2ICYgMHhmZiwgKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDgsIHYgJiAweGZmLCAoKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwKSAmIDB4ZmYsICh2IC8gMHgxMDAwMDAwMDApICYgMHhmZiwgKHYgPj4+IDI0KSAmIDB4ZmYsICh2ID4+PiAxNikgJiAweGZmLCAodiA+Pj4gOCkgJiAweGZmLCB2ICYgMHhmZik7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBwYXJzZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJyB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHJuZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gICAgc3dpdGNoIChzKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAoeCAmIHkpIF4gKH54ICYgeik7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiAoeCAmIHkpIF4gKHggJiB6KSBeICh5ICYgeik7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gICAgfVxufVxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gICAgcmV0dXJuICh4IDw8IG4pIHwgKHggPj4+ICgzMiAtIG4pKTtcbn1cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICAgIGNvbnN0IEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG4gICAgY29uc3QgbmV3Qnl0ZXMgPSBuZXcgVWludDhBcnJheShieXRlcy5sZW5ndGggKyAxKTtcbiAgICBuZXdCeXRlcy5zZXQoYnl0ZXMpO1xuICAgIG5ld0J5dGVzW2J5dGVzLmxlbmd0aF0gPSAweDgwO1xuICAgIGJ5dGVzID0gbmV3Qnl0ZXM7XG4gICAgY29uc3QgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICAgIGNvbnN0IE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgICAgICAgYXJyW2pdID1cbiAgICAgICAgICAgICAgICAoYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0KSB8XG4gICAgICAgICAgICAgICAgICAgIChieXRlc1tpICogNjQgKyBqICogNCArIDFdIDw8IDE2KSB8XG4gICAgICAgICAgICAgICAgICAgIChieXRlc1tpICogNjQgKyBqICogNCArIDJdIDw8IDgpIHxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICAgICAgfVxuICAgICAgICBNW2ldID0gYXJyO1xuICAgIH1cbiAgICBNW04gLSAxXVsxNF0gPSAoKGJ5dGVzLmxlbmd0aCAtIDEpICogOCkgLyBNYXRoLnBvdygyLCAzMik7XG4gICAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICAgIE1bTiAtIDFdWzE1XSA9ICgoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4KSAmIDB4ZmZmZmZmZmY7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICAgICAgY29uc3QgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGEgPSBIWzBdO1xuICAgICAgICBsZXQgYiA9IEhbMV07XG4gICAgICAgIGxldCBjID0gSFsyXTtcbiAgICAgICAgbGV0IGQgPSBIWzNdO1xuICAgICAgICBsZXQgZSA9IEhbNF07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgICAgICAgIGNvbnN0IFQgPSAoUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbdF0pID4+PiAwO1xuICAgICAgICAgICAgZSA9IGQ7XG4gICAgICAgICAgICBkID0gYztcbiAgICAgICAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgICAgICAgIGIgPSBhO1xuICAgICAgICAgICAgYSA9IFQ7XG4gICAgICAgIH1cbiAgICAgICAgSFswXSA9IChIWzBdICsgYSkgPj4+IDA7XG4gICAgICAgIEhbMV0gPSAoSFsxXSArIGIpID4+PiAwO1xuICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSA+Pj4gMDtcbiAgICAgICAgSFszXSA9IChIWzNdICsgZCkgPj4+IDA7XG4gICAgICAgIEhbNF0gPSAoSFs0XSArIGUpID4+PiAwO1xuICAgIH1cbiAgICByZXR1cm4gVWludDhBcnJheS5vZihIWzBdID4+IDI0LCBIWzBdID4+IDE2LCBIWzBdID4+IDgsIEhbMF0sIEhbMV0gPj4gMjQsIEhbMV0gPj4gMTYsIEhbMV0gPj4gOCwgSFsxXSwgSFsyXSA+PiAyNCwgSFsyXSA+PiAxNiwgSFsyXSA+PiA4LCBIWzJdLCBIWzNdID4+IDI0LCBIWzNdID4+IDE2LCBIWzNdID4+IDgsIEhbM10sIEhbNF0gPj4gMjQsIEhbNF0gPj4gMTYsIEhbNF0gPj4gOCwgSFs0XSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBzaGExO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHZvaWQgMDtcbmNvbnN0IHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5mdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmV4cG9ydHMudW5zYWZlU3RyaW5naWZ5ID0gdW5zYWZlU3RyaW5naWZ5O1xuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghKDAsIHZhbGlkYXRlX2pzXzEuZGVmYXVsdCkodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBzdHJpbmdpZnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXBkYXRlVjFTdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IHJuZ19qc18xID0gcmVxdWlyZShcIi4vcm5nLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5jb25zdCBfc3RhdGUgPSB7fTtcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgbGV0IGJ5dGVzO1xuICAgIGNvbnN0IGlzVjYgPSBvcHRpb25zPy5fdjYgPz8gZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uc0tleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnNLZXlzLmxlbmd0aCA9PT0gMSAmJiBvcHRpb25zS2V5c1swXSA9PT0gJ192NicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgYnl0ZXMgPSB2MUJ5dGVzKG9wdGlvbnMucmFuZG9tID8/IG9wdGlvbnMucm5nPy4oKSA/PyAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKSwgb3B0aW9ucy5tc2Vjcywgb3B0aW9ucy5uc2Vjcywgb3B0aW9ucy5jbG9ja3NlcSwgb3B0aW9ucy5ub2RlLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBybmRzID0gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCk7XG4gICAgICAgIHVwZGF0ZVYxU3RhdGUoX3N0YXRlLCBub3csIHJuZHMpO1xuICAgICAgICBieXRlcyA9IHYxQnl0ZXMocm5kcywgX3N0YXRlLm1zZWNzLCBfc3RhdGUubnNlY3MsIGlzVjYgPyB1bmRlZmluZWQgOiBfc3RhdGUuY2xvY2tzZXEsIGlzVjYgPyB1bmRlZmluZWQgOiBfc3RhdGUubm9kZSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmID8/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVYxU3RhdGUoc3RhdGUsIG5vdywgcm5kcykge1xuICAgIHN0YXRlLm1zZWNzID8/PSAtSW5maW5pdHk7XG4gICAgc3RhdGUubnNlY3MgPz89IDA7XG4gICAgaWYgKG5vdyA9PT0gc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUubnNlY3MrKztcbiAgICAgICAgaWYgKHN0YXRlLm5zZWNzID49IDEwMDAwKSB7XG4gICAgICAgICAgICBzdGF0ZS5ub2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgc3RhdGUubnNlY3MgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vdyA+IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLm5zZWNzID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAobm93IDwgc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUubm9kZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKCFzdGF0ZS5ub2RlKSB7XG4gICAgICAgIHN0YXRlLm5vZGUgPSBybmRzLnNsaWNlKDEwLCAxNik7XG4gICAgICAgIHN0YXRlLm5vZGVbMF0gfD0gMHgwMTtcbiAgICAgICAgc3RhdGUuY2xvY2tzZXEgPSAoKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldKSAmIDB4M2ZmZjtcbiAgICB9XG4gICAgc3RhdGUubXNlY3MgPSBub3c7XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZXhwb3J0cy51cGRhdGVWMVN0YXRlID0gdXBkYXRlVjFTdGF0ZTtcbmZ1bmN0aW9uIHYxQnl0ZXMocm5kcywgbXNlY3MsIG5zZWNzLCBjbG9ja3NlcSwgbm9kZSwgYnVmLCBvZmZzZXQgPSAwKSB7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgaWYgKCFidWYpIHtcbiAgICAgICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMTYgPiBidWYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVVVJRCBieXRlIHJhbmdlICR7b2Zmc2V0fToke29mZnNldCArIDE1fSBpcyBvdXQgb2YgYnVmZmVyIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1zZWNzID8/PSBEYXRlLm5vdygpO1xuICAgIG5zZWNzID8/PSAwO1xuICAgIGNsb2Nrc2VxID8/PSAoKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldKSAmIDB4M2ZmZjtcbiAgICBub2RlID8/PSBybmRzLnNsaWNlKDEwLCAxNik7XG4gICAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG4gICAgY29uc3QgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bCA+Pj4gMjQpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRsID4+PiAxNikgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodGwgPj4+IDgpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gdGwgJiAweGZmO1xuICAgIGNvbnN0IHRtaCA9ICgobXNlY3MgLyAweDEwMDAwMDAwMCkgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bWggPj4+IDgpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gdG1oICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKCh0bWggPj4+IDI0KSAmIDB4ZikgfCAweDEwO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodG1oID4+PiAxNikgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoY2xvY2tzZXEgPj4+IDgpIHwgMHg4MDtcbiAgICBidWZbb2Zmc2V0KytdID0gY2xvY2tzZXEgJiAweGZmO1xuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQrK10gPSBub2RlW25dO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gdjFUb1Y2KHV1aWQpIHtcbiAgICBjb25zdCB2MUJ5dGVzID0gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkodXVpZCkgOiB1dWlkO1xuICAgIGNvbnN0IHY2Qnl0ZXMgPSBfdjFUb1Y2KHYxQnl0ZXMpO1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KSh2NkJ5dGVzKSA6IHY2Qnl0ZXM7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2MVRvVjY7XG5mdW5jdGlvbiBfdjFUb1Y2KHYxQnl0ZXMpIHtcbiAgICByZXR1cm4gVWludDhBcnJheS5vZigoKHYxQnl0ZXNbNl0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1s3XSA+PiA0KSAmIDB4MGYpLCAoKHYxQnl0ZXNbN10gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1s0XSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbNF0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1s1XSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbNV0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1swXSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbMF0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1sxXSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbMV0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1syXSAmIDB4ZjApID4+IDQpLCAweDYwIHwgKHYxQnl0ZXNbMl0gJiAweDBmKSwgdjFCeXRlc1szXSwgdjFCeXRlc1s4XSwgdjFCeXRlc1s5XSwgdjFCeXRlc1sxMF0sIHYxQnl0ZXNbMTFdLCB2MUJ5dGVzWzEyXSwgdjFCeXRlc1sxM10sIHYxQnl0ZXNbMTRdLCB2MUJ5dGVzWzE1XSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSB2b2lkIDA7XG5jb25zdCBtZDVfanNfMSA9IHJlcXVpcmUoXCIuL21kNS5qc1wiKTtcbmNvbnN0IHYzNV9qc18xID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xudmFyIHYzNV9qc18yID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRE5TXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5ETlM7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVUkxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLlVSTDsgfSB9KTtcbmZ1bmN0aW9uIHYzKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgcmV0dXJuICgwLCB2MzVfanNfMS5kZWZhdWx0KSgweDMwLCBtZDVfanNfMS5kZWZhdWx0LCB2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCk7XG59XG52My5ETlMgPSB2MzVfanNfMS5ETlM7XG52My5VUkwgPSB2MzVfanNfMS5VUkw7XG5leHBvcnRzLmRlZmF1bHQgPSB2MztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IGV4cG9ydHMuc3RyaW5nVG9CeXRlcyA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShzdHIubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgICAgICBieXRlc1tpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXM7XG59XG5leHBvcnRzLnN0cmluZ1RvQnl0ZXMgPSBzdHJpbmdUb0J5dGVzO1xuZXhwb3J0cy5ETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydHMuVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5mdW5jdGlvbiB2MzUodmVyc2lvbiwgaGFzaCwgdmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICBjb25zdCB2YWx1ZUJ5dGVzID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHN0cmluZ1RvQnl0ZXModmFsdWUpIDogdmFsdWU7XG4gICAgY29uc3QgbmFtZXNwYWNlQnl0ZXMgPSB0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJyA/ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKG5hbWVzcGFjZSkgOiBuYW1lc3BhY2U7XG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hbWVzcGFjZSA9ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuICAgIGlmIChuYW1lc3BhY2U/Lmxlbmd0aCAhPT0gMTYpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfVxuICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KDE2ICsgdmFsdWVCeXRlcy5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2VCeXRlcyk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlQnl0ZXMsIG5hbWVzcGFjZUJ5dGVzLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IChieXRlc1s2XSAmIDB4MGYpIHwgdmVyc2lvbjtcbiAgICBieXRlc1s4XSA9IChieXRlc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2MzU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG5hdGl2ZV9qc18xID0gcmVxdWlyZShcIi4vbmF0aXZlLmpzXCIpO1xuY29uc3Qgcm5nX2pzXzEgPSByZXF1aXJlKFwiLi9ybmcuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZV9qc18xLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVfanNfMS5kZWZhdWx0LnJhbmRvbVVVSUQoKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tID8/IG9wdGlvbnMucm5nPy4oKSA/PyAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKTtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDE2ID4gYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFVVSUQgYnl0ZSByYW5nZSAke29mZnNldH06JHtvZmZzZXQgKyAxNX0gaXMgb3V0IG9mIGJ1ZmZlciBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKHJuZHMpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSB2b2lkIDA7XG5jb25zdCBzaGExX2pzXzEgPSByZXF1aXJlKFwiLi9zaGExLmpzXCIpO1xuY29uc3QgdjM1X2pzXzEgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG52YXIgdjM1X2pzXzIgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJETlNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLkROUzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlVSTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuVVJMOyB9IH0pO1xuZnVuY3Rpb24gdjUodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gKDAsIHYzNV9qc18xLmRlZmF1bHQpKDB4NTAsIHNoYTFfanNfMS5kZWZhdWx0LCB2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCk7XG59XG52NS5ETlMgPSB2MzVfanNfMS5ETlM7XG52NS5VUkwgPSB2MzVfanNfMS5VUkw7XG5leHBvcnRzLmRlZmF1bHQgPSB2NTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5jb25zdCB2MV9qc18xID0gcmVxdWlyZShcIi4vdjEuanNcIik7XG5jb25zdCB2MVRvVjZfanNfMSA9IHJlcXVpcmUoXCIuL3YxVG9WNi5qc1wiKTtcbmZ1bmN0aW9uIHY2KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgb3B0aW9ucyA/Pz0ge307XG4gICAgb2Zmc2V0ID8/PSAwO1xuICAgIGxldCBieXRlcyA9ICgwLCB2MV9qc18xLmRlZmF1bHQpKHsgLi4ub3B0aW9ucywgX3Y2OiB0cnVlIH0sIG5ldyBVaW50OEFycmF5KDE2KSk7XG4gICAgYnl0ZXMgPSAoMCwgdjFUb1Y2X2pzXzEuZGVmYXVsdCkoYnl0ZXMpO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjY7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gdjZUb1YxKHV1aWQpIHtcbiAgICBjb25zdCB2NkJ5dGVzID0gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkodXVpZCkgOiB1dWlkO1xuICAgIGNvbnN0IHYxQnl0ZXMgPSBfdjZUb1YxKHY2Qnl0ZXMpO1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KSh2MUJ5dGVzKSA6IHYxQnl0ZXM7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NlRvVjE7XG5mdW5jdGlvbiBfdjZUb1YxKHY2Qnl0ZXMpIHtcbiAgICByZXR1cm4gVWludDhBcnJheS5vZigoKHY2Qnl0ZXNbM10gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1s0XSA+PiA0KSAmIDB4MGYpLCAoKHY2Qnl0ZXNbNF0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1s1XSAmIDB4ZjApID4+IDQpLCAoKHY2Qnl0ZXNbNV0gJiAweDBmKSA8PCA0KSB8ICh2NkJ5dGVzWzZdICYgMHgwZiksIHY2Qnl0ZXNbN10sICgodjZCeXRlc1sxXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzJdICYgMHhmMCkgPj4gNCksICgodjZCeXRlc1syXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzNdICYgMHhmMCkgPj4gNCksIDB4MTAgfCAoKHY2Qnl0ZXNbMF0gJiAweGYwKSA+PiA0KSwgKCh2NkJ5dGVzWzBdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbMV0gJiAweGYwKSA+PiA0KSwgdjZCeXRlc1s4XSwgdjZCeXRlc1s5XSwgdjZCeXRlc1sxMF0sIHY2Qnl0ZXNbMTFdLCB2NkJ5dGVzWzEyXSwgdjZCeXRlc1sxM10sIHY2Qnl0ZXNbMTRdLCB2NkJ5dGVzWzE1XSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXBkYXRlVjdTdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IHJuZ19qc18xID0gcmVxdWlyZShcIi4vcm5nLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5jb25zdCBfc3RhdGUgPSB7fTtcbmZ1bmN0aW9uIHY3KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgbGV0IGJ5dGVzO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGJ5dGVzID0gdjdCeXRlcyhvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCksIG9wdGlvbnMubXNlY3MsIG9wdGlvbnMuc2VxLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBybmRzID0gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCk7XG4gICAgICAgIHVwZGF0ZVY3U3RhdGUoX3N0YXRlLCBub3csIHJuZHMpO1xuICAgICAgICBieXRlcyA9IHY3Qnl0ZXMocm5kcywgX3N0YXRlLm1zZWNzLCBfc3RhdGUuc2VxLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIHJldHVybiBidWYgPz8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZnVuY3Rpb24gdXBkYXRlVjdTdGF0ZShzdGF0ZSwgbm93LCBybmRzKSB7XG4gICAgc3RhdGUubXNlY3MgPz89IC1JbmZpbml0eTtcbiAgICBzdGF0ZS5zZXEgPz89IDA7XG4gICAgaWYgKG5vdyA+IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLnNlcSA9IChybmRzWzZdIDw8IDIzKSB8IChybmRzWzddIDw8IDE2KSB8IChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XTtcbiAgICAgICAgc3RhdGUubXNlY3MgPSBub3c7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdGF0ZS5zZXEgPSAoc3RhdGUuc2VxICsgMSkgfCAwO1xuICAgICAgICBpZiAoc3RhdGUuc2VxID09PSAwKSB7XG4gICAgICAgICAgICBzdGF0ZS5tc2VjcysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydHMudXBkYXRlVjdTdGF0ZSA9IHVwZGF0ZVY3U3RhdGU7XG5mdW5jdGlvbiB2N0J5dGVzKHJuZHMsIG1zZWNzLCBzZXEsIGJ1Ziwgb2Zmc2V0ID0gMCkge1xuICAgIGlmIChybmRzLmxlbmd0aCA8IDE2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZG9tIGJ5dGVzIGxlbmd0aCBtdXN0IGJlID49IDE2Jyk7XG4gICAgfVxuICAgIGlmICghYnVmKSB7XG4gICAgICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDE2ID4gYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFVVSUQgYnl0ZSByYW5nZSAke29mZnNldH06JHtvZmZzZXQgKyAxNX0gaXMgb3V0IG9mIGJ1ZmZlciBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtc2VjcyA/Pz0gRGF0ZS5ub3coKTtcbiAgICBzZXEgPz89ICgocm5kc1s2XSAqIDB4N2YpIDw8IDI0KSB8IChybmRzWzddIDw8IDE2KSB8IChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XTtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBtc2VjcyAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IDB4NzAgfCAoKHNlcSA+Pj4gMjgpICYgMHgwZik7XG4gICAgYnVmW29mZnNldCsrXSA9IChzZXEgPj4+IDIwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IDB4ODAgfCAoKHNlcSA+Pj4gMTQpICYgMHgzZik7XG4gICAgYnVmW29mZnNldCsrXSA9IChzZXEgPj4+IDYpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKChzZXEgPDwgMikgJiAweGZmKSB8IChybmRzWzEwXSAmIDB4MDMpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzExXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxMl07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTNdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzE0XTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxNV07XG4gICAgcmV0dXJuIGJ1Zjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWdleF9qc18xID0gcmVxdWlyZShcIi4vcmVnZXguanNcIik7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiByZWdleF9qc18xLmRlZmF1bHQudGVzdCh1dWlkKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgICBpZiAoISgwLCB2YWxpZGF0ZV9qc18xLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHZlcnNpb247XG4iLCJpbXBvcnQgeyB1c2VJbW1lclJlZHVjZXIgfSBmcm9tIFwidXNlLWltbWVyXCI7XG5cbmltcG9ydCB7XG5cdGluaXRpYWxDb250cm9sU3RhdGUsXG5cdC8vIGluaXRpYWxDb250cm9sU3RhdGUsXG5cdHBhcmFtZXRlckluaXRpYWxTdGF0ZSxcblx0dmFsdmVTdGF0dXMsXG59IGZyb20gXCIuL2luaXRpYWxTdGF0ZVwiO1xuaW1wb3J0IHR5cGUge1xuXHRDb21tYW5kVmFsdmVNcFByb3BzLFxuXHRQYXJhbWV0ZXJBY3Rpb24sXG5cdFBhcmFtSXRlbSxcblx0VXNlUGFyYW1ldGVyUmVkdWNlcixcblx0VXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyLFxuXHRVc2VWYWx2ZVJlZHVjZXIsXG5cdFZhbHZlQWN0aW9uLFxuXHRWYWx2ZU1wQ29tbWFuZEFjdGlvbixcblx0VmFsdmVTdGF0ZSxcbn0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZnVuY3Rpb24gdmFsdmVSZWR1Y2VyKGRyYWZ0OiBWYWx2ZVN0YXRlLCBhY3Rpb246IFZhbHZlQWN0aW9uKTogVmFsdmVTdGF0ZSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFwiVVBEQVRFX0FDVF9DT05GSUdcIjpcblx0XHRcdGRyYWZ0LmFjdGl2YXRlZENvbmZpZyA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0RFQUNUX0NPTkZJR1wiOlxuXHRcdFx0ZHJhZnQuZGVhY3RpdmF0ZWRDb25maWcgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9BQ1RfRkJcIjpcblx0XHRcdGRyYWZ0LmFjdEZCID0gIWRyYWZ0LmFjdEZCO1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfREVfQUNUX0ZCXCI6XG5cdFx0XHRkcmFmdC5kZUFjdEZCID0gIWRyYWZ0LmRlQWN0RkI7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9VU0xcIjpcblx0XHRcdGRyYWZ0LnVzbCA9ICFkcmFmdC51c2w7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9MU0xcIjpcblx0XHRcdGRyYWZ0LmxzbCA9ICFkcmFmdC5sc2w7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9NQU5VQUxcIjpcblx0XHRcdGRyYWZ0Lm1hbnVhbCA9ICFkcmFmdC5tYW51YWw7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9BTEFSTVwiOlxuXHRcdFx0ZHJhZnQuYWxhcm0gPSAhZHJhZnQuYWxhcm07XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9NQVNLRURcIjpcblx0XHRcdGRyYWZ0Lm1hc2tlZCA9ICFkcmFmdC5tYXNrZWQ7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9DSEFOR0lOR1wiOlxuXHRcdFx0ZHJhZnQuY2hhbmdpbmcgPSAhZHJhZnQuY2hhbmdpbmc7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9MT0NBVEVcIjpcblx0XHRcdGRyYWZ0LmxvY2F0ZSA9ICFkcmFmdC5sb2NhdGU7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0ZGVmYXVsdDogLy8gI1RPRE8gQWRkIG1vcmUgcmVkdWNlciBjYXNlIHN0YXRlbWVudHNcblx0XHRcdHJldHVybiBkcmFmdDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVmFsdmVSZWR1Y2VyKCk6IFVzZVZhbHZlUmVkdWNlciB7XG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlSW1tZXJSZWR1Y2VyKHZhbHZlUmVkdWNlciwgdmFsdmVTdGF0dXMpO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUFjdENvbmZpZyh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9BQ1RfQ09ORklHXCIsIHZhbHVlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZURlQWN0Q29uZmlnKHZhbHVlOiBudW1iZXIpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0RFQUNUX0NPTkZJR1wiLCB2YWx1ZSB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVVc2woKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9VU0xcIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVMc2woKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9MU0xcIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVBbGFybSgpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0FMQVJNXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQWN0RkIoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9BQ1RfRkJcIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVEZUFjdEZCKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfREVfQUNUX0ZCXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTWFudWFsKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTUFOVUFMXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTWFza2VkKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTUFTS0VEXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQ2hhbmdpbmcoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9DSEFOR0lOR1wiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUxvY2F0ZSgpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0xPQ0FURVwiIH0pO1xuXHR9XG5cblx0Y29uc3QgdXNlRWRpdFZhbHZlUmVkdWNlciA9IHtcblx0XHRzdGF0ZSxcblx0XHRyZWR1Y2VyOiB7XG5cdFx0XHR1cGRhdGVBY3RDb25maWcsXG5cdFx0XHR1cGRhdGVEZUFjdENvbmZpZyxcblx0XHRcdHVwZGF0ZUFsYXJtLFxuXHRcdFx0dXBkYXRlQWN0RkIsXG5cdFx0XHR1cGRhdGVEZUFjdEZCLFxuXHRcdFx0dXBkYXRlVXNsLFxuXHRcdFx0dXBkYXRlTHNsLFxuXHRcdFx0dXBkYXRlTWFudWFsLFxuXHRcdFx0dXBkYXRlTWFza2VkLFxuXHRcdFx0dXBkYXRlQ2hhbmdpbmcsXG5cdFx0XHR1cGRhdGVMb2NhdGUsXG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4gdXNlRWRpdFZhbHZlUmVkdWNlcjtcbn1cbi8qKlxuICogIFVwZGF0ZSBhIHBhcmFtZXRlciBpdGVtIGluIGEgbGlzdCBvZiBwYXJhbWV0ZXIgaXRlbXNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gUGFyYW1ldGVyUmVkdWNlcihcblx0ZHJhZnQ6IFBhcmFtSXRlbVtdLFxuXHRhY3Rpb246IFBhcmFtZXRlckFjdGlvblxuKTogUGFyYW1JdGVtW10ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBcIlVQREFURV9WQUxVRVwiOlxuXHRcdFx0ZHJhZnRbYWN0aW9uLmluZGV4XS5pbnB1dC52YWx1ZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRkZWZhdWx0OiAvLyAjVE9ETyBBZGQgbW9yZSByZWR1Y2VyIGNhc2Ugc3RhdGVtZW50c1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbUl0ZW1zUmVkdWNlcigpOiBVc2VQYXJhbWV0ZXJSZWR1Y2VyIHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VJbW1lclJlZHVjZXIoXG5cdFx0UGFyYW1ldGVyUmVkdWNlcixcblx0XHRwYXJhbWV0ZXJJbml0aWFsU3RhdGVcblx0KTtcblxuXHRmdW5jdGlvbiB1cGRhdGVWYWx1ZShpbmRleDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9WQUxVRVwiLCBpbmRleDogaW5kZXgsIHZhbHVlOiB2YWx1ZSB9KTtcblx0fVxuXHQvLyBBZGQgbW9yZSBkaXNwYXRjaCBmdW5jdGlvbnMgaGVyZVxuXHRjb25zdCB1c2VQYXJhbWV0ZXJSZWR1Y2VyID0ge1xuXHRcdHN0YXRlLFxuXHRcdHJlZHVjZXI6IHtcblx0XHRcdHVwZGF0ZVZhbHVlLFxuXHRcdH0sXG5cdH07XG5cdHJldHVybiB1c2VQYXJhbWV0ZXJSZWR1Y2VyO1xufVxuZnVuY3Rpb24gdmFsdmVNcFJlZHVjZXIoXG5cdGRyYWZ0OiBDb21tYW5kVmFsdmVNcFByb3BzLFxuXHRhY3Rpb246IFZhbHZlTXBDb21tYW5kQWN0aW9uXG4pOiBDb21tYW5kVmFsdmVNcFByb3BzIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgXCJVUERBVEVfQVVUT19NQU5VQUxcIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy5tYWluKSB7XG5cdFx0XHRcdGlmIChhY3Rpb24ubW9kZSA9PT0gXCJhdXRvXCIpIHtcblx0XHRcdFx0XHRkcmFmdC5jb21tYW5kLm1haW4uYXV0b01hbnVhbCA9IGZhbHNlO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBJbiBBdXRvYCk7XG5cblx0XHRcdFx0fSBlbHNlIGlmIChhY3Rpb24ubW9kZSA9PT0gXCJtYW51YWxcIikge1xuXHRcdFx0XHRcdGRyYWZ0LmNvbW1hbmQubWFpbi5hdXRvTWFudWFsID0gdHJ1ZTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW4gTWFudWFsYCk7XG5cdFx0XHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9NQUlOX01BTl9PTlwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/Lm1haW4pIHtcblx0XHRcdFx0ZHJhZnQuY29tbWFuZC5tYWluLmFjdGl2YXRpb24gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfTUFJTl9NQU5fT0ZGXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8ubWFpbikge1xuXHRcdFx0XHRkcmFmdC5jb21tYW5kLm1haW4uYWN0aXZhdGlvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfVVNMX01BTl9PTlwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/LnVwcGVyU2VhdCkge1xuXHRcdFx0XHRkcmFmdC5jb21tYW5kLnVwcGVyU2VhdC5hY3RpdmF0aW9uID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX1VTTF9NQU5fT0ZGXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8udXBwZXJTZWF0KSB7XG5cdFx0XHRcdGRyYWZ0LmNvbW1hbmQudXBwZXJTZWF0LmFjdGl2YXRpb24gPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0xTTF9NQU5fT05cIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy5sb3dlclNlYXQpIHtcblx0XHRcdFx0ZHJhZnQuY29tbWFuZC5sb3dlclNlYXQuYWN0aXZhdGlvbiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9MU0xfTUFOX09GRlwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/Lmxvd2VyU2VhdCkge1xuXHRcdFx0XHRkcmFmdC5jb21tYW5kLmxvd2VyU2VhdC5hY3RpdmF0aW9uID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cblx0XHRkZWZhdWx0OiAvLyAjVE9ETyBBZGQgbW9yZSByZWR1Y2VyIGNhc2Ugc3RhdGVtZW50c1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIoKTogVXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyIHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VJbW1lclJlZHVjZXIoXG5cdFx0dmFsdmVNcFJlZHVjZXIsXG5cdFx0aW5pdGlhbENvbnRyb2xTdGF0ZVxuXHQpO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUF1dG9NYW5TZWxlY3Rpb24obW9kZTogXCJhdXRvXCIgfCBcIm1hbnVhbFwiKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9BVVRPX01BTlVBTFwiLCBtb2RlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZU1haW5NYW51YWxPbigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09OXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTWFpbk1hbnVhbE9mZigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09GRlwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVzbE1hbnVhbE9uKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfVVNMX01BTl9PTlwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVzbE1hbnVhbE9mZigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX1VTTF9NQU5fT0ZGXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTHNsTWFudWFsT24oKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9MU0xfTUFOX09OXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTHNsTWFudWFsT2ZmKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTFNMX01BTl9PRkZcIiB9KTtcblx0fVxuXG5cdGNvbnN0IHVzZUNvbW1hbmRzVmFsdmVNcFJlZHVjZXIgPSB7XG5cdFx0c3RhdGUsXG5cdFx0cmVkdWNlcjoge1xuXHRcdFx0dXBkYXRlQXV0b01hblNlbGVjdGlvbixcblx0XHRcdHVwZGF0ZU1haW5NYW51YWxPbixcblx0XHRcdHVwZGF0ZU1haW5NYW51YWxPZmYsXG5cdFx0XHR1cGRhdGVVc2xNYW51YWxPbixcblx0XHRcdHVwZGF0ZVVzbE1hbnVhbE9mZixcblx0XHRcdHVwZGF0ZUxzbE1hbnVhbE9uLFxuXHRcdFx0dXBkYXRlTHNsTWFudWFsT2ZmLFxuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHVzZUNvbW1hbmRzVmFsdmVNcFJlZHVjZXI7XG59XG4iLCIvKipcbiAqIFRoZSBwdXJwb3NlIG9mIGluaXRpYWxTdGF0ZXMudHMgaXMgdG8gcHJvdmlkZSBpbml0aWFsIHN0YXRlIGZvciBjb21wb25lbnQgcHJvcHNcbiAqL1xuLy8gaW5pdGlhbFN0YXRlLnRzXG5cblxuaW1wb3J0IHsgQ29tbWFuZFZhbHZlTXBQcm9wcywgUGFyYW1JdGVtIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHZhbHZlU3RhdHVzID0ge1xuXHRhbGFybTogZmFsc2UsXG5cdGFjdEZCOiBmYWxzZSxcblx0ZGVBY3RGQjogdHJ1ZSxcblx0YWN0aXZhdGVkQ29uZmlnOiA3LFxuXHRkZWFjdGl2YXRlZENvbmZpZzogNSxcblx0aXRlbU5hbWU6IFwiVlhYWFwiLFxuXHRtYW51YWw6IGZhbHNlLFxuXHRtYXNrZWQ6IGZhbHNlLFxuXHRjaGFuZ2luZzogZmFsc2UsXG5cdGxvY2F0ZTogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgcHJvY2Vzc09iamVjdFByb3BzID0ge1xuXHRzdGF0dXM6IHZhbHZlU3RhdHVzLFxufTtcbmV4cG9ydCBjb25zdCB2YWx2ZVByb3BzID0ge1xuXHRwcm9jZXNzT2JqZWN0OiBwcm9jZXNzT2JqZWN0UHJvcHMsXG5cdGhhbmRsZUNsaWNrOiAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBjbGlja2VkXCIpO1xuXHR9LFxuXHRsYWJlbFBvc2l0aW9uOiBcImxlZnRcIixcblx0c2hvd0xhYmVsOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgcHVtcEluaXRpYWxTdGF0dXMgPSB7XG5cdGFsYXJtOiBmYWxzZSxcblx0YWN0RkI6IGZhbHNlLFxuXHRkZUFjdEZCOiBmYWxzZSxcblx0Y29uZmlndXJhdGlvbjogNyxcblx0aXRlbU5hbWU6IFwiaXRlbU5hbWVcIixcblx0bWFudWFsOiBmYWxzZSxcblx0bWFza2VkOiBmYWxzZSxcblx0Y2hhbmdpbmc6IGZhbHNlLFxuXHRsb2NhdGU6IGZhbHNlLFxufVxuXG5leHBvcnQgY29uc3QgcHVtcEluaXRpYWxQcm9wcyA9IHtcblx0c3RhdHVzOiBwdW1wSW5pdGlhbFN0YXR1cyxcbn1cbmV4cG9ydCBjb25zdCBwYXJhbWV0ZXJJbml0aWFsU3RhdGUgPSBbXG5cdHtcblx0XHRsYWJlbDoge1xuXHRcdFx0dGV4dDogXCJsYWJlbFwiLFxuXHRcdFx0Y2xhc3NOYW1lOiBcIlwiLFxuXHRcdFx0dG9vbHRpcFRleHQ6IFwiXCIsXG5cdFx0XHR0b29sdGlwUG9zaXRpb246IFwiXCIsXG5cdFx0XHR0b29sdGlwQ2xhc3NOYW1lOiBcIlwiLFxuXHRcdFx0dG9vbHRpcElkOiBcIlwiLFxuXHRcdH0sXG5cdFx0aW5wdXQ6IHtcblx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0aW5wdXRtb2RlOiBcIm51bWVyaWNcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkVudGVyIGEgbnVtYmVyXCIsXG5cdFx0XHRlZGl0YWJsZTogdHJ1ZSxcblx0XHRcdHBhdHRlcm46IFwiXlswLTldKlsuLF0/WzAtOV0qJFwiLFxuXHRcdFx0bWluOiAwLFxuXHRcdFx0bWF4OiAxMDAsXG5cdFx0XHRkZWNpbWFsUGxhY2VzOiAyLFxuXHRcdFx0ZXU6IFwiXFx1MDBCNUNcIixcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0sXG5cdH0gYXMgUGFyYW1JdGVtLFxuXTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxBdXRvTWFuU3RhdGUgPSB7XG5cdGF1dG86IHRydWUsXG5cdG1hbnVhbDogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IGluaXRpYWxPZmZPblN0YXRlID0ge1xuXHRvZmY6IGZhbHNlLFxuXHRvbjogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IGluaXRpYWxDb250cm9sU3RhdGUgPSB7XG5cdGNvbW1hbmQ6IHtcblx0XHRpbnRlcmxvY2tzOiB7XG5cdFx0XHRtYWluOiBbXSxcblx0XHRcdHVwcGVyU2VhdDogW10sXG5cdFx0XHRsb3dlclNlYXQ6IFtdXG5cdFx0fSxcblx0XHRtYWluOiB7XG5cdFx0XHRsYWJlbDogXCJNYWluXCIsXG5cdFx0XHRhdXRvTWFudWFsOiBmYWxzZSxcblx0XHRcdGFjdGl2YXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0dXBwZXJTZWF0OiB7XG5cdFx0XHRsYWJlbDogXCJVcHBlciBTZWF0XCIsXG5cdFx0XHRhY3RpdmF0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdGxvd2VyU2VhdDoge1xuXHRcdFx0bGFiZWw6IFwiTG93ZXIgU2VhdFwiLFxuXHRcdFx0YWN0aXZhdGlvbjogZmFsc2UsXG5cdFx0fVxuXHR9XG59IGFzIENvbW1hbmRWYWx2ZU1wUHJvcHM7XG4iLCJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRQcm9wcyB9IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IFZBTFZFX0NPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLlZhbHZlXCI7XG5leHBvcnQgdHlwZSBFbGVtZW50UmVmID0gUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcbmV4cG9ydCB0eXBlIFZhbHZlU3RhdGUgPSB7XG5cdGFsYXJtOiBib29sZWFuO1xuXHRhY3RGQjogYm9vbGVhbjtcblx0ZGVBY3RGQjogYm9vbGVhbjtcblx0dXNsPzogYm9vbGVhbjtcblx0bHNsPzogYm9vbGVhbjtcblx0YWN0aXZhdGVkQ29uZmlnOiBudW1iZXI7XG5cdGRlYWN0aXZhdGVkQ29uZmlnOiBudW1iZXI7XG5cdGl0ZW1OYW1lOiBzdHJpbmc7XG5cdG1hbnVhbDogYm9vbGVhbjtcblx0bWFza2VkOiBib29sZWFuO1xuXHRjaGFuZ2luZzogYm9vbGVhbjtcblx0bG9jYXRlOiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgVmFsdmVDb21wb3VuZENvbnRleHRUeXBlID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHR2YWx2ZVByb3BzOiBWYWx2ZVByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5leHBvcnQgdHlwZSBWYWx2ZUNvbXBvdW5kUm9vdFByb3BzID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHR2YWx2ZVByb3BzOiBWYWx2ZVByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5leHBvcnQgY29uc3QgUFVNUF9DT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5QdW1wXCI7XG5leHBvcnQgdHlwZSBQdW1wU3RhdGUgPSB7XG5cdGFsYXJtOiBib29sZWFuO1xuXHRhY3RGQjogYm9vbGVhbjtcblx0ZGVBY3RGQjogYm9vbGVhbjtcblx0Y29uZmlndXJhdGlvbjogbnVtYmVyO1xuXHRpdGVtTmFtZTogc3RyaW5nO1xuXHRtYW51YWw6IGJvb2xlYW47XG5cdG1hc2tlZDogYm9vbGVhbjtcblx0Y2hhbmdpbmc6IGJvb2xlYW47XG5cdGxvY2F0ZTogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIFB1bXBDb21wb3VuZENvbnRleHRUeXBlID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHRwdW1wUHJvcHM6IFB1bXBQcm9wcztcblx0b25BY3Rpb25QZXJmb3JtZWQ6ICgpID0+IHZvaWQ7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuZXhwb3J0IHR5cGUgUHVtcENvbXBvdW5kUm9vdFByb3BzID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHRwdW1wUHJvcHM6IFB1bXBQcm9wcztcblx0b25BY3Rpb25QZXJmb3JtZWQ6ICgpID0+IHZvaWQ7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuLyoqXG4gKiBEZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBQYXJhbWV0ZXJBY3Rpb24gdHlwZVxuICogQFVzZWFnZSB1c2VQYXJhbWV0ZXJSZWR1Y2VyXG4gKi9cbmV4cG9ydCB0eXBlIFBhcmFtZXRlckFjdGlvbiA9IHtcblx0dHlwZTogXCJVUERBVEVfVkFMVUVcIjtcblx0dmFsdWU6IG51bWJlcjtcblx0aW5kZXg6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFBhcmFtZXRlclJlZHVjZXIgPSAoXG5cdHN0YXRlOiBQYXJhbUl0ZW0gfCBQYXJhbUl0ZW1bXSxcblx0YWN0aW9uOiBQYXJhbWV0ZXJBY3Rpb25cbikgPT4gVmFsdmVTdGF0ZTtcblxuZXhwb3J0IHR5cGUgVXNlUGFyYW1ldGVyUmVkdWNlciA9IHtcblx0c3RhdGU6IFBhcmFtSXRlbVtdO1xuXHRyZWR1Y2VyOiB7XG5cdFx0dXBkYXRlVmFsdWU6ICh2YWx1ZTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuXHRcdC8vYWRkIG1vcmUgaGFuZGxlcnMgYXMgbmVlZGVkXG5cdH07XG59O1xuZXhwb3J0IHR5cGUgUGFyYW1MYWJlbCA9IHtcblx0dGV4dDogc3RyaW5nO1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG5cdHRvb2x0aXBUZXh0Pzogc3RyaW5nO1xuXHR0b29sdGlwUG9zaXRpb24/OiBzdHJpbmc7XG5cdHRvb2x0aXBDbGFzc05hbWU/OiBzdHJpbmc7XG5cdHRvb2x0aXBJZD86IHN0cmluZztcbn07XG5leHBvcnQgdHlwZSBQYXJhbUlucHV0ID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGlucHV0bW9kZTpcblx0XHR8IFwibm9uZVwiXG5cdFx0fCBcInRleHRcIlxuXHRcdHwgXCJ0ZWxcIlxuXHRcdHwgXCJ1cmxcIlxuXHRcdHwgXCJlbWFpbFwiXG5cdFx0fCBcIm51bWVyaWNcIlxuXHRcdHwgXCJkZWNpbWFsXCJcblx0XHR8IFwic2VhcmNoXCJcblx0XHR8IHVuZGVmaW5lZDtcblx0cGxhY2Vob2xkZXI6IHN0cmluZztcblx0ZWRpdGFibGU6IGJvb2xlYW47XG5cdHBhdHRlcm46IHN0cmluZztcblx0bWluOiBudW1iZXI7XG5cdG1heDogbnVtYmVyO1xuXHRkZWNpbWFsUGxhY2VzOiBudW1iZXI7XG5cdC8vIHBhdHRlcm46IFwiXlswLTldKlsuLF0/WzAtOV0qJFwiIGZvciBkZWNpbWFsIG51bWJlcnNcblx0Ly8gcGF0dGVybjogXCJeWzAtOV0qJFwiIGZvciBpbnRlZ2Vyc1xuXHRldTogc3RyaW5nO1xuXHR2YWx1ZTogbnVtYmVyO1xufTtcbi8vIHR5cGUgUGFyYW1zSGVhZGVyID0ge1xuLy8gXHRsYWJlbDogc3RyaW5nXG4vLyB9XG5leHBvcnQgdHlwZSBQYXJhbUl0ZW0gPSB7XG5cdGxhYmVsOiBQYXJhbUxhYmVsO1xuXHRpbnB1dDogUGFyYW1JbnB1dDtcbn07XG5leHBvcnQgdHlwZSBQYXJhbWV0ZXJzTGlzdFN0YXRlID0ge1xuXHRwYXJhbWV0ZXJzOiBQYXJhbUl0ZW1bXTtcbn07XG4vKipcbiAqIERlZmluZSB0aGUgc2hhcGUgb2YgdGhlIFZhbHZlQWN0aW9uIHR5cGVcbiAqIEBVc2VhZ2UgdXNlVmFsdmVSZWR1Y2VyXG4gKi9cbmV4cG9ydCB0eXBlIFZhbHZlQWN0aW9uID1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0FDVF9DT05GSUdcIjsgdmFsdWU6IG51bWJlciB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9ERUFDVF9DT05GSUdcIjsgdmFsdWU6IG51bWJlciB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9BQ1RfRkJcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9ERV9BQ1RfRkJcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9VU0xcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9MU0xcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9NQU5VQUxcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9BTEFSTVwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX01BU0tFRFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0NIQU5HSU5HXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTE9DQVRFXCIgfTtcblxuZXhwb3J0IHR5cGUgVmFsdmVSZWR1Y2VyID0gKFxuXHRzdGF0ZTogVmFsdmVTdGF0ZSxcblx0YWN0aW9uOiBWYWx2ZUFjdGlvblxuKSA9PiBWYWx2ZVN0YXRlO1xuXG5leHBvcnQgdHlwZSBVc2VWYWx2ZVJlZHVjZXIgPSB7XG5cdHN0YXRlOiBWYWx2ZVN0YXRlO1xuXHRyZWR1Y2VyOiB7XG5cdFx0dXBkYXRlQWN0Q29uZmlnOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZDtcblx0XHR1cGRhdGVEZUFjdENvbmZpZzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG5cdFx0dXBkYXRlQWxhcm06ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlQWN0RkI6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlRGVBY3RGQjogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVVc2w6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTHNsOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZU1hbnVhbDogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVNYXNrZWQ6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlQ2hhbmdpbmc6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTG9jYXRlOiAoKSA9PiB2b2lkO1xuXG5cdFx0Ly9hZGQgbW9yZSBoYW5kbGVycyBhcyBuZWVkZWRcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBWYWx2ZUNsYXNzTmFtZUVudW0gPSB7XG5cdEFsYXJtU3RhdGU6IFwiQWxhcm1TdGF0ZVwiLFxuXHRBY3RpdmF0ZWQ6IFwiQWN0aXZhdGVkXCIsXG5cdERlYWN0aXZhdGVkOiBcIkRlYWN0aXZhdGVkXCIsXG5cdE1hbnVhbDogXCJNYW51YWxcIixcblx0TWFza2VkOiBcIk1hc2tlZFwiLFxuXHRDaGFuZ2luZzogXCJDaGFuZ2luZ1wiLFxuXHROb0FsYXJtTWFzazogXCJOb0FsYXJtTWFza1wiLFxuXHRMb2NhdGU6IFwiTG9jYXRlXCIsXG59O1xuZXhwb3J0IHR5cGUgVmFsdmVDbGFzc05hbWVFbnVtID1cblx0KHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW0pW2tleW9mIHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW1dO1xuZXhwb3J0IGNvbnN0IEl0ZW1OYW1lRW51bSA9IHtcblx0VjFiMTogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjFiMjogXCJ2MWIyXCIsIC8vIGluZGV4IDFcblx0VjFiMzogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNDogXCJ2MWI0XCIsIC8vIGluZGV4IDNcblx0VjJiMTogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMjogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMzogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjNiMTogXCJ2M2IxXCIsIC8vIGluZGV4IDhcblx0VjNiMjogXCJ2M2IyXCIsIC8vIGluZGV4IDlcblx0VjNiMzogXCJ2M2IzXCIsIC8vIGluZGV4IDEwXG5cdFYzYjQ6IFwidjNiNFwiLCAvLyBpbmRleCAxMVxuXHRWMjogXCJ2MlwiLCAvLyBpbmRleCAxMlxuXHRWMzogXCJ2M1wiLCAvLyBpbmRleCAxM1xuXHRWMTogXCJ2MVwiLCAvLyBpbmRleCAxNFxuXHRWMmYxOiBcInYyZjFcIiwgLy8gaW5kZXggMTVcblx0VjJmMjogXCJ2MmYyXCIsIC8vIGluZGV4IDE2XG5cdFYzZjE6IFwidjNmMVwiLCAvLyBpbmRleCAxN1xuXHRWM2YyOiBcInYzZjJcIiwgLy8gaW5kZXggMThcbn07XG5leHBvcnQgdHlwZSBJdGVtTmFtZUVudW0gPSAodHlwZW9mIEl0ZW1OYW1lRW51bSlba2V5b2YgdHlwZW9mIEl0ZW1OYW1lRW51bV07XG5leHBvcnQgY29uc3QgdmFsdmVNcEl0ZW1OYW1lRW51bSA9IHtcblx0VjFiMTogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjFiMjogXCJ2MWIyXCIsIC8vIGluZGV4IDFcblx0VjFiMzogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNDogXCJ2MWI0XCIsIC8vIGluZGV4IDNcblx0VjJiMTogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMjogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMzogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjI6IFwidjJcIiwgLy8gaW5kZXggOFxuXHR2MTogXCJ2MVwiLCAvLyBpbmRleCA5XG5cdHVzbDogXCJ1c2xcIiwgLy8gaW5kZXggMTAgdXBwZXItc2VhdC1saWZ0XG5cdGxzbDogXCJsc2xcIiwgLy8gaW5kZXggMTEgbG93ZXItc2VhdC1saWZ0XG5cdGxvY2F0ZTogXCJsb2NhdGVcIiwgLy8gaW5kZXggMTIgbG9jYXRlIGFuaW1hdGlvblxufTtcbmV4cG9ydCB0eXBlIHZhbHZlTXBJdGVtTmFtZUVudW0gPVxuXHQodHlwZW9mIHZhbHZlTXBJdGVtTmFtZUVudW0pW2tleW9mIHR5cGVvZiB2YWx2ZU1wSXRlbU5hbWVFbnVtXTtcblxuXG5leHBvcnQgY29uc3QgSXRlbUNsaWNrYWJsZU5hbWVFbnVtID0ge1xuXHRWMWIxOiBcInYxYjFcIiwgLy8gaW5kZXggMFxuXHRWMWIyOiBcInYxYjJcIiwgLy8gaW5kZXggMVxuXHRWMWIzOiBcInYxYjNcIiwgLy8gaW5kZXggMlxuXHRWMWI0OiBcInYxYjRcIiwgLy8gaW5kZXggM1xuXHRWMmIxOiBcInYyYjFcIiwgLy8gaW5kZXggNFxuXHRWMmIyOiBcInYyYjJcIiwgLy8gaW5kZXggNVxuXHRWMmIzOiBcInYyYjNcIiwgLy8gaW5kZXggNlxuXHRWMmI0OiBcInYyYjRcIiwgLy8gaW5kZXggN1xuXHRWM2IxOiBcInYzYjFcIiwgLy8gaW5kZXggOFxuXHRWM2IyOiBcInYzYjJcIiwgLy8gaW5kZXggOVxuXHRWM2IzOiBcInYzYjNcIiwgLy8gaW5kZXggMTBcblx0VjNiNDogXCJ2M2I0XCIsIC8vIGluZGV4IDExXG5cdFYyOiBcInYyXCIsIC8vIGluZGV4IDEyXG5cdFYzOiBcInYzXCIsIC8vIGluZGV4IDEzXG5cdFYxOiBcInYxXCIsIC8vIGluZGV4IDE0XG59O1xuZXhwb3J0IHR5cGUgSXRlbUNsaWNrYWJsZU5hbWVFbnVtID1cblx0KHR5cGVvZiBJdGVtQ2xpY2thYmxlTmFtZUVudW0pW2tleW9mIHR5cGVvZiBJdGVtQ2xpY2thYmxlTmFtZUVudW1dO1xuZXhwb3J0IGNvbnN0IHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0gPSB7XG5cdFYxYjE6IFwidjFiMVwiLCAvLyBpbmRleCAwXG5cdFYxYjI6IFwidjFiMlwiLCAvLyBpbmRleCAxXG5cdFYxYjM6IFwidjFiM1wiLCAvLyBpbmRleCAyXG5cdFYxYjQ6IFwidjFiNFwiLCAvLyBpbmRleCAzXG5cdFYyYjE6IFwidjJiMVwiLCAvLyBpbmRleCA0XG5cdFYyYjI6IFwidjJiMlwiLCAvLyBpbmRleCA1XG5cdFYyYjM6IFwidjJiM1wiLCAvLyBpbmRleCA2XG5cdFYyYjQ6IFwidjJiNFwiLCAvLyBpbmRleCA3XG5cdFYyOiBcInYyXCIsIC8vIGluZGV4IDhcblx0VjE6IFwidjFcIiwgLy8gaW5kZXggOVxufTtcbmV4cG9ydCB0eXBlIHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0gPVxuXHQodHlwZW9mIHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0pW2tleW9mIHR5cGVvZiB2YWx2ZU1wSXRlbUNsaWNrYWJsZU5hbWVFbnVtXTtcblxuZXhwb3J0IGNvbnN0IEl0ZW1Qb3NpdGlvbkVudW0gPSB7XG5cdHYxYjE6IFwidjFiMVwiLFxuXHR2MWIyOiBcInYxYjJcIixcblx0djFiMzogXCJ2MWIzXCIsXG5cdHYxYjQ6IFwidjFiNFwiLFxuXHR2MmIxOiBcInYyYjFcIixcblx0VjJiMjogXCJ2MmIyXCIsXG5cdHYyYjM6IFwidjJiM1wiLFxuXHR2MmI0OiBcInYyYjRcIixcblx0djNiMTogXCJ2M2IxXCIsXG5cdHYzYjI6IFwidjNiMlwiLFxuXHR2M2IzOiBcInYzYjNcIixcblx0djNiNDogXCJ2M2I0XCIsXG5cdHYyOiBcInYyXCIsXG5cdHYzOiBcInYzXCIsXG59O1xuZXhwb3J0IHR5cGUgSXRlbVBvc2l0aW9uRW51bSA9XG5cdCh0eXBlb2YgSXRlbVBvc2l0aW9uRW51bSlba2V5b2YgdHlwZW9mIEl0ZW1Qb3NpdGlvbkVudW1dO1xuXG5jb25zdCBWYWx2ZVN0YXRlRW51bSA9IHtcblx0YWxhcm06IFwiYWxhcm1cIixcblx0bWFudWFsOiBcIm1hbnVhbFwiLFxuXHRtYXNrZWQ6IFwibWFza2VkXCIsXG59O1xuZXhwb3J0IHR5cGUgVmFsdmVTdGF0ZUVudW0gPVxuXHQodHlwZW9mIFZhbHZlU3RhdGVFbnVtKVtrZXlvZiB0eXBlb2YgVmFsdmVTdGF0ZUVudW1dO1xuXG5jb25zdCBpdGVtSWRQb3NpdGlvbnMgPSBbXG5cdFwicmlnaHRcIixcblx0XCJsZWZ0XCIsXG5cdFwidG9wLWxlZnRcIixcblx0XCJ0b3AtcmlnaHRcIixcblx0XCJib3R0b20tbGVmdFwiLFxuXHRcImJvdHRvbS1yaWdodFwiLFxuXTtcblxuZXhwb3J0IHR5cGUgSXRlbUlkUG9zaXRpb25UeXBlID0gKHR5cGVvZiBpdGVtSWRQb3NpdGlvbnMpW251bWJlcl07XG5leHBvcnQgdHlwZSBQcm9jZXNzT2JqZWN0ID0ge1xuXHRzdGF0dXM6IFZhbHZlU3RhdGU7XG59O1xuZXhwb3J0IHR5cGUgUHVtcCA9IHtcblx0c3RhdHVzOiBQdW1wU3RhdGU7XG59O1xuZXhwb3J0IHR5cGUgVmFsdmVQcm9wcyA9IHtcblx0cHJvY2Vzc09iamVjdD86IFByb2Nlc3NPYmplY3Q7XG5cdGxhYmVsUG9zaXRpb24/OiBJdGVtSWRQb3NpdGlvblR5cGU7XG5cdHNob3dMYWJlbD86IGJvb2xlYW47XG5cdGhhbmRsZUNsaWNrPzogKCkgPT4gdm9pZDtcbn07XG5jb25zdCBwdW1wVHlwZXM9IFtcblx0XCJjZW50cmlmdWdhbFwiLFxuXHRcImRpYXBocmFnbVwiLFxuXHRcImdlYXJcIixcblx0XCJsaXF1aWQtcmluZ1wiLFxuXHRcInBvc2l0aXZlLWRpc3BsYWNtZW50XCIsXG5cdFwicG9zaXRpdmUtc2NyZXdcIixcblx0XCJwcm9ncmVzc2l2ZS1jYXZpdHlcIixcbl1cbmV4cG9ydCB0eXBlIFB1bXBUeXBlID0gKHR5cGVvZiBwdW1wVHlwZXMpW251bWJlcl07XG5leHBvcnQgdHlwZSBQdW1wUHJvcHMgPSB7XG5cdHB1bXBUeXBlPzogUHVtcFR5cGU7XG5cdHByb2Nlc3NPYmplY3Q/OiBQdW1wO1xuXHRsYWJlbFBvc2l0aW9uPzogSXRlbUlkUG9zaXRpb25UeXBlO1xuXHRzaG93TGFiZWw/OiBib29sZWFuO1xuXHRoYW5kbGVDbGljaz86ICgpID0+IHZvaWQ7XG59O1xuZXhwb3J0IGNvbnN0IHB1bXBJdGVtTGlzdCA9IFtcblx0XCJzeW1ib2wtMVwiLFxuXHRcInN5bWJvbC0yXCIsXG4gXHRcImxvY2F0ZVwiLFxuXVxuZXhwb3J0IHR5cGUgUHVtcEl0ZW1MaXN0ID0gKHR5cGVvZiBwdW1wSXRlbUxpc3QpW251bWJlcl07XG5cbmV4cG9ydCB0eXBlIEl0ZW1EYXRhID0ge1xuXHRrZXk6IHN0cmluZztcblx0dmFsdWU6IHN0cmluZztcblx0cHJvcHM6IFZhbHZlU3RhdGU7XG59O1xuLyoqXG4gKiBkcmFnZ2FibGUgY29tcG9uZW50IHR5cGVzXG4gKi9cbi8vIGV4cG9ydCB0eXBlIERyYWdnYWJsZUl0ZW0gPSB7XG4vLyBcdGlkOiBVbmlxdWVJZGVudGlmaWVyO1xuLy8gXHRsZWZ0OiBudW1iZXI7XG4vLyBcdHRvcDogbnVtYmVyO1xuLy8gfVxuXG4vLyBleHBvcnQgdHlwZSBEcmFnZ2FibGVQcm9wcyA9IHtcbi8vIFx0aWQ6IFVuaXF1ZUlkZW50aWZpZXIsXG4vLyBcdG9uQ2xvc2U6IChpZDogVW5pcXVlSWRlbnRpZmllcik9PiB2b2lkLFxuLy8gXHRlbGVtZW50Pzoga2V5b2YgSFRNTEVsZW1lbnQsXG4vLyBcdGxlZnQ6IG51bWJlcjtcbi8vIFx0dG9wIDogbnVtYmVyO1xuLy8gXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuLy8gXHRjbGFzc05hbWU6IHN0cmluZztcbi8vIH1cbmV4cG9ydCB0eXBlIGl0ZW1OYW1lUHJvcHMgPSB7XG5cdGtleTogc3RyaW5nO1xuXHRuYW1lOiBbc3RyaW5nLCBzdHJpbmddO1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRpbmRleDogbnVtYmVyO1xufTtcbmV4cG9ydCB0eXBlIENvbW1hbmRWYWx2ZU1wUHJvcHMgPSB7XG5cdGNvbW1hbmQ/OiB7XG5cdFx0aW50ZXJsb2Nrcz86IHtcblx0XHRcdG1haW46IGJvb2xlYW5bXTtcblx0XHRcdHVwcGVyU2VhdDogYm9vbGVhbltdO1xuXHRcdFx0bG93ZXJTZWF0OiBib29sZWFuW107XG5cdFx0fTtcblx0XHRtYWluPzoge1xuXHRcdFx0bGFiZWw6IHN0cmluZztcblx0XHRcdGF1dG9NYW51YWw6IGJvb2xlYW47XG5cdFx0XHRhY3RpdmF0aW9uOiBib29sZWFuO1xuXHRcdH07XG5cdFx0dXBwZXJTZWF0Pzoge1xuXHRcdFx0bGFiZWw6IHN0cmluZztcblx0XHRcdGFjdGl2YXRpb246IGJvb2xlYW47XG5cdFx0fTtcblx0XHRsb3dlclNlYXQ/OiB7XG5cdFx0XHRsYWJlbDogc3RyaW5nO1xuXHRcdFx0YWN0aXZhdGlvbjogYm9vbGVhbjtcblx0XHR9O1xuXHR9O1xufTtcblxuZXhwb3J0IHR5cGUgQ29tbWFuZHNWYWx2ZU1wQ29tcG91bmRDb250ZXh0VHlwZSA9IHtcblx0Y29tcG9uZW50UHJvcHM6IENvbXBvbmVudFByb3BzPGFueSwgYW55Pjtcblx0dXNlUmVkdWNlcjogVXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcbmV4cG9ydCB0eXBlIENvbW1hbmRzVmFsdmVNcENvbXBvdW5kUm9vdFByb3BzID0ge1xuXHRjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHM8YW55LCBhbnk+O1xuXHRjb21tYW5kOiBDb21tYW5kVmFsdmVNcFByb3BzO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcbi8qKlxuICogRGVmaW5lIHRoZSBzaGFwZSBvZiB0aGUgVmFsdmVBY3Rpb24gdHlwZVxuICogQFVzZWFnZSB1c2VWYWx2ZVJlZHVjZXJcbiAqL1xuZXhwb3J0IHR5cGUgVmFsdmVNcENvbW1hbmRBY3Rpb24gPVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQVVUT19NQU5VQUxcIjsgbW9kZTogXCJhdXRvXCIgfCBcIm1hbnVhbFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09OXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTUFJTl9NQU5fT0ZGXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfVVNMX01BTl9PTlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX1VTTF9NQU5fT0ZGXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTFNMX01BTl9PTlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0xTTF9NQU5fT0ZGXCIgfTtcbmV4cG9ydCB0eXBlIFZhbHZlTXBDb21tYW5kUmVkdWNlciA9IChcblx0c3RhdGU6IENvbW1hbmRWYWx2ZU1wUHJvcHMsXG5cdGFjdGlvbjogVmFsdmVNcENvbW1hbmRBY3Rpb25cbikgPT4gVmFsdmVTdGF0ZTtcblxuZXhwb3J0IHR5cGUgVXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyID0ge1xuXHRzdGF0ZTogQ29tbWFuZFZhbHZlTXBQcm9wcztcblx0cmVkdWNlcjoge1xuXHRcdHVwZGF0ZUF1dG9NYW5TZWxlY3Rpb246IChtb2RlOiBcImF1dG9cIiB8IFwibWFudWFsXCIpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTWFpbk1hbnVhbE9uOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZU1haW5NYW51YWxPZmY6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlVXNsTWFudWFsT246ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlVXNsTWFudWFsT2ZmOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxzbE1hbnVhbE9uOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxzbE1hbnVhbE9mZjogKCkgPT4gdm9pZDtcblx0XHQvL2FkZCBtb3JlIGhhbmRsZXJzIGFzIG5lZWRlZFxuXHR9O1xufTtcbiIsImltcG9ydCB7IGdldEJvb2xBdEluZGV4IH0gZnJvbSBcIi4uL3V0aWxzL251bWJlclV0aWxcIjtcbmltcG9ydCB7XG5cdEl0ZW1JZFBvc2l0aW9uVHlwZSxcblx0SXRlbU5hbWVFbnVtLFxuXHRwdW1wSXRlbUxpc3QsXG5cdHZhbHZlTXBJdGVtTmFtZUVudW0sXG5cdHR5cGUgUHVtcFN0YXRlLFxuXHR0eXBlIFB1bXBUeXBlLFxuXHR0eXBlIFZhbHZlU3RhdGUsXG59IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG4vKipcbiAqIFRoaXMgaXMgYSB1dGlsaXR5IGZ1bmN0aW9uIGZvciB0aGUgY29tcG9uZW50IFwicHJvY2Vzcy1vYmplY3QvVmFsdmVGQ1wiXG4gKlxuICogQHBhcmFtIGluZGV4OiBudW1iZXIgdGhlIGluZGV4IG9mIGFuIGR5bmFtaWMgdmlzdWFsIGVsZW1lbnQgXCJpdGVtXCIgd2l0aGluIHRoZSBWYWx2ZSBjb21wb25lbnRcbiAqIEBwYXJhbSB2YWx2ZVN0YXR1cz86VmFsdmVTdGF0dXMgdGhlIHN0YXR1cyByZXByZXNlbnRpbmcgcGh5c2ljYWwgcHJvY2VzcyB2YWx2ZVxuICogQHJldHVybnMgY2xhc3NOYW1lOnN0cmluZyByZXR1cm5zIGFkZGl0aW9uYWwgY2xhc3NuYW1lcyBmb3IgYW4gdmlzdWFsIGVsZW1lbnQgb2YgdGhlIHZhbHZlIGNvbXBvbmVudC5cbiAqXG4gKiBSZXR1cm5lZCBjbGFzc25hbWVzIGFyZTtcbiAqIFx0aGlkZSAtIHRoaXMgaGlkZXMgdGhlIGl0ZW1cbiAqIFx0c2hvdyAtXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRJdGVtQ2xhc3NOYW1lID0gKFxuXHRpbmRleDogbnVtYmVyLFxuXHR2YWx2ZVN0YXR1cz86IFZhbHZlU3RhdGVcbik6IHN0cmluZyA9PiB7XG5cdGxldCBjbGFzc05hbWUgPSBcIlwiO1xuXHQvLyBIYW5kbGUgdGhlIGZhY3QgdGhhdCBBY3RpdmF0ZWRDb25maWcgYW5kIERlYWN0aXZhdGVkQ29uZmlnIGFyZSBvcHRpb25hbCBhbmQgbWF5YmUgdW5kZWZpbmVkXG5cdGNvbnN0IEFjdGl2YXRlZENvbmZpZ1ZhbHVlID0gdmFsdmVTdGF0dXM/LmFjdGl2YXRlZENvbmZpZyA/PyAwO1xuXHRjb25zdCBEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlID0gdmFsdmVTdGF0dXM/LmRlYWN0aXZhdGVkQ29uZmlnID8/IDA7XG5cdGlmIChpbmRleCA8IDEyKSB7XG5cdFx0aWYgKFxuXHRcdFx0KGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgJiYgdmFsdmVTdGF0dXM/LmFjdEZCKSB8fFxuXHRcdFx0KGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSAmJiB2YWx2ZVN0YXR1cz8uZGVBY3RGQilcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvdyBpdGVtXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZSBpdGVtXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxNCkge1xuXHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMikge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTMpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleClcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDE1KSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEyKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTIpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxNikge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMikgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEyKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTcpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTMpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMylcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDE4KSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEzKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTMpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHR9XG5cdC8vIEFkZGl0aW9ucyB0byB0aGUgY2xhc3NOYW1lXG5cblx0aWYgKGNsYXNzTmFtZS5pbmNsdWRlcyhcInNob3dcIikgJiYgIWNsYXNzTmFtZS5pbmNsdWRlcyhcIml0ZW1cIikpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4LCBjbGFzc05hbWUpO1xuXHRcdGlmICh2YWx2ZVN0YXR1cz8uYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWxhcm1TdGF0ZVwiLCBcIlwiKSArIFwiIEFsYXJtU3RhdGVcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5jaGFuZ2luZykge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJDaGFuZ2luZ1wiLCBcIlwiKSArIFwiIENoYW5naW5nXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFudWFsKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk1hbnVhbFwiLCBcIlwiKSArIFwiIE1hbnVhbFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCAmJiAhdmFsdmVTdGF0dXMuYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTm9BbGFybU1hc2tcIiwgXCJcIikgKyBcIiBOb0FsYXJtTWFza1wiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJNYXNrZWRcIiwgXCJcIikgKyBcIiBNYXNrZWRcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5hY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJBY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBBY3RpdmF0ZWRcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5kZUFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgRGVhY3RpdmF0ZWRcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5sb2NhdGUpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiY2lyY2xlXCIsIFwiXCIpICsgXCIgY2lyY2xlXCI7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNsYXNzTmFtZTsgLy8gZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbm8gb3RoZXIgY29uZGl0aW9uIGlzIG1ldFxufTtcbmV4cG9ydCBjb25zdCBnZXRWYWx2ZU1wSXRlbUNsYXNzTmFtZSA9IChcblx0aW5kZXg6IG51bWJlcixcblx0dmFsdmVTdGF0dXM/OiBWYWx2ZVN0YXRlXG4pOiBzdHJpbmcgPT4ge1xuXHRsZXQgY2xhc3NOYW1lID0gXCJcIjtcblx0Ly8gSGFuZGxlIHRoZSBmYWN0IHRoYXQgQWN0aXZhdGVkQ29uZmlnIGFuZCBEZWFjdGl2YXRlZENvbmZpZyBhcmUgb3B0aW9uYWwgYW5kIG1heWJlIHVuZGVmaW5lZFxuXHRjb25zdCBBY3RpdmF0ZWRDb25maWdWYWx1ZSA9IHZhbHZlU3RhdHVzPy5hY3RpdmF0ZWRDb25maWcgPz8gMDtcblx0Y29uc3QgRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSA9IHZhbHZlU3RhdHVzPy5kZWFjdGl2YXRlZENvbmZpZyA/PyAwO1xuXHQvLyBjb25zb2xlLmxvZyh2YWx2ZVN0YXR1cyk7XG5cblx0aWYgKGluZGV4IDwgOCkge1xuXHRcdGlmIChcblx0XHRcdChnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpICYmIHZhbHZlU3RhdHVzPy5hY3RGQikgfHxcblx0XHRcdChnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgJiYgdmFsdmVTdGF0dXM/LmRlQWN0RkIpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gOSkge1xuXHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHR9IGVsc2UgaWYgKGluZGV4ID09PSA4KSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKFxuXHRcdC8vIFx0YGluZGV4ICR7aW5kZXh9IGRlYWN0IGNvbmZpZyAke0RlYWN0aXZhdGVkQ29uZmlnVmFsdWV9IGJpdCBpcyAke2dldEJvb2xBdEluZGV4KFxuXHRcdC8vIFx0XHREZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLFxuXHRcdC8vIFx0XHQxMFxuXHRcdC8vIFx0KX1gXG5cdFx0Ly8gKTtcblxuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMCkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEwKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93IGl0ZW1cIjtcblx0XHRcdGlmICh2YWx2ZVN0YXR1cz8udXNsKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgQWN0aXZhdGVkXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgRGVhY3RpdmF0ZWRcIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDExKSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDExKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTEpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdFx0aWYgKHZhbHZlU3RhdHVzPy5sc2wpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJBY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBBY3RpdmF0ZWRcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiRGVhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBEZWFjdGl2YXRlZFwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTIpIHtcblx0XHRpZiAodmFsdmVTdGF0dXM/LmxvY2F0ZSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJzaG93IGl0ZW1cIiwgXCJcIikgKyBcIiBzaG93IGl0ZW1cIjtcblx0XHRcdGlmIChcblx0XHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDgpIHx8XG5cdFx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDgpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID1cblx0XHRcdFx0XHRjbGFzc05hbWUucmVwbGFjZShcInNob3cgbGFyZ2UgaXRlbVwiLCBcIlwiKSArIFwiIHNob3cgbGFyZ2UgaXRlbVwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImhpZGUgaXRlbVwiLCBcIlwiKSArIFwiIGhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fVxuXHQvLyBBZGRpdGlvbnMgdG8gdGhlIGNsYXNzTmFtZVxuXG5cdGlmIChjbGFzc05hbWUuaW5jbHVkZXMoXCJzaG93XCIpICYmICFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtXCIpKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCwgY2xhc3NOYW1lKTtcblx0XHRpZiAodmFsdmVTdGF0dXM/LmFsYXJtKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkFsYXJtU3RhdGVcIiwgXCJcIikgKyBcIiBBbGFybVN0YXRlXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uY2hhbmdpbmcpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQ2hhbmdpbmdcIiwgXCJcIikgKyBcIiBDaGFuZ2luZ1wiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hbnVhbCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJNYW51YWxcIiwgXCJcIikgKyBcIiBNYW51YWxcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYXNrZWQgJiYgIXZhbHZlU3RhdHVzLmFsYXJtKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk5vQWxhcm1NYXNrXCIsIFwiXCIpICsgXCIgTm9BbGFybU1hc2tcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYXNrZWQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTWFza2VkXCIsIFwiXCIpICsgXCIgTWFza2VkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uYWN0RkIpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgQWN0aXZhdGVkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uZGVBY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJEZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIERlYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHR9XG5cdC8vIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgsIGNsYXNzTmFtZSk7XG5cblx0cmV0dXJuIGNsYXNzTmFtZTsgLy8gZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbm8gb3RoZXIgY29uZGl0aW9uIGlzIG1ldFxufTtcbi8qKlxuICogQHJldHVybnMgQXJyYXkgb2YgaXRlbU5hbWUocykgZm9yIGVhY2ggdmlzdWFsIGVsZW1lbnQgb2YgYSB2YWx2ZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGl0ZW1OYW1lcyA9IE9iamVjdC5lbnRyaWVzKEl0ZW1OYW1lRW51bSkubWFwKChrZXksIGluZGV4KSA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKGBJbiBidWlsZCBJdGVtTmFtZXMgbmFtZSAke2tleX0gaW5kZXggJHtpbmRleH1gKTtcblx0cmV0dXJuIHtcblx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdG5hbWU6IGtleSxcblx0XHR2YWx1ZToga2V5WzFdLFxuXHRcdGluZGV4OiBpbmRleCxcblx0fTtcbn0pO1xuZXhwb3J0IGNvbnN0IHZhbHZlTXBJdGVtTmFtZXMgPSBPYmplY3QuZW50cmllcyh2YWx2ZU1wSXRlbU5hbWVFbnVtKS5tYXAoXG5cdChrZXksIGluZGV4KSA9PiB7XG5cdFx0Ly8gY29uc29sZS5sb2coYEluIGJ1aWxkIEl0ZW1OYW1lcyBuYW1lICR7a2V5fSBpbmRleCAke2luZGV4fWApO1xuXHRcdHJldHVybiB7XG5cdFx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdFx0bmFtZToga2V5LFxuXHRcdFx0dmFsdWU6IGtleVsxXSxcblx0XHRcdGluZGV4OiBpbmRleCxcblx0XHR9O1xuXHR9XG4pO1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lID0gKFxuXHRjbGFzc05hbWU6IHN0cmluZyxcblx0aXRlbUlkUG9zaXRpb246IEl0ZW1JZFBvc2l0aW9uVHlwZVxuKTogSXRlbUlkUG9zaXRpb25UeXBlID0+IHtcblx0Ly8gQ2hlY2sgY2xhc3NOYW1lIGluY2x1ZGVzICdpdGVtSWQgcG9wb3ZlcicsIGlmIG5vdCByZXR1cm4gY2xhc3NOYW1lIGFuZCB3YXJuXG5cdGlmICghY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXRlbUlkIHBvcG92ZXJcIikpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIkZ1bmN0aW9uIGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lIGNhbGxlZCB3aGVuICdpdGVtSWQgcG9wb3Zlcicgbm90IGluIGdpdmVuIGNsYXNzTmFtZVwiXG5cdFx0KTtcblx0XHRyZXR1cm4gY2xhc3NOYW1lO1xuXHR9XG5cdC8vIE92ZXIgd3JpdGUgZ2l2ZW4gY2xhc3NOYW1lXG5cdGNsYXNzTmFtZSA9IFwiaXRlbUlkIHBvcG92ZXJcIjtcblx0c3dpdGNoIChpdGVtSWRQb3NpdGlvbikge1xuXHRcdGNhc2UgXCJsZWZ0XCI6XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLWxlZnRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi1sZWZ0XCI7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tcmlnaHRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi1yaWdodFwiO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcInRvcC1sZWZ0XCI6XG5cdFx0XHRjbGFzc05hbWUgPVxuXHRcdFx0XHRjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLXRvcC1sZWZ0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tdG9wLWxlZnRcIjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJ0b3AtcmlnaHRcIjpcblx0XHRcdGNsYXNzTmFtZSA9XG5cdFx0XHRcdGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tdG9wLXJpZ2h0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tdG9wLXJpZ2h0XCI7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiYm90dG9tLWxlZnRcIjpcblx0XHRcdGNsYXNzTmFtZSA9XG5cdFx0XHRcdGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tYm90dG9tLWxlZnRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi1ib3R0b20tbGVmdFwiO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImJvdHRvbS1yaWdodFwiOlxuXHRcdFx0Y2xhc3NOYW1lID1cblx0XHRcdFx0Y2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi1ib3R0b20tcmlnaHRcIiwgXCJcIikgK1xuXHRcdFx0XHRcIiBwb3NpdGlvbi1ib3R0b20tcmlnaHRcIjtcblx0XHRcdGJyZWFrO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzTmFtZTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHB1bXBJdGVtTmFtZXMgPSBwdW1wSXRlbUxpc3QubWFwKFxuXHQoa2V5LCBpbmRleCkgPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKGBJbiBidWlsZCBJdGVtTmFtZXMgbmFtZSAke2tleX0gaW5kZXggJHtpbmRleH1gKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0a2V5OiB1dWlkdjQoKSxcblx0XHRcdG5hbWU6IGtleSxcblx0XHRcdGluZGV4OiBpbmRleCxcblx0XHR9O1xuXHR9XG4pO1xuY29uc3QgZ2V0UHVtcENvbmZpZ3VyYXRpb24gPSAocHVtcFR5cGU6IFB1bXBUeXBlKTpudW1iZXIgPT57XG5cdHN3aXRjaCAocHVtcFR5cGUpe1xuXHRcdGNhc2UgXCJjZW50cmlmdWdhbFwiOlxuXHRcdFx0cmV0dXJuIDFcblx0XHRjYXNlIFwiZGlhcGhyYWdtXCI6XG5cdFx0XHRyZXR1cm4gMVxuXHRcdGNhc2UgXCJwb3NpdGl2ZS1kaXNwbGFjbWVudFwiOlxuXHRcdFx0cmV0dXJuIDFcblx0XHRjYXNlIFwicHJvZ3Jlc3NpdmUtY2F2aXR5XCI6XG5cdFx0XHRyZXR1cm4gMVxuXHRcdGNhc2UgXCJnZWFyXCI6XG5cdFx0XHRyZXR1cm4gM1xuXHRcdGNhc2UgXCJsaXF1aWQtcmluZ1wiOlxuXHRcdFx0cmV0dXJuIDNcblx0XHRjYXNlIFwicG9zaXRpdmUtc2NyZXdcIjpcblx0XHRcdHJldHVybiAzXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IEVycm9yKGBJbiBnZXRQdW1wQ29uZmlndXJhdGlvbigpIHB1bXAgdHlwZTogJHtwdW1wVHlwZX0gbm90IGZvdW5kYClcblx0fVxuXG5cbn1cbmV4cG9ydCBjb25zdCBnZXRQdW1wSXRlbUNsYXNzTmFtZSA9IChcblx0aW5kZXg6IG51bWJlcixcblx0c3RhdHVzOiBQdW1wU3RhdGUsXG5cdHB1bXBUeXBlOiBQdW1wVHlwZVxuXHQpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBjb25maWd1cmF0aW9uID0gZ2V0UHVtcENvbmZpZ3VyYXRpb24ocHVtcFR5cGUpXG5cdGxldCBjbGFzc05hbWUgPSBcIlwiO1xuXHQvLyBIYW5kbGUgdGhlIGZhY3QgdGhhdCBBY3RpdmF0ZWRDb25maWcgYW5kIERlYWN0aXZhdGVkQ29uZmlnIGFyZSBvcHRpb25hbCBhbmQgbWF5YmUgdW5kZWZpbmVkXG5cdGlmIChpbmRleCA8IDIpIHtcblx0XHRpZiAoZ2V0Qm9vbEF0SW5kZXgoY29uZmlndXJhdGlvbiwgaW5kZXgpKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBgc2hvdyBpdGVtICR7cHVtcFR5cGV9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH1cblx0Ly8gQWRkaXRpb25zIHRvIHRoZSBjbGFzc05hbWVcblxuXHRpZiAoY2xhc3NOYW1lLmluY2x1ZGVzKFwic2hvd1wiKSAmJiAhY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXRlbVwiKSkge1xuXHRcdGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgsIGNsYXNzTmFtZSk7XG5cdFx0aWYgKHN0YXR1cz8uYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWxhcm1TdGF0ZVwiLCBcIlwiKSArIFwiIEFsYXJtU3RhdGVcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8uY2hhbmdpbmcpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQ2hhbmdpbmdcIiwgXCJcIikgKyBcIiBDaGFuZ2luZ1wiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5tYW51YWwpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTWFudWFsXCIsIFwiXCIpICsgXCIgTWFudWFsXCI7XG5cdFx0fVxuXHRcdGlmIChzdGF0dXM/Lm1hc2tlZCAmJiAhc3RhdHVzLmFsYXJtKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk5vQWxhcm1NYXNrXCIsIFwiXCIpICsgXCIgTm9BbGFybU1hc2tcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8ubWFza2VkKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk1hc2tlZFwiLCBcIlwiKSArIFwiIE1hc2tlZFwiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5hY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJBY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBBY3RpdmF0ZWRcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8uZGVBY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJEZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIERlYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjbGFzc05hbWU7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHVtcFN0YXR1c0NsYXNzTmFtZXMgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIHN0YXR1czogUHVtcFN0YXRlKSA9PiB7XG5cdC8vIEFkZGl0aW9ucyB0byB0aGUgY2xhc3NOYW1lXG5cdGNvbnNvbGUubG9nKGBzdGF0dXM6ICR7SlNPTi5zdHJpbmdpZnkoc3RhdHVzLG51bGwsIDIpfWApO1xuXG5cblx0aWYgKGNsYXNzTmFtZS5pbmNsdWRlcyhcInNob3dcIikgJiYgIWNsYXNzTmFtZS5pbmNsdWRlcyhcIml0ZW1cIikpIHtcblx0XHRpZiAoc3RhdHVzPy5hbGFybSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJBbGFybVN0YXRlXCIsIFwiXCIpICsgXCIgQWxhcm1TdGF0ZVwiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5jaGFuZ2luZykge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJDaGFuZ2luZ1wiLCBcIlwiKSArIFwiIENoYW5naW5nXCI7XG5cdFx0fVxuXHRcdGlmIChzdGF0dXM/Lm1hbnVhbCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJNYW51YWxcIiwgXCJcIikgKyBcIiBNYW51YWxcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8ubWFza2VkICYmICFzdGF0dXMuYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTm9BbGFybU1hc2tcIiwgXCJcIikgKyBcIiBOb0FsYXJtTWFza1wiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5tYXNrZWQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTWFza2VkXCIsIFwiXCIpICsgXCIgTWFza2VkXCI7XG5cdFx0fVxuXHRcdGlmIChzdGF0dXM/LmFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIEFjdGl2YXRlZFwiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5kZUFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgRGVhY3RpdmF0ZWRcIjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNsYXNzTmFtZTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdHlwZSBDb21tYW5kVmFsdmVNcFByb3BzIH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuLy8gaW1wb3J0IHsgSWNvbkF1dG8sIEljb25IYW5kQ2xpY2sgfSBmcm9tICcuLi91dGlscy9pY29ucyc7XG5pbXBvcnQgeyBQcm9wZXJ0eVRyZWUgfSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbXBvbmVudFByb3BzLFxuXHRDb21wb25lbnRNZXRhLFxuXHRQQ29tcG9uZW50LFxuXHRTaXplT2JqZWN0LFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7IC8vJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG4vLyBpbXBvcnQgeyBpbml0aWFsQ29udHJvbFN0YXRlIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyIH0gZnJvbSBcIi4uL2FwaS9ob29rc1wiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5pbnB1dC5Db21tYW5kVmFsdmVNcFwiO1xuXG5jb25zdCBhcmVFcXVhbCA9IChcblx0cHJldlByb3BzOiBDb21wb25lbnRQcm9wczxDb21tYW5kVmFsdmVNcFByb3BzPixcblx0bmV4dFByb3BzOiBDb21wb25lbnRQcm9wczxDb21tYW5kVmFsdmVNcFByb3BzPlxuKSA9PiB7XG5cdC8vIHJldHVybiB0cnVlIGlmIHByb3BzIGFyZSBlcXVhbCwgZmFsc2UgaWYgcmUtcmVuZGVyIGlzIG5lZWRlZFxuXHRyZXR1cm4gcHJldlByb3BzLnByb3BzID09PSBuZXh0UHJvcHMucHJvcHM7XG59O1xuXG4vKipcbiAqIFZhbHZlIGNvbXBvbmVudCBjbGFzcy5cbiAqIEV4dGVuZHMgdGhlIGJhc2UgQ29tcG9uZW50IGNsYXNzIGZyb20gUGVyc3BlY3RpdmUsIHR5cGVkIHdpdGggVmFsdmVQcm9wcy5cbiAqIFByb3ZpZGVzIGEgY3VzdG9taXphYmxlIHZhbHZlIHdpdGggcHJvcGVyIGhhbmRsaW5nIG9mIGRlc2lnbmVyL3ByZXZpZXcgbW9kZXMuXG5cbiAqL1xuZXhwb3J0IGNvbnN0IENvbW1hbmRWYWx2ZU1wID0gUmVhY3QubWVtbyhcblx0KHByb3BzOiBDb21wb25lbnRQcm9wczxDb21tYW5kVmFsdmVNcFByb3BzPikgPT4ge1xuXHRcdGNvbnN0IHsgc3RhdGUsIHJlZHVjZXIgfSA9IHVzZVZhbHZlTXBDb21tYW5kUmVkdWNlcigpO1xuXHRcdC8vIGNvbnN0IHRyZWUgPSBwcm9wcy5zdG9yZS5wcm9wc1xuXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRcdC8vIFN1YnNjcmliZSB0byBjaGFuZ2VzIG9uIHRoZSBcImNvbW1hbmRcIiBwcm9wZXJ0eVxuXHRcdFx0Y29uc3QgdW5zdWJzY3JpYmUgPSBwcm9wcy5zdG9yZS5wcm9wcy5zdWJzY3JpYmUoKHRyZWU6IFByb3BlcnR5VHJlZSkgPT4ge1xuXHRcdFx0XHQvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuZXZlciBcImNvbW1hbmRcIiBjaGFuZ2VzXG5cdFx0XHRcdGNvbnN0IGNvbW1hbmQgPSB0cmVlLnJlYWQoXCJjb21tYW5kXCIpO1xuXHRcdFx0XHRjb25zdCB7IG1haW4sIHVwcGVyU2VhdCwgbG93ZXJTZWF0IH0gPSBjb21tYW5kO1xuXHRcdFx0XHQvLyBZb3UgY2FuIHVwZGF0ZSBsb2NhbCBzdGF0ZSBvciBwZXJmb3JtIG90aGVyIGFjdGlvbnMgaGVyZVxuXHRcdFx0XHQvLyBVcGRhdGUgbWFpbiBzdGF0ZSBpZiBuZWVkZWRcblx0XHRcdFx0aWYgKHN0YXRlLmNvbW1hbmQ/Lm1haW4gJiYgbWFpbikge1xuXHRcdFx0XHRcdGlmIChtYWluLmF1dG9NYW51YWwgIT09IHN0YXRlLmNvbW1hbmQubWFpbi5hdXRvTWFudWFsKSB7XG5cdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZUF1dG9NYW5TZWxlY3Rpb24oIW1haW4uYXV0b01hbnVhbCA/IFwiYXV0b1wiIDogXCJtYW51YWxcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtYWluLmFjdGl2YXRpb24gIT09IHN0YXRlLmNvbW1hbmQubWFpbi5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW1haW4uYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZU1haW5NYW51YWxPZmYoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobWFpbi5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlTWFpbk1hbnVhbE9uKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVXBkYXRlIGxvd2VyU2VhdCBzdGF0ZSBpZiBuZWVkZWRcblx0XHRcdFx0aWYgKHN0YXRlLmNvbW1hbmQ/Lmxvd2VyU2VhdCAmJiBsb3dlclNlYXQpIHtcblx0XHRcdFx0XHRpZiAobG93ZXJTZWF0LmFjdGl2YXRpb24gIT09IHN0YXRlLmNvbW1hbmQubG93ZXJTZWF0LmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdGlmICghbG93ZXJTZWF0LmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVMc2xNYW51YWxPZmYoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobG93ZXJTZWF0LmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVMc2xNYW51YWxPbigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBVcGRhdGUgdXBwZXJTZWF0IHN0YXRlIGlmIG5lZWRlZFxuXHRcdFx0XHRpZiAoc3RhdGUuY29tbWFuZD8udXBwZXJTZWF0ICYmIHVwcGVyU2VhdCkge1xuXHRcdFx0XHRcdGlmICh1cHBlclNlYXQuYWN0aXZhdGlvbiAhPT0gc3RhdGUuY29tbWFuZC51cHBlclNlYXQuYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0aWYgKCF1cHBlclNlYXQuYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZVVzbE1hbnVhbE9mZigpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh1cHBlclNlYXQuYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZVVzbE1hbnVhbE9uKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiY29tbWFuZCBjaGFuZ2VkOlwiLCBjb21tYW5kKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRpZiAodHlwZW9mIHVuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHR1bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH0sIFtwcm9wcy5zdG9yZS5wcm9wc10pO1xuXG5cdFx0Y29uc29sZS5sb2coYHByb3BzLnN0b3JlLmFkZHJlc3NQYXRoICR7cHJvcHMuc3RvcmUuYWRkcmVzc1BhdGh9YCk7XG5cdFx0Y29uc29sZS5sb2coYHByb3BzLnN0b3JlLmlzRGlydHkgJHtwcm9wcy5zdG9yZS5wcm9wcy5pc0RpcnR5KCl9YCk7XG5cblx0XHRjb25zdCB7IG1haW4sIHVwcGVyU2VhdCwgbG93ZXJTZWF0LCBpbnRlcmxvY2tzIH0gPSBzdGF0ZS5jb21tYW5kIHx8IHt9O1xuXG5cdFx0Y29uc3QgaXNJbnRlcmxvY2tlZCA9IChpbnRlcmxvY2tzOiBib29sZWFuW10pOiBib29sZWFuID0+IHtcblx0XHRcdHJldHVybiBpbnRlcmxvY2tzLmluY2x1ZGVzKHRydWUsIDApO1xuXHRcdH07XG5cblx0XHRjb25zdCBoYW5kbGVNYWluQXV0b01hbnVhbFNlbGVjdGlvbiA9IChtb2RlOiBcImF1dG9cIiB8IFwibWFudWFsXCIpOiB2b2lkID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlQXV0b01hblNlbGVjdGlvbihtb2RlKTtcblx0XHRcdGlmIChtb2RlID09PSBcImF1dG9cIikge1xuXHRcdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLm1haW4uYXV0b01hbnVhbFwiLCBmYWxzZSk7IC8vIGZhbHNlID0gYXV0b1xuXHRcdFx0fSBlbHNlIGlmIChtb2RlID09PSBcIm1hbnVhbFwiKSB7XG5cdFx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQubWFpbi5hdXRvTWFudWFsXCIsIHRydWUpOyAvLyB0cnVlID0gbWFudWFsXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGhhbmRsZU1haW5NYW51YWxPbiA9ICgpID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlTWFpbk1hbnVhbE9uKCk7XG5cdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLm1haW4uYWN0aXZhdGlvblwiLCB0cnVlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGhhbmRsZU1haW5NYW51YWxPZmYgPSAoKSA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZU1haW5NYW51YWxPZmYoKTtcblx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQubWFpbi5hY3RpdmF0aW9uXCIsIGZhbHNlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGhhbmRsZVVzbE1hbnVhbE9uID0gKCkgPT4ge1xuXHRcdFx0cmVkdWNlci51cGRhdGVVc2xNYW51YWxPbigpO1xuXHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC51cHBlclNlYXQuYWN0aXZhdGlvblwiLCB0cnVlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGhhbmRsZVVzbE1hbnVhbE9mZiA9ICgpID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlVXNsTWFudWFsT2ZmKCk7XG5cdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLnVwcGVyU2VhdC5hY3RpdmF0aW9uXCIsIGZhbHNlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGhhbmRsZUxzbE1hbnVhbE9uID0gKCkgPT4ge1xuXHRcdFx0cmVkdWNlci51cGRhdGVMc2xNYW51YWxPbigpO1xuXHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC5sb3dlclNlYXQuYWN0aXZhdGlvblwiLCB0cnVlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGhhbmRsZUxzbE1hbnVhbE9mZiA9ICgpID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlTHNsTWFudWFsT2ZmKCk7XG5cdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLmxvd2VyU2VhdC5hY3RpdmF0aW9uXCIsIGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG1pLWNvbXBvbmVudC1jb21tYW5kLXZhbHZlLW1wIGhtaS1jb21wb25lbnQtY29tbWFuZC12YWx2ZS1tcF9fZ3JpZFwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwibWFpbi1sYWJlbFwiPnttYWluPy5sYWJlbH08L2xhYmVsPlxuXHRcdFx0XHQ8ZGl2IHJvbGU9XCJncm91cFwiIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBvdXRsaW5lZCBtYWluLWF1dG8tbWFudWFsXCI+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7IW1haW4/LmF1dG9NYW51YWwgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17aXNJbnRlcmxvY2tlZChpbnRlcmxvY2tzPy5tYWluIHx8IFtdKX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZU1haW5BdXRvTWFudWFsU2VsZWN0aW9uKFwiYXV0b1wiKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRBdXRvIHsvKiA8SWNvbkF1dG8gLz4gKi99XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7bWFpbj8uYXV0b01hbnVhbCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc0ludGVybG9ja2VkKGludGVybG9ja3M/Lm1haW4gfHwgW10pfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlTWFpbkF1dG9NYW51YWxTZWxlY3Rpb24oXCJtYW51YWxcIil9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0TWFudWFsXG5cdFx0XHRcdFx0XHR7LyogPEljb25IYW5kQ2xpY2sgLz4gKi99XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHJvbGU9XCJncm91cFwiIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBvdXRsaW5lZCBtYWluLW9uLW9mZlwiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke21haW4/LmFjdGl2YXRpb24gPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdGlzSW50ZXJsb2NrZWQoaW50ZXJsb2Nrcz8ubWFpbiB8fCBbXSkgfHwgIW1haW4/LmF1dG9NYW51YWxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU1haW5NYW51YWxPbn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRPbiB7LyogPEljb25BdXRvIC8+ICovfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAkeyFtYWluPy5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIn1gfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRpc0ludGVybG9ja2VkKGludGVybG9ja3M/Lm1haW4gfHwgW10pIHx8ICFtYWluPy5hdXRvTWFudWFsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVNYWluTWFudWFsT2ZmfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdE9mZlxuXHRcdFx0XHRcdFx0ey8qIDxJY29uSGFuZENsaWNrIC8+ICovfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInVwcGVyLXNlYXQtbGFiZWxcIj57dXBwZXJTZWF0Py5sYWJlbH08L2xhYmVsPlxuXHRcdFx0XHQ8ZGl2IHJvbGU9XCJncm91cFwiIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBvdXRsaW5lZCB1cHBlci1zZWF0LW9uLW9mZlwiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHR1cHBlclNlYXQ/LmFjdGl2YXRpb24gPyBcInNlbGVjdGVkXCIgOiBcIlwiXG5cdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdFx0aXNJbnRlcmxvY2tlZChpbnRlcmxvY2tzPy51cHBlclNlYXQgfHwgW10pIHx8ICFtYWluPy5hdXRvTWFudWFsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVVc2xNYW51YWxPbn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRPbiB7LyogPEljb25BdXRvIC8+ICovfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHQhdXBwZXJTZWF0Py5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdGlzSW50ZXJsb2NrZWQoaW50ZXJsb2Nrcz8udXBwZXJTZWF0IHx8IFtdKSB8fCAhbWFpbj8uYXV0b01hbnVhbFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlVXNsTWFudWFsT2ZmfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdE9mZlxuXHRcdFx0XHRcdFx0ey8qIDxJY29uSGFuZENsaWNrIC8+ICovfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImxvd2VyLXNlYXQtbGFiZWxcIj57bG93ZXJTZWF0Py5sYWJlbH08L2xhYmVsPlxuXHRcdFx0XHQ8ZGl2IHJvbGU9XCJncm91cFwiIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBvdXRsaW5lZCBsb3dlci1zZWF0LW9uLW9mZlwiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHRsb3dlclNlYXQ/LmFjdGl2YXRpb24gPyBcInNlbGVjdGVkXCIgOiBcIlwiXG5cdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdFx0aXNJbnRlcmxvY2tlZChpbnRlcmxvY2tzPy5sb3dlclNlYXQgfHwgW10pIHx8ICFtYWluPy5hdXRvTWFudWFsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVMc2xNYW51YWxPbn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRPbiB7LyogPEljb25BdXRvIC8+ICovfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHQhbG93ZXJTZWF0Py5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdGlzSW50ZXJsb2NrZWQoaW50ZXJsb2Nrcz8ubG93ZXJTZWF0IHx8IFtdKSB8fCAhbWFpbj8uYXV0b01hbnVhbFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTHNsTWFudWFsT2ZmfVxuXHRcdFx0XHRcdFx0dmFsdWU9e1widHJ1ZVwifVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdE9mZlxuXHRcdFx0XHRcdFx0ey8qIDxJY29uSGFuZENsaWNrIC8+ICovfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdGFyZUVxdWFsXG4pO1xuXG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIENvbW1hbmRWYWx2ZU1wTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBDb21tYW5kVmFsdmVNcDtcblx0fVxuXG5cdGdldERlZmF1bHRTaXplKCk6IFNpemVPYmplY3Qge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMjgwLFxuXHRcdFx0aGVpZ2h0OjE0MCxcblx0XHR9O1xuXHR9XG5cblx0Ly8gSW52b2tlZCB3aGVuIGFuIHVwZGF0ZSB0byB0aGUgUHJvcGVydHlUcmVlIGhhcyBvY2N1cnJlZCxcblx0Ly8gZWZmZWN0aXZlbHkgbWFwcGluZyB0aGUgdmFsdmVTdGF0dXMgb2YgdGhlIHRyZWUgdG8gY29tcG9uZW50IHByb3BzLlxuXHRnZXRQcm9wc1JlZHVjZXIodHJlZTogUHJvcGVydHlUcmVlKTogQ29tbWFuZFZhbHZlTXBQcm9wcyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbW1hbmQ6IHtcblx0XHRcdFx0aW50ZXJsb2Nrczoge1xuXHRcdFx0XHRcdG1haW46IHRyZWUucmVhZEFycmF5KFwiY29tbWFuZC5pbnRlcmxvY2tzLm1haW5cIiksXG5cdFx0XHRcdFx0dXBwZXJTZWF0OiB0cmVlLnJlYWRBcnJheShcImNvbW1hbmQuaW50ZXJsb2Nrcy51cHBlclNlYXRcIiksXG5cdFx0XHRcdFx0bG93ZXJTZWF0OiB0cmVlLnJlYWRBcnJheShcImNvbW1hbmQuaW50ZXJsb2Nrcy5sb3dlclNlYXRcIiksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1haW46IHtcblx0XHRcdFx0XHRsYWJlbDogdHJlZS5yZWFkU3RyaW5nKFwiY29tbWFuZHMubWFpbi5sYWJlbFwiLCBcIlwiKSxcblx0XHRcdFx0XHRhdXRvTWFudWFsOiB0cmVlLnJlYWRCb29sZWFuKFwiY29tbWFuZC5tYWluLmF1dG9NYW51YWxcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGFjdGl2YXRpb246IHRyZWUucmVhZEJvb2xlYW4oXCJjb21tYW5kLm1haW4uYWN0aXZhdGlvblwiLCBmYWxzZSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHVwcGVyU2VhdDoge1xuXHRcdFx0XHRcdGxhYmVsOiB0cmVlLnJlYWRTdHJpbmcoXCJjb21tYW5kcy51cHBlclNlYXQubGFiZWxcIiwgXCJcIiksXG5cdFx0XHRcdFx0YWN0aXZhdGlvbjogdHJlZS5yZWFkQm9vbGVhbihcImNvbW1hbmQudXBwZXJTZWF0LmFjdGl2YXRpb25cIiwgZmFsc2UpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsb3dlclNlYXQ6IHtcblx0XHRcdFx0XHRsYWJlbDogdHJlZS5yZWFkU3RyaW5nKFwiY29tbWFuZHMubG93ZXJTZWF0LmxhYmVsXCIsIFwiXCIpLFxuXHRcdFx0XHRcdGFjdGl2YXRpb246IHRyZWUucmVhZEJvb2xlYW4oXCJjb21tYW5kLmxvd2VyU2VhdC5hY3RpdmF0aW9uXCIsIGZhbHNlKSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fTtcblx0fVxufVxuXG4vKipcbiAqXG5nZXRQcm9wc1JlZHVjZXIodHJlZTogUHJvcGVydHlUcmVlKTogTXlQcm9wVHlwZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gd2lsbCBnaXZlIHRoZSBwcm9wZXJ0eSB0cmVlIGFzIGEgcGxhaW4ganMgb2JqZWN0LCBpbnN0ZWFkIG9mIGFuIGluc3RhbmNlIG9mIFByb3BlcnR5VHJlZVxuICAgICAgICAvLyB0aGlzIHdvdWxkIGxldCB5b3UgcmVhZCB0aGUgdmFsdWUgb2YgdGhlIHRyZWUgdmlhIGB0aGlzLnByb3BzLnByb3BzLmpzb25gLiAgU2FtZSByZXN1bHQgb2NjdXJzIGlmXG4gICAgICAgIC8vIGNhbGxpbmcgdHJlZS5yZWFkKCksIHdpdGhvdXQgcGFzc2luZyBhIHBhdGggcGFyYW1ldGVyLlxuICAgICAgIGpzb246IHRyZWUudG9QbGFpbk9iamVjdCgpXG5cblxuICAgICAgIC8vIElmIHlvdSBoYWQgdG8gd3JpdGUgdG8gdGhlIHRyZWUncyAnZGF0YScgbm9kZSwgcGFzc2luZyBpbiBhIGNhbGxiYWNrIGZ1bmN0aW9uIGluc3RlYWQgb2YgdGhlIGFjdHVhbFxuICAgICAgIC8vIFByb3BlcnR5VHJlZSB3aWxsIHNpbXBsaWZ5IHVuaXQgdGVzdGFiaWxpdHkgb2YgeW91ciBjb21wb25lbnQgb3V0c2lkZSBvZiBwZXJzcGVjdGl2ZSdzIGVudmlyb25tZW50LlxuICAgICAgIC8vIFlvdSB3b3VsZCBjYWxsIHRoaXMgdmlhIHRoaXMucHJvcHMucHJvcHMud3JpdGVEYXRhKHNvbWVOZXdEYXRhKVxuICAgICAgIHdyaXRlRGF0YTogKG5ld0pzb24pIC0+IHRyZWUud3JpdGUoXCJkYXRhXCIsIG5ld0pzb24pXG4gICAgfVxufVxuICovXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdFByb3BlcnR5VHJlZSxcbn0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHNcblx0LENvbXBvbmVudE1ldGFcblx0LFBDb21wb25lbnRcblx0LFNpemVPYmplY3Rcbn0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcblxuLy8gaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCJzcmMvdXRpbHMvY3JlYXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgUGFyYW1ldGVyc0xpc3RTdGF0ZSwgUGFyYW1JdGVtIH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgcGFyYW1ldGVySW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcblxuLy8gVHlwZXNcblxuLy8gdHlwZSBFZGl0UGFyYW1JbnB1dENvbnRleHRUeXBlID0ge1xuLy8gXHRwYXJhbUl0ZW06IFBhcmFtSXRlbTtcbi8vIFx0c2V0UGFyYW1JdGVtOiAocGFyYW1JdGVtOiBQYXJhbUl0ZW0pID0+IHZvaWQ7XG4vLyB9XG4vLyB0eXBlIEVkaXRQYXJhbUlucHV0Q29udGV4dFR5cGUgPSB7XG4vLyBcdHN0YXRlOiBQYXJhbUl0ZW1bXTtcbi8vIFx0cmVkdWNlcjogVXNlUGFyYW1ldGVyUmVkdWNlcjtcbi8vIH1cblxudHlwZSBQYXJhbWV0ZXJzTGlzdENvbXBvbmVudFByb3BzID0ge1xuXHRwYXJhbWV0ZXJzOiBQYXJhbUl0ZW1bXVxufVxuY29uc3QgaW5pdFBhcmFtZXRlcnMgPSBbe1xuXHRsYWJlbDp7XG5cdFx0dGV4dDogXCJ0ZXh0XCJcblx0fSxcblx0aW5wdXQ6IHtcblx0XHR2YWx1ZTogbnVsbCxcblx0XHRwbGFjZWhvbGRlcjogXCJFbnRlciBhIE51bWJlclwiXG5cdH1cbn1dXG5cbi8vIGNvbnN0IFtFZGl0UGFyYW1JbnB1dENvbnRleHRQcm92aWRlciwgdXNlRWRpdFBhcmFtSW5wdXRDb250ZXh0XSA9XG4vLyB1c2VDcmVhdGVDb250ZXh0PEVkaXRQYXJhbUlucHV0Q29udGV4dFR5cGU+KFwiRWRpdFBhcmFtSW5wdXRDb250ZXh0XCIpO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5pbnB1dC5QYXJhbWV0ZXJMaXN0XCI7XG5cbmV4cG9ydCBjb25zdCBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50ID0gKHByb3BzOiBDb21wb25lbnRQcm9wczxQYXJhbWV0ZXJzTGlzdENvbXBvbmVudFByb3BzPikgPT4ge1xuY29uc3QgdHJhbnNmb3JtZWRQcm9wcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuXHRjb25zdCB7IHBhcmFtZXRlcnN9ID0gcHJvcHMucHJvcHMgfHwgaW5pdFBhcmFtZXRlcnNcblx0cmV0dXJuIHBhcmFtZXRlcnNcbn0sIFtwcm9wcy5wcm9wcy5wYXJhbWV0ZXJzXSlcblxuXG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXktZmxleC1jb2x1bW5cIlxuXHRcdFx0PlxuXHRcdHt0cmFuc2Zvcm1lZFByb3BzLm1hcCgocGFyYW06IFBhcmFtSXRlbSwgaW5kZXg6IG51bWJlcik9Pntcblx0XHRcdGNvbnN0IHsgbGFiZWwsaW5wdXR9ID0gcGFyYW07XG5cdFx0XHRjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxsYWJlbCBrZXk9e2Ake2xhYmVsLnRleHR9LXBhcmFtZXRlciR7aW5kZXh9YH1jbGFzc05hbWU9XCJmaWVsZCBzbWFsbFwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsLnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImV1XCI+e2lucHV0LmV1fTwvc3Bhbj5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGlkPXtgJHtsYWJlbC50ZXh0fS1wYXJhbWV0ZXIke2luZGV4fWB9XG5cdFx0XHRcdFx0aW5wdXRNb2RlPXtpbnB1dC5pbnB1dG1vZGV9XG5cdFx0XHRcdFx0cGF0dGVybj17aW5wdXQucGF0dGVybiB8fCBcIlswLTldKlwifVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtpbnB1dC5wbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRkaXNhYmxlZD17IWlucHV0LmVkaXRhYmxlfVxuXHRcdFx0XHRcdHZhbHVlPXtpbnB1dC52YWx1ZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17XG5cdFx0XHRcdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhgT24gY2hhbmdlIGV2ZW50ICR7ZS5jdXJyZW50VGFyZ2V0LnZhbHVlfWApO1xuXHRcdFx0XHRcdFx0XHRwcm9wcy5zdG9yZS5wcm9wcy53cml0ZShcblx0XHRcdFx0XHRcdFx0XHRgcGFyYW1ldGVyc1ske2luZGV4fV0uaW5wdXQudmFsdWVgLFxuXHRcdFx0XHRcdFx0XHRcdGUuY3VycmVudFRhcmdldC52YWx1ZVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQvLyB1cGRhdGVWYWx1ZShwYXJzZUZsb2F0KHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpLnRvRml4ZWQoMikpLCBpbmRleCk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdClcblxuXHRcdH0pXG5cdH08L2Rpdj5cblx0XHQpXG5cbn07XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50TWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6c3RyaW5ne1xucmV0dXJuIENPTVBPTkVOVF9UWVBFXG5cdH1cblxuXHRnZXREZWZhdWx0U2l6ZSgpOiBTaXplT2JqZWN0e1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMTIwLFxuXHRcdFx0aGVpZ2h0OiAyNDAsXG5cdFx0fVxuXHR9XG5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFBhcmFtZXRlcnNMaXN0U3RhdGUge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYXJhbWV0ZXJzOnRyZWUucmVhZCAoJ3BhcmFtZXRlcnMnLCBwYXJhbWV0ZXJJbml0aWFsU3RhdGUpXG5cdFx0fVxuXHR9XG5cblx0Z2V0Vmlld0NvbXBvbmVudCgpOiBQQ29tcG9uZW50IHtcblx0XHRyZXR1cm4gUGFyYW1ldGVyTGlzdENvbXBvbmVudCBhcyBQQ29tcG9uZW50XG5cdH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0SXRlbUlkUG9zaXRpb25UeXBlLFxuXHR0eXBlIFB1bXBQcm9wcyxcblx0dHlwZSBQdW1wU3RhdGUsXG59IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRQcm9wZXJ0eVRyZWUsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjsgLy8nQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB7IFB1bXBDb21wb3VuZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2Nlc3Mtb2JqZWN0cy9wdW1wcy9QdW1wQ29tcG91bmRcIjtcbmltcG9ydCB7IHB1bXBJbml0aWFsU3RhdHVzIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLlB1bXBcIjtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuICovXG5leHBvcnQgY2xhc3MgUHVtcCBleHRlbmRzIENvbXBvbmVudDxDb21wb25lbnRQcm9wczxQdW1wUHJvcHM+LCBhbnk+IHtcblx0dmFsdmVSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG5cblx0Y29uc3RydWN0b3IocHJvcHM6IENvbXBvbmVudFByb3BzPFB1bXBQcm9wcz4pIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy52YWx2ZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblx0fVxuXG5cdC8vIFRoaXMgaXMgYSBsaWZlY3ljbGUgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBtb3VudGVkIHRvIHRoZSBET00uXG5cdGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuXHRcdC8vIE5vIG5lZWQgdG8gaW5pdGlhbGl6ZSB2YWx2ZVJlZiBoZXJlXG5cdH1cblx0cHJvY2Vzc09iamVjdDogUHVtcFN0YXRlID1cblx0XHR0aGlzLnByb3BzLnByb3BzLnByb2Nlc3NPYmplY3Q/LnN0YXR1cyB8fCBwdW1wSW5pdGlhbFN0YXR1cztcblx0c3RhdHVzOiBQdW1wU3RhdGUgPSB0aGlzLnByb2Nlc3NPYmplY3Q7XG5cdHNob3dMYWJlbDogYm9vbGVhbiA9IHRoaXMucHJvcHMucHJvcHMuc2hvd0xhYmVsIHx8IGZhbHNlO1xuXHRsYWJlbFBvc2l0aW9uOiBJdGVtSWRQb3NpdGlvblR5cGUgPSB0aGlzLnByb3BzLnByb3BzLmxhYmVsUG9zaXRpb24gfHwgXCJsZWZ0XCI7XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSBjb21wb25lbnQncyBhY3Rpb24gZXZlbnQuXG5cdCAqL1xuXHRvbkFjdGlvblBlcmZvcm1lZCA9ICgpID0+IHtcblx0XHQvLyBJZiB0aGUgZGVzaWduZXIgaXMgaW4gXCJkZXNpZ25cIiBtb2RlLCBkb24ndCBkbyBhbnl0aGluZ1xuXHRcdGlmICghdGhpcy5wcm9wcy5ldmVudHNFbmFibGVkKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGlzIGRpc2FibGVkIGluIHRoZSBkZXNpZ24tc2NvcGVcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgY2xpY2tlZCFcIik7XG5cdFx0dGhpcy5wcm9wcy5jb21wb25lbnRFdmVudHMuZmlyZUNvbXBvbmVudEV2ZW50KFwib25BY3Rpb25QZXJmb3JtZWRcIiwge30pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0Ly8gPGRpdj5UaGlzIGlzIFZhbHZlPC9kaXY+XG5cdFx0XHQ8UHVtcENvbXBvdW5kLlJvb3Rcblx0XHRcdFx0Y29tcG9uZW50UHJvcHM9e3RoaXMucHJvcHN9XG5cdFx0XHRcdHB1bXBQcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQ9e3RoaXMub25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxQdW1wQ29tcG91bmQucHVtcCAvPlxuXHRcdFx0XHQ8UHVtcENvbXBvdW5kLnBvcG92ZXIgYW5jaG9yRWw9e3RoaXMudmFsdmVSZWYuY3VycmVudH0gLz5cblx0XHRcdDwvUHVtcENvbXBvdW5kLlJvb3Q+XG5cdFx0KTtcblx0fVxufVxuLy8gVGhpcyBpcyB0aGUgYWN0dWFsIHRoaW5nIHRoYXQgZ2V0cyByZWdpc3RlcmVkIHdpdGggdGhlIGNvbXBvbmVudCByZWdpc3RyeS5cbmV4cG9ydCBjbGFzcyBQdW1wTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBQdW1wO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAyNCxcblx0XHRcdGhlaWdodDogNDgsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFB1bXBQcm9wcyB7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0cHVtcFR5cGU6IHRyZWUucmVhZFN0cmluZyhcInB1bXBUeXBlXCIsIFwiY2VudHJpZnVnYWxcIiksXG5cdFx0XHRwcm9jZXNzT2JqZWN0OiB7XG5cdFx0XHRcdHN0YXR1czoge1xuXHRcdFx0XHRcdGFsYXJtOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuYWxhcm1cIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGFjdEZCOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuYWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGRlQWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5kZUFjdEZCXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRjb25maWd1cmF0aW9uOiB0cmVlLnJlYWROdW1iZXIoXG5cdFx0XHRcdFx0XHRcInByb2Nlc3NPYmplY3Quc3RhdHVzLmNvbmZpZ3VyYXRpb25cIixcblx0XHRcdFx0XHRcdDdcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdGl0ZW1OYW1lOiB0cmVlLnJlYWRTdHJpbmcoXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5pdGVtTmFtZVwiLCBcIlwiKSxcblx0XHRcdFx0XHRtYW51YWw6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5tYW51YWxcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdG1hc2tlZDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLm1hc2tlZFwiLCBmYWxzZSksXG5cdFx0XHRcdFx0Y2hhbmdpbmc6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5jaGFuZ2luZ1wiLCBmYWxzZSksXG5cdFx0XHRcdFx0bG9jYXRlOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubG9jYXRlXCIsIGZhbHNlKSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzaG93TGFiZWw6IHRyZWUucmVhZEJvb2xlYW4oXCJzaG93TGFiZWxcIiwgZmFsc2UpLFxuXHRcdFx0bGFiZWxQb3NpdGlvbjogdHJlZS5yZWFkU3RyaW5nKFwibGFiZWxQb3NpdGlvblwiLCBcInRvcC1sZWZ0XCIpLFxuXHRcdH07XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBTdGF0dXNQcm9wcyB9IGZyb20gXCIuLi9hci10eXBlcy9zdGF0dXNcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG5cdFByb3BlcnR5VHJlZSxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiOyAvLydAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5kaXNwbGF5LlN0YXR1c1ZhbHZlTXBcIjtcblxuZXhwb3J0IGNvbnN0IFN0YXR1c1ZhbHZlTXAgPSAocHJvcHM6IENvbXBvbmVudFByb3BzPFN0YXR1c1Byb3BzPikgPT4ge1xuXHQvLyBjb25zdCB1c2VQcm9wcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuXHQvLyBcdGNvbnN0IHVzZVN0YXR1c1Byb3BzID0gcHJvcHMucHJvcHMgfHwge31cblx0Ly8gXHRyZXR1cm4gdXNlU3RhdHVzUHJvcHNcblx0Ly8gfVxuXHQvLyAsIFtwcm9wcy5wcm9wc10pXG5cdGNvbnN0IHsgc3RhdHVzSXRlbXMgfSA9IHByb3BzLnByb3BzO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJobWktY29tcG9uZW50LXN0YXR1cy12YWx2ZS1tcCBobWktY29tcG9uZW50LXN0YXR1cy12YWx2ZS1tcF9fZ3JpZFwiPlxuXHRcdFx0PHVsXG5cdFx0XHRjbGFzc05hbWU9XCJsaXN0IGJvcmRlcmVkIGRlbnNlXCI+XG5cblx0XHRcdHtzdGF0dXNJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIiA+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIngtc21hbGxcIj5cblx0XHRcdFx0XHRcdFx0XHR7aXRlbS5sYWJlbH1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRcdFx0XHRpZD17YGNoZWNrYm94LSR7aW5kZXh9YH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2l0ZW0uc3RhdHVzfVxuXHRcdFx0XHRcdFx0XHRcdHJlYWRPbmx5PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0XHQ8L3VsPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbi8vIFRoaXMgaXMgdGhlIGFjdHVhbCB0aGluZyB0aGF0IGdldHMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBjb21wb25lbnQgcmVnaXN0cnkuXG5leHBvcnQgY2xhc3MgU3RhdHVzVmFsdmVNcE1ldGEgaW1wbGVtZW50cyBDb21wb25lbnRNZXRhIHtcblx0Z2V0Q29tcG9uZW50VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBDT01QT05FTlRfVFlQRTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyBUaGUgUmVhY3QgY29tcG9uZW50IGNsYXNzLlxuXHQgKi9cblx0Z2V0Vmlld0NvbXBvbmVudCgpOiBQQ29tcG9uZW50IHtcblx0XHRyZXR1cm4gU3RhdHVzVmFsdmVNcCBhcyB1bmtub3duIGFzIFBDb21wb25lbnQ7XG5cdH1cblxuXHRnZXREZWZhdWx0U2l6ZSgpOiBTaXplT2JqZWN0IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IDI0LFxuXHRcdFx0aGVpZ2h0OiA0OCxcblx0XHR9O1xuXHR9XG5cblx0Ly8gSW52b2tlZCB3aGVuIGFuIHVwZGF0ZSB0byB0aGUgUHJvcGVydHlUcmVlIGhhcyBvY2N1cnJlZCxcblx0Ly8gZWZmZWN0aXZlbHkgbWFwcGluZyB0aGUgdmFsdmVTdGF0dXMgb2YgdGhlIHRyZWUgdG8gY29tcG9uZW50IHByb3BzLlxuXHRnZXRQcm9wc1JlZHVjZXIodHJlZTogUHJvcGVydHlUcmVlKTogU3RhdHVzUHJvcHMge1xuXHRcdGNvbnNvbGUubG9nKGBzdGF0dXMgJHt0cmVlLnJlYWQoYHN0YXR1c2ApfWApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXR1c0l0ZW1zOiB0cmVlLnJlYWQoXCJzdGF0dXNcIiwgW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6IGBsYWJlbCB0ZXh0YCxcblx0XHRcdFx0XHRzdGF0dXM6IGZhbHNlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSksXG5cdFx0fTtcblx0fVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRJdGVtSWRQb3NpdGlvblR5cGUsXG5cdFByb2Nlc3NPYmplY3QsXG5cdHR5cGUgVmFsdmVQcm9wcyxcblx0dHlwZSBWYWx2ZVN0YXRlLFxufSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5cbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0UHJvcGVydHlUcmVlLFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbXBvbmVudFByb3BzLFxuXHRDb21wb25lbnRNZXRhLFxuXHRQQ29tcG9uZW50LFxuXHRTaXplT2JqZWN0LFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7IC8vJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG5pbXBvcnQgeyBWYWx2ZU1wQ29tcG91bmQgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUtbXAvVmFsdmVNcFwiO1xuaW1wb3J0IHsgcHJvY2Vzc09iamVjdFByb3BzIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcbi8vIGltcG9ydCB7IHZhbHZlUHJvcHMgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUvaW5pdGlhbFN0YXRlXCI7XG4vLyBpbXBvcnQgeyBWYWx2ZUZDQ29tcG91bmQgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUvVmFsdmVGQ1wiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5wcm9jZXNzX29iamVjdHMuVmFsdmVfbXBcIjtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuICovXG5leHBvcnQgY2xhc3MgVmFsdmUgZXh0ZW5kcyBDb21wb25lbnQ8Q29tcG9uZW50UHJvcHM8VmFsdmVQcm9wcz4sIGFueT4ge1xuXHR2YWx2ZVJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wczogQ29tcG9uZW50UHJvcHM8VmFsdmVQcm9wcz4pIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy52YWx2ZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblx0fVxuXG5cdC8vIFRoaXMgaXMgYSBsaWZlY3ljbGUgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBtb3VudGVkIHRvIHRoZSBET00uXG5cdGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuXHRcdC8vIE5vIG5lZWQgdG8gaW5pdGlhbGl6ZSB2YWx2ZVJlZiBoZXJlXG5cdH1cblx0cHJvY2Vzc09iamVjdDogUHJvY2Vzc09iamVjdCA9XG5cdFx0dGhpcy5wcm9wcy5wcm9wcy5wcm9jZXNzT2JqZWN0IHx8IHByb2Nlc3NPYmplY3RQcm9wcztcblx0c3RhdHVzOiBWYWx2ZVN0YXRlID0gdGhpcy5wcm9jZXNzT2JqZWN0LnN0YXR1cztcblx0c2hvd0xhYmVsOiBib29sZWFuID0gdGhpcy5wcm9wcy5wcm9wcy5zaG93TGFiZWwgfHwgZmFsc2U7XG5cdGxhYmVsUG9zaXRpb246IEl0ZW1JZFBvc2l0aW9uVHlwZSA9IHRoaXMucHJvcHMucHJvcHMubGFiZWxQb3NpdGlvbiB8fCBcImxlZnRcIjtcblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIGNvbXBvbmVudCdzIGFjdGlvbiBldmVudC5cblx0ICovXG5cdG9uQWN0aW9uUGVyZm9ybWVkID0gKCkgPT4ge1xuXHRcdC8vIElmIHRoZSBkZXNpZ25lciBpcyBpbiBcImRlc2lnblwiIG1vZGUsIGRvbid0IGRvIGFueXRoaW5nXG5cdFx0aWYgKCF0aGlzLnByb3BzLmV2ZW50c0VuYWJsZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgaXMgZGlzYWJsZWQgaW4gdGhlIGRlc2lnbi1zY29wZVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBjbGlja2VkIVwiKTtcblx0XHR0aGlzLnByb3BzLmNvbXBvbmVudEV2ZW50cy5maXJlQ29tcG9uZW50RXZlbnQoXCJvbkFjdGlvblBlcmZvcm1lZFwiLCB7fSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQvLyA8ZGl2PlRoaXMgaXMgVmFsdmU8L2Rpdj5cblx0XHRcdDxWYWx2ZU1wQ29tcG91bmQuUm9vdFxuXHRcdFx0XHRjb21wb25lbnRQcm9wcz17dGhpcy5wcm9wc31cblx0XHRcdFx0dmFsdmVQcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQ9e3RoaXMub25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxWYWx2ZU1wQ29tcG91bmQudmFsdmUgLz5cblx0XHRcdFx0PFZhbHZlTXBDb21wb3VuZC5wb3BvdmVyIGFuY2hvckVsPXt0aGlzLnZhbHZlUmVmLmN1cnJlbnR9IC8+XG5cdFx0XHQ8L1ZhbHZlTXBDb21wb3VuZC5Sb290PlxuXHRcdCk7XG5cdH1cbn1cbi8vIFRoaXMgaXMgdGhlIGFjdHVhbCB0aGluZyB0aGF0IGdldHMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBjb21wb25lbnQgcmVnaXN0cnkuXG5leHBvcnQgY2xhc3MgVmFsdmVNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFZhbHZlO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAyNCxcblx0XHRcdGhlaWdodDogNDgsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFZhbHZlUHJvcHMge1xuXHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0YGl0ZW1OYW1lOiAke3RyZWUucmVhZFN0cmluZyhcblx0XHRcdFx0XCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5pdGVtTmFtZVwiXG5cdFx0XHQpfSBzaG93TGFiZWwgJHt0cmVlLnJlYWRCb29sZWFuKFwic2hvd0xhYmVsXCIpfWBcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb2Nlc3NPYmplY3Q6IHtcblx0XHRcdFx0c3RhdHVzOiB7XG5cdFx0XHRcdFx0YWxhcm06IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hbGFybVwiLCBmYWxzZSksXG5cdFx0XHRcdFx0YWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hY3RGQlwiLCBmYWxzZSksXG5cdFx0XHRcdFx0ZGVBY3RGQjogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmRlQWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGFjdGl2YXRlZENvbmZpZzogdHJlZS5yZWFkTnVtYmVyKFxuXHRcdFx0XHRcdFx0XCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hY3RpdmF0ZWRDb25maWdcIixcblx0XHRcdFx0XHRcdDUxMVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0ZGVhY3RpdmF0ZWRDb25maWc6IHRyZWUucmVhZE51bWJlcihcblx0XHRcdFx0XHRcdFwicHJvY2Vzc09iamVjdC5zdGF0dXMuZGVhY3RpdmF0ZWRDb25maWdcIixcblx0XHRcdFx0XHRcdDQwOTVcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdGl0ZW1OYW1lOiB0cmVlLnJlYWRTdHJpbmcoXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5pdGVtTmFtZVwiLCBcIlwiKSxcblx0XHRcdFx0XHRtYW51YWw6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5tYW51YWxcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdG1hc2tlZDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLm1hc2tlZFwiLCBmYWxzZSksXG5cdFx0XHRcdFx0Y2hhbmdpbmc6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5jaGFuZ2luZ1wiLCBmYWxzZSksXG5cdFx0XHRcdFx0bG9jYXRlOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubG9jYXRlXCIsIGZhbHNlKSxcblx0XHRcdFx0XHR1c2w6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy51c2xcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGxzbDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmxzbFwiLCBmYWxzZSksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hvd0xhYmVsOiB0cmVlLnJlYWRCb29sZWFuKFwic2hvd0xhYmVsXCIsIGZhbHNlKSxcblx0XHRcdGxhYmVsUG9zaXRpb246IHRyZWUucmVhZFN0cmluZyhcImxhYmVsUG9zaXRpb25cIiwgXCJ0b3AtbGVmdFwiKSxcblx0XHR9O1xuXHR9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcblx0UFVNUF9DT01QT05FTlRfVFlQRSxcblx0dHlwZSBFbGVtZW50UmVmLFxuXHR0eXBlIFB1bXBDb21wb3VuZENvbnRleHRUeXBlLFxuXHR0eXBlIFB1bXBDb21wb3VuZFJvb3RQcm9wcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vdmFsdmUvaXRlbVwiO1xuaW1wb3J0IHtcblx0Z2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUsXG5cdGdldFB1bXBJdGVtQ2xhc3NOYW1lLFxuXHRnZXRQdW1wU3RhdHVzQ2xhc3NOYW1lcyxcblx0cHVtcEl0ZW1OYW1lcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS91dGlsc1wiO1xuaW1wb3J0IHsgcHVtcEluaXRpYWxQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9hcGkvaW5pdGlhbFN0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9IFBVTVBfQ09NUE9ORU5UX1RZUEU7XG5cbmV4cG9ydCBjb25zdCBbUHVtcENvbnRleHRQcm92aWRlciwgdXNlUHVtcENvbnRleHRdID1cblx0dXNlQ3JlYXRlQ29udGV4dDxQdW1wQ29tcG91bmRDb250ZXh0VHlwZT4oXCJQdW1wQ29tcG91bmRcIik7XG5cbmNvbnN0IFJvb3QgPSAoe1xuXHRjb21wb25lbnRQcm9wcyxcblx0cHVtcFByb3BzLFxuXHRvbkFjdGlvblBlcmZvcm1lZCxcblx0Y2hpbGRyZW4sXG59OiBQdW1wQ29tcG91bmRSb290UHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8UHVtcENvbnRleHRQcm92aWRlclxuXHRcdFx0ey4uLntcblx0XHRcdFx0cHVtcFByb3BzLFxuXHRcdFx0XHRjb21wb25lbnRQcm9wcyxcblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L1B1bXBDb250ZXh0UHJvdmlkZXI+XG5cdCk7XG59O1xuY29uc3QgcHVtcCA9ICgpID0+IHtcblx0Y29uc3QgeyBwdW1wUHJvcHMsIG9uQWN0aW9uUGVyZm9ybWVkLCBjb21wb25lbnRQcm9wcyB9ID1cblx0XHR1c2VQdW1wQ29udGV4dChcIlZhbHZlXCIpO1xuXHRjb25zdCBlbFJlZjogRWxlbWVudFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cdGNvbnN0IHsgZW1pdCB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGNvbnN0IHsgcHJvY2Vzc09iamVjdCwgcHVtcFR5cGUgfSA9IHB1bXBQcm9wcztcblx0Y29uc3QgeyBzdGF0dXMgfSA9IHByb2Nlc3NPYmplY3QgfHwgcHVtcEluaXRpYWxQcm9wcztcblxuXHQvLyBpZiBub3QgbG9jYXRlLCB0cmltIGxhc3QgaXRlbSBmcm9tIHZhbHZlTXBJdGVtTmFtZXNcblx0bGV0IGNvbXBvbmVudEl0ZW1OYW1lcyA9IHB1bXBJdGVtTmFtZXM7XG5cdGlmICghc3RhdHVzPy5sb2NhdGUpIHtcblx0XHRjb21wb25lbnRJdGVtTmFtZXMgPSBjb21wb25lbnRJdGVtTmFtZXMuc2xpY2UoMCwgLTEpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhtaS1jb21wb25lbnQgcHVtcFwiPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRyZWY9e2VsUmVmfVxuXHRcdFx0XHR7Li4uZW1pdCh7XG5cdFx0XHRcdFx0Y2xhc3NlczogW2BobWktY29tcG9uZW50IGhtaS1jb21wb25lbnQtcHVtcCBgXSxcblx0XHRcdFx0fSl9XG5cdFx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHRcdFx0b25DbGljaz17b25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHQ8SXRlbSBpdGVtQ2xhc3NOYW1lPXtgJHtnZXRQdW1wU3RhdHVzQ2xhc3NOYW1lcyhcImJhc2UtMSBzaG93XCIsc3RhdHVzKX1gfS8+XG5cdFx0XHR7LyogPEl0ZW0gaXRlbUNsYXNzTmFtZT17YCR7Z2V0UHVtcFN0YXR1c0NsYXNzTmFtZXMoXCJiYXNlLTIgc2hvdyBpdGVtXCIsc3RhdHVzKX1gfS8+ICovfVxuXHRcdFx0ey8qIDxJdGVtIGl0ZW1DbGFzc05hbWU9e2Ake2dldFB1bXBTdGF0dXNDbGFzc05hbWVzKFwiYmFzZS0zIHNob3cgaXRlbVwiLHN0YXR1cyl9YH0vPiAqL31cblx0XHRcdDxJdGVtIGl0ZW1DbGFzc05hbWU9e1wiYmFzZS0yIHNob3cgaXRlbVwifS8+XG5cdFx0XHQ8SXRlbSBpdGVtQ2xhc3NOYW1lPXtcImJhc2UtMyBzaG93IGl0ZW1cIn0vPlxuXG5cdFx0XHRcdHtjb21wb25lbnRJdGVtTmFtZXMubWFwKCh7IG5hbWUsIGluZGV4LCBrZXkgfSkgPT4gKFxuXHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0aXRlbUNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRuYW1lICtcblx0XHRcdFx0XHRcdFwiIFwiICtcblx0XHRcdFx0XHRcdGdldFB1bXBJdGVtQ2xhc3NOYW1lKFxuXHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0c3RhdHVzLFxuXHRcdFx0XHRcdFx0XHRwdW1wVHlwZSB8fCBcImNlbnRyaWZ1Z2FsXCIsXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxJdGVtIGl0ZW1DbGFzc05hbWU9e2Bsb2NhdGUgJHtzdGF0dXMubG9jYXRlID8gXCJzaG93IGl0ZW1cIiA6IFwiaGlkZSBpdGVtXCJ9YH0vPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgcG9wb3ZlciA9ICh7IGFuY2hvckVsIH06IHsgYW5jaG9yRWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCB9KSA9PiB7XG5cdGNvbnN0IHsgcHVtcFByb3BzLCBjb21wb25lbnRQcm9wcyB9ID0gdXNlUHVtcENvbnRleHQoXCJQb3BvdmVyXCIpO1xuXHRjb25zdCB7IHNob3dMYWJlbCwgbGFiZWxQb3NpdGlvbiwgcHJvY2Vzc09iamVjdCB9ID0gcHVtcFByb3BzO1xuXHRjb25zdCB7IHN0YXR1cyB9ID0gcHJvY2Vzc09iamVjdCB8fCB7fTtcblx0aWYgKCFzaG93TGFiZWwpIHJldHVybiBudWxsO1xuXHRjb25zdCB7IHBvc2l0aW9uIH0gPSBjb21wb25lbnRQcm9wcztcblx0bGV0IGNsYXNzTmFtZSA9IFwiaXRlbUlkIHBvcG92ZXIgcG9zaXRpb24tbGVmdFwiO1xuXHRpZiAobGFiZWxQb3NpdGlvbikge1xuXHRcdGNsYXNzTmFtZSA9IGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lKGNsYXNzTmFtZSwgbGFiZWxQb3NpdGlvbik7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdHRvcDogcG9zaXRpb24ueSxcblx0XHRcdFx0bGVmdDogcG9zaXRpb24ueCxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PntzdGF0dXM/Lml0ZW1OYW1lfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IFB1bXBDb21wb3VuZCA9IHtcblx0Um9vdCxcblx0cHVtcCxcblx0cG9wb3Zlcixcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHtcblx0VmFsdmVDb21wb3VuZENvbnRleHRUeXBlLFxuXHRWYWx2ZUNvbXBvdW5kUm9vdFByb3BzLFxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VWYWx2ZVJlZHVjZXIgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2hvb2tzXCI7XG5pbXBvcnQgeyBnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZSwgZ2V0VmFsdmVNcEl0ZW1DbGFzc05hbWUsIHZhbHZlTXBJdGVtTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3V0aWxzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vdmFsdmUvaXRlbVwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyBWQUxWRV9DT01QT05FTlRfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9hcGkvdHlwZXNcIjtcbmltcG9ydCB7IHByb2Nlc3NPYmplY3RQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9hcGkvaW5pdGlhbFN0YXRlXCI7XG5cbi8vIGltcG9ydCAnLi92YWx2ZS1tcC5tb2R1bGUuY3NzJ1xuLy8gaW1wb3J0IHt2YWx2ZVN0YXR1c30gZnJvbSAnLi4vLi4vYXBpL2luaXRpYWxTdGF0ZSdcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gVkFMVkVfQ09NUE9ORU5UX1RZUEU7XG5cbi8vIGltcG9ydCB7dmFsdmVTdGF0dXN9IGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5leHBvcnQgY29uc3QgW1ZhbHZlQ29udGV4dFByb3ZpZGVyLCB1c2VWYWx2ZUNvbnRleHRdID1cblx0dXNlQ3JlYXRlQ29udGV4dDxWYWx2ZUNvbXBvdW5kQ29udGV4dFR5cGU+KFwiVmFsdmVNcENvbXBvdW5kXCIpO1xuXG5jb25zdCBSb290ID0gKHtcblx0Y29tcG9uZW50UHJvcHMsXG5cdHZhbHZlUHJvcHMsXG5cdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRjaGlsZHJlbixcbn06IFZhbHZlQ29tcG91bmRSb290UHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8VmFsdmVDb250ZXh0UHJvdmlkZXJcblx0XHRcdHsuLi57XG5cdFx0XHRcdHZhbHZlUHJvcHMsXG5cdFx0XHRcdGNvbXBvbmVudFByb3BzLFxuXHRcdFx0XHRvbkFjdGlvblBlcmZvcm1lZCxcblx0XHRcdFx0dXNlVmFsdmVSZWR1Y2VyLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9WYWx2ZUNvbnRleHRQcm92aWRlcj5cblx0KTtcbn07XG5jb25zdCB2YWx2ZSA9ICgpID0+IHtcblx0Y29uc3QgeyB2YWx2ZVByb3BzLCBvbkFjdGlvblBlcmZvcm1lZCwgY29tcG9uZW50UHJvcHMgfSA9XG5cdFx0dXNlVmFsdmVDb250ZXh0KFwiVmFsdmVcIik7XG5cdFx0Y29uc3QgdmFsdmVSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cdGNvbnN0IHsgcG9zaXRpb24sIGVtaXQgfSA9IGNvbXBvbmVudFByb3BzO1xuXHRjb25zdCB7IHByb2Nlc3NPYmplY3R9ID0gdmFsdmVQcm9wcztcblx0Y29uc3QgeyBzdGF0dXMgfSA9IHByb2Nlc3NPYmplY3QgfHwgcHJvY2Vzc09iamVjdFByb3BzO1xuXHRjb25zdCBpbkNvb3JkID0gcG9zaXRpb24/LnggPz8gZmFsc2U7XG5cdC8vIGlmIG5vdCBsb2NhdGUsIHRyaW0gbGFzdCBpdGVtIGZyb20gdmFsdmVNcEl0ZW1OYW1lc1xuXHRsZXQgY29tcG9uZW50SXRlbU5hbWVzID0gdmFsdmVNcEl0ZW1OYW1lcztcblx0aWYgKCFzdGF0dXM/LmxvY2F0ZSkge1xuXHRcdGNvbXBvbmVudEl0ZW1OYW1lcyA9IGNvbXBvbmVudEl0ZW1OYW1lcy5zbGljZSgwLCAtMSk7XG5cdH1cblxuXHRpZiAoIWluQ29vcmQpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0cmVmPXt2YWx2ZVJlZn1cblx0XHRcdHsuLi5lbWl0KHtcblx0XHRcdFx0Y2xhc3NlczogW2BobWktY29tcG9uZW50IGhtaS1jb21wb25lbnRfX2NvbHVtbiBgXSxcblx0XHRcdH0pfVxuXHRcdFx0XHRkYXRhLWNvbXBvbmVudD17Q09NUE9ORU5UX1RZUEV9XG5cdFx0XHRcdG9uQ2xpY2s9e29uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhtaS1jb21wb25lbnRfX3Jvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG1pLWNvbXBvbmVudC12YWx2ZV9fbXBcIj5cblx0XHRcdFx0XHRcdHtjb21wb25lbnRJdGVtTmFtZXMubWFwKFxuXHRcdFx0XHRcdFx0XHQoeyB2YWx1ZSwgaW5kZXgsIGtleSB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRgcmUtcmVuZGVyZWQgLGtleSAke2tleX0gdmFsdWUgJHt2YWx1ZX0gaW5kZXggJHtpbmRleH1gXG5cdFx0XHRcdFx0XHRcdFx0Ly8gKSxcblx0XHRcdFx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbUNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlICsgXCIgXCIgKyBnZXRWYWx2ZU1wSXRlbUNsYXNzTmFtZShpbmRleCwgc3RhdHVzKVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRyZWY9e3ZhbHZlUmVmfVxuXHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRjbGFzc2VzOiBbYGhtaS1jb21wb25lbnQgaG1pLWNvbXBvbmVudC12YWx2ZV9fbXAgYF0sXG5cdFx0XHR9KX1cblx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHRcdG9uQ2xpY2s9e29uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0PlxuXHRcdFx0XHR7Y29tcG9uZW50SXRlbU5hbWVzLm1hcChcblx0XHRcdFx0XHQoeyB2YWx1ZSwgaW5kZXgsIGtleSB9KSA9PiAoXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRcdC8vIFx0YHJlLXJlbmRlcmVkICxrZXkgJHtrZXl9IHZhbHVlICR7dmFsdWV9IGluZGV4ICR7aW5kZXh9YFxuXHRcdFx0XHRcdFx0Ly8gKSxcblx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0PEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlICsgXCIgXCIgKyBnZXRWYWx2ZU1wSXRlbUNsYXNzTmFtZShpbmRleCwgc3RhdHVzKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59O1xuXG5jb25zdCBwb3BvdmVyID0gKHsgYW5jaG9yRWwgfTogeyBhbmNob3JFbDogSFRNTERpdkVsZW1lbnQgfCBudWxsIH0pID0+IHtcblx0Y29uc3QgeyB2YWx2ZVByb3BzLCBjb21wb25lbnRQcm9wcyB9ID0gdXNlVmFsdmVDb250ZXh0KFwiUG9wb3ZlclwiKTtcbiAgICBjb25zdCB7IHNob3dMYWJlbCxsYWJlbFBvc2l0aW9uLCBwcm9jZXNzT2JqZWN0IH0gPSB2YWx2ZVByb3BzO1xuXHRjb25zdCB7IHN0YXR1cyB9ID0gcHJvY2Vzc09iamVjdCB8fCBwcm9jZXNzT2JqZWN0UHJvcHM7XG5cdGlmICghc2hvd0xhYmVsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBjb21wb25lbnRQcm9wcztcblx0bGV0IGNsYXNzTmFtZSA9IFwiaXRlbUlkIHBvcG92ZXIgcG9zaXRpb24tbGVmdFwiO1xuXHRpZiAobGFiZWxQb3NpdGlvbikge1xuXHRcdGNsYXNzTmFtZSA9IGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lKGNsYXNzTmFtZSwgbGFiZWxQb3NpdGlvbilcblx0fVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGVmdDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT57c3RhdHVzPy5pdGVtTmFtZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IFZhbHZlTXBDb21wb3VuZCA9IHtcblx0Um9vdCxcblx0dmFsdmUsXG5cdHBvcG92ZXIsXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCBcIi4vaXRlbS5tb2R1bGUuY3NzXCI7XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuXHRpdGVtQ2xhc3NOYW1lOiBzdHJpbmc7XG5cdGhhbmRsZUNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn1cbi8vIGNvbnN0IGJpdCA9IChuOiBudW1iZXIsIGk6IG51bWJlcik6IG51bWJlciA9PiB7XG4vLyBcdHJldHVybiAobiA+PiBpKSAmIDE7XG4vLyB9O1xuY29uc3QgSXRlbTogUmVhY3QuRkM8SXRlbVByb3BzPiA9ICh7IGl0ZW1DbGFzc05hbWUsIGhhbmRsZUNsaWNrIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2l0ZW1DbGFzc05hbWV9XG5cdG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48L2Rpdj47XG59O1xuSXRlbS5kaXNwbGF5TmFtZSA9IFwiSXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29udGV4dDxDb250ZXh0VmFsdWVUeXBlIGV4dGVuZHMgb2JqZWN0IHwgbnVsbD4oXG4gIHJvb3RDb21wb25lbnROYW1lOiBzdHJpbmcsXG4gIGRlZmF1bHRDb250ZXh0PzogQ29udGV4dFZhbHVlVHlwZVxuKSB7XG4gIGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENvbnRleHRWYWx1ZVR5cGUgfCB1bmRlZmluZWQ+KFxuICAgIGRlZmF1bHRDb250ZXh0XG4gICk7XG5cbiAgY29uc3QgUHJvdmlkZXI6IFJlYWN0LkZDPENvbnRleHRWYWx1ZVR5cGUgJiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoXG4gICAgcHJvcHNcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgLi4uY29udGV4dCB9ID0gcHJvcHM7XG4gICAgLy8gT25seSByZS1tZW1vaXplIHdoZW4gcHJvcCB2YWx1ZXMgY2hhbmdlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIGNvbnN0IHZhbHVlID0gUmVhY3QudXNlTWVtbyhcbiAgICAgICgpID0+IGNvbnRleHQsXG4gICAgICBPYmplY3QudmFsdWVzKGNvbnRleHQpXG4gICAgKSBhcyBDb250ZXh0VmFsdWVUeXBlO1xuICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xuICB9O1xuXG4gIFByb3ZpZGVyLmRpc3BsYXlOYW1lID0gcm9vdENvbXBvbmVudE5hbWUgKyBcIlByb3ZpZGVyXCI7XG5cbiAgZnVuY3Rpb24gdXNlQ29udGV4dChjb25zdW1lck5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpO1xuICAgIGlmIChjb250ZXh0KSByZXR1cm4gY29udGV4dDtcbiAgICBpZiAoZGVmYXVsdENvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGRlZmF1bHRDb250ZXh0O1xuICAgIC8vIGlmIGEgZGVmYXVsdENvbnRleHQgd2Fzbid0IHNwZWNpZmllZCwgaXQncyBhIHJlcXVpcmVkIGNvbnRleHQuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFxcYCR7Y29uc3VtZXJOYW1lfVxcYCBtdXN0IGJlIHVzZWQgd2l0aGluIFxcYCR7cm9vdENvbXBvbmVudE5hbWV9XFxgYFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gW1Byb3ZpZGVyLCB1c2VDb250ZXh0XSBhcyBjb25zdDtcbn1cbiIsIi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnMgZm9yIG51bWJlcnNcbiAqL1xuXG4vKipcbiAqIFVzaW5nIHRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgbiwgYW4gSW50ZWdlciwgcmV0dXJucyB0aGUgYm9vbGVhblxuICogdmFsdWUgYXQgaW5kZXgsIGkuXG4gKiBAcGFyYW0gbiBhIG51bWJlciBpcyBpbXBsaWNpdHkgY29udmVydGVyIHRvIGEgMzJiaXQgaW50ZWdlciwgYnkgdGhlIGJpdHdpc2Ugb3BlcmF0b3JzXG4gKiBAcGFyYW0gaSBpcyBhIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGJpdCBwb3NpdGlvbiB0byBiZSB0ZXN0ZWRcbiAqIEByZXR1cm5zIHRoZSBib29sZWFuIHZhbHVlIG9mIHRoZSBiaXQgYXQgaW5kZXggaS5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEJvb2xBdEluZGV4ID0gKG46IG51bWJlciwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBCb29sZWFuKChuID4+IGkpICYgMSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pbmR1Y3RpdmVhdXRvbWF0aW9uX3BlcnNwZWN0aXZlX2NsaWVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDb21wb25lbnRNZXRhLCBDb21wb25lbnRSZWdpc3RyeSB9IGZyb20gJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG4vL2ltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9CdXR0b24nO1xuLy9pbXBvcnQgeyBWYWx2ZSwgVmFsdmVNZXRhIH0gZnJvbSBcIi4vY29tcG9uZW50cy9WYWx2ZVwiO1xuaW1wb3J0IHsgVmFsdmUsIFZhbHZlTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9WYWx2ZSc7XG5pbXBvcnQgeyBQdW1wLCBQdW1wTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9QdW1wJztcbmltcG9ydCB7IFBhcmFtZXRlckxpc3RDb21wb25lbnQsIFBhcmFtZXRlckxpc3RDb21wb25lbnRNZXRhfSBmcm9tICcuL2NvbXBvbmVudHMvUGFyYW1ldGVyTGlzdCdcbmltcG9ydCB7IENvbW1hbmRWYWx2ZU1wLCBDb21tYW5kVmFsdmVNcE1ldGEgfSBmcm9tICcuL2NvbXBvbmVudHMvQ29tbWFuZFZhbHZlTXAnO1xuaW1wb3J0IHsgU3RhdHVzVmFsdmVNcCwgU3RhdHVzVmFsdmVNcE1ldGEgfSBmcm9tICcuL2NvbXBvbmVudHMvU3RhdHVzVmFsdmVNcCc7XG5cbi8vIEV4cG9ydCBjb21wb25lbnRzIGZvciBleHRlcm5hbCByZWZlcmVuY2VcbmV4cG9ydCB7XG5cdFZhbHZlICxcblx0UHVtcCAsXG5cdFBhcmFtZXRlckxpc3RDb21wb25lbnQsXG5cdENvbW1hbmRWYWx2ZU1wLFxuXHRTdGF0dXNWYWx2ZU1wXG5cdH07XG5cbi8vIEltcG9ydCBjb21wb25lbnQgc3R5bGVzXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLy8gQXJyYXkgb2YgY29tcG9uZW50IG1ldGFkYXRhXG5jb25zdCBjb21wb25lbnRzOiBBcnJheTxDb21wb25lbnRNZXRhPiA9IFtcblx0bmV3IFZhbHZlTWV0YSgpLFxuXHRuZXcgUHVtcE1ldGEoKSxcblx0bmV3IFBhcmFtZXRlckxpc3RDb21wb25lbnRNZXRhKCksXG5cdG5ldyBDb21tYW5kVmFsdmVNcE1ldGEoKSxcblx0bmV3IFN0YXR1c1ZhbHZlTXBNZXRhKCksXG5cbl07XG5cbi8vIFJlZ2lzdGVyIGVhY2ggY29tcG9uZW50IHdpdGggdGhlIFBlcnNwZWN0aXZlIENvbXBvbmVudFJlZ2lzdHJ5XG5jb21wb25lbnRzLmZvckVhY2goKGM6IENvbXBvbmVudE1ldGEpID0+IENvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyKGMpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==