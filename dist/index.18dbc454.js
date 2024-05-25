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
})({"j2YDk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var _addImages = require("./addImages");
var _addSkills = require("./addSkills");
function $(element) {
    return document.querySelectorAll(element);
}
$(".main-menu-button").forEach((button)=>{
    button.addEventListener("click", (e)=>{
        console.log(e.target.innerText);
        if (e.target.innerText === "Galeria cu bun\u0103t\u0103\u021Bi") {
            console.log("Clicked galerie");
            showModal();
        } else {
            console.log("Clicked contact");
            showContactModal();
        }
    });
});
//Show/CLose Modal section
function showModal() {
    //Below 2 lines add the modal
    // document.querySelector(".showModal").innerHTML = loadImageModal();
    console.log("Display Show modal");
    document.querySelector(".pictureMode").style.display = "flex";
    document.querySelector(".rightButton").addEventListener("click", (e)=>{
        console.log("clicked next");
        let images = $(".controlImages");
        console.log("clicked next");
        nextPicture(images);
        console.log("clicked next img  ", v1);
    });
    document.querySelector(".leftButton").addEventListener("click", (e)=>{
        let images = $(".controlImages");
        console.log("clicked back");
        previousPicture(images);
        console.log("clicked back img  ", v1);
    });
    let v1 = 0;
    function nextPicture(images) {
        images[v1].style.display = "none";
        if (v1 < images.length - 1) {
            v1++;
            images[v1].style.display = "block";
        } else {
            images[v1].style.display = "none";
            v1 = 0;
            images[v1].style.display = "block";
        }
    }
    function previousPicture(images) {
        images[v1].style.display = "none";
        if (v1 == 0) {
            v1 = images.length - 1;
            images[v1].style.display = "block";
        } else {
            v1--;
            images[v1].style.display = "block";
        }
    }
//this line adds an event listener for the modal-> the event listener uses the
//function below
}
document.querySelector(".imageshow").innerHTML = (0, _addImages.loadImages)();
function showContactModal() {
    //Below 2 lines add the modal
    document.querySelector(".contactModal").style.display = "block";
    console.log("Show contact modal");
//this line adds an event listener for the modal-> the event listener uses the
//function below
}
document.querySelector(".close").addEventListener("click", (e)=>{
    console.log("closed modal for images");
    closeShowModal();
});
document.querySelector(".closeContact").addEventListener("click", (e)=>{
    console.log("closed modal for Contact");
    closeContactModal();
});
function closeShowModal() {
    document.querySelector(".imagesModal").style.display = "none";
    v = 0;
}
function closeContactModal() {
    document.querySelector(".contactModal").style.display = "none";
} //Control images
 // v = visual index
 // function downloadCV() {
 //   var githubUrl =
 //     "https://github.com/AJinaEugen/newCV/releases/download/draft/QAJInaAlexandru.pdf";
 //   var a = document.createElement("a");
 //   a.href = githubUrl;
 //   a.download = "Alex_Jina.pdf"; // You can set the desired filename here
 //   document.body.appendChild(a);
 //   a.click();
 //   document.body.removeChild(a);
 // }
 // document.getElementById("download").addEventListener("click", downloadCV);
 // $("#grid").addEventListener("click", (e) => {
 //   console.log(e.target.innerText);
 //   $(`#${e.target.innerText}`).scrollIntoView({
 //     block: "start",
 //     behavior: "smooth",
 //     inline: "center",
 //   });
 // });
 // $("#redirect").addEventListener("click", (e) => {
 //   $("#Contact").scrollIntoView();
 // });
 // $("#redirectContact").addEventListener("click", (e) => {
 //   $("#Contact").scrollIntoView();
 // });
 // function addExperience() {
 //   $("#list_jobs").innerHTML = loadExperience();
 // }
 // function addRating() {
 //   $("#bars").innerHTML = loadRating();
 // }
 // function addSkills() {
 //   lod().then((loaded) => {
 //     $("#list_skills").innerHTML = loaded;
 //   });
 // }
 // addExperience();
 // addSkills();
 //Run npm run bundle and run live server on the dist indexHtmlDirectory -> opens up a browser where you can see ongoing changes
 // On release :npm run start and push to github. Local server will show a wrong page but, the correct data is pushed to GithubPages for view
 //

},{"./addImages":"8bviD","./addSkills":"2FmCC"}],"8bviD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadImages", ()=>loadImages) // import exp from "../experience.json";
 // function loadExperience() {
 //   let formatHtml = "";
 //   formatHtml = exp.map(
 //     (entry) =>
 //       `<li class="bunch">
 //       <div class ="container_journey">
 //       <div class="circle"></div>
 //       <div class="line"></div>
 //       </div>
 //       <div class="place_business">
 //     <div class="position"> <p>${entry.Position}</p></div>
 //      <div class="Employer"><p>${entry.Employer}</p></div>
 //     <div class="Desciption"><p class="desc">${entry.Description}</p></div>
 //     <div class="date"><p>${entry.date}</p></div>
 //     </div>
 //     </li>
 //     `
 //   );
 //   return formatHtml.join("");
 // }
 // export { loadExperience };
