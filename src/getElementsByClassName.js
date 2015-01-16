// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
  var elements = [];
  var body = document.body;
  // var current;

  var eval = function (current){
    
    /* If current containts, push */
    if(typeof(current.classList) != 'undefined'){
      if(current.classList.contains(className)){
        elements.push(current);
      }

      current = current.childNodes;
      for (var i = 0; i < current.length; i++) {
        eval(current[i]);
      }
    }

      // current = current.childNodes;

      /* Cycle through current list, using current array length */
      // for (var i = 0; i < current.length; i++) {

        /* Check to see if element is not text */
        // if(typeof(current[i].classList) != 'undefined'){

          /* Check to see if elemnt containts className */
          // if(current[i].classList.contains(className)){
            // elements.push(current[i]);
          // }
          // eval(current[i]);
        // }
      // }
  }
  eval(body);
  console.log(elements);
  return elements;
};
