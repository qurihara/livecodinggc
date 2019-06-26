$x = async function()
{
//  console.log(arguments)
    for(let i = 0; i < arguments.length; i++) {
      	if (Array.isArray(arguments[i]) === true){
          for(let j = 0;j < arguments[i].length;j++){
	            await $x(arguments[i][j])
          }
        }else{
          let ary = []
          ary[0] = arguments[i]
//          console.log(ary)
          await send(ary)
        }
    }
}

function wait(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
}

du = function(_t){
      return {"dur":_t};
}

dp = function(_t){
      return {"dpad":_t};
}

bn = function(_b){
  if (Array.isArray(_b) === true){
    return {"btn":_b};
  }else{
    let a = [];
    a[0] = _b;
    return {"btn":a}
  }
}
