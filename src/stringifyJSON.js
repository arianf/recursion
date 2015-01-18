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
  	if(typeof(obj) === 'string'){
  		stack.push('"'+obj+'"');
  	}else if(isArray(obj)){
  		stack.push('[');
  		for (var i = 0; i < obj.length; i++){
  			repeat(obj[i]);
  		}
  		stack.push(']');
  	}
  };
  repeat(obj);
  return stack.join();
};
