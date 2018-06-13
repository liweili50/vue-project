import $http from './index'

export function login (data) {
  return $http({
    url: '/login',
    method: 'post',
    params: data
  })
}
// mmm
export function getUserInfo (data) {
  return $http({
    url: '/getUserinfo',
    method: 'get',
    params: data
  })
}
