#!/usr/bin/env node

"use strict";

/***********************************************************************************************************************
 * modules
 */

const async = require("async");
const timer = require("exec-timer");

var x = 0;

main();

/***********************************************************************************************************************
 * functions
 */
function main() {
	console.log("Hello");
	
	async.forever(
		function(next) {
			timer.start("iteration");
			iteration();
			timer.end("iteration");
			console.log(timer.get("iteration"));
			next();
		},
		function(err) {
			console.log(`Oh noes! ${err}`);
		}
	);
}

function iteration() {
	x++;
}