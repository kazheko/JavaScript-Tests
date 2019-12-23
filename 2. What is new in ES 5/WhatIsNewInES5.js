//Es5 strict vs Es5 default

//1. 	
	x = 5;
	"use strict";
	console.log(x);

	//a. 5
	//b. undefined
	//c. ReferenceError

//2. 	
	"use strict";
	x = 5;
	console.log(x);

	//a. 5
	//b. undefined
	//c. ReferenceError

//3. 	
	function sum(a, a, c) {
	  return a + a + c;
	}
	console.log(sum(1,2,3));

	//a. 6
	//b. 7
	//c. SyntaxError

//4. 
	function sum(a, a, c) {
	  "use strict";
	  return a + a + c;
	}
	console.log(sum(1,2,3));

	//a. 6
	//b. 7
	//c. SyntaxError

//Trailling commas

//1. 
	var arr = [1, 2, 3,,];
	console.log(arr.length);

	//a. 3
	//b. 4
	//c. SyntaxError

//2. 
	var obj = {a: 1, b: 2, c: 3,,}
	var properties = Object.keys(obj);
	console.log(properties.length);

	//a. 3
	//b. 4
	//c. SyntaxError

//Reserved words relaxation

//1. 
	var return = 9;
	console.log(return);

	//a. 9
	//b. SyntaxError
	//c. undefined

//2. 
	var obj = {
		return: true
	};
	console.log(obj.return);

	//a. true
	//b. SyntaxError
	//c. undefined

//Getters/setters

//1. 
	var language = {
	  set current(name) {
	    this.log.push(name);
	  },
	  get logCount(){
	  	return this.log.length;
	  },
	  log: []
	}

	language.current = 'EN';
	language.current = 'FA';

	console.log(language.logCount);

	//a. undefined
	//b. 0
	//c. 2

//2. 
	var language = {
		val: 'EN',
		get Current() {
			return this.val;
		}
	}

	language.Current = 'FR';
	console.log(language.Current);

	//a. FR
	//b. EN
	//c. ReferenceError

//3.
	var expr = 'Current';
	var language = {
			val: 'EN',
			set [expr](v) {
				this.val = v;
			}
		}

	language.Current = 'FR';
	console.log(language.val);

	//a. FR
	//b. EN
	//c. ReferenceError

//4.
	var val = 'EN';
	var language = {
		set Current(v) {
			val = v;
		}
	}

	language.Current = 'FR';
	console.log(val);

	//a. FR
	//b. EN
	//c. ReferenceError

//5.
	var language = {
		val: 'EN',
		get Current() {
			return this.Current;
		}
	}

	language.val = 'FR';
	console.log(language.Current);

	//a. FR
	//b. EN
	//c. RangeError

//Multiline string literals

//1. 
	var long_line = "This is a \ long line"; 

	console.log(long_line);

	//a. This is a \ long line
	//b. This is a  long line
	//c. This is a long line

//2. 
	var long_line = "This is a \
	long line"; 

	console.log(long_line);

	//a. This is a \ long line
	//b. This is a  long line
	//c. This is a long line
	//d. This is a
	//   long line

//3. 
	var long_line = "This is a \ 
	long line"; 

	console.log(long_line);

	//a. This is a \ long line
	//b. This is a  long line
	//c. This is a long line
	//d. This is a
	//   long line
	//e. SyntaxError

//Constants

//1. 
	var i = 3;
	const c = 3;
	console.log(window.i + window.c);

	//a.6
	//b.undefined
	//c.NaN

//2. 
	const f = function(a){ return a*a; };
	console.log(f(2));

	//a. SyntaxError
	//b. 4
	//c. 2

//3.
	const obj = {
		prop1: '1'
	};
	obj.prop1 = '2';
	console.log(obj.prop1);

	//a. 1
	//b. 2
	//c. TypeError

//parseInt optional radix

//1.
	var val = parseInt("0xF", 16);
	console.log(val);

	//a. 16
	//b. 10
	//c. 15

//2.
	var val = parseInt(021);
	console.log(val);

	//a. 17
	//b. 21
	//c. 15

//3.
	var val = parseInt("021");
	console.log(val);

	//a. 17
	//b. 21
	//c. 15

//JSON.parse and JSON.stringify

//1.
	var json = '{"a": 5, "b": "true", "c": null}';
	var obj = JSON.parse(json);
	console.log(obj);

	//a. {a: 5, b: true, c: null}
	//b. {a: '5', b: 'true', c: 'null'}
	//c. {a: 5, b: 'true', c: null}

//2.
	var json = JSON.stringify([1, 'false', false]);
	console.log(json);

	//a. '[1, "false", false]'
	//b. '["1", "false", "false"]'
	//c. SyntaxError


//Function: bind

//1.
	var obj = {
		x: 5	
	};
	var showMeX = function(){ console.log(this.x); }
	var x = 7;
	var boundedShowMeX = showMeX.bind(obj);
	boundedShowMeX();

	//a. 5
	//b. 7
	//c. undefined

//2.
	var showMeX = function(){ console.log(this.x); }
	var boundedShowMeX = showMeX.bind({x: 5}).bind({x: 7});
	boundedShowMeX();

	//a. 5
	//b. 7
	//c. undefined

//3.
	var showMeX = function(){ console.log(this.x); }
	showMeX.propY = 7;
	var boundedShowMeX = showMeX.bind({x: 5});
	console.log(boundedShowMeX.propY);

	//a. 5
	//b. 7
	//c. undefined

//4.
	var array1 = [1, 2, 3];
	var array2 = [4, 5, 6];
	
	var push = array1.push.bind(array1, array2);
	push(7);

	console.log(array1);

	//a. [1, 2, 3, 7]
	//b. [1, 2, 3, 4, 5, 6, 7]
	//c. [1, 2, 3, [4, 5, 6], 7]