const obniz_id = "xxxx-xxxx";
const oid = getQueryParam("id", obniz_id);

var obniz = new Obniz.M5StickC(oid);
const GcOps = require('./gc-ops').GcOps;
obniz.onconnect = async function () {
		obniz.uart0.start({tx: 33, rx: 32});

    obniz.display.clear();
    obniz.display.print("Game");
    obniz.display.print("Controllerizer");
}

function send(gc_sentence){
  let binary_sentence = [];
  let total_bytes = 0;
  for (let gc_word of gc_sentence){
    var bytes = GcOps.toBytes(gc_word);
		binary_sentence = binary_sentence.concat(Array.from(bytes));
  }
  obniz.uart0.send(binary_sentence);
}
