import CallApi from './ApiData'
export function Get(endpoint) {
    return CallApi(endpoint, 'get');
  }
export function Post(endpoint, data) {
    return CallApi(endpoint, 'post', data);
 }
 
  