import $http from './index'

export function login (data) {
  return $http({
    url: '/login',
    method: 'post',
    data: data
  })
}
// 获取用户信息
export function getUserInfo (data) {
  return $http({
    url: '/getUserinfo',
    method: 'get',
    data: data
  })
}
