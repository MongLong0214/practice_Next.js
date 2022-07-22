import axios from "axios";
var os = require("os");
var hostname = os.hostname();

const backendPortNumber = "9000";

const serverUrl = "http://" + "localhost" + ":" + backendPortNumber + "/";

async function get(endpoint: string, params = "") {
  return axios.get(serverUrl + endpoint + params);
}

export { get };
