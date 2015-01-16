// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
  var elements = [];
  var body;
  var current;

  var eval = function (){
    if( typeof(body) == 'undefined' ){
      body = document.body;
      eval();
    }else{
      body = body.childNodes;

      // body.childNodes[3].nodeName.toLowerCase()
      for (var i = 0; i < body.length; i++) {
        
        console.log(i);


        if(typeof(body[i].classList) != 'undefined'){
          console.log(body[i]);
          console.log(body[i].classList.contains(className));
          if(body[i].classList.contains(className)){
            console.log("TEST");
            elements.push(body[i].nodeName.toLowerCase() + '.' + className);
            console.log("TEST2");
            console.log(elements);
          }
        }
        //   for(var x = 0; x < body[i].childNodes[i].classList.length; x++){
        //     if(body[i].childNodes[i].classList[x] == className){
        //       elements.push(body.childNodes[i].nodeName.toLowerCase() + '.' + className);
        //     }
        //   }
        // }
        // if(body[i].childNodes[i].length != 0){
        //   eval();
        // }
      }
    }
  }
  eval();
  console.log("END: ");
  console.log(elements);
  return elements;
  // return ['body.targetClassName', 'p.targetClassName'];

  // return array element.class
};
