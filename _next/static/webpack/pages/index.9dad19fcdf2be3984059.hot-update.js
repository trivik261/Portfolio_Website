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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; },\n/* harmony export */   \"technologies\": function() { return /* binding */ technologies; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: 'Pedestrian Classifier',\n  description: \"An OpenCV Project Developed using the Pretrained Mobilenet-COCO model to identify pedestrians and measure distance between them accurately and fast.Without Loss of generality the program’s use can be extended to identify any moving object.\",\n  image: 'https://user-images.githubusercontent.com/58656351/113976457-d0102980-985e-11eb-880e-3e1373b9c83c.jpg',\n  tags: ['OpenCV', 'Python', 'Mobilenet-COCO', 'ML'],\n  source: 'https://github.com/trivik261/Pedestrian_Distance_Classifier',\n  visit: 'https://google.com',\n  id: 0\n}, {\n  title: 'Diameter-Estimation-of-Retinal-Vessels',\n  description: \"An OpenCV Project Developed to segment retinal blood vessels from fundus images and measure the diameter of the blood vessel.\",\n  image: 'https://github.com/trivik261/Blood-Vessel-Diameter-Measurement-Using-OpenCV/blob/main/Sample_Output.png?raw=true',\n  tags: ['OpenCV', 'Python'],\n  source: 'https://github.com/trivik261/Blood-Vessel-Diameter-Measurement-Using-OpenCV',\n  visit: 'https://google.com',\n  id: 1\n}, {\n  title: 'Image Classifier for Flowers',\n  description: \"Developed A Classification Model capable of classifying different flower types using the ”102 Category Flower Dataset” and Resnet50 Model.\",\n  image: '/images/3.png',\n  tags: ['ResNet', 'ML', 'Python', 'Classification-Model'],\n  source: 'https://github.com/trivik261/Image-Classifier-using-Pytorch',\n  visit: 'https://google.com',\n  id: 2\n}, {\n  title: 'Geolocation Tracker',\n  description: \"Developed a Program that identifies the user’s location by their IP address and simulates the working of static NAT As Part of the ”Computer Networks and Operating System” Course based on the concept NAT.\",\n  image: '/images/4.jpg',\n  tags: ['OS', 'Computer Networks', 'Network Address Translation'],\n  source: 'https://github.com/YogaVicky/Geolocation-Tracker.git',\n  visit: 'https://google.com',\n  id: 3\n}];\nvar TimeLineData = [{\n  year: 2017,\n  text: 'Started my journey'\n}, {\n  year: 2018,\n  text: 'Worked as a freelance developer'\n}, {\n  year: 2019,\n  text: 'Founded JavaScript Mastery'\n}, {\n  year: 2020,\n  text: 'Shared my projects with the world'\n}, {\n  year: 2021,\n  text: 'Started my own platform'\n}];\nvar technologies = [{\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'HTML/CSS'\n}, {\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'JavaScript'\n}, {\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'React'\n}, {\n  title: 'Front-End',\n  icon: 'DiFirebase',\n  tech: 'SQL'\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiLCJ0ZWNobm9sb2dpZXMiLCJpY29uIiwidGVjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsdUJBRFQ7QUFFRUMsYUFBVyxFQUFFLGlQQUZmO0FBR0lDLE9BQUssRUFBRSx1R0FIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVUsUUFBVixFQUFtQixnQkFBbkIsRUFBb0MsSUFBcEMsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsNkRBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSx3Q0FEVDtBQUVFQyxhQUFXLEVBQUMsK0hBRmQ7QUFHRUMsT0FBSyxFQUFFLGtIQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVSxRQUFWLENBSlI7QUFLRUMsUUFBTSxFQUFFLDZFQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLDhCQURUO0FBRUVDLGFBQVcsRUFBRSw0SUFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFnQixRQUFoQixFQUF5QixzQkFBekIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsNkRBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLHFCQURUO0FBRUVDLGFBQVcsRUFBRSw4TUFGZjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sbUJBQVAsRUFBNEIsNkJBQTVCLENBSlI7QUFLRUMsUUFBTSxFQUFFLHNEQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTVCc0IsQ0FBakI7QUF1Q0EsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FMMEIsQ0FBckI7QUFRQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBQ1YsT0FBSyxFQUFDLFdBQVA7QUFBb0JXLE1BQUksRUFBQyxZQUF6QjtBQUFzQ0MsTUFBSSxFQUFDO0FBQTNDLENBRDBCLEVBRTFCO0FBQUNaLE9BQUssRUFBQyxXQUFQO0FBQW9CVyxNQUFJLEVBQUMsWUFBekI7QUFBc0NDLE1BQUksRUFBQztBQUEzQyxDQUYwQixFQUcxQjtBQUFDWixPQUFLLEVBQUMsV0FBUDtBQUFvQlcsTUFBSSxFQUFDLFlBQXpCO0FBQXNDQyxNQUFJLEVBQUM7QUFBM0MsQ0FIMEIsRUFJMUI7QUFBQ1osT0FBSyxFQUFDLFdBQVA7QUFBb0JXLE1BQUksRUFBQyxZQUF6QjtBQUFzQ0MsTUFBSSxFQUFDO0FBQTNDLENBSjBCLENBQXJCIiwiZmlsZSI6Ii4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1BlZGVzdHJpYW4gQ2xhc3NpZmllcicsXG4gICAgZGVzY3JpcHRpb246IFwiQW4gT3BlbkNWIFByb2plY3QgRGV2ZWxvcGVkIHVzaW5nIHRoZSBQcmV0cmFpbmVkIE1vYmlsZW5ldC1DT0NPIG1vZGVsIHRvIGlkZW50aWZ5IHBlZGVzdHJpYW5zIGFuZCBtZWFzdXJlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBhY2N1cmF0ZWx5IGFuZCBmYXN0LldpdGhvdXQgTG9zcyBvZiBnZW5lcmFsaXR5IHRoZSBwcm9ncmFt4oCZcyB1c2UgY2FuIGJlIGV4dGVuZGVkIHRvIGlkZW50aWZ5IGFueSBtb3Zpbmcgb2JqZWN0LlwiLFxuICAgICAgaW1hZ2U6ICdodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS81ODY1NjM1MS8xMTM5NzY0NTctZDAxMDI5ODAtOTg1ZS0xMWViLTg4MGUtM2UxMzczYjljODNjLmpwZycsXG4gICAgICB0YWdzOiBbJ09wZW5DVicsJ1B5dGhvbicsJ01vYmlsZW5ldC1DT0NPJywnTUwnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vdHJpdmlrMjYxL1BlZGVzdHJpYW5fRGlzdGFuY2VfQ2xhc3NpZmllcicsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdEaWFtZXRlci1Fc3RpbWF0aW9uLW9mLVJldGluYWwtVmVzc2VscycsXG4gICAgZGVzY3JpcHRpb246XCJBbiBPcGVuQ1YgUHJvamVjdCBEZXZlbG9wZWQgdG8gc2VnbWVudCByZXRpbmFsIGJsb29kIHZlc3NlbHMgZnJvbSBmdW5kdXMgaW1hZ2VzIGFuZCBtZWFzdXJlIHRoZSBkaWFtZXRlciBvZiB0aGUgYmxvb2QgdmVzc2VsLlwiLFxuICAgIGltYWdlOiAnaHR0cHM6Ly9naXRodWIuY29tL3RyaXZpazI2MS9CbG9vZC1WZXNzZWwtRGlhbWV0ZXItTWVhc3VyZW1lbnQtVXNpbmctT3BlbkNWL2Jsb2IvbWFpbi9TYW1wbGVfT3V0cHV0LnBuZz9yYXc9dHJ1ZScsXG4gICAgdGFnczogWydPcGVuQ1YnLCdQeXRob24nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vdHJpdmlrMjYxL0Jsb29kLVZlc3NlbC1EaWFtZXRlci1NZWFzdXJlbWVudC1Vc2luZy1PcGVuQ1YnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSW1hZ2UgQ2xhc3NpZmllciBmb3IgRmxvd2VycycsXG4gICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIEEgQ2xhc3NpZmljYXRpb24gTW9kZWwgY2FwYWJsZSBvZiBjbGFzc2lmeWluZyBkaWZmZXJlbnQgZmxvd2VyIHR5cGVzIHVzaW5nIHRoZSDigJ0xMDIgQ2F0ZWdvcnkgRmxvd2VyIERhdGFzZXTigJ0gYW5kIFJlc25ldDUwIE1vZGVsLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzMucG5nJyxcbiAgICAgIHRhZ3M6IFsnUmVzTmV0JywgJ01MJywnUHl0aG9uJywnQ2xhc3NpZmljYXRpb24tTW9kZWwnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vdHJpdmlrMjYxL0ltYWdlLUNsYXNzaWZpZXItdXNpbmctUHl0b3JjaCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdHZW9sb2NhdGlvbiBUcmFja2VyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYSBQcm9ncmFtIHRoYXQgaWRlbnRpZmllcyB0aGUgdXNlcuKAmXMgbG9jYXRpb24gYnkgdGhlaXIgSVAgYWRkcmVzcyBhbmQgc2ltdWxhdGVzIHRoZSB3b3JraW5nIG9mIHN0YXRpYyBOQVQgQXMgUGFydCBvZiB0aGUg4oCdQ29tcHV0ZXIgTmV0d29ya3MgYW5kIE9wZXJhdGluZyBTeXN0ZW3igJ0gQ291cnNlIGJhc2VkIG9uIHRoZSBjb25jZXB0IE5BVC5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvNC5qcGcnLFxuICAgIHRhZ3M6IFsnT1MnLCAnQ29tcHV0ZXIgTmV0d29ya3MnLCAnTmV0d29yayBBZGRyZXNzIFRyYW5zbGF0aW9uJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL1lvZ2FWaWNreS9HZW9sb2NhdGlvbi1UcmFja2VyLmdpdCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAzLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnV29ya2VkIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlcicsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0ZvdW5kZWQgSmF2YVNjcmlwdCBNYXN0ZXJ5JywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RhcnRlZCBteSBvd24gcGxhdGZvcm0nLCB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHRlY2hub2xvZ2llcyA9IFtcbiAge3RpdGxlOidGcm9udC1FbmQnLCBpY29uOidEaUZpcmViYXNlJyx0ZWNoOidIVE1ML0NTUyd9LFxuICB7dGl0bGU6J0Zyb250LUVuZCcsIGljb246J0RpRmlyZWJhc2UnLHRlY2g6J0phdmFTY3JpcHQnfSxcbiAge3RpdGxlOidGcm9udC1FbmQnLCBpY29uOidEaUZpcmViYXNlJyx0ZWNoOidSZWFjdCd9LFxuICB7dGl0bGU6J0Zyb250LUVuZCcsIGljb246J0RpRmlyZWJhc2UnLHRlY2g6J1NRTCd9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});