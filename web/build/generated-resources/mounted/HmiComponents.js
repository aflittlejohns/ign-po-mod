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
    switch (action.type) {
        case "UPDATE_AUTO_MANUAL":
            if (draft.main) {
                if (action.mode === "auto") {
                    draft.main.auto = true;
                    draft.main.manual = false;
                }
                else if (action.mode === "manual") {
                    draft.main.auto = false;
                    draft.main.manual = true;
                }
                console.log(`draft.main.auto ${draft.main.auto}`);
                console.log(`draft.main.manual ${draft.main.manual}`);
                return draft;
            }
            return draft;
        case "UPDATE_MAIN_MAN_ON":
            if (draft.main) {
                draft.main.on = true;
                draft.main.off = false;
            }
            return draft;
        case "UPDATE_MAIN_MAN_OFF":
            if (draft.main) {
                draft.main.on = false;
                draft.main.off = true;
            }
            return draft;
        case "UPDATE_USL_MAN_ON":
            if (draft.upperSeat) {
                draft.upperSeat.on = true;
                draft.upperSeat.off = false;
            }
            return draft;
        case "UPDATE_USL_MAN_OFF":
            if (draft.upperSeat) {
                draft.upperSeat.on = false;
                draft.upperSeat.off = true;
            }
            return draft;
        case "UPDATE_LSL_MAN_ON":
            if (draft.lowerSeat) {
                draft.lowerSeat.on = true;
                draft.lowerSeat.off = false;
            }
            return draft;
        case "UPDATE_LSL_MAN_OFF":
            if (draft.lowerSeat) {
                draft.lowerSeat.on = false;
                draft.lowerSeat.off = true;
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
exports.initialControlState = exports.initialOffOnState = exports.initialAutoManState = exports.parameterInitialState = exports.valveProps = exports.processObjectProps = exports.valveStatus = void 0;
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
    security: {
        enabled: false,
        accesslevel: 0,
        userNames: ["admin"],
        userRoles: ["Administrator"],
    },
    interlocks: {
        main: [],
        upperSeat: [],
        lowerSeat: []
    },
    main: {
        label: "Main",
        auto: true,
        manual: false,
        off: true,
        on: false,
    },
    upperSeat: {
        label: "Upper Seat",
        off: true,
        on: false,
    },
    lowerSeat: {
        label: "Lower Seat",
        off: true,
        on: false,
    },
};


/***/ }),

/***/ "./src/api/types.ts":
/*!**************************!*\
  !*** ./src/api/types.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemPositionEnum = exports.valveMpItemClickableNameEnum = exports.ItemClickableNameEnum = exports.valveMpItemNameEnum = exports.ItemNameEnum = exports.ValveClassNameEnum = exports.VALVE_COMPONENT_TYPE = void 0;
exports.VALVE_COMPONENT_TYPE = "hmi.process_objects.Valve";
exports.ValveClassNameEnum = {
    AlarmState: "AlarmState",
    Activated: "Activated",
    Deactivated: "Deactivated",
    Manual: "Manual",
    Masked: "Masked",
    Changing: "Changing",
    NoAlarmMask: "NoAlarmMask",
    Locate: "Locate"
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
    V1: "v1", // index 9
    usl: "usl", // index 10 upper-seat-lift
    lsl: "lsl", // index 11 lower-seat-lift
    locate: "locate" // index 12 locate animation
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
    'right',
    'left',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right'
];


/***/ }),

