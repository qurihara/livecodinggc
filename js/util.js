function getQueryParam(aQuery, aDefault){
    const tUrlParams = new URLSearchParams(window.location.search);
    return (tUrlParams.has(aQuery)) ? tUrlParams.get(aQuery) : aDefault;
}

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

function s(ary){
  return send(ary);
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

loop = function(dsl,frames){
  let t = frames / 60 * 1000
  let id = setInterval(function(){$x(dsl)},t)
  $x(dsl)
  return id
}

unloop = function(id){
	clearInterval(id)
}