;
var _1Jpeg = require("../assets/imagesForCakes/1.jpeg");
var _1JpegDefault = parcelHelpers.interopDefault(_1Jpeg);
var _2Jpeg = require("../assets/imagesForCakes/2.jpeg");
var _2JpegDefault = parcelHelpers.interopDefault(_2Jpeg);
var _3Jpeg = require("../assets/imagesForCakes/3.jpeg");
var _3JpegDefault = parcelHelpers.interopDefault(_3Jpeg);
var _4Jpeg = require("../assets/imagesForCakes/4.jpeg");
var _4JpegDefault = parcelHelpers.interopDefault(_4Jpeg);
var _5Jpeg = require("../assets/imagesForCakes/5.jpeg");
var _5JpegDefault = parcelHelpers.interopDefault(_5Jpeg);
var _6Jpeg = require("../assets/imagesForCakes/6.jpeg");
var _6JpegDefault = parcelHelpers.interopDefault(_6Jpeg);
var _7Jpeg = require("../assets/imagesForCakes/7.jpeg");
var _7JpegDefault = parcelHelpers.interopDefault(_7Jpeg);
var _8Jpeg = require("../assets/imagesForCakes/8.jpeg");
var _8JpegDefault = parcelHelpers.interopDefault(_8Jpeg);
var _9Jpeg = require("../assets/imagesForCakes/9.jpeg");
var _9JpegDefault = parcelHelpers.interopDefault(_9Jpeg);
function loadImages() {
    let formatHtml = "";
    let arrayulMeu = [
        (0, _1JpegDefault.default),
        (0, _2JpegDefault.default),
        (0, _3JpegDefault.default),
        (0, _4JpegDefault.default),
        (0, _5JpegDefault.default),
        (0, _6JpegDefault.default),
        (0, _7JpegDefault.default),
        (0, _8JpegDefault.default),
        (0, _9JpegDefault.default)
    ];
    console.log("loading images from addImage.js", (0, _1JpegDefault.default));
    console.log("loading images from addImage.js", (0, _2JpegDefault.default));
    console.log("loading images from addImage.js", (0, _3JpegDefault.default));
    formatHtml = arrayulMeu.map((picture, index)=>{
        if (index == 0) return `<div class="imageView">
    <div class="topOpacity"></div>
      <img class="controlImages " src="${picture}" alt="">
     <div class="bottomOpacity"></div>
     </div>`;
        return `<div class="imageView noShow">
    <div class="topOpacity "></div>
    <img class="controlImages "   src="${picture}" alt="">
     <div class="bottomOpacity "></div>
     </div>`;
    });
    return formatHtml.join("");
}

},{"../assets/imagesForCakes/1.jpeg":"3kvzd","../assets/imagesForCakes/2.jpeg":"66aXK","../assets/imagesForCakes/3.jpeg":"fpMxq","../assets/imagesForCakes/4.jpeg":"70pX5","../assets/imagesForCakes/5.jpeg":"6EFJn","../assets/imagesForCakes/6.jpeg":"6ph1s","../assets/imagesForCakes/7.jpeg":"2NPG7","../assets/imagesForCakes/8.jpeg":"8emEV","../assets/imagesForCakes/9.jpeg":"1q1Hu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3kvzd":[function(require,module,exports) {
module.exports = require("9293c633ee3589b4").getBundleURL("10Mjw") + "1.09f450c9.jpeg" + "?" + Date.now();

},{"9293c633ee3589b4":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"66aXK":[function(require,module,exports) {
module.exports = require("7a2f11e0cd2f9f6").getBundleURL("10Mjw") + "2.c474a6cf.jpeg" + "?" + Date.now();

},{"7a2f11e0cd2f9f6":"lgJ39"}],"fpMxq":[function(require,module,exports) {
module.exports = require("9b4f69b5eb5d46bf").getBundleURL("10Mjw") + "3.41a8d2fe.jpeg" + "?" + Date.now();

},{"9b4f69b5eb5d46bf":"lgJ39"}],"70pX5":[function(require,module,exports) {
module.exports = require("c0ec1ddcccb2e691").getBundleURL("10Mjw") + "4.d79b1a84.jpeg" + "?" + Date.now();

},{"c0ec1ddcccb2e691":"lgJ39"}],"6EFJn":[function(require,module,exports) {
module.exports = require("7ee07534464ea59b").getBundleURL("10Mjw") + "5.6f67e82f.jpeg" + "?" + Date.now();

},{"7ee07534464ea59b":"lgJ39"}],"6ph1s":[function(require,module,exports) {
module.exports = require("22c107cc0baf5f64").getBundleURL("10Mjw") + "6.2d814f7b.jpeg" + "?" + Date.now();

},{"22c107cc0baf5f64":"lgJ39"}],"2NPG7":[function(require,module,exports) {
module.exports = require("44733e06d81723dc").getBundleURL("10Mjw") + "7.9632532e.jpeg" + "?" + Date.now();

},{"44733e06d81723dc":"lgJ39"}],"8emEV":[function(require,module,exports) {
module.exports = require("ac955ab010983e0a").getBundleURL("10Mjw") + "8.2d844c97.jpeg" + "?" + Date.now();

},{"ac955ab010983e0a":"lgJ39"}],"1q1Hu":[function(require,module,exports) {
module.exports = require("af5b4e9f65299ac9").getBundleURL("10Mjw") + "9.7c6f7d31.jpeg" + "?" + Date.now();

},{"af5b4e9f65299ac9":"lgJ39"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"2FmCC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadContactInfo", ()=>loadContactInfo);
// import skills from "../skills.json";
// function loadRating(x) {
//   let formatHtml = [];
//   for (let i = 0; i < x; i++) {
//     formatHtml += `<div class="bar"></div>`;
//   }
//   return formatHtml;
// }
// function loadSkills() {
//   let formatHtml = "";
//   formatHtml = skills.map(
//     (entry) => `<li>
//             <h3>${entry.Skill}</h3>
//             <br />
//             <p>${entry.Description}</p>
//             <div class="row" id="bars">
//               ${loadRating(entry.Rating)}
//             </div>
//           </li>`
//   );
//   return formatHtml.join("");
// }
// function lod() {
//   return new Promise((resolve, reject) => {
//     resolve(loadSkills());
//   });
// }
parcelHelpers.export(exports, "loadSkills", ()=>loadSkills);
parcelHelpers.export(exports, "loadRating", ()=>loadRating);
parcelHelpers.export(exports, "lod", ()=>lod);
var _experienceJson = require("../experience.json");
var _experienceJsonDefault = parcelHelpers.interopDefault(_experienceJson);
function loadContactInfo() {
    let formatHtml = "";
    formatHtml = ` <div class="contactModal">
       <div class="close">X</div>
       <div class="contactInfoModal">
       <div class="numar-de-telefon">
       <h2>WhatsApp: 0770376762</h2>

       </div>
          <div class="frame" id="Contact">
      <iframe
        src="https://us21.list-manage.com/contact-form?u=c9ce8229995c3bf412e731ca3&form_id=2146978df46b416a35b57478eeea6b5b"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
       </div>
      </div>
    `;
    return formatHtml;
}

},{"../experience.json":"aTMDh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTMDh":[function(require,module,exports) {
module.exports = JSON.parse('[{"Position":"QA engineer","Employer":"Linnify","Description":"A pivotal moment in my career. I learned here most of my hard-skills. Working in a team and growing were amazing benefits.","date":"2022 Aug - 2023 Nov "},{"Position":"Tester","Employer":"QuanticLab","Description":"Lerned to write testcase, run regressions, test runs and report findings.","date":"2022 Feb - 2022 Aug"},{"Position":"Automation course","Employer":"Azimut Vision","Description":"This is where I learned how to run my first automation test using Java and Selenium. A lot has changed since then..","date":"2021 Apr - 2021 Oct"}]');

},{}]},["j2YDk","1SICI"], "1SICI", "parcelRequire9456")

//# sourceMappingURL=index.18dbc454.js.map
