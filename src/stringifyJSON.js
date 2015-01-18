// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  // if(obj == null){
  // 	return "null";
  // }else if(typeof(obj) == 'string' || typeof(obj)  == 'object'){
  // 	return '"'+obj.toString()+'"';
  // }
  var stack = [];
  var repeat = function(current) {
  	if(typeof(current) === 'string'){
  		stack.push('"'+current+'"');
  	}else if(current == null){
  		stack.push('null');
  	}else if($.isArray(current)){
  		stack.push('[');
  		for (var i = 0; i < current.length; i++){
  			repeat(current[i]);
  			if(current.length-1 != i){
  				stack.push(',');
  			}
  		}
  		stack.push(']');
  	}else{
  		stack.push(current);
  	}
  };
  repeat(obj);
  return stack.join("");
};
