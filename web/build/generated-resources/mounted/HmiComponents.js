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
    const ActivatedConfigValue = (0, numberUtil_1.convertTPValveConfigToHmiValveConfig)((_a = valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.activatedConfig) !== null && _a !== void 0 ? _a : 0);
    const DeactivatedConfigValue = (0, numberUtil_1.convertTPValveConfigToHmiValveConfig)((_b = valveStatus === null || valveStatus === void 0 ? void 0 : valveStatus.deactivatedConfig) !== null && _b !== void 0 ? _b : 0);
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
const constants_1 = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");
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

/***/ "./src/components/FlowProvider.tsx":
/*!*****************************************!*\
  !*** ./src/components/FlowProvider.tsx ***!
  \*****************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/ts-loader/index.js):\nError: TypeScript emitted no output for /mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/src/components/FlowProvider.tsx.\n    at makeSourceMapAndFinish (/mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/node_modules/ts-loader/dist/index.js:55:18)\n    at successLoader (/mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/node_modules/ts-loader/dist/index.js:42:5)\n    at Object.loader (/mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/node_modules/ts-loader/dist/index.js:23:5)");

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
const constants_1 = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");
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
const constants_1 = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");
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
                                    React.createElement("p", { className: `x-small ${item.lowlight ? "low-light" : ""}` }, item.label)),
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
            statusItems: tree.read("status", []),
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
    }
    // This is a lifecycle method that is called when the component is first mounted to the DOM.
    componentDidMount() {
    }
    render() {
        return (
        // <div>This is Valve</div>
        React.createElement(ValveMp_1.ValveMpCompound.Root, { componentProps: this.props, valveProps: this.props.props, onActionPerformed: this.onActionPerformed },
            React.createElement(ValveMp_1.ValveMpCompound.valve, null),
            React.createElement(ValveMp_1.ValveMpCompound.popover, { anchorEl: null })));
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
        console.log("tree", tree.read());
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

/***/ "./src/components/flow/Components/FlowNode.tsx":
/*!*****************************************************!*\
  !*** ./src/components/flow/Components/FlowNode.tsx ***!
  \*****************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/ts-loader/index.js):\nError: TypeScript emitted no output for /mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/src/components/flow/Components/FlowNode.tsx.\n    at makeSourceMapAndFinish (/mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/node_modules/ts-loader/dist/index.js:55:18)\n    at successLoader (/mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/node_modules/ts-loader/dist/index.js:42:5)\n    at Object.loader (/mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/node_modules/ts-loader/dist/index.js:23:5)");

/***/ }),

