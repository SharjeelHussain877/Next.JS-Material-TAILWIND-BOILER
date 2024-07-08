"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/framesync";
exports.ids = ["vendor-chunks/framesync"];
exports.modules = {

/***/ "(ssr)/./node_modules/framesync/dist/framesync.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.cjs.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nconst defaultTimestep = (1 / 60) * 1000;\nconst getCurrentTime = typeof performance !== \"undefined\"\n    ? () => performance.now()\n    : () => Date.now();\nconst onNextFrame = typeof window !== \"undefined\"\n    ? (callback) => window.requestAnimationFrame(callback)\n    : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);\n\nfunction createRenderStep(runNextFrame) {\n    let toRun = [];\n    let toRunNextFrame = [];\n    let numToRun = 0;\n    let isProcessing = false;\n    let flushNextFrame = false;\n    const toKeepAlive = new WeakSet();\n    const step = {\n        schedule: (callback, keepAlive = false, immediate = false) => {\n            const addToCurrentFrame = immediate && isProcessing;\n            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;\n            if (keepAlive)\n                toKeepAlive.add(callback);\n            if (buffer.indexOf(callback) === -1) {\n                buffer.push(callback);\n                if (addToCurrentFrame && isProcessing)\n                    numToRun = toRun.length;\n            }\n            return callback;\n        },\n        cancel: (callback) => {\n            const index = toRunNextFrame.indexOf(callback);\n            if (index !== -1)\n                toRunNextFrame.splice(index, 1);\n            toKeepAlive.delete(callback);\n        },\n        process: (frameData) => {\n            if (isProcessing) {\n                flushNextFrame = true;\n                return;\n            }\n            isProcessing = true;\n            [toRun, toRunNextFrame] = [toRunNextFrame, toRun];\n            toRunNextFrame.length = 0;\n            numToRun = toRun.length;\n            if (numToRun) {\n                for (let i = 0; i < numToRun; i++) {\n                    const callback = toRun[i];\n                    callback(frameData);\n                    if (toKeepAlive.has(callback)) {\n                        step.schedule(callback);\n                        runNextFrame();\n                    }\n                }\n            }\n            isProcessing = false;\n            if (flushNextFrame) {\n                flushNextFrame = false;\n                step.process(frameData);\n            }\n        },\n    };\n    return step;\n}\n\nconst maxElapsed = 40;\nlet useDefaultElapsed = true;\nlet runNextFrame = false;\nlet isProcessing = false;\nconst frame = {\n    delta: 0,\n    timestamp: 0,\n};\nconst stepsOrder = [\n    \"read\",\n    \"update\",\n    \"preRender\",\n    \"render\",\n    \"postRender\",\n];\nconst steps = stepsOrder.reduce((acc, key) => {\n    acc[key] = createRenderStep(() => (runNextFrame = true));\n    return acc;\n}, {});\nconst sync = stepsOrder.reduce((acc, key) => {\n    const step = steps[key];\n    acc[key] = (process, keepAlive = false, immediate = false) => {\n        if (!runNextFrame)\n            startLoop();\n        return step.schedule(process, keepAlive, immediate);\n    };\n    return acc;\n}, {});\nconst cancelSync = stepsOrder.reduce((acc, key) => {\n    acc[key] = steps[key].cancel;\n    return acc;\n}, {});\nconst flushSync = stepsOrder.reduce((acc, key) => {\n    acc[key] = () => steps[key].process(frame);\n    return acc;\n}, {});\nconst processStep = (stepId) => steps[stepId].process(frame);\nconst processFrame = (timestamp) => {\n    runNextFrame = false;\n    frame.delta = useDefaultElapsed\n        ? defaultTimestep\n        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);\n    frame.timestamp = timestamp;\n    isProcessing = true;\n    stepsOrder.forEach(processStep);\n    isProcessing = false;\n    if (runNextFrame) {\n        useDefaultElapsed = false;\n        onNextFrame(processFrame);\n    }\n};\nconst startLoop = () => {\n    runNextFrame = true;\n    useDefaultElapsed = true;\n    if (!isProcessing)\n        onNextFrame(processFrame);\n};\nconst getFrameData = () => frame;\n\nexports.cancelSync = cancelSync;\nexports[\"default\"] = sync;\nexports.flushSync = flushSync;\nexports.getFrameData = getFrameData;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZnJhbWVzeW5jLmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJQUFJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQixrQkFBZTtBQUNmLGlCQUFpQjtBQUNqQixvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZnJhbWVzeW5jLmNqcy5qcz83MDExIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3QgZGVmYXVsdFRpbWVzdGVwID0gKDEgLyA2MCkgKiAxMDAwO1xuY29uc3QgZ2V0Q3VycmVudFRpbWUgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCJcbiAgICA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xuY29uc3Qgb25OZXh0RnJhbWUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgPyAoY2FsbGJhY2spID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spXG4gICAgOiAoY2FsbGJhY2spID0+IHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soZ2V0Q3VycmVudFRpbWUoKSksIGRlZmF1bHRUaW1lc3RlcCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAocnVuTmV4dEZyYW1lKSB7XG4gICAgbGV0IHRvUnVuID0gW107XG4gICAgbGV0IHRvUnVuTmV4dEZyYW1lID0gW107XG4gICAgbGV0IG51bVRvUnVuID0gMDtcbiAgICBsZXQgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgbGV0IGZsdXNoTmV4dEZyYW1lID0gZmFsc2U7XG4gICAgY29uc3QgdG9LZWVwQWxpdmUgPSBuZXcgV2Vha1NldCgpO1xuICAgIGNvbnN0IHN0ZXAgPSB7XG4gICAgICAgIHNjaGVkdWxlOiAoY2FsbGJhY2ssIGtlZXBBbGl2ZSA9IGZhbHNlLCBpbW1lZGlhdGUgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRkVG9DdXJyZW50RnJhbWUgPSBpbW1lZGlhdGUgJiYgaXNQcm9jZXNzaW5nO1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gYWRkVG9DdXJyZW50RnJhbWUgPyB0b1J1biA6IHRvUnVuTmV4dEZyYW1lO1xuICAgICAgICAgICAgaWYgKGtlZXBBbGl2ZSlcbiAgICAgICAgICAgICAgICB0b0tlZXBBbGl2ZS5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGJ1ZmZlci5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGFkZFRvQ3VycmVudEZyYW1lICYmIGlzUHJvY2Vzc2luZylcbiAgICAgICAgICAgICAgICAgICAgbnVtVG9SdW4gPSB0b1J1bi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbDogKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICB0b1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdG9LZWVwQWxpdmUuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvY2VzczogKGZyYW1lRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2luZykge1xuICAgICAgICAgICAgICAgIGZsdXNoTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgW3RvUnVuLCB0b1J1bk5leHRGcmFtZV0gPSBbdG9SdW5OZXh0RnJhbWUsIHRvUnVuXTtcbiAgICAgICAgICAgIHRvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBudW1Ub1J1biA9IHRvUnVuLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChudW1Ub1J1bikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVG9SdW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRvUnVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhmcmFtZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwQWxpdmUuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcC5zY2hlZHVsZShjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5OZXh0RnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGZsdXNoTmV4dEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZmx1c2hOZXh0RnJhbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdGVwLnByb2Nlc3MoZnJhbWVEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBzdGVwO1xufVxuXG5jb25zdCBtYXhFbGFwc2VkID0gNDA7XG5sZXQgdXNlRGVmYXVsdEVsYXBzZWQgPSB0cnVlO1xubGV0IHJ1bk5leHRGcmFtZSA9IGZhbHNlO1xubGV0IGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuY29uc3QgZnJhbWUgPSB7XG4gICAgZGVsdGE6IDAsXG4gICAgdGltZXN0YW1wOiAwLFxufTtcbmNvbnN0IHN0ZXBzT3JkZXIgPSBbXG4gICAgXCJyZWFkXCIsXG4gICAgXCJ1cGRhdGVcIixcbiAgICBcInByZVJlbmRlclwiLFxuICAgIFwicmVuZGVyXCIsXG4gICAgXCJwb3N0UmVuZGVyXCIsXG5dO1xuY29uc3Qgc3RlcHMgPSBzdGVwc09yZGVyLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBhY2Nba2V5XSA9IGNyZWF0ZVJlbmRlclN0ZXAoKCkgPT4gKHJ1bk5leHRGcmFtZSA9IHRydWUpKTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuY29uc3Qgc3luYyA9IHN0ZXBzT3JkZXIucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGNvbnN0IHN0ZXAgPSBzdGVwc1trZXldO1xuICAgIGFjY1trZXldID0gKHByb2Nlc3MsIGtlZXBBbGl2ZSA9IGZhbHNlLCBpbW1lZGlhdGUgPSBmYWxzZSkgPT4ge1xuICAgICAgICBpZiAoIXJ1bk5leHRGcmFtZSlcbiAgICAgICAgICAgIHN0YXJ0TG9vcCgpO1xuICAgICAgICByZXR1cm4gc3RlcC5zY2hlZHVsZShwcm9jZXNzLCBrZWVwQWxpdmUsIGltbWVkaWF0ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuY29uc3QgY2FuY2VsU3luYyA9IHN0ZXBzT3JkZXIucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gc3RlcHNba2V5XS5jYW5jZWw7XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbmNvbnN0IGZsdXNoU3luYyA9IHN0ZXBzT3JkZXIucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gKCkgPT4gc3RlcHNba2V5XS5wcm9jZXNzKGZyYW1lKTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuY29uc3QgcHJvY2Vzc1N0ZXAgPSAoc3RlcElkKSA9PiBzdGVwc1tzdGVwSWRdLnByb2Nlc3MoZnJhbWUpO1xuY29uc3QgcHJvY2Vzc0ZyYW1lID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIHJ1bk5leHRGcmFtZSA9IGZhbHNlO1xuICAgIGZyYW1lLmRlbHRhID0gdXNlRGVmYXVsdEVsYXBzZWRcbiAgICAgICAgPyBkZWZhdWx0VGltZXN0ZXBcbiAgICAgICAgOiBNYXRoLm1heChNYXRoLm1pbih0aW1lc3RhbXAgLSBmcmFtZS50aW1lc3RhbXAsIG1heEVsYXBzZWQpLCAxKTtcbiAgICBmcmFtZS50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgaXNQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBzdGVwc09yZGVyLmZvckVhY2gocHJvY2Vzc1N0ZXApO1xuICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIGlmIChydW5OZXh0RnJhbWUpIHtcbiAgICAgICAgdXNlRGVmYXVsdEVsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgb25OZXh0RnJhbWUocHJvY2Vzc0ZyYW1lKTtcbiAgICB9XG59O1xuY29uc3Qgc3RhcnRMb29wID0gKCkgPT4ge1xuICAgIHJ1bk5leHRGcmFtZSA9IHRydWU7XG4gICAgdXNlRGVmYXVsdEVsYXBzZWQgPSB0cnVlO1xuICAgIGlmICghaXNQcm9jZXNzaW5nKVxuICAgICAgICBvbk5leHRGcmFtZShwcm9jZXNzRnJhbWUpO1xufTtcbmNvbnN0IGdldEZyYW1lRGF0YSA9ICgpID0+IGZyYW1lO1xuXG5leHBvcnRzLmNhbmNlbFN5bmMgPSBjYW5jZWxTeW5jO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3luYztcbmV4cG9ydHMuZmx1c2hTeW5jID0gZmx1c2hTeW5jO1xuZXhwb3J0cy5nZXRGcmFtZURhdGEgPSBnZXRGcmFtZURhdGE7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/framesync.cjs.js\n");

/***/ })

};
;