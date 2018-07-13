import $http from './index'

export function login (data) {
  return $http({
    url: '/login',
    method: 'post',
    params: data
  })
}
// 获取用户权限信息
export function getUserInfo (data) {
  return $http({
    url: '/getUserinfo',
    method: 'get',
    params: data
  })
}
