$x = async function()
{
    for(let i = 0; i < arguments.length; i++) {
      	if (Array.isArray(arguments[i]) === true){
            await $x(arguments[i])
        }else{
          await send(arguments[i])
        }
    }
}

function wait(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
}

t = function(_t){
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
