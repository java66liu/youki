/// Youki Numeric Library
exports.apply = function(scope, runtime){
	scope['+'] = function(x, y, z){
		if(arguments.length === 0) return 0
		if(arguments.length === 1) return x - 0
		if(arguments.length === 2) return x + y
		if(arguments.length === 3) return x + y + z
		var result = x - 0;
		for(var j = 1; j < arguments.length; j++) {
			result += arguments[j] - 0
		}
		return result
	}
	scope['-'] = function(x, y, z){
		if(arguments.length === 0) return 0
		if(arguments.length === 1) return -x
		if(arguments.length === 2) return x - y
		if(arguments.length === 3) return x - y - z
		var result = x;
		for(var j = 1; j < arguments.length; j++) {
			result -= arguments[j]
		}
		return result
	}
	scope['*'] = function(x, y, z){
		if(arguments.length === 0) return 1
		if(arguments.length === 1) return x - 0
		if(arguments.length === 2) return x * y
		if(arguments.length === 3) return x * y * z
		var result = x;
		for(var j = 1; j < arguments.length; j++) {
			result *= arguments[j]
		}
		return result
	}
	scope['/'] = function(x, y, z){
		if(arguments.length === 0) return 1
		if(arguments.length === 1) return x - 0
		if(arguments.length === 2) return x / y
		if(arguments.length === 3) return x / y / z
		var result = x;
		for(var j = 1; j < arguments.length; j++) {
			result /= arguments[j]
		}
		return result
	}
	scope['='] = function(x, y, z){
		if(arguments.length === 0) return true
		if(arguments.length === 1) return x
		if(arguments.length === 2) return x == y
		if(arguments.length === 3) return x == y && y == z
		for(var j = 1; j < arguments.length; j++) {
			if(x !== arguments[j]) return false
		}
		return true
	}
	scope['!='] = function(x, y, z){
		if(arguments.length === 0) return true
		if(arguments.length === 1) return x
		if(arguments.length === 2) return x == y
		if(arguments.length === 3) return x == y && y == z
		for(var j = 1; j < arguments.length; j++) {
			if(x !== arguments[j]) return false
		}
		return true
	}
}