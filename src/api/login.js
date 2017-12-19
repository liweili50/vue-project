import http from './index'

export function login (data) {
  return http({
    url: './login',
    method: 'get',
    params: data
  })
}
