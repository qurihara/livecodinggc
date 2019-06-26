function s(dsl){
  send(dsl);
}
function wait(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
}

$x = async function()
{
    for(let i = 0; i < arguments.length; i++) {
      	if (Array.sArray(arguments[i]) === true){
            await $x(arguments[i])
        }else{
          await send(arguments[i])
        }
    }
}

t = function(_t){
      return {"dur":_t};
}
dp = function(_t){
      return {"dpad":_t};
}
