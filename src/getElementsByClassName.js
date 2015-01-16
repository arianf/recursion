// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var elements = [];
  var body = document.body;

  var repeat = function (current){

    /* Check to see if element is not text */
    if(typeof(current.classList) != 'undefined'){

      /* Check to see if elemnt containts className */
      if(current.classList.contains(className)){
        elements.push(current);
      }

      current = current.childNodes;
      /* Cycle through current's nodes, using current array length */
      for (var i = 0; i < current.length; i++) {
        repeat(current[i]);
      }
    }
  };
  
  repeat(body);

  return elements;
};
