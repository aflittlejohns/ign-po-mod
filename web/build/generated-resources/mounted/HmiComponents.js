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
            placeholder: "",
            editable: true,
            pattern: "^[0-9]*[.,]?[0-9]*$",
            min: 0,
            max: 100,
            decimalPlaces: 2,
            eu: "",
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


/***/ }),

/***/ "./src/api/utils.ts":
/*!**************************!*\
  !*** ./src/api/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.valveMpItemNames = exports.itemNames = exports.getValveMpItemClassName = exports.getItemClassName = void 0;
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
        const { input } = param;
        console.log(input.value);
        return (React.createElement("label", { key: index, className: "field" },
            React.createElement("span", { className: "label" }, "Numeric"),
            React.createElement("input", { type: "text", inputMode: "numeric", pattern: "[0-9]*", placeholder: "Placeholder", 
                // value={input.value}
                onChange: (e) => {
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
        console.log("parameters", tree.read("parameters"));
        return {
            parameters: tree.read('parameters')
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
            showItemId: tree.readBoolean("ItemId", false)
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
    const { showItemId, ValveStatus } = valveProps;
    const { position } = componentProps;
    console.log(`Position.x: ${position.x}`);
    console.log(`showItemId: ${showItemId}`);
    if (!showItemId)
        return null;
    console.log(`showItemId after if: ${showItemId}`);
    return (React.createElement("div", { className: "itemId popover", style: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG1pQ29tcG9uZW50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFxQztBQUNsRDtBQUNBO0FBQ0EsOEJBQThCLE9BQU8sa0ZBQWtGLE9BQU87QUFDOUgsR0FBRztBQUNIO0FBQ0EsaUtBQWlLLE1BQU07QUFDdkssR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFFO0FBQ047QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQztBQUNBO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXLElBQUksaUJBQWlCO0FBQ3JFO0FBQ0EsdUJBQXVCLG1CQUFtQixvQkFBb0IsMkRBQTJELElBQUk7QUFDN0g7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsMklBQTJGO0FBQzNGLDJEQUEyRDtBQUMzRCx3REFBd0Q7QUFDeEQsNEZBQXNEO0FBS3JELHVGQUxRLGFBQUssUUFLUjtBQUpOLG9IQUE4RjtBQUs3Rix3R0FMUSxzQ0FBc0IsUUFLUjtBQUd2QiwwQkFBMEI7QUFDMUIsMERBQXFCO0FBRXJCLDhCQUE4QjtBQUM5QixNQUFNLFVBQVUsR0FBeUI7SUFDeEMsSUFBSSxpQkFBUyxFQUFFO0lBQ2YsSUFBSSwwQ0FBMEIsRUFBRTtDQUNoQyxDQUFDO0FBRUYsaUVBQWlFO0FBQ2pFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFnQixFQUFFLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0htaUNvbXBvbmVudHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9janMvaW1tZXIuY2pzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91c2UtaW1tZXIvZGlzdC91c2UtaW1tZXIuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbWF4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92MVRvVjYuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY2pzLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y1LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y2LmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2Nqcy1icm93c2VyL3Y2VG9WMS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92Ny5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9janMtYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXBpL2hvb2tzLnRzIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvYXBpL2luaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS90eXBlcy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2FwaS91dGlscy50cyIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvUGFyYW1ldGVyTGlzdC50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1ZhbHZlLnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvcHJvY2Vzcy1vYmplY3RzL3ZhbHZlLW1wL1ZhbHZlTXAudHN4Iiwid2VicGFjazovL0htaUNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9wcm9jZXNzLW9iamVjdHMvdmFsdmUvaXRlbS50c3giLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy8uL3NyYy91dGlscy9jcmVhdGVDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL3V0aWxzL251bWJlclV0aWwudHMiLCJ3ZWJwYWNrOi8vSG1pQ29tcG9uZW50cy9leHRlcm5hbCB1bWQgXCJQZXJzcGVjdGl2ZUNsaWVudFwiIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvZXh0ZXJuYWwgdW1kIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0htaUNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9IbWlDb21wb25lbnRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlBlcnNwZWN0aXZlQ2xpZW50XCIpLCByZXF1aXJlKFwiUmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJIbWlDb21wb25lbnRzXCIsIFtcIlBlcnNwZWN0aXZlQ2xpZW50XCIsIFwiUmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSG1pQ29tcG9uZW50c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcIlBlcnNwZWN0aXZlQ2xpZW50XCIpLCByZXF1aXJlKFwiUmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhtaUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJQZXJzcGVjdGl2ZUNsaWVudFwiXSwgcm9vdFtcIlJlYWN0XCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pbmR1Y3RpdmVhdXRvbWF0aW9uX3BlcnNwZWN0aXZlX2NsaWVudF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbW1lci50c1xudmFyIGltbWVyX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KGltbWVyX2V4cG9ydHMsIHtcbiAgSW1tZXI6ICgpID0+IEltbWVyMixcbiAgYXBwbHlQYXRjaGVzOiAoKSA9PiBhcHBseVBhdGNoZXMsXG4gIGNhc3REcmFmdDogKCkgPT4gY2FzdERyYWZ0LFxuICBjYXN0SW1tdXRhYmxlOiAoKSA9PiBjYXN0SW1tdXRhYmxlLFxuICBjcmVhdGVEcmFmdDogKCkgPT4gY3JlYXRlRHJhZnQsXG4gIGN1cnJlbnQ6ICgpID0+IGN1cnJlbnQsXG4gIGVuYWJsZU1hcFNldDogKCkgPT4gZW5hYmxlTWFwU2V0LFxuICBlbmFibGVQYXRjaGVzOiAoKSA9PiBlbmFibGVQYXRjaGVzLFxuICBmaW5pc2hEcmFmdDogKCkgPT4gZmluaXNoRHJhZnQsXG4gIGZyZWV6ZTogKCkgPT4gZnJlZXplLFxuICBpbW1lcmFibGU6ICgpID0+IERSQUZUQUJMRSxcbiAgaXNEcmFmdDogKCkgPT4gaXNEcmFmdCxcbiAgaXNEcmFmdGFibGU6ICgpID0+IGlzRHJhZnRhYmxlLFxuICBub3RoaW5nOiAoKSA9PiBOT1RISU5HLFxuICBvcmlnaW5hbDogKCkgPT4gb3JpZ2luYWwsXG4gIHByb2R1Y2U6ICgpID0+IHByb2R1Y2UsXG4gIHByb2R1Y2VXaXRoUGF0Y2hlczogKCkgPT4gcHJvZHVjZVdpdGhQYXRjaGVzLFxuICBzZXRBdXRvRnJlZXplOiAoKSA9PiBzZXRBdXRvRnJlZXplLFxuICBzZXRVc2VTdHJpY3RTaGFsbG93Q29weTogKCkgPT4gc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHlcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoaW1tZXJfZXhwb3J0cyk7XG5cbi8vIHNyYy91dGlscy9lbnYudHNcbnZhciBOT1RISU5HID0gU3ltYm9sLmZvcihcImltbWVyLW5vdGhpbmdcIik7XG52YXIgRFJBRlRBQkxFID0gU3ltYm9sLmZvcihcImltbWVyLWRyYWZ0YWJsZVwiKTtcbnZhciBEUkFGVF9TVEFURSA9IFN5bWJvbC5mb3IoXCJpbW1lci1zdGF0ZVwiKTtcblxuLy8gc3JjL3V0aWxzL2Vycm9ycy50c1xudmFyIGVycm9ycyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFtcbiAgLy8gQWxsIGVycm9yIGNvZGVzLCBzdGFydGluZyBieSAwOlxuICBmdW5jdGlvbihwbHVnaW4pIHtcbiAgICByZXR1cm4gYFRoZSBwbHVnaW4gZm9yICcke3BsdWdpbn0nIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBcXGBlbmFibGUke3BsdWdpbn0oKVxcYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLmA7XG4gIH0sXG4gIGZ1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIGBwcm9kdWNlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGluZ3MgdGhhdCBhcmUgZHJhZnRhYmxlOiBwbGFpbiBvYmplY3RzLCBhcnJheXMsIE1hcCwgU2V0IG9yIGNsYXNzZXMgdGhhdCBhcmUgbWFya2VkIHdpdGggJ1tpbW1lcmFibGVdOiB0cnVlJy4gR290ICcke3RoaW5nfSdgO1xuICB9LFxuICBcIlRoaXMgb2JqZWN0IGhhcyBiZWVuIGZyb3plbiBhbmQgc2hvdWxkIG5vdCBiZSBtdXRhdGVkXCIsXG4gIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgdXNlIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkLiBEaWQgeW91IHBhc3MgYW4gb2JqZWN0IGZyb20gaW5zaWRlIGFuIGltbWVyIGZ1bmN0aW9uIHRvIGFuIGFzeW5jIHByb2Nlc3M/IFwiICsgZGF0YTtcbiAgfSxcbiAgXCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiLFxuICBcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLFxuICBcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLFxuICBcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiLFxuICBcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIixcbiAgXCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsXG4gIGZ1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIGAnY3VycmVudCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6ICR7dGhpbmd9YDtcbiAgfSxcbiAgXCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuICBcIk9iamVjdC5zZXRQcm90b3R5cGVPZigpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsXG4gIFwiSW1tZXIgb25seSBzdXBwb3J0cyBkZWxldGluZyBhcnJheSBpbmRpY2VzXCIsXG4gIFwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLFxuICBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBgJ29yaWdpbmFsJyBleHBlY3RzIGEgZHJhZnQsIGdvdDogJHt0aGluZ31gO1xuICB9XG4gIC8vIE5vdGU6IGlmIG1vcmUgZXJyb3JzIGFyZSBhZGRlZCwgdGhlIGVycm9yT2Zmc2V0IGluIFBhdGNoZXMudHMgc2hvdWxkIGJlIGluY3JlYXNlZFxuICAvLyBTZWUgUGF0Y2hlcy50cyBmb3IgYWRkaXRpb25hbCBlcnJvcnNcbl0gOiBbXTtcbmZ1bmN0aW9uIGRpZShlcnJvciwgLi4uYXJncykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc3QgZSA9IGVycm9yc1tlcnJvcl07XG4gICAgY29uc3QgbXNnID0gdHlwZW9mIGUgPT09IFwiZnVuY3Rpb25cIiA/IGUuYXBwbHkobnVsbCwgYXJncykgOiBlO1xuICAgIHRocm93IG5ldyBFcnJvcihgW0ltbWVyXSAke21zZ31gKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFtJbW1lcl0gbWluaWZpZWQgZXJyb3IgbnI6ICR7ZXJyb3J9LiBGdWxsIGVycm9yIGF0OiBodHRwczovL2JpdC5seS8zY1hFS1dmYFxuICApO1xufVxuXG4vLyBzcmMvdXRpbHMvY29tbW9uLnRzXG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5mdW5jdGlvbiBpc0RyYWZ0KHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmICEhdmFsdWVbRFJBRlRfU1RBVEVdO1xufVxuZnVuY3Rpb24gaXNEcmFmdGFibGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSB8fCAhIXZhbHVlW0RSQUZUQUJMRV0gfHwgISF2YWx1ZS5jb25zdHJ1Y3Rvcj8uW0RSQUZUQUJMRV0gfHwgaXNNYXAodmFsdWUpIHx8IGlzU2V0KHZhbHVlKTtcbn1cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci50b1N0cmluZygpO1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIilcbiAgICByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0gZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBDdG9yID0gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIGlmIChDdG9yID09PSBPYmplY3QpXG4gICAgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSBcImZ1bmN0aW9uXCIgJiYgRnVuY3Rpb24udG9TdHJpbmcuY2FsbChDdG9yKSA9PT0gb2JqZWN0Q3RvclN0cmluZztcbn1cbmZ1bmN0aW9uIG9yaWdpbmFsKHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdCh2YWx1ZSkpXG4gICAgZGllKDE1LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZVtEUkFGVF9TVEFURV0uYmFzZV87XG59XG5mdW5jdGlvbiBlYWNoKG9iaiwgaXRlcikge1xuICBpZiAoZ2V0QXJjaHR5cGUob2JqKSA9PT0gMCAvKiBPYmplY3QgKi8pIHtcbiAgICBSZWZsZWN0Lm93bktleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGl0ZXIoa2V5LCBvYmpba2V5XSwgb2JqKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmouZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiBpdGVyKGluZGV4LCBlbnRyeSwgb2JqKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEFyY2h0eXBlKHRoaW5nKSB7XG4gIGNvbnN0IHN0YXRlID0gdGhpbmdbRFJBRlRfU1RBVEVdO1xuICByZXR1cm4gc3RhdGUgPyBzdGF0ZS50eXBlXyA6IEFycmF5LmlzQXJyYXkodGhpbmcpID8gMSAvKiBBcnJheSAqLyA6IGlzTWFwKHRoaW5nKSA/IDIgLyogTWFwICovIDogaXNTZXQodGhpbmcpID8gMyAvKiBTZXQgKi8gOiAwIC8qIE9iamVjdCAqLztcbn1cbmZ1bmN0aW9uIGhhcyh0aGluZywgcHJvcCkge1xuICByZXR1cm4gZ2V0QXJjaHR5cGUodGhpbmcpID09PSAyIC8qIE1hcCAqLyA/IHRoaW5nLmhhcyhwcm9wKSA6IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGluZywgcHJvcCk7XG59XG5mdW5jdGlvbiBnZXQodGhpbmcsIHByb3ApIHtcbiAgcmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gMiAvKiBNYXAgKi8gPyB0aGluZy5nZXQocHJvcCkgOiB0aGluZ1twcm9wXTtcbn1cbmZ1bmN0aW9uIHNldCh0aGluZywgcHJvcE9yT2xkVmFsdWUsIHZhbHVlKSB7XG4gIGNvbnN0IHQgPSBnZXRBcmNodHlwZSh0aGluZyk7XG4gIGlmICh0ID09PSAyIC8qIE1hcCAqLylcbiAgICB0aGluZy5zZXQocHJvcE9yT2xkVmFsdWUsIHZhbHVlKTtcbiAgZWxzZSBpZiAodCA9PT0gMyAvKiBTZXQgKi8pIHtcbiAgICB0aGluZy5hZGQodmFsdWUpO1xuICB9IGVsc2VcbiAgICB0aGluZ1twcm9wT3JPbGRWYWx1ZV0gPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuZnVuY3Rpb24gaXNNYXAodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBNYXA7XG59XG5mdW5jdGlvbiBpc1NldCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIFNldDtcbn1cbmZ1bmN0aW9uIGxhdGVzdChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUuY29weV8gfHwgc3RhdGUuYmFzZV87XG59XG5mdW5jdGlvbiBzaGFsbG93Q29weShiYXNlLCBzdHJpY3QpIHtcbiAgaWYgKGlzTWFwKGJhc2UpKSB7XG4gICAgcmV0dXJuIG5ldyBNYXAoYmFzZSk7XG4gIH1cbiAgaWYgKGlzU2V0KGJhc2UpKSB7XG4gICAgcmV0dXJuIG5ldyBTZXQoYmFzZSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZSkpXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJhc2UpO1xuICBjb25zdCBpc1BsYWluID0gaXNQbGFpbk9iamVjdChiYXNlKTtcbiAgaWYgKHN0cmljdCA9PT0gdHJ1ZSB8fCBzdHJpY3QgPT09IFwiY2xhc3Nfb25seVwiICYmICFpc1BsYWluKSB7XG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhiYXNlKTtcbiAgICBkZWxldGUgZGVzY3JpcHRvcnNbRFJBRlRfU1RBVEVdO1xuICAgIGxldCBrZXlzID0gUmVmbGVjdC5vd25LZXlzKGRlc2NyaXB0b3JzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBjb25zdCBkZXNjID0gZGVzY3JpcHRvcnNba2V5XTtcbiAgICAgIGlmIChkZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgICAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgZGVzYy5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KVxuICAgICAgICBkZXNjcmlwdG9yc1trZXldID0ge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAvLyBjb3VsZCBsaXZlIHdpdGggISFkZXNjLnNldCBhcyB3ZWxsIGhlcmUuLi5cbiAgICAgICAgICBlbnVtZXJhYmxlOiBkZXNjLmVudW1lcmFibGUsXG4gICAgICAgICAgdmFsdWU6IGJhc2Vba2V5XVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShnZXRQcm90b3R5cGVPZihiYXNlKSwgZGVzY3JpcHRvcnMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHByb3RvID0gZ2V0UHJvdG90eXBlT2YoYmFzZSk7XG4gICAgaWYgKHByb3RvICE9PSBudWxsICYmIGlzUGxhaW4pIHtcbiAgICAgIHJldHVybiB7IC4uLmJhc2UgfTtcbiAgICB9XG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShwcm90byk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ob2JqLCBiYXNlKTtcbiAgfVxufVxuZnVuY3Rpb24gZnJlZXplKG9iaiwgZGVlcCA9IGZhbHNlKSB7XG4gIGlmIChpc0Zyb3plbihvYmopIHx8IGlzRHJhZnQob2JqKSB8fCAhaXNEcmFmdGFibGUob2JqKSlcbiAgICByZXR1cm4gb2JqO1xuICBpZiAoZ2V0QXJjaHR5cGUob2JqKSA+IDEpIHtcbiAgICBvYmouc2V0ID0gb2JqLmFkZCA9IG9iai5jbGVhciA9IG9iai5kZWxldGUgPSBkb250TXV0YXRlRnJvemVuQ29sbGVjdGlvbnM7XG4gIH1cbiAgT2JqZWN0LmZyZWV6ZShvYmopO1xuICBpZiAoZGVlcClcbiAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4gZnJlZXplKHZhbHVlLCB0cnVlKSk7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBkb250TXV0YXRlRnJvemVuQ29sbGVjdGlvbnMoKSB7XG4gIGRpZSgyKTtcbn1cbmZ1bmN0aW9uIGlzRnJvemVuKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmlzRnJvemVuKG9iaik7XG59XG5cbi8vIHNyYy91dGlscy9wbHVnaW5zLnRzXG52YXIgcGx1Z2lucyA9IHt9O1xuZnVuY3Rpb24gZ2V0UGx1Z2luKHBsdWdpbktleSkge1xuICBjb25zdCBwbHVnaW4gPSBwbHVnaW5zW3BsdWdpbktleV07XG4gIGlmICghcGx1Z2luKSB7XG4gICAgZGllKDAsIHBsdWdpbktleSk7XG4gIH1cbiAgcmV0dXJuIHBsdWdpbjtcbn1cbmZ1bmN0aW9uIGxvYWRQbHVnaW4ocGx1Z2luS2V5LCBpbXBsZW1lbnRhdGlvbikge1xuICBpZiAoIXBsdWdpbnNbcGx1Z2luS2V5XSlcbiAgICBwbHVnaW5zW3BsdWdpbktleV0gPSBpbXBsZW1lbnRhdGlvbjtcbn1cblxuLy8gc3JjL2NvcmUvc2NvcGUudHNcbnZhciBjdXJyZW50U2NvcGU7XG5mdW5jdGlvbiBnZXRDdXJyZW50U2NvcGUoKSB7XG4gIHJldHVybiBjdXJyZW50U2NvcGU7XG59XG5mdW5jdGlvbiBjcmVhdGVTY29wZShwYXJlbnRfLCBpbW1lcl8pIHtcbiAgcmV0dXJuIHtcbiAgICBkcmFmdHNfOiBbXSxcbiAgICBwYXJlbnRfLFxuICAgIGltbWVyXyxcbiAgICAvLyBXaGVuZXZlciB0aGUgbW9kaWZpZWQgZHJhZnQgY29udGFpbnMgYSBkcmFmdCBmcm9tIGFub3RoZXIgc2NvcGUsIHdlXG4gICAgLy8gbmVlZCB0byBwcmV2ZW50IGF1dG8tZnJlZXppbmcgc28gdGhlIHVub3duZWQgZHJhZnQgY2FuIGJlIGZpbmFsaXplZC5cbiAgICBjYW5BdXRvRnJlZXplXzogdHJ1ZSxcbiAgICB1bmZpbmFsaXplZERyYWZ0c186IDBcbiAgfTtcbn1cbmZ1bmN0aW9uIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKSB7XG4gIGlmIChwYXRjaExpc3RlbmVyKSB7XG4gICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKTtcbiAgICBzY29wZS5wYXRjaGVzXyA9IFtdO1xuICAgIHNjb3BlLmludmVyc2VQYXRjaGVzXyA9IFtdO1xuICAgIHNjb3BlLnBhdGNoTGlzdGVuZXJfID0gcGF0Y2hMaXN0ZW5lcjtcbiAgfVxufVxuZnVuY3Rpb24gcmV2b2tlU2NvcGUoc2NvcGUpIHtcbiAgbGVhdmVTY29wZShzY29wZSk7XG4gIHNjb3BlLmRyYWZ0c18uZm9yRWFjaChyZXZva2VEcmFmdCk7XG4gIHNjb3BlLmRyYWZ0c18gPSBudWxsO1xufVxuZnVuY3Rpb24gbGVhdmVTY29wZShzY29wZSkge1xuICBpZiAoc2NvcGUgPT09IGN1cnJlbnRTY29wZSkge1xuICAgIGN1cnJlbnRTY29wZSA9IHNjb3BlLnBhcmVudF87XG4gIH1cbn1cbmZ1bmN0aW9uIGVudGVyU2NvcGUoaW1tZXIyKSB7XG4gIHJldHVybiBjdXJyZW50U2NvcGUgPSBjcmVhdGVTY29wZShjdXJyZW50U2NvcGUsIGltbWVyMik7XG59XG5mdW5jdGlvbiByZXZva2VEcmFmdChkcmFmdCkge1xuICBjb25zdCBzdGF0ZSA9IGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgaWYgKHN0YXRlLnR5cGVfID09PSAwIC8qIE9iamVjdCAqLyB8fCBzdGF0ZS50eXBlXyA9PT0gMSAvKiBBcnJheSAqLylcbiAgICBzdGF0ZS5yZXZva2VfKCk7XG4gIGVsc2VcbiAgICBzdGF0ZS5yZXZva2VkXyA9IHRydWU7XG59XG5cbi8vIHNyYy9jb3JlL2ZpbmFsaXplLnRzXG5mdW5jdGlvbiBwcm9jZXNzUmVzdWx0KHJlc3VsdCwgc2NvcGUpIHtcbiAgc2NvcGUudW5maW5hbGl6ZWREcmFmdHNfID0gc2NvcGUuZHJhZnRzXy5sZW5ndGg7XG4gIGNvbnN0IGJhc2VEcmFmdCA9IHNjb3BlLmRyYWZ0c19bMF07XG4gIGNvbnN0IGlzUmVwbGFjZWQgPSByZXN1bHQgIT09IHZvaWQgMCAmJiByZXN1bHQgIT09IGJhc2VEcmFmdDtcbiAgaWYgKGlzUmVwbGFjZWQpIHtcbiAgICBpZiAoYmFzZURyYWZ0W0RSQUZUX1NUQVRFXS5tb2RpZmllZF8pIHtcbiAgICAgIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgICAgIGRpZSg0KTtcbiAgICB9XG4gICAgaWYgKGlzRHJhZnRhYmxlKHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdCA9IGZpbmFsaXplKHNjb3BlLCByZXN1bHQpO1xuICAgICAgaWYgKCFzY29wZS5wYXJlbnRfKVxuICAgICAgICBtYXliZUZyZWV6ZShzY29wZSwgcmVzdWx0KTtcbiAgICB9XG4gICAgaWYgKHNjb3BlLnBhdGNoZXNfKSB7XG4gICAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhcbiAgICAgICAgYmFzZURyYWZ0W0RSQUZUX1NUQVRFXS5iYXNlXyxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBzY29wZS5wYXRjaGVzXyxcbiAgICAgICAgc2NvcGUuaW52ZXJzZVBhdGNoZXNfXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgYmFzZURyYWZ0LCBbXSk7XG4gIH1cbiAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuICBpZiAoc2NvcGUucGF0Y2hlc18pIHtcbiAgICBzY29wZS5wYXRjaExpc3RlbmVyXyhzY29wZS5wYXRjaGVzXywgc2NvcGUuaW52ZXJzZVBhdGNoZXNfKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0ICE9PSBOT1RISU5HID8gcmVzdWx0IDogdm9pZCAwO1xufVxuZnVuY3Rpb24gZmluYWxpemUocm9vdFNjb3BlLCB2YWx1ZSwgcGF0aCkge1xuICBpZiAoaXNGcm96ZW4odmFsdWUpKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgY29uc3Qgc3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV07XG4gIGlmICghc3RhdGUpIHtcbiAgICBlYWNoKFxuICAgICAgdmFsdWUsXG4gICAgICAoa2V5LCBjaGlsZFZhbHVlKSA9PiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgc3RhdGUsIHZhbHVlLCBrZXksIGNoaWxkVmFsdWUsIHBhdGgpXG4gICAgKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHN0YXRlLnNjb3BlXyAhPT0gcm9vdFNjb3BlKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIHN0YXRlLmJhc2VfLCB0cnVlKTtcbiAgICByZXR1cm4gc3RhdGUuYmFzZV87XG4gIH1cbiAgaWYgKCFzdGF0ZS5maW5hbGl6ZWRfKSB7XG4gICAgc3RhdGUuZmluYWxpemVkXyA9IHRydWU7XG4gICAgc3RhdGUuc2NvcGVfLnVuZmluYWxpemVkRHJhZnRzXy0tO1xuICAgIGNvbnN0IHJlc3VsdCA9IHN0YXRlLmNvcHlfO1xuICAgIGxldCByZXN1bHRFYWNoID0gcmVzdWx0O1xuICAgIGxldCBpc1NldDIgPSBmYWxzZTtcbiAgICBpZiAoc3RhdGUudHlwZV8gPT09IDMgLyogU2V0ICovKSB7XG4gICAgICByZXN1bHRFYWNoID0gbmV3IFNldChyZXN1bHQpO1xuICAgICAgcmVzdWx0LmNsZWFyKCk7XG4gICAgICBpc1NldDIgPSB0cnVlO1xuICAgIH1cbiAgICBlYWNoKFxuICAgICAgcmVzdWx0RWFjaCxcbiAgICAgIChrZXksIGNoaWxkVmFsdWUpID0+IGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBzdGF0ZSwgcmVzdWx0LCBrZXksIGNoaWxkVmFsdWUsIHBhdGgsIGlzU2V0MilcbiAgICApO1xuICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgcmVzdWx0LCBmYWxzZSk7XG4gICAgaWYgKHBhdGggJiYgcm9vdFNjb3BlLnBhdGNoZXNfKSB7XG4gICAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUGF0Y2hlc18oXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwYXRoLFxuICAgICAgICByb290U2NvcGUucGF0Y2hlc18sXG4gICAgICAgIHJvb3RTY29wZS5pbnZlcnNlUGF0Y2hlc19cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZS5jb3B5Xztcbn1cbmZ1bmN0aW9uIGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBwYXJlbnRTdGF0ZSwgdGFyZ2V0T2JqZWN0LCBwcm9wLCBjaGlsZFZhbHVlLCByb290UGF0aCwgdGFyZ2V0SXNTZXQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBjaGlsZFZhbHVlID09PSB0YXJnZXRPYmplY3QpXG4gICAgZGllKDUpO1xuICBpZiAoaXNEcmFmdChjaGlsZFZhbHVlKSkge1xuICAgIGNvbnN0IHBhdGggPSByb290UGF0aCAmJiBwYXJlbnRTdGF0ZSAmJiBwYXJlbnRTdGF0ZS50eXBlXyAhPT0gMyAvKiBTZXQgKi8gJiYgLy8gU2V0IG9iamVjdHMgYXJlIGF0b21pYyBzaW5jZSB0aGV5IGhhdmUgbm8ga2V5cy5cbiAgICAhaGFzKHBhcmVudFN0YXRlLmFzc2lnbmVkXywgcHJvcCkgPyByb290UGF0aC5jb25jYXQocHJvcCkgOiB2b2lkIDA7XG4gICAgY29uc3QgcmVzID0gZmluYWxpemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlLCBwYXRoKTtcbiAgICBzZXQodGFyZ2V0T2JqZWN0LCBwcm9wLCByZXMpO1xuICAgIGlmIChpc0RyYWZ0KHJlcykpIHtcbiAgICAgIHJvb3RTY29wZS5jYW5BdXRvRnJlZXplXyA9IGZhbHNlO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKHRhcmdldElzU2V0KSB7XG4gICAgdGFyZ2V0T2JqZWN0LmFkZChjaGlsZFZhbHVlKTtcbiAgfVxuICBpZiAoaXNEcmFmdGFibGUoY2hpbGRWYWx1ZSkgJiYgIWlzRnJvemVuKGNoaWxkVmFsdWUpKSB7XG4gICAgaWYgKCFyb290U2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHJvb3RTY29wZS51bmZpbmFsaXplZERyYWZ0c18gPCAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZpbmFsaXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSk7XG4gICAgaWYgKCghcGFyZW50U3RhdGUgfHwgIXBhcmVudFN0YXRlLnNjb3BlXy5wYXJlbnRfKSAmJiB0eXBlb2YgcHJvcCAhPT0gXCJzeW1ib2xcIiAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0T2JqZWN0LCBwcm9wKSlcbiAgICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1heWJlRnJlZXplKHNjb3BlLCB2YWx1ZSwgZGVlcCA9IGZhbHNlKSB7XG4gIGlmICghc2NvcGUucGFyZW50XyAmJiBzY29wZS5pbW1lcl8uYXV0b0ZyZWV6ZV8gJiYgc2NvcGUuY2FuQXV0b0ZyZWV6ZV8pIHtcbiAgICBmcmVlemUodmFsdWUsIGRlZXApO1xuICB9XG59XG5cbi8vIHNyYy9jb3JlL3Byb3h5LnRzXG5mdW5jdGlvbiBjcmVhdGVQcm94eVByb3h5KGJhc2UsIHBhcmVudCkge1xuICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShiYXNlKTtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgdHlwZV86IGlzQXJyYXkgPyAxIC8qIEFycmF5ICovIDogMCAvKiBPYmplY3QgKi8sXG4gICAgLy8gVHJhY2sgd2hpY2ggcHJvZHVjZSBjYWxsIHRoaXMgaXMgYXNzb2NpYXRlZCB3aXRoLlxuICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgIC8vIFRydWUgZm9yIGJvdGggc2hhbGxvdyBhbmQgZGVlcCBjaGFuZ2VzLlxuICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgLy8gVXNlZCBkdXJpbmcgZmluYWxpemF0aW9uLlxuICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgIC8vIFRyYWNrIHdoaWNoIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGFzc2lnbmVkICh0cnVlKSBvciBkZWxldGVkIChmYWxzZSkuXG4gICAgYXNzaWduZWRfOiB7fSxcbiAgICAvLyBUaGUgcGFyZW50IGRyYWZ0IHN0YXRlLlxuICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAvLyBUaGUgYmFzZSBzdGF0ZS5cbiAgICBiYXNlXzogYmFzZSxcbiAgICAvLyBUaGUgYmFzZSBwcm94eS5cbiAgICBkcmFmdF86IG51bGwsXG4gICAgLy8gc2V0IGJlbG93XG4gICAgLy8gVGhlIGJhc2UgY29weSB3aXRoIGFueSB1cGRhdGVkIHZhbHVlcy5cbiAgICBjb3B5XzogbnVsbCxcbiAgICAvLyBDYWxsZWQgYnkgdGhlIGBwcm9kdWNlYCBmdW5jdGlvbi5cbiAgICByZXZva2VfOiBudWxsLFxuICAgIGlzTWFudWFsXzogZmFsc2VcbiAgfTtcbiAgbGV0IHRhcmdldCA9IHN0YXRlO1xuICBsZXQgdHJhcHMgPSBvYmplY3RUcmFwcztcbiAgaWYgKGlzQXJyYXkpIHtcbiAgICB0YXJnZXQgPSBbc3RhdGVdO1xuICAgIHRyYXBzID0gYXJyYXlUcmFwcztcbiAgfVxuICBjb25zdCB7IHJldm9rZSwgcHJveHkgfSA9IFByb3h5LnJldm9jYWJsZSh0YXJnZXQsIHRyYXBzKTtcbiAgc3RhdGUuZHJhZnRfID0gcHJveHk7XG4gIHN0YXRlLnJldm9rZV8gPSByZXZva2U7XG4gIHJldHVybiBwcm94eTtcbn1cbnZhciBvYmplY3RUcmFwcyA9IHtcbiAgZ2V0KHN0YXRlLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09IERSQUZUX1NUQVRFKVxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGNvbnN0IHNvdXJjZSA9IGxhdGVzdChzdGF0ZSk7XG4gICAgaWYgKCFoYXMoc291cmNlLCBwcm9wKSkge1xuICAgICAgcmV0dXJuIHJlYWRQcm9wRnJvbVByb3RvKHN0YXRlLCBzb3VyY2UsIHByb3ApO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHNvdXJjZVtwcm9wXTtcbiAgICBpZiAoc3RhdGUuZmluYWxpemVkXyB8fCAhaXNEcmFmdGFibGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gcGVlayhzdGF0ZS5iYXNlXywgcHJvcCkpIHtcbiAgICAgIHByZXBhcmVDb3B5KHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5X1twcm9wXSA9IGNyZWF0ZVByb3h5KHZhbHVlLCBzdGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgaGFzKHN0YXRlLCBwcm9wKSB7XG4gICAgcmV0dXJuIHByb3AgaW4gbGF0ZXN0KHN0YXRlKTtcbiAgfSxcbiAgb3duS2V5cyhzdGF0ZSkge1xuICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMobGF0ZXN0KHN0YXRlKSk7XG4gIH0sXG4gIHNldChzdGF0ZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhsYXRlc3Qoc3RhdGUpLCBwcm9wKTtcbiAgICBpZiAoZGVzYz8uc2V0KSB7XG4gICAgICBkZXNjLnNldC5jYWxsKHN0YXRlLmRyYWZ0XywgdmFsdWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG4gICAgICBjb25zdCBjdXJyZW50MiA9IHBlZWsobGF0ZXN0KHN0YXRlKSwgcHJvcCk7XG4gICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBjdXJyZW50Mj8uW0RSQUZUX1NUQVRFXTtcbiAgICAgIGlmIChjdXJyZW50U3RhdGUgJiYgY3VycmVudFN0YXRlLmJhc2VfID09PSB2YWx1ZSkge1xuICAgICAgICBzdGF0ZS5jb3B5X1twcm9wXSA9IHZhbHVlO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXModmFsdWUsIGN1cnJlbnQyKSAmJiAodmFsdWUgIT09IHZvaWQgMCB8fCBoYXMoc3RhdGUuYmFzZV8sIHByb3ApKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5jb3B5X1twcm9wXSA9PT0gdmFsdWUgJiYgLy8gc3BlY2lhbCBjYXNlOiBoYW5kbGUgbmV3IHByb3BzIHdpdGggdmFsdWUgJ3VuZGVmaW5lZCdcbiAgICAodmFsdWUgIT09IHZvaWQgMCB8fCBwcm9wIGluIHN0YXRlLmNvcHlfKSB8fCAvLyBzcGVjaWFsIGNhc2U6IE5hTlxuICAgIE51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzTmFOKHN0YXRlLmNvcHlfW3Byb3BdKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHN0YXRlLmNvcHlfW3Byb3BdID0gdmFsdWU7XG4gICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHkoc3RhdGUsIHByb3ApIHtcbiAgICBpZiAocGVlayhzdGF0ZS5iYXNlXywgcHJvcCkgIT09IHZvaWQgMCB8fCBwcm9wIGluIHN0YXRlLmJhc2VfKSB7XG4gICAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSBmYWxzZTtcbiAgICAgIHByZXBhcmVDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHN0YXRlLmFzc2lnbmVkX1twcm9wXTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmNvcHlfKSB7XG4gICAgICBkZWxldGUgc3RhdGUuY29weV9bcHJvcF07XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICAvLyBOb3RlOiBXZSBuZXZlciBjb2VyY2UgYGRlc2MudmFsdWVgIGludG8gYW4gSW1tZXIgZHJhZnQsIGJlY2F1c2Ugd2UgY2FuJ3QgbWFrZVxuICAvLyB0aGUgc2FtZSBndWFyYW50ZWUgaW4gRVM1IG1vZGUuXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzdGF0ZSwgcHJvcCkge1xuICAgIGNvbnN0IG93bmVyID0gbGF0ZXN0KHN0YXRlKTtcbiAgICBjb25zdCBkZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob3duZXIsIHByb3ApO1xuICAgIGlmICghZGVzYylcbiAgICAgIHJldHVybiBkZXNjO1xuICAgIHJldHVybiB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogc3RhdGUudHlwZV8gIT09IDEgLyogQXJyYXkgKi8gfHwgcHJvcCAhPT0gXCJsZW5ndGhcIixcbiAgICAgIGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcbiAgICAgIHZhbHVlOiBvd25lcltwcm9wXVxuICAgIH07XG4gIH0sXG4gIGRlZmluZVByb3BlcnR5KCkge1xuICAgIGRpZSgxMSk7XG4gIH0sXG4gIGdldFByb3RvdHlwZU9mKHN0YXRlKSB7XG4gICAgcmV0dXJuIGdldFByb3RvdHlwZU9mKHN0YXRlLmJhc2VfKTtcbiAgfSxcbiAgc2V0UHJvdG90eXBlT2YoKSB7XG4gICAgZGllKDEyKTtcbiAgfVxufTtcbnZhciBhcnJheVRyYXBzID0ge307XG5lYWNoKG9iamVjdFRyYXBzLCAoa2V5LCBmbikgPT4ge1xuICBhcnJheVRyYXBzW2tleV0gPSBmdW5jdGlvbigpIHtcbiAgICBhcmd1bWVudHNbMF0gPSBhcmd1bWVudHNbMF1bMF07XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KTtcbmFycmF5VHJhcHMuZGVsZXRlUHJvcGVydHkgPSBmdW5jdGlvbihzdGF0ZSwgcHJvcCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzTmFOKHBhcnNlSW50KHByb3ApKSlcbiAgICBkaWUoMTMpO1xuICByZXR1cm4gYXJyYXlUcmFwcy5zZXQuY2FsbCh0aGlzLCBzdGF0ZSwgcHJvcCwgdm9pZCAwKTtcbn07XG5hcnJheVRyYXBzLnNldCA9IGZ1bmN0aW9uKHN0YXRlLCBwcm9wLCB2YWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHByb3AgIT09IFwibGVuZ3RoXCIgJiYgaXNOYU4ocGFyc2VJbnQocHJvcCkpKVxuICAgIGRpZSgxNCk7XG4gIHJldHVybiBvYmplY3RUcmFwcy5zZXQuY2FsbCh0aGlzLCBzdGF0ZVswXSwgcHJvcCwgdmFsdWUsIHN0YXRlWzBdKTtcbn07XG5mdW5jdGlvbiBwZWVrKGRyYWZ0LCBwcm9wKSB7XG4gIGNvbnN0IHN0YXRlID0gZHJhZnRbRFJBRlRfU1RBVEVdO1xuICBjb25zdCBzb3VyY2UgPSBzdGF0ZSA/IGxhdGVzdChzdGF0ZSkgOiBkcmFmdDtcbiAgcmV0dXJuIHNvdXJjZVtwcm9wXTtcbn1cbmZ1bmN0aW9uIHJlYWRQcm9wRnJvbVByb3RvKHN0YXRlLCBzb3VyY2UsIHByb3ApIHtcbiAgY29uc3QgZGVzYyA9IGdldERlc2NyaXB0b3JGcm9tUHJvdG8oc291cmNlLCBwcm9wKTtcbiAgcmV0dXJuIGRlc2MgPyBgdmFsdWVgIGluIGRlc2MgPyBkZXNjLnZhbHVlIDogKFxuICAgIC8vIFRoaXMgaXMgYSB2ZXJ5IHNwZWNpYWwgY2FzZSwgaWYgdGhlIHByb3AgaXMgYSBnZXR0ZXIgZGVmaW5lZCBieSB0aGVcbiAgICAvLyBwcm90b3R5cGUsIHdlIHNob3VsZCBpbnZva2UgaXQgd2l0aCB0aGUgZHJhZnQgYXMgY29udGV4dCFcbiAgICBkZXNjLmdldD8uY2FsbChzdGF0ZS5kcmFmdF8pXG4gICkgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBnZXREZXNjcmlwdG9yRnJvbVByb3RvKHNvdXJjZSwgcHJvcCkge1xuICBpZiAoIShwcm9wIGluIHNvdXJjZSkpXG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgbGV0IHByb3RvID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlKTtcbiAgd2hpbGUgKHByb3RvKSB7XG4gICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIHByb3ApO1xuICAgIGlmIChkZXNjKVxuICAgICAgcmV0dXJuIGRlc2M7XG4gICAgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cbiAgcmV0dXJuIHZvaWQgMDtcbn1cbmZ1bmN0aW9uIG1hcmtDaGFuZ2VkKHN0YXRlKSB7XG4gIGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG4gICAgc3RhdGUubW9kaWZpZWRfID0gdHJ1ZTtcbiAgICBpZiAoc3RhdGUucGFyZW50Xykge1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUucGFyZW50Xyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwcmVwYXJlQ29weShzdGF0ZSkge1xuICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgc3RhdGUuY29weV8gPSBzaGFsbG93Q29weShcbiAgICAgIHN0YXRlLmJhc2VfLFxuICAgICAgc3RhdGUuc2NvcGVfLmltbWVyXy51c2VTdHJpY3RTaGFsbG93Q29weV9cbiAgICApO1xuICB9XG59XG5cbi8vIHNyYy9jb3JlL2ltbWVyQ2xhc3MudHNcbnZhciBJbW1lcjIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuYXV0b0ZyZWV6ZV8gPSB0cnVlO1xuICAgIHRoaXMudXNlU3RyaWN0U2hhbGxvd0NvcHlfID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhlIGBwcm9kdWNlYCBmdW5jdGlvbiB0YWtlcyBhIHZhbHVlIGFuZCBhIFwicmVjaXBlIGZ1bmN0aW9uXCIgKHdob3NlXG4gICAgICogcmV0dXJuIHZhbHVlIG9mdGVuIGRlcGVuZHMgb24gdGhlIGJhc2Ugc3RhdGUpLiBUaGUgcmVjaXBlIGZ1bmN0aW9uIGlzXG4gICAgICogZnJlZSB0byBtdXRhdGUgaXRzIGZpcnN0IGFyZ3VtZW50IGhvd2V2ZXIgaXQgd2FudHMuIEFsbCBtdXRhdGlvbnMgYXJlXG4gICAgICogb25seSBldmVyIGFwcGxpZWQgdG8gYSBfX2NvcHlfXyBvZiB0aGUgYmFzZSBzdGF0ZS5cbiAgICAgKlxuICAgICAqIFBhc3Mgb25seSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFwiY3VycmllZCBwcm9kdWNlclwiIHdoaWNoIHJlbGlldmVzIHlvdVxuICAgICAqIGZyb20gcGFzc2luZyB0aGUgcmVjaXBlIGZ1bmN0aW9uIGV2ZXJ5IHRpbWUuXG4gICAgICpcbiAgICAgKiBPbmx5IHBsYWluIG9iamVjdHMgYW5kIGFycmF5cyBhcmUgbWFkZSBtdXRhYmxlLiBBbGwgb3RoZXIgb2JqZWN0cyBhcmVcbiAgICAgKiBjb25zaWRlcmVkIHVuY29weWFibGUuXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIGZ1bmN0aW9uIGlzIF9fYm91bmRfXyB0byBpdHMgYEltbWVyYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBiYXNlIC0gdGhlIGluaXRpYWwgc3RhdGVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWNpcGUgLSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgcHJveHkgb2YgdGhlIGJhc2Ugc3RhdGUgYXMgZmlyc3QgYXJndW1lbnQgYW5kIHdoaWNoIGNhbiBiZSBmcmVlbHkgbW9kaWZpZWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXRjaExpc3RlbmVyIC0gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIGFsbCB0aGUgcGF0Y2hlcyBwcm9kdWNlZCBoZXJlXG4gICAgICogQHJldHVybnMge2FueX0gYSBuZXcgc3RhdGUsIG9yIHRoZSBpbml0aWFsIHN0YXRlIGlmIG5vdGhpbmcgd2FzIG1vZGlmaWVkXG4gICAgICovXG4gICAgdGhpcy5wcm9kdWNlID0gKGJhc2UsIHJlY2lwZSwgcGF0Y2hMaXN0ZW5lcikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHJlY2lwZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRCYXNlID0gcmVjaXBlO1xuICAgICAgICByZWNpcGUgPSBiYXNlO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWRQcm9kdWNlKGJhc2UyID0gZGVmYXVsdEJhc2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5wcm9kdWNlKGJhc2UyLCAoZHJhZnQpID0+IHJlY2lwZS5jYWxsKHRoaXMsIGRyYWZ0LCAuLi5hcmdzKSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlY2lwZSAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBkaWUoNik7XG4gICAgICBpZiAocGF0Y2hMaXN0ZW5lciAhPT0gdm9pZCAwICYmIHR5cGVvZiBwYXRjaExpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGRpZSg3KTtcbiAgICAgIGxldCByZXN1bHQ7XG4gICAgICBpZiAoaXNEcmFmdGFibGUoYmFzZSkpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBlbnRlclNjb3BlKHRoaXMpO1xuICAgICAgICBjb25zdCBwcm94eSA9IGNyZWF0ZVByb3h5KGJhc2UsIHZvaWQgMCk7XG4gICAgICAgIGxldCBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVjaXBlKHByb3h5KTtcbiAgICAgICAgICBoYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChoYXNFcnJvcilcbiAgICAgICAgICAgIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHJlc3VsdCwgc2NvcGUpO1xuICAgICAgfSBlbHNlIGlmICghYmFzZSB8fCB0eXBlb2YgYmFzZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXN1bHQgPSByZWNpcGUoYmFzZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMClcbiAgICAgICAgICByZXN1bHQgPSBiYXNlO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBOT1RISU5HKVxuICAgICAgICAgIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0ZyZWV6ZV8pXG4gICAgICAgICAgZnJlZXplKHJlc3VsdCwgdHJ1ZSk7XG4gICAgICAgIGlmIChwYXRjaExpc3RlbmVyKSB7XG4gICAgICAgICAgY29uc3QgcCA9IFtdO1xuICAgICAgICAgIGNvbnN0IGlwID0gW107XG4gICAgICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oYmFzZSwgcmVzdWx0LCBwLCBpcCk7XG4gICAgICAgICAgcGF0Y2hMaXN0ZW5lcihwLCBpcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gZWxzZVxuICAgICAgICBkaWUoMSwgYmFzZSk7XG4gICAgfTtcbiAgICB0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyA9IChiYXNlLCByZWNpcGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiAoc3RhdGUsIC4uLmFyZ3MpID0+IHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzKHN0YXRlLCAoZHJhZnQpID0+IGJhc2UoZHJhZnQsIC4uLmFyZ3MpKTtcbiAgICAgIH1cbiAgICAgIGxldCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvZHVjZShiYXNlLCByZWNpcGUsIChwLCBpcCkgPT4ge1xuICAgICAgICBwYXRjaGVzID0gcDtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMgPSBpcDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtyZXN1bHQsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzXTtcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgY29uZmlnPy5hdXRvRnJlZXplID09PSBcImJvb2xlYW5cIilcbiAgICAgIHRoaXMuc2V0QXV0b0ZyZWV6ZShjb25maWcuYXV0b0ZyZWV6ZSk7XG4gICAgaWYgKHR5cGVvZiBjb25maWc/LnVzZVN0cmljdFNoYWxsb3dDb3B5ID09PSBcImJvb2xlYW5cIilcbiAgICAgIHRoaXMuc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkoY29uZmlnLnVzZVN0cmljdFNoYWxsb3dDb3B5KTtcbiAgfVxuICBjcmVhdGVEcmFmdChiYXNlKSB7XG4gICAgaWYgKCFpc0RyYWZ0YWJsZShiYXNlKSlcbiAgICAgIGRpZSg4KTtcbiAgICBpZiAoaXNEcmFmdChiYXNlKSlcbiAgICAgIGJhc2UgPSBjdXJyZW50KGJhc2UpO1xuICAgIGNvbnN0IHNjb3BlID0gZW50ZXJTY29wZSh0aGlzKTtcbiAgICBjb25zdCBwcm94eSA9IGNyZWF0ZVByb3h5KGJhc2UsIHZvaWQgMCk7XG4gICAgcHJveHlbRFJBRlRfU1RBVEVdLmlzTWFudWFsXyA9IHRydWU7XG4gICAgbGVhdmVTY29wZShzY29wZSk7XG4gICAgcmV0dXJuIHByb3h5O1xuICB9XG4gIGZpbmlzaERyYWZ0KGRyYWZ0LCBwYXRjaExpc3RlbmVyKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBkcmFmdCAmJiBkcmFmdFtEUkFGVF9TVEFURV07XG4gICAgaWYgKCFzdGF0ZSB8fCAhc3RhdGUuaXNNYW51YWxfKVxuICAgICAgZGllKDkpO1xuICAgIGNvbnN0IHsgc2NvcGVfOiBzY29wZSB9ID0gc3RhdGU7XG4gICAgdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpO1xuICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHZvaWQgMCwgc2NvcGUpO1xuICB9XG4gIC8qKlxuICAgKiBQYXNzIHRydWUgdG8gYXV0b21hdGljYWxseSBmcmVlemUgYWxsIGNvcGllcyBjcmVhdGVkIGJ5IEltbWVyLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBhdXRvLWZyZWV6aW5nIGlzIGVuYWJsZWQuXG4gICAqL1xuICBzZXRBdXRvRnJlZXplKHZhbHVlKSB7XG4gICAgdGhpcy5hdXRvRnJlZXplXyA9IHZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBQYXNzIHRydWUgdG8gZW5hYmxlIHN0cmljdCBzaGFsbG93IGNvcHkuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGltbWVyIGRvZXMgbm90IGNvcHkgdGhlIG9iamVjdCBkZXNjcmlwdG9ycyBzdWNoIGFzIGdldHRlciwgc2V0dGVyIGFuZCBub24tZW51bXJhYmxlIHByb3BlcnRpZXMuXG4gICAqL1xuICBzZXRVc2VTdHJpY3RTaGFsbG93Q29weSh2YWx1ZSkge1xuICAgIHRoaXMudXNlU3RyaWN0U2hhbGxvd0NvcHlfID0gdmFsdWU7XG4gIH1cbiAgYXBwbHlQYXRjaGVzKGJhc2UsIHBhdGNoZXMpIHtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSBwYXRjaGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBwYXRjaCA9IHBhdGNoZXNbaV07XG4gICAgICBpZiAocGF0Y2gucGF0aC5sZW5ndGggPT09IDAgJiYgcGF0Y2gub3AgPT09IFwicmVwbGFjZVwiKSB7XG4gICAgICAgIGJhc2UgPSBwYXRjaC52YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIHBhdGNoZXMgPSBwYXRjaGVzLnNsaWNlKGkgKyAxKTtcbiAgICB9XG4gICAgY29uc3QgYXBwbHlQYXRjaGVzSW1wbCA9IGdldFBsdWdpbihcIlBhdGNoZXNcIikuYXBwbHlQYXRjaGVzXztcbiAgICBpZiAoaXNEcmFmdChiYXNlKSkge1xuICAgICAgcmV0dXJuIGFwcGx5UGF0Y2hlc0ltcGwoYmFzZSwgcGF0Y2hlcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb2R1Y2UoXG4gICAgICBiYXNlLFxuICAgICAgKGRyYWZ0KSA9PiBhcHBseVBhdGNoZXNJbXBsKGRyYWZ0LCBwYXRjaGVzKVxuICAgICk7XG4gIH1cbn07XG5mdW5jdGlvbiBjcmVhdGVQcm94eSh2YWx1ZSwgcGFyZW50KSB7XG4gIGNvbnN0IGRyYWZ0ID0gaXNNYXAodmFsdWUpID8gZ2V0UGx1Z2luKFwiTWFwU2V0XCIpLnByb3h5TWFwXyh2YWx1ZSwgcGFyZW50KSA6IGlzU2V0KHZhbHVlKSA/IGdldFBsdWdpbihcIk1hcFNldFwiKS5wcm94eVNldF8odmFsdWUsIHBhcmVudCkgOiBjcmVhdGVQcm94eVByb3h5KHZhbHVlLCBwYXJlbnQpO1xuICBjb25zdCBzY29wZSA9IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKTtcbiAgc2NvcGUuZHJhZnRzXy5wdXNoKGRyYWZ0KTtcbiAgcmV0dXJuIGRyYWZ0O1xufVxuXG4vLyBzcmMvY29yZS9jdXJyZW50LnRzXG5mdW5jdGlvbiBjdXJyZW50KHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdCh2YWx1ZSkpXG4gICAgZGllKDEwLCB2YWx1ZSk7XG4gIHJldHVybiBjdXJyZW50SW1wbCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBjdXJyZW50SW1wbCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnRhYmxlKHZhbHVlKSB8fCBpc0Zyb3plbih2YWx1ZSkpXG4gICAgcmV0dXJuIHZhbHVlO1xuICBjb25zdCBzdGF0ZSA9IHZhbHVlW0RSQUZUX1NUQVRFXTtcbiAgbGV0IGNvcHk7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICghc3RhdGUubW9kaWZpZWRfKVxuICAgICAgcmV0dXJuIHN0YXRlLmJhc2VfO1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSB0cnVlO1xuICAgIGNvcHkgPSBzaGFsbG93Q29weSh2YWx1ZSwgc3RhdGUuc2NvcGVfLmltbWVyXy51c2VTdHJpY3RTaGFsbG93Q29weV8pO1xuICB9IGVsc2Uge1xuICAgIGNvcHkgPSBzaGFsbG93Q29weSh2YWx1ZSwgdHJ1ZSk7XG4gIH1cbiAgZWFjaChjb3B5LCAoa2V5LCBjaGlsZFZhbHVlKSA9PiB7XG4gICAgc2V0KGNvcHksIGtleSwgY3VycmVudEltcGwoY2hpbGRWYWx1ZSkpO1xuICB9KTtcbiAgaWYgKHN0YXRlKSB7XG4gICAgc3RhdGUuZmluYWxpemVkXyA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBjb3B5O1xufVxuXG4vLyBzcmMvcGx1Z2lucy9wYXRjaGVzLnRzXG5mdW5jdGlvbiBlbmFibGVQYXRjaGVzKCkge1xuICBjb25zdCBlcnJvck9mZnNldCA9IDE2O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZXJyb3JzLnB1c2goXG4gICAgICAnU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsXG4gICAgICBmdW5jdGlvbihvcCkge1xuICAgICAgICByZXR1cm4gXCJVbnN1cHBvcnRlZCBwYXRjaCBvcGVyYXRpb246IFwiICsgb3A7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIiArIHBhdGg7XG4gICAgICB9LFxuICAgICAgXCJQYXRjaGluZyByZXNlcnZlZCBhdHRyaWJ1dGVzIGxpa2UgX19wcm90b19fLCBwcm90b3R5cGUgYW5kIGNvbnN0cnVjdG9yIGlzIG5vdCBhbGxvd2VkXCJcbiAgICApO1xuICB9XG4gIGNvbnN0IFJFUExBQ0UgPSBcInJlcGxhY2VcIjtcbiAgY29uc3QgQUREID0gXCJhZGRcIjtcbiAgY29uc3QgUkVNT1ZFID0gXCJyZW1vdmVcIjtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYXRjaGVzXyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgc3dpdGNoIChzdGF0ZS50eXBlXykge1xuICAgICAgY2FzZSAwIC8qIE9iamVjdCAqLzpcbiAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgICAgcGF0Y2hlcyxcbiAgICAgICAgICBpbnZlcnNlUGF0Y2hlc1xuICAgICAgICApO1xuICAgICAgY2FzZSAxIC8qIEFycmF5ICovOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcyk7XG4gICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVTZXRQYXRjaGVzKFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGJhc2VQYXRoLFxuICAgICAgICAgIHBhdGNoZXMsXG4gICAgICAgICAgaW52ZXJzZVBhdGNoZXNcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIGxldCB7IGJhc2VfLCBhc3NpZ25lZF8gfSA9IHN0YXRlO1xuICAgIGxldCBjb3B5XyA9IHN0YXRlLmNvcHlfO1xuICAgIGlmIChjb3B5Xy5sZW5ndGggPCBiYXNlXy5sZW5ndGgpIHtcbiAgICAgIDtcbiAgICAgIFtiYXNlXywgY29weV9dID0gW2NvcHlfLCBiYXNlX107XG4gICAgICBbcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXNdID0gW2ludmVyc2VQYXRjaGVzLCBwYXRjaGVzXTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXNlXy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFzc2lnbmVkX1tpXSAmJiBjb3B5X1tpXSAhPT0gYmFzZV9baV0pIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgLy8gTmVlZCB0byBtYXliZSBjbG9uZSBpdCwgYXMgaXQgY2FuIGluIGZhY3QgYmUgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgICAgLy8gZHVlIHRvIHRoZSBiYXNlL2NvcHkgaW52ZXJzaW9uIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uXG4gICAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGNvcHlfW2ldKVxuICAgICAgICB9KTtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoYmFzZV9baV0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gYmFzZV8ubGVuZ3RoOyBpIDwgY29weV8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgIG9wOiBBREQsXG4gICAgICAgIHBhdGgsXG4gICAgICAgIC8vIE5lZWQgdG8gbWF5YmUgY2xvbmUgaXQsIGFzIGl0IGNhbiBpbiBmYWN0IGJlIHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAvLyBkdWUgdG8gdGhlIGJhc2UvY29weSBpbnZlcnNpb24gYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGNvcHlfW2ldKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBjb3B5Xy5sZW5ndGggLSAxOyBiYXNlXy5sZW5ndGggPD0gaTsgLS1pKSB7XG4gICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgb3A6IFJFTU9WRSxcbiAgICAgICAgcGF0aFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGF0Y2hlc0Zyb21Bc3NpZ25lZChzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgY29uc3QgeyBiYXNlXywgY29weV8gfSA9IHN0YXRlO1xuICAgIGVhY2goc3RhdGUuYXNzaWduZWRfLCAoa2V5LCBhc3NpZ25lZFZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnVmFsdWUgPSBnZXQoYmFzZV8sIGtleSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldChjb3B5Xywga2V5KTtcbiAgICAgIGNvbnN0IG9wID0gIWFzc2lnbmVkVmFsdWUgPyBSRU1PVkUgOiBoYXMoYmFzZV8sIGtleSkgPyBSRVBMQUNFIDogQUREO1xuICAgICAgaWYgKG9yaWdWYWx1ZSA9PT0gdmFsdWUgJiYgb3AgPT09IFJFUExBQ0UpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoa2V5KTtcbiAgICAgIHBhdGNoZXMucHVzaChvcCA9PT0gUkVNT1ZFID8geyBvcCwgcGF0aCB9IDogeyBvcCwgcGF0aCwgdmFsdWUgfSk7XG4gICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKFxuICAgICAgICBvcCA9PT0gQUREID8geyBvcDogUkVNT1ZFLCBwYXRoIH0gOiBvcCA9PT0gUkVNT1ZFID8geyBvcDogQURELCBwYXRoLCB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob3JpZ1ZhbHVlKSB9IDogeyBvcDogUkVQTEFDRSwgcGF0aCwgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9yaWdWYWx1ZSkgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZVNldFBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIGxldCB7IGJhc2VfLCBjb3B5XyB9ID0gc3RhdGU7XG4gICAgbGV0IGkgPSAwO1xuICAgIGJhc2VfLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoIWNvcHlfLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMudW5zaGlmdCh7XG4gICAgICAgICAgb3A6IEFERCxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuICAgIGkgPSAwO1xuICAgIGNvcHlfLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoIWJhc2VfLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBBREQsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMudW5zaGlmdCh7XG4gICAgICAgICAgb3A6IFJFTU9WRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhiYXNlVmFsdWUsIHJlcGxhY2VtZW50LCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICBvcDogUkVQTEFDRSxcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgdmFsdWU6IHJlcGxhY2VtZW50ID09PSBOT1RISU5HID8gdm9pZCAwIDogcmVwbGFjZW1lbnRcbiAgICB9KTtcbiAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgcGF0aDogW10sXG4gICAgICB2YWx1ZTogYmFzZVZhbHVlXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYXBwbHlQYXRjaGVzXyhkcmFmdCwgcGF0Y2hlcykge1xuICAgIHBhdGNoZXMuZm9yRWFjaCgocGF0Y2gpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aCwgb3AgfSA9IHBhdGNoO1xuICAgICAgbGV0IGJhc2UgPSBkcmFmdDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGFyZW50VHlwZSA9IGdldEFyY2h0eXBlKGJhc2UpO1xuICAgICAgICBsZXQgcCA9IHBhdGhbaV07XG4gICAgICAgIGlmICh0eXBlb2YgcCAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHAgPSBcIlwiICsgcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHBhcmVudFR5cGUgPT09IDAgLyogT2JqZWN0ICovIHx8IHBhcmVudFR5cGUgPT09IDEgLyogQXJyYXkgKi8pICYmIChwID09PSBcIl9fcHJvdG9fX1wiIHx8IHAgPT09IFwiY29uc3RydWN0b3JcIikpXG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMyk7XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHAgPT09IFwicHJvdG90eXBlXCIpXG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMyk7XG4gICAgICAgIGJhc2UgPSBnZXQoYmFzZSwgcCk7XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAyLCBwYXRoLmpvaW4oXCIvXCIpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHR5cGUgPSBnZXRBcmNodHlwZShiYXNlKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGVlcENsb25lUGF0Y2hWYWx1ZShwYXRjaC52YWx1ZSk7XG4gICAgICBjb25zdCBrZXkgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgICBzd2l0Y2ggKG9wKSB7XG4gICAgICAgIGNhc2UgUkVQTEFDRTpcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgICAgICAgIGRpZShlcnJvck9mZnNldCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIEFERDpcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMSAvKiBBcnJheSAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gXCItXCIgPyBiYXNlLnB1c2godmFsdWUpIDogYmFzZS5zcGxpY2Uoa2V5LCAwLCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5hZGQodmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Vba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBSRU1PVkU6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDEgLyogQXJyYXkgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLnNwbGljZShrZXksIDEpO1xuICAgICAgICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5kZWxldGUocGF0Y2gudmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZSBiYXNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDEsIG9wKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZHJhZnQ7XG4gIH1cbiAgZnVuY3Rpb24gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmopIHtcbiAgICBpZiAoIWlzRHJhZnRhYmxlKG9iaikpXG4gICAgICByZXR1cm4gb2JqO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpXG4gICAgICByZXR1cm4gb2JqLm1hcChkZWVwQ2xvbmVQYXRjaFZhbHVlKTtcbiAgICBpZiAoaXNNYXAob2JqKSlcbiAgICAgIHJldHVybiBuZXcgTWFwKFxuICAgICAgICBBcnJheS5mcm9tKG9iai5lbnRyaWVzKCkpLm1hcCgoW2ssIHZdKSA9PiBbaywgZGVlcENsb25lUGF0Y2hWYWx1ZSh2KV0pXG4gICAgICApO1xuICAgIGlmIChpc1NldChvYmopKVxuICAgICAgcmV0dXJuIG5ldyBTZXQoQXJyYXkuZnJvbShvYmopLm1hcChkZWVwQ2xvbmVQYXRjaFZhbHVlKSk7XG4gICAgY29uc3QgY2xvbmVkID0gT2JqZWN0LmNyZWF0ZShnZXRQcm90b3R5cGVPZihvYmopKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopXG4gICAgICBjbG9uZWRba2V5XSA9IGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqW2tleV0pO1xuICAgIGlmIChoYXMob2JqLCBEUkFGVEFCTEUpKVxuICAgICAgY2xvbmVkW0RSQUZUQUJMRV0gPSBvYmpbRFJBRlRBQkxFXTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG4gIGZ1bmN0aW9uIGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9iaikge1xuICAgIGlmIChpc0RyYWZ0KG9iaikpIHtcbiAgICAgIHJldHVybiBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9iaik7XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gb2JqO1xuICB9XG4gIGxvYWRQbHVnaW4oXCJQYXRjaGVzXCIsIHtcbiAgICBhcHBseVBhdGNoZXNfLFxuICAgIGdlbmVyYXRlUGF0Y2hlc18sXG4gICAgZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfXG4gIH0pO1xufVxuXG4vLyBzcmMvcGx1Z2lucy9tYXBzZXQudHNcbmZ1bmN0aW9uIGVuYWJsZU1hcFNldCgpIHtcbiAgY2xhc3MgRHJhZnRNYXAgZXh0ZW5kcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpc1tEUkFGVF9TVEFURV0gPSB7XG4gICAgICAgIHR5cGVfOiAyIC8qIE1hcCAqLyxcbiAgICAgICAgcGFyZW50XzogcGFyZW50LFxuICAgICAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAgICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAgICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgICAgIGNvcHlfOiB2b2lkIDAsXG4gICAgICAgIGFzc2lnbmVkXzogdm9pZCAwLFxuICAgICAgICBiYXNlXzogdGFyZ2V0LFxuICAgICAgICBkcmFmdF86IHRoaXMsXG4gICAgICAgIGlzTWFudWFsXzogZmFsc2UsXG4gICAgICAgIHJldm9rZWRfOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5zaXplO1xuICAgIH1cbiAgICBoYXMoa2V5KSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5oYXMoa2V5KTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKCFsYXRlc3Qoc3RhdGUpLmhhcyhrZXkpIHx8IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSkgIT09IHZhbHVlKSB7XG4gICAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgdHJ1ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlbGV0ZShrZXkpIHtcbiAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgIGlmIChzdGF0ZS5iYXNlXy5oYXMoa2V5KSkge1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgc3RhdGUuY29weV8uZGVsZXRlKGtleSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmIChsYXRlc3Qoc3RhdGUpLnNpemUpIHtcbiAgICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICAgIGVhY2goc3RhdGUuYmFzZV8sIChrZXkpID0+IHtcbiAgICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3RhdGUuY29weV8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yRWFjaChjYiwgdGhpc0FyZykge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGxhdGVzdChzdGF0ZSkuZm9yRWFjaCgoX3ZhbHVlLCBrZXksIF9tYXApID0+IHtcbiAgICAgICAgY2IuY2FsbCh0aGlzQXJnLCB0aGlzLmdldChrZXkpLCBrZXksIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgY29uc3QgdmFsdWUgPSBsYXRlc3Qoc3RhdGUpLmdldChrZXkpO1xuICAgICAgaWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgIT09IHN0YXRlLmJhc2VfLmdldChrZXkpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRyYWZ0ID0gY3JlYXRlUHJveHkodmFsdWUsIHN0YXRlKTtcbiAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgIHN0YXRlLmNvcHlfLnNldChrZXksIGRyYWZ0KTtcbiAgICAgIHJldHVybiBkcmFmdDtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLmtleXMoKTtcbiAgICB9XG4gICAgdmFsdWVzKCkge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLmtleXMoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB0aGlzLnZhbHVlcygpLFxuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoci5kb25lKVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldChyLnZhbHVlKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGVudHJpZXMoKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXMua2V5cygpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHRoaXMuZW50cmllcygpLFxuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoci5kb25lKVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldChyLnZhbHVlKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogW3IudmFsdWUsIHZhbHVlXVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIFsoRFJBRlRfU1RBVEUsIFN5bWJvbC5pdGVyYXRvcildKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwcm94eU1hcF8odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWZ0TWFwKHRhcmdldCwgcGFyZW50KTtcbiAgfVxuICBmdW5jdGlvbiBwcmVwYXJlTWFwQ29weShzdGF0ZSkge1xuICAgIGlmICghc3RhdGUuY29weV8pIHtcbiAgICAgIHN0YXRlLmFzc2lnbmVkXyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICBzdGF0ZS5jb3B5XyA9IG5ldyBNYXAoc3RhdGUuYmFzZV8pO1xuICAgIH1cbiAgfVxuICBjbGFzcyBEcmFmdFNldCBleHRlbmRzIFNldCB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzW0RSQUZUX1NUQVRFXSA9IHtcbiAgICAgICAgdHlwZV86IDMgLyogU2V0ICovLFxuICAgICAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgICAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgICAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAgICAgY29weV86IHZvaWQgMCxcbiAgICAgICAgYmFzZV86IHRhcmdldCxcbiAgICAgICAgZHJhZnRfOiB0aGlzLFxuICAgICAgICBkcmFmdHNfOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuICAgICAgICByZXZva2VkXzogZmFsc2UsXG4gICAgICAgIGlzTWFudWFsXzogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZTtcbiAgICB9XG4gICAgaGFzKHZhbHVlKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmICghc3RhdGUuY29weV8pIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmJhc2VfLmhhcyh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUuY29weV8uaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpICYmIHN0YXRlLmNvcHlfLmhhcyhzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYWRkKHZhbHVlKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlbGV0ZSh2YWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8uZGVsZXRlKHZhbHVlKSB8fCAoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpID8gc3RhdGUuY29weV8uZGVsZXRlKHN0YXRlLmRyYWZ0c18uZ2V0KHZhbHVlKSkgOiAoXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGZhbHNlXG4gICAgICApKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmIChsYXRlc3Qoc3RhdGUpLnNpemUpIHtcbiAgICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlcygpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLnZhbHVlcygpO1xuICAgIH1cbiAgICBlbnRyaWVzKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8uZW50cmllcygpO1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfVxuICAgIFsoRFJBRlRfU1RBVEUsIFN5bWJvbC5pdGVyYXRvcildKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfVxuICAgIGZvckVhY2goY2IsIHRoaXNBcmcpIHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpcy52YWx1ZXMoKTtcbiAgICAgIGxldCByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIGNiLmNhbGwodGhpc0FyZywgcmVzdWx0LnZhbHVlLCByZXN1bHQudmFsdWUsIHRoaXMpO1xuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHByb3h5U2V0Xyh0YXJnZXQsIHBhcmVudCkge1xuICAgIHJldHVybiBuZXcgRHJhZnRTZXQodGFyZ2V0LCBwYXJlbnQpO1xuICB9XG4gIGZ1bmN0aW9uIHByZXBhcmVTZXRDb3B5KHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgc3RhdGUuY29weV8gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgc3RhdGUuYmFzZV8uZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKGlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgICAgIGNvbnN0IGRyYWZ0ID0gY3JlYXRlUHJveHkodmFsdWUsIHN0YXRlKTtcbiAgICAgICAgICBzdGF0ZS5kcmFmdHNfLnNldCh2YWx1ZSwgZHJhZnQpO1xuICAgICAgICAgIHN0YXRlLmNvcHlfLmFkZChkcmFmdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUuY29weV8uYWRkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5yZXZva2VkXylcbiAgICAgIGRpZSgzLCBKU09OLnN0cmluZ2lmeShsYXRlc3Qoc3RhdGUpKSk7XG4gIH1cbiAgbG9hZFBsdWdpbihcIk1hcFNldFwiLCB7IHByb3h5TWFwXywgcHJveHlTZXRfIH0pO1xufVxuXG4vLyBzcmMvaW1tZXIudHNcbnZhciBpbW1lciA9IG5ldyBJbW1lcjIoKTtcbnZhciBwcm9kdWNlID0gaW1tZXIucHJvZHVjZTtcbnZhciBwcm9kdWNlV2l0aFBhdGNoZXMgPSBpbW1lci5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZChcbiAgaW1tZXJcbik7XG52YXIgc2V0QXV0b0ZyZWV6ZSA9IGltbWVyLnNldEF1dG9GcmVlemUuYmluZChpbW1lcik7XG52YXIgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkgPSBpbW1lci5zZXRVc2VTdHJpY3RTaGFsbG93Q29weS5iaW5kKGltbWVyKTtcbnZhciBhcHBseVBhdGNoZXMgPSBpbW1lci5hcHBseVBhdGNoZXMuYmluZChpbW1lcik7XG52YXIgY3JlYXRlRHJhZnQgPSBpbW1lci5jcmVhdGVEcmFmdC5iaW5kKGltbWVyKTtcbnZhciBmaW5pc2hEcmFmdCA9IGltbWVyLmZpbmlzaERyYWZ0LmJpbmQoaW1tZXIpO1xuZnVuY3Rpb24gY2FzdERyYWZ0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNhc3RJbW11dGFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gIEltbWVyLFxuICBhcHBseVBhdGNoZXMsXG4gIGNhc3REcmFmdCxcbiAgY2FzdEltbXV0YWJsZSxcbiAgY3JlYXRlRHJhZnQsXG4gIGN1cnJlbnQsXG4gIGVuYWJsZU1hcFNldCxcbiAgZW5hYmxlUGF0Y2hlcyxcbiAgZmluaXNoRHJhZnQsXG4gIGZyZWV6ZSxcbiAgaW1tZXJhYmxlLFxuICBpc0RyYWZ0LFxuICBpc0RyYWZ0YWJsZSxcbiAgbm90aGluZyxcbiAgb3JpZ2luYWwsXG4gIHByb2R1Y2UsXG4gIHByb2R1Y2VXaXRoUGF0Y2hlcyxcbiAgc2V0QXV0b0ZyZWV6ZSxcbiAgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHlcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1tZXIuY2pzLmRldmVsb3BtZW50LmpzLm1hcCIsIlxuJ3VzZSBzdHJpY3QnXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbW1lci5janMucHJvZHVjdGlvbi5qcycpXG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW1tZXIuY2pzLmRldmVsb3BtZW50LmpzJylcbn0iLCJ2YXIgZT1yZXF1aXJlKFwiaW1tZXJcIikscj1yZXF1aXJlKFwicmVhY3RcIik7ZXhwb3J0cy51c2VJbW1lcj1mdW5jdGlvbih1KXt2YXIgbj1yLnVzZVN0YXRlKGZ1bmN0aW9uKCl7cmV0dXJuIGUuZnJlZXplKFwiZnVuY3Rpb25cIj09dHlwZW9mIHU/dSgpOnUsITApfSksdD1uWzFdO3JldHVybltuWzBdLHIudXNlQ2FsbGJhY2soZnVuY3Rpb24ocil7dChcImZ1bmN0aW9uXCI9PXR5cGVvZiByP2UucHJvZHVjZShyKTplLmZyZWV6ZShyKSl9LFtdKV19LGV4cG9ydHMudXNlSW1tZXJSZWR1Y2VyPWZ1bmN0aW9uKHUsbix0KXt2YXIgbz1yLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gZS5wcm9kdWNlKHUpfSxbdV0pO3JldHVybiByLnVzZVJlZHVjZXIobyxuLHQpfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbW1lci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy52ZXJzaW9uID0gZXhwb3J0cy52YWxpZGF0ZSA9IGV4cG9ydHMudjcgPSBleHBvcnRzLnY2VG9WMSA9IGV4cG9ydHMudjYgPSBleHBvcnRzLnY1ID0gZXhwb3J0cy52NCA9IGV4cG9ydHMudjMgPSBleHBvcnRzLnYxVG9WNiA9IGV4cG9ydHMudjEgPSBleHBvcnRzLnN0cmluZ2lmeSA9IGV4cG9ydHMucGFyc2UgPSBleHBvcnRzLk5JTCA9IGV4cG9ydHMuTUFYID0gdm9pZCAwO1xudmFyIG1heF9qc18xID0gcmVxdWlyZShcIi4vbWF4LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTUFYXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXhfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIG5pbF9qc18xID0gcmVxdWlyZShcIi4vbmlsLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTklMXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuaWxfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwYXJzZV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHJpbmdpZnlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0cmluZ2lmeV9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjFfanNfMSA9IHJlcXVpcmUoXCIuL3YxLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYxX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2MVRvVjZfanNfMSA9IHJlcXVpcmUoXCIuL3YxVG9WNi5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxVG9WNlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjFUb1Y2X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2M19qc18xID0gcmVxdWlyZShcIi4vdjMuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2M1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjNfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY0X2pzXzEgPSByZXF1aXJlKFwiLi92NC5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2NF9qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdjVfanNfMSA9IHJlcXVpcmUoXCIuL3Y1LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHY1X2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2Nl9qc18xID0gcmVxdWlyZShcIi4vdjYuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjZfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY2VG9WMV9qc18xID0gcmVxdWlyZShcIi4vdjZUb1YxLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjZUb1YxXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2NlRvVjFfanNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHY3X2pzXzEgPSByZXF1aXJlKFwiLi92Ny5qc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY3XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2N19qc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdmFsaWRhdGVfanNfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFsaWRhdGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbGlkYXRlX2pzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2ZXJzaW9uX2pzXzEgPSByZXF1aXJlKFwiLi92ZXJzaW9uLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmVyc2lvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmVyc2lvbl9qc18xLmRlZmF1bHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9ICdmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgICBjb25zdCB3b3JkcyA9IHVpbnQ4VG9VaW50MzIoYnl0ZXMpO1xuICAgIGNvbnN0IG1kNUJ5dGVzID0gd29yZHNUb01kNSh3b3JkcywgYnl0ZXMubGVuZ3RoICogOCk7XG4gICAgcmV0dXJuIHVpbnQzMlRvVWludDgobWQ1Qnl0ZXMpO1xufVxuZnVuY3Rpb24gdWludDMyVG9VaW50OChpbnB1dCkge1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoaW5wdXQubGVuZ3RoICogNCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGggKiA0OyBpKyspIHtcbiAgICAgICAgYnl0ZXNbaV0gPSAoaW5wdXRbaSA+PiAyXSA+Pj4gKChpICUgNCkgKiA4KSkgJiAweGZmO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXM7XG59XG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gICAgcmV0dXJuICgoKGlucHV0TGVuZ3RoOCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNCArIDE7XG59XG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAgIGNvbnN0IHhwYWQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbikpLmZpbGwoMCk7XG4gICAgeHBhZC5zZXQoeCk7XG4gICAgeHBhZFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgICB4cGFkW3hwYWQubGVuZ3RoIC0gMV0gPSBsZW47XG4gICAgeCA9IHhwYWQ7XG4gICAgbGV0IGEgPSAxNzMyNTg0MTkzO1xuICAgIGxldCBiID0gLTI3MTczMzg3OTtcbiAgICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICAgIGxldCBkID0gMjcxNzMzODc4O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICAgICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgICAgIGNvbnN0IG9sZGIgPSBiO1xuICAgICAgICBjb25zdCBvbGRjID0gYztcbiAgICAgICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICAgICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgICAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICAgICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gICAgfVxuICAgIHJldHVybiBVaW50MzJBcnJheS5vZihhLCBiLCBjLCBkKTtcbn1cbmZ1bmN0aW9uIHVpbnQ4VG9VaW50MzIoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkoKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChpbnB1dC5sZW5ndGggKiA4KSkuZmlsbCgwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG91dHB1dFtpID4+IDJdIHw9IChpbnB1dFtpXSAmIDB4ZmYpIDw8ICgoaSAlIDQpICogOCk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgICBjb25zdCBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gICAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gICAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4ZmZmZik7XG59XG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gICAgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpO1xufVxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKChiICYgYykgfCAofmIgJiBkKSwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbigoYiAmIGQpIHwgKGMgJiB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtZDU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnRzLmRlZmF1bHQgPSB7IHJhbmRvbVVVSUQgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgICBpZiAoISgwLCB2YWxpZGF0ZV9qc18xLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gICAgfVxuICAgIGxldCB2O1xuICAgIHJldHVybiBVaW50OEFycmF5Lm9mKCh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQsICh2ID4+PiAxNikgJiAweGZmLCAodiA+Pj4gOCkgJiAweGZmLCB2ICYgMHhmZiwgKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gOCwgdiAmIDB4ZmYsICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4LCB2ICYgMHhmZiwgKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDgsIHYgJiAweGZmLCAoKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwKSAmIDB4ZmYsICh2IC8gMHgxMDAwMDAwMDApICYgMHhmZiwgKHYgPj4+IDI0KSAmIDB4ZmYsICh2ID4+PiAxNikgJiAweGZmLCAodiA+Pj4gOCkgJiAweGZmLCB2ICYgMHhmZik7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBwYXJzZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJyB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHJuZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gICAgc3dpdGNoIChzKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAoeCAmIHkpIF4gKH54ICYgeik7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiAoeCAmIHkpIF4gKHggJiB6KSBeICh5ICYgeik7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gICAgfVxufVxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gICAgcmV0dXJuICh4IDw8IG4pIHwgKHggPj4+ICgzMiAtIG4pKTtcbn1cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICAgIGNvbnN0IEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG4gICAgY29uc3QgbmV3Qnl0ZXMgPSBuZXcgVWludDhBcnJheShieXRlcy5sZW5ndGggKyAxKTtcbiAgICBuZXdCeXRlcy5zZXQoYnl0ZXMpO1xuICAgIG5ld0J5dGVzW2J5dGVzLmxlbmd0aF0gPSAweDgwO1xuICAgIGJ5dGVzID0gbmV3Qnl0ZXM7XG4gICAgY29uc3QgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICAgIGNvbnN0IE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgICAgICAgYXJyW2pdID1cbiAgICAgICAgICAgICAgICAoYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0KSB8XG4gICAgICAgICAgICAgICAgICAgIChieXRlc1tpICogNjQgKyBqICogNCArIDFdIDw8IDE2KSB8XG4gICAgICAgICAgICAgICAgICAgIChieXRlc1tpICogNjQgKyBqICogNCArIDJdIDw8IDgpIHxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICAgICAgfVxuICAgICAgICBNW2ldID0gYXJyO1xuICAgIH1cbiAgICBNW04gLSAxXVsxNF0gPSAoKGJ5dGVzLmxlbmd0aCAtIDEpICogOCkgLyBNYXRoLnBvdygyLCAzMik7XG4gICAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICAgIE1bTiAtIDFdWzE1XSA9ICgoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4KSAmIDB4ZmZmZmZmZmY7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICAgICAgY29uc3QgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGEgPSBIWzBdO1xuICAgICAgICBsZXQgYiA9IEhbMV07XG4gICAgICAgIGxldCBjID0gSFsyXTtcbiAgICAgICAgbGV0IGQgPSBIWzNdO1xuICAgICAgICBsZXQgZSA9IEhbNF07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgICAgICAgIGNvbnN0IFQgPSAoUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbdF0pID4+PiAwO1xuICAgICAgICAgICAgZSA9IGQ7XG4gICAgICAgICAgICBkID0gYztcbiAgICAgICAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgICAgICAgIGIgPSBhO1xuICAgICAgICAgICAgYSA9IFQ7XG4gICAgICAgIH1cbiAgICAgICAgSFswXSA9IChIWzBdICsgYSkgPj4+IDA7XG4gICAgICAgIEhbMV0gPSAoSFsxXSArIGIpID4+PiAwO1xuICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSA+Pj4gMDtcbiAgICAgICAgSFszXSA9IChIWzNdICsgZCkgPj4+IDA7XG4gICAgICAgIEhbNF0gPSAoSFs0XSArIGUpID4+PiAwO1xuICAgIH1cbiAgICByZXR1cm4gVWludDhBcnJheS5vZihIWzBdID4+IDI0LCBIWzBdID4+IDE2LCBIWzBdID4+IDgsIEhbMF0sIEhbMV0gPj4gMjQsIEhbMV0gPj4gMTYsIEhbMV0gPj4gOCwgSFsxXSwgSFsyXSA+PiAyNCwgSFsyXSA+PiAxNiwgSFsyXSA+PiA4LCBIWzJdLCBIWzNdID4+IDI0LCBIWzNdID4+IDE2LCBIWzNdID4+IDgsIEhbM10sIEhbNF0gPj4gMjQsIEhbNF0gPj4gMTYsIEhbNF0gPj4gOCwgSFs0XSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBzaGExO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHZvaWQgMDtcbmNvbnN0IHZhbGlkYXRlX2pzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKTtcbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5mdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmV4cG9ydHMudW5zYWZlU3RyaW5naWZ5ID0gdW5zYWZlU3RyaW5naWZ5O1xuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghKDAsIHZhbGlkYXRlX2pzXzEuZGVmYXVsdCkodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBzdHJpbmdpZnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXBkYXRlVjFTdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IHJuZ19qc18xID0gcmVxdWlyZShcIi4vcm5nLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5jb25zdCBfc3RhdGUgPSB7fTtcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgbGV0IGJ5dGVzO1xuICAgIGNvbnN0IGlzVjYgPSBvcHRpb25zPy5fdjYgPz8gZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uc0tleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnNLZXlzLmxlbmd0aCA9PT0gMSAmJiBvcHRpb25zS2V5c1swXSA9PT0gJ192NicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgYnl0ZXMgPSB2MUJ5dGVzKG9wdGlvbnMucmFuZG9tID8/IG9wdGlvbnMucm5nPy4oKSA/PyAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKSwgb3B0aW9ucy5tc2Vjcywgb3B0aW9ucy5uc2Vjcywgb3B0aW9ucy5jbG9ja3NlcSwgb3B0aW9ucy5ub2RlLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBybmRzID0gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCk7XG4gICAgICAgIHVwZGF0ZVYxU3RhdGUoX3N0YXRlLCBub3csIHJuZHMpO1xuICAgICAgICBieXRlcyA9IHYxQnl0ZXMocm5kcywgX3N0YXRlLm1zZWNzLCBfc3RhdGUubnNlY3MsIGlzVjYgPyB1bmRlZmluZWQgOiBfc3RhdGUuY2xvY2tzZXEsIGlzVjYgPyB1bmRlZmluZWQgOiBfc3RhdGUubm9kZSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmID8/ICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVYxU3RhdGUoc3RhdGUsIG5vdywgcm5kcykge1xuICAgIHN0YXRlLm1zZWNzID8/PSAtSW5maW5pdHk7XG4gICAgc3RhdGUubnNlY3MgPz89IDA7XG4gICAgaWYgKG5vdyA9PT0gc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUubnNlY3MrKztcbiAgICAgICAgaWYgKHN0YXRlLm5zZWNzID49IDEwMDAwKSB7XG4gICAgICAgICAgICBzdGF0ZS5ub2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgc3RhdGUubnNlY3MgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vdyA+IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLm5zZWNzID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAobm93IDwgc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUubm9kZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKCFzdGF0ZS5ub2RlKSB7XG4gICAgICAgIHN0YXRlLm5vZGUgPSBybmRzLnNsaWNlKDEwLCAxNik7XG4gICAgICAgIHN0YXRlLm5vZGVbMF0gfD0gMHgwMTtcbiAgICAgICAgc3RhdGUuY2xvY2tzZXEgPSAoKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldKSAmIDB4M2ZmZjtcbiAgICB9XG4gICAgc3RhdGUubXNlY3MgPSBub3c7XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZXhwb3J0cy51cGRhdGVWMVN0YXRlID0gdXBkYXRlVjFTdGF0ZTtcbmZ1bmN0aW9uIHYxQnl0ZXMocm5kcywgbXNlY3MsIG5zZWNzLCBjbG9ja3NlcSwgbm9kZSwgYnVmLCBvZmZzZXQgPSAwKSB7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgaWYgKCFidWYpIHtcbiAgICAgICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMTYgPiBidWYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVVVJRCBieXRlIHJhbmdlICR7b2Zmc2V0fToke29mZnNldCArIDE1fSBpcyBvdXQgb2YgYnVmZmVyIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1zZWNzID8/PSBEYXRlLm5vdygpO1xuICAgIG5zZWNzID8/PSAwO1xuICAgIGNsb2Nrc2VxID8/PSAoKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldKSAmIDB4M2ZmZjtcbiAgICBub2RlID8/PSBybmRzLnNsaWNlKDEwLCAxNik7XG4gICAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG4gICAgY29uc3QgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bCA+Pj4gMjQpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKHRsID4+PiAxNikgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodGwgPj4+IDgpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gdGwgJiAweGZmO1xuICAgIGNvbnN0IHRtaCA9ICgobXNlY3MgLyAweDEwMDAwMDAwMCkgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICh0bWggPj4+IDgpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gdG1oICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKCh0bWggPj4+IDI0KSAmIDB4ZikgfCAweDEwO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAodG1oID4+PiAxNikgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoY2xvY2tzZXEgPj4+IDgpIHwgMHg4MDtcbiAgICBidWZbb2Zmc2V0KytdID0gY2xvY2tzZXEgJiAweGZmO1xuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQrK10gPSBub2RlW25dO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gdjFUb1Y2KHV1aWQpIHtcbiAgICBjb25zdCB2MUJ5dGVzID0gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkodXVpZCkgOiB1dWlkO1xuICAgIGNvbnN0IHY2Qnl0ZXMgPSBfdjFUb1Y2KHYxQnl0ZXMpO1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KSh2NkJ5dGVzKSA6IHY2Qnl0ZXM7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2MVRvVjY7XG5mdW5jdGlvbiBfdjFUb1Y2KHYxQnl0ZXMpIHtcbiAgICByZXR1cm4gVWludDhBcnJheS5vZigoKHYxQnl0ZXNbNl0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1s3XSA+PiA0KSAmIDB4MGYpLCAoKHYxQnl0ZXNbN10gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1s0XSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbNF0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1s1XSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbNV0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1swXSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbMF0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1sxXSAmIDB4ZjApID4+IDQpLCAoKHYxQnl0ZXNbMV0gJiAweDBmKSA8PCA0KSB8ICgodjFCeXRlc1syXSAmIDB4ZjApID4+IDQpLCAweDYwIHwgKHYxQnl0ZXNbMl0gJiAweDBmKSwgdjFCeXRlc1szXSwgdjFCeXRlc1s4XSwgdjFCeXRlc1s5XSwgdjFCeXRlc1sxMF0sIHYxQnl0ZXNbMTFdLCB2MUJ5dGVzWzEyXSwgdjFCeXRlc1sxM10sIHYxQnl0ZXNbMTRdLCB2MUJ5dGVzWzE1XSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSB2b2lkIDA7XG5jb25zdCBtZDVfanNfMSA9IHJlcXVpcmUoXCIuL21kNS5qc1wiKTtcbmNvbnN0IHYzNV9qc18xID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xudmFyIHYzNV9qc18yID0gcmVxdWlyZShcIi4vdjM1LmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRE5TXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2MzVfanNfMi5ETlM7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVUkxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLlVSTDsgfSB9KTtcbmZ1bmN0aW9uIHYzKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgcmV0dXJuICgwLCB2MzVfanNfMS5kZWZhdWx0KSgweDMwLCBtZDVfanNfMS5kZWZhdWx0LCB2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCk7XG59XG52My5ETlMgPSB2MzVfanNfMS5ETlM7XG52My5VUkwgPSB2MzVfanNfMS5VUkw7XG5leHBvcnRzLmRlZmF1bHQgPSB2MztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IGV4cG9ydHMuc3RyaW5nVG9CeXRlcyA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShzdHIubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgICAgICBieXRlc1tpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXM7XG59XG5leHBvcnRzLnN0cmluZ1RvQnl0ZXMgPSBzdHJpbmdUb0J5dGVzO1xuZXhwb3J0cy5ETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydHMuVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5mdW5jdGlvbiB2MzUodmVyc2lvbiwgaGFzaCwgdmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICBjb25zdCB2YWx1ZUJ5dGVzID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHN0cmluZ1RvQnl0ZXModmFsdWUpIDogdmFsdWU7XG4gICAgY29uc3QgbmFtZXNwYWNlQnl0ZXMgPSB0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJyA/ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKG5hbWVzcGFjZSkgOiBuYW1lc3BhY2U7XG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hbWVzcGFjZSA9ICgwLCBwYXJzZV9qc18xLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuICAgIGlmIChuYW1lc3BhY2U/Lmxlbmd0aCAhPT0gMTYpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfVxuICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KDE2ICsgdmFsdWVCeXRlcy5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2VCeXRlcyk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlQnl0ZXMsIG5hbWVzcGFjZUJ5dGVzLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IChieXRlc1s2XSAmIDB4MGYpIHwgdmVyc2lvbjtcbiAgICBieXRlc1s4XSA9IChieXRlc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2MzU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG5hdGl2ZV9qc18xID0gcmVxdWlyZShcIi4vbmF0aXZlLmpzXCIpO1xuY29uc3Qgcm5nX2pzXzEgPSByZXF1aXJlKFwiLi9ybmcuanNcIik7XG5jb25zdCBzdHJpbmdpZnlfanNfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZV9qc18xLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVfanNfMS5kZWZhdWx0LnJhbmRvbVVVSUQoKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tID8/IG9wdGlvbnMucm5nPy4oKSA/PyAoMCwgcm5nX2pzXzEuZGVmYXVsdCkoKTtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDE2ID4gYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFVVSUQgYnl0ZSByYW5nZSAke29mZnNldH06JHtvZmZzZXQgKyAxNX0gaXMgb3V0IG9mIGJ1ZmZlciBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBzdHJpbmdpZnlfanNfMS51bnNhZmVTdHJpbmdpZnkpKHJuZHMpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSB2b2lkIDA7XG5jb25zdCBzaGExX2pzXzEgPSByZXF1aXJlKFwiLi9zaGExLmpzXCIpO1xuY29uc3QgdjM1X2pzXzEgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG52YXIgdjM1X2pzXzIgPSByZXF1aXJlKFwiLi92MzUuanNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJETlNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHYzNV9qc18yLkROUzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlVSTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdjM1X2pzXzIuVVJMOyB9IH0pO1xuZnVuY3Rpb24gdjUodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gKDAsIHYzNV9qc18xLmRlZmF1bHQpKDB4NTAsIHNoYTFfanNfMS5kZWZhdWx0LCB2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCk7XG59XG52NS5ETlMgPSB2MzVfanNfMS5ETlM7XG52NS5VUkwgPSB2MzVfanNfMS5VUkw7XG5leHBvcnRzLmRlZmF1bHQgPSB2NTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5jb25zdCB2MV9qc18xID0gcmVxdWlyZShcIi4vdjEuanNcIik7XG5jb25zdCB2MVRvVjZfanNfMSA9IHJlcXVpcmUoXCIuL3YxVG9WNi5qc1wiKTtcbmZ1bmN0aW9uIHY2KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgb3B0aW9ucyA/Pz0ge307XG4gICAgb2Zmc2V0ID8/PSAwO1xuICAgIGxldCBieXRlcyA9ICgwLCB2MV9qc18xLmRlZmF1bHQpKHsgLi4ub3B0aW9ucywgX3Y2OiB0cnVlIH0sIG5ldyBVaW50OEFycmF5KDE2KSk7XG4gICAgYnl0ZXMgPSAoMCwgdjFUb1Y2X2pzXzEuZGVmYXVsdCkoYnl0ZXMpO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdjY7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhcnNlX2pzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS5qc1wiKTtcbmNvbnN0IHN0cmluZ2lmeV9qc18xID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gdjZUb1YxKHV1aWQpIHtcbiAgICBjb25zdCB2NkJ5dGVzID0gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIHBhcnNlX2pzXzEuZGVmYXVsdCkodXVpZCkgOiB1dWlkO1xuICAgIGNvbnN0IHYxQnl0ZXMgPSBfdjZUb1YxKHY2Qnl0ZXMpO1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgc3RyaW5naWZ5X2pzXzEudW5zYWZlU3RyaW5naWZ5KSh2MUJ5dGVzKSA6IHYxQnl0ZXM7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2NlRvVjE7XG5mdW5jdGlvbiBfdjZUb1YxKHY2Qnl0ZXMpIHtcbiAgICByZXR1cm4gVWludDhBcnJheS5vZigoKHY2Qnl0ZXNbM10gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1s0XSA+PiA0KSAmIDB4MGYpLCAoKHY2Qnl0ZXNbNF0gJiAweDBmKSA8PCA0KSB8ICgodjZCeXRlc1s1XSAmIDB4ZjApID4+IDQpLCAoKHY2Qnl0ZXNbNV0gJiAweDBmKSA8PCA0KSB8ICh2NkJ5dGVzWzZdICYgMHgwZiksIHY2Qnl0ZXNbN10sICgodjZCeXRlc1sxXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzJdICYgMHhmMCkgPj4gNCksICgodjZCeXRlc1syXSAmIDB4MGYpIDw8IDQpIHwgKCh2NkJ5dGVzWzNdICYgMHhmMCkgPj4gNCksIDB4MTAgfCAoKHY2Qnl0ZXNbMF0gJiAweGYwKSA+PiA0KSwgKCh2NkJ5dGVzWzBdICYgMHgwZikgPDwgNCkgfCAoKHY2Qnl0ZXNbMV0gJiAweGYwKSA+PiA0KSwgdjZCeXRlc1s4XSwgdjZCeXRlc1s5XSwgdjZCeXRlc1sxMF0sIHY2Qnl0ZXNbMTFdLCB2NkJ5dGVzWzEyXSwgdjZCeXRlc1sxM10sIHY2Qnl0ZXNbMTRdLCB2NkJ5dGVzWzE1XSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXBkYXRlVjdTdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IHJuZ19qc18xID0gcmVxdWlyZShcIi4vcm5nLmpzXCIpO1xuY29uc3Qgc3RyaW5naWZ5X2pzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5jb25zdCBfc3RhdGUgPSB7fTtcbmZ1bmN0aW9uIHY3KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgbGV0IGJ5dGVzO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGJ5dGVzID0gdjdCeXRlcyhvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCksIG9wdGlvbnMubXNlY3MsIG9wdGlvbnMuc2VxLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBybmRzID0gKDAsIHJuZ19qc18xLmRlZmF1bHQpKCk7XG4gICAgICAgIHVwZGF0ZVY3U3RhdGUoX3N0YXRlLCBub3csIHJuZHMpO1xuICAgICAgICBieXRlcyA9IHY3Qnl0ZXMocm5kcywgX3N0YXRlLm1zZWNzLCBfc3RhdGUuc2VxLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIHJldHVybiBidWYgPz8gKDAsIHN0cmluZ2lmeV9qc18xLnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufVxuZnVuY3Rpb24gdXBkYXRlVjdTdGF0ZShzdGF0ZSwgbm93LCBybmRzKSB7XG4gICAgc3RhdGUubXNlY3MgPz89IC1JbmZpbml0eTtcbiAgICBzdGF0ZS5zZXEgPz89IDA7XG4gICAgaWYgKG5vdyA+IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLnNlcSA9IChybmRzWzZdIDw8IDIzKSB8IChybmRzWzddIDw8IDE2KSB8IChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XTtcbiAgICAgICAgc3RhdGUubXNlY3MgPSBub3c7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdGF0ZS5zZXEgPSAoc3RhdGUuc2VxICsgMSkgfCAwO1xuICAgICAgICBpZiAoc3RhdGUuc2VxID09PSAwKSB7XG4gICAgICAgICAgICBzdGF0ZS5tc2VjcysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydHMudXBkYXRlVjdTdGF0ZSA9IHVwZGF0ZVY3U3RhdGU7XG5mdW5jdGlvbiB2N0J5dGVzKHJuZHMsIG1zZWNzLCBzZXEsIGJ1Ziwgb2Zmc2V0ID0gMCkge1xuICAgIGlmIChybmRzLmxlbmd0aCA8IDE2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZG9tIGJ5dGVzIGxlbmd0aCBtdXN0IGJlID49IDE2Jyk7XG4gICAgfVxuICAgIGlmICghYnVmKSB7XG4gICAgICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDE2ID4gYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFVVSUQgYnl0ZSByYW5nZSAke29mZnNldH06JHtvZmZzZXQgKyAxNX0gaXMgb3V0IG9mIGJ1ZmZlciBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtc2VjcyA/Pz0gRGF0ZS5ub3coKTtcbiAgICBzZXEgPz89ICgocm5kc1s2XSAqIDB4N2YpIDw8IDI0KSB8IChybmRzWzddIDw8IDE2KSB8IChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XTtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBtc2VjcyAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IDB4NzAgfCAoKHNlcSA+Pj4gMjgpICYgMHgwZik7XG4gICAgYnVmW29mZnNldCsrXSA9IChzZXEgPj4+IDIwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IDB4ODAgfCAoKHNlcSA+Pj4gMTQpICYgMHgzZik7XG4gICAgYnVmW29mZnNldCsrXSA9IChzZXEgPj4+IDYpICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKChzZXEgPDwgMikgJiAweGZmKSB8IChybmRzWzEwXSAmIDB4MDMpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzExXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxMl07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTNdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzE0XTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxNV07XG4gICAgcmV0dXJuIGJ1Zjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHY3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWdleF9qc18xID0gcmVxdWlyZShcIi4vcmVnZXguanNcIik7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiByZWdleF9qc18xLmRlZmF1bHQudGVzdCh1dWlkKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2YWxpZGF0ZV9qc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIik7XG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgICBpZiAoISgwLCB2YWxpZGF0ZV9qc18xLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHZlcnNpb247XG4iLCJpbXBvcnQgeyB1c2VJbW1lclJlZHVjZXIgfSBmcm9tICd1c2UtaW1tZXInO1xuaW1wb3J0IHsgcGFyYW1ldGVySW5pdGlhbFN0YXRlLCB2YWx2ZVN0YXR1cyB9IGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCB0eXBlIHsgUGFyYW1ldGVyQWN0aW9uLCBQYXJhbUl0ZW0sIFVzZVBhcmFtZXRlclJlZHVjZXIsIFVzZVZhbHZlUmVkdWNlciwgVmFsdmVBY3Rpb24sIFZhbHZlU3RhdGV9IGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiB2YWx2ZVJlZHVjZXIoZHJhZnQ6IFZhbHZlU3RhdGUgLCBhY3Rpb246IFZhbHZlQWN0aW9uKTogVmFsdmVTdGF0ZXtcblx0c3dpdGNoIChhY3Rpb24udHlwZSl7XG5cdFx0Y2FzZSAnVVBEQVRFX0FDVF9DT05GSUcnOlxuXHRcdFx0ZHJhZnQuYWN0aXZhdGVkQ29uZmlnID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdFx0Y2FzZSAnVVBEQVRFX0RFQUNUX0NPTkZJRyc6XG5cdFx0XHRcdGRyYWZ0LmRlYWN0aXZhdGVkQ29uZmlnID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0XHRcdGNhc2UgJ1VQREFURV9BQ1RfRkInOlxuXHRcdFx0XHRcdGRyYWZ0LmFjdEZCID0gIWRyYWZ0LmFjdEZCO1xuXHRcdFx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRcdFx0Y2FzZSAnVVBEQVRFX0RFX0FDVF9GQic6XG5cdFx0XHRcdFx0ZHJhZnQuZGVBY3RGQiA9ICFkcmFmdC5kZUFjdEZCO1xuXHRcdFx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRcdFx0Y2FzZSAnVVBEQVRFX1VTTCc6XG5cdFx0XHRcdFx0ZHJhZnQudXNsID0gIWRyYWZ0LnVzbDtcblx0XHRcdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0XHRcdGNhc2UgJ1VQREFURV9MU0wnOlxuXHRcdFx0XHRcdGRyYWZ0LmxzbCA9ICFkcmFmdC5sc2w7XG5cdFx0XHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdFx0XHRjYXNlICdVUERBVEVfTUFOVUFMJzpcblx0XHRcdFx0XHRkcmFmdC5tYW51YWwgPSAhZHJhZnQubWFudWFsO1xuXHRcdFx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRcdFx0Y2FzZSAnVVBEQVRFX0FMQVJNJzpcblx0XHRcdFx0XHRkcmFmdC5hbGFybSA9ICFkcmFmdC5hbGFybTtcblx0XHRcdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0XHRcdGNhc2UgJ1VQREFURV9NQVNLRUQnOlxuXHRcdFx0XHRcdGRyYWZ0Lm1hc2tlZCA9ICFkcmFmdC5tYXNrZWQ7XG5cdFx0XHRcdFx0cmV0dXJuIGRyYWZ0O1xuXHRcdFx0XHRjYXNlICdVUERBVEVfQ0hBTkdJTkcnOlxuXHRcdFx0XHRcdGRyYWZ0LmNoYW5naW5nID0gIWRyYWZ0LmNoYW5naW5nO1xuXHRcdFx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRcdFx0Y2FzZSAnVVBEQVRFX0xPQ0FURSc6XG5cdFx0XHRcdFx0ZHJhZnQubG9jYXRlID0gIWRyYWZ0LmxvY2F0ZTtcblx0XHRcdFx0XHRyZXR1cm4gZHJhZnQ7XG5cdFx0ZGVmYXVsdDogLy8gI1RPRE8gQWRkIG1vcmUgcmVkdWNlciBjYXNlIHN0YXRlbWVudHNcblx0XHRcdHJldHVybiBkcmFmdFxuXHR9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVmFsdmVSZWR1Y2VyKCk6IFVzZVZhbHZlUmVkdWNlciB7XG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlSW1tZXJSZWR1Y2VyKHZhbHZlUmVkdWNlciwgdmFsdmVTdGF0dXMpO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUFjdENvbmZpZyh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0FDVF9DT05GSUcnLCB2YWx1ZSB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVEZUFjdENvbmZpZyh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0RFQUNUX0NPTkZJRycsIHZhbHVlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVVzbCgpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfVVNMJyB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVMc2woKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0xTTCcgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQWxhcm0oKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0FMQVJNJyB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVBY3RGQigpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfQUNUX0ZCJyB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVEZUFjdEZCKCkge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9ERV9BQ1RfRkInIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZU1hbnVhbCgpIHtcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfTUFOVUFMJyB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVNYXNrZWQoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX01BU0tFRCcgfSk7XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQ2hhbmdpbmcoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0NIQU5HSU5HJyB9KTtcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVMb2NhdGUoKSB7XG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0xPQ0FURScgfSk7XG5cdH1cblxuXHRjb25zdCB1c2VFZGl0VmFsdmVSZWR1Y2VyID0ge1xuXHRcdHN0YXRlLFxuXHRcdHJlZHVjZXI6IHtcblx0XHRcdHVwZGF0ZUFjdENvbmZpZyxcblx0XHRcdHVwZGF0ZURlQWN0Q29uZmlnLFxuXHRcdFx0dXBkYXRlQWxhcm0sXG5cdFx0XHR1cGRhdGVBY3RGQixcblx0XHRcdHVwZGF0ZURlQWN0RkIsXG5cdFx0XHR1cGRhdGVVc2wsXG5cdFx0XHR1cGRhdGVMc2wsXG5cdFx0XHR1cGRhdGVNYW51YWwsXG5cdFx0XHR1cGRhdGVNYXNrZWQsXG5cdFx0XHR1cGRhdGVDaGFuZ2luZyxcblx0XHRcdHVwZGF0ZUxvY2F0ZSxcblx0fVxufVxuXG5cdHJldHVybiB1c2VFZGl0VmFsdmVSZWR1Y2VyXG5cbn1cbi8qKlxuICogIFVwZGF0ZSBhIHBhcmFtZXRlciBpdGVtIGluIGEgbGlzdCBvZiBwYXJhbWV0ZXIgaXRlbXNcbiovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIFBhcmFtZXRlclJlZHVjZXIoZHJhZnQ6IFBhcmFtSXRlbVtdLCBhY3Rpb246IFBhcmFtZXRlckFjdGlvbik6IFBhcmFtSXRlbVtde1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKXtcblx0XHRjYXNlICdVUERBVEVfVkFMVUUnOlxuXHRcdFx0ZHJhZnRbYWN0aW9uLmluZGV4XS5pbnB1dC52YWx1ZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdHJldHVybiBkcmFmdDtcblx0XHRkZWZhdWx0OiAvLyAjVE9ETyBBZGQgbW9yZSByZWR1Y2VyIGNhc2Ugc3RhdGVtZW50c1xuXHRcdFx0cmV0dXJuIGRyYWZ0XG5cdH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbUl0ZW1zUmVkdWNlcigpOiBVc2VQYXJhbWV0ZXJSZWR1Y2VyIHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VJbW1lclJlZHVjZXIoUGFyYW1ldGVyUmVkdWNlciwgcGFyYW1ldGVySW5pdGlhbFN0YXRlICk7XG5cblx0ZnVuY3Rpb24gdXBkYXRlVmFsdWUoaW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9WQUxVRScsIGluZGV4OiBpbmRleCAsIHZhbHVlOiB2YWx1ZX0pO1xuXHR9XG5cdC8vIEFkZCBtb3JlIGRpc3BhdGNoIGZ1bmN0aW9ucyBoZXJlXG5jb25zdCB1c2VQYXJhbWV0ZXJSZWR1Y2VyID17XG5cdFx0c3RhdGUsXG5cdFx0cmVkdWNlcjp7XG5cdFx0XHR1cGRhdGVWYWx1ZVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdXNlUGFyYW1ldGVyUmVkdWNlclxufVxuIiwiLyoqXG4gKiBUaGUgcHVycG9zZSBvZiBpbml0aWFsU3RhdGVzLnRzIGlzIHRvIHByb3ZpZGUgaW5pdGlhbCBzdGF0ZSBmb3IgY29tcG9uZW50IHByb3BzXG4gKi9cbi8vIGluaXRpYWxTdGF0ZS50c1xuXG5pbXBvcnQgeyBQYXJhbUl0ZW0gfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5cblxuZXhwb3J0IGNvbnN0IHZhbHZlU3RhdHVzID0ge1xuXHRhbGFybTogZmFsc2UsXG5cdGFjdEZCOiBmYWxzZSxcblx0ZGVBY3RGQjogdHJ1ZSxcblx0YWN0aXZhdGVkQ29uZmlnOiA3LFxuXHRkZWFjdGl2YXRlZENvbmZpZzogNSxcblx0aXRlbU5hbWU6IFwiVlhYWFwiLFxuXHRtYW51YWw6IGZhbHNlLFxuXHRtYXNrZWQ6IGZhbHNlLFxuXHRjaGFuZ2luZzogZmFsc2UsXG5cdGxvY2F0ZTogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgdmFsdmVQcm9wcyA9IHtcblx0VmFsdmVTdGF0dXM6IHZhbHZlU3RhdHVzLFxuXHRoYW5kbGVDbGljazogKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiVmFsdmUgY2xpY2tlZFwiKTtcblx0fSxcbn07XG5cbmV4cG9ydCBjb25zdCBwYXJhbWV0ZXJJbml0aWFsU3RhdGUgPSBbe1xuXHRcdGxhYmVsOiB7XG5cdFx0XHR0ZXh0OiBcImxhYmVsXCIsXG5cdFx0XHRjbGFzc05hbWU6IFwiXCIsXG5cdFx0XHR0b29sdGlwVGV4dDogXCJcIixcblx0XHRcdHRvb2x0aXBQb3NpdGlvbjogXCJcIixcblx0XHRcdHRvb2x0aXBDbGFzc05hbWU6IFwiXCIsXG5cdFx0XHR0b29sdGlwSWQ6IFwiXCIsXG5cdFx0fSxcblx0XHRpbnB1dDoge1xuXHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRpbnB1dG1vZGU6IFwibnVtZXJpY1wiLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwiXCIsXG5cdFx0XHRlZGl0YWJsZTogdHJ1ZSxcblx0XHRcdHBhdHRlcm46IFwiXlswLTldKlsuLF0/WzAtOV0qJFwiLFxuXHRcdFx0bWluOiAwLFxuXHRcdFx0bWF4OiAxMDAsXG5cdFx0XHRkZWNpbWFsUGxhY2VzOiAyLFxuXHRcdFx0ZXU6IFwiXCIsXG5cdFx0XHR2YWx1ZTogMCxcblx0XHR9LFxuXHR9IGFzIFBhcmFtSXRlbSBdO1xuIiwiaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwiQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50XCI7XG5cblxuXG5leHBvcnQgY29uc3QgVkFMVkVfQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5wcm9jZXNzX29iamVjdHMuVmFsdmVcIjtcblxuZXhwb3J0IHR5cGUgVmFsdmVTdGF0ZSA9IHtcblx0YWxhcm06IGJvb2xlYW47XG5cdGFjdEZCOiBib29sZWFuO1xuXHRkZUFjdEZCOiBib29sZWFuO1xuXHR1c2w/OmJvb2xlYW47XG5cdGxzbD86IGJvb2xlYW47XG5cdGFjdGl2YXRlZENvbmZpZzogbnVtYmVyO1xuXHRkZWFjdGl2YXRlZENvbmZpZzogbnVtYmVyO1xuXHRpdGVtTmFtZTogc3RyaW5nO1xuXHRtYW51YWw6IGJvb2xlYW47XG5cdG1hc2tlZDogYm9vbGVhbjtcblx0Y2hhbmdpbmc6IGJvb2xlYW47XG5cdGxvY2F0ZTogYm9vbGVhbjtcbn07XG5cblxuXG5leHBvcnQgdHlwZSBWYWx2ZUNvbXBvdW5kQ29udGV4dFR5cGUgPSB7XG5cdGNvbXBvbmVudFByb3BzOkNvbXBvbmVudFByb3BzPGFueSxhbnk+LFxuXHR2YWx2ZVByb3BzOiBWYWx2ZVByb3BzO1xuXHRvbkFjdGlvblBlcmZvcm1lZDogKCk9PiB2b2lkXG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuZXhwb3J0IHR5cGUgVmFsdmVDb21wb3VuZFJvb3RQcm9wcyA9IHtcblx0Y29tcG9uZW50UHJvcHM6Q29tcG9uZW50UHJvcHM8YW55LGFueT4sXG5cdHZhbHZlUHJvcHM6VmFsdmVQcm9wcyxcblx0b25BY3Rpb25QZXJmb3JtZWQ6ICgpPT4gdm9pZFxuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuLyoqXG4gKiBEZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBQYXJhbWV0ZXJBY3Rpb24gdHlwZVxuICogQFVzZWFnZSB1c2VQYXJhbWV0ZXJSZWR1Y2VyXG4gKi9cbmV4cG9ydCB0eXBlIFBhcmFtZXRlckFjdGlvbiA9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9WQUxVRVwiOyB2YWx1ZTogbnVtYmVyICwgaW5kZXg6IG51bWJlcn1cblxuXHQ7XG5cbmV4cG9ydCB0eXBlIFBhcmFtZXRlclJlZHVjZXIgPSAoXG5cdHN0YXRlOiBQYXJhbUl0ZW0gfCBQYXJhbUl0ZW1bXSxcblx0YWN0aW9uOiBQYXJhbWV0ZXJBY3Rpb25cbikgPT4gVmFsdmVTdGF0ZTtcblxuZXhwb3J0IHR5cGUgVXNlUGFyYW1ldGVyUmVkdWNlciA9IHtcblx0c3RhdGU6IFBhcmFtSXRlbVtdO1xuXHRyZWR1Y2VyOiB7XG5cdFx0dXBkYXRlVmFsdWU6ICh2YWx1ZTpudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG5cdFx0Ly9hZGQgbW9yZSBoYW5kbGVycyBhcyBuZWVkZWRcblx0fTtcbn07XG5leHBvcnQgdHlwZSBQYXJhbUxhYmVsID0ge1xuXHR0ZXh0OiBzdHJpbmc7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblx0dG9vbHRpcFRleHQ/OiBzdHJpbmc7XG5cdHRvb2x0aXBQb3NpdGlvbj86IHN0cmluZztcblx0dG9vbHRpcENsYXNzTmFtZT86IHN0cmluZztcblx0dG9vbHRpcElkPzogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgUGFyYW1JbnB1dCA9IHtcblx0dHlwZTogc3RyaW5nO1xuXHRpbnB1dG1vZGU6IHN0cmluZztcblx0cGxhY2Vob2xkZXI6IHN0cmluZztcblx0ZWRpdGFibGU6IGJvb2xlYW47XG5cdHBhdHRlcm46IHN0cmluZztcblx0bWluOiBudW1iZXI7XG5cdG1heDogbnVtYmVyO1xuXHRkZWNpbWFsUGxhY2VzOiBudW1iZXI7XG5cdC8vIHBhdHRlcm46IFwiXlswLTldKlsuLF0/WzAtOV0qJFwiIGZvciBkZWNpbWFsIG51bWJlcnNcblx0Ly8gcGF0dGVybjogXCJeWzAtOV0qJFwiIGZvciBpbnRlZ2Vyc1xuXHRldTogc3RyaW5nO1xuXHR2YWx1ZTogbnVtYmVyO1xufVxuLy8gdHlwZSBQYXJhbXNIZWFkZXIgPSB7XG4vLyBcdGxhYmVsOiBzdHJpbmdcbi8vIH1cbmV4cG9ydCB0eXBlIFBhcmFtSXRlbSA9IHtcblx0bGFiZWw6IFBhcmFtTGFiZWw7XG5cdGlucHV0OiBQYXJhbUlucHV0O1xufVxuZXhwb3J0IHR5cGUgUGFyYW1ldGVyc0xpc3RTdGF0ZSA9IHtcblx0cGFyYW1ldGVyczogUGFyYW1JdGVtW11cbn1cbi8qKlxuICogRGVmaW5lIHRoZSBzaGFwZSBvZiB0aGUgVmFsdmVBY3Rpb24gdHlwZVxuICogQFVzZWFnZSB1c2VWYWx2ZVJlZHVjZXJcbiAqL1xuZXhwb3J0IHR5cGUgVmFsdmVBY3Rpb24gPVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQUNUX0NPTkZJR1wiOyB2YWx1ZTogbnVtYmVyIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0RFQUNUX0NPTkZJR1wiOyB2YWx1ZTogbnVtYmVyIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0FDVF9GQlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0RFX0FDVF9GQlwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX1VTTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0xTTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX01BTlVBTFwiIH1cblx0fCB7IHR5cGU6IFwiVVBEQVRFX0FMQVJNXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfTUFTS0VEXCIgfVxuXHR8IHsgdHlwZTogXCJVUERBVEVfQ0hBTkdJTkdcIiB9XG5cdHwgeyB0eXBlOiBcIlVQREFURV9MT0NBVEVcIiB9XG5cdDtcblxuZXhwb3J0IHR5cGUgVmFsdmVSZWR1Y2VyID0gKFxuXHRzdGF0ZTogVmFsdmVTdGF0ZSxcblx0YWN0aW9uOiBWYWx2ZUFjdGlvblxuKSA9PiBWYWx2ZVN0YXRlO1xuXG5leHBvcnQgdHlwZSBVc2VWYWx2ZVJlZHVjZXIgPSB7XG5cdHN0YXRlOiBWYWx2ZVN0YXRlO1xuXHRyZWR1Y2VyOiB7XG5cdFx0dXBkYXRlQWN0Q29uZmlnOiAodmFsdWU6bnVtYmVyKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZURlQWN0Q29uZmlnOiAodmFsdWU6bnVtYmVyKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUFsYXJtOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUFjdEZCOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZURlQWN0RkI6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlVXNsOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxzbDogKCkgPT4gdm9pZDtcblx0XHR1cGRhdGVNYW51YWw6ICgpID0+IHZvaWQ7XG5cdFx0dXBkYXRlTWFza2VkOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUNoYW5naW5nOiAoKSA9PiB2b2lkO1xuXHRcdHVwZGF0ZUxvY2F0ZTogKCkgPT4gdm9pZDtcblxuXHRcdC8vYWRkIG1vcmUgaGFuZGxlcnMgYXMgbmVlZGVkXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgVmFsdmVDbGFzc05hbWVFbnVtID0ge1xuXHRBbGFybVN0YXRlOiBcIkFsYXJtU3RhdGVcIixcblx0QWN0aXZhdGVkOiBcIkFjdGl2YXRlZFwiLFxuXHREZWFjdGl2YXRlZDogXCJEZWFjdGl2YXRlZFwiLFxuXHRNYW51YWw6IFwiTWFudWFsXCIsXG5cdE1hc2tlZDogXCJNYXNrZWRcIixcblx0Q2hhbmdpbmc6IFwiQ2hhbmdpbmdcIixcblx0Tm9BbGFybU1hc2s6IFwiTm9BbGFybU1hc2tcIixcblx0TG9jYXRlOiBcIkxvY2F0ZVwiXG59O1xuZXhwb3J0IHR5cGUgVmFsdmVDbGFzc05hbWVFbnVtID1cblx0KHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW0pW2tleW9mIHR5cGVvZiBWYWx2ZUNsYXNzTmFtZUVudW1dO1xuZXhwb3J0IGNvbnN0IEl0ZW1OYW1lRW51bSA9IHtcblx0VjFiMTogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjFiMjogXCJ2MWIyXCIsIC8vIGluZGV4IDFcblx0VjFiMzogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNDogXCJ2MWI0XCIsIC8vIGluZGV4IDNcblx0VjJiMTogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMjogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMzogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjNiMTogXCJ2M2IxXCIsIC8vIGluZGV4IDhcblx0VjNiMjogXCJ2M2IyXCIsIC8vIGluZGV4IDlcblx0VjNiMzogXCJ2M2IzXCIsIC8vIGluZGV4IDEwXG5cdFYzYjQ6IFwidjNiNFwiLCAvLyBpbmRleCAxMVxuXHRWMjogXCJ2MlwiLCAvLyBpbmRleCAxMlxuXHRWMzogXCJ2M1wiLCAvLyBpbmRleCAxM1xuXHRWMTogXCJ2MVwiLCAvLyBpbmRleCAxNFxuXHRWMmYxOiBcInYyZjFcIiwgLy8gaW5kZXggMTVcblx0VjJmMjogXCJ2MmYyXCIsIC8vIGluZGV4IDE2XG5cdFYzZjE6IFwidjNmMVwiLCAvLyBpbmRleCAxN1xuXHRWM2YyOiBcInYzZjJcIiwgLy8gaW5kZXggMThcbn07XG5leHBvcnQgdHlwZSBJdGVtTmFtZUVudW0gPSAodHlwZW9mIEl0ZW1OYW1lRW51bSlba2V5b2YgdHlwZW9mIEl0ZW1OYW1lRW51bV07XG5leHBvcnQgY29uc3QgdmFsdmVNcEl0ZW1OYW1lRW51bSA9IHtcblx0VjFiMTogXCJ2MWIxXCIsIC8vIGluZGV4IDBcblx0VjFiMjogXCJ2MWIyXCIsIC8vIGluZGV4IDFcblx0VjFiMzogXCJ2MWIzXCIsIC8vIGluZGV4IDJcblx0VjFiNDogXCJ2MWI0XCIsIC8vIGluZGV4IDNcblx0VjJiMTogXCJ2MmIxXCIsIC8vIGluZGV4IDRcblx0VjJiMjogXCJ2MmIyXCIsIC8vIGluZGV4IDVcblx0VjJiMzogXCJ2MmIzXCIsIC8vIGluZGV4IDZcblx0VjJiNDogXCJ2MmI0XCIsIC8vIGluZGV4IDdcblx0VjI6IFwidjJcIiwgLy8gaW5kZXggOFxuXHRWMTogXCJ2MVwiLCAvLyBpbmRleCA5XG5cdHVzbDogXCJ1c2xcIiwgLy8gaW5kZXggMTAgdXBwZXItc2VhdC1saWZ0XG5cdGxzbDogXCJsc2xcIiwgLy8gaW5kZXggMTEgbG93ZXItc2VhdC1saWZ0XG5cdGxvY2F0ZTogXCJsb2NhdGVcIiAvLyBpbmRleCAxMiBsb2NhdGUgYW5pbWF0aW9uXG59O1xuZXhwb3J0IHR5cGUgdmFsdmVNcEl0ZW1OYW1lRW51bSA9ICh0eXBlb2YgdmFsdmVNcEl0ZW1OYW1lRW51bSlba2V5b2YgdHlwZW9mIHZhbHZlTXBJdGVtTmFtZUVudW1dO1xuXG5leHBvcnQgY29uc3QgSXRlbUNsaWNrYWJsZU5hbWVFbnVtID0ge1xuXHRWMWIxOiBcInYxYjFcIiwgLy8gaW5kZXggMFxuXHRWMWIyOiBcInYxYjJcIiwgLy8gaW5kZXggMVxuXHRWMWIzOiBcInYxYjNcIiwgLy8gaW5kZXggMlxuXHRWMWI0OiBcInYxYjRcIiwgLy8gaW5kZXggM1xuXHRWMmIxOiBcInYyYjFcIiwgLy8gaW5kZXggNFxuXHRWMmIyOiBcInYyYjJcIiwgLy8gaW5kZXggNVxuXHRWMmIzOiBcInYyYjNcIiwgLy8gaW5kZXggNlxuXHRWMmI0OiBcInYyYjRcIiwgLy8gaW5kZXggN1xuXHRWM2IxOiBcInYzYjFcIiwgLy8gaW5kZXggOFxuXHRWM2IyOiBcInYzYjJcIiwgLy8gaW5kZXggOVxuXHRWM2IzOiBcInYzYjNcIiwgLy8gaW5kZXggMTBcblx0VjNiNDogXCJ2M2I0XCIsIC8vIGluZGV4IDExXG5cdFYyOiBcInYyXCIsIC8vIGluZGV4IDEyXG5cdFYzOiBcInYzXCIsIC8vIGluZGV4IDEzXG5cdFYxOiBcInYxXCIsIC8vIGluZGV4IDE0XG59O1xuZXhwb3J0IHR5cGUgSXRlbUNsaWNrYWJsZU5hbWVFbnVtID1cblx0KHR5cGVvZiBJdGVtQ2xpY2thYmxlTmFtZUVudW0pW2tleW9mIHR5cGVvZiBJdGVtQ2xpY2thYmxlTmFtZUVudW1dO1xuZXhwb3J0IGNvbnN0IHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0gPSB7XG5cdFYxYjE6IFwidjFiMVwiLCAvLyBpbmRleCAwXG5cdFYxYjI6IFwidjFiMlwiLCAvLyBpbmRleCAxXG5cdFYxYjM6IFwidjFiM1wiLCAvLyBpbmRleCAyXG5cdFYxYjQ6IFwidjFiNFwiLCAvLyBpbmRleCAzXG5cdFYyYjE6IFwidjJiMVwiLCAvLyBpbmRleCA0XG5cdFYyYjI6IFwidjJiMlwiLCAvLyBpbmRleCA1XG5cdFYyYjM6IFwidjJiM1wiLCAvLyBpbmRleCA2XG5cdFYyYjQ6IFwidjJiNFwiLCAvLyBpbmRleCA3XG5cdFYyOiBcInYyXCIsIC8vIGluZGV4IDhcblx0VjE6IFwidjFcIiwgLy8gaW5kZXggOVxufTtcbmV4cG9ydCB0eXBlIHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0gPVxuXHQodHlwZW9mIHZhbHZlTXBJdGVtQ2xpY2thYmxlTmFtZUVudW0pW2tleW9mIHR5cGVvZiB2YWx2ZU1wSXRlbUNsaWNrYWJsZU5hbWVFbnVtXTtcblxuZXhwb3J0IGNvbnN0IEl0ZW1Qb3NpdGlvbkVudW0gPSB7XG5cdHYxYjE6IFwidjFiMVwiLFxuXHR2MWIyOiBcInYxYjJcIixcblx0djFiMzogXCJ2MWIzXCIsXG5cdHYxYjQ6IFwidjFiNFwiLFxuXHR2MmIxOiBcInYyYjFcIixcblx0VjJiMjogXCJ2MmIyXCIsXG5cdHYyYjM6IFwidjJiM1wiLFxuXHR2MmI0OiBcInYyYjRcIixcblx0djNiMTogXCJ2M2IxXCIsXG5cdHYzYjI6IFwidjNiMlwiLFxuXHR2M2IzOiBcInYzYjNcIixcblx0djNiNDogXCJ2M2I0XCIsXG5cdHYyOiBcInYyXCIsXG5cdHYzOiBcInYzXCIsXG59O1xuZXhwb3J0IHR5cGUgSXRlbVBvc2l0aW9uRW51bSA9XG5cdCh0eXBlb2YgSXRlbVBvc2l0aW9uRW51bSlba2V5b2YgdHlwZW9mIEl0ZW1Qb3NpdGlvbkVudW1dO1xuXG5jb25zdCBWYWx2ZVN0YXRlRW51bSA9IHtcblx0YWxhcm06IFwiYWxhcm1cIixcblx0bWFudWFsOiBcIm1hbnVhbFwiLFxuXHRtYXNrZWQ6IFwibWFza2VkXCIsXG59O1xuZXhwb3J0IHR5cGUgVmFsdmVTdGF0ZUVudW0gPVxuXHQodHlwZW9mIFZhbHZlU3RhdGVFbnVtKVtrZXlvZiB0eXBlb2YgVmFsdmVTdGF0ZUVudW1dO1xuXG5leHBvcnQgdHlwZSBWYWx2ZVByb3BzID0ge1xuXHRWYWx2ZVN0YXR1cz86IFZhbHZlU3RhdGU7XG5cdHNob3dJdGVtSWQ/OiBib29sZWFuO1xuXHRoYW5kbGVDbGljaz86ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgdHlwZSBJdGVtRGF0YSA9IHtcblx0a2V5OiBzdHJpbmc7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdHByb3BzOiBWYWx2ZVN0YXRlO1xufTtcbi8qKlxuICogZHJhZ2dhYmxlIGNvbXBvbmVudCB0eXBlc1xuICovXG4vLyBleHBvcnQgdHlwZSBEcmFnZ2FibGVJdGVtID0ge1xuLy8gXHRpZDogVW5pcXVlSWRlbnRpZmllcjtcbi8vIFx0bGVmdDogbnVtYmVyO1xuLy8gXHR0b3A6IG51bWJlcjtcbi8vIH1cblxuLy8gZXhwb3J0IHR5cGUgRHJhZ2dhYmxlUHJvcHMgPSB7XG4vLyBcdGlkOiBVbmlxdWVJZGVudGlmaWVyLFxuLy8gXHRvbkNsb3NlOiAoaWQ6IFVuaXF1ZUlkZW50aWZpZXIpPT4gdm9pZCxcbi8vIFx0ZWxlbWVudD86IGtleW9mIEhUTUxFbGVtZW50LFxuLy8gXHRsZWZ0OiBudW1iZXI7XG4vLyBcdHRvcCA6IG51bWJlcjtcbi8vIFx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbi8vIFx0Y2xhc3NOYW1lOiBzdHJpbmc7XG4vLyB9XG5leHBvcnQgdHlwZSBpdGVtTmFtZVByb3BzID0ge1xuXHRcdFx0a2V5OiBzdHJpbmcsXG5cdFx0XHRuYW1lOiBbc3RyaW5nLHN0cmluZ10sXG5cdFx0XHR2YWx1ZTogc3RyaW5nLFxuXHRcdFx0aW5kZXg6IG51bWJlcixcbn1cbiIsImltcG9ydCB7IGdldEJvb2xBdEluZGV4IH0gZnJvbSBcIi4uL3V0aWxzL251bWJlclV0aWxcIjtcbmltcG9ydCB7XG5cdEl0ZW1OYW1lRW51bSxcblx0dmFsdmVNcEl0ZW1OYW1lRW51bSxcblx0dHlwZSBWYWx2ZVN0YXRlLFxufSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuLyoqXG4gKiBUaGlzIGlzIGEgdXRpbGl0eSBmdW5jdGlvbiBmb3IgdGhlIGNvbXBvbmVudCBcInByb2Nlc3Mtb2JqZWN0L1ZhbHZlRkNcIlxuICpcbiAqIEBwYXJhbSBpbmRleDogbnVtYmVyIHRoZSBpbmRleCBvZiBhbiBkeW5hbWljIHZpc3VhbCBlbGVtZW50IFwiaXRlbVwiIHdpdGhpbiB0aGUgVmFsdmUgY29tcG9uZW50XG4gKiBAcGFyYW0gdmFsdmVTdGF0dXM/OlZhbHZlU3RhdHVzIHRoZSBzdGF0dXMgcmVwcmVzZW50aW5nIHBoeXNpY2FsIHByb2Nlc3MgdmFsdmVcbiAqIEByZXR1cm5zIGNsYXNzTmFtZTpzdHJpbmcgcmV0dXJucyBhZGRpdGlvbmFsIGNsYXNzbmFtZXMgZm9yIGFuIHZpc3VhbCBlbGVtZW50IG9mIHRoZSB2YWx2ZSBjb21wb25lbnQuXG4gKlxuICogUmV0dXJuZWQgY2xhc3NuYW1lcyBhcmU7XG4gKiBcdGhpZGUgLSB0aGlzIGhpZGVzIHRoZSBpdGVtXG4gKiBcdHNob3cgLVxuICovXG5leHBvcnQgY29uc3QgZ2V0SXRlbUNsYXNzTmFtZSA9IChcblx0aW5kZXg6IG51bWJlcixcblx0dmFsdmVTdGF0dXM/OiBWYWx2ZVN0YXRlXG4pOiBzdHJpbmcgPT4ge1xuXHRsZXQgY2xhc3NOYW1lID0gXCJcIjtcblx0Ly8gSGFuZGxlIHRoZSBmYWN0IHRoYXQgQWN0aXZhdGVkQ29uZmlnIGFuZCBEZWFjdGl2YXRlZENvbmZpZyBhcmUgb3B0aW9uYWwgYW5kIG1heWJlIHVuZGVmaW5lZFxuXHRjb25zdCBBY3RpdmF0ZWRDb25maWdWYWx1ZSA9IHZhbHZlU3RhdHVzPy5hY3RpdmF0ZWRDb25maWcgPz8gMDtcblx0Y29uc3QgRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSA9IHZhbHZlU3RhdHVzPy5kZWFjdGl2YXRlZENvbmZpZyA/PyAwO1xuXHRpZiAoaW5kZXggPCAxMikge1xuXHRcdGlmIChcblx0XHRcdChnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpICYmIHZhbHZlU3RhdHVzPy5hY3RGQikgfHxcblx0XHRcdChnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgJiYgdmFsdmVTdGF0dXM/LmRlQWN0RkIpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3cgaXRlbVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGUgaXRlbVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTQpIHtcblx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTIpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleClcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDEzKSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxNSkge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMikgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEyKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTYpIHtcblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTIpIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMilcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDE3KSB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEzKSB8fFxuXHRcdFx0Z2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTMpXG5cdFx0KSB7XG5cdFx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxOCkge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMykgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDEzKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjbGFzc05hbWUgPSBcImhpZGVcIjtcblx0fVxuXHQvLyBBZGRpdGlvbnMgdG8gdGhlIGNsYXNzTmFtZVxuXG5cdGlmIChjbGFzc05hbWUuaW5jbHVkZXMoXCJzaG93XCIpICYmICFjbGFzc05hbWUuaW5jbHVkZXMoXCJpdGVtXCIpKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCwgY2xhc3NOYW1lKTtcblx0XHRpZiAodmFsdmVTdGF0dXM/LmFsYXJtKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkFsYXJtU3RhdGVcIiwgXCJcIikgKyBcIiBBbGFybVN0YXRlXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uY2hhbmdpbmcpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQ2hhbmdpbmdcIiwgXCJcIikgKyBcIiBDaGFuZ2luZ1wiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/Lm1hbnVhbCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJNYW51YWxcIiwgXCJcIikgKyBcIiBNYW51YWxcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYXNrZWQgJiYgIXZhbHZlU3RhdHVzLmFsYXJtKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk5vQWxhcm1NYXNrXCIsIFwiXCIpICsgXCIgTm9BbGFybU1hc2tcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYXNrZWQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTWFza2VkXCIsIFwiXCIpICsgXCIgTWFza2VkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uYWN0RkIpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgQWN0aXZhdGVkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8uZGVBY3RGQikge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJEZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIERlYWN0aXZhdGVkXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubG9jYXRlKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcImNpcmNsZVwiLCBcIlwiKSArIFwiIGNpcmNsZVwiO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjbGFzc05hbWU7IC8vIGRlZmF1bHQgcmV0dXJuIHZhbHVlIGlmIG5vIG90aGVyIGNvbmRpdGlvbiBpcyBtZXRcbn07XG5leHBvcnQgY29uc3QgZ2V0VmFsdmVNcEl0ZW1DbGFzc05hbWUgPSAoXG5cdGluZGV4OiBudW1iZXIsXG5cdHZhbHZlU3RhdHVzPzogVmFsdmVTdGF0ZVxuKTogc3RyaW5nID0+IHtcblx0bGV0IGNsYXNzTmFtZSA9IFwiXCI7XG5cdC8vIEhhbmRsZSB0aGUgZmFjdCB0aGF0IEFjdGl2YXRlZENvbmZpZyBhbmQgRGVhY3RpdmF0ZWRDb25maWcgYXJlIG9wdGlvbmFsIGFuZCBtYXliZSB1bmRlZmluZWRcblx0Y29uc3QgQWN0aXZhdGVkQ29uZmlnVmFsdWUgPSB2YWx2ZVN0YXR1cz8uYWN0aXZhdGVkQ29uZmlnID8/IDA7XG5cdGNvbnN0IERlYWN0aXZhdGVkQ29uZmlnVmFsdWUgPSB2YWx2ZVN0YXR1cz8uZGVhY3RpdmF0ZWRDb25maWcgPz8gMDtcblx0Ly8gY29uc29sZS5sb2codmFsdmVTdGF0dXMpO1xuXG5cdGlmIChpbmRleCA8IDgpIHtcblx0XHRpZiAoXG5cdFx0XHQoZ2V0Qm9vbEF0SW5kZXgoQWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KSAmJiB2YWx2ZVN0YXR1cz8uYWN0RkIpIHx8XG5cdFx0XHQoZ2V0Qm9vbEF0SW5kZXgoRGVhY3RpdmF0ZWRDb25maWdWYWx1ZSwgaW5kZXgpICYmIHZhbHZlU3RhdHVzPy5kZUFjdEZCKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93IGl0ZW1cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDkpIHtcblx0XHRjbGFzc05hbWUgPSBcInNob3dcIjtcblx0fSBlbHNlIGlmIChpbmRleCA9PT0gOCkge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCBpbmRleCkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIGluZGV4KVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbmRleCA9PT0gMTApIHtcblx0XHQvLyBjb25zb2xlLmxvZyhcblx0XHQvLyBcdGBpbmRleCAke2luZGV4fSBkZWFjdCBjb25maWcgJHtEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlfSBiaXQgaXMgJHtnZXRCb29sQXRJbmRleChcblx0XHQvLyBcdFx0RGVhY3RpdmF0ZWRDb25maWdWYWx1ZSxcblx0XHQvLyBcdFx0MTBcblx0XHQvLyBcdCl9YFxuXHRcdC8vICk7XG5cblx0XHRpZiAoXG5cdFx0XHRnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgMTApIHx8XG5cdFx0XHRnZXRCb29sQXRJbmRleChEZWFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMClcblx0XHQpIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwic2hvdyBpdGVtXCI7XG5cdFx0XHRpZiAodmFsdmVTdGF0dXM/LnVzbCkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIEFjdGl2YXRlZFwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJEZWFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIERlYWN0aXZhdGVkXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTmFtZSA9IFwiaGlkZSBpdGVtXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGluZGV4ID09PSAxMSkge1xuXHRcdGlmIChcblx0XHRcdGdldEJvb2xBdEluZGV4KEFjdGl2YXRlZENvbmZpZ1ZhbHVlLCAxMSkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDExKVxuXHRcdCkge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJzaG93IGl0ZW1cIjtcblx0XHRcdGlmICh2YWx2ZVN0YXR1cz8ubHNsKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiQWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgQWN0aXZhdGVkXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkRlYWN0aXZhdGVkXCIsIFwiXCIpICsgXCIgRGVhY3RpdmF0ZWRcIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gXCJoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaW5kZXggPT09IDEyKSB7XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5sb2NhdGUpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwic2hvdyBpdGVtXCIsIFwiXCIpICsgXCIgc2hvdyBpdGVtXCI7XG5cdFx0XHRpZihnZXRCb29sQXRJbmRleChBY3RpdmF0ZWRDb25maWdWYWx1ZSwgOCkgfHxcblx0XHRcdGdldEJvb2xBdEluZGV4KERlYWN0aXZhdGVkQ29uZmlnVmFsdWUsIDgpKXtcblx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJzaG93IGxhcmdlIGl0ZW1cIiwgXCJcIikgKyBcIiBzaG93IGxhcmdlIGl0ZW1cIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJoaWRlIGl0ZW1cIiwgXCJcIikgKyBcIiBoaWRlIGl0ZW1cIjtcblx0XHR9XG5cdH1cblx0Ly8gQWRkaXRpb25zIHRvIHRoZSBjbGFzc05hbWVcblxuXHRpZiAoY2xhc3NOYW1lLmluY2x1ZGVzKFwic2hvd1wiKSAmJiAhY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXRlbVwiKSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgsIGNsYXNzTmFtZSk7XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5hbGFybSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJBbGFybVN0YXRlXCIsIFwiXCIpICsgXCIgQWxhcm1TdGF0ZVwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/LmNoYW5naW5nKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkNoYW5naW5nXCIsIFwiXCIpICsgXCIgQ2hhbmdpbmdcIjtcblx0XHR9XG5cdFx0aWYgKHZhbHZlU3RhdHVzPy5tYW51YWwpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiTWFudWFsXCIsIFwiXCIpICsgXCIgTWFudWFsXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFza2VkICYmICF2YWx2ZVN0YXR1cy5hbGFybSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJOb0FsYXJtTWFza1wiLCBcIlwiKSArIFwiIE5vQWxhcm1NYXNrXCI7XG5cdFx0fVxuXHRcdGlmICh2YWx2ZVN0YXR1cz8ubWFza2VkKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIk1hc2tlZFwiLCBcIlwiKSArIFwiIE1hc2tlZFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/LmFjdEZCKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShcIkFjdGl2YXRlZFwiLCBcIlwiKSArIFwiIEFjdGl2YXRlZFwiO1xuXHRcdH1cblx0XHRpZiAodmFsdmVTdGF0dXM/LmRlQWN0RkIpIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKFwiRGVhY3RpdmF0ZWRcIiwgXCJcIikgKyBcIiBEZWFjdGl2YXRlZFwiO1xuXHRcdH1cblx0fVxuXHQvLyBjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4LCBjbGFzc05hbWUpO1xuXG5cdHJldHVybiBjbGFzc05hbWU7IC8vIGRlZmF1bHQgcmV0dXJuIHZhbHVlIGlmIG5vIG90aGVyIGNvbmRpdGlvbiBpcyBtZXRcbn07XG4vKipcbiAqIEByZXR1cm5zIEFycmF5IG9mIGl0ZW1OYW1lKHMpIGZvciBlYWNoIHZpc3VhbCBlbGVtZW50IG9mIGEgdmFsdmUgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBpdGVtTmFtZXMgPSBPYmplY3QuZW50cmllcyhJdGVtTmFtZUVudW0pLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuXHQvLyBjb25zb2xlLmxvZyhgSW4gYnVpbGQgSXRlbU5hbWVzIG5hbWUgJHtrZXl9IGluZGV4ICR7aW5kZXh9YCk7XG5cdHJldHVybiB7XG5cdFx0a2V5OiB1dWlkdjQoKSxcblx0XHRuYW1lOiBrZXksXG5cdFx0dmFsdWU6IGtleVsxXSxcblx0XHRpbmRleDogaW5kZXgsXG5cdH07XG59KTtcbmV4cG9ydCBjb25zdCB2YWx2ZU1wSXRlbU5hbWVzID0gT2JqZWN0LmVudHJpZXModmFsdmVNcEl0ZW1OYW1lRW51bSkubWFwKFxuXHQoa2V5LCBpbmRleCkgPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKGBJbiBidWlsZCBJdGVtTmFtZXMgbmFtZSAke2tleX0gaW5kZXggJHtpbmRleH1gKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0a2V5OiB1dWlkdjQoKSxcblx0XHRcdG5hbWU6IGtleSxcblx0XHRcdHZhbHVlOiBrZXlbMV0sXG5cdFx0XHRpbmRleDogaW5kZXgsXG5cdFx0fTtcblx0fVxuKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0UHJvcGVydHlUcmVlLFxufSBmcm9tICdAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuaW1wb3J0IHR5cGUge1xuXHRDb21wb25lbnRQcm9wc1xuXHQsQ29tcG9uZW50TWV0YVxuXHQsUENvbXBvbmVudFxuXHQsU2l6ZU9iamVjdFxufSBmcm9tICdAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuXG4vLyBpbXBvcnQgeyB1c2VDcmVhdGVDb250ZXh0IH0gZnJvbSBcInNyYy91dGlscy9jcmVhdGVDb250ZXh0XCI7XG5pbXBvcnQgeyBQYXJhbWV0ZXJzTGlzdFN0YXRlLCBQYXJhbUl0ZW0gfSBmcm9tIFwic3JjL2FwaS90eXBlc1wiO1xuLy8gVHlwZXNcblxuLy8gdHlwZSBFZGl0UGFyYW1JbnB1dENvbnRleHRUeXBlID0ge1xuLy8gXHRwYXJhbUl0ZW06IFBhcmFtSXRlbTtcbi8vIFx0c2V0UGFyYW1JdGVtOiAocGFyYW1JdGVtOiBQYXJhbUl0ZW0pID0+IHZvaWQ7XG4vLyB9XG4vLyB0eXBlIEVkaXRQYXJhbUlucHV0Q29udGV4dFR5cGUgPSB7XG4vLyBcdHN0YXRlOiBQYXJhbUl0ZW1bXTtcbi8vIFx0cmVkdWNlcjogVXNlUGFyYW1ldGVyUmVkdWNlcjtcbi8vIH1cblxudHlwZSBQYXJhbWV0ZXJzTGlzdENvbXBvbmVudFByb3BzID0ge1xuXHRwYXJhbWV0ZXJzOiBQYXJhbUl0ZW1bXVxufVxuY29uc3QgaW5pdFBhcmFtZXRlcnMgPSBbe1xuXHRsYWJlbDp7XG5cdFx0dGV4dDogXCJ0ZXh0XCJcblx0fSxcblx0aW5wdXQ6IHtcblx0XHR2YWx1ZTogbnVsbCxcblx0XHRwbGFjZWhvbGRlcjogXCJFbnRlciBhIE51bWJlclwiXG5cdH1cbn1dXG5cbi8vIGNvbnN0IFtFZGl0UGFyYW1JbnB1dENvbnRleHRQcm92aWRlciwgdXNlRWRpdFBhcmFtSW5wdXRDb250ZXh0XSA9XG4vLyB1c2VDcmVhdGVDb250ZXh0PEVkaXRQYXJhbUlucHV0Q29udGV4dFR5cGU+KFwiRWRpdFBhcmFtSW5wdXRDb250ZXh0XCIpO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBcImhtaS5pbnB1dC5QYXJhbWV0ZXJMaXN0XCI7XG5cbmV4cG9ydCBjb25zdCBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50ID0gKHByb3BzOiBDb21wb25lbnRQcm9wczxQYXJhbWV0ZXJzTGlzdENvbXBvbmVudFByb3BzPikgPT4ge1xuY29uc3QgdHJhbnNmb3JtZWRQcm9wcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuXHRjb25zdCB7IHBhcmFtZXRlcnN9ID0gcHJvcHMucHJvcHMgfHwgaW5pdFBhcmFtZXRlcnNcblx0cmV0dXJuIHBhcmFtZXRlcnNcbn0sIFtwcm9wcy5wcm9wcy5wYXJhbWV0ZXJzXSlcblxuXHRcdGNvbnNvbGUubG9nKGB0cmFuc2Zvcm1lZFByb3BzOiBsYWJlbCAke3RyYW5zZm9ybWVkUHJvcHNbMF0ubGFiZWwudGV4dH1gKTtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXktZmxleC1jb2x1bW5cIj5cblx0XHR7dHJhbnNmb3JtZWRQcm9wcy5tYXAoKHBhcmFtOiBQYXJhbUl0ZW0sIGluZGV4OiBudW1iZXIpPT57XG5cdFx0XHRjb25zdCB7IGlucHV0fSA9IHBhcmFtO1xuXHRcdFx0Y29uc29sZS5sb2coaW5wdXQudmFsdWUpO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8bGFiZWwga2V5PXtpbmRleH1jbGFzc05hbWU9XCJmaWVsZFwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+TnVtZXJpYzwvc3Bhbj5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGlucHV0TW9kZT1cIm51bWVyaWNcIlxuXHRcdFx0XHRcdHBhdHRlcm49XCJbMC05XSpcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHRcdC8vIHZhbHVlPXtpbnB1dC52YWx1ZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGBPbiBjaGFuZ2UgZXZlbnQgJHtlLmN1cnJlbnRUYXJnZXQudmFsdWV9YCk7XG5cdFx0XHRcdFx0XHRwcm9wcy5zdG9yZS5wcm9wcy53cml0ZShcblx0XHRcdFx0XHRcdFx0YHBhcmFtZXRlcnNbJHtpbmRleH1dLmlucHV0LnZhbHVlYCxcblx0XHRcdFx0XHRcdFx0ZS5jdXJyZW50VGFyZ2V0LnZhbHVlXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQvLyB1cGRhdGVWYWx1ZShwYXJzZUZsb2F0KHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpLnRvRml4ZWQoMikpLCBpbmRleCk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdClcblxuXHRcdH0pXG5cdH08L2Rpdj5cblx0XHQpXG5cbn07XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJMaXN0Q29tcG9uZW50TWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6c3RyaW5ne1xucmV0dXJuIENPTVBPTkVOVF9UWVBFXG5cdH1cblxuXHRnZXREZWZhdWx0U2l6ZSgpOiBTaXplT2JqZWN0e1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMTIwLFxuXHRcdFx0aGVpZ2h0OiAyNDAsXG5cdFx0fVxuXHR9XG5cblx0Z2V0UHJvcHNSZWR1Y2VyKHRyZWU6IFByb3BlcnR5VHJlZSk6IFBhcmFtZXRlcnNMaXN0U3RhdGUge1xuXHRcdGNvbnNvbGUubG9nKFwicGFyYW1ldGVyc1wiLCB0cmVlLnJlYWQoXCJwYXJhbWV0ZXJzXCIpKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cGFyYW1ldGVyczp0cmVlLnJlYWQoJ3BhcmFtZXRlcnMnKVxuXHRcdH1cblx0fVxuXG5cdGdldFZpZXdDb21wb25lbnQoKTogUENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIFBhcmFtZXRlckxpc3RDb21wb25lbnQgYXMgUENvbXBvbmVudFxuXHR9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdHR5cGUgVmFsdmVQcm9wcyxcblx0dHlwZSBWYWx2ZVN0YXRlXG59IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcblxuXG5pbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdFByb3BlcnR5VHJlZSxcbn0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50JztcbmltcG9ydCB0eXBlIHtcblx0Q29tcG9uZW50UHJvcHNcblx0LENvbXBvbmVudE1ldGFcblx0LFBDb21wb25lbnRcblx0LFNpemVPYmplY3Rcbn0gZnJvbSAnQGluZHVjdGl2ZWF1dG9tYXRpb24vcGVyc3BlY3RpdmUtY2xpZW50Jy8vJ0BpbmR1Y3RpdmVhdXRvbWF0aW9uL3BlcnNwZWN0aXZlLWNsaWVudCc7XG5pbXBvcnQgeyBWYWx2ZU1wQ29tcG91bmQgfSBmcm9tIFwiLi9wcm9jZXNzLW9iamVjdHMvdmFsdmUtbXAvVmFsdmVNcFwiO1xuaW1wb3J0IHsgdmFsdmVTdGF0dXMgfSBmcm9tIFwiLi4vYXBpL2luaXRpYWxTdGF0ZVwiO1xuLy8gaW1wb3J0IHsgdmFsdmVQcm9wcyB9IGZyb20gXCIuL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS9pbml0aWFsU3RhdGVcIjtcbi8vIGltcG9ydCB7IFZhbHZlRkNDb21wb3VuZCB9IGZyb20gXCIuL3Byb2Nlc3Mtb2JqZWN0cy92YWx2ZS9WYWx2ZUZDXCI7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfVFlQRSA9IFwiaG1pLnByb2Nlc3Nfb2JqZWN0cy5WYWx2ZVwiO1xuXG4vKipcbiAqIFZhbHZlIGNvbXBvbmVudCBjbGFzcy5cbiAqIEV4dGVuZHMgdGhlIGJhc2UgQ29tcG9uZW50IGNsYXNzIGZyb20gUGVyc3BlY3RpdmUsIHR5cGVkIHdpdGggVmFsdmVQcm9wcy5cbiAqIFByb3ZpZGVzIGEgY3VzdG9taXphYmxlIHZhbHZlIHdpdGggcHJvcGVyIGhhbmRsaW5nIG9mIGRlc2lnbmVyL3ByZXZpZXcgbW9kZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWx2ZSBleHRlbmRzIENvbXBvbmVudDxDb21wb25lbnRQcm9wczxWYWx2ZVByb3BzPiwgYW55PiB7XG5cdHZhbHZlUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzOiBDb21wb25lbnRQcm9wczxWYWx2ZVByb3BzPikge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnZhbHZlUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuXHR9XG5cblx0Ly8gVGhpcyBpcyBhIGxpZmVjeWNsZSBtZXRob2QgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IG1vdW50ZWQgdG8gdGhlIERPTS5cblx0Y29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG5cdFx0Ly8gTm8gbmVlZCB0byBpbml0aWFsaXplIHZhbHZlUmVmIGhlcmVcblx0fVxuXHR2YWx2ZVN0YXR1czogVmFsdmVTdGF0ZSA9IHRoaXMucHJvcHMucHJvcHMuVmFsdmVTdGF0dXMgfHwgdmFsdmVTdGF0dXM7XG5cblx0XHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIGNvbXBvbmVudCdzIGFjdGlvbiBldmVudC5cblx0Ki9cblx0b25BY3Rpb25QZXJmb3JtZWQgPSAoKSA9PiB7XG5cdFx0Ly8gSWYgdGhlIGRlc2lnbmVyIGlzIGluIFwiZGVzaWduXCIgbW9kZSwgZG9uJ3QgZG8gYW55dGhpbmdcblx0XHRpZiAoIXRoaXMucHJvcHMuZXZlbnRzRW5hYmxlZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJWYWx2ZSBpcyBkaXNhYmxlZCBpbiB0aGUgZGVzaWduLXNjb3BlXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhcIlZhbHZlIGNsaWNrZWQhXCIpO1xuXHRcdHRoaXMucHJvcHMuY29tcG9uZW50RXZlbnRzLiBmaXJlQ29tcG9uZW50RXZlbnQoXCJvbkFjdGlvblBlcmZvcm1lZFwiLCB7fSk7XG5cdH07XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0Ly8gPGRpdj5UaGlzIGlzIFZhbHZlPC9kaXY+XG5cdFx0PFZhbHZlTXBDb21wb3VuZC5Sb290XG5cdFx0Y29tcG9uZW50UHJvcHM9e3RoaXMucHJvcHN9XG5cdFx0dmFsdmVQcm9wcz17dGhpcy5wcm9wcy5wcm9wc31cblx0XHRvbkFjdGlvblBlcmZvcm1lZD17dGhpcy5vbkFjdGlvblBlcmZvcm1lZH1cblx0XHQgPlxuXHRcdFx0ICA8VmFsdmVNcENvbXBvdW5kLnZhbHZlIC8+XG5cdFx0XHQgIDxWYWx2ZU1wQ29tcG91bmQucG9wb3ZlciBhbmNob3JFbD17dGhpcy52YWx2ZVJlZi5jdXJyZW50fSAvPlxuXHRcdCA8L1ZhbHZlTXBDb21wb3VuZC5Sb290PlxuXHQpXG59XG59XG4vLyBUaGlzIGlzIHRoZSBhY3R1YWwgdGhpbmcgdGhhdCBnZXRzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgY29tcG9uZW50IHJlZ2lzdHJ5LlxuZXhwb3J0IGNsYXNzIFZhbHZlTWV0YSBpbXBsZW1lbnRzIENvbXBvbmVudE1ldGEge1xuXHRnZXRDb21wb25lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9UWVBFO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIFRoZSBSZWFjdCBjb21wb25lbnQgY2xhc3MuXG5cdCAqL1xuXHRnZXRWaWV3Q29tcG9uZW50KCk6IFBDb21wb25lbnQge1xuXHRcdHJldHVybiBWYWx2ZTtcblx0fVxuXG5cdGdldERlZmF1bHRTaXplKCk6IFNpemVPYmplY3Qge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogMjQsXG5cdFx0XHRoZWlnaHQ6IDQ4LFxuXHRcdH07XG5cdH1cblxuXHQvLyBJbnZva2VkIHdoZW4gYW4gdXBkYXRlIHRvIHRoZSBQcm9wZXJ0eVRyZWUgaGFzIG9jY3VycmVkLFxuXHQvLyBlZmZlY3RpdmVseSBtYXBwaW5nIHRoZSB2YWx2ZVN0YXR1cyBvZiB0aGUgdHJlZSB0byBjb21wb25lbnQgcHJvcHMuXG5cdGdldFByb3BzUmVkdWNlcih0cmVlOiBQcm9wZXJ0eVRyZWUpOiBWYWx2ZVByb3BzIHtcblx0XHRjb25zb2xlLmxvZyhcIlZhbHZlU3RhdHVzXCIsIHRyZWUucmVhZChcIlZhbHZlU3RhdHVzXCIpKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0VmFsdmVTdGF0dXM6IHtcblx0XHRcdFx0YWxhcm06IHRyZWUucmVhZEJvb2xlYW4oXCJWYWx2ZVN0YXR1cy5hbGFybVwiLCBmYWxzZSksXG5cdFx0XHRcdGFjdEZCOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMuYWN0RkJcIiwgZmFsc2UpLFxuXHRcdFx0XHRkZUFjdEZCOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMuZGVBY3RGQlwiLCBmYWxzZSksXG5cdFx0XHRcdGFjdGl2YXRlZENvbmZpZzogdHJlZS5yZWFkTnVtYmVyKFwiVmFsdmVTdGF0dXMuYWN0aXZhdGVkQ29uZmlnXCIsIDYpLFxuXHRcdFx0XHRkZWFjdGl2YXRlZENvbmZpZzogdHJlZS5yZWFkTnVtYmVyKFwiVmFsdmVTdGF0dXMuZGVhY3RpdmF0ZWRDb25maWdcIiwgMCksXG5cdFx0XHRcdGl0ZW1OYW1lOiB0cmVlLnJlYWRTdHJpbmcoXCJWYWx2ZVN0YXR1cy5pdGVtTmFtZVwiLCBcIlwiKSxcblx0XHRcdFx0bWFudWFsOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMubWFudWFsXCIsIGZhbHNlKSxcblx0XHRcdFx0bWFza2VkOiB0cmVlLnJlYWRCb29sZWFuKFwiVmFsdmVTdGF0dXMubWFza2VkXCIsIGZhbHNlKSxcblx0XHRcdFx0Y2hhbmdpbmc6IHRyZWUucmVhZEJvb2xlYW4oXCJWYWx2ZVN0YXR1cy5jaGFuZ2luZ1wiLCBmYWxzZSksXG5cdFx0XHRcdGxvY2F0ZTogdHJlZS5yZWFkQm9vbGVhbihcIlZhbHZlU3RhdHVzLmxvY2F0ZVwiLCBmYWxzZSksXG5cdFx0XHRcdHVzbDogdHJlZS5yZWFkQm9vbGVhbihcIlZhbHZlU3RhdHVzLnVzbFwiLCBmYWxzZSksXG5cdFx0XHRcdGxzbDogdHJlZS5yZWFkQm9vbGVhbihcIlZhbHZlU3RhdHVzLmxzbFwiLCBmYWxzZSksXG5cblx0XHRcdH0sXG5cdFx0XHRzaG93SXRlbUlkOiB0cmVlLnJlYWRCb29sZWFuKFwiSXRlbUlkXCIsIGZhbHNlKVxuXHRcdH07XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUge1xuXHRWYWx2ZUNvbXBvdW5kQ29udGV4dFR5cGUsXG5cdFZhbHZlQ29tcG91bmRSb290UHJvcHMsXG59IGZyb20gXCIuLi8uLi8uLi9hcGkvdHlwZXNcIjtcbmltcG9ydCB7IHVzZVZhbHZlUmVkdWNlciB9IGZyb20gXCIuLi8uLi8uLi9hcGkvaG9va3NcIjtcbmltcG9ydCB7IGdldFZhbHZlTXBJdGVtQ2xhc3NOYW1lLCB2YWx2ZU1wSXRlbU5hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS91dGlsc1wiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uL3ZhbHZlL2l0ZW1cIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY3JlYXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgVkFMVkVfQ09NUE9ORU5UX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3R5cGVzXCI7XG5cbi8vIGltcG9ydCAnLi92YWx2ZS1tcC5tb2R1bGUuY3NzJ1xuLy8gaW1wb3J0IHt2YWx2ZVN0YXR1c30gZnJvbSAnLi4vLi4vYXBpL2luaXRpYWxTdGF0ZSdcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gVkFMVkVfQ09NUE9ORU5UX1RZUEU7XG5cbi8vIGltcG9ydCB7dmFsdmVTdGF0dXN9IGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5leHBvcnQgY29uc3QgW1ZhbHZlQ29udGV4dFByb3ZpZGVyLCB1c2VWYWx2ZUNvbnRleHRdID1cblx0dXNlQ3JlYXRlQ29udGV4dDxWYWx2ZUNvbXBvdW5kQ29udGV4dFR5cGU+KFwiVmFsdmVNcENvbXBvdW5kXCIpO1xuXG5jb25zdCBSb290ID0gKHtcblx0Y29tcG9uZW50UHJvcHMsXG5cdHZhbHZlUHJvcHMsXG5cdG9uQWN0aW9uUGVyZm9ybWVkLFxuXHRjaGlsZHJlbixcbn06IFZhbHZlQ29tcG91bmRSb290UHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8VmFsdmVDb250ZXh0UHJvdmlkZXJcblx0XHRcdHsuLi57XG5cdFx0XHRcdHZhbHZlUHJvcHMsXG5cdFx0XHRcdGNvbXBvbmVudFByb3BzLFxuXHRcdFx0XHRvbkFjdGlvblBlcmZvcm1lZCxcblx0XHRcdFx0dXNlVmFsdmVSZWR1Y2VyLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9WYWx2ZUNvbnRleHRQcm92aWRlcj5cblx0KTtcbn07XG5jb25zdCB2YWx2ZSA9ICgpID0+IHtcblx0Y29uc3QgeyB2YWx2ZVByb3BzLCBvbkFjdGlvblBlcmZvcm1lZCwgY29tcG9uZW50UHJvcHMgfSA9XG5cdFx0dXNlVmFsdmVDb250ZXh0KFwiVmFsdmVcIik7XG5cdFx0Y29uc3QgdmFsdmVSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cdGNvbnN0IHsgcG9zaXRpb24sIGVtaXQgfSA9IGNvbXBvbmVudFByb3BzO1xuXHRjb25zdCB7IFZhbHZlU3RhdHVzIH0gPSB2YWx2ZVByb3BzO1xuXHRjb25zdCBpbkNvb3JkID0gcG9zaXRpb24/LnggPz8gZmFsc2U7XG5cdC8vIGlmIG5vdCBsb2NhdGUsIHRyaW0gbGFzdCBpdGVtIGZyb20gdmFsdmVNcEl0ZW1OYW1lc1xuXHRsZXQgY29tcG9uZW50SXRlbU5hbWVzID0gdmFsdmVNcEl0ZW1OYW1lcztcblx0aWYgKCFWYWx2ZVN0YXR1cz8ubG9jYXRlKSB7XG5cdFx0Y29tcG9uZW50SXRlbU5hbWVzID0gY29tcG9uZW50SXRlbU5hbWVzLnNsaWNlKDAsIC0xKTtcblx0fVxuXG5cdGlmICghaW5Db29yZCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRyZWY9e3ZhbHZlUmVmfVxuXHRcdFx0ey4uLmVtaXQoe1xuXHRcdFx0XHRjbGFzc2VzOiBbYGhtaS1jb21wb25lbnQgaG1pLWNvbXBvbmVudF9fY29sdW1uIGBdLFxuXHRcdFx0fSl9XG5cdFx0XHRcdGRhdGEtY29tcG9uZW50PXtDT01QT05FTlRfVFlQRX1cblx0XHRcdFx0b25DbGljaz17b25BY3Rpb25QZXJmb3JtZWR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG1pLWNvbXBvbmVudF9fcm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJobWktY29tcG9uZW50LXZhbHZlX19tcFwiPlxuXHRcdFx0XHRcdFx0e2NvbXBvbmVudEl0ZW1OYW1lcy5tYXAoXG5cdFx0XHRcdFx0XHRcdCh7IHZhbHVlLCBpbmRleCwga2V5IH0pID0+IChcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRcdFx0XHQvLyBcdGByZS1yZW5kZXJlZCAsa2V5ICR7a2V5fSB2YWx1ZSAke3ZhbHVlfSBpbmRleCAke2luZGV4fWBcblx0XHRcdFx0XHRcdFx0XHQvLyApLFxuXHRcdFx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtQ2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgKyBcIiBcIiArIGdldFZhbHZlTXBJdGVtQ2xhc3NOYW1lKGluZGV4LCBWYWx2ZVN0YXR1cylcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0cmVmPXt2YWx2ZVJlZn1cblx0XHRcdHsuLi5lbWl0KHtcblx0XHRcdFx0Y2xhc3NlczogW2BobWktY29tcG9uZW50IGhtaS1jb21wb25lbnQtdmFsdmVfX21wIGBdLFxuXHRcdFx0fSl9XG5cdFx0XHRkYXRhLWNvbXBvbmVudD17Q09NUE9ORU5UX1RZUEV9XG5cdFx0XHRvbkNsaWNrPXtvbkFjdGlvblBlcmZvcm1lZH1cblx0XHRcdD5cblx0XHRcdFx0e2NvbXBvbmVudEl0ZW1OYW1lcy5tYXAoXG5cdFx0XHRcdFx0KHsgdmFsdWUsIGluZGV4LCBrZXkgfSkgPT4gKFxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXG5cdFx0XHRcdFx0XHQvLyBcdGByZS1yZW5kZXJlZCAsa2V5ICR7a2V5fSB2YWx1ZSAke3ZhbHVlfSBpbmRleCAke2luZGV4fWBcblx0XHRcdFx0XHRcdC8vICksXG5cdFx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0aXRlbUNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSArIFwiIFwiICsgZ2V0VmFsdmVNcEl0ZW1DbGFzc05hbWUoaW5kZXgsIFZhbHZlU3RhdHVzKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59O1xuXG5jb25zdCBwb3BvdmVyID0gKHsgYW5jaG9yRWwgfTogeyBhbmNob3JFbDogSFRNTERpdkVsZW1lbnQgfCBudWxsIH0pID0+IHtcbiAgICBjb25zdCB7IHZhbHZlUHJvcHMsIGNvbXBvbmVudFByb3BzIH0gPSB1c2VWYWx2ZUNvbnRleHQoXCJQb3BvdmVyXCIpO1xuICAgIGNvbnN0IHsgc2hvd0l0ZW1JZCwgVmFsdmVTdGF0dXMgfSA9IHZhbHZlUHJvcHM7XG4gICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gY29tcG9uZW50UHJvcHM7XG5jb25zb2xlLmxvZyhgUG9zaXRpb24ueDogJHtwb3NpdGlvbi54fWApO1xuY29uc29sZS5sb2coYHNob3dJdGVtSWQ6ICR7c2hvd0l0ZW1JZH1gKTtcbmlmICghc2hvd0l0ZW1JZCkgcmV0dXJuIG51bGw7XG5jb25zb2xlLmxvZyhgc2hvd0l0ZW1JZCBhZnRlciBpZjogJHtzaG93SXRlbUlkfWApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtcIml0ZW1JZCBwb3BvdmVyXCJ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi54LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PntWYWx2ZVN0YXR1cz8uaXRlbU5hbWV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBWYWx2ZU1wQ29tcG91bmQgPSB7XG5cdFJvb3QsXG5cdHZhbHZlLFxuXHRwb3BvdmVyLFxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQgXCIuL2l0ZW0ubW9kdWxlLmNzc1wiO1xuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcblx0aXRlbUNsYXNzTmFtZTogc3RyaW5nO1xuXHRoYW5kbGVDbGljaz86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG59XG4vLyBjb25zdCBiaXQgPSAobjogbnVtYmVyLCBpOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuLy8gXHRyZXR1cm4gKG4gPj4gaSkgJiAxO1xuLy8gfTtcbmNvbnN0IEl0ZW06IFJlYWN0LkZDPEl0ZW1Qcm9wcz4gPSAoeyBpdGVtQ2xhc3NOYW1lLCBoYW5kbGVDbGljayB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpdGVtQ2xhc3NOYW1lfVxuXHRvbkNsaWNrPXtoYW5kbGVDbGlja30+PC9kaXY+O1xufTtcbkl0ZW0uZGlzcGxheU5hbWUgPSBcIkl0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUNvbnRleHQ8Q29udGV4dFZhbHVlVHlwZSBleHRlbmRzIG9iamVjdCB8IG51bGw+KFxuICByb290Q29tcG9uZW50TmFtZTogc3RyaW5nLFxuICBkZWZhdWx0Q29udGV4dD86IENvbnRleHRWYWx1ZVR5cGVcbikge1xuICBjb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDb250ZXh0VmFsdWVUeXBlIHwgdW5kZWZpbmVkPihcbiAgICBkZWZhdWx0Q29udGV4dFxuICApO1xuXG4gIGNvbnN0IFByb3ZpZGVyOiBSZWFjdC5GQzxDb250ZXh0VmFsdWVUeXBlICYgeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKFxuICAgIHByb3BzXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLmNvbnRleHQgfSA9IHByb3BzO1xuICAgIC8vIE9ubHkgcmUtbWVtb2l6ZSB3aGVuIHByb3AgdmFsdWVzIGNoYW5nZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBjb25zdCB2YWx1ZSA9IFJlYWN0LnVzZU1lbW8oXG4gICAgICAoKSA9PiBjb250ZXh0LFxuICAgICAgT2JqZWN0LnZhbHVlcyhjb250ZXh0KVxuICAgICkgYXMgQ29udGV4dFZhbHVlVHlwZTtcbiAgICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcbiAgfTtcblxuICBQcm92aWRlci5kaXNwbGF5TmFtZSA9IHJvb3RDb21wb25lbnROYW1lICsgXCJQcm92aWRlclwiO1xuXG4gIGZ1bmN0aW9uIHVzZUNvbnRleHQoY29uc3VtZXJOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KTtcbiAgICBpZiAoY29udGV4dCkgcmV0dXJuIGNvbnRleHQ7XG4gICAgaWYgKGRlZmF1bHRDb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiBkZWZhdWx0Q29udGV4dDtcbiAgICAvLyBpZiBhIGRlZmF1bHRDb250ZXh0IHdhc24ndCBzcGVjaWZpZWQsIGl0J3MgYSByZXF1aXJlZCBjb250ZXh0LlxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBcXGAke2NvbnN1bWVyTmFtZX1cXGAgbXVzdCBiZSB1c2VkIHdpdGhpbiBcXGAke3Jvb3RDb21wb25lbnROYW1lfVxcYGBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIFtQcm92aWRlciwgdXNlQ29udGV4dF0gYXMgY29uc3Q7XG59XG4iLCIvKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBudW1iZXJzXG4gKi9cblxuLyoqXG4gKiBVc2luZyB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uIG9mIG4sIGFuIEludGVnZXIsIHJldHVybnMgdGhlIGJvb2xlYW5cbiAqIHZhbHVlIGF0IGluZGV4LCBpLlxuICogQHBhcmFtIG4gYSBudW1iZXIgaXMgaW1wbGljaXR5IGNvbnZlcnRlciB0byBhIDMyYml0IGludGVnZXIsIGJ5IHRoZSBiaXR3aXNlIG9wZXJhdG9yc1xuICogQHBhcmFtIGkgaXMgYSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBiaXQgcG9zaXRpb24gdG8gYmUgdGVzdGVkXG4gKiBAcmV0dXJucyB0aGUgYm9vbGVhbiB2YWx1ZSBvZiB0aGUgYml0IGF0IGluZGV4IGkuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRCb29sQXRJbmRleCA9IChuOiBudW1iZXIsIGk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gQm9vbGVhbigobiA+PiBpKSAmIDEpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW5kdWN0aXZlYXV0b21hdGlvbl9wZXJzcGVjdGl2ZV9jbGllbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ29tcG9uZW50TWV0YSwgQ29tcG9uZW50UmVnaXN0cnkgfSBmcm9tICdAaW5kdWN0aXZlYXV0b21hdGlvbi9wZXJzcGVjdGl2ZS1jbGllbnQnO1xuLy9pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbk1ldGEgfSBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uJztcbi8vaW1wb3J0IHsgVmFsdmUsIFZhbHZlTWV0YSB9IGZyb20gXCIuL2NvbXBvbmVudHMvVmFsdmVcIjtcbmltcG9ydCB7IFZhbHZlLCBWYWx2ZU1ldGEgfSBmcm9tICcuL2NvbXBvbmVudHMvVmFsdmUnO1xuaW1wb3J0IHsgUGFyYW1ldGVyTGlzdENvbXBvbmVudCwgUGFyYW1ldGVyTGlzdENvbXBvbmVudE1ldGF9IGZyb20gJy4vY29tcG9uZW50cy9QYXJhbWV0ZXJMaXN0J1xuXG4vLyBFeHBvcnQgY29tcG9uZW50cyBmb3IgZXh0ZXJuYWwgcmVmZXJlbmNlXG5leHBvcnQge1xuXHRWYWx2ZSAsXG5cdFBhcmFtZXRlckxpc3RDb21wb25lbnQsXG5cdH07XG5cbi8vIEltcG9ydCBjb21wb25lbnQgc3R5bGVzXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLy8gQXJyYXkgb2YgY29tcG9uZW50IG1ldGFkYXRhXG5jb25zdCBjb21wb25lbnRzOiBBcnJheTxDb21wb25lbnRNZXRhPiA9IFtcblx0bmV3IFZhbHZlTWV0YSgpLFxuXHRuZXcgUGFyYW1ldGVyTGlzdENvbXBvbmVudE1ldGEoKSxcbl07XG5cbi8vIFJlZ2lzdGVyIGVhY2ggY29tcG9uZW50IHdpdGggdGhlIFBlcnNwZWN0aXZlIENvbXBvbmVudFJlZ2lzdHJ5XG5jb21wb25lbnRzLmZvckVhY2goKGM6IENvbXBvbmVudE1ldGEpID0+IENvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyKGMpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==