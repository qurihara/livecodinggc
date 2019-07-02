function createWsClient(aUrl, aDev){
    var tClients = null;
    tClient = new WebSocket(`${aUrl}/${aDev}`);
    tClient.onopen = function(e){
        console.info(`[${aDev}] is online`)
    };
    tClient.onerror = function(e){
        console.info(`[${aDev}] is offline`)
    };
	tClient.onmessage = function ( event ) {
      if (event && event.data) {
      		console.log(event.data);
      }
	}
    return tClient;
}

// Create WebSocket clients
const node_red_server = location.hostname;
const port = 1880;
const protocol = "ws";
const name = "gamepad";
const tWsHost = getQueryParam("wshost", node_red_server);
const tWsPort = getQueryParam("wsport", port);
const tWsProtocol = getQueryParam("wsprot", protocol);
const tWsName = getQueryParam("wsname", name);
const tWsUrl = `${tWsProtocol}://${tWsHost}:${tWsPort}`;
console.info("Websocket host url = " +  tWsUrl);

WS_CLIENTS = createWsClient(tWsUrl, tWsName);

function send(dsl){
  WS_CLIENTS.send(JSON.stringify(dsl));
}
