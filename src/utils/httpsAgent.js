// import * as https from "https";
import https from "https";


const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export default httpsAgent;
