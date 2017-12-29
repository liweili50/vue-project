import $http from './index'

export function login (data) {
  return $http({
    url: '/login',
    method: 'post',
    params: data
  })
}

export function logout () {
  return $http({
    url: '/login/logout',
    method: 'post'
  })
}
