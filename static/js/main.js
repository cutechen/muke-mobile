/**
 * Created by cutechen.
 */
"use strict";
var sp = {};
sp.tool = {};
sp.app = {};
sp.tool.scroll = function() {
    if (window.pageXOffset != null) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    if (document.compatMode == "CSS1Compat") {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
};
sp.tool.getClass = function(val) {
    return document.getElementsByClassName(val)[0];
};
sp.tool.addClass = function(obj, _className) {
    var className = obj.className;
    var splitName = className.split(" ");
    for (var k in splitName) {
        if (splitName[k] == _className) {
            return false;
        }
    }
    splitName.push(_className);
    var strName = splitName.join(" ");
    obj.className = strName;
};
sp.tool.removeClass = function(obj, _className) {
    var className = obj.className;
    var splitName = className.split(" ");
    for (var k in splitName) {
        if (splitName[k] == _className) {
            splitName.splice(k, 1);
        }
    }
    var strName = splitName.join(" ");
    obj.className = strName;
};
sp.app.scrollAnimate = function() {
    document.title = sp.tool.scroll().top;
    var current = sp.tool.scroll().top;
    var guides = document.querySelectorAll(".guide-item");
    var navAs = document.querySelectorAll(".nav-a");
    if (current >= 800 - 280) {
        sp.tool.addClass(sp.tool.getClass("screen-2-tt"), "animate-done");
        sp.tool.addClass(sp.tool.getClass("screen-2-intro"), "animate-done");
        sp.tool.addClass(sp.tool.getClass("screen-2-phone"), "animate-done");
        for (var i = 0; i < guides.length; i++) {
            guides[i].className = "guide-item";
            navAs[i].className = "nav-a";
        }
        guides[1].setAttribute("class", "guide-item active");
        navAs[1].setAttribute("class", "nav-a active");
    }
    if (current >= 2 * 800 - 280) {
        sp.tool.addClass(sp.tool.getClass("screen-3-tt"), "animate-done");
        sp.tool.addClass(sp.tool.getClass("screen-3-intro"), "animate-done");
        sp.tool.addClass(sp.tool.getClass("screen-3-features"), "animate-done-scale");
        sp.tool.addClass(sp.tool.getClass("screen-3-phone"), "animate-done");
        for (var i = 0; i < guides.length; i++) {
            guides[i].className = "guide-item";
            navAs[i].className = "nav-a";
        }
        guides[2].setAttribute("class", "guide-item active");
        navAs[2].setAttribute("class", "nav-a active");
    }
    if (current >= 3 * 800 -280) {
        sp.tool.addClass(sp.tool.getClass("screen-4-tt"), "animate-done");
        sp.tool.addClass(sp.tool.getClass("screen-4-intro"), "animate-done");
        sp.tool.addClass(sp.tool.getClass("screen-4-sort-red"), "animate-done");
        sp.tool.addClass(sp.tool.getClass("screen-4-sort-gold"), "animate-done");
        sp.tool.addClass(sp.tool.getClass("screen-4-sort-gray"), "animate-done");
        sp.tool.addClass(sp.tool.getClass("screen-4-sort-black"), "animate-done");
        for (var i = 0; i < guides.length; i++) {
            guides[i].className = "guide-item";
            navAs[i].className = "nav-a";
        }
        guides[3].setAttribute("class", "guide-item active");
        navAs[3].setAttribute("class", "nav-a active");
    }
    if (current >= 4 * 800 - 280) {
        sp.tool.addClass(sp.tool.getClass("screen-5-tt"), "animate-done");
        sp.tool.addClass(sp.tool.getClass("screen-5-intro"), "animate-done");
        sp.tool.addClass(sp.tool.getClass("screen-5-phone"), "animate-done");
        for (var i = 0; i < guides.length; i++) {
            guides[i].className = "guide-item";
            navAs[i].className = "nav-a";
        }
        guides[4].setAttribute("class", "guide-item active");
        navAs[4].setAttribute("class", "nav-a active");
    }
};
window.onscroll = function() {
    sp.app.scrollAnimate();
    var guides = document.querySelectorAll(".guide-item");
    var navAs = document.querySelectorAll(".nav-a");
    if (sp.tool.scroll().top == 0) {
        for (var i = 0; i < guides.length; i++) {
            guides[i].className = "guide-item";
            navAs[i].className = "nav-a";
        }
        guides[0].setAttribute("class", "guide-item active");
        navAs[0].setAttribute("class", "nav-a active");
    }
};
