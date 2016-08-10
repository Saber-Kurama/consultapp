require('dotenv').load()
console.log(process.env);
const app = {
  settings: {
    authRoot: JSON.stringify(process.env.AUTH_ROOT),
    apiRoot: JSON.stringify(process.env.API_ROOT),
    webRoot: JSON.stringify(process.env.WEB_ROOT),
    consultRoot: JSON.stringify(process.env.CONSULT_ROOT),
    session: { ttl: 24 * 60 * 60 * 1000 }
  }
}
export default {
  app
}