/***/ "./src/components/flow/Flow.tsx":
/*!**************************************!*\
  !*** ./src/components/flow/Flow.tsx ***!
  \**************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/ts-loader/index.js):\nError: TypeScript emitted no output for /mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/src/components/flow/Flow.tsx.\n    at makeSourceMapAndFinish (/mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/node_modules/ts-loader/dist/index.js:55:18)\n    at successLoader (/mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/node_modules/ts-loader/dist/index.js:42:5)\n    at Object.loader (/mnt/2AD4B775D4B741BD/aaaGitHub/ign-po-mod/web/node_modules/ts-loader/dist/index.js:23:5)");

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
const constants_1 = __webpack_require__(/*! ../../../constants/constants */ "./src/constants/constants.ts");
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
const constants_1 = __webpack_require__(/*! ../../../constants/constants */ "./src/constants/constants.ts");
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
const constants_1 = __webpack_require__(/*! ../../../constants/constants */ "./src/constants/constants.ts");
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
    // const valveRef = React.useRef<HTMLDivElement>(null);
    const { emit, store } = componentProps;
    const { processObject } = valveProps;
    const { status } = processObject || initialState_1.processObjectProps;
    store.view.view.params;
    let componentItemNames = utils_1.valveMpItemNames;
    if (!(status === null || status === void 0 ? void 0 : status.locate)) {
        componentItemNames = componentItemNames.slice(0, -1);
    }
    const ref = React.useRef(null);
    const componentClassName = "valve__mp";
    // if (!inCoord) {
    return (React.createElement("div", Object.assign({ ref: ref }, emit({
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

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hxElements = exports.FLOW_COMPONENT_TYPE = exports.FLOW_PROVIDER_COMPONENT_TYPE = exports.HX_COMPONENT_TYPE = exports.COMMAND_VALVE_MP_COMPONENT_TYPE = exports.PARAMETER_LIST_COMPONENT_TYPE = exports.STATUS_COMPONENT_TYPE = exports.PUMP_COMPONENT_TYPE = exports.VALVE_COMPONENT_TYPE = exports.HMI_COMPONENT_CLASS = exports.IA_SYMBOL_COMPONENT_WRAPPER = exports.IA_SYMBOL_COMPONENT_ROW = exports.IA_SYMBOL_COMPONENT_COLUMN = void 0;
const hx_types_1 = __webpack_require__(/*! ../ar-types/processObjects/heatExchangers/hx-types */ "./src/ar-types/processObjects/heatExchangers/hx-types.ts");
const hx_utils_1 = __webpack_require__(/*! ../ar-utils/processObjects/heatExchangers/hx-utils */ "./src/ar-utils/processObjects/heatExchangers/hx-utils.ts");
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
exports.FLOW_PROVIDER_COMPONENT_TYPE = "hmi.flow.FlowProvider";
exports.FLOW_COMPONENT_TYPE = "hmi.flow.Flow";
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
exports.convertTPValveConfigToHmiValveConfig = convertTPValveConfigToHmiValveConfig;
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
function convertTPValveConfigToHmiValveConfig(n) {
    // bit 9 is true - butterfly valve
    let newConfig = 0;
    let tp, hmi;
    // n at index 9 is true
    if ((n >> 9) & 1) {
        // TP bit 0 = Hmi bit 0
        tp = 9;
        hmi = 9;
        newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
        // TP bit 0 = Hmi bit 0
        tp = 0;
        hmi = 0;
        newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
        // TP bit 4 = Hmi bit 2
        tp = 4;
        hmi = 2;
        newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
        // TP bit 6 = Hmi bit 3
        tp = 6;
        hmi = 3;
        newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
        // TP bit 2 = Hmi bit 1
        tp = 2;
        hmi = 1;
        newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
    }
    else {
        // TP bit 7 = Hmi bit 3
        tp = 7;
        hmi = 3;
        newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
        // TP bit 5 = Hmi bit 7
        tp = 5;
        hmi = 7;
        newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
        // TP bit 3 = Hmi bit 5
        tp = 3;
        hmi = 5;
        newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
        // TP bit 4 = Hmi bit 6
        tp = 4;
        hmi = 6;
        newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
    }
    // n at index 8 is true
    // set bits 2 and 4
    if ((n >> 8) & 1) {
        newConfig = newConfig | (1 << 2) | (1 << 4) | (1 << 8);
    }
    if ((n >> 0) & 1) {
        newConfig = newConfig | (1 << 0);
    }
    if ((n >> 1) & 1) {
        newConfig = newConfig | (1 << 1);
    }
    // if any of bits 7 , 6, & 5 are true set bit 8
    if (((newConfig >> 7) & 1) | ((newConfig >> 6) & 1) | ((newConfig >> 5) & 1)) {
        newConfig = newConfig | (1 << 8);
    }
    return newConfig;
}


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
exports.Flow = exports.FlowNodeComponent = exports.FlowProvider = exports.StatusValveMp = exports.CommandValveMp = exports.ParameterListComponent = exports.HeatExchanger = exports.Pump = exports.Valve = void 0;
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
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
const FlowProvider_1 = __webpack_require__(/*! ./components/FlowProvider */ "./src/components/FlowProvider.tsx");
Object.defineProperty(exports, "FlowProvider", ({ enumerable: true, get: function () { return FlowProvider_1.FlowProvider; } }));
const FlowNode_1 = __webpack_require__(/*! ./components/flow/Components/FlowNode */ "./src/components/flow/Components/FlowNode.tsx");
Object.defineProperty(exports, "FlowNodeComponent", ({ enumerable: true, get: function () { return FlowNode_1.FlowNodeComponent; } }));
const Flow_1 = __webpack_require__(/*! ./components/flow/Flow */ "./src/components/flow/Flow.tsx");
Object.defineProperty(exports, "Flow", ({ enumerable: true, get: function () { return Flow_1.Flow; } }));
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
    new FlowProvider_1.FlowProviderMeta(),
    new FlowNode_1.FlowNodeComponentMeta(),
    new Flow_1.FlowMeta(),
];
// Register each component with the Perspective ComponentRegistry
components.forEach((c) => perspective_client_1.ComponentRegistry.register(c));
// Add this after registration
setTimeout(() => {
    const registered = perspective_client_1.ComponentRegistry.getMeta('hmi.component.JsonView');
    console.log('Component registered:', !!registered);
}, 1000);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG1pQ29tcG9uZW50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFxQztBQUNsRDtBQUNBO0FBQ0EsOEJBQThCLE9BQU8sa0ZBQWtGLE9BQU87QUFDOUgsR0FBRztBQUNIO0FBQ0EsaUtBQWlLLE1BQU07QUFDdkssR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFFO0FBQ047QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQztBQUNBO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXLElBQUksaUJBQWlCO0FBQ3JFO0FBQ0EsdUJBQXVCLG1CQUFtQixvQkFBb0IsMkRBQTJELElBQUk7QUFDN0g7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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d0Q7QUFZdkQsc0ZBWlEsV0FBSSxRQVlSO0FBR0wsMEJBQTBCO0FBQzFCLDBEQUFxQjtBQUVyQiw4QkFBOEI7QUFDOUIsTUFBTSxVQUFVLEdBQXlCO0lBQ3hDLElBQUksaUJBQVMsRUFBRTtJQUNmLElBQUksZUFBUSxFQUFFO0lBQ2QsSUFBSSxpQ0FBaUIsRUFBRTtJQUN2QixJQUFJLDBDQUEwQixFQUFFO0lBQ2hDLElBQUksbUNBQWtCLEVBQUU7SUFDeEIsSUFBSSxpQ0FBaUIsRUFBRTtJQUN2QixJQUFJLCtCQUFnQixFQUFFO0lBQ3RCLElBQUksZ0NBQXFCLEVBQUU7SUFDM0IsSUFBSSxlQUFRLEVBQUU7Q0FDZCxDQUFDO0FBRUYsaUVBQWlFO0FBQ2pFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFnQixFQUFFLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RSw4QkFBOEI7QUFDOUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNkLE1BQU0sVUFBVSxHQUFHLHNDQUFpQixDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0htaUNvbXBvbmVudHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9janMvaW1tZXIuY2pzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91c2UtaW1tZXIvZGlzdC91c2UtaW1tZXIuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbWF4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92MVRvVjYuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y1LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y2LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y2VG9WMS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92Ny5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXBpL2hvb2tzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXBpL2luaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS90eXBlcy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS91dGlscy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FyLXR5cGVzL3Byb2Nlc3NPYmplY3RzL2hlYXRFeGNoYW5nZXJzL2h4LXR5cGVzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXItdXRpbHMvcHJvY2Vzc09iamVjdHMvaGVhdEV4Y2hhbmdlcnMvaHgtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL0NvbW1hbmRWYWx2ZU1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvSGVhdEV4Y2hhbmdlci50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1BhcmFtZXRlckxpc3QudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9QdW1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvU3RhdHVzVmFsdmVNcC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1ZhbHZlLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL2hlYXQtZXhjaGFuZ2Vycy9IZWF0RXhjaGFuZ2VyQ29tcG91bmQudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvcHVtcHMvUHVtcENvbXBvdW5kLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3ZhbHZlLW1wL1ZhbHZlTXAudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvdmFsdmUvaXRlbS50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvdXRpbHMvY3JlYXRlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy91dGlscy9udW1iZXJVdGlsLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvZXh0ZXJuYWwgdW1kIFwiUGVyc3BlY3RpdmVDbGllbnRcIiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL2V4dGVybmFsIHVtZCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQZXJzcGVjdGl2ZUNsaWVudFwiKSwgcmVxdWlyZShcIlJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiSG1pQ29tcG9uZW50c1wiLCBbXCJQZXJzcGVjdGl2ZUNsaWVudFwiLCBcIlJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhtaUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJQZXJzcGVjdGl2ZUNsaWVudFwiKSwgcmVxdWlyZShcIlJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIbWlDb21wb25lbnRzXCJdID0gZmFjdG9yeShyb290W1wiUGVyc3BlY3RpdmVDbGllbnRcIl0sIHJvb3RbXCJSZWFjdFwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW5kdWN0aXZlYXV0b21hdGlvbl9wZXJzcGVjdGl2ZV9jbGllbnRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSA9PiB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW1tZXIudHNcbnZhciBpbW1lcl9leHBvcnRzID0ge307XG5fX2V4cG9ydChpbW1lcl9leHBvcnRzLCB7XG4gIEltbWVyOiAoKSA9PiBJbW1lcjIsXG4gIGFwcGx5UGF0Y2hlczogKCkgPT4gYXBwbHlQYXRjaGVzLFxuICBjYXN0RHJhZnQ6ICgpID0+IGNhc3REcmFmdCxcbiAgY2FzdEltbXV0YWJsZTogKCkgPT4gY2FzdEltbXV0YWJsZSxcbiAgY3JlYXRlRHJhZnQ6ICgpID0+IGNyZWF0ZURyYWZ0LFxuICBjdXJyZW50OiAoKSA9PiBjdXJyZW50LFxuICBlbmFibGVNYXBTZXQ6ICgpID0+IGVuYWJsZU1hcFNldCxcbiAgZW5hYmxlUGF0Y2hlczogKCkgPT4gZW5hYmxlUGF0Y2hlcyxcbiAgZmluaXNoRHJhZnQ6ICgpID0+IGZpbmlzaERyYWZ0LFxuICBmcmVlemU6ICgpID0+IGZyZWV6ZSxcbiAgaW1tZXJhYmxlOiAoKSA9PiBEUkFGVEFCTEUsXG4gIGlzRHJhZnQ6ICgpID0+IGlzRHJhZnQsXG4gIGlzRHJhZnRhYmxlOiAoKSA9PiBpc0RyYWZ0YWJsZSxcbiAgbm90aGluZzogKCkgPT4gTk9USElORyxcbiAgb3JpZ2luYWw6ICgpID0+IG9yaWdpbmFsLFxuICBwcm9kdWNlOiAoKSA9PiBwcm9kdWNlLFxuICBwcm9kdWNlV2l0aFBhdGNoZXM6ICgpID0+IHByb2R1Y2VXaXRoUGF0Y2hlcyxcbiAgc2V0QXV0b0ZyZWV6ZTogKCkgPT4gc2V0QXV0b0ZyZWV6ZSxcbiAgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHk6ICgpID0+IHNldFVzZVN0cmljdFNoYWxsb3dDb3B5XG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKGltbWVyX2V4cG9ydHMpO1xuXG4vLyBzcmMvdXRpbHMvZW52LnRzXG52YXIgTk9USElORyA9IFN5bWJvbC5mb3IoXCJpbW1lci1ub3RoaW5nXCIpO1xudmFyIERSQUZUQUJMRSA9IFN5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIik7XG52YXIgRFJBRlRfU1RBVEUgPSBTeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIik7XG5cbi8vIHNyYy91dGlscy9lcnJvcnMudHNcbnZhciBlcnJvcnMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBbXG4gIC8vIEFsbCBlcnJvciBjb2Rlcywgc3RhcnRpbmcgYnkgMDpcbiAgZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgcmV0dXJuIGBUaGUgcGx1Z2luIGZvciAnJHtwbHVnaW59JyBoYXMgbm90IGJlZW4gbG9hZGVkIGludG8gSW1tZXIuIFRvIGVuYWJsZSB0aGUgcGx1Z2luLCBpbXBvcnQgYW5kIGNhbGwgXFxgZW5hYmxlJHtwbHVnaW59KClcXGAgd2hlbiBpbml0aWFsaXppbmcgeW91ciBhcHBsaWNhdGlvbi5gO1xuICB9LFxuICBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBgcHJvZHVjZSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhpbmdzIHRoYXQgYXJlIGRyYWZ0YWJsZTogcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBNYXAsIFNldCBvciBjbGFzc2VzIHRoYXQgYXJlIG1hcmtlZCB3aXRoICdbaW1tZXJhYmxlXTogdHJ1ZScuIEdvdCAnJHt0aGluZ30nYDtcbiAgfSxcbiAgXCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLFxuICBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IHVzZSBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZC4gRGlkIHlvdSBwYXNzIGFuIG9iamVjdCBmcm9tIGluc2lkZSBhbiBpbW1lciBmdW5jdGlvbiB0byBhbiBhc3luYyBwcm9jZXNzPyBcIiArIGRhdGE7XG4gIH0sXG4gIFwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIixcbiAgXCJJbW1lciBmb3JiaWRzIGNpcmN1bGFyIHJlZmVyZW5jZXNcIixcbiAgXCJUaGUgZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb25cIixcbiAgXCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIixcbiAgXCJGaXJzdCBhcmd1bWVudCB0byBgY3JlYXRlRHJhZnRgIG11c3QgYmUgYSBwbGFpbiBvYmplY3QsIGFuIGFycmF5LCBvciBhbiBpbW1lcmFibGUgb2JqZWN0XCIsXG4gIFwiRmlyc3QgYXJndW1lbnQgdG8gYGZpbmlzaERyYWZ0YCBtdXN0IGJlIGEgZHJhZnQgcmV0dXJuZWQgYnkgYGNyZWF0ZURyYWZ0YFwiLFxuICBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBgJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiAke3RoaW5nfWA7XG4gIH0sXG4gIFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIixcbiAgXCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuICBcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLFxuICBcIkltbWVyIG9ubHkgc3VwcG9ydHMgc2V0dGluZyBhcnJheSBpbmRpY2VzIGFuZCB0aGUgJ2xlbmd0aCcgcHJvcGVydHlcIixcbiAgZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gYCdvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6ICR7dGhpbmd9YDtcbiAgfVxuICAvLyBOb3RlOiBpZiBtb3JlIGVycm9ycyBhcmUgYWRkZWQsIHRoZSBlcnJvck9mZnNldCBpbiBQYXRjaGVzLnRzIHNob3VsZCBiZSBpbmNyZWFzZWRcbiAgLy8gU2VlIFBhdGNoZXMudHMgZm9yIGFkZGl0aW9uYWwgZXJyb3JzXG5dIDogW107XG5mdW5jdGlvbiBkaWUoZXJyb3IsIC4uLmFyZ3MpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnN0IGUgPSBlcnJvcnNbZXJyb3JdO1xuICAgIGNvbnN0IG1zZyA9IHR5cGVvZiBlID09PSBcImZ1bmN0aW9uXCIgPyBlLmFwcGx5KG51bGwsIGFyZ3MpIDogZTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFtJbW1lcl0gJHttc2d9YCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiAke2Vycm9yfS4gRnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZmBcbiAgKTtcbn1cblxuLy8gc3JjL3V0aWxzL2NvbW1vbi50c1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuZnVuY3Rpb24gaXNEcmFmdCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiAhIXZhbHVlW0RSQUZUX1NUQVRFXTtcbn1cbmZ1bmN0aW9uIGlzRHJhZnRhYmxlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpXG4gICAgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgISF2YWx1ZVtEUkFGVEFCTEVdIHx8ICEhdmFsdWUuY29uc3RydWN0b3I/LltEUkFGVEFCTEVdIHx8IGlzTWFwKHZhbHVlKSB8fCBpc1NldCh2YWx1ZSk7XG59XG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IGdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgQ3RvciA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICBpZiAoQ3RvciA9PT0gT2JqZWN0KVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gXCJmdW5jdGlvblwiICYmIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoQ3RvcikgPT09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5mdW5jdGlvbiBvcmlnaW5hbCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnQodmFsdWUpKVxuICAgIGRpZSgxNSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWVbRFJBRlRfU1RBVEVdLmJhc2VfO1xufVxuZnVuY3Rpb24gZWFjaChvYmosIGl0ZXIpIHtcbiAgaWYgKGdldEFyY2h0eXBlKG9iaikgPT09IDAgLyogT2JqZWN0ICovKSB7XG4gICAgUmVmbGVjdC5vd25LZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpdGVyKGtleSwgb2JqW2tleV0sIG9iaik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4gaXRlcihpbmRleCwgZW50cnksIG9iaikpO1xuICB9XG59XG5mdW5jdGlvbiBnZXRBcmNodHlwZSh0aGluZykge1xuICBjb25zdCBzdGF0ZSA9IHRoaW5nW0RSQUZUX1NUQVRFXTtcbiAgcmV0dXJuIHN0YXRlID8gc3RhdGUudHlwZV8gOiBBcnJheS5pc0FycmF5KHRoaW5nKSA/IDEgLyogQXJyYXkgKi8gOiBpc01hcCh0aGluZykgPyAyIC8qIE1hcCAqLyA6IGlzU2V0KHRoaW5nKSA/IDMgLyogU2V0ICovIDogMCAvKiBPYmplY3QgKi87XG59XG5mdW5jdGlvbiBoYXModGhpbmcsIHByb3ApIHtcbiAgcmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gMiAvKiBNYXAgKi8gPyB0aGluZy5oYXMocHJvcCkgOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpbmcsIHByb3ApO1xufVxuZnVuY3Rpb24gZ2V0KHRoaW5nLCBwcm9wKSB7XG4gIHJldHVybiBnZXRBcmNodHlwZSh0aGluZykgPT09IDIgLyogTWFwICovID8gdGhpbmcuZ2V0KHByb3ApIDogdGhpbmdbcHJvcF07XG59XG5mdW5jdGlvbiBzZXQodGhpbmcsIHByb3BPck9sZFZhbHVlLCB2YWx1ZSkge1xuICBjb25zdCB0ID0gZ2V0QXJjaHR5cGUodGhpbmcpO1xuICBpZiAodCA9PT0gMiAvKiBNYXAgKi8pXG4gICAgdGhpbmcuc2V0KHByb3BPck9sZFZhbHVlLCB2YWx1ZSk7XG4gIGVsc2UgaWYgKHQgPT09IDMgLyogU2V0ICovKSB7XG4gICAgdGhpbmcuYWRkKHZhbHVlKTtcbiAgfSBlbHNlXG4gICAgdGhpbmdbcHJvcE9yT2xkVmFsdWVdID0gdmFsdWU7XG59XG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzTWFwKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgTWFwO1xufVxuZnVuY3Rpb24gaXNTZXQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBTZXQ7XG59XG5mdW5jdGlvbiBsYXRlc3Qoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLmNvcHlfIHx8IHN0YXRlLmJhc2VfO1xufVxuZnVuY3Rpb24gc2hhbGxvd0NvcHkoYmFzZSwgc3RyaWN0KSB7XG4gIGlmIChpc01hcChiYXNlKSkge1xuICAgIHJldHVybiBuZXcgTWFwKGJhc2UpO1xuICB9XG4gIGlmIChpc1NldChiYXNlKSkge1xuICAgIHJldHVybiBuZXcgU2V0KGJhc2UpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGJhc2UpKVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChiYXNlKTtcbiAgY29uc3QgaXNQbGFpbiA9IGlzUGxhaW5PYmplY3QoYmFzZSk7XG4gIGlmIChzdHJpY3QgPT09IHRydWUgfHwgc3RyaWN0ID09PSBcImNsYXNzX29ubHlcIiAmJiAhaXNQbGFpbikge1xuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYmFzZSk7XG4gICAgZGVsZXRlIGRlc2NyaXB0b3JzW0RSQUZUX1NUQVRFXTtcbiAgICBsZXQga2V5cyA9IFJlZmxlY3Qub3duS2V5cyhkZXNjcmlwdG9ycyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgY29uc3QgZGVzYyA9IGRlc2NyaXB0b3JzW2tleV07XG4gICAgICBpZiAoZGVzYy53cml0YWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChkZXNjLmdldCB8fCBkZXNjLnNldClcbiAgICAgICAgZGVzY3JpcHRvcnNba2V5XSA9IHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgLy8gY291bGQgbGl2ZSB3aXRoICEhZGVzYy5zZXQgYXMgd2VsbCBoZXJlLi4uXG4gICAgICAgICAgZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgICAgIHZhbHVlOiBiYXNlW2tleV1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoZ2V0UHJvdG90eXBlT2YoYmFzZSksIGRlc2NyaXB0b3JzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcm90byA9IGdldFByb3RvdHlwZU9mKGJhc2UpO1xuICAgIGlmIChwcm90byAhPT0gbnVsbCAmJiBpc1BsYWluKSB7XG4gICAgICByZXR1cm4geyAuLi5iYXNlIH07XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9iaiwgYmFzZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZyZWV6ZShvYmosIGRlZXAgPSBmYWxzZSkge1xuICBpZiAoaXNGcm96ZW4ob2JqKSB8fCBpc0RyYWZ0KG9iaikgfHwgIWlzRHJhZnRhYmxlKG9iaikpXG4gICAgcmV0dXJuIG9iajtcbiAgaWYgKGdldEFyY2h0eXBlKG9iaikgPiAxKSB7XG4gICAgb2JqLnNldCA9IG9iai5hZGQgPSBvYmouY2xlYXIgPSBvYmouZGVsZXRlID0gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zO1xuICB9XG4gIE9iamVjdC5mcmVlemUob2JqKTtcbiAgaWYgKGRlZXApXG4gICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IGZyZWV6ZSh2YWx1ZSwgdHJ1ZSkpO1xuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zKCkge1xuICBkaWUoMik7XG59XG5mdW5jdGlvbiBpc0Zyb3plbihvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5pc0Zyb3plbihvYmopO1xufVxuXG4vLyBzcmMvdXRpbHMvcGx1Z2lucy50c1xudmFyIHBsdWdpbnMgPSB7fTtcbmZ1bmN0aW9uIGdldFBsdWdpbihwbHVnaW5LZXkpIHtcbiAgY29uc3QgcGx1Z2luID0gcGx1Z2luc1twbHVnaW5LZXldO1xuICBpZiAoIXBsdWdpbikge1xuICAgIGRpZSgwLCBwbHVnaW5LZXkpO1xuICB9XG4gIHJldHVybiBwbHVnaW47XG59XG5mdW5jdGlvbiBsb2FkUGx1Z2luKHBsdWdpbktleSwgaW1wbGVtZW50YXRpb24pIHtcbiAgaWYgKCFwbHVnaW5zW3BsdWdpbktleV0pXG4gICAgcGx1Z2luc1twbHVnaW5LZXldID0gaW1wbGVtZW50YXRpb247XG59XG5cbi8vIHNyYy9jb3JlL3Njb3BlLnRzXG52YXIgY3VycmVudFNjb3BlO1xuZnVuY3Rpb24gZ2V0Q3VycmVudFNjb3BlKCkge1xuICByZXR1cm4gY3VycmVudFNjb3BlO1xufVxuZnVuY3Rpb24gY3JlYXRlU2NvcGUocGFyZW50XywgaW1tZXJfKSB7XG4gIHJldHVybiB7XG4gICAgZHJhZnRzXzogW10sXG4gICAgcGFyZW50XyxcbiAgICBpbW1lcl8sXG4gICAgLy8gV2hlbmV2ZXIgdGhlIG1vZGlmaWVkIGRyYWZ0IGNvbnRhaW5zIGEgZHJhZnQgZnJvbSBhbm90aGVyIHNjb3BlLCB3ZVxuICAgIC8vIG5lZWQgdG8gcHJldmVudCBhdXRvLWZyZWV6aW5nIHNvIHRoZSB1bm93bmVkIGRyYWZ0IGNhbiBiZSBmaW5hbGl6ZWQuXG4gICAgY2FuQXV0b0ZyZWV6ZV86IHRydWUsXG4gICAgdW5maW5hbGl6ZWREcmFmdHNfOiAwXG4gIH07XG59XG5mdW5jdGlvbiB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcikge1xuICBpZiAocGF0Y2hMaXN0ZW5lcikge1xuICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIik7XG4gICAgc2NvcGUucGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5pbnZlcnNlUGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5wYXRjaExpc3RlbmVyXyA9IHBhdGNoTGlzdGVuZXI7XG4gIH1cbn1cbmZ1bmN0aW9uIHJldm9rZVNjb3BlKHNjb3BlKSB7XG4gIGxlYXZlU2NvcGUoc2NvcGUpO1xuICBzY29wZS5kcmFmdHNfLmZvckVhY2gocmV2b2tlRHJhZnQpO1xuICBzY29wZS5kcmFmdHNfID0gbnVsbDtcbn1cbmZ1bmN0aW9uIGxlYXZlU2NvcGUoc2NvcGUpIHtcbiAgaWYgKHNjb3BlID09PSBjdXJyZW50U2NvcGUpIHtcbiAgICBjdXJyZW50U2NvcGUgPSBzY29wZS5wYXJlbnRfO1xuICB9XG59XG5mdW5jdGlvbiBlbnRlclNjb3BlKGltbWVyMikge1xuICByZXR1cm4gY3VycmVudFNjb3BlID0gY3JlYXRlU2NvcGUoY3VycmVudFNjb3BlLCBpbW1lcjIpO1xufVxuZnVuY3Rpb24gcmV2b2tlRHJhZnQoZHJhZnQpIHtcbiAgY29uc3Qgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG4gIGlmIChzdGF0ZS50eXBlXyA9PT0gMCAvKiBPYmplY3QgKi8gfHwgc3RhdGUudHlwZV8gPT09IDEgLyogQXJyYXkgKi8pXG4gICAgc3RhdGUucmV2b2tlXygpO1xuICBlbHNlXG4gICAgc3RhdGUucmV2b2tlZF8gPSB0cnVlO1xufVxuXG4vLyBzcmMvY29yZS9maW5hbGl6ZS50c1xuZnVuY3Rpb24gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKSB7XG4gIHNjb3BlLnVuZmluYWxpemVkRHJhZnRzXyA9IHNjb3BlLmRyYWZ0c18ubGVuZ3RoO1xuICBjb25zdCBiYXNlRHJhZnQgPSBzY29wZS5kcmFmdHNfWzBdO1xuICBjb25zdCBpc1JlcGxhY2VkID0gcmVzdWx0ICE9PSB2b2lkIDAgJiYgcmVzdWx0ICE9PSBiYXNlRHJhZnQ7XG4gIGlmIChpc1JlcGxhY2VkKSB7XG4gICAgaWYgKGJhc2VEcmFmdFtEUkFGVF9TVEFURV0ubW9kaWZpZWRfKSB7XG4gICAgICByZXZva2VTY29wZShzY29wZSk7XG4gICAgICBkaWUoNCk7XG4gICAgfVxuICAgIGlmIChpc0RyYWZ0YWJsZShyZXN1bHQpKSB7XG4gICAgICByZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgcmVzdWx0KTtcbiAgICAgIGlmICghc2NvcGUucGFyZW50XylcbiAgICAgICAgbWF5YmVGcmVlemUoc2NvcGUsIHJlc3VsdCk7XG4gICAgfVxuICAgIGlmIChzY29wZS5wYXRjaGVzXykge1xuICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oXG4gICAgICAgIGJhc2VEcmFmdFtEUkFGVF9TVEFURV0uYmFzZV8sXG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgc2NvcGUucGF0Y2hlc18sXG4gICAgICAgIHNjb3BlLmludmVyc2VQYXRjaGVzX1xuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIGJhc2VEcmFmdCwgW10pO1xuICB9XG4gIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgaWYgKHNjb3BlLnBhdGNoZXNfKSB7XG4gICAgc2NvcGUucGF0Y2hMaXN0ZW5lcl8oc2NvcGUucGF0Y2hlc18sIHNjb3BlLmludmVyc2VQYXRjaGVzXyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdCAhPT0gTk9USElORyA/IHJlc3VsdCA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGZpbmFsaXplKHJvb3RTY29wZSwgdmFsdWUsIHBhdGgpIHtcbiAgaWYgKGlzRnJvemVuKHZhbHVlKSlcbiAgICByZXR1cm4gdmFsdWU7XG4gIGNvbnN0IHN0YXRlID0gdmFsdWVbRFJBRlRfU1RBVEVdO1xuICBpZiAoIXN0YXRlKSB7XG4gICAgZWFjaChcbiAgICAgIHZhbHVlLFxuICAgICAgKGtleSwgY2hpbGRWYWx1ZSkgPT4gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCB2YWx1ZSwga2V5LCBjaGlsZFZhbHVlLCBwYXRoKVxuICAgICk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChzdGF0ZS5zY29wZV8gIT09IHJvb3RTY29wZSlcbiAgICByZXR1cm4gdmFsdWU7XG4gIGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG4gICAgbWF5YmVGcmVlemUocm9vdFNjb3BlLCBzdGF0ZS5iYXNlXywgdHJ1ZSk7XG4gICAgcmV0dXJuIHN0YXRlLmJhc2VfO1xuICB9XG4gIGlmICghc3RhdGUuZmluYWxpemVkXykge1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSB0cnVlO1xuICAgIHN0YXRlLnNjb3BlXy51bmZpbmFsaXplZERyYWZ0c18tLTtcbiAgICBjb25zdCByZXN1bHQgPSBzdGF0ZS5jb3B5XztcbiAgICBsZXQgcmVzdWx0RWFjaCA9IHJlc3VsdDtcbiAgICBsZXQgaXNTZXQyID0gZmFsc2U7XG4gICAgaWYgKHN0YXRlLnR5cGVfID09PSAzIC8qIFNldCAqLykge1xuICAgICAgcmVzdWx0RWFjaCA9IG5ldyBTZXQocmVzdWx0KTtcbiAgICAgIHJlc3VsdC5jbGVhcigpO1xuICAgICAgaXNTZXQyID0gdHJ1ZTtcbiAgICB9XG4gICAgZWFjaChcbiAgICAgIHJlc3VsdEVhY2gsXG4gICAgICAoa2V5LCBjaGlsZFZhbHVlKSA9PiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgc3RhdGUsIHJlc3VsdCwga2V5LCBjaGlsZFZhbHVlLCBwYXRoLCBpc1NldDIpXG4gICAgKTtcbiAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIHJlc3VsdCwgZmFsc2UpO1xuICAgIGlmIChwYXRoICYmIHJvb3RTY29wZS5wYXRjaGVzXykge1xuICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVBhdGNoZXNfKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcm9vdFNjb3BlLnBhdGNoZXNfLFxuICAgICAgICByb290U2NvcGUuaW52ZXJzZVBhdGNoZXNfXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGUuY29weV87XG59XG5mdW5jdGlvbiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgcGFyZW50U3RhdGUsIHRhcmdldE9iamVjdCwgcHJvcCwgY2hpbGRWYWx1ZSwgcm9vdFBhdGgsIHRhcmdldElzU2V0KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgY2hpbGRWYWx1ZSA9PT0gdGFyZ2V0T2JqZWN0KVxuICAgIGRpZSg1KTtcbiAgaWYgKGlzRHJhZnQoY2hpbGRWYWx1ZSkpIHtcbiAgICBjb25zdCBwYXRoID0gcm9vdFBhdGggJiYgcGFyZW50U3RhdGUgJiYgcGFyZW50U3RhdGUudHlwZV8gIT09IDMgLyogU2V0ICovICYmIC8vIFNldCBvYmplY3RzIGFyZSBhdG9taWMgc2luY2UgdGhleSBoYXZlIG5vIGtleXMuXG4gICAgIWhhcyhwYXJlbnRTdGF0ZS5hc3NpZ25lZF8sIHByb3ApID8gcm9vdFBhdGguY29uY2F0KHByb3ApIDogdm9pZCAwO1xuICAgIGNvbnN0IHJlcyA9IGZpbmFsaXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSwgcGF0aCk7XG4gICAgc2V0KHRhcmdldE9iamVjdCwgcHJvcCwgcmVzKTtcbiAgICBpZiAoaXNEcmFmdChyZXMpKSB7XG4gICAgICByb290U2NvcGUuY2FuQXV0b0ZyZWV6ZV8gPSBmYWxzZTtcbiAgICB9IGVsc2VcbiAgICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICh0YXJnZXRJc1NldCkge1xuICAgIHRhcmdldE9iamVjdC5hZGQoY2hpbGRWYWx1ZSk7XG4gIH1cbiAgaWYgKGlzRHJhZnRhYmxlKGNoaWxkVmFsdWUpICYmICFpc0Zyb3plbihjaGlsZFZhbHVlKSkge1xuICAgIGlmICghcm9vdFNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiByb290U2NvcGUudW5maW5hbGl6ZWREcmFmdHNfIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpO1xuICAgIGlmICgoIXBhcmVudFN0YXRlIHx8ICFwYXJlbnRTdGF0ZS5zY29wZV8ucGFyZW50XykgJiYgdHlwZW9mIHByb3AgIT09IFwic3ltYm9sXCIgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRhcmdldE9iamVjdCwgcHJvcCkpXG4gICAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiBtYXliZUZyZWV6ZShzY29wZSwgdmFsdWUsIGRlZXAgPSBmYWxzZSkge1xuICBpZiAoIXNjb3BlLnBhcmVudF8gJiYgc2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHNjb3BlLmNhbkF1dG9GcmVlemVfKSB7XG4gICAgZnJlZXplKHZhbHVlLCBkZWVwKTtcbiAgfVxufVxuXG4vLyBzcmMvY29yZS9wcm94eS50c1xuZnVuY3Rpb24gY3JlYXRlUHJveHlQcm94eShiYXNlLCBwYXJlbnQpIHtcbiAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYmFzZSk7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIHR5cGVfOiBpc0FycmF5ID8gMSAvKiBBcnJheSAqLyA6IDAgLyogT2JqZWN0ICovLFxuICAgIC8vIFRyYWNrIHdoaWNoIHByb2R1Y2UgY2FsbCB0aGlzIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAvLyBUcnVlIGZvciBib3RoIHNoYWxsb3cgYW5kIGRlZXAgY2hhbmdlcy5cbiAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgIC8vIFVzZWQgZHVyaW5nIGZpbmFsaXphdGlvbi5cbiAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAvLyBUcmFjayB3aGljaCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBhc3NpZ25lZCAodHJ1ZSkgb3IgZGVsZXRlZCAoZmFsc2UpLlxuICAgIGFzc2lnbmVkXzoge30sXG4gICAgLy8gVGhlIHBhcmVudCBkcmFmdCBzdGF0ZS5cbiAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgLy8gVGhlIGJhc2Ugc3RhdGUuXG4gICAgYmFzZV86IGJhc2UsXG4gICAgLy8gVGhlIGJhc2UgcHJveHkuXG4gICAgZHJhZnRfOiBudWxsLFxuICAgIC8vIHNldCBiZWxvd1xuICAgIC8vIFRoZSBiYXNlIGNvcHkgd2l0aCBhbnkgdXBkYXRlZCB2YWx1ZXMuXG4gICAgY29weV86IG51bGwsXG4gICAgLy8gQ2FsbGVkIGJ5IHRoZSBgcHJvZHVjZWAgZnVuY3Rpb24uXG4gICAgcmV2b2tlXzogbnVsbCxcbiAgICBpc01hbnVhbF86IGZhbHNlXG4gIH07XG4gIGxldCB0YXJnZXQgPSBzdGF0ZTtcbiAgbGV0IHRyYXBzID0gb2JqZWN0VHJhcHM7XG4gIGlmIChpc0FycmF5KSB7XG4gICAgdGFyZ2V0ID0gW3N0YXRlXTtcbiAgICB0cmFwcyA9IGFycmF5VHJhcHM7XG4gIH1cbiAgY29uc3QgeyByZXZva2UsIHByb3h5IH0gPSBQcm94eS5yZXZvY2FibGUodGFyZ2V0LCB0cmFwcyk7XG4gIHN0YXRlLmRyYWZ0XyA9IHByb3h5O1xuICBzdGF0ZS5yZXZva2VfID0gcmV2b2tlO1xuICByZXR1cm4gcHJveHk7XG59XG52YXIgb2JqZWN0VHJhcHMgPSB7XG4gIGdldChzdGF0ZSwgcHJvcCkge1xuICAgIGlmIChwcm9wID09PSBEUkFGVF9TVEFURSlcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICBjb25zdCBzb3VyY2UgPSBsYXRlc3Qoc3RhdGUpO1xuICAgIGlmICghaGFzKHNvdXJjZSwgcHJvcCkpIHtcbiAgICAgIHJldHVybiByZWFkUHJvcEZyb21Qcm90byhzdGF0ZSwgc291cmNlLCBwcm9wKTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBzb3VyY2VbcHJvcF07XG4gICAgaWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApKSB7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV9bcHJvcF0gPSBjcmVhdGVQcm94eSh2YWx1ZSwgc3RhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIGhhcyhzdGF0ZSwgcHJvcCkge1xuICAgIHJldHVybiBwcm9wIGluIGxhdGVzdChzdGF0ZSk7XG4gIH0sXG4gIG93bktleXMoc3RhdGUpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKGxhdGVzdChzdGF0ZSkpO1xuICB9LFxuICBzZXQoc3RhdGUsIHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgZGVzYyA9IGdldERlc2NyaXB0b3JGcm9tUHJvdG8obGF0ZXN0KHN0YXRlKSwgcHJvcCk7XG4gICAgaWYgKGRlc2M/LnNldCkge1xuICAgICAgZGVzYy5zZXQuY2FsbChzdGF0ZS5kcmFmdF8sIHZhbHVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgICAgY29uc3QgY3VycmVudDIgPSBwZWVrKGxhdGVzdChzdGF0ZSksIHByb3ApO1xuICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gY3VycmVudDI/LltEUkFGVF9TVEFURV07XG4gICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5iYXNlXyA9PT0gdmFsdWUpIHtcbiAgICAgICAgc3RhdGUuY29weV9bcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzKHZhbHVlLCBjdXJyZW50MikgJiYgKHZhbHVlICE9PSB2b2lkIDAgfHwgaGFzKHN0YXRlLmJhc2VfLCBwcm9wKSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY29weV9bcHJvcF0gPT09IHZhbHVlICYmIC8vIHNwZWNpYWwgY2FzZTogaGFuZGxlIG5ldyBwcm9wcyB3aXRoIHZhbHVlICd1bmRlZmluZWQnXG4gICAgKHZhbHVlICE9PSB2b2lkIDAgfHwgcHJvcCBpbiBzdGF0ZS5jb3B5XykgfHwgLy8gc3BlY2lhbCBjYXNlOiBOYU5cbiAgICBOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc05hTihzdGF0ZS5jb3B5X1twcm9wXSkpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBzdGF0ZS5jb3B5X1twcm9wXSA9IHZhbHVlO1xuICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5KHN0YXRlLCBwcm9wKSB7XG4gICAgaWYgKHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApICE9PSB2b2lkIDAgfHwgcHJvcCBpbiBzdGF0ZS5iYXNlXykge1xuICAgICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gZmFsc2U7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZS5hc3NpZ25lZF9bcHJvcF07XG4gICAgfVxuICAgIGlmIChzdGF0ZS5jb3B5Xykge1xuICAgICAgZGVsZXRlIHN0YXRlLmNvcHlfW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgLy8gTm90ZTogV2UgbmV2ZXIgY29lcmNlIGBkZXNjLnZhbHVlYCBpbnRvIGFuIEltbWVyIGRyYWZ0LCBiZWNhdXNlIHdlIGNhbid0IG1ha2VcbiAgLy8gdGhlIHNhbWUgZ3VhcmFudGVlIGluIEVTNSBtb2RlLlxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3RhdGUsIHByb3ApIHtcbiAgICBjb25zdCBvd25lciA9IGxhdGVzdChzdGF0ZSk7XG4gICAgY29uc3QgZGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG93bmVyLCBwcm9wKTtcbiAgICBpZiAoIWRlc2MpXG4gICAgICByZXR1cm4gZGVzYztcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHN0YXRlLnR5cGVfICE9PSAxIC8qIEFycmF5ICovIHx8IHByb3AgIT09IFwibGVuZ3RoXCIsXG4gICAgICBlbnVtZXJhYmxlOiBkZXNjLmVudW1lcmFibGUsXG4gICAgICB2YWx1ZTogb3duZXJbcHJvcF1cbiAgICB9O1xuICB9LFxuICBkZWZpbmVQcm9wZXJ0eSgpIHtcbiAgICBkaWUoMTEpO1xuICB9LFxuICBnZXRQcm90b3R5cGVPZihzdGF0ZSkge1xuICAgIHJldHVybiBnZXRQcm90b3R5cGVPZihzdGF0ZS5iYXNlXyk7XG4gIH0sXG4gIHNldFByb3RvdHlwZU9mKCkge1xuICAgIGRpZSgxMik7XG4gIH1cbn07XG52YXIgYXJyYXlUcmFwcyA9IHt9O1xuZWFjaChvYmplY3RUcmFwcywgKGtleSwgZm4pID0+IHtcbiAgYXJyYXlUcmFwc1trZXldID0gZnVuY3Rpb24oKSB7XG4gICAgYXJndW1lbnRzWzBdID0gYXJndW1lbnRzWzBdWzBdO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSk7XG5hcnJheVRyYXBzLmRlbGV0ZVByb3BlcnR5ID0gZnVuY3Rpb24oc3RhdGUsIHByb3ApIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc05hTihwYXJzZUludChwcm9wKSkpXG4gICAgZGllKDEzKTtcbiAgcmV0dXJuIGFycmF5VHJhcHMuc2V0LmNhbGwodGhpcywgc3RhdGUsIHByb3AsIHZvaWQgMCk7XG59O1xuYXJyYXlUcmFwcy5zZXQgPSBmdW5jdGlvbihzdGF0ZSwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBwcm9wICE9PSBcImxlbmd0aFwiICYmIGlzTmFOKHBhcnNlSW50KHByb3ApKSlcbiAgICBkaWUoMTQpO1xuICByZXR1cm4gb2JqZWN0VHJhcHMuc2V0LmNhbGwodGhpcywgc3RhdGVbMF0sIHByb3AsIHZhbHVlLCBzdGF0ZVswXSk7XG59O1xuZnVuY3Rpb24gcGVlayhkcmFmdCwgcHJvcCkge1xuICBjb25zdCBzdGF0ZSA9IGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgY29uc3Qgc291cmNlID0gc3RhdGUgPyBsYXRlc3Qoc3RhdGUpIDogZHJhZnQ7XG4gIHJldHVybiBzb3VyY2VbcHJvcF07XG59XG5mdW5jdGlvbiByZWFkUHJvcEZyb21Qcm90byhzdGF0ZSwgc291cmNlLCBwcm9wKSB7XG4gIGNvbnN0IGRlc2MgPSBnZXREZXNjcmlwdG9yRnJvbVByb3RvKHNvdXJjZSwgcHJvcCk7XG4gIHJldHVybiBkZXNjID8gYHZhbHVlYCBpbiBkZXNjID8gZGVzYy52YWx1ZSA6IChcbiAgICAvLyBUaGlzIGlzIGEgdmVyeSBzcGVjaWFsIGNhc2UsIGlmIHRoZSBwcm9wIGlzIGEgZ2V0dGVyIGRlZmluZWQgYnkgdGhlXG4gICAgLy8gcHJvdG90eXBlLCB3ZSBzaG91bGQgaW52b2tlIGl0IHdpdGggdGhlIGRyYWZ0IGFzIGNvbnRleHQhXG4gICAgZGVzYy5nZXQ/LmNhbGwoc3RhdGUuZHJhZnRfKVxuICApIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApIHtcbiAgaWYgKCEocHJvcCBpbiBzb3VyY2UpKVxuICAgIHJldHVybiB2b2lkIDA7XG4gIGxldCBwcm90byA9IGdldFByb3RvdHlwZU9mKHNvdXJjZSk7XG4gIHdoaWxlIChwcm90bykge1xuICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm9wKTtcbiAgICBpZiAoZGVzYylcbiAgICAgIHJldHVybiBkZXNjO1xuICAgIHByb3RvID0gZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG5mdW5jdGlvbiBtYXJrQ2hhbmdlZChzdGF0ZSkge1xuICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgIHN0YXRlLm1vZGlmaWVkXyA9IHRydWU7XG4gICAgaWYgKHN0YXRlLnBhcmVudF8pIHtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlLnBhcmVudF8pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gcHJlcGFyZUNvcHkoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgIHN0YXRlLmNvcHlfID0gc2hhbGxvd0NvcHkoXG4gICAgICBzdGF0ZS5iYXNlXyxcbiAgICAgIHN0YXRlLnNjb3BlXy5pbW1lcl8udXNlU3RyaWN0U2hhbGxvd0NvcHlfXG4gICAgKTtcbiAgfVxufVxuXG4vLyBzcmMvY29yZS9pbW1lckNsYXNzLnRzXG52YXIgSW1tZXIyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmF1dG9GcmVlemVfID0gdHJ1ZTtcbiAgICB0aGlzLnVzZVN0cmljdFNoYWxsb3dDb3B5XyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoZSBgcHJvZHVjZWAgZnVuY3Rpb24gdGFrZXMgYSB2YWx1ZSBhbmQgYSBcInJlY2lwZSBmdW5jdGlvblwiICh3aG9zZVxuICAgICAqIHJldHVybiB2YWx1ZSBvZnRlbiBkZXBlbmRzIG9uIHRoZSBiYXNlIHN0YXRlKS4gVGhlIHJlY2lwZSBmdW5jdGlvbiBpc1xuICAgICAqIGZyZWUgdG8gbXV0YXRlIGl0cyBmaXJzdCBhcmd1bWVudCBob3dldmVyIGl0IHdhbnRzLiBBbGwgbXV0YXRpb25zIGFyZVxuICAgICAqIG9ubHkgZXZlciBhcHBsaWVkIHRvIGEgX19jb3B5X18gb2YgdGhlIGJhc2Ugc3RhdGUuXG4gICAgICpcbiAgICAgKiBQYXNzIG9ubHkgYSBmdW5jdGlvbiB0byBjcmVhdGUgYSBcImN1cnJpZWQgcHJvZHVjZXJcIiB3aGljaCByZWxpZXZlcyB5b3VcbiAgICAgKiBmcm9tIHBhc3NpbmcgdGhlIHJlY2lwZSBmdW5jdGlvbiBldmVyeSB0aW1lLlxuICAgICAqXG4gICAgICogT25seSBwbGFpbiBvYmplY3RzIGFuZCBhcnJheXMgYXJlIG1hZGUgbXV0YWJsZS4gQWxsIG90aGVyIG9iamVjdHMgYXJlXG4gICAgICogY29uc2lkZXJlZCB1bmNvcHlhYmxlLlxuICAgICAqXG4gICAgICogTm90ZTogVGhpcyBmdW5jdGlvbiBpcyBfX2JvdW5kX18gdG8gaXRzIGBJbW1lcmAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gYmFzZSAtIHRoZSBpbml0aWFsIHN0YXRlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVjaXBlIC0gZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIHByb3h5IG9mIHRoZSBiYXNlIHN0YXRlIGFzIGZpcnN0IGFyZ3VtZW50IGFuZCB3aGljaCBjYW4gYmUgZnJlZWx5IG1vZGlmaWVkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcGF0Y2hMaXN0ZW5lciAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCBhbGwgdGhlIHBhdGNoZXMgcHJvZHVjZWQgaGVyZVxuICAgICAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxuICAgICAqL1xuICAgIHRoaXMucHJvZHVjZSA9IChiYXNlLCByZWNpcGUsIHBhdGNoTGlzdGVuZXIpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjb25zdCBkZWZhdWx0QmFzZSA9IHJlY2lwZTtcbiAgICAgICAgcmVjaXBlID0gYmFzZTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkUHJvZHVjZShiYXNlMiA9IGRlZmF1bHRCYXNlLCAuLi5hcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYucHJvZHVjZShiYXNlMiwgKGRyYWZ0KSA9PiByZWNpcGUuY2FsbCh0aGlzLCBkcmFmdCwgLi4uYXJncykpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZGllKDYpO1xuICAgICAgaWYgKHBhdGNoTGlzdGVuZXIgIT09IHZvaWQgMCAmJiB0eXBlb2YgcGF0Y2hMaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBkaWUoNyk7XG4gICAgICBsZXQgcmVzdWx0O1xuICAgICAgaWYgKGlzRHJhZnRhYmxlKGJhc2UpKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gZW50ZXJTY29wZSh0aGlzKTtcbiAgICAgICAgY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShiYXNlLCB2b2lkIDApO1xuICAgICAgICBsZXQgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlY2lwZShwcm94eSk7XG4gICAgICAgICAgaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoaGFzRXJyb3IpXG4gICAgICAgICAgICByZXZva2VTY29wZShzY29wZSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgbGVhdmVTY29wZShzY29wZSk7XG4gICAgICAgIH1cbiAgICAgICAgdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWJhc2UgfHwgdHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVjaXBlKGJhc2UpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApXG4gICAgICAgICAgcmVzdWx0ID0gYmFzZTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gTk9USElORylcbiAgICAgICAgICByZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIGlmICh0aGlzLmF1dG9GcmVlemVfKVxuICAgICAgICAgIGZyZWV6ZShyZXN1bHQsIHRydWUpO1xuICAgICAgICBpZiAocGF0Y2hMaXN0ZW5lcikge1xuICAgICAgICAgIGNvbnN0IHAgPSBbXTtcbiAgICAgICAgICBjb25zdCBpcCA9IFtdO1xuICAgICAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKGJhc2UsIHJlc3VsdCwgcCwgaXApO1xuICAgICAgICAgIHBhdGNoTGlzdGVuZXIocCwgaXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGVsc2VcbiAgICAgICAgZGllKDEsIGJhc2UpO1xuICAgIH07XG4gICAgdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMgPSAoYmFzZSwgcmVjaXBlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gKHN0YXRlLCAuLi5hcmdzKSA9PiB0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyhzdGF0ZSwgKGRyYWZ0KSA9PiBiYXNlKGRyYWZ0LCAuLi5hcmdzKSk7XG4gICAgICB9XG4gICAgICBsZXQgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXM7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb2R1Y2UoYmFzZSwgcmVjaXBlLCAocCwgaXApID0+IHtcbiAgICAgICAgcGF0Y2hlcyA9IHA7XG4gICAgICAgIGludmVyc2VQYXRjaGVzID0gaXA7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbcmVzdWx0LCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc107XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZz8uYXV0b0ZyZWV6ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICB0aGlzLnNldEF1dG9GcmVlemUoY29uZmlnLmF1dG9GcmVlemUpO1xuICAgIGlmICh0eXBlb2YgY29uZmlnPy51c2VTdHJpY3RTaGFsbG93Q29weSA9PT0gXCJib29sZWFuXCIpXG4gICAgICB0aGlzLnNldFVzZVN0cmljdFNoYWxsb3dDb3B5KGNvbmZpZy51c2VTdHJpY3RTaGFsbG93Q29weSk7XG4gIH1cbiAgY3JlYXRlRHJhZnQoYmFzZSkge1xuICAgIGlmICghaXNEcmFmdGFibGUoYmFzZSkpXG4gICAgICBkaWUoOCk7XG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpXG4gICAgICBiYXNlID0gY3VycmVudChiYXNlKTtcbiAgICBjb25zdCBzY29wZSA9IGVudGVyU2NvcGUodGhpcyk7XG4gICAgY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShiYXNlLCB2b2lkIDApO1xuICAgIHByb3h5W0RSQUZUX1NUQVRFXS5pc01hbnVhbF8gPSB0cnVlO1xuICAgIGxlYXZlU2NvcGUoc2NvcGUpO1xuICAgIHJldHVybiBwcm94eTtcbiAgfVxuICBmaW5pc2hEcmFmdChkcmFmdCwgcGF0Y2hMaXN0ZW5lcikge1xuICAgIGNvbnN0IHN0YXRlID0gZHJhZnQgJiYgZHJhZnRbRFJBRlRfU1RBVEVdO1xuICAgIGlmICghc3RhdGUgfHwgIXN0YXRlLmlzTWFudWFsXylcbiAgICAgIGRpZSg5KTtcbiAgICBjb25zdCB7IHNjb3BlXzogc2NvcGUgfSA9IHN0YXRlO1xuICAgIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKTtcbiAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdCh2b2lkIDAsIHNjb3BlKTtcbiAgfVxuICAvKipcbiAgICogUGFzcyB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgZnJlZXplIGFsbCBjb3BpZXMgY3JlYXRlZCBieSBJbW1lci5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYXV0by1mcmVlemluZyBpcyBlbmFibGVkLlxuICAgKi9cbiAgc2V0QXV0b0ZyZWV6ZSh2YWx1ZSkge1xuICAgIHRoaXMuYXV0b0ZyZWV6ZV8gPSB2YWx1ZTtcbiAgfVxuICAvKipcbiAgICogUGFzcyB0cnVlIHRvIGVuYWJsZSBzdHJpY3Qgc2hhbGxvdyBjb3B5LlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBpbW1lciBkb2VzIG5vdCBjb3B5IHRoZSBvYmplY3QgZGVzY3JpcHRvcnMgc3VjaCBhcyBnZXR0ZXIsIHNldHRlciBhbmQgbm9uLWVudW1yYWJsZSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkodmFsdWUpIHtcbiAgICB0aGlzLnVzZVN0cmljdFNoYWxsb3dDb3B5XyA9IHZhbHVlO1xuICB9XG4gIGFwcGx5UGF0Y2hlcyhiYXNlLCBwYXRjaGVzKSB7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gcGF0Y2hlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuICAgICAgaWYgKHBhdGNoLnBhdGgubGVuZ3RoID09PSAwICYmIHBhdGNoLm9wID09PSBcInJlcGxhY2VcIikge1xuICAgICAgICBiYXNlID0gcGF0Y2gudmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBwYXRjaGVzID0gcGF0Y2hlcy5zbGljZShpICsgMSk7XG4gICAgfVxuICAgIGNvbnN0IGFwcGx5UGF0Y2hlc0ltcGwgPSBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmFwcGx5UGF0Y2hlc187XG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpIHtcbiAgICAgIHJldHVybiBhcHBseVBhdGNoZXNJbXBsKGJhc2UsIHBhdGNoZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9kdWNlKFxuICAgICAgYmFzZSxcbiAgICAgIChkcmFmdCkgPT4gYXBwbHlQYXRjaGVzSW1wbChkcmFmdCwgcGF0Y2hlcylcbiAgICApO1xuICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlUHJveHkodmFsdWUsIHBhcmVudCkge1xuICBjb25zdCBkcmFmdCA9IGlzTWFwKHZhbHVlKSA/IGdldFBsdWdpbihcIk1hcFNldFwiKS5wcm94eU1hcF8odmFsdWUsIHBhcmVudCkgOiBpc1NldCh2YWx1ZSkgPyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlTZXRfKHZhbHVlLCBwYXJlbnQpIDogY3JlYXRlUHJveHlQcm94eSh2YWx1ZSwgcGFyZW50KTtcbiAgY29uc3Qgc2NvcGUgPSBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCk7XG4gIHNjb3BlLmRyYWZ0c18ucHVzaChkcmFmdCk7XG4gIHJldHVybiBkcmFmdDtcbn1cblxuLy8gc3JjL2NvcmUvY3VycmVudC50c1xuZnVuY3Rpb24gY3VycmVudCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnQodmFsdWUpKVxuICAgIGRpZSgxMCwgdmFsdWUpO1xuICByZXR1cm4gY3VycmVudEltcGwodmFsdWUpO1xufVxuZnVuY3Rpb24gY3VycmVudEltcGwodmFsdWUpIHtcbiAgaWYgKCFpc0RyYWZ0YWJsZSh2YWx1ZSkgfHwgaXNGcm96ZW4odmFsdWUpKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgY29uc3Qgc3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV07XG4gIGxldCBjb3B5O1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLm1vZGlmaWVkXylcbiAgICAgIHJldHVybiBzdGF0ZS5iYXNlXztcbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gdHJ1ZTtcbiAgICBjb3B5ID0gc2hhbGxvd0NvcHkodmFsdWUsIHN0YXRlLnNjb3BlXy5pbW1lcl8udXNlU3RyaWN0U2hhbGxvd0NvcHlfKTtcbiAgfSBlbHNlIHtcbiAgICBjb3B5ID0gc2hhbGxvd0NvcHkodmFsdWUsIHRydWUpO1xuICB9XG4gIGVhY2goY29weSwgKGtleSwgY2hpbGRWYWx1ZSkgPT4ge1xuICAgIHNldChjb3B5LCBrZXksIGN1cnJlbnRJbXBsKGNoaWxkVmFsdWUpKTtcbiAgfSk7XG4gIGlmIChzdGF0ZSkge1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gY29weTtcbn1cblxuLy8gc3JjL3BsdWdpbnMvcGF0Y2hlcy50c1xuZnVuY3Rpb24gZW5hYmxlUGF0Y2hlcygpIHtcbiAgY29uc3QgZXJyb3JPZmZzZXQgPSAxNjtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGVycm9ycy5wdXNoKFxuICAgICAgJ1NldHMgY2Fubm90IGhhdmUgXCJyZXBsYWNlXCIgcGF0Y2hlcy4nLFxuICAgICAgZnVuY3Rpb24ob3ApIHtcbiAgICAgICAgcmV0dXJuIFwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIiArIG9wO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIgKyBwYXRoO1xuICAgICAgfSxcbiAgICAgIFwiUGF0Y2hpbmcgcmVzZXJ2ZWQgYXR0cmlidXRlcyBsaWtlIF9fcHJvdG9fXywgcHJvdG90eXBlIGFuZCBjb25zdHJ1Y3RvciBpcyBub3QgYWxsb3dlZFwiXG4gICAgKTtcbiAgfVxuICBjb25zdCBSRVBMQUNFID0gXCJyZXBsYWNlXCI7XG4gIGNvbnN0IEFERCA9IFwiYWRkXCI7XG4gIGNvbnN0IFJFTU9WRSA9IFwicmVtb3ZlXCI7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGF0Y2hlc18oc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHN3aXRjaCAoc3RhdGUudHlwZV8pIHtcbiAgICAgIGNhc2UgMCAvKiBPYmplY3QgKi86XG4gICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkKFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGJhc2VQYXRoLFxuICAgICAgICAgIHBhdGNoZXMsXG4gICAgICAgICAgaW52ZXJzZVBhdGNoZXNcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgMSAvKiBBcnJheSAqLzpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlQXJyYXlQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpO1xuICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlU2V0UGF0Y2hlcyhcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICBwYXRjaGVzLFxuICAgICAgICAgIGludmVyc2VQYXRjaGVzXG4gICAgICAgICk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlQXJyYXlQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBsZXQgeyBiYXNlXywgYXNzaWduZWRfIH0gPSBzdGF0ZTtcbiAgICBsZXQgY29weV8gPSBzdGF0ZS5jb3B5XztcbiAgICBpZiAoY29weV8ubGVuZ3RoIDwgYmFzZV8ubGVuZ3RoKSB7XG4gICAgICA7XG4gICAgICBbYmFzZV8sIGNvcHlfXSA9IFtjb3B5XywgYmFzZV9dO1xuICAgICAgW3BhdGNoZXMsIGludmVyc2VQYXRjaGVzXSA9IFtpbnZlcnNlUGF0Y2hlcywgcGF0Y2hlc107XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZV8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhc3NpZ25lZF9baV0gJiYgY29weV9baV0gIT09IGJhc2VfW2ldKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVQTEFDRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIC8vIE5lZWQgdG8gbWF5YmUgY2xvbmUgaXQsIGFzIGl0IGNhbiBpbiBmYWN0IGJlIHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAgIC8vIGR1ZSB0byB0aGUgYmFzZS9jb3B5IGludmVyc2lvbiBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvblxuICAgICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChjb3B5X1tpXSlcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGJhc2VfW2ldKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IGJhc2VfLmxlbmd0aDsgaSA8IGNvcHlfLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogQURELFxuICAgICAgICBwYXRoLFxuICAgICAgICAvLyBOZWVkIHRvIG1heWJlIGNsb25lIGl0LCBhcyBpdCBjYW4gaW4gZmFjdCBiZSB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgLy8gZHVlIHRvIHRoZSBiYXNlL2NvcHkgaW52ZXJzaW9uIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uXG4gICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChjb3B5X1tpXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gY29weV8ubGVuZ3RoIC0gMTsgYmFzZV8ubGVuZ3RoIDw9IGk7IC0taSkge1xuICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgIHBhdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIGNvbnN0IHsgYmFzZV8sIGNvcHlfIH0gPSBzdGF0ZTtcbiAgICBlYWNoKHN0YXRlLmFzc2lnbmVkXywgKGtleSwgYXNzaWduZWRWYWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ1ZhbHVlID0gZ2V0KGJhc2VfLCBrZXkpO1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXQoY29weV8sIGtleSk7XG4gICAgICBjb25zdCBvcCA9ICFhc3NpZ25lZFZhbHVlID8gUkVNT1ZFIDogaGFzKGJhc2VfLCBrZXkpID8gUkVQTEFDRSA6IEFERDtcbiAgICAgIGlmIChvcmlnVmFsdWUgPT09IHZhbHVlICYmIG9wID09PSBSRVBMQUNFKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KGtleSk7XG4gICAgICBwYXRjaGVzLnB1c2gob3AgPT09IFJFTU9WRSA/IHsgb3AsIHBhdGggfSA6IHsgb3AsIHBhdGgsIHZhbHVlIH0pO1xuICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaChcbiAgICAgICAgb3AgPT09IEFERCA/IHsgb3A6IFJFTU9WRSwgcGF0aCB9IDogb3AgPT09IFJFTU9WRSA/IHsgb3A6IEFERCwgcGF0aCwgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9yaWdWYWx1ZSkgfSA6IHsgb3A6IFJFUExBQ0UsIHBhdGgsIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvcmlnVmFsdWUpIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVTZXRQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBsZXQgeyBiYXNlXywgY29weV8gfSA9IHN0YXRlO1xuICAgIGxldCBpID0gMDtcbiAgICBiYXNlXy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCFjb3B5Xy5oYXModmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuICAgICAgICAgIG9wOiBBREQsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgICBpID0gMDtcbiAgICBjb3B5Xy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCFiYXNlXy5oYXModmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogQURELFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuICAgICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oYmFzZVZhbHVlLCByZXBsYWNlbWVudCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICBwYXRoOiBbXSxcbiAgICAgIHZhbHVlOiByZXBsYWNlbWVudCA9PT0gTk9USElORyA/IHZvaWQgMCA6IHJlcGxhY2VtZW50XG4gICAgfSk7XG4gICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICBvcDogUkVQTEFDRSxcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgdmFsdWU6IGJhc2VWYWx1ZVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFwcGx5UGF0Y2hlc18oZHJhZnQsIHBhdGNoZXMpIHtcbiAgICBwYXRjaGVzLmZvckVhY2goKHBhdGNoKSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGgsIG9wIH0gPSBwYXRjaDtcbiAgICAgIGxldCBiYXNlID0gZHJhZnQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudFR5cGUgPSBnZXRBcmNodHlwZShiYXNlKTtcbiAgICAgICAgbGV0IHAgPSBwYXRoW2ldO1xuICAgICAgICBpZiAodHlwZW9mIHAgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHAgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBwID0gXCJcIiArIHA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChwYXJlbnRUeXBlID09PSAwIC8qIE9iamVjdCAqLyB8fCBwYXJlbnRUeXBlID09PSAxIC8qIEFycmF5ICovKSAmJiAocCA9PT0gXCJfX3Byb3RvX19cIiB8fCBwID09PSBcImNvbnN0cnVjdG9yXCIpKVxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDMpO1xuICAgICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIiAmJiBwID09PSBcInByb3RvdHlwZVwiKVxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDMpO1xuICAgICAgICBiYXNlID0gZ2V0KGJhc2UsIHApO1xuICAgICAgICBpZiAodHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMiwgcGF0aC5qb2luKFwiL1wiKSk7XG4gICAgICB9XG4gICAgICBjb25zdCB0eXBlID0gZ2V0QXJjaHR5cGUoYmFzZSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRlZXBDbG9uZVBhdGNoVmFsdWUocGF0Y2gudmFsdWUpO1xuICAgICAgY29uc3Qga2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICBjYXNlIFJFUExBQ0U6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Vba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBBREQ6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDEgLyogQXJyYXkgKi86XG4gICAgICAgICAgICAgIHJldHVybiBrZXkgPT09IFwiLVwiID8gYmFzZS5wdXNoKHZhbHVlKSA6IGJhc2Uuc3BsaWNlKGtleSwgMCwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuYWRkKHZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgUkVNT1ZFOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxIC8qIEFycmF5ICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuZGVsZXRlKHBhdGNoLnZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBkZWxldGUgYmFzZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAxLCBvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRyYWZ0O1xuICB9XG4gIGZ1bmN0aW9uIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKSB7XG4gICAgaWYgKCFpc0RyYWZ0YWJsZShvYmopKVxuICAgICAgcmV0dXJuIG9iajtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKVxuICAgICAgcmV0dXJuIG9iai5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSk7XG4gICAgaWYgKGlzTWFwKG9iaikpXG4gICAgICByZXR1cm4gbmV3IE1hcChcbiAgICAgICAgQXJyYXkuZnJvbShvYmouZW50cmllcygpKS5tYXAoKFtrLCB2XSkgPT4gW2ssIGRlZXBDbG9uZVBhdGNoVmFsdWUodildKVxuICAgICAgKTtcbiAgICBpZiAoaXNTZXQob2JqKSlcbiAgICAgIHJldHVybiBuZXcgU2V0KEFycmF5LmZyb20ob2JqKS5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSkpO1xuICAgIGNvbnN0IGNsb25lZCA9IE9iamVjdC5jcmVhdGUoZ2V0UHJvdG90eXBlT2Yob2JqKSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKVxuICAgICAgY2xvbmVkW2tleV0gPSBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9ialtrZXldKTtcbiAgICBpZiAoaGFzKG9iaiwgRFJBRlRBQkxFKSlcbiAgICAgIGNsb25lZFtEUkFGVEFCTEVdID0gb2JqW0RSQUZUQUJMRV07XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuICBmdW5jdGlvbiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvYmopIHtcbiAgICBpZiAoaXNEcmFmdChvYmopKSB7XG4gICAgICByZXR1cm4gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmopO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIG9iajtcbiAgfVxuICBsb2FkUGx1Z2luKFwiUGF0Y2hlc1wiLCB7XG4gICAgYXBwbHlQYXRjaGVzXyxcbiAgICBnZW5lcmF0ZVBhdGNoZXNfLFxuICAgIGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzX1xuICB9KTtcbn1cblxuLy8gc3JjL3BsdWdpbnMvbWFwc2V0LnRzXG5mdW5jdGlvbiBlbmFibGVNYXBTZXQoKSB7XG4gIGNsYXNzIERyYWZ0TWFwIGV4dGVuZHMgTWFwIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuICAgICAgICB0eXBlXzogMiAvKiBNYXAgKi8sXG4gICAgICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAgICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgICAgICBjb3B5Xzogdm9pZCAwLFxuICAgICAgICBhc3NpZ25lZF86IHZvaWQgMCxcbiAgICAgICAgYmFzZV86IHRhcmdldCxcbiAgICAgICAgZHJhZnRfOiB0aGlzLFxuICAgICAgICBpc01hbnVhbF86IGZhbHNlLFxuICAgICAgICByZXZva2VkXzogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZTtcbiAgICB9XG4gICAgaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuaGFzKGtleSk7XG4gICAgfVxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmICghbGF0ZXN0KHN0YXRlKS5oYXMoa2V5KSB8fCBsYXRlc3Qoc3RhdGUpLmdldChrZXkpICE9PSB2YWx1ZSkge1xuICAgICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIHRydWUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWxldGUoa2V5KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICBpZiAoc3RhdGUuYmFzZV8uaGFzKGtleSkpIHtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5kZWxldGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmNvcHlfLmRlbGV0ZShrZXkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAobGF0ZXN0KHN0YXRlKS5zaXplKSB7XG4gICAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgICBlYWNoKHN0YXRlLmJhc2VfLCAoa2V5KSA9PiB7XG4gICAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvckVhY2goY2IsIHRoaXNBcmcpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBsYXRlc3Qoc3RhdGUpLmZvckVhY2goKF92YWx1ZSwga2V5LCBfbWFwKSA9PiB7XG4gICAgICAgIGNiLmNhbGwodGhpc0FyZywgdGhpcy5nZXQoa2V5KSwga2V5LCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gbGF0ZXN0KHN0YXRlKS5nZXQoa2V5KTtcbiAgICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZS5iYXNlXy5nZXQoa2V5KSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICBjb25zdCBkcmFmdCA9IGNyZWF0ZVByb3h5KHZhbHVlLCBzdGF0ZSk7XG4gICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICBzdGF0ZS5jb3B5Xy5zZXQoa2V5LCBkcmFmdCk7XG4gICAgICByZXR1cm4gZHJhZnQ7XG4gICAgfVxuICAgIGtleXMoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5rZXlzKCk7XG4gICAgfVxuICAgIHZhbHVlcygpIHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpcy5rZXlzKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4gdGhpcy52YWx1ZXMoKSxcbiAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHIgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHIuZG9uZSlcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoci52YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBlbnRyaWVzKCkge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLmtleXMoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB0aGlzLmVudHJpZXMoKSxcbiAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHIgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHIuZG9uZSlcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoci52YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IFtyLnZhbHVlLCB2YWx1ZV1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBbKERSQUZUX1NUQVRFLCBTeW1ib2wuaXRlcmF0b3IpXSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHJveHlNYXBfKHRhcmdldCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFmdE1hcCh0YXJnZXQsIHBhcmVudCk7XG4gIH1cbiAgZnVuY3Rpb24gcHJlcGFyZU1hcENvcHkoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICBzdGF0ZS5hc3NpZ25lZF8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgc3RhdGUuY29weV8gPSBuZXcgTWFwKHN0YXRlLmJhc2VfKTtcbiAgICB9XG4gIH1cbiAgY2xhc3MgRHJhZnRTZXQgZXh0ZW5kcyBTZXQge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpc1tEUkFGVF9TVEFURV0gPSB7XG4gICAgICAgIHR5cGVfOiAzIC8qIFNldCAqLyxcbiAgICAgICAgcGFyZW50XzogcGFyZW50LFxuICAgICAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAgICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAgICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgICAgIGNvcHlfOiB2b2lkIDAsXG4gICAgICAgIGJhc2VfOiB0YXJnZXQsXG4gICAgICAgIGRyYWZ0XzogdGhpcyxcbiAgICAgICAgZHJhZnRzXzogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcbiAgICAgICAgcmV2b2tlZF86IGZhbHNlLFxuICAgICAgICBpc01hbnVhbF86IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLnNpemU7XG4gICAgfVxuICAgIGhhcyh2YWx1ZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5iYXNlXy5oYXModmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLmNvcHlfLmhhcyh2YWx1ZSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKSAmJiBzdGF0ZS5jb3B5Xy5oYXMoc3RhdGUuZHJhZnRzXy5nZXQodmFsdWUpKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuY29weV8uYWRkKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWxldGUodmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLmRlbGV0ZSh2YWx1ZSkgfHwgKHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKSA/IHN0YXRlLmNvcHlfLmRlbGV0ZShzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpIDogKFxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBmYWxzZVxuICAgICAgKSk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAobGF0ZXN0KHN0YXRlKS5zaXplKSB7XG4gICAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5Xy52YWx1ZXMoKTtcbiAgICB9XG4gICAgZW50cmllcygpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLmVudHJpZXMoKTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH1cbiAgICBbKERSQUZUX1NUQVRFLCBTeW1ib2wuaXRlcmF0b3IpXSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH1cbiAgICBmb3JFYWNoKGNiLCB0aGlzQXJnKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXMudmFsdWVzKCk7XG4gICAgICBsZXQgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgICAgICBjYi5jYWxsKHRoaXNBcmcsIHJlc3VsdC52YWx1ZSwgcmVzdWx0LnZhbHVlLCB0aGlzKTtcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwcm94eVNldF8odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWZ0U2V0KHRhcmdldCwgcGFyZW50KTtcbiAgfVxuICBmdW5jdGlvbiBwcmVwYXJlU2V0Q29weShzdGF0ZSkge1xuICAgIGlmICghc3RhdGUuY29weV8pIHtcbiAgICAgIHN0YXRlLmNvcHlfID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgIHN0YXRlLmJhc2VfLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICBjb25zdCBkcmFmdCA9IGNyZWF0ZVByb3h5KHZhbHVlLCBzdGF0ZSk7XG4gICAgICAgICAgc3RhdGUuZHJhZnRzXy5zZXQodmFsdWUsIGRyYWZ0KTtcbiAgICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQoZHJhZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLmNvcHlfLmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhc3NlcnRVbnJldm9rZWQoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUucmV2b2tlZF8pXG4gICAgICBkaWUoMywgSlNPTi5zdHJpbmdpZnkobGF0ZXN0KHN0YXRlKSkpO1xuICB9XG4gIGxvYWRQbHVnaW4oXCJNYXBTZXRcIiwgeyBwcm94eU1hcF8sIHByb3h5U2V0XyB9KTtcbn1cblxuLy8gc3JjL2ltbWVyLnRzXG52YXIgaW1tZXIgPSBuZXcgSW1tZXIyKCk7XG52YXIgcHJvZHVjZSA9IGltbWVyLnByb2R1Y2U7XG52YXIgcHJvZHVjZVdpdGhQYXRjaGVzID0gaW1tZXIucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQoXG4gIGltbWVyXG4pO1xudmFyIHNldEF1dG9GcmVlemUgPSBpbW1lci5zZXRBdXRvRnJlZXplLmJpbmQoaW1tZXIpO1xudmFyIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5ID0gaW1tZXIuc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkuYmluZChpbW1lcik7XG52YXIgYXBwbHlQYXRjaGVzID0gaW1tZXIuYXBwbHlQYXRjaGVzLmJpbmQoaW1tZXIpO1xudmFyIGNyZWF0ZURyYWZ0ID0gaW1tZXIuY3JlYXRlRHJhZnQuYmluZChpbW1lcik7XG52YXIgZmluaXNoRHJhZnQgPSBpbW1lci5maW5pc2hEcmFmdC5iaW5kKGltbWVyKTtcbmZ1bmN0aW9uIGNhc3REcmFmdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjYXN0SW1tdXRhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbi8vIEFubm90YXRlIHRoZSBDb21tb25KUyBleHBvcnQgbmFtZXMgZm9yIEVTTSBpbXBvcnQgaW4gbm9kZTpcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBJbW1lcixcbiAgYXBwbHlQYXRjaGVzLFxuICBjYXN0RHJhZnQsXG4gIGNhc3RJbW11dGFibGUsXG4gIGNyZWF0ZURyYWZ0LFxuICBjdXJyZW50LFxuICBlbmFibGVNYXBTZXQsXG4gIGVuYWJsZVBhdGNoZXMsXG4gIGZpbmlzaERyYWZ0LFxuICBmcmVlemUsXG4gIGltbWVyYWJsZSxcbiAgaXNEcmFmdCxcbiAgaXNEcmFmdGFibGUsXG4gIG5vdGhpbmcsXG4gIG9yaWdpbmFsLFxuICBwcm9kdWNlLFxuICBwcm9kdWNlV2l0aFBhdGNoZXMsXG4gIHNldEF1dG9GcmVlemUsXG4gIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLmNqcy5kZXZlbG9wbWVudC5qcy5tYXAiLCJcbid1c2Ugc3RyaWN0J1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW1tZXIuY2pzLnByb2R1Y3Rpb24uanMnKVxufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ltbWVyLmNqcy5kZXZlbG9wbWVudC5qcycpXG59IiwidmFyIGU9cmVxdWlyZShcImltbWVyXCIpLHI9cmVxdWlyZShcInJlYWN0XCIpO2V4cG9ydHMudXNlSW1tZXI9ZnVuY3Rpb24odSl7dmFyIG49ci51c2VTdGF0ZShmdW5jdGlvbigpe3JldHVybiBlLmZyZWV6ZShcImZ1bmN0aW9uXCI9PXR5cGVvZiB1P3UoKTp1LCEwKX0pLHQ9blsxXTtyZXR1cm5bblswXSxyLnVzZUNhbGxiYWNrKGZ1bmN0aW9uKHIpe3QoXCJmdW5jdGlvblwiPT10eXBlb2Ygcj9lLnByb2R1Y2Uocik6ZS5mcmVlemUocikpfSxbXSldfSxleHBvcnRzLnVzZUltbWVyUmVkdWNlcj1mdW5jdGlvbih1LG4sdCl7dmFyIG89ci51c2VNZW1vKGZ1bmN0aW9uKCl7cmV0dXJuIGUucHJvZHVjZSh1KX0sW3VdKTtyZXR1cm4gci51c2VSZWR1Y2VyKG8sbix0KX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW1tZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudmVyc2lvbiA9IGV4cG9ydHMudmFsaWRhdGUgPSBleHBvcnRzLnY3ID0gZXhwb3J0cy52NlRvVjEgPSBleHBvcnRzLnY2ID0gZXhwb3J0cy52NSA9IGV4cG9ydHMudjQgPSBleHBvcnRzLnYzID0gZXhwb3J0cy52MVRvVjYgPSBleHBvcnRzLnYxID0gZXhwb3J0cy5zdHJpbmdpZnkgPSBleHBvcnRzLnBhcnNlID0gZXhwb3J0cy5OSUwgPSBleHBvcnRzLk1BWCA9IHZvaWQgMDtcbnZhciBtYXhfanNfMSA9IHJlcXVpcmUoXCIuL21heC5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1BWFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF4X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBuaWxfanNfMSA9IHJlcXVpcmUoXCIuL25pbC5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5JTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmlsX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGFyc2VfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3RyaW5naWZ5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdHJpbmdpZnlfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHYxX2pzXzEgPSByZXF1aXJlKFwiLi92MS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjFUb1Y2X2pzXzEgPSByZXF1aXJlKFwiLi92MVRvVjYuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVRvVjZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYxVG9WNl9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjNfanNfMSA9IHJlcXVpcmUoXCIuL3YzLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2NF9qc18xID0gcmVxdWlyZShcIi4vdjQuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjRfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY1X2pzXzEgPSByZXF1aXJlKFwiLi92NS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY1XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2NV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjZfanNfMSA9IHJlcXVpcmUoXCIuL3Y2LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY2X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2NlRvVjFfanNfMSA9IHJlcXVpcmUoXCIuL3Y2VG9WMS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2VG9WMVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjZUb1YxX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2N19qc18xID0gcmVxdWlyZShcIi4vdjcuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2N1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjdfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZhbGlkYXRlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2YWxpZGF0ZV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdmVyc2lvbl9qc18xID0gcmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZlcnNpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZlcnNpb25fanNfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSAnZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gICAgY29uc3Qgd29yZHMgPSB1aW50OFRvVWludDMyKGJ5dGVzKTtcbiAgICBjb25zdCBtZDVCeXRlcyA9IHdvcmRzVG9NZDUod29yZHMsIGJ5dGVzLmxlbmd0aCAqIDgpO1xuICAgIHJldHVybiB1aW50MzJUb1VpbnQ4KG1kNUJ5dGVzKTtcbn1cbmZ1bmN0aW9uIHVpbnQzMlRvVWludDgoaW5wdXQpIHtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGlucHV0Lmxlbmd0aCAqIDQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoICogNDsgaSsrKSB7XG4gICAgICAgIGJ5dGVzW2ldID0gKGlucHV0W2kgPj4gMl0gPj4+ICgoaSAlIDQpICogOCkpICYgMHhmZjtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufVxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICAgIHJldHVybiAoKChpbnB1dExlbmd0aDggKyA2NCkgPj4+IDkpIDw8IDQpICsgMTQgKyAxO1xufVxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgICBjb25zdCB4cGFkID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW4pKS5maWxsKDApO1xuICAgIHhwYWQuc2V0KHgpO1xuICAgIHhwYWRbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gICAgeHBhZFt4cGFkLmxlbmd0aCAtIDFdID0gbGVuO1xuICAgIHggPSB4cGFkO1xuICAgIGxldCBhID0gMTczMjU4NDE5MztcbiAgICBsZXQgYiA9IC0yNzE3MzM4Nzk7XG4gICAgbGV0IGMgPSAtMTczMjU4NDE5NDtcbiAgICBsZXQgZCA9IDI3MTczMzg3ODtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgICAgIGNvbnN0IG9sZGEgPSBhO1xuICAgICAgICBjb25zdCBvbGRiID0gYjtcbiAgICAgICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgICAgIGNvbnN0IG9sZGQgPSBkO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgICAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICAgICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICAgIH1cbiAgICByZXR1cm4gVWludDMyQXJyYXkub2YoYSwgYiwgYywgZCk7XG59XG5mdW5jdGlvbiB1aW50OFRvVWludDMyKGlucHV0KSB7XG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KCk7XG4gICAgfVxuICAgIGNvbnN0IG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgoaW5wdXQubGVuZ3RoICogOCkpLmZpbGwoMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBvdXRwdXRbaSA+PiAyXSB8PSAoaW5wdXRbaV0gJiAweGZmKSA8PCAoKGkgJSA0KSAqIDgpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gICAgY29uc3QgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICAgIGNvbnN0IG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAgIHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweGZmZmYpO1xufVxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICAgIHJldHVybiAobnVtIDw8IGNudCkgfCAobnVtID4+PiAoMzIgLSBjbnQpKTtcbn1cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbigoYiAmIGMpIHwgKH5iICYgZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oKGIgJiBkKSB8IChjICYgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWQ1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0cy5kZWZhdWx0ID0geyByYW5kb21VVUlEIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gICAgaWYgKCEoMCwgdmFsaWRhdGVfanNfMS5kZWZhdWx0KSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICAgIH1cbiAgICBsZXQgdjtcbiAgICByZXR1cm4gVWludDhBcnJheS5vZigodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0LCAodiA+Pj4gMTYpICYgMHhmZiwgKHYgPj4+IDgpICYgMHhmZiwgdiAmIDB4ZmYsICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDgsIHYgJiAweGZmLCAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gOCwgdiAmIDB4ZmYsICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4LCB2ICYgMHhmZiwgKCh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCkgJiAweGZmLCAodiAvIDB4MTAwMDAwMDAwKSAmIDB4ZmYsICh2ID4+PiAyNCkgJiAweGZmLCAodiA+Pj4gMTYpICYgMHhmZiwgKHYgPj4+IDgpICYgMHhmZiwgdiAmIDB4ZmYpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcGFyc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBybmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICAgIHN3aXRjaCAocykge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gKHggJiB5KSBeICh+eCAmIHopO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4geCBeIHkgXiB6O1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gKHggJiB5KSBeICh4ICYgeikgXiAoeSAmIHopO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4geCBeIHkgXiB6O1xuICAgIH1cbn1cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICAgIHJldHVybiAoeCA8PCBuKSB8ICh4ID4+PiAoMzIgLSBuKSk7XG59XG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gICAgY29uc3QgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuICAgIGNvbnN0IG5ld0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMubGVuZ3RoICsgMSk7XG4gICAgbmV3Qnl0ZXMuc2V0KGJ5dGVzKTtcbiAgICBuZXdCeXRlc1tieXRlcy5sZW5ndGhdID0gMHg4MDtcbiAgICBieXRlcyA9IG5ld0J5dGVzO1xuICAgIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgICBjb25zdCBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gICAgY29uc3QgTSA9IG5ldyBBcnJheShOKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgICAgICBjb25zdCBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgICAgICAgIGFycltqXSA9XG4gICAgICAgICAgICAgICAgKGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCkgfFxuICAgICAgICAgICAgICAgICAgICAoYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNikgfFxuICAgICAgICAgICAgICAgICAgICAoYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4KSB8XG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgICAgIH1cbiAgICAgICAgTVtpXSA9IGFycjtcbiAgICB9XG4gICAgTVtOIC0gMV1bMTRdID0gKChieXRlcy5sZW5ndGggLSAxKSAqIDgpIC8gTWF0aC5wb3coMiwgMzIpO1xuICAgIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgICBNW04gLSAxXVsxNV0gPSAoKGJ5dGVzLmxlbmd0aCAtIDEpICogOCkgJiAweGZmZmZmZmZmO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgICAgIGNvbnN0IFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgICAgICAgIFdbdF0gPSBNW2ldW3RdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHQgPSAxNjsgdCA8IDgwOyArK3QpIHtcbiAgICAgICAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhID0gSFswXTtcbiAgICAgICAgbGV0IGIgPSBIWzFdO1xuICAgICAgICBsZXQgYyA9IEhbMl07XG4gICAgICAgIGxldCBkID0gSFszXTtcbiAgICAgICAgbGV0IGUgPSBIWzRdO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDgwOyArK3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKHQgLyAyMCk7XG4gICAgICAgICAgICBjb25zdCBUID0gKFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW3RdKSA+Pj4gMDtcbiAgICAgICAgICAgIGUgPSBkO1xuICAgICAgICAgICAgZCA9IGM7XG4gICAgICAgICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICAgICAgICBiID0gYTtcbiAgICAgICAgICAgIGEgPSBUO1xuICAgICAgICB9XG4gICAgICAgIEhbMF0gPSAoSFswXSArIGEpID4+PiAwO1xuICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSA+Pj4gMDtcbiAgICAgICAgSFsyXSA9IChIWzJdICsgYykgPj4+IDA7XG4gICAgICAgIEhbM10gPSAoSFszXSArIGQpID4+PiAwO1xuICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSA+Pj4gMDtcbiAgICB9XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoSFswXSA+PiAyNCwgSFswXSA+PiAxNiwgSFswXSA+PiA4LCBIWzBdLCBIWzFdID4+IDI0LCBIWzFdID4+IDE2LCBIWzFdID4+IDgsIEhbMV0sIEhbMl0gPj4gMjQsIEhbMl0gPj4gMTYsIEhbMl0gPj4gOCwgSFsyXSwgSFszXSA+PiAyNCwgSFszXSA+PiAxNiwgSFszXSA+PiA4LCBIWzNdLCBIWzRdID4+IDI0LCBIWzRdID4+IDE2LCBIWzRdID4+IDgsIEhbNF0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gc2hhMTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB2b2lkIDA7XG5jb25zdCB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoISgwLCB2YWxpZGF0ZV9qc18xLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5naWZ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZVYxU3RhdGUgPSB2b2lkIDA7XG5jb25zdCBybmdfanNfMSA9IHJlcXVpcmUoXCIuL3JuZy5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgX3N0YXRlID0ge307XG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGxldCBieXRlcztcbiAgICBjb25zdCBpc1Y2ID0gb3B0aW9ucz8uX3Y2ID8/IGZhbHNlO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zS2V5cy5sZW5ndGggPT09IDEgJiYgb3B0aW9uc0tleXNbMF0gPT09ICdfdjYnKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGJ5dGVzID0gdjFCeXRlcyhvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCksIG9wdGlvbnMubXNlY3MsIG9wdGlvbnMubnNlY3MsIG9wdGlvbnMuY2xvY2tzZXEsIG9wdGlvbnMubm9kZSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kcyA9ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpO1xuICAgICAgICB1cGRhdGVWMVN0YXRlKF9zdGF0ZSwgbm93LCBybmRzKTtcbiAgICAgICAgYnl0ZXMgPSB2MUJ5dGVzKHJuZHMsIF9zdGF0ZS5tc2VjcywgX3N0YXRlLm5zZWNzLCBpc1Y2ID8gdW5kZWZpbmVkIDogX3N0YXRlLmNsb2Nrc2VxLCBpc1Y2ID8gdW5kZWZpbmVkIDogX3N0YXRlLm5vZGUsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZiA/PyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5mdW5jdGlvbiB1cGRhdGVWMVN0YXRlKHN0YXRlLCBub3csIHJuZHMpIHtcbiAgICBzdGF0ZS5tc2VjcyA/Pz0gLUluZmluaXR5O1xuICAgIHN0YXRlLm5zZWNzID8/PSAwO1xuICAgIGlmIChub3cgPT09IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLm5zZWNzKys7XG4gICAgICAgIGlmIChzdGF0ZS5uc2VjcyA+PSAxMDAwMCkge1xuICAgICAgICAgICAgc3RhdGUubm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN0YXRlLm5zZWNzID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChub3cgPiBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5uc2VjcyA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vdyA8IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLm5vZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICghc3RhdGUubm9kZSkge1xuICAgICAgICBzdGF0ZS5ub2RlID0gcm5kcy5zbGljZSgxMCwgMTYpO1xuICAgICAgICBzdGF0ZS5ub2RlWzBdIHw9IDB4MDE7XG4gICAgICAgIHN0YXRlLmNsb2Nrc2VxID0gKChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XSkgJiAweDNmZmY7XG4gICAgfVxuICAgIHN0YXRlLm1zZWNzID0gbm93O1xuICAgIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydHMudXBkYXRlVjFTdGF0ZSA9IHVwZGF0ZVYxU3RhdGU7XG5mdW5jdGlvbiB2MUJ5dGVzKHJuZHMsIG1zZWNzLCBuc2VjcywgY2xvY2tzZXEsIG5vZGUsIGJ1Ziwgb2Zmc2V0ID0gMCkge1xuICAgIGlmIChybmRzLmxlbmd0aCA8IDE2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZG9tIGJ5dGVzIGxlbmd0aCBtdXN0IGJlID49IDE2Jyk7XG4gICAgfVxuICAgIGlmICghYnVmKSB7XG4gICAgICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDE2ID4gYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFVVSUQgYnl0ZSByYW5nZSAke29mZnNldH06JHtvZmZzZXQgKyAxNX0gaXMgb3V0IG9mIGJ1ZmZlciBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtc2VjcyA/Pz0gRGF0ZS5ub3coKTtcbiAgICBuc2VjcyA/Pz0gMDtcbiAgICBjbG9ja3NlcSA/Pz0gKChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XSkgJiAweDNmZmY7XG4gICAgbm9kZSA/Pz0gcm5kcy5zbGljZSgxMCwgMTYpO1xuICAgIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuICAgIGNvbnN0IHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodGwgPj4+IDI0KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bCA+Pj4gMTYpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRsID4+PiA4KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IHRsICYgMHhmZjtcbiAgICBjb25zdCB0bWggPSAoKG1zZWNzIC8gMHgxMDAwMDAwMDApICogMTAwMDApICYgMHhmZmZmZmZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodG1oID4+PiA4KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IHRtaCAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICgodG1oID4+PiAyNCkgJiAweGYpIHwgMHgxMDtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRtaCA+Pj4gMTYpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKGNsb2Nrc2VxID4+PiA4KSB8IDB4ODA7XG4gICAgYnVmW29mZnNldCsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcbiAgICBmb3IgKGxldCBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgICAgICBidWZbb2Zmc2V0KytdID0gbm9kZVtuXTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHYxO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHYxVG9WNih1dWlkKSB7XG4gICAgY29uc3QgdjFCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgICBjb25zdCB2NkJ5dGVzID0gX3YxVG9WNih2MUJ5dGVzKTtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkodjZCeXRlcykgOiB2NkJ5dGVzO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjFUb1Y2O1xuZnVuY3Rpb24gX3YxVG9WNih2MUJ5dGVzKSB7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKCh2MUJ5dGVzWzZdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbN10gPj4gNCkgJiAweDBmKSwgKCh2MUJ5dGVzWzddICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbNF0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzRdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbNV0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzVdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMF0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzBdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMV0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzFdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMl0gJiAweGYwKSA+PiA0KSwgMHg2MCB8ICh2MUJ5dGVzWzJdICYgMHgwZiksIHYxQnl0ZXNbM10sIHYxQnl0ZXNbOF0sIHYxQnl0ZXNbOV0sIHYxQnl0ZXNbMTBdLCB2MUJ5dGVzWzExXSwgdjFCeXRlc1sxMl0sIHYxQnl0ZXNbMTNdLCB2MUJ5dGVzWzE0XSwgdjFCeXRlc1sxNV0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuY29uc3QgbWQ1X2pzXzEgPSByZXF1aXJlKFwiLi9tZDUuanNcIik7XG5jb25zdCB2MzVfanNfMSA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbnZhciB2MzVfanNfMiA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkROU1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuRE5TOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVVJMXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5VUkw7IH0gfSk7XG5mdW5jdGlvbiB2Myh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHJldHVybiAoMCwgdjM1X2pzXzEuZGVmYXVsdCkoMHgzMCwgbWQ1X2pzXzEuZGVmYXVsdCwgdmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpO1xufVxudjMuRE5TID0gdjM1X2pzXzEuRE5TO1xudjMuVVJMID0gdjM1X2pzXzEuVVJMO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSBleHBvcnRzLnN0cmluZ1RvQnl0ZXMgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gICAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc3RyLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgYnl0ZXNbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufVxuZXhwb3J0cy5zdHJpbmdUb0J5dGVzID0gc3RyaW5nVG9CeXRlcztcbmV4cG9ydHMuRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLlVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZnVuY3Rpb24gdjM1KHZlcnNpb24sIGhhc2gsIHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgY29uc3QgdmFsdWVCeXRlcyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzdHJpbmdUb0J5dGVzKHZhbHVlKSA6IHZhbHVlO1xuICAgIGNvbnN0IG5hbWVzcGFjZUJ5dGVzID0gdHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycgPyAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KShuYW1lc3BhY2UpIDogbmFtZXNwYWNlO1xuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lc3BhY2UgPSAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KShuYW1lc3BhY2UpO1xuICAgIH1cbiAgICBpZiAobmFtZXNwYWNlPy5sZW5ndGggIT09IDE2KSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH1cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlQnl0ZXMubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQobmFtZXNwYWNlQnl0ZXMpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZUJ5dGVzLCBuYW1lc3BhY2VCeXRlcy5sZW5ndGgpO1xuICAgIGJ5dGVzID0gaGFzaChieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSAoYnl0ZXNbNl0gJiAweDBmKSB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSAoYnl0ZXNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBuYXRpdmVfanNfMSA9IHJlcXVpcmUoXCIuL25hdGl2ZS5qc1wiKTtcbmNvbnN0IHJuZ19qc18xID0gcmVxdWlyZShcIi4vcm5nLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGlmIChuYXRpdmVfanNfMS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlX2pzXzEuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCk7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShybmRzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuY29uc3Qgc2hhMV9qc18xID0gcmVxdWlyZShcIi4vc2hhMS5qc1wiKTtcbmNvbnN0IHYzNV9qc18xID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xudmFyIHYzNV9qc18yID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRE5TXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5ETlM7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVUkxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLlVSTDsgfSB9KTtcbmZ1bmN0aW9uIHY1KHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgcmV0dXJuICgwLCB2MzVfanNfMS5kZWZhdWx0KSgweDUwLCBzaGExX2pzXzEuZGVmYXVsdCwgdmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpO1xufVxudjUuRE5TID0gdjM1X2pzXzEuRE5TO1xudjUuVVJMID0gdjM1X2pzXzEuVVJMO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgdjFfanNfMSA9IHJlcXVpcmUoXCIuL3YxLmpzXCIpO1xuY29uc3QgdjFUb1Y2X2pzXzEgPSByZXF1aXJlKFwiLi92MVRvVjYuanNcIik7XG5mdW5jdGlvbiB2NihvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIG9wdGlvbnMgPz89IHt9O1xuICAgIG9mZnNldCA/Pz0gMDtcbiAgICBsZXQgYnl0ZXMgPSAoMCwgdjFfanNfMS5kZWZhdWx0KSh7IC4uLm9wdGlvbnMsIF92NjogdHJ1ZSB9LCBuZXcgVWludDhBcnJheSgxNikpO1xuICAgIGJ5dGVzID0gKDAsIHYxVG9WNl9qc18xLmRlZmF1bHQpKGJ5dGVzKTtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY2O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHY2VG9WMSh1dWlkKSB7XG4gICAgY29uc3QgdjZCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgICBjb25zdCB2MUJ5dGVzID0gX3Y2VG9WMSh2NkJ5dGVzKTtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkodjFCeXRlcykgOiB2MUJ5dGVzO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjZUb1YxO1xuZnVuY3Rpb24gX3Y2VG9WMSh2NkJ5dGVzKSB7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKCh2NkJ5dGVzWzNdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbNF0gPj4gNCkgJiAweDBmKSwgKCh2NkJ5dGVzWzRdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbNV0gJiAweGYwKSA+PiA0KSwgKCh2NkJ5dGVzWzVdICYgMHgwZikgPDwgNCkgfCAodjZCeXRlc1s2XSAmIDB4MGYpLCB2NkJ5dGVzWzddLCAoKHY2Qnl0ZXNbMV0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1syXSAmIDB4ZjApID4+IDQpLCAoKHY2Qnl0ZXNbMl0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1szXSAmIDB4ZjApID4+IDQpLCAweDEwIHwgKCh2NkJ5dGVzWzBdICYgMHhmMCkgPj4gNCksICgodjZCeXRlc1swXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzFdICYgMHhmMCkgPj4gNCksIHY2Qnl0ZXNbOF0sIHY2Qnl0ZXNbOV0sIHY2Qnl0ZXNbMTBdLCB2NkJ5dGVzWzExXSwgdjZCeXRlc1sxMl0sIHY2Qnl0ZXNbMTNdLCB2NkJ5dGVzWzE0XSwgdjZCeXRlc1sxNV0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZVY3U3RhdGUgPSB2b2lkIDA7XG5jb25zdCBybmdfanNfMSA9IHJlcXVpcmUoXCIuL3JuZy5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgX3N0YXRlID0ge307XG5mdW5jdGlvbiB2NyhvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGxldCBieXRlcztcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBieXRlcyA9IHY3Qnl0ZXMob3B0aW9ucy5yYW5kb20gPz8gb3B0aW9ucy5ybmc/LigpID8/ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpLCBvcHRpb25zLm1zZWNzLCBvcHRpb25zLnNlcSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kcyA9ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpO1xuICAgICAgICB1cGRhdGVWN1N0YXRlKF9zdGF0ZSwgbm93LCBybmRzKTtcbiAgICAgICAgYnl0ZXMgPSB2N0J5dGVzKHJuZHMsIF9zdGF0ZS5tc2VjcywgX3N0YXRlLnNlcSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmID8/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVY3U3RhdGUoc3RhdGUsIG5vdywgcm5kcykge1xuICAgIHN0YXRlLm1zZWNzID8/PSAtSW5maW5pdHk7XG4gICAgc3RhdGUuc2VxID8/PSAwO1xuICAgIGlmIChub3cgPiBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5zZXEgPSAocm5kc1s2XSA8PCAyMykgfCAocm5kc1s3XSA8PCAxNikgfCAocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV07XG4gICAgICAgIHN0YXRlLm1zZWNzID0gbm93O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUuc2VxID0gKHN0YXRlLnNlcSArIDEpIHwgMDtcbiAgICAgICAgaWYgKHN0YXRlLnNlcSA9PT0gMCkge1xuICAgICAgICAgICAgc3RhdGUubXNlY3MrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5leHBvcnRzLnVwZGF0ZVY3U3RhdGUgPSB1cGRhdGVWN1N0YXRlO1xuZnVuY3Rpb24gdjdCeXRlcyhybmRzLCBtc2Vjcywgc2VxLCBidWYsIG9mZnNldCA9IDApIHtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBpZiAoIWJ1Zikge1xuICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbXNlY3MgPz89IERhdGUubm93KCk7XG4gICAgc2VxID8/PSAoKHJuZHNbNl0gKiAweDdmKSA8PCAyNCkgfCAocm5kc1s3XSA8PCAxNikgfCAocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV07XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gbXNlY3MgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAweDcwIHwgKChzZXEgPj4+IDI4KSAmIDB4MGYpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoc2VxID4+PiAyMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAweDgwIHwgKChzZXEgPj4+IDE0KSAmIDB4M2YpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoc2VxID4+PiA2KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICgoc2VxIDw8IDIpICYgMHhmZikgfCAocm5kc1sxMF0gJiAweDAzKTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxMV07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTJdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzEzXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxNF07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTVdO1xuICAgIHJldHVybiBidWY7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVnZXhfanNfMSA9IHJlcXVpcmUoXCIuL3JlZ2V4LmpzXCIpO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgcmVnZXhfanNfMS5kZWZhdWx0LnRlc3QodXVpZCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuZnVuY3Rpb24gdmVyc2lvbih1dWlkKSB7XG4gICAgaWYgKCEoMCwgdmFsaWRhdGVfanNfMS5kZWZhdWx0KSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTUpLCAxNik7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2ZXJzaW9uO1xuIiwiaW1wb3J0IHsgdXNlSW1tZXJSZWR1Y2VyIH0gZnJvbSBcInVzZS1pbW1lclwiO1xuXG5pbXBvcnQge1xuXHRpbml0aWFsQ29udHJvbFN0YXRlLFxuXHRwYXJhbWV0ZXJJbml0aWFsU3RhdGUsXG59IGZyb20gXCIuL2luaXRpYWxTdGF0ZVwiO1xuaW1wb3J0IHR5cGUge1xuXHRDb21tYW5kVmFsdmVNcFByb3BzLFxuXHRQYXJhbWV0ZXJBY3Rpb24sXG5cdFBhcmFtSXRlbSxcblx0VXNlUGFyYW1ldGVyUmVkdWNlcixcblx0VXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyLFxuXHRWYWx2ZU1wQ29tbWFuZEFjdGlvbixcbn0gZnJvbSBcIi4vdHlwZXNcIjtcblxuXG4vKipcbiAqICBVcGRhdGUgYSBwYXJhbWV0ZXIgaXRlbSBpbiBhIGxpc3Qgb2YgcGFyYW1ldGVyIGl0ZW1zXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFBhcmFtZXRlclJlZHVjZXIoXG5cdGRyYWZ0OiBQYXJhbUl0ZW1bXSxcblx0YWN0aW9uOiBQYXJhbWV0ZXJBY3Rpb25cbik6IFBhcmFtSXRlbVtdIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgXCJVUERBVEVfVkFMVUVcIjpcblx0XHRcdGRyYWZ0W2FjdGlvbi5pbmRleF0uaW5wdXQudmFsdWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0ZGVmYXVsdDogLy8gI1RPRE8gQWRkIG1vcmUgcmVkdWNlciBjYXNlIHN0YXRlbWVudHNcblx0XHRcdHJldHVybiBkcmFmdDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1JdGVtc1JlZHVjZXIoKTogVXNlUGFyYW1ldGVyUmVkdWNlciB7XG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlSW1tZXJSZWR1Y2VyKFxuXHRcdFBhcmFtZXRlclJlZHVjZXIsXG5cdFx0cGFyYW1ldGVySW5pdGlhbFN0YXRlXG5cdCk7XG5cblx0ZnVuY3Rpb24gdXBkYXRlVmFsdWUoaW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfVkFMVUVcIiwgaW5kZXg6IGluZGV4LCB2YWx1ZTogdmFsdWUgfSk7XG5cdH1cblx0Ly8gQWRkIG1vcmUgZGlzcGF0Y2ggZnVuY3Rpb25zIGhlcmVcblx0Y29uc3QgdXNlUGFyYW1ldGVyUmVkdWNlciA9IHtcblx0XHRzdGF0ZSxcblx0XHRyZWR1Y2VyOiB7XG5cdFx0XHR1cGRhdGVWYWx1ZSxcblx0XHR9LFxuXHR9O1xuXHRyZXR1cm4gdXNlUGFyYW1ldGVyUmVkdWNlcjtcbn1cbmZ1bmN0aW9uIHZhbHZlTXBSZWR1Y2VyKFxuXHRkcmFmdDogQ29tbWFuZFZhbHZlTXBQcm9wcyxcblx0YWN0aW9uOiBWYWx2ZU1wQ29tbWFuZEFjdGlvblxuKTogQ29tbWFuZFZhbHZlTXBQcm9wcyB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFwiVVBEQVRFX0FVVE9fTUFOVUFMXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8ubWFpbikge1xuXHRcdFx0XHRpZiAoYWN0aW9uLm1vZGUgPT09IFwiYXV0b1wiKSB7XG5cdFx0XHRcdFx0ZHJhZnQuY29tbWFuZC5tYWluLmF1dG9NYW51YWwgPSBmYWxzZTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgSW4gQXV0b2ApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uLm1vZGUgPT09IFwibWFudWFsXCIpIHtcblx0XHRcdFx0XHRkcmFmdC5jb21tYW5kLm1haW4uYXV0b01hbnVhbCA9IHRydWU7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYEluIE1hbnVhbGApO1xuXHRcdFx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfTUFJTl9NQU5fT05cIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy5tYWluKSB7XG5cdFx0XHRcdGRyYWZ0LmNvbW1hbmQubWFpbi5hY3RpdmF0aW9uID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX01BSU5fTUFOX09GRlwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/Lm1haW4pIHtcblx0XHRcdFx0ZHJhZnQuY29tbWFuZC5tYWluLmFjdGl2YXRpb24gPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRjYXNlIFwiVVBEQVRFX1VTTF9NQU5fT05cIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy51cHBlclNlYXQpIHtcblx0XHRcdFx0ZHJhZnQuY29tbWFuZC51cHBlclNlYXQuYWN0aXZhdGlvbiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9VU0xfTUFOX09GRlwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/LnVwcGVyU2VhdCkge1xuXHRcdFx0XHRkcmFmdC5jb21tYW5kLnVwcGVyU2VhdC5hY3RpdmF0aW9uID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0Y2FzZSBcIlVQREFURV9MU0xfTUFOX09OXCI6XG5cdFx0XHRpZiAoZHJhZnQuY29tbWFuZD8ubG93ZXJTZWF0KSB7XG5cdFx0XHRcdGRyYWZ0LmNvbW1hbmQubG93ZXJTZWF0LmFjdGl2YXRpb24gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfTFNMX01BTl9PRkZcIjpcblx0XHRcdGlmIChkcmFmdC5jb21tYW5kPy5sb3dlclNlYXQpIHtcblx0XHRcdFx0ZHJhZnQuY29tbWFuZC5sb3dlclNlYXQuYWN0aXZhdGlvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGNhc2UgXCJVUERBVEVfTUFJTl9BVkFJTFwiOlxuXHRcdFx0aWYgKGRyYWZ0LmNvbW1hbmQ/LmF2YWlsYWJsZSkge1xuXHRcdFx0XHRpZihhY3Rpb24udmFsdWUpXG5cdFx0XHRcdGRyYWZ0LmNvbW1hbmQuYXZhaWxhYmxlLm1haW4gPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cblx0XHRkZWZhdWx0OiAvLyAjVE9ETyBBZGQgbW9yZSByZWR1Y2VyIGNhc2Ugc3RhdGVtZW50c1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIoKTogVXNlVmFsdmVNcENvbW1hbmRSZWR1Y2VyIHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VJbW1lclJlZHVjZXIoXG5cdFx0dmFsdmVNcFJlZHVjZXIsXG5cdFx0aW5pdGlhbENvbnRyb2xTdGF0ZVxuXHQpO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZU1haW5BdmFpbGFibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX01BSU5fQVZBSUxcIiwgdmFsdWUgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlVXBwZXJTZWF0QXZhaWxhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9VUFBFUlNFQVRfQVZBSUxcIiwgdmFsdWUgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTG93ZXJTZWF0QXZhaWxhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9MT1dFUlNFQVRfQVZBSUxcIiwgdmFsdWUgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQXV0b01hblNlbGVjdGlvbihtb2RlOiBcImF1dG9cIiB8IFwibWFudWFsXCIpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0FVVE9fTUFOVUFMXCIsIG1vZGUgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTWFpbk1hbnVhbE9uKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTUFJTl9NQU5fT05cIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVNYWluTWFudWFsT2ZmKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfTUFJTl9NQU5fT0ZGXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlVXNsTWFudWFsT24oKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9VU0xfTUFOX09OXCIgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlVXNsTWFudWFsT2ZmKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfVVNMX01BTl9PRkZcIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVMc2xNYW51YWxPbigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiVVBEQVRFX0xTTF9NQU5fT05cIiB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVMc2xNYW51YWxPZmYoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9MU0xfTUFOX09GRlwiIH0pO1xuXHR9XG5cblx0Y29uc3QgdXNlQ29tbWFuZHNWYWx2ZU1wUmVkdWNlciA9IHtcblx0XHRzdGF0ZSxcblx0XHRyZWR1Y2VyOiB7XG5cdFx0XHR1cGRhdGVBdXRvTWFuU2VsZWN0aW9uLFxuXHRcdFx0dXBkYXRlTWFpbkF2YWlsYWJsZSxcblx0XHRcdHVwZGF0ZVVwcGVyU2VhdEF2YWlsYWJsZSxcblx0XHRcdHVwZGF0ZUxvd2VyU2VhdEF2YWlsYWJsZSxcblx0XHRcdHVwZGF0ZU1haW5NYW51YWxPbixcblx0XHRcdHVwZGF0ZU1haW5NYW51YWxPZmYsXG5cdFx0XHR1cGRhdGVVc2xNYW51YWxPbixcblx0XHRcdHVwZGF0ZVVzbE1hbnVhbE9mZixcblx0XHRcdHVwZGF0ZUxzbE1hbnVhbE9uLFxuXHRcdFx0dXBkYXRlTHNsTWFudWFsT2ZmLFxuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHVzZUNvbW1hbmRzVmFsdmVNcFJlZHVjZXI7XG59XG4iLCIvKipcbiAqIFRoZSBwdXJwb3NlIG9mIGluaXRpYWxTdGF0ZXMudHMgaXMgdG8gcHJvdmlkZSBpbml0aWFsIHN0YXRlIGZvciBjb21wb25lbnQgcHJvcHNcbiAqL1xuLy8gaW5pdGlhbFN0YXRlLnRzXG5cblxuaW1wb3J0IHsgQ29tbWFuZFZhbHZlTXBQcm9wcywgUGFyYW1JdGVtIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHZhbHZlU3RhdHVzID0ge1xuXHRhbGFybTogZmFsc2UsXG5cdGFjdEZCOiBmYWxzZSxcblx0ZGVBY3RGQjogdHJ1ZSxcblx0YWN0aXZhdGVkQ29uZmlnOiA3LFxuXHRkZWFjdGl2YXRlZENvbmZpZzogNSxcblx0aXRlbU5hbWU6IFwiVlhYWFwiLFxuXHRtYW51YWw6IGZhbHNlLFxuXHRtYXNrZWQ6IGZhbHNlLFxuXHRjaGFuZ2luZzogZmFsc2UsXG5cdGxvY2F0ZTogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgcHJvY2Vzc09iamVjdFByb3BzID0ge1xuXHRzdGF0dXM6IHZhbHZlU3RhdHVzLFxufTtcbmV4cG9ydCBjb25zdCB2YWx2ZVByb3BzID0ge1xuXHRwcm9jZXNzT2JqZWN0OiBwcm9jZXNzT2JqZWN0UHJvcHMsXG5cdGhhbmRsZUNsaWNrOiAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBjbGlja2VkXCIpO1xuXHR9LFxuXHRsYWJlbFBvc2l0aW9uOiBcImxlZnRcIixcblx0c2hvd0xhYmVsOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgcHVtcEluaXRpYWxTdGF0dXMgPSB7XG5cdGFsYXJtOiBmYWxzZSxcblx0YWN0RkI6IGZhbHNlLFxuXHRkZUFjdEZCOiBmYWxzZSxcblx0Y29uZmlndXJhdGlvbjogNyxcblx0aXRlbU5hbWU6IFwiaXRlbU5hbWVcIixcblx0bWFudWFsOiBmYWxzZSxcblx0bWFza2VkOiBmYWxzZSxcblx0Y2hhbmdpbmc6IGZhbHNlLFxuXHRsb2NhdGU6IGZhbHNlLFxufVxuXG5leHBvcnQgY29uc3QgcHVtcEluaXRpYWxQcm9wcyA9IHtcblx0c3RhdHVzOiBwdW1wSW5pdGlhbFN0YXR1cyxcbn1cbmV4cG9ydCBjb25zdCBwYXJhbWV0ZXJJbml0aWFsU3RhdGUgPSBbXG5cdHtcblx0XHRsYWJlbDoge1xuXHRcdFx0dGV4dDogXCJsYWJlbFwiLFxuXHRcdFx0Y2xhc3NOYW1lOiBcIlwiLFxuXHRcdFx0dG9vbHRpcFRleHQ6IFwiXCIsXG5cdFx0XHR0b29sdGlwUG9zaXRpb246IFwiXCIsXG5cdFx0XHR0b29sdGlwQ2xhc3NOYW1lOiBcIlwiLFxuXHRcdFx0dG9vbHRpcElkOiBcIlwiLFxuXHRcdH0sXG5cdFx0aW5wdXQ6IHtcblx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0aW5wdXRtb2RlOiBcIm51bWVyaWNcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkVudGVyIGEgbnVtYmVyXCIsXG5cdFx0XHRlZGl0YWJsZTogdHJ1ZSxcblx0XHRcdHBhdHRlcm46IFwiXlswLTldKlsuLF0/WzAtOV0qJFwiLFxuXHRcdFx0bWluOiAwLFxuXHRcdFx0bWF4OiAxMDAsXG5cdFx0XHRkZWNpbWFsUGxhY2VzOiAyLFxuXHRcdFx0ZXU6IFwiXFx1MDBCNUNcIixcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0sXG5cdH0gYXMgUGFyYW1JdGVtLFxuXTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxBdXRvTWFuU3RhdGUgPSB7XG5cdGF1dG86IHRydWUsXG5cdG1hbnVhbDogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IGluaXRpYWxPZmZPblN0YXRlID0ge1xuXHRvZmY6IGZhbHNlLFxuXHRvbjogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IGluaXRpYWxDb250cm9sU3RhdGUgPSB7XG5cdGNvbW1hbmQ6IHtcblx0XHRhdmFpbGFibGU6IHtcblx0XHRcdG1haW46IGZhbHNlLFxuXHRcdFx0dXBwZXJTZWF0OiBmYWxzZSxcblx0XHRcdGxvd2VyU2VhdDogZmFsc2Vcblx0XHR9LFxuXHRcdG1haW46IHtcblx0XHRcdGxhYmVsOiBcIk1haW5cIixcblx0XHRcdGF1dG9NYW51YWw6IGZhbHNlLFxuXHRcdFx0YWN0aXZhdGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHR1cHBlclNlYXQ6IHtcblx0XHRcdGxhYmVsOiBcIlVwcGVyIFNlYXRcIixcblx0XHRcdGFjdGl2YXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0bG93ZXJTZWF0OiB7XG5cdFx0XHRsYWJlbDogXCJMb3dlciBTZWF0XCIsXG5cdFx0XHRhY3RpdmF0aW9uOiBmYWxzZSxcblx0XHR9XG5cdH1cbn0gYXMgQ29tbWFuZFZhbHZlTXBQcm9wcztcbiIsImltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENvbXBvbmVudFByb3BzIH0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiO1xuXG5cbmV4cG9ydCB0eXBlIEVsZW1lbnRSZWYgPSBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuZXhwb3J0IHR5cGUgVmFsdmVTdGF0ZSA9IHtcblx0YWxhcm0/OiBib29sZWFuO1xuXHRhY3RGQjogYm9vbGVhbjtcblx0ZGVBY3RGQjogYm9vbGVhbjtcblx0dXNsPzogYm9vbGVhbjtcblx0bHNsPzogYm9vbGVhbjtcblx0YWN0aXZhdGVkQ29uZmlnOiBudW1iZXI7XG5cdGRlYWN0aXZhdGVkQ29uZmlnOiBudW1iZXI7XG5cdGl0ZW1OYW1lOiBzdHJpbmc7XG5cdG1hbnVhbDogYm9vbGVhbjtcblx0bWFza2VkOiBib29sZWFuO1xuXHRjaGFuZ2luZzogYm9vbGVhbjtcblx0bG9jYXRlOiBib29sZWFuO1xufTtcbmV4cG9ydCB0eXBlIFN0YXR1c0xpa2UgPSB7XG5cdGNvbmZpZ3VyYXRpb24/Om51bWJlclxuICAgIGFjdGl2YXRlZENvbmZpZz86IG51bWJlcjtcbiAgICBkZWFjdGl2YXRlZENvbmZpZz86IG51bWJlcjtcbiAgICBhY3RGQj86IGJvb2xlYW47XG4gICAgZGVBY3RGQj86IGJvb2xlYW47XG4gICAgdXNsPzogYm9vbGVhbjtcbiAgICBsc2w/OiBib29sZWFuO1xuICAgIGxvY2F0ZT86IGJvb2xlYW47XG4gICAgYWxhcm0/OiBib29sZWFuO1xuICAgIGNoYW5naW5nPzogYm9vbGVhbjtcbiAgICBtYW51YWw/OiBib29sZWFuO1xuICAgIG1hc2tlZD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBWYWx2ZUNvbXBvdW5kQ29udGV4dFR5cGUgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdHZhbHZlUHJvcHM6IFZhbHZlUHJvcHM7XG5cdG9uQWN0aW9uUGVyZm9ybWVkOiAoKSA9PiB2b2lkO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcbmV4cG9ydCB0eXBlIFZhbHZlQ29tcG91bmRSb290UHJvcHMgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdHZhbHZlUHJvcHM6IFZhbHZlUHJvcHM7XG5cdG9uQWN0aW9uUGVyZm9ybWVkOiAoKSA9PiB2b2lkO1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IHR5cGUgUHVtcFN0YXRlID0ge1xuXHRhbGFybTogYm9vbGVhbjtcblx0YWN0RkI6IGJvb2xlYW47XG5cdGRlQWN0RkI6IGJvb2xlYW47XG5cdGl0ZW1OYW1lOiBzdHJpbmc7XG5cdG1hbnVhbDogYm9vbGVhbjtcblx0bWFza2VkOiBib29sZWFuO1xuXHRjaGFuZ2luZzogYm9vbGVhbjtcblx0bG9jYXRlOiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgUHVtcENvbXBvdW5kQ29udGV4dFR5cGUgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdHB1bXBQcm9wczogUHVtcFByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5leHBvcnQgdHlwZSBQdW1wQ29tcG91bmRSb290UHJvcHMgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdHB1bXBQcm9wczogUHVtcFByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG4vKipcbiAqIERlZmluZSB0aGUgc2hhcGUgb2YgdGhlIFBhcmFtZXRlckFjdGlvbiB0eXBlXG4gKiBAVXNlYWdlIHVzZVBhcmFtZXRlclJlZHVjZXJcbiAqL1xuZXhwb3J0IHR5cGUgUGFyYW1ldGVyQWN0aW9uID0ge1xuXHR0eXBlOiBcIlVQREFURV9WQUxVRVwiO1xuXHR2YWx1ZTogbnVtYmVyO1xuXHRpbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUGFyYW1ldGVyUmVkdWNlciA9IChcblx0c3RhdGU6IFBhcmFtSXRlbSB8IFBhcmFtSXRlbVtdLFxuXHRhY3Rpb246IFBhcmFtZXRlckFjdGlvblxuKSA9PiBWYWx2ZVN0YXRlO1xuXG5leHBvcnQgdHlwZSBVc2VQYXJhbWV0ZXJSZWR1Y2VyID0ge1xuXHRzdGF0ZTogUGFyYW1JdGVtW107XG5cdHJlZHVjZXI6IHtcblx0XHR1cGRhdGVWYWx1ZTogKHZhbHVlOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG5cdFx0Ly9hZGQgbW9yZSBoYW5kbGVycyBhcyBuZWVkZWRcblx0fTtcbn07XG5leHBvcnQgdHlwZSBQYXJhbUxhYmVsID0ge1xuXHR0ZXh0OiBzdHJpbmc7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblx0dG9vbHRpcFRleHQ/OiBzdHJpbmc7XG5cdHRvb2x0aXBQb3NpdGlvbj86IHN0cmluZztcblx0dG9vbHRpcENsYXNzTmFtZT86IHN0cmluZztcblx0dG9vbHRpcElkPzogc3RyaW5nO1xufTtcbmV4cG9ydCB0eXBlIFBhcmFtSW5wdXQgPSB7XG5cdHR5cGU6IHN0cmluZztcblx0aW5wdXRtb2RlOlxuXHRcdHwgXCJub25lXCJcblx0XHR8IFwidGV4dFwiXG5cdFx0fCBcInRlbFwiXG5cdFx0fCBcInVybFwiXG5cdFx0fCBcImVtYWlsXCJcblx0XHR8IFwibnVtZXJpY1wiXG5cdFx0fCBcImRlY2ltYWxcIlxuXHRcdHwgXCJzZWFyY2hcIlxuXHRcdHwgdW5kZWZpbmVkO1xuXHRwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHRlZGl0YWJsZTogYm9vbGVhbjtcblx0cGF0dGVybjogc3RyaW5nO1xuXHRtaW46IG51bWJlcjtcblx0bWF4OiBudW1iZXI7XG5cdGRlY2ltYWxQbGFjZXM6IG51bWJlcjtcblx0Ly8gcGF0dGVybjogXCJeWzAtOV0qWy4sXT9bMC05XSokXCIgZm9yIGRlY2ltYWwgbnVtYmVyc1xuXHQvLyBwYXR0ZXJuOiBcIl5bMC05XSokXCIgZm9yIGludGVnZXJzXG5cdGV1OiBzdHJpbmc7XG5cdHZhbHVlOiBudW1iZXI7XG59O1xuLy8gdHlwZSBQYXJhbXNIZWFkZXIgPSB7XG4vLyBcdGxhYmVsOiBzdHJpbmdcbi8vIH1cbmV4cG9ydCB0eXBlIFBhcmFtSXRlbSA9IHtcblx0bGFiZWw6IFBhcmFtTGFiZWw7XG5cdGlucHV0OiBQYXJhbUlucHV0O1xufTtcbmV4cG9ydCB0eXBlIFBhcmFtZXRlcnNMaXN0U3RhdGUgPSB7XG5cdHBhcmFtZXRlcnM6IFBhcmFtSXRlbVtdO1xufTtcblxuZXhwb3J0IGNvbnN0IFZhbHZlQ2xhc3NOYW1lRW51bSA9IHtcblx0QWxhcm1TdGF0ZTogXCJBbGFybVN0YXRlXCIsXG5cdEFjdGl2YXRlZDogXCJBY3RpdmF0ZWRcIixcblx0RGVhY3RpdmF0ZWQ6IFwiRGVhY3RpdmF0ZWRcIixcblx0TWFudWFsOiBcIk1hbnVhbFwiLFxuXHRNYXNrZWQ6IFwiTWFza2VkXCIsXG5cdENoYW5naW5nOiBcIkNoYW5naW5nXCIsXG5cdE5vQWxhcm1NYXNrOiBcIk5vQWxhcm1NYXNrXCIsXG5cdExvY2F0ZTogXCJMb2NhdGVcIixcbn07XG5leHBvcnQgdHlwZSBWYWx2ZUNsYXNzTmFtZUVudW0gPVxuXHQodHlwZW9mIFZhbHZlQ2xhc3NOYW1lRW51bSlba2V5b2YgdHlwZW9mIFZhbHZlQ2xhc3NOYW1lRW51bV07XG5cbmV4cG9ydCBjb25zdCB2YWx2ZU1wSXRlbU5hbWVFbnVtID0ge1xuXHRWMWIxOiBcInYxYjFcIiwgLy8gaW5kZXggMFxuXHRWMWIyOiBcInYxYjJcIiwgLy8gaW5kZXggMVxuXHRWMWIzOiBcInYxYjNcIiwgLy8gaW5kZXggMlxuXHRWMWI0OiBcInYxYjRcIiwgLy8gaW5kZXggM1xuXHRWMmIxOiBcInYyYjFcIiwgLy8gaW5kZXggNFxuXHRWMmIyOiBcInYyYjJcIiwgLy8gaW5kZXggNVxuXHRWMmIzOiBcInYyYjNcIiwgLy8gaW5kZXggNlxuXHRWMmI0OiBcInYyYjRcIiwgLy8gaW5kZXggN1xuXHRWMjogXCJ2MlwiLCAvLyBpbmRleCA4XG5cdHYxOiBcInYxXCIsIC8vIGluZGV4IDlcblx0dXNsOiBcInVzbFwiLCAvLyBpbmRleCAxMCB1cHBlci1zZWF0LWxpZnRcblx0bHNsOiBcImxzbFwiLCAvLyBpbmRleCAxMSBsb3dlci1zZWF0LWxpZnRcblx0bG9jYXRlOiBcImxvY2F0ZVwiLCAvLyBpbmRleCAxMiBsb2NhdGUgYW5pbWF0aW9uXG59O1xuZXhwb3J0IHR5cGUgdmFsdmVNcEl0ZW1OYW1lRW51bSA9XG5cdCh0eXBlb2YgdmFsdmVNcEl0ZW1OYW1lRW51bSlba2V5b2YgdHlwZW9mIHZhbHZlTXBJdGVtTmFtZUVudW1dO1xuXG5cblxuY29uc3QgVmFsdmVTdGF0ZUVudW0gPSB7XG5cdGFsYXJtOiBcImFsYXJtXCIsXG5cdG1hbnVhbDogXCJtYW51YWxcIixcblx0bWFza2VkOiBcIm1hc2tlZFwiLFxufTtcbmV4cG9ydCB0eXBlIFZhbHZlU3RhdGVFbnVtID1cblx0KHR5cGVvZiBWYWx2ZVN0YXRlRW51bSlba2V5b2YgdHlwZW9mIFZhbHZlU3RhdGVFbnVtXTtcblxuY29uc3QgaXRlbUlkUG9zaXRpb25zID0gW1xuXHRcInJpZ2h0XCIsXG5cdFwibGVmdFwiLFxuXHRcInRvcC1sZWZ0XCIsXG5cdFwidG9wLXJpZ2h0XCIsXG5cdFwiYm90dG9tLWxlZnRcIixcblx0XCJib3R0b20tcmlnaHRcIixcbl07XG5cbmV4cG9ydCB0eXBlIEl0ZW1JZFBvc2l0aW9uVHlwZSA9ICh0eXBlb2YgaXRlbUlkUG9zaXRpb25zKVtudW1iZXJdO1xuZXhwb3J0IHR5cGUgUHJvY2Vzc09iamVjdCA9IHtcblx0c3RhdHVzOiBWYWx2ZVN0YXRlO1xufTtcbmV4cG9ydCB0eXBlIFB1bXAgPSB7XG5cdHN0YXR1czogUHVtcFN0YXRlO1xufTtcbmV4cG9ydCB0eXBlIFZhbHZlUHJvcHMgPSB7XG5cdHByb2Nlc3NPYmplY3Q/OiBQcm9jZXNzT2JqZWN0O1xuXHRsYWJlbFBvc2l0aW9uPzogSXRlbUlkUG9zaXRpb25UeXBlO1xuXHRzaG93TGFiZWw/OiBib29sZWFuO1xuXHRoYW5kbGVDbGljaz86ICgpID0+IHZvaWQ7XG59O1xuY29uc3QgcHVtcFR5cGVzPSBbXG5cdFwiY2VudHJpZnVnYWxcIixcblx0XCJkaWFwaHJhZ21cIixcblx0XCJnZWFyXCIsXG5cdFwibGlxdWlkLXJpbmdcIixcblx0XCJwb3NpdGl2ZS1kaXNwbGFjZW1lbnRcIixcblx0XCJwb3NpdGl2ZS1zY3Jld1wiLFxuXHRcInByb2dyZXNzaXZlLWNhdml0eVwiLFxuXVxuZXhwb3J0IHR5cGUgUHVtcFR5cGUgPSAodHlwZW9mIHB1bXBUeXBlcylbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIFB1bXBQcm9wcyA9IHtcblx0cHVtcFR5cGU/OiBQdW1wVHlwZTtcblx0cHJvY2Vzc09iamVjdD86IFB1bXA7XG5cdGxhYmVsUG9zaXRpb24/OiBJdGVtSWRQb3NpdGlvblR5cGU7XG5cdHNob3dMYWJlbD86IGJvb2xlYW47XG5cdGhhbmRsZUNsaWNrPzogKCkgPT4gdm9pZDtcbn07XG5leHBvcnQgY29uc3QgcHVtcEl0ZW1MaXN0ID0gW1xuXHRcInN5bWJvbC0xXCIsXG5cdFwic3ltYm9sLTJcIixcbiBcdFwibG9jYXRlXCIsXG5dXG5leHBvcnQgdHlwZSBQdW1wSXRlbUxpc3QgPSAodHlwZW9mIHB1bXBJdGVtTGlzdClbbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgSXRlbURhdGEgPSB7XG5cdGtleTogc3RyaW5nO1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRwcm9wczogVmFsdmVTdGF0ZTtcbn07XG5cbmV4cG9ydCB0eXBlIGl0ZW1OYW1lUHJvcHMgPSB7XG5cdGtleTogc3RyaW5nO1xuXHRuYW1lOiBbc3RyaW5nLCBzdHJpbmddO1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRpbmRleDogbnVtYmVyO1xufTtcbmV4cG9ydCB0eXBlIENvbW1hbmRWYWx2ZU1wUHJvcHMgPSB7XG5cdGNvbW1hbmQ/OiB7XG5cdFx0YXZhaWxhYmxlPzoge1xuXHRcdFx0bWFpbjogYm9vbGVhbjtcblx0XHRcdHVwcGVyU2VhdD86IGJvb2xlYW47XG5cdFx0XHRsb3dlclNlYXQ/OiBib29sZWFuO1xuXHRcdH07XG5cdFx0bWFpbj86IHtcblx0XHRcdGxhYmVsOiBzdHJpbmc7XG5cdFx0XHRhdXRvTWFudWFsOiBib29sZWFuO1xuXHRcdFx0YWN0aXZhdGlvbjogYm9vbGVhbjtcblx0XHR9O1xuXHRcdHVwcGVyU2VhdD86IHtcblx0XHRcdGxhYmVsOiBzdHJpbmc7XG5cdFx0XHRhY3RpdmF0aW9uOiBib29sZWFuO1xuXHRcdH07XG5cdFx0bG93ZXJTZWF0Pzoge1xuXHRcdFx0bGFiZWw6IHN0cmluZztcblx0XHRcdGFjdGl2YXRpb246IGJvb2xlYW47XG5cdFx0fTtcblx0fTtcbn07XG5cbmV4cG9ydCB0eXBlIENvbW1hbmRzVmFsdmVNcENvbXBvdW5kQ29udGV4dFR5cGUgPSB7XG5cdGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wczxhbnksIGFueT47XG5cdHVzZVJlZHVjZXI6IFVzZVZhbHZlTXBDb21tYW5kUmVkdWNlcjtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5leHBvcnQgdHlwZSBDb21tYW5kc1ZhbHZlTXBDb21wb3VuZFJvb3RQcm9wcyA9IHtcblx0Y29tcG9uZW50UHJvcHM6IENvbXBvbmVudFByb3BzPGFueSwgYW55Pjtcblx0Y29tbWFuZDogQ29tbWFuZFZhbHZlTXBQcm9wcztcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG4vKipcbiAqIERlZmluZSB0aGUgc2hhcGUgb2YgdGhlIFZhbHZlQWN0aW9uIHR5cGVcbiAqIEBVc2VhZ2UgdXNlVmFsdmVSZWR1Y2VyXG4gKi9cbmV4cG9ydCB0eXBlIFZhbHZlTXBDb21tYW5kQWN0aW9uID1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0FVVE9fTUFOVUFMXCI7IG1vZGU6IFwiYXV0b1wiIHwgXCJtYW51YWxcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9NQUlOX0FWQUlMXCI7IHZhbHVlOiBib29sZWFuIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX1VQUEVSU0VBVF9BVkFJTFwiOyB2YWx1ZTogYm9vbGVhbiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9MT1dFUlNFQVRfQVZBSUxcIjsgdmFsdWU6IGJvb2xlYW4gfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTUFJTl9NQU5fT05cIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9NQUlOX01BTl9PRkZcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9VU0xfTUFOX09OXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfVVNMX01BTl9PRkZcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9MU0xfTUFOX09OXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTFNMX01BTl9PRkZcIiB9O1xuZXhwb3J0IHR5cGUgVmFsdmVNcENvbW1hbmRSZWR1Y2VyID0gKFxuXHRzdGF0ZTogQ29tbWFuZFZhbHZlTXBQcm9wcyxcblx0YWN0aW9uOiBWYWx2ZU1wQ29tbWFuZEFjdGlvblxuKSA9PiBWYWx2ZVN0YXRlO1xuXG5leHBvcnQgdHlwZSBVc2VWYWx2ZU1wQ29tbWFuZFJlZHVjZXIgPSB7XG5cdHN0YXRlOiBDb21tYW5kVmFsdmVNcFByb3BzO1xuXHRyZWR1Y2VyOiB7XG5cdFx0dXBkYXRlQXV0b01hblNlbGVjdGlvbjogKG1vZGU6IFwiYXV0b1wiIHwgXCJtYW51YWxcIikgPT4gdm9pZDtcblx0XHR1cGRhdGVNYWluQXZhaWxhYmxlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG5cdFx0dXBkYXRlVXBwZXJTZWF0QXZhaWxhYmxlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG5cdFx0dXBkYXRlTG93ZXJTZWF0QXZhaWxhYmxlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG5cdFx0dXBkYXRlTWFpbk1hbnVhbE9uOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZU1haW5NYW51YWxPZmY6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlVXNsTWFudWFsT246ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlVXNsTWFudWFsT2ZmOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxzbE1hbnVhbE9uOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxzbE1hbnVhbE9mZjogKCkgPT4gdm9pZDtcblx0XHQvL2FkZCBtb3JlIGhhbmRsZXJzIGFzIG5lZWRlZFxuXHR9O1xufTtcbmV4cG9ydCBjb25zdCBoeEl0ZW1OYW1lRW51bSA9IHtcblx0YjE6IFwiYmFzZS0xXCIsIC8vIGluZGV4IDBcblx0YjI6IFwiYmFzZS0yXCIsIC8vIGluZGV4IDFcblx0YjM6IFwiYmFzZS0zXCIsIC8vIGluZGV4IDJcblx0YjQ6IFwiYmFzZS00XCIsIC8vIGluZGV4IDNcblx0VjJiMTogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMjogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMzogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjI6IFwidjJcIiwgLy8gaW5kZXggOFxuXHR2MTogXCJ2MVwiLCAvLyBpbmRleCA5XG5cdHVzbDogXCJ1c2xcIiwgLy8gaW5kZXggMTAgdXBwZXItc2VhdC1saWZ0XG5cdGxzbDogXCJsc2xcIiwgLy8gaW5kZXggMTEgbG93ZXItc2VhdC1saWZ0XG5cdGxvY2F0ZTogXCJsb2NhdGVcIiwgLy8gaW5kZXggMTIgbG9jYXRlIGFuaW1hdGlvblxufTtcbmV4cG9ydCB0eXBlIEh4SXRlbU5hbWVFbnVtID1cblx0KHR5cGVvZiBoeEl0ZW1OYW1lRW51bSlba2V5b2YgdHlwZW9mIGh4SXRlbU5hbWVFbnVtXTtcbiIsImltcG9ydCB7IGNvbnZlcnRUUFZhbHZlQ29uZmlnVG9IbWlWYWx2ZUNvbmZpZywgZ2V0Qm9vbEF0SW5kZXggfSBmcm9tIFwiLi4vdXRpbHMvbnVtYmVyVXRpbFwiO1xuaW1wb3J0IHtcblx0SXRlbUlkUG9zaXRpb25UeXBlLFxuXHQvLyBJdGVtTmFtZUVudW0sXG5cdHB1bXBJdGVtTGlzdCxcblx0dmFsdmVNcEl0ZW1OYW1lRW51bSxcblx0dHlwZSBQdW1wU3RhdGUsXG5cdHR5cGUgUHVtcFR5cGUsXG5cdHR5cGUgU3RhdHVzTGlrZSxcblx0dHlwZSBWYWx2ZVN0YXRlLFxufSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuLyoqXG4gKiBUaGlzIGlzIGEgdXRpbGl0eSBmdW5jdGlvbiBmb3IgdGhlIGNvbXBvbmVudCBcInByb2Nlc3Mtb2JqZWN0L1ZhbHZlRkNcIlxuICpcbiAqIEBwYXJhbSBpbmRleDogbnVtYmVyIHRoZSBpbmRleCBvZiBhbiBkeW5hbWljIHZpc3VhbCBlbGVtZW50IFwiaXRlbVwiIHdpdGhpbiB0aGUgVmFsdmUgY29tcG9uZW50XG4gKiBAcGFyYW0gdmFsdmVTdGF0dXM/OlZhbHZlU3RhdHVzIHRoZSBzdGF0dXMgcmVwcmVzZW50aW5nIHBoeXNpY2FsIHByb2Nlc3MgdmFsdmVcbiAqIEByZXR1cm5zIGNsYXNzTmFtZTpzdHJpbmcgcmV0dXJucyBhZGRpdGlvbmFsIGNsYXNzbmFtZXMgZm9yIGFuIHZpc3VhbCBlbGVtZW50IG9mIHRoZSB2YWx2ZSBjb21wb25lbnQuXG4gKlxuICogUmV0dXJuZWQgY2xhc3NuYW1lcyBhcmU7XG4gKiBcdGhpZGUgLSB0aGlzIGhpZGVzIHRoZSBpdGVtXG4gKiBcdHNob3cgLVxuICovXG5cbmV4cG9ydCBjb25zdCBnZXRWYWx2ZU1wSXRlbUNsYXNzTmFtZSA9IChcblx0aW5kZXg6IG51bWJlcixcblx0dmFsdmVTdGF0dXM/OiBWYWx2ZVN0YXRlXG4pOiBzdHJpbmcgPT4ge1xuXHRsZXQgY2xhc3NOYW1lID0gXCJcIjtcblx0Ly8gSGFuZGxlIHRoZSBmYWN0IHRoYXQgQWN0aXZhdGVkQ29uZmlnIGFuZCBEZWFjdGl2YXRlZENvbmZpZyBhcmUgb3B0aW9uYWwgYW5kIG1heWJlIHVuZGVmaW5lZFxuXHRjb25zdCBBY3RpdmF0ZWRDb25maWdWYWx1ZSA9IGNvbnZlcnRUUFZhbHZlQ29uZmlnVG9IbWlWYWx2ZUNvbmZpZyh2YWx2ZVN0YXR1cz8uYWN0aXZhdGVkQ29uZmlnID8/IDApO1xuXHRjb25zdCBEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlID0gY29udmVydFRQVmFsdmVDb25maWdUb0htaVZhbHZlQ29uZmlnKHZhbHZlU3RhdHVzPy5kZWFjdGl2YXRlZENvbmZpZyA/PyAwKTtcblxuXG5cblx0aWYgKGluZGV4IDwgOCkge1xuXHRcdGlmIChcblx0XHRcdChnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpICYmIHZhbHZlU3RhdHVzPy5hY3RGQikgfHxcblx0XHRcdChnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgJiYgdmFsdmVTdGF0dXM/LmRlQWN0RkIpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gOSkge1xuXHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHR9IGVsc2UgaWYgKGluZGV4ID09PSA4KSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMCkge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMCkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEwKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93IGl0ZW1cIjtcblx0XHRcdGlmICh2YWx2ZVN0YXR1cz8udXNsKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgYWN0aXZhdGVkXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgZGVhY3RpdmF0ZWRcIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDExKSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDExKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTEpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdFx0aWYgKHZhbHZlU3RhdHVzPy5sc2wpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBhY3RpdmF0ZWRcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiZGVhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBkZWFjdGl2YXRlZFwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTIpIHtcblx0XHRpZiAodmFsdmVTdGF0dXM/LmxvY2F0ZSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJzbWFsbFwiLCBcIlwiKSArIFwiIHNtYWxsXCI7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCA4KSB8fFxuXHRcdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCA4KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibGFyZ2VcIiwgXCJcIikgKyBcIiBsYXJnZVwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImhpZGUgaXRlbVwiLCBcIlwiKSArIFwiIGhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fVxuXHQvLyBBZGRpdGlvbnMgdG8gdGhlIGNsYXNzTmFtZVxuXG5cdGlmIChjbGFzc05hbWUuaW5jbHVkZXMoXCJzaG93XCIpICYmICFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtXCIpKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCwgY2xhc3NOYW1lKTtcblx0XHRpZiAodmFsdmVTdGF0dXM/LmFsYXJtKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImFsYXJtXCIsIFwiXCIpICsgXCIgYWxhcm1cIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5jaGFuZ2luZykge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJjaGFuZ2luZ1wiLCBcIlwiKSArIFwiIGNoYW5naW5nXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFudWFsKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIm1hbnVhbFwiLCBcIlwiKSArIFwiIG1hbnVhbFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCAmJiAhdmFsdmVTdGF0dXMuYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibm8tYWxhcm0tbWFza1wiLCBcIlwiKSArIFwiIG5vLWFsYXJtLW1hc2tcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYXNrZWQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibWFza2VkXCIsIFwiXCIpICsgXCIgbWFza2VkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uYWN0RkIpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uZGVBY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJkZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGRlYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHR9XG5cdC8vIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgsIGNsYXNzTmFtZSk7XG5cblx0cmV0dXJuIGNsYXNzTmFtZTsgLy8gZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbm8gb3RoZXIgY29uZGl0aW9uIGlzIG1ldFxufTtcbi8qKlxuICogRnVuY3Rpb24gZ2V0Q2xhc3NOYW1lV2l0aFN0YXR1cy5cbiAqIFRoaXMgaXMgYSB1dGlsaXR5IGZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyBjc3MgY2xhc3NOYW1lcyBmb3IgZWFjaFxuICogZWxlbWVudCBpbiBhIGhtaS1jb21wb25lbnQgc3ltYm9sLlxuICogSW4gdGhlIERPTSB0cmVlIGJhc2UgZWxlbWVudHMgd2lsbCBoYXZlIGEgY2xhc3Mgc3VjaCBhcyBcImJhc2UtMSB0byBuXCJcbiAqIHdpdGggZHluYW1pY0l0ZW1zIGhhdmluZyBhIGNsYXNzIHN1Y2ggYXMgXCJkeW5hbWljLTEgdG8gblwiXG4gKiBAcGFyYW0gaW5kZXg6IG51bWJlciA6IEFycmF5IGluZGV4IHN0YXJ0aW5nIGF0IHplcm9cbiAqIEBwYXJhbSBzdGF0dXM6IFMgOiBBIFN0YXR1c0xpa2Ugb2JqZWN0XG4gKiBAcGFyYW0gdHlwZTogc3RyaW5nOlxuICogQHBhcmFtIGJhc2VFbGVtZW50czogbnVtYmVyIDpcbiAqIEBwYXJhbSBiYXNlQ29uZmlnOiBudW1iZXIgOlxuICogQHBhcmFtIGR5bmFtaWNJdGVtczogbnVtYmVyIDpcbiAqIEBwYXJhbSBkeW5hbWljQ29uZmlnOiBudW1iZXIgOlxuICplbGVtZW50VmFyaWFudHMgPSBbXG4gXHR7XG4gXHRzdGF0dXNLZXk6IHN0cmluZyxcbiBcdGFkZGl0aW9uYWxDbGFzczogc3RyaW5nXG5cdH1cbiBdXG4gKi9cbmV4cG9ydCB0eXBlIEVsZW1lbnRWYXJpYW50ID0ge1xuXHRzdGF0dXNLZXk/OiBIbWlTdGF0dXM7XG5cdGFkZGl0aW9uYWxDbGFzcz86IHN0cmluZztcblx0YmFzZUNsYXNzPzogc3RyaW5nO1xufTtcbmV4cG9ydCB0eXBlIEVsZW1lbnRWYXJpYW50TGlzdCA9IEVsZW1lbnRWYXJpYW50W107XG5leHBvcnQgdHlwZSBib29sU3RyaW5nID0ge1xuXHR0cnVlU3RyaW5nPzogc3RyaW5nO1xuXHRmYWxzZVN0cmluZz86IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEhtaVN0YXR1cyA9IHtcblx0YWxhcm0/OiBib29sU3RyaW5nO1xuXHRhY3RGQj86IGJvb2xTdHJpbmc7XG5cdGRlQWN0RkI/OiBib29sU3RyaW5nO1xuXHRtYW51YWw/OiBib29sU3RyaW5nO1xuXHRtYXNrZWQ/OiBib29sU3RyaW5nO1xuXHRjaGFuZ2luZz86IGJvb2xTdHJpbmc7XG5cdGxvY2F0ZT86IGJvb2xTdHJpbmc7XG5cdGFjdGl2YXRlZD86IGJvb2xTdHJpbmc7XG5cdHVzbD86IGJvb2xTdHJpbmc7XG5cdGxzbD86IGJvb2xTdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDbGFzc05hbWVXaXRoU3RhdHVzID0gPFMgZXh0ZW5kcyBTdGF0dXNMaWtlPihcblx0aW5kZXg6IG51bWJlcixcblx0c3RhdHVzPzogUyxcblx0ZWxlbWVudFZhcmlhbnRzPzogRWxlbWVudFZhcmlhbnRMaXN0LFxuXHRiYXNlQ2xhc3NOYW1lPzogc3RyaW5nLFxuXHRiYXNlRWxlbWVudHM/OiBudW1iZXIsXG5cdGJhc2VDb25maWc/OiBudW1iZXIsXG5cdGR5bmFtaWNJdGVtcz86IG51bWJlcixcblx0ZHluYW1pY0NvbmZpZz86IG51bWJlclxuKTogc3RyaW5nID0+IHtcblx0bGV0IGNsYXNzTmFtZSA9IFwiXCI7XG5cdGxldCBhZGRpdGlvbmFsQ2xhc3MgPSBcIlwiO1xuXG5cbmlmIChlbGVtZW50VmFyaWFudHMgJiYgZWxlbWVudFZhcmlhbnRzW2luZGV4XT8uc3RhdHVzS2V5ICYmIHN0YXR1cykge1xuICBjb25zdCBzdGF0dXNLZXlPYmogPSBlbGVtZW50VmFyaWFudHNbaW5kZXhdLnN0YXR1c0tleTtcbiAgLy8gR2V0IGtleXMgZnJvbSBzdGF0dXNLZXlPYmogdGhhdCBhcmUgYWxzbyBpbiBzdGF0dXNcbiAgY29uc3QgbWF0Y2hpbmdLZXlzID0gT2JqZWN0LmtleXMoc3RhdHVzS2V5T2JqKS5maWx0ZXIoXG4gICAgKGtleSkgPT4ga2V5IGluIHN0YXR1c1xuICApIGFzIChrZXlvZiB0eXBlb2Ygc3RhdHVzS2V5T2JqICYga2V5b2YgdHlwZW9mIHN0YXR1cylbXTtcblxuICBmb3IgKGNvbnN0IGtleSBvZiBtYXRjaGluZ0tleXMpIHtcbiAgICAvLyBOb3cgeW91IGNhbiBzYWZlbHkgYWNjZXNzIGJvdGggc3RhdHVzS2V5T2JqW2tleV0gYW5kIHN0YXR1c1trZXldXG4gICAgY29uc3Qga2V5U3RhdHVzVmFsdWUgPSBzdGF0dXNLZXlPYmpba2V5XTtcbiAgICBjb25zdCBzdGF0dXNWYWx1ZSA9IHN0YXR1c1trZXldO1xuICAgIGlmIChzdGF0dXNWYWx1ZSl7XG5cdFx0YWRkaXRpb25hbENsYXNzICs9IGAgJHtrZXlTdGF0dXNWYWx1ZT8udHJ1ZVN0cmluZyA/IGtleVN0YXR1c1ZhbHVlLnRydWVTdHJpbmcgOiBcIlwifWBcblx0fWVsc2V7XG5cdFx0YWRkaXRpb25hbENsYXNzICs9IGAgJHtrZXlTdGF0dXNWYWx1ZT8uZmFsc2VTdHJpbmcgPyBrZXlTdGF0dXNWYWx1ZS5mYWxzZVN0cmluZyA6IFwiXCJ9YFxuXHR9XG4gIH1cbn1cblx0Ly8gQmFzZSBFbGVtZW50c1xuXHRpZiAoYmFzZUVsZW1lbnRzICYmIGJhc2VDb25maWcpIHtcblx0XHRpZiAoaW5kZXggPCBiYXNlRWxlbWVudHMpIHtcblx0XHRcdGxldCBpdGVtU3RyaW5nID0gaW5kZXggPiAwID8gXCJpdGVtXCIgOmAke2Jhc2VDbGFzc05hbWV9YDtcblx0XHRcdGlmIChnZXRCb29sQXRJbmRleChiYXNlQ29uZmlnLCBpbmRleCkpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gYHNob3cgJHtpdGVtU3RyaW5nfSAke2FkZGl0aW9uYWxDbGFzc31gO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gYGhpZGUgJHtpdGVtU3RyaW5nfWA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIER5bmFtaWMgSXRlbXNcblx0XHRpZiAoZHluYW1pY0l0ZW1zICYmIGR5bmFtaWNDb25maWcpIHtcblx0XHRcdGxldCBkeW5hbUluZGV4ID0gaW5kZXggLSBiYXNlRWxlbWVudHM7XG5cdFx0XHRpZiAoaW5kZXggPj0gYmFzZUVsZW1lbnRzICYmIGluZGV4IDwgYmFzZUVsZW1lbnRzICsgZHluYW1pY0l0ZW1zKSB7XG5cdFx0XHRcdGlmIChnZXRCb29sQXRJbmRleChkeW5hbWljQ29uZmlnLCBkeW5hbUluZGV4KSkge1xuXHRcdFx0XHRcdGNsYXNzTmFtZSA9IGBzaG93IGl0ZW1gO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzTmFtZSA9IGBoaWRlIGl0ZW1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjbGFzc05hbWVcbn07XG4vKipcbiAqIEByZXR1cm5zIEFycmF5IG9mIGl0ZW1OYW1lKHMpIGZvciBlYWNoIHZpc3VhbCBlbGVtZW50IG9mIGEgdmFsdmUgY29tcG9uZW50XG4gKi9cbi8vIGV4cG9ydCBjb25zdCBpdGVtTmFtZXMgPSBPYmplY3QuZW50cmllcyhJdGVtTmFtZUVudW0pLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuLy8gXHRyZXR1cm4ge1xuLy8gXHRcdGtleTogdXVpZHY0KCksXG4vLyBcdFx0bmFtZToga2V5LFxuLy8gXHRcdHZhbHVlOiBrZXlbMV0sXG4vLyBcdFx0aW5kZXg6IGluZGV4LFxuLy8gXHR9O1xuLy8gfSk7XG5leHBvcnQgY29uc3QgdmFsdmVNcEl0ZW1OYW1lcyA9IE9iamVjdC5lbnRyaWVzKHZhbHZlTXBJdGVtTmFtZUVudW0pLm1hcChcblx0KGtleSwgaW5kZXgpID0+IHtcblx0XHQvLyBjb25zb2xlLmxvZyhgSW4gYnVpbGQgSXRlbU5hbWVzIG5hbWUgJHtrZXl9IGluZGV4ICR7aW5kZXh9YCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGtleTogdXVpZHY0KCksXG5cdFx0XHRuYW1lOiBrZXksXG5cdFx0XHR2YWx1ZToga2V5WzFdLFxuXHRcdFx0aW5kZXg6IGluZGV4LFxuXHRcdH07XG5cdH1cbik7XG5cblxuXG5leHBvcnQgY29uc3QgZ2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUgPSAoXG5cdGNsYXNzTmFtZTogc3RyaW5nLFxuXHRpdGVtSWRQb3NpdGlvbjogSXRlbUlkUG9zaXRpb25UeXBlXG4pOiBJdGVtSWRQb3NpdGlvblR5cGUgPT4ge1xuXHQvLyBDaGVjayBjbGFzc05hbWUgaW5jbHVkZXMgJ2l0ZW1JZCBwb3BvdmVyJywgaWYgbm90IHJldHVybiBjbGFzc05hbWUgYW5kIHdhcm5cblx0aWYgKCFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtSWQgcG9wb3ZlclwiKSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiRnVuY3Rpb24gZ2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUgY2FsbGVkIHdoZW4gJ2l0ZW1JZCBwb3BvdmVyJyBub3QgaW4gZ2l2ZW4gY2xhc3NOYW1lXCJcblx0XHQpO1xuXHRcdHJldHVybiBjbGFzc05hbWU7XG5cdH1cblx0Ly8gT3ZlciB3cml0ZSBnaXZlbiBjbGFzc05hbWVcblx0Y2xhc3NOYW1lID0gXCJpdGVtSWQgcG9wb3ZlclwiO1xuXHRzd2l0Y2ggKGl0ZW1JZFBvc2l0aW9uKSB7XG5cdFx0Y2FzZSBcImxlZnRcIjpcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tbGVmdFwiLCBcIlwiKSArIFwiIHBvc2l0aW9uLWxlZnRcIjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJyaWdodFwiOlxuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi1yaWdodFwiLCBcIlwiKSArIFwiIHBvc2l0aW9uLXJpZ2h0XCI7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwidG9wLWxlZnRcIjpcblx0XHRcdGNsYXNzTmFtZSA9XG5cdFx0XHRcdGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tdG9wLWxlZnRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi10b3AtbGVmdFwiO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcInRvcC1yaWdodFwiOlxuXHRcdFx0Y2xhc3NOYW1lID1cblx0XHRcdFx0Y2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi10b3AtcmlnaHRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi10b3AtcmlnaHRcIjtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJib3R0b20tbGVmdFwiOlxuXHRcdFx0Y2xhc3NOYW1lID1cblx0XHRcdFx0Y2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi1ib3R0b20tbGVmdFwiLCBcIlwiKSArIFwiIHBvc2l0aW9uLWJvdHRvbS1sZWZ0XCI7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiYm90dG9tLXJpZ2h0XCI6XG5cdFx0XHRjbGFzc05hbWUgPVxuXHRcdFx0XHRjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLWJvdHRvbS1yaWdodFwiLCBcIlwiKSArXG5cdFx0XHRcdFwiIHBvc2l0aW9uLWJvdHRvbS1yaWdodFwiO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3NOYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1bXBJdGVtTmFtZXMgPSBwdW1wSXRlbUxpc3QubWFwKChrZXksIGluZGV4KSA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKGBJbiBidWlsZCBJdGVtTmFtZXMgbmFtZSAke2tleX0gaW5kZXggJHtpbmRleH1gKTtcblx0cmV0dXJuIHtcblx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdG5hbWU6IGtleSxcblx0XHRpbmRleDogaW5kZXgsXG5cdH07XG59KTtcbmNvbnN0IGdldFB1bXBDb25maWd1cmF0aW9uID0gKHB1bXBUeXBlOiBQdW1wVHlwZSk6IG51bWJlciA9PiB7XG5cdHN3aXRjaCAocHVtcFR5cGUpIHtcblx0XHRjYXNlIFwiY2VudHJpZnVnYWxcIjpcblx0XHRcdHJldHVybiAxO1xuXHRcdGNhc2UgXCJkaWFwaHJhZ21cIjpcblx0XHRcdHJldHVybiAxO1xuXHRcdGNhc2UgXCJwb3NpdGl2ZS1kaXNwbGFjZW1lbnRcIjpcblx0XHRcdHJldHVybiAxO1xuXHRcdGNhc2UgXCJwcm9ncmVzc2l2ZS1jYXZpdHlcIjpcblx0XHRcdHJldHVybiAxO1xuXHRcdGNhc2UgXCJnZWFyXCI6XG5cdFx0XHRyZXR1cm4gMztcblx0XHRjYXNlIFwibGlxdWlkLXJpbmdcIjpcblx0XHRcdHJldHVybiAzO1xuXHRcdGNhc2UgXCJwb3NpdGl2ZS1zY3Jld1wiOlxuXHRcdFx0cmV0dXJuIDM7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IEVycm9yKGBJbiBnZXRQdW1wQ29uZmlndXJhdGlvbigpIHB1bXAgdHlwZTogJHtwdW1wVHlwZX0gbm90IGZvdW5kYCk7XG5cdH1cbn07XG5leHBvcnQgY29uc3QgZ2V0UHVtcEl0ZW1DbGFzc05hbWUgPSAoXG5cdGluZGV4OiBudW1iZXIsXG5cdHB1bXBUeXBlOiBQdW1wVHlwZSxcblx0c3RhdHVzPzogUHVtcFN0YXRlXG4pOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBjb25maWd1cmF0aW9uID0gZ2V0UHVtcENvbmZpZ3VyYXRpb24ocHVtcFR5cGUpO1xuXHRsZXQgY2xhc3NOYW1lID0gXCJcIjtcblx0Ly8gSGFuZGxlIHRoZSBmYWN0IHRoYXQgQWN0aXZhdGVkQ29uZmlnIGFuZCBEZWFjdGl2YXRlZENvbmZpZyBhcmUgb3B0aW9uYWwgYW5kIG1heWJlIHVuZGVmaW5lZFxuXHRpZiAoaW5kZXggPCAyKSB7XG5cdFx0aWYgKGdldEJvb2xBdEluZGV4KGNvbmZpZ3VyYXRpb24sIGluZGV4KSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gYHNob3cgaXRlbSAke3B1bXBUeXBlfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZSBpdGVtXCI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjbGFzc05hbWU7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHVtcFN0YXR1c0NsYXNzTmFtZXMgPSAoXG5cdGNsYXNzTmFtZTogc3RyaW5nLFxuXHRzdGF0dXM6IFB1bXBTdGF0ZVxuKSA9PiB7XG5cdC8vIEFkZGl0aW9ucyB0byB0aGUgY2xhc3NOYW1lXG5cdC8vIGNvbnNvbGUubG9nKGBzdGF0dXM6ICR7SlNPTi5zdHJpbmdpZnkoc3RhdHVzLG51bGwsIDIpfWApO1xuXG5cdGlmIChjbGFzc05hbWUuaW5jbHVkZXMoXCJzaG93XCIpICYmICFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtXCIpKSB7XG5cdFx0aWYgKHN0YXR1cz8uYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiYWxhcm1cIiwgXCJcIikgKyBcIiBhbGFybVwiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5jaGFuZ2luZykge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJjaGFuZ2luZ1wiLCBcIlwiKSArIFwiIGNoYW5naW5nXCI7XG5cdFx0fVxuXHRcdGlmIChzdGF0dXM/Lm1hbnVhbCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJtYW51YWxcIiwgXCJcIikgKyBcIiBtYW51YWxcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8ubWFza2VkICYmICFzdGF0dXMuYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwibm8tYWxhcm0tbWFza1wiLCBcIlwiKSArIFwiIG5vLWFsYXJtLW1hc2tcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8ubWFza2VkKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIm1hc2tlZFwiLCBcIlwiKSArIFwiIG1hc2tlZFwiO1xuXHRcdH1cblx0XHRpZiAoc3RhdHVzPy5hY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBhY3RpdmF0ZWRcIjtcblx0XHR9XG5cdFx0aWYgKHN0YXR1cz8uZGVBY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJkZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIGRlYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjbGFzc05hbWU7XG59O1xuIiwiLyoqXG4gKiBITUkgQ29tcG9uZW50IC0gSGVhdCBFeGNoYW5nZXIgdHlwZXMgZGVmc1xuICovXG5cbmltcG9ydCB0eXBlIHsgQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBJdGVtSWRQb3NpdGlvblR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBIWF9DT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5IZWF0RXhjaGFuZ2VyXCI7XG5cbmNvbnN0IEhlYXRFeGNoYW5nZXJUeXBlcyA9IFtcblx0XCJwbGF0ZVwiLFxuXHRcInR1YnVsYXJcIixcbl07XG5leHBvcnQgdHlwZSBIZWF0RXhjaGFuZ2VyVHlwZXMgPSAodHlwZW9mIEhlYXRFeGNoYW5nZXJUeXBlcylbbnVtYmVyXTtcbmV4cG9ydCBlbnVtIEh4TW9kZXMge1xuXHRhbGFybSA9IFwiYWxhcm1cIixcblx0aGVhdGluZyA9IFwiaGVhdGluZ1wiLFxuXHRjb29saW5nID0gXCJjb29saW5nXCIsXG59O1xuXG5cbmV4cG9ydCB0eXBlIEh4UHJvcHMgPSB7XG5cdHR5cGU/OiBIZWF0RXhjaGFuZ2VyVHlwZXM7XG5cdGl0ZW1OYW1lPzogc3RyaW5nO1xuXHRtb2RlPzogSHhNb2Rlc1trZXlvZiBIeE1vZGVzXTtcblx0bG9jYXRlPzogYm9vbGVhbjtcblx0c2hvd0xhYmVsPzogYm9vbGVhbjtcblx0bGFiZWxQb3NpdGlvbj86IEl0ZW1JZFBvc2l0aW9uVHlwZVxufVxuXG5leHBvcnQgY29uc3QgSHhJdGVtTGlzdCA9IFtcblx0XCJpdGVtLTFcIixcblx0XCJpdGVtLTJcIixcblx0XCJpdGVtLTNcIixcblx0XCJpdGVtLTRcIixcblx0XCJpdGVtLTVcIixcblx0XCJpdGVtLTZcIixcblx0XCJpdGVtLTdcIixcblx0XCJiYXNlLTFcIixcblx0XCJsb2NhdGVcIixcbl1cbmV4cG9ydCB0eXBlIEh4SXRlbXMgPSAodHlwZW9mIEh4SXRlbUxpc3QpW251bWJlcl07XG5cbmV4cG9ydCB0eXBlIEh4Q29tcG91bmRDb250ZXh0VHlwZSA9IHtcblx0Y29tcG9uZW50UHJvcHM6IENvbXBvbmVudFByb3BzPGFueSwgYW55Pjtcblx0aXRlbVByb3BzOiBIeFByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG4iLCIvKipcbiAqIEhNSSBDb21wb25lbnQgLSBIZWF0IEV4Y2hhbmdlciAtIFBsYXRlIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cbmltcG9ydCB7djQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBIeEl0ZW1MaXN0LCB0eXBlIEhlYXRFeGNoYW5nZXJUeXBlcywgdHlwZSBIeE1vZGVzIH0gZnJvbSAnLi4vLi4vLi4vYXItdHlwZXMvcHJvY2Vzc09iamVjdHMvaGVhdEV4Y2hhbmdlcnMvaHgtdHlwZXMnXG5pbXBvcnQgeyBnZXRCb29sQXRJbmRleCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL251bWJlclV0aWwnO1xuZXhwb3J0IGNvbnN0IGh4SXRlbU5hbWVzID0gSHhJdGVtTGlzdC5tYXAoXG5cdChrZXksIGluZGV4KSA9PiB7XG5cdFx0Ly8gY29uc29sZS5sb2coYEluIGJ1aWxkIEl0ZW1OYW1lcyBuYW1lICR7a2V5fSBpbmRleCAke2luZGV4fWApO1xuXHRcdHJldHVybiB7XG5cdFx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdFx0bmFtZToga2V5LFxuXHRcdFx0aW5kZXg6IGluZGV4LFxuXHRcdH07XG5cdH1cbik7XG5cbmNvbnN0IGdldEh4Q29uZmlndXJhdGlvbiA9ICh0eXBlOiBIZWF0RXhjaGFuZ2VyVHlwZXMpOm51bWJlciA9Pntcblx0c3dpdGNoICh0eXBlKXtcblx0XHRjYXNlIFwicGxhdGVcIjpcblx0XHRcdHJldHVybiAxXG5cdFx0Y2FzZSBcInR1YmVsYXJcIjpcblx0XHRcdHJldHVybiAxXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IEVycm9yKGBJbiBnZXRQdW1wQ29uZmlndXJhdGlvbigpIHB1bXAgdHlwZTogJHt0eXBlfSBub3QgZm91bmRgKVxuXHR9XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEh4SXRlbUNsYXNzTmFtZSA9IChcblx0aW5kZXg6IG51bWJlcixcblx0dHlwZTogSGVhdEV4Y2hhbmdlclR5cGVzLFxuXHRtb2RlPzogSHhNb2Rlc1trZXlvZiBIeE1vZGVzXSxcblx0KTogc3RyaW5nID0+IHtcblx0Y29uc3QgY29uZmlndXJhdGlvbiA9IGdldEh4Q29uZmlndXJhdGlvbih0eXBlKVxuXHRsZXQgY2xhc3NOYW1lID0gXCJcIjtcblx0Ly8gSGFuZGxlIHRoZSBmYWN0IHRoYXQgQWN0aXZhdGVkQ29uZmlnIGFuZCBEZWFjdGl2YXRlZENvbmZpZyBhcmUgb3B0aW9uYWwgYW5kIG1heWJlIHVuZGVmaW5lZFxuXHRpZiAoaW5kZXggPCAyKSB7XG5cdFx0aWYgKGdldEJvb2xBdEluZGV4KGNvbmZpZ3VyYXRpb24sIGluZGV4KSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gYHNob3cgaXRlbSAke3R5cGV9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNsYXNzTmFtZTtcbn1cbmV4cG9ydCBjb25zdCBnZXRIeE1vZGVDbGFzc05hbWVzID0gKGNsYXNzTmFtZTogc3RyaW5nLCBtb2RlOiBIeE1vZGVzW2tleW9mIEh4TW9kZXNdKT0+e1xuXHQvLyBBZGRpdGlvbnMgdG8gdGhlIGNsYXNzTmFtZVxuXG5cdGlmIChjbGFzc05hbWUuaW5jbHVkZXMoXCJzaG93XCIpICYmICFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtXCIpKSB7XG5cblx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdGNhc2UgXCJhbGFybVwiOlxuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkFsYXJtU3RhdGVcIiwgXCJcIikgKyBcIiBBbGFybVN0YXRlXCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImhlYXRpbmdcIjpcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJoZWF0aW5nXCIsIFwiXCIpICsgXCIgaGVhdGluZ1wiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJjb29saW5nXCI6XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiY29vbGluZ1wiLCBcIlwiKSArIFwiIGNvb2xpbmdcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdHJldHVybiBjbGFzc05hbWU7XG59O1xuXG5leHBvcnQgY29uc3QgYnVpbGRDb21wb25lbnRFbGVtZW50cyA9IChcblx0YmFzZUVsZW1lbnRzOiBudW1iZXIsXG5cdGR5bmFtaWNFbGVtZW50czogbnVtYmVyXG4pID0+IHtcblx0bGV0IHZhbHVlPVtdO1xuXHRmb3IgKGxldCBpPTA7IGk8IGJhc2VFbGVtZW50cytkeW5hbWljRWxlbWVudHM7IGkrKyl7XG5cdFx0bGV0IGl0ZW0gPSB7XG5cdFx0XHRrZXk6IHV1aWR2NCgpLFxuXHRcdFx0bmFtZTogaSA8IGJhc2VFbGVtZW50cyA/IGBiYXNlLSR7aSsxfWAgOiBgZHluYW1pYy0ke2krKDEtZHluYW1pY0VsZW1lbnRzKX1gLFxuXHRcdFx0aW5kZXg6IGlcblx0XHR9O1xuXHRcdHZhbHVlLnB1c2goaXRlbSk7XG5cdH1cblx0bGV0IGl0ZW0gPSB7XG5cdFx0a2V5OiB1dWlkdjQoKSxcblx0XHRuYW1lOiBcImxvY2F0ZVwiLFxuXHRcdGluZGV4OiBiYXNlRWxlbWVudHMrZHluYW1pY0VsZW1lbnRzXG5cdH07XG5cdC8vIGxvY2F0ZSBhbHdheXMgbGFzdCBlbGVtZW50XG5cdHZhbHVlLnB1c2goaXRlbSlcblx0cmV0dXJuIHZhbHVlXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHR5cGUgQ29tbWFuZFZhbHZlTXBQcm9wcyB9IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcbi8vIGltcG9ydCB7IEljb25BdXRvLCBJY29uSGFuZENsaWNrIH0gZnJvbSAnLi4vdXRpbHMvaWNvbnMnO1xuaW1wb3J0IHsgUHJvcGVydHlUcmVlIH0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiO1xuaW1wb3J0IHR5cGUge1xuXHRDb21wb25lbnRQcm9wcyxcblx0Q29tcG9uZW50TWV0YSxcblx0UENvbXBvbmVudCxcblx0U2l6ZU9iamVjdCxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiOyAvLydAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuLy8gaW1wb3J0IHsgaW5pdGlhbENvbnRyb2xTdGF0ZSB9IGZyb20gXCIuLi9hcGkvaW5pdGlhbFN0YXRlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVZhbHZlTXBDb21tYW5kUmVkdWNlciB9IGZyb20gXCIuLi9hcGkvaG9va3NcIjtcbmltcG9ydCB7XG5cdEhNSV9DT01QT05FTlRfQ0xBU1MsXG5cdElBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1JPVyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSLFxuXHRDT01NQU5EX1ZBTFZFX01QX0NPTVBPTkVOVF9UWVBFLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBDT01NQU5EX1ZBTFZFX01QX0NPTVBPTkVOVF9UWVBFO1xuXG4vLyBjb25zdCBhcmVFcXVhbCA9IChcbi8vIFx0cHJldlByb3BzOiBDb21wb25lbnRQcm9wczxDb21tYW5kVmFsdmVNcFByb3BzPixcbi8vIFx0bmV4dFByb3BzOiBDb21wb25lbnRQcm9wczxDb21tYW5kVmFsdmVNcFByb3BzPlxuLy8gKSA9PiB7XG4vLyBcdC8vIHJldHVybiB0cnVlIGlmIHByb3BzIGFyZSBlcXVhbCwgZmFsc2UgaWYgcmUtcmVuZGVyIGlzIG5lZWRlZFxuLy8gXHRyZXR1cm4gcHJldlByb3BzLnByb3BzID09PSBuZXh0UHJvcHMucHJvcHM7XG4vLyB9O1xuXG4vKipcbiAqIFZhbHZlIGNvbXBvbmVudCBjbGFzcy5cbiAqIEV4dGVuZHMgdGhlIGJhc2UgQ29tcG9uZW50IGNsYXNzIGZyb20gUGVyc3BlY3RpdmUsIHR5cGVkIHdpdGggVmFsdmVQcm9wcy5cbiAqIFByb3ZpZGVzIGEgY3VzdG9taXphYmxlIHZhbHZlIHdpdGggcHJvcGVyIGhhbmRsaW5nIG9mIGRlc2lnbmVyL3ByZXZpZXcgbW9kZXMuXG5cbiAqL1xuZXhwb3J0IGNvbnN0IENvbW1hbmRWYWx2ZU1wID1cblx0KHByb3BzOiBDb21wb25lbnRQcm9wczxDb21tYW5kVmFsdmVNcFByb3BzPikgPT4ge1xuXHRcdGNvbnN0IHsgc3RhdGUsIHJlZHVjZXIgfSA9IHVzZVZhbHZlTXBDb21tYW5kUmVkdWNlcigpO1xuXHRcdGNvbnN0IHsgZW1pdCB9ID0gcHJvcHM7XG5cblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdFx0Ly8gU3Vic2NyaWJlIHRvIGNoYW5nZXMgb24gdGhlIFwiY29tbWFuZFwiIHByb3BlcnR5XG5cdFx0XHRjb25zdCB1bnN1YnNjcmliZSA9IHByb3BzLnN0b3JlLnByb3BzLnN1YnNjcmliZSgodHJlZTogUHJvcGVydHlUcmVlKSA9PiB7XG5cdFx0XHRcdC8vIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW5ldmVyIFwiY29tbWFuZFwiIGNoYW5nZXNcblx0XHRcdFx0Y29uc3QgY29tbWFuZCA9IHRyZWUucmVhZChcImNvbW1hbmRcIik7XG5cdFx0XHRcdGNvbnN0IHsgbWFpbiwgdXBwZXJTZWF0LCBsb3dlclNlYXQgLCBhdmFpbGFibGV9ID0gY29tbWFuZDtcblx0XHRcdFx0Ly8gWW91IGNhbiB1cGRhdGUgbG9jYWwgc3RhdGUgb3IgcGVyZm9ybSBvdGhlciBhY3Rpb25zIGhlcmVcblx0XHRcdFx0Ly8gVXBkYXRlIGF2YWlsYWJsZSBzdGF0ZSBpZiBuZWVkZWRcblx0XHRcdFx0aWYgKHN0YXRlLmNvbW1hbmQ/LmF2YWlsYWJsZSAmJiBhdmFpbGFibGUpIHtcblx0XHRcdFx0XHRpZiAoYXZhaWxhYmxlLm1haW4gIT09IHN0YXRlLmNvbW1hbmQuYXZhaWxhYmxlLm1haW4pIHtcblx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlTWFpbkF2YWlsYWJsZShcblx0XHRcdFx0XHRcdFx0YXZhaWxhYmxlLm1haW4gPyB0cnVlIDogZmFsc2Vcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhdmFpbGFibGUudXBwZXJTZWF0ICE9PSBzdGF0ZS5jb21tYW5kLmF2YWlsYWJsZS51cHBlclNlYXQpIHtcblx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlVXBwZXJTZWF0QXZhaWxhYmxlKFxuXHRcdFx0XHRcdFx0XHRhdmFpbGFibGUudXBwZXJTZWF0ID8gdHJ1ZSA6IGZhbHNlXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYXZhaWxhYmxlLmxvd2VyU2VhdCAhPT0gc3RhdGUuY29tbWFuZC5hdmFpbGFibGUubG93ZXJTZWF0KSB7XG5cdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZUxvd2VyU2VhdEF2YWlsYWJsZShcblx0XHRcdFx0XHRcdFx0YXZhaWxhYmxlLmxvd2VyU2VhdCA/IHRydWUgOiBmYWxzZVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGF0ZS5jb21tYW5kPy5tYWluICYmIG1haW4pIHtcblx0XHRcdFx0XHRpZiAobWFpbi5hdXRvTWFudWFsICE9PSBzdGF0ZS5jb21tYW5kLm1haW4uYXV0b01hbnVhbCkge1xuXHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVBdXRvTWFuU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHQhbWFpbi5hdXRvTWFudWFsID8gXCJhdXRvXCIgOiBcIm1hbnVhbFwiXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobWFpbi5hY3RpdmF0aW9uICE9PSBzdGF0ZS5jb21tYW5kLm1haW4uYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0aWYgKCFtYWluLmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVNYWluTWFudWFsT2ZmKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG1haW4uYWN0aXZhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZWR1Y2VyLnVwZGF0ZU1haW5NYW51YWxPbigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFVwZGF0ZSBsb3dlclNlYXQgc3RhdGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmIChzdGF0ZS5jb21tYW5kPy5sb3dlclNlYXQgJiYgbG93ZXJTZWF0KSB7XG5cdFx0XHRcdFx0aWYgKGxvd2VyU2VhdC5hY3RpdmF0aW9uICE9PSBzdGF0ZS5jb21tYW5kLmxvd2VyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWxvd2VyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlTHNsTWFudWFsT2ZmKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGxvd2VyU2VhdC5hY3RpdmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJlZHVjZXIudXBkYXRlTHNsTWFudWFsT24oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gVXBkYXRlIHVwcGVyU2VhdCBzdGF0ZSBpZiBuZWVkZWRcblx0XHRcdFx0aWYgKHN0YXRlLmNvbW1hbmQ/LnVwcGVyU2VhdCAmJiB1cHBlclNlYXQpIHtcblx0XHRcdFx0XHRpZiAodXBwZXJTZWF0LmFjdGl2YXRpb24gIT09IHN0YXRlLmNvbW1hbmQudXBwZXJTZWF0LmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdGlmICghdXBwZXJTZWF0LmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVVc2xNYW51YWxPZmYoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodXBwZXJTZWF0LmFjdGl2YXRpb24pIHtcblx0XHRcdFx0XHRcdFx0cmVkdWNlci51cGRhdGVVc2xNYW51YWxPbigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcblx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdW5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdHVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fSwgW3Byb3BzLnN0b3JlLnByb3BzXSk7XG5cdFx0Y29uc3QgeyBtYWluLCB1cHBlclNlYXQsIGxvd2VyU2VhdCwgYXZhaWxhYmxlIH0gPSBzdGF0ZS5jb21tYW5kID8/IHt9O1xuXG5cdFx0Ly8gY29uc3QgaXNJbnRlcmxvY2tlZCA9IChpbnRlcmxvY2tzOiBib29sZWFuW10pOiBib29sZWFuID0+IHtcblx0XHRcdC8vIFx0cmV0dXJuIGludGVybG9ja3MuaW5jbHVkZXModHJ1ZSwgMCk7XG5cdFx0XHQvLyB9O1xuXHRcdGNvbnNvbGUubG9nKGBDb21tYW5kIFByb3BzOiAke0pTT04uc3RyaW5naWZ5KHN0YXRlLmNvbW1hbmQsbnVsbCwyKX1gKVxuXHRcdGNvbnNvbGUubG9nKGBNYWluIEF2YWlsOiAke0pTT04uc3RyaW5naWZ5KGF2YWlsYWJsZT8ubWFpbixudWxsLDIpfWApXG5cdFx0Y29uc29sZS5sb2coYENvbW1hbmQgUHJvcHM6ICR7SlNPTi5zdHJpbmdpZnkoYXZhaWxhYmxlPy51cHBlclNlYXQsbnVsbCwyKX1gKVxuXHRcdGNvbnNvbGUubG9nKGBDb21tYW5kIFByb3BzOiAke0pTT04uc3RyaW5naWZ5KGF2YWlsYWJsZT8ubG93ZXJTZWF0LG51bGwsMil9YClcblxuXHRcdGNvbnN0IGhhbmRsZU1haW5BdXRvTWFudWFsU2VsZWN0aW9uID0gKG1vZGU6IFwiYXV0b1wiIHwgXCJtYW51YWxcIik6IHZvaWQgPT4ge1xuXHRcdFx0cmVkdWNlci51cGRhdGVBdXRvTWFuU2VsZWN0aW9uKG1vZGUpO1xuXHRcdFx0aWYgKG1vZGUgPT09IFwiYXV0b1wiKSB7XG5cdFx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQubWFpbi5hdXRvTWFudWFsXCIsIGZhbHNlKTsgLy8gZmFsc2UgPSBhdXRvXG5cdFx0XHR9IGVsc2UgaWYgKG1vZGUgPT09IFwibWFudWFsXCIpIHtcblx0XHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC5tYWluLmF1dG9NYW51YWxcIiwgdHJ1ZSk7IC8vIHRydWUgPSBtYW51YWxcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgaGFuZGxlTWFpbk1hbnVhbE9uID0gKCkgPT4ge1xuXHRcdFx0cmVkdWNlci51cGRhdGVNYWluTWFudWFsT24oKTtcblx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQubWFpbi5hY3RpdmF0aW9uXCIsIHRydWUpO1xuXHRcdH07XG5cdFx0Y29uc3QgaGFuZGxlTWFpbk1hbnVhbE9mZiA9ICgpID0+IHtcblx0XHRcdHJlZHVjZXIudXBkYXRlTWFpbk1hbnVhbE9mZigpO1xuXHRcdFx0cHJvcHMuc3RvcmUucHJvcHM/LndyaXRlKFwiY29tbWFuZC5tYWluLmFjdGl2YXRpb25cIiwgZmFsc2UpO1xuXHRcdH07XG5cdFx0Y29uc3QgaGFuZGxlVXNsTWFudWFsT24gPSAoKSA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZVVzbE1hbnVhbE9uKCk7XG5cdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLnVwcGVyU2VhdC5hY3RpdmF0aW9uXCIsIHRydWUpO1xuXHRcdH07XG5cdFx0Y29uc3QgaGFuZGxlVXNsTWFudWFsT2ZmID0gKCkgPT4ge1xuXHRcdFx0cmVkdWNlci51cGRhdGVVc2xNYW51YWxPZmYoKTtcblx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQudXBwZXJTZWF0LmFjdGl2YXRpb25cIiwgZmFsc2UpO1xuXHRcdH07XG5cdFx0Y29uc3QgaGFuZGxlTHNsTWFudWFsT24gPSAoKSA9PiB7XG5cdFx0XHRyZWR1Y2VyLnVwZGF0ZUxzbE1hbnVhbE9uKCk7XG5cdFx0XHRwcm9wcy5zdG9yZS5wcm9wcz8ud3JpdGUoXCJjb21tYW5kLmxvd2VyU2VhdC5hY3RpdmF0aW9uXCIsIHRydWUpO1xuXHRcdH07XG5cdFx0Y29uc3QgaGFuZGxlTHNsTWFudWFsT2ZmID0gKCkgPT4ge1xuXHRcdFx0cmVkdWNlci51cGRhdGVMc2xNYW51YWxPZmYoKTtcblx0XHRcdHByb3BzLnN0b3JlLnByb3BzPy53cml0ZShcImNvbW1hbmQubG93ZXJTZWF0LmFjdGl2YXRpb25cIiwgZmFsc2UpO1xuXHRcdH07XG5cdFx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gXCJjb21tYW5kLXZhbHZlLW1wXCI7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRcdGNsYXNzZXM6IFtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTn1gXSxcblx0XHRcdFx0fSl9XG5cdFx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfUk9XfWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVJ9YH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SE1JX0NPTVBPTkVOVF9DTEFTU30gJHtjb21wb25lbnRDbGFzc05hbWV9YH0+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJtYWluLWxhYmVsXCI+e21haW4/LmxhYmVsfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRyb2xlPVwiZ3JvdXBcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBvdXRsaW5lZCBtYWluLWF1dG8tbWFudWFsXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQhbWFpbj8uYXV0b01hbnVhbCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFhdmFpbGFibGU/Lm1haW59XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVNYWluQXV0b01hbnVhbFNlbGVjdGlvbihcImF1dG9cIil9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0QXV0byB7LyogPEljb25BdXRvIC8+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYWluPy5hdXRvTWFudWFsID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWF2YWlsYWJsZT8ubWFpbn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZU1haW5BdXRvTWFudWFsU2VsZWN0aW9uKFwibWFudWFsXCIpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdE1hbnVhbFxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxJY29uSGFuZENsaWNrIC8+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiByb2xlPVwiZ3JvdXBcIiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgb3V0bGluZWQgbWFpbi1vbi1vZmZcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFpbj8uYWN0aXZhdGlvbiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQhYXZhaWxhYmxlPy5tYWluIHx8ICFtYWluPy5hdXRvTWFudWFsXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVNYWluTWFudWFsT259XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0T24gey8qIDxJY29uQXV0byAvPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gb3V0bGluZWQgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IW1haW4/LmFjdGl2YXRpb24gPyBcInNlbGVjdGVkXCIgOiBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IWF2YWlsYWJsZT8ubWFpbiB8fCAhbWFpbj8uYXV0b01hbnVhbFxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTWFpbk1hbnVhbE9mZn1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRPZmZcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8SWNvbkhhbmRDbGljayAvPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJ1cHBlci1zZWF0LWxhYmVsXCI+e3VwcGVyU2VhdD8ubGFiZWx9PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdHJvbGU9XCJncm91cFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIG91dGxpbmVkIHVwcGVyLXNlYXQtb24tb2ZmXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cHBlclNlYXQ/LmFjdGl2YXRpb24gPyBcInNlbGVjdGVkXCIgOiBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IWF2YWlsYWJsZT8udXBwZXJTZWF0IHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFtYWluPy5hdXRvTWFudWFsXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVVc2xNYW51YWxPbn1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRPbiB7LyogPEljb25BdXRvIC8+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiBvdXRsaW5lZCAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQhdXBwZXJTZWF0Py5hY3RpdmF0aW9uID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFhdmFpbGFibGU/LnVwcGVyU2VhdCB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQhbWFpbj8uYXV0b01hbnVhbFxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlVXNsTWFudWFsT2ZmfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdE9mZlxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxJY29uSGFuZENsaWNrIC8+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImxvd2VyLXNlYXQtbGFiZWxcIj57bG93ZXJTZWF0Py5sYWJlbH08L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0cm9sZT1cImdyb3VwXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgb3V0bGluZWQgbG93ZXItc2VhdC1vbi1vZmZcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxvd2VyU2VhdD8uYWN0aXZhdGlvbiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQhYXZhaWxhYmxlPy5sb3dlclNlYXQgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0IW1haW4/LmF1dG9NYW51YWxcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUxzbE1hbnVhbE9ufVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdE9uIHsvKiA8SWNvbkF1dG8gLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uIG91dGxpbmVkICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFsb3dlclNlYXQ/LmFjdGl2YXRpb24gPyBcInNlbGVjdGVkXCIgOiBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IWF2YWlsYWJsZT8ubG93ZXJTZWF0IHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFtYWluPy5hdXRvTWFudWFsXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVMc2xNYW51YWxPZmZ9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17XCJ0cnVlXCJ9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0T2ZmXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPEljb25IYW5kQ2xpY2sgLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cbi8vIFRoaXMgaXMgdGhlIGFjdHVhbCB0aGluZyB0aGF0IGdldHMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBjb21wb25lbnQgcmVnaXN0cnkuXG5leHBvcnQgY2xhc3MgQ29tbWFuZFZhbHZlTXBNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIENvbW1hbmRWYWx2ZU1wO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAyODAsXG5cdFx0XHRoZWlnaHQ6IDE0MCxcblx0XHR9O1xuXHR9XG5cblx0Ly8gSW52b2tlZCB3aGVuIGFuIHVwZGF0ZSB0byB0aGUgUHJvcGVydHlUcmVlIGhhcyBvY2N1cnJlZCxcblx0Ly8gZWZmZWN0aXZlbHkgbWFwcGluZyB0aGUgdmFsdmVTdGF0dXMgb2YgdGhlIHRyZWUgdG8gY29tcG9uZW50IHByb3BzLlxuXHRnZXRQcm9wc1JlZHVjZXIodHJlZTogUHJvcGVydHlUcmVlKTogQ29tbWFuZFZhbHZlTXBQcm9wcyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbW1hbmQ6IHtcblx0XHRcdFx0YXZhaWxhYmxlOiB7XG5cdFx0XHRcdFx0bWFpbjogdHJlZS5yZWFkQm9vbGVhbihcImNvbW1hbmQuYXZhaWxhYmxlLm1haW5cIiwpLFxuXHRcdFx0XHRcdHVwcGVyU2VhdDogdHJlZS5yZWFkQm9vbGVhbihcImNvbW1hbmQuYXZhaWxhYmxlLnVwcGVyU2VhdFwiKSxcblx0XHRcdFx0XHRsb3dlclNlYXQ6IHRyZWUucmVhZEJvb2xlYW4oXCJjb21tYW5kLmF2YWlsYWJsZS5sb3dlclNlYXRcIiksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1haW46IHtcblx0XHRcdFx0XHRsYWJlbDogdHJlZS5yZWFkU3RyaW5nKFwiY29tbWFuZHMubWFpbi5sYWJlbFwiLCBcIlwiKSxcblx0XHRcdFx0XHRhdXRvTWFudWFsOiB0cmVlLnJlYWRCb29sZWFuKFwiY29tbWFuZC5tYWluLmF1dG9NYW51YWxcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGFjdGl2YXRpb246IHRyZWUucmVhZEJvb2xlYW4oXCJjb21tYW5kLm1haW4uYWN0aXZhdGlvblwiLCBmYWxzZSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHVwcGVyU2VhdDoge1xuXHRcdFx0XHRcdGxhYmVsOiB0cmVlLnJlYWRTdHJpbmcoXCJjb21tYW5kcy51cHBlclNlYXQubGFiZWxcIiwgXCJcIiksXG5cdFx0XHRcdFx0YWN0aXZhdGlvbjogdHJlZS5yZWFkQm9vbGVhbihcImNvbW1hbmQudXBwZXJTZWF0LmFjdGl2YXRpb25cIiwgZmFsc2UpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsb3dlclNlYXQ6IHtcblx0XHRcdFx0XHRsYWJlbDogdHJlZS5yZWFkU3RyaW5nKFwiY29tbWFuZHMubG93ZXJTZWF0LmxhYmVsXCIsIFwiXCIpLFxuXHRcdFx0XHRcdGFjdGl2YXRpb246IHRyZWUucmVhZEJvb2xlYW4oXCJjb21tYW5kLmxvd2VyU2VhdC5hY3RpdmF0aW9uXCIsIGZhbHNlKSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fTtcblx0fVxufVxuXG4vKipcbiAqXG5nZXRQcm9wc1JlZHVjZXIodHJlZTogUHJvcGVydHlUcmVlKTogTXlQcm9wVHlwZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gd2lsbCBnaXZlIHRoZSBwcm9wZXJ0eSB0cmVlIGFzIGEgcGxhaW4ganMgb2JqZWN0LCBpbnN0ZWFkIG9mIGFuIGluc3RhbmNlIG9mIFByb3BlcnR5VHJlZVxuICAgICAgICAvLyB0aGlzIHdvdWxkIGxldCB5b3UgcmVhZCB0aGUgdmFsdWUgb2YgdGhlIHRyZWUgdmlhIGB0aGlzLnByb3BzLnByb3BzLmpzb25gLiAgU2FtZSByZXN1bHQgb2NjdXJzIGlmXG4gICAgICAgIC8vIGNhbGxpbmcgdHJlZS5yZWFkKCksIHdpdGhvdXQgcGFzc2luZyBhIHBhdGggcGFyYW1ldGVyLlxuICAgICAgIGpzb246IHRyZWUudG9QbGFpbk9iamVjdCgpXG5cblxuICAgICAgIC8vIElmIHlvdSBoYWQgdG8gd3JpdGUgdG8gdGhlIHRyZWUncyAnZGF0YScgbm9kZSwgcGFzc2luZyBpbiBhIGNhbGxiYWNrIGZ1bmN0aW9uIGluc3RlYWQgb2YgdGhlIGFjdHVhbFxuICAgICAgIC8vIFByb3BlcnR5VHJlZSB3aWxsIHNpbXBsaWZ5IHVuaXQgdGVzdGFiaWxpdHkgb2YgeW91ciBjb21wb25lbnQgb3V0c2lkZSBvZiBwZXJzcGVjdGl2ZSdzIGVudmlyb25tZW50LlxuICAgICAgIC8vIFlvdSB3b3VsZCBjYWxsIHRoaXMgdmlhIHRoaXMucHJvcHMucHJvcHMud3JpdGVEYXRhKHNvbWVOZXdEYXRhKVxuICAgICAgIHdyaXRlRGF0YTogKG5ld0pzb24pIC0+IHRyZWUud3JpdGUoXCJkYXRhXCIsIG5ld0pzb24pXG4gICAgfVxufVxuICovXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEl0ZW1JZFBvc2l0aW9uVHlwZX0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdFByb3BlcnR5VHJlZSxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiO1xuaW1wb3J0IHR5cGUge1xuXHRDb21wb25lbnRQcm9wcyxcblx0Q29tcG9uZW50TWV0YSxcblx0UENvbXBvbmVudCxcblx0U2l6ZU9iamVjdCxcbn0gZnJvbSBcIkBpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudFwiOyAvLydAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuaW1wb3J0IHR5cGUgeyBIeFByb3BzIH0gZnJvbSBcIi4uL2FyLXR5cGVzL3Byb2Nlc3NPYmplY3RzL2hlYXRFeGNoYW5nZXJzL2h4LXR5cGVzXCI7XG5pbXBvcnQgeyBIZWF0RXhjaGFuZ2VyQ29tcG91bmQgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvaGVhdC1leGNoYW5nZXJzL0hlYXRFeGNoYW5nZXJDb21wb3VuZFwiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5wcm9jZXNzX29iamVjdHMuSGVhdEV4Y2hhbmdlclwiO1xuXG4vKipcbiAqIFZhbHZlIGNvbXBvbmVudCBjbGFzcy5cbiAqIEV4dGVuZHMgdGhlIGJhc2UgQ29tcG9uZW50IGNsYXNzIGZyb20gUGVyc3BlY3RpdmUsIHR5cGVkIHdpdGggVmFsdmVQcm9wcy5cbiAqIFByb3ZpZGVzIGEgY3VzdG9taXphYmxlIHZhbHZlIHdpdGggcHJvcGVyIGhhbmRsaW5nIG9mIGRlc2lnbmVyL3ByZXZpZXcgbW9kZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBIZWF0RXhjaGFuZ2VyIGV4dGVuZHMgQ29tcG9uZW50PENvbXBvbmVudFByb3BzPEh4UHJvcHM+LCBhbnk+IHtcblx0dmFsdmVSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG5cblx0Y29uc3RydWN0b3IocHJvcHM6IENvbXBvbmVudFByb3BzPEh4UHJvcHM+KSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMudmFsdmVSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XG5cdH1cblxuXHQvLyBUaGlzIGlzIGEgbGlmZWN5Y2xlIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3QgbW91bnRlZCB0byB0aGUgRE9NLlxuXHRjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcblx0XHQvLyBObyBuZWVkIHRvIGluaXRpYWxpemUgdmFsdmVSZWYgaGVyZVxuXHR9XG5cdHR5cGUgPSB0aGlzLnByb3BzLnByb3BzLnR5cGU7XG5cdGl0ZW1OYW1lID0gdGhpcy5wcm9wcy5wcm9wcy5pdGVtTmFtZTtcblx0bW9kZSA9IHRoaXMucHJvcHMucHJvcHMubW9kZTtcblx0bG9jYXRlID0gdGhpcy5wcm9wcy5wcm9wcy5sb2NhdGU7XG5cdHNob3dMYWJlbDogYm9vbGVhbiA9IHRoaXMucHJvcHMucHJvcHMuc2hvd0xhYmVsIHx8IGZhbHNlO1xuXHRsYWJlbFBvc2l0aW9uOiBJdGVtSWRQb3NpdGlvblR5cGUgPSB0aGlzLnByb3BzLnByb3BzLmxhYmVsUG9zaXRpb24gfHwgXCJsZWZ0XCI7XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSBjb21wb25lbnQncyBhY3Rpb24gZXZlbnQuXG5cdCAqL1xuXHRvbkFjdGlvblBlcmZvcm1lZCA9ICgpID0+IHtcblx0XHQvLyBJZiB0aGUgZGVzaWduZXIgaXMgaW4gXCJkZXNpZ25cIiBtb2RlLCBkb24ndCBkbyBhbnl0aGluZ1xuXHRcdGlmICghdGhpcy5wcm9wcy5ldmVudHNFbmFibGVkKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGlzIGRpc2FibGVkIGluIHRoZSBkZXNpZ24tc2NvcGVcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgY2xpY2tlZCFcIik7XG5cdFx0dGhpcy5wcm9wcy5jb21wb25lbnRFdmVudHMuZmlyZUNvbXBvbmVudEV2ZW50KFwib25BY3Rpb25QZXJmb3JtZWRcIiwge30pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0Ly8gPGRpdj5UaGlzIGlzIFZhbHZlPC9kaXY+XG5cdFx0XHQ8SGVhdEV4Y2hhbmdlckNvbXBvdW5kLlJvb3Rcblx0XHRcdFx0Y29tcG9uZW50UHJvcHM9e3RoaXMucHJvcHN9XG5cdFx0XHRcdGl0ZW1Qcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQ9e3RoaXMub25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxIZWF0RXhjaGFuZ2VyQ29tcG91bmQucGxhdGUgLz5cblx0XHRcdFx0PEhlYXRFeGNoYW5nZXJDb21wb3VuZC5wb3BvdmVyIGFuY2hvckVsPXt0aGlzLnZhbHZlUmVmLmN1cnJlbnR9IC8+XG5cdFx0XHQ8L0hlYXRFeGNoYW5nZXJDb21wb3VuZC5Sb290PlxuXHRcdCk7XG5cdH1cbn1cbi8vIFRoaXMgaXMgdGhlIGFjdHVhbCB0aGluZyB0aGF0IGdldHMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBjb21wb25lbnQgcmVnaXN0cnkuXG5leHBvcnQgY2xhc3MgSGVhdEV4Y2hhbmdlck1ldGEgaW1wbGVtZW50cyBDb21wb25lbnRNZXRhIHtcblx0Z2V0Q29tcG9uZW50VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBDT01QT05FTlRfVFlQRTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyBUaGUgUmVhY3QgY29tcG9uZW50IGNsYXNzLlxuXHQgKi9cblx0Z2V0Vmlld0NvbXBvbmVudCgpOiBQQ29tcG9uZW50IHtcblx0XHRyZXR1cm4gSGVhdEV4Y2hhbmdlcjtcblx0fVxuXG5cdGdldERlZmF1bHRTaXplKCk6IFNpemVPYmplY3Qge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogNDAsXG5cdFx0XHRoZWlnaHQ6IDcwLFxuXHRcdH07XG5cdH1cblxuXHQvLyBJbnZva2VkIHdoZW4gYW4gdXBkYXRlIHRvIHRoZSBQcm9wZXJ0eVRyZWUgaGFzIG9jY3VycmVkLFxuXHQvLyBlZmZlY3RpdmVseSBtYXBwaW5nIHRoZSB2YWx2ZVN0YXR1cyBvZiB0aGUgdHJlZSB0byBjb21wb25lbnQgcHJvcHMuXG5cdGdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBIeFByb3BzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogdHJlZS5yZWFkU3RyaW5nKFwidHlwZVwiLCBcInBsYXRlXCIpLFxuXHRcdFx0bW9kZTogdHJlZS5yZWFkU3RyaW5nKFwibW9kZVwiLCBcImhlYXRpbmdcIiksXG5cdFx0XHRpdGVtTmFtZTogdHJlZS5yZWFkU3RyaW5nKFwiaXRlbU5hbWVcIiwgXCJcIiksXG5cdFx0XHRsb2NhdGU6IHRyZWUucmVhZEJvb2xlYW4oXCJsb2NhdGVcIiwgZmFsc2UpLFxuXHRcdFx0c2hvd0xhYmVsOiB0cmVlLnJlYWRCb29sZWFuKFwic2hvd0xhYmVsXCIsIGZhbHNlKSxcblx0XHRcdGxhYmVsUG9zaXRpb246IHRyZWUucmVhZFN0cmluZyhcImxhYmVsUG9zaXRpb25cIiwgXCJ0b3AtbGVmdFwiKSxcblx0XHR9O1xuXHR9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb3BlcnR5VHJlZSB9IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcblxuLy8gaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCJzcmMvdXRpbHMvY3JlYXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgUGFyYW1ldGVyc0xpc3RTdGF0ZSwgUGFyYW1JdGVtIH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHtcblx0UEFSQU1FVEVSX0xJU1RfQ09NUE9ORU5UX1RZUEUsXG5cdEhNSV9DT01QT05FTlRfQ0xBU1MsXG5cdElBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1JPVyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG50eXBlIFBhcmFtZXRlcnNMaXN0Q29tcG9uZW50UHJvcHMgPSB7XG5cdHBhcmFtZXRlcnM6IFBhcmFtSXRlbVtdO1xufTtcbmNvbnN0IGluaXRQYXJhbWV0ZXJzID0gW1xuXHR7XG5cdFx0bGFiZWw6IHtcblx0XHRcdHRleHQ6IFwidGV4dFwiLFxuXHRcdH0sXG5cdFx0aW5wdXQ6IHtcblx0XHRcdHZhbHVlOiBudWxsLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgYSBOdW1iZXJcIixcblx0XHR9LFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gUEFSQU1FVEVSX0xJU1RfQ09NUE9ORU5UX1RZUEU7XG5cbmV4cG9ydCBjb25zdCBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50ID0gKFxuXHRwcm9wczogQ29tcG9uZW50UHJvcHM8UGFyYW1ldGVyc0xpc3RDb21wb25lbnRQcm9wcz5cbikgPT4ge1xuXHRjb25zdCB0cmFuc2Zvcm1lZFByb3BzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG5cdFx0Y29uc3QgeyBwYXJhbWV0ZXJzIH0gPSBwcm9wcy5wcm9wcyB8fCBpbml0UGFyYW1ldGVycztcblx0XHRyZXR1cm4gcGFyYW1ldGVycztcblx0fSwgW3Byb3BzLnByb3BzLnBhcmFtZXRlcnNdKTtcblx0Y29uc3QgeyBlbWl0IH0gPSBwcm9wcztcblx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gXCJwYXJhbWV0ZXItbGlzdFwiO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRjbGFzc2VzOiBbYCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU59YF0sXG5cdFx0XHR9KX1cblx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1d9YH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVJ9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0hNSV9DT01QT05FTlRfQ0xBU1N9ICR7Y29tcG9uZW50Q2xhc3NOYW1lfWB9PlxuXHRcdFx0XHRcdFx0e3RyYW5zZm9ybWVkUHJvcHMubWFwKChwYXJhbTogUGFyYW1JdGVtLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHsgbGFiZWwsIGlucHV0IH0gPSBwYXJhbTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YCR7bGFiZWwudGV4dH0tcGFyYW1ldGVyJHtpbmRleH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmllbGQgc21hbGxcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsLnRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZXVcIj57aW5wdXQuZXV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2Ake2xhYmVsLnRleHR9LXBhcmFtZXRlciR7aW5kZXh9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRNb2RlPXtpbnB1dC5pbnB1dG1vZGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm49e2lucHV0LnBhdHRlcm4gfHwgXCJbMC05XSpcIn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2lucHV0LnBsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWlucHV0LmVkaXRhYmxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49e2lucHV0Lm1pbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4PXtpbnB1dC5tYXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dC52YWx1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuc3RvcmUucHJvcHMud3JpdGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgcGFyYW1ldGVyc1ske2luZGV4fV0uaW5wdXQudmFsdWVgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5jdXJyZW50VGFyZ2V0LnZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB1cGRhdGVWYWx1ZShwYXJzZUZsb2F0KHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpLnRvRml4ZWQoMikpLCBpbmRleCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50TWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAyNDAsXG5cdFx0XHRoZWlnaHQ6IDI0MCxcblx0XHR9O1xuXHR9XG5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFBhcmFtZXRlcnNMaXN0U3RhdGUge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYXJhbWV0ZXJzOiB0cmVlLnJlYWQoXCJwYXJhbWV0ZXJzXCIsIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiB7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImxhYmVsXCIsXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwiXCIsXG5cdFx0XHRcdFx0XHR0b29sdGlwVGV4dDogXCJcIixcblx0XHRcdFx0XHRcdHRvb2x0aXBQb3NpdGlvbjogXCJcIixcblx0XHRcdFx0XHRcdHRvb2x0aXBDbGFzc05hbWU6IFwiXCIsXG5cdFx0XHRcdFx0XHR0b29sdGlwSWQ6IFwiXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRpbnB1dDoge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRpbnB1dG1vZGU6IFwibnVtZXJpY1wiLFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgYSBudW1iZXJcIixcblx0XHRcdFx0XHRcdGVkaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGF0dGVybjogXCJeWzAtOV0qWy4sXT9bMC05XSokXCIsXG5cdFx0XHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdFx0XHRtYXg6IDEwMCxcblx0XHRcdFx0XHRcdGRlY2ltYWxQbGFjZXM6IDIsXG5cdFx0XHRcdFx0XHRldTogXCJcXHUwMEI1Q1wiLFxuXHRcdFx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdF0pLFxuXHRcdH07XG5cdH1cblxuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50IGFzIFBDb21wb25lbnQ7XG5cdH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0SXRlbUlkUG9zaXRpb25UeXBlLFxuXHR0eXBlIFB1bXBQcm9wcyxcblx0dHlwZSBQdW1wU3RhdGUsXG59IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRQcm9wZXJ0eVRyZWUsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHMsXG5cdENvbXBvbmVudE1ldGEsXG5cdFBDb21wb25lbnQsXG5cdFNpemVPYmplY3QsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjsgLy8nQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB7IFB1bXBDb21wb3VuZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2Nlc3Mtb2JqZWN0cy9wdW1wcy9QdW1wQ29tcG91bmRcIjtcbmltcG9ydCB7IHB1bXBJbml0aWFsU3RhdHVzIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLlB1bXBcIjtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuICovXG5leHBvcnQgY2xhc3MgUHVtcCBleHRlbmRzIENvbXBvbmVudDxDb21wb25lbnRQcm9wczxQdW1wUHJvcHM+LCBhbnk+IHtcblx0dmFsdmVSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG5cblx0Y29uc3RydWN0b3IocHJvcHM6IENvbXBvbmVudFByb3BzPFB1bXBQcm9wcz4pIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy52YWx2ZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblx0fVxuXG5cdC8vIFRoaXMgaXMgYSBsaWZlY3ljbGUgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBtb3VudGVkIHRvIHRoZSBET00uXG5cdGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuXHRcdC8vIE5vIG5lZWQgdG8gaW5pdGlhbGl6ZSB2YWx2ZVJlZiBoZXJlXG5cdH1cblx0cHJvY2Vzc09iamVjdDogUHVtcFN0YXRlID1cblx0XHR0aGlzLnByb3BzLnByb3BzLnByb2Nlc3NPYmplY3Q/LnN0YXR1cyB8fCBwdW1wSW5pdGlhbFN0YXR1cztcblx0c3RhdHVzOiBQdW1wU3RhdGUgPSB0aGlzLnByb2Nlc3NPYmplY3Q7XG5cdHNob3dMYWJlbDogYm9vbGVhbiA9IHRoaXMucHJvcHMucHJvcHMuc2hvd0xhYmVsIHx8IGZhbHNlO1xuXHRsYWJlbFBvc2l0aW9uOiBJdGVtSWRQb3NpdGlvblR5cGUgPSB0aGlzLnByb3BzLnByb3BzLmxhYmVsUG9zaXRpb24gfHwgXCJsZWZ0XCI7XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSBjb21wb25lbnQncyBhY3Rpb24gZXZlbnQuXG5cdCAqL1xuXHRvbkFjdGlvblBlcmZvcm1lZCA9ICgpID0+IHtcblx0XHQvLyBJZiB0aGUgZGVzaWduZXIgaXMgaW4gXCJkZXNpZ25cIiBtb2RlLCBkb24ndCBkbyBhbnl0aGluZ1xuXHRcdGlmICghdGhpcy5wcm9wcy5ldmVudHNFbmFibGVkKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGlzIGRpc2FibGVkIGluIHRoZSBkZXNpZ24tc2NvcGVcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgY2xpY2tlZCFcIik7XG5cdFx0dGhpcy5wcm9wcy5jb21wb25lbnRFdmVudHMuZmlyZUNvbXBvbmVudEV2ZW50KFwib25BY3Rpb25QZXJmb3JtZWRcIiwge30pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0Ly8gPGRpdj5UaGlzIGlzIFZhbHZlPC9kaXY+XG5cdFx0XHQ8UHVtcENvbXBvdW5kLlJvb3Rcblx0XHRcdFx0Y29tcG9uZW50UHJvcHM9e3RoaXMucHJvcHN9XG5cdFx0XHRcdHB1bXBQcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQ9e3RoaXMub25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxQdW1wQ29tcG91bmQucHVtcCAvPlxuXHRcdFx0XHQ8UHVtcENvbXBvdW5kLnBvcG92ZXIgYW5jaG9yRWw9e3RoaXMudmFsdmVSZWYuY3VycmVudH0gLz5cblx0XHRcdDwvUHVtcENvbXBvdW5kLlJvb3Q+XG5cdFx0KTtcblx0fVxufVxuLy8gVGhpcyBpcyB0aGUgYWN0dWFsIHRoaW5nIHRoYXQgZ2V0cyByZWdpc3RlcmVkIHdpdGggdGhlIGNvbXBvbmVudCByZWdpc3RyeS5cbmV4cG9ydCBjbGFzcyBQdW1wTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBQdW1wO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAzNixcblx0XHRcdGhlaWdodDogMzYsXG5cdFx0fTtcblx0fVxuXG5cdC8vIEludm9rZWQgd2hlbiBhbiB1cGRhdGUgdG8gdGhlIFByb3BlcnR5VHJlZSBoYXMgb2NjdXJyZWQsXG5cdC8vIGVmZmVjdGl2ZWx5IG1hcHBpbmcgdGhlIHZhbHZlU3RhdHVzIG9mIHRoZSB0cmVlIHRvIGNvbXBvbmVudCBwcm9wcy5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFB1bXBQcm9wcyB7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0cHVtcFR5cGU6IHRyZWUucmVhZFN0cmluZyhcInB1bXBUeXBlXCIsIFwiY2VudHJpZnVnYWxcIiksXG5cdFx0XHRwcm9jZXNzT2JqZWN0OiB7XG5cdFx0XHRcdHN0YXR1czoge1xuXHRcdFx0XHRcdGFsYXJtOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuYWxhcm1cIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGFjdEZCOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuYWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGRlQWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5kZUFjdEZCXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRpdGVtTmFtZTogdHJlZS5yZWFkU3RyaW5nKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuaXRlbU5hbWVcIiwgXCJcIiksXG5cdFx0XHRcdFx0bWFudWFsOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubWFudWFsXCIsIGZhbHNlKSxcblx0XHRcdFx0XHRtYXNrZWQ6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5tYXNrZWRcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGNoYW5naW5nOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMuY2hhbmdpbmdcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGxvY2F0ZTogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmxvY2F0ZVwiLCBmYWxzZSksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hvd0xhYmVsOiB0cmVlLnJlYWRCb29sZWFuKFwic2hvd0xhYmVsXCIsIGZhbHNlKSxcblx0XHRcdGxhYmVsUG9zaXRpb246IHRyZWUucmVhZFN0cmluZyhcImxhYmVsUG9zaXRpb25cIiwgXCJ0b3AtbGVmdFwiKSxcblx0XHR9O1xuXHR9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgU3RhdHVzUHJvcHMgfSBmcm9tIFwiLi4vYXItdHlwZXMvc3RhdHVzXCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbXBvbmVudFByb3BzLFxuXHRDb21wb25lbnRNZXRhLFxuXHRQQ29tcG9uZW50LFxuXHRTaXplT2JqZWN0LFxuXHRQcm9wZXJ0eVRyZWUsXG59IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjsgLy8nQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB7XG5cdEhNSV9DT01QT05FTlRfQ0xBU1MsXG5cdElBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1JPVyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSLFxuXHRTVEFUVVNfQ09NUE9ORU5UX1RZUEUsXG59IGZyb20gXCIuLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9IFNUQVRVU19DT01QT05FTlRfVFlQRTtcblxuZXhwb3J0IGNvbnN0IFN0YXR1c1ZhbHZlTXAgPSAocHJvcHM6IENvbXBvbmVudFByb3BzPFN0YXR1c1Byb3BzPikgPT4ge1xuXHRjb25zdCB7IGVtaXQgfSA9IHByb3BzO1xuXHRjb25zdCB7IHN0YXR1c0l0ZW1zIH0gPSBwcm9wcy5wcm9wcztcblx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gXCJzdGF0dXNcIjtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdHsuLi5lbWl0KHtcblx0XHRcdFx0Y2xhc3NlczogW2Ake0lBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OfWBdLFxuXHRcdFx0fSl9XG5cdFx0XHRkYXRhLWNvbXBvbmVudD17Q09NUE9ORU5UX1RZUEV9XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfUk9XfWB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSfWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtITUlfQ09NUE9ORU5UX0NMQVNTfSAke2NvbXBvbmVudENsYXNzTmFtZX1gfT5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJsaXN0IGJvcmRlcmVkIGRlbnNlXCI+XG5cdFx0XHRcdFx0XHRcdHtzdGF0dXNJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2B4LXNtYWxsICR7aXRlbS5sb3dsaWdodCA/IFwibG93LWxpZ2h0XCI6IFwiXCJ9YH0+e2l0ZW0ubGFiZWx9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2BjaGVja2JveC0ke2luZGV4fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2l0ZW0uc3RhdHVzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWFkT25seT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIFN0YXR1c1ZhbHZlTXBNZXRhIGltcGxlbWVudHMgQ29tcG9uZW50TWV0YSB7XG5cdGdldENvbXBvbmVudFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gQ09NUE9ORU5UX1RZUEU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgVGhlIFJlYWN0IGNvbXBvbmVudCBjbGFzcy5cblx0ICovXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFN0YXR1c1ZhbHZlTXAgYXMgdW5rbm93biBhcyBQQ29tcG9uZW50O1xuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiAyNDAsXG5cdFx0XHRoZWlnaHQ6IDMyLFxuXHRcdH07XG5cdH1cblxuXHQvLyBJbnZva2VkIHdoZW4gYW4gdXBkYXRlIHRvIHRoZSBQcm9wZXJ0eVRyZWUgaGFzIG9jY3VycmVkLFxuXHQvLyBlZmZlY3RpdmVseSBtYXBwaW5nIHRoZSB2YWx2ZVN0YXR1cyBvZiB0aGUgdHJlZSB0byBjb21wb25lbnQgcHJvcHMuXG5cdGdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBTdGF0dXNQcm9wcyB7XG5cdFx0Y29uc29sZS5sb2coYHN0YXR1cyAke3RyZWUucmVhZChgc3RhdHVzYCl9YCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzSXRlbXM6IHRyZWUucmVhZChcInN0YXR1c1wiLCBbXSksXG5cdFx0fTtcblx0fVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRJdGVtSWRQb3NpdGlvblR5cGUsXG5cdFByb2Nlc3NPYmplY3QsXG5cdHR5cGUgVmFsdmVQcm9wcyxcblx0dHlwZSBWYWx2ZVN0YXRlLFxufSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5cbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0UHJvcGVydHlUcmVlLFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7XG5cdENvbXBvbmVudFByb3BzLFxuXHRDb21wb25lbnRNZXRhLFxuXHRQQ29tcG9uZW50LFxuXHRTaXplT2JqZWN0LFxufSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7IC8vJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG5pbXBvcnQgeyBWYWx2ZU1wQ29tcG91bmQgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUtbXAvVmFsdmVNcFwiO1xuaW1wb3J0IHsgcHJvY2Vzc09iamVjdFByb3BzIH0gZnJvbSBcIi4uL2FwaS9pbml0aWFsU3RhdGVcIjtcbi8vIGltcG9ydCB7IHZhbHZlUHJvcHMgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUvaW5pdGlhbFN0YXRlXCI7XG4vLyBpbXBvcnQgeyBWYWx2ZUZDQ29tcG91bmQgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUvVmFsdmVGQ1wiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5wcm9jZXNzX29iamVjdHMuVmFsdmVfbXBcIjtcblxuLyoqXG4gKiBWYWx2ZSBjb21wb25lbnQgY2xhc3MuXG4gKiBFeHRlbmRzIHRoZSBiYXNlIENvbXBvbmVudCBjbGFzcyBmcm9tIFBlcnNwZWN0aXZlLCB0eXBlZCB3aXRoIFZhbHZlUHJvcHMuXG4gKiBQcm92aWRlcyBhIGN1c3RvbWl6YWJsZSB2YWx2ZSB3aXRoIHByb3BlciBoYW5kbGluZyBvZiBkZXNpZ25lci9wcmV2aWV3IG1vZGVzLlxuICovXG5leHBvcnQgY2xhc3MgVmFsdmUgZXh0ZW5kcyBDb21wb25lbnQ8Q29tcG9uZW50UHJvcHM8VmFsdmVQcm9wcz4sIGFueT4ge1xuXG5cblx0Y29uc3RydWN0b3IocHJvcHM6IENvbXBvbmVudFByb3BzPFZhbHZlUHJvcHM+KSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cblx0fVxuXG5cdC8vIFRoaXMgaXMgYSBsaWZlY3ljbGUgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBtb3VudGVkIHRvIHRoZSBET00uXG5cdGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuXG5cdH1cblx0cHJvY2Vzc09iamVjdDogUHJvY2Vzc09iamVjdCA9XG5cdFx0dGhpcy5wcm9wcy5wcm9wcy5wcm9jZXNzT2JqZWN0IHx8IHByb2Nlc3NPYmplY3RQcm9wcztcblx0c3RhdHVzOiBWYWx2ZVN0YXRlID0gdGhpcy5wcm9jZXNzT2JqZWN0LnN0YXR1cztcblx0c2hvd0xhYmVsOiBib29sZWFuID0gdGhpcy5wcm9wcy5wcm9wcy5zaG93TGFiZWwgfHwgZmFsc2U7XG5cdGxhYmVsUG9zaXRpb246IEl0ZW1JZFBvc2l0aW9uVHlwZSA9IHRoaXMucHJvcHMucHJvcHMubGFiZWxQb3NpdGlvbiB8fCBcImxlZnRcIjtcblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIGNvbXBvbmVudCdzIGFjdGlvbiBldmVudC5cblx0ICovXG5cdG9uQWN0aW9uUGVyZm9ybWVkID0gKCkgPT4ge1xuXHRcdC8vIElmIHRoZSBkZXNpZ25lciBpcyBpbiBcImRlc2lnblwiIG1vZGUsIGRvbid0IGRvIGFueXRoaW5nXG5cdFx0aWYgKCF0aGlzLnByb3BzLmV2ZW50c0VuYWJsZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgaXMgZGlzYWJsZWQgaW4gdGhlIGRlc2lnbi1zY29wZVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBjbGlja2VkIVwiKTtcblx0XHR0aGlzLnByb3BzLmNvbXBvbmVudEV2ZW50cy5maXJlQ29tcG9uZW50RXZlbnQoXCJvbkFjdGlvblBlcmZvcm1lZFwiLCB7fSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQvLyA8ZGl2PlRoaXMgaXMgVmFsdmU8L2Rpdj5cblx0XHRcdDxWYWx2ZU1wQ29tcG91bmQuUm9vdFxuXHRcdFx0XHRjb21wb25lbnRQcm9wcz17dGhpcy5wcm9wc31cblx0XHRcdFx0dmFsdmVQcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQ9e3RoaXMub25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxWYWx2ZU1wQ29tcG91bmQudmFsdmUgLz5cblx0XHRcdFx0PFZhbHZlTXBDb21wb3VuZC5wb3BvdmVyIGFuY2hvckVsPXtudWxsfSAvPlxuXHRcdFx0PC9WYWx2ZU1wQ29tcG91bmQuUm9vdD5cblx0XHQpO1xuXHR9XG59XG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIFZhbHZlTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBWYWx2ZTtcblx0fVxuXG5cdGdldERlZmF1bHRTaXplKCk6IFNpemVPYmplY3Qge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMjAsXG5cdFx0XHRoZWlnaHQ6IDQwLFxuXHRcdH07XG5cdH1cblxuXHQvLyBJbnZva2VkIHdoZW4gYW4gdXBkYXRlIHRvIHRoZSBQcm9wZXJ0eVRyZWUgaGFzIG9jY3VycmVkLFxuXHQvLyBlZmZlY3RpdmVseSBtYXBwaW5nIHRoZSB2YWx2ZVN0YXR1cyBvZiB0aGUgdHJlZSB0byBjb21wb25lbnQgcHJvcHMuXG5cdGdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBWYWx2ZVByb3BzIHtcblx0XHRjb25zb2xlLmxvZyhcInRyZWVcIiwgdHJlZS5yZWFkKCkpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb2Nlc3NPYmplY3Q6IHtcblx0XHRcdFx0c3RhdHVzOiB7XG5cdFx0XHRcdFx0YWxhcm06IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hbGFybVwiLCBmYWxzZSksXG5cdFx0XHRcdFx0YWN0RkI6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hY3RGQlwiLCBmYWxzZSksXG5cdFx0XHRcdFx0ZGVBY3RGQjogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmRlQWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGFjdGl2YXRlZENvbmZpZzogdHJlZS5yZWFkTnVtYmVyKFxuXHRcdFx0XHRcdFx0XCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5hY3RpdmF0ZWRDb25maWdcIixcblx0XHRcdFx0XHRcdDUxMVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0ZGVhY3RpdmF0ZWRDb25maWc6IHRyZWUucmVhZE51bWJlcihcblx0XHRcdFx0XHRcdFwicHJvY2Vzc09iamVjdC5zdGF0dXMuZGVhY3RpdmF0ZWRDb25maWdcIixcblx0XHRcdFx0XHRcdDQwOTVcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdGl0ZW1OYW1lOiB0cmVlLnJlYWRTdHJpbmcoXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5pdGVtTmFtZVwiLCBcIlwiKSxcblx0XHRcdFx0XHRtYW51YWw6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5tYW51YWxcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdG1hc2tlZDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLm1hc2tlZFwiLCBmYWxzZSksXG5cdFx0XHRcdFx0Y2hhbmdpbmc6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy5jaGFuZ2luZ1wiLCBmYWxzZSksXG5cdFx0XHRcdFx0bG9jYXRlOiB0cmVlLnJlYWRCb29sZWFuKFwicHJvY2Vzc09iamVjdC5zdGF0dXMubG9jYXRlXCIsIGZhbHNlKSxcblx0XHRcdFx0XHR1c2w6IHRyZWUucmVhZEJvb2xlYW4oXCJwcm9jZXNzT2JqZWN0LnN0YXR1cy51c2xcIiwgZmFsc2UpLFxuXHRcdFx0XHRcdGxzbDogdHJlZS5yZWFkQm9vbGVhbihcInByb2Nlc3NPYmplY3Quc3RhdHVzLmxzbFwiLCBmYWxzZSksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hvd0xhYmVsOiB0cmVlLnJlYWRCb29sZWFuKFwic2hvd0xhYmVsXCIsIGZhbHNlKSxcblx0XHRcdGxhYmVsUG9zaXRpb246IHRyZWUucmVhZFN0cmluZyhcImxhYmVsUG9zaXRpb25cIiwgXCJ0b3AtbGVmdFwiKSxcblx0XHR9O1xuXHR9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdHlwZSBFbGVtZW50UmVmIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vdmFsdmUvaXRlbVwiO1xuaW1wb3J0IHtcblx0Z2V0Q2xhc3NOYW1lV2l0aFN0YXR1cyxcblx0Z2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUsXG59IGZyb20gXCIuLi8uLi8uLi9hcGkvdXRpbHNcIjtcbmltcG9ydCB7XG5cdGJ1aWxkQ29tcG9uZW50RWxlbWVudHMsXG5cdC8vIGdldEh4SXRlbUNsYXNzTmFtZSxcblx0Ly8gZ2V0SHhNb2RlQ2xhc3NOYW1lcyxcblx0Ly8gIGh4SXRlbU5hbWVzXG59IGZyb20gXCIuLi8uLi8uLi9hci11dGlscy9wcm9jZXNzT2JqZWN0cy9oZWF0RXhjaGFuZ2Vycy9oeC11dGlsc1wiO1xuaW1wb3J0IHtcblx0dHlwZSBIZWF0RXhjaGFuZ2VyVHlwZXMsXG5cdC8vIEh4TW9kZXMsXG5cdHR5cGUgSHhDb21wb3VuZENvbnRleHRUeXBlLFxuXHR0eXBlIEh4TW9kZXMsXG59IGZyb20gXCIuLi8uLi8uLi9hci10eXBlcy9wcm9jZXNzT2JqZWN0cy9oZWF0RXhjaGFuZ2Vycy9oeC10eXBlc1wiO1xuaW1wb3J0IHtcblx0SE1JX0NPTVBPTkVOVF9DTEFTUyxcblx0SFhfQ09NUE9ORU5UX1RZUEUsXG5cdGh4RWxlbWVudHMsXG5cdElBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1JPVyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSLFxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBnZXRQbGF0ZUNvbG9yID0gKG1vZGU6IEh4TW9kZXNba2V5b2YgSHhNb2Rlc10pID0+IHtcblx0Y29uc29sZS5sb2coYG1vZGU6ICR7bW9kZX1gKTtcblxuXHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRjYXNlIFwiYWxhcm1cIjpcblx0XHRcdHJldHVybiBcInZhcigtLV9lcnJvcilcIjtcblx0XHRjYXNlIFwiaGVhdGluZ1wiOlxuXHRcdFx0cmV0dXJuIFwidmFyKC0tX2hlYXRpbmcpXCI7XG5cdFx0Y2FzZSBcImNvb2xpbmdcIjpcblx0XHRcdHJldHVybiBcInZhcigtLV9jb29saW5nKVwiO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gXCJsaW1lXCI7XG5cdH1cbn07XG5jb25zdCBnZXRCYXNlSXRlbUNvdW50ID0gKHR5cGU6IEhlYXRFeGNoYW5nZXJUeXBlc1trZXlvZiBIZWF0RXhjaGFuZ2VyVHlwZXNdKSA9PiB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSBcInBsYXRlXCI6XG5cdFx0XHRyZXR1cm4gMTg7XG5cdFx0Y2FzZSBcInR1YnVsYXJcIjpcblx0XHRcdHJldHVybiAxNTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIDA7XG5cdH1cbn1cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9IEhYX0NPTVBPTkVOVF9UWVBFO1xuXG5leHBvcnQgY29uc3QgW0h4Q29udGV4dFByb3ZpZGVyLCB1c2VIeENvbnRleHRdID1cblx0dXNlQ3JlYXRlQ29udGV4dDxIeENvbXBvdW5kQ29udGV4dFR5cGU+KFwiSHhDb21wb3VuZFwiKTtcblxuY29uc3QgUm9vdCA9ICh7XG5cdGNvbXBvbmVudFByb3BzLFxuXHRpdGVtUHJvcHMsXG5cdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRjaGlsZHJlbixcbn06IEh4Q29tcG91bmRDb250ZXh0VHlwZSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxIeENvbnRleHRQcm92aWRlclxuXHRcdFx0ey4uLntcblx0XHRcdFx0aXRlbVByb3BzLFxuXHRcdFx0XHRjb21wb25lbnRQcm9wcyxcblx0XHRcdFx0b25BY3Rpb25QZXJmb3JtZWQsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0h4Q29udGV4dFByb3ZpZGVyPlxuXHQpO1xufTtcbmNvbnN0IHBsYXRlID0gKCkgPT4ge1xuXHRjb25zdCB7IGl0ZW1Qcm9wcywgb25BY3Rpb25QZXJmb3JtZWQsIGNvbXBvbmVudFByb3BzIH0gPVxuXHRcdHVzZUh4Q29udGV4dChcIlBsYXRlXCIpO1xuXHRjb25zdCBlbFJlZjogRWxlbWVudFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cdGNvbnN0IHsgZW1pdCB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGNvbnN0IHtcblx0XHR0eXBlLFxuXHRcdGxvY2F0ZSxcblx0XHRtb2RlXG5cdH0gPSBpdGVtUHJvcHM7XG5cblx0Ly8gQ29tcG9uZW50IENvbnN0YW50c1xuXHRjb25zdCBCQVNFX0lURU1fQ09VTlQgPSBnZXRCYXNlSXRlbUNvdW50KHR5cGUgPz8gMCk7XG5cdGNvbnN0IEJBU0VfSVRFTV9DT05GSUcgPSA1MjQyODc7XG5cdGNvbnN0IERZTkFNSUNfSVRFTV9DT1VOVCA9IDA7IC8vIEVuYWJsZSBkaXNwbGF5IG9mIGJhc2UgSXRlbXNcblx0Y29uc3QgRFlOQU1JQ19JVEVNX0NPTkZJRyA9IDA7XG5cblx0bGV0IGNvbXBvbmVudEl0ZW1OYW1lcyA9IGJ1aWxkQ29tcG9uZW50RWxlbWVudHMoXG5cdFx0QkFTRV9JVEVNX0NPVU5ULFxuXHRcdERZTkFNSUNfSVRFTV9DT1VOVFxuXHQpO1xuXG5cdGlmICghbG9jYXRlKSB7XG5cdFx0Y29uc29sZS5sb2coYGxvY2F0ZSBpczogJHtsb2NhdGV9YCk7XG5cblx0XHRjb21wb25lbnRJdGVtTmFtZXMgPSBjb21wb25lbnRJdGVtTmFtZXMuc2xpY2UoMCwgLTEpO1xuXHR9XG5cdGNvbnNvbGUubG9nKFxuXHRcdGBjb21wb25lbnRJdGVtTmFtZXM6ICR7SlNPTi5zdHJpbmdpZnkoY29tcG9uZW50SXRlbU5hbWVzLCBudWxsLCAyKX1gXG5cdCk7XG5cdGNvbnN0IGNvbXBvbmVudENsYXNzTmFtZSA9IGBoZWF0LWV4Y2hhbmdlciAke3R5cGUgPz8gXCJcIn1gO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdHJlZj17ZWxSZWZ9XG5cdFx0XHR7Li4uZW1pdCh7XG5cdFx0XHRcdGNsYXNzZXM6IFtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTn1gXSxcblx0XHRcdH0pfVxuXHRcdFx0ZGF0YS1jb21wb25lbnQ9e0NPTVBPTkVOVF9UWVBFfVxuXHRcdFx0b25DbGljaz17b25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfUk9XfWB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSfWB9PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7SE1JX0NPTVBPTkVOVF9DTEFTU30gJHtjb21wb25lbnRDbGFzc05hbWV9YH1cblx0XHRcdFx0XHRcdHN0eWxlPXt7IFwiLS1obWktcGxhdGUtY29sb3JcIjogZ2V0UGxhdGVDb2xvcihtb2RlID8/IFwiXCIpIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc31cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7LyogPEl0ZW0gaXRlbUNsYXNzTmFtZT17YCR7Z2V0SHhNb2RlQ2xhc3NOYW1lcyhcImJhc2UtMSBzaG93XCIsIEh4TW9kZXMuaGVhdGluZyApfWB9Lz4gKi99XG5cblx0XHRcdFx0XHRcdHtjb21wb25lbnRJdGVtTmFtZXMubWFwKCh7IG5hbWUsIGluZGV4LCBrZXkgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8SXRlbVxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1DbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcIiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRnZXRDbGFzc05hbWVXaXRoU3RhdHVzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleCwgLy9pbmRleFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmRlZmluZWQsIC8vIHN0YXR1c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoeEVsZW1lbnRzLCAvL2VsZW1lbnRWYXJpYW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcIlwiLCAvL2Jhc2VDbGFzc05hbWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0QkFTRV9JVEVNX0NPVU5ULCAvLyBiYXNlRWxlbWVudHNcblx0XHRcdFx0XHRcdFx0XHRcdFx0QkFTRV9JVEVNX0NPTkZJRywgLy9iYXNlQ29uZmlnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdERZTkFNSUNfSVRFTV9DT1VOVCwgLy9keW5hbWljSXRlbXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0RFlOQU1JQ19JVEVNX0NPTkZJRyAvL2R5bmFtaWNDb25maWdcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IHBvcG92ZXIgPSAoeyBhbmNob3JFbCB9OiB7IGFuY2hvckVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgfSkgPT4ge1xuXHRjb25zdCB7IGl0ZW1Qcm9wcywgY29tcG9uZW50UHJvcHMgfSA9IHVzZUh4Q29udGV4dChcIlBvcG92ZXJcIik7XG5cdGNvbnN0IHsgc2hvd0xhYmVsLCBsYWJlbFBvc2l0aW9uLCBpdGVtTmFtZSB9ID0gaXRlbVByb3BzO1xuXG5cdGlmICghc2hvd0xhYmVsKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgeyBwb3NpdGlvbiB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGxldCBjbGFzc05hbWUgPSBcIml0ZW1JZCBwb3BvdmVyIHBvc2l0aW9uLWxlZnRcIjtcblx0aWYgKGxhYmVsUG9zaXRpb24pIHtcblx0XHRjbGFzc05hbWUgPSBnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZShjbGFzc05hbWUsIGxhYmVsUG9zaXRpb24pO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHR0b3A6IHBvc2l0aW9uLnksXG5cdFx0XHRcdGxlZnQ6IHBvc2l0aW9uLngsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT57aXRlbU5hbWV9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgSGVhdEV4Y2hhbmdlckNvbXBvdW5kID0ge1xuXHRSb290LFxuXHRwbGF0ZSxcblx0cG9wb3Zlcixcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcblx0dHlwZSBFbGVtZW50UmVmLFxuXHR0eXBlIFB1bXBDb21wb3VuZENvbnRleHRUeXBlLFxuXHR0eXBlIFB1bXBDb21wb3VuZFJvb3RQcm9wcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vdmFsdmUvaXRlbVwiO1xuaW1wb3J0IHtcblx0Z2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUsXG5cdGdldFB1bXBJdGVtQ2xhc3NOYW1lLFxuXHRnZXRQdW1wU3RhdHVzQ2xhc3NOYW1lcyxcblx0cHVtcEl0ZW1OYW1lcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS91dGlsc1wiO1xuaW1wb3J0IHsgcHVtcEluaXRpYWxQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9hcGkvaW5pdGlhbFN0YXRlXCI7XG5pbXBvcnQge1xuXHRITUlfQ09NUE9ORU5UX0NMQVNTLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTixcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9ST1csXG5cdElBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUixcblx0UFVNUF9DT01QT05FTlRfVFlQRSxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9UWVBFID0gUFVNUF9DT01QT05FTlRfVFlQRTtcblxuZXhwb3J0IGNvbnN0IFtQdW1wQ29udGV4dFByb3ZpZGVyLCB1c2VQdW1wQ29udGV4dF0gPVxuXHR1c2VDcmVhdGVDb250ZXh0PFB1bXBDb21wb3VuZENvbnRleHRUeXBlPihcIlB1bXBDb21wb3VuZFwiKTtcblxuY29uc3QgUm9vdCA9ICh7XG5cdGNvbXBvbmVudFByb3BzLFxuXHRwdW1wUHJvcHMsXG5cdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRjaGlsZHJlbixcbn06IFB1bXBDb21wb3VuZFJvb3RQcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxQdW1wQ29udGV4dFByb3ZpZGVyXG5cdFx0XHR7Li4ue1xuXHRcdFx0XHRwdW1wUHJvcHMsXG5cdFx0XHRcdGNvbXBvbmVudFByb3BzLFxuXHRcdFx0XHRvbkFjdGlvblBlcmZvcm1lZCxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvUHVtcENvbnRleHRQcm92aWRlcj5cblx0KTtcbn07XG5jb25zdCBwdW1wID0gKCkgPT4ge1xuXHRjb25zdCB7IHB1bXBQcm9wcywgb25BY3Rpb25QZXJmb3JtZWQsIGNvbXBvbmVudFByb3BzIH0gPVxuXHRcdHVzZVB1bXBDb250ZXh0KFwiVmFsdmVcIik7XG5cdGNvbnN0IGVsUmVmOiBFbGVtZW50UmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblx0Y29uc3QgeyBlbWl0IH0gPSBjb21wb25lbnRQcm9wcztcblx0Y29uc3QgeyBwcm9jZXNzT2JqZWN0LCBwdW1wVHlwZSB9ID0gcHVtcFByb3BzO1xuXHRjb25zdCB7IHN0YXR1cyB9ID0gcHJvY2Vzc09iamVjdCB8fCBwdW1wSW5pdGlhbFByb3BzO1xuXG5cdC8vIGlmIG5vdCBsb2NhdGUsIHRyaW0gbGFzdCBpdGVtIGZyb20gdmFsdmVNcEl0ZW1OYW1lc1xuXHRjb25zdCBjb21wb25lbnRJdGVtTmFtZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcblx0XHRpZiAoIXN0YXR1cz8ubG9jYXRlKSB7XG5cdFx0XHRyZXR1cm4gcHVtcEl0ZW1OYW1lcy5zbGljZSgwLCAtMSk7XG5cdFx0fVxuXHRcdHJldHVybiBwdW1wSXRlbU5hbWVzO1xuXHR9LCBbc3RhdHVzPy5sb2NhdGVdKTtcblxuXHRjb25zdCBjb21wb25lbnRDbGFzc05hbWUgPSBcInB1bXBcIjtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdHJlZj17ZWxSZWZ9XG5cdFx0XHR7Li4uZW1pdCh7XG5cdFx0XHRcdGNsYXNzZXM6IFtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX0NPTFVNTn1gXSxcblx0XHRcdH0pfVxuXHRcdFx0ZGF0YS1jb21wb25lbnQ9e0NPTVBPTkVOVF9UWVBFfVxuXHRcdFx0b25DbGljaz17b25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfUk9XfWB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSfWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtITUlfQ09NUE9ORU5UX0NMQVNTfSAke2NvbXBvbmVudENsYXNzTmFtZX1gfT5cblx0XHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0XHRcdGl0ZW1DbGFzc05hbWU9e2Ake2dldFB1bXBTdGF0dXNDbGFzc05hbWVzKFxuXHRcdFx0XHRcdFx0XHRcdFwiYmFzZS0xIHNob3dcIixcblx0XHRcdFx0XHRcdFx0XHRzdGF0dXNcblx0XHRcdFx0XHRcdFx0KX1gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxJdGVtIGl0ZW1DbGFzc05hbWU9e1wiYmFzZS0yIHNob3cgaXRlbVwifSAvPlxuXHRcdFx0XHRcdFx0PEl0ZW0gaXRlbUNsYXNzTmFtZT17XCJiYXNlLTMgc2hvdyBpdGVtXCJ9IC8+XG5cblx0XHRcdFx0XHRcdHtjb21wb25lbnRJdGVtTmFtZXMubWFwKCh7IG5hbWUsIGluZGV4LCBrZXkgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8SXRlbVxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1DbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcIiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRnZXRQdW1wSXRlbUNsYXNzTmFtZShpbmRleCwgcHVtcFR5cGUgfHwgXCJjZW50cmlmdWdhbFwiLCBzdGF0dXMpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCBwb3BvdmVyID0gKHsgYW5jaG9yRWwgfTogeyBhbmNob3JFbDogSFRNTERpdkVsZW1lbnQgfCBudWxsIH0pID0+IHtcblx0Y29uc3QgeyBwdW1wUHJvcHMsIGNvbXBvbmVudFByb3BzIH0gPSB1c2VQdW1wQ29udGV4dChcIlBvcG92ZXJcIik7XG5cdGNvbnN0IHsgc2hvd0xhYmVsLCBsYWJlbFBvc2l0aW9uLCBwcm9jZXNzT2JqZWN0IH0gPSBwdW1wUHJvcHM7XG5cdGNvbnN0IHsgc3RhdHVzIH0gPSBwcm9jZXNzT2JqZWN0IHx8IHt9O1xuXHRpZiAoIXNob3dMYWJlbCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHsgcG9zaXRpb24gfSA9IGNvbXBvbmVudFByb3BzO1xuXHRsZXQgY2xhc3NOYW1lID0gXCJpdGVtSWQgcG9wb3ZlciBwb3NpdGlvbi1sZWZ0XCI7XG5cdGlmIChsYWJlbFBvc2l0aW9uKSB7XG5cdFx0Y2xhc3NOYW1lID0gZ2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUoY2xhc3NOYW1lLCBsYWJlbFBvc2l0aW9uKTtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0dG9wOiBwb3NpdGlvbi55LFxuXHRcdFx0XHRsZWZ0OiBwb3NpdGlvbi54LFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+e3N0YXR1cz8uaXRlbU5hbWV9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgUHVtcENvbXBvdW5kID0ge1xuXHRSb290LFxuXHRwdW1wLFxuXHRwb3BvdmVyLFxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUge1xuXHRWYWx2ZUNvbXBvdW5kQ29udGV4dFR5cGUsXG5cdFZhbHZlQ29tcG91bmRSb290UHJvcHMsXG59IGZyb20gXCIuLi8uLi8uLi9hcGkvdHlwZXNcIjtcbi8vIGltcG9ydCB7IHVzZVZhbHZlUmVkdWNlciB9IGZyb20gXCIuLi8uLi8uLi9hcGkvaG9va3NcIjtcbmltcG9ydCB7XG5cdGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lLFxuXHRnZXRWYWx2ZU1wSXRlbUNsYXNzTmFtZSxcblx0dmFsdmVNcEl0ZW1OYW1lcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2FwaS91dGlsc1wiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uL3ZhbHZlL2l0ZW1cIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY3JlYXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgcHJvY2Vzc09iamVjdFByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9pbml0aWFsU3RhdGVcIjtcbmltcG9ydCB7XG5cdEhNSV9DT01QT05FTlRfQ0xBU1MsXG5cdElBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OLFxuXHRJQV9TWU1CT0xfQ09NUE9ORU5UX1JPVyxcblx0SUFfU1lNQk9MX0NPTVBPTkVOVF9XUkFQUEVSLFxuXHRWQUxWRV9DT01QT05FTlRfVFlQRSxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuLy8gaW1wb3J0ICcuL3ZhbHZlLW1wLm1vZHVsZS5jc3MnXG4vLyBpbXBvcnQge3ZhbHZlU3RhdHVzfSBmcm9tICcuLi8uLi9hcGkvaW5pdGlhbFN0YXRlJ1xuY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBWQUxWRV9DT01QT05FTlRfVFlQRTtcblxuLy8gaW1wb3J0IHt2YWx2ZVN0YXR1c30gZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmV4cG9ydCBjb25zdCBbVmFsdmVDb250ZXh0UHJvdmlkZXIsIHVzZVZhbHZlQ29udGV4dF0gPVxuXHR1c2VDcmVhdGVDb250ZXh0PFZhbHZlQ29tcG91bmRDb250ZXh0VHlwZT4oXCJWYWx2ZU1wQ29tcG91bmRcIik7XG5cbmNvbnN0IFJvb3QgPSAoe1xuXHRjb21wb25lbnRQcm9wcyxcblx0dmFsdmVQcm9wcyxcblx0b25BY3Rpb25QZXJmb3JtZWQsXG5cdGNoaWxkcmVuLFxufTogVmFsdmVDb21wb3VuZFJvb3RQcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxWYWx2ZUNvbnRleHRQcm92aWRlclxuXHRcdFx0ey4uLntcblx0XHRcdFx0dmFsdmVQcm9wcyxcblx0XHRcdFx0Y29tcG9uZW50UHJvcHMsXG5cdFx0XHRcdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9WYWx2ZUNvbnRleHRQcm92aWRlcj5cblx0KTtcbn07XG5jb25zdCB2YWx2ZSA9ICgpID0+IHtcblx0Y29uc3QgeyB2YWx2ZVByb3BzLCBvbkFjdGlvblBlcmZvcm1lZCwgY29tcG9uZW50UHJvcHMgfSA9XG5cdFx0dXNlVmFsdmVDb250ZXh0KFwiVmFsdmVcIik7XG5cdC8vIGNvbnN0IHZhbHZlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblx0Y29uc3QgeyBlbWl0LCBzdG9yZSB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGNvbnN0IHsgcHJvY2Vzc09iamVjdCB9ID0gdmFsdmVQcm9wcztcblx0Y29uc3QgeyBzdGF0dXMgfSA9IHByb2Nlc3NPYmplY3QgfHwgcHJvY2Vzc09iamVjdFByb3BzO1xuc3RvcmUudmlldy52aWV3LnBhcmFtc1xuXHRsZXQgY29tcG9uZW50SXRlbU5hbWVzID0gdmFsdmVNcEl0ZW1OYW1lcztcblx0aWYgKCFzdGF0dXM/LmxvY2F0ZSkge1xuXHRcdGNvbXBvbmVudEl0ZW1OYW1lcyA9IGNvbXBvbmVudEl0ZW1OYW1lcy5zbGljZSgwLCAtMSk7XG5cdH1cbiBcdGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKVxuXG5cdGNvbnN0IGNvbXBvbmVudENsYXNzTmFtZSA9IFwidmFsdmVfX21wXCI7XG5cdC8vIGlmICghaW5Db29yZCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHJlZj17cmVmfVxuXHRcdFx0XHR7Li4uZW1pdCh7XG5cdFx0XHRcdFx0Y2xhc3NlczogW2Ake0lBX1NZTUJPTF9DT01QT05FTlRfQ09MVU1OfWBdLFxuXHRcdFx0XHR9KX1cblx0XHRcdFx0ZGF0YS1jb21wb25lbnQ9e0NPTVBPTkVOVF9UWVBFfVxuXHRcdFx0XHRvbkNsaWNrPXtvbkFjdGlvblBlcmZvcm1lZH1cblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake0lBX1NZTUJPTF9DT01QT05FTlRfUk9XfWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtJQV9TWU1CT0xfQ09NUE9ORU5UX1dSQVBQRVJ9YH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7SE1JX0NPTVBPTkVOVF9DTEFTU30gJHtjb21wb25lbnRDbGFzc05hbWV9YH0+XG5cdFx0XHRcdFx0XHRcdHtjb21wb25lbnRJdGVtTmFtZXMubWFwKCh7IHZhbHVlLCBpbmRleCwga2V5IH0pID0+IChcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRcdFx0XHQvLyBcdGByZS1yZW5kZXJlZCAsa2V5ICR7a2V5fSB2YWx1ZSAke3ZhbHVlfSBpbmRleCAke2luZGV4fWBcblx0XHRcdFx0XHRcdFx0XHQvLyApLFxuXHRcdFx0XHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgKyBcIiBcIiArIGdldFZhbHZlTXBJdGVtQ2xhc3NOYW1lKGluZGV4LCBzdGF0dXMpXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cbiB9O1xuXG5jb25zdCBwb3BvdmVyID0gKHsgYW5jaG9yRWwgfTogeyBhbmNob3JFbDogSFRNTERpdkVsZW1lbnQgfCBudWxsIH0pID0+IHtcblx0Y29uc3QgeyB2YWx2ZVByb3BzLCBjb21wb25lbnRQcm9wcyB9ID0gdXNlVmFsdmVDb250ZXh0KFwiUG9wb3ZlclwiKTtcblx0Y29uc3QgeyBzaG93TGFiZWwsIGxhYmVsUG9zaXRpb24sIHByb2Nlc3NPYmplY3QgfSA9IHZhbHZlUHJvcHM7XG5cdGNvbnN0IHsgc3RhdHVzIH0gPSBwcm9jZXNzT2JqZWN0IHx8IHByb2Nlc3NPYmplY3RQcm9wcztcblx0aWYgKCFzaG93TGFiZWwpIHJldHVybiBudWxsO1xuXHRjb25zdCB7IHBvc2l0aW9uIH0gPSBjb21wb25lbnRQcm9wcztcblx0bGV0IGNsYXNzTmFtZSA9IFwiaXRlbUlkIHBvcG92ZXIgcG9zaXRpb24tbGVmdFwiO1xuXHRpZiAobGFiZWxQb3NpdGlvbikge1xuXHRcdGNsYXNzTmFtZSA9IGdldEl0ZW1JZFBvc2l0aW9uQ2xhc3NOYW1lKGNsYXNzTmFtZSwgbGFiZWxQb3NpdGlvbik7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdHRvcDogcG9zaXRpb24ueSxcblx0XHRcdFx0bGVmdDogcG9zaXRpb24ueCxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PntzdGF0dXM/Lml0ZW1OYW1lfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IFZhbHZlTXBDb21wb3VuZCA9IHtcblx0Um9vdCxcblx0dmFsdmUsXG5cdHBvcG92ZXIsXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCBcIi4vaXRlbS5tb2R1bGUuY3NzXCI7XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuXHRpdGVtQ2xhc3NOYW1lOiBzdHJpbmc7XG5cdGhhbmRsZUNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn1cbi8vIGNvbnN0IGJpdCA9IChuOiBudW1iZXIsIGk6IG51bWJlcik6IG51bWJlciA9PiB7XG4vLyBcdHJldHVybiAobiA+PiBpKSAmIDE7XG4vLyB9O1xuY29uc3QgSXRlbTogUmVhY3QuRkM8SXRlbVByb3BzPiA9ICh7IGl0ZW1DbGFzc05hbWUsIGhhbmRsZUNsaWNrIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2l0ZW1DbGFzc05hbWV9XG5cdG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48L2Rpdj47XG59O1xuSXRlbS5kaXNwbGF5TmFtZSA9IFwiSXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiIsImltcG9ydCB0eXBlIHsgRWxlbWVudFZhcmlhbnRMaXN0IH0gZnJvbSBcIi4uL2FwaS91dGlsc1wiO1xuaW1wb3J0IHsgSHhNb2RlcyB9IGZyb20gXCIuLi9hci10eXBlcy9wcm9jZXNzT2JqZWN0cy9oZWF0RXhjaGFuZ2Vycy9oeC10eXBlc1wiO1xuaW1wb3J0IHsgZ2V0SHhNb2RlQ2xhc3NOYW1lcyB9IGZyb20gXCIuLi9hci11dGlscy9wcm9jZXNzT2JqZWN0cy9oZWF0RXhjaGFuZ2Vycy9oeC11dGlsc1wiO1xuXG4vKipcbiAqIEhNSSBDb21wb25lbnQgTW9kdWxlIENvbnN0YW50c1xuICovXG5leHBvcnQgY29uc3QgSUFfU1lNQk9MX0NPTVBPTkVOVF9DT0xVTU4gPVxuXHRcImlhX3N5bWJvbENvbXBvbmVudCBpYV9zeW1ib2xDb21wb25lbnRfX2NvbHVtblwiO1xuZXhwb3J0IGNvbnN0IElBX1NZTUJPTF9DT01QT05FTlRfUk9XID0gXCJpYV9zeW1ib2xDb21wb25lbnRfX3Jvd1wiO1xuZXhwb3J0IGNvbnN0IElBX1NZTUJPTF9DT01QT05FTlRfV1JBUFBFUiA9IFwiaWFfc3ltYm9sQ29tcG9uZW50X193cmFwcGVyXCI7XG5leHBvcnQgY29uc3QgSE1JX0NPTVBPTkVOVF9DTEFTUyA9IFwiaG1pLWNvbXBvbmVudFwiO1xuXG5leHBvcnQgY29uc3QgVkFMVkVfQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5wcm9jZXNzX29iamVjdHMuVmFsdmVcIjtcbmV4cG9ydCBjb25zdCBQVU1QX0NPTVBPTkVOVF9UWVBFID0gXCJobWkucHJvY2Vzc19vYmplY3RzLlB1bXBcIjtcbmV4cG9ydCBjb25zdCBTVEFUVVNfQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5kaXNwbGF5LlN0YXR1c1ZhbHZlTXBcIjtcbmV4cG9ydCBjb25zdCBQQVJBTUVURVJfTElTVF9DT01QT05FTlRfVFlQRSA9IFwiaG1pLmlucHV0LlBhcmFtZXRlckxpc3RcIjtcbmV4cG9ydCBjb25zdCBDT01NQU5EX1ZBTFZFX01QX0NPTVBPTkVOVF9UWVBFID0gXCJobWkuaW5wdXQuQ29tbWFuZFZhbHZlTXBcIjtcbmV4cG9ydCBjb25zdCBIWF9DT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5IZWF0RXhjaGFuZ2VyXCI7XG5leHBvcnQgY29uc3QgRkxPV19QUk9WSURFUl9DT01QT05FTlRfVFlQRSA9IFwiaG1pLmZsb3cuRmxvd1Byb3ZpZGVyXCI7XG5leHBvcnQgY29uc3QgRkxPV19DT01QT05FTlRfVFlQRSA9IFwiaG1pLmZsb3cuRmxvd1wiO1xuXG5cbi8vIENvbXBvbmVudCBFbGVtZW50IENvbnN0cnVjdGlvblxuXG5leHBvcnQgY29uc3QgaHhFbGVtZW50czogRWxlbWVudFZhcmlhbnRMaXN0ID0gW1xueyBiYXNlQ2xhc3M6IGdldEh4TW9kZUNsYXNzTmFtZXMoXCJwbGF0ZVwiLEh4TW9kZXMuaGVhdGluZykgfSxcbnsgc3RhdHVzS2V5OiB7YWN0RkI6IHt0cnVlU3RyaW5nOlwiYWN0aXZhdGVkXCJ9fSB9LFxueyBzdGF0dXNLZXk6IHtkZUFjdEZCOiB7dHJ1ZVN0cmluZzpcImRlYWN0aXZhdGVkXCJ9fSB9LFxueyBzdGF0dXNLZXk6IHthbGFybToge3RydWVTdHJpbmc6XCJhbGFybVwifX0gfSxcbl1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29udGV4dDxDb250ZXh0VmFsdWVUeXBlIGV4dGVuZHMgb2JqZWN0IHwgbnVsbD4oXG4gIHJvb3RDb21wb25lbnROYW1lOiBzdHJpbmcsXG4gIGRlZmF1bHRDb250ZXh0PzogQ29udGV4dFZhbHVlVHlwZVxuKSB7XG4gIGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENvbnRleHRWYWx1ZVR5cGUgfCB1bmRlZmluZWQ+KFxuICAgIGRlZmF1bHRDb250ZXh0XG4gICk7XG5cbiAgY29uc3QgUHJvdmlkZXI6IFJlYWN0LkZDPENvbnRleHRWYWx1ZVR5cGUgJiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoXG4gICAgcHJvcHNcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgLi4uY29udGV4dCB9ID0gcHJvcHM7XG4gICAgLy8gT25seSByZS1tZW1vaXplIHdoZW4gcHJvcCB2YWx1ZXMgY2hhbmdlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIGNvbnN0IHZhbHVlID0gUmVhY3QudXNlTWVtbyhcbiAgICAgICgpID0+IGNvbnRleHQsXG4gICAgICBPYmplY3QudmFsdWVzKGNvbnRleHQpXG4gICAgKSBhcyBDb250ZXh0VmFsdWVUeXBlO1xuICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xuICB9O1xuXG4gIFByb3ZpZGVyLmRpc3BsYXlOYW1lID0gcm9vdENvbXBvbmVudE5hbWUgKyBcIlByb3ZpZGVyXCI7XG5cbiAgZnVuY3Rpb24gdXNlQ29udGV4dChjb25zdW1lck5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpO1xuICAgIGlmIChjb250ZXh0KSByZXR1cm4gY29udGV4dDtcbiAgICBpZiAoZGVmYXVsdENvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGRlZmF1bHRDb250ZXh0O1xuICAgIC8vIGlmIGEgZGVmYXVsdENvbnRleHQgd2Fzbid0IHNwZWNpZmllZCwgaXQncyBhIHJlcXVpcmVkIGNvbnRleHQuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFxcYCR7Y29uc3VtZXJOYW1lfVxcYCBtdXN0IGJlIHVzZWQgd2l0aGluIFxcYCR7cm9vdENvbXBvbmVudE5hbWV9XFxgYFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gW1Byb3ZpZGVyLCB1c2VDb250ZXh0XSBhcyBjb25zdDtcbn1cbiIsIi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnMgZm9yIG51bWJlcnNcbiAqL1xuXG4vKipcbiAqIFVzaW5nIHRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgbiwgYW4gSW50ZWdlciwgcmV0dXJucyB0aGUgYm9vbGVhblxuICogdmFsdWUgYXQgaW5kZXgsIGkuXG4gKiBAcGFyYW0gbiBhIG51bWJlciBpcyBpbXBsaWNpdHkgY29udmVydGVyIHRvIGEgMzJiaXQgaW50ZWdlciwgYnkgdGhlIGJpdHdpc2Ugb3BlcmF0b3JzXG4gKiBAcGFyYW0gaSBpcyBhIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGJpdCBwb3NpdGlvbiB0byBiZSB0ZXN0ZWRcbiAqIEByZXR1cm5zIHRoZSBib29sZWFuIHZhbHVlIG9mIHRoZSBiaXQgYXQgaW5kZXggaS5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEJvb2xBdEluZGV4ID0gKG46IG51bWJlciwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBCb29sZWFuKChuID4+IGkpICYgMSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRQVmFsdmVDb25maWdUb0htaVZhbHZlQ29uZmlnKG46IG51bWJlcikge1xuXHQvLyBiaXQgOSBpcyB0cnVlIC0gYnV0dGVyZmx5IHZhbHZlXG5cdGxldCBuZXdDb25maWcgPTA7XG5cdGxldCB0cCwgaG1pO1xuXHQvLyBuIGF0IGluZGV4IDkgaXMgdHJ1ZVxuXHRpZiAoKG4gPj4gOSkgJiAxKSB7XG5cdFx0Ly8gVFAgYml0IDAgPSBIbWkgYml0IDBcblx0XHR0cD05OyBobWk9OVxuXHRcdG5ld0NvbmZpZyA9IChuZXdDb25maWcgJiB+KDEgPDwgaG1pKSkgfCAoKChuID4+IHRwKSAmIDEpIDw8IGhtaSk7XG5cdFx0Ly8gVFAgYml0IDAgPSBIbWkgYml0IDBcblx0XHR0cD0wOyBobWk9MFxuXHRcdG5ld0NvbmZpZyA9IChuZXdDb25maWcgJiB+KDEgPDwgaG1pKSkgfCAoKChuID4+IHRwKSAmIDEpIDw8IGhtaSk7XG5cdFx0Ly8gVFAgYml0IDQgPSBIbWkgYml0IDJcblx0XHR0cD00OyBobWk9MlxuXHRcdG5ld0NvbmZpZyA9IChuZXdDb25maWcgJiB+KDEgPDwgaG1pKSkgfCAoKChuID4+IHRwKSAmIDEpIDw8IGhtaSk7XG5cblx0XHQvLyBUUCBiaXQgNiA9IEhtaSBiaXQgM1xuXHRcdHRwPTY7IGhtaT0zXG5cdFx0bmV3Q29uZmlnID0gKG5ld0NvbmZpZyAmIH4oMSA8PCBobWkpKSB8ICgoKG4gPj4gdHApICYgMSkgPDwgaG1pKTtcblx0XHQvLyBUUCBiaXQgMiA9IEhtaSBiaXQgMVxuXHRcdHRwPTI7IGhtaT0xXG5cdFx0bmV3Q29uZmlnID0gKG5ld0NvbmZpZyAmIH4oMSA8PCBobWkpKSB8ICgoKG4gPj4gdHApICYgMSkgPDwgaG1pKTtcblxuXG5cdH0gZWxzZSB7XG5cdFx0Ly8gVFAgYml0IDcgPSBIbWkgYml0IDNcblx0XHR0cD03OyBobWk9M1xuXHRcdG5ld0NvbmZpZyA9IChuZXdDb25maWcgJiB+KDEgPDwgaG1pKSkgfCAoKChuID4+IHRwKSAmIDEpIDw8IGhtaSk7XG5cdFx0Ly8gVFAgYml0IDUgPSBIbWkgYml0IDdcblx0XHR0cD01OyBobWk9N1xuXHRcdG5ld0NvbmZpZyA9IChuZXdDb25maWcgJiB+KDEgPDwgaG1pKSkgfCAoKChuID4+IHRwKSAmIDEpIDw8IGhtaSk7XG5cblx0XHQvLyBUUCBiaXQgMyA9IEhtaSBiaXQgNVxuXHRcdHRwPTM7IGhtaT01XG5cdFx0bmV3Q29uZmlnID0gKG5ld0NvbmZpZyAmIH4oMSA8PCBobWkpKSB8ICgoKG4gPj4gdHApICYgMSkgPDwgaG1pKTtcblx0XHQvLyBUUCBiaXQgNCA9IEhtaSBiaXQgNlxuXHRcdHRwPTQ7IGhtaT02XG5cdFx0bmV3Q29uZmlnID0gKG5ld0NvbmZpZyAmIH4oMSA8PCBobWkpKSB8ICgoKG4gPj4gdHApICYgMSkgPDwgaG1pKTtcblxuXHR9XG5cdC8vIG4gYXQgaW5kZXggOCBpcyB0cnVlXG5cdC8vIHNldCBiaXRzIDIgYW5kIDRcblx0aWYoKG4gPj4gOCkgJiAxKXtcblx0XHRuZXdDb25maWcgPSBuZXdDb25maWcgfCAoMSA8PCAyICkgfCAoMSA8PCA0KSB8ICgxIDw8IDgpXG5cdH1cblx0aWYoKG4gPj4gMCkgJiAxKXtcblx0XHRuZXdDb25maWcgPSBuZXdDb25maWcgfCAoMSA8PCAwIClcblx0fVxuXHRpZigobiA+PiAxKSAmIDEpe1xuXHRcdG5ld0NvbmZpZyA9IG5ld0NvbmZpZyB8ICgxIDw8IDEgKVxuXHR9XG5cdC8vIGlmIGFueSBvZiBiaXRzIDcgLCA2LCAmIDUgYXJlIHRydWUgc2V0IGJpdCA4XG5cdGlmKCgobmV3Q29uZmlnID4+IDcpICYgMSkgfCAoKG5ld0NvbmZpZyA+PiA2KSAmIDEpIHwgKChuZXdDb25maWcgPj4gNSkgJiAxKSApe1xuXHRcdG5ld0NvbmZpZyA9IG5ld0NvbmZpZyB8ICgxIDw8IDggKVxuXHR9XG5cdHJldHVybiBuZXdDb25maWdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW5kdWN0aXZlYXV0b21hdGlvbl9wZXJzcGVjdGl2ZV9jbGllbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ29tcG9uZW50TWV0YSwgQ29tcG9uZW50UmVnaXN0cnkgfSBmcm9tICdAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuaW1wb3J0IHsgVmFsdmUsIFZhbHZlTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9WYWx2ZSc7XG5pbXBvcnQgeyBQdW1wLCBQdW1wTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9QdW1wJztcbmltcG9ydCB7IEhlYXRFeGNoYW5nZXIsIEhlYXRFeGNoYW5nZXJNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlYXRFeGNoYW5nZXInO1xuaW1wb3J0IHsgUGFyYW1ldGVyTGlzdENvbXBvbmVudCwgUGFyYW1ldGVyTGlzdENvbXBvbmVudE1ldGF9IGZyb20gJy4vY29tcG9uZW50cy9QYXJhbWV0ZXJMaXN0J1xuaW1wb3J0IHsgQ29tbWFuZFZhbHZlTXAsIENvbW1hbmRWYWx2ZU1wTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9Db21tYW5kVmFsdmVNcCc7XG5pbXBvcnQgeyBTdGF0dXNWYWx2ZU1wLCBTdGF0dXNWYWx2ZU1wTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9TdGF0dXNWYWx2ZU1wJztcbmltcG9ydCB7IEZsb3dQcm92aWRlciwgRmxvd1Byb3ZpZGVyTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9GbG93UHJvdmlkZXInO1xuaW1wb3J0IHsgRmxvd05vZGVDb21wb25lbnQsIEZsb3dOb2RlQ29tcG9uZW50TWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9mbG93L0NvbXBvbmVudHMvRmxvd05vZGUnO1xuaW1wb3J0IHsgRmxvdywgRmxvd01ldGEgfSBmcm9tICcuL2NvbXBvbmVudHMvZmxvdy9GbG93JztcblxuLy8gRXhwb3J0IGNvbXBvbmVudHMgZm9yIGV4dGVybmFsIHJlZmVyZW5jZVxuZXhwb3J0IHtcblx0VmFsdmUgLFxuXHRQdW1wICxcblx0SGVhdEV4Y2hhbmdlciAsXG5cdFBhcmFtZXRlckxpc3RDb21wb25lbnQsXG5cdENvbW1hbmRWYWx2ZU1wLFxuXHRTdGF0dXNWYWx2ZU1wLFxuXHRGbG93UHJvdmlkZXIsXG5cdEZsb3dOb2RlQ29tcG9uZW50LFxuXHRGbG93LFxuXHR9O1xuXG4vLyBJbXBvcnQgY29tcG9uZW50IHN0eWxlc1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbi8vIEFycmF5IG9mIGNvbXBvbmVudCBtZXRhZGF0YVxuY29uc3QgY29tcG9uZW50czogQXJyYXk8Q29tcG9uZW50TWV0YT4gPSBbXG5cdG5ldyBWYWx2ZU1ldGEoKSxcblx0bmV3IFB1bXBNZXRhKCksXG5cdG5ldyBIZWF0RXhjaGFuZ2VyTWV0YSgpLFxuXHRuZXcgUGFyYW1ldGVyTGlzdENvbXBvbmVudE1ldGEoKSxcblx0bmV3IENvbW1hbmRWYWx2ZU1wTWV0YSgpLFxuXHRuZXcgU3RhdHVzVmFsdmVNcE1ldGEoKSxcblx0bmV3IEZsb3dQcm92aWRlck1ldGEoKSxcblx0bmV3IEZsb3dOb2RlQ29tcG9uZW50TWV0YSgpLFxuXHRuZXcgRmxvd01ldGEoKSxcbl07XG5cbi8vIFJlZ2lzdGVyIGVhY2ggY29tcG9uZW50IHdpdGggdGhlIFBlcnNwZWN0aXZlIENvbXBvbmVudFJlZ2lzdHJ5XG5jb21wb25lbnRzLmZvckVhY2goKGM6IENvbXBvbmVudE1ldGEpID0+IENvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyKGMpKTtcbi8vIEFkZCB0aGlzIGFmdGVyIHJlZ2lzdHJhdGlvblxuc2V0VGltZW91dCgoKSA9PiB7XG4gIGNvbnN0IHJlZ2lzdGVyZWQgPSBDb21wb25lbnRSZWdpc3RyeS5nZXRNZXRhKCdobWkuY29tcG9uZW50Lkpzb25WaWV3Jyk7XG4gIGNvbnNvbGUubG9nKCdDb21wb25lbnQgcmVnaXN0ZXJlZDonLCAhIXJlZ2lzdGVyZWQpO1xufSwgMTAwMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=