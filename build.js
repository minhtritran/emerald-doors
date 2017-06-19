var ssi = require("ssi");
var ncp = require("ncp");

var SOURCE_DIR = ".";
var BUILD_DIR = "./build";
var MATCHER = "/*.html";
 
var includes = new ssi(SOURCE_DIR, BUILD_DIR, MATCHER);
includes.compile();

var CSS_DIR = "/css";
var JS_DIR = "/js";
var FILES_DIR = "/files";
var IMAGES_DIR = "/images";

ncp(SOURCE_DIR + CSS_DIR, BUILD_DIR + CSS_DIR, function (err) {
	if (err) {
		return console.error(err);
	}
});

ncp(SOURCE_DIR + JS_DIR, BUILD_DIR + JS_DIR, function (err) {
	if (err) {
		return console.error(err);
	}
});

ncp(SOURCE_DIR + FILES_DIR, BUILD_DIR + FILES_DIR, function (err) {
	if (err) {
		return console.error(err);
	}
});

ncp(SOURCE_DIR + IMAGES_DIR, BUILD_DIR + IMAGES_DIR, function (err) {
	if (err) {
		return console.error(err);
	}
});