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
const use_immer_1 = __webpack_require__(/*! use-immer */ "./node_modules/use-immer/dist/use-immer.js");
const initialState_1 = __webpack_require__(/*! ./initialState */ "./src/api/initialState.ts");
function valveReducer(draft, action) {
    switch (action.type) {
        case 'UPDATE_ACT_CONFIG':
            draft.activatedConfig = action.value;
            return draft;
        case 'UPDATE_DEACT_CONFIG':
            draft.deactivatedConfig = action.value;
            return draft;
        case 'UPDATE_ACT_FB':
            draft.actFB = !draft.actFB;
            return draft;
        case 'UPDATE_DE_ACT_FB':
            draft.deActFB = !draft.deActFB;
            return draft;
        case 'UPDATE_USL':
            draft.usl = !draft.usl;
            return draft;
        case 'UPDATE_LSL':
            draft.lsl = !draft.lsl;
            return draft;
        case 'UPDATE_MANUAL':
            draft.manual = !draft.manual;
            return draft;
        case 'UPDATE_ALARM':
            draft.alarm = !draft.alarm;
            return draft;
        case 'UPDATE_MASKED':
            draft.masked = !draft.masked;
            return draft;
        case 'UPDATE_CHANGING':
            draft.changing = !draft.changing;
            return draft;
        case 'UPDATE_LOCATE':
            draft.locate = !draft.locate;
            return draft;
        default: // #TODO Add more reducer case statements
            return draft;
    }
}
;
function useValveReducer() {
    const [state, dispatch] = (0, use_immer_1.useImmerReducer)(valveReducer, initialState_1.valveStatus);
    function updateActConfig(value) {
        dispatch({ type: 'UPDATE_ACT_CONFIG', value });
    }
    function updateDeActConfig(value) {
        dispatch({ type: 'UPDATE_DEACT_CONFIG', value });
    }
    function updateUsl() {
        dispatch({ type: 'UPDATE_USL' });
    }
    function updateLsl() {
        dispatch({ type: 'UPDATE_LSL' });
    }
    function updateAlarm() {
        dispatch({ type: 'UPDATE_ALARM' });
    }
    function updateActFB() {
        dispatch({ type: 'UPDATE_ACT_FB' });
    }
    function updateDeActFB() {
        dispatch({ type: 'UPDATE_DE_ACT_FB' });
    }
    function updateManual() {
        dispatch({ type: 'UPDATE_MANUAL' });
    }
    function updateMasked() {
        dispatch({ type: 'UPDATE_MASKED' });
    }
    function updateChanging() {
        dispatch({ type: 'UPDATE_CHANGING' });
    }
    function updateLocate() {
        dispatch({ type: 'UPDATE_LOCATE' });
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
        }
    };
    return useEditValveReducer;
}
/**
 *  Update a parameter item in a list of parameter items
*/
function ParameterReducer(draft, action) {
    switch (action.type) {
        case 'UPDATE_VALUE':
            draft[action.index].input.value = action.value;
            return draft;
        default: // #TODO Add more reducer case statements
            return draft;
    }
}
;
function paramItemsReducer() {
    const [state, dispatch] = (0, use_immer_1.useImmerReducer)(ParameterReducer, initialState_1.parameterInitialState);
    function updateValue(index, value) {
        dispatch({ type: 'UPDATE_VALUE', index: index, value: value });
    }
    // Add more dispatch functions here
    const useParameterReducer = {
        state,
        reducer: {
            updateValue
        }
    };
    return useParameterReducer;
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
exports.parameterInitialState = exports.valveProps = exports.valveStatus = void 0;
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
exports.valveProps = {
    ValveStatus: exports.valveStatus,
    handleClick: () => {
        console.log("Valve clicked");
    },
};
exports.parameterInitialState = [{
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
    }];


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
    console.log(`transformedProps: label ${transformedProps[0].label.text}`);
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
exports.COMPONENT_TYPE = "hmi.process_objects.Valve";
/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
class Valve extends perspective_client_1.Component {
    constructor(props) {
        super(props);
        this.valveStatus = this.props.props.ValveStatus || initialState_1.valveStatus;
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
        console.log("ValveStatus", tree.read("ValveStatus"));
        return {
            ValveStatus: {
                alarm: tree.readBoolean("ValveStatus.alarm", false),
                actFB: tree.readBoolean("ValveStatus.actFB", false),
                deActFB: tree.readBoolean("ValveStatus.deActFB", false),
                activatedConfig: tree.readNumber("ValveStatus.activatedConfig", 6),
                deactivatedConfig: tree.readNumber("ValveStatus.deactivatedConfig", 0),
                itemName: tree.readString("ValveStatus.itemName", ""),
                manual: tree.readBoolean("ValveStatus.manual", false),
                masked: tree.readBoolean("ValveStatus.masked", false),
                changing: tree.readBoolean("ValveStatus.changing", false),
                locate: tree.readBoolean("ValveStatus.locate", false),
                usl: tree.readBoolean("ValveStatus.usl", false),
                lsl: tree.readBoolean("ValveStatus.lsl", false),
            },
            showItemId: tree.readBoolean("showItemId", false),
            itemIdPosition: tree.readString("itemIdPosition", "top-left"),
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
    const { ValveStatus } = valveProps;
    const inCoord = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : false;
    // if not locate, trim last item from valveMpItemNames
    let componentItemNames = utils_1.valveMpItemNames;
    if (!(ValveStatus === null || ValveStatus === void 0 ? void 0 : ValveStatus.locate)) {
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
                (React.createElement(item_1.default, { itemClassName: value + " " + (0, utils_1.getValveMpItemClassName)(index, ValveStatus), key: key }))))))));
    }
    else {
        return (React.createElement("div", Object.assign({ ref: valveRef }, emit({
            classes: [`hmi-component hmi-component-valve__mp `],
        }), { "data-component": COMPONENT_TYPE, onClick: onActionPerformed }), componentItemNames.map(({ value, index, key }) => (
        // console.log(
        // 	`re-rendered ,key ${key} value ${value} index ${index}`
        // ),
        (React.createElement(item_1.default, { itemClassName: value + " " + (0, utils_1.getValveMpItemClassName)(index, ValveStatus), key: key }))))));
    }
};
const popover = ({ anchorEl }) => {
    const { valveProps, componentProps } = (0, exports.useValveContext)("Popover");
    const { showItemId, itemIdPosition, ValveStatus } = valveProps;
    if (!showItemId)
        return null;
    const { position } = componentProps;
    let className = "itemId popover position-left";
    if (itemIdPosition) {
        className = (0, utils_1.getItemIdPositionClassName)(className, itemIdPosition);
    }
    return (React.createElement("div", { className: className, style: {
            top: position.y,
            left: position.x,
        } },
        React.createElement("div", { style: { padding: 8 } }, ValveStatus === null || ValveStatus === void 0 ? void 0 : ValveStatus.itemName)));
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
exports.ParameterListComponent = exports.Valve = void 0;
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
//import { Button, ButtonMeta } from './components/Button';
//import { Valve, ValveMeta } from "./components/Valve";
const Valve_1 = __webpack_require__(/*! ./components/Valve */ "./src/components/Valve.tsx");
Object.defineProperty(exports, "Valve", ({ enumerable: true, get: function () { return Valve_1.Valve; } }));
const ParameterList_1 = __webpack_require__(/*! ./components/ParameterList */ "./src/components/ParameterList.tsx");
Object.defineProperty(exports, "ParameterListComponent", ({ enumerable: true, get: function () { return ParameterList_1.ParameterListComponent; } }));
// Import component styles
__webpack_require__(/*! ./index.css */ "./src/index.css");
// Array of component metadata
const components = [
    new Valve_1.ValveMeta(),
    new ParameterList_1.ParameterListComponentMeta(),
];
// Register each component with the Perspective ComponentRegistry
components.forEach((c) => perspective_client_1.ComponentRegistry.register(c));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG1pQ29tcG9uZW50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFxQztBQUNsRDtBQUNBO0FBQ0EsOEJBQThCLE9BQU8sa0ZBQWtGLE9BQU87QUFDOUgsR0FBRztBQUNIO0FBQ0EsaUtBQWlLLE1BQU07QUFDdkssR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFFO0FBQ047QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQztBQUNBO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXLElBQUksaUJBQWlCO0FBQ3JFO0FBQ0EsdUJBQXVCLG1CQUFtQixvQkFBb0IsMkRBQTJELElBQUk7QUFDN0g7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7QUFFSDs7Ozs7O0dBTUc7QUFDSSxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQVcsRUFBRTtJQUMvRCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFGVyxzQkFBYyxrQkFFekI7Ozs7Ozs7Ozs7OztBQ2JGOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BLDJJQUEyRjtBQUMzRiwyREFBMkQ7QUFDM0Qsd0RBQXdEO0FBQ3hELDRGQUFzRDtBQUtyRCx1RkFMUSxhQUFLLFFBS1I7QUFKTixvSEFBOEY7QUFLN0Ysd0dBTFEsc0NBQXNCLFFBS1I7QUFHdkIsMEJBQTBCO0FBQzFCLDBEQUFxQjtBQUVyQiw4QkFBOEI7QUFDOUIsTUFBTSxVQUFVLEdBQXlCO0lBQ3hDLElBQUksaUJBQVMsRUFBRTtJQUNmLElBQUksMENBQTBCLEVBQUU7Q0FDaEMsQ0FBQztBQUVGLGlFQUFpRTtBQUNqRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZ0IsRUFBRSxFQUFFLENBQUMsc0NBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvY2pzL2ltbWVyLmNqcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvY2pzL2luZGV4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXNlLWltbWVyL2Rpc3QvdXNlLWltbWVyLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL21heC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9tZDUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9wYXJzZS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjFUb1Y2LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YzLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92NS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92Ni5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92NlRvVjEuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjcuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS9ob29rcy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS9pbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9hcGkvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9hcGkvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1BhcmFtZXRlckxpc3QudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9WYWx2ZS50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS1tcC9WYWx2ZU1wLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3ZhbHZlL2l0ZW0udHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvdXRpbHMvY3JlYXRlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy91dGlscy9udW1iZXJVdGlsLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvZXh0ZXJuYWwgdW1kIFwiUGVyc3BlY3RpdmVDbGllbnRcIiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL2V4dGVybmFsIHVtZCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQZXJzcGVjdGl2ZUNsaWVudFwiKSwgcmVxdWlyZShcIlJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiSG1pQ29tcG9uZW50c1wiLCBbXCJQZXJzcGVjdGl2ZUNsaWVudFwiLCBcIlJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhtaUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJQZXJzcGVjdGl2ZUNsaWVudFwiKSwgcmVxdWlyZShcIlJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIbWlDb21wb25lbnRzXCJdID0gZmFjdG9yeShyb290W1wiUGVyc3BlY3RpdmVDbGllbnRcIl0sIHJvb3RbXCJSZWFjdFwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW5kdWN0aXZlYXV0b21hdGlvbl9wZXJzcGVjdGl2ZV9jbGllbnRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSA9PiB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW1tZXIudHNcbnZhciBpbW1lcl9leHBvcnRzID0ge307XG5fX2V4cG9ydChpbW1lcl9leHBvcnRzLCB7XG4gIEltbWVyOiAoKSA9PiBJbW1lcjIsXG4gIGFwcGx5UGF0Y2hlczogKCkgPT4gYXBwbHlQYXRjaGVzLFxuICBjYXN0RHJhZnQ6ICgpID0+IGNhc3REcmFmdCxcbiAgY2FzdEltbXV0YWJsZTogKCkgPT4gY2FzdEltbXV0YWJsZSxcbiAgY3JlYXRlRHJhZnQ6ICgpID0+IGNyZWF0ZURyYWZ0LFxuICBjdXJyZW50OiAoKSA9PiBjdXJyZW50LFxuICBlbmFibGVNYXBTZXQ6ICgpID0+IGVuYWJsZU1hcFNldCxcbiAgZW5hYmxlUGF0Y2hlczogKCkgPT4gZW5hYmxlUGF0Y2hlcyxcbiAgZmluaXNoRHJhZnQ6ICgpID0+IGZpbmlzaERyYWZ0LFxuICBmcmVlemU6ICgpID0+IGZyZWV6ZSxcbiAgaW1tZXJhYmxlOiAoKSA9PiBEUkFGVEFCTEUsXG4gIGlzRHJhZnQ6ICgpID0+IGlzRHJhZnQsXG4gIGlzRHJhZnRhYmxlOiAoKSA9PiBpc0RyYWZ0YWJsZSxcbiAgbm90aGluZzogKCkgPT4gTk9USElORyxcbiAgb3JpZ2luYWw6ICgpID0+IG9yaWdpbmFsLFxuICBwcm9kdWNlOiAoKSA9PiBwcm9kdWNlLFxuICBwcm9kdWNlV2l0aFBhdGNoZXM6ICgpID0+IHByb2R1Y2VXaXRoUGF0Y2hlcyxcbiAgc2V0QXV0b0ZyZWV6ZTogKCkgPT4gc2V0QXV0b0ZyZWV6ZSxcbiAgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHk6ICgpID0+IHNldFVzZVN0cmljdFNoYWxsb3dDb3B5XG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKGltbWVyX2V4cG9ydHMpO1xuXG4vLyBzcmMvdXRpbHMvZW52LnRzXG52YXIgTk9USElORyA9IFN5bWJvbC5mb3IoXCJpbW1lci1ub3RoaW5nXCIpO1xudmFyIERSQUZUQUJMRSA9IFN5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIik7XG52YXIgRFJBRlRfU1RBVEUgPSBTeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIik7XG5cbi8vIHNyYy91dGlscy9lcnJvcnMudHNcbnZhciBlcnJvcnMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBbXG4gIC8vIEFsbCBlcnJvciBjb2Rlcywgc3RhcnRpbmcgYnkgMDpcbiAgZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgcmV0dXJuIGBUaGUgcGx1Z2luIGZvciAnJHtwbHVnaW59JyBoYXMgbm90IGJlZW4gbG9hZGVkIGludG8gSW1tZXIuIFRvIGVuYWJsZSB0aGUgcGx1Z2luLCBpbXBvcnQgYW5kIGNhbGwgXFxgZW5hYmxlJHtwbHVnaW59KClcXGAgd2hlbiBpbml0aWFsaXppbmcgeW91ciBhcHBsaWNhdGlvbi5gO1xuICB9LFxuICBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBgcHJvZHVjZSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhpbmdzIHRoYXQgYXJlIGRyYWZ0YWJsZTogcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBNYXAsIFNldCBvciBjbGFzc2VzIHRoYXQgYXJlIG1hcmtlZCB3aXRoICdbaW1tZXJhYmxlXTogdHJ1ZScuIEdvdCAnJHt0aGluZ30nYDtcbiAgfSxcbiAgXCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLFxuICBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IHVzZSBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZC4gRGlkIHlvdSBwYXNzIGFuIG9iamVjdCBmcm9tIGluc2lkZSBhbiBpbW1lciBmdW5jdGlvbiB0byBhbiBhc3luYyBwcm9jZXNzPyBcIiArIGRhdGE7XG4gIH0sXG4gIFwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIixcbiAgXCJJbW1lciBmb3JiaWRzIGNpcmN1bGFyIHJlZmVyZW5jZXNcIixcbiAgXCJUaGUgZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb25cIixcbiAgXCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIixcbiAgXCJGaXJzdCBhcmd1bWVudCB0byBgY3JlYXRlRHJhZnRgIG11c3QgYmUgYSBwbGFpbiBvYmplY3QsIGFuIGFycmF5LCBvciBhbiBpbW1lcmFibGUgb2JqZWN0XCIsXG4gIFwiRmlyc3QgYXJndW1lbnQgdG8gYGZpbmlzaERyYWZ0YCBtdXN0IGJlIGEgZHJhZnQgcmV0dXJuZWQgYnkgYGNyZWF0ZURyYWZ0YFwiLFxuICBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBgJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiAke3RoaW5nfWA7XG4gIH0sXG4gIFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIixcbiAgXCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuICBcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLFxuICBcIkltbWVyIG9ubHkgc3VwcG9ydHMgc2V0dGluZyBhcnJheSBpbmRpY2VzIGFuZCB0aGUgJ2xlbmd0aCcgcHJvcGVydHlcIixcbiAgZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gYCdvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6ICR7dGhpbmd9YDtcbiAgfVxuICAvLyBOb3RlOiBpZiBtb3JlIGVycm9ycyBhcmUgYWRkZWQsIHRoZSBlcnJvck9mZnNldCBpbiBQYXRjaGVzLnRzIHNob3VsZCBiZSBpbmNyZWFzZWRcbiAgLy8gU2VlIFBhdGNoZXMudHMgZm9yIGFkZGl0aW9uYWwgZXJyb3JzXG5dIDogW107XG5mdW5jdGlvbiBkaWUoZXJyb3IsIC4uLmFyZ3MpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnN0IGUgPSBlcnJvcnNbZXJyb3JdO1xuICAgIGNvbnN0IG1zZyA9IHR5cGVvZiBlID09PSBcImZ1bmN0aW9uXCIgPyBlLmFwcGx5KG51bGwsIGFyZ3MpIDogZTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFtJbW1lcl0gJHttc2d9YCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiAke2Vycm9yfS4gRnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZmBcbiAgKTtcbn1cblxuLy8gc3JjL3V0aWxzL2NvbW1vbi50c1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuZnVuY3Rpb24gaXNEcmFmdCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiAhIXZhbHVlW0RSQUZUX1NUQVRFXTtcbn1cbmZ1bmN0aW9uIGlzRHJhZnRhYmxlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpXG4gICAgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgISF2YWx1ZVtEUkFGVEFCTEVdIHx8ICEhdmFsdWUuY29uc3RydWN0b3I/LltEUkFGVEFCTEVdIHx8IGlzTWFwKHZhbHVlKSB8fCBpc1NldCh2YWx1ZSk7XG59XG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IGdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgQ3RvciA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICBpZiAoQ3RvciA9PT0gT2JqZWN0KVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gXCJmdW5jdGlvblwiICYmIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoQ3RvcikgPT09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5mdW5jdGlvbiBvcmlnaW5hbCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnQodmFsdWUpKVxuICAgIGRpZSgxNSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWVbRFJBRlRfU1RBVEVdLmJhc2VfO1xufVxuZnVuY3Rpb24gZWFjaChvYmosIGl0ZXIpIHtcbiAgaWYgKGdldEFyY2h0eXBlKG9iaikgPT09IDAgLyogT2JqZWN0ICovKSB7XG4gICAgUmVmbGVjdC5vd25LZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpdGVyKGtleSwgb2JqW2tleV0sIG9iaik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4gaXRlcihpbmRleCwgZW50cnksIG9iaikpO1xuICB9XG59XG5mdW5jdGlvbiBnZXRBcmNodHlwZSh0aGluZykge1xuICBjb25zdCBzdGF0ZSA9IHRoaW5nW0RSQUZUX1NUQVRFXTtcbiAgcmV0dXJuIHN0YXRlID8gc3RhdGUudHlwZV8gOiBBcnJheS5pc0FycmF5KHRoaW5nKSA/IDEgLyogQXJyYXkgKi8gOiBpc01hcCh0aGluZykgPyAyIC8qIE1hcCAqLyA6IGlzU2V0KHRoaW5nKSA/IDMgLyogU2V0ICovIDogMCAvKiBPYmplY3QgKi87XG59XG5mdW5jdGlvbiBoYXModGhpbmcsIHByb3ApIHtcbiAgcmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gMiAvKiBNYXAgKi8gPyB0aGluZy5oYXMocHJvcCkgOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpbmcsIHByb3ApO1xufVxuZnVuY3Rpb24gZ2V0KHRoaW5nLCBwcm9wKSB7XG4gIHJldHVybiBnZXRBcmNodHlwZSh0aGluZykgPT09IDIgLyogTWFwICovID8gdGhpbmcuZ2V0KHByb3ApIDogdGhpbmdbcHJvcF07XG59XG5mdW5jdGlvbiBzZXQodGhpbmcsIHByb3BPck9sZFZhbHVlLCB2YWx1ZSkge1xuICBjb25zdCB0ID0gZ2V0QXJjaHR5cGUodGhpbmcpO1xuICBpZiAodCA9PT0gMiAvKiBNYXAgKi8pXG4gICAgdGhpbmcuc2V0KHByb3BPck9sZFZhbHVlLCB2YWx1ZSk7XG4gIGVsc2UgaWYgKHQgPT09IDMgLyogU2V0ICovKSB7XG4gICAgdGhpbmcuYWRkKHZhbHVlKTtcbiAgfSBlbHNlXG4gICAgdGhpbmdbcHJvcE9yT2xkVmFsdWVdID0gdmFsdWU7XG59XG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzTWFwKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgTWFwO1xufVxuZnVuY3Rpb24gaXNTZXQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBTZXQ7XG59XG5mdW5jdGlvbiBsYXRlc3Qoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLmNvcHlfIHx8IHN0YXRlLmJhc2VfO1xufVxuZnVuY3Rpb24gc2hhbGxvd0NvcHkoYmFzZSwgc3RyaWN0KSB7XG4gIGlmIChpc01hcChiYXNlKSkge1xuICAgIHJldHVybiBuZXcgTWFwKGJhc2UpO1xuICB9XG4gIGlmIChpc1NldChiYXNlKSkge1xuICAgIHJldHVybiBuZXcgU2V0KGJhc2UpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGJhc2UpKVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChiYXNlKTtcbiAgY29uc3QgaXNQbGFpbiA9IGlzUGxhaW5PYmplY3QoYmFzZSk7XG4gIGlmIChzdHJpY3QgPT09IHRydWUgfHwgc3RyaWN0ID09PSBcImNsYXNzX29ubHlcIiAmJiAhaXNQbGFpbikge1xuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYmFzZSk7XG4gICAgZGVsZXRlIGRlc2NyaXB0b3JzW0RSQUZUX1NUQVRFXTtcbiAgICBsZXQga2V5cyA9IFJlZmxlY3Qub3duS2V5cyhkZXNjcmlwdG9ycyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgY29uc3QgZGVzYyA9IGRlc2NyaXB0b3JzW2tleV07XG4gICAgICBpZiAoZGVzYy53cml0YWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChkZXNjLmdldCB8fCBkZXNjLnNldClcbiAgICAgICAgZGVzY3JpcHRvcnNba2V5XSA9IHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgLy8gY291bGQgbGl2ZSB3aXRoICEhZGVzYy5zZXQgYXMgd2VsbCBoZXJlLi4uXG4gICAgICAgICAgZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgICAgIHZhbHVlOiBiYXNlW2tleV1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoZ2V0UHJvdG90eXBlT2YoYmFzZSksIGRlc2NyaXB0b3JzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcm90byA9IGdldFByb3RvdHlwZU9mKGJhc2UpO1xuICAgIGlmIChwcm90byAhPT0gbnVsbCAmJiBpc1BsYWluKSB7XG4gICAgICByZXR1cm4geyAuLi5iYXNlIH07XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9iaiwgYmFzZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZyZWV6ZShvYmosIGRlZXAgPSBmYWxzZSkge1xuICBpZiAoaXNGcm96ZW4ob2JqKSB8fCBpc0RyYWZ0KG9iaikgfHwgIWlzRHJhZnRhYmxlKG9iaikpXG4gICAgcmV0dXJuIG9iajtcbiAgaWYgKGdldEFyY2h0eXBlKG9iaikgPiAxKSB7XG4gICAgb2JqLnNldCA9IG9iai5hZGQgPSBvYmouY2xlYXIgPSBvYmouZGVsZXRlID0gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zO1xuICB9XG4gIE9iamVjdC5mcmVlemUob2JqKTtcbiAgaWYgKGRlZXApXG4gICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IGZyZWV6ZSh2YWx1ZSwgdHJ1ZSkpO1xuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zKCkge1xuICBkaWUoMik7XG59XG5mdW5jdGlvbiBpc0Zyb3plbihvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5pc0Zyb3plbihvYmopO1xufVxuXG4vLyBzcmMvdXRpbHMvcGx1Z2lucy50c1xudmFyIHBsdWdpbnMgPSB7fTtcbmZ1bmN0aW9uIGdldFBsdWdpbihwbHVnaW5LZXkpIHtcbiAgY29uc3QgcGx1Z2luID0gcGx1Z2luc1twbHVnaW5LZXldO1xuICBpZiAoIXBsdWdpbikge1xuICAgIGRpZSgwLCBwbHVnaW5LZXkpO1xuICB9XG4gIHJldHVybiBwbHVnaW47XG59XG5mdW5jdGlvbiBsb2FkUGx1Z2luKHBsdWdpbktleSwgaW1wbGVtZW50YXRpb24pIHtcbiAgaWYgKCFwbHVnaW5zW3BsdWdpbktleV0pXG4gICAgcGx1Z2luc1twbHVnaW5LZXldID0gaW1wbGVtZW50YXRpb247XG59XG5cbi8vIHNyYy9jb3JlL3Njb3BlLnRzXG52YXIgY3VycmVudFNjb3BlO1xuZnVuY3Rpb24gZ2V0Q3VycmVudFNjb3BlKCkge1xuICByZXR1cm4gY3VycmVudFNjb3BlO1xufVxuZnVuY3Rpb24gY3JlYXRlU2NvcGUocGFyZW50XywgaW1tZXJfKSB7XG4gIHJldHVybiB7XG4gICAgZHJhZnRzXzogW10sXG4gICAgcGFyZW50XyxcbiAgICBpbW1lcl8sXG4gICAgLy8gV2hlbmV2ZXIgdGhlIG1vZGlmaWVkIGRyYWZ0IGNvbnRhaW5zIGEgZHJhZnQgZnJvbSBhbm90aGVyIHNjb3BlLCB3ZVxuICAgIC8vIG5lZWQgdG8gcHJldmVudCBhdXRvLWZyZWV6aW5nIHNvIHRoZSB1bm93bmVkIGRyYWZ0IGNhbiBiZSBmaW5hbGl6ZWQuXG4gICAgY2FuQXV0b0ZyZWV6ZV86IHRydWUsXG4gICAgdW5maW5hbGl6ZWREcmFmdHNfOiAwXG4gIH07XG59XG5mdW5jdGlvbiB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcikge1xuICBpZiAocGF0Y2hMaXN0ZW5lcikge1xuICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIik7XG4gICAgc2NvcGUucGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5pbnZlcnNlUGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5wYXRjaExpc3RlbmVyXyA9IHBhdGNoTGlzdGVuZXI7XG4gIH1cbn1cbmZ1bmN0aW9uIHJldm9rZVNjb3BlKHNjb3BlKSB7XG4gIGxlYXZlU2NvcGUoc2NvcGUpO1xuICBzY29wZS5kcmFmdHNfLmZvckVhY2gocmV2b2tlRHJhZnQpO1xuICBzY29wZS5kcmFmdHNfID0gbnVsbDtcbn1cbmZ1bmN0aW9uIGxlYXZlU2NvcGUoc2NvcGUpIHtcbiAgaWYgKHNjb3BlID09PSBjdXJyZW50U2NvcGUpIHtcbiAgICBjdXJyZW50U2NvcGUgPSBzY29wZS5wYXJlbnRfO1xuICB9XG59XG5mdW5jdGlvbiBlbnRlclNjb3BlKGltbWVyMikge1xuICByZXR1cm4gY3VycmVudFNjb3BlID0gY3JlYXRlU2NvcGUoY3VycmVudFNjb3BlLCBpbW1lcjIpO1xufVxuZnVuY3Rpb24gcmV2b2tlRHJhZnQoZHJhZnQpIHtcbiAgY29uc3Qgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG4gIGlmIChzdGF0ZS50eXBlXyA9PT0gMCAvKiBPYmplY3QgKi8gfHwgc3RhdGUudHlwZV8gPT09IDEgLyogQXJyYXkgKi8pXG4gICAgc3RhdGUucmV2b2tlXygpO1xuICBlbHNlXG4gICAgc3RhdGUucmV2b2tlZF8gPSB0cnVlO1xufVxuXG4vLyBzcmMvY29yZS9maW5hbGl6ZS50c1xuZnVuY3Rpb24gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKSB7XG4gIHNjb3BlLnVuZmluYWxpemVkRHJhZnRzXyA9IHNjb3BlLmRyYWZ0c18ubGVuZ3RoO1xuICBjb25zdCBiYXNlRHJhZnQgPSBzY29wZS5kcmFmdHNfWzBdO1xuICBjb25zdCBpc1JlcGxhY2VkID0gcmVzdWx0ICE9PSB2b2lkIDAgJiYgcmVzdWx0ICE9PSBiYXNlRHJhZnQ7XG4gIGlmIChpc1JlcGxhY2VkKSB7XG4gICAgaWYgKGJhc2VEcmFmdFtEUkFGVF9TVEFURV0ubW9kaWZpZWRfKSB7XG4gICAgICByZXZva2VTY29wZShzY29wZSk7XG4gICAgICBkaWUoNCk7XG4gICAgfVxuICAgIGlmIChpc0RyYWZ0YWJsZShyZXN1bHQpKSB7XG4gICAgICByZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgcmVzdWx0KTtcbiAgICAgIGlmICghc2NvcGUucGFyZW50XylcbiAgICAgICAgbWF5YmVGcmVlemUoc2NvcGUsIHJlc3VsdCk7XG4gICAgfVxuICAgIGlmIChzY29wZS5wYXRjaGVzXykge1xuICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oXG4gICAgICAgIGJhc2VEcmFmdFtEUkFGVF9TVEFURV0uYmFzZV8sXG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgc2NvcGUucGF0Y2hlc18sXG4gICAgICAgIHNjb3BlLmludmVyc2VQYXRjaGVzX1xuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIGJhc2VEcmFmdCwgW10pO1xuICB9XG4gIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgaWYgKHNjb3BlLnBhdGNoZXNfKSB7XG4gICAgc2NvcGUucGF0Y2hMaXN0ZW5lcl8oc2NvcGUucGF0Y2hlc18sIHNjb3BlLmludmVyc2VQYXRjaGVzXyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdCAhPT0gTk9USElORyA/IHJlc3VsdCA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGZpbmFsaXplKHJvb3RTY29wZSwgdmFsdWUsIHBhdGgpIHtcbiAgaWYgKGlzRnJvemVuKHZhbHVlKSlcbiAgICByZXR1cm4gdmFsdWU7XG4gIGNvbnN0IHN0YXRlID0gdmFsdWVbRFJBRlRfU1RBVEVdO1xuICBpZiAoIXN0YXRlKSB7XG4gICAgZWFjaChcbiAgICAgIHZhbHVlLFxuICAgICAgKGtleSwgY2hpbGRWYWx1ZSkgPT4gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCB2YWx1ZSwga2V5LCBjaGlsZFZhbHVlLCBwYXRoKVxuICAgICk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChzdGF0ZS5zY29wZV8gIT09IHJvb3RTY29wZSlcbiAgICByZXR1cm4gdmFsdWU7XG4gIGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG4gICAgbWF5YmVGcmVlemUocm9vdFNjb3BlLCBzdGF0ZS5iYXNlXywgdHJ1ZSk7XG4gICAgcmV0dXJuIHN0YXRlLmJhc2VfO1xuICB9XG4gIGlmICghc3RhdGUuZmluYWxpemVkXykge1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSB0cnVlO1xuICAgIHN0YXRlLnNjb3BlXy51bmZpbmFsaXplZERyYWZ0c18tLTtcbiAgICBjb25zdCByZXN1bHQgPSBzdGF0ZS5jb3B5XztcbiAgICBsZXQgcmVzdWx0RWFjaCA9IHJlc3VsdDtcbiAgICBsZXQgaXNTZXQyID0gZmFsc2U7XG4gICAgaWYgKHN0YXRlLnR5cGVfID09PSAzIC8qIFNldCAqLykge1xuICAgICAgcmVzdWx0RWFjaCA9IG5ldyBTZXQocmVzdWx0KTtcbiAgICAgIHJlc3VsdC5jbGVhcigpO1xuICAgICAgaXNTZXQyID0gdHJ1ZTtcbiAgICB9XG4gICAgZWFjaChcbiAgICAgIHJlc3VsdEVhY2gsXG4gICAgICAoa2V5LCBjaGlsZFZhbHVlKSA9PiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgc3RhdGUsIHJlc3VsdCwga2V5LCBjaGlsZFZhbHVlLCBwYXRoLCBpc1NldDIpXG4gICAgKTtcbiAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIHJlc3VsdCwgZmFsc2UpO1xuICAgIGlmIChwYXRoICYmIHJvb3RTY29wZS5wYXRjaGVzXykge1xuICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVBhdGNoZXNfKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcm9vdFNjb3BlLnBhdGNoZXNfLFxuICAgICAgICByb290U2NvcGUuaW52ZXJzZVBhdGNoZXNfXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGUuY29weV87XG59XG5mdW5jdGlvbiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgcGFyZW50U3RhdGUsIHRhcmdldE9iamVjdCwgcHJvcCwgY2hpbGRWYWx1ZSwgcm9vdFBhdGgsIHRhcmdldElzU2V0KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgY2hpbGRWYWx1ZSA9PT0gdGFyZ2V0T2JqZWN0KVxuICAgIGRpZSg1KTtcbiAgaWYgKGlzRHJhZnQoY2hpbGRWYWx1ZSkpIHtcbiAgICBjb25zdCBwYXRoID0gcm9vdFBhdGggJiYgcGFyZW50U3RhdGUgJiYgcGFyZW50U3RhdGUudHlwZV8gIT09IDMgLyogU2V0ICovICYmIC8vIFNldCBvYmplY3RzIGFyZSBhdG9taWMgc2luY2UgdGhleSBoYXZlIG5vIGtleXMuXG4gICAgIWhhcyhwYXJlbnRTdGF0ZS5hc3NpZ25lZF8sIHByb3ApID8gcm9vdFBhdGguY29uY2F0KHByb3ApIDogdm9pZCAwO1xuICAgIGNvbnN0IHJlcyA9IGZpbmFsaXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSwgcGF0aCk7XG4gICAgc2V0KHRhcmdldE9iamVjdCwgcHJvcCwgcmVzKTtcbiAgICBpZiAoaXNEcmFmdChyZXMpKSB7XG4gICAgICByb290U2NvcGUuY2FuQXV0b0ZyZWV6ZV8gPSBmYWxzZTtcbiAgICB9IGVsc2VcbiAgICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICh0YXJnZXRJc1NldCkge1xuICAgIHRhcmdldE9iamVjdC5hZGQoY2hpbGRWYWx1ZSk7XG4gIH1cbiAgaWYgKGlzRHJhZnRhYmxlKGNoaWxkVmFsdWUpICYmICFpc0Zyb3plbihjaGlsZFZhbHVlKSkge1xuICAgIGlmICghcm9vdFNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiByb290U2NvcGUudW5maW5hbGl6ZWREcmFmdHNfIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpO1xuICAgIGlmICgoIXBhcmVudFN0YXRlIHx8ICFwYXJlbnRTdGF0ZS5zY29wZV8ucGFyZW50XykgJiYgdHlwZW9mIHByb3AgIT09IFwic3ltYm9sXCIgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRhcmdldE9iamVjdCwgcHJvcCkpXG4gICAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiBtYXliZUZyZWV6ZShzY29wZSwgdmFsdWUsIGRlZXAgPSBmYWxzZSkge1xuICBpZiAoIXNjb3BlLnBhcmVudF8gJiYgc2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHNjb3BlLmNhbkF1dG9GcmVlemVfKSB7XG4gICAgZnJlZXplKHZhbHVlLCBkZWVwKTtcbiAgfVxufVxuXG4vLyBzcmMvY29yZS9wcm94eS50c1xuZnVuY3Rpb24gY3JlYXRlUHJveHlQcm94eShiYXNlLCBwYXJlbnQpIHtcbiAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYmFzZSk7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIHR5cGVfOiBpc0FycmF5ID8gMSAvKiBBcnJheSAqLyA6IDAgLyogT2JqZWN0ICovLFxuICAgIC8vIFRyYWNrIHdoaWNoIHByb2R1Y2UgY2FsbCB0aGlzIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAvLyBUcnVlIGZvciBib3RoIHNoYWxsb3cgYW5kIGRlZXAgY2hhbmdlcy5cbiAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgIC8vIFVzZWQgZHVyaW5nIGZpbmFsaXphdGlvbi5cbiAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAvLyBUcmFjayB3aGljaCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBhc3NpZ25lZCAodHJ1ZSkgb3IgZGVsZXRlZCAoZmFsc2UpLlxuICAgIGFzc2lnbmVkXzoge30sXG4gICAgLy8gVGhlIHBhcmVudCBkcmFmdCBzdGF0ZS5cbiAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgLy8gVGhlIGJhc2Ugc3RhdGUuXG4gICAgYmFzZV86IGJhc2UsXG4gICAgLy8gVGhlIGJhc2UgcHJveHkuXG4gICAgZHJhZnRfOiBudWxsLFxuICAgIC8vIHNldCBiZWxvd1xuICAgIC8vIFRoZSBiYXNlIGNvcHkgd2l0aCBhbnkgdXBkYXRlZCB2YWx1ZXMuXG4gICAgY29weV86IG51bGwsXG4gICAgLy8gQ2FsbGVkIGJ5IHRoZSBgcHJvZHVjZWAgZnVuY3Rpb24uXG4gICAgcmV2b2tlXzogbnVsbCxcbiAgICBpc01hbnVhbF86IGZhbHNlXG4gIH07XG4gIGxldCB0YXJnZXQgPSBzdGF0ZTtcbiAgbGV0IHRyYXBzID0gb2JqZWN0VHJhcHM7XG4gIGlmIChpc0FycmF5KSB7XG4gICAgdGFyZ2V0ID0gW3N0YXRlXTtcbiAgICB0cmFwcyA9IGFycmF5VHJhcHM7XG4gIH1cbiAgY29uc3QgeyByZXZva2UsIHByb3h5IH0gPSBQcm94eS5yZXZvY2FibGUodGFyZ2V0LCB0cmFwcyk7XG4gIHN0YXRlLmRyYWZ0XyA9IHByb3h5O1xuICBzdGF0ZS5yZXZva2VfID0gcmV2b2tlO1xuICByZXR1cm4gcHJveHk7XG59XG52YXIgb2JqZWN0VHJhcHMgPSB7XG4gIGdldChzdGF0ZSwgcHJvcCkge1xuICAgIGlmIChwcm9wID09PSBEUkFGVF9TVEFURSlcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICBjb25zdCBzb3VyY2UgPSBsYXRlc3Qoc3RhdGUpO1xuICAgIGlmICghaGFzKHNvdXJjZSwgcHJvcCkpIHtcbiAgICAgIHJldHVybiByZWFkUHJvcEZyb21Qcm90byhzdGF0ZSwgc291cmNlLCBwcm9wKTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBzb3VyY2VbcHJvcF07XG4gICAgaWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApKSB7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV9bcHJvcF0gPSBjcmVhdGVQcm94eSh2YWx1ZSwgc3RhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIGhhcyhzdGF0ZSwgcHJvcCkge1xuICAgIHJldHVybiBwcm9wIGluIGxhdGVzdChzdGF0ZSk7XG4gIH0sXG4gIG93bktleXMoc3RhdGUpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKGxhdGVzdChzdGF0ZSkpO1xuICB9LFxuICBzZXQoc3RhdGUsIHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgZGVzYyA9IGdldERlc2NyaXB0b3JGcm9tUHJvdG8obGF0ZXN0KHN0YXRlKSwgcHJvcCk7XG4gICAgaWYgKGRlc2M/LnNldCkge1xuICAgICAgZGVzYy5zZXQuY2FsbChzdGF0ZS5kcmFmdF8sIHZhbHVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgICAgY29uc3QgY3VycmVudDIgPSBwZWVrKGxhdGVzdChzdGF0ZSksIHByb3ApO1xuICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gY3VycmVudDI/LltEUkFGVF9TVEFURV07XG4gICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5iYXNlXyA9PT0gdmFsdWUpIHtcbiAgICAgICAgc3RhdGUuY29weV9bcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzKHZhbHVlLCBjdXJyZW50MikgJiYgKHZhbHVlICE9PSB2b2lkIDAgfHwgaGFzKHN0YXRlLmJhc2VfLCBwcm9wKSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY29weV9bcHJvcF0gPT09IHZhbHVlICYmIC8vIHNwZWNpYWwgY2FzZTogaGFuZGxlIG5ldyBwcm9wcyB3aXRoIHZhbHVlICd1bmRlZmluZWQnXG4gICAgKHZhbHVlICE9PSB2b2lkIDAgfHwgcHJvcCBpbiBzdGF0ZS5jb3B5XykgfHwgLy8gc3BlY2lhbCBjYXNlOiBOYU5cbiAgICBOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc05hTihzdGF0ZS5jb3B5X1twcm9wXSkpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBzdGF0ZS5jb3B5X1twcm9wXSA9IHZhbHVlO1xuICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5KHN0YXRlLCBwcm9wKSB7XG4gICAgaWYgKHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApICE9PSB2b2lkIDAgfHwgcHJvcCBpbiBzdGF0ZS5iYXNlXykge1xuICAgICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gZmFsc2U7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZS5hc3NpZ25lZF9bcHJvcF07XG4gICAgfVxuICAgIGlmIChzdGF0ZS5jb3B5Xykge1xuICAgICAgZGVsZXRlIHN0YXRlLmNvcHlfW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgLy8gTm90ZTogV2UgbmV2ZXIgY29lcmNlIGBkZXNjLnZhbHVlYCBpbnRvIGFuIEltbWVyIGRyYWZ0LCBiZWNhdXNlIHdlIGNhbid0IG1ha2VcbiAgLy8gdGhlIHNhbWUgZ3VhcmFudGVlIGluIEVTNSBtb2RlLlxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3RhdGUsIHByb3ApIHtcbiAgICBjb25zdCBvd25lciA9IGxhdGVzdChzdGF0ZSk7XG4gICAgY29uc3QgZGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG93bmVyLCBwcm9wKTtcbiAgICBpZiAoIWRlc2MpXG4gICAgICByZXR1cm4gZGVzYztcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHN0YXRlLnR5cGVfICE9PSAxIC8qIEFycmF5ICovIHx8IHByb3AgIT09IFwibGVuZ3RoXCIsXG4gICAgICBlbnVtZXJhYmxlOiBkZXNjLmVudW1lcmFibGUsXG4gICAgICB2YWx1ZTogb3duZXJbcHJvcF1cbiAgICB9O1xuICB9LFxuICBkZWZpbmVQcm9wZXJ0eSgpIHtcbiAgICBkaWUoMTEpO1xuICB9LFxuICBnZXRQcm90b3R5cGVPZihzdGF0ZSkge1xuICAgIHJldHVybiBnZXRQcm90b3R5cGVPZihzdGF0ZS5iYXNlXyk7XG4gIH0sXG4gIHNldFByb3RvdHlwZU9mKCkge1xuICAgIGRpZSgxMik7XG4gIH1cbn07XG52YXIgYXJyYXlUcmFwcyA9IHt9O1xuZWFjaChvYmplY3RUcmFwcywgKGtleSwgZm4pID0+IHtcbiAgYXJyYXlUcmFwc1trZXldID0gZnVuY3Rpb24oKSB7XG4gICAgYXJndW1lbnRzWzBdID0gYXJndW1lbnRzWzBdWzBdO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSk7XG5hcnJheVRyYXBzLmRlbGV0ZVByb3BlcnR5ID0gZnVuY3Rpb24oc3RhdGUsIHByb3ApIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc05hTihwYXJzZUludChwcm9wKSkpXG4gICAgZGllKDEzKTtcbiAgcmV0dXJuIGFycmF5VHJhcHMuc2V0LmNhbGwodGhpcywgc3RhdGUsIHByb3AsIHZvaWQgMCk7XG59O1xuYXJyYXlUcmFwcy5zZXQgPSBmdW5jdGlvbihzdGF0ZSwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBwcm9wICE9PSBcImxlbmd0aFwiICYmIGlzTmFOKHBhcnNlSW50KHByb3ApKSlcbiAgICBkaWUoMTQpO1xuICByZXR1cm4gb2JqZWN0VHJhcHMuc2V0LmNhbGwodGhpcywgc3RhdGVbMF0sIHByb3AsIHZhbHVlLCBzdGF0ZVswXSk7XG59O1xuZnVuY3Rpb24gcGVlayhkcmFmdCwgcHJvcCkge1xuICBjb25zdCBzdGF0ZSA9IGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgY29uc3Qgc291cmNlID0gc3RhdGUgPyBsYXRlc3Qoc3RhdGUpIDogZHJhZnQ7XG4gIHJldHVybiBzb3VyY2VbcHJvcF07XG59XG5mdW5jdGlvbiByZWFkUHJvcEZyb21Qcm90byhzdGF0ZSwgc291cmNlLCBwcm9wKSB7XG4gIGNvbnN0IGRlc2MgPSBnZXREZXNjcmlwdG9yRnJvbVByb3RvKHNvdXJjZSwgcHJvcCk7XG4gIHJldHVybiBkZXNjID8gYHZhbHVlYCBpbiBkZXNjID8gZGVzYy52YWx1ZSA6IChcbiAgICAvLyBUaGlzIGlzIGEgdmVyeSBzcGVjaWFsIGNhc2UsIGlmIHRoZSBwcm9wIGlzIGEgZ2V0dGVyIGRlZmluZWQgYnkgdGhlXG4gICAgLy8gcHJvdG90eXBlLCB3ZSBzaG91bGQgaW52b2tlIGl0IHdpdGggdGhlIGRyYWZ0IGFzIGNvbnRleHQhXG4gICAgZGVzYy5nZXQ/LmNhbGwoc3RhdGUuZHJhZnRfKVxuICApIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApIHtcbiAgaWYgKCEocHJvcCBpbiBzb3VyY2UpKVxuICAgIHJldHVybiB2b2lkIDA7XG4gIGxldCBwcm90byA9IGdldFByb3RvdHlwZU9mKHNvdXJjZSk7XG4gIHdoaWxlIChwcm90bykge1xuICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm9wKTtcbiAgICBpZiAoZGVzYylcbiAgICAgIHJldHVybiBkZXNjO1xuICAgIHByb3RvID0gZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG5mdW5jdGlvbiBtYXJrQ2hhbmdlZChzdGF0ZSkge1xuICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgIHN0YXRlLm1vZGlmaWVkXyA9IHRydWU7XG4gICAgaWYgKHN0YXRlLnBhcmVudF8pIHtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlLnBhcmVudF8pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gcHJlcGFyZUNvcHkoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgIHN0YXRlLmNvcHlfID0gc2hhbGxvd0NvcHkoXG4gICAgICBzdGF0ZS5iYXNlXyxcbiAgICAgIHN0YXRlLnNjb3BlXy5pbW1lcl8udXNlU3RyaWN0U2hhbGxvd0NvcHlfXG4gICAgKTtcbiAgfVxufVxuXG4vLyBzcmMvY29yZS9pbW1lckNsYXNzLnRzXG52YXIgSW1tZXIyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmF1dG9GcmVlemVfID0gdHJ1ZTtcbiAgICB0aGlzLnVzZVN0cmljdFNoYWxsb3dDb3B5XyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoZSBgcHJvZHVjZWAgZnVuY3Rpb24gdGFrZXMgYSB2YWx1ZSBhbmQgYSBcInJlY2lwZSBmdW5jdGlvblwiICh3aG9zZVxuICAgICAqIHJldHVybiB2YWx1ZSBvZnRlbiBkZXBlbmRzIG9uIHRoZSBiYXNlIHN0YXRlKS4gVGhlIHJlY2lwZSBmdW5jdGlvbiBpc1xuICAgICAqIGZyZWUgdG8gbXV0YXRlIGl0cyBmaXJzdCBhcmd1bWVudCBob3dldmVyIGl0IHdhbnRzLiBBbGwgbXV0YXRpb25zIGFyZVxuICAgICAqIG9ubHkgZXZlciBhcHBsaWVkIHRvIGEgX19jb3B5X18gb2YgdGhlIGJhc2Ugc3RhdGUuXG4gICAgICpcbiAgICAgKiBQYXNzIG9ubHkgYSBmdW5jdGlvbiB0byBjcmVhdGUgYSBcImN1cnJpZWQgcHJvZHVjZXJcIiB3aGljaCByZWxpZXZlcyB5b3VcbiAgICAgKiBmcm9tIHBhc3NpbmcgdGhlIHJlY2lwZSBmdW5jdGlvbiBldmVyeSB0aW1lLlxuICAgICAqXG4gICAgICogT25seSBwbGFpbiBvYmplY3RzIGFuZCBhcnJheXMgYXJlIG1hZGUgbXV0YWJsZS4gQWxsIG90aGVyIG9iamVjdHMgYXJlXG4gICAgICogY29uc2lkZXJlZCB1bmNvcHlhYmxlLlxuICAgICAqXG4gICAgICogTm90ZTogVGhpcyBmdW5jdGlvbiBpcyBfX2JvdW5kX18gdG8gaXRzIGBJbW1lcmAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gYmFzZSAtIHRoZSBpbml0aWFsIHN0YXRlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVjaXBlIC0gZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIHByb3h5IG9mIHRoZSBiYXNlIHN0YXRlIGFzIGZpcnN0IGFyZ3VtZW50IGFuZCB3aGljaCBjYW4gYmUgZnJlZWx5IG1vZGlmaWVkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcGF0Y2hMaXN0ZW5lciAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCBhbGwgdGhlIHBhdGNoZXMgcHJvZHVjZWQgaGVyZVxuICAgICAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxuICAgICAqL1xuICAgIHRoaXMucHJvZHVjZSA9IChiYXNlLCByZWNpcGUsIHBhdGNoTGlzdGVuZXIpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjb25zdCBkZWZhdWx0QmFzZSA9IHJlY2lwZTtcbiAgICAgICAgcmVjaXBlID0gYmFzZTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkUHJvZHVjZShiYXNlMiA9IGRlZmF1bHRCYXNlLCAuLi5hcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYucHJvZHVjZShiYXNlMiwgKGRyYWZ0KSA9PiByZWNpcGUuY2FsbCh0aGlzLCBkcmFmdCwgLi4uYXJncykpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZGllKDYpO1xuICAgICAgaWYgKHBhdGNoTGlzdGVuZXIgIT09IHZvaWQgMCAmJiB0eXBlb2YgcGF0Y2hMaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBkaWUoNyk7XG4gICAgICBsZXQgcmVzdWx0O1xuICAgICAgaWYgKGlzRHJhZnRhYmxlKGJhc2UpKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gZW50ZXJTY29wZSh0aGlzKTtcbiAgICAgICAgY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShiYXNlLCB2b2lkIDApO1xuICAgICAgICBsZXQgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlY2lwZShwcm94eSk7XG4gICAgICAgICAgaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoaGFzRXJyb3IpXG4gICAgICAgICAgICByZXZva2VTY29wZShzY29wZSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgbGVhdmVTY29wZShzY29wZSk7XG4gICAgICAgIH1cbiAgICAgICAgdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWJhc2UgfHwgdHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVjaXBlKGJhc2UpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApXG4gICAgICAgICAgcmVzdWx0ID0gYmFzZTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gTk9USElORylcbiAgICAgICAgICByZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIGlmICh0aGlzLmF1dG9GcmVlemVfKVxuICAgICAgICAgIGZyZWV6ZShyZXN1bHQsIHRydWUpO1xuICAgICAgICBpZiAocGF0Y2hMaXN0ZW5lcikge1xuICAgICAgICAgIGNvbnN0IHAgPSBbXTtcbiAgICAgICAgICBjb25zdCBpcCA9IFtdO1xuICAgICAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKGJhc2UsIHJlc3VsdCwgcCwgaXApO1xuICAgICAgICAgIHBhdGNoTGlzdGVuZXIocCwgaXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGVsc2VcbiAgICAgICAgZGllKDEsIGJhc2UpO1xuICAgIH07XG4gICAgdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMgPSAoYmFzZSwgcmVjaXBlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gKHN0YXRlLCAuLi5hcmdzKSA9PiB0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyhzdGF0ZSwgKGRyYWZ0KSA9PiBiYXNlKGRyYWZ0LCAuLi5hcmdzKSk7XG4gICAgICB9XG4gICAgICBsZXQgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXM7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb2R1Y2UoYmFzZSwgcmVjaXBlLCAocCwgaXApID0+IHtcbiAgICAgICAgcGF0Y2hlcyA9IHA7XG4gICAgICAgIGludmVyc2VQYXRjaGVzID0gaXA7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbcmVzdWx0LCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc107XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZz8uYXV0b0ZyZWV6ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICB0aGlzLnNldEF1dG9GcmVlemUoY29uZmlnLmF1dG9GcmVlemUpO1xuICAgIGlmICh0eXBlb2YgY29uZmlnPy51c2VTdHJpY3RTaGFsbG93Q29weSA9PT0gXCJib29sZWFuXCIpXG4gICAgICB0aGlzLnNldFVzZVN0cmljdFNoYWxsb3dDb3B5KGNvbmZpZy51c2VTdHJpY3RTaGFsbG93Q29weSk7XG4gIH1cbiAgY3JlYXRlRHJhZnQoYmFzZSkge1xuICAgIGlmICghaXNEcmFmdGFibGUoYmFzZSkpXG4gICAgICBkaWUoOCk7XG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpXG4gICAgICBiYXNlID0gY3VycmVudChiYXNlKTtcbiAgICBjb25zdCBzY29wZSA9IGVudGVyU2NvcGUodGhpcyk7XG4gICAgY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShiYXNlLCB2b2lkIDApO1xuICAgIHByb3h5W0RSQUZUX1NUQVRFXS5pc01hbnVhbF8gPSB0cnVlO1xuICAgIGxlYXZlU2NvcGUoc2NvcGUpO1xuICAgIHJldHVybiBwcm94eTtcbiAgfVxuICBmaW5pc2hEcmFmdChkcmFmdCwgcGF0Y2hMaXN0ZW5lcikge1xuICAgIGNvbnN0IHN0YXRlID0gZHJhZnQgJiYgZHJhZnRbRFJBRlRfU1RBVEVdO1xuICAgIGlmICghc3RhdGUgfHwgIXN0YXRlLmlzTWFudWFsXylcbiAgICAgIGRpZSg5KTtcbiAgICBjb25zdCB7IHNjb3BlXzogc2NvcGUgfSA9IHN0YXRlO1xuICAgIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKTtcbiAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdCh2b2lkIDAsIHNjb3BlKTtcbiAgfVxuICAvKipcbiAgICogUGFzcyB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgZnJlZXplIGFsbCBjb3BpZXMgY3JlYXRlZCBieSBJbW1lci5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYXV0by1mcmVlemluZyBpcyBlbmFibGVkLlxuICAgKi9cbiAgc2V0QXV0b0ZyZWV6ZSh2YWx1ZSkge1xuICAgIHRoaXMuYXV0b0ZyZWV6ZV8gPSB2YWx1ZTtcbiAgfVxuICAvKipcbiAgICogUGFzcyB0cnVlIHRvIGVuYWJsZSBzdHJpY3Qgc2hhbGxvdyBjb3B5LlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBpbW1lciBkb2VzIG5vdCBjb3B5IHRoZSBvYmplY3QgZGVzY3JpcHRvcnMgc3VjaCBhcyBnZXR0ZXIsIHNldHRlciBhbmQgbm9uLWVudW1yYWJsZSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkodmFsdWUpIHtcbiAgICB0aGlzLnVzZVN0cmljdFNoYWxsb3dDb3B5XyA9IHZhbHVlO1xuICB9XG4gIGFwcGx5UGF0Y2hlcyhiYXNlLCBwYXRjaGVzKSB7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gcGF0Y2hlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuICAgICAgaWYgKHBhdGNoLnBhdGgubGVuZ3RoID09PSAwICYmIHBhdGNoLm9wID09PSBcInJlcGxhY2VcIikge1xuICAgICAgICBiYXNlID0gcGF0Y2gudmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBwYXRjaGVzID0gcGF0Y2hlcy5zbGljZShpICsgMSk7XG4gICAgfVxuICAgIGNvbnN0IGFwcGx5UGF0Y2hlc0ltcGwgPSBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmFwcGx5UGF0Y2hlc187XG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpIHtcbiAgICAgIHJldHVybiBhcHBseVBhdGNoZXNJbXBsKGJhc2UsIHBhdGNoZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9kdWNlKFxuICAgICAgYmFzZSxcbiAgICAgIChkcmFmdCkgPT4gYXBwbHlQYXRjaGVzSW1wbChkcmFmdCwgcGF0Y2hlcylcbiAgICApO1xuICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlUHJveHkodmFsdWUsIHBhcmVudCkge1xuICBjb25zdCBkcmFmdCA9IGlzTWFwKHZhbHVlKSA/IGdldFBsdWdpbihcIk1hcFNldFwiKS5wcm94eU1hcF8odmFsdWUsIHBhcmVudCkgOiBpc1NldCh2YWx1ZSkgPyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlTZXRfKHZhbHVlLCBwYXJlbnQpIDogY3JlYXRlUHJveHlQcm94eSh2YWx1ZSwgcGFyZW50KTtcbiAgY29uc3Qgc2NvcGUgPSBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCk7XG4gIHNjb3BlLmRyYWZ0c18ucHVzaChkcmFmdCk7XG4gIHJldHVybiBkcmFmdDtcbn1cblxuLy8gc3JjL2NvcmUvY3VycmVudC50c1xuZnVuY3Rpb24gY3VycmVudCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnQodmFsdWUpKVxuICAgIGRpZSgxMCwgdmFsdWUpO1xuICByZXR1cm4gY3VycmVudEltcGwodmFsdWUpO1xufVxuZnVuY3Rpb24gY3VycmVudEltcGwodmFsdWUpIHtcbiAgaWYgKCFpc0RyYWZ0YWJsZSh2YWx1ZSkgfHwgaXNGcm96ZW4odmFsdWUpKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgY29uc3Qgc3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV07XG4gIGxldCBjb3B5O1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLm1vZGlmaWVkXylcbiAgICAgIHJldHVybiBzdGF0ZS5iYXNlXztcbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gdHJ1ZTtcbiAgICBjb3B5ID0gc2hhbGxvd0NvcHkodmFsdWUsIHN0YXRlLnNjb3BlXy5pbW1lcl8udXNlU3RyaWN0U2hhbGxvd0NvcHlfKTtcbiAgfSBlbHNlIHtcbiAgICBjb3B5ID0gc2hhbGxvd0NvcHkodmFsdWUsIHRydWUpO1xuICB9XG4gIGVhY2goY29weSwgKGtleSwgY2hpbGRWYWx1ZSkgPT4ge1xuICAgIHNldChjb3B5LCBrZXksIGN1cnJlbnRJbXBsKGNoaWxkVmFsdWUpKTtcbiAgfSk7XG4gIGlmIChzdGF0ZSkge1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gY29weTtcbn1cblxuLy8gc3JjL3BsdWdpbnMvcGF0Y2hlcy50c1xuZnVuY3Rpb24gZW5hYmxlUGF0Y2hlcygpIHtcbiAgY29uc3QgZXJyb3JPZmZzZXQgPSAxNjtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGVycm9ycy5wdXNoKFxuICAgICAgJ1NldHMgY2Fubm90IGhhdmUgXCJyZXBsYWNlXCIgcGF0Y2hlcy4nLFxuICAgICAgZnVuY3Rpb24ob3ApIHtcbiAgICAgICAgcmV0dXJuIFwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIiArIG9wO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIgKyBwYXRoO1xuICAgICAgfSxcbiAgICAgIFwiUGF0Y2hpbmcgcmVzZXJ2ZWQgYXR0cmlidXRlcyBsaWtlIF9fcHJvdG9fXywgcHJvdG90eXBlIGFuZCBjb25zdHJ1Y3RvciBpcyBub3QgYWxsb3dlZFwiXG4gICAgKTtcbiAgfVxuICBjb25zdCBSRVBMQUNFID0gXCJyZXBsYWNlXCI7XG4gIGNvbnN0IEFERCA9IFwiYWRkXCI7XG4gIGNvbnN0IFJFTU9WRSA9IFwicmVtb3ZlXCI7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGF0Y2hlc18oc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHN3aXRjaCAoc3RhdGUudHlwZV8pIHtcbiAgICAgIGNhc2UgMCAvKiBPYmplY3QgKi86XG4gICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkKFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGJhc2VQYXRoLFxuICAgICAgICAgIHBhdGNoZXMsXG4gICAgICAgICAgaW52ZXJzZVBhdGNoZXNcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgMSAvKiBBcnJheSAqLzpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlQXJyYXlQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpO1xuICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlU2V0UGF0Y2hlcyhcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICBwYXRjaGVzLFxuICAgICAgICAgIGludmVyc2VQYXRjaGVzXG4gICAgICAgICk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlQXJyYXlQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBsZXQgeyBiYXNlXywgYXNzaWduZWRfIH0gPSBzdGF0ZTtcbiAgICBsZXQgY29weV8gPSBzdGF0ZS5jb3B5XztcbiAgICBpZiAoY29weV8ubGVuZ3RoIDwgYmFzZV8ubGVuZ3RoKSB7XG4gICAgICA7XG4gICAgICBbYmFzZV8sIGNvcHlfXSA9IFtjb3B5XywgYmFzZV9dO1xuICAgICAgW3BhdGNoZXMsIGludmVyc2VQYXRjaGVzXSA9IFtpbnZlcnNlUGF0Y2hlcywgcGF0Y2hlc107XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZV8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhc3NpZ25lZF9baV0gJiYgY29weV9baV0gIT09IGJhc2VfW2ldKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVQTEFDRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIC8vIE5lZWQgdG8gbWF5YmUgY2xvbmUgaXQsIGFzIGl0IGNhbiBpbiBmYWN0IGJlIHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAgIC8vIGR1ZSB0byB0aGUgYmFzZS9jb3B5IGludmVyc2lvbiBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvblxuICAgICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChjb3B5X1tpXSlcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGJhc2VfW2ldKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IGJhc2VfLmxlbmd0aDsgaSA8IGNvcHlfLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogQURELFxuICAgICAgICBwYXRoLFxuICAgICAgICAvLyBOZWVkIHRvIG1heWJlIGNsb25lIGl0LCBhcyBpdCBjYW4gaW4gZmFjdCBiZSB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgLy8gZHVlIHRvIHRoZSBiYXNlL2NvcHkgaW52ZXJzaW9uIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uXG4gICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChjb3B5X1tpXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gY29weV8ubGVuZ3RoIC0gMTsgYmFzZV8ubGVuZ3RoIDw9IGk7IC0taSkge1xuICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgIHBhdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIGNvbnN0IHsgYmFzZV8sIGNvcHlfIH0gPSBzdGF0ZTtcbiAgICBlYWNoKHN0YXRlLmFzc2lnbmVkXywgKGtleSwgYXNzaWduZWRWYWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ1ZhbHVlID0gZ2V0KGJhc2VfLCBrZXkpO1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXQoY29weV8sIGtleSk7XG4gICAgICBjb25zdCBvcCA9ICFhc3NpZ25lZFZhbHVlID8gUkVNT1ZFIDogaGFzKGJhc2VfLCBrZXkpID8gUkVQTEFDRSA6IEFERDtcbiAgICAgIGlmIChvcmlnVmFsdWUgPT09IHZhbHVlICYmIG9wID09PSBSRVBMQUNFKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KGtleSk7XG4gICAgICBwYXRjaGVzLnB1c2gob3AgPT09IFJFTU9WRSA/IHsgb3AsIHBhdGggfSA6IHsgb3AsIHBhdGgsIHZhbHVlIH0pO1xuICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaChcbiAgICAgICAgb3AgPT09IEFERCA/IHsgb3A6IFJFTU9WRSwgcGF0aCB9IDogb3AgPT09IFJFTU9WRSA/IHsgb3A6IEFERCwgcGF0aCwgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9yaWdWYWx1ZSkgfSA6IHsgb3A6IFJFUExBQ0UsIHBhdGgsIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvcmlnVmFsdWUpIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVTZXRQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBsZXQgeyBiYXNlXywgY29weV8gfSA9IHN0YXRlO1xuICAgIGxldCBpID0gMDtcbiAgICBiYXNlXy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCFjb3B5Xy5oYXModmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuICAgICAgICAgIG9wOiBBREQsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgICBpID0gMDtcbiAgICBjb3B5Xy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCFiYXNlXy5oYXModmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogQURELFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuICAgICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oYmFzZVZhbHVlLCByZXBsYWNlbWVudCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICBwYXRoOiBbXSxcbiAgICAgIHZhbHVlOiByZXBsYWNlbWVudCA9PT0gTk9USElORyA/IHZvaWQgMCA6IHJlcGxhY2VtZW50XG4gICAgfSk7XG4gICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICBvcDogUkVQTEFDRSxcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgdmFsdWU6IGJhc2VWYWx1ZVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFwcGx5UGF0Y2hlc18oZHJhZnQsIHBhdGNoZXMpIHtcbiAgICBwYXRjaGVzLmZvckVhY2goKHBhdGNoKSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGgsIG9wIH0gPSBwYXRjaDtcbiAgICAgIGxldCBiYXNlID0gZHJhZnQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudFR5cGUgPSBnZXRBcmNodHlwZShiYXNlKTtcbiAgICAgICAgbGV0IHAgPSBwYXRoW2ldO1xuICAgICAgICBpZiAodHlwZW9mIHAgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHAgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBwID0gXCJcIiArIHA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChwYXJlbnRUeXBlID09PSAwIC8qIE9iamVjdCAqLyB8fCBwYXJlbnRUeXBlID09PSAxIC8qIEFycmF5ICovKSAmJiAocCA9PT0gXCJfX3Byb3RvX19cIiB8fCBwID09PSBcImNvbnN0cnVjdG9yXCIpKVxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDMpO1xuICAgICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIiAmJiBwID09PSBcInByb3RvdHlwZVwiKVxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDMpO1xuICAgICAgICBiYXNlID0gZ2V0KGJhc2UsIHApO1xuICAgICAgICBpZiAodHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMiwgcGF0aC5qb2luKFwiL1wiKSk7XG4gICAgICB9XG4gICAgICBjb25zdCB0eXBlID0gZ2V0QXJjaHR5cGUoYmFzZSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRlZXBDbG9uZVBhdGNoVmFsdWUocGF0Y2gudmFsdWUpO1xuICAgICAgY29uc3Qga2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICBjYXNlIFJFUExBQ0U6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Vba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBBREQ6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDEgLyogQXJyYXkgKi86XG4gICAgICAgICAgICAgIHJldHVybiBrZXkgPT09IFwiLVwiID8gYmFzZS5wdXNoKHZhbHVlKSA6IGJhc2Uuc3BsaWNlKGtleSwgMCwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuYWRkKHZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgUkVNT1ZFOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxIC8qIEFycmF5ICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuZGVsZXRlKHBhdGNoLnZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBkZWxldGUgYmFzZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAxLCBvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRyYWZ0O1xuICB9XG4gIGZ1bmN0aW9uIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKSB7XG4gICAgaWYgKCFpc0RyYWZ0YWJsZShvYmopKVxuICAgICAgcmV0dXJuIG9iajtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKVxuICAgICAgcmV0dXJuIG9iai5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSk7XG4gICAgaWYgKGlzTWFwKG9iaikpXG4gICAgICByZXR1cm4gbmV3IE1hcChcbiAgICAgICAgQXJyYXkuZnJvbShvYmouZW50cmllcygpKS5tYXAoKFtrLCB2XSkgPT4gW2ssIGRlZXBDbG9uZVBhdGNoVmFsdWUodildKVxuICAgICAgKTtcbiAgICBpZiAoaXNTZXQob2JqKSlcbiAgICAgIHJldHVybiBuZXcgU2V0KEFycmF5LmZyb20ob2JqKS5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSkpO1xuICAgIGNvbnN0IGNsb25lZCA9IE9iamVjdC5jcmVhdGUoZ2V0UHJvdG90eXBlT2Yob2JqKSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKVxuICAgICAgY2xvbmVkW2tleV0gPSBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9ialtrZXldKTtcbiAgICBpZiAoaGFzKG9iaiwgRFJBRlRBQkxFKSlcbiAgICAgIGNsb25lZFtEUkFGVEFCTEVdID0gb2JqW0RSQUZUQUJMRV07XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuICBmdW5jdGlvbiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvYmopIHtcbiAgICBpZiAoaXNEcmFmdChvYmopKSB7XG4gICAgICByZXR1cm4gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmopO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIG9iajtcbiAgfVxuICBsb2FkUGx1Z2luKFwiUGF0Y2hlc1wiLCB7XG4gICAgYXBwbHlQYXRjaGVzXyxcbiAgICBnZW5lcmF0ZVBhdGNoZXNfLFxuICAgIGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzX1xuICB9KTtcbn1cblxuLy8gc3JjL3BsdWdpbnMvbWFwc2V0LnRzXG5mdW5jdGlvbiBlbmFibGVNYXBTZXQoKSB7XG4gIGNsYXNzIERyYWZ0TWFwIGV4dGVuZHMgTWFwIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuICAgICAgICB0eXBlXzogMiAvKiBNYXAgKi8sXG4gICAgICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAgICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgICAgICBjb3B5Xzogdm9pZCAwLFxuICAgICAgICBhc3NpZ25lZF86IHZvaWQgMCxcbiAgICAgICAgYmFzZV86IHRhcmdldCxcbiAgICAgICAgZHJhZnRfOiB0aGlzLFxuICAgICAgICBpc01hbnVhbF86IGZhbHNlLFxuICAgICAgICByZXZva2VkXzogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZTtcbiAgICB9XG4gICAgaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuaGFzKGtleSk7XG4gICAgfVxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmICghbGF0ZXN0KHN0YXRlKS5oYXMoa2V5KSB8fCBsYXRlc3Qoc3RhdGUpLmdldChrZXkpICE9PSB2YWx1ZSkge1xuICAgICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIHRydWUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWxldGUoa2V5KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICBpZiAoc3RhdGUuYmFzZV8uaGFzKGtleSkpIHtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5kZWxldGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmNvcHlfLmRlbGV0ZShrZXkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAobGF0ZXN0KHN0YXRlKS5zaXplKSB7XG4gICAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgICBlYWNoKHN0YXRlLmJhc2VfLCAoa2V5KSA9PiB7XG4gICAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvckVhY2goY2IsIHRoaXNBcmcpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBsYXRlc3Qoc3RhdGUpLmZvckVhY2goKF92YWx1ZSwga2V5LCBfbWFwKSA9PiB7XG4gICAgICAgIGNiLmNhbGwodGhpc0FyZywgdGhpcy5nZXQoa2V5KSwga2V5LCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gbGF0ZXN0KHN0YXRlKS5nZXQoa2V5KTtcbiAgICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZS5iYXNlXy5nZXQoa2V5KSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICBjb25zdCBkcmFmdCA9IGNyZWF0ZVByb3h5KHZhbHVlLCBzdGF0ZSk7XG4gICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICBzdGF0ZS5jb3B5Xy5zZXQoa2V5LCBkcmFmdCk7XG4gICAgICByZXR1cm4gZHJhZnQ7XG4gICAgfVxuICAgIGtleXMoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5rZXlzKCk7XG4gICAgfVxuICAgIHZhbHVlcygpIHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpcy5rZXlzKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4gdGhpcy52YWx1ZXMoKSxcbiAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHIgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHIuZG9uZSlcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoci52YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBlbnRyaWVzKCkge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLmtleXMoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB0aGlzLmVudHJpZXMoKSxcbiAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHIgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHIuZG9uZSlcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoci52YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IFtyLnZhbHVlLCB2YWx1ZV1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBbKERSQUZUX1NUQVRFLCBTeW1ib2wuaXRlcmF0b3IpXSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHJveHlNYXBfKHRhcmdldCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFmdE1hcCh0YXJnZXQsIHBhcmVudCk7XG4gIH1cbiAgZnVuY3Rpb24gcHJlcGFyZU1hcENvcHkoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICBzdGF0ZS5hc3NpZ25lZF8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgc3RhdGUuY29weV8gPSBuZXcgTWFwKHN0YXRlLmJhc2VfKTtcbiAgICB9XG4gIH1cbiAgY2xhc3MgRHJhZnRTZXQgZXh0ZW5kcyBTZXQge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpc1tEUkFGVF9TVEFURV0gPSB7XG4gICAgICAgIHR5cGVfOiAzIC8qIFNldCAqLyxcbiAgICAgICAgcGFyZW50XzogcGFyZW50LFxuICAgICAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAgICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAgICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgICAgIGNvcHlfOiB2b2lkIDAsXG4gICAgICAgIGJhc2VfOiB0YXJnZXQsXG4gICAgICAgIGRyYWZ0XzogdGhpcyxcbiAgICAgICAgZHJhZnRzXzogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcbiAgICAgICAgcmV2b2tlZF86IGZhbHNlLFxuICAgICAgICBpc01hbnVhbF86IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLnNpemU7XG4gICAgfVxuICAgIGhhcyh2YWx1ZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5iYXNlXy5oYXModmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLmNvcHlfLmhhcyh2YWx1ZSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKSAmJiBzdGF0ZS5jb3B5Xy5oYXMoc3RhdGUuZHJhZnRzXy5nZXQodmFsdWUpKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuY29weV8uYWRkKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWxldGUodmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLmRlbGV0ZSh2YWx1ZSkgfHwgKHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKSA/IHN0YXRlLmNvcHlfLmRlbGV0ZShzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpIDogKFxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBmYWxzZVxuICAgICAgKSk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAobGF0ZXN0KHN0YXRlKS5zaXplKSB7XG4gICAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5Xy52YWx1ZXMoKTtcbiAgICB9XG4gICAgZW50cmllcygpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLmVudHJpZXMoKTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH1cbiAgICBbKERSQUZUX1NUQVRFLCBTeW1ib2wuaXRlcmF0b3IpXSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH1cbiAgICBmb3JFYWNoKGNiLCB0aGlzQXJnKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXMudmFsdWVzKCk7XG4gICAgICBsZXQgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgICAgICBjYi5jYWxsKHRoaXNBcmcsIHJlc3VsdC52YWx1ZSwgcmVzdWx0LnZhbHVlLCB0aGlzKTtcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwcm94eVNldF8odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWZ0U2V0KHRhcmdldCwgcGFyZW50KTtcbiAgfVxuICBmdW5jdGlvbiBwcmVwYXJlU2V0Q29weShzdGF0ZSkge1xuICAgIGlmICghc3RhdGUuY29weV8pIHtcbiAgICAgIHN0YXRlLmNvcHlfID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgIHN0YXRlLmJhc2VfLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICBjb25zdCBkcmFmdCA9IGNyZWF0ZVByb3h5KHZhbHVlLCBzdGF0ZSk7XG4gICAgICAgICAgc3RhdGUuZHJhZnRzXy5zZXQodmFsdWUsIGRyYWZ0KTtcbiAgICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQoZHJhZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLmNvcHlfLmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhc3NlcnRVbnJldm9rZWQoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUucmV2b2tlZF8pXG4gICAgICBkaWUoMywgSlNPTi5zdHJpbmdpZnkobGF0ZXN0KHN0YXRlKSkpO1xuICB9XG4gIGxvYWRQbHVnaW4oXCJNYXBTZXRcIiwgeyBwcm94eU1hcF8sIHByb3h5U2V0XyB9KTtcbn1cblxuLy8gc3JjL2ltbWVyLnRzXG52YXIgaW1tZXIgPSBuZXcgSW1tZXIyKCk7XG52YXIgcHJvZHVjZSA9IGltbWVyLnByb2R1Y2U7XG52YXIgcHJvZHVjZVdpdGhQYXRjaGVzID0gaW1tZXIucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQoXG4gIGltbWVyXG4pO1xudmFyIHNldEF1dG9GcmVlemUgPSBpbW1lci5zZXRBdXRvRnJlZXplLmJpbmQoaW1tZXIpO1xudmFyIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5ID0gaW1tZXIuc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkuYmluZChpbW1lcik7XG52YXIgYXBwbHlQYXRjaGVzID0gaW1tZXIuYXBwbHlQYXRjaGVzLmJpbmQoaW1tZXIpO1xudmFyIGNyZWF0ZURyYWZ0ID0gaW1tZXIuY3JlYXRlRHJhZnQuYmluZChpbW1lcik7XG52YXIgZmluaXNoRHJhZnQgPSBpbW1lci5maW5pc2hEcmFmdC5iaW5kKGltbWVyKTtcbmZ1bmN0aW9uIGNhc3REcmFmdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjYXN0SW1tdXRhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbi8vIEFubm90YXRlIHRoZSBDb21tb25KUyBleHBvcnQgbmFtZXMgZm9yIEVTTSBpbXBvcnQgaW4gbm9kZTpcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBJbW1lcixcbiAgYXBwbHlQYXRjaGVzLFxuICBjYXN0RHJhZnQsXG4gIGNhc3RJbW11dGFibGUsXG4gIGNyZWF0ZURyYWZ0LFxuICBjdXJyZW50LFxuICBlbmFibGVNYXBTZXQsXG4gIGVuYWJsZVBhdGNoZXMsXG4gIGZpbmlzaERyYWZ0LFxuICBmcmVlemUsXG4gIGltbWVyYWJsZSxcbiAgaXNEcmFmdCxcbiAgaXNEcmFmdGFibGUsXG4gIG5vdGhpbmcsXG4gIG9yaWdpbmFsLFxuICBwcm9kdWNlLFxuICBwcm9kdWNlV2l0aFBhdGNoZXMsXG4gIHNldEF1dG9GcmVlemUsXG4gIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLmNqcy5kZXZlbG9wbWVudC5qcy5tYXAiLCJcbid1c2Ugc3RyaWN0J1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW1tZXIuY2pzLnByb2R1Y3Rpb24uanMnKVxufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ltbWVyLmNqcy5kZXZlbG9wbWVudC5qcycpXG59IiwidmFyIGU9cmVxdWlyZShcImltbWVyXCIpLHI9cmVxdWlyZShcInJlYWN0XCIpO2V4cG9ydHMudXNlSW1tZXI9ZnVuY3Rpb24odSl7dmFyIG49ci51c2VTdGF0ZShmdW5jdGlvbigpe3JldHVybiBlLmZyZWV6ZShcImZ1bmN0aW9uXCI9PXR5cGVvZiB1P3UoKTp1LCEwKX0pLHQ9blsxXTtyZXR1cm5bblswXSxyLnVzZUNhbGxiYWNrKGZ1bmN0aW9uKHIpe3QoXCJmdW5jdGlvblwiPT10eXBlb2Ygcj9lLnByb2R1Y2Uocik6ZS5mcmVlemUocikpfSxbXSldfSxleHBvcnRzLnVzZUltbWVyUmVkdWNlcj1mdW5jdGlvbih1LG4sdCl7dmFyIG89ci51c2VNZW1vKGZ1bmN0aW9uKCl7cmV0dXJuIGUucHJvZHVjZSh1KX0sW3VdKTtyZXR1cm4gci51c2VSZWR1Y2VyKG8sbix0KX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW1tZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudmVyc2lvbiA9IGV4cG9ydHMudmFsaWRhdGUgPSBleHBvcnRzLnY3ID0gZXhwb3J0cy52NlRvVjEgPSBleHBvcnRzLnY2ID0gZXhwb3J0cy52NSA9IGV4cG9ydHMudjQgPSBleHBvcnRzLnYzID0gZXhwb3J0cy52MVRvVjYgPSBleHBvcnRzLnYxID0gZXhwb3J0cy5zdHJpbmdpZnkgPSBleHBvcnRzLnBhcnNlID0gZXhwb3J0cy5OSUwgPSBleHBvcnRzLk1BWCA9IHZvaWQgMDtcbnZhciBtYXhfanNfMSA9IHJlcXVpcmUoXCIuL21heC5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1BWFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF4X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBuaWxfanNfMSA9IHJlcXVpcmUoXCIuL25pbC5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5JTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmlsX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGFyc2VfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3RyaW5naWZ5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdHJpbmdpZnlfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHYxX2pzXzEgPSByZXF1aXJlKFwiLi92MS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjFUb1Y2X2pzXzEgPSByZXF1aXJlKFwiLi92MVRvVjYuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVRvVjZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYxVG9WNl9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjNfanNfMSA9IHJlcXVpcmUoXCIuL3YzLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2NF9qc18xID0gcmVxdWlyZShcIi4vdjQuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjRfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY1X2pzXzEgPSByZXF1aXJlKFwiLi92NS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY1XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2NV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjZfanNfMSA9IHJlcXVpcmUoXCIuL3Y2LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY2X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2NlRvVjFfanNfMSA9IHJlcXVpcmUoXCIuL3Y2VG9WMS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2VG9WMVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjZUb1YxX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2N19qc18xID0gcmVxdWlyZShcIi4vdjcuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2N1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjdfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZhbGlkYXRlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2YWxpZGF0ZV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdmVyc2lvbl9qc18xID0gcmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZlcnNpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZlcnNpb25fanNfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSAnZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gICAgY29uc3Qgd29yZHMgPSB1aW50OFRvVWludDMyKGJ5dGVzKTtcbiAgICBjb25zdCBtZDVCeXRlcyA9IHdvcmRzVG9NZDUod29yZHMsIGJ5dGVzLmxlbmd0aCAqIDgpO1xuICAgIHJldHVybiB1aW50MzJUb1VpbnQ4KG1kNUJ5dGVzKTtcbn1cbmZ1bmN0aW9uIHVpbnQzMlRvVWludDgoaW5wdXQpIHtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGlucHV0Lmxlbmd0aCAqIDQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoICogNDsgaSsrKSB7XG4gICAgICAgIGJ5dGVzW2ldID0gKGlucHV0W2kgPj4gMl0gPj4+ICgoaSAlIDQpICogOCkpICYgMHhmZjtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufVxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICAgIHJldHVybiAoKChpbnB1dExlbmd0aDggKyA2NCkgPj4+IDkpIDw8IDQpICsgMTQgKyAxO1xufVxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgICBjb25zdCB4cGFkID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW4pKS5maWxsKDApO1xuICAgIHhwYWQuc2V0KHgpO1xuICAgIHhwYWRbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gICAgeHBhZFt4cGFkLmxlbmd0aCAtIDFdID0gbGVuO1xuICAgIHggPSB4cGFkO1xuICAgIGxldCBhID0gMTczMjU4NDE5MztcbiAgICBsZXQgYiA9IC0yNzE3MzM4Nzk7XG4gICAgbGV0IGMgPSAtMTczMjU4NDE5NDtcbiAgICBsZXQgZCA9IDI3MTczMzg3ODtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgICAgIGNvbnN0IG9sZGEgPSBhO1xuICAgICAgICBjb25zdCBvbGRiID0gYjtcbiAgICAgICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgICAgIGNvbnN0IG9sZGQgPSBkO1xuICAgICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgICAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICAgICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICAgIH1cbiAgICByZXR1cm4gVWludDMyQXJyYXkub2YoYSwgYiwgYywgZCk7XG59XG5mdW5jdGlvbiB1aW50OFRvVWludDMyKGlucHV0KSB7XG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KCk7XG4gICAgfVxuICAgIGNvbnN0IG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgoaW5wdXQubGVuZ3RoICogOCkpLmZpbGwoMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBvdXRwdXRbaSA+PiAyXSB8PSAoaW5wdXRbaV0gJiAweGZmKSA8PCAoKGkgJSA0KSAqIDgpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gICAgY29uc3QgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICAgIGNvbnN0IG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAgIHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweGZmZmYpO1xufVxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICAgIHJldHVybiAobnVtIDw8IGNudCkgfCAobnVtID4+PiAoMzIgLSBjbnQpKTtcbn1cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbigoYiAmIGMpIHwgKH5iICYgZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oKGIgJiBkKSB8IChjICYgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWQ1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0cy5kZWZhdWx0ID0geyByYW5kb21VVUlEIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gICAgaWYgKCEoMCwgdmFsaWRhdGVfanNfMS5kZWZhdWx0KSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICAgIH1cbiAgICBsZXQgdjtcbiAgICByZXR1cm4gVWludDhBcnJheS5vZigodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0LCAodiA+Pj4gMTYpICYgMHhmZiwgKHYgPj4+IDgpICYgMHhmZiwgdiAmIDB4ZmYsICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDgsIHYgJiAweGZmLCAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gOCwgdiAmIDB4ZmYsICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4LCB2ICYgMHhmZiwgKCh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCkgJiAweGZmLCAodiAvIDB4MTAwMDAwMDAwKSAmIDB4ZmYsICh2ID4+PiAyNCkgJiAweGZmLCAodiA+Pj4gMTYpICYgMHhmZiwgKHYgPj4+IDgpICYgMHhmZiwgdiAmIDB4ZmYpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcGFyc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBybmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICAgIHN3aXRjaCAocykge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gKHggJiB5KSBeICh+eCAmIHopO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4geCBeIHkgXiB6O1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gKHggJiB5KSBeICh4ICYgeikgXiAoeSAmIHopO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4geCBeIHkgXiB6O1xuICAgIH1cbn1cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICAgIHJldHVybiAoeCA8PCBuKSB8ICh4ID4+PiAoMzIgLSBuKSk7XG59XG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gICAgY29uc3QgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuICAgIGNvbnN0IG5ld0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMubGVuZ3RoICsgMSk7XG4gICAgbmV3Qnl0ZXMuc2V0KGJ5dGVzKTtcbiAgICBuZXdCeXRlc1tieXRlcy5sZW5ndGhdID0gMHg4MDtcbiAgICBieXRlcyA9IG5ld0J5dGVzO1xuICAgIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgICBjb25zdCBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gICAgY29uc3QgTSA9IG5ldyBBcnJheShOKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgICAgICBjb25zdCBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgICAgICAgIGFycltqXSA9XG4gICAgICAgICAgICAgICAgKGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCkgfFxuICAgICAgICAgICAgICAgICAgICAoYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNikgfFxuICAgICAgICAgICAgICAgICAgICAoYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4KSB8XG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgICAgIH1cbiAgICAgICAgTVtpXSA9IGFycjtcbiAgICB9XG4gICAgTVtOIC0gMV1bMTRdID0gKChieXRlcy5sZW5ndGggLSAxKSAqIDgpIC8gTWF0aC5wb3coMiwgMzIpO1xuICAgIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgICBNW04gLSAxXVsxNV0gPSAoKGJ5dGVzLmxlbmd0aCAtIDEpICogOCkgJiAweGZmZmZmZmZmO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgICAgIGNvbnN0IFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgICAgICAgIFdbdF0gPSBNW2ldW3RdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHQgPSAxNjsgdCA8IDgwOyArK3QpIHtcbiAgICAgICAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhID0gSFswXTtcbiAgICAgICAgbGV0IGIgPSBIWzFdO1xuICAgICAgICBsZXQgYyA9IEhbMl07XG4gICAgICAgIGxldCBkID0gSFszXTtcbiAgICAgICAgbGV0IGUgPSBIWzRdO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDgwOyArK3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKHQgLyAyMCk7XG4gICAgICAgICAgICBjb25zdCBUID0gKFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW3RdKSA+Pj4gMDtcbiAgICAgICAgICAgIGUgPSBkO1xuICAgICAgICAgICAgZCA9IGM7XG4gICAgICAgICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICAgICAgICBiID0gYTtcbiAgICAgICAgICAgIGEgPSBUO1xuICAgICAgICB9XG4gICAgICAgIEhbMF0gPSAoSFswXSArIGEpID4+PiAwO1xuICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSA+Pj4gMDtcbiAgICAgICAgSFsyXSA9IChIWzJdICsgYykgPj4+IDA7XG4gICAgICAgIEhbM10gPSAoSFszXSArIGQpID4+PiAwO1xuICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSA+Pj4gMDtcbiAgICB9XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoSFswXSA+PiAyNCwgSFswXSA+PiAxNiwgSFswXSA+PiA4LCBIWzBdLCBIWzFdID4+IDI0LCBIWzFdID4+IDE2LCBIWzFdID4+IDgsIEhbMV0sIEhbMl0gPj4gMjQsIEhbMl0gPj4gMTYsIEhbMl0gPj4gOCwgSFsyXSwgSFszXSA+PiAyNCwgSFszXSA+PiAxNiwgSFszXSA+PiA4LCBIWzNdLCBIWzRdID4+IDI0LCBIWzRdID4+IDE2LCBIWzRdID4+IDgsIEhbNF0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gc2hhMTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB2b2lkIDA7XG5jb25zdCB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoISgwLCB2YWxpZGF0ZV9qc18xLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5naWZ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZVYxU3RhdGUgPSB2b2lkIDA7XG5jb25zdCBybmdfanNfMSA9IHJlcXVpcmUoXCIuL3JuZy5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgX3N0YXRlID0ge307XG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGxldCBieXRlcztcbiAgICBjb25zdCBpc1Y2ID0gb3B0aW9ucz8uX3Y2ID8/IGZhbHNlO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zS2V5cy5sZW5ndGggPT09IDEgJiYgb3B0aW9uc0tleXNbMF0gPT09ICdfdjYnKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGJ5dGVzID0gdjFCeXRlcyhvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCksIG9wdGlvbnMubXNlY3MsIG9wdGlvbnMubnNlY3MsIG9wdGlvbnMuY2xvY2tzZXEsIG9wdGlvbnMubm9kZSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kcyA9ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpO1xuICAgICAgICB1cGRhdGVWMVN0YXRlKF9zdGF0ZSwgbm93LCBybmRzKTtcbiAgICAgICAgYnl0ZXMgPSB2MUJ5dGVzKHJuZHMsIF9zdGF0ZS5tc2VjcywgX3N0YXRlLm5zZWNzLCBpc1Y2ID8gdW5kZWZpbmVkIDogX3N0YXRlLmNsb2Nrc2VxLCBpc1Y2ID8gdW5kZWZpbmVkIDogX3N0YXRlLm5vZGUsIGJ1Ziwgb2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZiA/PyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5mdW5jdGlvbiB1cGRhdGVWMVN0YXRlKHN0YXRlLCBub3csIHJuZHMpIHtcbiAgICBzdGF0ZS5tc2VjcyA/Pz0gLUluZmluaXR5O1xuICAgIHN0YXRlLm5zZWNzID8/PSAwO1xuICAgIGlmIChub3cgPT09IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLm5zZWNzKys7XG4gICAgICAgIGlmIChzdGF0ZS5uc2VjcyA+PSAxMDAwMCkge1xuICAgICAgICAgICAgc3RhdGUubm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN0YXRlLm5zZWNzID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChub3cgPiBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5uc2VjcyA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vdyA8IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLm5vZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICghc3RhdGUubm9kZSkge1xuICAgICAgICBzdGF0ZS5ub2RlID0gcm5kcy5zbGljZSgxMCwgMTYpO1xuICAgICAgICBzdGF0ZS5ub2RlWzBdIHw9IDB4MDE7XG4gICAgICAgIHN0YXRlLmNsb2Nrc2VxID0gKChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XSkgJiAweDNmZmY7XG4gICAgfVxuICAgIHN0YXRlLm1zZWNzID0gbm93O1xuICAgIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydHMudXBkYXRlVjFTdGF0ZSA9IHVwZGF0ZVYxU3RhdGU7XG5mdW5jdGlvbiB2MUJ5dGVzKHJuZHMsIG1zZWNzLCBuc2VjcywgY2xvY2tzZXEsIG5vZGUsIGJ1Ziwgb2Zmc2V0ID0gMCkge1xuICAgIGlmIChybmRzLmxlbmd0aCA8IDE2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZG9tIGJ5dGVzIGxlbmd0aCBtdXN0IGJlID49IDE2Jyk7XG4gICAgfVxuICAgIGlmICghYnVmKSB7XG4gICAgICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDE2ID4gYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFVVSUQgYnl0ZSByYW5nZSAke29mZnNldH06JHtvZmZzZXQgKyAxNX0gaXMgb3V0IG9mIGJ1ZmZlciBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtc2VjcyA/Pz0gRGF0ZS5ub3coKTtcbiAgICBuc2VjcyA/Pz0gMDtcbiAgICBjbG9ja3NlcSA/Pz0gKChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XSkgJiAweDNmZmY7XG4gICAgbm9kZSA/Pz0gcm5kcy5zbGljZSgxMCwgMTYpO1xuICAgIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuICAgIGNvbnN0IHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodGwgPj4+IDI0KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bCA+Pj4gMTYpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRsID4+PiA4KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IHRsICYgMHhmZjtcbiAgICBjb25zdCB0bWggPSAoKG1zZWNzIC8gMHgxMDAwMDAwMDApICogMTAwMDApICYgMHhmZmZmZmZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodG1oID4+PiA4KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IHRtaCAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICgodG1oID4+PiAyNCkgJiAweGYpIHwgMHgxMDtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRtaCA+Pj4gMTYpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKGNsb2Nrc2VxID4+PiA4KSB8IDB4ODA7XG4gICAgYnVmW29mZnNldCsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcbiAgICBmb3IgKGxldCBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgICAgICBidWZbb2Zmc2V0KytdID0gbm9kZVtuXTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHYxO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHYxVG9WNih1dWlkKSB7XG4gICAgY29uc3QgdjFCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgICBjb25zdCB2NkJ5dGVzID0gX3YxVG9WNih2MUJ5dGVzKTtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkodjZCeXRlcykgOiB2NkJ5dGVzO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjFUb1Y2O1xuZnVuY3Rpb24gX3YxVG9WNih2MUJ5dGVzKSB7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKCh2MUJ5dGVzWzZdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbN10gPj4gNCkgJiAweDBmKSwgKCh2MUJ5dGVzWzddICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbNF0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzRdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbNV0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzVdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMF0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzBdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMV0gJiAweGYwKSA+PiA0KSwgKCh2MUJ5dGVzWzFdICYgMHgwZikgPDwgNCkgfCAoKHYxQnl0ZXNbMl0gJiAweGYwKSA+PiA0KSwgMHg2MCB8ICh2MUJ5dGVzWzJdICYgMHgwZiksIHYxQnl0ZXNbM10sIHYxQnl0ZXNbOF0sIHYxQnl0ZXNbOV0sIHYxQnl0ZXNbMTBdLCB2MUJ5dGVzWzExXSwgdjFCeXRlc1sxMl0sIHYxQnl0ZXNbMTNdLCB2MUJ5dGVzWzE0XSwgdjFCeXRlc1sxNV0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuY29uc3QgbWQ1X2pzXzEgPSByZXF1aXJlKFwiLi9tZDUuanNcIik7XG5jb25zdCB2MzVfanNfMSA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbnZhciB2MzVfanNfMiA9IHJlcXVpcmUoXCIuL3YzNS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkROU1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuRE5TOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVVJMXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5VUkw7IH0gfSk7XG5mdW5jdGlvbiB2Myh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHJldHVybiAoMCwgdjM1X2pzXzEuZGVmYXVsdCkoMHgzMCwgbWQ1X2pzXzEuZGVmYXVsdCwgdmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpO1xufVxudjMuRE5TID0gdjM1X2pzXzEuRE5TO1xudjMuVVJMID0gdjM1X2pzXzEuVVJMO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSBleHBvcnRzLnN0cmluZ1RvQnl0ZXMgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gICAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc3RyLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgYnl0ZXNbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufVxuZXhwb3J0cy5zdHJpbmdUb0J5dGVzID0gc3RyaW5nVG9CeXRlcztcbmV4cG9ydHMuRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLlVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZnVuY3Rpb24gdjM1KHZlcnNpb24sIGhhc2gsIHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgY29uc3QgdmFsdWVCeXRlcyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzdHJpbmdUb0J5dGVzKHZhbHVlKSA6IHZhbHVlO1xuICAgIGNvbnN0IG5hbWVzcGFjZUJ5dGVzID0gdHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycgPyAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KShuYW1lc3BhY2UpIDogbmFtZXNwYWNlO1xuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lc3BhY2UgPSAoMCwgcGFyc2VfanNfMS5kZWZhdWx0KShuYW1lc3BhY2UpO1xuICAgIH1cbiAgICBpZiAobmFtZXNwYWNlPy5sZW5ndGggIT09IDE2KSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH1cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlQnl0ZXMubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQobmFtZXNwYWNlQnl0ZXMpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZUJ5dGVzLCBuYW1lc3BhY2VCeXRlcy5sZW5ndGgpO1xuICAgIGJ5dGVzID0gaGFzaChieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSAoYnl0ZXNbNl0gJiAweDBmKSB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSAoYnl0ZXNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBuYXRpdmVfanNfMSA9IHJlcXVpcmUoXCIuL25hdGl2ZS5qc1wiKTtcbmNvbnN0IHJuZ19qc18xID0gcmVxdWlyZShcIi4vcm5nLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGlmIChuYXRpdmVfanNfMS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlX2pzXzEuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCk7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShybmRzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuY29uc3Qgc2hhMV9qc18xID0gcmVxdWlyZShcIi4vc2hhMS5qc1wiKTtcbmNvbnN0IHYzNV9qc18xID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xudmFyIHYzNV9qc18yID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRE5TXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5ETlM7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVUkxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLlVSTDsgfSB9KTtcbmZ1bmN0aW9uIHY1KHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgcmV0dXJuICgwLCB2MzVfanNfMS5kZWZhdWx0KSgweDUwLCBzaGExX2pzXzEuZGVmYXVsdCwgdmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpO1xufVxudjUuRE5TID0gdjM1X2pzXzEuRE5TO1xudjUuVVJMID0gdjM1X2pzXzEuVVJMO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgdjFfanNfMSA9IHJlcXVpcmUoXCIuL3YxLmpzXCIpO1xuY29uc3QgdjFUb1Y2X2pzXzEgPSByZXF1aXJlKFwiLi92MVRvVjYuanNcIik7XG5mdW5jdGlvbiB2NihvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIG9wdGlvbnMgPz89IHt9O1xuICAgIG9mZnNldCA/Pz0gMDtcbiAgICBsZXQgYnl0ZXMgPSAoMCwgdjFfanNfMS5kZWZhdWx0KSh7IC4uLm9wdGlvbnMsIF92NjogdHJ1ZSB9LCBuZXcgVWludDhBcnJheSgxNikpO1xuICAgIGJ5dGVzID0gKDAsIHYxVG9WNl9qc18xLmRlZmF1bHQpKGJ5dGVzKTtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY2O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXJzZV9qc18xID0gcmVxdWlyZShcIi4vcGFyc2UuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHY2VG9WMSh1dWlkKSB7XG4gICAgY29uc3QgdjZCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgICBjb25zdCB2MUJ5dGVzID0gX3Y2VG9WMSh2NkJ5dGVzKTtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkodjFCeXRlcykgOiB2MUJ5dGVzO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjZUb1YxO1xuZnVuY3Rpb24gX3Y2VG9WMSh2NkJ5dGVzKSB7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKCh2NkJ5dGVzWzNdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbNF0gPj4gNCkgJiAweDBmKSwgKCh2NkJ5dGVzWzRdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbNV0gJiAweGYwKSA+PiA0KSwgKCh2NkJ5dGVzWzVdICYgMHgwZikgPDwgNCkgfCAodjZCeXRlc1s2XSAmIDB4MGYpLCB2NkJ5dGVzWzddLCAoKHY2Qnl0ZXNbMV0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1syXSAmIDB4ZjApID4+IDQpLCAoKHY2Qnl0ZXNbMl0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1szXSAmIDB4ZjApID4+IDQpLCAweDEwIHwgKCh2NkJ5dGVzWzBdICYgMHhmMCkgPj4gNCksICgodjZCeXRlc1swXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzFdICYgMHhmMCkgPj4gNCksIHY2Qnl0ZXNbOF0sIHY2Qnl0ZXNbOV0sIHY2Qnl0ZXNbMTBdLCB2NkJ5dGVzWzExXSwgdjZCeXRlc1sxMl0sIHY2Qnl0ZXNbMTNdLCB2NkJ5dGVzWzE0XSwgdjZCeXRlc1sxNV0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZVY3U3RhdGUgPSB2b2lkIDA7XG5jb25zdCBybmdfanNfMSA9IHJlcXVpcmUoXCIuL3JuZy5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuY29uc3QgX3N0YXRlID0ge307XG5mdW5jdGlvbiB2NyhvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGxldCBieXRlcztcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBieXRlcyA9IHY3Qnl0ZXMob3B0aW9ucy5yYW5kb20gPz8gb3B0aW9ucy5ybmc/LigpID8/ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpLCBvcHRpb25zLm1zZWNzLCBvcHRpb25zLnNlcSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kcyA9ICgwLCBybmdfanNfMS5kZWZhdWx0KSgpO1xuICAgICAgICB1cGRhdGVWN1N0YXRlKF9zdGF0ZSwgbm93LCBybmRzKTtcbiAgICAgICAgYnl0ZXMgPSB2N0J5dGVzKHJuZHMsIF9zdGF0ZS5tc2VjcywgX3N0YXRlLnNlcSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmID8/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVY3U3RhdGUoc3RhdGUsIG5vdywgcm5kcykge1xuICAgIHN0YXRlLm1zZWNzID8/PSAtSW5maW5pdHk7XG4gICAgc3RhdGUuc2VxID8/PSAwO1xuICAgIGlmIChub3cgPiBzdGF0ZS5tc2Vjcykge1xuICAgICAgICBzdGF0ZS5zZXEgPSAocm5kc1s2XSA8PCAyMykgfCAocm5kc1s3XSA8PCAxNikgfCAocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV07XG4gICAgICAgIHN0YXRlLm1zZWNzID0gbm93O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUuc2VxID0gKHN0YXRlLnNlcSArIDEpIHwgMDtcbiAgICAgICAgaWYgKHN0YXRlLnNlcSA9PT0gMCkge1xuICAgICAgICAgICAgc3RhdGUubXNlY3MrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5leHBvcnRzLnVwZGF0ZVY3U3RhdGUgPSB1cGRhdGVWN1N0YXRlO1xuZnVuY3Rpb24gdjdCeXRlcyhybmRzLCBtc2Vjcywgc2VxLCBidWYsIG9mZnNldCA9IDApIHtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBpZiAoIWJ1Zikge1xuICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbXNlY3MgPz89IERhdGUubm93KCk7XG4gICAgc2VxID8/PSAoKHJuZHNbNl0gKiAweDdmKSA8PCAyNCkgfCAocm5kc1s3XSA8PCAxNikgfCAocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV07XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gbXNlY3MgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAweDcwIHwgKChzZXEgPj4+IDI4KSAmIDB4MGYpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoc2VxID4+PiAyMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAweDgwIHwgKChzZXEgPj4+IDE0KSAmIDB4M2YpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoc2VxID4+PiA2KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICgoc2VxIDw8IDIpICYgMHhmZikgfCAocm5kc1sxMF0gJiAweDAzKTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxMV07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTJdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzEzXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxNF07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTVdO1xuICAgIHJldHVybiBidWY7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVnZXhfanNfMSA9IHJlcXVpcmUoXCIuL3JlZ2V4LmpzXCIpO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgcmVnZXhfanNfMS5kZWZhdWx0LnRlc3QodXVpZCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuZnVuY3Rpb24gdmVyc2lvbih1dWlkKSB7XG4gICAgaWYgKCEoMCwgdmFsaWRhdGVfanNfMS5kZWZhdWx0KSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTUpLCAxNik7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2ZXJzaW9uO1xuIiwiaW1wb3J0IHsgdXNlSW1tZXJSZWR1Y2VyIH0gZnJvbSAndXNlLWltbWVyJztcbmltcG9ydCB7IHBhcmFtZXRlckluaXRpYWxTdGF0ZSwgdmFsdmVTdGF0dXMgfSBmcm9tICcuL2luaXRpYWxTdGF0ZSc7XG5pbXBvcnQgdHlwZSB7IFBhcmFtZXRlckFjdGlvbiwgUGFyYW1JdGVtLCBVc2VQYXJhbWV0ZXJSZWR1Y2VyLCBVc2VWYWx2ZVJlZHVjZXIsIFZhbHZlQWN0aW9uLCBWYWx2ZVN0YXRlfSBmcm9tICcuL3R5cGVzJztcblxuZnVuY3Rpb24gdmFsdmVSZWR1Y2VyKGRyYWZ0OiBWYWx2ZVN0YXRlICwgYWN0aW9uOiBWYWx2ZUFjdGlvbik6IFZhbHZlU3RhdGV7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuXHRcdGNhc2UgJ1VQREFURV9BQ1RfQ09ORklHJzpcblx0XHRcdGRyYWZ0LmFjdGl2YXRlZENvbmZpZyA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRcdGNhc2UgJ1VQREFURV9ERUFDVF9DT05GSUcnOlxuXHRcdFx0XHRkcmFmdC5kZWFjdGl2YXRlZENvbmZpZyA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdFx0XHRjYXNlICdVUERBVEVfQUNUX0ZCJzpcblx0XHRcdFx0XHRkcmFmdC5hY3RGQiA9ICFkcmFmdC5hY3RGQjtcblx0XHRcdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0XHRcdGNhc2UgJ1VQREFURV9ERV9BQ1RfRkInOlxuXHRcdFx0XHRcdGRyYWZ0LmRlQWN0RkIgPSAhZHJhZnQuZGVBY3RGQjtcblx0XHRcdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0XHRcdGNhc2UgJ1VQREFURV9VU0wnOlxuXHRcdFx0XHRcdGRyYWZ0LnVzbCA9ICFkcmFmdC51c2w7XG5cdFx0XHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdFx0XHRjYXNlICdVUERBVEVfTFNMJzpcblx0XHRcdFx0XHRkcmFmdC5sc2wgPSAhZHJhZnQubHNsO1xuXHRcdFx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRcdFx0Y2FzZSAnVVBEQVRFX01BTlVBTCc6XG5cdFx0XHRcdFx0ZHJhZnQubWFudWFsID0gIWRyYWZ0Lm1hbnVhbDtcblx0XHRcdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0XHRcdGNhc2UgJ1VQREFURV9BTEFSTSc6XG5cdFx0XHRcdFx0ZHJhZnQuYWxhcm0gPSAhZHJhZnQuYWxhcm07XG5cdFx0XHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdFx0XHRjYXNlICdVUERBVEVfTUFTS0VEJzpcblx0XHRcdFx0XHRkcmFmdC5tYXNrZWQgPSAhZHJhZnQubWFza2VkO1xuXHRcdFx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRcdFx0Y2FzZSAnVVBEQVRFX0NIQU5HSU5HJzpcblx0XHRcdFx0XHRkcmFmdC5jaGFuZ2luZyA9ICFkcmFmdC5jaGFuZ2luZztcblx0XHRcdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0XHRcdGNhc2UgJ1VQREFURV9MT0NBVEUnOlxuXHRcdFx0XHRcdGRyYWZ0LmxvY2F0ZSA9ICFkcmFmdC5sb2NhdGU7XG5cdFx0XHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdGRlZmF1bHQ6IC8vICNUT0RPIEFkZCBtb3JlIHJlZHVjZXIgY2FzZSBzdGF0ZW1lbnRzXG5cdFx0XHRyZXR1cm4gZHJhZnRcblx0fVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZhbHZlUmVkdWNlcigpOiBVc2VWYWx2ZVJlZHVjZXIge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUltbWVyUmVkdWNlcih2YWx2ZVJlZHVjZXIsIHZhbHZlU3RhdHVzKTtcblxuXHRmdW5jdGlvbiB1cGRhdGVBY3RDb25maWcodmFsdWU6IG51bWJlcikge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9BQ1RfQ09ORklHJywgdmFsdWUgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlRGVBY3RDb25maWcodmFsdWU6IG51bWJlcikge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9ERUFDVF9DT05GSUcnLCB2YWx1ZSB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVVc2woKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX1VTTCcgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTHNsKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9MU0wnIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUFsYXJtKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9BTEFSTScgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQWN0RkIoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0FDVF9GQicgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlRGVBY3RGQigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfREVfQUNUX0ZCJyB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVNYW51YWwoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX01BTlVBTCcgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTWFza2VkKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9NQVNLRUQnIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUNoYW5naW5nKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9DSEFOR0lORycgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTG9jYXRlKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9MT0NBVEUnIH0pO1xuXHR9XG5cblx0Y29uc3QgdXNlRWRpdFZhbHZlUmVkdWNlciA9IHtcblx0XHRzdGF0ZSxcblx0XHRyZWR1Y2VyOiB7XG5cdFx0XHR1cGRhdGVBY3RDb25maWcsXG5cdFx0XHR1cGRhdGVEZUFjdENvbmZpZyxcblx0XHRcdHVwZGF0ZUFsYXJtLFxuXHRcdFx0dXBkYXRlQWN0RkIsXG5cdFx0XHR1cGRhdGVEZUFjdEZCLFxuXHRcdFx0dXBkYXRlVXNsLFxuXHRcdFx0dXBkYXRlTHNsLFxuXHRcdFx0dXBkYXRlTWFudWFsLFxuXHRcdFx0dXBkYXRlTWFza2VkLFxuXHRcdFx0dXBkYXRlQ2hhbmdpbmcsXG5cdFx0XHR1cGRhdGVMb2NhdGUsXG5cdH1cbn1cblxuXHRyZXR1cm4gdXNlRWRpdFZhbHZlUmVkdWNlclxuXG59XG4vKipcbiAqICBVcGRhdGUgYSBwYXJhbWV0ZXIgaXRlbSBpbiBhIGxpc3Qgb2YgcGFyYW1ldGVyIGl0ZW1zXG4qL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBQYXJhbWV0ZXJSZWR1Y2VyKGRyYWZ0OiBQYXJhbUl0ZW1bXSwgYWN0aW9uOiBQYXJhbWV0ZXJBY3Rpb24pOiBQYXJhbUl0ZW1bXXtcblx0c3dpdGNoIChhY3Rpb24udHlwZSl7XG5cdFx0Y2FzZSAnVVBEQVRFX1ZBTFVFJzpcblx0XHRcdGRyYWZ0W2FjdGlvbi5pbmRleF0uaW5wdXQudmFsdWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0ZGVmYXVsdDogLy8gI1RPRE8gQWRkIG1vcmUgcmVkdWNlciBjYXNlIHN0YXRlbWVudHNcblx0XHRcdHJldHVybiBkcmFmdFxuXHR9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1JdGVtc1JlZHVjZXIoKTogVXNlUGFyYW1ldGVyUmVkdWNlciB7XG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlSW1tZXJSZWR1Y2VyKFBhcmFtZXRlclJlZHVjZXIsIHBhcmFtZXRlckluaXRpYWxTdGF0ZSApO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfVkFMVUUnLCBpbmRleDogaW5kZXggLCB2YWx1ZTogdmFsdWV9KTtcblx0fVxuXHQvLyBBZGQgbW9yZSBkaXNwYXRjaCBmdW5jdGlvbnMgaGVyZVxuY29uc3QgdXNlUGFyYW1ldGVyUmVkdWNlciA9e1xuXHRcdHN0YXRlLFxuXHRcdHJlZHVjZXI6e1xuXHRcdFx0dXBkYXRlVmFsdWVcblx0XHR9XG5cdH1cblx0cmV0dXJuIHVzZVBhcmFtZXRlclJlZHVjZXJcbn1cbiIsIi8qKlxuICogVGhlIHB1cnBvc2Ugb2YgaW5pdGlhbFN0YXRlcy50cyBpcyB0byBwcm92aWRlIGluaXRpYWwgc3RhdGUgZm9yIGNvbXBvbmVudCBwcm9wc1xuICovXG4vLyBpbml0aWFsU3RhdGUudHNcblxuaW1wb3J0IHsgUGFyYW1JdGVtIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuXG5cbmV4cG9ydCBjb25zdCB2YWx2ZVN0YXR1cyA9IHtcblx0YWxhcm06IGZhbHNlLFxuXHRhY3RGQjogZmFsc2UsXG5cdGRlQWN0RkI6IHRydWUsXG5cdGFjdGl2YXRlZENvbmZpZzogNyxcblx0ZGVhY3RpdmF0ZWRDb25maWc6IDUsXG5cdGl0ZW1OYW1lOiBcIlZYWFhcIixcblx0bWFudWFsOiBmYWxzZSxcblx0bWFza2VkOiBmYWxzZSxcblx0Y2hhbmdpbmc6IGZhbHNlLFxuXHRsb2NhdGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IHZhbHZlUHJvcHMgPSB7XG5cdFZhbHZlU3RhdHVzOiB2YWx2ZVN0YXR1cyxcblx0aGFuZGxlQ2xpY2s6ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGNsaWNrZWRcIik7XG5cdH0sXG59O1xuXG5leHBvcnQgY29uc3QgcGFyYW1ldGVySW5pdGlhbFN0YXRlID0gW3tcblx0XHRsYWJlbDoge1xuXHRcdFx0dGV4dDogXCJsYWJlbFwiLFxuXHRcdFx0Y2xhc3NOYW1lOiBcIlwiLFxuXHRcdFx0dG9vbHRpcFRleHQ6IFwiXCIsXG5cdFx0XHR0b29sdGlwUG9zaXRpb246IFwiXCIsXG5cdFx0XHR0b29sdGlwQ2xhc3NOYW1lOiBcIlwiLFxuXHRcdFx0dG9vbHRpcElkOiBcIlwiLFxuXHRcdH0sXG5cdFx0aW5wdXQ6IHtcblx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0aW5wdXRtb2RlOiBcIm51bWVyaWNcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkVudGVyIGEgbnVtYmVyXCIsXG5cdFx0XHRlZGl0YWJsZTogdHJ1ZSxcblx0XHRcdHBhdHRlcm46IFwiXlswLTldKlsuLF0/WzAtOV0qJFwiLFxuXHRcdFx0bWluOiAwLFxuXHRcdFx0bWF4OiAxMDAsXG5cdFx0XHRkZWNpbWFsUGxhY2VzOiAyLFxuXHRcdFx0ZXU6IFwiXFx1MDBCNUNcIixcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0sXG5cdH0gYXMgUGFyYW1JdGVtIF07XG4iLCJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRQcm9wcyB9IGZyb20gXCJAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnRcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBWQUxWRV9DT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5WYWx2ZVwiO1xuXG5leHBvcnQgdHlwZSBWYWx2ZVN0YXRlID0ge1xuXHRhbGFybTogYm9vbGVhbjtcblx0YWN0RkI6IGJvb2xlYW47XG5cdGRlQWN0RkI6IGJvb2xlYW47XG5cdHVzbD86Ym9vbGVhbjtcblx0bHNsPzogYm9vbGVhbjtcblx0YWN0aXZhdGVkQ29uZmlnOiBudW1iZXI7XG5cdGRlYWN0aXZhdGVkQ29uZmlnOiBudW1iZXI7XG5cdGl0ZW1OYW1lOiBzdHJpbmc7XG5cdG1hbnVhbDogYm9vbGVhbjtcblx0bWFza2VkOiBib29sZWFuO1xuXHRjaGFuZ2luZzogYm9vbGVhbjtcblx0bG9jYXRlOiBib29sZWFuO1xufTtcblxuXG5cbmV4cG9ydCB0eXBlIFZhbHZlQ29tcG91bmRDb250ZXh0VHlwZSA9IHtcblx0Y29tcG9uZW50UHJvcHM6Q29tcG9uZW50UHJvcHM8YW55LGFueT4sXG5cdHZhbHZlUHJvcHM6IFZhbHZlUHJvcHM7XG5cdG9uQWN0aW9uUGVyZm9ybWVkOiAoKT0+IHZvaWRcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5leHBvcnQgdHlwZSBWYWx2ZUNvbXBvdW5kUm9vdFByb3BzID0ge1xuXHRjb21wb25lbnRQcm9wczpDb21wb25lbnRQcm9wczxhbnksYW55Pixcblx0dmFsdmVQcm9wczpWYWx2ZVByb3BzLFxuXHRvbkFjdGlvblBlcmZvcm1lZDogKCk9PiB2b2lkXG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG4vKipcbiAqIERlZmluZSB0aGUgc2hhcGUgb2YgdGhlIFBhcmFtZXRlckFjdGlvbiB0eXBlXG4gKiBAVXNlYWdlIHVzZVBhcmFtZXRlclJlZHVjZXJcbiAqL1xuZXhwb3J0IHR5cGUgUGFyYW1ldGVyQWN0aW9uID1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX1ZBTFVFXCI7IHZhbHVlOiBudW1iZXIgLCBpbmRleDogbnVtYmVyfVxuXG5cdDtcblxuZXhwb3J0IHR5cGUgUGFyYW1ldGVyUmVkdWNlciA9IChcblx0c3RhdGU6IFBhcmFtSXRlbSB8IFBhcmFtSXRlbVtdLFxuXHRhY3Rpb246IFBhcmFtZXRlckFjdGlvblxuKSA9PiBWYWx2ZVN0YXRlO1xuXG5leHBvcnQgdHlwZSBVc2VQYXJhbWV0ZXJSZWR1Y2VyID0ge1xuXHRzdGF0ZTogUGFyYW1JdGVtW107XG5cdHJlZHVjZXI6IHtcblx0XHR1cGRhdGVWYWx1ZTogKHZhbHVlOm51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcblx0XHQvL2FkZCBtb3JlIGhhbmRsZXJzIGFzIG5lZWRlZFxuXHR9O1xufTtcbmV4cG9ydCB0eXBlIFBhcmFtTGFiZWwgPSB7XG5cdHRleHQ6IHN0cmluZztcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xuXHR0b29sdGlwVGV4dD86IHN0cmluZztcblx0dG9vbHRpcFBvc2l0aW9uPzogc3RyaW5nO1xuXHR0b29sdGlwQ2xhc3NOYW1lPzogc3RyaW5nO1xuXHR0b29sdGlwSWQ/OiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBQYXJhbUlucHV0ID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGlucHV0bW9kZTogJ25vbmUnIHwgJ3RleHQnIHwgJ3RlbCcgfCAndXJsJyB8ICdlbWFpbCcgfCAnbnVtZXJpYycgfCAnZGVjaW1hbCcgfCAnc2VhcmNoJyB8IHVuZGVmaW5lZDtcblx0cGxhY2Vob2xkZXI6IHN0cmluZztcblx0ZWRpdGFibGU6IGJvb2xlYW47XG5cdHBhdHRlcm46IHN0cmluZztcblx0bWluOiBudW1iZXI7XG5cdG1heDogbnVtYmVyO1xuXHRkZWNpbWFsUGxhY2VzOiBudW1iZXI7XG5cdC8vIHBhdHRlcm46IFwiXlswLTldKlsuLF0/WzAtOV0qJFwiIGZvciBkZWNpbWFsIG51bWJlcnNcblx0Ly8gcGF0dGVybjogXCJeWzAtOV0qJFwiIGZvciBpbnRlZ2Vyc1xuXHRldTogc3RyaW5nO1xuXHR2YWx1ZTogbnVtYmVyO1xufVxuLy8gdHlwZSBQYXJhbXNIZWFkZXIgPSB7XG4vLyBcdGxhYmVsOiBzdHJpbmdcbi8vIH1cbmV4cG9ydCB0eXBlIFBhcmFtSXRlbSA9IHtcblx0bGFiZWw6IFBhcmFtTGFiZWw7XG5cdGlucHV0OiBQYXJhbUlucHV0O1xufVxuZXhwb3J0IHR5cGUgUGFyYW1ldGVyc0xpc3RTdGF0ZSA9IHtcblx0cGFyYW1ldGVyczogUGFyYW1JdGVtW11cbn1cbi8qKlxuICogRGVmaW5lIHRoZSBzaGFwZSBvZiB0aGUgVmFsdmVBY3Rpb24gdHlwZVxuICogQFVzZWFnZSB1c2VWYWx2ZVJlZHVjZXJcbiAqL1xuZXhwb3J0IHR5cGUgVmFsdmVBY3Rpb24gPVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQUNUX0NPTkZJR1wiOyB2YWx1ZTogbnVtYmVyIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0RFQUNUX0NPTkZJR1wiOyB2YWx1ZTogbnVtYmVyIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0FDVF9GQlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0RFX0FDVF9GQlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX1VTTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0xTTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX01BTlVBTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0FMQVJNXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTUFTS0VEXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQ0hBTkdJTkdcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9MT0NBVEVcIiB9XG5cdDtcblxuZXhwb3J0IHR5cGUgVmFsdmVSZWR1Y2VyID0gKFxuXHRzdGF0ZTogVmFsdmVTdGF0ZSxcblx0YWN0aW9uOiBWYWx2ZUFjdGlvblxuKSA9PiBWYWx2ZVN0YXRlO1xuXG5leHBvcnQgdHlwZSBVc2VWYWx2ZVJlZHVjZXIgPSB7XG5cdHN0YXRlOiBWYWx2ZVN0YXRlO1xuXHRyZWR1Y2VyOiB7XG5cdFx0dXBkYXRlQWN0Q29uZmlnOiAodmFsdWU6bnVtYmVyKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZURlQWN0Q29uZmlnOiAodmFsdWU6bnVtYmVyKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUFsYXJtOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUFjdEZCOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZURlQWN0RkI6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlVXNsOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxzbDogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVNYW51YWw6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTWFza2VkOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUNoYW5naW5nOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxvY2F0ZTogKCkgPT4gdm9pZDtcblxuXHRcdC8vYWRkIG1vcmUgaGFuZGxlcnMgYXMgbmVlZGVkXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgVmFsdmVDbGFzc05hbWVFbnVtID0ge1xuXHRBbGFybVN0YXRlOiBcIkFsYXJtU3RhdGVcIixcblx0QWN0aXZhdGVkOiBcIkFjdGl2YXRlZFwiLFxuXHREZWFjdGl2YXRlZDogXCJEZWFjdGl2YXRlZFwiLFxuXHRNYW51YWw6IFwiTWFudWFsXCIsXG5cdE1hc2tlZDogXCJNYXNrZWRcIixcblx0Q2hhbmdpbmc6IFwiQ2hhbmdpbmdcIixcblx0Tm9BbGFybU1hc2s6IFwiTm9BbGFybU1hc2tcIixcblx0TG9jYXRlOiBcIkxvY2F0ZVwiXG59O1xuZXhwb3J0IHR5cGUgVmFsdmVDbGFzc05hbWVFbnVtID1cblx0KHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW0pW2tleW9mIHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW1dO1xuZXhwb3J0IGNvbnN0IEl0ZW1OYW1lRW51bSA9IHtcblx0VjFiMTogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjFiMjogXCJ2MWIyXCIsIC8vIGluZGV4IDFcblx0VjFiMzogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNDogXCJ2MWI0XCIsIC8vIGluZGV4IDNcblx0VjJiMTogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMjogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMzogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjNiMTogXCJ2M2IxXCIsIC8vIGluZGV4IDhcblx0VjNiMjogXCJ2M2IyXCIsIC8vIGluZGV4IDlcblx0VjNiMzogXCJ2M2IzXCIsIC8vIGluZGV4IDEwXG5cdFYzYjQ6IFwidjNiNFwiLCAvLyBpbmRleCAxMVxuXHRWMjogXCJ2MlwiLCAvLyBpbmRleCAxMlxuXHRWMzogXCJ2M1wiLCAvLyBpbmRleCAxM1xuXHRWMTogXCJ2MVwiLCAvLyBpbmRleCAxNFxuXHRWMmYxOiBcInYyZjFcIiwgLy8gaW5kZXggMTVcblx0VjJmMjogXCJ2MmYyXCIsIC8vIGluZGV4IDE2XG5cdFYzZjE6IFwidjNmMVwiLCAvLyBpbmRleCAxN1xuXHRWM2YyOiBcInYzZjJcIiwgLy8gaW5kZXggMThcbn07XG5leHBvcnQgdHlwZSBJdGVtTmFtZUVudW0gPSAodHlwZW9mIEl0ZW1OYW1lRW51bSlba2V5b2YgdHlwZW9mIEl0ZW1OYW1lRW51bV07XG5leHBvcnQgY29uc3QgdmFsdmVNcEl0ZW1OYW1lRW51bSA9IHtcblx0VjFiMTogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjFiMjogXCJ2MWIyXCIsIC8vIGluZGV4IDFcblx0VjFiMzogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNDogXCJ2MWI0XCIsIC8vIGluZGV4IDNcblx0VjJiMTogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMjogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMzogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjI6IFwidjJcIiwgLy8gaW5kZXggOFxuXHRWMTogXCJ2MVwiLCAvLyBpbmRleCA5XG5cdHVzbDogXCJ1c2xcIiwgLy8gaW5kZXggMTAgdXBwZXItc2VhdC1saWZ0XG5cdGxzbDogXCJsc2xcIiwgLy8gaW5kZXggMTEgbG93ZXItc2VhdC1saWZ0XG5cdGxvY2F0ZTogXCJsb2NhdGVcIiAvLyBpbmRleCAxMiBsb2NhdGUgYW5pbWF0aW9uXG59O1xuZXhwb3J0IHR5cGUgdmFsdmVNcEl0ZW1OYW1lRW51bSA9ICh0eXBlb2YgdmFsdmVNcEl0ZW1OYW1lRW51bSlba2V5b2YgdHlwZW9mIHZhbHZlTXBJdGVtTmFtZUVudW1dO1xuXG5leHBvcnQgY29uc3QgSXRlbUNsaWNrYWJsZU5hbWVFbnVtID0ge1xuXHRWMWIxOiBcInYxYjFcIiwgLy8gaW5kZXggMFxuXHRWMWIyOiBcInYxYjJcIiwgLy8gaW5kZXggMVxuXHRWMWIzOiBcInYxYjNcIiwgLy8gaW5kZXggMlxuXHRWMWI0OiBcInYxYjRcIiwgLy8gaW5kZXggM1xuXHRWMmIxOiBcInYyYjFcIiwgLy8gaW5kZXggNFxuXHRWMmIyOiBcInYyYjJcIiwgLy8gaW5kZXggNVxuXHRWMmIzOiBcInYyYjNcIiwgLy8gaW5kZXggNlxuXHRWMmI0OiBcInYyYjRcIiwgLy8gaW5kZXggN1xuXHRWM2IxOiBcInYzYjFcIiwgLy8gaW5kZXggOFxuXHRWM2IyOiBcInYzYjJcIiwgLy8gaW5kZXggOVxuXHRWM2IzOiBcInYzYjNcIiwgLy8gaW5kZXggMTBcblx0VjNiNDogXCJ2M2I0XCIsIC8vIGluZGV4IDExXG5cdFYyOiBcInYyXCIsIC8vIGluZGV4IDEyXG5cdFYzOiBcInYzXCIsIC8vIGluZGV4IDEzXG5cdFYxOiBcInYxXCIsIC8vIGluZGV4IDE0XG59O1xuZXhwb3J0IHR5cGUgSXRlbUNsaWNrYWJsZU5hbWVFbnVtID1cblx0KHR5cGVvZiBJdGVtQ2xpY2thYmxlTmFtZUVudW0pW2tleW9mIHR5cGVvZiBJdGVtQ2xpY2thYmxlTmFtZUVudW1dO1xuZXhwb3J0IGNvbnN0IHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0gPSB7XG5cdFYxYjE6IFwidjFiMVwiLCAvLyBpbmRleCAwXG5cdFYxYjI6IFwidjFiMlwiLCAvLyBpbmRleCAxXG5cdFYxYjM6IFwidjFiM1wiLCAvLyBpbmRleCAyXG5cdFYxYjQ6IFwidjFiNFwiLCAvLyBpbmRleCAzXG5cdFYyYjE6IFwidjJiMVwiLCAvLyBpbmRleCA0XG5cdFYyYjI6IFwidjJiMlwiLCAvLyBpbmRleCA1XG5cdFYyYjM6IFwidjJiM1wiLCAvLyBpbmRleCA2XG5cdFYyYjQ6IFwidjJiNFwiLCAvLyBpbmRleCA3XG5cdFYyOiBcInYyXCIsIC8vIGluZGV4IDhcblx0VjE6IFwidjFcIiwgLy8gaW5kZXggOVxufTtcbmV4cG9ydCB0eXBlIHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0gPVxuXHQodHlwZW9mIHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0pW2tleW9mIHR5cGVvZiB2YWx2ZU1wSXRlbUNsaWNrYWJsZU5hbWVFbnVtXTtcblxuZXhwb3J0IGNvbnN0IEl0ZW1Qb3NpdGlvbkVudW0gPSB7XG5cdHYxYjE6IFwidjFiMVwiLFxuXHR2MWIyOiBcInYxYjJcIixcblx0djFiMzogXCJ2MWIzXCIsXG5cdHYxYjQ6IFwidjFiNFwiLFxuXHR2MmIxOiBcInYyYjFcIixcblx0VjJiMjogXCJ2MmIyXCIsXG5cdHYyYjM6IFwidjJiM1wiLFxuXHR2MmI0OiBcInYyYjRcIixcblx0djNiMTogXCJ2M2IxXCIsXG5cdHYzYjI6IFwidjNiMlwiLFxuXHR2M2IzOiBcInYzYjNcIixcblx0djNiNDogXCJ2M2I0XCIsXG5cdHYyOiBcInYyXCIsXG5cdHYzOiBcInYzXCIsXG59O1xuZXhwb3J0IHR5cGUgSXRlbVBvc2l0aW9uRW51bSA9XG5cdCh0eXBlb2YgSXRlbVBvc2l0aW9uRW51bSlba2V5b2YgdHlwZW9mIEl0ZW1Qb3NpdGlvbkVudW1dO1xuXG5jb25zdCBWYWx2ZVN0YXRlRW51bSA9IHtcblx0YWxhcm06IFwiYWxhcm1cIixcblx0bWFudWFsOiBcIm1hbnVhbFwiLFxuXHRtYXNrZWQ6IFwibWFza2VkXCIsXG59O1xuZXhwb3J0IHR5cGUgVmFsdmVTdGF0ZUVudW0gPVxuXHQodHlwZW9mIFZhbHZlU3RhdGVFbnVtKVtrZXlvZiB0eXBlb2YgVmFsdmVTdGF0ZUVudW1dO1xuXG5jb25zdCBpdGVtSWRQb3NpdGlvbnMgPSBbXG5cdCdyaWdodCcsXG5cdCdsZWZ0Jyxcblx0J3RvcC1sZWZ0Jyxcblx0J3RvcC1yaWdodCcsXG5cdCdib3R0b20tbGVmdCcsXG5cdCdib3R0b20tcmlnaHQnXG5dO1xuXG5leHBvcnQgdHlwZSBJdGVtSWRQb3NpdGlvblR5cGUgPSB0eXBlb2YgaXRlbUlkUG9zaXRpb25zW251bWJlcl07XG5cbmV4cG9ydCB0eXBlIFZhbHZlUHJvcHMgPSB7XG5cdFZhbHZlU3RhdHVzPzogVmFsdmVTdGF0ZTtcblx0c2hvd0l0ZW1JZD86IGJvb2xlYW47XG5cdGl0ZW1JZFBvc2l0aW9uPzpJdGVtSWRQb3NpdGlvblR5cGU7XG5cdGhhbmRsZUNsaWNrPzogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCB0eXBlIEl0ZW1EYXRhID0ge1xuXHRrZXk6IHN0cmluZztcblx0dmFsdWU6IHN0cmluZztcblx0cHJvcHM6IFZhbHZlU3RhdGU7XG59O1xuLyoqXG4gKiBkcmFnZ2FibGUgY29tcG9uZW50IHR5cGVzXG4gKi9cbi8vIGV4cG9ydCB0eXBlIERyYWdnYWJsZUl0ZW0gPSB7XG4vLyBcdGlkOiBVbmlxdWVJZGVudGlmaWVyO1xuLy8gXHRsZWZ0OiBudW1iZXI7XG4vLyBcdHRvcDogbnVtYmVyO1xuLy8gfVxuXG4vLyBleHBvcnQgdHlwZSBEcmFnZ2FibGVQcm9wcyA9IHtcbi8vIFx0aWQ6IFVuaXF1ZUlkZW50aWZpZXIsXG4vLyBcdG9uQ2xvc2U6IChpZDogVW5pcXVlSWRlbnRpZmllcik9PiB2b2lkLFxuLy8gXHRlbGVtZW50Pzoga2V5b2YgSFRNTEVsZW1lbnQsXG4vLyBcdGxlZnQ6IG51bWJlcjtcbi8vIFx0dG9wIDogbnVtYmVyO1xuLy8gXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuLy8gXHRjbGFzc05hbWU6IHN0cmluZztcbi8vIH1cbmV4cG9ydCB0eXBlIGl0ZW1OYW1lUHJvcHMgPSB7XG5cdFx0XHRrZXk6IHN0cmluZyxcblx0XHRcdG5hbWU6IFtzdHJpbmcsc3RyaW5nXSxcblx0XHRcdHZhbHVlOiBzdHJpbmcsXG5cdFx0XHRpbmRleDogbnVtYmVyLFxufVxuIiwiaW1wb3J0IHsgZ2V0Qm9vbEF0SW5kZXggfSBmcm9tIFwiLi4vdXRpbHMvbnVtYmVyVXRpbFwiO1xuaW1wb3J0IHtcblx0SXRlbUlkUG9zaXRpb25UeXBlLFxuXHRJdGVtTmFtZUVudW0sXG5cdHZhbHZlTXBJdGVtTmFtZUVudW0sXG5cdHR5cGUgVmFsdmVTdGF0ZSxcbn0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbi8qKlxuICogVGhpcyBpcyBhIHV0aWxpdHkgZnVuY3Rpb24gZm9yIHRoZSBjb21wb25lbnQgXCJwcm9jZXNzLW9iamVjdC9WYWx2ZUZDXCJcbiAqXG4gKiBAcGFyYW0gaW5kZXg6IG51bWJlciB0aGUgaW5kZXggb2YgYW4gZHluYW1pYyB2aXN1YWwgZWxlbWVudCBcIml0ZW1cIiB3aXRoaW4gdGhlIFZhbHZlIGNvbXBvbmVudFxuICogQHBhcmFtIHZhbHZlU3RhdHVzPzpWYWx2ZVN0YXR1cyB0aGUgc3RhdHVzIHJlcHJlc2VudGluZyBwaHlzaWNhbCBwcm9jZXNzIHZhbHZlXG4gKiBAcmV0dXJucyBjbGFzc05hbWU6c3RyaW5nIHJldHVybnMgYWRkaXRpb25hbCBjbGFzc25hbWVzIGZvciBhbiB2aXN1YWwgZWxlbWVudCBvZiB0aGUgdmFsdmUgY29tcG9uZW50LlxuICpcbiAqIFJldHVybmVkIGNsYXNzbmFtZXMgYXJlO1xuICogXHRoaWRlIC0gdGhpcyBoaWRlcyB0aGUgaXRlbVxuICogXHRzaG93IC1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1DbGFzc05hbWUgPSAoXG5cdGluZGV4OiBudW1iZXIsXG5cdHZhbHZlU3RhdHVzPzogVmFsdmVTdGF0ZVxuKTogc3RyaW5nID0+IHtcblx0bGV0IGNsYXNzTmFtZSA9IFwiXCI7XG5cdC8vIEhhbmRsZSB0aGUgZmFjdCB0aGF0IEFjdGl2YXRlZENvbmZpZyBhbmQgRGVhY3RpdmF0ZWRDb25maWcgYXJlIG9wdGlvbmFsIGFuZCBtYXliZSB1bmRlZmluZWRcblx0Y29uc3QgQWN0aXZhdGVkQ29uZmlnVmFsdWUgPSB2YWx2ZVN0YXR1cz8uYWN0aXZhdGVkQ29uZmlnID8/IDA7XG5cdGNvbnN0IERlYWN0aXZhdGVkQ29uZmlnVmFsdWUgPSB2YWx2ZVN0YXR1cz8uZGVhY3RpdmF0ZWRDb25maWcgPz8gMDtcblx0aWYgKGluZGV4IDwgMTIpIHtcblx0XHRpZiAoXG5cdFx0XHQoZ2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSAmJiB2YWx2ZVN0YXR1cz8uYWN0RkIpIHx8XG5cdFx0XHQoZ2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpICYmIHZhbHZlU3RhdHVzPy5kZUFjdEZCKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93IGl0ZW1cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDE0KSB7XG5cdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDEyKSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMykge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTUpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTIpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMilcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDE2KSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEyKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTIpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxNykge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMykgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEzKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTgpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTMpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMylcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdH1cblx0Ly8gQWRkaXRpb25zIHRvIHRoZSBjbGFzc05hbWVcblxuXHRpZiAoY2xhc3NOYW1lLmluY2x1ZGVzKFwic2hvd1wiKSAmJiAhY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXRlbVwiKSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgsIGNsYXNzTmFtZSk7XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5hbGFybSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJBbGFybVN0YXRlXCIsIFwiXCIpICsgXCIgQWxhcm1TdGF0ZVwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/LmNoYW5naW5nKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkNoYW5naW5nXCIsIFwiXCIpICsgXCIgQ2hhbmdpbmdcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYW51YWwpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTWFudWFsXCIsIFwiXCIpICsgXCIgTWFudWFsXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFza2VkICYmICF2YWx2ZVN0YXR1cy5hbGFybSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJOb0FsYXJtTWFza1wiLCBcIlwiKSArIFwiIE5vQWxhcm1NYXNrXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFza2VkKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk1hc2tlZFwiLCBcIlwiKSArIFwiIE1hc2tlZFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/LmFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIEFjdGl2YXRlZFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/LmRlQWN0RkIpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiRGVhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBEZWFjdGl2YXRlZFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/LmxvY2F0ZSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJjaXJjbGVcIiwgXCJcIikgKyBcIiBjaXJjbGVcIjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2xhc3NOYW1lOyAvLyBkZWZhdWx0IHJldHVybiB2YWx1ZSBpZiBubyBvdGhlciBjb25kaXRpb24gaXMgbWV0XG59O1xuZXhwb3J0IGNvbnN0IGdldFZhbHZlTXBJdGVtQ2xhc3NOYW1lID0gKFxuXHRpbmRleDogbnVtYmVyLFxuXHR2YWx2ZVN0YXR1cz86IFZhbHZlU3RhdGVcbik6IHN0cmluZyA9PiB7XG5cdGxldCBjbGFzc05hbWUgPSBcIlwiO1xuXHQvLyBIYW5kbGUgdGhlIGZhY3QgdGhhdCBBY3RpdmF0ZWRDb25maWcgYW5kIERlYWN0aXZhdGVkQ29uZmlnIGFyZSBvcHRpb25hbCBhbmQgbWF5YmUgdW5kZWZpbmVkXG5cdGNvbnN0IEFjdGl2YXRlZENvbmZpZ1ZhbHVlID0gdmFsdmVTdGF0dXM/LmFjdGl2YXRlZENvbmZpZyA/PyAwO1xuXHRjb25zdCBEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlID0gdmFsdmVTdGF0dXM/LmRlYWN0aXZhdGVkQ29uZmlnID8/IDA7XG5cdC8vIGNvbnNvbGUubG9nKHZhbHZlU3RhdHVzKTtcblxuXHRpZiAoaW5kZXggPCA4KSB7XG5cdFx0aWYgKFxuXHRcdFx0KGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgJiYgdmFsdmVTdGF0dXM/LmFjdEZCKSB8fFxuXHRcdFx0KGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSAmJiB2YWx2ZVN0YXR1cz8uZGVBY3RGQilcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvdyBpdGVtXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZSBpdGVtXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSA5KSB7XG5cdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDgpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleClcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDEwKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coXG5cdFx0Ly8gXHRgaW5kZXggJHtpbmRleH0gZGVhY3QgY29uZmlnICR7RGVhY3RpdmF0ZWRDb25maWdWYWx1ZX0gYml0IGlzICR7Z2V0Qm9vbEF0SW5kZXgoXG5cdFx0Ly8gXHRcdERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsXG5cdFx0Ly8gXHRcdDEwXG5cdFx0Ly8gXHQpfWBcblx0XHQvLyApO1xuXG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEwKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTApXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdFx0aWYgKHZhbHZlU3RhdHVzPy51c2wpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJBY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBBY3RpdmF0ZWRcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiRGVhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBEZWFjdGl2YXRlZFwiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTEpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTEpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMSlcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvdyBpdGVtXCI7XG5cdFx0XHRpZiAodmFsdmVTdGF0dXM/LmxzbCkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIEFjdGl2YXRlZFwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJEZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIERlYWN0aXZhdGVkXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZSBpdGVtXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMikge1xuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubG9jYXRlKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcInNob3cgaXRlbVwiLCBcIlwiKSArIFwiIHNob3cgaXRlbVwiO1xuXHRcdFx0aWYoZ2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDgpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCA4KSl7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwic2hvdyBsYXJnZSBpdGVtXCIsIFwiXCIpICsgXCIgc2hvdyBsYXJnZSBpdGVtXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiaGlkZSBpdGVtXCIsIFwiXCIpICsgXCIgaGlkZSBpdGVtXCI7XG5cdFx0fVxuXHR9XG5cdC8vIEFkZGl0aW9ucyB0byB0aGUgY2xhc3NOYW1lXG5cblx0aWYgKGNsYXNzTmFtZS5pbmNsdWRlcyhcInNob3dcIikgJiYgIWNsYXNzTmFtZS5pbmNsdWRlcyhcIml0ZW1cIikpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4LCBjbGFzc05hbWUpO1xuXHRcdGlmICh2YWx2ZVN0YXR1cz8uYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWxhcm1TdGF0ZVwiLCBcIlwiKSArIFwiIEFsYXJtU3RhdGVcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5jaGFuZ2luZykge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJDaGFuZ2luZ1wiLCBcIlwiKSArIFwiIENoYW5naW5nXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFudWFsKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk1hbnVhbFwiLCBcIlwiKSArIFwiIE1hbnVhbFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCAmJiAhdmFsdmVTdGF0dXMuYWxhcm0pIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTm9BbGFybU1hc2tcIiwgXCJcIikgKyBcIiBOb0FsYXJtTWFza1wiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hc2tlZCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJNYXNrZWRcIiwgXCJcIikgKyBcIiBNYXNrZWRcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5hY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJBY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBBY3RpdmF0ZWRcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5kZUFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgRGVhY3RpdmF0ZWRcIjtcblx0XHR9XG5cdH1cblx0Ly8gY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCwgY2xhc3NOYW1lKTtcblxuXHRyZXR1cm4gY2xhc3NOYW1lOyAvLyBkZWZhdWx0IHJldHVybiB2YWx1ZSBpZiBubyBvdGhlciBjb25kaXRpb24gaXMgbWV0XG59O1xuLyoqXG4gKiBAcmV0dXJucyBBcnJheSBvZiBpdGVtTmFtZShzKSBmb3IgZWFjaCB2aXN1YWwgZWxlbWVudCBvZiBhIHZhbHZlIGNvbXBvbmVudFxuICovXG5leHBvcnQgY29uc3QgaXRlbU5hbWVzID0gT2JqZWN0LmVudHJpZXMoSXRlbU5hbWVFbnVtKS5tYXAoKGtleSwgaW5kZXgpID0+IHtcblx0Ly8gY29uc29sZS5sb2coYEluIGJ1aWxkIEl0ZW1OYW1lcyBuYW1lICR7a2V5fSBpbmRleCAke2luZGV4fWApO1xuXHRyZXR1cm4ge1xuXHRcdGtleTogdXVpZHY0KCksXG5cdFx0bmFtZToga2V5LFxuXHRcdHZhbHVlOiBrZXlbMV0sXG5cdFx0aW5kZXg6IGluZGV4LFxuXHR9O1xufSk7XG5leHBvcnQgY29uc3QgdmFsdmVNcEl0ZW1OYW1lcyA9IE9iamVjdC5lbnRyaWVzKHZhbHZlTXBJdGVtTmFtZUVudW0pLm1hcChcblx0KGtleSwgaW5kZXgpID0+IHtcblx0XHQvLyBjb25zb2xlLmxvZyhgSW4gYnVpbGQgSXRlbU5hbWVzIG5hbWUgJHtrZXl9IGluZGV4ICR7aW5kZXh9YCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGtleTogdXVpZHY0KCksXG5cdFx0XHRuYW1lOiBrZXksXG5cdFx0XHR2YWx1ZToga2V5WzFdLFxuXHRcdFx0aW5kZXg6IGluZGV4LFxuXHRcdH07XG5cdH1cbik7XG5leHBvcnQgY29uc3QgZ2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIGl0ZW1JZFBvc2l0aW9uOiBJdGVtSWRQb3NpdGlvblR5cGUpOkl0ZW1JZFBvc2l0aW9uVHlwZSA9PiB7XG5cdC8vIENoZWNrIGNsYXNzTmFtZSBpbmNsdWRlcyAnaXRlbUlkIHBvcG92ZXInLCBpZiBub3QgcmV0dXJuIGNsYXNzTmFtZSBhbmQgd2FyblxuXHRpZiAoIWNsYXNzTmFtZS5pbmNsdWRlcygnaXRlbUlkIHBvcG92ZXInKSl7XG5cdFx0Y29uc29sZS53YXJuKFwiRnVuY3Rpb24gZ2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUgY2FsbGVkIHdoZW4gJ2l0ZW1JZCBwb3BvdmVyJyBub3QgaW4gZ2l2ZW4gY2xhc3NOYW1lXCIpO1xuXHRcdHJldHVybiBjbGFzc05hbWVcblx0fVxuXHQvLyBPdmVyIHdyaXRlIGdpdmVuIGNsYXNzTmFtZVxuXHRjbGFzc05hbWUgPSBcIml0ZW1JZCBwb3BvdmVyXCI7XG5cdHN3aXRjaCAoaXRlbUlkUG9zaXRpb24pIHtcblx0Y2FzZSBcImxlZnRcIjpcblx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLWxlZnRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi1sZWZ0XCI7XG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJyaWdodFwiOlxuXHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tcmlnaHRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi1yaWdodFwiO1xuXHRcdGJyZWFrO1xuXHRjYXNlIFwidG9wLWxlZnRcIjpcblx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcInBvc2l0aW9uLXRvcC1sZWZ0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tdG9wLWxlZnRcIjtcblx0XHRicmVhaztcblx0Y2FzZSBcInRvcC1yaWdodFwiOlxuXHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tdG9wLXJpZ2h0XCIsIFwiXCIpICsgXCIgcG9zaXRpb24tdG9wLXJpZ2h0XCI7XG5cdFx0YnJlYWs7XG5cdGNhc2UgXCJib3R0b20tbGVmdFwiOlxuXHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwicG9zaXRpb24tYm90dG9tLWxlZnRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi1ib3R0b20tbGVmdFwiO1xuXHRcdGJyZWFrO1xuXHRjYXNlIFwiYm90dG9tLXJpZ2h0XCI6XG5cdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJwb3NpdGlvbi1ib3R0b20tcmlnaHRcIiwgXCJcIikgKyBcIiBwb3NpdGlvbi1ib3R0b20tcmlnaHRcIjtcblx0XHRicmVhaztcblxuXHRkZWZhdWx0OlxuXHRcdGJyZWFrO1xufVxuXG5cdHJldHVybiBjbGFzc05hbWU7XG59XG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0UHJvcGVydHlUcmVlLFxufSBmcm9tICdAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuaW1wb3J0IHR5cGUge1xuXHRDb21wb25lbnRQcm9wc1xuXHQsQ29tcG9uZW50TWV0YVxuXHQsUENvbXBvbmVudFxuXHQsU2l6ZU9iamVjdFxufSBmcm9tICdAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuXG4vLyBpbXBvcnQgeyB1c2VDcmVhdGVDb250ZXh0IH0gZnJvbSBcInNyYy91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyBQYXJhbWV0ZXJzTGlzdFN0YXRlLCBQYXJhbUl0ZW0gfSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJJbml0aWFsU3RhdGUgfSBmcm9tIFwiLi4vYXBpL2luaXRpYWxTdGF0ZVwiO1xuXG4vLyBUeXBlc1xuXG4vLyB0eXBlIEVkaXRQYXJhbUlucHV0Q29udGV4dFR5cGUgPSB7XG4vLyBcdHBhcmFtSXRlbTogUGFyYW1JdGVtO1xuLy8gXHRzZXRQYXJhbUl0ZW06IChwYXJhbUl0ZW06IFBhcmFtSXRlbSkgPT4gdm9pZDtcbi8vIH1cbi8vIHR5cGUgRWRpdFBhcmFtSW5wdXRDb250ZXh0VHlwZSA9IHtcbi8vIFx0c3RhdGU6IFBhcmFtSXRlbVtdO1xuLy8gXHRyZWR1Y2VyOiBVc2VQYXJhbWV0ZXJSZWR1Y2VyO1xuLy8gfVxuXG50eXBlIFBhcmFtZXRlcnNMaXN0Q29tcG9uZW50UHJvcHMgPSB7XG5cdHBhcmFtZXRlcnM6IFBhcmFtSXRlbVtdXG59XG5jb25zdCBpbml0UGFyYW1ldGVycyA9IFt7XG5cdGxhYmVsOntcblx0XHR0ZXh0OiBcInRleHRcIlxuXHR9LFxuXHRpbnB1dDoge1xuXHRcdHZhbHVlOiBudWxsLFxuXHRcdHBsYWNlaG9sZGVyOiBcIkVudGVyIGEgTnVtYmVyXCJcblx0fVxufV1cblxuLy8gY29uc3QgW0VkaXRQYXJhbUlucHV0Q29udGV4dFByb3ZpZGVyLCB1c2VFZGl0UGFyYW1JbnB1dENvbnRleHRdID1cbi8vIHVzZUNyZWF0ZUNvbnRleHQ8RWRpdFBhcmFtSW5wdXRDb250ZXh0VHlwZT4oXCJFZGl0UGFyYW1JbnB1dENvbnRleHRcIik7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9IFwiaG1pLmlucHV0LlBhcmFtZXRlckxpc3RcIjtcblxuZXhwb3J0IGNvbnN0IFBhcmFtZXRlckxpc3RDb21wb25lbnQgPSAocHJvcHM6IENvbXBvbmVudFByb3BzPFBhcmFtZXRlcnNMaXN0Q29tcG9uZW50UHJvcHM+KSA9PiB7XG5jb25zdCB0cmFuc2Zvcm1lZFByb3BzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG5cdGNvbnN0IHsgcGFyYW1ldGVyc30gPSBwcm9wcy5wcm9wcyB8fCBpbml0UGFyYW1ldGVyc1xuXHRyZXR1cm4gcGFyYW1ldGVyc1xufSwgW3Byb3BzLnByb3BzLnBhcmFtZXRlcnNdKVxuXG5cblx0XHRjb25zb2xlLmxvZyhgdHJhbnNmb3JtZWRQcm9wczogbGFiZWwgJHt0cmFuc2Zvcm1lZFByb3BzWzBdLmxhYmVsLnRleHR9YCk7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5LWZsZXgtY29sdW1uXCJcblx0XHRcdD5cblx0XHR7dHJhbnNmb3JtZWRQcm9wcy5tYXAoKHBhcmFtOiBQYXJhbUl0ZW0sIGluZGV4OiBudW1iZXIpPT57XG5cdFx0XHRjb25zdCB7IGxhYmVsLGlucHV0fSA9IHBhcmFtO1xuXHRcdFx0Y29uc29sZS5sb2coaW5wdXQudmFsdWUpO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8bGFiZWwga2V5PXtgJHtsYWJlbC50ZXh0fS1wYXJhbWV0ZXIke2luZGV4fWB9Y2xhc3NOYW1lPVwiZmllbGQgc21hbGxcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPntsYWJlbC50ZXh0fTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJldVwiPntpbnB1dC5ldX08L3NwYW4+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRpZD17YCR7bGFiZWwudGV4dH0tcGFyYW1ldGVyJHtpbmRleH1gfVxuXHRcdFx0XHRcdGlucHV0TW9kZT17aW5wdXQuaW5wdXRtb2RlfVxuXHRcdFx0XHRcdHBhdHRlcm49e2lucHV0LnBhdHRlcm4gfHwgXCJbMC05XSpcIn1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17aW5wdXQucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9eyFpbnB1dC5lZGl0YWJsZX1cblx0XHRcdFx0XHR2YWx1ZT17aW5wdXQudmFsdWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e1xuXHRcdFx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYE9uIGNoYW5nZSBldmVudCAke2UuY3VycmVudFRhcmdldC52YWx1ZX1gKTtcblx0XHRcdFx0XHRcdFx0cHJvcHMuc3RvcmUucHJvcHMud3JpdGUoXG5cdFx0XHRcdFx0XHRcdFx0YHBhcmFtZXRlcnNbJHtpbmRleH1dLmlucHV0LnZhbHVlYCxcblx0XHRcdFx0XHRcdFx0XHRlLmN1cnJlbnRUYXJnZXQudmFsdWVcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlVmFsdWUocGFyc2VGbG9hdChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKS50b0ZpeGVkKDIpKSwgaW5kZXgpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQpXG5cblx0XHR9KVxuXHR9PC9kaXY+XG5cdFx0KVxuXG59O1xuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyTGlzdENvbXBvbmVudE1ldGEgaW1wbGVtZW50cyBDb21wb25lbnRNZXRhIHtcblx0Z2V0Q29tcG9uZW50VHlwZSgpOnN0cmluZ3tcbnJldHVybiBDT01QT05FTlRfVFlQRVxuXHR9XG5cblx0Z2V0RGVmYXVsdFNpemUoKTogU2l6ZU9iamVjdHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IDEyMCxcblx0XHRcdGhlaWdodDogMjQwLFxuXHRcdH1cblx0fVxuXG5cdGdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBQYXJhbWV0ZXJzTGlzdFN0YXRlIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cGFyYW1ldGVyczp0cmVlLnJlYWQgKCdwYXJhbWV0ZXJzJywgcGFyYW1ldGVySW5pdGlhbFN0YXRlKVxuXHRcdH1cblx0fVxuXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFBhcmFtZXRlckxpc3RDb21wb25lbnQgYXMgUENvbXBvbmVudFxuXHR9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdHR5cGUgVmFsdmVQcm9wcyxcblx0dHlwZSBWYWx2ZVN0YXRlXG59IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcblxuXG5pbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdFByb3BlcnR5VHJlZSxcbn0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHNcblx0LENvbXBvbmVudE1ldGFcblx0LFBDb21wb25lbnRcblx0LFNpemVPYmplY3Rcbn0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50Jy8vJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG5pbXBvcnQgeyBWYWx2ZU1wQ29tcG91bmQgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUtbXAvVmFsdmVNcFwiO1xuaW1wb3J0IHsgdmFsdmVTdGF0dXMgfSBmcm9tIFwiLi4vYXBpL2luaXRpYWxTdGF0ZVwiO1xuLy8gaW1wb3J0IHsgdmFsdmVQcm9wcyB9IGZyb20gXCIuL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS9pbml0aWFsU3RhdGVcIjtcbi8vIGltcG9ydCB7IFZhbHZlRkNDb21wb3VuZCB9IGZyb20gXCIuL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS9WYWx2ZUZDXCI7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5WYWx2ZVwiO1xuXG4vKipcbiAqIFZhbHZlIGNvbXBvbmVudCBjbGFzcy5cbiAqIEV4dGVuZHMgdGhlIGJhc2UgQ29tcG9uZW50IGNsYXNzIGZyb20gUGVyc3BlY3RpdmUsIHR5cGVkIHdpdGggVmFsdmVQcm9wcy5cbiAqIFByb3ZpZGVzIGEgY3VzdG9taXphYmxlIHZhbHZlIHdpdGggcHJvcGVyIGhhbmRsaW5nIG9mIGRlc2lnbmVyL3ByZXZpZXcgbW9kZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWx2ZSBleHRlbmRzIENvbXBvbmVudDxDb21wb25lbnRQcm9wczxWYWx2ZVByb3BzPiwgYW55PiB7XG5cdHZhbHZlUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzOiBDb21wb25lbnRQcm9wczxWYWx2ZVByb3BzPikge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnZhbHZlUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuXHR9XG5cblx0Ly8gVGhpcyBpcyBhIGxpZmVjeWNsZSBtZXRob2QgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IG1vdW50ZWQgdG8gdGhlIERPTS5cblx0Y29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG5cdFx0Ly8gTm8gbmVlZCB0byBpbml0aWFsaXplIHZhbHZlUmVmIGhlcmVcblx0fVxuXHR2YWx2ZVN0YXR1czogVmFsdmVTdGF0ZSA9IHRoaXMucHJvcHMucHJvcHMuVmFsdmVTdGF0dXMgfHwgdmFsdmVTdGF0dXM7XG5cblx0XHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIGNvbXBvbmVudCdzIGFjdGlvbiBldmVudC5cblx0Ki9cblx0b25BY3Rpb25QZXJmb3JtZWQgPSAoKSA9PiB7XG5cdFx0Ly8gSWYgdGhlIGRlc2lnbmVyIGlzIGluIFwiZGVzaWduXCIgbW9kZSwgZG9uJ3QgZG8gYW55dGhpbmdcblx0XHRpZiAoIXRoaXMucHJvcHMuZXZlbnRzRW5hYmxlZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBpcyBkaXNhYmxlZCBpbiB0aGUgZGVzaWduLXNjb3BlXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGNsaWNrZWQhXCIpO1xuXHRcdHRoaXMucHJvcHMuY29tcG9uZW50RXZlbnRzLiBmaXJlQ29tcG9uZW50RXZlbnQoXCJvbkFjdGlvblBlcmZvcm1lZFwiLCB7fSk7XG5cdH07XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0Ly8gPGRpdj5UaGlzIGlzIFZhbHZlPC9kaXY+XG5cdFx0PFZhbHZlTXBDb21wb3VuZC5Sb290XG5cdFx0Y29tcG9uZW50UHJvcHM9e3RoaXMucHJvcHN9XG5cdFx0dmFsdmVQcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHRvbkFjdGlvblBlcmZvcm1lZD17dGhpcy5vbkFjdGlvblBlcmZvcm1lZH1cblx0XHQgPlxuXHRcdFx0ICA8VmFsdmVNcENvbXBvdW5kLnZhbHZlIC8+XG5cdFx0XHQgIDxWYWx2ZU1wQ29tcG91bmQucG9wb3ZlciBhbmNob3JFbD17dGhpcy52YWx2ZVJlZi5jdXJyZW50fSAvPlxuXHRcdCA8L1ZhbHZlTXBDb21wb3VuZC5Sb290PlxuXHQpXG59XG59XG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIFZhbHZlTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBWYWx2ZTtcblx0fVxuXG5cdGdldERlZmF1bHRTaXplKCk6IFNpemVPYmplY3Qge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMjQsXG5cdFx0XHRoZWlnaHQ6IDQ4LFxuXHRcdH07XG5cdH1cblxuXHQvLyBJbnZva2VkIHdoZW4gYW4gdXBkYXRlIHRvIHRoZSBQcm9wZXJ0eVRyZWUgaGFzIG9jY3VycmVkLFxuXHQvLyBlZmZlY3RpdmVseSBtYXBwaW5nIHRoZSB2YWx2ZVN0YXR1cyBvZiB0aGUgdHJlZSB0byBjb21wb25lbnQgcHJvcHMuXG5cdGdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBWYWx2ZVByb3BzIHtcblx0XHRjb25zb2xlLmxvZyhcIlZhbHZlU3RhdHVzXCIsIHRyZWUucmVhZChcIlZhbHZlU3RhdHVzXCIpKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0VmFsdmVTdGF0dXM6IHtcblx0XHRcdFx0YWxhcm06IHRyZWUucmVhZEJvb2xlYW4oXCJWYWx2ZVN0YXR1cy5hbGFybVwiLCBmYWxzZSksXG5cdFx0XHRcdGFjdEZCOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMuYWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRkZUFjdEZCOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMuZGVBY3RGQlwiLCBmYWxzZSksXG5cdFx0XHRcdGFjdGl2YXRlZENvbmZpZzogdHJlZS5yZWFkTnVtYmVyKFwiVmFsdmVTdGF0dXMuYWN0aXZhdGVkQ29uZmlnXCIsIDYpLFxuXHRcdFx0XHRkZWFjdGl2YXRlZENvbmZpZzogdHJlZS5yZWFkTnVtYmVyKFwiVmFsdmVTdGF0dXMuZGVhY3RpdmF0ZWRDb25maWdcIiwgMCksXG5cdFx0XHRcdGl0ZW1OYW1lOiB0cmVlLnJlYWRTdHJpbmcoXCJWYWx2ZVN0YXR1cy5pdGVtTmFtZVwiLCBcIlwiKSxcblx0XHRcdFx0bWFudWFsOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMubWFudWFsXCIsIGZhbHNlKSxcblx0XHRcdFx0bWFza2VkOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMubWFza2VkXCIsIGZhbHNlKSxcblx0XHRcdFx0Y2hhbmdpbmc6IHRyZWUucmVhZEJvb2xlYW4oXCJWYWx2ZVN0YXR1cy5jaGFuZ2luZ1wiLCBmYWxzZSksXG5cdFx0XHRcdGxvY2F0ZTogdHJlZS5yZWFkQm9vbGVhbihcIlZhbHZlU3RhdHVzLmxvY2F0ZVwiLCBmYWxzZSksXG5cdFx0XHRcdHVzbDogdHJlZS5yZWFkQm9vbGVhbihcIlZhbHZlU3RhdHVzLnVzbFwiLCBmYWxzZSksXG5cdFx0XHRcdGxzbDogdHJlZS5yZWFkQm9vbGVhbihcIlZhbHZlU3RhdHVzLmxzbFwiLCBmYWxzZSksXG5cblx0XHRcdH0sXG5cdFx0XHRzaG93SXRlbUlkOiB0cmVlLnJlYWRCb29sZWFuKFwic2hvd0l0ZW1JZFwiLCBmYWxzZSksXG5cdFx0XHRpdGVtSWRQb3NpdGlvbjogdHJlZS5yZWFkU3RyaW5nKFwiaXRlbUlkUG9zaXRpb25cIiwgXCJ0b3AtbGVmdFwiKSxcblx0XHR9O1xuXHR9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHtcblx0VmFsdmVDb21wb3VuZENvbnRleHRUeXBlLFxuXHRWYWx2ZUNvbXBvdW5kUm9vdFByb3BzLFxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VWYWx2ZVJlZHVjZXIgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2hvb2tzXCI7XG5pbXBvcnQgeyBnZXRJdGVtSWRQb3NpdGlvbkNsYXNzTmFtZSwgZ2V0VmFsdmVNcEl0ZW1DbGFzc05hbWUsIHZhbHZlTXBJdGVtTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3V0aWxzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vdmFsdmUvaXRlbVwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyBWQUxWRV9DT01QT05FTlRfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9hcGkvdHlwZXNcIjtcblxuLy8gaW1wb3J0ICcuL3ZhbHZlLW1wLm1vZHVsZS5jc3MnXG4vLyBpbXBvcnQge3ZhbHZlU3RhdHVzfSBmcm9tICcuLi8uLi9hcGkvaW5pdGlhbFN0YXRlJ1xuY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBWQUxWRV9DT01QT05FTlRfVFlQRTtcblxuLy8gaW1wb3J0IHt2YWx2ZVN0YXR1c30gZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmV4cG9ydCBjb25zdCBbVmFsdmVDb250ZXh0UHJvdmlkZXIsIHVzZVZhbHZlQ29udGV4dF0gPVxuXHR1c2VDcmVhdGVDb250ZXh0PFZhbHZlQ29tcG91bmRDb250ZXh0VHlwZT4oXCJWYWx2ZU1wQ29tcG91bmRcIik7XG5cbmNvbnN0IFJvb3QgPSAoe1xuXHRjb21wb25lbnRQcm9wcyxcblx0dmFsdmVQcm9wcyxcblx0b25BY3Rpb25QZXJmb3JtZWQsXG5cdGNoaWxkcmVuLFxufTogVmFsdmVDb21wb3VuZFJvb3RQcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxWYWx2ZUNvbnRleHRQcm92aWRlclxuXHRcdFx0ey4uLntcblx0XHRcdFx0dmFsdmVQcm9wcyxcblx0XHRcdFx0Y29tcG9uZW50UHJvcHMsXG5cdFx0XHRcdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRcdFx0XHR1c2VWYWx2ZVJlZHVjZXIsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L1ZhbHZlQ29udGV4dFByb3ZpZGVyPlxuXHQpO1xufTtcbmNvbnN0IHZhbHZlID0gKCkgPT4ge1xuXHRjb25zdCB7IHZhbHZlUHJvcHMsIG9uQWN0aW9uUGVyZm9ybWVkLCBjb21wb25lbnRQcm9wcyB9ID1cblx0XHR1c2VWYWx2ZUNvbnRleHQoXCJWYWx2ZVwiKTtcblx0XHRjb25zdCB2YWx2ZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblx0Y29uc3QgeyBwb3NpdGlvbiwgZW1pdCB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGNvbnN0IHsgVmFsdmVTdGF0dXMgfSA9IHZhbHZlUHJvcHM7XG5cdGNvbnN0IGluQ29vcmQgPSBwb3NpdGlvbj8ueCA/PyBmYWxzZTtcblx0Ly8gaWYgbm90IGxvY2F0ZSwgdHJpbSBsYXN0IGl0ZW0gZnJvbSB2YWx2ZU1wSXRlbU5hbWVzXG5cdGxldCBjb21wb25lbnRJdGVtTmFtZXMgPSB2YWx2ZU1wSXRlbU5hbWVzO1xuXHRpZiAoIVZhbHZlU3RhdHVzPy5sb2NhdGUpIHtcblx0XHRjb21wb25lbnRJdGVtTmFtZXMgPSBjb21wb25lbnRJdGVtTmFtZXMuc2xpY2UoMCwgLTEpO1xuXHR9XG5cblx0aWYgKCFpbkNvb3JkKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdHJlZj17dmFsdmVSZWZ9XG5cdFx0XHR7Li4uZW1pdCh7XG5cdFx0XHRcdGNsYXNzZXM6IFtgaG1pLWNvbXBvbmVudCBobWktY29tcG9uZW50X19jb2x1bW4gYF0sXG5cdFx0XHR9KX1cblx0XHRcdFx0ZGF0YS1jb21wb25lbnQ9e0NPTVBPTkVOVF9UWVBFfVxuXHRcdFx0XHRvbkNsaWNrPXtvbkFjdGlvblBlcmZvcm1lZH1cblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJobWktY29tcG9uZW50X19yb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhtaS1jb21wb25lbnQtdmFsdmVfX21wXCI+XG5cdFx0XHRcdFx0XHR7Y29tcG9uZW50SXRlbU5hbWVzLm1hcChcblx0XHRcdFx0XHRcdFx0KHsgdmFsdWUsIGluZGV4LCBrZXkgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKFxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0YHJlLXJlbmRlcmVkICxrZXkgJHtrZXl9IHZhbHVlICR7dmFsdWV9IGluZGV4ICR7aW5kZXh9YFxuXHRcdFx0XHRcdFx0XHRcdC8vICksXG5cdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0PEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW1DbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSArIFwiIFwiICsgZ2V0VmFsdmVNcEl0ZW1DbGFzc05hbWUoaW5kZXgsIFZhbHZlU3RhdHVzKVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRyZWY9e3ZhbHZlUmVmfVxuXHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRjbGFzc2VzOiBbYGhtaS1jb21wb25lbnQgaG1pLWNvbXBvbmVudC12YWx2ZV9fbXAgYF0sXG5cdFx0XHR9KX1cblx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHRcdG9uQ2xpY2s9e29uQWN0aW9uUGVyZm9ybWVkfVxuXHRcdFx0PlxuXHRcdFx0XHR7Y29tcG9uZW50SXRlbU5hbWVzLm1hcChcblx0XHRcdFx0XHQoeyB2YWx1ZSwgaW5kZXgsIGtleSB9KSA9PiAoXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRcdC8vIFx0YHJlLXJlbmRlcmVkICxrZXkgJHtrZXl9IHZhbHVlICR7dmFsdWV9IGluZGV4ICR7aW5kZXh9YFxuXHRcdFx0XHRcdFx0Ly8gKSxcblx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0PEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlICsgXCIgXCIgKyBnZXRWYWx2ZU1wSXRlbUNsYXNzTmFtZShpbmRleCwgVmFsdmVTdGF0dXMpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn07XG5cbmNvbnN0IHBvcG92ZXIgPSAoeyBhbmNob3JFbCB9OiB7IGFuY2hvckVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgfSkgPT4ge1xuXHRjb25zdCB7IHZhbHZlUHJvcHMsIGNvbXBvbmVudFByb3BzIH0gPSB1c2VWYWx2ZUNvbnRleHQoXCJQb3BvdmVyXCIpO1xuICAgIGNvbnN0IHsgc2hvd0l0ZW1JZCxpdGVtSWRQb3NpdGlvbiwgVmFsdmVTdGF0dXMgfSA9IHZhbHZlUHJvcHM7XG5cdGlmICghc2hvd0l0ZW1JZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gY29tcG9uZW50UHJvcHM7XG5cdGxldCBjbGFzc05hbWUgPSBcIml0ZW1JZCBwb3BvdmVyIHBvc2l0aW9uLWxlZnRcIjtcblx0aWYgKGl0ZW1JZFBvc2l0aW9uKSB7XG5cdFx0Y2xhc3NOYW1lID0gZ2V0SXRlbUlkUG9zaXRpb25DbGFzc05hbWUoY2xhc3NOYW1lLCBpdGVtSWRQb3NpdGlvbilcblx0fVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGVmdDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT57VmFsdmVTdGF0dXM/Lml0ZW1OYW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuXG5leHBvcnQgY29uc3QgVmFsdmVNcENvbXBvdW5kID0ge1xuXHRSb290LFxuXHR2YWx2ZSxcblx0cG9wb3Zlcixcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vaW1wb3J0IFwiLi9pdGVtLm1vZHVsZS5jc3NcIjtcblxuaW50ZXJmYWNlIEl0ZW1Qcm9wcyB7XG5cdGl0ZW1DbGFzc05hbWU6IHN0cmluZztcblx0aGFuZGxlQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xufVxuLy8gY29uc3QgYml0ID0gKG46IG51bWJlciwgaTogbnVtYmVyKTogbnVtYmVyID0+IHtcbi8vIFx0cmV0dXJuIChuID4+IGkpICYgMTtcbi8vIH07XG5jb25zdCBJdGVtOiBSZWFjdC5GQzxJdGVtUHJvcHM+ID0gKHsgaXRlbUNsYXNzTmFtZSwgaGFuZGxlQ2xpY2sgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17aXRlbUNsYXNzTmFtZX1cblx0b25DbGljaz17aGFuZGxlQ2xpY2t9PjwvZGl2Pjtcbn07XG5JdGVtLmRpc3BsYXlOYW1lID0gXCJJdGVtXCI7XG5leHBvcnQgZGVmYXVsdCBJdGVtO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb250ZXh0PENvbnRleHRWYWx1ZVR5cGUgZXh0ZW5kcyBvYmplY3QgfCBudWxsPihcbiAgcm9vdENvbXBvbmVudE5hbWU6IHN0cmluZyxcbiAgZGVmYXVsdENvbnRleHQ/OiBDb250ZXh0VmFsdWVUeXBlXG4pIHtcbiAgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q29udGV4dFZhbHVlVHlwZSB8IHVuZGVmaW5lZD4oXG4gICAgZGVmYXVsdENvbnRleHRcbiAgKTtcblxuICBjb25zdCBQcm92aWRlcjogUmVhY3QuRkM8Q29udGV4dFZhbHVlVHlwZSAmIHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9IChcbiAgICBwcm9wc1xuICApID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5jb250ZXh0IH0gPSBwcm9wcztcbiAgICAvLyBPbmx5IHJlLW1lbW9pemUgd2hlbiBwcm9wIHZhbHVlcyBjaGFuZ2VcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgY29uc3QgdmFsdWUgPSBSZWFjdC51c2VNZW1vKFxuICAgICAgKCkgPT4gY29udGV4dCxcbiAgICAgIE9iamVjdC52YWx1ZXMoY29udGV4dClcbiAgICApIGFzIENvbnRleHRWYWx1ZVR5cGU7XG4gICAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XG4gIH07XG5cbiAgUHJvdmlkZXIuZGlzcGxheU5hbWUgPSByb290Q29tcG9uZW50TmFtZSArIFwiUHJvdmlkZXJcIjtcblxuICBmdW5jdGlvbiB1c2VDb250ZXh0KGNvbnN1bWVyTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgaWYgKGNvbnRleHQpIHJldHVybiBjb250ZXh0O1xuICAgIGlmIChkZWZhdWx0Q29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZGVmYXVsdENvbnRleHQ7XG4gICAgLy8gaWYgYSBkZWZhdWx0Q29udGV4dCB3YXNuJ3Qgc3BlY2lmaWVkLCBpdCdzIGEgcmVxdWlyZWQgY29udGV4dC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgXFxgJHtjb25zdW1lck5hbWV9XFxgIG11c3QgYmUgdXNlZCB3aXRoaW4gXFxgJHtyb290Q29tcG9uZW50TmFtZX1cXGBgXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBbUHJvdmlkZXIsIHVzZUNvbnRleHRdIGFzIGNvbnN0O1xufVxuIiwiLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgbnVtYmVyc1xuICovXG5cbi8qKlxuICogVXNpbmcgdGhlIGJpbmFyeSByZXByZXNlbnRhdGlvbiBvZiBuLCBhbiBJbnRlZ2VyLCByZXR1cm5zIHRoZSBib29sZWFuXG4gKiB2YWx1ZSBhdCBpbmRleCwgaS5cbiAqIEBwYXJhbSBuIGEgbnVtYmVyIGlzIGltcGxpY2l0eSBjb252ZXJ0ZXIgdG8gYSAzMmJpdCBpbnRlZ2VyLCBieSB0aGUgYml0d2lzZSBvcGVyYXRvcnNcbiAqIEBwYXJhbSBpIGlzIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgYml0IHBvc2l0aW9uIHRvIGJlIHRlc3RlZFxuICogQHJldHVybnMgdGhlIGJvb2xlYW4gdmFsdWUgb2YgdGhlIGJpdCBhdCBpbmRleCBpLlxuICovXG5leHBvcnQgY29uc3QgZ2V0Qm9vbEF0SW5kZXggPSAobjogbnVtYmVyLCBpOiBudW1iZXIpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIEJvb2xlYW4oKG4gPj4gaSkgJiAxKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2luZHVjdGl2ZWF1dG9tYXRpb25fcGVyc3BlY3RpdmVfY2xpZW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENvbXBvbmVudE1ldGEsIENvbXBvbmVudFJlZ2lzdHJ5IH0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50Jztcbi8vaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25NZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL0J1dHRvbic7XG4vL2ltcG9ydCB7IFZhbHZlLCBWYWx2ZU1ldGEgfSBmcm9tIFwiLi9jb21wb25lbnRzL1ZhbHZlXCI7XG5pbXBvcnQgeyBWYWx2ZSwgVmFsdmVNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL1ZhbHZlJztcbmltcG9ydCB7IFBhcmFtZXRlckxpc3RDb21wb25lbnQsIFBhcmFtZXRlckxpc3RDb21wb25lbnRNZXRhfSBmcm9tICcuL2NvbXBvbmVudHMvUGFyYW1ldGVyTGlzdCdcblxuLy8gRXhwb3J0IGNvbXBvbmVudHMgZm9yIGV4dGVybmFsIHJlZmVyZW5jZVxuZXhwb3J0IHtcblx0VmFsdmUgLFxuXHRQYXJhbWV0ZXJMaXN0Q29tcG9uZW50LFxuXHR9O1xuXG4vLyBJbXBvcnQgY29tcG9uZW50IHN0eWxlc1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbi8vIEFycmF5IG9mIGNvbXBvbmVudCBtZXRhZGF0YVxuY29uc3QgY29tcG9uZW50czogQXJyYXk8Q29tcG9uZW50TWV0YT4gPSBbXG5cdG5ldyBWYWx2ZU1ldGEoKSxcblx0bmV3IFBhcmFtZXRlckxpc3RDb21wb25lbnRNZXRhKCksXG5dO1xuXG4vLyBSZWdpc3RlciBlYWNoIGNvbXBvbmVudCB3aXRoIHRoZSBQZXJzcGVjdGl2ZSBDb21wb25lbnRSZWdpc3RyeVxuY29tcG9uZW50cy5mb3JFYWNoKChjOiBDb21wb25lbnRNZXRhKSA9PiBDb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlcihjKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=