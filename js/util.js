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

function wait(frames) {
    let t = frames / 60 * 1000;
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, frames);
    });
}

du = function(_t){
      return {"dur":_t};
}

f = function(_t){
  return du(_t);
}

dpad = function(_t){
      return {"dpad":_t};
}

dpadf = function(_t,fr){
  return [dpad(_t),f(fr)];
}

btn = function(_b){
  if (Array.isArray(_b) === true){
    return {"btn":_b};
  }else{
    let a = [];
    a[0] = _b;
    return {"btn":a}
  }
}

btnf = function(_b,fr){
  return [btn(_b),f(fr)];
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

repeat = function(dsl, ntimes){
  let d = [];
  for(let i = 0; i < ntimes; i++) d.push(dsl)
  $x(d)
}

$e = async function(player,dsl)
{
  send({"player":player,"dsl4gc":dsl})
}
