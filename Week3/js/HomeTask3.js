import { newsApiEndPoint } from "./Endpoints.js";
import getChannels from "./GetListOfChannels.js";

var channels = getChannels();
var result;
function setResult() {
  console.log("result", result);
}
channels.then((val) => {
  result = val;
  setResult();
});

setTimeout(()=>{console.log(result)},2000);