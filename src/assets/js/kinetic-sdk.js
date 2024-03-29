// [ZIGHRA]  Build version: 1.0.1 | Build date: 14-Sep-2018 5:27:15 PM
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("KineticTracker", [], t)
    : "object" == typeof exports
    ? (exports.KineticTracker = t())
    : ((e.ZFS = e.ZFS || {}), (e.ZFS.KineticTracker = t()));
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(i) {
      if (n[i]) return n[i].exports;
      var o = (n[i] = { i: i, l: !1, exports: {} });
      return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, i) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 2))
    );
  })([
    function (e, t, n) {
      "use strict";
      var i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      n(3),
        (e.exports = {
          uuid: function () {
            var e = "a#",
              t = "",
              n = "";
            e.indexOf("a") > -1 && (t += "abcdefghijklmnopqrstuvwxyz"),
              e.indexOf("#") > -1 && (t += "0123456789");
            for (var i = 32; i > 0; --i)
              n += t[Math.round(Math.random() * (t.length - 1))];
            return md5(n);
          },
          encrypt: function (e) {
            return md5(e);
          },
          encryptString: function (e) {
            return e ? btoa(e).replace(/[^a-zA-Z0-9]/g, "") : null;
          },
          decryptString: function (e) {
            return e ? atob(e) : null;
          },
          domName: function (e) {
            var t = e.target.nodeName;
            return (
              e.target.id && (t += "#" + e.target.id),
              e.target.className && (t += "#" + e.target.className),
              e.target.name && (t += "@" + e.target.name),
              t
            );
          },
          isObject: function (e) {
            return (
              e &&
              "object" === (void 0 === e ? "undefined" : i(e)) &&
              e.constructor === Object
            );
          },
          isNull: function (e) {
            return null === e;
          },
          isUndefined: function (e) {
            return void 0 === e;
          },
          getISODate: function () {
            return new Date().toISOString();
          },
        });
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function (e, t, n) {
      "use strict";
      /**
       * KineticSDK - Javascript Implementation of Zighra SensifyId SDK.
       *
       * @version 1.0.1
       * @author Zighra
       * @copyright Zighra Inc., https://zighra.com
       * @license http://www.apache.org/licenses/LICENSE-2.0
       */
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e) {
        if (1 == o.initialized)
          throw new Error(
            "Cannot initialize the tracking object more than once."
          );
        (o.prototype.init = function () {
          return o.init.apply(this, arguments);
        }),
          (o.prototype.trackStart = function () {
            return o.trackStart.apply(this, arguments);
          }),
          (o.prototype.trackStop = function () {
            return o.trackStop.apply(this, arguments);
          }),
          (o.prototype.getProfile = function () {
            return o.getProfile.apply(this, arguments);
          }),
          (o.prototype.getGestureData = function () {
            return o.getGestureData.apply(this, arguments);
          }),
          (o.prototype.getDeviceInfo = function () {
            return o.getDeviceInfo.apply(this, arguments);
          }),
          (o.prototype.checkGesture = function () {
            return o.checkGesture.apply(this, arguments);
          }),
          (o.prototype.checkTyping = function () {
            return o.checkTyping.apply(this, arguments);
          }),
          (o.prototype.reportAction = function () {
            return o.reportAction.apply(this, arguments);
          }),
          (o.prototype.checkProfile = function () {
            return o.checkProfile.apply(this, arguments);
          }),
          (o.prototype.getChallenge = function () {
            return o.getChallenge.apply(this, arguments);
          }),
          (o.defaultConfig = {
            appKey: null,
            appSecret: null,
            debug: !1,
            logging: !1,
            autoTracking: !0,
            disableMouseTracking: !1,
            disableScrollTracking: !1,
            disableClickTracking: !1,
            disableKeyboardTracking: !1,
            mouseTrackingElement: "body",
            autoTrackingLimit: 10,
            scrollPixelSensitivity: 1,
            autoTrackingInterval: 1e4,
            maxScrollDeltaTime: 800,
            mouseTrackingSensitivity: 1,
            trackingInterval: 100,
            clickableElements: "body",
            inputElements: 'input[type="text"], textarea',
            sensorDataQueueSize: 1e3,
            sensorPollingFrequency: 10,
          }),
          (o.sdkVersion = "1.0.1"),
          (o.instance = this),
          (o.userOptions = e || {}),
          (o.config = Object.assign({}, o.defaultConfig, o.userOptions)),
          (o.trackingStarted = !1),
          (o.currentPageSessionId = null),
          o.currentTrackSessionId,
          (o.autoTrackingCounter = 1),
          (o.trackerLoaded = !1),
          (o.trackingQueue = []),
          (o.trackingData = {}),
          (o.browserObject = new s(o)),
          (o.sessionStorage = "sessions"),
          (o.isTouchDevice = "ontouchstart" in window),
          (o.bufferData = []),
          (o.mouseRecording = !1),
          (o.mouseRecordingSession = ""),
          (o.mouseScrollStarted = !1),
          (o.mouseCurrentPointer = []),
          (o.mouseScrollData = []),
          (o.mouseLastX = 0),
          (o.mouseLastY = 0),
          (o.mouseLastTs = 0),
          (o.scrollLastX = 0),
          (o.scrollLastY = 0),
          (o.mousePointer = "mTrack"),
          (o.mouseClickPointer = "cTrack"),
          (o.mouseScrollPointer = "scTrack"),
          (o.controllerDownEvent = "mousedown"),
          (o.controllerUpEvent = "mouseup"),
          (o.controllerMoveEvent = "mousemove"),
          (o.keyboardRecording = !1),
          (o.keyboardPointer = "kTrack"),
          (o.keyDownTimestamp = 0),
          (o.keyInputTrack = {}),
          (o.keyStrokes = []),
          (o.keyCodesToIgnore = [8, 13, 32]),
          (o.proximityPointer = "proximity"),
          (o.orientationPointer = "orientation"),
          (o.ambientPointer = "ambient"),
          (o.motionPointer = "motion"),
          (o.gyroPointer = "gyro"),
          (o.sTrackingQueue = []),
          (o.motionSensorDataQueue = []),
          (o.gyroSensorDataQueue = []),
          (o.orientationSensorDataQueue = []),
          (o.proximitySensorDataQueue = []),
          (o.ambientSensorDataQueue = []),
          (o.motionSData = []),
          (o.gyroSData = []),
          (o.orientationSData = []),
          (o.proximitySData = []),
          (o.ambientSData = []),
          (o.typingQuality = 2),
          (o.getApiUrl = function () {
            return "https://sidv2.zighra.com:8443/api/web";
          }),
          (o.log = function (e, t) {
            if (1 == o.config.logging && e)
              switch (t) {
                case "info":
                  console.info(e);
                  break;
                case "warn":
                  console.warn(e);
                  break;
                case "error":
                  console.error(e);
                  break;
                default:
                  console.log(e);
              }
          }),
          (o.init = function () {
            if (o.trackerLoaded)
              throw new Error("init() should be called only once.");
            o._clearStorage(), o.loadAllEvents();
            var e = o._startPageSession();
            return (
              (o.trackerLoaded = !0),
              !0 === o.config.autoTracking
                ? (1 == o.config.logging &&
                    console.log("AUTO TRACKING IS ENABLED!"),
                  o._trackStart())
                : 1 == o.config.logging &&
                  console.log(
                    "AUTO TRACKING IS DISABLED. SWITCHING TO MANUAL!"
                  ),
              e.id
            );
          }),
          (o.trackStart = function () {
            if (!o.trackerLoaded)
              throw new Error("Please start with kinetic.init();");
            return o._trackStart();
          }),
          (o.trackStop = function (e) {
            if (!e) throw new Error("Callback function not defined.");
            o._trackStop(o.getPsId(), o.getTsId()), e(o.getGestureData());
          }),
          (o.getPsId = function () {
            return (
              o.currentPageSessionId ||
                (o.currentPageSessionId = r.encrypt(
                  document.location.href + o.getTimestamp()
                )),
              o.currentPageSessionId
            );
          }),
          (o.getTsId = function () {
            return o.currentTrackSessionId;
          }),
          (o.getTimestamp = function () {
            return new Date().getTime();
          }),
          (o.eventGetInfo = function () {
            var e;
            return {
              mTrack: o.storageGet(o.mousePointer),
              cTrack: o.storageGet(o.mouseClickPointer),
              scTrack: o.storageGet(o.mouseScrollPointer),
              kTrack: o.storageGet(o.keyboardPointer),
              sData:
                ((e = {}),
                i(e, o.motionPointer, o.motionSData),
                i(e, o.gyroPointer, o.gyroSData),
                i(e, o.ambientPointer, o.ambientSData),
                i(e, o.proximityPointer, o.proximitySData),
                i(e, o.orientationPointer, o.orientationSData),
                e),
            };
          }),
          (o._getGestureData = function () {
            var e = o.eventGetInfo(),
              t = {
                mTrack: e.mTrack,
                cTrack: e.cTrack,
                scTrack: e.scTrack,
                kTrack: e.kTrack,
                sData: e.sData,
                sessions: o._getSessionData(),
              };
            return o._clearStorage(), t;
          }),
          (o._clearStorage = function () {
            o.storageClear();
          }),
          (o._startSession = function (e) {
            var t = {};
            return (
              "user" == e
                ? ((t.id = o._generateId()),
                  (t.type = "user"),
                  (t.pageSession = o.getPsId()),
                  (t.trackStatus = 1))
                : ((t.id = o.getPsId()),
                  (t.type = "page"),
                  (t.name = ""),
                  (t.pageTitle = document.title),
                  (t.pageUrl = document.URL)),
              (t.sTs = o.getTimestamp()),
              1 == o.config.logging &&
                console.log("Started new " + t.type + " session => " + t.id),
              o.storageAppend(o.sessionStorage, t),
              t
            );
          }),
          (o._stopSession = function (e) {
            for (
              var t = o.storageGet(o.sessionStorage) || [], n = 0;
              n < t.length;
              n++
            )
              t[n].id == e &&
                ((t[n].eTs = o.getTimestamp()), (t[n].trackStatus = 0));
            return o.storageUpdate(o.sessionStorage, t), !1;
          }),
          (o._startPageSession = function () {
            return o._startSession("page");
          }),
          (o._startTrackSession = function () {
            return (o.trackingStarted = !0), o._startSession("user");
          }),
          (o._stopTrackSession = function (e) {
            return (o.trackingStarted = !1), o._stopSession(e);
          }),
          (o._clearTrackSession = function () {
            return (o.currentTrackSessionId = null), !0;
          }),
          (o._checkTrackingStatus = function (e) {
            if (e)
              for (
                var t = o.storageGet(o.sessionStorage) || [], n = 0;
                n < t.length;
                n++
              )
                if (t[n].id == e) return t[n].trackStatus;
            return !1;
          }),
          (o._getSessionData = function () {
            return o.storageGet(o.sessionStorage);
          }),
          (o._loadEvents = function () {
            var e = o.getPsId(),
              t = o.getTsId();
            o._mouseHandler(e, t, "mousemove", "add");
          }),
          (o._removeEvents = function () {
            var e = o.getPsId(),
              t = o.getTsId();
            o._mouseHandler(e, t, "mousemove", "remove");
          }),
          (o._generateId = function () {
            return r.uuid();
          }),
          (o._trackStart = function () {
            1 == o.config.logging &&
              console.log("KINETIC_CORE > _trackStart()");
            var e = o._startTrackSession(),
              t = e.id;
            o.currentTrackSessionId = e.id;
            var n = o.getPsId();
            return (
              !0 === o.config.autoTracking && (o._trackingCount = 1),
              o._loadEvents(),
              o._doTrack(n, t),
              (o.trackingStarted = !0),
              1 == o.config.logging &&
                console.log("Started Tracking Session => " + t),
              t
            );
          }),
          (o._trackStop = function () {
            return (
              1 == o.config.logging &&
                console.log("KINETIC_CORE > _trackStop()"),
              o._stopTrackSession(o.getTsId()),
              o._removeEvents(),
              !0
            );
          }),
          (o._trackRestart = function (e, t) {
            if (1 == o._checkTrackingStatus(t)) {
              if (
                (o.autoTrackingCounter++, o._trackStop(e, t) && o._trackStart())
              )
                return !0;
            } else if (o._trackStop(e, t)) return !0;
          }),
          (o._doTrack = function (e, t) {
            1 == o.config.logging && console.log("KINETIC_CORE > _doTrack()"),
              !0 === o.config.autoTracking &&
                o.autoTrackingCounter > o.config.autoTrackingLimit &&
                (1 == o.config.logging &&
                  console.log("Auto tracking limit reached."),
                o._trackStop(e, t)),
              0 == o._checkTrackingStatus(t)
                ? o._trackStop(e, t)
                : !0 === o.config.autoTracking &&
                  (o.autoTrackingCounter <= o.config.autoTrackingLimit
                    ? setTimeout(
                        o._trackRestart,
                        o.config.autoTrackingInterval,
                        e,
                        t
                      )
                    : o._trackStop(e, t));
          }),
          (o._mouseHandler = function (e, t, n, i) {
            "mousemove" == n && 1 == o.isTouchDevice && (n = "touchmove");
            var a = function (e, t, n) {
              var i = e.mouseCurrentPointer || {};
              if (void 0 !== i.pageX) {
                var o = parseInt(i.pageX, 10),
                  a = parseInt(i.pageY, 10),
                  s = r.domName(i),
                  c = r.encrypt(s),
                  l = e.getTimestamp(),
                  u = l - e.mouseLastTs;
                if (0 == e._checkTrackingStatus(n))
                  return void clearTimeout(e.trackingQueue[n]);
                if (!(u < e.config.mouseTrackingSensitivity)) {
                  var d = { eId: c, sId: n, x: o, y: a, z: 0, t: l };
                  1 == e.config.debug && (d.eName = r.domName(i)),
                    e.storageAppend(e.mousePointer, d),
                    (e.mouselastX = o),
                    (e.mouselastY = a),
                    (e.mouselastTs = l);
                }
              }
            };
            switch (n) {
              case "touchmove":
              case "mousemove":
                "add" == i
                  ? (o.trackingQueue[t] = setInterval(
                      a,
                      o.config.trackingInterval,
                      o,
                      e,
                      t
                    ))
                  : "remove" == i && clearTimeout(o.trackingQueue[t]);
            }
          }),
          (o.webRequest = function (e, t, n, i) {
            if (!e) throw new Error("Request URL not specified.");
            if (!t) throw new Error("Request Method is not specified.");
            if (!i) throw new Error("Callback function not defined.");
            1 == o.config.logging &&
              (console.log("==============================================="),
              console.log("| Sending XHR"),
              console.log("==============================================="),
              console.log("| Method: " + t),
              console.log("| URL: " + e),
              console.log("| Data: "),
              console.log(n),
              console.log("===============================================")),
              r.isObject(n) && (n = JSON.stringify(n) || {});
            var a = new XMLHttpRequest();
            (e = o.getApiUrl() + e),
              a.open(t, e, !0),
              a.setRequestHeader("Content-Type", "application/json"),
              a.setRequestHeader("Access-Control-Allow-Origin", "*"),
              a.setRequestHeader("sid-version", "1.0"),
              a.setRequestHeader("sid-key", o.config.appKey),
              a.setRequestHeader("sid-secret", o.config.appSecret);
            var s =
              document.location.hostname +
              (o.config.packageId ? o.config.packageId : "");
            a.setRequestHeader("sid-pkg-id", s),
              (a.onreadystatechange = function () {
                if (4 == a.readyState)
                  if (
                    (1 == o.config.logging &&
                      console.log(
                        "| XHR Response: " + a.status + " " + a.statusText
                      ),
                    200 == a.status || 201 == a.status)
                  ) {
                    1 == o.config.logging &&
                      (console.log(
                        "==============================================="
                      ),
                      console.log("| XHR Response: "),
                      console.log(a.responseText),
                      console.log(
                        "==============================================="
                      ));
                    var e = a.responseText;
                    try {
                      e = JSON.parse(a.responseText);
                    } catch (e) {
                      1 == o.config.logging && console.log(e.message);
                    }
                    i(null, e);
                  } else {
                    var t = a.responseText;
                    try {
                      t = JSON.parse(a.responseText);
                    } catch (e) {
                      1 == o.config.logging && console.log(e.message);
                    }
                    i(t);
                  }
              }),
              a.send(n);
          }),
          (o.getGestureData = function () {
            return o._getGestureData();
          }),
          (o.getDeviceInfo = function () {
            return o.browserObject.getInfo();
          }),
          (o.getProfile = function (e, t) {
            if (!e.name || !e.uCode)
              throw new Error("Invalid or missing parameter - name or uCode.");
            if (!t) throw new Error("Callback function not defined");
            var n = {
                name: e.name,
                typingInput: e.typingInput || "",
                uCode: e.uCode,
                versionInfo: o.sdkVersion,
                device: o.getDeviceInfo(),
                dts: r.getISODate(),
              },
              i = { requestBody: n };
            o._createProfile(i, function (e, n) {
              return e ? t(e) : t(null, n);
            });
          }),
          (o.checkProfile = function (e, t) {
            if (!e.name || !e.uCode)
              throw new Error("Invalid or missing parameter - name or uCode.");
            if (!t) throw new Error("Callback function not defined");
            var n = {
                name: e.name,
                uCode: e.uCode,
                device: o.getDeviceInfo(),
                dts: r.getISODate(),
              },
              i = { requestBody: n };
            o._checkProfile(i, function (e, n) {
              return e ? t(e) : t(null, n);
            });
          }),
          (o.checkGesture = function (e, t) {
            if (!e.profileCode)
              throw new Error("Invalid or missing parameter - profileCode.");
            if (!t) throw new Error("Callback function not defined");
            var n = {
                type: o.isTouchDevice ? "touch" : "mouse",
                mTrack: { type: "mTrack", data: e.gestureInfo.mTrack || [] },
                cTrack: { type: "cTrack", data: e.gestureInfo.cTrack || [] },
                scTrack: { type: "scTrack", data: e.gestureInfo.scTrack || [] },
                kTrack: { type: "kTrack", data: e.gestureInfo.kTrack || [] },
                sData: { type: "sData", data: e.gestureInfo.sData || [] },
                sessions: {
                  type: "sessions",
                  data: e.gestureInfo.sessions || [],
                },
              },
              i = {
                gestures: [n],
                transRefId: e.transRefId ? e.transRefId : "",
                device: o.getDeviceInfo(),
                dts: r.getISODate(),
              },
              a = { profileCode: e.profileCode, requestBody: i };
            o._checkGesture(a, function (e, n) {
              return e ? t(e) : t(null, n);
            });
          }),
          (o.checkTyping = function (e, t) {
            if (!e.profileCode)
              throw new Error("Invalid or missing parameter - profileCode.");
            if (!t) throw new Error("Callback function not defined");
            var n = { tp: e.typingInput, quality: o.typingQuality },
              i = {
                typingInput: n,
                transRefId: e.transRefId ? e.transRefId : "",
                device: o.getDeviceInfo(),
                dts: r.getISODate(),
              },
              a = { profileCode: e.profileCode, requestBody: i };
            o._checkTyping(a, function (e, n) {
              return e ? t(e) : t(null, n);
            });
          }),
          (o.checkDevice = function (e, t) {
            if (!e.profileCode)
              throw new Error("Invalid or missing parameter - profileCode.");
            if (!t) throw new Error("Callback function not defined");
            var n = { device: o.getDeviceInfo(), dts: r.getISODate() },
              i = { profileCode: e.profileCode, requestBody: n };
            o._checkDevice(i, function (e, n) {
              return e ? t(e) : t(null, n);
            });
          }),
          (o.getChallenge = function () {
            return { html: escape(a.getRandom()) };
          }),
          (o.reportAction = function (e, t) {
            if (!e.profileCode)
              throw new Error("Invalid or missing parameter - profileCode.");
            if (!t) throw new Error("Callback function not defined");
            var n = e.action ? e.action : "deny",
              i = {
                device: o.getDeviceInfo(),
                action: n,
                dFactor: e.dFactor ? e.dFactor : "unknown",
                decision: e.decision ? e.decision : n,
                dts: r.getISODate(),
              },
              a = {
                profileCode: e.profileCode,
                requestBody: i,
                refId: e.refId,
                type: e.type,
              };
            o._reportAction(a, function (e, n) {
              return e ? t(e) : t(null, n);
            });
          }),
          (o.getDeviceCheckUrl = function (e) {
            if (!e) throw new Error("Invalid profileCode.");
            return "/profiles/" + e + "/devices/check";
          }),
          (o.getGestureCheckUrl = function (e, t) {
            if (!e) throw new Error("Invalid profileCode.");
            return (
              "/profiles/" + e + "/score?type=gesture" + (t ? "&sid=" + t : "")
            );
          }),
          (o.getTypingCheckUrl = function (e, t) {
            if (!e) throw new Error("Invalid profileCode.");
            return (
              "/profiles/" + e + "/score?type=typing" + (t ? "&sid=" + t : "")
            );
          }),
          (o.getCreateProfileUrl = function () {
            return "/profiles";
          }),
          (o.getProfileCheckUrl = function () {
            return "/profiles/check";
          }),
          (o.getReportActionUrl = function (e, t, n, i) {
            if (!t || !n) throw new Error("Invalid profileCode or refId.");
            return (
              "/profiles/" + t + "/report?refId=" + n + (i ? "&sid=" + i : "")
            );
          }),
          (o._checkProfile = function (e, t) {
            if (!t) throw new Error("callback function not defined.");
            var n = e.requestBody,
              i = o.getProfileCheckUrl();
            n.uCode || t({ error: !0, message: "Invalid uCode." }),
              o.webRequest(i, "post", n, function (e, n) {
                e
                  ? t({ error: !0, message: "Error sending data." })
                  : t(null, n);
              });
          }),
          (o._createProfile = function (e, t) {
            if (!t) throw new Error("callback function not defined.");
            var n = e.requestBody;
            (n.uCode && n.name) ||
              t({ error: !0, message: "Invalid uCode or name." });
            var i = o.getCreateProfileUrl();
            o.webRequest(i, "post", n, function (e, n) {
              e ? t({ error: !0, message: "Error sending data." }) : t(null, n);
            });
          }),
          (o._checkGesture = function (e, t) {
            if (!t) throw new Error("callback function not defined.");
            var n = e.profileCode,
              i = e.requestBody;
            n || t({ error: !0, message: "Invalid profileCode." });
            var r = o.getGestureCheckUrl(n);
            o.webRequest(r, "post", i, function (e, n) {
              e ? t({ error: !0, message: "Error sending data." }) : t(null, n);
            });
          }),
          (o._checkTyping = function (e, t) {
            if (!t) throw new Error("callback function not defined.");
            var n = e.profileCode,
              i = e.requestBody;
            n || t({ error: !0, message: "Invalid profileCode." });
            var r = o.getTypingCheckUrl(n);
            o.webRequest(r, "post", i, function (e, n) {
              e ? t({ error: !0, message: "Error sending data." }) : t(null, n);
            });
          }),
          (o._checkDevice = function (e, t) {
            if (!t) throw new Error("callback function not defined.");
            var n = e;
            e.profileCode || t({ error: !0, message: "Invalid profileCode." });
            var i = o.getDeviceCheckUrl(input.profileCode);
            o.webRequest(i, "post", n, function (e, n) {
              e ? t({ error: !0, message: "Error sending data." }) : t(null, n);
            });
          }),
          (o._reportAction = function (e, t) {
            if (!t) throw new Error("callback function not defined.");
            var n = e.profileCode,
              i = e.refId,
              r = e.type,
              a = e.requestBody;
            n || t({ error: !0, message: "Invalid profileCode." });
            var s = o.getReportActionUrl(r, n, i);
            o.webRequest(s, "post", a, function (e, n) {
              e ? t({ error: !0, message: "Error sending data." }) : t(null, n);
            });
          }),
          (o.loadAllEvents = function () {
            o.browserObject.init(),
              o.initMouse(),
              o.initKeyboard(),
              o.eventRegister(
                window,
                "deviceorientation",
                o.handleOrientationSensor
              ),
              o.eventRegister(window, "devicelight", o.handleAmbientSensor),
              o.eventRegister(
                window,
                "deviceproximity",
                o.handleProximitySensor
              ),
              o.eventRegister(window, "devicemotion", o.handleDeviceMotion);
          }),
          (o.eventRegister = function (e, t, n) {
            1 == o.config.logging &&
              console.log("Registering " + t + " for " + e),
              e.addEventListener
                ? e.addEventListener(t, n, !0)
                : e.attachEvent
                ? e.attachEvent("on" + t, n)
                : (e["on" + t] = n);
          }),
          (o.eventRemove = function (e, t, n) {
            e.removeEventListener
              ? e.removeEventListener(t, n, !1)
              : e.detachEvent
              ? e.detachEvent("on" + t, n)
              : (e["on" + t] = null);
          }),
          (o.setBuffer = function (e, t) {
            e &&
              t &&
              (void 0 === e && (e = []),
              e.length > o.config.sensorDataQueueSize && e.shift(),
              e.push(t));
          }),
          (o.getBuffer = function (e) {
            return e || [];
          }),
          (o.addToBuffer = function (e, t) {
            void 0 === e && (e = []), e.push(o.getLastBufferData(t));
          }),
          (o.getLastBufferData = function (e) {
            return e.length ? e[e.length - 1] : null;
          }),
          (o.getSensorData = function (e, t) {
            return void 0 === o.bufferData[e]
              ? []
              : void 0 === o.bufferData[e][t]
              ? []
              : o.bufferData[e][t];
          }),
          (o.pushtoBufferData = function (e, t, n) {
            void 0 === o.bufferData[e] &&
              ((o.bufferData[e] = {}), (o.bufferData[e][n] = [])),
              void 0 === o.bufferData[e][n] && (o.bufferData[e][n] = []),
              t.length;
            var i = t[t.length - 1];
            if (i) {
              var r = Object.assign({}, i, { t: o.getTimestamp() });
              o.bufferData[e][n].push(r);
            }
          }),
          (o.storageFilterKey = function (e) {
            return "zfs_" + e;
          }),
          (o.storageSet = function (e, t) {
            return (
              (e = o.storageFilterKey(e)),
              localStorage.setItem(e, JSON.stringify(t)),
              !0
            );
          }),
          (o.storageGet = function (e) {
            e = o.storageFilterKey(e);
            try {
              return JSON.parse(localStorage.getItem(e));
            } catch (t) {
              return localStorage.getItem(e);
            }
          }),
          (o.storageUpdate = function (e, t) {
            o.storageRemove(e) && localStorage.set(e, t);
          }),
          (o.storageAppend = function (e, t) {
            var n = o.storageGet(e) || [];
            n.push(t), o.storageSet(e, n);
          }),
          (o.storagePush = function (e, t) {
            var n = o.storageGet(e) || [];
            Array.prototype.push.apply(n, t), o.storageSet(e, n);
          }),
          (o.storageRemove = function (e) {
            var t = !1,
              n = "number" == typeof e ? this.key(e) : e;
            return (
              n in localStorage && ((t = !0), localStorage.removeItem(n)), t
            );
          }),
          (o.storageClear = function () {
            var e = 0;
            for (var t in window.localStorage)
              window.localStorage.hasOwnProperty(t) &&
                0 == t.indexOf("zfs_") &&
                (o.storageRemove(t), e++);
            return e;
          }),
          (o.trackDataGetAll = function () {
            return JSON.stringify(o.trackingData);
          }),
          (o.trackDataGet = function (e, t, n) {
            return e && t
              ? void 0 !== o.trackingData.data[e][t][n]
                ? o.trackingData.data[e][t][n]
                : null
              : o.trackingData.data[n];
          }),
          (o.trackDataSet = function (e, t, n, i, r) {
            if (
              (void 0 === o.trackingData.data && (o.trackingData.data = {}),
              void 0 === o.trackingData.data[e] &&
                (o.trackingData.data[e] = {}),
              void 0 === o.trackingData.data[e][t] &&
                (o.trackingData.data[e][t] = {}),
              e && t)
            )
              if (void 0 === r) o.trackingData.data[e][t][n] = i;
              else if (void 0 === o.trackingData.data[e][t][n])
                (o.trackingData.data[e][t][n] = []),
                  (o.trackingData.data[e][t][n][0] = i);
              else {
                var a = o.trackingData.data[e][t][n].length;
                o.trackingData.data[e][t][n][a++] = i;
              }
            else o.trackingData.data[n] = i;
          }),
          (o.handleScreenOrientation = function (e) {
            if (e.alpha && e.beta && e.gamma) {
              1 == o.config.logging &&
                console.log("Events->handleScreenOrientation();");
              var t = {
                x: e.beta,
                y: e.gamma,
                z: e.alpha,
                t: o.getTimestamp(),
              };
              1 == o.config.logging &&
                console.log("Orientation change: " + JSON.stringify(t)),
                o.setBuffer(o.orientationSensorDataQueue, t);
            }
          }),
          (o.handleOrientationSensor = function (e) {
            if (
              e.alpha &&
              e.beta &&
              e.gamma &&
              (1 == o.config.logging &&
                console.log("Events->handleOrientationSensor();"),
              1 == o.config.logging)
            ) {
              var t = {
                absolute: e.absolute,
                x: e.beta,
                y: e.gamma,
                z: e.alpha,
                t: o.getTimestamp(),
              };
              1 == o.config.logging &&
                console.log("Orientation change: " + JSON.stringify(t)),
                o.setBuffer(o.orientationSensorDataQueue, t);
            }
          }),
          (o.handleDeviceMotion = function (e) {
            if (
              (e.acceleration && e.acceleration.x) ||
              (e.accelerationIncludingGravity &&
                e.accelerationIncludingGravity.x)
            ) {
              var t = {
                ax: e.acceleration && e.acceleration.x,
                ay: e.acceleration && e.acceleration.y,
                az: e.acceleration && e.acceleration.z,
                x:
                  e.accelerationIncludingGravity &&
                  e.accelerationIncludingGravity.x,
                y:
                  e.accelerationIncludingGravity &&
                  e.accelerationIncludingGravity.y,
                z:
                  e.accelerationIncludingGravity &&
                  e.accelerationIncludingGravity.z,
                t: o.getTimestamp(),
              };
              o.setBuffer(o.motionSensorDataQueue, t);
              var n = {
                x: e.rotationRate && e.rotationRate.alpha,
                y: e.rotationRate && e.rotationRate.beta,
                z: e.rotationRate && e.rotationRate.gamma,
                interval: e.interval,
                t: o.getTimestamp(),
              };
              o.setBuffer(o.gyroSensorDataQueue, n);
            }
          }),
          (o.handleAmbientSensor = function (e) {
            if (e.value) {
              var t = {
                type: e.type,
                x: e.value,
                min: e.min,
                max: e.max,
                t: o.getTimestamp(),
              };
              1 == o.config.logging &&
                console.log("Ambient change: " + JSON.stringify(t)),
                o.setBuffer(o.ambientSensorDataQueue, t);
            }
          }),
          (o.handleProximitySensor = function (e) {
            if (e.value) {
              var t = {
                maxValue: e.max,
                minValue: e.min,
                x: e.value,
                t: o.getTimestamp(),
              };
              1 == o.config.logging &&
                console.log("Proximity change: " + JSON.stringify(t)),
                o.setBuffer(o.proximitySensorDataQueue, t);
            }
          }),
          (o.initMouse = function () {
            if (
              (o.isTouchDevice &&
                (1 == o.config.logging &&
                  console.log("This is a touch device."),
                (o.controllerDownEvent = "touchstart"),
                (o.controllerUpEvent = "touchend"),
                (o.controllerMoveEvent = "touchmove")),
              o.config.disableMouseTracking)
            )
              1 == o.config.logging && console.log("Mouse tracking disabled.");
            else {
              var e = document.querySelector(o.config.mouseTrackingElement);
              o.eventRegister(e, o.controllerMoveEvent, function (e) {
                if (
                  ("touchmove" == o.controllerMoveEvent && (e = e.touches[0]),
                  void 0 === e.pageX)
                )
                  return void (
                    1 == o.config.logging &&
                    console.log("Unable to capture pointer location.")
                  );
                o.mouseCurrentPointer = {
                  pageX: e.pageX,
                  pageY: e.pageY,
                  target: {
                    nodeName: e.target.nodeName,
                    value: e.target.value,
                    className: e.target.className,
                    id: e.target.id,
                    tagName: e.target.tagName,
                  },
                  t: o.getTimestamp(),
                };
              });
            }
            if (o.config.disableClickTracking)
              1 == o.config.logging && console.log("Click tracking disabled.");
            else
              for (
                var t = document.querySelectorAll(o.config.clickableElements),
                  n = 0;
                n < t.length;
                n++
              )
                o.eventRegister(t[n], o.controllerDownEvent, function (e) {
                  1 == o.config.logging &&
                    console.log(o.controllerDownEvent + " on " + r.domName(e)),
                    (o.down = {}),
                    (o.down.t = o.getTimestamp()),
                    o.isTouchDevice
                      ? ((o.down.x = e.pageX || e.changedTouches[0].pageX || 0),
                        (o.down.y = e.pageY || e.changedTouches[0].pageY || 0))
                      : ((o.down.x = e.pageX || 0), (o.down.y = e.pageY || 0)),
                    (o.down.z = 0),
                    (o.down.hash = r.encrypt(r.domName(e) + o.down.t)),
                    1 == o.config.logging &&
                      console.log("Clicked element " + o.down.hash),
                    (o.mouseRecording = !0),
                    (o.mouseRecordingSession = o.down.hash),
                    (o.sTrackingQueue[o.down.hash] = setInterval(function () {
                      1 == o.config.logging &&
                        console.log("Reading sensor data from buffer."),
                        void 0 === o.bufferData[o.down.hash] &&
                          (o.bufferData[o.down.hash] = {}),
                        o.pushtoBufferData(
                          o.down.hash,
                          o.motionSensorDataQueue,
                          o.motionPointer
                        ),
                        o.pushtoBufferData(
                          o.down.hash,
                          o.gyroSensorDataQueue,
                          o.gyroPointer
                        ),
                        o.pushtoBufferData(
                          o.down.hash,
                          o.proximitySensorDataQueue,
                          o.proximityPointer
                        ),
                        o.pushtoBufferData(
                          o.down.hash,
                          o.ambientSensorDataQueue,
                          o.ambientPointer
                        ),
                        o.pushtoBufferData(
                          o.down.hash,
                          o.orientationSensorDataQueue,
                          o.orientationPointer
                        );
                    }, o.config.sensorPollingFrequency));
                }),
                  o.eventRegister(t[n], o.controllerUpEvent, function (e) {
                    1 == o.config.logging &&
                      console.log(o.controllerUpEvent + " on " + r.domName(e));
                    var t = o.down.hash;
                    delete o.down.hash,
                      (o.up = {}),
                      (o.up.t = o.getTimestamp()),
                      o.isTouchDevice
                        ? ((o.up.x = e.pageX || e.changedTouches[0].pageX || 0),
                          (o.up.y = e.pageY || e.changedTouches[0].pageY || 0))
                        : ((o.up.x = e.pageX || 0), (o.up.y = e.pageY || 0)),
                      (o.up.z = 0),
                      clearTimeout(o.sTrackingQueue[t]),
                      1 == o.config.logging &&
                        console.log("Stopped reading sensor data.");
                    var n = {
                      up: o.up,
                      down: o.down,
                      speed: o.up.t - o.down.t,
                      sId: o.getTsId(),
                      eId: r.encrypt(r.domName(e)),
                    };
                    Array.prototype.push.apply(
                      o.motionSData,
                      o.getSensorData(t, o.motionPointer)
                    ),
                      Array.prototype.push.apply(
                        o.gyroSData,
                        o.getSensorData(t, o.gyroPointer)
                      ),
                      Array.prototype.push.apply(
                        o.ambientSData,
                        o.getSensorData(t, o.ambientPointer)
                      ),
                      Array.prototype.push.apply(
                        o.orientationSData,
                        o.getSensorData(t, o.orientationPointer)
                      ),
                      Array.prototype.push.apply(
                        o.proximitySData,
                        o.getSensorData(t, o.proximityPointer)
                      ),
                      o.config.debug && (n.eName = r.domName(e)),
                      o.storageAppend(o.mouseClickPointer, n),
                      (o.mouseRecording = !1),
                      (o.mouseRecordingSession = null);
                  });
            o.config.disableScrollTracking
              ? 1 == o.config.logging &&
                console.log("Scroll tracking disabled.")
              : o.eventRegister(window, "scroll", function (e) {
                  if (o.trackingStarted) {
                    var t = parseInt(window.scrollX, 10),
                      n = parseInt(window.scrollY, 10),
                      i = parseInt(o.scrollLastX, 10) || 0,
                      a = parseInt(o.scrollLastY, 10) || 0,
                      s = Math.abs(i - t),
                      c = Math.abs(a - n);
                    if (
                      s >= o.config.scrollPixelSensitivity ||
                      c >= o.config.scrollPixelSensitivity
                    ) {
                      1 == o.config.logging &&
                        console.log(
                          e.type +
                            "-" +
                            e.target.nodeName +
                            " " +
                            t +
                            "x and " +
                            n +
                            "y"
                        );
                      var l = {
                        x: t,
                        y: n,
                        z: 0,
                        t: o.getTimestamp(),
                        el: r.domName(e),
                        sId: o.getTsId(),
                      };
                      o.mouseScrollData.push(l),
                        (o.scrollLastX = t),
                        (o.scrollLastY = n),
                        1 == o.mouseScrollStarted
                          ? (clearInterval(o.scrollInterval),
                            (o.scrollInterval = setInterval(
                              o.checkScrollEnd,
                              o.config.maxScrollDeltaTime
                            )))
                          : (o.mouseScrollStarted = !0);
                    }
                  }
                });
          }),
          (o.checkScrollEnd = function () {
            clearInterval(o.scrollInterval),
              1 == o.mouseScrollStarted &&
                ((o.mouseScrollStarted = !1),
                1 == o.config.logging && console.log("Scrolling stopped."),
                o.storagePush(o.mouseScrollPointer, o.mouseScrollData),
                (o.mouseScrollData = []));
          }),
          (o.getLastXy = function () {
            return {
              x: parseInt(o.mouseLastX, 10),
              y: parseInt(o.mouseLastY, 10),
              t: parseInt(o.mouseLastTs, 10),
            };
          }),
          (o.getMouseData = function () {
            return o.mouseCurrentPointer;
          }),
          (o.clearMouseData = function () {
            o.mouseCurrentPointer = {};
          }),
          (o.initKeyboard = function () {
            if (
              (1 == o.config.logging &&
                console.log("Events->getKeyboardInfo();"),
              !o.config.disableKeyboardTracking)
            )
              for (
                var e = document.querySelectorAll(o.config.inputElements),
                  t = 0,
                  n = e.length;
                t < n;
                t++
              )
                o.eventRegister(e[t], "keydown", function (e) {
                  o.handleKeyDown(e);
                }),
                  o.eventRegister(e[t], "keyup", function (e) {
                    o.handleKeyUp(e);
                  }),
                  o.eventRegister(e[t], "focusin", function (e) {
                    o.handleFocusIn(e);
                  }),
                  o.eventRegister(e[t], "focusout", function (e) {
                    o.handleFocusOut(e);
                  });
          }),
          (o.removeAll = function () {
            1 == o.config.logging &&
              console.log("Events->keyboard::removeAll();");
          }),
          (o.handleFocusIn = function (e) {
            1 == o.config.logging && console.log("Events->handleFocusIn();"),
              (o.keyStrokes = []),
              (o.keyInputTrack = {}),
              (o.keyInputTrack.fIn = o.getTimestamp());
          }),
          (o.handleKeyDown = function (e) {
            o.trackingStarted &&
              (e.ctrlKey ||
                e.metaKey ||
                e.altKey ||
                e.shiftKey ||
                (1 == o.config.logging &&
                  console.log("Events->handleKeyDown();"),
                o.keyDownTimestamp ||
                  (o.keyDownTimestamp = new Date().getTime()),
                (o.keyInputTrack.stroke = {}),
                (o.keyInputTrack.stroke.kdown = o.getTimestamp())));
          }),
          (o.handleKeyUp = function (e) {
            if (
              o.trackingStarted &&
              !(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)
            ) {
              void 0 === o.keyInputTrack.stroke &&
                (o.keyInputTrack.stroke = {}),
                1 == o.config.logging && console.log("Events->handleKeyUp()"),
                (o.keyInputTrack.stroke.kup = o.getTimestamp());
              var t = void 0;
              (t =
                o.keyInputTrack.stroke.kdown && o.keyInputTrack.stroke.kup
                  ? o.keyInputTrack.stroke.kup - o.keyInputTrack.stroke.kdown
                  : -1),
                o.keyStrokes.push({
                  kdown: o.keyInputTrack.stroke.kdown,
                  kup: o.keyInputTrack.stroke.kup,
                  speed: t,
                });
            }
          }),
          (o.handleFocusOut = function (e) {
            1 == o.config.logging && console.log("Events->handleFocusOut();");
            var t = {
              iTrack: {
                fIn: o.keyInputTrack.fIn,
                fOut: o.getTimestamp(),
                stroke: o.keyStrokes,
              },
              eId: r.encrypt(r.domName(e)),
              sId: o.getTsId(),
            };
            o.config.debug && (t.eName = r.domName(e)),
              o.storageAppend(o.keyboardPointer, t);
          });
      }
      var r = n(0),
        a = n(5),
        s = n(6);
      e.exports = o;
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        !(function (e) {
          function t(e) {
            for (
              var t = "", n = "", i = 0, o = 0, r = 0, a = e.length;
              a > r;
              r++
            ) {
              var s = e.charCodeAt(r);
              128 > s
                ? o++
                : ((n =
                    2048 > s
                      ? String.fromCharCode((s >> 6) | 192, (63 & s) | 128)
                      : String.fromCharCode(
                          (s >> 12) | 224,
                          ((s >> 6) & 63) | 128,
                          (63 & s) | 128
                        )),
                  o > i && (t += e.slice(i, o)),
                  (t += n),
                  (i = o = r + 1));
            }
            return o > i && (t += e.slice(i, a)), t;
          }
          function n(e) {
            var t, n;
            if (((e += ""), (m = !1), (v = w = e.length), w > 63)) {
              for (
                i(e.substring(0, 64)), a(d), m = !0, t = 128;
                w >= t;
                t += 64
              )
                i(e.substring(t - 64, t)), s(d);
              (e = e.substring(t - 64)), (w = e.length);
            }
            for (
              u[0] =
                u[1] =
                u[2] =
                u[3] =
                u[4] =
                u[5] =
                u[6] =
                u[7] =
                u[8] =
                u[9] =
                u[10] =
                u[11] =
                u[12] =
                u[13] =
                u[14] =
                u[15] =
                  0,
                t = 0;
              w > t;
              t++
            )
              (n = 3 & t),
                0 === n
                  ? (u[t >> 2] = e.charCodeAt(t))
                  : (u[t >> 2] |= e.charCodeAt(t) << f[n]);
            return (
              (u[t >> 2] |= g[3 & t]),
              t > 55
                ? (m ? s(u) : (a(u), (m = !0)),
                  s([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, v << 3, 0]))
                : ((u[14] = v << 3), void (m ? s(u) : a(u)))
            );
          }
          function i(e) {
            for (var t = 16; t--; ) {
              var n = t << 2;
              d[t] =
                e.charCodeAt(n) +
                (e.charCodeAt(n + 1) << 8) +
                (e.charCodeAt(n + 2) << 16) +
                (e.charCodeAt(n + 3) << 24);
            }
          }
          function o(e, i, o) {
            n(i ? e : t(e));
            var r = p[0];
            return (
              (l[1] = h[15 & r]),
              (l[0] = h[15 & (r >>= 4)]),
              (l[3] = h[15 & (r >>= 4)]),
              (l[2] = h[15 & (r >>= 4)]),
              (l[5] = h[15 & (r >>= 4)]),
              (l[4] = h[15 & (r >>= 4)]),
              (l[7] = h[15 & (r >>= 4)]),
              (l[6] = h[15 & (r >>= 4)]),
              (r = p[1]),
              (l[9] = h[15 & r]),
              (l[8] = h[15 & (r >>= 4)]),
              (l[11] = h[15 & (r >>= 4)]),
              (l[10] = h[15 & (r >>= 4)]),
              (l[13] = h[15 & (r >>= 4)]),
              (l[12] = h[15 & (r >>= 4)]),
              (l[15] = h[15 & (r >>= 4)]),
              (l[14] = h[15 & (r >>= 4)]),
              (r = p[2]),
              (l[17] = h[15 & r]),
              (l[16] = h[15 & (r >>= 4)]),
              (l[19] = h[15 & (r >>= 4)]),
              (l[18] = h[15 & (r >>= 4)]),
              (l[21] = h[15 & (r >>= 4)]),
              (l[20] = h[15 & (r >>= 4)]),
              (l[23] = h[15 & (r >>= 4)]),
              (l[22] = h[15 & (r >>= 4)]),
              (r = p[3]),
              (l[25] = h[15 & r]),
              (l[24] = h[15 & (r >>= 4)]),
              (l[27] = h[15 & (r >>= 4)]),
              (l[26] = h[15 & (r >>= 4)]),
              (l[29] = h[15 & (r >>= 4)]),
              (l[28] = h[15 & (r >>= 4)]),
              (l[31] = h[15 & (r >>= 4)]),
              (l[30] = h[15 & (r >>= 4)]),
              o ? l : l.join("")
            );
          }
          function r(e, t, n, i, o, r, a) {
            return ((((t += e + i + a) << o) | (t >>> r)) + n) << 0;
          }
          function a(e) {
            c(0, 0, 0, 0, e),
              (p[0] = (y[0] + 1732584193) << 0),
              (p[1] = (y[1] - 271733879) << 0),
              (p[2] = (y[2] - 1732584194) << 0),
              (p[3] = (y[3] + 271733878) << 0);
          }
          function s(e) {
            c(p[0], p[1], p[2], p[3], e),
              (p[0] = (y[0] + p[0]) << 0),
              (p[1] = (y[1] + p[1]) << 0),
              (p[2] = (y[2] + p[2]) << 0),
              (p[3] = (y[3] + p[3]) << 0);
          }
          function c(e, t, n, i, o) {
            var a, s;
            m
              ? ((e = r(((n ^ i) & t) ^ i, e, t, o[0], 7, 25, -680876936)),
                (i = r(((t ^ n) & e) ^ n, i, e, o[1], 12, 20, -389564586)),
                (n = r(((e ^ t) & i) ^ t, n, i, o[2], 17, 15, 606105819)),
                (t = r(((i ^ e) & n) ^ e, t, n, o[3], 22, 10, -1044525330)))
              : ((e = o[0] - 680876937),
                (e = (((e << 7) | (e >>> 25)) - 271733879) << 0),
                (i = o[1] - 117830708 + ((2004318071 & e) ^ -1732584194)),
                (i = (((i << 12) | (i >>> 20)) + e) << 0),
                (n = o[2] - 1126478375 + (((-271733879 ^ e) & i) ^ -271733879)),
                (n = (((n << 17) | (n >>> 15)) + i) << 0),
                (t = o[3] - 1316259209 + (((i ^ e) & n) ^ e)),
                (t = (((t << 22) | (t >>> 10)) + n) << 0)),
              (e = r(((n ^ i) & t) ^ i, e, t, o[4], 7, 25, -176418897)),
              (i = r(((t ^ n) & e) ^ n, i, e, o[5], 12, 20, 1200080426)),
              (n = r(((e ^ t) & i) ^ t, n, i, o[6], 17, 15, -1473231341)),
              (t = r(((i ^ e) & n) ^ e, t, n, o[7], 22, 10, -45705983)),
              (e = r(((n ^ i) & t) ^ i, e, t, o[8], 7, 25, 1770035416)),
              (i = r(((t ^ n) & e) ^ n, i, e, o[9], 12, 20, -1958414417)),
              (n = r(((e ^ t) & i) ^ t, n, i, o[10], 17, 15, -42063)),
              (t = r(((i ^ e) & n) ^ e, t, n, o[11], 22, 10, -1990404162)),
              (e = r(((n ^ i) & t) ^ i, e, t, o[12], 7, 25, 1804603682)),
              (i = r(((t ^ n) & e) ^ n, i, e, o[13], 12, 20, -40341101)),
              (n = r(((e ^ t) & i) ^ t, n, i, o[14], 17, 15, -1502002290)),
              (t = r(((i ^ e) & n) ^ e, t, n, o[15], 22, 10, 1236535329)),
              (e = r(((t ^ n) & i) ^ n, e, t, o[1], 5, 27, -165796510)),
              (i = r(((e ^ t) & n) ^ t, i, e, o[6], 9, 23, -1069501632)),
              (n = r(((i ^ e) & t) ^ e, n, i, o[11], 14, 18, 643717713)),
              (t = r(((n ^ i) & e) ^ i, t, n, o[0], 20, 12, -373897302)),
              (e = r(((t ^ n) & i) ^ n, e, t, o[5], 5, 27, -701558691)),
              (i = r(((e ^ t) & n) ^ t, i, e, o[10], 9, 23, 38016083)),
              (n = r(((i ^ e) & t) ^ e, n, i, o[15], 14, 18, -660478335)),
              (t = r(((n ^ i) & e) ^ i, t, n, o[4], 20, 12, -405537848)),
              (e = r(((t ^ n) & i) ^ n, e, t, o[9], 5, 27, 568446438)),
              (i = r(((e ^ t) & n) ^ t, i, e, o[14], 9, 23, -1019803690)),
              (n = r(((i ^ e) & t) ^ e, n, i, o[3], 14, 18, -187363961)),
              (t = r(((n ^ i) & e) ^ i, t, n, o[8], 20, 12, 1163531501)),
              (e = r(((t ^ n) & i) ^ n, e, t, o[13], 5, 27, -1444681467)),
              (i = r(((e ^ t) & n) ^ t, i, e, o[2], 9, 23, -51403784)),
              (n = r(((i ^ e) & t) ^ e, n, i, o[7], 14, 18, 1735328473)),
              (t = r(((n ^ i) & e) ^ i, t, n, o[12], 20, 12, -1926607734)),
              (a = t ^ n),
              (e = r(a ^ i, e, t, o[5], 4, 28, -378558)),
              (i = r(a ^ e, i, e, o[8], 11, 21, -2022574463)),
              (s = i ^ e),
              (n = r(s ^ t, n, i, o[11], 16, 16, 1839030562)),
              (t = r(s ^ n, t, n, o[14], 23, 9, -35309556)),
              (a = t ^ n),
              (e = r(a ^ i, e, t, o[1], 4, 28, -1530992060)),
              (i = r(a ^ e, i, e, o[4], 11, 21, 1272893353)),
              (s = i ^ e),
              (n = r(s ^ t, n, i, o[7], 16, 16, -155497632)),
              (t = r(s ^ n, t, n, o[10], 23, 9, -1094730640)),
              (a = t ^ n),
              (e = r(a ^ i, e, t, o[13], 4, 28, 681279174)),
              (i = r(a ^ e, i, e, o[0], 11, 21, -358537222)),
              (s = i ^ e),
              (n = r(s ^ t, n, i, o[3], 16, 16, -722521979)),
              (t = r(s ^ n, t, n, o[6], 23, 9, 76029189)),
              (a = t ^ n),
              (e = r(a ^ i, e, t, o[9], 4, 28, -640364487)),
              (i = r(a ^ e, i, e, o[12], 11, 21, -421815835)),
              (s = i ^ e),
              (n = r(s ^ t, n, i, o[15], 16, 16, 530742520)),
              (t = r(s ^ n, t, n, o[2], 23, 9, -995338651)),
              (e = r(n ^ (t | ~i), e, t, o[0], 6, 26, -198630844)),
              (i = r(t ^ (e | ~n), i, e, o[7], 10, 22, 1126891415)),
              (n = r(e ^ (i | ~t), n, i, o[14], 15, 17, -1416354905)),
              (t = r(i ^ (n | ~e), t, n, o[5], 21, 11, -57434055)),
              (e = r(n ^ (t | ~i), e, t, o[12], 6, 26, 1700485571)),
              (i = r(t ^ (e | ~n), i, e, o[3], 10, 22, -1894986606)),
              (n = r(e ^ (i | ~t), n, i, o[10], 15, 17, -1051523)),
              (t = r(i ^ (n | ~e), t, n, o[1], 21, 11, -2054922799)),
              (e = r(n ^ (t | ~i), e, t, o[8], 6, 26, 1873313359)),
              (i = r(t ^ (e | ~n), i, e, o[15], 10, 22, -30611744)),
              (n = r(e ^ (i | ~t), n, i, o[6], 15, 17, -1560198380)),
              (t = r(i ^ (n | ~e), t, n, o[13], 21, 11, 1309151649)),
              (e = r(n ^ (t | ~i), e, t, o[4], 6, 26, -145523070)),
              (i = r(t ^ (e | ~n), i, e, o[11], 10, 22, -1120210379)),
              (n = r(e ^ (i | ~t), n, i, o[2], 15, 17, 718787259)),
              (t = r(i ^ (n | ~e), t, n, o[9], 21, 11, -343485551)),
              (y[0] = e),
              (y[1] = t),
              (y[2] = n),
              (y[3] = i);
          }
          var l = [],
            u = [],
            d = [],
            g = [],
            h = "0123456789abcdef".split(""),
            f = [],
            p = [],
            m = !1,
            v = 0,
            w = 0,
            y = [];
          if (e.Int32Array)
            (u = new Int32Array(16)),
              (d = new Int32Array(16)),
              (g = new Int32Array(4)),
              (f = new Int32Array(4)),
              (p = new Int32Array(4)),
              (y = new Int32Array(4));
          else {
            var S;
            for (S = 0; 16 > S; S++) u[S] = d[S] = 0;
            for (S = 0; 4 > S; S++) g[S] = f[S] = p[S] = y[S] = 0;
          }
          (g[0] = 128),
            (g[1] = 32768),
            (g[2] = 8388608),
            (g[3] = -2147483648),
            (f[0] = 0),
            (f[1] = 8),
            (f[2] = 16),
            (f[3] = 24),
            (e.md5 = e.md5 || o);
        })(void 0 === e ? window : e);
      }.call(t, n(4)));
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      e.exports = {
        getRandom: function () {
          var e = this.get();
          return e[Math.floor(Math.random() * e.length)];
        },
        get: function () {
          var e = [];
          return (
            (e[0] = [
              '<div id="kinetic-challenge">',
              '<div style="width:80%;margin:0 auto;text-align:center;font-family:inherit">',
              "<h3>Kinetic Challenge</h3>",
              '<div id="kinetic-display-challenge">',
              "<p>Please click the below Verify button to Verify</p>",
              '<button id="verifyChallenge" style="color:inherit;" type="button"',
              'onclick="verifyKineticChallenge()">Verify</button>',
              "</div>",
              "</div>",
              "</div>",
            ].join("")),
            (e[1] = [
              '<div id="kinetic-challenge">',
              '<div style="font-family:inherit">',
              '<div id="kinetic-display-challenge">',
              '<p style="font-family:inherit;text-align:center;">Please click the below Close button to verify.</p>',
              '<div style="border:1px solid #ccc;min-height:200px;width: 80%;margin: 0 auto;background: #fff;">',
              '<div style="background:#ccc;color:#333;font-family:inherit;font-weight:bold;">',
              '<p style="padding:10px;font-family:inherit;margin:0">',
              'Kinetic Challenge <span id="verifyChallenge" style="margin-top:-2px;font-family:inherit;',
              'float:right;font-weight:bold;cursor:pointer;"',
              'title="Close" onclick="verifyKineticChallenge()">&#x274C;</span></p>',
              "</div>",
              "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("")),
            e
          );
        },
      };
    },
    function (e, t, n) {
      "use strict";
      var i = n(0),
        o = n(7),
        r = n(10),
        a = new r(),
        s = new o(),
        c = function (e) {
          (this.zfs = e),
            (this.hardwareInfo = []),
            (this.connectionInfo = []),
            (this.positionInfo = {}),
            (this.positionInfoSizeLimit = 10),
            (this.connectionInfoSizeLimit = 10),
            (this.output = {}),
            (this.detectScreenOrientation = !0),
            this.fingerprintInfo,
            (this.webglInfo = {}),
            (this.fingerprint = {}),
            (this.browserData = s.getResult()),
            (this.positionOptions = {
              enableHighAccuracy: !0,
              timeout: 5e3,
              maximumAge: 0,
            }),
            (this.positionWatchOptions = {
              enableHighAccuracy: !0,
              maximumAge: 3e4,
              timeout: 27e3,
            }),
            this.init();
        };
      (c.prototype = {
        init: function () {
          var e = this;
          new r().get(function (t, n) {
            for (var i = 0; i < n.length; ++i) {
              var o = n[i].key,
                r = n[i].value;
              e.fingerprint[o] = r;
            }
            (e.fingerprintInfo = t),
              e.listHardwareInfo(),
              e.getWebGlInfo(),
              e.initNetworkInfo(),
              e.initPositionInfo();
          });
        },
        save: function (e, t) {
          this.output[e] = t;
        },
        getInfo: function () {
          var e = this,
            t = {},
            n = this.getModelInfo();
          return (
            (t.name = n.model),
            (t.type = e.getDeviceCategory()),
            e.browserData.ua.match(/iPhone/i)
              ? (t.category = "iPhone")
              : e.browserData.ua.match(/iPad/i)
              ? (t.category = "iPad")
              : e.browserData.ua.match(/iPod/i)
              ? (t.category = "iPod")
              : (t.category = e.getDeviceCategory()),
            (t.make = n.make),
            (t.model = n.model),
            (t.fingerprintId = e.getFingerprint()),
            (t.platform = this.getPlatformInfo()),
            (t.os = this.getOsInfo()),
            (t.display = this.getDisplayInfo()),
            (t.hwFeatures = this.getHardwareInfo()),
            (t.location = this.getPositionInfo()),
            (t.connections = this.getNetworkInfo()),
            (t.browser = this.getBrowserInfo()),
            (t.deviceTS = this.getDeviceTimestamp()),
            t
          );
        },
        getHardwareInfo: function () {
          return this.hardwareInfo;
        },
        initNetworkInfo: function () {
          var e = this;
          if ("connection" in navigator) {
            this.saveNetworkInfo(e);
            try {
              (
                navigator.connection ||
                navigator.mozConnection ||
                navigator.webkitConnection
              ).onchange = function () {
                e.saveNetworkInfo(e);
              };
            } catch (t) {
              e.zfs.log(t.message);
            }
          } else e.zfs.log("navigator.connection not available.");
        },
        saveNetworkInfo: function (e) {
          if (!(e.connectionInfo.length > e.connectionInfoSizeLimit))
            try {
              var t =
                  navigator.connection ||
                  navigator.mozConnection ||
                  navigator.webkitConnection,
                n = {
                  downlink: t.downlink,
                  effectiveType: t.effectiveType,
                  rtt: t.rtt,
                  type: t.type || "network",
                  t: new Date().getTime(),
                };
              this.connectionInfo.push(n);
            } catch (e) {
              this.zfs.log(e.message);
            }
        },
        getNetworkInfo: function () {
          return this.connectionInfo;
        },
        initPositionInfo: function () {
          var e = this;
          if (
            (e.zfs.log("Events->getLocationInfo();"),
            "geolocation" in navigator)
          )
            try {
              navigator.geolocation.getCurrentPosition(
                function (t) {
                  e.savePosition(e, t);
                },
                function (t) {
                  e.zfs.log("ERROR(" + t.code + "): " + t.message);
                },
                this.positionOptions
              );
            } catch (t) {
              e.zfs.log(t.message);
            }
          else e.zfs.log("geolocation is not available");
        },
        addWatchPosition: function () {
          var e = this;
          navigator.geolocation.watchPosition(
            function (t) {
              e.savePosition(t);
            },
            null,
            this.positionwatchOptions
          );
        },
        savePosition: function (e, t) {
          this.zfs.log("Events->savePosition();"),
            (e.positionInfo = {
              latitude: t.coords.latitude,
              longitude: t.coords.longitude,
              accuracy: t.coords.accuracy,
              altitude: t.coords.altitude,
              altitudeAccuracy: t.coords.altitudeAccuracy,
              t: new Date().getTime(),
            });
        },
        getPositionInfo: function () {
          return this.positionInfo;
        },
        getDeviceTimestamp: function () {
          var e = this;
          return {
            utcTime: i.getISODate(),
            tzName: e.getTimeZone(),
            offset: e.fingerprint.timezone_offset,
          };
        },
        getOsInfo: function () {
          var e = this,
            t = {};
          return (
            (t.name = e.browserData.os.name),
            (t.version = e.browserData.os.version),
            (t.isLied = e.fingerprint.has_lied_os),
            (t.language = e.fingerprint.language),
            (t.isLanguageLied = e.fingerprint.has_lied_languages),
            e.browserData.ua.match(/Android/i)
              ? ((t.type = "MobileAndroid"), (t.subType = null))
              : e.browserData.ua.match(/Opera Mini/i)
              ? ((t.type = "MobileOpera"), (t.subType = null))
              : e.browserData.ua.match(/IEMobile/i)
              ? ((t.type = "MobileWindows"), (t.subType = null))
              : e.browserData.ua.match(/BlackBerry/i)
              ? ((t.type = "MobileBlackBerry"), (t.subType = null))
              : e.browserData.ua.match(/iPhone|iPad|iPod/i)
              ? ((t.type = "MobileIOS"), (t.subType = null))
              : /Windows/i.test(e.browserData.os.name)
              ? ((t.type = "Windows"), (t.subType = null))
              : /Mac/i.test(e.browserData.os.name)
              ? ((t.type = "Mac"), (t.subType = null))
              : /Linux/i.test(e.browserData.os.name)
              ? ((t.type = "Linux"), (t.subType = null))
              : /Solaris/i.test(e.browserData.os.name)
              ? ((t.type = "Solaris"), (t.subType = null))
              : /Ubuntu/i.test(e.browserData.os.name)
              ? ((t.type = "Linux"), (t.subType = "Ubuntu"))
              : ((t.os.subType = null), (t.os.subType = null)),
            t
          );
        },
        getPlatformInfo: function () {
          var e = this,
            t = {
              cpu: e.browserData.cpu.architecture,
              type: e.fingerprint.navigator_platform,
              memory: e.fingerprint.device_memory,
            };
          return (
            "NaN" != parseInt(e.fingerprint.hardware_concurrency, 10) &&
              (t.processorCount = parseInt(
                e.fingerprint.hardware_concurrency,
                10
              )),
            t
          );
        },
        getDeviceCategory: function () {
          return void 0 !== window.orientation ||
            -1 !== navigator.userAgent.indexOf("IEMobile")
            ? "mobile"
            : "desktop";
        },
        getDisplayInfo: function () {
          var e = this;
          return {
            width: window.screen.width,
            height: window.screen.height,
            realWidth: window.screen.availWidth,
            realHeight: window.screen.availHeight,
            colorDepth: e.fingerprint.color_depth,
            pixelRatio: e.fingerprint.pixel_ratio,
            hasLiedResolution: e.fingerprint.has_lied_resolution,
          };
        },
        getModelInfo: function () {
          var e = this;
          return {
            make: e.browserData.device.vendor || null,
            model: e.browserData.device.model || null,
          };
        },
        getFingerprint: function () {
          return this.fingerprintInfo;
        },
        getBrowserInfo: function () {
          var e = this,
            t = [];
          if (void 0 !== navigator.mimeTypes)
            for (var n = 0; n < navigator.mimeTypes.length; n++)
              t.push(navigator.mimeTypes[n].type);
          return {
            name: e.browserData.browser.name,
            version: e.browserData.browser.version,
            engine: e.browserData.engine.name,
            engineVersion: e.browserData.engine.version,
            ua: e.fingerprint.user_agent,
            mimeTypes: t,
            doNotTrack: "unknown" != a.getDoNotTrack(),
            adBlock: e.fingerprint.adblock,
            plugins: e.fingerprint.regular_plugins,
            fonts: e.fingerprint.js_fonts,
            liedBrowser: e.fingerprint.has_lied_browser,
            storage: {
              localStorage: !!e.fingerprint.local_storage,
              sessionStorage: !!e.fingerprint.session_storage,
              cookies: navigator.cookieEnabled,
              indexedDb: !!e.fingerprint.indexed_db,
              webSql: !!e.fingerprint.open_database,
            },
            webgl: {
              hasSupport: a.isWebGlSupported(),
              fingerprint: e.fingerprint.webgl,
              vendor: e.webglInfo.vendor,
              renderer: e.webglInfo.renderer,
            },
            canvas: {
              hasSupport: a.isCanvasSupported(),
              fingerprint: e.fingerprint.canvas,
            },
            runtimes: [
              {
                name: "flash",
                hasSupport: e.isFlash(),
                version: e.getFlashVersion() || null,
                hasSwfObjectLoaded: a.hasSwfObjectLoaded(),
              },
              {
                name: "silverlight",
                hasSupport: e.isSilverlight(),
                version: e.getSilverlightVersion() || null,
              },
              {
                name: "java",
                hasSupport: navigator.javaEnabled(),
                version: e.getJavaVersion() || null,
              },
            ],
          };
        },
        listHardwareInfo: function () {
          var e = this,
            t = [];
          t.push({
            type: "touch",
            name: "touchDevice",
            hasSupport: "ontouchstart" in window,
            maxTouchPoints: e.fingerprint.touch_support[0],
            hasTouchEvent: e.fingerprint.touch_support[1],
          }),
            navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
              ? navigator.mediaDevices
                  .enumerateDevices()
                  .then(function (e) {
                    for (var n = 0; n < e.length; n++)
                      t.push({
                        type: e[n].kind,
                        name: e[n].label || null,
                        hwId: e[n].deviceId || null,
                      });
                  })
                  .catch(function (t) {
                    e.zfs.log(t.name + ": " + t.message);
                  })
              : e.zfs.log("enumerateDevices() not supported."),
            (e.hardwareInfo = t);
        },
        getWebGlInfo: function () {
          var e = this;
          try {
            var t = document.getElementsByTagName("body"),
              n = "z_canvas_" + new Date().getTime(),
              i = document.createElement("canvas");
            i.setAttribute("id", n),
              i.setAttribute("hidden", !0),
              t[0].appendChild(i);
            var o = document.getElementById(n),
              r = o.getContext("webgl"),
              a = r.getExtension("WEBGL_debug_renderer_info"),
              s = {
                vendor: r.getParameter(a.UNMASKED_VENDOR_WEBGL),
                renderer: r.getParameter(a.UNMASKED_RENDERER_WEBGL),
              };
            (e.webglInfo = s), t[0].removeChild(i);
          } catch (t) {
            e.zfs.log(t.message);
          }
        },
        getTimeZone: function () {
          var e = new Date();
          return String(String(e).split("(")[1]).split(")")[0];
        },
        getJavaVersion: function () {
          for (var e = null, t = 0, n = navigator.mimeTypes.length; t < n; t++)
            if (
              null !==
              (e = navigator.mimeTypes[t].type.match(
                /^application\/x-java-applet;jpi-version=(.*)$/
              ))
            )
              return e[1];
          return null;
        },
        isFlash: function () {
          return !!navigator.plugins["Shockwave Flash"];
        },
        getFlashVersion: function () {
          if (this.isFlash()) {
            var e = [];
            try {
              var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
              return (e = t.GetVariable("$version").match(/([0-9]+)/)), e[0];
            } catch (t) {
              if (
                void 0 !==
                  navigator.mimeTypes["application/x-shockwave-flash"] &&
                navigator.plugins &&
                navigator.mimeTypes.length
              )
                return (
                  (e =
                    navigator.plugins["Shockwave Flash"].description.match(
                      /([0-9]+)/
                    )),
                  e[0]
                );
            }
          }
          return "";
        },
        isSilverlight: function () {
          return !!navigator.plugins["Silverlight Plug-In"];
        },
        getSilverlightVersion: function () {
          if (this.isSilverlight()) {
            return navigator.plugins["Silverlight Plug-In"].description;
          }
          return "";
        },
      }),
        (e.exports = c);
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var i,
          o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                };
        !(function (r, a) {
          var s = "model",
            c = "name",
            l = "type",
            u = "vendor",
            d = "version",
            g = "mobile",
            h = "tablet",
            f = {
              extend: function (e, t) {
                var n = {};
                for (var i in e)
                  t[i] && t[i].length % 2 == 0
                    ? (n[i] = t[i].concat(e[i]))
                    : (n[i] = e[i]);
                return n;
              },
              has: function (e, t) {
                return (
                  "string" == typeof e &&
                  -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                );
              },
              lowerize: function (e) {
                return e.toLowerCase();
              },
              major: function (e) {
                return "string" === (void 0 === e ? "undefined" : o(e))
                  ? e.replace(/[^\d\.]/g, "").split(".")[0]
                  : void 0;
              },
              trim: function (e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              },
            },
            p = {
              rgx: function (e, t) {
                for (var n, i, r, a, s, c, l = 0; l < t.length && !s; ) {
                  var u = t[l],
                    d = t[l + 1];
                  for (n = i = 0; n < u.length && !s; )
                    if ((s = u[n++].exec(e)))
                      for (r = 0; r < d.length; r++)
                        (c = s[++i]),
                          (a = d[r]),
                          "object" === (void 0 === a ? "undefined" : o(a)) &&
                          a.length > 0
                            ? 2 == a.length
                              ? "function" == o(a[1])
                                ? (this[a[0]] = a[1].call(this, c))
                                : (this[a[0]] = a[1])
                              : 3 == a.length
                              ? "function" !== o(a[1]) ||
                                (a[1].exec && a[1].test)
                                ? (this[a[0]] = c
                                    ? c.replace(a[1], a[2])
                                    : void 0)
                                : (this[a[0]] = c
                                    ? a[1].call(this, c, a[2])
                                    : void 0)
                              : 4 == a.length &&
                                (this[a[0]] = c
                                  ? a[3].call(this, c.replace(a[1], a[2]))
                                  : void 0)
                            : (this[a] = c || void 0);
                  l += 2;
                }
              },
              str: function (e, t) {
                for (var n in t)
                  if ("object" === o(t[n]) && t[n].length > 0) {
                    for (var i = 0; i < t[n].length; i++)
                      if (f.has(t[n][i], e)) return "?" === n ? void 0 : n;
                  } else if (f.has(t[n], e)) return "?" === n ? void 0 : n;
                return e;
              },
            },
            m = {
              browser: {
                oldsafari: {
                  version: {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                },
              },
              device: {
                amazon: { model: { "Fire Phone": ["SD", "KF"] } },
                sprint: {
                  model: { "Evo Shift 4G": "7373KT" },
                  vendor: { HTC: "APA", Sprint: "Sprint" },
                },
              },
              os: {
                windows: {
                  version: {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2000: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM",
                  },
                },
              },
            },
            v = {
              browser: [
                [
                  /(opera\smini)\/([\w\.-]+)/i,
                  /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                  /(opera).+version\/([\w\.]+)/i,
                  /(opera)[\/\s]+([\w\.]+)/i,
                ],
                [c, d],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [[c, "Opera Mini"], d],
                [/\s(opr)\/([\w\.]+)/i],
                [[c, "Opera"], d],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                  /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                  /(?:ms|\()(ie)\s([\w\.]+)/i,
                  /(rekonq)\/([\w\.]+)*/i,
                  /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i,
                ],
                [c, d],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [[c, "IE"], d],
                [/(edge)\/((\d+)?[\w\.]+)/i],
                [c, d],
                [/(yabrowser)\/([\w\.]+)/i],
                [[c, "Yandex"], d],
                [/(puffin)\/([\w\.]+)/i],
                [[c, "Puffin"], d],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [[c, "UCBrowser"], d],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[c, /_/g, " "], d],
                [/(micromessenger)\/([\w\.]+)/i],
                [[c, "WeChat"], d],
                [/(QQ)\/([\d\.]+)/i],
                [c, d],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                [c, d],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                [d, [c, "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                [d, [c, "Facebook"]],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                [d, [c, "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [[c, /(.+)/, "$1 WebView"], d],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [[c, /(.+(?:g|us))(.+)/, "$1 $2"], d],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                [d, [c, "Android Browser"]],
                [
                  /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                ],
                [c, d],
                [/(dolfin)\/([\w\.]+)/i],
                [[c, "Dolphin"], d],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [[c, "Chrome"], d],
                [/(coast)\/([\w\.]+)/i],
                [[c, "Opera Coast"], d],
                [/fxios\/([\w\.-]+)/i],
                [d, [c, "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                [d, [c, "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                [d, c],
                [
                  /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
                ],
                [[c, "GSA"], d],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [c, [d, p.str, m.browser.oldsafari.version]],
                [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                [c, d],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [[c, "Netscape"], d],
                [
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                  /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                  /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                  /(links)\s\(([\w\.]+)/i,
                  /(gobrowser)\/?([\w\.]+)*/i,
                  /(ice\s?browser)\/v?([\w\._]+)/i,
                  /(mosaic)[\/\s]([\w\.]+)/i,
                ],
                [c, d],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [["architecture", "amd64"]],
                [/(ia32(?=;))/i],
                [["architecture", f.lowerize]],
                [/((?:i[346]|x)86)[;\)]/i],
                [["architecture", "ia32"]],
                [/windows\s(ce|mobile);\sppc;/i],
                [["architecture", "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [["architecture", /ower/, "", f.lowerize]],
                [/(sun4\w)[;\)]/i],
                [["architecture", "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
                ],
                [["architecture", f.lowerize]],
              ],
              device: [
                [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                [s, u, [l, h]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                [s, [u, "Apple"], [l, h]],
                [/(apple\s{0,1}tv)/i],
                [
                  [s, "Apple TV"],
                  [u, "Apple"],
                ],
                [
                  /(archos)\s(gamepad2?)/i,
                  /(hp).+(touchpad)/i,
                  /(hp).+(tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /\s(nook)[\w\s]+build\/(\w+)/i,
                  /(dell)\s(strea[kpr\s\d]*[\dko])/i,
                ],
                [u, s, [l, h]],
                [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                [s, [u, "Amazon"], [l, h]],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                [
                  [s, p.str, m.device.amazon.model],
                  [u, "Amazon"],
                  [l, g],
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                [s, u, [l, g]],
                [/\((ip[honed|\s\w*]+);/i],
                [s, [u, "Apple"], [l, g]],
                [
                  /(blackberry)[\s-]?(\w+)/i,
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                  /(hp)\s([\w\s]+\w)/i,
                  /(asus)-?(\w+)/i,
                ],
                [u, s, [l, g]],
                [/\(bb10;\s(\w+)/i],
                [s, [u, "BlackBerry"], [l, g]],
                [
                  /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i,
                ],
                [s, [u, "Asus"], [l, h]],
                [
                  /(sony)\s(tablet\s[ps])\sbuild\//i,
                  /(sony)?(?:sgp.+)\sbuild\//i,
                ],
                [
                  [u, "Sony"],
                  [s, "Xperia Tablet"],
                  [l, h],
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                [s, [u, "Sony"], [l, g]],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                [u, s, [l, "console"]],
                [/android.+;\s(shield)\sbuild/i],
                [s, [u, "Nvidia"], [l, "console"]],
                [/(playstation\s[34portablevi]+)/i],
                [s, [u, "Sony"], [l, "console"]],
                [/(sprint\s(\w+))/i],
                [
                  [u, p.str, m.device.sprint.vendor],
                  [s, p.str, m.device.sprint.model],
                  [l, g],
                ],
                [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                [u, s, [l, h]],
                [
                  /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
                  /(zte)-(\w+)*/i,
                  /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i,
                ],
                [u, [s, /_/g, " "], [l, g]],
                [/(nexus\s9)/i],
                [s, [u, "HTC"], [l, h]],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                [s, [u, "Huawei"], [l, g]],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                [u, s, [l, g]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                [s, [u, "Microsoft"], [l, "console"]],
                [/(kin\.[onetw]{3})/i],
                [
                  [s, /\./g, " "],
                  [u, "Microsoft"],
                  [l, g],
                ],
                [
                  /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
                  /mot[\s-]?(\w+)*/i,
                  /(XT\d{3,4}) build\//i,
                  /(nexus\s6)/i,
                ],
                [s, [u, "Motorola"], [l, g]],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                [s, [u, "Motorola"], [l, h]],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                  [u, f.trim],
                  [s, f.trim],
                  [l, "smarttv"],
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [s, /^/, "SmartTV"],
                  [u, "Samsung"],
                  [l, "smarttv"],
                ],
                [/\(dtv[\);].+(aquos)/i],
                [s, [u, "Sharp"], [l, "smarttv"]],
                [
                  /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                  /((SM-T\w+))/i,
                ],
                [[u, "Samsung"], s, [l, h]],
                [/smart-tv.+(samsung)/i],
                [u, [l, "smarttv"], s],
                [
                  /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                  /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
                  /sec-((sgh\w+))/i,
                ],
                [[u, "Samsung"], s, [l, g]],
                [/sie-(\w+)*/i],
                [s, [u, "Siemens"], [l, g]],
                [
                  /(maemo|nokia).*(n900|lumia\s\d+)/i,
                  /(nokia)[\s_-]?([\w-]+)*/i,
                ],
                [[u, "Nokia"], s, [l, g]],
                [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                [s, [u, "Acer"], [l, h]],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                [s, [u, "LG"], [l, h]],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [[u, "LG"], s, [l, h]],
                [/(lg) netcast\.tv/i],
                [u, s, [l, "smarttv"]],
                [
                  /(nexus\s[45])/i,
                  /lg[e;\s\/-]+(\w+)*/i,
                  /android.+lg(\-?[\d\w]+)\s+build/i,
                ],
                [s, [u, "LG"], [l, g]],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                [s, [u, "Lenovo"], [l, h]],
                [/linux;.+((jolla));/i],
                [u, s, [l, g]],
                [/((pebble))app\/[\d\.]+\s/i],
                [u, s, [l, "wearable"]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                [u, s, [l, g]],
                [/crkey/i],
                [
                  [s, "Chromecast"],
                  [u, "Google"],
                ],
                [/android.+;\s(glass)\s\d/i],
                [s, [u, "Google"], [l, "wearable"]],
                [/android.+;\s(pixel c)\s/i],
                [s, [u, "Google"], [l, h]],
                [/android.+;\s(pixel xl|pixel)\s/i],
                [s, [u, "Google"], [l, g]],
                [
                  /android.+(\w+)\s+build\/hm\1/i,
                  /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                  /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w?)?[\s_]*(?:plus)?)\s+build/i,
                  /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i,
                ],
                [
                  [s, /_/g, " "],
                  [u, "Xiaomi"],
                  [l, g],
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+)?)\s+build/i],
                [
                  [s, /_/g, " "],
                  [u, "Xiaomi"],
                  [l, h],
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                [s, [u, "Meizu"], [l, h]],
                [
                  /android.+a000(1)\s+build/i,
                  /android.+oneplus\s(a\d{4})\s+build/i,
                ],
                [s, [u, "OnePlus"], [l, g]],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                [s, [u, "RCA"], [l, h]],
                [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],
                [s, [u, "Dell"], [l, h]],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                [s, [u, "Verizon"], [l, h]],
                [
                  /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i,
                ],
                [[u, "Barnes & Noble"], s, [l, h]],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                [s, [u, "NuVision"], [l, h]],
                [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],
                [[u, "ZTE"], s, [l, h]],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                [s, [u, "Swiss"], [l, g]],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                [s, [u, "Swiss"], [l, h]],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                [s, [u, "Zeki"], [l, h]],
                [
                  /(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,
                  /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i,
                ],
                [[u, "Dragon Touch"], s, [l, h]],
                [/android.+[;\/]\s*(NS-?.+)\s+build/i],
                [s, [u, "Insignia"], [l, h]],
                [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],
                [s, [u, "NextBook"], [l, h]],
                [
                  /android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
                ],
                [[u, "Voice"], s, [l, g]],
                [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],
                [[u, "LvTel"], s, [l, g]],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                [s, [u, "Envizen"], [l, h]],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],
                [u, s, [l, h]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                [s, [u, "MachSpeed"], [l, h]],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                [u, s, [l, h]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                [s, [u, "Rotor"], [l, h]],
                [/android.+(KS(.+))\s+build/i],
                [s, [u, "Amazon"], [l, h]],
                [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],
                [u, s, [l, h]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [[l, f.lowerize], u, s],
                [/(android.+)[;\/].+build/i],
                [s, [u, "Generic"]],
              ],
              engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                [d, [c, "EdgeHTML"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                  /(icab)[\/\s]([23]\.[\d\.]+)/i,
                ],
                [c, d],
                [/rv\:([\w\.]+).*(gecko)/i],
                [d, c],
              ],
              os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                [c, d],
                [
                  /(windows)\snt\s6\.2;\s(arm)/i,
                  /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,
                  /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
                ],
                [c, [d, p.str, m.os.windows.version]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                  [c, "Windows"],
                  [d, p.str, m.os.windows.version],
                ],
                [/\((bb)(10);/i],
                [[c, "BlackBerry"], d],
                [
                  /(blackberry)\w*\/?([\w\.]+)*/i,
                  /(tizen)[\/\s]([\w\.]+)/i,
                  /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                  /linux;.+(sailfish);/i,
                ],
                [c, d],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                [[c, "Symbian"], d],
                [/\((series40);/i],
                [c],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [[c, "Firefox OS"], d],
                [
                  /(nintendo|playstation)\s([wids34portablevu]+)/i,
                  /(mint)[\/\s\(]?(\w+)*/i,
                  /(mageia|vectorlinux)[;\s]/i,
                  /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                  /(hurd|linux)\s?([\w\.]+)*/i,
                  /(gnu)\s?([\w\.]+)*/i,
                ],
                [c, d],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [[c, "Chromium OS"], d],
                [/(sunos)\s?([\w\.]+\d)*/i],
                [[c, "Solaris"], d],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                [c, d],
                [/(haiku)\s(\w+)/i],
                [c, d],
                [
                  /cfnetwork\/.+darwin/i,
                  /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
                ],
                [
                  [d, /_/g, "."],
                  [c, "iOS"],
                ],
                [
                  /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
                  /(macintosh|mac(?=_powerpc)\s)/i,
                ],
                [
                  [c, "Mac OS"],
                  [d, /_/g, "."],
                ],
                [
                  /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,
                  /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,
                  /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                  /(unix)\s?([\w\.]+)*/i,
                ],
                [c, d],
              ],
            },
            w = function e(t, n) {
              if (
                ("object" === (void 0 === t ? "undefined" : o(t)) &&
                  ((n = t), (t = void 0)),
                !(this instanceof e))
              )
                return new e(t, n).getResult();
              var i =
                  t ||
                  (r && r.navigator && r.navigator.userAgent
                    ? r.navigator.userAgent
                    : ""),
                a = n ? f.extend(v, n) : v;
              return (
                (this.getBrowser = function () {
                  var e = { name: void 0, version: void 0 };
                  return (
                    p.rgx.call(e, i, a.browser),
                    (e.major = f.major(e.version)),
                    e
                  );
                }),
                (this.getCPU = function () {
                  var e = { architecture: void 0 };
                  return p.rgx.call(e, i, a.cpu), e;
                }),
                (this.getDevice = function () {
                  var e = { vendor: void 0, model: void 0, type: void 0 };
                  return p.rgx.call(e, i, a.device), e;
                }),
                (this.getEngine = function () {
                  var e = { name: void 0, version: void 0 };
                  return p.rgx.call(e, i, a.engine), e;
                }),
                (this.getOS = function () {
                  var e = { name: void 0, version: void 0 };
                  return p.rgx.call(e, i, a.os), e;
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU(),
                  };
                }),
                (this.getUA = function () {
                  return i;
                }),
                (this.setUA = function (e) {
                  return (i = e), this;
                }),
                this
              );
            };
          (w.VERSION = "0.7.17"),
            (w.BROWSER = { NAME: c, MAJOR: "major", VERSION: d }),
            (w.CPU = { ARCHITECTURE: "architecture" }),
            (w.DEVICE = {
              MODEL: s,
              VENDOR: u,
              TYPE: l,
              CONSOLE: "console",
              MOBILE: g,
              SMARTTV: "smarttv",
              TABLET: h,
              WEARABLE: "wearable",
              EMBEDDED: "embedded",
            }),
            (w.ENGINE = { NAME: c, VERSION: d }),
            (w.OS = { NAME: c, VERSION: d }),
            "undefined" !== o(t)
              ? ("undefined" !== o(e) && e.exports && (t = e.exports = w),
                (t.UAParser = w))
              : "function" === o(n(8)) && n(9)
              ? void 0 !==
                  (i = function () {
                    return w;
                  }.call(t, n, t, e)) && (e.exports = i)
              : r && (r.UAParser = w);
          var y = r && (r.jQuery || r.Zepto);
          if ("undefined" !== (void 0 === y ? "undefined" : o(y))) {
            var S = new w();
            (y.ua = S.getResult()),
              (y.ua.get = function () {
                return S.getUA();
              }),
              (y.ua.set = function (e) {
                S.setUA(e);
                var t = S.getResult();
                for (var n in t) y.ua[n] = t[n];
              });
          }
        })(
          "object" === ("undefined" == typeof window ? "undefined" : o(window))
            ? window
            : void 0
        );
      }.call(t, n(1)(e)));
    },
    function (e, t) {
      e.exports = function () {
        throw new Error("define cannot be used indirect");
      };
    },
    function (e, t) {
      (function (t) {
        e.exports = t;
      }.call(t, {}));
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
        !(function () {
          var i = function (e) {
            var t = {
              swfContainerId: "fingerprintjs2",
              swfPath: "flash/compiled/FontList.swf",
              detectScreenOrientation: !0,
              sortPluginsFor: [/palemoon/i],
              userDefinedFonts: [],
              excludeDoNotTrack: !0,
            };
            (this.options = this.extend(e, t)),
              (this.nativeForEach = Array.prototype.forEach),
              (this.nativeMap = Array.prototype.map);
          };
          (i.prototype = {
            extend: function (e, t) {
              if (null == e) return t;
              for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
              return t;
            },
            get: function (e) {
              var t = this,
                n = {
                  data: [],
                  addPreprocessedComponent: function (e) {
                    var i = e.value;
                    "function" == typeof t.options.preprocessor &&
                      (i = t.options.preprocessor(e.key, i)),
                      n.data.push({ key: e.key, value: i });
                  },
                };
              (n = this.userAgentKey(n)),
                (n = this.languageKey(n)),
                (n = this.colorDepthKey(n)),
                (n = this.deviceMemoryKey(n)),
                (n = this.pixelRatioKey(n)),
                (n = this.hardwareConcurrencyKey(n)),
                (n = this.screenResolutionKey(n)),
                (n = this.availableScreenResolutionKey(n)),
                (n = this.timezoneOffsetKey(n)),
                (n = this.sessionStorageKey(n)),
                (n = this.localStorageKey(n)),
                (n = this.indexedDbKey(n)),
                (n = this.addBehaviorKey(n)),
                (n = this.openDatabaseKey(n)),
                (n = this.cpuClassKey(n)),
                (n = this.platformKey(n)),
                (n = this.doNotTrackKey(n)),
                (n = this.pluginsKey(n)),
                (n = this.canvasKey(n)),
                (n = this.webglKey(n)),
                (n = this.webglVendorAndRendererKey(n)),
                (n = this.adBlockKey(n)),
                (n = this.hasLiedLanguagesKey(n)),
                (n = this.hasLiedResolutionKey(n)),
                (n = this.hasLiedOsKey(n)),
                (n = this.hasLiedBrowserKey(n)),
                (n = this.touchSupportKey(n)),
                (n = this.customEntropyFunction(n)),
                this.fontsKey(n, function (n) {
                  var i = [];
                  t.each(n.data, function (e) {
                    var t = e.value;
                    t && "function" == typeof t.join && (t = t.join(";")),
                      i.push(t);
                  });
                  var o = t.x64hash128(i.join("~~~"), 31);
                  return e(o, n.data);
                });
            },
            customEntropyFunction: function (e) {
              return (
                "function" == typeof this.options.customFunction &&
                  e.addPreprocessedComponent({
                    key: "custom",
                    value: this.options.customFunction(),
                  }),
                e
              );
            },
            userAgentKey: function (e) {
              return (
                this.options.excludeUserAgent ||
                  e.addPreprocessedComponent({
                    key: "user_agent",
                    value: this.getUserAgent(),
                  }),
                e
              );
            },
            getUserAgent: function () {
              return navigator.userAgent;
            },
            languageKey: function (e) {
              return (
                this.options.excludeLanguage ||
                  e.addPreprocessedComponent({
                    key: "language",
                    value:
                      navigator.language ||
                      navigator.userLanguage ||
                      navigator.browserLanguage ||
                      navigator.systemLanguage ||
                      "",
                  }),
                e
              );
            },
            colorDepthKey: function (e) {
              return (
                this.options.excludeColorDepth ||
                  e.addPreprocessedComponent({
                    key: "color_depth",
                    value: window.screen.colorDepth || -1,
                  }),
                e
              );
            },
            deviceMemoryKey: function (e) {
              return (
                this.options.excludeDeviceMemory ||
                  e.addPreprocessedComponent({
                    key: "device_memory",
                    value: this.getDeviceMemory(),
                  }),
                e
              );
            },
            getDeviceMemory: function () {
              return navigator.deviceMemory || -1;
            },
            pixelRatioKey: function (e) {
              return (
                this.options.excludePixelRatio ||
                  e.addPreprocessedComponent({
                    key: "pixel_ratio",
                    value: this.getPixelRatio(),
                  }),
                e
              );
            },
            getPixelRatio: function () {
              return window.devicePixelRatio || "";
            },
            screenResolutionKey: function (e) {
              return this.options.excludeScreenResolution
                ? e
                : this.getScreenResolution(e);
            },
            getScreenResolution: function (e) {
              var t;
              return (
                (t =
                  this.options.detectScreenOrientation &&
                  window.screen.height > window.screen.width
                    ? [window.screen.height, window.screen.width]
                    : [window.screen.width, window.screen.height]),
                e.addPreprocessedComponent({ key: "resolution", value: t }),
                e
              );
            },
            availableScreenResolutionKey: function (e) {
              return this.options.excludeAvailableScreenResolution
                ? e
                : this.getAvailableScreenResolution(e);
            },
            getAvailableScreenResolution: function (e) {
              var t;
              return (
                window.screen.availWidth &&
                  window.screen.availHeight &&
                  (t = this.options.detectScreenOrientation
                    ? window.screen.availHeight > window.screen.availWidth
                      ? [window.screen.availHeight, window.screen.availWidth]
                      : [window.screen.availWidth, window.screen.availHeight]
                    : [window.screen.availHeight, window.screen.availWidth]),
                void 0 !== t &&
                  e.addPreprocessedComponent({
                    key: "available_resolution",
                    value: t,
                  }),
                e
              );
            },
            timezoneOffsetKey: function (e) {
              return (
                this.options.excludeTimezoneOffset ||
                  e.addPreprocessedComponent({
                    key: "timezone_offset",
                    value: new Date().getTimezoneOffset(),
                  }),
                e
              );
            },
            sessionStorageKey: function (e) {
              return (
                !this.options.excludeSessionStorage &&
                  this.hasSessionStorage() &&
                  e.addPreprocessedComponent({
                    key: "session_storage",
                    value: 1,
                  }),
                e
              );
            },
            localStorageKey: function (e) {
              return (
                !this.options.excludeSessionStorage &&
                  this.hasLocalStorage() &&
                  e.addPreprocessedComponent({
                    key: "local_storage",
                    value: 1,
                  }),
                e
              );
            },
            indexedDbKey: function (e) {
              return (
                !this.options.excludeIndexedDB &&
                  this.hasIndexedDB() &&
                  e.addPreprocessedComponent({ key: "indexed_db", value: 1 }),
                e
              );
            },
            addBehaviorKey: function (e) {
              return (
                !this.options.excludeAddBehavior &&
                  document.body &&
                  document.body.addBehavior &&
                  e.addPreprocessedComponent({ key: "add_behavior", value: 1 }),
                e
              );
            },
            openDatabaseKey: function (e) {
              return (
                !this.options.excludeOpenDatabase &&
                  window.openDatabase &&
                  e.addPreprocessedComponent({
                    key: "open_database",
                    value: 1,
                  }),
                e
              );
            },
            cpuClassKey: function (e) {
              return (
                this.options.excludeCpuClass ||
                  e.addPreprocessedComponent({
                    key: "cpu_class",
                    value: this.getNavigatorCpuClass(),
                  }),
                e
              );
            },
            platformKey: function (e) {
              return (
                this.options.excludePlatform ||
                  e.addPreprocessedComponent({
                    key: "navigator_platform",
                    value: this.getNavigatorPlatform(),
                  }),
                e
              );
            },
            doNotTrackKey: function (e) {
              return (
                this.options.excludeDoNotTrack ||
                  e.addPreprocessedComponent({
                    key: "do_not_track",
                    value: this.getDoNotTrack(),
                  }),
                e
              );
            },
            canvasKey: function (e) {
              return (
                !this.options.excludeCanvas &&
                  this.isCanvasSupported() &&
                  e.addPreprocessedComponent({
                    key: "canvas",
                    value: this.getCanvasFp(),
                  }),
                e
              );
            },
            webglKey: function (e) {
              return (
                !this.options.excludeWebGL &&
                  this.isWebGlSupported() &&
                  e.addPreprocessedComponent({
                    key: "webgl",
                    value: this.getWebglFp(),
                  }),
                e
              );
            },
            webglVendorAndRendererKey: function (e) {
              return (
                !this.options.excludeWebGLVendorAndRenderer &&
                  this.isWebGlSupported() &&
                  e.addPreprocessedComponent({
                    key: "webgl_vendor",
                    value: this.getWebglVendorAndRenderer(),
                  }),
                e
              );
            },
            adBlockKey: function (e) {
              return (
                this.options.excludeAdBlock ||
                  e.addPreprocessedComponent({
                    key: "adblock",
                    value: this.getAdBlock(),
                  }),
                e
              );
            },
            hasLiedLanguagesKey: function (e) {
              return (
                this.options.excludeHasLiedLanguages ||
                  e.addPreprocessedComponent({
                    key: "has_lied_languages",
                    value: this.getHasLiedLanguages(),
                  }),
                e
              );
            },
            hasLiedResolutionKey: function (e) {
              return (
                this.options.excludeHasLiedResolution ||
                  e.addPreprocessedComponent({
                    key: "has_lied_resolution",
                    value: this.getHasLiedResolution(),
                  }),
                e
              );
            },
            hasLiedOsKey: function (e) {
              return (
                this.options.excludeHasLiedOs ||
                  e.addPreprocessedComponent({
                    key: "has_lied_os",
                    value: this.getHasLiedOs(),
                  }),
                e
              );
            },
            hasLiedBrowserKey: function (e) {
              return (
                this.options.excludeHasLiedBrowser ||
                  e.addPreprocessedComponent({
                    key: "has_lied_browser",
                    value: this.getHasLiedBrowser(),
                  }),
                e
              );
            },
            fontsKey: function (e, t) {
              return this.options.excludeJsFonts
                ? this.flashFontsKey(e, t)
                : this.jsFontsKey(e, t);
            },
            flashFontsKey: function (e, t) {
              return this.options.excludeFlashFonts
                ? t(e)
                : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled()
                ? void 0 === this.options.swfPath
                  ? t(e)
                  : void this.loadSwfAndDetectFonts(function (n) {
                      e.addPreprocessedComponent({
                        key: "swf_fonts",
                        value: n.join(";"),
                      }),
                        t(e);
                    })
                : t(e);
            },
            jsFontsKey: function (e, t) {
              var n = this;
              return setTimeout(function () {
                var i = ["monospace", "sans-serif", "serif"],
                  o = [
                    "Andale Mono",
                    "Arial",
                    "Arial Black",
                    "Arial Hebrew",
                    "Arial MT",
                    "Arial Narrow",
                    "Arial Rounded MT Bold",
                    "Arial Unicode MS",
                    "Bitstream Vera Sans Mono",
                    "Book Antiqua",
                    "Bookman Old Style",
                    "Calibri",
                    "Cambria",
                    "Cambria Math",
                    "Century",
                    "Century Gothic",
                    "Century Schoolbook",
                    "Comic Sans",
                    "Comic Sans MS",
                    "Consolas",
                    "Courier",
                    "Courier New",
                    "Garamond",
                    "Geneva",
                    "Georgia",
                    "Helvetica",
                    "Helvetica Neue",
                    "Impact",
                    "Lucida Bright",
                    "Lucida Calligraphy",
                    "Lucida Console",
                    "Lucida Fax",
                    "LUCIDA GRANDE",
                    "Lucida Handwriting",
                    "Lucida Sans",
                    "Lucida Sans Typewriter",
                    "Lucida Sans Unicode",
                    "Microsoft Sans Serif",
                    "Monaco",
                    "Monotype Corsiva",
                    "MS Gothic",
                    "MS Outlook",
                    "MS PGothic",
                    "MS Reference Sans Serif",
                    "MS Sans Serif",
                    "MS Serif",
                    "MYRIAD",
                    "MYRIAD PRO",
                    "Palatino",
                    "Palatino Linotype",
                    "Segoe Print",
                    "Segoe Script",
                    "Segoe UI",
                    "Segoe UI Light",
                    "Segoe UI Semibold",
                    "Segoe UI Symbol",
                    "Tahoma",
                    "Times",
                    "Times New Roman",
                    "Times New Roman PS",
                    "Trebuchet MS",
                    "Verdana",
                    "Wingdings",
                    "Wingdings 2",
                    "Wingdings 3",
                  ],
                  r = [
                    "Abadi MT Condensed Light",
                    "Academy Engraved LET",
                    "ADOBE CASLON PRO",
                    "Adobe Garamond",
                    "ADOBE GARAMOND PRO",
                    "Agency FB",
                    "Aharoni",
                    "Albertus Extra Bold",
                    "Albertus Medium",
                    "Algerian",
                    "Amazone BT",
                    "American Typewriter",
                    "American Typewriter Condensed",
                    "AmerType Md BT",
                    "Andalus",
                    "Angsana New",
                    "AngsanaUPC",
                    "Antique Olive",
                    "Aparajita",
                    "Apple Chancery",
                    "Apple Color Emoji",
                    "Apple SD Gothic Neo",
                    "Arabic Typesetting",
                    "ARCHER",
                    "ARNO PRO",
                    "Arrus BT",
                    "Aurora Cn BT",
                    "AvantGarde Bk BT",
                    "AvantGarde Md BT",
                    "AVENIR",
                    "Ayuthaya",
                    "Bandy",
                    "Bangla Sangam MN",
                    "Bank Gothic",
                    "BankGothic Md BT",
                    "Baskerville",
                    "Baskerville Old Face",
                    "Batang",
                    "BatangChe",
                    "Bauer Bodoni",
                    "Bauhaus 93",
                    "Bazooka",
                    "Bell MT",
                    "Bembo",
                    "Benguiat Bk BT",
                    "Berlin Sans FB",
                    "Berlin Sans FB Demi",
                    "Bernard MT Condensed",
                    "BernhardFashion BT",
                    "BernhardMod BT",
                    "Big Caslon",
                    "BinnerD",
                    "Blackadder ITC",
                    "BlairMdITC TT",
                    "Bodoni 72",
                    "Bodoni 72 Oldstyle",
                    "Bodoni 72 Smallcaps",
                    "Bodoni MT",
                    "Bodoni MT Black",
                    "Bodoni MT Condensed",
                    "Bodoni MT Poster Compressed",
                    "Bookshelf Symbol 7",
                    "Boulder",
                    "Bradley Hand",
                    "Bradley Hand ITC",
                    "Bremen Bd BT",
                    "Britannic Bold",
                    "Broadway",
                    "Browallia New",
                    "BrowalliaUPC",
                    "Brush Script MT",
                    "Californian FB",
                    "Calisto MT",
                    "Calligrapher",
                    "Candara",
                    "CaslonOpnface BT",
                    "Castellar",
                    "Centaur",
                    "Cezanne",
                    "CG Omega",
                    "CG Times",
                    "Chalkboard",
                    "Chalkboard SE",
                    "Chalkduster",
                    "Charlesworth",
                    "Charter Bd BT",
                    "Charter BT",
                    "Chaucer",
                    "ChelthmITC Bk BT",
                    "Chiller",
                    "Clarendon",
                    "Clarendon Condensed",
                    "CloisterBlack BT",
                    "Cochin",
                    "Colonna MT",
                    "Constantia",
                    "Cooper Black",
                    "Copperplate",
                    "Copperplate Gothic",
                    "Copperplate Gothic Bold",
                    "Copperplate Gothic Light",
                    "CopperplGoth Bd BT",
                    "Corbel",
                    "Cordia New",
                    "CordiaUPC",
                    "Cornerstone",
                    "Coronet",
                    "Cuckoo",
                    "Curlz MT",
                    "DaunPenh",
                    "Dauphin",
                    "David",
                    "DB LCD Temp",
                    "DELICIOUS",
                    "Denmark",
                    "DFKai-SB",
                    "Didot",
                    "DilleniaUPC",
                    "DIN",
                    "DokChampa",
                    "Dotum",
                    "DotumChe",
                    "Ebrima",
                    "Edwardian Script ITC",
                    "Elephant",
                    "English 111 Vivace BT",
                    "Engravers MT",
                    "EngraversGothic BT",
                    "Eras Bold ITC",
                    "Eras Demi ITC",
                    "Eras Light ITC",
                    "Eras Medium ITC",
                    "EucrosiaUPC",
                    "Euphemia",
                    "Euphemia UCAS",
                    "EUROSTILE",
                    "Exotc350 Bd BT",
                    "FangSong",
                    "Felix Titling",
                    "Fixedsys",
                    "FONTIN",
                    "Footlight MT Light",
                    "Forte",
                    "FrankRuehl",
                    "Fransiscan",
                    "Freefrm721 Blk BT",
                    "FreesiaUPC",
                    "Freestyle Script",
                    "French Script MT",
                    "FrnkGothITC Bk BT",
                    "Fruitger",
                    "FRUTIGER",
                    "Futura",
                    "Futura Bk BT",
                    "Futura Lt BT",
                    "Futura Md BT",
                    "Futura ZBlk BT",
                    "FuturaBlack BT",
                    "Gabriola",
                    "Galliard BT",
                    "Gautami",
                    "Geeza Pro",
                    "Geometr231 BT",
                    "Geometr231 Hv BT",
                    "Geometr231 Lt BT",
                    "GeoSlab 703 Lt BT",
                    "GeoSlab 703 XBd BT",
                    "Gigi",
                    "Gill Sans",
                    "Gill Sans MT",
                    "Gill Sans MT Condensed",
                    "Gill Sans MT Ext Condensed Bold",
                    "Gill Sans Ultra Bold",
                    "Gill Sans Ultra Bold Condensed",
                    "Gisha",
                    "Gloucester MT Extra Condensed",
                    "GOTHAM",
                    "GOTHAM BOLD",
                    "Goudy Old Style",
                    "Goudy Stout",
                    "GoudyHandtooled BT",
                    "GoudyOLSt BT",
                    "Gujarati Sangam MN",
                    "Gulim",
                    "GulimChe",
                    "Gungsuh",
                    "GungsuhChe",
                    "Gurmukhi MN",
                    "Haettenschweiler",
                    "Harlow Solid Italic",
                    "Harrington",
                    "Heather",
                    "Heiti SC",
                    "Heiti TC",
                    "HELV",
                    "Herald",
                    "High Tower Text",
                    "Hiragino Kaku Gothic ProN",
                    "Hiragino Mincho ProN",
                    "Hoefler Text",
                    "Humanst 521 Cn BT",
                    "Humanst521 BT",
                    "Humanst521 Lt BT",
                    "Imprint MT Shadow",
                    "Incised901 Bd BT",
                    "Incised901 BT",
                    "Incised901 Lt BT",
                    "INCONSOLATA",
                    "Informal Roman",
                    "Informal011 BT",
                    "INTERSTATE",
                    "IrisUPC",
                    "Iskoola Pota",
                    "JasmineUPC",
                    "Jazz LET",
                    "Jenson",
                    "Jester",
                    "Jokerman",
                    "Juice ITC",
                    "Kabel Bk BT",
                    "Kabel Ult BT",
                    "Kailasa",
                    "KaiTi",
                    "Kalinga",
                    "Kannada Sangam MN",
                    "Kartika",
                    "Kaufmann Bd BT",
                    "Kaufmann BT",
                    "Khmer UI",
                    "KodchiangUPC",
                    "Kokila",
                    "Korinna BT",
                    "Kristen ITC",
                    "Krungthep",
                    "Kunstler Script",
                    "Lao UI",
                    "Latha",
                    "Leelawadee",
                    "Letter Gothic",
                    "Levenim MT",
                    "LilyUPC",
                    "Lithograph",
                    "Lithograph Light",
                    "Long Island",
                    "Lydian BT",
                    "Magneto",
                    "Maiandra GD",
                    "Malayalam Sangam MN",
                    "Malgun Gothic",
                    "Mangal",
                    "Marigold",
                    "Marion",
                    "Marker Felt",
                    "Market",
                    "Marlett",
                    "Matisse ITC",
                    "Matura MT Script Capitals",
                    "Meiryo",
                    "Meiryo UI",
                    "Microsoft Himalaya",
                    "Microsoft JhengHei",
                    "Microsoft New Tai Lue",
                    "Microsoft PhagsPa",
                    "Microsoft Tai Le",
                    "Microsoft Uighur",
                    "Microsoft YaHei",
                    "Microsoft Yi Baiti",
                    "MingLiU",
                    "MingLiU_HKSCS",
                    "MingLiU_HKSCS-ExtB",
                    "MingLiU-ExtB",
                    "Minion",
                    "Minion Pro",
                    "Miriam",
                    "Miriam Fixed",
                    "Mistral",
                    "Modern",
                    "Modern No. 20",
                    "Mona Lisa Solid ITC TT",
                    "Mongolian Baiti",
                    "MONO",
                    "MoolBoran",
                    "Mrs Eaves",
                    "MS LineDraw",
                    "MS Mincho",
                    "MS PMincho",
                    "MS Reference Specialty",
                    "MS UI Gothic",
                    "MT Extra",
                    "MUSEO",
                    "MV Boli",
                    "Nadeem",
                    "Narkisim",
                    "NEVIS",
                    "News Gothic",
                    "News GothicMT",
                    "NewsGoth BT",
                    "Niagara Engraved",
                    "Niagara Solid",
                    "Noteworthy",
                    "NSimSun",
                    "Nyala",
                    "OCR A Extended",
                    "Old Century",
                    "Old English Text MT",
                    "Onyx",
                    "Onyx BT",
                    "OPTIMA",
                    "Oriya Sangam MN",
                    "OSAKA",
                    "OzHandicraft BT",
                    "Palace Script MT",
                    "Papyrus",
                    "Parchment",
                    "Party LET",
                    "Pegasus",
                    "Perpetua",
                    "Perpetua Titling MT",
                    "PetitaBold",
                    "Pickwick",
                    "Plantagenet Cherokee",
                    "Playbill",
                    "PMingLiU",
                    "PMingLiU-ExtB",
                    "Poor Richard",
                    "Poster",
                    "PosterBodoni BT",
                    "PRINCETOWN LET",
                    "Pristina",
                    "PTBarnum BT",
                    "Pythagoras",
                    "Raavi",
                    "Rage Italic",
                    "Ravie",
                    "Ribbon131 Bd BT",
                    "Rockwell",
                    "Rockwell Condensed",
                    "Rockwell Extra Bold",
                    "Rod",
                    "Roman",
                    "Sakkal Majalla",
                    "Santa Fe LET",
                    "Savoye LET",
                    "Sceptre",
                    "Script",
                    "Script MT Bold",
                    "SCRIPTINA",
                    "Serifa",
                    "Serifa BT",
                    "Serifa Th BT",
                    "ShelleyVolante BT",
                    "Sherwood",
                    "Shonar Bangla",
                    "Showcard Gothic",
                    "Shruti",
                    "Signboard",
                    "SILKSCREEN",
                    "SimHei",
                    "Simplified Arabic",
                    "Simplified Arabic Fixed",
                    "SimSun",
                    "SimSun-ExtB",
                    "Sinhala Sangam MN",
                    "Sketch Rockwell",
                    "Skia",
                    "Small Fonts",
                    "Snap ITC",
                    "Snell Roundhand",
                    "Socket",
                    "Souvenir Lt BT",
                    "Staccato222 BT",
                    "Steamer",
                    "Stencil",
                    "Storybook",
                    "Styllo",
                    "Subway",
                    "Swis721 BlkEx BT",
                    "Swiss911 XCm BT",
                    "Sylfaen",
                    "Synchro LET",
                    "System",
                    "Tamil Sangam MN",
                    "Technical",
                    "Teletype",
                    "Telugu Sangam MN",
                    "Tempus Sans ITC",
                    "Terminal",
                    "Thonburi",
                    "Traditional Arabic",
                    "Trajan",
                    "TRAJAN PRO",
                    "Tristan",
                    "Tubular",
                    "Tunga",
                    "Tw Cen MT",
                    "Tw Cen MT Condensed",
                    "Tw Cen MT Condensed Extra Bold",
                    "TypoUpright BT",
                    "Unicorn",
                    "Univers",
                    "Univers CE 55 Medium",
                    "Univers Condensed",
                    "Utsaah",
                    "Vagabond",
                    "Vani",
                    "Vijaya",
                    "Viner Hand ITC",
                    "VisualUI",
                    "Vivaldi",
                    "Vladimir Script",
                    "Vrinda",
                    "Westminster",
                    "WHITNEY",
                    "Wide Latin",
                    "ZapfEllipt BT",
                    "ZapfHumnst BT",
                    "ZapfHumnst Dm BT",
                    "Zapfino",
                    "Zurich BlkEx BT",
                    "Zurich Ex BT",
                    "ZWAdobeF",
                  ];
                n.options.extendedJsFonts && (o = o.concat(r)),
                  (o = o.concat(n.options.userDefinedFonts)),
                  (o = o.filter(function (e, t) {
                    return o.indexOf(e) === t;
                  }));
                var a = document.getElementsByTagName("body")[0],
                  s = document.createElement("div"),
                  c = document.createElement("div"),
                  l = {},
                  u = {},
                  d = function () {
                    var e = document.createElement("span");
                    return (
                      (e.style.position = "absolute"),
                      (e.style.left = "-9999px"),
                      (e.style.fontSize = "72px"),
                      (e.style.fontStyle = "normal"),
                      (e.style.fontWeight = "normal"),
                      (e.style.letterSpacing = "normal"),
                      (e.style.lineBreak = "auto"),
                      (e.style.lineHeight = "normal"),
                      (e.style.texTransform = "none"),
                      (e.style.textAlign = "left"),
                      (e.style.textDecoration = "none"),
                      (e.style.textShadow = "none"),
                      (e.style.whiteSpace = "normal"),
                      (e.style.wordBreak = "normal"),
                      (e.style.wordSpacing = "normal"),
                      (e.innerHTML = "mmmmmmmmmmlli"),
                      e
                    );
                  },
                  g = function (e, t) {
                    var n = d();
                    return (n.style.fontFamily = "'" + e + "'," + t), n;
                  },
                  h = (function () {
                    for (var e = [], t = 0, n = i.length; t < n; t++) {
                      var o = d();
                      (o.style.fontFamily = i[t]), s.appendChild(o), e.push(o);
                    }
                    return e;
                  })();
                a.appendChild(s);
                for (var f = 0, p = i.length; f < p; f++)
                  (l[i[f]] = h[f].offsetWidth), (u[i[f]] = h[f].offsetHeight);
                var m = (function () {
                  for (var e = {}, t = 0, n = o.length; t < n; t++) {
                    for (var r = [], a = 0, s = i.length; a < s; a++) {
                      var l = g(o[t], i[a]);
                      c.appendChild(l), r.push(l);
                    }
                    e[o[t]] = r;
                  }
                  return e;
                })();
                a.appendChild(c);
                for (var v = [], w = 0, y = o.length; w < y; w++)
                  (function (e) {
                    for (var t = !1, n = 0; n < i.length; n++)
                      if (
                        (t =
                          e[n].offsetWidth !== l[i[n]] ||
                          e[n].offsetHeight !== u[i[n]])
                      )
                        return t;
                    return t;
                  })(m[o[w]]) && v.push(o[w]);
                a.removeChild(c),
                  a.removeChild(s),
                  e.addPreprocessedComponent({ key: "js_fonts", value: v }),
                  t(e);
              }, 1);
            },
            pluginsKey: function (e) {
              return (
                this.options.excludePlugins ||
                  (this.isIE()
                    ? this.options.excludeIEPlugins ||
                      e.addPreprocessedComponent({
                        key: "ie_plugins",
                        value: this.getIEPlugins(),
                      })
                    : e.addPreprocessedComponent({
                        key: "regular_plugins",
                        value: this.getRegularPlugins(),
                      })),
                e
              );
            },
            getRegularPlugins: function () {
              var e = [];
              if (navigator.plugins)
                for (var t = 0, n = navigator.plugins.length; t < n; t++)
                  navigator.plugins[t] && e.push(navigator.plugins[t]);
              return (
                this.pluginsShouldBeSorted() &&
                  (e = e.sort(function (e, t) {
                    return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
                  })),
                this.map(
                  e,
                  function (e) {
                    var t = this.map(e, function (e) {
                      return [e.type, e.suffixes].join("~");
                    }).join(",");
                    return [e.name, e.description, t].join("::");
                  },
                  this
                )
              );
            },
            getIEPlugins: function () {
              var e = [];
              if (
                (Object.getOwnPropertyDescriptor &&
                  Object.getOwnPropertyDescriptor(window, "ActiveXObject")) ||
                "ActiveXObject" in window
              ) {
                var t = [
                  "AcroPDF.PDF",
                  "Adodb.Stream",
                  "AgControl.AgControl",
                  "DevalVRXCtrl.DevalVRXCtrl.1",
                  "MacromediaFlashPaper.MacromediaFlashPaper",
                  "Msxml2.DOMDocument",
                  "Msxml2.XMLHTTP",
                  "PDF.PdfCtrl",
                  "QuickTime.QuickTime",
                  "QuickTimeCheckObject.QuickTimeCheck.1",
                  "RealPlayer",
                  "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                  "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                  "Scripting.Dictionary",
                  "SWCtl.SWCtl",
                  "Shell.UIHelper",
                  "ShockwaveFlash.ShockwaveFlash",
                  "Skype.Detection",
                  "TDCCtl.TDCCtl",
                  "WMPlayer.OCX",
                  "rmocx.RealPlayer G2 Control",
                  "rmocx.RealPlayer G2 Control.1",
                ];
                e = this.map(t, function (e) {
                  try {
                    return new window.ActiveXObject(e), e;
                  } catch (e) {
                    return null;
                  }
                });
              }
              return (
                navigator.plugins && (e = e.concat(this.getRegularPlugins())), e
              );
            },
            pluginsShouldBeSorted: function () {
              for (
                var e = !1, t = 0, n = this.options.sortPluginsFor.length;
                t < n;
                t++
              ) {
                var i = this.options.sortPluginsFor[t];
                if (navigator.userAgent.match(i)) {
                  e = !0;
                  break;
                }
              }
              return e;
            },
            touchSupportKey: function (e) {
              return (
                this.options.excludeTouchSupport ||
                  e.addPreprocessedComponent({
                    key: "touch_support",
                    value: this.getTouchSupport(),
                  }),
                e
              );
            },
            hardwareConcurrencyKey: function (e) {
              return (
                this.options.excludeHardwareConcurrency ||
                  e.addPreprocessedComponent({
                    key: "hardware_concurrency",
                    value: this.getHardwareConcurrency(),
                  }),
                e
              );
            },
            hasSessionStorage: function () {
              try {
                return !!window.sessionStorage;
              } catch (e) {
                return !0;
              }
            },
            hasLocalStorage: function () {
              try {
                return !!window.localStorage;
              } catch (e) {
                return !0;
              }
            },
            hasIndexedDB: function () {
              try {
                return !!window.indexedDB;
              } catch (e) {
                return !0;
              }
            },
            getHardwareConcurrency: function () {
              return navigator.hardwareConcurrency
                ? navigator.hardwareConcurrency
                : "unknown";
            },
            getNavigatorCpuClass: function () {
              return navigator.cpuClass ? navigator.cpuClass : "unknown";
            },
            getNavigatorPlatform: function () {
              return navigator.platform ? navigator.platform : "unknown";
            },
            getDoNotTrack: function () {
              return navigator.doNotTrack
                ? navigator.doNotTrack
                : navigator.msDoNotTrack
                ? navigator.msDoNotTrack
                : window.doNotTrack
                ? window.doNotTrack
                : "unknown";
            },
            getTouchSupport: function () {
              var e = 0,
                t = !1;
              void 0 !== navigator.maxTouchPoints
                ? (e = navigator.maxTouchPoints)
                : void 0 !== navigator.msMaxTouchPoints &&
                  (e = navigator.msMaxTouchPoints);
              try {
                document.createEvent("TouchEvent"), (t = !0);
              } catch (e) {}
              return [e, t, "ontouchstart" in window];
            },
            getCanvasFp: function () {
              var e = [],
                t = document.createElement("canvas");
              (t.width = 2e3), (t.height = 200), (t.style.display = "inline");
              var n = t.getContext("2d");
              return (
                n.rect(0, 0, 10, 10),
                n.rect(2, 2, 6, 6),
                e.push(
                  "canvas winding:" +
                    (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")
                ),
                (n.textBaseline = "alphabetic"),
                (n.fillStyle = "#f60"),
                n.fillRect(125, 1, 62, 20),
                (n.fillStyle = "#069"),
                this.options.dontUseFakeFontInCanvas
                  ? (n.font = "11pt Arial")
                  : (n.font = "11pt no-real-font-123"),
                n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
                (n.fillStyle = "rgba(102, 204, 0, 0.2)"),
                (n.font = "18pt Arial"),
                n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
                (n.globalCompositeOperation = "multiply"),
                (n.fillStyle = "rgb(255,0,255)"),
                n.beginPath(),
                n.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                n.closePath(),
                n.fill(),
                (n.fillStyle = "rgb(0,255,255)"),
                n.beginPath(),
                n.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                n.closePath(),
                n.fill(),
                (n.fillStyle = "rgb(255,255,0)"),
                n.beginPath(),
                n.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                n.closePath(),
                n.fill(),
                (n.fillStyle = "rgb(255,0,255)"),
                n.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                n.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                n.fill("evenodd"),
                t.toDataURL && e.push("canvas fp:" + t.toDataURL()),
                e.join("~")
              );
            },
            getWebglFp: function () {
              var e,
                t = function (t) {
                  return (
                    e.clearColor(0, 0, 0, 1),
                    e.enable(e.DEPTH_TEST),
                    e.depthFunc(e.LEQUAL),
                    e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                    "[" + t[0] + ", " + t[1] + "]"
                  );
                };
              if (!(e = this.getWebglCanvas())) return null;
              var n = [],
                i = e.createBuffer();
              e.bindBuffer(e.ARRAY_BUFFER, i);
              var o = new Float32Array([
                -0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0,
              ]);
              e.bufferData(e.ARRAY_BUFFER, o, e.STATIC_DRAW),
                (i.itemSize = 3),
                (i.numItems = 3);
              var r = e.createProgram(),
                a = e.createShader(e.VERTEX_SHADER);
              e.shaderSource(
                a,
                "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
              ),
                e.compileShader(a);
              var s = e.createShader(e.FRAGMENT_SHADER);
              e.shaderSource(
                s,
                "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
              ),
                e.compileShader(s),
                e.attachShader(r, a),
                e.attachShader(r, s),
                e.linkProgram(r),
                e.useProgram(r),
                (r.vertexPosAttrib = e.getAttribLocation(r, "attrVertex")),
                (r.offsetUniform = e.getUniformLocation(r, "uniformOffset")),
                e.enableVertexAttribArray(r.vertexPosArray),
                e.vertexAttribPointer(
                  r.vertexPosAttrib,
                  i.itemSize,
                  e.FLOAT,
                  !1,
                  0,
                  0
                ),
                e.uniform2f(r.offsetUniform, 1, 1),
                e.drawArrays(e.TRIANGLE_STRIP, 0, i.numItems);
              try {
                n.push(e.canvas.toDataURL());
              } catch (e) {}
              n.push(
                "extensions:" + (e.getSupportedExtensions() || []).join(";")
              ),
                n.push(
                  "webgl aliased line width range:" +
                    t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))
                ),
                n.push(
                  "webgl aliased point size range:" +
                    t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))
                ),
                n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
                n.push(
                  "webgl antialiasing:" +
                    (e.getContextAttributes().antialias ? "yes" : "no")
                ),
                n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
                n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
                n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
                n.push(
                  "webgl max anisotropy:" +
                    (function (e) {
                      var t =
                        e.getExtension("EXT_texture_filter_anisotropic") ||
                        e.getExtension(
                          "WEBKIT_EXT_texture_filter_anisotropic"
                        ) ||
                        e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                      if (t) {
                        var n = e.getParameter(
                          t.MAX_TEXTURE_MAX_ANISOTROPY_EXT
                        );
                        return 0 === n && (n = 2), n;
                      }
                      return null;
                    })(e)
                ),
                n.push(
                  "webgl max combined texture image units:" +
                    e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
                ),
                n.push(
                  "webgl max cube map texture size:" +
                    e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
                ),
                n.push(
                  "webgl max fragment uniform vectors:" +
                    e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
                ),
                n.push(
                  "webgl max render buffer size:" +
                    e.getParameter(e.MAX_RENDERBUFFER_SIZE)
                ),
                n.push(
                  "webgl max texture image units:" +
                    e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
                ),
                n.push(
                  "webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)
                ),
                n.push(
                  "webgl max varying vectors:" +
                    e.getParameter(e.MAX_VARYING_VECTORS)
                ),
                n.push(
                  "webgl max vertex attribs:" +
                    e.getParameter(e.MAX_VERTEX_ATTRIBS)
                ),
                n.push(
                  "webgl max vertex texture image units:" +
                    e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
                ),
                n.push(
                  "webgl max vertex uniform vectors:" +
                    e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)
                ),
                n.push(
                  "webgl max viewport dims:" +
                    t(e.getParameter(e.MAX_VIEWPORT_DIMS))
                ),
                n.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
                n.push("webgl renderer:" + e.getParameter(e.RENDERER)),
                n.push(
                  "webgl shading language version:" +
                    e.getParameter(e.SHADING_LANGUAGE_VERSION)
                ),
                n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
                n.push("webgl vendor:" + e.getParameter(e.VENDOR)),
                n.push("webgl version:" + e.getParameter(e.VERSION));
              try {
                var c = e.getExtension("WEBGL_debug_renderer_info");
                c &&
                  (n.push(
                    "webgl unmasked vendor:" +
                      e.getParameter(c.UNMASKED_VENDOR_WEBGL)
                  ),
                  n.push(
                    "webgl unmasked renderer:" +
                      e.getParameter(c.UNMASKED_RENDERER_WEBGL)
                  ));
              } catch (e) {}
              return e.getShaderPrecisionFormat
                ? (n.push(
                    "webgl vertex shader high float precision:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
                        .precision
                  ),
                  n.push(
                    "webgl vertex shader high float precision rangeMin:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
                        .rangeMin
                  ),
                  n.push(
                    "webgl vertex shader high float precision rangeMax:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
                        .rangeMax
                  ),
                  n.push(
                    "webgl vertex shader medium float precision:" +
                      e.getShaderPrecisionFormat(
                        e.VERTEX_SHADER,
                        e.MEDIUM_FLOAT
                      ).precision
                  ),
                  n.push(
                    "webgl vertex shader medium float precision rangeMin:" +
                      e.getShaderPrecisionFormat(
                        e.VERTEX_SHADER,
                        e.MEDIUM_FLOAT
                      ).rangeMin
                  ),
                  n.push(
                    "webgl vertex shader medium float precision rangeMax:" +
                      e.getShaderPrecisionFormat(
                        e.VERTEX_SHADER,
                        e.MEDIUM_FLOAT
                      ).rangeMax
                  ),
                  n.push(
                    "webgl vertex shader low float precision:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                        .precision
                  ),
                  n.push(
                    "webgl vertex shader low float precision rangeMin:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                        .rangeMin
                  ),
                  n.push(
                    "webgl vertex shader low float precision rangeMax:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT)
                        .rangeMax
                  ),
                  n.push(
                    "webgl fragment shader high float precision:" +
                      e.getShaderPrecisionFormat(
                        e.FRAGMENT_SHADER,
                        e.HIGH_FLOAT
                      ).precision
                  ),
                  n.push(
                    "webgl fragment shader high float precision rangeMin:" +
                      e.getShaderPrecisionFormat(
                        e.FRAGMENT_SHADER,
                        e.HIGH_FLOAT
                      ).rangeMin
                  ),
                  n.push(
                    "webgl fragment shader high float precision rangeMax:" +
                      e.getShaderPrecisionFormat(
                        e.FRAGMENT_SHADER,
                        e.HIGH_FLOAT
                      ).rangeMax
                  ),
                  n.push(
                    "webgl fragment shader medium float precision:" +
                      e.getShaderPrecisionFormat(
                        e.FRAGMENT_SHADER,
                        e.MEDIUM_FLOAT
                      ).precision
                  ),
                  n.push(
                    "webgl fragment shader medium float precision rangeMin:" +
                      e.getShaderPrecisionFormat(
                        e.FRAGMENT_SHADER,
                        e.MEDIUM_FLOAT
                      ).rangeMin
                  ),
                  n.push(
                    "webgl fragment shader medium float precision rangeMax:" +
                      e.getShaderPrecisionFormat(
                        e.FRAGMENT_SHADER,
                        e.MEDIUM_FLOAT
                      ).rangeMax
                  ),
                  n.push(
                    "webgl fragment shader low float precision:" +
                      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT)
                        .precision
                  ),
                  n.push(
                    "webgl fragment shader low float precision rangeMin:" +
                      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT)
                        .rangeMin
                  ),
                  n.push(
                    "webgl fragment shader low float precision rangeMax:" +
                      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT)
                        .rangeMax
                  ),
                  n.push(
                    "webgl vertex shader high int precision:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                        .precision
                  ),
                  n.push(
                    "webgl vertex shader high int precision rangeMin:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                        .rangeMin
                  ),
                  n.push(
                    "webgl vertex shader high int precision rangeMax:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT)
                        .rangeMax
                  ),
                  n.push(
                    "webgl vertex shader medium int precision:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT)
                        .precision
                  ),
                  n.push(
                    "webgl vertex shader medium int precision rangeMin:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT)
                        .rangeMin
                  ),
                  n.push(
                    "webgl vertex shader medium int precision rangeMax:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT)
                        .rangeMax
                  ),
                  n.push(
                    "webgl vertex shader low int precision:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                        .precision
                  ),
                  n.push(
                    "webgl vertex shader low int precision rangeMin:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                        .rangeMin
                  ),
                  n.push(
                    "webgl vertex shader low int precision rangeMax:" +
                      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT)
                        .rangeMax
                  ),
                  n.push(
                    "webgl fragment shader high int precision:" +
                      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT)
                        .precision
                  ),
                  n.push(
                    "webgl fragment shader high int precision rangeMin:" +
                      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT)
                        .rangeMin
                  ),
                  n.push(
                    "webgl fragment shader high int precision rangeMax:" +
                      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT)
                        .rangeMax
                  ),
                  n.push(
                    "webgl fragment shader medium int precision:" +
                      e.getShaderPrecisionFormat(
                        e.FRAGMENT_SHADER,
                        e.MEDIUM_INT
                      ).precision
                  ),
                  n.push(
                    "webgl fragment shader medium int precision rangeMin:" +
                      e.getShaderPrecisionFormat(
                        e.FRAGMENT_SHADER,
                        e.MEDIUM_INT
                      ).rangeMin
                  ),
                  n.push(
                    "webgl fragment shader medium int precision rangeMax:" +
                      e.getShaderPrecisionFormat(
                        e.FRAGMENT_SHADER,
                        e.MEDIUM_INT
                      ).rangeMax
                  ),
                  n.push(
                    "webgl fragment shader low int precision:" +
                      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                        .precision
                  ),
                  n.push(
                    "webgl fragment shader low int precision rangeMin:" +
                      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                        .rangeMin
                  ),
                  n.push(
                    "webgl fragment shader low int precision rangeMax:" +
                      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT)
                        .rangeMax
                  ),
                  n.join("~"))
                : n.join("~");
            },
            getWebglVendorAndRenderer: function () {
              try {
                var e = this.getWebglCanvas(),
                  t = e.getExtension("WEBGL_debug_renderer_info");
                return (
                  e.getParameter(t.UNMASKED_VENDOR_WEBGL) +
                  "~" +
                  e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                );
              } catch (e) {
                return null;
              }
            },
            getAdBlock: function () {
              var e = document.createElement("div");
              (e.innerHTML = "&nbsp;"), (e.className = "adsbox");
              var t = !1;
              try {
                document.body.appendChild(e),
                  (t =
                    0 ===
                    document.getElementsByClassName("adsbox")[0].offsetHeight),
                  document.body.removeChild(e);
              } catch (e) {
                t = !1;
              }
              return t;
            },
            getHasLiedLanguages: function () {
              if (void 0 !== navigator.languages)
                try {
                  if (
                    navigator.languages[0].substr(0, 2) !==
                    navigator.language.substr(0, 2)
                  )
                    return !0;
                } catch (e) {
                  return !0;
                }
              return !1;
            },
            getHasLiedResolution: function () {
              return (
                window.screen.width < window.screen.availWidth ||
                window.screen.height < window.screen.availHeight
              );
            },
            getHasLiedOs: function () {
              var e,
                t = navigator.userAgent.toLowerCase(),
                n = navigator.oscpu,
                i = navigator.platform.toLowerCase();
              e =
                t.indexOf("windows phone") >= 0
                  ? "Windows Phone"
                  : t.indexOf("win") >= 0
                  ? "Windows"
                  : t.indexOf("android") >= 0
                  ? "Android"
                  : t.indexOf("linux") >= 0
                  ? "Linux"
                  : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0
                  ? "iOS"
                  : t.indexOf("mac") >= 0
                  ? "Mac"
                  : "Other";
              if (
                ("ontouchstart" in window ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0) &&
                "Windows Phone" !== e &&
                "Android" !== e &&
                "iOS" !== e &&
                "Other" !== e
              )
                return !0;
              if (void 0 !== n) {
                if (
                  ((n = n.toLowerCase()),
                  n.indexOf("win") >= 0 &&
                    "Windows" !== e &&
                    "Windows Phone" !== e)
                )
                  return !0;
                if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e)
                  return !0;
                if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e)
                  return !0;
                if (
                  (-1 === n.indexOf("win") &&
                    -1 === n.indexOf("linux") &&
                    -1 === n.indexOf("mac")) !=
                  ("Other" === e)
                )
                  return !0;
              }
              return (
                (i.indexOf("win") >= 0 &&
                  "Windows" !== e &&
                  "Windows Phone" !== e) ||
                ((i.indexOf("linux") >= 0 ||
                  i.indexOf("android") >= 0 ||
                  i.indexOf("pike") >= 0) &&
                  "Linux" !== e &&
                  "Android" !== e) ||
                ((i.indexOf("mac") >= 0 ||
                  i.indexOf("ipad") >= 0 ||
                  i.indexOf("ipod") >= 0 ||
                  i.indexOf("iphone") >= 0) &&
                  "Mac" !== e &&
                  "iOS" !== e) ||
                (-1 === i.indexOf("win") &&
                  -1 === i.indexOf("linux") &&
                  -1 === i.indexOf("mac")) !=
                  ("Other" === e) ||
                (void 0 === navigator.plugins &&
                  "Windows" !== e &&
                  "Windows Phone" !== e)
              );
            },
            getHasLiedBrowser: function () {
              var e,
                t = navigator.userAgent.toLowerCase(),
                n = navigator.productSub;
              if (
                ("Chrome" ===
                  (e =
                    t.indexOf("firefox") >= 0
                      ? "Firefox"
                      : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0
                      ? "Opera"
                      : t.indexOf("chrome") >= 0
                      ? "Chrome"
                      : t.indexOf("safari") >= 0
                      ? "Safari"
                      : t.indexOf("trident") >= 0
                      ? "Internet Explorer"
                      : "Other") ||
                  "Safari" === e ||
                  "Opera" === e) &&
                "20030107" !== n
              )
                return !0;
              var i = eval.toString().length;
              if (
                37 === i &&
                "Safari" !== e &&
                "Firefox" !== e &&
                "Other" !== e
              )
                return !0;
              if (39 === i && "Internet Explorer" !== e && "Other" !== e)
                return !0;
              if (33 === i && "Chrome" !== e && "Opera" !== e && "Other" !== e)
                return !0;
              var o;
              try {
                throw "a";
              } catch (e) {
                try {
                  e.toSource(), (o = !0);
                } catch (e) {
                  o = !1;
                }
              }
              return !(!o || "Firefox" === e || "Other" === e);
            },
            isCanvasSupported: function () {
              var e = document.createElement("canvas");
              return !(!e.getContext || !e.getContext("2d"));
            },
            isWebGlSupported: function () {
              if (!this.isCanvasSupported()) return !1;
              var e = this.getWebglCanvas();
              return !!window.WebGLRenderingContext && !!e;
            },
            isIE: function () {
              return (
                "Microsoft Internet Explorer" === navigator.appName ||
                !(
                  "Netscape" !== navigator.appName ||
                  !/Trident/.test(navigator.userAgent)
                )
              );
            },
            hasSwfObjectLoaded: function () {
              return void 0 !== window.swfobject;
            },
            hasMinFlashInstalled: function () {
              return window.swfobject.hasFlashPlayerVersion("9.0.0");
            },
            addFlashDivNode: function () {
              var e = document.createElement("div");
              e.setAttribute("id", this.options.swfContainerId),
                document.body.appendChild(e);
            },
            loadSwfAndDetectFonts: function (e) {
              window.___fp_swf_loaded = function (t) {
                e(t);
              };
              var t = this.options.swfContainerId;
              this.addFlashDivNode();
              var n = { onReady: "___fp_swf_loaded" },
                i = { allowScriptAccess: "always", menu: "false" };
              window.swfobject.embedSWF(
                this.options.swfPath,
                t,
                "1",
                "1",
                "9.0.0",
                !1,
                n,
                i,
                {}
              );
            },
            getWebglCanvas: function () {
              var e = document.createElement("canvas"),
                t = null;
              try {
                t = e.getContext("webgl") || e.getContext("experimental-webgl");
              } catch (e) {}
              return t || (t = null), t;
            },
            each: function (e, t, n) {
              if (null !== e)
                if (this.nativeForEach && e.forEach === this.nativeForEach)
                  e.forEach(t, n);
                else if (e.length === +e.length) {
                  for (var i = 0, o = e.length; i < o; i++)
                    if (t.call(n, e[i], i, e) === {}) return;
                } else
                  for (var r in e)
                    if (e.hasOwnProperty(r) && t.call(n, e[r], r, e) === {})
                      return;
            },
            map: function (e, t, n) {
              var i = [];
              return null == e
                ? i
                : this.nativeMap && e.map === this.nativeMap
                ? e.map(t, n)
                : (this.each(e, function (e, o, r) {
                    i[i.length] = t.call(n, e, o, r);
                  }),
                  i);
            },
            x64Add: function (e, t) {
              (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
                (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
              var n = [0, 0, 0, 0];
              return (
                (n[3] += e[3] + t[3]),
                (n[2] += n[3] >>> 16),
                (n[3] &= 65535),
                (n[2] += e[2] + t[2]),
                (n[1] += n[2] >>> 16),
                (n[2] &= 65535),
                (n[1] += e[1] + t[1]),
                (n[0] += n[1] >>> 16),
                (n[1] &= 65535),
                (n[0] += e[0] + t[0]),
                (n[0] &= 65535),
                [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
              );
            },
            x64Multiply: function (e, t) {
              (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
                (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
              var n = [0, 0, 0, 0];
              return (
                (n[3] += e[3] * t[3]),
                (n[2] += n[3] >>> 16),
                (n[3] &= 65535),
                (n[2] += e[2] * t[3]),
                (n[1] += n[2] >>> 16),
                (n[2] &= 65535),
                (n[2] += e[3] * t[2]),
                (n[1] += n[2] >>> 16),
                (n[2] &= 65535),
                (n[1] += e[1] * t[3]),
                (n[0] += n[1] >>> 16),
                (n[1] &= 65535),
                (n[1] += e[2] * t[2]),
                (n[0] += n[1] >>> 16),
                (n[1] &= 65535),
                (n[1] += e[3] * t[1]),
                (n[0] += n[1] >>> 16),
                (n[1] &= 65535),
                (n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]),
                (n[0] &= 65535),
                [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
              );
            },
            x64Rotl: function (e, t) {
              return (
                (t %= 64),
                32 === t
                  ? [e[1], e[0]]
                  : t < 32
                  ? [
                      (e[0] << t) | (e[1] >>> (32 - t)),
                      (e[1] << t) | (e[0] >>> (32 - t)),
                    ]
                  : ((t -= 32),
                    [
                      (e[1] << t) | (e[0] >>> (32 - t)),
                      (e[0] << t) | (e[1] >>> (32 - t)),
                    ])
              );
            },
            x64LeftShift: function (e, t) {
              return (
                (t %= 64),
                0 === t
                  ? e
                  : t < 32
                  ? [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t]
                  : [e[1] << (t - 32), 0]
              );
            },
            x64Xor: function (e, t) {
              return [e[0] ^ t[0], e[1] ^ t[1]];
            },
            x64Fmix: function (e) {
              return (
                (e = this.x64Xor(e, [0, e[0] >>> 1])),
                (e = this.x64Multiply(e, [4283543511, 3981806797])),
                (e = this.x64Xor(e, [0, e[0] >>> 1])),
                (e = this.x64Multiply(e, [3301882366, 444984403])),
                (e = this.x64Xor(e, [0, e[0] >>> 1]))
              );
            },
            x64hash128: function (e, t) {
              (e = e || ""), (t = t || 0);
              for (
                var n = e.length % 16,
                  i = e.length - n,
                  o = [0, t],
                  r = [0, t],
                  a = [0, 0],
                  s = [0, 0],
                  c = [2277735313, 289559509],
                  l = [1291169091, 658871167],
                  u = 0;
                u < i;
                u += 16
              )
                (a = [
                  (255 & e.charCodeAt(u + 4)) |
                    ((255 & e.charCodeAt(u + 5)) << 8) |
                    ((255 & e.charCodeAt(u + 6)) << 16) |
                    ((255 & e.charCodeAt(u + 7)) << 24),
                  (255 & e.charCodeAt(u)) |
                    ((255 & e.charCodeAt(u + 1)) << 8) |
                    ((255 & e.charCodeAt(u + 2)) << 16) |
                    ((255 & e.charCodeAt(u + 3)) << 24),
                ]),
                  (s = [
                    (255 & e.charCodeAt(u + 12)) |
                      ((255 & e.charCodeAt(u + 13)) << 8) |
                      ((255 & e.charCodeAt(u + 14)) << 16) |
                      ((255 & e.charCodeAt(u + 15)) << 24),
                    (255 & e.charCodeAt(u + 8)) |
                      ((255 & e.charCodeAt(u + 9)) << 8) |
                      ((255 & e.charCodeAt(u + 10)) << 16) |
                      ((255 & e.charCodeAt(u + 11)) << 24),
                  ]),
                  (a = this.x64Multiply(a, c)),
                  (a = this.x64Rotl(a, 31)),
                  (a = this.x64Multiply(a, l)),
                  (o = this.x64Xor(o, a)),
                  (o = this.x64Rotl(o, 27)),
                  (o = this.x64Add(o, r)),
                  (o = this.x64Add(
                    this.x64Multiply(o, [0, 5]),
                    [0, 1390208809]
                  )),
                  (s = this.x64Multiply(s, l)),
                  (s = this.x64Rotl(s, 33)),
                  (s = this.x64Multiply(s, c)),
                  (r = this.x64Xor(r, s)),
                  (r = this.x64Rotl(r, 31)),
                  (r = this.x64Add(r, o)),
                  (r = this.x64Add(
                    this.x64Multiply(r, [0, 5]),
                    [0, 944331445]
                  ));
              switch (((a = [0, 0]), (s = [0, 0]), n)) {
                case 15:
                  s = this.x64Xor(
                    s,
                    this.x64LeftShift([0, e.charCodeAt(u + 14)], 48)
                  );
                case 14:
                  s = this.x64Xor(
                    s,
                    this.x64LeftShift([0, e.charCodeAt(u + 13)], 40)
                  );
                case 13:
                  s = this.x64Xor(
                    s,
                    this.x64LeftShift([0, e.charCodeAt(u + 12)], 32)
                  );
                case 12:
                  s = this.x64Xor(
                    s,
                    this.x64LeftShift([0, e.charCodeAt(u + 11)], 24)
                  );
                case 11:
                  s = this.x64Xor(
                    s,
                    this.x64LeftShift([0, e.charCodeAt(u + 10)], 16)
                  );
                case 10:
                  s = this.x64Xor(
                    s,
                    this.x64LeftShift([0, e.charCodeAt(u + 9)], 8)
                  );
                case 9:
                  (s = this.x64Xor(s, [0, e.charCodeAt(u + 8)])),
                    (s = this.x64Multiply(s, l)),
                    (s = this.x64Rotl(s, 33)),
                    (s = this.x64Multiply(s, c)),
                    (r = this.x64Xor(r, s));
                case 8:
                  a = this.x64Xor(
                    a,
                    this.x64LeftShift([0, e.charCodeAt(u + 7)], 56)
                  );
                case 7:
                  a = this.x64Xor(
                    a,
                    this.x64LeftShift([0, e.charCodeAt(u + 6)], 48)
                  );
                case 6:
                  a = this.x64Xor(
                    a,
                    this.x64LeftShift([0, e.charCodeAt(u + 5)], 40)
                  );
                case 5:
                  a = this.x64Xor(
                    a,
                    this.x64LeftShift([0, e.charCodeAt(u + 4)], 32)
                  );
                case 4:
                  a = this.x64Xor(
                    a,
                    this.x64LeftShift([0, e.charCodeAt(u + 3)], 24)
                  );
                case 3:
                  a = this.x64Xor(
                    a,
                    this.x64LeftShift([0, e.charCodeAt(u + 2)], 16)
                  );
                case 2:
                  a = this.x64Xor(
                    a,
                    this.x64LeftShift([0, e.charCodeAt(u + 1)], 8)
                  );
                case 1:
                  (a = this.x64Xor(a, [0, e.charCodeAt(u)])),
                    (a = this.x64Multiply(a, c)),
                    (a = this.x64Rotl(a, 31)),
                    (a = this.x64Multiply(a, l)),
                    (o = this.x64Xor(o, a));
              }
              return (
                (o = this.x64Xor(o, [0, e.length])),
                (r = this.x64Xor(r, [0, e.length])),
                (o = this.x64Add(o, r)),
                (r = this.x64Add(r, o)),
                (o = this.x64Fmix(o)),
                (r = this.x64Fmix(r)),
                (o = this.x64Add(o, r)),
                (r = this.x64Add(r, o)),
                ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) +
                  ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) +
                  ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) +
                  ("00000000" + (r[1] >>> 0).toString(16)).slice(-8)
              );
            },
          }),
            "object" === n(e) && void 0 !== t && (e.exports = i);
        })(window);
      }.call(t, n(1)(e)));
    },
  ]);
});
