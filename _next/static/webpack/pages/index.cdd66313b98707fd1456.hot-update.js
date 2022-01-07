/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; },\n/* harmony export */   \"technologies\": function() { return /* binding */ technologies; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: 'Pedestrian Classifier',\n  description: \"An OpenCV Project Developed using the Pretrained Mobilenet-COCO model to identify pedestrians and measure distance between them accurately and fast.Without Loss of generality the program’s use can be extended to identify any moving object.\",\n  image: 'https://user-images.githubusercontent.com/58656351/113976457-d0102980-985e-11eb-880e-3e1373b9c83c.jpg',\n  tags: ['OpenCV', 'Python', 'Mobilenet-COCO', 'ML'],\n  source: 'https://github.com/trivik261/Pedestrian_Distance_Classifier',\n  visit: 'https://google.com',\n  id: 0\n}, {\n  title: 'Diameter-Estimation-of-Retinal-Vessels',\n  description: \"An OpenCV Project Developed to segment retinal blood vessels from fundus images and measure the diameter of the blood vessel.\",\n  image: 'https://github.com/trivik261/Blood-Vessel-Diameter-Measurement-Using-OpenCV/blob/main/Sample_Output.png?raw=true',\n  tags: ['OpenCV', 'Python'],\n  source: 'https://github.com/trivik261/Blood-Vessel-Diameter-Measurement-Using-OpenCV',\n  visit: 'https://google.com',\n  id: 1\n}, {\n  title: 'Image Classifier for Flowers',\n  description: \"Developed A Classification Model capable of classifying different flower types using the ”102 Category Flower Dataset” and Resnet50 Model.\",\n  image: '/images/3.png',\n  tags: ['ResNet', 'ML', 'Python', 'Classification-Model'],\n  source: 'https://github.com/trivik261/Image-Classifier-using-Pytorch',\n  visit: 'https://google.com',\n  id: 2\n}, {\n  title: 'Geolocation Tracker',\n  description: \"Developed a Program that identifies the user’s location by their IP address and simulates the working of static NAT As Part of the ”Computer Networks and Operating System” Course based on the concept NAT.\",\n  image: '/images/4.jpg',\n  tags: ['OS', 'Computer Networks', 'Network Address Translation'],\n  source: 'https://github.com/YogaVicky/Geolocation-Tracker.git',\n  visit: 'https://google.com',\n  id: 3\n}];\nvar TimeLineData = [{\n  year: 2017,\n  text: 'Started my journey'\n}, {\n  year: 2018,\n  text: 'Worked as a freelance developer'\n}, {\n  year: 2019,\n  text: 'Founded JavaScript Mastery'\n}, {\n  year: 2020,\n  text: 'Shared my projects with the world'\n}, {\n  year: 2021,\n  text: 'Started my own platform'\n}];\nvar technologies = [{\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'HTML/CSS'\n}, {\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'JavaScript'\n}, {\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'React'\n}, {\n  title: 'Back-End',\n  icon: 'DiFirebase',\n  tech: 'PHP'\n}, {\n  title: 'Back-End',\n  icon: 'DiFirebase',\n  tech: 'SQL'\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiLCJ0ZWNobm9sb2dpZXMiLCJpY29uIiwidGVjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsdUJBRFQ7QUFFRUMsYUFBVyxFQUFFLGlQQUZmO0FBR0lDLE9BQUssRUFBRSx1R0FIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVUsUUFBVixFQUFtQixnQkFBbkIsRUFBb0MsSUFBcEMsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsNkRBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSx3Q0FEVDtBQUVFQyxhQUFXLEVBQUMsK0hBRmQ7QUFHRUMsT0FBSyxFQUFFLGtIQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVSxRQUFWLENBSlI7QUFLRUMsUUFBTSxFQUFFLDZFQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLDhCQURUO0FBRUVDLGFBQVcsRUFBRSw0SUFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFnQixRQUFoQixFQUF5QixzQkFBekIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsNkRBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLHFCQURUO0FBRUVDLGFBQVcsRUFBRSw4TUFGZjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sbUJBQVAsRUFBNEIsNkJBQTVCLENBSlI7QUFLRUMsUUFBTSxFQUFFLHNEQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTVCc0IsQ0FBakI7QUF1Q0EsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FMMEIsQ0FBckI7QUFRQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBQ1YsT0FBSyxFQUFDLFdBQVA7QUFBb0JXLE1BQUksRUFBQyxZQUF6QjtBQUFzQ0MsTUFBSSxFQUFDO0FBQTNDLENBRDBCLEVBRTFCO0FBQUNaLE9BQUssRUFBQyxXQUFQO0FBQW9CVyxNQUFJLEVBQUMsWUFBekI7QUFBc0NDLE1BQUksRUFBQztBQUEzQyxDQUYwQixFQUcxQjtBQUFDWixPQUFLLEVBQUMsV0FBUDtBQUFvQlcsTUFBSSxFQUFDLFlBQXpCO0FBQXNDQyxNQUFJLEVBQUM7QUFBM0MsQ0FIMEIsRUFJMUI7QUFBQ1osT0FBSyxFQUFDLFVBQVA7QUFBbUJXLE1BQUksRUFBQyxZQUF4QjtBQUFxQ0MsTUFBSSxFQUFDO0FBQTFDLENBSjBCLEVBSzFCO0FBQUNaLE9BQUssRUFBQyxVQUFQO0FBQW1CVyxNQUFJLEVBQUMsWUFBeEI7QUFBcUNDLE1BQUksRUFBQztBQUExQyxDQUwwQixDQUFyQiIsImZpbGUiOiIuL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdQZWRlc3RyaWFuIENsYXNzaWZpZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFuIE9wZW5DViBQcm9qZWN0IERldmVsb3BlZCB1c2luZyB0aGUgUHJldHJhaW5lZCBNb2JpbGVuZXQtQ09DTyBtb2RlbCB0byBpZGVudGlmeSBwZWRlc3RyaWFucyBhbmQgbWVhc3VyZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gYWNjdXJhdGVseSBhbmQgZmFzdC5XaXRob3V0IExvc3Mgb2YgZ2VuZXJhbGl0eSB0aGUgcHJvZ3JhbeKAmXMgdXNlIGNhbiBiZSBleHRlbmRlZCB0byBpZGVudGlmeSBhbnkgbW92aW5nIG9iamVjdC5cIixcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNTg2NTYzNTEvMTEzOTc2NDU3LWQwMTAyOTgwLTk4NWUtMTFlYi04ODBlLTNlMTM3M2I5YzgzYy5qcGcnLFxuICAgICAgdGFnczogWydPcGVuQ1YnLCdQeXRob24nLCdNb2JpbGVuZXQtQ09DTycsJ01MJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3RyaXZpazI2MS9QZWRlc3RyaWFuX0Rpc3RhbmNlX0NsYXNzaWZpZXInLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRGlhbWV0ZXItRXN0aW1hdGlvbi1vZi1SZXRpbmFsLVZlc3NlbHMnLFxuICAgIGRlc2NyaXB0aW9uOlwiQW4gT3BlbkNWIFByb2plY3QgRGV2ZWxvcGVkIHRvIHNlZ21lbnQgcmV0aW5hbCBibG9vZCB2ZXNzZWxzIGZyb20gZnVuZHVzIGltYWdlcyBhbmQgbWVhc3VyZSB0aGUgZGlhbWV0ZXIgb2YgdGhlIGJsb29kIHZlc3NlbC5cIixcbiAgICBpbWFnZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cml2aWsyNjEvQmxvb2QtVmVzc2VsLURpYW1ldGVyLU1lYXN1cmVtZW50LVVzaW5nLU9wZW5DVi9ibG9iL21haW4vU2FtcGxlX091dHB1dC5wbmc/cmF3PXRydWUnLFxuICAgIHRhZ3M6IFsnT3BlbkNWJywnUHl0aG9uJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3RyaXZpazI2MS9CbG9vZC1WZXNzZWwtRGlhbWV0ZXItTWVhc3VyZW1lbnQtVXNpbmctT3BlbkNWJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0ltYWdlIENsYXNzaWZpZXIgZm9yIEZsb3dlcnMnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCBBIENsYXNzaWZpY2F0aW9uIE1vZGVsIGNhcGFibGUgb2YgY2xhc3NpZnlpbmcgZGlmZmVyZW50IGZsb3dlciB0eXBlcyB1c2luZyB0aGUg4oCdMTAyIENhdGVnb3J5IEZsb3dlciBEYXRhc2V04oCdIGFuZCBSZXNuZXQ1MCBNb2RlbC5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy8zLnBuZycsXG4gICAgICB0YWdzOiBbJ1Jlc05ldCcsICdNTCcsJ1B5dGhvbicsJ0NsYXNzaWZpY2F0aW9uLU1vZGVsJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3RyaXZpazI2MS9JbWFnZS1DbGFzc2lmaWVyLXVzaW5nLVB5dG9yY2gnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnR2VvbG9jYXRpb24gVHJhY2tlcicsXG4gICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIGEgUHJvZ3JhbSB0aGF0IGlkZW50aWZpZXMgdGhlIHVzZXLigJlzIGxvY2F0aW9uIGJ5IHRoZWlyIElQIGFkZHJlc3MgYW5kIHNpbXVsYXRlcyB0aGUgd29ya2luZyBvZiBzdGF0aWMgTkFUIEFzIFBhcnQgb2YgdGhlIOKAnUNvbXB1dGVyIE5ldHdvcmtzIGFuZCBPcGVyYXRpbmcgU3lzdGVt4oCdIENvdXJzZSBiYXNlZCBvbiB0aGUgY29uY2VwdCBOQVQuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzQuanBnJyxcbiAgICB0YWdzOiBbJ09TJywgJ0NvbXB1dGVyIE5ldHdvcmtzJywgJ05ldHdvcmsgQWRkcmVzcyBUcmFuc2xhdGlvbiddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Zb2dhVmlja3kvR2VvbG9jYXRpb24tVHJhY2tlci5naXQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxNywgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScsIH0sXG4gIHsgeWVhcjogMjAxOCwgdGV4dDogJ1dvcmtlZCBhcyBhIGZyZWVsYW5jZSBkZXZlbG9wZXInLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScsIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1NoYXJlZCBteSBwcm9qZWN0cyB3aXRoIHRoZSB3b3JsZCcsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1N0YXJ0ZWQgbXkgb3duIHBsYXRmb3JtJywgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB0ZWNobm9sb2dpZXMgPSBbXG4gIHt0aXRsZTonRnJvbnQtRW5kJywgaWNvbjonRGlGaXJlYmFzZScsdGVjaDonSFRNTC9DU1MnfSxcbiAge3RpdGxlOidGcm9udC1FbmQnLCBpY29uOidEaUZpcmViYXNlJyx0ZWNoOidKYXZhU2NyaXB0J30sXG4gIHt0aXRsZTonRnJvbnQtRW5kJywgaWNvbjonRGlGaXJlYmFzZScsdGVjaDonUmVhY3QnfSxcbiAge3RpdGxlOidCYWNrLUVuZCcsIGljb246J0RpRmlyZWJhc2UnLHRlY2g6J1BIUCd9LFxuICB7dGl0bGU6J0JhY2stRW5kJywgaWNvbjonRGlGaXJlYmFzZScsdGVjaDonU1FMJ30sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});