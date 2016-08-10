/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/24.
 */
import { autobind } from 'core-decorators'
import { stringify } from 'qs'
import fetch from 'isomorphic-fetch'
export default class Api {
  constructor (root, getHeaders = () => {
  }) {
    this.root = root
    this.getHeaders = getHeaders
  }

  // get 请求
  get (endpoint, params = {}, headers = {}) {
    params.stime = Date.now()
    return this.ajax(endpoint, 'get', {headers, params})
  }

  // post 请求
  post (endpoint, body, headers = {}) {
    return this.ajax(endpoint, 'post', {headers, body})
  }

  ajax (endpoint, method, data) {
    const { params, headers={}, body=null } = data
    //params.stime = Date.now();

    let requestUrl = this.url(endpoint, params)
    // if(body){
    //  requestUrl = this.url(endpoint, body);
    // }
    const requestHeaders = {
      ...this.getHeaders(),
      ...headers
    };
    let bodystr
    if (body) {
      bodystr = '';
      Object.keys(body).forEach((key) => {
        bodystr += `${key}=${body[key]}&`
      })
      bodystr = bodystr.substring(0, bodystr.length - 1)
      console.log('bodystr', bodystr)
    }
    console.log(`fetching ${requestUrl}, headers: `, requestHeaders)
    //alert(requestUrl)
    return fetch(requestUrl, {
      credentials: 'include',
      mode: 'cors',
      method,
      headers: requestHeaders,
      body: bodystr
    }).then(
      this.processResponse,
      this.processError
    )

  }

  url (endpoint, params) {
    const query = this.queryParams(params);
    return `${this.root}/${endpoint}${query}`
  }

  queryParams (params) {
    return params ? '?' + stringify(params) : ''
  }

  @autobind
  processResponse (response) {

    return new Promise((resolve, reject) => {
      // 这段代码是为了迎合后端的代码,而做了修改
      // 后台应该直接用 status 的状态码来做权限或者其他的校验,应该遵循http协议而不是自己写一个状态码
      if (response.ok) {
        const links = {}
        response.json().then(json => {
          if (json.code == 200 || json.code == 0) {
            resolve(json)
          } else if (json.code == 500 || json.code == 0) {
            //window.location.href = '/500';
            reject({
              status: json.code,
              message: json.message
            });
          }
          else if (json.code == 403 || json.code == 0) {
            window.location.href = '/403'

            reject({
              status: json.code,
              message: json.message
            })
          }
        })
      } else {
        reject({
          status: response.status,
          message: response.statusText
        })
      }
    })
  }

  @autobind
  processError (err) {
    return Promise.reject(err)
  }
}
