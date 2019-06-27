const obniz_id = "xxxx-xxxx";
const oid = getQueryParam("id", obniz_id);

var obniz = new Obniz(oid);
const GcOps = require('./gc-ops').GcOps;
obniz.onconnect = async function () {
	obniz.uart0.start({gnd:0, tx: 1, rx: 2});

	obniz.switch.onchange = function(state) {
		if (state === "push") {
			send([{"btn": {"8":true, "9":true, "10":true, "11":true}, "dur":-1}]);
		}
		if (state === "left") {
			send([{"dpad": 4, "dur":-1}]);
		}
		if (state === "right") {
			send([{"dpad": 6, "dur":-1}]);
		}
		if (state === "none") {
			let gc_word0 = {"dpad": 5, "dur":-1};
			let gc_word1 = {"btn": {"8":false, "9":false, "10":false, "11":false}, "dur":-1};
			let gc_sentence = null;
			gc_sentence = GcOps.concat(gc_sentence, gc_word0);
			gc_sentence = GcOps.concat(gc_sentence, gc_word1);
			send(gc_sentence);
		}
	}
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
