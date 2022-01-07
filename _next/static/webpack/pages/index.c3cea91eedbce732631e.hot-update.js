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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; },\n/* harmony export */   \"tech_wd\": function() { return /* binding */ tech_wd; },\n/* harmony export */   \"tech_lang\": function() { return /* binding */ tech_lang; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: 'Pedestrian Classifier',\n  description: \"An OpenCV Project Developed using the Pretrained Mobilenet-COCO model to identify pedestrians and measure distance between them accurately and fast.Without Loss of generality the program’s use can be extended to identify any moving object.\",\n  image: 'https://user-images.githubusercontent.com/58656351/113976457-d0102980-985e-11eb-880e-3e1373b9c83c.jpg',\n  tags: ['OpenCV', 'Python', 'Mobilenet-COCO', 'ML'],\n  source: 'https://github.com/trivik261/Pedestrian_Distance_Classifier',\n  visit: 'https://google.com',\n  id: 0\n}, {\n  title: 'Diameter-Estimation-of-Retinal-Vessels',\n  description: \"An OpenCV Project Developed to segment retinal blood vessels from fundus images and measure the diameter of the blood vessel.\",\n  image: 'https://github.com/trivik261/Blood-Vessel-Diameter-Measurement-Using-OpenCV/blob/main/Sample_Output.png?raw=true',\n  tags: ['OpenCV', 'Python'],\n  source: 'https://github.com/trivik261/Blood-Vessel-Diameter-Measurement-Using-OpenCV',\n  visit: 'https://google.com',\n  id: 1\n}, {\n  title: 'Image Classifier for Flowers',\n  description: \"Developed A Classification Model capable of classifying different flower types using the ”102 Category Flower Dataset” and Resnet50 Model.\",\n  image: '/images/3.png',\n  tags: ['ResNet', 'ML', 'Python', 'Classification-Model'],\n  source: 'https://github.com/trivik261/Image-Classifier-using-Pytorch',\n  visit: 'https://google.com',\n  id: 2\n}, {\n  title: 'Geolocation Tracker',\n  description: \"Developed a Program that identifies the user’s location by their IP address and simulates the working of static NAT As Part of the ”Computer Networks and Operating System” Course based on the concept NAT.\",\n  image: '/images/4.jpg',\n  tags: ['OS', 'Computer Networks', 'Network Address Translation'],\n  source: 'https://github.com/YogaVicky/Geolocation-Tracker.git',\n  visit: 'https://google.com',\n  id: 3\n}];\nvar TimeLineData = [{\n  year: 2017,\n  text: 'Started my journey'\n}, {\n  year: 2018,\n  text: 'Worked as a freelance developer'\n}, {\n  year: 2019,\n  text: 'Founded JavaScript Mastery'\n}, {\n  year: 2020,\n  text: 'Shared my projects with the world'\n}, {\n  year: 2021,\n  text: 'Started my own platform'\n}];\nvar tech_wd = [{\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'HTML/CSS'\n}, {\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'JavaScript'\n}, {\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'React'\n}, {\n  title: 'Back-End',\n  icon: 'DiFirebase',\n  tech: 'PHP'\n}, {\n  title: 'Back-End',\n  icon: 'DiFirebase',\n  tech: 'SQL'\n}, {\n  title: 'Back-End',\n  icon: 'DiFirebase',\n  tech: 'Flask'\n}];\nvar tech_lang = [{\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'C'\n}, {\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'C++'\n}, {\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'Python'\n}, {\n  title: 'Back-End',\n  icon: 'DiFirebase',\n  tech: 'Java'\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiLCJ0ZWNoX3dkIiwiaWNvbiIsInRlY2giLCJ0ZWNoX2xhbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sSUFBTUEsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUssRUFBRSx1QkFEVDtBQUVFQyxhQUFXLEVBQUUsaVBBRmY7QUFHSUMsT0FBSyxFQUFFLHVHQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVSxRQUFWLEVBQW1CLGdCQUFuQixFQUFvQyxJQUFwQyxDQUpWO0FBS0VDLFFBQU0sRUFBRSw2REFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLHdDQURUO0FBRUVDLGFBQVcsRUFBQywrSEFGZDtBQUdFQyxPQUFLLEVBQUUsa0hBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFVLFFBQVYsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsNkVBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTixPQUFLLEVBQUUsOEJBRFQ7QUFFRUMsYUFBVyxFQUFFLDRJQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWdCLFFBQWhCLEVBQXlCLHNCQUF6QixDQUpWO0FBS0VDLFFBQU0sRUFBRSw2REFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFTixPQUFLLEVBQUUscUJBRFQ7QUFFRUMsYUFBVyxFQUFFLDhNQUZmO0FBR0VDLE9BQUssRUFBRSxlQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLElBQUQsRUFBTyxtQkFBUCxFQUE0Qiw2QkFBNUIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsc0RBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUJzQixDQUFqQjtBQXVDQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQjtBQVFBLElBQU1DLE9BQU8sR0FBRyxDQUNyQjtBQUFDVixPQUFLLEVBQUMsV0FBUDtBQUFvQlcsTUFBSSxFQUFDLFlBQXpCO0FBQXNDQyxNQUFJLEVBQUM7QUFBM0MsQ0FEcUIsRUFFckI7QUFBQ1osT0FBSyxFQUFDLFdBQVA7QUFBb0JXLE1BQUksRUFBQyxZQUF6QjtBQUFzQ0MsTUFBSSxFQUFDO0FBQTNDLENBRnFCLEVBR3JCO0FBQUNaLE9BQUssRUFBQyxXQUFQO0FBQW9CVyxNQUFJLEVBQUMsWUFBekI7QUFBc0NDLE1BQUksRUFBQztBQUEzQyxDQUhxQixFQUlyQjtBQUFDWixPQUFLLEVBQUMsVUFBUDtBQUFtQlcsTUFBSSxFQUFDLFlBQXhCO0FBQXFDQyxNQUFJLEVBQUM7QUFBMUMsQ0FKcUIsRUFLckI7QUFBQ1osT0FBSyxFQUFDLFVBQVA7QUFBbUJXLE1BQUksRUFBQyxZQUF4QjtBQUFxQ0MsTUFBSSxFQUFDO0FBQTFDLENBTHFCLEVBTXJCO0FBQUNaLE9BQUssRUFBQyxVQUFQO0FBQW1CVyxNQUFJLEVBQUMsWUFBeEI7QUFBcUNDLE1BQUksRUFBQztBQUExQyxDQU5xQixDQUFoQjtBQVNBLElBQU1DLFNBQVMsR0FBRyxDQUN2QjtBQUFDYixPQUFLLEVBQUMsV0FBUDtBQUFvQlcsTUFBSSxFQUFDLFlBQXpCO0FBQXNDQyxNQUFJLEVBQUM7QUFBM0MsQ0FEdUIsRUFFdkI7QUFBQ1osT0FBSyxFQUFDLFdBQVA7QUFBb0JXLE1BQUksRUFBQyxZQUF6QjtBQUFzQ0MsTUFBSSxFQUFDO0FBQTNDLENBRnVCLEVBR3ZCO0FBQUNaLE9BQUssRUFBQyxXQUFQO0FBQW9CVyxNQUFJLEVBQUMsWUFBekI7QUFBc0NDLE1BQUksRUFBQztBQUEzQyxDQUh1QixFQUl2QjtBQUFDWixPQUFLLEVBQUMsVUFBUDtBQUFtQlcsTUFBSSxFQUFDLFlBQXhCO0FBQXFDQyxNQUFJLEVBQUM7QUFBMUMsQ0FKdUIsQ0FBbEIiLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnUGVkZXN0cmlhbiBDbGFzc2lmaWVyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJBbiBPcGVuQ1YgUHJvamVjdCBEZXZlbG9wZWQgdXNpbmcgdGhlIFByZXRyYWluZWQgTW9iaWxlbmV0LUNPQ08gbW9kZWwgdG8gaWRlbnRpZnkgcGVkZXN0cmlhbnMgYW5kIG1lYXN1cmUgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGFjY3VyYXRlbHkgYW5kIGZhc3QuV2l0aG91dCBMb3NzIG9mIGdlbmVyYWxpdHkgdGhlIHByb2dyYW3igJlzIHVzZSBjYW4gYmUgZXh0ZW5kZWQgdG8gaWRlbnRpZnkgYW55IG1vdmluZyBvYmplY3QuXCIsXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzU4NjU2MzUxLzExMzk3NjQ1Ny1kMDEwMjk4MC05ODVlLTExZWItODgwZS0zZTEzNzNiOWM4M2MuanBnJyxcbiAgICAgIHRhZ3M6IFsnT3BlbkNWJywnUHl0aG9uJywnTW9iaWxlbmV0LUNPQ08nLCdNTCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cml2aWsyNjEvUGVkZXN0cmlhbl9EaXN0YW5jZV9DbGFzc2lmaWVyJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0RpYW1ldGVyLUVzdGltYXRpb24tb2YtUmV0aW5hbC1WZXNzZWxzJyxcbiAgICBkZXNjcmlwdGlvbjpcIkFuIE9wZW5DViBQcm9qZWN0IERldmVsb3BlZCB0byBzZWdtZW50IHJldGluYWwgYmxvb2QgdmVzc2VscyBmcm9tIGZ1bmR1cyBpbWFnZXMgYW5kIG1lYXN1cmUgdGhlIGRpYW1ldGVyIG9mIHRoZSBibG9vZCB2ZXNzZWwuXCIsXG4gICAgaW1hZ2U6ICdodHRwczovL2dpdGh1Yi5jb20vdHJpdmlrMjYxL0Jsb29kLVZlc3NlbC1EaWFtZXRlci1NZWFzdXJlbWVudC1Vc2luZy1PcGVuQ1YvYmxvYi9tYWluL1NhbXBsZV9PdXRwdXQucG5nP3Jhdz10cnVlJyxcbiAgICB0YWdzOiBbJ09wZW5DVicsJ1B5dGhvbiddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cml2aWsyNjEvQmxvb2QtVmVzc2VsLURpYW1ldGVyLU1lYXN1cmVtZW50LVVzaW5nLU9wZW5DVicsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdJbWFnZSBDbGFzc2lmaWVyIGZvciBGbG93ZXJzJyxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgQSBDbGFzc2lmaWNhdGlvbiBNb2RlbCBjYXBhYmxlIG9mIGNsYXNzaWZ5aW5nIGRpZmZlcmVudCBmbG93ZXIgdHlwZXMgdXNpbmcgdGhlIOKAnTEwMiBDYXRlZ29yeSBGbG93ZXIgRGF0YXNldOKAnSBhbmQgUmVzbmV0NTAgTW9kZWwuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMy5wbmcnLFxuICAgICAgdGFnczogWydSZXNOZXQnLCAnTUwnLCdQeXRob24nLCdDbGFzc2lmaWNhdGlvbi1Nb2RlbCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cml2aWsyNjEvSW1hZ2UtQ2xhc3NpZmllci11c2luZy1QeXRvcmNoJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0dlb2xvY2F0aW9uIFRyYWNrZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCBhIFByb2dyYW0gdGhhdCBpZGVudGlmaWVzIHRoZSB1c2Vy4oCZcyBsb2NhdGlvbiBieSB0aGVpciBJUCBhZGRyZXNzIGFuZCBzaW11bGF0ZXMgdGhlIHdvcmtpbmcgb2Ygc3RhdGljIE5BVCBBcyBQYXJ0IG9mIHRoZSDigJ1Db21wdXRlciBOZXR3b3JrcyBhbmQgT3BlcmF0aW5nIFN5c3RlbeKAnSBDb3Vyc2UgYmFzZWQgb24gdGhlIGNvbmNlcHQgTkFULlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy80LmpwZycsXG4gICAgdGFnczogWydPUycsICdDb21wdXRlciBOZXR3b3JrcycsICdOZXR3b3JrIEFkZHJlc3MgVHJhbnNsYXRpb24nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vWW9nYVZpY2t5L0dlb2xvY2F0aW9uLVRyYWNrZXIuZ2l0JyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDMsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTcsIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXknLCB9LFxuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdXb3JrZWQgYXMgYSBmcmVlbGFuY2UgZGV2ZWxvcGVyJywgfSxcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnRm91bmRlZCBKYXZhU2NyaXB0IE1hc3RlcnknLCB9LFxuICB7IHllYXI6IDIwMjAsIHRleHQ6ICdTaGFyZWQgbXkgcHJvamVjdHMgd2l0aCB0aGUgd29ybGQnLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTdGFydGVkIG15IG93biBwbGF0Zm9ybScsIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgdGVjaF93ZCA9IFtcbiAge3RpdGxlOidGcm9udC1FbmQnLCBpY29uOidEaUZpcmViYXNlJyx0ZWNoOidIVE1ML0NTUyd9LFxuICB7dGl0bGU6J0Zyb250LUVuZCcsIGljb246J0RpRmlyZWJhc2UnLHRlY2g6J0phdmFTY3JpcHQnfSxcbiAge3RpdGxlOidGcm9udC1FbmQnLCBpY29uOidEaUZpcmViYXNlJyx0ZWNoOidSZWFjdCd9LFxuICB7dGl0bGU6J0JhY2stRW5kJywgaWNvbjonRGlGaXJlYmFzZScsdGVjaDonUEhQJ30sXG4gIHt0aXRsZTonQmFjay1FbmQnLCBpY29uOidEaUZpcmViYXNlJyx0ZWNoOidTUUwnfSxcbiAge3RpdGxlOidCYWNrLUVuZCcsIGljb246J0RpRmlyZWJhc2UnLHRlY2g6J0ZsYXNrJ30sXG5dO1xuXG5leHBvcnQgY29uc3QgdGVjaF9sYW5nID0gW1xuICB7dGl0bGU6J0Zyb250LUVuZCcsIGljb246J0RpRmlyZWJhc2UnLHRlY2g6J0MnfSxcbiAge3RpdGxlOidGcm9udC1FbmQnLCBpY29uOidEaUZpcmViYXNlJyx0ZWNoOidDKysnfSxcbiAge3RpdGxlOidGcm9udC1FbmQnLCBpY29uOidEaUZpcmViYXNlJyx0ZWNoOidQeXRob24nfSxcbiAge3RpdGxlOidCYWNrLUVuZCcsIGljb246J0RpRmlyZWJhc2UnLHRlY2g6J0phdmEnfSxcblxuXTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});