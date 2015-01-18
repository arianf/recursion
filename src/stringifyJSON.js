// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  var stack = [];

  var repeat = function(current) {

    /* for string values */
    if(typeof(current) === 'string'){
      stack.push('"'+current+'"');
    
    /* for null values */
    }else if(current == null){
      stack.push('null');

    /* for array values */
    }else if($.isArray(current)){
      stack.push('[');
      for (var i = 0; i < current.length; i++){
        repeat(current[i]);
        if(current.length-1 != i){
          stack.push(',');
        }
      }
      stack.push(']');

    /* for object values */
    }else if($.isPlainObject(current)){
      stack.push('{');

      for(var prop in current){
        if(typeof(current[prop]) != 'undefined' && typeof(current[prop]) != 'function'){
          stack.push('"'+prop + '":');
          repeat(current[prop]);
          stack.push(',');
        }
      }

      /* pop if last array was a comma */
      if(stack[stack.length-1] == ','){
        stack.pop();
      }

      stack.push('}');

    /* for everything else */
    }else{
      stack.push(current);
    }
  };

  repeat(obj);

  return stack.join('');
};
