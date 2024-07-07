// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d8XZh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _googleMapsAutocomplete = require("./googleMapsAutocomplete");
var _googleMapsAutocompleteDefault = parcelHelpers.interopDefault(_googleMapsAutocomplete);
var _multiStepForm = require("./multiStepForm");
var _multiStepFormDefault = parcelHelpers.interopDefault(_multiStepForm);
var _initializeLocalStorage = require("./initializeLocalStorage");
var _initializeLocalStorageDefault = parcelHelpers.interopDefault(_initializeLocalStorage);
var _summarySection = require("./summarySection");
var _summarySectionDefault = parcelHelpers.interopDefault(_summarySection);
console.log("Hello, valle!");
(0, _googleMapsAutocompleteDefault.default)();
(0, _initializeLocalStorageDefault.default)();
(0, _summarySectionDefault.default)();

},{"./googleMapsAutocomplete":"jrVVI","./multiStepForm":"gUt2f","./initializeLocalStorage":"it2ea","./summarySection":"e3QNd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jrVVI":[function(require,module,exports) {
// googleMapsAutocomplete.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loadGoogleMaps() {
    // Load the Google Maps JavaScript API asynchronously and defer execution
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAcFkwm5jayySDY2AsWv2MWvsXZU3Excwo&libraries=places&callback=initAutocomplete&loading=async";
    script.async = true;
    script.defer = true;
    // Define the initAutocomplete function
    window.initAutocomplete = function() {
        const gpaInputs = document.querySelectorAll(".gpa-autocomplete");
        const options = {
            componentRestrictions: {
                country: "se"
            } // restrict results to Sweden
        };
        gpaInputs.forEach((input)=>{
            new google.maps.places.Autocomplete(input, options);
        });
    };
    // Append the script to the document head
    document.head.appendChild(script);
}
exports.default = loadGoogleMaps;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gUt2f":[function(require,module,exports) {
// multiStepForm.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadMultiStepScript", ()=>loadMultiStepScript);
parcelHelpers.export(exports, "initializeCustomCheckboxListeners", ()=>initializeCustomCheckboxListeners);
function loadMultiStepScript() {
    // Check if the script is already loaded
    if (document.getElementById("multi-step-script")) {
        console.warn("multi-step.js script is already loaded.");
        return;
    }
    // Create a script element
    const script = document.createElement("script");
    script.id = "multi-step-script";
    script.src = "https://cdn.jsdelivr.net/gh/videsigns/webflow-tools@latest/multi-step.js";
    script.onload = ()=>{
        try {
            const multiStepElement = document.getElementById("multi-step-id");
            if (multiStepElement) multiStepElement.style.display = "block";
        // Optionally disable the submit button if necessary
        // disableSubmitButton();
        } catch (error) {
            console.error("Error during script onload execution:", error);
        }
    };
    script.onerror = ()=>{
        console.error("Failed to load multi-step.js script.");
    };
    document.head.appendChild(script);
}
function initializeCustomCheckboxListeners() {
    const customCheckboxes = document.querySelectorAll(".w-checkbox-input--inputType-custom");
    if (customCheckboxes.length > 0) customCheckboxes.forEach((checkbox)=>{
        checkbox.addEventListener("click", ()=>{
            setTimeout(updateSubmitButtonState, 50); // Use the same delay to account for any other scripts
        });
    });
    else console.warn("No custom checkboxes found to initialize listeners.");
}
document.addEventListener("DOMContentLoaded", ()=>{
    loadMultiStepScript();
    initializeCustomCheckboxListeners();
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"it2ea":[function(require,module,exports) {
// localStorage.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function initializeLocalStorage() {
    document.addEventListener("DOMContentLoaded", function() {
        try {
            // Get references to the input fields where the saved values will be displayed
            var inputField1 = document.getElementById("housing_size");
            var inputField2 = document.getElementById("moving_date");
            if (!inputField1) console.warn("Input field with id 'housing_size' not found.");
            if (!inputField2) console.warn("Input field with id 'moving_date' not found.");
            // Check if there are any saved items in local storage
            var savedItem1 = localStorage.getItem("size-in-kvm");
            var savedItem2 = localStorage.getItem("selected-date");
            // Set the values of the input fields if they have saved values
            if (inputField1 && savedItem1) inputField1.value = savedItem1;
            else console.warn("No saved value for 'size-in-kvm' found or input field not available.");
            if (inputField2 && savedItem2) inputField2.value = savedItem2;
            else console.warn("No saved value for 'selected-date' found or input field not available.");
        } catch (error) {
            console.error("An error occurred while loading values from local storage:", error);
        }
    });
}
exports.default = initializeLocalStorage;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e3QNd":[function(require,module,exports) {
// summarySection.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function initializeSummarySection() {
    document.addEventListener("DOMContentLoaded", ()=>{
        // Initialize elements and data
        const elements = {
            input: document.getElementById("housing_size"),
            movingDate: document.getElementById("moving_date"),
            flexibleMovingDate: document.getElementById("flexible_moving_date"),
            cleaningBaseCosts: document.querySelectorAll(".house_cleaning_base_cost"),
            totalResults: document.querySelectorAll(".total_result"),
            resultMovingDates: document.querySelectorAll(".result_moving_date"),
            resultFlexibleMovingDates: document.querySelectorAll(".result_flexible_moving_date"),
            resultHousingSizes: document.querySelectorAll(".result_housing_size"),
            otherCostsElements: document.querySelectorAll(".other_costs"),
            resultExtras: document.querySelectorAll(".result_extras"),
            checkboxes: document.querySelectorAll('.form12_checkbox_field input[type="checkbox"]')
        };
        const intervals = [
            {
                min: 0,
                max: 29,
                price: 1549
            },
            {
                min: 30,
                max: 39,
                price: 1599
            },
            {
                min: 40,
                max: 49,
                price: 1649
            },
            {
                min: 50,
                max: 59,
                price: 1799
            },
            {
                min: 60,
                max: 69,
                price: 1999
            },
            {
                min: 70,
                max: 79,
                price: 2199
            },
            {
                min: 80,
                max: 89,
                price: 2399
            },
            {
                min: 90,
                max: 99,
                price: 2599
            },
            {
                min: 100,
                max: 114,
                price: 2799
            },
            {
                min: 115,
                max: 124,
                price: 2999
            },
            {
                min: 125,
                max: 136,
                price: 3199
            },
            {
                min: 137,
                max: 148,
                price: 3399
            },
            {
                min: 149,
                max: 159,
                price: 3599
            },
            {
                min: 160,
                max: 169,
                price: 3849
            },
            {
                min: 170,
                max: 179,
                price: 3949
            },
            {
                min: 180,
                max: Infinity,
                price: 23
            } // Price increase per m² over 180
        ];
        const basePriceDictionary = {
            "normal_balcony": 250,
            "glass_balcony": 450,
            "terrace": 750,
            "fireplace": 200,
            "freeze_defrost": 195,
            "basement_attic": 250,
            "oven_plates": 300,
            "garage": 300,
            "water_lock_washingmachine": 200,
            "water_lock_sink": 200
        };
        const otherCostsDictionary = {
            "blind_wash": 250,
            "joint_treatment": 300,
            "deep_cleaning": 300
        };
        const selectedCheckboxes = new Set();
        function initializeFields() {
            updateDisplay(elements.resultMovingDates, "-");
            updateDisplay(elements.resultFlexibleMovingDates, "-");
            updateDisplay(elements.resultHousingSizes, "-");
            updateDisplay(elements.resultExtras, "-");
            updateDisplay(elements.otherCostsElements, "-");
            // Initialize moving date with saved value or "-"
            const savedDate = localStorage.getItem("selected-date");
            if (savedDate) {
                elements.movingDate.value = savedDate;
                updateDisplay(elements.resultMovingDates, savedDate); // Populate resultMovingDates as well
            } else {
                elements.movingDate.value = "";
                updateDisplay(elements.resultMovingDates, "-"); // Populate resultMovingDates with "-"
            }
        }
        function calculatePrice(dictionary) {
            let price = 0;
            selectedCheckboxes.forEach((id)=>{
                if (dictionary[id]) price += dictionary[id];
            });
            return price;
        }
        function calculateBasePrice() {
            return calculatePrice(basePriceDictionary);
        }
        function calculateOtherCosts() {
            return calculatePrice(otherCostsDictionary);
        }
        function findIntervalPrice(size) {
            if (size >= 180) return intervals.find((interval)=>interval.min === 180).price * (size - 180) + intervals[intervals.length - 2].price;
            else {
                const interval = intervals.find((interval)=>size >= interval.min && size <= interval.max);
                return interval ? interval.price : "Kontakta oss";
            }
        }
        function updateDisplay(elements, value) {
            elements.forEach((element)=>{
                element.textContent = value;
            });
        }
        function updateResults() {
            const basePrice = calculateBasePrice();
            const otherCosts = calculateOtherCosts();
            updateDisplay(elements.resultExtras, basePrice || "-");
            updateDisplay(elements.otherCostsElements, otherCosts || "-");
            let parsedInput = parseFloat(elements.input.value);
            if (isNaN(parsedInput)) {
                parsedInput = 0;
                elements.input.value = 0;
            }
            if (elements.input.value === "0") elements.input.value = "";
            const result = findIntervalPrice(parsedInput);
            updateDisplay(elements.cleaningBaseCosts, result);
            const totalResultText = otherCosts ? `${result + basePrice} kr + ${otherCosts} kr/h` : `${result + basePrice} kr`;
            updateDisplay(elements.totalResults, totalResultText);
            updateDisplay(elements.resultHousingSizes, elements.input.value || "-");
        }
        function updateFlexibleMovingDate() {
            updateDisplay(elements.resultFlexibleMovingDates, elements.flexibleMovingDate.value || "-");
        }
        function updateMovingDate(date) {
            if (date instanceof Date && !isNaN(date)) {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
                const day = String(date.getDate()).padStart(2, "0");
                const formattedDate = `${year}-${month}-${day}`; // Format the date as YYYY-MM-DD
                updateDisplay(elements.resultMovingDates, formattedDate);
            } else {
                updateDisplay(elements.resultMovingDates, "-");
                console.error("Invalid date:", date);
            }
        }
        // Event listeners for checkboxes
        elements.checkboxes.forEach((checkbox)=>{
            checkbox.addEventListener("change", ()=>{
                if (checkbox.checked) selectedCheckboxes.add(checkbox.parentElement.id);
                else selectedCheckboxes.delete(checkbox.parentElement.id);
                updateResults();
            });
        });
        // Event listener for input field
        elements.input.addEventListener("input", updateResults);
        // Event listener for flexible moving date input
        elements.flexibleMovingDate.addEventListener("change", updateFlexibleMovingDate);
        // Initialize date picker for moving date input
        $(elements.movingDate).datepicker({
            autoHide: true
        }).on("pick.datepicker", function(event) {
            const date = event.date; // Get the selected date as a Date object
            updateMovingDate(date);
        });
        // Disable manual input for date field
        elements.movingDate.addEventListener("keydown", function(event) {
            event.preventDefault();
        });
        // Initialize the results and fields on page load
        initializeFields();
        updateResults();
        updateFlexibleMovingDate();
    });
}
exports.default = initializeSummarySection;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d8XZh","aenu9"], "aenu9", "parcelRequireb588")

//# sourceMappingURL=index.e37f48ea.js.map
