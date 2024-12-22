/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/counter.js":
/*!**********************************!*\
  !*** ./assets/src/js/counter.js ***!
  \**********************************/
/***/ (() => {

eval("jQuery(function ($) {\n  // CONFIG\n  let visibilityIds = ['#counters_1', '#counters_2', '#counters_3', '#counters_4', '#counters_5', '#counters_6', '#counters_7', '#counters_8', '#counters_9', '#counters_10', '#counters_11', '#counters_12', '#counters_13', '#counters_14', '#counters_15']; //must be an array, could have only one element\n  let counterClass = '.counter';\n  let defaultSpeed = 3000; //default value\n\n  // END CONFIG\n\n  //init if it becomes visible by scrolling\n  $(window).on('scroll', function () {\n    getVisibilityStatus();\n  });\n\n  //init if it's visible by page loading\n  getVisibilityStatus();\n  function getVisibilityStatus() {\n    elValFromTop = [];\n    var windowHeight = $(window).height(),\n      windowScrollValFromTop = $(this).scrollTop();\n    visibilityIds.forEach(function (item, index) {\n      //Call each class\n      try {\n        //avoid error if class not exist\n        elValFromTop[index] = Math.ceil($(item).offset().top);\n      } catch (err) {\n        return;\n      }\n      if (windowHeight + windowScrollValFromTop > elValFromTop[index]) {\n        counter_init(item);\n      }\n    });\n  }\n  function counter_init(groupId) {\n    let num,\n      speed,\n      direction,\n      index = 0;\n    $(counterClass).each(function () {\n      num = $(this).attr('data-TargetNum');\n      speed = $(this).attr('data-Speed');\n      direction = $(this).attr('data-Direction');\n      easing = $(this).attr('data-Easing');\n      if (speed == undefined) speed = defaultSpeed;\n      $(this).addClass('c_' + index); //add a class to recognize each counter\n      doCount(num, index, speed, groupId, direction, easing);\n      index++;\n    });\n  }\n  function doCount(num, index, speed, groupClass, direction, easing) {\n    let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;\n    if (easing == undefined) easing = \"swing\";\n    $(className).animate({\n      num\n    }, {\n      duration: +speed,\n      easing: easing,\n      step: function (now) {\n        if (direction == 'reverse') {\n          $(this).text(num - Math.floor(now));\n        } else {\n          $(this).text(Math.floor(now));\n        }\n      },\n      complete: doCount\n    });\n  }\n});\n\n//# sourceURL=webpack://elementor-magic-kit/./assets/src/js/counter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/src/js/counter.js"]();
/******/ 	
/******/ })()
;