/***/ "./src/api/utils.ts":
/*!**************************!*\
  !*** ./src/api/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getItemIdPositionClassName = exports.valveMpItemNames = exports.itemNames = exports.getValveMpItemClassName = exports.getItemClassName = void 0;
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
                className = className.replace("show large item", "") + " show large item";
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
    if (!className.includes('itemId popover')) {
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
            className = className.replace("position-top-left", "") + " position-top-left";
            break;
        case "top-right":
            className = className.replace("position-top-right", "") + " position-top-right";
            break;
        case "bottom-left":
            className = className.replace("position-bottom-left", "") + " position-bottom-left";
            break;
        case "bottom-right":
            className = className.replace("position-bottom-right", "") + " position-bottom-right";
            break;
        default:
            break;
    }
    return className;
};
exports.getItemIdPositionClassName = getItemIdPositionClassName;


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
const hooks_1 = __webpack_require__(/*! ../api/hooks */ "./src/api/hooks.ts");
// import { valveProps } from "./process-objects/valve/initialState";
// import { ValveFCCompound } from "./process-objects/valve/ValveFC";
exports.COMPONENT_TYPE = "hmi.input.CommandValveMp";
/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
const CommandValveMp = (props) => {
    const tree = props.store.props;
    const { interlocks } = props.props;
    const isInterlocked = (interlocks) => {
        return interlocks.includes(true, 0);
    };
    const handleMainAutoManualSelection = (mode) => {
        updateAutoManSelection(mode);
        if (mode === "manual") {
            tree.write("main.auto", false);
            tree.write("main.manual", true);
        }
        else if (mode === "auto") {
            handleMainManualOff(); // When in Auto switch to manualOff to true
            tree.write("main.auto", true);
            tree.write("main.manual", false);
        }
    };
    const handleMainManualOn = () => {
        updateMainManualOn();
        tree.write("main.on", true);
        tree.write("main.off", false);
    };
    const handleMainManualOff = () => {
        updateMainManualOff();
        tree.write("main.off", true);
        tree.write("main.on", false);
    };
    const handleUslManualOn = () => {
        updateUslManualOn();
        tree.write("upperSeat.on", true);
        tree.write("upperSeat.off", false);
    };
    const handleUslManualOff = () => {
        updateUslManualOff();
        tree.write("upperSeat.off", true);
        tree.write("upperSeat.on", false);
    };
    const handleLslManualOn = () => {
        updateLslManualOn();
        tree.write("lowerSeat.on", true);
        tree.write("lowerSeat.off", false);
    };
    const handleLslManualOff = () => {
        updateLslManualOff();
        tree.write("lowerSeat.off", true);
        tree.write("lowerSeat.on", false);
    };
    const { reducer, state } = (0, hooks_1.useValveMpCommandReducer)();
    const { main, upperSeat, lowerSeat } = state;
    const { updateAutoManSelection, updateMainManualOn, updateMainManualOff, updateUslManualOn, updateUslManualOff, updateLslManualOn, updateLslManualOff, } = reducer;
    return (React.createElement("div", { className: "hmi-component-command-valve-mp hmi-component-command-valve-mp__grid" },
        React.createElement("label", { className: "main-label" }, main === null || main === void 0 ? void 0 : main.label),
        React.createElement("div", { role: "group", className: "button-group outlined main-auto-manual" },
            React.createElement("button", { className: `button outlined ${(main === null || main === void 0 ? void 0 : main.auto) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []), onClick: () => handleMainAutoManualSelection("auto") }, "Auto "),
            React.createElement("button", { className: `button outlined ${(main === null || main === void 0 ? void 0 : main.manual) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []), onClick: () => handleMainAutoManualSelection("manual") }, "Manual")),
        React.createElement("div", { role: "group", className: "button-group outlined main-on-off" },
            React.createElement("button", { className: `button outlined ${(main === null || main === void 0 ? void 0 : main.on) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []) ||
                    (main === null || main === void 0 ? void 0 : main.auto), onClick: handleMainManualOn }, "On "),
            React.createElement("button", { className: `button outlined ${(main === null || main === void 0 ? void 0 : main.off) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.main) || []) ||
                    (main === null || main === void 0 ? void 0 : main.auto), onClick: handleMainManualOff }, "Off")),
        React.createElement("label", { className: "upper-seat-label" }, upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.label),
        React.createElement("div", { role: "group", className: "button-group outlined upper-seat-on-off" },
            React.createElement("button", { className: `button outlined ${(upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.on) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.upperSeat) || []) ||
                    (main === null || main === void 0 ? void 0 : main.auto), onClick: handleUslManualOn }, "On "),
            React.createElement("button", { className: `button outlined ${(upperSeat === null || upperSeat === void 0 ? void 0 : upperSeat.off) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.upperSeat) || []) ||
                    (main === null || main === void 0 ? void 0 : main.auto), onClick: handleUslManualOff }, "Off")),
        React.createElement("label", { className: "lower-seat-label" }, lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.label),
        React.createElement("div", { role: "group", className: "button-group outlined lower-seat-on-off" },
            React.createElement("button", { className: `button outlined ${(lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.on) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.lowerSeat) || []) ||
                    (main === null || main === void 0 ? void 0 : main.auto), onClick: handleLslManualOn }, "On "),
            React.createElement("button", { className: `button outlined ${(lowerSeat === null || lowerSeat === void 0 ? void 0 : lowerSeat.off) ? "selected" : ""}`, disabled: isInterlocked((interlocks === null || interlocks === void 0 ? void 0 : interlocks.lowerSeat) || []) ||
                    (main === null || main === void 0 ? void 0 : main.auto), onClick: handleLslManualOff, value: "true" }, "Off"))));
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
            width: 24,
            height: 48,
        };
    }
    // Invoked when an update to the PropertyTree has occurred,
    // effectively mapping the valveStatus of the tree to component props.
    getPropsReducer(tree) {
        return {
            security: {
                enabled: tree.readBoolean("security.enabled", false),
                accesslevel: tree.readNumber("security.accesslevel", 511),
                userNames: tree.read("security.userNames", ["admin"]),
                userRoles: tree.read("security.userRoles", ["Administrator"]),
            },
            interlocks: {
                main: tree.readArray("interlocks.main"),
                upperSeat: tree.readArray("interlocks.upperSeat"),
                lowerSeat: tree.readArray("interlocks.lowerSeat"),
            },
            main: tree.read("main", {
                label: "",
                auto: true,
                manual: false,
                off: true,
                on: false,
            }),
            upperSeat: tree.read("upperSeat", {
                label: "",
                off: true,
                on: false,
            }),
            lowerSeat: tree.read("lowerSeat", {
                label: "",
                off: true,
                on: false,
            }),
        };
    }
}
exports.CommandValveMpMeta = CommandValveMpMeta;


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
    const { statusItems } = props.props;
    return (React.createElement("div", { className: "hmi-component-status-valve-mp hmi-component-status-valve-mp__grid" },
        React.createElement("ul", null, statusItems.map((item, index) => {
            return (React.createElement("li", { className: "border-top", key: index },
                React.createElement("label", { className: "checkbox" },
                    React.createElement("div", { className: "text" },
                        React.createElement("p", null, item.label)),
                    React.createElement("div", { className: "end" },
                        React.createElement("input", { name: "checkbox", id: `checkbox-${index}`, type: "checkbox", checked: item.status })))));
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
        return {
            statusItems: tree.read("statusItems", [
                {
                    label: "label text",
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
exports.StatusValveMp = exports.CommandValveMp = exports.ParameterListComponent = exports.Valve = void 0;
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
//import { Button, ButtonMeta } from './components/Button';
//import { Valve, ValveMeta } from "./components/Valve";
const Valve_1 = __webpack_require__(/*! ./components/Valve */ "./src/components/Valve.tsx");
Object.defineProperty(exports, "Valve", ({ enumerable: true, get: function () { return Valve_1.Valve; } }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG1pQ29tcG9uZW50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFxQztBQUNsRDtBQUNBO0FBQ0EsOEJBQThCLE9BQU8sa0ZBQWtGLE9BQU87QUFDOUgsR0FBRztBQUNIO0FBQ0EsaUtBQWlLLE1BQU07QUFDdkssR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFFO0FBQ047QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQztBQUNBO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXLElBQUksaUJBQWlCO0FBQ3JFO0FBQ0EsdUJBQXVCLG1CQUFtQixvQkFBb0IsMkRBQTJELElBQUk7QUFDN0g7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0JBQXNCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sQ0FvQkw7QUFDRDs7Ozs7Ozs7Ozs7O0FDMXZDWTs7QUFFWixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsZ0lBQXNEO0FBQ3hEOzs7Ozs7Ozs7O0FDUEEsTUFBTSxtQkFBTyxDQUFDLHFEQUFPLElBQUksbUJBQU8sQ0FBQyxvQkFBTyxFQUFFLGdCQUFnQixhQUFhLDRCQUE0QiwrQ0FBK0MsU0FBUyxzQ0FBc0MsaURBQWlELE1BQU0sQ0FBQyx1QkFBdUIsaUJBQWlCLDJCQUEyQixvQkFBb0IsTUFBTTtBQUN0Vjs7Ozs7Ozs7Ozs7O0FDRGE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZUFBZSxHQUFHLGdCQUFnQixHQUFHLFVBQVUsR0FBRyxjQUFjLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLGNBQWMsR0FBRyxVQUFVLEdBQUcsaUJBQWlCLEdBQUcsYUFBYSxHQUFHLFdBQVcsR0FBRyxXQUFXO0FBQ2xOLGVBQWUsbUJBQU8sQ0FBQyw2REFBVTtBQUNqQyx1Q0FBc0MsRUFBRSxxQ0FBcUMsNEJBQTRCLEVBQUM7QUFDMUcsZUFBZSxtQkFBTyxDQUFDLDZEQUFVO0FBQ2pDLHVDQUFzQyxFQUFFLHFDQUFxQyw0QkFBNEIsRUFBQztBQUMxRyxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBWTtBQUNyQyx5Q0FBd0MsRUFBRSxxQ0FBcUMsOEJBQThCLEVBQUM7QUFDOUcscUJBQXFCLG1CQUFPLENBQUMseUVBQWdCO0FBQzdDLDZDQUE0QyxFQUFFLHFDQUFxQyxrQ0FBa0MsRUFBQztBQUN0SCxjQUFjLG1CQUFPLENBQUMsMkRBQVM7QUFDL0Isc0NBQXFDLEVBQUUscUNBQXFDLDJCQUEyQixFQUFDO0FBQ3hHLGtCQUFrQixtQkFBTyxDQUFDLG1FQUFhO0FBQ3ZDLDBDQUF5QyxFQUFFLHFDQUFxQywrQkFBK0IsRUFBQztBQUNoSCxjQUFjLG1CQUFPLENBQUMsMkRBQVM7QUFDL0Isc0NBQXFDLEVBQUUscUNBQXFDLDJCQUEyQixFQUFDO0FBQ3hHLGNBQWMsbUJBQU8sQ0FBQywyREFBUztBQUMvQixzQ0FBcUMsRUFBRSxxQ0FBcUMsMkJBQTJCLEVBQUM7QUFDeEcsY0FBYyxtQkFBTyxDQUFDLDJEQUFTO0FBQy9CLHNDQUFxQyxFQUFFLHFDQUFxQywyQkFBMkIsRUFBQztBQUN4RyxjQUFjLG1CQUFPLENBQUMsMkRBQVM7QUFDL0Isc0NBQXFDLEVBQUUscUNBQXFDLDJCQUEyQixFQUFDO0FBQ3hHLGtCQUFrQixtQkFBTyxDQUFDLG1FQUFhO0FBQ3ZDLDBDQUF5QyxFQUFFLHFDQUFxQywrQkFBK0IsRUFBQztBQUNoSCxjQUFjLG1CQUFPLENBQUMsMkRBQVM7QUFDL0Isc0NBQXFDLEVBQUUscUNBQXFDLDJCQUEyQixFQUFDO0FBQ3hHLG9CQUFvQixtQkFBTyxDQUFDLHVFQUFlO0FBQzNDLDRDQUEyQyxFQUFFLHFDQUFxQyxpQ0FBaUMsRUFBQztBQUNwSCxtQkFBbUIsbUJBQU8sQ0FBQyxxRUFBYztBQUN6QywyQ0FBMEMsRUFBRSxxQ0FBcUMsZ0NBQWdDLEVBQUM7Ozs7Ozs7Ozs7OztBQzlCckc7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWU7Ozs7Ozs7Ozs7OztBQ0ZGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7OztBQ3hJRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBLGtCQUFlLEtBQUs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFlOzs7Ozs7Ozs7Ozs7QUNGRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RUFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7Ozs7QUNWRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBZSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRzs7Ozs7Ozs7Ozs7O0FDRmpGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7O0FDYkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7OztBQ3ZFRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUI7QUFDdkIsc0JBQXNCLG1CQUFPLENBQUMsdUVBQWU7QUFDN0M7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7O0FDdENGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHFCQUFxQjtBQUNyQixpQkFBaUIsbUJBQU8sQ0FBQyw2REFBVTtBQUNuQyx1QkFBdUIsbUJBQU8sQ0FBQyx5RUFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE9BQU8sR0FBRyxhQUFhO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7O0FDdEZGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQixtQkFBTyxDQUFDLGlFQUFZO0FBQ3ZDLHVCQUF1QixtQkFBTyxDQUFDLHlFQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7QUFDZjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1phO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFdBQVcsR0FBRyxXQUFXO0FBQ3pCLGlCQUFpQixtQkFBTyxDQUFDLDZEQUFVO0FBQ25DLGlCQUFpQixtQkFBTyxDQUFDLDZEQUFVO0FBQ25DLGVBQWUsbUJBQU8sQ0FBQyw2REFBVTtBQUNqQyx1Q0FBc0MsRUFBRSxxQ0FBcUMsd0JBQXdCLEVBQUM7QUFDdEcsdUNBQXNDLEVBQUUscUNBQXFDLHdCQUF3QixFQUFDO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7O0FDYkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsV0FBVyxHQUFHLFdBQVcsR0FBRyxxQkFBcUI7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMsaUVBQVk7QUFDdkMsdUJBQXVCLG1CQUFPLENBQUMseUVBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7OztBQ3hDRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0IsbUJBQU8sQ0FBQyxtRUFBYTtBQUN6QyxpQkFBaUIsbUJBQU8sQ0FBQyw2REFBVTtBQUNuQyx1QkFBdUIsbUJBQU8sQ0FBQyx5RUFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxPQUFPLEdBQUcsYUFBYTtBQUMzRTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7Ozs7QUM1QkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsV0FBVyxHQUFHLFdBQVc7QUFDekIsa0JBQWtCLG1CQUFPLENBQUMsK0RBQVc7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsNkRBQVU7QUFDbkMsZUFBZSxtQkFBTyxDQUFDLDZEQUFVO0FBQ2pDLHVDQUFzQyxFQUFFLHFDQUFxQyx3QkFBd0IsRUFBQztBQUN0Ryx1Q0FBc0MsRUFBRSxxQ0FBcUMsd0JBQXdCLEVBQUM7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7Ozs7QUNiRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUIsbUJBQU8sQ0FBQyx5RUFBZ0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsMkRBQVM7QUFDakMsb0JBQW9CLG1CQUFPLENBQUMsbUVBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVCQUF1QjtBQUM5RDtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7OztBQ2xCRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBWTtBQUN2Qyx1QkFBdUIsbUJBQU8sQ0FBQyx5RUFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUI7QUFDckIsaUJBQWlCLG1CQUFPLENBQUMsNkRBQVU7QUFDbkMsdUJBQXVCLG1CQUFPLENBQUMseUVBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsT0FBTyxHQUFHLGFBQWE7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7O0FDcEVGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQixtQkFBTyxDQUFDLGlFQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7Ozs7QUNORjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RUFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7Ozs7QUNpRGYsMENBdURDO0FBS0QsNENBV0M7QUFFRCw4Q0FpQkM7QUFnRUQsNERBMENDO0FBOVBELHVHQUE0QztBQUM1Qyw4RkFJd0I7QUFheEIsU0FBUyxZQUFZLENBQUMsS0FBaUIsRUFBRSxNQUFtQjtJQUMzRCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixLQUFLLG1CQUFtQjtZQUN2QixLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDckMsT0FBTyxLQUFLLENBQUM7UUFDZCxLQUFLLHFCQUFxQjtZQUN6QixLQUFLLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN2QyxPQUFPLEtBQUssQ0FBQztRQUNkLEtBQUssZUFBZTtZQUNuQixLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMzQixPQUFPLEtBQUssQ0FBQztRQUNkLEtBQUssa0JBQWtCO1lBQ3RCLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQy9CLE9BQU8sS0FBSyxDQUFDO1FBQ2QsS0FBSyxZQUFZO1lBQ2hCLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDO1FBQ2QsS0FBSyxZQUFZO1lBQ2hCLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDO1FBQ2QsS0FBSyxlQUFlO1lBQ25CLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1FBQ2QsS0FBSyxjQUFjO1lBQ2xCLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDO1FBQ2QsS0FBSyxlQUFlO1lBQ25CLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1FBQ2QsS0FBSyxpQkFBaUI7WUFDckIsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDakMsT0FBTyxLQUFLLENBQUM7UUFDZCxLQUFLLGVBQWU7WUFDbkIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDN0IsT0FBTyxLQUFLLENBQUM7UUFDZCxTQUFTLHlDQUF5QztZQUNqRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7QUFDRixDQUFDO0FBRUQsU0FBZ0IsZUFBZTtJQUM5QixNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLCtCQUFlLEVBQUMsWUFBWSxFQUFFLDBCQUFXLENBQUMsQ0FBQztJQUVyRSxTQUFTLGVBQWUsQ0FBQyxLQUFhO1FBQ3JDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxTQUFTLGlCQUFpQixDQUFDLEtBQWE7UUFDdkMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELFNBQVMsU0FBUztRQUNqQixRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsU0FBUyxTQUFTO1FBQ2pCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxTQUFTLFdBQVc7UUFDbkIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELFNBQVMsV0FBVztRQUNuQixRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsU0FBUyxhQUFhO1FBQ3JCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELFNBQVMsWUFBWTtRQUNwQixRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsU0FBUyxZQUFZO1FBQ3BCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxTQUFTLGNBQWM7UUFDdEIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsU0FBUyxZQUFZO1FBQ3BCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxNQUFNLG1CQUFtQixHQUFHO1FBQzNCLEtBQUs7UUFDTCxPQUFPLEVBQUU7WUFDUixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxXQUFXO1lBQ1gsYUFBYTtZQUNiLFNBQVM7WUFDVCxTQUFTO1lBQ1QsWUFBWTtZQUNaLFlBQVk7WUFDWixjQUFjO1lBQ2QsWUFBWTtTQUNaO0tBQ0QsQ0FBQztJQUVGLE9BQU8sbUJBQW1CLENBQUM7QUFDNUIsQ0FBQztBQUNEOztHQUVHO0FBRUgsU0FBZ0IsZ0JBQWdCLENBQy9CLEtBQWtCLEVBQ2xCLE1BQXVCO0lBRXZCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLEtBQUssY0FBYztZQUNsQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMvQyxPQUFPLEtBQUssQ0FBQztRQUNkLFNBQVMseUNBQXlDO1lBQ2pELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztBQUNGLENBQUM7QUFFRCxTQUFnQixpQkFBaUI7SUFDaEMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQkFBZSxFQUN4QyxnQkFBZ0IsRUFDaEIsb0NBQXFCLENBQ3JCLENBQUM7SUFFRixTQUFTLFdBQVcsQ0FBQyxLQUFhLEVBQUUsS0FBYTtRQUNoRCxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNELG1DQUFtQztJQUNuQyxNQUFNLG1CQUFtQixHQUFHO1FBQzNCLEtBQUs7UUFDTCxPQUFPLEVBQUU7WUFDUixXQUFXO1NBQ1g7S0FDRCxDQUFDO0lBQ0YsT0FBTyxtQkFBbUIsQ0FBQztBQUM1QixDQUFDO0FBQ0QsU0FBUyxjQUFjLENBQ3RCLEtBQTBCLEVBQzFCLE1BQTRCO0lBRTVCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLEtBQUssb0JBQW9CO1lBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNoQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFLENBQUM7b0JBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUUzQixDQUFDO3FCQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztvQkFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBRTFCLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDckQsT0FBTyxLQUFLLENBQUM7WUFDZCxDQUFDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZCxLQUFLLG9CQUFvQjtZQUN2QixJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2QsS0FBSyxxQkFBcUI7WUFDekIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNkLEtBQUssbUJBQW1CO1lBQ3ZCLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyQixLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZCxLQUFLLG9CQUFvQjtZQUN4QixJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDckIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDNUIsQ0FBQztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2QsS0FBSyxtQkFBbUI7WUFDdkIsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JCLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDMUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQzdCLENBQUM7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNiLEtBQUssb0JBQW9CO1lBQ3hCLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyQixLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUM3QixDQUFDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFFZCxTQUFTLHlDQUF5QztZQUNqRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7QUFDRixDQUFDO0FBRUQsU0FBZ0Isd0JBQXdCO0lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsK0JBQWUsRUFDeEMsY0FBYyxFQUNkLGtDQUFtQixDQUNuQixDQUFDO0lBRUYsU0FBUyxzQkFBc0IsQ0FBQyxJQUF1QjtRQUN0RCxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsU0FBUyxrQkFBa0I7UUFDMUIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsU0FBUyxtQkFBbUI7UUFDM0IsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsU0FBUyxpQkFBaUI7UUFDekIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsU0FBUyxrQkFBa0I7UUFDMUIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsU0FBUyxpQkFBaUI7UUFDekIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsU0FBUyxrQkFBa0I7UUFDMUIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsTUFBTSx5QkFBeUIsR0FBRztRQUNqQyxLQUFLO1FBQ0wsT0FBTyxFQUFFO1lBQ1Isc0JBQXNCO1lBQ3RCLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsa0JBQWtCO1NBQ2xCO0tBQ0QsQ0FBQztJQUVGLE9BQU8seUJBQXlCLENBQUM7QUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlQRDs7R0FFRztBQUNILGtCQUFrQjs7O0FBSUwsbUJBQVcsR0FBRztJQUMxQixLQUFLLEVBQUUsS0FBSztJQUNaLEtBQUssRUFBRSxLQUFLO0lBQ1osT0FBTyxFQUFFLElBQUk7SUFDYixlQUFlLEVBQUUsQ0FBQztJQUNsQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLE1BQU0sRUFBRSxLQUFLO0lBQ2IsTUFBTSxFQUFFLEtBQUs7SUFDYixRQUFRLEVBQUUsS0FBSztJQUNmLE1BQU0sRUFBRSxLQUFLO0NBQ2IsQ0FBQztBQUVXLDBCQUFrQixHQUFHO0lBQ2pDLE1BQU0sRUFBRSxtQkFBVztDQUNuQixDQUFDO0FBQ1csa0JBQVUsR0FBRztJQUN6QixhQUFhLEVBQUUsMEJBQWtCO0lBQ2pDLFdBQVcsRUFBRSxHQUFHLEVBQUU7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsYUFBYSxFQUFFLE1BQU07SUFDckIsU0FBUyxFQUFFLEtBQUs7Q0FDaEIsQ0FBQztBQUVXLDZCQUFxQixHQUFHO0lBQ3BDO1FBQ0MsS0FBSyxFQUFFO1lBQ04sSUFBSSxFQUFFLE9BQU87WUFDYixTQUFTLEVBQUUsRUFBRTtZQUNiLFdBQVcsRUFBRSxFQUFFO1lBQ2YsZUFBZSxFQUFFLEVBQUU7WUFDbkIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixTQUFTLEVBQUUsRUFBRTtTQUNiO1FBQ0QsS0FBSyxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLEVBQUUsU0FBUztZQUNwQixXQUFXLEVBQUUsZ0JBQWdCO1lBQzdCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxHQUFHO1lBQ1IsYUFBYSxFQUFFLENBQUM7WUFDaEIsRUFBRSxFQUFFLFNBQVM7WUFDYixLQUFLLEVBQUUsQ0FBQztTQUNSO0tBQ1k7Q0FDZCxDQUFDO0FBRVcsMkJBQW1CLEdBQUc7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsS0FBSztDQUNiLENBQUM7QUFDVyx5QkFBaUIsR0FBRztJQUNoQyxHQUFHLEVBQUUsS0FBSztJQUNWLEVBQUUsRUFBRSxLQUFLO0NBQ1QsQ0FBQztBQUNXLDJCQUFtQixHQUFHO0lBQ2xDLFFBQVEsRUFBQztRQUNSLE9BQU8sRUFBRSxLQUFLO1FBQ2QsV0FBVyxFQUFFLENBQUM7UUFDZCxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDcEIsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO0tBQzVCO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsRUFBRTtRQUNiLFNBQVMsRUFBRSxFQUFFO0tBQ2I7SUFDRCxJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsSUFBSTtRQUNULEVBQUUsRUFBRSxLQUFLO0tBQ1Q7SUFDRCxTQUFTLEVBQUU7UUFDVixLQUFLLEVBQUUsWUFBWTtRQUNuQixHQUFHLEVBQUUsSUFBSTtRQUNULEVBQUUsRUFBRSxLQUFLO0tBQ1Q7SUFDRCxTQUFTLEVBQUU7UUFDVixLQUFLLEVBQUUsWUFBWTtRQUNuQixHQUFHLEVBQUUsSUFBSTtRQUNULEVBQUUsRUFBRSxLQUFLO0tBQ1Q7Q0FDc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekZaLDRCQUFvQixHQUFHLDJCQUEyQixDQUFDO0FBOEhuRCwwQkFBa0IsR0FBRztJQUNqQyxVQUFVLEVBQUUsWUFBWTtJQUN4QixTQUFTLEVBQUUsV0FBVztJQUN0QixXQUFXLEVBQUUsYUFBYTtJQUMxQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixRQUFRLEVBQUUsVUFBVTtJQUNwQixXQUFXLEVBQUUsYUFBYTtJQUMxQixNQUFNLEVBQUUsUUFBUTtDQUNoQixDQUFDO0FBR1csb0JBQVksR0FBRztJQUMzQixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVO0lBQ3hCLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVO0lBQ3hCLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVO0lBQ3hCLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXO0lBQ3pCLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVztJQUN6QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVc7SUFDckIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXO0lBQ3JCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVztJQUNyQixJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVc7SUFDekIsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXO0lBQ3pCLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVztJQUN6QixJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVc7Q0FDekIsQ0FBQztBQUVXLDJCQUFtQixHQUFHO0lBQ2xDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVO0lBQ3hCLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVO0lBQ3hCLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVO0lBQ3BCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVTtJQUNwQixHQUFHLEVBQUUsS0FBSyxFQUFFLDJCQUEyQjtJQUN2QyxHQUFHLEVBQUUsS0FBSyxFQUFFLDJCQUEyQjtJQUN2QyxNQUFNLEVBQUUsUUFBUSxDQUFDLDRCQUE0QjtDQUM3QyxDQUFDO0FBR1csNkJBQXFCLEdBQUc7SUFDcEMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVO0lBQ3hCLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVO0lBQ3hCLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVO0lBQ3hCLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVO0lBQ3hCLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVztJQUN6QixJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVc7SUFDekIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXO0lBQ3JCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVztJQUNyQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVc7Q0FDckIsQ0FBQztBQUdXLG9DQUE0QixHQUFHO0lBQzNDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVO0lBQ3hCLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVO0lBQ3hCLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVTtJQUN4QixJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVU7SUFDeEIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVO0lBQ3BCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVTtDQUNwQixDQUFDO0FBSVcsd0JBQWdCLEdBQUc7SUFDL0IsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtDQUNSLENBQUM7QUFJRixNQUFNLGNBQWMsR0FBRztJQUN0QixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0NBQ2hCLENBQUM7QUFJRixNQUFNLGVBQWUsR0FBRztJQUN2QixPQUFPO0lBQ1AsTUFBTTtJQUNOLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7Q0FDZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxUEYsaUdBQXFEO0FBQ3JELDhFQUtzQjtBQUN0QixnR0FBb0M7QUFDcEM7Ozs7Ozs7Ozs7R0FVRztBQUNJLE1BQU0sZ0JBQWdCLEdBQUcsQ0FDL0IsS0FBYSxFQUNiLFdBQXdCLEVBQ2YsRUFBRTs7SUFDWCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDbkIsOEZBQThGO0lBQzlGLE1BQU0sb0JBQW9CLEdBQUcsaUJBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxlQUFlLG1DQUFJLENBQUMsQ0FBQztJQUMvRCxNQUFNLHNCQUFzQixHQUFHLGlCQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsaUJBQWlCLG1DQUFJLENBQUMsQ0FBQztJQUNuRSxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUNoQixJQUNDLENBQUMsK0JBQWMsRUFBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsS0FBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsS0FBSyxFQUFDO1lBQ25FLENBQUMsK0JBQWMsRUFBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsS0FBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsT0FBTyxFQUFDLEVBQ3RFLENBQUM7WUFDRixTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLENBQUM7YUFBTSxDQUFDO1lBQ1AsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUN6QixDQUFDO0lBQ0YsQ0FBQztTQUFNLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ3pCLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDcEIsQ0FBQztTQUFNLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ3pCLElBQ0MsK0JBQWMsRUFBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUM7WUFDM0MsK0JBQWMsRUFBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsRUFDNUMsQ0FBQztZQUNGLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDcEIsQ0FBQzthQUFNLENBQUM7WUFDUCxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLENBQUM7SUFDRixDQUFDO1NBQU0sSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDekIsSUFDQywrQkFBYyxFQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQztZQUMzQywrQkFBYyxFQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxFQUM1QyxDQUFDO1lBQ0YsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNwQixDQUFDO2FBQU0sQ0FBQztZQUNQLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDcEIsQ0FBQztJQUNGLENBQUM7U0FBTSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUN6QixJQUNDLCtCQUFjLEVBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLCtCQUFjLEVBQUMsc0JBQXNCLEVBQUUsRUFBRSxDQUFDLEVBQ3pDLENBQUM7WUFDRixTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLENBQUM7YUFBTSxDQUFDO1lBQ1AsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNwQixDQUFDO0lBQ0YsQ0FBQztTQUFNLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ3pCLElBQ0MsK0JBQWMsRUFBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUM7WUFDeEMsK0JBQWMsRUFBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsRUFDekMsQ0FBQztZQUNGLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDcEIsQ0FBQzthQUFNLENBQUM7WUFDUCxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLENBQUM7SUFDRixDQUFDO1NBQU0sSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDekIsSUFDQywrQkFBYyxFQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQztZQUN4QywrQkFBYyxFQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxFQUN6QyxDQUFDO1lBQ0YsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNwQixDQUFDO2FBQU0sQ0FBQztZQUNQLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDcEIsQ0FBQztJQUNGLENBQUM7U0FBTSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUN6QixJQUNDLCtCQUFjLEVBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLCtCQUFjLEVBQUMsc0JBQXNCLEVBQUUsRUFBRSxDQUFDLEVBQ3pDLENBQUM7WUFDRixTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLENBQUM7YUFBTSxDQUFDO1lBQ1AsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNwQixDQUFDO0lBQ0YsQ0FBQztTQUFNLENBQUM7UUFDUCxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFDRCw2QkFBNkI7SUFFN0IsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQy9ELDBDQUEwQztRQUMxQyxJQUFJLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxLQUFLLEVBQUUsQ0FBQztZQUN4QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDO1FBQ2pFLENBQUM7UUFDRCxJQUFJLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxRQUFRLEVBQUUsQ0FBQztZQUMzQixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQzdELENBQUM7UUFDRCxJQUFJLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxNQUFNLEVBQUUsQ0FBQztZQUN6QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3pELENBQUM7UUFDRCxJQUFJLFlBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxNQUFNLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0MsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsSUFBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsTUFBTSxFQUFFLENBQUM7WUFDekIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsSUFBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsS0FBSyxFQUFFLENBQUM7WUFDeEIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUMvRCxDQUFDO1FBQ0QsSUFBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsT0FBTyxFQUFFLENBQUM7WUFDMUIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsSUFBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsTUFBTSxFQUFFLENBQUM7WUFDekIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN6RCxDQUFDO0lBQ0YsQ0FBQztJQUVELE9BQU8sU0FBUyxDQUFDLENBQUMsb0RBQW9EO0FBQ3ZFLENBQUMsQ0FBQztBQTNHVyx3QkFBZ0Isb0JBMkczQjtBQUNLLE1BQU0sdUJBQXVCLEdBQUcsQ0FDdEMsS0FBYSxFQUNiLFdBQXdCLEVBQ2YsRUFBRTs7SUFDWCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDbkIsOEZBQThGO0lBQzlGLE1BQU0sb0JBQW9CLEdBQUcsaUJBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxlQUFlLG1DQUFJLENBQUMsQ0FBQztJQUMvRCxNQUFNLHNCQUFzQixHQUFHLGlCQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsaUJBQWlCLG1DQUFJLENBQUMsQ0FBQztJQUNuRSw0QkFBNEI7SUFFNUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDZixJQUNDLENBQUMsK0JBQWMsRUFBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsS0FBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsS0FBSyxFQUFDO1lBQ25FLENBQUMsK0JBQWMsRUFBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsS0FBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsT0FBTyxFQUFDLEVBQ3RFLENBQUM7WUFDRixTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLENBQUM7YUFBTSxDQUFDO1lBQ1AsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUN6QixDQUFDO0lBQ0YsQ0FBQztTQUFNLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3hCLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDcEIsQ0FBQztTQUFNLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQ0MsK0JBQWMsRUFBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUM7WUFDM0MsK0JBQWMsRUFBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsRUFDNUMsQ0FBQztZQUNGLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDcEIsQ0FBQzthQUFNLENBQUM7WUFDUCxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLENBQUM7SUFDRixDQUFDO1NBQU0sSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDekIsZUFBZTtRQUNmLG1GQUFtRjtRQUNuRiw0QkFBNEI7UUFDNUIsT0FBTztRQUNQLE9BQU87UUFDUCxLQUFLO1FBRUwsSUFDQywrQkFBYyxFQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQztZQUN4QywrQkFBYyxFQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxFQUN6QyxDQUFDO1lBQ0YsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUN4QixJQUFJLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUMvRCxDQUFDO2lCQUFNLENBQUM7Z0JBQ1AsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUNuRSxDQUFDO1FBQ0YsQ0FBQzthQUFNLENBQUM7WUFDUCxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLENBQUM7SUFDRixDQUFDO1NBQU0sSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDekIsSUFDQywrQkFBYyxFQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQztZQUN4QywrQkFBYyxFQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxFQUN6QyxDQUFDO1lBQ0YsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUN4QixJQUFJLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUMvRCxDQUFDO2lCQUFNLENBQUM7Z0JBQ1AsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUNuRSxDQUFDO1FBQ0YsQ0FBQzthQUFNLENBQUM7WUFDUCxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLENBQUM7SUFDRixDQUFDO1NBQU0sSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDekIsSUFBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsTUFBTSxFQUFFLENBQUM7WUFDekIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUM5RCxJQUFHLCtCQUFjLEVBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQywrQkFBYyxFQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7Z0JBQzFDLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO1lBQzNFLENBQUM7UUFDRixDQUFDO2FBQU0sQ0FBQztZQUNQLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDL0QsQ0FBQztJQUNGLENBQUM7SUFDRCw2QkFBNkI7SUFFN0IsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQy9ELDBDQUEwQztRQUMxQyxJQUFJLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxLQUFLLEVBQUUsQ0FBQztZQUN4QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDO1FBQ2pFLENBQUM7UUFDRCxJQUFJLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxRQUFRLEVBQUUsQ0FBQztZQUMzQixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQzdELENBQUM7UUFDRCxJQUFJLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxNQUFNLEVBQUUsQ0FBQztZQUN6QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3pELENBQUM7UUFDRCxJQUFJLFlBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxNQUFNLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0MsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsSUFBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsTUFBTSxFQUFFLENBQUM7WUFDekIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsSUFBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsS0FBSyxFQUFFLENBQUM7WUFDeEIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUMvRCxDQUFDO1FBQ0QsSUFBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsT0FBTyxFQUFFLENBQUM7WUFDMUIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUNuRSxDQUFDO0lBQ0YsQ0FBQztJQUNELDBDQUEwQztJQUUxQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLG9EQUFvRDtBQUN2RSxDQUFDLENBQUM7QUF6R1csK0JBQXVCLDJCQXlHbEM7QUFDRjs7R0FFRztBQUNVLGlCQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQ3hFLGdFQUFnRTtJQUNoRSxPQUFPO1FBQ04sR0FBRyxFQUFFLGFBQU0sR0FBRTtRQUNiLElBQUksRUFBRSxHQUFHO1FBQ1QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDYixLQUFLLEVBQUUsS0FBSztLQUNaLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUNVLHdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsMkJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQ3RFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQ2QsZ0VBQWdFO0lBQ2hFLE9BQU87UUFDTixHQUFHLEVBQUUsYUFBTSxHQUFFO1FBQ2IsSUFBSSxFQUFFLEdBQUc7UUFDVCxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNiLEtBQUssRUFBRSxLQUFLO0tBQ1osQ0FBQztBQUNILENBQUMsQ0FDRCxDQUFDO0FBQ0ssTUFBTSwwQkFBMEIsR0FBRyxDQUFDLFNBQWlCLEVBQUUsY0FBa0MsRUFBcUIsRUFBRTtJQUN0SCw4RUFBOEU7SUFDOUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxJQUFJLENBQUMseUZBQXlGLENBQUMsQ0FBQztRQUN4RyxPQUFPLFNBQVM7SUFDakIsQ0FBQztJQUNELDZCQUE2QjtJQUM3QixTQUFTLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0IsUUFBUSxjQUFjLEVBQUUsQ0FBQztRQUN6QixLQUFLLE1BQU07WUFDVixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7WUFDdEUsTUFBTTtRQUNQLEtBQUssT0FBTztZQUNYLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO1lBQ3hFLE1BQU07UUFDUCxLQUFLLFVBQVU7WUFDZCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxvQkFBb0IsQ0FBQztZQUM5RSxNQUFNO1FBQ1AsS0FBSyxXQUFXO1lBQ2YsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLEdBQUcscUJBQXFCLENBQUM7WUFDaEYsTUFBTTtRQUNQLEtBQUssYUFBYTtZQUNqQixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsR0FBRyx1QkFBdUIsQ0FBQztZQUNwRixNQUFNO1FBQ1AsS0FBSyxjQUFjO1lBQ2xCLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxHQUFHLHdCQUF3QixDQUFDO1lBQ3RGLE1BQU07UUFFUDtZQUNDLE1BQU07SUFDUixDQUFDO0lBRUEsT0FBTyxTQUFTLENBQUM7QUFDbEIsQ0FBQztBQWpDWSxrQ0FBMEIsOEJBaUN0Qzs7Ozs7Ozs7Ozs7Ozs7O0FDalNELHVEQUF1RDtBQUN2RCx3REFBK0I7QUFVL0IsOEVBQXdEO0FBRXhELHFFQUFxRTtBQUNyRSxxRUFBcUU7QUFFeEQsc0JBQWMsR0FBRywwQkFBMEIsQ0FBQztBQUV6RDs7OztHQUlHO0FBQ0ksTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUEwQyxFQUFFLEVBQUU7SUFDNUUsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDL0IsTUFBTSxFQUFDLFVBQVUsRUFBQyxHQUFHLEtBQUssQ0FBQyxLQUFLO0lBSWhDLE1BQU0sYUFBYSxHQUFHLENBQUMsVUFBcUIsRUFBVSxFQUFFO1FBQ3ZELE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLDZCQUE2QixHQUFHLENBQUMsSUFBdUIsRUFBUSxFQUFFO1FBQ3ZFLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUM7YUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUUsQ0FBQztZQUM1QixtQkFBbUIsRUFBRSxDQUFDLENBQUMsMkNBQTJDO1lBQ2xFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDRixDQUFDLENBQUM7SUFFRixNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtRQUMvQixrQkFBa0IsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxNQUFNLG1CQUFtQixHQUFHLEdBQUcsRUFBRTtRQUNoQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtRQUM5QixpQkFBaUIsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtRQUMvQixrQkFBa0IsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtRQUM5QixpQkFBaUIsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtRQUMvQixrQkFBa0IsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHRCxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLG9DQUF3QixHQUFFLENBQUM7SUFDdEQsTUFBTSxFQUFFLElBQUksRUFBRyxTQUFTLEVBQUUsU0FBUyxFQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzdDLE1BQU0sRUFBRSxzQkFBc0IsRUFDN0Isa0JBQWtCLEVBQ2xCLG1CQUFtQixFQUNuQixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixrQkFBa0IsR0FFakIsR0FDRCxPQUFPLENBQUM7SUFDVCxPQUFPLENBQ04sNkJBQUssU0FBUyxFQUFDLHFFQUFxRTtRQUNuRiwrQkFBTyxTQUFTLEVBQUMsWUFBWSxJQUFFLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLENBQVM7UUFDbkQsNkJBQUssSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsd0NBQXdDO1lBQ25FLGdDQUNDLFNBQVMsRUFBRSxtQkFBbUIsS0FBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLElBQUksRUFBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFDNUQsUUFBUSxFQUFFLGFBQWEsQ0FBQyxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsSUFBSSxLQUFJLEVBQUUsQ0FBQyxFQUMvQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLFlBRzVDO1lBQ1QsZ0NBQ0MsU0FBUyxFQUFFLG1CQUFtQixLQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUM5RCxRQUFRLEVBQ1AsYUFBYSxDQUFDLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxJQUFJLEtBQUksRUFBRSxDQUFDLEVBRXRDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxRQUFRLENBQUMsYUFJOUMsQ0FDSjtRQUNOLDZCQUFLLElBQUksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLG1DQUFtQztZQUM5RCxnQ0FDQyxTQUFTLEVBQUUsbUJBQW1CLEtBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQzFELFFBQVEsRUFDUCxhQUFhLENBQUMsV0FBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLElBQUksS0FBSSxFQUFFLENBQUM7cUJBQ3JDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxJQUFJLEdBRVgsT0FBTyxFQUFFLGtCQUFrQixVQUduQjtZQUNULGdDQUNDLFNBQVMsRUFBRSxtQkFBbUIsS0FBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFDM0QsUUFBUSxFQUNQLGFBQWEsQ0FBQyxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsSUFBSSxLQUFJLEVBQUUsQ0FBQztxQkFDckMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLElBQUksR0FFWCxPQUFPLEVBQUUsbUJBQW1CLFVBSXBCLENBQ0o7UUFDTiwrQkFBTyxTQUFTLEVBQUMsa0JBQWtCLElBQUUsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLEtBQUssQ0FBUztRQUM5RCw2QkFBSyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyx5Q0FBeUM7WUFDcEUsZ0NBQ0MsU0FBUyxFQUFFLG1CQUFtQixVQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUMvRCxRQUFRLEVBQ1AsYUFBYSxDQUFDLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxTQUFTLEtBQUksRUFBRSxDQUFDO3FCQUMxQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsSUFBSSxHQUVYLE9BQU8sRUFBRSxpQkFBaUIsVUFHbEI7WUFDVCxnQ0FDQyxTQUFTLEVBQUUsbUJBQW1CLFVBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQ2hFLFFBQVEsRUFDUCxhQUFhLENBQUMsV0FBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLFNBQVMsS0FBSSxFQUFFLENBQUM7cUJBQzFDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxJQUFJLEdBRVgsT0FBTyxFQUFFLGtCQUFrQixVQUluQixDQUNKO1FBQ04sK0JBQU8sU0FBUyxFQUFDLGtCQUFrQixJQUFFLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxLQUFLLENBQVM7UUFDOUQsNkJBQUssSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMseUNBQXlDO1lBQ3BFLGdDQUNDLFNBQVMsRUFBRSxtQkFBbUIsVUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLEVBQUUsRUFBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFDL0QsUUFBUSxFQUNQLGFBQWEsQ0FBQyxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsU0FBUyxLQUFJLEVBQUUsQ0FBQztxQkFDMUMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLElBQUksR0FFWCxPQUFPLEVBQUUsaUJBQWlCLFVBR2xCO1lBQ1QsZ0NBQ0MsU0FBUyxFQUFFLG1CQUFtQixVQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUNoRSxRQUFRLEVBQ1AsYUFBYSxDQUFDLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxTQUFTLEtBQUksRUFBRSxDQUFDO3FCQUMxQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsSUFBSSxHQUVYLE9BQU8sRUFBRSxrQkFBa0IsRUFDM0IsS0FBSyxFQUFFLE1BQU0sVUFJTCxDQUNKLENBQ0QsQ0FDTixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBbEtXLHNCQUFjLGtCQWtLekI7QUFFRiw2RUFBNkU7QUFDN0UsTUFBYSxrQkFBa0I7SUFDOUIsZ0JBQWdCO1FBQ2YsT0FBTyxzQkFBYyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNILGdCQUFnQjtRQUNmLE9BQU8sc0JBQWMsQ0FBQztJQUN2QixDQUFDO0lBRUQsY0FBYztRQUNiLE9BQU87WUFDTixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1NBQ1YsQ0FBQztJQUNILENBQUM7SUFFRCwyREFBMkQ7SUFDM0Qsc0VBQXNFO0lBQ3RFLGVBQWUsQ0FBQyxJQUFrQjtRQUNqQyxPQUFPO1lBQ04sUUFBUSxFQUFFO2dCQUNULE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQztnQkFDcEQsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDO2dCQUN6RCxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQzdEO1lBQ0QsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDO2dCQUN2QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakQsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUM7YUFDakQ7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxJQUFJO2dCQUNULEVBQUUsRUFBRSxLQUFLO2FBQ1QsQ0FBQztZQUNGLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDakMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsRUFBRSxFQUFFLEtBQUs7YUFDVCxDQUFDO1lBQ0YsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNqQyxLQUFLLEVBQUUsRUFBRTtnQkFDVCxHQUFHLEVBQUUsSUFBSTtnQkFDVCxFQUFFLEVBQUUsS0FBSzthQUNULENBQUM7U0FDRixDQUFDO0lBQ0gsQ0FBQztDQUNEO0FBckRELGdEQXFEQzs7Ozs7Ozs7Ozs7Ozs7O0FDalBELHdEQUErQjtBQWEvQixtR0FBNEQ7QUFnQjVELE1BQU0sY0FBYyxHQUFHLENBQUM7UUFDdkIsS0FBSyxFQUFDO1lBQ0wsSUFBSSxFQUFFLE1BQU07U0FDWjtRQUNELEtBQUssRUFBRTtZQUNOLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLGdCQUFnQjtTQUM3QjtLQUNELENBQUM7QUFFRixvRUFBb0U7QUFDcEUsd0VBQXdFO0FBRTNELHNCQUFjLEdBQUcseUJBQXlCLENBQUM7QUFFakQsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEtBQW1ELEVBQUUsRUFBRTtJQUM5RixNQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1FBQzNDLE1BQU0sRUFBRSxVQUFVLEVBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLGNBQWM7UUFDbkQsT0FBTyxVQUFVO0lBQ2xCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFJMUIsT0FBTSxDQUNMLDZCQUFLLFNBQVMsRUFBQyxxQkFBcUIsSUFFcEMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBZ0IsRUFBRSxLQUFhLEVBQUMsRUFBRTtRQUN4RCxNQUFNLEVBQUUsS0FBSyxFQUFDLEtBQUssRUFBQyxHQUFHLEtBQUssQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QixPQUFPLENBQ04sK0JBQU8sR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksYUFBYSxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUMsYUFBYTtZQUNwRSw4QkFBTSxTQUFTLEVBQUMsT0FBTyxJQUFFLEtBQUssQ0FBQyxJQUFJLENBQVE7WUFDM0MsOEJBQU0sU0FBUyxFQUFDLElBQUksSUFBRSxLQUFLLENBQUMsRUFBRSxDQUFRO1lBQ3RDLCtCQUFPLElBQUksRUFBQyxNQUFNLEVBQ2xCLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLGFBQWEsS0FBSyxFQUFFLEVBQ3JDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUMxQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxRQUFRLEVBQ2xDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUM5QixRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUN6QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFDbEIsUUFBUSxFQUNQLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ0wsMkRBQTJEO29CQUMzRCxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQ3RCLGNBQWMsS0FBSyxlQUFlLEVBQ2xDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUNyQjtvQkFDRix5RUFBeUU7Z0JBQzFFLENBQUMsR0FDQyxDQUNLLENBQ047SUFFSixDQUFDLENBQUMsQ0FDSSxDQUNMO0FBRUgsQ0FBQyxDQUFDO0FBM0NXLDhCQUFzQiwwQkEyQ2pDO0FBRUYsTUFBYSwwQkFBMEI7SUFDdEMsZ0JBQWdCO1FBQ2pCLE9BQU8sc0JBQWM7SUFDcEIsQ0FBQztJQUVELGNBQWM7UUFDYixPQUFPO1lBQ04sS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsR0FBRztTQUNYO0lBQ0YsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFrQjtRQUNqQyxPQUFPO1lBQ04sVUFBVSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsWUFBWSxFQUFFLG9DQUFxQixDQUFDO1NBQzFEO0lBQ0YsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU8sOEJBQW9DO0lBQzVDLENBQUM7Q0FDRDtBQXJCRCxnRUFxQkM7Ozs7Ozs7Ozs7Ozs7OztBQzlHRCx3REFBK0I7QUFVbEIsc0JBQWMsR0FBRywyQkFBMkIsQ0FBQztBQUVuRCxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQWtDLEVBQUUsRUFBRTtJQUNuRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUVwQyxPQUFPLENBQ04sNkJBQUssU0FBUyxFQUFDLG1FQUFtRTtRQUNqRixnQ0FFQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBRWhDLE9BQU8sQ0FDTiw0QkFBSSxTQUFTLEVBQUMsWUFBWSxFQUFDLEdBQUcsRUFBRSxLQUFLO2dCQUNwQywrQkFBTyxTQUFTLEVBQUMsVUFBVTtvQkFDMUIsNkJBQUssU0FBUyxFQUFDLE1BQU07d0JBQ3BCLCtCQUNDLElBQUksQ0FBQyxLQUFLLENBQ1AsQ0FDRTtvQkFDUCw2QkFBSyxTQUFTLEVBQUMsS0FBSzt3QkFDbkIsK0JBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUUsWUFBWSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFJLENBQ25GLENBQ0MsQ0FDSixDQUNMLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDRyxDQUNBLENBQ04sQ0FBQztBQUNILENBQUMsQ0FBQztBQTNCVyxxQkFBYSxpQkEyQnhCO0FBQ0YsNkVBQTZFO0FBQzdFLE1BQWEsaUJBQWlCO0lBQzdCLGdCQUFnQjtRQUNmLE9BQU8sc0JBQWMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0I7UUFDZixPQUFPLHFCQUFzQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxjQUFjO1FBQ2IsT0FBTztZQUNOLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLEVBQUU7U0FDVixDQUFDO0lBQ0gsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxzRUFBc0U7SUFDdEUsZUFBZSxDQUFDLElBQWtCO1FBQ2pDLE9BQU87WUFDTixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JDO29CQUNDLEtBQUssRUFBRSxZQUFZO29CQUNuQixNQUFNLEVBQUUsS0FBSztpQkFDYjthQUNELENBQUM7U0FDRixDQUFDO0lBQ0gsQ0FBQztDQUNEO0FBL0JELDhDQStCQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEVELHVEQUF1RDtBQUN2RCx3REFBK0I7QUFRL0IsMklBR2lEO0FBT2pELHlJQUFxRTtBQUNyRSxtR0FBeUQ7QUFDekQscUVBQXFFO0FBQ3JFLHFFQUFxRTtBQUV4RCxzQkFBYyxHQUFHLDhCQUE4QixDQUFDO0FBRTdEOzs7O0dBSUc7QUFDSCxNQUFhLEtBQU0sU0FBUSw4QkFBMEM7SUFHcEUsWUFBWSxLQUFpQztRQUM1QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFRZCxrQkFBYSxHQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxpQ0FBa0IsQ0FBQztRQUN0RCxXQUFNLEdBQWUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDL0MsY0FBUyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7UUFDekQsa0JBQWEsR0FBdUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQztRQUU3RTs7V0FFRztRQUNILHNCQUFpQixHQUFHLEdBQUcsRUFBRTtZQUN4Qix5REFBeUQ7WUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztnQkFDckQsT0FBTztZQUNSLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDO1FBeEJELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBa0IsQ0FBQztJQUNuRCxDQUFDO0lBRUQsNEZBQTRGO0lBQzVGLGlCQUFpQjtRQUNoQixzQ0FBc0M7SUFDdkMsQ0FBQztJQW9CRCxNQUFNO1FBQ0wsT0FBTztRQUNOLDJCQUEyQjtRQUMzQixvQkFBQyx5QkFBZSxDQUFDLElBQUksSUFDcEIsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQzFCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDNUIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUV6QyxvQkFBQyx5QkFBZSxDQUFDLEtBQUssT0FBRztZQUN6QixvQkFBQyx5QkFBZSxDQUFDLE9BQU8sSUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUksQ0FDdEMsQ0FDdkIsQ0FBQztJQUNILENBQUM7Q0FDRDtBQTVDRCxzQkE0Q0M7QUFDRCw2RUFBNkU7QUFDN0UsTUFBYSxTQUFTO0lBQ3JCLGdCQUFnQjtRQUNmLE9BQU8sc0JBQWMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0I7UUFDZixPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRCxjQUFjO1FBQ2IsT0FBTztZQUNOLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLEVBQUU7U0FDVixDQUFDO0lBQ0gsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxzRUFBc0U7SUFDdEUsZUFBZSxDQUFDLElBQWtCO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQ1YsYUFBYSxJQUFJLENBQUMsVUFBVSxDQUMzQiwrQkFBK0IsQ0FDL0IsY0FBYyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQzlDLENBQUM7UUFFRixPQUFPO1lBQ04sYUFBYSxFQUFFO2dCQUNkLE1BQU0sRUFBRTtvQkFDUCxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLENBQUM7b0JBQzVELEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixFQUFFLEtBQUssQ0FBQztvQkFDNUQsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsOEJBQThCLEVBQUUsS0FBSyxDQUFDO29CQUNoRSxlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FDL0Isc0NBQXNDLEVBQ3RDLEdBQUcsQ0FDSDtvQkFDRCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUNqQyx3Q0FBd0MsRUFDeEMsSUFBSSxDQUNKO29CQUNELFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLCtCQUErQixFQUFFLEVBQUUsQ0FBQztvQkFDOUQsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDO29CQUM5RCxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUM7b0JBQzlELFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLCtCQUErQixFQUFFLEtBQUssQ0FBQztvQkFDbEUsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDO29CQUM5RCxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUM7b0JBQ3hELEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQztpQkFDeEQ7YUFDRDtZQUNELFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUM7WUFDL0MsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQztTQUMzRCxDQUFDO0lBQ0gsQ0FBQztDQUNEO0FBdkRELDhCQXVEQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJRCx3REFBK0I7QUFLL0Isb0ZBQXFEO0FBQ3JELG9GQUEyRztBQUMzRywyR0FBaUM7QUFDakMsaUhBQWdFO0FBQ2hFLG9GQUEwRDtBQUMxRCx5R0FBK0Q7QUFFL0QsaUNBQWlDO0FBQ2pDLHFEQUFxRDtBQUNyRCxNQUFNLGNBQWMsR0FBRyw0QkFBb0IsQ0FBQztBQUU1Qyw2Q0FBNkM7QUFFaEMsS0FDWixvQ0FBZ0IsRUFBMkIsaUJBQWlCLENBQUMsRUFEaEQsNEJBQW9CLFVBQUUsdUJBQWUsU0FDWTtBQUUvRCxNQUFNLElBQUksR0FBRyxDQUFDLEVBQ2IsY0FBYyxFQUNkLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsUUFBUSxHQUNnQixFQUFFLEVBQUU7SUFDNUIsT0FBTyxDQUNOLG9CQUFDLDRCQUFvQixJQUVuQixVQUFVO1FBQ1YsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixlQUFlLEVBQWYsdUJBQWUsSUFHZixRQUFRLENBQ2EsQ0FDdkIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTs7SUFDbEIsTUFBTSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsR0FDdEQsMkJBQWUsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFpQixJQUFJLENBQUM7SUFDcEQsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxjQUFjLENBQUM7SUFDMUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxHQUFHLFVBQVUsQ0FBQztJQUNwQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsYUFBYSxJQUFJLGlDQUFrQixDQUFDO0lBQ3ZELE1BQU0sT0FBTyxHQUFHLGNBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxDQUFDLG1DQUFJLEtBQUssQ0FBQztJQUNyQyxzREFBc0Q7SUFDdEQsSUFBSSxrQkFBa0IsR0FBRyx3QkFBZ0IsQ0FBQztJQUMxQyxJQUFJLENBQUMsT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE1BQU0sR0FBRSxDQUFDO1FBQ3JCLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2QsT0FBTyxDQUNOLDJDQUNBLEdBQUcsRUFBRSxRQUFRLElBQ1QsSUFBSSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsc0NBQXNDLENBQUM7U0FDakQsQ0FBQyxzQkFDZSxjQUFjLEVBQzlCLE9BQU8sRUFBRSxpQkFBaUI7WUFFMUIsNkJBQUssU0FBUyxFQUFDLG9CQUFvQjtnQkFDbEMsNkJBQUssU0FBUyxFQUFDLHlCQUF5QixJQUN0QyxrQkFBa0IsQ0FBQyxHQUFHLENBQ3RCLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDMUIsZUFBZTtnQkFDZiwyREFBMkQ7Z0JBQzNELEtBQUs7Z0JBQ0wsQ0FDQyxvQkFBQyxjQUFJLElBQ0wsYUFBYSxFQUNaLEtBQUssR0FBRyxHQUFHLEdBQUcsbUNBQXVCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUVyRCxHQUFHLEVBQUUsR0FBRyxHQUNOLENBQ0YsQ0FDRCxDQUNELENBQ0ksQ0FDRCxDQUNELENBQ04sQ0FBQztJQUNILENBQUM7U0FBTSxDQUFDO1FBQ1AsT0FBTyxDQUNOLDJDQUNBLEdBQUcsRUFBRSxRQUFRLElBQ1QsSUFBSSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsd0NBQXdDLENBQUM7U0FDbkQsQ0FBQyxzQkFDYyxjQUFjLEVBQzlCLE9BQU8sRUFBRSxpQkFBaUIsS0FFeEIsa0JBQWtCLENBQUMsR0FBRyxDQUN0QixDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDMUIsZUFBZTtRQUNmLDJEQUEyRDtRQUMzRCxLQUFLO1FBQ0wsQ0FDQyxvQkFBQyxjQUFJLElBQ0osYUFBYSxFQUNaLEtBQUssR0FBRyxHQUFHLEdBQUcsbUNBQXVCLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUVyRCxHQUFHLEVBQUUsR0FBRyxHQUNQLENBQ0YsQ0FDRCxDQUNELENBQ0ksQ0FDTixDQUFDO0lBQ0gsQ0FBQztBQUNGLENBQUMsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQXVDLEVBQUUsRUFBRTtJQUNyRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxHQUFHLDJCQUFlLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsTUFBTSxFQUFFLFNBQVMsRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLEdBQUcsVUFBVSxDQUFDO0lBQ2pFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxhQUFhLElBQUksaUNBQWtCLENBQUM7SUFDdkQsSUFBSSxDQUFDLFNBQVM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN6QixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLElBQUksU0FBUyxHQUFHLDhCQUE4QixDQUFDO0lBQy9DLElBQUksYUFBYSxFQUFFLENBQUM7UUFDbkIsU0FBUyxHQUFHLHNDQUEwQixFQUFDLFNBQVMsRUFBRSxhQUFhLENBQUM7SUFDakUsQ0FBQztJQUNFLE9BQU8sQ0FDSCw2QkFDTCxTQUFTLEVBQUUsU0FBUyxFQUNYLEtBQUssRUFBRTtZQUNILEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNmLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNuQjtRQUVELDZCQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsUUFBUSxDQUFPLENBQ2xELENBQ1QsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUdXLHVCQUFlLEdBQUc7SUFDOUIsSUFBSTtJQUNKLEtBQUs7SUFDTCxPQUFPO0NBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMvSUYsd0RBQStCO0FBTy9CLGtEQUFrRDtBQUNsRCx3QkFBd0I7QUFDeEIsS0FBSztBQUNMLE1BQU0sSUFBSSxHQUF3QixDQUFDLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxFQUFzQixFQUFFO0lBQ3hGLE9BQU8sNkJBQUssU0FBUyxFQUFFLGFBQWEsRUFDcEMsT0FBTyxFQUFFLFdBQVcsR0FBUSxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBQzFCLHFCQUFlLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2ZwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBLDRDQWtDQztBQXBDRCx3REFBOEI7QUFFOUIsU0FBZ0IsZ0JBQWdCLENBQzlCLGlCQUF5QixFQUN6QixjQUFpQztJQUVqQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUNqQyxjQUFjLENBQ2YsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUErRCxDQUMzRSxLQUFLLEVBQ0wsRUFBRTtRQUNGLE1BQU0sRUFBRSxRQUFRLEtBQWlCLEtBQUssRUFBakIsT0FBTyxVQUFLLEtBQUssRUFBaEMsWUFBd0IsQ0FBUSxDQUFDO1FBQ3ZDLDBDQUEwQztRQUMxQyx1REFBdUQ7UUFDdkQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FDekIsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUNiLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsQ0FBQztRQUN0QixPQUFPLG9CQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLEtBQUssSUFBRyxRQUFRLENBQW9CLENBQUM7SUFDdkUsQ0FBQyxDQUFDO0lBRUYsUUFBUSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxVQUFVLENBQUM7SUFFdEQsU0FBUyxVQUFVLENBQUMsWUFBb0I7UUFDdEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLE9BQU87WUFBRSxPQUFPLE9BQU8sQ0FBQztRQUM1QixJQUFJLGNBQWMsS0FBSyxTQUFTO1lBQUUsT0FBTyxjQUFjLENBQUM7UUFDeEQsaUVBQWlFO1FBQ2pFLE1BQU0sSUFBSSxLQUFLLENBQ2IsS0FBSyxZQUFZLDRCQUE0QixpQkFBaUIsSUFBSSxDQUNuRSxDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFVLENBQUM7QUFDekMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BDRDs7R0FFRzs7O0FBRUg7Ozs7OztHQU1HO0FBQ0ksTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFXLEVBQUU7SUFDL0QsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRlcsc0JBQWMsa0JBRXpCOzs7Ozs7Ozs7Ozs7QUNiRjs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQSwySUFBMkY7QUFDM0YsMkRBQTJEO0FBQzNELHdEQUF3RDtBQUN4RCw0RkFBc0Q7QUFPckQsdUZBUFEsYUFBSyxRQU9SO0FBTk4sb0hBQThGO0FBTzdGLHdHQVBRLHNDQUFzQixRQU9SO0FBTnZCLHVIQUFpRjtBQU9oRixnR0FQUSwrQkFBYyxRQU9SO0FBTmYsb0hBQThFO0FBTzdFLCtGQVBRLDZCQUFhLFFBT1I7QUFHZCwwQkFBMEI7QUFDMUIsMERBQXFCO0FBRXJCLDhCQUE4QjtBQUM5QixNQUFNLFVBQVUsR0FBeUI7SUFDeEMsSUFBSSxpQkFBUyxFQUFFO0lBQ2YsSUFBSSwwQ0FBMEIsRUFBRTtJQUNoQyxJQUFJLG1DQUFrQixFQUFFO0lBQ3hCLElBQUksaUNBQWlCLEVBQUU7Q0FFdkIsQ0FBQztBQUVGLGlFQUFpRTtBQUNqRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZ0IsRUFBRSxFQUFFLENBQUMsc0NBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvY2pzL2ltbWVyLmNqcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvY2pzL2luZGV4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXNlLWltbWVyL2Rpc3QvdXNlLWltbWVyLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL21heC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9tZDUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9wYXJzZS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjFUb1Y2LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YzLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92NS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92Ni5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92NlRvVjEuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjcuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS9ob29rcy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS9pbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9hcGkvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9hcGkvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL0NvbW1hbmRWYWx2ZU1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvUGFyYW1ldGVyTGlzdC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1N0YXR1c1ZhbHZlTXAudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9WYWx2ZS50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS1tcC9WYWx2ZU1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL2l0ZW0udHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvdXRpbHMvY3JlYXRlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy91dGlscy9udW1iZXJVdGlsLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvZXh0ZXJuYWwgdW1kIFwiUGVyc3BlY3RpdmVDbGllbnRcIiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL2V4dGVybmFsIHVtZCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQZXJzcGVjdGl2ZUNsaWVudFwiKSwgcmVxdWlyZShcIlJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiSG1pQ29tcG9uZW50c1wiLCBbXCJQZXJzcGVjdGl2ZUNsaWVudFwiLCBcIlJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhtaUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJQZXJzcGVjdGl2ZUNsaWVudFwiKSwgcmVxdWlyZShcIlJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIbWlDb21wb25lbnRzXCJdID0gZmFjdG9yeShyb290W1wiUGVyc3BlY3RpdmVDbGllbnRcIl0sIHJvb3RbXCJSZWFjdFwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW5kdWN0aXZlYXV0b21hdGlvbl9wZXJzcGVjdGl2ZV9jbGllbnRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSA9PiB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW1tZXIudHNcbnZhciBpbW1lcl9leHBvcnRzID0ge307XG5fX2V4cG9ydChpbW1lcl9leHBvcnRzLCB7XG4gIEltbWVyOiAoKSA9PiBJbW1lcjIsXG4gIGFwcGx5UGF0Y2hlczogKCkgPT4gYXBwbHlQYXRjaGVzLFxuICBjYXN0RHJhZnQ6ICgpID0+IGNhc3REcmFmdCxcbiAgY2FzdEltbXV0YWJsZTogKCkgPT4gY2FzdEltbXV0YWJsZSxcbiAgY3JlYXRlRHJhZnQ6ICgpID0+IGNyZWF0ZURyYWZ0LFxuICBjdXJyZW50OiAoKSA9PiBjdXJyZW50LFxuICBlbmFibGVNYXBTZXQ6ICgpID0+IGVuYWJsZU1hcFNldCxcbiAgZW5hYmxlUGF0Y2hlczogKCkgPT4gZW5hYmxlUGF0Y2hlcyxcbiAgZmluaXNoRHJhZnQ6ICgpID0+IGZpbmlzaERyYWZ0LFxuICBmcmVlemU6ICgpID0+IGZyZWV6ZSxcbiAgaW1tZXJhYmxlOiAoKSA9PiBEUkFGVEFCTEUsXG4gIGlzRHJhZnQ6ICgpID0+IGlzRHJhZnQsXG4gIGlzRHJhZnRhYmxlOiAoKSA9PiBpc0RyYWZ0YWJsZSxcbiAgbm90aGluZzogKCkgPT4gTk9USElORyxcbiAgb3JpZ2luYWw6ICgpID0+IG9yaWdpbmFsLFxuICBwcm9kdWNlOiAoKSA9PiBwcm9kdWNlLFxuICBwcm9kdWNlV2l0aFBhdGNoZXM6ICgpID0+IHByb2R1Y2VXaXRoUGF0Y2hlcyxcbiAgc2V0QXV0b0ZyZWV6ZTogKCkgPT4gc2V0QXV0b0ZyZWV6ZSxcbiAgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHk6ICgpID0+IHNldFVzZVN0cmljdFNoYWxsb3dDb3B5XG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKGltbWVyX2V4cG9ydHMpO1xuXG4vLyBzcmMvdXRpbHMvZW52LnRzXG52YXIgTk9USElORyA9IFN5bWJvbC5mb3IoXCJpbW1lci1ub3RoaW5nXCIpO1xudmFyIERSQUZUQUJMRSA9IFN5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIik7XG52YXIgRFJBRlRfU1RBVEUgPSBTeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIik7XG5cbi8vIHNyYy91dGlscy9lcnJvcnMudHNcbnZhciBlcnJvcnMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBbXG4gIC8vIEFsbCBlcnJvciBjb2Rlcywgc3RhcnRpbmcgYnkgMDpcbiAgZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgcmV0dXJuIGBUaGUgcGx1Z2luIGZvciAnJHtwbHVnaW59JyBoYXMgbm90IGJlZW4gbG9hZGVkIGludG8gSW1tZXIuIFRvIGVuYWJsZSB0aGUgcGx1Z2luLCBpbXBvcnQgYW5kIGNhbGwgXFxgZW5hYmxlJHtwbHVnaW59KClcXGAgd2hlbiBpbml0aWFsaXppbmcgeW91ciBhcHBsaWNhdGlvbi5gO1xuICB9LFxuICBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBgcHJvZHVjZSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhpbmdzIHRoYXQgYXJlIGRyYWZ0YWJsZTogcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBNYXAsIFNldCBvciBjbGFzc2VzIHRoYXQgYXJlIG1hcmtlZCB3aXRoICdbaW1tZXJhYmxlXTogdHJ1ZScuIEdvdCAnJHt0aGluZ30nYDtcbiAgfSxcbiAgXCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLFxuICBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IHVzZSBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZC4gRGlkIHlvdSBwYXNzIGFuIG9iamVjdCBmcm9tIGluc2lkZSBhbiBpbW1lciBmdW5jdGlvbiB0byBhbiBhc3luYyBwcm9jZXNzPyBcIiArIGRhdGE7XG4gIH0sXG4gIFwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIixcbiAgXCJJbW1lciBmb3JiaWRzIGNpcmN1bGFyIHJlZmVyZW5jZXNcIixcbiAgXCJUaGUgZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb25cIixcbiAgXCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIixcbiAgXCJGaXJzdCBhcmd1bWVudCB0byBgY3JlYXRlRHJhZnRgIG11c3QgYmUgYSBwbGFpbiBvYmplY3QsIGFuIGFycmF5LCBvciBhbiBpbW1lcmFibGUgb2JqZWN0XCIsXG4gIFwiRmlyc3QgYXJndW1lbnQgdG8gYGZpbmlzaERyYWZ0YCBtdXN0IGJlIGEgZHJhZnQgcmV0dXJuZWQgYnkgYGNyZWF0ZURyYWZ0YFwiLFxuICBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBgJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiAke3RoaW5nfWA7XG4gIH0sXG4gIFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIixcbiAgXCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuICBcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLFxuICBcIkltbWVyIG9ubHkgc3VwcG9ydHMgc2V0dGluZyBhcnJheSBpbmRpY2VzIGFuZCB0aGUgJ2xlbmd0aCcgcHJvcGVydHlcIixcbiAgZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gYCdvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6ICR7dGhpbmd9YDtcbiAgfVxuICAvLyBOb3RlOiBpZiBtb3JlIGVycm9ycyBhcmUgYWRkZWQsIHRoZSBlcnJvck9mZnNldCBpbiBQYXRjaGVzLnRzIHNob3VsZCBiZSBpbmNyZWFzZWRcbiAgLy8gU2VlIFBhdGNoZXMudHMgZm9yIGFkZGl0aW9uYWwgZXJyb3JzXG5dIDogW107XG5mdW5jdGlvbiBkaWUoZXJyb3IsIC4uLmFyZ3MpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnN0IGUgPSBlcnJvcnNbZXJyb3JdO1xuICAgIGNvbnN0IG1zZyA9IHR5cGVvZiBlID09PSBcImZ1bmN0aW9uXCIgPyBlLmFwcGx5KG51bGwsIGFyZ3MpIDogZTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFtJbW1lcl0gJHttc2d9YCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiAke2Vycm9yfS4gRnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZmBcbiAgKTtcbn1cblxuLy8gc3JjL3V0aWxzL2NvbW1vbi50c1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuZnVuY3Rpb24gaXNEcmFmdCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiAhIXZhbHVlW0RSQUZUX1NUQVRFXTtcbn1cbmZ1bmN0aW9uIGlzRHJhZnRhYmxlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpXG4gICAgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgISF2YWx1ZVtEUkFGVEFCTEVdIHx8ICEhdmFsdWUuY29uc3RydWN0b3I/LltEUkFGVEFCTEVdIHx8IGlzTWFwKHZhbHVlKSB8fCBpc1NldCh2YWx1ZSk7XG59XG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IGdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgQ3RvciA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICBpZiAoQ3RvciA9PT0gT2JqZWN0KVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gXCJmdW5jdGlvblwiICYmIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoQ3RvcikgPT09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5mdW5jdGlvbiBvcmlnaW5hbCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnQodmFsdWUpKVxuICAgIGRpZSgxNSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWVbRFJBRlRfU1RBVEVdLmJhc2VfO1xufVxuZnVuY3Rpb24gZWFjaChvYmosIGl0ZXIpIHtcbiAgaWYgKGdldEFyY2h0eXBlKG9iaikgPT09IDAgLyogT2JqZWN0ICovKSB7XG4gICAgUmVmbGVjdC5vd25LZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpdGVyKGtleSwgb2JqW2tleV0sIG9iaik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4gaXRlcihpbmRleCwgZW50cnksIG9iaikpO1xuICB9XG59XG5mdW5jdGlvbiBnZXRBcmNodHlwZSh0aGluZykge1xuICBjb25zdCBzdGF0ZSA9IHRoaW5nW0RSQUZUX1NUQVRFXTtcbiAgcmV0dXJuIHN0YXRlID8gc3RhdGUudHlwZV8gOiBBcnJheS5pc0FycmF5KHRoaW5nKSA/IDEgLyogQXJyYXkgKi8gOiBpc01hcCh0aGluZykgPyAyIC8qIE1hcCAqLyA6IGlzU2V0KHRoaW5nKSA/IDMgLyogU2V0ICovIDogMCAvKiBPYmplY3QgKi87XG59XG5mdW5jdGlvbiBoYXModGhpbmcsIHByb3ApIHtcbiAgcmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gMiAvKiBNYXAgKi8gPyB0aGluZy5oYXMocHJvcCkgOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpbmcsIHByb3ApO1xufVxuZnVuY3Rpb24gZ2V0KHRoaW5nLCBwcm9wKSB7XG4gIHJldHVybiBnZXRBcmNodHlwZSh0aGluZykgPT09IDIgLyogTWFwICovID8gdGhpbmcuZ2V0KHByb3ApIDogdGhpbmdbcHJvcF07XG59XG5mdW5jdGlvbiBzZXQodGhpbmcsIHByb3BPck9sZFZhbHVlLCB2YWx1ZSkge1xuICBjb25zdCB0ID0gZ2V0QXJjaHR5cGUodGhpbmcpO1xuICBpZiAodCA9PT0gMiAvKiBNYXAgKi8pXG4gICAgdGhpbmcuc2V0KHByb3BPck9sZFZhbHVlLCB2YWx1ZSk7XG4gIGVsc2UgaWYgKHQgPT09IDMgLyogU2V0ICovKSB7XG4gICAgdGhpbmcuYWRkKHZhbHVlKTtcbiAgfSBlbHNlXG4gICAgdGhpbmdbcHJvcE9yT2xkVmFsdWVdID0gdmFsdWU7XG59XG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzTWFwKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgTWFwO1xufVxuZnVuY3Rpb24gaXNTZXQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBTZXQ7XG59XG5mdW5jdGlvbiBsYXRlc3Qoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLmNvcHlfIHx8IHN0YXRlLmJhc2VfO1xufVxuZnVuY3Rpb24gc2hhbGxvd0NvcHkoYmFzZSwgc3RyaWN0KSB7XG4gIGlmIChpc01hcChiYXNlKSkge1xuICAgIHJldHVybiBuZXcgTWFwKGJhc2UpO1xuICB9XG4gIGlmIChpc1NldChiYXNlKSkge1xuICAgIHJldHVybiBuZXcgU2V0KGJhc2UpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGJhc2UpKVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChiYXNlKTtcbiAgY29uc3QgaXNQbGFpbiA9IGlzUGxhaW5PYmplY3QoYmFzZSk7XG4gIGlmIChzdHJpY3QgPT09IHRydWUgfHwgc3RyaWN0ID09PSBcImNsYXNzX29ubHlcIiAmJiAhaXNQbGFpbikge1xuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYmFzZSk7XG4gICAgZGVsZXRlIGRlc2NyaXB0b3JzW0RSQUZUX1NUQVRFXTtcbiAgICBsZXQga2V5cyA9IFJlZmxlY3Qub3duS2V5cyhkZXNjcmlwdG9ycyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgY29uc3QgZGVzYyA9IGRlc2NyaXB0b3JzW2tleV07XG4gICAgICBpZiAoZGVzYy53cml0YWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChkZXNjLmdldCB8fCBkZXNjLnNldClcbiAgICAgICAgZGVzY3JpcHRvcnNba2V5XSA9IHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgLy8gY291bGQgbGl2ZSB3aXRoICEhZGVzYy5zZXQgYXMgd2VsbCBoZXJlLi4uXG4gICAgICAgICAgZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgICAgIHZhbHVlOiBiYXNlW2tleV1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoZ2V0UHJvdG90eXBlT2YoYmFzZSksIGRlc2NyaXB0b3JzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcm90byA9IGdldFByb3RvdHlwZU9mKGJhc2UpO1xuICAgIGlmIChwcm90byAhPT0gbnVsbCAmJiBpc1BsYWluKSB7XG4gICAgICByZXR1cm4geyAuLi5iYXNlIH07XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9iaiwgYmFzZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZyZWV6ZShvYmosIGRlZXAgPSBmYWxzZSkge1xuICBpZiAoaXNGcm96ZW4ob2JqKSB8fCBpc0RyYWZ0KG9iaikgfHwgIWlzRHJhZnRhYmxlKG9iaikpXG4gICAgcmV0dXJuIG9iajtcbiAgaWYgKGdldEFyY2h0eXBlKG9iaikgPiAxKSB7XG4gICAgb2JqLnNldCA9IG9iai5hZGQgPSBvYmouY2xlYXIgPSBvYmouZGVsZXRlID0gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zO1xuICB9XG4gIE9iamVjdC5mcmVlemUob2JqKTtcbiAgaWYgKGRlZXApXG4gICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IGZyZWV6ZSh2YWx1ZSwgdHJ1ZSkpO1xuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zKCkge1xuICBkaWUoMik7XG59XG5mdW5jdGlvbiBpc0Zyb3plbihvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5pc0Zyb3plbihvYmopO1xufVxuXG4vLyBzcmMvdXRpbHMvcGx1Z2lucy50c1xudmFyIHBsdWdpbnMgPSB7fTtcbmZ1bmN0aW9uIGdldFBsdWdpbihwbHVnaW5LZXkpIHtcbiAgY29uc3QgcGx1Z2luID0gcGx1Z2luc1twbHVnaW5LZXldO1xuICBpZiAoIXBsdWdpbikge1xuICAgIGRpZSgwLCBwbHVnaW5LZXkpO1xuICB9XG4gIHJldHVybiBwbHVnaW47XG59XG5mdW5jdGlvbiBsb2FkUGx1Z2luKHBsdWdpbktleSwgaW1wbGVtZW50YXRpb24pIHtcbiAgaWYgKCFwbHVnaW5zW3BsdWdpbktleV0pXG4gICAgcGx1Z2luc1twbHVnaW5LZXldID0gaW1wbGVtZW50YXRpb247XG59XG5cbi8vIHNyYy9jb3JlL3Njb3BlLnRzXG52YXIgY3VycmVudFNjb3BlO1xuZnVuY3Rpb24gZ2V0Q3VycmVudFNjb3BlKCkge1xuICByZXR1cm4gY3VycmVudFNjb3BlO1xufVxuZnVuY3Rpb24gY3JlYXRlU2NvcGUocGFyZW50XywgaW1tZXJfKSB7XG4gIHJldHVybiB7XG4gICAgZHJhZnRzXzogW10sXG4gICAgcGFyZW50XyxcbiAgICBpbW1lcl8sXG4gICAgLy8gV2hlbmV2ZXIgdGhlIG1vZGlmaWVkIGRyYWZ0IGNvbnRhaW5zIGEgZHJhZnQgZnJvbSBhbm90aGVyIHNjb3BlLCB3ZVxuICAgIC8vIG5lZWQgdG8gcHJldmVudCBhdXRvLWZyZWV6aW5nIHNvIHRoZSB1bm93bmVkIGRyYWZ0IGNhbiBiZSBmaW5hbGl6ZWQuXG4gICAgY2FuQXV0b0ZyZWV6ZV86IHRydWUsXG4gICAgdW5maW5hbGl6ZWREcmFmdHNfOiAwXG4gIH07XG59XG5mdW5jdGlvbiB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcikge1xuICBpZiAocGF0Y2hMaXN0ZW5lcikge1xuICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIik7XG4gICAgc2NvcGUucGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5pbnZlcnNlUGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5wYXRjaExpc3RlbmVyXyA9IHBhdGNoTGlzdGVuZXI7XG4gIH1cbn1cbmZ1bmN0aW9uIHJldm9rZVNjb3BlKHNjb3BlKSB7XG4gIGxlYXZlU2NvcGUoc2NvcGUpO1xuICBzY29wZS5kcmFmdHNfLmZvckVhY2gocmV2b2tlRHJhZnQpO1xuICBzY29wZS5kcmFmdHNfID0gbnVsbDtcbn1cbmZ1bmN0aW9uIGxlYXZlU2NvcGUoc2NvcGUpIHtcbiAgaWYgKHNjb3BlID09PSBjdXJyZW50U2NvcGUpIHtcbiAgICBjdXJyZW50U2NvcGUgPSBzY29wZS5wYXJlbnRfO1xuICB9XG59XG5mdW5jdGlvbiBlbnRlclNjb3BlKGltbWVyMikge1xuICByZXR1cm4gY3VycmVudFNjb3BlID0gY3JlYXRlU2NvcGUoY3VycmVudFNjb3BlLCBpbW1lcjIpO1xufVxuZnVuY3Rpb24gcmV2b2tlRHJhZnQoZHJhZnQpIHtcbiAgY29uc3Qgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG4gIGlmIChzdGF0ZS50eXBlXyA9PT0gMCAvKiBPYmplY3QgKi8gfHwgc3RhdGUudHlwZV8gPT09IDEgLyogQXJyYXkgKi8pXG4gICAgc3RhdGUucmV2b2tlXygpO1xuICBlbHNlXG4gICAgc3RhdGUucmV2b2tlZF8gPSB0cnVlO1xufVxuXG4vLyBzcmMvY29yZS9maW5hbGl6ZS50c1xuZnVuY3Rpb24gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKSB7XG4gIHNjb3BlLnVuZmluYWxpemVkRHJhZnRzXyA9IHNjb3BlLmRyYWZ0c18ubGVuZ3RoO1xuICBjb25zdCBiYXNlRHJhZnQgPSBzY29wZS5kcmFmdHNfWzBdO1xuICBjb25zdCBpc1JlcGxhY2VkID0gcmVzdWx0ICE9PSB2b2lkIDAgJiYgcmVzdWx0ICE9PSBiYXNlRHJhZnQ7XG4gIGlmIChpc1JlcGxhY2VkKSB7XG4gICAgaWYgKGJhc2VEcmFmdFtEUkFGVF9TVEFURV0ubW9kaWZpZWRfKSB7XG4gICAgICByZXZva2VTY29wZShzY29wZSk7XG4gICAgICBkaWUoNCk7XG4gICAgfVxuICAgIGlmIChpc0RyYWZ0YWJsZShyZXN1bHQpKSB7XG4gICAgICByZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgcmVzdWx0KTtcbiAgICAgIGlmICghc2NvcGUucGFyZW50XylcbiAgICAgICAgbWF5YmVGcmVlemUoc2NvcGUsIHJlc3VsdCk7XG4gICAgfVxuICAgIGlmIChzY29wZS5wYXRjaGVzXykge1xuICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oXG4gICAgICAgIGJhc2VEcmFmdFtEUkFGVF9TVEFURV0uYmFzZV8sXG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgc2NvcGUucGF0Y2hlc18sXG4gICAgICAgIHNjb3BlLmludmVyc2VQYXRjaGVzX1xuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIGJhc2VEcmFmdCwgW10pO1xuICB9XG4gIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgaWYgKHNjb3BlLnBhdGNoZXNfKSB7XG4gICAgc2NvcGUucGF0Y2hMaXN0ZW5lcl8oc2NvcGUucGF0Y2hlc18sIHNjb3BlLmludmVyc2VQYXRjaGVzXyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdCAhPT0gTk9USElORyA/IHJlc3VsdCA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGZpbmFsaXplKHJvb3RTY29wZSwgdmFsdWUsIHBhdGgpIHtcbiAgaWYgKGlzRnJvemVuKHZhbHVlKSlcbiAgICByZXR1cm4gdmFsdWU7XG4gIGNvbnN0IHN0YXRlID0gdmFsdWVbRFJBRlRfU1RBVEVdO1xuICBpZiAoIXN0YXRlKSB7XG4gICAgZWFjaChcbiAgICAgIHZhbHVlLFxuICAgICAgKGtleSwgY2hpbGRWYWx1ZSkgPT4gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCB2YWx1ZSwga2V5LCBjaGlsZFZhbHVlLCBwYXRoKVxuICAgICk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChzdGF0ZS5zY29wZV8gIT09IHJvb3RTY29wZSlcbiAgICByZXR1cm4gdmFsdWU7XG4gIGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG4gICAgbWF5YmVGcmVlemUocm9vdFNjb3BlLCBzdGF0ZS5iYXNlXywgdHJ1ZSk7XG4gICAgcmV0dXJuIHN0YXRlLmJhc2VfO1xuICB9XG4gIGlmICghc3RhdGUuZmluYWxpemVkXykge1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSB0cnVlO1xuICAgIHN0YXRlLnNjb3BlXy51bmZpbmFsaXplZERyYWZ0c18tLTtcbiAgICBjb25zdCByZXN1bHQgPSBzdGF0ZS5jb3B5XztcbiAgICBsZXQgcmVzdWx0RWFjaCA9IHJlc3VsdDtcbiAgICBsZXQgaXNTZXQyID0gZmFsc2U7XG4gICAgaWYgKHN0YXRlLnR5cGVfID09PSAzIC8qIFNldCAqLykge1xuICAgICAgcmVzdWx0RWFjaCA9IG5ldyBTZXQocmVzdWx0KTtcbiAgICAgIHJlc3VsdC5jbGVhcigpO1xuICAgICAgaXNTZXQyID0gdHJ1ZTtcbiAgICB9XG4gICAgZWFjaChcbiAgICAgIHJlc3VsdEVhY2gsXG4gICAgICAoa2V5LCBjaGlsZFZhbHVlKSA9PiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgc3RhdGUsIHJlc3VsdCwga2V5LCBjaGlsZFZhbHVlLCBwYXRoLCBpc1NldDIpXG4gICAgKTtcbiAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIHJlc3VsdCwgZmFsc2UpO1xuICAgIGlmIChwYXRoICYmIHJvb3RTY29wZS5wYXRjaGVzXykge1xuICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVBhdGNoZXNfKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcm9vdFNjb3BlLnBhdGNoZXNfLFxuICAgICAgICByb290U2NvcGUuaW52ZXJzZVBhdGNoZXNfXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGUuY29weV87XG59XG5mdW5jdGlvbiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgcGFyZW50U3RhdGUsIHRhcmdldE9iamVjdCwgcHJvcCwgY2hpbGRWYWx1ZSwgcm9vdFBhdGgsIHRhcmdldElzU2V0KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgY2hpbGRWYWx1ZSA9PT0gdGFyZ2V0T2JqZWN0KVxuICAgIGRpZSg1KTtcbiAgaWYgKGlzRHJhZnQoY2hpbGRWYWx1ZSkpIHtcbiAgICBjb25zdCBwYXRoID0gcm9vdFBhdGggJiYgcGFyZW50U3RhdGUgJiYgcGFyZW50U3RhdGUudHlwZV8gIT09IDMgLyogU2V0ICovICYmIC8vIFNldCBvYmplY3RzIGFyZSBhdG9taWMgc2luY2UgdGhleSBoYXZlIG5vIGtleXMuXG4gICAgIWhhcyhwYXJlbnRTdGF0ZS5hc3NpZ25lZF8sIHByb3ApID8gcm9vdFBhdGguY29uY2F0KHByb3ApIDogdm9pZCAwO1xuICAgIGNvbnN0IHJlcyA9IGZpbmFsaXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSwgcGF0aCk7XG4gICAgc2V0KHRhcmdldE9iamVjdCwgcHJvcCwgcmVzKTtcbiAgICBpZiAoaXNEcmFmdChyZXMpKSB7XG4gICAgICByb290U2NvcGUuY2FuQXV0b0ZyZWV6ZV8gPSBmYWxzZTtcbiAgICB9IGVsc2VcbiAgICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICh0YXJnZXRJc1NldCkge1xuICAgIHRhcmdldE9iamVjdC5hZGQoY2hpbGRWYWx1ZSk7XG4gIH1cbiAgaWYgKGlzRHJhZnRhYmxlKGNoaWxkVmFsdWUpICYmICFpc0Zyb3plbihjaGlsZFZhbHVlKSkge1xuICAgIGlmICghcm9vdFNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiByb290U2NvcGUudW5maW5hbGl6ZWREcmFmdHNfIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpO1xuICAgIGlmICgoIXBhcmVudFN0YXRlIHx8ICFwYXJlbnRTdGF0ZS5zY29wZV8ucGFyZW50XykgJiYgdHlwZW9mIHByb3AgIT09IFwic3ltYm9sXCIgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRhcmdldE9iamVjdCwgcHJvcCkpXG4gICAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiBtYXliZUZyZWV6ZShzY29wZSwgdmFsdWUsIGRlZXAgPSBmYWxzZSkge1xuICBpZiAoIXNjb3BlLnBhcmVudF8gJiYgc2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHNjb3BlLmNhbkF1dG9GcmVlemVfKSB7XG4gICAgZnJlZXplKHZhbHVlLCBkZWVwKTtcbiAgfVxufVxuXG4vLyBzcmMvY29yZS9wcm94eS50c1xuZnVuY3Rpb24gY3JlYXRlUHJveHlQcm94eShiYXNlLCBwYXJlbnQpIHtcbiAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYmFzZSk7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIHR5cGVfOiBpc0FycmF5ID8gMSAvKiBBcnJheSAqLyA6IDAgLyogT2JqZWN0ICovLFxuICAgIC8vIFRyYWNrIHdoaWNoIHByb2R1Y2UgY2FsbCB0aGlzIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAvLyBUcnVlIGZvciBib3RoIHNoYWxsb3cgYW5kIGRlZXAgY2hhbmdlcy5cbiAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgIC8vIFVzZWQgZHVyaW5nIGZpbmFsaXphdGlvbi5cbiAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAvLyBUcmFjayB3aGljaCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBhc3NpZ25lZCAodHJ1ZSkgb3IgZGVsZXRlZCAoZmFsc2UpLlxuICAgIGFzc2lnbmVkXzoge30sXG4gICAgLy8gVGhlIHBhcmVudCBkcmFmdCBzdGF0ZS5cbiAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgLy8gVGhlIGJhc2Ugc3RhdGUuXG4gICAgYmFzZV86IGJhc2UsXG4gICAgLy8gVGhlIGJhc2UgcHJveHkuXG4gICAgZHJhZnRfOiBudWxsLFxuICAgIC8vIHNldCBiZWxvd1xuICAgIC8vIFRoZSBiYXNlIGNvcHkgd2l0aCBhbnkgdXBkYXRlZCB2YWx1ZXMuXG4gICAgY29weV86IG51bGwsXG4gICAgLy8gQ2FsbGVkIGJ5IHRoZSBgcHJvZHVjZWAgZnVuY3Rpb24uXG4gICAgcmV2b2tlXzogbnVsbCxcbiAgICBpc01hbnVhbF86IGZhbHNlXG4gIH07XG4gIGxldCB0YXJnZXQgPSBzdGF0ZTtcbiAgbGV0IHRyYXBzID0gb2JqZWN0VHJhcHM7XG4gIGlmIChpc0FycmF5KSB7XG4gICAgdGFyZ2V0ID0gW3N0YXRlXTtcbiAgICB0cmFwcyA9IGFycmF5VHJhcHM7XG4gIH1cbiAgY29uc3QgeyByZXZva2UsIHByb3h5IH0gPSBQcm94eS5yZXZvY2FibGUodGFyZ2V0LCB0cmFwcyk7XG4gIHN0YXRlLmRyYWZ0XyA9IHByb3h5O1xuICBzdGF0ZS5yZXZva2VfID0gcmV2b2tlO1xuICByZXR1cm4gcHJveHk7XG59XG52YXIgb2JqZWN0VHJhcHMgPSB7XG4gIGdldChzdGF0ZSwgcHJvcCkge1xuICAgIGlmIChwcm9wID09PSBEUkFGVF9TVEFURSlcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICBjb25zdCBzb3VyY2UgPSBsYXRlc3Qoc3RhdGUpO1xuICAgIGlmICghaGFzKHNvdXJjZSwgcHJvcCkpIHtcbiAgICAgIHJldHVybiByZWFkUHJvcEZyb21Qcm90byhzdGF0ZSwgc291cmNlLCBwcm9wKTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBzb3VyY2VbcHJvcF07XG4gICAgaWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApKSB7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV9bcHJvcF0gPSBjcmVhdGVQcm94eSh2YWx1ZSwgc3RhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIGhhcyhzdGF0ZSwgcHJvcCkge1xuICAgIHJldHVybiBwcm9wIGluIGxhdGVzdChzdGF0ZSk7XG4gIH0sXG4gIG93bktleXMoc3RhdGUpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKGxhdGVzdChzdGF0ZSkpO1xuICB9LFxuICBzZXQoc3RhdGUsIHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgZGVzYyA9IGdldERlc2NyaXB0b3JGcm9tUHJvdG8obGF0ZXN0KHN0YXRlKSwgcHJvcCk7XG4gICAgaWYgKGRlc2M/LnNldCkge1xuICAgICAgZGVzYy5zZXQuY2FsbChzdGF0ZS5kcmFmdF8sIHZhbHVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgICAgY29uc3QgY3VycmVudDIgPSBwZWVrKGxhdGVzdChzdGF0ZSksIHByb3ApO1xuICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gY3VycmVudDI/LltEUkFGVF9TVEFURV07XG4gICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5iYXNlXyA9PT0gdmFsdWUpIHtcbiAgICAgICAgc3RhdGUuY29weV9bcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzKHZhbHVlLCBjdXJyZW50MikgJiYgKHZhbHVlICE9PSB2b2lkIDAgfHwgaGFzKHN0YXRlLmJhc2VfLCBwcm9wKSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY29weV9bcHJvcF0gPT09IHZhbHVlICYmIC8vIHNwZWNpYWwgY2FzZTogaGFuZGxlIG5ldyBwcm9wcyB3aXRoIHZhbHVlICd1bmRlZmluZWQnXG4gICAgKHZhbHVlICE9PSB2b2lkIDAgfHwgcHJvcCBpbiBzdGF0ZS5jb3B5XykgfHwgLy8gc3BlY2lhbCBjYXNlOiBOYU5cbiAgICBOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc05hTihzdGF0ZS5jb3B5X1twcm9wXSkpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBzdGF0ZS5jb3B5X1twcm9wXSA9IHZhbHVlO1xuICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5KHN0YXRlLCBwcm9wKSB7XG4gICAgaWYgKHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApICE9PSB2b2lkIDAgfHwgcHJvcCBpbiBzdGF0ZS5iYXNlXykge1xuICAgICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gZmFsc2U7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZS5hc3NpZ25lZF9bcHJvcF07XG4gICAgfVxuICAgIGlmIChzdGF0ZS5jb3B5Xykge1xuICAgICAgZGVsZXRlIHN0YXRlLmNvcHlfW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgLy8gTm90ZTogV2UgbmV2ZXIgY29lcmNlIGBkZXNjLnZhbHVlYCBpbnRvIGFuIEltbWVyIGRyYWZ0LCBiZWNhdXNlIHdlIGNhbid0IG1ha2VcbiAgLy8gdGhlIHNhbWUgZ3VhcmFudGVlIGluIEVTNSBtb2RlLlxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3RhdGUsIHByb3ApIHtcbiAgICBjb25zdCBvd25lciA9IGxhdGVzdChzdGF0ZSk7XG4gICAgY29uc3QgZGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG93bmVyLCBwcm9wKTtcbiAgICBpZiAoIWRlc2MpXG4gICAgICByZXR1cm4gZGVzYztcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHN0YXRlLnR5cGVfICE9PSAxIC8qIEFycmF5ICovIHx8IHByb3AgIT09IFwibGVuZ3RoXCIsXG4gICAgICBlbnVtZXJhYmxlOiBkZXNjLmVudW1lcmFibGUsXG4gICAgICB2YWx1ZTogb3duZXJbcHJvcF1cbiAgICB9O1xuICB9LFxuICBkZWZpbmVQcm9wZXJ0eSgpIHtcbiAgICBkaWUoMTEpO1xuICB9LFxuICBnZXRQcm90b3R5cGVPZihzdGF0ZSkge1xuICAgIHJldHVybiBnZXRQcm90b3R5cGVPZihzdGF0ZS5iYXNlXyk7XG4gIH0sXG4gIHNldFByb3RvdHlwZU9mKCkge1xuICAgIGRpZSgxMik7XG4gIH1cbn07XG52YXIgYXJyYXlUcmFwcyA9IHt9O1xuZWFjaChvYmplY3RUcmFwcywgKGtleSwgZm4pID0+IHtcbiAgYXJyYXlUcmFwc1trZXldID0gZnVuY3Rpb24oKSB7XG4gICAgYXJndW1lbnRzWzBdID0gYXJndW1lbnRzWzBdWzBdO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSk7XG5hcnJheVRyYXBzLmRlbGV0ZVByb3BlcnR5ID0gZnVuY3Rpb24oc3RhdGUsIHByb3ApIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc05hTihwYXJzZUludChwcm9wKSkpXG4gICAgZGllKDEzKTtcbiAgcmV0dXJuIGFycmF5VHJhcHMuc2V0LmNhbGwodGhpcywgc3RhdGUsIHByb3AsIHZvaWQgMCk7XG59O1xuYXJyYXlUcmFwcy5zZXQgPSBmdW5jdGlvbihzdGF0ZSwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBwcm9wICE9PSBcImxlbmd0aFwiICYmIGlzTmFOKHBhcnNlSW50KHByb3ApKSlcbiAgICBkaWUoMTQpO1xuICByZXR1cm4gb2JqZWN0VHJhcHMuc2V0LmNhbGwodGhpcywgc3RhdGVbMF0sIHByb3AsIHZhbHVlLCBzdGF0ZVswXSk7XG59O1xuZnVuY3Rpb24gcGVlayhkcmFmdCwgcHJvcCkge1xuICBjb25zdCBzdGF0ZSA9IGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgY29uc3Qgc291cmNlID0gc3RhdGUgPyBsYXRlc3Qoc3RhdGUpIDogZHJhZnQ7XG4gIHJldHVybiBzb3VyY2VbcHJvcF07XG59XG5mdW5jdGlvbiByZWFkUHJvcEZyb21Qcm90byhzdGF0ZSwgc291cmNlLCBwcm9wKSB7XG4gIGNvbnN0IGRlc2MgPSBnZXREZXNjcmlwdG9yRnJvbVByb3RvKHNvdXJjZSwgcHJvcCk7XG4gIHJldHVybiBkZXNjID8gYHZhbHVlYCBpbiBkZXNjID8gZGVzYy52YWx1ZSA6IChcbiAgICAvLyBUaGlzIGlzIGEgdmVyeSBzcGVjaWFsIGNhc2UsIGlmIHRoZSBwcm9wIGlzIGEgZ2V0dGVyIGRlZmluZWQgYnkgdGhlXG4gICAgLy8gcHJvdG90eXBlLCB3ZSBzaG91bGQgaW52b2tlIGl0IHdpdGggdGhlIGRyYWZ0IGFzIGNvbnRleHQhXG4gICAgZGVzYy5nZXQ/LmNhbGwoc3RhdGUuZHJhZnRfKVxuICApIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApIHtcbiAgaWYgKCEocHJvcCBpbiBzb3VyY2UpKVxuICAgIHJldHVybiB2b2lkIDA7XG4gIGxldCBwcm90byA9IGdldFByb3RvdHlwZU9mKHNvdXJjZSk7XG4gIHdoaWxlIChwcm90bykge1xuICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm9wKTtcbiAgICBpZiAoZGVzYylcbiAgICAgIHJldHVybiBkZXNjO1xuICAgIHByb3RvID0gZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG5mdW5jdGlvbiBtYXJrQ2hhbmdlZChzdGF0ZSkge1xuICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgIHN0YXRlLm1vZGlmaWVkXyA9IHRydWU7XG4gICAgaWYgKHN0YXRlLnBhcmVudF8pIHtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlLnBhcmVudF8pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gcHJlcGFyZUNvcHkoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgIHN0YXRlLmNvcHlfID0gc2hhbGxvd0NvcHkoXG4gICAgICBzdGF0ZS5iYXNlXyxcbiAgICAgIHN0YXRlLnNjb3BlXy5pbW1lcl8udXNlU3RyaWN0U2hhbGxvd0NvcHlfXG4gICAgKTtcbiAgfVxufVxuXG4vLyBzcmMvY29yZS9pbW1lckNsYXNzLnRzXG52YXIgSW1tZXIyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmF1dG9GcmVlemVfID0gdHJ1ZTtcbiAgICB0aGlzLnVzZVN0cmljdFNoYWxsb3dDb3B5XyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoZSBgcHJvZHVjZWAgZnVuY3Rpb24gdGFrZXMgYSB2YWx1ZSBhbmQgYSBcInJlY2lwZSBmdW5jdGlvblwiICh3aG9zZVxuICAgICAqIHJldHVybiB2YWx1ZSBvZnRlbiBkZXBlbmRzIG9uIHRoZSBiYXNlIHN0YXRlKS4gVGhlIHJlY2lwZSBmdW5jdGlvbiBpc1xuICAgICAqIGZyZWUgdG8gbXV0YXRlIGl0cyBmaXJzdCBhcmd1bWVudCBob3dldmVyIGl0IHdhbnRzLiBBbGwgbXV0YXRpb25zIGFyZVxuICAgICAqIG9ubHkgZXZlciBhcHBsaWVkIHRvIGEgX19jb3B5X18gb2YgdGhlIGJhc2Ugc3RhdGUuXG4gICAgICpcbiAgICAgKiBQYXNzIG9ubHkgYSBmdW5jdGlvbiB0byBjcmVhdGUgYSBcImN1cnJpZWQgcHJvZHVjZXJcIiB3aGljaCByZWxpZXZlcyB5b3VcbiAgICAgKiBmcm9tIHBhc3NpbmcgdGhlIHJlY2lwZSBmdW5jdGlvbiBldmVyeSB0aW1lLlxuICAgICAqXG4gICAgICogT25seSBwbGFpbiBvYmplY3RzIGFuZCBhcnJheXMgYXJlIG1hZGUgbXV0YWJsZS4gQWxsIG90aGVyIG9iamVjdHMgYXJlXG4gICAgICogY29uc2lkZXJlZCB1bmNvcHlhYmxlLlxuICAgICAqXG4gICAgICogTm90ZTogVGhpcyBmdW5jdGlvbiBpcyBfX2JvdW5kX18gdG8gaXRzIGBJbW1lcmAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gYmFzZSAtIHRoZSBpbml0aWFsIHN0YXRlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVjaXBlIC0gZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIHByb3h5IG9mIHRoZSBiYXNlIHN0YXRlIGFzIGZpcnN0IGFyZ3VtZW50IGFuZCB3aGljaCBjYW4gYmUgZnJlZWx5IG1vZGlmaWVkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcGF0Y2hMaXN0ZW5lciAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCBhbGwgdGhlIHBhdGNoZXMgcHJvZHVjZWQgaGVyZVxuICAgICAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxuICAgICAqL1xuICAgIHRoaXMucHJvZHVjZSA9IChiYXNlLCByZWNpcGUsIHBhdGNoTGlzdGVuZXIpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjb25zdCBkZWZhdWx0QmFzZSA9IHJlY2lwZTtcbiAgICAgICAgcmVjaXBlID0gYmFzZTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkUHJvZHVjZShiYXNlMiA9IGRlZmF1bHRCYXNlLCAuLi5hcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYucHJvZHVjZShiYXNlMiwgKGRyYWZ0KSA9PiByZWNpcGUuY2FsbCh0aGlzLCBkcmFmdCwgLi4uYXJncykpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZGllKDYpO1xuICAgICAgaWYgKHBhdGNoTGlzdGVuZXIgIT09IHZvaWQgMCAmJiB0eXBlb2YgcGF0Y2hMaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBkaWUoNyk7XG4gICAgICBsZXQgcmVzdWx0O1xuICAgICAgaWYgKGlzRHJhZnRhYmxlKGJhc2UpKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gZW50ZXJTY29wZSh0aGlzKTtcbiAgICAgICAgY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShiYXNlLCB2b2lkIDApO1xuICAgICAgICBsZXQgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlY2lwZShwcm94eSk7XG4gICAgICAgICAgaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoaGFzRXJyb3IpXG4gICAgICAgICAgICByZXZva2VTY29wZShzY29wZSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgbGVhdmVTY29wZShzY29wZSk7XG4gICAgICAgIH1cbiAgICAgICAgdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWJhc2UgfHwgdHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVjaXBlKGJhc2UpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApXG4gICAgICAgICAgcmVzdWx0ID0gYmFzZTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gTk9USElORylcbiAgICAgICAgICByZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIGlmICh0aGlzLmF1dG9GcmVlemVfKVxuICAgICAgICAgIGZyZWV6ZShyZXN1bHQsIHRydWUpO1xuICAgICAgICBpZiAocGF0Y2hMaXN0ZW5lcikge1xuICAgICAgICAgIGNvbnN0IHAgPSBbXTtcbiAgICAgICAgICBjb25zdCBpcCA9IFtdO1xuICAgICAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKGJhc2UsIHJlc3VsdCwgcCwgaXApO1xuICAgICAgICAgIHBhdGNoTGlzdGVuZXIocCwgaXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGVsc2VcbiAgICAgICAgZGllKDEsIGJhc2UpO1xuICAgIH07XG4gICAgdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMgPSAoYmFzZSwgcmVjaXBlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gKHN0YXRlLCAuLi5hcmdzKSA9PiB0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyhzdGF0ZSwgKGRyYWZ0KSA9PiBiYXNlKGRyYWZ0LCAuLi5hcmdzKSk7XG4gICAgICB9XG4gICAgICBsZXQgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXM7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb2R1Y2UoYmFzZSwgcmVjaXBlLCAocCwgaXApID0+IHtcbiAgICAgICAgcGF0Y2hlcyA9IHA7XG4gICAgICAgIGludmVyc2VQYXRjaGVzID0gaXA7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbcmVzdWx0LCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc107XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZz8uYXV0b0ZyZWV6ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICB0aGlzLnNldEF1dG9GcmVlemUoY29uZmlnLmF1dG9GcmVlemUpO1xuICAgIGlmICh0eXBlb2YgY29uZmlnPy51c2VTdHJpY3RTaGFsbG93Q29weSA9PT0gXCJib29sZWFuXCIpXG4gICAgICB0aGlzLnNldFVzZVN0cmljdFNoYWxsb3dDb3B5KGNvbmZpZy51c2VTdHJpY3RTaGFsbG93Q29weSk7XG4gIH1cbiAgY3JlYXRlRHJhZnQoYmFzZSkge1xuICAgIGlmICghaXNEcmFmdGFibGUoYmFzZSkpXG4gICAgICBkaWUoOCk7XG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpXG4gICAgICBiYXNlID0gY3VycmVudChiYXNlKTtcbiAgICBjb25zdCBzY29wZSA9IGVudGVyU2NvcGUodGhpcyk7XG4gICAgY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShiYXNlLCB2b2lkIDApO1xuICAgIHByb3h5W0RSQUZUX1NUQVRFXS5pc01hbnVhbF8gPSB0cnVlO1xuICAgIGxlYXZlU2NvcGUoc2NvcGUpO1xuICAgIHJldHVybiBwcm94eTtcbiAgfVxuICBmaW5pc2hEcmFmdChkcmFmdCwgcGF0Y2hMaXN0ZW5lcikge1xuICAgIGNvbnN0IHN0YXRlID0gZHJhZnQgJiYgZHJhZnRbRFJBRlRfU1RBVEVdO1xuICAgIGlmICghc3RhdGUgfHwgIXN0YXRlLmlzTWFudWFsXylcbiAgICAgIGRpZSg5KTtcbiAgICBjb25zdCB7IHNjb3BlXzogc2NvcGUgfSA9IHN0YXRlO1xuICAgIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKTtcbiAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdCh2b2lkIDAsIHNjb3BlKTtcbiAgfVxuICAvKipcbiAgICogUGFzcyB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgZnJlZXplIGFsbCBjb3BpZXMgY3JlYXRlZCBieSBJbW1lci5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYXV0by1mcmVlemluZyBpcyBlbmFibGVkLlxuICAgKi9cbiAgc2V0QXV0b0ZyZWV6ZSh2YWx1ZSkge1xuICAgIHRoaXMuYXV0b0ZyZWV6ZV8gPSB2YWx1ZTtcbiAgfVxuICAvKipcbiAgICogUGFzcyB0cnVlIHRvIGVuYWJsZSBzdHJpY3Qgc2hhbGxvdyBjb3B5LlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBpbW1lciBkb2VzIG5vdCBjb3B5IHRoZSBvYmplY3QgZGVzY3JpcHRvcnMgc3VjaCBhcyBnZXR0ZXIsIHNldHRlciBhbmQgbm9uLWVudW1yYWJsZSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkodmFsdWUpIHtcbiAgICB0aGlzLnVzZVN0cmljdFNoYWxsb3dDb3B5XyA9IHZhbHVlO1xuICB9XG4gIGFwcGx5UGF0Y2hlcyhiYXNlLCBwYXRjaGVzKSB7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gcGF0Y2hlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuICAgICAgaWYgKHBhdGNoLnBhdGgubGVuZ3RoID09PSAwICYmIHBhdGNoLm9wID09PSBcInJlcGxhY2VcIikge1xuICAgICAgICBiYXNlID0gcGF0Y2gudmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBwYXRjaGVzID0gcGF0Y2hlcy5zbGljZShpICsgMSk7XG4gICAgfVxuICAgIGNvbnN0IGFwcGx5UGF0Y2hlc0ltcGwgPSBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmFwcGx5UGF0Y2hlc187XG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpIHtcbiAgICAgIHJldHVybiBhcHBseVBhdGNoZXNJbXBsKGJhc2UsIHBhdGNoZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9kdWNlKFxuICAgICAgYmFzZSxcbiAgICAgIChkcmFmdCkgPT4gYXBwbHlQYXRjaGVzSW1wbChkcmFmdCwgcGF0Y2hlcylcbiAgICApO1xuICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlUHJveHkodmFsdWUsIHBhcmVudCkge1xuICBjb25zdCBkcmFmdCA9IGlzTWFwKHZhbHVlKSA/IGdldFBsdWdpbihcIk1hcFNldFwiKS5wcm94eU1hcF8odmFsdWUsIHBhcmVudCkgOiBpc1NldCh2YWx1ZSkgPyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlTZXRfKHZhbHVlLCBwYXJlbnQpIDogY3JlYXRlUHJveHlQcm94eSh2YWx1ZSwgcGFyZW50KTtcbiAgY29uc3Qgc2NvcGUgPSBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCk7XG4gIHNjb3BlLmRyYWZ0c18ucHVzaChkcmFmdCk7XG4gIHJldHVybiBkcmFmdDtcbn1cblxuLy8gc3JjL2NvcmUvY3VycmVudC50c1xuZnVuY3Rpb24gY3VycmVudCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnQodmFsdWUpKVxuICAgIGRpZSgxMCwgdmFsdWUpO1xuICByZXR1cm4gY3VycmVudEltcGwodmFsdWUpO1xufVxuZnVuY3Rpb24gY3VycmVudEltcGwodmFsdWUpIHtcbiAgaWYgKCFpc0RyYWZ0YWJsZSh2YWx1ZSkgfHwgaXNGcm96ZW4odmFsdWUpKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgY29uc3Qgc3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV07XG4gIGxldCBjb3B5O1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLm1vZGlmaWVkXylcbiAgICAgIHJldHVybiBzdGF0ZS5iYXNlXztcbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gdHJ1ZTtcbiAgICBjb3B5ID0gc2hhbGxvd0NvcHkodmFsdWUsIHN0YXRlLnNjb3BlXy5pbW1lcl8udXNlU3RyaWN0U2hhbGxvd0NvcHlfKTtcbiAgfSBlbHNlIHtcbiAgICBjb3B5ID0gc2hhbGxvd0NvcHkodmFsdWUsIHRydWUpO1xuICB9XG4gIGVhY2goY29weSwgKGtleSwgY2hpbGRWYWx1ZSkgPT4ge1xuICAgIHNldChjb3B5LCBrZXksIGN1cnJlbnRJbXBsKGNoaWxkVmFsdWUpKTtcbiAgfSk7XG4gIGlmIChzdGF0ZSkge1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gY29weTtcbn1cblxuLy8gc3JjL3BsdWdpbnMvcGF0Y2hlcy50c1xuZnVuY3Rpb24gZW5hYmxlUGF0Y2hlcygpIHtcbiAgY29uc3QgZXJyb3JPZmZzZXQgPSAxNjtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGVycm9ycy5wdXNoKFxuICAgICAgJ1NldHMgY2Fubm90IGhhdmUgXCJyZXBsYWNlXCIgcGF0Y2hlcy4nLFxuICAgICAgZnVuY3Rpb24ob3ApIHtcbiAgICAgICAgcmV0dXJuIFwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIiArIG9wO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIgKyBwYXRoO1xuICAgICAgfSxcbiAgICAgIFwiUGF0Y2hpbmcgcmVzZXJ2ZWQgYXR0cmlidXRlcyBsaWtlIF9fcHJvdG9fXywgcHJvdG90eXBlIGFuZCBjb25zdHJ1Y3RvciBpcyBub3QgYWxsb3dlZFwiXG4gICAgKTtcbiAgfVxuICBjb25zdCBSRVBMQUNFID0gXCJyZXBsYWNlXCI7XG4gIGNvbnN0IEFERCA9IFwiYWRkXCI7XG4gIGNvbnN0IFJFTU9WRSA9IFwicmVtb3ZlXCI7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGF0Y2hlc18oc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHN3aXRjaCAoc3RhdGUudHlwZV8pIHtcbiAgICAgIGNhc2UgMCAvKiBPYmplY3QgKi86XG4gICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkKFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGJhc2VQYXRoLFxuICAgICAgICAgIHBhdGNoZXMsXG4gICAgICAgICAgaW52ZXJzZVBhdGNoZXNcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgMSAvKiBBcnJheSAqLzpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlQXJyYXlQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpO1xuICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlU2V0UGF0Y2hlcyhcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICBwYXRjaGVzLFxuICAgICAgICAgIGludmVyc2VQYXRjaGVzXG4gICAgICAgICk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlQXJyYXlQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBsZXQgeyBiYXNlXywgYXNzaWduZWRfIH0gPSBzdGF0ZTtcbiAgICBsZXQgY29weV8gPSBzdGF0ZS5jb3B5XztcbiAgICBpZiAoY29weV8ubGVuZ3RoIDwgYmFzZV8ubGVuZ3RoKSB7XG4gICAgICA7XG4gICAgICBbYmFzZV8sIGNvcHlfXSA9IFtjb3B5XywgYmFzZV9dO1xuICAgICAgW3BhdGNoZXMsIGludmVyc2VQYXRjaGVzXSA9IFtpbnZlcnNlUGF0Y2hlcywgcGF0Y2hlc107XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZV8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhc3NpZ25lZF9baV0gJiYgY29weV9baV0gIT09IGJhc2VfW2ldKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVQTEFDRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIC8vIE5lZWQgdG8gbWF5YmUgY2xvbmUgaXQsIGFzIGl0IGNhbiBpbiBmYWN0IGJlIHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAgIC8vIGR1ZSB0byB0aGUgYmFzZS9jb3B5IGludmVyc2lvbiBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvblxuICAgICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChjb3B5X1tpXSlcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGJhc2VfW2ldKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IGJhc2VfLmxlbmd0aDsgaSA8IGNvcHlfLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogQURELFxuICAgICAgICBwYXRoLFxuICAgICAgICAvLyBOZWVkIHRvIG1heWJlIGNsb25lIGl0LCBhcyBpdCBjYW4gaW4gZmFjdCBiZSB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgLy8gZHVlIHRvIHRoZSBiYXNlL2NvcHkgaW52ZXJzaW9uIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uXG4gICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChjb3B5X1tpXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gY29weV8ubGVuZ3RoIC0gMTsgYmFzZV8ubGVuZ3RoIDw9IGk7IC0taSkge1xuICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgIHBhdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIGNvbnN0IHsgYmFzZV8sIGNvcHlfIH0gPSBzdGF0ZTtcbiAgICBlYWNoKHN0YXRlLmFzc2lnbmVkXywgKGtleSwgYXNzaWduZWRWYWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ1ZhbHVlID0gZ2V0KGJhc2VfLCBrZXkpO1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXQoY29weV8sIGtleSk7XG4gICAgICBjb25zdCBvcCA9ICFhc3NpZ25lZFZhbHVlID8gUkVNT1ZFIDogaGFzKGJhc2VfLCBrZXkpID8gUkVQTEFDRSA6IEFERDtcbiAgICAgIGlmIChvcmlnVmFsdWUgPT09IHZhbHVlICYmIG9wID09PSBSRVBMQUNFKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KGtleSk7XG4gICAgICBwYXRjaGVzLnB1c2gob3AgPT09IFJFTU9WRSA/IHsgb3AsIHBhdGggfSA6IHsgb3AsIHBhdGgsIHZhbHVlIH0pO1xuICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaChcbiAgICAgICAgb3AgPT09IEFERCA/IHsgb3A6IFJFTU9WRSwgcGF0aCB9IDogb3AgPT09IFJFTU9WRSA/IHsgb3A6IEFERCwgcGF0aCwgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9yaWdWYWx1ZSkgfSA6IHsgb3A6IFJFUExBQ0UsIHBhdGgsIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvcmlnVmFsdWUpIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVTZXRQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBsZXQgeyBiYXNlXywgY29weV8gfSA9IHN0YXRlO1xuICAgIGxldCBpID0gMDtcbiAgICBiYXNlXy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCFjb3B5Xy5oYXModmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuICAgICAgICAgIG9wOiBBREQsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgICBpID0gMDtcbiAgICBjb3B5Xy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCFiYXNlXy5oYXModmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogQURELFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuICAgICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oYmFzZVZhbHVlLCByZXBsYWNlbWVudCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICBwYXRoOiBbXSxcbiAgICAgIHZhbHVlOiByZXBsYWNlbWVudCA9PT0gTk9USElORyA/IHZvaWQgMCA6IHJlcGxhY2VtZW50XG4gICAgfSk7XG4gICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICBvcDogUkVQTEFDRSxcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgdmFsdWU6IGJhc2VWYWx1ZVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFwcGx5UGF0Y2hlc18oZHJhZnQsIHBhdGNoZXMpIHtcbiAgICBwYXRjaGVzLmZvckVhY2goKHBhdGNoKSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGgsIG9wIH0gPSBwYXRjaDtcbiAgICAgIGxldCBiYXNlID0gZHJhZnQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudFR5cGUgPSBnZXRBcmNodHlwZShiYXNlKTtcbiAgICAgICAgbGV0IHAgPSBwYXRoW2ldO1xuICAgICAgICBpZiAodHlwZW9mIHAgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHAgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBwID0gXCJcIiArIHA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChwYXJlbnRUeXBlID09PSAwIC8qIE9iamVjdCAqLyB8fCBwYXJlbnRUeXBlID09PSAxIC8qIEFycmF5ICovKSAmJiAocCA9PT0gXCJfX3Byb3RvX19cIiB8fCBwID09PSBcImNvbnN0cnVjdG9yXCIpKVxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDMpO1xuICAgICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIiAmJiBwID09PSBcInByb3RvdHlwZVwiKVxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDMpO1xuICAgICAgICBiYXNlID0gZ2V0KGJhc2UsIHApO1xuICAgICAgICBpZiAodHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMiwgcGF0aC5qb2luKFwiL1wiKSk7XG4gICAgICB9XG4gICAgICBjb25zdCB0eXBlID0gZ2V0QXJjaHR5cGUoYmFzZSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRlZXBDbG9uZVBhdGNoVmFsdWUocGF0Y2gudmFsdWUpO1xuICAgICAgY29uc3Qga2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICBjYXNlIFJFUExBQ0U6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Vba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBBREQ6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDEgLyogQXJyYXkgKi86XG4gICAgICAgICAgICAgIHJldHVybiBrZXkgPT09IFwiLVwiID8gYmFzZS5wdXNoKHZhbHVlKSA6IGJhc2Uuc3BsaWNlKGtleSwgMCwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuYWRkKHZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgUkVNT1ZFOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxIC8qIEFycmF5ICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuZGVsZXRlKHBhdGNoLnZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBkZWxldGUgYmFzZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAxLCBvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRyYWZ0O1xuICB9XG4gIGZ1bmN0aW9uIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKSB7XG4gICAgaWYgKCFpc0RyYWZ0YWJsZShvYmopKVxuICAgICAgcmV0dXJuIG9iajtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKVxuICAgICAgcmV0dXJuIG9iai5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSk7XG4gICAgaWYgKGlzTWFwKG9iaikpXG4gICAgICByZXR1cm4gbmV3IE1hcChcbiAgICAgICAgQXJyYXkuZnJvbShvYmouZW50cmllcygpKS5tYXAoKFtrLCB2XSkgPT4gW2ssIGRlZXBDbG9uZVBhdGNoVmFsdWUodildKVxuICAgICAgKTtcbiAgICBpZiAoaXNTZXQob2JqKSlcbiAgICAgIHJldHVybiBuZXcgU2V0KEFycmF5LmZyb20ob2JqKS5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSkpO1xuICAgIGNvbnN0IGNsb25lZCA9IE9iamVjdC5jcmVhdGUoZ2V0UHJvdG90eXBlT2Yob2JqKSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKVxuICAgICAgY2xvbmVkW2tleV0gPSBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9ialtrZXldKTtcbiAgICBpZiAoaGFzKG9iaiwgRFJBRlRBQkxFKSlcbiAgICAgIGNsb25lZFtEUkFGVEFCTEVdID0gb2JqW0RSQUZUQUJMRV07XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuICBmdW5jdGlvbiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvYmopIHtcbiAgICBpZiAoaXNEcmFmdChvYmopKSB7XG4gICAgICByZXR1cm4gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmopO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIG9iajtcbiAgfVxuICBsb2FkUGx1Z2luKFwiUGF0Y2hlc1wiLCB7XG4gICAgYXBwbHlQYXRjaGVzXyxcbiAgICBnZW5lcmF0ZVBhdGNoZXNfLFxuICAgIGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzX1xuICB9KTtcbn1cblxuLy8gc3JjL3BsdWdpbnMvbWFwc2V0LnRzXG5mdW5jdGlvbiBlbmFibGVNYXBTZXQoKSB7XG4gIGNsYXNzIERyYWZ0TWFwIGV4dGVuZHMgTWFwIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuICAgICAgICB0eXBlXzogMiAvKiBNYXAgKi8sXG4gICAgICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAgICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgICAgICBjb3B5Xzogdm9pZCAwLFxuICAgICAgICBhc3NpZ25lZF86IHZvaWQgMCxcbiAgICAgICAgYmFzZV86IHRhcmdldCxcbiAgICAgICAgZHJhZnRfOiB0aGlzLFxuICAgICAgICBpc01hbnVhbF86IGZhbHNlLFxuICAgICAgICByZXZva2VkXzogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZTtcbiAgICB9XG4gICAgaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuaGFzKGtleSk7XG4gICAgfVxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmICghbGF0ZXN0KHN0YXRlKS5oYXMoa2V5KSB8fCBsYXRlc3Qoc3RhdGUpLmdldChrZXkpICE9PSB2YWx1ZSkge1xuICAgICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIHRydWUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWxldGUoa2V5KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICBpZiAoc3RhdGUuYmFzZV8uaGFzKGtleSkpIHtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5kZWxldGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmNvcHlfLmRlbGV0ZShrZXkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAobGF0ZXN0KHN0YXRlKS5zaXplKSB7XG4gICAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgICBlYWNoKHN0YXRlLmJhc2VfLCAoa2V5KSA9PiB7XG4gICAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvckVhY2goY2IsIHRoaXNBcmcpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBsYXRlc3Qoc3RhdGUpLmZvckVhY2goKF92YWx1ZSwga2V5LCBfbWFwKSA9PiB7XG4gICAgICAgIGNiLmNhbGwodGhpc0FyZywgdGhpcy5nZXQoa2V5KSwga2V5LCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gbGF0ZXN0KHN0YXRlKS5nZXQoa2V5KTtcbiAgICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZS5iYXNlXy5nZXQoa2V5KSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICBjb25zdCBkcmFmdCA9IGNyZWF0ZVByb3h5KHZhbHVlLCBzdGF0ZSk7XG4gICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICBzdGF0ZS5jb3B5Xy5zZXQoa2V5LCBkcmFmdCk7XG4gICAgICByZXR1cm4gZHJhZnQ7XG4gICAgfVxuICAgIGtleXMoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5rZXlzKCk7XG4gICAgfVxuICAgIHZhbHVlcygpIHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpcy5rZXlzKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4gdGhpcy52YWx1ZXMoKSxcbiAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHIgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHIuZG9uZSlcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoci52YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBlbnRyaWVzKCkge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLmtleXMoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB0aGlzLmVudHJpZXMoKSxcbiAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHIgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHIuZG9uZSlcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoci52YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IFtyLnZhbHVlLCB2YWx1ZV1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBbKERSQUZUX1NUQVRFLCBTeW1ib2wuaXRlcmF0b3IpXSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHJveHlNYXBfKHRhcmdldCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFmdE1hcCh0YXJnZXQsIHBhcmVudCk7XG4gIH1cbiAgZnVuY3Rpb24gcHJlcGFyZU1hcENvcHkoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICBzdGF0ZS5hc3NpZ25lZF8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgc3RhdGUuY29weV8gPSBuZXcgTWFwKHN0YXRlLmJhc2VfKTtcbiAgICB9XG4gIH1cbiAgY2xhc3MgRHJhZnRTZXQgZXh0ZW5kcyBTZXQge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpc1tEUkFGVF9TVEFURV0gPSB7XG4gICAgICAgIHR5cGVfOiAzIC8qIFNldCAqLyxcbiAgICAgICAgcGFyZW50XzogcGFyZW50LFxuICAgICAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAgICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAgICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgICAgIGNvcHlfOiB2b2lkIDAsXG4gICAgICAgIGJhc2VfOiB0YXJnZXQsXG4gICAgICAgIGRyYWZ0XzogdGhpcyxcbiAgICAgICAgZHJhZnRzXzogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcbiAgICAgICAgcmV2b2tlZF86IGZhbHNlLFxuICAgICAgICBpc01hbnVhbF86IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLnNpemU7XG4gICAgfVxuICAgIGhhcyh2YWx1ZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5iYXNlXy5oYXModmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLmNvcHlfLmhhcyh2YWx1ZSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKSAmJiBzdGF0ZS5jb3B5Xy5oYXMoc3RhdGUuZHJhZnRzXy5nZXQodmFsdWUpKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuY29weV8uYWRkKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWxldGUodmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLmRlbGV0ZSh2YWx1ZSkgfHwgKHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKSA/IHN0YXRlLmNvcHlfLmRlbGV0ZShzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpIDogKFxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBmYWxzZVxuICAgICAgKSk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAobGF0ZXN0KHN0YXRlKS5zaXplKSB7XG4gICAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5Xy52YWx1ZXMoKTtcbiAgICB9XG4gICAgZW50cmllcygpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLmVudHJpZXMoKTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH1cbiAgICBbKERSQUZUX1NUQVRFLCBTeW1ib2wuaXRlcmF0b3IpXSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH1cbiAgICBmb3JFYWNoKGNiLCB0aGlzQXJnKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXMudmFsdWVzKCk7XG4gICAgICBsZXQgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgICAgICBjYi5jYWxsKHRoaXNBcmcsIHJlc3VsdC52YWx1ZSwgcmVzdWx0LnZhbHVlLCB0aGlzKTtcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwcm94eVNldF8odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWZ0U2V0KHRhcmdldCwgcGFyZW50KTtcbiAgfVxuICBmdW5jdGlvbiBwcmVwYXJlU2V0Q29weShzdGF0ZSkge1xuICAgIGlmICghc3RhdGUuY29weV8pIHtcbiAgICAgIHN0YXRlLmNvcHlfID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgIHN0YXRlLmJhc2VfLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICBjb25zdCBkcmFmdCA9IGNyZWF0ZVByb3h5KHZhbHVlLCBzdGF0ZSk7XG4gICAgICAgICAgc3RhdGUuZHJhZnRzXy5zZXQodmFsdWUsIGRyYWZ0KTtcbiAgICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQoZHJhZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLmNvcHlfLmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhc3NlcnRVbnJldm9rZWQoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUucmV2b2tlZF8pXG4gICAgICBkaWUoMywgSlNPTi5zdHJpbmdpZnkobGF0ZXN0KHN0YXRlKSkpO1xuICB9XG4gIGxvYWRQbHVnaW4oXCJNYXBTZXRcIiwgeyBwcm94eU1hcF8sIHByb3h5U2V0XyB9KTtcbn1cblxuLy8gc3JjL2ltbWVyLnRzXG52YXIgaW1tZXIgPSBuZXcgSW1tZXIyKCk7XG52YXIgcHJvZHVjZSA9IGltbWVyLnByb2R1Y2U7XG52YXIgcHJvZHVjZVdpdGhQYXRjaGVzID0gaW1tZXIucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQoXG4gIGltbWVyXG4pO1xudmFyIHNldEF1dG9GcmVlemUgPSBpbW1lci5zZXRBdXRvRnJlZXplLmJpbmQoaW1tZXIpO1xudmFyIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5ID0gaW1tZXIuc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkuYmluZChpbW1lcik7XG52YXIgYXBwbHlQYXRjaGVzID0gaW1tZXIuYXBwbHlQYXRjaGVzLmJpbmQoaW1tZXIpO1xudmFyIGNyZWF0ZURyYWZ0ID0gaW1tZXIuY3JlYXRlRHJhZnQuYmluZChpbW1lcik7XG52YXIgZmluaXNoRHJhZnQgPSBpbW1lci5maW5pc2hEcmFmdC5iaW5kKGltbWVyKTtcbmZ1bmN0aW9uIGNhc3REcmFmdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjYXN0SW1tdXRhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbi8vIEFubm90YXRlIHRoZSBDb21tb25KUyBleHBvcnQgbmFtZXMgZm9yIEVTTSBpbXBvcnQgaW4gbm9kZTpcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBJbW1lcixcbiAgYXBwbHlQYXRjaGVzLFxuICBjYXN0RHJhZnQsXG4gIGNhc3RJbW11dGFibGUsXG4gIGNyZWF0ZURyYWZ0LFxuICBjdXJyZW50LFxuICBlbmFibGVNYXBTZXQsXG4gIGVuYWJsZVBhdGNoZXMsXG4gIGZpbmlzaERyYWZ0LFxuICBmcmVlemUsXG4gIGltbWVyYWJsZSxcbiAgaXNEcmFmdCxcbiAgaXNEcmFmdGFibGUsXG4gIG5vdGhpbmcsXG4gIG9yaWdpbmFsLFxuICBwcm9kdWNlLFxuICBwcm9kdWNlV2l0aFBhdGNoZXMsXG4gIHNldEF1dG9GcmVlemUsXG4gIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLmNqcy5kZXZlbG9wbWVudC5qcy5tYXAiLCJcbid1c2Ugc3RyaWN0J1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW1tZXIuY2pzLnByb2R1Y3Rpb24uanMnKVxufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ltbWVyLmNqcy5kZXZlbG9wbWVudC5qcycpXG59IiwidmFyIGU9cmVxdWlyZShcImltbWVyXCIpLHI9cmVxdWlyZShcInJlYWN0XCIpO2V4cG9ydHMudXNlSW1tZXI9ZnVuY3Rpb24odSl7dmFyIG49ci51c2VTdGF0ZShmdW5jdGlvbigpe3JldHVybiBlLmZyZWV6ZShcImZ1bmN0aW9uXCI9PXR5cGVvZiB1P3UoKTp1LCEwKX0pLHQ9blsxXTtyZXR1cm5bblswXSxyLnVzZUNhbGxiYWNrKGZ1bmN0aW9uKHIpe3QoXCJmdW5jdGlvblwiPT10eXBlb2Ygcj9lLnByb2R1Y2Uocik6ZS5mcmVlemUocikpfSxbXSldfSxleHBvcnRzLnVzZUltbWVyUmVkdWNlcj1mdW5jdGlvbih1LG4sdCl7dmFyIG89ci51c2VNZW1vKGZ1bmN0aW9uKCl7cmV0dXJuIGUucHJvZHVjZSh1KX0sW3VdKTtyZXR1cm4gci51c2VSZWR1Y2VyKG8sbix0KX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW1tZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudmVyc2lvbiA9IGV4cG9ydHMudmFsaWRhdGUgPSBleHBvcnRzLnY3ID0gZXhwb3J0cy52NlRvVjEgPSBleHBvcnRzLnY2ID0gZXhwb3J0cy52NSA9IGV4cG9ydHMudjQgPSBleHBvcnRzLnYzID0gZXhwb3J0cy52MVRvVjYgPSBleHBvcnRzLnYxID0gZXhwb3J0cy5zdHJpbmdpZnkgPSBleHBvcnRzLnBhcnNlID0gZXhwb3J0cy5OSUwgPSBleHBvcnRzLk1BWCA9IHZvaWQgMDtcbnZhciBtYXhfanNfMSA9IHJlcXVpcmUoXCIuL21heC5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1BWFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF4X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBuaWxfanNfMSA9IHJlcXVpcmUoXCIuL25pbC5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5JTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmlsX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGFyc2VfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3RyaW5naWZ5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdHJpbmdpZnlfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHYxX2pzXzEgPSByZXF1aXJlKFwiLi92MS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjFUb1Y2X2pzXzEgPSByZXF1aXJlKFwiLi92MVRvVjYuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVRvVjZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYxVG9WNl9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjNfanNfMSA9IHJlcXVpcmUoXCIuL3YzLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2NF9qc18xID0gcmVxdWlyZShcIi4vdjQuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjRfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY1X2pzXzEgPSByZXF1aXJlKFwiLi92NS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY1XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2NV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjZfanNfMSA9IHJlcXVpcmUoXCIuL3Y2LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY2X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2NlRvVjFfanNfMSA9IHJlcXVpcmUoXCIuL3Y2VG9WMS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2VG9WMVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjZUb1YxX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2N19qc18xID0gcmVxdWlyZShcIi4vdjcuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2N1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjdfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZhbGlkYXRlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2YWxpZGF0ZV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdmVyc2lvbl9qc18xID0gcmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZlcnNpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZlcnNpb25fanNfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSAnZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gICAgY29uc3Qgd29yZHMgPSB1aW50OFRvVWludDMyKGJ5dGVzKTtcbiAgICBjb25zdCBtZDVCeXRlcyA9IHdvcmRzVG9NZDUod29yZHMsIGJ5dGVzLmxlbmd0aCAqIDgpO1xuICAgIHJldHVybiB1aW50MzJUb1VpbnQ4KG1kNUJ5dGVzKTtcbn1cbmZ1bmN0aW9uIHVpbnQzMlRvVWludDgoaW5wdXQpIHtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGlucHV0Lmxlbmd0aCAqIDQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoICogNDsgaSsrKSB7XG4gICAgICAgIGJ5dGVzW2ldID0gKGlucHV0W2kgPj4gMl0gPj4+ICgoaSAlIDQpICogOCkpICYgMHhmZjtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufVxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICAgIHJldHVybiAoKChpbnB1dExlbmd0aDggKyA2NCkgPj4+IDkpIDw8IDQpICsgMTQgKyAxO1xufVxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgICBjb25zdCB4cGFkID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW4pKS5maWxsKDApO1xuICAgIHhwYWQuc2V0KHgpO1xuICAgIHhwYWRbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gICAgeHBhZFt4cGFkLmxlbmd0aCAtIDFdID0gbGVuO1xuICAgIHggPSB4cGFkO1xuICAgIGxldCBhID0gMTczMjU4NDE5MztcbiAgICBsZXQgYiA9IC0yNzE3MzM4Nzk7XG4gICAgbGV0IGMgPSAtMTczMjU4NDE5NDtcbiAgICBsZXQgZCA9IDI3MTczMzg3ODtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgICAgIGNvbnN0IG9sZGEgPSBhO1xuICAgICAgICBjb25zdCBvbGRiID0gYjtcbiAgICAgICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgICAgIGNvbnN0IG9sZGQgPSBkO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgICAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICAgICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICAgIH1cbiAgICByZXR1cm4gVWludDMyQXJyYXkub2YoYSwgYiwgYywgZCk7XG59XG5mdW5jdGlvbiB1aW50OFRvVWludDMyKGlucHV0KSB7XG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KCk7XG4gICAgfVxuICAgIGNvbnN0IG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgoaW5wdXQubGVuZ3RoICogOCkpLmZpbGwoMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBvdXRwdXRbaSA+PiAyXSB8PSAoaW5wdXRbaV0gJiAweGZmKSA8PCAoKGkgJSA0KSAqIDgpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gICAgY29uc3QgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICAgIGNvbnN0IG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAgIHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweGZmZmYpO1xufVxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICAgIHJldHVybiAobnVtIDw8IGNudCkgfCAobnVtID4+PiAoMzIgLSBjbnQpKTtcbn1cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbigoYiAmIGMpIHwgKH5iICYgZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oKGIgJiBkKSB8IChjICYgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWQ1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0cy5kZWZhdWx0ID0geyByYW5kb21VVUlEIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gICAgaWYgKCEoMCwgdmFsaWRhdGVfanNfMS5kZWZhdWx0KSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICAgIH1cbiAgICBsZXQgdjtcbiAgICByZXR1cm4gVWludDhBcnJheS5vZigodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0LCAodiA+Pj4gMTYpICYgMHhmZiwgKHYgPj4+IDgpICYgMHhmZiwgdiAmIDB4ZmYsICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDgsIHYgJiAweGZmLCAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gOCwgdiAmIDB4ZmYsICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4LCB2ICYgMHhmZiwgKCh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCkgJiAweGZmLCAodiAvIDB4MTAwMDAwMDAwKSAmIDB4ZmYsICh2ID4+PiAyNCkgJiAweGZmLCAodiA+Pj4gMTYpICYgMHhmZiwgKHYgPj4+IDgpICYgMHhmZiwgdiAmIDB4ZmYpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcGFyc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBybmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICAgIHN3aXRjaCAocykge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gKHggJiB5KSBeICh+eCAmIHopO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4geCBeIHkgXiB6O1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gKHggJiB5KSBeICh4ICYgeikgXiAoeSAmIHopO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4geCBeIHkgXiB6O1xuICAgIH1cbn1cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICAgIHJldHVybiAoeCA8PCBuKSB8ICh4ID4+PiAoMzIgLSBuKSk7XG59XG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gICAgY29uc3QgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuICAgIGNvbnN0IG5ld0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMubGVuZ3RoICsgMSk7XG4gICAgbmV3Qnl0ZXMuc2V0KGJ5dGVzKTtcbiAgICBuZXdCeXRlc1tieXRlcy5sZW5ndGhdID0gMHg4MDtcbiAgICBieXRlcyA9IG5ld0J5dGVzO1xuICAgIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgICBjb25zdCBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gICAgY29uc3QgTSA9IG5ldyBBcnJheShOKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgICAgICBjb25zdCBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgICAgICAgIGFycltqXSA9XG4gICAgICAgICAgICAgICAgKGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCkgfFxuICAgICAgICAgICAgICAgICAgICAoYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNikgfFxuICAgICAgICAgICAgICAgICAgICAoYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4KSB8XG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgICAgIH1cbiAgICAgICAgTVtpXSA9IGFycjtcbiAgICB9XG4gICAgTVtOIC0gMV1bMTRdID0gKChieXRlcy5sZW5ndGggLSAxKSAqIDgpIC8gTWF0aC5wb3coMiwgMzIpO1xuICAgIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgICBNW04gLSAxXVsxNV0gPSAoKGJ5dGVzLmxlbmd0aCAtIDEpICogOCkgJiAweGZmZmZmZmZmO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgICAgIGNvbnN0IFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgICAgICAgIFdbdF0gPSBNW2ldW3RdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHQgPSAxNjsgdCA8IDgwOyArK3QpIHtcbiAgICAgICAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhID0gSFswXTtcbiAgICAgICAgbGV0IGIgPSBIWzFdO1xuICAgICAgICBsZXQgYyA9IEhbMl07XG4gICAgICAgIGxldCBkID0gSFszXTtcbiAgICAgICAgbGV0IGUgPSBIWzRdO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDgwOyArK3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKHQgLyAyMCk7XG4gICAgICAgICAgICBjb25zdCBUID0gKFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW3RdKSA+Pj4gMDtcbiAgICAgICAgICAgIGUgPSBkO1xuICAgICAgICAgICAgZCA9IGM7XG4gICAgICAgICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICAgICAgICBiID0gYTtcbiAgICAgICAgICAgIGEgPSBUO1xuICAgICAgICB9XG4gICAgICAgIEhbMF0gPSAoSFswXSArIGEpID4+PiAwO1xuICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSA+Pj4gMDtcbiAgICAgICAgSFsyXSA9IChIWzJdICsgYykgPj4+IDA7XG4gICAgICAgIEhbM10gPSAoSFszXSArIGQpID4+PiAwO1xuICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSA+Pj4gMDtcbiAgICB9XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoSFswXSA+PiAyNCwgSFswXSA+PiAxNiwgSFswXSA+PiA4LCBIWzBdLCBIWzFdID4+IDI0LCBIWzFdID4+IDE2LCBIWzFdID4+IDgsIEhbMV0sIEhbMl0gPj4gMjQsIEhbMl0gPj4gMTYsIEhbMl0gPj4gOCwgSFsyXSwgSFszXSA+PiAyNCwgSFszXSA+PiAxNiwgSFszXSA+PiA4LCBIWzNdLCBIWzRdID4+IDI0LCBIWzRdID4+IDE2LCBIWzRdID4+IDgsIEhbNF0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gc2hhMTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB2b2lkIDA7XG5jb25zdCB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoISgwLCB2YWxpZGF0ZV9qc18xLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5naWZ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZVYxU3RhdGUgPSB2b2lkIDA7XG5jb25zdCBybmdfanNfMSA9IHJlcXVpcmUoXCIuL3JuZy5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgX3N0YXRlID0ge307XG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGxldCBieXRlcztcbiAgICBjb25zdCBpc1Y2ID0gb3B0aW9ucz8uX3Y2ID8/IGZhbHNlO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zS2V5cy5sZW5ndGggPT09IDEgJiYgb3B0aW9uc0tleXNbMF0gPT09ICdfdjYnKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGJ5dGVzID0gdjFCeXRlcyhvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCksIG9wdGlvbnMubXNlY3MsIG9wdGlvbnMubnNlY3MsIG9wdGlvbnMuY2xvY2tzZXEsIG9wdGlvbnMubm9kZSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kcyA9ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpO1xuICAgICAgICB1cGRhdGVWMVN0YXRlKF9zdGF0ZSwgbm93LCBybmRzKTtcbiAgICAgICAgYnl0ZXMgPSB2MUJ5dGVzKHJuZHMsIF9zdGF0ZS5tc2VjcywgX3N0YXRlLm5zZWNzLCBpc1Y2ID8gdW5kZWZpbmVkIDogX3N0YXRlLmNsb2Nrc2VxLCBpc1Y2ID8gdW5kZWZpbmVkIDogX3N0YXRlLm5vZGUsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZiA/PyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5mdW5jdGlvbiB1cGRhdGVWMVN0YXRlKHN0YXRlLCBub3csIHJuZHMpIHtcbiAgICBzdGF0ZS5tc2VjcyA/Pz0gLUluZmluaXR5O1xuICAgIHN0YXRlLm5zZWNzID8/PSAwO1xuICAgIGlmIChub3cgPT09IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLm5zZWNzKys7XG4gICAgICAgIGlmIChzdGF0ZS5uc2VjcyA+PSAxMDAwMCkge1xuICAgICAgICAgICAgc3RhdGUubm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN0YXRlLm5zZWNzID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChub3cgPiBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5uc2VjcyA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vdyA8IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLm5vZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICghc3RhdGUubm9kZSkge1xuICAgICAgICBzdGF0ZS5ub2RlID0gcm5kcy5zbGljZSgxMCwgMTYpO1xuICAgICAgICBzdGF0ZS5ub2RlWzBdIHw9IDB4MDE7XG4gICAgICAgIHN0YXRlLmNsb2Nrc2VxID0gKChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XSkgJiAweDNmZmY7XG4gICAgfVxuICAgIHN0YXRlLm1zZWNzID0gbm93O1xuICAgIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydHMudXBkYXRlVjFTdGF0ZSA9IHVwZGF0ZVYxU3RhdGU7XG5mdW5jdGlvbiB2MUJ5dGVzKHJuZHMsIG1zZWNzLCBuc2VjcywgY2xvY2tzZXEsIG5vZGUsIGJ1Ziwgb2Zmc2V0ID0gMCkge1xuICAgIGlmIChybmRzLmxlbmd0aCA8IDE2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZG9tIGJ5dGVzIGxlbmd0aCBtdXN0IGJlID49IDE2Jyk7XG4gICAgfVxuICAgIGlmICghYnVmKSB7XG4gICAgICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDE2ID4gYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFVVSUQgYnl0ZSByYW5nZSAke29mZnNldH06JHtvZmZzZXQgKyAxNX0gaXMgb3V0IG9mIGJ1ZmZlciBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtc2VjcyA/Pz0gRGF0ZS5ub3coKTtcbiAgICBuc2VjcyA/Pz0gMDtcbiAgICBjbG9ja3NlcSA/Pz0gKChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XSkgJiAweDNmZmY7XG4gICAgbm9kZSA/Pz0gcm5kcy5zbGljZSgxMCwgMTYpO1xuICAgIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuICAgIGNvbnN0IHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodGwgPj4+IDI0KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bCA+Pj4gMTYpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRsID4+PiA4KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IHRsICYgMHhmZjtcbiAgICBjb25zdCB0bWggPSAoKG1zZWNzIC8gMHgxMDAwMDAwMDApICogMTAwMDApICYgMHhmZmZmZmZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodG1oID4+PiA4KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IHRtaCAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICgodG1oID4+PiAyNCkgJiAweGYpIHwgMHgxMDtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRtaCA+Pj4gMTYpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKGNsb2Nrc2VxID4+PiA4KSB8IDB4ODA7XG4gICAgYnVmW29mZnNldCsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcbiAgICBmb3IgKGxldCBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgICAgICBidWZbb2Zmc2V0KytdID0gbm9kZVtuXTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHYxO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHYxVG9WNih1dWlkKSB7XG4gICAgY29uc3QgdjFCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgICBjb25zdCB2NkJ5dGVzID0gX3YxVG9WNih2MUJ5dGVzKTtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkodjZCeXRlcykgOiB2NkJ5dGVzO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjFUb1Y2O1xuZnVuY3Rpb24gX3YxVG9WNih2MUJ5dGVzKSB7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKCh2MUJ5dGVzWzZdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbN10gPj4gNCkgJiAweDBmKSwgKCh2MUJ5dGVzWzddICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbNF0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzRdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbNV0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzVdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMF0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzBdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMV0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzFdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMl0gJiAweGYwKSA+PiA0KSwgMHg2MCB8ICh2MUJ5dGVzWzJdICYgMHgwZiksIHYxQnl0ZXNbM10sIHYxQnl0ZXNbOF0sIHYxQnl0ZXNbOV0sIHYxQnl0ZXNbMTBdLCB2MUJ5dGVzWzExXSwgdjFCeXRlc1sxMl0sIHYxQnl0ZXNbMTNdLCB2MUJ5dGVzWzE0XSwgdjFCeXRlc1sxNV0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuY29uc3QgbWQ1X2pzXzEgPSByZXF1aXJlKFwiLi9tZDUuanNcIik7XG5jb25zdCB2MzVfanNfMSA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbnZhciB2MzVfanNfMiA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkROU1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuRE5TOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVVJMXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5VUkw7IH0gfSk7XG5mdW5jdGlvbiB2Myh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHJldHVybiAoMCwgdjM1X2pzXzEuZGVmYXVsdCkoMHgzMCwgbWQ1X2pzXzEuZGVmYXVsdCwgdmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpO1xufVxudjMuRE5TID0gdjM1X2pzXzEuRE5TO1xudjMuVVJMID0gdjM1X2pzXzEuVVJMO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSBleHBvcnRzLnN0cmluZ1RvQnl0ZXMgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gICAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc3RyLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgYnl0ZXNbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufVxuZXhwb3J0cy5zdHJpbmdUb0J5dGVzID0gc3RyaW5nVG9CeXRlcztcbmV4cG9ydHMuRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLlVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZnVuY3Rpb24gdjM1KHZlcnNpb24sIGhhc2gsIHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgY29uc3QgdmFsdWVCeXRlcyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzdHJpbmdUb0J5dGVzKHZhbHVlKSA6IHZhbHVlO1xuICAgIGNvbnN0IG5hbWVzcGFjZUJ5dGVzID0gdHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycgPyAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KShuYW1lc3BhY2UpIDogbmFtZXNwYWNlO1xuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lc3BhY2UgPSAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KShuYW1lc3BhY2UpO1xuICAgIH1cbiAgICBpZiAobmFtZXNwYWNlPy5sZW5ndGggIT09IDE2KSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH1cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlQnl0ZXMubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQobmFtZXNwYWNlQnl0ZXMpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZUJ5dGVzLCBuYW1lc3BhY2VCeXRlcy5sZW5ndGgpO1xuICAgIGJ5dGVzID0gaGFzaChieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSAoYnl0ZXNbNl0gJiAweDBmKSB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSAoYnl0ZXNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBuYXRpdmVfanNfMSA9IHJlcXVpcmUoXCIuL25hdGl2ZS5qc1wiKTtcbmNvbnN0IHJuZ19qc18xID0gcmVxdWlyZShcIi4vcm5nLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGlmIChuYXRpdmVfanNfMS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlX2pzXzEuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCk7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShybmRzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuY29uc3Qgc2hhMV9qc18xID0gcmVxdWlyZShcIi4vc2hhMS5qc1wiKTtcbmNvbnN0IHYzNV9qc18xID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xudmFyIHYzNV9qc18yID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRE5TXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5ETlM7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVUkxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLlVSTDsgfSB9KTtcbmZ1bmN0aW9uIHY1KHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgcmV0dXJuICgwLCB2MzVfanNfMS5kZWZhdWx0KSgweDUwLCBzaGExX2pzXzEuZGVmYXVsdCwgdmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpO1xufVxudjUuRE5TID0gdjM1X2pzXzEuRE5TO1xudjUuVVJMID0gdjM1X2pzXzEuVVJMO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgdjFfanNfMSA9IHJlcXVpcmUoXCIuL3YxLmpzXCIpO1xuY29uc3QgdjFUb1Y2X2pzXzEgPSByZXF1aXJlKFwiLi92MVRvVjYuanNcIik7XG5mdW5jdGlvbiB2NihvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIG9wdGlvbnMgPz89IHt9O1xuICAgIG9mZnNldCA/Pz0gMDtcbiAgICBsZXQgYnl0ZXMgPSAoMCwgdjFfanNfMS5kZWZhdWx0KSh7IC4uLm9wdGlvbnMsIF92NjogdHJ1ZSB9LCBuZXcgVWludDhBcnJheSgxNikpO1xuICAgIGJ5dGVzID0gKDAsIHYxVG9WNl9qc18xLmRlZmF1bHQpKGJ5dGVzKTtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY2O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHY2VG9WMSh1dWlkKSB7XG4gICAgY29uc3QgdjZCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgICBjb25zdCB2MUJ5dGVzID0gX3Y2VG9WMSh2NkJ5dGVzKTtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkodjFCeXRlcykgOiB2MUJ5dGVzO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjZUb1YxO1xuZnVuY3Rpb24gX3Y2VG9WMSh2NkJ5dGVzKSB7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKCh2NkJ5dGVzWzNdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbNF0gPj4gNCkgJiAweDBmKSwgKCh2NkJ5dGVzWzRdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbNV0gJiAweGYwKSA+PiA0KSwgKCh2NkJ5dGVzWzVdICYgMHgwZikgPDwgNCkgfCAodjZCeXRlc1s2XSAmIDB4MGYpLCB2NkJ5dGVzWzddLCAoKHY2Qnl0ZXNbMV0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1syXSAmIDB4ZjApID4+IDQpLCAoKHY2Qnl0ZXNbMl0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1szXSAmIDB4ZjApID4+IDQpLCAweDEwIHwgKCh2NkJ5dGVzWzBdICYgMHhmMCkgPj4gNCksICgodjZCeXRlc1swXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzFdICYgMHhmMCkgPj4gNCksIHY2Qnl0ZXNbOF0sIHY2Qnl0ZXNbOV0sIHY2Qnl0ZXNbMTBdLCB2NkJ5dGVzWzExXSwgdjZCeXRlc1sxMl0sIHY2Qnl0ZXNbMTNdLCB2NkJ5dGVzWzE0XSwgdjZCeXRlc1sxNV0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZVY3U3RhdGUgPSB2b2lkIDA7XG5jb25zdCBybmdfanNfMSA9IHJlcXVpcmUoXCIuL3JuZy5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgX3N0YXRlID0ge307XG5mdW5jdGlvbiB2NyhvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGxldCBieXRlcztcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBieXRlcyA9IHY3Qnl0ZXMob3B0aW9ucy5yYW5kb20gPz8gb3B0aW9ucy5ybmc/LigpID8/ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpLCBvcHRpb25zLm1zZWNzLCBvcHRpb25zLnNlcSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kcyA9ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpO1xuICAgICAgICB1cGRhdGVWN1N0YXRlKF9zdGF0ZSwgbm93LCBybmRzKTtcbiAgICAgICAgYnl0ZXMgPSB2N0J5dGVzKHJuZHMsIF9zdGF0ZS5tc2VjcywgX3N0YXRlLnNlcSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmID8/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVY3U3RhdGUoc3RhdGUsIG5vdywgcm5kcykge1xuICAgIHN0YXRlLm1zZWNzID8/PSAtSW5maW5pdHk7XG4gICAgc3RhdGUuc2VxID8/PSAwO1xuICAgIGlmIChub3cgPiBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5zZXEgPSAocm5kc1s2XSA8PCAyMykgfCAocm5kc1s3XSA8PCAxNikgfCAocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV07XG4gICAgICAgIHN0YXRlLm1zZWNzID0gbm93O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUuc2VxID0gKHN0YXRlLnNlcSArIDEpIHwgMDtcbiAgICAgICAgaWYgKHN0YXRlLnNlcSA9PT0gMCkge1xuICAgICAgICAgICAgc3RhdGUubXNlY3MrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5leHBvcnRzLnVwZGF0ZVY3U3RhdGUgPSB1cGRhdGVWN1N0YXRlO1xuZnVuY3Rpb24gdjdCeXRlcyhybmRzLCBtc2Vjcywgc2VxLCBidWYsIG9mZnNldCA9IDApIHtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBpZiAoIWJ1Zikge1xuICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbXNlY3MgPz89IERhdGUubm93KCk7XG4gICAgc2VxID8/PSAoKHJuZHNbNl0gKiAweDdmKSA8PCAyNCkgfCAocm5kc1s3XSA8PCAxNikgfCAocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV07XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gbXNlY3MgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAweDcwIHwgKChzZXEgPj4+IDI4KSAmIDB4MGYpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoc2VxID4+PiAyMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAweDgwIHwgKChzZXEgPj4+IDE0KSAmIDB4M2YpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoc2VxID4+PiA2KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICgoc2VxIDw8IDIpICYgMHhmZikgfCAocm5kc1sxMF0gJiAweDAzKTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxMV07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTJdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzEzXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxNF07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTVdO1xuICAgIHJldHVybiBidWY7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVnZXhfanNfMSA9IHJlcXVpcmUoXCIuL3JlZ2V4LmpzXCIpO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgcmVnZXhfanNfMS5kZWZhdWx0LnRlc3QodXVpZCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuZnVuY3Rpb24gdmVyc2lvbih1dWlkKSB7XG4gICAgaWYgKCEoMCwgdmFsaWRhdGVfanNfMS5kZWZhdWx0KSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTUpLCAxNik7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2ZXJzaW9uO1xuIiwiaW1wb3J0IHsgdXNlSW1tZXJSZWR1Y2VyIH0gZnJvbSBcInVzZS1pbW1lclwiO1xuaW1wb3J0IHtcblx0aW5pdGlhbENvbnRyb2xTdGF0ZSxcblx0cGFyYW1ldGVySW5pdGlhbFN0YXRlLFxuXHR2YWx2ZVN0YXR1cyxcbn0gZnJvbSBcIi4vaW5pdGlhbFN0YXRlXCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbW1hbmRWYWx2ZU1wUHJvcHMsXG5cdFBhcmFtZXRlckFjdGlvbixcblx0UGFyYW1JdGVtLFxuXHRVc2VQYXJhbWV0ZXJSZWR1Y2VyLFxuXHRVc2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIsXG5cdFVzZVZhbHZlUmVkdWNlcixcblx0VmFsdmVBY3Rpb24sXG5cdFZhbHZlTXBDb21tYW5kQWN0aW9uLFxuXHRWYWx2ZVN0YXRlLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5mdW5jdGlvbiB2YWx2ZVJlZHVjZXIoZHJhZnQ6IFZhbHZlU3RhdGUsIGFjdGlvbjogVmFsdmVBY3Rpb24pOiBWYWx2ZVN0YXRlIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgXCJVUERBVEVfQUNUX0NPTkZJR1wiOlxuXHRcdFx0ZHJhZnQuYWN0aXZhdGVkQ29uZmlnID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfREVBQ1RfQ09ORklHXCI6XG5cdFx0XHRkcmFmdC5kZWFjdGl2YXRlZENvbmZpZyA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0FDVF9GQlwiOlxuXHRcdFx0ZHJhZnQuYWN0RkIgPSAhZHJhZnQuYWN0RkI7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9ERV9BQ1RfRkJcIjpcblx0XHRcdGRyYWZ0LmRlQWN0RkIgPSAhZHJhZnQuZGVBY3RGQjtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX1VTTFwiOlxuXHRcdFx0ZHJhZnQudXNsID0gIWRyYWZ0LnVzbDtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0xTTFwiOlxuXHRcdFx0ZHJhZnQubHNsID0gIWRyYWZ0LmxzbDtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX01BTlVBTFwiOlxuXHRcdFx0ZHJhZnQubWFudWFsID0gIWRyYWZ0Lm1hbnVhbDtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0FMQVJNXCI6XG5cdFx0XHRkcmFmdC5hbGFybSA9ICFkcmFmdC5hbGFybTtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX01BU0tFRFwiOlxuXHRcdFx0ZHJhZnQubWFza2VkID0gIWRyYWZ0Lm1hc2tlZDtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0NIQU5HSU5HXCI6XG5cdFx0XHRkcmFmdC5jaGFuZ2luZyA9ICFkcmFmdC5jaGFuZ2luZztcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0xPQ0FURVwiOlxuXHRcdFx0ZHJhZnQubG9jYXRlID0gIWRyYWZ0LmxvY2F0ZTtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRkZWZhdWx0OiAvLyAjVE9ETyBBZGQgbW9yZSByZWR1Y2VyIGNhc2Ugc3RhdGVtZW50c1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWYWx2ZVJlZHVjZXIoKTogVXNlVmFsdmVSZWR1Y2VyIHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VJbW1lclJlZHVjZXIodmFsdmVSZWR1Y2VyLCB2YWx2ZVN0YXR1cyk7XG5cblx0ZnVuY3Rpb24gdXBkYXRlQWN0Q29uZmlnKHZhbHVlOiBudW1iZXIpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0FDVF9DT05GSUdcIiwgdmFsdWUgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlRGVBY3RDb25maWcodmFsdWU6IG51bWJlcikge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfREVBQ1RfQ09ORklHXCIsIHZhbHVlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVzbCgpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX1VTTFwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUxzbCgpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0xTTFwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUFsYXJtKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfQUxBUk1cIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVBY3RGQigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0FDVF9GQlwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZURlQWN0RkIoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9ERV9BQ1RfRkJcIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVNYW51YWwoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9NQU5VQUxcIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVNYXNrZWQoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9NQVNLRURcIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVDaGFuZ2luZygpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0NIQU5HSU5HXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTG9jYXRlKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTE9DQVRFXCIgfSk7XG5cdH1cblxuXHRjb25zdCB1c2VFZGl0VmFsdmVSZWR1Y2VyID0ge1xuXHRcdHN0YXRlLFxuXHRcdHJlZHVjZXI6IHtcblx0XHRcdHVwZGF0ZUFjdENvbmZpZyxcblx0XHRcdHVwZGF0ZURlQWN0Q29uZmlnLFxuXHRcdFx0dXBkYXRlQWxhcm0sXG5cdFx0XHR1cGRhdGVBY3RGQixcblx0XHRcdHVwZGF0ZURlQWN0RkIsXG5cdFx0XHR1cGRhdGVVc2wsXG5cdFx0XHR1cGRhdGVMc2wsXG5cdFx0XHR1cGRhdGVNYW51YWwsXG5cdFx0XHR1cGRhdGVNYXNrZWQsXG5cdFx0XHR1cGRhdGVDaGFuZ2luZyxcblx0XHRcdHVwZGF0ZUxvY2F0ZSxcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiB1c2VFZGl0VmFsdmVSZWR1Y2VyO1xufVxuLyoqXG4gKiAgVXBkYXRlIGEgcGFyYW1ldGVyIGl0ZW0gaW4gYSBsaXN0IG9mIHBhcmFtZXRlciBpdGVtc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBQYXJhbWV0ZXJSZWR1Y2VyKFxuXHRkcmFmdDogUGFyYW1JdGVtW10sXG5cdGFjdGlvbjogUGFyYW1ldGVyQWN0aW9uXG4pOiBQYXJhbUl0ZW1bXSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFwiVVBEQVRFX1ZBTFVFXCI6XG5cdFx0XHRkcmFmdFthY3Rpb24uaW5kZXhdLmlucHV0LnZhbHVlID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGRlZmF1bHQ6IC8vICNUT0RPIEFkZCBtb3JlIHJlZHVjZXIgY2FzZSBzdGF0ZW1lbnRzXG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtSXRlbXNSZWR1Y2VyKCk6IFVzZVBhcmFtZXRlclJlZHVjZXIge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUltbWVyUmVkdWNlcihcblx0XHRQYXJhbWV0ZXJSZWR1Y2VyLFxuXHRcdHBhcmFtZXRlckluaXRpYWxTdGF0ZVxuXHQpO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX1ZBTFVFXCIsIGluZGV4OiBpbmRleCwgdmFsdWU6IHZhbHVlIH0pO1xuXHR9XG5cdC8vIEFkZCBtb3JlIGRpc3BhdGNoIGZ1bmN0aW9ucyBoZXJlXG5cdGNvbnN0IHVzZVBhcmFtZXRlclJlZHVjZXIgPSB7XG5cdFx0c3RhdGUsXG5cdFx0cmVkdWNlcjoge1xuXHRcdFx0dXBkYXRlVmFsdWUsXG5cdFx0fSxcblx0fTtcblx0cmV0dXJuIHVzZVBhcmFtZXRlclJlZHVjZXI7XG59XG5mdW5jdGlvbiB2YWx2ZU1wUmVkdWNlcihcblx0ZHJhZnQ6IENvbW1hbmRWYWx2ZU1wUHJvcHMsXG5cdGFjdGlvbjogVmFsdmVNcENvbW1hbmRBY3Rpb25cbik6IENvbW1hbmRWYWx2ZU1wUHJvcHMge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBcIlVQREFURV9BVVRPX01BTlVBTFwiOlxuXHRcdFx0aWYgKGRyYWZ0Lm1haW4pIHtcblx0XHRcdFx0aWYgKGFjdGlvbi5tb2RlID09PSBcImF1dG9cIikge1xuXHRcdFx0XHRcdGRyYWZ0Lm1haW4uYXV0byA9IHRydWU7XG5cdFx0XHRcdFx0ZHJhZnQubWFpbi5tYW51YWwgPSBmYWxzZTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGFjdGlvbi5tb2RlID09PSBcIm1hbnVhbFwiKSB7XG5cdFx0XHRcdFx0ZHJhZnQubWFpbi5hdXRvID0gZmFsc2U7XG5cdFx0XHRcdFx0ZHJhZnQubWFpbi5tYW51YWwgPSB0cnVlO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coYGRyYWZ0Lm1haW4uYXV0byAke2RyYWZ0Lm1haW4uYXV0b31gKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhgZHJhZnQubWFpbi5tYW51YWwgJHtkcmFmdC5tYWluLm1hbnVhbH1gKVxuXHRcdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9NQUlOX01BTl9PTlwiOlxuXHRcdFx0XHRpZiAoZHJhZnQubWFpbikge1xuXHRcdFx0XHRkcmFmdC5tYWluLm9uID0gdHJ1ZTtcblx0XHRcdFx0ZHJhZnQubWFpbi5vZmYgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX01BSU5fTUFOX09GRlwiOlxuXHRcdFx0aWYgKGRyYWZ0Lm1haW4pIHtcblx0XHRcdFx0ZHJhZnQubWFpbi5vbiA9IGZhbHNlO1xuXHRcdFx0XHRkcmFmdC5tYWluLm9mZiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9VU0xfTUFOX09OXCI6XG5cdFx0XHRpZiAoZHJhZnQudXBwZXJTZWF0KSB7XG5cdFx0XHRcdGRyYWZ0LnVwcGVyU2VhdC5vbiA9IHRydWU7XG5cdFx0XHRcdGRyYWZ0LnVwcGVyU2VhdC5vZmYgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX1VTTF9NQU5fT0ZGXCI6XG5cdFx0XHRpZiAoZHJhZnQudXBwZXJTZWF0KSB7XG5cdFx0XHRcdGRyYWZ0LnVwcGVyU2VhdC5vbiA9IGZhbHNlO1xuXHRcdFx0XHRkcmFmdC51cHBlclNlYXQub2ZmID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX0xTTF9NQU5fT05cIjpcblx0XHRcdGlmIChkcmFmdC5sb3dlclNlYXQpIHtcblx0XHRcdFx0ZHJhZnQubG93ZXJTZWF0Lm9uID0gdHJ1ZTtcblx0XHRcdFx0ZHJhZnQubG93ZXJTZWF0Lm9mZiA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdFx0Y2FzZSBcIlVQREFURV9MU0xfTUFOX09GRlwiOlxuXHRcdFx0XHRpZiAoZHJhZnQubG93ZXJTZWF0KSB7XG5cdFx0XHRcdFx0ZHJhZnQubG93ZXJTZWF0Lm9uID0gZmFsc2U7XG5cdFx0XHRcdFx0ZHJhZnQubG93ZXJTZWF0Lm9mZiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cblx0XHRkZWZhdWx0OiAvLyAjVE9ETyBBZGQgbW9yZSByZWR1Y2VyIGNhc2Ugc3RhdGVtZW50c1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIoKTogVXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyIHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VJbW1lclJlZHVjZXIoXG5cdFx0dmFsdmVNcFJlZHVjZXIsXG5cdFx0aW5pdGlhbENvbnRyb2xTdGF0ZVxuXHQpO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUF1dG9NYW5TZWxlY3Rpb24obW9kZTogXCJhdXRvXCIgfCBcIm1hbnVhbFwiKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9BVVRPX01BTlVBTFwiLCBtb2RlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZU1haW5NYW51YWxPbigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09OXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTWFpbk1hbnVhbE9mZigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09GRlwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVzbE1hbnVhbE9uKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfVVNMX01BTl9PTlwiIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVzbE1hbnVhbE9mZigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX1VTTF9NQU5fT0ZGXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTHNsTWFudWFsT24oKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9MU0xfTUFOX09OXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTHNsTWFudWFsT2ZmKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTFNMX01BTl9PRkZcIiB9KTtcblx0fVxuXG5cdGNvbnN0IHVzZUNvbW1hbmRzVmFsdmVNcFJlZHVjZXIgPSB7XG5cdFx0c3RhdGUsXG5cdFx0cmVkdWNlcjoge1xuXHRcdFx0dXBkYXRlQXV0b01hblNlbGVjdGlvbixcblx0XHRcdHVwZGF0ZU1haW5NYW51YWxPbixcblx0XHRcdHVwZGF0ZU1haW5NYW51YWxPZmYsXG5cdFx0XHR1cGRhdGVVc2xNYW51YWxPbixcblx0XHRcdHVwZGF0ZVVzbE1hbnVhbE9mZixcblx0XHRcdHVwZGF0ZUxzbE1hbnVhbE9uLFxuXHRcdFx0dXBkYXRlTHNsTWFudWFsT2ZmLFxuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHVzZUNvbW1hbmRzVmFsdmVNcFJlZHVjZXI7XG59XG4iLCIvKipcbiAqIFRoZSBwdXJwb3NlIG9mIGluaXRpYWxTdGF0ZXMudHMgaXMgdG8gcHJvdmlkZSBpbml0aWFsIHN0YXRlIGZvciBjb21wb25lbnQgcHJvcHNcbiAqL1xuLy8gaW5pdGlhbFN0YXRlLnRzXG5cbmltcG9ydCB7IENvbW1hbmRWYWx2ZU1wUHJvcHMsIFBhcmFtSXRlbSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCB2YWx2ZVN0YXR1cyA9IHtcblx0YWxhcm06IGZhbHNlLFxuXHRhY3RGQjogZmFsc2UsXG5cdGRlQWN0RkI6IHRydWUsXG5cdGFjdGl2YXRlZENvbmZpZzogNyxcblx0ZGVhY3RpdmF0ZWRDb25maWc6IDUsXG5cdGl0ZW1OYW1lOiBcIlZYWFhcIixcblx0bWFudWFsOiBmYWxzZSxcblx0bWFza2VkOiBmYWxzZSxcblx0Y2hhbmdpbmc6IGZhbHNlLFxuXHRsb2NhdGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NPYmplY3RQcm9wcyA9IHtcblx0c3RhdHVzOiB2YWx2ZVN0YXR1cyxcbn07XG5leHBvcnQgY29uc3QgdmFsdmVQcm9wcyA9IHtcblx0cHJvY2Vzc09iamVjdDogcHJvY2Vzc09iamVjdFByb3BzLFxuXHRoYW5kbGVDbGljazogKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgY2xpY2tlZFwiKTtcblx0fSxcblx0bGFiZWxQb3NpdGlvbjogXCJsZWZ0XCIsXG5cdHNob3dMYWJlbDogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgcGFyYW1ldGVySW5pdGlhbFN0YXRlID0gW1xuXHR7XG5cdFx0bGFiZWw6IHtcblx0XHRcdHRleHQ6IFwibGFiZWxcIixcblx0XHRcdGNsYXNzTmFtZTogXCJcIixcblx0XHRcdHRvb2x0aXBUZXh0OiBcIlwiLFxuXHRcdFx0dG9vbHRpcFBvc2l0aW9uOiBcIlwiLFxuXHRcdFx0dG9vbHRpcENsYXNzTmFtZTogXCJcIixcblx0XHRcdHRvb2x0aXBJZDogXCJcIixcblx0XHR9LFxuXHRcdGlucHV0OiB7XG5cdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdGlucHV0bW9kZTogXCJudW1lcmljXCIsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCJFbnRlciBhIG51bWJlclwiLFxuXHRcdFx0ZWRpdGFibGU6IHRydWUsXG5cdFx0XHRwYXR0ZXJuOiBcIl5bMC05XSpbLixdP1swLTldKiRcIixcblx0XHRcdG1pbjogMCxcblx0XHRcdG1heDogMTAwLFxuXHRcdFx0ZGVjaW1hbFBsYWNlczogMixcblx0XHRcdGV1OiBcIlxcdTAwQjVDXCIsXG5cdFx0XHR2YWx1ZTogMCxcblx0XHR9LFxuXHR9IGFzIFBhcmFtSXRlbSxcbl07XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsQXV0b01hblN0YXRlID0ge1xuXHRhdXRvOiB0cnVlLFxuXHRtYW51YWw6IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBpbml0aWFsT2ZmT25TdGF0ZSA9IHtcblx0b2ZmOiBmYWxzZSxcblx0b246IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBpbml0aWFsQ29udHJvbFN0YXRlID0ge1xuXHRzZWN1cml0eTp7XG5cdFx0ZW5hYmxlZDogZmFsc2UsXG5cdFx0YWNjZXNzbGV2ZWw6IDAsXG5cdFx0dXNlck5hbWVzOiBbXCJhZG1pblwiXSxcblx0XHR1c2VyUm9sZXM6IFtcIkFkbWluaXN0cmF0b3JcIl0sXG5cdH0sXG5cdGludGVybG9ja3M6IHtcblx0XHRtYWluOiBbXSxcblx0XHR1cHBlclNlYXQ6IFtdLFxuXHRcdGxvd2VyU2VhdDogW11cblx0fSxcblx0bWFpbjoge1xuXHRcdGxhYmVsOiBcIk1haW5cIixcblx0XHRhdXRvOiB0cnVlLFxuXHRcdG1hbnVhbDogZmFsc2UsXG5cdFx0b2ZmOiB0cnVlLFxuXHRcdG9uOiBmYWxzZSxcblx0fSxcblx0dXBwZXJTZWF0OiB7XG5cdFx0bGFiZWw6IFwiVXBwZXIgU2VhdFwiLFxuXHRcdG9mZjogdHJ1ZSxcblx0XHRvbjogZmFsc2UsXG5cdH0sXG5cdGxvd2VyU2VhdDoge1xuXHRcdGxhYmVsOiBcIkxvd2VyIFNlYXRcIixcblx0XHRvZmY6IHRydWUsXG5cdFx0b246IGZhbHNlLFxuXHR9LFxufSBhcyBDb21tYW5kVmFsdmVNcFByb3BzO1xuIiwiaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ29tcG9uZW50UHJvcHN9IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBWQUxWRV9DT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5WYWx2ZVwiO1xuXG5leHBvcnQgdHlwZSBWYWx2ZVN0YXRlID0ge1xuXHRhbGFybTogYm9vbGVhbjtcblx0YWN0RkI6IGJvb2xlYW47XG5cdGRlQWN0RkI6IGJvb2xlYW47XG5cdHVzbD86Ym9vbGVhbjtcblx0bHNsPzogYm9vbGVhbjtcblx0YWN0aXZhdGVkQ29uZmlnOiBudW1iZXI7XG5cdGRlYWN0aXZhdGVkQ29uZmlnOiBudW1iZXI7XG5cdGl0ZW1OYW1lOiBzdHJpbmc7XG5cdG1hbnVhbDogYm9vbGVhbjtcblx0bWFza2VkOiBib29sZWFuO1xuXHRjaGFuZ2luZzogYm9vbGVhbjtcblx0bG9jYXRlOiBib29sZWFuO1xufTtcblxuXG5cbmV4cG9ydCB0eXBlIFZhbHZlQ29tcG91bmRDb250ZXh0VHlwZSA9IHtcblx0Y29tcG9uZW50UHJvcHM6Q29tcG9uZW50UHJvcHM8YW55LGFueT4sXG5cdHZhbHZlUHJvcHM6IFZhbHZlUHJvcHM7XG5cdG9uQWN0aW9uUGVyZm9ybWVkOiAoKT0+IHZvaWRcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5leHBvcnQgdHlwZSBWYWx2ZUNvbXBvdW5kUm9vdFByb3BzID0ge1xuXHRjb21wb25lbnRQcm9wczpDb21wb25lbnRQcm9wczxhbnksYW55Pixcblx0dmFsdmVQcm9wczpWYWx2ZVByb3BzLFxuXHRvbkFjdGlvblBlcmZvcm1lZDogKCk9PiB2b2lkXG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG4vKipcbiAqIERlZmluZSB0aGUgc2hhcGUgb2YgdGhlIFBhcmFtZXRlckFjdGlvbiB0eXBlXG4gKiBAVXNlYWdlIHVzZVBhcmFtZXRlclJlZHVjZXJcbiAqL1xuZXhwb3J0IHR5cGUgUGFyYW1ldGVyQWN0aW9uID1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX1ZBTFVFXCI7IHZhbHVlOiBudW1iZXIgLCBpbmRleDogbnVtYmVyfVxuXG5cdDtcblxuZXhwb3J0IHR5cGUgUGFyYW1ldGVyUmVkdWNlciA9IChcblx0c3RhdGU6IFBhcmFtSXRlbSB8IFBhcmFtSXRlbVtdLFxuXHRhY3Rpb246IFBhcmFtZXRlckFjdGlvblxuKSA9PiBWYWx2ZVN0YXRlO1xuXG5leHBvcnQgdHlwZSBVc2VQYXJhbWV0ZXJSZWR1Y2VyID0ge1xuXHRzdGF0ZTogUGFyYW1JdGVtW107XG5cdHJlZHVjZXI6IHtcblx0XHR1cGRhdGVWYWx1ZTogKHZhbHVlOm51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcblx0XHQvL2FkZCBtb3JlIGhhbmRsZXJzIGFzIG5lZWRlZFxuXHR9O1xufTtcbmV4cG9ydCB0eXBlIFBhcmFtTGFiZWwgPSB7XG5cdHRleHQ6IHN0cmluZztcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xuXHR0b29sdGlwVGV4dD86IHN0cmluZztcblx0dG9vbHRpcFBvc2l0aW9uPzogc3RyaW5nO1xuXHR0b29sdGlwQ2xhc3NOYW1lPzogc3RyaW5nO1xuXHR0b29sdGlwSWQ/OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBQYXJhbUlucHV0ID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGlucHV0bW9kZTogJ25vbmUnIHwgJ3RleHQnIHwgJ3RlbCcgfCAndXJsJyB8ICdlbWFpbCcgfCAnbnVtZXJpYycgfCAnZGVjaW1hbCcgfCAnc2VhcmNoJyB8IHVuZGVmaW5lZDtcblx0cGxhY2Vob2xkZXI6IHN0cmluZztcblx0ZWRpdGFibGU6IGJvb2xlYW47XG5cdHBhdHRlcm46IHN0cmluZztcblx0bWluOiBudW1iZXI7XG5cdG1heDogbnVtYmVyO1xuXHRkZWNpbWFsUGxhY2VzOiBudW1iZXI7XG5cdC8vIHBhdHRlcm46IFwiXlswLTldKlsuLF0/WzAtOV0qJFwiIGZvciBkZWNpbWFsIG51bWJlcnNcblx0Ly8gcGF0dGVybjogXCJeWzAtOV0qJFwiIGZvciBpbnRlZ2Vyc1xuXHRldTogc3RyaW5nO1xuXHR2YWx1ZTogbnVtYmVyO1xufVxuLy8gdHlwZSBQYXJhbXNIZWFkZXIgPSB7XG4vLyBcdGxhYmVsOiBzdHJpbmdcbi8vIH1cbmV4cG9ydCB0eXBlIFBhcmFtSXRlbSA9IHtcblx0bGFiZWw6IFBhcmFtTGFiZWw7XG5cdGlucHV0OiBQYXJhbUlucHV0O1xufVxuZXhwb3J0IHR5cGUgUGFyYW1ldGVyc0xpc3RTdGF0ZSA9IHtcblx0cGFyYW1ldGVyczogUGFyYW1JdGVtW11cbn1cbi8qKlxuICogRGVmaW5lIHRoZSBzaGFwZSBvZiB0aGUgVmFsdmVBY3Rpb24gdHlwZVxuICogQFVzZWFnZSB1c2VWYWx2ZVJlZHVjZXJcbiAqL1xuZXhwb3J0IHR5cGUgVmFsdmVBY3Rpb24gPVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQUNUX0NPTkZJR1wiOyB2YWx1ZTogbnVtYmVyIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0RFQUNUX0NPTkZJR1wiOyB2YWx1ZTogbnVtYmVyIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0FDVF9GQlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0RFX0FDVF9GQlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX1VTTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0xTTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX01BTlVBTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0FMQVJNXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTUFTS0VEXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQ0hBTkdJTkdcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9MT0NBVEVcIiB9XG5cdDtcblxuZXhwb3J0IHR5cGUgVmFsdmVSZWR1Y2VyID0gKFxuXHRzdGF0ZTogVmFsdmVTdGF0ZSxcblx0YWN0aW9uOiBWYWx2ZUFjdGlvblxuKSA9PiBWYWx2ZVN0YXRlO1xuXG5leHBvcnQgdHlwZSBVc2VWYWx2ZVJlZHVjZXIgPSB7XG5cdHN0YXRlOiBWYWx2ZVN0YXRlO1xuXHRyZWR1Y2VyOiB7XG5cdFx0dXBkYXRlQWN0Q29uZmlnOiAodmFsdWU6bnVtYmVyKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZURlQWN0Q29uZmlnOiAodmFsdWU6bnVtYmVyKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUFsYXJtOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUFjdEZCOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZURlQWN0RkI6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlVXNsOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxzbDogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVNYW51YWw6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTWFza2VkOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUNoYW5naW5nOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxvY2F0ZTogKCkgPT4gdm9pZDtcblxuXHRcdC8vYWRkIG1vcmUgaGFuZGxlcnMgYXMgbmVlZGVkXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgVmFsdmVDbGFzc05hbWVFbnVtID0ge1xuXHRBbGFybVN0YXRlOiBcIkFsYXJtU3RhdGVcIixcblx0QWN0aXZhdGVkOiBcIkFjdGl2YXRlZFwiLFxuXHREZWFjdGl2YXRlZDogXCJEZWFjdGl2YXRlZFwiLFxuXHRNYW51YWw6IFwiTWFudWFsXCIsXG5cdE1hc2tlZDogXCJNYXNrZWRcIixcblx0Q2hhbmdpbmc6IFwiQ2hhbmdpbmdcIixcblx0Tm9BbGFybU1hc2s6IFwiTm9BbGFybU1hc2tcIixcblx0TG9jYXRlOiBcIkxvY2F0ZVwiXG59O1xuZXhwb3J0IHR5cGUgVmFsdmVDbGFzc05hbWVFbnVtID1cblx0KHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW0pW2tleW9mIHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW1dO1xuZXhwb3J0IGNvbnN0IEl0ZW1OYW1lRW51bSA9IHtcblx0VjFiMTogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjFiMjogXCJ2MWIyXCIsIC8vIGluZGV4IDFcblx0VjFiMzogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNDogXCJ2MWI0XCIsIC8vIGluZGV4IDNcblx0VjJiMTogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMjogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMzogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjNiMTogXCJ2M2IxXCIsIC8vIGluZGV4IDhcblx0VjNiMjogXCJ2M2IyXCIsIC8vIGluZGV4IDlcblx0VjNiMzogXCJ2M2IzXCIsIC8vIGluZGV4IDEwXG5cdFYzYjQ6IFwidjNiNFwiLCAvLyBpbmRleCAxMVxuXHRWMjogXCJ2MlwiLCAvLyBpbmRleCAxMlxuXHRWMzogXCJ2M1wiLCAvLyBpbmRleCAxM1xuXHRWMTogXCJ2MVwiLCAvLyBpbmRleCAxNFxuXHRWMmYxOiBcInYyZjFcIiwgLy8gaW5kZXggMTVcblx0VjJmMjogXCJ2MmYyXCIsIC8vIGluZGV4IDE2XG5cdFYzZjE6IFwidjNmMVwiLCAvLyBpbmRleCAxN1xuXHRWM2YyOiBcInYzZjJcIiwgLy8gaW5kZXggMThcbn07XG5leHBvcnQgdHlwZSBJdGVtTmFtZUVudW0gPSAodHlwZW9mIEl0ZW1OYW1lRW51bSlba2V5b2YgdHlwZW9mIEl0ZW1OYW1lRW51bV07XG5leHBvcnQgY29uc3QgdmFsdmVNcEl0ZW1OYW1lRW51bSA9IHtcblx0VjFiMTogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjFiMjogXCJ2MWIyXCIsIC8vIGluZGV4IDFcblx0VjFiMzogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNDogXCJ2MWI0XCIsIC8vIGluZGV4IDNcblx0VjJiMTogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMjogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMzogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjI6IFwidjJcIiwgLy8gaW5kZXggOFxuXHRWMTogXCJ2MVwiLCAvLyBpbmRleCA5XG5cdHVzbDogXCJ1c2xcIiwgLy8gaW5kZXggMTAgdXBwZXItc2VhdC1saWZ0XG5cdGxzbDogXCJsc2xcIiwgLy8gaW5kZXggMTEgbG93ZXItc2VhdC1saWZ0XG5cdGxvY2F0ZTogXCJsb2NhdGVcIiAvLyBpbmRleCAxMiBsb2NhdGUgYW5pbWF0aW9uXG59O1xuZXhwb3J0IHR5cGUgdmFsdmVNcEl0ZW1OYW1lRW51bSA9ICh0eXBlb2YgdmFsdmVNcEl0ZW1OYW1lRW51bSlba2V5b2YgdHlwZW9mIHZhbHZlTXBJdGVtTmFtZUVudW1dO1xuXG5leHBvcnQgY29uc3QgSXRlbUNsaWNrYWJsZU5hbWVFbnVtID0ge1xuXHRWMWIxOiBcInYxYjFcIiwgLy8gaW5kZXggMFxuXHRWMWIyOiBcInYxYjJcIiwgLy8gaW5kZXggMVxuXHRWMWIzOiBcInYxYjNcIiwgLy8gaW5kZXggMlxuXHRWMWI0OiBcInYxYjRcIiwgLy8gaW5kZXggM1xuXHRWMmIxOiBcInYyYjFcIiwgLy8gaW5kZXggNFxuXHRWMmIyOiBcInYyYjJcIiwgLy8gaW5kZXggNVxuXHRWMmIzOiBcInYyYjNcIiwgLy8gaW5kZXggNlxuXHRWMmI0OiBcInYyYjRcIiwgLy8gaW5kZXggN1xuXHRWM2IxOiBcInYzYjFcIiwgLy8gaW5kZXggOFxuXHRWM2IyOiBcInYzYjJcIiwgLy8gaW5kZXggOVxuXHRWM2IzOiBcInYzYjNcIiwgLy8gaW5kZXggMTBcblx0VjNiNDogXCJ2M2I0XCIsIC8vIGluZGV4IDExXG5cdFYyOiBcInYyXCIsIC8vIGluZGV4IDEyXG5cdFYzOiBcInYzXCIsIC8vIGluZGV4IDEzXG5cdFYxOiBcInYxXCIsIC8vIGluZGV4IDE0XG59O1xuZXhwb3J0IHR5cGUgSXRlbUNsaWNrYWJsZU5hbWVFbnVtID1cblx0KHR5cGVvZiBJdGVtQ2xpY2thYmxlTmFtZUVudW0pW2tleW9mIHR5cGVvZiBJdGVtQ2xpY2thYmxlTmFtZUVudW1dO1xuZXhwb3J0IGNvbnN0IHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0gPSB7XG5cdFYxYjE6IFwidjFiMVwiLCAvLyBpbmRleCAwXG5cdFYxYjI6IFwidjFiMlwiLCAvLyBpbmRleCAxXG5cdFYxYjM6IFwidjFiM1wiLCAvLyBpbmRleCAyXG5cdFYxYjQ6IFwidjFiNFwiLCAvLyBpbmRleCAzXG5cdFYyYjE6IFwidjJiMVwiLCAvLyBpbmRleCA0XG5cdFYyYjI6IFwidjJiMlwiLCAvLyBpbmRleCA1XG5cdFYyYjM6IFwidjJiM1wiLCAvLyBpbmRleCA2XG5cdFYyYjQ6IFwidjJiNFwiLCAvLyBpbmRleCA3XG5cdFYyOiBcInYyXCIsIC8vIGluZGV4IDhcblx0VjE6IFwidjFcIiwgLy8gaW5kZXggOVxufTtcbmV4cG9ydCB0eXBlIHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0gPVxuXHQodHlwZW9mIHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0pW2tleW9mIHR5cGVvZiB2YWx2ZU1wSXRlbUNsaWNrYWJsZU5hbWVFbnVtXTtcblxuZXhwb3J0IGNvbnN0IEl0ZW1Qb3NpdGlvbkVudW0gPSB7XG5cdHYxYjE6IFwidjFiMVwiLFxuXHR2MWIyOiBcInYxYjJcIixcblx0djFiMzogXCJ2MWIzXCIsXG5cdHYxYjQ6IFwidjFiNFwiLFxuXHR2MmIxOiBcInYyYjFcIixcblx0VjJiMjogXCJ2MmIyXCIsXG5cdHYyYjM6IFwidjJiM1wiLFxuXHR2MmI0OiBcInYyYjRcIixcblx0djNiMTogXCJ2M2IxXCIsXG5cdHYzYjI6IFwidjNiMlwiLFxuXHR2M2IzOiBcInYzYjNcIixcblx0djNiNDogXCJ2M2I0XCIsXG5cdHYyOiBcInYyXCIsXG5cdHYzOiBcInYzXCIsXG59O1xuZXhwb3J0IHR5cGUgSXRlbVBvc2l0aW9uRW51bSA9XG5cdCh0eXBlb2YgSXRlbVBvc2l0aW9uRW51bSlba2V5b2YgdHlwZW9mIEl0ZW1Qb3NpdGlvbkVudW1dO1xuXG5jb25zdCBWYWx2ZVN0YXRlRW51bSA9IHtcblx0YWxhcm06IFwiYWxhcm1cIixcblx0bWFudWFsOiBcIm1hbnVhbFwiLFxuXHRtYXNrZWQ6IFwibWFza2VkXCIsXG59O1xuZXhwb3J0IHR5cGUgVmFsdmVTdGF0ZUVudW0gPVxuXHQodHlwZW9mIFZhbHZlU3RhdGVFbnVtKVtrZXlvZiB0eXBlb2YgVmFsdmVTdGF0ZUVudW1dO1xuXG5jb25zdCBpdGVtSWRQb3NpdGlvbnMgPSBbXG5cdCdyaWdodCcsXG5cdCdsZWZ0Jyxcblx0J3RvcC1sZWZ0Jyxcblx0J3RvcC1yaWdodCcsXG5cdCdib3R0b20tbGVmdCcsXG5cdCdib3R0b20tcmlnaHQnXG5dO1xuXG5leHBvcnQgdHlwZSBJdGVtSWRQb3NpdGlvblR5cGUgPSB0eXBlb2YgaXRlbUlkUG9zaXRpb25zW251bWJlcl07XG5leHBvcnQgdHlwZSBQcm9jZXNzT2JqZWN0ID0ge1xuXHRzdGF0dXM6IFZhbHZlU3RhdGVcbn1cbmV4cG9ydCB0eXBlIFZhbHZlUHJvcHMgPSB7XG5cdHByb2Nlc3NPYmplY3Q/OlByb2Nlc3NPYmplY3Q7XG5cdGxhYmVsUG9zaXRpb24/Okl0ZW1JZFBvc2l0aW9uVHlwZTtcblx0c2hvd0xhYmVsPzogYm9vbGVhbjtcblx0aGFuZGxlQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IHR5cGUgSXRlbURhdGEgPSB7XG5cdGtleTogc3RyaW5nO1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRwcm9wczogVmFsdmVTdGF0ZTtcbn07XG4vKipcbiAqIGRyYWdnYWJsZSBjb21wb25lbnQgdHlwZXNcbiAqL1xuLy8gZXhwb3J0IHR5cGUgRHJhZ2dhYmxlSXRlbSA9IHtcbi8vIFx0aWQ6IFVuaXF1ZUlkZW50aWZpZXI7XG4vLyBcdGxlZnQ6IG51bWJlcjtcbi8vIFx0dG9wOiBudW1iZXI7XG4vLyB9XG5cbi8vIGV4cG9ydCB0eXBlIERyYWdnYWJsZVByb3BzID0ge1xuLy8gXHRpZDogVW5pcXVlSWRlbnRpZmllcixcbi8vIFx0b25DbG9zZTogKGlkOiBVbmlxdWVJZGVudGlmaWVyKT0+IHZvaWQsXG4vLyBcdGVsZW1lbnQ/OiBrZXlvZiBIVE1MRWxlbWVudCxcbi8vIFx0bGVmdDogbnVtYmVyO1xuLy8gXHR0b3AgOiBudW1iZXI7XG4vLyBcdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4vLyBcdGNsYXNzTmFtZTogc3RyaW5nO1xuLy8gfVxuZXhwb3J0IHR5cGUgaXRlbU5hbWVQcm9wcyA9IHtcblx0XHRcdGtleTogc3RyaW5nLFxuXHRcdFx0bmFtZTogW3N0cmluZyxzdHJpbmddLFxuXHRcdFx0dmFsdWU6IHN0cmluZyxcblx0XHRcdGluZGV4OiBudW1iZXIsXG59XG5leHBvcnQgdHlwZSBDb21tYW5kVmFsdmVNcFByb3BzID0ge1xuXHRzZWN1cml0eT86e1xuXHRcdGVuYWJsZWQ6IGJvb2xlYW47XG5cdFx0YWNjZXNzbGV2ZWw6IG51bWJlcjtcblx0XHR1c2VyTmFtZXM6IHN0cmluZ1tdO1xuXHRcdHVzZXJSb2xlczogc3RyaW5nW107fSxcblx0aW50ZXJsb2Nrcz86e1xuXHRcdG1haW46IGJvb2xlYW5bXTtcblx0XHR1cHBlclNlYXQ6IGJvb2xlYW5bXTtcblx0XHRsb3dlclNlYXQ6IGJvb2xlYW5bXTt9LFxuXHRtYWluPzp7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdGF1dG86IGJvb2xlYW47XG5cdC8vIG9uQWN0aW9uUGVyZm9ybWVkX19hdXRvOiAoKSA9PiB2b2lkO1xuXHRtYW51YWw6IGJvb2xlYW47XG5cdC8vIG9uQWN0aW9uUGVyZm9ybWVkX19tYW51YWw6ICgpID0+IHZvaWQ7XG5cdG9mZjogYm9vbGVhbjtcblx0Ly8gb25BY3Rpb25QZXJmb3JtZWRfX29uOiAoKSA9PiB2b2lkO1xuXHRvbjogYm9vbGVhbjtcblx0Ly8gb25BY3Rpb25QZXJmb3JtZWRfX29mZjogKCkgPT4gdm9pZDt9LFxuXHR9LFxuXHR1cHBlclNlYXQ/Ontcblx0bGFiZWw6IHN0cmluZztcblx0b2ZmOiBib29sZWFuO1xuXHRvbjogYm9vbGVhbjtcblx0Ly8gb25BY3Rpb25QZXJmb3JtZWRfX29mZjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXIgO1xuXHQvLyBvbkFjdGlvblBlcmZvcm1lZF9fb246IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyIDtcbn0sXG5cdGxvd2VyU2VhdD86e1xuXHRsYWJlbDogc3RyaW5nO1xuXHRvZmY6IGJvb2xlYW47XG5cdG9uOiBib29sZWFuO1xuXHQvLyBvbkFjdGlvblBlcmZvcm1lZF9fb2ZmOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlciA7XG5cdC8vIG9uQWN0aW9uUGVyZm9ybWVkX19vbjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXIgO1xufSxcbn1cblxuXG5leHBvcnQgdHlwZSBDb21tYW5kc1ZhbHZlTXBDb21wb3VuZENvbnRleHRUeXBlID0ge1xuXHRjb21wb25lbnRQcm9wczpDb21wb25lbnRQcm9wczxhbnksYW55Pixcblx0dXNlUmVkdWNlcjogVXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcbmV4cG9ydCB0eXBlIENvbW1hbmRzVmFsdmVNcENvbXBvdW5kUm9vdFByb3BzID0ge1xuXHRjb21wb25lbnRQcm9wczpDb21wb25lbnRQcm9wczxhbnksYW55Pixcblx0Y29tbWFuZDogQ29tbWFuZFZhbHZlTXBQcm9wcztcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cbi8qKlxuICogRGVmaW5lIHRoZSBzaGFwZSBvZiB0aGUgVmFsdmVBY3Rpb24gdHlwZVxuICogQFVzZWFnZSB1c2VWYWx2ZVJlZHVjZXJcbiAqL1xuZXhwb3J0IHR5cGUgVmFsdmVNcENvbW1hbmRBY3Rpb24gPVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQVVUT19NQU5VQUxcIiwgbW9kZTpcImF1dG9cInwgXCJtYW51YWxcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9NQUlOX01BTl9PTlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX01BSU5fTUFOX09GRlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX1VTTF9NQU5fT05cIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9VU0xfTUFOX09GRlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0xTTF9NQU5fT05cIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9MU0xfTUFOX09GRlwiIH1cblxuXHQ7XG5leHBvcnQgdHlwZSBWYWx2ZU1wQ29tbWFuZFJlZHVjZXIgPSAoXG5cdHN0YXRlOiBDb21tYW5kVmFsdmVNcFByb3BzLFxuXHRhY3Rpb246IFZhbHZlTXBDb21tYW5kQWN0aW9uXG4pID0+IFZhbHZlU3RhdGU7XG5cbmV4cG9ydCB0eXBlIFVzZVZhbHZlTXBDb21tYW5kUmVkdWNlciA9IHtcblx0c3RhdGU6IENvbW1hbmRWYWx2ZU1wUHJvcHM7XG5cdHJlZHVjZXI6IHtcblx0XHR1cGRhdGVBdXRvTWFuU2VsZWN0aW9uOihtb2RlOlwiYXV0b1wifCBcIm1hbnVhbFwiLCApID0+IHZvaWQ7XG5cdFx0dXBkYXRlTWFpbk1hbnVhbE9uOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZU1haW5NYW51YWxPZmY6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlVXNsTWFudWFsT246ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlVXNsTWFudWFsT2ZmOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxzbE1hbnVhbE9uOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxzbE1hbnVhbE9mZjogKCkgPT4gdm9pZDtcblx0XHQvL2FkZCBtb3JlIGhhbmRsZXJzIGFzIG5lZWRlZFxuXHR9O1xufTtcbiIsImltcG9ydCB7IGdldEJvb2xBdEluZGV4IH0gZnJvbSBcIi4uL3V0aWxzL251bWJlclV0aWxcIjtcbmltcG9ydCB7XG5cdEl0ZW1JZFBvc2l0aW9uVHlwZSxcblx0SXRlbU5hbWVFbnVtLFxuXHR2YWx2ZU1wSXRlbU5hbWVFbnVtLFxuXHR0eXBlIFZhbHZlU3RhdGUsXG59IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG4vKipcbiAqIFRoaXMgaXMgYSB1dGlsaXR5IGZ1bmN0aW9uIGZvciB0aGUgY29tcG9uZW50IFwicHJvY2Vzcy1vYmplY3QvVmFsdmVGQ1wiXG4gKlxuICogQHBhcmFtIGluZGV4OiBudW1iZXIgdGhlIGluZGV4IG9mIGFuIGR5bmFtaWMgdmlzdWFsIGVsZW1lbnQgXCJpdGVtXCIgd2l0aGluIHRoZSBWYWx2ZSBjb21wb25lbnRcbiAqIEBwYXJhbSB2YWx2ZVN0YXR1cz86VmFsdmVTdGF0dXMgdGhlIHN0YXR1cyByZXByZXNlbnRpbmcgcGh5c2ljYWwgcHJvY2VzcyB2YWx2ZVxuICogQHJldHVybnMgY2xhc3NOYW1lOnN0cmluZyByZXR1cm5zIGFkZGl0aW9uYWwgY2xhc3NuYW1lcyBmb3IgYW4gdmlzdWFsIGVsZW1lbnQgb2YgdGhlIHZhbHZlIGNvbXBvbmVudC5cbiAqXG4gKiBSZXR1cm5lZCBjbGFzc25hbWVzIGFyZTtcbiAqIFx0aGlkZSAtIHRoaXMgaGlkZXMgdGhlIGl0ZW1cbiAqIFx0c2hvdyAtXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRJdGVtQ2xhc3NOYW1lID0gKFxuXHRpbmRleDogbnVtYmVyLFxuXHR2YWx2ZVN0YXR1cz86IFZhbHZlU3RhdGVcbik6IHN0cmluZyA9PiB7XG5cdGxldCBjbGFzc05hbWUgPSBcIlwiO1xuXHQvLyBIYW5kbGUgdGhlIGZhY3QgdGhhdCBBY3RpdmF0ZWRDb25maWcgYW5kIERlYWN0aXZhdGVkQ29uZmlnIGFyZSBvcHRpb25hbCBhbmQgbWF5YmUgdW5kZWZpbmVkXG5cdGNvbnN0IEFjdGl2YXRlZENvbmZpZ1ZhbHVlID0gdmFsdmVTdGF0dXM/LmFjdGl2YXRlZENvbmZpZyA/PyAwO1xuXHRjb25zdCBEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlID0gdmFsdmVTdGF0dXM/LmRlYWN0aXZhdGVkQ29uZmlnID8/IDA7XG5cdGlmIChpbmRleCA8IDEyKSB7XG5cdFx0aWYgKFxuXHRcdFx0KGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgJiYgdmFsdmVTdGF0dXM/LmFjdEZCKSB8fFxuXHRcdFx0KGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSAmJiB2YWx2ZVN0YXR1cz8uZGVBY3RGQilcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvdyBpdGVtXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZSBpdGVtXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxNCkge1xuXHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMikge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTMpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleClcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDE1KSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEyKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTIpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxNikge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMikgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEyKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTcpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTMpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMylcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDE4KSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEzKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTMpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHR9XG5cdC8vIEFkZGl0aW9ucyB0byB0aGUgY2xhc3NOYW1lXG5cblx0aWYgKGNsYXNzTmFtZS5pbmNsdWRlcyhcInNob3dcIikgJiYgIWNsYXNzTmFtZS5pbmNsdWRlcyhcIml0ZW1cIikpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4LCBjbGFzc05hbWUpO1xuXHRcdGlmICh2YWx2ZVN0YXR1cz8uYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWxhcm1TdGF0ZVwiLCBcIlwiKSArIFwiIEFsYXJtU3RhdGVcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5jaGFuZ2luZykge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJDaGFuZ2luZ1wiLCBcIlwiKSArIFwiIENoYW5naW5nXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFudWFsKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk1hbnVhbFwiLCBcIlwiKSArIFwiIE1hbnVhbFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCAmJiAhdmFsdmVTdGF0dXMuYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTm9BbGFybU1hc2tcIiwgXCJcIikgKyBcIiBOb0FsYXJtTWFza1wiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJNYXNrZWRcIiwgXCJcIikgKyBcIiBNYXNrZWRcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5hY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJBY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBBY3RpdmF0ZWRcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5kZUFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgRGVhY3RpdmF0ZWRcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5sb2NhdGUpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiY2lyY2xlXCIsIFwiXCIpICsgXCIgY2lyY2xlXCI7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNsYXNzTmFtZTsgLy8gZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbm8gb3RoZXIgY29uZGl0aW9uIGlzIG1ldFxufTtcbmV4cG9ydCBjb25zdCBnZXRWYWx2ZU1wSXRlbUNsYXNzTmFtZSA9IChcblx0aW5kZXg6IG51bWJlcixcblx0dmFsdmVTdGF0dXM/OiBWYWx2ZVN0YXRlXG4pOiBzdHJpbmcgPT4ge1xuXHRsZXQgY2xhc3NOYW1lID0gXCJcIjtcblx0Ly8gSGFuZGxlIHRoZSBmYWN0IHRoYXQgQWN0aXZhdGVkQ29uZmlnIGFuZCBEZWFjdGl2YXRlZENvbmZpZyBhcmUgb3B0aW9uYWwgYW5kIG1heWJlIHVuZGVmaW5lZFxuXHRjb25zdCBBY3RpdmF0ZWRDb25maWdWYWx1ZSA9IHZhbHZlU3RhdHVzPy5hY3RpdmF0ZWRDb25maWcgPz8gMDtcblx0Y29uc3QgRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSA9IHZhbHZlU3RhdHVzPy5kZWFjdGl2YXRlZENvbmZpZyA/PyAwO1xuXHQvLyBjb25zb2xlLmxvZyh2YWx2ZVN0YXR1cyk7XG5cblx0aWYgKGluZGV4IDwgOCkge1xuXHRcdGlmIChcblx0XHRcdChnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpICYmIHZhbHZlU3RhdHVzPy5hY3RGQikgfHxcblx0XHRcdChnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgJiYgdmFsdmVTdGF0dXM/LmRlQWN0RkIpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gOSkge1xuXHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHR9IGVsc2UgaWYgKGluZGV4ID09PSA4KSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKFxuXHRcdC8vIFx0YGluZGV4ICR7aW5kZXh9IGRlYWN0IGNvbmZpZyAke0RlYWN0aXZhdGVkQ29uZmlnVmFsdWV9IGJpdCBpcyAke2dldEJvb2xBdEluZGV4KFxuXHRcdC8vIFx0XHREZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLFxuXHRcdC8vIFx0XHQxMFxuXHRcdC8vIFx0KX1gXG5cdFx0Ly8gKTtcblxuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMCkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEwKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93IGl0ZW1cIjtcblx0XHRcdGlmICh2YWx2ZVN0YXR1cz8udXNsKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgQWN0aXZhdGVkXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgRGVhY3RpdmF0ZWRcIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDExKSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDExKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTEpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdFx0aWYgKHZhbHZlU3RhdHVzPy5sc2wpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJBY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBBY3RpdmF0ZWRcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiRGVhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBEZWFjdGl2YXRlZFwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTIpIHtcblx0XHRpZiAodmFsdmVTdGF0dXM/LmxvY2F0ZSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJzaG93IGl0ZW1cIiwgXCJcIikgKyBcIiBzaG93IGl0ZW1cIjtcblx0XHRcdGlmKGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCA4KSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgOCkpe1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcInNob3cgbGFyZ2UgaXRlbVwiLCBcIlwiKSArIFwiIHNob3cgbGFyZ2UgaXRlbVwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImhpZGUgaXRlbVwiLCBcIlwiKSArIFwiIGhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fVxuXHQvLyBBZGRpdGlvbnMgdG8gdGhlIGNsYXNzTmFtZVxuXG5cdGlmIChjbGFzc05hbWUuaW5jbHVkZXMoXCJzaG93XCIpICYmICFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtXCIpKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCwgY2xhc3NOYW1lKTtcblx0XHRpZiAodmFsdmVTdGF0dXM/LmFsYXJtKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkFsYXJtU3RhdGVcIiwgXCJcIikgKyBcIiBBbGFybVN0YXRlXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uY2hhbmdpbmcpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQ2hhbmdpbmdcIiwgXCJcIikgKyBcIiBDaGFuZ2luZ1wiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hbnVhbCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJNYW51YWxcIiwgXCJcIikgKyBcIiBNYW51YWxcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYXNrZWQgJiYgIXZhbHZlU3RhdHVzLmFsYXJtKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk5vQWxhcm1NYXNrXCIsIFwiXCIpICsgXCIgTm9BbGFybU1hc2tcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYXNrZWQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTWFza2VkXCIsIFwiXCIpICsgXCIgTWFza2VkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uYWN0RkIpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgQWN0aXZhdGVkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uZGVBY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJEZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIERlYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHR9XG5cdC8vIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgsIGNsYXNzTmFtZSk7XG5cblx0cmV0dXJuIGNsYXNzTmFtZTsgLy8gZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbm8gb3RoZXIgY29uZGl0aW9uIGlzIG1ldFxufTtcbi8qKlxuICogQHJldHVybnMgQXJyYXkgb2YgaXRlbU5hbWUocykgZm9yIGVhY2ggdmlzdWFsIGVsZW1lbnQgb2YgYSB2YWx2ZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGl0ZW1OYW1lcyA9IE9iamVjdC5lbnRyaWVzKEl0ZW1OYW1lRW51bSkubWFwKChrZXksIGluZGV4KSA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKGBJbiBidWlsZCBJdGVtTmFtZXMgbmFtZSAke2tleX0gaW5kZXggJHtpbmRleH1gKTtcblx0cmV0dXJuIHtcblx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdG5hbWU6IGtleSxcblx0XHR2YWx1ZToga2V5WzFdLFxuXHRcdGluZGV4OiBpbmRleCxcblx0fTtcbn0pO1xuZXhwb3J0IGNvbnN0IHZhbHZlTXBJdGVtTmFtZXMgPSBPYmplY3QuZW50cmllcyh2YWx2ZU1wSXRlbU5hbWVFbnVtKS5tYXAoXG5cdChrZXksIGluZGV4KSA9PiB7XG5cdFx0Ly8gY29uc29sZS5sb2coYEluIGJ1aWxkIEl0ZW1OYW1lcyBuYW1lICR7a2V5fSBpbmRleCAke2luZGV4fWApO1xuXHRcdHJldHVybiB7XG5cdFx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdFx0bmFtZToga2V5LFxuXHRcdFx0dmFsdWU6IGtleVsxXSxcblx0XHRcdGluZGV4OiBpbmRleCxcblx0XHR9O1xuXHR9XG4pO1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lID0gKGNsYXNzTmFtZTogc3RyaW5nLCBpdGVtSWRQb3NpdGlvbjogSXRlbUlkUG9zaXRpb25UeXBlKTpJdGVtSWRQb3NpdGlvblR5cGUgPT4ge1xuXHQvLyBDaGVjayBjbGFzc05hbWUgaW5jbHVkZXMgJ2l0ZW1JZCBwb3BvdmVyJywgaWYgbm90IHJldHVybiBjbGFzc05hbWUgYW5kIHdhcm5cblx0aWYgKCFjbGFzc05hbWUuaW5jbHVkZXMoJ2l0ZW1JZCBwb3BvdmVyJykpe1xuXHRcdGNvbnNvbGUud2FybihcIkZ1bmN0aW9uIGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lIGNhbGxlZCB3aGVuICdpdGVtSWQgcG9wb3Zlcicgbm90IGluIGdpdmVuIGNsYXNzTmFtZVwiKTtcblx0XHRyZXR1cm4gY2xhc3NOYW1lXG5cdH1cblx0Ly8gT3ZlciB3cml0ZSBnaXZlbiBjbGFzc05hbWVcblx0Y2xhc3NOYW1lID0gXCJpdGVtSWQgcG9wb3ZlclwiO1xuXHRzd2l0Y2ggKGl0ZW1JZFBvc2l0aW9uKSB7XG5cdGNhc2UgXCJsZWZ0XCI6XG5cdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi1sZWZ0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tbGVmdFwiO1xuXHRcdGJyZWFrO1xuXHRjYXNlIFwicmlnaHRcIjpcblx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLXJpZ2h0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tcmlnaHRcIjtcblx0XHRicmVhaztcblx0Y2FzZSBcInRvcC1sZWZ0XCI6XG5cdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi10b3AtbGVmdFwiLCBcIlwiKSArIFwiIHBvc2l0aW9uLXRvcC1sZWZ0XCI7XG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJ0b3AtcmlnaHRcIjpcblx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLXRvcC1yaWdodFwiLCBcIlwiKSArIFwiIHBvc2l0aW9uLXRvcC1yaWdodFwiO1xuXHRcdGJyZWFrO1xuXHRjYXNlIFwiYm90dG9tLWxlZnRcIjpcblx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLWJvdHRvbS1sZWZ0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tYm90dG9tLWxlZnRcIjtcblx0XHRicmVhaztcblx0Y2FzZSBcImJvdHRvbS1yaWdodFwiOlxuXHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tYm90dG9tLXJpZ2h0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tYm90dG9tLXJpZ2h0XCI7XG5cdFx0YnJlYWs7XG5cblx0ZGVmYXVsdDpcblx0XHRicmVhaztcbn1cblxuXHRyZXR1cm4gY2xhc3NOYW1lO1xufVxuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHR5cGUgQ29tbWFuZFZhbHZlTXBQcm9wcyB9IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcbi8vIGltcG9ydCB7IEljb25BdXRvLCBJY29uSGFuZENsaWNrIH0gZnJvbSAnLi4vdXRpbHMvaWNvbnMnO1xuaW1wb3J0IHsgUHJvcGVydHlUcmVlIH0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiO1xuaW1wb3J0IHR5cGUge1xuXHRDb21wb25lbnRQcm9wcyxcblx0Q29tcG9uZW50TWV0YSxcblx0UENvbXBvbmVudCxcblx0U2l6ZU9iamVjdCxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiOyAvLydAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuaW1wb3J0IHsgdXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyIH0gZnJvbSBcIi4uL2FwaS9ob29rc1wiO1xuXG4vLyBpbXBvcnQgeyB2YWx2ZVByb3BzIH0gZnJvbSBcIi4vcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL2luaXRpYWxTdGF0ZVwiO1xuLy8gaW1wb3J0IHsgVmFsdmVGQ0NvbXBvdW5kIH0gZnJvbSBcIi4vcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL1ZhbHZlRkNcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gXCJobWkuaW5wdXQuQ29tbWFuZFZhbHZlTXBcIjtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuICovXG5leHBvcnQgY29uc3QgQ29tbWFuZFZhbHZlTXAgPSAocHJvcHM6IENvbXBvbmVudFByb3BzPENvbW1hbmRWYWx2ZU1wUHJvcHM+KSA9PiB7XG5cdGNvbnN0IHRyZWUgPSBwcm9wcy5zdG9yZS5wcm9wcztcblx0Y29uc3Qge2ludGVybG9ja3N9ID0gcHJvcHMucHJvcHNcblxuXG5cblx0Y29uc3QgaXNJbnRlcmxvY2tlZCA9IChpbnRlcmxvY2tzOiBib29sZWFuW10pOmJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBpbnRlcmxvY2tzLmluY2x1ZGVzKHRydWUsMClcblx0fVxuXG5cdGNvbnN0IGhhbmRsZU1haW5BdXRvTWFudWFsU2VsZWN0aW9uID0gKG1vZGU6IFwiYXV0b1wiIHwgXCJtYW51YWxcIik6IHZvaWQgPT4ge1xuXHRcdHVwZGF0ZUF1dG9NYW5TZWxlY3Rpb24obW9kZSk7XG5cdFx0aWYgKG1vZGUgPT09IFwibWFudWFsXCIpIHtcblx0XHRcdHRyZWUud3JpdGUoXCJtYWluLmF1dG9cIiwgZmFsc2UpO1xuXHRcdFx0dHJlZS53cml0ZShcIm1haW4ubWFudWFsXCIsIHRydWUpO1xuXHRcdH0gZWxzZSBpZiAobW9kZSA9PT0gXCJhdXRvXCIpIHtcblx0XHRcdGhhbmRsZU1haW5NYW51YWxPZmYoKTsgLy8gV2hlbiBpbiBBdXRvIHN3aXRjaCB0byBtYW51YWxPZmYgdG8gdHJ1ZVxuXHRcdFx0dHJlZS53cml0ZShcIm1haW4uYXV0b1wiLCB0cnVlKTtcblx0XHRcdHRyZWUud3JpdGUoXCJtYWluLm1hbnVhbFwiLCBmYWxzZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZU1haW5NYW51YWxPbiA9ICgpID0+IHtcblx0XHR1cGRhdGVNYWluTWFudWFsT24oKTtcblx0XHR0cmVlLndyaXRlKFwibWFpbi5vblwiLCB0cnVlKTtcblx0XHR0cmVlLndyaXRlKFwibWFpbi5vZmZcIiwgZmFsc2UpO1xuXHR9XG5cdGNvbnN0IGhhbmRsZU1haW5NYW51YWxPZmYgPSAoKSA9PiB7XG5cdFx0dXBkYXRlTWFpbk1hbnVhbE9mZigpO1xuXHRcdHRyZWUud3JpdGUoXCJtYWluLm9mZlwiLCB0cnVlKTtcblx0XHR0cmVlLndyaXRlKFwibWFpbi5vblwiLCBmYWxzZSk7XG5cdH1cblx0Y29uc3QgaGFuZGxlVXNsTWFudWFsT24gPSAoKSA9PiB7XG5cdFx0dXBkYXRlVXNsTWFudWFsT24oKTtcblx0XHR0cmVlLndyaXRlKFwidXBwZXJTZWF0Lm9uXCIsIHRydWUpO1xuXHRcdHRyZWUud3JpdGUoXCJ1cHBlclNlYXQub2ZmXCIsIGZhbHNlKTtcblx0fVxuXHRjb25zdCBoYW5kbGVVc2xNYW51YWxPZmYgPSAoKSA9PiB7XG5cdFx0dXBkYXRlVXNsTWFudWFsT2ZmKCk7XG5cdFx0dHJlZS53cml0ZShcInVwcGVyU2VhdC5vZmZcIiwgdHJ1ZSk7XG5cdFx0dHJlZS53cml0ZShcInVwcGVyU2VhdC5vblwiLCBmYWxzZSk7XG5cdH1cblx0Y29uc3QgaGFuZGxlTHNsTWFudWFsT24gPSAoKSA9PiB7XG5cdFx0dXBkYXRlTHNsTWFudWFsT24oKTtcblx0XHR0cmVlLndyaXRlKFwibG93ZXJTZWF0Lm9uXCIsIHRydWUpO1xuXHRcdHRyZWUud3JpdGUoXCJsb3dlclNlYXQub2ZmXCIsIGZhbHNlKTtcblx0fVxuXHRjb25zdCBoYW5kbGVMc2xNYW51YWxPZmYgPSAoKSA9PiB7XG5cdFx0dXBkYXRlTHNsTWFudWFsT2ZmKCk7XG5cdFx0dHJlZS53cml0ZShcImxvd2VyU2VhdC5vZmZcIiwgdHJ1ZSk7XG5cdFx0dHJlZS53cml0ZShcImxvd2VyU2VhdC5vblwiLCBmYWxzZSk7XG5cdH1cblxuXG5cdGNvbnN0IHsgcmVkdWNlciwgc3RhdGUgfSA9IHVzZVZhbHZlTXBDb21tYW5kUmVkdWNlcigpO1xuXHRjb25zdCB7IG1haW4gLCB1cHBlclNlYXQsIGxvd2VyU2VhdH0gPSBzdGF0ZTtcblx0Y29uc3QgeyB1cGRhdGVBdXRvTWFuU2VsZWN0aW9uLFxuXHRcdHVwZGF0ZU1haW5NYW51YWxPbixcblx0XHR1cGRhdGVNYWluTWFudWFsT2ZmLFxuXHRcdHVwZGF0ZVVzbE1hbnVhbE9uLFxuXHRcdHVwZGF0ZVVzbE1hbnVhbE9mZixcblx0XHR1cGRhdGVMc2xNYW51YWxPbixcblx0XHR1cGRhdGVMc2xNYW51YWxPZmYsXG5cblx0IH0gPVxuXHRcdHJlZHVjZXI7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJobWktY29tcG9uZW50LWNvbW1hbmQtdmFsdmUtbXAgaG1pLWNvbXBvbmVudC1jb21tYW5kLXZhbHZlLW1wX19ncmlkXCI+XG5cdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwibWFpbi1sYWJlbFwiPnttYWluPy5sYWJlbH08L2xhYmVsPlxuXHRcdFx0PGRpdiByb2xlPVwiZ3JvdXBcIiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgb3V0bGluZWQgbWFpbi1hdXRvLW1hbnVhbFwiPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7bWFpbj8uYXV0byA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cblx0XHRcdFx0XHRkaXNhYmxlZD17aXNJbnRlcmxvY2tlZChpbnRlcmxvY2tzPy5tYWluIHx8IFtdKX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVNYWluQXV0b01hbnVhbFNlbGVjdGlvbihcImF1dG9cIil9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdEF1dG8gey8qIDxJY29uQXV0byAvPiAqL31cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHttYWluPy5tYW51YWwgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0aXNJbnRlcmxvY2tlZChpbnRlcmxvY2tzPy5tYWluIHx8IFtdKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVNYWluQXV0b01hbnVhbFNlbGVjdGlvbihcIm1hbnVhbFwiKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0TWFudWFsXG5cdFx0XHRcdFx0ey8qIDxJY29uSGFuZENsaWNrIC8+ICovfVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiByb2xlPVwiZ3JvdXBcIiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgb3V0bGluZWQgbWFpbi1vbi1vZmZcIj5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke21haW4/Lm9uID8gXCJzZWxlY3RlZFwiIDogXCJcIn1gfVxuXHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdGlzSW50ZXJsb2NrZWQoaW50ZXJsb2Nrcz8ubWFpbiB8fCBbXSkgfHxcblx0XHRcdFx0XHRcdG1haW4/LmF1dG9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTWFpbk1hbnVhbE9ufVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRPbiB7LyogPEljb25BdXRvIC8+ICovfVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke21haW4/Lm9mZiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cblx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRpc0ludGVybG9ja2VkKGludGVybG9ja3M/Lm1haW4gfHwgW10pIHx8XG5cdFx0XHRcdFx0XHRtYWluPy5hdXRvXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU1haW5NYW51YWxPZmZ9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdE9mZlxuXHRcdFx0XHRcdHsvKiA8SWNvbkhhbmRDbGljayAvPiAqL31cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJ1cHBlci1zZWF0LWxhYmVsXCI+e3VwcGVyU2VhdD8ubGFiZWx9PC9sYWJlbD5cblx0XHRcdDxkaXYgcm9sZT1cImdyb3VwXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIG91dGxpbmVkIHVwcGVyLXNlYXQtb24tb2ZmXCI+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHt1cHBlclNlYXQ/Lm9uID8gXCJzZWxlY3RlZFwiIDogXCJcIn1gfVxuXHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdGlzSW50ZXJsb2NrZWQoaW50ZXJsb2Nrcz8udXBwZXJTZWF0IHx8IFtdKSB8fFxuXHRcdFx0XHRcdFx0bWFpbj8uYXV0b1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVVc2xNYW51YWxPbn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0T24gey8qIDxJY29uQXV0byAvPiAqL31cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHt1cHBlclNlYXQ/Lm9mZiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cblx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRpc0ludGVybG9ja2VkKGludGVybG9ja3M/LnVwcGVyU2VhdCB8fCBbXSkgfHxcblx0XHRcdFx0XHRcdG1haW4/LmF1dG9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlVXNsTWFudWFsT2ZmfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRPZmZcblx0XHRcdFx0XHR7LyogPEljb25IYW5kQ2xpY2sgLz4gKi99XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwibG93ZXItc2VhdC1sYWJlbFwiPntsb3dlclNlYXQ/LmxhYmVsfTwvbGFiZWw+XG5cdFx0XHQ8ZGl2IHJvbGU9XCJncm91cFwiIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBvdXRsaW5lZCBsb3dlci1zZWF0LW9uLW9mZlwiPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7bG93ZXJTZWF0Py5vbiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cblx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRpc0ludGVybG9ja2VkKGludGVybG9ja3M/Lmxvd2VyU2VhdCB8fCBbXSkgfHxcblx0XHRcdFx0XHRcdG1haW4/LmF1dG9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTHNsTWFudWFsT259XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdE9uIHsvKiA8SWNvbkF1dG8gLz4gKi99XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7bG93ZXJTZWF0Py5vZmYgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0aXNJbnRlcmxvY2tlZChpbnRlcmxvY2tzPy5sb3dlclNlYXQgfHwgW10pIHx8XG5cdFx0XHRcdFx0XHRtYWluPy5hdXRvXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUxzbE1hbnVhbE9mZn1cblx0XHRcdFx0XHR2YWx1ZT17XCJ0cnVlXCJ9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRPZmZcblx0XHRcdFx0XHR7LyogPEljb25IYW5kQ2xpY2sgLz4gKi99XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIENvbW1hbmRWYWx2ZU1wTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBDb21tYW5kVmFsdmVNcDtcblx0fVxuXG5cdGdldERlZmF1bHRTaXplKCk6IFNpemVPYmplY3Qge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMjQsXG5cdFx0XHRoZWlnaHQ6IDQ4LFxuXHRcdH07XG5cdH1cblxuXHQvLyBJbnZva2VkIHdoZW4gYW4gdXBkYXRlIHRvIHRoZSBQcm9wZXJ0eVRyZWUgaGFzIG9jY3VycmVkLFxuXHQvLyBlZmZlY3RpdmVseSBtYXBwaW5nIHRoZSB2YWx2ZVN0YXR1cyBvZiB0aGUgdHJlZSB0byBjb21wb25lbnQgcHJvcHMuXG5cdGdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBDb21tYW5kVmFsdmVNcFByb3BzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VjdXJpdHk6IHtcblx0XHRcdFx0ZW5hYmxlZDogdHJlZS5yZWFkQm9vbGVhbihcInNlY3VyaXR5LmVuYWJsZWRcIiwgZmFsc2UpLFxuXHRcdFx0XHRhY2Nlc3NsZXZlbDogdHJlZS5yZWFkTnVtYmVyKFwic2VjdXJpdHkuYWNjZXNzbGV2ZWxcIiwgNTExKSxcblx0XHRcdFx0dXNlck5hbWVzOiB0cmVlLnJlYWQoXCJzZWN1cml0eS51c2VyTmFtZXNcIiwgW1wiYWRtaW5cIl0pLFxuXHRcdFx0XHR1c2VyUm9sZXM6IHRyZWUucmVhZChcInNlY3VyaXR5LnVzZXJSb2xlc1wiLCBbXCJBZG1pbmlzdHJhdG9yXCJdKSxcblx0XHRcdH0sXG5cdFx0XHRpbnRlcmxvY2tzOiB7XG5cdFx0XHRcdG1haW46IHRyZWUucmVhZEFycmF5KFwiaW50ZXJsb2Nrcy5tYWluXCIpLFxuXHRcdFx0XHR1cHBlclNlYXQ6IHRyZWUucmVhZEFycmF5KFwiaW50ZXJsb2Nrcy51cHBlclNlYXRcIiksXG5cdFx0XHRcdGxvd2VyU2VhdDogdHJlZS5yZWFkQXJyYXkoXCJpbnRlcmxvY2tzLmxvd2VyU2VhdFwiKSxcblx0XHRcdH0sXG5cdFx0XHRtYWluOiB0cmVlLnJlYWQoXCJtYWluXCIsIHtcblx0XHRcdFx0bGFiZWw6IFwiXCIsXG5cdFx0XHRcdGF1dG86IHRydWUsXG5cdFx0XHRcdG1hbnVhbDogZmFsc2UsXG5cdFx0XHRcdG9mZjogdHJ1ZSxcblx0XHRcdFx0b246IGZhbHNlLFxuXHRcdFx0fSksXG5cdFx0XHR1cHBlclNlYXQ6IHRyZWUucmVhZChcInVwcGVyU2VhdFwiLCB7XG5cdFx0XHRcdGxhYmVsOiBcIlwiLFxuXHRcdFx0XHRvZmY6IHRydWUsXG5cdFx0XHRcdG9uOiBmYWxzZSxcblx0XHRcdH0pLFxuXHRcdFx0bG93ZXJTZWF0OiB0cmVlLnJlYWQoXCJsb3dlclNlYXRcIiwge1xuXHRcdFx0XHRsYWJlbDogXCJcIixcblx0XHRcdFx0b2ZmOiB0cnVlLFxuXHRcdFx0XHRvbjogZmFsc2UsXG5cdFx0XHR9KSxcblx0XHR9O1xuXHR9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdFByb3BlcnR5VHJlZSxcbn0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHNcblx0LENvbXBvbmVudE1ldGFcblx0LFBDb21wb25lbnRcblx0LFNpemVPYmplY3Rcbn0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcblxuLy8gaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCJzcmMvdXRpbHMvY3JlYXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgUGFyYW1ldGVyc0xpc3RTdGF0ZSwgUGFyYW1JdGVtIH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgcGFyYW1ldGVySW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcblxuLy8gVHlwZXNcblxuLy8gdHlwZSBFZGl0UGFyYW1JbnB1dENvbnRleHRUeXBlID0ge1xuLy8gXHRwYXJhbUl0ZW06IFBhcmFtSXRlbTtcbi8vIFx0c2V0UGFyYW1JdGVtOiAocGFyYW1JdGVtOiBQYXJhbUl0ZW0pID0+IHZvaWQ7XG4vLyB9XG4vLyB0eXBlIEVkaXRQYXJhbUlucHV0Q29udGV4dFR5cGUgPSB7XG4vLyBcdHN0YXRlOiBQYXJhbUl0ZW1bXTtcbi8vIFx0cmVkdWNlcjogVXNlUGFyYW1ldGVyUmVkdWNlcjtcbi8vIH1cblxudHlwZSBQYXJhbWV0ZXJzTGlzdENvbXBvbmVudFByb3BzID0ge1xuXHRwYXJhbWV0ZXJzOiBQYXJhbUl0ZW1bXVxufVxuY29uc3QgaW5pdFBhcmFtZXRlcnMgPSBbe1xuXHRsYWJlbDp7XG5cdFx0dGV4dDogXCJ0ZXh0XCJcblx0fSxcblx0aW5wdXQ6IHtcblx0XHR2YWx1ZTogbnVsbCxcblx0XHRwbGFjZWhvbGRlcjogXCJFbnRlciBhIE51bWJlclwiXG5cdH1cbn1dXG5cbi8vIGNvbnN0IFtFZGl0UGFyYW1JbnB1dENvbnRleHRQcm92aWRlciwgdXNlRWRpdFBhcmFtSW5wdXRDb250ZXh0XSA9XG4vLyB1c2VDcmVhdGVDb250ZXh0PEVkaXRQYXJhbUlucHV0Q29udGV4dFR5cGU+KFwiRWRpdFBhcmFtSW5wdXRDb250ZXh0XCIpO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5pbnB1dC5QYXJhbWV0ZXJMaXN0XCI7XG5cbmV4cG9ydCBjb25zdCBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50ID0gKHByb3BzOiBDb21wb25lbnRQcm9wczxQYXJhbWV0ZXJzTGlzdENvbXBvbmVudFByb3BzPikgPT4ge1xuY29uc3QgdHJhbnNmb3JtZWRQcm9wcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuXHRjb25zdCB7IHBhcmFtZXRlcnN9ID0gcHJvcHMucHJvcHMgfHwgaW5pdFBhcmFtZXRlcnNcblx0cmV0dXJuIHBhcmFtZXRlcnNcbn0sIFtwcm9wcy5wcm9wcy5wYXJhbWV0ZXJzXSlcblxuXG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXktZmxleC1jb2x1bW5cIlxuXHRcdFx0PlxuXHRcdHt0cmFuc2Zvcm1lZFByb3BzLm1hcCgocGFyYW06IFBhcmFtSXRlbSwgaW5kZXg6IG51bWJlcik9Pntcblx0XHRcdGNvbnN0IHsgbGFiZWwsaW5wdXR9ID0gcGFyYW07XG5cdFx0XHRjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxsYWJlbCBrZXk9e2Ake2xhYmVsLnRleHR9LXBhcmFtZXRlciR7aW5kZXh9YH1jbGFzc05hbWU9XCJmaWVsZCBzbWFsbFwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsLnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImV1XCI+e2lucHV0LmV1fTwvc3Bhbj5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGlkPXtgJHtsYWJlbC50ZXh0fS1wYXJhbWV0ZXIke2luZGV4fWB9XG5cdFx0XHRcdFx0aW5wdXRNb2RlPXtpbnB1dC5pbnB1dG1vZGV9XG5cdFx0XHRcdFx0cGF0dGVybj17aW5wdXQucGF0dGVybiB8fCBcIlswLTldKlwifVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtpbnB1dC5wbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRkaXNhYmxlZD17IWlucHV0LmVkaXRhYmxlfVxuXHRcdFx0XHRcdHZhbHVlPXtpbnB1dC52YWx1ZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17XG5cdFx0XHRcdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhgT24gY2hhbmdlIGV2ZW50ICR7ZS5jdXJyZW50VGFyZ2V0LnZhbHVlfWApO1xuXHRcdFx0XHRcdFx0XHRwcm9wcy5zdG9yZS5wcm9wcy53cml0ZShcblx0XHRcdFx0XHRcdFx0XHRgcGFyYW1ldGVyc1ske2luZGV4fV0uaW5wdXQudmFsdWVgLFxuXHRcdFx0XHRcdFx0XHRcdGUuY3VycmVudFRhcmdldC52YWx1ZVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQvLyB1cGRhdGVWYWx1ZShwYXJzZUZsb2F0KHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpLnRvRml4ZWQoMikpLCBpbmRleCk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdClcblxuXHRcdH0pXG5cdH08L2Rpdj5cblx0XHQpXG5cbn07XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50TWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6c3RyaW5ne1xucmV0dXJuIENPTVBPTkVOVF9UWVBFXG5cdH1cblxuXHRnZXREZWZhdWx0U2l6ZSgpOiBTaXplT2JqZWN0e1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMTIwLFxuXHRcdFx0aGVpZ2h0OiAyNDAsXG5cdFx0fVxuXHR9XG5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFBhcmFtZXRlcnNMaXN0U3RhdGUge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYXJhbWV0ZXJzOnRyZWUucmVhZCAoJ3BhcmFtZXRlcnMnLCBwYXJhbWV0ZXJJbml0aWFsU3RhdGUpXG5cdFx0fVxuXHR9XG5cblx0Z2V0Vmlld0NvbXBvbmVudCgpOiBQQ29tcG9uZW50IHtcblx0XHRyZXR1cm4gUGFyYW1ldGVyTGlzdENvbXBvbmVudCBhcyBQQ29tcG9uZW50XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBTdGF0dXNQcm9wcyB9IGZyb20gXCIuLi9hci10eXBlcy9zdGF0dXNcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG5cdFByb3BlcnR5VHJlZSxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiOyAvLydAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5kaXNwbGF5LlN0YXR1c1ZhbHZlTXBcIjtcblxuZXhwb3J0IGNvbnN0IFN0YXR1c1ZhbHZlTXAgPSAocHJvcHM6IENvbXBvbmVudFByb3BzPFN0YXR1c1Byb3BzPikgPT4ge1xuXHRjb25zdCB7IHN0YXR1c0l0ZW1zIH0gPSBwcm9wcy5wcm9wcztcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiaG1pLWNvbXBvbmVudC1zdGF0dXMtdmFsdmUtbXAgaG1pLWNvbXBvbmVudC1zdGF0dXMtdmFsdmUtbXBfX2dyaWRcIj5cblx0XHRcdDx1bD5cblxuXHRcdFx0e3N0YXR1c0l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJib3JkZXItdG9wXCIga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIiA+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtLmxhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlbmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImNoZWNrYm94XCIgaWQ9e2BjaGVja2JveC0ke2luZGV4fWB9IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2l0ZW0uc3RhdHVzfSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIFN0YXR1c1ZhbHZlTXBNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFN0YXR1c1ZhbHZlTXAgYXMgdW5rbm93biBhcyBQQ29tcG9uZW50O1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAyNCxcblx0XHRcdGhlaWdodDogNDgsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFN0YXR1c1Byb3BzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzSXRlbXM6IHRyZWUucmVhZChcInN0YXR1c0l0ZW1zXCIsIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiBcImxhYmVsIHRleHRcIixcblx0XHRcdFx0XHRzdGF0dXM6IGZhbHNlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSksXG5cdFx0fTtcblx0fVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRJdGVtSWRQb3NpdGlvblR5cGUsXG5cdFByb2Nlc3NPYmplY3QsXG5cdHR5cGUgVmFsdmVQcm9wcyxcblx0dHlwZSBWYWx2ZVN0YXRlLFxufSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5cbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0UHJvcGVydHlUcmVlLFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbXBvbmVudFByb3BzLFxuXHRDb21wb25lbnRNZXRhLFxuXHRQQ29tcG9uZW50LFxuXHRTaXplT2JqZWN0LFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7IC8vJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG5pbXBvcnQgeyBWYWx2ZU1wQ29tcG91bmQgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUtbXAvVmFsdmVNcFwiO1xuaW1wb3J0IHsgcHJvY2Vzc09iamVjdFByb3BzIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcbi8vIGltcG9ydCB7IHZhbHZlUHJvcHMgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUvaW5pdGlhbFN0YXRlXCI7XG4vLyBpbXBvcnQgeyBWYWx2ZUZDQ29tcG91bmQgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUvVmFsdmVGQ1wiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5wcm9jZXNzX29iamVjdHMuVmFsdmVfbXBcIjtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuICovXG5leHBvcnQgY2xhc3MgVmFsdmUgZXh0ZW5kcyBDb21wb25lbnQ8Q29tcG9uZW50UHJvcHM8VmFsdmVQcm9wcz4sIGFueT4ge1xuXHR2YWx2ZVJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wczogQ29tcG9uZW50UHJvcHM8VmFsdmVQcm9wcz4pIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy52YWx2ZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblx0fVxuXG5cdC8vIFRoaXMgaXMgYSBsaWZlY3ljbGUgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBtb3VudGVkIHRvIHRoZSBET00uXG5cdGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuXHRcdC8vIE5vIG5lZWQgdG8gaW5pdGlhbGl6ZSB2YWx2ZVJlZiBoZXJlXG5cdH1cblx0cHJvY2Vzc09iamVjdDogUHJvY2Vzc09iamVjdCA9XG5cdFx0dGhpcy5wcm9wcy5wcm9wcy5wcm9jZXNzT2JqZWN0IHx8IHByb2Nlc3NPYmplY3RQcm9wcztcblx0c3RhdHVzOiBWYWx2ZVN0YXRlID0gdGhpcy5wcm9jZXNzT2JqZWN0LnN0YXR1cztcblx0c2hvd0xhYmVsOiBib29sZWFuID0gdGhpcy5wcm9wcy5wcm9wcy5zaG93TGFiZWwgfHwgZmFsc2U7XG5cdGxhYmVsUG9zaXRpb246IEl0ZW1JZFBvc2l0aW9uVHlwZSA9IHRoaXMucHJvcHMucHJvcHMubGFiZWxQb3NpdGlvbiB8fCBcImxlZnRcIjtcblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIGNvbXBvbmVudCdzIGFjdGlvbiBldmVudC5cblx0ICovXG5cdG9uQWN0aW9uUGVyZm9ybWVkID0gKCkgPT4ge1xuXHRcdC8vIElmIHRoZSBkZXNpZ25lciBpcyBpbiBcImRlc2lnblwiIG1vZGUsIGRvbid0IGRvIGFueXRoaW5nXG5cdFx0aWYgKCF0aGlzLnByb3BzLmV2ZW50c0VuYWJsZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgaXMgZGlzYWJsZWQgaW4gdGhlIGRlc2lnbi1zY29wZVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBjbGlja2VkIVwiKTtcblx0XHR0aGlzLnByb3BzLmNvbXBvbmVudEV2ZW50cy5maXJlQ29tcG9uZW50RXZlbnQoXCJvbkFjdGlvblBlcmZvcm1lZFwiLCB7fSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQvLyA8ZGl2PlRoaXMgaXMgVmFsdmU8L2Rpdj5cblx0XHRcdDxWYWx2ZU1wQ29tcG91bmQuUm9vdFxuXHRcdFx0XHRjb21wb25lbnRQcm9wcz17dGhpcy5wcm9wc31cblx0XHRcdFx0dmFsdmVQcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQ9e3RoaXMub25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxWYWx2ZU1wQ29tcG91bmQudmFsdmUgLz5cblx0XHRcdFx0PFZhbHZlTXBDb21wb3VuZC5wb3BvdmVyIGFuY2hvckVsPXt0aGlzLnZhbHZlUmVmLmN1cnJlbnR9IC8+XG5cdFx0XHQ8L1ZhbHZlTXBDb21wb3VuZC5Sb290PlxuXHRcdCk7XG5cdH1cbn1cbi8vIFRoaXMgaXMgdGhlIGFjdHVhbCB0aGluZyB0aGF0IGdldHMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBjb21wb25lbnQgcmVnaXN0cnkuXG5leHBvcnQgY2xhc3MgVmFsdmVNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFZhbHZlO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAyNCxcblx0XHRcdGhlaWdodDogNDgsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFZhbHZlUHJvcHMge1xuXHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0YGl0ZW1OYW1lOiAke3RyZWUucmVhZFN0cmluZyhcblx0XHRcdFx0XCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5pdGVtTmFtZVwiXG5cdFx0XHQpfSBzaG93TGFiZWwgJHt0cmVlLnJlYWRCb29sZWFuKFwic2hvd0xhYmVsXCIpfWBcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb2Nlc3NPYmplY3Q6IHtcblx0XHRcdFx0c3RhdHVzOiB7XG5cdFx0XHRcdFx0YWxhcm06IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hbGFybVwiLCBmYWxzZSksXG5cdFx0XHRcdFx0YWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hY3RGQlwiLCBmYWxzZSksXG5cdFx0XHRcdFx0ZGVBY3RGQjogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmRlQWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGFjdGl2YXRlZENvbmZpZzogdHJlZS5yZWFkTnVtYmVyKFxuXHRcdFx0XHRcdFx0XCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hY3RpdmF0ZWRDb25maWdcIixcblx0XHRcdFx0XHRcdDUxMVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0ZGVhY3RpdmF0ZWRDb25maWc6IHRyZWUucmVhZE51bWJlcihcblx0XHRcdFx0XHRcdFwicHJvY2Vzc09iamVjdC5zdGF0dXMuZGVhY3RpdmF0ZWRDb25maWdcIixcblx0XHRcdFx0XHRcdDQwOTVcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdGl0ZW1OYW1lOiB0cmVlLnJlYWRTdHJpbmcoXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5pdGVtTmFtZVwiLCBcIlwiKSxcblx0XHRcdFx0XHRtYW51YWw6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5tYW51YWxcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdG1hc2tlZDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLm1hc2tlZFwiLCBmYWxzZSksXG5cdFx0XHRcdFx0Y2hhbmdpbmc6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5jaGFuZ2luZ1wiLCBmYWxzZSksXG5cdFx0XHRcdFx0bG9jYXRlOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubG9jYXRlXCIsIGZhbHNlKSxcblx0XHRcdFx0XHR1c2w6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy51c2xcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGxzbDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmxzbFwiLCBmYWxzZSksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hvd0xhYmVsOiB0cmVlLnJlYWRCb29sZWFuKFwic2hvd0xhYmVsXCIsIGZhbHNlKSxcblx0XHRcdGxhYmVsUG9zaXRpb246IHRyZWUucmVhZFN0cmluZyhcImxhYmVsUG9zaXRpb25cIiwgXCJ0b3AtbGVmdFwiKSxcblx0XHR9O1xuXHR9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHtcblx0VmFsdmVDb21wb3VuZENvbnRleHRUeXBlLFxuXHRWYWx2ZUNvbXBvdW5kUm9vdFByb3BzLFxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VWYWx2ZVJlZHVjZXIgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2hvb2tzXCI7XG5pbXBvcnQgeyBnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZSwgZ2V0VmFsdmVNcEl0ZW1DbGFzc05hbWUsIHZhbHZlTXBJdGVtTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3V0aWxzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vdmFsdmUvaXRlbVwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyBWQUxWRV9DT01QT05FTlRfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9hcGkvdHlwZXNcIjtcbmltcG9ydCB7IHByb2Nlc3NPYmplY3RQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9hcGkvaW5pdGlhbFN0YXRlXCI7XG5cbi8vIGltcG9ydCAnLi92YWx2ZS1tcC5tb2R1bGUuY3NzJ1xuLy8gaW1wb3J0IHt2YWx2ZVN0YXR1c30gZnJvbSAnLi4vLi4vYXBpL2luaXRpYWxTdGF0ZSdcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gVkFMVkVfQ09NUE9ORU5UX1RZUEU7XG5cbi8vIGltcG9ydCB7dmFsdmVTdGF0dXN9IGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5leHBvcnQgY29uc3QgW1ZhbHZlQ29udGV4dFByb3ZpZGVyLCB1c2VWYWx2ZUNvbnRleHRdID1cblx0dXNlQ3JlYXRlQ29udGV4dDxWYWx2ZUNvbXBvdW5kQ29udGV4dFR5cGU+KFwiVmFsdmVNcENvbXBvdW5kXCIpO1xuXG5jb25zdCBSb290ID0gKHtcblx0Y29tcG9uZW50UHJvcHMsXG5cdHZhbHZlUHJvcHMsXG5cdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRjaGlsZHJlbixcbn06IFZhbHZlQ29tcG91bmRSb290UHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8VmFsdmVDb250ZXh0UHJvdmlkZXJcblx0XHRcdHsuLi57XG5cdFx0XHRcdHZhbHZlUHJvcHMsXG5cdFx0XHRcdGNvbXBvbmVudFByb3BzLFxuXHRcdFx0XHRvbkFjdGlvblBlcmZvcm1lZCxcblx0XHRcdFx0dXNlVmFsdmVSZWR1Y2VyLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9WYWx2ZUNvbnRleHRQcm92aWRlcj5cblx0KTtcbn07XG5jb25zdCB2YWx2ZSA9ICgpID0+IHtcblx0Y29uc3QgeyB2YWx2ZVByb3BzLCBvbkFjdGlvblBlcmZvcm1lZCwgY29tcG9uZW50UHJvcHMgfSA9XG5cdFx0dXNlVmFsdmVDb250ZXh0KFwiVmFsdmVcIik7XG5cdFx0Y29uc3QgdmFsdmVSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cdGNvbnN0IHsgcG9zaXRpb24sIGVtaXQgfSA9IGNvbXBvbmVudFByb3BzO1xuXHRjb25zdCB7IHByb2Nlc3NPYmplY3R9ID0gdmFsdmVQcm9wcztcblx0Y29uc3QgeyBzdGF0dXMgfSA9IHByb2Nlc3NPYmplY3QgfHwgcHJvY2Vzc09iamVjdFByb3BzO1xuXHRjb25zdCBpbkNvb3JkID0gcG9zaXRpb24/LnggPz8gZmFsc2U7XG5cdC8vIGlmIG5vdCBsb2NhdGUsIHRyaW0gbGFzdCBpdGVtIGZyb20gdmFsdmVNcEl0ZW1OYW1lc1xuXHRsZXQgY29tcG9uZW50SXRlbU5hbWVzID0gdmFsdmVNcEl0ZW1OYW1lcztcblx0aWYgKCFzdGF0dXM/LmxvY2F0ZSkge1xuXHRcdGNvbXBvbmVudEl0ZW1OYW1lcyA9IGNvbXBvbmVudEl0ZW1OYW1lcy5zbGljZSgwLCAtMSk7XG5cdH1cblxuXHRpZiAoIWluQ29vcmQpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0cmVmPXt2YWx2ZVJlZn1cblx0XHRcdHsuLi5lbWl0KHtcblx0XHRcdFx0Y2xhc3NlczogW2BobWktY29tcG9uZW50IGhtaS1jb21wb25lbnRfX2NvbHVtbiBgXSxcblx0XHRcdH0pfVxuXHRcdFx0XHRkYXRhLWNvbXBvbmVudD17Q09NUE9ORU5UX1RZUEV9XG5cdFx0XHRcdG9uQ2xpY2s9e29uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhtaS1jb21wb25lbnRfX3Jvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG1pLWNvbXBvbmVudC12YWx2ZV9fbXBcIj5cblx0XHRcdFx0XHRcdHtjb21wb25lbnRJdGVtTmFtZXMubWFwKFxuXHRcdFx0XHRcdFx0XHQoeyB2YWx1ZSwgaW5kZXgsIGtleSB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRgcmUtcmVuZGVyZWQgLGtleSAke2tleX0gdmFsdWUgJHt2YWx1ZX0gaW5kZXggJHtpbmRleH1gXG5cdFx0XHRcdFx0XHRcdFx0Ly8gKSxcblx0XHRcdFx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbUNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlICsgXCIgXCIgKyBnZXRWYWx2ZU1wSXRlbUNsYXNzTmFtZShpbmRleCwgc3RhdHVzKVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRyZWY9e3ZhbHZlUmVmfVxuXHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRjbGFzc2VzOiBbYGhtaS1jb21wb25lbnQgaG1pLWNvbXBvbmVudC12YWx2ZV9fbXAgYF0sXG5cdFx0XHR9KX1cblx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHRcdG9uQ2xpY2s9e29uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0PlxuXHRcdFx0XHR7Y29tcG9uZW50SXRlbU5hbWVzLm1hcChcblx0XHRcdFx0XHQoeyB2YWx1ZSwgaW5kZXgsIGtleSB9KSA9PiAoXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRcdC8vIFx0YHJlLXJlbmRlcmVkICxrZXkgJHtrZXl9IHZhbHVlICR7dmFsdWV9IGluZGV4ICR7aW5kZXh9YFxuXHRcdFx0XHRcdFx0Ly8gKSxcblx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0PEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlICsgXCIgXCIgKyBnZXRWYWx2ZU1wSXRlbUNsYXNzTmFtZShpbmRleCwgc3RhdHVzKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59O1xuXG5jb25zdCBwb3BvdmVyID0gKHsgYW5jaG9yRWwgfTogeyBhbmNob3JFbDogSFRNTERpdkVsZW1lbnQgfCBudWxsIH0pID0+IHtcblx0Y29uc3QgeyB2YWx2ZVByb3BzLCBjb21wb25lbnRQcm9wcyB9ID0gdXNlVmFsdmVDb250ZXh0KFwiUG9wb3ZlclwiKTtcbiAgICBjb25zdCB7IHNob3dMYWJlbCxsYWJlbFBvc2l0aW9uLCBwcm9jZXNzT2JqZWN0IH0gPSB2YWx2ZVByb3BzO1xuXHRjb25zdCB7IHN0YXR1cyB9ID0gcHJvY2Vzc09iamVjdCB8fCBwcm9jZXNzT2JqZWN0UHJvcHM7XG5cdGlmICghc2hvd0xhYmVsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBjb21wb25lbnRQcm9wcztcblx0bGV0IGNsYXNzTmFtZSA9IFwiaXRlbUlkIHBvcG92ZXIgcG9zaXRpb24tbGVmdFwiO1xuXHRpZiAobGFiZWxQb3NpdGlvbikge1xuXHRcdGNsYXNzTmFtZSA9IGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lKGNsYXNzTmFtZSwgbGFiZWxQb3NpdGlvbilcblx0fVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGVmdDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT57c3RhdHVzPy5pdGVtTmFtZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IFZhbHZlTXBDb21wb3VuZCA9IHtcblx0Um9vdCxcblx0dmFsdmUsXG5cdHBvcG92ZXIsXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCBcIi4vaXRlbS5tb2R1bGUuY3NzXCI7XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuXHRpdGVtQ2xhc3NOYW1lOiBzdHJpbmc7XG5cdGhhbmRsZUNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn1cbi8vIGNvbnN0IGJpdCA9IChuOiBudW1iZXIsIGk6IG51bWJlcik6IG51bWJlciA9PiB7XG4vLyBcdHJldHVybiAobiA+PiBpKSAmIDE7XG4vLyB9O1xuY29uc3QgSXRlbTogUmVhY3QuRkM8SXRlbVByb3BzPiA9ICh7IGl0ZW1DbGFzc05hbWUsIGhhbmRsZUNsaWNrIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2l0ZW1DbGFzc05hbWV9XG5cdG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48L2Rpdj47XG59O1xuSXRlbS5kaXNwbGF5TmFtZSA9IFwiSXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29udGV4dDxDb250ZXh0VmFsdWVUeXBlIGV4dGVuZHMgb2JqZWN0IHwgbnVsbD4oXG4gIHJvb3RDb21wb25lbnROYW1lOiBzdHJpbmcsXG4gIGRlZmF1bHRDb250ZXh0PzogQ29udGV4dFZhbHVlVHlwZVxuKSB7XG4gIGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENvbnRleHRWYWx1ZVR5cGUgfCB1bmRlZmluZWQ+KFxuICAgIGRlZmF1bHRDb250ZXh0XG4gICk7XG5cbiAgY29uc3QgUHJvdmlkZXI6IFJlYWN0LkZDPENvbnRleHRWYWx1ZVR5cGUgJiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoXG4gICAgcHJvcHNcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgLi4uY29udGV4dCB9ID0gcHJvcHM7XG4gICAgLy8gT25seSByZS1tZW1vaXplIHdoZW4gcHJvcCB2YWx1ZXMgY2hhbmdlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIGNvbnN0IHZhbHVlID0gUmVhY3QudXNlTWVtbyhcbiAgICAgICgpID0+IGNvbnRleHQsXG4gICAgICBPYmplY3QudmFsdWVzKGNvbnRleHQpXG4gICAgKSBhcyBDb250ZXh0VmFsdWVUeXBlO1xuICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xuICB9O1xuXG4gIFByb3ZpZGVyLmRpc3BsYXlOYW1lID0gcm9vdENvbXBvbmVudE5hbWUgKyBcIlByb3ZpZGVyXCI7XG5cbiAgZnVuY3Rpb24gdXNlQ29udGV4dChjb25zdW1lck5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpO1xuICAgIGlmIChjb250ZXh0KSByZXR1cm4gY29udGV4dDtcbiAgICBpZiAoZGVmYXVsdENvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGRlZmF1bHRDb250ZXh0O1xuICAgIC8vIGlmIGEgZGVmYXVsdENvbnRleHQgd2Fzbid0IHNwZWNpZmllZCwgaXQncyBhIHJlcXVpcmVkIGNvbnRleHQuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFxcYCR7Y29uc3VtZXJOYW1lfVxcYCBtdXN0IGJlIHVzZWQgd2l0aGluIFxcYCR7cm9vdENvbXBvbmVudE5hbWV9XFxgYFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gW1Byb3ZpZGVyLCB1c2VDb250ZXh0XSBhcyBjb25zdDtcbn1cbiIsIi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnMgZm9yIG51bWJlcnNcbiAqL1xuXG4vKipcbiAqIFVzaW5nIHRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgbiwgYW4gSW50ZWdlciwgcmV0dXJucyB0aGUgYm9vbGVhblxuICogdmFsdWUgYXQgaW5kZXgsIGkuXG4gKiBAcGFyYW0gbiBhIG51bWJlciBpcyBpbXBsaWNpdHkgY29udmVydGVyIHRvIGEgMzJiaXQgaW50ZWdlciwgYnkgdGhlIGJpdHdpc2Ugb3BlcmF0b3JzXG4gKiBAcGFyYW0gaSBpcyBhIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGJpdCBwb3NpdGlvbiB0byBiZSB0ZXN0ZWRcbiAqIEByZXR1cm5zIHRoZSBib29sZWFuIHZhbHVlIG9mIHRoZSBiaXQgYXQgaW5kZXggaS5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEJvb2xBdEluZGV4ID0gKG46IG51bWJlciwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBCb29sZWFuKChuID4+IGkpICYgMSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pbmR1Y3RpdmVhdXRvbWF0aW9uX3BlcnNwZWN0aXZlX2NsaWVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDb21wb25lbnRNZXRhLCBDb21wb25lbnRSZWdpc3RyeSB9IGZyb20gJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG4vL2ltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9CdXR0b24nO1xuLy9pbXBvcnQgeyBWYWx2ZSwgVmFsdmVNZXRhIH0gZnJvbSBcIi4vY29tcG9uZW50cy9WYWx2ZVwiO1xuaW1wb3J0IHsgVmFsdmUsIFZhbHZlTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9WYWx2ZSc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50LCBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50TWV0YX0gZnJvbSAnLi9jb21wb25lbnRzL1BhcmFtZXRlckxpc3QnXG5pbXBvcnQgeyBDb21tYW5kVmFsdmVNcCwgQ29tbWFuZFZhbHZlTXBNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL0NvbW1hbmRWYWx2ZU1wJztcbmltcG9ydCB7IFN0YXR1c1ZhbHZlTXAsIFN0YXR1c1ZhbHZlTXBNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL1N0YXR1c1ZhbHZlTXAnO1xuXG4vLyBFeHBvcnQgY29tcG9uZW50cyBmb3IgZXh0ZXJuYWwgcmVmZXJlbmNlXG5leHBvcnQge1xuXHRWYWx2ZSAsXG5cdFBhcmFtZXRlckxpc3RDb21wb25lbnQsXG5cdENvbW1hbmRWYWx2ZU1wLFxuXHRTdGF0dXNWYWx2ZU1wXG5cdH07XG5cbi8vIEltcG9ydCBjb21wb25lbnQgc3R5bGVzXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLy8gQXJyYXkgb2YgY29tcG9uZW50IG1ldGFkYXRhXG5jb25zdCBjb21wb25lbnRzOiBBcnJheTxDb21wb25lbnRNZXRhPiA9IFtcblx0bmV3IFZhbHZlTWV0YSgpLFxuXHRuZXcgUGFyYW1ldGVyTGlzdENvbXBvbmVudE1ldGEoKSxcblx0bmV3IENvbW1hbmRWYWx2ZU1wTWV0YSgpLFxuXHRuZXcgU3RhdHVzVmFsdmVNcE1ldGEoKSxcblxuXTtcblxuLy8gUmVnaXN0ZXIgZWFjaCBjb21wb25lbnQgd2l0aCB0aGUgUGVyc3BlY3RpdmUgQ29tcG9uZW50UmVnaXN0cnlcbmNvbXBvbmVudHMuZm9yRWFjaCgoYzogQ29tcG9uZW50TWV0YSkgPT4gQ29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXIoYykpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9