import API from 'lib/api'

function getHeaders() {
  const headers = {
    'Accept': 'application/json',
    // 这两种的优缺点在哪里呢???
    // 'Content-Type': 'application/json'
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  //if (session.authenticated()) {
  //  headers['Authorization'] = 'Bearer ' + session.token();
  //}

  return headers
}

export const url = app.settings.apiRoot
export default new API(url, getHeaders)
